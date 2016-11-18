angular.
module('settings').
component('settings', {
    templateUrl: 'settings/settings.template.html',
    controller: ['$routeParams',
        function settingsController($routeParams) {
            try {
                params = JSON.parse(localStorage['params'])
            } catch (e) {
                console.debug(e);
                params = {
                    'weight': {
                        'start': 0,
                        'target': 0
                    },
                    'dates': {
                        'start': 0,
                        'end': 0
                    },
                }

            }
            this.start_weight = params['weight']['start'];
            this.target_weight = params['weight']['target'];
            this.start_date = new Date(params['dates']['start']);
            this.end_date = new Date(params['dates']['end']);

            this.save = function() {
                params['weight']['start'] = this.start_weight;
                params['weight']['target'] = this.target_weight;
                params['dates']['start'] = this.start_date.toString();
                params['dates']['end'] = this.end_date.toString();
                localStorage['params'] = JSON.stringify(params);
                calculate_records();
                alert('Сохранено');
            };

            this.cancel = function() {
                this.start_weight = params['weight']['start'];
                this.target_weight = params['weight']['target'];
                this.start_date = new Date(params['dates']['start']);
                this.end_date = new Date(params['dates']['end']);
                alert('Отменено');
            }

            var ctrl = this;
            calculate_records = function() {
                var period_length = (ctrl.end_date - ctrl.start_date) / 1000 / 60 / 60 / 24;
                var step = Math.abs((ctrl.target_weight - ctrl.start_weight) / period_length);
                var records = [];
                var i = 0;
                while (i <= period_length) {
                    var date_key = new Date(ctrl.start_date.getFullYear(),
                        ctrl.start_date.getMonth(),
                        ctrl.start_date.getDate() + i);
                    var node = {
                        'date': date_key,
                        'planned': (ctrl.start_weight - (step * i)).toFixed(2),
                        'actual': '',
                        'note': ''
                    }
                    records.push(node);
                    i++;
                };
                localStorage['records'] = JSON.stringify(records);
            }; //calculateRecordsEnd;
        } //controllerEnd;
    ]
});