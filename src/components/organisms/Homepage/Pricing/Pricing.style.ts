import styled, { css } from 'styled-components'

import media from 'styles/media'
import type { Colors } from 'styles/theme'

export const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 40px 0;

  ${media.md.min} {
    padding: 80px 0;
  }
`
