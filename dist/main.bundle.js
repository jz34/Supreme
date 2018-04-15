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
                __WEBPACK_IMPORTED_MODULE_22__views_users_creditcard_creditcard_component__["a" /* CreditcardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], { provide: __WEBPACK_IMPORTED_MODULE_25__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_item_item_list_item_list_component__ = __webpack_require__("./src/app/views/item/item-list/item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_users_profile_seller_profile_sale_history_sale_history_component__ = __webpack_require__("./src/app/views/users/profile/seller-profile/sale-history/sale-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_admin_admin_profile_admin_profile_component__ = __webpack_require__("./src/app/views/admin/admin-profile/admin-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_home_loggedin_home_loggedin_home_component__ = __webpack_require__("./src/app/views/home/loggedin-home/loggedin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_users_creditcard_creditcard_component__ = __webpack_require__("./src/app/views/users/creditcard/creditcard.component.ts");



















var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__views_home_home_component__["a" /* HomeComponent */] },
    { path: 'loggedinhome/user', component: __WEBPACK_IMPORTED_MODULE_17__views_home_loggedin_home_loggedin_home_component__["a" /* LoggedinHomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__views_users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/admin', component: __WEBPACK_IMPORTED_MODULE_16__views_admin_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */] },
    { path: 'user/buyer', component: __WEBPACK_IMPORTED_MODULE_7__views_users_profile_buyer_profile_buyer_profile_component__["a" /* BuyerProfileComponent */] },
    { path: 'user/seller', component: __WEBPACK_IMPORTED_MODULE_8__views_users_profile_seller_profile_seller_profile_component__["a" /* SellerProfileComponent */] },
    { path: 'user/admin/edititem', component: __WEBPACK_IMPORTED_MODULE_3__views_admin_admin_item_edit_admin_item_edit_component__["a" /* AdminItemEditComponent */] },
    { path: 'user/admin/edituser', component: __WEBPACK_IMPORTED_MODULE_4__views_admin_admin_user_edit_admin_user_edit_component__["a" /* AdminUserEditComponent */] },
    { path: 'user/seller/:uid/new', component: __WEBPACK_IMPORTED_MODULE_5__views_item_item_edit_item_edit_component__["a" /* ItemEditComponent */] },
    { path: 'user/seller/:uid/item/:iid', component: __WEBPACK_IMPORTED_MODULE_5__views_item_item_edit_item_edit_component__["a" /* ItemEditComponent */] },
    { path: 'user/:uid/item/:iid', component: __WEBPACK_IMPORTED_MODULE_6__views_item_item_display_item_display_component__["a" /* ItemDisplayComponent */] },
    { path: 'user/buyer/:uid/cart', component: __WEBPACK_IMPORTED_MODULE_9__views_checkout_cart_cart_component__["a" /* CartComponent */] },
    { path: 'user/buyer/:uid/payment', component: __WEBPACK_IMPORTED_MODULE_10__views_checkout_payment_payment_component__["a" /* PaymentComponent */] },
    { path: 'user/buyer/:uid/summary', component: __WEBPACK_IMPORTED_MODULE_11__views_checkout_summary_summary_component__["a" /* SummaryComponent */] },
    { path: 'user/buyer/:uid/history', component: __WEBPACK_IMPORTED_MODULE_12__views_users_profile_buyer_profile_order_history_order_history_component__["a" /* OrderHistoryComponent */] },
    { path: 'user/seller/:uid/history', component: __WEBPACK_IMPORTED_MODULE_15__views_users_profile_seller_profile_sale_history_sale_history_component__["a" /* SaleHistoryComponent */] },
    { path: 'user/seller/:uid/creditcard', component: __WEBPACK_IMPORTED_MODULE_18__views_users_creditcard_creditcard_component__["a" /* CreditcardComponent */] },
    { path: 'user/buyer/:uid/creditcard', component: __WEBPACK_IMPORTED_MODULE_18__views_users_creditcard_creditcard_component__["a" /* CreditcardComponent */] },
    { path: 'user/:uid/searchresult', component: __WEBPACK_IMPORTED_MODULE_14__views_item_item_list_item_list_component__["a" /* ItemListComponent */] },
    { path: 'user/guest/searchresult', component: __WEBPACK_IMPORTED_MODULE_14__views_item_item_list_item_list_component__["a" /* ItemListComponent */] },
    { path: 'user/guest/item/:iid', component: __WEBPACK_IMPORTED_MODULE_6__views_item_item_display_item_display_component__["a" /* ItemDisplayComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


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
        var url = this.baseUrl + '/api/user/?username=' + username;
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
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/style.css":
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n    color: white;\n    background-color: #E1282A;\n}\n\n.logo {\n    height: 10%;\n    width: 10%;\n    border: 1px solid black;\n}\n\n.btn-danger {\n    font-family: \"Courier New\";\n    font-weight: bold;\n    background-color: #E1282A;\n    border: 1px solid black;\n}\n\n.link-button:hover {\n    background-color: #E1282A;\n    border: 1px solid black;\n}\n\n.banner {\n    width: 100%;\n}\n\n.body-black {\n    background-color: black;\n}\n\n.center-search {\n    display: block;\n    margint-top: 100px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.footer-color {\n    background-color: #E1282A;\n}\n\n.supreme-font {\n    font-family: \"Courier New\";\n    color:white;\n\n}\n\n.fa {\n    font-size: 15px;\n}\n\n.fa:hover{\n    color: black;\n}\n\n.white_text {\n    color: white;\n}\n\n.center_input {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 70%;\n    margin-bottom: 8px;\n}\n\n.center_text {\n    text-align: center;\n}\n\n.text-font-size {\n    font-size: 20px;\n}\n\n.input_padding {\n    padding-top: 10px;\n}\n\n.footer-padding {\n    margin-bottom: 100%;\n}\n\n.small-button {\n    width: 50%;\n    font-size: 10px;\n}\n\nbutton {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.a-no-hover:hover {\n    text-decoration: none;\n}\n\n.a-no-color {\n    color: white;\n}\n\n.a-no-visited:visited {\n    color: white;\n}\n\n.form-wrapper {\n    margin: 10px;\n    horiz-align: center;\n    border: 1px solid white;\n}\n\n.full-input {\n    border: 2px solid #E1282A;\n}\n\nlabel {\n    display: block;\n    font-size: 12px;\n    color: #E1282A;\n}\n\n.input-white-text {\n    color: white;\n}\n\n.left-border-white {\n    border-left: 1px solid white;\n}\n\n.corner-button {\n    position: fixed;\n    bottom: 90px;\n    right: 20px;\n    width: 40%;\n    horiz-align: center;\n}\n\n.supreme-text-logo {\n    font-size: 20px;\n    padding-left: 20px\n}\n\n.img-display-size {\n    height: 300px;\n    width: 300px;\n}\n\n.center-image {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n\n}\n\n.black-card {\n    background: black;\n}\n\n.header-margin-bottom{\n    margin-bottom: 20px;\n}\n\n.btn-outline-danger{\n    color:#E1282A;\n}\n\n.left-column{\n    width:25%;\n    height: 100%;\n    float:left;\n}\n\n.right-column{\n    height: 100%;\n}\n\n.full-border {\n    border: 2px solid #E1282A;\n}\n\n.bottom-button {\n    margin-bottom:20px;\n}\n\n.big-box {\n    margin: 2% 3% 3%;\n}\n\n.item-text {\n    color: black;\n    font-family: \"Courier New\";\n}\n\nhtml, body{\n    height: 100%;\n}\n\n.pagination {\n    margin: 50px;\n    display: inline-block;\n}\n\n.pagination a {\n    color: #E1282A;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    -webkit-transition: background-color .3s;\n    transition: background-color .3s;\n    border: 1px solid #E1282A;\n}\n\n.pagination a:hover:not(.active) {background-color: white;}\n\n.card-columns{\n    padding-top:10px;\n    margin-bottom: 50px;\n}\n\n.text-black{\n    color: black;\n}\n"

/***/ }),

