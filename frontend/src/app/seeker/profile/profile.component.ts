import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { AuthService, AuthResponse } from '../../core/services/auth.service';
import { JobSeekerProfileService } from '../../core/services/job-seeker-profile.service';
import { JobSeekerProfile, Experience, Education } from '../../core/models/job-seeker-profile.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-seeker-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class SeekerProfileComponent implements OnInit {
  profileForm: FormGroup;
  isUploading = false;
  isSaving = false;
  currentUser: AuthResponse | null = null;
  existingProfile: JobSeekerProfile | null = null;
  resumeFile: File | null = null;
  profilePictureFile: File | null = null;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private profileService: JobSeekerProfileService,
    private snackBar: MatSnackBar
  ) {
    this.profileForm = this.createProfileForm();
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.loadProfile();
    }
  }

  createProfileForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      location: [''],
      headline: [''],
      summary: [''],
      experience: this.fb.array([]),
      education: this.fb.array([]),
      skills: [[]],
      linkedinUrl: [''],
      githubUrl: [''],
      portfolioUrl: [''],
      expectedSalaryMin: [null, [Validators.min(0)]],
      expectedSalaryMax: [null, [Validators.min(0)]],
      preferredJobTypes: [[]],
      preferredLocations: [[]],
      workPreference: [''],
      availability: ['']
    });
  }

  get experienceArray(): FormArray {
    return this.profileForm.get('experience') as FormArray;
  }

  get educationArray(): FormArray {
    return this.profileForm.get('education') as FormArray;
  }

  loadProfile(): void {
    if (!this.currentUser) return;

    this.profileService.getProfileByUserId(this.currentUser.userId).subscribe({
      next: (profile) => {
        this.existingProfile = profile;
        this.populateForm(profile);
      },
      error: (error) => {
        console.log('No existing profile found, creating new one');
        // Don't pre-fill email - let user enter it manually
      }
    });
  }

  populateForm(profile: JobSeekerProfile): void {
    this.profileForm.patchValue({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone,
      location: profile.location,
      headline: profile.headline,
      summary: profile.summary,
      skills: profile.skills || [],
      linkedinUrl: profile.linkedinUrl,
      githubUrl: profile.githubUrl,
      portfolioUrl: profile.portfolioUrl,
      expectedSalaryMin: profile.expectedSalaryMin,
      expectedSalaryMax: profile.expectedSalaryMax,
      preferredJobTypes: profile.preferredJobTypes || [],
      preferredLocations: profile.preferredLocations || [],
      workPreference: profile.workPreference,
      availability: profile.availability
    });

    // Populate experience
    if (profile.experience) {
      profile.experience.forEach(exp => {
        this.experienceArray.push(this.createExperienceGroup(exp));
      });
    }

    // Populate education
    if (profile.education) {
      profile.education.forEach(edu => {
        this.educationArray.push(this.createEducationGroup(edu));
      });
    }
  }

  createExperienceGroup(exp?: Experience): FormGroup {
    return this.fb.group({
      company: [exp?.company || '', Validators.required],
      position: [exp?.position || '', Validators.required],
      startDate: [exp?.startDate || '', Validators.required],
      endDate: [exp?.endDate || ''],
      currentJob: [exp?.currentJob || false],
      description: [exp?.description || ''],
      location: [exp?.location || '']
    });
  }

  createEducationGroup(edu?: Education): FormGroup {
    return this.fb.group({
      institution: [edu?.institution || '', Validators.required],
      degree: [edu?.degree || '', Validators.required],
      field: [edu?.field || '', Validators.required],
      startDate: [edu?.startDate || '', Validators.required],
      endDate: [edu?.endDate || ''],
      currentEducation: [edu?.currentEducation || false],
      gpa: [edu?.gpa || ''],
      description: [edu?.description || '']
    });
  }

  addExperience(): void {
    this.experienceArray.push(this.createExperienceGroup());
  }

  removeExperience(index: number): void {
    this.experienceArray.removeAt(index);
  }

  addEducation(): void {
    this.educationArray.push(this.createEducationGroup());
  }

  removeEducation(index: number): void {
    this.educationArray.removeAt(index);
  }

  onResumeSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        this.snackBar.open('Please upload a PDF or Word document', 'Close', { duration: 3000 });
        return;
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        this.snackBar.open('File size must be less than 5MB', 'Close', { duration: 3000 });
        return;
      }
      this.resumeFile = file;
    }
  }

  onProfilePictureSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        this.snackBar.open('Please upload a JPEG or PNG image', 'Close', { duration: 3000 });
        return;
      }
      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        this.snackBar.open('Image size must be less than 2MB', 'Close', { duration: 3000 });
        return;
      }
      this.profilePictureFile = file;
    }
  }

  async uploadResume(): Promise<string | null> {
    if (!this.resumeFile) return null;
    
    try {
      const result = await this.profileService.uploadResume(this.resumeFile).toPromise();
      return result?.resumePath || null;
    } catch (error) {
      console.error('Error uploading resume:', error);
      this.snackBar.open('Failed to upload resume', 'Close', { duration: 3000 });
      return null;
    }
  }

  async uploadProfilePicture(): Promise<string | null> {
    if (!this.profilePictureFile) return null;
    
    try {
      const result = await this.profileService.uploadProfilePicture(this.profilePictureFile).toPromise();
      return result?.profilePicture || null;
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      this.snackBar.open('Failed to upload profile picture', 'Close', { duration: 3000 });
      return null;
    }
  }

  async saveProfile(): Promise<void> {
    if (!this.currentUser || this.profileForm.invalid) {
      this.snackBar.open('Please fill in all required fields', 'Close', { duration: 3000 });
      
      // Mark all fields as touched to show validation errors
      Object.keys(this.profileForm.controls).forEach(key => {
        this.profileForm.get(key)?.markAsTouched();
      });
      
      return;
    }

    // Check if required fields have values
    const requiredFields = ['firstName', 'lastName', 'email'];
    const missingFields = requiredFields.filter(field => !this.profileForm.get(field)?.value);
    
    if (missingFields.length > 0) {
      this.snackBar.open(`Please fill in: ${missingFields.join(', ')}`, 'Close', { duration: 3000 });
      return;
    }

    this.isSaving = true;
    this.isUploading = true;

    try {
      // Upload files first
      const resumePath = await this.uploadResume();
      const profilePicture = await this.uploadProfilePicture();

      // Prepare profile data - simplified for testing
      const profileData: JobSeekerProfile = {
        userId: this.currentUser.userId,
        firstName: this.profileForm.get('firstName')?.value,
        lastName: this.profileForm.get('lastName')?.value,
        email: this.profileForm.get('email')?.value,
        phone: this.profileForm.get('phone')?.value || '',
        location: this.profileForm.get('location')?.value || '',
        headline: this.profileForm.get('headline')?.value || '',
        summary: this.profileForm.get('summary')?.value || '',
        skills: this.profileForm.get('skills')?.value || [],
        linkedinUrl: this.profileForm.get('linkedinUrl')?.value || '',
        githubUrl: this.profileForm.get('githubUrl')?.value || '',
        portfolioUrl: this.profileForm.get('portfolioUrl')?.value || '',
        expectedSalaryMin: this.profileForm.get('expectedSalaryMin')?.value || null,
        expectedSalaryMax: this.profileForm.get('expectedSalaryMax')?.value || null,
        preferredJobTypes: this.profileForm.get('preferredJobTypes')?.value || [],
        preferredLocations: this.profileForm.get('preferredLocations')?.value || [],
        workPreference: this.profileForm.get('workPreference')?.value || '',
        availability: this.profileForm.get('availability')?.value || '',
        resumePath: resumePath || this.existingProfile?.resumePath,
        profilePicture: profilePicture || this.existingProfile?.profilePicture
      };

      console.log('Profile data being sent:', profileData);
      console.log('Current user:', this.currentUser);
      console.log('Form value:', this.profileForm.value);
      console.log('User ID type:', typeof this.currentUser.userId);
      console.log('User ID value:', this.currentUser.userId);

      let savedProfile: JobSeekerProfile;
      if (this.existingProfile?.id) {
        // Update existing profile
        const updateResult = await this.profileService.updateProfile(this.existingProfile.id, profileData).toPromise();
        if (updateResult) {
          savedProfile = updateResult;
          this.snackBar.open('Profile updated successfully!', 'Close', { duration: 3000 });
        } else {
          throw new Error('Failed to update profile');
        }
      } else {
        // Create new profile
        console.log('Creating new profile...');
        const createResult = await this.profileService.createProfile(profileData).toPromise();
        console.log('Create result:', createResult);
        
        if (createResult) {
          savedProfile = createResult;
          this.snackBar.open('Profile created successfully!', 'Close', { duration: 3000 });
        } else {
          console.error('Create profile returned null/undefined');
          throw new Error('Failed to create profile - no response from server');
        }
      }

      this.isSaving = false;
      this.isUploading = false;
      this.existingProfile = savedProfile;

    } catch (error: any) {
      console.error('Error saving profile:', error);
      console.error('Error details:', error?.error);
      console.error('Status:', error?.status);
      console.error('Status text:', error?.statusText);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      
      // Show more detailed error message
      let errorMessage = 'Failed to save profile';
      if (error?.error?.message) {
        errorMessage = error.error.message;
      } else if (error?.error?.error) {
        errorMessage = error.error.error;
      } else if (error?.status === 0) {
        errorMessage = 'Cannot connect to server. Please check your connection.';
      } else if (error?.status === 400) {
        errorMessage = 'Invalid data. Please check all required fields.';
      } else if (error?.status === 401) {
        errorMessage = 'Authentication required. Please log in again.';
      } else if (error?.status === 403) {
        errorMessage = 'Access denied. You do not have permission to perform this action.';
      } else if (error?.status === 500) {
        errorMessage = 'Server error: Backend service is unavailable. Please contact support or try again later.';
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      this.snackBar.open(errorMessage, 'Close', { duration: 5000 });
      this.isSaving = false;
      this.isUploading = false;
    }
  }

  cancel(): void {
    this.router.navigate(['/seeker/dashboard']);
  }

  // Helper methods for form validation
  getErrorMessage(field: string): string {
    const control = this.profileForm.get(field);
    if (control?.errors) {
      if (control.errors['required']) return 'This field is required';
      if (control.errors['email']) return 'Please enter a valid email';
      if (control.errors['min']) return 'Value must be positive';
    }
    return '';
  }

  // Skills management methods
  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    const currentSkills = this.profileForm.get('skills')?.value || [];
    
    if (value && !currentSkills.includes(value)) {
      const updatedSkills = [...currentSkills, value];
      this.profileForm.get('skills')?.setValue(updatedSkills);
    }
    
    // Clear the input value
    event.chipInput!.clear();
  }

  removeSkill(skill: string): void {
    const currentSkills = this.profileForm.get('skills')?.value || [];
    const updatedSkills = currentSkills.filter((s: string) => s !== skill);
    this.profileForm.get('skills')?.setValue(updatedSkills);
  }
}
