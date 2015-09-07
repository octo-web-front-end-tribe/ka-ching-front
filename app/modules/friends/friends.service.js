(function () {
  var app = angular.module("kaching.friends");
  app.factory("FriendsService", ["$http", friendsService]);

  function friendsService($http) {
    return {
      getFriends: function (callback) {
        $http({url: "http://localhost:3000/api/friends", method: "GET"})
          .success(function (data) {
            callback(null, data);
          })
          .error(function () {
            callback("error");
          });
      }
    };
  }
})();
