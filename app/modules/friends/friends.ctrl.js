(function () {
  angular.module("kaching.friends")
    .controller("FriendsController", ["FriendsService", friendsController]);

  function friendsController(FriendsService) {
    var vm = this;
    vm.getFriends = getFriends;
    vm.friends = [];

    function getFriends() {
      FriendsService.getFriends().then(function (response) {
        vm.friends = response.data;
      }, function () {
        vm.error = "Error: cannot retrieve the Friends list";
      });
    }

  }
})();
