# Blog Post CTA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dead-end "Return Home" / "Read More Posts" buttons on every blog post with a service-conversion CTA prompting visitors to schedule a free consultation.

**Architecture:** Add a static `BlogPostCta` server component in `app/components/blog/` with its own SCSS module, then integrate it into `app/blog/[slug]/page.jsx` in place of the existing navigation buttons. No Sanity CMS changes needed — copy is hardcoded and consistent across all posts.

**Tech Stack:** Next.js (App Router), React Server Components, SCSS Modules

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Create | `app/components/blog/BlogPostCta.jsx` | Static CTA component |
| Create | `app/styles/components/blog/BlogPostCta.module.scss` | Scoped styles for the component |
| Modify | `app/blog/[slug]/page.jsx` | Replace button section with `BlogPostCta` |

---

### Task 1: Create BlogPostCta stylesheet

**Files:**
- Create: `app/styles/components/blog/BlogPostCta.module.scss`

- [ ] **Step 1: Create the SCSS module**

```scss
/* ----- Blog Post CTA Styles
----- */

@use '../../abstracts/' as *;

.blog_cta {
	padding: 3rem 1rem;

	@include breakpoint-up(md) {
		padding: 4rem 1rem;
	}

	@include breakpoint-up(lg) {
		padding: 5rem 2rem;
	}

	@include breakpoint-up(xl) {
		padding: 6rem 2rem;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	&__content {
		max-width: 656px;
		text-align: center;
	}

	&__header {
		font-size: var(--fs-h2);
		font-weight: 700;
		color: var(--clr-blue-dark);
	}

	&__sub_header {
		margin-top: 1rem;
		font-size: var(--fs-p);
		color: var(--clr-blue-dark);
		opacity: 0.9;
	}

	&__btn {
		margin-top: 2.5rem;
		width: 290px;
	}
}
```

- [ ] **Step 2: Commit**

```bash
git add app/styles/components/blog/BlogPostCta.module.scss
git commit -m "style: add BlogPostCta SCSS module"
```

---

### Task 2: Create BlogPostCta component

**Files:**
- Create: `app/components/blog/BlogPostCta.jsx`

- [ ] **Step 1: Create the component**

```jsx
import Link from 'next/link';

// Components
import PrimaryBtn from '@/app/components/misc/PrimaryBtn';

// Styles
import styles from '@/app/styles/components/blog/BlogPostCta.module.scss';

export default function BlogPostCta() {
	return (
		<section className={styles.blog_cta}>
			<div className={styles.blog_cta__wrapper}>
				<div className={styles.blog_cta__content}>
					<h2 className={styles.blog_cta__header}>
						Ready to grow your business online?
					</h2>
					<p className={styles.blog_cta__sub_header}>
						Schedule a free 30-minute consultation.
					</p>
				</div>
				<Link href='/contact'>
					<PrimaryBtn text='Get Started' classname={styles.blog_cta__btn} />
				</Link>
			</div>
		</section>
	);
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/blog/BlogPostCta.jsx
git commit -m "feat: add BlogPostCta component"
```

---

### Task 3: Integrate BlogPostCta into the blog post page

**Files:**
- Modify: `app/blog/[slug]/page.jsx`

The current page imports `PrimaryBtn`, `SecondaryBtn`, and `Link` solely to render two dead-end navigation buttons. Replace that block with `BlogPostCta` and remove the now-unused imports.

- [ ] **Step 1: Update imports — remove `Link`, `PrimaryBtn`, `SecondaryBtn`; add `BlogPostCta`**

Replace the top import block from:

```jsx
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { sanityClient, urlFor } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';

// Components
import FullLinesLower from '@/app/components/misc/FullLinesLower';
import PrimaryBtn from '@/app/components/misc/PrimaryBtn';
import RightLines from '@/app/components/misc/RightLines';
import SecondaryBtn from '@/app/components/misc/SecondaryBtn';
```

to:

```jsx
import Image from 'next/image';
import Script from 'next/script';
import { sanityClient, urlFor } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';

// Components
import BlogPostCta from '@/app/components/blog/BlogPostCta';
import FullLinesLower from '@/app/components/misc/FullLinesLower';
import RightLines from '@/app/components/misc/RightLines';
```

- [ ] **Step 2: Replace the buttons block with `<BlogPostCta />`**

Replace:

```jsx
<div className={styles.post__btns}>
    <Link href={'/'}>
        <PrimaryBtn
            text='Return Home'
            classname={styles.post__btn___primary}
        />
    </Link>
    <Link href={'/blog'}>
        <SecondaryBtn
            text='Read more Posts'
            classname={styles.post__btn___secondary}
        />
    </Link>
</div>
```

with:

```jsx
<BlogPostCta />
```

- [ ] **Step 3: Verify no linting/TypeScript errors**

```bash
cd /Users/natevalline/Documents/Web\ Development/NV\ Marketing\ LLC/develop
npx next lint
```

Expected: no errors or warnings referencing the changed files.

- [ ] **Step 4: Commit**

```bash
git add app/blog/[slug]/page.jsx
git commit -m "feat: replace blog post nav buttons with service CTA"
```

---

### Task 4: Remove unused SCSS rules for dead-end buttons

The `.post__btns`, `.post__btn___primary`, and `.post__btn___secondary` rules in `PostPage.module.scss` are now dead code.

**Files:**
- Modify: `app/styles/components/blog/PostPage.module.scss`

- [ ] **Step 1: Delete the button rules**

Remove from `app/styles/components/blog/PostPage.module.scss`:

```scss
	&__btns {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		@include breakpoint-up(xl) {
			margin: 5rem auto 0;
			flex-direction: row;
			justify-content: center;
		}
	}

	&__btn___primary,
	&__btn___secondary {
		width: 290px;
	}
```

- [ ] **Step 2: Verify no linting/TypeScript errors**

```bash
cd /Users/natevalline/Documents/Web\ Development/NV\ Marketing\ LLC/develop
npx next lint
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/styles/components/blog/PostPage.module.scss
git commit -m "style: remove unused blog post button CSS"
```
