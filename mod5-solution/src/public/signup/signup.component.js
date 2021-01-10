(function() {

'use strict';

angular.module('public')
.component('signUp',{
  templateUrl: 'src/public/signup/signUpComponent.html',
  controller: signUpController
});

signUpController.$inject = ['MenuService','StorageService'];

function signUpController(MenuService,StorageService){
  var ctrl = this;
  ctrl.firstname = "";
  ctrl.lastname = "";
  ctrl.email = "";
  ctrl.phone = "";
  ctrl.shortname = "";
  ctrl.isPresent = false;
  ctrl.isRegistered = false;

  ctrl.check = function () {
    if(ctrl.shortname == "") {
      ctrl.isPresent = false;
      return;
    }
    MenuService.isMenuItemPresent(ctrl.shortname.toUpperCase()).then(function (response) {
      console.log("In success");
      if(response.status.value == 500){
        ctrl.isPresent = false;
      } else {
        ctrl.isPresent = true;
      }
    }).catch(function (error) {
      console.log("In error");
      ctrl.isPresent = false;
    });
  };

  ctrl.submit = function () {
    var user = {
      firstname: ctrl.firstname,
      lastname: ctrl.lastname,
      email: ctrl.email,
      phone: ctrl.phone,
      shortname: ctrl.shortname
    };
    StorageService.signup('user',user);
    ctrl.isRegistered = true;
  };

}


})();
