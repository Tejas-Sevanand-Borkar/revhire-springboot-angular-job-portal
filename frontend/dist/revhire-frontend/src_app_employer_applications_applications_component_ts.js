"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["src_app_employer_applications_applications_component_ts"],{

/***/ 9696:
/*!*****************************************************************!*\
  !*** ./src/app/employer/applications/applications.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployerApplicationsComponent: () => (/* binding */ EmployerApplicationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _withdraw_application_dialog_withdraw_application_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdraw-application-dialog/withdraw-application-dialog.component */ 1550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/application.service */ 9018);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);



































const _c0 = () => [5, 10, 25, 100];
function EmployerApplicationsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading applications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EmployerApplicationsComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "inbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No Applications Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Applications will appear here when candidates apply to your job postings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EmployerApplicationsComponent_div_64_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Applicant");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmployerApplicationsComponent_div_64_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37)(1, "div", 38)(2, "div", 39)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 40)(6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](app_r1.applicantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](app_r1.applicantEmail);
  }
}
function EmployerApplicationsComponent_div_64_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmployerApplicationsComponent_div_64_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37)(1, "div", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 46)(5, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const app_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](app_r2.jobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](app_r2.jobLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatJobType(app_r2.jobType));
  }
}
function EmployerApplicationsComponent_div_64_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmployerApplicationsComponent_div_64_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37)(1, "mat-chip", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r2.getStatusColor(app_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.formatStatus(app_r4.status), " ");
  }
}
function EmployerApplicationsComponent_div_64_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Applied Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmployerApplicationsComponent_div_64_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const app_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.formatDate(app_r5.appliedAt), " ");
  }
}
function EmployerApplicationsComponent_div_64_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmployerApplicationsComponent_div_64_td_16_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerApplicationsComponent_div_64_td_16_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const app_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.viewResume(app_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "View Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EmployerApplicationsComponent_div_64_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37)(1, "button", 51)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-menu", null, 0)(6, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerApplicationsComponent_div_64_td_16_Template_button_click_6_listener() {
      const app_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.viewApplication(app_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "View Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EmployerApplicationsComponent_div_64_td_16_button_11_Template, 5, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerApplicationsComponent_div_64_td_16_Template_button_click_12_listener() {
      const app_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.updateApplicationStatus(app_r7, "UNDER_REVIEW"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Mark as Under Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerApplicationsComponent_div_64_td_16_Template_button_click_17_listener() {
      const app_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.updateApplicationStatus(app_r7, "SHORTLISTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Shortlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerApplicationsComponent_div_64_td_16_Template_button_click_22_listener() {
      const app_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.updateApplicationStatus(app_r7, "REJECTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerApplicationsComponent_div_64_td_16_Template_button_click_27_listener() {
      const app_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.withdrawApplication(app_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Withdraw Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const app_r7 = ctx.$implicit;
    const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", menu_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r7.resumeUrl);
  }
}
function EmployerApplicationsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EmployerApplicationsComponent_div_64_th_3_Template, 2, 0, "th", 28)(4, EmployerApplicationsComponent_div_64_td_4_Template, 10, 2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EmployerApplicationsComponent_div_64_th_6_Template, 2, 0, "th", 31)(7, EmployerApplicationsComponent_div_64_td_7_Template, 13, 3, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EmployerApplicationsComponent_div_64_th_9_Template, 2, 0, "th", 31)(10, EmployerApplicationsComponent_div_64_td_10_Template, 3, 2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EmployerApplicationsComponent_div_64_th_12_Template, 2, 0, "th", 31)(13, EmployerApplicationsComponent_div_64_td_13_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EmployerApplicationsComponent_div_64_th_15_Template, 2, 0, "th", 28)(16, EmployerApplicationsComponent_div_64_td_16_Template, 32, 2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-paginator", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
  }
}
class EmployerApplicationsComponent {
  constructor(applicationService, jobService, dialog, snackBar, router, cdr) {
    this.applicationService = applicationService;
    this.jobService = jobService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.router = router;
    this.cdr = cdr;
    this.displayedColumns = ['applicant', 'job', 'status', 'appliedAt', 'actions'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
    this.applications = [];
    this.jobs = [];
    this.isLoading = true;
  }
  ngOnInit() {
    console.log('Applications component initializing...');
    console.log('Initial applications array:', this.applications);
    console.log('Initial dataSource data:', this.dataSource.data);
    // Test API immediately on component init
    console.log('=== TESTING API DIRECTLY ===');
    fetch('http://localhost:8080/api/applications/employer').then(response => response.json()).then(data => {
      console.log('🔍 RAW API RESPONSE:', data);
      console.log('🔍 DATA TYPE:', typeof data);
      console.log('🔍 IS ARRAY?', Array.isArray(data));
      console.log('🔍 LENGTH:', data?.length);
      if (data?.length > 0) {
        console.log('🔍 FIRST ITEM:', data[0]);
      }
    }).catch(error => {
      console.error('🔍 RAW API ERROR:', error);
    });
    console.log('=== END API TEST ===');
    // Force complete data reset
    this.forceClearAllData();
    console.log('After force clear - applications:', this.applications);
    console.log('After force clear - dataSource:', this.dataSource.data);
    // Load fresh data with delay to ensure reset
    setTimeout(() => {
      console.log('Starting to load fresh data...');
      this.loadApplications();
      this.loadJobs();
    }, 100);
  }
  forceClearAllData() {
    console.log('Force clearing all application data...');
    this.applications = [];
    this.jobs = [];
    this.dataSource.data = [];
    // Force change detection
    this.cdr.detectChanges();
    // Reset paginator and sort
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.paginator.pageSize = 10;
    }
    if (this.sort) {
      this.sort.active = '';
      this.sort.direction = '';
    }
  }
  loadApplications() {
    console.log('Loading applications...');
    console.log('Before API call - applications:', this.applications);
    this.isLoading = true;
    this.applicationService.getEmployerApplications().subscribe({
      next: applications => {
        console.log('Raw API response:', applications);
        console.log('API response type:', typeof applications);
        console.log('API response length:', applications?.length);
        console.log('First application in response:', applications?.[0]);
        this.applications = applications.map(app => ({
          ...app
        }));
        console.log('After mapping - applications:', this.applications);
        this.enrichApplicationsWithJobDetails();
        this.dataSource.data = this.applications;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
        console.log('Final dataSource data:', this.dataSource.data);
      },
      error: error => {
        console.error('Error loading applications:', error);
        this.snackBar.open('Error loading applications', 'Close', {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }
  loadJobs() {
    console.log('Loading jobs for enrichment...');
    this.jobService.getEmployerJobs().subscribe({
      next: jobs => {
        console.log('Jobs loaded:', jobs);
        this.jobs = jobs;
        this.enrichApplicationsWithJobDetails();
      },
      error: error => {
        console.error('Error loading jobs:', error);
      }
    });
  }
  enrichApplicationsWithJobDetails() {
    console.log('Enriching applications with job details...');
    if (this.applications.length > 0 && this.jobs.length > 0) {
      this.applications = this.applications.map(app => {
        const job = this.jobs.find(j => j.id === app.jobId);
        const enrichedApp = {
          ...app,
          jobTitle: job?.title || 'Unknown Job',
          jobLocation: job?.location || 'Unknown Location',
          jobType: job?.jobType,
          salaryMin: job?.salaryMin,
          salaryMax: job?.salaryMax
        };
        console.log('Enriched application:', enrichedApp);
        return enrichedApp;
      });
      this.dataSource.data = this.applications;
      console.log('Final applications data:', this.applications);
    } else {
      console.log('Cannot enrich - applications:', this.applications.length, 'jobs:', this.jobs.length);
    }
  }
  getApplicationsByStatus(status) {
    console.log(`Getting applications by status: ${status}`, this.applications);
    const filteredApps = this.applications.filter(app => app.status === status);
    console.log(`Found ${filteredApps.length} applications with status ${status}`);
    return filteredApps;
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  refreshApplications() {
    console.log('Force refreshing applications - clearing all data first...');
    // Clear all data to remove any mock data
    this.forceClearAllData();
    // Reload fresh data
    this.loadApplications();
    this.loadJobs();
    // Show feedback
    this.snackBar.open('Applications refreshed', 'Close', {
      duration: 2000
    });
  }
  viewApplication(application) {
    // Navigate to application details or open dialog
    console.log('View application:', application);
    this.snackBar.open('Application details view coming soon', 'Close', {
      duration: 3000
    });
  }
  viewResume(application) {
    if (application.resumeUrl) {
      window.open(application.resumeUrl, '_blank');
    }
  }
  updateApplicationStatus(application, newStatus) {
    console.log('Updating application status:', application.id, 'to', newStatus);
    this.applicationService.updateApplicationStatus(application.id, newStatus).subscribe({
      next: () => {
        application.status = newStatus;
        this.snackBar.open(`Application status updated to ${this.formatStatus(newStatus)}`, 'Close', {
          duration: 3000
        });
      },
      error: error => {
        console.error('Error updating application status:', error);
        this.snackBar.open('Error updating application status', 'Close', {
          duration: 3000
        });
      }
    });
  }
  withdrawApplication(application) {
    const dialogRef = this.dialog.open(_withdraw_application_dialog_withdraw_application_dialog_component__WEBPACK_IMPORTED_MODULE_0__.WithdrawApplicationDialog, {
      data: {
        application
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.applicationService.withdrawApplication(application.id, result.reason).subscribe({
          next: () => {
            application.status = 'WITHDRAWN';
            this.snackBar.open('Application withdrawn successfully', 'Close', {
              duration: 3000
            });
          },
          error: error => {
            console.error('Error withdrawing application:', error);
            this.snackBar.open('Error withdrawing application', 'Close', {
              duration: 3000
            });
          }
        });
      }
    });
  }
  getStatusColor(status) {
    switch (status) {
      case 'APPLIED':
        return 'primary';
      case 'UNDER_REVIEW':
        return 'accent';
      case 'SHORTLISTED':
        return 'warn';
      case 'REJECTED':
        return 'warn';
      case 'WITHDRAWN':
        return 'warn';
      default:
        return '';
    }
  }
  formatStatus(status) {
    return status.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }
  formatJobType(jobType) {
    if (!jobType) return 'Not specified';
    return jobType.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }
  formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString();
  }
  ngAfterViewInit() {
    // Make this method available globally for debugging
    window.forceClearApplications = () => {
      console.log('Force clearing applications from browser console...');
      this.forceClearAllData();
      this.loadApplications();
      this.loadJobs();
    };
    // Test API directly
    window.testApplicationsAPI = () => {
      console.log('Testing applications API directly...');
      this.applicationService.getEmployerApplications().subscribe({
        next: data => {
          console.log('Direct API test result:', data);
          console.log('Data type:', typeof data);
          console.log('Is array?', Array.isArray(data));
          console.log('Length:', data?.length);
        },
        error: error => {
          console.error('Direct API test error:', error);
        }
      });
    };
    // Test with fetch to bypass Angular
    window.testRawAPI = () => {
      console.log('Testing raw API with fetch...');
      fetch('http://localhost:8080/api/applications/employer').then(response => response.json()).then(data => {
        console.log('Raw fetch result:', data);
      }).catch(error => {
        console.error('Raw fetch error:', error);
      });
    };
  }
  ngOnDestroy() {
    console.log('Applications component destroyed');
    // Clean up global method
    if (window.forceClearApplications) {
      delete window.forceClearApplications;
    }
  }
  static {
    this.ɵfac = function EmployerApplicationsComponent_Factory(t) {
      return new (t || EmployerApplicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_application_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_2__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmployerApplicationsComponent,
      selectors: [["app-employer-applications"]],
      viewQuery: function EmployerApplicationsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 65,
      vars: 7,
      consts: [["menu", "matMenu"], [1, "applications-container"], [1, "applications-toolbar"], [1, "spacer"], [1, "toolbar-actions"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Search by name, email, job title...", 3, "keyup"], ["matSuffix", ""], ["mat-icon-button", "", "matTooltip", "Refresh", 3, "click"], [1, "stats-cards"], [1, "stat-card"], [1, "stat-content"], [1, "stat-icon", "applied"], [1, "stat-info"], [1, "stat-icon", "review"], [1, "stat-icon", "shortlisted"], [1, "stat-icon", "rejected"], [1, "applications-card"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "empty-state"], [1, "empty-icon"], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "applicant"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "job"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["matColumnDef", "appliedAt"], ["matColumnDef", "actions"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "applicant-info"], [1, "applicant-avatar"], [1, "applicant-details"], [1, "applicant-name"], [1, "applicant-email"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "job-info"], [1, "job-title"], [1, "job-meta"], [1, "location-icon"], [1, "separator"], [1, "job-type"], [1, "status-chip", 3, "color"], ["mat-icon-button", "", "aria-label", "Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "withdraw-action", 3, "click"]],
      template: function EmployerApplicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "mat-toolbar", 2)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Job Applications");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "mat-form-field", 5)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Search applications...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function EmployerApplicationsComponent_Template_input_keyup_9_listener($event) {
            return ctx.applyFilter($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployerApplicationsComponent_Template_button_click_12_listener() {
            return ctx.refreshApplications();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "mat-card", 10)(17, "mat-card-content")(18, "div", 11)(19, "div", 12)(20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "send");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Applied");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-card", 10)(28, "mat-card-content")(29, "div", 11)(30, "div", 14)(31, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13)(34, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Under Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-card", 10)(39, "mat-card-content")(40, "div", 11)(41, "div", 15)(42, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "star");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13)(45, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Shortlisted");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-card", 10)(50, "mat-card-content")(51, "div", 11)(52, "div", 16)(53, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 13)(56, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Rejected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-card", 17)(61, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, EmployerApplicationsComponent_div_62_Template, 4, 0, "div", 18)(63, EmployerApplicationsComponent_div_63_Template, 7, 0, "div", 19)(64, EmployerApplicationsComponent_div_64_Template, 18, 3, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getApplicationsByStatus("APPLIED").length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getApplicationsByStatus("UNDER_REVIEW").length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getApplicationsByStatus("SHORTLISTED").length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getApplicationsByStatus("REJECTED").length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.applications.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.applications.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChip, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput],
      styles: [".applications-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.applications-toolbar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  margin-bottom: 24px;\n  border-radius: 8px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  width: 300px;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.search-field[_ngcontent-%COMP%]     .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.search-field[_ngcontent-%COMP%]     .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n\n.search-field[_ngcontent-%COMP%]     input {\n  color: white !important;\n}\n\n.stats-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.stat-icon.applied[_ngcontent-%COMP%] {\n  background: #2196F3;\n}\n\n.stat-icon.review[_ngcontent-%COMP%] {\n  background: #FF9800;\n}\n\n.stat-icon.shortlisted[_ngcontent-%COMP%] {\n  background: #4CAF50;\n}\n\n.stat-icon.rejected[_ngcontent-%COMP%] {\n  background: #F44336;\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n\n.applications-card[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  gap: 16px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #9e9e9e;\n  margin-bottom: 16px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.applicant-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.applicant-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.applicant-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n}\n\n.applicant-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n\n.applicant-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n\n.job-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n\n.job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #666;\n}\n\n.location-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n\n.job-type[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 24px;\n}\n\n.withdraw-action[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\nmat-cell[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n}\n\nmat-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@media (max-width: 768px) {\n  .stats-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .toolbar-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7QUFBTjs7QUFHSTtFQUNFLDBDQUFBO0FBQU47O0FBR0k7RUFDRSwwQ0FBQTtBQUFOOztBQUdJO0VBQ0UsdUJBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxtQkFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUdJO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFO0lBQ0UscUNBQUE7RUFBTjtFQUVJO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0VBQU47RUFFSTtJQUNFLFdBQUE7RUFBTjtBQUNGIiwiZmlsZSI6ImFwcGxpY2F0aW9ucy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYXBwbGljYXRpb25zLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuYXBwbGljYXRpb25zLXRvb2xiYXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuXG4gICAgLnNwYWNlciB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICAudG9vbGJhci1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGQge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGQgOjpuZy1kZWVwIGlucHV0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zdGF0cy1jYXJkcyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5zdGF0LWNhcmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAuc3RhdC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24uYXBwbGllZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ucmV2aWV3IHtcbiAgICAgIGJhY2tncm91bmQ6ICNGRjk4MDA7XG4gICAgfVxuXG4gICAgLnN0YXQtaWNvbi5zaG9ydGxpc3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ucmVqZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgICB9XG5cbiAgICAuc3RhdC1pbmZvIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5zdGF0LWluZm8gcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuYXBwbGljYXRpb25zLWNhcmQge1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG5cbiAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuZW1wdHktc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNjBweCAyMHB4O1xuICAgIH1cblxuICAgIC5lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgY29sb3I6ICM5ZTllOWU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC50YWJsZS1jb250YWluZXIge1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYXBwbGljYW50LWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLmFwcGxpY2FudC1hdmF0YXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYXBwbGljYW50LWF2YXRhciBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAuYXBwbGljYW50LW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5hcHBsaWNhbnQtZW1haWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgLmpvYi1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgLmpvYi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLmpvYi1tZXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAubG9jYXRpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnNlcGFyYXRvciB7XG4gICAgICBtYXJnaW46IDAgNHB4O1xuICAgIH1cblxuICAgIC5qb2ItdHlwZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5zdGF0dXMtY2hpcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLndpdGhkcmF3LWFjdGlvbiB7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG5cbiAgICBtYXQtY2VsbCB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICB9XG5cbiAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5zdGF0cy1jYXJkcyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICB9XG4gICAgICAudG9vbGJhci1hY3Rpb25zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG4gICAgICAuc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZXIvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7QUFBTjs7QUFHSTtFQUNFLDBDQUFBO0FBQU47O0FBR0k7RUFDRSwwQ0FBQTtBQUFOOztBQUdJO0VBQ0UsdUJBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxtQkFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUdJO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFO0lBQ0UscUNBQUE7RUFBTjtFQUVJO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0VBQU47RUFFSTtJQUNFLFdBQUE7RUFBTjtBQUNGO0FBQ0Esd3pPQUF3ek8iLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYXBwbGljYXRpb25zLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuYXBwbGljYXRpb25zLXRvb2xiYXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuXG4gICAgLnNwYWNlciB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICAudG9vbGJhci1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGQge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGQgOjpuZy1kZWVwIGlucHV0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zdGF0cy1jYXJkcyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5zdGF0LWNhcmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAuc3RhdC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24uYXBwbGllZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ucmV2aWV3IHtcbiAgICAgIGJhY2tncm91bmQ6ICNGRjk4MDA7XG4gICAgfVxuXG4gICAgLnN0YXQtaWNvbi5zaG9ydGxpc3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ucmVqZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgICB9XG5cbiAgICAuc3RhdC1pbmZvIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5zdGF0LWluZm8gcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuYXBwbGljYXRpb25zLWNhcmQge1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG5cbiAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuZW1wdHktc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNjBweCAyMHB4O1xuICAgIH1cblxuICAgIC5lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgY29sb3I6ICM5ZTllOWU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC50YWJsZS1jb250YWluZXIge1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYXBwbGljYW50LWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLmFwcGxpY2FudC1hdmF0YXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYXBwbGljYW50LWF2YXRhciBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAuYXBwbGljYW50LW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5hcHBsaWNhbnQtZW1haWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgLmpvYi1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgLmpvYi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLmpvYi1tZXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAubG9jYXRpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnNlcGFyYXRvciB7XG4gICAgICBtYXJnaW46IDAgNHB4O1xuICAgIH1cblxuICAgIC5qb2ItdHlwZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5zdGF0dXMtY2hpcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLndpdGhkcmF3LWFjdGlvbiB7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG5cbiAgICBtYXQtY2VsbCB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICB9XG5cbiAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5zdGF0cy1jYXJkcyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICB9XG4gICAgICAudG9vbGJhci1hY3Rpb25zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG4gICAgICAuc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1550:
/*!************************************************************************************************************!*\
  !*** ./src/app/employer/applications/withdraw-application-dialog/withdraw-application-dialog.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithdrawApplicationDialog: () => (/* binding */ WithdrawApplicationDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);












class WithdrawApplicationDialog {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.withdrawReason = '';
  }
  onCancel() {
    this.dialogRef.close();
  }
  onConfirm() {
    if (this.withdrawReason.trim()) {
      this.dialogRef.close({
        reason: this.withdrawReason.trim()
      });
    }
  }
  static {
    this.ɵfac = function WithdrawApplicationDialog_Factory(t) {
      return new (t || WithdrawApplicationDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WithdrawApplicationDialog,
      selectors: [["app-withdraw-application-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 4,
      consts: [[1, "dialog-container"], ["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "Please provide a reason for withdrawing this application...", "rows", "3", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click", "disabled"]],
      template: function WithdrawApplicationDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Withdraw Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure you want to withdraw this application?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Applicant:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p")(11, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Job:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2)(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reason for withdrawal (optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function WithdrawApplicationDialog_Template_textarea_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.withdrawReason, $event) || (ctx.withdrawReason = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "          ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-dialog-actions", 4)(20, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WithdrawApplicationDialog_Template_button_click_20_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WithdrawApplicationDialog_Template_button_click_22_listener() {
            return ctx.onConfirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Withdraw Application ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.application.applicantName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.application.jobTitle, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.withdrawReason);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.withdrawReason.trim());
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-width: 400px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3LWFwcGxpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTiIsImZpbGUiOiJ3aXRoZHJhdy1hcHBsaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mdWxsLXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgXG4gICAgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgIH1cbiAgICBcbiAgICBtYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZXIvYXBwbGljYXRpb25zL3dpdGhkcmF3LWFwcGxpY2F0aW9uLWRpYWxvZy93aXRoZHJhdy1hcHBsaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLGNBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0FBQU47QUFDQSw0eEJBQTR4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZnVsbC13aWR0aCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIG1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG4gICAgXG4gICAgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_employer_applications_applications_component_ts.js.map