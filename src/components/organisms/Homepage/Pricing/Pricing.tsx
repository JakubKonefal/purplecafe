import React from 'react'

import * as S from './Pricing.style'

export type PricingProps = {
  title: string
  subtitle: string
  firstClasses: string
  nextClasses: string
}

export const Pricing: React.FC<PricingProps> = ({
  title,
  subtitle,
  firstClasses,
  nextClasses,
}) => {
  return <S.Section>Pricing</S.Section>
}
