(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token')) {
            var currentUser = this.authService.getUserInfo();
            if (currentUser && currentUser.role) {
                if (!next.queryParams.authorized) {
                    this.router.navigate(['/' + currentUser.role.replace('_', '')], { queryParams: { authorized: true } });
                    return true;
                }
                else {
                    return true;
                }
            }
        }
        // not logged so return false
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/role.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/role.guard.ts ***!
  \***************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");




var RoleGuard = /** @class */ (function () {
    function RoleGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token')) {
            var currentUser = this.authService.getUserInfo();
            if (currentUser) {
                // check if route is restricted by role
                if (next.data.roles && next.data.roles.indexOf(currentUser.role) === -1) {
                    // role not authorised so redirect to home page
                    this.router.navigate(['/' + currentUser.role.replace('_', '')]);
                    return false;
                }
                // authorised so return true
                return true;
            }
        }
        // not logged so return false
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    RoleGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/material/material.module.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/material/material.module.ts ***!
  \******************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/_helpers/notice-helper.ts":
/*!*******************************************!*\
  !*** ./src/app/_helpers/notice-helper.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line: only-arrow-functions
/* harmony default export */ __webpack_exports__["default"] = ((function () {
    var notices = [];
    function initNotices(service) {
        service.get().subscribe(function (result) {
            notices = result.notices;
        }, function (err) { return console.error(err); });
    }
    function pushToNotices(notice) {
        notices.push(notice);
    }
    function removeFromNotices(notice) {
        notices = notices.filter(function (n) { return n._id !== notice._id; });
    }
    function getNotices() {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(notices);
    }
    return { initNotices: initNotices, pushToNotices: pushToNotices, removeFromNotices: removeFromNotices, getNotices: getNotices };
})());


/***/ }),

/***/ "./src/app/_helpers/socket-helper.ts":
/*!*******************************************!*\
  !*** ./src/app/_helpers/socket-helper.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


// tslint:disable-next-line: only-arrow-functions
/* harmony default export */ __webpack_exports__["default"] = ((function () {
    var socket = null;
    var registeredEvents = [];
    function setSocketInstance(jwtToken) {
        if (!socket) {
            var token = jwtToken ? jwtToken : window.localStorage.getItem('token');
            socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + "?token=" + token.split('"')[1]);
            registerEvent('connected', function (message) {
                console.log("Socket succesfully connected with message: " + message, registeredEvents);
            });
        }
    }
    function registerEvent(eventName, callback) {
        setSocketInstance();
        if (!registeredEvents.find(function (ev) { return eventName === ev; })) {
            registeredEvents.push(eventName);
            socket.on(eventName, callback);
        }
        else {
            console.log('Event already registered');
        }
    }
    function clearSocket() {
        registeredEvents = [];
        socket = null;
        console.log('Socket disconnected');
    }
    function getSocketInstance() {
        setSocketInstance();
        return socket;
    }
    function emitEvent(SocketService, eventName, userId, room, message) {
        setSocketInstance();
        SocketService.notifyToUser(eventName, userId, room, message).subscribe(function (_) { }, function (err) { return console.error(err); }, function () { });
    }
    return { setSocketInstance: setSocketInstance, clearSocket: clearSocket, getSocketInstance: getSocketInstance, registerEvent: registerEvent, emitEvent: emitEvent };
})());


/***/ }),

/***/ "./src/app/_helpers/table-helper.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/table-helper.ts ***!
  \******************************************/
/*! exports provided: nullService, activeService, foodOrders, beverageOrders, processedFoodOrders, processedBeverageOrders, pendingFoodOrders, pendingBeverageOrders, getOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullService", function() { return nullService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeService", function() { return activeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodOrders", function() { return foodOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beverageOrders", function() { return beverageOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processedFoodOrders", function() { return processedFoodOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processedBeverageOrders", function() { return processedBeverageOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pendingFoodOrders", function() { return pendingFoodOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pendingBeverageOrders", function() { return pendingBeverageOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_models/table */ "./src/app/_models/table.ts");

function nullService() {
    var service = new src_app_models_table__WEBPACK_IMPORTED_MODULE_0__["Service"]();
    service.covers = 0;
    service.orders = [];
    service.done = true;
    return service;
}
function activeService(table) {
    if (!table.busy) {
        return nullService();
    }
    else {
        var s = table.services.find(function (service) { return !service.done; });
        return s;
    }
}
function foodOrders(table) {
    var service = activeService(table);
    var orders = service.orders.filter(function (order) { return order.type === 'food'; });
    return orders;
}
function beverageOrders(table) {
    var service = activeService(table);
    var orders = service.orders.filter(function (order) { return order.type === 'beverage'; });
    return orders;
}
function processedFoodOrders(table) {
    return foodOrders(table).filter(function (order) { return order.processed != null; });
}
function processedBeverageOrders(table) {
    return beverageOrders(table).filter(function (order) { return order.processed != null; });
}
function pendingFoodOrders(table) {
    return foodOrders(table).filter(function (order) { return order.processed == null; });
}
function pendingBeverageOrders(table) {
    return beverageOrders(table).filter(function (order) { return order.processed == null; });
}
function getOrders(table, type, processed) {
    var service = table.services.find(function (srv) { return !srv.done; });
    var filteredOrders = service && service.orders ? service.orders : [];
    if (filteredOrders.length > 0) {
        if (type) {
            filteredOrders = filteredOrders.filter(function (order) { return order.type === type; });
        }
        if (processed) {
            filteredOrders = filteredOrders.filter(function (order) { return processed ? order.processed : !order.processed; });
        }
    }
    return filteredOrders;
}


/***/ }),

/***/ "./src/app/_interceptors/request.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/_interceptors/request.interceptor.ts ***!
  \******************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");





var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(authService) {
        this.authService = authService;
        // These parameters are needed to handle spammed requests
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    RequestInterceptor.prototype.addToken = function (req, token) {
        return req.clone({ setHeaders: { Authorization: "Bearer " + token } });
    };
    RequestInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var _this = this;
        if (!this.isRefreshing) {
            var token = JSON.parse(localStorage.getItem('token'));
            if (token)
                request = this.addToken(request, token);
        }
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status == 401 && _this.authService.getUserInfo()) {
                return _this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
        }));
    };
    RequestInterceptor.prototype.handle401Error = function (request, next) {
        var _this = this;
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
                if (token) {
                    _this.isRefreshing = false;
                    _this.refreshTokenSubject.next(token);
                    // refresh page with new access token
                    return next.handle(_this.addToken(request, token));
                }
                _this.authService.logout();
                return next.handle(request);
            }));
        }
        else {
            // If refresh is already in progress, take a response if found and kill the others
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (token) { return token != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (jwt) {
                return next.handle(_this.addToken(request, jwt));
            }));
        }
    };
    RequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/table.ts":
/*!**********************************!*\
  !*** ./src/app/_models/table.ts ***!
  \**********************************/
/*! exports provided: Service, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
var Service = /** @class */ (function () {
    function Service() {
    }
    return Service;
}());

var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.toString = function () {
        var _this = this;
        var response = '';
        Object.keys(this).forEach(function (key) {
            response += key + ": " + _this[key] + "\n";
        });
        return response;
    };
    return Table;
}());



/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: Roles, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var Roles;
(function (Roles) {
    Roles["Cook"] = "cook";
    Roles["Waiter"] = "waiter";
    Roles["CashDesk"] = "cash_desk";
    Roles["Bartender"] = "bartender";
})(Roles || (Roles = {}));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/socket-helper */ "./src/app/_helpers/socket-helper.ts");









var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api;
    }
    AuthService.prototype.login = function (username, password) {
        var endpoint = this.baseUrl + '/login';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(endpoint, {}, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            // login successful if there's a jwt token in the response
            if (response && response.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(response.token));
            }
            if (response && response.session) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('session', JSON.stringify(response.session));
            }
            return response.token;
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var endpoint = this.baseUrl + '/logout';
        var refresh = JSON.parse(localStorage.getItem('session'));
        this.http.post(endpoint, { token: refresh }).toPromise()
            .then(function (response) {
            if (response && !response.error) {
                _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_8__["default"].clearSocket();
                localStorage.removeItem('token');
                localStorage.removeItem('session');
                _this.router.navigate(['/login']);
            }
            else {
                console.log('ERRORE');
            }
        });
    };
    AuthService.prototype.refreshToken = function () {
        var endpoint = this.baseUrl + '/renew';
        var refresh = JSON.parse(localStorage.getItem('session'));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Bearer ' + refresh);
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(endpoint, {}, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            // refresh successful if there's a jwt token in the response
            if (response && response.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(response.token));
            }
            return response.token;
        }));
    };
    AuthService.prototype.getUserInfo = function () {
        var token = localStorage.getItem('token');
        try {
            var payload = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(token);
            var user = new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
            user.username = payload.username;
            user.role = payload.role;
            user._id = payload.id;
            user.token = token;
            return user;
        }
        catch (Error) {
            return null;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/item.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/item.service.ts ***!
  \*******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getAll = function (itemType) {
        var requestUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/items";
        if (itemType) {
            requestUrl = requestUrl + "?itemType=" + itemType;
        }
        return this.http.get(requestUrl, { responseType: 'json' });
    };
    ItemService.prototype.addToOrder = function (item, order, quantity, tableNumber) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/tables/" + tableNumber + "/orders/" + order._id + "/items", {
            item: {
                _id: item._id,
                quantity: quantity
            }
        });
    };
    ItemService.prototype.removeFromOrder = function (item, order, tableNumber) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/tables/" + tableNumber + "/orders/" + order._id + "/items/" + item._id);
    };
    ItemService.prototype.startPreparation = function (item, order, tableNumber) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/tables/" + tableNumber + "/orders/" + order._id + "/items/" + item._id, { time: Date.now() });
    };
    ItemService.prototype.endPreparation = function (item, order, tableNumber) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/tables/" + tableNumber + "/orders/" + order._id + "/items/" + item._id, { time: Date.now() });
    };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/_services/notice.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/notice.service.ts ***!
  \*********************************************/
/*! exports provided: NoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeService", function() { return NoticeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var NoticeService = /** @class */ (function () {
    function NoticeService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/notices';
    }
    NoticeService.prototype.get = function (limit) {
        var url = limit ? this.baseUrl + "?limit=" + limit : this.baseUrl;
        return this.http.get(url);
    };
    NoticeService.prototype.drop = function (noticeId) {
        var url = this.baseUrl + "/" + noticeId;
        return this.http.delete(url);
    };
    NoticeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NoticeService);
    return NoticeService;
}());



/***/ }),

