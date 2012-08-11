var CitrusApp;

CitrusApp = (function() {

  function CitrusApp() {
    var glue, gui, storage, streamingSource, useCase;
    useCase = new CitrusUseCase();
    gui = new WebGui();
    storage = new InMemoryStorage();
    streamingSource = new InMemoryStreamingSource();
    streamingSource.startStreaming();
    glue = new WebGlue(useCase, gui, storage, streamingSource);
    useCase.start();
  }

  return CitrusApp;

})();

new CitrusApp();
