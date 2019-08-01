const Sequelize = require('sequelize')
const db = require('../db')

const Image = db.define(
  'image',
  {
    url: Sequelize.STRING
  },
  {
    timestamps: false,
    tableName: 'images'
  }
)

module.exports = Image