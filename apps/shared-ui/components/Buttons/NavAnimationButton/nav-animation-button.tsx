import React from 'react'
import Link from 'next/link'
import { Button, Text, AA, PP } from './nav-animation-button.styled'
import IconAnimation from 'shared-ui/components/Icons/IconAnimation'

export interface NavAnimationButtonProps {
  text: string
  url: string
  icons: any[]
  blank?: boolean
}

const NavAnimationButton: React.FC<NavAnimationButtonProps> = ({ url, blank, text, icons, ...other }) => {

  return (
    <Button
      {...other}
    >
      <Link href={url}>
        <AA tabIndex={0}>
          <IconAnimation
            size={{ w: 2, h: 2 }}
            icons={icons}
          />
          <Text>
            <PP m={0} >{text}</PP>
          </Text>
        </AA>
      </Link>
    </Button>
  )
}

export default NavAnimationButton
