const Sequelize = require('sequelize')
const db = require('../db')

const Quote = db.define(
  'Quote',
  {
    quote: Sequelize.STRING
  },
  {
    timestamps: false,
    tableName: 'quotes'
  }
)

module.exports = Quote