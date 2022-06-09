System.register("chunks:///_virtual/index.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,i,r,o;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,i=e._decorator,r=e.Vec3,o=e.Component}],execute:function(){var s;t._RF.push({},"a887bsTSfZL3IWe0QjGBlfg","index",void 0);var u=i.ccclass,c=(i.property,null),l=null,a=0,d=0;e("index",u("index")(s=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var i=t.prototype;return i.start=function(){["indexCanvas"].indexOf(this.node.name)>=0&&(c=this.node,l=c.getChildByName("roulette"))},i.turn=function(){d<360?(d++,a+=5,l.eulerAngles=new r(0,0,a),this.scheduleOnce((function(){this.turn()}),1e-5)):d=0},t}(o))||s);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./index.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});