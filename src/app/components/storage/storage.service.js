export class StorageService {
    constructor ($http, appLocalStorage) {
        'ngInject';

        // define storage

        /*return $http({
            method: 'GET',
            url: 'http://localhost:3010/api/tasks'
        }).then(function () {
            return appApiStorage;
        }, function () {
            return appLocalStorage;
        });*/

        return appLocalStorage
    }
}
