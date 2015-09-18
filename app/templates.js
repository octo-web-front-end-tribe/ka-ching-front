angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("friends/friends.tpl.html","<div class=\"row\" ng-controller=\"FriendsController as vm\">\n  <div class=\"col-md-12\">\n    <div id=\"user-balance\">\n      <h2>Solde</h2>\n      <span>{{\'2454545\' | currency}}</span>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div id=\"user-friends\">\n      <h3>My friends</h3>\n      <table class=\"table\">\n        <thead>\n        <th>Name</th>\n        </thead>\n        <tbody>\n        <tr>\n          <td>test1</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");
$templateCache.put("homepage/homepage.tpl.html","<div class=\"row\" ng-controller=\"HomepageController as vm\">\n    <div class=\"col-md-12\">\n        <div id=\"user-balance\">\n            <h2>Solde</h2>\n            <span>{{vm.balance | currency}}</span>\n        </div>\n    </div>\n</div>\n<div class=\"row\" ng-controller=\"FriendsController as friendsCtrl\">\n    <div class=\"col-md-12\" ng-init=\"friendsCtrl.getFriends()\">\n        <div id=\"user-friends\">\n            <h3>My friends</h3>\n            <table class=\"table table-condensed\">\n                <thead>\n                <tr>\n                    <th></th>\n                    <th>Name</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"friend in friendsCtrl.friends\">\n                    <td><img src=\"{{friend.user.picture.thumbnail}}\"</td>\n                    <td>{{friend.user.name.first}} {{friend.user.name.last}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>");
$templateCache.put("login/login.tpl.html","<div id=\"login\" ng-controller=\"LoginController as vm\">\n  <form name=\"loginForm\" novalidate ng-submit=\"vm.submit(vm.credentials)\">\n    <div class=\"form-group\">\n      <label>\n        Login\n      </label>\n      <input\n        name=\"login\"\n        class=\"form-control\"\n        type=\"text\" ng-model=\"vm.credentials.login\"\n        required/>\n      <label>\n        Password\n      </label>\n      <input\n        name=\"password\"\n        class=\"form-control\"\n        type=\"password\" ng-model=\"vm.credentials.password\"\n        required/>\n    </div>\n    <div>{{ vm.error }}</div>\n    <div class=\"text-center\">\n      <button class=\"btn btn-lg btn-default\" type=\"submit\">Submit</button>\n    </div>\n  </form>\n</div>");
$templateCache.put("transfers/all.tpl.html","<div class=\"row\" ng-controller=\"TransfersController as vm\">\n    <div class=\"col-md-12\">\n        <div>\n            <h2>Historique des virements</h2>\n\n            <p>\n                Trier par :\n            </p>\n\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                <input type=\"checkbox\" ng-model=\"vm.orderByAmountDescending\" name=\"orderByAmountDescending\"\n                       ng-change=\"vm.reloadTransfers()\">Trier par montant décroissant\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                <input type=\"checkbox\" ng-model=\"vm.groupedByRecipient\" name=\"groupByRecipient\"\n                       ng-change=\"vm.reloadTransfers()\">Destinataires groupés</label>\n        </div>\n        <div class=\"radio\">\n            <div>\n                <label class=\"control-label\">\n                    <input type=\"radio\" ng-model=\"vm.orderByDateDescending\"\n                           name=\"orderByDateDescending\" value=\"true\"\n                           ng-change=\"vm.reloadTransfers()\"> Date\n                    décroissante </label>\n            </div>\n        </div>\n        <div class=\"radio\">\n            <label>\n                <input\n                        type=\"radio\"\n                        ng-model=\"vm.orderByDateDescending\"\n                        name=\"orderByDateDescending\" value=\"false\"\n                        ng-change=\"vm.reloadTransfers()\">Date\n                croissante</label>\n        </div>\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th>#</th>\n                <th>Destinataire</th>\n                <th>Date</th>\n                <th>Montant</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"transfer in vm.transfers\">\n                <td>{{transfer.id}}</td>\n                <td>{{transfer.recipient}}</td>\n                <td>{{transfer.date}}</td>\n                <td>{{transfer.amount}} €</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");
$templateCache.put("transfers/new.tpl.html","<div class=\"row\" ng-controller=\"TransfersController as vm\">\n    <div class=\"col-md-12\">\n        <div>\n            <h2>Faire un virement</h2>\n            <span></span>\n        </div>\n    </div>\n</div>");}]);