import React from 'react'

import { Container } from 'components/atoms/Container'
import { LazyImage } from 'components/atoms/Image'
import { Flex } from 'components/atoms/Spacing'
import {
  Body14,
  Body15,
  Body18,
  Body20,
  Body30,
  Body34,
  Text,
} from 'components/atoms/Typography'

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
  return (
    <S.Section>
      <Container>
        <Flex $direction="column" $fullWidth $align="center">
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
          <S.ImgWrapper>
            <LazyImage {...img} objectFit="cover" />
          </S.ImgWrapper>
          <S.StyledContent
            $base={Body14}
            $align="center"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Flex>
      </Container>
    </S.Section>
  )
}
