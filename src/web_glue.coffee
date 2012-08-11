class WebGlue
  constructor: (@useCase, @gui, @storage)->
    Before(@useCase, 'start', @loadData)

  loadData: =>
    @useCase.setInitialData(@storage.loadData())
