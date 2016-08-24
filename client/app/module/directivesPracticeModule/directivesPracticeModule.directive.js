/**
 * Created by Ashish Lamse on 22/8/16.
 */

angular.module('todoApp',[])

   .controller('example1Controller',function($scope){
        $scope.person={
            fname:'Ashish',
            lname:'Lamse',
            city:'Hyderabad',
            street:'Dharam Karm Road'
        }
    })
    .controller('example2Controller',function($scope){
        $scope.sonu={
            name:'Sonu Babu',
            address:'Hyderabad'
        };
        $scope.monu={
            name:'Monu Babu',
            address:'Nagpur'
        }
    })

    .controller('linkExample',['$scope',function($scope){
        $scope.format='d/M/yyyy h:mm:ss a'
    }])

    .directive('linkWithTimeinterval',['$interval', 'dateFilter',function($interval,dateFilter){
        function link(scope,element,attribute){
            var format,
                timeoutID;


            function setTime(){
                element.text(dateFilter(new Date,format))
            }

            scope.$watch(attribute.linkWithTimeinterval,function(val){
                format=val;
                setTime();
            });

            element.on('$destroy',function(){
                $interval.cancel(timeoutID)
            });

            timeoutID=$interval(function(){
                setTime();
            },1000);
        }

        return{
            link:link
        }
    }])

    .controller('transcludeExample',function($scope){
        $scope.name="Ya I am Transclude";
    })
    .directive('myTransclude',function(){
        return{
            templateUrl:'transcludeExa.html',
            scope:{},
            transclude:true
        }
    })

    .directive('example1Directive',function(){
        return{
            restrict:'E',
            templateUrl:function(ele,attr){
                return 'person'+attr.type+'.html';
            }
        }
    })
    .directive('example2Directive',function(){
        return{
            restrict:'E',
            scope:{
                customer:'=info'
            },
            templateUrl:function(ele,attr){
                return 'exampleIsolate.html';
            }
        }
})

