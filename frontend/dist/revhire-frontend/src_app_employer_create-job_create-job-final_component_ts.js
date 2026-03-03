"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["src_app_employer_create-job_create-job-final_component_ts"],{

/***/ 9151:
/*!*******************************************************************!*\
  !*** ./src/app/employer/create-job/create-job-final.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateJobComponent: () => (/* binding */ CreateJobComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notification.service */ 5567);
























function CreateJobComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Job title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Job type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Work location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Minimum salary must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Maximum salary must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Job description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Skills are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Must be at least 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_error_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Experience must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateJobComponent_mat_icon_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class CreateJobComponent {
  constructor(fb, jobService, router, snackBar, notificationService) {
    this.fb = fb;
    this.jobService = jobService;
    this.router = router;
    this.snackBar = snackBar;
    this.notificationService = notificationService;
    this.isSubmitting = false;
    this.jobForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      skillsRequired: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      educationRequired: [''],
      deadline: [null],
      numberOfOpenings: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      experienceRequired: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      salaryMin: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      salaryMax: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      jobType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      workLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  ngOnInit() {
    // Debug: Log initial form values
    console.log('Initial form values:', this.jobForm.value);
    // Subscribe to value changes for debugging
    this.jobForm.valueChanges.subscribe(values => {
      console.log('Form values changed:', values);
    });
  }
  onSubmit() {
    if (this.jobForm.valid) {
      this.isSubmitting = true;
      const jobData = this.jobForm.value;
      this.jobService.createJobFromDialog(jobData).subscribe({
        next: newJob => {
          console.log('Job created successfully:', newJob);
          // Create notification for successful job posting
          this.createJobPostedNotification(newJob.title, newJob.id);
          this.snackBar.open('Job posted successfully!', 'Close', {
            duration: 3000
          });
          this.router.navigate(['/employer/jobs']);
        },
        error: error => {
          console.error('Error creating job:', error);
          this.snackBar.open('Error posting job. Please try again.', 'Close', {
            duration: 3000
          });
          this.isSubmitting = false;
        }
      });
    }
  }
  createJobPostedNotification(jobTitle, jobId) {
    const notification = {
      type: 'NEW_JOB',
      title: 'Job Posted Successfully',
      message: `Your job "${jobTitle}" has been posted successfully and is now live.`,
      isRead: false,
      relatedJobId: jobId
    };
    this.notificationService.createNotification(notification).subscribe({
      next: () => {
        console.log('Job posted notification created');
        // Update unread count
        this.notificationService.getUnreadCount().subscribe({
          next: response => {
            this.notificationService.updateUnreadCount(response.count);
          }
        });
      },
      error: error => {
        console.error('Error creating job posted notification:', error);
      }
    });
  }
  goBack() {
    this.router.navigate(['/employer']);
  }
  static {
    this.ɵfac = function CreateJobComponent_Factory(t) {
      return new (t || CreateJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CreateJobComponent,
      selectors: [["app-create-job"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 94,
      vars: 16,
      consts: [["picker", ""], [1, "container"], [1, "header"], ["mat-icon-button", "", 3, "click"], [1, "form-container"], [3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "title", "placeholder", "e.g. Senior Software Engineer"], [4, "ngIf"], ["matInput", "", "formControlName", "location", "placeholder", "e.g. New York, NY"], ["formControlName", "jobType"], ["value", "FULL_TIME"], ["value", "PART_TIME"], ["value", "CONTRACT"], ["value", "INTERNSHIP"], ["value", "FREELANCE"], ["formControlName", "workLocation"], ["value", "ON_SITE"], ["value", "REMOTE"], ["value", "HYBRID"], [1, "salary-row"], ["matInput", "", "type", "number", "formControlName", "salaryMin"], ["matInput", "", "type", "number", "formControlName", "salaryMax"], ["matInput", "", "formControlName", "description", "rows", "6", "placeholder", "Describe role, responsibilities, and what you're looking for..."], ["matInput", "", "formControlName", "skillsRequired", "rows", "3", "placeholder", "List specific skills required for this role..."], ["matInput", "", "formControlName", "educationRequired", "placeholder", "e.g. Bachelor's degree in Computer Science"], [1, "form-row"], ["matInput", "", "formControlName", "deadline", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matInput", "", "type", "number", "formControlName", "numberOfOpenings"], ["matInput", "", "type", "number", "formControlName", "experienceRequired", "placeholder", "e.g. 2"], [1, "actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "spinner"]],
      template: function CreateJobComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateJobComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Post New Job");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateJobComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Job Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreateJobComponent_mat_error_13_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CreateJobComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field")(20, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Job Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-select", 9)(23, "mat-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Full Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Part Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Contract");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Internship");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Freelance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CreateJobComponent_mat_error_33_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-form-field")(35, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Work Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-select", 15)(38, "mat-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "On Site");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Remote");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Hybrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CreateJobComponent_mat_error_44_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19)(46, "mat-form-field")(47, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Min Salary (\u20B9)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, CreateJobComponent_mat_error_50_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-form-field")(52, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Max Salary (\u20B9)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, CreateJobComponent_mat_error_55_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-form-field")(57, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Job Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "textarea", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, CreateJobComponent_mat_error_60_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-form-field")(62, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Skills Required");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "textarea", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, CreateJobComponent_mat_error_65_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-form-field")(67, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Education Required");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 25)(71, "mat-form-field")(72, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Application Deadline");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 26)(75, "mat-datepicker-toggle", 27)(76, "mat-datepicker", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "mat-form-field")(79, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Number of Openings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, CreateJobComponent_mat_error_82_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "mat-form-field")(84, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Experience Required (years)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, CreateJobComponent_mat_error_87_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 30)(89, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateJobComponent_Template_button_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, CreateJobComponent_mat_icon_92_Template, 2, 0, "mat-icon", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_12_0;
          let tmp_13_0;
          const picker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.jobForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.jobForm.get("title")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.jobForm.get("location")) == null ? null : tmp_3_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.jobForm.get("jobType")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.jobForm.get("workLocation")) == null ? null : tmp_5_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.jobForm.get("salaryMin")) == null ? null : tmp_6_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.jobForm.get("salaryMax")) == null ? null : tmp_7_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.jobForm.get("description")) == null ? null : tmp_8_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.jobForm.get("skillsRequired")) == null ? null : tmp_9_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", picker_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", picker_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.jobForm.get("numberOfOpenings")) == null ? null : tmp_12_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.jobForm.get("experienceRequired")) == null ? null : tmp_13_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.jobForm.valid || ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isSubmitting ? "Posting..." : "Post Job", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatNativeDateModule],
      styles: [".container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.salary-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.salary-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 20px;\n  border-top: 1px solid #e0e0e0;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 8px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1qb2ItZmluYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsT0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLE9BQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFBTjs7QUFHSTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHSTtFQUNFO0lBQUssdUJBQUE7RUFDVDtFQUFJO0lBQU8seUJBQUE7RUFHWDtBQUNGO0FBREk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBR047O0FBQUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFHTiIsImZpbGUiOiJjcmVhdGUtam9iLWZpbmFsLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG5cbiAgICAuc2FsYXJ5LXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zYWxhcnktcm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmZvcm0tcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tcm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICB9XG5cbiAgICAuc3Bpbm5lciB7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZXIvY3JlYXRlLWpvYi9jcmVhdGUtam9iLWZpbmFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLE9BQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSxPQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQU47O0FBR0k7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0FBQU47O0FBR0k7RUFDRTtJQUFLLHVCQUFBO0VBQ1Q7RUFBSTtJQUFPLHlCQUFBO0VBR1g7QUFDRjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUdOOztBQUFJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBR047QUFDQSw0NEVBQTQ0RSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG5cbiAgICAuc2FsYXJ5LXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zYWxhcnktcm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmZvcm0tcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tcm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICB9XG5cbiAgICAuc3Bpbm5lciB7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_employer_create-job_create-job-final_component_ts.js.map