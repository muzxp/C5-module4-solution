(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item']
function ItemDetailController(item) {
  var itemDetail = this;
  //console.log("item-detail.controller1: ", item);
  console.log("item-detail.controller2: ", item.data.menu_items);
  itemDetail.dishes = item.data.menu_items;
  itemDetail.category_name = item.data.category.name
  console.log("# of dishes: ", itemDetail.dishes.length);
  console.log("category: ", item.data.category.name);
}

})();
