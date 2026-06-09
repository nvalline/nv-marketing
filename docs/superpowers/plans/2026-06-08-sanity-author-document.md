# Sanity Author Document & Dynamic Author Attribution Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace hardcoded author values with a reusable Sanity `Author` document that blog posts reference, and propagate dynamic author data (name, bio, optional URL) through the blog post page and JSON-LD schema.

**Architecture:** A new `author` document type in Sanity holds name, bio, and an optional URL per author. The `posts` schema replaces its `author` string field with a reference to this document. The GROQ query dereferences the reference to fetch author fields. `AuthorBio` becomes a pure component that accepts an `author` prop rather than hardcoding values. The JSON-LD author object is built from the live Sanity data.

**Tech Stack:** Sanity (schema), Next.js 16 (App Router), GROQ, JSX

---

> **Data migration note:** After deploying the new Sanity schema, existing blog posts will have a broken `author` reference (old string field is incompatible with the new reference field). You must: (1) create Author documents in the Sanity Studio for each author, then (2) re-assign the author field on every existing blog post to point to the correct Author document. The frontend will fail to render posts until migration is complete.

---

## File Map

| Action | File |
|--------|------|
| Create | `sanity/schemas/documents/Author.js` — new Author document type |
| Modify | `sanity/schemas/documents/Blog.js` — change `author` from string to reference |
| Modify | `sanity/schemas/index.js` — register Author |
| Modify | `app/components/blog/AuthorBio.jsx` — accept `author` prop, render dynamically |
| Modify | `app/blog/[slug]/page.jsx` — dereference author in GROQ, pass author to AuthorBio, fix JSON-LD |

---

### Task 1: Create Author Sanity Schema and Register It

**Files:**
- Create: `sanity/schemas/documents/Author.js`
- Modify: `sanity/schemas/documents/Blog.js`
- Modify: `sanity/schemas/index.js`

- [ ] **Step 1: Create `sanity/schemas/documents/Author.js`**

```js
// Author.js

export default {
  name: 'author',
  type: 'document',
  title: 'Authors',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'Short credentials summary shown in the author bio box on blog posts.',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Author URL',
      description: 'Optional link to an about or profile page for this author.',
    },
  ],
}
```

- [ ] **Step 2: Update `sanity/schemas/documents/Blog.js` — replace the `author` string field with a reference**

Replace the entire file content with:

```js
// Blog.js

export default {
  name: 'posts',
  type: 'document',
  title: 'Blog Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
    },
    {
      name: 'date',
      type: 'date',
      title: 'Post Date',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'caption',
      type: 'array',
      title: 'Caption',
      of: [{ type: 'block' }],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    },
  ],
}
```

- [ ] **Step 3: Register Author in `sanity/schemas/index.js`**

Replace the entire file content with:

```js
import Author from './documents/Author'
import Blog from './documents/Blog'
import CallToActions from './documents/CallToActions'
import Clients from './documents/Clients'
import Commitments from './documents/Commitments'
import CoreValues from './documents/CoreValues'
import Service from './objects/Service'
import Services from './documents/Services'
import Testimonials from './documents/Testimonials'

export const schemaTypes = [
  Author,
  Blog,
  CallToActions,
  Clients,
  Commitments,
  CoreValues,
  Service,
  Services,
  Testimonials,
]
```

- [ ] **Step 4: Commit**

```bash
git add sanity/schemas/documents/Author.js sanity/schemas/documents/Blog.js sanity/schemas/index.js
git commit -m "feat: add Author document type and update Blog to reference Author"
```

---

### Task 2: Update AuthorBio Component to Accept Author Prop

The `author` prop shape is `{ name: string, bio: string, url?: string }`.

**Files:**
- Modify: `app/components/blog/AuthorBio.jsx`

- [ ] **Step 1: Update `app/components/blog/AuthorBio.jsx` to render from props**

Replace the entire file content with:

```jsx
import Link from 'next/link';
import styles from '@/app/styles/components/blog/AuthorBio.module.scss';

export default function AuthorBio({ author }) {
	return (
		<div className={styles.author_bio}>
			<div className={styles.author_bio__wrapper}>
				<p className={styles.author_bio__name}>{author.name}</p>
				<p className={styles.author_bio__credentials}>{author.bio}</p>
				{author.url && (
					<Link href={author.url} className={styles.author_bio__link}>
						About {author.name}
					</Link>
				)}
			</div>
		</div>
	);
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/blog/AuthorBio.jsx
git commit -m "feat: make AuthorBio accept dynamic author prop"
```

---

### Task 3: Update Blog Post Page — GROQ, Display, JSON-LD

