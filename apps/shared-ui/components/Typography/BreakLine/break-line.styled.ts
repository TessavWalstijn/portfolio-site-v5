import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Hr = styled(motion.hr) <StyledProps>`
  border-top: 1px solid ${props => props.theme.colors.secondary};
  width: calc(100% - 4rem);
  margin-left: 2rem;
  
  ${typography}
  ${space}
  ${color}
  ${layout}
`

// export const A = styled(base)`
//   ${base}

//   ${base}:visited {
//     color: ${props => props.theme.colors.primary};
//   }
// `
