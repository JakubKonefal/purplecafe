import { rem } from 'polished'
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

import { generatePropMedia } from 'utils/styled'
import { BreakpointValue } from 'utils/types'

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(48)};

  position: relative;
  width: 100%;
  overscroll-behavior-x: none;
`

export const StyledSwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  overscroll-behavior-x: none;
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

export const StyledSwiper = styled(Swiper)<{
  $overflow: BreakpointValue<boolean>
}>`
  max-width: 100%;
  width: 100%;
  clip-path: inset(-100vw -100vw -100vw -100vw);
  overscroll-behavior-x: none;

  ${({ theme, $overflow = false }) =>
    generatePropMedia(
      theme,
      $overflow,
      (value) => css`
        overflow: ${value ? 'visible' : 'hidden'} !important;
      `
    )}
`

export const StyledSwiperSlide = styled(SwiperSlide)<{
  $autoWidth: boolean
}>`
  height: auto !important;

  ${({ $autoWidth }) =>
    $autoWidth &&
    css`
      width: auto !important;
    `}
`
