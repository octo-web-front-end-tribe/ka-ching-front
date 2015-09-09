describe("Service: FriendsService", function () {

  beforeEach(module("kaching.friends"));

  var service, httpBackend;

  beforeEach(inject(function (FriendsService, $httpBackend) {
    service = FriendsService;
    httpBackend = $httpBackend;
  }));

  describe("the getFriends method", function () {
    afterEach(function () {
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });
    it("should get the data from the database", function () {
      service.getFriends();
      httpBackend.expectGET("http://localhost:3000/api/friends").respond(200);
    })
  });
  describe("the addFriend method", function () {
    afterEach(function () {
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });
    it("should perform a POST request to the API", function () {
      service.addFriend();
      httpBackend.expectPOST("http://localhost:3000/api/friends").respond(200);
    })
  })
});