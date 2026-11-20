import{w as Wc}from"./react-core-4301b326.js";const Bo="-";function ff(n){const e=hf(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;function r(a){const o=a.split(Bo);return o[0]===""&&o.length!==1&&o.shift(),Xc(o,e)||df(a)}function s(a,o){const l=t[a]||[];return o&&i[a]?[...l,...i[a]]:l}return{getClassGroupId:r,getConflictingClassGroupIds:s}}function Xc(n,e){var a;if(n.length===0)return e.classGroupId;const t=n[0],i=e.nextPart.get(t),r=i?Xc(n.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=n.join(Bo);return(a=e.validators.find(({validator:o})=>o(s)))==null?void 0:a.classGroupId}const pl=/^\[(.+)\]$/;function df(n){if(pl.test(n)){const e=pl.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function hf(n){const{theme:e,prefix:t}=n,i={nextPart:new Map,validators:[]};return mf(Object.entries(n.classGroups),t).forEach(([s,a])=>{Ba(a,i,s,e)}),i}function Ba(n,e,t,i){n.forEach(r=>{if(typeof r=="string"){const s=r===""?e:ml(e,r);s.classGroupId=t;return}if(typeof r=="function"){if(pf(r)){Ba(r(i),e,t,i);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([s,a])=>{Ba(a,ml(e,s),t,i)})})}function ml(n,e){let t=n;return e.split(Bo).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t}function pf(n){return n.isThemeGetter}function mf(n,e){return e?n.map(([t,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,o])=>[e+a,o])):s);return[t,r]}):n}function gf(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;function r(s,a){t.set(s,a),e++,e>n&&(e=0,i=t,t=new Map)}return{get(s){let a=t.get(s);if(a!==void 0)return a;if((a=i.get(s))!==void 0)return r(s,a),a},set(s,a){t.has(s)?t.set(s,a):r(s,a)}}}const qc="!";function _f(n){const e=n.separator,t=e.length===1,i=e[0],r=e.length;return function(a){const o=[];let l=0,c=0,d;for(let x=0;x<a.length;x++){let m=a[x];if(l===0){if(m===i&&(t||a.slice(x,x+r)===e)){o.push(a.slice(c,x)),c=x+r;continue}if(m==="/"){d=x;continue}}m==="["?l++:m==="]"&&l--}const f=o.length===0?a:a.substring(c),u=f.startsWith(qc),h=u?f.substring(1):f,g=d&&d>c?d-c:void 0;return{modifiers:o,hasImportantModifier:u,baseClassName:h,maybePostfixModifierPosition:g}}}function vf(n){if(n.length<=1)return n;const e=[];let t=[];return n.forEach(i=>{i[0]==="["?(e.push(...t.sort(),i),t=[]):t.push(i)}),e.push(...t.sort()),e}function xf(n){return{cache:gf(n.cacheSize),splitModifiers:_f(n),...ff(n)}}const Mf=/\s+/;function Sf(n,e){const{splitModifiers:t,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=new Set;return n.trim().split(Mf).map(a=>{const{modifiers:o,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:d}=t(a);let f=i(d?c.substring(0,d):c),u=!!d;if(!f){if(!d)return{isTailwindClass:!1,originalClassName:a};if(f=i(c),!f)return{isTailwindClass:!1,originalClassName:a};u=!1}const h=vf(o).join(":");return{isTailwindClass:!0,modifierId:l?h+qc:h,classGroupId:f,originalClassName:a,hasPostfixModifier:u}}).reverse().filter(a=>{if(!a.isTailwindClass)return!0;const{modifierId:o,classGroupId:l,hasPostfixModifier:c}=a,d=o+l;return s.has(d)?!1:(s.add(d),r(l,c).forEach(f=>s.add(o+f)),!0)}).reverse().map(a=>a.originalClassName).join(" ")}function yf(){let n=0,e,t,i="";for(;n<arguments.length;)(e=arguments[n++])&&(t=Yc(e))&&(i&&(i+=" "),i+=t);return i}function Yc(n){if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=Yc(n[i]))&&(t&&(t+=" "),t+=e);return t}function bf(n,...e){let t,i,r,s=a;function a(l){const c=e.reduce((d,f)=>f(d),n());return t=xf(c),i=t.cache.get,r=t.cache.set,s=o,o(l)}function o(l){const c=i(l);if(c)return c;const d=Sf(l,t);return r(l,d),d}return function(){return s(yf.apply(null,arguments))}}function Mt(n){const e=t=>t[n]||[];return e.isThemeGetter=!0,e}const Kc=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ef=/^\d+\/\d+$/,Tf=new Set(["px","full","screen"]),Af=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Rf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Cf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Pf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function On(n){return Ei(n)||Tf.has(n)||Ef.test(n)}function ti(n){return dr(n,"length",Bf)}function Ei(n){return!!n&&!Number.isNaN(Number(n))}function Xr(n){return dr(n,"number",Ei)}function xr(n){return!!n&&Number.isInteger(Number(n))}function Df(n){return n.endsWith("%")&&Ei(n.slice(0,-1))}function $e(n){return Kc.test(n)}function ni(n){return Af.test(n)}const Lf=new Set(["length","size","percentage"]);function If(n){return dr(n,Lf,$c)}function Uf(n){return dr(n,"position",$c)}const Nf=new Set(["image","url"]);function Ff(n){return dr(n,Nf,Vf)}function Of(n){return dr(n,"",zf)}function Mr(){return!0}function dr(n,e,t){const i=Kc.exec(n);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):t(i[2]):!1}function Bf(n){return wf.test(n)&&!Rf.test(n)}function $c(){return!1}function zf(n){return Cf.test(n)}function Vf(n){return Pf.test(n)}function Gf(){const n=Mt("colors"),e=Mt("spacing"),t=Mt("blur"),i=Mt("brightness"),r=Mt("borderColor"),s=Mt("borderRadius"),a=Mt("borderSpacing"),o=Mt("borderWidth"),l=Mt("contrast"),c=Mt("grayscale"),d=Mt("hueRotate"),f=Mt("invert"),u=Mt("gap"),h=Mt("gradientColorStops"),g=Mt("gradientColorStopPositions"),x=Mt("inset"),m=Mt("margin"),p=Mt("opacity"),b=Mt("padding"),T=Mt("saturate"),M=Mt("scale"),w=Mt("sepia"),E=Mt("skew"),S=Mt("space"),v=Mt("translate"),A=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",$e,e],L=()=>[$e,e],K=()=>["",On,ti],Z=()=>["auto",Ei,$e],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],I=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",$e],j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[Ei,Xr],ae=()=>[Ei,$e];return{cacheSize:500,separator:":",theme:{colors:[Mr],spacing:[On,ti],blur:["none","",ni,$e],brightness:re(),borderColor:[n],borderRadius:["none","","full",ni,$e],borderSpacing:L(),borderWidth:K(),contrast:re(),grayscale:X(),hueRotate:ae(),invert:X(),gap:L(),gradientColorStops:[n],gradientColorStopPositions:[Df,ti],inset:D(),margin:D(),opacity:re(),padding:L(),saturate:re(),scale:re(),sepia:X(),skew:ae(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",$e]}],container:["container"],columns:[{columns:[ni]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),$e]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xr,$e]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",$e]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",xr,$e]}],"grid-cols":[{"grid-cols":[Mr]}],"col-start-end":[{col:["auto",{span:["full",xr,$e]},$e]}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":[Mr]}],"row-start-end":[{row:["auto",{span:[xr,$e]},$e]}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",$e]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",$e]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...I()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...I(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...I(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[b]}],px:[{px:[b]}],py:[{py:[b]}],ps:[{ps:[b]}],pe:[{pe:[b]}],pt:[{pt:[b]}],pr:[{pr:[b]}],pb:[{pb:[b]}],pl:[{pl:[b]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",$e,e]}],"min-w":[{"min-w":[$e,e,"min","max","fit"]}],"max-w":[{"max-w":[$e,e,"none","full","min","max","fit","prose",{screen:[ni]},ni]}],h:[{h:[$e,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[$e,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[$e,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[$e,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ni,ti]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Xr]}],"font-family":[{font:[Mr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",$e]}],"line-clamp":[{"line-clamp":["none",Ei,Xr]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",On,$e]}],"list-image":[{"list-image":["none",$e]}],"list-style-type":[{list:["none","disc","decimal",$e]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",On,ti]}],"underline-offset":[{"underline-offset":["auto",On,$e]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),Uf]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",If]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ff]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:$()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[On,$e]}],"outline-w":[{outline:[On,ti]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[On,ti]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",ni,Of]}],"shadow-color":[{shadow:[Mr]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":W()}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ni,$e]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[T]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[T]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",$e]}],duration:[{duration:ae()}],ease:[{ease:["linear","in","out","in-out",$e]}],delay:[{delay:ae()}],animate:[{animate:["none","spin","ping","pulse","bounce",$e]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[xr,$e]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",$e]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$e]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$e]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[On,ti,Xr]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Zv=bf(Gf);var Zc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var s="",a=0;a<arguments.length;a++){var o=arguments[a];o&&(s=r(s,i(o)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var a="";for(var o in s)e.call(s,o)&&s[o]&&(a=r(a,o));return a}function r(s,a){return a?s?s+" "+a:s+a:s}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(Zc);var Hf=Zc.exports;const Jv=Wc(Hf);var zo={exports:{}};function Jc(n,e=100,t={}){if(typeof n!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof n}\`.`);if(e<0)throw new RangeError("`wait` must not be negative.");const{immediate:i}=typeof t=="boolean"?{immediate:t}:t;let r,s,a,o,l;function c(){const f=Date.now()-o;if(f<e&&f>=0)a=setTimeout(c,e-f);else if(a=void 0,!i){const u=r,h=s;r=void 0,s=void 0,l=n.apply(u,h)}}const d=function(...f){if(r&&this!==r)throw new Error("Debounced method called with different contexts.");r=this,s=f,o=Date.now();const u=i&&!a;if(a||(a=setTimeout(c,e)),u){const h=r,g=s;r=void 0,s=void 0,l=n.apply(h,g)}return l};return d.clear=()=>{a&&(clearTimeout(a),a=void 0)},d.flush=()=>{if(!a)return;const f=r,u=s;r=void 0,s=void 0,l=n.apply(f,u),clearTimeout(a),a=void 0},d}zo.exports.debounce=Jc;zo.exports=Jc;var kf=zo.exports;const Qv=Wc(kf);function qs(){return typeof window<"u"}function hr(n){return Qc(n)?(n.nodeName||"").toLowerCase():"#document"}function sn(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Nn(n){var e;return(e=(Qc(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Qc(n){return qs()?n instanceof Node||n instanceof sn(n).Node:!1}function xn(n){return qs()?n instanceof Element||n instanceof sn(n).Element:!1}function Ln(n){return qs()?n instanceof HTMLElement||n instanceof sn(n).HTMLElement:!1}function gl(n){return!qs()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof sn(n).ShadowRoot}function zr(n){const{overflow:e,overflowX:t,overflowY:i,display:r}=Mn(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(r)}function Wf(n){return["table","td","th"].includes(hr(n))}function Ys(n){return[":popover-open",":modal"].some(e=>{try{return n.matches(e)}catch{return!1}})}function Vo(n){const e=Go(),t=xn(n)?Mn(n):n;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function Xf(n){let e=hi(n);for(;Ln(e)&&!rr(e);){if(Vo(e))return e;if(Ys(e))return null;e=hi(e)}return null}function Go(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rr(n){return["html","body","#document"].includes(hr(n))}function Mn(n){return sn(n).getComputedStyle(n)}function Ks(n){return xn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function hi(n){if(hr(n)==="html")return n;const e=n.assignedSlot||n.parentNode||gl(n)&&n.host||Nn(n);return gl(e)?e.host:e}function jc(n){const e=hi(n);return rr(e)?n.ownerDocument?n.ownerDocument.body:n.body:Ln(e)&&zr(e)?e:jc(e)}function Nr(n,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const r=jc(n),s=r===((i=n.ownerDocument)==null?void 0:i.body),a=sn(r);if(s){const o=za(a);return e.concat(a,a.visualViewport||[],zr(r)?r:[],o&&t?Nr(o):[])}return e.concat(r,Nr(r,[],t))}function za(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}const qf=["top","right","bottom","left"],_l=["start","end"],vl=qf.reduce((n,e)=>n.concat(e,e+"-"+_l[0],e+"-"+_l[1]),[]),sr=Math.min,Ri=Math.max,Rs=Math.round,qr=Math.floor,wn=n=>({x:n,y:n}),Yf={left:"right",right:"left",bottom:"top",top:"bottom"},Kf={start:"end",end:"start"};function Va(n,e,t){return Ri(n,sr(e,t))}function pr(n,e){return typeof n=="function"?n(e):n}function Yn(n){return n.split("-")[0]}function Rn(n){return n.split("-")[1]}function eu(n){return n==="x"?"y":"x"}function Ho(n){return n==="y"?"height":"width"}function Ci(n){return["top","bottom"].includes(Yn(n))?"y":"x"}function ko(n){return eu(Ci(n))}function tu(n,e,t){t===void 0&&(t=!1);const i=Rn(n),r=ko(n),s=Ho(r);let a=r==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=Ps(a)),[a,Ps(a)]}function $f(n){const e=Ps(n);return[Cs(n),e,Cs(e)]}function Cs(n){return n.replace(/start|end/g,e=>Kf[e])}function Zf(n,e,t){const i=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(n){case"top":case"bottom":return t?e?r:i:e?i:r;case"left":case"right":return e?s:a;default:return[]}}function Jf(n,e,t,i){const r=Rn(n);let s=Zf(Yn(n),t==="start",i);return r&&(s=s.map(a=>a+"-"+r),e&&(s=s.concat(s.map(Cs)))),s}function Ps(n){return n.replace(/left|right|bottom|top/g,e=>Yf[e])}function Qf(n){return{top:0,right:0,bottom:0,left:0,...n}}function nu(n){return typeof n!="number"?Qf(n):{top:n,right:n,bottom:n,left:n}}function Ds(n){const{x:e,y:t,width:i,height:r}=n;return{width:i,height:r,top:t,left:e,right:e+i,bottom:t+r,x:e,y:t}}function xl(n,e,t){let{reference:i,floating:r}=n;const s=Ci(e),a=ko(e),o=Ho(a),l=Yn(e),c=s==="y",d=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,u=i[o]/2-r[o]/2;let h;switch(l){case"top":h={x:d,y:i.y-r.height};break;case"bottom":h={x:d,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:f};break;case"left":h={x:i.x-r.width,y:f};break;default:h={x:i.x,y:i.y}}switch(Rn(e)){case"start":h[a]-=u*(t&&c?-1:1);break;case"end":h[a]+=u*(t&&c?-1:1);break}return h}const jf=async(n,e,t)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=t,o=s.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let c=await a.getElementRects({reference:n,floating:e,strategy:r}),{x:d,y:f}=xl(c,i,l),u=i,h={},g=0;for(let x=0;x<o.length;x++){const{name:m,fn:p}=o[x],{x:b,y:T,data:M,reset:w}=await p({x:d,y:f,initialPlacement:i,placement:u,strategy:r,middlewareData:h,rects:c,platform:a,elements:{reference:n,floating:e}});d=b??d,f=T??f,h={...h,[m]:{...h[m],...M}},w&&g<=50&&(g++,typeof w=="object"&&(w.placement&&(u=w.placement),w.rects&&(c=w.rects===!0?await a.getElementRects({reference:n,floating:e,strategy:r}):w.rects),{x:d,y:f}=xl(c,u,l)),x=-1)}return{x:d,y:f,placement:u,strategy:r,middlewareData:h}};async function Wo(n,e){var t;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:a,elements:o,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:u=!1,padding:h=0}=pr(e,n),g=nu(h),m=o[u?f==="floating"?"reference":"floating":f],p=Ds(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(m)))==null||t?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:c,rootBoundary:d,strategy:l})),b=f==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),M=await(s.isElement==null?void 0:s.isElement(T))?await(s.getScale==null?void 0:s.getScale(T))||{x:1,y:1}:{x:1,y:1},w=Ds(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:b,offsetParent:T,strategy:l}):b);return{top:(p.top-w.top+g.top)/M.y,bottom:(w.bottom-p.bottom+g.bottom)/M.y,left:(p.left-w.left+g.left)/M.x,right:(w.right-p.right+g.right)/M.x}}const ed=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:r,rects:s,platform:a,elements:o,middlewareData:l}=e,{element:c,padding:d=0}=pr(n,e)||{};if(c==null)return{};const f=nu(d),u={x:t,y:i},h=ko(r),g=Ho(h),x=await a.getDimensions(c),m=h==="y",p=m?"top":"left",b=m?"bottom":"right",T=m?"clientHeight":"clientWidth",M=s.reference[g]+s.reference[h]-u[h]-s.floating[g],w=u[h]-s.reference[h],E=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let S=E?E[T]:0;(!S||!await(a.isElement==null?void 0:a.isElement(E)))&&(S=o.floating[T]||s.floating[g]);const v=M/2-w/2,A=S/2-x[g]/2-1,C=sr(f[p],A),D=sr(f[b],A),L=C,K=S-x[g]-D,Z=S/2-x[g]/2+v,H=Va(L,Z,K),$=!l.arrow&&Rn(r)!=null&&Z!==H&&s.reference[g]/2-(Z<L?C:D)-x[g]/2<0,W=$?Z<L?Z-L:Z-K:0;return{[h]:u[h]+W,data:{[h]:H,centerOffset:Z-H-W,...$&&{alignmentOffset:W}},reset:$}}});function td(n,e,t){return(n?[...t.filter(r=>Rn(r)===n),...t.filter(r=>Rn(r)!==n)]:t.filter(r=>Yn(r)===r)).filter(r=>n?Rn(r)===n||(e?Cs(r)!==r:!1):!0)}const nd=function(n){return n===void 0&&(n={}),{name:"autoPlacement",options:n,async fn(e){var t,i,r;const{rects:s,middlewareData:a,placement:o,platform:l,elements:c}=e,{crossAxis:d=!1,alignment:f,allowedPlacements:u=vl,autoAlignment:h=!0,...g}=pr(n,e),x=f!==void 0||u===vl?td(f||null,h,u):u,m=await Wo(e,g),p=((t=a.autoPlacement)==null?void 0:t.index)||0,b=x[p];if(b==null)return{};const T=tu(b,s,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(o!==b)return{reset:{placement:x[0]}};const M=[m[Yn(b)],m[T[0]],m[T[1]]],w=[...((i=a.autoPlacement)==null?void 0:i.overflows)||[],{placement:b,overflows:M}],E=x[p+1];if(E)return{data:{index:p+1,overflows:w},reset:{placement:E}};const S=w.map(C=>{const D=Rn(C.placement);return[C.placement,D&&d?C.overflows.slice(0,2).reduce((L,K)=>L+K,0):C.overflows[0],C.overflows]}).sort((C,D)=>C[1]-D[1]),A=((r=S.filter(C=>C[2].slice(0,Rn(C[0])?2:3).every(D=>D<=0))[0])==null?void 0:r[0])||S[0][0];return A!==o?{data:{index:p+1,overflows:w},reset:{placement:A}}:{}}}},id=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,i;const{placement:r,middlewareData:s,rects:a,initialPlacement:o,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...m}=pr(n,e);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const p=Yn(r),b=Ci(o),T=Yn(o)===o,M=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=u||(T||!x?[Ps(o)]:$f(o)),E=g!=="none";!u&&E&&w.push(...Jf(o,x,g,M));const S=[o,...w],v=await Wo(e,m),A=[];let C=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&A.push(v[p]),f){const H=tu(r,a,M);A.push(v[H[0]],v[H[1]])}if(C=[...C,{placement:r,overflows:A}],!A.every(H=>H<=0)){var D,L;const H=(((D=s.flip)==null?void 0:D.index)||0)+1,$=S[H];if($){var K;const I=f==="alignment"?b!==Ci($):!1,X=((K=C[0])==null?void 0:K.overflows[0])>0;if(!I||X)return{data:{index:H,overflows:C},reset:{placement:$}}}let W=(L=C.filter(I=>I.overflows[0]<=0).sort((I,X)=>I.overflows[1]-X.overflows[1])[0])==null?void 0:L.placement;if(!W)switch(h){case"bestFit":{var Z;const I=(Z=C.filter(X=>{if(E){const j=Ci(X.placement);return j===b||j==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(j=>j>0).reduce((j,re)=>j+re,0)]).sort((X,j)=>X[1]-j[1])[0])==null?void 0:Z[0];I&&(W=I);break}case"initialPlacement":W=o;break}if(r!==W)return{reset:{placement:W}}}return{}}}};async function rd(n,e){const{placement:t,platform:i,elements:r}=n,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),a=Yn(t),o=Rn(t),l=Ci(t)==="y",c=["left","top"].includes(a)?-1:1,d=s&&l?-1:1,f=pr(e,n);let{mainAxis:u,crossAxis:h,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return o&&typeof g=="number"&&(h=o==="end"?g*-1:g),l?{x:h*d,y:u*c}:{x:u*c,y:h*d}}const sd=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,i;const{x:r,y:s,placement:a,middlewareData:o}=e,l=await rd(e,n);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:a}}}}},ad=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:o={fn:m=>{let{x:p,y:b}=m;return{x:p,y:b}}},...l}=pr(n,e),c={x:t,y:i},d=await Wo(e,l),f=Ci(Yn(r)),u=eu(f);let h=c[u],g=c[f];if(s){const m=u==="y"?"top":"left",p=u==="y"?"bottom":"right",b=h+d[m],T=h-d[p];h=Va(b,h,T)}if(a){const m=f==="y"?"top":"left",p=f==="y"?"bottom":"right",b=g+d[m],T=g-d[p];g=Va(b,g,T)}const x=o.fn({...e,[u]:h,[f]:g});return{...x,data:{x:x.x-t,y:x.y-i,enabled:{[u]:s,[f]:a}}}}}};function iu(n){const e=Mn(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ln(n),s=r?n.offsetWidth:t,a=r?n.offsetHeight:i,o=Rs(t)!==s||Rs(i)!==a;return o&&(t=s,i=a),{width:t,height:i,$:o}}function Xo(n){return xn(n)?n:n.contextElement}function er(n){const e=Xo(n);if(!Ln(e))return wn(1);const t=e.getBoundingClientRect(),{width:i,height:r,$:s}=iu(e);let a=(s?Rs(t.width):t.width)/i,o=(s?Rs(t.height):t.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const od=wn(0);function ru(n){const e=sn(n);return!Go()||!e.visualViewport?od:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ld(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==sn(n)?!1:e}function Pi(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),s=Xo(n);let a=wn(1);e&&(i?xn(i)&&(a=er(i)):a=er(n));const o=ld(s,t,i)?ru(s):wn(0);let l=(r.left+o.x)/a.x,c=(r.top+o.y)/a.y,d=r.width/a.x,f=r.height/a.y;if(s){const u=sn(s),h=i&&xn(i)?sn(i):i;let g=u,x=za(g);for(;x&&i&&h!==g;){const m=er(x),p=x.getBoundingClientRect(),b=Mn(x),T=p.left+(x.clientLeft+parseFloat(b.paddingLeft))*m.x,M=p.top+(x.clientTop+parseFloat(b.paddingTop))*m.y;l*=m.x,c*=m.y,d*=m.x,f*=m.y,l+=T,c+=M,g=sn(x),x=za(g)}}return Ds({width:d,height:f,x:l,y:c})}function qo(n,e){const t=Ks(n).scrollLeft;return e?e.left+t:Pi(Nn(n)).left+t}function su(n,e,t){t===void 0&&(t=!1);const i=n.getBoundingClientRect(),r=i.left+e.scrollLeft-(t?0:qo(n,i)),s=i.top+e.scrollTop;return{x:r,y:s}}function cd(n){let{elements:e,rect:t,offsetParent:i,strategy:r}=n;const s=r==="fixed",a=Nn(i),o=e?Ys(e.floating):!1;if(i===a||o&&s)return t;let l={scrollLeft:0,scrollTop:0},c=wn(1);const d=wn(0),f=Ln(i);if((f||!f&&!s)&&((hr(i)!=="body"||zr(a))&&(l=Ks(i)),Ln(i))){const h=Pi(i);c=er(i),d.x=h.x+i.clientLeft,d.y=h.y+i.clientTop}const u=a&&!f&&!s?su(a,l,!0):wn(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x+u.x,y:t.y*c.y-l.scrollTop*c.y+d.y+u.y}}function ud(n){return Array.from(n.getClientRects())}function fd(n){const e=Nn(n),t=Ks(n),i=n.ownerDocument.body,r=Ri(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Ri(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+qo(n);const o=-t.scrollTop;return Mn(i).direction==="rtl"&&(a+=Ri(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:a,y:o}}function dd(n,e){const t=sn(n),i=Nn(n),r=t.visualViewport;let s=i.clientWidth,a=i.clientHeight,o=0,l=0;if(r){s=r.width,a=r.height;const c=Go();(!c||c&&e==="fixed")&&(o=r.offsetLeft,l=r.offsetTop)}return{width:s,height:a,x:o,y:l}}function hd(n,e){const t=Pi(n,!0,e==="fixed"),i=t.top+n.clientTop,r=t.left+n.clientLeft,s=Ln(n)?er(n):wn(1),a=n.clientWidth*s.x,o=n.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:a,height:o,x:l,y:c}}function Ml(n,e,t){let i;if(e==="viewport")i=dd(n,t);else if(e==="document")i=fd(Nn(n));else if(xn(e))i=hd(e,t);else{const r=ru(n);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Ds(i)}function au(n,e){const t=hi(n);return t===e||!xn(t)||rr(t)?!1:Mn(t).position==="fixed"||au(t,e)}function pd(n,e){const t=e.get(n);if(t)return t;let i=Nr(n,[],!1).filter(o=>xn(o)&&hr(o)!=="body"),r=null;const s=Mn(n).position==="fixed";let a=s?hi(n):n;for(;xn(a)&&!rr(a);){const o=Mn(a),l=Vo(a);!l&&o.position==="fixed"&&(r=null),(s?!l&&!r:!l&&o.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||zr(a)&&!l&&au(n,a))?i=i.filter(d=>d!==a):r=o,a=hi(a)}return e.set(n,i),i}function md(n){let{element:e,boundary:t,rootBoundary:i,strategy:r}=n;const a=[...t==="clippingAncestors"?Ys(e)?[]:pd(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((c,d)=>{const f=Ml(e,d,r);return c.top=Ri(f.top,c.top),c.right=sr(f.right,c.right),c.bottom=sr(f.bottom,c.bottom),c.left=Ri(f.left,c.left),c},Ml(e,o,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function gd(n){const{width:e,height:t}=iu(n);return{width:e,height:t}}function _d(n,e,t){const i=Ln(e),r=Nn(e),s=t==="fixed",a=Pi(n,!0,s,e);let o={scrollLeft:0,scrollTop:0};const l=wn(0);function c(){l.x=qo(r)}if(i||!i&&!s)if((hr(e)!=="body"||zr(r))&&(o=Ks(e)),i){const h=Pi(e,!0,s,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else r&&c();s&&!i&&r&&c();const d=r&&!i&&!s?su(r,o):wn(0),f=a.left+o.scrollLeft-l.x-d.x,u=a.top+o.scrollTop-l.y-d.y;return{x:f,y:u,width:a.width,height:a.height}}function ea(n){return Mn(n).position==="static"}function Sl(n,e){if(!Ln(n)||Mn(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return Nn(n)===t&&(t=t.ownerDocument.body),t}function ou(n,e){const t=sn(n);if(Ys(n))return t;if(!Ln(n)){let r=hi(n);for(;r&&!rr(r);){if(xn(r)&&!ea(r))return r;r=hi(r)}return t}let i=Sl(n,e);for(;i&&Wf(i)&&ea(i);)i=Sl(i,e);return i&&rr(i)&&ea(i)&&!Vo(i)?t:i||Xf(n)||t}const vd=async function(n){const e=this.getOffsetParent||ou,t=this.getDimensions,i=await t(n.floating);return{reference:_d(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function xd(n){return Mn(n).direction==="rtl"}const Md={convertOffsetParentRelativeRectToViewportRelativeRect:cd,getDocumentElement:Nn,getClippingRect:md,getOffsetParent:ou,getElementRects:vd,getClientRects:ud,getDimensions:gd,getScale:er,isElement:xn,isRTL:xd};function lu(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function Sd(n,e){let t=null,i;const r=Nn(n);function s(){var o;clearTimeout(i),(o=t)==null||o.disconnect(),t=null}function a(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),s();const c=n.getBoundingClientRect(),{left:d,top:f,width:u,height:h}=c;if(o||e(),!u||!h)return;const g=qr(f),x=qr(r.clientWidth-(d+u)),m=qr(r.clientHeight-(f+h)),p=qr(d),T={rootMargin:-g+"px "+-x+"px "+-m+"px "+-p+"px",threshold:Ri(0,sr(1,l))||1};let M=!0;function w(E){const S=E[0].intersectionRatio;if(S!==l){if(!M)return a();S?a(!1,S):i=setTimeout(()=>{a(!1,1e-7)},1e3)}S===1&&!lu(c,n.getBoundingClientRect())&&a(),M=!1}try{t=new IntersectionObserver(w,{...T,root:r.ownerDocument})}catch{t=new IntersectionObserver(w,T)}t.observe(n)}return a(!0),s}function jv(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Xo(n),d=r||s?[...c?Nr(c):[],...Nr(e)]:[];d.forEach(p=>{r&&p.addEventListener("scroll",t,{passive:!0}),s&&p.addEventListener("resize",t)});const f=c&&o?Sd(c,t):null;let u=-1,h=null;a&&(h=new ResizeObserver(p=>{let[b]=p;b&&b.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var T;(T=h)==null||T.observe(e)})),t()}),c&&!l&&h.observe(c),h.observe(e));let g,x=l?Pi(n):null;l&&m();function m(){const p=Pi(n);x&&!lu(x,p)&&t(),x=p,g=requestAnimationFrame(m)}return t(),()=>{var p;d.forEach(b=>{r&&b.removeEventListener("scroll",t),s&&b.removeEventListener("resize",t)}),f==null||f(),(p=h)==null||p.disconnect(),h=null,l&&cancelAnimationFrame(g)}}const ex=sd,tx=nd,nx=ad,ix=id,rx=ed,sx=(n,e,t)=>{const i=new Map,r={platform:Md,...t},s={...r.platform,_c:i};return jf(n,e,{...r,platform:s})};var cu={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,X){var j=I.length;I.push(X);e:for(;0<j;){var re=j-1>>>1,ae=I[re];if(0<r(ae,X))I[re]=X,I[j]=ae,j=re;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var X=I[0],j=I.pop();if(j!==X){I[0]=j;e:for(var re=0,ae=I.length,qe=ae>>>1;re<qe;){var et=2*(re+1)-1,Ve=I[et],ee=et+1,ce=I[ee];if(0>r(Ve,j))ee<ae&&0>r(ce,Ve)?(I[re]=ce,I[ee]=j,re=ee):(I[re]=Ve,I[et]=j,re=et);else if(ee<ae&&0>r(ce,j))I[re]=ce,I[ee]=j,re=ee;else break e}}return X}function r(I,X){var j=I.sortIndex-X.sortIndex;return j!==0?j:I.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,u=3,h=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(I){for(var X=t(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=I)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(c)}}function M(I){if(x=!1,T(I),!g)if(t(l)!==null)g=!0,$(w);else{var X=t(c);X!==null&&W(M,X.startTime-I)}}function w(I,X){g=!1,x&&(x=!1,p(v),v=-1),h=!0;var j=u;try{for(T(X),f=t(l);f!==null&&(!(f.expirationTime>X)||I&&!D());){var re=f.callback;if(typeof re=="function"){f.callback=null,u=f.priorityLevel;var ae=re(f.expirationTime<=X);X=n.unstable_now(),typeof ae=="function"?f.callback=ae:f===t(l)&&i(l),T(X)}else i(l);f=t(l)}if(f!==null)var qe=!0;else{var et=t(c);et!==null&&W(M,et.startTime-X),qe=!1}return qe}finally{f=null,u=j,h=!1}}var E=!1,S=null,v=-1,A=5,C=-1;function D(){return!(n.unstable_now()-C<A)}function L(){if(S!==null){var I=n.unstable_now();C=I;var X=!0;try{X=S(!0,I)}finally{X?K():(E=!1,S=null)}}else E=!1}var K;if(typeof b=="function")K=function(){b(L)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,H=Z.port2;Z.port1.onmessage=L,K=function(){H.postMessage(null)}}else K=function(){m(L,0)};function $(I){S=I,E||(E=!0,K())}function W(I,X){v=m(function(){I(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||h||(g=!0,$(w))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return u},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(u){case 1:case 2:case 3:var X=3;break;default:X=u}var j=u;u=X;try{return I()}finally{u=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=u;u=I;try{return X()}finally{u=j}},n.unstable_scheduleCallback=function(I,X,j){var re=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?re+j:re):j=re,I){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=j+ae,I={id:d++,callback:X,priorityLevel:I,startTime:j,expirationTime:ae,sortIndex:-1},j>re?(I.sortIndex=j,e(c,I),t(l)===null&&I===t(c)&&(x?(p(v),v=-1):x=!0,W(M,j-re))):(I.sortIndex=ae,e(l,I),g||h||(g=!0,$(w))),I},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(I){var X=u;return function(){var j=u;u=X;try{return I.apply(this,arguments)}finally{u=j}}}})(uu);cu.exports=uu;var ax=cu.exports;/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var yd=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Ls=yd.join(","),fu=typeof Element>"u",ar=fu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Is=!fu&&Element.prototype.getRootNode?function(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}:function(n){return n==null?void 0:n.ownerDocument},Us=function n(e,t){var i;t===void 0&&(t=!0);var r=e==null||(i=e.getAttribute)===null||i===void 0?void 0:i.call(e,"inert"),s=r===""||r==="true",a=s||t&&e&&n(e.parentNode);return a},bd=function(e){var t,i=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return i===""||i==="true"},Ed=function(e,t,i){if(Us(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Ls));return t&&ar.call(e,Ls)&&r.unshift(e),r=r.filter(i),r},Td=function n(e,t,i){for(var r=[],s=Array.from(e);s.length;){var a=s.shift();if(!Us(a,!1))if(a.tagName==="SLOT"){var o=a.assignedElements(),l=o.length?o:a.children,c=n(l,!0,i);i.flatten?r.push.apply(r,c):r.push({scopeParent:a,candidates:c})}else{var d=ar.call(a,Ls);d&&i.filter(a)&&(t||!e.includes(a))&&r.push(a);var f=a.shadowRoot||typeof i.getShadowRoot=="function"&&i.getShadowRoot(a),u=!Us(f,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(a));if(f&&u){var h=n(f===!0?a.children:f.children,!0,i);i.flatten?r.push.apply(r,h):r.push({scopeParent:a,candidates:h})}else s.unshift.apply(s,a.children)}}return r},du=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},hu=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||bd(e))&&!du(e)?0:e.tabIndex},Ad=function(e,t){var i=hu(e);return i<0&&t&&!du(e)?0:i},wd=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},pu=function(e){return e.tagName==="INPUT"},Rd=function(e){return pu(e)&&e.type==="hidden"},Cd=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"});return t},Pd=function(e,t){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===t)return e[i]},Dd=function(e){if(!e.name)return!0;var t=e.form||Is(e),i=function(o){return t.querySelectorAll('input[type="radio"][name="'+o+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=i(window.CSS.escape(e.name));else try{r=i(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var s=Pd(r,e.form);return!s||s===e},Ld=function(e){return pu(e)&&e.type==="radio"},Id=function(e){return Ld(e)&&!Dd(e)},Ud=function(e){var t,i=e&&Is(e),r=(t=i)===null||t===void 0?void 0:t.host,s=!1;if(i&&i!==e){var a,o,l;for(s=!!((a=r)!==null&&a!==void 0&&(o=a.ownerDocument)!==null&&o!==void 0&&o.contains(r)||e!=null&&(l=e.ownerDocument)!==null&&l!==void 0&&l.contains(e));!s&&r;){var c,d,f;i=Is(r),r=(c=i)===null||c===void 0?void 0:c.host,s=!!((d=r)!==null&&d!==void 0&&(f=d.ownerDocument)!==null&&f!==void 0&&f.contains(r))}}return s},yl=function(e){var t=e.getBoundingClientRect(),i=t.width,r=t.height;return i===0&&r===0},Nd=function(e,t){var i=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=ar.call(e,"details>summary:first-of-type"),a=s?e.parentElement:e;if(ar.call(a,"details:not([open]) *"))return!0;if(!i||i==="full"||i==="legacy-full"){if(typeof r=="function"){for(var o=e;e;){var l=e.parentElement,c=Is(e);if(l&&!l.shadowRoot&&r(l)===!0)return yl(e);e.assignedSlot?e=e.assignedSlot:!l&&c!==e.ownerDocument?e=c.host:e=l}e=o}if(Ud(e))return!e.getClientRects().length;if(i!=="legacy-full")return!0}else if(i==="non-zero-area")return yl(e);return!1},Fd=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var i=0;i<t.children.length;i++){var r=t.children.item(i);if(r.tagName==="LEGEND")return ar.call(t,"fieldset[disabled] *")?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},Od=function(e,t){return!(t.disabled||Us(t)||Rd(t)||Nd(t,e)||Cd(t)||Fd(t))},Ga=function(e,t){return!(Id(t)||hu(t)<0||!Od(e,t))},Bd=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},zd=function n(e){var t=[],i=[];return e.forEach(function(r,s){var a=!!r.scopeParent,o=a?r.scopeParent:r,l=Ad(o,a),c=a?n(r.candidates):o;l===0?a?t.push.apply(t,c):t.push(o):i.push({documentOrder:s,tabIndex:l,item:r,isScope:a,content:c})}),i.sort(wd).reduce(function(r,s){return s.isScope?r.push.apply(r,s.content):r.push(s.content),r},[]).concat(t)},ox=function(e,t){t=t||{};var i;return t.getShadowRoot?i=Td([e],t.includeContainer,{filter:Ga.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Bd}):i=Ed(e,t.includeContainer,Ga.bind(null,t)),zd(i)},lx=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return ar.call(e,Ls)===!1?!1:Ga(t,e)};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bt(){return bt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},bt.apply(this,arguments)}var Ot;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ot||(Ot={}));const bl="popstate";function cx(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Fr("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Vr(r)}return Gd(e,t,null,n)}function xt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function or(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vd(){return Math.random().toString(36).substr(2,8)}function El(n,e){return{usr:n.state,key:n.key,idx:e}}function Fr(n,e,t,i){return t===void 0&&(t=null),bt({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ui(e):e,{state:t,key:e&&e.key||i||Vd()})}function Vr(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ui(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function Gd(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Ot.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(bt({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Ot.Pop;let m=d(),p=m==null?null:m-c;c=m,l&&l({action:o,location:x.location,delta:p})}function u(m,p){o=Ot.Push;let b=Fr(x.location,m,p);t&&t(b,m),c=d()+1;let T=El(b,c),M=x.createHref(b);try{a.pushState(T,"",M)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(M)}s&&l&&l({action:o,location:x.location,delta:1})}function h(m,p){o=Ot.Replace;let b=Fr(x.location,m,p);t&&t(b,m),c=d();let T=El(b,c),M=x.createHref(b);a.replaceState(T,"",M),s&&l&&l({action:o,location:x.location,delta:0})}function g(m){let p=r.location.origin!=="null"?r.location.origin:r.location.href,b=typeof m=="string"?m:Vr(m);return b=b.replace(/ $/,"%20"),xt(p,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,p)}let x={get action(){return o},get location(){return n(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(bl,f),l=m,()=>{r.removeEventListener(bl,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let p=g(m);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:u,replace:h,go(m){return a.go(m)}};return x}var ht;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(ht||(ht={}));const Hd=new Set(["lazy","caseSensitive","path","id","index","children"]);function kd(n){return n.index===!0}function Ns(n,e,t,i){return t===void 0&&(t=[]),i===void 0&&(i={}),n.map((r,s)=>{let a=[...t,String(s)],o=typeof r.id=="string"?r.id:a.join("-");if(xt(r.index!==!0||!r.children,"Cannot specify children on an index route"),xt(!i[o],'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),kd(r)){let l=bt({},r,e(r),{id:o});return i[o]=l,l}else{let l=bt({},r,e(r),{id:o,children:void 0});return i[o]=l,r.children&&(l.children=Ns(r.children,e,a,i)),l}})}function ji(n,e,t){return t===void 0&&(t="/"),Ss(n,e,t,!1)}function Ss(n,e,t,i){let r=typeof e=="string"?Ui(e):e,s=$s(r.pathname||"/",t);if(s==null)return null;let a=mu(n);Xd(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=nh(s);o=eh(a[l],c,i)}return o}function Wd(n,e){let{route:t,pathname:i,params:r}=n;return{id:t.id,pathname:i,params:r,data:e[t.id],handle:t.handle}}function mu(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(xt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ur([i,l.relativePath]),d=t.concat(l);s.children&&s.children.length>0&&(xt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),mu(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Qd(c,s.index),routesMeta:d})};return n.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of gu(s.path))r(s,a,l)}),e}function gu(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=gu(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function Xd(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:jd(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const qd=/^:[\w-]+$/,Yd=3,Kd=2,$d=1,Zd=10,Jd=-2,Tl=n=>n==="*";function Qd(n,e){let t=n.split("/"),i=t.length;return t.some(Tl)&&(i+=Jd),e&&(i+=Kd),t.filter(r=>!Tl(r)).reduce((r,s)=>r+(qd.test(s)?Yd:s===""?$d:Zd),i)}function jd(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function eh(n,e,t){t===void 0&&(t=!1);let{routesMeta:i}=n,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Al({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!f&&c&&t&&!i[i.length-1].route.index&&(f=Al({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Ur([s,f.pathname]),pathnameBase:oh(Ur([s,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(s=Ur([s,f.pathnameBase]))}return a}function Al(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=th(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:u,isOptional:h}=d;if(u==="*"){let x=o[f]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=o[f];return h&&!g?c[u]=void 0:c[u]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:n}}function th(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),or(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function nh(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return or(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function $s(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function ih(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Ui(n):n;return{pathname:t?t.startsWith("/")?t:rh(t,e):e,search:lh(i),hash:ch(r)}}function rh(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ta(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _u(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function sh(n,e){let t=_u(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function ah(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Ui(n):(r=bt({},n),xt(!r.pathname||!r.pathname.includes("?"),ta("?","pathname","search",r)),xt(!r.pathname||!r.pathname.includes("#"),ta("#","pathname","hash",r)),xt(!r.search||!r.search.includes("#"),ta("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let f=e.length-1;if(!i&&a.startsWith("..")){let u=a.split("/");for(;u[0]==="..";)u.shift(),f-=1;r.pathname=u.join("/")}o=f>=0?e[f]:"/"}let l=ih(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Ur=n=>n.join("/").replace(/\/\/+/g,"/"),oh=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),lh=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ch=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class Ha{constructor(e,t,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function Fs(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const vu=["post","put","patch","delete"],uh=new Set(vu),fh=["get",...vu],dh=new Set(fh),hh=new Set([301,302,303,307,308]),ph=new Set([307,308]),na={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mh={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Yo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gh=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),xu="remix-router-transitions";function ux(n){const e=n.window?n.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!t;xt(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(n.mapRouteProperties)r=n.mapRouteProperties;else if(n.detectErrorBoundary){let P=n.detectErrorBoundary;r=B=>({hasErrorBoundary:P(B)})}else r=gh;let s={},a=Ns(n.routes,r,void 0,s),o,l=n.basename||"/",c=n.dataStrategy||Mh,d=n.patchRoutesOnNavigation,f=bt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},n.future),u=null,h=new Set,g=null,x=null,m=null,p=n.hydrationData!=null,b=ji(a,n.history.location,l),T=!1,M=null;if(b==null&&!d){let P=Jt(404,{pathname:n.history.location.pathname}),{matches:B,route:q}=Ol(a);b=B,M={[q.id]:P}}b&&!n.hydrationData&&ie(b,a,n.history.location.pathname).active&&(b=null);let w;if(b)if(b.some(P=>P.route.lazy))w=!1;else if(!b.some(P=>P.route.loader))w=!0;else if(f.v7_partialHydration){let P=n.hydrationData?n.hydrationData.loaderData:null,B=n.hydrationData?n.hydrationData.errors:null;if(B){let q=b.findIndex(se=>B[se.route.id]!==void 0);w=b.slice(0,q+1).every(se=>!Wa(se.route,P,B))}else w=b.every(q=>!Wa(q.route,P,B))}else w=n.hydrationData!=null;else if(w=!1,b=[],f.v7_partialHydration){let P=ie(null,a,n.history.location.pathname);P.active&&P.matches&&(T=!0,b=P.matches)}let E,S={historyAction:n.history.action,location:n.history.location,matches:b,initialized:w,navigation:na,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||M,fetchers:new Map,blockers:new Map},v=Ot.Pop,A=!1,C,D=!1,L=new Map,K=null,Z=!1,H=!1,$=[],W=new Set,I=new Map,X=0,j=-1,re=new Map,ae=new Set,qe=new Map,et=new Map,Ve=new Set,ee=new Map,ce=new Map,oe;function ze(){if(u=n.history.listen(P=>{let{action:B,location:q,delta:se}=P;if(oe){oe(),oe=void 0;return}or(ce.size===0||se!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ve=Ne({currentLocation:S.location,nextLocation:q,historyAction:B});if(ve&&se!=null){let Ie=new Promise(Oe=>{oe=Oe});n.history.go(se*-1),Le(ve,{state:"blocked",location:q,proceed(){Le(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Ie.then(()=>n.history.go(se))},reset(){let Oe=new Map(S.blockers);Oe.set(ve,Sr),Qe({blockers:Oe})}});return}return Ke(B,q)}),t){Uh(e,L);let P=()=>Nh(e,L);e.addEventListener("pagehide",P),K=()=>e.removeEventListener("pagehide",P)}return S.initialized||Ke(Ot.Pop,S.location,{initialHydration:!0}),E}function ke(){u&&u(),K&&K(),h.clear(),C&&C.abort(),S.fetchers.forEach((P,B)=>ue(B)),S.blockers.forEach((P,B)=>pe(B))}function Fe(P){return h.add(P),()=>h.delete(P)}function Qe(P,B){B===void 0&&(B={}),S=bt({},S,P);let q=[],se=[];f.v7_fetcherPersist&&S.fetchers.forEach((ve,Ie)=>{ve.state==="idle"&&(Ve.has(Ie)?se.push(Ie):q.push(Ie))}),Ve.forEach(ve=>{!S.fetchers.has(ve)&&!I.has(ve)&&se.push(ve)}),[...h].forEach(ve=>ve(S,{deletedFetchers:se,viewTransitionOpts:B.viewTransitionOpts,flushSync:B.flushSync===!0})),f.v7_fetcherPersist?(q.forEach(ve=>S.fetchers.delete(ve)),se.forEach(ve=>ue(ve))):se.forEach(ve=>Ve.delete(ve))}function Ye(P,B,q){var se,ve;let{flushSync:Ie}=q===void 0?{}:q,Oe=S.actionData!=null&&S.navigation.formMethod!=null&&mn(S.navigation.formMethod)&&S.navigation.state==="loading"&&((se=P.state)==null?void 0:se._isRedirect)!==!0,Ae;B.actionData?Object.keys(B.actionData).length>0?Ae=B.actionData:Ae=null:Oe?Ae=S.actionData:Ae=null;let Ce=B.loaderData?Nl(S.loaderData,B.loaderData,B.matches||[],B.errors):S.loaderData,ye=S.blockers;ye.size>0&&(ye=new Map(ye),ye.forEach((je,Ut)=>ye.set(Ut,Sr)));let Te=A===!0||S.navigation.formMethod!=null&&mn(S.navigation.formMethod)&&((ve=P.state)==null?void 0:ve._isRedirect)!==!0;o&&(a=o,o=void 0),Z||v===Ot.Pop||(v===Ot.Push?n.history.push(P,P.state):v===Ot.Replace&&n.history.replace(P,P.state));let He;if(v===Ot.Pop){let je=L.get(S.location.pathname);je&&je.has(P.pathname)?He={currentLocation:S.location,nextLocation:P}:L.has(P.pathname)&&(He={currentLocation:P,nextLocation:S.location})}else if(D){let je=L.get(S.location.pathname);je?je.add(P.pathname):(je=new Set([P.pathname]),L.set(S.location.pathname,je)),He={currentLocation:S.location,nextLocation:P}}Qe(bt({},B,{actionData:Ae,loaderData:Ce,historyAction:v,location:P,initialized:!0,navigation:na,revalidation:"idle",restoreScrollPosition:xe(P,B.matches||S.matches),preventScrollReset:Te,blockers:ye}),{viewTransitionOpts:He,flushSync:Ie===!0}),v=Ot.Pop,A=!1,D=!1,Z=!1,H=!1,$=[]}async function ft(P,B){if(typeof P=="number"){n.history.go(P);return}let q=ka(S.location,S.matches,l,f.v7_prependBasename,P,f.v7_relativeSplatPath,B==null?void 0:B.fromRouteId,B==null?void 0:B.relative),{path:se,submission:ve,error:Ie}=wl(f.v7_normalizeFormMethod,!1,q,B),Oe=S.location,Ae=Fr(S.location,se,B&&B.state);Ae=bt({},Ae,n.history.encodeLocation(Ae));let Ce=B&&B.replace!=null?B.replace:void 0,ye=Ot.Push;Ce===!0?ye=Ot.Replace:Ce===!1||ve!=null&&mn(ve.formMethod)&&ve.formAction===S.location.pathname+S.location.search&&(ye=Ot.Replace);let Te=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,He=(B&&B.flushSync)===!0,je=Ne({currentLocation:Oe,nextLocation:Ae,historyAction:ye});if(je){Le(je,{state:"blocked",location:Ae,proceed(){Le(je,{state:"proceeding",proceed:void 0,reset:void 0,location:Ae}),ft(P,B)},reset(){let Ut=new Map(S.blockers);Ut.set(je,Sr),Qe({blockers:Ut})}});return}return await Ke(ye,Ae,{submission:ve,pendingError:Ie,preventScrollReset:Te,replace:B&&B.replace,enableViewTransition:B&&B.viewTransition,flushSync:He})}function ot(){if(_(),Qe({revalidation:"loading"}),S.navigation.state!=="submitting"){if(S.navigation.state==="idle"){Ke(S.historyAction,S.location,{startUninterruptedRevalidation:!0});return}Ke(v||S.historyAction,S.navigation.location,{overrideNavigation:S.navigation,enableViewTransition:D===!0})}}async function Ke(P,B,q){C&&C.abort(),C=null,v=P,Z=(q&&q.startUninterruptedRevalidation)===!0,ge(S.location,S.matches),A=(q&&q.preventScrollReset)===!0,D=(q&&q.enableViewTransition)===!0;let se=o||a,ve=q&&q.overrideNavigation,Ie=q!=null&&q.initialHydration&&S.matches&&S.matches.length>0&&!T?S.matches:ji(se,B,l),Oe=(q&&q.flushSync)===!0;if(Ie&&S.initialized&&!H&&Ah(S.location,B)&&!(q&&q.submission&&mn(q.submission.formMethod))){Ye(B,{matches:Ie},{flushSync:Oe});return}let Ae=ie(Ie,se,B.pathname);if(Ae.active&&Ae.matches&&(Ie=Ae.matches),!Ie){let{error:ut,notFoundMatches:rt,route:mt}=Ge(B.pathname);Ye(B,{matches:rt,loaderData:{},errors:{[mt.id]:ut}},{flushSync:Oe});return}C=new AbortController;let Ce=Bi(n.history,B,C.signal,q&&q.submission),ye;if(q&&q.pendingError)ye=[Si(Ie).route.id,{type:ht.error,error:q.pendingError}];else if(q&&q.submission&&mn(q.submission.formMethod)){let ut=await Et(Ce,B,q.submission,Ie,Ae.active,{replace:q.replace,flushSync:Oe});if(ut.shortCircuited)return;if(ut.pendingActionResult){let[rt,mt]=ut.pendingActionResult;if(rn(mt)&&Fs(mt.error)&&mt.error.status===404){C=null,Ye(B,{matches:ut.matches,loaderData:{},errors:{[rt]:mt.error}});return}}Ie=ut.matches||Ie,ye=ut.pendingActionResult,ve=ia(B,q.submission),Oe=!1,Ae.active=!1,Ce=Bi(n.history,Ce.url,Ce.signal)}let{shortCircuited:Te,matches:He,loaderData:je,errors:Ut}=await Pt(Ce,B,Ie,Ae.active,ve,q&&q.submission,q&&q.fetcherSubmission,q&&q.replace,q&&q.initialHydration===!0,Oe,ye);Te||(C=null,Ye(B,bt({matches:He||Ie},Fl(ye),{loaderData:je,errors:Ut})))}async function Et(P,B,q,se,ve,Ie){Ie===void 0&&(Ie={}),_();let Oe=Lh(B,q);if(Qe({navigation:Oe},{flushSync:Ie.flushSync===!0}),ve){let ye=await we(se,B.pathname,P.signal);if(ye.type==="aborted")return{shortCircuited:!0};if(ye.type==="error"){let Te=Si(ye.partialMatches).route.id;return{matches:ye.partialMatches,pendingActionResult:[Te,{type:ht.error,error:ye.error}]}}else if(ye.matches)se=ye.matches;else{let{notFoundMatches:Te,error:He,route:je}=Ge(B.pathname);return{matches:Te,pendingActionResult:[je.id,{type:ht.error,error:He}]}}}let Ae,Ce=Dr(se,B);if(!Ce.route.action&&!Ce.route.lazy)Ae={type:ht.error,error:Jt(405,{method:P.method,pathname:B.pathname,routeId:Ce.route.id})};else if(Ae=(await tt("action",S,P,[Ce],se,null))[Ce.route.id],P.signal.aborted)return{shortCircuited:!0};if(Ti(Ae)){let ye;return Ie&&Ie.replace!=null?ye=Ie.replace:ye=Ll(Ae.response.headers.get("Location"),new URL(P.url),l)===S.location.pathname+S.location.search,await At(P,Ae,!0,{submission:q,replace:ye}),{shortCircuited:!0}}if(fi(Ae))throw Jt(400,{type:"defer-action"});if(rn(Ae)){let ye=Si(se,Ce.route.id);return(Ie&&Ie.replace)!==!0&&(v=Ot.Push),{matches:se,pendingActionResult:[ye.route.id,Ae]}}return{matches:se,pendingActionResult:[Ce.route.id,Ae]}}async function Pt(P,B,q,se,ve,Ie,Oe,Ae,Ce,ye,Te){let He=ve||ia(B,Ie),je=Ie||Oe||zl(He),Ut=!Z&&(!f.v7_partialHydration||!Ce);if(se){if(Ut){let V=Dt(Te);Qe(bt({navigation:He},V!==void 0?{actionData:V}:{}),{flushSync:ye})}let N=await we(q,B.pathname,P.signal);if(N.type==="aborted")return{shortCircuited:!0};if(N.type==="error"){let V=Si(N.partialMatches).route.id;return{matches:N.partialMatches,loaderData:{},errors:{[V]:N.error}}}else if(N.matches)q=N.matches;else{let{error:V,notFoundMatches:me,route:Se}=Ge(B.pathname);return{matches:me,loaderData:{},errors:{[Se.id]:V}}}}let ut=o||a,[rt,mt]=Cl(n.history,S,q,je,B,f.v7_partialHydration&&Ce===!0,f.v7_skipActionErrorRevalidation,H,$,W,Ve,qe,ae,ut,l,Te);if(U(N=>!(q&&q.some(V=>V.route.id===N))||rt&&rt.some(V=>V.route.id===N)),j=++X,rt.length===0&&mt.length===0){let N=he();return Ye(B,bt({matches:q,loaderData:{},errors:Te&&rn(Te[1])?{[Te[0]]:Te[1].error}:null},Fl(Te),N?{fetchers:new Map(S.fetchers)}:{}),{flushSync:ye}),{shortCircuited:!0}}if(Ut){let N={};if(!se){N.navigation=He;let V=Dt(Te);V!==void 0&&(N.actionData=V)}mt.length>0&&(N.fetchers=Ft(mt)),Qe(N,{flushSync:ye})}mt.forEach(N=>{J(N.key),N.controller&&I.set(N.key,N.controller)});let Fn=()=>mt.forEach(N=>J(N.key));C&&C.signal.addEventListener("abort",Fn);let{loaderResults:Jn,fetcherResults:fn}=await R(S,q,rt,mt,P);if(P.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",Fn),mt.forEach(N=>I.delete(N.key));let an=Yr(Jn);if(an)return await At(P,an.result,!0,{replace:Ae}),{shortCircuited:!0};if(an=Yr(fn),an)return ae.add(an.key),await At(P,an.result,!0,{replace:Ae}),{shortCircuited:!0};let{loaderData:vr,errors:mi}=Ul(S,q,Jn,Te,mt,fn,ee);ee.forEach((N,V)=>{N.subscribe(me=>{(me||N.done)&&ee.delete(V)})}),f.v7_partialHydration&&Ce&&S.errors&&(mi=bt({},S.errors,mi));let y=he(),O=Pe(j),Y=y||O||mt.length>0;return bt({matches:q,loaderData:vr,errors:mi},Y?{fetchers:new Map(S.fetchers)}:{})}function Dt(P){if(P&&!rn(P[1]))return{[P[0]]:P[1].data};if(S.actionData)return Object.keys(S.actionData).length===0?null:S.actionData}function Ft(P){return P.forEach(B=>{let q=S.fetchers.get(B.key),se=yr(void 0,q?q.data:void 0);S.fetchers.set(B.key,se)}),new Map(S.fetchers)}function St(P,B,q,se){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");J(P);let ve=(se&&se.flushSync)===!0,Ie=o||a,Oe=ka(S.location,S.matches,l,f.v7_prependBasename,q,f.v7_relativeSplatPath,B,se==null?void 0:se.relative),Ae=ji(Ie,Oe,l),Ce=ie(Ae,Ie,Oe);if(Ce.active&&Ce.matches&&(Ae=Ce.matches),!Ae){k(P,B,Jt(404,{pathname:Oe}),{flushSync:ve});return}let{path:ye,submission:Te,error:He}=wl(f.v7_normalizeFormMethod,!0,Oe,se);if(He){k(P,B,He,{flushSync:ve});return}let je=Dr(Ae,ye),Ut=(se&&se.preventScrollReset)===!0;if(Te&&mn(Te.formMethod)){Tt(P,B,ye,je,Ae,Ce.active,ve,Ut,Te);return}qe.set(P,{routeId:B,path:ye}),F(P,B,ye,je,Ae,Ce.active,ve,Ut,Te)}async function Tt(P,B,q,se,ve,Ie,Oe,Ae,Ce){_(),qe.delete(P);function ye(le){if(!le.route.action&&!le.route.lazy){let be=Jt(405,{method:Ce.formMethod,pathname:q,routeId:B});return k(P,B,be,{flushSync:Oe}),!0}return!1}if(!Ie&&ye(se))return;let Te=S.fetchers.get(P);z(P,Ih(Ce,Te),{flushSync:Oe});let He=new AbortController,je=Bi(n.history,q,He.signal,Ce);if(Ie){let le=await we(ve,new URL(je.url).pathname,je.signal,P);if(le.type==="aborted")return;if(le.type==="error"){k(P,B,le.error,{flushSync:Oe});return}else if(le.matches){if(ve=le.matches,se=Dr(ve,q),ye(se))return}else{k(P,B,Jt(404,{pathname:q}),{flushSync:Oe});return}}I.set(P,He);let Ut=X,rt=(await tt("action",S,je,[se],ve,P))[se.route.id];if(je.signal.aborted){I.get(P)===He&&I.delete(P);return}if(f.v7_fetcherPersist&&Ve.has(P)){if(Ti(rt)||rn(rt)){z(P,ci(void 0));return}}else{if(Ti(rt))if(I.delete(P),j>Ut){z(P,ci(void 0));return}else return ae.add(P),z(P,yr(Ce)),At(je,rt,!1,{fetcherSubmission:Ce,preventScrollReset:Ae});if(rn(rt)){k(P,B,rt.error);return}}if(fi(rt))throw Jt(400,{type:"defer-action"});let mt=S.navigation.location||S.location,Fn=Bi(n.history,mt,He.signal),Jn=o||a,fn=S.navigation.state!=="idle"?ji(Jn,S.navigation.location,l):S.matches;xt(fn,"Didn't find any matches after fetcher action");let an=++X;re.set(P,an);let vr=yr(Ce,rt.data);S.fetchers.set(P,vr);let[mi,y]=Cl(n.history,S,fn,Ce,mt,!1,f.v7_skipActionErrorRevalidation,H,$,W,Ve,qe,ae,Jn,l,[se.route.id,rt]);y.filter(le=>le.key!==P).forEach(le=>{let be=le.key,De=S.fetchers.get(be),We=yr(void 0,De?De.data:void 0);S.fetchers.set(be,We),J(be),le.controller&&I.set(be,le.controller)}),Qe({fetchers:new Map(S.fetchers)});let O=()=>y.forEach(le=>J(le.key));He.signal.addEventListener("abort",O);let{loaderResults:Y,fetcherResults:N}=await R(S,fn,mi,y,Fn);if(He.signal.aborted)return;He.signal.removeEventListener("abort",O),re.delete(P),I.delete(P),y.forEach(le=>I.delete(le.key));let V=Yr(Y);if(V)return At(Fn,V.result,!1,{preventScrollReset:Ae});if(V=Yr(N),V)return ae.add(V.key),At(Fn,V.result,!1,{preventScrollReset:Ae});let{loaderData:me,errors:Se}=Ul(S,fn,Y,void 0,y,N,ee);if(S.fetchers.has(P)){let le=ci(rt.data);S.fetchers.set(P,le)}Pe(an),S.navigation.state==="loading"&&an>j?(xt(v,"Expected pending action"),C&&C.abort(),Ye(S.navigation.location,{matches:fn,loaderData:me,errors:Se,fetchers:new Map(S.fetchers)})):(Qe({errors:Se,loaderData:Nl(S.loaderData,me,fn,Se),fetchers:new Map(S.fetchers)}),H=!1)}async function F(P,B,q,se,ve,Ie,Oe,Ae,Ce){let ye=S.fetchers.get(P);z(P,yr(Ce,ye?ye.data:void 0),{flushSync:Oe});let Te=new AbortController,He=Bi(n.history,q,Te.signal);if(Ie){let rt=await we(ve,new URL(He.url).pathname,He.signal,P);if(rt.type==="aborted")return;if(rt.type==="error"){k(P,B,rt.error,{flushSync:Oe});return}else if(rt.matches)ve=rt.matches,se=Dr(ve,q);else{k(P,B,Jt(404,{pathname:q}),{flushSync:Oe});return}}I.set(P,Te);let je=X,ut=(await tt("loader",S,He,[se],ve,P))[se.route.id];if(fi(ut)&&(ut=await Ko(ut,He.signal,!0)||ut),I.get(P)===Te&&I.delete(P),!He.signal.aborted){if(Ve.has(P)){z(P,ci(void 0));return}if(Ti(ut))if(j>je){z(P,ci(void 0));return}else{ae.add(P),await At(He,ut,!1,{preventScrollReset:Ae});return}if(rn(ut)){k(P,B,ut.error);return}xt(!fi(ut),"Unhandled fetcher deferred data"),z(P,ci(ut.data))}}async function At(P,B,q,se){let{submission:ve,fetcherSubmission:Ie,preventScrollReset:Oe,replace:Ae}=se===void 0?{}:se;B.response.headers.has("X-Remix-Revalidate")&&(H=!0);let Ce=B.response.headers.get("Location");xt(Ce,"Expected a Location header on the redirect Response"),Ce=Ll(Ce,new URL(P.url),l);let ye=Fr(S.location,Ce,{_isRedirect:!0});if(t){let rt=!1;if(B.response.headers.has("X-Remix-Reload-Document"))rt=!0;else if(Yo.test(Ce)){const mt=n.history.createURL(Ce);rt=mt.origin!==e.location.origin||$s(mt.pathname,l)==null}if(rt){Ae?e.location.replace(Ce):e.location.assign(Ce);return}}C=null;let Te=Ae===!0||B.response.headers.has("X-Remix-Replace")?Ot.Replace:Ot.Push,{formMethod:He,formAction:je,formEncType:Ut}=S.navigation;!ve&&!Ie&&He&&je&&Ut&&(ve=zl(S.navigation));let ut=ve||Ie;if(ph.has(B.response.status)&&ut&&mn(ut.formMethod))await Ke(Te,ye,{submission:bt({},ut,{formAction:Ce}),preventScrollReset:Oe||A,enableViewTransition:q?D:void 0});else{let rt=ia(ye,ve);await Ke(Te,ye,{overrideNavigation:rt,fetcherSubmission:Ie,preventScrollReset:Oe||A,enableViewTransition:q?D:void 0})}}async function tt(P,B,q,se,ve,Ie){let Oe,Ae={};try{Oe=await Sh(c,P,B,q,se,ve,Ie,s,r)}catch(Ce){return se.forEach(ye=>{Ae[ye.route.id]={type:ht.error,error:Ce}}),Ae}for(let[Ce,ye]of Object.entries(Oe))if(wh(ye)){let Te=ye.result;Ae[Ce]={type:ht.redirect,response:Eh(Te,q,Ce,ve,l,f.v7_relativeSplatPath)}}else Ae[Ce]=await bh(ye);return Ae}async function R(P,B,q,se,ve){let Ie=P.matches,Oe=tt("loader",P,ve,q,B,null),Ae=Promise.all(se.map(async Te=>{if(Te.matches&&Te.match&&Te.controller){let je=(await tt("loader",P,Bi(n.history,Te.path,Te.controller.signal),[Te.match],Te.matches,Te.key))[Te.match.route.id];return{[Te.key]:je}}else return Promise.resolve({[Te.key]:{type:ht.error,error:Jt(404,{pathname:Te.path})}})})),Ce=await Oe,ye=(await Ae).reduce((Te,He)=>Object.assign(Te,He),{});return await Promise.all([Ph(B,Ce,ve.signal,Ie,P.loaderData),Dh(B,ye,se)]),{loaderResults:Ce,fetcherResults:ye}}function _(){H=!0,$.push(...U()),qe.forEach((P,B)=>{I.has(B)&&W.add(B),J(B)})}function z(P,B,q){q===void 0&&(q={}),S.fetchers.set(P,B),Qe({fetchers:new Map(S.fetchers)},{flushSync:(q&&q.flushSync)===!0})}function k(P,B,q,se){se===void 0&&(se={});let ve=Si(S.matches,B);ue(P),Qe({errors:{[ve.route.id]:q},fetchers:new Map(S.fetchers)},{flushSync:(se&&se.flushSync)===!0})}function Q(P){return et.set(P,(et.get(P)||0)+1),Ve.has(P)&&Ve.delete(P),S.fetchers.get(P)||mh}function ue(P){let B=S.fetchers.get(P);I.has(P)&&!(B&&B.state==="loading"&&re.has(P))&&J(P),qe.delete(P),re.delete(P),ae.delete(P),f.v7_fetcherPersist&&Ve.delete(P),W.delete(P),S.fetchers.delete(P)}function de(P){let B=(et.get(P)||0)-1;B<=0?(et.delete(P),Ve.add(P),f.v7_fetcherPersist||ue(P)):et.set(P,B),Qe({fetchers:new Map(S.fetchers)})}function J(P){let B=I.get(P);B&&(B.abort(),I.delete(P))}function ne(P){for(let B of P){let q=Q(B),se=ci(q.data);S.fetchers.set(B,se)}}function he(){let P=[],B=!1;for(let q of ae){let se=S.fetchers.get(q);xt(se,"Expected fetcher: "+q),se.state==="loading"&&(ae.delete(q),P.push(q),B=!0)}return ne(P),B}function Pe(P){let B=[];for(let[q,se]of re)if(se<P){let ve=S.fetchers.get(q);xt(ve,"Expected fetcher: "+q),ve.state==="loading"&&(J(q),re.delete(q),B.push(q))}return ne(B),B.length>0}function _e(P,B){let q=S.blockers.get(P)||Sr;return ce.get(P)!==B&&ce.set(P,B),q}function pe(P){S.blockers.delete(P),ce.delete(P)}function Le(P,B){let q=S.blockers.get(P)||Sr;xt(q.state==="unblocked"&&B.state==="blocked"||q.state==="blocked"&&B.state==="blocked"||q.state==="blocked"&&B.state==="proceeding"||q.state==="blocked"&&B.state==="unblocked"||q.state==="proceeding"&&B.state==="unblocked","Invalid blocker state transition: "+q.state+" -> "+B.state);let se=new Map(S.blockers);se.set(P,B),Qe({blockers:se})}function Ne(P){let{currentLocation:B,nextLocation:q,historyAction:se}=P;if(ce.size===0)return;ce.size>1&&or(!1,"A router only supports one blocker at a time");let ve=Array.from(ce.entries()),[Ie,Oe]=ve[ve.length-1],Ae=S.blockers.get(Ie);if(!(Ae&&Ae.state==="proceeding")&&Oe({currentLocation:B,nextLocation:q,historyAction:se}))return Ie}function Ge(P){let B=Jt(404,{pathname:P}),q=o||a,{matches:se,route:ve}=Ol(q);return U(),{notFoundMatches:se,route:ve,error:B}}function U(P){let B=[];return ee.forEach((q,se)=>{(!P||P(se))&&(q.cancel(),B.push(se),ee.delete(se))}),B}function fe(P,B,q){if(g=P,m=B,x=q||null,!p&&S.navigation===na){p=!0;let se=xe(S.location,S.matches);se!=null&&Qe({restoreScrollPosition:se})}return()=>{g=null,m=null,x=null}}function te(P,B){return x&&x(P,B.map(se=>Wd(se,S.loaderData)))||P.key}function ge(P,B){if(g&&m){let q=te(P,B);g[q]=m()}}function xe(P,B){if(g){let q=te(P,B),se=g[q];if(typeof se=="number")return se}return null}function ie(P,B,q){if(d)if(P){if(Object.keys(P[0].params).length>0)return{active:!0,matches:Ss(B,q,l,!0)}}else return{active:!0,matches:Ss(B,q,l,!0)||[]};return{active:!1,matches:null}}async function we(P,B,q,se){if(!d)return{type:"success",matches:P};let ve=P;for(;;){let Ie=o==null,Oe=o||a,Ae=s;try{await d({signal:q,path:B,matches:ve,fetcherKey:se,patch:(Te,He)=>{q.aborted||Dl(Te,He,Oe,Ae,r)}})}catch(Te){return{type:"error",error:Te,partialMatches:ve}}finally{Ie&&!q.aborted&&(a=[...a])}if(q.aborted)return{type:"aborted"};let Ce=ji(Oe,B,l);if(Ce)return{type:"success",matches:Ce};let ye=Ss(Oe,B,l,!0);if(!ye||ve.length===ye.length&&ve.every((Te,He)=>Te.route.id===ye[He].route.id))return{type:"success",matches:null};ve=ye}}function Re(P){s={},o=Ns(P,r,void 0,s)}function yt(P,B){let q=o==null;Dl(P,B,o||a,s,r),q&&(a=[...a],Qe({}))}return E={get basename(){return l},get future(){return f},get state(){return S},get routes(){return a},get window(){return e},initialize:ze,subscribe:Fe,enableScrollRestoration:fe,navigate:ft,fetch:St,revalidate:ot,createHref:P=>n.history.createHref(P),encodeLocation:P=>n.history.encodeLocation(P),getFetcher:Q,deleteFetcher:de,dispose:ke,getBlocker:_e,deleteBlocker:pe,patchRoutes:yt,_internalFetchControllers:I,_internalActiveDeferreds:ee,_internalSetRoutes:Re},E}function _h(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function ka(n,e,t,i,r,s,a,o){let l,c;if(a){l=[];for(let f of e)if(l.push(f),f.route.id===a){c=f;break}}else l=e,c=e[e.length-1];let d=ah(r||".",sh(l,s),$s(n.pathname,t)||n.pathname,o==="path");if(r==null&&(d.search=n.search,d.hash=n.hash),(r==null||r===""||r===".")&&c){let f=$o(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let u=new URLSearchParams(d.search),h=u.getAll("index");u.delete("index"),h.filter(x=>x).forEach(x=>u.append("index",x));let g=u.toString();d.search=g?"?"+g:""}}return i&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ur([t,d.pathname])),Vr(d)}function wl(n,e,t,i){if(!i||!_h(i))return{path:t};if(i.formMethod&&!Ch(i.formMethod))return{path:t,error:Jt(405,{method:i.formMethod})};let r=()=>({path:t,error:Jt(400,{type:"invalid-body"})}),s=i.formMethod||"get",a=n?s.toUpperCase():s.toLowerCase(),o=yu(t);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!mn(a))return r();let u=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((h,g)=>{let[x,m]=g;return""+h+x+"="+m+`
`},""):String(i.body);return{path:t,submission:{formMethod:a,formAction:o,formEncType:i.formEncType,formData:void 0,json:void 0,text:u}}}else if(i.formEncType==="application/json"){if(!mn(a))return r();try{let u=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:t,submission:{formMethod:a,formAction:o,formEncType:i.formEncType,formData:void 0,json:u,text:void 0}}}catch{return r()}}}xt(typeof FormData=="function","FormData is not available in this environment");let l,c;if(i.formData)l=Xa(i.formData),c=i.formData;else if(i.body instanceof FormData)l=Xa(i.body),c=i.body;else if(i.body instanceof URLSearchParams)l=i.body,c=Il(l);else if(i.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(i.body),c=Il(l)}catch{return r()}let d={formMethod:a,formAction:o,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(mn(d.formMethod))return{path:t,submission:d};let f=Ui(t);return e&&f.search&&$o(f.search)&&l.append("index",""),f.search="?"+l,{path:Vr(f),submission:d}}function Rl(n,e,t){t===void 0&&(t=!1);let i=n.findIndex(r=>r.route.id===e);return i>=0?n.slice(0,t?i+1:i):n}function Cl(n,e,t,i,r,s,a,o,l,c,d,f,u,h,g,x){let m=x?rn(x[1])?x[1].error:x[1].data:void 0,p=n.createURL(e.location),b=n.createURL(r),T=t;s&&e.errors?T=Rl(t,Object.keys(e.errors)[0],!0):x&&rn(x[1])&&(T=Rl(t,x[0]));let M=x?x[1].statusCode:void 0,w=a&&M&&M>=400,E=T.filter((v,A)=>{let{route:C}=v;if(C.lazy)return!0;if(C.loader==null)return!1;if(s)return Wa(C,e.loaderData,e.errors);if(vh(e.loaderData,e.matches[A],v)||l.some(K=>K===v.route.id))return!0;let D=e.matches[A],L=v;return Pl(v,bt({currentUrl:p,currentParams:D.params,nextUrl:b,nextParams:L.params},i,{actionResult:m,actionStatus:M,defaultShouldRevalidate:w?!1:o||p.pathname+p.search===b.pathname+b.search||p.search!==b.search||Mu(D,L)}))}),S=[];return f.forEach((v,A)=>{if(s||!t.some(Z=>Z.route.id===v.routeId)||d.has(A))return;let C=ji(h,v.path,g);if(!C){S.push({key:A,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let D=e.fetchers.get(A),L=Dr(C,v.path),K=!1;u.has(A)?K=!1:c.has(A)?(c.delete(A),K=!0):D&&D.state!=="idle"&&D.data===void 0?K=o:K=Pl(L,bt({currentUrl:p,currentParams:e.matches[e.matches.length-1].params,nextUrl:b,nextParams:t[t.length-1].params},i,{actionResult:m,actionStatus:M,defaultShouldRevalidate:w?!1:o})),K&&S.push({key:A,routeId:v.routeId,path:v.path,matches:C,match:L,controller:new AbortController})}),[E,S]}function Wa(n,e,t){if(n.lazy)return!0;if(!n.loader)return!1;let i=e!=null&&e[n.id]!==void 0,r=t!=null&&t[n.id]!==void 0;return!i&&r?!1:typeof n.loader=="function"&&n.loader.hydrate===!0?!0:!i&&!r}function vh(n,e,t){let i=!e||t.route.id!==e.route.id,r=n[t.route.id]===void 0;return i||r}function Mu(n,e){let t=n.route.path;return n.pathname!==e.pathname||t!=null&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function Pl(n,e){if(n.route.shouldRevalidate){let t=n.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}function Dl(n,e,t,i,r){var s;let a;if(n){let c=i[n];xt(c,"No route found to patch children into: routeId = "+n),c.children||(c.children=[]),a=c.children}else a=t;let o=e.filter(c=>!a.some(d=>Su(c,d))),l=Ns(o,r,[n||"_","patch",String(((s=a)==null?void 0:s.length)||"0")],i);a.push(...l)}function Su(n,e){return"id"in n&&"id"in e&&n.id===e.id?!0:n.index===e.index&&n.path===e.path&&n.caseSensitive===e.caseSensitive?(!n.children||n.children.length===0)&&(!e.children||e.children.length===0)?!0:n.children.every((t,i)=>{var r;return(r=e.children)==null?void 0:r.some(s=>Su(t,s))}):!1}async function xh(n,e,t){if(!n.lazy)return;let i=await n.lazy();if(!n.lazy)return;let r=t[n.id];xt(r,"No route found in manifest");let s={};for(let a in i){let l=r[a]!==void 0&&a!=="hasErrorBoundary";or(!l,'Route "'+r.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!Hd.has(a)&&(s[a]=i[a])}Object.assign(r,s),Object.assign(r,bt({},e(r),{lazy:void 0}))}async function Mh(n){let{matches:e}=n,t=e.filter(r=>r.shouldLoad);return(await Promise.all(t.map(r=>r.resolve()))).reduce((r,s,a)=>Object.assign(r,{[t[a].route.id]:s}),{})}async function Sh(n,e,t,i,r,s,a,o,l,c){let d=s.map(h=>h.route.lazy?xh(h.route,l,o):void 0),f=s.map((h,g)=>{let x=d[g],m=r.some(b=>b.route.id===h.route.id);return bt({},h,{shouldLoad:m,resolve:async b=>(b&&i.method==="GET"&&(h.route.lazy||h.route.loader)&&(m=!0),m?yh(e,i,h,x,b,c):Promise.resolve({type:ht.data,result:void 0}))})}),u=await n({matches:f,request:i,params:s[0].params,fetcherKey:a,context:c});try{await Promise.all(d)}catch{}return u}async function yh(n,e,t,i,r,s){let a,o,l=c=>{let d,f=new Promise((g,x)=>d=x);o=()=>d(),e.signal.addEventListener("abort",o);let u=g=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+n+'" [routeId: '+t.route.id+"]"))):c({request:e,params:t.params,context:s},...g!==void 0?[g]:[]),h=(async()=>{try{return{type:"data",result:await(r?r(x=>u(x)):u())}}catch(g){return{type:"error",result:g}}})();return Promise.race([h,f])};try{let c=t.route[n];if(i)if(c){let d,[f]=await Promise.all([l(c).catch(u=>{d=u}),i]);if(d!==void 0)throw d;a=f}else if(await i,c=t.route[n],c)a=await l(c);else if(n==="action"){let d=new URL(e.url),f=d.pathname+d.search;throw Jt(405,{method:e.method,pathname:f,routeId:t.route.id})}else return{type:ht.data,result:void 0};else if(c)a=await l(c);else{let d=new URL(e.url),f=d.pathname+d.search;throw Jt(404,{pathname:f})}xt(a.result!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:ht.error,result:c}}finally{o&&e.signal.removeEventListener("abort",o)}return a}async function bh(n){let{result:e,type:t}=n;if(bu(e)){let f;try{let u=e.headers.get("Content-Type");u&&/\bapplication\/json\b/.test(u)?e.body==null?f=null:f=await e.json():f=await e.text()}catch(u){return{type:ht.error,error:u}}return t===ht.error?{type:ht.error,error:new Ha(e.status,e.statusText,f),statusCode:e.status,headers:e.headers}:{type:ht.data,data:f,statusCode:e.status,headers:e.headers}}if(t===ht.error){if(Bl(e)){var i,r;if(e.data instanceof Error){var s,a;return{type:ht.error,error:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(a=e.init)!=null&&a.headers?new Headers(e.init.headers):void 0}}return{type:ht.error,error:new Ha(((i=e.init)==null?void 0:i.status)||500,void 0,e.data),statusCode:Fs(e)?e.status:void 0,headers:(r=e.init)!=null&&r.headers?new Headers(e.init.headers):void 0}}return{type:ht.error,error:e,statusCode:Fs(e)?e.status:void 0}}if(Rh(e)){var o,l;return{type:ht.deferred,deferredData:e,statusCode:(o=e.init)==null?void 0:o.status,headers:((l=e.init)==null?void 0:l.headers)&&new Headers(e.init.headers)}}if(Bl(e)){var c,d;return{type:ht.data,data:e.data,statusCode:(c=e.init)==null?void 0:c.status,headers:(d=e.init)!=null&&d.headers?new Headers(e.init.headers):void 0}}return{type:ht.data,data:e}}function Eh(n,e,t,i,r,s){let a=n.headers.get("Location");if(xt(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Yo.test(a)){let o=i.slice(0,i.findIndex(l=>l.route.id===t)+1);a=ka(new URL(e.url),o,r,!0,a,s),n.headers.set("Location",a)}return n}function Ll(n,e,t){if(Yo.test(n)){let i=n,r=i.startsWith("//")?new URL(e.protocol+i):new URL(i),s=$s(r.pathname,t)!=null;if(r.origin===e.origin&&s)return r.pathname+r.search+r.hash}return n}function Bi(n,e,t,i){let r=n.createURL(yu(e)).toString(),s={signal:t};if(i&&mn(i.formMethod)){let{formMethod:a,formEncType:o}=i;s.method=a.toUpperCase(),o==="application/json"?(s.headers=new Headers({"Content-Type":o}),s.body=JSON.stringify(i.json)):o==="text/plain"?s.body=i.text:o==="application/x-www-form-urlencoded"&&i.formData?s.body=Xa(i.formData):s.body=i.formData}return new Request(r,s)}function Xa(n){let e=new URLSearchParams;for(let[t,i]of n.entries())e.append(t,typeof i=="string"?i:i.name);return e}function Il(n){let e=new FormData;for(let[t,i]of n.entries())e.append(t,i);return e}function Th(n,e,t,i,r){let s={},a=null,o,l=!1,c={},d=t&&rn(t[1])?t[1].error:void 0;return n.forEach(f=>{if(!(f.route.id in e))return;let u=f.route.id,h=e[u];if(xt(!Ti(h),"Cannot handle redirect results in processLoaderData"),rn(h)){let g=h.error;if(d!==void 0&&(g=d,d=void 0),a=a||{},r)a[u]=g;else{let x=Si(n,u);a[x.route.id]==null&&(a[x.route.id]=g)}s[u]=void 0,l||(l=!0,o=Fs(h.error)?h.error.status:500),h.headers&&(c[u]=h.headers)}else fi(h)?(i.set(u,h.deferredData),s[u]=h.deferredData.data,h.statusCode!=null&&h.statusCode!==200&&!l&&(o=h.statusCode),h.headers&&(c[u]=h.headers)):(s[u]=h.data,h.statusCode&&h.statusCode!==200&&!l&&(o=h.statusCode),h.headers&&(c[u]=h.headers))}),d!==void 0&&t&&(a={[t[0]]:d},s[t[0]]=void 0),{loaderData:s,errors:a,statusCode:o||200,loaderHeaders:c}}function Ul(n,e,t,i,r,s,a){let{loaderData:o,errors:l}=Th(e,t,i,a,!1);return r.forEach(c=>{let{key:d,match:f,controller:u}=c,h=s[d];if(xt(h,"Did not find corresponding fetcher result"),!(u&&u.signal.aborted))if(rn(h)){let g=Si(n.matches,f==null?void 0:f.route.id);l&&l[g.route.id]||(l=bt({},l,{[g.route.id]:h.error})),n.fetchers.delete(d)}else if(Ti(h))xt(!1,"Unhandled fetcher revalidation redirect");else if(fi(h))xt(!1,"Unhandled fetcher deferred data");else{let g=ci(h.data);n.fetchers.set(d,g)}}),{loaderData:o,errors:l}}function Nl(n,e,t,i){let r=bt({},e);for(let s of t){let a=s.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(r[a]=e[a]):n[a]!==void 0&&s.route.loader&&(r[a]=n[a]),i&&i.hasOwnProperty(a))break}return r}function Fl(n){return n?rn(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function Si(n,e){return(e?n.slice(0,n.findIndex(i=>i.route.id===e)+1):[...n]).reverse().find(i=>i.route.hasErrorBoundary===!0)||n[0]}function Ol(n){let e=n.length===1?n[0]:n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Jt(n,e){let{pathname:t,routeId:i,method:r,type:s,message:a}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return n===400?(o="Bad Request",r&&t&&i?l="You made a "+r+' request to "'+t+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):n===403?(o="Forbidden",l='Route "'+i+'" does not match URL "'+t+'"'):n===404?(o="Not Found",l='No route matches URL "'+t+'"'):n===405&&(o="Method Not Allowed",r&&t&&i?l="You made a "+r.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(l='Invalid request method "'+r.toUpperCase()+'"')),new Ha(n||500,o,new Error(l),!0)}function Yr(n){let e=Object.entries(n);for(let t=e.length-1;t>=0;t--){let[i,r]=e[t];if(Ti(r))return{key:i,result:r}}}function yu(n){let e=typeof n=="string"?Ui(n):n;return Vr(bt({},e,{hash:""}))}function Ah(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function wh(n){return bu(n.result)&&hh.has(n.result.status)}function fi(n){return n.type===ht.deferred}function rn(n){return n.type===ht.error}function Ti(n){return(n&&n.type)===ht.redirect}function Bl(n){return typeof n=="object"&&n!=null&&"type"in n&&"data"in n&&"init"in n&&n.type==="DataWithResponseInit"}function Rh(n){let e=n;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function bu(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function Ch(n){return dh.has(n.toLowerCase())}function mn(n){return uh.has(n.toLowerCase())}async function Ph(n,e,t,i,r){let s=Object.entries(e);for(let a=0;a<s.length;a++){let[o,l]=s[a],c=n.find(u=>(u==null?void 0:u.route.id)===o);if(!c)continue;let d=i.find(u=>u.route.id===c.route.id),f=d!=null&&!Mu(d,c)&&(r&&r[c.route.id])!==void 0;fi(l)&&f&&await Ko(l,t,!1).then(u=>{u&&(e[o]=u)})}}async function Dh(n,e,t){for(let i=0;i<t.length;i++){let{key:r,routeId:s,controller:a}=t[i],o=e[r];n.find(c=>(c==null?void 0:c.route.id)===s)&&fi(o)&&(xt(a,"Expected an AbortController for revalidating fetcher deferred result"),await Ko(o,a.signal,!0).then(c=>{c&&(e[r]=c)}))}}async function Ko(n,e,t){if(t===void 0&&(t=!1),!await n.deferredData.resolveData(e)){if(t)try{return{type:ht.data,data:n.deferredData.unwrappedData}}catch(r){return{type:ht.error,error:r}}return{type:ht.data,data:n.deferredData.data}}}function $o(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function Dr(n,e){let t=typeof e=="string"?Ui(e).search:e.search;if(n[n.length-1].route.index&&$o(t||""))return n[n.length-1];let i=_u(n);return i[i.length-1]}function zl(n){let{formMethod:e,formAction:t,formEncType:i,text:r,formData:s,json:a}=n;if(!(!e||!t||!i)){if(r!=null)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:void 0,text:r};if(s!=null)return{formMethod:e,formAction:t,formEncType:i,formData:s,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:a,text:void 0}}}function ia(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Lh(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function yr(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ih(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0}}function ci(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function Uh(n,e){try{let t=n.sessionStorage.getItem(xu);if(t){let i=JSON.parse(t);for(let[r,s]of Object.entries(i||{}))s&&Array.isArray(s)&&e.set(r,new Set(s||[]))}}catch{}}function Nh(n,e){if(e.size>0){let t={};for(let[i,r]of e)t[i]=[...r];try{n.sessionStorage.setItem(xu,JSON.stringify(t))}catch(i){or(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="185",Fh=0,Vl=1,Oh=2,ys=1,Bh=2,Lr=3,pi=0,Qt=1,kn=2,Xn=0,tr=1,Gl=2,Hl=3,kl=4,zh=5,yi=100,Vh=101,Gh=102,Hh=103,kh=104,Wh=200,Xh=201,qh=202,Yh=203,qa=204,Ya=205,Kh=206,$h=207,Zh=208,Jh=209,Qh=210,jh=211,ep=212,tp=213,np=214,Ka=0,$a=1,Za=2,lr=3,Ja=4,Qa=5,ja=6,eo=7,Eu=0,ip=1,rp=2,Cn=0,Tu=1,Au=2,wu=3,Ru=4,Cu=5,Pu=6,Du=7,Lu=300,Di=301,cr=302,ra=303,sa=304,Zs=306,to=1e3,Wn=1001,no=1002,Ht=1003,sp=1004,Kr=1005,qt=1006,aa=1007,Ai=1008,un=1009,Iu=1010,Uu=1011,Or=1012,Jo=1013,In=1014,Tn=1015,Kn=1016,Qo=1017,jo=1018,Br=1020,Nu=35902,Fu=35899,Ou=1021,Bu=1022,vn=1023,$n=1026,wi=1027,zu=1028,el=1029,Li=1030,tl=1031,nl=1033,bs=33776,Es=33777,Ts=33778,As=33779,io=35840,ro=35841,so=35842,ao=35843,oo=36196,lo=37492,co=37496,uo=37488,fo=37489,Os=37490,ho=37491,po=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,Mo=37814,So=37815,yo=37816,bo=37817,Eo=37818,To=37819,Ao=37820,wo=37821,Ro=36492,Co=36494,Po=36495,Do=36283,Lo=36284,Bs=36285,Io=36286,ap=3200,Wl=0,op=1,ui="",cn="srgb",zs="srgb-linear",Vs="linear",dt="srgb",zi=7680,Xl=519,lp=512,cp=513,up=514,il=515,fp=516,dp=517,rl=518,hp=519,ql=35044,Yl="300 es",An=2e3,Gs=2001;function pp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mp(){const n=Hs("canvas");return n.style.display="block",n}const Kl={};function $l(...n){const e="THREE."+n.shift();console.log(e,...n)}function Vu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Be(...n){n=Vu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=Vu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function nr(...n){const e=n.join(" ");e in Kl||(Kl[e]=!0,Be(...n))}function gp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const _p={[Ka]:$a,[Za]:ja,[Ja]:eo,[lr]:Qa,[$a]:Ka,[ja]:Za,[eo]:Ja,[Qa]:lr};class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,Uo=180/Math.PI;function Gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function vp(n,e){return(n%e+e)%e}function la(n,e,t){return(1-t)*n+t*e}function br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ll=class ll{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ll.prototype.isVector2=!0;let at=ll;class mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=s[a+0],h=s[a+1],g=s[a+2],x=s[a+3];if(f!==x||l!==u||c!==h||d!==g){let m=l*u+c*h+d*g+f*x;m<0&&(u=-u,h=-h,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T,l=l*p+u*o,c=c*p+h*o,d=d*p+g*o,f=f*p+x*o}else{l=l*p+u*o,c=c*p+h*o,d=d*p+g*o,f=f*p+x*o;const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],u=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+d*f+l*h-c*u,e[t+1]=l*g+d*u+c*f-o*h,e[t+2]=c*g+d*h+o*u-l*f,e[t+3]=d*g-o*f-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),u=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*h*g,this._y=c*h*f-u*d*g,this._z=c*d*g+u*h*f,this._w=c*d*f-u*h*g;break;case"YXZ":this._x=u*d*f+c*h*g,this._y=c*h*f-u*d*g,this._z=c*d*g-u*h*f,this._w=c*d*f+u*h*g;break;case"ZXY":this._x=u*d*f-c*h*g,this._y=c*h*f+u*d*g,this._z=c*d*g+u*h*f,this._w=c*d*f-u*h*g;break;case"ZYX":this._x=u*d*f-c*h*g,this._y=c*h*f+u*d*g,this._z=c*d*g-u*h*f,this._w=c*d*f+u*h*g;break;case"YZX":this._x=u*d*f+c*h*g,this._y=c*h*f+u*d*g,this._z=c*d*g-u*h*f,this._w=c*d*f-u*h*g;break;case"XZY":this._x=u*d*f-c*h*g,this._y=c*h*f-u*d*g,this._z=c*d*g+u*h*f,this._w=c*d*f+u*h*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(d-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cl=class cl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cl.prototype.isVector3=!0;let G=cl;const ca=new G,Zl=new mr,ul=class ul{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],T=r[4],M=r[7],w=r[2],E=r[5],S=r[8];return s[0]=a*x+o*b+l*w,s[3]=a*m+o*T+l*E,s[6]=a*p+o*M+l*S,s[1]=c*x+d*b+f*w,s[4]=c*m+d*T+f*E,s[7]=c*p+d*M+f*S,s[2]=u*x+h*b+g*w,s[5]=u*m+h*T+g*E,s[8]=u*p+h*M+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*s,h=c*s-a*l,g=t*f+i*u+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=u*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ua.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ul.prototype.isMatrix3=!0;let Xe=ul;const ua=new Xe,Jl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xp(){const n={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?Vs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zs]:{primaries:e,whitePoint:i,transfer:Vs,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const nt=xp();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Mp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vi===void 0&&(Vi=Hs("canvas")),Vi.width=e.width,Vi.height=e.height;const r=Vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sp=0;class sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fa(r[a].image)):s.push(fa(r[a]))}else s=fa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let yp=0;const da=new G;class Kt extends Ni{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Wn,r=Wn,s=qt,a=Ai,o=vn,l=un,c=Kt.DEFAULT_ANISOTROPY,d=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Gr(),this.name="",this.source=new sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case to:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case to:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Lu;Kt.DEFAULT_ANISOTROPY=1;const fl=class fl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],h=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(h+1)/2,w=(p+1)/2,E=(d+u)/4,S=(f+x)/4,v=(g+m)/4;return T>M&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=E/i,s=S/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=v/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=S/s,r=v/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(u-d)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;let Rt=fl;class bp extends Ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends bp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gu extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xs=class Xs{constructor(e,t,i,r,s,a,o,l,c,d,f,u,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,d,f,u,h,g,x,m)}set(e,t,i,r,s,a,o,l,c,d,f,u,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,h=a*f,g=o*d,x=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,h=l*f,g=c*d,x=c*f;t[0]=u+x*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=h*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,h=l*f,g=c*d,x=c*f;t[0]=u-x*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*d,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,h=a*f,g=o*d,x=o*f;t[0]=l*d,t[4]=g*c-h,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,h=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-u*f,t[8]=g*f+h,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*f+g,t[10]=u-x*f}else if(e.order==="XZY"){const u=a*l,h=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+x,t[5]=a*d,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*d,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ap)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ii.crossVectors(i,tn),ii.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ii.crossVectors(i,tn)),ii.normalize(),$r.crossVectors(tn,ii),r[0]=ii.x,r[4]=$r.x,r[8]=tn.x,r[1]=ii.y,r[5]=$r.y,r[9]=tn.y,r[2]=ii.z,r[6]=$r.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],T=i[7],M=i[11],w=i[15],E=r[0],S=r[4],v=r[8],A=r[12],C=r[1],D=r[5],L=r[9],K=r[13],Z=r[2],H=r[6],$=r[10],W=r[14],I=r[3],X=r[7],j=r[11],re=r[15];return s[0]=a*E+o*C+l*Z+c*I,s[4]=a*S+o*D+l*H+c*X,s[8]=a*v+o*L+l*$+c*j,s[12]=a*A+o*K+l*W+c*re,s[1]=d*E+f*C+u*Z+h*I,s[5]=d*S+f*D+u*H+h*X,s[9]=d*v+f*L+u*$+h*j,s[13]=d*A+f*K+u*W+h*re,s[2]=g*E+x*C+m*Z+p*I,s[6]=g*S+x*D+m*H+p*X,s[10]=g*v+x*L+m*$+p*j,s[14]=g*A+x*K+m*W+p*re,s[3]=b*E+T*C+M*Z+w*I,s[7]=b*S+T*D+M*H+w*X,s[11]=b*v+T*L+M*$+w*j,s[15]=b*A+T*K+M*W+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],b=l*h-c*u,T=o*h-c*f,M=o*u-l*f,w=a*h-c*d,E=a*u-l*d,S=a*f-o*d;return t*(x*b-m*T+p*M)-i*(g*b-m*w+p*E)+r*(g*T-x*w+p*S)-s*(g*M-x*E+m*S)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=t*o-i*a,T=t*l-r*a,M=t*c-s*a,w=i*l-r*o,E=i*c-s*o,S=r*c-s*l,v=d*x-f*g,A=d*m-u*g,C=d*p-h*g,D=f*m-u*x,L=f*p-h*x,K=u*p-h*m,Z=b*K-T*L+M*D+w*C-E*A+S*v;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/Z;return e[0]=(o*K-l*L+c*D)*H,e[1]=(r*L-i*K-s*D)*H,e[2]=(x*S-m*E+p*w)*H,e[3]=(u*E-f*S-h*w)*H,e[4]=(l*C-a*K-c*A)*H,e[5]=(t*K-r*C+s*A)*H,e[6]=(m*M-g*S-p*T)*H,e[7]=(d*S-u*M+h*T)*H,e[8]=(a*L-o*C+c*v)*H,e[9]=(i*C-t*L-s*v)*H,e[10]=(g*E-x*M+p*b)*H,e[11]=(f*M-d*E-h*b)*H,e[12]=(o*A-a*D-l*v)*H,e[13]=(t*D-i*A+r*v)*H,e[14]=(x*T-g*w-m*b)*H,e[15]=(d*w-f*T+u*b)*H,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,f=o+o,u=s*c,h=s*d,g=s*f,x=a*d,m=a*f,p=o*f,b=l*c,T=l*d,M=l*f,w=i.x,E=i.y,S=i.z;return r[0]=(1-(x+p))*w,r[1]=(h+M)*w,r[2]=(g-T)*w,r[3]=0,r[4]=(h-M)*E,r[5]=(1-(u+p))*E,r[6]=(m+b)*E,r[7]=0,r[8]=(g+T)*S,r[9]=(m-b)*S,r[10]=(1-(u+x))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),l=Gi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),dn.copy(this);const c=1/a,d=1/o,f=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=d,dn.elements[5]*=d,dn.elements[6]*=d,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,t.setFromRotationMatrix(dn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,d=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===An)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Gs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===An)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Gs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xs.prototype.isMatrix4=!0;let Ct=Xs;const Gi=new G,dn=new Ct,Tp=new G(0,0,0),Ap=new G(1,1,1),ii=new G,$r=new G,tn=new G,jl=new Ct,ec=new mr;class Ii{constructor(e=0,t=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wp=0;const tc=new G,Hi=new mr,Bn=new Ct,Zr=new G,Er=new G,Rp=new G,Cp=new mr,nc=new G(1,0,0),ic=new G(0,1,0),rc=new G(0,0,1),sc={type:"added"},Pp={type:"removed"},ki={type:"childadded",child:null},ha={type:"childremoved",child:null};class $t extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new G,t=new Ii,i=new mr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Xe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Er,Zr,this.up):Bn.lookAt(Zr,Er,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),ki.child=e,this.dispatchEvent(ki),ki.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new G(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jr extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&u>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=vp(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ma(a,s,e+1/3),this.g=ma(a,s,e),this.b=ma(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=cn){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=ku[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return nt.workingToColorSpace(Xt.copy(this),e),Math.round(it(Xt.r*255,0,255))*65536+Math.round(it(Xt.g*255,0,255))*256+Math.round(it(Xt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=cn){nt.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Qr);const i=la(ri.h,Qr.h,t),r=la(ri.s,Qr.s,t),s=la(ri.l,Qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new st;st.NAMES=ku;class fx extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new G,zn=new G,ga=new G,Vn=new G,Wi=new G,Xi=new G,ac=new G,_a=new G,va=new G,xa=new G,Ma=new Rt,Sa=new Rt,ya=new Rt;class _n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),zn.subVectors(i,t),ga.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(zn),l=hn.dot(ga),c=zn.dot(zn),d=zn.dot(ga),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,h=(c*l-o*d)*u,g=(a*d-o*l)*u;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ma.setScalar(0),Sa.setScalar(0),ya.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),ya.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ma,s.x),a.addScaledVector(Sa,s.y),a.addScaledVector(ya,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),zn.subVectors(e,t),hn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),hn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Wi.subVectors(r,i),Xi.subVectors(s,i),_a.subVectors(e,i);const l=Wi.dot(_a),c=Xi.dot(_a);if(l<=0&&c<=0)return t.copy(i);va.subVectors(e,r);const d=Wi.dot(va),f=Xi.dot(va);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Wi,a);xa.subVectors(e,s);const h=Wi.dot(xa),g=Xi.dot(xa);if(g>=0&&h<=g)return t.copy(s);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Xi,o);const m=d*g-h*f;if(m<=0&&f-d>=0&&h-g>=0)return ac.subVectors(s,r),o=(f-d)/(f-d+(h-g)),t.copy(r).addScaledVector(ac,o);const p=1/(m+x+u);return a=x*p,o=u*p,t.copy(i).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),es.subVectors(this.max,Tr),qi.subVectors(e.a,Tr),Yi.subVectors(e.b,Tr),Ki.subVectors(e.c,Tr),si.subVectors(Yi,qi),ai.subVectors(Ki,Yi),gi.subVectors(qi,Ki);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-gi.z,gi.y,si.z,0,-si.x,ai.z,0,-ai.x,gi.z,0,-gi.x,-si.y,si.x,0,-ai.y,ai.x,0,-gi.y,gi.x,0];return!ba(t,qi,Yi,Ki,es)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,qi,Yi,Ki,es))?!1:(ts.crossVectors(si,ai),t=[ts.x,ts.y,ts.z],ba(t,qi,Yi,Ki,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new G,new G,new G,new G,new G,new G,new G,new G],pn=new G,jr=new Hr,qi=new G,Yi=new G,Ki=new G,si=new G,ai=new G,gi=new G,Tr=new G,es=new G,ts=new G,_i=new G;function ba(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_i.fromArray(n,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),d=i.dot(_i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Nt=new G,ns=new at;let Lp=0;class Dn extends Ni{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wu extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xu extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ip=new Hr,Ar=new G,Ea=new G;class kr{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ip.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Ea)),this.expandByPoint(Ar.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Up=0;const ln=new Ct,Ta=new $t,$i=new G,nn=new Hr,wr=new Hr,Gt=new G;class jt extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?Xu:Wu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(nn.min,wr.min),nn.expandByPoint(Gt),Gt.addVectors(nn.max,wr.max),nn.expandByPoint(Gt)):(nn.expandByPoint(wr.min),nn.expandByPoint(wr.max))}nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Gt.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),Gt.add($i)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Dn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new G,l[v]=new G;const c=new G,d=new G,f=new G,u=new at,h=new at,g=new at,x=new G,m=new G;function p(v,A,C){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,A),f.fromBufferAttribute(i,C),u.fromBufferAttribute(s,v),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,C),d.sub(c),f.sub(c),h.sub(u),g.sub(u);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(D),o[v].add(x),o[A].add(x),o[C].add(x),l[v].add(m),l[A].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,A=b.length;v<A;++v){const C=b[v],D=C.start,L=C.count;for(let K=D,Z=D+L;K<Z;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const T=new G,M=new G,w=new G,E=new G;function S(v){w.fromBufferAttribute(r,v),E.copy(w);const A=o[v];T.copy(A),T.sub(w.multiplyScalar(w.dot(A))).normalize(),M.crossVectors(E,A);const D=M.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,A=b.length;v<A;++v){const C=b[v],D=C.start,L=C.count;for(let K=D,Z=D+L;K<Z;K+=3)S(e.getX(K+0)),S(e.getX(K+1)),S(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,d=new G,f=new G;if(e)for(let u=0,h=e.count;u<h;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*d;for(let p=0;p<d;p++)u[g++]=c[h++]}return new Dn(u,d,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],h=e(u,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Np=0;class gr extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=tr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hn=new G,Aa=new G,is=new G,oi=new G,wa=new G,rs=new G,Ra=new G;class al{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Aa.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(is),o=oi.dot(this.direction),l=-oi.dot(is),c=oi.lengthSq(),d=Math.abs(1-a*a);let f,u,h,g;if(d>0)if(f=a*l-o,u=a*o-l,g=s*d,f>=0)if(u>=-g)if(u<=g){const x=1/d;f*=x,u*=x,h=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Aa).addScaledVector(is,u),h}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,r,s){wa.subVectors(t,e),rs.subVectors(i,e),Ra.crossVectors(wa,rs);let a=this.direction.dot(Ra),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(oi,rs));if(l<0)return null;const c=o*this.direction.dot(wa.cross(oi));if(c<0||l+c>a)return null;const d=-o*oi.dot(Ra);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qu extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const oc=new Ct,vi=new al,ss=new kr,lc=new G,as=new G,os=new G,ls=new G,Ca=new G,cs=new G,cc=new G,us=new G;class Zn extends $t{constructor(e=new jt,t=new qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Ca.fromBufferAttribute(f,e),a?cs.addScaledVector(Ca,d):cs.addScaledVector(Ca.sub(t),d))}t.add(cs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(ss.containsPoint(vi.origin)===!1&&(vi.intersectSphere(ss,lc)===null||vi.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(oc.copy(s).invert(),vi.copy(e.ray).applyMatrix4(oc),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,w=T;M<w;M+=3){const E=o.getX(M),S=o.getX(M+1),v=o.getX(M+2);r=fs(this,p,e,i,c,d,f,E,S,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const b=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);r=fs(this,a,e,i,c,d,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,w=T;M<w;M+=3){const E=M,S=M+1,v=M+2;r=fs(this,p,e,i,c,d,f,E,S,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const b=m,T=m+1,M=m+2;r=fs(this,a,e,i,c,d,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fp(n,e,t,i,r,s,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pi,o),l===null)return null;us.copy(o),us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:n}}function fs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,as),n.getVertexPosition(l,os),n.getVertexPosition(c,ls);const d=Fp(n,e,t,i,as,os,ls,cc);if(d){const f=new G;_n.getBarycoord(cc,as,os,ls,f),r&&(d.uv=_n.getInterpolatedAttribute(r,o,l,c,f,new at)),s&&(d.uv1=_n.getInterpolatedAttribute(s,o,l,c,f,new at)),a&&(d.normal=_n.getInterpolatedAttribute(a,o,l,c,f,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};_n.getNormal(as,os,ls,u.normal),d.face=u,d.barycoord=f}return d}class Op extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ht,d=Ht,f,u){super(null,a,o,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new G,Bp=new G,zp=new Xe;class Mi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Pa.subVectors(i,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Pa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zp.getNormalMatrix(e),r=this.coplanarPoint(Pa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new kr,Vp=new at(.5,.5),ds=new G;class Yu{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],b=s[12],T=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-a,h-d,p-g,w-b).normalize(),r[1].setComponents(c+a,h+d,p+g,w+b).normalize(),r[2].setComponents(c+o,h+f,p+x,w+T).normalize(),r[3].setComponents(c-o,h-f,p-x,w-T).normalize(),i)r[4].setComponents(l,u,m,M).normalize(),r[5].setComponents(c-l,h-u,p-m,w-M).normalize();else if(r[4].setComponents(c-l,h-u,p-m,w-M).normalize(),t===An)r[5].setComponents(c+l,h+u,p+m,w+M).normalize();else if(t===Gs)r[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=Vp.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ku extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ks=new G,Ws=new G,uc=new Ct,Rr=new al,hs=new kr,Da=new G,fc=new G;class Gp extends $t{constructor(e=new jt,t=new Ku){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ks.fromBufferAttribute(t,r-1),Ws.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ks.distanceTo(Ws);e.setAttribute("lineDistance",new Bt(i,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(r),hs.radius+=s,e.ray.intersectsSphere(hs)===!1)return;uc.copy(r).invert(),Rr.copy(e.ray).applyMatrix4(uc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=h,m=g-1;x<m;x+=c){const p=d.getX(x),b=d.getX(x+1),T=ps(this,e,Rr,l,p,b,x);T&&t.push(T)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(h),p=ps(this,e,Rr,l,x,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=h,m=g-1;x<m;x+=c){const p=ps(this,e,Rr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=ps(this,e,Rr,l,g-1,h,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ps(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ks.fromBufferAttribute(o,r),Ws.fromBufferAttribute(o,s),t.distanceSqToSegment(ks,Ws,Da,fc)>i)return;Da.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Da);if(!(c<e.near||c>e.far))return{distance:c,point:fc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const dc=new G,hc=new G;class Hp extends Gp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)dc.fromBufferAttribute(t,r),hc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+dc.distanceTo(hc);e.setAttribute("lineDistance",new Bt(i,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kp extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pc=new Ct,No=new al,ms=new kr,gs=new G;class dx extends $t{constructor(e=new jt,t=new kp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(r),ms.radius+=s,e.ray.intersectsSphere(ms)===!1)return;pc.copy(r).invert(),No.copy(e.ray).applyMatrix4(pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=u,x=h;g<x;g++){const m=c.getX(g);gs.fromBufferAttribute(f,m),mc(gs,m,l,r,e,t,this)}}else{const u=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=u,x=h;g<x;g++)gs.fromBufferAttribute(f,g),mc(gs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function mc(n,e,t,i,r,s,a){const o=No.distanceSqToPoint(n);if(o<t){const l=new G;No.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $u extends Kt{constructor(e=[],t=Di,i,r,s,a,o,l,c,d){super(e,t,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ur extends Kt{constructor(e,t,i=In,r,s,a,o=Ht,l=Ht,c,d=$n,f=1){if(d!==$n&&d!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wp extends ur{constructor(e,t=In,i=Di,r,s,a=Ht,o=Ht,l,c=$n){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zu extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wr extends jt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function g(x,m,p,b,T,M,w,E,S,v,A){const C=M/S,D=w/v,L=M/2,K=w/2,Z=E/2,H=S+1,$=v+1;let W=0,I=0;const X=new G;for(let j=0;j<$;j++){const re=j*D-K;for(let ae=0;ae<H;ae++){const qe=ae*C-L;X[x]=qe*b,X[m]=re*T,X[p]=Z,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=E>0?1:-1,d.push(X.x,X.y,X.z),f.push(ae/S),f.push(1-j/v),W+=1}}for(let j=0;j<v;j++)for(let re=0;re<S;re++){const ae=u+re+H*j,qe=u+re+H*(j+1),et=u+(re+1)+H*(j+1),Ve=u+(re+1)+H*j;l.push(ae,qe,Ve),l.push(qe,et,Ve),I+=6}o.addGroup(h,I,A),h+=I,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ol extends jt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const T=new G,M=new G,w=new G;for(let E=0;E<t.length;E+=3)h(t[E+0],T),h(t[E+1],M),h(t[E+2],w),l(T,M,w,b)}function l(b,T,M,w){const E=w+1,S=[];for(let v=0;v<=E;v++){S[v]=[];const A=b.clone().lerp(M,v/E),C=T.clone().lerp(M,v/E),D=E-v;for(let L=0;L<=D;L++)L===0&&v===E?S[v][L]=A:S[v][L]=A.clone().lerp(C,L/D)}for(let v=0;v<E;v++)for(let A=0;A<2*(E-v)-1;A++){const C=Math.floor(A/2);A%2===0?(u(S[v][C+1]),u(S[v+1][C]),u(S[v][C])):(u(S[v][C+1]),u(S[v+1][C+1]),u(S[v+1][C]))}}function c(b){const T=new G;for(let M=0;M<s.length;M+=3)T.x=s[M+0],T.y=s[M+1],T.z=s[M+2],T.normalize().multiplyScalar(b),s[M+0]=T.x,s[M+1]=T.y,s[M+2]=T.z}function d(){const b=new G;for(let T=0;T<s.length;T+=3){b.x=s[T+0],b.y=s[T+1],b.z=s[T+2];const M=m(b)/2/Math.PI+.5,w=p(b)/Math.PI+.5;a.push(M,1-w)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){const T=a[b+0],M=a[b+2],w=a[b+4],E=Math.max(T,M,w),S=Math.min(T,M,w);E>.9&&S<.1&&(T<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function u(b){s.push(b.x,b.y,b.z)}function h(b,T){const M=b*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function g(){const b=new G,T=new G,M=new G,w=new G,E=new at,S=new at,v=new at;for(let A=0,C=0;A<s.length;A+=9,C+=6){b.set(s[A+0],s[A+1],s[A+2]),T.set(s[A+3],s[A+4],s[A+5]),M.set(s[A+6],s[A+7],s[A+8]),E.set(a[C+0],a[C+1]),S.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),w.copy(b).add(T).add(M).divideScalar(3);const D=m(w);x(E,C+0,b,D),x(S,C+2,T,D),x(v,C+4,M,D)}}function x(b,T,M,w){w<0&&b.x===1&&(a[T]=b.x-1),M.x===0&&M.z===0&&(a[T]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.detail)}}class Ju extends ol{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ju(e.radius,e.detail)}}class Js extends jt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=t/l,h=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const b=p*u-a;for(let T=0;T<c;T++){const M=T*f-s;g.push(M,-b,0),x.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const T=b+c*p,M=b+c*(p+1),w=b+1+c*(p+1),E=b+1+c*p;h.push(T,M,E),h.push(M,w,E)}this.setIndex(h),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qu extends jt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],d=[],f=new G,u=new G,h=new G,g=new G,x=new G,m=new G,p=new G;for(let T=0;T<=i;++T){const M=T/i*s*Math.PI*2;b(M,s,a,e,h),b(M+.01,s,a,e,g),m.subVectors(g,h),p.addVectors(g,h),x.crossVectors(m,p),p.crossVectors(x,m),x.normalize(),p.normalize();for(let w=0;w<=r;++w){const E=w/r*Math.PI*2,S=-t*Math.cos(E),v=t*Math.sin(E);f.x=h.x+(S*p.x+v*x.x),f.y=h.y+(S*p.y+v*x.y),f.z=h.z+(S*p.z+v*x.z),l.push(f.x,f.y,f.z),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),d.push(T/i),d.push(w/r)}}for(let T=1;T<=i;T++)for(let M=1;M<=r;M++){const w=(r+1)*(T-1)+(M-1),E=(r+1)*T+(M-1),S=(r+1)*T+M,v=(r+1)*(T-1)+M;o.push(w,E,v),o.push(E,S,v)}this.setIndex(o),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(d,2));function b(T,M,w,E,S){const v=Math.cos(T),A=Math.sin(T),C=w/M*T,D=Math.cos(C);S.x=E*(2+D)*.5*v,S.y=E*(2+D)*A*.5,S.z=E*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(gc(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(gc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const r in i)e[r]=i[r]}return e}function gc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ju(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const qp={clone:fr,merge:Yt};var Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new st().setHex(r.value);break;case"v2":this.uniforms[i].value=new at().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $p extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zp extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jp extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _s=new G,vs=new mr,yn=new G;class ef extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_s,vs,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_s,vs,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_s,vs,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_s,vs,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new G,_c=new at,vc=new at;class gn extends ef{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,_c,vc),t.subVectors(vc,_c)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tf extends ef{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=-90,Ji=1;class Qp extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const s=new gn(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const a=new gn(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const o=new gn(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const l=new gn(Zi,Ji,e,t);l.layers=this.layers,this.add(l);const c=new gn(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jp extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dl=class dl{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};dl.prototype.isMatrix2=!0;let xc=dl;class hx extends Hp{constructor(e=10,t=10,i=4473924,r=8947848){i=new st(i),r=new st(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,h=0,g=-o;u<=t;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=u===s?i:r;x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3}const d=new jt;d.setAttribute("position",new Bt(l,3)),d.setAttribute("color",new Bt(c,3));const f=new Ku({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Mc(n,e,t,i){const r=em(i);switch(t){case Ou:return n*e;case zu:return n*e/r.components*r.byteLength;case el:return n*e/r.components*r.byteLength;case Li:return n*e*2/r.components*r.byteLength;case tl:return n*e*2/r.components*r.byteLength;case Bu:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case nl:return n*e*4/r.components*r.byteLength;case bs:case Es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ts:case As:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:case ao:return Math.max(n,16)*Math.max(e,8)/4;case io:case so:return Math.max(n,8)*Math.max(e,8)/2;case oo:case lo:case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:case Os:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Co:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Do:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bs:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function em(n){switch(n){case un:case Iu:return{byteLength:1,components:1};case Or:case Uu:case Kn:return{byteLength:2,components:1};case Qo:case jo:return{byteLength:2,components:4};case In:case Jo:case Tn:return{byteLength:4,components:1};case Nu:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function tm(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<f.length;h++){const g=f[u],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:rm,alphamap_pars_fragment:sm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:um,batching_vertex:fm,begin_vertex:dm,beginnormal_vertex:hm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:xm,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:ym,color_pars_vertex:bm,color_vertex:Em,common:Tm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:wm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Dm,colorspace_fragment:Lm,colorspace_pars_fragment:Im,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Km,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Hm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:$m,lights_toon_pars_fragment:Zm,lights_phong_fragment:Jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:jm,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:rg,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:fg,map_particle_pars_fragment:dg,metalnessmap_fragment:hg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:xg,normal_fragment_begin:Mg,normal_fragment_maps:Sg,normal_pars_fragment:yg,normal_pars_vertex:bg,normal_vertex:Eg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Pg,packing:Dg,premultiplied_alpha_fragment:Lg,project_vertex:Ig,dithering_fragment:Ug,dithering_pars_fragment:Ng,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:Vg,shadowmask_pars_fragment:Gg,skinbase_vertex:Hg,skinning_pars_vertex:kg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Kg,tonemapping_pars_fragment:$g,transmission_fragment:Zg,transmission_pars_fragment:Jg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:e_,worldpos_vertex:t_,background_vert:n_,background_frag:i_,backgroundCube_vert:r_,backgroundCube_frag:s_,cube_vert:a_,cube_frag:o_,depth_vert:l_,depth_frag:c_,distance_vert:u_,distance_frag:f_,equirect_vert:d_,equirect_frag:h_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:v_,meshlambert_frag:x_,meshmatcap_vert:M_,meshmatcap_frag:S_,meshnormal_vert:y_,meshnormal_frag:b_,meshphong_vert:E_,meshphong_frag:T_,meshphysical_vert:A_,meshphysical_frag:w_,meshtoon_vert:R_,meshtoon_frag:C_,points_vert:P_,points_frag:D_,shadow_vert:L_,shadow_frag:I_,sprite_vert:U_,sprite_frag:N_},Me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},En={basic:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Yt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Yt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Yt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Yt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Yt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Yt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Yt([Me.common,Me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Yt([Me.lights,Me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};En.physical={uniforms:Yt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const xs={r:0,b:0,g:0},F_=new Ct,rf=new Xe;rf.set(-1,0,0,0,1,0,0,0,1);function O_(n,e,t,i,r,s){const a=new st(0);let o=r===!0?0:1,l,c,d=null,f=0,u=null;function h(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const M=b.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(b){let T=!1;const M=h(b);M===null?m(a,o):M&&M.isColor&&(m(M,1),T=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,T){const M=h(T);M&&(M.isCubeTexture||M.mapping===Zs)?(c===void 0&&(c=new Zn(new Wr(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:fr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rf),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,(d!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Zn(new Js(2,2),new Un({name:"BackgroundMaterial",uniforms:fr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,T){b.getRGB(xs,ju(n)),t.buffers.color.setClear(xs.r,xs.g,xs.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:x,dispose:p}}function B_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(D,L,K,Z,H){let $=!1;const W=f(D,Z,K,L);s!==W&&(s=W,c(s.object)),$=h(D,Z,K,H),$&&g(D,Z,K,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(D,L,K,Z),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function f(D,L,K,Z){const H=Z.wireframe===!0;let $=i[L.id];$===void 0&&($={},i[L.id]=$);const W=D.isInstancedMesh===!0?D.id:0;let I=$[W];I===void 0&&(I={},$[W]=I);let X=I[K.id];X===void 0&&(X={},I[K.id]=X);let j=X[H];return j===void 0&&(j=u(l()),X[H]=j),j}function u(D){const L=[],K=[],Z=[];for(let H=0;H<t;H++)L[H]=0,K[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:K,attributeDivisors:Z,object:D,attributes:{},index:null}}function h(D,L,K,Z){const H=s.attributes,$=L.attributes;let W=0;const I=K.getAttributes();for(const X in I)if(I[X].location>=0){const re=H[X];let ae=$[X];if(ae===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==Z}function g(D,L,K,Z){const H={},$=L.attributes;let W=0;const I=K.getAttributes();for(const X in I)if(I[X].location>=0){let re=$[X];re===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),H[X]=ae,W++}s.attributes=H,s.attributesNum=W,s.index=Z}function x(){const D=s.newAttributes;for(let L=0,K=D.length;L<K;L++)D[L]=0}function m(D){p(D,0)}function p(D,L){const K=s.newAttributes,Z=s.enabledAttributes,H=s.attributeDivisors;K[D]=1,Z[D]===0&&(n.enableVertexAttribArray(D),Z[D]=1),H[D]!==L&&(n.vertexAttribDivisor(D,L),H[D]=L)}function b(){const D=s.newAttributes,L=s.enabledAttributes;for(let K=0,Z=L.length;K<Z;K++)L[K]!==D[K]&&(n.disableVertexAttribArray(K),L[K]=0)}function T(D,L,K,Z,H,$,W){W===!0?n.vertexAttribIPointer(D,L,K,H,$):n.vertexAttribPointer(D,L,K,Z,H,$)}function M(D,L,K,Z){x();const H=Z.attributes,$=K.getAttributes(),W=L.defaultAttributeValues;for(const I in $){const X=$[I];if(X.location>=0){let j=H[I];if(j===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const re=j.normalized,ae=j.itemSize,qe=e.get(j);if(qe===void 0)continue;const et=qe.buffer,Ve=qe.type,ee=qe.bytesPerElement,ce=Ve===n.INT||Ve===n.UNSIGNED_INT||j.gpuType===Jo;if(j.isInterleavedBufferAttribute){const oe=j.data,ze=oe.stride,ke=j.offset;if(oe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<X.locationSize;Fe++)p(X.location+Fe,oe.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Fe=0;Fe<X.locationSize;Fe++)m(X.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Fe=0;Fe<X.locationSize;Fe++)T(X.location+Fe,ae/X.locationSize,Ve,re,ze*ee,(ke+ae/X.locationSize*Fe)*ee,ce)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)p(X.location+oe,j.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe);n.bindBuffer(n.ARRAY_BUFFER,et);for(let oe=0;oe<X.locationSize;oe++)T(X.location+oe,ae/X.locationSize,Ve,re,ae*ee,ae/X.locationSize*oe*ee,ce)}}else if(W!==void 0){const re=W[I];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(X.location,re);break;case 3:n.vertexAttrib3fv(X.location,re);break;case 4:n.vertexAttrib4fv(X.location,re);break;default:n.vertexAttrib1fv(X.location,re)}}}}b()}function w(){A();for(const D in i){const L=i[D];for(const K in L){const Z=L[K];for(const H in Z){const $=Z[H];for(const W in $)d($[W].object),delete $[W];delete Z[H]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const K in L){const Z=L[K];for(const H in Z){const $=Z[H];for(const W in $)d($[W].object),delete $[W];delete Z[H]}}delete i[D.id]}function S(D){for(const L in i){const K=i[L];for(const Z in K){const H=K[Z];if(H[D.id]===void 0)continue;const $=H[D.id];for(const W in $)d($[W].object),delete $[W];delete H[D.id]}}}function v(D){for(const L in i){const K=i[L],Z=D.isInstancedMesh===!0?D.id:0,H=K[Z];if(H!==void 0){for(const $ in H){const W=H[$];for(const I in W)d(W[I].object),delete W[I];delete H[$]}delete K[Z],Object.keys(K).length===0&&delete i[L]}}}function A(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function z_(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function V_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(S){return!(S!==vn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const v=S===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==un&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Tn&&!v)}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Be("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:E}}function G_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Mi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||i!==0||r;return r=u,i=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const b=s?0:i,T=b*4;let M=p.clippingState||null;l.value=M,M=d(g,u,T,h);for(let w=0;w!==T;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,h,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=h+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=h;T!==x;++T,M+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const di=4,Sc=[.125,.215,.35,.446,.526,.582],bi=20,H_=256,Cr=new tf,yc=new st;let La=null,Ia=0,Ua=0,Na=!1;const k_=new G;class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=k_}=s;La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ia,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Kn,format:vn,colorSpace:zs,depthBuffer:!1},r=Ec(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W_(s)),this._blurMaterial=q_(s,e,t),this._ggxMaterial=X_(s,e,t)}return r}_compileMaterial(e){const t=new Zn(new jt,e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,i,r,s){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(yc),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new Wr,new qu({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(yc),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const w=this._cubeSize;Qi(r,M*w,T>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(x,l),f.render(e,l)}f.toneMapping=h,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Di||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,h=f*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-di?i-g+di:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,Qi(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(o,Cr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Qi(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(o,Cr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*bi-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):bi;m>bi&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let b=0;for(let S=0;S<bi;++S){const v=S/x,A=Math.exp(-v*v/2);p.push(A),S===0?b+=A:S<m&&(b+=2*A)}for(let S=0;S<p.length;S++)p[S]=p[S]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-i;const M=this._sizeLods[r],w=3*M*(r>T-di?r-T+di:0),E=4*(this._cubeSize-M);Qi(t,w,E,3*M,2*M),l.setRenderTarget(t),l.render(f,Cr)}}function W_(n){const e=[],t=[],i=[];let r=n;const s=n-di+1+Sc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-di?l=Sc[a-n+di-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*h),T=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let E=0;E<h;E++){const S=E%3*2/3-1,v=E>2?0:-1,A=[S,v,0,S+2/3,v,0,S+2/3,v+1,0,S,v,0,S+2/3,v+1,0,S,v+1,0];b.set(A,x*g*E),T.set(u,m*g*E);const C=[E,E,E,E,E,E];M.set(C,p*g*E)}const w=new jt;w.setAttribute("position",new Dn(b,x)),w.setAttribute("uv",new Dn(T,m)),w.setAttribute("faceIndex",new Dn(M,p)),i.push(new Zn(w,null)),r>di&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ec(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function X_(n,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function q_(n,e,t){const i=new Float32Array(bi),r=new G(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Tc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ac(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Qs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class sf extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $u(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wr(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Xn});s.uniforms.tEquirect.value=t;const a=new Zn(r,s),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=qt),new Qp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Y_(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?a(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===ra||h===sa)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new sf(g.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const h=u.mapping,g=h===ra||h===sa,x=h===Di||h===cr;if(g||x){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new bc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return g&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new bc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,h){return h===ra?u.mapping=Di:h===sa&&(u.mapping=cr),u}function l(u){let h=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&h++;return h===g}function c(u){const h=u.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function K_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nr("WebGLRenderer: "+i+" extension not supported."),r}}}function $_(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function c(f){const u=[],h=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(h!==null){const b=h.array;x=h.version;for(let T=0,M=b.length;T<M;T+=3){const w=b[T+0],E=b[T+1],S=b[T+2];u.push(w,E,E,S,S,w)}}else{const b=g.array;x=g.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const w=T+0,E=T+1,S=T+2;u.push(w,E,E,S,S,w)}}const m=new(g.count>=65535?Xu:Wu)(u,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function d(f){const u=s.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Z_(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,s,f*a),t.update(u,i,1)}function c(f,u,h){h!==0&&(n.drawElementsInstanced(i,u,s,f*a,h),t.update(u,i,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,h);let x=0;for(let m=0;m<h;m++)x+=u[m];t.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function J_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Q_(n,e,t){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let A=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let M=o.attributes.position.count*T,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*w*4*f),S=new Gu(E,M,w,f);S.type=Tn,S.needsUpdate=!0;const v=T*4;for(let C=0;C<f;C++){const D=m[C],L=p[C],K=b[C],Z=M*w*4*C;for(let H=0;H<D.count;H++){const $=H*v;h===!0&&(r.fromBufferAttribute(D,H),E[Z+$+0]=r.x,E[Z+$+1]=r.y,E[Z+$+2]=r.z,E[Z+$+3]=0),g===!0&&(r.fromBufferAttribute(L,H),E[Z+$+4]=r.x,E[Z+$+5]=r.y,E[Z+$+6]=r.z,E[Z+$+7]=0),x===!0&&(r.fromBufferAttribute(K,H),E[Z+$+8]=r.x,E[Z+$+9]=r.y,E[Z+$+10]=r.z,E[Z+$+11]=K.itemSize===4?r.w:1)}}u={count:f,texture:S,size:new at(M,w)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function j_(n,e,t,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const e0={[Tu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[wu]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[Pu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Cu]:"CUSTOM_TONE_MAPPING"};function t0(n,e,t,i,r,s){const a=new Pn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ur(e,t):void 0}),o=new Pn(e,t,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new jt;l.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const c=new $p({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zn(l,c),f=new tf(-1,1,1,-1,0,1);let u=null,h=null,g=!1,x,m=null,p=[],b=!1;this.setSize=function(T,M){a.setSize(T,M),o.setSize(T,M);for(let w=0;w<p.length;w++){const E=p[w];E.setSize&&E.setSize(T,M)}},this.setEffects=function(T){p=T,b=p.length>0&&p[0].isRenderPass===!0;const M=a.width,w=a.height;for(let E=0;E<p.length;E++){const S=p[E];S.setSize&&S.setSize(M,w)}},this.begin=function(T,M){if(g||T.toneMapping===Cn&&p.length===0)return!1;if(m=M,M!==null){const w=M.width,E=M.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return b===!1&&T.setRenderTarget(a),x=T.toneMapping,T.toneMapping=Cn,!0},this.hasRenderPass=function(){return b},this.end=function(T,M){T.toneMapping=x,g=!0;let w=a,E=o;for(let S=0;S<p.length;S++){const v=p[S];if(v.enabled!==!1&&(v.render(T,E,w,M),v.needsSwap!==!1)){const A=w;w=E,E=A}}if(u!==T.outputColorSpace||h!==T.toneMapping){u=T.outputColorSpace,h=T.toneMapping,c.defines={},nt.getTransfer(u)===dt&&(c.defines.SRGB_TRANSFER="");const S=e0[h];S&&(c.defines[S]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,T.setRenderTarget(m),T.render(d,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const af=new Kt,Fo=new ur(1,1),of=new Gu,lf=new Ep,cf=new $u,wc=[],Rc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Dc=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wc[r];if(s===void 0&&(s=new Float32Array(r),wc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function js(n,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function a0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;Dc.set(i),n.uniformMatrix2fv(this.addr,!1,Dc),Vt(t,i)}}function o0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;Pc.set(i),n.uniformMatrix3fv(this.addr,!1,Pc),Vt(t,i)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;Cc.set(i),n.uniformMatrix4fv(this.addr,!1,Cc),Vt(t,i)}}function c0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function h0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function _0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fo.compareFunction=t.isReversedDepthBuffer()?rl:il,s=Fo):s=af,t.setTexture2D(e||s,r)}function v0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lf,r)}function x0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cf,r)}function M0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||of,r)}function S0(n){switch(n){case 5126:return n0;case 35664:return i0;case 35665:return r0;case 35666:return s0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return h0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return M0}}function y0(n,e){n.uniform1fv(this.addr,e)}function b0(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function E0(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function T0(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function A0(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function w0(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R0(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C0(n,e){n.uniform1iv(this.addr,e)}function P0(n,e){n.uniform2iv(this.addr,e)}function D0(n,e){n.uniform3iv(this.addr,e)}function L0(n,e){n.uniform4iv(this.addr,e)}function I0(n,e){n.uniform1uiv(this.addr,e)}function U0(n,e){n.uniform2uiv(this.addr,e)}function N0(n,e){n.uniform3uiv(this.addr,e)}function F0(n,e){n.uniform4uiv(this.addr,e)}function O0(n,e,t){const i=this.cache,r=e.length,s=js(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fo:a=af;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function B0(n,e,t){const i=this.cache,r=e.length,s=js(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lf,s[a])}function z0(n,e,t){const i=this.cache,r=e.length,s=js(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cf,s[a])}function V0(n,e,t){const i=this.cache,r=e.length,s=js(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||of,s[a])}function G0(n){switch(n){case 5126:return y0;case 35664:return b0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return w0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return V0}}class H0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}}class k0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Lc(n,e){n.seq.push(e),n.map[e.id]=e}function X0(n,e,t){const i=n.name,r=i.length;for(Fa.lastIndex=0;;){const s=Fa.exec(i),a=Fa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lc(t,c===void 0?new H0(o,n,e):new k0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new W0(o),Lc(t,f)),t=f}}}class ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);X0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ic(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q0=37297;let Y0=0;function K0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Uc=new Xe;function $0(n){nt._getMatrix(Uc,nt.workingColorSpace,n);const e=`mat3( ${Uc.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Vs:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+K0(n.getShaderSource(e),o)}else return s}function Z0(n,e){const t=$0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const J0={[Tu]:"Linear",[Au]:"Reinhard",[wu]:"Cineon",[Ru]:"ACESFilmic",[Pu]:"AgX",[Du]:"Neutral",[Cu]:"Custom"};function Q0(n,e){const t=J0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new G;function j0(){nt.getLuminanceCoefficients(Ms);const n=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function tv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ir(n){return n!==""}function Fc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(n){return n.replace(iv,sv)}const rv=new Map;function sv(n,e){let t=Ze[e];if(t===void 0){const i=rv.get(e);if(i!==void 0)t=Ze[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oo(t)}const av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(n){return n.replace(av,ov)}function ov(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lv={[ys]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function cv(n){return lv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uv={[Di]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE_UV"};function fv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const dv={[cr]:"ENVMAP_MODE_REFRACTION"};function hv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pv={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[ip]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function mv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pv[n.combine]||"ENVMAP_BLENDING_NONE"}function gv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _v(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cv(t),c=fv(t),d=hv(t),f=mv(t),u=gv(t),h=ev(t),g=tv(s),x=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),j0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Oo(a),a=Fc(a,t),a=Oc(a,t),o=Oo(o),o=Fc(o,t),o=Oc(o,t),a=Bc(a),o=Bc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+a,M=b+p+o,w=Ic(r,r.VERTEX_SHADER,T),E=Ic(r,r.FRAGMENT_SHADER,M);r.attachShader(x,w),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function S(D){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(x)||"",K=r.getShaderInfoLog(w)||"",Z=r.getShaderInfoLog(E)||"",H=L.trim(),$=K.trim(),W=Z.trim();let I=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,w,E);else{const j=Nc(r,w,"vertex"),re=Nc(r,E,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+j+`
`+re)}else H!==""?Be("WebGLProgram: Program Info Log:",H):($===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:I,programLog:H,vertexShader:{log:$,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(w),r.deleteShader(E),v=new ws(r,x),A=nv(r,x)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let A;this.getAttributes=function(){return A===void 0&&S(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(x,q0)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}let vv=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Mv(e),t.set(e,i)),i}}class Mv{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}}function Sv(n){return n===Li||n===Os||n===Bs}function yv(n,e,t,i,r,s){const a=new Hu,o=new xv,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,A,C,D,L,K){const Z=D.fog,H=L.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,I=e.get(v.envMap||$,W),X=I&&I.mapping===Zs?I.image.height:null,j=h[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Be("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=re!==void 0?re.length:0;let qe=0;H.morphAttributes.position!==void 0&&(qe=1),H.morphAttributes.normal!==void 0&&(qe=2),H.morphAttributes.color!==void 0&&(qe=3);let et,Ve,ee,ce;if(j){const Re=En[j];et=Re.vertexShader,Ve=Re.fragmentShader}else{et=v.vertexShader,Ve=v.fragmentShader;const Re=o.getVertexShaderStage(v),yt=o.getFragmentShaderStage(v);o.update(v,Re,yt),ee=Re.id,ce=yt.id}const oe=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,Qe=!!v.map,Ye=!!v.matcap,ft=!!I,ot=!!v.aoMap,Ke=!!v.lightMap,Et=!!v.bumpMap&&v.wireframe===!1,Pt=!!v.normalMap,Dt=!!v.displacementMap,Ft=!!v.emissiveMap,St=!!v.metalnessMap,Tt=!!v.roughnessMap,F=v.anisotropy>0,At=v.clearcoat>0,tt=v.dispersion>0,R=v.iridescence>0,_=v.sheen>0,z=v.transmission>0,k=F&&!!v.anisotropyMap,Q=At&&!!v.clearcoatMap,ue=At&&!!v.clearcoatNormalMap,de=At&&!!v.clearcoatRoughnessMap,J=R&&!!v.iridescenceMap,ne=R&&!!v.iridescenceThicknessMap,he=_&&!!v.sheenColorMap,Pe=_&&!!v.sheenRoughnessMap,_e=!!v.specularMap,pe=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ne=z&&!!v.transmissionMap,Ge=z&&!!v.thicknessMap,U=!!v.gradientMap,fe=!!v.alphaMap,te=v.alphaTest>0,ge=!!v.alphaHash,xe=!!v.extensions;let ie=Cn;v.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ie=n.toneMapping);const we={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:et,fragmentShader:Ve,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Fe,batchingColor:Fe&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Qe,matcap:Ye,envMap:ft,envMapMode:ft&&I.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:Ke,bumpMap:Et,normalMap:Pt,displacementMap:Dt,emissiveMap:Ft,normalMapObjectSpace:Pt&&v.normalMapType===op,normalMapTangentSpace:Pt&&v.normalMapType===Wl,packedNormalMap:Pt&&v.normalMapType===Wl&&Sv(v.normalMap.format),metalnessMap:St,roughnessMap:Tt,anisotropy:F,anisotropyMap:k,clearcoat:At,clearcoatMap:Q,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,dispersion:tt,iridescence:R,iridescenceMap:J,iridescenceThicknessMap:ne,sheen:_,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:_e,specularColorMap:pe,specularIntensityMap:Le,transmission:z,transmissionMap:Ne,thicknessMap:Ge,gradientMap:U,opaque:v.transparent===!1&&v.blending===tr&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:ge,combine:v.combine,mapUv:Qe&&g(v.map.channel),aoMapUv:ot&&g(v.aoMap.channel),lightMapUv:Ke&&g(v.lightMap.channel),bumpMapUv:Et&&g(v.bumpMap.channel),normalMapUv:Pt&&g(v.normalMap.channel),displacementMapUv:Dt&&g(v.displacementMap.channel),emissiveMapUv:Ft&&g(v.emissiveMap.channel),metalnessMapUv:St&&g(v.metalnessMap.channel),roughnessMapUv:Tt&&g(v.roughnessMap.channel),anisotropyMapUv:k&&g(v.anisotropyMap.channel),clearcoatMapUv:Q&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(v.sheenRoughnessMap.channel),specularMapUv:_e&&g(v.specularMap.channel),specularColorMapUv:pe&&g(v.specularColorMap.channel),specularIntensityMapUv:Le&&g(v.specularIntensityMap.channel),transmissionMapUv:Ne&&g(v.transmissionMap.channel),thicknessMapUv:Ge&&g(v.thicknessMap.channel),alphaMapUv:fe&&g(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||F),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Qe||fe),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&Pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ze,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:qe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:Qe&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:Ft&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kn,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)A.push(C),A.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(A,v),b(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function b(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const A=h[v.type];let C;if(A){const D=En[A];C=qp.clone(D.uniforms)}else C=v.uniforms;return C}function M(v,A){let C=d.get(A);return C!==void 0?++C.usedTimes:(C=new _v(n,A,v,r),c.push(C),d.set(A,C)),C}function w(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function S(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:S}}function bv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,g,x,m,p){let b=n[e];return b===void 0?(b={id:u.id,object:u,geometry:h,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},n[e]=b):(b.id=u.id,b.object=u,b.geometry=h,b.material=g,b.materialVariant=a(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=m,b.group=p),e++,b}function l(u,h,g,x,m,p){const b=o(u,h,g,x,m,p);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):t.push(b)}function c(u,h,g,x,m,p){const b=o(u,h,g,x,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function d(u,h,g){t.length>1&&t.sort(u||Ev),i.length>1&&i.sort(h||Vc),r.length>1&&r.sort(h||Vc),g&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,h=n.length;u<h;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function Tv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gc,n.set(i,[a])):r>=s.length?(a=new Gc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new st};break;case"SpotLight":t={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Rv=0;function Cv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pv(n){const e=new Av,t=wv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new Ct,a=new Ct;function o(c){let d=0,f=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,b=0,T=0,M=0,w=0,E=0,S=0;c.sort(Cv);for(let A=0,C=c.length;A<C;A++){const D=c[A],L=D.color,K=D.intensity,Z=D.distance;let H=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Li?H=D.shadow.map.texture:H=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=L.r*K,f+=L.g*K,u+=L.b*K;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],K);S++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,I=t.get(D);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,i.directionalShadow[h]=I,i.directionalShadowMap[h]=H,i.directionalShadowMatrix[h]=D.shadow.matrix,b++}i.directional[h]=$,h++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(L).multiplyScalar(K),$.distance=Z,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[x]=$;const W=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,W.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[x]=W.matrix,D.castShadow){const I=t.get(D);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=H,M++}x++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(L).multiplyScalar(K),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const W=D.shadow,I=t.get(D);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,I.shadowCameraNear=W.camera.near,I.shadowCameraFar=W.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=D.shadow.matrix,T++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(K),$.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==b||v.numPointShadows!==T||v.numSpotShadows!==M||v.numSpotMaps!==w||v.numLightProbes!==S)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=S,v.directionalLength=h,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=b,v.numPointShadows=T,v.numSpotShadows=M,v.numSpotMaps=w,v.numLightProbes=S,i.version=Rv++)}function l(c,d){let f=0,u=0,h=0,g=0,x=0;const m=d.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Hc(n){const e=new Pv(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Dv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hc(n),e.set(r,[o])):s>=a.length?(o=new Hc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Uv=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Nv=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],kc=new Ct,Pr=new G,Oa=new G;function Fv(n,e,t){let i=new Yu;const r=new at,s=new at,a=new Rt,o=new Zp,l=new Jp,c={},d=t.maxTextureSize,f={[pi]:Qt,[Qt]:pi,[kn]:kn},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Lv,fragmentShader:Iv}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let p=this.type;this.render=function(E,S,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Bh&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ys);const A=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Xn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const K=p!==this.type;K&&S.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(H=>H.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,H=E.length;Z<H;Z++){const $=E[Z],W=$.shadow;if(W===void 0){Be("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const I=W.getFrameExtents();r.multiply(I),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/I.x),r.x=s.x*I.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/I.y),r.y=s.y*I.y,W.mapSize.y=s.y));const X=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||K===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Lr){if($.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Pn(r.x,r.y,{format:Li,type:Kn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new ur(r.x,r.y,Tn),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=$n,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht}else $.isPointLight?(W.map=new sf(r.x),W.map.depthTexture=new Wp(r.x,In)):(W.map=new Pn(r.x,r.y),W.map.depthTexture=new ur(r.x,r.y,In)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=$n,this.type===ys?(W.map.depthTexture.compareFunction=X?rl:il,W.map.depthTexture.minFilter=qt,W.map.depthTexture.magFilter=qt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht);W.camera.updateProjectionMatrix()}const j=W.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<j;re++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,re),n.clear();else{re===0&&(n.setRenderTarget(W.map),n.clear());const ae=W.getViewport(re);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),L.viewport(a)}if($.isPointLight){const ae=W.camera,qe=W.matrix,et=$.distance||ae.far;et!==ae.far&&(ae.far=et,ae.updateProjectionMatrix()),Pr.setFromMatrixPosition($.matrixWorld),ae.position.copy(Pr),Oa.copy(ae.position),Oa.add(Uv[re]),ae.up.copy(Nv[re]),ae.lookAt(Oa),ae.updateMatrixWorld(),qe.makeTranslation(-Pr.x,-Pr.y,-Pr.z),kc.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),W._frustum.setFromProjectionMatrix(kc,ae.coordinateSystem,ae.reversedDepth)}else W.updateMatrices($);i=W.getFrustum(),M(S,v,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Lr&&b(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,C,D)};function b(E,S){const v=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Pn(r.x,r.y,{format:Li,type:Kn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,v,u,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,v,h,x,null)}function T(E,S,v,A){let C=null;const D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const L=C.uuid,K=S.uuid;let Z=c[L];Z===void 0&&(Z={},c[L]=Z);let H=Z[K];H===void 0&&(H=C.clone(),Z[K]=H,S.addEventListener("dispose",w)),C=H}if(C.visible=S.visible,C.wireframe=S.wireframe,A===Lr?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:f[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=n.properties.get(C);L.light=v}return C}function M(E,S,v,A,C){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Lr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const K=e.update(E),Z=E.material;if(Array.isArray(Z)){const H=K.groups;for(let $=0,W=H.length;$<W;$++){const I=H[$],X=Z[I.materialIndex];if(X&&X.visible){const j=T(E,X,A,C);E.onBeforeShadow(n,E,S,v,K,j,I),n.renderBufferDirect(v,null,K,j,E,I),E.onAfterShadow(n,E,S,v,K,j,I)}}}else if(Z.visible){const H=T(E,Z,A,C);E.onBeforeShadow(n,E,S,v,K,H,null),n.renderBufferDirect(v,null,K,H,E,null),E.onAfterShadow(n,E,S,v,K,H,null)}}const L=E.children;for(let K=0,Z=L.length;K<Z;K++)M(L[K],S,v,A,C)}function w(E){E.target.removeEventListener("dispose",w);for(const v in c){const A=c[v],C=E.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function Ov(n,e){function t(){let U=!1;const fe=new Rt;let te=null;const ge=new Rt(0,0,0,0);return{setMask:function(xe){te!==xe&&!U&&(n.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ie,we,Re,yt){yt===!0&&(xe*=Re,ie*=Re,we*=Re),fe.set(xe,ie,we,Re),ge.equals(fe)===!1&&(n.clearColor(xe,ie,we,Re),ge.copy(fe))},reset:function(){U=!1,te=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,te=null,ge=null,xe=null;return{setReversed:function(ie){if(fe!==ie){const we=e.get("EXT_clip_control");ie?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const Re=xe;xe=null,this.setClear(Re)}},getReversed:function(){return fe},setTest:function(ie){ie?oe(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(ie){te!==ie&&!U&&(n.depthMask(ie),te=ie)},setFunc:function(ie){if(fe&&(ie=_p[ie]),ge!==ie){switch(ie){case Ka:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=ie}},setLocked:function(ie){U=ie},setClear:function(ie){xe!==ie&&(xe=ie,fe&&(ie=1-ie),n.clearDepth(ie))},reset:function(){U=!1,te=null,ge=null,xe=null,fe=!1}}}function r(){let U=!1,fe=null,te=null,ge=null,xe=null,ie=null,we=null,Re=null,yt=null;return{setTest:function(P){U||(P?oe(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(P){fe!==P&&!U&&(n.stencilMask(P),fe=P)},setFunc:function(P,B,q){(te!==P||ge!==B||xe!==q)&&(n.stencilFunc(P,B,q),te=P,ge=B,xe=q)},setOp:function(P,B,q){(ie!==P||we!==B||Re!==q)&&(n.stencilOp(P,B,q),ie=P,we=B,Re=q)},setLocked:function(P){U=P},setClear:function(P){yt!==P&&(n.clearStencil(P),yt=P)},reset:function(){U=!1,fe=null,te=null,ge=null,xe=null,ie=null,we=null,Re=null,yt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u={},h=new WeakMap,g=[],x=null,m=!1,p=null,b=null,T=null,M=null,w=null,E=null,S=null,v=new st(0,0,0),A=0,C=!1,D=null,L=null,K=null,Z=null,H=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,I=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=I>=1):X.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=I>=2);let j=null,re={};const ae=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),et=new Rt().fromArray(ae),Ve=new Rt().fromArray(qe);function ee(U,fe,te,ge){const xe=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<te;we++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(fe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ie}const ce={};ce[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(lr),Et(!1),Pt(Vl),oe(n.CULL_FACE),ot(Xn);function oe(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function ze(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ke(U,fe){return u[U]!==fe?(n.bindFramebuffer(U,fe),u[U]=fe,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Fe(U,fe){let te=g,ge=!1;if(U){te=h.get(fe),te===void 0&&(te=[],h.set(fe,te));const xe=U.textures;if(te.length!==xe.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,we=xe.length;ie<we;ie++)te[ie]=n.COLOR_ATTACHMENT0+ie;te.length=xe.length,ge=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ge=!0);ge&&n.drawBuffers(te)}function Qe(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const Ye={[yi]:n.FUNC_ADD,[Vh]:n.FUNC_SUBTRACT,[Gh]:n.FUNC_REVERSE_SUBTRACT};Ye[Hh]=n.MIN,Ye[kh]=n.MAX;const ft={[Wh]:n.ZERO,[Xh]:n.ONE,[qh]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[Qh]:n.SRC_ALPHA_SATURATE,[Zh]:n.DST_COLOR,[Kh]:n.DST_ALPHA,[Yh]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[Jh]:n.ONE_MINUS_DST_COLOR,[$h]:n.ONE_MINUS_DST_ALPHA,[jh]:n.CONSTANT_COLOR,[ep]:n.ONE_MINUS_CONSTANT_COLOR,[tp]:n.CONSTANT_ALPHA,[np]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(U,fe,te,ge,xe,ie,we,Re,yt,P){if(U===Xn){m===!0&&(ze(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),U!==zh){if(U!==p||P!==C){if((b!==yi||w!==yi)&&(n.blendEquation(n.FUNC_ADD),b=yi,w=yi),P)switch(U){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",U);break}else switch(U){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hl:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",U);break}T=null,M=null,E=null,S=null,v.set(0,0,0),A=0,p=U,C=P}return}xe=xe||fe,ie=ie||te,we=we||ge,(fe!==b||xe!==w)&&(n.blendEquationSeparate(Ye[fe],Ye[xe]),b=fe,w=xe),(te!==T||ge!==M||ie!==E||we!==S)&&(n.blendFuncSeparate(ft[te],ft[ge],ft[ie],ft[we]),T=te,M=ge,E=ie,S=we),(Re.equals(v)===!1||yt!==A)&&(n.blendColor(Re.r,Re.g,Re.b,yt),v.copy(Re),A=yt),p=U,C=!1}function Ke(U,fe){U.side===kn?ze(n.CULL_FACE):oe(n.CULL_FACE);let te=U.side===Qt;fe&&(te=!te),Et(te),U.blending===tr&&U.transparent===!1?ot(Xn):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function Pt(U){U!==Fh?(oe(n.CULL_FACE),U!==L&&(U===Vl?n.cullFace(n.BACK):U===Oh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),L=U}function Dt(U){U!==K&&(W&&n.lineWidth(U),K=U)}function Ft(U,fe,te){U?(oe(n.POLYGON_OFFSET_FILL),(Z!==fe||H!==te)&&(Z=fe,H=te,a.getReversed()&&(fe=-fe),n.polygonOffset(fe,te))):ze(n.POLYGON_OFFSET_FILL)}function St(U){U?oe(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function Tt(U){U===void 0&&(U=n.TEXTURE0+$-1),j!==U&&(n.activeTexture(U),j=U)}function F(U,fe,te){te===void 0&&(j===null?te=n.TEXTURE0+$-1:te=j);let ge=re[te];ge===void 0&&(ge={type:void 0,texture:void 0},re[te]=ge),(ge.type!==U||ge.texture!==fe)&&(j!==te&&(n.activeTexture(te),j=te),n.bindTexture(U,fe||ce[U]),ge.type=U,ge.texture=fe)}function At(){const U=re[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function _(){try{n.texSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function ue(){try{n.texStorage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function de(){try{n.texStorage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function ne(){try{n.texImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function he(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function Pe(U,fe){f[U]!==fe&&(n.pixelStorei(U,fe),f[U]=fe)}function _e(U){et.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function pe(U){Ve.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function Le(U,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let ge=te.get(U);ge===void 0&&(ge=n.getUniformBlockIndex(fe,U.name),te.set(U,ge))}function Ne(U,fe){const ge=c.get(fe).get(U);l.get(fe)!==ge&&(n.uniformBlockBinding(fe,ge,U.__bindingPointIndex),l.set(fe,ge))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},j=null,re={},u={},h=new WeakMap,g=[],x=null,m=!1,p=null,b=null,T=null,M=null,w=null,E=null,S=null,v=new st(0,0,0),A=0,C=!1,D=null,L=null,K=null,Z=null,H=null,et.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:ze,bindFramebuffer:ke,drawBuffers:Fe,useProgram:Qe,setBlending:ot,setMaterial:Ke,setFlipSided:Et,setCullFace:Pt,setLineWidth:Dt,setPolygonOffset:Ft,setScissorTest:St,activeTexture:Tt,bindTexture:F,unbindTexture:At,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:J,texImage3D:ne,pixelStorei:Pe,getParameter:he,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:ue,texStorage3D:de,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:k,compressedTexSubImage3D:Q,scissor:_e,viewport:pe,reset:Ge}}function Bv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return g?new OffscreenCanvas(R,_):Hs("canvas")}function m(R,_,z){let k=1;const Q=tt(R);if((Q.width>z||Q.height>z)&&(k=z/Math.max(Q.width,Q.height)),k<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(k*Q.width),de=Math.floor(k*Q.height);u===void 0&&(u=x(ue,de));const J=_?x(ue,de):u;return J.width=ue,J.height=de,J.getContext("2d").drawImage(R,0,0,ue,de),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+de+")."),J}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,_,z,k,Q,ue=!1){if(R!==null){if(n[R]!==void 0)return n[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let de;k&&(de=e.get("EXT_texture_norm16"),de||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),z===n.SHORT&&de&&(J=de.R16_SNORM_EXT)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),_===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),z===n.SHORT&&de&&(J=de.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),z===n.SHORT&&de&&(J=de.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){const ne=ue?Vs:nt.getTransfer(Q);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=ne===dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),z===n.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(R,_){let z;return R?_===null||_===In||_===Br?z=n.DEPTH24_STENCIL8:_===Tn?z=n.DEPTH32F_STENCIL8:_===Or&&(z=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===In||_===Br?z=n.DEPTH_COMPONENT24:_===Tn?z=n.DEPTH_COMPONENT32F:_===Or&&(z=n.DEPTH_COMPONENT16),z}function E(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==qt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function S(R){const _=R.target;_.removeEventListener("dispose",S),A(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&f.delete(_)}function v(R){const _=R.target;_.removeEventListener("dispose",v),D(_)}function A(R){const _=i.get(R);if(_.__webglInit===void 0)return;const z=R.source,k=h.get(z);if(k){const Q=k[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(R),Object.keys(k).length===0&&h.delete(z)}i.remove(R)}function C(R){const _=i.get(R);n.deleteTexture(_.__webglTexture);const z=R.source,k=h.get(z);delete k[_.__cacheKey],a.memory.textures--}function D(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Q=0;Q<_.__webglFramebuffer[k].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[k][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)n.deleteFramebuffer(_.__webglFramebuffer[k]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=R.textures;for(let k=0,Q=z.length;k<Q;k++){const ue=i.get(z[k]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(z[k])}i.remove(R)}let L=0;function K(){L=0}function Z(){return L}function H(R){L=R}function $(){const R=L;return R>=r.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function W(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function I(R,_){const z=i.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const k=R.image;if(k===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(z,R,_);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function X(R,_){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ze(z,R,_);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function j(R,_){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ze(z,R,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function re(R,_){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){ke(z,R,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}const ae={[to]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[no]:n.MIRRORED_REPEAT},qe={[Ht]:n.NEAREST,[sp]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},et={[lp]:n.NEVER,[hp]:n.ALWAYS,[cp]:n.LESS,[il]:n.LEQUAL,[up]:n.EQUAL,[rl]:n.GEQUAL,[fp]:n.GREATER,[dp]:n.NOTEQUAL};function Ve(R,_){if(_.type===Tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===qt||_.magFilter===aa||_.magFilter===Kr||_.magFilter===Ai||_.minFilter===qt||_.minFilter===aa||_.minFilter===Kr||_.minFilter===Ai)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ae[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ae[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ae[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,qe[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,qe[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,et[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ht||_.minFilter!==Kr&&_.minFilter!==Ai||_.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ee(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",S));const k=_.source;let Q=h.get(k);Q===void 0&&(Q={},h.set(k,Q));const ue=W(_);if(ue!==R.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[ue].usedTimes++;const de=Q[R.__cacheKey];de!==void 0&&(Q[R.__cacheKey].usedTimes--,de.usedTimes===0&&C(_)),R.__cacheKey=ue,R.__webglTexture=Q[ue].texture}return z}function ce(R,_,z){return Math.floor(Math.floor(R/z)/_)}function oe(R,_,z,k){const ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,k,_.data);else{ue.sort((Pe,_e)=>Pe.start-_e.start);let de=0;for(let Pe=1;Pe<ue.length;Pe++){const _e=ue[de],pe=ue[Pe],Le=_e.start+_e.count,Ne=ce(pe.start,_.width,4),Ge=ce(_e.start,_.width,4);pe.start<=Le+1&&Ne===Ge&&ce(pe.start+pe.count-1,_.width,4)===Ne?_e.count=Math.max(_e.count,pe.start+pe.count-_e.start):(++de,ue[de]=pe)}ue.length=de+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Pe=0,_e=ue.length;Pe<_e;Pe++){const pe=ue[Pe],Le=Math.floor(pe.start/4),Ne=Math.ceil(pe.count/4),Ge=Le%_.width,U=Math.floor(Le/_.width),fe=Ne,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ge,U,fe,te,z,k,_.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function ze(R,_,z){let k=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=n.TEXTURE_3D);const Q=ee(R,_),ue=_.source;t.bindTexture(k,R.__webglTexture,n.TEXTURE0+z);const de=i.get(ue);if(ue.version!==de.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const te=nt.getPrimaries(nt.workingColorSpace),ge=_.colorSpace===ui?null:nt.getPrimaries(_.colorSpace),xe=_.colorSpace===ui||te===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=m(_.image,!1,r.maxTextureSize);ne=At(_,ne);const he=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let _e=M(_.internalFormat,he,Pe,_.normalized,_.colorSpace,_.isVideoTexture);Ve(k,_);let pe;const Le=_.mipmaps,Ne=_.isVideoTexture!==!0,Ge=de.__version===void 0||Q===!0,U=ue.dataReady,fe=E(_,ne);if(_.isDepthTexture)_e=w(_.format===wi,_.type),Ge&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,_e,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,_e,ne.width,ne.height,0,he,Pe,null));else if(_.isDataTexture)if(Le.length>0){Ne&&Ge&&t.texStorage2D(n.TEXTURE_2D,fe,_e,Le[0].width,Le[0].height);for(let te=0,ge=Le.length;te<ge;te++)pe=Le[te],Ne?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,he,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,te,_e,pe.width,pe.height,0,he,Pe,pe.data);_.generateMipmaps=!1}else Ne?(Ge&&t.texStorage2D(n.TEXTURE_2D,fe,_e,ne.width,ne.height),U&&oe(_,ne,he,Pe)):t.texImage2D(n.TEXTURE_2D,0,_e,ne.width,ne.height,0,he,Pe,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,_e,Le[0].width,Le[0].height,ne.depth);for(let te=0,ge=Le.length;te<ge;te++)if(pe=Le[te],_.format!==vn)if(he!==null)if(Ne){if(U)if(_.layerUpdates.size>0){const xe=Mc(pe.width,pe.height,_.format,_.type);for(const ie of _.layerUpdates){const we=pe.data.subarray(ie*xe/pe.data.BYTES_PER_ELEMENT,(ie+1)*xe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ie,pe.width,pe.height,1,he,we)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ne.depth,he,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,_e,pe.width,pe.height,ne.depth,0,pe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ne.depth,he,Pe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,_e,pe.width,pe.height,ne.depth,0,he,Pe,pe.data)}else{Ne&&Ge&&t.texStorage2D(n.TEXTURE_2D,fe,_e,Le[0].width,Le[0].height);for(let te=0,ge=Le.length;te<ge;te++)pe=Le[te],_.format!==vn?he!==null?Ne?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,_e,pe.width,pe.height,0,pe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,he,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,te,_e,pe.width,pe.height,0,he,Pe,pe.data)}else if(_.isDataArrayTexture)if(Ne){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,_e,ne.width,ne.height,ne.depth),U)if(_.layerUpdates.size>0){const te=Mc(ne.width,ne.height,_.format,_.type);for(const ge of _.layerUpdates){const xe=ne.data.subarray(ge*te/ne.data.BYTES_PER_ELEMENT,(ge+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,ne.width,ne.height,1,he,Pe,xe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Pe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ne.width,ne.height,ne.depth,0,he,Pe,ne.data);else if(_.isData3DTexture)Ne?(Ge&&t.texStorage3D(n.TEXTURE_3D,fe,_e,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Pe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ne.width,ne.height,ne.depth,0,he,Pe,ne.data);else if(_.isFramebufferTexture){if(Ge)if(Ne)t.texStorage2D(n.TEXTURE_2D,fe,_e,ne.width,ne.height);else{let te=ne.width,ge=ne.height;for(let xe=0;xe<fe;xe++)t.texImage2D(n.TEXTURE_2D,xe,_e,te,ge,0,he,Pe,null),te>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),f.add(_),te.onpaint=ge=>{const xe=ge.changedElements;for(const ie of f)xe.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{const xe=n.RGBA,ie=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,ie,we,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&Ge){const te=tt(Le[0]);t.texStorage2D(n.TEXTURE_2D,fe,_e,te.width,te.height)}for(let te=0,ge=Le.length;te<ge;te++)pe=Le[te],Ne?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he,Pe,pe):t.texImage2D(n.TEXTURE_2D,te,_e,he,Pe,pe);_.generateMipmaps=!1}else if(Ne){if(Ge){const te=tt(ne);t.texStorage2D(n.TEXTURE_2D,fe,_e,te.width,te.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Pe,ne)}else t.texImage2D(n.TEXTURE_2D,0,_e,he,Pe,ne);p(_)&&b(k),de.__version=ue.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ke(R,_,z){if(_.image.length!==6)return;const k=ee(R,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const ue=i.get(Q);if(Q.version!==ue.__version||k===!0){t.activeTexture(n.TEXTURE0+z);const de=nt.getPrimaries(nt.workingColorSpace),J=_.colorSpace===ui?null:nt.getPrimaries(_.colorSpace),ne=_.colorSpace===ui||de===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,Pe=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!he&&!Pe?_e[ie]=m(_.image[ie],!0,r.maxCubemapSize):_e[ie]=Pe?_.image[ie].image:_.image[ie],_e[ie]=At(_,_e[ie]);const pe=_e[0],Le=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),Ge=M(_.internalFormat,Le,Ne,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,fe=ue.__version===void 0||k===!0,te=Q.dataReady;let ge=E(_,pe);Ve(n.TEXTURE_CUBE_MAP,_);let xe;if(he){U&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ge,pe.width,pe.height);for(let ie=0;ie<6;ie++){xe=_e[ie].mipmaps;for(let we=0;we<xe.length;we++){const Re=xe[we];_.format!==vn?Le!==null?U?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ge,Re.width,Re.height,0,Re.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Re.width,Re.height,Le,Ne,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ge,Re.width,Re.height,0,Le,Ne,Re.data)}}}else{if(xe=_.mipmaps,U&&fe){xe.length>0&&ge++;const ie=tt(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Pe){U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,Le,Ne,_e[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,_e[ie].width,_e[ie].height,0,Le,Ne,_e[ie].data);for(let we=0;we<xe.length;we++){const yt=xe[we].image[ie].image;U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,yt.width,yt.height,Le,Ne,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ge,yt.width,yt.height,0,Le,Ne,yt.data)}}else{U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Ne,_e[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Le,Ne,_e[ie]);for(let we=0;we<xe.length;we++){const Re=xe[we];U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Le,Ne,Re.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ge,Le,Ne,Re.image[ie])}}}p(_)&&b(n.TEXTURE_CUBE_MAP),ue.__version=Q.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Fe(R,_,z,k,Q,ue){const de=s.convert(z.format,z.colorSpace),J=s.convert(z.type),ne=M(z.internalFormat,de,J,z.normalized,z.colorSpace),he=i.get(_),Pe=i.get(z);if(Pe.__renderTarget=_,!he.__hasExternalTextures){const _e=Math.max(1,_.width>>ue),pe=Math.max(1,_.height>>ue);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,ne,_e,pe,_.depth,0,de,J,null):t.texImage2D(Q,ue,ne,_e,pe,0,de,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Tt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Q,Pe.__webglTexture,0,St(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Q,Pe.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(R,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){const k=_.depthTexture,Q=k&&k.isDepthTexture?k.type:null,ue=w(_.stencilBuffer,Q),de=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(_),ue,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(_),ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,R)}else{const k=_.textures;for(let Q=0;Q<k.length;Q++){const ue=k[Q],de=s.convert(ue.format,ue.colorSpace),J=s.convert(ue.type),ne=M(ue.internalFormat,de,J,ue.normalized,ue.colorSpace);Tt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(_),ne,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(_),ne,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ne,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(R,_,z){const k=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",S)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,_.depthTexture);const he=s.convert(_.depthTexture.format),Pe=s.convert(_.depthTexture.type);let _e;_.depthTexture.format===$n?_e=n.DEPTH_COMPONENT24:_.depthTexture.format===wi&&(_e=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_e,_.width,_.height,0,he,Pe,null)}}else I(_.depthTexture,0);const ue=Q.__webglTexture,de=St(_),J=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ne=_.depthTexture.format===wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===$n)Tt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,J,ue,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ne,J,ue,0);else if(_.depthTexture.format===wi)Tt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,J,ue,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ne,J,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(R){const _=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const k=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Q)};k.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=k}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let k=0;k<6;k++)Ye(_.__webglFramebuffer[k],R,k);else{const k=R.texture.mipmaps;k&&k.length>0?Ye(_.__webglFramebuffer[0],R,0):Ye(_.__webglFramebuffer,R,0)}else if(z){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=n.createRenderbuffer(),Qe(_.__webglDepthbuffer[k],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ue)}}else{const k=R.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Qe(_.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(R,_,z){const k=i.get(R);_!==void 0&&Fe(k.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ft(R)}function Ke(R){const _=R.texture,z=i.get(R),k=i.get(_);R.addEventListener("dispose",v);const Q=R.textures,ue=R.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,a.memory.textures++),ue){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let ne=0;ne<_.mipmaps.length;ne++)z.__webglFramebuffer[J][ne]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(de)for(let J=0,ne=Q.length;J<ne;J++){const he=i.get(Q[J]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Tt(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const ne=Q[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const he=s.convert(ne.format,ne.colorSpace),Pe=s.convert(ne.type),_e=M(ne.internalFormat,he,Pe,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),pe=St(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Fe(z.__webglFramebuffer[J][ne],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else Fe(z.__webglFramebuffer[J],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let J=0,ne=Q.length;J<ne;J++){const he=Q[J],Pe=i.get(he);let _e=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Pe.__webglTexture),Ve(_e,he),Fe(z.__webglFramebuffer,R,he,n.COLOR_ATTACHMENT0+J,_e,0),p(he)&&b(_e)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,k.__webglTexture),Ve(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Fe(z.__webglFramebuffer[ne],R,_,n.COLOR_ATTACHMENT0,J,ne);else Fe(z.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,J,0);p(_)&&b(J),t.unbindTexture()}R.depthBuffer&&ft(R)}function Et(R){const _=R.textures;for(let z=0,k=_.length;z<k;z++){const Q=_[z];if(p(Q)){const ue=T(R),de=i.get(Q).__webglTexture;t.bindTexture(ue,de),b(ue),t.unbindTexture()}}}const Pt=[],Dt=[];function Ft(R){if(R.samples>0){if(Tt(R)===!1){const _=R.textures,z=R.width,k=R.height;let Q=n.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(R),J=_.length>1;if(J)for(let he=0;he<_.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<_.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=i.get(_[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,z,k,0,0,z,k,Q,n.NEAREST),l===!0&&(Pt.length=0,Dt.length=0,Pt.push(n.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pt.push(ue),Dt.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let he=0;he<_.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=i.get(_[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function St(R){return Math.min(r.maxSamples,R.samples)}function Tt(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(R){const _=a.render.frame;d.get(R)!==_&&(d.set(R,_),R.update())}function At(R,_){const z=R.colorSpace,k=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==zs&&z!==ui&&(nt.getTransfer(z)===dt?(k!==vn||Q!==un)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",z)),_}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.getTextureUnits=Z,this.setTextureUnits=H,this.setTexture2D=I,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=re,this.rebindTextures=ot,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zv(n,e){function t(i,r=ui){let s;const a=nt.getTransfer(r);if(i===un)return n.UNSIGNED_BYTE;if(i===Qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Iu)return n.BYTE;if(i===Uu)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===Jo)return n.INT;if(i===In)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===Ou)return n.ALPHA;if(i===Bu)return n.RGB;if(i===vn)return n.RGBA;if(i===$n)return n.DEPTH_COMPONENT;if(i===wi)return n.DEPTH_STENCIL;if(i===zu)return n.RED;if(i===el)return n.RED_INTEGER;if(i===Li)return n.RG;if(i===tl)return n.RG_INTEGER;if(i===nl)return n.RGBA_INTEGER;if(i===bs||i===Es||i===Ts||i===As)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===io||i===ro||i===so||i===ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===so)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oo||i===lo||i===co||i===uo||i===fo||i===Os||i===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oo||i===lo)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===co)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===uo)return s.COMPRESSED_R11_EAC;if(i===fo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Os)return s.COMPRESSED_RG11_EAC;if(i===ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===Mo||i===So||i===yo||i===bo||i===Eo||i===To||i===Ao||i===wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===po)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===go)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===To)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ao)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ro||i===Co||i===Po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ro)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Do||i===Lo||i===Bs||i===Io)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Do)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Io)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Zu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:Vv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kv extends Ni{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Hv,p={},b=t.getContextAttributes();let T=null,M=null;const w=[],E=[],S=new at;let v=null;const A=new gn;A.viewport=new Rt;const C=new gn;C.viewport=new Rt;const D=[A,C],L=new jp;let K=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=w[ee];return ce===void 0&&(ce=new pa,w[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=w[ee];return ce===void 0&&(ce=new pa,w[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=w[ee];return ce===void 0&&(ce=new pa,w[ee]=ce),ce.getHandSpace()};function H(ee){const ce=E.indexOf(ee.inputSource);if(ce===-1)return;const oe=w[ce];oe!==void 0&&(oe.update(ee.inputSource,ee.frame,c||a),oe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",W);for(let ee=0;ee<w.length;ee++){const ce=E[ee];ce!==null&&(E[ee]=null,w[ee].disconnect(ce))}K=null,Z=null,m.reset();for(const ee in p)delete p[ee];e.setRenderTarget(T),h=null,u=null,f=null,r=null,M=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ze=null,ke=null;b.depth&&(ke=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?wi:$n,ze=b.stencil?Br:In);const Fe={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Pn(u.textureWidth,u.textureHeight,{format:vn,type:un,depthTexture:new ur(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Pn(h.framebufferWidth,h.framebufferHeight,{format:vn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(ee){for(let ce=0;ce<ee.removed.length;ce++){const oe=ee.removed[ce],ze=E.indexOf(oe);ze>=0&&(E[ze]=null,w[ze].disconnect(oe))}for(let ce=0;ce<ee.added.length;ce++){const oe=ee.added[ce];let ze=E.indexOf(oe);if(ze===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=E.length){E.push(oe),ze=Fe;break}else if(E[Fe]===null){E[Fe]=oe,ze=Fe;break}if(ze===-1)break}const ke=w[ze];ke&&ke.connect(oe)}}const I=new G,X=new G;function j(ee,ce,oe){I.setFromMatrixPosition(ce.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);const ze=I.distanceTo(X),ke=ce.projectionMatrix.elements,Fe=oe.projectionMatrix.elements,Qe=ke[14]/(ke[10]-1),Ye=ke[14]/(ke[10]+1),ft=(ke[9]+1)/ke[5],ot=(ke[9]-1)/ke[5],Ke=(ke[8]-1)/ke[0],Et=(Fe[8]+1)/Fe[0],Pt=Qe*Ke,Dt=Qe*Et,Ft=ze/(-Ke+Et),St=Ft*-Ke;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(St),ee.translateZ(Ft),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ke[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Tt=Qe+Ft,F=Ye+Ft,At=Pt-St,tt=Dt+(ze-St),R=ft*Ye/F*Tt,_=ot*Ye/F*Tt;ee.projectionMatrix.makePerspective(At,tt,R,_,Tt,F),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function re(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ce=ee.near,oe=ee.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),L.near=C.near=A.near=ce,L.far=C.far=A.far=oe,(K!==L.near||Z!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),K=L.near,Z=L.far),L.layers.mask=ee.layers.mask|6,A.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;const ze=ee.parent,ke=L.cameras;re(L,ze);for(let Fe=0;Fe<ke.length;Fe++)re(ke[Fe],ze);ke.length===2?j(L,A,C):L.projectionMatrix.copy(A.projectionMatrix),ae(ee,L,ze)};function ae(ee,ce,oe){oe===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(oe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Uo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(ee){return p[ee]};let qe=null;function et(ee,ce){if(d=ce.getViewerPose(c||a),g=ce,d!==null){const oe=d.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let ze=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,ze=!0);for(let Ye=0;Ye<oe.length;Ye++){const ft=oe[Ye];let ot=null;if(h!==null)ot=h.getViewport(ft);else{const Et=f.getViewSubImage(u,ft);ot=Et.viewport,Ye===0&&(e.setRenderTargetTextures(M,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(M))}let Ke=D[Ye];Ke===void 0&&(Ke=new gn,Ke.layers.enable(Ye),Ke.viewport=new Rt,D[Ye]=Ke),Ke.matrix.fromArray(ft.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ft.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(L.matrix.copy(Ke.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ze===!0&&L.cameras.push(Ke)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Ye=f.getDepthInformation(oe[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,r.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Ye=0;Ye<oe.length;Ye++){const ft=oe[Ye].camera;if(ft){let ot=p[ft];ot||(ot=new Zu,p[ft]=ot);const Ke=f.getCameraImage(ft);ot.sourceTexture=Ke}}}}for(let oe=0;oe<w.length;oe++){const ze=E[oe],ke=w[oe];ze!==null&&ke!==void 0&&ke.update(ze,ce,c||a)}qe&&qe(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Ve=new nf;Ve.setAnimationLoop(et),this.setAnimationLoop=function(ee){qe=ee},this.dispose=function(){}}}const Wv=new Ct,uf=new Xe;uf.set(-1,0,0,0,1,0,0,0,1);function Xv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ju(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const E=w.program;i.uniformBlockBinding(M,E)}function c(M,w){let E=r[M.id];E===void 0&&(m(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",b));const S=w.program;i.updateUBOMapping(M,S);const v=e.render.frame;s[M.id]!==v&&(u(M),s[M.id]=v)}function d(M){const w=f();M.__bindingPointIndex=w;const E=n.createBuffer(),S=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const w=r[M.id],E=M.uniforms,S=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,A=E.length;v<A;v++){const C=E[v];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)h(C[D],v,D,S);else h(C,v,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,w,E,S){if(x(M,w,E,S)===!0){const v=M.__offset,A=M.value;if(Array.isArray(A)){let C=0;for(let D=0;D<A.length;D++){const L=A[D],K=p(L);g(L,M.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function g(M,w,E){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,E)}function x(M,w,E,S){const v=M.value,A=w+"_"+E;if(S[A]===void 0)return typeof v=="number"||typeof v=="boolean"?S[A]=v:ArrayBuffer.isView(v)?S[A]=v.slice():S[A]=v.clone(),!0;{const C=S[A];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return S[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(M){const w=M.uniforms;let E=0;const S=16;for(let A=0,C=w.length;A<C;A++){const D=Array.isArray(w[A])?w[A]:[w[A]];for(let L=0,K=D.length;L<K;L++){const Z=D[L],H=Array.isArray(Z.value)?Z.value:[Z.value];for(let $=0,W=H.length;$<W;$++){const I=H[$],X=p(I),j=E%S,re=j%X.boundary,ae=j+re;E+=re,ae!==0&&S-ae<X.storage&&(E+=S-ae),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=X.storage}}}const v=E%S;return v>0&&(E+=S-v),M.__size=E,M.__cache={},this}function p(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",M),w}function b(M){const w=M.target;w.removeEventListener("dispose",b);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function T(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:T}}const Yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function Kv(){return bn===null&&(bn=new Op(Yv,16,16,Li,Kn),bn.name="DFG_LUT",bn.minFilter=qt,bn.magFilter=qt,bn.wrapS=Wn,bn.wrapT=Wn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class px{constructor(e={}){const{canvas:t=mp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=h,m=new Set([nl,tl,el]),p=new Set([un,In,Or,Br,Qo,jo]),b=new Uint32Array(4),T=new Int32Array(4),M=new G;let w=null,E=null;const S=[],v=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,L=null,K=null,Z=null,H=null;this._outputColorSpace=cn;let $=0,W=0,I=null,X=-1,j=null;const re=new Rt,ae=new Rt;let qe=null;const et=new st(0);let Ve=0,ee=t.width,ce=t.height,oe=1,ze=null,ke=null;const Fe=new Rt(0,0,ee,ce),Qe=new Rt(0,0,ee,ce);let Ye=!1;const ft=new Yu;let ot=!1,Ke=!1;const Et=new Ct,Pt=new G,Dt=new Rt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Tt(){return I===null?oe:1}let F=i;function At(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",B,!1),F===null){const O="webgl2";if(F=At(O,y),F===null)throw At(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ct("WebGLRenderer: "+y.message),y}let tt,R,_,z,k,Q,ue,de,J,ne,he,Pe,_e,pe,Le,Ne,Ge,U,fe,te,ge,xe,ie;function we(){tt=new K_(F),tt.init(),ge=new zv(F,tt),R=new V_(F,tt,e,ge),_=new Ov(F,tt),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),K=F.createFramebuffer(),Z=F.createFramebuffer(),H=F.createFramebuffer(),z=new J_(F),k=new bv,Q=new Bv(F,tt,_,k,R,ge,z),ue=new Y_(C),de=new tm(F),xe=new B_(F,de),J=new $_(F,de,z,xe),ne=new j_(F,J,de,xe,z),U=new Q_(F,R,Q),Le=new G_(k),he=new yv(C,ue,tt,R,xe,Le),Pe=new Xv(C,k),_e=new Tv,pe=new Dv(tt),Ge=new O_(C,ue,_,ne,g,l),Ne=new Fv(C,ne,R),ie=new qv(F,z,R,_),fe=new z_(F,tt,z),te=new Z_(F,tt,z),z.programs=he.programs,C.capabilities=R,C.extensions=tt,C.properties=k,C.renderLists=_e,C.shadowMap=Ne,C.state=_,C.info=z}we(),x!==un&&(A=new t0(x,t.width,t.height,o,r,s));const Re=new kv(C,F);this.xr=Re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=tt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=tt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(y){y!==void 0&&(oe=y,this.setSize(ee,ce,!1))},this.getSize=function(y){return y.set(ee,ce)},this.setSize=function(y,O,Y=!0){if(Re.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=y,ce=O,t.width=Math.floor(y*oe),t.height=Math.floor(O*oe),Y===!0&&(t.style.width=y+"px",t.style.height=O+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(ee*oe,ce*oe).floor()},this.setDrawingBufferSize=function(y,O,Y){ee=y,ce=O,oe=Y,t.width=Math.floor(y*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(x===un){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(re)},this.getViewport=function(y){return y.copy(Fe)},this.setViewport=function(y,O,Y,N){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,O,Y,N),_.viewport(re.copy(Fe).multiplyScalar(oe).round())},this.getScissor=function(y){return y.copy(Qe)},this.setScissor=function(y,O,Y,N){y.isVector4?Qe.set(y.x,y.y,y.z,y.w):Qe.set(y,O,Y,N),_.scissor(ae.copy(Qe).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(y){_.setScissorTest(Ye=y)},this.setOpaqueSort=function(y){ze=y},this.setTransparentSort=function(y){ke=y},this.getClearColor=function(y){return y.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,Y=!0){let N=0;if(y){let V=!1;if(I!==null){const me=I.texture.format;V=m.has(me)}if(V){const me=I.texture.type,Se=p.has(me),le=Ge.getClearColor(),be=Ge.getClearAlpha(),De=le.r,We=le.g,Je=le.b;Se?(b[0]=De,b[1]=We,b[2]=Je,b[3]=be,F.clearBufferuiv(F.COLOR,0,b)):(T[0]=De,T[1]=We,T[2]=Je,T[3]=be,F.clearBufferiv(F.COLOR,0,T))}else N|=F.COLOR_BUFFER_BIT}O&&(N|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(N|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&F.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),L=y},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",B,!1),Ge.dispose(),_e.dispose(),pe.dispose(),k.dispose(),ue.dispose(),ne.dispose(),xe.dispose(),ie.dispose(),he.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ce),Re.removeEventListener("sessionend",ye),Te.stop()};function yt(y){y.preventDefault(),$l("WebGLRenderer: Context Lost."),D=!0}function P(){$l("WebGLRenderer: Context Restored."),D=!1;const y=z.autoReset,O=Ne.enabled,Y=Ne.autoUpdate,N=Ne.needsUpdate,V=Ne.type;we(),z.autoReset=y,Ne.enabled=O,Ne.autoUpdate=Y,Ne.needsUpdate=N,Ne.type=V}function B(y){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function q(y){const O=y.target;O.removeEventListener("dispose",q),se(O)}function se(y){ve(y),k.remove(y)}function ve(y){const O=k.get(y).programs;O!==void 0&&(O.forEach(function(Y){he.releaseProgram(Y)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,Y,N,V,me){O===null&&(O=Ft);const Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,le=an(y,O,Y,N,V);_.setMaterial(N,Se);let be=Y.index,De=1;if(N.wireframe===!0){if(be=J.getWireframeAttribute(Y),be===void 0)return;De=2}const We=Y.drawRange,Je=Y.attributes.position;let Ue=We.start*De,pt=(We.start+We.count)*De;me!==null&&(Ue=Math.max(Ue,me.start*De),pt=Math.min(pt,(me.start+me.count)*De)),be!==null?(Ue=Math.max(Ue,0),pt=Math.min(pt,be.count)):Je!=null&&(Ue=Math.max(Ue,0),pt=Math.min(pt,Je.count));const Lt=pt-Ue;if(Lt<0||Lt===1/0)return;xe.setup(V,N,le,Y,be);let wt,gt=fe;if(be!==null&&(wt=de.get(be),gt=te,gt.setIndex(wt)),V.isMesh)N.wireframe===!0?(_.setLineWidth(N.wireframeLinewidth*Tt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(V.isLine){let kt=N.linewidth;kt===void 0&&(kt=1),_.setLineWidth(kt*Tt()),V.isLineSegments?gt.setMode(F.LINES):V.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else V.isPoints?gt.setMode(F.POINTS):V.isSprite&&gt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const kt=V._multiDrawStarts,Ee=V._multiDrawCounts,en=V._multiDrawCount,lt=be?de.get(be).bytesPerElement:1,on=k.get(N).currentProgram.getUniforms();for(let Sn=0;Sn<en;Sn++)on.setValue(F,"_gl_DrawID",Sn),gt.render(kt[Sn]/lt,Ee[Sn])}else if(V.isInstancedMesh)gt.renderInstances(Ue,Lt,V.count);else if(Y.isInstancedBufferGeometry){const kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,kt);gt.renderInstances(Ue,Lt,Ee)}else gt.render(Ue,Lt)};function Ie(y,O,Y){y.transparent===!0&&y.side===kn&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,mt(y,O,Y),y.side=pi,y.needsUpdate=!0,mt(y,O,Y),y.side=kn):mt(y,O,Y)}this.compile=function(y,O,Y=null){Y===null&&(Y=y),E=pe.get(Y),E.init(O),v.push(E),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),y!==Y&&y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();const N=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const le=me[Se];Ie(le,Y,V),N.add(le)}else Ie(me,Y,V),N.add(me)}),E=v.pop(),N},this.compileAsync=function(y,O,Y=null){const N=this.compile(y,O,Y);return new Promise(V=>{function me(){if(N.forEach(function(Se){k.get(Se).currentProgram.isReady()&&N.delete(Se)}),N.size===0){V(y);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Oe=null;function Ae(y){Oe&&Oe(y)}function Ce(){Te.stop()}function ye(){Te.start()}const Te=new nf;Te.setAnimationLoop(Ae),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(y){Oe=y,Re.setAnimationLoop(y),y===null?Te.stop():Te.start()},Re.addEventListener("sessionstart",Ce),Re.addEventListener("sessionend",ye),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(y,O);const Y=Re.enabled===!0&&Re.isPresenting===!0,N=A!==null&&(I===null||Y)&&A.begin(C,I);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(O),O=Re.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,O,I),E=pe.get(y,v.length),E.init(O),E.state.textureUnits=Q.getTextureUnits(),v.push(E),Et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ft.setFromProjectionMatrix(Et,An,O.reversedDepth),Ke=this.localClippingEnabled,ot=Le.init(this.clippingPlanes,Ke),w=_e.get(y,S.length),w.init(),S.push(w),Re.enabled===!0&&Re.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&He(Se,O,-1/0,C.sortObjects)}He(y,O,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(ze,ke,O.reversedDepth),St=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,St&&Ge.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Le.beginShadows();const V=E.state.shadowsArray;if(Ne.render(V,y,O),ot===!0&&Le.endShadows(),(N&&A.hasRenderPass())===!1){const Se=w.opaque,le=w.transmissive;if(E.setupLights(),O.isArrayCamera){const be=O.cameras;if(le.length>0)for(let De=0,We=be.length;De<We;De++){const Je=be[De];Ut(Se,le,y,Je)}St&&Ge.render(y);for(let De=0,We=be.length;De<We;De++){const Je=be[De];je(w,y,Je,Je.viewport)}}else le.length>0&&Ut(Se,le,y,O),St&&Ge.render(y),je(w,y,O)}I!==null&&W===0&&(Q.updateMultisampleRenderTarget(I),Q.updateRenderTargetMipmap(I)),N&&A.end(C),y.isScene===!0&&y.onAfterRender(C,y,O),xe.resetDefaultState(),X=-1,j=null,v.pop(),v.length>0?(E=v[v.length-1],Q.setTextureUnits(E.state.textureUnits),ot===!0&&Le.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,S.pop(),S.length>0?w=S[S.length-1]:w=null,L!==null&&L.renderEnd()};function He(y,O,Y,N){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ft.intersectsSprite(y)){N&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Et);const Se=ne.update(y),le=y.material;le.visible&&w.push(y,Se,le,Y,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ft.intersectsObject(y))){const Se=ne.update(y),le=y.material;if(N&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Dt.copy(Se.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(Et)),Array.isArray(le)){const be=Se.groups;for(let De=0,We=be.length;De<We;De++){const Je=be[De],Ue=le[Je.materialIndex];Ue&&Ue.visible&&w.push(y,Se,Ue,Y,Dt.z,Je)}}else le.visible&&w.push(y,Se,le,Y,Dt.z,null)}}const me=y.children;for(let Se=0,le=me.length;Se<le;Se++)He(me[Se],O,Y,N)}function je(y,O,Y,N){const{opaque:V,transmissive:me,transparent:Se}=y;E.setupLightsView(Y),ot===!0&&Le.setGlobalState(C.clippingPlanes,Y),N&&_.viewport(re.copy(N)),V.length>0&&ut(V,O,Y),me.length>0&&ut(me,O,Y),Se.length>0&&ut(Se,O,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ut(y,O,Y,N){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[N.id]===void 0){const Ue=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[N.id]=new Pn(1,1,{generateMipmaps:!0,type:Ue?Kn:un,minFilter:Ai,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const me=E.state.transmissionRenderTarget[N.id],Se=N.viewport||re;me.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const le=C.getRenderTarget(),be=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(et),Ve=C.getClearAlpha(),Ve<1&&C.setClearColor(16777215,.5),C.clear(),St&&Ge.render(Y);const We=C.toneMapping;C.toneMapping=Cn;const Je=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),E.setupLightsView(N),ot===!0&&Le.setGlobalState(C.clippingPlanes,N),ut(y,Y,N),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let pt=0,Lt=O.length;pt<Lt;pt++){const wt=O[pt],{object:gt,geometry:kt,material:Ee,group:en}=wt;if(Ee.side===kn&&gt.layers.test(N.layers)){const lt=Ee.side;Ee.side=Qt,Ee.needsUpdate=!0,rt(gt,Y,N,kt,Ee,en),Ee.side=lt,Ee.needsUpdate=!0,Ue=!0}}Ue===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me))}C.setRenderTarget(le,be,De),C.setClearColor(et,Ve),Je!==void 0&&(N.viewport=Je),C.toneMapping=We}function ut(y,O,Y){const N=O.isScene===!0?O.overrideMaterial:null;for(let V=0,me=y.length;V<me;V++){const Se=y[V],{object:le,geometry:be,group:De}=Se;let We=Se.material;We.allowOverride===!0&&N!==null&&(We=N),le.layers.test(Y.layers)&&rt(le,O,Y,be,We,De)}}function rt(y,O,Y,N,V,me){y.onBeforeRender(C,O,Y,N,V,me),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(C,O,Y,N,y,me),V.transparent===!0&&V.side===kn&&V.forceSinglePass===!1?(V.side=Qt,V.needsUpdate=!0,C.renderBufferDirect(Y,O,N,V,y,me),V.side=pi,V.needsUpdate=!0,C.renderBufferDirect(Y,O,N,V,y,me),V.side=kn):C.renderBufferDirect(Y,O,N,V,y,me),y.onAfterRender(C,O,Y,N,V,me)}function mt(y,O,Y){O.isScene!==!0&&(O=Ft);const N=k.get(y),V=E.state.lights,me=E.state.shadowsArray,Se=V.state.version,le=he.getParameters(y,V.state,me,O,Y,E.state.lightProbeGridArray),be=he.getProgramCacheKey(le);let De=N.programs;N.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,N.fog=O.fog;const We=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;N.envMap=ue.get(y.envMap||N.environment,We),N.envMapRotation=N.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",q),De=new Map,N.programs=De);let Je=De.get(be);if(Je!==void 0){if(N.currentProgram===Je&&N.lightsStateVersion===Se)return Jn(y,le),Je}else le.uniforms=he.getUniforms(y),L!==null&&y.isNodeMaterial&&L.build(y,Y,le),y.onBeforeCompile(le,C),Je=he.acquireProgram(le,be),De.set(be,Je),N.uniforms=le.uniforms;const Ue=N.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=Le.uniform),Jn(y,le),N.needsLights=mi(y),N.lightsStateVersion=Se,N.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),N.lightProbeGrid=E.state.lightProbeGridArray.length>0,N.currentProgram=Je,N.uniformsList=null,Je}function Fn(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Jn(y,O){const Y=k.get(y);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function fn(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let Y=0,N=y.length;Y<N;Y++){const V=y[Y];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function an(y,O,Y,N,V){O.isScene!==!0&&(O=Ft),Q.resetTextureUnits();const me=O.fog,Se=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?O.environment:null,le=I===null?C.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:nt.workingColorSpace,be=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,De=ue.get(N.envMap||Se,be),We=N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ue=!!Y.morphAttributes.position,pt=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color;let wt=Cn;N.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=C.toneMapping);const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,kt=gt!==void 0?gt.length:0,Ee=k.get(N),en=E.state.lights;if(ot===!0&&(Ke===!0||y!==j)){const vt=y===j&&N.id===X;Le.setState(N,y,vt)}let lt=!1;N.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==en.state.version||Ee.outputColorSpace!==le||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==De||N.fog===!0&&Ee.fog!==me||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Le.numPlanes||Ee.numIntersection!==Le.numIntersection)||Ee.vertexAlphas!==We||Ee.vertexTangents!==Je||Ee.morphTargets!==Ue||Ee.morphNormals!==pt||Ee.morphColors!==Lt||Ee.toneMapping!==wt||Ee.morphTargetsCount!==kt||!!Ee.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Ee.__version=N.version);let on=Ee.currentProgram;lt===!0&&(on=mt(N,O,V),L&&N.isNodeMaterial&&L.onUpdateProgram(N,on,Ee));let Sn=!1,Qn=!1,Fi=!1;const _t=on.getUniforms(),It=Ee.uniforms;if(_.useProgram(on.program)&&(Sn=!0,Qn=!0,Fi=!0),N.id!==X&&(X=N.id,Qn=!0),Ee.needsLights){const vt=fn(E.state.lightProbeGridArray,V);Ee.lightProbeGrid!==vt&&(Ee.lightProbeGrid=vt,Qn=!0)}if(Sn||j!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),_t.setValue(F,"projectionMatrix",y.projectionMatrix),_t.setValue(F,"viewMatrix",y.matrixWorldInverse);const ei=_t.map.cameraPosition;ei!==void 0&&ei.setValue(F,Pt.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&_t.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Qn=!0,Fi=!0)}if(Ee.needsLights&&(en.state.directionalShadowMap.length>0&&_t.setValue(F,"directionalShadowMap",en.state.directionalShadowMap,Q),en.state.spotShadowMap.length>0&&_t.setValue(F,"spotShadowMap",en.state.spotShadowMap,Q),en.state.pointShadowMap.length>0&&_t.setValue(F,"pointShadowMap",en.state.pointShadowMap,Q)),V.isSkinnedMesh){_t.setOptional(F,V,"bindMatrix"),_t.setOptional(F,V,"bindMatrixInverse");const vt=V.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),_t.setValue(F,"boneTexture",vt.boneTexture,Q))}V.isBatchedMesh&&(_t.setOptional(F,V,"batchingTexture"),_t.setValue(F,"batchingTexture",V._matricesTexture,Q),_t.setOptional(F,V,"batchingIdTexture"),_t.setValue(F,"batchingIdTexture",V._indirectTexture,Q),_t.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&_t.setValue(F,"batchingColorTexture",V._colorsTexture,Q));const jn=Y.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&U.update(V,Y,on),(Qn||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,_t.setValue(F,"receiveShadow",V.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&O.environment!==null&&(It.envMapIntensity.value=O.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Kv()),Qn){if(_t.setValue(F,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&vr(It,Fi),me&&N.fog===!0&&Pe.refreshFogUniforms(It,me),Pe.refreshMaterialUniforms(It,N,oe,ce,E.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.lightProbeGrid){const vt=Ee.lightProbeGrid;It.probesSH.value=vt.texture,It.probesMin.value.copy(vt.boundingBox.min),It.probesMax.value.copy(vt.boundingBox.max),It.probesResolution.value.copy(vt.resolution)}ws.upload(F,Fn(Ee),It,Q)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ws.upload(F,Fn(Ee),It,Q),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&_t.setValue(F,"center",V.center),_t.setValue(F,"modelViewMatrix",V.modelViewMatrix),_t.setValue(F,"normalMatrix",V.normalMatrix),_t.setValue(F,"modelMatrix",V.matrixWorld),N.uniformsGroups!==void 0){const vt=N.uniformsGroups;for(let ei=0,Oi=vt.length;ei<Oi;ei++){const hl=vt[ei];ie.update(hl,on),ie.bind(hl,on)}}return on}function vr(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function mi(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,O,Y){const N=k.get(y);N.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=O,k.get(y.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:Y,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const Y=k.get(y);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,Y=0){I=y,$=O,W=Y;let N=null,V=!1,me=!1;if(y){const le=k.get(y);if(le.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,le.__webglFramebuffer),re.copy(y.viewport),ae.copy(y.scissor),qe=y.scissorTest,_.viewport(re),_.scissor(ae),_.setScissorTest(qe),X=-1;return}else if(le.__webglFramebuffer===void 0)Q.setupRenderTarget(y);else if(le.__hasExternalTextures)Q.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const We=y.depthTexture;if(le.__boundDepthTexture!==We){if(We!==null&&k.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(y)}}const be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const De=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[O])?N=De[O][Y]:N=De[O],V=!0):y.samples>0&&Q.useMultisampledRTT(y)===!1?N=k.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[Y]:N=De,re.copy(y.viewport),ae.copy(y.scissor),qe=y.scissorTest}else re.copy(Fe).multiplyScalar(oe).floor(),ae.copy(Qe).multiplyScalar(oe).floor(),qe=Ye;if(Y!==0&&(N=K),_.bindFramebuffer(F.FRAMEBUFFER,N)&&_.drawBuffers(y,N),_.viewport(re),_.scissor(ae),_.setScissorTest(qe),V){const le=k.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,le.__webglTexture,Y)}else if(me){const le=O;for(let be=0;be<y.textures.length;be++){const De=k.get(y.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,De.__webglTexture,Y,le)}}else if(y!==null&&Y!==0){const le=k.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le.__webglTexture,Y)}X=-1},this.readRenderTargetPixels=function(y,O,Y,N,V,me,Se,le=0){if(!(y&&y.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){_.bindFramebuffer(F.FRAMEBUFFER,be);try{const De=y.textures[le],We=De.format,Je=De.type;if(y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+le),!R.textureFormatReadable(We)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Je)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-N&&Y>=0&&Y<=y.height-V&&F.readPixels(O,Y,N,V,ge.convert(We),ge.convert(Je),me)}finally{const De=I!==null?k.get(I).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,O,Y,N,V,me,Se,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(O>=0&&O<=y.width-N&&Y>=0&&Y<=y.height-V){_.bindFramebuffer(F.FRAMEBUFFER,be);const De=y.textures[le],We=De.format,Je=De.type;if(y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+le),!R.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(O,Y,N,V,ge.convert(We),ge.convert(Je),0);const pt=I!==null?k.get(I).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,pt);const Lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gp(F,Lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.deleteBuffer(Ue),F.deleteSync(Lt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,Y=0){const N=Math.pow(2,-Y),V=Math.floor(y.image.width*N),me=Math.floor(y.image.height*N),Se=O!==null?O.x:0,le=O!==null?O.y:0;Q.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Se,le,V,me),_.unbindTexture()},this.copyTextureToTexture=function(y,O,Y=null,N=null,V=0,me=0){let Se,le,be,De,We,Je,Ue,pt,Lt;const wt=y.isCompressedTexture?y.mipmaps[me]:y.image;if(Y!==null)Se=Y.max.x-Y.min.x,le=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,We=Y.min.y,Je=Y.isBox3?Y.min.z:0;else{const It=Math.pow(2,-V);Se=Math.floor(wt.width*It),le=Math.floor(wt.height*It),y.isDataArrayTexture?be=wt.depth:y.isData3DTexture?be=Math.floor(wt.depth*It):be=1,De=0,We=0,Je=0}N!==null?(Ue=N.x,pt=N.y,Lt=N.z):(Ue=0,pt=0,Lt=0);const gt=ge.convert(O.format),kt=ge.convert(O.type);let Ee;O.isData3DTexture?(Q.setTexture3D(O,0),Ee=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),Ee=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),Ee=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const en=_.getParameter(F.UNPACK_ROW_LENGTH),lt=_.getParameter(F.UNPACK_IMAGE_HEIGHT),on=_.getParameter(F.UNPACK_SKIP_PIXELS),Sn=_.getParameter(F.UNPACK_SKIP_ROWS),Qn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,De),_.pixelStorei(F.UNPACK_SKIP_ROWS,We),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const Fi=y.isDataArrayTexture||y.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const It=k.get(y),jn=k.get(O),vt=k.get(It.__renderTarget),ei=k.get(jn.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,vt.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Oi=0;Oi<be;Oi++)Fi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(y).__webglTexture,V,Je+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(O).__webglTexture,me,Lt+Oi)),F.blitFramebuffer(De,We,Se,le,Ue,pt,Se,le,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||k.has(y)){const It=k.get(y),jn=k.get(O);_.bindFramebuffer(F.READ_FRAMEBUFFER,Z),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let vt=0;vt<be;vt++)Fi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,V,Je+vt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,V),_t?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jn.__webglTexture,me,Lt+vt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jn.__webglTexture,me),V!==0?F.blitFramebuffer(De,We,Se,le,Ue,pt,Se,le,F.COLOR_BUFFER_BIT,F.NEAREST):_t?F.copyTexSubImage3D(Ee,me,Ue,pt,Lt+vt,De,We,Se,le):F.copyTexSubImage2D(Ee,me,Ue,pt,De,We,Se,le);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _t?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(Ee,me,Ue,pt,Lt,Se,le,be,gt,kt,wt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,me,Ue,pt,Lt,Se,le,be,gt,wt.data):F.texSubImage3D(Ee,me,Ue,pt,Lt,Se,le,be,gt,kt,wt):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Ue,pt,Se,le,gt,kt,wt.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Ue,pt,wt.width,wt.height,gt,wt.data):F.texSubImage2D(F.TEXTURE_2D,me,Ue,pt,Se,le,gt,kt,wt);_.pixelStorei(F.UNPACK_ROW_LENGTH,en),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(F.UNPACK_SKIP_PIXELS,on),_.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Qn),me===0&&O.generateMipmaps&&F.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&Q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Q.setTextureCube(y,0):y.isData3DTexture?Q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Q.setTexture2DArray(y,0):Q.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){$=0,W=0,I=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}export{Ur as A,Ot as B,$s as C,sh as D,ah as E,Fs as F,ux as G,cx as H,Ha as I,Vr as J,jt as K,Dn as L,kp as M,Gl as N,dx as O,gn as P,Ku as Q,Bt as R,fx as S,Hp as T,Zn as U,Qu as V,px as W,qu as X,Ju as Y,hx as Z,jv as a,Ln as b,Jv as c,Qv as d,sx as e,nx as f,ix as g,tx as h,gl as i,rx as j,ox as k,xn as l,Nr as m,hr as n,ex as o,lx as p,rr as q,hi as r,ax as s,Zv as t,Mn as u,sn as v,qr as w,xt as x,Ui as y,ji as z};
