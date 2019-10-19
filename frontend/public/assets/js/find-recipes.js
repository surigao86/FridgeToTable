function getRecipie() {
  var APPID = "da9f95d8";
  var APIKEY = "9d8967ad9437f20e94e94856d53a69ea";
  // var recipieURL = `https://api.edamam.com/recipes/app_id=${APPID}&app_key=${APIKEY}q=${userSearch}`;

  function getRecent() {
    let firebaseConfig = {
      apiKey: "AIzaSyBfH55gNs_qlHhkGt0BF_YF6y9-UvLf69U",
      authDomain: "fridgetotableteam2.firebaseapp.com",
      databaseURL: "https://fridgetotableteam2.firebaseio.com",
      projectId: "fridgetotableteam2",
      storageBucket: "fridgetotableteam2.appspot.com",
      messagingSenderId: "552687131894",
      appId: "1:552687131894:web:e9eb546a8c5bf21aa1a0d7",
      measurementId: "G-7MRFBLEH8G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    console.log(response.hits)

    let recipe = response.hits[i].recipe.label;
    let image = response.hits[i].recipe.image;
    let link = response.hits[i].recipe.url;
    let hitCount = 0;

    let newRecipe = {
      recipe,
      image,
      link,
      hitCount
    };

    database.ref().push(newRecipe);

    console.log(newRecipe.recipe);

    alert("Success!");

    database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());
    });
  };




  function getSearchResults() {
    var searchInput = $("#searchinput").val();
    var recipieURL = `https://api.edamam.com/search?q=${searchInput}&app_id=${APPID}&app_key=${APIKEY}`;

    // this clears the .search-results container
    $(".search-results").html("");


    $.ajax({
      url: recipieURL,
      method: "GET",
      dataType: "json"
    }).then(function(response) {
      // response.setRequestHeader('Content-Type', 'application/json');
      // console.log(JSON.stringify(response));
      console.log(response.hits.length);

      for (let i = 0; i < 9; i++) {
        // const element = array[i];


        var div =
          '<a id="recipesLink"  href="' +
          response.hits[i].recipe.url +
          '" target="_blank"><div class="recipe-image">';
        div += '<img src="' + response.hits[i].recipe.image + '" id="clickLink" >';
        div += "</div>";
        div += '<div class="recipe-bottom">';
        div += `<h3 name= ${response.hits[i].recipe.label}> ${response.hits[i].recipe.label} </h3>`;
        div += "</div></a>";


        var newDiv = document.createElement("div");
        newDiv.className = "recipe-box";
        newDiv.innerHTML = div;
        document.querySelector(".search-results").append(newDiv);

      }
    });
    console.log(recipieURL);
  }

  // when a user clicks the search button
  $(".find__hero .btn").on("click", function() {
    getSearchResults();
  });
  //when the user presses ENTER on the search input box
  $("#searchinput").on("keyup", function(e) {
    console.log("pressed key");
    if (e.keyCode === 13) {
      console.log("pressed ENTER key");
      getSearchResults();
    }
  });

  // postRecent();

}


getRecipie();


//Trying to Link Firebase to Update By Pushing Recipes That Are Clicked By User

function postRecent(){
  console.log("yessir")
  // $(link).on("click", function(){
    console.log("hi");
  let firebaseConfig = {
    apiKey: "AIzaSyBfH55gNs_qlHhkGt0BF_YF6y9-UvLf69U",
    authDomain: "fridgetotableteam2.firebaseapp.com",
    databaseURL: "https://fridgetotableteam2.firebaseio.com",
    projectId: "fridgetotableteam2",
    storageBucket: "fridgetotableteam2.appspot.com",
    messagingSenderId: "552687131894",
    appId: "1:552687131894:web:e9eb546a8c5bf21aa1a0d7",
    measurementId: "G-7MRFBLEH8G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();


  let recipe = $(document).getAttribute("name");
  let image = response.hits[i].recipe.image;
  let link = response.hits[i].recipe.url;
  let hitCount = 0;

  let newRecipe = {
    recipe,
    image,
    link,
    hitCount
  };

  database.ref().push(newRecipe);

  console.log(newRecipe.recipe);

  alert("Success!");

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  });  
// })
}
// postRecent();
