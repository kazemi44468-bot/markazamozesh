# Domain Model

## Core entities

### User
حساب هویتی پایه. دارای roles، status، preferences و ارتباط با Profile.

### Profile
اطلاعات فردی و عمومی. شامل bio، avatar، education، experience و public visibility.

### LearningIdentity
هویت آموزشی پایدار فرد: Goals، Skills، Courses، Projects، Assessments، Certificates، Achievements و Learning History.

### Goal
هدف آموزشی/شغلی/مهارتی با status، priority، deadline و required skills.

### Skill
موجودیت مهارتی قابل سنجش. دارای taxonomy، level و evidence.

### SkillEvidence
شاهد کسب مهارت: course completion، assessment، project، certificate یا instructor evaluation.

### Course
محصول آموزشی شامل metadata، instructor، curriculum، pricing، skills و publication status.

### Section
گروه منطقی در Course.

### Lesson
واحد یادگیری شامل text، video، audio، file، interactive content و objectives.

### Enrollment
رابطه User با Course/Path؛ شامل status، dates، progress و completion.

### LearningProgress
رویداد/وضعیت پیشرفت فرد در lesson، section، course و path.

### LearningPath
مسیر هدف‌محور متشکل از courses، assessments، projects و milestones.

### Assessment
چارچوب ارزیابی. می‌تواند exam، quiz، diagnostic یا skill assessment باشد.

### Question / QuestionBank
سؤال و بانک سؤال با metadata، difficulty، skill mapping و grading rules.

### Assignment
تمرین تحویلی با rubric، submission و feedback.

### Project
خروجی عملی یادگیری با brief، submission، evaluation و skill evidence.

### Certificate
مدرک دیجیتال صادرشده پس از شرایط مشخص. دارای immutable identifier و public verification endpoint.

### Organization
Tenant سازمانی با departments، members، policies، courses و learning programs.

### Department
زیرمجموعه سازمانی برای grouping و reporting.

### LearningProgram
برنامه آموزشی سازمان/آموزشگاه/دانشگاه.

### Instructor
Role/Profile تخصصی مدرس؛ می‌تواند با User یکی باشد.

### Mentor
ارائه‌دهنده mentoring انسانی.

### AI Agent
عامل هوشمند با role، tools، knowledge scope، policy و evaluation profile.

### KnowledgeSource
منبع قابل استفاده در AI: course content، document، FAQ، policy یا approved external source.

### Notification
پیام event-driven برای user/organization.

### Order / Payment / Subscription
موجودیت‌های تجاری برای خرید، پرداخت و اشتراک.

## روابط کلیدی
```text
User 1──1 Profile
User 1──1 LearningIdentity
LearningIdentity 1──* Goal
Goal *──* Skill
Course *──* Skill
Course 1──* Section
Section 1──* Lesson
User *──* Course via Enrollment
LearningPath *──* Course
User *──* LearningPath
Assessment *──* Skill
Project *──* Skill
Certificate *──* Course/Path/Program
Organization 1──* Department
Organization *──* User via Membership
Organization *──* Course
AI Agent *──* KnowledgeSource
```

## Domain rules
- User identity is separate from public profile.
- Role is authorization; Instructor/Mentor are domain capabilities, not separate login systems.
- Skills are first-class entities and should not be stored only as free-text tags.
- Learning progress must be event/audit friendly.
- Certificates require verifiable identifiers.
- AI access to learner data is permissioned and scoped.
- Organization data is tenant-scoped.

## Future compatibility
Domain model should be extensible toward credential standards, digital identity, external LMS integration and cross-product learning records without coupling MVP to external standards.
