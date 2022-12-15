import styled, {
  css,
  DefaultTheme,
  StyledComponent,
} from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Container = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const HandleLight: StyledComponent<
  'div',
  DefaultTheme,
  StyledProps,
  never
> = styled.div`
  ${(props) => {
    if (props.theme.type === 'light') {
      return css`
        position: relative;
        left: 0px;
      `
    }

    return css`
      position: fixed;
      left: -1000px;
      width: 1px;
    `
  }}
`

export const HandleDark: StyledComponent<
  'div',
  DefaultTheme,
  StyledProps,
  never
> = styled.div`
  ${(props) => {
    if (props.theme.type === 'light') {
      return css`
        position: fixed;
        left: -1000px;
        width: 1px;
      `
    }

    return css`
      position: relative;
      left: 0px;
    `
  }}
`
