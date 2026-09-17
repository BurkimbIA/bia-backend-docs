const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./createServer-F2kyz7e9.js","./rolldown-runtime-CNC7AqOf.js","./preload-helper-HclGiUj8.js","./slugify-bXvLWs_E.js","./constants-DezTRlnT.js","./OasProvider-xN96rTF_.js","./react-6C37rxNK.js","./joinUrl-B2vl3eFo.js","./dist-CeRrfSsF.js","./jsx-runtime-DiK4U9sA.js","./cn-B6KiDbIe.js","./components--BiVWwTl.js","./OperationList-CEhfye69.js","./Heading-C6oMkobf.js","./createLucideIcon-CjpI8Uel.js","./DropdownMenu-Bluz5pB4.js","./dist-B1OAtpuP.js","./Button-_cvmYq8c.js","./schemas-CKoAj7lG.js","./utils-CbxrHoNM.js","./useQuery-BwXvonYR.js","./PlaygroundDialog-BA_1eSGK.js","./react-nprogress.esm-4FEL3MRK.js","./dist-DLT876Gh.js","./copy-BjuQwkd_.js","./Select-F48Y5r58.js","./dist-BLJqiIqf.js","./Dialog-CZ6aN8rT.js","./Input-Dq3cnm_q.js","./eye-BdbOrMNX.js","./shield-check-ti74D2Es.js","./Alert-CPlGWwFr.js","./lock-ChwTKfy6.js","./securityCredentialsStore-DD3DgKAP.js","./Popover-XTtOnjAJ.js","./Markdown-B0yHrfzp.js","./lib-DTB9BwdW.js","./lib-CE19foDD.js","./shiki-DT2lLBBK.js","./shiki-constants-Cbz7E3qi.js","./useHighlighter-aqKP2X5Y.js","./Typography-B6bMtWEx.js","./useCopyToClipboard-CpHVUxyx.js","./Collapsible-COx3jPE3.js","./useHotkey-CtyCbopf.js","./Card-CbTFM9Zv.js","./SyntaxHighlight-ZwtPPPgi.js","./CodeBlock-DmmkIDSN.js","./Pagination-YIDrmKJc.js","./sanitizeMarkdownForMetatag-o2Xh7VcR.js","./Callout-BQJwbfFF.js","./Badge-Aif6kg6g.js","./InlineCode--er4dyxv.js","./SchemaView-D5wulxbf.js","./Item-DyAaGN2t.js","./Separator-5srR3fFH.js","./useApiIdentitySelection-BKS_PwvY.js","./ApiHeader-Bu04h4Xx.js","./AiAssistantMenuItems-DKuHseuu.js","./dist-CkCy_keP.js","./useWarmupSchema-B4x9fPHO.js","./SchemaList-GmNXt_RY.js","./Toc-D7tN9Aco.js","./AnchorLink-CI-Rzent.js","./InputGroup-B7JgcWSH.js","./SchemaInfo-Bzz-Ao8y.js","./sidebarStore-DsDnZcBq.js","./McpCatalog-DO_NrEWX.js","./PlaygroundDialog-Dm7mbZBT.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{t}from"./react-6C37rxNK.js";import{A as n,F as r,R as i,f as a,n as o,o as s,t as c}from"./joinUrl-B2vl3eFo.js";import{t as l}from"./components--BiVWwTl.js";import{t as u}from"./preload-helper-HclGiUj8.js";import{t as d}from"./jsx-runtime-DiK4U9sA.js";import{t as f}from"./createLucideIcon-CjpI8Uel.js";import{t as p}from"./Button-_cvmYq8c.js";import{t as m}from"./invariant-Btg-HG37.js";var h=f(`circle-play`,[[`path`,{d:`M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z`,key:`kmsa83`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),g,_={},v=e=>{if(e.errors?.[0])throw new m(e.errors[0].message,{developerHint:"Check your configuration value `apis.type` and `apis.input` in the Zudoku config."})},y=class{config;constructor(e){e.schemaImports&&Object.assign(_,e.schemaImports),this.config=e}#e=async()=>(g||=u(()=>import(`./createServer-F2kyz7e9.js`).then(e=>e.createServer({...this.config,schemaImports:_})),__vite__mapDeps([0,1,2,3,4]),import.meta.url),g);#t=async e=>this.config.server?fetch(this.config.server,e):(await this.#e()).fetch(`http://localhost/graphql`,e);fetch=async(e,t)=>{let n=e.match(/query (\w+)/)?.[1],r=await this.#t({method:`POST`,body:JSON.stringify({query:e,variables:t,operationName:n}),headers:{"Content-Type":`application/json`}});if(!r.ok)throw Error(`Network response was not ok`);let i=await r.json();return v(i),i.data}},b=e(t(),1),x=d(),S=(0,b.createContext)(void 0),C=({children:e,client:t})=>(0,x.jsx)(S.Provider,{value:t,children:e}),w=(e,t,...[n])=>({queryFn:()=>e.fetch(t,n),queryKey:[t.toString().replace(/\s+/g,` `).trim(),n]}),T=(e,...[t])=>{let n=(0,b.use)(S);if(n===void 0)throw Error(`useGraphQL must be used within a GraphQLProvider`);return w(n,e,...t===void 0?[]:[t])},E=class extends String{__apiType;value;__meta__;constructor(e,t){super(e),this.value=e,this.__meta__=t}toString(){return this.value}},D=new E(`
    fragment OperationsFragment on OperationItem {
  slug
  summary
  method
  description
  operationId
  contentTypes
  path
  deprecated
  extensions
  servers {
    url
    description
  }
  parameters {
    name
    in
    description
    required
    schema
    style
    explode
    allowReserved
    examples {
      name
      description
      externalValue
      value
      summary
    }
  }
  security {
    schemes {
      scopes
      scheme {
        name
        type
        description
        in
        paramName
        scheme
        bearerFormat
        openIdConnectUrl
        flows {
          implicit {
            authorizationUrl
            scopes {
              name
              description
            }
          }
          password {
            tokenUrl
            scopes {
              name
              description
            }
          }
          clientCredentials {
            tokenUrl
            scopes {
              name
              description
            }
          }
          authorizationCode {
            authorizationUrl
            tokenUrl
            scopes {
              name
              description
            }
          }
        }
      }
    }
  }
  requestBody {
    content {
      mediaType
      encoding {
        name
      }
      examples {
        name
        description
        externalValue
        value
        summary
      }
      schema
    }
    description
    required
  }
  responses {
    statusCode
    links
    description
    content {
      examples {
        name
        description
        externalValue
        value
        summary
      }
      mediaType
      encoding {
        name
      }
      schema
    }
  }
}
    `,{fragmentName:`OperationsFragment`}),O={"\n  query ServersQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n":new E(`
    query ServersQuery($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    url
    servers {
      url
    }
  }
}
    `),"\n  query GetMcpCatalog($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      title\n      description\n      tags {\n        name\n        slug\n        operations {\n          slug\n          summary\n          description\n          operationId\n          path\n          extensions\n          servers {\n            url\n          }\n        }\n      }\n    }\n  }\n":new E(`
    query GetMcpCatalog($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    title
    description
    tags {
      name
      slug
      operations {
        slug
        summary
        description
        operationId
        path
        extensions
        servers {
          url
        }
      }
    }
  }
}
    `),"\n  fragment OperationsFragment on OperationItem {\n    slug\n    summary\n    method\n    description\n    operationId\n    contentTypes\n    path\n    deprecated\n    extensions\n    servers {\n      url\n      description\n    }\n    parameters {\n      name\n      in\n      description\n      required\n      schema\n      style\n      explode\n      allowReserved\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n    }\n    security {\n      schemes {\n        scopes\n        scheme {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n    requestBody {\n      content {\n        mediaType\n        encoding {\n          name\n        }\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        schema\n      }\n      description\n      required\n    }\n    responses {\n      statusCode\n      links\n      description\n      content {\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        mediaType\n        encoding {\n          name\n        }\n        schema\n      }\n    }\n  }\n":D,"\n  query OperationsForTag(\n    $input: JSON!\n    $type: SchemaType!\n    $tag: String\n    $untagged: Boolean\n  ) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n      }\n      description\n      summary\n      title\n      url\n      version\n      tag(slug: $tag, untagged: $untagged) {\n        name\n        description\n        operations {\n          slug\n          ...OperationsFragment\n        }\n        extensions\n        next {\n          name\n          slug\n          extensions\n        }\n        prev {\n          name\n          slug\n          extensions\n        }\n      }\n    }\n  }\n":new E(`
    query OperationsForTag($input: JSON!, $type: SchemaType!, $tag: String, $untagged: Boolean) {
  schema(input: $input, type: $type) {
    servers {
      url
    }
    description
    summary
    title
    url
    version
    tag(slug: $tag, untagged: $untagged) {
      name
      description
      operations {
        slug
        ...OperationsFragment
      }
      extensions
      next {
        name
        slug
        extensions
      }
      prev {
        name
        slug
        extensions
      }
    }
  }
}
    fragment OperationsFragment on OperationItem {
  slug
  summary
  method
  description
  operationId
  contentTypes
  path
  deprecated
  extensions
  servers {
    url
    description
  }
  parameters {
    name
    in
    description
    required
    schema
    style
    explode
    allowReserved
    examples {
      name
      description
      externalValue
      value
      summary
    }
  }
  security {
    schemes {
      scopes
      scheme {
        name
        type
        description
        in
        paramName
        scheme
        bearerFormat
        openIdConnectUrl
        flows {
          implicit {
            authorizationUrl
            scopes {
              name
              description
            }
          }
          password {
            tokenUrl
            scopes {
              name
              description
            }
          }
          clientCredentials {
            tokenUrl
            scopes {
              name
              description
            }
          }
          authorizationCode {
            authorizationUrl
            tokenUrl
            scopes {
              name
              description
            }
          }
        }
      }
    }
  }
  requestBody {
    content {
      mediaType
      encoding {
        name
      }
      examples {
        name
        description
        externalValue
        value
        summary
      }
      schema
    }
    description
    required
  }
  responses {
    statusCode
    links
    description
    content {
      examples {
        name
        description
        externalValue
        value
        summary
      }
      mediaType
      encoding {
        name
      }
      schema
    }
  }
}`),"\n  query SchemaInfo($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n        description\n      }\n      license {\n        name\n        url\n        identifier\n      }\n      termsOfService\n      externalDocs {\n        description\n        url\n      }\n      contact {\n        name\n        url\n        email\n      }\n      description\n      summary\n      title\n      url\n      version\n      tags {\n        name\n        description\n        extensions\n      }\n      components {\n        securitySchemes {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n      webhooks {\n        name\n        method\n        summary\n        description\n      }\n    }\n  }\n":new E(`
    query SchemaInfo($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    servers {
      url
      description
    }
    license {
      name
      url
      identifier
    }
    termsOfService
    externalDocs {
      description
      url
    }
    contact {
      name
      url
      email
    }
    description
    summary
    title
    url
    version
    tags {
      name
      description
      extensions
    }
    components {
      securitySchemes {
        name
        type
        description
        in
        paramName
        scheme
        bearerFormat
        openIdConnectUrl
        flows {
          implicit {
            authorizationUrl
            scopes {
              name
              description
            }
          }
          password {
            tokenUrl
            scopes {
              name
              description
            }
          }
          clientCredentials {
            tokenUrl
            scopes {
              name
              description
            }
          }
          authorizationCode {
            authorizationUrl
            tokenUrl
            scopes {
              name
              description
            }
          }
        }
      }
    }
    webhooks {
      name
      method
      summary
      description
    }
  }
}
    `),"\n  query GetSchemas($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      title\n      description\n      summary\n      components {\n        schemas {\n          name\n          schema\n          extensions\n        }\n      }\n    }\n  }\n":new E(`
    query GetSchemas($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    title
    description
    summary
    components {
      schemas {
        name
        schema
        extensions
      }
    }
  }
}
    `),"\n  query getServerQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n":new E(`
    query getServerQuery($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    url
    servers {
      url
    }
  }
}
    `),"\n  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      extensions\n      description\n      tags {\n        slug\n        name\n        extensions\n        operations {\n          summary\n          slug\n          method\n          operationId\n          path\n          isMcpServer\n        }\n      }\n      components {\n        schemas {\n          __typename\n        }\n      }\n    }\n  }\n":new E(`
    query GetNavigationOperations($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    extensions
    description
    tags {
      slug
      name
      extensions
      operations {
        summary
        slug
        method
        operationId
        path
        isMcpServer
      }
    }
    components {
      schemas {
        __typename
      }
    }
  }
}
    `),"\n  query SchemaWarmup($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      openapi\n    }\n  }\n":new E(`
    query SchemaWarmup($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    openapi
  }
}
    `)};function k(e){return O[e]??{}}var A=({tagCategories:e,tagGroups:t,expandAllTags:n})=>{let r=new Set,i=t.flatMap(t=>{let i=e.get(t.name),a=i?.type===`category`?i:void 0;a&&r.add(t.name);let o=t.tags.flatMap(n=>{if(n===t.name)return[];let i=e.get(n);return i?(r.add(n),i):[]});return!a&&o.length===0?[]:{...a,type:`category`,label:a?.label??t.name,items:[...a?.items??[],...o],collapsible:a?.collapsible??!0,collapsed:a?.collapsed??!n}}),a=Array.from(e.entries()).filter(([e])=>!r.has(e)).map(([,e])=>e);return[...i,...a]},j={get:`green`,post:`blue`,put:`yellow`,delete:`red`,patch:`purple`,options:`gray`,head:`gray`},M=({label:e,path:t,operations:n,collapsible:r,collapsed:i})=>({type:`category`,label:e,link:{type:`doc`,path:t,file:t,label:e},collapsible:r,collapsed:i,items:n.map(e=>({type:`link`,label:e.summary??e.path,to:`${t}#${e.slug}`,badge:e.isMcpServer?{label:`MCP`,color:`indigo`,invert:!0}:{label:e.method,color:j[e.method.toLowerCase()],invert:!0}}))}),N=(0,b.createContext)(void 0),P=N.Provider,F=()=>{let e=(0,b.useContext)(N);if(!e)throw Error(`useOasConfig must be used within a OasConfigProvider`);return e.config},I=e=>({path:e.routePath,async lazy(){let{OasProvider:t}=await u(async()=>{let{OasProvider:e}=await import(`./OasProvider-xN96rTF_.js`);return{OasProvider:e}},__vite__mapDeps([5,1,6,7,8,9,10,11]),import.meta.url);return{element:(0,x.jsx)(t,{basePath:e.basePath,version:e.version,client:e.client,config:e.config})}},children:e.routes}),L=({path:e,tag:t,untagged:n})=>({path:e,async lazy(){let{OperationList:e}=await u(async()=>{let{OperationList:e}=await import(`./OperationList-CEhfye69.js`);return{OperationList:e}},__vite__mapDeps([12,1,6,13,7,8,9,10,11,2,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,3,54,55,4,56,57,58,59,60]),import.meta.url);return{element:(0,x.jsx)(e,{tag:t,untagged:n})}}}),R=({render:e,path:t})=>{let{type:r,input:i}=F(),{tag:c}=a(),u=s(),{data:{schema:d}}=o(T(q,{type:r,input:i})),f=d.tags.at(0);return!c&&f?.slug?(0,x.jsx)(l,{to:{pathname:n(t,{tag:f.slug}),search:u.search}}):c&&d.tags.some(e=>e.slug===c)?e(c):null},z=({path:e})=>({path:e,async lazy(){let{OperationList:t}=await u(async()=>{let{OperationList:e}=await import(`./OperationList-CEhfye69.js`);return{OperationList:e}},__vite__mapDeps([12,1,6,13,7,8,9,10,11,2,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,3,54,55,4,56,57,58,59,60]),import.meta.url);return{element:(0,x.jsx)(R,{path:e,render:e=>(0,x.jsx)(t,{tag:e})})}}}),B=({basePath:e,hasUntaggedOperations:t=!0})=>[...t?[L({path:c(e,J),untagged:!0})]:[],{path:c(e,`~schemas`),lazy:async()=>{let{SchemaList:e}=await u(async()=>{let{SchemaList:e}=await import(`./SchemaList-GmNXt_RY.js`);return{SchemaList:e}},__vite__mapDeps([61,13,1,6,7,8,9,10,11,2,14,15,16,17,53,23,19,20,25,24,26,29,51,35,36,37,38,39,40,41,52,3,54,55,4,62,63,28,64,43,57,42,58]),import.meta.url);return{element:(0,x.jsx)(e,{})}}}],V=({versionPath:e,tagPages:t,hasUntaggedOperations:n=!0,showInfoPage:r})=>{let a=t.at(0)??(n?`~endpoints`:void 0),o=a?c(e,a):void 0;return[r===!1?o?{index:!0,loader:()=>i(o)}:L({path:e}):{index:!0,path:e,lazy:async()=>{let{SchemaInfo:e}=await u(async()=>{let{SchemaInfo:e}=await import(`./SchemaInfo-Bzz-Ao8y.js`);return{SchemaInfo:e}},__vite__mapDeps([65,13,1,6,7,8,9,10,11,2,14,15,16,17,51,30,32,34,35,19,20,36,37,38,39,40,41,55,66,3,57,24,25,26,42,58,45,54,60]),import.meta.url);return{element:(0,x.jsx)(e,{showInfoPage:r,redirectTo:o})}}},...t.map(t=>L({path:c(e,t),tag:t})),...B({basePath:e,hasUntaggedOperations:n})]},H=e=>e.type===`raw`||!Array.isArray(e.input)?{versions:[],versionMap:{}}:{versions:e.input.map(e=>e.path),versionMap:Object.fromEntries(e.input.map(e=>[e.path,{label:e.label??e.path,downloadUrl:e.downloadUrl,tagPages:e.tagPages}]))},U=(e,t)=>t&&(!e.tagPages||e.tagPages.includes(t))?c(e.path,t):e.path,W=({basePath:e,config:t,client:n})=>{if(t.documentType===`mcp-catalog`)return[I({basePath:e,routePath:e,routes:[{index:!0,async lazy(){let{McpCatalog:e}=await u(async()=>{let{McpCatalog:e}=await import(`./McpCatalog-DO_NrEWX.js`);return{McpCatalog:e}},__vite__mapDeps([67,1,6,13,7,8,9,10,11,2,14,15,16,17,49,24,50,27,28,51,32,41,52,45,46,19,20,38,37,39,40,47,42,25,26,35,36,64,57,58,44]),import.meta.url);return{element:(0,x.jsx)(e,{})}}}],client:n,config:t})];let r=t.tagPages,{versions:i}=H(t),a=Array.isArray(t.input)?t.input:void 0;return(i.length>1?[void 0,...i]:[void 0]).map(i=>{let o=c(e,i),s=i?a?.find(e=>e.path===i):a?.[0],l=s?.hasUntaggedOperations??!0,u=s?.tagPages??r;return I({basePath:e,version:i,routePath:o,routes:u?V({versionPath:o,tagPages:u,hasUntaggedOperations:l,showInfoPage:t.options?.showInfoPage}):[z({path:`${o}/:tag?`}),...B({basePath:o,hasUntaggedOperations:l})],client:n,config:t})})},G=(e,t)=>e===!0||e!==!1&&t,K=(0,b.lazy)(()=>u(()=>import(`./PlaygroundDialog-Dm7mbZBT.js`).then(e=>({default:e.PlaygroundDialog})),__vite__mapDeps([68,21,1,6,16,9,17,8,10,19,7,20,22,14,23,15,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,2]),import.meta.url)),q=k(`
  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      extensions
      description
      tags {
        slug
        name
        extensions
        operations {
          summary
          slug
          method
          operationId
          path
          isMcpServer
        }
      }
      components {
        schemas {
          __typename
        }
      }
    }
  }
