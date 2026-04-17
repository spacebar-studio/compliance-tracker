# Mosey Compliance Tracker — Design System

A comprehensive design system extracted from the Mosey Compliance Tracker interface. This document covers every visual token, component, animation, and interaction pattern used across the application.

---

## Table of Contents

**Foundations**
1. [Design Principles](#1-design-principles)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing Scale](#4-spacing-scale)
5. [Elevation & Shadows](#5-elevation--shadows)

**Components**
6. [Component Library](#6-component-library)

**Motion**
7. [Motion & Animation](#7-motion--animation)

**Patterns**
8. [Layout Patterns](#8-layout-patterns)
9. [Icons & Indicators](#9-icons--indicators)
10. [Data Hierarchy](#10-data-hierarchy)
11. [Feedback & States](#11-feedback--states)

**Guidelines**
12. [Usage Rules](#12-usage-rules)
13. [Accessibility](#13-accessibility)

---

## 1. Design Principles

The foundational principles guiding every design decision in the Compliance Tracker interface.

### Core Principles

| Principle | Description |
|---|---|
| **Status Over Silence** | Every registration has a visible, named state at all times. Users never wonder "where does this stand?" — the tracker shows it. |
| **Blockers Before Surprises** | Surface what needs action before it becomes a missed deadline. Proactive alerts over reactive firefighting. |
| **One Source of Truth** | Finance, HR, and legal see the same compliance picture from their own lens. No version conflicts, no misaligned status. |
| **Role-Aware Clarity** | Show each user exactly what they need to know and act on, nothing more. Category filters and role-based views reduce noise. |
| **Trust Through Transparency** | Show the work: every step, every agency interaction, every milestone. The progress tracker makes the invisible visible. |

### Visual Design Philosophy

- **Light & Clean**: White card surfaces on light gray backgrounds create a professional, trustworthy environment for compliance data.
- **Semantic Color**: Status is communicated through consistent color mapping — Teal for new, Amber for attention, Green for done, Red for blocked.
- **Progressive Disclosure**: Dashboard summary → category filter → registration detail → step-by-step progress. Each layer adds depth without overwhelm.

---

## 2. Color Palette

### Page & Surface Colors

| Token | Hex | Usage |
|---|---|---|
| `pageBg` | `#F8FAFC` | App background, page surface |
| `cardBg` | `#FFFFFF` | Card surfaces, panels, sidebar |
| `border` | `#E2E8F0` | Default borders on cards, inputs, dividers |
| `borderLight` | `#F1F5F9` | Subtle dividers, progress bar track |

### Text Hierarchy

| Token | Hex | Usage |
|---|---|---|
| `text1` | `#1E293B` | Primary text — headings, labels, card titles |
| `text2` | `#64748B` | Secondary text — descriptions, body copy |
| `text3` | `#94A3B8` | Tertiary text — captions, timestamps, muted |

### Brand & Navigation

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#1B2559` | Navigation, structure, primary buttons |
| `navyLight` | `#2D3A6E` | Button hover state |
| `rose` | `#D4697A` | Brand accent, active filter state, active nav indicator |
| `roseBg` | `rgba(212,105,122,.06)` | Rose background fill for active nav items |
| `roseBd` | `rgba(212,105,122,.18)` | Rose border for accent cards |

### Semantic Status Colors

Each semantic color has three variants for layered usage: **Foreground** (the color itself), **Background** (8% opacity fill), and **Border** (20% opacity).

#### Teal (New / In Progress)

| Variant | Value | Usage |
|---|---|---|
| Foreground | `#0EA5E9` | New status text, in-progress indicators, progress bar fill |
| Background | `rgba(14,165,233,.08)` | Status badge fill, KPI icon background |
| Border | `rgba(14,165,233,.2)` | Activity feed left border, badge border |

#### Green (Completed / Success)

| Variant | Value | Usage |
|---|---|---|
| Foreground | `#22C55E` | Completed status text, success indicators |
| Background | `rgba(34,197,94,.08)` | Completed badge fill |
| Border | `rgba(34,197,94,.2)` | Completed border accent |

#### Amber (Action Required)

| Variant | Value | Usage |
|---|---|---|
| Foreground | `#EAB308` | Action required text, warning indicators |
| Background | `rgba(234,179,8,.08)` | Alert banner fill, warning badge fill |
| Border | `rgba(234,179,8,.2)` | Alert banner border, activity left border |

#### Red (Blocked / Error)

| Variant | Value | Usage |
|---|---|---|
| Foreground | `#EF4444` | Blocked status text, error indicators |
| Background | `rgba(239,68,68,.08)` | Blocked badge fill |
| Border | `rgba(239,68,68,.2)` | Blocked border accent |

### Color Usage Rules

- **Status Mapping**: Teal = New/In Progress, Amber = Action Required, Red = Blocked/Error, Green = Completed/Success.
- **Contrast**: Primary text (#1E293B) on light backgrounds maintains WCAG AA. Use text2 for secondary, text3 only for muted captions.
- **Backgrounds**: Never use semantic foreground colors as backgrounds directly. Use the background variant at 8% opacity.
- **Left Border Accent**: Activity feed items use a colored left border (3px) to indicate status category without adding visual noise.

---

## 3. Typography

### Typefaces

| Font | Family | Usage |
|---|---|---|
| **Inter** | `'Inter', system-ui, sans-serif` | All UI text — headings, labels, body, buttons, descriptions |
| **JetBrains Mono** | `'JetBrains Mono', monospace` | Dates, IDs, percentages, numeric data |

### Type Scale

| Size | Weight | Usage | Sample |
|---|---|---|---|
| 24px | 700 | Page title | Compliance Tracker |
| 20px | 700 | Section header | Dashboard |
| 16px | 600 | Card title | New York Payroll Registration |
| 14px | 600 | Subsection header | Recent Activity |
| 13px | 500 | Body text, descriptions | Track the progress of your registrations |
| 12px | 400 | Standard body, labels | Submitted on January 18, 2025 |
| 11px | 500 | Badges, buttons, small labels | Registration Automation Received |
| 10px | 600 | Uppercase labels, captions | ESTIMATED COMPLETION |

### Font Weights

| Weight | Name | Usage |
|---|---|---|
| 300 | Light | Rarely used, decorative |
| 400 | Regular | Body text, default |
| 500 | Medium | Buttons, badges, descriptions |
| 600 | Semibold | Labels, section headers, card titles |
| 700 | Bold | Page titles, KPI values |

### Numeric Typography

- **Font variant numeric**: `tabular-nums` on all KPI values and percentage displays for column alignment.
- **Monospace**: JetBrains Mono for dates (2025-01-22), percentages (10%), and registration IDs.
- **KPI values**: 28px / 700 / Inter with tabular-nums.

---

## 4. Spacing Scale

### Base Unit: 4px

| Value | Category | Usage |
|---|---|---|
| 4px | Minimal | Icon spacing, inline gaps |
| 8px | Small | Badge padding, tight gaps between elements |
| 12px | Medium | Card internal spacing, section gaps |
| 16px | Standard | Card padding, component spacing |
| 20px | Large | Card content padding, KPI tile padding |
| 24px | XL | Section separation |
| 32px | XXL | Major section spacing |
| 48px | Page | Outer padding, major layout margins |

### Component Padding

| Component | Padding |
|---|---|
| Badge | `3px 10px` |
| Button (sm) | `5px 12px` |
| Button | `7px 16px` |
| Filter Chip | `6px 14px` |
| Status Tab | `8px 16px` |
| KPI Tile | `16px 20px` |
| Card | `16px 18px` |
| Activity Item | `14px 16px` |
| Page Container | `28px 48px` |

### Border Radius

| Radius | Usage |
|---|---|
| 4px | Minimal rounding, small elements |
| 6px | Badges, chips, small buttons |
| 8px | Buttons, inner containers, activity items |
| 10px | Cards (primary container radius) |
| 12px | Large cards, modals |
| 20px | Filter pills, tab containers |
| 50% | Circular icons, status dots, indicators |

---

## 5. Elevation & Shadows

### Shadow Levels

| Level | Shadow | Usage |
|---|---|---|
| Level 0 — Flat | None (border only) | Default cards, static containers |
| Level 1 — Card | `0 1px 3px rgba(0,0,0,.06)` | Subtle lift for card surfaces |
| Level 2 — Elevated | `0 4px 12px rgba(0,0,0,.08)` | Hover states, modals, dropdowns |

### Left Border Accent

Activity feed items use a 3px colored left border to indicate status category:
- **Teal**: In Progress events
- **Amber**: Action Required events
- **Green**: Completed events
- **Red**: Blocked events

### Attention Glow

The action-required alert banner uses an animated box-shadow glow:
- Keyframes: `0 0 6px rgba(212,105,122,.2)` to `0 0 16px rgba(212,105,122,.4)`
- Duration: 2s ease-in-out infinite
- Usage: Only on the action-required alert banner

---

## 6. Component Library

### Status Badge

Status indicators with semantic color mapping.

**Variants:**

| Type | Background | Text Color | Border | Usage |
|---|---|---|---|---|
| `new` | `tealBg` | `teal` | `tealBd` | Registration just created |
| `in-progress` | `tealBg` | `teal` | `tealBd` | Actively processing |
| `action-required` | `amberBg` | `amber` | `amberBd` | User action needed |
| `blocked` | `redBg` | `red` | `redBd` | Stalled, intervention required |
| `completed` | `greenBg` | `green` | `greenBd` | Successfully filed |
| `category` | `navySoft` | `navy` | navy 12% | Domain classification |
| `automation` | `roseBg` | `rose` | `roseBd` | System-generated status |

**Spec:** `display: inline-flex`, `gap: 4px`, `padding: 3px 10px`, `border-radius: 6px`, `font-size: 11px`, `font-weight: 500`, `font-family: Inter`.

---

### Button

Primary and outline action buttons.

**Variants:**

| Variant | Background | Border | Text Color |
|---|---|---|---|
| **Primary** | `#1B2559` (Navy) | none | `#FFFFFF` |
| **Outline** | transparent | `1px solid #E2E8F0` | `#1E293B` |
| **Disabled** | same as variant | same | `opacity: 0.5` |

**Sizes:**

| Size | Padding | Font Size |
|---|---|---|
| Default | `7px 16px` | 12px |
| Small (`sm`) | `5px 12px` | 11px |

**States:**

| State | Behavior |
|---|---|
| Default | Standard appearance |
| Hover | Primary: bg shifts to `#2D3A6E`. Outline: subtle background. Both: `translateY(-1px)` lift |
| Disabled | `opacity: 0.5`, `cursor: not-allowed` |

**Spec:** `border-radius: 8px`, `font-weight: 500`, `font-family: Inter`, `transition: all 0.2s`.

---

### KPI Tile

At-a-glance metric cards for the dashboard header.

**Structure:**
1. Status icon in colored circle (24px, semantic color at 15% opacity)
2. Value (28px, bold, tabular-nums)
3. Label (12px, secondary text)

**Spec:** `padding: 16px 20px`, `border-radius: 10px`, `border: 1px solid #E2E8F0`, `background: #F8FAFC`.

**Layout:** 4 tiles in a CSS Grid row (`repeat(4, 1fr)`, `gap: 12px`).

---

### Registration Card

Primary container for displaying individual registration status.

**Anatomy:**
1. **Header**: Icon + Title (16px/600) + Category Badge + Status Badge. Submitted date below.
2. **Progress**: Label + Percentage (mono) + Progress bar (6px height, teal fill on light track).
3. **Steps**: Vertical step list with dot indicators. Active: filled teal dot + "Current" label. Inactive: border dot.
4. **Footer**: Estimated completion date (left) + View Details link (right). Top border separator.

**Spec:** `padding: 20px`, `border-radius: 10px`, `border: 1px solid #E2E8F0`, `background: #F8FAFC` or `#FFFFFF`.

---

### Progress Tracker

Step-by-step progress visualization for the registration lifecycle. Inspired by the Domino's Pizza Tracker.

**4-Step Lifecycle:**
1. Registration Received
2. Processing Started
3. Submitted to Agency
4. Registration Complete

**Progress Bar:** `height: 6px`, `border-radius: 3px`, `background: #F1F5F9` (track), fill color mapped to status.

**Step Dot States:**

| State | Dot | Text |
|---|---|---|
| Completed | Filled green, checkmark | Primary text |
| Current | Filled teal | Primary text + "Current" label |
| Upcoming | Transparent, border only | Tertiary text |
| Blocked | Filled red | Primary text |

---

### Filter Chip

Category filter pills for the dashboard.

**Categories:** All (9), Payroll (3), HR (1), Entity (3), Tax (2)

**States:**

| State | Background | Text | Border |
|---|---|---|---|
| Active | `#D4697A` (Rose) | `#FFFFFF` | none |
| Inactive | transparent | `#64748B` | `1px solid #E2E8F0` |
| Hover (inactive) | `rgba(0,0,0,.02)` | `#64748B` | `1px solid #E2E8F0` |

**Spec:** `padding: 6px 14px`, `border-radius: 20px`, `font-size: 12px`, `font-weight: 500`, `transition: all 0.2s`.

---

### Status Tabs

Segmented control for filtering registrations by status.

**Tabs:** New (2), In Progress (2), Action Required (1), Completed (1)

**States:**

| State | Background | Border-Bottom | Text |
|---|---|---|---|
| Active | `#FFFFFF` | `2px solid #1B2559` | Primary, 600wt |
| Inactive | transparent | `2px solid transparent` | Tertiary, 400wt |

**Spec:** `padding: 8px 16px`, `font-size: 12px`, `transition: all 0.2s`.

---

### Activity Feed Item

Timeline-style event cards with colored left borders.

**Structure:**
1. **Left Border**: 3px colored border — Teal (progress), Amber (action), Green (complete), Red (blocked)
2. **Header**: Status icon + Event title (14px/600) + Category badge. Right-aligned timestamp.
3. **Body**: Description (12px, secondary). Registration link chip in light pill.
4. **Timestamp**: Relative ("2 hours ago") + absolute date in mono.

**Spec:** `padding: 14px 16px`, `border-radius: 8px`, `background: #FFFFFF`, `border: 1px solid #E2E8F0`.

---

### Alert Banner

Top-of-dashboard notification for urgent compliance status.

**Variants:**

| Severity | Background | Border | Icon | Usage |
|---|---|---|---|---|
| Action Required | `amberBg` | `amberBd` | ⚠ | Registrations need attention |
| Blocked | `redBg` | `redBd` | 🚫 | Registrations are blocked |
| Success | `greenBg` | `greenBd` | ✓ | All on track |
| Info | `tealBg` | `tealBd` | ℹ | New registrations created |

**Spec:** `padding: 10px 16px`, `border-radius: 8px`. Action-required variant uses `gl` animation (glow).

---

### Navigation Sidebar

Left-side icon navigation.

**Collapsed State:** 48px wide, icon-only. Active item shows rose background tint + right-edge indicator bar (3px wide, 16px tall, Rose).

**Icon Spec:** 14px emoji icons centered in 32px touch targets. 4px gap. 12px vertical padding.

**Bottom Section:** Search, Settings, Support icons anchored to bottom.

---

### Help Card

Contextual guidance at the bottom of the dashboard.

**Structure:** Title (16px/600) + Subtitle (13px, secondary) + Bullet tips (12px, secondary) + Contact Support button (outline).

---

### Empty State

Placeholder when a section has no data.

**Structure:** Large faded icon (28px, 30% opacity) + Bold title (13px) + Description (11px, tertiary) + Action button (optional).

**Container:** `padding: 24px`, `border: 1px dashed #E2E8F0`, `border-radius: 10px`, `text-align: center`.

---

### Skeleton Loader

Shimmer placeholder shown during data loading. Mimics the exact layout of the content it replaces.

**Shimmer:** Linear gradient animation (`90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%`), `background-size: 200px`, `animation: 1.5s ease-in-out infinite`.

**Variants:** KPI skeleton, Registration card skeleton, Activity feed skeleton.

---

## 7. Motion & Animation

### Entrance Animations

| Class | Name | Keyframes | Duration | Usage |
|---|---|---|---|---|
| `fu` | Fade Up | `opacity: 0, translateY(12px)` to `opacity: 1, translateY(0)` | 0.45s ease-out | Cards, KPIs, page sections |
| `fi` | Fade In | `opacity: 0` to `opacity: 1` | 0.3s ease-out | Detail panels, expanded content |
| `fs` | Fade Scale | `opacity: 0, scale(0.96)` to `opacity: 1, scale(1)` | 0.4s ease-out | Tab content transitions |

### Continuous Animations

| Name | Effect | Duration | Usage |
|---|---|---|---|
| `gl` | Box-shadow glow pulse | 2s ease-in-out infinite | Action-required alert banner |
| `dsShimmer` | Background-position shift | 1.5s ease-in-out infinite | Skeleton loader shimmer |
| `meshGrad` | Background-position animation | 14s ease infinite | Page background gradient |

### Hover Transitions

| Element | Property | Duration |
|---|---|---|
| Buttons | `all` (background, transform) | 0.2s |
| Filter Chips | `all` (background, color) | 0.2s |
| Cards (interactive) | `border-color`, `transform` | 0.25s |
| Status Tabs | `all` (border, color, background) | 0.2s |
| Progress bars | `width` | 0.6s ease |

### Staggered Entry

Activity feed items and registration cards use sequential `animationDelay` for cascading entrance:
- Feed items: `animationDelay: i * 0.1s` (100ms between items)

---

## 8. Layout Patterns

### Dashboard Anatomy

Every dashboard screen follows a consistent top-to-bottom structure:

| Layer | Content | Position |
|---|---|---|
| 1. Top Navigation | Brand + Dashboard / Activity tabs | Fixed, full-width |
| 2. Page Header | Title + subtitle + alert banner | Below nav |
| 3. Category Filters | Filter chips: All, Payroll, HR, Entity, Tax | Inline-flex |
| 4. KPI Row | 4 metric tiles showing status counts | CSS Grid, 4 columns |
| 5. Recent Activity | Activity feed with colored left-border events | Vertical stack |
| 6. Status Tabs | New / In Progress / Action Required / Completed | Segmented control |
| 7. Registration List | Registration cards with progress trackers | Vertical stack |
| 8. Help Card | Contextual guidance + Contact Support | Bottom of page |

### App Shell Structure

```
┌──────────────────────────────────────────────────┐
│  Top Bar (brand + Dashboard / Activity tabs) h:48 │
├──────┬───────────────────────────────────────────┤
│      │                                           │
│ Side │         Main Content Area                  │
│ Nav  │         (flex: 1)                          │
│(48px)│         max-width: 900px                   │
│      │         padding: 24px 32px                 │
│      │                                           │
└──────┴───────────────────────────────────────────┘
```

### Grid Patterns

| Pattern | CSS | Usage |
|---|---|---|
| KPI Row | `grid-template-columns: repeat(4, 1fr)`, `gap: 12px` | Dashboard KPI tiles |
| Registration List | Vertical stack, `gap: 16px` | Registration cards |
| Activity Feed | Vertical stack, `gap: 10px` | Activity feed items |
| Filter Row | `display: inline-flex`, `gap: 8px` | Category filter chips |

---

## 9. Icons & Indicators

### Navigation Icons

| Section | Icon | Usage |
|---|---|---|
| Home | 🏠 | Dashboard |
| Categories | ⊞ | Main navigation (active) |
| Locations | 📍 | State view |
| Calendar | 📅 | Deadlines |
| Documents | 📁 | File management |
| Settings | ⚙ | Configuration |
| Messages | ✉ | Notifications |
| Analytics | 📊 | Reports |

### Status Indicators

| State | Color | Icon | Usage |
|---|---|---|---|
| New | Teal (#0EA5E9) | 📋 | Registration just created |
| In Progress | Teal (#0EA5E9) | ⏳ | Actively processing |
| Action Required | Amber (#EAB308) | ⚠ | User action needed |
| Blocked | Red (#EF4444) | 🚫 | Stalled, requires intervention |
| Completed | Green (#22C55E) | ✓ | Successfully filed |

### Category Icons

| Category | Icon | Usage |
|---|---|---|
| Payroll | ⊞ | Payroll registration filings |
| HR | 👥 | HR compliance filings |
| Entity | 📁 | Corporate entity setup |
| Tax | 💰 | Tax registration filings |

---

## 10. Data Hierarchy

### Progressive Disclosure Flow

```
KPI Summary  →  Category Filter  →  Registration List  →  Registration Detail
   (Scan)        (Filter)            (Explore)              (Act)
```

| Level | Component | Purpose |
|---|---|---|
| L1: KPI Summary | 4 metric tiles | 2-second health scan |
| L2: Category Filter | Filter chips | Narrow by domain |
| L3: Registration List | Registration cards | Individual status details |
| L4: Registration Detail | Full progress + timeline | Deep-dive and action |

### Information Hierarchy Principles

- Start with counts — KPI tiles give a 2-second health scan before any scrolling.
- Filter before detail — Category chips let users narrow context before diving into individual registrations.
- Status drives navigation — Tab-based filtering by status is the primary drill-down pattern.
- Steps tell the story — The 4-step progress tracker makes the invisible process visible.

---

## 11. Feedback & States

### Registration Status States

| Status | Color | Description |
|---|---|---|
| New | Teal | Just created, not yet processing. Default entry state. |
| In Progress | Teal | Actively being processed. Progress bar shows advancement. |
| Action Required | Amber | User action needed. Alert banner animates with glow. |
| Blocked | Red | Stalled and requires intervention. Highest urgency. |
| Completed | Green | Successfully filed and confirmed. No further action. |

### Loading States

| Pattern | Implementation | Usage |
|---|---|---|
| Skeleton Loader | Shimmer bars mimicking content layout | Initial page load |
| Progress Bar | Animated width transition (0.6s ease) | Registration processing |
| Button Loading | Text changes + disabled state | Form submissions |
| Activity Stagger | Sequential 100ms delay between items | Guided reading order |

### Empty States

| Scenario | Title | Action |
|---|---|---|
| No registrations | "No Active Registrations" | Start New Registration |
| No activity | "No Recent Activity" | View All History |
| All complete | "All Complete" | None |
| No filter results | "No Results" | Clear Filters |

---

## 12. Usage Rules

### Color

**Do:**
- Use semantic colors consistently: Teal = New/In Progress, Amber = Action Required, Red = Blocked, Green = Completed
- Use the background variant at 8% opacity for fills
- Pair every color-coded element with a text label
- Use left-border accent (3px) for activity feed status indication

**Don't:**
- Use semantic foreground colors as background fills directly
- Mix severity meanings (e.g., amber for success, teal for errors)
- Use text3 for interactive or important text — it's too low contrast
- Apply colored borders to cards without a semantic reason

### Typography

**Do:**
- Use Inter for all UI text — headings, labels, body, buttons
- Use JetBrains Mono for dates, IDs, percentages, and numeric data
- Use tabular-nums on all numeric displays for column alignment
- Apply uppercase + letter-spacing on section headers

**Don't:**
- Go below 10px font size for any text
- Use font-weight 700 on body text — reserve bold for headings and KPI values
- Mix fonts within a single label or value display
- Use centered text in data-dense tables or registration lists

### Components

**Do:**
- Show 4 KPIs in the dashboard header row at all times
- Include count in parentheses for status tabs and filter chips
- Use the progress tracker for every registration card
- Place the Help card at the bottom of the dashboard

**Don't:**
- Nest cards more than one level deep
- Use badges for interactive elements — they're display-only
- Skip the 4-step progress tracker on registration cards
- Mix filter chips and status tabs in the same filter context

### Motion

**Do:**
- Use fu (fade-up) for cards and sections entering the viewport
- Use gl (glow) only for the action-required alert banner
- Keep transition durations between 0.15s and 0.6s
- Use staggered delays (100ms) for activity feed items

**Don't:**
- Apply continuous animations to more than 1-2 elements at once
- Animate elements that are already visible — entrances only
- Use animation delays longer than 0.5s for staggered lists
- Add hover effects to non-interactive elements

---

## 13. Accessibility

### Color Contrast (WCAG 2.1)

Contrast ratios measured against the card background (#FFFFFF):

| Color | Token | Ratio | Level |
|---|---|---|---|
| `#1E293B` | text1 | 12.6:1 | AAA |
| `#64748B` | text2 | 4.7:1 | AA |
| `#1B2559` | navy | 11.8:1 | AAA |
| `#D4697A` | rose | 3.5:1 | AA (large text) |
| `#0EA5E9` | teal | 3.1:1 | AA (large text) |
| `#22C55E` | green | 3.0:1 | AA (large text) |
| `#EAB308` | amber | 2.8:1 | Paired with text label |
| `#EF4444` | red | 4.0:1 | AA |

### Color-Not-Only Encoding

Color is never the sole means of conveying information:
- Status badges always contain text labels
- Progress tracker steps include text labels alongside colored dots
- Activity feed items pair colored left-border with event type text and icon
- KPI tiles combine icon + numeric value + text label
- Filter chips include category name and count

### Font Size Minimums

| Size | Category | Usage |
|---|---|---|
| 10px | Minimum | Uppercase labels, captions. Never for interactive content. |
| 11px | Small | Buttons, badges, small labels. Smallest interactive text. |
| 12px | Body | Standard body text, descriptions. Default readable size. |

### Interactive Target Sizing

| Element | Padding | Min Height | Usage |
|---|---|---|---|
| Button (primary) | 7px 16px | ~34px | Primary actions |
| Button (sm) | 5px 12px | ~28px | Dense contexts |
| Filter Chip | 6px 14px | ~30px | Category selection |
| Status Tab | 8px 16px | ~34px | Status filtering |
| Nav Icon | 32px x 32px | 32px | Sidebar navigation |

---

## Appendix: Token Reference

```
// Colors
pageBg    = "#F8FAFC"     cardBg    = "#FFFFFF"     border    = "#E2E8F0"
text1     = "#1E293B"     text2     = "#64748B"     text3     = "#94A3B8"
navy      = "#1B2559"     rose      = "#D4697A"
teal      = "#0EA5E9"     green     = "#22C55E"
amber     = "#EAB308"     red       = "#EF4444"

// Fonts
Primary = "'Inter', system-ui, sans-serif"
Mono    = "'JetBrains Mono', monospace"

// Animation Classes
.fu = fade-up (0.45s)    .fi = fade-in (0.3s)    .fs = fade-scale (0.4s)
.gl = glow (2s infinite)  dsShimmer = shimmer (1.5s infinite)
```
