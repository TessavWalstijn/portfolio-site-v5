import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const H1 = styled(motion.h1) <StyledProps>`
  font-family: 'Primary';
  font-weight: ${props => props.theme.fontWeights.bold};
  ${typography}
  ${space}
  ${color}
  ${layout}

  font-size: ${props => props.theme.fontSizes[2]};

  @media (min-width: 30rem) {
    font-size: ${props => props.theme.fontSizes[3]};
  }

  @media (min-width: 50rem) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`

export const H2 = styled(motion.h2) <StyledProps>`
  font-family: 'Primary';
  font-weight:  ${props => props.theme.fontWeights.bold};
  ${typography}
  ${space}
  ${color}
  ${layout}

  font-size: ${props => props.theme.fontSizes[2]};

  @media (min-width: 30rem) {
    font-size: ${props => props.theme.fontSizes[3]};
  }

  @media (min-width: 50rem) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`

export const H3 = styled(motion.h3) <StyledProps>`
  font-family: 'Primary';
  font-weight: ${props => props.theme.fontWeights.normal};
  ${typography}
  ${space}
  ${color}
  ${layout}

  font-size: ${props => props.theme.fontSizes[2]};

  @media (min-width: 30rem) {
    font-size: ${props => props.theme.fontSizes[3]};
  }

  @media (min-width: 50rem) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`

export const H4 = styled(motion.h4) <StyledProps>`
  font-family: 'Primary';
  font-weight: ${props => props.theme.fontWeights.normal};
  ${typography}
  ${space}
  ${color}
  ${layout}

  font-size: ${props => props.theme.fontSizes[1]};

  @media (min-width: 30rem) {
    font-size: ${props => props.theme.fontSizes[2]};
  }

  @media (min-width: 50rem) {
    font-size: ${props => props.theme.fontSizes[3]};
  }
`

export const H5 = styled(motion.h5) <StyledProps>`
  font-family: 'Primary';
  font-weight: ${props => props.theme.fontWeights.normal};
  ${typography}
  ${space}
  ${color}
  ${layout}

  font-size: ${props => props.theme.fontSizes[2]};

  @media (min-width: 30rem) {
    font-size: ${props => props.theme.fontSizes[3]};
  }

  @media (min-width: 50rem) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`

export const H6 = styled(motion.h6) <StyledProps>`
  font-family: 'Primary';
  font-weight: ${props => props.theme.fontWeights.normal};
  ${typography}
  ${space}
  ${color}
  ${layout}

  font-size: ${props => props.theme.fontSizes[2]};

  @media (min-width: 30rem) {
    font-size: ${props => props.theme.fontSizes[3]};
  }

  @media (min-width: 50rem) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`
