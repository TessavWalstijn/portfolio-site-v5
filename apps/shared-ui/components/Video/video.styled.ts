import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Vid = styled.video<StyledProps>`
  border: solid 1px ${(props) => props.theme.colors.highlight};
  border-radius: 1.2rem;

  ${typography}
  ${space}
  ${color}
  ${layout}
`
