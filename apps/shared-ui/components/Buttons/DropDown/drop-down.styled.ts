import styled, {
  DefaultTheme,
  StyledComponent,
} from 'styled-components'
import { motion } from 'framer-motion'
import {
  space,
  color,
  typography,
  layout,
  variant,
} from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Content = styled.div<StyledProps>`
  flex-direction: column;
  display: flex;
  background-color: ${(props) => props.theme.colors.lowlight};
  color: ${(props) => props.theme.colors.highlight};
  align-items: left;
  justify-content: center;
  position: relative;
  outline: none;
  margin: 0 0 0 2rem;
  width: calc(100% - 2rem);
  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Label = styled.div<StyledProps>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 0.4rem;
  border: 0.1rem solid ${(props) => props.theme.colors.highlight};
  border-radius: 1.5rem;
  font-family: 'Primary';
  font-weight: ${(props) =>
    props.theme.type === 'dark'
      ? props.theme.fontWeights.normal
      : props.theme.fontWeights.strong};
  font-size: ${(props) => props.theme.fontSizes[0]};
  cursor: pointer;

  :focus-visible {
    outline: solid 0.2rem ${(props) => props.theme.colors.highlight};
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

const ListVariant = variant({
  prop: 'active',
  variants: {
    true: {
      display: 'block',
      borderRadius: '1.5rem',
      width: 'calc(100% - .2rem)',
      top: 0,
      position: 'absolute',
    },
    false: {
      display: 'none',
    },
  },
})

export const List: StyledComponent<
  'div',
  DefaultTheme,
  { active?: boolean } & StyledProps,
  never
> = styled.div`
  border: 0.1rem solid ${(props) => props.theme.colors.highlight};
  appearance: none;
  background-color: ${(props) => props.theme.colors.lowlight};
  z-index: 2;

  ${ListVariant}
  ${typography}
  ${space}
  ${color}
  ${layout}
`

List.defaultProps = {
  active: false,
}

export const Item = styled.div<StyledProps>`
  color: ${(props) => props.theme.colors.highlight};
  text-align: center;
  display: block;
  padding: 0.4rem 0;
  transition: 0.25s ease;
  width: 100%;
  font-family: 'Primary';
  font-weight: ${(props) =>
    props.theme.type === 'dark'
      ? props.theme.fontWeights.normal
      : props.theme.fontWeights.strong};
  font-size: ${(props) => props.theme.fontSizes[0]};
  border-radius: 1.5rem;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
  }

  :focus-visible {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    outline: solid 0rem;
  }

  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const Icon = styled(motion.div)<StyledProps>`
  position: relative;
  top: -2.5rem;
  left: calc(100% - 2.5rem);
  width: 2rem;
  z-index: 3;
  background-color: ${(props) => props.theme.colors.lowlight};
  border-radius: 50%;

  ${typography}
  ${space}
  ${color}
  ${layout}
`
