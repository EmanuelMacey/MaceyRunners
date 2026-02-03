Thanks for your interest in contributing! ✨

How to contribute

1. Fork the repository and create a feature branch: `git checkout -b feat/my-change`
2. Make changes and run the linter: `npm run lint`
3. Commit with a clear message and open a pull request against `main`

Code style

- Follow existing TypeScript and React Native patterns
- Run `npm run lint` and fix lint errors prior to opening PRs

Pre-commit hooks & secret scanning 🔒

- We use `pre-commit` with `detect-secrets` to prevent accidental commits of sensitive data.
- To install and enable hooks locally:
  1. `pip install pre-commit detect-secrets` (Python required)
  2. `pre-commit install`
  3. `pre-commit run --all-files` to test the hooks immediately.
- There is also a GitHub Action (`.github/workflows/secret-scan.yml`) that runs `gitleaks` on pushes and PRs and will fail if secrets are detected.

Reporting issues

- Open a bug report using the template in `.github/ISSUE_TEMPLATE/bug_report.md`

Local development

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`

Security & handling secrets

- Never commit credentials, client secrets, or API keys. Use `.env` (and add it to `.gitignore`) or GitHub Secrets for CI.
- If you find a committed secret, rotate it immediately and notify the maintainers. See `SECURITY.md` for details.

Thanks — we appreciate your help! ✅
