#<< shortcuts_YouAreDaBomb
#<< use_case
#<< gui
#<< web_glue
#<< in_memory_storage
#<< in_memory_streaming_source


class CitrusApp
  constructor: ->
    useCase = new CitrusUseCase()
    gui = new WebGui()
    storage = new InMemoryStorage()
    streamingSource = new InMemoryStreamingSource()
    streamingSource.startStreaming()
    glue = new WebGlue(useCase, gui, storage, streamingSource)
    useCase.start()

new CitrusApp()
