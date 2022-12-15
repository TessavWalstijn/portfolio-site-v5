import React from 'react'
import {
  HandleLight,
  HandleDark,
  Container
} from './handle-icon-theme.styled'
import StyledProps from 'shared-ui/props/styled-props';

export interface HandleIconThemeProps extends StyledProps {
  light: any,
  dark: any,
  size?: { w: number, h: number }
}

const HandleIconTheme: React.FC<HandleIconThemeProps> = ({ light, dark, size = { w: 2, h: 2 } }, ...other) => {
  const { w, h } = size;

  return (
    <Container width={`${w}rem`} height={`${h}rem`}>
      <HandleLight width={`${w}rem`} height={`${h}rem`} {...other}>{light}</HandleLight>
      <HandleDark width={`${w}rem`} height={`${h}rem`} {...other}>{dark}</HandleDark>
    </Container>
  )
}

export default HandleIconTheme
