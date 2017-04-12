'use strict';

/**
 * @ngdoc overview
 * @name railJobsApp
 * @description
 * # railJobsApp
 *
 * Main module of the application.
 */
angular
    .module('railJobsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'ngMessages',
        'ngAria',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {
        stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/beforeLogin/home.html',
                controller: 'homeController'
            })
            .state('home.main', {
                url: 'home',
                templateUrl: 'views/beforeLogin/mainPage.html',
                controller: 'mainPageController'
            })
            .state('home.signIn', {
                url: 'SignIn',
                templateUrl: 'views/beforeLogin/form/signIn.html',
                controller: 'signInController'
            })
            .state('home.jobSeekerSignUp', {
                url: 'jobSeekerSignUp',
                templateUrl: 'views/beforeLogin/form/jobSeekerSignUp.html',
                controller: 'jobSeekerSignUpController'
            });
           

        urlRouterProvider.otherwise('/home');
    }]);
