import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Nav = styled.nav`
  width: 100%;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
`

export const Item = styled.li<StyledProps>`
  display: block;
  ${typography}
  ${space}
  ${color}
  ${layout}
`
