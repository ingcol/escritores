(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_web_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Slider.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Slider.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_web_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/web/Slider */ "./resources/js/components/web/Slider.vue");
/* harmony import */ var _components_web_Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/web/Body */ "./resources/js/components/web/Body.vue");
/* harmony import */ var _components_web_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/web/Footer */ "./resources/js/components/web/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SliderComponent: _components_web_Slider__WEBPACK_IMPORTED_MODULE_0__.default,
    BodyComponent: _components_web_Body__WEBPACK_IMPORTED_MODULE_1__.default,
    FooterComponent: _components_web_Footer__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    this.getSliders(); //this.$loading(true) loading para cargar en filtros
  },
  data: function data() {
    return {
      sliders: []
    };
  },
  methods: {
    getSliders: function getSliders() {
      var _this = this;

      axios.get('/api/web/slider').then(function (response) {
        _this.sliders = response.data;
      })["catch"](function (errors) {});
    },
    imagenFondo: function imagenFondo(imagen) {
      return "background-image: url('" + imagen + "')";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.my-flex-card > div > div.count-box {\r\n    height: calc(100% - 15px);\r\n    margin-bottom: 15px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/web/Footer.vue":
/*!************************************************!*\
  !*** ./resources/js/components/web/Footer.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_1abcd33e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=1abcd33e& */ "./resources/js/components/web/Footer.vue?vue&type=template&id=1abcd33e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Footer_vue_vue_type_template_id_1abcd33e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_1abcd33e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/web/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/web/Slider.vue":
/*!************************************************!*\
  !*** ./resources/js/components/web/Slider.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Slider_vue_vue_type_template_id_403772b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.vue?vue&type=template&id=403772b2& */ "./resources/js/components/web/Slider.vue?vue&type=template&id=403772b2&");
/* harmony import */ var _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.vue?vue&type=script&lang=js& */ "./resources/js/components/web/Slider.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Slider_vue_vue_type_template_id_403772b2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Slider_vue_vue_type_template_id_403772b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/web/Slider.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/web/Index.vue":
/*!************************************!*\
  !*** ./resources/js/web/Index.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_79e5ae29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=79e5ae29& */ "./resources/js/web/Index.vue?vue&type=template&id=79e5ae29&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/web/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/web/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_79e5ae29___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_79e5ae29___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/web/Slider.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/web/Slider.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Slider.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/web/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/web/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/web/Footer.vue?vue&type=template&id=1abcd33e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/web/Footer.vue?vue&type=template&id=1abcd33e& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_1abcd33e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_1abcd33e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_1abcd33e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=1abcd33e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Footer.vue?vue&type=template&id=1abcd33e&");


/***/ }),

/***/ "./resources/js/components/web/Slider.vue?vue&type=template&id=403772b2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/web/Slider.vue?vue&type=template&id=403772b2& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_403772b2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_403772b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_403772b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Slider.vue?vue&type=template&id=403772b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Slider.vue?vue&type=template&id=403772b2&");


/***/ }),

/***/ "./resources/js/web/Index.vue?vue&type=template&id=79e5ae29&":
/*!*******************************************************************!*\
  !*** ./resources/js/web/Index.vue?vue&type=template&id=79e5ae29& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_79e5ae29___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_79e5ae29___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_79e5ae29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=79e5ae29& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=template&id=79e5ae29&");


/***/ }),

