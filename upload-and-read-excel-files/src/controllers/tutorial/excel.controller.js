const db = require('../../models')
const Tutorial = db.Tutorial
const fs = require('fs')

const readXlsxFile = require('read-excel-file/node')

const upload = async (req, res) => {
    try {
        if (req.file === undefined) {
            return res.status(400).send('Upload excel file')
        }

        let path = __basedir + '/resources/static/assets/uploads/' + req.file.filename

        const rows = await readXlsxFile(path)
        console.log({ rows });

        try {
            fs.unlinkSync(path)
            console.log('file deleted');
        } catch (error) {
            console.log('error deleting file');
            return res.status(500).send('Error deleting the file')
        }
        return res.status(200).send('Processed success')

    } catch (error) {
        console.log(error)

        return res.status(500).send('Error uploading the file')
    }
}

module.exports = {
    upload
}