/**
 ** ".controller()"method calls the service which in turn returns the data
 ** "movieService.getNowShowing()" calls the function resolves the promise and ".then" assigns the data to the "scope"
 ** The scope is returned to the corresponding template
 ****/

app.controller('latestController', function ($scope,movieService) {
    var data = movieService.getNowShowing()
        .then(function (value) {
            $scope.response = value;
            console.log("val",$scope.response,value);
        });
});

/**
 ** function that is used for openning and closing of the modal
 ** <span> element that closes the modal
 ** When the user clicks anywhere outside of the modal "window.onclick()"function will close the modal
 ****/

function showModel() {
    debugger;
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};