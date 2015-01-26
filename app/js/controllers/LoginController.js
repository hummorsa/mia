/**
 * Created by humberto.morera on 1/24/15.
 */
padronApp.controller('LoginController', function($scope, UserService){


    $scope.currentUser = null;

    if (UserService.currentUser !== null){
        $scope.currentUser = UserService.currentUser;
    }


    $scope.login = function (){

        var promise = UserService.login($scope.credentials);
        promise.then(
            function(data){
                UserService.currentUser = data;
                $scope.currentUser = UserService.currentUser;
                $scope.credentials = ''
                console.log('done promise');
                window.location.href = "/#dashboard/"
            },
            function(error){
                $scope.user = error.message;
            }

        )




    }
});