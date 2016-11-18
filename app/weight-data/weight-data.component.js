angular.
module('weightData').
component('weightData', {
    templateUrl: 'weight-data/weight-data.template.html',
    controller: ['$http',
        function WeightDataController($http) {
            this.records = JSON.parse(localStorage['records']);
            for (var i = 0; i < this.records.length; i++) {
                this.records[i]['planned'] = parseFloat(this.records[i]['planned']);
                this.records[i]['actual'] = parseFloat(this.records[i]['actual']);
                this.records[i]['date'] = new Date(this.records[i]['date']);
            }

            this.today = new Date();

            
        } //controller end;
    ]
});
