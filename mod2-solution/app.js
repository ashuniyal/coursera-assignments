(function () {

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyControllerFunction)
.controller('AlreadyBoughtController', AlreadyBoughtControllerFunction)
.service('ShoppingListCheckOffService', ShoppingListCheckOffServiceFunction);


ToBuyControllerFunction.$inject = ['ShoppingListCheckOffService'];
function ToBuyControllerFunction(ShoppingListCheckOffService) {
	var tbc = this;

	tbc.items = ShoppingListCheckOffService.getToBuyItems();

	tbc.transferItem = function (index) {
		ShoppingListCheckOffService.itemBought(index);
	};
}

AlreadyBoughtControllerFunction.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtControllerFunction(ShoppingListCheckOffService) {
	var abc = this;

	abc.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffServiceFunction () {
	var service = this;

	var toBuyItems = [
		{
			name: "Soaps",
			quantity: "5"
		},{
			name: "Brushes",
			quantity: "5"
		},{
			name: "Pencils",
			quantity: "2"
		},{
			name: "Toothpaste",
			quantity: "1"
		},{
			name: "Erasers",
			quantity: "10"
		}
	];
	
	var BoughtItems = [];

	service.itemBought = function (index) {
		BoughtItems.push(toBuyItems[index]);
		toBuyItems.splice(index, 1);
	};

	service.getToBuyItems = function () {
		return toBuyItems;
	};

	service.getBoughtItems = function () {
		return BoughtItems;
	};

}


})();