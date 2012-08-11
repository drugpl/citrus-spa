class CitrusUseCase
  constructor: ->
    @organization = null
    @currentProject = null
    @currentBuild = null

  setOrganization: (@organization) =>

  start: =>
    @selectProject(@organization.projects[0])
    @selectBuild(@currentProject.builds[0])

  selectProject: (project) =>
    console.log("selecting project: #{project.name}")
    @currentProject = project

  selectBuild: (build) =>
    console.log("selecting build: #{build.id}")
    @currentBuild = build



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

