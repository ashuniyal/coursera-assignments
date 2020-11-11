(function () {

angular.module('MenuApp')
.component('categoriesComponent', {
	templateUrl: "./templates/categories.html",
	bindings: {
		menus: '<'
	}
});


})();