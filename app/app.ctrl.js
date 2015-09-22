(function () {
  var app = angular.module("kaching");
  app.controller('AppController', appController);

  function appController() {
    var vm = this;
    vm.username = "blabla"
  }
})();