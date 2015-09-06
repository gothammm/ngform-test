(function(angular) {

  FormThreeCtrl.$inject = ['$scope', '$location', '$mdToast', 'CustomerSession', 'Utility'];

  angular
    .module('rapid.modules.customer')
    .controller('FormThreeCtrl', FormThreeCtrl);

  function FormThreeCtrl(scope, location, Toast, session, utility) {


    scope.reset = function() {
      init();
      scope.agree = false;
      scope.formThree.$setPristine();
    }

    scope.saveAndComplete = function() {
      scope.isSaving = true;
      session.pushData(scope.three);
      session
        .save()
        .then(function(data) {
          //Saved
          scope.isSaving = false;
          showToast('Saved customer details, successfully!');
          session.startNewSession();
          location.path('/');
        })
        .catch(function(err) {
          scope.isSaving = false;
          showToast('Unexpected error occurred, try again!');
        });
    } 

    function init() {
      scope.three = {
        actype: '',
        fixedDeposit: false,
        otherCC: false
      }
      scope.isSaving = false;
      scope.actypes = utility.getAcTypes();
      scope.agree = false;
    }

    function showToast(msg) {
      Toast.show(
        Toast.simple()
          .content(msg || '')
          .position('top right')
          .hideDelay(3000)
      );
    }

    init();
    angular.extend(scope.three, session.getData());
  }

})(angular);