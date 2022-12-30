var e,t,n;(n=t||(t={})).Attribute="attribute",n.Pseudo="pseudo",n.PseudoElement="pseudo-element",n.Tag="tag",n.Universal="universal",n.Adjacent="adjacent",n.Child="child",n.Descendant="descendant",n.Parent="parent",n.Sibling="sibling",n.ColumnCombinator="column-combinator";var a,r;(r=a||(a={})).Any="any",r.Element="element",r.End="end",r.Equals="equals",r.Exists="exists",r.Hyphen="hyphen",r.Not="not",r.Start="start";const o=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,s=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,c=new Map([[126,a.Element],[94,a.Start],[36,a.End],[42,a.Any],[33,a.Not],[124,a.Hyphen]]),i=new Set(["has","not","matches","is","where","host","host-context"]);const l=new Set(["contains","icontains"]);function u(e,t,n){const a=parseInt(t,16)-65536;return a!=a||n?t:a<0?String.fromCharCode(a+65536):String.fromCharCode(a>>10|55296,1023&a|56320)}function d(e){return e.replace(s,u)}function h(e){return 39===e||34===e}function m(e){return 32===e||9===e||10===e||12===e||13===e}function p(e){const t=[],n=f(t,`${e}`,0);if(n<e.length)throw new Error(`Unmatched selector: ${e.slice(n)}`);return t}function f(e,n,r){let s=[];function u(e){const t=n.slice(r+e).match(o);if(!t)throw new Error(`Expected name, found ${n.slice(r)}`);const[a]=t;return r+=e+a.length,d(a)}function p(e){for(r+=e;r<n.length&&m(n.charCodeAt(r));)r++}function g(){const e=r+=1;let t=1;for(;t>0&&r<n.length;r++)40!==n.charCodeAt(r)||C(r)?41!==n.charCodeAt(r)||C(r)||t--:t++;if(t)throw new Error("Parenthesis not matched");return d(n.slice(e,r-1))}function C(e){let t=0;for(;92===n.charCodeAt(--e);)t++;return 1==(1&t)}function A(){if(s.length>0&&function(e){switch(e.type){case t.Adjacent:case t.Child:case t.Descendant:case t.Parent:case t.Sibling:case t.ColumnCombinator:return!0;default:return!1}}(s[s.length-1]))throw new Error("Did not expect successive traversals.")}function b(e){s.length>0&&s[s.length-1].type===t.Descendant?s[s.length-1].type=e:(A(),s.push({type:e}))}function E(e,n){s.push({type:t.Attribute,name:e,action:n,value:u(1),namespace:null,ignoreCase:"quirks"})}function $(){if(s.length&&s[s.length-1].type===t.Descendant&&s.pop(),0===s.length)throw new Error("Empty sub-selector");e.push(s)}if(p(0),n.length===r)return r;e:for(;r<n.length;){const e=n.charCodeAt(r);switch(e){case 32:case 9:case 10:case 12:case 13:0!==s.length&&s[0].type===t.Descendant||(A(),s.push({type:t.Descendant})),p(1);break;case 62:b(t.Child),p(1);break;case 60:b(t.Parent),p(1);break;case 126:b(t.Sibling),p(1);break;case 43:b(t.Adjacent),p(1);break;case 46:E("class",a.Element);break;case 35:E("id",a.Equals);break;case 91:{let e;p(1);let o=null;124===n.charCodeAt(r)?e=u(1):n.startsWith("*|",r)?(o="*",e=u(2)):(e=u(0),124===n.charCodeAt(r)&&61!==n.charCodeAt(r+1)&&(o=e,e=u(1))),p(0);let i=a.Exists;const l=c.get(n.charCodeAt(r));if(l){if(i=l,61!==n.charCodeAt(r+1))throw new Error("Expected `=`");p(2)}else 61===n.charCodeAt(r)&&(i=a.Equals,p(1));let f="",g=null;if("exists"!==i){if(h(n.charCodeAt(r))){const e=n.charCodeAt(r);let t=r+1;for(;t<n.length&&(n.charCodeAt(t)!==e||C(t));)t+=1;if(n.charCodeAt(t)!==e)throw new Error("Attribute value didn't end");f=d(n.slice(r+1,t)),r=t+1}else{const e=r;for(;r<n.length&&(!m(n.charCodeAt(r))&&93!==n.charCodeAt(r)||C(r));)r+=1;f=d(n.slice(e,r))}p(0);const e=32|n.charCodeAt(r);115===e?(g=!1,p(1)):105===e&&(g=!0,p(1))}if(93!==n.charCodeAt(r))throw new Error("Attribute selector didn't terminate");r+=1;const A={type:t.Attribute,name:e,action:i,value:f,namespace:o,ignoreCase:g};s.push(A);break}case 58:{if(58===n.charCodeAt(r+1)){s.push({type:t.PseudoElement,name:u(2).toLowerCase(),data:40===n.charCodeAt(r)?g():null});continue}const e=u(1).toLowerCase();let a=null;if(40===n.charCodeAt(r))if(i.has(e)){if(h(n.charCodeAt(r+1)))throw new Error(`Pseudo-selector ${e} cannot be quoted`);if(a=[],r=f(a,n,r+1),41!==n.charCodeAt(r))throw new Error(`Missing closing parenthesis in :${e} (${n})`);r+=1}else{if(a=g(),l.has(e)){const e=a.charCodeAt(0);e===a.charCodeAt(a.length-1)&&h(e)&&(a=a.slice(1,-1))}a=d(a)}s.push({type:t.Pseudo,name:e,data:a});break}case 44:$(),s=[],p(1);break;default:{if(n.startsWith("/*",r)){const e=n.indexOf("*/",r+2);if(e<0)throw new Error("Comment was not terminated");r=e+2,0===s.length&&p(0);break}let a,c=null;if(42===e)r+=1,a="*";else if(124===e){if(a="",124===n.charCodeAt(r+1)){b(t.ColumnCombinator),p(2);break}}else{if(!o.test(n.slice(r)))break e;a=u(0)}124===n.charCodeAt(r)&&124!==n.charCodeAt(r+1)&&(c=a,42===n.charCodeAt(r+1)?(a="*",r+=2):a=u(1)),s.push("*"===a?{type:t.Universal,namespace:c}:{type:t.Tag,name:a,namespace:c})}}}return $(),r}const g=["\\",'"'],C=[...g,"(",")"],A=new Set(g.map((e=>e.charCodeAt(0)))),b=new Set(C.map((e=>e.charCodeAt(0)))),E=new Set([...C,"~","^","$","*","+","!","|",":","[","]"," ","."].map((e=>e.charCodeAt(0))));function $(e){return e.map((e=>e.map(w).join(""))).join(", ")}function w(e,n,r){switch(e.type){case t.Child:return 0===n?"> ":" > ";case t.Parent:return 0===n?"< ":" < ";case t.Sibling:return 0===n?"~ ":" ~ ";case t.Adjacent:return 0===n?"+ ":" + ";case t.Descendant:return" ";case t.ColumnCombinator:return 0===n?"|| ":" || ";case t.Universal:return"*"===e.namespace&&n+1<r.length&&"name"in r[n+1]?"":`${v(e.namespace)}*`;case t.Tag:return y(e);case t.PseudoElement:return`::${q(e.name,E)}${null===e.data?"":`(${q(e.data,b)})`}`;case t.Pseudo:return`:${q(e.name,E)}${null===e.data?"":`(${"string"==typeof e.data?q(e.data,b):$(e.data)})`}`;case t.Attribute:{if("id"===e.name&&e.action===a.Equals&&"quirks"===e.ignoreCase&&!e.namespace)return`#${q(e.value,E)}`;if("class"===e.name&&e.action===a.Element&&"quirks"===e.ignoreCase&&!e.namespace)return`.${q(e.value,E)}`;const t=y(e);return e.action===a.Exists?`[${t}]`:`[${t}${function(e){switch(e){case a.Equals:return"";case a.Element:return"~";case a.Start:return"^";case a.End:return"$";case a.Any:return"*";case a.Not:return"!";case a.Hyphen:return"|";case a.Exists:throw new Error("Shouldn't be here")}}(e.action)}="${q(e.value,A)}"${null===e.ignoreCase?"":e.ignoreCase?" i":" s"}]`}}}function y(e){return`${v(e.namespace)}${q(e.name,E)}`}function v(e){return null!==e?`${"*"===e?"*":q(e,E)}|`:""}function q(e,t){let n=0,a="";for(let r=0;r<e.length;r++)t.has(e.charCodeAt(r))&&(a+=`${e.slice(n,r)}\\${e.charAt(r)}`,n=r+1);return a.length>0?a+e.slice(n):e}var S;var k,x=(S={quoteCode:e=>"`"+e+"`",capitalize:e=>e[0].toUpperCase()+e.slice(1),translateArray:(e,t=" e ")=>{if(0===e.length)return"";if(1===e.length)return e[0];const n=e.splice(0,e.length-1),a=e[e.length-1];return n.join(", ")+t+a}}).quoteCode,j=S.translateArray;const P=e=>"attribute"===e.type,D=e=>P(e)&&"class"===e.name&&"element"===e.action,T=e=>P(e)&&"id"===e.name&&"equals"===e.action,U=e=>"tag"===e.type,F=e=>"pseudo-element"===e.type,H=e=>D(e)?"classes":T(e)?"identifier":P(e)?"attributes":F(e)?"pseudoElement":U(e)?"element":e.type;var L=(k={isCombinator:e=>["child","sibling","adjacent","descendant"].includes(e.type),isAttribute:P,isClass:D,isIdentifier:T,isElement:U,isPseudoElement:F,getTokenGroup:H,groupTokens:e=>e.reduce(((e,t)=>{const n=H(t);return{...e,[n]:e[n]instanceof Array?[...e[n],t]:t}}),{element:null,pseudoElement:null,identifier:null,attributes:[],classes:[]})}).groupTokens;const M=(e,t)=>{const n=x(t);return{equals:`**exatamente igual** ao valor ${n}`,hyphen:"**começando com, ou sendo igual ao**, valor "+(n+"-"),any:`tendo ${n} em **qualquer posição**`,start:`**começando** com ${n}`,end:`**terminando** com o valor ${n}`}[e]??""},N=e=>{const t=M(e.action,e.value);return`um atributo ${x(e.name)}`+(t?` com o valor ${t}`:"")};var z={translateAttributeAction:M,translateAttribute:N,translateCompoundSelector:e=>{const t=L(e),{classes:n,identifier:a,attributes:r}=t,o=a?`o identificador ${x(a.value)}`:"",s=n.length?(n.length>1?"as classes ":"a classe ")+j(n.map((({value:e})=>x(e)))):"",c=j(r.map(N));return["um elemento",t.element?`do tipo ${x(t.element.name)}`:"de qualquer tipo",o||s||c?"que tem "+j([o,s,c].filter((e=>e))):""].filter((e=>e)).join(" ")}}.translateCompoundSelector,I=S.capitalize,W=k.isCombinator;const B=e=>e.reduce((([e,...t],n)=>W(n)?[[],n,e,...t]:[[n,...e],...t]),[[]]);var G={splitByCombinator:B,translateComplexSelector:e=>B(e).map(((e,t)=>{if(e instanceof Array){const t=z(e);return I(t)}return`. ${{descendant:"É **descendente**",sibling:"Está **logo após**",adjacent:"Está **imediatamente ao lado**",child:"É **filho direto**"}[e.type]} de...\n`})).join("")+"."}.translateComplexSelector;e={translate:{translate:e=>{if(!e)return[];return p(e).map((e=>({from:$([e]),to:G(e)})))}}.translate};const O=document.querySelector("#terminal-output");document.querySelector("#terminal-input").addEventListener("input",(t=>{const n=t.target.value,a=(0,e.translate)(n),r=a.length>0?"<div>"+a.map((e=>{const t="Começando do lado direito, temos: "+e.to;return`<p class="selector-intro">Analisando o seletor <code>${e.from}</code>...</p>`+(t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/\`(.*?)\`/g,"<code>$1</code>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/(.+?)(\n|$)+/g,"<p>$1</p>")+"</div>")})).join("<div>"):"";O.innerHTML=r}));
//# sourceMappingURL=index.f697bbf7.js.map
