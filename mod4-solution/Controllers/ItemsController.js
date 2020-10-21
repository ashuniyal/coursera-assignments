(function () {

angular.module('MenuApp')
.controller('ItemRouter', ItemRouterFunction);

ItemRouterFunction.$inject = ['$stateParams','MenuDataService', 'items'];
function ItemRouterFunction($stateParams, MenuDataService, items) {
	var iter = this;
	iter.allItems = items;
}

})();