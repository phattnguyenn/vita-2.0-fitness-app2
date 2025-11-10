# VITA 2.0 - Premium Fitness Coaching Platform

## Project Overview

VITA 2.0 is a comprehensive premium sports fitness application designed for Dubai residents seeking world-class coaching across 14 different athletic disciplines. The platform features a dual-interface system serving both athletes and coaches with distinct, purpose-built experiences.

**Version:** 2.0  
**Last Updated:** November 6, 2025  
**Target Market:** Dubai, UAE  
**Tech Stack:** React + Vite + Express + PostgreSQL (planned) / In-Memory Storage (current)

## Product Vision

VITA connects users with 31+ verified expert coaches across 14 sports, providing:
- AI-powered fitness guidance and program recommendations
- Flexible scheduling with multi-session package options
- Integrated wallet system with multiple payment methods
- Comprehensive progress tracking with Flow Index scoring
- Complete coach business management dashboard
- CRM-style client management with detailed profiles

## Core Features

### Athlete Interface
1. **Home Dashboard** - Performance feed, coach spotlight, AI recommendations, weekly highlights
2. **Calendar** - Day/Week/Month views with session management
3. **Coaches** - Browse 31 coaches across 14 sports with advanced filtering
4. **Messages** - Chat interface with coaches
5. **Profile** - User stats, Flow Index score (0-100), session history, achievements
6. **Wallet** - Binance-style interface for deposits, transactions, balance management
7. **Map** - Interactive map with gym/coach locations
8. **Package Booking** - 3-step booking flow with payment plan options

### Coach Interface (Separate Dashboard)
1. **Dashboard** - Earnings overview, revenue charts, today's schedule, activity feed
2. **Clients** - CRM with 15 detailed profiles (Flow Index, goals, medical notes, progress)
3. **Sessions** - Schedule and session management
4. **Packages** - Package creation and management
5. **AI Assistant** - AI-powered coaching tools
6. **Library** - Training resources and content
7. **Profile** - Coach settings and profile management

## Design System

### Dark Theme
- **Background:** `#0f0f0f` (deep black)
- **Primary Accent:** `#c6ff00` (vibrant lime green)
- **Secondary Accents:** `#b5e600` (yellow-green), `#9fd600` (olive green)
- **Typography:** Inter font family with negative letter spacing (-0.003em to -0.02em)
- **Effects:** Glassmorphism, backdrop blur, green glow on active states
- **Border Radius:** 12px-24px for premium feel
- **Shadows:** Strategic dark shadows for depth

### 14 Supported Sports
1. Tennis 🎾
2. Pickleball 🏓  
3. Paddle 🏓
4. Badminton 🏸
5. Yoga 🧘
6. Pilates 🤸
7. Strength Training 💪
8. Weightlifting 🏋️
9. CrossFit 🏃
10. Boxing 🥊
11. Muay Thai 🥋
12. MMA 🥊
13. BJJ 🥋
14. Sports Therapy 💆

## Data Models

### Core Entities
- **Users** - Athletes and coaches with authentication
- **Coaches** - 31 coaches with profiles, certifications, packages, ratings
- **Clients** - Detailed CRM profiles with Flow Index, goals, medical notes
- **Sessions** - Scheduled and completed training sessions
- **Packages** - Multi-coach training packages with payment plans
- **Messages** - Coach-athlete communication
- **Wallet & Transactions** - Balance management, deposits, payments
- **Achievements** - User progress milestones and badges
- **Reviews** - Coach ratings and testimonials

### Key Metrics
- **Flow Index** - Client performance score (0-100) with trend tracking
- **Session Stats** - Total sessions, hours trained, calories burned
- **Streak Tracking** - Consecutive training days
- **Revenue Analytics** - Monthly earnings, payment breakdowns

## Technical Architecture

### Frontend
- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS with custom dark theme
- **Components:** Radix UI primitives + custom VITA components
- **State:** TanStack Query for server state
- **Routing:** Component-based navigation (no routing library)

### Backend (Planned)
- **Framework:** Express.js
- **Database:** PostgreSQL with Drizzle ORM
- **Storage:** Currently in-memory, migrate to PostgreSQL
- **Validation:** Zod schemas
- **API Structure:** RESTful endpoints with `/api` prefix

### Component Structure
```
client/src/
├── components/
│   ├── ui/           # Shadcn components (40+ primitives)
│   ├── figma/        # Custom VITA components
│   ├── Auth.tsx
│   ├── Home.tsx
│   ├── CoachDashboard.tsx
│   ├── CoachClients.tsx (CRM)
│   ├── Calendar.tsx (3 view modes)
│   ├── CoachesProfile.tsx (31 coaches)
│   ├── Messages.tsx
│   ├── Profile.tsx (Flow Index & achievements)
│   ├── Wallet.tsx (Binance-style)
│   ├── PackageBookingFlow.tsx (3-step)
│   └── [25+ other components]
├── lib/
│   ├── queryClient.ts
│   └── utils.ts
└── App.tsx         # Main app with navigation logic
```

## User Flows

### Athlete Booking Flow
1. Browse coaches → Filter by sport/location/price/rating
2. View coach profile → Check certifications, reviews, packages
3. Select package → View pricing, coaching team, what's included
4. Choose payment plan → Full payment (5% bonus) or installments (3/6 months)
5. Complete booking → Schedule individual sessions with coaches
6. Track progress → View in Calendar, Profile stats, Flow Index

