import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface ResumeViewerData {
  resumePath: string;
  applicantName: string;
  jobTitle: string;
}

@Component({
  selector: 'app-resume-viewer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  template: `
    <div class="resume-viewer-container">
      <div class="viewer-header">
        <h2>Resume Viewer</h2>
        <button mat-icon-button (click)="closeDialog()" class="close-button">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      
      <div class="viewer-info">
        <p><strong>Applicant:</strong> {{ data.applicantName }}</p>
        <p><strong>Job:</strong> {{ data.jobTitle }}</p>
      </div>
      
      <div class="viewer-content">
        <div *ngIf="isLoading" class="loading-container">
          <mat-spinner diameter="40"></mat-spinner>
          <p>Loading resume...</p>
        </div>
        
        <div *ngIf="error" class="error-container">
          <mat-icon class="error-icon">error</mat-icon>
          <h3>Failed to load resume</h3>
          <p>{{ error }}</p>
          <button mat-raised-button color="primary" (click)="downloadResume()">
            <mat-icon>download</mat-icon>
            Download Resume
          </button>
        </div>
        
        <div *ngIf="!isLoading && !error" class="pdf-container">
          <!-- Chrome blocks PDFs from localhost - provide the best alternative -->
          <div class="pdf-preview-unavailable">
            <mat-icon class="preview-icon">picture_as_pdf</mat-icon>
            <h3>Resume Preview</h3>
            <p>Click below to view the resume in a new tab</p>
            
            <div class="action-buttons">
              <button mat-raised-button color="primary" (click)="openInNewTab()">
                <mat-icon>open_in_new</mat-icon>
                View Resume
              </button>
              <button mat-stroked-button (click)="downloadResume()">
                <mat-icon>download</mat-icon>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .resume-viewer-container {
      min-width: 800px;
      min-height: 700px;
      display: flex;
      flex-direction: column;
    }
    
    .viewer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid #e0e0e0;
      
      h2 {
        margin: 0;
        color: #333;
      }
      
      .close-button {
        position: absolute;
        top: 8px;
        right: 8px;
      }
    }
    
    .viewer-info {
      padding: 16px 24px;
      background: #f8f9fa;
      border-bottom: 1px solid #e0e0e0;
      
      p {
        margin: 4px 0;
        color: #666;
      }
    }
    
    .viewer-content {
      flex: 1;
      padding: 24px;
      overflow: auto;
    }
    
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 400px;
      gap: 16px;
      
      p {
        color: #666;
      }
    }
    
    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 400px;
      text-align: center;
      gap: 16px;
      
      .error-icon {
        font-size: 48px;
        color: #f44336;
      }
      
      h3 {
        margin: 0;
        color: #333;
      }
      
      p {
        color: #666;
        margin: 0;
      }
    }
    
    .pdf-container {
      width: 100%;
      height: 600px;
      position: relative;
      
      .pdf-preview-unavailable {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
        padding: 40px;
        background: #fafafa;
        border: 2px dashed #e0e0e0;
        border-radius: 8px;
        
        .preview-icon {
          font-size: 64px;
          color: #2196F3;
          margin-bottom: 16px;
        }
        
        h3 {
          margin: 0 0 16px 0;
          color: #333;
          font-size: 24px;
        }
        
        p {
          margin: 8px 0;
          color: #666;
          font-size: 16px;
          max-width: 400px;
        }
        
        .action-buttons {
          display: flex;
          gap: 16px;
          margin: 24px 0;
          
          button {
            min-width: 140px;
            padding: 12px 24px;
          }
        }
      }
    }
    
    .viewer-actions {
      display: flex;
      justify-content: center;
      gap: 12px;
      padding: 16px 24px;
      border-top: 1px solid #e0e0e0;
      
      button {
        min-width: 120px;
      }
    }
  `]
})
export class ResumeViewerComponent implements OnInit {
  pdfUrl: SafeResourceUrl | null = null;
  pdfUrlString: string = '';
  isLoading = true;
  error: string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResumeViewerData,
    private dialogRef: MatDialogRef<ResumeViewerComponent>,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadResume();
  }

  private loadResume(): void {
    if (!this.data.resumePath) {
      this.error = 'No resume path available';
      this.isLoading = false;
      return;
    }

    console.log('Original resume path:', this.data.resumePath);

    // Normalize path: replace backslashes with forward slashes and remove leading ./
    let relativePath = this.data.resumePath.replace(/\\/g, '/').replace(/^\.\//, '');
    
    // Extract the relative path from the full path
    if (relativePath.startsWith('uploads/')) {
      relativePath = relativePath.slice('uploads/'.length);
    } else if (relativePath.includes('uploads/')) {
      // If path contains uploads/ somewhere, extract everything after it
      const uploadsIndex = relativePath.indexOf('uploads/');
      if (uploadsIndex !== -1) {
        relativePath = relativePath.slice(uploadsIndex + 'uploads/'.length);
      }
    } else if (relativePath.includes('uploads\\')) {
      // Handle Windows backslash path
      const uploadsIndex = relativePath.indexOf('uploads\\');
      if (uploadsIndex !== -1) {
        relativePath = relativePath.slice(uploadsIndex + 'uploads\\'.length);
      }
      // Convert backslashes to forward slashes
      relativePath = relativePath.replace(/\\/g, '/');
    }

    console.log('Processed relative path:', relativePath);

    // Construct the download URL
    const downloadUrl = `http://localhost:8080/api/public/files/download/${relativePath}`;
    console.log('Final download URL:', downloadUrl);
    
    // Store raw URL for debugging
    this.pdfUrlString = downloadUrl;
    console.log('Stored pdfUrlString:', this.pdfUrlString);
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(downloadUrl);
    console.log('Sanitized pdfUrl:', this.pdfUrl);
    
    this.isLoading = false;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  downloadResume(): void {
    if (!this.data.resumePath) return;

    // Normalize path: replace backslashes with forward slashes and remove leading ./
    let relativePath = this.data.resumePath.replace(/\\/g, '/').replace(/^\.\//, '');
    
    // Extract the relative path from the full path
    if (relativePath.startsWith('uploads/')) {
      relativePath = relativePath.slice('uploads/'.length);
    } else if (relativePath.includes('uploads/')) {
      const uploadsIndex = relativePath.indexOf('uploads/');
      if (uploadsIndex !== -1) {
        relativePath = relativePath.slice(uploadsIndex + 'uploads/'.length);
      }
    } else if (relativePath.includes('uploads\\')) {
      const uploadsIndex = relativePath.indexOf('uploads\\');
      if (uploadsIndex !== -1) {
        relativePath = relativePath.slice(uploadsIndex + 'uploads\\'.length);
      }
      relativePath = relativePath.replace(/\\/g, '/');
    }

    // Construct the download URL
    const downloadUrl = `http://localhost:8080/api/public/files/download/${relativePath}`;
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${this.data.applicantName.replace(/\s+/g, '_')}_resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openInNewTab(): void {
    if (!this.data.resumePath) return;

    // Normalize path: replace backslashes with forward slashes and remove leading ./
    let relativePath = this.data.resumePath.replace(/\\/g, '/').replace(/^\.\//, '');
    
    // Extract the relative path from the full path
    if (relativePath.startsWith('uploads/')) {
      relativePath = relativePath.slice('uploads/'.length);
    } else if (relativePath.includes('uploads/')) {
      const uploadsIndex = relativePath.indexOf('uploads/');
      if (uploadsIndex !== -1) {
        relativePath = relativePath.slice(uploadsIndex + 'uploads/'.length);
      }
    } else if (relativePath.includes('uploads\\')) {
      const uploadsIndex = relativePath.indexOf('uploads\\');
      if (uploadsIndex !== -1) {
        relativePath = relativePath.slice(uploadsIndex + 'uploads\\'.length);
      }
      relativePath = relativePath.replace(/\\/g, '/');
    }

    // Construct the download URL
    const downloadUrl = `http://localhost:8080/api/public/files/download/${relativePath}`;
    
    window.open(downloadUrl, '_blank');
  }
}
