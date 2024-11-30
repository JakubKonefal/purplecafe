import React from 'react'

import { Container } from 'components/atoms/Container'
import { Flex } from 'components/atoms/Spacing'
import { Body15, Body18, Body30, Text } from 'components/atoms/Typography'

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
      <Container>
        <Flex $fullWidth $direction="column" $align="center">
          <Text
            as="h2"
            $base={Body30}
            $align="center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            as="h3"
            $base={Body18}
            $align="center"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </Flex>
        <Text $base={Body15} dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </S.Section>
  )
}
