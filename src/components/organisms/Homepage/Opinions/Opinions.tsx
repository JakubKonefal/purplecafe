import React from 'react'

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
  return <S.Section>Opinions</S.Section>
}
