/**
 * Created by humberto.morera on 1/25/15.
 */

padronApp.controller('NavegationBarController', function($scope, $rootScope, UserService){

    $scope.currentUser = {};
    $scope.currentUser.active = false;
    $scope.copy =  {};
    $scope.copy.login = "Login";


    if (UserService.currentUser !== null){
        $scope.currentUser = UserService.currentUser;
        $scope.copy.login = $scope.currentUser.getUsername();
        $scope.currentUser.active = true;
    };

    $scope.Logout = function(){
        UserService.logout();

    };

     $scope.$on('user:logout', function (event, data){
         $scope.currentUser = {};
         $scope.copy.login = "Login";
         //$scope.currentUser.active = false;
     });

    $scope.$on('user:login', function (event, data){
        $scope.currentUser = data;
        $scope.copy.login = $scope.currentUser.getUsername();
        $scope.currentUser.active = true;
    });

});