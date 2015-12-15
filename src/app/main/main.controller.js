export class MainController {
    constructor ($scope, appStorage, SCHEMA) {
        'ngInject';

        this.store = appStorage;

        // Something to store the input at.
        this.myFormData = $scope.myFormData = {};

        // Expose the schema on the scope.
        $scope.mySchema = this.store.get('schema') || SCHEMA;
    }

    add(data) {
        data.id = this.uniqueId();
        console.log(data.id);
        this.store.insert('movable-property', angular.copy(data));
    }

    uniqueId(s) {
        function _p8(s) {
            var p = (Math.random().toString(16)+"000000000").substr(2,8);
            return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
        }

        return _p8() + _p8(true) + _p8(true) + _p8();
    }
}
