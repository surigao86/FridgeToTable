function getRecipie(){
    let userSearch = "chicken";
    let APPID = "da9f95d8";
    let APIKEY = "9d8967ad9437f20e94e94856d53a69ea";
    let recipieURL = `https://api.edamam.com/recipes/app_id=${APPID}&app_key=${APIKEY}q=${userSearch}`;
    // let recipieURL = "https://api.edamam.com/recipes/chicken";

    $.ajax({
        url: recipieURL,
        method: "GET",
    }).then(function(response){
        console.log(JSON.stringify(response));
    });
    console.log(recipieURL);

  };

getRecipie();