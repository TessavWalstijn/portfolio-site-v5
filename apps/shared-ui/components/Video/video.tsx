import React from 'react'
import { Vid } from './video.styled'
import StyledProps from 'shared-ui/props/styled-props';

export interface VideoProps extends StyledProps {
  links: { ext: string, link: string }[]
}

const Video: React.FC<VideoProps> = ({ links }) => {

  return (
    <Vid controls >
      {
        links.map(({ ext, link }) => (
          <source src={link} type={`video/${ext}`} />
        ))
      }
      Your browser does not support the video tag.
    </Vid>
  )
}

export default Video
