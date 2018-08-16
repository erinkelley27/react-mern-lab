const mongoose = require('../models/User')
const userdata = require('./userdata')

const User = mongoose.model('User')

User.remove({})
  .then(_ => {
    User.collection.insert(userdata)
      .then(users => {
        console.log(users)
        process.exit()
      })
  })
  .catch(err => {
    console.log(err)
  })
