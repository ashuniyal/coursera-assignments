(function () {
	
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider','$qProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $qProvider){
	//$qProvider
	//.errorOnUnhandledRejections(false);

	$urlRouterProvider
	.otherwise("/");

	$stateProvider
	.state('home',{
		url: "/",
		templateUrl: "../template/home.html",
	})
	.state('categories',{
		url: "/categories",
		templateUrl: "../template/routes-categories.html",
		controller: "CategoryRouter as cat",
		resolve: {
			menus: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	})
	.state('categories.itemDetail',{
		url: "/item-detail/{param}",
		templateUrl: "../template/routes-items.html",
		controller: "ItemRouter as iter",
		resolve: {
			items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
				return MenuDataService.getItemsForCategory($stateParams.param);
			}]
		}
	});

}

})();
