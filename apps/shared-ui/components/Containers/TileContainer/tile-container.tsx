import React from 'react'
import { TileCont } from './tile-container.styled'

export interface ContainerProps {
  onKeyUp?: (event: React.KeyboardEvent) => void;
}

const TileContainer: React.FC<ContainerProps> = ({ children, onKeyUp, ...other }) => {
  // @ts-ignore
  return <TileCont tabIndex={0} onKeyUp={onKeyUp} children={children} {...other} />
}

export default TileContainer;
