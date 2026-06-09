# Blog Author Attribution Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace "Nate V." with "Nate Valline", add an author bio box with credentials and an /about link, and enhance the BlogPosting JSON-LD author field with a `url` property.

**Architecture:** The blog post page (`app/blog/[slug]/page.jsx`) is a Next.js server component. The author display name is currently pulled from the Sanity `post.author` string (which holds "Nate V."). We will hardcode the display name as "Nate Valline" (single-author site — no reason to delegate to CMS string), create a new self-contained `AuthorBio` component, and add the `url` field to the existing JSON-LD author object.

**Tech Stack:** Next.js 16 (App Router), SCSS Modules, Sanity (read-only for this task), ESLint

---

## File Map

| Action | File |
|--------|------|
| Modify | `app/blog/[slug]/page.jsx` — fix author display, add AuthorBio import, add `url` to JSON-LD |
| Create | `app/components/blog/AuthorBio.jsx` — author bio box component |
| Create | `app/styles/components/blog/AuthorBio.module.scss` — styles for bio box |

---

### Task 1: Fix Author Display Name in page.jsx

**Files:**
- Modify: `app/blog/[slug]/page.jsx:133`

- [ ] **Step 1: Change `{post.author}` to the hardcoded string "Nate Valline"**

In `app/blog/[slug]/page.jsx`, find the `post__details` block (line 131–135) and replace the dynamic author value:

```jsx
<div className={styles.post__details}>
  <p className={styles.post__date}>{formattedDate}</p>
  <p className={styles.post__author}>Nate Valline</p>
</div>
```

- [ ] **Step 2: Run lint to verify no errors**

```bash
cd "/Users/natevalline/Documents/Web Development/NV Marketing LLC/develop" && npm run lint
```

Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 3: Commit**

```bash
git add "app/blog/[slug]/page.jsx"
git commit -m "fix: display full author name as Nate Valline"
```

---

### Task 2: Create AuthorBio Component

**Files:**
- Create: `app/components/blog/AuthorBio.jsx`
- Create: `app/styles/components/blog/AuthorBio.module.scss`

- [ ] **Step 1: Create the AuthorBio component**

Create `app/components/blog/AuthorBio.jsx`:

```jsx
import Link from 'next/link';
import styles from '@/app/styles/components/blog/AuthorBio.module.scss';

export default function AuthorBio() {
	return (
		<div className={styles.author_bio}>
			<div className={styles.author_bio__wrapper}>
				<p className={styles.author_bio__name}>Nate Valline</p>
				<p className={styles.author_bio__credentials}>
					Web developer and digital marketing consultant with 10+ years of
					experience helping small businesses grow their online presence through
					strategy-driven websites and SEO.
				</p>
				<Link href='/about' className={styles.author_bio__link}>
					About Nate
				</Link>
			</div>
		</div>
	);
}
```

- [ ] **Step 2: Create the AuthorBio styles**

Create `app/styles/components/blog/AuthorBio.module.scss`:

```scss
/* ----- Author Bio Styles
----- */

@use '../../abstracts/' as *;

.author_bio {
	margin: 2rem auto 0;
	max-width: 800px;
	padding: 1.5rem;
	border-top: 2px solid var(--clr-green-light);
	border-radius: 0 0 8px 8px;

	@include breakpoint-up(md) {
		padding: 2rem;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	&__name {
		font-size: var(--fs-p);
		font-weight: 700;
		color: var(--clr-blue-dark);
	}

	&__credentials {
		font-size: var(--fs-p-sm);
		color: var(--clr-blue-dark);
		opacity: 0.9;
		line-height: 1.6;
	}

	&__link {
		align-self: flex-start;
		font-size: var(--fs-p-sm);
		font-weight: 600;
		color: var(--clr-green-light);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
}
```

- [ ] **Step 3: Run lint to verify no errors**

```bash
cd "/Users/natevalline/Documents/Web Development/NV Marketing LLC/develop" && npm run lint
```

Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 4: Commit**

```bash
git add "app/components/blog/AuthorBio.jsx" "app/styles/components/blog/AuthorBio.module.scss"
git commit -m "feat: add AuthorBio component with credentials and about link"
```

---

### Task 3: Wire AuthorBio into Blog Post Page and Enhance JSON-LD

**Files:**
- Modify: `app/blog/[slug]/page.jsx`

- [ ] **Step 1: Import AuthorBio and add `url` to the JSON-LD author object**

In `app/blog/[slug]/page.jsx`:

1. Add the import after the existing `BlogPostCta` import (line 7):
```jsx
import AuthorBio from '@/app/components/blog/AuthorBio';
```

2. Update the `blogPostingSchema` author field (around line 85–88) to add `url`:
```js
author: {
  '@type': 'Person',
  name: 'Nate Valline',
  url: 'https://nv-marketing.com/about'
},
```

3. Insert `<AuthorBio />` between the closing `</article>` tag and `<BlogPostCta />` (around line 136):
```jsx
</article>
<AuthorBio />
<BlogPostCta />
```

The full updated `post` section should look like:
```jsx
<section className={styles.post}>
  <article className={styles.post__article}>
    <PortableText value={post.content} />
    <div className={styles.post__details}>
      <p className={styles.post__date}>{formattedDate}</p>
      <p className={styles.post__author}>Nate Valline</p>
    </div>
  </article>
  <AuthorBio />
  <BlogPostCta />
</section>
```

- [ ] **Step 2: Run lint to verify no errors**

```bash
cd "/Users/natevalline/Documents/Web Development/NV Marketing LLC/develop" && npm run lint
```

Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 3: Commit**

```bash
git add "app/blog/[slug]/page.jsx"
git commit -m "feat: wire AuthorBio into blog post page and add url to JSON-LD author"
```

---

## Self-Review

**Spec coverage:**
- [x] Change author display name to "Nate Valline" — Task 1
- [x] Author bio box below article content with credentials and /about link — Tasks 2 & 3
- [x] BlogPosting JSON-LD author field enhanced with `url` — Task 3

**Placeholder scan:** No TBD/TODO/placeholder content — all code is complete.

**Type consistency:** No TypeScript in this project; JSX component names and CSS class names are consistent across all tasks.

**Note on CSS variables:** The styles reference `var(--clr-green-light)` and `var(--clr-blue-dark)`. Verify these variable names exist in `app/styles/globals.scss` or the base CSS. If they differ, update `AuthorBio.module.scss` to match the actual variable names used in comparable components like `BlogPostCta.module.scss`.
