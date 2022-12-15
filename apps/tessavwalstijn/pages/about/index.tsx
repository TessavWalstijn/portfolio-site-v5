import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import NavBar from 'shared-ui/components/NavBar'
import Logos from 'shared-ui/components/Logos'
import Container from 'shared-ui/components/Containers/Container'
import StyledMarkdown from 'shared-ui/components/StyledMarkdown'
import NavHoverButton from 'shared-ui/components/Buttons/NavHoverButton'
import NavThemedButton from 'shared-ui/components/Buttons/NavThemedButton'
import NavAnimationButton from 'shared-ui/components/Buttons/NavAnimationButton'
import MegaLogo from 'shared-ui/components/MegaLogo'
import SubMenu from 'shared-ui/components/SubMenu'

const { ImageLogo } = Logos

const About = (data: any) => {
  const { currentTheme, handleTheme, links, about } = data

  return (
    <>
      <Head>
        <title>Tessa van Walstijn • About</title>
        <meta name="author" content="Tessa E. van Walstijn" />
        <meta
          name="keywords"
          content="TessavWalstijn, About, Developer, Engineer"
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
          {...data}
          themed={currentTheme}
          logo={{
            logoA: (
              <ImageLogo
                variant
                src="https://stc.sqbl.me/images/TessavWalstijn.png"
                width={300}
                height={300}
              />
            ),
            logoB: (
              <ImageLogo
                src="https://stc.sqbl.me/images/TessavWalstijn-Alpha.png"
                width={300}
                height={300}
              />
            ),
          }}
        />
        {links && <SubMenu buttons={links} />}
        <Container pb={65} pt={30}>
          <StyledMarkdown text={about} />
        </Container>
      </ThemeProvider>
    </>
  )
}

// This function gets called at build time
// export async function getStaticPaths() {
//   return {
//     // Only `/posts/1` and `/posts/2` are generated at build time
//     paths: [
//       // { params: { id: '1' } },
//       // { params: { id: '2' } }
//     ],
//     // Enable statically generating additional pages
//     // For example: `/posts/3`
//     fallback: true,
//   }
// }

// This also gets called at build time
export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  const api = 'http://api.sqbl.me/'
  // const api = 'http://localhost:4040/'
  // const api = 'http://localhost:4444/'

  const resEntity = await fetch(`${api}entities/twalstijn`)
  const entity = await resEntity.json()

  // const resProjects = await fetch(`${api}projects/by/twalstijn`)
  // const projects = await resProjects.json()

  // Pass post data to the page via props
  return {
    props: entity,
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1200,
  }
}

export default About
