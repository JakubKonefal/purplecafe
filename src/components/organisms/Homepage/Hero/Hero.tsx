import React from 'react'

import { LazyImage } from 'components/atoms/Image'
import {
  Body25,
  HeadingLobster,
  HeadingLobsterSmall,
  Text,
} from 'components/atoms/Typography'

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
        <LazyImage {...img} objectFit="contain" />

        <S.TextWrapper>
          <Text
            as="h1"
            $color="heading"
            $base={HeadingLobsterSmall}
            $md={HeadingLobster}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            as="h2"
            $color="heading"
            $base={Body25}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </S.TextWrapper>
      </S.ImgWrapper>
    </S.Header>
  )
}
