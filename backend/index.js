const md5= require('md5');
const db= require('../dbHelper')

module.exports= function(props){
    return{
        getUsers: getUsers,
        saveUser:saveUser,
        users:users,
        updatepassword:updatepassword,
        user:user
    }
}


function getUsers(payload, callback){
    db.query('SELECT * FROM `users`', function(err, result, fields){
        if (err) {
            callback(err)
        }else{
            callback(result)
        }
    });
}

function saveUser(payload, callback){
    let fullName =payload.name;
    let email= payload.email;
    let phone = payload.phone;
    let password= payload.password;

    db.query(`INSERT INTO users (full_name, email, phone, password) VALUES ("${fullName}", "${email}", "${phone}", "${md5(password)}")`, function(err, result, fields){
        if (err) {
            callback(err)
        }else{
            callback(result)
        }
    });
    
}

function users(payload, callback){
    let userId = payload.id;
    let fullName =payload.name;
    let email= payload.email;
    let phone = payload.phone;
    let sqlStmt= `UPDATE users SET full_name="${fullName}", email="${email}", phone="${phone}" where id = "${userId}"`
    db.query(sqlStmt, function(err, result, fields){
        if (err) {
            callback(err)
        }else{
            callback(result)
        }
    });
    
}

function updatepassword(payload, callback){
    let userId = payload.id;
    let newPassword = payload.password;
    let sqlStmt= `UPDATE users SET password= "${md5(newPassword)}" where id= "${userId}"`
    db.query(sqlStmt, function(err, result, fields){
        if (err) {
            callback(err)
        }else{
            callback(result)
        }
    });
    
}

function user(payload, callback){
    let userId= payload.id;
    let sqlStmt= `DELETE FROM users where id ="${userId}"`
    db.query(sqlStmt, function(err, result, fields){
        if (err) {
            callback(err)
        }else{
            callback(result)
        }
    });
    
}