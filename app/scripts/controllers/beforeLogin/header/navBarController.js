'use strict';

/**
 * @ngdoc function
 * @name railJobsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the railJobsApp
 */
angular.module('railJobsApp')
    .controller('navBarController', ['$scope', '$state', 'homePageConfig',
        function(scope, $state, homePageConfig) {
            scope.menuItems = homePageConfig.menuItems;
            scope.fnSelected = function(selectedMenuitem) {
                angular.forEach(scope.menuItems, function(value, key) {
                    if (key == selectedMenuitem) {
                        value.isActive = true
                    } else {
                        value.isActive = false
                    }
                })
            };
            scope.fnSignIn = function(toState) {
                $state.go(toState);
            }
        }
    ]);
