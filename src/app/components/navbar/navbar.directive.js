export function NavbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {
        },
        controller: NavbarController,
        controllerAs: 'navbar',
        bindToController: true
    };

    return directive;
}

let currentPath = '';

class NavbarController {
    constructor ($scope, $location) {
        'ngInject';

        this.items = $scope.items = [
            {
                'path': '/',
                'title': 'Добавить отчет'
            },
            {
                'path': '/report',
                'title': 'Отчеты'
            },
            {
                'path': '/constructor',
                'title': 'Конструктор'
            }
        ];

        currentPath = $location.path();
    }

    isActive(item) {
        return item.path === currentPath;
    }
}
