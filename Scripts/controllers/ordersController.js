app.controller('ordersController', function($scope, customersService) {
	$scope.customers = customersService.getCustomers();
})