

angular.module('interestApp', [])


.controller('InterestCalculatorController', ['$scope', function($scope) {

    $scope.interestHidden = true;
    $scope.newHidden = true;
    $scope.totalHidden = true;
    $scope.errorHidden = true;

    $scope.calculateTotalBalance = function() {

        if($scope.balance >0 && $scope.balance <=1000)
            return $scope.errorHidden = true,
            $scope.newHidden = false,
            $scope.balance/100 * 1 + $scope.balance;

        else if ($scope.balance >1000 && $scope.balance < 5000)
            return $scope.errorHidden = true,
            $scope.newHidden = false,
            $scope.balance/100 * 2 + $scope.balance;

        else if ($scope.balance >= 5000)
            return $scope.errorHidden = true,
            $scope.newHidden = false,
            $scope.balance/100 * 3 + $scope.balance;

        else if ($scope.balance <= 0 )
            return $scope.errorHidden = false,
            $scope.newHidden = true,
            $scope.totalHidden = true;

        else
            return $scope.errorHidden = true,
            $scope.newHidden = true;

        if ($scope.balance <=0) return
    }

    // Update with new variable interest rate

    $scope.update = function() {
        $scope.calculateTotalBalance = function() {
            return $scope.balance/100 * $scope.interest + $scope.balance;
        }
    }

    // Reveal varibale interest rate form

    $scope.moreInterest = function() {
        $scope.interestHidden = false;
        $scope.newHidden = true;
    }

    // Show total once values have been entered

    $scope.filterValue = function($event){
        $scope.totalHidden = false;
    };

}])



