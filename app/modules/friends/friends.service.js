(function () {
  var app = angular.module("kaching.friends");
  app.factory("FriendsService", ["$http", friendsService]);

  function friendsService($http) {
    return {
      getFriends: function () {
        return $http({url: "http://localhost:3000/api/friends/doe", method: "GET"});
      }
    };

  }
})();
