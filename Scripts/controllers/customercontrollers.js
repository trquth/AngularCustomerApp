app.controller('customersController', function(customersService) {
	this.customers = customersService.getCustomers();
	this.insertCustomer = function() {
		var first = this.firstName;
		var last = this.lastName;
		var city = this.city;
		customersService.insertCustomer(first, last, city);
		this.firstName = "";
		this.lastName = "";
		this.city = "";
	}
	this.deleteCustomer = function(id) {
		customersService.deleteCustomer(id);
	}
})