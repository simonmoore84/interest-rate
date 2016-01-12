
describe("Balance", function() {

      beforeEach(module('interestApp'));

      var $controller;

      beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
      }));

      describe('$scope.balance', function() {
        it('Test balance', function() {
          var $scope = {};

          $scope.balance = '1000';
          $scope.interest = '50';

          return $scope.balance/100 * $scope.interest + $scope.balance;
        });

    });

});

