let localStorageWrap;

export class LocalStorageFactory {
    constructor ($localStorage) {
        'ngInject';

        localStorageWrap = $localStorage;
    }

    get(key) {
        return localStorageWrap[key];
    }

    set(key, obj) {
        return localStorageWrap[key] = obj;
    }

    insert(key, value) {
        if (!localStorageWrap[key]) {
            localStorageWrap[key] = [];
        }

        localStorageWrap[key].push(value);
    }
}
