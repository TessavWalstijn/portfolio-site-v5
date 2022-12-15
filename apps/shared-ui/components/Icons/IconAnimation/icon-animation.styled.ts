import { motion } from 'framer-motion'
import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Container = styled(motion.div)<StyledProps>`
  position: relative;

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Icon = styled(motion.div)<StyledProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  ${typography}
  ${space}
  ${color}
  ${layout}
`
