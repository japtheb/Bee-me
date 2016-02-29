(function() {
	'use strict';

	angular
		.module('frontend')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController(router){
		var vm = this;
		vm.login = login;

		function login(username, password){
			dataservice.login(function(error){
				if(!error){
					showHome();
				}else{
					showError();
				}
			});
		}

		function showHome(){
			router.go("home");
		}

		function showError(){
			vm.error = true;
		}
	
	}

})();