var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchmea = new Schema({
    uname: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchmea);

module.exports = Todos;