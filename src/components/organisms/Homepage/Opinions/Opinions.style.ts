import styled, { css } from 'styled-components'

import { Container } from 'components/atoms/Container'

import media from 'styles/media'

export const Section = styled.section`
  width: 100%;
  padding: 40px 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};

  ${media.xl.min} {
    padding: 80px 0;
  }
`
export const StyledContainer = styled(Container)`
  position: relative;
  width: 100%;
  max-width: 600px;
`

export const SwiperWrapper = styled.div`
  position: relative;
`

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
  margin-top: 20px;
`

export const Dot = styled.div<{ $active: boolean }>`
  width: 7px;
  min-width: 7px;
  height: 7px;
  min-height: 7px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};

  ${({ $active }) =>
    $active &&
    css`
      width: 8px;
      min-width: 8px;
      height: 8px;
      min-height: 8px;
      background-color: #510433;
    `}
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 4px;
  background-color: #a075cc;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  z-index: 1;
  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: #8e5cb5;
  }
`

export const ButtonLeft = styled(Button)`
  left: 16px;
  svg {
    transform: translateX(-1px);
  }

  ${media.lg.min} {
    bottom: unset;
    top: 50%;
    transform: translateX(-175%);
  }
`

export const ButtonRight = styled(Button)`
  right: 16px;
  svg {
    transform: translateX(1px);
  }

  ${media.lg.min} {
    bottom: unset;
    top: 50%;
    transform: translateX(175%);
  }
`
