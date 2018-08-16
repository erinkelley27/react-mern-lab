const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  username: String,
  email: String,
  password: String
})

mongoose.model('User', User)

module.exports = mongoose
