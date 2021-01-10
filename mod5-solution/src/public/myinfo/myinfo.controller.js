(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoControllerFunction);

MyInfoControllerFunction.$inject = ['user','MenuService'];

function MyInfoControllerFunction(user, MenuService) {
  var myinfoctrl = this;
  myinfoctrl.user = user;
  myinfoctrl.isRegistered = false;
  if(Object.keys(user).length == 0){
    myinfoctrl.isRegistered = false;
  }
  MenuService.isMenuItemPresent(user.shortname).then(function (response) {
    myinfoctrl.item = response.data;
  });

}

})();
