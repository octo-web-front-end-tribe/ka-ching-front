(function () {
  var app = angular.module("kaching.transfers").constant("_", window._);
  app.controller("TransfersController", ["_", "$location", transfersController]);

  function transfersController() {
    var vm = this;
    vm.orderByDateDescending = "true";
    vm.orderByAmountDescending = false;
    vm.groupedByRecipient = true;
    vm.reloadTransfers = function () {
      vm.transfers = _.sortByOrder(vm.transfers, ["recipient", "date", "amount"], ["asc", "desc", "desc"]);
    };
    vm.transfers = [{
      id: "1",
      recipient: "Paul Bismuth",
      amount: "123.45",
      date: "2015/01/30"
    }, {
      id: "2",
      recipient: "Paul Bismuth",
      amount: "1.45",
      date: "2015/02/30"
    }, {
      id: "3",
      recipient: "Barack Obama",
      amount: "2.12",
      date: "2014/01/30"
    }];

  }
})();
