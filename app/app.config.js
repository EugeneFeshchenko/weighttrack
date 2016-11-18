angular.
  module('weightTrackApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/index', {
          template: '<weight-data></weight-data>'
        }).
        when('/settings', {
          template: '<settings></settings>'
        }).
         when('/chart', {
          template: '<chart></chart>'
        }).
        otherwise('/index');
    }
  ]);