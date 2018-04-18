webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_users_login_login_component__ = __webpack_require__("./src/app/views/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_users_register_register_component__ = __webpack_require__("./src/app/views/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_admin_admin_item_edit_admin_item_edit_component__ = __webpack_require__("./src/app/views/admin/admin-item-edit/admin-item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_admin_admin_user_edit_admin_user_edit_component__ = __webpack_require__("./src/app/views/admin/admin-user-edit/admin-user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_item_item_edit_item_edit_component__ = __webpack_require__("./src/app/views/item/item-edit/item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_item_item_display_item_display_component__ = __webpack_require__("./src/app/views/item/item-display/item-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_users_profile_buyer_profile_buyer_profile_component__ = __webpack_require__("./src/app/views/users/profile/buyer-profile/buyer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_users_profile_seller_profile_seller_profile_component__ = __webpack_require__("./src/app/views/users/profile/seller-profile/seller-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_checkout_cart_cart_component__ = __webpack_require__("./src/app/views/checkout/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_checkout_payment_payment_component__ = __webpack_require__("./src/app/views/checkout/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_checkout_summary_summary_component__ = __webpack_require__("./src/app/views/checkout/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_users_profile_buyer_profile_order_history_order_history_component__ = __webpack_require__("./src/app/views/users/profile/buyer-profile/order-history/order-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_home_home_component__ = __webpack_require__("./src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_users_chooser_chooser_component__ = __webpack_require__("./src/app/views/users/chooser/chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_item_item_list_item_list_component__ = __webpack_require__("./src/app/views/item/item-list/item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_users_profile_seller_profile_sale_history_sale_history_component__ = __webpack_require__("./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_admin_admin_profile_admin_profile_component__ = __webpack_require__("./src/app/views/admin/admin-profile/admin-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_home_loggedin_home_loggedin_home_component__ = __webpack_require__("./src/app/views/home/loggedin-home/loggedin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_users_creditcard_creditcard_component__ = __webpack_require__("./src/app/views/users/creditcard/creditcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_users_profile_seller_profile_seller_listing_seller_listing_component__ = __webpack_require__("./src/app/views/users/profile/seller-profile/seller-listing/seller-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__views_users_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_users_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__views_admin_admin_item_edit_admin_item_edit_component__["a" /* AdminItemEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__views_admin_admin_user_edit_admin_user_edit_component__["a" /* AdminUserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_item_item_edit_item_edit_component__["a" /* ItemEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_item_item_display_item_display_component__["a" /* ItemDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_users_profile_buyer_profile_buyer_profile_component__["a" /* BuyerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_users_profile_seller_profile_seller_profile_component__["a" /* SellerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_checkout_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_checkout_payment_payment_component__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_checkout_summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_users_profile_buyer_profile_order_history_order_history_component__["a" /* OrderHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_users_chooser_chooser_component__["a" /* ChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__views_item_item_list_item_list_component__["a" /* ItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__views_users_profile_seller_profile_sale_history_sale_history_component__["a" /* SaleHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__views_admin_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__views_home_loggedin_home_loggedin_home_component__["a" /* LoggedinHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__views_users_creditcard_creditcard_component__["a" /* CreditcardComponent */],
                __WEBPACK_IMPORTED_MODULE_29__views_users_profile_seller_profile_seller_listing_seller_listing_component__["a" /* SellerListingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_28__services_item_service_client__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_30__services_auth_guard_service__["a" /* AuthGuard */], { provide: __WEBPACK_IMPORTED_MODULE_25__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__ = __webpack_require__("./src/app/views/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_users_register_register_component__ = __webpack_require__("./src/app/views/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_admin_admin_item_edit_admin_item_edit_component__ = __webpack_require__("./src/app/views/admin/admin-item-edit/admin-item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_admin_admin_user_edit_admin_user_edit_component__ = __webpack_require__("./src/app/views/admin/admin-user-edit/admin-user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_item_item_edit_item_edit_component__ = __webpack_require__("./src/app/views/item/item-edit/item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_item_item_display_item_display_component__ = __webpack_require__("./src/app/views/item/item-display/item-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_users_profile_buyer_profile_buyer_profile_component__ = __webpack_require__("./src/app/views/users/profile/buyer-profile/buyer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_users_profile_seller_profile_seller_profile_component__ = __webpack_require__("./src/app/views/users/profile/seller-profile/seller-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_checkout_cart_cart_component__ = __webpack_require__("./src/app/views/checkout/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_checkout_payment_payment_component__ = __webpack_require__("./src/app/views/checkout/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_checkout_summary_summary_component__ = __webpack_require__("./src/app/views/checkout/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_users_profile_buyer_profile_order_history_order_history_component__ = __webpack_require__("./src/app/views/users/profile/buyer-profile/order-history/order-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_home_home_component__ = __webpack_require__("./src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_users_chooser_chooser_component__ = __webpack_require__("./src/app/views/users/chooser/chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_item_item_list_item_list_component__ = __webpack_require__("./src/app/views/item/item-list/item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_users_profile_seller_profile_sale_history_sale_history_component__ = __webpack_require__("./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_admin_admin_profile_admin_profile_component__ = __webpack_require__("./src/app/views/admin/admin-profile/admin-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_home_loggedin_home_loggedin_home_component__ = __webpack_require__("./src/app/views/home/loggedin-home/loggedin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_users_creditcard_creditcard_component__ = __webpack_require__("./src/app/views/users/creditcard/creditcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_users_profile_seller_profile_seller_listing_seller_listing_component__ = __webpack_require__("./src/app/views/users/profile/seller-profile/seller-listing/seller-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");






















var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__views_home_home_component__["a" /* HomeComponent */] },
    { path: 'loggedinhome/user', component: __WEBPACK_IMPORTED_MODULE_18__views_home_loggedin_home_loggedin_home_component__["a" /* LoggedinHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__views_users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/chooser', component: __WEBPACK_IMPORTED_MODULE_14__views_users_chooser_chooser_component__["a" /* ChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/admin', component: __WEBPACK_IMPORTED_MODULE_17__views_admin_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/buyer', component: __WEBPACK_IMPORTED_MODULE_7__views_users_profile_buyer_profile_buyer_profile_component__["a" /* BuyerProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/seller', component: __WEBPACK_IMPORTED_MODULE_8__views_users_profile_seller_profile_seller_profile_component__["a" /* SellerProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/admin/edititem', component: __WEBPACK_IMPORTED_MODULE_3__views_admin_admin_item_edit_admin_item_edit_component__["a" /* AdminItemEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/admin/edituser', component: __WEBPACK_IMPORTED_MODULE_4__views_admin_admin_user_edit_admin_user_edit_component__["a" /* AdminUserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/seller/new', component: __WEBPACK_IMPORTED_MODULE_5__views_item_item_edit_item_edit_component__["a" /* ItemEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/seller/listing', component: __WEBPACK_IMPORTED_MODULE_20__views_users_profile_seller_profile_seller_listing_seller_listing_component__["a" /* SellerListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/seller/item/:iid', component: __WEBPACK_IMPORTED_MODULE_5__views_item_item_edit_item_edit_component__["a" /* ItemEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/item/:iid', component: __WEBPACK_IMPORTED_MODULE_6__views_item_item_display_item_display_component__["a" /* ItemDisplayComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/buyer/:uid/cart', component: __WEBPACK_IMPORTED_MODULE_9__views_checkout_cart_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/buyer/:uid/payment', component: __WEBPACK_IMPORTED_MODULE_10__views_checkout_payment_payment_component__["a" /* PaymentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/buyer/:uid/summary', component: __WEBPACK_IMPORTED_MODULE_11__views_checkout_summary_summary_component__["a" /* SummaryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/buyer/:uid/history', component: __WEBPACK_IMPORTED_MODULE_12__views_users_profile_buyer_profile_order_history_order_history_component__["a" /* OrderHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/seller/:uid/history', component: __WEBPACK_IMPORTED_MODULE_16__views_users_profile_seller_profile_sale_history_sale_history_component__["a" /* SaleHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/seller/:uid/creditcard', component: __WEBPACK_IMPORTED_MODULE_19__views_users_creditcard_creditcard_component__["a" /* CreditcardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/buyer/:uid/creditcard', component: __WEBPACK_IMPORTED_MODULE_19__views_users_creditcard_creditcard_component__["a" /* CreditcardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/searchresult', component: __WEBPACK_IMPORTED_MODULE_15__views_item_item_list_item_list_component__["a" /* ItemListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/guest/searchresult', component: __WEBPACK_IMPORTED_MODULE_15__views_item_item_list_item_list_component__["a" /* ItemListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/guest/item/:iid', component: __WEBPACK_IMPORTED_MODULE_6__views_item_item_display_item_display_component__["a" /* ItemDisplayComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/item.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemService = /** @class */ (function () {
    function ItemService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    ItemService.prototype.findItemById = function (itemId) {
        var url = this.baseUrl + '/api/item/' + itemId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.findItemByName = function (name) {
        var url = this.baseUrl + '/api/items/' + name;
        return this.http.get(url).map(function (response) {
            //  console.log(response);
            return response.json();
        });
    };
    ItemService.prototype.findItemByCategory = function (category) {
        var url = this.baseUrl + '/api/category/' + category;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.updateItem = function (itemId, item) {
        var url = this.baseUrl + '/api/item/' + itemId;
        return this.http.put(url, item).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.deleteItem = function (itemId) {
        var url = this.baseUrl + '/api/item/' + itemId;
        return this.http.delete(url).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.findAllItem = function () {
        var url = this.baseUrl + '/api/allitem';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.createItem = function (sellerId, name, price, color, size, category, imgurl) {
        var url = this.baseUrl + '/api/item';
        var body = {
            _seller: sellerId,
            name: name,
            price: price,
            color: color,
            size: size,
            category: category,
            url: imgurl
        };
        return this.http.post(url, body).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.findItemBySellerId = function (userId) {
        var url = this.baseUrl + '/api/salehistory/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.findItemByBuyerId = function (userId) {
        var url = this.baseUrl + '/api/orderhistory/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.findSellerListing = function (userId) {
        var url = this.baseUrl + '/api/sellerlisting/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
        this.items = [{}];
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user as global variable using shared service
                return true;
            }
            else {
                alert('Please login.');
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (username, password, userType) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password,
            userType: userType
        };
        return this.http.post(this.baseUrl + '/api/register', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        var url = this.baseUrl + '/api/user/?username=' + username + '&password=' + password;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/username/' + username;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findAllUser = function () {
        var url = this.baseUrl + '/api/users';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsernames = function (username) {
        var url = this.baseUrl + '/api/usernames/' + username;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/style.css":
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  color: white;\n  background-color: #E1282A;\n}\n\n.logo {\n  height: 10%;\n  width: 10%;\n  border: 1px solid black;\n}\n\n.btn-danger {\n  font-family: \"Courier New\";\n  font-weight: bold;\n  background-color: #E1282A;\n  border: 1px solid black;\n}\n\n.link-button:hover {\n  background-color: #E1282A;\n  border: 1px solid black;\n}\n\n.banner {\n  width: 100%;\n}\n\n.body-black {\n  background-color: black;\n}\n\n.center-search {\n  display: block;\n  margint-top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.footer-color {\n  background-color: #E1282A;\n}\n\n.supreme-font {\n  font-family: \"Courier New\";\n  color:white;\n\n}\n\n.fa {\n  font-size: 15px;\n}\n\n.fa:hover{\n  color: black;\n}\n\n.white_text {\n  color: white;\n}\n\n.center_input {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  margin-bottom: 8px;\n}\n\n.center_text {\n  text-align: center;\n}\n\n.text-font-size {\n  font-size: 20px;\n}\n\n.input_padding {\n  padding-top: 10px;\n}\n\n.footer-padding {\n  margin-bottom: 100%;\n}\n\n.small-button {\n  width: 50%;\n  font-size: 10px;\n}\n\nbutton {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.a-no-hover:hover {\n  text-decoration: none;\n}\n\n.a-no-color {\n  color: white;\n}\n\n.a-no-visited:visited {\n  color: white;\n}\n\n.form-wrapper {\n  margin: 10px;\n  horiz-align: center;\n  border: 1px solid white;\n}\n\n.full-input {\n  border: 2px solid #E1282A;\n}\n\nlabel {\n  display: block;\n  font-size: 12px;\n  color: #E1282A;\n}\n\n.input-white-text {\n  color: white;\n}\n\n.left-border-white {\n  border-left: 1px solid white;\n}\n\n.corner-button {\n  position: fixed;\n  bottom: 90px;\n  right: 20px;\n  width: 40%;\n  horiz-align: center;\n}\n\n.supreme-text-logo {\n  font-size: 20px;\n  padding-left: 20px\n}\n\n.img-display-size {\n  height: 300px;\n  width: 300px;\n}\n\n.center-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n}\n\n.black-card {\n  background: black;\n}\n\n.header-margin-bottom{\n  margin-bottom: 20px;\n}\n\n.btn-outline-danger{\n  color:#E1282A;\n}\n\n.left-column{\n  width:25%;\n  height: 100%;\n  float:left;\n}\n\n.right-column{\n  height: 100%;\n}\n\n.full-border {\n  border: 2px solid #E1282A;\n}\n\n.bottom-button {\n  margin-bottom:20px;\n}\n\n.big-box {\n  margin: 2% 3% 3%;\n}\n\n.item-text {\n  color: black;\n  font-family: \"Courier New\";\n}\n\nhtml, body{\n  height: 100%;\n}\n\n.pagination {\n  margin: 50px;\n  display: inline-block;\n}\n\n.pagination a {\n  color: #E1282A;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border: 1px solid #E1282A;\n}\n\n.pagination a:hover:not(.active) {background-color: white;}\n\n.card-columns{\n  padding-top:10px;\n  margin-bottom: 50px;\n}\n\n.text-black{\n  color: black;\n}\n\nhtml, body {\n  max-width: 100%;\n  overflow-x: hidden;\n}\n"

/***/ }),

/***/ "./src/app/style_derek.css":
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n    color: white;\n    background-color: #E1282A;\n}\n.logo{\n    height: 10%;\n    width: 10%;\n    border: 1px solid black;\n}\n.btn-danger{\n    font-family: \"Courier New\";\n    font-weight: bold;\n    background-color: #E1282A;\n    border: 1px solid black;\n}\n.link-button:hover{\n    background-color: #E1282A;\n    border: 1px solid black;\n}\n.banner{\n    width:100%;\n}\n.body-pink{\n    background-color: black;\n}\n.center-search{\n    display: block;\n    margint-top:100px;\n    margin-left: auto;\n    margin-right:auto;\n}\n.footer-color{\n    background-color: #E1282A;\n}\n.supreme-font{\n    font-family: \"Courier New\";\n    color: white;\n}\n.center-input{\n    display: block;\n    margin-left: auto;\n    margin-right:auto;\n    width: 65%;\n    margin-bottom: 8px;\n}\n.center-text{\n    text-align: center;\n}\n.btn-outline-danger{\n    color: #E1282A;\n}\n.footer-padding{\n    margin-bottom: 75px;\n}\n.header-padding{\n    margin-bottom: 100px;\n}\n.left-column{\n    /*background-color: green;*/\n    width:25%;\n    height: 100%;\n    float:left;\n}\n.right-column{\n    /*background-color: red;*/\n    height: 100%;\n}\n.left-border {\n    border: 2px solid #E1282A;\n    height: 80vh;\n}\n.right-border {\n    border: 2px solid #E1282A;\n    height: 80vh;\n}\n.bottom-button {\n    position:relative;\n    margin-top:95%;\n}\n.big-box {\n    margin: 2% 3% 3%;\n}\n.input_padding {\n    padding-top: 40%;\n}\n.item-text {\n    color: black;\n    font-family: \"Courier New\";\n}\nhtml, body{\n    height: 100%;\n}\n.pagination {\n    margin: 50px;\n    display: inline-block;\n}\n.pagination a {\n    color: #E1282A;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    -webkit-transition: background-color .3s;\n    transition: background-color .3s;\n    border: 1px solid #E1282A;\n}\n.pagination a:hover:not(.active) {background-color: white;}\n.white_text {\n    color: white;\n}\n.a-no-hover:hover {\n    text-decoration: none;\n}\n.a-no-color {\n    color: white;\n}\n.a-no-visited:visited {\n    color: white;\n}\n.supreme-text-logo {\n    font-size: 20px;\n    padding-left: 20px\n}\n"

/***/ }),

/***/ "./src/app/views/admin/admin-item-edit/admin-item-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Edit Item</title>\n</head>\n\n<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i></a>\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       href=\" \">S U P R E M E</a></span>\n  </div>\n</nav>\n\n<!--<div class=\"footer-padding\">-->\n<div class=\"center_text big-box row\">\n  <div class=\"card col-lg-2 col-md-12 col-sm-12 col-xs-12 black-card full-border footer-padding\">\n    <div class=\"center_input input_padding\">\n      <form (ngSubmit)=\"findCategory()\" #f=\"ngForm\" class=\"center_input input_padding\">\n        <span><label class=\"supreme-font\">Category</label></span>\n        <select name=\"size\" style=\"margin-bottom: 20px\" [(ngModel)]=\"category\">\n          <option>Jacket</option>\n          <option>Shirt</option>\n          <option>Top</option>\n          <option>Sweatshirt</option>\n          <option>Pants</option>\n          <option>Hat</option>\n          <option>Bag</option>\n          <option>Skate</option>\n          <option>Accessory</option>\n        </select><br>\n        <button type=\"submit\" class=\"btn-outline-danger bottom-button supreme-font\" style=\"color: white\">Search</button>\n      </form>\n      <br>\n      <button class=\"btn-outline-danger bottom-button supreme-font\" style=\"color: white\" (click)=\"findAllItem()\">Show\n        All\n      </button>\n    </div>\n  </div>\n\n  <div class=\" card col-lg-10 col-md-12 col-sm-12 col-xs-12 black-card full-border footer-padding\">\n    <div class=\"card-columns\" style=\"padding: 10px\">\n      <div class=\"card text-center\" *ngFor=\"let item of itemList\">\n        <img class=\"card-img-top\" src={{item.url}} alt=\"Card image cap\">\n        <div class=\"card-body item-text\">\n          Name: {{item.name}}<br>\n          Color: {{item.color}}<br>\n          Size: {{item.size}}<br>\n          Price: ${{item.price}}<br>\n          Seller ID: {{item._seller}}<br>\n          <label class=\"btn btn-outline-danger btn-block center_input supreme-font\" (click)=\"deleteItem(item._id)\">Delete</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" routerLink=\"user/admin\"><i class=\"fa fa-user\"></i></a>\n</div>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/views/admin/admin-item-edit/admin-item-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminItemEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminItemEditComponent = /** @class */ (function () {
    function AdminItemEditComponent(itemService, router, sharedService, activatedRoute) {
        this.itemService = itemService;
        this.router = router;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
    }
    AdminItemEditComponent.prototype.ngOnInit = function () {
        console.log(this.sharedService.user);
        this.itemList = [{}];
    };
    AdminItemEditComponent.prototype.findCategory = function () {
        var _this = this;
        this.itemService.findItemByCategory(this.category).subscribe(function (returnList) {
            _this.itemList = returnList;
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        });
    };
    AdminItemEditComponent.prototype.findAllItem = function () {
        var _this = this;
        this.itemService.findAllItem().subscribe(function (returnList) {
            _this.itemList = returnList;
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        });
        this.category = undefined;
    };
    AdminItemEditComponent.prototype.deleteItem = function (itemId) {
        this.itemService.deleteItem(itemId).subscribe(function (data) {
        });
        if (this.category === undefined) {
            this.findAllItem();
        }
        else {
            this.findCategory();
        }
        this.router.navigate(['.'], { relativeTo: this.activatedRoute });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], AdminItemEditComponent.prototype, "loginForm", void 0);
    AdminItemEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-item-edit',
            template: __webpack_require__("./src/app/views/admin/admin-item-edit/admin-item-edit.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_item_service_client__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AdminItemEditComponent);
    return AdminItemEditComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/admin-profile/admin-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Admin</title>\n</head>\n<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" href=\" \"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\" routerLink=\"/loggedinhome/user\">S U P R E M E</a ></span>\n\n  </div>\n</nav>\n\n<div class=\"supreme-font footer-padding\">\n  <p class=\"center_text supreme-font\">Admin</p >\n  <a class=\"btn btn-outline-danger btn-block center_input\" (click)=\"editItem()\">Edit Items</a >\n  <a class=\"btn btn-outline-danger btn-block center_input\" (click)=\"editUser()\">Edit User</a >\n  <a class=\"btn btn-outline-danger btn-block center_input\" (click)=\"logout()\">Logout</a >\n</div>\n\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\"><i class=\"fa fa-user\"></i></a >\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/views/admin/admin-profile/admin-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProfileComponent = /** @class */ (function () {
    function AdminProfileComponent(router) {
        this.router = router;
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
    };
    AdminProfileComponent.prototype.editItem = function () {
        this.router.navigate(['user/admin/edititem']);
    };
    AdminProfileComponent.prototype.editUser = function () {
        this.router.navigate(['user/admin/edituser']);
    };
    AdminProfileComponent.prototype.logout = function () {
        this.router.navigate(['login']);
    };
    AdminProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-profile',
            template: __webpack_require__("./src/app/views/admin/admin-profile/admin-profile.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/admin-user-edit/admin-user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       href=\" \">S U P R E M E</a ></span>\n  </div>\n</nav>\n\n<div class=\"center_text big-box row\">\n  <div class=\"card col-lg-2 col-md-12 col-sm-12 col-xs-12 black-card full-border footer-padding\">\n    <form (ngSubmit)=\"findUser()\" #f=\"ngForm\" class=\"center_input input_padding\">\n      <label class=\"supreme-font\">User Search</label>\n      <input\n        [(ngModel)]=\"search\"\n        style=\"width: 100%\"\n        type=\"text\"\n        placeholder=\"Search..\"\n        name=\"search\"><br>\n      <button type=\"submit\" class=\"btn-outline-danger bottom-button supreme-font\" style=\"color: white\">Search</button>\n    </form>\n    <button (click)=\"findAllUser()\" class=\"btn-outline-danger bottom-button supreme-font\" style=\"color: white\">Show\n      All\n    </button>\n  </div>\n\n  <div class=\"card col-lg-10 col-md-12 col-sm-12 col-xs-12 black-card full-border footer-padding\">\n    <div id='content'>\n      <ul id=\"ul1\" class=\"list-group supreme-font list-group-flush\">\n        <div *ngFor=\"let user of userList\">\n          <li class=\"center_input\" style=\"margin-top: 10px\">\n            Username: {{user.username}}<br>\n            UserID: {{user._id}}<br>\n            <span (click)=\"delete(user._id)\" class=\"btn btn-outline-danger btn-block center_input\">Delete</span>\n          </li>\n        </div>\n      </ul>\n      <div id=\"pagenum\"><a href=\"#\" style=\"color: white\">1</a > <a style=\"color: white\" href=\"#\">2</a > <a\n        style=\"color: white\" href=\"#\">3</a >\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" href=\" \"><i class=\"fa fa-user\"></i></a >\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/admin/admin-user-edit/admin-user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUserEditComponent = /** @class */ (function () {
    function AdminUserEditComponent(userService, router, sharedService, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
    }
    AdminUserEditComponent.prototype.ngOnInit = function () {
        console.log(this.sharedService.user);
        this.userList = [{}];
    };
    AdminUserEditComponent.prototype.findAllUser = function () {
        var _this = this;
        this.userService.findAllUser().subscribe(function (returnList) {
            _this.userList = returnList;
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        });
        this.search = undefined;
    };
    AdminUserEditComponent.prototype.findUser = function () {
        var _this = this;
        this.search = this.loginForm.value.search;
        this.userService.findUserByUsernames(this.search).subscribe(function (returnList) {
            _this.userList = returnList;
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        });
    };
    AdminUserEditComponent.prototype.delete = function (userId) {
        this.userService.deleteUser(userId).subscribe(function (data) {
        });
        if (this.search === undefined) {
            this.findAllUser();
        }
        else {
            this.findUser();
        }
        this.router.navigate(['.'], { relativeTo: this.activatedRoute });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */])
    ], AdminUserEditComponent.prototype, "loginForm", void 0);
    AdminUserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-user-edit',
            template: __webpack_require__("./src/app/views/admin/admin-user-edit/admin-user-edit.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AdminUserEditComponent);
    return AdminUserEditComponent;
}());



/***/ }),

/***/ "./src/app/views/checkout/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/checkout/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/checkout/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/views/checkout/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/views/checkout/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/views/checkout/payment/payment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/checkout/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  payment works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/checkout/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-payment',
            template: __webpack_require__("./src/app/views/checkout/payment/payment.component.html"),
            styles: [__webpack_require__("./src/app/views/checkout/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/views/checkout/summary/summary.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/checkout/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  summary works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/checkout/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__("./src/app/views/checkout/summary/summary.component.html"),
            styles: [__webpack_require__("./src/app/views/checkout/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>home</title>\n</head>\n<body class=\"body-black\">\n\n<nav class=\"navbar navbar-default\">\n  <span class=\"supreme-font\">S U P R E M E</span>\n  <div>\n    <a class=\"btn btn-danger pull-right link-button\" routerLink=\"/login\" style=\"margin-left: 5px\">Login</a >\n    <a class=\"btn btn-danger pull-right link-button\" routerLink=\"/register\">Register</a >\n  </div>\n</nav>\n\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\" style=\"height:270px\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../../assets/full_supreme_lv.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/full_supreme_rimova.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/full_supreme_tnf.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\" \" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a >\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a >\n</div>\n\n<div class=\"row justify-content-center\" style=\"margin-top: 10px\">\n  <div class=\"col-8\">\n    <form (ngSubmit)=\"search()\" #f=\"ngForm\">\n      <div class=\"input-group\">\n        <input class=\"form-control\"\n               type=\"text\"\n               placeholder=\"Search...\"\n               name=\"searchContent\"\n               [(ngModel)]=\"searchContent\">\n        <span class=\"input-group-btn\">\n        <button class=\"btn btn-danger\" type=\"submit\">Go</button>\n      </span>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"card-columns\" style=\"padding-top: 10px\">\n  <div class=\"card text-center\">\n    <a (click)=\"searchTop()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Top.png\" alt=\"Card image cap\" href=\"user/searchresult\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchTop()\">Top</h5>\n    </div>\n\n  </div>\n  <div class=\"card p-3 text-center\">\n    <a (click)=\"searchSweatershirt()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Sweatshirt.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchSweatershirt()\">Sweatshirt</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchAccessory()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Accessory.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchAccessory()\">Accessory</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center p-3\">\n    <a (click)=\"searchJacket()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Jacket.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchJacket()\">Jacket</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchSkate()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Skate.jpg\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchSkate()\">Skate</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchPants()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Pant.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchPants()\">Pants</h5>\n    </div>\n  </div>\n\n  <div class=\"card p-3 text-center\">\n    <a (click)=\"searchBag()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Bag.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchBag()\">Bag</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchHat()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Hat.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchHat()\">Hat</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchShirt()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../assets/Shirt.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchShirt()\">Shirt</h5>\n    </div>\n  </div>\n\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" href=\".\"><i class=\"fa fa-user\" style=\"color: #E1282A\"></i></a >\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(itemService, activatedRoute, router, sharedService) {
        this.itemService = itemService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.items = [{}];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.itemName = this.homeForm.value.searchContent;
        this.itemService.findItemByName(this.itemName).subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.sharedService.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchTop = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Top').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchSweatershirt = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Sweatershirt').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchAccessory = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Accessory').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchJacket = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Jacket').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchSkate = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Skate').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchPants = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Pants').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchBag = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Bags').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchHat = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Hat').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    HomeComponent.prototype.searchShirt = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Shirt').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
    ], HomeComponent.prototype, "homeForm", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/views/home/home.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_item_service_client__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/loggedin-home/loggedin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>home</title>\n</head>\n<body class=\"body-black\">\n\n<nav class=\"navbar navbar-default\">\n  <span class=\"supreme-font\">S U P R E M E</span>\n  <div>\n    <span class=\"supreme-font pull-right\" style=\"margin-left: 5px\">Welcome {{username}}!</span>\n  </div>\n</nav>\n\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\" style=\"height:270px\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../../../assets/full_supreme_lv.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../../assets/full_supreme_rimova.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../../assets/full_supreme_tnf.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\" \" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a >\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a >\n</div>\n\n<div class=\"row justify-content-center\" style=\"margin-top: 10px\">\n  <div class=\"col-8\">\n    <form (ngSubmit)=\"search()\" #f=\"ngForm\">\n      <div class=\"input-group\">\n        <input class=\"form-control\"\n               type=\"text\"\n               placeholder=\"Search...\"\n               name=\"searchContent\"\n               [(ngModel)]=\"searchContent\">\n        <span class=\"input-group-btn\">\n        <button class=\"btn btn-danger\" type=\"submit\">Go</button>\n      </span>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"card-columns\" style=\"padding-top: 10px\">\n  <div class=\"card text-center\">\n    <a (click)=\"searchTop()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Top.png\" alt=\"Card image cap\" href=\"user/searchresult\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchTop()\">Top</h5>\n    </div>\n\n  </div>\n  <div class=\"card p-3 text-center\">\n    <a (click)=\"searchSweatershirt()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Sweatshirt.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchSweatershirt()\">Sweatshirt</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchAccessory()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Accessory.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchAccessory()\">Accessory</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center p-3\">\n    <a (click)=\"searchJacket()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Jacket.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchJacket()\">Jacket</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchSkate()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Skate.jpg\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchSkate()\">Skate</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchPants()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Pant.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchPants()\">Pants</h5>\n    </div>\n  </div>\n\n  <div class=\"card p-3 text-center\">\n    <a (click)=\"searchBag()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Bag.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchBag()\">Bag</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchHat()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Hat.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchHat()\">Hat</h5>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <a (click)=\"searchShirt()\" class=\"a-no-hover\">\n      <img class=\"card-img-top\" src=\"../../../../assets/Shirt.png\" alt=\"Card image cap\">\n    </a >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" (click)=\"searchShirt()\">Shirt</h5>\n    </div>\n  </div>\n\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" (click)=\"profile()\"><i class=\"fa fa-user\"></i></a >\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/home/loggedin-home/loggedin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoggedinHomeComponent = /** @class */ (function () {
    function LoggedinHomeComponent(itemService, userService, activatedRoute, router, sharedService) {
        this.itemService = itemService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.items = [{}];
    }
    LoggedinHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            return _this.userService.findUserById(_this.sharedService.user['_id']).subscribe(function (returnUser) {
                _this.userId = _this.sharedService.user['_id'];
                console.log(_this.userId);
                _this.user = returnUser;
                _this.username = _this.user.username;
                console.log(_this.username);
            });
        });
    };
    LoggedinHomeComponent.prototype.profile = function () {
        if (this.user.userType === 'Buyer') {
            this.router.navigate(['user/buyer']);
        }
        if (this.user.userType === 'Seller') {
            this.router.navigate(['user/seller']);
        }
        if (this.user.userType === 'Admin') {
            this.router.navigate(['user/admin']);
        }
    };
    LoggedinHomeComponent.prototype.search = function () {
        var _this = this;
        this.itemName = this.homeForm.value.searchContent;
        this.itemService.findItemByName(this.itemName).subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.sharedService.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchTop = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Top').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchSweatershirt = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Sweatershirt').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchAccessory = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Accessory').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchJacket = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Jacket').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchSkate = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Skate').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchPants = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Pants').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchBag = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Bags').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchHat = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Hat').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    LoggedinHomeComponent.prototype.searchShirt = function () {
        var _this = this;
        return this.itemService.findItemByCategory('Shirt').subscribe(function (returnItems) {
            _this.sharedService.items = returnItems;
            console.log(_this.items);
            _this.router.navigate(['user/searchresult']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
    ], LoggedinHomeComponent.prototype, "homeForm", void 0);
    LoggedinHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loggedin-home',
            template: __webpack_require__("./src/app/views/home/loggedin-home/loggedin-home.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_item_service_client__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]])
    ], LoggedinHomeComponent);
    return LoggedinHomeComponent;
}());



/***/ }),

/***/ "./src/app/views/item/item-display/item-display.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>item_display</title>\n</head>\n<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div *ngIf=\"isSeller\"\n       class=\"alert alert-danger\">\n    {{isSellerMsg}}\n  </div>\n\n  <div *ngIf=\"isGuest\"\n       class=\"alert alert-danger\">\n    {{isGuestMsg}}\n  </div>\n\n  <div *ngIf=\"isDuplicate\"\n       class=\"alert alert-danger\">\n    {{isDuplicateMsg}}\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"supreme-font\">\n      <a class=\"white_text\" routerLink=\"/user/searchresult\"><i class=\"fa fa-chevron-left\"></i></a>\n      <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                         routerLink=\"/home\">S U P R E M E</a></span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"footer-padding\">\n  <img class=\"card-img-top img-display-size center-image\" src={{itemUrl}} alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-text\">\n      <div class=\"center_text\">\n        <p class=\"supreme-font white_text\">{{itemName}}</p>\n        <p class=\"supreme-font white_text\">color: {{itemColor}}</p>\n        <p class=\"supreme-font white_text\">Size: {{itemSize}}</p>\n        <p class=\"supreme-font white_text\">Category: {{itemCategory}}</p>\n        <p class=\"supreme-font white_text\">Price: ${{itemPrice}}</p>\n        <a class=\"btn btn-danger link-button\" (click)=\"addToCart()\" style=\"color: white\">add to cart</a>\n        <a class=\"btn btn-danger link-button\" routerLink=\"/user/searchresult\">keep shopping</a>\n      </div>\n    </h5>\n  </div>\n</div>\n\n\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" (click)=\"goToProfile()\"><i class=\"fa fa-user\"></i></a>\n</div>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/views/item/item-display/item-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemDisplayComponent = /** @class */ (function () {
    function ItemDisplayComponent(itemService, router, activatedRoute, sharedService, userService) {
        this.itemService = itemService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.userService = userService;
        this.isSeller = false;
        this.isGuest = false;
        this.isDuplicate = false;
        this.isSellerMsg = 'You are not able to buy! Please Switch to Buyer account to buy!';
        this.isGuestMsg = 'Please register to buy!';
        this.isDuplicateMsg = 'Item has already been added to your cart';
    }
    ItemDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params.subscribe(function (params) {
            _this.iid = params['iid'];
            return _this.itemService.findItemById(_this.iid).subscribe(function (item) {
                _this.item = item;
                _this.itemCategory = _this.item.category;
                _this.itemName = _this.item.name;
                _this.itemColor = _this.item.color;
                _this.itemUrl = _this.item.url;
                _this.itemPrice = _this.item.price;
                _this.itemSize = _this.item.size;
            });
        });
    };
    ItemDisplayComponent.prototype.goToProfile = function () {
        if (this.user.userType === 'Buyer') {
            this.router.navigate(['user/buyer']);
        }
        if (this.user.userType === 'Seller') {
            this.router.navigate(['user/seller']);
        }
        if (this.user.userType === 'Admin') {
            this.router.navigate(['user/admin']);
        }
    };
    ItemDisplayComponent.prototype.addToCart = function () {
        var _this = this;
        if (this.user === '') {
            this.isGuest = true;
            return;
        }
        else {
            this.isGuest = false;
        }
        if (this.user.userType === 'Seller') {
            this.isSeller = true;
            return;
        }
        else {
            this.isSeller = false;
        }
        for (var _i = 0; _i < this.user.cart.length; _i++) {
            var currItem = this.user.cart[_i];
            console.log(currItem);
            if (currItem._id === this.item._id) {
                this.isDuplicate = true;
                return;
            }
        }
        this.isDuplicate = false;
        this.user.cart.push(this.item);
        this.userService.updateUser(this.userId, this.user).subscribe(function (returnUser) {
            _this.sharedService.user = returnUser;
            _this.router.navigate(['loggedinhome/user'], { relativeTo: _this.activatedRoute });
            window.confirm('Item added!');
        });
    };
    ItemDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-display',
            template: __webpack_require__("./src/app/views/item/item-display/item-display.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_item_service_client__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]])
    ], ItemDisplayComponent);
    return ItemDisplayComponent;
}());



/***/ }),

/***/ "./src/app/views/item/item-edit/item-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"pull-left white_text\" href=\" \"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       routerLink=\"/loggedinhome/user\">S U P R E M E</a ></span>\n\n  </div>\n  <div>\n    <a class=\"pull-right white_text\" (click)=\"f.ngSubmit.emit()\"><i class=\"fa fa-check\"></i></a >\n  </div>\n</nav>\n<p class=\"center_text supreme-font white_text text-font-size\">Edit Item</p >\n<form (ngSubmit)=\"updateOrCreate()\" #f=\"ngForm\">\n  <div class=\"form-group\">\n    <div class=\"center_input input_padding\">\n      <label class=\"white_text supreme-font\">Name</label>\n      <input\n        [(ngModel)]=\"name\"\n        name=\"name\"\n        type=\"text\"\n        class=\"form-control supreme-font\"\n        style=\"color: black\"\n        placeholder=\"{{name}}\"\n      >\n    </div>\n\n    <div class=\"center_input input_padding\">\n      <label class=\"white_text supreme-font\">Color</label>\n      <input [(ngModel)]=\"color\"\n             name=\"color\"\n             type=\"text\"\n             class=\"form-control supreme-font\"\n             style=\"color: black\"\n             placeholder=\"{{color}}\">\n    </div>\n\n    <div class=\"center_input input_padding\">\n      <label class=\"white_text supreme-font\">Price</label>\n      <input [(ngModel)]=\"price\"\n             name=\"price\"\n             type=\"text\"\n             class=\"form-control supreme-font\"\n             style=\"color: black\"\n             placeholder=\"{{price}}\">\n    </div>\n    <div class=\"center_input input_padding\">\n      <label class=\"white_text supreme-font\">Image</label>\n      <input [(ngModel)]=\"imgurl\"\n             name=\"imgurl\"\n             type=\"text\"\n             class=\"form-control supreme-font\"\n             style=\"color: black\"\n             placeholder=\"{{imgurl}}\"\n      >\n    </div>\n    <div class=\"center_input input_padding\">\n      <label class=\"white_text supreme-font\">Category</label>\n      <select [(ngModel)]=\"category\"\n              name=\"category\"\n              class=\"form-control supreme-font\"\n              style=\"color: black\">\n        <option value=\"Jacket\">Jacket</option>\n        <option value=\"Shirt\">Shirt</option>\n        <option value=\"Top\">Top</option>\n        <option value=\"Sweatshirt\">Sweatshirt</option>\n        <option value=\"Pants\">Pants</option>\n        <option value=\"Hat\">Hat</option>\n        <option value=\"Bag\">Bag</option>\n        <option value=\"Skate\">Skate</option>\n        <option value=\"Accessory\">Accessory</option>\n      </select>\n    </div>\n\n    <div class=\"center_input input_padding\">\n      <label class=\"white_text supreme-font\">Size</label>\n      <select [(ngModel)]=\"size\"\n              name=\"size\"\n              class=\"form-control supreme-font\"\n              style=\"color: black\">\n        <option value=\"Small\">Small</option>\n        <option value=\"Medium\">Medium</option>\n        <option value=\"Large\">Large</option>\n        <option value=\"XLarge\">XLarge</option>\n        <option value=\"noSize\">noSize</option>\n      </select>\n    </div>\n  </div>\n  <button class=\"btn btn-outline-danger btn-block center_input supreme-font white_text\">Upload Imgage</button>\n  <button class=\"btn btn-outline-danger btn-block center_input supreme-font white_text\">Image from Flickr</button>\n  <button class=\"btn btn-outline-danger btn-block center_input supreme-font white_text\" (click)=\"delete()\">Delete</button>\n  <button class=\"btn btn-outline-danger btn-block center_input supreme-font white_text\" routerLink=\"../\">Cancel</button>\n</form>\n\n<div class=\" card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" href=\" \"><i class=\"fa fa-user\"></i></a >\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/item/item-edit/item-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemEditComponent = /** @class */ (function () {
    function ItemEditComponent(itemService, sharedService, activatedRoute, router) {
        this.itemService = itemService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ItemEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sellerId = this.sharedService.user['_id'];
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.itemId = params['iid'];
            if (_this.itemId !== undefined) {
                _this.itemService.findItemById(_this.itemId).subscribe(function (returnItem) {
                    _this.item = returnItem;
                    _this.name = _this.item.name;
                    _this.color = _this.item.color;
                    _this.price = _this.item.price;
                    _this.url = _this.item.url;
                    _this.category = _this.item.category;
                    _this.size = _this.item.size;
                });
            }
            else {
                _this.item = { name: '', price: '', color: '', url: '', category: '', size: '' };
                _this.name = _this.item.name;
                _this.color = _this.item.color;
                _this.price = _this.item.price;
                _this.url = _this.item.url;
                _this.category = _this.item.category;
                _this.size = _this.item.size;
            }
        });
    };
    ItemEditComponent.prototype.updateOrCreate = function () {
        var _this = this;
        this.item.name = this.loginForm.value.name;
        this.item.color = this.loginForm.value.color;
        this.item.price = this.loginForm.value.price;
        this.item.url = this.loginForm.value.url;
        this.item.category = this.loginForm.value.category;
        this.item.size = this.loginForm.value.size;
        if (this.itemId !== undefined) {
            return this.itemService.updateItem(this.itemId, this.item).subscribe(function (returnItem) {
                _this.router.navigate(['/user/seller/listing'], { relativeTo: _this.activatedRoute });
            });
        }
        else {
            return this.itemService.createItem(this.sellerId, this.item.name, this.item.price, this.item.color, this.item.size, this.item.category, this.item.url).subscribe(function (returnItem) {
                _this.item = returnItem;
                _this.router.navigate(['/user/seller']);
            });
        }
    };
    ItemEditComponent.prototype.delete = function () {
        if (this.itemId !== undefined) {
            this.itemService.deleteItem(this.itemId).subscribe(function (returnItem) {
            });
            this.router.navigate(['/user/seller/listing']);
        }
        else {
            this.router.navigate(['/user/seller']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], ItemEditComponent.prototype, "loginForm", void 0);
    ItemEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-edit',
            template: __webpack_require__("./src/app/views/item/item-edit/item-edit.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_item_service_client__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ItemEditComponent);
    return ItemEditComponent;
}());



/***/ }),

/***/ "./src/app/views/item/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Search Result</title>\n</head>\n<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" (click)=\"goHome()\"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       (click)=\"goHome()\">S U P R E M E</a ></span>\n\n  </div>\n</nav>\n<div class=\"card black-card footer-padding\">\n  <div class=\"card-columns\" style=\"padding: 10px\">\n    <div *ngFor=\"let item of items\">\n      <div class=\"card text-center\">\n        <a (click)=\"display(item._id)\" class=\"a-no-hover\">\n          <img class=\"card-img-top\" src={{item.url}}>\n        </a >\n\n        <div class=\"card-body\" (click)=\"display(item._id)\">\n          <p class=\"card-text\">Name: {{item.name}}</p >\n          <p class=\"card-text\">Color: {{item.color}}</p >\n          <p class=\"card-text\">Size: {{item.size}}</p >\n          <p class=\"card-text\">Category: {{item.category}}</p >\n          <p class=\"card-text\">Price: ${{item.price}}</p >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" (click)=\"profile()\"><i class=\"fa fa-user\"></i></a >\n</div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/views/item/item-list/item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(itemService, userService, activatedRoute, router, sharedService) {
        this.itemService = itemService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        this.userId = this.sharedService.user['_id'];
        this.user = this.sharedService.user;
        this.items = this.sharedService.items;
        console.log(this.items);
    };
    ItemListComponent.prototype.display = function (itemId) {
        if (this.user.userType === 'Buyer' || 'Seller' || 'Admin') {
            this.router.navigate(['user/item', itemId]);
        }
        else {
            this.router.navigate(['user/guest/item', itemId]);
        }
    };
    ItemListComponent.prototype.goHome = function () {
        if (this.user.userType === 'Buyer' || 'Seller' || 'Admin') {
            this.router.navigate(['loggedinhome/user']);
        }
        if (this.sharedService.user['userType'] === undefined) {
            this.router.navigate(['home']);
        }
        this.sharedService.items = [{}];
    };
    ItemListComponent.prototype.profile = function () {
        if (this.user.userType === 'Buyer') {
            this.router.navigate(['user/buyer']);
        }
        if (this.user.userType === 'Seller') {
            this.router.navigate(['user/seller']);
        }
        if (this.user.userType === 'Admin') {
            this.router.navigate(['user/admin']);
        }
        this.sharedService.items = [{}];
    };
    ItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-list',
            template: __webpack_require__("./src/app/views/item/item-list/item-list.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_item_service_client__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/views/users/chooser/chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Chooser</title>\n</head>\n<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div *ngIf=\"duplicateUsername\"\n       class=\"alert alert-danger\">\n    \"Username is already in use!\"\n  </div>\n  <div class=\"supreme-font\">\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\">S U P R E M E</a></span>\n  </div>\n</nav>\n\n<div class=\"center_text footer-padding\">\n  <div class=\"center_input input_padding\">\n    <form (ngSubmit)=\"updateTypeAndUsername()\" #f=\"ngForm\" class=\"center_input input_padding\">\n      <span><h5 class=\"supreme-font\">Specify your username</h5></span>\n      <input placeholder=\"Username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control center_input\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block center_input supreme-font\"\n            *ngIf=\"!username.valid && username.touched\"\n            style=\"color: white\">\n      Please enter username!\n      </span>\n      <br>\n      <br>\n      <span><h5 class=\"supreme-font\">Select your account type</h5></span>\n      <select name=\"userType\" style=\"margin-bottom: 20px\" [(ngModel)]=\"userType\">\n        <option>Seller</option>\n        <option>Buyer</option>\n      </select>\n      <span class=\"help-block center_input supreme-font\"\n            *ngIf=\"!hasUserType\"\n            style=\"color: white\">\n      Please select type!\n      </span>\n      <br>\n      <br>\n      <button type=\"submit\" class=\"btn-outline-danger bottom-button supreme-font\" style=\"color: white\"\n              [disabled]=\"!f.valid\">Submit\n      </button>\n    </form>\n  </div>\n</div>\n\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\"><i class=\"fa fa-user\"></i></a>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/users/chooser/chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChooserComponent = /** @class */ (function () {
    function ChooserComponent(userService, router, sharedService, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.hasUserType = false;
        this.duplicateUsername = false;
    }
    ChooserComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.userId = this.sharedService.user['_id'];
        this.userType = this.user.userType;
        if (this.userType === 'Buyer') {
            this.router.navigate(['/user/buyer']);
        }
        if (this.userType === 'Seller') {
            this.router.navigate(['/user/seller']);
        }
    };
    ChooserComponent.prototype.updateTypeAndUsername = function () {
        var _this = this;
        if (this.userType !== undefined) {
            this.hasUserType = true;
        }
        else {
            return;
        }
        this.username = this.loginForm.value.username;
        this.userService.findUserByUsername(this.username).subscribe(function (returnUser) {
            if (returnUser) {
                _this.duplicateUsername = true;
                return;
            }
        });
        this.user.userType = this.userType;
        this.user.username = this.username;
        console.log(this.username);
        this.userService.updateUser(this.userId, this.user).subscribe(function (returnUser) {
            _this.sharedService.user = returnUser;
            _this.router.navigate(['/user', _this.userType.toLowerCase()], { relativeTo: _this.activatedRoute });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], ChooserComponent.prototype, "loginForm", void 0);
    ChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chooser',
            template: __webpack_require__("./src/app/views/users/chooser/chooser.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ChooserComponent);
    return ChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/users/creditcard/creditcard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/users/creditcard/creditcard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  creditcard works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/users/creditcard/creditcard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditcardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreditcardComponent = /** @class */ (function () {
    function CreditcardComponent() {
    }
    CreditcardComponent.prototype.ngOnInit = function () {
    };
    CreditcardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-creditcard',
            template: __webpack_require__("./src/app/views/users/creditcard/creditcard.component.html"),
            styles: [__webpack_require__("./src/app/views/users/creditcard/creditcard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreditcardComponent);
    return CreditcardComponent;
}());



/***/ }),

/***/ "./src/app/views/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>login</title>\n</head>\n<body class=\"body-black\">\n\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i></a>\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       routerLink=\"/home\">S U P R E M E</a></span>\n  </div>\n</nav>\n\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n<div class=\"supreme-font footer-padding\">\n  <p class=\"center_text\">Login</p>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <label class=\"center_input white_text\">Username</label>\n    <input placeholder=\"Username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control center_input\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block center_input\"\n          *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    <label class=\"center_input white_text\">Password</label>\n    <input placeholder=\"Password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control center_input\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block center_input\"\n          *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    <div>\n      <button class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white;\" type=\"submit\"\n              [disabled]=\"!f.valid\">\n        Login\n      </button>\n\n      <button class=\"btn btn-outline-danger btn-block center_input\" type=\"button\" (click)=\"register()\"\n              style=\"color: white\">Register\n      </button>\n\n      <a href=\"/api/facebook\" class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white\"> <span\n        class=\"fa fa-facebook\" style=\"color: white\"></span>Facebook</a>\n\n      <button class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white;\" routerLink=\"/home\">Cancel\n      </button>\n    </div>\n  </form>\n</div>\n\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\"><i class=\"fa fa-user\"></i></a>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.sharedService.user = data;
            _this.errorFlag = false;
            _this.router.navigate(['/user', data.userType.toLowerCase()]);
        }, function (error) {
            console.log(_this.errorMsg);
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/views/users/login/login.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/users/profile/buyer-profile/buyer-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/html\">\n<head>\n  <title>User Profile</title>\n</head>\n<body class=\"body-pink\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" href=\" \"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\" routerLink=\"/loggedinhome/user\">S U P R E M E</a ></span>\n\n  </div>\n</nav>\n\n<div class=\"supreme-font footer-padding\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <label class=\"center-input\" style=\"padding-top:60px\">Username</label>\n    <input\n      [(ngModel)]=\"username\"\n      name=\"username\"\n      type=\"text\"\n      class=\"form-control center-input\"\n      placeholder=\"{{username}}\"/>\n    <label class=\"center-input\">First Name</label>\n    <input [(ngModel)]=\"firstName\"\n           name=\"firstName\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{firstName}}\"/>\n    <label class=\"center-input\">Last Name</label>\n    <input [(ngModel)]=\"lastName\"\n           name=\"lastName\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{lastName}}\"/>\n    <label class=\"center-input\">Phone</label>\n    <input  [(ngModel)]=\"phone\"\n            name=\"phone\"\n            type=\"text\"\n            class=\"form-control center-input\"\n            placeholder=\"{{phone}}\"/>\n    <label class=\"center-input\">Email</label>\n    <input [(ngModel)]=\"email\"\n           name=\"email\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{email}}\"/>\n    <br>\n    <button class=\"btn btn-outline-danger btn-block center-input\" type=\"submit\" style=\"color: white\">Update</button>\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"updateCreditCard()\">Update Credit Card</a >\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"showOrderHistory()\">Order History</a >\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"logout()\">Log Out</a >\n  </form>\n\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" routerLink=\"/user/buyer\"><i class=\"fa fa-user\"></i></a >\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/views/users/profile/buyer-profile/buyer-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuyerProfileComponent = /** @class */ (function () {
    function BuyerProfileComponent(userService, sharedService, activatedRoute, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    BuyerProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userService.findUserById(_this.sharedService.user['_id']).subscribe(function (returnUser) {
                //    this.userId = params['uid'];
                _this.userId = _this.sharedService.user['_id'];
                //    this.user = returnUser;
                _this.user = _this.sharedService.user;
                _this.username = _this.user.username;
                _this.email = _this.user.email;
                _this.firstName = _this.user.firstName;
                _this.lastName = _this.user.lastName;
                _this.password = _this.user.password;
                _this.phone = _this.user.phone;
                console.log(_this.user);
            });
        });
    };
    BuyerProfileComponent.prototype.logout = function () {
        var _this = this;
        this.sharedService.user = '';
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    BuyerProfileComponent.prototype.update = function () {
        var _this = this;
        this.user.username = this.loginForm.value.username;
        this.user.firstName = this.loginForm.value.firstName;
        this.user.lastName = this.loginForm.value.lastName;
        this.user.email = this.loginForm.value.email;
        this.user.phone = this.loginForm.value.phone;
        this.userService.updateUser(this.userId, this.user).subscribe(function (returnUser) {
            _this.user = returnUser;
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        });
    };
    BuyerProfileComponent.prototype.updateCreditCard = function () {
        this.router.navigate(['user/buyer/creditcard']);
    };
    BuyerProfileComponent.prototype.showOrderHistory = function () {
        this.router.navigate(['user/buyer/history']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], BuyerProfileComponent.prototype, "loginForm", void 0);
    BuyerProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buyer-profile',
            template: __webpack_require__("./src/app/views/users/profile/buyer-profile/buyer-profile.component.html"),
            styles: [__webpack_require__("./src/app/style_derek.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], BuyerProfileComponent);
    return BuyerProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/users/profile/buyer-profile/order-history/order-history.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/users/profile/buyer-profile/order-history/order-history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/users/profile/buyer-profile/order-history/order-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-history',
            template: __webpack_require__("./src/app/views/users/profile/buyer-profile/order-history/order-history.component.html"),
            styles: [__webpack_require__("./src/app/views/users/profile/buyer-profile/order-history/order-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sale-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaleHistoryComponent = /** @class */ (function () {
    function SaleHistoryComponent() {
    }
    SaleHistoryComponent.prototype.ngOnInit = function () {
    };
    SaleHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sale-history',
            template: __webpack_require__("./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.html"),
            styles: [__webpack_require__("./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SaleHistoryComponent);
    return SaleHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/users/profile/seller-profile/seller-listing/seller-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Item listing</title>\n</head>\n\n<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       href=\" \">S U P R E M E</a ></span>\n  </div>\n</nav>\n\n<div class=\"card black-card footer-padding\">\n  <div class=\"card-columns\" style=\"padding: 10px\">\n    <div *ngFor=\"let item of itemList\">\n      <div class=\"card text-center\">\n        <img class=\"card-img-top\" src={{item.url}}>\n        <div class=\"card-body item-text\">\n          Name: {{item.name}}<br>\n          Color: {{item.color}}<br>\n          Size: {{item.size}}<br>\n          Price: ${{item.price}}<br>\n          Seller ID: {{item._seller}}<br>\n          <a class=\"btn btn-outline-danger btn-block center_input supreme-font\"\n             (click)=\"goToEdit(item._id)\">Edit</a >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" routerLink=\"/user/seller\"><i class=\"fa fa-user\"></i></a >\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/users/profile/seller-profile/seller-listing/seller-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_service_client__ = __webpack_require__("./src/app/services/item.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SellerListingComponent = /** @class */ (function () {
    function SellerListingComponent(itemService, router, sharedService, activatedRoute) {
        this.itemService = itemService;
        this.router = router;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
    }
    SellerListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.sellerId = this.user._id;
        this.itemService.findSellerListing(this.sellerId).subscribe(function (returnList) {
            _this.itemList = returnList;
        });
        console.log(this.itemList);
    };
    SellerListingComponent.prototype.goToEdit = function (itemId) {
        this.router.navigate(['user/seller/item/', itemId]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], SellerListingComponent.prototype, "loginForm", void 0);
    SellerListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-seller-listing',
            template: __webpack_require__("./src/app/views/users/profile/seller-profile/seller-listing/seller-listing.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_item_service_client__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SellerListingComponent);
    return SellerListingComponent;
}());



/***/ }),

/***/ "./src/app/views/users/profile/seller-profile/seller-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/html\">\n<head>\n  <title>User Profile</title>\n</head>\n<body class=\"body-pink\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" href=\" \"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\" routerLink=\"/loggedinhome/user\">S U P R E M E</a ></span>\n\n  </div>\n</nav>\n\n<div class=\"supreme-font footer-padding\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <label class=\"center-input\" style=\"padding-top:60px\">Username</label>\n    <input\n      [(ngModel)]=\"username\"\n      name=\"username\"\n      type=\"text\"\n      class=\"form-control center-input\"\n      placeholder=\"{{username}}\"/>\n    <label class=\"center-input\">First Name</label>\n    <input [(ngModel)]=\"firstName\"\n           name=\"firstName\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{firstName}}\"/>\n    <label class=\"center-input\">Last Name</label>\n    <input [(ngModel)]=\"lastName\"\n           name=\"lastName\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{lastName}}\"/>\n    <label class=\"center-input\">Phone</label>\n    <input  [(ngModel)]=\"phone\"\n            name=\"phone\"\n            type=\"text\"\n            class=\"form-control center-input\"\n            placeholder=\"{{phone}}\"/>\n    <label class=\"center-input\">Email</label>\n    <input [(ngModel)]=\"email\"\n           name=\"email\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{email}}\"/>\n    <br>\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"addNewItem()\">Sell</a >\n    <button class=\"btn btn-outline-danger btn-block center-input\" type=\"submit\" style=\"color: white\">Update</button>\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"updateCreditCard()\">Update Credit Card</a >\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"goToListing()\">Listing</a >\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"showOrderHistory()\">Order History</a >\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"logout()\">Log Out</a >\n  </form>\n\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" routerLink=\"/user/seller\"><i class=\"fa fa-user\"></i></a >\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/views/users/profile/seller-profile/seller-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SellerProfileComponent = /** @class */ (function () {
    function SellerProfileComponent(userService, sharedService, activatedRoute, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    SellerProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userService.findUserById(_this.sharedService.user['_id']).subscribe(function (returnUser) {
                //    this.userId = params['uid'];
                _this.userId = _this.sharedService.user['_id'];
                //    this.user = returnUser;
                _this.user = _this.sharedService.user;
                _this.username = _this.user.username;
                _this.email = _this.user.email;
                _this.firstName = _this.user.firstName;
                _this.lastName = _this.user.lastName;
                _this.password = _this.user.password;
                _this.phone = _this.user.phone;
            });
        });
    };
    SellerProfileComponent.prototype.logout = function () {
        var _this = this;
        this.sharedService.user = '';
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    SellerProfileComponent.prototype.update = function () {
        var _this = this;
        this.user.username = this.loginForm.value.username;
        this.user.firstName = this.loginForm.value.firstName;
        this.user.lastName = this.loginForm.value.lastName;
        this.user.email = this.loginForm.value.email;
        this.user.phone = this.loginForm.value.phone;
        this.userService.updateUser(this.userId, this.user).subscribe(function (returnUser) {
            _this.user = returnUser;
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        });
    };
    SellerProfileComponent.prototype.updateCreditCard = function () {
        this.router.navigate(['user/seller/creditcard']);
    };
    SellerProfileComponent.prototype.showOrderHistory = function () {
        this.router.navigate(['user/seller/history']);
    };
    SellerProfileComponent.prototype.addNewItem = function () {
        this.router.navigate(['user/seller/new']);
    };
    SellerProfileComponent.prototype.goToListing = function () {
        this.router.navigate(['user/seller/listing']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], SellerProfileComponent.prototype, "loginForm", void 0);
    SellerProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-seller-profile',
            template: __webpack_require__("./src/app/views/users/profile/seller-profile/seller-profile.component.html"),
            styles: [__webpack_require__("./src/app/style_derek.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SellerProfileComponent);
    return SellerProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>register</title>\n</head>\n<body class=\"body-black\">\n\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       routerLink=\"/home\">S U P R E M E</a ></span>\n  </div>\n</nav>\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n<div class=\"supreme-font footer-padding\">\n  <p class=\"center_text white_text\">Register</p >\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <div class=\"center_text\">\n      <label for=\"sellercheck\" class=\"white_text\" style=\"word-wrap:break-word\">\n        <input\n          [(ngModel)]=\"userType\"\n          name=\"userType\"\n          id=\"sellercheck\"\n          type=\"checkbox\"\n          value=\"Seller\"\n        /> Seller\n      </label>\n    </div>\n    <label class=\"center_input white_text\">Username</label>\n    <input placeholder=\"Username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control center_input\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block center_input\"\n          *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    <label class=\"center_input white_text\">Password</label>\n    <input placeholder=\"Password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control center_input\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block center_input\"\n          *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    <label class=\"center_input white_text\">Verify Password</label>\n    <input placeholder=\"Verify your password\"\n           name=\"verifiedPassword\"\n           type=\"password\"\n           class=\"form-control center_input\"\n           ngModel\n           required\n           #verifiedPassword=\"ngModel\"/>\n    <span class=\"help-block center_input\"\n          *ngIf=\"!verifiedPassword.valid && verifiedPassword.touched\">\n      Please verify password!\n      </span>\n    <div>\n      <button class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white;\" type=\"submit\"\n              [disabled]=\"!f.valid\">\n        Register\n      </button>\n      <button class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white;\" routerLink=\"/home\">Cancel\n      </button>\n    </div>\n  </form>\n\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\"><i class=\"fa fa-user\"></i></a >\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/views/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.verifiedPassword = this.loginForm.value.verifiedPassword;
        if (this.loginForm.value.userType) {
            this.userType = 'Seller';
        }
        else {
            this.userType = 'Buyer';
        }
        if (this.password !== this.verifiedPassword) {
            this.errorFlag = true;
        }
        else {
            var user = { username: this.username, password: this.password, userType: this.userType };
            this.userService.register(this.username, this.password, this.userType).subscribe(function (data) {
                _this.sharedService.user = data;
                _this.router.navigate(['/user', _this.userType.toLowerCase()]);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Username is in use';
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "loginForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/views/users/register/register.component.html"),
            styles: [__webpack_require__("./src/app/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // baseUrl: 'http://localhost:3100'
    baseUrl: 'https://web-supreme.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map