/**
 * Created by humberto.morera on 1/24/15.
 */


'use strict';

var padronApp = angular.module('padronApp',['ngRoute','customFilters']);


padronApp.config(function ($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/login',{
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/dashboard',{
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .otherwise({
            redirectTo:'/dashboard'
        })
});

Parse.initialize("VtEFmwEoJURA0N2xczeKuXlkQiZ8mOeN4oigsFm6", "P5Tvl1F9u5LQyxvXT0WLQXNwej40z1mqmweV6fUV");






