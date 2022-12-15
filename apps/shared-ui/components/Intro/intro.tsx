import React from 'react'
import StyledMarkdown from 'shared-ui/components/StyledMarkdown'
import TileContainer from 'shared-ui/components/Containers/TileContainer'
import Container from 'shared-ui/components/Containers/Container'

export interface IntroProps {
  text: string,
  tabIndex: number,
}

const Intro: React.FC<IntroProps> = ({ text }) => {
  return (
    <Container>
      <TileContainer>
        <StyledMarkdown text={text} />
      </TileContainer>
    </Container>
  )
}

export default Intro
