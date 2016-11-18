angular.
module('chart').
component('chart', {
    templateUrl: 'chart/chart.template.html',
    controller: ['$routeParams',
        function settingsController($routeParams) {
            this.records = JSON.parse(localStorage['records']);
            for (var i = 0; i < this.records.length; i++) {
                this.records[i]['planned'] = parseFloat(this.records[i]['planned']);
                this.records[i]['actual'] = parseFloat(this.records[i]['actual']);
            }

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

        } //controllerEnd;
    ]
});
