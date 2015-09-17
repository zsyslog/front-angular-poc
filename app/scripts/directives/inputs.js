'use strict';

/**
 * @ngdoc directive
 * @name b2bautosFrontpocApp.directive:inputs
 * @description
 * # inputs
 */


var templates_base = 'scripts/directives/tpl/';


angular.module('b2bautosFrontpocApp')
  .directive('simpleButton', function () {
    return {
      templateUrl: templates_base + 'simpleButton.html',
      restrict: 'AE',
      replace: true,
      scope: {
      	config: '=sbCfg'
      },
      link: function(scope, element, attrs) {
      	scope.button = {};
      	scope.button.icon = scope.config.icon ? "glyphicon glyphicon-" + scope.config.icon : '';
      	scope.button.label = scope.config.label ? scope.config.label : '';
      	scope.button.type = scope.config.type ? "btn btn-" + scope.config.type : "";
      }
    };
  });

angular.module('b2bautosFrontpocApp')
  .directive('simpleSelect', function ($compile) {
    return {
      templateUrl: templates_base + 'simpleSelect.html',
      restrict: 'AE',
      replace: true,
      scope: {
      	config: '=ssCfg',
      	options: '=ssOptions',
      	ngModel: '=ssModel'
      }
    };
  });

  angular.module('b2bautosFrontpocApp')
  .directive('emailInput', function ($compile) {
    return {
      templateUrl: templates_base + 'emailInput.html',
      restrict: 'AE',
      replace: true,
      scope: {
      	config: '=ssCfg',
      	options: '=ssOptions',
      	ngModel: '=ssModel'
      }
    };
  });