/***/ "./src/app/_services/order.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/order.service.ts ***!
  \********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + '/orders';
    }
    // TODO: must return populated items?
    OrderService.prototype.get = function (id) { };
    OrderService.prototype.getAll = function (params) {
        var query = "type=" + params.type + "&processed=" + (params.processed ? 1 : 0) + "&populate=" + (params.populate ? 1 : 0);
        var orders = this.http.get(this.baseUrl + "?" + query, { responseType: 'json' });
        return orders;
    };
    OrderService.prototype.createEmpty = function (orderType, tableNumber) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/tables/" + tableNumber + "/orders", {
            order: {
                items: [],
                type: orderType
            }
        });
    };
    OrderService.prototype.process = function (tableNumber, orderId) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/tables/" + tableNumber + "/orders/" + orderId, { processed: true });
    };
    OrderService.prototype.delete = function (orderId, tableNumber) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/tables/" + tableNumber + "/orders/" + orderId);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/_services/socketio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/socketio.service.ts ***!
  \***********************************************/
/*! exports provided: SocketioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketioService", function() { return SocketioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SocketioService = /** @class */ (function () {
    function SocketioService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/socket';
    }
    SocketioService.prototype.notifyToUser = function (eventName, userId, room, message) {
        return this.http.post(this.baseUrl, { eventName: eventName, userId: userId, room: room, message: message });
    };
    SocketioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SocketioService);
    return SocketioService;
}());



/***/ }),

/***/ "./src/app/_services/table.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/table.service.ts ***!
  \********************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TableService = /** @class */ (function () {
    function TableService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + '/tables';
    }
    TableService.prototype.get = function (tableNumber) {
        var table = this.http.get(this.baseUrl + "/" + tableNumber, { responseType: 'json' });
        return table;
    };
    TableService.prototype.getAll = function (params) {
        var url = "" + this.baseUrl;
        if (!!params) {
            url = url + "?";
            Object.keys(params).forEach(function (key, index) {
                url = "" + url + key + "=" + params[key];
                if (index < (Object.keys(params).length - 1)) {
                    url = url + "&&";
                }
            });
        }
        var tables = this.http.get(url, { responseType: 'json' });
        return tables;
    };
    TableService.prototype.getBill = function (tableNumber) {
        var bill = this.http.get(this.baseUrl + "/" + tableNumber + "/bill", { responseType: 'json' });
        return bill;
    };
    TableService.prototype.doTablePayment = function (table) {
        var paymentDone = this.http.patch(this.baseUrl + "/" + table.number, table);
        return paymentDone;
    };
    TableService.prototype.addTable = function (data) {
        return this.http.post(this.baseUrl + "/", data);
    };
    TableService.prototype.updateTable = function (table) {
        return this.http.put(this.baseUrl + "/" + table.number, table);
    };
    TableService.prototype.isTableAlreadyPresent = function (tableNumber) {
        return this.http.get(this.baseUrl + "/validate?tableNumber=" + tableNumber);
    };
    TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + '/users';
    }
    UserService.prototype.getAll = function (params) {
        var url = "" + this.baseUrl;
        if (!!params) {
            url = url + "?";
            Object.keys(params).forEach(function (key, index) {
                url = "" + url + key + "=" + params[key];
                if (index < (Object.keys(params).length - 1)) {
                    url = url + "&&";
                }
            });
        }
        var users = this.http.get(url, { responseType: 'json' });
        return users;
    };
    UserService.prototype.delete = function (user) {
        var url = this.baseUrl + "/" + user.username;
        return this.http.delete(url);
    };
    UserService.prototype.get = function (user) {
        var url = this.baseUrl + "/" + user.username;
        return this.http.get(url, { responseType: 'json' });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_validators/async-table-number-not-taken.validator.ts":
/*!***********************************************************************!*\
  !*** ./src/app/_validators/async-table-number-not-taken.validator.ts ***!
  \***********************************************************************/
/*! exports provided: ValidateTableNumberNotTaken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTableNumberNotTaken", function() { return ValidateTableNumberNotTaken; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

var ValidateTableNumberNotTaken = /** @class */ (function () {
    function ValidateTableNumberNotTaken() {
    }
    ValidateTableNumberNotTaken.createValidator = function (tableService) {
        return function (control) {
            return tableService.isTableAlreadyPresent(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res.tableFound == false ? null : { tableNumberTaken: true };
            }));
        };
    };
    return ValidateTableNumberNotTaken;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _notices_notices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notices/notices.component */ "./src/app/notices/notices.component.ts");
/* harmony import */ var _waiter_waiter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./waiter/waiter.component */ "./src/app/waiter/waiter.component.ts");
/* harmony import */ var _cook_cook_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cook/cook.component */ "./src/app/cook/cook.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _cashdesk_cashdesk_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cashdesk/cashdesk.component */ "./src/app/cashdesk/cashdesk.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_guards/role.guard */ "./src/app/_guards/role.guard.ts");













var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: 'notices',
                component: _notices_notices_component__WEBPACK_IMPORTED_MODULE_6__["NoticesComponent"],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
                data: {
                    roles: ["cash_desk", "waiter", "cook", "bartender"]
                }
            },
            {
                path: 'waiter',
                component: _waiter_waiter_component__WEBPACK_IMPORTED_MODULE_7__["WaiterComponent"],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
                data: {
                    roles: ["waiter"]
                }
            },
            {
                path: 'cashdesk',
                component: _cashdesk_cashdesk_component__WEBPACK_IMPORTED_MODULE_10__["CashdeskComponent"],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
                data: {
                    roles: ["cash_desk"]
                }
            },
            {
                path: 'cook',
                component: _cook_cook_component__WEBPACK_IMPORTED_MODULE_8__["CookComponent"],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
                data: {
                    roles: ["cook"]
                }
            },
            {
                path: 'bartender',
                component: _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_9__["BartenderComponent"],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
                data: {
                    roles: ["bartender"]
                }
            },
            {
                path: 'statistics',
                component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_11__["StatisticsComponent"],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
                data: {
                    roles: ["cash_desk"]
                }
            },
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'easy-restaurant-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _helpers_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/material/material.module */ "./src/app/_helpers/material/material.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _waiter_waiter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./waiter/waiter.component */ "./src/app/waiter/waiter.component.ts");
/* harmony import */ var _cashdesk_cashdesk_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cashdesk/cashdesk.component */ "./src/app/cashdesk/cashdesk.component.ts");
/* harmony import */ var _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_interceptors/request.interceptor */ "./src/app/_interceptors/request.interceptor.ts");
/* harmony import */ var _cook_cook_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cook/cook.component */ "./src/app/cook/cook.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _cashdesk_cashdesk_table_card_cashdesk_table_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cashdesk/cashdesk-table-card/cashdesk-table-card.component */ "./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.ts");
/* harmony import */ var _cashdesk_cashdesk_info_modal_cashdesk_info_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cashdesk/cashdesk-info-modal/cashdesk-info-modal.component */ "./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.ts");
/* harmony import */ var _cashdesk_cashdesk_bill_modal_cashdesk_bill_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component */ "./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.ts");
/* harmony import */ var _waiter_waiter_table_card_waiter_table_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./waiter/waiter-table-card/waiter-table-card.component */ "./src/app/waiter/waiter-table-card/waiter-table-card.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _waiter_waiter_status_modal_waiter_status_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./waiter/waiter-status-modal/waiter-status-modal.component */ "./src/app/waiter/waiter-status-modal/waiter-status-modal.component.ts");
/* harmony import */ var _waiter_waiter_order_modal_waiter_order_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./waiter/waiter-order-modal/waiter-order-modal.component */ "./src/app/waiter/waiter-order-modal/waiter-order-modal.component.ts");
/* harmony import */ var _cashdesk_cashdesk_add_card_modal_cashdesk_add_card_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component */ "./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.ts");
/* harmony import */ var _bartender_bartender_order_card_bartender_order_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bartender/bartender-order-card/bartender-order-card.component */ "./src/app/bartender/bartender-order-card/bartender-order-card.component.ts");
/* harmony import */ var _cook_cook_order_card_cook_order_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cook/cook-order-card/cook-order-card.component */ "./src/app/cook/cook-order-card/cook-order-card.component.ts");
/* harmony import */ var _notices_notices_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./notices/notices.component */ "./src/app/notices/notices.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _statistics_statistics_modal_statistics_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./statistics/statistics-modal/statistics-modal.component */ "./src/app/statistics/statistics-modal/statistics-modal.component.ts");


















