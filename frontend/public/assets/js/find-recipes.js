function getRecipie(){
    var userSearch = "chicken";
    var APPID = "da9f95d8";
    var APIKEY = "9d8967ad9437f20e94e94856d53a69ea";
    // var recipieURL = `https://api.edamam.com/recipes/app_id=${APPID}&app_key=${APIKEY}q=${userSearch}`;

    function getSearchResults(){
        var searchinput = $('#searchinput').val();
        var recipieURL = `https://api.edamam.com/search?q=${searchinput}&app_id=${APPID}&app_key=${APIKEY}`;

        // this clears the .search-results container
        $('.search-results').html('');

        $.ajax({
            url: recipieURL,
            method: "GET",
            dataType: 'json',
        }).then(function(response){
            // response.setRequestHeader('Content-Type', 'application/json');
            // console.log(JSON.stringify(response));
            console.log(response.hits.length);
            
            for (let i = 0; i < response.hits.length; i++) {
                // const element = array[i];
                var div = '<a href="'+ response.hits[i].recipe.url +'"><div class="recipe-image">';
                    div += '<img src="'+ response.hits[i].recipe.image +'">';
                    div += '</div>';
                    div += '<div class="recipe-bottom">'
                    div += '<h3>'+response.hits[i].recipe.label+'</h3>';
                    div += '</div></a>';
    
                // console.log(div);
                
                var newDiv = document.createElement('div');
                newDiv.className = 'recipe-box';
                newDiv.innerHTML = div;
                document.querySelector('.search-results').append(newDiv);
            }
            
        });
        console.log(recipieURL);
    }



    // when a user clicks the search button
    $('.find__hero .btn').on('click', function(){
        getSearchResults();
    });
    //when the user presses ENTER on the search input box
    $('#searchinput').on('keyup', function(e){
        console.log('pressed key');
        if(e.keyCode === 13){
            console.log('pressed ENTER key');
            getSearchResults();
        }
    });


    

};

getRecipie();
