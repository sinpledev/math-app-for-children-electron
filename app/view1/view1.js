'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.operator = '+';
    $scope.showAlertFlag = false;
    $scope.showMarkingBtnFlag = true;
    $scope.showSetting = false;
    $scope.isTab1 = true;
    $scope.isTab2 = false;
    $scope.isTab3 = false;
    $scope.isTab4 = false;
    $scope.numOptions = [
        { code: 1, text: 1 },
        { code: 2, text: 2 },
        { code: 3, text: 3 }
    ];
    $scope.num1 = $scope.numOptions[0];
    $scope.num2 = $scope.numOptions[0];
    $scope.numberArray = math.makeNumberArray($scope.operator, $scope.num1.code, $scope.num2.code);

    $scope.marking = marking;
    $scope.reset = reset;
    $scope.toggleSetting = toggleSetting;

    function marking() {
        $scope.showAlertFlag = true;
        $scope.numberArray = math.marking( $scope.numberArray, $scope.operator );
        $scope.showMarkingBtnFlag = false;
    }

    function reset( operator, tabNo ) {
        $scope.operator = operator;
        $scope.numberArray = math.makeNumberArray($scope.operator, $scope.num1.code, $scope.num2.code);
        $scope.showAlertFlag = false;
        $scope.showMarkingBtnFlag = true;

        if( tabNo === 'tab1') {
            $scope.isTab1 = true;
            $scope.isTab2 = false;
            $scope.isTab3 = false;
            $scope.isTab4 = false;
        } else if( tabNo === 'tab2') {
            $scope.isTab1 = false;
            $scope.isTab2 = true;
            $scope.isTab3 = false;
            $scope.isTab4 = false;
        } else if( tabNo === 'tab3') {
            $scope.isTab1 = false;
            $scope.isTab2 = false;
            $scope.isTab3 = true;
            $scope.isTab4 = false;
        } else if( tabNo === 'tab4') {
            $scope.isTab1 = false;
            $scope.isTab2 = false;
            $scope.isTab3 = false;
            $scope.isTab4 = true;
        }
    }

    function toggleSetting() {
        $scope.showSetting = !$scope.showSetting;
    }

}])

.directive('printQuestions', function() {
    return {
        templateUrl: 'app/view1/question_tpl.html'
    };
});
