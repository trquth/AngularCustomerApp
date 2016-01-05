app.controller('orderChildController', function($scope) {
	$scope.orderby = 'product';
	$scope.reverse = false;
	$scope.ordersTotal = 0.00;
	if ($scope.customer && $scope.customer.orders) {
		var total = 0.00;
		for (var i = 0; i < $scope.customer.orders.length; i++) {
			total += $scope.customer.orders[i].orderTotal;
		};
		$scope.ordersTotal = total;
	}
	$scope.setOrder = function(orderby) {
		if (orderby === $scope.orderby) {
			$scope.reverse = !$scope.reverse;
		};
		$scope.orderby = orderby;
	}
})