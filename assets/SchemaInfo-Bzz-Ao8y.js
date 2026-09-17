import{a as e,c as t}from"./Heading-C6oMkobf.js";import{n,o as r}from"./joinUrl-B2vl3eFo.js";import{t as i}from"./components--BiVWwTl.js";import{t as a}from"./jsx-runtime-DiK4U9sA.js";import{t as o}from"./createLucideIcon-CjpI8Uel.js";import{c as s,l as c,r as l,s as u}from"./openapi-CjUeq-X3.js";import{n as d,t as f}from"./Badge-Aif6kg6g.js";import{n as p,t as m}from"./shield-check-ti74D2Es.js";import{t as h}from"./lock-ChwTKfy6.js";import{t as g}from"./Button-_cvmYq8c.js";import{t as _}from"./cn-B6KiDbIe.js";import{n as v,r as y,t as b}from"./Popover-XTtOnjAJ.js";import{t as x}from"./Markdown-B0yHrfzp.js";import{t as S}from"./Separator-5srR3fFH.js";import{t as C}from"./sidebarStore-DsDnZcBq.js";import{t as w}from"./slugify-bXvLWs_E.js";import{n as T,t as E}from"./ApiHeader-Bu04h4Xx.js";import{n as D,t as O}from"./Card-CbTFM9Zv.js";import{i as k,n as A,r as j,s as M,t as N}from"./Item-DyAaGN2t.js";import{t as P}from"./useWarmupSchema-B4x9fPHO.js";var F=o(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),I=o(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),L=o(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),R=o(`webhook`,[[`path`,{d:`M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2`,key:`q3hayz`}],[`path`,{d:`m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06`,key:`1go1hn`}],[`path`,{d:`m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8`,key:`qlwsc0`}]]),z=a(),B=s(`
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
`),V=({href:e,icon:t,children:n})=>(0,z.jsxs)(`a`,{href:e,className:`inline-flex items-center gap-2 opacity-65 hover:opacity-100 [&_svg]:shrink-0 [&_svg]:size-3.5`,target:`_blank`,rel:`noopener noreferrer`,children:[t,(0,z.jsx)(`span`,{className:`truncate grow-0`,children:n})]}),H=({schema:e})=>{let t=!!(e.license||e.termsOfService||e.externalDocs),n=!!(e.contact?.name||e.contact?.email||e.contact?.url),r=e.servers.length>0;return(0,z.jsxs)(D,{className:`flex flex-col gap-3 text-sm`,children:[t&&(0,z.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[e.license&&(0,z.jsx)(V,{href:e.license.url??void 0,children:e.license.name}),e.termsOfService&&(0,z.jsx)(V,{href:e.termsOfService,children:`Terms of Service`}),e.externalDocs&&(0,z.jsx)(V,{href:e.externalDocs.url,children:e.externalDocs.description??`Documentation`})]}),t&&(n||r)&&(0,z.jsx)(S,{}),n&&(0,z.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,z.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Contact`}),e.contact?.name&&(0,z.jsx)(`span`,{children:e.contact.name}),e.contact?.email&&(0,z.jsx)(V,{href:`mailto:${e.contact.email}`,icon:(0,z.jsx)(I,{}),children:e.contact.email}),e.contact?.url&&(0,z.jsx)(V,{href:e.contact.url,icon:(0,z.jsx)(F,{}),children:e.contact.url})]}),n&&r&&(0,z.jsx)(S,{}),r&&(0,z.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,z.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Servers`}),e.servers.map(e=>(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`code`,{className:`text-xs select-all break-all`,children:e.url}),e.description&&(0,z.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:e.description})]},e.url))]})]})},U=e=>{switch(e){case`apiKey`:return(0,z.jsx)(p,{size:14});case`http`:return(0,z.jsx)(h,{size:14});case`oauth2`:return(0,z.jsx)(m,{size:14});case`openIdConnect`:return(0,z.jsx)(m,{size:14});case`mutualTLS`:return(0,z.jsx)(h,{size:14})}},W=e=>{switch(e.type){case`apiKey`:return`API Key in ${e.in??`header`} (${e.paramName??`key`})`;case`http`:return e.scheme===`bearer`?`Bearer token${e.bearerFormat?` (${e.bearerFormat})`:``}`:`HTTP ${e.scheme??`authentication`}`;case`oauth2`:return`OAuth 2.0 authorization`;case`openIdConnect`:return`OpenID Connect`;case`mutualTLS`:return`Mutual TLS authentication`}},G=({showInfoPage:a,redirectTo:o}={})=>{let{input:s,type:p,options:m}=u(),S=r(),{data:{schema:D}}=n(c(B,{input:s,type:p})),{title:F,description:I}=D,V=C(e=>e.isCollapsed);if(P(),!l(a,!!I)&&o)return(0,z.jsx)(i,{to:{pathname:o,search:S.search},replace:!0});let G=!!(D.contact?.name||D.contact?.email||D.contact?.url||D.servers.length>0||D.license||D.termsOfService||D.externalDocs),K=D.tags.flatMap(({name:e,description:t,extensions:n})=>e?{name:e,description:t,extensions:n}:[]);return(0,z.jsxs)(`div`,{className:`pt-(--padding-content-top)`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,z.jsx)(T,{name:`category`,children:F}),(0,z.jsxs)(e,{children:[F&&(0,z.jsx)(`title`,{children:F}),I&&(0,z.jsx)(`meta`,{name:`description`,content:I})]}),(0,z.jsxs)(`div`,{className:`mb-8 flex flex-col gap-4`,children:[(0,z.jsx)(E,{heading:F}),(0,z.jsxs)(`div`,{className:`grid grid-cols-1 xl:grid-cols-[1fr_minmax(250px,380px)] gap-8`,children:[G&&(0,z.jsx)(`div`,{className:`xl:hidden sticky top-(--top-nav-height) lg:top-(--scroll-padding) z-10 row-start-1 col-start-1 justify-self-end self-start`,children:(0,z.jsxs)(b,{children:[(0,z.jsx)(y,{asChild:!0,children:(0,z.jsx)(g,{variant:`outline`,size:`icon`,className:`shadow-sm rounded-full`,children:(0,z.jsx)(d,{})})}),(0,z.jsx)(v,{align:`end`,className:`xl:hidden w-full max-w-full md:max-w-sm`,children:(0,z.jsx)(H,{schema:D})})]})}),(0,z.jsxs)(`div`,{className:`flex flex-col gap-6 row-start-1 col-start-1`,children:[D.summary&&(0,z.jsx)(`p`,{className:`text-lg text-muted-foreground`,children:D.summary}),D.description&&(0,z.jsx)(x,{className:_(`prose-img:max-w-prose prose-sm max-w-full`,V?`lg:max-w-4xl`:`lg:max-w-2xl`),content:D.description}),K.length>1&&(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,z.jsx)(L,{size:14}),`Tags`]}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:K.map(e=>(0,z.jsx)(N,{variant:`outline`,asChild:!0,children:(0,z.jsx)(t,{to:w(e.name),children:(0,z.jsxs)(j,{children:[(0,z.jsx)(M,{children:e.extensions?.[`x-displayName`]??e.name}),e.description&&(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(x,{components:{p:({children:e})=>e,a:e=>(0,z.jsx)(`span`,{...e})},content:e.description,className:`prose-sm text-pretty`})})]})})},e.name))})]}),!m?.disableSecurity&&(D.components?.securitySchemes?.length??0)>0&&(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,z.jsx)(h,{size:14}),`Security Schemes`]}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:D.components?.securitySchemes?.map(e=>(0,z.jsxs)(N,{variant:`outline`,children:[(0,z.jsxs)(j,{children:[(0,z.jsxs)(M,{className:`flex items-center gap-2`,children:[U(e.type),e.name]}),(0,z.jsx)(k,{asChild:!0,children:(0,z.jsx)(x,{content:e.description??W(e),className:`prose-sm text-pretty`,components:{p:({children:e})=>e,a:e=>(0,z.jsx)(`span`,{...e})}})})]}),(0,z.jsx)(A,{children:(0,z.jsx)(f,{variant:`muted`,className:`text-[10px] font-mono`,children:e.type})})]},e.name))})]}),D.webhooks.length>0&&(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,z.jsx)(R,{size:14}),`Webhooks`]}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:D.webhooks.map(e=>(0,z.jsxs)(N,{variant:`outline`,children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(M,{children:e.name}),(e.summary||e.description)&&(0,z.jsx)(k,{children:e.summary??e.description})]}),(0,z.jsx)(A,{children:(0,z.jsx)(f,{variant:`muted`,className:`text-[10px] font-mono`,children:e.method})})]},`${e.name}-${e.method}`))})]})]}),G&&(0,z.jsx)(`div`,{className:`hidden xl:block`,children:(0,z.jsx)(O,{className:`sticky top-(--scroll-padding)`,children:(0,z.jsx)(H,{schema:D})})})]})]})]})};export{G as SchemaInfo};
//# sourceMappingURL=SchemaInfo-Bzz-Ao8y.js.map