(function () {

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
	$scope.items = "";
	$scope.message = "";
	$scope.colorStyle = {};

	$scope.check = function () {
		var itemList = $scope.items.split(",");
		var numberOfItems = 0;

		for(var i = 0;i < itemList.length; i = i + 1){
			itemList[i] = itemList[i].replaceAll(' ','');
			if(itemList[i].length != 0) {
				numberOfItems = numberOfItems + 1;
			}
		}

		if(numberOfItems == 0) {
			$scope.message = "Please enter data first";
			$scope.colorStyle = {color: "red"};
		} else if(numberOfItems <= 3) {
			$scope.message = "Enjoy!";
			$scope.colorStyle = {color: "green"};
		} else {
			$scope.message = "Too much!";
			$scope.colorStyle = {color: "green"};
		}
	};
}

})();