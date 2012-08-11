class WebGlue
  constructor: (@useCase, @gui, @storage, @streamingSource)->
    Before(@useCase, 'start', @loadData)
    After(@useCase, 'setOrganization', @showOrganization)
    After(@useCase, 'selectProject', @showProject)
    After(@useCase, 'selectBuild', @showBuild)
    After(@streamingSource, 'newData', @appendDataToBuildConsoleLogs)

  loadData: =>
    @useCase.setOrganization(@storage.loadData())

  showOrganization: (organization) =>
    @gui.showOrganization(organization)

  showProject: (project) =>
    @gui.hideOrganization()
    @gui.showProject(project)
    
  showBuild: (build) =>
    @gui.hideProject()
    @gui.showBuild(build)

  appendDataToBuildConsoleLogs: (string) =>
    @gui.appendToBuildConsoleLogs(string)
