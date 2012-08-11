class CitrusUseCase
  constructor: ->
    @organization = null
    @currentProject = null

  setInitialData: (@organization) =>

  start: =>
    @selectProject(@organization.projects[0])

  selectProject: (project) =>
    console.log("selecting project: #{project.name}")
    @currentProject = project


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

