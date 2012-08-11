class CompleteTasksUseCase
  constructor: ->
    console.log("use case")
    @todoTasks = [
      new Task("use css to hide things at the start"),
      new Task("display tasks at the start"),
    ]

  start: =>
    console.log("review existing tasks")



