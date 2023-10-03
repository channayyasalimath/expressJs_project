const { response } = require("express")

const backend = require("../backend")({})

module.exports= function(){
    return {
        getUsers: getUsers,
        saveUser:saveUser,
        users:users,
        updatepassword:updatepassword,
        user:user
    }
}



function getUsers(req, res){
    let payload=req.query
    backend.getUsers(payload, function(response){
           res.send(response)
    })
    
}

function saveUser(req, res){
    let payload= req.body;
    backend.saveUser(payload, function(){
        res.send(response)
    })
}

function users(req, res){
    let payload= req.body;
    backend.saveUser(payload, function(){
        res.send(response)
    })
}

function updatepassword(req, res){
    let payload= req.body;
    backend.saveUser(payload, function(){
        res.send(response)
    })
}

function user(req, res){
    let payload= req.body;
    backend.saveUser(payload, function(){
        res.send(response)
    })
}