export function routerConfig ($routeProvider, $locationProvider) {
    'ngInject';

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        }).when('/report', {
            templateUrl: 'app/report/report.html',
            controller: 'ReportController',
            controllerAs: 'report'
        })
        .when('/constructor', {
            templateUrl: 'app/constructor/constructor.html',
            controller: 'ConstructorController',
            controllerAs: 'myConstructor'
        })
        .otherwise({
            redirectTo: '/'
        });
}
