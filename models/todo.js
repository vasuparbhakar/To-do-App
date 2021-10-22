const mongoose = require('mongoose');

// creating a schema
var todoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true
    }
});

// cerating a collection
const ToDo = mongoose.model('ToDo',todoSchema);

module.exports = ToDo;