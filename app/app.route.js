
/** The ".config()" method is used for setting the angularJS routes
 ** "$stateProvider","$urlMatcherFactoryProvider","$urlRouterProvider" are injected into config by Dependency injection
 ** "$urlMatcherFactoryProvider" is used for the neglecting the case sensitivity in the states
 ** "$urlRouterProvider" specifies the default state which is to be called
 ** "$stateProvider" provides the different states which is possible to occur in the application
 ** ".state()" method is used for the routing
 ** "url" specifies the url that is to be appended to the existing url
 ** "controller" is used for the redirection of the control to the specific controller
 ** "templateUrl" refers to the path of the file to which the scope from the controller is to be returned
 ****/

app.config(function ($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/now_playing/1");
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $stateProvider
        .state("now_playing", {
            url: "/now_playing/:movieid",
            templateUrl:"app/components/nowShowing/nowShowing.html",
            controller: 'nowShowingController'
        })

        .state("upcoming", {
            url: "/upcoming/:movieid",
            templateUrl:"app/components/upcoming/upcoming.html",
            controller: 'upcomingController'
        })

        .state("latest", {
            url: "/latest",
            templateUrl:"app/components/latest/latest.html",
            controller: 'latestController'
        })

        .state("popular", {
            url: "/popular/:movieid",
            templateUrl:"app/components/popular/popular.html",
            controller: 'popularController'
        })

        .state("now_playing.modal", {
            url: "/:id",
            templateUrl: "app/components/modal/modal.html",
            controller: "modalController",
        })

        .state("upcoming.modal", {
            url: "/:id",
            templateUrl: "app/components/modal/modal.html",
            controller: "modalController",
        })

        .state("latest.modal", {
            url: "/:id",
            templateUrl: "app/components/modal/modal.html",
            controller: "modalController",
        })

        .state("popular.modal", {
            url: "/:id",
            templateUrl: "app/components/modal/modal.html",
            controller: "modalController",
        })
});