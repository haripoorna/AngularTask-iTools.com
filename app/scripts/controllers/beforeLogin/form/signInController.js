'use strict';

/**
 * @ngdoc function
 * @name railJobsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the railJobsApp
 */
angular.module('railJobsApp')
    .controller('signInController', ['$scope', 'jobSeekerLoginForm', 'recruiterLoginForm', 'constants', 'requestService', 'requestAndResponse',
        function(scope, jobSeekerLoginForm, recruiterLoginForm, constants, requestService, requestAndResponse) {
            // request fot signIn

            scope.jobSeekerSignInRequestObject = {
                'user': null,
                'UserName': null,
                'Password': null
            };
            scope.forgotPassword = constants.forgotPassword;
            scope.loginSignUp = constants.signUp;
            scope.loginSignIn = constants.signIn;
            scope.selectedRole = jobSeekerLoginForm.loginProperties.details.JOBSEEKER.loginText;
            scope.jobSeekerLoginForm = jobSeekerLoginForm.loginProperties.loginFormInfo;
            scope.recruiterLoginForm = recruiterLoginForm.loginProperties.loginFormInfo;
            scope.jobSeekerSignIn = function(isDisabled) {
                if (!isDisabled) {
                    scope.jobSeekerSignInRequestObject.user = scope.selectedRole.toLowerCase();

                    scope.jobSeekerSignInRequestObject.Password = scope.jobSeekerLoginForm.password.formModel;
                    console.log(scope.jobSeekerSignInRequestObject.Password);
                    scope.jobSeekerSignInRequestObject.UserName = scope.jobSeekerLoginForm.userName.formModel;
                    console.log(scope.jobSeekerSignInRequestObject.UserName);
                    requestService.invokeService(requestAndResponse.signInRequest, 'POST', null, scope.jobSeekerSignInRequestObject).then(function(response) {
                        console.log(response.data);

                    });
                }
            }
        }
    ]);
