import React from 'react'

import * as S from './Contact.style'

export type ContactProps = {
  phone: string
  email: string
  facebook: string
}

export const Contact: React.FC<ContactProps> = ({ phone, email, facebook }) => {
  return <S.Section>Contact</S.Section>
}
