const express = require('express')
const router = express.Router()

const controllerTodo = require('../controller/todo')


router.post('/create', controllerTodo.create)


module.exports = router