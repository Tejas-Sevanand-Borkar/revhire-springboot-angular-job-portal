"use strict";
(self["webpackChunkrevhire_frontend"] = self["webpackChunkrevhire_frontend"] || []).push([["src_app_employer_jobs_edit-job_component_ts"],{

/***/ 5112:
/*!*****************************************************!*\
  !*** ./src/app/employer/jobs/edit-job.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditJobComponent: () => (/* binding */ EditJobComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/job.service */ 5091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);



























function EditJobComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading job details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EditJobComponent_div_12_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Job title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Job type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Work location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Minimum salary must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Maximum salary must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Job description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Skills are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Must be at least 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_error_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Experience must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_mat_icon_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditJobComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditJobComponent_div_12_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Job Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditJobComponent_div_12_mat_error_6_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EditJobComponent_div_12_mat_error_11_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Job Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-select", 17)(16, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Full Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Part Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Internship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Freelance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, EditJobComponent_div_12_mat_error_26_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field")(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Work Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 23)(31, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "On Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Remote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Hybrid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, EditJobComponent_div_12_mat_error_37_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27)(39, "mat-form-field")(40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Min Salary (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, EditJobComponent_div_12_mat_error_43_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field")(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Max Salary (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, EditJobComponent_div_12_mat_error_48_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field")(50, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Job Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, EditJobComponent_div_12_mat_error_53_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field")(55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Skills Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EditJobComponent_div_12_mat_error_58_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-form-field")(60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Education Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 33)(64, "mat-form-field")(65, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Application Deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 34)(68, "mat-datepicker-toggle", 35)(69, "mat-datepicker", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-form-field")(72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Number of Openings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, EditJobComponent_div_12_mat_error_75_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-form-field")(77, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Experience Required (years)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, EditJobComponent_div_12_mat_error_80_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 38)(82, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditJobComponent_div_12_Template_button_click_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, EditJobComponent_div_12_mat_icon_85_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    let tmp_14_0;
    const picker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.jobForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.jobForm.get("title")) == null ? null : tmp_3_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r1.jobForm.get("location")) == null ? null : tmp_4_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r1.jobForm.get("jobType")) == null ? null : tmp_5_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r1.jobForm.get("workLocation")) == null ? null : tmp_6_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.jobForm.get("salaryMin")) == null ? null : tmp_7_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.jobForm.get("salaryMax")) == null ? null : tmp_8_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r1.jobForm.get("description")) == null ? null : tmp_9_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r1.jobForm.get("skillsRequired")) == null ? null : tmp_10_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", picker_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", picker_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx_r1.jobForm.get("numberOfOpenings")) == null ? null : tmp_13_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r1.jobForm.get("experienceRequired")) == null ? null : tmp_14_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.jobForm.valid || ctx_r1.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.isSubmitting ? "Updating..." : "Update Job", " ");
  }
}
class EditJobComponent {
  constructor(fb, jobService, router, snackBar, route) {
    this.fb = fb;
    this.jobService = jobService;
    this.router = router;
    this.snackBar = snackBar;
    this.route = route;
    this.isSubmitting = false;
    this.isLoading = true;
    this.jobId = null;
    this.jobForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      skillsRequired: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      educationRequired: [''],
      deadline: [null],
      numberOfOpenings: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      experienceRequired: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      salaryMin: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      salaryMax: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      jobType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      workLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobId = +id;
      this.loadJobDetails(this.jobId);
    } else {
      this.snackBar.open('Invalid job ID', 'Close', {
        duration: 3000
      });
      this.goBack();
    }
  }
  loadJobDetails(jobId) {
    this.jobService.getJobById(jobId).subscribe({
      next: job => {
        this.jobForm.patchValue({
          title: job.title,
          description: job.description,
          skillsRequired: job.skillsRequired,
          educationRequired: job.educationRequired,
          deadline: job.deadline ? new Date(job.deadline) : null,
          numberOfOpenings: job.numberOfOpenings,
          experienceRequired: job.experienceRequired,
          salaryMin: job.salaryMin,
          salaryMax: job.salaryMax,
          jobType: job.jobType,
          workLocation: job.workLocation,
          location: job.location
        });
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading job details:', error);
        this.snackBar.open('Error loading job details', 'Close', {
          duration: 3000
        });
        this.goBack();
      }
    });
  }
  onSubmit() {
    if (this.jobForm.valid && this.jobId) {
      this.isSubmitting = true;
      const jobData = this.jobForm.value;
      this.jobService.updateJob(this.jobId, jobData).subscribe({
        next: updatedJob => {
          console.log('Job updated successfully:', updatedJob);
          this.snackBar.open('Job updated successfully!', 'Close', {
            duration: 3000
          });
          this.router.navigate(['/employer/jobs', this.jobId]);
        },
        error: error => {
          console.error('Error updating job:', error);
          this.snackBar.open('Error updating job. Please try again.', 'Close', {
            duration: 3000
          });
          this.isSubmitting = false;
        }
      });
    }
  }
  goBack() {
    if (this.jobId) {
      this.router.navigate(['/employer/jobs', this.jobId]);
    } else {
      this.router.navigate(['/employer/jobs']);
    }
  }
  static {
    this.ɵfac = function EditJobComponent_Factory(t) {
      return new (t || EditJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditJobComponent,
      selectors: [["app-edit-job"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 5,
      consts: [["picker", ""], [1, "container"], [1, "edit-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "spacer"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "form-container", 4, "ngIf"], [1, "spinner"], [1, "loading-container"], ["diameter", "40"], [1, "form-container"], [3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "title", "placeholder", "e.g. Senior Software Engineer"], [4, "ngIf"], ["matInput", "", "formControlName", "location", "placeholder", "e.g. New York, NY"], ["formControlName", "jobType"], ["value", "FULL_TIME"], ["value", "PART_TIME"], ["value", "CONTRACT"], ["value", "INTERNSHIP"], ["value", "FREELANCE"], ["formControlName", "workLocation"], ["value", "ON_SITE"], ["value", "REMOTE"], ["value", "HYBRID"], [1, "salary-row"], ["matInput", "", "type", "number", "formControlName", "salaryMin"], ["matInput", "", "type", "number", "formControlName", "salaryMax"], ["matInput", "", "formControlName", "description", "rows", "6", "placeholder", "Describe role, responsibilities, and what you're looking for..."], ["matInput", "", "formControlName", "skillsRequired", "rows", "3", "placeholder", "List specific skills required for this role..."], ["matInput", "", "formControlName", "educationRequired", "placeholder", "e.g. Bachelor's degree in Computer Science"], [1, "form-row"], ["matInput", "", "formControlName", "deadline", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matInput", "", "type", "number", "formControlName", "numberOfOpenings"], ["matInput", "", "type", "number", "formControlName", "experienceRequired", "placeholder", "e.g. 2"], [1, "actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function EditJobComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "mat-toolbar", 2)(2, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditJobComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Edit Job");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditJobComponent_Template_button_click_8_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditJobComponent_mat_icon_9_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EditJobComponent_div_11_Template, 4, 0, "div", 7)(12, EditJobComponent_div_12_Template, 87, 16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.jobForm.valid || ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isSubmitting ? "Updating..." : "Update Job", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbar],
      styles: [".container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.edit-toolbar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  margin-bottom: 24px;\n  border-radius: 8px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  gap: 16px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.salary-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.salary-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 20px;\n  border-top: 1px solid #e0e0e0;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 8px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtam9iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFBTjs7QUFHSTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLGNBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSxPQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsT0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUFOOztBQUdJO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtBQUFOOztBQUdJO0VBQ0U7SUFBSyx1QkFBQTtFQUNUO0VBQUk7SUFBTyx5QkFBQTtFQUdYO0FBQ0Y7QUFESTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFHTjs7QUFBSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUdOIiwiZmlsZSI6ImVkaXQtam9iLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuZWRpdC10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgfVxuXG4gICAgLnNhbGFyeS1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuc2FsYXJ5LXJvdyBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5mb3JtLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5mb3JtLXJvdyBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgfVxuXG4gICAgLnNwaW5uZXIge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZXIvam9icy9lZGl0LWpvYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQU47O0FBR0k7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsT0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLE9BQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFBTjs7QUFHSTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHSTtFQUNFO0lBQUssdUJBQUE7RUFDVDtFQUFJO0lBQU8seUJBQUE7RUFHWDtBQUNGO0FBREk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBR047O0FBQUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFHTjtBQUNBLGcwRkFBZzBGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5lZGl0LXRvb2xiYXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuXG4gICAgLnNwYWNlciB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG5cbiAgICAuc2FsYXJ5LXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zYWxhcnktcm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmZvcm0tcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tcm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICB9XG5cbiAgICAuc3Bpbm5lciB7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_employer_jobs_edit-job_component_ts.js.map