/***/ "./src/app/style_derek.css":
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n    color: white;\n    background-color: #E1282A;\n}\n.logo{\n    height: 10%;\n    width: 10%;\n    border: 1px solid black;\n}\n.btn-danger{\n    font-family: \"Courier New\";\n    font-weight: bold;\n    background-color: #E1282A;\n    border: 1px solid black;\n}\n.link-button:hover{\n    background-color: #E1282A;\n    border: 1px solid black;\n}\n.banner{\n    width:100%;\n}\n.body-pink{\n    background-color: black;\n}\n.center-search{\n    display: block;\n    margint-top:100px;\n    margin-left: auto;\n    margin-right:auto;\n}\n.footer-color{\n    background-color: #E1282A;\n}\n.supreme-font{\n    font-family: \"Courier New\";\n    color: white;\n}\n.center-input{\n    display: block;\n    margin-left: auto;\n    margin-right:auto;\n    width: 65%;\n    margin-bottom: 8px;\n}\n.center-text{\n    text-align: center;\n}\n.btn-outline-danger{\n    color: #E1282A;\n}\n.footer-padding{\n    margin-bottom: 75px;\n}\n.header-padding{\n    margin-bottom: 100px;\n}\n.left-column{\n    /*background-color: green;*/\n    width:25%;\n    height: 100%;\n    float:left;\n}\n.right-column{\n    /*background-color: red;*/\n    height: 100%;\n}\n.left-border {\n    border: 2px solid #E1282A;\n    height: 80vh;\n}\n.right-border {\n    border: 2px solid #E1282A;\n    height: 80vh;\n}\n.bottom-button {\n    position:relative;\n    margin-top:95%;\n}\n.big-box {\n    margin: 2% 3% 3%;\n}\n.input_padding {\n    padding-top: 40%;\n}\n.item-text {\n    color: black;\n    font-family: \"Courier New\";\n}\nhtml, body{\n    height: 100%;\n}\n.pagination {\n    margin: 50px;\n    display: inline-block;\n}\n.pagination a {\n    color: #E1282A;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    -webkit-transition: background-color .3s;\n    transition: background-color .3s;\n    border: 1px solid #E1282A;\n}\n.pagination a:hover:not(.active) {background-color: white;}\n.white_text {\n    color: white;\n}\n.a-no-hover:hover {\n    text-decoration: none;\n}\n.a-no-color {\n    color: white;\n}\n.a-no-visited:visited {\n    color: white;\n}\n.supreme-text-logo {\n    font-size: 20px;\n    padding-left: 20px\n}\n"

