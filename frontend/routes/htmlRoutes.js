const path = require("path");

module.exports = function(app) {
  app.get("/find-recipes", function(reg, res) {
    res.sendFile(path.join(__dirname, "../find-recipes.html"));
  });

  app.get("/trending", function(reg, res) {
    res.sendFile(path.join(__dirname, "../trending.html"));
  });

  app.get("*", function(reg, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};