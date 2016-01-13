

angular.module('interestApp', [])


.controller('InterestCalculatorController', ['$scope', function($scope) {

    $scope.interestHidden = true;
    $scope.newHidden = true;
    $scope.totalHidden = true;
    $scope.varHidden = true;
    $scope.errorHidden = true;

    $scope.calculateTotalBalance = function() {

        if($scope.balance >0 && $scope.balance <1000)
            return $scope.errorHidden = true,
            $scope.newHidden = false,
            $scope.balance/100 * 1 + $scope.balance;

        else if ($scope.balance >= 1000 && $scope.balance < 5000)
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

    }

    // Update with new variable interest rate

    $scope.calculateVariableTotalBalance = function() {

        if ($scope.interest > 0 )
            return $scope.balance/100 * $scope.interest + $scope.balance;

        else if ($scope.interest <= 0)
            return $scope.errorHidden = false,
            $scope.varHidden = true;

        else
            $scope.varHidden = true;

    }

    // Reveal varibale interest rate form

    $scope.moreInterest = function() {
        $scope.interestHidden = false;
    }

    // Show total once values have been entered

    $scope.filterValue = function($event){
        $scope.totalHidden = false;
        $scope.varHidden = false;
    };

}])



