var WebGui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

WebGui = (function() {

  function WebGui() {
    this.showBuilds = __bind(this.showBuilds, this);

  }

  WebGui.prototype.showBuilds = function(tasks) {
    var data, html, source, task, template, _i, _len, _results,
      _this = this;
    source = $("#item-template").html();
    template = Handlebars.compile(source);
    data = {
      tasks: tasks.map(function(task) {
        return {
          id: task.id,
          content: task.content,
          completed: task.completed
        };
      })
    };
    html = template(data);
    $("#todo-list").html(html);
    _results = [];
    for (_i = 0, _len = tasks.length; _i < _len; _i++) {
      task = tasks[_i];
      _results.push((function(task) {
        $("#destroy-task-" + task.id).click(function() {
          return _this.destroyClicked(task.id);
        });
        return $("#complete-task-button-" + task.id).click(function() {
          return _this.completeClicked(task.id);
        });
      })(task));
    }
    return _results;
  };

  return WebGui;

})();
