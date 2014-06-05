/**
 * Created by moran on 05/06/14.
 */

embedlyModule.directive('emOembed', function(embedlyService) {
    return {
        restrict: 'E',
        scope:{
        },
        controller: function($scope){
            $scope.urlToSearch = "";
            $scope.checkIfEnter = function(e) {
                embedlyService.checkIfEnter(e);
            }
            $scope.checkUrl = function() {
                embedlyService.checkUrl('oembed', $scope.urlToSearch);
            }
        },
        template: '<input type="text" ng-model="urlToSearch" ng-keypress="checkIfEnter($event)">' +
            '<button ng-click="checkUrl()">search url</button>'
    };
});