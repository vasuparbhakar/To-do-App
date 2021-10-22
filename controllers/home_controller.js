const ToDo = require("../models/todo");

module.exports.home = function(req,res){
    // return res.end('<h1>Express is up for To-do!!</h1>');
    ToDo.find({},function(err,todo_list){
        if(err)
        {
            console.log("Error in fetching contacts from db");
            return;
        }

        return res.render('home',{
            title: 'To-Do App',
            todolist : todo_list
        });
    });
};

module.exports.newtodo = function(req,res){
    ToDo.create({
        todo: req.body.to_do
    },function(err,newToDo){
        if(err)
        {
            console.log("Error in creating a contact!");
            return;
        }

    //    console.log('***********',newContact);
        res.redirect('/');
    });
}

// module.exports.actionName = function(req,res){};