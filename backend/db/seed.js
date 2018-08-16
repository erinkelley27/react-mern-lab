const mongoose = require('../models/User')
const data = require('./data')

const User = mongoose.model('User')

User.remove({})
  .then(_ => {
    User.collection.insert(data)
      .then(users => {
        console.log(users)
        process.exit()
      })
  })
  .catch(err => {
    console.log(err)
  })
