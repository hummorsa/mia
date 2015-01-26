/**
 * Created by humberto.morera on 1/25/15.
 */

padronApp.controller('DashboardController',function ($scope, UserService, SearchService){

    $scope.$on('user:logout', function (){
        window.location.href = '/#login/';
    });

    if (UserService.currentUser !== null){

        $scope.currentUser = UserService.currentUser;


        $scope.SearchByCedula = function(){

            var promise = SearchService.SearchByCedula($scope.cedula);
            promise.then(function(data){
               $scope.userResult = data[0].attributes;

            },
            function(error){

            });

        }


    }else{
        //User need to be logged in.
        window.location.href = '/#login/';
    }



});