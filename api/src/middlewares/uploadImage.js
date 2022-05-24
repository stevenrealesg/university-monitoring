const multer = require('multer');
const dateNow = new Date().getTime()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, `${dateNow}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage })
module.exports = upload;