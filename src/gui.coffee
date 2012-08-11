class WebGui
  constructor: ->

  showBuilds: (tasks) =>
    source = $("#item-template").html();
    template = Handlebars.compile(source)
    data = {tasks : tasks.map( (task) -> {id: task.id, content: task.content, completed: task.completed})}
    html = template(data)
    $("#todo-list").html(html)

    for task in tasks
      do (task) =>
        $("#destroy-task-#{task.id}").click( => @destroyClicked(task.id))
        $("#complete-task-button-#{task.id}").click( => @completeClicked(task.id))
        
