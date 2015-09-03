(function () {

    var app = angular.module("kaching", ["kaching.login", "kaching.friends", "kaching.homepage", "ui.router", "templates"]);

    app.factory('authInterceptor', function ($rootScope, $q, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    // handle the case where the user is not authenticated
                }
                return response || $q.when(response);
            }
        };
    });

    app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/homepage");
        $httpProvider.interceptors.push('authInterceptor');
        $stateProvider
            .state("homepage", {
                url: "/homepage",
                templateProvider: function ($templateCache) {
                    return $templateCache.get('homepage/homepage.tpl.html');
                }
            })
            .state("login", {
                url: "/login",
                templateProvider: function ($templateCache) {
                    return $templateCache.get('login/login.tpl.html');
                }
            })
            .state("friends", {
                url: "/friends",
                templateProvider: function ($templateCache) {
                    return $templateCache.get('friends/friends.tpl.html');
                }
            });
    });

})();