// tslint:disable-next-line: max-line-length

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _waiter_waiter_component__WEBPACK_IMPORTED_MODULE_12__["WaiterComponent"],
                _cashdesk_cashdesk_component__WEBPACK_IMPORTED_MODULE_13__["CashdeskComponent"],
                _cook_cook_component__WEBPACK_IMPORTED_MODULE_15__["CookComponent"],
                _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_16__["BartenderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _cashdesk_cashdesk_table_card_cashdesk_table_card_component__WEBPACK_IMPORTED_MODULE_21__["CashdeskTableCardComponent"],
                _cashdesk_cashdesk_info_modal_cashdesk_info_modal_component__WEBPACK_IMPORTED_MODULE_22__["CashdeskInfoModalComponent"],
                _cashdesk_cashdesk_bill_modal_cashdesk_bill_modal_component__WEBPACK_IMPORTED_MODULE_23__["CashdeskBillModalComponent"],
                _waiter_waiter_table_card_waiter_table_card_component__WEBPACK_IMPORTED_MODULE_24__["WaiterTableCardComponent"],
                _waiter_waiter_status_modal_waiter_status_modal_component__WEBPACK_IMPORTED_MODULE_26__["WaiterStatusModalComponent"],
                _waiter_waiter_order_modal_waiter_order_modal_component__WEBPACK_IMPORTED_MODULE_27__["WaiterOrderModalComponent"],
                _cashdesk_cashdesk_add_card_modal_cashdesk_add_card_modal_component__WEBPACK_IMPORTED_MODULE_28__["CashdeskAddCardModalComponent"],
                _bartender_bartender_order_card_bartender_order_card_component__WEBPACK_IMPORTED_MODULE_29__["BartenderOrderCardComponent"],
                _cook_cook_order_card_cook_order_card_component__WEBPACK_IMPORTED_MODULE_30__["CookOrderCardComponent"],
                _notices_notices_component__WEBPACK_IMPORTED_MODULE_31__["NoticesComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_32__["StatisticsComponent"],
                _statistics_statistics_modal_statistics_modal_component__WEBPACK_IMPORTED_MODULE_33__["StatisticsModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _helpers_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__["AngularFontAwesomeModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]
            ],
            exports: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_14__["RequestInterceptor"], multi: true }
            ],
            entryComponents: [
                _cashdesk_cashdesk_info_modal_cashdesk_info_modal_component__WEBPACK_IMPORTED_MODULE_22__["CashdeskInfoModalComponent"],
                _cashdesk_cashdesk_bill_modal_cashdesk_bill_modal_component__WEBPACK_IMPORTED_MODULE_23__["CashdeskBillModalComponent"],
                _waiter_waiter_status_modal_waiter_status_modal_component__WEBPACK_IMPORTED_MODULE_26__["WaiterStatusModalComponent"],
                _waiter_waiter_order_modal_waiter_order_modal_component__WEBPACK_IMPORTED_MODULE_27__["WaiterOrderModalComponent"],
                _cashdesk_cashdesk_add_card_modal_cashdesk_add_card_modal_component__WEBPACK_IMPORTED_MODULE_28__["CashdeskAddCardModalComponent"],
                _statistics_statistics_modal_statistics_modal_component__WEBPACK_IMPORTED_MODULE_33__["StatisticsModalComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bartender/bartender-order-card/bartender-order-card.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/bartender/bartender-order-card/bartender-order-card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"m-3\" style=\"width: 18rem;\">\n  <mat-card-header>\n    <mat-card-title>Table n° {{info.tableNumber}}</mat-card-title>\n    <mat-card-subtitle>\n      {{info.order.created_at | date:\"HH:mm\"}}\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list>\n      <h3 mat-subheader>Drinks</h3>\n      <mat-list-item *ngFor=\"let item of info.order.items\">\n        <mat-icon mat-list-icon>confirmation_number</mat-icon>\n        <h4 mat-line>{{item.item.name}}</h4>\n        <p mat-line> <b>Quantity: </b>{{item.quantity}} </p>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n  <mat-card-actions class=\"d-flex w-100 m-0\">\n    <button mat-flat-button color=\"accent\" class=\"py-2 mr-2 flex-fill\" (click)=\"serveOrder()\">Serve</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/bartender/bartender-order-card/bartender-order-card.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/bartender/bartender-order-card/bartender-order-card.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci9iYXJ0ZW5kZXItb3JkZXItY2FyZC9iYXJ0ZW5kZXItb3JkZXItY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bartender/bartender-order-card/bartender-order-card.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/bartender/bartender-order-card/bartender-order-card.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BartenderOrderCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderOrderCardComponent", function() { return BartenderOrderCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BartenderOrderCardComponent = /** @class */ (function () {
    function BartenderOrderCardComponent() {
        this.serve = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BartenderOrderCardComponent.prototype.ngOnInit = function () {
    };
    BartenderOrderCardComponent.prototype.serveOrder = function () {
        this.serve.emit(this.info);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('info'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BartenderOrderCardComponent.prototype, "info", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BartenderOrderCardComponent.prototype, "serve", void 0);
    BartenderOrderCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bartender-order-card',
            template: __webpack_require__(/*! ./bartender-order-card.component.html */ "./src/app/bartender/bartender-order-card/bartender-order-card.component.html"),
            styles: [__webpack_require__(/*! ./bartender-order-card.component.scss */ "./src/app/bartender/bartender-order-card/bartender-order-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BartenderOrderCardComponent);
    return BartenderOrderCardComponent;
}());



/***/ }),

/***/ "./src/app/bartender/bartender.component.html":
/*!****************************************************!*\
  !*** ./src/app/bartender/bartender.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-wrap justify-content-begin\">\n  <app-bartender-order-card *ngFor=\"let info of ordersRichInfo\" [info]=\"info\" (serve)=\"serveOrder($event)\">\n  </app-bartender-order-card>\n</div>"

/***/ }),

/***/ "./src/app/bartender/bartender.component.scss":
/*!****************************************************!*\
  !*** ./src/app/bartender/bartender.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci9iYXJ0ZW5kZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bartender/bartender.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bartender/bartender.component.ts ***!
  \**************************************************/
/*! exports provided: BartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderComponent", function() { return BartenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/socket-helper */ "./src/app/_helpers/socket-helper.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_notice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/notice.service */ "./src/app/_services/notice.service.ts");
/* harmony import */ var _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/notice-helper */ "./src/app/_helpers/notice-helper.ts");







var BartenderComponent = /** @class */ (function () {
    function BartenderComponent(orderService, SnackBar, noticeService) {
        this.orderService = orderService;
        this.SnackBar = SnackBar;
        this.noticeService = noticeService;
    }
    BartenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrders();
        _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_3__["default"].registerEvent('orderAddedOrUpdated', function () {
            _this.getNotice();
            _this.getOrders();
        });
    };
    BartenderComponent.prototype.getNotice = function () {
        var _this = this;
        this.noticeService.get(1).subscribe(function (data) {
            if (data.notices[0]) {
                _this.openSnackBar(data.notices[0].from.username.toUpperCase() + ": " + data.notices[0].message);
                _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_6__["default"].pushToNotices(data.notices[0]);
            }
        }, function (err) { return console.error(err); }, function () { });
    };
    BartenderComponent.prototype.openSnackBar = function (message) {
        this.noticeSnackbar = this.SnackBar.open(message, 'Dismiss', {
            duration: 3000
        });
    };
    BartenderComponent.prototype.getOrders = function () {
        var _this = this;
        var orderObs = this.orderService.getAll({ type: 'beverage', processed: false, populate: true });
        orderObs.subscribe(function (data) {
            _this.ordersRichInfo = data.richInfo;
        });
    };
    BartenderComponent.prototype.serveOrder = function (info) {
        var _this = this;
        this.orderService.process(info.tableNumber, info.order._id).subscribe(function (data) { return console.log(data); }, function (err) { return console.error(err); }, function () {
            _this.getOrders();
        });
    };
    BartenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bartender',
            template: __webpack_require__(/*! ./bartender.component.html */ "./src/app/bartender/bartender.component.html"),
            styles: [__webpack_require__(/*! ./bartender.component.scss */ "./src/app/bartender/bartender.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _services_notice_service__WEBPACK_IMPORTED_MODULE_5__["NoticeService"]])
    ], BartenderComponent);
    return BartenderComponent;
}());



/***/ }),

/***/ "./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-2 pt-2\">\n  <h1 mat-dialog-title class=\"text-primary mb-3\"><i class=\"fas fa-edit mr-2\"></i> Add a new table</h1>\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Id number of new table</mat-label>\n      <input matInput type=\"number\" [formControl]=\"tableNumber\" required>\n      <mat-icon matSuffix fontSet=\"fas\" fontIcon=\"fa-database\" class=\"mx-2 text-small\"></mat-icon>\n      <mat-hint>New table number cannot be already associated to any existing table</mat-hint>\n      <mat-error *ngIf=\"tableNumber.invalid\">{{getNumberErrorMessage()}}</mat-error>\n    </mat-form-field>\n    <br><br>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Number of seats</mat-label>\n      <input matInput type=\"number\" [formControl]=\"seatsNumber\" required>\n      <mat-icon matSuffix fontSet=\"fas\" fontIcon=\"fa-chair\" class=\"mx-2 text-small\"></mat-icon>\n      <mat-error *ngIf=\"seatsNumber.invalid\">{{getSeatsErrorMessage()}}</mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"w-100 d-flex mb-0\">\n    <button mat-flat-button class=\"flex-fill mr-3\" color=\"accent\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-flat-button class=\"flex-fill\" color=\"primary\" (click)=\"addTable()\" type=\"submit\">Ok</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2hkZXNrL2Nhc2hkZXNrLWFkZC1jYXJkLW1vZGFsL2Nhc2hkZXNrLWFkZC1jYXJkLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CashdeskAddCardModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdeskAddCardModalComponent", function() { return CashdeskAddCardModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/table.service */ "./src/app/_services/table.service.ts");
/* harmony import */ var _validators_async_table_number_not_taken_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_validators/async-table-number-not-taken.validator */ "./src/app/_validators/async-table-number-not-taken.validator.ts");






var CashdeskAddCardModalComponent = /** @class */ (function () {
    function CashdeskAddCardModalComponent(dialogRef, tableService) {
        this.dialogRef = dialogRef;
        this.tableService = tableService;
        this.tableNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], _validators_async_table_number_not_taken_validator__WEBPACK_IMPORTED_MODULE_5__["ValidateTableNumberNotTaken"].createValidator(this.tableService));
        this.seatsNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]);
    }
    CashdeskAddCardModalComponent.prototype.ngOnInit = function () {
    };
    CashdeskAddCardModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CashdeskAddCardModalComponent.prototype.getNumberErrorMessage = function () {
        return this.tableNumber.hasError('required') ? 'You must enter a value' :
            this.tableNumber.hasError('tableNumberTaken') ? 'Table number already taken' :
                '';
    };
    CashdeskAddCardModalComponent.prototype.getSeatsErrorMessage = function () {
        return this.tableNumber.hasError('required') ? 'You must enter a value' :
            this.tableNumber.hasError('min') ? 'Number of seats must be at least 1' :
                '';
    };
    CashdeskAddCardModalComponent.prototype.addTable = function () {
        var data = {
            tableNumber: this.tableNumber.value,
            numberOfSeats: this.seatsNumber.value
        };
        var component = this;
        this.tableService.addTable(data).subscribe(function (newData) { console.log('add table data: ', newData); }, function (err) {
            console.error(err);
        }, function () {
            component.dialogRef.close('done');
        });
    };
    CashdeskAddCardModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashdesk-add-card-modal',
            template: __webpack_require__(/*! ./cashdesk-add-card-modal.component.html */ "./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.html"),
            styles: [__webpack_require__(/*! ./cashdesk-add-card-modal.component.scss */ "./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]])
    ], CashdeskAddCardModalComponent);
    return CashdeskAddCardModalComponent;
}());



/***/ }),

/***/ "./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-dialog-close type=\"button\" class=\"close pull-right\" aria-label=\"Close\">\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n<h1 mat-dialog-title>Bill of table n° {{table.number}}</h1>\n<mat-dialog-content *ngIf=\"bill\">\n  <div class=\"bill m-3 p-3\">\n    date and time: {{getCurrentTime()}}<br>\n    covers: {{activeService(table).covers}}<br>\n    <div class=\"my-2\"></div>\n    <div *ngFor=\"let item of bill.items\" class=\"d-flex\">\n      <div class=\"flex-fill\">{{item.quantity}} x {{item.name}}</div>\n      <div class=\"flex-fill text-right\">{{item.quantity * item.price}}</div>\n    </div>\n    <div class=\"text-right\">\n      Total: {{bill.total}}\n    </div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions *ngIf=\"bill\" class=\"d-flex w-100 m-0 px-3 py-0\">\n  <button mat-flat-button color=\"warn\" class=\"py-2 flex-fill\" (click)=\"tablePayment()\">Payment</button>\n</mat-dialog-actions>\n<div *ngIf=\"!bill\" class=\"d-flex flex-column justify-content-center align-items-center w-100\">\n  <img src=\"../../assets/img/loader.svg\">\n</div>\n"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CashdeskBillModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdeskBillModalComponent", function() { return CashdeskBillModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models/table */ "./src/app/_models/table.ts");
/* harmony import */ var _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/table-helper */ "./src/app/_helpers/table-helper.ts");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/table.service */ "./src/app/_services/table.service.ts");






