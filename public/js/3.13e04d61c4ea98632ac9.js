webpackJsonp([3],{

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(502)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(504)
/* template */
var __vue_template__ = __webpack_require__(516)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/js/dashboard/Main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7da3b872", Component.options)
  } else {
    hotAPI.reload("data-v-7da3b872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(503);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("49ca9750", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7da3b872\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7da3b872\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding /var/www/node_modules/node-sass/vendor/linux-x64-67/binding.node\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 11.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 8.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/var/www/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/var/www/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\n    at Module.load (internal/modules/cjs/loader.js:630:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\n    at Module.require (internal/modules/cjs/loader.js:667:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at Object.<anonymous> (/var/www/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\n    at Module.load (internal/modules/cjs/loader.js:630:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\n    at Module.require (internal/modules/cjs/loader.js:667:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/var/www/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/var/www/node_modules/webpack/lib/NormalModule.js:275:15)");

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = __webpack_require__(74);

var _Sidebar = __webpack_require__(505);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Navbar = __webpack_require__(511);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _FooterBar = __webpack_require__(514);

var _FooterBar2 = _interopRequireDefault(_FooterBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  components: {
    Sidebar: _Sidebar2.default,
    Navbar: _Navbar2.default,
    FooterBar: _FooterBar2.default
  },
  computed: {
    isToggle: function isToggle() {
      return this.$store.state.sidebar.opened;
    }
  }
};

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(506)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(508)
/* template */
var __vue_template__ = __webpack_require__(510)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d8be570"
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
Component.options.__file = "resources/js/dashboard/components/particals/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d8be570", Component.options)
  } else {
    hotAPI.reload("data-v-5d8be570", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(507);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("31d01f44", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d8be570\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d8be570\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding /var/www/node_modules/node-sass/vendor/linux-x64-67/binding.node\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 11.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 8.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/var/www/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/var/www/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\n    at Module.load (internal/modules/cjs/loader.js:630:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\n    at Module.require (internal/modules/cjs/loader.js:667:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at Object.<anonymous> (/var/www/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\n    at Module.load (internal/modules/cjs/loader.js:630:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\n    at Module.require (internal/modules/cjs/loader.js:667:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /var/www/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/var/www/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/var/www/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/var/www/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/var/www/node_modules/webpack/lib/NormalModule.js:275:15)");

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(509);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      user: {}
    };
  },
  mounted: function mounted() {
    this.user = window.User;
  },

  computed: {
    menus: function menus() {
      var _this = this;

      _menu2.default.forEach(function (item) {
        if (item.children) {
          var i = 0;

          item.children.forEach(function (child) {
            child.can = child.permission ? _this.checkPermission(child.permission) : true;

            i = child.can ? i + 1 : i;
          });

          item.can = i > 0;
        } else {
          item.can = item.permission ? _this.checkPermission(item.permission) : true;
        }
      });

      return _menu2.default;
    },
    userInfo: function userInfo() {
      return '/user/' + this.user.name;
    }
  }
}; //
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

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  label: 'sidebar.dashboard',
  icon: 'fas fa-tachometer-alt',
  uri: { name: 'dashboard.home' }
}, {
  label: 'sidebar.modules.content',
  children: [{
    label: 'sidebar.article',
    permission: 'LIST_ARTICLE',
    icon: 'fas fa-book',
    uri: { name: 'dashboard.article' }
  }, {
    label: 'sidebar.discussion',
    permission: 'LIST_DISCUSSION',
    icon: 'fas fa-question-circle',
    uri: { name: 'dashboard.discussion' }
  }, {
    label: 'sidebar.comment',
    permission: 'LIST_COMMENT',
    icon: 'fas fa-comments',
    uri: { name: 'dashboard.comment' }
  }, {
    label: 'sidebar.tag',
    permission: 'LIST_TAG',
    icon: 'fas fa-tags',
    uri: { name: 'dashboard.tag' }
  }, {
    label: 'sidebar.category',
    permission: 'LIST_CATEGORY',
    icon: 'fas fa-list-alt',
    uri: { name: 'dashboard.category' }
  }, {
    label: 'sidebar.link',
    permission: 'LIST_LINK',
    icon: 'fas fa-globe',
    uri: { name: 'dashboard.link' }
  }]
}, {
  label: 'sidebar.modules.base',
  children: [{
    label: 'sidebar.user',
    permission: 'LIST_USER',
    icon: 'fas fa-users',
    uri: { name: 'dashboard.user' }
  }, {
    label: 'sidebar.file',
    permission: 'LIST_FILE',
    icon: 'fas fa-folder',
    uri: { name: 'dashboard.file' }
  }]
}, {
  label: 'sidebar.modules.system',
  children: [{
    label: 'sidebar.visitor',
    permission: 'LIST_VISITOR',
    icon: 'fas fa-eye',
    uri: { name: 'dashboard.visitor' }
  }, {
    label: 'sidebar.role',
    permission: 'LIST_ROLE',
    icon: 'fas fa-exclamation-triangle',
    uri: { name: 'dashboard.role' }
  }, {
    label: 'sidebar.system',
    permission: 'LIST_SYSTEM_INFO',
    icon: 'fas fa-cogs',
    uri: { name: 'dashboard.system' }
  }]
}];

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "sidebar-wrapper" } }, [
    _c(
      "ul",
      { staticClass: "sidebar-nav" },
      [
        _c("div", { staticClass: "user" }, [
          _c("div", { staticClass: "avatar" }, [
            _c("img", {
              staticClass: "img-fluid rounded-circle",
              attrs: { src: _vm.user.avatar }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nickname" }, [
            _c("p", [_vm._v(_vm._s(_vm.user.name))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.user.email))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "buttons" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("a", { attrs: { href: _vm.userInfo } }, [
              _c("i", { staticClass: "fas fa-user" })
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _vm._l(_vm.menus, function(menu) {
          return menu.can
            ? _c(
                "li",
                { class: { "mb-3": menu.children } },
                [
                  menu.children
                    ? _c("div", { staticClass: "sidebar-group" }, [
                        _c(
                          "p",
                          { staticClass: "sidebar-heading text-white-50" },
                          [_c("span", [_vm._v(_vm._s(_vm.$t(menu.label)))])]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "sidebar-group-items" },
                          _vm._l(menu.children, function(item) {
                            return item.can
                              ? _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: item.uri } },
                                      [
                                        _c("i", { class: item.icon }),
                                        _vm._v(
                                          " " +
                                            _vm._s(_vm.$t(item.label)) +
                                            "\n            "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          }),
                          0
                        )
                      ])
                    : _c(
                        "router-link",
                        { staticClass: "mb-1", attrs: { to: menu.uri } },
                        [
                          _c("i", { class: menu.icon }),
                          _vm._v(" " + _vm._s(_vm.$t(menu.label)) + "\n      ")
                        ]
                      )
                ],
                1
              )
            : _vm._e()
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [
      _c("i", { staticClass: "fas fa-home" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/setting" } }, [
      _c("i", { staticClass: "fas fa-cog" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d8be570", module.exports)
  }
}

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(512)
/* template */
var __vue_template__ = __webpack_require__(513)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/js/dashboard/components/particals/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b5beed4", Component.options)
  } else {
    hotAPI.reload("data-v-0b5beed4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(74);

exports.default = {
    methods: (0, _vuex.mapActions)(['toggle'])
}; //
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar navbar bg-white shadow" }, [
    _c("div", { staticClass: "navbar-brand" }, [
      _c(
        "a",
        { staticClass: "navbar-toggler text-left", on: { click: _vm.toggle } },
        [_c("i", { staticClass: "fas fa-bars text-secondary" })]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b5beed4", module.exports)
  }
}

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(515)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/js/dashboard/components/particals/FooterBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40d4b364", Component.options)
  } else {
    hotAPI.reload("data-v-40d4b364", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("div", { staticClass: "copy-right text-center" }, [
        _c("span", [_vm._v("© Pig Jian 2016. All rights reserved. ")]),
        _c(
          "a",
          {
            staticClass: "item",
            attrs: { href: "http://www.miitbeian.gov.cn/" }
          },
          [_vm._v("粤ICP备16020344号-1")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40d4b364", module.exports)
  }
}

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: { toggled: _vm.isToggle }, attrs: { id: "wrapper" } },
    [
      _c("sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "page-content-wrapper" } },
        [
          _c("navbar"),
          _vm._v(" "),
          _c("div", { staticClass: "container-fluid" }, [_c("router-view")], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7da3b872", module.exports)
  }
}

/***/ })

});