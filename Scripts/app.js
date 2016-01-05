var app = angular.module('customersApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/customers', {
			controller: 'customersController',
			templateUrl: '/Scripts/partials/customers.html'
		})
		.when('/customerorders/:customerId', {
			controller: 'customerOrderController',
			templateUrl: '/Scripts/partials/customerorders.html'
		})
		.when('/orders', {
			controller: 'ordersController',
			templateUrl: '/Scripts/partials/orders.html'
		})
		.otherwise({
			redirectTo: '/customers'
		});

});