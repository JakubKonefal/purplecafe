import styled, { css } from 'styled-components'

import media from 'styles/media'

export const Section = styled.section`
  width: 100%;
  padding: 40px 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};

  ${media.xl.min} {
    padding: 80px 0;
  }
`
