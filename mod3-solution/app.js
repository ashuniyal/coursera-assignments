(function () {
	
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirectiveController() {
	var menu = this;
}

function FoundItemsDirective() {
	var ddo = {
		scope: {
			fItems: "=",
			onRemove: "&"
		},
		controller: FoundItemsDirectiveController,
		bindToController: true,
		controllerAs: 'menu',
		templateUrl: 'itemsloaderindicator.html',
		transclude: true
	};

	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var nidc = this;
	nidc.searchTerm = "";
	nidc.found = [];
	nidc.noResponse = "";

	nidc.getItems = function () {
		if(nidc.searchTerm.length === 0){
			nidc.noResponse = "Nothing Found";
		} else {
			var response = MenuSearchService.getMatchedMenuItems();
			response.then(function (response) {
				var items = response.data.menu_items;
				var filteredItems = [];

				items.forEach(item => {
					if(item.description.find(nidc.searchTerm) !== -1){
						filteredItems.push(item);
					}
				});
				nidc.found = filteredItems;

			}).catch(function (response) {
				nidc.noResponse = "Nothing Found";
			});
		}
	}

	nidc.onRemove = function (index) {
		nidc.found.splice(index, 1);
	} 
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;

	service.getMatchedMenuItems = function () {
		var response = $http({
			method: 'GET',
			url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
		});
		return response;
	}
}

})();