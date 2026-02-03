# Security Policy

Thank you for caring about the security of this project. Please follow the guidance below if you find a security issue or need to store secrets for CI or runtime.

Reporting a vulnerability

- Do NOT create a public issue with secret or exploit details. Instead, contact the maintainers privately or use GitHub's private security advisories.
- If you find an accidental secret commit, rotate the secret immediately and contact the maintainers.
- For urgent issues, open a private Security Advisory on the GitHub repository or email the repo owner.

Keeping secrets out of the repository

- Never commit credentials, API keys, client secrets, or private tokens to the repo.
- Use environment variables (.env) but ensure `.env` is in `.gitignore`.
- For CI (GitHub Actions), store sensitive values in GitHub Secrets and reference them in workflow files (e.g., `${{ secrets.MY_SECRET }}`).

If a secret is accidentally committed

1. Rotate the secret immediately (revoke/regenerate credentials where applicable).
2. Remove the secret from the repo history (contact maintainers or use tools like `git filter-repo` or `git filter-branch`).
3. Add a note in a private security advisory or contact the maintainers to confirm remediation steps.

Best practices

- Use short-lived tokens where possible.
- Limit scope and permissions of tokens.
- Use a secret management tool for production (Vault, AWS Secrets Manager, GitHub Secrets, etc.).

Thank you for keeping the project secure. 🙏
