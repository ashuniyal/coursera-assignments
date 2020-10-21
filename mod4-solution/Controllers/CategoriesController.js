(function () {

angular.module('MenuApp')
.controller('CategoryRouter', CategoryRouterFunction);


CategoryRouterFunction.$inject = ['MenuDataService','menus'];
function CategoryRouterFunction(MenuDataService, menus) {
	var cat = this;
	cat.menuItems = menus;
}

})();