(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_web_Nosotros_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Nosotros.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Nosotros.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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

moment__WEBPACK_IMPORTED_MODULE_0___default().locale('es-co');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getDatos(); //this.$loading(true) loading para cargar en filtros
  },
  data: function data() {
    return {
      nosotros: '',
      mision: '',
      vision: '',
      valores: '',
      videoId: ''
    };
  },
  methods: {
    getDatos: function getDatos() {
      var _this = this;

      axios.get('/api/web/nosotros').then(function (response) {
        _this.nosotros = response.data.NosotrosEmpresa;
        _this.mision = response.data.MisionEmpresa;
        _this.vision = response.data.VisionEmpresa;
        _this.valores = response.data.ValoresEmpresa;
        _this.videoId = response.data.VideoYoutubeEmpresa;
      })["catch"](function (errors) {});
    },
    playVideo: function playVideo() {
      this.player.playVideo();
    },
    playing: function playing() {
      console.log('\o/ we are watching!!!');
    }
  },
  computed: {
    player: function player() {
      return this.$refs.youtube.player;
    }
  }
});

/***/ }),

/***/ "./resources/js/web/Nosotros.vue":
/*!***************************************!*\
  !*** ./resources/js/web/Nosotros.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nosotros_vue_vue_type_template_id_f20a5d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nosotros.vue?vue&type=template&id=f20a5d90& */ "./resources/js/web/Nosotros.vue?vue&type=template&id=f20a5d90&");
/* harmony import */ var _Nosotros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nosotros.vue?vue&type=script&lang=js& */ "./resources/js/web/Nosotros.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Nosotros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Nosotros_vue_vue_type_template_id_f20a5d90___WEBPACK_IMPORTED_MODULE_0__.render,
  _Nosotros_vue_vue_type_template_id_f20a5d90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/Nosotros.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/web/Nosotros.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/web/Nosotros.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nosotros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nosotros.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Nosotros.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nosotros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/web/Nosotros.vue?vue&type=template&id=f20a5d90&":
/*!**********************************************************************!*\
  !*** ./resources/js/web/Nosotros.vue?vue&type=template&id=f20a5d90& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nosotros_vue_vue_type_template_id_f20a5d90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nosotros_vue_vue_type_template_id_f20a5d90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nosotros_vue_vue_type_template_id_f20a5d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nosotros.vue?vue&type=template&id=f20a5d90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Nosotros.vue?vue&type=template&id=f20a5d90&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Nosotros.vue?vue&type=template&id=f20a5d90&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Nosotros.vue?vue&type=template&id=f20a5d90& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "about", attrs: { id: "about" } }, [
      _c("div", { staticClass: "container shadow-none" }, [
        _c("div", { staticClass: "row no-gutters" }, [
          _c(
            "div",
            {
              staticClass:
                "col-lg-6 d-flex flex-column justify-content-center about-content"
            },
            [
              _c("div", { staticClass: "section-title mb-4" }, [
                _c("h2", { staticClass: "text-left" }, [_vm._v("Nosotros")]),
                _vm._v(" "),
                _c("div", { domProps: { innerHTML: _vm._s(_vm.nosotros) } })
              ]),
              _vm._v(" "),
              _vm.mision
                ? _c("div", { staticClass: "icon-box" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "description",
                      domProps: { innerHTML: _vm._s(_vm.mision) }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.vision
                ? _c("div", { staticClass: "icon-box" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "description",
                      domProps: { innerHTML: _vm._s(_vm.vision) }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.valores
                ? _c("div", { staticClass: "icon-box" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "description",
                      domProps: { innerHTML: _vm._s(_vm.valores) }
                    })
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 " }, [
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("iframe", {
              staticClass: "mt-5",
              attrs: {
                width: "100%",
                height: "315",
                src: "https://www.youtube.com/embed/" + _vm.videoId,
                title: "YouTube video player",
                frameborder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: ""
              }
            })
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
    return _c("section", { staticClass: "counts  mb-1 section-header" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "text-center  p-3 mt-4" }, [
          _c("h3", { staticClass: "mb-4 text-white" }, [_vm._v("Llanotics")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-users" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "title" }, [
      _c("a", { attrs: { href: "" } }, [_vm._v("Misión")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-arrow-circle-up" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "title" }, [_c("a", [_vm._v("Visión")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-handshake-o" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "title" }, [_c("a", [_vm._v("Valores")])])
  }
]
render._withStripped = true



/***/ })

}]);