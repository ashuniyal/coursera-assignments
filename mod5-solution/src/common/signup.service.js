(function () {
'use strict';

angular.module('common')
.service('StorageService', StorageServiceFunction);

StorageServiceFunction.$inject = ['$window'];

function StorageServiceFunction($window){

  var service = this;

  service.signup = function (key, user) {
    $window.localStorage[key] = JSON.stringify(user);
  }

  service.getUser = function (key) {
    return JSON.parse($window.localStorage[key] || '{}');
  }

}

})();
