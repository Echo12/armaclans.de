'use strict';

angular.module('clansApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

angular.module('clansApp').constant('CONFIG', {
	'clanDataUrl':'/clandata.json'
});
