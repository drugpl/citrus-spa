#<< shortcuts_YouAreDaBomb
#<< use_case
#<< gui
#<< web_glue
#<< in_memory_storage


class CitrusApp
  constructor: ->
    useCase = new CitrusUseCase()
    gui = new WebGui()
    storage = new InMemoryStorage()
    glue = new WebGlue(useCase, gui, storage)
    useCase.start()

new CitrusApp()
