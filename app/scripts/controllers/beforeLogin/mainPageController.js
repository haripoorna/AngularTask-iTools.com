'use strict';

/**
 * @ngdoc function
 * @name railJobsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the railJobsApp
 */
angular.module('railJobsApp')
    .controller('mainPageController', ['$scope', 'formContact',
        function(scope, formContact) {
            scope.contactDetails = formContact.properties;
            scope.signInButton = "Submit";
            scope.requestObject = {
                'user': null,
                'info': {}
            };
            scope.consultancy = [{
                "img": "../../images/bitmap.png",
                "title": "Project Planning Consultancy"
            }, {
                "img": "../../images/rtb.png",
                "title": "Pre Bid Consultancy"
            }, {
                "img": "../../images/discussion.png",
                "title": "Management Consultancy"
            }, {
                "img": "../../images/groups.jpg",
                "title": "Procurement Assistance"
            }, {
                "img": "../../images/sketch.png",
                "title": "Liaison"
            }, {
                "img": "../../images/keyboard.png",
                "title": "Solutions"
            }]
            scope.aboutRailJobs = [{

                "heading": "Rail Job Information",
                "description": "Rail Jobs Info is a recruitment specialist in railway industry for finding suitable resources. We will help you to find a Job to find a Candidate to find Domestic & International New Rail Projects & Tenders;to know Who got What to know about the Developments in Global Rail Industry to know Latest Technological Developments in Rail Construction,Operation & Maintenance to search Training Facilities,etc.We will provide services on all aspects of Rail Industry.Usage of trains as a means of transportfor both men and cargo has increased Railjobsinfo.com is a professionally administered",
                "buttonText": "View More"
            }, {
                "heading": "About International RailJobs",
                "description": "Railjobsinfo.com is a professionally administered website owned by M/S LNR Rail Engineering Private Limited with registered office at Hyderabad, Telangana State, India. One of the founders has 35 years of experience in Execution and Maintenance of major Railway Projects in Indian Railways and Private Railway Sidings in India and is an erudite in all fields of Railway Engineering including T&S, OHE/OLE and S&T in Survey, Designs, Alignment, Procurement, Execution, Commissioning, Operations and Maintenance. He also has good knowledge in maintenance of railway assets in private railway sidings.",
                "buttonText": "View More"
            }]
            scope.services = [{
                "service": "Employment",
                "domain": "applicant@railjobsinfo.com",
                "hyperlink": "http://www.facebook.com"
            }, {
                "service": "Recruitment",
                "domain": "client@railjobsinfo.com",
                "hyperlink": "http://www.facebook.com"
            }, {
                "service": "Consultancy",
                "domain": "consultancy@railjobsinfo.com",
                "hyperlink": "http://www.facebook.com"
            }, {
                "service": "Training",
                "domain": "training@railjobsinfo.com",
                "hyperlink": "http://www.facebook.com"
            }, {
                "service": "General Enquiry",
                "domain": "info@railjobsinfo.com",
                "hyperlink": "http://www.facebook.com"
            }]
            scope.adminCategories = [{
                'header': 'Consultancy',
                'listItems': {
                    '1': 'Project planning consultancy',
                    '2': 'Pre Bid Consultancy',
                    '3': 'Project Management Consultancy ',
                    '4': 'Procurement Assistance',
                    '5': 'Liaison Solutions'
                },
                'button': 'Know more'
            }, {
                'header': 'Training',
                'listItems': {
                    '1': 'Training Facilities for Private Railway Employees',
                    '2': 'Indian Railway Training Insitutes'
                },
                'button': 'Know more'
            }];
            scope.userTypes = [{
                'header': 'Applicant',
                'content': 'Minimum experience of 1 year of railway field or certifcation from railway training,Institution is prequistite for Registration,Minimum experience of 1 year of railway field or certifcation from railway training,Institution is prequistite for Registration',
                'button': 'Register'
            }, {
                'header': 'Employer',
                'content': 'Minimum experience of 1 year of railway field or certifcation from railway training,Institution is prequistite for Registration,Minimum experience of 1 year of railway field or certifcation from railway training,Institution is prequistite for Registration',
                'button': 'Register'
            }];
            scope.send = function(isDisabled) {
                if (!isDisabled) {
                    scope.requestObject.user = scope.selectedRole.toLowerCase();
                    angular.forEach(scope.contactDetails, function(formObject, formKey) {
                        angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                            scope.requestObject.info[formInfoKey] = formInfoObject.formModel;
                        });
                    });
                    requestService.invokeService(requestAndResponse.contactRequest, 'POST', null, scope.requestObject).then(function(response) {
                        if (response.data) {
                            console.log('success');
                        }
                    });
                }
            };
        }
    ]);
