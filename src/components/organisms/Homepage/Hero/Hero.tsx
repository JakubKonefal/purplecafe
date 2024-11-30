import React from 'react'

import { LazyImage } from 'components/atoms/Image'

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
      <LazyImage {...img} />
    </S.Header>
  )
}
