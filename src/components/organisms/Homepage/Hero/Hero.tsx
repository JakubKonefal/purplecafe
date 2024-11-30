import React from 'react'

import { LazyImage } from 'components/atoms/Image'
import { Body25, HeadingLobster, Text } from 'components/atoms/Typography'

import { LazyImageType } from 'types/page'

import * as S from './Hero.style'

export type HeroProps = {
  title: string
  subtitle: string
  img: LazyImageType
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, img }) => {
  return (
    <S.Header>
      <S.ImgWrapper>
        <LazyImage {...img} />

        <S.TextWrapper>
          <Text
            as="h1"
            $base={HeadingLobster}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            as="h2"
            $base={Body25}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </S.TextWrapper>
      </S.ImgWrapper>
    </S.Header>
  )
}
