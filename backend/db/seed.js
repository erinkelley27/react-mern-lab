const mongoose = require('../models/User')
const userData = require('./userdata')
const postcardData = require('./postcarddata')

const User = mongoose.model('User')
const Postcard = mongoose.model('Postcard')

User.remove({})
  .then(_ => {
    User.collection.insert(userData)
      .then(users => {
        console.log(userData)
        process.exit()
      })
  })
  .catch(err => {
    console.log(err)
  })

Postcard.remove({})
  .then(_ => {
    Postcard.collection.insert(postcardData)
      .then(postcards => {
        console.log(postcardData)
        process.exit()
      })
  })
  .catch(err => {
    console.log(err)
  })
