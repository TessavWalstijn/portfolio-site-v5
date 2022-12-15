import React from 'react'
import {
  HandleInactive,
  HandleActive,
  Container
} from './handle-icon-hover.styled'
import StyledProps from 'shared-ui/props/styled-props';

export interface HandleIconThemeProps extends StyledProps {
  active: any,
  inactive: any,
  hover: string,
  size?: { w: number, h: number }
}

const HandleIconHover: React.FC<HandleIconThemeProps> = ({ active, inactive, hover, size = { w: 2, h: 2 } }, ...other) => {
  const { w, h } = size;

  return (
    <Container width={`${w}rem`} height={`${h}rem`}>
      <HandleActive width={`${w}rem`} height={`${h}rem`} active={hover} {...other}>{active}</HandleActive>
      <HandleInactive width={`${w}rem`} height={`${h}rem`} active={hover} {...other}>{inactive}</HandleInactive>
    </Container>
  )
}

export default HandleIconHover
