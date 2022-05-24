const express = require('express')
const morgan = require('morgan')
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path')
const routeMonitor = require('./routes/monitor.route');

dotenv.config();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Server online!')
})

app.use('/monitor', routeMonitor)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})