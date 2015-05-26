'use strict';

/**
 * @ngdoc function
 * @name myprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myprojectApp
 */
angular.module('myprojectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
