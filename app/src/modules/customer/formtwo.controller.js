(function(angular) {


  FormTwoCtrl.$inject = ['$scope', '$location', 'CustomerSession', 'Utility'];

  angular
    .module('rapid.modules.customer')
    .controller('FormTwoCtrl', FormTwoCtrl);


  function FormTwoCtrl(scope, location, session, utility) {

    scope.reset = function() {
      init();
      scope.formTwo.$setPristine();
    }

    scope.next = function() {
      session.pushData(scope.two);
      location.path('/form/three');
    } 


    function init() {
      scope.two = {
        pan: '',
        income: '',
        companyName: '',
        designation: '',
        address: '',
        pin: ''
      };


      scope.designations = utility.getDesignation();
    }
    init();
    angular.extend(scope.two, session.getData());
  }

})(angular);