'use strict';

angular.module('esApp.product.controllers')
  .controller('ProductAddCtrl', function ($scope, $route, $state, $stateParams, $location, ProductService) {
	
	$scope.sectionTitle = "Add New Product";
	var example = $scope; 
	$scope.selectedProduct = {productId:null, productName:'', productPrice:''};
		
	example.saveNewProduct = function(product){
		ProductService.saveNewProductDetails(product).then(example.getAllProducts,
			function(errResponse){
				console.error('Error while creating Product.');
	        }
		);
	};
	
	$scope.productFlags = {
		submitted: false
	};
	
	example.saveNewProductDetails = function(valid) {
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
            
			if(updatedProductDetails.productId == null) {
				example.saveNewProduct(updatedProductDetails);
			}
			
	        
	        $scope.editProduct = {};
	        example.productAddEditForm.$setPristine();
	        $location.path("/es.display.product");
	        $route.reload();
        }
	};
	
  });
