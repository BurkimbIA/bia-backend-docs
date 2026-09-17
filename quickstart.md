# Quickstart

# Quickstart

The BurkimbIA API translates, transcribes, and speaks between `french` and
`moore`. Every call is authenticated and forwarded to a BurkimbIA-hosted
inference worker; the response comes straight back.

## 1. Get an API key

Register an account, then mint a key:

```bash
curl -X POST https://bia-backend.fly.dev/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "you@example.com", "password": "...", "name": "...", "terms_accepted": true}'
```

After verifying your email, sign in and create a key (see
[API keys](/api-keys) for the full flow):

```bash
curl -X POST https://bia-backend.fly.dev/api/v1/auth/token \
  -d "username=you@example.com&password=..."

curl -X POST https://bia-backend.fly.dev/api/v1/auth/key \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-first-key"}'
```

The response's `api_key` is shown once — store it now.

## 2. Call the API

Every request after this authenticates with the `X-API-Key` header instead
of a bearer token:

```bash
curl -X POST https://bia-backend.fly.dev/api/v1/translate \
  -H "X-API-Key: <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello, how are you?", "src_lang": "french", "tgt_lang": "moore", "model": "bia-translation-v1"}'
```

Language codes are always `french` and `moore` — never `fr`/`mos`/ISO codes.

## Next

- [API keys](/api-keys) — issuing, naming, and the per-account key limit
- [Rate limits](/rate-limits) — daily/weekly caps and how quota is spent
- [Errors](/errors) — response shape for validation and quota errors
- [API Reference](/api) — every request/response schema
