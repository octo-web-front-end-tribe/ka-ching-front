describe("Controller: FriendsController", function () {

  beforeEach(module("kaching.friends"));

  var scope, controller, q, FriendsService;

  beforeEach(inject(function ($rootScope, _$controller_, $q, $injector) {
    scope = $rootScope.$new();
    q = $q;
    FriendsService = $injector.get('FriendsService');
    controller = _$controller_("FriendsController", {FriendsService: FriendsService});
  }));

  describe("the getFriends method", function () {
    describe("when the request to FriendsService is a success", function () {
      it("should set the friends property", function () {
        sinon.stub(FriendsService, "getFriends").returns(q.resolve({data: ["Superman", "IronMan"]}));
        var vm = controller;
        vm.getFriends();
        scope.$apply();
        expect(FriendsService.getFriends).toHaveBeenCalled();
        expect(vm.friends).toEqual(["Superman", "IronMan"]);
      });
    });
    describe("when the request to FriendsService is a failure", function () {
      it("should set the friends property", function () {
        sinon.stub(FriendsService, "getFriends").returns(q.reject());
        var vm = controller;
        vm.getFriends();
        scope.$apply();
        expect(FriendsService.getFriends).toHaveBeenCalled();
        expect(vm.friends).toEqual([]);
        expect(vm.error).toEqual("Error: cannot retrieve the Friends list");
      });
    });

  });
});