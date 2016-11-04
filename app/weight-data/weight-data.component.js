angular.
  module('weightData').
  component('weightData', {
    templateUrl:'weight-data/weight-data.template.html',
    controller: ['$http',
      function WeightDataController($http) {
        var self = this;
        $http.get('weights.json').then(function(response) {
          self.records = response.data;
        });
        }
      ]
  });