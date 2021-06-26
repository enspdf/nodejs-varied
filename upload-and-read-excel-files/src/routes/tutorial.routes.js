const express = require('express')
const router = express.Router()
const excelController = require('../controllers/tutorial/excel.controller')
const upload = require('../middleware/upload')

let routes = (app) => {
    console.log("init routes");
    router.post('/upload', upload.single('file'), excelController.upload)

    app.use('/api/excel', router)
}

module.exports = routes