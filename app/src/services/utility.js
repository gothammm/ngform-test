(function(angular) {

  Utility.$inject = [];

  angular
    .module('rapid.services')
    .factory('Utility', Utility);


  function Utility() {

    function getCities() {
      return [{
        text: 'Select',
        value: ''
      }, {
        text: 'Mumbai',
        value: 'MUM'
      }, {
        text: 'Chennai',
        value: 'CHN'
      }, {
        text: 'Hyderabad',
        value: 'HYD'
      }, {
        text: 'Kolkata',
        value: 'KOL'
      }, {
        text: 'Pune',
        value: 'PUN'
      }, {
        text: 'Jaipur',
        value: 'JAP'
      }, {
        text: 'Manglore',
        value: 'MNG'
      }, {
        text: 'Banglore',
        value: 'BNG'
      }]
    }

    function getProfession() {
      return [{
        text: 'Select',
        value: ''
      },{
        text: 'Software Engineer',
        value: 'SE'
      }, {
        text: 'Marketing Manager',
        value: 'MM'
      }, {
        text: 'Senior HR',
        value: 'SHR'
      }, {
        text: 'Chemical Engineer',
        value: 'CE'
      }];
    }

    function getDesignation() {
      var designation = [{
        text: 'Select',
        value: ''
      }];
      for(var i = 0; i < 10; i++) {
        designation.push({
          text: 'Designation ' + (i + 1),
          value: 'DN' + (i + 1)
        });
      }
      return designation;
    }

    function getAcTypes() {
      return [{
        text: 'Select',
        value: ''
      }, {
        text: 'Type 1',
        value: 't1'
      }, {
        text: 'Type 2',
        value: 't2'
      }, {
        text: 'Type 3',
        value: 't3'
      }, {
        text: 'Type 4',
        value: 't4'
      }];
    }


    return {
      getCities: getCities,
      getProfession: getProfession,
      getDesignation: getDesignation,
      getAcTypes: getAcTypes
    }
  }

})(angular);