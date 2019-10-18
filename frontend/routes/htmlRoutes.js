const path = require("path");

module.exports = function(app) {
  app.get("/find-recipes", function(reg, res) {
    res.sendFile(path.join(__dirname, "../find-recipes.html"));
  });

  app.get("/most-search", function(reg, res) {
    res.sendFile(path.join(__dirname, "../most-search.html"));
  });

  app.get("*", function(reg, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};