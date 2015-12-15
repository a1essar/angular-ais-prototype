export class ConstructorController {
    constructor ($scope, appStorage, SCHEMA) {
        'ngInject';

        this.store = appStorage;
        $scope.mySchema = this.store.get('schema') || SCHEMA;
    }

    updateSchema(mySchema) {
        this.store.set('schema', mySchema);
        console.log('updateSchema', mySchema);
    }
}
