import React from 'react'
import { P } from './paragraph.styled'
import StyledProps from 'shared-ui/props/styled-props'

export interface Props { }

const Paragraph: React.FC<StyledProps> = ({ children, ...other }) => {
  return <P children={children} {...other} />
}

export default Paragraph;
