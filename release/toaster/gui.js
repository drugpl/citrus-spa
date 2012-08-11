var WebGui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

WebGui = (function() {

  function WebGui() {
    this.appendToBuildConsoleLogs = __bind(this.appendToBuildConsoleLogs, this);

    this.showBuild = __bind(this.showBuild, this);

    this.showProject = __bind(this.showProject, this);

    this.hideProject = __bind(this.hideProject, this);

    this.hideOrganization = __bind(this.hideOrganization, this);

    this.showOrganization = __bind(this.showOrganization, this);

  }

  WebGui.prototype.showOrganization = function(organization) {
    var data, html, source, template;
    source = $("#organization-view-template").html();
    template = Handlebars.compile(source);
    data = {
      name: organization.name,
      projects: organization.projects.map(function(project) {
        return {
          name: project.name
        };
      })
    };
    html = template(data);
    $("#organization-view").html(html);
    return $("#organization-view").show();
  };

  WebGui.prototype.hideOrganization = function() {
    return $("#organization-view").hide();
  };

  WebGui.prototype.hideProject = function() {
    return $("#project-view").hide();
  };

  WebGui.prototype.showProject = function(project) {
    var data, html, source, template;
    source = $("#project-view-template").html();
    template = Handlebars.compile(source);
    data = {
      name: project.name,
      builds: project.builds.map(function(build) {
        return {
          id: build.id
        };
      })
    };
    html = template(data);
    $("#project-view").html(html);
    return $("#project-view").show();
  };

  WebGui.prototype.showBuild = function(build) {
    var data, html, source, template;
    source = $("#build-view-template").html();
    template = Handlebars.compile(source);
    data = {
      id: build.id,
      changeName: build.changeName
    };
    html = template(data);
    $("#build-view").html(html);
    return $("#build-view").show();
  };

  WebGui.prototype.appendToBuildConsoleLogs = function(consoleLogString) {
    return $("#console-logs").append(consoleLogString);
  };

  return WebGui;

})();
