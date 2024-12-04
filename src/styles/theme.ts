export const breakpoints = {
  base: 0,
  xs: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xl3: 1600,
} as const

export type Breakpoints = typeof breakpoints
export type Breakpoint = keyof Breakpoints

export const colors = {
  primary: '#e7d0ff',
  primaryDark: '#b68de0',
  secondary: '#2980b9',
  danger: '#e74c3c',
  success: '#2ecc71',
  text: '#2D1C38',
  black: '#000000',
  white: '#ffffff',
  white100: '#FFFBF4',
  heading: '#483351',
  contactLink: '#8e32b6',
  brown: '#d4ccc4',
  gray: '#7d6f63e3',
  light: '#F2E4F5DE',
} as const

export type Colors = typeof colors
export type Color = keyof Colors

export const fonts = {
  size: '16px',
} as const

export type Fonts = typeof fonts

export const elementsSize = {
  navbar: {
    mobile: '80px',
    desktop: '80px',
  },
}

const theme = {
  breakpoints,
  colors,
  fonts,
  elementsSize,
}

export type Theme = typeof theme

export default theme
