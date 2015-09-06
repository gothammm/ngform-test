(function(angular) {

  CustomerCtrl.$inject = ['$scope', '$location', 'CustomerSession'];

  angular
    .module('rapid.modules.customer')
    .controller('CustomerController', CustomerCtrl);


  function CustomerCtrl(scope, location, session) {

    /**
     * Scope level methods
     */
    scope.startSession = function() {
      session.startNewSession();
      location.path('/form/one');
    }
  }

})(angular);