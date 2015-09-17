'use strict';

/**
 * @ngdoc function
 * @name b2bautosFrontpocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the b2bautosFrontpocApp
 */
angular.module('b2bautosFrontpocApp')
  .controller('MainCtrl', function ($scope) {
    
  	// simpleSelect
    $scope.selectOptions = [
    	{ label:" - Seleccione - ", notAnOption: true}, 
    	{ label:"Opción 1", value: 1},
    	{ label:"Opción 2", value: 2},
    	{ label:"Opción 3", value: 3},
    	{ label:"Opción 4", value: 4},
    ]
		$scope.selectModel = $scope.selectOptions[0];
		$scope.$watch('selectModel', function() {
      console.log('selectModel changed:', $scope.selectModel);
   	});

  });
