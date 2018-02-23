var Todos = require('../models/todoModel');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req, res) {

        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy coffee powder',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Buy hand wash',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}
