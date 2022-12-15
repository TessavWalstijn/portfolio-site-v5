import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import H from 'shared-ui/components/Typography/Header'
import P from 'shared-ui/components/Typography/Paragraph'
import StyledProps from 'shared-ui/props/styled-props'

export const Image = styled.img<StyledProps>`
  border-radius: 1.2rem;
  object-fit: cover;
  height: 90%;
  width: 90%;
  max-width: 400px;
  max-height: 400px;

  @media (min-width: 30rem) {
    height: 180px;
    width: 180px;
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Title = styled(H)<StyledProps>`
  margin: 0 0 1rem 2.5rem;

  @media (min-width: 30rem) {
    margin-left: 2rem;
  }

  :link {
    color: ${(props) => props.theme.colors.highlight};
  }

  :visited {
    color: ${(props) => props.theme.colors.highlight};
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Wrapper = styled.div<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;

  :hover {
  }

  @media (min-width: 30rem) {
    flex-direction: row;
  }
`

export const Text = styled.div<StyledProps>`
  position: relative;
  margin-top: 0rem;
  padding-bottom: 4rem;
  margin-bottom: 1rem;
`

export const More = styled(P)<StyledProps>`
  position: absolute;
  padding: 0;
  margin: 0;
  bottom: 0;
  left: 2rem;
`
