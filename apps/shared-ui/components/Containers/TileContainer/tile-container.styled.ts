import styled from 'styled-components'
// import { space, color, typography, layout } from 'styled-system'
import Container from 'shared-ui/components/Containers/Container'
// import StyledProps from 'shared-ui/props/styled-props'
import React from 'react'

export const TileCont = styled(Container)<React.FC>`
  position: relative;
  margin: 0 0 4rem 0;
  border-bottom-left-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.lowlight};
  z-index: 1;
  width: 100%;

  ::before {
    content: '';
    position: absolute;
    height: calc(100% - 6rem);
    width: 69%;
    top: 5.9rem;
    left: 1.1rem;
    background-color: ${(props) => props.theme.colors.lowlight};
    border-bottom-left-radius: 1.2rem;
    z-index: -1;
  }

  ::after {
    content: '';
    position: absolute;
    height: calc(100% - 6rem);
    width: 69%;
    top: 6rem;
    left: 1rem;

    background-image: radial-gradient(
      100% 100% at bottom left,
      ${(props) => props.theme.colors.highlight},
      transparent
    );
    background-repeat: no-repeat;
    border-bottom-left-radius: 1.2rem;
    z-index: -2;
  }

  :hover {
    ::after {
      top: 6.1rem;
      left: 0.9rem;
    }
  }

  :focus-visible {
    outline: solid 0rem;

    ::after {
      top: 6.2rem;
      left: 0.8rem;
    }
  }
`
