import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import H from '../Typography/Header'
import StyledProps from 'shared-ui/props/styled-props'

export const LogoContainer = styled.div`
  border-radius: 50%;
  width: 298px;
  height: 298px;
  font-size: 300px;
  margin: 4rem auto 0;
  ${(props) => {
    if (props.theme.type === 'dark') {
      return css`
        background-color: ${(props) => props.theme.colors.highlight};
        color: ${(props) => props.theme.colors.lowlight};
      `
    }

    if (props.theme.type === 'light') {
      return css`
        background-color: ${(props) => props.theme.colors.lowlight};
        color: ${(props) => props.theme.colors.highlight};
      `
    }
  }}
`

export const TextContainer = styled(motion.div)`
  /* position: relative; */
  width: 95%;
  margin: 0 auto;
  top: 0;
`

export const Title = styled(H)<StyledProps>``
