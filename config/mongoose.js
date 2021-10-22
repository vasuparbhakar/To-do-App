// require the library
const mongoonse = require('mongoose');

// connect to the database
mongoonse.connect('mongodb://localhost/todo_list_db');

// acquire the connection (to check if it is successful)
const db = mongoonse.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("Successfully connected to the database")
});