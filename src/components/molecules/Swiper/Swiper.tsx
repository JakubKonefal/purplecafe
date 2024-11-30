import React, { useEffect, useState } from 'react'
import { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Autoplay, Mousewheel } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

import { generateArrayOfElements } from 'utils/object'
import type { BreakpointValue, TypedOmit } from 'utils/types'

import {
  Dot,
  Dots,
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperWrapper,
  SwiperWrapper,
} from './Swiper.style'

export const DEFAULT_SWIPER_OPTIONS = {
  modules: [Mousewheel],
  mousewheel: { forceToAxis: true },
  grabCursor: true,

  slidesPerView: 'auto',
  spaceBetween: 16,
  edgeSwipeDetection: 'prevent',
  watchSlidesProgress: true,
} satisfies SwiperOptions

type SwiperProps<T> = {
  items: T[]
  renderItem: (
    item: T,
    options: { active: boolean; index: number; visible: boolean }
  ) => JSX.Element
  renderPlaceholder?: () => JSX.Element
  extractKey: (item: T, index: number) => string
  onSlideChange?: (swiper: SwiperInstance, currentIndex: number) => void
  onSwiper?: (swiper: SwiperInstance) => void
  swiperOptions?: TypedOmit<SwiperOptions, 'modules' | 'initialSlide'>

  withNavigation?: boolean
  withDots?: boolean
  navigationPositionY?: `${number}%`
  withAutoplay?: boolean

  loading?: boolean

  /** Slides overflows parent component, and are wider than parent. It's important to have overflow: none on the top component to prevent horizontal scroll on the website */
  overflow?: BreakpointValue<boolean>

  /** Allows slides to be scrolled even more (last one can reach left edge). Useful when showing some data based on current slide index. Without it last slide could not be selected as active slide. */
  overscroll?: boolean

  initialSlide?: number | null

  /** When slide is clicked swipers slides to it. */
  slideOnClick?: boolean
  preventDefaultOnSlideClick?: boolean
}

export const useSwiper = (loop = false) => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const onSwiperSlideChange = (index: number) => {
    setActiveSlide(index)
  }
  const onSwiperUpdate = (s: SwiperInstance) => {
    setSwiper(s)
    onSwiperSlideChange(s.activeIndex)
  }

  const nextSlide = () => {
    if (swiper?.isEnd && loop) {
      swiper?.slideTo(0)
    } else {
      swiper?.slideNext()
    }
  }

  const prevSlide = () => {
    if (swiper?.isBeginning && loop) {
      swiper?.slideTo(swiper.slides.length - 1)
    } else {
      swiper?.slidePrev()
    }
  }

  return {
    swiper,
    onSwiperUpdate,
    onSwiperSlideChange,
    nextSlide,
    prevSlide,
    activeSlide,
    setActiveSlide,
  }
}

export const Swiper = <T,>({
  items,
  renderItem,
  renderPlaceholder,
  extractKey,
  onSlideChange,
  onSwiper,
  swiperOptions = {},
  loading = false,
  overflow = false,
  overscroll = false,
  withAutoplay = false,
  withDots,
  slideOnClick = false,
  preventDefaultOnSlideClick = false,
  initialSlide = null,
}: SwiperProps<T>) => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const finalModules = [
    ...DEFAULT_SWIPER_OPTIONS.modules,
    ...(withAutoplay ? [Autoplay] : []),
  ]

  const finalOptions = {
    ...DEFAULT_SWIPER_OPTIONS,
    ...swiperOptions,
    modules: finalModules,
    autoplay: withAutoplay
      ? { delay: 5000, disableOnInteraction: false }
      : undefined,
  } satisfies SwiperOptions

  const [currentSlidesPerView, setCurrentSlidesPerView] = useState<
    SwiperOptions['slidesPerView']
  >(swiper?.params.slidesPerView ?? finalOptions.slidesPerView)

  const activeSlideNeedsAdjustment =
    overscroll && currentSlidesPerView === 'auto'

  const onSwiperUpdate = (s: SwiperInstance) => {
    setSwiper(s)
    setCurrentSlidesPerView(s.params.slidesPerView)
    if (overscroll) {
      // Swiper snaps on each slide which means that the last slide can also be scrolled to the left edge and be active slide.
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      s.snapGrid = [...s.slidesGrid]
    }
    if (onSwiper) onSwiper(s)
  }

  const onSlideClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
    if (preventDefaultOnSlideClick) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (slideOnClick) swiper?.slideTo(index)
  }

  useEffect(() => {
    if (swiper && initialSlide && initialSlide > -1) {
      swiper.slideTo(initialSlide, 0, false)
    } else if (swiper) {
      swiper.slideTo(0, 0, false)
    }
  }, [swiper, initialSlide, items])

  if (items.length === 0) return null

  return (
    <SwiperWrapper className="swiper-wrapper">
      <StyledSwiperWrapper className="styled-swiper-wrapper">
        <StyledSwiper
          {...finalOptions}
          onSlideChange={
            onSlideChange
              ? (s) => {
                  onSlideChange(
                    s,
                    activeSlideNeedsAdjustment ? s.snapIndex : s.activeIndex
                  )
                  onSwiperUpdate(s)
                }
              : undefined
          }
          onSwiper={onSwiperUpdate}
          onResize={onSwiperUpdate}
          $overflow={overflow}
          className="styled-swiper"
        >
          {loading
            ? generateArrayOfElements(4, (index) =>
                renderPlaceholder ? (
                  <StyledSwiperSlide
                    key={index}
                    $autoWidth={currentSlidesPerView === 'auto'}
                  >
                    {renderPlaceholder()}
                  </StyledSwiperSlide>
                ) : null
              )
            : items.map((item, index) => (
                <StyledSwiperSlide
                  key={extractKey(item, index)}
                  $autoWidth={currentSlidesPerView === 'auto'}
                  onClick={(e) => onSlideClick(e, index)}
                >
                  {({ isActive, isVisible }) =>
                    renderItem(item, {
                      index,
                      active: activeSlideNeedsAdjustment
                        ? swiper?.snapIndex === index
                        : isActive,
                      visible: isVisible,
                    })
                  }
                </StyledSwiperSlide>
              ))}
        </StyledSwiper>
        {withDots && (
          <Dots>
            {items.map((_, index) => (
              <Dot $active={swiper?.realIndex === index} />
            ))}
          </Dots>
        )}
      </StyledSwiperWrapper>
    </SwiperWrapper>
  )
}
