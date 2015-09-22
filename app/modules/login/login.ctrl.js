(function () {
  var app = angular.module("kaching.login");
  app.controller("LoginController", ["$window", "$location", "LoginService", loginController]);

  function loginController($window, $location, LoginService) {
    var vm = this;
    vm.submit = submit;
    vm.error = null;

    function submit(credentials) {
      LoginService.authenticate(credentials).then(
        function (response) {
          $window.sessionStorage.token = response.data.token;
          $window.sessionStorage.username = response.data.username;
          $location.url("/homepage");
        },
        function () {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;
          // Handle login errors here
          vm.error = "Error: Invalid user or password";
        }
      );
    }
  }
})();
