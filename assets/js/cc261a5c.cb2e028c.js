"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"Salesforce"},i="Salesforce",l={unversionedId:"connectors/salesforce",id:"connectors/salesforce",title:"Salesforce",description:"Setting up the Salesforce source connector involves creating a read-only Salesforce user and configuring the Salesforce connector through the Fabriq UI.",source:"@site/docs/connectors/salesforce.mdx",sourceDirName:"connectors",slug:"/connectors/salesforce",permalink:"/docs/connectors/salesforce",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/connectors/salesforce.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Salesforce"},sidebar:"tutorialSidebar",previous:{title:"Connectors",permalink:"/docs/category/connectors"},next:{title:"Amazon S3",permalink:"/docs/connectors/amazon s3"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connect",id:"connect",level:2},{value:"Auth Connection",id:"auth-connection",level:4},{value:"Credentials Connection",id:"credentials-connection",level:4},{value:"Configure",id:"configure",level:2},{value:"Pipeline View",id:"pipeline-view",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"salesforce"},"Salesforce"),(0,a.kt)("p",null,"Setting up the Salesforce source connector involves creating a read-only Salesforce user and configuring the Salesforce connector through the Fabriq UI."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This page guides you through the process of setting up the Salesforce source connector."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Available"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Auth"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Managed syncs (common, standard objects, custom objects)"),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Managed syncs: incremental deletes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action API (common objects)"),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Real-time events"),(0,a.kt)("td",{parentName:"tr",align:null},"yes")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported common object types:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account"),(0,a.kt)("li",{parentName:"ul"},"Contact"),(0,a.kt)("li",{parentName:"ul"},"Lead"),(0,a.kt)("li",{parentName:"ul"},"Opportunity"),(0,a.kt)("li",{parentName:"ul"},"User")),(0,a.kt)("h2",{id:"connect"},"Connect"),(0,a.kt)("h4",{id:"auth-connection"},"Auth Connection"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Salesforce OAuth Image",src:n(6697).Z,width:"1680",height:"297"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Connect"),"."),(0,a.kt)("li",{parentName:"ul"},"You will be redirected to the OAuth provider's website."),(0,a.kt)("li",{parentName:"ul"},"Follow the prompts to log in to your account or create a new account if necessary."),(0,a.kt)("li",{parentName:"ul"},"Once authenticated, review the requested permissions and grant access."),(0,a.kt)("li",{parentName:"ul"},"After granting access."),(0,a.kt)("li",{parentName:"ul"},"Return to the pipeline connection page and click ",(0,a.kt)("strong",{parentName:"li"},"continue"),".")),(0,a.kt)("p",null,"Salesforce ",(0,a.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_tokens_scopes.htm&type=5"},"OAuth")," credentials."),(0,a.kt)("h4",{id:"credentials-connection"},"Credentials Connection"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Salesforce OAuth Image",src:n(5895).Z,width:"1701",height:"394"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Name")," -  Enter your Salesforce username associated with the account you wish to connect."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password")," - Provide the password for your Salesforce account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security Token"),"-  Salesforce requires a security token for API access. Please generate and provide your security token."),(0,a.kt)("li",{parentName:"ul"},"After entering the details & click ",(0,a.kt)("strong",{parentName:"li"},"continue"),".")),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Salesforce Configure Image",src:n(9104).Z,width:"1727",height:"659"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the entities that need to be synced by Clicking the ",(0,a.kt)("strong",{parentName:"li"},"Add Entities")," button."),(0,a.kt)("li",{parentName:"ul"},"Locate the ",(0,a.kt)("strong",{parentName:"li"},"Sync From")," dropdown menu and select the desired source or sync option."),(0,a.kt)("li",{parentName:"ul"},"Similarly, find the ",(0,a.kt)("strong",{parentName:"li"},"Sync Time")," dropdown menu and choose the preferred synchronization interval or timing."),(0,a.kt)("li",{parentName:"ul"},"Once you have selected the appropriate options, click on the ",(0,a.kt)("strong",{parentName:"li"},"Save")," button to save the configuration."),(0,a.kt)("li",{parentName:"ul"},"Locate the ",(0,a.kt)("strong",{parentName:"li"},"Deploy")," button and click on it."),(0,a.kt)("li",{parentName:"ul"},"The deployment process will begin, and once it is completed will create new source in you airbyte workspace, you will be automatically redirected to the sync page.")),(0,a.kt)("h2",{id:"pipeline-view"},"Pipeline View"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Salesforce Sync Image",src:n(5290).Z,width:"1920",height:"834"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Locate the ",(0,a.kt)("strong",{parentName:"li"},"Sync Frequency")," icon click on it."),(0,a.kt)("li",{parentName:"ul"},"This action will initiate the sync trigger in airbyte, causing the data synchronization process to start."),(0,a.kt)("li",{parentName:"ul"},"After the sync is triggered, you can monitor the progress and view detailed logs by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"View")," option from the table.")))}d.isMDXComponent=!0},9104:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/salesforce_configure-de7eba7a85f55e3921cc412ae5cfa0bc.png"},5895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/salesforce_connect-4fbe7b22eab1c8587d6ab60063a605e1.png"},6697:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/salesforce_oauth-77015517e94f1577a8ce0714012a1f33.png"},5290:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/salesforce_sync-a038048f2021d063aa596804171023c1.png"}}]);