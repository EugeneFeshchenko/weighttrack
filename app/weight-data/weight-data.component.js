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
            }

            this.current_date = new Date();
            this.current_date.setHours(0, 0, 0, 0);
            var key = JSON.stringify(this.current_date);
            key = JSON.parse(key);
            for (var i = 0; i < this.records.length; i++) {
                if (this.records[i]['date'] == key) {
                    this.currentWeight = this.records[i]['actual'];
                };
            }

            this.setWeight = function() {
                for (var i = 0; i < this.records.length; i++) {
                    if (this.records[i]['date'] == key) {
                        this.records[i]['actual'] = this.currentWeight;
                        localStorage['records'] = JSON.stringify(this.records);
                    }
                }
                this.updateChart();
            };

            this.setRandomValues = function() {
                for (var i = 0; i < this.records.length; i++) {
                    var operand = Math.random() >= 0.5;
                    var second = operand ? Math.random() : -1 * Math.random();
                    var val = this.records[i]['planned'] + second;
                    val = Math.round(val * 100) / 100;
                    this.records[i]['actual'] = val;
                }
                this.updateChart();
            }

            // chart-related piece
            this.updateChart = function() {
                this.series = ['План', 'Факт'];
                this.labels = [];
                this.data = [
                    [],
                    []
                ]
                for (var i = 0; i < this.records.length; i++) {
                    var date_string = new Date(this.records[i]['date']);
                    date_string = date_string.getDate() + '/' + (date_string.getMonth() + 1);
                    this.labels.push(date_string);
                    this.data[0].push(this.records[i]['planned']);
                    this.data[1].push(this.records[i]['actual']);
                }

                this.options = {
                    scales: {
                        yAxes: [{
                            id: 'y-axis-1',
                            type: 'linear',
                            display: true,
                            position: 'left'
                        }, {
                            id: 'y-axis-2',
                            type: 'linear',
                            display: true,
                            position: 'right'
                        }]
                    }
                }
            }
            this.updateChart();
            //end chart-related-piece
        } //controller end;
    ]
});
