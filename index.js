const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');
const ToDo = require('./models/todo');


// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded()); // Middleware (Parses the form data into keys and values)
app.use(express.static('assets')); // Middleware (For static files)
app.use(expressLayouts); // middleware for layouts

// use express router
app.use('/',require('./routes/index')); // middleware

app.listen(port,function(err){
    if(err)
    {
        // console.log("Error: ",err);
        console.log(`Error in running the express server : ${err}`); // interpolation
    }
    else
    {
        console.log(`Express Server is running on port: ${port}`);
    }
});