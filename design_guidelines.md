# VITA 2.0 Design Guidelines

## Design Approach
**System-Based Approach with Modern SaaS Aesthetic**
VITA 2.0 follows a design system approach utilizing Radix UI primitives, enhanced with custom styling inspired by Linear's precision and Notion's clarity. The application emphasizes data visualization (Recharts integration) and sophisticated interactions while maintaining accessibility and consistency.

## Core Design Principles
1. **Data-First Interface**: Information hierarchy optimized for dashboard/analytics viewing
2. **Purposeful Interactions**: Subtle animations via Radix UI primitives, no distracting motion
3. **Responsive Sophistication**: Clean layouts that adapt gracefully from mobile to desktop
4. **Accessible by Default**: Radix UI ensures WCAG compliance throughout

## Typography System
**Font Stack**: System fonts for optimal performance
- **Headings**: font-semibold to font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-2xl md:text-3xl
- **Body**: text-base, leading-relaxed (1.625)
- **UI Labels**: text-sm font-medium
- **Captions/Meta**: text-xs text-muted-foreground

## Layout System
**Spacing Units**: Tailwind 2, 4, 6, 8, 12, 16 scale
- Container: max-w-7xl with px-4 md:px-6 lg:px-8
- Section padding: py-12 md:py-16 lg:py-24
- Component spacing: gap-4 md:gap-6 lg:gap-8
- Card padding: p-6 md:p-8

**Grid Structure**:
- Dashboard: 12-column grid with sidebar (col-span-3) and main content (col-span-9)
- Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Data tables: Full-width with horizontal scroll on mobile

## Component Library

**Navigation**:
- Horizontal navigation bar with subtle border-b
- Dropdown menus using Radix Navigation Menu
- Mobile: Collapsible hamburger menu with slide-in drawer

**Cards**:
- Rounded-lg borders with subtle shadow
- Hover state: subtle shadow elevation increase
- Header with icon + title, body content, optional footer actions

**Forms**:
- Radix Label components with text-sm font-medium
- Input fields: rounded-md borders, focus ring-2
- Validation states shown inline with Lucide icons
- Form groups: space-y-4

**Data Display**:
- Tables: Striped rows, sticky headers on scroll
- Charts (Recharts): Clean axis labels, tooltip on hover, responsive aspect ratios
- Stats cards: Large numbers (text-3xl font-bold) with trend indicators
- Progress bars: Radix Progress with smooth transitions

**Dialogs & Overlays**:
- Radix Dialog with backdrop blur
- Modal: max-w-lg centered, rounded-lg
- Alert Dialogs: Destructive actions require explicit confirmation
- Popovers: Positioned intelligently with collision detection

**Interactive Elements**:
- Buttons: rounded-md, multiple variants (default, outline, ghost, destructive)
- Tabs: Radix Tabs with underline indicator
- Accordion: Radix Accordion with smooth expand/collapse
- Toggle groups for view switching (list/grid, chart types)

**Icons**:
- **Lucide React** exclusively for all icons
- Icon sizes: w-4 h-4 (inline), w-5 h-5 (standard), w-6 h-6 (prominent)
- Icons paired with text: gap-2 alignment

## Responsive Behavior
- **Mobile (< 768px)**: Single column, stacked navigation, full-width cards
- **Tablet (768-1024px)**: Two-column grids, collapsible sidebar
- **Desktop (> 1024px)**: Full multi-column layouts, persistent sidebar

## Images
**Hero Section**: Full-width hero with gradient overlay, h-96 md:h-[32rem]
- Blurred background treatment with overlay text/CTA
- CTA buttons with backdrop-blur-sm bg-white/10 for glass effect
- Image description: Abstract tech/data visualization or product screenshot showing dashboard interface

**In-App Images**:
- Avatar components: Radix Avatar with fallback initials
- Empty states: Centered illustrations (w-48 h-48) with explanatory text
- Feature sections: Side-by-side image + text layouts (50/50 split on desktop)

## Interaction Patterns
- Hover states: Subtle scale (hover:scale-[1.02]) or shadow changes
- Loading states: Radix Progress or skeleton screens
- Toast notifications: Sonner for non-intrusive feedback
- Drag & drop: React Resizable Panels for adjustable layouts
- Command palette: cmdk for quick navigation (Cmd+K)

## Accessibility Features
- Keyboard navigation: All interactive elements focusable with visible focus rings
- ARIA labels: Comprehensive labeling via Radix primitives
- Screen reader: Semantic HTML structure throughout
- Contrast: Minimum WCAG AA for all text
- Form validation: Clear error messages with aria-describedby

## Special Features
**Theming**: next-themes integration for light/dark mode toggle with system preference detection

**Data Visualization**: Recharts implementation with responsive containers, custom tooltips showing detailed metrics, and coordinated chart interactions

**Command Menu**: Global search/navigation using cmdk, triggered by Cmd+K, with categorized results

This design system creates a sophisticated, data-rich application that balances visual polish with functional clarity, ensuring VITA 2.0 delivers a professional, accessible user experience.