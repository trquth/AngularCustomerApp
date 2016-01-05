app.controller('customerOrderController', function($scope, $routeParams, customersService) {
	$scope.customer = {};
	$scope.ordersTotal = 0;
	var id = ($routeParams.customerId) ? parseInt($routeParams.customerId) : 0;
	if (id > 0) {
		$scope.customer = customersService.getCustomer(id);
	};

})