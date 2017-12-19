/*!
 * Name: ffshelf
 * Version: 1.0.0
 * Author: FloatFlower.Huang
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.FFShelf = factory());
}(this, (function () { 'use strict';

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "@import url(\"https://fonts.googleapis.com/css?family=Titillium+Web\"); .ffshelf__ff-shelf { font-family: 'Titillium Web', sans-serif; } .ffshelf__ff-shelf .ffshelf__dialog-frame { width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); position: fixed; } .ffshelf__ff-shelf .ffshelf__dialog { width: 960px; height: 600px; background: #fff; padding: 0px; border: none; margin: -300px 0 0 -480px; top: 50%; left: 50%; position: fixed; box-sizing: border-box; border-radius: 3px; z-index: 999; overflow: hidden; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-drawer { width: 300px; height: 100%; position: absolute; left: 0; top: 0; box-shadow: 0 1px 5px #ccc; box-sizing: border-box; z-index: 1002; background-color: #fff; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-gallery { width: 660px; height: 100%; position: absolute; left: 300px; z-index: 1000; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-header { position: absolute; text-align: center; width: 960px; padding: 12px; box-sizing: border-box; box-shadow: 1px 0 5px #ccc; z-index: 1003; font-size: 16px; background-color: #fff; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close { position: absolute; right: 0; top: 0; margin: 10px 15px; color: #aaa; z-index: 1004; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close i { font-size: 12px; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close:hover { color: #333; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ffshelf$2 = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm._m(0);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf__ff-shelf" }, [_c('div', { staticClass: "ffshelf__dialog-frame" }), _vm._v(" "), _c('div', { staticClass: "ffshelf__dialog" }, [_c('div', { staticClass: "ffshelf__dialog-drawer" }), _vm._v(" "), _c('div', { staticClass: "ffshelf__dialog-header" }, [_vm._v(" Hello ")]), _vm._v(" "), _c('div', { staticClass: "ffshelf__dialog-gallery" }), _vm._v(" "), _c('div', { staticClass: "ffshelf__dialog-close" }, [_c('i', { staticClass: "fa fa-times", attrs: { "aria-hidden": "true" } })])])]);
  }], cssModules: { "ffShelf": "ffshelf__ff-shelf", "ff-shelf": "ffshelf__ff-shelf", "dialogFrame": "ffshelf__dialog-frame", "dialog-frame": "ffshelf__dialog-frame", "dialog": "ffshelf__dialog", "dialogDrawer": "ffshelf__dialog-drawer", "dialog-drawer": "ffshelf__dialog-drawer", "dialogGallery": "ffshelf__dialog-gallery", "dialog-gallery": "ffshelf__dialog-gallery", "dialogHeader": "ffshelf__dialog-header", "dialog-header": "ffshelf__dialog-header", "dialogClose": "ffshelf__dialog-close", "dialog-close": "ffshelf__dialog-close" }

};

var ffshelf$3 = Object.freeze({
	default: ffshelf$2
});

var require$$0 = ( ffshelf$3 && ffshelf$2 ) || ffshelf$3;

var ffshelf = require$$0;

return ffshelf;

})));
//# sourceMappingURL=ffshelf.js.map
