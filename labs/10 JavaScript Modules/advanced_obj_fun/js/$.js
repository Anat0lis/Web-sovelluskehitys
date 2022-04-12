(function () {
  'use strict';
  function $($){
    this.$=$;
  }
  $.prototype.id = function(id){
    return document.getElementById(id);
  }

})();