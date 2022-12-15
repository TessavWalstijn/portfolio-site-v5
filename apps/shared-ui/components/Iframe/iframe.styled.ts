import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const IFrame = styled.iframe<StyledProps>`
  border: solid 1px ${(props) => props.theme.colors.highlight};
  border-radius: 1.2rem;
  width: 100%;
  margin: 1rem auto;

  ${typography}
  ${space}
  ${color}
  ${layout}
`
