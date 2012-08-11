var CitrusApp;

CitrusApp = (function() {

  function CitrusApp() {
    var glue, gui, storage, useCase;
    useCase = new CitrusUseCase();
    gui = new WebGui();
    storage = new InMemoryStorage();
    glue = new WebGlue(useCase, gui, storage);
    useCase.start();
  }

  return CitrusApp;

})();

new CitrusApp();
