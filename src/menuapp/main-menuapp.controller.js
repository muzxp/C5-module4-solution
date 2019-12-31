(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuAppService', 'items'];
function MainMenuAppController(MenuAppService, items) {
  var mainmenu = this;
  mainmenu.items = items;
  console.log("MainMenuAppController: ", items);
}

})();
