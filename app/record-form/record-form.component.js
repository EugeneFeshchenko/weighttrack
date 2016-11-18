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
                this.records[i]['date'] = new Date(this.records[i]['date']);
            }

            this.date = new Date();
            this.date.setHours(0, 0, 0, 0);
            for (var i = 0; i < this.records.length; i++) {                
                if (this.records[i]['date'].getTime() == this.date.getTime()) {
                    this.currentWeight = this.records[i]['actual'];
                    this.plannedWeight = this.records[i]['planned'];
                    this.note = this.records[i]['note'];
                };
            }

            this.saveRecord = function() {
                for (var i = 0; i < this.records.length; i++) {
                    if (this.records[i]['date'].getTime() == this.date.getTime()) {
                        this.records[i]['actual'] = this.currentWeight;
                        this.records[i]['note'] = this.note;
                        localStorage['records'] = JSON.stringify(this.records);
                        window.location = '#';
                    }
                }
            };

        } //controllerEnd;
    ]
});
