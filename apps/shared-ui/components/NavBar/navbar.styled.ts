import styled from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Nav = styled.nav<StyledProps>`
  background-color: ${(props) => props.theme.colors.lowlight};
  color: ${(props) => props.theme.colors.highlight};
  position: fixed;
  display: flex;
  align-content: center;
  justify-content: center;
  border-top: solid 1px ${(props) => props.theme.colors.highlight};
  box-shadow: 0px -3px ${(props) => props.theme.colors.lowlight};
  bottom: 0px;
  padding: 10px 0px;
  left: 0px;
  width: 100%;
  z-index: 10;

  ::before {
    content: '';
    position: fixed;
    bottom: 55px;
    width: 0px;
    height: 0px;
    border-left: solid 8px transparent;
    border-right: solid 8px transparent;
    border-top: solid 8px ${(props) => props.theme.colors.highlight};
    z-index: 11;
  }

  ::after {
    content: '';
    position: fixed;
    bottom: 56px;
    width: 0px;
    height: 0px;
    border-left: solid 7px transparent;
    border-right: solid 7px transparent;
    border-top: solid 7px ${(props) => props.theme.colors.lowlight};
    z-index: 12;
  }

  @media (min-width: 50rem) {
    bottom: initial;
    background-color: transparent;
    box-shadow: 0px 0px;
    width: initial;
    border-top: initial;
    padding: 0;
    left: calc(15% - 60px);

    ::before {
      border-top: solid 7px transparent;
    }

    ::after {
      border-top: solid 8px transparent;
    }
  }

  @media (min-width: 70rem) {
    left: calc(25% - 60px);
  }

  @media (min-width: 110rem) {
    left: calc(30% - 60px);
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const List = styled.ul<StyledProps>`
  background-color: transparent;
  padding: 0;
  margin: 0;

  display: flex;
  align-content: center;
  justify-content: center;

  @media (min-width: 50rem) {
    bottom: initial;
    flex-direction: column;
    background-color: transparent;
    width: initial;
    border-top: initial;
    padding: 0;
  }
`

export const Item = styled.li<StyledProps>`
  margin-left: 0rem;
  display: block;

  @media (min-width: 50rem) {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`
