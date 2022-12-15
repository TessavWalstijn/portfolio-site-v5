import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import Logos from 'shared-ui/components/Logos'
import MegaLogo from 'shared-ui/components/MegaLogo'
import NavBar from 'shared-ui/components/NavBar'
import NavHoverButton from 'shared-ui/components/Buttons/NavHoverButton'
import NavThemedButton from 'shared-ui/components/Buttons/NavThemedButton'
import NavAnimationButton from 'shared-ui/components/Buttons/NavAnimationButton'
import Container from 'shared-ui/components/Containers/Container'
import StyledMarkdown from 'shared-ui/components/StyledMarkdown'
import Iframe from 'shared-ui/components/Iframe'
import SubMenu from 'shared-ui/components/SubMenu'
import Video from 'shared-ui/components/Video'
import Image from 'shared-ui/components/Image'

const { ImageLogo } = Logos

const Home = ({ project, currentTheme, handleTheme }: any) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const rounded =
    typeof project.thumbnail.rounded === 'string'
      ? false
      : project.thumbnail.rounded
  const image =
    typeof project.thumbnail.rounded === 'string'
      ? project.thumbnail.rounded
      : project.thumbnail.image

  return (
    <>
      <Head>
        <title>Project • {project.title}</title>
        <meta name="author" content="Tessa E. van Walstijn" />
        <meta name="description" content={project.intro} />
        <meta
          name="keywords"
          content={project.tags.map(
            (tag: string, index: number) =>
              `${tag}${index === project.tags.length - 1 ? '' : ','}`,
          )}
        />
        <style>{`body { background-color: ${currentTheme.colors.lowlight} }`}</style>
      </Head>
      <ThemeProvider theme={currentTheme}>
        <NavBar
          handleTheme={handleTheme}
          themed={currentTheme}
          buttons={[
            <NavThemedButton
              url="/"
              text="Home"
              icon="fa-light fa-house-night"
              iconLight="fa-light fa-house-day"
            />,
            <NavHoverButton
              url="/about"
              text="About"
              icon="fa-light fa-circle-question"
              iconHover="fa-light fa-circle-info"
            />,
            <NavAnimationButton
              url="/projects"
              text="Projects"
              icons={[
                <i className="fa-light fa-game-console-handheld fa-2x" />,
                <i className="fa-light fa-paintbrush-pencil fa-2x" />,
                <i className="fa-light fa-browser fa-2x" />,
              ]}
            />,
          ]}
        />
        <MegaLogo
          {...project}
          themed={currentTheme}
          logo={{
            logoA: (
              <ImageLogo
                variant={rounded}
                src={image}
                width={300}
                height={300}
              />
            ),
            logoB: (
              <ImageLogo
                variant={rounded}
                src={image}
                width={300}
                height={300}
              />
            ),
          }}
        />
        <SubMenu buttons={project.links} />
        <Container pb={65}>
          {project.posts.map(
            ({ type, content }: { type: string; content: any }) => {
              const index = uuid()

              switch (type) {
                case 'text':
                  return (
                    <StyledMarkdown
                      key={`${index}-${type}`}
                      text={content}
                    />
                  )
                case 'video':
                  return (
                    <Video key={`${index}-${type}`} links={content} />
                  )
                case 'image':
                  return (
                    <Image
                      mt={1}
                      mb={1}
                      key={`${index}-${type}`}
                      {...content}
                    />
                  )
                case 'iframe':
                  const { link, width, height, mobile } = content
                  return (
                    <Iframe
                      key={`${index}-${type}`}
                      link={link}
                      width={width}
                      height={height}
                      mobile={mobile}
                    />
                  )
                default:
                  return null
              }
            },
          )}
        </Container>
      </ThemeProvider>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    fallback: true,

    paths: [
      { params: { name: 'squeeble.bot' } },
      { params: { name: 'vscode.mint-it' } },
      { params: { name: 'react.linda' } },
      { params: { name: 'vscode.deco-it' } },
      { params: { name: 'react.ohpen' } },
      { params: { name: 'react-native.zilverenkruis' } },
      { params: { name: 'phaserjs.stikeez' } },
      { params: { name: 'stackexchange.readme-stats' } },
      { params: { name: 'vscode.trepid-ink' } },
      { params: { name: 'createjs.triviacrack-2' } },
      { params: { name: 'createjs.willhero' } },
      { params: { name: 'createjs.triviacrack' } },
      { params: { name: 'mtdefjs.3d-cube' } },
      { params: { name: 'phaserjs.snake' } },
      { params: { name: 'unity3d.binding-of-isaac' } },
    ],
  }
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: any }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const api = 'http://api.sqbl.me/'
  // const api = 'http://localhost:4040/'
  // const api = 'http://localhost:4444/'

  // const resEntity = await fetch(`${api}entities/twalstijn`)
  // const entity = await resEntity.json()

  const resProjects = await fetch(`${api}projects/${params.name}`)
  const project = await resProjects.json()

  // Pass post data to the page via props
  return {
    props: {
      // entity,
      project,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1200,
  }
}

export default Home
