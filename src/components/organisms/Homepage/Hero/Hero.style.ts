import styled from 'styled-components'

import media from 'styles/media'

export const Header = styled.header`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brown};
  height: 100svh;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100svh;

  ${media.lg.min} {
    min-height: 740px;
  }

  .gatsby-image-wrapper {
    height: 100%;
    position: static;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 46px 16px;
  width: 50%;
  max-width: 1200px;

  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`
