import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const P = styled(motion.p)<StyledProps>`
  font-family: 'Primary';
  font-weight: ${(props) =>
    props.theme.type === 'dark'
      ? props.theme.fontWeights.normal
      : props.theme.fontWeights.strong};
  font-size: ${(props) => props.theme.fontSizes[0]};
  ${typography}
  ${space}
  ${color}
  ${layout}
`
