'use strict';

angular.module('clansApp')
.service('clandata', function($http, $q, $rootScope, $location, CONFIG){
  this.Fetch = function() {
    var deferred = $q.defer();
    $http.get(CONFIG.clanDataUrl).success(function (data) {
      console.log('Data successful');
      deferred.resolve(data);
    }).error(function(data, status, headers, config) {
      console.log('Ping not successful');
      deferred.reject(data.error);
    });
    return deferred.promise;
  };

})
.factory('FilterData', function() {
  var filterData = {
    filters:[],
    search: ""
  };
  filterData.filters.push({
    title: "Auf Mitgliedersuche",
    options: [{
      text: "Egal",
      filter: function(data) {return true;}
    },{
      text: "Ja",
      filter: function(data) {return data.join;}
    },{
      text: "Nein",
      filter: function(data) {return !data.join;}
    }],
    selected: 0
  });

  filterData.filters.push({
    title: "Akzeptiert Gastspieler",
    options: [{
      text: "Egal",
      filter: function(data) {return true;}
    },{
      text: "Ja",
      filter: function(data) {return data.guests;}
    },{
      text: "Nein",
      filter: function(data) {return !data.guests;}
    }],
    selected: 0
  });

  filterData.filters.push({
    title: "Alter",
    options: [{
      text: "Egal",
      filter: function(data) {return true;}
    },{
      text: "< 1 Jahr (Frisch)",
      filter: function(data) {return data.since == 2014;}
    },{
      text: "> 1 Jahre",
      filter: function(data) {return data.since <= 2013;}
    },{
      text: "> 2 Jahr",
      filter: function(data) {return data.since <= 2012;}
    },{
      text: "> 4 Jahr",
      filter: function(data) {return data.since <= 2010;}
    }],
    selected: 0
  });

  filterData.filters.push({
    title: "Eigene Server",
    options: [{
      text: "Egal",
      filter: function(data) {return true;}
    },{
      text: "Ja",
      filter: function(data) {return data.ownserver;}
    },{
      text: "Nein",
      filter: function(data) {return !data.ownserver;}
    }],
    selected: 0
  });

  filterData.filters.push({
    title: "Regulaere Events",
    options: [{
      text: "Egal",
      filter: function(data) {return true;}
    },{
      text: "Ja",
      filter: function(data) {return data.regularevents;}
    },{
      text: "Nein",
      filter: function(data) {return !data.regularevents;}
    }],
    selected: 0
  });
  return filterData;

});