class CitrusUseCase
  constructor: ->
    @projects = []

  setInitialData: (@organization) =>

  start: =>
    @currentProject = @projects[0]

class Organization
  constructor: (@name) ->
    @projects = []

  addProject: (name) =>
    project = new Project(name)
    @projects.push(project)
    return project
  
class Project
  constructor: (@name) ->
    @builds = []

  addBuild: (id, changeName) =>
    @builds.push(new Build(id, changeName))

class Build
  constructor: (@id, @changeName) ->

