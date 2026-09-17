import{a as e,t}from"./Heading-C6oMkobf.js";import{n}from"./joinUrl-B2vl3eFo.js";import{t as r}from"./jsx-runtime-DiK4U9sA.js";import{P as i}from"./DropdownMenu-Bluz5pB4.js";import{t as a}from"./SchemaView-D5wulxbf.js";import{c as o,l as s,s as c}from"./openapi-CjUeq-X3.js";import{t as l}from"./Toc-D7tN9Aco.js";import{t as u}from"./Button-_cvmYq8c.js";import{n as d,r as f,t as p}from"./Collapsible-COx3jPE3.js";import{t as m}from"./slugify-bXvLWs_E.js";import{n as h,t as g}from"./ApiHeader-Bu04h4Xx.js";var _=r(),v=o(`
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
`);function y(){let{input:r,type:o,versions:y,version:b,options:x}=c(),{data:S}=n(s(v,{input:r,type:o})),C=S.schema.title,w=S.schema.components?.schemas??[],T=Object.entries(y).length>1,E=x?.showVersionSelect===`always`||T&&x?.showVersionSelect!==`hide`;return w.length?(0,_.jsxs)(`div`,{className:`grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,_.jsx)(h,{name:`category`,children:C}),(0,_.jsxs)(e,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),(0,_.jsxs)(`div`,{className:`pt-(--padding-content-top) pb-(--padding-content-bottom)`,children:[(0,_.jsx)(g,{title:C,heading:`Schemas`}),(0,_.jsx)(`hr`,{className:`my-8`}),(0,_.jsx)(`div`,{className:`flex flex-col gap-y-5`,children:w.map(e=>(0,_.jsxs)(p,{className:`group`,defaultOpen:!0,children:[(0,_.jsxs)(t,{registerNavigationAnchor:!0,level:2,className:`flex items-center gap-1 justify-between w-fit`,id:m(e.name),children:[e.name,` `,(0,_.jsx)(f,{asChild:!0,children:(0,_.jsx)(u,{variant:`ghost`,size:`icon`,className:`size-6`,children:(0,_.jsx)(i,{size:16,className:`group-data-[state=open]:rotate-90 transition cursor-pointer`})})})]}),(0,_.jsx)(d,{className:`mt-4 CollapsibleContent`,children:(0,_.jsx)(a,{schema:e.schema,hideRootRef:!0})})]},e.name))})]}),(0,_.jsx)(l,{entries:w.map(e=>({id:m(e.name),text:e.name,depth:1}))})]}):(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(e,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),`No schemas found`]})}export{y as SchemaList};
//# sourceMappingURL=SchemaList-GmNXt_RY.js.map