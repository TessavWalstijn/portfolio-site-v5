import debounce from 'shared-ui/utils/debounce';
import React, { useEffect, useRef } from 'react';
import { IFrame } from './iframe.styled'

export interface IframeProps {
  link: string
  width?: number
  height?: number
  mobile?: boolean
}

const Iframe: React.FC<IframeProps> = ({ link, width = -1, height = -1, mobile = false }) => {
  const iframe = useRef(null)

  useEffect(() => {
    const handler = debounce(() => {
      const frame: any = iframe.current
      if (frame) {
        const frameWidth = frame.parentElement.clientWidth

        if (mobile) {
          const newWidth = frameWidth / 16 * 9

          if (width !== -1) {
            if (width < newWidth) {
              frame.style.width = `${newWidth}px`
            } else {
              frame.style.width = `${width}px`
            }
          } else {
            frame.style.width = `${newWidth}px`
          }

          if (height !== -1) {
            if (height < frameWidth) {
              frame.style.height = `${frameWidth}px`
            } else {
              frame.style.height = `${height}px`
            }
          } else {
            frame.style.height = `${frameWidth}px`
          }
        } else {
          const newHeight = frameWidth / 16 * 9

          if (width !== -1) {
            if (width < frameWidth) {
              frame.style.width = `${frameWidth}px`
            } else {
              frame.style.width = `${width}px`
            }
          } else {
            frame.style.width = `${frameWidth}px`
          }

          if (height !== -1 && height) {
            if (height < frameWidth) {
              frame.style.height = `${newHeight}px`;
            } else {
              frame.style.height = `${height}px`
            }
          } else {
            frame.style.height = `${newHeight}px`;
          }
        }
      }
    }, 10)

    window.addEventListener('resize', handler);
    handler();

    return () => {
      window.removeEventListener('resize', handler);
    };
  })

  return (
    <IFrame sandbox="allow-scripts" ref={iframe} src={link} />
  )
}

export default Iframe
