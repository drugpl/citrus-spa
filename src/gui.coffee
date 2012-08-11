class WebGui
  constructor: ->

  showOrganization: (organization) =>
    source = $("#organization-view-template").html();
    template = Handlebars.compile(source)
    data = {name: organization.name, projects : organization.projects.map( (project) -> {name: project.name})}
    html = template(data)
    $("#organization-view").html(html)
    $("#organization-view").show()

    #for task in tasks
    #  do (task) =>
    #    $("#destroy-task-#{task.id}").click( => @destroyClicked(task.id))
    #    $("#complete-task-button-#{task.id}").click( => @completeClicked(task.id))
    #
  hideOrganization: => $("#organization-view").hide()
  hideProject: => $("#project-view").hide()
        

  showProject: (project) =>
    source = $("#project-view-template").html();
    template = Handlebars.compile(source)
    data = {name: project.name, builds : project.builds.map( (build) -> {id: build.id})}
    html = template(data)
    $("#project-view").html(html)
    $("#project-view").show()

  showBuild: (build) =>
    source = $("#build-view-template").html();
    template = Handlebars.compile(source)
    data = {id: build.id, changeName : build.changeName}
    html = template(data)
    $("#build-view").html(html)
    $("#build-view").show()

  appendToBuildConsoleLogs: (consoleLogString) =>
    $("#console-logs").append(consoleLogString)


