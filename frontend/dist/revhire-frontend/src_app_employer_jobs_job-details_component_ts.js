"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["src_app_employer_jobs_job-details_component_ts"],{

/***/ 1998:
/*!********************************************************!*\
  !*** ./src/app/employer/jobs/job-details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobDetailsComponent: () => (/* binding */ JobDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


















function JobDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading job details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function JobDetailsComponent_div_13_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Skills Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.job.skillsRequired);
  }
}
function JobDetailsComponent_div_13_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Education Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.job.educationRequired);
  }
}
function JobDetailsComponent_div_13_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Application Deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p")(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(ctx_r0.job.deadline), "");
  }
}
function JobDetailsComponent_div_13_p_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Last Updated:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(ctx_r0.job.updatedAt), "");
  }
}
function JobDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "mat-card", 11)(2, "mat-card-header")(3, "div", 12)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content")(9, "div", 14)(10, "div", 15)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p")(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Job Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p")(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15)(25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Work Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p")(28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15)(32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Salary Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p")(35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15)(39, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Experience Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p")(42, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15)(46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Number of Openings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p")(49, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 16)(53, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Job Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, JobDetailsComponent_div_13_div_57_Template, 5, 1, "div", 17)(58, JobDetailsComponent_div_13_div_58_Template, 5, 1, "div", 18)(59, JobDetailsComponent_div_13_div_59_Template, 7, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 20)(61, "p")(62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Posted:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, JobDetailsComponent_div_13_p_65_Template, 4, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.job.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.getStatusColor(ctx_r0.job.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.job.active ? "Active" : "Inactive", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.job.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatJobType(ctx_r0.job.jobType), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatWorkLocation(ctx_r0.job.workLocation), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatSalary(ctx_r0.job.salaryMin, ctx_r0.job.salaryMax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.job.experienceRequired || 0, " years");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.job.numberOfOpenings || 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.job.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.job.skillsRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.job.educationRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.job.deadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(ctx_r0.job.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.job.updatedAt);
  }
}
function JobDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "mat-card")(2, "mat-card-content")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Job Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The job you're looking for doesn't exist or has been deleted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobDetailsComponent_div_14_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Back to Jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class JobDetailsComponent {
  constructor(route, router, jobService, snackBar) {
    this.route = route;
    this.router = router;
    this.jobService = jobService;
    this.snackBar = snackBar;
    this.job = null;
    this.isLoading = true;
  }
  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.loadJobDetails(+jobId);
    } else {
      this.snackBar.open('Invalid job ID', 'Close', {
        duration: 3000
      });
      this.goBack();
    }
  }
  loadJobDetails(jobId) {
    this.isLoading = true;
    this.jobService.getJobById(jobId).subscribe({
      next: job => {
        this.job = job;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading job details:', error);
        this.snackBar.open('Error loading job details', 'Close', {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(['/employer/jobs']);
  }
  editJob() {
    if (this.job) {
      this.router.navigate(['/employer/jobs', this.job.id, 'edit']);
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
  formatWorkLocation(workLocation) {
    if (!workLocation) return 'Not specified';
    return workLocation.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  }
  formatDate(date) {
    if (!date) return 'Not specified';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  static {
    this.ɵfac = function JobDetailsComponent_Factory(t) {
      return new (t || JobDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: JobDetailsComponent,
      selectors: [["app-job-details"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 3,
      consts: [[1, "job-details-container"], [1, "job-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "spacer"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "job-content", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "job-content"], [1, "job-card"], [1, "job-header"], [1, "status-chip", 3, "color"], [1, "job-info-grid"], [1, "info-item"], [1, "job-description"], ["class", "job-skills", 4, "ngIf"], ["class", "job-education", 4, "ngIf"], ["class", "job-deadline", 4, "ngIf"], [1, "job-meta"], [4, "ngIf"], [1, "job-skills"], [1, "job-education"], [1, "job-deadline"], [1, "error-state"]],
      template: function JobDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobDetailsComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Job Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobDetailsComponent_Template_button_click_8_listener() {
            return ctx.editJob();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "edit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Edit Job ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JobDetailsComponent_div_12_Template, 4, 0, "div", 5)(13, JobDetailsComponent_div_13_Template, 66, 15, "div", 6)(14, JobDetailsComponent_div_14_Template, 11, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.job);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.job);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
      styles: [".job-details-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.job-toolbar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  margin-bottom: 24px;\n  border-radius: 8px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  gap: 16px;\n}\n\n.job-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.job-card[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 28px;\n}\n\n.job-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #f9f9f9;\n}\n\n.info-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #666;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n\n.job-description[_ngcontent-%COMP%], .job-skills[_ngcontent-%COMP%], .job-education[_ngcontent-%COMP%], .job-deadline[_ngcontent-%COMP%], .job-meta[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.job-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .job-skills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .job-education[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .job-deadline[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #333;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 8px;\n}\n\n.job-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .job-skills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .job-education[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n\n.job-deadline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n\n.job-meta[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n}\n\n.job-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  color: #666;\n}\n\n.error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n\n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f44336;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBTjs7QUFHSTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGNBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQU47O0FBR0k7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7Ozs7O0VBS0UsbUJBQUE7QUFBTjs7QUFHSTs7OztFQUlFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTs7O0VBR0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFBTiIsImZpbGUiOiJqb2ItZGV0YWlscy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuam9iLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5qb2ItdG9vbGJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG5cbiAgICAuc3BhY2VyIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cblxuICAgIC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5qb2ItY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjRweDtcbiAgICB9XG5cbiAgICAuam9iLWNhcmQge1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG5cbiAgICAuam9iLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5qb2ItaGVhZGVyIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5zdGF0dXMtY2hpcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgLmpvYi1pbmZvLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAuaW5mby1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICB9XG5cbiAgICAuaW5mby1pdGVtIGg0IHtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cblxuICAgIC5pbmZvLWl0ZW0gcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuam9iLWRlc2NyaXB0aW9uLFxuICAgIC5qb2Itc2tpbGxzLFxuICAgIC5qb2ItZWR1Y2F0aW9uLFxuICAgIC5qb2ItZGVhZGxpbmUsXG4gICAgLmpvYi1tZXRhIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLmpvYi1kZXNjcmlwdGlvbiBoMyxcbiAgICAuam9iLXNraWxscyBoMyxcbiAgICAuam9iLWVkdWNhdGlvbiBoMyxcbiAgICAuam9iLWRlYWRsaW5lIGgzIHtcbiAgICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjdlZWE7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5qb2ItZGVzY3JpcHRpb24gcCxcbiAgICAuam9iLXNraWxscyBwLFxuICAgIC5qb2ItZWR1Y2F0aW9uIHAge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICB9XG5cbiAgICAuam9iLWRlYWRsaW5lIHAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmpvYi1tZXRhIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNjY3ZWVhO1xuICAgIH1cblxuICAgIC5qb2ItbWV0YSBwIHtcbiAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICAuZXJyb3Itc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICB9XG5cbiAgICAuZXJyb3Itc3RhdGUgaDMge1xuICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZXIvam9icy9qb2ItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFOOztBQUdJO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJOzs7OztFQUtFLG1CQUFBO0FBQU47O0FBR0k7Ozs7RUFJRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7OztFQUdFLGdCQUFBO0VBQ0EscUJBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQU47QUFDQSw0d0pBQTR3SiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5qb2ItZGV0YWlscy1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLmpvYi10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgLmpvYi1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAyNHB4O1xuICAgIH1cblxuICAgIC5qb2ItY2FyZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5qb2ItaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmpvYi1oZWFkZXIgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLnN0YXR1cy1jaGlwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAuam9iLWluZm8tZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgICBnYXA6IDI0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC5pbmZvLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIH1cblxuICAgIC5pbmZvLWl0ZW0gaDQge1xuICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgfVxuXG4gICAgLmluZm8taXRlbSBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5qb2ItZGVzY3JpcHRpb24sXG4gICAgLmpvYi1za2lsbHMsXG4gICAgLmpvYi1lZHVjYXRpb24sXG4gICAgLmpvYi1kZWFkbGluZSxcbiAgICAuam9iLW1ldGEge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuam9iLWRlc2NyaXB0aW9uIGgzLFxuICAgIC5qb2Itc2tpbGxzIGgzLFxuICAgIC5qb2ItZWR1Y2F0aW9uIGgzLFxuICAgIC5qb2ItZGVhZGxpbmUgaDMge1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2N2VlYTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLmpvYi1kZXNjcmlwdGlvbiBwLFxuICAgIC5qb2Itc2tpbGxzIHAsXG4gICAgLmpvYi1lZHVjYXRpb24gcCB7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIH1cblxuICAgIC5qb2ItZGVhZGxpbmUgcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuam9iLW1ldGEge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM2NjdlZWE7XG4gICAgfVxuXG4gICAgLmpvYi1tZXRhIHAge1xuICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5lcnJvci1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgIH1cblxuICAgIC5lcnJvci1zdGF0ZSBoMyB7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_employer_jobs_job-details_component_ts.js.map