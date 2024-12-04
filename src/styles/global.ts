import { createGlobalStyle, css } from 'styled-components'

import { keys } from 'utils/object'

import Normalize from 'styles/normalize'
import { colors } from 'styles/theme'

import { media } from './media'

const Global = css`
  :root {
    ${keys(colors)
      .map((color) => `--color-${color}: ${colors[color]};`)
      .join('\n')}
  }

  * {
    outline-color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.fonts.size};
  }

  body {
    font-family: 'VarelaRound', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    ${media.md.max} {
      line-height: 1.775;
    }

    line-height: 1.85;
    font-family: 'VarelaRound', sans-serif;
    margin: 0;
  }

  a {
    display: block;
    cursor: pointer;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    margin: 0;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    margin: 0;
  }
`

const GlobalStyles = createGlobalStyle`
    ${Normalize}
    ${Global}
`

export default GlobalStyles
