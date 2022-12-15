import styled from 'styled-components'
import { space, color, typography, layout, flexbox  } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const MainCont = styled.div<StyledProps>`
  flex-direction: column;
  display: flex;
  background-color: ${(props) => props.theme.colors.lowlight};
  color: ${(props) => props.theme.colors.highlight};
  align-items: left;
  justify-content: center;
  width: 100%;
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${flexbox}

  @media (min-width: 30rem) {
    width: 95%;
    margin: 0 auto;
  }

  @media (min-width: 50rem) {
    width: 70%;
    margin: 0 auto;
  }

  @media (min-width: 70rem) {
    width: 50%;
    margin: 0 auto;
  }

  @media (min-width: 110rem) {
    width: 40%;
    margin: 0 auto;
  }
`
