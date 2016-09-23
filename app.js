// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {
    $scope.options=['AL','AK','AZ','AR','CA','CO','CT','DC','DE','FL','GA',
                    'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                    'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
                    'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
                    'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
    // function to submit the form after all validation has occurred
    $scope.submitted = false;
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            return $scope.submitted = true;


        }

    };

    $scope.newUser = function (){

        $scope.user= {};
        this.userForm.$setPristine();
        this.userForm.$setUntouched();
        return $scope.submitted = false;

    };


    });