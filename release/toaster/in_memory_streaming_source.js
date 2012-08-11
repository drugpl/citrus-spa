var InMemoryStreamingSource,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

InMemoryStreamingSource = (function() {

  function InMemoryStreamingSource() {
    this.newData = __bind(this.newData, this);

    this.startStreaming = __bind(this.startStreaming, this);

  }

  InMemoryStreamingSource.prototype.startStreaming = function() {
    var _this = this;
    console.log("started streaming");
    clearInterval();
    return setInterval((function() {
      return _this.newData("" + (new Date().toLocaleTimeString()) + "\n");
    }), 1000);
  };

  InMemoryStreamingSource.prototype.newData = function(string) {
    return console.log("new data received: " + string);
  };

  return InMemoryStreamingSource;

})();
