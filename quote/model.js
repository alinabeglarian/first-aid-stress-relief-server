const Sequelize = require('sequelize')
const db = require('../db')

const Quote = db.define(
  'Quote',
  {
    quoteText: {
      type: Sequelize.STRING,
      field: "quote_text",
    },
    quoteAuthor: {
      type: Sequelize.STRING,
      field: "quote_author",
    }
  },
  {
    timestamps: false,
    tableName: 'quotes'
  }
)

module.exports = Quote