'use strict';

angular.module('esApp.services', []);
angular.module('esApp.factories', []);
angular.module('esApp.controllers', ['esApp.product.controllers']);
angular.module('esApp.product.controllers', ['ui.router']);

angular.module('esApp', [
 'esApp.services',
 'esApp.factories',
 'esApp.controllers',
 'ngResource',
 'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/es.display.product', {
		templateUrl: '/easystep/views/examples/spring/mvc/angularjs/products/example-product-display.html',
		controller: 'ProductCtrl'
	});
	$routeProvider.when('/product/:id', {
		controller: 'ProductGetCtrl',
		templateUrl: '/easystep/views/examples/spring/mvc/angularjs/products/example-product-edit.html'
    });
	$routeProvider.when('/edit', {
		templateUrl: '/easystep/views/examples/spring/mvc/angularjs/products/example-product-edit.html',
		controller: 'ProductEditCtrl',
	}).when('/es.add.product', {
		templateUrl: '/easystep/views/examples/spring/mvc/angularjs/products/example-product-edit.html',
		controller: 'ProductAddCtrl',
	}).otherwise({
		redirectTo: '/es.display.product'
	});
	
} ]);
