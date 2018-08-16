const express = require('express')
const parser = require('body-parser')
const passport = require('./config/passport')()

const app = express()

const postcardController = require('./controllers/postcard.js')
const userController = require('./controllers.user.js')

app.use(parser.json())
app.use(passport.initialize())

app.use('/', postcardController)
app.use('/user', userController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
