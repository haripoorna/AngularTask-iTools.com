'use strict';

angular.module('railJobsApp').constant(
    'formContact', {
        "properties": {
            "basicDetails": {
                "formInfo": {
                    "FirstName": {
                        "title": "First Name",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "LastName": {
                        "title": "Last Name",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "Email": {
                        "title": "Email",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have enterd invalid email. Please try again.",
                        "css": "half-width"
                    },
                    "Phone": {
                        "title": "Phone Number",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Username",
                        "css": "half-width"
                    }
                }
            }
        }
    }
);
