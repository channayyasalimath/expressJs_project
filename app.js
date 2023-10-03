const express = require('express')
const app = express();
// var details=[{rollNo:1, name:"Channayya"},{rollNo:2, name:"Lavan"}]
// app.get("/details", function(req, res){

//     res.send(details)
// });

// app.post("/", function(req, res){

//     res.send("Hello from post method")
// });

// app.put("/", function(req, res){

//     res.send("Hello from put method")
// });

const bodyParser= require('body-parser')
const morganApiLogger= require("morgan")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morganApiLogger('dev'));

const routes= require('./routes')(express.Router(), app)
console.log(routes)
app.use('/', routes)
app.listen(5000, function(){
    console.log("Port is running 5000")
});