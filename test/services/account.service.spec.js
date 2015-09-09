describe("Service: AccountService", function () {

  beforeEach(module("kaching.account"));

  var service, httpBackend;

  beforeEach(inject(function (AccountService, $httpBackend) {
    service = AccountService;
    httpBackend = $httpBackend;
  }));

  describe("the getAccount method", function () {
    afterEach(function () {
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });
    it("should get the data from the database", function () {
      service.getAccount();
      httpBackend.expectGET("http://localhost:3000/api/account").respond(200);
    })
  });
});