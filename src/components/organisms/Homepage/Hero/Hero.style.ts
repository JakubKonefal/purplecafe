import styled from 'styled-components'

import media from 'styles/media'

export const Header = styled.header`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brown};
  overflow: hidden;

  ${media.md.min} {
    height: 100svh;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;

  ${media.md.min} {
    height: 100svh;
  }
  ${media.lg.min} {
    min-height: 740px;
  }
  max-width: 1200px;

  .gatsby-image-wrapper {
    height: 100%;
    position: static;
  }

  ${media.xl.min} {
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 46px 16px;
  width: 100%;
  max-width: 800px;

  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 650px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 90%;
    padding: 26px 16px 46px;
  }
`

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #a075cc;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s;

  &:hover {
    background-color: #8e5cb5;
  }

  ${media.md.max} {
    padding: 7px 14px;
    font-size: 15px;
  }
`
