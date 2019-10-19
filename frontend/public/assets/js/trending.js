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

function getTrending(){
    // var searchInput = $('#searchinput').val();
    // var URL = `/api/trending`;

    // // this clears the .search-results container
    // $('.search-results').html('');

    // $.ajax({
    //     url: URL,
    //     method: "GET",
    //     dataType: 'json',
    // }).then(function(response){
    //     // response.setRequestHeader('Content-Type', 'application/json');
    //     // console.log(JSON.stringify(response));
    //     console.log(response);
                
    // });

//Your web app's Firebase configuration

  // let recipe = "";
  // let image = "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
  // let link = "https://www.verybestbaking.com/recipes/18476/original-nestle-toll-house-chocolate-chip-cookies/";
  // let hitCount = 0;

  // let newRecipe = {
  //     recipe,
  //     image,
  //     link,
  //     hitCount
  // };

  // database.ref().push(newRecipe);

  // console.log(newRecipe.recipe);


  database.ref().on("child_added", function(childSnapshot){
      console.log(childSnapshot.val());
      let sv = childSnapshot.val();
      console.log(childSnapshot.length)

        var div =
          '<a href="' + sv.link +
          '" target="_blank"><div class="recipe-image">';
        div += '<img src="' + sv.image + '">';
        div += "</div>";
        div += '<div class="recipe-bottom">';
        div += `<h3>${sv.recipe}</h3>`;
        div += "</div></a>";


        let newDiv = document.createElement("div");
        newDiv.className = "recipe-box";
        newDiv.innerHTML = div;
        document.querySelector(".trending-results").append(newDiv);
      
      console.log(sv.recipe);
  })

};


getTrending();