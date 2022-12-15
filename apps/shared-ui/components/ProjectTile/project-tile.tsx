import React from 'react'
import StyledMarkdown from 'shared-ui/components/StyledMarkdown'
import TileContainer from 'shared-ui/components/Containers/TileContainer'
import Link from 'shared-ui/components/Typography/Link'
import { Image, Title, Wrapper, Text, More } from './project-tile.styled'
import { useRouter } from 'next/router'

export interface ProjectTileProps {
  title: string
  intro: string
  thumbnail: {
    image: string
  }
  link: string
  outLink?: string
}

const ProjectTile: React.FC<ProjectTileProps> = ({ intro, title, thumbnail, link, outLink = '' }) => {
  const router = useRouter()

  const { image } = thumbnail;
  const href = outLink === '' ? `/projects/${link}` : outLink
  const onKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      router.push(href)
    }
  }

  return (
    <TileContainer onKeyUp={onKeyUp}>
      <Link target={outLink === '' ? '' : '_blank'} href={href} clean>
        <Wrapper>
          <Image
            ml={3}
            mb={2}
            src={image}
            alt={title}
            width={300} height={300}
          />
          <Text>
            <Title variant="h3">
              {title}
            </Title>
            <StyledMarkdown text={intro} />
            <More>Click to view project page</More>
          </Text>
        </Wrapper>
      </Link>
    </TileContainer>
  )
}

export default ProjectTile
