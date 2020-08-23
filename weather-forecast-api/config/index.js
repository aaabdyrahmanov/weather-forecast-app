// import .env variables
require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV
const HOST = process.env.HOST
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const TEST_DB_URI = process.env.TEST_DB_URI
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
  NODE_ENV,
  HOST,
  PORT,
  MONGODB_URI,
  TEST_DB_URI,
  SECRET_KEY
}
