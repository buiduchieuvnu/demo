(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*****************************************!*\
  !*** multi ./projects/main/src/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\VNPT-IT\CHUNG\hc_code_research\simple-his\projects\main\src\main.ts */"jxI8");


/***/ }),

/***/ "0Gkf":
/*!*******************************************************!*\
  !*** ./projects/main/src/app/layout/layout.module.ts ***!
  \*******************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "Ok17");
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty/empty.component */ "plwP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var commonLibrary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! commonLibrary */ "Y2bn");








class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            commonLibrary__WEBPACK_IMPORTED_MODULE_6__["OnehealthModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _empty_empty_component__WEBPACK_IMPORTED_MODULE_4__["EmptyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        commonLibrary__WEBPACK_IMPORTED_MODULE_6__["OnehealthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _empty_empty_component__WEBPACK_IMPORTED_MODULE_4__["EmptyComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                    commonLibrary__WEBPACK_IMPORTED_MODULE_6__["OnehealthModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "MUdv":
/*!********************************************************************!*\
  !*** ./projects/main/$$_lazy_route_resource lazy namespace object ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "MUdv";

/***/ }),

/***/ "Ok17":
/*!*************************************************************!*\
  !*** ./projects/main/src/app/layout/home/home.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @onehealth/ui/tabs */ "q+Fo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @onehealth/ui/core/transition-patch */ "DHab");
/* harmony import */ var _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @onehealth/ui/icon */ "wqdl");









const _c0 = function (a0) { return [a0]; };
function HomeComponent_oh_tab_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, tab_r1.link))("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ohType", tab_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", tab_r1.name, " ");
} }
function HomeComponent_oh_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "oh-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_oh_tab_1_a_1_Template, 3, 6, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(titleService, route, router) {
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.list = [
            {
                name: "Trang chủ",
                link: "/home",
                icon: "Home",
            },
            {
                name: "Khám bệnh",
                link: "/khambenh",
                icon: "Health",
            },
            {
                name: "Hệ Thống ",
                link: "/khambenh",
                icon: "Settings",
            },
            {
                name: "Danh Mục",
                link: "/khambenh",
                icon: "ms-Icon ms-Icon--AlignJustify",
            },
            {
                name: "Người Dùng",
                link: "/khambenh",
                icon: "ms-Icon ms-Icon--People",
            },
            {
                name: "Kết thúc",
                link: "/khambenh",
                icon: "ms-Icon ms-Icon--StatusCircleErrorX",
            },
        ];
    }
    ngAfterViewInit() {
        this.router.events.subscribe((event) => {
            var _a;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"] ||
                (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["Scroll"] && event.routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"])) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                    this.url = event.url;
                }
                else {
                    this.url = event.routerEvent.url;
                }
                const data = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
                if (data) {
                    this.title = data["title"];
                    this.titleService.setTitle(`${this.title ? this.title + " | " : ""} HIS`);
                }
                else {
                    this.getRouterActive(this.route);
                }
            }
            else {
                this.getRouterActive(this.route);
            }
        });
        window.dispatchEvent(new Event("resize"));
    }
    getRouterActive(active) {
        if (active.firstChild) {
            this.getRouterActive(active.firstChild);
        }
        else {
            active.data.subscribe((data) => {
                if (data) {
                    this.title = data["title"];
                    this.titleService.setTitle(`${this.title ? this.title + " | " : ""} HIS`);
                }
            });
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["layout-home"]], decls: 2, vars: 1, consts: [["ohLinkRouter", "", "ohType", "card", "ohSize", "small"], [4, "ngFor", "ngForOf"], ["oh-tab-link", "", 3, "routerLink", "routerLinkActive", 4, "ohTabLink"], ["oh-tab-link", "", 3, "routerLink", "routerLinkActive"], ["oh-icon", "", "ohSize", "xs", 3, "ohType"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "oh-tabset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_oh_tab_1_Template, 3, 0, "oh-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_3__["OHTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_3__["OHTabComponent"], _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_3__["OHTabLinkTemplateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_3__["OHTabLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵVTransitionPatchDirective"], _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconDirective"]], styles: [".ui-tabs-card.ui-tabs-small > .ui-tabs-nav .ui-tabs-tab {\r\n  padding: 3px 5px;\r\n}\r\n  .ui-tabs-tab .ms-Icon {\r\n  margin-right: 5px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAudWktdGFicy1jYXJkLnVpLXRhYnMtc21hbGwgPiAudWktdGFicy1uYXYgLnVpLXRhYnMtdGFiIHtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG59XHJcbjo6bmctZGVlcCAudWktdGFicy10YWIgLm1zLUljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "layout-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, null); })();


/***/ }),

/***/ "Uzga":
/*!*******************************************************!*\
  !*** ./projects/main/src/environments/environment.ts ***!
  \*******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "WGIU":
/*!*********************************************!*\
  !*** ./projects/main/src/app/app.module.ts ***!
  \*********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "k4xx");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "dhJt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/vi */ "jwGQ");
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var commonLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! commonLibrary */ "Y2bn");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.module */ "0Gkf");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            commonLibrary__WEBPACK_IMPORTED_MODULE_8__["CommonLibraryModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            commonLibrary__WEBPACK_IMPORTED_MODULE_8__["OnehealthModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        commonLibrary__WEBPACK_IMPORTED_MODULE_8__["CommonLibraryModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        commonLibrary__WEBPACK_IMPORTED_MODULE_8__["OnehealthModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    commonLibrary__WEBPACK_IMPORTED_MODULE_8__["CommonLibraryModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    commonLibrary__WEBPACK_IMPORTED_MODULE_8__["OnehealthModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Y2bn":
/*!*******************************************************!*\
  !*** ./dist/common-library/fesm2015/commonLibrary.js ***!
  \*******************************************************/
/*! exports provided: Account, ActionBar, ActionItemComponent, ActiveUrlCheckPipe, AppService, AssetUrlPipe, AuthGuardService, AuthService, BlankPageComponent, BottombarComponent, ChangeDateTimePipe, CommonLibraryModule, ConfirmationService, Constants, ContexualActionBarComponent, DrawerContentComponent, ITEMS_PER_PAGE, InterceptedHttp, LoadingService, MainContentComponent, MyValidator, NestedService, OPERATIONS, OnehealthModule, PAGE_SIZE_OPTION, RequestOptions, SubMenuComponent, ToolbarComponent, ToolbarItemComponent, Utilities, demoValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBar", function() { return ActionBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionItemComponent", function() { return ActionItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveUrlCheckPipe", function() { return ActiveUrlCheckPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetUrlPipe", function() { return AssetUrlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottombarComponent", function() { return BottombarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDateTimePipe", function() { return ChangeDateTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLibraryModule", function() { return CommonLibraryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContexualActionBarComponent", function() { return ContexualActionBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContentComponent", function() { return DrawerContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_PER_PAGE", function() { return ITEMS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptedHttp", function() { return InterceptedHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyValidator", function() { return MyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedService", function() { return NestedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATIONS", function() { return OPERATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnehealthModule", function() { return OnehealthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE_OPTION", function() { return PAGE_SIZE_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuComponent", function() { return SubMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarItemComponent", function() { return ToolbarItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoValid", function() { return demoValid; });
/* harmony import */ var _onehealth_ui_action_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @onehealth/ui/action-bar */ "wqzm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @onehealth/ui/button */ "KyUM");
/* harmony import */ var _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @onehealth/ui/core/transition-patch */ "DHab");
/* harmony import */ var _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @onehealth/ui/icon */ "wqdl");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/add/operator/catch */ "S7rW");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _onehealth_ui_notification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @onehealth/ui/notification */ "eiWF");
/* harmony import */ var _onehealth_ui_affix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @onehealth/ui/affix */ "Ym1G");
/* harmony import */ var _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @onehealth/ui/grid */ "0nAM");
/* harmony import */ var _onehealth_ui_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @onehealth/ui/tooltip */ "WTAL");
/* harmony import */ var _onehealth_ui_typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @onehealth/ui/typography */ "ECEz");
/* harmony import */ var _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @onehealth/ui/menu */ "STxl");
/* harmony import */ var _onehealth_ui_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @onehealth/ui/dropdown */ "tp/F");
/* harmony import */ var _onehealth_ui_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @onehealth/ui/divider */ "V7Pd");
/* harmony import */ var _onehealth_ui_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @onehealth/ui/alert */ "FaHp");
/* harmony import */ var _onehealth_ui_anchor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @onehealth/ui/anchor */ "19ql");
/* harmony import */ var _onehealth_ui_auto_complete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @onehealth/ui/auto-complete */ "eAZM");
/* harmony import */ var _onehealth_ui_avatar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @onehealth/ui/avatar */ "4Ah/");
/* harmony import */ var _onehealth_ui_back_top__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @onehealth/ui/back-top */ "C4Cm");
/* harmony import */ var _onehealth_ui_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @onehealth/ui/badge */ "Eod9");
/* harmony import */ var _onehealth_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @onehealth/ui/breadcrumb */ "V+hS");
/* harmony import */ var _onehealth_ui_calendar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @onehealth/ui/calendar */ "Amef");
/* harmony import */ var _onehealth_ui_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @onehealth/ui/card */ "29pj");
/* harmony import */ var _onehealth_ui_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @onehealth/ui/carousel */ "Iwkw");
/* harmony import */ var _onehealth_ui_cascader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @onehealth/ui/cascader */ "hNRx");
/* harmony import */ var _onehealth_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @onehealth/ui/checkbox */ "h59+");
/* harmony import */ var _onehealth_ui_collapse__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @onehealth/ui/collapse */ "paTQ");
/* harmony import */ var _onehealth_ui_comment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @onehealth/ui/comment */ "0kks");
/* harmony import */ var _onehealth_ui_core_no_animation__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @onehealth/ui/core/no-animation */ "/GYz");
/* harmony import */ var _onehealth_ui_core_trans_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @onehealth/ui/core/trans-button */ "l494");
/* harmony import */ var _onehealth_ui_core_wave__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @onehealth/ui/core/wave */ "y4tk");
/* harmony import */ var _onehealth_ui_date_picker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @onehealth/ui/date-picker */ "RB1W");
/* harmony import */ var _onehealth_ui_descriptions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @onehealth/ui/descriptions */ "5N5L");
/* harmony import */ var _onehealth_ui_drawer__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @onehealth/ui/drawer */ "Egle");
/* harmony import */ var _onehealth_ui_empty__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @onehealth/ui/empty */ "RudH");
/* harmony import */ var _onehealth_ui_form__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @onehealth/ui/form */ "bE5Y");
/* harmony import */ var _onehealth_ui_i18n__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @onehealth/ui/i18n */ "1iqB");
/* harmony import */ var _onehealth_ui_image__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @onehealth/ui/image */ "AZ2S");
/* harmony import */ var _onehealth_ui_input__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @onehealth/ui/input */ "RqFn");
/* harmony import */ var _onehealth_ui_input_number__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @onehealth/ui/input-number */ "6rZn");
/* harmony import */ var _onehealth_ui_layout__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @onehealth/ui/layout */ "vXIS");
/* harmony import */ var _onehealth_ui_list__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @onehealth/ui/list */ "AF6R");
/* harmony import */ var _onehealth_ui_mention__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @onehealth/ui/mention */ "ju3P");
/* harmony import */ var _onehealth_ui_message__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @onehealth/ui/message */ "UazM");
/* harmony import */ var _onehealth_ui_modal__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @onehealth/ui/modal */ "fBKJ");
/* harmony import */ var _onehealth_ui_page_header__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @onehealth/ui/page-header */ "l6B2");
/* harmony import */ var _onehealth_ui_pagination__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @onehealth/ui/pagination */ "JEq1");
/* harmony import */ var _onehealth_ui_popconfirm__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @onehealth/ui/popconfirm */ "jLhV");
/* harmony import */ var _onehealth_ui_popover__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @onehealth/ui/popover */ "rlQ4");
/* harmony import */ var _onehealth_ui_progress__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @onehealth/ui/progress */ "7oNA");
/* harmony import */ var _onehealth_ui_radio__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @onehealth/ui/radio */ "UksP");
/* harmony import */ var _onehealth_ui_rate__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @onehealth/ui/rate */ "OyOO");
/* harmony import */ var _onehealth_ui_result__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @onehealth/ui/result */ "vN2r");
/* harmony import */ var _onehealth_ui_select__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @onehealth/ui/select */ "8r1f");
/* harmony import */ var _onehealth_ui_skeleton__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @onehealth/ui/skeleton */ "MkYX");
/* harmony import */ var _onehealth_ui_slider__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @onehealth/ui/slider */ "Nfyn");
/* harmony import */ var _onehealth_ui_space__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @onehealth/ui/space */ "63cp");
/* harmony import */ var _onehealth_ui_spin__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @onehealth/ui/spin */ "QYck");
/* harmony import */ var _onehealth_ui_statistic__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @onehealth/ui/statistic */ "OLvM");
/* harmony import */ var _onehealth_ui_steps__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @onehealth/ui/steps */ "KshN");
/* harmony import */ var _onehealth_ui_switch__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @onehealth/ui/switch */ "NsGU");
/* harmony import */ var _onehealth_ui_table__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @onehealth/ui/table */ "1hCI");
/* harmony import */ var _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @onehealth/ui/tabs */ "q+Fo");
/* harmony import */ var _onehealth_ui_tag__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @onehealth/ui/tag */ "eKQ6");
/* harmony import */ var _onehealth_ui_time_picker__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @onehealth/ui/time-picker */ "6m0n");
/* harmony import */ var _onehealth_ui_timeline__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @onehealth/ui/timeline */ "35oq");
/* harmony import */ var _onehealth_ui_transfer__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @onehealth/ui/transfer */ "hk/h");
/* harmony import */ var _onehealth_ui_tree__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @onehealth/ui/tree */ "3eqr");
/* harmony import */ var _onehealth_ui_tree_view__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @onehealth/ui/tree-view */ "6z8L");
/* harmony import */ var _onehealth_ui_tree_select__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @onehealth/ui/tree-select */ "EO3t");
/* harmony import */ var _onehealth_ui_upload__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @onehealth/ui/upload */ "rycE");
/* harmony import */ var _onehealth_ui_resizable__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @onehealth/ui/resizable */ "DTL2");
/* harmony import */ var _onehealth_ui_pipes__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @onehealth/ui/pipes */ "T8l2");
/* harmony import */ var _onehealth_ui_code_editor__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @onehealth/ui/code-editor */ "DPoQ");
/* harmony import */ var _onehealth_ui_core_config__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @onehealth/ui/core/config */ "2/rT");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _onehealth_ui_logo__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @onehealth/ui/logo */ "8HMa");






































































































function BlankPageComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlankPageComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onCloseClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0$5 = ["*"];
class BlankPageComponent {
    constructor() {
        this.close = true;
        this.title = 'emptypage';
    }
    ngOnInit() { }
    onCloseClick() {
        window.history.back();
    }
}
BlankPageComponent.ɵfac = function BlankPageComponent_Factory(t) { return new (t || BlankPageComponent)(); };
BlankPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlankPageComponent, selectors: [["oh-page"]], inputs: { close: "close" }, ngContentSelectors: _c0$5, decls: 3, vars: 1, consts: [["oh-button", "", "ohType", "text", "class", "close-btn", 3, "click", 4, "ngIf"], [1, "content-area"], ["oh-button", "", "ohType", "text", 1, "close-btn", 3, "click"], ["oh-icon", "", "ohType", "Clear"]], template: function BlankPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlankPageComponent_button_0_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.close);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__["OHButtonComponent"], _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵVTransitionPatchDirective"], _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconDirective"]], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:30px;padding:0;font-size:12px;text-align:center;line-height:36px;width:36px;height:36px;cursor:pointer;z-index:98;color:#666;top:100px}.close-btn[_ngcontent-%COMP%]   .ms-Icon[_ngcontent-%COMP%]{font-size:14px}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}@media only screen and (max-width:992px){.close-btn[_ngcontent-%COMP%]{position:fixed;right:10px;top:0;margin-top:0;background:#fff}}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BlankPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'oh-page',
                templateUrl: './blank.page.component.html',
                styleUrls: ['./blank.page.component.css'],
            }]
    }], null, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serverURL: '/hisweb',
    apiUrl: 'https://test-onehealth.vncare.vn/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

class StateStorageService {
    constructor($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
        this.previousUrlKey = 'previousUrl';
    }
    storeUrl(url) {
        this.$sessionStorage.store(this.previousUrlKey, url);
    }
    getUrl() {
        return this.$sessionStorage.retrieve(this.previousUrlKey);
    }
    clearUrl() {
        this.$sessionStorage.clear(this.previousUrlKey);
    }
}
StateStorageService.ɵfac = function StateStorageService_Factory(t) { return new (t || StateStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"])); };
StateStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StateStorageService, factory: StateStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](StateStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"] }]; }, null); })();

class AccountService {
    constructor(sessionStorage, stateStorageService, http, router) {
        this.sessionStorage = sessionStorage;
        this.stateStorageService = stateStorageService;
        this.http = http;
        this.router = router;
        this.userIdentity = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1);
        this.resourceUrl = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()
            ? environment.apiUrl
            : window.location.origin + '/';
    }
    save(account) {
        return this.http.post(this.resourceUrl + 'api/account', account);
    }
    authenticate(identity) {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
    }
    hasAnyAuthority(authorities) {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority) => authorities.includes(authority));
    }
    identity(force) {
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.accountCache$ = this.fetch().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((account) => {
                this.authenticate(account);
                // After retrieve the account info, the language will be changed to
                // the user's preferred language configured in the account setting
                if (account && account.langKey) {
                    const langKey = this.sessionStorage.retrieve('locale') || account.langKey;
                }
                if (account) {
                    this.navigateToStoredUrl();
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["shareReplay"])());
        }
        return this.accountCache$;
    }
    isAuthenticated() {
        return this.userIdentity !== null;
    }
    getAuthenticationState() {
        return this.authenticationState.asObservable();
    }
    getImageUrl() {
        return this.userIdentity ? this.userIdentity.imageUrl : '';
    }
    fetch() {
        return this.http.get(this.resourceUrl + 'api/account');
    }
    fetchN() {
        return this.http.get(this.resourceUrl + 'api/common/taikhoan/info', {
            observe: 'response',
        });
    }
    getMenu(dichvu) {
        return this.http.get(this.resourceUrl + 'api/common/taikhoan/quyen?maNhom=' + dichvu, { observe: 'response' });
    }
    navigateToStoredUrl() {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        const previousUrl = this.stateStorageService.getUrl();
        if (previousUrl) {
            this.stateStorageService.clearUrl();
            this.router.navigateByUrl(previousUrl);
        }
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](StateStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"] }, { type: StateStorageService }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();

class AuthService {
    constructor(http, $localStorage, $sessionStorage, acountService, router) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
        this.acountService = acountService;
        this.router = router;
        this.resourceUrl = environment.apiUrl;
    }
    changeResourceUrl(url) {
        this.resourceUrl = url;
    }
    getToken() {
        return (this.$localStorage.retrieve("authenticationToken") ||
            this.$sessionStorage.retrieve("authenticationToken") ||
            "");
    }
    isLogin() {
        if (this.$localStorage.retrieve("authenticationToken")) {
            return true;
        }
        else
            return false;
    }
    loginN(credentials, option) {
        return this.http.post(this.resourceUrl + "api/common/public" + option, credentials, { observe: "response" });
    }
    login(credentials) {
        return this.http
            .post(this.resourceUrl + "api/common/public/login", credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => this.authenticateSuccess(response, credentials.rememberMe)));
    }
    reloadByLocal(token, isChanged = false) {
        this.$localStorage.store("authenticationToken", token);
        setTimeout(() => {
            this.getUserInfo(isChanged);
        }, 1000);
    }
    getUserInfo(isChanged) {
        this.acountService.fetchN().subscribe((response) => {
            if (response.body) {
                this.$localStorage.store("info", response.body.data);
                setTimeout(() => {
                    if (!isChanged) {
                        this.backtoDashboard();
                    }
                    else {
                        window.location.reload();
                    }
                }, 500);
            }
        });
    }
    logout() {
        this.$localStorage.clear();
        this.$sessionStorage.clear();
        setTimeout(() => {
            this.backtoLogin();
        }, 100);
        return;
    }
    getCurrentUser() {
        try {
            const currentUserStr = this.$localStorage.retrieve("info");
            if (currentUserStr && typeof currentUserStr === "string") {
                const currentUser = JSON.parse(currentUserStr);
                return currentUser;
            }
            else if (currentUserStr && typeof currentUserStr === "object") {
                return currentUserStr;
            }
        }
        catch (e) { }
        return null;
    }
    authenticateSuccess(response, rememberMe) {
        if (response.code !== 0) {
            return;
        }
        const jwt = response.data.token;
        if (rememberMe) {
            this.$localStorage.store("authenticationToken", jwt);
        }
        else {
            this.$sessionStorage.store("authenticationToken", jwt);
        }
    }
    errorPage(error_code, data) {
        this.router.navigate([
            "/errorpage?error_code=" + error_code + "&message='" + data + "'",
        ]);
    }
    backtoDashboard() {
        this.router.navigate([environment.serverURL + "/home"]);
    }
    backtoLogin() {
        this.router.navigate([environment.serverURL + "/login"]);
    }
    checkLogin() {
        let accessToken = AuthService.prototype.$localStorage.retrieve("authenticationToken");
        if (!accessToken)
            this.backtoLogin();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"] }, { type: AccountService }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();

class Constants {
}
Constants.DEVICE_MOBILE = 1;
Constants.DEVICE_TABLET = 2;
Constants.DEVICE_DESKTOP = 3;
Constants.CACHE_ALL_API = 'list:api:all';
Constants.CACHE_ALL_GROUP = 'list:group:all';
Constants.CACHE_ALL_REGION = 'list:region:all';
Constants.CACHE_ALL_SERVICE_TYPE = 'list:service_type:all';
Constants.CACHE_USER_DETAIL = 'user:detail';
Constants.CACHE_TOKEN = 'user:token';
Constants.CACHE_FEATURED_APPS = 'list:featured:apps';
Constants.CACHE_NOTIFICATION_LIST = 'list:notifications';
Constants.CACHE_REQUESTS_LIST = 'list:cached-requests';
Constants.CACHE_REQUESTS_TTL = 600000; // in milisec, 600 000 ms = 10 minutes

class RequestOptions extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"] {
    constructor(cache = false, ttl = Constants.CACHE_REQUESTS_TTL, errorPassing = false, noToken = false) {
        super();
        this.cache = cache;
        this.ttl = ttl;
        this.errorPassing = errorPassing;
        this.noToken = noToken;
    }
}

