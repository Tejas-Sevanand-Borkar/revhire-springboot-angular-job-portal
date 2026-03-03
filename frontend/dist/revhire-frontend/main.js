"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 4978);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 841)).then(m => m.AuthModule)
}, {
  path: 'seeker',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_application_service_ts-src_app_core_services_job_service_ts-nod-9d1401"), __webpack_require__.e("src_app_seeker_seeker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./seeker/seeker.module */ 5671)).then(m => m.SeekerModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    roles: ['SEEKER']
  }
}, {
  path: 'employer',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_application_service_ts-src_app_core_services_job_service_ts-nod-9d1401"), __webpack_require__.e("src_app_employer_employer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employer/employer.module */ 8919)).then(m => m.EmployerModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    roles: ['EMPLOYER']
  }
}, {
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/auth/login'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ 3083);



class AppComponent {
  constructor() {
    this.title = 'RevHire';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNBLGdVQUFnVSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 8423);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);









class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 8423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 8010);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 3622);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 4978);
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/role.guard */ 400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









class CoreModule {
  static {
    this.AuthInterceptor = _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptor;
  }
  static {
    this.ɵfac = function CoreModule_Factory(t) {
      return new (t || CoreModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService, _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptor, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule]
  });
})();

/***/ }),

/***/ 4978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 400:
/*!*******************************************!*\
  !*** ./src/app/core/guards/role.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleGuard: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class RoleGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    const requiredRoles = route.data['roles'];
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    if (this.authService.hasRole(requiredRoles)) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
  static {
    this.ɵfac = function RoleGuard_Factory(t) {
      return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RoleGuard,
      factory: RoleGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3622:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);


class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const token = this.authService.getToken();
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);





class AuthService {
  constructor(http, router, snackBar) {
    this.http = http;
    this.router = router;
    this.snackBar = snackBar;
    this.API_URL = 'http://localhost:8080/api/auth';
    this.TOKEN_KEY = 'revhire_token';
    this.USER_KEY = 'revhire_user';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.loadUserFromStorage();
  }
  loadUserFromStorage() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const userStr = localStorage.getItem(this.USER_KEY);
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUserSubject.next(user);
      } catch (error) {
        this.logout();
      }
    }
  }
  login(credentials) {
    console.log('Making login request to:', `${this.API_URL}/login`);
    console.log('Request payload:', credentials);
    return this.http.post(`${this.API_URL}/login`, credentials).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      console.log('Login response mapped:', response);
      this.setSession(response);
      this.snackBar.open('Login successful!', 'Close', {
        duration: 3000
      });
      return response;
    }));
  }
  register(userData) {
    return this.http.post(`${this.API_URL}/register`, userData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      this.setSession(response);
      this.snackBar.open('Registration successful!', 'Close', {
        duration: 3000
      });
    }));
  }
  setSession(authResponse) {
    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResponse));
    this.currentUserSubject.next(authResponse);
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
    this.snackBar.open('Logged out successfully', 'Close', {
      duration: 3000
    });
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  isLoggedIn() {
    return !!this.getToken() && !!this.currentUserSubject.value;
  }
  getUserRole() {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }
  isEmployer() {
    return this.getUserRole() === 'EMPLOYER';
  }
  isSeeker() {
    return this.getUserRole() === 'SEEKER';
  }
  hasRole(requiredRoles) {
    const userRole = this.getUserRole();
    return userRole ? requiredRoles.includes(userRole) : false;
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5567:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class NotificationService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/notifications';
    this.unreadCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    this.unreadCount$ = this.unreadCountSubject.asObservable();
  }
  getUserNotifications(userId) {
    return this.http.get(`${this.API_URL}/user/${userId}`);
  }
  getUnreadNotifications(userId) {
    return this.http.get(`${this.API_URL}/user/${userId}/unread`);
  }
  markNotificationAsRead(notificationId) {
    return this.http.patch(`${this.API_URL}/${notificationId}/read`, {});
  }
  markAllNotificationsAsRead(userId) {
    return this.http.patch(`${this.API_URL}/user/${userId}/read-all`, {});
  }
  deleteNotification(notificationId) {
    return this.http.delete(`${this.API_URL}/${notificationId}`);
  }
  getUnreadCount() {
    return this.http.get(`${this.API_URL}/unread-count`);
  }
  updateUnreadCount(count) {
    this.unreadCountSubject.next(count);
  }
  createNotification(notification) {
    return this.http.post(`${this.API_URL}`, notification);
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);





function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading... Redirecting to dashboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class HomeComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.isLoading = true;
  }
  ngOnInit() {
    console.log('HomeComponent initialized');
    console.log('User logged in:', this.authService.isLoggedIn());
    console.log('User role:', this.authService.getUserRole());
    console.log('Is employer:', this.authService.isEmployer());
    console.log('Is seeker:', this.authService.isSeeker());
    this.redirectBasedOnRole();
  }
  redirectBasedOnRole() {
    console.log('Starting role-based redirection');
    if (this.authService.isEmployer()) {
      console.log('Redirecting to employer dashboard');
      this.router.navigate(['/employer/dashboard']);
    } else if (this.authService.isSeeker()) {
      console.log('Redirecting to seeker dashboard');
      this.router.navigate(['/seeker/dashboard']);
    } else {
      console.log('User not authenticated, redirecting to login');
      this.router.navigate(['/auth/login']);
    }
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 1,
      vars: 1,
      consts: [["class", "loading-container", 4, "ngIf"], [1, "loading-container"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 4, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner],
      styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  flex-direction: column;\n  gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQU4iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUFOO0FBQ0EsZ2pCQUFnakIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3083:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _notification_bell_notification_bell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification-bell/notification-bell.component */ 9565);











function NavbarComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NavbarComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Find Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "My Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "My Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_div_9_ng_container_1_Template, 7, 0, "ng-container", 13)(2, NavbarComponent_div_9_ng_container_2_Template, 7, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isSeeker);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isEmployer);
  }
}
function NavbarComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-notification-bell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 21)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-menu", 22, 0)(7, "button", 23)(8, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 23)(13, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 23)(19, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.navigateToDashboard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const userMenu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", userMenu_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.currentUser.firstName, " ", ctx_r1.currentUser.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentUser.role);
  }
}
function NavbarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NavbarComponent_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_12_ng_container_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Find Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_12_ng_container_2_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "My Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_12_ng_container_2_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_div_12_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_12_ng_container_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_12_ng_container_3_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "My Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_12_ng_container_3_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavbarComponent_div_12_ng_container_2_Template, 16, 0, "ng-container", 13)(3, NavbarComponent_div_12_ng_container_3_Template, 16, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isSeeker);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isEmployer);
  }
}
class NavbarComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.currentUser = null;
    this.isMenuOpen = false;
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  logout() {
    this.authService.logout();
  }
  navigateToDashboard() {
    if (this.authService.isEmployer()) {
      this.router.navigate(['/employer/dashboard']);
    } else if (this.authService.isSeeker()) {
      this.router.navigate(['/seeker/dashboard']);
    }
  }
  get isEmployer() {
    return this.authService.isEmployer();
  }
  get isSeeker() {
    return this.authService.isSeeker();
  }
  isMobileView() {
    return window.innerWidth <= 768;
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 13,
      vars: 5,
      consts: [["userMenu", "matMenu"], ["color", "primary", 1, "navbar"], ["mat-icon-button", "", "class", "menu-button", 3, "click", 4, "ngIf"], ["routerLink", "/", 1, "brand-logo", 3, "click"], [1, "brand-icon"], [1, "brand-text"], [1, "spacer"], ["class", "nav-links", 4, "ngIf"], ["class", "user-menu", 4, "ngIf"], ["class", "auth-links", 4, "ngIf"], ["class", "mobile-menu", 4, "ngIf"], ["mat-icon-button", "", 1, "menu-button", 3, "click"], [1, "nav-links"], [4, "ngIf"], ["mat-button", "", "routerLink", "/seeker/jobs", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/seeker/applications", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/seeker/profile", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/employer/dashboard", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/employer/jobs", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/employer/applications", "routerLinkActive", "active"], [1, "user-menu"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["mat-menu-item", "", "disabled", ""], [1, "menu-icon"], ["mat-menu-item", "", 3, "click"], [1, "auth-links"], ["mat-button", "", "routerLink", "/auth/login"], ["mat-raised-button", "", "routerLink", "/auth/register"], [1, "mobile-menu"], ["mat-list-item", "", "routerLink", "/seeker/jobs", 3, "click"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["mat-list-item", "", "routerLink", "/seeker/applications", 3, "click"], ["mat-list-item", "", "routerLink", "/seeker/profile", 3, "click"], ["mat-list-item", "", "routerLink", "/employer/dashboard", 3, "click"], ["mat-list-item", "", "routerLink", "/employer/jobs", 3, "click"], ["mat-list-item", "", "routerLink", "/employer/applications", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 1)(1, "mat-toolbar-row");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavbarComponent_button_2_Template, 3, 0, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_3_listener() {
            return ctx.navigateToDashboard();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "work");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "RevHire");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavbarComponent_div_9_Template, 3, 2, "div", 7)(10, NavbarComponent_div_10_Template, 34, 5, "div", 8)(11, NavbarComponent_div_11_Template, 5, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NavbarComponent_div_12_Template, 4, 2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobileView());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser && !ctx.isMobileView());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMenuOpen && ctx.isMobileView());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItemTitle, _notification_bell_notification_bell_component__WEBPACK_IMPORTED_MODULE_1__.NotificationBellComponent],
      styles: [".navbar[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  font-size: 1.2rem;\n  margin-right: 1rem;\n}\n.navbar[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  font-size: 1.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.navbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.navbar[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-right: 1rem;\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.navbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .auth-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 64px;\n  left: 0;\n  right: 0;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  border-bottom: 1px solid #e0e0e0;\n}\n.navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  border-bottom: 1px solid #f0f0f0;\n}\n.navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #666;\n}\n.navbar[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  color: #666;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .auth-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 769px) {\n  .navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFHSTtFQUNFLGdCQUFBO0FBRE47QUFLRTtFQUNFLGNBQUE7QUFISjtBQU1FO0VBQ0Usb0JBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBTE47QUFPTTtFQUNFLDBDQUFBO0FBTFI7QUFRTTtFQUNFLDBDQUFBO0FBTlI7QUFXRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFYSjtBQWFJO0VBQ0UsVUFBQTtBQVhOO0FBYU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQVhSO0FBYVE7RUFDRSx5QkFBQTtBQVhWO0FBY1E7RUFDRSxtQkFBQTtBQVpWO0FBZVE7RUFDRSxXQUFBO0FBYlY7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFqQko7O0FBc0JBO0VBRUk7SUFDRSxhQUFBO0VBcEJKO0VBdUJFO0lBQ0UsYUFBQTtFQXJCSjtBQUNGO0FBMEJBO0VBRUk7SUFDRSxhQUFBO0VBekJKO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIC5icmFuZC1sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcblxuICAgIC5icmFuZC1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgLmJyYW5kLXRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICAubmF2LWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC51c2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxuXG4gIC5hdXRoLWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC41cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubW9iaWxlLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY0cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gICAgbWF0LW5hdi1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1lbnUtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG59XG5cbi8vIE1vYmlsZSByZXNwb25zaXZlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgLm5hdi1saW5rcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5hdXRoLWxpbmtzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIERlc2t0b3AgcmVzcG9uc2l2ZVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5uYXZiYXIge1xuICAgIC5tb2JpbGUtbWVudSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFHSTtFQUNFLGdCQUFBO0FBRE47QUFLRTtFQUNFLGNBQUE7QUFISjtBQU1FO0VBQ0Usb0JBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBTE47QUFPTTtFQUNFLDBDQUFBO0FBTFI7QUFRTTtFQUNFLDBDQUFBO0FBTlI7QUFXRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFYSjtBQWFJO0VBQ0UsVUFBQTtBQVhOO0FBYU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQVhSO0FBYVE7RUFDRSx5QkFBQTtBQVhWO0FBY1E7RUFDRSxtQkFBQTtBQVpWO0FBZVE7RUFDRSxXQUFBO0FBYlY7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFqQko7O0FBc0JBO0VBRUk7SUFDRSxhQUFBO0VBcEJKO0VBdUJFO0lBQ0UsYUFBQTtFQXJCSjtBQUNGO0FBMEJBO0VBRUk7SUFDRSxhQUFBO0VBekJKO0FBQ0Y7QUFDQSxvdEhBQW90SCIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAuYnJhbmQtbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG5cbiAgICAuYnJhbmQtaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIC5icmFuZC10ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAubWVudS1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgLm5hdi1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cblxuICAuYXV0aC1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLm1vYmlsZS1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcblxuICAgIG1hdC1uYXYtbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tZW51LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxufVxuXG4vLyBNb2JpbGUgcmVzcG9uc2l2ZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIC5uYXYtbGlua3Mge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuYXV0aC1saW5rcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBEZXNrdG9wIHJlc3BvbnNpdmVcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAubmF2YmFyIHtcbiAgICAubW9iaWxlLW1lbnUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9565:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/notification-bell/notification-bell.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationBellComponent: () => (/* binding */ NotificationBellComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _notification_panel_notification_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-panel/notification-panel.component */ 2415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 640);











function NotificationBellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount > 99 ? "99+" : ctx_r0.unreadCount, " ");
  }
}
class NotificationBellComponent {
  constructor(notificationService, dialog, snackBar) {
    this.notificationService = notificationService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.unreadCount = 0;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.loadUnreadCount();
    this.notificationService.unreadCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(count => {
      this.unreadCount = count;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadUnreadCount() {
    console.log('Loading unread notification count...');
    this.notificationService.getUnreadCount().subscribe({
      next: response => {
        console.log('Unread count response:', response);
        this.unreadCount = response.count;
        this.notificationService.updateUnreadCount(response.count);
      },
      error: error => {
        console.error('Error loading unread count:', error);
      }
    });
  }
  toggleNotifications() {
    const dialogRef = this.dialog.open(_notification_panel_notification_panel_component__WEBPACK_IMPORTED_MODULE_0__.NotificationPanelComponent, {
      position: {
        top: '60px',
        right: '20px'
      },
      panelClass: 'notification-panel',
      hasBackdrop: true,
      backdropClass: 'notification-backdrop'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadUnreadCount();
    });
  }
  showJobPostedNotification(jobTitle) {
    this.snackBar.open(`Job "${jobTitle}" posted successfully!`, 'View', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }).onAction().subscribe(() => {
      // Navigate to jobs page
      window.location.href = '/employer/jobs';
    });
  }
  static {
    this.ɵfac = function NotificationBellComponent_Factory(t) {
      return new (t || NotificationBellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NotificationBellComponent,
      selectors: [["app-notification-bell"]],
      decls: 4,
      vars: 1,
      consts: [["mat-icon-button", "", "matTooltip", "Notifications", 1, "notification-bell", 3, "click"], ["class", "notification-badge", 4, "ngIf"], [1, "notification-badge"]],
      template: function NotificationBellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationBellComponent_Template_button_click_0_listener() {
            return ctx.toggleNotifications();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NotificationBellComponent_span_3_Template, 2, 1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip],
      styles: [".notification-bell[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notification-bell[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: #f44336;\n  color: white;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n  min-width: 20px;\n  padding: 2px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1iZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJub3RpZmljYXRpb24tYmVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24tYmVsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgcmlnaHQ6IC04cHg7XG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWJlbGwvbm90aWZpY2F0aW9uLWJlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0EsNGtDQUE0a0MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWJlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAtOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2415:
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/notification-bell/notification-panel/notification-panel.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPanelComponent: () => (/* binding */ NotificationPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/notification.service */ 5567);



















function NotificationPanelComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "notifications_none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NotificationPanelComponent_div_14_mat_list_2_mat_list_item_1_mat_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationPanelComponent_div_14_mat_list_2_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationPanelComponent_div_14_mat_list_2_mat_list_item_1_Template_mat_list_item_click_0_listener() {
      const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.handleNotificationClick(notification_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17)(2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NotificationPanelComponent_div_14_mat_list_2_mat_list_item_1_mat_chip_5_Template, 2, 0, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationPanelComponent_div_14_mat_list_2_mat_list_item_1_Template_button_click_10_listener($event) {
      const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.deleteNotification(notification_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("unread", !notification_r2.isRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.getNotificationIconClass(notification_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getNotificationIcon(notification_r2.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notification_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !notification_r2.isRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notification_r2.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.formatTime(notification_r2.createdAt), " ");
  }
}
function NotificationPanelComponent_div_14_mat_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotificationPanelComponent_div_14_mat_list_2_mat_list_item_1_Template, 13, 8, "mat-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.notifications);
  }
}
function NotificationPanelComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotificationPanelComponent_div_14_div_1_Template, 5, 0, "div", 10)(2, NotificationPanelComponent_div_14_mat_list_2_Template, 2, 1, "mat-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.notifications.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.notifications.length > 0);
  }
}
function NotificationPanelComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NotificationPanelComponent_div_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationPanelComponent_div_16_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.loadMoreNotifications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationPanelComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotificationPanelComponent_div_16_button_1_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.hasMore);
  }
}
class NotificationPanelComponent {
  constructor(dialogRef, notificationService, data) {
    this.dialogRef = dialogRef;
    this.notificationService = notificationService;
    this.data = data;
    this.notifications = [];
    this.isLoading = true;
    this.hasMore = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.loadNotifications();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadNotifications() {
    this.isLoading = true;
    // In a real app, you'd get the current user ID from auth service
    const userId = 1; // Placeholder
    this.notificationService.getUserNotifications(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: notifications => {
        this.notifications = notifications;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading notifications:', error);
        this.isLoading = false;
      }
    });
  }
  refreshNotifications() {
    this.loadNotifications();
  }
  markAllAsRead() {
    const userId = 1; // Placeholder
    this.notificationService.markAllNotificationsAsRead(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.notifications.forEach(notification => {
          notification.isRead = true;
        });
      },
      error: error => {
        console.error('Error marking all as read:', error);
      }
    });
  }
  handleNotificationClick(notification) {
    if (!notification.isRead) {
      this.markAsRead(notification.id);
    }
    // Handle navigation based on notification type
    this.handleNotificationNavigation(notification);
  }
  markAsRead(notificationId) {
    this.notificationService.markNotificationAsRead(notificationId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
          notification.isRead = true;
        }
      },
      error: error => {
        console.error('Error marking notification as read:', error);
      }
    });
  }
  deleteNotification(notification, event) {
    event.stopPropagation();
    this.notificationService.deleteNotification(notification.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
      },
      error: error => {
        console.error('Error deleting notification:', error);
      }
    });
  }
  handleNotificationNavigation(notification) {
    // Close panel first
    this.closePanel();
    // Navigate based on notification type
    switch (notification.type) {
      case 'NEW_JOB':
        if (notification.relatedJobId) {
          window.location.href = `/employer/jobs/${notification.relatedJobId}`;
        }
        break;
      case 'APPLICATION_STATUS':
        if (notification.relatedApplicationId) {
          window.location.href = `/employer/applications`;
        }
        break;
      case 'JOB_RECOMMENDATION':
        window.location.href = '/seeker/jobs';
        break;
      default:
        break;
    }
  }
  getNotificationIcon(type) {
    switch (type) {
      case 'NEW_JOB':
        return 'work';
      case 'APPLICATION_STATUS':
        return 'person';
      case 'JOB_RECOMMENDATION':
        return 'trending_up';
      case 'APPLICATION_DEADLINE':
        return 'schedule';
      case 'WELCOME':
        return 'waving_hand';
      case 'SYSTEM':
        return 'info';
      default:
        return 'notifications';
    }
  }
  getNotificationIconClass(type) {
    switch (type) {
      case 'NEW_JOB':
        return 'job';
      case 'APPLICATION_STATUS':
        return 'application';
      case 'WELCOME':
        return 'welcome';
      default:
        return 'system';
    }
  }
  formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  }
  loadMoreNotifications() {
    // Implement pagination if needed
    console.log('Load more notifications');
  }
  closePanel() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function NotificationPanelComponent_Factory(t) {
      return new (t || NotificationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotificationPanelComponent,
      selectors: [["app-notification-panel"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 3,
      consts: [[1, "notification-panel"], [1, "notification-header"], [1, "header-actions"], ["mat-icon-button", "", "matTooltip", "Mark all as read", 3, "click"], ["mat-icon-button", "", "matTooltip", "Refresh", 3, "click"], ["mat-icon-button", "", "matTooltip", "Close", 3, "click"], ["class", "notification-content", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "notification-footer", 4, "ngIf"], [1, "notification-content"], ["class", "empty-state", 4, "ngIf"], ["class", "notification-list", 4, "ngIf"], [1, "empty-state"], [1, "empty-icon"], [1, "notification-list"], [3, "unread", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["matListItemTitle", "", 1, "notification-title"], [1, "notification-icon", 3, "ngClass"], ["class", "unread-chip", "color", "primary", 4, "ngIf"], ["matListItemLine", "", 1, "notification-message"], ["matListItemLine", "", 1, "notification-time"], ["mat-icon-button", "", "matTooltip", "Delete", 1, "delete-btn", 3, "click"], ["color", "primary", 1, "unread-chip"], [1, "loading-state"], ["diameter", "30"], [1, "notification-footer"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]],
      template: function NotificationPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationPanelComponent_Template_button_click_5_listener() {
            return ctx.markAllAsRead();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "done_all");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationPanelComponent_Template_button_click_8_listener() {
            return ctx.refreshNotifications();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationPanelComponent_Template_button_click_11_listener() {
            return ctx.closePanel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NotificationPanelComponent_div_14_Template, 3, 2, "div", 6)(15, NotificationPanelComponent_div_15_Template, 4, 0, "div", 7)(16, NotificationPanelComponent_div_16_Template, 2, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItemTitle, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner],
      styles: [".notification-panel[_ngcontent-%COMP%] {\n  width: 400px;\n  max-height: 500px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n}\n\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #f8f9fa;\n}\n\n.notification-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.notification-content[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #666;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n\n.notification-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.notification-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 12px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background-color 0.2s;\n}\n\n.notification-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.notification-list[_ngcontent-%COMP%]   mat-list-item.unread[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 3px solid #2196f3;\n}\n\n.notification-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.notification-icon.job[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n\n.notification-icon.application[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n\n.notification-icon.system[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n\n.notification-icon.welcome[_ngcontent-%COMP%] {\n  color: #9c27b0;\n}\n\n.unread-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  height: 20px;\n}\n\n.notification-message[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  line-height: 1.4;\n  margin-bottom: 4px;\n}\n\n.notification-time[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 12px;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.notification-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  gap: 16px;\n}\n\n.notification-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid #e0e0e0;\n  text-align: center;\n}\n\n@media (max-width: 480px) {\n  .notification-panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    max-width: 100vw;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxVQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBQU47O0FBR0k7RUFDRSx5QkFBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFBTjs7QUFHSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFBTjs7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUFOOztBQUdJO0VBQ0UsVUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJub3RpZmljYXRpb24tcGFuZWwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWhlYWRlciBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuZW1wdHktc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgLmVtcHR5LWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IG1hdC1saXN0LWl0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IG1hdC1saXN0LWl0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWxpc3QgbWF0LWxpc3QtaXRlbS51bnJlYWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzIxOTZmMztcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWljb24uam9iIHtcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbi5hcHBsaWNhdGlvbiB7XG4gICAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWljb24uc3lzdGVtIHtcbiAgICAgIGNvbG9yOiAjMjE5NmYzO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbi53ZWxjb21lIHtcbiAgICAgIGNvbG9yOiAjOWMyN2IwO1xuICAgIH1cblxuICAgIC51bnJlYWQtY2hpcCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLXRpbWUge1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmRlbGV0ZS1idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IG1hdC1saXN0LWl0ZW06aG92ZXIgLmRlbGV0ZS1idG4ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAubG9hZGluZy1zdGF0ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG4gICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWJlbGwvbm90aWZpY2F0aW9uLXBhbmVsL25vdGlmaWNhdGlvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxVQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBQU47O0FBR0k7RUFDRSx5QkFBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFBTjs7QUFHSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFBTjs7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUFOOztBQUdJO0VBQ0UsVUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBQU47QUFDRjtBQUNBLHc1S0FBdzVLIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWhlYWRlciBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuZW1wdHktc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgLmVtcHR5LWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IG1hdC1saXN0LWl0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IG1hdC1saXN0LWl0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWxpc3QgbWF0LWxpc3QtaXRlbS51bnJlYWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzIxOTZmMztcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWljb24uam9iIHtcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbi5hcHBsaWNhdGlvbiB7XG4gICAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWljb24uc3lzdGVtIHtcbiAgICAgIGNvbG9yOiAjMjE5NmYzO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbi53ZWxjb21lIHtcbiAgICAgIGNvbG9yOiAjOWMyN2IwO1xuICAgIH1cblxuICAgIC51bnJlYWQtY2hpcCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLXRpbWUge1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmRlbGV0ZS1idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IG1hdC1saXN0LWl0ZW06aG92ZXIgLmRlbGV0ZS1idG4ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAubG9hZGluZy1zdGF0ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgLm5vdGlmaWNhdGlvbi1wYW5lbCB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3787:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/status-badge/status-badge.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBadgeComponent: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


class StatusBadgeComponent {
  constructor() {
    this.status = 'APPLIED';
  }
  getStatusClass() {
    return `status-${this.status.toLowerCase()}`;
  }
  getStatusText() {
    return this.status.replace('_', ' ');
  }
  static {
    this.ɵfac = function StatusBadgeComponent_Factory(t) {
      return new (t || StatusBadgeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatusBadgeComponent,
      selectors: [["app-status-badge"]],
      inputs: {
        status: "status"
      },
      decls: 2,
      vars: 2,
      consts: [[1, "status-badge", 3, "ngClass"]],
      template: function StatusBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getStatusClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getStatusText(), "\n");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: [".status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n}\n.status-badge.status-applied[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.status-badge.status-shortlisted[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #f57c00;\n}\n.status-badge.status-interview_scheduled[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.status-badge.status-hired[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #388e3c;\n}\n.status-badge.status-rejected[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #d32f2f;\n}\n.status-badge.status-withdrawn[_ngcontent-%COMP%] {\n  background: #fafafa;\n  color: #757575;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1iYWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFKSiIsImZpbGUiOiJzdGF0dXMtYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICYuc3RhdHVzLWFwcGxpZWQge1xuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gIH1cblxuICAmLnN0YXR1cy1zaG9ydGxpc3RlZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjNlMDtcbiAgICBjb2xvcjogI2Y1N2MwMDtcbiAgfVxuXG4gICYuc3RhdHVzLWludGVydmlld19zY2hlZHVsZWQge1xuICAgIGJhY2tncm91bmQ6ICNmM2U1ZjU7XG4gICAgY29sb3I6ICM3YjFmYTI7XG4gIH1cblxuICAmLnN0YXR1cy1oaXJlZCB7XG4gICAgYmFja2dyb3VuZDogI2U4ZjVlODtcbiAgICBjb2xvcjogIzM4OGUzYztcbiAgfVxuXG4gICYuc3RhdHVzLXJlamVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZlYmVlO1xuICAgIGNvbG9yOiAjZDMyZjJmO1xuICB9XG5cbiAgJi5zdGF0dXMtd2l0aGRyYXduIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHVzLWJhZGdlL3N0YXR1cy1iYWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFKSjtBQUNBLHc4Q0FBdzhDIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1iYWRnZSB7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmLnN0YXR1cy1hcHBsaWVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICB9XG5cbiAgJi5zdGF0dXMtc2hvcnRsaXN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICNmZmYzZTA7XG4gICAgY29sb3I6ICNmNTdjMDA7XG4gIH1cblxuICAmLnN0YXR1cy1pbnRlcnZpZXdfc2NoZWR1bGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNlNWY1O1xuICAgIGNvbG9yOiAjN2IxZmEyO1xuICB9XG5cbiAgJi5zdGF0dXMtaGlyZWQge1xuICAgIGJhY2tncm91bmQ6ICNlOGY1ZTg7XG4gICAgY29sb3I6ICMzODhlM2M7XG4gIH1cblxuICAmLnN0YXR1cy1yZWplY3RlZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZWJlZTtcbiAgICBjb2xvcjogI2QzMmYyZjtcbiAgfVxuXG4gICYuc3RhdHVzLXdpdGhkcmF3biB7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3083);
/* harmony import */ var _components_notification_bell_notification_bell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/notification-bell/notification-bell.component */ 9565);
/* harmony import */ var _components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/status-badge/status-badge.component */ 3787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






























class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadgeModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadgeModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_notification_bell_notification_bell_component__WEBPACK_IMPORTED_MODULE_1__.NotificationBellComponent, _components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadgeModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadgeModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_notification_bell_notification_bell_component__WEBPACK_IMPORTED_MODULE_1__.NotificationBellComponent, _components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map