# Metadata SEO Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder metadata values with production-ready metadata across all pages so Google stops indexing the site with "Home" / "Welcome to Next.js".

**Architecture:** Next.js App Router metadata system. `app/layout.jsx` sets the `title.template` so page-level `title` strings are automatically suffixed with `| NV Marketing`. The homepage uses `title.absolute` to avoid double-suffixing. The blog `[slug]` route already uses `generateMetadata` (dynamic, from Sanity) and needs no structural change.

**Tech Stack:** Next.js 14+ App Router, JSX (no TypeScript in this project)

---

## File Map

| File | Action | What changes |
|---|---|---|
| `app/layout.jsx` | Modify | Replace placeholder `metadata` with template + default + description + metadataBase |
| `app/page.jsx` | Modify | Add `export const metadata` with `absolute` title to prevent double-suffix |
| `app/about/page.jsx` | Modify | Upgrade description copy |
| `app/services/page.jsx` | Modify | Upgrade description copy |
| `app/contact/page.jsx` | Modify | Upgrade description copy |
| `app/blog/page.jsx` | Modify | Upgrade description copy |
| `app/blog/[slug]/page.jsx` | No change | Already has `generateMetadata`; works correctly with the new template |

---

### Task 1: Fix root layout metadata

**Files:**
- Modify: `app/layout.jsx:17-20`

- [ ] **Step 1: Replace the placeholder metadata export**

Replace:
```js
export const metadata = {
	title: 'Home',
	description: 'Welcome to Next.js'
};
```

With:
```js
export const metadata = {
	title: {
		template: '%s | NV Marketing',
		default: 'NV Marketing | Web Design, Development & SEO — Intermountain Region'
	},
	description:
		'NV Marketing helps small businesses in the Intermountain region build high-performance websites and grow organic traffic. Web design, development, and SEO at small-business prices.',
	metadataBase: new URL('https://nv-marketing.com')
};
```

- [ ] **Step 2: Verify no lint/build errors**

Run: `cd /path/to/project && npx next build 2>&1 | tail -20`
Expected: no metadata-related errors

- [ ] **Step 3: Commit**

```bash
git add app/layout.jsx
git commit -m "fix: replace placeholder root metadata with production values"
```

---

### Task 2: Add homepage metadata

**Files:**
- Modify: `app/page.jsx`

`app/page.jsx` currently has no metadata export, so it inherits the root layout's `default` title. Adding an explicit `title.absolute` locks the homepage title and bypasses the `%s | NV Marketing` template (which would otherwise produce "NV Marketing | Web Design, Development & SEO — Intermountain Region | NV Marketing").

- [ ] **Step 1: Add metadata export before the default export**

Insert after the last import line and before `export default async function Home()`:
```js
export const metadata = {
	title: {
		absolute: 'NV Marketing | Web Design, Development & SEO — Intermountain Region'
	},
	description:
		'NV Marketing helps small businesses in the Intermountain region build high-performance websites and grow organic traffic. Web design, development, and SEO at small-business prices.',
	alternates: {
		canonical: '/'
	}
};
```

- [ ] **Step 2: Commit**

```bash
git add app/page.jsx
git commit -m "feat: add homepage metadata"
```

---

### Task 3: Upgrade About page metadata

**Files:**
- Modify: `app/about/page.jsx:10-14`

- [ ] **Step 1: Replace the metadata export**

Replace:
```js
export const metadata = {
	title: 'About',
	description:
		'NV Marketing was born in the heart of the Rocky Mountains and strives to serve all.'
};
```

With:
```js
export const metadata = {
	title: 'About',
	description:
		'Learn about NV Marketing — a Rocky Mountain agency dedicated to helping small businesses succeed online with honest, high-performance web design, development, and SEO.',
	alternates: {
		canonical: '/about'
	}
};
```

- [ ] **Step 2: Commit**

```bash
git add app/about/page.jsx
git commit -m "feat: upgrade About page metadata description"
```

---

### Task 4: Upgrade Services page metadata

**Files:**
- Modify: `app/services/page.jsx:9-13`

- [ ] **Step 1: Replace the metadata export**

Replace:
```js
export const metadata = {
	title: 'Services',
	description:
		'NV Marketing provides high quality web design, web development, & SEO services to fit your budget.'
};
```

With:
```js
export const metadata = {
	title: 'Services',
	description:
		'Explore NV Marketing services: custom web design, full-stack web development, and SEO — all priced for small-business budgets in the Intermountain region.',
	alternates: {
		canonical: '/services'
	}
};
```

- [ ] **Step 2: Commit**

```bash
git add app/services/page.jsx
git commit -m "feat: upgrade Services page metadata"
```

---

### Task 5: Upgrade Contact page metadata

**Files:**
- Modify: `app/contact/page.jsx:7-10`

- [ ] **Step 1: Replace the metadata export**

Replace:
```js
export const metadata = {
	title: 'Contact',
	description: 'Contact NV Marketing today to discuss your online presence.'
};
```

With:
```js
export const metadata = {
	title: 'Contact',
	description:
		'Get in touch with NV Marketing to discuss your website, SEO strategy, or any digital marketing needs. We serve small businesses across the Intermountain region.',
	alternates: {
		canonical: '/contact'
	}
};
```

- [ ] **Step 2: Commit**

```bash
git add app/contact/page.jsx
git commit -m "feat: upgrade Contact page metadata"
```

---

### Task 6: Upgrade Blog index page metadata

**Files:**
- Modify: `app/blog/page.jsx:7-11`

- [ ] **Step 1: Replace the metadata export**

Replace:
```js
export const metadata = {
	title: 'Blog',
	description:
		'NV Marketing believes in shared knowledge. This blog is to help educate to help make more informed decisions.'
};
```

With:
```js
export const metadata = {
	title: 'Blog',
	description:
		'Web design, development, and SEO insights from NV Marketing — practical guides to help small businesses grow their online presence.',
	alternates: {
		canonical: '/blog'
	}
};
```

- [ ] **Step 2: Commit**

```bash
git add app/blog/page.jsx
git commit -m "feat: upgrade Blog index page metadata"
```

---

### Task 7: Verify production metadata in the browser / curl

- [ ] **Step 1: Start dev server and spot-check**

Run: `npm run dev`

Then in a second terminal:
```bash
curl -s http://localhost:3000 | grep -E 'meta name="description"|<title'
```
Expected output should contain:
- `<title>NV Marketing | Web Design, Development &amp; SEO — Intermountain Region</title>`
- `<meta name="description" content="NV Marketing helps small businesses...`

- [ ] **Step 2: Spot-check an inner page**

```bash
curl -s http://localhost:3000/about | grep -E 'meta name="description"|<title'
```
Expected: `<title>About | NV Marketing</title>`

- [ ] **Step 3: Confirm "Welcome to Next.js" is gone**

```bash
curl -s http://localhost:3000 | grep "Welcome to Next.js"
```
Expected: no output (empty)
