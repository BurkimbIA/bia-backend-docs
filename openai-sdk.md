# OpenAI SDK

# OpenAI SDK

The API exposes an OpenAI-compatible surface under `/openai/v1`, so the
official `openai` SDK (Python, Node, or anything else built against OpenAI's
wire format) can point straight at BurkimbIA instead of hand-rolled HTTP
calls. Auth, quota, and history all behave exactly as they do on the native
`/api/v1/*` routes — this is a wire-format shim, not a separate backend.

## Setup

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.burkimbia.com/openai/v1",
    api_key="<your_api_key>",  # the bia_... key from /auth/key, see API keys
)
```

The SDK always sends your key as `Authorization: Bearer`. BurkimbIA detects
that it isn't a JWT and treats it as `X-API-Key` automatically — no
`default_headers` workaround needed. A signed-in session's JWT works the
same way, unmodified, since that already is a real bearer token.

## Translation, via `chat.completions`

Translation has no OpenAI-native endpoint, so it rides on
`chat.completions.create`: the last user message is the text to translate,
and the language pair goes through `extra_body`, the SDK's escape hatch for
fields OpenAI doesn't define.

```python
completion = client.chat.completions.create(
    model="bia-translation-v1",
    messages=[{"role": "user", "content": "Bonjour le monde"}],
    extra_body={"src_lang": "french", "tgt_lang": "moore"},
)
print(completion.choices[0].message.content)
```

Language codes are always `french`/`moore`, same as the native
[`/translate`](/api) endpoint. If your setup can't pass `extra_body` — an
OpenAI-shaped UI or proxy that only forwards `messages` — give the pair as a
system message instead:

```python
messages=[
    {"role": "system", "content": "french->moore"},
    {"role": "user", "content": "Bonjour le monde"},
]
```

`stream=True` is accepted for compatibility, but translation has nothing
incremental to send — the full result comes back as a single SSE chunk
rather than token-by-token.

## Transcription, via `audio.transcriptions`

```python
with open("clip.wav", "rb") as f:
    result = client.audio.transcriptions.create(
        model="bia-transcription-v1",
        file=f,
        response_format="verbose_json",  # json | text | srt | vtt | verbose_json
    )
print(result.text)
```

Files over 25 MB are rejected. Word-level timing needs
`timestamp_granularities=["word"]`; segment timing (the default) comes with
every `verbose_json`/`srt`/`vtt` response regardless.

## Speech, via `audio.speech`

```python
response = client.audio.speech.create(
    model="bia-tts-v1",
    voice="alloy",
    input="Hello there",
)
response.stream_to_file("speech.mp3")
```

`voice` must be one of OpenAI's six fixed names (`alloy`, `echo`, `fable`,
`onyx`, `nova`, `shimmer`) — the SDK requires one. Each maps onto a BurkimbIA
pitch/speed preset rather than a genuinely distinct voice, so treat them as
rough buckets, not a real voice catalog. `speed` (0.25–4.0, default `1.0`)
scales the same preset.

## Listing models

```python
client.models.list()
```

Returns BurkimbIA's model aliases (`bia-translation-v1`,
`bia-translation-v2`, `bia-transcription-v1`, `bia-tts-v1`, …) in OpenAI's
list-object shape.

## Not implemented

`/completions` (the legacy pre-chat endpoint), `/embeddings`, and
`/audio/translations` — OpenAI defines that last one as speech → English
text, which isn't what BurkimbIA's translation does. Use
`/audio/transcriptions` plus `/translate` (or `chat.completions`) instead.

## Next

- [Quickstart](/quickstart) — the non-SDK, raw-HTTP version of the same flow
- [API keys](/api-keys) — issuing and using the credential this SDK needs
- [Errors](/errors) — the shim maps HTTP status codes onto the SDK's own
  exception types (`RateLimitError`, `AuthenticationError`, …), so error
  handling written for OpenAI works unchanged
