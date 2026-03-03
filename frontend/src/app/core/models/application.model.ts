export interface Application {
  id: number;
  jobId?: number;
  jobTitle?: string;
  jobSeekerId?: number;
  jobSeekerName?: string;
  employerId?: number;
  employerName?: string;
  status: string;
  createdAt: string | Date;
  updatedAt?: string | Date;
  coverLetter?: string;
  resumePath?: string;
}

export interface ApplicationStats {
  totalApplications?: number;
  pendingApplications?: number;
  shortlistedApplications?: number;
  rejectedApplications?: number;
  hiredApplications?: number;
  // Keep for backward compatibility
  acceptedApplications?: number;
}

export interface Job {
  id: number;
  title: string;
  location: string;
  jobType: string;
  salaryMin?: number;
  salaryMax?: number;
  description?: string;
  requirements?: string | string[];
}
