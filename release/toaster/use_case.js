var Build, CitrusUseCase, Organization, Project,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

CitrusUseCase = (function() {

  function CitrusUseCase() {
    this.selectProject = __bind(this.selectProject, this);

    this.start = __bind(this.start, this);

    this.setInitialData = __bind(this.setInitialData, this);
    this.organization = null;
    this.currentProject = null;
  }

  CitrusUseCase.prototype.setInitialData = function(organization) {
    this.organization = organization;
  };

  CitrusUseCase.prototype.start = function() {
    return this.selectProject(this.organization.projects[0]);
  };

  CitrusUseCase.prototype.selectProject = function(project) {
    console.log("selecting project: " + project.name);
    return this.currentProject = project;
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
