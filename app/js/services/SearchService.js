/**
 * Created by humberto.morera on 1/25/15.
 */
padronApp.service('SearchService' ,['$rootScope','$q', 'UserService', function($rootScope, $q, UserService){

    var padron = Parse.Object.extend("padron"),
    query = new Parse.Query(padron);

    this.SearchByCedula = function(id){

        if (UserService.currentUser !== null && id !== null){

            var deferred = $q.defer();

            query.equalTo("ced", id);
            query.find({
                success: function(results) {
                    console.log("Successfully retrieved " + results.length + " scores.");
                    // Do something with the returned Parse.Object values
                    deferred.resolve(results);

                },
                error: function(error) {
                    console.log("Error: " + error.code + " " + error.message);
                    deferred.reject(error);
                }
            });

            return deferred.promise;

        }
    };

}]);