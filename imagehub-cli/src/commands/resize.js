const { program } = require('commander')
const sharp = require('sharp')
const fs = require('fs')
const ora = require('ora')

module.exports = (file, { width, height }) => {
  const loading = ora("Rezising image")
  loading.start()

  const options = JSON.parse(JSON.stringify({ width, height }))

  const resized = sharp(file).resize(options)

  if (program.overwrite) {
    resized.toBuffer().then(buffer => {
      fs.writeFile(file, buffer, () => {
        loading.succeed("Image resized")
      })
    }).catch(() => loading.fail("Image not resized"))
  } else {
    resized.toFile(`imagehub-${file}`)
      .then(() => {
        loading.succeed("Image resized")
      }).catch(() => loading.fail("Image not resized"))
  }
}