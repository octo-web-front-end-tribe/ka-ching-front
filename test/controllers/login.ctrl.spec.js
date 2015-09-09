describe("Controller: LoginController", function () {

  beforeEach(module("kaching.login"));

  var scope, vm, location, LoginService, q, window;

  beforeEach(inject(function (_$controller_, $location, $q, $rootScope, $injector) {
    scope = $rootScope.$new();
    q = $q;
    location = $location;
    LoginService = $injector.get('LoginService');
  }));

  describe("the submit method", function () {
    var locationSpy;
    beforeEach(function () {
      locationSpy = sinon.spy(location, "url");
    });
    afterEach(function () {
      location.url.restore();
    });
    describe("when the credentials are good", function () {
      beforeEach(inject(function (_$controller_) {
        window = {
          sessionStorage: {}
        };
        vm = _$controller_("LoginController", {$location: location, LoginService: LoginService, $window: window});
      }));
      it("should redirect to the homepage", function () {
        var credentials = {
          login: "user",
          password: "password"
        };
        sinon.stub(LoginService, "authenticate").returns(q.resolve({
          data: {
            token: "the_token"
          }
        }));
        vm.submit(credentials);
        scope.$apply();
        assert.isTrue(locationSpy.calledWith("/homepage"), "location.url('/homepage') has not been called");
        expect(window.sessionStorage.token).toEqual("the_token");
        expect(vm.error).toBe(null);
      });
    });
    describe("when the credentials are bad", function () {
      describe("when a token is defined", function () {
        beforeEach(inject(function (_$controller_) {
          window = {
            sessionStorage: {
              token: "the_token"
            }
          };
          vm = _$controller_("LoginController", {$location: location, LoginService: LoginService, $window: window});
        }));
        it("should not grant the access delete the token and show an error message", function () {
          var credentials = {
            login: "badUser",
            password: "badPassword"
          };
          sinon.stub(LoginService, "authenticate").returns(q.reject({}));
          vm.submit(credentials);
          scope.$apply();
          assert.isFalse(locationSpy.called, "location.url('/homepage') has been called");
          expect(vm.error).toEqual("Error: Invalid user or password");
          expect(window.sessionStorage).toEqual({});
        });
      });
      describe("when a token is not defined", function () {
        beforeEach(inject(function (_$controller_) {
          window = {
            sessionStorage: {}
          };
          vm = _$controller_("LoginController", {$location: location, LoginService: LoginService, $window: window});
        }));
        it("should not grant the access delete the token and show an error message", function () {
          var credentials = {
            login: "badUser",
            password: "badPassword"
          };
          sinon.stub(LoginService, "authenticate").returns(q.reject({}));
          vm.submit(credentials);
          scope.$apply();
          assert.isFalse(locationSpy.called, "location.url('/homepage') has been called");
          expect(vm.error).toEqual("Error: Invalid user or password");
          expect(window.sessionStorage).toEqual({});
        });
      });
    });
  });
});