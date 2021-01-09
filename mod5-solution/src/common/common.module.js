(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://frozen-castle-56496.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
