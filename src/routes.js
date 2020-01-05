(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade menu page
  .state('mainApp', {
    url: '/main-app',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'MainMenuAppController as mainApp',
    resolve: {
      items: ['MenuAppService', function (MenuAppService) {
        return MenuAppService.getItems();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail",
    resolve: {
      item: ['$stateParams', 'MenuAppService',
        function ($stateParams, MenuAppService) {
          return MenuAppService.getItems()
            .then(function (items) {
              return items[$stateParams.itemId];
            });
        }]
    }
  });
}

})();
