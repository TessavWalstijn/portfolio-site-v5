import { DefaultTheme } from 'styled-components'
import baseTheme from './base'

const mainTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    primary: '#6fe0fb',
    secondary: '#482854',
    highlight: '#FEFCFB',
    lowlight: '#130a16',
  },
}

// #9dd4e5
// #006be6
// #001E40

// #ffc726
// #db222a
// #FEFCFB
// #6fe0fb  #6fe0fb
// #dd85ff  #7e4693
// #482854  #482854
// #130a16

export default mainTheme
