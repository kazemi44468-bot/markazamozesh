# Information Architecture

## Public Website
```text
/
├── about
│   ├── vision
│   ├── mission
│   ├── company
│   ├── team
│   ├── partners
│   ├── certifications
│   └── careers
├── services
│   ├── consulting
│   ├── needs-assessment
│   ├── lms
│   ├── education-portal
│   ├── corporate-learning
│   ├── university-platform
│   ├── academy-platform
│   ├── exam-system
│   ├── certificate-system
│   ├── ai-education
│   ├── content-intelligence
│   ├── integration
│   ├── custom-development
│   ├── migration
│   └── support
├── solutions
│   ├── university
│   ├── academy
│   ├── school
│   ├── corporate
│   ├── government
│   ├── institute
│   └── enterprise
├── platform
│   ├── features
│   ├── personal-learning
│   ├── organization
│   ├── ai
│   ├── mobile
│   ├── skills
│   ├── certificates
│   ├── analytics
│   ├── security
│   ├── integrations
│   ├── pricing
│   ├── compare
│   └── faq
├── courses
├── course/[slug]
├── instructors
├── instructor/[username]
├── projects
├── project/[slug]
├── resources
│   ├── articles
│   ├── guides
│   ├── research
│   ├── news
│   ├── videos
│   ├── podcasts
│   └── webinars
├── consultation
├── contact
├── search
└── verify/[certificateId]
```

## Authentication
`/auth/login`, `/auth/register`, `/auth/forgot-password`, `/auth/reset-password`, `/auth/verify-email`, `/auth/verify-phone`, `/auth/two-factor`.

## Onboarding
`/onboarding/goals`, `/onboarding/interests`, `/onboarding/assessment`, `/onboarding/preferences`, `/onboarding/complete`.

## Learner
```text
/app
├── learning
├── learning-paths
├── goals
├── courses
├── learn/[course]/[lesson]
├── micro
├── daily
├── challenges
├── review
├── flashcards
├── exams
├── assignments
├── projects
├── skills
├── skill-gap
├── certificates
├── achievements
├── schedule
├── notifications
├── messages
├── ai
│   ├── chat
│   ├── study
│   ├── review
│   ├── practice
│   ├── plan
│   └── explain
├── profile
└── settings
```

## Instructor
`/instructor/dashboard`, `/courses`, `/courses/new`, `/courses/[id]`, `/courses/[id]/builder`, `/students`, `/assignments`, `/exams`, `/question-bank`, `/projects`, `/certificates`, `/analytics`, `/ai`, `/messages`, `/settings`.

## Mentor
`/mentor/dashboard`, `/students`, `/sessions`, `/calendar`, `/messages`, `/analytics`, `/profile`.

## Organization
`/org/dashboard`, `/users`, `/departments`, `/courses`, `/learning-paths`, `/assignments`, `/exams`, `/projects`, `/skills`, `/certificates`, `/content`, `/knowledge-base`, `/reports`, `/analytics`, `/ai`, `/settings`.

## Academy / University
Separate mode-specific navigation over the shared core. University includes faculties, departments, semesters, courses, students, instructors, exams, grades and certificates. Academy includes classes, students, instructors, courses, exams and certificates.

## Marketplace
`/marketplace`, `/marketplace/courses`, `/marketplace/instructors`, `/marketplace/mentors`, `/marketplace/learning-paths`, `/cart`, `/checkout`, `/app/orders`.

## Admin
`/admin/dashboard`, `/users`, `/organizations`, `/instructors`, `/mentors`, `/courses`, `/content`, `/categories`, `/skills`, `/assessments`, `/projects`, `/certificates`, `/payments`, `/subscriptions`, `/orders`, `/marketplace`, `/ai`, `/analytics`, `/support`, `/notifications`, `/security`, `/audit`, `/system`, `/settings`.

## Public educational identity
`/u/[username]` for public profile and `/verify/[certificateId]` for certificate verification.

## System pages
`/401`, `/403`, `/404`, `/500`, `/maintenance`, `/offline` plus reusable loading/empty/error/success states.

## Mobile navigation
Learner primary bottom navigation: Home / Learning / AI / My Path / Profile. Other functions live under contextual More navigation.

## Architecture rule
A route is not approved merely because a screen is needed. Every route must map to a persona, intent, domain capability and measurable outcome.
