const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schem({
    todo: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('todo', todoSchema)
