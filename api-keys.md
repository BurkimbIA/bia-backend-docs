# API keys

# API keys

An API key is a long-lived credential for machine access, separate from the
JWT a browser session carries. Use it for every call to `/api/v1/translate`,
`/api/v1/transcribe`, `/api/v1/tts`, `/api/v1/warmup`, and the OpenAI-compatible
routes under `/openai/v1`.

## Creating a key

Minting a key requires being signed in — a bearer token from `/auth/token`,
or an existing API key:

```bash
curl -X POST https://api.burkimbia.com/api/v1/auth/key \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"name": "production"}'
```

The response's `api_key` field is the only time the plain-text key is
returned — store it before it's out of scope. Every account is limited to a
small number of active keys at once; create one per environment (e.g.
`staging`, `production`) rather than sharing one everywhere.

## Using a key

Send it as `X-API-Key`, not `Authorization`:

```bash
curl https://api.burkimbia.com/api/v1/translate \
  -H "X-API-Key: <your_api_key>" \
  ...
```

`X-API-Key` and a `Bearer` JWT are interchangeable on endpoints that accept
either — but a key is what you want for a server-to-server integration,
since it doesn't expire the way a login session does.

## Verifying a key

To check a key is valid and see which account it belongs to (for example,
diagnosing a 401 in a support request), verify it without spending quota:

```bash
curl -X POST https://api.burkimbia.com/api/v1/auth/verify-api-key \
  -H "Content-Type: application/json" \
  -d '{"api_key": "<the_key>"}'
```
