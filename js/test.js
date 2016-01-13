
describe("Testing Investment App", function() {

    beforeEach(module('interestApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
    
    describe('$scope.balance', function() {
        it('Test investment balance between 0 and 1000 produces the correct value with the set interest rate of 1%', function() {
          var $scope = {};
            
          $scope.balance = '500';

          $scope.balance/100 * 1 + $scope.balance;
        });

    });
    
    describe('$scope.balance', function() {
        it('Test investment balance of alues that are equal to 1000 and above but less than 5000. This is to make sute it produces the correct value with the set interest rate of 2%', function() {
          var $scope = {};
            
          $scope.balance = '2500';

          $scope.balance/100 * 2 + $scope.balance;
        });

    });
    
    describe('$scope.balance', function() {
        it('Test investment balance of over 5000', function() {
          var $scope = {};
          
          $scope.balance = '5000';

          return $scope.balance/100 * 3 + $scope.balance;
        });

    });
    
    describe('$scope.balance', function() {
        it('Test investment values that are equal to and less than 0 (negative numbers).', function() {
          var $scope = {};
          
          $scope.balance = '0';

          return $scope.errorHidden = false, $scope.newHidden = true, $scope.totalHidden = true;

        });

    });
    
    describe('$scope.balance', function() {
        it('Test investment value with variable rate interest value.', function() {
          var $scope = {};
          
          $scope.balance = '2000';
          $scope.interest = '25';

          return $scope.balance/100 * $scope.interest + $scope.balance;


        });

    });

});

