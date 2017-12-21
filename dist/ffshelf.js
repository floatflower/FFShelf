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
        css = " /*# sourceMappingURL=ffshelf-cover.vue.map */";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var cover = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "component" });
  }, staticRenderFns: []

};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = ".ffshelf-dialog__dialog { width: 100px; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var dialog = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf-dialog__dialog" }, [_vm._v(" " + _vm._s(_vm.test) + " ")]);
    }, staticRenderFns: [], cssModules: { "dialog": "ffshelf-dialog__dialog" },
    data: function () {
        return {
            test: "Hello"
        };
    }
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = "@import url(\"https://fonts.googleapis.com/css?family=Titillium+Web\"); .ffshelf__ff-shelf { font-family: 'Titillium Web', sans-serif; } .ffshelf__ff-shelf .ffshelf__dialog-frame { width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); position: fixed; } .ffshelf__ff-shelf .ffshelf__dialog { width: 960px; height: 600px; background: #fff; padding: 0px; border: none; margin: -300px 0 0 -480px; top: 50%; left: 50%; position: fixed; box-sizing: border-box; border-radius: 3px; z-index: 999; overflow: hidden; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close { position: absolute; right: 0; top: 0; margin: 10px 15px; color: #aaa; z-index: 1004; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close i { font-size: 12px; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close:hover { color: #333; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var ffshelf$2 = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf" }, [_c('cover'), _vm._v(" "), _c('dialog')], 1);
    }, staticRenderFns: [], cssModules: { "ffShelf": "ffshelf__ff-shelf", "ff-shelf": "ffshelf__ff-shelf", "dialogFrame": "ffshelf__dialog-frame", "dialog-frame": "ffshelf__dialog-frame", "dialog": "ffshelf__dialog", "dialogClose": "ffshelf__dialog-close", "dialog-close": "ffshelf__dialog-close" },
    components: {
        'dialog': dialog,
        'cover': cover

    },
    methods: {}
};

var ffshelf$3 = Object.freeze({
	default: ffshelf$2
});

var require$$0 = ( ffshelf$3 && ffshelf$2 ) || ffshelf$3;

var ffshelf = require$$0;

return ffshelf;

})));
//# sourceMappingURL=ffshelf.js.map
