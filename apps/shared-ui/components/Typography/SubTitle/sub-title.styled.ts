import styled from 'styled-components'
import P from '../Paragraph'
import StyledProps from 'shared-ui/props/styled-props'

export const SubText = styled(P)<StyledProps>`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes[1]};

  @media (min-width: 30rem) {
    font-size: ${(props) => props.theme.fontSizes[2]};
  }
`
