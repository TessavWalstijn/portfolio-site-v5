import styled from 'styled-components'
// import { space, color, typography, layout } from 'styled-system'
import Container from 'shared-ui/components/Containers/Container'

export const Center = styled.div`
  position: fixed;
  top: 20px;
  left: 0px;
  width: 100%;
  z-index: 10;
  pointer-events: none;
`

export const CookieCont = styled(Container)`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.highlight};
  border-radius: 1.2rem;
  margin: 0 auto;
  pointer-events: initial;

  @media (max-width: 30rem) {
    margin: 0 8px;
    width: initial;
  }

  &:hover {
    border: 2px solid;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  div {
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  @media (min-width: 30rem) {
    flex-direction: column;
    margin-left: calc(100% - 50px);
    margin-top: -92px;
    margin-bottom: 45px;
  }
`