class InterceptedHttp {
    constructor(auth, notificationService) {
        this.auth = auth;
        this.notificationService = notificationService;
        this.apiURL = localStorage.getItem('api:url:base');
        this.origin = localStorage.getItem('enviroment:origin');
    }
    intercept(req, next) {
        if (!/^(http|https):/i.test(req.url)) {
            req = req.clone({ url: this.apiURL + req.url });
        }
        else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            });
        }
        return this.sendRequest(req, next);
    }
    sendRequest(req, next) {
        if (!this.isNoToken(req)) {
            if (!req.headers.has(InterceptedHttp.SKIP_AUTHOR)) {
                let accessToken = this.auth.getToken();
                if (accessToken) {
                    if (req.headers == null || req.headers === undefined) {
                        req = req.clone({
                            setHeaders: {
                                'Content-Type': 'application/json; charset=utf-8',
                                Authorization: 'Bearer ' + accessToken,
                            },
                        });
                    }
                    else {
                        req = req.clone({
                            setHeaders: {
                                'Content-Type': 'application/json; charset=utf-8',
                                Authorization: 'Bearer ' + accessToken,
                            },
                        });
                    }
                }
            }
            else {
                req = req.clone({
                    headers: req.headers,
                });
            }
        }
        if (!/^(http|https):/i.test(req.url)) {
            req = req.clone({ url: this.apiURL + req.url });
        }
        else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            });
        }
        return next
            .handle(req)
            .catch((error) => {
            var _a, _b, _c, _d, _e, _f;
            if (error.status || (error.error && ((_a = error.error) === null || _a === void 0 ? void 0 : _a.code))) {
                if (error.status === 401 || ((_b = error.error) === null || _b === void 0 ? void 0 : _b.code) === 401) {
                    this.notificationService.error('Bạn chưa đăng nhập, vui lòng đăng nhập', 'Lỗi đăng nhập');
                    this.auth.logout();
                    return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(error);
                }
                else if (error.status === 403 || ((_c = error.error) === null || _c === void 0 ? void 0 : _c.code) === 403) {
                    this.notificationService.error('Bạn không có quyền truy cập vào chức năng này', 'Lỗi truy nhập');
                    this.auth.backtoDashboard();
                    return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(error);
                }
                else if (error.status === 463 || ((_d = error.error) === null || _d === void 0 ? void 0 : _d.code) === 463) {
                    this.notificationService.error('Token đã hết hạn', 'Lỗi truy nhập');
                    this.auth.logout();
                    return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(error);
                }
                else {
                    if (error.error && ((_e = error.error) === null || _e === void 0 ? void 0 : _e.code)) {
                        this.notificationService.error('Lỗi: ' + ((_f = error.error) === null || _f === void 0 ? void 0 : _f.code) + ': ' + error.error.message + '', 'Lỗi kết nối');
                    }
                    else {
                        if (error.status && !this.isErrorPassing(req)) {
                            this.auth.errorPage(error.status, req.url + ' Response: ' + error.message);
                        }
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(error);
                }
            }
            else {
                if (!this.isErrorPassing(req)) {
                    if (error.message)
                        this.auth.errorPage(0, req.url + ' Response: ' + error.message);
                    else
                        this.auth.errorPage(0, 'Lỗi không xác định');
                }
                return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(error);
            }
        });
    }
    isErrorPassing(req) {
        return req.params instanceof RequestOptions && req.params.errorPassing;
    }
    isNoToken(req) {
        return req.params instanceof RequestOptions && req.params.noToken;
    }
}
InterceptedHttp.SKIP_AUTHOR = 'Skip-Authorization';
InterceptedHttp.ɵfac = function InterceptedHttp_Factory(t) { return new (t || InterceptedHttp)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_onehealth_ui_notification__WEBPACK_IMPORTED_MODULE_13__["OHNotificationService"])); };
InterceptedHttp.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InterceptedHttp, factory: InterceptedHttp.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InterceptedHttp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: AuthService }, { type: _onehealth_ui_notification__WEBPACK_IMPORTED_MODULE_13__["OHNotificationService"] }]; }, null); })();

function ContexualActionBarComponent_oh_affix_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ContexualActionBarComponent_oh_affix_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0$4 = function (a0) { return { "background-color": a0 }; };
function ContexualActionBarComponent_oh_affix_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "oh-affix", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContexualActionBarComponent_oh_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContexualActionBarComponent_oh_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohOffsetTop", ctx_r0.fixAtTop);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0$4, ctx_r0.bgColor ? ctx_r0.bgColor : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.right);
} }
function ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ContexualActionBarComponent_ng_template_1_oh_affix_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "oh-affix", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohOffsetBottom", ctx_r7.fixAtBottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.right);
} }
function ContexualActionBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ContexualActionBarComponent_ng_template_1_oh_affix_0_Template, 6, 3, "oh-affix", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.fixAtBottom)("ngIfElse", _r3);
} }
function ContexualActionBarComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ContexualActionBarComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ContexualActionBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "oh-affix", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContexualActionBarComponent_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContexualActionBarComponent_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohOffsetTop", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.right);
} }
class ContexualActionBarComponent {
    constructor() { }
    ngOnInit() { }
    close() { }
}
ContexualActionBarComponent.ɵfac = function ContexualActionBarComponent_Factory(t) { return new (t || ContexualActionBarComponent)(); };
ContexualActionBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContexualActionBarComponent, selectors: [["contexual-actionbar"]], inputs: { left: "left", right: "right", fixAtTop: "fixAtTop", fixAtBottom: "fixAtBottom", bgColor: "bgColor" }, decls: 5, vars: 2, consts: [[3, "ohOffsetTop", 4, "ngIf", "ngIfElse"], ["elseFixAtTop", ""], ["default", ""], [3, "ohOffsetTop"], ["oh-row", "", 1, "context-actionbar-wrapper", 3, "ngStyle"], ["oh-col", "", "ohXs", "14", "ohSm", "14", "ohMd", "14", "ohLg", "18", "ohXl", "18", 1, "actionbar-left"], [4, "ngTemplateOutlet"], ["oh-col", "", "ohXs", "10", "ohSm", "10", "ohMd", "10", "ohLg", "6", "ohXl", "6", 1, "actionbar-right", 2, "text-align", "right"], [3, "ohOffsetBottom", 4, "ngIf", "ngIfElse"], [3, "ohOffsetBottom"], ["oh-row", "", 1, "context-actionbar-wrapper"]], template: function ContexualActionBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ContexualActionBarComponent_oh_affix_0_Template, 6, 6, "oh-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContexualActionBarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContexualActionBarComponent_ng_template_3_Template, 6, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fixAtTop)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_affix__WEBPACK_IMPORTED_MODULE_14__["OHAffixComponent"], _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], styles: [".context-actionbar-wrapper[_ngcontent-%COMP%]{background-color:#fafafa;z-index:99;padding:4px 30px}.ui-dropdown-trigger[_ngcontent-%COMP%] > .ms-Icon[_ngcontent-%COMP%]{font-size:16px}@media only screen and (max-width:576px){.context-actionbar-wrapper[_ngcontent-%COMP%]{padding:4px 10px}}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContexualActionBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'contexual-actionbar',
                templateUrl: './action.bar.component.html',
                styleUrls: ['./action.bar.component.css'],
            }]
    }], function () { return []; }, { left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], fixAtTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], fixAtBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

function ActionItemComponent_button_0_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", ctx_r3.iconSrc)("ohColor", ctx_r3.color);
} }
function ActionItemComponent_button_0_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohType", ctx_r6.icon)("ohColor", ctx_r6.color);
} }
function ActionItemComponent_button_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ActionItemComponent_button_0_ng_template_2_i_0_Template, 1, 2, "i", 6);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.icon);
} }
function ActionItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ActionItemComponent_button_0_i_1_Template, 1, 2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ActionItemComponent_button_0_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohTooltipTitle", ctx_r0.title)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.iconSrc)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.text);
} }
function ActionItemComponent_ng_template_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", ctx_r7.iconSrc)("ohColor", ctx_r7.color);
} }
function ActionItemComponent_ng_template_1_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohType", ctx_r10.icon)("ohColor", ctx_r10.color);
} }
function ActionItemComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ActionItemComponent_ng_template_1_ng_template_2_i_0_Template, 1, 2, "i", 6);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.icon);
} }
function ActionItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ActionItemComponent_ng_template_1_i_1_Template, 1, 2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ActionItemComponent_ng_template_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohTooltipTitle", ctx_r2.title)("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.iconSrc)("ngIfElse", _r8);
} }
class ActionItemComponent {
    constructor() {
        this.color = 'primary';
        this.disabled = false;
    }
    ngOnInit() { }
    close() { }
}
ActionItemComponent.ɵfac = function ActionItemComponent_Factory(t) { return new (t || ActionItemComponent)(); };
ActionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ActionItemComponent, selectors: [["action-item"]], inputs: { text: "text", icon: "icon", iconSrc: "iconSrc", color: "color", title: "title", disabled: "disabled" }, decls: 3, vars: 2, consts: [["oh-button", "", "ohType", "text", "oh-tooltip", "", "class", "action-item-btn", 3, "ohTooltipTitle", "disabled", 4, "ngIf", "ngIfElse"], ["notext", ""], ["oh-button", "", "ohType", "text", "oh-tooltip", "", 1, "action-item-btn", 3, "ohTooltipTitle", "disabled"], ["oh-icon", "", 3, "ohSrc", "ohColor", 4, "ngIf", "ngIfElse"], ["elseSrc", ""], ["oh-icon", "", 3, "ohSrc", "ohColor"], ["oh-icon", "", 3, "ohType", "ohColor", 4, "ngIf"], ["oh-icon", "", 3, "ohType", "ohColor"]], template: function ActionItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ActionItemComponent_button_0_Template, 6, 5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ActionItemComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.text)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__["OHButtonComponent"], _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵVTransitionPatchDirective"], _onehealth_ui_tooltip__WEBPACK_IMPORTED_MODULE_16__["OHTooltipDirective"], _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconDirective"]], styles: [".action-item-btn[_ngcontent-%COMP%]{margin:0 5px}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ActionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'action-item',
                templateUrl: './action.item.component.html',
                styleUrls: ['./action.item.component.css'],
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], iconSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

function MainContentComponent_div_1_oh_action_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "oh-action-bar", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohConfigs", ctx_r1.actionBar.list)("ohCount", ctx_r1.actionBar.count);
} }
function MainContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MainContentComponent_div_1_oh_action_bar_3_Template, 1, 2, "oh-action-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.actionBar);
} }
const _c0$3 = ["*"];
class ActionBar {
}
class MainContentComponent {
    ngOnInit() { }
    ngAfterViewInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 1000);
    }
}
MainContentComponent.ɵfac = function MainContentComponent_Factory(t) { return new (t || MainContentComponent)(); };
MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainContentComponent, selectors: [["oh-main-content"]], inputs: { title: "title", actionBar: "actionBar" }, ngContentSelectors: _c0$3, decls: 4, vars: 1, consts: [[1, "layout-wr", "pt-2", "pt-md-4", "px-2", "px-md-7"], ["id", "content-header", "class", "d-flex align-items-end justify-content-between", 4, "ngIf"], ["id", "content-area"], ["id", "content-header", 1, "d-flex", "align-items-end", "justify-content-between"], ["oh-typography", "", 1, "mb-3", "mb-md-4"], [3, "ohConfigs", "ohCount", 4, "ngIf"], [3, "ohConfigs", "ohCount"]], template: function MainContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainContentComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title || ctx.actionBar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_typography__WEBPACK_IMPORTED_MODULE_17__["OHTypographyComponent"], _onehealth_ui_action_bar__WEBPACK_IMPORTED_MODULE_0__["OHActionBarComponent"]], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:60px;padding:0 10px;margin-top:0;cursor:pointer}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}.page-title[_ngcontent-%COMP%]{margin-bottom:2.2rem}.d-flex[_ngcontent-%COMP%]{display:flex}.align-items-end[_ngcontent-%COMP%]{align-items:end}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MainContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'oh-main-content',
                templateUrl: './main.content.component.html',
                styleUrls: ['./main.content.component.css'],
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], actionBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

function DrawerContentComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0$2 = ["*"];
class DrawerContentComponent {
    ngOnInit() { }
}
DrawerContentComponent.ɵfac = function DrawerContentComponent_Factory(t) { return new (t || DrawerContentComponent)(); };
DrawerContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DrawerContentComponent, selectors: [["oh-main-drawer"]], inputs: { title: "title" }, ngContentSelectors: _c0$2, decls: 3, vars: 1, consts: [[1, "drawer-content-wrapper"], ["oh-typography", "", "class", "page-title", 4, "ngIf"], ["oh-typography", "", 1, "page-title"]], template: function DrawerContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DrawerContentComponent_h4_1_Template, 2, 1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_typography__WEBPACK_IMPORTED_MODULE_17__["OHTypographyComponent"]], styles: [".drawer-content-wrapper[_ngcontent-%COMP%]{padding:30px 25px 0}.drawer-content-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{margin-bottom:25px}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DrawerContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'oh-main-drawer',
                templateUrl: './drawer.content.component.html',
                styleUrls: ['./drawer.content.component.css'],
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

class ActiveUrlCheckPipe {
    transform(rootvalue, value) {
        if (rootvalue) {
            if (rootvalue.startsWith(value)) {
                return true;
            }
            return false;
        }
        return false;
    }
}
ActiveUrlCheckPipe.ɵfac = function ActiveUrlCheckPipe_Factory(t) { return new (t || ActiveUrlCheckPipe)(); };
ActiveUrlCheckPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "activeUrlCheck", type: ActiveUrlCheckPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ActiveUrlCheckPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"],
        args: [{ name: 'activeUrlCheck' }]
    }], null, null); })();

// code cũ của Trang
// export class Utilities {
//   static assetUrl(url: string): string {
//     // @ts-ignore
//     const publicPath = __webpack_public_path__;
//     const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
//     const urlPrefix = url.startsWith('/') ? '' : '/';
//     return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
//   }
// }
//code sửa lỗi đường dẫn của Tuấn
class Utilities {
    static assetUrl(url) {
        // @ts-ignore
        const publicPath = __webpack_require__.p;
        const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
        const urlPrefix = url.startsWith('/') ? '' : '/';
        let appName = '';
        if (publicPath.includes('apps')) {
            const publicPathSplit = publicPath.split('/');
            appName = publicPathSplit[publicPathSplit.length - 1];
            if (appName.length == 0) {
                appName = publicPathSplit[publicPathSplit.length - 2];
            }
        }
        if (appName.length > 0) {
            return `https://storage-emr.vnpt.vn/onehealth.ui.public/core/${appName}/assets${urlPrefix}${url}`;
        }
        return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
    }
}
//đường dẫn khi chạy trên local: http://localhost:4213/assets/icons/icons8-person-48.png
//đường dẫn hiện tại đang lấy sau khi đẩy lên MinIO: /apps/navigation/quickmenu/assets/icons/icons8-person-48.png
//đường dẫn khi đẩy lên MinIO: https://storage-emr.vnpt.vn/onehealth.ui.public/core/quickmenu/assets/icons/icons8-person-48.png

class AssetUrlPipe {
    transform(value) {
        return Utilities.assetUrl(value);
    }
}
AssetUrlPipe.ɵfac = function AssetUrlPipe_Factory(t) { return new (t || AssetUrlPipe)(); };
AssetUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "assetUrl", type: AssetUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AssetUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"],
        args: [{ name: 'assetUrl' }]
    }], null, null); })();

function SubMenuComponent_ul_0_ng_container_1_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](menu_r2.ghiChu ? "background:" + menu_r2.ghiChu : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", menu_r2.logo)("ohSize", "md")("alt", menu_r2.ten);
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubMenuComponent_ul_0_ng_container_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.onClick(menu_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "activeUrlCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SubMenuComponent_ul_0_ng_container_1_li_1_i_2_Template, 1, 5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", menu_r2.ten);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSelected", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 4, ctx_r4.activeRouter, menu_r2.redirectUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menu_r2.ten, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 14);
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_i_1_Template, 1, 2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubMenuComponent_ul_0_ng_container_1_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.onClick(menu_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "activeUrlCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", menu_r2.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", menu_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSelected", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 6, ctx_r5.activeRouter, menu_r2.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.iconfont)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 14);
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_i_1_Template, 1, 2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubMenuComponent_ul_0_ng_container_1_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r36.onClick(menu_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "activeUrlCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("ohRouterLink", menu_r2.ohRouterLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", menu_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSelected", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 6, ctx_r6.activeRouter, menu_r2.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.iconfont)("ngIfElse", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 14);
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_i_1_Template, 1, 2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "activeUrlCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSelected", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 6, ctx_r7.activeRouter, menu_r2.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", menu_r2.href, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", menu_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.iconfont)("ngIfElse", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SubMenuComponent_ul_0_ng_container_1_li_1_Template, 4, 7, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SubMenuComponent_ul_0_ng_container_1_li_2_Template, 6, 9, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SubMenuComponent_ul_0_ng_container_1_li_3_Template, 6, 9, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SubMenuComponent_ul_0_ng_container_1_li_4_Template, 7, 9, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.redirectUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.ohRouterLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r2.href);
} }
function SubMenuComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SubMenuComponent_ul_0_ng_container_1_Template, 5, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.menuConfig);
} }
class SubMenuComponent {
    constructor(router) {
        this.router = router;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.router.events.subscribe((data) => {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"]) {
                this.activeRouter = data.url.toLowerCase();
            }
        });
    }
    openNewTab(url) {
        window.open(url, '_blank');
    }
    ngOnInit() { }
    onClick(event) {
        this.itemClick.emit(event);
        if (event.redirectUrl) {
            this.openNewTab(event.redirectUrl);
        }
    }
}
SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
SubMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SubMenuComponent, selectors: [["submenu-comp"]], inputs: { menuConfig: "menuConfig" }, outputs: { itemClick: "itemClick" }, decls: 1, vars: 1, consts: [["oh-menu", "", 4, "ngIf"], ["oh-menu", ""], [4, "ngFor", "ngForOf"], ["class", "w-100", "oh-menu-item", "", 3, "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "routerLink", "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "ohRouterLink", "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "ohSelected", 4, "ngIf"], ["oh-menu-item", "", 1, "w-100", 3, "title", "ohSelected", "click"], ["oh-icon", "", "class", "h-100 p-1", 3, "ohSrc", "ohSize", "alt", "style", 4, "ngIf"], ["oh-icon", "", 1, "h-100", "p-1", 3, "ohSrc", "ohSize", "alt"], ["oh-menu-item", "", 1, "w-100", 3, "routerLink", "title", "ohSelected", "click"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["oh-icon", "", 3, "ohType", "ohSize", 4, "ngIf"], ["oh-icon", "", 3, "ohType", "ohSize"], ["oh-icon", "", 3, "ohSrc", "ohSize", 4, "ngIf"], ["oh-icon", "", 3, "ohSrc", "ohSize"], ["oh-menu-item", "", 1, "w-100", 3, "ohRouterLink", "title", "ohSelected", "click"], ["oh-menu-item", "", 1, "w-100", 3, "ohSelected"], ["target", "_blank", 3, "href", "title"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubMenuComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuConfig && ctx.menuConfig.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__["OHMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵVTransitionPatchDirective"], _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__["OHMenuItemDirective"], _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], pipes: [ActiveUrlCheckPipe, AssetUrlPipe], styles: ["[_nghost-%COMP%]     .ui-menu-inline .ui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:21px;padding-left:16px!important}[_nghost-%COMP%]     .ui-menu-inline .ui-menu-item i{margin-right:12px}[_nghost-%COMP%]     .ui-menu:not(.ui-menu-horizontal) .ui-menu-item-selected{background-color:#e7e8e9}[_nghost-%COMP%]     .ui-menu-inline>.ui-menu-submenu>.ui-menu-submenu-title{font-weight:600;padding-left:10px!important}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SubMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'submenu-comp',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, { menuConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();

class ChangeDateTimePipe {
    transform(value) {
        let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        let dateArray = reggie.exec(value);
        let dataObject = new Date(+dateArray[1], +dateArray[2] - 1, +dateArray[3], +dateArray[4], +dateArray[5], +dateArray[6]);
        let timenow = new Date();
        let date;
        let month;
        let hour;
        let minute;
        let second;
        if (dataObject.getFullYear() < timenow.getFullYear()) {
            return dataObject.toLocaleDateString();
        }
        else if (dataObject.getFullYear() == timenow.getFullYear()) {
            if (dataObject.getMonth() < timenow.getMonth()) {
                month = timenow.getMonth() - dataObject.getMonth();
                return month + ' ' + 'tháng trước';
            }
            else if (dataObject.getMonth() == timenow.getMonth()) {
                if (dataObject.getDate() < timenow.getDate()) {
                    date = timenow.getDate() - dataObject.getDate();
                    return date + ' ' + 'ngày trước';
                }
                else if (dataObject.getDate() == timenow.getDate()) {
                    if (dataObject.getHours() < timenow.getHours()) {
                        hour = timenow.getHours() - dataObject.getHours();
                        return hour + ' ' + 'giờ trước';
                    }
                    else if (dataObject.getHours() == timenow.getHours()) {
                        if (dataObject.getMinutes() < timenow.getMinutes()) {
                            minute = timenow.getMinutes() - dataObject.getMinutes();
                            return minute + ' ' + 'phút trước';
                        }
                        else if (dataObject.getMinutes() == timenow.getMinutes()) {
                            if (dataObject.getSeconds() < timenow.getSeconds()) {
                                second = timenow.getSeconds() - dataObject.getSeconds();
                                return second + ' ' + 'giây trước';
                            }
                            else if (dataObject.getSeconds() == timenow.getSeconds()) {
                                return 'less than a minute';
                            }
                        }
                    }
                }
            }
        }
    }
}
ChangeDateTimePipe.ɵfac = function ChangeDateTimePipe_Factory(t) { return new (t || ChangeDateTimePipe)(); };
ChangeDateTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "changeDateTime", type: ChangeDateTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChangeDateTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"],
        args: [{ name: 'changeDateTime' }]
    }], null, null); })();

function ToolbarItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "assetUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", ctx_r0.iconfont ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r0.icon))("ohType", ctx_r0.iconfont ? ctx_r0.icon : "")("ohSize", "lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ToolbarItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "assetUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", ctx_r1.iconfont ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r1.icon))("ohType", ctx_r1.iconfont ? ctx_r1.icon : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function ToolbarItemComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "assetUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSrc", ctx_r2.iconfont ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r2.icon))("ohType", ctx_r2.iconfont ? ctx_r2.icon : "")("ohSize", "xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.title);
} }
class ToolbarItemComponent {
    constructor() {
        this.type = 'md';
    }
    ngOnInit() { }
}
ToolbarItemComponent.ɵfac = function ToolbarItemComponent_Factory(t) { return new (t || ToolbarItemComponent)(); };
ToolbarItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToolbarItemComponent, selectors: [["toolbar-item"]], inputs: { type: "type", title: "title", icon: "icon", iconfont: "iconfont" }, decls: 3, vars: 3, consts: [["oh-button", "", "ohType", "text", "class", "toolbar-btn", 3, "title", 4, "ngIf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-sm", 3, "title", 4, "ngIf"], ["oh-button", "", "ohType", "text", 1, "toolbar-btn", 3, "title"], ["oh-icon", "", 3, "ohSrc", "ohType", "ohSize"], ["oh-icon", "", 3, "ohSrc", "ohType"], ["oh-button", "", "ohType", "text", 1, "toolbar-btn-sm", 3, "title"]], template: function ToolbarItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ToolbarItemComponent_button_0_Template, 5, 7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToolbarItemComponent_button_1_Template, 5, 6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ToolbarItemComponent_button_2_Template, 5, 7, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "md");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "sm");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__["OHButtonComponent"], _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵVTransitionPatchDirective"], _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconDirective"]], pipes: [AssetUrlPipe], styles: [".toolbar-btn[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ToolbarItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'toolbar-item',
                templateUrl: './toolbar.item.component.html',
                styleUrls: ['./toolbar.item.component.css'],
            }]
    }], null, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], iconfont: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

