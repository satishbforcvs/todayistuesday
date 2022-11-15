const express = require('express')
const morgan = require('morgan')
const demoRouter = require('./src/routes/demo-router')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/', demoRouter)

module.exports = app
