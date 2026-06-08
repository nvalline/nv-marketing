# Sanity Studio v3 → v5 Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Sanity Studio from v3 (3.99.0) to v5 (5.30.0) to resolve all 22 open Dependabot security alerts caused by stale transitive dependencies.

**Architecture:** Two source files need code changes: `sanity/package.json` (bump all package versions, including React 18→19 which is a hard peer-dep requirement for sanity v5) and `sanity/sanity.config.js` (rename `deskTool`/`sanity/desk` to `structureTool`/`sanity/structure`, the only breaking API change affecting this codebase). All schema files (`.js` under `sanity/schemas/`) use stable `defineDocument`/`defineObject` patterns that are unchanged in v5.

**Tech Stack:** Sanity Studio v5, React 19, Node.js 22 (already installed), npm

---

## File Map

| Action | File | Change |
|--------|------|--------|
| Modify | `sanity/package.json` | Bump `sanity`, `@sanity/vision`, `react`, `react-dom`, `react-is`, `@types/react`, `@sanity/eslint-config-studio` |
| Modify | `sanity/sanity.config.js` | Replace `deskTool`/`sanity/desk` with `structureTool`/`sanity/structure` |
| Re-generate | `sanity/package-lock.json` | Regenerated automatically by `npm install` |

---

## Task 1: Update `sanity/package.json`

**Files:**
- Modify: `sanity/package.json`

- [ ] **Step 1: Apply version bumps**

Replace the entire `sanity/package.json` contents with:

```json
{
  "name": "nv-marketing",
  "private": true,
  "version": "1.0.0",
  "main": "package.json",
  "license": "UNLICENSED",
  "scripts": {
    "dev": "sanity dev",
    "start": "sanity start",
    "build": "sanity build",
    "deploy": "sanity deploy",
    "deploy-graphql": "sanity graphql deploy"
  },
  "keywords": [
    "sanity"
  ],
  "dependencies": {
    "@sanity/vision": "^5.30.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-is": "^19.2.7",
    "sanity": "^5.30.0",
    "styled-components": "^6.4.2"
  },
  "devDependencies": {
    "@sanity/eslint-config-studio": "^6.0.0",
    "@types/react": "^19.2.17",
    "@types/styled-components": "^5.1.36",
    "eslint": "^8.6.0",
    "prettier": "^3.0.2",
    "typescript": "^5.1.6"
  },
  "prettier": {
    "semi": false,
    "printWidth": 100,
    "bracketSpacing": false,
    "singleQuote": true
  }
}
```

> **Why React 19?** Sanity v5 declares `react: "^19.2.2"` and `react-dom: "^19.2.2"` as peer dependencies. Keeping React 18 will produce peer-dep resolution errors or npm warnings that could break the studio build.

- [ ] **Step 2: Commit the manifest change before installing**

```bash
cd sanity
git add package.json
git commit -m "chore(sanity): bump sanity v5, @sanity/vision v5, react v19"
```

---

## Task 2: Update `sanity/sanity.config.js`

**Files:**
- Modify: `sanity/sanity.config.js`

- [ ] **Step 1: Replace `deskTool` with `structureTool`**

The entire file becomes:

```js
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'NV Marketing',

  projectId: 'blxy40ep',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
```

> **Why:** In Sanity v5, `deskTool` was renamed `structureTool` and the module path changed from `sanity/desk` to `sanity/structure`. Using the old import will throw a module-not-found error at startup.

- [ ] **Step 2: Commit the config change**

```bash
git add sanity.config.js
git commit -m "chore(sanity): migrate deskTool → structureTool for v5"
```

---

## Task 3: Install updated dependencies

**Files:**
- Re-generate: `sanity/package-lock.json`

- [ ] **Step 1: Delete old `node_modules` and lock file to ensure a clean install**

```bash
cd /path/to/repo/sanity
rm -rf node_modules package-lock.json
```

- [ ] **Step 2: Run fresh install**

```bash
npm install
```

Expected: Install completes with no peer-dependency errors. You may see a few deprecation warnings (e.g., `eslint@8` is EOL) — those are pre-existing and not introduced by this upgrade.

- [ ] **Step 3: Verify installed versions match targets**

```bash
node -e "const s=require('./node_modules/sanity/package.json'); const v=require('./node_modules/@sanity/vision/package.json'); const r=require('./node_modules/react/package.json'); console.log('sanity:', s.version, '@sanity/vision:', v.version, 'react:', r.version);"
```

Expected output:
```
sanity: 5.30.0 @sanity/vision: 5.30.0 react: 19.2.7
```

- [ ] **Step 4: Commit the regenerated lock file**

```bash
git add package-lock.json
git commit -m "chore(sanity): regenerate lock file after v5 upgrade"
```

---

## Task 4: Verify the build

- [ ] **Step 1: Run `sanity build` to verify production bundle compiles cleanly**

```bash
npm run build
```

Expected: Build succeeds with output similar to:
```
✓ Sanity Studio built in X.Xs
```

No `Module not found` errors. No TypeScript errors. Warnings about deprecated APIs (if any) are acceptable but should be noted.

- [ ] **Step 2: Optionally smoke-test the dev server**

```bash
npm run dev
```

Open `http://localhost:3333` in a browser. Confirm:
- Studio loads without a white screen / console errors
- The "Structure" tool (formerly "Desk") renders all 8 document types: Blog Posts, Call to Actions, Clients, Commitments, Core Values, Service (object), Services, Testimonials
- The Vision tool opens and can run a simple GROQ query, e.g. `*[_type == "services"][0]`

- [ ] **Step 3: Commit if there are any fixup changes from the smoke-test**

```bash
git add -p
git commit -m "chore(sanity): fixup after v5 smoke-test"
```

---

## Self-Review

**Spec coverage checklist:**
- [x] `sanity` upgraded from v3 → v5.30.0 (Task 1 + 3)
- [x] `@sanity/vision` upgraded from v3 → v5.30.0 (Task 1 + 3)
- [x] React 18 → 19 (required peer dep for sanity v5) (Task 1 + 3)
- [x] `deskTool`/`sanity/desk` → `structureTool`/`sanity/structure` (Task 2)
- [x] `@sanity/eslint-config-studio` 3.x → 6.0.0 (Task 1)
- [x] Build verification (Task 4)
- [x] Security alerts resolved — all 22 alerts trace to sanity's transitive tree; upgrading the package tree resolves them (Task 3)

**Placeholder scan:** No TBD/TODO items. All code blocks are complete.

**Type consistency:** No TypeScript types introduced in this plan; all schemas remain plain JS objects unchanged.