var CashdeskBillModalComponent = /** @class */ (function () {
    function CashdeskBillModalComponent(dialogRef, tableService, data) {
        this.dialogRef = dialogRef;
        this.tableService = tableService;
        this.data = data;
        this.activeService = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["activeService"];
        this.foodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["foodOrders"];
        this.beverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["beverageOrders"];
        this.processedFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["processedFoodOrders"];
        this.processedBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["processedBeverageOrders"];
        this.pendingFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["pendingFoodOrders"];
        this.pendingBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["pendingBeverageOrders"];
    }
    CashdeskBillModalComponent.prototype.ngOnInit = function () {
        this.table = this.data;
        this.getBill();
    };
    CashdeskBillModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CashdeskBillModalComponent.prototype.getBill = function () {
        var _this = this;
        var billObs = this.tableService.getBill(this.table.number);
        billObs.subscribe(function (data) {
            _this.bill = data;
            console.log(data);
        });
    };
    CashdeskBillModalComponent.prototype.tablePayment = function () {
        var actualBill = this.bill;
        var tablePaymentObs = this.tableService.doTablePayment(this.table);
        var component = this;
        this.bill = null;
        tablePaymentObs.subscribe(function (data) { console.log(data); }, function (err) {
            console.error(err);
            component.bill = actualBill;
        }, function () {
            component.dialogRef.close("paid");
        });
    };
    CashdeskBillModalComponent.prototype.getCurrentTime = function () {
        var now = new Date(Date.now());
        return now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear() + ", " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    };
    CashdeskBillModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashdesk-bill-modal',
            template: __webpack_require__(/*! ./cashdesk-bill-modal.component.html */ "./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.html"),
            styles: [__webpack_require__(/*! ./cashdesk-bill-modal.component.scss */ "./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_services_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"],
            src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["Table"]])
    ], CashdeskBillModalComponent);
    return CashdeskBillModalComponent;
}());



/***/ }),

/***/ "./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-dialog-close type=\"button\" class=\"close pull-right\" aria-label=\"Close\">\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n<h1 mat-dialog-title>Table n° {{table.number}}</h1>\n<mat-dialog-content class=\"d-flex flex-column justify-content-center align-items-start\">\n  <div class=\"my-2\">\n    <b><i class=\"fas fa-info-circle mr-3\"></i>STATUS: </b>\n    <span class=\"mx-3\">\n      <i [class]=\"table.busy ? 'fas fa-times' : 'fas fa-check'\" [style.color]=\"table.busy ? 'red' : 'green'\"></i>\n    </span>\n  </div>\n  <div class=\"my-2\">\n    <b><i class=\"fas fa-chair mr-3\"></i>SEATS: </b>\n    <span class=\"mx-3\">{{table.seats}}</span>\n  </div>\n  <div class=\"my-2\" *ngIf=\"activeService(table).waiter\">\n    <b><i class=\"fas fa-user mr-3\"></i>WAITER: </b>\n    <span class=\"mx-3\">{{activeService(table).waiter['username']}}</span>\n  </div>\n  <div *ngIf=\"table.busy\">\n    <h5 *ngIf=\"pendingFoodOrders(table).length > 0\" class=\"text-danger mt-4\">Pending food orders</h5>\n    <ul *ngFor=\"let order of pendingFoodOrders(table)\">\n      <li *ngFor=\"let item of order.items\">\n        {{item.quantity}} x {{item.item.name}}, <b>ordered at:</b> {{order.created_at | date:\"HH:mm\"}}\n      </li>\n    </ul>\n    <h5 *ngIf=\"pendingBeverageOrders(table).length > 0\" class=\"text-danger mt-4\">Pending beverage orders</h5>\n    <ul *ngFor=\"let order of pendingBeverageOrders(table)\">\n      <li *ngFor=\"let item of order.items\">\n        {{item.quantity}} x {{item.item.name}}, <b>ordered at:</b> {{order.created_at | date:\"HH:mm\"}}\n      </li>\n    </ul>\n    <h5 *ngIf=\"processedFoodOrders(table).length > 0\" class=\"text-primary mt-4\">Processed food orders</h5>\n    <ul *ngFor=\"let order of processedFoodOrders(table)\">\n      <li *ngFor=\"let item of order.items\">\n        {{item.quantity}} x {{item.item.name}}, <b>processed at:</b> {{order.processed | date:\"HH:mm\"}}\n      </li>\n    </ul>\n    <h5 *ngIf=\"processedBeverageOrders(table).length > 0\" class=\"text-danger mt-4\">Processed beverage orders\n    </h5>\n    <ul *ngFor=\"let order of processedBeverageOrders(table)\">\n      <li *ngFor=\"let item of order.items\">\n        {{item.quantity}} x {{item.item.name}}, <b>processed at:</b> {{order.processed | date:\"HH:mm\"}}\n      </li>\n    </ul>\n  </div>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2hkZXNrL2Nhc2hkZXNrLWluZm8tbW9kYWwvY2FzaGRlc2staW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CashdeskInfoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdeskInfoModalComponent", function() { return CashdeskInfoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models/table */ "./src/app/_models/table.ts");
/* harmony import */ var _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/table-helper */ "./src/app/_helpers/table-helper.ts");





var CashdeskInfoModalComponent = /** @class */ (function () {
    function CashdeskInfoModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.activeService = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["activeService"];
        this.foodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["foodOrders"];
        this.beverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["beverageOrders"];
        this.processedFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["processedFoodOrders"];
        this.processedBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["processedBeverageOrders"];
        this.pendingFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["pendingFoodOrders"];
        this.pendingBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_4__["pendingBeverageOrders"];
    }
    CashdeskInfoModalComponent.prototype.ngOnInit = function () {
        this.table = this.data;
        console.log(this.table);
    };
    CashdeskInfoModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CashdeskInfoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashdesk-info-modal',
            template: __webpack_require__(/*! ./cashdesk-info-modal.component.html */ "./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.html"),
            styles: [__webpack_require__(/*! ./cashdesk-info-modal.component.scss */ "./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_models_table__WEBPACK_IMPORTED_MODULE_3__["Table"]])
    ], CashdeskInfoModalComponent);
    return CashdeskInfoModalComponent;
}());



/***/ }),

/***/ "./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"m-3\" style=\"width: 18rem;\">\n  <div class=\"w-100 mb-3\" [class.busy]=\"table.busy\" [class.free]=\"!table.busy\"></div>\n  <mat-card-header>\n    <mat-card-title>Table n° {{table.number}}</mat-card-title>\n    <mat-card-subtitle class=\"d-flex justify-content-around\">\n      <div class=\"flex-fill\">\n        <i class=\"fas fa-users mr-2\"></i>{{activeService(table).covers}}/{{table.seats}}\n      </div>\n      <div class=\"flex-fill\">\n        <i class=\"fas fa-concierge-bell mx-2\"></i>{{processedFoodOrders(table).length}}/{{foodOrders(table).length}}\n      </div>\n      <div class=\"flex-fill\">\n        <i class=\"fas fa-beer mx-2\"></i>{{processedBeverageOrders(table).length}}/{{beverageOrders(table).length}}\n      </div>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <b>Waiter serving this table:\n    </b><br>{{activeService(table).waiter ? activeService(table).waiter['username'] : 'none'}}\n  </mat-card-content>\n  <mat-card-actions class=\"d-flex w-100 m-0\">\n    <button mat-flat-button color=\"accent\" class=\"py-2 mr-2 flex-fill\" (click)=\"openInfoHandler()\">Info</button>\n    <button mat-flat-button color=\"primary\" [disabled]=\"activeService(table).done\" class=\"py-2 ml-2 flex-fill\" (click)=\"openBillHandler()\">Bill</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2hkZXNrL2Nhc2hkZXNrLXRhYmxlLWNhcmQvY2FzaGRlc2stdGFibGUtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CashdeskTableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdeskTableCardComponent", function() { return CashdeskTableCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/table */ "./src/app/_models/table.ts");
/* harmony import */ var _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/table-helper */ "./src/app/_helpers/table-helper.ts");




var CashdeskTableCardComponent = /** @class */ (function () {
    function CashdeskTableCardComponent() {
        this.openInfoModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openBillModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeService = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["activeService"];
        this.foodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["foodOrders"];
        this.beverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["beverageOrders"];
        this.processedFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["processedFoodOrders"];
        this.processedBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["processedBeverageOrders"];
        this.pendingFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["pendingFoodOrders"];
        this.pendingBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["pendingBeverageOrders"];
    }
    CashdeskTableCardComponent.prototype.ngOnInit = function () {
    };
    CashdeskTableCardComponent.prototype.openInfoHandler = function () {
        this.openInfoModal.emit(this.table);
    };
    CashdeskTableCardComponent.prototype.openBillHandler = function () {
        this.openBillModal.emit(this.table);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('table'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["Table"])
    ], CashdeskTableCardComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CashdeskTableCardComponent.prototype, "openInfoModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CashdeskTableCardComponent.prototype, "openBillModal", void 0);
    CashdeskTableCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashdesk-table-card',
            template: __webpack_require__(/*! ./cashdesk-table-card.component.html */ "./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.html"),
            styles: [__webpack_require__(/*! ./cashdesk-table-card.component.scss */ "./src/app/cashdesk/cashdesk-table-card/cashdesk-table-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CashdeskTableCardComponent);
    return CashdeskTableCardComponent;
}());



/***/ }),

/***/ "./src/app/cashdesk/cashdesk.component.html":
/*!**************************************************!*\
  !*** ./src/app/cashdesk/cashdesk.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-wrap justify-content-begin\">\n  <app-cashdesk-table-card \n    *ngFor=\"let table of tables\" \n    [table]=\"table\"\n    (openInfoModal)=\"openInfoModal(table)\"\n    (openBillModal)=\"openBillModal(table)\"\n  ></app-cashdesk-table-card>\n  <mat-card class=\"m-3 p-5 add-table-card\" style=\"width: 18rem;\" (click)=\"openAddCardModal()\">\n    <div class=\"d-flex justify-content-center align-items-center h-100\">\n      <i class=\"fas fa-plus\"></i>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/cashdesk/cashdesk.component.scss":
/*!**************************************************!*\
  !*** ./src/app/cashdesk/cashdesk.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/cashdesk/cashdesk.component.ts":
/*!************************************************!*\
  !*** ./src/app/cashdesk/cashdesk.component.ts ***!
  \************************************************/
/*! exports provided: CashdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdeskComponent", function() { return CashdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/table.service */ "./src/app/_services/table.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _cashdesk_info_modal_cashdesk_info_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cashdesk-info-modal/cashdesk-info-modal.component */ "./src/app/cashdesk/cashdesk-info-modal/cashdesk-info-modal.component.ts");
/* harmony import */ var _cashdesk_bill_modal_cashdesk_bill_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashdesk-bill-modal/cashdesk-bill-modal.component */ "./src/app/cashdesk/cashdesk-bill-modal/cashdesk-bill-modal.component.ts");
/* harmony import */ var _cashdesk_add_card_modal_cashdesk_add_card_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashdesk-add-card-modal/cashdesk-add-card-modal.component */ "./src/app/cashdesk/cashdesk-add-card-modal/cashdesk-add-card-modal.component.ts");
/* harmony import */ var _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/socket-helper */ "./src/app/_helpers/socket-helper.ts");








