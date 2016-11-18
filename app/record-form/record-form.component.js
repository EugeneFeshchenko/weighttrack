angular.
module('recordForm').
component('recordForm', {
    templateUrl: 'record-form/record-form.template.html',
    controller: ['$routeParams',
        function settingsController($routeParams) {
            this.records = JSON.parse(localStorage['records']);
            for (var i = 0; i < this.records.length; i++) {
                this.records[i]['planned'] = parseFloat(this.records[i]['planned']);
                this.records[i]['actual'] = parseFloat(this.records[i]['actual']);
            }

        } //controllerEnd;
    ]
});
