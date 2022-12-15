import React from 'react'
import StyledProps from 'shared-ui/props/styled-props'
import { MainCont } from './container.styled'

export interface ContainerProps extends StyledProps { }

const Container: React.FC<StyledProps> = ({ children, ...other }) => {
  return <MainCont {...other}>{children}</MainCont>
}

export default Container;