var CashdeskComponent = /** @class */ (function () {
    function CashdeskComponent(tableService, dialog) {
        this.tableService = tableService;
        this.dialog = dialog;
    }
    CashdeskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTables();
        _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__["default"].registerEvent('updateTables', function () {
            _this.getTables();
        });
    };
    CashdeskComponent.prototype.openInfoModal = function (table) {
        var dialogRef = this.dialog.open(_cashdesk_info_modal_cashdesk_info_modal_component__WEBPACK_IMPORTED_MODULE_4__["CashdeskInfoModalComponent"], {
            data: table
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed with result: ' + result);
        });
    };
    CashdeskComponent.prototype.openBillModal = function (table) {
        var _this = this;
        var dialogRef = this.dialog.open(_cashdesk_bill_modal_cashdesk_bill_modal_component__WEBPACK_IMPORTED_MODULE_5__["CashdeskBillModalComponent"], {
            data: table
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "paid") {
                _this.getTables();
            }
            console.log('The dialog was closed with result: ' + result);
        });
    };
    CashdeskComponent.prototype.openAddCardModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_cashdesk_add_card_modal_cashdesk_add_card_modal_component__WEBPACK_IMPORTED_MODULE_6__["CashdeskAddCardModalComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "done") {
                _this.getTables();
            }
            console.log('The dialog was closed with result: ' + result);
        });
    };
    CashdeskComponent.prototype.getTables = function () {
        var _this = this;
        var tableObs = this.tableService.getAll();
        tableObs.subscribe(function (data) {
            _this.tables = data.tables;
            console.log(data);
        });
    };
    CashdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashdesk',
            template: __webpack_require__(/*! ./cashdesk.component.html */ "./src/app/cashdesk/cashdesk.component.html"),
            styles: [__webpack_require__(/*! ./cashdesk.component.scss */ "./src/app/cashdesk/cashdesk.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CashdeskComponent);
    return CashdeskComponent;
}());



/***/ }),

/***/ "./src/app/cook/cook-order-card/cook-order-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cook/cook-order-card/cook-order-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"m-3\" style=\"width: 18rem;\">\n  <mat-card-header>\n    <mat-card-title>Table n° {{info.tableNumber}}</mat-card-title>\n    <mat-card-subtitle>\n      {{info.order.created_at | date:\"HH:mm\"}}\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let item of info.order.items; let i = index\" data-index=\"#i\">\n        <mat-expansion-panel-header >\n          <mat-panel-title>\n            <span class=\"lead\">{{item.item.name}}</span>\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p mat-line> <b>Quantity: </b>{{item.quantity}} </p>\n        <p mat-line> <b>Start time: </b>{{item.start | date:\"HH:mm\"}} </p>\n        <p mat-line class=\"mb-0\"> <b>End time: </b>{{item.end | date:\"HH:mm\"}} </p>\n        <mat-action-row>\n            <button \n            mat-button \n            color=\"control-button\" \n            title=\"start preparation\"\n            color=\"primary\"\n            (click)=\"startItemPreparation(item, i);\"\n            [disabled]=\"item.start\"\n          >Start</button>\n          <button \n            mat-button \n            color=\"control-button\" \n            title=\"end preparation\"\n            color=\"warn\"\n            (click)=\"endItemPreparation(item, i);\"\n            [disabled]=\"item.end\"\n          >End</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <!-- <mat-list>\n      <h3 mat-subheader>Food</h3>\n      <mat-list-item *ngFor=\"let item of info.order.items; let i = index\" data-index=\"#i\">\n        <h4 mat-line>{{item.item.name}}</h4>\n        <p mat-line> <b>Quantity: </b>{{item.quantity}} </p>\n        <button \n          mat-button \n          color=\"control-button\" \n          title=\"start preparation\"\n          color=\"primary\"\n          (click)=\"startItemPreparation(item, i);\"\n          [disabled]=\"item.start\"\n        >Start</button>\n        <button \n          mat-button \n          color=\"control-button\" \n          title=\"end preparation\"\n          color=\"warn\"\n          (click)=\"endItemPreparation(item, i);\"\n          [disabled]=\"item.end\"\n        >End</button>\n      </mat-list-item>\n    </mat-list> -->\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/cook/cook-order-card/cook-order-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cook/cook-order-card/cook-order-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-button {\n  min-width: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVmYW5vc2VsbG8vRG9jdW1lbnRzL3NjdW9sYS9lYXN5LXJlc3RhdXJhbnQvZnJvbnRlbmQvc3JjL2FwcC9jb29rL2Nvb2stb3JkZXItY2FyZC9jb29rLW9yZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Nvb2svY29vay1vcmRlci1jYXJkL2Nvb2stb3JkZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/cook/cook-order-card/cook-order-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cook/cook-order-card/cook-order-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: CookOrderCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookOrderCardComponent", function() { return CookOrderCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/item.service */ "./src/app/_services/item.service.ts");



