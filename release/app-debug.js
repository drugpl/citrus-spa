var __t;

__t = function(ns) {
  var curr, index, part, parts, _i, _len;
  curr = null;
  parts = [].concat = ns.split(".");
  for (index = _i = 0, _len = parts.length; _i < _len; index = ++_i) {
    part = parts[index];
    if (curr === null) {
      curr = eval(part);
      continue;
    } else {
      if (curr[part] == null) {
        curr = curr[part] = {};
      } else {
        curr = curr[part];
      }
    }
  }
  return curr;
};


document.write('<scri'+'pt src="/Users/andrzej/apps/citrus-spa/release/toaster/shortcuts_YouAreDaBomb.js"></scr'+'ipt>')
document.write('<scri'+'pt src="/Users/andrzej/apps/citrus-spa/release/toaster/use_case.js"></scr'+'ipt>')
document.write('<scri'+'pt src="/Users/andrzej/apps/citrus-spa/release/toaster/gui.js"></scr'+'ipt>')
document.write('<scri'+'pt src="/Users/andrzej/apps/citrus-spa/release/toaster/web_glue.js"></scr'+'ipt>')
document.write('<scri'+'pt src="/Users/andrzej/apps/citrus-spa/release/toaster/in_memory_storage.js"></scr'+'ipt>')
document.write('<scri'+'pt src="/Users/andrzej/apps/citrus-spa/release/toaster/in_memory_streaming_source.js"></scr'+'ipt>')
document.write('<scri'+'pt src="/Users/andrzej/apps/citrus-spa/release/toaster/citrus_app.js"></scr'+'ipt>')