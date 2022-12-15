import React from 'react'
import { Nav, List, Item } from './sub-menu.styled'
import NavHoverButton from '../Buttons/NavHoverButton';
import NavThemedButton from '../Buttons/NavThemedButton';

export interface SubMenuProps {
  buttons: any[]
}

const SubMenu: React.FC<SubMenuProps> = ({ buttons }) => {

  return (
    <Nav>
      <List>
        {
          buttons.map(({ icon, iconHover, iconLight, text, link }: any, index: number) => {
            const NavButton = iconLight ? (
              <NavThemedButton
                url={link}
                text={text}
                icon={icon}
                iconLight={iconLight}
                blank
              />) : (<NavHoverButton
                url={link}
                text={text}
                icon={icon}
                iconHover={iconHover}
                blank
              />)

            if (index === 0) {
              return (<Item key={index}>{NavButton}</Item>)
            }

            return (<Item ml={1} key={index}>{NavButton}</Item>)
          })
        }
      </List>
    </Nav>
  )
}

export default SubMenu
