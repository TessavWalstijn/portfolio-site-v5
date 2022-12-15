import React from 'react'
import { Img } from './image.styled'
import StyledProps from 'shared-ui/props/styled-props';

interface Props extends StyledProps {
  src: string,
  alt: string,
}

const Image: React.FC<Props> = (props) => {

  return (
    <Img {...props} />
  )
}

export default Image
