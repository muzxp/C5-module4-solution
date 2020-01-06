(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var response = $http({
                    method: "GET",
                    url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  service.getItemsForCategory = function (shortName) {
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
