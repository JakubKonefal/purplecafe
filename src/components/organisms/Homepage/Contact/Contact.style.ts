import styled, { css } from 'styled-components'

import { Text } from 'components/atoms/Typography'

import media from 'styles/media'
import type { Colors } from 'styles/theme'

export const Section = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white100};
  padding: 30px 0;

  ${media.md.min} {
    padding: 60px 0;
  }
`

export const StyledText = styled(Text)`
  display: flex;
  align-items: center;

  a {
    transition: all 0.3s;

    &:hover {
      color: #8e32b6;
    }
  }
`
