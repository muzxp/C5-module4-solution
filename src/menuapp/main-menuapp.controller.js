(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['items'];
function MainMenuAppController(items) {
  var mainMenu = this;
  mainMenu.items = items.data;
  console.log("MainMenuAppController: ", items);
  console.log("MainMenuAppController2: ", items.data);
  console.log("xxx: ", items.data[0].id);
  console.log("xxx: ", items.data[0].short_name);
  console.log("xxx: ", items.data[0].name);
}

})();
