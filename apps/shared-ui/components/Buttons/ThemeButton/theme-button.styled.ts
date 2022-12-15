import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'
import P from 'shared-ui/components/Typography/Paragraph'

export const Text = styled.div`
  width: 0;
  overflow: hidden;
  margin: 0rem;
  transition: 0.25s ease;
`

export const PP = styled(P)`
  width: max-content;
  transition: 0.25s ease;
`

export const Button = styled.div<StyledProps>`
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
  background-color: ${(props) => props.theme.colors.lowlight};
  border-radius: 2em;
  width: 4rem;
  height: 4rem;

  :hover,
  :focus-within {
    width: min-content;
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${(props) => props.theme.colors.lowlight};
  border-radius: 2em;
  border: solid 0.1rem ${(props) => props.theme.colors.highlight};
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  flex-direction: row;
  transition: 0.25s ease;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.highlight};

  :active {
    color: ${(props) => props.theme.colors.highlight};
    background-color: transparent;
  }

  :link {
    color: ${(props) => props.theme.colors.highlight};
  }

  :visited {
    color: ${(props) => props.theme.colors.highlight};
  }

  :hover {
    width: max-content;
    ${Text} {
      margin-left: 1rem;
      display: inline;
      width: max-content;
    }

    ${PP} {
      width: max-content;
    }
  }

  :focus-visible {
    color: ${(props) => props.theme.colors.highlight};
    width: min-content;
    padding: 0 1rem;
    outline: solid 0.2rem ${(props) => props.theme.colors.highlight};
    background-color: transparent;

    ${Text} {
      margin-left: 0.5rem;
      display: inline;
      width: max-content;
    }

    ${PP} {
      width: max-content;
    }
  }
`

export const Icon = styled.i``
