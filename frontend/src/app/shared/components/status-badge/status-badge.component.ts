import { Component, Input } from '@angular/core';

export type ApplicationStatus = 'APPLIED' | 'SHORTLISTED' | 'INTERVIEW_SCHEDULED' | 'HIRED' | 'REJECTED' | 'WITHDRAWN';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  @Input() status: ApplicationStatus = 'APPLIED';

  getStatusClass(): string {
    return `status-${this.status.toLowerCase()}`;
  }

  getStatusText(): string {
    return this.status.replace('_', ' ');
  }
}
