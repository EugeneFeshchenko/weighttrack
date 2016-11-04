angular.
  module('weightSettings').
  component('weightSettings', {
    templateUrl: 'weight-settings/weight-settings.template.html',
    controller: ['$routeParams',
      function settingsController($routeParams) {
        params = localStorage['params'];
        if !(params){
        	var params = {'weight':{'start': 0,
                                    'target': 0},
                          'dates':{'start':0,
                                   'end': 0},
                          }
        }
      }
      this.start_weight = params['weight']['start'];
      this.target_weight = params['weight']['target'];
      this.start_date = new Date(params['dates']['start']);
      this.end_date = new Date(params['dates']['end']);

      this.save = function(){
      	localStorage['params'] = params;
      }
    ]
  });