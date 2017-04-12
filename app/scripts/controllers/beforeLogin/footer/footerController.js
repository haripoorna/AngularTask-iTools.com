'use strict';

/**
 * @ngdoc function
 * @name railJobsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the railJobsApp
 */
angular.module('railJobsApp')
    .controller('footerController', ['$scope', '$state',
        function(scope, $state) {
            scope.footerObject = [{
                "copyright": "Copyright © 2017 All rights reserved by LNR Rail Engg. (P) Ltd."
            }, {
                "footerQuicklinks": {
                    "privacypolicy": "Privacy Policy",
                    "FAQ": "FAQ",
                    "terms": "Terms & Conditions"
                }
            }]
        }
    ]);
