(function () {
  angular.module("kaching.friends")
    .controller("FriendsController", ["$window", "FriendsService", friendsController]);

  function friendsController($window, FriendsService) {
    var vm = this;
    vm.getFriends = getFriends;
    vm.friends = [];

    vm.username = $window.sessionStorage.username;

    function getFriends() {
      FriendsService.getFriends(vm.username).then(function (response) {
        vm.friends = response.data;
      }, function () {
        vm.error = "Error: cannot retrieve the Friends list";
      });
    }

  }
})();
