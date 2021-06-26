const multer = require('multer')

const excelFilter = (req, file, cb) => {
    if (file.mimetype.includes('excel') || file.mimetype.includes('spreadsheetml')) {
        cb(null, true)
    } else {
        cb('Only excel files are allowed', false)
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/resources/static/assets/uploads/')
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        cb(null, `${Date.now()}-excel-${file.originalname}`)
    }
})

const uplodFile = multer({ storage, fileFilter: excelFilter })

module.exports = uplodFile