'use strict';

angular.module('esApp.product.controllers')
  .controller('ProductDeleteCtrl', ['$scope', '$route', '$state', '$rootScope', 'ProductFactory',
      function($scope, $route, $state, $rootScope, ProductFactory) {
	  
		var example = $scope; 
	  
		example.deleteProduct = function(id){
			ProductFactory.deleteProductById(id).then(example.getAllProducts, 
				function(errResponse){
					console.error('Error while deleting Product.');
				}
			);
		};
		
		example.removeProductById = function(id){
		    example.deleteProduct(id);
		    //$state.reload();
		    $route.reload();
		};
	  
  }]);
