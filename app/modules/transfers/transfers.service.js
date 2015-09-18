(function () {
    var app = angular.module("kaching.transfers");
    app.factory("TransfersService", ["$http", transfersService]);

    function transfersService() {
        return {
            sortByOrder: function (transfers, orderByDateDescending, orderByAmountDescending, groupedByRecipient) {
                //reset order
                transfers = _.sortByOrder(transfers, ["id"], ["desc"]);
                var iteratees = ["date"];
                var orders = [];
                if (orderByDateDescending) {
                    orders = ["desc"];
                } else {
                    orders = ["asc"];
                }
                if (orderByAmountDescending) {
                    iteratees.unshift("amount");
                    orders.unshift("desc");
                }
                if (groupedByRecipient) {
                    iteratees.unshift("recipient");
                    orders.unshift("asc");
                }
                return _.sortByOrder(transfers, iteratees, orders);
            }
        };
    }
})
();
