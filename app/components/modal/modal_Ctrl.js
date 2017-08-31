
/**
 ** The service is called using "modalService.findMovieByMovieName()"
 ** The promise is resolved and the response is got which is assigned to the scope
 ****/

app.controller("modalController", function ($scope, modalService) {
    debugger;
    var data = modalService.findMovieByMovieName()
        .then(function (value) {
            $scope.response = value;
            debugger;
            showModel();
        });
    alert($scope.response);
});