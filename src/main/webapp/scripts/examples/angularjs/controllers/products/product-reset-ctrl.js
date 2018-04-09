'use strict';

angular.module('esApp.product.controllers')
  .controller('ProductResetCtrl', ['$scope', '$routeParams', '$state', '$stateParams', 'ProductService', 
    function ($scope, $routeParams, $state, $stateParams, ProductService) {
	  var example = $scope;
	
	  example.reset = function(){
		  example.selectedProduct = {productId:null, productName:'', productPrice:''};
		  example.productAddEditForm.$setPristine(); //reset Form
	  };
	  
}]);
