var CitrusApp;

CitrusApp = (function() {

  function CitrusApp() {
    var glue, gui, useCase;
    useCase = new CitrusUseCase();
    gui = new WebGui();
    glue = new WebGlue(useCase, gui);
    useCase.start();
  }

  return CitrusApp;

})();

new CitrusApp();
