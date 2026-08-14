# Product Architecture

## Product Map
```text
Markaz Amouzesh
├── Public Website
│   ├── Services
│   ├── Solutions
│   ├── Platform
│   ├── Courses
│   ├── Resources
│   └── Projects
├── Education Platform
│   ├── Learner
│   ├── Instructor
│   ├── Mentor
│   ├── Organization
│   ├── Academy
│   ├── University
│   └── Admin
├── Shared Education Core
│   ├── Identity
│   ├── Profiles
│   ├── Courses
│   ├── Learning
│   ├── Skills
│   ├── Assessment
│   ├── Projects
│   ├── Certificates
│   ├── Organizations
│   ├── Payments
│   ├── Notifications
│   └── Analytics
└── AI Layer
    ├── AI Gateway
    ├── Agents
    ├── Knowledge
    ├── Retrieval
    └── Safety / Evaluation
```

## Product surfaces
1. Marketing Website — acquisition and B2B conversion.
2. Public Learning — course discovery and public educational content.
3. Learner App — learning and personal development.
4. Instructor Studio — course/content/assessment management.
5. Mentor Workspace — human mentoring.
6. Organization Portal — enterprise learning.
7. Academy/University Mode — specialized institutional workflows.
8. Admin Console — platform governance.
9. AI Workspace — contextual intelligence embedded across roles.
10. Verification — public certificate verification.
11. Marketplace — later-stage commerce.
12. Support Center — self-service and tickets.

## Shared Core rule
All surfaces use the same domain concepts and authorization model. UI-specific logic must not duplicate domain rules.

## Multi-tenancy
Organizations are tenants. Tenant-scoped data must be isolated by authorization and application-level policies; architecture must remain ready for stronger database isolation if scale/security requirements demand it.

## Modularity
Initial implementation should favor a modular monolith. Modules communicate through explicit interfaces/events rather than direct uncontrolled coupling.

## Main modules
Identity, User/Profile, Organization, Course/Curriculum, Enrollment, Learning Progress, Learning Path, Goals, Skills, Assessment, Assignment, Project, Certificate, Content, Media, Payments, Subscription, Marketplace, Notification, Messaging, Analytics, AI, Search, Support, Integration.

## Cross-product future
Learning Identity can later interoperate with Profila and academic identity systems such as AsatidSite without making those products hard dependencies of the initial MVP.
