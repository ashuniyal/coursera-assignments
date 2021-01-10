(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoControllerFunction);

MyInfoControllerFunction.$inject = ['user','MenuService'];

function MyInfoControllerFunction(user, MenuService) {
  var myinfoctrl = this;
  myinfoctrl.user = user;
  myinfoctrl.isRegistered = true;
  if(Object.keys(user).length == 0){
    myinfoctrl.isRegistered = false;
    return;
  }
  if(user.shortname != ""){
    MenuService.isMenuItemPresent(user.shortname.toUpperCase()).then(function (response) {
      myinfoctrl.item = response.data;
    });
}

}

})();
