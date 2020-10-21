(function () {

angular.module('MenuApp')
.component('itemsComponent', {
	templateUrl: "../items.html",
	bindings: {
		items: '<'
	}
});


})();