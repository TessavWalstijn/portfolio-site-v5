import React, { useState, useEffect, useRef } from 'react'
import { Content, Label, List, Item, Icon } from './drop-down.styled'
import StyledProps from 'shared-ui/props/styled-props'

interface Props extends StyledProps {
  list: { tag: string, name: string, active?: boolean }[]
  changeTag: (tag: string) => void
}

const DropDown: React.FC<Props> = ({ list, changeTag }) => {
  const [label, setLabel] = useState(list[0].name);
  const [active, setActive] = useState(false)
  const refLastItem = useRef<HTMLDivElement | null>(null)

  const onClickLabel = () => {
    setActive(true)
  }

  const onSelection = (tag: string, name: string) => {
    setActive(false)
    changeTag(tag)
    setLabel(name)
  }

  const variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  }

  useEffect(() => {
    const max = list.length;
    for (let i = 0; i < max; i += 1) {
      const set = list[i]
      if (set?.active) {
        setLabel(set.name)
      }
    }
  }, [])

  useEffect(() => {
    const item = refLastItem.current;

    if (!item) return;

    const handler = () => {
      setActive(false)
    }

    item.addEventListener('focusout', handler)

    return () => {
      item.removeEventListener('focusout', handler)
    }
  }, [refLastItem])

  const onKeyUpLabel = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') onClickLabel();
  }

  return <Content>
    <Label tabIndex={0} onKeyUp={(e) => onKeyUpLabel(e)} onClick={onClickLabel}>{label}</Label>
    <List active={active}>
      {list.map(({ tag, name }, index) => {
        const select = () => onSelection(tag, name)

        if (index === list.length - 1) { 
          return <Item key={tag} ref={refLastItem} tabIndex={0} onKeyUp={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') select();
          }} onClick={select}>{name}</Item>
        }

        return <Item key={tag} tabIndex={0} onKeyUp={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') select();
        }} onClick={select}>{name}</Item>
      }
      )}
    </List>
    <Icon animate={active ? 'open' : 'closed'} variants={variants} onClick={() => setActive(!active)}>
      <i className="fa-light fa-circle-caret-down fa-2x"></i>
    </Icon>
  </Content>
}

export default DropDown;
