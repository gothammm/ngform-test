(function(angular) {

  angular
    .module('rapid', [
      'ngMaterial',
      'rapid.modules.customer',
      'rapid.services'
    ]);

  /**
   * @name onLoad
   * @description
   * # Onload function fired on window.onload
   */

  function onAppLoad() {
    angular
      .element(document.querySelector('.rp-app-loading'))
      .remove();
  }

  window.onload = onAppLoad;

})(angular);  