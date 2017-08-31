/**
 ** The Service is used for making an ajax call to the api and returning it to the controller
 ** The $stateparams refers the unique id that is present in the movie which is used for making a get request
 ** Results of get request are returned to the controller
 ****/

app.factory('modalService', function ($http, $stateParams) {
    return {
        findMovieByMovieName:findMovieByMovieName
    };

    function findMovieByMovieName() {
        debugger;
        var url = "https://api.themoviedb.org/3/movie/" + $stateParams.id + "?api_key=fb5875eace5a99021e9a7dc4728b1a6b&language=en-US";
        return $http.get(url)
            .then(function (data1)
            {
                debugger;
                return data1.data;
            });
        }

});
