require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(36);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_66cd6e9e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(44);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-66cd6e9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_66cd6e9e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66cd6e9e", Component.options)
  } else {
    hotAPI.reload("data-v-66cd6e9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_videoLink_vue__ = __webpack_require__(39);
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


// import axios from 'axios'
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    videoLink: __WEBPACK_IMPORTED_MODULE_0__components_videoLink_vue__["a" /* default */]
  },
  mounted: function mounted() {},
  onPullDownRefresh: function onPullDownRefresh() {
    var _this = this;

    if (this.pullDownRefreshFlag) {
      return;
    }
    this.pullDownRefreshFlag = true;
    wx.startPullDownRefresh({
      success: function success() {
        console.log('开始下拉刷新...');
        setTimeout(function () {
          _this.pullDownRefreshFlag = false;
        }, 3000);
      }
    });
  },
  data: function data() {
    return {
      a: 123,
      navArray: [{ title: '热门', key: 1 }, { title: '追番', key: 2 }],
      pullDownRefreshFlag: false,
      activeKey: 1,
      vLinkArr: [{ id: 1, title: '3年300万订阅，我有些话想跟大家说...', label: '9万点赞', uper: '宝剑嫂', playNum: '43.4万', date: '7-20' }, { id: 2, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21' }, { id: 3, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21' }, { id: 4, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21' }, { id: 5, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21' }, { id: 6, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21' }, { id: 7, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21' }, { id: 8, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21' }]
    };
  },

  methods: {
    gethttp: function gethttp() {
      // mpvue.request({url: 'http://127.0.0.1/my:3000',
      //   method: 'get',
      //   success: (res) => {
      //     console.log(res)
      //     console.log('333')
      //   }})
    },
    changeActiveKey: function changeActiveKey(key) {
      this.gethttp();
      this.activeKey = key;
    }
  }
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_videoLink_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_72c16bc0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_videoLink_vue__ = __webpack_require__(43);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72c16bc0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_videoLink_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_72c16bc0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_videoLink_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\videoLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] videoLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72c16bc0", Component.options)
  } else {
    hotAPI.reload("data-v-72c16bc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

var img = __webpack_require__(42);
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['title', 'label', 'uper', 'playNum', 'date'],
  data: function data() {
    return {
      img: img
    };
  }
});

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.jpeg";

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-box"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('img', {
    attrs: {
      "src": _vm.img
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_c('div', [_vm._v(_vm._s(_vm.label))])]), _vm._v(" "), _c('div', {
    staticClass: "uper"
  }, [_vm._v(_vm._s(_vm.uper))]), _vm._v(" "), _c('div', {
    staticClass: "playNum"
  }, [_c('div', [_vm._v(_vm._s(_vm.playNum))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.date))])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72c16bc0", esExports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, _vm._l((_vm.navArray), function(item, index) {
    return _c('div', {
      key: item.key,
      class: {
        'active': item.key === _vm.activeKey
      },
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeActiveKey(item.key)
        }
      }
    }, [_c('div', [_vm._v(_vm._s(item.title))])])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeKey === 1),
      expression: "activeKey===1"
    }],
    staticClass: "vLink-container"
  }, _vm._l((_vm.vLinkArr), function(item, index) {
    return _c('video-link', {
      key: item.id,
      attrs: {
        "title": item.title,
        "label": item.label,
        "uper": item.uper,
        "playNum": item.playNum,
        "date": item.date,
        "eventid": '1_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.vLinkTo(item.id)
        }
      }
    })
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeKey === 2),
      expression: "activeKey===2"
    }]
  }, [_vm._v("\n    暂无数据\n  ")])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "queryInput"
  }, [_c('input', {
    attrs: {
      "type": "text"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66cd6e9e", esExports)
  }
}

/***/ })

},[35]);