(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item']
function ItemDetailController(item) {
  var itemDetail = this;
  console.log("item-detail.controller1: ", item);
  console.log("item-detail.controller2: ", item.data.menu_items);
  // console.log("item-detail.cat_name: ", cat_name);
  itemDetail.dishes = item.data.menu_items;
  console.log("# of dishes: ", itemDetail.dishes.length);
}

})();
