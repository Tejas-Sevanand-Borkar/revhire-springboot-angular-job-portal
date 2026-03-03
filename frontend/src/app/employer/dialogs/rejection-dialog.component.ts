import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface RejectionDialogData {
  applicationId: number;
  applicantName: string;
  jobTitle: string;
}

export interface RejectionDialogResult {
  reason: string;
  confirmed: boolean;
}

@Component({
  selector: 'app-rejection-dialog',
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>Reject Application</h2>
      
      <mat-dialog-content>
        <p>
          Are you sure you want to reject this application?
        </p>
        
        <div class="application-info">
          <p><strong>Applicant:</strong> {{data.applicantName}}</p>
          <p><strong>Position:</strong> {{data.jobTitle}}</p>
        </div>
        
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Rejection Reason (Optional)</mat-label>
          <textarea 
            matInput 
            [(ngModel)]="rejectionReason" 
            placeholder="Please provide a reason for rejection (optional)"
            rows="3"
            maxlength="500">
          </textarea>
          <mat-hint>{{rejectionReason.length || 0}}/500 characters</mat-hint>
        </mat-form-field>
      </mat-dialog-content>
      
      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">Cancel</button>
        <button 
          mat-raised-button 
          color="warn" 
          (click)="onConfirm()"
          [disabled]="isSubmitting">
          <mat-icon>block</mat-icon>
          Reject Application
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 20px;
      min-width: 400px;
    }
    
    .application-info {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
    }
    
    .application-info p {
      margin: 5px 0;
    }
    
    .full-width {
      width: 100%;
      margin-top: 15px;
    }
    
    mat-dialog-actions {
      margin-top: 20px;
    }
  `]
})
export class RejectionDialogComponent {
  rejectionReason: string = '';
  isSubmitting: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RejectionDialogComponent, RejectionDialogResult>,
    @Inject(MAT_DIALOG_DATA) public data: RejectionDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close({ confirmed: false, reason: '' });
  }

  onConfirm(): void {
    this.isSubmitting = true;
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      this.dialogRef.close({
        confirmed: true,
        reason: this.rejectionReason.trim()
      });
    }, 300);
  }
}
