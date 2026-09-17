# Rate limits

# Rate limits

Quota is tracked differently depending on how you authenticate, and it resets
differently too.

## API keys: a lifetime quota

An API key has a fixed lifetime request budget (100 by default). It never
resets — once spent, that key is done; mint a new one. This is the
credential external integrations should use, so plan capacity accordingly
rather than expecting a daily refresh.

## Signed-in sessions: daily and weekly

A JWT from `/auth/token` is capped both per day and per (rolling) week; the
weekly cap is the one that actually binds, since the daily cap alone would
allow bursty usage across a week that the weekly cap forbids. This path is
meant for first-party, browser-based usage, not machine integrations.

## What doesn't spend quota

`POST /api/v1/warmup` — asking a model to start before you need it — is a
read-only check and never spends quota. It can still be refused if you have
none left: warming up a worker for a caller who cannot make a real request
after it wastes GPU time for no benefit.

## Hitting the limit

An exhausted quota returns `429 Too Many Requests`:

```json
{
  "detail": { "error": "API_KEY_QUOTA_EXCEEDED" }
}
```

(`DAILY_RATE_LIMIT_EXCEEDED` for a signed-in session instead of a key.) The
response also carries `X-RateLimit-Limit` and `X-RateLimit-Remaining`
headers so you can back off before the next call rather than retrying blind.