const _c0$1 = ["toolbarCtn"];
const _c1$1 = ["toolbarWrp"];
function ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "toolbar-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template_toolbar_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.onItemClick(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", item_r9.title)("icon", item_r9.icon)("iconfont", item_r9.iconfont)("type", ctx_r11.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_div_4_ng_container_1_oh_divider_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "oh-divider", 16);
} }
function ToolbarComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template, 1, 4, "toolbar-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ToolbarComponent_div_4_ng_container_1_oh_divider_2_Template, 1, 0, "oh-divider", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.title || item_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r9.title && !item_r9.icon && ctx_r3.screenSize > 992);
} }
function ToolbarComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohDropdownMenu", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohType", "BulletedListBullet")("ohSize", "md");
} }
function ToolbarComponent_div_4_li_7_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "toolbar-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarComponent_div_4_li_7_toolbar_item_1_Template_toolbar_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.onItemClick(item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", item_r17.title)("icon", item_r17.icon)("iconfont", item_r17.iconfont)("type", ctx_r19.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_div_4_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToolbarComponent_div_4_li_7_toolbar_item_1_Template, 1, 4, "toolbar-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r17.title || item_r17.icon);
} }
function ToolbarComponent_div_4_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarComponent_div_4_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.tonggleCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSize", "xs")("ohColor", "primary");
} }
function ToolbarComponent_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarComponent_div_4_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.tonggleCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSize", "xs")("ohColor", "primary");
} }
function ToolbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToolbarComponent_div_4_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ToolbarComponent_div_4_button_3_Template, 2, 3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "oh-dropdown-menu", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ToolbarComponent_div_4_li_7_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ToolbarComponent_div_4_button_8_Template, 2, 2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ToolbarComponent_div_4_button_9_Template, 2, 2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.config.slice(0, ctx_r2.sliceNum));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.config.length > ctx_r2.sliceNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.config.slice(ctx_r2.sliceNum, ctx_r2.config.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isCollapse);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isCollapse);
} }
const _c2 = function (a1) { return { "toolbar-wrapper": true, collapse: a1 }; };
const _c3 = function (a0) { return { "background-color": a0 }; };
const _c4 = ["*"];
class ToolbarComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.fixAtTop = 85;
        this.isCollapse = false;
        this.screenSize = 1200;
        this.sliceNum = 15;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    onResize(event) {
        this.calculateScreen();
    }
    ngOnInit() {
        setTimeout(() => {
            this.calculateScreen();
        }, 300);
    }
    calculateScreen() {
        this.screenSize = this.toolbarCtn.nativeElement.offsetWidth;
        if (this.screenSize >= 1200)
            this.sliceNum = 15;
        else if (this.screenSize >= 992)
            this.sliceNum = 9;
        else if (this.screenSize >= 768)
            this.sliceNum = 6;
        else if (this.screenSize >= 425)
            this.sliceNum = 3;
        else
            this.sliceNum = 2;
        this.renderer.setStyle(this.toolbarWrp.nativeElement, 'width', this.toolbarCtn.nativeElement.offsetWidth + 'px');
        this.renderer.setStyle(this.toolbarWrp.nativeElement, 'top', this.fixAtTop + 'px');
    }
    tonggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    ngAfterViewInit() { }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], viewQuery: function ToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0$1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1$1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.toolbarCtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.toolbarWrp = _t.first);
    } }, hostBindings: function ToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function ToolbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { config: "config", fixAtTop: "fixAtTop", bgColor: "bgColor", isCollapse: "isCollapse" }, outputs: { itemClick: "itemClick" }, ngContentSelectors: _c4, decls: 5, vars: 7, consts: [[1, "toobar-container"], ["toolbarCtn", ""], ["oh-row", "", 3, "ngClass", "ngStyle"], ["toolbarWrp", ""], ["oh-col", "", 3, "ohSpan", 4, "ngIf"], ["oh-col", "", 3, "ohSpan"], [4, "ngFor", "ngForOf"], ["oh-button", "", "ohType", "text", "class", "toolbar-more-btn", "oh-dropdown", "", 3, "ohDropdownMenu", 4, "ngIf"], ["more", "ohDropdownMenu"], ["oh-menu", "", "ohSelectable", ""], ["oh-menu-item", "", "style", "text-align: center", 4, "ngFor", "ngForOf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-collapse", "title", "Thu g\u1ECDn", 3, "click", 4, "ngIf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-collapse", "title", "M\u1EDF r\u1ED9ng", 3, "click", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click", 4, "ngIf"], ["ohType", "vertical", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click"], ["ohType", "vertical"], ["oh-button", "", "ohType", "text", "oh-dropdown", "", 1, "toolbar-more-btn", 3, "ohDropdownMenu"], ["oh-icon", "", 3, "ohType", "ohSize"], ["oh-menu-item", "", 2, "text-align", "center"], ["oh-button", "", "ohType", "text", "title", "Thu g\u1ECDn", 1, "toolbar-btn-collapse", 3, "click"], ["oh-icon", "", "ohType", "ChevronUp", 3, "ohSize", "ohColor"], ["oh-button", "", "ohType", "text", "title", "M\u1EDF r\u1ED9ng", 1, "toolbar-btn-collapse", 3, "click"], ["oh-icon", "", "ohType", "ChevronDown", 3, "ohSize", "ohColor"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ToolbarComponent_div_4_Template, 10, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, ctx.isCollapse))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c3, ctx.bgColor ? ctx.bgColor : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.screenSize);
    } }, directives: [_onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _onehealth_ui_dropdown__WEBPACK_IMPORTED_MODULE_19__["OHDropdownMenuComponent"], _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__["OHMenuDirective"], ToolbarItemComponent, _onehealth_ui_divider__WEBPACK_IMPORTED_MODULE_20__["OHDividerComponent"], _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__["OHButtonComponent"], _onehealth_ui_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵVTransitionPatchDirective"], _onehealth_ui_dropdown__WEBPACK_IMPORTED_MODULE_19__["OHDropdownButtonDirective"], _onehealth_ui_dropdown__WEBPACK_IMPORTED_MODULE_19__["OHDropDownDirective"], _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconDirective"], _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__["OHMenuItemDirective"]], styles: [".toobar-container[_ngcontent-%COMP%]{min-height:66px}.toolbar-wrapper[_ngcontent-%COMP%]{background-color:#fff;z-index:98;padding:0 30px;height:66px;position:fixed}.toolbar-wrapper.collapse[_ngcontent-%COMP%]{height:50px}[_nghost-%COMP%]     .ui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:2px}[_nghost-%COMP%]     .toolbar-wrapper.collapse .ui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn[_ngcontent-%COMP%]{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], fixAtTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:resize', ['$event']]
        }], toolbarCtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['toolbarCtn']
        }], toolbarWrp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['toolbarWrp']
        }] }); })();

const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = ["*"];
class BottombarComponent {
    constructor() {
        this.position = 0;
        this.bgColor = '#ffffff';
    }
    ngOnInit() { }
}
BottombarComponent.ɵfac = function BottombarComponent_Factory(t) { return new (t || BottombarComponent)(); };
BottombarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BottombarComponent, selectors: [["bottom-bar"]], inputs: { position: "position", bgColor: "bgColor" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[3, "ohOffsetBottom"], ["oh-row", "", 1, "fixed-bottom-bar", 3, "ngStyle"], ["oh-col", "", "ohSpan", "24", 1, "px-3", "px-md-8", "py-2", "py-md-3"]], template: function BottombarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "oh-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ohOffsetBottom", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx.bgColor));
    } }, directives: [_onehealth_ui_affix__WEBPACK_IMPORTED_MODULE_14__["OHAffixComponent"], _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHColDirective"]], styles: [".fixed-bottom-bar[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1)}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BottombarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'bottom-bar',
                templateUrl: './bottombar.component.html',
                styleUrls: ['./bottombar.component.css'],
            }]
    }], function () { return []; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

class AuthGuardService {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        if (!this.auth.isLogin()) {
            setTimeout(() => {
                this.auth.backtoLogin();
            }, 100);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](AuthService)); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: AuthService }]; }, null); })();

class ConfirmationService {
    constructor(modal) {
        this.modal = modal;
    }
    create(title, content, onOk, onCancel, btnOkText = 'Đồng ý', btnCancelText = 'Hủy') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_82__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = this.modal.create({
                ohTitle: title,
                ohContent: content,
                ohCentered: true,
                ohFooter: [
                    {
                        label: btnCancelText,
                        onClick() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_82__["__awaiter"])(this, void 0, void 0, function* () {
                                this.loading = true;
                                yield onCancel();
                                this.loading = false;
                                modal.destroy();
                            });
                        },
                    },
                    {
                        label: btnOkText,
                        type: 'primary',
                        loading: false,
                        onClick() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_82__["__awaiter"])(this, void 0, void 0, function* () {
                                this.loading = true;
                                const result = yield onOk();
                                this.loading = false;
                                if (result) {
                                    modal.destroy();
                                }
                            });
                        },
                    },
                ],
            });
            modal.afterClose.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_82__["__awaiter"])(this, void 0, void 0, function* () {
                yield onCancel();
            }));
            return modal;
        });
    }
}
ConfirmationService.ɵfac = function ConfirmationService_Factory(t) { return new (t || ConfirmationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_onehealth_ui_modal__WEBPACK_IMPORTED_MODULE_51__["OHModalService"])); };
ConfirmationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfirmationService, factory: ConfirmationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConfirmationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _onehealth_ui_modal__WEBPACK_IMPORTED_MODULE_51__["OHModalService"] }]; }, null); })();

// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
//   (key) => antDesignIcons[key]
// );
const ngZorroConfig = {
    message: { ohTop: 10 },
    notification: { ohTop: 10 },
};
class OnehealthModule {
}
OnehealthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OnehealthModule });
OnehealthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function OnehealthModule_Factory(t) { return new (t || OnehealthModule)(); }, providers: [
        ConfirmationService,
        { provide: _onehealth_ui_core_config__WEBPACK_IMPORTED_MODULE_81__["OH_CONFIG"], useValue: ngZorroConfig },
    ], imports: [_onehealth_ui_affix__WEBPACK_IMPORTED_MODULE_14__["OHAffixModule"],
        _onehealth_ui_alert__WEBPACK_IMPORTED_MODULE_21__["OHAlertModule"],
        _onehealth_ui_anchor__WEBPACK_IMPORTED_MODULE_22__["OHAnchorModule"],
        _onehealth_ui_auto_complete__WEBPACK_IMPORTED_MODULE_23__["OHAutocompleteModule"],
        _onehealth_ui_avatar__WEBPACK_IMPORTED_MODULE_24__["OHAvatarModule"],
        _onehealth_ui_back_top__WEBPACK_IMPORTED_MODULE_25__["OHBackTopModule"],
        _onehealth_ui_badge__WEBPACK_IMPORTED_MODULE_26__["OHBadgeModule"],
        _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__["OHButtonModule"],
        _onehealth_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_27__["OHBreadCrumbModule"],
        _onehealth_ui_calendar__WEBPACK_IMPORTED_MODULE_28__["OHCalendarModule"],
        _onehealth_ui_card__WEBPACK_IMPORTED_MODULE_29__["OHCardModule"],
        _onehealth_ui_carousel__WEBPACK_IMPORTED_MODULE_30__["OHCarouselModule"],
        _onehealth_ui_cascader__WEBPACK_IMPORTED_MODULE_31__["OHCascaderModule"],
        _onehealth_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__["OHCheckboxModule"],
        _onehealth_ui_collapse__WEBPACK_IMPORTED_MODULE_33__["OHCollapseModule"],
        _onehealth_ui_comment__WEBPACK_IMPORTED_MODULE_34__["OHCommentModule"],
        _onehealth_ui_date_picker__WEBPACK_IMPORTED_MODULE_38__["OHDatePickerModule"],
        _onehealth_ui_descriptions__WEBPACK_IMPORTED_MODULE_39__["OHDescriptionsModule"],
        _onehealth_ui_divider__WEBPACK_IMPORTED_MODULE_20__["OHDividerModule"],
        _onehealth_ui_drawer__WEBPACK_IMPORTED_MODULE_40__["OHDrawerModule"],
        _onehealth_ui_dropdown__WEBPACK_IMPORTED_MODULE_19__["OHDropDownModule"],
        _onehealth_ui_empty__WEBPACK_IMPORTED_MODULE_41__["OHEmptyModule"],
        _onehealth_ui_form__WEBPACK_IMPORTED_MODULE_42__["OHFormModule"],
        _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHGridModule"],
        _onehealth_ui_i18n__WEBPACK_IMPORTED_MODULE_43__["OHI18nModule"],
        _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconModule"],
        _onehealth_ui_image__WEBPACK_IMPORTED_MODULE_44__["OHImageModule"],
        _onehealth_ui_input__WEBPACK_IMPORTED_MODULE_45__["OHInputModule"],
        _onehealth_ui_input_number__WEBPACK_IMPORTED_MODULE_46__["OHInputNumberModule"],
        _onehealth_ui_layout__WEBPACK_IMPORTED_MODULE_47__["OHLayoutModule"],
        _onehealth_ui_logo__WEBPACK_IMPORTED_MODULE_83__["OHLogoModule"],
        _onehealth_ui_list__WEBPACK_IMPORTED_MODULE_48__["OHListModule"],
        _onehealth_ui_mention__WEBPACK_IMPORTED_MODULE_49__["OHMentionModule"],
        _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__["OHMenuModule"],
        _onehealth_ui_message__WEBPACK_IMPORTED_MODULE_50__["OHMessageModule"],
        _onehealth_ui_modal__WEBPACK_IMPORTED_MODULE_51__["OHModalModule"],
        _onehealth_ui_core_no_animation__WEBPACK_IMPORTED_MODULE_35__["OHNoAnimationModule"],
        _onehealth_ui_notification__WEBPACK_IMPORTED_MODULE_13__["OHNotificationModule"],
        _onehealth_ui_page_header__WEBPACK_IMPORTED_MODULE_52__["OHPageHeaderModule"],
        _onehealth_ui_pagination__WEBPACK_IMPORTED_MODULE_53__["OHPaginationModule"],
        _onehealth_ui_popconfirm__WEBPACK_IMPORTED_MODULE_54__["OHPopconfirmModule"],
        _onehealth_ui_popover__WEBPACK_IMPORTED_MODULE_55__["OHPopoverModule"],
        _onehealth_ui_progress__WEBPACK_IMPORTED_MODULE_56__["OHProgressModule"],
        _onehealth_ui_radio__WEBPACK_IMPORTED_MODULE_57__["OHRadioModule"],
        _onehealth_ui_rate__WEBPACK_IMPORTED_MODULE_58__["OHRateModule"],
        _onehealth_ui_result__WEBPACK_IMPORTED_MODULE_59__["OHResultModule"],
        _onehealth_ui_select__WEBPACK_IMPORTED_MODULE_60__["OHSelectModule"],
        _onehealth_ui_skeleton__WEBPACK_IMPORTED_MODULE_61__["OHSkeletonModule"],
        _onehealth_ui_slider__WEBPACK_IMPORTED_MODULE_62__["OHSliderModule"],
        _onehealth_ui_space__WEBPACK_IMPORTED_MODULE_63__["OHSpaceModule"],
        _onehealth_ui_spin__WEBPACK_IMPORTED_MODULE_64__["OHSpinModule"],
        _onehealth_ui_statistic__WEBPACK_IMPORTED_MODULE_65__["OHStatisticModule"],
        _onehealth_ui_steps__WEBPACK_IMPORTED_MODULE_66__["OHStepsModule"],
        _onehealth_ui_switch__WEBPACK_IMPORTED_MODULE_67__["OHSwitchModule"],
        _onehealth_ui_table__WEBPACK_IMPORTED_MODULE_68__["OHTableModule"],
        _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_69__["OHTabsModule"],
        _onehealth_ui_tag__WEBPACK_IMPORTED_MODULE_70__["OHTagModule"],
        _onehealth_ui_time_picker__WEBPACK_IMPORTED_MODULE_71__["OHTimePickerModule"],
        _onehealth_ui_timeline__WEBPACK_IMPORTED_MODULE_72__["OHTimelineModule"],
        _onehealth_ui_tooltip__WEBPACK_IMPORTED_MODULE_16__["OHToolTipModule"],
        _onehealth_ui_core_trans_button__WEBPACK_IMPORTED_MODULE_36__["OHTransButtonModule"],
        _onehealth_ui_transfer__WEBPACK_IMPORTED_MODULE_73__["OHTransferModule"],
        _onehealth_ui_tree__WEBPACK_IMPORTED_MODULE_74__["OHTreeModule"],
        _onehealth_ui_tree_view__WEBPACK_IMPORTED_MODULE_75__["OHTreeViewModule"],
        _onehealth_ui_tree_select__WEBPACK_IMPORTED_MODULE_76__["OHTreeSelectModule"],
        _onehealth_ui_typography__WEBPACK_IMPORTED_MODULE_17__["OHTypographyModule"],
        _onehealth_ui_upload__WEBPACK_IMPORTED_MODULE_77__["OHUploadModule"],
        _onehealth_ui_core_wave__WEBPACK_IMPORTED_MODULE_37__["OHWaveModule"],
        _onehealth_ui_resizable__WEBPACK_IMPORTED_MODULE_78__["OHResizableModule"],
        _onehealth_ui_pipes__WEBPACK_IMPORTED_MODULE_79__["OHPipesModule"],
        _onehealth_ui_code_editor__WEBPACK_IMPORTED_MODULE_80__["OHCodeEditorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OnehealthModule, { exports: [_onehealth_ui_affix__WEBPACK_IMPORTED_MODULE_14__["OHAffixModule"],
        _onehealth_ui_alert__WEBPACK_IMPORTED_MODULE_21__["OHAlertModule"],
        _onehealth_ui_anchor__WEBPACK_IMPORTED_MODULE_22__["OHAnchorModule"],
        _onehealth_ui_auto_complete__WEBPACK_IMPORTED_MODULE_23__["OHAutocompleteModule"],
        _onehealth_ui_avatar__WEBPACK_IMPORTED_MODULE_24__["OHAvatarModule"],
        _onehealth_ui_back_top__WEBPACK_IMPORTED_MODULE_25__["OHBackTopModule"],
        _onehealth_ui_badge__WEBPACK_IMPORTED_MODULE_26__["OHBadgeModule"],
        _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__["OHButtonModule"],
        _onehealth_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_27__["OHBreadCrumbModule"],
        _onehealth_ui_calendar__WEBPACK_IMPORTED_MODULE_28__["OHCalendarModule"],
        _onehealth_ui_card__WEBPACK_IMPORTED_MODULE_29__["OHCardModule"],
        _onehealth_ui_carousel__WEBPACK_IMPORTED_MODULE_30__["OHCarouselModule"],
        _onehealth_ui_cascader__WEBPACK_IMPORTED_MODULE_31__["OHCascaderModule"],
        _onehealth_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__["OHCheckboxModule"],
        _onehealth_ui_collapse__WEBPACK_IMPORTED_MODULE_33__["OHCollapseModule"],
        _onehealth_ui_comment__WEBPACK_IMPORTED_MODULE_34__["OHCommentModule"],
        _onehealth_ui_date_picker__WEBPACK_IMPORTED_MODULE_38__["OHDatePickerModule"],
        _onehealth_ui_descriptions__WEBPACK_IMPORTED_MODULE_39__["OHDescriptionsModule"],
        _onehealth_ui_divider__WEBPACK_IMPORTED_MODULE_20__["OHDividerModule"],
        _onehealth_ui_drawer__WEBPACK_IMPORTED_MODULE_40__["OHDrawerModule"],
        _onehealth_ui_dropdown__WEBPACK_IMPORTED_MODULE_19__["OHDropDownModule"],
        _onehealth_ui_empty__WEBPACK_IMPORTED_MODULE_41__["OHEmptyModule"],
        _onehealth_ui_form__WEBPACK_IMPORTED_MODULE_42__["OHFormModule"],
        _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHGridModule"],
        _onehealth_ui_i18n__WEBPACK_IMPORTED_MODULE_43__["OHI18nModule"],
        _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconModule"],
        _onehealth_ui_image__WEBPACK_IMPORTED_MODULE_44__["OHImageModule"],
        _onehealth_ui_input__WEBPACK_IMPORTED_MODULE_45__["OHInputModule"],
        _onehealth_ui_input_number__WEBPACK_IMPORTED_MODULE_46__["OHInputNumberModule"],
        _onehealth_ui_layout__WEBPACK_IMPORTED_MODULE_47__["OHLayoutModule"],
        _onehealth_ui_logo__WEBPACK_IMPORTED_MODULE_83__["OHLogoModule"],
        _onehealth_ui_list__WEBPACK_IMPORTED_MODULE_48__["OHListModule"],
        _onehealth_ui_mention__WEBPACK_IMPORTED_MODULE_49__["OHMentionModule"],
        _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__["OHMenuModule"],
        _onehealth_ui_message__WEBPACK_IMPORTED_MODULE_50__["OHMessageModule"],
        _onehealth_ui_modal__WEBPACK_IMPORTED_MODULE_51__["OHModalModule"],
        _onehealth_ui_core_no_animation__WEBPACK_IMPORTED_MODULE_35__["OHNoAnimationModule"],
        _onehealth_ui_notification__WEBPACK_IMPORTED_MODULE_13__["OHNotificationModule"],
        _onehealth_ui_page_header__WEBPACK_IMPORTED_MODULE_52__["OHPageHeaderModule"],
        _onehealth_ui_pagination__WEBPACK_IMPORTED_MODULE_53__["OHPaginationModule"],
        _onehealth_ui_popconfirm__WEBPACK_IMPORTED_MODULE_54__["OHPopconfirmModule"],
        _onehealth_ui_popover__WEBPACK_IMPORTED_MODULE_55__["OHPopoverModule"],
        _onehealth_ui_progress__WEBPACK_IMPORTED_MODULE_56__["OHProgressModule"],
        _onehealth_ui_radio__WEBPACK_IMPORTED_MODULE_57__["OHRadioModule"],
        _onehealth_ui_rate__WEBPACK_IMPORTED_MODULE_58__["OHRateModule"],
        _onehealth_ui_result__WEBPACK_IMPORTED_MODULE_59__["OHResultModule"],
        _onehealth_ui_select__WEBPACK_IMPORTED_MODULE_60__["OHSelectModule"],
        _onehealth_ui_skeleton__WEBPACK_IMPORTED_MODULE_61__["OHSkeletonModule"],
        _onehealth_ui_slider__WEBPACK_IMPORTED_MODULE_62__["OHSliderModule"],
        _onehealth_ui_space__WEBPACK_IMPORTED_MODULE_63__["OHSpaceModule"],
        _onehealth_ui_spin__WEBPACK_IMPORTED_MODULE_64__["OHSpinModule"],
        _onehealth_ui_statistic__WEBPACK_IMPORTED_MODULE_65__["OHStatisticModule"],
        _onehealth_ui_steps__WEBPACK_IMPORTED_MODULE_66__["OHStepsModule"],
        _onehealth_ui_switch__WEBPACK_IMPORTED_MODULE_67__["OHSwitchModule"],
        _onehealth_ui_table__WEBPACK_IMPORTED_MODULE_68__["OHTableModule"],
        _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_69__["OHTabsModule"],
        _onehealth_ui_tag__WEBPACK_IMPORTED_MODULE_70__["OHTagModule"],
        _onehealth_ui_time_picker__WEBPACK_IMPORTED_MODULE_71__["OHTimePickerModule"],
        _onehealth_ui_timeline__WEBPACK_IMPORTED_MODULE_72__["OHTimelineModule"],
        _onehealth_ui_tooltip__WEBPACK_IMPORTED_MODULE_16__["OHToolTipModule"],
        _onehealth_ui_core_trans_button__WEBPACK_IMPORTED_MODULE_36__["OHTransButtonModule"],
        _onehealth_ui_transfer__WEBPACK_IMPORTED_MODULE_73__["OHTransferModule"],
        _onehealth_ui_tree__WEBPACK_IMPORTED_MODULE_74__["OHTreeModule"],
        _onehealth_ui_tree_view__WEBPACK_IMPORTED_MODULE_75__["OHTreeViewModule"],
        _onehealth_ui_tree_select__WEBPACK_IMPORTED_MODULE_76__["OHTreeSelectModule"],
        _onehealth_ui_typography__WEBPACK_IMPORTED_MODULE_17__["OHTypographyModule"],
        _onehealth_ui_upload__WEBPACK_IMPORTED_MODULE_77__["OHUploadModule"],
        _onehealth_ui_core_wave__WEBPACK_IMPORTED_MODULE_37__["OHWaveModule"],
        _onehealth_ui_resizable__WEBPACK_IMPORTED_MODULE_78__["OHResizableModule"],
        _onehealth_ui_pipes__WEBPACK_IMPORTED_MODULE_79__["OHPipesModule"],
        _onehealth_ui_code_editor__WEBPACK_IMPORTED_MODULE_80__["OHCodeEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OnehealthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [
                    _onehealth_ui_affix__WEBPACK_IMPORTED_MODULE_14__["OHAffixModule"],
                    _onehealth_ui_alert__WEBPACK_IMPORTED_MODULE_21__["OHAlertModule"],
                    _onehealth_ui_anchor__WEBPACK_IMPORTED_MODULE_22__["OHAnchorModule"],
                    _onehealth_ui_auto_complete__WEBPACK_IMPORTED_MODULE_23__["OHAutocompleteModule"],
                    _onehealth_ui_avatar__WEBPACK_IMPORTED_MODULE_24__["OHAvatarModule"],
                    _onehealth_ui_back_top__WEBPACK_IMPORTED_MODULE_25__["OHBackTopModule"],
                    _onehealth_ui_badge__WEBPACK_IMPORTED_MODULE_26__["OHBadgeModule"],
                    _onehealth_ui_button__WEBPACK_IMPORTED_MODULE_4__["OHButtonModule"],
                    _onehealth_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_27__["OHBreadCrumbModule"],
                    _onehealth_ui_calendar__WEBPACK_IMPORTED_MODULE_28__["OHCalendarModule"],
                    _onehealth_ui_card__WEBPACK_IMPORTED_MODULE_29__["OHCardModule"],
                    _onehealth_ui_carousel__WEBPACK_IMPORTED_MODULE_30__["OHCarouselModule"],
                    _onehealth_ui_cascader__WEBPACK_IMPORTED_MODULE_31__["OHCascaderModule"],
                    _onehealth_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__["OHCheckboxModule"],
                    _onehealth_ui_collapse__WEBPACK_IMPORTED_MODULE_33__["OHCollapseModule"],
                    _onehealth_ui_comment__WEBPACK_IMPORTED_MODULE_34__["OHCommentModule"],
                    _onehealth_ui_date_picker__WEBPACK_IMPORTED_MODULE_38__["OHDatePickerModule"],
                    _onehealth_ui_descriptions__WEBPACK_IMPORTED_MODULE_39__["OHDescriptionsModule"],
                    _onehealth_ui_divider__WEBPACK_IMPORTED_MODULE_20__["OHDividerModule"],
                    _onehealth_ui_drawer__WEBPACK_IMPORTED_MODULE_40__["OHDrawerModule"],
                    _onehealth_ui_dropdown__WEBPACK_IMPORTED_MODULE_19__["OHDropDownModule"],
                    _onehealth_ui_empty__WEBPACK_IMPORTED_MODULE_41__["OHEmptyModule"],
                    _onehealth_ui_form__WEBPACK_IMPORTED_MODULE_42__["OHFormModule"],
                    _onehealth_ui_grid__WEBPACK_IMPORTED_MODULE_15__["OHGridModule"],
                    _onehealth_ui_i18n__WEBPACK_IMPORTED_MODULE_43__["OHI18nModule"],
                    _onehealth_ui_icon__WEBPACK_IMPORTED_MODULE_6__["OHIconModule"],
                    _onehealth_ui_image__WEBPACK_IMPORTED_MODULE_44__["OHImageModule"],
                    _onehealth_ui_input__WEBPACK_IMPORTED_MODULE_45__["OHInputModule"],
                    _onehealth_ui_input_number__WEBPACK_IMPORTED_MODULE_46__["OHInputNumberModule"],
                    _onehealth_ui_layout__WEBPACK_IMPORTED_MODULE_47__["OHLayoutModule"],
                    _onehealth_ui_logo__WEBPACK_IMPORTED_MODULE_83__["OHLogoModule"],
                    _onehealth_ui_list__WEBPACK_IMPORTED_MODULE_48__["OHListModule"],
                    _onehealth_ui_mention__WEBPACK_IMPORTED_MODULE_49__["OHMentionModule"],
                    _onehealth_ui_menu__WEBPACK_IMPORTED_MODULE_18__["OHMenuModule"],
                    _onehealth_ui_message__WEBPACK_IMPORTED_MODULE_50__["OHMessageModule"],
                    _onehealth_ui_modal__WEBPACK_IMPORTED_MODULE_51__["OHModalModule"],
                    _onehealth_ui_core_no_animation__WEBPACK_IMPORTED_MODULE_35__["OHNoAnimationModule"],
                    _onehealth_ui_notification__WEBPACK_IMPORTED_MODULE_13__["OHNotificationModule"],
                    _onehealth_ui_page_header__WEBPACK_IMPORTED_MODULE_52__["OHPageHeaderModule"],
                    _onehealth_ui_pagination__WEBPACK_IMPORTED_MODULE_53__["OHPaginationModule"],
                    _onehealth_ui_popconfirm__WEBPACK_IMPORTED_MODULE_54__["OHPopconfirmModule"],
                    _onehealth_ui_popover__WEBPACK_IMPORTED_MODULE_55__["OHPopoverModule"],
                    _onehealth_ui_progress__WEBPACK_IMPORTED_MODULE_56__["OHProgressModule"],
                    _onehealth_ui_radio__WEBPACK_IMPORTED_MODULE_57__["OHRadioModule"],
                    _onehealth_ui_rate__WEBPACK_IMPORTED_MODULE_58__["OHRateModule"],
                    _onehealth_ui_result__WEBPACK_IMPORTED_MODULE_59__["OHResultModule"],
                    _onehealth_ui_select__WEBPACK_IMPORTED_MODULE_60__["OHSelectModule"],
                    _onehealth_ui_skeleton__WEBPACK_IMPORTED_MODULE_61__["OHSkeletonModule"],
                    _onehealth_ui_slider__WEBPACK_IMPORTED_MODULE_62__["OHSliderModule"],
                    _onehealth_ui_space__WEBPACK_IMPORTED_MODULE_63__["OHSpaceModule"],
                    _onehealth_ui_spin__WEBPACK_IMPORTED_MODULE_64__["OHSpinModule"],
                    _onehealth_ui_statistic__WEBPACK_IMPORTED_MODULE_65__["OHStatisticModule"],
                    _onehealth_ui_steps__WEBPACK_IMPORTED_MODULE_66__["OHStepsModule"],
                    _onehealth_ui_switch__WEBPACK_IMPORTED_MODULE_67__["OHSwitchModule"],
                    _onehealth_ui_table__WEBPACK_IMPORTED_MODULE_68__["OHTableModule"],
                    _onehealth_ui_tabs__WEBPACK_IMPORTED_MODULE_69__["OHTabsModule"],
                    _onehealth_ui_tag__WEBPACK_IMPORTED_MODULE_70__["OHTagModule"],
                    _onehealth_ui_time_picker__WEBPACK_IMPORTED_MODULE_71__["OHTimePickerModule"],
                    _onehealth_ui_timeline__WEBPACK_IMPORTED_MODULE_72__["OHTimelineModule"],
                    _onehealth_ui_tooltip__WEBPACK_IMPORTED_MODULE_16__["OHToolTipModule"],
                    _onehealth_ui_core_trans_button__WEBPACK_IMPORTED_MODULE_36__["OHTransButtonModule"],
                    _onehealth_ui_transfer__WEBPACK_IMPORTED_MODULE_73__["OHTransferModule"],
                    _onehealth_ui_tree__WEBPACK_IMPORTED_MODULE_74__["OHTreeModule"],
                    _onehealth_ui_tree_view__WEBPACK_IMPORTED_MODULE_75__["OHTreeViewModule"],
                    _onehealth_ui_tree_select__WEBPACK_IMPORTED_MODULE_76__["OHTreeSelectModule"],
                    _onehealth_ui_typography__WEBPACK_IMPORTED_MODULE_17__["OHTypographyModule"],
                    _onehealth_ui_upload__WEBPACK_IMPORTED_MODULE_77__["OHUploadModule"],
                    _onehealth_ui_core_wave__WEBPACK_IMPORTED_MODULE_37__["OHWaveModule"],
                    _onehealth_ui_resizable__WEBPACK_IMPORTED_MODULE_78__["OHResizableModule"],
                    _onehealth_ui_pipes__WEBPACK_IMPORTED_MODULE_79__["OHPipesModule"],
                    _onehealth_ui_code_editor__WEBPACK_IMPORTED_MODULE_80__["OHCodeEditorModule"],
                ],
                providers: [
                    ConfirmationService,
                    { provide: _onehealth_ui_core_config__WEBPACK_IMPORTED_MODULE_81__["OH_CONFIG"], useValue: ngZorroConfig },
                ],
            }]
    }], null, null); })();

