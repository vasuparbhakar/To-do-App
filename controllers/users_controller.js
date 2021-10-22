module.exports.profile = function(req,res){
    return res.render('profile',{
        title: 'Profile'
    });
};

module.exports.post = function(req,res){
    return res.render('post',{
        title: 'Post'
    });
};