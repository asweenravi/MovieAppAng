
/**
 ** ".factory()" method is used for calling services in angular
 ** "$http,constants1" are injected into the function
 ** "$http" is used for the purpose of making an ajax call
 ** "constants1" has predefined values which won't change this helps in making of one service rather than multiple services
 ** "getNowShowing()" is the function for the purpose of making an ajax call and returning the data to the controller
 ** "$http.get" is used for issuing a get request(api call)
 ****/

app.factory('movieService', function ($http,$state,constants1) {
    return{
        getNowShowing : getNowShowing
    };
    function getNowShowing() {
        var url = constants1.baseUrl + $state.current.name + constants1.api_key + constants1.language + constants1.page+constants1.index;
        debugger;
        alert(url);
        debugger;
        return $http.get(url)
            .then(function (data1) {
                debugger;
                return data1.data
            });
    }
});