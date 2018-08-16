const mongoose = require('../models/Postcard')
const postcardData = require('./postcarddata')

const Postcard = mongoose.model('Postcard')

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
