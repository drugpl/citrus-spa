var InMemoryStorage,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

InMemoryStorage = (function() {

  function InMemoryStorage() {
    this.loadData = __bind(this.loadData, this);

  }

  InMemoryStorage.prototype.loadData = function() {
    var citrus, drug;
    drug = new Organization("DRUG");
    citrus = drug.addProject("Citrus");
    citrus.addBuild("Build 13", "[Shared] Game has awarded prizes via players not via prizes. Prizes can be deleted and game still has awarded prizes");
    return drug;
  };

  return InMemoryStorage;

})();
