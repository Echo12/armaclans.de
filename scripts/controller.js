'use strict';

angular.module('clansApp')
  .controller('IndexCtrl', function ($scope, $http, clanData, FilterData) {
    $scope.clandata = clanData;
    $scope.filterData = FilterData;

  })
  .controller('FilterListCtrl', function ($scope, FilterData) {
    $scope.filterData = FilterData;
    $scope.SetFilter= function(filter,index) {
      filter.selected = index;
    };
  })
  .filter('FilterListFilter', function(FilterData) {
    return function(input) {
      console.log("Filter:", input);
      var output = [];
      for (var j = 0; j < input.length; j++){
        var match = true;
        for (var i = 0; i < FilterData.filters.length; i++) {
          var filter = FilterData.filters[i];
          var ret = filter.options[filter.selected].filter(input[j]);
          if (!ret) { 
            match = false;
          }
        }
        if (match) {
          output.push(input[j]);
        }
      }
      return output;
    };
  });