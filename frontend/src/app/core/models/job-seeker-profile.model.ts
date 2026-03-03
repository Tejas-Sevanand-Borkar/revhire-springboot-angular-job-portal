export interface JobSeekerProfile {
  id?: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  headline?: string;
  summary?: string;
  experience?: Experience[];
  education?: Education[];
  skills?: string[];
  resumePath?: string;
  resumeFileName?: string;
  profilePicture?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  expectedSalaryMin?: number;
  expectedSalaryMax?: number;
  preferredJobTypes?: string[];
  preferredLocations?: string[];
  workPreference?: 'ON_SITE' | 'REMOTE' | 'HYBRID';
  availability?: 'IMMEDIATE' | 'TWO_WEEKS' | 'ONE_MONTH' | 'TWO_MONTHS' | 'FLEXIBLE';
  createdAt?: string;
  updatedAt?: string;
}

export interface Experience {
  id?: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  currentJob: boolean;
  description?: string;
  location?: string;
}

export interface Education {
  id?: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  currentEducation: boolean;
  gpa?: string;
  description?: string;
}
