/**
 * Created by humberto.morera on 1/24/15.
 */

padronApp.controller('MainController', function($scope, UserService){

    $scope.currentUser = null;

    if (UserService.currentUser !== null){
        $scope.currentUser = UserService.currentUser;
    }

    $scope.$on('user:logout', function (event, data){
        $scope.currentUser = null;
    })
});