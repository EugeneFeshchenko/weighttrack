angular.
  module('weightTrackApp').
  component('weightData', {
    template:
        '',
    controller: function WeightDataController() {
      this.records = [
           {'date': new Date(04/11/2016),
            'weight': 99.5,
            'note': '',
            },
          {'date': new Date(03/11/2016),
           'weight': 99.0,
           'note': '',
           },
          {'date': new Date(02/11/2016),
           'weight': 98.8,
           'note': '',
          },
         ]
       }
  });