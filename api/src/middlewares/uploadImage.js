const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, (new Date.now()) + file.originalname)
    }
})

const upload = multer({ storage: storage })
module.exports = upload;