(function () {
  var app = angular.module("kaching.login");
  app.factory("LoginService", ["$http", loginService]);

  function loginService($http) {
    return {
      authenticate: function (credentials) {
        return $http({url: "http://localhost:3000/authenticate", method: "POST", data: credentials});
      }
    };

  }
})();
