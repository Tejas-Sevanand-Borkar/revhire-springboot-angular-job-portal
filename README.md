# RevHire Job Portal

A comprehensive full-stack monolithic job portal built with Spring Boot 3.2, Java 17, Angular 17, and MySQL. This platform connects job seekers with employers through advanced matching algorithms, real-time notifications, and comprehensive analytics.

## 🚀 Features

### Core Features
- **JWT Authentication** with BCrypt password hashing
- **Role-Based Access Control** (SEEKER/EMPLOYER/ADMIN roles)
- **Soft Delete** functionality for data integrity
- **Advanced Search & Filtering** with multiple criteria
- **Real-time Notifications** system
- **File Upload System** for resumes and company logos
- **Comprehensive Dashboards** with analytics

### Job Seeker Features
- **Profile Management**: Complete profile with education, experience, skills, projects, and certifications
- **Resume Builder**: Textual resume with structured sections
- **Resume Upload**: PDF/DOCX support (max 2MB)
- **Advanced Job Search**: Filter by role, location, experience, salary, job type, company, date posted
- **Job Applications**: One-click applications with cover letters
- **Application Tracking**: View all applications with status (Applied/Under Review/Shortlisted/Rejected/Withdrawn)
- **Application Withdrawal**: Withdraw with confirmation dialog and optional reason
- **Saved Jobs**: Save jobs to favorites for later application
- **Job Recommendations**: AI-powered job suggestions based on profile
- **Notifications**: Real-time updates for application status and job recommendations

### Employer Features
- **Company Registration**: Complete company profile with industry, size, description, website, location
- **Comprehensive Job Postings**: Title, description, skills, experience, education, location, salary, job type, deadline, number of openings
- **Job Management**: View, edit, close/reopen, delete, mark as filled, view statistics
- **Applicant Management**: View applicant details, profiles, resumes, cover letters, application dates
- **Bulk Actions**: Shortlist/reject applications in bulk with optional comments
- **Application Notes**: Add internal notes for tracking
- **Advanced Applicant Filtering**: Filter by experience, skills, education, application date, status
- **Analytics Dashboard**: Total jobs, active jobs, applications, pending reviews, performance metrics

### Standard Features
- **Responsive UI/UX**: Mobile-friendly interface with Material Design
- **Data Management**: Comprehensive CRUD operations with validation
- **Security**: Enterprise-grade security measures
- **Performance**: Optimized queries and caching
- **Scalability**: Designed for high-volume usage

## 🛠 Technology Stack

### Backend
- **Framework**: Spring Boot 3.2
- **Language**: Java 17
- **Database**: MySQL 8.0
- **Security**: Spring Security with JWT
- **ORM**: Spring Data JPA with Hibernate
- **Validation**: Jakarta Bean Validation
- **File Storage**: Local file system with configurable paths
- **Logging**: Log4j2 with multiple appenders
- **Testing**: JUnit 5, Mockito, TestContainers

### Frontend
- **Framework**: Angular 17
- **Language**: TypeScript
- **UI Library**: Angular Material
- **State Management**: RxJS with Services
- **HTTP Client**: Angular HttpClient
- **Forms**: Reactive Forms with validation
- **Routing**: Angular Router
- **Build Tool**: Angular CLI

### Development Tools
- **Build**: Maven (Backend), npm (Frontend)
- **Version Control**: Git
- **IDE Support**: VS Code, IntelliJ IDEA
- **API Documentation**: OpenAPI/Swagger ready

## 📊 Application Status Flow

```
APPLIED → UNDER_REVIEW → SHORTLISTED → REJECTED
                ↓
            WITHDRAWN (at any stage)
```

## 🏗 Project Structure

