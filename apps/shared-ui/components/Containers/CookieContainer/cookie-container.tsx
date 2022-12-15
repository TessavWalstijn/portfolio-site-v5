import React from 'react'
import Header from 'shared-ui/components/Typography/Header'
import Paragraph from 'shared-ui/components/Typography/Paragraph'
import Link from 'shared-ui/components/Typography/Link'
import {
  Center,
  CookieCont,
  Buttons
} from './cookie-container.styled'

interface Props {
  handleCookie: (bool: boolean) => void
}

const CookieContainer: React.FC<Props> = ({ handleCookie }) => {
  return <Center>
    <CookieCont>
      <Header variant="h1" mt={1} ml={3} mb={0}>This site uses cookies</Header>
      <Paragraph mt={1} ml={4} mb={-50}>
        What is saved?<br />
        • Login token if user loged in<br />
        • If user accepted cookies<br />
        & Theme preference<br /><br />
        <Link href={'/cookies'}>Read more</Link>
      </Paragraph>
      <Buttons>
        <div onClick={() => { handleCookie(true) }}>
          <i className="fal fa-check-circle fa-3x" ></i>
        </div>
        <div onClick={() => { handleCookie(false) }}>
          <i className="fal fa-times-circle fa-3x" ></i>
        </div>
      </Buttons>
    </CookieCont>
  </Center>
}

export default CookieContainer;
