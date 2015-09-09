describe("Controller: HomepageController", function () {

  beforeEach(module("kaching.homepage"));

  var scope, controller, q, AccountService;

  beforeEach(inject(function ($rootScope, _$controller_, $q, $injector) {
    scope = $rootScope.$new();
    q = $q;
    AccountService = $injector.get("AccountService");
    controller = _$controller_("HomepageController", {AccountService: AccountService});
  }));

  describe("the getAccount method", function () {
    describe("when the request to AccountService is a success", function () {
      it("should set the balance property", function () {
        sinon.stub(AccountService, "getAccount").returns(q.resolve({data: {balance: 1000}}));
        var vm = controller;
        vm.getAccount();
        scope.$apply();
        expect(vm.balance).toEqual(1000);
      });
    });
    describe("when the request to AccountService is a failure", function () {
      it("should set the friends property", function () {
        sinon.stub(AccountService, "getAccount").returns(q.reject());
        var vm = controller;
        vm.getAccount();
        scope.$apply();
        expect(vm.balance).toBeUndefined();
        expect(vm.error).toEqual("Error: cannot retrieve the Account information");
      });
    });
  });
});