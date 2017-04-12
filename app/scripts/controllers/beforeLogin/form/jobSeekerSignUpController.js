angular.module('railJobsApp')
    .controller('jobSeekerSignUpController', ['$scope', '$state','formJobSeeker',
        function(scope, state,formJobSeeker) {
          scope.formjobseeker = formJobSeeker;
          console.log(scope.formjobseeker)
        }
    ]);
