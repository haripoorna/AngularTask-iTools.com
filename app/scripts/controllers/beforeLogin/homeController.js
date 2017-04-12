'use strict';

/**
 * @ngdoc function
 * @name railJobsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the railJobsApp
 */
angular.module('railJobsApp')
    .controller('homeController', ['$scope', 'formContact', '$state',
        function(scope, formContact, $state) {
            $state.go('home.main')
        }
    ]);
