#<< shortcuts_YouAreDaBomb
#<< use_case
#<< gui
#<< web_glue


class CitrusApp
  constructor: ->
    useCase = new CitrusUseCase()
    gui = new WebGui()
    glue = new WebGlue(useCase, gui)
    useCase.start()

new CitrusApp()