class CommonLibraryModule {
    static forRoot() {
        return {
            ngModule: CommonLibraryModule,
            providers: [AuthService, AuthGuardService],
        };
    }
}
CommonLibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CommonLibraryModule });
CommonLibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CommonLibraryModule_Factory(t) { return new (t || CommonLibraryModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: InterceptedHttp,
            multi: true,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            OnehealthModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _onehealth_ui_action_bar__WEBPACK_IMPORTED_MODULE_0__["OHActionBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["NgxWebstorageModule"].forRoot({ prefix: 'jhi', separator: '-' }),
        ], ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["NgxWebstorageModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CommonLibraryModule, { declarations: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        MainContentComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        OnehealthModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        _onehealth_ui_action_bar__WEBPACK_IMPORTED_MODULE_0__["OHActionBarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["NgxWebstorageModule"]], exports: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        MainContentComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent,
        ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["NgxWebstorageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CommonLibraryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    MainContentComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    OnehealthModule,
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                    _onehealth_ui_action_bar__WEBPACK_IMPORTED_MODULE_0__["OHActionBarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["NgxWebstorageModule"].forRoot({ prefix: 'jhi', separator: '-' }),
                ],
                exports: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    MainContentComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                    ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["NgxWebstorageModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: InterceptedHttp,
                        multi: true,
                    },
                ],
            }]
    }], null, null); })();

