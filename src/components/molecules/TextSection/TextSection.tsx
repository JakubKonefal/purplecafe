import React from 'react'

import { Container } from 'components/atoms/Container'
import { Flex } from 'components/atoms/Spacing'
import {
  Body15,
  Body18,
  Body20,
  Body30,
  Body34,
  Text,
} from 'components/atoms/Typography'

import type { Colors } from 'styles/theme'

import * as S from './TextSection.style'

export type TextSectionProps = {
  sectionId: string
  title: string
  subtitle: string
  content: string
  background: keyof Colors
}

export const TextSection: React.FC<TextSectionProps> = ({
  sectionId,
  title,
  subtitle,
  content,
  background,
}) => {
  return (
    <S.Section id={sectionId} $backgroundColor={background}>
      <Container>
        <S.StyledFlex $fullWidth $direction="column" $align="center">
          <Text
            as="h2"
            $base={Body30}
            $xl={Body34}
            $align="center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            as="h3"
            $base={Body18}
            $xl={Body20}
            $align="center"
            $margin="6px 0 0"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </S.StyledFlex>
        <S.StyledContent
          $base={Body15}
          $xl={Body18}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </S.Section>
  )
}
