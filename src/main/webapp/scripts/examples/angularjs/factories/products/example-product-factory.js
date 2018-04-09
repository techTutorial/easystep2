(function(angular) {
	'use strict';

	angular.module('esApp.factories').factory('ProductFactory', ['$http', '$q', function($http, $q){
		
		var hostWithPort = 'http://localhost:8085';
		var baseURL = hostWithPort + '/easystep/exampleJdbcTemplate/jdbcTemplateAngular/product/';
		
		return {
				    
			deleteProductById: function(id){
				var deferred = $q.defer();
				return $http.delete(baseURL+id).then(
					function(response){
						if (response.status == 204) {
							deferred.resolve(response.data);
						}
						return deferred.promise;
					}, 
					function(errResponse){
						console.error('Error while deleting product');
						return deferred.reject(errResponse);
					}
				);
			}

		};

	}]);

})(window.angular);
