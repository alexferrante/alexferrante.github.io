(()=>{var e={};e.id=304,e.ids=[304],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},7202:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4916:e=>{"use strict";e.exports=import("next-mdx-remote/rsc")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5054:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>d,routeModule:()=>g,tree:()=>p});var i=n(4656);n(6258),n(4080);var s=n(2573),a=n(846),o=n(2221),l=n.n(o),u=n(8656),c={};for(let e in u)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>u[e]);n.d(t,c);var f=e([i]);i=(f.then?(await f)():f)[0];let p=["",{children:["publications",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,4656)),"/home/runner/work/alexferrante.github.io/alexferrante.github.io/app/publications/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,1150))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,6258)),"/home/runner/work/alexferrante.github.io/alexferrante.github.io/app/layout.js"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,4080,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,1150))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/alexferrante.github.io/alexferrante.github.io/app/publications/page.js"],h="/publications/page",m={require:n,loadChunk:()=>Promise.resolve()},g=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/publications/page",pathname:"/publications",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}});r()}catch(e){r(e)}})},370:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,4980,23)),Promise.resolve().then(n.t.bind(n,4984,23))},4656:(e,t,n)=>{"use strict";n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{default:()=>l,metadata:()=>u});var i=n(1431);n(9685);var s=n(3466),a=n(6531),o=e([s]);s=(o.then?(await o)():o)[0];let u={title:"Publications"};function l(){return(0,i.jsxs)("main",{className:"md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20",children:[i.jsx("h1",{className:"text-3xl font-semibold",children:"Publications"}),i.jsx(s.Z,{bibtex:a.Z})]})}r()}catch(e){r(e)}})},3635:(e,t,n)=>{"use strict";n.d(t,{CH:()=>k});let r=new Set(["<",">","{","}","[","]"]),i=new Set(["for","do","while","if","else","return","function","var","let","const","true","false","undefined","this","new","delete","typeof","in","instanceof","void","break","continue","switch","case","default","throw","try","catch","finally","debugger","with","yield","async","await","class","extends","super","import","export","from","static"]),s=new Set(["+","-","*","/","%","=","!","&","|","^","~","!","?",":",".",",",";","'",'"',".","(",")","[","]","#","@","\\",...r]),a=["identifier","keyword","string","class","property","entity","jsxliterals","sign","comment","break","space"],[o,l,u,c,f,p,d,h,m,g,x]=a.map((e,t)=>t);function b(e){return/^[^\S\r\n]+$/g.test(e)}function v(e){return s.has(e)}function w(e){return/^[\w_]+$/.test(e)||y(e)}function y(e){return/[^\u0000-\u007f]/.test(e)}function _(e){return/^[a-zA-Z]$/.test(e)}function P(e){var t;return(_(t=e[0])||y(t))&&(1===e.length||w(e.slice(1)))}function j(e){return'"'===e||"'"===e}function q(e){return"//"===(e=e.slice(0,2))||"/*"===e}function k(e){return(function(e){let t=[],n=e=>`<span class="sh__line">${e}</span>`;function r(e){t.push(n(e.map(([e,t])=>`<span class="sh__token--${a[e]}" style="color: var(--sh-${a[e]})">${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</span>`).join("")))}let i=[];for(let t=0;t<e.length;t++){let n=e[t],[s,a]=n;if(s!==g){if(a.includes("\n")){let e=a.split("\n");for(let t=0;t<e.length;t++)i.push([s,e[t]]),t<e.length-1&&(r(i),i.length=0)}else i.push(n)}else i.push([s,""]),r(i),i.length=0}return i.length&&r(i),t})(function(e){let t="",n=-1,a=[-1,""],k=[-2,""],$=[],G=!1,A=0,C=!1,E=0,S=()=>G&&!C&&!A,M=()=>A&&!S(),Z=()=>!A&&S()&&!C&&E>0,z=null,N=0,H=0,O=()=>null!==z,R=()=>H>N,T=()=>H>0&&H===N,U=()=>O()||R(),X=(e,r)=>{if(r&&(t=r),t){let r=[n=e||function(e){let t="\n"===e;if(M()){if(O())return u;let[,t]=a;if(P(e)&&("<"===t||"</"===t))return p}if(Z())return d;if(O())return u;if(i.has(e))return"."===a[1]?o:l;if(t)return g;if(b(e))return x;if(e.split("").every(v))return h;if(function(e){let t=e[0];return w(t)&&t===t.toUpperCase()||"null"===e}(e))return M()?o:c;if(P(e)){let e="."===a[1]&&P(k[1]);if(!U()&&!e)return o;if(e)return f}return u}(t),t];n!==x&&n!==g&&(k=a,a=r),$.push(r)}t=""};for(let n=0;n<e.length;n++){var B;let i=e[n],o=e[n-1],l=e[n+1],c=o+i,p=i+l;if(j(i)&&!Z()){X(),"\\"===o||(z&&i===z?z=null:z||(z=i)),X(u,i);continue}if(!R()&&"\\n"!==o&&"`"===i){X(),X(u,i),H++;continue}if(R()){if("\\n"!==o&&"`"===i&&H>0){X(),H--,X(u,i);continue}if("${"===p){N++,X(u),X(h,p),n++;continue}}if(T()&&"}"===i){X(),N--,X(h,i);continue}if(S()&&"{"===i){X(),X(h,i),C=!0;continue}if(G){if(!A&&"<"===i){X(),"/"===l?(A=2,t=p,n++):(A=1,t=i),X(h);continue}if(A){if(">"===i&&!"/=".includes(o)){X(),1===A?(A=0,E++):(A=0,G=!1),X(h,i);continue}if("/>"===p||"</"===p){"<"!==t&&"/"!==t&&X(),"/>"===p?A=0:E--,E||(G=!1),t=p,n++,X(h);continue}if("<"===i){X(),t=i,X(h);continue}if("-"===l&&!U()&&!Z()&&t){X(f,t+i+l),n+=1;continue}if("="===l&&!U()){let e=t?t+i:i;P(e)&&(t=e,X(f));continue}}}!A&&("<"===i&&(_(l)||y(l))||"</"===p)&&(A="/"===l?2:1,"<"===i&&("/"===l||_(l))&&(G=!0));let d=j(i)||"`"===i,g=R(),x=!G&&"/"===(B=p)[0]&&!q(B[0]+B[1]),v=Z();if(d||g||j(z))t+=i;else if(x){X();let[r,s]=a;if(x&&-1!==r&&!(r===h&&")"!==s||r===m)){t=i,X();continue}let o=n++,l=()=>n>=e.length,c=()=>l()||"\n"===e[n],f=!1;for(;!c();n++)if("/"===e[n]&&"\\"!==e[n-1]){for(f=!0;o!==n&&/^[a-z]$/.test(e[n+1])&&!c();)n++;break}o!==n&&f?(t=e.slice(o,n+1),X(u)):(t=i,X(),n=o)}else if(q(p)){X();let r=n;if("/"===l)for(;n<e.length&&"\n"!==e[n];n++);else for(;n<e.length&&e[n-1]+e[n]!=="*/";n++);t=e.slice(r,n+1),X(m)}else" "===i||"\n"===i?" "===i&&(b(t)||!t||v)?(t+=i,"<"===l&&X()):(X(),t=i,X()):C&&"}"===i?(X(),t=i,X(),C=!1):v&&!r.has(i)||(w(i)===w(t[t.length-1])||S())&&!s.has(i)?t+=i:("</"===c&&(t=c),X(),"</"!==c&&(t=i),"</"===p||"/>"===p?(t=p,X(),n++):r.has(i)&&X())}return X(),$}(e)).join("\n")}}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[43,589,980,814],()=>n(5054));module.exports=r})();