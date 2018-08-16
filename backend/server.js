const express = require('express')
const parser = require('body-parser')

const app = express()

const postcardController = require('./controllers/postcard.js')

app.use(parser.json())

app.use('/', postcardController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
