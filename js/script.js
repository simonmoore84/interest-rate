

angular.module('interestApp', [])


.controller('InterestCalculatorController', ['$scope', function($scope) {

    $scope.interestHidden = true;
    $scope.newHidden = true;
    $scope.totalHidden = false;
    $scope.varHidden = false;

    $scope.calculateTotalBalance = function() {

        if($scope.balance >0 && $scope.balance <1000)
            return $scope.newHidden = false,
            $scope.balance/100 * 1 + $scope.balance;

        else if ($scope.balance >= 1000 && $scope.balance < 5000)
            return $scope.newHidden = false,
            $scope.balance/100 * 2 + $scope.balance;

        else if ($scope.balance >= 5000)
            return $scope.newHidden = false,
            $scope.balance/100 * 3 + $scope.balance;

        else if (angular.isUndefined($scope.allowSomething))
            $scope.totalHidden = true;
        
        else if ($scope.balance == 0 )
            return $scope.newHidden = true,
            $scope.totalHidden = false;
            
        else
            return $scope.newHidden = true;
            $scope.totalHidden = false;
    }

    
    // Update with new variable interest rate

    $scope.calculateVariableTotalBalance = function() {

        if ($scope.interest > 0 )
            return $scope.balance/100 * $scope.interest + $scope.balance;
        
        else if (angular.isUndefined($scope.allowSomething))
            $scope.varHidden = false;
        
        else if ($scope.interest == 0 )
            return $scope.varHidden = true;

        else
            return $scope.varHidden = false;
    }
    
 
    // Reveal variable interest rate form

    $scope.moreInterest = function() {
        $scope.interestHidden = false;
    }
    
    // Prevent Negative and string based characters being entered into the number field (Safari issue)
    
    $scope.filterValue = function($event){
        
        if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
            
            $scope.totalHidden = false;
            $scope.varHidden = false;
        }
    };

}])



