import styled, { css } from 'styled-components'

import { Flex } from 'components/atoms/Spacing'
import {
  Body16,
  Body18,
  Body20,
  Body25,
  Text,
} from 'components/atoms/Typography'

import media from 'styles/media'
import type { Colors } from 'styles/theme'

export const Section = styled.section<{ $backgroundColor: keyof Colors }>`
  width: 100%;
  padding: 82px 0;

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${({ theme }) => theme.colors[$backgroundColor]};
    `}
`

export const StyledFlex = styled(Flex)`
  margin-bottom: 40px;
`

export const StyledContent = styled(Text)`
  ul {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  li {
    margin-bottom: 4px;

    ${media.md.min} {
      margin-bottom: 8px;
    }
  }

  span.bigger18 {
    ${Body18}

    ${media.md.min} {
      font-size: 20px;
    }

    ${media.xl.min} {
      font-size: 25px;
    }
  }

  span.bigger16 {
    ${Body16}

    ${media.md.min} {
      ${Body20}
    }

    ${media.xl.min} {
      font-size: 22px;
    }
  }

  span.small {
    display: inline-block;
    margin-top: 8px;
  }

  h2 {
    ${Body16}
  }

  h3 {
    ${Body20}

    ${media.xl.min} {
      font-size: 22px;
      padding: 10px 0 5px;
    }
  }
`
