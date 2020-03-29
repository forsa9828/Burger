//Express will 
const express = require('express');

//utilize the models within the flder 
const myData = require("./models");

//this will allw us to utilize express functions once called
const app = express();
//app.get() = allow us to utilize the express get function 
//app.use() = allow us to utilize the express use function 
//app.set() = allow us to utilize the express set function 

//Static file - a basic front end application (css - js(basics))
//Here express is being called to render the stated files so it can be USED and the UI (user-interface)
app.use(express.static("public"));

//Utilize JSOn to translate the code into a specific format 
app.use(express.urlencoded({extended: true}));
//Anything you translate with the code above - display it in a json format
app.use(express.json());

//utilize epress-handlebars to render the files 
    
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

myData.sequelize.sync().then(function(){
  
    app.listen(PORT, function() {
      console.log("Listening on port:%s", PORT);
    });
});