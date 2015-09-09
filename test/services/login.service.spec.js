describe("Service: LoginService", function () {

  beforeEach(module("kaching.login"));

  var service, httpBackend;

  beforeEach(inject(function (LoginService, $httpBackend) {
    service = LoginService;
    httpBackend = $httpBackend;
  }));

  describe("the authenticate method", function () {
    afterEach(function () {
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });
    it("should get the data from the database", function () {
      var credentials = {
        login: "john.doe",
        password: "foobar"
      };
      service.authenticate(credentials);
      httpBackend.expectPOST("http://localhost:3000/authenticate", credentials).respond(200);
    })
  });
});