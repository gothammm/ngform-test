(function(angular) {


  Configure.$inject = ['$routeProvider'];

  angular
    .module('rapid.modules.customer')
    .config(Configure)

  function Configure(route) {
    route
      .when('/', {
        controller: 'CustomerController',
        templateUrl: 'views/customer/main.html'
      })
      .when('/form/one', {
        controller: 'FormOneCtrl',
        templateUrl: 'views/customer/form.one.html'
      })
      .when('/form/two', {
        controller: 'FormTwoCtrl',
        templateUrl: 'views/customer/form.two.html'
      })
      .when('/form/three', {
        controller: 'FormThreeCtrl',
        templateUrl: 'views/customer/form.three.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})(angular);