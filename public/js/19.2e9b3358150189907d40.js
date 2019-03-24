webpackJsonp([19],{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(474)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(476)
/* template */
var __vue_template__ = __webpack_require__(477)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f41fd344"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/dashboard/modules/system/System.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f41fd344", Component.options)
  } else {
    hotAPI.reload("data-v-f41fd344", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(475);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("ca2efb32", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f41fd344\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./System.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f41fd344\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./System.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding /var/www/node_modules/node-sass/vendor/linux-x64-67/binding.node\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 11.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 8.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/var/www/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/var/www/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\n    at Module.load (internal/modules/cjs/loader.js:630:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\n    at Module.require (internal/modules/cjs/loader.js:667:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at Object.<anonymous> (/var/www/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\n    at Module.load (internal/modules/cjs/loader.js:630:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\n    at Module.require (internal/modules/cjs/loader.js:667:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/var/www/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/var/www/node_modules/webpack/lib/NormalModule.js:275:15)");

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      system: {},
      type: 'system'
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('system').then(function (response) {
      _this.system = response.data;
    });
  }
};

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "box" }, [
      _c("div", { staticClass: "box-title" }, [
        _c("h5", [_vm._v(_vm._s(_vm.$t("page.systems")))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-2" }, [
            _c("div", { staticClass: "sidebar" }, [
              _c("ul", [
                _c(
                  "li",
                  {
                    class: [_vm.type == "system" ? "active" : ""],
                    attrs: { "aria-expanded": "false" },
                    on: {
                      click: function($event) {
                        _vm.type = "system"
                      }
                    }
                  },
                  [
                    _c("a", [
                      _c("i", { staticClass: "fas fa-puzzle-piece" }),
                      _vm._v(_vm._s(_vm.$t("page.system")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    class: [_vm.type == "php" ? "active" : ""],
                    attrs: { "aria-expanded": "true" },
                    on: {
                      click: function($event) {
                        _vm.type = "php"
                      }
                    }
                  },
                  [_vm._m(0)]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    class: [_vm.type == "database" ? "active" : ""],
                    attrs: { "aria-expanded": "false" },
                    on: {
                      click: function($event) {
                        _vm.type = "database"
                      }
                    }
                  },
                  [
                    _c("a", [
                      _c("i", { staticClass: "fas fa-database" }),
                      _vm._v(" " + _vm._s(_vm.$t("page.database")))
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "col-md-10", attrs: { id: "tab-content" } }, [
            _vm.type == "system"
              ? _c("li", { attrs: { "aria-hidden": "true" } }, [
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page.system")))]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-hover" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { attrs: { width: "150" } }, [
                          _vm._v(_vm._s(_vm.$t("page.key")))
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.value")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.server")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.server))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.domain")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.http_host))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("IP")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.remote_host))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("User Agent")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.user_agent))])
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.type == "php"
              ? _c("li", { attrs: { "aria-hidden": "false" } }, [
                  _c("h2", [_vm._v("PHP")]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-hover" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { attrs: { width: "150" } }, [
                          _vm._v(_vm._s(_vm.$t("page.key")))
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.value")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.version")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.php))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Handler")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.sapi_name))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.extension")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.extensions))])
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.type == "database"
              ? _c("li", { attrs: { "aria-hidden": "true" } }, [
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page.database")))]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-hover" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { attrs: { width: "150" } }, [
                          _vm._v(_vm._s(_vm.$t("page.key")))
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.value")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.driver")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.db_connection))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.database")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.db_database))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.version")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.db_version))])
                      ])
                    ])
                  ])
                ])
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", { staticClass: "fas fa-code" }), _vm._v(" PHP")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f41fd344", module.exports)
  }
}

/***/ })

});