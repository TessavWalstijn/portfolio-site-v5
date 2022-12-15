import styled, {
  DefaultTheme,
  StyledComponent,
} from 'styled-components'
import {
  space,
  color,
  typography,
  layout,
  variant,
} from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const Container = styled.div<StyledProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const HandleInactive: StyledComponent<
  'div',
  DefaultTheme,
  { active: string } & StyledProps,
  never
> = styled.div`
  text-align: center;
  ${variant({
    prop: 'active',
    variants: {
      ac: {
        position: 'fixed',
        left: '-1000px',
        width: '1px',
      },
      in: {
        position: 'relative',
        left: '0px',
      },
    },
  })}

  ${layout}
`

export const HandleActive: StyledComponent<
  'div',
  DefaultTheme,
  { active: string } & StyledProps,
  never
> = styled.div`
  width: 4em;
  height: 3em;
  text-align: center;
  ${variant({
    prop: 'active',
    variants: {
      ac: {
        position: 'relative',
        left: '0px',
      },
      in: {
        position: 'fixed',
        left: '-1000px',
        width: '1px',
      },
    },
  })}

  ${layout}
`
