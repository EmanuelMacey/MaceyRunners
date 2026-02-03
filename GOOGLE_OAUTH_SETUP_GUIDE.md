# Google OAuth Setup Guide (Sanitized)

This file has been sanitized to remove any sensitive credentials. Never commit client secrets or private IDs to version control — use environment variables or GitHub Secrets instead.

Steps (high-level):

1. Create a Google Cloud project and an OAuth 2.0 Client ID.
2. Add the required Redirect URIs for your environment (Supabase callback, localhost dev URLs, and any deep links).
3. Configure the Google OAuth Client ID and Secret in your Supabase project's settings — do this via environment variables or the Supabase dashboard and DO NOT store secrets in the repo.
4. Ensure OAuth consent screen is configured and test users are added while in testing.

Tips:
- Store Client ID and Client Secret in a `.env` file (and add `.env` to `.gitignore`), or use GitHub Actions secrets for CI.
- Rotate credentials immediately if they are ever accidentally leaked.

Example (DO NOT USE REAL SECRETS in repo):

EXPO_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
