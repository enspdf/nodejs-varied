const express = require('express')
const app = express()
const db = require('./models')
const initRoutes = require('./routes/tutorial.routes')

global.__basedir = __dirname + '/..'

app.use(express.urlencoded({ extended: true }))
initRoutes(app)

let port = 8080

app.listen(8080, () => console.log('Running on port 8080'))