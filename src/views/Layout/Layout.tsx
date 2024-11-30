/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'

import 'styles/main.css'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>
}
