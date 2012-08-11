var WebGlue,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

WebGlue = (function() {

  function WebGlue(useCase, gui, storage) {
    this.useCase = useCase;
    this.gui = gui;
    this.storage = storage;
    this.loadData = __bind(this.loadData, this);

    Before(this.useCase, 'start', this.loadData);
  }

  WebGlue.prototype.loadData = function() {
    return this.useCase.setInitialData(this.storage.loadData());
  };

  return WebGlue;

})();
