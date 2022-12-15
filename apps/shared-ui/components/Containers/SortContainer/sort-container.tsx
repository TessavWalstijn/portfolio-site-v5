import React from 'react'
import StyledProps from 'shared-ui/props/styled-props'
import H from 'shared-ui/components/Typography/Header'
import DropDown from 'shared-ui/components/Buttons/DropDown'
import { Cont } from './sort-container.styled'

interface Props extends StyledProps {
  title: string
  list: { tag: string, name: string, active?: boolean }[]
  changeTag: (tag: string) => void
}

const SortContainer: React.FC<Props> = ({ title, list, changeTag }) => {
  
  return <Cont>
    <H variant="h1">{title}</H>
    <DropDown list={list} changeTag={changeTag} />
  </Cont>
}

export default SortContainer;
