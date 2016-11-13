angular.
  module('weightData').
  component('weightData', {
    templateUrl:'weight-data/weight-data.template.html',
    controller: ['$http',
      function WeightDataController($http) {
        this.records = JSON.parse(localStorage['records']);

        this.current_date = new Date();
        this.current_date.setHours(0); 
        this.current_date.setMinutes(0);
        this.current_date.setSeconds(0);
        this.current_date.setMilliseconds(0);


        this.setWeight = function(){
          var key = JSON.stringify(this.current_date);
          key = JSON.parse(key);
          for (var i=0; i<this.records.length; i++){
            if (this.records[i]['date'] == key){
              this.records[i]['actual'] = this.currentWeight;
              localStorage['records'] = JSON.stringify(this.records);
            }
          }
        }

        }
      ]
  });