(function () {
  var app = angular.module("kaching.login");
  app.controller("LoginController", ["$http", "$window", "$location", loginController]);

  function loginController($http, $window, $location) {
    var vm = this;
    vm.submit = submit;
    vm.error = null;

    function submit(credentials) {
      $http.post("http://localhost:3000/authenticate", credentials)
        .success(function (data) {
          $window.sessionStorage.token = data.token;
          $location.url("/homepage");
        })
        .error(function () {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;

          // Handle login errors here
          vm.error = "Error: Invalid user or password";
        });
    }
  }
})();
