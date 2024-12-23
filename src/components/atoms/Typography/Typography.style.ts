import { rem } from 'polished'
import styled, { CSSProperties, css } from 'styled-components'

import { generatePropMedia, getColor, iterateBreakpoints } from 'utils/styled'
import { BreakpointProps, BreakpointValue, Transienty } from 'utils/types'

import media from 'styles/media'
import { Color as ThemeColor } from 'styles/theme'

type TextProps = Transienty<
  BreakpointProps<ReturnType<typeof css>> & {
    color?: BreakpointValue<ThemeColor | 'inherit'>
    hoverColor?: BreakpointValue<ThemeColor | 'inherit'>
    align?: BreakpointValue<CSSProperties['textAlign']>
    transform?: CSSProperties['textTransform']
    cursor?: CSSProperties['cursor']
    oneLine?: boolean
    margin?: BreakpointValue<CSSProperties['margin']>
  }
>
export const Text = styled.p<TextProps>`
  cursor: ${({ $cursor }) => $cursor ?? 'inherit'};

  text-transform: ${({ $transform }) => $transform ?? 'none'};
  text-decoration: none;
  font-weight: 400;

  ${({ theme, $margin = 0 }) =>
    generatePropMedia(
      theme,
      $margin,
      (value) => css`
        margin: ${value};
      `
    )}

  ${({ theme, $align = 'left' }) =>
    generatePropMedia(
      theme,
      $align,
      (value) => css`
        text-align: ${value};
      `
    )}

  ${({ theme, $color = 'text' }) =>
    generatePropMedia(
      theme,
      $color,
      (value) => css`
        color: ${value === 'inherit' ? value : getColor(theme, value)};
      `
    )}

  &:hover {
    ${({ theme, $hoverColor }) =>
      $hoverColor &&
      generatePropMedia(
        theme,
        $hoverColor,
        (value) => css`
          color: ${value === 'inherit' ? value : getColor(theme, value)};
        `
      )}
  }

  ${({ $oneLine }) =>
    $oneLine &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ${(props) =>
    iterateBreakpoints(props.theme, props).map(
      ({ breakpoint, value }) => css`
        ${media[breakpoint].min} {
          ${value}
        }
      `
    )};
`

export const Weight = styled.span<{ $weight: CSSProperties['fontWeight'] }>`
  font-weight: ${({ $weight }) => $weight};
`

export const Color = styled.span<{ $color: ThemeColor }>`
  color: ${({ theme, $color }) => theme.colors[$color]};
`

export const Body14 = css`
  font-size: ${rem(14)};
`

export const Body15 = css`
  font-size: ${rem(15)};
`

export const Body16 = css`
  font-size: ${rem(16)};
`

export const Body18 = css`
  font-size: ${rem(18)};
  line-height: ${rem(22)};
`

export const Body20 = css`
  font-size: ${rem(20)};
  line-height: ${rem(24)};
`

export const Body26 = css`
  font-size: ${rem(26)};
`

export const Body22PatrickHand = css`
  font-size: ${rem(22)};
  font-family: 'PatrickHand', cursive;
  letter-spacing: 0.5px;
`

export const Body25 = css`
  font-size: ${rem(25)};
  line-height: ${rem(30)};
`

export const Body30 = css`
  font-size: ${rem(30)};
  line-height: ${rem(36)};
`

export const Body34 = css`
  font-size: ${rem(34)};
  line-height: ${rem(40)};
`

export const HeadingLobsterVerySmall = css`
  font-size: ${rem(30)};
  line-height: normal;
  font-family: 'Lobster', cursive;
`

export const HeadingLobsterSmall = css`
  font-size: ${rem(40)};
  line-height: ${rem(60)};
  font-family: 'Lobster', cursive;
`

export const HeadingLobster = css`
  font-size: ${rem(86)};
  line-height: ${rem(120)};
  font-family: 'Lobster', cursive;
`
