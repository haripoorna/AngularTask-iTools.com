'use strict';

angular.module('railJobsApp').constant(
    'jobSeekerLoginForm', {
        "loginProperties": {
            "details": {
                "JOBSEEKER": {
                    "loginText": "jobseeker",
                    "registrationText": "JOBSEEKER REGISTRATION"
                }            
            },
            "loginFormInfo": {
                "userName": {
                    "title": "Username",
                    "type": "text",
                    "formModel": null,
                    "maxLength": 20,
                    "required": true,
                    "pattern": "^[a-zA-Z\s]+$",
                    "validationMessage": "This is required",
                    "patternValidation": "Invalid Name"
                },
                "password": {
                    "title": "Password",
                    "type": "password",
                    "formModel": null,
                    "maxLength": 20,
                    "required": true,
                    "pattern": "^[a-zA-Z\s]+$",
                    "validationMessage": "This is required",
                    "patternValidation": "Invalid Password"
                }
            }
        }
    }
);
