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
    $scope.numberArray = math.makeNumberArray($scope.operator);
    $scope.showAlertFlag = false;
    $scope.showMarkingBtnFlag = true;

    $scope.marking = marking;
    $scope.reset = reset;
    $scope.test = test;

    function test(number) {
    	var isCorrect = (number.answer === number.correct);

    	return {
    		'glyphicon-ok-circle': isCorrect,
		    'glyphicon-remove-circle': !isCorrect
    	};
    }

	function marking() {
		$scope.showAlertFlag = true;
		$scope.numberArray = math.marking( $scope.numberArray, $scope.operator );
        $scope.showMarkingBtnFlag = false;
    }

    function reset( operator ) {
        $scope.operator = operator;
        $scope.numberArray = math.makeNumberArray();
        $scope.showAlertFlag = false;
        $scope.showMarkingBtnFlag = true;
    }

}])

.directive('plusQuestions', function() {
	return {
		templateUrl: 'app/view1/question_tpl.html'
	};
});
