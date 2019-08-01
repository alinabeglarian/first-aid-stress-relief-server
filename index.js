const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./db')
const Image = require('./image/model')
const ImageRouter = require('./image/router')
const Quote = require('./quote/model')
const QuoteRouter = require('./quote/router')

const app = express()
const jsonParser = bodyParser.json()

app.use(cors())
app.use(jsonParser)
app.use(ImageRouter)
app.use(QuoteRouter)

const port = process.env.PORT || 4000
app.listen(port, console.log(`Listening on port ${port}`))