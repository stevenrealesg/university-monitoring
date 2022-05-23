const Router = require("express").Router;
const route = Router();
const ctrlMonitor = require("../controllers/monitor.controller")
const upload = require("../middlewares/uploadImage")

route.get('/', ctrlMonitor.getAll )
route.post('/add', upload.single("photo"), ctrlMonitor.add )
route.put('/update/:id', ctrlMonitor.update )
route.delete('/delete/:id', ctrlMonitor.remove )

module.exports = route;