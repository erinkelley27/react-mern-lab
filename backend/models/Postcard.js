const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Postcard = new Schema({
  to: String,
  from: String,
  message: String
})

mongoose.model('Postcard', Postcard)

module.exports = mongoose
