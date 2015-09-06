(function(angular) {


  FormOneCtrl.$inject = ['$scope', '$location', 'Utility', 'CustomerSession'];

  angular
    .module('rapid.modules.customer')
    .controller('FormOneCtrl', FormOneCtrl);

  function FormOneCtrl(scope, location, Utility, session) {

    scope.reset = function() {
      init();
      scope.formOne.$setPristine();
    }

    scope.next = function() {
      session.pushData(scope.one);
      location.path('/form/two');
    } 

    function init() {
      scope.one = {
        firstName: '',
        lastName: '',
        age: '',
        mobile: '',
        city: '',
        profession: ''
      };


      scope.cities = Utility.getCities();
      scope.professions = Utility.getProfession();
    }

    init();
    angular.extend(scope.one, session.getData());
  }

})(angular);
