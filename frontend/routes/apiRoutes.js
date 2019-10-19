const express = require("express");
const app = express();
const mysql = require("mysql");


//const recipeData = require("../frontend/data/recipeData");
const axios = require("axios");
var cors = require("cors");
module.exports = function(app){
  app.get("/api/trending", cors(), (req, res) => {
    let connection = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "root",
      database: "trendingRecipes"
    });

    connection.connect();

    connection.query("SELECT recipe_name FROM recipes", function(err, res,fields) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.log(res);
    })      
    
    connection.end();

  })

   app.get("/api/recipes", cors(), (req, res) =>{

    
   let userSearch = "chicken";
   let APPID = "da9f95d8";
   let APIKEY = "9d8967ad9437f20e94e94856d53a69ea";
   let recipieURL = `https://api.edamam.com/search?q=${userSearch}&app_id=${APPID}&app_key=${APIKEY}`;


   

   console.log(recipieURL)

   axios.get(recipieURL).then(function (response) {
      // handle success
      console.log(response);
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function (response) {
      // always executed
      console.log("hello")
      res.json(response)
    });
   


    //res.json(recipeData);
   });

}