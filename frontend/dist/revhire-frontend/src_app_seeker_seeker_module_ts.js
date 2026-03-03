"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["src_app_seeker_seeker_module_ts"],{

/***/ 9361:
/*!****************************************************!*\
  !*** ./src/app/core/services/saved-job.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SavedJobService: () => (/* binding */ SavedJobService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class SavedJobService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/saved-jobs';
  }
  saveJob(jobId) {
    return this.http.post(`${this.API_URL}/${jobId}`, {});
  }
  unsaveJob(jobId) {
    return this.http.delete(`${this.API_URL}/${jobId}`);
  }
  getSavedJobs() {
    return this.http.get(`${this.API_URL}`);
  }
  checkIfJobSaved(jobId) {
    return this.http.get(`${this.API_URL}/${jobId}/check`);
  }
  static {
    this.ɵfac = function SavedJobService_Factory(t) {
      return new (t || SavedJobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SavedJobService,
      factory: SavedJobService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1358:
/*!***************************************************************!*\
  !*** ./src/app/seeker/applications/applications.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationsComponent: () => (/* binding */ ApplicationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/application.service */ 9018);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);












function ApplicationsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading your applications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ApplicationsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "work_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No Applications Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "You haven't applied to any jobs yet. Start exploring opportunities!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplicationsComponent_div_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateToJobs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Find Jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ApplicationsComponent_div_8_mat_card_23_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const application_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](application_r3.job.company);
  }
}
function ApplicationsComponent_div_8_mat_card_23_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cover letter provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ApplicationsComponent_div_8_mat_card_23_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Resume attached");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ApplicationsComponent_div_8_mat_card_23_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplicationsComponent_div_8_mat_card_23_div_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const application_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.viewJobDetails(application_r3.jobId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " View Job Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplicationsComponent_div_8_mat_card_23_div_20_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const application_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.withdrawApplication(application_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Withdraw Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ApplicationsComponent_div_8_mat_card_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 17)(1, "mat-card-content")(2, "div", 18)(3, "div", 19)(4, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ApplicationsComponent_div_8_mat_card_23_p_6_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23)(10, "mat-chip", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 25)(13, "div", 26)(14, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ApplicationsComponent_div_8_mat_card_23_div_18_Template, 5, 0, "div", 28)(19, ApplicationsComponent_div_8_mat_card_23_div_19_Template, 5, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ApplicationsComponent_div_8_mat_card_23_div_20_Template, 9, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const application_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((application_r3.job == null ? null : application_r3.job.title) || "Job Title Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", application_r3.job && application_r3.job.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Applied on ", ctx_r1.getAppliedDate(application_r3.appliedAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r1.getStatusColor(application_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusText(application_r3.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](application_r3.applicantEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", application_r3.coverLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", application_r3.resumeUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", application_r3.status !== "WITHDRAWN" && application_r3.status !== "REJECTED");
  }
}
function ApplicationsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Total Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 12)(8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Shortlisted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Interviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ApplicationsComponent_div_8_mat_card_23_Template, 21, 9, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.totalApplications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.shortlistedCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.interviewCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.rejectedCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.applications)("ngForTrackBy", ctx_r1.trackByApplicationId);
  }
}
class ApplicationsComponent {
  constructor(applicationService, jobService, authService, router, snackBar) {
    this.applicationService = applicationService;
    this.jobService = jobService;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.applications = [];
    this.isLoading = true;
    this.currentUser = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.loadApplications();
    } else {
      this.snackBar.open('Please login to view your applications', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/auth/login']);
    }
  }
  loadApplications() {
    this.isLoading = true;
    this.applicationService.getApplicationsByJobSeeker(this.currentUser.id).subscribe({
      next: applications => {
        // Fetch job details for each application
        const applicationsWithJobs = applications.map(app => {
          const appWithJob = {
            ...app
          };
          if (app.jobId) {
            this.jobService.getJobById(app.jobId).subscribe({
              next: job => {
                appWithJob.job = job;
              },
              error: () => {
                console.error('Error loading job details for application:', app.id);
              }
            });
          }
          return appWithJob;
        });
        this.applications = applicationsWithJobs;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading applications:', error);
        this.snackBar.open('Failed to load applications', 'Close', {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }
  viewJobDetails(jobId) {
    this.router.navigate(['/seeker/jobs', jobId]);
  }
  withdrawApplication(applicationId) {
    if (confirm('Are you sure you want to withdraw this application?')) {
      this.applicationService.withdrawApplication(applicationId, 'Withdrawn by applicant').subscribe({
        next: () => {
          this.snackBar.open('Application withdrawn successfully', 'Close', {
            duration: 3000
          });
          this.loadApplications(); // Reload the applications
        },
        error: error => {
          console.error('Error withdrawing application:', error);
          this.snackBar.open('Failed to withdraw application', 'Close', {
            duration: 3000
          });
        }
      });
    }
  }
  getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'applied':
        return 'primary';
      case 'shortlisted':
        return 'accent';
      case 'interview_scheduled':
        return 'warn';
      case 'hired':
        return 'primary';
      case 'rejected':
        return 'warn';
      case 'withdrawn':
        return '';
      default:
        return 'primary';
    }
  }
  getStatusText(status) {
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
  getAppliedDate(appliedAt) {
    const date = new Date(appliedAt);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  trackByApplicationId(index, application) {
    return application.id;
  }
  // Statistics getters
  get totalApplications() {
    return this.applications.length;
  }
  get shortlistedCount() {
    return this.applications.filter(app => app.status === 'SHORTLISTED').length;
  }
  get interviewCount() {
    return this.applications.filter(app => app.status === 'INTERVIEW_SCHEDULED').length;
  }
  get rejectedCount() {
    return this.applications.filter(app => app.status === 'REJECTED').length;
  }
  navigateToJobs() {
    this.router.navigate(['/seeker/jobs']);
  }
  static {
    this.ɵfac = function ApplicationsComponent_Factory(t) {
      return new (t || ApplicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_application_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_1__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ApplicationsComponent,
      selectors: [["app-applications"]],
      decls: 9,
      vars: 3,
      consts: [[1, "applications-container"], [1, "applications-header"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "applications-content", 4, "ngIf"], [1, "loading-container"], ["diameter", "50"], [1, "empty-state"], [1, "empty-icon"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "applications-content"], [1, "applications-stats"], [1, "stat-card"], [1, "stat-number"], [1, "stat-label"], [1, "applications-list"], ["class", "application-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "application-card"], [1, "application-header"], [1, "job-info"], [1, "job-title"], ["class", "company-name", 4, "ngIf"], [1, "application-date"], [1, "application-status"], ["selected", "", 3, "color"], [1, "application-details"], [1, "detail-item"], [1, "detail-icon"], ["class", "detail-item", 4, "ngIf"], ["class", "application-actions", 4, "ngIf"], [1, "company-name"], [1, "application-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"]],
      template: function ApplicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "My Applications");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Track the status of your job applications");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ApplicationsComponent_div_6_Template, 4, 0, "div", 2)(7, ApplicationsComponent_div_7_Template, 9, 0, "div", 3)(8, ApplicationsComponent_div_8_Template, 24, 6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.applications.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.applications.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner],
      styles: [".applications-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.applications-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.applications-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 8px 0;\n}\n.applications-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  margin: 0;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 16px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n  gap: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #ccc;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 24px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  max-width: 400px;\n}\n\n.applications-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n\n.applications-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n.applications-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 12px;\n  text-align: center;\n  border: 1px solid #e0e0e0;\n}\n.applications-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  color: #1976d2;\n  margin-bottom: 8px;\n}\n.applications-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.applications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.application-card[_ngcontent-%COMP%] {\n  transition: box-shadow 0.2s ease;\n}\n.application-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.application-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 4px 0;\n}\n.application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin: 0 0 4px 0;\n  font-weight: 500;\n}\n.application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%]   .application-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin: 0;\n}\n.application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%]   .application-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .application-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .application-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n  font-size: 14px;\n}\n.application-card[_ngcontent-%COMP%]   .application-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n}\n.application-card[_ngcontent-%COMP%]   .application-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.application-card[_ngcontent-%COMP%]   .application-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n@media (max-width: 768px) {\n  .applications-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .applications-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .applications-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n  .applications-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .applications-stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .application-card[_ngcontent-%COMP%]   .application-header[_ngcontent-%COMP%]   .application-status[_ngcontent-%COMP%] {\n    margin-left: 0;\n    align-self: flex-start;\n  }\n  .application-card[_ngcontent-%COMP%]   .application-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .application-card[_ngcontent-%COMP%]   .application-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .applications-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBRko7QUFLRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBTEY7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUxKO0FBT0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVFJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5OOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVJGOztBQVdBO0VBQ0UsZ0NBQUE7QUFSRjtBQVVFO0VBQ0UseUNBQUE7QUFSSjtBQVdFO0VBQ0UsYUFBQTtBQVRKO0FBWUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVko7QUFZSTtFQUNFLE9BQUE7QUFWTjtBQVlNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBVlI7QUFhTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVhSO0FBY007RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFaUjtBQWdCSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQWROO0FBa0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBaEJKO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBaEJOO0FBa0JNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFoQlI7QUFxQkU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFuQko7QUFxQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBbkJOOztBQXlCQTtFQUNFO0lBQ0UsYUFBQTtFQXRCRjtFQTBCRTtJQUNFLGVBQUE7RUF4Qko7RUE0QkE7SUFDRSxxQ0FBQTtJQUNBLFNBQUE7RUExQkY7RUE0QkU7SUFDRSxhQUFBO0VBMUJKO0VBNEJJO0lBQ0UsZUFBQTtFQTFCTjtFQWdDRTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQTlCSjtFQWdDSTtJQUNFLGNBQUE7SUFDQSxzQkFBQTtFQTlCTjtFQWtDRTtJQUNFLHNCQUFBO0VBaENKO0VBa0NJO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBaENOO0FBQ0Y7QUFxQ0E7RUFDRTtJQUNFLDBCQUFBO0VBbkNGO0FBQ0YiLCJmaWxlIjoiYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGxpY2F0aW9ucy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hcHBsaWNhdGlvbnMtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBnYXA6IDE2cHg7XG5cbiAgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDE2cHg7XG5cbiAgLmVtcHR5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbn1cblxuLmFwcGxpY2F0aW9ucy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMnB4O1xufVxuXG4uYXBwbGljYXRpb25zLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcblxuICAuc3RhdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblxuICAgIC5zdGF0LW51bWJlciB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnN0YXQtbGFiZWwge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4uYXBwbGljYXRpb25zLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5hcHBsaWNhdGlvbi1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmFwcGxpY2F0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIC5qb2ItaW5mbyB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAuam9iLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cblxuICAgICAgLmFwcGxpY2F0aW9uLWRhdGUge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcGxpY2F0aW9uLXN0YXR1cyB7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIC5kZXRhaWwtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIC5kZXRhaWwtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFwcGxpY2F0aW9uLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcHBsaWNhdGlvbnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmFwcGxpY2F0aW9ucy1oZWFkZXIge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG4gIH1cblxuICAuYXBwbGljYXRpb25zLXN0YXRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTZweDtcblxuICAgIC5zdGF0LWNhcmQge1xuICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgLnN0YXQtbnVtYmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hcHBsaWNhdGlvbi1jYXJkIHtcbiAgICAuYXBwbGljYXRpb24taGVhZGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDEycHg7XG5cbiAgICAgIC5hcHBsaWNhdGlvbi1zdGF0dXMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwbGljYXRpb24tYWN0aW9ucyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXBwbGljYXRpb25zLXN0YXRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2Vla2VyL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQUxGO0FBT0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFMSjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTE47QUFRSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOTjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFSRjs7QUFXQTtFQUNFLGdDQUFBO0FBUkY7QUFVRTtFQUNFLHlDQUFBO0FBUko7QUFXRTtFQUNFLGFBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUk7RUFDRSxPQUFBO0FBVk47QUFZTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVZSO0FBYU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFYUjtBQWNNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBWlI7QUFnQkk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFkTjtBQWtCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQWhCSjtBQWtCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBaEJSO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBbkJKO0FBcUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQW5CTjs7QUF5QkE7RUFDRTtJQUNFLGFBQUE7RUF0QkY7RUEwQkU7SUFDRSxlQUFBO0VBeEJKO0VBNEJBO0lBQ0UscUNBQUE7SUFDQSxTQUFBO0VBMUJGO0VBNEJFO0lBQ0UsYUFBQTtFQTFCSjtFQTRCSTtJQUNFLGVBQUE7RUExQk47RUFnQ0U7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUE5Qko7RUFnQ0k7SUFDRSxjQUFBO0lBQ0Esc0JBQUE7RUE5Qk47RUFrQ0U7SUFDRSxzQkFBQTtFQWhDSjtFQWtDSTtJQUNFLFdBQUE7SUFDQSx1QkFBQTtFQWhDTjtBQUNGO0FBcUNBO0VBQ0U7SUFDRSwwQkFBQTtFQW5DRjtBQUNGO0FBQ0EsZ3dPQUFnd08iLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbGljYXRpb25zLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmFwcGxpY2F0aW9ucy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGdhcDogMTZweDtcblxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcblxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxufVxuXG4uYXBwbGljYXRpb25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMycHg7XG59XG5cbi5hcHBsaWNhdGlvbnMtc3RhdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuXG4gIC5zdGF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gICAgLnN0YXQtbnVtYmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzE5NzZkMjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi5hcHBsaWNhdGlvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmFwcGxpY2F0aW9uLWNhcmQge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuYXBwbGljYXRpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgLmpvYi1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5qb2ItdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgIH1cblxuICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAuYXBwbGljYXRpb24tZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwbGljYXRpb24tc3RhdHVzIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmFwcGxpY2F0aW9uLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgLmRldGFpbC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgLmRldGFpbC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXBwbGljYXRpb24tYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFwcGxpY2F0aW9ucy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuYXBwbGljYXRpb25zLWhlYWRlciB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5hcHBsaWNhdGlvbnMtc3RhdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgLnN0YXQtY2FyZCB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAuc3RhdC1udW1iZXIge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFwcGxpY2F0aW9uLWNhcmQge1xuICAgIC5hcHBsaWNhdGlvbi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgLmFwcGxpY2F0aW9uLXN0YXR1cyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hcHBsaWNhdGlvbi1hY3Rpb25zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hcHBsaWNhdGlvbnMtc3RhdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4394:
/*!*********************************************************!*\
  !*** ./src/app/seeker/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeekerDashboardComponent: () => (/* binding */ SeekerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/application.service */ 9018);
/* harmony import */ var _core_services_saved_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/saved-job.service */ 9361);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);











function SeekerDashboardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SeekerDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "mat-card", 10)(2, "mat-card-content")(3, "div", 11)(4, "div", 12)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Total Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-card", 10)(13, "mat-card-content")(14, "div", 11)(15, "div", 14)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13)(19, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Pending Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-card", 10)(24, "mat-card-content")(25, "div", 11)(26, "div", 15)(27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13)(30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Shortlisted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-card", 10)(35, "mat-card-content")(36, "div", 11)(37, "div", 16)(38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 13)(41, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Saved Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dashboardStats.totalApplications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dashboardStats.pendingApplications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dashboardStats.shortlistedApplications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dashboardStats.savedJobs);
  }
}
function SeekerDashboardComponent_div_8_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeekerDashboardComponent_div_8_div_40_div_1_Template_div_click_0_listener() {
      const job_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.viewJobDetails(job_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 42)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "bookmark_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 44)(7, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 46)(10, "span", 47)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 48)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 49)(19, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeekerDashboardComponent_div_8_div_40_div_1_Template_button_click_19_listener($event) {
      const job_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      ctx_r0.viewJobDetails(job_r3.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r3.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r3.salary, " ");
  }
}
function SeekerDashboardComponent_div_8_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SeekerDashboardComponent_div_8_div_40_div_1_Template, 21, 4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dashboardStats.recommendedJobs);
  }
}
function SeekerDashboardComponent_div_8_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51)(1, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "work_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No recommended jobs available at the moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeekerDashboardComponent_div_8_div_41_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToJobs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Browse All Jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SeekerDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "mat-card")(3, "mat-card-header")(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Application Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content")(7, "div", 19)(8, "div", 20)(9, "div", 21)(10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Success Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "mat-progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 26)(17, "div", 27)(18, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 27)(23, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 27)(28, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 18)(33, "mat-card")(34, "mat-card-header")(35, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Recommended Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Based on your profile and preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, SeekerDashboardComponent_div_8_div_40_Template, 2, 1, "div", 31)(41, SeekerDashboardComponent_div_8_div_41_Template, 7, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 18)(43, "mat-card")(44, "mat-card-header")(45, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Recent Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-card-content")(48, "div", 33)(49, "div", 34)(50, "div", 35)(51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 36)(54, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Last 7 days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 34)(59, "div", 35)(60, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 36)(63, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Check your notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.getProgressPercentage(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.getProgressPercentage());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Applied: ", ctx_r0.dashboardStats.totalApplications, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Shortlisted: ", ctx_r0.dashboardStats.shortlistedApplications, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rejected: ", ctx_r0.dashboardStats.rejectedApplications, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dashboardStats.recommendedJobs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dashboardStats.recommendedJobs.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.applicationsThisWeek, " applications this week");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.dashboardStats.unreadNotifications, " unread notifications");
  }
}
function SeekerDashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53)(1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeekerDashboardComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToJobs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Find Jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeekerDashboardComponent_div_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToApplications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " My Applications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeekerDashboardComponent_div_9_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.navigateToProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Update Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class SeekerDashboardComponent {
  constructor(router, authService, applicationService, savedJobService) {
    this.router = router;
    this.authService = authService;
    this.applicationService = applicationService;
    this.savedJobService = savedJobService;
    this.dashboardStats = {
      totalApplications: 0,
      pendingApplications: 0,
      shortlistedApplications: 0,
      rejectedApplications: 0,
      savedJobs: 0,
      unreadNotifications: 0,
      applicationsThisWeek: 0,
      recommendedJobs: []
    };
    this.isLoading = true;
    this.currentUser = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadDashboardData();
  }
  loadDashboardData() {
    if (!this.currentUser) {
      this.isLoading = false;
      return;
    }
    // Get real application data for the current user
    this.applicationService.getApplicationsByJobSeeker(this.currentUser.id).subscribe({
      next: applications => {
        // Calculate statistics from real data
        this.dashboardStats.totalApplications = applications.length;
        this.dashboardStats.pendingApplications = applications.filter(app => app.status === 'APPLIED' || app.status === 'INTERVIEW_SCHEDULED').length;
        this.dashboardStats.shortlistedApplications = applications.filter(app => app.status === 'SHORTLISTED').length;
        this.dashboardStats.rejectedApplications = applications.filter(app => app.status === 'REJECTED').length;
        // Get saved jobs count
        this.savedJobService.getSavedJobs().subscribe({
          next: savedJobs => {
            this.dashboardStats.savedJobs = savedJobs.length;
            this.isLoading = false;
          },
          error: () => {
            this.dashboardStats.savedJobs = 0;
            this.isLoading = false;
          }
        });
      },
      error: () => {
        // If API fails, set default values
        this.dashboardStats = {
          totalApplications: 0,
          pendingApplications: 0,
          shortlistedApplications: 0,
          rejectedApplications: 0,
          savedJobs: 0,
          unreadNotifications: 0,
          applicationsThisWeek: 0,
          recommendedJobs: []
        };
        this.isLoading = false;
      }
    });
  }
  navigateToJobs() {
    this.router.navigate(['/seeker/jobs']);
  }
  navigateToApplications() {
    this.router.navigate(['/seeker/applications']);
  }
  navigateToProfile() {
    this.router.navigate(['/seeker/profile']);
  }
  navigateToSavedJobs() {
    this.router.navigate(['/seeker/saved-jobs']);
  }
  viewJobDetails(jobId) {
    this.router.navigate(['/seeker/jobs', jobId]);
  }
  getApplicationStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'applied':
        return 'primary';
      case 'shortlisted':
        return 'accent';
      case 'rejected':
        return 'warn';
      case 'hired':
        return 'primary';
      default:
        return 'primary';
    }
  }
  getProgressPercentage() {
    const total = this.dashboardStats.totalApplications;
    if (total === 0) return 0;
    return Math.round(this.dashboardStats.shortlistedApplications / total * 100);
  }
  static {
    this.ɵfac = function SeekerDashboardComponent_Factory(t) {
      return new (t || SeekerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_application_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_saved_job_service__WEBPACK_IMPORTED_MODULE_2__.SavedJobService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SeekerDashboardComponent,
      selectors: [["app-seeker-dashboard"]],
      decls: 10,
      vars: 5,
      consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "subtitle"], ["class", "loading-spinner", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], ["class", "dashboard-content", 4, "ngIf"], ["class", "quick-actions", 4, "ngIf"], [1, "loading-spinner"], ["diameter", "40"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-content"], [1, "stat-icon", "applications"], [1, "stat-info"], [1, "stat-icon", "pending"], [1, "stat-icon", "shortlisted"], [1, "stat-icon", "saved"], [1, "dashboard-content"], [1, "content-section"], [1, "progress-container"], [1, "progress-stats"], [1, "progress-item"], [1, "progress-label"], [1, "progress-value"], [1, "progress-bar"], ["mode", "determinate", "color", "primary", 3, "value"], [1, "status-breakdown"], [1, "status-item"], [1, "status-icon", "applied"], [1, "status-icon", "shortlisted"], [1, "status-icon", "rejected"], ["class", "jobs-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "activity-list"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-content"], [1, "activity-text"], [1, "activity-time"], [1, "jobs-list"], ["class", "job-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "job-card", 3, "click"], [1, "job-header"], [1, "bookmark-icon"], [1, "job-details"], [1, "company"], [1, "job-meta"], [1, "location"], [1, "salary"], [1, "job-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "empty-state"], [1, "empty-icon"], [1, "quick-actions"], ["mat-fab", "", "extended", "", "color", "primary", 3, "click"], ["mat-fab", "", "extended", "", 3, "click"]],
      template: function SeekerDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Track your job search journey and discover new opportunities");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SeekerDashboardComponent_div_6_Template, 2, 0, "div", 3)(7, SeekerDashboardComponent_div_7_Template, 45, 4, "div", 4)(8, SeekerDashboardComponent_div_8_Template, 67, 9, "div", 5)(9, SeekerDashboardComponent_div_9_Template, 13, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome back, ", ctx.currentUser == null ? null : ctx.currentUser.firstName, "! \uD83D\uDC4B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatFabButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner],
      styles: [".dashboard-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 600;\n  color: #1976d2;\n  margin-bottom: 8px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.applications[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.pending[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.shortlisted[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-icon.saved[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: #333;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n\n.dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n}\n@media (min-width: 1024px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 1fr;\n  }\n}\n\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1976d2;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-icon.applied[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-icon.shortlisted[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-icon.rejected[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]:hover {\n  border-color: #1976d2;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #333;\n  font-weight: 600;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .bookmark-icon[_ngcontent-%COMP%] {\n  color: #666;\n  cursor: pointer;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .bookmark-icon[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n  margin-bottom: 8px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ccc;\n  margin-bottom: 16px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 24px;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1976d2;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%]   .activity-text[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-weight: 500;\n  color: #333;\n}\n.content-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%]   .activity-item[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%]   .activity-time[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #999;\n}\n\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  margin-top: 32px;\n  flex-wrap: wrap;\n}\n.quick-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .dashboard-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .quick-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxxREFBQTtBQURKO0FBR0k7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBRE47QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRlI7QUFJUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRlY7QUFLUTtFQUNFLDZEQUFBO0FBSFY7QUFNUTtFQUNFLDZEQUFBO0FBSlY7QUFPUTtFQUNFLDZEQUFBO0FBTFY7QUFRUTtFQUNFLDZEQUFBO0FBTlY7QUFXUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVRWO0FBWVE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBVlY7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQWRGO0FBZ0JFO0VBTEY7SUFNSSw4QkFBQTtFQWJGO0FBQ0Y7O0FBaUJFO0VBQ0UsWUFBQTtBQWRKO0FBaUJNO0VBQ0UsbUJBQUE7QUFmUjtBQWlCUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFmVjtBQWlCVTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQWZaO0FBa0JVO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBaEJaO0FBb0JRO0VBQ0UsbUJBQUE7QUFsQlY7QUF1QlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFyQlY7QUF1QlU7RUFDRSxlQUFBO0FBckJaO0FBdUJZO0VBQ0UsY0FBQTtBQXJCZDtBQXdCWTtFQUNFLGNBQUE7QUF0QmQ7QUF5Qlk7RUFDRSxjQUFBO0FBdkJkO0FBMkJVO0VBQ0UsV0FBQTtBQXpCWjtBQWdDTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUE5QlI7QUFnQ1E7RUFDRSxxQkFBQTtFQUNBLHdDQUFBO0FBOUJWO0FBaUNRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQS9CVjtBQWlDVTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQS9CWjtBQWtDVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBaENaO0FBa0NZO0VBQ0UsY0FBQTtBQWhDZDtBQXFDUTtFQUNFLG1CQUFBO0FBbkNWO0FBcUNVO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFuQ1o7QUFzQ1U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFwQ1o7QUFzQ1k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBcENkO0FBc0NjO0VBQ0UsZUFBQTtBQXBDaEI7QUEwQ1E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUF4Q1Y7QUE2Q0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUEzQ047QUE2Q007RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBM0NSO0FBOENNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBNUNSO0FBaURNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQS9DUjtBQWlEUTtFQUNFLG1CQUFBO0FBL0NWO0FBa0RRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFoRFY7QUFrRFU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWhEWjtBQW9EUTtFQUNFLE9BQUE7QUFsRFY7QUFvRFU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWxEWjtBQXFEVTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFuRFo7O0FBMkRBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXhERjtBQTBERTtFQUNFLGdCQUFBO0FBeERKOztBQTREQTtFQUNFO0lBQ0UsYUFBQTtFQXpERjtFQTZERTtJQUNFLGVBQUE7RUEzREo7RUErREE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUE3REY7RUFnRUE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUE5REY7RUFpRUE7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBL0RGO0VBaUVFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBL0RKO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5zdGF0LWNhcmQge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAuc3RhdC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuXG4gICAgICAuc3RhdC1pY29uIHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYXBwbGljYXRpb25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5wZW5kaW5nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zaG9ydGxpc3RlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmYWNmZSAwJSwgIzAwZjJmZSAxMDAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuc2F2ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0M2U5N2IgMCUsICMzOGY5ZDcgMTAwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN0YXQtaW5mbyB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGFzaGJvYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAyNHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gIH1cbn1cblxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIG1hdC1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgIC5wcm9ncmVzcy1zdGF0cyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgICAgLnByb2dyZXNzLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgLnByb2dyZXNzLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN0YXR1cy1icmVha2Rvd24ge1xuICAgICAgICAuc3RhdHVzLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICAuc3RhdHVzLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgICAgICAmLmFwcGxpZWQge1xuICAgICAgICAgICAgICBjb2xvcjogIzRjYWY1MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaG9ydGxpc3RlZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnJlamVjdGVkIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuam9icy1saXN0IHtcbiAgICAgIC5qb2ItY2FyZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzE5NzZkMjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmpvYi1oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm9va21hcmstaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2ItZGV0YWlscyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgIC5jb21wYW55IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuam9iLW1ldGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2ItYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVtcHR5LXN0YXRlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDMycHg7XG5cbiAgICAgIC5lbXB0eS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpdml0eS1saXN0IHtcbiAgICAgIC5hY3Rpdml0eS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpdml0eS1pY29uIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2aXR5LWNvbnRlbnQge1xuICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAuYWN0aXZpdHktdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWN0aXZpdHktdGltZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnF1aWNrLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgLnN0YXRzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLnF1aWNrLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2Vla2VyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UscURBQUE7QUFESjtBQUdJO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQUROO0FBSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZSO0FBSVE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUZWO0FBS1E7RUFDRSw2REFBQTtBQUhWO0FBTVE7RUFDRSw2REFBQTtBQUpWO0FBT1E7RUFDRSw2REFBQTtBQUxWO0FBUVE7RUFDRSw2REFBQTtBQU5WO0FBV1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFUVjtBQVlRO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVZWOztBQWlCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUFkRjtBQWdCRTtFQUxGO0lBTUksOEJBQUE7RUFiRjtBQUNGOztBQWlCRTtFQUNFLFlBQUE7QUFkSjtBQWlCTTtFQUNFLG1CQUFBO0FBZlI7QUFpQlE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZlY7QUFpQlU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFmWjtBQWtCVTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWhCWjtBQW9CUTtFQUNFLG1CQUFBO0FBbEJWO0FBdUJRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBckJWO0FBdUJVO0VBQ0UsZUFBQTtBQXJCWjtBQXVCWTtFQUNFLGNBQUE7QUFyQmQ7QUF3Qlk7RUFDRSxjQUFBO0FBdEJkO0FBeUJZO0VBQ0UsY0FBQTtBQXZCZDtBQTJCVTtFQUNFLFdBQUE7QUF6Qlo7QUFnQ007RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBOUJSO0FBZ0NRO0VBQ0UscUJBQUE7RUFDQSx3Q0FBQTtBQTlCVjtBQWlDUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEvQlY7QUFpQ1U7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUEvQlo7QUFrQ1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQWhDWjtBQWtDWTtFQUNFLGNBQUE7QUFoQ2Q7QUFxQ1E7RUFDRSxtQkFBQTtBQW5DVjtBQXFDVTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBbkNaO0FBc0NVO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBcENaO0FBc0NZO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXBDZDtBQXNDYztFQUNFLGVBQUE7QUFwQ2hCO0FBMENRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBeENWO0FBNkNJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBM0NOO0FBNkNNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQTNDUjtBQThDTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQTVDUjtBQWlETTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUEvQ1I7QUFpRFE7RUFDRSxtQkFBQTtBQS9DVjtBQWtEUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBaERWO0FBa0RVO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFoRFo7QUFvRFE7RUFDRSxPQUFBO0FBbERWO0FBb0RVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFsRFo7QUFxRFU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbkRaOztBQTJEQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF4REY7QUEwREU7RUFDRSxnQkFBQTtBQXhESjs7QUE0REE7RUFDRTtJQUNFLGFBQUE7RUF6REY7RUE2REU7SUFDRSxlQUFBO0VBM0RKO0VBK0RBO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0VBN0RGO0VBZ0VBO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0VBOURGO0VBaUVBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQS9ERjtFQWlFRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQS9ESjtBQUNGO0FBQ0EsZ3RYQUFndFgiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc3RhdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLnN0YXQtY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cblxuICAgIC5zdGF0LWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDE2cHg7XG5cbiAgICAgIC5zdGF0LWljb24ge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hcHBsaWNhdGlvbnMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnBlbmRpbmcge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMDkzZmIgMCUsICNmNTU3NmMgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNob3J0bGlzdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGZhY2ZlIDAlLCAjMDBmMmZlIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zYXZlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzQzZTk3YiAwJSwgIzM4ZjlkNyAxMDAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdC1pbmZvIHtcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kYXNoYm9hcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDI0cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgfVxufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgbWF0LWNhcmQge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgLnByb2dyZXNzLXN0YXRzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAucHJvZ3Jlc3MtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICAucHJvZ3Jlc3MtbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdHVzLWJyZWFrZG93biB7XG4gICAgICAgIC5zdGF0dXMtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICAgIC5zdGF0dXMtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgICAgICYuYXBwbGllZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNob3J0bGlzdGVkIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZjk4MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucmVqZWN0ZWQge1xuICAgICAgICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5qb2JzLWxpc3Qge1xuICAgICAgLmpvYi1jYXJkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuam9iLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ib29rbWFyay1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmpvYi1kZXRhaWxzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgLmNvbXBhbnkge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5qb2ItbWV0YSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcblxuICAgICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmpvYi1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZW1wdHktc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMzJweDtcblxuICAgICAgLmVtcHR5LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGl2aXR5LWxpc3Qge1xuICAgICAgLmFjdGl2aXR5LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2aXR5LWljb24ge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzE5NzZkMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktY29udGVudCB7XG4gICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgIC5hY3Rpdml0eS10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hY3Rpdml0eS10aW1lIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucXVpY2stYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBidXR0b24ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmRhc2hib2FyZC1oZWFkZXIge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cblxuICAuc3RhdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLmRhc2hib2FyZC1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cblxuICAucXVpY2stYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5974:
/*!*************************************************************!*\
  !*** ./src/app/seeker/job-details/job-details.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobDetailsComponent: () => (/* binding */ JobDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/application.service */ 9018);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_saved_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/saved-job.service */ 9361);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);












function JobDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading job details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function JobDetailsComponent_div_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formatSalary(ctx_r1.job.salaryMin, ctx_r1.job.salaryMax));
  }
}
function JobDetailsComponent_div_2_mat_card_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 27)(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.job.requirements, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function JobDetailsComponent_div_2_mat_card_48_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", skill_r3.trim(), " ");
  }
}
function JobDetailsComponent_div_2_mat_card_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 29)(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Skills Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content")(5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, JobDetailsComponent_div_2_mat_card_48_span_6_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getSkillsArray(ctx_r1.job.skillsRequired));
  }
}
function JobDetailsComponent_div_2_mat_card_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 33)(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Benefits");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.job.benefits, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function JobDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9)(6, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 12)(11, "div", 13)(12, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 13)(17, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "home_work");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, JobDetailsComponent_div_2_div_26_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 13)(28, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16)(33, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.saveJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.applyForJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-card", 19)(42, "mat-card-header")(43, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Job Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, JobDetailsComponent_div_2_mat_card_47_Template, 6, 1, "mat-card", 21)(48, JobDetailsComponent_div_2_mat_card_48_Template, 7, 1, "mat-card", 22)(49, JobDetailsComponent_div_2_mat_card_49_Template, 6, 1, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-card", 24)(51, "mat-card-header")(52, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-card-content")(55, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " View Company Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.job.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.job.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.job.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getJobTypeLabel(ctx_r1.job.jobType));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getWorkLocationLabel(ctx_r1.job.workLocation));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.job.salaryMin || ctx_r1.job.salaryMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Posted ", ctx_r1.getPostedDate(ctx_r1.job.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.isSaved ? "bookmark" : "bookmark_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.isSaved ? "Saved" : "Save Job", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isApplying || !ctx_r1.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.isApplying ? "hourglass_empty" : "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.isApplying ? "Applying..." : "Apply Now", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.job.description, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.job.requirements);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.job.skillsRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.job.benefits);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("About ", ctx_r1.job.company, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Learn more about ", ctx_r1.job.company, " and their work culture. ");
  }
}
function JobDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35)(1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Job Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "The job you're looking for doesn't exist or has been removed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobDetailsComponent_div_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Back to Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class JobDetailsComponent {
  constructor(route, router, jobService, applicationService, authService, savedJobService, snackBar) {
    this.route = route;
    this.router = router;
    this.jobService = jobService;
    this.applicationService = applicationService;
    this.authService = authService;
    this.savedJobService = savedJobService;
    this.snackBar = snackBar;
    this.job = null;
    this.isLoading = true;
    this.isApplying = false;
    this.isSaved = false;
    this.currentUser = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    if (jobId) {
      this.loadJobDetails(jobId);
      this.checkIfJobIsSaved(jobId);
    } else {
      this.snackBar.open('Invalid job ID', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/seeker/jobs']);
    }
  }
  loadJobDetails(jobId) {
    this.jobService.getJobById(jobId).subscribe({
      next: job => {
        this.job = job;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading job details:', error);
        this.snackBar.open('Failed to load job details', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/seeker/jobs']);
      }
    });
  }
  checkIfJobIsSaved(jobId) {
    if (!this.currentUser) return;
    this.savedJobService.checkIfJobSaved(jobId).subscribe({
      next: response => {
        this.isSaved = response.saved;
      },
      error: () => {
        this.isSaved = false;
      }
    });
  }
  applyForJob() {
    if (!this.currentUser) {
      this.snackBar.open('Please login to apply for jobs', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/auth/login']);
      return;
    }
    if (!this.job) return;
    this.isApplying = true;
    this.applicationService.applyForJob(this.job.id).subscribe({
      next: application => {
        this.isApplying = false;
        this.snackBar.open('Application submitted successfully!', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/seeker/applications']);
      },
      error: error => {
        this.isApplying = false;
        console.error('Error applying for job:', error);
        this.snackBar.open('Failed to submit application. Please try again.', 'Close', {
          duration: 3000
        });
      }
    });
  }
  saveJob() {
    if (!this.currentUser) {
      this.snackBar.open('Please login to save jobs', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/auth/login']);
      return;
    }
    if (!this.job) return;
    if (this.isSaved) {
      this.savedJobService.unsaveJob(this.job.id).subscribe({
        next: () => {
          this.isSaved = false;
          this.snackBar.open('Job removed from saved jobs', 'Close', {
            duration: 3000
          });
        },
        error: () => {
          this.snackBar.open('Failed to remove job from saved jobs', 'Close', {
            duration: 3000
          });
        }
      });
    } else {
      this.savedJobService.saveJob(this.job.id).subscribe({
        next: () => {
          this.isSaved = true;
          this.snackBar.open('Job saved successfully!', 'Close', {
            duration: 3000
          });
        },
        error: () => {
          this.snackBar.open('Failed to save job', 'Close', {
            duration: 3000
          });
        }
      });
    }
  }
  goBack() {
    this.router.navigate(['/seeker/jobs']);
  }
  getJobTypeLabel(jobType) {
    const typeMap = {
      'FULL_TIME': 'Full Time',
      'PART_TIME': 'Part Time',
      'CONTRACT': 'Contract',
      'INTERNSHIP': 'Internship',
      'FREELANCE': 'Freelance'
    };
    return typeMap[jobType] || jobType;
  }
  getWorkLocationLabel(workLocation) {
    const locationMap = {
      'ON_SITE': 'On Site',
      'REMOTE': 'Remote',
      'HYBRID': 'Hybrid'
    };
    return locationMap[workLocation] || workLocation;
  }
  formatSalary(salaryMin, salaryMax) {
    if (salaryMin && salaryMax) {
      return `$${salaryMin.toLocaleString()} - $${salaryMax.toLocaleString()}`;
    } else if (salaryMin) {
      return `$${salaryMin.toLocaleString()}+`;
    } else if (salaryMax) {
      return `Up to $${salaryMax.toLocaleString()}`;
    }
    return 'Salary not specified';
  }
  getPostedDate(postedDate) {
    const date = new Date(postedDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }
  getSkillsArray(skills) {
    if (!skills) return [];
    return skills.split(',').map(skill => skill.trim());
  }
  static {
    this.ɵfac = function JobDetailsComponent_Factory(t) {
      return new (t || JobDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_application_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_saved_job_service__WEBPACK_IMPORTED_MODULE_3__.SavedJobService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: JobDetailsComponent,
      selectors: [["app-job-details"]],
      decls: 4,
      vars: 3,
      consts: [[1, "job-details-container"], ["class", "loading-container", 4, "ngIf"], ["class", "job-content", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], [1, "loading-container"], ["diameter", "50"], [1, "job-content"], [1, "job-header"], ["mat-icon-button", "", 1, "back-button", 3, "click"], [1, "header-content"], [1, "job-title"], [1, "company-name"], [1, "job-meta"], [1, "meta-item"], [1, "meta-icon"], ["class", "meta-item", 4, "ngIf"], [1, "header-actions"], ["mat-stroked-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "job-description-card"], [1, "job-description", 3, "innerHTML"], ["class", "requirements-card", 4, "ngIf"], ["class", "skills-card", 4, "ngIf"], ["class", "benefits-card", 4, "ngIf"], [1, "company-card"], [1, "company-description"], ["mat-stroked-button", "", "color", "primary"], [1, "requirements-card"], [1, "requirements", 3, "innerHTML"], [1, "skills-card"], [1, "skills-tags"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"], [1, "benefits-card"], [1, "benefits", 3, "innerHTML"], [1, "error-container"], [1, "error-icon"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function JobDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, JobDetailsComponent_div_1_Template, 4, 0, "div", 1)(2, JobDetailsComponent_div_2_Template, 59, 19, "div", 2)(3, JobDetailsComponent_div_3_Template, 9, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.job);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.job);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner],
      styles: [".job-details-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 16px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n}\n\n.job-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.job-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 24px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 1px solid #e0e0e0;\n}\n.job-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 8px;\n}\n.job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: #333;\n  line-height: 1.2;\n}\n.job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin: 0 0 16px 0;\n  font-weight: 500;\n}\n.job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #666;\n  font-size: 14px;\n}\n.job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n}\n.job-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.job-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n.job-description-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%], .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%], .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n.job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p {\n  margin-bottom: 16px;\n}\n.job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p:last-child, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p:last-child, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p:last-child, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p:last-child, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p:last-child, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p:last-child, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p:last-child, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p:last-child, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p:last-child, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p:last-child, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p:last-child, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p:last-child, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     p:last-child, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     p:last-child, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     p:last-child {\n  margin-bottom: 0;\n}\n.job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul, .job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol {\n  margin-bottom: 16px;\n  padding-left: 20px;\n}\n.job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul:last-child, .job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol:last-child, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul:last-child, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol:last-child, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul:last-child, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol:last-child, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul:last-child, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol:last-child, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul:last-child, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol:last-child, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul:last-child, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol:last-child, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul:last-child, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol:last-child, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul:last-child, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol:last-child, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul:last-child, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol:last-child, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul:last-child, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol:last-child, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul:last-child, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol:last-child, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul:last-child, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol:last-child, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ul:last-child, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     ol:last-child, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ul:last-child, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     ol:last-child, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ul:last-child, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     ol:last-child {\n  margin-bottom: 0;\n}\n.job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li {\n  margin-bottom: 8px;\n}\n.job-description-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li:last-child, .job-description-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li:last-child, .job-description-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li:last-child, .requirements-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li:last-child, .requirements-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li:last-child, .requirements-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li:last-child, .skills-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li:last-child, .skills-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li:last-child, .skills-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li:last-child, .benefits-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li:last-child, .benefits-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li:last-child, .benefits-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li:last-child, .company-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]     li:last-child, .company-card[_ngcontent-%COMP%]   .requirements[_ngcontent-%COMP%]     li:last-child, .company-card[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]     li:last-child {\n  margin-bottom: 0;\n}\n.job-description-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.job-description-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  background: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.job-description-card[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 16px;\n  line-height: 1.5;\n}\n\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n  gap: 16px;\n}\n.error-container[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #f44336;\n}\n.error-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  max-width: 400px;\n}\n\n@media (max-width: 768px) {\n  .job-details-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .job-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .job-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .job-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 100%;\n  }\n  .job-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: auto;\n  }\n  .job-description-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .requirements-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .skills-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .benefits-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .company-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsT0FBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS1E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUhWO0FBU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVBKO0FBU0k7RUFDRSxnQkFBQTtBQVBOOztBQWlCRTs7Ozs7RUFDRSxrQkFBQTtBQVZKO0FBYUU7Ozs7Ozs7Ozs7Ozs7OztFQUdFLGdCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7Ozs7Ozs7Ozs7Ozs7OztFQUNFLG1CQUFBO0FBZU47QUFiTTs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsZ0JBQUE7QUE2QlI7QUF6Qkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7QUF1RE47QUFyRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUNFLGdCQUFBO0FBb0ZSO0FBaEZJOzs7Ozs7Ozs7Ozs7Ozs7RUFDRSxrQkFBQTtBQWdHTjtBQTlGTTs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsZ0JBQUE7QUE4R1I7QUF6R0U7Ozs7O0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBK0dKO0FBN0dJOzs7OztFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW1ITjtBQS9HRTs7Ozs7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXFISjs7QUFqSEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFvSEY7QUFsSEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQW9ISjtBQWpIRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBbUhKO0FBaEhFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWtISjs7QUE3R0E7RUFDRTtJQUNFLGFBQUE7RUFnSEY7RUE3R0E7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUErR0Y7RUE1R0k7SUFDRSxlQUFBO0VBOEdOO0VBM0dJO0lBQ0UsZUFBQTtFQTZHTjtFQTFHSTtJQUNFLFNBQUE7RUE0R047RUExR007SUFDRSxlQUFBO0VBNEdSO0VBdkdFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0VBeUdKO0VBdkdJO0lBQ0UsT0FBQTtJQUNBLGVBQUE7RUF5R047RUEvRkU7Ozs7O0lBQ0UsYUFBQTtFQXFHSjtBQUNGIiwiZmlsZSI6ImpvYi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpvYi1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBnYXA6IDE2cHg7XG5cbiAgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5qb2ItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLmpvYi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gIC5iYWNrLWJ1dHRvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuXG4gICAgLmpvYi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuXG4gICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmpvYi1tZXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDIwcHg7XG5cbiAgICAgIC5tZXRhLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAubWV0YS1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmpvYi1kZXNjcmlwdGlvbi1jYXJkLFxuLnJlcXVpcmVtZW50cy1jYXJkLFxuLnNraWxscy1jYXJkLFxuLmJlbmVmaXRzLWNhcmQsXG4uY29tcGFueS1jYXJkIHtcbiAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICB9XG5cbiAgLmpvYi1kZXNjcmlwdGlvbixcbiAgLnJlcXVpcmVtZW50cyxcbiAgLmJlbmVmaXRzIHtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgOjpuZy1kZWVwIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgdWwsXG4gICAgOjpuZy1kZWVwIG9sIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2tpbGxzLXRhZ3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogOHB4O1xuXG4gICAgLnNraWxsLXRhZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgICBjb2xvcjogIzE5NzZkMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuXG4gIC5jb21wYW55LWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDE2cHg7XG5cbiAgLmVycm9yLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5qb2ItZGV0YWlscy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuam9iLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgLmpvYi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cblxuICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmpvYi1tZXRhIHtcbiAgICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAgIC5tZXRhLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuam9iLWRlc2NyaXB0aW9uLWNhcmQsXG4gIC5yZXF1aXJlbWVudHMtY2FyZCxcbiAgLnNraWxscy1jYXJkLFxuICAuYmVuZWZpdHMtY2FyZCxcbiAgLmNvbXBhbnktY2FyZCB7XG4gICAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2Vla2VyL2pvYi1kZXRhaWxzL2pvYi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsT0FBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS1E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUhWO0FBU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVBKO0FBU0k7RUFDRSxnQkFBQTtBQVBOOztBQWlCRTs7Ozs7RUFDRSxrQkFBQTtBQVZKO0FBYUU7Ozs7Ozs7Ozs7Ozs7OztFQUdFLGdCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7Ozs7Ozs7Ozs7Ozs7OztFQUNFLG1CQUFBO0FBZU47QUFiTTs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsZ0JBQUE7QUE2QlI7QUF6Qkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7QUF1RE47QUFyRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUNFLGdCQUFBO0FBb0ZSO0FBaEZJOzs7Ozs7Ozs7Ozs7Ozs7RUFDRSxrQkFBQTtBQWdHTjtBQTlGTTs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsZ0JBQUE7QUE4R1I7QUF6R0U7Ozs7O0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBK0dKO0FBN0dJOzs7OztFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW1ITjtBQS9HRTs7Ozs7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXFISjs7QUFqSEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFvSEY7QUFsSEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQW9ISjtBQWpIRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBbUhKO0FBaEhFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWtISjs7QUE3R0E7RUFDRTtJQUNFLGFBQUE7RUFnSEY7RUE3R0E7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUErR0Y7RUE1R0k7SUFDRSxlQUFBO0VBOEdOO0VBM0dJO0lBQ0UsZUFBQTtFQTZHTjtFQTFHSTtJQUNFLFNBQUE7RUE0R047RUExR007SUFDRSxlQUFBO0VBNEdSO0VBdkdFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0VBeUdKO0VBdkdJO0lBQ0UsT0FBQTtJQUNBLGVBQUE7RUF5R047RUEvRkU7Ozs7O0lBQ0UsYUFBQTtFQXFHSjtBQUNGO0FBQ0Esby9OQUFvL04iLCJzb3VyY2VzQ29udGVudCI6WyIuam9iLWRldGFpbHMtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGdhcDogMTZweDtcblxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmpvYi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uam9iLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cbiAgLmJhY2stYnV0dG9uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG5cbiAgICAuam9iLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG5cbiAgICAuY29tcGFueS1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuam9iLW1ldGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMjBweDtcblxuICAgICAgLm1ldGEtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgIC5tZXRhLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgIH1cbiAgfVxufVxuXG4uam9iLWRlc2NyaXB0aW9uLWNhcmQsXG4ucmVxdWlyZW1lbnRzLWNhcmQsXG4uc2tpbGxzLWNhcmQsXG4uYmVuZWZpdHMtY2FyZCxcbi5jb21wYW55LWNhcmQge1xuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIH1cblxuICAuam9iLWRlc2NyaXB0aW9uLFxuICAucmVxdWlyZW1lbnRzLFxuICAuYmVuZWZpdHMge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgY29sb3I6ICMzMzM7XG5cbiAgICA6Om5nLWRlZXAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCB1bCxcbiAgICA6Om5nLWRlZXAgb2wge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5za2lsbHMtdGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuc2tpbGwtdGFnIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogI2UzZjJmZDtcbiAgICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgLmNvbXBhbnktZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxufVxuXG4uZXJyb3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcblxuICAuZXJyb3ItaWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGNvbG9yOiAjZjQ0MzM2O1xuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmpvYi1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5qb2ItaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcblxuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICAuam9iLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuY29tcGFueS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuam9iLW1ldGEge1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgLm1ldGEtaXRlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5qb2ItZGVzY3JpcHRpb24tY2FyZCxcbiAgLnJlcXVpcmVtZW50cy1jYXJkLFxuICAuc2tpbGxzLWNhcmQsXG4gIC5iZW5lZml0cy1jYXJkLFxuICAuY29tcGFueS1jYXJkIHtcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2016:
/*!***********************************************!*\
  !*** ./src/app/seeker/jobs/jobs.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsComponent: () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);














function JobsComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading jobs...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function JobsComponent_div_60_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No jobs found matching your criteria. Try adjusting your filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function JobsComponent_div_60_div_5_mat_card_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44)(1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatSalary(job_r2.salaryMin, job_r2.salaryMax));
  }
}
function JobsComponent_div_60_div_5_mat_card_1_div_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r4.trim(), " ");
  }
}
function JobsComponent_div_60_div_5_mat_card_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JobsComponent_div_60_div_5_mat_card_1_div_30_span_2_Template, 2, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 1, ctx_r2.getSkillsArray(job_r2.skillsRequired), 0, 5));
  }
}
function JobsComponent_div_60_div_5_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 35)(1, "mat-card-content")(2, "div", 36)(3, "div", 37)(4, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 41)(10, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 43)(14, "div", 44)(15, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 44)(20, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 44)(25, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "home_work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, JobsComponent_div_60_div_5_mat_card_1_div_29_Template, 5, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, JobsComponent_div_60_div_5_mat_card_1_div_30_Template, 4, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 48)(32, "span", 49)(33, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-card-actions", 50)(37, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobsComponent_div_60_div_5_mat_card_1_Template_button_click_37_listener() {
      const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.viewJobDetails(job_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " View Details & Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 10, job_r2.description, 0, 150), "", job_r2.description.length > 150 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getJobTypeLabel(job_r2.jobType));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getWorkLocationLabel(job_r2.workLocation));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", job_r2.salaryMin || job_r2.salaryMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", job_r2.skillsRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Posted ", ctx_r2.getPostedDate(job_r2.createdAt), " ");
  }
}
function JobsComponent_div_60_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JobsComponent_div_60_div_5_mat_card_1_Template, 39, 14, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.filteredJobs);
  }
}
function JobsComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, JobsComponent_div_60_p_4_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, JobsComponent_div_60_div_5_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.filteredJobs.length, " Jobs Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.filteredJobs.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.filteredJobs.length > 0);
  }
}
class JobsComponent {
  constructor(jobService, router, snackBar) {
    this.jobService = jobService;
    this.router = router;
    this.snackBar = snackBar;
    this.jobs = [];
    this.filteredJobs = [];
    this.isLoading = true;
    this.searchQuery = '';
    this.selectedFilters = {
      jobType: '',
      workLocation: '',
      location: '',
      salaryRange: ''
    };
  }
  ngOnInit() {
    this.loadJobs();
  }
  loadJobs() {
    this.isLoading = true;
    this.jobService.getAllActiveJobs().subscribe({
      next: jobs => {
        this.jobs = jobs;
        this.filteredJobs = jobs;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading jobs:', error);
        this.isLoading = false;
        this.snackBar.open('Failed to load jobs. Please try again.', 'Close', {
          duration: 3000
        });
      }
    });
  }
  searchJobs() {
    if (this.searchQuery.trim()) {
      this.jobService.searchJobs(this.searchQuery).subscribe({
        next: jobs => {
          this.filteredJobs = jobs;
        },
        error: error => {
          console.error('Error searching jobs:', error);
          this.snackBar.open('Search failed. Please try again.', 'Close', {
            duration: 3000
          });
        }
      });
    } else {
      this.filteredJobs = this.jobs;
    }
  }
  applyFilters() {
    // Apply filters logic here
    this.filteredJobs = this.jobs.filter(job => {
      let matches = true;
      if (this.selectedFilters.jobType && job.jobType !== this.selectedFilters.jobType) {
        matches = false;
      }
      if (this.selectedFilters.workLocation && job.workLocation !== this.selectedFilters.workLocation) {
        matches = false;
      }
      if (this.selectedFilters.location && !job.location.toLowerCase().includes(this.selectedFilters.location.toLowerCase())) {
        matches = false;
      }
      return matches;
    });
  }
  clearFilters() {
    this.selectedFilters = {
      jobType: '',
      workLocation: '',
      location: '',
      salaryRange: ''
    };
    this.filteredJobs = this.jobs;
  }
  viewJobDetails(jobId) {
    this.router.navigate(['/seeker/jobs', jobId]);
  }
  getJobTypeLabel(jobType) {
    const typeMap = {
      'FULL_TIME': 'Full Time',
      'PART_TIME': 'Part Time',
      'CONTRACT': 'Contract',
      'INTERNSHIP': 'Internship',
      'FREELANCE': 'Freelance'
    };
    return typeMap[jobType] || jobType;
  }
  getWorkLocationLabel(workLocation) {
    const locationMap = {
      'ON_SITE': 'On Site',
      'REMOTE': 'Remote',
      'HYBRID': 'Hybrid'
    };
    return locationMap[workLocation] || workLocation;
  }
  formatSalary(salaryMin, salaryMax) {
    if (salaryMin && salaryMax) {
      return `$${salaryMin.toLocaleString()} - $${salaryMax.toLocaleString()}`;
    } else if (salaryMin) {
      return `$${salaryMin.toLocaleString()}+`;
    } else if (salaryMax) {
      return `Up to $${salaryMax.toLocaleString()}`;
    }
    return 'Salary not specified';
  }
  getPostedDate(postedDate) {
    const date = new Date(postedDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }
  getSkillsArray(skills) {
    if (!skills) return [];
    return skills.split(',').map(skill => skill.trim());
  }
  static {
    this.ɵfac = function JobsComponent_Factory(t) {
      return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: JobsComponent,
      selectors: [["app-jobs"]],
      decls: 61,
      vars: 7,
      consts: [[1, "jobs-container"], [1, "search-header"], [1, "search-section"], [1, "search-card"], [1, "search-bar"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Job title, skills, or company", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "filters-section"], [1, "filter-row"], ["appearance", "outline"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", ""], ["value", "FULL_TIME"], ["value", "PART_TIME"], ["value", "CONTRACT"], ["value", "INTERNSHIP"], ["value", "FREELANCE"], ["value", "ON_SITE"], ["value", "REMOTE"], ["value", "HYBRID"], ["matInput", "", "placeholder", "City or State", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "filter-actions"], ["mat-stroked-button", "", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "results-section", 4, "ngIf"], [1, "loading-container"], ["diameter", "50"], [1, "results-section"], [1, "results-header"], [4, "ngIf"], ["class", "jobs-grid", 4, "ngIf"], [1, "jobs-grid"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-title-section"], [1, "job-title"], [1, "company-name"], [1, "job-actions"], [1, "job-details"], [1, "job-description"], [1, "job-meta"], [1, "meta-item"], [1, "meta-icon"], ["class", "meta-item", 4, "ngIf"], ["class", "job-requirements", 4, "ngIf"], [1, "job-footer"], [1, "posted-date"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "job-requirements"], [1, "skills-tags"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"]],
      template: function JobsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Find Your Dream Job");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Discover opportunities that match your skills and aspirations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "mat-card", 3)(8, "mat-card-content")(9, "div", 4)(10, "mat-form-field", 5)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search Jobs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function JobsComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function JobsComponent_Template_input_keyup_enter_13_listener() {
            return ctx.searchJobs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_16_listener() {
            return ctx.searchJobs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "mat-form-field", 11)(23, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Job Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function JobsComponent_Template_mat_select_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedFilters.jobType, $event) || (ctx.selectedFilters.jobType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function JobsComponent_Template_mat_select_selectionChange_25_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "All Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Full Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Part Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Contract");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Internship");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Freelance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 11)(39, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Work Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function JobsComponent_Template_mat_select_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedFilters.workLocation, $event) || (ctx.selectedFilters.workLocation = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function JobsComponent_Template_mat_select_selectionChange_41_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "All Locations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "On Site");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Remote");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Hybrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 11)(51, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function JobsComponent_Template_input_ngModelChange_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedFilters.location, $event) || (ctx.selectedFilters.location = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function JobsComponent_Template_input_keyup_enter_53_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23)(55, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_55_listener() {
            return ctx.clearFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Clear Filters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, JobsComponent_div_59_Template, 4, 0, "div", 25)(60, JobsComponent_div_60_Template, 6, 3, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedFilters.jobType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedFilters.workLocation);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedFilters.location);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
      styles: [".jobs-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n}\n\n.search-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.search-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 600;\n  color: #1976d2;\n  margin-bottom: 8px;\n}\n.search-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n\n.search-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  margin-bottom: 24px;\n}\n.search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.loading-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n}\n\n.results-section[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.results-section[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.results-section[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  border: 1px solid #e0e0e0;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 4px 0;\n  line-height: 1.3;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #666;\n  margin: 0;\n  font-weight: 500;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-actions[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  color: #555;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  font-size: 0.95rem;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1976d2;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-requirements[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-requirements[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-requirements[_ngcontent-%COMP%]   .skills-tags[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #333;\n  padding: 4px 8px;\n  border-radius: 16px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .posted-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.85rem;\n  color: #999;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .posted-date[_ngcontent-%COMP%]   .meta-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 16px 0 0 0;\n  gap: 12px;\n}\n\n@media (max-width: 768px) {\n  .jobs-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .search-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .search-section[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-actions[_ngcontent-%COMP%] {\n    margin-left: 0;\n    align-self: flex-end;\n  }\n  .results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .results-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUlBO0VBQ0UsbUJBQUE7QUFERjtBQUlJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRk47QUFJTTtFQUNFLE9BQUE7QUFGUjtBQU9NO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBTFI7QUFRTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQU5SOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBVEY7QUFXRTtFQUNFLG1CQUFBO0FBVEo7QUFZRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVZKOztBQWVFO0VBQ0UsbUJBQUE7QUFaSjtBQWNJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVpOO0FBZUk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQWJOO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFmSjtBQWlCSTtFQUNFLHFEQUFBO0VBQ0EseUJBQUE7QUFmTjtBQWlCTTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFmUjtBQWtCTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoQlI7QUFrQlE7RUFDRSxPQUFBO0FBaEJWO0FBa0JVO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaEJaO0FBbUJVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFqQlo7QUFxQlE7RUFDRSxpQkFBQTtBQW5CVjtBQXdCUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0QlY7QUF5QlE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQXZCVjtBQXlCVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF2Qlo7QUF5Qlk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXZCZDtBQTRCUTtFQUNFLG1CQUFBO0FBMUJWO0FBNEJVO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBMUJaO0FBNEJZO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUExQmQ7QUFnQ1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBOUJaO0FBZ0NZO0VBQ0UsZUFBQTtBQTlCZDtBQW9DTTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQWxDUjs7QUF3Q0E7RUFDRTtJQUNFLGFBQUE7RUFyQ0Y7RUF5Q0U7SUFDRSxlQUFBO0VBdkNKO0VBNkNJO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VBM0NOO0VBNkNNO0lBQ0UsV0FBQTtFQTNDUjtFQThDTTtJQUNFLFdBQUE7RUE1Q1I7RUFpRE07SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUEvQ1I7RUFrRE07SUFDRSx1QkFBQTtFQWhEUjtFQXlETTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQXZEUjtFQXlEUTtJQUNFLGNBQUE7SUFDQSxvQkFBQTtFQXZEVjtFQTREUTtJQUNFLHNCQUFBO0lBQ0EsUUFBQTtFQTFEVjtFQThETTtJQUNFLHNCQUFBO0VBNURSO0VBOERRO0lBQ0UsV0FBQTtFQTVEVjtBQUNGIiwiZmlsZSI6ImpvYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9icy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5zZWFyY2gtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5zZWFyY2gtY2FyZCB7XG4gICAgLnNlYXJjaC1iYXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgIC5zZWFyY2gtZmllbGQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5maWx0ZXJzLXNlY3Rpb24ge1xuICAgICAgLmZpbHRlci1yb3cge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZmlsdGVyLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuXG4gIG1hdC1zcGlubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cblxuLnJlc3VsdHMtc2VjdGlvbiB7XG4gIC5yZXN1bHRzLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLmpvYnMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDI0cHg7XG5cbiAgICAuam9iLWNhcmQge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgLmpvYi1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIC5qb2ItdGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgIC5qb2ItdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2ItYWN0aW9ucyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmpvYi1kZXRhaWxzIHtcbiAgICAgICAgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2ItbWV0YSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgICAubWV0YS1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuXG4gICAgICAgICAgICAubWV0YS1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzE5NzZkMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuam9iLXJlcXVpcmVtZW50cyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgIC5za2lsbHMtdGFncyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgICAgIC5za2lsbC10YWcge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2ItZm9vdGVyIHtcbiAgICAgICAgICAucG9zdGVkLWRhdGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuXG4gICAgICAgICAgICAubWV0YS1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDAgMDtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmpvYnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLnNlYXJjaC1oZWFkZXIge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXNlY3Rpb24ge1xuICAgIC5zZWFyY2gtY2FyZCB7XG4gICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTJweDtcblxuICAgICAgICAuc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZpbHRlcnMtc2VjdGlvbiB7XG4gICAgICAgIC5maWx0ZXItcm93IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVyLWFjdGlvbnMge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJlc3VsdHMtc2VjdGlvbiB7XG4gICAgLmpvYnMtZ3JpZCB7XG4gICAgICAuam9iLWNhcmQge1xuICAgICAgICAuam9iLWhlYWRlciB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgICAuam9iLWFjdGlvbnMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuam9iLWRldGFpbHMge1xuICAgICAgICAgIC5qb2ItbWV0YSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2Vla2VyL2pvYnMvam9icy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUE7RUFDRSxtQkFBQTtBQURGO0FBSUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUlNO0VBQ0UsT0FBQTtBQUZSO0FBT007RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQVFNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBTlI7O0FBWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFURjtBQVdFO0VBQ0UsbUJBQUE7QUFUSjtBQVlFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBVko7O0FBZUU7RUFDRSxtQkFBQTtBQVpKO0FBY0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWk47QUFlSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBYk47QUFpQkU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQWZKO0FBaUJJO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBQWZOO0FBaUJNO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQWZSO0FBa0JNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhCUjtBQWtCUTtFQUNFLE9BQUE7QUFoQlY7QUFrQlU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFoQlo7QUFtQlU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWpCWjtBQXFCUTtFQUNFLGlCQUFBO0FBbkJWO0FBd0JRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXRCVjtBQXlCUTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBdkJWO0FBeUJVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXZCWjtBQXlCWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBdkJkO0FBNEJRO0VBQ0UsbUJBQUE7QUExQlY7QUE0QlU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUExQlo7QUE0Qlk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTFCZDtBQWdDVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUE5Qlo7QUFnQ1k7RUFDRSxlQUFBO0FBOUJkO0FBb0NNO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FBbENSOztBQXdDQTtFQUNFO0lBQ0UsYUFBQTtFQXJDRjtFQXlDRTtJQUNFLGVBQUE7RUF2Q0o7RUE2Q0k7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUEzQ047RUE2Q007SUFDRSxXQUFBO0VBM0NSO0VBOENNO0lBQ0UsV0FBQTtFQTVDUjtFQWlETTtJQUNFLDBCQUFBO0lBQ0EsU0FBQTtFQS9DUjtFQWtETTtJQUNFLHVCQUFBO0VBaERSO0VBeURNO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VBdkRSO0VBeURRO0lBQ0UsY0FBQTtJQUNBLG9CQUFBO0VBdkRWO0VBNERRO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0VBMURWO0VBOERNO0lBQ0Usc0JBQUE7RUE1RFI7RUE4RFE7SUFDRSxXQUFBO0VBNURWO0FBQ0Y7QUFDQSx3elJBQXd6UiIsInNvdXJjZXNDb250ZW50IjpbIi5qb2JzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLnNlYXJjaC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLnNlYXJjaC1jYXJkIHtcbiAgICAuc2VhcmNoLWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgLnNlYXJjaC1maWVsZCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpbHRlcnMtc2VjdGlvbiB7XG4gICAgICAuZmlsdGVyLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5maWx0ZXItYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG5cbiAgbWF0LXNwaW5uZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuXG4ucmVzdWx0cy1zZWN0aW9uIHtcbiAgLnJlc3VsdHMtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuam9icy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMjRweDtcblxuICAgIC5qb2ItY2FyZCB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuXG4gICAgICAuam9iLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgLmpvYi10aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgLmpvYi10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmpvYi1hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuam9iLWRldGFpbHMge1xuICAgICAgICAuam9iLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmpvYi1tZXRhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgIC5tZXRhLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgICAgICAgIC5tZXRhLWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2ItcmVxdWlyZW1lbnRzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgLnNraWxscy10YWdzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAgICAgLnNraWxsLXRhZyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmpvYi1mb290ZXIge1xuICAgICAgICAgIC5wb3N0ZWQtZGF0ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG5cbiAgICAgICAgICAgIC5tZXRhLWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMCAwO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuam9icy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuc2VhcmNoLWhlYWRlciB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgLnNlYXJjaC1jYXJkIHtcbiAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAgIC5zZWFyY2gtZmllbGQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZmlsdGVycy1zZWN0aW9uIHtcbiAgICAgICAgLmZpbHRlci1yb3cge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItYWN0aW9ucyB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVzdWx0cy1zZWN0aW9uIHtcbiAgICAuam9icy1ncmlkIHtcbiAgICAgIC5qb2ItY2FyZCB7XG4gICAgICAgIC5qb2ItaGVhZGVyIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGdhcDogMTJweDtcblxuICAgICAgICAgIC5qb2ItYWN0aW9ucyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2ItZGV0YWlscyB7XG4gICAgICAgICAgLmpvYi1tZXRhIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5671:
/*!*****************************************!*\
  !*** ./src/app/seeker/seeker.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeekerModule: () => (/* binding */ SeekerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4394);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs/jobs.component */ 2016);
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-details/job-details.component */ 5974);
/* harmony import */ var _applications_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applications/applications.component */ 1358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);


























const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SeekerDashboardComponent
}, {
  path: 'jobs',
  component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_1__.JobsComponent
}, {
  path: 'jobs/:id',
  component: _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__.JobDetailsComponent
}, {
  path: 'applications',
  component: _applications_applications_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationsComponent
}, {
  path: 'profile',
  component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_1__.JobsComponent // Will be replaced with profile component
}, {
  path: 'saved-jobs',
  component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_1__.JobsComponent // Will be replaced with saved jobs component
}];
class SeekerModule {
  static {
    this.ɵfac = function SeekerModule_Factory(t) {
      return new (t || SeekerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SeekerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SeekerModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SeekerDashboardComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_1__.JobsComponent, _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__.JobDetailsComponent, _applications_applications_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_seeker_seeker_module_ts.js.map