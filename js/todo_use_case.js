(function() {
  var CompleteTasksUseCase;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  CompleteTasksUseCase = (function() {
    function CompleteTasksUseCase() {
      this.start = __bind(this.start, this);;      console.log("use case");
      this.todoTasks = [new Task("use css to hide things at the start"), new Task("display tasks at the start")];
    }
    CompleteTasksUseCase.prototype.start = function() {
      return console.log("review existing tasks");
    };
    return CompleteTasksUseCase;
  })();
}).call(this);
