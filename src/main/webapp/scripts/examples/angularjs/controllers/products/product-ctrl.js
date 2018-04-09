'use strict';

angular.module('esApp.product.controllers')
  .controller('ProductCtrl', ['$scope', '$state', '$stateParams', 'ProductService', 
    function ($scope, $state, $stateParams, ProductService) {    
	
	$scope.sectionTitle = 'List of Products';
	var example = $scope;
	
	
	example.getAllProducts = function(){
		ProductService.getAllProducts().then(
			function(dataResponse) {
				$scope.products = dataResponse;
			},
			function(errResponse){
				console.error('Error while fetching Products');
			}
		);
	};
	
	example.getAllProducts();
	
}]);
