(function () {

angular.module('data')
.service('MenuDataService', MenuDataServiceFunction);


MenuDataServiceFunction.$inject = ['$http'];
function MenuDataServiceFunction($http) {

	var service = this;

	this.getAllCategories = function () {
		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/categories.json"
		}).then(function (result) {
			return result.data;
		}).catch(function (result) {
			return [];
		});
	};

	this.getItemsForCategory = function (categoryShortName) {
		return $http({
			method: "GET",
			url: " https://davids-restaurant.herokuapp.com/menu_items.json",
			params: {
				category: categoryShortName
			}
		}).then(function (result) {
			return result.data.menu_items;
		}).catch(function (result) {
			return [];
		});
	};
	
}

})();