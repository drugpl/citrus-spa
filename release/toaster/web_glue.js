var WebGlue,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

WebGlue = (function() {

  function WebGlue(useCase, gui, storage, streamingSource) {
    this.useCase = useCase;
    this.gui = gui;
    this.storage = storage;
    this.streamingSource = streamingSource;
    this.appendDataToBuildConsoleLogs = __bind(this.appendDataToBuildConsoleLogs, this);

    this.showBuild = __bind(this.showBuild, this);

    this.showProject = __bind(this.showProject, this);

    this.showOrganization = __bind(this.showOrganization, this);

    this.loadData = __bind(this.loadData, this);

    Before(this.useCase, 'start', this.loadData);
    After(this.useCase, 'setOrganization', this.showOrganization);
    After(this.useCase, 'selectProject', this.showProject);
    After(this.useCase, 'selectBuild', this.showBuild);
    After(this.streamingSource, 'newData', this.appendDataToBuildConsoleLogs);
  }

  WebGlue.prototype.loadData = function() {
    return this.useCase.setOrganization(this.storage.loadData());
  };

  WebGlue.prototype.showOrganization = function(organization) {
    return this.gui.showOrganization(organization);
  };

  WebGlue.prototype.showProject = function(project) {
    this.gui.hideOrganization();
    return this.gui.showProject(project);
  };

  WebGlue.prototype.showBuild = function(build) {
    this.gui.hideProject();
    return this.gui.showBuild(build);
  };

  WebGlue.prototype.appendDataToBuildConsoleLogs = function(string) {
    return this.gui.appendToBuildConsoleLogs(string);
  };

  return WebGlue;

})();
