(function () {
'use strict';

angular.module('MenuApp')
.service('MenuAppService', MenuAppService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuAppService.$inject = ['$http', 'ApiBasePath'];
function MenuAppService($http, ApiBasePath) {
  var service = this;

  // Returns a promise, NOT items array directly
  service.getMenuCategories = function () {
    var response = $http({
                    method: "GET",
                    url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  service.getMenuForCategory = function (shortName) {
    var response = $http({
                    method: "GET",
                    url: (ApiBasePath + "/menu_items.json"),
                      params: {
                        category: shortName
                      }
    });

    return response;
  };

};
})();
