(function () {

  var app = angular.module("kaching", ["kaching.login", "kaching.friends", "kaching.homepage", "kaching.transfers", "ui.router", "templates"]);

  app.factory('authInterceptor', function ($rootScope, $q, $window, $location) {
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
          $window.sessionStorage.removeItem('token');
          $location.url('/login');
        } else {
          return response || $q.when(response);
        }
      },
      responseError: function (response) {
        if (response.status === 401) {
          // handle the case where the user is not authenticated
          $window.sessionStorage.removeItem('token');
          $location.url('/login');
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
      })
      .state("transfers", {
        url: "/transfers/all",
        templateProvider: function ($templateCache) {
          return $templateCache.get('transfers/all.tpl.html');
        }
      });
  });

})();