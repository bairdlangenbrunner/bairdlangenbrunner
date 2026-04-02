# Accessibility Review

Review of [bairdlangenbrunner.com](https://bairdlangenbrunner.com) portfolio site.  
Date: 2026-04-02

---

## Summary

The site is a clean, minimal personal portfolio built with React + Vite. It has a few good accessibility foundations (semantic `<nav>`, `<footer>`, `aria-label` on the hamburger button, secure external links) but has several gaps that would affect screen reader users, keyboard-only users, and users with motion sensitivities.

Issues are grouped by priority.

---

## P0 -- Critical

### 1. Desktop nav links have no accessible names

**File:** `src/components/Header.jsx:21-56`  
**Issue:** Desktop navigation uses icon-only links (`<HomeIcon>`, `<UserCircleIcon>`, etc.) with no `aria-label`, no visible text, and no `<title>` on the SVG icons. The `data-tooltip` attribute is rendered via CSS `::after` pseudo-element, which is invisible to screen readers.  
**Impact:** A screen reader user hears something like "link" with no indication of where it goes.  
**Fix:** Add `aria-label` to each `<NavLink>` and `<a>` in the desktop nav (e.g., `aria-label="Home"`, `aria-label="About"`, etc.).

### 2. Animated SVG map has no accessible alternative

**File:** `src/components/Homolosines.jsx:172-174`  
**Issue:** The `<svg>` element has no `role`, `aria-label`, or `<title>`/`<desc>` element. The entire home page is this visualization with no text content.  
**Impact:** Screen reader users land on the home page and encounter nothing meaningful.  
**Fix:** Add `role="img"` and `aria-label="Animated world map projection"` to the SVG, or provide a visually-hidden text description nearby.

### 3. No `<main>` landmark

**File:** `src/components/Layout.jsx:14`  
**Issue:** The page content area is a plain `<div class="between-header-footer-div">`. There is no `<main>` element.  
**Impact:** Screen reader users cannot jump to the main content. Landmark navigation is incomplete (`<nav>` and `<footer>` exist, but `<main>` does not).  
**Fix:** Change `<div className="between-header-footer-div">` to `<main className="between-header-footer-div">`.

---

## P1 -- High

### 4. No visible focus indicators

**File:** `src/index.css`  
**Issue:** There are no focus styles defined for links or buttons. The global `outline` rule is commented out (line 16). Browser defaults may be suppressed by the reset (`* { margin: 0; padding: 0; }`).  
**Impact:** Keyboard users cannot see which element is currently focused.  
**Fix:** Add `:focus-visible` styles to links and buttons, e.g.:

```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--lime-700);
  outline-offset: 2px;
}
```

### 5. No skip link

**Issue:** There is no "Skip to main content" link at the top of the page.  
**Impact:** Keyboard users must tab through all navigation items on every page load before reaching content.  
**Fix:** Add a visually-hidden skip link as the first element inside the layout that becomes visible on focus, targeting the `<main>` element.

### 6. No keyboard handling for mobile menu

**File:** `src/components/Header.jsx:60-70`, `src/components/Layout.jsx:12`  
**Issue:** The mobile menu has no Escape key handler to close it, no focus trap while open, and when it opens, the main content is completely unmounted (Layout.jsx:12-19), so focus is not managed.  
**Impact:** Keyboard/screen reader users may get disoriented when the menu opens or closes, and cannot press Escape to dismiss it.  
**Fix:**
- Add `onKeyDown` handler to close the menu on Escape.
- Move focus to the first menu link when opened and back to the hamburger button when closed.
- Consider using `aria-expanded` on the hamburger button.

---

## P2 -- Medium

### 7. No `prefers-reduced-motion` handling for the map animation

**File:** `src/components/Homolosines.jsx:138-150`  
**Issue:** The map runs a continuous `requestAnimationFrame` animation loop with no way to pause it and no check for `prefers-reduced-motion`.  
**Impact:** Users with vestibular disorders or motion sensitivities may experience discomfort.  
**Fix:** Check `window.matchMedia('(prefers-reduced-motion: reduce)')` and skip the animation loop if the user prefers reduced motion. Show a static map instead.

### 8. CSS tooltips are not keyboard-accessible

**File:** `src/index.css:111-132`  
**Issue:** Desktop nav tooltips appear only on `:hover` (line 130-132). There is no `:focus` or `:focus-within` rule.  
**Impact:** Keyboard users never see the tooltip text.  
**Fix:** Add `:focus-visible` and `:focus-within` selectors alongside `:hover`:

```css
.header-content a[data-tooltip]:hover::after,
.header-content a[data-tooltip]:focus-visible::after {
  opacity: 1;
}
```

(Though if P0 #1 is fixed with `aria-label`, this becomes less critical since the tooltip is purely visual reinforcement.)

### 9. External links don't indicate they open in a new tab

**Files:** `About.jsx`, `Projects.jsx`, `Footer.jsx`, `Header.jsx`  
**Issue:** Many links use `target="_blank"` but give no indication to the user (visual or accessible) that they'll open a new window/tab.  
**Impact:** Screen reader users are surprised by new tabs opening. Sighted users may also be confused.  
**Fix:** Either add `aria-label` with "(opens in new tab)" suffix, or add a visually-hidden `<span>` like `<span className="sr-only">(opens in new tab)</span>` after the link text. Consider a small external-link icon for sighted users.

### 10. Link text "here" is not descriptive

**File:** `src/components/Footer.jsx:14`  
**Issue:** The footer link reads "this site is maintained on github **here**" -- the link text is just "here".  
**Impact:** Screen reader users scanning links hear "here" with no context.  
**Fix:** Reword to make the link text meaningful, e.g., "this site is maintained on **GitHub**" with "GitHub" as the link.

### 11. Color contrast of link text

**File:** `src/index.css:41`  
**Issue:** Links use `--lime-700` (#4d7c0f) on a white background. This yields a contrast ratio of approximately 4.6:1, which passes WCAG AA for normal text (4.5:1 minimum) but just barely, and fails AAA (7:1). The header nav links use `--warmGray-950` on white, which is fine.  
**Impact:** Users with low vision may find link text slightly difficult to read.  
**Fix:** For AAA compliance, consider darkening to `--lime-800` (#3f6212, ~5.9:1) or adding underlines consistently (already present) to rely less on color alone to distinguish links.

---

## P3 -- Low

### 12. Page `<title>` is just "baird"

**File:** `index.html:6`  
**Issue:** The page title is "baird" for all routes. It doesn't change per page.  
**Impact:** Screen reader users and browser tab users can't distinguish between pages. History/bookmarks are all labeled the same.  
**Fix:** Use `document.title` updates per route (or a library like `react-helmet`) to set titles like "About -- Baird Langenbrunner", "Projects -- Baird Langenbrunner".

### 13. `<Link>` used for external URLs

**Files:** `About.jsx`, `Projects.jsx`, `Footer.jsx`  
**Issue:** React Router's `<Link>` is used for external URLs (e.g., `<Link to="https://github.com/..."`). While this works, `<Link>` is designed for internal routing. External links don't get `rel="noopener noreferrer"` unless explicitly added, and some are missing it.  
**Impact:** Minor -- mostly a code quality issue, but the missing `rel` attributes are a minor security/privacy concern.  
**Fix:** Use `<a href="...">` for all external links. Add `rel="noopener noreferrer"` consistently.

### 14. Heading hierarchy on the home page

**File:** `src/pages/Home.jsx` (via `Homolosines.jsx`)  
**Issue:** The home page has no headings at all -- it's just the map visualization. The other pages correctly use `<h1>`.  
**Impact:** Screen reader users have no heading to orient themselves on the home page.  
**Fix:** Add a visually-hidden `<h1>` like `<h1 className="sr-only">Baird Langenbrunner</h1>` on the home page.

### 15. `<html lang>` is set (good), but no language on dynamic content

**File:** `index.html:2`  
**Note:** `lang="en"` is present, which is correct. No further action needed here.

---

## Recommended utility class

Several fixes above reference a visually-hidden/screen-reader-only pattern. Add this utility to `index.css`:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Quick wins (can be done in < 30 minutes)

1. Add `aria-label` to desktop nav links (P0 #1)
2. Add `role="img"` and `aria-label` to the SVG (P0 #2)
3. Change `<div>` to `<main>` in Layout.jsx (P0 #3)
4. Add `:focus-visible` styles (P1 #4)
5. Fix the "here" link text in Footer (P2 #10)
6. Switch external `<Link>` to `<a>` (P3 #13)

---

## WCAG 2.1 checklist summary

| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.1.1 Non-text content | Fail | SVG map has no alt (#2) |
| 1.3.1 Info and relationships | Fail | No `<main>` landmark (#3) |
| 2.1.1 Keyboard | Partial | No focus indicators (#4), no menu keyboard support (#6) |
| 2.3.1 Three flashes | Pass | Animation is slow/smooth |
| 2.4.1 Bypass blocks | Fail | No skip link (#5) |
| 2.4.2 Page titled | Partial | Title doesn't change per page (#12) |
| 2.4.4 Link purpose | Fail | Icon-only nav (#1), "here" link (#10) |
| 2.4.6 Headings and labels | Partial | Home page has no heading (#14) |
| 2.5.5 Target size | Pass | Mobile menu items are 44px+ |
| 3.2.5 Change on request | Partial | New tabs not indicated (#9) |
| 4.1.2 Name, role, value | Fail | Icon-only links have no name (#1) |
