import React from 'react'

import { BodyMedium, Text } from 'components/atoms/Typography'

import type { Colors } from 'styles/theme'

import * as S from './TextSection.style'

export type TextSectionProps = {
  title: string
  subtitle: string
  content: string
  background: keyof Colors
}

export const TextSection: React.FC<TextSectionProps> = ({
  title,
  subtitle,
  content,
  background,
}) => {
  return (
    <S.Section $backgroundColor={background}>
      <Text $base={BodyMedium} dangerouslySetInnerHTML={{ __html: content }} />
    </S.Section>
  )
}
