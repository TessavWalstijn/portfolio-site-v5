import React from 'react'
import { DefaultTheme } from 'styled-components'
import { Nav, List, Item } from './navbar.styled'
import ThemeButton from '../Buttons/ThemeButton'
import StyledProps from 'shared-ui/props/styled-props'

export interface NavBarProps extends StyledProps {
  themed: DefaultTheme
  handleTheme: (theme: 'dark' | 'light') => void,
  buttons: any[]
}

const NavBar: React.FC<NavBarProps> = ({ handleTheme, themed, buttons = [], ...other }) => {
  let navigation = [<ThemeButton onClick={handleTheme} themed={themed} />];

  if (buttons.length !== 0) {
    navigation = [...buttons, ...navigation]
  }


  return (
    <Nav {...other}>
      <List>
        {
          navigation.map((item, index) => {
            if (index === 0) {
              return (<Item key={index}>{item}</Item>)
            }

            if (index === navigation.length - 1) {
              return (<Item ml={1} key={index} >{item}</Item>)
            }

            return (<Item ml={1} key={index}>{item}</Item>)
          })
        }
      </List>
    </Nav>
  );
}

export default NavBar