```
RevHire/
├── backend/
│   └── src/main/java/com/revhire/
│       ├── RevHireApplication.java
│       ├── config/
│       │   ├── SecurityConfig.java
│       │   └── JpaConfig.java
│       ├── controller/
│       │   ├── AuthController.java
│       │   ├── JobController.java
│       │   ├── ApplicationController.java
│       │   ├── NotificationController.java
│       │   ├── FileUploadController.java
│       │   ├── SavedJobController.java
│       │   ├── ApplicationNoteController.java
│       │   └── DashboardController.java
│       ├── service/
│       │   ├── AuthService.java
│       │   ├── UserService.java
│       │   ├── JobService.java
│       │   ├── ApplicationService.java
│       │   ├── NotificationService.java
│       │   ├── FileUploadService.java
│       │   ├── SavedJobService.java
│       │   ├── ApplicationNoteService.java
│       │   └── DashboardService.java
│       ├── repository/
│       │   ├── UserRepository.java
│       │   ├── JobRepository.java
│       │   ├── ApplicationRepository.java
│       │   ├── NotificationRepository.java
│       │   ├── SavedJobRepository.java
│       │   ├── ApplicationNoteRepository.java
│       │   ├── JobSeekerProfileRepository.java
│       │   └── EmployerProfileRepository.java
│       ├── entity/
│       │   ├── User.java
│       │   ├── Job.java
│       │   ├── Application.java
│       │   ├── Notification.java
│       │   ├── SavedJob.java
│       │   ├── ApplicationNote.java
│       │   ├── JobSeekerProfile.java
│       │   └── EmployerProfile.java
│       ├── dto/
│       │   ├── AuthResponse.java
│       │   ├── LoginRequest.java
│       │   ├── RegisterRequest.java
│       │   ├── JobDto.java
│       │   ├── JobSearchRequest.java
│       │   └── ApplicationDto.java
│       ├── security/
│       │   ├── JwtTokenProvider.java
│       │   ├── JwtAuthenticationFilter.java
│       │   └── JwtAuthenticationEntryPoint.java
│       └── exception/
│           ├── GlobalExceptionHandler.java
│           ├── ResourceNotFoundException.java
│           └── ResourceAlreadyExistsException.java
├── frontend/
│   └── src/app/
│       ├── core/
│       │   ├── services/
│       │   │   ├── auth.service.ts
│       │   │   ├── job.service.ts
│       │   │   ├── application.service.ts
│       │   │   └── notification.service.ts
│       │   └── guards/
│       │       └── auth.guard.ts
│       ├── seeker/
│       │   ├── dashboard/
│       │   ├── profile/
│       │   ├── search/
│       │   └── applications/
│       ├── employer/
│       │   ├── dashboard/
│       │   ├── create-job/
│       │   ├── manage-jobs/
│       │   └── applicants/
│       └── shared/
│           ├── components/
│           │   ├── navbar/
│           │   ├── job-search/
│           │   └── status-badge/
│           └── shared.module.ts
└── docs/
    ├── api/
    ├── database/
    └── deployment/
```

## 🗄 Database Schema

### Core Tables
- **users**: User accounts with roles and authentication
- **job_seeker_profiles**: Comprehensive job seeker profiles
- **employer_profiles**: Company profiles with detailed information
- **jobs**: Job postings with all required fields
- **applications**: Job applications with status tracking and withdrawal reasons
- **notifications**: Real-time notification system
- **saved_jobs**: Job seeker saved jobs for later application
- **application_notes**: Internal employer notes on applications

### Key Relationships
- Users → JobSeekerProfiles (1:1)
- Users → EmployerProfiles (1:1)
- Employers → Jobs (1:N)
- Jobs → Applications (1:N)
- JobSeekers → Applications (1:N)
- JobSeekers → SavedJobs (1:N)
- Applications → ApplicationNotes (1:N)

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Jobs
- `POST /api/jobs` - Create job (EMPLOYER)
- `GET /api/jobs` - Get all active jobs
- `GET /api/jobs/{id}` - Get job by ID
- `PUT /api/jobs/{id}` - Update job (EMPLOYER)
- `DELETE /api/jobs/{id}` - Delete job (EMPLOYER)
- `PATCH /api/jobs/{id}/toggle-status` - Toggle job active status
- `GET /api/jobs/search?keyword={keyword}` - Basic search
- `POST /api/jobs/advanced-search` - Advanced search with filters
- `GET /api/jobs/location/{location}` - Get jobs by location
- `GET /api/jobs/type/{jobType}` - Get jobs by type
- `GET /api/jobs/work-location/{workLocation}` - Get jobs by work location

### Applications
- `POST /api/applications/apply/{jobId}` - Apply for job (SEEKER)
- `GET /api/applications/{id}` - Get application by ID
- `PUT /api/applications/{id}/status` - Update application status (EMPLOYER)
- `PUT /api/applications/bulk-status` - Bulk update application status (EMPLOYER)
- `PATCH /api/applications/{id}/withdraw` - Withdraw application with reason (SEEKER)
- `GET /api/applications/job/{jobId}` - Get applications for job (EMPLOYER)
- `GET /api/applications/seeker/{jobSeekerId}` - Get applications for job seeker
- `GET /api/applications/employer/{employerId}` - Get all employer applications

### Saved Jobs
- `POST /api/saved-jobs/{jobId}` - Save job (SEEKER)
- `DELETE /api/saved-jobs/{jobId}` - Unsave job (SEEKER)
- `GET /api/saved-jobs` - Get saved jobs (SEEKER)
- `GET /api/saved-jobs/{jobId}/check` - Check if job is saved (SEEKER)

### Application Notes
- `POST /api/application-notes/application/{applicationId}` - Add note (EMPLOYER)
- `GET /api/application-notes/application/{applicationId}` - Get application notes (EMPLOYER)
- `DELETE /api/application-notes/{noteId}` - Delete note (EMPLOYER)

