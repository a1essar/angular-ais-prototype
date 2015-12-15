export class ReportController {
    constructor ($scope, appStorage, NgTableParams, SCHEMA, REPORTS) {
        'ngInject';

        this.store = appStorage;

        // Expose the schema on the scope.

        if (!this.store.get('movable-property')) {
            this.store.set('movable-property', REPORTS);
        }

        this.reports = this.store.get('movable-property') || REPORTS;
        this.schema = angular.copy(this.store.get('schema')) || SCHEMA;
        this.schemaFields = this.schema.fields || SCHEMA.fields;
        this.columns = [];

        this.schemaFields.forEach((value, index) => {
            let obj = {
                field: value.name,
                sortable: value.name,
                title: value.displayName,
                filter: {
                    [value.name]: 'text'
                }
            };

            this.columns.push(obj);
        });

        console.log(this.columns, this.schemaFields);

        this.data = new NgTableParams({
            page: 1, // show first page
            count: 10 // count per page
        }, {
            filterDelay: 0,
            data: this.reports
        });
    }
}
