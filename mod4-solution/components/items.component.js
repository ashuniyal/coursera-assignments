(function () {

angular.module('MenuApp')
.component('itemsComponent', {
	templateUrl: "../template/items.html",
	bindings: {
		items: '<'
	}
});


})();