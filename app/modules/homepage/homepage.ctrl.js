(function () {
  var app = angular.module("kaching.homepage");
  app.controller("HomepageController", ["$window", "AccountService", homepageController]);

  function homepageController($window, AccountService) {
    var vm = this;
    vm.getAccount = getAccount;
    vm.balance = null;
    vm.error = null;

    vm.username = $window.sessionStorage.username;
    getAccount(vm.username);

    function getAccount(username) {
      AccountService.getAccount(username).then(function (response) {
        vm.balance = response.data.balance;
      }, function () {
        vm.error = "Error: cannot retrieve the Account information";
      });
    }
  }
})();
