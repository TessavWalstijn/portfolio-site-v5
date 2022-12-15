import { DefaultTheme } from 'styled-components'
import baseTheme from './base'

const ligthTheme: DefaultTheme = {
  ...baseTheme,
  type: 'light',
  colors: {
    primary: '#482854',
    secondary: '#6fe0fb',
    highlight: '#130a16',
    lowlight: '#FEFCFB',
  },
}

// #9dd4e5
// #006be6
// #001E40

export default ligthTheme
