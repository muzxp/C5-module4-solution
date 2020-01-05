(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['items'];
function MainMenuAppController(items) {
  var mainMenu = this;
  mainMenu.items = items;
  console.log("MainMenuAppController: ", items);
}

})();
