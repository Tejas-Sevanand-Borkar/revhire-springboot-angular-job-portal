"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["src_app_employer_jobs_jobs_component_ts"],{

/***/ 1698:
/*!*************************************************!*\
  !*** ./src/app/employer/jobs/jobs.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployerJobsComponent: () => (/* binding */ EmployerJobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/application.service */ 9018);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
































const _c0 = () => [5, 10, 25, 100];
function EmployerJobsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading jobs...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function EmployerJobsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "work_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No Jobs Posted Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Start by posting your first job opening");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployerJobsComponent_div_12_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.createJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Post Your First Job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function EmployerJobsComponent_div_13_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Job Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployerJobsComponent_div_13_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28)(1, "div", 29)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30)(5, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.getStatusColor(job_r3.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", job_r3.active ? "Active" : "Inactive", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatJobType(job_r3.jobType));
  }
}
function EmployerJobsComponent_div_13_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployerJobsComponent_div_13_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28)(1, "div", 33)(2, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", job_r4.location, " ");
  }
}
function EmployerJobsComponent_div_13_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Salary Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployerJobsComponent_div_13_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.formatSalary(job_r5.salaryMin, job_r5.salaryMax), " ");
  }
}
function EmployerJobsComponent_div_13_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployerJobsComponent_div_13_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28)(1, "div", 36)(2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getApplicationCount(job_r6.id));
  }
}
function EmployerJobsComponent_div_13_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Posted Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployerJobsComponent_div_13_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(job_r7.createdAt), " ");
  }
}
function EmployerJobsComponent_div_13_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmployerJobsComponent_div_13_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28)(1, "button", 39)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", null, 0)(6, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployerJobsComponent_div_13_td_19_Template_button_click_6_listener() {
      const job_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.viewJob(job_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployerJobsComponent_div_13_td_19_Template_button_click_10_listener() {
      const job_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.editJob(job_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Edit Job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployerJobsComponent_div_13_td_19_Template_button_click_14_listener() {
      const job_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleJobStatus(job_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployerJobsComponent_div_13_td_19_Template_button_click_18_listener() {
      const job_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.viewApplications(job_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployerJobsComponent_div_13_td_19_Template_button_click_23_listener() {
      const job_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteJob(job_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Delete Job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r9 = ctx.$implicit;
    const menu_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menu_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r9.active ? "pause" : "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", job_r9.active ? "Deactivate" : "Activate", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" View Applications (", ctx_r1.getApplicationCount(job_r9.id), ") ");
  }
}
function EmployerJobsComponent_div_13_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 42);
  }
}
function EmployerJobsComponent_div_13_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 43);
  }
}
function EmployerJobsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EmployerJobsComponent_div_13_th_3_Template, 2, 0, "th", 16)(4, EmployerJobsComponent_div_13_td_4_Template, 9, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EmployerJobsComponent_div_13_th_6_Template, 2, 0, "th", 16)(7, EmployerJobsComponent_div_13_td_7_Template, 5, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EmployerJobsComponent_div_13_th_9_Template, 2, 0, "th", 16)(10, EmployerJobsComponent_div_13_td_10_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EmployerJobsComponent_div_13_th_12_Template, 2, 0, "th", 16)(13, EmployerJobsComponent_div_13_td_13_Template, 6, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EmployerJobsComponent_div_13_th_15_Template, 2, 0, "th", 16)(16, EmployerJobsComponent_div_13_td_16_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EmployerJobsComponent_div_13_th_18_Template, 2, 0, "th", 23)(19, EmployerJobsComponent_div_13_td_19_Template, 27, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EmployerJobsComponent_div_13_tr_20_Template, 1, 0, "tr", 24)(21, EmployerJobsComponent_div_13_tr_21_Template, 1, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-paginator", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))("pageSize", 10);
  }
}
class EmployerJobsComponent {
  constructor(jobService, applicationService, dialog, snackBar, router) {
    this.jobService = jobService;
    this.applicationService = applicationService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.router = router;
    this.displayedColumns = ['title', 'location', 'salary', 'applications', 'createdAt', 'actions'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();
    this.jobs = [];
    this.applications = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.loadJobs();
    this.loadApplications();
  }
  loadJobs() {
    this.isLoading = true;
    this.jobService.getEmployerJobs().subscribe({
      next: jobs => {
        this.jobs = jobs;
        this.dataSource.data = jobs.map(job => ({
          ...job,
          applicationCount: 0
        }));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading jobs:', error);
        this.snackBar.open('Error loading jobs', 'Close', {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }
  loadApplications() {
    this.applicationService.getEmployerApplications().subscribe({
      next: applications => {
        this.applications = applications;
        this.updateApplicationCounts();
      },
      error: error => {
        console.error('Error loading applications:', error);
      }
    });
  }
  updateApplicationCounts() {
    const jobApplicationCounts = new Map();
    this.applications.forEach(app => {
      const count = jobApplicationCounts.get(app.jobId) || 0;
      jobApplicationCounts.set(app.jobId, count + 1);
    });
    this.dataSource.data = this.dataSource.data.map(job => ({
      ...job,
      applicationCount: jobApplicationCounts.get(job.id) || 0
    }));
  }
  getApplicationCount(jobId) {
    return this.applications.filter(app => app.jobId === jobId).length;
  }
  createJob() {
    this.router.navigate(['/employer/post-job']);
  }
  viewJob(job) {
    this.router.navigate(['/employer/jobs', job.id]);
  }
  editJob(job) {
    this.router.navigate(['/employer/jobs', job.id, 'edit']);
  }
  toggleJobStatus(job) {
    const action = job.active ? 'deactivate' : 'activate';
    if (confirm(`Are you sure you want to ${action} this job?`)) {
      this.jobService.toggleJobStatus(job.id).subscribe({
        next: () => {
          job.active = !job.active;
          this.snackBar.open(`Job ${action}d successfully`, 'Close', {
            duration: 3000
          });
        },
        error: error => {
          console.error('Error toggling job status:', error);
          this.snackBar.open(`Error ${action}ing job`, 'Close', {
            duration: 3000
          });
        }
      });
    }
  }
  viewApplications(jobId) {
    this.router.navigate(['/employer/jobs', jobId, 'applicants']);
  }
  deleteJob(job) {
    if (confirm(`Are you sure you want to delete "${job.title}"? This action cannot be undone.`)) {
      this.jobService.deleteJob(job.id).subscribe({
        next: () => {
          this.snackBar.open('Job deleted successfully', 'Close', {
            duration: 3000
          });
          this.loadJobs(); // Refresh the list
        },
        error: error => {
          console.error('Error deleting job:', error);
          this.snackBar.open('Error deleting job', 'Close', {
            duration: 3000
          });
        }
      });
    }
  }
  getStatusColor(isActive) {
    return isActive ? 'primary' : 'warn';
  }
  formatSalary(min, max) {
    if (!min && !max) return 'Not specified';
    if (min && max) return `₹${min.toLocaleString()} - ₹${max.toLocaleString()}`;
    if (min) return `₹${min.toLocaleString()}+`;
    return `Up to ₹${max?.toLocaleString()}`;
  }
  formatJobType(jobType) {
    if (!jobType) return 'Not specified';
    return jobType.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  static {
    this.ɵfac = function EmployerJobsComponent_Factory(t) {
      return new (t || EmployerJobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_application_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmployerJobsComponent,
      selectors: [["app-employer-jobs"]],
      viewQuery: function EmployerJobsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 3,
      consts: [["menu", "matMenu"], [1, "jobs-container"], [1, "jobs-toolbar"], [1, "spacer"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "jobs-card"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "empty-state"], [1, "empty-icon"], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "location"], ["matColumnDef", "salary"], ["matColumnDef", "applications"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of jobs", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "job-title"], [1, "job-meta"], [1, "status-chip", 3, "color"], [1, "job-type"], [1, "location-info"], [1, "location-icon"], [1, "salary-info"], [1, "applications-info"], [1, "applications-icon"], ["mat-header-cell", ""], ["mat-icon-button", "", "aria-label", "Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 1, "delete-action", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function EmployerJobsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "mat-toolbar", 2)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My Jobs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployerJobsComponent_Template_button_click_5_listener() {
            return ctx.createJob();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Post New Job ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card", 5)(10, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EmployerJobsComponent_div_11_Template, 4, 0, "div", 6)(12, EmployerJobsComponent_div_12_Template, 11, 0, "div", 7)(13, EmployerJobsComponent_div_13_Template, 23, 6, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.jobs.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.jobs.length > 0);
        }
      },
      dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChip, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf],
      styles: [".jobs-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.jobs-toolbar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  margin-bottom: 24px;\n  border-radius: 8px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.jobs-card[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  gap: 16px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #9e9e9e;\n  margin-bottom: 16px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.job-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 24px;\n}\n\n.job-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n\n.location-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.location-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n}\n\n.salary-info[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.applications-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.applications-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n}\n\n.delete-action[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\nmat-cell[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n}\n\nmat-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTiIsImZpbGUiOiJqb2JzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5qb2JzLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuam9icy10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgLmpvYnMtY2FyZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gICAgfVxuXG4gICAgLmVtcHR5LWljb24ge1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5qb2ItdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuam9iLW1ldGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuc3RhdHVzLWNoaXAge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgIC5qb2ItdHlwZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAubG9jYXRpb24taW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5zYWxhcnktaW5mbyB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5hcHBsaWNhdGlvbnMtaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5hcHBsaWNhdGlvbnMtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAuZGVsZXRlLWFjdGlvbiB7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG5cbiAgICBtYXQtY2VsbCB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICB9XG5cbiAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZXIvam9icy9qb2JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBTjs7QUFHSTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGNBQUE7QUFBTjs7QUFHSTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsaUJBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0FBQU47QUFDQSxvaEhBQW9oSCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5qb2JzLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuam9icy10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgLmpvYnMtY2FyZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gICAgfVxuXG4gICAgLmVtcHR5LWljb24ge1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5qb2ItdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuam9iLW1ldGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuc3RhdHVzLWNoaXAge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgIC5qb2ItdHlwZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAubG9jYXRpb24taW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5zYWxhcnktaW5mbyB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5hcHBsaWNhdGlvbnMtaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5hcHBsaWNhdGlvbnMtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAuZGVsZXRlLWFjdGlvbiB7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG5cbiAgICBtYXQtY2VsbCB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICB9XG5cbiAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_employer_jobs_jobs_component_ts.js.map