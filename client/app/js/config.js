function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/current");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('current', {
            //abstract: true,
            url: "/current",
            templateUrl: "views/current.html",
            controller: CurrentCtrl,
        })
        .state('history', {
            //abstract: true,
            url: "/history",
            templateUrl: "views/history.html",
            controller: HistoryCtrl,
        });

}
angular
    .module('tempmon')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

