/**
 * Created by Ashish Lamse on 18/8/16.
 */

(function(){
   angular.module('todoApp')
       .factory('dashBoardFactory',dashBoardFactory);
        dashBoardFactory.$inject=['$q','$http'];

    function dashBoardFactory($q,$http){
        return{
            getTasks:getTasks
        };

        function getTasks(){
            var deffered=$q.defer();

            $http.get('todotasks.json').success(
                function(response){
                    deffered.resolve(response.todotasks)
                },
                function(reson){
                    deffered.reject('Reject')
                }
            );
            return deffered.promise;
        }
    }

}());