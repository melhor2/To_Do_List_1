const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()
const port = (process.env.PORT || 3000)

const todoRouters = require('./routers/todo')

app.set('port', port)
app.set('view engine', 'ejs')
app.use(express.static("style"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('api/todo', todoRouters)

app.get('/', (req, res) => {
    res.render('index')
})

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('conect to db') })
    .catch((err) => console.error(err))

app.listen(port, () => {
    console.log('server is running on port' + port)
})