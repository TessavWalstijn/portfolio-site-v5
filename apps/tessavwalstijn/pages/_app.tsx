import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import {
  twalstijnLightTheme,
  twalstijnMainTheme,
} from 'shared-ui/themes'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(twalstijnMainTheme)

  const handleTheme = (theme: 'dark' | 'light') => {
    switch (theme) {
      default:
      case 'dark':
        setCurrentTheme(twalstijnMainTheme)
        break
      case 'light':
        setCurrentTheme(twalstijnLightTheme)
    }

    localStorage.setItem('tessavwalstijn-theme', theme)
  }

  useEffect(() => {
    const theme: string | undefined = localStorage.getItem(
      'tessavwalstijn-theme',
    )

    if (theme === 'light' || theme === 'dark') {
      handleTheme(theme)
    } else {
      handleTheme('dark')
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <script
          defer
          data-domain="tessavwalstijn.com"
          src="https://plausible.io/js/plausible.js"
        />
      </Head>
      <Component
        currentTheme={currentTheme}
        handleTheme={handleTheme}
        {...pageProps}
      />
    </>
  )
}

export default MyApp
