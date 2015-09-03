(function () {
    var app = angular.module("kaching.homepage");
    app.controller("HomepageController", ["$location", "FriendsService", homepageController]);

    function homepageController($location, FriendsService) {

        var vm = this;
        vm.balance = 123;

        FriendsService.getFriends(function (error, data) {
            if (error) {
                console.error('erreur lors de la récupération de la liste des amis');
                $location.url('/login');
            } else {
                vm.friends = data;
            }
        });
    }
})();