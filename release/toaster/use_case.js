var Build, CitrusUseCase, Organization, Project,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

CitrusUseCase = (function() {

  function CitrusUseCase() {
    this.start = __bind(this.start, this);

    this.setInitialData = __bind(this.setInitialData, this);
    this.projects = [];
  }

  CitrusUseCase.prototype.setInitialData = function(organization) {
    this.organization = organization;
  };

  CitrusUseCase.prototype.start = function() {
    return this.currentProject = this.projects[0];
  };

  return CitrusUseCase;

})();

Organization = (function() {

  function Organization(name) {
    this.name = name;
    this.addProject = __bind(this.addProject, this);

    this.projects = [];
  }

  Organization.prototype.addProject = function(name) {
    var project;
    project = new Project(name);
    this.projects.push(project);
    return project;
  };

  return Organization;

})();

Project = (function() {

  function Project(name) {
    this.name = name;
    this.addBuild = __bind(this.addBuild, this);

    this.builds = [];
  }

  Project.prototype.addBuild = function(id, changeName) {
    return this.builds.push(new Build(id, changeName));
  };

  return Project;

})();

Build = (function() {

  function Build(id, changeName) {
    this.id = id;
    this.changeName = changeName;
  }

  return Build;

})();
