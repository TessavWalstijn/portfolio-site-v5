import React from 'react'
import {
  Container,
  Icon,
} from './icon-animation.styled'

export interface HandleIconThemeProps {
  icons: any[],
  size?: { w: number, h: number }
}

const IconAnimation: React.FC<HandleIconThemeProps> = ({ icons, size = { w: 4, h: 3 } }) => {
  const { w, h } = size;
  const duration = 13;

  return (
    <Container animate='show' width={`${w}rem`} height={`${h}rem`}>
      {icons.map((icon, index) => {
        let animation: number[] = [0];
        let scaling: number[] = [0.3];

        for (let i = 0; i < icons.length; i += 1) {
          const active = i === index ? 1 : 0;

          for (let j = 0; j < duration; j += 1) {
            animation = [...animation, active]
            scaling = [...scaling, active]
          }

          animation = [...animation, 0]
          scaling = [...scaling, 0.3]
        }

        const item = {
          show: {
            opacity: animation,
            scale: scaling,
            transition: {
              repeat: Infinity,
              duration: 13
            }
          }
        }

        return <Icon width={`${w}rem`} height={`${h}rem`} key={`icon-animation-${index}`} variants={item}>{icon}</Icon>
      })}
    </Container>
  )
}

export default IconAnimation
