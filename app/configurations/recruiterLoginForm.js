'use strict';

angular.module('railJobsApp').constant(
    'recruiterLoginForm', {
        "loginProperties": {
            "details": {
                "RECRUITER": {
                    "loginText": "STUDENT LOGIN",
                    "registrationText": "STUDENT REGISTRATION",
                    "cssClass": "student-button"
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
