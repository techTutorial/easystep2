'use strict';

angular.module('esApp.product.controllers')
  .controller('ProductEditCtrl', ['$scope', '$route', '$state', '$stateParams', '$location', 'ProductService', 
    function ($scope, $route, $state, $stateParams, $location, ProductService) {    
	
	var example = $scope; 
	$scope.selectedProduct = {productId:null, productName:'', productPrice:''};
		
	example.saveExistingProduct = function(product){
		ProductService.saveExistingProductDetails(product).then(example.getAllProducts, 
			function(errResponse){
				console.error('Error while updating Product.');
			}	
		);
	};
	
	$scope.productFlags = {
		submitted: false
	};
	
	example.saveExistingProductDetails = function(valid) {
        $scope.productFlags.submitted = true;
        if (valid) {
            var isUnchanged = _.isEqual($scope.editProduct.productName, $scope.selectedProduct.productName) &&
            _.isEqual($scope.editProduct.productPrice, $scope.selectedProduct.productPrice);
            if (isUnchanged) {
            	return;
            }
            var updatedProductDetails = {
            	productId: $scope.editProduct.productId,
            	productName: $scope.editProduct.productName,
            	productPrice: $scope.editProduct.productPrice
            };
            
			if(updatedProductDetails.productId != null) {
				example.saveExistingProduct(updatedProductDetails);
			}
			
			example.editProduct = {};
			example.productAddEditForm.$setPristine(); 
	        $location.path("/es.display.product");
	        $route.reload();
        }
	};
	
}]);
