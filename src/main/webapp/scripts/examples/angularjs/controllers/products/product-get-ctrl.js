'use strict';

angular.module('esApp.product.controllers')
  .controller('ProductGetCtrl', ['$scope', '$routeParams', '$state', '$stateParams', 'ProductService', 
    function ($scope, $routeParams, $state, $stateParams, ProductService) {    
	
	$scope.sectionTitle = 'Update Existing Product';
	var example = $scope; 
	example.id = $routeParams.id;
	
	example.getProductById = function(id){
		ProductService.getProductDetailsById(id).then(
			function(dataResponse) {
				$scope.selectedProduct = dataResponse;
				$scope.editProduct = {
			    	productId: $scope.selectedProduct.productId,
			    	productName: $scope.selectedProduct.productName,
			    	productPrice: $scope.selectedProduct.productPrice
			    };
			},
			function(errResponse){
				console.error('Error while fetching Products');
			}
		);
	};
	example.getProductById(example.id);
	
}]);
