/**
 * Created by humberto.morera on 1/24/15.
 */

padronApp.service('UserService' ,['$rootScope','$q', function($rootScope, $q){

    this.currentUser = null;

    var currentUser = Parse.User.current();

    if (currentUser){
        this.currentUser = currentUser;
    }

    this.login = function(credentials){

        var deferred = $q.defer();
        Parse.User.logIn(credentials.user, credentials.password, {
            success: function(user) {
                deferred.resolve(user);
                $rootScope.$broadcast('user:login',user);
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
                deferred.reject(error);
                console.log(error)
            }
        });
        return deferred.promise
    };

    this.logout = function(){
        Parse.User.logOut();
        this.currentUser = null;
        $rootScope.$broadcast('user:logout',this.currentUser);
    }
}]);