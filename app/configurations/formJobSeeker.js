'use strict';

angular.module('railJobsApp').constant(
    'formJobSeeker', {
        "properties": {
            "formInfo": {
                "fullName": {
                    "title": "Full Name",
                    "type": "text",
                    "formModel": null,
                    "maxLength": 30,
                    "required": true,
                    "pattern": "^[a-zA-Z\s]+$",
                    "validationMessage": "This is required",
                    "patternValidation": "Invalid Name"
                },
                "userName": {
                    "title": "User Name",
                    "type": "text",
                    "formModel": null,
                    "maxLength": 20,
                    "required": true,
                    "pattern": "^[a-zA-Z\s]+$",
                    "validationMessage": "This is required",
                    "patternValidation": "Invalid Username"
                },
                "mobile": {
                    "title": "Mobile Number",
                    "type": "text",
                    "formModel": null,
                    "maxLength": 10,
                    "required": true,
                    "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                    "validationMessage": "This is required",
                    "patternValidation": "Need to be a 10 digit number"
                },
                "email": {
                    "title": "Email",
                    "type": "email",
                    "formModel": null,
                    "maxLength": 30,
                    "required": true,
                    "pattern": "^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$",
                    "validationMessage": "This is required",
                    "patternValidation": "You have enterd invalid email. Please try again."
                }
            }
        }
    }
);
