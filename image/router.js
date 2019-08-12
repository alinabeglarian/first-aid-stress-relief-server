const { Router } = require('express')
const Image = require('./model')

const router = new Router()

router.get(
  '/randomimage',
  (req, res, next) => { Image
    .findAll()
    .then((images) => {
      if (images.length === 0) {
        res.status(404).send({ message: 'The are no images' })
      } else {
        res.json(images[Math.floor(Math.random()*images.length)])
      }
    })
    .catch(error => next(error))
  }
)

router.post(
  '/images',
  (req, res, next) => Image
    .create(req.body)
    .then(image => 
      res
        .status(201)
        .json(image))
    .catch(error => next(error))
)

module.exports = router