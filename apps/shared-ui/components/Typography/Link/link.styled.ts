import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const A = styled(motion.a)<StyledProps>`
  font-family: 'Primary';
  font-weight: ${(props) =>
    props.theme.type === 'dark'
      ? props.theme.fontWeights.normal
      : props.theme.fontWeights.strong};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  text-decoration: none;
  border-radius: 1rem;
  transition: 0.25s ease;
  display: inline-block;
  height: 100%;

  :active {
    color: ${(props) => props.theme.colors.lowlight};
    background-color: ${(props) => props.theme.colors.primary};
  }

  :focus-visible {
    color: ${(props) => props.theme.colors.lowlight};
    background-color: ${(props) => props.theme.colors.primary};
  }

  :link {
    color: ${(props) => props.theme.colors.primary};
  }

  :visited {
    color: ${(props) => props.theme.colors.primary};
  }

  :hover {
    color: ${(props) => props.theme.colors.lowlight};
    background-color: ${(props) => props.theme.colors.primary};
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const CleanA = styled(A)`
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
    color: ${(props) => props.theme.colors.highlight};
    background-color: transparent;
  }
`

export const FlexA = styled(A)`
  display: flex;

  @media (min-width: 30rem) {
    flex-direction: row;
  }
`
