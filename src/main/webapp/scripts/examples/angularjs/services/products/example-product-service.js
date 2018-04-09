(function(angular) {
	'use strict';

	angular.module('esApp.services').service('ProductService', ['$http', '$q', function($http, $q){
		var example = this;
		var hostWithPort = 'http://localhost:8085';
		var baseURL = hostWithPort + '/easystep/exampleJdbcTemplate/jdbcTemplateAngular/product/';
		
		example.getAllProducts = function() {
			var deferred = $q.defer();
			return $http.get(baseURL).then(
				function(dataResponse){
					if (dataResponse.status == 200) {
						deferred.resolve(dataResponse.data);
					}
					return deferred.promise;
				}, 
				function(errResponse){
					console.error('Error while fetching products');
					return deferred.reject(errResponse);
				}
			);
		};

		example.getProductDetailsById = function(id) {
			var deferred = $q.defer();
			return $http.get(baseURL+id).then(
				function(response){
					if (response.status == 200) {
						deferred.resolve(response.data);
					}
					return deferred.promise;
				}, 
				function(errResponse){
					console.error('Error while fetching product');
					return deferred.reject(errResponse);
				}
			);
		};
  
		example.saveNewProductDetails = function(product){
			var deferred = $q.defer();
			return $http.post(baseURL, product).then(
				function(response){
					if (response.status == 201) {
						deferred.resolve(response.data);
					}
					return deferred.promise;
				}, 
				function(errResponse){
					console.error('Error while creating product');
					return deferred.reject(errResponse);
				}
			);
	    };
	    
	    example.saveExistingProductDetails = function(product){
	    	var deferred = $q.defer();
			return $http.put(baseURL+product.productId, product).then(
				function(response){
					if (response.status == 200) {
						deferred.resolve(response.data);
					}
					return deferred.promise;
				},
				function(errResponse){
					console.error('Error while updating product');
					return deferred.reject(errResponse);
				}
			);
		};
	    
	}]);

})(window.angular);
