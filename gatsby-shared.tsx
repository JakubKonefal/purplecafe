import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { default as GlobalStyles } from './src/styles/global'
import { default as theme } from './src/styles/theme'

type WrapRootElement = GatsbyBrowser['wrapRootElement'] &
  GatsbySSR['wrapRootElement']
type WrapPageElement = GatsbyBrowser['wrapPageElement'] &
  GatsbySSR['wrapPageElement']

export const wrapRootElement: WrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

export const wrapPageElement: WrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
