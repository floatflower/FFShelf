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
            css = ".ffshelf-cover__ffshelf-cover { width: 100%; height: 100%; position: fixed; background-color: rgba(0, 0, 0, 0.7); z-index: 999; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var cover = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf-cover__ffshelf-cover", on: { "click": _vm.onClick } });
    }, staticRenderFns: [], cssModules: { "ffshelfCover": "ffshelf-cover__ffshelf-cover", "ffshelf-cover": "ffshelf-cover__ffshelf-cover" },
    methods: {
        onClick: function () {
            this.$emit('click');
        }
    }
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = ".ffshelf-category-item__ffshelf-category-item { width: 200px; float: left; padding: 10px; box-sizing: border-box; border-radius: 3px; transition: background-color 0.5s; overflow: hidden; } .ffshelf-category-item__ffshelf-category-item:hover { background-color: #ECEFF1; } .ffshelf-category-item__ffshelf-category-item i { font-size: 14px; margin-right: 6px; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var item = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf-category-item__ffshelf-category-item", on: { "click": _vm.onClick } }, [_vm.icon ? _c('i', { class: _vm.icon }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
    }, staticRenderFns: [], cssModules: { "ffshelfCategoryItem": "ffshelf-category-item__ffshelf-category-item", "ffshelf-category-item": "ffshelf-category-item__ffshelf-category-item" },
    data: function () {
        return {
            icon: ''
        };
    },
    props: ["category"],
    mounted: function () {
        if (this.category.icon) {
            this.icon = this.category.icon;
        }
    },
    methods: {
        onClick: function () {
            this.$emit('click', this.category);
        }
    }
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = ".ffshelf-category__ffshelf-category { width: 240px; height: 583px; position: absolute; top: 0; left: 0; border-right: 1px solid #e6e6e6; padding: 20px; overflow-x: hidden; overflow-y: auto; box-sizing: border-box; /* Track */ /* Handle */ /* Handle on hover */ } .ffshelf-category__ffshelf-category::-webkit-scrollbar { width: 4px; } .ffshelf-category__ffshelf-category::-webkit-scrollbar-track { background-color: transparent; } .ffshelf-category__ffshelf-category::-webkit-scrollbar-thumb { background: #CFD8DC; border-radius: 1px; } .ffshelf-category__ffshelf-category::-webkit-scrollbar-thumb:hover { background: #94a8b1; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var category = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf-category__ffshelf-category" }, _vm._l(_vm.categories, function (category) {
            return _c('item', { attrs: { "category": category }, on: { "click": _vm.onItemClick } }, [_vm._v(_vm._s(category.name))]);
        }));
    }, staticRenderFns: [], cssModules: { "ffshelfCategory": "ffshelf-category__ffshelf-category", "ffshelf-category": "ffshelf-category__ffshelf-category" },
    data: function () {
        return {
            categories: []
        };
    },
    components: {
        'item': item
    },
    mounted: function () {
        this.categories.push({ name: "category1", id: "category_12372491123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category2", id: "category_12373391123", icon: "fa fa-paper-plane" });
        this.categories.push({ name: "category3", id: "category_12371391123", icon: "fa fa fa-bell" });
        this.categories.push({ name: "category4", id: "category_12371291123", icon: "fa fa fa-bug" });
        this.categories.push({ name: "category5", id: "category_12372191123", icon: "fa fa-cog" });
        this.categories.push({ name: "category6", id: "category_12372123423", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category7", id: "category_12372442423", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category8", id: "category_12372491413", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category9", id: "category_12372411213", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category10", id: "category_12372492123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category11", id: "category_12372121123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category12", id: "category_12334491123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category13", id: "category_12351491123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category14", id: "category_12124491123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category15", id: "category_12352491123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category16", id: "category_12352411123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category17", id: "category_12352721123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category18", id: "category_12312311123", icon: "fa fa-file-image-o" });
        this.categories.push({ name: "category19", id: "category_12123411123", icon: "fa fa-file-image-o" });
    },
    methods: {
        onItemClick: function (category) {
            console.log(category);
        }
    }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var icon_document = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { staticStyle: { "enable-background": "new 0 0 56 56" }, attrs: { "version": "1.1", "id": "Capa_1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "x": "0px", "y": "0px", "viewBox": "0 0 56 56", "xml:space": "preserve" } }, [_c('g', [_c('path', { staticStyle: { "fill": "#E9E9E0" }, attrs: { "d": "M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074\n\t\tc0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z" } }), _vm._v(" "), _c('polygon', { staticStyle: { "fill": "#D9D7CA" }, attrs: { "points": "37.5,0.151 37.5,12 49.349,12 \t" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M18.5,13h-6c-0.552,0-1-0.448-1-1s0.448-1,1-1h6c0.552,0,1,0.448,1,1S19.052,13,18.5,13z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M21.5,18h-9c-0.552,0-1-0.448-1-1s0.448-1,1-1h9c0.552,0,1,0.448,1,1S22.052,18,21.5,18z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M25.5,18c-0.26,0-0.52-0.11-0.71-0.29c-0.18-0.19-0.29-0.45-0.29-0.71c0-0.26,0.11-0.52,0.29-0.71\n\t\tc0.37-0.37,1.05-0.37,1.42,0c0.18,0.19,0.29,0.45,0.29,0.71c0,0.26-0.11,0.52-0.29,0.71C26.02,17.89,25.76,18,25.5,18z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M37.5,18h-8c-0.552,0-1-0.448-1-1s0.448-1,1-1h8c0.552,0,1,0.448,1,1S38.052,18,37.5,18z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M12.5,33c-0.26,0-0.52-0.11-0.71-0.29c-0.18-0.19-0.29-0.45-0.29-0.71c0-0.26,0.11-0.52,0.29-0.71\n\t\tc0.37-0.37,1.05-0.37,1.42,0c0.18,0.19,0.29,0.44,0.29,0.71c0,0.26-0.11,0.52-0.29,0.71C13.02,32.89,12.76,33,12.5,33z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M24.5,33h-8c-0.552,0-1-0.448-1-1s0.448-1,1-1h8c0.552,0,1,0.448,1,1S25.052,33,24.5,33z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M43.5,18h-2c-0.552,0-1-0.448-1-1s0.448-1,1-1h2c0.552,0,1,0.448,1,1S44.052,18,43.5,18z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M34.5,23h-22c-0.552,0-1-0.448-1-1s0.448-1,1-1h22c0.552,0,1,0.448,1,1S35.052,23,34.5,23z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M43.5,23h-6c-0.552,0-1-0.448-1-1s0.448-1,1-1h6c0.552,0,1,0.448,1,1S44.052,23,43.5,23z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M16.5,28h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4c0.552,0,1,0.448,1,1S17.052,28,16.5,28z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M30.5,28h-10c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.552,0,1,0.448,1,1S31.052,28,30.5,28z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#8697CB" }, attrs: { "d": "M43.5,28h-9c-0.552,0-1-0.448-1-1s0.448-1,1-1h9c0.552,0,1,0.448,1,1S44.052,28,43.5,28z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#0096E6" }, attrs: { "d": "M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z" } }), _vm._v(" "), _c('g', [_c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M23.5,47.682c0,0.829-0.089,1.538-0.267,2.126s-0.403,1.08-0.677,1.477s-0.581,0.709-0.923,0.937\n\t\t\ts-0.672,0.398-0.991,0.513c-0.319,0.114-0.611,0.187-0.875,0.219C19.503,52.984,19.307,53,19.18,53h-3.814V42.924H18.4\n\t\t\tc0.848,0,1.593,0.135,2.235,0.403s1.176,0.627,1.6,1.073s0.74,0.955,0.95,1.524C23.395,46.494,23.5,47.08,23.5,47.682z\n\t\t\t M18.633,51.797c1.112,0,1.914-0.355,2.406-1.066s0.738-1.741,0.738-3.09c0-0.419-0.05-0.834-0.15-1.244\n\t\t\tc-0.101-0.41-0.294-0.781-0.581-1.114s-0.677-0.602-1.169-0.807s-1.13-0.308-1.914-0.308h-0.957v7.629H18.633z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M33.475,47.914c0,0.848-0.107,1.595-0.321,2.242c-0.214,0.647-0.511,1.185-0.889,1.613\n\t\t\tc-0.378,0.429-0.82,0.752-1.326,0.971s-1.06,0.328-1.661,0.328s-1.155-0.109-1.661-0.328s-0.948-0.542-1.326-0.971\n\t\t\tc-0.378-0.429-0.675-0.966-0.889-1.613c-0.214-0.647-0.321-1.395-0.321-2.242s0.107-1.593,0.321-2.235\n\t\t\tc0.214-0.643,0.51-1.178,0.889-1.606c0.378-0.429,0.82-0.754,1.326-0.978s1.06-0.335,1.661-0.335s1.155,0.111,1.661,0.335\n\t\t\ts0.948,0.549,1.326,0.978c0.378,0.429,0.674,0.964,0.889,1.606C33.367,46.321,33.475,47.066,33.475,47.914z M29.236,51.729\n\t\t\tc0.337,0,0.658-0.066,0.964-0.198c0.305-0.132,0.579-0.349,0.82-0.649c0.241-0.301,0.431-0.695,0.567-1.183\n\t\t\ts0.209-1.082,0.219-1.784c-0.009-0.684-0.08-1.265-0.212-1.743c-0.132-0.479-0.314-0.873-0.547-1.183s-0.497-0.533-0.793-0.67\n\t\t\tc-0.296-0.137-0.608-0.205-0.937-0.205c-0.337,0-0.659,0.063-0.964,0.191c-0.306,0.128-0.579,0.344-0.82,0.649\n\t\t\tc-0.242,0.306-0.431,0.699-0.567,1.183s-0.21,1.075-0.219,1.777c0.009,0.684,0.08,1.267,0.212,1.75\n\t\t\tc0.132,0.483,0.314,0.877,0.547,1.183s0.497,0.528,0.793,0.67C28.596,51.658,28.908,51.729,29.236,51.729z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M42.607,51.975c-0.374,0.364-0.798,0.638-1.271,0.82c-0.474,0.183-0.984,0.273-1.531,0.273\n\t\t\tc-0.602,0-1.155-0.109-1.661-0.328s-0.948-0.542-1.326-0.971c-0.378-0.429-0.675-0.966-0.889-1.613\n\t\t\tc-0.214-0.647-0.321-1.395-0.321-2.242s0.107-1.593,0.321-2.235c0.214-0.643,0.51-1.178,0.889-1.606\n\t\t\tc0.378-0.429,0.822-0.754,1.333-0.978c0.51-0.224,1.062-0.335,1.654-0.335c0.547,0,1.057,0.091,1.531,0.273\n\t\t\tc0.474,0.183,0.897,0.456,1.271,0.82l-1.135,1.012c-0.228-0.265-0.481-0.456-0.759-0.574c-0.278-0.118-0.567-0.178-0.868-0.178\n\t\t\tc-0.337,0-0.659,0.063-0.964,0.191c-0.306,0.128-0.579,0.344-0.82,0.649c-0.242,0.306-0.431,0.699-0.567,1.183\n\t\t\ts-0.21,1.075-0.219,1.777c0.009,0.684,0.08,1.267,0.212,1.75c0.132,0.483,0.314,0.877,0.547,1.183s0.497,0.528,0.793,0.67\n\t\t\tc0.296,0.142,0.608,0.212,0.937,0.212s0.636-0.06,0.923-0.178s0.549-0.31,0.786-0.574L42.607,51.975z" } })])]), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g')]);
  }, staticRenderFns: []
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var icon_els = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { staticStyle: { "enable-background": "new 0 0 56 56" }, attrs: { "version": "1.1", "id": "Capa_1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "x": "0px", "y": "0px", "viewBox": "0 0 56 56", "xml:space": "preserve" } }, [_c('g', [_c('path', { staticStyle: { "fill": "#E9E9E0" }, attrs: { "d": "M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074\n\t\tc0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z" } }), _vm._v(" "), _c('polygon', { staticStyle: { "fill": "#D9D7CA" }, attrs: { "points": "37.5,0.151 37.5,12 49.349,12 \t" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#91CDA0" }, attrs: { "d": "M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z" } }), _vm._v(" "), _c('g', [_c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M20.379,48.105L22.936,53h-1.9l-1.6-3.801h-0.137L17.576,53h-1.9l2.557-4.895l-2.721-5.182h1.873\n\t\t\tl1.777,4.102h0.137l1.928-4.102H23.1L20.379,48.105z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M27.037,42.924v8.832h4.635V53h-6.303V42.924H27.037z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M39.041,50.238c0,0.364-0.075,0.718-0.226,1.06S38.453,51.94,38.18,52.2s-0.611,0.467-1.012,0.622\n\t\t\tc-0.401,0.155-0.857,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034s-0.467-0.062-0.704-0.116\n\t\t\tc-0.237-0.055-0.463-0.13-0.677-0.226c-0.214-0.096-0.399-0.212-0.554-0.349l0.287-1.176c0.127,0.073,0.289,0.144,0.485,0.212\n\t\t\tc0.196,0.068,0.398,0.132,0.608,0.191c0.209,0.06,0.419,0.107,0.629,0.144c0.209,0.036,0.405,0.055,0.588,0.055\n\t\t\tc0.556,0,0.982-0.13,1.278-0.39c0.296-0.26,0.444-0.645,0.444-1.155c0-0.31-0.105-0.574-0.314-0.793\n\t\t\tc-0.21-0.219-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533c-0.365-0.178-0.707-0.388-1.025-0.629\n\t\t\tc-0.319-0.241-0.583-0.526-0.793-0.854c-0.21-0.328-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189\n\t\t\ts0.385-0.641,0.663-0.882c0.278-0.241,0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116\n\t\t\tc0.428,0.077,0.774,0.203,1.039,0.376c-0.055,0.118-0.119,0.248-0.191,0.39c-0.073,0.142-0.142,0.273-0.205,0.396\n\t\t\tc-0.064,0.123-0.119,0.226-0.164,0.308c-0.046,0.082-0.073,0.128-0.082,0.137c-0.055-0.027-0.116-0.063-0.185-0.109\n\t\t\ts-0.167-0.091-0.294-0.137c-0.128-0.046-0.296-0.077-0.506-0.096c-0.21-0.019-0.479-0.014-0.807,0.014\n\t\t\tc-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321c-0.128,0.128-0.228,0.271-0.301,0.431\n\t\t\tc-0.073,0.159-0.109,0.313-0.109,0.458c0,0.364,0.104,0.658,0.314,0.882c0.209,0.224,0.469,0.419,0.779,0.588\n\t\t\tc0.31,0.169,0.647,0.333,1.012,0.492c0.364,0.159,0.704,0.354,1.019,0.581s0.576,0.513,0.786,0.854\n\t\t\tC38.936,49.261,39.041,49.7,39.041,50.238z" } })]), _vm._v(" "), _c('path', { staticStyle: { "fill": "#C8BDB8" }, attrs: { "d": "M23.5,16v-4h-12v4v2v2v2v2v2v2v2v4h10h2h21v-4v-2v-2v-2v-2v-2v-4H23.5z M13.5,14h8v2h-8V14z\n\t\t M13.5,18h8v2h-8V18z M13.5,22h8v2h-8V22z M13.5,26h8v2h-8V26z M21.5,32h-8v-2h8V32z M42.5,32h-19v-2h19V32z M42.5,28h-19v-2h19V28\n\t\tz M42.5,24h-19v-2h19V24z M23.5,20v-2h19v2H23.5z" } })]), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g')]);
  }, staticRenderFns: []
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var icon_ppt = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { staticStyle: { "enable-background": "new 0 0 56 56" }, attrs: { "version": "1.1", "id": "Capa_1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "x": "0px", "y": "0px", "viewBox": "0 0 56 56", "xml:space": "preserve" } }, [_c('g', [_c('path', { staticStyle: { "fill": "#E9E9E0" }, attrs: { "d": "M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074\n\t\tc0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z" } }), _vm._v(" "), _c('polygon', { staticStyle: { "fill": "#D9D7CA" }, attrs: { "points": "37.5,0.151 37.5,12 49.349,12 \t" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#F6712E" }, attrs: { "d": "M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z" } }), _vm._v(" "), _c('g', [_c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M17.581,53H15.94V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205\n\t\t\tc0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306\n\t\t\tc0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656\n\t\t\ts-0.921,0.232-1.449,0.232h-1.217V53z M17.581,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103\n\t\t\tc0.196-0.068,0.376-0.18,0.54-0.335s0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032c0-0.164-0.023-0.354-0.068-0.567\n\t\t\tc-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492c-0.255-0.132-0.593-0.198-1.012-0.198H17.581z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M25.853,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205\n\t\t\tc0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306\n\t\t\tc0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656\n\t\t\ts-0.921,0.232-1.449,0.232h-1.217V53z M25.853,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103\n\t\t\tc0.196-0.068,0.376-0.18,0.54-0.335s0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032c0-0.164-0.023-0.354-0.068-0.567\n\t\t\tc-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492c-0.255-0.132-0.593-0.198-1.012-0.198H25.853z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M39.606,42.924v1.121h-3.008V53h-1.654v-8.955h-3.008v-1.121H39.606z" } })]), _vm._v(" "), _c('path', { staticStyle: { "fill": "#C8BDB8" }, attrs: { "d": "M39.5,30h-24V14h24V30z M17.5,28h20V16h-20V28z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#C8BDB8" }, attrs: { "d": "M20.499,35c-0.175,0-0.353-0.046-0.514-0.143c-0.474-0.284-0.627-0.898-0.343-1.372l3-5\n\t\tc0.284-0.474,0.898-0.627,1.372-0.343c0.474,0.284,0.627,0.898,0.343,1.372l-3,5C21.17,34.827,20.839,35,20.499,35z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#C8BDB8" }, attrs: { "d": "M34.501,35c-0.34,0-0.671-0.173-0.858-0.485l-3-5c-0.284-0.474-0.131-1.088,0.343-1.372\n\t\tc0.474-0.283,1.088-0.131,1.372,0.343l3,5c0.284,0.474,0.131,1.088-0.343,1.372C34.854,34.954,34.676,35,34.501,35z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#C8BDB8" }, attrs: { "d": "M27.5,16c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3C28.5,15.553,28.052,16,27.5,16\n\t\tz" } }), _vm._v(" "), _c('rect', { staticStyle: { "fill": "#D3CCC9" }, attrs: { "x": "17.5", "y": "16", "width": "20", "height": "12" } })]), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g')]);
  }, staticRenderFns: []
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var icon_pdf = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { staticStyle: { "enable-background": "new 0 0 56 56" }, attrs: { "version": "1.1", "id": "Capa_1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "x": "0px", "y": "0px", "viewBox": "0 0 56 56", "xml:space": "preserve" } }, [_c('g', [_c('path', { staticStyle: { "fill": "#E9E9E0" }, attrs: { "d": "M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074\n\t\tc0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z" } }), _vm._v(" "), _c('polygon', { staticStyle: { "fill": "#D9D7CA" }, attrs: { "points": "37.5,0.151 37.5,12 49.349,12 \t" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#CC4B4C" }, attrs: { "d": "M19.514,33.324L19.514,33.324c-0.348,0-0.682-0.113-0.967-0.326\n\t\tc-1.041-0.781-1.181-1.65-1.115-2.242c0.182-1.628,2.195-3.332,5.985-5.068c1.504-3.296,2.935-7.357,3.788-10.75\n\t\tc-0.998-2.172-1.968-4.99-1.261-6.643c0.248-0.579,0.557-1.023,1.134-1.215c0.228-0.076,0.804-0.172,1.016-0.172\n\t\tc0.504,0,0.947,0.649,1.261,1.049c0.295,0.376,0.964,1.173-0.373,6.802c1.348,2.784,3.258,5.62,5.088,7.562\n\t\tc1.311-0.237,2.439-0.358,3.358-0.358c1.566,0,2.515,0.365,2.902,1.117c0.32,0.622,0.189,1.349-0.39,2.16\n\t\tc-0.557,0.779-1.325,1.191-2.22,1.191c-1.216,0-2.632-0.768-4.211-2.285c-2.837,0.593-6.15,1.651-8.828,2.822\n\t\tc-0.836,1.774-1.637,3.203-2.383,4.251C21.273,32.654,20.389,33.324,19.514,33.324z M22.176,28.198\n\t\tc-2.137,1.201-3.008,2.188-3.071,2.744c-0.01,0.092-0.037,0.334,0.431,0.692C19.685,31.587,20.555,31.19,22.176,28.198z\n\t\t M35.813,23.756c0.815,0.627,1.014,0.944,1.547,0.944c0.234,0,0.901-0.01,1.21-0.441c0.149-0.209,0.207-0.343,0.23-0.415\n\t\tc-0.123-0.065-0.286-0.197-1.175-0.197C37.12,23.648,36.485,23.67,35.813,23.756z M28.343,17.174\n\t\tc-0.715,2.474-1.659,5.145-2.674,7.564c2.09-0.811,4.362-1.519,6.496-2.02C30.815,21.15,29.466,19.192,28.343,17.174z\n\t\t M27.736,8.712c-0.098,0.033-1.33,1.757,0.096,3.216C28.781,9.813,27.779,8.698,27.736,8.712z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#CC4B4C" }, attrs: { "d": "M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z" } }), _vm._v(" "), _c('g', [_c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M17.385,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205\n\t\t\tc0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306\n\t\t\tc0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656\n\t\t\ts-0.921,0.232-1.449,0.232h-1.217V53z M17.385,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103\n\t\t\tc0.196-0.068,0.376-0.18,0.54-0.335c0.164-0.155,0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032\n\t\t\tc0-0.164-0.023-0.354-0.068-0.567c-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492\n\t\t\tc-0.255-0.132-0.593-0.198-1.012-0.198H17.385z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M32.219,47.682c0,0.829-0.089,1.538-0.267,2.126s-0.403,1.08-0.677,1.477s-0.581,0.709-0.923,0.937\n\t\t\ts-0.672,0.398-0.991,0.513c-0.319,0.114-0.611,0.187-0.875,0.219C28.222,52.984,28.026,53,27.898,53h-3.814V42.924h3.035\n\t\t\tc0.848,0,1.593,0.135,2.235,0.403s1.176,0.627,1.6,1.073s0.74,0.955,0.95,1.524C32.114,46.494,32.219,47.08,32.219,47.682z\n\t\t\t M27.352,51.797c1.112,0,1.914-0.355,2.406-1.066s0.738-1.741,0.738-3.09c0-0.419-0.05-0.834-0.15-1.244\n\t\t\tc-0.101-0.41-0.294-0.781-0.581-1.114s-0.677-0.602-1.169-0.807s-1.13-0.308-1.914-0.308h-0.957v7.629H27.352z" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M36.266,44.168v3.172h4.211v1.121h-4.211V53h-1.668V42.924H40.9v1.244H36.266z" } })])]), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g')]);
  }, staticRenderFns: []
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var icon_file = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { staticStyle: { "enable-background": "new 0 0 56 56" }, attrs: { "version": "1.1", "id": "Capa_1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "x": "0px", "y": "0px", "viewBox": "0 0 56 56", "xml:space": "preserve" } }, [_c('g', [_c('path', { staticStyle: { "fill": "#E9E9E0" }, attrs: { "d": "M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074\n\t\tc0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z" } }), _vm._v(" "), _c('polygon', { staticStyle: { "fill": "#D9D7CA" }, attrs: { "points": "37.5,0.151 37.5,12 49.349,12 \t" } }), _vm._v(" "), _c('path', { staticStyle: { "fill": "#C8BDB8" }, attrs: { "d": "M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z" } }), _vm._v(" "), _c('circle', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "cx": "18.5", "cy": "47", "r": "3" } }), _vm._v(" "), _c('circle', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "cx": "28.5", "cy": "47", "r": "3" } }), _vm._v(" "), _c('circle', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "cx": "38.5", "cy": "47", "r": "3" } })]), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g'), _vm._v(" "), _c('g')]);
  }, staticRenderFns: []
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = "";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var icon_thumbnail = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('img', { attrs: { "src": _vm.thumbnail } })]);
    }, staticRenderFns: [],
    props: ["thumbnail"]
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = ".ffshelf-display-item__ffshelf-display-item { padding: 5px; float: left; box-sizing: border-box; width: 20%; text-align: center; } .ffshelf-display-item__ffshelf-display-item .ffshelf-display-item__item-chosen { background-color: #B0BEC5; } .ffshelf-display-item__ffshelf-display-item .ffshelf-display-item__item-content { transition: background-color 0.5s; cursor: pointer; width: 100%; border: 1px solid #ddd; padding: 10px; box-sizing: border-box; border-radius: 3px; white-space: nowrap; } .ffshelf-display-item__ffshelf-display-item .ffshelf-display-item__item-content .ffshelf-display-item__item-thumbnail { width: 80px; height: 80px; margin: 0 auto 10px auto; } .ffshelf-display-item__ffshelf-display-item .ffshelf-display-item__item-content .ffshelf-display-item__item-thumbnail svg, .ffshelf-display-item__ffshelf-display-item .ffshelf-display-item__item-content .ffshelf-display-item__item-thumbnail img { width: 100%; max-height: 100%; overflow: hidden; } .ffshelf-display-item__ffshelf-display-item .ffshelf-display-item__item-content .ffshelf-display-item__item-filename { width: 100%; overflow: hidden; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var item$1 = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf-display-item__ffshelf-display-item", attrs: { "title": _vm.title } }, [_c('div', { staticClass: "ffshelf-display-item__item-content", class: { 'ffshelf-display-item__item-chosen': _vm.selected }, on: { "click": _vm.onClick } }, [_c('div', { staticClass: "ffshelf-display-item__item-thumbnail" }, [_c(_vm.filetype, { tag: "component", attrs: { "thumbnail": _vm.thumbnail } })], 1), _vm._v(" "), _c('div', { staticClass: "ffshelf-display-item__item-filename" }, [_vm._t("default")], 2)])]);
    }, staticRenderFns: [], cssModules: { "ffshelfDisplayItem": "ffshelf-display-item__ffshelf-display-item", "ffshelf-display-item": "ffshelf-display-item__ffshelf-display-item", "itemChosen": "ffshelf-display-item__item-chosen", "item-chosen": "ffshelf-display-item__item-chosen", "itemContent": "ffshelf-display-item__item-content", "item-content": "ffshelf-display-item__item-content", "itemThumbnail": "ffshelf-display-item__item-thumbnail", "item-thumbnail": "ffshelf-display-item__item-thumbnail", "itemFilename": "ffshelf-display-item__item-filename", "item-filename": "ffshelf-display-item__item-filename" },
    data: function () {
        return {
            selected: false,
            filetype: '',
            thumbnail: '',
            title: ''
        };
    },
    props: ['file'],
    mounted: function () {
        this.filetype = "icon_" + this.file.filetype;
        if (this.file.thumbnail) {
            this.thumbnail = this.file.thumbnail;
        }
        if (this.file.title) {
            this.title = this.file.title;
        }
    },
    components: {
        'icon_pic': icon_thumbnail,
        'icon_document': icon_document,
        'icon_els': icon_els,
        'icon_ppt': icon_ppt,
        'icon_pdf': icon_pdf,
        'icon_file': icon_file
    },
    methods: {
        onClick: function () {
            this.selected = !this.selected;
            if (this.selected) {
                this.$emit('select', this.file);
            } else {
                this.$emit('cancel', this.file);
            }
        }
    }
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = ".ffshelf-display__ffshelf-display { left: 240px; position: absolute; padding: 30px; width: 720px; height: 583px; box-sizing: border-box; } .ffshelf-display__ffshelf-display .ffshelf-display__item-container { height: 100%; width: 100%; overflow-x: hidden; overflow-y: auto; /* Track */ /* Handle */ /* Handle on hover */ } .ffshelf-display__ffshelf-display .ffshelf-display__item-container::-webkit-scrollbar { width: 4px; } .ffshelf-display__ffshelf-display .ffshelf-display__item-container::-webkit-scrollbar-track { background-color: transparent; } .ffshelf-display__ffshelf-display .ffshelf-display__item-container::-webkit-scrollbar-thumb { background: #CFD8DC; border-radius: 1px; } .ffshelf-display__ffshelf-display .ffshelf-display__item-container::-webkit-scrollbar-thumb:hover { background: #94a8b1; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var display = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf-display__ffshelf-display" }, [_c('div', { staticClass: "ffshelf-display__item-container" }, _vm._l(_vm.files, function (file) {
            return _c('item', { attrs: { "file": file }, on: { "select": _vm.onSelect, "cancel": _vm.onCancel } }, [_vm._v(" " + _vm._s(file.filename) + " ")]);
        }))]);
    }, staticRenderFns: [], cssModules: { "ffshelfDisplay": "ffshelf-display__ffshelf-display", "ffshelf-display": "ffshelf-display__ffshelf-display", "itemContainer": "ffshelf-display__item-container", "item-container": "ffshelf-display__item-container" },
    props: ['url'],
    data: function () {
        return {
            files: [],
            selected: []
        };
    },
    mounted: function () {
        this.files.push({ filetype: "document", filename: "Document", title: "Hello" });
        this.files.push({ filetype: "els", filename: "Excel File" });
        this.files.push({ filetype: "ppt", filename: "PowerPoint" });
        this.files.push({ filetype: "pdf", filename: "PDF" });
        this.files.push({ filetype: "file", filename: "the name has been overflow" });
        this.files.push({ filetype: "pic", filename: "Picture", thumbnail: "https://lh3.googleusercontent.com/dB3Dvgf3VIglusoGJAfpNUAANhTXW8K9mvIsiIPkhJUAbAKGKJcEMPTf0mkSexzLM5o=w300" });
    },
    components: {
        "item": item$1
    },
    methods: {
        onSelect: function (file) {
            this.selected.push(file);
            console.log(this.selected);
        },
        onCancel: function (file) {
            var index = this.selected.indexOf(file);
            this.selected.splice(index, 1);
            console.log(this.selected);
        }
    }
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = ".ffshelf-dialog__ffshelf-dialog { top: 50%; left: 50%; position: fixed; z-index: 1000; width: 960px; height: 640px; background-color: #fff; margin: -320px 0 0 -480px; } .ffshelf-dialog__ffshelf-dialog .ffshelf-dialog__ffshelf-toggle { bottom: 0; left: 0; width: 960px; position: absolute; padding: 10px; box-sizing: border-box; border-top: 1px solid #e6e6e6; } .ffshelf-dialog__ffshelf-dialog .ffshelf-dialog__ffshelf-toggle button.ffshelf-dialog__chosen, .ffshelf-dialog__ffshelf-dialog .ffshelf-dialog__ffshelf-toggle button.ffshelf-dialog__cancel { float: right; padding: 0 20px; height: 36px; border-radius: 3px; font-size: 14px; transition: background-color 1s; } .ffshelf-dialog__ffshelf-dialog .ffshelf-dialog__ffshelf-toggle button.ffshelf-dialog__chosen { background-color: #BBDEFB; border: 1px solid #5baff5; } .ffshelf-dialog__ffshelf-dialog .ffshelf-dialog__ffshelf-toggle button.ffshelf-dialog__chosen:hover { background-color: #5baff5; } .ffshelf-dialog__ffshelf-dialog .ffshelf-dialog__ffshelf-toggle button.ffshelf-dialog__cancel { background-color: #ECEFF1; margin: 0 10px; border: 1px solid #b1bec6; } .ffshelf-dialog__ffshelf-dialog .ffshelf-dialog__ffshelf-toggle button.ffshelf-dialog__cancel:hover { background-color: #b1bec6; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var dialog = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf-dialog__ffshelf-dialog" }, [_c('category'), _vm._v(" "), _c('display'), _vm._v(" "), _c('div', { staticClass: "ffshelf-dialog__ffshelf-toggle" }, [_c('button', { staticClass: "ffshelf-dialog__chosen", on: { "click": _vm.onChoose } }, [_vm._v("選擇")]), _vm._v(" "), _c('button', { staticClass: "ffshelf-dialog__cancel", on: { "click": _vm.onCancel } }, [_vm._v("取消")])])], 1);
    }, staticRenderFns: [], cssModules: { "ffshelfDialog": "ffshelf-dialog__ffshelf-dialog", "ffshelf-dialog": "ffshelf-dialog__ffshelf-dialog", "ffshelfToggle": "ffshelf-dialog__ffshelf-toggle", "ffshelf-toggle": "ffshelf-dialog__ffshelf-toggle", "chosen": "ffshelf-dialog__chosen", "cancel": "ffshelf-dialog__cancel" },
    data: function () {
        return {};
    },
    components: {
        'category': category,
        'display': display
    },
    methods: {
        onChoose: function () {
            this.$emit('choose');
        },
        onCancel: function () {
            this.$emit('cancel');
        }
    }
};

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = "@import url(\"https://fonts.googleapis.com/css?family=Titillium+Web\"); .ffshelf__ffshelf { font-family: 'Titillium Web', sans-serif; } .ffshelf__ff-shelf { font-family: 'Titillium Web', sans-serif; } .ffshelf__ff-shelf .ffshelf__dialog-frame { width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); position: fixed; } .ffshelf__ff-shelf .ffshelf__dialog { width: 960px; height: 600px; background: #fff; padding: 0px; border: none; margin: -300px 0 0 -480px; top: 50%; left: 50%; position: fixed; box-sizing: border-box; border-radius: 3px; z-index: 999; overflow: hidden; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close { position: absolute; right: 0; top: 0; margin: 10px 15px; color: #aaa; z-index: 1004; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close i { font-size: 12px; } .ffshelf__ff-shelf .ffshelf__dialog .ffshelf__dialog-close:hover { color: #333; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var ffshelf$2 = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ffshelf__ffshelf" }, [_c('ffshelf-cover', { on: { "click": _vm.onCoverClick } }), _vm._v(" "), _c('ffshelf-dialog', { on: { "choose": _vm.onChoose, "cancel": _vm.onCancel } })], 1);
    }, staticRenderFns: [], cssModules: { "ffshelf": "ffshelf__ffshelf", "ffShelf": "ffshelf__ff-shelf", "ff-shelf": "ffshelf__ff-shelf", "dialogFrame": "ffshelf__dialog-frame", "dialog-frame": "ffshelf__dialog-frame", "dialog": "ffshelf__dialog", "dialogClose": "ffshelf__dialog-close", "dialog-close": "ffshelf__dialog-close" },
    components: {
        'ffshelf-dialog': dialog,
        'ffshelf-cover': cover
    },
    mounted: function () {},
    methods: {

        onCoverClick: function () {
            console.log("cover clicked!");
        },

        onChoose: function () {
            console.log("choose clicked!");
        },

        onCancel: function () {
            console.log("cancel clicked!");
        }
    }
};

var ffshelf$3 = Object.freeze({
	default: ffshelf$2
});

var require$$0 = ( ffshelf$3 && ffshelf$2 ) || ffshelf$3;

var ffshelf = require$$0;

return ffshelf;

})));
//# sourceMappingURL=ffshelf.js.map
