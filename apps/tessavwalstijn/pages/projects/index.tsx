import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import NavBar from 'shared-ui/components/NavBar'
import NavAnimationButton from 'shared-ui/components/Buttons/NavAnimationButton'
import H from 'shared-ui/components/Typography/Header'
import Container from 'shared-ui/components/Containers/Container'
import ProjectTile from 'shared-ui/components/ProjectTile'
import SortContainer from 'shared-ui/components/Containers/SortContainer'
import NavHoverButton from 'shared-ui/components/Buttons/NavHoverButton'
import NavThemedButton from 'shared-ui/components/Buttons/NavThemedButton'

const Home = ({ projects, currentTheme, handleTheme }: any) => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [filter, setFilter] = useState(['all', '2021'])

  const applyFilter = () => {
    let newFilter = projects
    filter.forEach((tag) => {
      const filtered = tag === 'all' ? newFilter : []
      if (tag !== 'all') {
        const maxProjects = newFilter.length
        for (let i = 0; i < maxProjects; i += 1) {
          const project = newFilter[i]
          const { tags } = project
          const maxTags = tags.length
          for (let j = 0; j < maxTags; j += 1) {
            const projectTag = tags[j]
            if (projectTag === tag) {
              filtered.push(project)
            }
          }
        }
      }

      newFilter = filtered
    })
    setFilteredProjects(newFilter)
  }

  const onFilter = (tag, type: string) => {
    const [tech, year] = filter

    switch (type) {
      case 'year':
        setFilter([tech, tag])
        break
      case 'tech':
        setFilter([tag, year])
        break
      default:
        break
    }
  }

  useEffect(() => {
    applyFilter()
  }, [filter])

  let tags = []
  const getTags = () => {
    const maxProjects = projects.length
    for (let i = 0; i < maxProjects; i += 1) {
      const project = projects[i]
      const { tags: projectTags } = project
      const maxTags = projectTags.length
      for (let j = 0; j < maxTags; j += 1) {
        const tag = projectTags[j]
        if (!/^\d{4}$/.test(tag)) {
          tags.push(tag)
        }
      }
    }
    tags = tags.filter((item, pos) => tags.indexOf(item) === pos)

    tags = tags.map((tag) => {
      let name
      switch (tag) {
        case 'top5':
          name = 'Highlighted'
          break
        case 'nodejs':
          name = 'NodeJS'
          break
        case 'socetio':
          name = 'SocetIO'
          break
        case 'electron':
          name = 'Electron'
          break
        case 'nextjs':
          name = 'NextJS'
          break
        case 'react':
          name = 'React'
          break
        case 'styled-components':
          name = 'Styled Components'
          break
        case 'styled-system':
          name = 'Styled System'
          break
        case 'framer-motion':
          name = 'Framer Motion'
          break
        case 'typescript':
          name = 'TypeScript'
          break
        case 'vscode':
          name = 'VS Code'
          break
        case 'storybook':
          name = 'Storybook'
          break
        case 'gatsby':
          name = 'Gatsby'
          break
        case 'gsap':
          name = 'GSAP'
          break
        case 'threejs':
          name = 'ThreeJS'
          break
        case 'react-native':
          name = 'React Native'
          break
        case 'stackexchange-api':
          name = 'Stack Exchange API'
          break
        case 'createjs':
          name = 'CreateJS'
          break
        case 'howlerjs':
          name = 'HowlerJS'
          break
        case 'gulp':
          name = 'Gulp'
          break
        case 'mtdef':
          name = 'mtdefJS'
          break
        case 'math':
          name = 'Math'
          break
        case 'phaserjs':
          name = 'PhaserJS'
          break
        case 'unity3d c#':
          name = 'Unity 3D C#'
          break
        default:
          name = tag
          break
      }

      return { tag, name }
    })
  }

  getTags()

  return (
    <>
      <Head>
        <title>Tessa van Walstijn • Projects</title>
        <meta name="author" content="Tessa E. van Walstijn" />
        <meta
          name="description"
          content="Where you can view the projects I have worked on."
        />
        <meta
          name="keywords"
          content="TessavWalstijn, Portfolio, Projects, Developer, Engineer, Web Devleoper"
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
        {/* <MegaLogo {...entity} themed={currentTheme} logo={{
          logoA: <ImageLogo src='https://stc.sqbl.me/images/TessavWalstijn.png' />,
          logoB: <ImageLogo src='https://stc.sqbl.me/images/TessavWalstijn.png' />
        }} /> */}
        <Container flexDirection="row" justifyContent="space-between">
          {/* <SortContainer title="Tech" list={[
          {tag: 'all', name: 'all'},
          {tag: 'all', name: 'all'},
        ]} /> */}
          <SortContainer
            title="Tech"
            list={[{ tag: 'all', name: 'All' }, ...tags]}
            changeTag={(tag) => {
              onFilter(tag, 'tech')
            }}
          />
          <SortContainer
            title="Year"
            list={[
              { tag: 'all', name: 'All' },
              { tag: '2021', name: '2021', active: true },
              { tag: '2020', name: '2020' },
              { tag: '2019', name: '2019' },
              { tag: '2018', name: '2018' },
              { tag: '2017', name: '2017' },
              { tag: '2016', name: '2016' },
            ]}
            changeTag={(tag) => {
              onFilter(tag, 'year')
            }}
          />
        </Container>
        <Container pb={65}>
          <H variant="h2">Projects</H>
          {filteredProjects.map(
            (project: any) =>
              project.isPublished && <ProjectTile {...project} />,
          )}
        </Container>
      </ThemeProvider>
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const api = 'http://api.sqbl.me/'
  // const api = 'http://localhost:4040/'
  // const api = 'http://localhost:4444/'

  // const resEntity = await fetch(`${api}entities/twalstijn`)
  // const entity = await resEntity.json()

  const resProjects = await fetch(`${api}projects/by/twalstijn`)
  const projects = await resProjects.json()

  // Pass post data to the page via props
  return {
    props: {
      // entity,
      projects,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1200,
  }
}

export default Home
