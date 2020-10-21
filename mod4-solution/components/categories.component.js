(function () {

angular.module('MenuApp')
.component('categoriesComponent', {
	templateUrl: "../template/categories.html",
	bindings: {
		menus: '<'
	}
});


})();