"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["src_app_employer_employer_module_ts"],{

/***/ 156:
/*!***********************************************************!*\
  !*** ./src/app/employer/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployerDashboardComponent: () => (/* binding */ EmployerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/application.service */ 9018);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);












function EmployerDashboardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmployerDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "mat-card", 9)(2, "mat-card-content")(3, "div", 10)(4, "div", 11)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 12)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Total Jobs Posted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 13)(13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-card", 9)(18, "mat-card-content")(19, "div", 10)(20, "div", 16)(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12)(24, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Total Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 13)(29, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-card", 9)(34, "mat-card-content")(35, "div", 10)(36, "div", 19)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 12)(40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Avg Applications per Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13)(45, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-card", 9)(48, "mat-card-content")(49, "div", 10)(50, "div", 21)(51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 12)(54, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Shortlist Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 13)(59, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dashboardStats.totalJobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.activeJobs, " active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.inactiveJobs, " inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dashboardStats.totalApplications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.pendingApplications, " pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.shortlistedApplications, " shortlisted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getApplicationRate());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.newApplicationsThisWeek, " this week");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.getConversionRate(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.rejectedApplications, " rejected");
  }
}
function EmployerDashboardComponent_div_8_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-chip", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 45)(8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_div_9_div_1_Template_button_click_8_listener() {
      const job_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToJobDetails(job_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_div_9_div_1_Template_button_click_10_listener() {
      const job_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToApplicants(job_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 46)(13, "div", 47)(14, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 47)(19, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 47)(24, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r0.getJobStatusColor(job_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r4.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" View Applicants (", job_r4.applications, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.formatNumber(job_r4.views), " views");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", job_r4.applications, " applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.getJobConversionRate(job_r4), "% conversion");
  }
}
function EmployerDashboardComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EmployerDashboardComponent_div_8_div_9_div_1_Template, 28, 7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dashboardStats.popularJobs);
  }
}
function EmployerDashboardComponent_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "work_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No jobs posted yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_div_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToPostJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Post Your First Job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EmployerDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "mat-card")(3, "mat-card-header")(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Popular Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Your most viewed and applied jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EmployerDashboardComponent_div_8_div_9_Template, 2, 1, "div", 25)(10, EmployerDashboardComponent_div_8_div_10_Template, 7, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 24)(12, "mat-card")(13, "mat-card-header")(14, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Recent Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-card-content")(17, "div", 27)(18, "div", 28)(19, "div", 29)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 30)(23, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Review pending applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToApplications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 28)(30, "div", 34)(31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 30)(34, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Manage your job postings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToJobs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 28)(41, "div", 35)(42, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 30)(45, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Take action on pending applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToApplications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 24)(52, "mat-card")(53, "mat-card-header")(54, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Quick Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-card-content")(57, "div", 36)(58, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToPostJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Post New Job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToApplications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Review Applications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerDashboardComponent_div_8_Template_button_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToJobs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Manage Jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dashboardStats.popularJobs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dashboardStats.popularJobs.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.newApplicationsThisWeek, " new applications this week");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.activeJobs, " jobs currently active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.pendingApplications, " applications pending review");
  }
}
class EmployerDashboardComponent {
  constructor(router, authService, jobService, applicationService, snackBar) {
    this.router = router;
    this.authService = authService;
    this.jobService = jobService;
    this.applicationService = applicationService;
    this.snackBar = snackBar;
    this.dashboardStats = {
      totalJobs: 0,
      activeJobs: 0,
      inactiveJobs: 0,
      totalApplications: 0,
      pendingApplications: 0,
      shortlistedApplications: 0,
      rejectedApplications: 0,
      newApplicationsThisWeek: 0,
      popularJobs: []
    };
    this.isLoading = true;
    this.currentUser = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadDashboardData();
  }
  loadDashboardData() {
    console.log('Loading real dashboard data...');
    // Load real data from APIs
    this.loadJobStatistics();
    this.loadApplicationStatistics();
    this.loadJobs();
    this.loadApplications();
  }
  loadJobStatistics() {
    console.log('Loading job statistics...');
    this.jobService.getJobStatistics().subscribe({
      next: stats => {
        console.log('Job stats loaded:', stats);
        this.dashboardStats.totalJobs = stats.totalJobs || 0;
        this.dashboardStats.activeJobs = stats.activeJobs || 0;
        this.dashboardStats.inactiveJobs = (stats.totalJobs || 0) - (stats.activeJobs || 0);
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading job stats:', error);
        this.snackBar.open('Error loading job statistics', 'Close', {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }
  loadApplicationStatistics() {
    console.log('Loading application statistics...');
    this.applicationService.getApplicationStats().subscribe({
      next: stats => {
        console.log('Application stats loaded:', stats);
        this.dashboardStats.totalApplications = stats.totalApplications || 0;
        this.dashboardStats.pendingApplications = stats.pendingApplications || 0;
        this.dashboardStats.shortlistedApplications = stats.acceptedApplications || 0;
        this.dashboardStats.rejectedApplications = stats.rejectedApplications || 0;
        this.dashboardStats.newApplicationsThisWeek = 0; // TODO: Add this to backend
      },
      error: error => {
        console.error('Error loading application stats:', error);
        this.snackBar.open('Error loading application statistics', 'Close', {
          duration: 3000
        });
      }
    });
  }
  loadJobs() {
    console.log('Loading employer jobs...');
    this.jobService.getEmployerJobs().subscribe({
      next: jobs => {
        console.log('Jobs loaded:', jobs);
        // Convert to popular jobs format
        this.dashboardStats.popularJobs = jobs.slice(0, 3).map(job => ({
          id: job.id,
          title: job.title,
          applications: 0,
          views: 0,
          status: job.active ? 'active' : 'inactive'
        }));
      },
      error: error => {
        console.error('Error loading jobs:', error);
        this.snackBar.open('Error loading jobs', 'Close', {
          duration: 3000
        });
      }
    });
  }
  loadApplications() {
    console.log('Loading employer applications...');
    this.applicationService.getEmployerApplications().subscribe({
      next: applications => {
        console.log('Applications loaded:', applications);
        // Update application counts for each job
        applications.forEach(app => {
          const job = this.dashboardStats.popularJobs.find(j => j.id === app.jobId);
          if (job) {
            job.applications++;
          }
        });
      },
      error: error => {
        console.error('Error loading applications:', error);
        this.snackBar.open('Error loading applications', 'Close', {
          duration: 3000
        });
      }
    });
  }
  navigateToJobs() {
    this.router.navigate(['/employer/jobs']);
  }
  navigateToApplications() {
    this.router.navigate(['/employer/applications']);
  }
  navigateToPostJob() {
    this.router.navigate(['/employer/post-job']);
  }
  navigateToJobDetails(jobId) {
    this.router.navigate(['/employer/jobs', jobId]);
  }
  navigateToApplicants(jobId) {
    this.router.navigate(['/employer/jobs', jobId, 'applicants']);
  }
  getApplicationRate() {
    const total = this.dashboardStats.totalApplications;
    const jobs = this.dashboardStats.totalJobs;
    if (jobs === 0) return 0;
    return Math.round(total / jobs);
  }
  getConversionRate() {
    const total = this.dashboardStats.totalApplications;
    const shortlisted = this.dashboardStats.shortlistedApplications;
    if (total === 0) return 0;
    return Math.round(shortlisted / total * 100);
  }
  formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
  getJobConversionRate(job) {
    if (!job.views || job.views === 0) return 0;
    return Math.round(job.applications / job.views * 100);
  }
  getJobStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'active':
        return 'primary';
      case 'inactive':
        return 'warn';
      case 'closed':
        return 'accent';
      default:
        return 'primary';
    }
  }
  static {
    this.ɵfac = function EmployerDashboardComponent_Factory(t) {
      return new (t || EmployerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_1__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_application_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmployerDashboardComponent,
      selectors: [["app-employer-dashboard"]],
      decls: 9,
      vars: 3,
      consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "subtitle"], ["class", "loading-spinner", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], ["class", "dashboard-content", 4, "ngIf"], [1, "loading-spinner"], ["diameter", "40"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-content"], [1, "stat-icon", "jobs"], [1, "stat-info"], [1, "stat-breakdown"], [1, "active"], [1, "inactive"], [1, "stat-icon", "applications"], [1, "pending"], [1, "shortlisted"], [1, "stat-icon", "rate"], [1, "new"], [1, "stat-icon", "conversion"], [1, "rejected"], [1, "dashboard-content"], [1, "content-section"], ["class", "jobs-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "activity-list"], [1, "activity-item"], [1, "activity-icon", "applications"], [1, "activity-content"], [1, "activity-text"], [1, "activity-time"], ["mat-stroked-button", "", 3, "click"], [1, "activity-icon", "jobs"], [1, "activity-icon", "pending"], [1, "quick-actions-grid"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"], [1, "jobs-list"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-info"], [3, "color"], [1, "job-actions"], [1, "job-stats"], [1, "stat-item"], [1, "stat-icon"], [1, "empty-state"], [1, "empty-icon"]],
      template: function EmployerDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Employer Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Manage your job postings and track applicant progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EmployerDashboardComponent_div_6_Template, 2, 0, "div", 3)(7, EmployerDashboardComponent_div_7_Template, 61, 10, "div", 4)(8, EmployerDashboardComponent_div_8_Template, 70, 5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner],
      styles: [".dashboard-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 600;\n  color: #1976d2;\n  margin-bottom: 8px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.jobs[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.applications[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.rate[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.conversion[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: #333;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 2px 6px;\n  border-radius: 12px;\n  background: #f5f5f5;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #4caf50;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   span.inactive[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   span.pending[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #2196f3;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   span.shortlisted[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #9c27b0;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   span.new[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #4caf50;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   span.rejected[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #f44336;\n}\n\n.dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n}\n@media (min-width: 1024px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 1fr;\n  }\n}\n\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 16px;\n  transition: all 0.2s ease;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]:hover {\n  border-color: #1976d2;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  color: #333;\n  font-weight: 600;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ccc;\n  margin-bottom: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 24px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon.applications[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon.jobs[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon.pending[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%]   .activity-text[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-weight: 500;\n  color: #333;\n  font-size: 1rem;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%]   .activity-time[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #999;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .quick-actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .quick-actions-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px;\n  height: auto;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .quick-actions-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .dashboard-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-actions[_ngcontent-%COMP%] {\n    margin-left: 0;\n    align-self: flex-end;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 0;\n    align-self: stretch;\n  }\n  .content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxxREFBQTtBQURKO0FBR0k7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBRE47QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRlI7QUFJUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRlY7QUFLUTtFQUNFLDZEQUFBO0FBSFY7QUFNUTtFQUNFLDZEQUFBO0FBSlY7QUFPUTtFQUNFLDZEQUFBO0FBTFY7QUFRUTtFQUNFLDZEQUFBO0FBTlY7QUFXUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVRWO0FBWVE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVZWO0FBYVE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFYVjtBQWFVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFYWjtBQWFZO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBWGQ7QUFjWTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVpkO0FBZVk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFiZDtBQWdCWTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQWRkO0FBaUJZO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBZmQ7QUFrQlk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFoQmQ7O0FBeUJBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQXRCRjtBQXdCRTtFQUxGO0lBTUksOEJBQUE7RUFyQkY7QUFDRjs7QUF5QkU7RUFDRSxZQUFBO0FBdEJKO0FBeUJNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdkJSO0FBeUJRO0VBQ0UscUJBQUE7RUFDQSx3Q0FBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF4QlY7QUEwQlU7RUFDRSxPQUFBO0FBeEJaO0FBMEJZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXhCZDtBQTJCWTtFQUNFLGlCQUFBO0FBekJkO0FBNkJVO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQTNCWjtBQStCUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQTdCVjtBQStCVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE3Qlo7QUErQlk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQTdCZDtBQWdDWTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQTlCZDtBQXFDSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQW5DTjtBQXFDTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFuQ1I7QUFzQ007RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFwQ1I7QUF5Q007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBdkNSO0FBeUNRO0VBQ0UsbUJBQUE7QUF2Q1Y7QUEwQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF4Q1Y7QUEwQ1U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQXhDWjtBQTJDVTtFQUNFLDZEQUFBO0FBekNaO0FBNENVO0VBQ0UsNkRBQUE7QUExQ1o7QUE2Q1U7RUFDRSw2REFBQTtBQTNDWjtBQStDUTtFQUNFLE9BQUE7QUE3Q1Y7QUErQ1U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUE3Q1o7QUFnRFU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBOUNaO0FBa0RRO0VBQ0UsaUJBQUE7QUFoRFY7QUFxREk7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBbkROO0FBcURNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFuRFI7QUFxRFE7RUFDRSxlQUFBO0FBbkRWOztBQTBEQTtFQUNFO0lBQ0UsYUFBQTtFQXZERjtFQTJERTtJQUNFLGVBQUE7RUF6REo7RUE2REE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUEzREY7RUE4REE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUE1REY7RUFtRVE7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUFqRVY7RUFtRVU7SUFDRSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtJQUNBLFFBQUE7RUFqRVo7RUFxRVE7SUFDRSxzQkFBQTtJQUNBLFFBQUE7RUFuRVY7RUF5RU07SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQXZFUjtFQXlFUTtJQUNFLGtCQUFBO0VBdkVWO0VBMEVRO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VBeEVWO0VBNkVJO0lBQ0UsMEJBQUE7RUEzRU47QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc3RhdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLnN0YXQtY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cblxuICAgIC5zdGF0LWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDE2cHg7XG5cbiAgICAgIC5zdGF0LWljb24ge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5qb2JzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hcHBsaWNhdGlvbnMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMDkzZmIgMCUsICNmNTU3NmMgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJhdGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZmFjZmUgMCUsICMwMGYyZmUgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNvbnZlcnNpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0M2U5N2IgMCUsICMzOGY5ZDcgMTAwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN0YXQtaW5mbyB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXQtYnJlYWtkb3duIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOGY1ZTg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmluYWN0aXZlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjNlMDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZjk4MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucGVuZGluZyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjE5NmYzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNob3J0bGlzdGVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZTVmNTtcbiAgICAgICAgICAgICAgY29sb3I6ICM5YzI3YjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmV3IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZjVlODtcbiAgICAgICAgICAgICAgY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucmVqZWN0ZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZlYmVlO1xuICAgICAgICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmRhc2hib2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMjRweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICB9XG59XG5cbi5jb250ZW50LXNlY3Rpb24ge1xuICBtYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmpvYnMtbGlzdCB7XG4gICAgICAuam9iLWNhcmQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuam9iLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgIC5qb2ItaW5mbyB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1jaGlwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmpvYi1hY3Rpb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2Itc3RhdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAyNHB4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIC5zdGF0LWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVtcHR5LXN0YXRlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDMycHg7XG5cbiAgICAgIC5lbXB0eS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpdml0eS1saXN0IHtcbiAgICAgIC5hY3Rpdml0eS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpdml0eS1pY29uIHtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFwcGxpY2F0aW9ucyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuam9icyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucGVuZGluZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGZhY2ZlIDAlLCAjMDBmMmZlIDEwMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpdml0eS1jb250ZW50IHtcbiAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgLmFjdGl2aXR5LXRleHQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFjdGl2aXR5LXRpbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5xdWljay1hY3Rpb25zLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxNnB4O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgLnN0YXRzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLmNvbnRlbnQtc2VjdGlvbiB7XG4gICAgbWF0LWNhcmQge1xuICAgICAgLmpvYnMtbGlzdCB7XG4gICAgICAgIC5qb2ItY2FyZCB7XG4gICAgICAgICAgLmpvYi1oZWFkZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGdhcDogMTJweDtcblxuICAgICAgICAgICAgLmpvYi1hY3Rpb25zIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuam9iLXN0YXRzIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjdGl2aXR5LWxpc3Qge1xuICAgICAgICAuYWN0aXZpdHktaXRlbSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgICAuYWN0aXZpdHktaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnF1aWNrLWFjdGlvbnMtZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxxREFBQTtBQURKO0FBR0k7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBRE47QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRlI7QUFJUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRlY7QUFLUTtFQUNFLDZEQUFBO0FBSFY7QUFNUTtFQUNFLDZEQUFBO0FBSlY7QUFPUTtFQUNFLDZEQUFBO0FBTFY7QUFRUTtFQUNFLDZEQUFBO0FBTlY7QUFXUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVRWO0FBWVE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVZWO0FBYVE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFYVjtBQWFVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFYWjtBQWFZO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBWGQ7QUFjWTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVpkO0FBZVk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFiZDtBQWdCWTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQWRkO0FBaUJZO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBZmQ7QUFrQlk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFoQmQ7O0FBeUJBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQXRCRjtBQXdCRTtFQUxGO0lBTUksOEJBQUE7RUFyQkY7QUFDRjs7QUF5QkU7RUFDRSxZQUFBO0FBdEJKO0FBeUJNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdkJSO0FBeUJRO0VBQ0UscUJBQUE7RUFDQSx3Q0FBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF4QlY7QUEwQlU7RUFDRSxPQUFBO0FBeEJaO0FBMEJZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXhCZDtBQTJCWTtFQUNFLGlCQUFBO0FBekJkO0FBNkJVO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQTNCWjtBQStCUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQTdCVjtBQStCVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE3Qlo7QUErQlk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQTdCZDtBQWdDWTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQTlCZDtBQXFDSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQW5DTjtBQXFDTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFuQ1I7QUFzQ007RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFwQ1I7QUF5Q007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBdkNSO0FBeUNRO0VBQ0UsbUJBQUE7QUF2Q1Y7QUEwQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF4Q1Y7QUEwQ1U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQXhDWjtBQTJDVTtFQUNFLDZEQUFBO0FBekNaO0FBNENVO0VBQ0UsNkRBQUE7QUExQ1o7QUE2Q1U7RUFDRSw2REFBQTtBQTNDWjtBQStDUTtFQUNFLE9BQUE7QUE3Q1Y7QUErQ1U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUE3Q1o7QUFnRFU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBOUNaO0FBa0RRO0VBQ0UsaUJBQUE7QUFoRFY7QUFxREk7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBbkROO0FBcURNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFuRFI7QUFxRFE7RUFDRSxlQUFBO0FBbkRWOztBQTBEQTtFQUNFO0lBQ0UsYUFBQTtFQXZERjtFQTJERTtJQUNFLGVBQUE7RUF6REo7RUE2REE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUEzREY7RUE4REE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUE1REY7RUFtRVE7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUFqRVY7RUFtRVU7SUFDRSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtJQUNBLFFBQUE7RUFqRVo7RUFxRVE7SUFDRSxzQkFBQTtJQUNBLFFBQUE7RUFuRVY7RUF5RU07SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQXZFUjtFQXlFUTtJQUNFLGtCQUFBO0VBdkVWO0VBMEVRO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VBeEVWO0VBNkVJO0lBQ0UsMEJBQUE7RUEzRU47QUFDRjtBQUNBLG80YUFBbzRhIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5zdGF0LWNhcmQge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAuc3RhdC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuXG4gICAgICAuc3RhdC1pY29uIHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuam9icyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYXBwbGljYXRpb25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5yYXRlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGZhY2ZlIDAlLCAjMDBmMmZlIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jb252ZXJzaW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNDNlOTdiIDAlLCAjMzhmOWQ3IDEwMCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zdGF0LWluZm8ge1xuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0LWJyZWFrZG93biB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThmNWU4O1xuICAgICAgICAgICAgICBjb2xvcjogIzRjYWY1MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYzZTA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnBlbmRpbmcge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICAgICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaG9ydGxpc3RlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2U1ZjU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOWMyN2IwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5ldyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOGY1ZTg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnJlamVjdGVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZWJlZTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kYXNoYm9hcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDI0cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgfVxufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgbWF0LWNhcmQge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5qb2JzLWxpc3Qge1xuICAgICAgLmpvYi1jYXJkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzE5NzZkMjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmpvYi1oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgICAuam9iLWluZm8ge1xuICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtY2hpcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5qb2ItYWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuam9iLXN0YXRzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAuc3RhdC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgICAgIC5zdGF0LWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMnB4O1xuXG4gICAgICAuZW1wdHktaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aXZpdHktbGlzdCB7XG4gICAgICAuYWN0aXZpdHktaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5hcHBsaWNhdGlvbnMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwOTNmYiAwJSwgI2Y1NTc2YyAxMDAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmpvYnMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnBlbmRpbmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmYWNmZSAwJSwgIzAwZjJmZSAxMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktY29udGVudCB7XG4gICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgIC5hY3Rpdml0eS10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hY3Rpdml0eS10aW1lIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucXVpY2stYWN0aW9ucy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMTZweDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRhc2hib2FyZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuZGFzaGJvYXJkLWhlYWRlciB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cblxuICAuZGFzaGJvYXJkLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5jb250ZW50LXNlY3Rpb24ge1xuICAgIG1hdC1jYXJkIHtcbiAgICAgIC5qb2JzLWxpc3Qge1xuICAgICAgICAuam9iLWNhcmQge1xuICAgICAgICAgIC5qb2ItaGVhZGVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgICAgIC5qb2ItYWN0aW9ucyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmpvYi1zdGF0cyB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpdml0eS1saXN0IHtcbiAgICAgICAgLmFjdGl2aXR5LWl0ZW0ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAgICAgLmFjdGl2aXR5LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5xdWljay1hY3Rpb25zLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8919:
/*!*********************************************!*\
  !*** ./src/app/employer/employer.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployerModule: () => (/* binding */ EmployerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
























const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EmployerDashboardComponent
}, {
  path: 'jobs',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_employer_jobs_jobs_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./jobs/jobs.component */ 1698)).then(m => m.EmployerJobsComponent)
}, {
  path: 'jobs/:id',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_employer_jobs_job-details_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./jobs/job-details.component */ 1998)).then(m => m.JobDetailsComponent)
}, {
  path: 'jobs/:id/edit',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("src_app_employer_jobs_edit-job_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./jobs/edit-job.component */ 5112)).then(m => m.EditJobComponent)
}, {
  path: 'applications',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_employer_applications_applications_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./applications/applications.component */ 9696)).then(m => m.EmployerApplicationsComponent)
}, {
  path: 'post-job',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("src_app_employer_create-job_create-job-final_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-job/create-job-final.component */ 9151)).then(m => m.CreateJobComponent)
}];
class EmployerModule {
  static {
    this.ɵfac = function EmployerModule_Factory(t) {
      return new (t || EmployerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmployerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmployerModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EmployerDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_employer_employer_module_ts.js.map