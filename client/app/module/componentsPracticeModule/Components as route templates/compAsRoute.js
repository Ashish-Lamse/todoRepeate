/**
 * Created by Ashish Lamse on 24/8/16.
 */

(function(){
    angular.module('compAsRoute',['ngRoute'])

        .component('home',{
            template:"<h5>Hi this is the Eaxmple of :&nbsp;</h5><h4>{{$ctrl.heading.name}}</h4>",
            controller:function(){
                this.heading={name:'Component as Route Template'};
            }
        })

        .config(function($routeProvider){
            $routeProvider
                .when('/',{
                    template:'<home></home>'
                })
        })
}());