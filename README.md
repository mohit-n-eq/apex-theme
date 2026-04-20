# Apex Theme Development Pipeline

Welcome to the Apex Theme repository. To maintain high code quality and site performance, this project uses an automated CI/CD pipeline. Every Pull Request (PR) is automatically scanned for errors before it can be merged into `main`.

## 💻 Local Development
To start developing and have Tailwind CSS watch for changes:

1. Install Dependencies:
npm install

2. Start Tailwind Watcher:
npm run dev

3. Start Shopify Preview:
shopify theme dev (in a separate terminal)

## 🚀 The Pipeline Waterfall
Our pipeline runs in a specific order. If one step fails, the subsequent steps will not run.

1. **PR Title Validation**: Ensures commit history follows Conventional Commits (e.g., `feat:`, `fix:`, `chore:`).
2. **JS & Tailwind Linting**: Checks JavaScript for bugs and ensures Tailwind classes are used correctly.
3. **Shopify Theme Check**: Validates Liquid syntax and Shopify best practices.
4. **Build Validation**: Confirms that Tailwind CSS compiles successfully without errors.

---

## 🛠️ How to Check & Fix Issues

### 1. JavaScript & Tailwind Logic (ESLint)
If the **Linting** step fails, it means there is unused code, a forgotten `console.log`, or a Tailwind conflict.
- **Check**: `npx eslint .`
- **Fix**: Review the terminal output for the specific file and line number.

### 2. Formatting (Prettier)
We keep code style consistent to avoid "noisy" diffs in PRs.
- **Check**: `npm run format:check .`
- **Fix**: `npm run format .` (Run this before every commit!)

### 3. Shopify Liquid (Theme Check)
If **Theme Check** fails, you likely have a broken Liquid tag, a missing snippet, or are using a deprecated Shopify object.
- **Check**: `shopify theme check`
- **Fix**: Follow the suggestions provided in the CLI output.

### 4. CSS Compilation (Build)
This ensures the final `assets/base.css` (or equivalent) can be generated.
- **Check**: `npm run tailwind:build`
- **Fix**: Check `tailwind.config.js` or your CSS entry file for syntax errors.

---

## 🔒 Branch Protection Rules
- **No Direct Pushes**: You cannot push directly to `main`. You must create a branch and a Pull Request.
- **Required Passes**: The "Merge" button will remain disabled until all pipeline checks turn green.
- **No Bypassing**: Even admins are restricted from bypassing these checks to ensure total site stability.

---

## 📝 Commit Message Guide
We use Semantic Versioning for PR titles. Please use one of the following prefixes:
- `feat:` for new features.
- `fix:` for bug fixes.
- `chore:` for maintenance (updating packages, etc.).
- `ci:` for changes to these pipeline files.