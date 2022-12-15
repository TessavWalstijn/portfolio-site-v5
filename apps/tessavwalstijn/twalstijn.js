const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const appTwalstijn = next({ dev, dir: '../tessavwalstijn/' })
const handleTwalstijn = appTwalstijn.getRequestHandler()
const twalstijn = express()

appTwalstijn.prepare().then(() => {
  const routeTWalstijn = (req, res) => {
    const url = req.originalUrl

    if (url.search('/projects/') === 0 && url.length > 9) {
      const project = url.replace('/projects', '')

      console.log(project)

      return appTwalstijn.render(
        req,
        res,
        `/projects${project}`,
        req.query,
      )
    }

    if (url.length === 1) {
      return appTwalstijn.render(req, res, '/', req.query)
    }

    return appTwalstijn.render(req, res, `${url}`, req.query)
  }

  twalstijn.get('/', routeTWalstijn)
  twalstijn.get('/about', routeTWalstijn)
  twalstijn.get('/projects', routeTWalstijn)
  twalstijn.get('/projects/*', routeTWalstijn)

  twalstijn.all('*', (req, res) => handleTwalstijn(req, res))
})

module.exports = twalstijn