### Coach Client Management
1. View clients → Sort by Flow Index, last session, sport
2. AI suggestions → Automated insights about client needs
3. Expand client profile → Access 10 detailed sections (contact, goals, financials, sessions, achievements, notes, medical, preferences, communications, actions)
4. Update progress → Add notes, track milestones, adjust programs
5. Manage packages → Monitor sessions remaining, payment status
6. Review analytics → Client retention, session completion, revenue

## Environment Setup

### Required Dependencies
- Node.js 20+
- All dependencies already installed via `package.json`

### Running the Project
```bash
npm run dev  # Starts Express server + Vite dev server on port 5000
```

### Environment Variables
- `SESSION_SECRET` - Already configured for session management
- Additional variables will be added for PostgreSQL connection

## Implementation Status

### ✅ Completed (November 6, 2025)

**Task 1: Schema & Complete Frontend**
- [x] All data models defined in `shared/schema.ts` with Drizzle ORM + Zod
- [x] Design system configured (dark theme, lime green accent, Inter font)
- [x] 40+ Shadcn UI components + custom VITA components integrated
- [x] Wouter routing with athlete/coach mode switching
- [x] 300+ data-testid attributes for comprehensive test coverage
- [x] React Query providers configured
- [x] Mock authentication flow (no backend validation)

**Task 2: Backend Infrastructure (Available but Not Connected)**
- [x] 47 RESTful API endpoints in `server/routes.ts`
- [x] MemStorage implementation with all CRUD operations
- [x] Zod validation on ALL endpoints
- [x] Express.js server running on port 5000
- [x] React Query hooks created (useAuth, useCoaches, useSessions, usePackages)

**Task 3: Application Startup**
- [x] Resolved all dependency import issues
- [x] Fixed invalid package version imports in UI components
- [x] Workflow successfully running on port 5000
- [x] All builds passing with no errors

### 🎯 Current Application State
✅ **Server:** Running on port 5000  
✅ **Authentication:** Mock flow - accepts any input, immediate access to app  
✅ **Frontend:** Fully functional with mock data  
✅ **Components:** All UI components working with hardcoded demo data  
ℹ️ **Backend API:** Built but not connected to frontend (available for future integration)  

### 📝 Application Mode: Full Mock-Up Demo

The application is configured as a **fully functional demo/prototype** where:
- Users can enter any credentials (no validation)
- Signup as Athlete → immediate access to /home dashboard
- Signup as Coach → immediate access to /coach/dashboard
- Login → immediate access (defaults to athlete dashboard)
- All data is hardcoded mock data for demonstration purposes
- Session persistence via localStorage (role selection only)
- No database queries or API calls from the frontend

### 🔧 Backend Infrastructure (Available for Future)

While the frontend runs as a mock demo, a complete backend has been built:
- 47 RESTful endpoints with Zod validation
- Storage interface with full CRUD operations
- React Query hooks ready for integration
- Database seeding capability

**To enable backend integration in the future:**
1. Import and use hooks from `client/src/hooks/`
2. Replace mock data in components with API queries
3. Update Auth component to use `useCreateUser` and `useLogin`
4. Enable data persistence and validation

### 📋 Potential Future Enhancements
- [ ] Connect frontend to backend API endpoints
- [ ] Replace mock data with real database queries
- [ ] Add real authentication validation
- [ ] Implement data persistence
- [ ] Add loading states and error handling
- [ ] Migrate from MemStorage to PostgreSQL
- [ ] Add real-time features with WebSockets
- [ ] Implement payment processing integration

## Key Design Guidelines

### Visual Quality Standards
- **Glassmorphism:** Subtle backdrop blur on cards and modals
- **Green Glow:** Active states use `drop-shadow-[0_0_12px_rgba(198,255,0,0.6)]`
- **Spacing:** Consistent 5px increments (5, 10, 15, 20, 25px)
- **Typography:** Negative tracking for premium feel
- **Borders:** 1px white/10% opacity for subtle divisions
- **Shadows:** Deep black shadows for depth and elevation
- **Responsive:** Mobile-first with max-width container (448px) centered

### Component Usage
- All UI components from `client/src/components/ui/`
- Lucide React for icons (not emoji)
- Unsplash for coach/user profile images
- Green gradients for CTAs and success states
- Dark overlays for modals/sheets

## Database Schema Notes

### Flow Index Calculation
Flow Index (0-100) represents client performance based on:
- Session consistency (streak days)
- Goal progress percentage
- Session completion rate
- Performance improvements
- Coach assessments

### Wallet System
- Balance stored in AED cents (100 = 1 AED)
- Token balance for fee-free cancellations
- Transaction types: deposit, session_payment, package_payment, refund
- Payment methods: bank (0% fee), debit (0% fee), credit (2.5% fee)

### Package Pricing
- 20% deposit required
- Maximum 15% discount
- 20% cancellation fee for cash refund
- 0% fee for token conversion
- Payment plans: Full payment (5% bonus), 3-month, 6-month installments

## Future Enhancements

### Planned Features
- Real-time chat with WebSocket
- Video call integration for virtual sessions
- Nutrition tracking and meal planning
- Workout program builder
- Live class scheduling
- Wearable device integration
- Social features (friend challenges, leaderboards)
- Multi-language support (Arabic, English)

### Technical Improvements
- Migrate to PostgreSQL for production
- Implement caching layer (Redis)
- Add comprehensive test coverage
- Set up CI/CD pipeline
- Performance monitoring
- Analytics dashboard

## Contact & Support

For questions or issues related to VITA 2.0 development:
- Review PRD.md in `attached_assets/vita_extracted/src/`
- Check APP-STRUCTURE.md for component hierarchy
- Refer to design_guidelines.md for UI specifications

---

**Last Updated:** November 6, 2025  
**Project Status:** Active Development - Task 1 (Frontend) In Progress
