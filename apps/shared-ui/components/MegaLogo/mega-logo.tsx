import React, { Fragment } from 'react'
import {
  LogoContainer,
  TextContainer,
  Title,
} from './mega-logo.styled'
import Container from 'shared-ui/components/Containers/Container'
import P from 'shared-ui/components/Typography/Paragraph'
import SubTitle from '../Typography/SubTitle'
import HandleIconTheme from 'shared-ui/components/Icons/HandleIconTheme'

export interface MegaLogoProps {
  title: string,
  info: string,
  notes?: string[],
  logo: any
}

const MegaLogo: React.FC<MegaLogoProps> = ({ title, info, notes, logo }) => {
  let extra: string[] = []
  if (notes !== undefined) {
    extra = [...notes]
  }

  return (
    <Container>
      <LogoContainer>
        <HandleIconTheme
          size={{ w: 30, h: 30 }}
          dark={logo.logoA}
          light={logo.logoB}
        />
      </LogoContainer>
      <TextContainer>
        <Title textAlign='center' variant="h1" m={0}>{title}</Title>
        <SubTitle mt={0} mb={3} textAlign='center'>{info}</SubTitle>
        {extra.length !== 0 &&
          <Fragment>
            {extra.map((note) => (
              <P key={note} mt={0} ml={2} mr={2} mb={2} textAlign='center' fontSize={0}>{note}</P>
            ))}
          </Fragment>
        }
      </TextContainer>
    </Container>
  );
}

export default MegaLogo
