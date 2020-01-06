(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['items'];
function MainMenuAppController(items) {
  var mainMenu = this;
  mainMenu.items = items.data;
  console.log("MainMenuAppController: ", items.data);
}

})();
