# AI Strategy

## Principle
AI is a product capability embedded in learning workflows, not a standalone chatbot page.

## Agents
- Learner Agent: explain, coach, plan, practice, review.
- Instructor Agent: curriculum, lesson, quiz, assignment and analytics assistance.
- Content Agent: ingest, classify, summarize, structure and transform approved content.
- Assessment Agent: question generation, rubric assistance, feedback and diagnostics.
- Organization Agent: learning reports, policy-aware assistance and skill-gap insights.
- Support Agent: product support using approved knowledge.

## Context hierarchy
1. User permissions
2. Current learning context
3. Course/lesson context
4. Learning Identity
5. Organization context
6. Approved Knowledge Base
7. General model knowledge where allowed

## AI UX
AI should expose why a recommendation is made when useful, allow user control, preserve conversation context appropriately, and clearly distinguish generated feedback from authoritative grades/certificates.

## RAG / Knowledge
Documents, course content, policies and FAQs may be indexed into scoped knowledge sources. Retrieval must respect tenant, course and user permissions.

## Evaluation
Track helpfulness, factuality, citation/retrieval quality where applicable, learning outcome impact, latency, cost and safety incidents.

## Safety
No autonomous high-impact academic decision without defined human review where required. No cross-tenant retrieval. Sensitive learner data is not exposed to an agent unless explicitly authorized by policy.

## AI roadmap
MVP: AI-ready architecture → Phase 2: contextual assistant → Phase 3: learner/instructor agents → Phase 4: adaptive learning and skill-gap intelligence → Phase 5: advanced agents and enterprise AI.
