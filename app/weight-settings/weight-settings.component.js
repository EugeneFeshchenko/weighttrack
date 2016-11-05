angular.
  module('weightSettings').
  component('weightSettings', {
    templateUrl: 'weight-settings/weight-settings.template.html',
    controller: ['$routeParams',
      function settingsController($routeParams) {
      	try {
      		params = JSON.parse(localStorage['params'])
      	}
        catch(e){
          console.debug(e);
          params = {'weight':{'start': 0,
                              'target': 0},
                    'dates':{'start':0,
                             'end': 0},
                    }
        
         }
        this.start_weight = params['weight']['start'];
        this.target_weight = params['weight']['target'];
        this.start_date = new Date(params['dates']['start']);
        this.end_date = new Date(params['dates']['end']);

        this.save = function(){
      	  params['weight']['start'] = this.start_weight;
      	  params['weight']['target'] = this.target_weight;
      	  params['dates']['start'] = this.start_date.toString();
      	  params['dates']['end'] = this.end_date.toString();
      	  localStorage['params'] = JSON.stringify(params);
      };
 
      this.cancel = function(){
      	this.start_weight = params['weight']['start'];
        this.target_weight = params['weight']['target'];
        this.start_date = new Date(params['dates']['start']);
        this.end_date = new Date(params['dates']['end']);
      }

      }
    ]
  });