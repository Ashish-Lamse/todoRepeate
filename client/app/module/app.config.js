/**
 * Created by Ashish Lamse on 18/8/16.
 */

(function(){
  angular.module('todoApp')
      .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

          $routeProvider
              .when('/',{
              templateUrl:'partials/dashboard.html',
              controller:'dashboardController',
              controllerAs:'dc'
             });
          $locationProvider.html5Mode(true);
      }])
}());