### File Upload
- `POST /api/files/upload/resume` - Upload resume (SEEKER)
- `POST /api/files/upload/company-logo` - Upload company logo (EMPLOYER)
- `DELETE /api/files/delete` - Delete file
- `POST /api/files/validate` - Validate file before upload

### Notifications
- `GET /api/notifications/user/{userId}` - Get user notifications
- `GET /api/notifications/user/{userId}/unread` - Get unread notifications
- `PATCH /api/notifications/{id}/read` - Mark notification as read
- `PATCH /api/notifications/user/{userId}/read-all` - Mark all as read
- `DELETE /api/notifications/{id}` - Delete notification

### Dashboards
- `GET /api/dashboard/employer` - Employer dashboard statistics
- `GET /api/dashboard/seeker` - Job seeker dashboard statistics
- `GET /api/dashboard/admin` - Admin dashboard statistics

## ⚙ Configuration

### Database Configuration
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/revhire
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### JWT Configuration
```properties
jwt.secret=your-super-secret-jwt-key-minimum-256-bits
jwt.expiration=86400000
```

### File Upload Configuration
```properties
file.upload-dir=./uploads
file.max-size=2097152
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB
```

### CORS Configuration
```properties
cors.allowed-origins=http://localhost:4200,http://localhost:3000
cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
cors.allowed-headers=*
cors.allow-credentials=true
```

## 🚀 Installation and Setup

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8.0+
- Maven 3.6+
- Angular CLI 17+

### Database Setup
```sql
CREATE DATABASE revhire CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Setup
```bash
cd frontend
npm install
ng serve
```

### Access the Application
- **Backend API**: `http://localhost:8080`
- **Frontend Application**: `http://localhost:4200`
- **API Documentation**: `http://localhost:8080/swagger-ui.html` (when configured)
- **Health Check**: `http://localhost:8080/actuator/health`

## 🧪 Testing

### Backend Tests
```bash
mvn test
mvn test -Dtest=JobServiceTest
mvn test -Dtest=ApplicationServiceTest
mvn test -Dtest=AuthServiceTest
```

### Frontend Tests
```bash
cd frontend
ng test
ng test --watch=false
ng test --coverage
```

### Integration Tests
```bash
mvn test -Pintegration-test
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Role-Based Authorization**: Fine-grained access control
- **Password Security**: BCrypt encryption with salt
- **CORS Protection**: Configurable cross-origin resource sharing
- **Input Validation**: Comprehensive validation on all inputs
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Input sanitization and output encoding
- **File Upload Security**: File type and size validation
- **Rate Limiting**: Configurable request rate limiting

## 📊 Analytics & Monitoring

### Employer Analytics
- Job posting performance metrics
- Application funnel analysis
- Time-to-hire statistics
- Source effectiveness tracking
- Cost-per-hire calculations

### Job Seeker Analytics
- Application success rate
- Profile completion score
- Skill gap analysis
- Market salary comparisons
- Career progression insights

### System Analytics
- User engagement metrics
- Platform usage statistics
- Performance monitoring
- Error tracking and alerting
- Resource utilization monitoring

## 📝 Logging

The application uses Log4j2 with multiple appenders:
- **Console**: Real-time development logging
- **File**: Persistent file logging (`logs/revhire.log`)
- **Rolling File**: Automated log rotation (`logs/revhire-rolling.log`)
- **Error File**: Dedicated error logging (`logs/error.log`)

### Log Levels
- **ERROR**: Critical errors and exceptions
- **WARN**: Warning messages and potential issues
- **INFO**: General application information
- **DEBUG**: Detailed debugging information
- **TRACE**: Fine-grained tracing information

## 🚀 Production Deployment

### Environment Configuration
```properties
spring.profiles.active=production
spring.datasource.url=jdbc:mysql://prod-db-host:3306/revhire_prod
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
jwt.secret=${JWT_SECRET}
file.upload-dir=/var/uploads/revhire
```

### Docker Deployment
```dockerfile
# Dockerfile example
FROM openjdk:17-jdk-slim
COPY target/revhire-*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Kubernetes Deployment
```yaml
# k8s-deployment.yaml example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: revhire-backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: revhire-backend
  template:
    metadata:
      labels:
        app: revhire-backend
    spec:
      containers:
      - name: revhire
        image: revhire:latest
        ports:
        - containerPort: 8080
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines
- Follow Java Code Conventions
- Use TypeScript strict mode for frontend
- Write meaningful commit messages
- Add tests for new functionality
- Update documentation

## 📋 Definition of Done

- [ ] Working Web Application Demonstration
- [ ] Complete Code Repository with all features
- [ ] ERD (Entity Relationship Diagram)
- [ ] Application Architecture Diagram
- [ ] Comprehensive README.md documentation
- [ ] Testing Artifacts (unit, integration, e2e tests)
- [ ] API Documentation
- [ ] Deployment Guide


**RevHire** - Connecting Talent with Opportunity 🚀