var CookOrderCardComponent = /** @class */ (function () {
    function CookOrderCardComponent(itemService) {
        this.itemService = itemService;
        this.serve = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CookOrderCardComponent.prototype.ngOnInit = function () { };
    CookOrderCardComponent.prototype.serveOrder = function () {
        this.serve.emit(this.info);
    };
    CookOrderCardComponent.prototype.startItemPreparation = function (item, index) {
        var _this = this;
        this.itemService.startPreparation(item, this.info.order, this.info.tableNumber).subscribe(function (data) {
            _this.info.order.items[index].start = data.start;
        }, function (err) { return console.error(err); }, function () { return console.log('Preparation started'); });
    };
    CookOrderCardComponent.prototype.endItemPreparation = function (item, index) {
        var _this = this;
        this.itemService.endPreparation(item, this.info.order, this.info.tableNumber).subscribe(function (data) {
            _this.info.order.items[index].end = data.end;
            if (_this.checkAllItemsPrepared()) {
                _this.serveOrder();
            }
        }, function (err) { return console.error(err); }, function () { return console.log('Preparation finished'); });
    };
    CookOrderCardComponent.prototype.checkAllItemsPrepared = function () {
        return !this.info.order.items.find(function (element) { return !element.end; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('info'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CookOrderCardComponent.prototype, "info", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CookOrderCardComponent.prototype, "serve", void 0);
    CookOrderCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cook-order-card',
            template: __webpack_require__(/*! ./cook-order-card.component.html */ "./src/app/cook/cook-order-card/cook-order-card.component.html"),
            styles: [__webpack_require__(/*! ./cook-order-card.component.scss */ "./src/app/cook/cook-order-card/cook-order-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], CookOrderCardComponent);
    return CookOrderCardComponent;
}());



/***/ }),

/***/ "./src/app/cook/cook.component.html":
/*!******************************************!*\
  !*** ./src/app/cook/cook.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-wrap justify-content-begin\">\n  <app-cook-order-card *ngFor=\"let info of ordersRichInfo\" [info]=\"info\" (serve)=\"serveOrder($event)\">\n  </app-cook-order-card>\n</div>\n"

/***/ }),

/***/ "./src/app/cook/cook.component.scss":
/*!******************************************!*\
  !*** ./src/app/cook/cook.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2svY29vay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cook/cook.component.ts":
/*!****************************************!*\
  !*** ./src/app/cook/cook.component.ts ***!
  \****************************************/
/*! exports provided: CookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookComponent", function() { return CookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/socket-helper */ "./src/app/_helpers/socket-helper.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_notice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/notice.service */ "./src/app/_services/notice.service.ts");
/* harmony import */ var _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/notice-helper */ "./src/app/_helpers/notice-helper.ts");







var CookComponent = /** @class */ (function () {
    function CookComponent(orderService, noticeService, SnackBar) {
        this.orderService = orderService;
        this.noticeService = noticeService;
        this.SnackBar = SnackBar;
    }
    CookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrders();
        _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_3__["default"].registerEvent('orderAddedOrUpdated', function () {
            _this.getNotice();
            _this.getOrders();
        });
    };
    CookComponent.prototype.getNotice = function () {
        var _this = this;
        this.noticeService.get(1).subscribe(function (data) {
            if (data.notices[0]) {
                _this.openSnackBar(data.notices[0].from.username.toUpperCase() + ": " + data.notices[0].message);
                _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_6__["default"].pushToNotices(data.notices[0]);
            }
        }, function (err) { return console.error(err); }, function () { });
    };
    CookComponent.prototype.openSnackBar = function (message) {
        this.noticeSnackbar = this.SnackBar.open(message, 'Dismiss', {
            duration: 3000
        });
    };
    CookComponent.prototype.getOrders = function () {
        var _this = this;
        var orderObs = this.orderService.getAll({ type: 'food', processed: false, populate: true });
        orderObs.subscribe(function (data) {
            _this.ordersRichInfo = data.richInfo.sort(function (el1, el2) {
                var time1 = new Date(el1.order.created_at);
                var time2 = new Date(el2.order.created_at);
                return time1.getTime() - time2.getTime();
            });
        });
    };
    CookComponent.prototype.serveOrder = function (info) {
        var _this = this;
        this.orderService.process(info.tableNumber, info.order._id).subscribe(function (data) { return console.log(data); }, function (err) { return console.error(err); }, function () {
            _this.getOrders();
        });
    };
    CookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cook',
            template: __webpack_require__(/*! ./cook.component.html */ "./src/app/cook/cook.component.html"),
            styles: [__webpack_require__(/*! ./cook.component.scss */ "./src/app/cook/cook.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _services_notice_service__WEBPACK_IMPORTED_MODULE_5__["NoticeService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CookComponent);
    return CookComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"'/'+ currentUser.role.replace('_', '')\">Home</a>\n      <a mat-list-item *ngIf=\"currentUser.role === 'cash_desk'\" routerLink=\"/statistics\">Statistics</a>\n      <a mat-list-item routerLink=\"/notices\">\n        Notices\n        <mat-chip color=\"accent\" *ngIf=\"NoticeHelper.getNotices() && NoticeHelper.getNotices().length > 0\" class=\"ml-3\">\n          {{NoticeHelper.getNotices().length}}\n        </mat-chip>\n      </a>\n      <a mat-list-item (click)=\"logOut()\">Logout</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Easy Restaurant</span>\n    </mat-toolbar>\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\nmat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.content {\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVmYW5vc2VsbG8vRG9jdW1lbnRzL3NjdW9sYS9lYXN5LXJlc3RhdXJhbnQvZnJvbnRlbmQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/socket-helper */ "./src/app/_helpers/socket-helper.ts");
/* harmony import */ var _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/notice-helper */ "./src/app/_helpers/notice-helper.ts");
/* harmony import */ var _services_notice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/notice.service */ "./src/app/_services/notice.service.ts");









var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver, authService, noticeService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.noticeService = noticeService;
        this.currentUser = this.authService.getUserInfo();
        this.roles = _models_user__WEBPACK_IMPORTED_MODULE_4__["Roles"];
        this.NoticeHelper = _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    HomeComponent.prototype.ngOnInit = function () {
        _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_7__["default"].initNotices(this.noticeService);
        _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_6__["default"].setSocketInstance(this.authService.getUserInfo().token);
    };
    HomeComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_notice_service__WEBPACK_IMPORTED_MODULE_8__["NoticeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main mat-app-background\">\n  <mat-card color=\"secondary\">\n    <form [formGroup]=\"form\">\n      <mat-card-header>\n        <mat-card-title>Login</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Username</mat-label>\n            <input matInput name=\"username\" id=\"username\" formControlName=\"username\" required>\n            <mat-icon matSuffix color=\"primary\">person</mat-icon>\n            <mat-error *ngIf=\"username.hasError('required')\">\n              Please enter your username.\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Password</mat-label>\n            <input matInput name=\"password\" id=\"password\" formControlName=\"password\" type=\"password\" required>\n            <mat-icon matSuffix color=\"primary\">lock</mat-icon>\n            <mat-error *ngIf=\"password.hasError('required')\">\n              Please enter your password.\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n      <mat-card-actions class=\"mx-0\">\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Login</button>\n      </mat-card-actions>\n      <mat-card-footer class=\"px-3\">\n        <mat-error *ngIf=\"invalid\">\n          Bad credentials.\n        </mat-error>\n      </mat-card-footer>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVmYW5vc2VsbG8vRG9jdW1lbnRzL3NjdW9sYS9lYXN5LXJlc3RhdXJhbnQvZnJvbnRlbmQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, route, router, authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.invalid = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.form.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.form.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var fields = this.form.value;
        this.submitted = true;
        if (fields.username && fields.password) {
            this.authService.login(fields.username, fields.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
            }, function (error) {
                _this.invalid = true;
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/notices/notices.component.html":
/*!************************************************!*\
  !*** ./src/app/notices/notices.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item *ngFor=\"let notice of NoticeHelper.getNotices()\">\n    <img matListAvatar [src]=\"'assets/img/' + notice.from.role + '.svg'\" [alt]=\"notice.from.role + '-avatar'\">\n    <h3 matLine> {{notice.from.username}} </h3>\n    <p matLine>\n      <span> {{notice.timestamp | date:\"yyyy/MM/dd HH:mm\"}} </span>\n      <span> -- {{notice.message}} </span>\n    </p>\n    <a (click)=\"removeNotice(notice)\" href=\"javascript:void(0)\">\n      <mat-icon color=\"warn\">clear</mat-icon>\n    </a>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/notices/notices.component.scss":
/*!************************************************!*\
  !*** ./src/app/notices/notices.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGljZXMvbm90aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notices/notices.component.ts":
/*!**********************************************!*\
  !*** ./src/app/notices/notices.component.ts ***!
  \**********************************************/
/*! exports provided: NoticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesComponent", function() { return NoticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/notice-helper */ "./src/app/_helpers/notice-helper.ts");
/* harmony import */ var _services_notice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/notice.service */ "./src/app/_services/notice.service.ts");




var NoticesComponent = /** @class */ (function () {
    function NoticesComponent(noticeService) {
        this.noticeService = noticeService;
        this.services = [];
        this.NoticeHelper = _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    NoticesComponent.prototype.ngOnInit = function () {
    };
    NoticesComponent.prototype.removeNotice = function (notice) {
        this.noticeService.drop(notice._id).subscribe(function (_) {
            _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_2__["default"].removeFromNotices(notice);
        }, function (err) { return console.error(err); });
    };
    NoticesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notices',
            template: __webpack_require__(/*! ./notices.component.html */ "./src/app/notices/notices.component.html"),
            styles: [__webpack_require__(/*! ./notices.component.scss */ "./src/app/notices/notices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notice_service__WEBPACK_IMPORTED_MODULE_3__["NoticeService"]])
    ], NoticesComponent);
    return NoticesComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics-modal/statistics-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/statistics/statistics-modal/statistics-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  statistics-modal works!\n</p>\n"

/***/ }),

/***/ "./src/app/statistics/statistics-modal/statistics-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/statistics/statistics-modal/statistics-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy1tb2RhbC9zdGF0aXN0aWNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/statistics/statistics-modal/statistics-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/statistics/statistics-modal/statistics-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: StatisticsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModalComponent", function() { return StatisticsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/user */ "./src/app/_models/user.ts");





var StatisticsModalComponent = /** @class */ (function () {
    function StatisticsModalComponent(dialogRef, user, userService) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.userService = userService;
    }
    StatisticsModalComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    StatisticsModalComponent.prototype.getUser = function () {
        this.userService.get(this.user).subscribe(function (data) { console.log(data); }, function (err) { console.error(err); }, function () { });
    };
    StatisticsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics-modal',
            template: __webpack_require__(/*! ./statistics-modal.component.html */ "./src/app/statistics/statistics-modal/statistics-modal.component.html"),
            styles: [__webpack_require__(/*! ./statistics-modal.component.scss */ "./src/app/statistics/statistics-modal/statistics-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], StatisticsModalComponent);
    return StatisticsModalComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item *ngFor=\"let user of users\">\n    <img matListAvatar [src]=\"'assets/img/' + user.role + '.svg'\" [alt]=\"user.role + '-avatar'\">\n    <h3 matLine> {{user.username}} </h3>\n    <button mat-button color=\"accent\" (click)=\"openStatisticsModal(user)\" title=\"see statistics\" class=\"mr-3\">\n      <mat-icon color=\"accent\">insert_chart_outlined</mat-icon>\n    </button>\n    <button mat-button color=\"warn\" (click)=\"deleteUser(user)\" title=\"delete user\">\n      <mat-icon color=\"warn\">clear</mat-icon>\n    </button>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _statistics_modal_statistics_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistics-modal/statistics-modal.component */ "./src/app/statistics/statistics-modal/statistics-modal.component.ts");





var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(userService, dialog) {
        this.userService = userService;
        this.dialog = dialog;
        this.users = [];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    StatisticsComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            console.log(data);
            _this.users = data.users;
        }, function (err) {
            console.error(err);
        }, function () { });
    };
    StatisticsComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.delete(user).subscribe(function (_) {
            _this.users = _this.users.filter(function (u) { return u.username != user.username; });
        }, function (err) {
            console.error(err);
        }, function () { });
    };
    StatisticsComponent.prototype.openStatisticsModal = function (user) {
        var dialogRef = this.dialog.open(_statistics_modal_statistics_modal_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsModalComponent"], {
            data: user
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed with result: ' + result);
        });
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/statistics/statistics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/waiter/waiter-order-modal/waiter-order-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/waiter/waiter-order-modal/waiter-order-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-2 pt-2\">\n  <h1 mat-dialog-title class=\"text-primary mb-3\">\n    <i class=\"fas fa-edit mr-2\"></i>Orders for table number {{table.number}}\n  </h1>\n  <div mat-dialog-content>\n    <mat-tab-group>\n      <mat-tab label=\"Food Orders\">\n        <div class=\"w-100 px-2 pt-4 pb-3\">\n          <mat-accordion *ngIf=\"showAccordion\">\n            <mat-expansion-panel \n              *ngFor=\"let order of getOrders(table, 'food'); let i = index\" \n              data-index=\"#i\" \n              [disabled]=\"!!order.processed\"\n            >\n              <mat-expansion-panel-header>\n                <mat-panel-title class=\"lead\">\n                  Order No̲ {{ i }}\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <div class=\"pb-3\">\n                <mat-list>\n                  <mat-list-item *ngFor=\"let item of order.items\">\n                    <mat-icon mat-list-icon>confirmation_number</mat-icon>\n                    <h4 mat-line>{{item.item.name}}</h4>\n                    <p mat-line> \n                      <b>Quantity: </b>{{item.quantity}}\n                    </p>\n                    <button \n                      mat-button \n                      color=\"control-button\"\n                      title=\"delete item\"\n                      color=\"warn\"\n                      class=\"control-button ml-3\"\n                      (click)=\"removeItemFromOrder(item.item, order)\"\n                    ><mat-icon>delete</mat-icon>\n                    </button>\n                  </mat-list-item>\n                </mat-list>\n              </div>\n              <div *ngIf=\"order.addingItem\">\n                <div class=\"row mx-0 px-0 align-items-center\">\n                  <div class=\"col-12 col-md-6 px-0\">\n                    <mat-form-field class=\"w-100\">\n                      <input \n                        type=\"text\" \n                        placeholder=\"Food\" \n                        aria-label=\"Food\" \n                        matInput \n                        [formControl]=\"foodAutocomplete\" \n                        [matAutocomplete]=\"auto\"\n                      >\n                      <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                        <mat-option *ngFor=\"let option of filteredFoodOptions | async\" [value]=\"option\">\n                          {{option.name}}\n                        </mat-option>\n                      </mat-autocomplete>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-12 col-md-6 px-0 d-flex\">\n                    <mat-form-field class=\"number-form-field ml-md-3\">\n                      <input \n                        matInput \n                        placeholder=\"Quantity\" \n                        type=\"number\" \n                        [(ngModel)]=\"newItemQuantity\"\n                      >\n                    </mat-form-field>\n                    <button \n                      mat-button \n                      class=\"ml-3 control-button\" \n                      color=\"warn\" \n                      title=\"drop this item\" \n                      (click)=\"order.addingItem = false\"\n                    ><mat-icon>clear</mat-icon>\n                    </button>\n                    <button \n                      mat-button \n                      class=\"ml-2 control-button\" \n                      color=\"primary\" \n                      title=\"drop this item\" \n                      (click)=\"addItemHandler(foodAutocomplete.value, order); order.addingItem = false;\"\n                    ><mat-icon>save_alt</mat-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <mat-action-row>\n                <button \n                  mat-button \n                  color=\"primary\" \n                  title=\"add an item\" \n                  (click)=\"order.addingItem ? addItemHandler(foodAutocomplete.value, order) : order.addingItem = true;\"\n                ><mat-icon>add</mat-icon> Add item\n                </button>\n                <button \n                  mat-button \n                  color=\"warn\" \n                  title=\"delete order\" \n                  (click)=\"deleteOrder(order)\"\n                ><mat-icon>delete_forever</mat-icon> Delete order\n                </button>\n              </mat-action-row>\n            </mat-expansion-panel>\n          </mat-accordion>\n          <div class=\"py-3\">\n            <a href=\"javascript:void(0)\" (click)=\"addOrder('food')\">Add an order...</a>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Beverage Orders\">\n        <div class=\"w-100 px-2 pt-4 pb-3\">\n          <mat-accordion *ngIf=\"showAccordion\">\n            <mat-expansion-panel \n              *ngFor=\"let order of getOrders(table, 'beverage'); let i = index\" \n              data-index=\"#i\"\n              [disabled]=\"!!order.processed\"\n            >\n              <mat-expansion-panel-header>\n                <mat-panel-title class=\"lead\">\n                  Order No̲ {{ i }}\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <div class=\"pb-3\">\n                <mat-list>\n                  <mat-list-item *ngFor=\"let item of order.items\">\n                    <mat-icon mat-list-icon>confirmation_number</mat-icon>\n                    <h4 mat-line>{{item.item.name}}</h4>\n                    <p mat-line> \n                      <b>Quantity: </b>{{item.quantity}}\n                    </p>\n                    <button \n                      mat-button \n                      color=\"control-button\" \n                      title=\"delete item\"\n                      color=\"warn\"\n                      class=\"control-button ml-3\"\n                      (click)=\"removeItemFromOrder(item.item, order)\"\n                    ><mat-icon>delete</mat-icon>\n                    </button>\n                  </mat-list-item>\n                </mat-list>\n              </div>\n              <div *ngIf=\"order.addingItem\">\n                <div class=\"row mx-0 px-0\">\n                  <div class=\"col-12 col-md-6 px-0\">\n                    <mat-form-field class=\"w-100\">\n                      <input \n                        type=\"text\" \n                        placeholder=\"Beverage\" \n                        aria-label=\"Beverage\" \n                        matInput \n                        [formControl]=\"beverageAutocomplete\" \n                        [matAutocomplete]=\"auto\"\n                      >\n                      <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                        <mat-option *ngFor=\"let option of filteredBeverageOptions | async\" [value]=\"option\">\n                          {{option.name}}\n                        </mat-option>\n                      </mat-autocomplete>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-12 col-md-6 px-0 d-flex\">\n                    <mat-form-field class=\"number-form-field ml-md-3\">\n                      <input \n                        matInput \n                        placeholder=\"Quantity\" \n                        type=\"number\" \n                        [(ngModel)]=\"newItemQuantity\"\n                      >\n                    </mat-form-field>\n                    <button \n                      mat-button \n                      class=\"ml-3 control-button\" \n                      color=\"warn\" \n                      title=\"drop this item\" \n                      (click)=\"order.addingItem = false\"\n                    ><mat-icon>clear</mat-icon>\n                    </button>\n                    <button \n                      mat-button \n                      class=\"ml-2 control-button\" \n                      color=\"primary\" \n                      title=\"drop this item\" \n                      (click)=\"addItemHandler(beverageAutocomplete.value, order); order.addingItem = false;\"\n                    ><mat-icon>save_alt</mat-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <mat-action-row>\n                <button \n                  mat-button \n                  color=\"primary\" \n                  title=\"add an item\" \n                  (click)=\"order.addingItem ? addItemHandler(beverageAutocomplete.value, order) : order.addingItem = true;\"\n                ><mat-icon>add</mat-icon> Add item\n                </button>\n                <button \n                  mat-button \n                  color=\"warn\" \n                  title=\"delete order\" \n                  (click)=\"deleteOrder(order)\"\n                ><mat-icon>delete_forever</mat-icon> Delete order\n                </button>\n              </mat-action-row>\n            </mat-expansion-panel>\n          </mat-accordion>\n          <div class=\"py-3\">\n            <a href=\"javascript:void(0)\" (click)=\"addOrder('beverage')\">Add an order...</a>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n  <div mat-dialog-actions class=\"w-100 d-flex justify-content-center mb-0 px-2\">\n    <button mat-flat-button class=\"w-100\" color=\"primary\" (click)=\"closeClick()\">Done</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/waiter/waiter-order-modal/waiter-order-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/waiter/waiter-order-modal/waiter-order-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-accordion button {\n  border-radius: .25rem !important; }\n\nbutton.control-button {\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  line-height: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0; }\n\ninput[type=number],\n.number-form-field {\n  width: 4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVmYW5vc2VsbG8vRG9jdW1lbnRzL3NjdW9sYS9lYXN5LXJlc3RhdXJhbnQvZnJvbnRlbmQvc3JjL2FwcC93YWl0ZXIvd2FpdGVyLW9yZGVyLW1vZGFsL3dhaXRlci1vcmRlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBR1o7O0VBRUUsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2FpdGVyL3dhaXRlci1vcmRlci1tb2RhbC93YWl0ZXItb3JkZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtYWNjb3JkaW9uIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG5idXR0b24uY29udHJvbC1idXR0b24ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBtaW4td2lkdGg6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0sXG4ubnVtYmVyLWZvcm0tZmllbGQge1xuICB3aWR0aDogNHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/waiter/waiter-order-modal/waiter-order-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/waiter/waiter-order-modal/waiter-order-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: WaiterOrderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiterOrderModalComponent", function() { return WaiterOrderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/table */ "./src/app/_models/table.ts");
/* harmony import */ var _helpers_table_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/table-helper */ "./src/app/_helpers/table-helper.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/item.service */ "./src/app/_services/item.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var WaiterOrderModalComponent = /** @class */ (function () {
    function WaiterOrderModalComponent(dialogRef, itemService, orderService, data) {
        this.dialogRef = dialogRef;
        this.itemService = itemService;
        this.orderService = orderService;
        this.data = data;
        this.numberOfCovers = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]);
        this.getOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_5__["getOrders"];
        this.showAccordion = false;
        this.foodAutocomplete = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.beverageAutocomplete = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.foodOptions = [];
        this.beverageOptions = [];
        this.newItemQuantity = undefined;
        this.foodOrdersModified = false;
        this.beverageOrdersModified = false;
    }
    WaiterOrderModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table = this.data;
        console.log(this.data);
        this.initAutocompleteStuffs();
        // this timeout is a workaround to make accordion works into tab
        setTimeout(function () {
            _this.showAccordion = true;
        }, 1);
    };
    WaiterOrderModalComponent.prototype.initAutocompleteStuffs = function () {
        var _this = this;
        this.itemService.getAll('food').subscribe(function (data) {
            _this.foodOptions = data.items;
        }, function (err) { console.error(err); }, function () { console.log('done food options'); });
        this.filteredFoodOptions = this.foodAutocomplete.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (name) { return name ? _this._filter(name, _this.foodOptions) : _this.foodOptions.slice(); }));
        this.itemService.getAll('beverage').subscribe(function (data) {
            _this.beverageOptions = data.items;
        }, function (err) { console.error(err); }, function () { console.log('done beverage options'); });
        this.filteredBeverageOptions = this.beverageAutocomplete.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (name) { return name ? _this._filter(name, _this.beverageOptions) : _this.beverageOptions.slice(); }));
    };
    WaiterOrderModalComponent.prototype._filter = function (name, options) {
        var filterValue = name.toLowerCase();
        return options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    WaiterOrderModalComponent.prototype.displayFn = function (item) {
        return item ? item.name : undefined;
    };
    WaiterOrderModalComponent.prototype.closeClick = function () {
        this.dialogRef.close({
            status: 'updated',
            foodOrdersModified: this.foodOrdersModified,
            beverageOrdersModified: this.beverageOrdersModified
        });
    };
    WaiterOrderModalComponent.prototype.addOrder = function (orderType) {
        var _this = this;
        this.orderService.createEmpty(orderType, this.table.number).subscribe(function (data) {
            _this.table = data.table;
        }, function (err) { console.error(err); }, function () {
            console.log('order created', _this.table);
            _this.setOrderModified(orderType);
        });
    };
    WaiterOrderModalComponent.prototype.deleteOrder = function (order) {
        var _this = this;
        this.orderService.delete(order._id, this.table.number).subscribe(function (data) {
            _this.table = data.table;
        }, function (err) { console.error(err); }, function () {
            console.log('order deleted');
            _this.setOrderModified(order.type);
        });
    };
    WaiterOrderModalComponent.prototype.addItemHandler = function (item, order) {
        this.addItemToOrder(item, order, this.newItemQuantity);
    };
    WaiterOrderModalComponent.prototype.addItemToOrder = function (item, order, quantity) {
        var _this = this;
        this.itemService.addToOrder(item, order, quantity, this.table.number).subscribe(function (result) {
            _this.table = result.table;
        }, function (err) {
            console.error(err);
        }, function () {
            _this.foodAutocomplete.setValue('');
            _this.beverageAutocomplete.setValue('');
            _this.newItemQuantity = undefined;
            _this.setOrderModified(order.type);
        });
    };
    WaiterOrderModalComponent.prototype.removeItemFromOrder = function (item, order) {
        var _this = this;
        this.itemService.removeFromOrder(item, order, this.table.number).subscribe(function (result) {
            _this.table = result.table;
        }, function (err) {
            console.error(err);
        }, function () {
            console.log('Item removed');
            _this.setOrderModified(order.type);
        });
    };
    WaiterOrderModalComponent.prototype.setOrderModified = function (orderType) {
        if (orderType === 'food') {
            this.foodOrdersModified = true;
        }
        else {
            this.beverageOrdersModified = true;
        }
    };
    WaiterOrderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waiter-order-modal',
            template: __webpack_require__(/*! ./waiter-order-modal.component.html */ "./src/app/waiter/waiter-order-modal/waiter-order-modal.component.html"),
            styles: [__webpack_require__(/*! ./waiter-order-modal.component.scss */ "./src/app/waiter/waiter-order-modal/waiter-order-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_services_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"],
            src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"],
            src_app_models_table__WEBPACK_IMPORTED_MODULE_4__["Table"]])
    ], WaiterOrderModalComponent);
    return WaiterOrderModalComponent;
}());



