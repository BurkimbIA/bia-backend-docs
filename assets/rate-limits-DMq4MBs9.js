import{t as e}from"./jsx-runtime-DiK4U9sA.js";import{n as t}from"./lib-DTB9BwdW.js";var n=e(),r=`Quota is tracked differently depending on how you authenticate, and it resets
differently too.`,i=[{depth:1,text:`Rate limits`,id:`rate-limits`,children:[{depth:2,text:`API keys: a lifetime quota`,id:`api-keys-a-lifetime-quota`},{depth:2,text:`Signed-in sessions: daily and weekly`,id:`signed-in-sessions-daily-and-weekly`},{depth:2,text:`What doesn't spend quota`,id:`what-doesnt-spend-quota`},{depth:2,text:`Hitting the limit`,id:`hitting-the-limit`}]}],a={title:`Rate limits`,lastModifiedTime:`2026-09-24T15:17:49.000Z`},o=`pages/rate-limits.mdx`;function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`rate-limits`,children:`Rate limits`}),`
`,(0,n.jsx)(r.p,{children:`Quota is tracked differently depending on how you authenticate, and it resets
differently too.`}),`
`,(0,n.jsx)(r.h2,{id:`api-keys-a-lifetime-quota`,children:`API keys: a lifetime quota`}),`
`,(0,n.jsx)(r.p,{children:`An API key has a fixed lifetime request budget (100 by default). It never
resets — once spent, that key is done; mint a new one. This is the
credential external integrations should use, so plan capacity accordingly
rather than expecting a daily refresh.`}),`
`,(0,n.jsx)(r.h2,{id:`signed-in-sessions-daily-and-weekly`,children:`Signed-in sessions: daily and weekly`}),`
`,(0,n.jsxs)(r.p,{children:[`A JWT from `,(0,n.jsx)(r.code,{inline:`true`,children:`/auth/token`}),` is capped both per day and per (rolling) week; the
weekly cap is the one that actually binds, since the daily cap alone would
allow bursty usage across a week that the weekly cap forbids. This path is
meant for first-party, browser-based usage, not machine integrations.`]}),`
`,(0,n.jsx)(r.h2,{id:`what-doesnt-spend-quota`,children:`What doesn't spend quota`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{inline:`true`,children:`POST /api/v1/warmup`}),` — asking a model to start before you need it — is a
read-only check and never spends quota. It can still be refused if you have
none left: warming up a worker for a caller who cannot make a real request
after it wastes GPU time for no benefit.`]}),`
`,(0,n.jsx)(r.h2,{id:`hitting-the-limit`,children:`Hitting the limit`}),`
`,(0,n.jsxs)(r.p,{children:[`An exhausted quota returns `,(0,n.jsx)(r.code,{inline:`true`,children:`429 Too Many Requests`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-json shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "detail"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: { `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`"error"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"API_KEY_QUOTA_EXCEEDED"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` }`})]}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(r.p,{children:[`(`,(0,n.jsx)(r.code,{inline:`true`,children:`DAILY_RATE_LIMIT_EXCEEDED`}),` for a signed-in session instead of a key.) The
response also carries `,(0,n.jsx)(r.code,{inline:`true`,children:`X-RateLimit-Limit`}),` and `,(0,n.jsx)(r.code,{inline:`true`,children:`X-RateLimit-Remaining`}),`
headers so you can back off before the next call rather than retrying blind.`]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=rate-limits-DMq4MBs9.js.map