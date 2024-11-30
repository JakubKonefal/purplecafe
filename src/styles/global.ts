import { createGlobalStyle, css } from 'styled-components'

import { keys } from 'utils/object'

import Normalize from 'styles/normalize'
import { colors } from 'styles/theme'

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
  h6 {
    font-family: 'VarelaRound', sans-serif;
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
`

const GlobalStyles = createGlobalStyle`
    ${Normalize}
    ${Global}
`

export default GlobalStyles
