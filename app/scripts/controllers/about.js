'use strict';

/**
 * @ngdoc function
 * @name myprojectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myprojectApp
 */
angular.module('myprojectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
