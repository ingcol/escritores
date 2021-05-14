(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_web_DetalleActividad_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_easy_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-easy-lightbox */ "./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.es5.esm.min.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



moment__WEBPACK_IMPORTED_MODULE_2___default().locale('es-co');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VueEasyLightbox: vue_easy_lightbox__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {},
  mounted: function mounted() {
    this.getDetalleActividad();
  },
  data: function data() {
    return {
      datos: '',
      imgs: [],
      visible: false,
      index: 0,
      // default
      tituloActividad: '',
      descripcionActividad: '',
      creado: '',
      Error: false
    };
  },
  methods: {
    fechaFormateada: function fechaFormateada(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(fecha).format("D, MMMM YYYY");
    },
    showImg: function showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide: function handleHide() {
      this.visible = false;
    },
    getDetalleActividad: function getDetalleActividad() {
      var _this = this;

      var slug = this.$route.params.slug;
      var url = '/api/web/actividad/' + slug;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then(function (response) {
        _this.tituloActividad = response.data.actividad.TituloActividad;
        _this.descripcionActividad = response.data.actividad.DescripcionActividad;
        _this.creado = response.data.actividad.created_at;

        for (var item in response.data.imagenes) {
          _this.imgs.push(response.data.imagenes[item].file_url);
        }
      })["catch"](function (errors) {
        if (errors) {
          _this.Error = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.my-flex-card > div > div.box-img-detail {\n\theight: calc(100% - 15px);\n\tmargin-bottom: 15px;\n}\n.box-img-detail{\n\tbackground-color:#f9f9f9\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/web/DetalleActividad.vue":
/*!***********************************************!*\
  !*** ./resources/js/web/DetalleActividad.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetalleActividad_vue_vue_type_template_id_97290202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetalleActividad.vue?vue&type=template&id=97290202& */ "./resources/js/web/DetalleActividad.vue?vue&type=template&id=97290202&");
/* harmony import */ var _DetalleActividad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetalleActividad.vue?vue&type=script&lang=js& */ "./resources/js/web/DetalleActividad.vue?vue&type=script&lang=js&");
/* harmony import */ var _DetalleActividad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetalleActividad.vue?vue&type=style&index=0&lang=css& */ "./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _DetalleActividad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DetalleActividad_vue_vue_type_template_id_97290202___WEBPACK_IMPORTED_MODULE_0__.render,
  _DetalleActividad_vue_vue_type_template_id_97290202___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/DetalleActividad.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/web/DetalleActividad.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/web/DetalleActividad.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleActividad.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/web/DetalleActividad.vue?vue&type=template&id=97290202&":
/*!******************************************************************************!*\
  !*** ./resources/js/web/DetalleActividad.vue?vue&type=template&id=97290202& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_template_id_97290202___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_template_id_97290202___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_template_id_97290202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleActividad.vue?vue&type=template&id=97290202& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=template&id=97290202&");


/***/ }),

/***/ "./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleActividad.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleActividad_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=template&id=97290202&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=template&id=97290202& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", [
        _c("section", { staticClass: "counts  mb-4 section-header" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "text-center  p-2 mt-4" }, [
              _c("h3", { staticClass: "text-white" }, [
                _vm._v(_vm._s(_vm.tituloActividad))
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      !_vm.creado
        ? _c("div", { staticClass: "content-load" }, [
            _vm.Error
              ? _c("section", { staticClass: "counts  mb-1  mt-5" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "page-wrap  d-flex flex-row align-items-center"
                    },
                    [
                      _c("div", { staticClass: "container" }, [
                        _c(
                          "div",
                          { staticClass: "row justify-content-center" },
                          [
                            _c(
                              "div",
                              { staticClass: "col-md-12 text-center" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "display-1 d-block" },
                                  [_vm._v("404")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mb-4 lead" }, [
                                  _vm._v("Página no encontrada")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-link",
                                    attrs: { to: "/" }
                                  },
                                  [_vm._v(" Inicio")]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "container mb-2" }, [
        _vm.creado
          ? _c("span", { staticClass: "mb-4" }, [
              _c("strong", [_vm._v(_vm._s(_vm.fechaFormateada(_vm.creado)))])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", {
          staticClass: "text-justify mt-4",
          domProps: { innerHTML: _vm._s(_vm.descripcionActividad) }
        })
      ]),
      _vm._v(" "),
      _vm.imgs.length
        ? _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "row  my-flex-card" },
              _vm._l(_vm.imgs, function(src, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "col-md-4 mb-4  pointer",
                    on: {
                      click: function() {
                        return _vm.showImg(index)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "box-img-detail border p-4" },
                      [
                        _c("center", [
                          _c("img", {
                            staticClass: "img-thumbnail img-height",
                            attrs: { src: src }
                          })
                        ])
                      ],
                      1
                    )
                  ]
                )
              }),
              0
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("vue-easy-lightbox", {
        attrs: { visible: _vm.visible, imgs: _vm.imgs, index: _vm.index },
        on: { hide: _vm.handleHide }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleActividad.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/DetalleActividad.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("99b01366", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);