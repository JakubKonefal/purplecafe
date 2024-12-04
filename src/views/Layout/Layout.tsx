/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'

import { Navigation } from 'components/organisms/Navigation'

import 'styles/main.css'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}
