(function(angular) {

  CustomerSession.$inject = ['$q'];

  angular
    .module('rapid.services')
    .service('CustomerSession', CustomerSession);


  function CustomerSession(q) {


    //Initializing Parse
    Parse.initialize("wSgDWsIKgoWmnTaQRM69lhxOdPRIszlIBGhss7yu", "eyOI6R7Way2QGl2FHferl21ErlgY9wcspV3ZP3HZ");

    var Customer = Parse.Object.extend('Customer');

    function getFromLocalStorage() {
      var storeItem = localStorage.getItem('rapid.customer');
      if(storeItem) {
        return JSON.parse(storeItem);
      }
      return null;
    }

    this.data = null;

    this.startNewSession = function() {
      this.data = {};
      localStorage.setItem('rapid.customer', JSON.stringify(this.data));
    }

    this.reset = function() {
      this.data = null;
      localStorage.removeItem('rapid.customer');
    }

    this.pushData = function(obj) {
      if(!obj) return false;
      angular.extend(this.data, obj);
      localStorage.setItem('rapid.customer', JSON.stringify(this.data));
    }

    this.getData = function() {
      return getFromLocalStorage() || this.data;
    }

    this.restore = function() {
      var data = this.getData();
      this.data = data || {};
    }

    this.save = function() {
      var customer = new Customer();
      var deferred = q.defer();
      customer.save(this.data, {
        success: function(customer) {
          deferred.resolve(customer);
        },
        error: function(customer, error) {
          console.log(error);
          deferred.reject(error);
        }
      });
      return deferred.promise;
    }
  }
})(angular);