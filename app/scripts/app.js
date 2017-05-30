'use strict';
(function(){


    var app = angular.module('meanappApp', []);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/registrar', {
                templateUrl: 'views/registrar.html',
                controller: 'MainCtrl'
            })
            .when('/consultar', {
                templateUrl: 'views/consultar.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}.call(this));
 