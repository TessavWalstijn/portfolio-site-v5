import { DefaultTheme } from 'styled-components'
import baseTheme from './base'

const ligthTheme: DefaultTheme = {
  ...baseTheme,
  type: 'light',
  colors: {
    primary: '#001f54',
    secondary: '#1282a2',
    highlight: '#0A1128',
    lowlight: '#FEFCFB',
  },
}

// #9dd4e5
// #006be6
// #001E40

export default ligthTheme
