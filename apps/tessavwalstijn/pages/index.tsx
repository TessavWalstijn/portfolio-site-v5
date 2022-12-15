import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import Logos from 'shared-ui/components/Logos'
import MegaLogo from 'shared-ui/components/MegaLogo'
import NavBar from 'shared-ui/components/NavBar'
// import getApiUrl from '@utils/apiUrl'
import NavAnimationButton from 'shared-ui/components/Buttons/NavAnimationButton'
import Intro from 'shared-ui/components/Intro'
import H from 'shared-ui/components/Typography/Header'
import Container from 'shared-ui/components/Containers/Container'
import ProjectTile from 'shared-ui/components/ProjectTile'
import NavHoverButton from 'shared-ui/components/Buttons/NavHoverButton'
import NavThemedButton from 'shared-ui/components/Buttons/NavThemedButton'
// import getHighlighted from 'shared-content/getHighlighted'
// import { createClient } from 'contentful'
// import * as dotenv from 'dotenv'

// dotenv.config()

const { ImageLogo } = Logos

const Home = ({
  entity,
  projects,
  currentTheme,
  handleTheme,
}: any) => {
  console.log(projects)
  return (
    <>
      <Head>
        <title>{entity.title}</title>
        <meta name="author" content="Tessa E. van Walstijn" />
        <meta
          name="description"
          content="Hi I build things for the web. I'm a software engineer based in Hoorn, the Netherlands. Specializing in building exceptional, high quality user experience websites and applications."
        />
        <meta
          name="keywords"
          content="TessavWalstijn, Portfolio, Developer, Engineer, Amsterdam Developer"
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
          {...entity}
          themed={currentTheme}
          logo={{
            logoA: (
              <ImageLogo
                variant
                src="https://stc.sqbl.me/images/TessavWalstijn.png"
                width={300}
                height={300}
                alt="A drawn woman with dark blond hair"
              />
            ),
            logoB: (
              <ImageLogo
                src="https://stc.sqbl.me/images/TessavWalstijn-Alpha.png"
                width={300}
                height={300}
                alt="A drawn woman with dark blond hair"
              />
            ),
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/tabindex-no-positive */}
        {entity.intro && <Intro text={entity.intro} tabIndex={0} />}
        <Container pb={65}>
          <H variant="h2">Highlighted</H>
          {projects.map(
            (project: any) =>
              project.isPublished && (
                <ProjectTile {...project} tabIndex={0} />
              ),
          )}
        </Container>
      </ThemeProvider>
    </>
  )
}

export async function getStaticProps() {
  const api = 'http://api.sqbl.me/'
  // const api = 'http://localhost:4040/'
  // const api = 'http://localhost:4444/'

  const resEntity = await fetch(`${api}entities/twalstijn`)
  const entity = await resEntity.json()

  const resProjects = await fetch(`${api}projects/by/twalstijn/top5`)
  const projects = await resProjects.json()

  // NOTE: GraphQL works
  // const projects = await getHighlighted('TessavWalstijn')

  // NOTE: Client works
  // const client = createClient({
  //   space: process.env.CONTENTFUL_SPACE_ID,
  //   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_CDA,
  // })

  // const highlighted = await client.getEntries({
  //   content_type: 'project',
  // })

  // Pass post data to the page via props
  return {
    props: {
      entity,
      projects,
      // highlighted,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1200,
  }
}

export default Home
