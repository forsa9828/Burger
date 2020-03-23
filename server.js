//Create server using express 
const express = require ("express");

//create a reuseable express variable 
const app = express();

//calling the database from the models folder
const db = require("./models");

//render static content onto the page 
//Translation: Hey express I want to use your express functio to render a static file fro the 
    //public folder 
app.use(express.static("public"));

//Inform express that you would like to use JSON 
app.use(express.urlencoded({extended: true}));
//tell express that you will be sing json format 
app.use(express.json());

//Tell our server to listen on a specific port 

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log('Connected')
    })
})



//Translation: To use the express function to render the views folder
//app.use(express.static('views'))