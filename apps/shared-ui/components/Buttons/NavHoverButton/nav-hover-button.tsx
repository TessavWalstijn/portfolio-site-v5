import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Text, AA, PP } from './nav-hover-button.styled'
import HandleIconHover from 'shared-ui/components/Icons/HandleIconHover'

export interface NavHoverButtonProps {
  text: string
  url: string
  icon: string
  iconHover?: string
  blank?: boolean
}

const NavHoverButton: React.FC<NavHoverButtonProps> = ({ url, icon, text, iconHover = '', blank = false, ...other }) => {
  const [hover, setHover] = useState('in')

  const handleHover = (hovering: boolean) => {
    if (hovering) {
      setHover('ac')
    } else {
      setHover('in')
    }
  }

  const Icon = (
    <>
      <HandleIconHover
        hover={hover}
        active={<i className={`${iconHover === '' ? icon : iconHover} fa-2x fa-swap-opacity`}></i>}
        inactive={<i className={`${icon} fa-2x`}></i>}
      />
      <Text>
        <PP m={0} >{text}</PP>
      </Text>
    </>
  )

  let link: { href: string, target?: string } = {
    href: url,
  }

  if (blank) {
    link = {
      ...link,
      target: '_blank'
    }
  }

  return (
    <Button
      {...other}
      onMouseEnter={() => { handleHover(true) }}
      onMouseLeave={() => { handleHover(false) }}
    >
      <Link href={url}>
        <AA
          {...link}
          tabIndex={0}
          onFocus={() => { handleHover(true) }}
          onBlur={() => { handleHover(false) }}
        >
          {Icon}
        </AA>
      </Link>
    </Button>
  )
}

export default NavHoverButton
