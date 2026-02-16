# learningplaywright

This repository contains small Playwright examples used for learning and experimentation.

Structure
- `Chapter_01_basic/` — basic Playwright scripts
- `Chapter_02_java_concepts/` — (placeholder)

Quick start
1. Install Node.js (14+).
2. Install dependencies and Playwright:

```bash
npm install -D @playwright/test
npx playwright install
```

3. Run Playwright tests or scripts (examples):

```bash
npx playwright test
# or run a single script with node
node Chapter_01_basic/01_basic.js
```

Notes
- Add a `package.json` if you want npm scripts for easier runs.
- Pushes to GitHub require authentication from this machine (browser PAT or credential helper).
