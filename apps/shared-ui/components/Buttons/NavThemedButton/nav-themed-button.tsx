import React from 'react'
import Link from 'next/link'
import { Button, Text, AA, PP } from './nav-themed-button.styled'
import HandleIconTheme from 'shared-ui/components/Icons/HandleIconTheme'

export interface NavHoverButtonProps {
  text: string
  url: string
  icon: string
  iconLight?: string
  blank?: boolean
}

const NavThemedButton: React.FC<NavHoverButtonProps> = ({ url, icon, text, iconLight = '', blank = false, ...other }) => {
  const Icon = (
    <>
      <HandleIconTheme
        dark={<i className={`${icon} fa-2x`}></i>}
        light={<i className={`${iconLight === '' ? icon : iconLight} fa-2x fa-swap-opacity`}></i>}
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
    <Button {...other}>
      <Link href={url}>
        <AA tabIndex={0} {...link}>
          {Icon}
        </AA>
      </Link>
    </Button>
  )
}

export default NavThemedButton
