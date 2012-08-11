(function() {
  var Task, WebGlue, WebGui, WebTodoApp;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Task = (function() {
    function Task(content) {}
    return Task;
  })();
  WebTodoApp = (function() {
    function WebTodoApp() {
      var glue, gui, useCase;
      useCase = new CompleteTasksUseCase();
      gui = new WebGui();
      glue = new WebGlue(useCase, gui);
      useCase.start();
    }
    return WebTodoApp;
  })();
  WebGui = (function() {
    function WebGui() {
      this.showTasks = __bind(this.showTasks, this);;      console.log("gui");
      this.todoListElement = $("#todo-list");
    }
    WebGui.prototype.showTasks = function(tasks) {
      var newTodoTask, originalTodoTask, task, _i, _len;
      originalTodoTask = $("li.todo-task");
      for (_i = 0, _len = tasks.length; _i < _len; _i++) {
        task = tasks[_i];
        newTodoTask = originalTodoTask.clone();
        newTodoTask.find(".view label").html(todo.content);
        this.todoListElement.append(newTodoTask);
        originalTodoTask.hide();
      }
      return $("#main").show();
    };
    return WebGui;
  })();
  WebGlue = (function() {
    function WebGlue(useCase, gui) {
      this.useCase = useCase;
      this.gui = gui;
      this.hideTodos = __bind(this.hideTodos, this);;
      this.hideFooter = __bind(this.hideFooter, this);;
      this.showTasks = __bind(this.showTasks, this);;
      console.log("glue");
      Before(this.useCase, 'start', this.hideFooter);
      Before(this.useCase, 'start', this.hideTodos);
      After(this.useCase, 'start', this.showTasks);
    }
    WebGlue.prototype.showTasks = function() {
      console.log("show tasks");
      return this.gui.showTasks(this.useCase.todoTasks);
    };
    WebGlue.prototype.hideFooter = function() {
      console.log("hide footer");
      return $("#footer").hide();
    };
    WebGlue.prototype.hideTodos = function() {
      console.log("hide todos");
      return $("#main").hide();
    };
    return WebGlue;
  })();
  new WebTodoApp();
}).call(this);