/***/ }),

/***/ "./src/app/waiter/waiter-status-modal/waiter-status-modal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/waiter/waiter-status-modal/waiter-status-modal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n  <h1 mat-dialog-title class=\"text-primary mb-3\"><i class=\"fas fa-edit mr-2\"></i> Mark as busy</h1>\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Number of covers</mat-label>\n      <input matInput type=\"number\" [formControl]=\"numberOfCovers\">\n      <mat-icon matSuffix fontSet=\"fas\" fontIcon=\"fa-database\" class=\"mx-2 text-small\"></mat-icon>\n      <mat-hint>Number of people sitting a this table</mat-hint>\n      <mat-error *ngIf=\"numberOfCovers.invalid\">{{getCoversErrorMessage()}}</mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"w-100 my-0 d-flex\">\n    <button mat-flat-button class=\"flex-fill py-2 mr-2\" color=\"accent\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-flat-button class=\"flex-fill py-2\" color=\"primary\" (click)=\"markAsBusy()\" cdkFocusInitial>Ok</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/waiter/waiter-status-modal/waiter-status-modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/waiter/waiter-status-modal/waiter-status-modal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhaXRlci93YWl0ZXItc3RhdHVzLW1vZGFsL3dhaXRlci1zdGF0dXMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/waiter/waiter-status-modal/waiter-status-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/waiter/waiter-status-modal/waiter-status-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WaiterStatusModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiterStatusModalComponent", function() { return WaiterStatusModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/table.service */ "./src/app/_services/table.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/table */ "./src/app/_models/table.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");







var WaiterStatusModalComponent = /** @class */ (function () {
    function WaiterStatusModalComponent(dialogRef, tableService, authService, data) {
        this.dialogRef = dialogRef;
        this.tableService = tableService;
        this.authService = authService;
        this.data = data;
        this.numberOfCovers = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]);
    }
    WaiterStatusModalComponent.prototype.ngOnInit = function () {
        this.table = this.data;
        console.log(this.table);
    };
    WaiterStatusModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    WaiterStatusModalComponent.prototype.getCoversErrorMessage = function () {
        return this.numberOfCovers.hasError('required') ? 'You must enter a value' :
            this.numberOfCovers.hasError('min') ? 'Number of seats must be at least 1' :
                '';
    };
    WaiterStatusModalComponent.prototype.markAsBusy = function () {
        var _this = this;
        var covers = this.numberOfCovers.value;
        var newService = new src_app_models_table__WEBPACK_IMPORTED_MODULE_5__["Service"]();
        newService.covers = covers;
        newService.waiter = this.authService.getUserInfo()._id;
        console.log(this.authService.getUserInfo()._id);
        newService.done = false;
        newService.orders = [];
        this.table.services.push(newService);
        this.table.busy = true;
        this.tableService.updateTable(this.table).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.error(err);
        }, function () {
            _this.dialogRef.close({ status: 'updated', tableNumber: _this.table.number });
        });
    };
    WaiterStatusModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waiter-status-modal',
            template: __webpack_require__(/*! ./waiter-status-modal.component.html */ "./src/app/waiter/waiter-status-modal/waiter-status-modal.component.html"),
            styles: [__webpack_require__(/*! ./waiter-status-modal.component.scss */ "./src/app/waiter/waiter-status-modal/waiter-status-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_services_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_models_table__WEBPACK_IMPORTED_MODULE_5__["Table"]])
    ], WaiterStatusModalComponent);
    return WaiterStatusModalComponent;
}());



