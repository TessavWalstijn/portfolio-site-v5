import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Cont = styled.div<StyledProps>`
  flex-direction: column;
  display: flex;
  background-color: ${(props) => props.theme.colors.lowlight};
  color: ${(props) => props.theme.colors.highlight};
  align-items: left;
  justify-content: center;
  width: 45%;
  ${typography}
  ${space}
  ${color}
  ${layout}
`
