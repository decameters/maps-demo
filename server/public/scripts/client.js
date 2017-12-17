var app = angular.module('MapApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'MapController as vm'
        });
});