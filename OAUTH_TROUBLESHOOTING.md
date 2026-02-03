# OAuth Troubleshooting (Sanitized)

This troubleshooting guide has been sanitized to avoid exposing sensitive credentials.

Common issues and fixes (summary):

- redirect_uri_mismatch: Ensure the redirect URI used by your app exactly matches the authorized redirect URIs in Google Cloud Console.
- invalid_client / invalid_secret: Verify that the Client ID and Client Secret configured in Supabase match the ones in Google Cloud Console — configure these via environment variables or the dashboard.
- access_denied / unauthorized_client: Make sure the OAuth consent screen is configured and the correct scopes are added; add test users if the app is in testing mode.

Security notes:
- Never include actual Client Secrets in a commit — use `.env` or secret management tooling.
- If secrets were committed earlier, rotate them immediately and remove them from the repo history.

Example environment variables (placeholders only):

EXPO_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
