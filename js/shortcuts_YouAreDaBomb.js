(function() {
  _.defaults(this, {
    Before: function(object, methodName, adviseMethod) {
      return YouAreDaBomb(object, methodName).before(adviseMethod);
    },
    BeforeAnyCallback: function(object, methodName, adviseMethod) {
      return YouAreDaBomb(object, methodName).beforeAnyCallback(adviseMethod);
    },
    After: function(object, methodName, adviseMethod) {
      return YouAreDaBomb(object, methodName).after(adviseMethod);
    },
    Around: function(object, methodName, adviseMethod) {
      return YouAreDaBomb(object, methodName).around(adviseMethod);
    }
  });
}).call(this);
