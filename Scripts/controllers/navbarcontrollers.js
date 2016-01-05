app.controller('navBarController', function($location) {
	this.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return true;
		} else {
			return false;
		};
	}
})