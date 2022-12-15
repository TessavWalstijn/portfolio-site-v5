import React from 'react'
import { DefaultTheme } from 'styled-components'
import { Button, Icon, Text, PP, Container } from './theme-button.styled'
import HandleIconTheme from 'shared-ui/components/Icons/HandleIconTheme'

export interface ThemeButtonProps {
  themed: DefaultTheme
  onClick: (theme: 'dark' | 'light') => void
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ themed, onClick, ...other }) => {
  return (
    <Button
      {...other}
    >
      <Container
        tabIndex={0}
        onClick={() => { onClick(themed.type === 'light' ? 'dark' : 'light') }}
        onKeyUp={(event: React.KeyboardEvent) => event.key === 'Enter' && onClick(themed.type === 'light' ? 'dark' : 'light')}
      >
        <HandleIconTheme
          dark={<Icon className="fa-light fa-sun fa-2x" />}
          light={<Icon className="fa-light fa-stars fa-2x" />}
        />
        <Text>
          <PP m={0} >
            Theme
          </PP>
        </Text>
      </Container>
    </Button>
  )
}

export default ThemeButton