class MyValidator {
    static DemoValidator(control) {
        return demoValid(control);
    }
}
function demoValid(control) {
    if (control.value != null && control.value.startsWith(' ')) {
        return {
            trimError: { value: 'control has leading whitespace' },
        };
    }
    if (control.value != null && control.value.endsWith(' ')) {
        return {
            trimError: { value: 'control has trailing whitespace' },
        };
    }
    return null;
}

class Account {
}

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
    if (req) {
        Object.keys(req).forEach((key) => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};

const OPERATIONS = {
    DELETE: '/delete',
    SEARCH: '/search',
    UPDATE: '/update',
    DETAILS: '/details',
    CREATE: '/create',
    ADD: '/add',
    UPLOAD: '/upload',
    DOWNLOAD: '/download',
    UPDATELOGO: '/updatelogo',
};
class AppService {
    constructor(http) {
        this.http = http;
        this.resourceUrl = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()
            ? environment.apiUrl
            : window.location.origin + '/';
    }
    changeResourceUrl(url) {
        this.resourceUrl = url;
    }
    create(entity, requestUrl) {
        return this.http.post(this.resourceUrl + requestUrl + OPERATIONS.CREATE, entity, { observe: 'response' });
    }
    update(entity, requestUrl) {
        return this.http.put(this.resourceUrl + requestUrl + OPERATIONS.UPDATE + '?id=' + entity.id, entity, {
            observe: 'response',
        });
    }
    find(id, requestUrl) {
        return this.http.get(`${this.resourceUrl + requestUrl + OPERATIONS.DETAILS}/${id}`, { observe: 'response' });
    }
    getById(id, requestUrl) {
        return this.http.get(this.resourceUrl + requestUrl + OPERATIONS.DETAILS + '?id=' + id, { observe: 'response' });
    }
    createRequestOption(req) {
        return createRequestOption(req);
    }
    query(req, requestUrl) {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl + requestUrl + OPERATIONS.SEARCH, { params: options, observe: 'response' });
    }
    delete(id, requestUrl) {
        return this.http.delete(`${this.resourceUrl + requestUrl + OPERATIONS.DELETE + '?id='}${id}`, { observe: 'response' });
    }
    deleteOption(req, requestUrl, option) {
        const options = createRequestOption(req);
        return this.http.delete(this.resourceUrl + requestUrl + option, {
            params: options,
            observe: 'response',
        });
    }
    postOption(entity, requestUrl, option) {
        return this.http.post(this.resourceUrl + requestUrl + option, entity, {
            observe: 'response',
        });
    }
    postByOption(requestUrl, option) {
        return this.http.post(this.resourceUrl + requestUrl + option, {
            observe: 'response',
        });
    }
    getOption(req, requestUrl, option) {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl + requestUrl + option, {
            params: options,
            observe: 'response',
        });
    }
    getByOption(requestUrl, option) {
        return this.http.get(this.resourceUrl + requestUrl + option, {
            observe: 'response',
        });
    }
    putOption(entity, requestUrl, option) {
        return this.http.put(this.resourceUrl + requestUrl + option, entity, {
            observe: 'response',
        });
    }
    uploadFile(fileToUpload, requestUrl, option) {
        const formData = new FormData();
        formData.append('file', fileToUpload);
        return this.http.post(this.resourceUrl + requestUrl + option, formData, {
            observe: 'response',
        });
    }
    get(requestUrl, option) {
        return this.http.get(this.resourceUrl + requestUrl + option, {
            observe: 'response',
        });
    }
    post(entity, requestUrl, option) {
        return this.http.post(this.resourceUrl + requestUrl + option, entity, {
            observe: 'response',
        });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();

class LoadingService {
    constructor() {
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
    }
    get isLoading() {
        return this.loadingSubject.asObservable();
    }
    show() {
        this.loadingSubject.next(true);
    }
    hide() {
        this.loadingSubject.next(false);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const ITEMS_PER_PAGE = 15;
const PAGE_SIZE_OPTION = [15, 30, 50, 100];

class NestedService {
    updatePropertydById(arr, keyproperty, idToChange, property, newValue) {
        return arr.map((item) => {
            if (item[keyproperty] === idToChange) {
                item[property] = newValue;
                this.updateAllChildrenPropertyd(item, property, newValue);
            }
            if (item.children) {
                item.children = this.updatePropertydById(item.children, keyproperty, idToChange, property, newValue);
            }
            return item;
        });
    }
    updateAllChildrenPropertyd(item, changeProperty, newValue) {
        if (item.children) {
            item.children.forEach((child) => {
                child[changeProperty] = newValue;
                this.updateAllChildrenPropertyd(child, changeProperty, newValue);
            });
        }
    }
    collapse(array, data, $event) {
        if (!$event) {
            if (data.children) {
                data.children.forEach((d) => {
                    const target = array.find((a) => a.id === d.id);
                    target.expand = false;
                    this.collapse(array, target, false);
                });
            }
            else {
                return;
            }
        }
    }
    convertTreeToList(root, defaultExpand = true) {
        const stack = [];
        const array = [];
        const hashMap = {};
        stack.push(Object.assign(Object.assign({}, root), { level: 0, expand: defaultExpand }));
        while (stack.length !== 0) {
            const node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(Object.assign(Object.assign({}, node.children[i]), { level: node.level + 1, expand: defaultExpand, parent: node }));
                }
            }
        }
        return array;
    }
    visitNode(node, hashMap, array) {
        if (!hashMap[node.id]) {
            hashMap[node.id] = true;
            array.push(node);
        }
    }
    addIsLeafToNestedObject(node) {
        if (!node.children || node.children.length === 0) {
            node.isLeaf = true;
        }
        else {
            for (const child of node.children) {
                this.addIsLeafToNestedObject(child);
            }
        }
        return node;
    }
    flattenArray(menuItems, parentProperty, childrenProperty, distinctProperty) {
        let seen = new Set();
        const flattenedItems = [];
        for (const menuItem of menuItems) {
            const flattenedItem = Object.assign({}, menuItem);
            flattenedItems.push(flattenedItem);
            if (menuItem[childrenProperty] &&
                Array.isArray(menuItem[childrenProperty])) {
                const nestedItems = this.flattenArray(menuItem[childrenProperty], parentProperty, childrenProperty, distinctProperty);
                flattenedItems.push(...nestedItems);
            }
            if (menuItem[parentProperty]) {
                if (!Array.isArray(menuItem[parentProperty])) {
                    const nestedItems = this.flattenArray([menuItem[parentProperty]], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
                else {
                    if (Array.isArray(menuItem[parentProperty])) {
                        const nestedItems = this.flattenArray(menuItem[parentProperty], parentProperty, childrenProperty, distinctProperty);
                        flattenedItems.push(...nestedItems);
                    }
                }
            }
        }
        let uniqueArray = flattenedItems.filter((item) => {
            let duplicate = seen.has(item[distinctProperty]);
            seen.add(item[distinctProperty]);
            return !duplicate;
        });
        return uniqueArray;
    }
    buildNested(arr, compareProperty = 'id', parentProperty = 'parent', compareValue = undefined) {
        if (arr && arr.length > 0) {
            let result = [];
            const list = compareValue != undefined
                ? arr.filter((x) => (x[parentProperty]
                    ? x[parentProperty][compareProperty]
                    : undefined) === compareValue)
                : arr.filter((x) => !x[parentProperty]);
            if (list.length > 0) {
                for (let item of list) {
                    let children = this.buildNested(arr, compareProperty, parentProperty, item[compareProperty]);
                    if (children.length) {
                        item.children = children;
                    }
                    delete item[parentProperty];
                    result.push(Object.assign({}, item));
                }
            }
            return result;
        }
        return [];
    }
    findDfs(array, key, targetId, childrenProperty) {
        let result = null;
        array.forEach((obj) => {
            if (obj[key] === targetId) {
                result = obj;
            }
            if (obj[childrenProperty]) {
                const check = this.findDfs(obj[childrenProperty], key, targetId, childrenProperty);
                if (check) {
                    result = check;
                    return;
                }
            }
        });
        return result;
    }
}
NestedService.ɵfac = function NestedService_Factory(t) { return new (t || NestedService)(); };
NestedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NestedService, factory: NestedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NestedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

/*
 * Public API Surface of commonLibrary
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=commonLibrary.js.map


/***/ }),

/***/ "dhJt":
/*!************************************************!*\
  !*** ./projects/main/src/app/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var commonLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! commonLibrary */ "Y2bn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(loading, cdRef, router) {
        this.loading = loading;
        this.cdRef = cdRef;
        this.router = router;
        this.title = 'HIS';
        this.router.events.subscribe((e) => {
            this.navigationInterceptor(e);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.loading.show();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.loading.hide();
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.loading.hide();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.loading.hide();
        }
    }
    ngAfterViewChecked() {
        this.loading.isLoading.subscribe((data) => {
            this.cdRef.detectChanges();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](commonLibrary__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["mainapp-root"]], decls: 4, vars: 3, consts: [[1, "wrapper"], ["class", "overlay", 4, "ngIf"], [1, "overlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.loading.isLoading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mainapp-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: commonLibrary__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "jxI8":
/*!***********************************!*\
  !*** ./projects/main/src/main.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "Uzga");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "WGIU");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "k4xx":
/*!*****************************************************!*\
  !*** ./projects/main/src/app/app-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/home/home.component */ "Ok17");
/* harmony import */ var _layout_empty_empty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/empty/empty.component */ "plwP");






const routes = [
    {
        path: '',
        component: _layout_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            {
                path: '',
                component: _layout_empty_empty_component__WEBPACK_IMPORTED_MODULE_3__["EmptyComponent"],
                data: {
                    title: 'Trang chủ',
                },
            },
            {
                path: 'home',
                component: _layout_empty_empty_component__WEBPACK_IMPORTED_MODULE_3__["EmptyComponent"],
                data: {
                    title: 'Trang chủ',
                },
            },
            {
                path: 'khambenh',
                loadChildren: () => __webpack_require__.e(/*! import() | khambenh-khambenh-module */ "khambenh-khambenh-module").then(__webpack_require__.bind(null, /*! ./khambenh/khambenh.module */ "z5v6")).then((m) => m.KhambenhModule),
            }
        ],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "plwP":
/*!***************************************************************!*\
  !*** ./projects/main/src/app/layout/empty/empty.component.ts ***!
  \***************************************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EmptyComponent {
}
EmptyComponent.ɵfac = function EmptyComponent_Factory(t) { return new (t || EmptyComponent)(); };
EmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyComponent, selectors: [["layout-empty"]], decls: 2, vars: 0, template: function EmptyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "empty works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXB0eS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmptyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'layout-empty',
                templateUrl: './empty.component.html',
                styleUrls: ['./empty.component.css']
            }]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map