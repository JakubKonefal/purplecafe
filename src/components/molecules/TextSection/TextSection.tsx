import React from 'react'

import type { Colors } from 'styles/theme'

import * as S from './TextSection.style'

export type TextSectionProps = {
  title: string
  subtitle: string
  background: keyof Colors
}

export const TextSection: React.FC<TextSectionProps> = ({
  title,
  subtitle,
  background,
}) => {
  return <S.Section $backgroundColor={background}>TextSection</S.Section>
}
