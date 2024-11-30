import React from 'react'

import { LazyImageType } from 'types/page'

import * as S from './About.style'

export type AboutMeProps = {
  title: string
  subtitle: string
  img: LazyImageType
  content: string
}

export const AboutMe: React.FC<AboutMeProps> = ({
  title,
  subtitle,
  img,
  content,
}) => {
  return <S.Section>Hero</S.Section>
}
