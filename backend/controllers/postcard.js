const express = require('express')
const router = express.Router()
const mongoose = require('../models/Postcard')
const Postcard = mongoose.model('Postcard')

router.get('/', (req, res) => {
  Postcard.find({})
    .then(postcards =>
      res.json(postcards))
})

router.post('/', (req, res) => {
  Postcard.create(req.body)
    .then((postcard) => {
      res.json(postcard)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/:id', (req, res) => {
  Postcard.findById(req.params.id)
    .then((postcard) => {
      res.json(postcard)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.delete('/:id', (req, res) => {
  Postcard.findOneAndRemove({ _id: req.params.id })
    .then(postcard => {
      res.redirect('/')
    })
})

module.exports = router
