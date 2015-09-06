(function(angular) {

  InitialRun.$inject = ['CustomerSession']

  angular
    .module('rapid')
    .run(InitialRun);


  function InitialRun(session) {
    session.restore();
  }

})(angular);