/***/ }),

/***/ "./src/app/views/admin/admin-item-edit/admin-item-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/admin/admin-item-edit/admin-item-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-item-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/admin/admin-item-edit/admin-item-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminItemEditComponent; });
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

var AdminItemEditComponent = /** @class */ (function () {
    function AdminItemEditComponent() {
    }
    AdminItemEditComponent.prototype.ngOnInit = function () {
    };
    AdminItemEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-item-edit',
            template: __webpack_require__("./src/app/views/admin/admin-item-edit/admin-item-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/admin/admin-item-edit/admin-item-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminItemEditComponent);
    return AdminItemEditComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/admin-profile/admin-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Admin</title>\n</head>\n<body class=\"body-black\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" href=\"#\"><i class=\"fa fa-chevron-left\"></i></a>\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\" href=\"/loggedinhome/user\">S U P R E M E</a></span>\n\n  </div>\n</nav>\n\n<div class=\"supreme-font footer-padding\">\n  <p class=\"center_text supreme-font\">Admin</p>\n  <a class=\"btn btn-outline-danger btn-block center_input\" (click)=\"editItem()\">Edit Items</a>\n  <a class=\"btn btn-outline-danger btn-block center_input\" (click)=\"editUser()\">Edit User</a>\n  <a class=\"btn btn-outline-danger btn-block center_input\" (click)=\"logout()\">Logout</a>\n</div>\n\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\"><i class=\"fa fa-user\"></i></a>\n</div>\n\n</body>\n"

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

/***/ "./src/app/views/admin/admin-user-edit/admin-user-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/admin/admin-user-edit/admin-user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-user-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/admin/admin-user-edit/admin-user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserEditComponent; });
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

var AdminUserEditComponent = /** @class */ (function () {
    function AdminUserEditComponent() {
    }
    AdminUserEditComponent.prototype.ngOnInit = function () {
    };
    AdminUserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-user-edit',
            template: __webpack_require__("./src/app/views/admin/admin-user-edit/admin-user-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/admin/admin-user-edit/admin-user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

/***/ "./src/app/views/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/views/home/home.component.html"),
            styles: [__webpack_require__("./src/app/views/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/loggedin-home/loggedin-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/home/loggedin-home/loggedin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  loggedin-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/home/loggedin-home/loggedin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinHomeComponent; });
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

var LoggedinHomeComponent = /** @class */ (function () {
    function LoggedinHomeComponent() {
    }
    LoggedinHomeComponent.prototype.ngOnInit = function () {
    };
    LoggedinHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loggedin-home',
            template: __webpack_require__("./src/app/views/home/loggedin-home/loggedin-home.component.html"),
            styles: [__webpack_require__("./src/app/views/home/loggedin-home/loggedin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoggedinHomeComponent);
    return LoggedinHomeComponent;
}());



/***/ }),

/***/ "./src/app/views/item/item-display/item-display.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/item/item-display/item-display.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  item-display works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/item/item-display/item-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDisplayComponent; });
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

var ItemDisplayComponent = /** @class */ (function () {
    function ItemDisplayComponent() {
    }
    ItemDisplayComponent.prototype.ngOnInit = function () {
    };
    ItemDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-display',
            template: __webpack_require__("./src/app/views/item/item-display/item-display.component.html"),
            styles: [__webpack_require__("./src/app/views/item/item-display/item-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemDisplayComponent);
    return ItemDisplayComponent;
}());



/***/ }),

/***/ "./src/app/views/item/item-edit/item-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/item/item-edit/item-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  item-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/item/item-edit/item-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEditComponent; });
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

var ItemEditComponent = /** @class */ (function () {
    function ItemEditComponent() {
    }
    ItemEditComponent.prototype.ngOnInit = function () {
    };
    ItemEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-edit',
            template: __webpack_require__("./src/app/views/item/item-edit/item-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/item/item-edit/item-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemEditComponent);
    return ItemEditComponent;
}());



/***/ }),

/***/ "./src/app/views/item/item-list/item-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/item/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  item-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/item/item-list/item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
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

var ItemListComponent = /** @class */ (function () {
    function ItemListComponent() {
    }
    ItemListComponent.prototype.ngOnInit = function () {
    };
    ItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-list',
            template: __webpack_require__("./src/app/views/item/item-list/item-list.component.html"),
            styles: [__webpack_require__("./src/app/views/item/item-list/item-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/views/users/chooser/chooser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/users/chooser/chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chooser works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/users/chooser/chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooserComponent; });
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

var ChooserComponent = /** @class */ (function () {
    function ChooserComponent() {
    }
    ChooserComponent.prototype.ngOnInit = function () {
    };
    ChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chooser',
            template: __webpack_require__("./src/app/views/users/chooser/chooser.component.html"),
            styles: [__webpack_require__("./src/app/views/users/chooser/chooser.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<head>\n  <title>login</title>\n</head>\n<body class=\"body-black\">\n\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i></a>\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\"\n                                       routerLink=\"/home\">S U P R E M E</a></span>\n\n  </div>\n</nav>\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n<div class=\"supreme-font footer-padding\">\n  <p class=\"center_text\">Login</p>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <label class=\"center_input white_text\">Username</label>\n    <input placeholder=\"Username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control center_input\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block center_input\"\n          *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    <label class=\"center_input white_text\">Password</label>\n    <input placeholder=\"Password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control center_input\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block center_input\"\n          *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    <div>\n      <button class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white;\" type=\"submit\"\n              [disabled]=\"!f.valid\">\n        Login\n      </button>\n\n      <button class=\"btn btn-outline-danger btn-block center_input\" type=\"button\" (click)=\"register()\" style=\"color: white\">Register</button>\n\n      <a href=\"#\" class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white\"> <span class=\"fa fa-facebook\" style=\"color: white\"></span>Facebook</a>\n\n      <button class=\"btn btn-outline-danger btn-block center_input\" style=\"color: white;\" routerLink=\"/home\">Cancel\n      </button>\n    </div>\n  </form>\n</div>\n\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\"><i class=\"fa fa-user\"></i></a>\n</div>\n</body>\n"

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

/***/ "./src/app/views/users/profile/seller-profile/seller-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/html\">\n<head>\n  <title>User Profile</title>\n</head>\n<body class=\"body-pink\">\n<nav class=\"navbar navbar-default header-margin-bottom\">\n  <div class=\"supreme-font\">\n    <a class=\"white_text\" href=\" \"><i class=\"fa fa-chevron-left\"></i></a >\n    <span class=\"supreme-text-logo\"><a class=\"a-no-color a-no-hover a-no-visited\" routerLink=\"/loggedinhome/user\">S U P R E M E</a ></span>\n\n  </div>\n</nav>\n\n<div class=\"supreme-font footer-padding\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <label class=\"center-input\" style=\"padding-top:60px\">Username</label>\n    <input\n      [(ngModel)]=\"username\"\n      name=\"username\"\n      type=\"text\"\n      class=\"form-control center-input\"\n      placeholder=\"{{username}}\"/>\n    <label class=\"center-input\">First Name</label>\n    <input [(ngModel)]=\"firstName\"\n           name=\"firstName\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{firstName}}\"/>\n    <label class=\"center-input\">Last Name</label>\n    <input [(ngModel)]=\"lastName\"\n           name=\"lastName\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{lastName}}\"/>\n    <label class=\"center-input\">Phone</label>\n    <input  [(ngModel)]=\"phone\"\n            name=\"phone\"\n            type=\"text\"\n            class=\"form-control center-input\"\n            placeholder=\"{{phone}}\"/>\n    <label class=\"center-input\">Email</label>\n    <input [(ngModel)]=\"email\"\n           name=\"email\"\n           type=\"text\"\n           class=\"form-control center-input\"\n           placeholder=\"{{email}}\"/>\n    <br>\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"addNewItem()\">Sell</a >\n    <button class=\"btn btn-outline-danger btn-block center-input\" type=\"submit\" style=\"color: white\">Update</button>\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"updateCreditCard()\">Update Credit Card</a >\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"showOrderHistory()\">Order History</a >\n    <a class=\"btn btn-outline-danger btn-block center-input\" (click)=\"logout()\">Log Out</a >\n  </form>\n\n</div>\n<div class=\"card-footer footer-color fixed-bottom\">\n  <a class=\"pull-right white_text\" routerLink=\"/user\"><i class=\"fa fa-user\"></i></a >\n</div>\n\n</body>\n"

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
                console.log(_this.user);
            });
        });
    };
    SellerProfileComponent.prototype.logout = function () {
        var _this = this;
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
    baseUrl: 'http://localhost:3100'
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