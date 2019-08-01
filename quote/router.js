const { Router } = require('express')
const Quote = require('./model')

const router = new Router()

router.get(
  '/quotes',
  (req, res, next) => { Quote
    .findAll()
    .then((quotes) => {
      if (quotes.length === 0) {
        res.status(404).send({ message: 'The are no quotes' })
      } else {
        res.json(quotes[Math.floor(Math.random()*quotes.length)])
      }
    })
    .catch(error => next(error))
  }
)

module.exports = router