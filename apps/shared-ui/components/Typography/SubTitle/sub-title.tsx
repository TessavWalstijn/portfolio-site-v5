import React from 'react'
import { SubText } from './sub-title.styled'
import StyledProps from 'shared-ui/props/styled-props'

export interface Props { }

const SubTitle: React.FC<StyledProps> = ({ children, ...other }) => {
  return <SubText children={children} {...other} />
}

export default SubTitle;
