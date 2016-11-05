angular.
  module('weightData').
  component('weightData', {
    templateUrl:'weight-data/weight-data.template.html',
    controller: ['$http',
      function WeightDataController($http) {
        this.records = JSON.parse(localStorage['records']);
        }
      ]
  });