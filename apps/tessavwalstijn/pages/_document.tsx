import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://stc.sqbl.me/css/fonts.css"
            rel="stylesheet"
            type="text/css"
            media="all"
            key="fonts"
          />
          <meta charSet="utf-8" />
          <script
            src="https://kit.fontawesome.com/59ca3cc0eb.js"
            crossOrigin="anonymous"
            async
          />
        </Head>
        <body>
          <main>
            <Main />
            <NextScript />
          </main>
        </body>
      </Html>
    )
  }
}

export default MyDocument
