class WebGlue
  constructor: (@useCase, @gui, @storage)->
    Before(@useCase, 'start', @loadData)

  loadData: =>
    console.log("loading data")
