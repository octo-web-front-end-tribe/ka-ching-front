(function () {
  var app = angular.module("kaching.homepage");
  app.controller("HomepageController", ["AccountService", homepageController]);

  function homepageController(AccountService) {
    var vm = this;
    vm.getAccount = getAccount;
    vm.balance = null;
    vm.error = null;

    function getAccount() {
      AccountService.getAccount().then(function (response) {
        vm.balance = response.data.balance;
      }, function () {
        vm.error = "Error: cannot retrieve the Account information";
      });
    }
  }
})();
