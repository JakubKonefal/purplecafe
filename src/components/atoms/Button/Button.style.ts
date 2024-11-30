import { darken, em, readableColor, rem, rgba } from 'polished'
import styled, { css } from 'styled-components'

import { Link, LinkProps } from 'components/atoms/Link'

import { getColor } from 'utils/styled'
import { Transienty } from 'utils/types'

import { Color, Theme } from 'styles/theme'

import loadingIcon from 'assets/icons/loading.svg'

export type ButtonVariants = 'outline' | 'solid' | 'text'

type ButtonProps = Transienty<{
  loading?: boolean
  variant?: ButtonVariants
  color?: Color | undefined
  iconOnly?: boolean
  pointerEvents?: 'none' | 'auto'
  noShrink?: boolean
  fitWidth?: boolean
}> &
  Partial<Pick<LinkProps, 'to' | 'language' | 'ignoreLanguage'>>

export const setButtonColor = (
  theme: Theme,
  color?: Color,
  variant?: ButtonVariants,
  hover = false
) =>
  hover
    ? css`
        background: ${() =>
          variant === 'solid'
            ? darken(0.05, getColor(theme, color))
            : rgba(getColor(theme, color), color ? 1 : 0.03)};

        border-color: ${() =>
          variant === 'text'
            ? 'transparent'
            : variant === 'solid'
              ? darken(0.05, getColor(theme, color))
              : getColor(theme, color)};

        color: ${() =>
          variant === 'solid' || color
            ? readableColor(
                darken(0.05, getColor(theme, color)),
                theme.colors.black,
                theme.colors.white
              )
            : getColor(theme, color)};
      `
    : css`
        border: 1px solid
          ${() => (variant === 'text' ? 'transparent' : getColor(theme, color))};
        background: ${() =>
          variant === 'solid' ? getColor(theme, color) : 'transparent'};
        color: ${() =>
          variant === 'solid'
            ? readableColor(
                darken(0.05, String(getColor(theme, color))),
                theme.colors.black,
                theme.colors.white
              )
            : getColor(theme, color)};
      `

export const Button = styled.button.attrs<ButtonProps>(({ to }) => ({
  as: to ? Link : undefined,
}))`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${em(16)};

  text-align: center;
  padding: ${em(6)} ${({ $iconOnly }) => em($iconOnly ? 6 : 22)};

  border-radius: 100px;

  ${({ theme, $variant, $color }) => setButtonColor(theme, $color, $variant)};

  img {
    filter: ${({ theme, $color, $variant }) =>
      $variant === 'solid'
        ? readableColor(
            darken(0.05, String(getColor(theme, $color))),
            theme.colors.dark,
            theme.colors.white
          ) === theme.colors.dark
          ? 'brightness(0)'
          : 'brightness(0) invert(1)'
        : 'brightness(0)'};
  }
  svg *[fill] {
    fill: currentColor;
  }
  svg *[stroke] {
    stroke: currentColor;
  }

  font-size: ${rem(14)};
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;

  cursor: pointer;
  pointer-events: ${({ $pointerEvents, onClick }) =>
    ($pointerEvents ?? onClick) ? 'pointer' : 'auto'};

  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;

  ${({ $noShrink }) =>
    $noShrink &&
    css`
      flex-shrink: 0;
    `}

  ${({ $fitWidth }) =>
    $fitWidth &&
    css`
      width: fit-content;
    `}

  ${({ $loading, $color }) =>
    $loading &&
    css`
      opacity: 0.8;
      cursor: wait;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: ${({ theme }) => darken(0.05, getColor(theme, $color))};
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-image: url(${loadingIcon});
        background-size: auto 75%;
        background-position: center;
        background-repeat: no-repeat;
      }
    `};

  &[disabled] {
    opacity: 0.75;
    cursor: not-allowed;
  }

  &:hover {
    ${({ theme, $variant, $color }) =>
      setButtonColor(theme, $color, $variant, true)};
  }
`
