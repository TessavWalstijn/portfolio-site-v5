import styled, {
  DefaultTheme,
  StyledComponent,
} from 'styled-components'
import { variant } from 'styled-system'
import StyledProps from 'shared-ui/props/styled-props'

export const FontAwesomeLogo = styled.i`
  position: relative;
  display: block;
  top: -1px;
  left: -1px;
  width: 300px;
  height: 300px;
`

export const SqueebleLogo = styled.i`
  position: relative;
  display: block;
  top: 22px;
  left: -1px;
  width: 300px;
  height: 300px;
`

export const ImageLogo: StyledComponent<
  'img',
  DefaultTheme,
  { variant?: boolean } & StyledProps,
  never
> = styled.img`
  position: relative;
  display: block;
  top: -1px;
  left: -1px;
  width: 300px;
  height: 300px;

  ${variant({
    prop: 'variant',
    variants: {
      true: {
        borderRadius: '50%',
      },
      false: {
        borderRadius: '0%',
      },
    },
  })}
`

ImageLogo.defaultProps = {
  variant: false,
}
