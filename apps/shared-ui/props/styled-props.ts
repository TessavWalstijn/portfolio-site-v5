import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
} from 'styled-system'

interface StyledProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps {
  m?: any
  margin?: any
  mt?: any
  marginTop?: any
  mr?: any
  marginRight?: any
  mb?: any
  marginBottom?: any
  ml?: any
  marginLeft?: any
  mx?: any
  marginX?: any
  my?: any
  marginY?: any
  p?: any
  padding?: any
  pt?: any
  paddingTop?: any
  pr?: any
  paddingRight?: any
  pb?: any
  paddingBottom?: any
  pl?: any
  paddingLeft?: any
  px?: any
  paddingX?: any
  py?: any
  paddingY?: any
  color?: any
  bg?: any
  backgroundColor?: any
  opacity?: any
  fontFamily?: any
  fontSize?: any
  fontWeight?: any
  lineHeight?: any
  letterSpacing?: any
  fontStyle?: any
  textAlign?: any
  width?: any
  height?: any
  minWidth?: any
  minHeight?: any
  maxWidth?: any
  maxHeight?: any
  display?: any
  verticalAlign?: any
  size?: any
  overflow?: any
  overflowX?: any
  overflowY?: any
  alignItems?: any
  alignContent?: any
  justifyItems?: any
  justifyContent?: any
  flexWrap?: any
  flexDirection?: any
  flex?: any
  flexGrow?: any
  flexShrink?: any
  flexBasis?: any
  justifySelf?: any
  alignSelf?: any
}

export default StyledProps
