/**
 * Created by Ashish Lamse on 18/8/16.
 */

(function(){
    angular.module('todoApp')
        .controller('dashboardController',dashboardController);
        dashboardController.$inject=['$rootScope','dashBoardFactory'];

    function dashboardController($rootScope,dashBoardFactory){
        var dc=this;
        loadTask();

        dc.priorities=[

            {name:'High',value:'HIGH'},
            {name:'Midium',value:'MIDIUM'},
            {name:'Low',value:'LOW'}
        ];
        dc.statuses=[
            {name:'Opened',value:'OPENED'},
            {name:'Invalid',value:'INVALID'},
            {name:'Inprogress',value:'INPROGRESS'},
            {name:'Completed',value:'COMPLETED'},
            {name:'Closed',value:'CLOSED'}

        ];

        dc.placement={
            selected:'top',
            delete:'Delete Task',
            edit:'Edit Task',
            select:'Mark as Complete'
        };

        function loadTask(){
            dashBoardFactory.getTasks().then(
                function(response){
                    $rootScope.allTasks=response;
                    dc.tasks=response;
                }
            )
        }

        }
}())