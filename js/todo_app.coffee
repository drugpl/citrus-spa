class Task
  constructor: (content) ->

class WebTodoApp
  constructor: ->
    useCase = new CompleteTasksUseCase()
    gui = new WebGui()
    glue = new WebGlue(useCase, gui)
    useCase.start()

class WebGui
  constructor: ->
    console.log("gui")
    @todoListElement = $("#todo-list")

  showTasks: (tasks) =>
    originalTodoTask = $("li.todo-task")
    for task in tasks
      newTodoTask = originalTodoTask.clone()
      newTodoTask.find(".view label").html(todo.content)
      @todoListElement.append(newTodoTask)
      originalTodoTask.hide()
    $("#main").show()



class WebGlue
  constructor: (@useCase, @gui)->
    console.log("glue")
    Before(@useCase, 'start', @hideFooter)
    Before(@useCase, 'start', @hideTodos)
    After(@useCase,  'start', @showTasks)

  showTasks: =>
    console.log("show tasks")
    @gui.showTasks(@useCase.todoTasks)

  hideFooter: =>
    console.log("hide footer")
    $("#footer").hide()

  hideTodos: =>
    console.log("hide todos")
    $("#main").hide()


new WebTodoApp()
