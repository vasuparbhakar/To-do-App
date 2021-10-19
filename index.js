const express = require('express');
const app = express();
const port = 8000;

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