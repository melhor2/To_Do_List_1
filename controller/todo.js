const Todo = require('../models/todo')


const controllerTodo = {
    create: async (req, res) => {
        try {
            const todo = req.body.todoValue
            await Todo.create({
                todo: todo
            })
            res.json({msg:'created'})
        } catch (error) {
            return res.status(500).json({ msg: error })
        }

    }
}

module.exports = controllerTodo