import React from 'react'

import { Container } from 'components/atoms/Container'
import { Flex } from 'components/atoms/Spacing'
import { Body22PatrickHand } from 'components/atoms/Typography'

import * as S from './Contact.style'

export type ContactProps = {
  phone: string
  email: string
  facebook: string
}

export const Contact: React.FC<ContactProps> = ({ phone, email, facebook }) => {
  return (
    <S.Section id="kontakt">
      <Container>
        <Flex $direction="column" $align="center" $gap="8px">
          <S.StyledText $base={Body22PatrickHand}>
            kontakt:
            <a href={`tel: ${phone}`}>{phone}</a>
          </S.StyledText>
          <S.StyledText $base={Body22PatrickHand}>
            email:
            <a href={`mailto: ${email}`}>{email}</a>
          </S.StyledText>
          <S.StyledText $base={Body22PatrickHand}>
            Facebook:
            <a href={facebook} target="_blank" rel="noreferrer">
              {facebook}
            </a>
          </S.StyledText>
        </Flex>
      </Container>
    </S.Section>
  )
}