/***/ }),

/***/ "./src/app/waiter/waiter-table-card/waiter-table-card.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/waiter/waiter-table-card/waiter-table-card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"m-3\" style=\"width: 18rem;\">\n  <div class=\"w-100 mb-3\" [class.busy]=\"table.busy\" [class.free]=\"!table.busy\"></div>\n  <mat-card-header>\n    <mat-card-title>Table n° {{table.number}}</mat-card-title>\n    <mat-card-subtitle class=\"d-flex justify-content-around\">\n      <div class=\"flex-fill\">\n        <i class=\"fas fa-users mr-2\"></i>{{activeService(table).covers}}/{{table.seats}}\n      </div>\n      <div class=\"flex-fill\">\n        <i class=\"fas fa-concierge-bell mx-2\"></i>{{processedFoodOrders(table).length}}/{{foodOrders(table).length}}\n      </div>\n      <div class=\"flex-fill\">\n        <i class=\"fas fa-beer mx-2\"></i>{{processedBeverageOrders(table).length}}/{{beverageOrders(table).length}}\n      </div>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-chip-list aria-label=\"Fish selection\">\n      <mat-chip color=\"warn\" selected *ngIf=\"activeService(table).waiter && user.username == activeService(table).waiter.username\">\n        Served by you\n      </mat-chip>\n      <mat-chip color=\"primary\" selected *ngIf=\"activeService(table).waiter && user.username != activeService(table).waiter.username\">\n        Served by {{activeService(table).waiter.username}}\n      </mat-chip>\n      <mat-chip color=\"accent\" selected *ngIf=\"!activeService(table).waiter\">\n        Served by none\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n  <mat-card-actions class=\"d-flex w-100 m-0\">\n    <button mat-flat-button \n      *ngIf=\"!table.busy\"\n      color=\"accent\" \n      [disabled]=\"table.busy\" \n      (click)=\"openStatusHandler()\" \n      class=\"py-2 mr-2 flex-fill h-100\"\n    >\n      <i class=\"fas fa-ban mr-2\"></i>{{table.busy ? \"occupied\" : \"occupy\"}}\n    </button>\n    <button mat-flat-button \n      *ngIf=\"table.busy\"\n      color=\"primary\" \n      [disabled]=\"!table.busy\" \n      (click)=\"openOrderHandler()\" \n      class=\"py-2 flex-fill h-100\"\n    > <i class=\"fas fa-plus mr-2\"></i>order\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/waiter/waiter-table-card/waiter-table-card.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/waiter/waiter-table-card/waiter-table-card.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhaXRlci93YWl0ZXItdGFibGUtY2FyZC93YWl0ZXItdGFibGUtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/waiter/waiter-table-card/waiter-table-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/waiter/waiter-table-card/waiter-table-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: WaiterTableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiterTableCardComponent", function() { return WaiterTableCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/table */ "./src/app/_models/table.ts");
/* harmony import */ var _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/table-helper */ "./src/app/_helpers/table-helper.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");





var WaiterTableCardComponent = /** @class */ (function () {
    function WaiterTableCardComponent(AuthService) {
        this.AuthService = AuthService;
        this.openStatusModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openOrderModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeService = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["activeService"];
        this.foodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["foodOrders"];
        this.beverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["beverageOrders"];
        this.processedFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["processedFoodOrders"];
        this.processedBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["processedBeverageOrders"];
        this.pendingFoodOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["pendingFoodOrders"];
        this.pendingBeverageOrders = _helpers_table_helper__WEBPACK_IMPORTED_MODULE_3__["pendingBeverageOrders"];
    }
    WaiterTableCardComponent.prototype.ngOnInit = function () {
        this.user = this.AuthService.getUserInfo();
    };
    WaiterTableCardComponent.prototype.openStatusHandler = function () {
        this.openStatusModal.emit();
    };
    WaiterTableCardComponent.prototype.openOrderHandler = function () {
        this.openOrderModal.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('table'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["Table"])
    ], WaiterTableCardComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WaiterTableCardComponent.prototype, "openStatusModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WaiterTableCardComponent.prototype, "openOrderModal", void 0);
    WaiterTableCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waiter-table-card',
            template: __webpack_require__(/*! ./waiter-table-card.component.html */ "./src/app/waiter/waiter-table-card/waiter-table-card.component.html"),
            styles: [__webpack_require__(/*! ./waiter-table-card.component.scss */ "./src/app/waiter/waiter-table-card/waiter-table-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], WaiterTableCardComponent);
    return WaiterTableCardComponent;
}());



/***/ }),

/***/ "./src/app/waiter/waiter.component.html":
/*!**********************************************!*\
  !*** ./src/app/waiter/waiter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-wrap justify-content-begin\">\n  <app-waiter-table-card \n    *ngFor=\"let table of tables\"\n    [table]=\"table\"\n    (openStatusModal)=\"openStatusModal(table)\"\n    (openOrderModal)=\"openOrderModal(table)\"\n  ></app-waiter-table-card>\n</div>\n"

/***/ }),

/***/ "./src/app/waiter/waiter.component.scss":
/*!**********************************************!*\
  !*** ./src/app/waiter/waiter.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhaXRlci93YWl0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/waiter/waiter.component.ts":
/*!********************************************!*\
  !*** ./src/app/waiter/waiter.component.ts ***!
  \********************************************/
/*! exports provided: WaiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiterComponent", function() { return WaiterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/table.service */ "./src/app/_services/table.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _waiter_status_modal_waiter_status_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waiter-status-modal/waiter-status-modal.component */ "./src/app/waiter/waiter-status-modal/waiter-status-modal.component.ts");
/* harmony import */ var _waiter_order_modal_waiter_order_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waiter-order-modal/waiter-order-modal.component */ "./src/app/waiter/waiter-order-modal/waiter-order-modal.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/socket-helper */ "./src/app/_helpers/socket-helper.ts");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/socketio.service */ "./src/app/_services/socketio.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var _services_notice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/notice.service */ "./src/app/_services/notice.service.ts");
/* harmony import */ var _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_helpers/notice-helper */ "./src/app/_helpers/notice-helper.ts");












var WaiterComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function WaiterComponent(tableService, noticeService, dialog, SnackBar, SocketService) {
        this.tableService = tableService;
        this.noticeService = noticeService;
        this.dialog = dialog;
        this.SnackBar = SnackBar;
        this.SocketService = SocketService;
    }
    WaiterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTables();
        _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__["default"].registerEvent('updateTables', function () {
            _this.getTables();
        });
        _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__["default"].registerEvent('orderProcessed', function () {
            _this.getNotice();
            _this.getTables();
        });
        _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__["default"].registerEvent('tableSetFree', function () {
            _this.getNotice();
            _this.getTables();
        });
    };
    WaiterComponent.prototype.openSnackBar = function (message) {
        this.noticeSnackbar = this.SnackBar.open(message, 'Dismiss', {
            duration: 3000
        });
    };
    WaiterComponent.prototype.getNotice = function () {
        var _this = this;
        this.noticeService.get(1).subscribe(function (data) {
            if (data.notices[0]) {
                _this.openSnackBar(data.notices[0].from.username.toUpperCase() + ": " + data.notices[0].message);
                _helpers_notice_helper__WEBPACK_IMPORTED_MODULE_11__["default"].pushToNotices(data.notices[0]);
            }
        }, function (err) { return console.error(err); }, function () { });
    };
    WaiterComponent.prototype.getTables = function () {
        var _this = this;
        var tableObs = this.tableService.getAll();
        tableObs.subscribe(function (data) {
            _this.tables = data.tables;
        });
    };
    WaiterComponent.prototype.openStatusModal = function (table) {
        var _this = this;
        var dialogRef = this.dialog.open(_waiter_status_modal_waiter_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["WaiterStatusModalComponent"], {
            data: table
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.status === 'updated') {
                _this.getTables();
            }
        });
    };
    WaiterComponent.prototype.openOrderModal = function (table) {
        var _this = this;
        var dialogRef = this.dialog.open(_waiter_order_modal_waiter_order_modal_component__WEBPACK_IMPORTED_MODULE_5__["WaiterOrderModalComponent"], {
            data: table
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.foodOrdersModified) {
                _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__["default"].emitEvent(_this.SocketService, 'orderAddedOrUpdated', null, _models_user__WEBPACK_IMPORTED_MODULE_9__["Roles"].Cook, "There are new food orders to prepare for table number " + table.number + ".");
            }
            if (result.beverageOrdersModified) {
                _helpers_socket_helper__WEBPACK_IMPORTED_MODULE_7__["default"].emitEvent(_this.SocketService, 'orderAddedOrUpdated', null, _models_user__WEBPACK_IMPORTED_MODULE_9__["Roles"].Bartender, "There are new beverage orders to prepare for table number " + table.number + ".");
            }
            if (result && result.status === 'updated') {
                _this.getTables();
            }
        });
    };
    WaiterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waiter',
            template: __webpack_require__(/*! ./waiter.component.html */ "./src/app/waiter/waiter.component.html"),
            styles: [__webpack_require__(/*! ./waiter.component.scss */ "./src/app/waiter/waiter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"],
            _services_notice_service__WEBPACK_IMPORTED_MODULE_10__["NoticeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"]])
    ], WaiterComponent);
    return WaiterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: "http://localhost:8080/api/v1"
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });
var onDeviceReady = function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
};
document.addEventListener('deviceready', onDeviceReady, false);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stefanosello/Documents/scuola/easy-restaurant/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map