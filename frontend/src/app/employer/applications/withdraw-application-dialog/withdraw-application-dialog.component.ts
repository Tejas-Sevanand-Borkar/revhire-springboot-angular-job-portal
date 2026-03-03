import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

export interface ApplicationWithJob {
  id: number;
  jobId?: number;
  applicantId?: number;
  applicantName: string;
  applicantEmail: string;
  status: string;
  appliedAt: string | Date;
  resumeUrl?: string;
  coverLetter?: string;
  jobTitle?: string;
  jobLocation?: string;
  jobType?: string;
  salaryMin?: number;
  salaryMax?: number;
}

export interface WithdrawDialogData {
  application: ApplicationWithJob;
}

export interface WithdrawDialogResult {
  reason: string;
}

@Component({
  selector: 'app-withdraw-application-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>Withdraw Application</h2>
      <mat-dialog-content>
        <p>Are you sure you want to withdraw this application?</p>
        <p><strong>Applicant:</strong> {{ data.application.applicantName }}</p>
        <p><strong>Job:</strong> {{ data.application.jobTitle }}</p>
        
        <mat-form-field appearance="fill" class="full-width no-outline">
          <mat-label>Reason for withdrawal (optional)</mat-label>
          <textarea matInput 
                    [(ngModel)]="withdrawReason" 
                    placeholder="Please provide a reason for withdrawing this application..."
                    rows="3">
          </textarea>
        </mat-form-field>
      </mat-dialog-content>
      
      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-raised-button 
                color="warn" 
                (click)="onConfirm()"
                [disabled]="!withdrawReason.trim()">
          Withdraw Application
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 20px;
      min-width: 400px;
    }
    
    .full-width {
      width: 100%;
      margin-top: 16px;
    }
    
    .no-outline ::ng-deep .mat-form-field-outline {
      display: none !important;
    }
    
    .no-outline ::ng-deep .mat-form-field-outline-start,
    .no-outline ::ng-deep .mat-form-field-outline-end,
    .no-outline ::ng-deep .mat-form-field-outline-gap {
      display: none !important;
    }
    
    .no-outline ::ng-deep .mat-form-field-underline {
      display: none !important;
    }
    
    .no-outline ::ng-deep .mat-form-field-ripple {
      display: none !important;
    }
    
    .no-outline ::ng-deep .mat-form-field-flex {
      background: #f5f5f5;
      border-radius: 4px;
      padding: 12px;
    }
    
    .no-outline ::ng-deep textarea {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
    
    mat-dialog-content {
      margin: 16px 0;
    }
    
    mat-dialog-actions {
      margin-bottom: 0;
    }
  `]
})
export class WithdrawApplicationDialog {
  withdrawReason: string = '';

  constructor(
    public dialogRef: MatDialogRef<WithdrawApplicationDialog, WithdrawDialogResult>,
    @Inject(MAT_DIALOG_DATA) public data: WithdrawDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.withdrawReason.trim()) {
      this.dialogRef.close({ reason: this.withdrawReason.trim() });
    }
  }
}
