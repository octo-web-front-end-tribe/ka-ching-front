(function () {
  var app = angular.module("kaching.homepage");
  app.controller("HomepageController", ["$location", "FriendsService", "AccountService", homepageController]);

  function homepageController($location, FriendsService, AccountService) {

    var vm = this;

    FriendsService.getFriends(function (error, data) {
      if (error) {
        console.error("erreur lors de la récupération de la liste des amis");
        $location.url("/login");
      } else {
        vm.friends = data;
      }
    });

    AccountService.getAccount(function (error, data) {
      if (error) {
        console.error("erreur lors de la récupération des comptes");
        $location.url("/login");
      } else {
        vm.balance = data.balance;
      }
    });

  }
})();