The GROQ query must dereference the author reference with `author->{ name, bio, url }`. The page then passes `post.author` to `<AuthorBio />` and builds the JSON-LD author object from the same data.

**Files:**
- Modify: `app/blog/[slug]/page.jsx`

- [ ] **Step 1: Update the GROQ query and page component**

Replace the entire `app/blog/[slug]/page.jsx` with:

```jsx
import Image from 'next/image';
import Script from 'next/script';
import { sanityClient, urlFor } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';

// Components
import BlogPostCta from '@/app/components/blog/BlogPostCta';
import AuthorBio from '@/app/components/blog/AuthorBio';
import FullLinesLower from '@/app/components/misc/FullLinesLower';
import RightLines from '@/app/components/misc/RightLines';

// Styles
import styles from '../../styles/components/blog/PostPage.module.scss';

export async function generateMetadata({ params, searchParams }, parent) {
	try {
		const { slug } = await params;
		const postData = await getPost(slug);

		return {
			title: postData.title,
			description: postData.excerpt,
			alternates: {
				canonical: `/blog/${slug}`
			}
		};
	} catch (error) {
		return {
			title: 'Page Not Found',
			description: 'The page you are looking for is not found.'
		};
	}
}

const getPost = async (slug) => {
	const query = `*[_type == 'posts' && slug.current == '${slug}']{_id, _updatedAt, author->{ name, bio, url }, content, coverImage, date, title, excerpt, caption}`;

	const data = await sanityClient.fetch(query);

	return data[0];
};

function formatDate(inputDate) {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const dateParts = inputDate.split('-');
	const year = dateParts[0];
	const month = months[parseInt(dateParts[1], 10) - 1];
	const day = dateParts[2];

	return `${month}. ${parseInt(day, 10)}, ${year}`;
}

export default async function page({ params, searchParams }) {
	const { slug } = await params;
	const post = await getPost(slug);
	const postImage = urlFor(post.coverImage).url();

	const inputDate = post.date;
	const formattedDate = formatDate(inputDate);

	const authorSchema = {
		'@type': 'Person',
		name: post.author.name,
		...(post.author.url && { url: post.author.url })
	};

	const blogPostingSchema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.excerpt,
		author: authorSchema,
		datePublished: post.date,
		dateModified: post._updatedAt,
		url: `https://nv-marketing.com/blog/${slug}`,
		image: postImage
	};

	return (
		<main>
			<Script
				id='blog-posting-schema'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
			/>
			<div className='container'>
				<section className={styles.hero}>
					<div className={styles.hero__wrapper}>
						<div className={styles.hero__img_wrapper}>
							<Image
								src={postImage}
								alt={post.title}
								sizes='90vw'
								height={347}
								width={520}
								quality={100}
								style={{
									margin: '0 auto',
									borderRadius: '10px'
								}}
							/>
							<PortableText value={post.caption} />
						</div>
						<h1 className={styles.hero__title}>{post.title}</h1>
					</div>
				</section>
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<section className={styles.post}>
					<article className={styles.post__article}>
						<PortableText value={post.content} />
						<div className={styles.post__details}>
							<p className={styles.post__date}>{formattedDate}</p>
							<p className={styles.post__author}>{post.author.name}</p>
						</div>
					</article>
					<AuthorBio author={post.author} />
					<BlogPostCta />
				</section>
				<div className='fullAccentLines'>
					<FullLinesLower />
				</div>
			</div>
		</main>
	);
}
```

- [ ] **Step 2: Commit**

```bash
git add "app/blog/[slug]/page.jsx"
git commit -m "feat: dereference Sanity author, pass to AuthorBio, update JSON-LD"
```

---

## Self-Review

**Spec coverage:**
- [x] Revert `{post.author}` to dynamic Sanity value — Task 3 (`post.author.name`)
- [x] Update JSON-LD to use dynamic author data — Task 3 (`authorSchema` built from `post.author`)
- [x] New Author document type in Sanity with bio — Task 1
- [x] Author can be related to many blog posts (reference field) — Task 1
- [x] AuthorBio renders dynamic bio from Sanity — Task 2
- [x] Link to /about or author URL is conditional (only shown when author.url is set) — Task 2

**Placeholder scan:** No TBD/TODO/placeholder content. All code is complete.

**Type consistency:**
- `author` prop passed to `<AuthorBio author={post.author} />` in Task 3 matches the `{ author }` destructure in the updated component from Task 2.
- `author->{ name, bio, url }` GROQ projection produces `post.author.name`, `post.author.bio`, `post.author.url` — all used consistently in Task 3.
- `authorSchema` spreads `url` conditionally with `...(post.author.url && { url: post.author.url })` — valid JS spread pattern.
