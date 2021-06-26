const conf = new (require('conf'))()
const chalk = require('chalk')

function add(task) {
    let todosList = conf.get('todo-list')

    if (!todosList) {
        todosList = []
    }

    todosList.push({
        text: task,
        done: false
    })

    conf.set('todo-list', todosList)
}

module.exports = add