# Errors

# Errors

Every error is a JSON body with a `detail` field; some endpoints add more
structure on top.

## 401 — missing or invalid credentials

Returned when neither a valid `X-API-Key` nor a valid `Authorization: Bearer`
token is present:

```json
{ "detail": "Authentication required. Provide either Bearer token or X-API-Key header" }
```

An API key that doesn't match any account returns the same status with
`{"detail": "Invalid API key"}`.

## 403 — account not ready

Signing in before verifying your email returns:

```json
{ "detail": "EMAIL_NOT_VERIFIED" }
```

Verify via the link sent at registration, then retry `/auth/token`.

## 422 — validation error

Malformed request bodies return a structured breakdown rather than a bare
message, so a client can point a user at the exact field:

```json
{
  "detail": "text: Field required",
  "errors": [{ "field": "text", "message": "Field required" }],
  "error_summary": "text: Field required"
}
```

`POST /api/v1/translate` adds a tip to this response specifically when
`text` exceeds the maximum length: split it into a list of shorter strings
(`["sentence1", "sentence2", ...]`) and send that instead of one long string.

## 429 — quota exceeded

See [Rate limits](/rate-limits) for the two quota models (API key vs. signed-in
session) and the exact response shape.
