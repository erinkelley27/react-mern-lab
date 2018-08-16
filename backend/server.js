const express = require('express')
const parser = require('body-parser')

const app = express()

const userController = require('./controllers/user.js')

app.use(parser.json())

app.use('/user', userController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
