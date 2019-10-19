console.log("test");

const mysql = require("mysql");

let connectMostHits = function(){

 let connection = mysql.createConnection({
      host: "localhost",
    
      // Your port; if not 3306
      port: 3306,
    
      // Your username
      user: "root",
    
      // Your password
      password: "root",
      database: "trendingRecipes"
    });
    
    connection.connect(function(err) {
      if (err) throw err;
      console.log("connected as id " + connection.threadId + "\n");
      readMostHits();
      // getMostHit();
    });
    
    function readMostHits() {
      connection.query("SELECT recipe_name FROM recipes", function(err, res) {
        if (err) throw err;
    
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });

    function getMostHit(){
      connection.query("SELECT recipe_name FROM recipe", function(err, res){
        if (err) throw err;

        console.log(res);
        connection.end();

        for (let i = 0; i < res.length; i++) {
          // const element = array[i];
          var div = `<div> ${res[i]}<div/>`;

          // console.log(div);
          
          var newDiv = document.createElement('div');
          newDiv.className = 'trending-box';
          newDiv.innerHTML = div;
          document.querySelector('.trending-results').append(newDiv);
      }
       
      })
    }

    }
}

connectMostHits();
  module.exports = connectMostHits;