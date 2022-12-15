// const config = require('config')
const express = require('express')
const path = require('path')
const cors = require('cors')
const vhost = require('vhost')

const twalstijn = require('../tessavwalstijn/twalstijn')

const fallbackPort =
  process.env.NODE_ENV === 'production' ? 3333 : 3030
const port = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : fallbackPort

const server = express()

server.use(express.json())
server.use(
  express.urlencoded({
    extended: true,
    type: '*/x-www-form-urlencoded',
  }),
)

server.use(cors())

server.use(vhost('tessavwalstijn.com', twalstijn))
server.use(vhost('twalstijn.lvh.me', twalstijn))
server.use(vhost('twalstijn.localhost', twalstijn))

server.listen(port, (err) => {
  if (err) throw err
  console.log(`Listening on post ${port}`)
})
