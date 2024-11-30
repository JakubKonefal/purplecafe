import styled, { css } from 'styled-components'

import media from 'styles/media'
import type { Colors } from 'styles/theme'

export const Section = styled.section<{ $backgroundColor: keyof Colors }>`
  width: 100%;

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${({ theme }) => theme.colors[$backgroundColor]};
    `}
`
