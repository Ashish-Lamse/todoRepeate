/**
 * Created by Ashish Lamse on 23/8/16.
 */

(function () {
    angular.module('componentExa',[])
        .controller('example1Controller',example1Controller)

    example1Controller.$inject=['$scope'];

    function example1Controller($scope){
        $scope.name={
            name:"Khan"
        };
    }
}());