/***/ "./resources/js/web/Index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./resources/js/web/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Footer.vue?vue&type=template&id=1abcd33e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Footer.vue?vue&type=template&id=1abcd33e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("footer", { attrs: { id: "footer" } }, [
        _c("div", { staticClass: "footer-top" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                _c("div", { staticClass: "footer-info" }, [
                  _c("h3", [_vm._v("Dewi")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("\n                A108 Adam Street "),
                    _c("br"),
                    _vm._v("\n                NY 535022, USA"),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Phone:")]),
                    _vm._v(" +1 5589 55488 55"),
                    _c("br"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Email:")]),
                    _vm._v(" info@example.com"),
                    _c("br")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "social-links mt-3" }, [
                    _c("a", { staticClass: "twitter", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "bx bxl-twitter" })
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "facebook", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "bx bxl-facebook" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "instagram", attrs: { href: "#" } },
                      [_c("i", { staticClass: "bx bxl-instagram" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "google-plus", attrs: { href: "#" } },
                      [_c("i", { staticClass: "bx bxl-skype" })]
                    ),
                    _vm._v(" "),
                    _c("a", { staticClass: "linkedin", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "bx bxl-linkedin" })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-2 col-md-6 footer-links" }, [
                _c("h4", [_vm._v("Useful Links")]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("About us")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Services")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Terms of service")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Privacy policy")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-6 footer-links" }, [
                _c("h4", [_vm._v("Our Services")]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Web Design")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Web Development")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Product Management")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Marketing")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Graphic Design")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6 footer-newsletter" },
                [
                  _c("h4", [_vm._v("Our Newsletter")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Tamen quem nulla quae legam multos aute sint culpa legam noster magna"
                    )
                  ]),
                  _vm._v(" "),
                  _c("form", { attrs: { action: "", method: "post" } }, [
                    _c("input", { attrs: { type: "email", name: "email" } }),
                    _c("input", {
                      attrs: { type: "submit", value: "Subscribe" }
                    })
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "copyright" }, [
            _vm._v("\n        © Copyright "),
            _c("strong", [_c("span", [_vm._v("Dewi")])]),
            _vm._v(". All Rights Reserved\n      ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "credits" }, [
            _vm._v("\n        Designed by "),
            _c("a", { attrs: { href: "https://bootstrapmade.com/" } }, [
              _vm._v("BootstrapMade")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "back-to-top", attrs: { href: "#" } }, [
        _c("i", { staticClass: "ri-arrow-up-line" })
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "preloader" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Slider.vue?vue&type=template&id=403772b2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/web/Slider.vue?vue&type=template&id=403772b2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("section", { attrs: { id: "hero" } }, [
      _c("div", { staticClass: "hero-container" }, [
        _c(
          "div",
          {
            staticClass: "carousel slide carousel-fade",
            attrs: { id: "heroCarousel", "data-ride": "carousel" }
          },
          [
            _c("ol", {
              staticClass: "carousel-indicators",
              attrs: { id: "hero-carousel-indicators" }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "carousel-inner", attrs: { role: "listbox" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "carousel-item active",
                    staticStyle: {
                      "background-image": "url('assets/images/tec.jpg')"
                    }
                  },
                  [
                    _c("div", { staticClass: "carousel-container" }, [
                      _c(
                        "div",
                        { staticClass: "carousel-content container" },
                        [
                          _c(
                            "h2",
                            {
                              staticClass:
                                "animate__animated animate__fadeInDown"
                            },
                            [
                              _vm._v(_vm._s(_vm.varr) + "Bienvenido 1"),
                              _c("span", [_vm._v("Mamba")])
                            ]
                          ),
                          _vm._v(" "),
                          _c("center", [
                            _c("p", { staticClass: "text-center" }, [
                              _vm._v(
                                "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "carousel-item ",
                    staticStyle: {
                      "background-image": "url('assets/images/tec1.jpg')"
                    }
                  },
                  [
                    _c("div", { staticClass: "carousel-container" }, [
                      _c(
                        "div",
                        { staticClass: "carousel-content container" },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("center", [
                            _c("p", { staticClass: "text-center" }, [
                              _vm._v(
                                "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "animate__animated animate__fadeInDown" }, [
      _vm._v("Otro slider "),
      _c("span", [_vm._v("Mamba")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-prev ",
        attrs: { href: "#heroCarousel", role: "button", "data-slide": "prev" }
      },
      [
        _c("span", {
          staticClass: "carousel-control-prev-icon fa fa-angle-left",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-next",
        attrs: { href: "#heroCarousel", role: "button", "data-slide": "next" }
      },
      [
        _c("span", {
          staticClass: "carousel-control-next-icon fa fa-angle-right",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=template&id=79e5ae29&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=template&id=79e5ae29& ***!
  \**********************************************************************************************************************************************************************************************************/
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
      _c("section", { attrs: { id: "hero" } }, [
        _c("div", { staticClass: "hero-container" }, [
          _c(
            "div",
            {
              staticClass: "carousel slide carousel-fade",
              attrs: { id: "heroCarousel", "data-ride": "carousel" }
            },
            [
              _c("ol", {
                staticClass: "carousel-indicators",
                attrs: { id: "hero-carousel-indicators" }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "carousel-inner", attrs: { role: "listbox" } },
                _vm._l(_vm.sliders, function(item, index) {
                  return _c(
                    "div",
                    {
                      staticClass: "carousel-item",
                      class: { active: index == 0 },
                      style: _vm.imagenFondo(item.file_url)
                    },
                    [
                      _c("div", { staticClass: "carousel-container" }, [
                        _c(
                          "div",
                          { staticClass: "carousel-content container" },
                          [
                            _c(
                              "h2",
                              {
                                staticClass:
                                  "animate__animated animate__fadeInDown text-white font-weight-bold"
                              },
                              [
                                _vm._v(
                                  "\n              " + _vm._s(item.TituloSlider)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("center", [
                              _c(
                                "h5",
                                { staticClass: "text-center text-white mt-3" },
                                [_vm._v(_vm._s(item.DescripcionSlider))]
                              )
                            ])
                          ],
                          1
                        )
                      ])
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("nosotros-inicio-web"),
      _vm._v(" "),
      _c("galeria-web"),
      _vm._v(" "),
      _c("aliados-web")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-prev ",
        attrs: { href: "#heroCarousel", role: "button", "data-slide": "prev" }
      },
      [
        _c("span", {
          staticClass: "carousel-control-prev-icon fa fa-angle-left",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-next",
        attrs: { href: "#heroCarousel", role: "button", "data-slide": "next" }
      },
      [
        _c("span", {
          staticClass: "carousel-control-next-icon fa fa-angle-right",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/Index.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("08d011b2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);