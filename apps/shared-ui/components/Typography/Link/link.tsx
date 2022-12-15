import React from 'react'
import { useRouter } from 'next/router'
import { A, FlexA, CleanA } from './link.styled';

interface LinkProps {
  href: string
  children: any | any[]
  flex?: boolean
  clean?: boolean
  target?: string
}

const Link: React.FC<LinkProps> = ({ children, href, target = '', flex = false, clean = false }) => {
  const router = useRouter()
  const click = (event: any) => {
    event.preventDefault();

    blur();
    router.push(`${href}`);
  }

  if (flex) return (
    <FlexA target={target} onClick={click} >
      {children}
    </FlexA>
  )

  if (clean) return (
    <CleanA target={target} onClick={click} >
      {children}
    </CleanA>
  )

  return (
    <A target={target} onClick={click} >
      {children}
    </A>
  )
}

export default Link;
