(function (root) {
  // limitPct: max allowed absence as % of total sessions (commonly 25%)
  function status(c, limitPct) {
    var total = +c.total || 0, abs = +c.absent || 0;
    var maxAbs = Math.floor(total * limitPct / 100);
    var left = maxAbs - abs;
    var pct = total ? abs / total * 100 : 0;
    var state = left < 0 ? 'out' : (left === 0 ? 'edge' : (left <= Math.max(1, Math.round(maxAbs * 0.25)) ? 'warn' : 'ok'));
    return { maxAbs: maxAbs, left: left, pct: Math.round(pct * 10) / 10, state: state };
  }
  var api = { status: status };
  if (typeof module !== 'undefined') module.exports = api; else root.Absentia = api;
})(this);
