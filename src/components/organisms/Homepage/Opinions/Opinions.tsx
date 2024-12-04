import React from 'react'

import { Container } from 'components/atoms/Container'
import { Flex, Margin, Padding } from 'components/atoms/Spacing'
import {
  Body14,
  Body15,
  Body16,
  Body18,
  Body20,
  Body30,
  Body34,
  Text,
} from 'components/atoms/Typography'

import { Swiper } from 'components/molecules/Swiper'
import { useSwiper } from 'components/molecules/Swiper/'
import { StyledFlex } from 'components/molecules/TextSection/TextSection.style'

import theme from 'styles/theme'

import * as S from './Opinions.style'

type OpinionProps = {
  description: string
  clientName: string
  clientNote?: string
}

export type OpinionsProps = {
  title: string
  subtitle: string
  opinions: OpinionProps[]
}

export const Opinions: React.FC<OpinionsProps> = ({
  title,
  subtitle,
  opinions,
}) => {
  const { activeSlide, onSwiperSlideChange } = useSwiper()

  return (
    <S.Section id="opinie">
      <S.StyledContainer>
        <Flex $direction="column" $fullWidth $align="center">
          <StyledFlex $fullWidth $direction="column" $align="center">
            <Text
              as="h2"
              $base={Body30}
              $xl={Body34}
              $align="center"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <Text
              as="h3"
              $base={Body18}
              $xl={Body20}
              $align="center"
              $margin="6px 0 0"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </StyledFlex>
          <Swiper
            items={opinions}
            extractKey={(_, index) => `flat-${index + 1}`}
            onSlideChange={(_, index) => onSwiperSlideChange(index)}
            renderItem={(flat) => (
              <Flex $direction="column" $justify="center" $fullHeight>
                <Text
                  $base={Body14}
                  $align="center"
                  $margin={{
                    base: '0 0 10px',
                  }}
                  dangerouslySetInnerHTML={{ __html: flat.description }}
                />
                <Text
                  $base={Body16}
                  $align="center"
                  dangerouslySetInnerHTML={{ __html: flat.clientName }}
                />
                {flat.clientNote && (
                  <Text
                    $base={Body14}
                    $align="center"
                    dangerouslySetInnerHTML={{ __html: flat.clientNote }}
                  />
                )}
              </Flex>
            )}
            swiperOptions={{
              slidesPerView: 1,
              spaceBetween: 12,
              breakpoints: {
                [theme.breakpoints.md]: { spaceBetween: 20 },
              },
            }}
            withDots
          />
          <S.Dots>
            {opinions.map((_, index) => (
              <S.Dot key={`dot-${index + 1}`} $active={activeSlide === index} />
            ))}
          </S.Dots>
        </Flex>
      </S.StyledContainer>
    </S.Section>
  )
}
