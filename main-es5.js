function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/card-one/card-one.component */
    "./src/app/pages/card-one/card-one.component.ts");
    /* harmony import */


    var _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/cards/cards.component */
    "./src/app/pages/cards/cards.component.ts");
    /* harmony import */


    var _pages_card_two_card_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/card-two/card-two.component */
    "./src/app/pages/card-two/card-two.component.ts");
    /* harmony import */


    var _pages_card_three_card_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/card-three/card-three.component */
    "./src/app/pages/card-three/card-three.component.ts");
    /* harmony import */


    var _pages_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/multi-layer/multi-layer.component */
    "./src/app/pages/multi-layer/multi-layer.component.ts");
    /* harmony import */


    var _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/introduction/introduction.component */
    "./src/app/pages/introduction/introduction.component.ts");
    /* harmony import */


    var _pages_warning_warning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/warning/warning.component */
    "./src/app/pages/warning/warning.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/cards',
      pathMatch: 'full'
    }, {
      path: "cards",
      component: _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]
    }, {
      path: "card-one",
      component: _pages_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_2__["CardOneComponent"]
    }, {
      path: "card-two",
      component: _pages_card_two_card_two_component__WEBPACK_IMPORTED_MODULE_4__["CardTwoComponent"]
    }, {
      path: "card-three",
      component: _pages_card_three_card_three_component__WEBPACK_IMPORTED_MODULE_5__["CardThreeComponent"]
    }, {
      path: "multi-layer",
      component: _pages_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_6__["MultiLayerComponent"]
    }, {
      path: "introduction",
      component: _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__["IntroductionComponent"]
    }, {
      path: "warning",
      component: _pages_warning_warning_component__WEBPACK_IMPORTED_MODULE_8__["WarningComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 34,
      vars: 0,
      consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "container"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/cards", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/introduction", 1, "dropdown-item"], ["routerLink", "/multi-layer", 1, "dropdown-item"], [1, "nav-item"], ["routerLink", "/card-one", 1, "nav-link"], ["routerLink", "/card-two", 1, "nav-link"], ["routerLink", "/card-three", 1, "nav-link"], ["routerLink", "/warning", 1, "nav-link"], [1, "navbar-text"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hello! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Get Started ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Introduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Multi layer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Card One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Card Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Card Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " @JoaMoreno ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\n  color: #4a5568;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgY29sb3I6ICM0YTU1Njg7XG59XG4iLCIqIHtcbiAgY29sb3I6ICM0YTU1Njg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/collapse-btn/collapse-btn.component */
    "./src/app/shared/collapse-btn/collapse-btn.component.ts");
    /* harmony import */


    var _shared_pay_card_pay_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/pay-card/pay-card.component */
    "./src/app/shared/pay-card/pay-card.component.ts");
    /* harmony import */


    var _shared_description_card_description_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/description-card/description-card.component */
    "./src/app/shared/description-card/description-card.component.ts");
    /* harmony import */


    var _shared_description_card_lite_description_card_lite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/description-card-lite/description-card-lite.component */
    "./src/app/shared/description-card-lite/description-card-lite.component.ts");
    /* harmony import */


    var _shared_button_pay_card_button_pay_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/button-pay-card/button-pay-card.component */
    "./src/app/shared/button-pay-card/button-pay-card.component.ts");
    /* harmony import */


    var _pages_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/card-one/card-one.component */
    "./src/app/pages/card-one/card-one.component.ts");
    /* harmony import */


    var _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/cards/cards.component */
    "./src/app/pages/cards/cards.component.ts");
    /* harmony import */


    var _pages_card_two_card_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/card-two/card-two.component */
    "./src/app/pages/card-two/card-two.component.ts");
    /* harmony import */


    var _pages_card_three_card_three_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/card-three/card-three.component */
    "./src/app/pages/card-three/card-three.component.ts");
    /* harmony import */


    var _shared_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/login-form/login-form.component */
    "./src/app/shared/login-form/login-form.component.ts");
    /* harmony import */


    var _pages_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/multi-layer/multi-layer.component */
    "./src/app/pages/multi-layer/multi-layer.component.ts");
    /* harmony import */


    var _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/introduction/introduction.component */
    "./src/app/pages/introduction/introduction.component.ts");
    /* harmony import */


    var _shared_collapse_btn2_collapse_btn2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/collapse-btn2/collapse-btn2.component */
    "./src/app/shared/collapse-btn2/collapse-btn2.component.ts");
    /* harmony import */


    var _pages_warning_warning_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/warning/warning.component */
    "./src/app/pages/warning/warning.component.ts");
    /* harmony import */


    var _shared_no_repeat_no_repeat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/no-repeat/no-repeat.component */
    "./src/app/shared/no-repeat/no-repeat.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_4__["CollapseBtnComponent"], _shared_pay_card_pay_card_component__WEBPACK_IMPORTED_MODULE_5__["PayCardComponent"], _shared_description_card_description_card_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionCardComponent"], _shared_description_card_lite_description_card_lite_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionCardLiteComponent"], _shared_button_pay_card_button_pay_card_component__WEBPACK_IMPORTED_MODULE_8__["ButtonPayCardComponent"], _pages_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_9__["CardOneComponent"], _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_10__["CardsComponent"], _pages_card_two_card_two_component__WEBPACK_IMPORTED_MODULE_11__["CardTwoComponent"], _pages_card_three_card_three_component__WEBPACK_IMPORTED_MODULE_12__["CardThreeComponent"], _shared_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__["LoginFormComponent"], _pages_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_14__["MultiLayerComponent"], _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__["IntroductionComponent"], _shared_collapse_btn2_collapse_btn2_component__WEBPACK_IMPORTED_MODULE_16__["CollapseBtn2Component"], _pages_warning_warning_component__WEBPACK_IMPORTED_MODULE_17__["WarningComponent"], _shared_no_repeat_no_repeat_component__WEBPACK_IMPORTED_MODULE_18__["NoRepeatComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_4__["CollapseBtnComponent"], _shared_pay_card_pay_card_component__WEBPACK_IMPORTED_MODULE_5__["PayCardComponent"], _shared_description_card_description_card_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionCardComponent"], _shared_description_card_lite_description_card_lite_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionCardLiteComponent"], _shared_button_pay_card_button_pay_card_component__WEBPACK_IMPORTED_MODULE_8__["ButtonPayCardComponent"], _pages_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_9__["CardOneComponent"], _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_10__["CardsComponent"], _pages_card_two_card_two_component__WEBPACK_IMPORTED_MODULE_11__["CardTwoComponent"], _pages_card_three_card_three_component__WEBPACK_IMPORTED_MODULE_12__["CardThreeComponent"], _shared_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__["LoginFormComponent"], _pages_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_14__["MultiLayerComponent"], _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__["IntroductionComponent"], _shared_collapse_btn2_collapse_btn2_component__WEBPACK_IMPORTED_MODULE_16__["CollapseBtn2Component"], _pages_warning_warning_component__WEBPACK_IMPORTED_MODULE_17__["WarningComponent"], _shared_no_repeat_no_repeat_component__WEBPACK_IMPORTED_MODULE_18__["NoRepeatComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/card-one/card-one.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/card-one/card-one.component.ts ***!
    \******************************************************/

  /*! exports provided: CardOneComponent */

  /***/
  function srcAppPagesCardOneCardOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardOneComponent", function () {
      return CardOneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/collapse-btn/collapse-btn.component */
    "./src/app/shared/collapse-btn/collapse-btn.component.ts");
    /* harmony import */


    var _shared_pay_card_pay_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/pay-card/pay-card.component */
    "./src/app/shared/pay-card/pay-card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_description_card_description_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/description-card/description-card.component */
    "./src/app/shared/description-card/description-card.component.ts");

    function CardOneComponent_description_card_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "description-card", 9);
      }

      if (rf & 2) {
        var debt_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", debt_r1);
      }
    }

    var CardOneComponent = /*#__PURE__*/function () {
      function CardOneComponent() {
        _classCallCheck(this, CardOneComponent);

        this.dataButton = {
          title: "Total",
          debt: 1090
        };
        this.dataBody = [{
          name: "Netflix",
          description: "Lorem Ipsum",
          toPay: 350
        }, {
          name: "Spotify",
          description: "Lorem Ipsum",
          toPay: 260
        }, {
          name: "Mercado Libre",
          description: "Lorem Ipsum",
          toPay: 480
        }];
      }

      _createClass(CardOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardOneComponent;
    }();

    CardOneComponent.ɵfac = function CardOneComponent_Factory(t) {
      return new (t || CardOneComponent)();
    };

    CardOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardOneComponent,
      selectors: [["app-card-one"]],
      decls: 22,
      vars: 3,
      consts: [[1, "row", "mt-5", "pt-5"], [1, "col-7", "code"], [2, "font-size", "22px"], [1, "code"], [1, "col-5"], [1, "mx-5"], [3, "id"], ["button", "", 3, "data"], ["body", "", 3, "data", 4, "ngFor", "ngForOf"], ["body", "", 3, "data"]],
      template: function CardOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    <collapse-btn>\n        <info-pay-card ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "></info-pay-card>\n        <description-card ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*ngFor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "></description-card>\n    </collapse-btn>\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "collapse-btn", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "pay-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CardOneComponent_description_card_21_Template, 1, 1, "description-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "card1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataBody);
        }
      },
      directives: [_shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__["CollapseBtnComponent"], _shared_pay_card_pay_card_component__WEBPACK_IMPORTED_MODULE_2__["PayCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_description_card_description_card_component__WEBPACK_IMPORTED_MODULE_4__["DescriptionCardComponent"]],
      styles: ["strong[_ngcontent-%COMP%] {\n  color: hotpink;\n}\nstrong.code[_ngcontent-%COMP%] {\n  color: #56a4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9wYWdlcy9jYXJkLW9uZS9jYXJkLW9uZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZC1vbmUvY2FyZC1vbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQtb25lL2NhcmQtb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Ryb25ne1xuICAgIGNvbG9yOiBob3RwaW5rO1xuICAgICYuY29kZXtcbiAgICAgICAgY29sb3I6IHJnYig4NiwgMTY0LCAyMjgpO1xuICAgIH1cbn0iLCJzdHJvbmcge1xuICBjb2xvcjogaG90cGluaztcbn1cbnN0cm9uZy5jb2RlIHtcbiAgY29sb3I6ICM1NmE0ZTQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card-one',
          templateUrl: './card-one.component.html',
          styleUrls: ['./card-one.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/card-three/card-three.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/card-three/card-three.component.ts ***!
    \**********************************************************/

  /*! exports provided: CardThreeComponent */

  /***/
  function srcAppPagesCardThreeCardThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardThreeComponent", function () {
      return CardThreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/collapse-btn/collapse-btn.component */
    "./src/app/shared/collapse-btn/collapse-btn.component.ts");
    /* harmony import */


    var _shared_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/login-form/login-form.component */
    "./src/app/shared/login-form/login-form.component.ts");

    var CardThreeComponent = /*#__PURE__*/function () {
      function CardThreeComponent() {
        _classCallCheck(this, CardThreeComponent);

        this.dataButton = {
          title: "Login"
        };
      }

      _createClass(CardThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardThreeComponent;
    }();

    CardThreeComponent.ɵfac = function CardThreeComponent_Factory(t) {
      return new (t || CardThreeComponent)();
    };

    CardThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardThreeComponent,
      selectors: [["app-card-three"]],
      decls: 20,
      vars: 1,
      consts: [[1, "row", "mt-5", "pt-5"], [1, "col-7", "code"], [2, "font-size", "22px"], [1, "col-5"], [1, "mx-5"], [3, "id"], ["button", "", 1, "text-left"], ["body", ""]],
      template: function CardThreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    <collapse-btn>\n        <h3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "></h3>\n        <login-form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "></login-form>\n    </collapse-btn>\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "collapse-btn", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-login-form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "card1");
        }
      },
      directives: [_shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__["CollapseBtnComponent"], _shared_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]],
      styles: ["strong[_ngcontent-%COMP%] {\n  color: hotpink;\n}\nstrong.code[_ngcontent-%COMP%] {\n  color: #56a4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9wYWdlcy9jYXJkLXRocmVlL2NhcmQtdGhyZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcmQtdGhyZWUvY2FyZC10aHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZC10aHJlZS9jYXJkLXRocmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Ryb25ne1xuICAgIGNvbG9yOiBob3RwaW5rO1xuICAgICYuY29kZXtcbiAgICAgICAgY29sb3I6IHJnYig4NiwgMTY0LCAyMjgpO1xuICAgIH1cbn0iLCJzdHJvbmcge1xuICBjb2xvcjogaG90cGluaztcbn1cbnN0cm9uZy5jb2RlIHtcbiAgY29sb3I6ICM1NmE0ZTQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card-three',
          templateUrl: './card-three.component.html',
          styleUrls: ['./card-three.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/card-two/card-two.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/card-two/card-two.component.ts ***!
    \******************************************************/

  /*! exports provided: CardTwoComponent */

  /***/
  function srcAppPagesCardTwoCardTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardTwoComponent", function () {
      return CardTwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/collapse-btn/collapse-btn.component */
    "./src/app/shared/collapse-btn/collapse-btn.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_button_pay_card_button_pay_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/button-pay-card/button-pay-card.component */
    "./src/app/shared/button-pay-card/button-pay-card.component.ts");
    /* harmony import */


    var _shared_description_card_lite_description_card_lite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/description-card-lite/description-card-lite.component */
    "./src/app/shared/description-card-lite/description-card-lite.component.ts");

    function CardTwoComponent_description_card_lite_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "description-card-lite", 11);
      }

      if (rf & 2) {
        var debt_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", debt_r1);
      }
    }

    var CardTwoComponent = /*#__PURE__*/function () {
      function CardTwoComponent() {
        _classCallCheck(this, CardTwoComponent);

        this.dataButton = {
          title: "Total",
          debt: 1090
        };
        this.dataBody = [{
          name: "Netflix",
          description: "Lorem Ipsum",
          toPay: 350
        }, {
          name: "Spotify",
          description: "Lorem Ipsum",
          toPay: 260
        }, {
          name: "Mercado Libre",
          description: "Lorem Ipsum",
          toPay: 480
        }];
      }

      _createClass(CardTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardTwoComponent;
    }();

    CardTwoComponent.ɵfac = function CardTwoComponent_Factory(t) {
      return new (t || CardTwoComponent)();
    };

    CardTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardTwoComponent,
      selectors: [["app-card-two"]],
      decls: 28,
      vars: 2,
      consts: [[1, "row", "mt-5", "pt-5"], [1, "col-7", "code"], [2, "font-size", "22px", "margin-left", "0"], [1, "code"], [1, "pt-5", "ml-4"], [1, "col-5"], [1, "mx-5"], [3, "id"], ["button", "", 1, "d-flex", "justify-content-around", "align-items-center"], ["body", ""], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]],
      template: function CardTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    <collapse-btn>\n        <h3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ">Hola!</h3>\n        <ng-container ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ">\n            <description-card-lite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*ngFor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ></description-card-lite>\n            <button-pay-card></button-pay-card>\n        </ng-container>\n    </collapse-btn>\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Si no se quiere renderizar \"div\" adicionales o cualquier otra etiqueta, deberias usar ng-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "collapse-btn", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hola!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CardTwoComponent_description_card_lite_26_Template, 1, 1, "description-card-lite", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-button-pay-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "card2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataBody);
        }
      },
      directives: [_shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__["CollapseBtnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_button_pay_card_button_pay_card_component__WEBPACK_IMPORTED_MODULE_3__["ButtonPayCardComponent"], _shared_description_card_lite_description_card_lite_component__WEBPACK_IMPORTED_MODULE_4__["DescriptionCardLiteComponent"]],
      styles: ["strong[_ngcontent-%COMP%] {\n  color: hotpink;\n}\nstrong.code[_ngcontent-%COMP%] {\n  color: #56a4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9wYWdlcy9jYXJkLXR3by9jYXJkLXR3by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZC10d28vY2FyZC10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQtdHdvL2NhcmQtdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Ryb25ne1xuICAgIGNvbG9yOiBob3RwaW5rO1xuICAgICYuY29kZXtcbiAgICAgICAgY29sb3I6IHJnYig4NiwgMTY0LCAyMjgpO1xuICAgIH1cbn0iLCJzdHJvbmcge1xuICBjb2xvcjogaG90cGluaztcbn1cbnN0cm9uZy5jb2RlIHtcbiAgY29sb3I6ICM1NmE0ZTQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card-two',
          templateUrl: './card-two.component.html',
          styleUrls: ['./card-two.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/cards/cards.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/cards/cards.component.ts ***!
    \************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcAppPagesCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/collapse-btn/collapse-btn.component */
    "./src/app/shared/collapse-btn/collapse-btn.component.ts");
    /* harmony import */


    var _shared_pay_card_pay_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/pay-card/pay-card.component */
    "./src/app/shared/pay-card/pay-card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_button_pay_card_button_pay_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/button-pay-card/button-pay-card.component */
    "./src/app/shared/button-pay-card/button-pay-card.component.ts");
    /* harmony import */


    var _shared_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/login-form/login-form.component */
    "./src/app/shared/login-form/login-form.component.ts");
    /* harmony import */


    var _shared_description_card_description_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/description-card/description-card.component */
    "./src/app/shared/description-card/description-card.component.ts");
    /* harmony import */


    var _shared_description_card_lite_description_card_lite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/description-card-lite/description-card-lite.component */
    "./src/app/shared/description-card-lite/description-card-lite.component.ts");

    function CardsComponent_description_card_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "description-card", 15);
      }

      if (rf & 2) {
        var debt_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", debt_r2);
      }
    }

    function CardsComponent_description_card_lite_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "description-card-lite", 16);
      }

      if (rf & 2) {
        var debt_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", debt_r3);
      }
    }

    var CardsComponent = /*#__PURE__*/function () {
      function CardsComponent() {
        _classCallCheck(this, CardsComponent);

        this.dataButton = {
          title: "Total",
          debt: 1090
        };
        this.dataBody = [{
          name: "Netflix",
          description: "Lorem Ipsum",
          toPay: 350
        }, {
          name: "Spotify",
          description: "Lorem Ipsum",
          toPay: 260
        }, {
          name: "Mercado Libre",
          description: "Lorem Ipsum",
          toPay: 480
        }];
      }

      _createClass(CardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsComponent;
    }();

    CardsComponent.ɵfac = function CardsComponent_Factory(t) {
      return new (t || CardsComponent)();
    };

    CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardsComponent,
      selectors: [["app-cards"]],
      decls: 38,
      vars: 7,
      consts: [[1, "display-3", "text-center", "m-5", "pt-5"], [1, "grid", "mb-5"], [1, "mx-auto"], [3, "id"], ["button", "", 3, "data"], ["body", "", 3, "data", 4, "ngFor", "ngForOf"], ["button", "", 1, "d-flex", "justify-content-around", "align-items-center"], ["body", ""], [3, "data", 4, "ngFor", "ngForOf"], ["button", "", 1, "text-left"], [1, "collapseSection"], [2, "font-weight", "300"], [2, "margin-top", "-10px"], ["button", ""], ["body", "", 1, "mx-auto", "py-5"], ["body", "", 3, "data"], [3, "data"]],
      template: function CardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content Projection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "collapse-btn", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "pay-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardsComponent_description_card_6_Template, 1, 1, "description-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "collapse-btn", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hola!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CardsComponent_description_card_lite_13_Template, 1, 1, "description-card-lite", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-button-pay-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "collapse-btn", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-login-form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "< collapse-btn >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "collapse-btn", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "<ng-content select=\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\"></ng-content>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "<ng-content select=\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\"></ng-content>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "card1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataBody);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "card2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataBody);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "card3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "card4");
        }
      },
      directives: [_shared_collapse_btn_collapse_btn_component__WEBPACK_IMPORTED_MODULE_1__["CollapseBtnComponent"], _shared_pay_card_pay_card_component__WEBPACK_IMPORTED_MODULE_2__["PayCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_button_pay_card_button_pay_card_component__WEBPACK_IMPORTED_MODULE_4__["ButtonPayCardComponent"], _shared_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"], _shared_description_card_description_card_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionCardComponent"], _shared_description_card_lite_description_card_lite_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionCardLiteComponent"]],
      styles: [".grid[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.collapseSection[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nstrong[_ngcontent-%COMP%] {\n  color: hotpink;\n}\n\nstrong.code[_ngcontent-%COMP%] {\n  color: #56a4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9wYWdlcy9jYXJkcy9jYXJkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EscUNBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURESTtFQUNJLGNBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbn1cbi5jb2xsYXBzZVNlY3Rpb257XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc3Ryb25ne1xuICAgIGNvbG9yOiBob3RwaW5rO1xuICAgICYuY29kZXtcbiAgICAgICAgY29sb3I6IHJnYig4NiwgMTY0LCAyMjgpO1xuICAgIH1cbn0iLCIuZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLmNvbGxhcHNlU2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3Ryb25nIHtcbiAgY29sb3I6IGhvdHBpbms7XG59XG5zdHJvbmcuY29kZSB7XG4gIGNvbG9yOiAjNTZhNGU0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cards',
          templateUrl: './cards.component.html',
          styleUrls: ['./cards.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/introduction/introduction.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/introduction/introduction.component.ts ***!
    \**************************************************************/

  /*! exports provided: IntroductionComponent */

  /***/
  function srcAppPagesIntroductionIntroductionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function () {
      return IntroductionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IntroductionComponent = /*#__PURE__*/function () {
      function IntroductionComponent() {
        _classCallCheck(this, IntroductionComponent);
      }

      _createClass(IntroductionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroductionComponent;
    }();

    IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) {
      return new (t || IntroductionComponent)();
    };

    IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroductionComponent,
      selectors: [["app-introduction"]],
      decls: 86,
      vars: 0,
      consts: [[1, "introduction", "mt-5", "pt-5", "container"], [1, "display-3", "text-center", "m-5", "p-5"], [1, "my-5"], [1, "py-5"], [1, "m-5", 2, "font-weight", "400"], [1, "p-5", 2, "font-weight", "300"], [1, "pt-2"], ["src", "https://i.pinimg.com/564x/9a/54/17/9a541707e8b87607f25091fbc4538598.jpg", "alt", "", 1, "pt-5", "mt-5"], ["button", "", 2, "font-weight", "300", "color", "crimson"], ["button", "", 2, "font-weight", "300", "color", "grey"], [2, "color", "crimson"], [1, "text-left", 2, "margin-left", "200px"], [1, "code"], ["button", "", 1, "text-left", 2, "font-weight", "300", "color", "grey", "margin-left", "300px"]],
      template: function IntroductionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content Projection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xBFQu\xE9 es la proyecci\xF3n de contenido?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Es la capacidad de insertar c\xF3digo html u otro componente en un componente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "La proyecci\xF3n de contenido le permite insertar un Shadow DOM en su componente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBFY como se usa?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Simple! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " En nuestro componente utilizaremos: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "<ng-content></ng-content>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Y luego solo colocamos lo que queramos dentro! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "<my-component> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hola!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " </my-component>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xBFProyeccion multiple?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Simple! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Podemos seleccionar que proyectar! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "<ng-content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "select=");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\"div\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "></ng-content>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "<ng-content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "select=");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\"[Selector]\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "></ng-content>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "<ng-content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "select=");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\".Clase\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "></ng-content>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " <my-component>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " <");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ">Hola!<");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "/div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " <div ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Selector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " >Hola!</div> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " <div class=");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\"Clase\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " >Hola!</div> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " </my-component> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".introduction[_ngcontent-%COMP%] {\n  width: 100vw;\n  text-align: center;\n}\n\nstrong[_ngcontent-%COMP%] {\n  color: #3a96ec;\n}\n\nstrong.code[_ngcontent-%COMP%] {\n  color: #e4ab56;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9wYWdlcy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEREk7RUFDSSxjQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvZHVjdGlvbntcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc3Ryb25ne1xuICAgIGNvbG9yOiByZ2IoNTgsIDE1MCwgMjM2KTtcbiAgICAmLmNvZGV7XG4gICAgICAgIGNvbG9yOiByZ2IoMjI4LCAxNzEsIDg2KTtcbiAgICB9XG59IiwiLmludHJvZHVjdGlvbiB7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zdHJvbmcge1xuICBjb2xvcjogIzNhOTZlYztcbn1cbnN0cm9uZy5jb2RlIHtcbiAgY29sb3I6ICNlNGFiNTY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-introduction',
          templateUrl: './introduction.component.html',
          styleUrls: ['./introduction.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/multi-layer/multi-layer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/multi-layer/multi-layer.component.ts ***!
    \************************************************************/

  /*! exports provided: MultiLayerComponent */

  /***/
  function srcAppPagesMultiLayerMultiLayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiLayerComponent", function () {
      return MultiLayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_collapse_btn2_collapse_btn2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/collapse-btn2/collapse-btn2.component */
    "./src/app/shared/collapse-btn2/collapse-btn2.component.ts");

    var MultiLayerComponent = /*#__PURE__*/function () {
      function MultiLayerComponent() {
        _classCallCheck(this, MultiLayerComponent);

        this.dataButton = {
          title: "Hola!",
          debt: 1090
        };
        this.clicksNumber = 0;
      }

      _createClass(MultiLayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "plus",
        value: function plus() {
          this.clicksNumber++;
        }
      }]);

      return MultiLayerComponent;
    }();

    MultiLayerComponent.ɵfac = function MultiLayerComponent_Factory(t) {
      return new (t || MultiLayerComponent)();
    };

    MultiLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiLayerComponent,
      selectors: [["app-multi-layer"]],
      decls: 44,
      vars: 7,
      consts: [[1, "row", "mt-5", "pt-5"], [1, "col-6", "code"], [2, "font-size", "22px", "margin-left", "0"], [1, "text-center"], [1, "col-6"], [1, "mx-5"], [3, "color", "id"], ["button", ""], ["body", "", 3, "color", "id"], ["body", "", 1, "mx-5", "my-3", "p-3", "btn", "btn-info", 2, "font-size", "22px", 3, "click"]],
      template: function MultiLayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    <collapse-btn>\n        <h3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ">Level 1</h3>\n        <collapse-btn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ">\n            <h3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ">Level 2</h3>\n            <collapse-btn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ">\n                <h3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ">Level 3</h3>\n                <button (click)=\"plus()\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ">Emit!</button>\n            </collapse-btn>\n        </collapse-btn>\n    </collapse-btn>\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Clicks!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "collapse-btn2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Level 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "collapse-btn2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "collapse-btn2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Level 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiLayerComponent_Template_button_click_42_listener() {
            return ctx.plus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Click!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clicksNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "red")("id", "card1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "blue")("id", "card2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "yellow")("id", "card3");
        }
      },
      directives: [_shared_collapse_btn2_collapse_btn2_component__WEBPACK_IMPORTED_MODULE_1__["CollapseBtn2Component"]],
      styles: ["strong[_ngcontent-%COMP%] {\n  color: hotpink;\n}\nstrong.code[_ngcontent-%COMP%] {\n  color: #56a4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9wYWdlcy9tdWx0aS1sYXllci9tdWx0aS1sYXllci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXVsdGktbGF5ZXIvbXVsdGktbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL211bHRpLWxheWVyL211bHRpLWxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Ryb25ne1xuICAgIGNvbG9yOiBob3RwaW5rO1xuICAgICYuY29kZXtcbiAgICAgICAgY29sb3I6IHJnYig4NiwgMTY0LCAyMjgpO1xuICAgIH1cbn0iLCJzdHJvbmcge1xuICBjb2xvcjogaG90cGluaztcbn1cbnN0cm9uZy5jb2RlIHtcbiAgY29sb3I6ICM1NmE0ZTQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-multi-layer',
          templateUrl: './multi-layer.component.html',
          styleUrls: ['./multi-layer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/warning/warning.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/warning/warning.component.ts ***!
    \****************************************************/

  /*! exports provided: WarningComponent */

  /***/
  function srcAppPagesWarningWarningComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarningComponent", function () {
      return WarningComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_no_repeat_no_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/no-repeat/no-repeat.component */
    "./src/app/shared/no-repeat/no-repeat.component.ts");

    var WarningComponent = /*#__PURE__*/function () {
      function WarningComponent() {
        _classCallCheck(this, WarningComponent);
      }

      _createClass(WarningComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WarningComponent;
    }();

    WarningComponent.ɵfac = function WarningComponent_Factory(t) {
      return new (t || WarningComponent)();
    };

    WarningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WarningComponent,
      selectors: [["app-warning"]],
      decls: 3,
      vars: 0,
      consts: [[1, "row", "container", "mt-5", "pt-5"]],
      template: function WarningComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-no-repeat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hola! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_no_repeat_no_repeat_component__WEBPACK_IMPORTED_MODULE_1__["NoRepeatComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhcm5pbmcvd2FybmluZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-warning',
          templateUrl: './warning.component.html',
          styleUrls: ['./warning.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/button-pay-card/button-pay-card.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/button-pay-card/button-pay-card.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ButtonPayCardComponent */

  /***/
  function srcAppSharedButtonPayCardButtonPayCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonPayCardComponent", function () {
      return ButtonPayCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ButtonPayCardComponent = /*#__PURE__*/function () {
      function ButtonPayCardComponent() {
        _classCallCheck(this, ButtonPayCardComponent);
      }

      _createClass(ButtonPayCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonPayCardComponent;
    }();

    ButtonPayCardComponent.ɵfac = function ButtonPayCardComponent_Factory(t) {
      return new (t || ButtonPayCardComponent)();
    };

    ButtonPayCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonPayCardComponent,
      selectors: [["app-button-pay-card"]],
      decls: 13,
      vars: 3,
      consts: [[1, "d-flex", "justify-content-between"], [1, "row", "w-100"], [1, "col-12"], [1, "d-flex", "justify-content-around", "mt-3"], [1, "col-6", "btn", "btn-info", "btn-block"]],
      template: function ButtonPayCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pay!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, 1090));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24tcGF5LWNhcmQvYnV0dG9uLXBheS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonPayCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-button-pay-card',
          templateUrl: './button-pay-card.component.html',
          styleUrls: ['./button-pay-card.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/collapse-btn/collapse-btn.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/collapse-btn/collapse-btn.component.ts ***!
    \***************************************************************/

  /*! exports provided: CollapseBtnComponent */

  /***/
  function srcAppSharedCollapseBtnCollapseBtnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollapseBtnComponent", function () {
      return CollapseBtnComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["", "button", ""]], [["", "body", ""]]];
    var _c1 = ["[button]", "[body]"];

    var CollapseBtnComponent = /*#__PURE__*/function () {
      function CollapseBtnComponent() {
        _classCallCheck(this, CollapseBtnComponent);

        this.showBody = false;
      }

      _createClass(CollapseBtnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CollapseBtnComponent;
    }();

    CollapseBtnComponent.ɵfac = function CollapseBtnComponent_Factory(t) {
      return new (t || CollapseBtnComponent)();
    };

    CollapseBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollapseBtnComponent,
      selectors: [["collapse-btn"]],
      inputs: {
        id: "id"
      },
      ngContentSelectors: _c1,
      decls: 7,
      vars: 2,
      consts: [[1, "mt-5"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "btn-title", "btn", "pt-3", "px-3", 2, "width", "350px", 3, "href"], [1, "collapse", "show", 2, "width", "350px", "max-width", "350px", 3, "id"], [1, "card", "card-body"]],
      template: function CollapseBtnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", ctx.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id);
        }
      },
      styles: [".btn-title[_ngcontent-%COMP%] {\n  background: #edf2f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9zaGFyZWQvY29sbGFwc2UtYnRuL2NvbGxhcHNlLWJ0bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbGxhcHNlLWJ0bi9jb2xsYXBzZS1idG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbGxhcHNlLWJ0bi9jb2xsYXBzZS1idG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRpdGxle1xuICAgIGJhY2tncm91bmQ6ICNlZGYyZjc7XG59IiwiLmJ0bi10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYyZjc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapseBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'collapse-btn',
          templateUrl: './collapse-btn.component.html',
          styleUrls: ['./collapse-btn.component.scss']
        }]
      }], function () {
        return [];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/collapse-btn2/collapse-btn2.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/collapse-btn2/collapse-btn2.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CollapseBtn2Component */

  /***/
  function srcAppSharedCollapseBtn2CollapseBtn2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollapseBtn2Component", function () {
      return CollapseBtn2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["", "button", ""]], [["", "body", ""]]];
    var _c1 = ["[button]", "[body]"];

    var CollapseBtn2Component = /*#__PURE__*/function () {
      function CollapseBtn2Component() {
        _classCallCheck(this, CollapseBtn2Component);

        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CollapseBtn2Component, [{
        key: "emit",
        value: function emit() {
          this.clickEvent.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CollapseBtn2Component;
    }();

    CollapseBtn2Component.ɵfac = function CollapseBtn2Component_Factory(t) {
      return new (t || CollapseBtn2Component)();
    };

    CollapseBtn2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollapseBtn2Component,
      selectors: [["collapse-btn2"]],
      inputs: {
        id: "id",
        color: "color"
      },
      outputs: {
        clickEvent: "clickEvent"
      },
      ngContentSelectors: _c1,
      decls: 6,
      vars: 5,
      consts: [[1, "mt-5"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "btn-title", "btn", "pt-3", "px-3", 2, "width", "100%", "min-width", "550px", 3, "href"], [1, "collapse", "show", 2, "width", "100%", "min-width", "400px", 3, "id"]],
      template: function CollapseBtn2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", ctx.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card card-body ", ctx.color, "");
        }
      },
      styles: [".btn-title[_ngcontent-%COMP%] {\n  background: #e5eaf0;\n}\n\n.red[_ngcontent-%COMP%] {\n  background: #e63e3e;\n}\n\n.blue[_ngcontent-%COMP%] {\n  background: #346de7;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background: #fafa45;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptL2tvbGVrdG9yL2NvbnRlbnQtcHJvamVjdGlvbi1hcHAvc3JjL2FwcC9zaGFyZWQvY29sbGFwc2UtYnRuMi9jb2xsYXBzZS1idG4yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29sbGFwc2UtYnRuMi9jb2xsYXBzZS1idG4yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb2xsYXBzZS1idG4yL2NvbGxhcHNlLWJ0bjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRpdGxle1xuICAgIGJhY2tncm91bmQ6ICNlNWVhZjA7XG59XG4ucmVke1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDYyLCA2Mik7XG59XG4uYmx1ZXtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDEwOSwgMjMxKTtcbn1cbi55ZWxsb3d7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCA2OSk7XG59IiwiLmJ0bi10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNlNWVhZjA7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kOiAjZTYzZTNlO1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMzNDZkZTc7XG59XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kOiAjZmFmYTQ1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapseBtn2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'collapse-btn2',
          templateUrl: './collapse-btn2.component.html',
          styleUrls: ['./collapse-btn2.component.scss']
        }]
      }], function () {
        return [];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/description-card-lite/description-card-lite.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/description-card-lite/description-card-lite.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DescriptionCardLiteComponent */

  /***/
  function srcAppSharedDescriptionCardLiteDescriptionCardLiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionCardLiteComponent", function () {
      return DescriptionCardLiteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DescriptionCardLiteComponent = /*#__PURE__*/function () {
      function DescriptionCardLiteComponent() {
        _classCallCheck(this, DescriptionCardLiteComponent);
      }

      _createClass(DescriptionCardLiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DescriptionCardLiteComponent;
    }();

    DescriptionCardLiteComponent.ɵfac = function DescriptionCardLiteComponent_Factory(t) {
      return new (t || DescriptionCardLiteComponent)();
    };

    DescriptionCardLiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DescriptionCardLiteComponent,
      selectors: [["description-card-lite"]],
      inputs: {
        data: "data"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "d-flex", "justify-content-between", "py-1", 2, "background", "none"]],
      template: function DescriptionCardLiteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.data.toPay));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXNjcmlwdGlvbi1jYXJkLWxpdGUvZGVzY3JpcHRpb24tY2FyZC1saXRlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionCardLiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'description-card-lite',
          templateUrl: './description-card-lite.component.html',
          styleUrls: ['./description-card-lite.component.scss']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/description-card/description-card.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/description-card/description-card.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DescriptionCardComponent */

  /***/
  function srcAppSharedDescriptionCardDescriptionCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionCardComponent", function () {
      return DescriptionCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DescriptionCardComponent = /*#__PURE__*/function () {
      function DescriptionCardComponent() {
        _classCallCheck(this, DescriptionCardComponent);
      }

      _createClass(DescriptionCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DescriptionCardComponent;
    }();

    DescriptionCardComponent.ɵfac = function DescriptionCardComponent_Factory(t) {
      return new (t || DescriptionCardComponent)();
    };

    DescriptionCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DescriptionCardComponent,
      selectors: [["description-card"]],
      inputs: {
        data: "data"
      },
      decls: 9,
      vars: 5,
      consts: [[1, "d-flex", "justify-content-between", "py-3", 2, "background", "none"], [1, "text-muted", 2, "margin-bottom", "0"]],
      template: function DescriptionCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.data.toPay));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXNjcmlwdGlvbi1jYXJkL2Rlc2NyaXB0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'description-card',
          templateUrl: './description-card.component.html',
          styleUrls: ['./description-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/login-form/login-form.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/login-form/login-form.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppSharedLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent() {
        _classCallCheck(this, LoginFormComponent);
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)();
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["app-login-form"]],
      decls: 18,
      vars: 0,
      consts: [[1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], [1, "col-6", "mx-auto"], ["type", "submit", 1, "btn", "btn-block", "btn-info"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Check me out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-form',
          templateUrl: './login-form.component.html',
          styleUrls: ['./login-form.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/no-repeat/no-repeat.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/no-repeat/no-repeat.component.ts ***!
    \*********************************************************/

  /*! exports provided: NoRepeatComponent */

  /***/
  function srcAppSharedNoRepeatNoRepeatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoRepeatComponent", function () {
      return NoRepeatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NoRepeatComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*"];

    var NoRepeatComponent = /*#__PURE__*/function () {
      function NoRepeatComponent() {
        _classCallCheck(this, NoRepeatComponent);

        this.myArray = [1, 1, 1, 1, 1];
      }

      _createClass(NoRepeatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NoRepeatComponent;
    }();

    NoRepeatComponent.ɵfac = function NoRepeatComponent_Factory(t) {
      return new (t || NoRepeatComponent)();
    };

    NoRepeatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoRepeatComponent,
      selectors: [["app-no-repeat"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [["class", "m-2", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "card", 2, "min-width", "500px", "min-height", "100px"]],
      template: function NoRepeatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoRepeatComponent_div_0_Template, 3, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myArray);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uby1yZXBlYXQvbm8tcmVwZWF0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoRepeatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-no-repeat',
          templateUrl: './no-repeat.component.html',
          styleUrls: ['./no-repeat.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pay-card/pay-card.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/pay-card/pay-card.component.ts ***!
    \*******************************************************/

  /*! exports provided: PayCardComponent */

  /***/
  function srcAppSharedPayCardPayCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayCardComponent", function () {
      return PayCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PayCardComponent = /*#__PURE__*/function () {
      function PayCardComponent() {
        _classCallCheck(this, PayCardComponent);
      }

      _createClass(PayCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PayCardComponent;
    }();

    PayCardComponent.ɵfac = function PayCardComponent_Factory(t) {
      return new (t || PayCardComponent)();
    };

    PayCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PayCardComponent,
      selectors: [["pay-card"]],
      inputs: {
        data: "data"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "pay-card", "d-flex", "justify-content-between", "mx-2"], [2, "font-weight", "300"]],
      template: function PayCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.data.debt));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYXktY2FyZC9wYXktY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pay-card',
          templateUrl: './pay-card.component.html',
          styleUrls: ['./pay-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/jm/kolektor/content-projection-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map