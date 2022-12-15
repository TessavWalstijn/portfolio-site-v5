import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    type: 'light' | 'dark'
    borderStyles: {
      primary: string
      secondary: string
    }
    borderWidths: {
      primary: string
      secondary: string
    }
    breakpoints: string[]
    colors: {
      primary: string
      secondary: string
      highlight: string
      lowlight: string
    }
    fonts: {
      primary: string
      secondary: string
    }
    fontSizes: string[]
    fontWeights: {
      extraBold: number
      bold: number
      strong: number
      normal: number
      thin: number
    }
    space: string[]
  }
}

const baseTheme: DefaultTheme = {
  type: 'dark',
  borderStyles: {
    primary: 'solid',
    secondary: 'dotted',
  },
  borderWidths: {
    primary: '0.3rem',
    secondary: '0.4rem',
  },
  breakpoints: ['768px', '1440px', '1680px'],
  colors: {
    primary: '#f00',
    secondary: '#f00',
    highlight: '#f00',
    lowlight: '#f00',
  },
  fonts: {
    primary: 'Primary',
    secondary: 'Secondary',
  },
  fontSizes: [
    '1.6rem',
    '2rem',
    '2.3rem',
    '2.8rem',
    '3.2rem',
  ],
  fontWeights: {
    extraBold: 800,
    bold: 500,
    strong: 400,
    normal: 300,
    thin: 200,
  },
  space: ['0rem', '0.5rem', '1rem', '2rem', '3rem', '4rem'],
}

export default baseTheme
