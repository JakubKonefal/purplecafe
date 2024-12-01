import React from 'react'

import { Container } from 'components/atoms/Container'
import { Flex, Margin } from 'components/atoms/Spacing'
import {
  Body14,
  Body15,
  Body18,
  Body20,
  Body24,
  Body26,
  Body30,
  Body34,
  Text,
} from 'components/atoms/Typography'

import { StyledFlex } from '../AboutMe/About.style'
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
  return (
    <S.Section>
      <Container>
        <Flex $direction="column" $fullWidth $align="center">
          <Flex $fullWidth $direction="column" $align="center">
            <Margin $base="0 0 20px" $xl="0 0 40px">
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
            </Margin>
            <Text
              $base={Body26}
              $align="center"
              $margin="0 0 2px"
              dangerouslySetInnerHTML={{ __html: firstClasses }}
            />
            <Text
              $base={Body26}
              $align="center"
              dangerouslySetInnerHTML={{ __html: nextClasses }}
            />
          </Flex>
        </Flex>
      </Container>
    </S.Section>
  )
}
