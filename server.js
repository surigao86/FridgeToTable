const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res){
  res.send("welcome")
});

require("./routes/htmlRoutes")(app);

// app.get("/api/recipies", function(req, res){
//   res.json({
//     "recipies": [
//       {
//         name: "Scrambled Eggs",
//         url: "https://www.incredibleegg.org/recipe/basic-scrambled-eggs/"
//       },

//       {
//         name: "Spaghetti",
//         url: "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/"
//       },

//       {
//         name: "Garlic Butter Steak",
//         url: "https://www.tasteofhome.com/recipes/garlic-butter-steak/"
//       }
//     ]
//   })
// })

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
  });