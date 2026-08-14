# Technical Architecture

## Target architecture
Initial release: modular monolith with explicit module boundaries and API-first interfaces. Evolve to services only where scale, ownership, reliability or isolation justify it.

## Suggested stack
- Web/App: Next.js + React + TypeScript
- Backend: TypeScript-based modular backend or another strongly typed backend selected during implementation ADR
- Database: PostgreSQL
- Cache/queues: Redis-compatible infrastructure
- Object storage: S3-compatible
- Search: start with PostgreSQL capabilities where sufficient; dedicated search later
- Video: object storage + CDN/transcoding architecture
- Auth: OIDC/OAuth2-ready identity layer with MFA support
- Observability: structured logs, metrics, traces and audit logs

## Application surfaces
website, learner, instructor, organization, admin may share UI packages but must keep role-specific product boundaries.

## Backend modules
identity, users, organizations, courses, content, learning, paths, goals, skills, assessment, assignments, projects, certificates, commerce, notifications, messaging, analytics, AI, search, support, integrations.

## API principles
- Versioned APIs where compatibility requires it
- DTOs separate from persistence models
- Authorization enforced server-side
- Tenant context explicit
- Idempotency for payment and important commands
- Pagination/filtering standards
- Consistent error envelope
- Auditability for sensitive mutations

## Event candidates
UserRegistered, OnboardingCompleted, EnrollmentCreated, LessonCompleted, AssessmentCompleted, SkillEvidenceCreated, CourseCompleted, CertificateIssued, PaymentSucceeded, SubscriptionChanged, NotificationRequested.

## AI Gateway
Application → AI Gateway → Policy/Context → Provider/Model → Tools/Retrieval → Evaluation/Telemetry.
Provider-specific logic must not leak throughout the domain modules.

## Data protection
RBAC, tenant isolation, least privilege, secure sessions, encryption in transit/at rest where applicable, secret management, secure file upload, backups, audit trail and data retention policy.

## Frontend principles
Server/client boundary intentional; reusable Design System; responsive but mobile-first; accessible semantic HTML; progressive enhancement; performance budgets.

## PWA
Architecture should support installability, push, caching and offline learning where content licensing and security allow.

## Deployment
Environment separation: local / test / staging / production. CI should run lint, typecheck, unit tests, integration tests and build before deployment.

## ADR rule
Technology decisions that materially affect domain boundaries, storage, authentication, AI provider strategy or deployment must be recorded as Architecture Decision Records under `docs/architecture/adr/`.