`),J=`~endpoints`,Y=e=>{let t=c(e.path),n=new y(e);return{getHead:()=>{if(e.type===`url`&&!e.skipPreload)return(Array.isArray(e.input)?e.input.map(e=>e.input):[e.input]).map(e=>(0,x.jsx)(`link`,{href:e,rel:`preload`,as:`fetch`,crossOrigin:`anonymous`},e));if(e.server)return(0,x.jsx)(`link`,{rel:`preconnect`,href:e.server})},getMdxComponents:()=>({OpenPlaygroundButton:({server:e,method:t=`get`,url:n=`/`,children:r,...i})=>{if(!e)throw Error(`Server is required`);return(0,x.jsx)(b.Suspense,{children:(0,x.jsx)(K,{url:n,method:t,server:e,...i,children:(0,x.jsx)(p,{className:`gap-2 items-center`,variant:`outline`,children:r??(0,x.jsxs)(x.Fragment,{children:[`Open in Playground`,(0,x.jsx)(h,{size:16,"aria-hidden":`true`})]})})})})}}),getNavigation:async(i,a)=>{if(e.documentType===`mcp-catalog`||!r({path:t,end:!1},i))return[];try{let{versions:o}=H(e),s=o.find(e=>r({path:c(t,e),end:!1},i)),l=s??o.at(0),{type:u}=e,d=Array.isArray(e.input)?e.input.find(e=>e.path===l)?.input??e.input[0]?.input:e.input,f=w(n,q,{type:u,input:d}),p=await a.queryClient.ensureQueryData(f),m=A({tagCategories:new Map(p.schema.tags.filter(e=>e.name&&e.operations.length>0).map(n=>{if(!n.name)throw Error(`Tag ${n.slug} has no name`);let r=c(t,s,n.slug),i=n.extensions?.[`x-zudoku-collapsed`]??!e.options?.expandAllTags,a=n.extensions?.[`x-zudoku-collapsible`]??!0;return[n.name,M({label:n.extensions?.[`x-displayName`]??n.name,path:r,operations:n.operations,collapsed:i,collapsible:a})]})),tagGroups:p.schema.extensions?.[`x-tagGroups`]??[],expandAllTags:e.options?.expandAllTags});G(e.options?.showInfoPage,!!p.schema.description)&&m.unshift({type:`link`,to:c(t,s),label:`Information`});let h=p.schema.tags.find(e=>!e.name)?.operations;return h&&h.length>0&&m.push(M({label:m.length===0?`Endpoints`:`Other endpoints`,path:c(t,s,J),operations:h,collapsed:!e.options?.expandAllTags})),p.schema.components?.schemas?.length&&m.push({type:`link`,label:`Schemas`,to:c(t,s,`~schemas`)}),m}catch{return[]}},getRoutes:()=>W({basePath:t,config:e,client:n})}};export{H as a,k as c,U as i,T as l,Y as n,P as o,G as r,F as s,J as t,C as u};
//# sourceMappingURL=openapi-CjUeq-X3.js.map