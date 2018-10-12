webpackJsonp(["Home.module"],{

/***/ "./src/app/Pages/Home/Home.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>URL Hub</h3>\n {{baseUrl}}notification\n<hr>\n<h3>HOW TO ConnectHub</h3>\nhubConnection = <label class=\"var\">new</label> <label class=\"method\">signalR.HubConnectionBuilder().withUrl</label>(<label\n  class=\"var\">string</label> URL_Hub)<br>\n.<label class=\"method\">configureLogging</label>(signalR.LogLevel.Information)<br>\n.<label class=\"method\">build</label>();<br>\n<hr>\n<app-notification-hub></app-notification-hub>"

/***/ }),

/***/ "./src/app/Pages/Home/Home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Pages/Home/Home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_url_config__ = __webpack_require__("./src/app/Config/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_0__Config_url_config__["a" /* baseUrl */];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-Home',
            template: __webpack_require__("./src/app/Pages/Home/Home.component.html"),
            styles: [__webpack_require__("./src/app/Pages/Home/Home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Home/Home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_hub_notification_hub_component__ = __webpack_require__("./src/app/Pages/Home/notification-hub/notification-hub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_routing__ = __webpack_require__("./src/app/Pages/Home/Home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_component__ = __webpack_require__("./src/app/Pages/Home/Home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__Home_routing__["a" /* HomeRoutes */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__Home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_0__notification_hub_notification_hub_component__["a" /* NotificationHubComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/Pages/Home/Home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home_component__ = __webpack_require__("./src/app/Pages/Home/Home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__Home_component__["a" /* HomeComponent */] },
];
var HomeRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/Pages/Home/notification-hub/notification-hub.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h3>Server Method</h3>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th>#</th>\n          <th>Methods</th>\n          <th>Parameter</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>1</td>\n          <td>\n            <label class=\"var\">this</label>.hubConnection <br> .<label class=\"method\">invoke</label>(\n            <label class=\"string\">'OnConnectHub'</label>,<label class=\"var\">string</label> UserId,<label class=\"var\">string</label>\n            Channel) <br>\n            .<label class=\"method\">catch</label>(<label class=\"err\">err</label> => console.error(<label class=\"err\">err</label>));\n            <br>\n  \n          </td>\n          <td>\n            <label class=\"var\">string</label> UserId : UserId ของระบบนั้นๆ <br>\n            <label class=\"var\">string</label> Chanel : Channel ที่ได้ทำการสร้างขึ้นเพื่อติดต่อ\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n  <div class=\"row\">\n    <h3>Client Method</h3>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th>#</th>\n          <th>Methods</th>\n          <th>Response</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>1</td>\n          <td>\n            <label class=\"var\">this</label>.hubConnection.<label class=\"method\">on</label>( <label class=\"string\">'OnConnected'</label>,\n            (Ojson: <label class=\"var\">string</label> ) => &#123; <br>\n            &nbsp; &nbsp; <label class=\"var\">let</label> data = <label class=\"method\">JSON</label>.parse(Ojson); <br>\n            &#125;\n          </td>\n          <td>\n            <label class=\"var\">string</label> Ojson : เป็น json string ของการ connection\n          </td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td>\n            <label class=\"var\">this</label>.hubConnection.<label class=\"method\">on</label>( <label class=\"string\">'ReceiveNotification'</label>,\n            (Ojson: <label class=\"var\">string</label> ) => &#123; <br>\n            &nbsp; &nbsp; <label class=\"var\">let</label> data = <label class=\"method\">JSON</label>.parse(Ojson); <br>\n            &#125;\n          </td>\n          <td>\n            <label class=\"var\">string</label> Ojson : เป็นข้อความการเเจ้งเตือนที่จะส่งมา หรือ เป็น json string\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/Pages/Home/notification-hub/notification-hub.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Pages/Home/notification-hub/notification-hub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationHubComponent; });
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

var NotificationHubComponent = /** @class */ (function () {
    function NotificationHubComponent() {
    }
    NotificationHubComponent.prototype.ngOnInit = function () {
    };
    NotificationHubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notification-hub',
            template: __webpack_require__("./src/app/Pages/Home/notification-hub/notification-hub.component.html"),
            styles: [__webpack_require__("./src/app/Pages/Home/notification-hub/notification-hub.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationHubComponent);
    return NotificationHubComponent;
}());



/***/ })

});
//# sourceMappingURL=Home.module.be472e6f440e8b3c9155.chunk.js.map