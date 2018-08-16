const express = require('express')
const router = express.Router()
const mongoose = require('../models/Postcard')
const Postcard = mongoose.model('Postcard')

router.get('/', (req, res) => {
  Postcard.find({})
    .then(postcards =>
      res.json(postcards))
})

module.exports = router
