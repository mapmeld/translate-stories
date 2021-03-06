/**
 * @license almond 0.3.2 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
var requirejs,require,define
!function(e){function t(e,t){return m.call(e,t)}function n(e,t){var n,r,i,o,A,a,s,c,l,u,d,f,h=t&&t.split("/"),g=p.map,m=g&&g["*"]||{}
if(e){for(e=e.split("/"),A=e.length-1,p.nodeIdCompat&&y.test(e[A])&&(e[A]=e[A].replace(y,"")),"."===e[0].charAt(0)&&h&&(f=h.slice(0,h.length-1),e=f.concat(e)),l=0;l<e.length;l++)if(d=e[l],"."===d)e.splice(l,1),l-=1
else if(".."===d){if(0===l||1===l&&".."===e[2]||".."===e[l-1])continue
l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((h||m)&&g){for(n=e.split("/"),l=n.length;l>0;l-=1){if(r=n.slice(0,l).join("/"),h)for(u=h.length;u>0;u-=1)if(i=g[h.slice(0,u).join("/")],i&&(i=i[r])){o=i,a=l
break}if(o)break
!s&&m&&m[r]&&(s=m[r],c=l)}!o&&s&&(o=s,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function r(t,n){return function(){var r=v.call(arguments,0)
return"string"!=typeof r[0]&&1===r.length&&r.push(null),l.apply(e,r.concat([t,n]))}}function i(e){return function(t){return n(t,e)}}function o(e){return function(t){f[e]=t}}function A(n){if(t(h,n)){var r=h[n]
delete h[n],g[n]=!0,c.apply(e,r)}if(!t(f,n)&&!t(g,n))throw new Error("No "+n)
return f[n]}function a(e){var t,n=e?e.indexOf("!"):-1
return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function s(e){return function(){return p&&p.config&&p.config[e]||{}}}var c,l,u,d,f={},h={},p={},g={},m=Object.prototype.hasOwnProperty,v=[].slice,y=/\.js$/
u=function(e,t){var r,o=a(e),s=o[0]
return e=o[1],s&&(s=n(s,t),r=A(s)),s?e=r&&r.normalize?r.normalize(e,i(t)):n(e,t):(e=n(e,t),o=a(e),s=o[0],e=o[1],s&&(r=A(s))),{f:s?s+"!"+e:e,n:e,pr:s,p:r}},d={require:function(e){return r(e)},exports:function(e){var t=f[e]
return"undefined"!=typeof t?t:f[e]={}},module:function(e){return{id:e,uri:"",exports:f[e],config:s(e)}}},c=function(n,i,a,s){var c,l,p,m,v,y,w=[],B=typeof a
if(s=s||n,"undefined"===B||"function"===B){for(i=!i.length&&a.length?["require","exports","module"]:i,v=0;v<i.length;v+=1)if(m=u(i[v],s),l=m.f,"require"===l)w[v]=d.require(n)
else if("exports"===l)w[v]=d.exports(n),y=!0
else if("module"===l)c=w[v]=d.module(n)
else if(t(f,l)||t(h,l)||t(g,l))w[v]=A(l)
else{if(!m.p)throw new Error(n+" missing "+l)
m.p.load(m.n,r(s,!0),o(l),{}),w[v]=f[l]}p=a?a.apply(f[n],w):void 0,n&&(c&&c.exports!==e&&c.exports!==f[n]?f[n]=c.exports:p===e&&y||(f[n]=p))}else n&&(f[n]=a)},requirejs=require=l=function(t,n,r,i,o){if("string"==typeof t)return d[t]?d[t](n):A(u(t,n).f)
if(!t.splice){if(p=t,p.deps&&l(p.deps,p.callback),!n)return
n.splice?(t=n,n=r,r=null):t=e}return n=n||function(){},"function"==typeof r&&(r=i,i=o),i?c(e,t,n,r):setTimeout(function(){c(e,t,n,r)},4),l},l.config=function(e){return l(e)},requirejs._defined=f,define=function(e,n,r){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name")
n.splice||(r=n,n=[]),t(f,e)||t(h,e)||(h[e]=[e,n,r])},define.amd={jQuery:!0}}(),define("readium-js_all",function(){}),window.EPUBcfiParser=function(){"use strict"
function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,n,r,i){this.message=e,this.expected=n,this.found=r,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}function n(e){function n(t){var n,r,i=Ve[t]
if(i)return i
for(n=t-1;!Ve[n];)n--
for(i=Ve[n],i={line:i.line,column:i.column,seenCR:i.seenCR};t>n;)r=e.charAt(n),"\n"===r?(i.seenCR||i.line++,i.column=1,i.seenCR=!1):"\r"===r||"\u2028"===r||"\u2029"===r?(i.line++,i.column=1,i.seenCR=!0):(i.column++,i.seenCR=!1),n++
return Ve[t]=i,i}function r(e,t){var r=n(e),i=n(t)
return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:i.line,column:i.column}}}function i(e){Ye>je||(je>Ye&&(Ye=je,qe=[]),qe.push(e))}function o(e,n,r,i){function o(e){var t=1
for(e.sort(function(e,t){return e.description<t.description?-1:e.description>t.description?1:0});t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}function A(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0100-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1000-\uFFFF]/g,function(e){return"\\u"+t(e)})}var r,i,o,A=new Array(e.length)
for(o=0;o<e.length;o++)A[o]=e[o].description
return r=e.length>1?A.slice(0,-1).join(", ")+" or "+A[e.length-1]:A[0],i=t?'"'+n(t)+'"':"end of input","Expected "+r+" but "+i+" found."}return null!==n&&o(n),new t(null!==e?e:A(n,r),n,r,i)}function A(){var t,n,r,o
return t=je,e.substr(je,8)===k?(n=k,je+=8):(n=T,0===Ze&&i(P)),n!==T?(r=a(),r===T&&(r=s()),r!==T?(41===e.charCodeAt(je)?(o=Q,je++):(o=T,0===Ze&&i(F)),o!==T?(We=t,n=G(r),t=n):(je=t,t=T)):(je=t,t=T)):(je=t,t=T),t}function a(){var t,n,r,o,A,a,s
return t=je,n=l(),n!==T?(r=c(),r!==T?(44===e.charCodeAt(je)?(o=M,je++):(o=T,0===Ze&&i(L)),o!==T?(A=c(),A!==T?(44===e.charCodeAt(je)?(a=M,je++):(a=T,0===Ze&&i(L)),a!==T?(s=c(),s!==T?(We=t,n=U(n,r,A,s),t=n):(je=t,t=T)):(je=t,t=T)):(je=t,t=T)):(je=t,t=T)):(je=t,t=T)):(je=t,t=T),t}function s(){var e,t,n
return e=je,t=l(),t!==T?(n=c(),n!==T?(We=e,t=H(t,n),e=t):(je=e,e=T)):(je=e,e=T),e}function c(){var e,t,n
if(e=je,t=[],n=l(),n===T&&(n=u()),n!==T)for(;n!==T;)t.push(n),n=l(),n===T&&(n=u())
else t=T
return t!==T?(n=d(),n===T&&(n=null),n!==T?(We=e,t=z(t,n),e=t):(je=e,e=T)):(je=e,e=T),e}function l(){var t,n,r,o,A,a,s
return t=je,47===e.charCodeAt(je)?(n=j,je++):(n=T,0===Ze&&i(W)),n!==T?(r=w(),r!==T?(o=je,91===e.charCodeAt(je)?(A=V,je++):(A=T,0===Ze&&i(Y)),A!==T?(a=f(),a!==T?(93===e.charCodeAt(je)?(s=q,je++):(s=T,0===Ze&&i(Z)),s!==T?(A=[A,a,s],o=A):(je=o,o=T)):(je=o,o=T)):(je=o,o=T),o===T&&(o=null),o!==T?(We=t,n=J(r,o),t=n):(je=t,t=T)):(je=t,t=T)):(je=t,t=T),t}function u(){var t,n,r,o,A,a,s
return t=je,e.substr(je,2)===K?(n=K,je+=2):(n=T,0===Ze&&i(X)),n!==T?(r=w(),r!==T?(o=je,91===e.charCodeAt(je)?(A=V,je++):(A=T,0===Ze&&i(Y)),A!==T?(a=f(),a!==T?(93===e.charCodeAt(je)?(s=q,je++):(s=T,0===Ze&&i(Z)),s!==T?(A=[A,a,s],o=A):(je=o,o=T)):(je=o,o=T)):(je=o,o=T),o===T&&(o=null),o!==T?(We=t,n=$(r,o),t=n):(je=t,t=T)):(je=t,t=T)):(je=t,t=T),t}function d(){var t,n,r,o,A,a,s
return t=je,58===e.charCodeAt(je)?(n=ee,je++):(n=T,0===Ze&&i(te)),n!==T?(r=w(),r!==T?(o=je,91===e.charCodeAt(je)?(A=V,je++):(A=T,0===Ze&&i(Y)),A!==T?(a=h(),a!==T?(93===e.charCodeAt(je)?(s=q,je++):(s=T,0===Ze&&i(Z)),s!==T?(A=[A,a,s],o=A):(je=o,o=T)):(je=o,o=T)):(je=o,o=T),o===T&&(o=null),o!==T?(We=t,n=ne(r,o),t=n):(je=t,t=T)):(je=t,t=T)):(je=t,t=T),t}function f(){var e,t
return e=je,t=v(),t!==T&&(We=e,t=re(t)),e=t}function h(){var e,t,n
return e=je,t=g(),t===T&&(t=null),t!==T?(n=p(),n===T&&(n=null),n!==T?(We=e,t=ie(t,n),e=t):(je=e,e=T)):(je=e,e=T),e}function p(){var t,n,r,o,A
return t=je,59===e.charCodeAt(je)?(n=oe,je++):(n=T,0===Ze&&i(Ae)),n!==T?(r=m(),r!==T?(61===e.charCodeAt(je)?(o=ae,je++):(o=T,0===Ze&&i(se)),o!==T?(A=m(),A!==T?(We=t,n=ce(r,A),t=n):(je=t,t=T)):(je=t,t=T)):(je=t,t=T)):(je=t,t=T),t}function g(){var t,n,r,o
return t=je,n=v(),n===T&&(n=null),n!==T?(44===e.charCodeAt(je)?(r=M,je++):(r=T,0===Ze&&i(L)),r!==T?(o=v(),o===T&&(o=null),o!==T?(We=t,n=le(n,o),t=n):(je=t,t=T)):(je=t,t=T)):(je=t,t=T),t}function m(){var e,t,n
if(e=je,t=[],n=y(),n===T&&(n=O()),n!==T)for(;n!==T;)t.push(n),n=y(),n===T&&(n=O())
else t=T
return t!==T&&(We=e,t=ue(t)),e=t}function v(){var e,t,n
if(e=je,t=[],n=y(),n===T&&(n=O(),n===T&&(n=B())),n!==T)for(;n!==T;)t.push(n),n=y(),n===T&&(n=O(),n===T&&(n=B()))
else t=T
return t!==T&&(We=e,t=ue(t)),e=t}function y(){var e,t,n,r
return e=je,t=je,n=b(),n!==T?(r=b(),r!==T?(n=[n,r],t=n):(je=t,t=T)):(je=t,t=T),t===T&&(t=je,n=b(),n!==T?(r=x(),r!==T?(n=[n,r],t=n):(je=t,t=T)):(je=t,t=T),t===T&&(t=je,n=b(),n!==T?(r=E(),r!==T?(n=[n,r],t=n):(je=t,t=T)):(je=t,t=T),t===T&&(t=je,n=b(),n!==T?(r=C(),r!==T?(n=[n,r],t=n):(je=t,t=T)):(je=t,t=T),t===T&&(t=je,n=b(),n!==T?(r=S(),r!==T?(n=[n,r],t=n):(je=t,t=T)):(je=t,t=T),t===T&&(t=je,n=b(),n!==T?(r=I(),r!==T?(n=[n,r],t=n):(je=t,t=T)):(je=t,t=T)))))),t!==T&&(We=e,t=de(t)),e=t}function w(){var t,n,r,o,A
if(t=je,48===e.charCodeAt(je)?(n=ye,je++):(n=T,0===Ze&&i(we)),n===T)if(n=je,fe.test(e.charAt(je))?(r=e.charAt(je),je++):(r=T,0===Ze&&i(he)),r!==T){for(o=[],pe.test(e.charAt(je))?(A=e.charAt(je),je++):(A=T,0===Ze&&i(ge));A!==T;)o.push(A),pe.test(e.charAt(je))?(A=e.charAt(je),je++):(A=T,0===Ze&&i(ge))
o!==T?(r=[r,o],n=r):(je=n,n=T)}else je=n,n=T
return n!==T&&(We=t,n=Be(n)),t=n}function B(){var t,n
return t=je,32===e.charCodeAt(je)?(n=be,je++):(n=T,0===Ze&&i(xe)),n!==T&&(We=t,n=Ee()),t=n}function b(){var t,n
return t=je,94===e.charCodeAt(je)?(n=Ce,je++):(n=T,0===Ze&&i(Se)),n!==T&&(We=t,n=Ie()),t=n}function x(){var t,n
return t=je,91===e.charCodeAt(je)?(n=V,je++):(n=T,0===Ze&&i(Y)),n===T&&(93===e.charCodeAt(je)?(n=q,je++):(n=T,0===Ze&&i(Z))),n!==T&&(We=t,n=Oe(n)),t=n}function E(){var t,n
return t=je,40===e.charCodeAt(je)?(n=De,je++):(n=T,0===Ze&&i(_e)),n===T&&(41===e.charCodeAt(je)?(n=Q,je++):(n=T,0===Ze&&i(F))),n!==T&&(We=t,n=Te(n)),t=n}function C(){var t,n
return t=je,44===e.charCodeAt(je)?(n=M,je++):(n=T,0===Ze&&i(L)),n!==T&&(We=t,n=Re()),t=n}function S(){var t,n
return t=je,59===e.charCodeAt(je)?(n=oe,je++):(n=T,0===Ze&&i(Ae)),n!==T&&(We=t,n=Ne()),t=n}function I(){var t,n
return t=je,61===e.charCodeAt(je)?(n=ae,je++):(n=T,0===Ze&&i(se)),n!==T&&(We=t,n=ke()),t=n}function O(){var t,n
return t=je,Pe.test(e.charAt(je))?(n=e.charAt(je),je++):(n=T,0===Ze&&i(Qe)),n===T&&(Fe.test(e.charAt(je))?(n=e.charAt(je),je++):(n=T,0===Ze&&i(Ge)),n===T&&(pe.test(e.charAt(je))?(n=e.charAt(je),je++):(n=T,0===Ze&&i(ge)),n===T&&(45===e.charCodeAt(je)?(n=Me,je++):(n=T,0===Ze&&i(Le)),n===T&&(95===e.charCodeAt(je)?(n=Ue,je++):(n=T,0===Ze&&i(He)),n===T&&(46===e.charCodeAt(je)?(n=me,je++):(n=T,0===Ze&&i(ve))))))),n!==T&&(We=t,n=ze(n)),t=n}var D,_=arguments.length>1?arguments[1]:{},T={},R={fragment:A},N=A,k="epubcfi(",P={type:"literal",value:"epubcfi(",description:'"epubcfi("'},Q=")",F={type:"literal",value:")",description:'")"'},G=function(e){return{type:"CFIAST",cfiString:e}},M=",",L={type:"literal",value:",",description:'","'},U=function(e,t,n,r){return{type:"range",path:e,localPath:t,range1:n,range2:r}},H=function(e,t){return{type:"path",path:e,localPath:t}},z=function(e,t){return{steps:e,termStep:t?t:""}},j="/",W={type:"literal",value:"/",description:'"/"'},V="[",Y={type:"literal",value:"[",description:'"["'},q="]",Z={type:"literal",value:"]",description:'"]"'},J=function(e,t){return{type:"indexStep",stepLength:e,idAssertion:t?t[1]:void 0}},K="!/",X={type:"literal",value:"!/",description:'"!/"'},$=function(e,t){return{type:"indirectionStep",stepLength:e,idAssertion:t?t[1]:void 0}},ee=":",te={type:"literal",value:":",description:'":"'},ne=function(e,t){return{type:"textTerminus",offsetValue:e,textAssertion:t?t[1]:void 0}},re=function(e){return e},ie=function(e,t){return{type:"textLocationAssertion",csv:e?e:"",parameter:t?t:""}},oe=";",Ae={type:"literal",value:";",description:'";"'},ae="=",se={type:"literal",value:"=",description:'"="'},ce=function(e,t){return{type:"parameter",LHSValue:e?e:"",RHSValue:t?t:""}},le=function(e,t){return{type:"csv",preAssertion:e?e:"",postAssertion:t?t:""}},ue=function(e){return e.join("")},de=function(e){return e[1]},fe=/^[1-9]/,he={type:"class",value:"[1-9]",description:"[1-9]"},pe=/^[0-9]/,ge={type:"class",value:"[0-9]",description:"[0-9]"},me=".",ve={type:"literal",value:".",description:'"."'},ye="0",we={type:"literal",value:"0",description:'"0"'},Be=function(e){return"0"===e?"0":e[0].concat(e[1].join(""))},be=" ",xe={type:"literal",value:" ",description:'" "'},Ee=function(){return" "},Ce="^",Se={type:"literal",value:"^",description:'"^"'},Ie=function(){return"^"},Oe=function(e){return e},De="(",_e={type:"literal",value:"(",description:'"("'},Te=function(e){return e},Re=function(){return","},Ne=function(){return";"},ke=function(){return"="},Pe=/^[a-z]/,Qe={type:"class",value:"[a-z]",description:"[a-z]"},Fe=/^[A-Z]/,Ge={type:"class",value:"[A-Z]",description:"[A-Z]"},Me="-",Le={type:"literal",value:"-",description:'"-"'},Ue="_",He={type:"literal",value:"_",description:'"_"'},ze=function(e){return e},je=0,We=0,Ve=[{line:1,column:1,seenCR:!1}],Ye=0,qe=[],Ze=0
if("startRule"in _){if(!(_.startRule in R))throw new Error("Can't start parsing from rule \""+_.startRule+'".')
N=R[_.startRule]}if(D=N(),D!==T&&je===e.length)return D
throw D!==T&&je<e.length&&i({type:"end",description:"end of input"}),o(null,qe,Ye<e.length?e.charAt(Ye):null,Ye<e.length?r(Ye,Ye+1):r(Ye,Ye))}return e(t,Error),{SyntaxError:t,parse:n}}(),define("readium_cfi_js/cfi_parser",function(e){return function(){var t
return t||e.EPUBcfiParser}}(this)),function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=oe.type(e)
return"function"===n||oe.isWindow(e)?!1:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,r){return!!t.call(e,r,e)!==n})
if(t.nodeType)return oe.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(pe.test(t))return oe.filter(t,e,n)
t=oe.filter(t,e)}return oe.grep(e,function(e){return $.call(t,e)>-1!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t={}
return oe.each(e.match(Be)||[],function(e,n){t[n]=!0}),t}function A(){Z.removeEventListener("DOMContentLoaded",A),e.removeEventListener("load",A),oe.ready()}function a(){this.expando=oe.expando+a.uid++}function s(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Oe,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Ie.test(n)?oe.parseJSON(n):n}catch(i){}Se.set(e,t,n)}else n=void 0
return n}function c(e,t,n,r){var i,o=1,A=20,a=r?function(){return r.cur()}:function(){return oe.css(e,t,"")},s=a(),c=n&&n[3]||(oe.cssNumber[t]?"":"px"),l=(oe.cssNumber[t]||"px"!==c&&+s)&&_e.exec(oe.css(e,t))
if(l&&l[3]!==c){c=c||l[3],n=n||[],l=+s||1
do o=o||".5",l/=o,oe.style(e,t,l+c)
while(o!==(o=a()/s)&&1!==o&&--A)}return n&&(l=+l||+s||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}function l(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],n):n}function u(e,t){for(var n=0,r=e.length;r>n;n++)Ce.set(e[n],"globalEval",!t||Ce.get(t[n],"globalEval"))}function d(e,t,n,r,i){for(var o,A,a,s,c,d,f=t.createDocumentFragment(),h=[],p=0,g=e.length;g>p;p++)if(o=e[p],o||0===o)if("object"===oe.type(o))oe.merge(h,o.nodeType?[o]:o)
else if(Fe.test(o)){for(A=A||f.appendChild(t.createElement("div")),a=(ke.exec(o)||["",""])[1].toLowerCase(),s=Qe[a]||Qe._default,A.innerHTML=s[1]+oe.htmlPrefilter(o)+s[2],d=s[0];d--;)A=A.lastChild
oe.merge(h,A.childNodes),A=f.firstChild,A.textContent=""}else h.push(t.createTextNode(o))
for(f.textContent="",p=0;o=h[p++];)if(r&&oe.inArray(o,r)>-1)i&&i.push(o)
else if(c=oe.contains(o.ownerDocument,o),A=l(f.appendChild(o),"script"),c&&u(A),n)for(d=0;o=A[d++];)Pe.test(o.type||"")&&n.push(o)
return f}function f(){return!0}function h(){return!1}function p(){try{return Z.activeElement}catch(e){}}function g(e,t,n,r,i,o){var A,a
if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0)
for(a in t)g(e,a,n,r,t[a],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=h
else if(!i)return e
return 1===o&&(A=i,i=function(e){return oe().off(e),A.apply(this,arguments)},i.guid=A.guid||(A.guid=oe.guid++)),e.each(function(){oe.event.add(this,t,i,r,n)})}function m(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function v(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function y(e){var t=je.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function w(e,t){var n,r,i,o,A,a,s,c
if(1===t.nodeType){if(Ce.hasData(e)&&(o=Ce.access(e),A=Ce.set(t,o),c=o.events)){delete A.handle,A.events={}
for(i in c)for(n=0,r=c[i].length;r>n;n++)oe.event.add(t,i,c[i][n])}Se.hasData(e)&&(a=Se.access(e),s=oe.extend({},a),Se.set(t,s))}}function B(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Ne.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function b(e,t,n,r){t=K.apply([],t)
var i,o,A,a,s,c,u=0,f=e.length,h=f-1,p=t[0],g=oe.isFunction(p)
if(g||f>1&&"string"==typeof p&&!re.checkClone&&ze.test(p))return e.each(function(i){var o=e.eq(i)
g&&(t[0]=p.call(this,i,o.html())),b(o,t,n,r)})
if(f&&(i=d(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(A=oe.map(l(i,"script"),v),a=A.length;f>u;u++)s=i,u!==h&&(s=oe.clone(s,!0,!0),a&&oe.merge(A,l(s,"script"))),n.call(e[u],s,u)
if(a)for(c=A[A.length-1].ownerDocument,oe.map(A,y),u=0;a>u;u++)s=A[u],Pe.test(s.type||"")&&!Ce.access(s,"globalEval")&&oe.contains(c,s)&&(s.src?oe._evalUrl&&oe._evalUrl(s.src):oe.globalEval(s.textContent.replace(We,"")))}return e}function x(e,t,n){for(var r,i=t?oe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||oe.cleanData(l(r)),r.parentNode&&(n&&oe.contains(r.ownerDocument,r)&&u(l(r,"script")),r.parentNode.removeChild(r))
return e}function E(e,t){var n=oe(t.createElement(e)).appendTo(t.body),r=oe.css(n[0],"display")
return n.detach(),r}function C(e){var t=Z,n=Ye[e]
return n||(n=E(e,t),"none"!==n&&n||(Ve=(Ve||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ve[0].contentDocument,t.write(),t.close(),n=E(e,t),Ve.detach()),Ye[e]=n),n}function S(e,t,n){var r,i,o,A,a=e.style
return n=n||Je(e),A=n?n.getPropertyValue(t)||n[t]:void 0,""!==A&&void 0!==A||oe.contains(e.ownerDocument,e)||(A=oe.style(e,t)),n&&!re.pixelMarginRight()&&Ze.test(A)&&qe.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=A,A=n.width,a.width=r,a.minWidth=i,a.maxWidth=o),void 0!==A?A+"":A}function I(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function O(e){if(e in rt)return e
for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in rt)return e}function D(e,t,n){var r=_e.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function _(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,A=0;4>o;o+=2)"margin"===n&&(A+=oe.css(e,n+Te[o],!0,i)),r?("content"===n&&(A-=oe.css(e,"padding"+Te[o],!0,i)),"margin"!==n&&(A-=oe.css(e,"border"+Te[o]+"Width",!0,i))):(A+=oe.css(e,"padding"+Te[o],!0,i),"padding"!==n&&(A+=oe.css(e,"border"+Te[o]+"Width",!0,i)))
return A}function T(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Je(e),A="border-box"===oe.css(e,"boxSizing",!1,o)
if(0>=i||null==i){if(i=S(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ze.test(i))return i
r=A&&(re.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+_(e,t,n||(A?"border":"content"),r,o)+"px"}function R(e,t){for(var n,r,i,o=[],A=0,a=e.length;a>A;A++)r=e[A],r.style&&(o[A]=Ce.get(r,"olddisplay"),n=r.style.display,t?(o[A]||"none"!==n||(r.style.display=""),""===r.style.display&&Re(r)&&(o[A]=Ce.access(r,"olddisplay",C(r.nodeName)))):(i=Re(r),"none"===n&&i||Ce.set(r,"olddisplay",i?n:oe.css(r,"display"))))
for(A=0;a>A;A++)r=e[A],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[A]||"":"none"))
return e}function N(e,t,n,r,i){return new N.prototype.init(e,t,n,r,i)}function k(){return e.setTimeout(function(){it=void 0}),it=oe.now()}function P(e,t){var n,r=0,i={height:e}
for(t=t?1:0;4>r;r+=2-t)n=Te[r],i["margin"+n]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function Q(e,t,n){for(var r,i=(M.tweeners[t]||[]).concat(M.tweeners["*"]),o=0,A=i.length;A>o;o++)if(r=i[o].call(n,t,e))return r}function F(e,t,n){var r,i,o,A,a,s,c,l,u=this,d={},f=e.style,h=e.nodeType&&Re(e),p=Ce.get(e,"fxshow")
n.queue||(a=oe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,oe.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],c=oe.css(e,"display"),l="none"===c?Ce.get(e,"olddisplay")||C(e.nodeName):c,"inline"===l&&"none"===oe.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",u.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))
for(r in t)if(i=t[r],At.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!p||void 0===p[r])continue
h=!0}d[r]=p&&p[r]||oe.style(e,r)}else c=void 0
if(oe.isEmptyObject(d))"inline"===("none"===c?C(e.nodeName):c)&&(f.display=c)
else{p?"hidden"in p&&(h=p.hidden):p=Ce.access(e,"fxshow",{}),o&&(p.hidden=!h),h?oe(e).show():u.done(function(){oe(e).hide()}),u.done(function(){var t
Ce.remove(e,"fxshow")
for(t in d)oe.style(e,t,d[t])})
for(r in d)A=Q(h?p[r]:0,r,u),r in p||(p[r]=A.start,h&&(A.end=A.start,A.start="width"===r||"height"===r?1:0))}}function G(e,t){var n,r,i,o,A
for(n in e)if(r=oe.camelCase(n),i=t[r],o=e[n],oe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),A=oe.cssHooks[r],A&&"expand"in A){o=A.expand(o),delete e[r]
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function M(e,t,n){var r,i,o=0,A=M.prefilters.length,a=oe.Deferred().always(function(){delete s.elem}),s=function(){if(i)return!1
for(var t=it||k(),n=Math.max(0,c.startTime+c.duration-t),r=n/c.duration||0,o=1-r,A=0,s=c.tweens.length;s>A;A++)c.tweens[A].run(o)
return a.notifyWith(e,[c,o,n]),1>o&&s?n:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{},easing:oe.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||k(),duration:n.duration,tweens:[],createTween:function(t,n){var r=oe.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing)
return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0
if(i)return this
for(i=!0;r>n;n++)c.tweens[n].run(1)
return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),l=c.props
for(G(l,c.opts.specialEasing);A>o;o++)if(r=M.prefilters[o].call(c,e,l,c.opts))return oe.isFunction(r.stop)&&(oe._queueHooks(c.elem,c.opts.queue).stop=oe.proxy(r.stop,r)),r
return oe.map(l,Q,c),oe.isFunction(c.opts.start)&&c.opts.start.call(e,c),oe.fx.timer(oe.extend(s,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function L(e){return e.getAttribute&&e.getAttribute("class")||""}function U(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(Be)||[]
if(oe.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function H(e,t,n,r){function i(a){var s
return o[a]=!0,oe.each(e[a]||[],function(e,a){var c=a(t,n,r)
return"string"!=typeof c||A||o[c]?A?!(s=c):void 0:(t.dataTypes.unshift(c),i(c),!1)}),s}var o={},A=e===St
return i(t.dataTypes[0])||!o["*"]&&i("*")}function z(e,t){var n,r,i=oe.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&oe.extend(!0,e,r),e}function j(e,t,n){for(var r,i,o,A,a=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){s.unshift(i)
break}if(s[0]in n)o=s[0]
else{for(i in n){if(!s[0]||e.converters[i+" "+s[0]]){o=i
break}A||(A=i)}o=o||A}return o?(o!==s[0]&&s.unshift(o),n[o]):void 0}function W(e,t,n,r){var i,o,A,a,s,c={},l=e.dataTypes.slice()
if(l[1])for(A in e.converters)c[A.toLowerCase()]=e.converters[A]
for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!s&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=o,o=l.shift())if("*"===o)o=s
else if("*"!==s&&s!==o){if(A=c[s+" "+o]||c["* "+o],!A)for(i in c)if(a=i.split(" "),a[1]===o&&(A=c[s+" "+a[0]]||c["* "+a[0]])){A===!0?A=c[i]:c[i]!==!0&&(o=a[0],l.unshift(a[1]))
break}if(A!==!0)if(A&&e["throws"])t=A(t)
else try{t=A(t)}catch(u){return{state:"parsererror",error:A?u:"No conversion from "+s+" to "+o}}}return{state:"success",data:t}}function V(e,t,n,r){var i
if(oe.isArray(t))oe.each(t,function(t,i){n||_t.test(e)?r(e,i):V(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)})
else if(n||"object"!==oe.type(t))r(e,t)
else for(i in t)V(e+"["+i+"]",t[i],n,r)}function Y(e){return oe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var q=[],Z=e.document,J=q.slice,K=q.concat,X=q.push,$=q.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,re={},ie="2.2.4",oe=function(e,t){return new oe.fn.init(e,t)},Ae=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,se=/-([\da-z])/gi,ce=function(e,t){return t.toUpperCase()}
oe.fn=oe.prototype={jquery:ie,constructor:oe,selector:"",length:0,toArray:function(){return J.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:J.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e){return oe.each(this,e)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(J.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0)
return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:X,sort:q.sort,splice:q.splice},oe.extend=oe.fn.extend=function(){var e,t,n,r,i,o,A=arguments[0]||{},a=1,s=arguments.length,c=!1
for("boolean"==typeof A&&(c=A,A=arguments[a]||{},a++),"object"==typeof A||oe.isFunction(A)||(A={}),a===s&&(A=this,a--);s>a;a++)if(null!=(e=arguments[a]))for(t in e)n=A[t],r=e[t],A!==r&&(c&&r&&(oe.isPlainObject(r)||(i=oe.isArray(r)))?(i?(i=!1,o=n&&oe.isArray(n)?n:[]):o=n&&oe.isPlainObject(n)?n:{},A[t]=oe.extend(c,o,r)):void 0!==r&&(A[t]=r))
return A},oe.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString()
return!oe.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t
if("object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1
if(e.constructor&&!ne.call(e,"constructor")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1
for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=oe.trim(e),e&&(1===e.indexOf("use strict")?(t=Z.createElement("script"),t.text=e,Z.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(se,ce)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var r,i=0
if(n(e))for(r=e.length;r>i&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break
return e},trim:function(e){return null==e?"":(e+"").replace(Ae,"")},makeArray:function(e,t){var r=t||[]
return null!=e&&(n(Object(e))?oe.merge(r,"string"==typeof e?[e]:e):X.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:$.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,A=e.length,a=!n;A>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o])
return i},map:function(e,t,r){var i,o,A=0,a=[]
if(n(e))for(i=e.length;i>A;A++)o=t(e[A],A,r),null!=o&&a.push(o)
else for(A in e)o=t(e[A],A,r),null!=o&&a.push(o)
return K.apply([],a)},guid:1,proxy:function(e,t){var n,r,i
return"string"==typeof t&&(n=e[t],t=e,e=n),oe.isFunction(e)?(r=J.call(arguments,2),i=function(){return e.apply(t||this,r.concat(J.call(arguments)))},i.guid=e.guid=e.guid||oe.guid++,i):void 0},now:Date.now,support:re}),"function"==typeof Symbol&&(oe.fn[Symbol.iterator]=q[Symbol.iterator]),oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()})
var le=function(e){function t(e,t,n,r){var i,o,A,a,s,c,u,f,h=t&&t.ownerDocument,p=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n
if(!r&&((t?t.ownerDocument||t:L)!==R&&T(t),t=t||R,k)){if(11!==p&&(c=me.exec(e)))if(i=c[1]){if(9===p){if(!(A=t.getElementById(i)))return n
if(A.id===i)return n.push(A),n}else if(h&&(A=h.getElementById(i))&&G(t,A)&&A.id===i)return n.push(A),n}else{if(c[2])return X.apply(n,t.getElementsByTagName(e)),n
if((i=c[3])&&B.getElementsByClassName&&t.getElementsByClassName)return X.apply(n,t.getElementsByClassName(i)),n}if(B.qsa&&!W[e+" "]&&(!P||!P.test(e))){if(1!==p)h=t,f=e
else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(ye,"\\$&"):t.setAttribute("id",a=M),u=C(e),o=u.length,s=de.test(a)?"#"+a:"[id='"+a+"']";o--;)u[o]=s+" "+d(u[o])
f=u.join(","),h=ve.test(e)&&l(t.parentNode)||t}if(f)try{return X.apply(n,h.querySelectorAll(f)),n}catch(g){}finally{a===M&&t.removeAttribute("id")}}}return I(e.replace(ae,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[]
return e}function r(e){return e[M]=!0,e}function i(e){var t=R.createElement("div")
try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function A(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Y)-(~e.sourceIndex||Y)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase()
return"input"===n&&t.type===e}}function s(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),A=o.length;A--;)n[i=o[A]]&&(n[i]=!(r[i]=n[i]))})})}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function u(){}function d(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value
return r}function f(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=H++
return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,A){var a,s,c,l=[U,o]
if(A){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,A))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(c=t[M]||(t[M]={}),s=c[t.uniqueID]||(c[t.uniqueID]={}),(a=s[r])&&a[0]===U&&a[1]===o)return l[2]=a[2]
if(s[r]=l,l[2]=e(t,n,A))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function p(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r)
return r}function g(e,t,n,r,i){for(var o,A=[],a=0,s=e.length,c=null!=t;s>a;a++)(o=e[a])&&(n&&!n(o,r,i)||(A.push(o),c&&t.push(a)))
return A}function m(e,t,n,i,o,A){return i&&!i[M]&&(i=m(i)),o&&!o[M]&&(o=m(o,A)),r(function(r,A,a,s){var c,l,u,d=[],f=[],h=A.length,m=r||p(t||"*",a.nodeType?[a]:a,[]),v=!e||!r&&t?m:g(m,d,e,a,s),y=n?o||(r?e:h||i)?[]:A:v
if(n&&n(v,y,a,s),i)for(c=g(y,f),i(c,[],a,s),l=c.length;l--;)(u=c[l])&&(y[f[l]]=!(v[f[l]]=u))
if(r){if(o||e){if(o){for(c=[],l=y.length;l--;)(u=y[l])&&c.push(v[l]=u)
o(null,y=[],c,s)}for(l=y.length;l--;)(u=y[l])&&(c=o?ee(r,u):d[l])>-1&&(r[c]=!(A[c]=u))}}else y=g(y===A?y.splice(h,y.length):y),o?o(null,A,y,s):X.apply(A,y)})}function v(e){for(var t,n,r,i=e.length,o=b.relative[e[0].type],A=o||b.relative[" "],a=o?1:0,s=f(function(e){return e===t},A,!0),c=f(function(e){return ee(t,e)>-1},A,!0),l=[function(e,n,r){var i=!o&&(r||n!==O)||((t=n).nodeType?s(e,n,r):c(e,n,r))
return t=null,i}];i>a;a++)if(n=b.relative[e[a].type])l=[f(h(l),n)]
else{if(n=b.filter[e[a].type].apply(null,e[a].matches),n[M]){for(r=++a;i>r&&!b.relative[e[r].type];r++);return m(a>1&&h(l),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,r>a&&v(e.slice(a,r)),i>r&&v(e=e.slice(r)),i>r&&d(e))}l.push(n)}return h(l)}function y(e,n){var i=n.length>0,o=e.length>0,A=function(r,A,a,s,c){var l,u,d,f=0,h="0",p=r&&[],m=[],v=O,y=r||o&&b.find.TAG("*",c),w=U+=null==v?1:Math.random()||.1,B=y.length
for(c&&(O=A===R||A||c);h!==B&&null!=(l=y[h]);h++){if(o&&l){for(u=0,A||l.ownerDocument===R||(T(l),a=!k);d=e[u++];)if(d(l,A||R,a)){s.push(l)
break}c&&(U=w)}i&&((l=!d&&l)&&f--,r&&p.push(l))}if(f+=h,i&&h!==f){for(u=0;d=n[u++];)d(p,m,A,a)
if(r){if(f>0)for(;h--;)p[h]||m[h]||(m[h]=J.call(s))
m=g(m)}X.apply(s,m),c&&!r&&m.length>0&&f+n.length>1&&t.uniqueSort(s)}return c&&(U=w,O=v),p}
return i?r(A):A}var w,B,b,x,E,C,S,I,O,D,_,T,R,N,k,P,Q,F,G,M="sizzle"+1*new Date,L=e.document,U=0,H=0,z=n(),j=n(),W=n(),V=function(e,t){return e===t&&(_=!0),0},Y=1<<31,q={}.hasOwnProperty,Z=[],J=Z.pop,K=Z.push,X=Z.push,$=Z.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n
return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",Ae=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),se=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),le=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),ue=new RegExp(oe),de=new RegExp("^"+re+"$"),fe={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,ye=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Be=function(e,t,n){var r="0x"+t-65536
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},be=function(){T()}
try{X.apply(Z=$.call(L.childNodes),L.childNodes),Z[L.childNodes.length].nodeType}catch(xe){X={apply:Z.length?function(e,t){K.apply(e,$.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}B=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?"HTML"!==t.nodeName:!1},T=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:L
return r!==R&&9===r.nodeType&&r.documentElement?(R=r,N=R.documentElement,k=!E(R),(n=R.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",be,!1):n.attachEvent&&n.attachEvent("onunload",be)),B.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),B.getElementsByTagName=i(function(e){return e.appendChild(R.createComment("")),!e.getElementsByTagName("*").length}),B.getElementsByClassName=ge.test(R.getElementsByClassName),B.getById=i(function(e){return N.appendChild(e).id=M,!R.getElementsByName||!R.getElementsByName(M).length}),B.getById?(b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&k){var n=t.getElementById(e)
return n?[n]:[]}},b.filter.ID=function(e){var t=e.replace(we,Be)
return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(we,Be)
return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),b.find.TAG=B.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):B.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},b.find.CLASS=B.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&k?t.getElementsByClassName(e):void 0},Q=[],P=[],(B.qsa=ge.test(R.querySelectorAll))&&(i(function(e){N.appendChild(e).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+M+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+M+"+*").length||P.push(".#.+[+~]")}),i(function(e){var t=R.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(B.matchesSelector=ge.test(F=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&i(function(e){B.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),Q.push("!=",oe)}),P=P.length&&new RegExp(P.join("|")),Q=Q.length&&new RegExp(Q.join("|")),t=ge.test(N.compareDocumentPosition),G=t||ge.test(N.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},V=t?function(e,t){if(e===t)return _=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!B.sortDetached&&t.compareDocumentPosition(e)===n?e===R||e.ownerDocument===L&&G(L,e)?-1:t===R||t.ownerDocument===L&&G(L,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return _=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t]
if(!i||!o)return e===R?-1:t===R?1:i?-1:o?1:D?ee(D,e)-ee(D,t):0
if(i===o)return A(e,t)
for(n=e;n=n.parentNode;)a.unshift(n)
for(n=t;n=n.parentNode;)s.unshift(n)
for(;a[r]===s[r];)r++
return r?A(a[r],s[r]):a[r]===L?-1:s[r]===L?1:0},R):R},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==R&&T(e),n=n.replace(le,"='$1']"),B.matchesSelector&&k&&!W[n+" "]&&(!Q||!Q.test(n))&&(!P||!P.test(n)))try{var r=F.call(e,n)
if(r||B.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,R,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==R&&T(e),G(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==R&&T(e)
var n=b.attrHandle[t.toLowerCase()],r=n&&q.call(b.attrHandle,t.toLowerCase())?n(e,t,!k):void 0
return void 0!==r?r:B.attributes||!k?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0
if(_=!B.detectDuplicates,D=!B.sortStable&&e.slice(0),e.sort(V),_){for(;t=e[i++];)t===e[i]&&(r=n.push(i))
for(;r--;)e.splice(n[r],1)}return D=null,e},x=t.getText=function(e){var t,n="",r=0,i=e.nodeType
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=x(t)
return n},b=t.selectors={cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Be),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Be).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "]
return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e)
return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(Ae," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),A="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,s){var c,l,u,d,f,h,p=o!==A?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),v=!s&&!a,y=!1
if(g){if(o){for(;p;){for(d=t;d=d[p];)if(a?d.nodeName.toLowerCase()===m:1===d.nodeType)return!1
h=p="only"===e&&!h&&"nextSibling"}return!0}if(h=[A?g.firstChild:g.lastChild],A&&v){for(d=g,u=d[M]||(d[M]={}),l=u[d.uniqueID]||(u[d.uniqueID]={}),c=l[e]||[],f=c[0]===U&&c[1],y=f&&c[2],d=f&&g.childNodes[f];d=++f&&d&&d[p]||(y=f=0)||h.pop();)if(1===d.nodeType&&++y&&d===t){l[e]=[U,f,y]
break}}else if(v&&(d=t,u=d[M]||(d[M]={}),l=u[d.uniqueID]||(u[d.uniqueID]={}),c=l[e]||[],f=c[0]===U&&c[1],y=f),y===!1)for(;(d=++f&&d&&d[p]||(y=f=0)||h.pop())&&((a?d.nodeName.toLowerCase()!==m:1!==d.nodeType)||!++y||(v&&(u=d[M]||(d[M]={}),l=u[d.uniqueID]||(u[d.uniqueID]={}),l[e]=[U,y]),d!==t)););return y-=i,y===r||y%r===0&&y/r>=0}}},PSEUDO:function(e,n){var i,o=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return o[M]?o(n):o.length>1?(i=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),A=i.length;A--;)r=ee(e,i[A]),e[r]=!(t[r]=i[A])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(ae,"$1"))
return i[M]?r(function(e,t,n,r){for(var o,A=i(e,null,r,[]),a=e.length;a--;)(o=A[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Be),function(t){return(t.textContent||t.innerText||x(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Be).toLowerCase(),function(t){var n
do if(n=k?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===N},focus:function(e){return e===R.activeElement&&(!R.hasFocus||R.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return pe.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n)
return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n)
return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r)
return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r)
return e})}},b.pseudos.nth=b.pseudos.eq
for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[w]=a(w)
for(w in{submit:!0,reset:!0})b.pseudos[w]=s(w)
return u.prototype=b.filters=b.pseudos,b.setFilters=new u,C=t.tokenize=function(e,n){var r,i,o,A,a,s,c,l=j[e+" "]
if(l)return n?0:l.slice(0)
for(a=e,s=[],c=b.preFilter;a;){r&&!(i=se.exec(a))||(i&&(a=a.slice(i[0].length)||a),s.push(o=[])),r=!1,(i=ce.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ae," ")}),a=a.slice(r.length))
for(A in b.filter)!(i=fe[A].exec(a))||c[A]&&!(i=c[A](i))||(r=i.shift(),o.push({value:r,type:A,matches:i}),a=a.slice(r.length))
if(!r)break}return n?a.length:a?t.error(e):j(e,s).slice(0)},S=t.compile=function(e,t){var n,r=[],i=[],o=W[e+" "]
if(!o){for(t||(t=C(e)),n=t.length;n--;)o=v(t[n]),o[M]?r.push(o):i.push(o)
o=W(e,y(i,r)),o.selector=e}return o},I=t.select=function(e,t,n,r){var i,o,A,a,s,c="function"==typeof e&&e,u=!r&&C(e=c.selector||e)
if(n=n||[],1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(A=o[0]).type&&B.getById&&9===t.nodeType&&k&&b.relative[o[1].type]){if(t=(b.find.ID(A.matches[0].replace(we,Be),t)||[])[0],!t)return n
c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=fe.needsContext.test(e)?0:o.length;i--&&(A=o[i],!b.relative[a=A.type]);)if((s=b.find[a])&&(r=s(A.matches[0].replace(we,Be),ve.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return X.apply(n,r),n
break}}return(c||S(e,u))(r,t,!k,n,!t||ve.test(e)&&l(t.parentNode)||t),n},B.sortStable=M.split("").sort(V).join("")===M,B.detectDuplicates=!!_,T(),B.sortDetached=i(function(e){return 1&e.compareDocumentPosition(R.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),B.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r
return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e)
oe.find=le,oe.expr=le.selectors,oe.expr[":"]=oe.expr.pseudos,oe.uniqueSort=oe.unique=le.uniqueSort,oe.text=le.getText,oe.isXMLDoc=le.isXML,oe.contains=le.contains
var ue=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&oe(e).is(n))break
r.push(e)}return r},de=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},fe=oe.expr.match.needsContext,he=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,pe=/^.[^:#\[\.,]*$/
oe.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?oe.find.matchesSelector(r,e)?[r]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=this.length,r=[],i=this
if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;n>t;t++)if(oe.contains(i[t],this))return!0}))
for(t=0;n>t;t++)oe.find(e,i[t],r)
return r=this.pushStack(n>1?oe.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&fe.test(e)?oe(e):e||[],!1).length}})
var ge,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ve=oe.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||ge,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:me.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:Z,!0)),he.test(r[1])&&oe.isPlainObject(t))for(r in t)oe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return i=Z.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=Z,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?void 0!==n.ready?n.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))}
ve.prototype=oe.fn,ge=oe(Z)
var ye=/^(?:parents|prev(?:Until|All))/,we={children:!0,contents:!0,next:!0,prev:!0}
oe.fn.extend({has:function(e){var t=oe(e,this),n=t.length
return this.filter(function(){for(var e=0;n>e;e++)if(oe.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],A=fe.test(e)||"string"!=typeof e?oe(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(A?A.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?oe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?$.call(oe(e),this[0]):$.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.uniqueSort(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return ue(e,"parentNode")},parentsUntil:function(e,t,n){return ue(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return ue(e,"nextSibling")},prevAll:function(e){return ue(e,"previousSibling")},nextUntil:function(e,t,n){return ue(e,"nextSibling",n)},prevUntil:function(e,t,n){return ue(e,"previousSibling",n)},siblings:function(e){return de((e.parentNode||{}).firstChild,e)},children:function(e){return de(e.firstChild)},contents:function(e){return e.contentDocument||oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,r){var i=oe.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=oe.filter(r,i)),this.length>1&&(we[e]||oe.uniqueSort(i),ye.test(e)&&i.reverse()),this.pushStack(i)}})
var Be=/\S+/g
oe.Callbacks=function(e){e="string"==typeof e?o(e):oe.extend({},e)
var t,n,r,i,A=[],a=[],s=-1,c=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<A.length;)A[s].apply(n[0],n[1])===!1&&e.stopOnFalse&&(s=A.length,n=!1)
e.memory||(n=!1),t=!1,i&&(A=n?[]:"")},l={add:function(){return A&&(n&&!t&&(s=A.length-1,a.push(n)),function r(t){oe.each(t,function(t,n){oe.isFunction(n)?e.unique&&l.has(n)||A.push(n):n&&n.length&&"string"!==oe.type(n)&&r(n)})}(arguments),n&&!t&&c()),this},remove:function(){return oe.each(arguments,function(e,t){for(var n;(n=oe.inArray(t,A,n))>-1;)A.splice(n,1),s>=n&&s--}),this},has:function(e){return e?oe.inArray(e,A)>-1:A.length>0},empty:function(){return A&&(A=[]),this},disable:function(){return i=a=[],A=n="",this},disabled:function(){return!A},lock:function(){return i=a=[],n||(A=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||c()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments
return oe.Deferred(function(n){oe.each(t,function(t,o){var A=oe.isFunction(e[t])&&e[t]
i[o[1]](function(){var e=A&&A.apply(this,arguments)
e&&oe.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,A?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,r):r}},i={}
return r.pipe=r.then,oe.each(t,function(e,o){var A=o[2],a=o[3]
r[o[1]]=A.add,a&&A.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=A.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=J.call(arguments),A=o.length,a=1!==A||e&&oe.isFunction(e.promise)?A:0,s=1===a?e:oe.Deferred(),c=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?J.call(arguments):i,r===t?s.notifyWith(n,r):--a||s.resolveWith(n,r)}}
if(A>1)for(t=new Array(A),n=new Array(A),r=new Array(A);A>i;i++)o[i]&&oe.isFunction(o[i].promise)?o[i].promise().progress(c(i,n,t)).done(c(i,r,o)).fail(s.reject):--a
return a||s.resolveWith(r,o),s.promise()}})
var be
oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){(e===!0?--oe.readyWait:oe.isReady)||(oe.isReady=!0,e!==!0&&--oe.readyWait>0||(be.resolveWith(Z,[oe]),oe.fn.triggerHandler&&(oe(Z).triggerHandler("ready"),oe(Z).off("ready"))))}}),oe.ready.promise=function(t){return be||(be=oe.Deferred(),"complete"===Z.readyState||"loading"!==Z.readyState&&!Z.documentElement.doScroll?e.setTimeout(oe.ready):(Z.addEventListener("DOMContentLoaded",A),e.addEventListener("load",A))),be.promise(t)},oe.ready.promise()
var xe=function(e,t,n,r,i,o,A){var a=0,s=e.length,c=null==n
if("object"===oe.type(n)){i=!0
for(a in n)xe(e,t,a,n[a],!0,o,A)}else if(void 0!==r&&(i=!0,oe.isFunction(r)||(A=!0),c&&(A?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(oe(e),n)})),t))for(;s>a;a++)t(e[a],n,A?r:r.call(e[a],a,t(e[a],n)))
return i?e:c?t.call(e):s?t(e[0],n):o},Ee=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
a.uid=1,a.prototype={register:function(e,t){var n=t||{}
return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!Ee(e))return{}
var t=e[this.expando]
return t||(t={},Ee(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[t]=n
else for(r in t)i[r]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r
return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,oe.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=e[this.expando]
if(void 0!==o){if(void 0===t)this.register(e)
else{oe.isArray(t)?r=t.concat(t.map(oe.camelCase)):(i=oe.camelCase(t),t in o?r=[t,i]:(r=i,r=r in o?[r]:r.match(Be)||[])),n=r.length
for(;n--;)delete o[r[n]]}(void 0===t||oe.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!oe.isEmptyObject(t)}}
var Ce=new a,Se=new a,Ie=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Oe=/[A-Z]/g
oe.extend({hasData:function(e){return Se.hasData(e)||Ce.hasData(e)},data:function(e,t,n){return Se.access(e,t,n)},removeData:function(e,t){Se.remove(e,t)},_data:function(e,t,n){return Ce.access(e,t,n)},_removeData:function(e,t){Ce.remove(e,t)}}),oe.fn.extend({data:function(e,t){var n,r,i,o=this[0],A=o&&o.attributes
if(void 0===e){if(this.length&&(i=Se.get(o),1===o.nodeType&&!Ce.get(o,"hasDataAttrs"))){for(n=A.length;n--;)A[n]&&(r=A[n].name,0===r.indexOf("data-")&&(r=oe.camelCase(r.slice(5)),s(o,r,i[r])))
Ce.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Se.set(this,e)}):xe(this,function(t){var n,r
if(o&&void 0===t){if(n=Se.get(o,e)||Se.get(o,e.replace(Oe,"-$&").toLowerCase()),void 0!==n)return n
if(r=oe.camelCase(e),n=Se.get(o,r),void 0!==n)return n
if(n=s(o,r,void 0),void 0!==n)return n}else r=oe.camelCase(e),this.each(function(){var n=Se.get(this,r)
Se.set(this,r,t),e.indexOf("-")>-1&&void 0!==n&&Se.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Se.remove(this,e)})}}),oe.extend({queue:function(e,t,n){var r
return e?(t=(t||"fx")+"queue",r=Ce.get(e,t),n&&(!r||oe.isArray(n)?r=Ce.access(e,t,oe.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=oe.queue(e,t),r=n.length,i=n.shift(),o=oe._queueHooks(e,t),A=function(){oe.dequeue(e,t)}
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,A,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return Ce.get(e,n)||Ce.access(e,n,{empty:oe.Callbacks("once memory").add(function(){Ce.remove(e,[t+"queue",n])})})}}),oe.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t)
oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=oe.Deferred(),o=this,A=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";A--;)n=Ce.get(o[A],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var De=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_e=new RegExp("^(?:([+-])=|)("+De+")([a-z%]*)$","i"),Te=["Top","Right","Bottom","Left"],Re=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},Ne=/^(?:checkbox|radio)$/i,ke=/<([\w:-]+)/,Pe=/^$|\/(?:java|ecma)script/i,Qe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Qe.optgroup=Qe.option,Qe.tbody=Qe.tfoot=Qe.colgroup=Qe.caption=Qe.thead,Qe.th=Qe.td
var Fe=/<|&#?\w+;/
!function(){var e=Z.createDocumentFragment(),t=e.appendChild(Z.createElement("div")),n=Z.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),re.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",re.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}()
var Ge=/^key/,Me=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Le=/^([^.]*)(?:\.(.+)|)/
oe.event={global:{},add:function(e,t,n,r,i){var o,A,a,s,c,l,u,d,f,h,p,g=Ce.get(e)
if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=oe.guid++),(s=g.events)||(s=g.events={}),(A=g.handle)||(A=g.handle=function(t){return"undefined"!=typeof oe&&oe.event.triggered!==t.type?oe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Be)||[""],c=t.length;c--;)a=Le.exec(t[c])||[],f=p=a[1],h=(a[2]||"").split(".").sort(),f&&(u=oe.event.special[f]||{},f=(i?u.delegateType:u.bindType)||f,u=oe.event.special[f]||{},l=oe.extend({type:f,origType:p,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&oe.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=s[f])||(d=s[f]=[],d.delegateCount=0,u.setup&&u.setup.call(e,r,h,A)!==!1||e.addEventListener&&e.addEventListener(f,A)),u.add&&(u.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,l):d.push(l),oe.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,A,a,s,c,l,u,d,f,h,p,g=Ce.hasData(e)&&Ce.get(e)
if(g&&(s=g.events)){for(t=(t||"").match(Be)||[""],c=t.length;c--;)if(a=Le.exec(t[c])||[],f=p=a[1],h=(a[2]||"").split(".").sort(),f){for(u=oe.event.special[f]||{},f=(r?u.delegateType:u.bindType)||f,d=s[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=o=d.length;o--;)l=d[o],!i&&p!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(d.splice(o,1),l.selector&&d.delegateCount--,u.remove&&u.remove.call(e,l))
A&&!d.length&&(u.teardown&&u.teardown.call(e,h,g.handle)!==!1||oe.removeEvent(e,f,g.handle),delete s[f])}else for(f in s)oe.event.remove(e,f+t[c],n,r,!0)
oe.isEmptyObject(s)&&Ce.remove(e,"handle events")}},dispatch:function(e){e=oe.event.fix(e)
var t,n,r,i,o,A=[],a=J.call(arguments),s=(Ce.get(this,"events")||{})[e.type]||[],c=oe.event.special[e.type]||{}
if(a[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(A=oe.event.handlers.call(this,e,s),t=0;(i=A[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((oe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,A=[],a=t.delegateCount,s=e.target
if(a&&s.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;s!==this;s=s.parentNode||this)if(1===s.nodeType&&(s.disabled!==!0||"click"!==e.type)){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?oe(i,this).index(s)>-1:oe.find(i,this,null,[s]).length),r[i]&&r.push(o)
r.length&&A.push({elem:s,handlers:r})}return a<t.length&&A.push({elem:this,handlers:t.slice(a)}),A},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Z,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[oe.expando])return e
var t,n,r,i=e.type,o=e,A=this.fixHooks[i]
for(A||(this.fixHooks[i]=A=Me.test(i)?this.mouseHooks:Ge.test(i)?this.keyHooks:{}),r=A.props?this.props.concat(A.props):this.props,e=new oe.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n]
return e.target||(e.target=Z),3===e.target.nodeType&&(e.target=e.target.parentNode),A.filter?A.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==p()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===p()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&oe.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},oe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},oe.Event=function(e,t){return this instanceof oe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?f:h):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),void(this[oe.expando]=!0)):new oe.Event(e,t)},oe.Event.prototype={constructor:oe.Event,isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=f,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=f,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=f,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
return i&&(i===r||oe.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),oe.fn.extend({on:function(e,t,n,r){return g(this,e,t,n,r)},one:function(e,t,n,r){return g(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,oe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=h),this.each(function(){oe.event.remove(this,e,n,t)})}})
var Ue=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,He=/<script|<style|<link/i,ze=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^true\/(.*)/,We=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
oe.extend({htmlPrefilter:function(e){return e.replace(Ue,"<$1></$2>")},clone:function(e,t,n){var r,i,o,A,a=e.cloneNode(!0),s=oe.contains(e.ownerDocument,e)
if(!(re.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(A=l(a),o=l(e),r=0,i=o.length;i>r;r++)B(o[r],A[r])
if(t)if(n)for(o=o||l(e),A=A||l(a),r=0,i=o.length;i>r;r++)w(o[r],A[r])
else w(e,a)
return A=l(a,"script"),A.length>0&&u(A,!s&&l(e,"script")),a},cleanData:function(e){for(var t,n,r,i=oe.event.special,o=0;void 0!==(n=e[o]);o++)if(Ee(n)){if(t=n[Ce.expando]){if(t.events)for(r in t.events)i[r]?oe.event.remove(n,r):oe.removeEvent(n,r,t.handle)
n[Ce.expando]=void 0}n[Se.expando]&&(n[Se.expando]=void 0)}}}),oe.fn.extend({domManip:b,detach:function(e){return x(this,e,!0)},remove:function(e){return x(this,e)},text:function(e){return xe(this,function(e){return void 0===e?oe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return b(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e)
t.appendChild(e)}})},prepend:function(){return b(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return b(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return b(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(oe.cleanData(l(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return xe(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!He.test(e)&&!Qe[(ke.exec(e)||["",""])[1].toLowerCase()]){e=oe.htmlPrefilter(e)
try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(l(t,!1)),t.innerHTML=e)
t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[]
return b(this,arguments,function(t){var n=this.parentNode
oe.inArray(this,e)<0&&(oe.cleanData(l(this)),n&&n.replaceChild(t,this))},e)}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,r=[],i=oe(e),o=i.length-1,A=0;o>=A;A++)n=A===o?this:this.clone(!0),oe(i[A])[t](n),X.apply(r,n.get())
return this.pushStack(r)}})
var Ve,Ye={HTML:"block",BODY:"block"},qe=/^margin/,Ze=new RegExp("^("+De+")(?!px)[a-z%]+$","i"),Je=function(t){var n=t.ownerDocument.defaultView
return n&&n.opener||(n=e),n.getComputedStyle(t)},Ke=function(e,t,n,r){var i,o,A={}
for(o in t)A[o]=e.style[o],e.style[o]=t[o]
i=n.apply(e,r||[])
for(o in t)e.style[o]=A[o]
return i},Xe=Z.documentElement
!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Xe.appendChild(A)
var t=e.getComputedStyle(a)
n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,a.style.marginRight="50%",i="4px"===t.marginRight,Xe.removeChild(A)}var n,r,i,o,A=Z.createElement("div"),a=Z.createElement("div")
a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",re.clearCloneStyle="content-box"===a.style.backgroundClip,A.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",A.appendChild(a),oe.extend(re,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},pixelMarginRight:function(){return null==r&&t(),i},reliableMarginLeft:function(){return null==r&&t(),o},reliableMarginRight:function(){var t,n=a.appendChild(Z.createElement("div"))
return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Xe.appendChild(A),t=!parseFloat(e.getComputedStyle(n).marginRight),Xe.removeChild(A),a.removeChild(n),t}}))}()
var $e=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],rt=Z.createElement("div").style
oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=S(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,A,a=oe.camelCase(t),s=e.style
return t=oe.cssProps[a]||(oe.cssProps[a]=O(a)||a),A=oe.cssHooks[t]||oe.cssHooks[a],void 0===n?A&&"get"in A&&void 0!==(i=A.get(e,!1,r))?i:s[t]:(o=typeof n,"string"===o&&(i=_e.exec(n))&&i[1]&&(n=c(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(oe.cssNumber[a]?"":"px")),re.clearCloneStyle||""!==n||0!==t.indexOf("background")||(s[t]="inherit"),A&&"set"in A&&void 0===(n=A.set(e,n,r))||(s[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,A,a=oe.camelCase(t)
return t=oe.cssProps[a]||(oe.cssProps[a]=O(a)||a),A=oe.cssHooks[t]||oe.cssHooks[a],A&&"get"in A&&(i=A.get(e,!0,n)),void 0===i&&(i=S(e,t,r)),"normal"===i&&t in tt&&(i=tt[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,r){return n?$e.test(oe.css(e,"display"))&&0===e.offsetWidth?Ke(e,et,function(){return T(e,t,r)}):T(e,t,r):void 0},set:function(e,n,r){var i,o=r&&Je(e),A=r&&_(e,t,r,"border-box"===oe.css(e,"boxSizing",!1,o),o)
return A&&(i=_e.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=oe.css(e,t)),D(e,n,A)}}}),oe.cssHooks.marginLeft=I(re.reliableMarginLeft,function(e,t){return t?(parseFloat(S(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),oe.cssHooks.marginRight=I(re.reliableMarginRight,function(e,t){return t?Ke(e,{display:"inline-block"},S,[e,"marginRight"]):void 0}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Te[r]+t]=o[r]||o[r-2]||o[0]
return i}},qe.test(e)||(oe.cssHooks[e+t].set=D)}),oe.fn.extend({css:function(e,t){return xe(this,function(e,t,n){var r,i,o={},A=0
if(oe.isArray(t)){for(r=Je(e),i=t.length;i>A;A++)o[t[A]]=oe.css(e,t[A],!1,r)
return o}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return R(this,!0)},hide:function(){return R(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Re(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=N,N.prototype={constructor:N,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||oe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(oe.cssNumber[n]?"":"px")},cur:function(){var e=N.propHooks[this.prop]
return e&&e.get?e.get(this):N.propHooks._default.get(this)},run:function(e){var t,n=N.propHooks[this.prop]
return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):N.propHooks._default.set(this),this}},N.prototype.init.prototype=N.prototype,N.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[oe.cssProps[e.prop]]&&!oe.cssHooks[e.prop]?e.elem[e.prop]=e.now:oe.style(e.elem,e.prop,e.now+e.unit)}}},N.propHooks.scrollTop=N.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},oe.fx=N.prototype.init,oe.fx.step={}
var it,ot,At=/^(?:toggle|show|hide)$/,at=/queueHooks$/
oe.Animation=oe.extend(M,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return c(n.elem,e,_e.exec(t),n),n}]},tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.match(Be)
for(var n,r=0,i=e.length;i>r;r++)n=e[r],M.tweeners[n]=M.tweeners[n]||[],M.tweeners[n].unshift(t)},prefilters:[F],prefilter:function(e,t){t?M.prefilters.unshift(e):M.prefilters.push(e)}}),oe.speed=function(e,t,n){var r=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t}
return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)},r},oe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=oe.isEmptyObject(e),o=oe.speed(t,n,r),A=function(){var t=M(this,oe.extend({},e),o);(i||Ce.get(this,"finish"))&&t.stop(!0)}
return A.finish=A,i||o.queue===!1?this.each(A):this.queue(o.queue,A)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=oe.timers,A=Ce.get(this)
if(i)A[i]&&A[i].stop&&r(A[i])
else for(i in A)A[i]&&A[i].stop&&at.test(i)&&r(A[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||oe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Ce.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=oe.timers,A=r?r.length:0
for(n.finish=!0,oe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;A>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t]
oe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(P(t,!0),e,r,i)}}),oe.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),oe.timers=[],oe.fx.tick=function(){var e,t=0,n=oe.timers
for(it=oe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1)
n.length||oe.fx.stop(),it=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){ot||(ot=e.setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){e.clearInterval(ot),ot=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(t,n){return t=oe.fx?oe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t)
r.stop=function(){e.clearTimeout(i)}})},function(){var e=Z.createElement("input"),t=Z.createElement("select"),n=t.appendChild(Z.createElement("option"))
e.type="checkbox",re.checkOn=""!==e.value,re.optSelected=n.selected,t.disabled=!0,re.optDisabled=!n.disabled,e=Z.createElement("input"),e.value="t",e.type="radio",re.radioValue="t"===e.value}()
var st,ct=oe.expr.attrHandle
oe.fn.extend({attr:function(e,t){return xe(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?oe.prop(e,t,n):(1===o&&oe.isXMLDoc(e)||(t=t.toLowerCase(),i=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?st:void 0)),void 0!==n?null===n?void oe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=oe.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!re.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(Be)
if(o&&1===e.nodeType)for(;n=o[i++];)r=oe.propFix[n]||n,oe.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),st={set:function(e,t,n){return t===!1?oe.removeAttr(e,n):e.setAttribute(n,n),n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ct[t]||oe.find.attr
ct[t]=function(e,t,r){var i,o
return r||(o=ct[t],ct[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ct[t]=o),i}})
var lt=/^(?:input|select|textarea|button)$/i,ut=/^(?:a|area)$/i
oe.fn.extend({prop:function(e,t){return xe(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[oe.propFix[e]||e]})}}),oe.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&oe.isXMLDoc(e)||(t=oe.propFix[t]||t,i=oe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex")
return t?parseInt(t,10):lt.test(e.nodeName)||ut.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),re.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this})
var dt=/[\t\r\n\f]/g
oe.fn.extend({addClass:function(e){var t,n,r,i,o,A,a,s=0
if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,L(this)))})
if("string"==typeof e&&e)for(t=e.match(Be)||[];n=this[s++];)if(i=L(n),r=1===n.nodeType&&(" "+i+" ").replace(dt," ")){for(A=0;o=t[A++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ")
a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,A,a,s=0
if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,L(this)))})
if(!arguments.length)return this.attr("class","")
if("string"==typeof e&&e)for(t=e.match(Be)||[];n=this[s++];)if(i=L(n),r=1===n.nodeType&&(" "+i+" ").replace(dt," ")){for(A=0;o=t[A++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ")
a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,L(this),t),t)}):this.each(function(){var t,r,i,o
if("string"===n)for(r=0,i=oe(this),o=e.match(Be)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t)
else void 0!==e&&"boolean"!==n||(t=L(this),t&&Ce.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Ce.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+L(n)+" ").replace(dt," ").indexOf(t)>-1)return!0
return!1}})
var ft=/\r/g,ht=/[\x20\t\r\n\f]+/g
oe.fn.extend({val:function(e){var t,n,r,i=this[0]
{if(arguments.length)return r=oe.isFunction(e),this.each(function(n){var i
1===this.nodeType&&(i=r?e.call(this,n,oe(this).val()):e,null==i?i="":"number"==typeof i?i+="":oe.isArray(i)&&(i=oe.map(i,function(e){return null==e?"":e+""})),t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})
if(i)return t=oe.valHooks[i.type]||oe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ft,""):null==n?"":n)}}}),oe.extend({valHooks:{option:{get:function(e){var t=oe.find.attr(e,"value")
return null!=t?t:oe.trim(oe.text(e)).replace(ht," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,A=o?null:[],a=o?i+1:r.length,s=0>i?a:o?i:0;a>s;s++)if(n=r[s],(n.selected||s===i)&&(re.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),o)return t
A.push(t)}return A},set:function(e,t){for(var n,r,i=e.options,o=oe.makeArray(t),A=i.length;A--;)r=i[A],(r.selected=oe.inArray(oe.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){return oe.isArray(t)?e.checked=oe.inArray(oe(e).val(),t)>-1:void 0}},re.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})
var pt=/^(?:focusinfocus|focusoutblur)$/
oe.extend(oe.event,{trigger:function(t,n,r,i){var o,A,a,s,c,l,u,d=[r||Z],f=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t.namespace.split("."):[]
if(A=a=r=r||Z,3!==r.nodeType&&8!==r.nodeType&&!pt.test(f+oe.event.triggered)&&(f.indexOf(".")>-1&&(h=f.split("."),f=h.shift(),h.sort()),c=f.indexOf(":")<0&&"on"+f,t=t[oe.expando]?t:new oe.Event(f,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:oe.makeArray(n,[t]),u=oe.event.special[f]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!oe.isWindow(r)){for(s=u.delegateType||f,pt.test(s+f)||(A=A.parentNode);A;A=A.parentNode)d.push(A),a=A
a===(r.ownerDocument||Z)&&d.push(a.defaultView||a.parentWindow||e)}for(o=0;(A=d[o++])&&!t.isPropagationStopped();)t.type=o>1?s:u.bindType||f,l=(Ce.get(A,"events")||{})[t.type]&&Ce.get(A,"handle"),l&&l.apply(A,n),l=c&&A[c],l&&l.apply&&Ee(A)&&(t.result=l.apply(A,n),t.result===!1&&t.preventDefault())
return t.type=f,i||t.isDefaultPrevented()||u._default&&u._default.apply(d.pop(),n)!==!1||!Ee(r)||c&&oe.isFunction(r[f])&&!oe.isWindow(r)&&(a=r[c],a&&(r[c]=null),oe.event.triggered=f,r[f](),oe.event.triggered=void 0,a&&(r[c]=a)),t.result}},simulate:function(e,t,n){var r=oe.extend(new oe.Event,n,{type:e,isSimulated:!0})
oe.event.trigger(r,null,t)}}),oe.fn.extend({trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
return n?oe.event.trigger(e,t,n,!0):void 0}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),re.focusin="onfocusin"in e,re.focusin||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e))}
oe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Ce.access(r,t)
i||r.addEventListener(e,n,!0),Ce.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Ce.access(r,t)-1
i?Ce.access(r,t,i):(r.removeEventListener(e,n,!0),Ce.remove(r,t))}}})
var gt=e.location,mt=oe.now(),vt=/\?/
oe.parseJSON=function(e){return JSON.parse(e+"")},oe.parseXML=function(t){var n
if(!t||"string"!=typeof t)return null
try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(r){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+t),n}
var yt=/#.*$/,wt=/([?&])_=[^&]*/,Bt=/^(.*?):[ \t]*([^\r\n]*)$/gm,bt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,xt=/^(?:GET|HEAD)$/,Et=/^\/\//,Ct={},St={},It="*/".concat("*"),Ot=Z.createElement("a")
Ot.href=gt.href,oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gt.href,type:"GET",isLocal:bt.test(gt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?z(z(e,oe.ajaxSettings),t):z(oe.ajaxSettings,e)},ajaxPrefilter:U(Ct),ajaxTransport:U(St),ajax:function(t,n){function r(t,n,r,a){var c,u,v,y,B,x=n
2!==w&&(w=2,s&&e.clearTimeout(s),i=void 0,A=a||"",b.readyState=t>0?4:0,c=t>=200&&300>t||304===t,r&&(y=j(d,b,r)),y=W(d,y,b,c),c?(d.ifModified&&(B=b.getResponseHeader("Last-Modified"),B&&(oe.lastModified[o]=B),B=b.getResponseHeader("etag"),B&&(oe.etag[o]=B)),204===t||"HEAD"===d.type?x="nocontent":304===t?x="notmodified":(x=y.state,u=y.data,v=y.error,c=!v)):(v=x,!t&&x||(x="error",0>t&&(t=0))),b.status=t,b.statusText=(n||x)+"",c?p.resolveWith(f,[u,x,b]):p.rejectWith(f,[b,x,v]),b.statusCode(m),m=void 0,l&&h.trigger(c?"ajaxSuccess":"ajaxError",[b,d,c?u:v]),g.fireWith(f,[b,x]),l&&(h.trigger("ajaxComplete",[b,d]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{}
var i,o,A,a,s,c,l,u,d=oe.ajaxSetup({},n),f=d.context||d,h=d.context&&(f.nodeType||f.jquery)?oe(f):oe.event,p=oe.Deferred(),g=oe.Callbacks("once memory"),m=d.statusCode||{},v={},y={},w=0,B="canceled",b={readyState:0,getResponseHeader:function(e){var t
if(2===w){if(!a)for(a={};t=Bt.exec(A);)a[t[1].toLowerCase()]=t[2]
t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?A:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return w||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return w||(d.mimeType=e),this},statusCode:function(e){var t
if(e)if(2>w)for(t in e)m[t]=[m[t],e[t]]
else b.always(e[b.status])
return this},abort:function(e){var t=e||B
return i&&i.abort(t),r(0,t),this}}
if(p.promise(b).complete=g.add,b.success=b.done,b.error=b.fail,d.url=((t||d.url||gt.href)+"").replace(yt,"").replace(Et,gt.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=oe.trim(d.dataType||"*").toLowerCase().match(Be)||[""],null==d.crossDomain){c=Z.createElement("a")
try{c.href=d.url,c.href=c.href,d.crossDomain=Ot.protocol+"//"+Ot.host!=c.protocol+"//"+c.host}catch(x){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=oe.param(d.data,d.traditional)),H(Ct,d,n,b),2===w)return b
l=oe.event&&d.global,l&&0===oe.active++&&oe.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!xt.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(vt.test(o)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=wt.test(o)?o.replace(wt,"$1_="+mt++):o+(vt.test(o)?"&":"?")+"_="+mt++)),d.ifModified&&(oe.lastModified[o]&&b.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&b.setRequestHeader("If-None-Match",oe.etag[o])),(d.data&&d.hasContent&&d.contentType!==!1||n.contentType)&&b.setRequestHeader("Content-Type",d.contentType),b.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+It+"; q=0.01":""):d.accepts["*"])
for(u in d.headers)b.setRequestHeader(u,d.headers[u])
if(d.beforeSend&&(d.beforeSend.call(f,b,d)===!1||2===w))return b.abort()
B="abort"
for(u in{success:1,error:1,complete:1})b[u](d[u])
if(i=H(St,d,n,b)){if(b.readyState=1,l&&h.trigger("ajaxSend",[b,d]),2===w)return b
d.async&&d.timeout>0&&(s=e.setTimeout(function(){b.abort("timeout")},d.timeout))
try{w=1,i.send(v,r)}catch(x){if(!(2>w))throw x
r(-1,x)}}else r(-1,"No Transport")
return b},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,r,i){return oe.isFunction(n)&&(i=i||r,r=n,n=void 0),oe.ajax(oe.extend({url:e,type:t,dataType:i,data:n,success:r},oe.isPlainObject(e)&&e))}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},oe.fn.extend({wrapAll:function(e){var t
return oe.isFunction(e)?this.each(function(t){oe(this).wrapAll(e.call(this,t))}):(this[0]&&(t=oe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e)
return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return!oe.expr.filters.visible(e)},oe.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}
var Dt=/%20/g,_t=/\[\]$/,Tt=/\r?\n/g,Rt=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i
oe.param=function(e,t){var n,r=[],i=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){i(this.name,this.value)})
else for(n in e)V(n,e[n],t,i)
return r.join("&").replace(Dt,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements")
return e?oe.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!oe(this).is(":disabled")&&Nt.test(this.nodeName)&&!Rt.test(e)&&(this.checked||!Ne.test(e))}).map(function(e,t){var n=oe(this).val()
return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}}):{name:t.name,value:n.replace(Tt,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}}
var kt={0:200,1223:204},Pt=oe.ajaxSettings.xhr()
re.cors=!!Pt&&"withCredentials"in Pt,re.ajax=Pt=!!Pt,oe.ajaxTransport(function(t){var n,r
return re.cors||Pt&&!t.crossDomain?{send:function(i,o){var A,a=t.xhr()
if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(A in t.xhrFields)a[A]=t.xhrFields[A]
t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest")
for(A in i)a.setRequestHeader(A,i[A])
n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(kt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort")
try{a.send(t.hasContent&&t.data||null)}catch(s){if(n)throw s}},abort:function(){n&&n()}}:void 0}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(r,i){t=oe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Z.head.appendChild(t[0])},abort:function(){n&&n()}}}})
var Qt=[],Ft=/(=)\?(?=&|$)|\?\?/
oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||oe.expando+"_"+mt++
return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,A,a=t.jsonp!==!1&&(Ft.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ft.test(t.data)&&"data")
return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Ft,"$1"+i):t.jsonp!==!1&&(t.url+=(vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return A||oe.error(i+" was not called"),A[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){A=arguments},r.always(function(){void 0===o?oe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Qt.push(i)),A&&oe.isFunction(o)&&o(A[0]),A=o=void 0}),"script"):void 0}),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||Z
var r=he.exec(e),i=!n&&[]
return r?[t.createElement(r[1])]:(r=d([e],t,i),i&&i.length&&oe(i).remove(),oe.merge([],r.childNodes))}
var Gt=oe.fn.load
oe.fn.load=function(e,t,n){if("string"!=typeof e&&Gt)return Gt.apply(this,arguments)
var r,i,o,A=this,a=e.indexOf(" ")
return a>-1&&(r=oe.trim(e.slice(a)),e=e.slice(0,a)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),A.length>0&&oe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,A.html(r?oe("<div>").append(oe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){A.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length},oe.offset={setOffset:function(e,t,n){var r,i,o,A,a,s,c,l=oe.css(e,"position"),u=oe(e),d={}
"static"===l&&(e.style.position="relative"),a=u.offset(),o=oe.css(e,"top"),s=oe.css(e,"left"),c=("absolute"===l||"fixed"===l)&&(o+s).indexOf("auto")>-1,c?(r=u.position(),A=r.top,i=r.left):(A=parseFloat(o)||0,i=parseFloat(s)||0),oe.isFunction(t)&&(t=t.call(e,n,oe.extend({},a))),null!=t.top&&(d.top=t.top-a.top+A),null!=t.left&&(d.left=t.left-a.left+i),"using"in t?t.using.call(e,d):u.css(d)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)})
var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument
if(o)return t=o.documentElement,oe.contains(t,r)?(i=r.getBoundingClientRect(),n=Y(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
return"fixed"===oe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(r=e.offset()),r.top+=oe.css(e[0],"borderTopWidth",!0),r.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-oe.css(n,"marginTop",!0),left:t.left-r.left-oe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===oe.css(e,"position");)e=e.offsetParent
return e||Xe})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t
oe.fn[e]=function(r){return xe(this,function(e,r,i){var o=Y(e)
return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=I(re.pixelPosition,function(e,n){return n?(n=S(e,t),Ze.test(n)?oe(e).position()[t]+"px":n):void 0})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){oe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),A=n||(r===!0||i===!0?"margin":"border")
return xe(this,function(t,n,r){var i
return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?oe.css(t,n,A):oe.style(t,n,r,A)},t,o?r:void 0,o,null)}})}),oe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe})
var Mt=e.jQuery,Lt=e.$
return oe.noConflict=function(t){return e.$===oe&&(e.$=Lt),t&&e.jQuery===oe&&(e.jQuery=Mt),oe},t||(e.jQuery=e.$=oe),oe}),function(e){var t={NodeTypeError:function(e,t){function n(){this.node=e}return n.prototype=new Error(t),n.constructor=n,new n},OutOfRangeError:function(e,t,n){function r(){this.targetIndex=e,this.maxIndex=t}return r.prototype=new Error(n),r.constructor=r(),new r},TerminusError:function(e,t,n){function r(){this.terminusType=e,this.terminusCondition=t}return r.prototype=new Error(n),r.constructor=r(),new r},CFIAssertionError:function(e,t,n){function r(){this.expectedAssertion=e,this.targetElementAssertion=t}return r.prototype=new Error(n),r.constructor=r(),new r}}
if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_errors"),define("readium_cfi_js/cfi_runtime_errors",[],function(){return t})
else{if(console.log("!RequireJS ... cfi_errors"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)")
e.EPUBcfi.NodeTypeError=t.NodeTypeError,e.EPUBcfi.OutOfRangeError=t.OutOfRangeError,e.EPUBcfi.TerminusError=t.TerminusError,e.EPUBcfi.CFIAssertionError=t.CFIAssertionError}}("undefined"!=typeof window?window:this),function(e){var t=function(e,t){var n={getNextNode:function(e,t,n,r,i){var o
return o=e%2==0?this.elementNodeStep(e,t,n,r,i):this.inferTargetTextNode(e,t,n,r,i)},followIndirectionStep:function(n,r,i,o,A){var a,s,c,l
if(void 0===r||!r.is("iframe"))throw t.NodeTypeError(r,"expected an iframe element")
return r.is("iframe")?(a=r.contents(),s=this.applyBlacklist(a.children(),i,o,A),c=e(s[0]),l=this.getNextNode(n,c,i,o,A)):void 0},textTermination:function(e,n,r){var i
if(void 0===e)throw t.NodeTypeError(e,"expected a terminating node, or node list")
if(0===e.length)throw t.TerminusError("Text","Text offset:"+n,"no nodes found for termination condition")
return i=this.injectCFIMarkerIntoText(e,n,r)},targetIdMatchesIdAssertion:function(e,t){return e.attr("id")===t},elementNodeStep:function(n,r,i,o,A){var a,s,c,l=n/2-1
if(s=this.applyBlacklist(r.children(),i,o,A),c=s.length,this.indexOutOfRange(l,c))throw t.OutOfRangeError(l,c-1,"")
return a=e(s[l])},retrieveItemRefHref:function(t,n){return e("#"+t.attr("idref"),n).attr("href")},indexOutOfRange:function(e,t){return e>t-1},injectCFIMarkerIntoText:function(n,r,i){var o,A,a,s,c,l=n[0].ownerDocument,u=0
for(o=0;o<=n.length;o++)if(n[o].nodeType===Node.TEXT_NODE){if(currNodeMaxIndex=n[o].nodeValue.length+u,A=r-u,currNodeMaxIndex>r)return a=n[o].nodeValue,n[o].nodeValue=a.slice(0,A),s=e(i).insertAfter(n.eq(o)),c=e(l.createTextNode(a.slice(A,a.length))),e(c).insertAfter(s),s
if(currNodeMaxIndex==r)return s=e(i).insertAfter(n.eq(o))
u=currNodeMaxIndex}else n[o].nodeType===Node.COMMENT_NODE?(currNodeMaxIndex=n[o].nodeValue.length+7+u,u=currNodeMaxIndex):n[o].nodeType===Node.PROCESSING_INSTRUCTION_NODE&&(currNodeMaxIndex=n[o].nodeValue.length+n[o].target.length+5,u=currNodeMaxIndex)
throw t.TerminusError("Text","Text offset:"+r,"The offset exceeded the length of the text")},inferTargetTextNode:function(e,n,r,i,o){var A,a,s,c,l
if(A=this.applyBlacklist(n.contents(),r,i,o),s=(parseInt(e)+1)/2-1,a=0,l=!1,c=A.filter(function(){return a!==s?(this.nodeType===Node.TEXT_NODE||this.nodeType===Node.COMMENT_NODE||this.nodeType===Node.PROCESSING_INSTRUCTION_NODE?l=!0:l||this.nodeType!==Node.ELEMENT_NODE?l&&this.nodeType!==Node.TEXT_NODE&&this!==A.lastChild&&(a++,l=!1):(a++,l=!0),!1):this.nodeType===Node.TEXT_NODE||this.nodeType===Node.COMMENT_NODE||this.nodeType===Node.PROCESSING_INSTRUCTION_NODE?(l=!0,!0):l&&this.nodeType!==Node.TEXT_NODE?(a++,l=!1,!1):void 0}),0===c.length)throw t.OutOfRangeError(s,a,"Index out of range")
return c},applyBlacklist:function(t,n,r,i){var o
return o=t.filter(function(){var t=e(this),o=!0
return n&&e.each(n,function(e,n){return t.hasClass(n)?(o=!1,!1):void 0}),r&&e.each(r,function(e,n){return t.is(n)?(o=!1,!1):void 0}),i&&e.each(i,function(e,n){return t.attr("id")===n?(o=!1,!1):void 0}),o})}}
return n}
if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_instructions"),define("readium_cfi_js/cfi_instructions",["jquery","./cfi_runtime_errors"],function(e,n){return t(e,n)})
else{if(console.log("!RequireJS ... cfi_instructions"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)")
e.EPUBcfi.CFIInstructions=t($,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOfRangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this),function(e){var t=function(e,t,n,r){if("undefined"==typeof t)throw new Error("UNDEFINED?! cfiParser")
if("undefined"==typeof n)throw new Error("UNDEFINED?! cfiInstructions")
if("undefined"==typeof r)throw new Error("UNDEFINED?! cfiRuntimeErrors")
var i={getContentDocHref:function(n,i,o,A,a){var s=e(i),c=decodeURI(n),l=t.parse(c)
if(!l||"CFIAST"!==l.type)throw r.NodeTypeError(l,"expected CFI AST root node")
var u=e(e("package",s)[0]),d=this.interpretIndexStepNode(l.cfiString.path,u,o,A,a)
return foundHref=this.searchLocalPathForHref(d,s,l.cfiString.localPath,o,A,a),foundHref?foundHref:void 0},injectElement:function(n,r,i,o,A,a){var s,c,l,u=decodeURI(n),d=t.parse(u)
return c=this.getFirstIndirectionStepNum(d),s=d.cfiString.localPath.steps[c],s.type="indexStep",l=this.interpretLocalPath(d.cfiString.localPath,c,e("html",r),o,A,a),l=this.interpretTextTerminusNode(d.cfiString.localPath.termStep,l,i)},injectRangeElements:function(n,r,i,o,A,a,s){var c,l,u,d,f,h=decodeURI(n),p=t.parse(h)
return l=this.getFirstIndirectionStepNum(p),c=p.cfiString.localPath.steps[l],c.type="indexStep",u=this.interpretLocalPath(p.cfiString.localPath,l,e("html",r),A,a,s),d=this.interpretLocalPath(p.cfiString.range1,0,u,A,a,s),d=this.interpretTextTerminusNode(p.cfiString.range1.termStep,d,i),f=this.interpretLocalPath(p.cfiString.range2,0,u,A,a,s),f=this.interpretTextTerminusNode(p.cfiString.range2.termStep,f,o),{startElement:d[0],endElement:f[0]}},getTargetElement:function(n,r,i,o,A){var a,s,c,l=decodeURI(n),u=t.parse(l)
return s=this.getFirstIndirectionStepNum(u),a=u.cfiString.localPath.steps[s],a.type="indexStep",c=this.interpretLocalPath(u.cfiString.localPath,s,e("html",r),i,o,A)},getRangeTargetElements:function(n,r,i,o,A){var a,s,c,l,u,d=decodeURI(n),f=t.parse(d)
s=this.getFirstIndirectionStepNum(f),a=f.cfiString.localPath.steps[s],a.type="indexStep",c=this.interpretLocalPath(f.cfiString.localPath,s,e("html",r),i,o,A),l=this.interpretLocalPath(f.cfiString.range1,0,c,i,o,A),u=this.interpretLocalPath(f.cfiString.range2,0,c,i,o,A)
var h=parseInt(f.cfiString.range1.termStep.offsetValue)||void 0,p=parseInt(f.cfiString.range2.termStep.offsetValue)||void 0
return{startElement:l[0],startOffset:h,endElement:u[0],endOffset:p}},getTargetElementWithPartialCFI:function(n,r,i,o,A){var a=decodeURI(n),s=t.parse(a),c=this.interpretIndexStepNode(s.cfiString.path,e("html",r),i,o,A)
return c=this.interpretLocalPath(s.cfiString.localPath,0,c,i,o,A)},getTextTerminusInfoWithPartialCFI:function(n,r,i,o,A){var a,s=decodeURI(n),c=t.parse(s),l=this.interpretIndexStepNode(c.cfiString.path,e("html",r),i,o,A)
return l=this.interpretLocalPath(c.cfiString.localPath,0,l,i,o,A),a=parseInt(c.cfiString.localPath.termStep.offsetValue),{textNode:l,textOffset:a}},isRangeCfi:function(e){var n=t.parse(e)
return!!n.cfiString.range1},getFirstIndirectionStepNum:function(e){var t=0
for(t;t<=e.cfiString.localPath.steps.length-1;t++)if(nextStepNode=e.cfiString.localPath.steps[t],"indirectionStep"===nextStepNode.type)return t},interpretLocalPath:function(e,t,n,r,i,o){var A,a=t
for(a;a<=e.steps.length-1;a++)A=e.steps[a],"indexStep"===A.type?n=this.interpretIndexStepNode(A,n,r,i,o):"indirectionStep"===A.type&&(n=this.interpretIndirectionStepNode(A,n,r,i,o))
return n},interpretIndexStepNode:function(e,t,i,o,A){if(void 0===e||"indexStep"!==e.type)throw r.NodeTypeError(e,"expected index step node")
var a=n.getNextNode(e.stepLength,t,i,o,A)
if(e.idAssertion&&!n.targetIdMatchesIdAssertion(a,e.idAssertion))throw r.CFIAssertionError(e.idAssertion,a.attr("id"),"Id assertion failed")
return a},interpretIndirectionStepNode:function(e,t,i,o,A){if(void 0===e||"indirectionStep"!==e.type)throw r.NodeTypeError(e,"expected indirection step node")
var a=n.followIndirectionStep(e.stepLength,t,i,o)
if(e.idAssertion&&!n.targetIdMatchesIdAssertion(a,e.idAssertion))throw r.CFIAssertionError(e.idAssertion,a.attr("id"),"Id assertion failed")
return a},interpretTextTerminusNode:function(e,t,i){if(void 0===e||"textTerminus"!==e.type)throw r.NodeTypeError(e,"expected text terminus node")
var o=n.textTermination(t,e.offsetValue,i)
return o},searchLocalPathForHref:function(e,t,r,i,o,A){var a,s=0
for(s=0;s<=r.steps.length-1;s++)if(a=r.steps[s],"indexStep"===a.type?e=this.interpretIndexStepNode(a,e,i,o,A):"indirectionStep"===a.type&&(e=this.interpretIndirectionStepNode(a,e,i,o,A)),e.is("itemref"))return n.retrieveItemRefHref(e,t)}}
return i}
if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_interpreter"),define("readium_cfi_js/cfi_interpreter",["jquery","readium_cfi_js/cfi_parser","./cfi_instructions","./cfi_runtime_errors"],function(e,n,r,i){return t(e,n,r,i)})
else{if(console.log("!RequireJS ... cfi_interpreter"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)")
e.EPUBcfi.Interpreter=t($,e.EPUBcfi.Parser,e.EPUBcfi.CFIInstructions,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOfRangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this),function(e){var t=function(e,t,n){if("undefined"==typeof t)throw new Error("UNDEFINED?! cfiInstructions")
if("undefined"==typeof n)throw new Error("UNDEFINED?! cfiRuntimeErrors")
var r={generateCharOffsetRangeComponent:function(t,n,r,i,o,A,a){var s,c,l,u,d,f,h,p,g,m=t.ownerDocument
return this.validateStartTextNode(t),this.validateStartTextNode(r),e(t).parent()[0]===e(r).parent()[0]?(d=this.createCFITextNodeStep(e(t),n,o,A,a),h=this.createCFITextNodeStep(e(r),i,o,A,a),g=this.createCFIElementSteps(e(t).parent(),"html",o,A,a),g.substring(1,g.length)+","+d+","+h):(s=m.createRange(),s.setStart(t,n),s.setEnd(r,i),c=s.commonAncestorContainer,d=this.createCFITextNodeStep(e(t),n,o,A,a),l=e(t).parent(),f=l[0]===c?d:this.createCFIElementSteps(l,c,o,A,a)+d,h=this.createCFITextNodeStep(e(r),i,o,A,a),u=e(r).parent(),p=u[0]===c?h:this.createCFIElementSteps(u,c,o,A,a)+h,g=this.createCFIElementSteps(e(c),"html",o,A,a),g.substring(1,g.length)+","+f+","+p)},generateElementRangeComponent:function(t,n,r,i,o){var A,a,s,c,l,u=t.ownerDocument
if(this.validateStartElement(t),this.validateStartElement(n),t===n)throw new Error("Start and end element cannot be the same for a CFI range")
return A=u.createRange(),A.setStart(t,0),A.setEnd(n,n.childNodes.length),a=A.commonAncestorContainer,s=this.createCFIElementSteps(e(t),a,r,i,o),c=this.createCFIElementSteps(e(n),a,r,i,o),l=this.createCFIElementSteps(e(a),"html",r,i,o),l.substring(1,l.length)+","+s+","+c},generateRangeComponent:function(t,n,r,i,o,A,a){var s=t.ownerDocument
if(t.nodeType===Node.ELEMENT_NODE&&r.nodeType===Node.ELEMENT_NODE)return this.generateElementRangeComponent(t,r,o,A,a)
if(t.nodeType===Node.TEXT_NODE&&r.nodeType===Node.TEXT_NODE)return this.generateCharOffsetRangeComponent(t,n,r,i,o,A,a)
var c,l,u,d,f,h,p
return c=s.createRange(),c.setStart(t,n),c.setEnd(r,i),h=c.commonAncestorContainer,t.nodeType===Node.ELEMENT_NODE?(this.validateStartElement(t),l=this.createCFIElementSteps(e(t),h,o,A,a)):(this.validateStartTextNode(t),u=this.createCFITextNodeStep(e(t),n,o,A,a),l=e(t).parent().is(h)?u:this.createCFIElementSteps(e(t).parent(),h,o,A,a)+u),r.nodeType===Node.ELEMENT_NODE?(this.validateStartElement(r),d=this.createCFIElementSteps(e(r),h,o,A,a)):(this.validateStartTextNode(r),f=this.createCFITextNodeStep(e(r),i,o,A,a),d=e(r).parent().is(h)?f:this.createCFIElementSteps(e(r).parent(),h,o,A,a)+f),p=this.createCFIElementSteps(e(h),"html",o,A,a),p.substring(1,p.length)+","+l+","+d},generateCharacterOffsetCFIComponent:function(t,n,r,i,o){var A,a
return this.validateStartTextNode(t,n),A=this.createCFITextNodeStep(e(t),n,r,i,o),a=this.createCFIElementSteps(e(t).parent(),"html",r,i,o)+A,a.substring(1,a.length)},generateElementCFIComponent:function(t,n,r,i){var o
return this.validateStartElement(t),o=this.createCFIElementSteps(e(t),"html",n,r,i),o.substring(1,o.length)},generatePackageDocumentCFIComponent:function(t,n,r,i,o){return this.validateContentDocumentName(t),this.validatePackageDocument(n,t),$itemRefStartNode=e("itemref[idref='"+t+"']",e(n)),packageDocCFIComponent=this.createCFIElementSteps($itemRefStartNode,"package",r,i,o),packageDocCFIComponent+"!"},generatePackageDocumentCFIComponentWithSpineIndex:function(t,n,r,i,o){return $itemRefStartNode=e(e("spine",n).children()[t]),packageDocCFIComponent=this.createCFIElementSteps($itemRefStartNode,"package",r,i,o),packageDocCFIComponent+"!"},generateCompleteCFI:function(e,t){return"epubcfi("+e+t+")"},validateStartTextNode:function(e,t){if(!e)throw new n.NodeTypeError(e,"Cannot generate a character offset from a starting point that is not a text node")
if(3!=e.nodeType)throw new n.NodeTypeError(e,"Cannot generate a character offset from a starting point that is not a text node")
if(0>t)throw new n.OutOfRangeError(t,0,"Character offset cannot be less than 0")
if(t>e.nodeValue.length)throw new n.OutOfRangeError(t,e.nodeValue.length-1,"character offset cannot be greater than the length of the text node")},validateStartElement:function(e){if(!e)throw new n.NodeTypeError(e,"CFI target element is undefined")
if(!e.nodeType||1!==e.nodeType)throw new n.NodeTypeError(e,"CFI target element is not an HTML element")},validateContentDocumentName:function(e){if(!e)throw new Error("The idref for the content document, as found in the spine, must be supplied")},validatePackageDocument:function(t,n){if(!t)throw new Error("A package document must be supplied to generate a CFI")
if(0===e(e("itemref[idref='"+n+"']",t)[0]).length)throw new Error("The idref of the content document could not be found in the spine")},createCFITextNodeStep:function(n,r,i,o,A){var a,s,c,l
a=n.parent(),s=t.applyBlacklist(a.contents(),i,o,A)
var u,d,f=0,h=0,p=0
return e.each(s,function(e){if(this.nodeType!==Node.TEXT_NODE&&u)this.nodeType===Node.ELEMENT_NODE?(u=!1,d=void 0,h=0):this.nodeType===Node.COMMENT_NODE?h=h+this.length+7:this.nodeType===Node.PROCESSING_INSTRUCTION_NODE&&(h=h+this.data.length+this.target.length+5)
else if(this.nodeType===Node.TEXT_NODE){if(this===n[0])return u?(l=d,p=h):l=f,!1
u=!0,h+=this.length,void 0===d&&(d=f,f+=1)}else this.nodeType===Node.ELEMENT_NODE?f+=1:this.nodeType===Node.COMMENT_NODE?(u=!0,h=h+this.length+7,void 0===d&&(d=f)):this.nodeType===Node.PROCESSING_INSTRUCTION_NODE&&(u=!0,h=h+this.data.length+this.target.length+5,void 0===d&&(d=f))}),c=2*l+1,"/"+c+":"+(p+r)},createCFIElementSteps:function(n,r,i,o,A){var a,s,c,l,u
return n[0]===r?"":(a=t.applyBlacklist(n.parent().children(),i,o,A),e.each(a,function(e,t){return this===n[0]?(c=e,!1):void 0}),l=2*(c+1),u=n.attr("id")?"/"+l+"["+n.attr("id")+"]":"/"+l,s=n.parent(),s.is(r)||n.is(r)?"html"===r?"!"+u:u:this.createCFIElementSteps(s,r,i,o,A)+u)}}
return r}
if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_generator"),define("readium_cfi_js/cfi_generator",["jquery","./cfi_instructions","./cfi_runtime_errors"],function(e,n,r){return t(e,n,r)})
else{if(console.log("!RequireJS ... cfi_generator"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)")
e.EPUBcfi.Generator=t($,e.EPUBcfi.CFIInstructions,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOfRangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this),function(e){var t=function(t,n,r,i,o){if("undefined"==typeof t)throw new Error("UNDEFINED?! cfiParser")
if("undefined"==typeof n)throw new Error("UNDEFINED?! cfiInterpreter")
if("undefined"==typeof r)throw new Error("UNDEFINED?! cfiInstructions")
if("undefined"==typeof i)throw new Error("UNDEFINED?! cfiRuntimeErrors")
if("undefined"==typeof o)throw new Error("UNDEFINED?! cfiGenerator")
var A={getContentDocHref:function(e,t){return n.getContentDocHref(e,t)},injectElement:function(e,t,r,i,o,A){return n.injectElement(e,t,r,i,o,A)},getTargetElement:function(e,t,r,i,o){return n.getTargetElement(e,t,r,i,o)},getTargetElementWithPartialCFI:function(e,t,r,i,o){return n.getTargetElementWithPartialCFI(e,t,r,i,o)},injectRangeElements:function(e,t,r,i,o,A,a){return n.injectRangeElements(e,t,r,i,o,A,a)},getRangeTargetElements:function(e,t,r,i,o){return n.getRangeTargetElements(e,t,r,i,o)},isRangeCfi:function(e){return n.isRangeCfi(e)},getTextTerminusInfoWithPartialCFI:function(e,t,r,i,o){return n.getTextTerminusInfoWithPartialCFI(e,t,r,i,o)},generateCharacterOffsetCFIComponent:function(e,t,n,r,i){return o.generateCharacterOffsetCFIComponent(e,t,n,r,i)},generateElementCFIComponent:function(e,t,n,r){return o.generateElementCFIComponent(e,t,n,r)},generatePackageDocumentCFIComponent:function(e,t,n,r,i){return o.generatePackageDocumentCFIComponent(e,t,n,r,i)},generatePackageDocumentCFIComponentWithSpineIndex:function(e,t,n,r,i){return o.generatePackageDocumentCFIComponentWithSpineIndex(e,t,n,r,i)},generateCompleteCFI:function(e,t){return o.generateCompleteCFI(e,t)},generateCharOffsetRangeComponent:function(e,t,n,r,i,A,a){return o.generateCharOffsetRangeComponent(e,t,n,r,i,A,a)},generateElementRangeComponent:function(e,t,n,r,i){return o.generateElementRangeComponent(e,t,n,r,i)},generateRangeComponent:function(e,t,n,r,i,A,a){return o.generateRangeComponent(e,t,n,r,i,A,a)},injectElementAtOffset:function(e,t,n){return r.injectCFIMarkerIntoText(e,t,n)}}
return A.CFIInstructions=r,A.Parser=t,A.Interpreter=n,A.Generator=o,A.NodeTypeError=i.NodeTypeError,A.OutOfRangeError=i.OutOfRangeError,A.TerminusError=i.TerminusError,A.CFIAssertionError=i.CFIAssertionError,e.EPUBcfi=A,console.log("#######################################"),A}
if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_API"),define("readium_cfi_js/cfi_API",["readium_cfi_js/cfi_parser","./cfi_interpreter","./cfi_instructions","./cfi_runtime_errors","./cfi_generator"],function(e,n,r,i,o){return t(e,n,r,i,o)})
else{if(console.log("!RequireJS ... cfi_API"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)")
t(e.EPUBcfi.Parser,e.EPUBcfi.Interpreter,e.EPUBcfi.CFIInstructions,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOfRangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError},e.EPUBcfi.Generator)}}("undefined"!=typeof window?window:this),define("readium_cfi_js",["readium_cfi_js/cfi_API"],function(e){return e}),function(){"use strict"
console.debug||(console.debug=console.log),console.info||(console.info=console.log),console.warn||(console.warn=console.log),console.error||(console.error=console.log)}(),define("console_shim",function(){}),define("eventEmitter",["require","exports","module"],function(e,t,n){"use strict"
function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(){}var o=Object.prototype.hasOwnProperty,A="function"!=typeof Object.create?"~":!1
i.prototype._events=void 0,i.prototype.eventNames=function(){var e,t=this._events,n=[]
if(!t)return n
for(e in t)o.call(t,e)&&n.push(A?e.slice(1):e)
return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},i.prototype.listeners=function(e,t){var n=A?A+e:e,r=this._events&&this._events[n]
if(t)return!!r
if(!r)return[]
if(r.fn)return[r.fn]
for(var i=0,o=r.length,a=new Array(o);o>i;i++)a[i]=r[i].fn
return a},i.prototype.emit=function(e,t,n,r,i,o){var a=A?A+e:e
if(!this._events||!this._events[a])return!1
var s,c,l=this._events[a],u=arguments.length
if("function"==typeof l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),u){case 1:return l.fn.call(l.context),!0
case 2:return l.fn.call(l.context,t),!0
case 3:return l.fn.call(l.context,t,n),!0
case 4:return l.fn.call(l.context,t,n,r),!0
case 5:return l.fn.call(l.context,t,n,r,i),!0
case 6:return l.fn.call(l.context,t,n,r,i,o),!0}for(c=1,s=new Array(u-1);u>c;c++)s[c-1]=arguments[c]
l.fn.apply(l.context,s)}else{var d,f=l.length
for(c=0;f>c;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),u){case 1:l[c].fn.call(l[c].context)
break
case 2:l[c].fn.call(l[c].context,t)
break
case 3:l[c].fn.call(l[c].context,t,n)
break
default:if(!s)for(d=1,s=new Array(u-1);u>d;d++)s[d-1]=arguments[d]
l[c].fn.apply(l[c].context,s)}}return!0},i.prototype.on=function(e,t,n){var i=new r(t,n||this),o=A?A+e:e
return this._events||(this._events=A?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],i]:this._events[o].push(i):this._events[o]=i,this},i.prototype.once=function(e,t,n){var i=new r(t,n||this,!0),o=A?A+e:e
return this._events||(this._events=A?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],i]:this._events[o].push(i):this._events[o]=i,this},i.prototype.removeListener=function(e,t,n,r){var i=A?A+e:e
if(!this._events||!this._events[i])return this
var o=this._events[i],a=[]
if(t)if(o.fn)(o.fn!==t||r&&!o.once||n&&o.context!==n)&&a.push(o)
else for(var s=0,c=o.length;c>s;s++)(o[s].fn!==t||r&&!o[s].once||n&&o[s].context!==n)&&a.push(o[s])
return a.length?this._events[i]=1===a.length?a[0]:a:delete this._events[i],this},i.prototype.removeAllListeners=function(e){return this._events?(e?delete this._events[A?A+e:e]:this._events=A?{}:Object.create(null),this):this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prototype.setMaxListeners=function(){return this},i.prefixed=A,"undefined"!=typeof n&&(n.exports=i)}),function(e){function t(e){throw new RangeError(_[e])}function n(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n])
return r}function r(e,t){var r=e.split("@"),i=""
r.length>1&&(i=r[0]+"@",e=r[1]),e=e.replace(D,".")
var o=e.split("."),A=n(o,t).join(".")
return i+A}function i(e){for(var t,n,r=[],i=0,o=e.length;o>i;)t=e.charCodeAt(i++),t>=55296&&56319>=t&&o>i?(n=e.charCodeAt(i++),56320==(64512&n)?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--)):r.push(t)
return r}function o(e){return n(e,function(e){var t=""
return e>65535&&(e-=65536,t+=N(e>>>10&1023|55296),e=56320|1023&e),t+=N(e)}).join("")}function A(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:y}function a(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function s(e,t,n){var r=0
for(e=n?R(e/x):e>>1,e+=R(e/t);e>T*B>>1;r+=y)e=R(e/T)
return R(r+(T+1)*e/(e+b))}function c(e){var n,r,i,a,c,l,u,d,f,h,p=[],g=e.length,m=0,b=C,x=E
for(r=e.lastIndexOf(S),0>r&&(r=0),i=0;r>i;++i)e.charCodeAt(i)>=128&&t("not-basic"),p.push(e.charCodeAt(i))
for(a=r>0?r+1:0;g>a;){for(c=m,l=1,u=y;a>=g&&t("invalid-input"),d=A(e.charCodeAt(a++)),(d>=y||d>R((v-m)/l))&&t("overflow"),m+=d*l,f=x>=u?w:u>=x+B?B:u-x,!(f>d);u+=y)h=y-f,l>R(v/h)&&t("overflow"),l*=h
n=p.length+1,x=s(m-c,n,0==c),R(m/n)>v-b&&t("overflow"),b+=R(m/n),m%=n,p.splice(m++,0,b)}return o(p)}function l(e){var n,r,o,A,c,l,u,d,f,h,p,g,m,b,x,I=[]
for(e=i(e),g=e.length,n=C,r=0,c=E,l=0;g>l;++l)p=e[l],128>p&&I.push(N(p))
for(o=A=I.length,A&&I.push(S);g>o;){for(u=v,l=0;g>l;++l)p=e[l],p>=n&&u>p&&(u=p)
for(m=o+1,u-n>R((v-r)/m)&&t("overflow"),r+=(u-n)*m,n=u,l=0;g>l;++l)if(p=e[l],n>p&&++r>v&&t("overflow"),p==n){for(d=r,f=y;h=c>=f?w:f>=c+B?B:f-c,!(h>d);f+=y)x=d-h,b=y-h,I.push(N(a(h+x%b,0))),d=R(x/b)
I.push(N(a(d,0))),c=s(r,m,o==A),r=0,++o}++r,++n}return I.join("")}function u(e){return r(e,function(e){return I.test(e)?c(e.slice(4).toLowerCase()):e})}function d(e){return r(e,function(e){return O.test(e)?"xn--"+l(e):e})}var f="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,p="object"==typeof global&&global
p.global!==p&&p.window!==p&&p.self!==p||(e=p)
var g,m,v=2147483647,y=36,w=1,B=26,b=38,x=700,E=72,C=128,S="-",I=/^xn--/,O=/[^\x20-\x7E]/,D=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},T=y-w,R=Math.floor,N=String.fromCharCode
if(g={version:"1.3.2",ucs2:{decode:i,encode:o},decode:c,encode:l,toASCII:d,toUnicode:u},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",[],function(){return g})
else if(f&&h)if(module.exports==f)h.exports=g
else for(m in g)g.hasOwnProperty(m)&&(f[m]=g[m])
else e.punycode=g}(this),function(e,t){"use strict"
"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define("IPv6",t):e.IPv6=t(e)}(this,function(e){"use strict"
function t(e){var t=e.toLowerCase(),n=t.split(":"),r=n.length,i=8
""===n[0]&&""===n[1]&&""===n[2]?(n.shift(),n.shift()):""===n[0]&&""===n[1]?n.shift():""===n[r-1]&&""===n[r-2]&&n.pop(),r=n.length,-1!==n[r-1].indexOf(".")&&(i=7)
var o
for(o=0;r>o&&""!==n[o];o++);if(i>o)for(n.splice(o,1,"0000");n.length<i;)n.splice(o,0,"0000")
for(var A,a=0;i>a;a++){A=n[a].split("")
for(var s=0;3>s&&("0"===A[0]&&A.length>1);s++)A.splice(0,1)
n[a]=A.join("")}var c=-1,l=0,u=0,d=-1,f=!1
for(a=0;i>a;a++)f?"0"===n[a]?u+=1:(f=!1,u>l&&(c=d,l=u)):"0"===n[a]&&(f=!0,d=a,u=1)
u>l&&(c=d,l=u),l>1&&n.splice(c,l,""),r=n.length
var h=""
for(""===n[0]&&(h=":"),a=0;r>a&&(h+=n[a],a!==r-1);a++)h+=":"
return""===n[r-1]&&(h+=":"),h}function n(){return e.IPv6===this&&(e.IPv6=r),this}var r=e&&e.IPv6
return{best:t,noConflict:n}}),function(e,t){"use strict"
"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define("SecondLevelDomains",t):e.SecondLevelDomains=t(e)}(this,function(e){"use strict"
var t=e&&e.SecondLevelDomains,n={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch "},has:function(e){var t=e.lastIndexOf(".")
if(0>=t||t>=e.length-1)return!1
var r=e.lastIndexOf(".",t-1)
if(0>=r||r>=t-1)return!1
var i=n.list[e.slice(t+1)]
return i?i.indexOf(" "+e.slice(r+1,t)+" ")>=0:!1},is:function(e){var t=e.lastIndexOf(".")
if(0>=t||t>=e.length-1)return!1
var r=e.lastIndexOf(".",t-1)
if(r>=0)return!1
var i=n.list[e.slice(t+1)]
return i?i.indexOf(" "+e.slice(0,t)+" ")>=0:!1},get:function(e){var t=e.lastIndexOf(".")
if(0>=t||t>=e.length-1)return null
var r=e.lastIndexOf(".",t-1)
if(0>=r||r>=t-1)return null
var i=n.list[e.slice(t+1)]
return i?i.indexOf(" "+e.slice(r+1,t)+" ")<0?null:e.slice(r+1):null},noConflict:function(){return e.SecondLevelDomains===this&&(e.SecondLevelDomains=t),this}}
return n}),function(e,t){"use strict"
"object"==typeof exports?module.exports=t(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"==typeof define&&define.amd?define("URIjs",["./punycode","./IPv6","./SecondLevelDomains"],t):e.URI=t(e.punycode,e.IPv6,e.SecondLevelDomains,e)}(this,function(e,t,n,r){"use strict"
function i(e,t){var n=arguments.length>=1,r=arguments.length>=2
if(!(this instanceof i))return n?r?new i(e,t):new i(e):new i
if(void 0===e){if(n)throw new TypeError("undefined is not a valid argument for URI")
e="undefined"!=typeof location?location.href+"":""}return this.href(e),void 0!==t?this.absoluteTo(t):this}function o(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function A(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function a(e){return"Array"===A(e)}function s(e,t){var n,r,i={}
if("RegExp"===A(t))i=null
else if(a(t))for(n=0,r=t.length;r>n;n++)i[t[n]]=!0
else i[t]=!0
for(n=0,r=e.length;r>n;n++){var o=i&&void 0!==i[e[n]]||!i&&t.test(e[n])
o&&(e.splice(n,1),r--,n--)}return e}function c(e,t){var n,r
if(a(t)){for(n=0,r=t.length;r>n;n++)if(!c(e,t[n]))return!1
return!0}var i=A(t)
for(n=0,r=e.length;r>n;n++)if("RegExp"===i){if("string"==typeof e[n]&&e[n].match(t))return!0}else if(e[n]===t)return!0
return!1}function l(e,t){if(!a(e)||!a(t))return!1
if(e.length!==t.length)return!1
e.sort(),t.sort()
for(var n=0,r=e.length;r>n;n++)if(e[n]!==t[n])return!1
return!0}function u(e){var t=/^\/+|\/+$/g
return e.replace(t,"")}function d(e){return escape(e)}function f(e){return encodeURIComponent(e).replace(/[!'()*]/g,d).replace(/\*/g,"%2A")}function h(e){return function(t,n){return void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!n),this)}}function p(e,t){return function(n,r){return void 0===n?this._parts[e]||"":(null!==n&&(n+="",n.charAt(0)===t&&(n=n.substring(1))),this._parts[e]=n,this.build(!r),this)}}var g=r&&r.URI
i.version="1.18.0"
var m=i.prototype,v=Object.prototype.hasOwnProperty
i._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:i.duplicateQueryParameters,escapeQuerySpace:i.escapeQuerySpace}},i.duplicateQueryParameters=!1,i.escapeQuerySpace=!0,i.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,i.idn_expression=/[^a-z0-9\.-]/i,i.punycode_expression=/(xn--)/i,i.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,i.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,i.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/},i.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},i.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/,i.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},i.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase()
if("input"!==t||"image"===e.type)return i.domAttributes[t]}},i.encode=f,i.decode=decodeURIComponent,i.iso8859=function(){i.encode=escape,i.decode=unescape},i.unicode=function(){i.encode=f,i.decode=decodeURIComponent},i.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},i.encodeQuery=function(e,t){var n=i.encode(e+"")
return void 0===t&&(t=i.escapeQuerySpace),t?n.replace(/%20/g,"+"):n},i.decodeQuery=function(e,t){e+="",void 0===t&&(t=i.escapeQuerySpace)
try{return i.decode(t?e.replace(/\+/g,"%20"):e)}catch(n){return e}}
var y,w={encode:"encode",decode:"decode"},B=function(e,t){return function(n){try{return i[t](n+"").replace(i.characters[e][t].expression,function(n){return i.characters[e][t].map[n]})}catch(r){return n}}}
for(y in w)i[y+"PathSegment"]=B("pathname",w[y]),i[y+"UrnPathSegment"]=B("urnpath",w[y])
var b=function(e,t,n){return function(r){var o
o=n?function(e){return i[t](i[n](e))}:i[t]
for(var A=(r+"").split(e),a=0,s=A.length;s>a;a++)A[a]=o(A[a])
return A.join(e)}}
i.decodePath=b("/","decodePathSegment"),i.decodeUrnPath=b(":","decodeUrnPathSegment"),i.recodePath=b("/","encodePathSegment","decode"),i.recodeUrnPath=b(":","encodeUrnPathSegment","decode"),i.encodeReserved=B("reserved","encode"),i.parse=function(e,t){var n
return t||(t={}),n=e.indexOf("#"),n>-1&&(t.fragment=e.substring(n+1)||null,e=e.substring(0,n)),n=e.indexOf("?"),n>-1&&(t.query=e.substring(n+1)||null,e=e.substring(0,n)),"//"===e.substring(0,2)?(t.protocol=null,e=e.substring(2),e=i.parseAuthority(e,t)):(n=e.indexOf(":"),n>-1&&(t.protocol=e.substring(0,n)||null,t.protocol&&!t.protocol.match(i.protocol_expression)?t.protocol=void 0:"//"===e.substring(n+1,n+3)?(e=e.substring(n+3),e=i.parseAuthority(e,t)):(e=e.substring(n+1),t.urn=!0))),t.path=e,t},i.parseHost=function(e,t){e=e.replace(/\\/g,"/")
var n,r,i=e.indexOf("/")
if(-1===i&&(i=e.length),"["===e.charAt(0))n=e.indexOf("]"),t.hostname=e.substring(1,n)||null,t.port=e.substring(n+2,i)||null,"/"===t.port&&(t.port=null)
else{var o=e.indexOf(":"),A=e.indexOf("/"),a=e.indexOf(":",o+1);-1!==a&&(-1===A||A>a)?(t.hostname=e.substring(0,i)||null,t.port=null):(r=e.substring(0,i).split(":"),t.hostname=r[0]||null,t.port=r[1]||null)}return t.hostname&&"/"!==e.substring(i).charAt(0)&&(i++,e="/"+e),e.substring(i)||"/"},i.parseAuthority=function(e,t){return e=i.parseUserinfo(e,t),i.parseHost(e,t)},i.parseUserinfo=function(e,t){var n,r=e.indexOf("/"),o=e.lastIndexOf("@",r>-1?r:e.length-1)
return o>-1&&(-1===r||r>o)?(n=e.substring(0,o).split(":"),t.username=n[0]?i.decode(n[0]):null,n.shift(),t.password=n[0]?i.decode(n.join(":")):null,e=e.substring(o+1)):(t.username=null,t.password=null),e},i.parseQuery=function(e,t){if(!e)return{}
if(e=e.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,""),!e)return{}
for(var n,r,o,A={},a=e.split("&"),s=a.length,c=0;s>c;c++)n=a[c].split("="),r=i.decodeQuery(n.shift(),t),o=n.length?i.decodeQuery(n.join("="),t):null,v.call(A,r)?("string"!=typeof A[r]&&null!==A[r]||(A[r]=[A[r]]),A[r].push(o)):A[r]=o
return A},i.build=function(e){var t=""
return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=i.buildAuthority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragment),t},i.buildHost=function(e){var t=""
return e.hostname?(t+=i.ip6_expression.test(e.hostname)?"["+e.hostname+"]":e.hostname,e.port&&(t+=":"+e.port),t):""},i.buildAuthority=function(e){return i.buildUserinfo(e)+i.buildHost(e)},i.buildUserinfo=function(e){var t=""
return e.username&&(t+=i.encode(e.username)),e.password&&(t+=":"+i.encode(e.password)),t&&(t+="@"),t},i.buildQuery=function(e,t,n){var r,o,A,s,c=""
for(o in e)if(v.call(e,o)&&o)if(a(e[o]))for(r={},A=0,s=e[o].length;s>A;A++)void 0!==e[o][A]&&void 0===r[e[o][A]+""]&&(c+="&"+i.buildQueryParameter(o,e[o][A],n),t!==!0&&(r[e[o][A]+""]=!0))
else void 0!==e[o]&&(c+="&"+i.buildQueryParameter(o,e[o],n))
return c.substring(1)},i.buildQueryParameter=function(e,t,n){return i.encodeQuery(e,n)+(null!==t?"="+i.encodeQuery(t,n):"")},i.addQuery=function(e,t,n){if("object"==typeof t)for(var r in t)v.call(t,r)&&i.addQuery(e,r,t[r])
else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
if(void 0===e[t])return void(e[t]=n)
"string"==typeof e[t]&&(e[t]=[e[t]]),a(n)||(n=[n]),e[t]=(e[t]||[]).concat(n)}},i.removeQuery=function(e,t,n){var r,o,c
if(a(t))for(r=0,o=t.length;o>r;r++)e[t[r]]=void 0
else if("RegExp"===A(t))for(c in e)t.test(c)&&(e[c]=void 0)
else if("object"==typeof t)for(c in t)v.call(t,c)&&i.removeQuery(e,c,t[c])
else{if("string"!=typeof t)throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter")
void 0!==n?"RegExp"===A(n)?!a(e[t])&&n.test(e[t])?e[t]=void 0:e[t]=s(e[t],n):e[t]!==String(n)||a(n)&&1!==n.length?a(e[t])&&(e[t]=s(e[t],n)):e[t]=void 0:e[t]=void 0}},i.hasQuery=function(e,t,n,r){switch(A(t)){case"String":break
case"RegExp":for(var o in e)if(v.call(e,o)&&t.test(o)&&(void 0===n||i.hasQuery(e,o,n)))return!0
return!1
case"Object":for(var s in t)if(v.call(t,s)&&!i.hasQuery(e,s,t[s]))return!1
return!0
default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")}switch(A(n)){case"Undefined":return t in e
case"Boolean":var u=Boolean(a(e[t])?e[t].length:e[t])
return n===u
case"Function":return!!n(e[t],t,e)
case"Array":if(!a(e[t]))return!1
var d=r?c:l
return d(e[t],n)
case"RegExp":return a(e[t])?r?c(e[t],n):!1:Boolean(e[t]&&e[t].match(n))
case"Number":n=String(n)
case"String":return a(e[t])?r?c(e[t],n):!1:e[t]===n
default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},i.joinPaths=function(){for(var e=[],t=[],n=0,r=0;r<arguments.length;r++){var o=new i(arguments[r])
e.push(o)
for(var A=o.segment(),a=0;a<A.length;a++)"string"==typeof A[a]&&t.push(A[a]),A[a]&&n++}if(!t.length||!n)return new i("")
var s=new i("").segment(t)
return""!==e[0].path()&&"/"!==e[0].path().slice(0,1)||s.path("/"+s.path()),s.normalize()},i.commonPath=function(e,t){var n,r=Math.min(e.length,t.length)
for(n=0;r>n;n++)if(e.charAt(n)!==t.charAt(n)){n--
break}return 1>n?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":("/"===e.charAt(n)&&"/"===t.charAt(n)||(n=e.substring(0,n).lastIndexOf("/")),e.substring(0,n+1))},i.withinString=function(e,t,n){n||(n={})
var r=n.start||i.findUri.start,o=n.end||i.findUri.end,A=n.trim||i.findUri.trim,a=/[a-z0-9-]=["']?$/i
for(r.lastIndex=0;;){var s=r.exec(e)
if(!s)break
var c=s.index
if(n.ignoreHtml){var l=e.slice(Math.max(c-3,0),c)
if(l&&a.test(l))continue}var u=c+e.slice(c).search(o),d=e.slice(c,u).replace(A,"")
if(!n.ignore||!n.ignore.test(d)){u=c+d.length
var f=t(d,c,u,e)
e=e.slice(0,c)+f+e.slice(u),r.lastIndex=c+f.length}}return r.lastIndex=0,e},i.ensureValidHostname=function(t){if(t.match(i.invalid_hostname_characters)){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available')
if(e.toASCII(t).match(i.invalid_hostname_characters))throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-]')}},i.noConflict=function(e){if(e){var t={URI:this.noConflict()}
return r.URITemplate&&"function"==typeof r.URITemplate.noConflict&&(t.URITemplate=r.URITemplate.noConflict()),r.IPv6&&"function"==typeof r.IPv6.noConflict&&(t.IPv6=r.IPv6.noConflict()),r.SecondLevelDomains&&"function"==typeof r.SecondLevelDomains.noConflict&&(t.SecondLevelDomains=r.SecondLevelDomains.noConflict()),t}return r.URI===this&&(r.URI=g),this},m.build=function(e){return e===!0?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=i.build(this._parts),this._deferred_build=!1),this},m.clone=function(){return new i(this)},m.valueOf=m.toString=function(){return this.build(!1)._string},m.protocol=h("protocol"),m.username=h("username"),m.password=h("password"),m.hostname=h("hostname"),m.port=h("port"),m.query=p("query","?"),m.fragment=p("fragment","#"),m.search=function(e,t){var n=this.query(e,t)
return"string"==typeof n&&n.length?"?"+n:n},m.hash=function(e,t){var n=this.fragment(e,t)
return"string"==typeof n&&n.length?"#"+n:n},m.pathname=function(e,t){if(void 0===e||e===!0){var n=this._parts.path||(this._parts.hostname?"/":"")
return e?(this._parts.urn?i.decodeUrnPath:i.decodePath)(n):n}return this._parts.urn?this._parts.path=e?i.recodeUrnPath(e):"":this._parts.path=e?i.recodePath(e):"/",this.build(!t),this},m.path=m.pathname,m.href=function(e,t){var n
if(void 0===e)return this.toString()
this._string="",this._parts=i._parts()
var r=e instanceof i,o="object"==typeof e&&(e.hostname||e.path||e.pathname)
if(e.nodeName){var A=i.getDomAttribute(e)
e=e[A]||"",o=!1}if(!r&&o&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e||e instanceof String)this._parts=i.parse(String(e),this._parts)
else{if(!r&&!o)throw new TypeError("invalid input")
var a=r?e._parts:e
for(n in a)v.call(this._parts,n)&&(this._parts[n]=a[n])}return this.build(!t),this},m.is=function(e){var t=!1,r=!1,o=!1,A=!1,a=!1,s=!1,c=!1,l=!this._parts.urn
switch(this._parts.hostname&&(l=!1,r=i.ip4_expression.test(this._parts.hostname),o=i.ip6_expression.test(this._parts.hostname),t=r||o,A=!t,a=A&&n&&n.has(this._parts.hostname),s=A&&i.idn_expression.test(this._parts.hostname),c=A&&i.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return l
case"absolute":return!l
case"domain":case"name":return A
case"sld":return a
case"ip":return t
case"ip4":case"ipv4":case"inet4":return r
case"ip6":case"ipv6":case"inet6":return o
case"idn":return s
case"url":return!this._parts.urn
case"urn":return!!this._parts.urn
case"punycode":return c}return null}
var x=m.protocol,E=m.port,C=m.hostname
m.protocol=function(e,t){if(void 0!==e&&e&&(e=e.replace(/:(\/\/)?$/,""),!e.match(i.protocol_expression)))throw new TypeError('Protocol "'+e+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]")
return x.call(this,e,t)},m.scheme=m.protocol,m.port=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0!==e&&(0===e&&(e=null),e&&(e+="",":"===e.charAt(0)&&(e=e.substring(1)),e.match(/[^0-9]/))))throw new TypeError('Port "'+e+'" contains characters other than [0-9]')
return E.call(this,e,t)},m.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0!==e){var n={},r=i.parseHost(e,n)
if("/"!==r)throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
e=n.hostname}return C.call(this,e,t)},m.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){var n=this.protocol(),r=this.authority()
return r?(n?n+"://":"")+this.authority():""}var o=i(e)
return this.protocol(o.protocol()).authority(o.authority()).build(!t),this},m.host=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e)return this._parts.hostname?i.buildHost(this._parts):""
var n=i.parseHost(e,this._parts)
if("/"!==n)throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
return this.build(!t),this},m.authority=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e)return this._parts.hostname?i.buildAuthority(this._parts):""
var n=i.parseAuthority(e,this._parts)
if("/"!==n)throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
return this.build(!t),this},m.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){var n=i.buildUserinfo(this._parts)
return n?n.substring(0,n.length-1):n}return"@"!==e[e.length-1]&&(e+="@"),i.parseUserinfo(e,this._parts),this.build(!t),this},m.resource=function(e,t){var n
return void 0===e?this.path()+this.search()+this.hash():(n=i.parse(e),this._parts.path=n.path,this._parts.query=n.query,this._parts.fragment=n.fragment,this.build(!t),this)},m.subdomain=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var n=this._parts.hostname.length-this.domain().length-1
return this._parts.hostname.substring(0,n)||""}var r=this._parts.hostname.length-this.domain().length,A=this._parts.hostname.substring(0,r),a=new RegExp("^"+o(A))
return e&&"."!==e.charAt(e.length-1)&&(e+="."),e&&i.ensureValidHostname(e),this._parts.hostname=this._parts.hostname.replace(a,e),this.build(!t),this},m.domain=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var n=this._parts.hostname.match(/\./g)
if(n&&n.length<2)return this._parts.hostname
var r=this._parts.hostname.length-this.tld(t).length-1
return r=this._parts.hostname.lastIndexOf(".",r-1)+1,this._parts.hostname.substring(r)||""}if(!e)throw new TypeError("cannot set domain empty")
if(i.ensureValidHostname(e),!this._parts.hostname||this.is("IP"))this._parts.hostname=e
else{var A=new RegExp(o(this.domain())+"$")
this._parts.hostname=this._parts.hostname.replace(A,e)}return this.build(!t),this},m.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var r=this._parts.hostname.lastIndexOf("."),i=this._parts.hostname.substring(r+1)
return t!==!0&&n&&n.list[i.toLowerCase()]?n.get(this._parts.hostname)||i:i}var A
if(!e)throw new TypeError("cannot set TLD empty")
if(e.match(/[^a-zA-Z0-9-]/)){if(!n||!n.is(e))throw new TypeError('TLD "'+e+'" contains characters other than [A-Z0-9]')
A=new RegExp(o(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(A,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host")
A=new RegExp(o(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(A,e)}return this.build(!t),this},m.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e||e===!0){if(!this._parts.path&&!this._parts.hostname)return""
if("/"===this._parts.path)return"/"
var n=this._parts.path.length-this.filename().length-1,r=this._parts.path.substring(0,n)||(this._parts.hostname?"/":"")
return e?i.decodePath(r):r}var A=this._parts.path.length-this.filename().length,a=this._parts.path.substring(0,A),s=new RegExp("^"+o(a))
return this.is("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=i.recodePath(e),this._parts.path=this._parts.path.replace(s,e),this.build(!t),this},m.filename=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e||e===!0){if(!this._parts.path||"/"===this._parts.path)return""
var n=this._parts.path.lastIndexOf("/"),r=this._parts.path.substring(n+1)
return e?i.decodePathSegment(r):r}var A=!1
"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\.?\//)&&(A=!0)
var a=new RegExp(o(this.filename())+"$")
return e=i.recodePath(e),this._parts.path=this._parts.path.replace(a,e),A?this.normalizePath(t):this.build(!t),this},m.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e||e===!0){if(!this._parts.path||"/"===this._parts.path)return""
var n,r,A=this.filename(),a=A.lastIndexOf(".")
return-1===a?"":(n=A.substring(a+1),r=/^[a-z0-9%]+$/i.test(n)?n:"",e?i.decodePathSegment(r):r)}"."===e.charAt(0)&&(e=e.substring(1))
var s,c=this.suffix()
if(c)s=e?new RegExp(o(c)+"$"):new RegExp(o("."+c)+"$")
else{if(!e)return this
this._parts.path+="."+i.recodePath(e)}return s&&(e=i.recodePath(e),this._parts.path=this._parts.path.replace(s,e)),this.build(!t),this},m.segment=function(e,t,n){var r=this._parts.urn?":":"/",i=this.path(),o="/"===i.substring(0,1),A=i.split(r)
if(void 0!==e&&"number"!=typeof e&&(n=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)throw new Error('Bad segment "'+e+'", must be 0-based integer')
if(o&&A.shift(),0>e&&(e=Math.max(A.length+e,0)),void 0===t)return void 0===e?A:A[e]
if(null===e||void 0===A[e])if(a(t)){A=[]
for(var s=0,c=t.length;c>s;s++)(t[s].length||A.length&&A[A.length-1].length)&&(A.length&&!A[A.length-1].length&&A.pop(),A.push(u(t[s])))}else(t||"string"==typeof t)&&(t=u(t),""===A[A.length-1]?A[A.length-1]=t:A.push(t))
else t?A[e]=u(t):A.splice(e,1)
return o&&A.unshift(""),this.path(A.join(r),n)},m.segmentCoded=function(e,t,n){var r,o,A
if("number"!=typeof e&&(n=t,t=e,e=void 0),void 0===t){if(r=this.segment(e,t,n),a(r))for(o=0,A=r.length;A>o;o++)r[o]=i.decode(r[o])
else r=void 0!==r?i.decode(r):void 0
return r}if(a(t))for(o=0,A=t.length;A>o;o++)t[o]=i.encode(t[o])
else t="string"==typeof t||t instanceof String?i.encode(t):t
return this.segment(e,t,n)}
var S=m.query
return m.query=function(e,t){if(e===!0)return i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
if("function"==typeof e){var n=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace),r=e.call(this,n)
return this._parts.query=i.buildQuery(r||n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=i.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):S.call(this,e,t)},m.setQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
if("string"==typeof e||e instanceof String)r[e]=void 0!==t?t:null
else{if("object"!=typeof e)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
for(var o in e)v.call(e,o)&&(r[o]=e[o])}return this._parts.query=i.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},m.addQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return i.addQuery(r,e,void 0===t?null:t),this._parts.query=i.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},m.removeQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return i.removeQuery(r,e,t),this._parts.query=i.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},m.hasQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return i.hasQuery(r,e,t,n)},m.setSearch=m.setQuery,m.addSearch=m.addQuery,m.removeSearch=m.removeQuery,m.hasSearch=m.hasQuery,m.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},m.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},m.normalizeHostname=function(n){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!n)),this},m.normalizePort=function(e){return"string"==typeof this._parts.protocol&&this._parts.port===i.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},m.normalizePath=function(e){var t=this._parts.path
if(!t)return this
if(this._parts.urn)return this._parts.path=i.recodeUrnPath(this._parts.path),this.build(!e),this
if("/"===this._parts.path)return this
t=i.recodePath(t)
var n,r,o,A=""
for("/"!==t.charAt(0)&&(n=!0,t="/"+t),"/.."!==t.slice(-3)&&"/."!==t.slice(-2)||(t+="/"),t=t.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),n&&(A=t.substring(1).match(/^(\.\.\/)+/)||"",A&&(A=A[0]));;){if(r=t.search(/\/\.\.(\/|$)/),-1===r)break
0!==r?(o=t.substring(0,r).lastIndexOf("/"),-1===o&&(o=r),t=t.substring(0,o)+t.substring(r+3)):t=t.substring(3)}return n&&this.is("relative")&&(t=A+t.substring(1)),this._parts.path=t,this.build(!e),this},m.normalizePathname=m.normalizePath,m.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!e)),this},m.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},m.normalizeSearch=m.normalizeQuery,m.normalizeHash=m.normalizeFragment,m.iso8859=function(){var e=i.encode,t=i.decode
i.encode=escape,i.decode=decodeURIComponent
try{this.normalize()}finally{i.encode=e,i.decode=t}return this},m.unicode=function(){var e=i.encode,t=i.decode
i.encode=f,i.decode=unescape
try{this.normalize()}finally{i.encode=e,i.decode=t}return this},m.readable=function(){var t=this.clone()
t.username("").password("").normalize()
var n=""
if(t._parts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(n+=e.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t._parts.port)):n+=t.host()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(n+="/"),n+=t.path(!0),t._parts.query){for(var r="",o=0,A=t._parts.query.split("&"),a=A.length;a>o;o++){var s=(A[o]||"").split("=")
r+="&"+i.decodeQuery(s[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==s[1]&&(r+="="+i.decodeQuery(s[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}n+="?"+r.substring(1)}return n+=i.decodeQuery(t.hash(),!0)},m.absoluteTo=function(e){var t,n,r,o=this.clone(),A=["protocol","username","password","hostname","port"]
if(e instanceof i||(e=new i(e)),"filesystem"==this._parts.protocol)return o
if("filesystem"==e._parts.protocol){var a=this.absoluteTo(e._parts.path)
return-1!==e._parts.path.indexOf("chrome-extension:")||-1!==e._parts.path.indexOf("http:")||-1!==e._parts.path.indexOf("https:")?new i("filesystem:"+a.toString()):a}if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components")
if(o._parts.protocol||(o._parts.protocol=e._parts.protocol),this._parts.hostname)return o
for(n=0;r=A[n];n++)o._parts[r]=e._parts[r]
return o._parts.path?".."===o._parts.path.substring(-2)&&(o._parts.path+="/"):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=e._parts.query)),"/"!==o.path().charAt(0)&&(t=e.directory(),t=t?t:0===e.path().indexOf("/")?"/":"",o._parts.path=(t?t+"/":"")+o._parts.path,o.normalizePath()),o.build(),o},m.relativeTo=function(e){var t,n,r,o,A,a=this.clone().normalize()
if(a._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components")
if(e=new i(e).normalize(),t=a._parts,n=e._parts,o=a.path(),A=e.path(),"/"!==o.charAt(0))throw new Error("URI is already relative")
if("/"!==A.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI")
if(t.protocol===n.protocol&&(t.protocol=null),t.username!==n.username||t.password!==n.password)return a.build()
if(null!==t.protocol||null!==t.username||null!==t.password)return a.build()
if(t.hostname!==n.hostname||t.port!==n.port)return a.build()
if(t.hostname=null,t.port=null,o===A)return t.path="",a.build()
if(r=i.commonPath(o,A),!r)return a.build()
var s=n.path.substring(r.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../")
return t.path=s+t.path.substring(r.length)||"./",a.build()},m.equals=function(e){var t,n,r,o=this.clone(),A=new i(e),s={},c={},u={}
if(o.normalize(),A.normalize(),o.toString()===A.toString())return!0
if(t=o.query(),n=A.query(),o.query(""),A.query(""),o.toString()!==A.toString())return!1
if(t.length!==n.length)return!1
s=i.parseQuery(t,this._parts.escapeQuerySpace),c=i.parseQuery(n,this._parts.escapeQuerySpace)
for(r in s)if(v.call(s,r)){if(a(s[r])){if(!l(s[r],c[r]))return!1}else if(s[r]!==c[r])return!1
u[r]=!0}for(r in c)if(v.call(c,r)&&!u[r])return!1
return!0},m.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},m.escapeQuerySpace=function(e){return this._parts.escapeQuerySpace=!!e,this},i}),function(){function e(e){function t(t,n,r,i,o,A){for(;o>=0&&A>o;o+=e){var a=i?i[o]:o
r=n(r,t[a],a,t)}return r}return function(n,r,i,o){r=y(r,o,4)
var A=!S(n)&&v.keys(n),a=(A||n).length,s=e>0?0:a-1
return arguments.length<3&&(i=n[A?A[s]:s],s+=e),t(n,r,i,A,s,a)}}function t(e){return function(t,n,r){n=w(n,r)
for(var i=C(t),o=e>0?0:i-1;o>=0&&i>o;o+=e)if(n(t[o],o,t))return o
return-1}}function n(e,t,n){return function(r,i,o){var A=0,a=C(r)
if("number"==typeof o)e>0?A=o>=0?o:Math.max(o+a,A):a=o>=0?Math.min(o+1,a):o+a+1
else if(n&&o&&a)return o=n(r,i),r[o]===i?o:-1
if(i!==i)return o=t(l.call(r,A,a),v.isNaN),o>=0?o+A:-1
for(o=e>0?A:a-1;o>=0&&a>o;o+=e)if(r[o]===i)return o
return-1}}function r(e,t){var n=T.length,r=e.constructor,i=v.isFunction(r)&&r.prototype||a,o="constructor"
for(v.has(e,o)&&!v.contains(t,o)&&t.push(o);n--;)o=T[n],o in e&&e[o]!==i[o]&&!v.contains(t,o)&&t.push(o)}var i=this,o=i._,A=Array.prototype,a=Object.prototype,s=Function.prototype,c=A.push,l=A.slice,u=a.toString,d=a.hasOwnProperty,f=Array.isArray,h=Object.keys,p=s.bind,g=Object.create,m=function(){},v=function(e){return e instanceof v?e:this instanceof v?void(this._wrapped=e):new v(e)}
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=v),exports._=v):i._=v,v.VERSION="1.8.3"
var y=function(e,t,n){if(void 0===t)return e
switch(null==n?3:n){case 1:return function(n){return e.call(t,n)}
case 2:return function(n,r){return e.call(t,n,r)}
case 3:return function(n,r,i){return e.call(t,n,r,i)}
case 4:return function(n,r,i,o){return e.call(t,n,r,i,o)}}return function(){return e.apply(t,arguments)}},w=function(e,t,n){return null==e?v.identity:v.isFunction(e)?y(e,t,n):v.isObject(e)?v.matcher(e):v.property(e)}
v.iteratee=function(e,t){return w(e,t,1/0)}
var B=function(e,t){return function(n){var r=arguments.length
if(2>r||null==n)return n
for(var i=1;r>i;i++)for(var o=arguments[i],A=e(o),a=A.length,s=0;a>s;s++){var c=A[s]
t&&void 0!==n[c]||(n[c]=o[c])}return n}},b=function(e){if(!v.isObject(e))return{}
if(g)return g(e)
m.prototype=e
var t=new m
return m.prototype=null,t},x=function(e){return function(t){return null==t?void 0:t[e]}},E=Math.pow(2,53)-1,C=x("length"),S=function(e){var t=C(e)
return"number"==typeof t&&t>=0&&E>=t}
v.each=v.forEach=function(e,t,n){t=y(t,n)
var r,i
if(S(e))for(r=0,i=e.length;i>r;r++)t(e[r],r,e)
else{var o=v.keys(e)
for(r=0,i=o.length;i>r;r++)t(e[o[r]],o[r],e)}return e},v.map=v.collect=function(e,t,n){t=w(t,n)
for(var r=!S(e)&&v.keys(e),i=(r||e).length,o=Array(i),A=0;i>A;A++){var a=r?r[A]:A
o[A]=t(e[a],a,e)}return o},v.reduce=v.foldl=v.inject=e(1),v.reduceRight=v.foldr=e(-1),v.find=v.detect=function(e,t,n){var r
return r=S(e)?v.findIndex(e,t,n):v.findKey(e,t,n),void 0!==r&&-1!==r?e[r]:void 0},v.filter=v.select=function(e,t,n){var r=[]
return t=w(t,n),v.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},v.reject=function(e,t,n){return v.filter(e,v.negate(w(t)),n)},v.every=v.all=function(e,t,n){t=w(t,n)
for(var r=!S(e)&&v.keys(e),i=(r||e).length,o=0;i>o;o++){var A=r?r[o]:o
if(!t(e[A],A,e))return!1}return!0},v.some=v.any=function(e,t,n){t=w(t,n)
for(var r=!S(e)&&v.keys(e),i=(r||e).length,o=0;i>o;o++){var A=r?r[o]:o
if(t(e[A],A,e))return!0}return!1},v.contains=v.includes=v.include=function(e,t,n,r){return S(e)||(e=v.values(e)),("number"!=typeof n||r)&&(n=0),v.indexOf(e,t,n)>=0},v.invoke=function(e,t){var n=l.call(arguments,2),r=v.isFunction(t)
return v.map(e,function(e){var i=r?t:e[t]
return null==i?i:i.apply(e,n)})},v.pluck=function(e,t){return v.map(e,v.property(t))},v.where=function(e,t){return v.filter(e,v.matcher(t))},v.findWhere=function(e,t){return v.find(e,v.matcher(t))},v.max=function(e,t,n){var r,i,o=-(1/0),A=-(1/0)
if(null==t&&null!=e){e=S(e)?e:v.values(e)
for(var a=0,s=e.length;s>a;a++)r=e[a],r>o&&(o=r)}else t=w(t,n),v.each(e,function(e,n,r){i=t(e,n,r),(i>A||i===-(1/0)&&o===-(1/0))&&(o=e,A=i)})
return o},v.min=function(e,t,n){var r,i,o=1/0,A=1/0
if(null==t&&null!=e){e=S(e)?e:v.values(e)
for(var a=0,s=e.length;s>a;a++)r=e[a],o>r&&(o=r)}else t=w(t,n),v.each(e,function(e,n,r){i=t(e,n,r),(A>i||i===1/0&&o===1/0)&&(o=e,A=i)})
return o},v.shuffle=function(e){for(var t,n=S(e)?e:v.values(e),r=n.length,i=Array(r),o=0;r>o;o++)t=v.random(0,o),t!==o&&(i[o]=i[t]),i[t]=n[o]
return i},v.sample=function(e,t,n){return null==t||n?(S(e)||(e=v.values(e)),e[v.random(e.length-1)]):v.shuffle(e).slice(0,Math.max(0,t))},v.sortBy=function(e,t,n){return t=w(t,n),v.pluck(v.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria
if(n!==r){if(n>r||void 0===n)return 1
if(r>n||void 0===r)return-1}return e.index-t.index}),"value")}
var I=function(e){return function(t,n,r){var i={}
return n=w(n,r),v.each(t,function(r,o){var A=n(r,o,t)
e(i,r,A)}),i}}
v.groupBy=I(function(e,t,n){v.has(e,n)?e[n].push(t):e[n]=[t]}),v.indexBy=I(function(e,t,n){e[n]=t}),v.countBy=I(function(e,t,n){v.has(e,n)?e[n]++:e[n]=1}),v.toArray=function(e){return e?v.isArray(e)?l.call(e):S(e)?v.map(e,v.identity):v.values(e):[]},v.size=function(e){return null==e?0:S(e)?e.length:v.keys(e).length},v.partition=function(e,t,n){t=w(t,n)
var r=[],i=[]
return v.each(e,function(e,n,o){(t(e,n,o)?r:i).push(e)}),[r,i]},v.first=v.head=v.take=function(e,t,n){return null!=e?null==t||n?e[0]:v.initial(e,e.length-t):void 0},v.initial=function(e,t,n){return l.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},v.last=function(e,t,n){return null!=e?null==t||n?e[e.length-1]:v.rest(e,Math.max(0,e.length-t)):void 0},v.rest=v.tail=v.drop=function(e,t,n){return l.call(e,null==t||n?1:t)},v.compact=function(e){return v.filter(e,v.identity)}
var O=function(e,t,n,r){for(var i=[],o=0,A=r||0,a=C(e);a>A;A++){var s=e[A]
if(S(s)&&(v.isArray(s)||v.isArguments(s))){t||(s=O(s,t,n))
var c=0,l=s.length
for(i.length+=l;l>c;)i[o++]=s[c++]}else n||(i[o++]=s)}return i}
v.flatten=function(e,t){return O(e,t,!1)},v.without=function(e){return v.difference(e,l.call(arguments,1))},v.uniq=v.unique=function(e,t,n,r){v.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=w(n,r))
for(var i=[],o=[],A=0,a=C(e);a>A;A++){var s=e[A],c=n?n(s,A,e):s
t?(A&&o===c||i.push(s),o=c):n?v.contains(o,c)||(o.push(c),i.push(s)):v.contains(i,s)||i.push(s)}return i},v.union=function(){return v.uniq(O(arguments,!0,!0))},v.intersection=function(e){for(var t=[],n=arguments.length,r=0,i=C(e);i>r;r++){var o=e[r]
if(!v.contains(t,o)){for(var A=1;n>A&&v.contains(arguments[A],o);A++);A===n&&t.push(o)}}return t},v.difference=function(e){var t=O(arguments,!0,!0,1)
return v.filter(e,function(e){return!v.contains(t,e)})},v.zip=function(){return v.unzip(arguments)},v.unzip=function(e){for(var t=e&&v.max(e,C).length||0,n=Array(t),r=0;t>r;r++)n[r]=v.pluck(e,r)
return n},v.object=function(e,t){for(var n={},r=0,i=C(e);i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1]
return n},v.findIndex=t(1),v.findLastIndex=t(-1),v.sortedIndex=function(e,t,n,r){n=w(n,r,1)
for(var i=n(t),o=0,A=C(e);A>o;){var a=Math.floor((o+A)/2)
n(e[a])<i?o=a+1:A=a}return o},v.indexOf=n(1,v.findIndex,v.sortedIndex),v.lastIndexOf=n(-1,v.findLastIndex),v.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1
for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),o=0;r>o;o++,e+=n)i[o]=e
return i}
var D=function(e,t,n,r,i){if(!(r instanceof t))return e.apply(n,i)
var o=b(e.prototype),A=e.apply(o,i)
return v.isObject(A)?A:o}
v.bind=function(e,t){if(p&&e.bind===p)return p.apply(e,l.call(arguments,1))
if(!v.isFunction(e))throw new TypeError("Bind must be called on a function")
var n=l.call(arguments,2),r=function(){return D(e,r,t,this,n.concat(l.call(arguments)))}
return r},v.partial=function(e){var t=l.call(arguments,1),n=function(){for(var r=0,i=t.length,o=Array(i),A=0;i>A;A++)o[A]=t[A]===v?arguments[r++]:t[A]
for(;r<arguments.length;)o.push(arguments[r++])
return D(e,n,this,this,o)}
return n},v.bindAll=function(e){var t,n,r=arguments.length
if(1>=r)throw new Error("bindAll must be passed function names")
for(t=1;r>t;t++)n=arguments[t],e[n]=v.bind(e[n],e)
return e},v.memoize=function(e,t){var n=function(r){var i=n.cache,o=""+(t?t.apply(this,arguments):r)
return v.has(i,o)||(i[o]=e.apply(this,arguments)),i[o]}
return n.cache={},n},v.delay=function(e,t){var n=l.call(arguments,2)
return setTimeout(function(){return e.apply(null,n)},t)},v.defer=v.partial(v.delay,v,1),v.throttle=function(e,t,n){var r,i,o,A=null,a=0
n||(n={})
var s=function(){a=n.leading===!1?0:v.now(),A=null,o=e.apply(r,i),A||(r=i=null)}
return function(){var c=v.now()
a||n.leading!==!1||(a=c)
var l=t-(c-a)
return r=this,i=arguments,0>=l||l>t?(A&&(clearTimeout(A),A=null),a=c,o=e.apply(r,i),A||(r=i=null)):A||n.trailing===!1||(A=setTimeout(s,l)),o}},v.debounce=function(e,t,n){var r,i,o,A,a,s=function(){var c=v.now()-A
t>c&&c>=0?r=setTimeout(s,t-c):(r=null,n||(a=e.apply(o,i),r||(o=i=null)))}
return function(){o=this,i=arguments,A=v.now()
var c=n&&!r
return r||(r=setTimeout(s,t)),c&&(a=e.apply(o,i),o=i=null),a}},v.wrap=function(e,t){return v.partial(t,e)},v.negate=function(e){return function(){return!e.apply(this,arguments)}},v.compose=function(){var e=arguments,t=e.length-1
return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r)
return r}},v.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},v.before=function(e,t){var n
return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}},v.once=v.partial(v.before,2)
var _=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"]
v.keys=function(e){if(!v.isObject(e))return[]
if(h)return h(e)
var t=[]
for(var n in e)v.has(e,n)&&t.push(n)
return _&&r(e,t),t},v.allKeys=function(e){if(!v.isObject(e))return[]
var t=[]
for(var n in e)t.push(n)
return _&&r(e,t),t},v.values=function(e){for(var t=v.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]]
return r},v.mapObject=function(e,t,n){t=w(t,n)
for(var r,i=v.keys(e),o=i.length,A={},a=0;o>a;a++)r=i[a],A[r]=t(e[r],r,e)
return A},v.pairs=function(e){for(var t=v.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]]
return r},v.invert=function(e){for(var t={},n=v.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r]
return t},v.functions=v.methods=function(e){var t=[]
for(var n in e)v.isFunction(e[n])&&t.push(n)
return t.sort()},v.extend=B(v.allKeys),v.extendOwn=v.assign=B(v.keys),v.findKey=function(e,t,n){t=w(t,n)
for(var r,i=v.keys(e),o=0,A=i.length;A>o;o++)if(r=i[o],t(e[r],r,e))return r},v.pick=function(e,t,n){var r,i,o={},A=e
if(null==A)return o
v.isFunction(t)?(i=v.allKeys(A),r=y(t,n)):(i=O(arguments,!1,!1,1),r=function(e,t,n){return t in n},A=Object(A))
for(var a=0,s=i.length;s>a;a++){var c=i[a],l=A[c]
r(l,c,A)&&(o[c]=l)}return o},v.omit=function(e,t,n){if(v.isFunction(t))t=v.negate(t)
else{var r=v.map(O(arguments,!1,!1,1),String)
t=function(e,t){return!v.contains(r,t)}}return v.pick(e,t,n)},v.defaults=B(v.allKeys,!0),v.create=function(e,t){var n=b(e)
return t&&v.extendOwn(n,t),n},v.clone=function(e){return v.isObject(e)?v.isArray(e)?e.slice():v.extend({},e):e},v.tap=function(e,t){return t(e),e},v.isMatch=function(e,t){var n=v.keys(t),r=n.length
if(null==e)return!r
for(var i=Object(e),o=0;r>o;o++){var A=n[o]
if(t[A]!==i[A]||!(A in i))return!1}return!0}
var R=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t
if(null==e||null==t)return e===t
e instanceof v&&(e=e._wrapped),t instanceof v&&(t=t._wrapped)
var i=u.call(e)
if(i!==u.call(t))return!1
switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t
case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t
case"[object Date]":case"[object Boolean]":return+e===+t}var o="[object Array]"===i
if(!o){if("object"!=typeof e||"object"!=typeof t)return!1
var A=e.constructor,a=t.constructor
if(A!==a&&!(v.isFunction(A)&&A instanceof A&&v.isFunction(a)&&a instanceof a)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[]
for(var s=n.length;s--;)if(n[s]===e)return r[s]===t
if(n.push(e),r.push(t),o){if(s=e.length,s!==t.length)return!1
for(;s--;)if(!R(e[s],t[s],n,r))return!1}else{var c,l=v.keys(e)
if(s=l.length,v.keys(t).length!==s)return!1
for(;s--;)if(c=l[s],!v.has(t,c)||!R(e[c],t[c],n,r))return!1}return n.pop(),r.pop(),!0}
v.isEqual=function(e,t){return R(e,t)},v.isEmpty=function(e){return null==e?!0:S(e)&&(v.isArray(e)||v.isString(e)||v.isArguments(e))?0===e.length:0===v.keys(e).length},v.isElement=function(e){return!(!e||1!==e.nodeType)},v.isArray=f||function(e){return"[object Array]"===u.call(e)},v.isObject=function(e){var t=typeof e
return"function"===t||"object"===t&&!!e},v.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){v["is"+e]=function(t){return u.call(t)==="[object "+e+"]"}}),v.isArguments(arguments)||(v.isArguments=function(e){return v.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(v.isFunction=function(e){return"function"==typeof e||!1}),v.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},v.isNaN=function(e){return v.isNumber(e)&&e!==+e},v.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===u.call(e)},v.isNull=function(e){return null===e},v.isUndefined=function(e){return void 0===e},v.has=function(e,t){return null!=e&&d.call(e,t)},v.noConflict=function(){return i._=o,this},v.identity=function(e){return e},v.constant=function(e){return function(){return e}},v.noop=function(){},v.property=x,v.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},v.matcher=v.matches=function(e){return e=v.extendOwn({},e),function(t){return v.isMatch(t,e)}},v.times=function(e,t,n){var r=Array(Math.max(0,e))
t=y(t,n,1)
for(var i=0;e>i;i++)r[i]=t(i)
return r},v.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},v.now=Date.now||function(){return(new Date).getTime()}
var N={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=v.invert(N),P=function(e){var t=function(t){return e[t]},n="(?:"+v.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g")
return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}}
v.escape=P(N),v.unescape=P(k),v.result=function(e,t,n){var r=null==e?void 0:e[t]
return void 0===r&&(r=n),v.isFunction(r)?r.call(e):r}
var Q=0
v.uniqueId=function(e){var t=++Q+""
return e?e+t:t},v.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}
var F=/(.)^/,G={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},M=/\\|'|\r|\n|\u2028|\u2029/g,L=function(e){return"\\"+G[e]}
v.template=function(e,t,n){!t&&n&&(t=n),t=v.defaults({},t,v.templateSettings)
var r=RegExp([(t.escape||F).source,(t.interpolate||F).source,(t.evaluate||F).source].join("|")+"|$","g"),i=0,o="__p+='"
e.replace(r,function(t,n,r,A,a){return o+=e.slice(i,a).replace(M,L),i=a+t.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":A&&(o+="';\n"+A+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n"
try{var A=new Function(t.variable||"obj","_",o)}catch(a){throw a.source=o,a}var s=function(e){return A.call(this,e,v)},c=t.variable||"obj"
return s.source="function("+c+"){\n"+o+"}",s},v.chain=function(e){var t=v(e)
return t._chain=!0,t}
var U=function(e,t){return e._chain?v(t).chain():t}
v.mixin=function(e){v.each(v.functions(e),function(t){var n=v[t]=e[t]
v.prototype[t]=function(){var e=[this._wrapped]
return c.apply(e,arguments),U(this,n.apply(v,e))}})},v.mixin(v),v.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=A[e]
v.prototype[e]=function(){var n=this._wrapped
return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],U(this,n)}}),v.each(["concat","join","slice"],function(e){var t=A[e]
v.prototype[e]=function(){return U(this,t.apply(this._wrapped,arguments))}}),v.prototype.value=function(){return this._wrapped},v.prototype.valueOf=v.prototype.toJSON=v.prototype.value,v.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return v})}.call(this),define("readium_js_plugins",["jquery","underscore","eventEmitter"],function(e,t,n){function r(e,t){this.reader=e,this.plugin=t}function i(e){this.create=function(t){return{host:e,instance:new r(e,t)}}}function o(e,t,n){this.name=e,this.dependencies=t,this.initialized=!1,this.supported=!1,this.initializer=n}var A={},a=function(){this.initialize=function(e){var n=new i(e)
if(e.plugins)throw new Error("Already initialized on reader!")
e.plugins={},t.each(A,function(e){e.init(n)})},this.getLoadedPlugins=function(){return A},this.register=function(t,r,i){if(A[t])throw new Error("Duplicate registration for plugin with name: "+t)
var a
"function"==typeof r?i=r:a=r,A[t]=new o(t,a,function(t,r){if(!t.initialized||!r.host.plugins[t.name]){t.initialized=!0
try{var o={}
e.extend(o,new n),i.call(o,r.instance),t.supported=!0,r.host.plugins[t.name]=o}catch(A){t.fail(A)}}})}}
o.prototype={init:function(e){for(var t,n,r=this.dependencies||[],i=0,a=r.length;a>i;++i){if(n=r[i],t=A[n],!(t&&t instanceof o))throw new Error("required Plugin '"+n+"' not found")
if(t.init(e),!t.supported)throw new Error("required Plugin '"+n+"' not supported")}this.initializer(this,e.create(this))},fail:function(e){throw this.initialized=!0,this.supported=!1,new Error("Plugin '"+this.name+"' failed to load: "+e)},warn:function(e){console.warn("Plugin "+this.name+": "+e)},deprecationNotice:function(e,t){console.warn("DEPRECATED: "+e+" in Plugin "+this.name+"is deprecated. Please use "+t+" instead")},createError:function(e){return new Error("Error in "+this.name+" Plugin: "+e)}}
var s=new a
return s}),define("readium_shared_js/globals",["jquery","eventEmitter"],function(e,t){var n={version:function(){return"0.8.0"},Views:{ORIENTATION_LANDSCAPE:"orientation_landscape",ORIENTATION_PORTRAIT:"orientation_portrait"},Events:{READER_INITIALIZED:"ReaderInitialized",PAGINATION_CHANGED:"PaginationChanged",SETTINGS_APPLIED:"SettingsApplied",FXL_VIEW_RESIZED:"FXLViewResized",READER_VIEW_CREATED:"ReaderViewCreated",READER_VIEW_DESTROYED:"ReaderViewDestroyed",CONTENT_DOCUMENT_LOAD_START:"ContentDocumentLoadStart",CONTENT_DOCUMENT_LOADED:"ContentDocumentLoaded",MEDIA_OVERLAY_STATUS_CHANGED:"MediaOverlayStatusChanged",MEDIA_OVERLAY_TTS_SPEAK:"MediaOverlayTTSSpeak",MEDIA_OVERLAY_TTS_STOP:"MediaOverlayTTSStop",PLUGINS_LOADED:"PluginsLoaded"},InternalEvents:{CURRENT_VIEW_PAGINATION_CHANGED:"CurrentViewPaginationChanged"}}
return e.extend(n,new t),n}),navigator.epubReadingSystem={name:"",version:"0.0.0",layoutStyle:"paginated",hasFeature:function(e,t){return t&&"1.0"!==t?!1:"dom-manipulation"===e?!0:"layout-changes"===e?!0:"touch-events"===e?!1:"mouse-events"===e?!0:"keyboard-events"===e?!0:"spine-scripting"===e}},define("readium_shared_js/globalsSetup",["jquery","console_shim","eventEmitter","URIjs","readium_cfi_js","readium_js_plugins","./globals"],function(e,t,n,r,i,o,A){if(console.log("Globals..."),window.ReadiumSDK?(console.log("ReadiumSDK extend."),e.extend(A,window.ReadiumSDK)):console.log("ReadiumSDK set."),window.ReadiumSDK=A,n.prototype.trigger=n.prototype.emit,window.EventEmitter=n,window.URI=r,"URL"in window==!1){if("webkitURL"in window==!1)throw Error("Browser does not support window.URL")
window.URL=window.webkitURL}if(A.Plugins=o,A.on(A.Events.READER_INITIALIZED,function(e){try{o.initialize(e)}catch(t){console.error("Plugins failed to initialize:",t)}_.defer(function(){console.log("Plugins loaded."),A.emit(A.Events.PLUGINS_LOADED,e)})}),window._RJS_isBrowser){var a=window._RJS_pluginsList
console.log("Plugins included: ",a.map(function(e){return e.replace("readium_plugin_","")})),require(a)}else setTimeout(function(){var e=Object.keys(o.getLoadedPlugins())
console.log("Plugins included: ",e)},0)}),define("readium_shared_js",["readium_shared_js/globalsSetup"],function(e){return e}),define("readium_shared_js/models/bookmark_data",[],function(){var e=function(e,t){this.idref=e,this.contentCFI=t,this.toString=function(){return JSON.stringify(this)}}
return e}),define("readium_shared_js/models/current_pages_info",[],function(){var e=function(e,t){this.isRightToLeft=e.isRightToLeft(),this.isFixedLayout=t,this.spineItemCount=e.items.length,this.openPages=[],this.addOpenPage=function(e,t,n,r){this.openPages.push({spineItemPageIndex:e,spineItemPageCount:t,idref:n,spineItemIndex:r}),this.sort()},this.canGoLeft=function(){return this.isRightToLeft?this.canGoNext():this.canGoPrev()},this.canGoRight=function(){return this.isRightToLeft?this.canGoPrev():this.canGoNext()},this.canGoNext=function(){if(0==this.openPages.length)return!1
var t=this.openPages[this.openPages.length-1]
return t.spineItemIndex<e.last().index||t.spineItemPageIndex<t.spineItemPageCount-1},this.canGoPrev=function(){if(0==this.openPages.length)return!1
var t=this.openPages[0]
return e.first().index<t.spineItemIndex||0<t.spineItemPageIndex},this.sort=function(){this.openPages.sort(function(e,t){return e.spineItemIndex!=t.spineItemIndex?e.spineItemIndex-t.spineItemIndex:e.pageIndex-t.pageIndex})}}
return e}),define("readium_shared_js/models/fixed_page_spread",[],function(){var e=function(t,n){function r(){a.leftItem=void 0,a.rightItem=void 0,a.centerItem=void 0}function i(t,n){n==e.POSITION_LEFT?a.leftItem=t:n==e.POSITION_RIGHT?a.rightItem=t:(n!=e.POSITION_CENTER&&console.error("Unrecognized position value"),a.centerItem=t)}function o(t){return s?t.isLeftPage()?e.POSITION_LEFT:t.isRightPage()?e.POSITION_RIGHT:e.POSITION_CENTER:e.POSITION_CENTER}function A(e){return e.isLeftPage()?a.spine.isRightToLeft()?a.spine.prevItem(e):a.spine.nextItem(e):e.isRightPage()?a.spine.isRightToLeft()?a.spine.nextItem(e):a.spine.prevItem(e):void 0}var a=this
this.spine=t,this.leftItem=void 0,this.rightItem=void 0,this.centerItem=void 0
var s=n
this.setSyntheticSpread=function(e){s=e},this.isSyntheticSpread=function(){return s},this.openFirst=function(){0==this.spine.items.length?r():this.openItem(this.spine.first())},this.openLast=function(){0==this.spine.items.length?r():this.openItem(this.spine.last())},this.openItem=function(t){r()
var n=o(t)
if(i(t,n),n!=e.POSITION_CENTER&&this.spine.isValidLinearItem(t.index)){var a=A(t)
if(a){var s=o(a)
s!=n&&s!=e.POSITION_CENTER&&!a.isReflowable()&&a.isRenditionSpreadAllowed()&&i(a,s)}}},this.openNext=function(){var e=this.validItems()
if(0==e.length)this.openFirst()
else{var t=this.spine.nextItem(e[e.length-1])
t&&this.openItem(t)}},this.openPrev=function(){var e=this.validItems()
if(0==e.length)this.openLast()
else{var t=this.spine.prevItem(e[0])
t&&this.openItem(t)}},this.validItems=function(){var e=[]
return this.leftItem&&e.push(this.leftItem),this.rightItem&&e.push(this.rightItem),this.centerItem&&e.push(this.centerItem),e.sort(function(e,t){return e.index-t.index}),e}}
return e.POSITION_LEFT="left",e.POSITION_RIGHT="right",e.POSITION_CENTER="center",e}),function(e){"use strict"
var t=function(e){return parseInt(e,10)||0}
e.each(["min","max"],function(n,r){e.fn[r+"Size"]=function(e){var n,i
return e?(void 0!==e.width&&this.css(r+"-width",e.width),void 0!==e.height&&this.css(r+"-height",e.height),this):(n=this.css(r+"-width"),i=this.css(r+"-height"),{width:"max"===r&&(void 0===n||"none"===n||-1===t(n))&&Number.MAX_VALUE||t(n),height:"max"===r&&(void 0===i||"none"===i||-1===t(i))&&Number.MAX_VALUE||t(i)})}}),e.fn.isVisible=function(){return this.is(":visible")},e.each(["border","margin","padding"],function(n,r){e.fn[r]=function(e){return e?(void 0!==e.top&&this.css(r+"-top"+("border"===r?"-width":""),e.top),void 0!==e.bottom&&this.css(r+"-bottom"+("border"===r?"-width":""),e.bottom),void 0!==e.left&&this.css(r+"-left"+("border"===r?"-width":""),e.left),void 0!==e.right&&this.css(r+"-right"+("border"===r?"-width":""),e.right),this):{top:t(this.css(r+"-top"+("border"===r?"-width":""))),bottom:t(this.css(r+"-bottom"+("border"===r?"-width":""))),left:t(this.css(r+"-left"+("border"===r?"-width":""))),right:t(this.css(r+"-right"+("border"===r?"-width":"")))}}})}(jQuery),define("jquerySizes",["jquery"],function(e){return function(){var t
return t||e.jQuery}}(this)),define("readium_shared_js/models/spine_item",[],function(){var e=function(t,n,r){function i(){A.page_spread&&A.page_spread!=e.SPREAD_LEFT&&A.page_spread!=e.SPREAD_RIGHT&&A.page_spread!=e.SPREAD_CENTER&&console.error(A.page_spread+" is not a recognized spread type")}function o(e,t){return A[e]?A[e]===t:A.spine["package"][e]?A.spine["package"][e]===t:!1}var A=this
this.idref=t.idref,this.href=t.href,this.linear=t.linear?t.linear.toLowerCase():t.linear,this.page_spread=t.page_spread,this.rendition_viewport=t.rendition_viewport,this.rendition_spread=t.rendition_spread,this.rendition_orientation=t.rendition_orientation,this.rendition_layout=t.rendition_layout,this.rendition_flow=t.rendition_flow,this.media_overlay_id=t.media_overlay_id,this.media_type=t.media_type,this.index=n,this.spine=r,i(),this.setSpread=function(e){this.page_spread=e,i()},this.isRenditionSpreadAllowed=function(){var t=A.getRenditionSpread()
return!t||t!=e.RENDITION_SPREAD_NONE},this.isLeftPage=function(){return A.page_spread==e.SPREAD_LEFT},this.isRightPage=function(){return A.page_spread==e.SPREAD_RIGHT},this.isCenterPage=function(){return A.page_spread==e.SPREAD_CENTER},this.isReflowable=function(){return!A.isFixedLayout()},this.isFixedLayout=function(){var t=A.getRenditionLayout()
if(t){if(A.rendition_layout){if(A.rendition_layout===e.RENDITION_LAYOUT_PREPAGINATED)return!0
if(A.rendition_layout===e.RENDITION_LAYOUT_REFLOWABLE)return!1}return A.spine["package"].isFixedLayout()}return A.media_type.indexOf("image/")>=0},this.getRenditionFlow=function(){return A.rendition_flow?A.rendition_flow:A.spine["package"].rendition_flow},this.getRenditionViewport=function(){return A.rendition_viewport?A.rendition_viewport:A.spine["package"].rendition_viewport},this.getRenditionSpread=function(){return A.rendition_spread?A.rendition_spread:A.spine["package"].rendition_spread},this.getRenditionOrientation=function(){return A.rendition_orientation?A.rendition_orientation:A.spine["package"].rendition_orientation},this.getRenditionLayout=function(){return A.rendition_layout?A.rendition_layout:A.spine["package"].rendition_layout},this.isFlowScrolledContinuous=function(){return o("rendition_flow",e.RENDITION_FLOW_SCROLLED_CONTINUOUS)},this.isFlowScrolledDoc=function(){return o("rendition_flow",e.RENDITION_FLOW_SCROLLED_DOC)}}
return e.RENDITION_LAYOUT_REFLOWABLE="reflowable",e.RENDITION_LAYOUT_PREPAGINATED="pre-paginated",e.RENDITION_ORIENTATION_LANDSCAPE="landscape",e.RENDITION_ORIENTATION_PORTRAIT="portrait",e.RENDITION_ORIENTATION_AUTO="auto",e.SPREAD_LEFT="page-spread-left",e.SPREAD_RIGHT="page-spread-right",e.SPREAD_CENTER="page-spread-center",e.RENDITION_SPREAD_NONE="none",e.RENDITION_SPREAD_LANDSCAPE="landscape",e.RENDITION_SPREAD_PORTRAIT="portrait",e.RENDITION_SPREAD_BOTH="both",e.RENDITION_SPREAD_AUTO="auto",e.RENDITION_FLOW_PAGINATED="paginated",e.RENDITION_FLOW_SCROLLED_CONTINUOUS="scrolled-continuous",e.RENDITION_FLOW_SCROLLED_DOC="scrolled-doc",e.RENDITION_FLOW_AUTO="auto",e.alternateSpread=function(t){return t===e.SPREAD_LEFT?e.SPREAD_RIGHT:t===e.SPREAD_RIGHT?e.SPREAD_LEFT:t},e}),define("readium_shared_js/helpers",["underscore","jquery","jquerySizes","./models/spine_item","./globals"],function(e,t,n,r,i){var o={}
return o.getEbookUrlFilePath=function(e){return window.Blob&&window.File?e instanceof File?e.name:e instanceof Blob?"readium-ebook.epub":e:e},o.getURLQueryParams=function(){var e={},t=window.location.search
if(t&&t.length){t=t.substring(1)
for(var n=t.split("&"),r=0;r<n.length;r++){var i=n[r].split("=")
i.length>1&&(e[i[0]]=decodeURIComponent(i[1]))}}return e},o.Rect=function(e,t,n,r){this.left=e,this.top=t,this.width=n,this.height=r,this.right=function(){return this.left+this.width},this.bottom=function(){return this.top+this.height},this.isOverlap=function(e,t){return void 0==t&&(t=0),!(e.right()<this.left+t||e.left>this.right()-t||e.bottom()<this.top+t||e.top>this.bottom()-t)}},o.Rect.fromElement=function(t){var n
n=e.isArray(t)||t instanceof jQuery?t[0]:t,3===n.nodeType&&(n=t.parent()[0])
for(var r=n.offsetLeft,i=n.offsetTop,A=n.offsetWidth,a=n.offsetHeight;n=n.offsetParent;)r+=n.offsetLeft,i+=n.offsetTop
return new o.Rect(r,i,A,a)},o.UpdateHtmlFontSize=function(e,n){for(var r,i=n/100,o=e[0].ownerDocument.defaultView,A=t("p, div, span, h1, h2, h3, h4, h5, h6, li, blockquote, td, pre",e),a=0;a<A.length;a++){var s=A[a],c=s.getAttribute("data-original-font-size")
if(!c){var l=o.getComputedStyle(s),u=parseInt(l.fontSize)
r=parseInt(l.lineHeight),s.setAttribute("data-original-font-size",u),r&&s.setAttribute("data-original-line-height",r)}}r=0
for(var a=0;a<A.length;a++){var s=A[a],c=s.getAttribute("data-original-font-size"),d=s.getAttribute("data-original-line-height"),u=Number(c)
r=d?Number(d):0,t(s).css("font-size",u*i+"px"),r&&t(s).css("line-height",r*i+"px")}e.css("font-size",n+"%")},o.ResolveContentRef=function(e,t){if(!t)return e
var n=t.split("/")
n.pop()
for(var r=e.split("/");n.length>0&&".."===r[0];)n.pop(),r.splice(0,1)
var i=n.concat(r)
return i.join("/")},o.EndsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},o.BeginsWith=function(e,t){return 0===e.indexOf(t)},o.RemoveFromString=function(e,t){var n=e.indexOf(t)
return-1==n?e:e.substring(0,n)+e.substring(n+t.length)},o.Margins=function(e,t,n){this.margin=e,this.border=t,this.padding=n,this.left=this.margin.left+this.border.left+this.padding.left,this.right=this.margin.right+this.border.right+this.padding.right,this.top=this.margin.top+this.border.top+this.padding.top,this.bottom=this.margin.bottom+this.border.bottom+this.padding.bottom,this.width=function(){return this.left+this.right},this.height=function(){return this.top+this.bottom}},o.triggerLayout=function(e){var t=e[0].contentDocument
if(t){var n=void 0
try{if(n=t.styleSheets&&t.styleSheets.length?t.styleSheets[0]:void 0,!n){var r=t.createElement("style")
t.head.appendChild(r),r.appendChild(t.createTextNode("")),n=r.sheet}if(n){var i="body:first-child::before {content:'READIUM';color: red;font-weight: bold;}"
n.cssRules?n.insertRule(i,n.cssRules.length):n.insertRule(i,0)}}catch(o){console.error(o)}try{var A=t.createElementNS("http://www.w3.org/1999/xhtml","style")
A.appendChild(t.createTextNode("*{}")),t.body.appendChild(A),t.body.removeChild(A),n&&(n.cssRules?n.deleteRule(n.cssRules.length-1):n.deleteRule(0))}catch(o){console.error(o)}if(t.body){t.body.offsetTop}}},o.deduceSyntheticSpread=function(e,t,n){if(!e||0==e.length)return 0
var A=t?t.getRenditionSpread():void 0
if(A===r.RENDITION_SPREAD_NONE)return!1
if("double"==n.syntheticSpread)return!0
if("single"==n.syntheticSpread)return!1
if(!t)return 0
if(A===r.RENDITION_SPREAD_BOTH)return!0
var a=o.getOrientation(e)
if(A===r.RENDITION_SPREAD_LANDSCAPE)return a===i.Views.ORIENTATION_LANDSCAPE
if(A===r.RENDITION_SPREAD_PORTRAIT)return a===i.Views.ORIENTATION_PORTRAIT
if(!A||A===r.RENDITION_SPREAD_AUTO){var s=a===i.Views.ORIENTATION_LANDSCAPE
return s?1:0}return console.warn("Helpers.deduceSyntheticSpread: spread properties?!"),0},o.Margins.fromElement=function(e){return new this(e.margin(),e.border(),e.padding())},o.Margins.empty=function(){return new this({left:0,right:0,top:0,bottom:0},{left:0,right:0,top:0,bottom:0},{left:0,right:0,top:0,bottom:0})},o.loadTemplate=function(e,t){return o.loadTemplate.cache[e]},o.loadTemplate.cache={fixed_book_frame:'<div id="fixed-book-frame" class="clearfix book-frame fixed-book-frame"></div>',single_page_frame:'<div><div id="scaler"><iframe scrolling="no" class="iframe-fixed"></iframe></div></div>',scrolled_book_frame:'<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"><div id="scrolled-content-frame"></div></div>',reflowable_book_frame:'<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"></div>',reflowable_book_page_frame:'<div id="reflowable-content-frame" class="reflowable-content-frame"><iframe scrolling="no" id="epubContentIframe"></iframe></div>'},o.setStyles=function(e,n){var r=e.length
if(r)for(var i=0;r>i;i++){var o=e[i]
o.selector?t(o.selector,n).css(o.declarations):n.css(o.declarations)}},o.isIframeAlive=function(e){var t=void 0,n=void 0
try{t=e.contentWindow,n=e.contentDocument}catch(r){return console.error(r),!1}return t&&n},o.getOrientation=function(e){var t=e.width(),n=e.height()
return t&&n?t>=n?i.Views.ORIENTATION_LANDSCAPE:i.Views.ORIENTATION_PORTRAIT:void 0},o.isRenditionSpreadPermittedForItem=function(e,t){var n=e.getRenditionSpread()
return!n||n==r.RENDITION_SPREAD_BOTH||n==r.RENDITION_SPREAD_AUTO||n==r.RENDITION_SPREAD_LANDSCAPE&&t==i.Views.ORIENTATION_LANDSCAPE||n==r.RENDITION_SPREAD_PORTRAIT&&t==i.Views.ORIENTATION_PORTRAIT},o.CSSTransition=function(t,n){var r={}
e.each(["","-webkit-","-moz-","-ms-"],function(e){r[e+"transition"]=e+n}),t.css(r)},o.CSSTransformString=function(e){var t,n,r,i=!!e.enable3D,o=e.origin
if(e.left||e.top){var A=e.left||0,a=e.top||0
t=i?"translate3D("+A+"px, "+a+"px, 0)":"translate("+A+"px, "+a+"px)"}if(e.scale&&(n=i?"scale3D("+e.scale+", "+e.scale+", 0)":"scale("+e.scale+")"),e.angle&&(r=i?"rotate3D(0,0,"+e.angle+"deg)":"rotate("+e.angle+"deg)"),!(t||n||r))return{}
var s=t&&n?t+" "+n:t?t:n
r&&(s=s+" "+r)
var c={}
return c.transform=s,c["transform-origin"]=o?o:i?"0 0 0":"0 0",c},o.extendedThrottle=function(e,t,n,r,i,o){r||(r=250),i||(i=r)
var A,a,s=!0
return function(){var c=o||this,l=Date.now&&Date.now()||(new Date).getTime(),u=arguments
A&&A+r>l||(A=l,s?(e.apply(c,u),s=!1):t.apply(c,u)),clearTimeout(a),a=setTimeout(function(){A=l,s=!0,n.apply(c,u)},i)}},o.escapeJQuerySelector=function(e){if(e){var t=e.replace(/([;&,\.\+\*\~\?':"\!\^#$%@\[\]\(\)<=>\|\/\\{}`])/g,"\\$1")
return t}},o}),define("readium_shared_js/views/cfi_navigation_logic",["jquery","underscore","../helpers","readium_cfi_js"],function(e,t,n,r){var i=function(r,i,o){function A(){return o.paginationInfo&&!!o.paginationInfo.rightToLeft}function a(){return o.paginationInfo&&!!o.paginationInfo.isVerticalWritingMode}function s(e,t,n){return n?e.top>=0&&e.top<t.height:e.left>=0&&e.left<t.width}function c(){return!o.paginationInfo||a()?i.width():o.paginationInfo.columnWidth+o.paginationInfo.columnGap}function l(){return a()?{top:o.paginationInfo?o.paginationInfo.pageOffset:0}:{left:(o.paginationInfo?o.paginationInfo.pageOffset:0)*(A()?-1:1)}}function u(e,r,i){var o=n.Rect.fromElement(e)
if(t.isNaN(o.left)){var A=e.position()
o=new n.Rect(A.left,A.top,0,0)}var a=r.top||0,s=o.bottom()>a,c=void 0!==r.bottom?o.top<r.bottom:!0,l=0
return s&&c?i?(o.top<=a&&(l=Math.ceil(100*(a-o.top)/o.height)),100-l):100:0}function d(e,t,n){var r=p(e),o=r.clientRectangles
if(0===o.length)return null
var l=A(),u=a(),d=c(),f={width:i.width(),height:i.height()}
1===o.length&&v(o[0],f,d,l,u,!0)
for(var g=0,m=0,y=o.length;y>m;++m)if(s(o[m],f,u)){g=n?h(o,m):100
break}return g}function f(e,n){var r=l(),s=p(e,r),u=s.clientRectangles
if(0===u.length)return null
var d=A(),f=a(),h=c(),g=i.height(),m=i.width()
n&&y(u,n,g,h,d,f)
var w=t.first(u)
1===u.length&&v(w,{height:g,width:m},h,d,f)
var B
if(f){var b=w.top
B=Math.floor(b/g)}else{var x=w.left
d&&(x=h*(o.paginationInfo?o.paginationInfo.visibleColumnCount:1)-x),B=Math.floor(x/h)}return 0>B?B=0:B>=(o.paginationInfo?o.paginationInfo.columnCount:1)&&(B=o.paginationInfo?o.paginationInfo.columnCount-1:0),B}function h(e,n){var r=0,i=0
return e.length>1?t.each(e,function(e,t){r+=e.height,t>=n&&(i+=e.height)}):(r=e[0].height,i=e[0].height-Math.max(0,-e[0].top)),i===r?100:Math.floor(100*i/r)}function p(e,t){t=t||{}
for(var n=t.left||0,r=t.top||0,i=g(e[0].getBoundingClientRect(),n,r),o=[],A=e[0].getClientRects(),a=0,s=A.length;s>a;++a)A[a].height>0&&o.push(g(A[a],n,r))
return 0===o.length&&(e=e.next(),e.length)?p(e,t):{wrapperRectangle:i,clientRectangles:o}}function g(e,t,n){var r={left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.right-e.left,height:e.bottom-e.top}
return m(r,t,n),r}function m(e,t,n){e.left+=t,e.right+=t,e.top+=n,e.bottom+=n}function v(e,t,n,r,i,o){if(!i){for(r&&(n*=-1);e.top<0;)m(e,-n,t.height)
if(o)for(;e.bottom>=t.height&&!s(e,t,i);)m(e,n,-t.height)}}function y(e,n,r,i,o,A){if(!A){var a=t.reduce(e,function(e,t){return e+t.height},0),s=a*n/100
if(e.length>1){var c=0
do{if(c+=e[0].height,c>s)break
e.shift()}while(e.length>1)}else{for(o&&(i*=-1);e[0].bottom>=r;)m(e[0],i,-r)
e[0].top+=s,e[0].height-=s}}}function w(e,t,n,r){var o=i[0].contentDocument,A="epubcfi("+e+")",a=EPUBcfi.getTargetElementWithPartialCFI(A,o,t,n,r)
return a&&0!=a.length?a:void console.log("Can't find element for CFI: "+e)}function B(e){var t={cfi:"",x:0,y:0},n=e.indexOf("@")
if(-1!=n){var r=e.substring(n+1),i=r.indexOf(":");-1!=i?(t.x=parseInt(r.substr(0,i)),t.y=parseInt(r.substr(i+1))):console.log("Unexpected terminating step format"),t.cfi=e.substring(0,n)}else t.cfi=e
return t}function b(e){if(e.nodeType===Node.TEXT_NODE){var t=e.nodeValue.replace(/\n/g,"")
return t=t.replace(/ /g,""),t.length>0}return!1}o=o||{},this.getRootElement=function(){return i[0].contentDocument.documentElement}
var x=o.rectangleBased?d:u
this.findFirstVisibleElement=function(t){"object"!=typeof t&&(t={top:t})
var n,r=null,i=0
return n=e("body",this.getRootElement()).find(":not(iframe)").contents().filter(function(){return b(this)||"img"===this.nodeName.toLowerCase()}),e.each(n,function(){var n
n=this.nodeType===Node.TEXT_NODE?e(this).parent():e(this)
var o=x(n,t,!0)
return o?(r=n,i=100-o,!1):!0}),{$element:r,percentY:i}},this.getFirstVisibleElementCfi=function(e){var t=this.findFirstVisibleElement(e)
if(!t.$element)return void console.log("Could not generate CFI no visible element on page")
var n=EPUBcfi.Generator.generateElementCFIComponent(t.$element[0])
return"!"==n[0]&&(n=n.substring(1)),n+"@0:"+t.percentY},this.getPageForElementCfi=function(e,t,n,r){var i=B(e),o=w(i.cfi,t,n,r)
return o?this.getPageForPointOnElement(o,i.x,i.y):-1},this.getElementByCfi=function(e,t,n,r){var i=B(e)
return w(i.cfi,t,n,r)},this.getPageForElement=function(e){return this.getPageForPointOnElement(e,0,0)},this.getPageForPointOnElement=function(e,t,n){var i
if(o.rectangleBased)return i=f(e,n),null===i?(console.warn("Impossible to locate a hidden element: ",e),0):i
var A=this.getVerticalOffsetForPointOnElement(e,t,n)
return Math.floor(A/r.height())},this.getVerticalOffsetForElement=function(e){return this.getVerticalOffsetForPointOnElement(e,0,0)},this.getVerticalOffsetForPointOnElement=function(e,t,r){var i=n.Rect.fromElement(e)
return Math.ceil(i.top+r*i.height/100)},this.getElementById=function(t){var n=i[0].contentDocument,r=e(n.getElementById(t))
return 0!=r.length?r:void 0},this.getPageForElementId=function(e){var t=this.getElementById(e)
return t?this.getPageForElement(t):-1},this.getFirstVisibleMediaOverlayElement=function(t){function n(r){if(r&&r.length)for(var i=0,a=r.length;a>i;i++){var s=r[i]
if(s){var c=e(s)
if(c.data("mediaOverlayData")){var l=o.getElementVisibility(c,t)
if(l&&(A||(A=s),100==l))return s}else{var u=n(s.children)
if(u)return u}}}}var r=this.getRootElement()
if(r){var i=e("body",r)
if(i&&i.length&&i[0]){var o=this,A=void 0,a=n([i[0]])
return a||(a=A),a}}},this.getElementVisibility=function(e,t){return x(e,t,!0)},this.isElementVisible=x,this.isElementCfiVisible=function(e){var n=this.getPageForElementCfi(e,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),r=o.paginationInfo||null
if(r){var i=[r.currentSpreadIndex*r.visibleColumnCount]
return 2==r.visibleColumnCount&&i.push(i[0]+1),t.contains(i,n)}},this.getElement=function(t){var n=e(t,this.getRootElement())
return n.length>0?n:void 0}}
return i}),define("readium_shared_js/models/viewer_settings",[],function(){var e=function(e){function t(e){for(var t=[],n=e.split(/[\s,;]+/),r=0;r<n.length;r++){var i=n[r].trim()
""!==i&&t.push(i)}return t}function n(e,t,n){void 0!==t[e]&&(n?r[e]=n(t[e]):r[e]=t[e])}var r=this
this.syntheticSpread="auto",this.fontSize=100,this.columnGap=20,this.mediaOverlaysPreservePlaybackWhenScroll=!1,this.mediaOverlaysSkipSkippables=!1,this.mediaOverlaysEscapeEscapables=!0,this.mediaOverlaysSkippables=[],this.mediaOverlaysEscapables=[],this.mediaOverlaysEnableClick=!0,this.mediaOverlaysRate=1,this.mediaOverlaysVolume=100,this.mediaOverlaysSynchronizationGranularity="",this.mediaOverlaysAutomaticPageTurn=!0,this.enableGPUHardwareAccelerationCSS3D=!1,this.pageTransition=-1,this.scroll="auto",this.update=function(e){n("columnGap",e),n("fontSize",e),n("mediaOverlaysPreservePlaybackWhenScroll",e),n("mediaOverlaysSkipSkippables",e),n("mediaOverlaysEscapeEscapables",e),n("mediaOverlaysSkippables",e,t),n("mediaOverlaysEscapables",e,t),n("mediaOverlaysEnableClick",e),n("mediaOverlaysRate",e),n("mediaOverlaysVolume",e),n("mediaOverlaysSynchronizationGranularity",e),n("mediaOverlaysAutomaticPageTurn",e),n("scroll",e),n("syntheticSpread",e),n("pageTransition",e),n("enableGPUHardwareAccelerationCSS3D",e)},this.update(e)}
return e}),define("readium_shared_js/views/one_page_view",["jquery","underscore","eventEmitter","./cfi_navigation_logic","../helpers","../models/viewer_settings"],function(e,t,n,r,i,o){var A=function(a,s,c,l){function u(t){if(t){S=!0
var n=v[0].contentDocument
g=e("html",n),g&&0!=g.length||(g=e("svg",n)),D&&B.applyBookStyles(),h(),O.onIFrameLoad()}}function d(){D&&g&&T&&i.UpdateHtmlFontSize(g,T.fontSize)}function f(){if(!v||!v.length)return 0
if(i.isIframeAlive(v[0])){var e=v[0].contentWindow,t=v[0].contentDocument,n=Math.round(parseFloat(e.getComputedStyle(t.documentElement).height))
return n}if(g){console.error("getContentDocHeight ??")
var r=g.height()
return r}return 0}function h(){_.width=0,_.height=0
var t=void 0,n=!1,r=void 0,i=void 0,o=v[0].contentDocument,A=e("meta[name=viewport]",o).attr("content")
if(A||(A=e("meta[name=viewbox]",o).attr("content")),A&&(t=p(A)),!t&&o&&o.documentElement&&o.documentElement.nodeName&&"svg"==o.documentElement.nodeName.toLowerCase()){var a=void 0,s=void 0,c=o.documentElement.getAttribute("width"),l=c&&c.length>=1&&"%"==c[c.length-1]
if(c)try{a=parseInt(c,10)}catch(u){}a&&l&&(r=a,a=void 0)
var d=o.documentElement.getAttribute("height"),f=d&&d.length>=1&&"%"==d[d.length-1]
if(d)try{s=parseInt(d,10)}catch(u){}s&&f&&(i=s,s=void 0),a&&s&&(t={width:a,height:s})}if(!t&&y&&(A=y.getRenditionViewport(),A&&(t=p(A),t&&console.log("Viewport: using rendition:viewport dimensions"))),!t){var h=e(o).find("img")
if(h.length>0){t={width:h.width(),height:h.height()}
var g=y&&y.media_type&&y.media_type.length&&0==y.media_type.indexOf("image/")
g||console.warn("Viewport: using img dimensions!")}else if(h=e(o).find("image"),h.length>0){var a=void 0,s=void 0,c=h[0].getAttribute("width")
if(c)try{a=parseInt(c,10)}catch(u){}var d=h[0].getAttribute("height")
if(d)try{s=parseInt(d,10)}catch(u){}a&&s&&(t={width:a,height:s},n=!0,console.warn("Viewport: using image dimensions!"))}}if(!t){a=C.width(),s=C.height()
var m=e("iframe.iframe-fixed",C).length>1
m&&(a*=.5),r&&(a*=r/100),i&&(s*=i/100),t={width:a,height:s},n=!0,console.warn("Viewport: using browser / e-reader viewport dimensions!")}t&&(_.width=t.width,_.height=t.height)}function p(e){for(var t=e.replace(/\s/g,"").split(","),n={},r=0;r<t.length;r++){var i=t[r].split("=")
2==i.length&&(n[i[0]]=i[1])}var o=Number.NaN,A=Number.NaN
return n.width&&(o=parseInt(n.width)),n.height&&(A=parseInt(n.height)),isNaN(o)||isNaN(A)?void 0:{width:o,height:A}}e.extend(this,new n)
var g,m,v,y,w,B=this,b=a.spine,x=a.iframeLoader,E=a.bookStyles,C=a.$viewport,S=!1,I=function(e){var t=function(e,t){this.begin=e,this.end=t},n=new t(function(e,t,n,r,i,o,A){r.css("opacity","0")},function(e,t,n,r,o,A,a){r.css("transform","none"),i.CSSTransition(r,"opacity 150ms ease-out"),r.css("opacity","1")}),r=new t(function(e,t,n,r,o,A,a){r.css("opacity","0")
var s=Math.ceil(o*e),c=.8*s*(2===a?1:-1),l=i.CSSTransformString({left:Math.round(c),origin:"50% 50% 0",enable3D:d})
r.css(l)},function(e,t,n,r,o,A,a){r.css("opacity","1"),i.CSSTransition(r,"transform 150ms ease-out"),r.css("transform","none")}),A=new t(function(e,t,n,r,o,A,a){r.css("opacity","0")
var s=Math.ceil(o*e),c=1.7*s*(2===a?1:-1),l=i.CSSTransformString({left:Math.round(c),angle:30*(2===a?-1:1),origin:"50% 50% 0",enable3D:d})
r.css(l)},function(e,t,n,r,o,A,a){r.css("opacity","1"),i.CSSTransition(r,"transform 300ms ease-in-out"),r.css("transform","none")}),a=new t(function(e,t,n,r,o,A,a){r.css("opacity","0")
for(var c=!1,l=!1,u=!1,f=0;f<s.length;f++){var h=s[f].toLowerCase()
if(h.indexOf("left")>=0){c=!0
break}if(h.indexOf("right")>=0){u=!0
break}if(h.indexOf("center")>=0){l=!0
break}}var p=Math.ceil(o*e),g=.5*p*(c||l&&1===a?1:-1),m=i.CSSTransformString({scale:.2,left:Math.round(g),angle:30*(c||l&&1===a?1:-1),origin:"50% 50% 0",enable3D:d})
r.css(m)},function(e,t,n,r,o,A,a){r.css("opacity","1"),i.CSSTransition(r,"transform 400ms ease-out"),r.css("transform","none")}),c=[]
c.push(n),c.push(r),c.push(A),c.push(a)
var l=e.disablePageTransitions||!1
l=!0
var u=-1,d=new o({}).enableGPUHardwareAccelerationCSS3D,f=void 0
this.updateOptions=function(e){f=e
var t=f
t&&"undefined"!=typeof t.enableGPUHardwareAccelerationCSS3D||(t=new o({})),t.enableGPUHardwareAccelerationCSS3D&&(d=!0),null!==e.pageTransition&&"undefined"!=typeof e.pageTransition&&(u=e.pageTransition)},this.updateOptions(e)
var h=0,p=!1,g=!1
this.updatePageSwitchDir=function(e,t){g||(h=e,p=t)},this.onIFrameLoad=function(){g=!0},this.transformContentImmediate_BEGIN=function(e,t,n,r){var o=p||g
if(g=!1,!l&&-1!==u&&(i.CSSTransition(e,"all 0 ease 0"),o)){var A=u>=0&&u<c.length?c[u]:void 0
0!==h&&A?A.begin(t,n,r,e,B.meta_width(),B.meta_height(),h):e.css("opacity","0")}},this.transformContentImmediate_END=function(e,t,n,r){return l||-1===u?void e.css("transform","none"):void setTimeout(function(){var o=u>=0&&u<c.length?c[u]:void 0
0!==h&&o?o.end(t,n,r,e,B.meta_width(),B.meta_height(),h):(e.css("transform","none"),i.CSSTransition(e,"opacity 250ms linear"),e.css("opacity","1"))},10)}},O=new I(a),D=c||!1,_={width:0,height:0}
this.element=function(){return m},this.meta_height=function(){return _.height},this.meta_width=function(){return _.width},this.isDisplaying=function(){return S},this.render=function(){var t=i.loadTemplate("single_page_frame",{})
m=e(t),w=e("#scaler",m),i.CSSTransition(m,"all 0 ease 0"),m.css("transform","none")
var n=l.viewerSettings()
n&&"undefined"!=typeof n.enableGPUHardwareAccelerationCSS3D||(n=new o({})),n.enableGPUHardwareAccelerationCSS3D&&m.css("transform","translateZ(0)"),m.css("height","100%"),m.css("width","100%")
for(var r=0,A=s.length;A>r;r++)m.addClass(s[r])
return v=e("iframe",m),this},this.decorateIframe=function(){v&&v.length&&(v.css("border-bottom","1px dashed silver"),v.css("border-top","1px dashed silver"))},this.remove=function(){S=!1,y=void 0,m.remove()},this.clear=function(){S=!1,v[0].src=""},this.currentSpineItem=function(){return y}
var T=void 0
this.setViewSettings=function(e){T=e,D&&B.applyBookStyles(),h(),O.updateOptions(e)},this.applyBookStyles=function(){D&&g&&(i.setStyles(E.getStyles(),g),d())},this.scaleToWidth=function(e){if(!(_.width<=0)){var t=e/_.width
B.transformContentImmediate(t,0,0)}},this.resizeIFrameToContent=function(){var e=f()
B.setHeight(e),B.showIFrame()},this.setHeight=function(e){w.css("height",e+"px"),m.css("height",e+"px")}
var R=!0
this.showIFrame=function(){if(v.css("visibility","visible"),R){v.css("transform","none")
var e=!1,t=T
t&&"undefined"!=typeof t.enableGPUHardwareAccelerationCSS3D||(t=new o({})),t.enableGPUHardwareAccelerationCSS3D&&(e=!0,v.css("transform","translateZ(0)"))}else v.css({left:"0px",top:"0px"})},this.hideIFrame=function(){if(v.css("visibility","hidden"),R){var e=!1,t=T
t&&"undefined"!=typeof t.enableGPUHardwareAccelerationCSS3D||(t=new o({})),t.enableGPUHardwareAccelerationCSS3D&&(e=!0)
var n=i.CSSTransformString({left:"10000",top:"10000",enable3D:e})
v.css(n)}else v.css({left:"10000px",top:"10000px"})},this.updatePageSwitchDir=function(e,t){O.updatePageSwitchDir(e,t)},this.transformContentImmediate=function(e,t,n){var r=Math.ceil(_.width*e),A=Math.floor(_.height*e)
if(O.transformContentImmediate_BEGIN(m,e,t,n),m.css("left",t+"px"),m.css("top",n+"px"),m.css("width",r+"px"),m.css("height",A+"px"),g){var a=!1,s=T
if(s&&"undefined"!=typeof s.enableGPUHardwareAccelerationCSS3D||(s=new o({})),s.enableGPUHardwareAccelerationCSS3D&&(a=!0),l.needsFixedLayoutScalerWorkAround()){var c=i.CSSTransformString({scale:e,enable3D:a})
g.css(c)
var u=i.CSSTransformString({scale:1,enable3D:a})
u.width=_.width*e,u.height=_.height*e,w.css(u)}else{var d=i.CSSTransformString({scale:e,enable3D:a})
d.width=_.width,d.height=_.height,w.css(d)}g.css("opacity","0.999"),B.showIFrame(),setTimeout(function(){g.css("opacity","1")},0),O.transformContentImmediate_END(m,e,t,n)}},this.getCalculatedPageHeight=function(){return m.height()},this.transformContent=t.bind(t.debounce(this.transformContentImmediate,50),B),this.loadSpineItem=function(e,t,n){if(y!=e){y=e
var r=b["package"].resolveRelativeUrl(e.href)
B.hideIFrame(),B.emit(A.SPINE_ITEM_OPEN_START,v,y),x.loadIframe(v[0],r,function(r){if(r&&t){var o=function(){t(r,v,y,!0,n)}
i.isIframeAlive(v[0])?(u(r),o()):(console.error("onIFrameLoad !! doc && win + TIMEOUT"),console.debug(e.href),u(r),setTimeout(o,500))}else u(r)},B,{spineItem:y})}else t&&t(!0,v,y,!1,n)},this.getFirstVisibleElementCfi=function(){var e=new r(m,v)
return e.getFirstVisibleElementCfi(0)},this.getNavigator=function(){return new r(m,v)},this.getElementByCfi=function(e,t,n,i,o){if(e!=y)return void console.error("spine item is not loaded")
var A=new r(m,v)
return A.getElementByCfi(t,n,i,o)},this.getElementById=function(e,t){if(e!=y)return void console.error("spine item is not loaded")
var n=new r(m,v)
return n.getElementById(t)},this.getElement=function(e,t){if(e!=y)return void console.error("spine item is not loaded")
var n=new r(m,v)
return n.getElement(t)},this.getFirstVisibleMediaOverlayElement=function(){var e=new r(m,v)
return e.getFirstVisibleMediaOverlayElement({top:0,bottom:v.height()})},this.offset=function(){return v?v.offset():void 0}}
return A.SPINE_ITEM_OPEN_START="SpineItemOpenStart",A}),define("readium_shared_js/models/page_open_request",[],function(){var e=function(e,t){this.spineItem=e,this.spineItemPageIndex=void 0,this.elementId=void 0,this.elementCfi=void 0,this.firstPage=!1,this.lastPage=!1,this.initiator=t,this.reset=function(){this.spineItemPageIndex=void 0,this.elementId=void 0,this.elementCfi=void 0,this.firstPage=!1,this.lastPage=!1},this.setFirstPage=function(){this.reset(),this.firstPage=!0},this.setLastPage=function(){this.reset(),this.lastPage=!0},this.setPageIndex=function(e){this.reset(),this.spineItemPageIndex=e},this.setElementId=function(e){this.reset(),this.elementId=e},this.setElementCfi=function(e){this.reset(),this.elementCfi=e}}
return e}),define("readium_shared_js/views/fixed_view",["jquery","underscore","eventEmitter","../models/bookmark_data","../models/current_pages_info","../models/fixed_page_spread","./one_page_view","../models/page_open_request","../helpers","../globals"],function(e,t,n,r,i,o,A,a,s,c){var l=function(l,u){function d(e){var t=new A(l,[e],!1,u)
return t.on(A.SPINE_ITEM_OPEN_START,function(e,t){I.emit(c.Events.CONTENT_DOCUMENT_LOAD_START,e,t)}),t}function f(){var e=M.validItems()
return e[0]}function h(t,n){if(L)return void(U={initiator:t,paginationRequest:n})
L=!0
var r={isElementAdded:!1},i=p([{pageView:N,spineItem:M.leftItem,context:r},{pageView:k,spineItem:M.rightItem,context:r},{pageView:P,spineItem:M.centerItem,context:r}])
e.when.apply(e,i).done(function(){if(L=!1,U){var e=U.initiator,i=U.paginationRequest
U=void 0,h(e,i)}else r.isElementAdded&&I.applyStyles(),n?g(t,n.spineItem,n.elementId):g(t)})}function p(e){for(var t=[],n=0;n<e.length;n++){var r=x(e[n].pageView,e[n].spineItem,e[n].context)
t.push(r)}return t}function g(e,t,n){B(),y(),window.setTimeout(function(){I.trigger(c.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:I.getPaginationInfo(),initiator:e,spineItem:t,elementId:n})},60)}function m(e,t){var n=new o(D,t)
return n.openItem(e),M.leftItem!=n.leftItem||M.rightItem!=n.rightItem||M.centerItem!=n.centerItem}function v(){if(!G||!F)return!1
var e=O.width(),t=O.height()
return e&&t}function y(e){if(H(0,!1),v()){var t=O.width(),n=O.height(),r=N.isDisplaying()?s.Margins.fromElement(N.element()):s.Margins.empty(),i=k.isDisplaying()?s.Margins.fromElement(k.element()):s.Margins.empty(),o=P.isDisplaying()?s.Margins.fromElement(P.element()):s.Margins.empty(),A=w(r,i,o),a={width:t-F.width(),height:n-F.height()},l={width:a.width-A.width(),height:a.height-A.height()}
if(!(a.width<=0||a.height<=0)){var u=l.width/G.width,d=l.height/G.height
O.css("overflow","auto")
var f
"fit-width"==T.style?f=u:"fit-height"==T.style?f=d:"user"==T.style?f=T.scale:(f=Math.min(u,d),O.css("overflow","hidden")),S=f
var h={width:G.width*f,height:G.height*f},p={width:h.width+A.width(),height:h.height+A.height()},g={width:p.width+F.width(),height:p.height+F.height()},m=Math.floor((t-g.width)/2),y=Math.floor((n-g.height)/2)
0>m&&(m=0),0>y&&(y=0),C.css("left",m+"px"),C.css("top",y+"px"),C.css("width",p.width+"px"),C.css("height",p.height+"px")
var B=F.padding.left,b=F.padding.top,x=e?"transformContentImmediate":"transformContent"
N.isDisplaying()&&N[x](f,B,b),k.isDisplaying()&&(B+=G.separatorPosition*f,N.isDisplaying()&&(B+=r.left),k[x](f,B,b)),P.isDisplaying()&&P[x](f,B,b),I.emit(c.Events.FXL_VIEW_RESIZED)}}}function w(e,t,n){var r={left:Math.max(e.margin.left,t.margin.left,n.margin.left),right:Math.max(e.margin.right,t.margin.right,n.margin.right),top:Math.max(e.margin.top,t.margin.top,n.margin.top),bottom:Math.max(e.margin.bottom,t.margin.bottom,n.margin.bottom)},i={left:Math.max(e.border.left,t.border.left,n.border.left),right:Math.max(e.border.right,t.border.right,n.border.right),top:Math.max(e.border.top,t.border.top,n.border.top),bottom:Math.max(e.border.bottom,t.border.bottom,n.border.bottom)},o={left:Math.max(e.padding.left,t.padding.left,n.padding.left),right:Math.max(e.padding.right,t.padding.right,n.padding.right),top:Math.max(e.padding.top,t.padding.top,n.padding.top),bottom:Math.max(e.padding.bottom,t.padding.bottom,n.padding.bottom)}
return new s.Margins(r,i,o)}function B(){G={},P.isDisplaying()?(G.width=P.meta_width(),G.height=P.meta_height(),G.separatorPosition=0):N.isDisplaying()&&k.isDisplaying()?N.meta_height()==k.meta_height()?(G.width=N.meta_width()+k.meta_width(),G.height=N.meta_height(),G.separatorPosition=N.meta_width()):(G.width=N.meta_width()+k.meta_width()*(N.meta_height()/k.meta_height()),G.height=N.meta_height(),G.separatorPosition=N.meta_width()):N.isDisplaying()?(G.width=2*N.meta_width(),G.height=N.meta_height(),G.separatorPosition=N.meta_width()):k.isDisplaying()?(G.width=2*k.meta_width(),G.height=k.meta_height(),G.separatorPosition=k.meta_width()):G=void 0}function b(){F=s.Margins.fromElement(C)}function x(t,n,r){var i=e.Deferred()
return n?(t.isDisplaying()||(C.append(t.render().element()),r.isElementAdded=!0),t.loadSpineItem(n,function(e,n,r,o,A){e&&o&&(t.meta_height()&&t.meta_width()||console.error("Invalid document "+r.href+": viewport is not specified!"),I.emit(c.Events.CONTENT_DOCUMENT_LOADED,n,r)),i.resolve()},r)):(t.isDisplaying()&&t.remove(),i.resolve()),i.promise()}function E(){var e=[]
e=D.isLeftToRight()?[N,P,k]:[k,P,N]
for(var t=[],n=0,r=e.length;r>n;n++)e[n].isDisplaying()&&t.push(e[n])
return t}e.extend(this,new n)
var C,S,I=this,O=l.$viewport,D=l.spine,_=l.userStyles,T=(l.bookStyles,l.zoom||{style:"default"}),R=(l.iframeLoader,void 0),N=d("fixed-page-frame-left"),k=d("fixed-page-frame-right"),P=d("fixed-page-frame-center"),Q=[]
Q.push(N),Q.push(k),Q.push(P)
var F,G,M=new o(D,!1),L=!1,U=!1
this.isReflowable=function(){return!1},this.setZoom=function(e){T=e,y(!1)},this.render=function(){var t=s.loadTemplate("fixed_book_frame",{})
return C=e(t),s.CSSTransition(C,"all 0 ease 0"),C.css("overflow","hidden"),O.append(C),I.applyStyles(),this},this.remove=function(){C.remove()},this.setViewSettings=function(e){R=e,M.setSyntheticSpread(1==s.deduceSyntheticSpread(O,f(),R))
for(var t=E(),n=0,r=t.length;r>n;n++)t[n].setViewSettings(e)}
var H=function(e,t){N&&N.updatePageSwitchDir(e,t),k&&k.updatePageSwitchDir(e,t),P&&P.updatePageSwitchDir(e,t)}
this.applyStyles=function(){s.setStyles(_.getStyles(),C.parent()),b(),B(),y()},this.applyBookStyles=function(){for(var e=E(),t=0,n=e.length;n>t;t++)e[t].applyBookStyles()},this.onViewportResize=function(){var e=f()
if(e){var t=1==s.deduceSyntheticSpread(O,e,R)
if(m(e,t)){M.setSyntheticSpread(t)
var n=new a(e,I)
I.openPage(n)}else y(!0)}},this.getViewScale=function(){return S},this.openPage=function(e,t){if(e.spineItem){var n=M.leftItem,r=M.rightItem,i=M.centerItem,o=1==s.deduceSyntheticSpread(O,e.spineItem,R)
M.setSyntheticSpread(o),M.openItem(e.spineItem)
var A=n!==M.leftItem||r!==M.rightItem||i!==M.centerItem
null!==t&&"undefined"!=typeof t||(t=0),H(0===t?0:M.spine.isRightToLeft()?1===t?2:1:t,A),h(e.initiator,e)}},this.openPagePrev=function(e){M.openPrev(),H(M.spine.isRightToLeft()?2:1,!0),h(e,void 0)},this.openPageNext=function(e){M.openNext(),H(M.spine.isRightToLeft()?1:2,!0),h(e,void 0)},this.getPaginationInfo=function(){for(var e=new i(D,!0),t=[M.leftItem,M.rightItem,M.centerItem],n=0;n<t.length;n++){var r=t[n]
r&&e.addOpenPage(0,1,r.idref,r.index)}return e},this.bookmarkCurrentPage=function(){var e=E()
if(e.length>0){var t=e[0].currentSpineItem().idref,n=e[0].getFirstVisibleElementCfi()
return void 0==n&&(n=""),new r(t,n)}return new r("","")},this.getLoadedSpineItems=function(){return M.validItems()},this.getElement=function(e,t){for(var n=E(),r=0,i=n.length;i>r;r++){var o=n[r]
if(o.currentSpineItem()==e)return o.getElement(e,t)}console.error("spine item is not loaded")},this.getElementById=function(e,t){for(var n=E(),r=0,i=n.length;i>r;r++){var o=n[r]
if(o.currentSpineItem()==e)return o.getElementById(e,t)}console.error("spine item is not loaded")},this.getElementByCfi=function(e,t,n,r,i){for(var o=E(),A=0,a=o.length;a>A;A++){var s=o[A]
if(s.currentSpineItem()==e)return s.getElementByCfi(e,t,n,r,i)}console.error("spine item is not loaded")},this.getFirstVisibleMediaOverlayElement=function(){for(var e=E(),t=0,n=e.length;n>t;t++){var r=e[t].getFirstVisibleMediaOverlayElement()
if(r)return r}},this.insureElementVisibility=function(e,t,n){},this.isElementCfiVisible=function(e,n){var r=t.findWhere(this.getLoadedSpineItems(),{idref:e})
return!!r}}
return l}),define("readium_shared_js/views/iframe_loader",["jquery","underscore"],function(e,t){var n=function(){var n=this,r={}
this.addIFrameEventListener=function(e,t,n){void 0==r[e]&&(r[e]=[]),r[e].push({callback:t,context:n})},this.updateIframeEvents=function(n){t.each(r,function(t,r){for(var i=0,o=t.length;o>i;i++)e(n.contentWindow).off(r),e(n.contentWindow).on(r,t[i].callback,t[i].context)})},this.loadIframe=function(e,t,r,i,o){e.baseURI||("undefined"!=typeof location&&(e.baseURI=location.href+""),console.error("!iframe.baseURI => "+e.baseURI)),console.log("EPUB doc iframe src:"),console.log(t),console.log("EPUB doc iframe base URI:"),console.log(e.baseURI),e.setAttribute("data-baseUri",e.baseURI),e.setAttribute("data-src",t)
var A=new URI(t).absoluteTo(e.baseURI).search("").hash("").toString()
n._loadIframeWithUri(e,o,A,function(){r.call(i,!0,o)})},this._loadIframeWithUri=function(r,i,o,A){r.onload=function(){var i=r.contentDocument||r.contentWindow.document
e("svg",i).load(function(){console.log("SVG loaded")}),n.updateIframeEvents(r)
var o=r.contentWindow.MathJax
if(o){var a=t.once(A)
try{o.Hub.Queue(a)}catch(s){console.error("MathJax fail!"),A()}}else A()},r.setAttribute("src",o)}}
return n}),define("readium_shared_js/views/internal_links_support",["jquery","../helpers","readium_cfi_js"],function(e,t,n){var r=function(n){function r(e){var t=e.indexOf("("),n=e.indexOf("!"),r=e.indexOf(")")
return-1!=n?(-1==r&&(r=e.length),{spineItemCfi:e.substring(t+1,n),elementCfi:e.substring(n+1,r)}):void 0}function i(e,t){var r=n["package"]().resolveRelativeUrl(t.href),i=e.absoluteTo(r)
return i}function o(e,o){var a=i(e,o)
if(!a)return void console.error("Unable to resolve "+e.href())
var s=e.fragment(),l=a.toString()
l=t.RemoveFromString(l,"#"+s),A(l,function(e){if(e){var t=new window.DOMParser,i=t.parseFromString(e,"text/xml"),o=r(s)
if(!o)return void console.warn("Unable to split cfi:"+s)
var A=EPUBcfi.Interpreter.getContentDocHref("epubcfi("+o.spineItemCfi+")",i)
if(A){var a=n.spine().getItemByHref(A)
a?n.openSpineItemElementCfi(a.idref,o.elementCfi,c):console.warn("Unable to find spineItem with href="+A)}else console.warn("Unable to find document ref from "+s+" cfi")}})}function A(t,n){e.ajax({isLocal:0!==t.indexOf("http"),url:t,dataType:"text",async:!0,success:function(e){n(e)},error:function(e,r,i){console.error("Error when AJAX fetching "+t),console.error(r),console.error(i),n()}})}function a(e){var n=e.filename()
return n&&t.EndsWith(n,".opf")}function s(e,t){var r,i=e.filename()
if(i){var o=new URI(e,t.href),A=decodeURIComponent(o.pathname()),a=n.spine().getItemByHref(A)
if(!a)return void console.error("spine item with href="+A+" not found")
r=a.idref}else r=t.idref
var s=e.fragment()
n.openSpineItemElementId(r,s,c)}var c=this
this.processLinkElements=function(t,n){var r=t[0].contentDocument
e("a",r).click(function(e){var t
t=e.currentTarget.attributes["xlink:href"]?e.currentTarget.attributes["xlink:href"].value:e.currentTarget.attributes.href.value
var r=!1,i=new URI(t),A=i.is("relative")
A?a(i)?(o(i,n),r=!0):(s(i,n),r=!0):(window.open(t,"_blank"),r=!0),r&&(e.preventDefault(),e.stopPropagation())})}}
return r}),define("readium_shared_js/models/smil_iterator",["jquery","../helpers"],function(e,t){var n=function(n){function r(e,t,n){for(var i=e,o=t.children.length;i>=0&&o>i;i+=n?-1:1){var A=t.children[i]
if("par"==A.nodeType)return A
if(A=r(n?A.children.length-1:0,A,n))return A}return t.parent?r(t.index+(n?-1:1),t.parent,n):void 0}this.smil=n,this.currentPar=void 0,this.reset=function(){this.currentPar=r(0,this.smil,!1)},this.findTextId=function(n){if(!this.currentPar)return void console.debug("Par iterator is out of range")
if(!n)return!1
for(;this.currentPar;){if(this.currentPar.element){if(n===this.currentPar.text.srcFragmentId)return!0
for(var r=this.currentPar.element.parentNode;r;){if(r.id&&r.id==n)return!0
r=r.parentNode}var i=e("#"+t.escapeJQuerySelector(n),this.currentPar.element)
if(i&&i.length&&i[0])return!0}this.next()}return!1},this.next=function(){return this.currentPar?void(this.currentPar=r(this.currentPar.index+1,this.currentPar.parent,!1)):void console.debug("Par iterator is out of range")},this.previous=function(){return this.currentPar?void(this.currentPar=r(this.currentPar.index-1,this.currentPar.parent,!0)):void console.debug("Par iterator is out of range")},this.isLast=function(){return this.currentPar?!r(this.currentPar.index+1,this.currentPar.parent,!1):void console.debug("Par iterator is out of range")},this.goToPar=function(e){for(;this.currentPar&&this.currentPar!=e;)this.next()},this.reset()}
return n}),define("domReady",[],function(){"use strict"
function e(e){var t
for(t=0;t<e.length;t+=1)e[t](c)}function t(){var t=l
s&&t.length&&(l=[],e(t))}function n(){s||(s=!0,A&&clearInterval(A),t())}function r(e){return s?e(c):l.push(e),r}var i,o,A,a="undefined"!=typeof window&&window.document,s=!a,c=a?document:null,l=[]
if(a){if(document.addEventListener)document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)
else if(window.attachEvent){window.attachEvent("onload",n),o=document.createElement("div")
try{i=null===window.frameElement}catch(u){}o.doScroll&&i&&window.external&&(A=setInterval(function(){try{o.doScroll(),n()}catch(e){}},30))}"complete"===document.readyState&&n()}return r.version="2.0.1",r.load=function(e,t,n,i){i.isBuild?n(null):r(n)},r}),function(e){function t(e,t){var n=typeof e[t]
return n==y||!(n!=v||!e[t])||"unknown"==n}function n(e,t){return!(typeof e[t]!=v||!e[t])}function r(e,t){return typeof e[t]!=w}function i(e){return function(t,n){for(var r=n.length;r--;)if(!e(t,n[r]))return!1
return!0}}function o(e){return e&&C(e,E)&&I(e,x)}function A(e){return n(e,"body")?e.body:e.getElementsByTagName("body")[0]}function a(e){n(window,"console")&&t(window.console,"log")&&window.console.log(e)}function s(e,t){t?window.alert(e):a(e)}function c(e){D.initialized=!0,D.supported=!1,s("Rangy is not supported on this page in your browser. Reason: "+e,D.config.alertOnFail)}function l(e){s("Rangy warning: "+e,D.config.alertOnWarn)}function u(e){return e.message||e.description||String(e)}function d(){if(!D.initialized){var e,n=!1,r=!1
t(document,"createRange")&&(e=document.createRange(),C(e,b)&&I(e,B)&&(n=!0),e.detach())
var i=A(document)
if(!i||"body"!=i.nodeName.toLowerCase())return void c("No body element found")
if(i&&t(i,"createTextRange")&&(e=i.createTextRange(),o(e)&&(r=!0)),!n&&!r)return void c("Neither Range nor TextRange are available")
D.initialized=!0,D.features={implementsDomRange:n,implementsTextRange:r}
var s,l
for(var d in O)(s=O[d])instanceof h&&s.init(s,D)
for(var f=0,p=T.length;p>f;++f)try{T[f](D)}catch(g){l="Rangy init listener threw an exception. Continuing. Detail: "+u(g),a(l)}}}function f(e){e=e||window,d()
for(var t=0,n=R.length;n>t;++t)R[t](e)}function h(e,t,n){this.name=e,this.dependencies=t,this.initialized=!1,this.supported=!1,this.initializer=n}function p(e,t,n,r){var i=new h(t,n,function(e){if(!e.initialized){e.initialized=!0
try{r(D,e),e.supported=!0}catch(n){var i="Module '"+t+"' failed to load: "+u(n)
a(i)}}})
O[t]=i}function g(){}function m(){}var v=("function"==typeof e.define&&e.define.amd,"object"),y="function",w="undefined",B=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],b=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],x=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],E=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"],C=i(t),S=i(n),I=i(r),O={},D={version:"1.3alpha.804",initialized:!1,supported:!0,util:{isHostMethod:t,isHostObject:n,isHostProperty:r,areHostMethods:C,areHostObjects:S,areHostProperties:I,isTextRange:o,getBody:A},features:{},modules:O,config:{alertOnFail:!0,alertOnWarn:!1,preferTextRange:!1}}
D.fail=c,D.warn=l,{}.hasOwnProperty?D.util.extend=function(e,t,n){var r,i
for(var o in t)t.hasOwnProperty(o)&&(r=e[o],i=t[o],n&&null!==r&&"object"==typeof r&&null!==i&&"object"==typeof i&&D.util.extend(r,i,!0),e[o]=i)
return e}:c("hasOwnProperty not supported"),function(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","div")
e.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","span"))
var t,n=[].slice
try{1==n.call(e.childNodes,0)[0].nodeType&&(t=function(e){return n.call(e,0)})}catch(r){}t||(t=function(e){for(var t=[],n=0,r=e.length;r>n;++n)t[n]=e[n]
return t}),D.util.toArray=t}()
var _
t(document,"addEventListener")?_=function(e,t,n){e.addEventListener(t,n,!1)}:t(document,"attachEvent")?_=function(e,t,n){e.attachEvent("on"+t,n)}:c("Document does not have required addEventListener or attachEvent method"),D.util.addListener=_
var T=[]
D.init=d,D.addInitListener=function(e){D.initialized?e(D):T.push(e)}
var R=[]
D.addCreateMissingNativeApiListener=function(e){R.push(e)},D.createMissingNativeApi=f,h.prototype={init:function(e){for(var t,n,r=this.dependencies||[],i=0,o=r.length;o>i;++i){if(n=r[i],t=O[n],!(t&&t instanceof h))throw new Error("required module '"+n+"' not found")
if(t.init(),!t.supported)throw new Error("required module '"+n+"' not supported")}this.initializer(this)},fail:function(e){throw this.initialized=!0,this.supported=!1,new Error("Module '"+this.name+"' failed to load: "+e)},warn:function(e){D.warn("Module "+this.name+": "+e)},deprecationNotice:function(e,t){D.warn("DEPRECATED: "+e+" in module "+this.name+"is deprecated. Please use "+t+" instead")},createError:function(e){return new Error("Error in Rangy "+this.name+" module: "+e)}},D.createModule=function(e){var t,n
2==arguments.length?(t=arguments[1],n=[]):(t=arguments[2],n=arguments[1]),p(!1,e,n,t)},D.createCoreModule=function(e,t,n){p(!0,e,t,n)},D.RangePrototype=g,D.rangePrototype=new g,D.selectionPrototype=new m
var N=!1,k=function(e){N||(N=!0,D.initialized||d())}
return typeof window==w?void c("No window found"):typeof document==w?void c("No document found"):(t(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",k,!1),_(window,"load",k),void(e.rangy=D))}(this),rangy.createCoreModule("DomUtil",[],function(e,t){function n(e){var t
return typeof e.namespaceURI==D||null===(t=e.namespaceURI)||"http://www.w3.org/1999/xhtml"==t}function r(e){var t=e.parentNode
return 1==t.nodeType?t:null}function i(e){for(var t=0;e=e.previousSibling;)++t
return t}function o(e){switch(e.nodeType){case 7:case 10:return 0
case 3:case 8:return e.length
default:return e.childNodes.length}}function A(e,t){var n,r=[]
for(n=e;n;n=n.parentNode)r.push(n)
for(n=t;n;n=n.parentNode)if(N(r,n))return n
return null}function a(e,t,n){for(var r=n?t:t.parentNode;r;){if(r===e)return!0
r=r.parentNode}return!1}function s(e,t){return a(e,t,!0)}function c(e,t,n){for(var r,i=n?e:e.parentNode;i;){if(r=i.parentNode,r===t)return i
i=r}return null}function l(e){var t=e.nodeType
return 3==t||4==t||8==t}function u(e){if(!e)return!1
var t=e.nodeType
return 3==t||8==t}function d(e,t){var n=t.nextSibling,r=t.parentNode
return n?r.insertBefore(e,n):r.appendChild(e),e}function f(e,t,n){var r=e.cloneNode(!1)
if(r.deleteData(0,t),e.deleteData(t,e.length-t),d(r,e),n)for(var o,A=0;o=n[A++];)o.node==e&&o.offset>t?(o.node=r,o.offset-=t):o.node==e.parentNode&&o.offset>i(e)&&++o.offset
return r}function h(e){if(9==e.nodeType)return e
if(typeof e.ownerDocument!=D)return e.ownerDocument
if(typeof e.document!=D)return e.document
if(e.parentNode)return h(e.parentNode)
throw t.createError("getDocument: no document found for node")}function p(e){var n=h(e)
if(typeof n.defaultView!=D)return n.defaultView
if(typeof n.parentWindow!=D)return n.parentWindow
throw t.createError("Cannot get a window object for node")}function g(e){if(typeof e.contentDocument!=D)return e.contentDocument
if(typeof e.contentWindow!=D)return e.contentWindow.document
throw t.createError("getIframeDocument: No Document object found for iframe element")}function m(e){if(typeof e.contentWindow!=D)return e.contentWindow
if(typeof e.contentDocument!=D)return e.contentDocument.defaultView
throw t.createError("getIframeWindow: No Window object found for iframe element")}function v(e){return e&&_.isHostMethod(e,"setTimeout")&&_.isHostObject(e,"document")}function y(e,t,n){var r
if(e?_.isHostProperty(e,"nodeType")?r=1==e.nodeType&&"iframe"==e.tagName.toLowerCase()?g(e):h(e):v(e)&&(r=e.document):r=document,!r)throw t.createError(n+"(): Parameter must be a Window object or DOM node")
return r}function w(e){for(var t;t=e.parentNode;)e=t
return e}function B(e,n,r,o){var a,s,l,u,d
if(e==r)return n===o?0:o>n?-1:1
if(a=c(r,e,!0))return n<=i(a)?-1:1
if(a=c(e,r,!0))return i(a)<o?-1:1
if(s=A(e,r),!s)throw new Error("comparePoints error: nodes have no common ancestor")
if(l=e===s?s:c(e,s,!0),u=r===s?s:c(r,s,!0),l===u)throw t.createError("comparePoints got to case 4 and childA and childB are the same!")
for(d=s.firstChild;d;){if(d===l)return-1
if(d===u)return 1
d=d.nextSibling}}function b(e){try{return e.parentNode,!1}catch(t){return!0}}function x(e){if(!e)return"[No node]"
if(k&&b(e))return"[Broken node]"
if(l(e))return'"'+e.data+'"'
if(1==e.nodeType){var t=e.id?' id="'+e.id+'"':""
return"<"+e.nodeName+t+">["+i(e)+"]["+e.childNodes.length+"]["+(e.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return e.nodeName}function E(e){for(var t,n=h(e).createDocumentFragment();t=e.firstChild;)n.appendChild(t)
return n}function C(e){this.root=e,this._next=e}function S(e){return new C(e)}function I(e,t){this.node=e,this.offset=t}function O(e){this.code=this[e],this.codeName=e,this.message="DOMException: "+this.codeName}var D="undefined",_=e.util
_.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||t.fail("document missing a Node creation method"),_.isHostMethod(document,"getElementsByTagName")||t.fail("document missing getElementsByTagName method")
var T=document.createElementNS("http://www.w3.org/1999/xhtml","div")
_.areHostMethods(T,["insertBefore","appendChild","cloneNode"]||!_.areHostObjects(T,["previousSibling","nextSibling","childNodes","parentNode"]))||t.fail("Incomplete Element implementation"),_.isHostProperty(T,"innerHTML")||t.fail("Element is missing innerHTML property")
var R=document.createTextNode("test")
_.areHostMethods(R,["splitText","deleteData","insertData","appendData","cloneNode"]||!_.areHostObjects(T,["previousSibling","nextSibling","childNodes","parentNode"])||!_.areHostProperties(R,["data"]))||t.fail("Incomplete Text Node implementation")
var N=function(e,t){for(var n=e.length;n--;)if(e[n]===t)return!0
return!1},k=!1
!function(){var t=document.createElementNS("http://www.w3.org/1999/xhtml","b")
t.innerHTML="1"
var n=t.firstChild
t.innerHTML="<br>",k=b(n),e.features.crashyTextNodes=k}()
var P
typeof window.getComputedStyle!=D?P=function(e,t){return p(e).getComputedStyle(e,null)[t]}:typeof document.documentElement.currentStyle!=D?P=function(e,t){return e.currentStyle[t]}:t.fail("No means of obtaining computed style properties found"),C.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var e,t,n=this._current=this._next
if(this._current)if(e=n.firstChild)this._next=e
else{for(t=null;n!==this.root&&!(t=n.nextSibling);)n=n.parentNode
this._next=t}return this._current},detach:function(){this._current=this._next=this.root=null}},I.prototype={equals:function(e){return!!e&&this.node===e.node&&this.offset==e.offset},inspect:function(){return"[DomPosition("+x(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},O.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},O.prototype.toString=function(){return this.message},e.dom={arrayContains:N,isHtmlNamespace:n,parentElement:r,getNodeIndex:i,getNodeLength:o,getCommonAncestor:A,isAncestorOf:a,isOrIsAncestorOf:s,getClosestAncestorIn:c,isCharacterDataNode:l,isTextOrCommentNode:u,insertAfter:d,splitDataNode:f,getDocument:h,getWindow:p,getIframeWindow:m,getIframeDocument:g,getBody:_.getBody,isWindow:v,getContentDocument:y,getRootContainer:w,comparePoints:B,isBrokenNode:b,inspectNode:x,getComputedStyleProperty:P,fragmentFromNodeChildren:E,createIterator:S,DomPosition:I},e.DOMException=O}),rangy.createCoreModule("DomRange",["DomUtil"],function(e,t){function n(e,t){return 3!=e.nodeType&&(z(e,t.startContainer)||z(e,t.endContainer))}function r(e){return e.document||j(e.startContainer)}function i(e){return new M(e.parentNode,H(e))}function o(e){return new M(e.parentNode,H(e)+1)}function A(e,t,n){var r=11==e.nodeType?e.firstChild:e
return U(t)?n==t.length?F.insertAfter(e,t):t.parentNode.insertBefore(e,0==n?t:V(t,n)):n>=t.childNodes.length?t.appendChild(e):t.insertBefore(e,t.childNodes[n]),r}function a(e,t,n){if(I(e),I(t),r(t)!=r(e))throw new L("WRONG_DOCUMENT_ERR")
var i=W(e.startContainer,e.startOffset,t.endContainer,t.endOffset),o=W(e.endContainer,e.endOffset,t.startContainer,t.startOffset)
return n?0>=i&&o>=0:0>i&&o>0}function s(e){for(var t,n,i,o=r(e.range).createDocumentFragment();n=e.next();){if(t=e.isPartiallySelectedSubtree(),n=n.cloneNode(!t),t&&(i=e.getSubtreeIterator(),n.appendChild(s(i)),i.detach(!0)),10==n.nodeType)throw new L("HIERARCHY_REQUEST_ERR")
o.appendChild(n)}return o}function c(e,t,n){var r,i
n=n||{stop:!1}
for(var o,A;o=e.next();)if(e.isPartiallySelectedSubtree()){if(t(o)===!1)return void(n.stop=!0)
if(A=e.getSubtreeIterator(),c(A,t,n),A.detach(!0),n.stop)return}else for(r=F.createIterator(o);i=r.next();)if(t(i)===!1)return void(n.stop=!0)}function l(e){for(var t;e.next();)e.isPartiallySelectedSubtree()?(t=e.getSubtreeIterator(),l(t),t.detach(!0)):e.remove()}function u(e){for(var t,n,i=r(e.range).createDocumentFragment();t=e.next();){if(e.isPartiallySelectedSubtree()?(t=t.cloneNode(!1),n=e.getSubtreeIterator(),t.appendChild(u(n)),n.detach(!0)):e.remove(),10==t.nodeType)throw new L("HIERARCHY_REQUEST_ERR")
i.appendChild(t)}return i}function d(e,t,n){var r,i=!(!t||!t.length),o=!!n
i&&(r=new RegExp("^("+t.join("|")+")$"))
var A=[]
return c(new h(e,!1),function(t){if((!i||r.test(t.nodeType))&&(!o||n(t))){var a=e.startContainer
if(t!=a||!U(a)||e.startOffset!=a.length){var s=e.endContainer
t==s&&U(s)&&0==e.endOffset||A.push(t)}}}),A}function f(e){var t="undefined"==typeof e.getName?"Range":e.getName()
return"["+t+"("+F.inspectNode(e.startContainer)+":"+e.startOffset+", "+F.inspectNode(e.endContainer)+":"+e.endOffset+")]"}function h(e,t){if(this.range=e,this.clonePartiallySelectedTextNodes=t,!e.collapsed){this.sc=e.startContainer,this.so=e.startOffset,this.ec=e.endContainer,this.eo=e.endOffset
var n=e.commonAncestorContainer
this.sc===this.ec&&U(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==n||U(this.sc)?Y(this.sc,n,!0):this.sc.childNodes[this.so],this._last=this.ec!==n||U(this.ec)?Y(this.ec,n,!0):this.ec.childNodes[this.eo-1])}}function p(e){this.code=this[e],this.codeName=e,this.message="RangeException: "+this.codeName}function g(e){return function(t,n){for(var r,i=n?t:t.parentNode;i;){if(r=i.nodeType,Z(e,r))return i
i=i.parentNode}return null}}function m(e,t){if(oe(e,t))throw new p("INVALID_NODE_TYPE_ERR")}function v(e){if(!e.startContainer)throw new L("INVALID_STATE_ERR")}function y(e,t){if(!Z(t,e.nodeType))throw new p("INVALID_NODE_TYPE_ERR")}function w(e,t){if(0>t||t>(U(e)?e.length:e.childNodes.length))throw new L("INDEX_SIZE_ERR")}function B(e,t){if(re(e,!0)!==re(t,!0))throw new L("WRONG_DOCUMENT_ERR")}function b(e){if(ie(e,!0))throw new L("NO_MODIFICATION_ALLOWED_ERR")}function x(e,t){if(!e)throw new L(t)}function E(e){return K&&F.isBrokenNode(e)||!Z($,e.nodeType)&&!re(e,!0)}function C(e,t){return t<=(U(e)?e.length:e.childNodes.length)}function S(e){return!!e.startContainer&&!!e.endContainer&&!E(e.startContainer)&&!E(e.endContainer)&&C(e.startContainer,e.startOffset)&&C(e.endContainer,e.endOffset)}function I(e){if(v(e),!S(e))throw new Error("Range error: Range is no longer valid after DOM mutation ("+e.inspect()+")")}function O(e,t){I(e)
var n=e.startContainer,r=e.startOffset,i=e.endContainer,o=e.endOffset,A=n===i
U(i)&&o>0&&o<i.length&&V(i,o,t),U(n)&&r>0&&r<n.length&&(n=V(n,r,t),A?(o-=r,i=n):i==n.parentNode&&o>=H(n)&&o++,r=0),e.setStartAndEnd(n,r,i,o)}function D(e){e.START_TO_START=ue,e.START_TO_END=de,e.END_TO_END=fe,e.END_TO_START=he,e.NODE_BEFORE=pe,e.NODE_AFTER=ge,e.NODE_BEFORE_AND_AFTER=me,e.NODE_INSIDE=ve}function _(e){D(e),D(e.prototype)}function T(e,t){return function(){I(this)
var n,r,i=this.startContainer,A=this.startOffset,a=this.commonAncestorContainer,s=new h(this,!0)
i!==a&&(n=Y(i,a,!0),r=o(n),i=r.node,A=r.offset),c(s,b),s.reset()
var l=e(s)
return s.detach(),t(this,i,A,i,A),l}}function R(t,r,A){function a(e,t){return function(n){v(this),y(n,X),y(J(n),$)
var r=(e?i:o)(n);(t?s:c)(this,r.node,r.offset)}}function s(e,t,n){var i=e.endContainer,o=e.endOffset
t===e.startContainer&&n===e.startOffset||(J(t)==J(i)&&1!=W(t,n,i,o)||(i=t,o=n),r(e,t,n,i,o))}function c(e,t,n){var i=e.startContainer,o=e.startOffset
t===e.endContainer&&n===e.endOffset||(J(t)==J(i)&&-1!=W(t,n,i,o)||(i=t,o=n),r(e,i,o,t,n))}var d=function(){}
d.prototype=e.rangePrototype,t.prototype=new d,G.extend(t.prototype,{setStart:function(e,t){v(this),m(e,!0),w(e,t),s(this,e,t)},setEnd:function(e,t){v(this),m(e,!0),w(e,t),c(this,e,t)},setStartAndEnd:function(){v(this)
var e=arguments,t=e[0],n=e[1],i=t,o=n
switch(e.length){case 3:o=e[2]
break
case 4:i=e[2],o=e[3]}r(this,t,n,i,o)},setBoundary:function(e,t,n){this["set"+(n?"Start":"End")](e,t)},setStartBefore:a(!0,!0),setStartAfter:a(!1,!0),setEndBefore:a(!0,!1),setEndAfter:a(!1,!1),collapse:function(e){I(this),e?r(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):r(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(e){v(this),m(e,!0),r(this,e,0,e,q(e))},selectNode:function(e){v(this),m(e,!1),y(e,X)
var t=i(e),n=o(e)
r(this,t.node,t.offset,n.node,n.offset)},extractContents:T(u,r),deleteContents:T(l,r),canSurroundContents:function(){I(this),b(this.startContainer),b(this.endContainer)
var e=new h(this,!0),t=e._first&&n(e._first,this)||e._last&&n(e._last,this)
return e.detach(),!t},detach:function(){A(this)},splitBoundaries:function(){O(this)},splitBoundariesPreservingPositions:function(e){O(this,e)},normalizeBoundaries:function(){I(this)
var e=this.startContainer,t=this.startOffset,n=this.endContainer,i=this.endOffset,o=function(e){var t=e.nextSibling
t&&t.nodeType==e.nodeType&&(n=e,i=e.length,e.appendData(t.data),t.parentNode.removeChild(t))},A=function(r){var o=r.previousSibling
if(o&&o.nodeType==r.nodeType){e=r
var A=r.length
if(t=o.length,r.insertData(0,o.data),o.parentNode.removeChild(o),e==n)i+=t,n=e
else if(n==r.parentNode){var a=H(r)
i==a?(n=r,i=A):i>a&&i--}}},a=!0
if(U(n))n.length==i&&o(n)
else{if(i>0){var s=n.childNodes[i-1]
s&&U(s)&&o(s)}a=!this.collapsed}if(a){if(U(e))0==t&&A(e)
else if(t<e.childNodes.length){var c=e.childNodes[t]
c&&U(c)&&A(c)}}else e=n,t=i
r(this,e,t,n,i)},collapseToPoint:function(e,t){v(this),m(e,!0),w(e,t),this.setStartAndEnd(e,t)}}),_(t)}function N(e){e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset,e.commonAncestorContainer=e.collapsed?e.startContainer:F.getCommonAncestor(e.startContainer,e.endContainer)}function k(e,t,n,r,i){e.startContainer=t,e.startOffset=n,e.endContainer=r,e.endOffset=i,e.document=F.getDocument(t),N(e)}function P(e){v(e),e.startContainer=e.startOffset=e.endContainer=e.endOffset=e.document=null,e.collapsed=e.commonAncestorContainer=null}function Q(e){this.startContainer=e,this.startOffset=0,this.endContainer=e,this.endOffset=0,this.document=e,N(this)}var F=e.dom,G=e.util,M=F.DomPosition,L=e.DOMException,U=F.isCharacterDataNode,H=F.getNodeIndex,z=F.isOrIsAncestorOf,j=F.getDocument,W=F.comparePoints,V=F.splitDataNode,Y=F.getClosestAncestorIn,q=F.getNodeLength,Z=F.arrayContains,J=F.getRootContainer,K=e.features.crashyTextNodes
h.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var e=this._current=this._next
return e&&(this._next=e!==this._last?e.nextSibling:null,U(e)&&this.clonePartiallySelectedTextNodes&&(e===this.ec&&(e=e.cloneNode(!0)).deleteData(this.eo,e.length-this.eo),this._current===this.sc&&(e=e.cloneNode(!0)).deleteData(0,this.so))),e},remove:function(){var e,t,n=this._current
!U(n)||n!==this.sc&&n!==this.ec?n.parentNode&&n.parentNode.removeChild(n):(e=n===this.sc?this.so:0,t=n===this.ec?this.eo:n.length,e!=t&&n.deleteData(e,t-e))},isPartiallySelectedSubtree:function(){var e=this._current
return n(e,this.range)},getSubtreeIterator:function(){var e
if(this.isSingleCharacterDataNode)e=this.range.cloneRange(),e.collapse(!1)
else{e=new Q(r(this.range))
var t=this._current,n=t,i=0,o=t,A=q(t)
z(t,this.sc)&&(n=this.sc,i=this.so),z(t,this.ec)&&(o=this.ec,A=this.eo),k(e,n,i,o,A)}return new h(e,this.clonePartiallySelectedTextNodes)},detach:function(e){e&&this.range.detach(),this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}},p.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},p.prototype.toString=function(){return this.message}
var X=[1,3,4,5,7,8,10],$=[2,9,11],ee=[5,6,10,12],te=[1,3,4,5,7,8,10,11],ne=[1,3,4,5,7,8],re=g([9,11]),ie=g(ee),oe=g([6,10,12]),Ae=document.createElementNS("http://www.w3.org/1999/xhtml","style"),ae=!1
try{Ae.innerHTML="<b>x</b>",ae=3==Ae.firstChild.nodeType}catch(se){}e.features.htmlParsingConforms=ae
var ce=ae?function(e){var t=this.startContainer,n=j(t)
if(!t)throw new L("INVALID_STATE_ERR")
var r=null
return 1==t.nodeType?r=t:U(t)&&(r=F.parentElement(t)),r=null===r||"HTML"==r.nodeName&&F.isHtmlNamespace(j(r).documentElement)&&F.isHtmlNamespace(r)?n.createElementNS("http://www.w3.org/1999/xhtml","body"):r.cloneNode(!1),r.innerHTML=e,F.fragmentFromNodeChildren(r)}:function(e){v(this)
var t=r(this),n=t.createElementNS("http://www.w3.org/1999/xhtml","body")
return n.innerHTML=e,F.fragmentFromNodeChildren(n)},le=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],ue=0,de=1,fe=2,he=3,pe=0,ge=1,me=2,ve=3
G.extend(e.rangePrototype,{compareBoundaryPoints:function(e,t){I(this),B(this.startContainer,t.startContainer)
var n,r,i,o,A=e==he||e==ue?"start":"end",a=e==de||e==ue?"start":"end"
return n=this[A+"Container"],r=this[A+"Offset"],i=t[a+"Container"],o=t[a+"Offset"],W(n,r,i,o)},insertNode:function(e){if(I(this),y(e,te),b(this.startContainer),z(e,this.startContainer))throw new L("HIERARCHY_REQUEST_ERR")
var t=A(e,this.startContainer,this.startOffset)
this.setStartBefore(t)},cloneContents:function(){I(this)
var e,t
if(this.collapsed)return r(this).createDocumentFragment()
if(this.startContainer===this.endContainer&&U(this.startContainer))return e=this.startContainer.cloneNode(!0),e.data=e.data.slice(this.startOffset,this.endOffset),t=r(this).createDocumentFragment(),t.appendChild(e),t
var n=new h(this,!0)
return e=s(n),n.detach(),e},canSurroundContents:function(){I(this),b(this.startContainer),b(this.endContainer)
var e=new h(this,!0),t=e._first&&n(e._first,this)||e._last&&n(e._last,this)
return e.detach(),!t},surroundContents:function(e){if(y(e,ne),!this.canSurroundContents())throw new p("BAD_BOUNDARYPOINTS_ERR")
var t=this.extractContents()
if(e.hasChildNodes())for(;e.lastChild;)e.removeChild(e.lastChild)
A(e,this.startContainer,this.startOffset),e.appendChild(t),this.selectNode(e)},cloneRange:function(){I(this)
for(var e,t=new Q(r(this)),n=le.length;n--;)e=le[n],t[e]=this[e]
return t},toString:function(){I(this)
var e=this.startContainer
if(e===this.endContainer&&U(e))return 3==e.nodeType||4==e.nodeType?e.data.slice(this.startOffset,this.endOffset):""
var t=[],n=new h(this,!0)
return c(n,function(e){3!=e.nodeType&&4!=e.nodeType||t.push(e.data)}),n.detach(),t.join("")},compareNode:function(e){I(this)
var t=e.parentNode,n=H(e)
if(!t)throw new L("NOT_FOUND_ERR")
var r=this.comparePoint(t,n),i=this.comparePoint(t,n+1)
return 0>r?i>0?me:pe:i>0?ge:ve},comparePoint:function(e,t){return I(this),x(e,"HIERARCHY_REQUEST_ERR"),B(e,this.startContainer),W(e,t,this.startContainer,this.startOffset)<0?-1:W(e,t,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:ce,toHtml:function(){I(this)
var e=this.commonAncestorContainer.parentNode.cloneNode(!1)
return e.appendChild(this.cloneContents()),e.innerHTML},intersectsNode:function(e,t){if(I(this),x(e,"NOT_FOUND_ERR"),j(e)!==r(this))return!1
var n=e.parentNode,i=H(e)
x(n,"NOT_FOUND_ERR")
var o=W(n,i,this.endContainer,this.endOffset),A=W(n,i+1,this.startContainer,this.startOffset)
return t?0>=o&&A>=0:0>o&&A>0},isPointInRange:function(e,t){return I(this),x(e,"HIERARCHY_REQUEST_ERR"),B(e,this.startContainer),W(e,t,this.startContainer,this.startOffset)>=0&&W(e,t,this.endContainer,this.endOffset)<=0},intersectsRange:function(e){return a(this,e,!1)},intersectsOrTouchesRange:function(e){return a(this,e,!0)},intersection:function(e){if(this.intersectsRange(e)){var t=W(this.startContainer,this.startOffset,e.startContainer,e.startOffset),n=W(this.endContainer,this.endOffset,e.endContainer,e.endOffset),r=this.cloneRange()
return-1==t&&r.setStart(e.startContainer,e.startOffset),1==n&&r.setEnd(e.endContainer,e.endOffset),r}return null},union:function(e){if(this.intersectsOrTouchesRange(e)){var t=this.cloneRange()
return-1==W(e.startContainer,e.startOffset,this.startContainer,this.startOffset)&&t.setStart(e.startContainer,e.startOffset),1==W(e.endContainer,e.endOffset,this.endContainer,this.endOffset)&&t.setEnd(e.endContainer,e.endOffset),t}throw new p("Ranges do not intersect")},containsNode:function(e,t){return t?this.intersectsNode(e,!1):this.compareNode(e)==ve},containsNodeContents:function(e){return this.comparePoint(e,0)>=0&&this.comparePoint(e,q(e))<=0},containsRange:function(e){var t=this.intersection(e)
return null!==t&&e.equals(t)},containsNodeText:function(e){var t=this.cloneRange()
t.selectNode(e)
var n=t.getNodes([3])
if(n.length>0){t.setStart(n[0],0)
var r=n.pop()
t.setEnd(r,r.length)
var i=this.containsRange(t)
return t.detach(),i}return this.containsNodeContents(e)},getNodes:function(e,t){return I(this),d(this,e,t)},getDocument:function(){return r(this)},collapseBefore:function(e){v(this),this.setEndBefore(e),this.collapse(!1)},collapseAfter:function(e){v(this),this.setStartAfter(e),this.collapse(!0)},getBookmark:function(t){var n=r(this),i=e.createRange(n)
t=t||F.getBody(n),i.selectNodeContents(t)
var o=this.intersection(i),A=0,a=0
return o&&(i.setEnd(o.startContainer,o.startOffset),A=i.toString().length,a=A+o.toString().length,i.detach()),{start:A,end:a,containerNode:t}},moveToBookmark:function(e){var t=e.containerNode,n=0
this.setStart(t,0),this.collapse(!0)
for(var r,i,o,A,a=[t],s=!1,c=!1;!c&&(r=a.pop());)if(3==r.nodeType)i=n+r.length,!s&&e.start>=n&&e.start<=i&&(this.setStart(r,e.start-n),s=!0),s&&e.end>=n&&e.end<=i&&(this.setEnd(r,e.end-n),c=!0),n=i
else for(A=r.childNodes,o=A.length;o--;)a.push(A[o])},getName:function(){return"DomRange"},equals:function(e){return Q.rangesEqual(this,e)},isValid:function(){return S(this)},inspect:function(){return f(this)}}),R(Q,k,P),G.extend(Q,{rangeProperties:le,RangeIterator:h,copyComparisonConstants:_,createPrototypeRange:R,inspect:f,getRangeDocument:r,rangesEqual:function(e,t){return e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset}}),e.DomRange=Q,e.RangeException=p}),rangy.createCoreModule("WrappedRange",["DomRange"],function(e,t){var n,r,i=e.dom,o=e.util,A=i.DomPosition,a=e.DomRange,s=i.getBody,c=i.getContentDocument,l=i.isCharacterDataNode
if(e.features.implementsDomRange&&!function(){function r(e){for(var t,n=f.length;n--;)t=f[n],e[t]=e.nativeRange[t]
e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset}function A(e,t,n,r,i){var o=e.startContainer!==t||e.startOffset!=n,A=e.endContainer!==r||e.endOffset!=i,a=!e.equals(e.nativeRange);(o||A||a)&&(e.setEnd(r,i),e.setStart(t,n))}function l(e){e.nativeRange.detach(),e.detached=!0
for(var t=f.length;t--;)e[f[t]]=null}var u,d,f=a.rangeProperties
n=function(e){if(!e)throw t.createError("WrappedRange: Range must be specified")
this.nativeRange=e,r(this)},a.createPrototypeRange(n,A,l),u=n.prototype,u.selectNode=function(e){this.nativeRange.selectNode(e),r(this)},u.cloneContents=function(){return this.nativeRange.cloneContents()},u.surroundContents=function(e){this.nativeRange.surroundContents(e),r(this)},u.collapse=function(e){this.nativeRange.collapse(e),r(this)},u.cloneRange=function(){return new n(this.nativeRange.cloneRange())},u.refresh=function(){r(this)},u.toString=function(){return this.nativeRange.toString()}
var h=document.createTextNode("test")
s(document).appendChild(h)
var p=document.createRange()
p.setStart(h,0),p.setEnd(h,0)
try{p.setStart(h,1),u.setStart=function(e,t){this.nativeRange.setStart(e,t),r(this)},u.setEnd=function(e,t){this.nativeRange.setEnd(e,t),r(this)},d=function(e){return function(t){this.nativeRange[e](t),r(this)}}}catch(g){u.setStart=function(e,t){try{this.nativeRange.setStart(e,t)}catch(n){this.nativeRange.setEnd(e,t),this.nativeRange.setStart(e,t)}r(this)},u.setEnd=function(e,t){try{this.nativeRange.setEnd(e,t)}catch(n){this.nativeRange.setStart(e,t),this.nativeRange.setEnd(e,t)}r(this)},d=function(e,t){return function(n){try{this.nativeRange[e](n)}catch(i){this.nativeRange[t](n),this.nativeRange[e](n)}r(this)}}}u.setStartBefore=d("setStartBefore","setEndBefore"),u.setStartAfter=d("setStartAfter","setEndAfter"),u.setEndBefore=d("setEndBefore","setStartBefore"),u.setEndAfter=d("setEndAfter","setStartAfter"),u.selectNodeContents=function(e){this.setStartAndEnd(e,0,i.getNodeLength(e))},p.selectNodeContents(h),p.setEnd(h,3)
var m=document.createRange()
m.selectNodeContents(h),m.setEnd(h,4),m.setStart(h,2),-1==p.compareBoundaryPoints(p.START_TO_END,m)&&1==p.compareBoundaryPoints(p.END_TO_START,m)?u.compareBoundaryPoints=function(e,t){return t=t.nativeRange||t,e==t.START_TO_END?e=t.END_TO_START:e==t.END_TO_START&&(e=t.START_TO_END),this.nativeRange.compareBoundaryPoints(e,t)}:u.compareBoundaryPoints=function(e,t){return this.nativeRange.compareBoundaryPoints(e,t.nativeRange||t)}
var v=document.createElementNS("http://www.w3.org/1999/xhtml","div")
v.innerHTML="123"
var y=v.firstChild,w=s(document)
w.appendChild(v),p.setStart(y,1),p.setEnd(y,2),p.deleteContents(),"13"==y.data&&(u.deleteContents=function(){this.nativeRange.deleteContents(),r(this)},u.extractContents=function(){var e=this.nativeRange.extractContents()
return r(this),e}),w.removeChild(v),w=null,o.isHostMethod(p,"createContextualFragment")&&(u.createContextualFragment=function(e){return this.nativeRange.createContextualFragment(e)}),s(document).removeChild(h),p.detach(),m.detach(),u.getName=function(){return"WrappedRange"},e.WrappedRange=n,e.createNativeRange=function(e){return e=c(e,t,"createNativeRange"),e.createRange()}}(),e.features.implementsTextRange){var u=function(e){var t=e.parentElement(),n=e.duplicate()
n.collapse(!0)
var r=n.parentElement()
n=e.duplicate(),n.collapse(!1)
var o=n.parentElement(),A=r==o?r:i.getCommonAncestor(r,o)
return A==t?A:i.getCommonAncestor(t,A)},d=function(e){return 0==e.compareEndPoints("StartToEnd",e)},f=function(e,t,n,r,o){var a=e.duplicate()
a.collapse(n)
var s=a.parentElement()
if(i.isOrIsAncestorOf(t,s)||(s=t),!s.canHaveHTML){var c=new A(s.parentNode,i.getNodeIndex(s))
return{boundaryPosition:c,nodeInfo:{nodeIndex:c.offset,containerElement:c.node}}}var u=i.getDocument(s).createElementNS("http://www.w3.org/1999/xhtml","span")
u.parentNode&&u.parentNode.removeChild(u)
for(var d,f,h,p,g,m=n?"StartToStart":"StartToEnd",v=o&&o.containerElement==s?o.nodeIndex:0,y=s.childNodes.length,w=y,B=w;;){if(B==y?s.appendChild(u):s.insertBefore(u,s.childNodes[B]),a.moveToElementText(u),d=a.compareEndPoints(m,e),0==d||v==w)break
if(-1==d){if(w==v+1)break
v=B}else w=w==v+1?v:B
B=Math.floor((v+w)/2),s.removeChild(u)}if(g=u.nextSibling,-1==d&&g&&l(g)){a.setEndPoint(n?"EndToStart":"EndToEnd",e)
var b
if(/[\r\n]/.test(g.data)){var x=a.duplicate(),E=x.text.replace(/\r\n/g,"\r").length
for(b=x.moveStart("character",E);-1==(d=x.compareEndPoints("StartToEnd",x));)b++,x.moveStart("character",1)}else b=a.text.length
p=new A(g,b)}else f=(r||!n)&&u.previousSibling,h=(r||n)&&u.nextSibling,p=h&&l(h)?new A(h,0):f&&l(f)?new A(f,f.data.length):new A(s,i.getNodeIndex(u))
return u.parentNode.removeChild(u),{boundaryPosition:p,nodeInfo:{nodeIndex:B,containerElement:s}}},h=function(e,t){var n,r,o,A,a=e.offset,c=i.getDocument(e.node),u=s(c).createTextRange(),d=l(e.node)
return d?(n=e.node,r=n.parentNode):(A=e.node.childNodes,n=a<A.length?A[a]:null,r=e.node),o=c.createElementNS("http://www.w3.org/1999/xhtml","span"),o.innerHTML="&#feff;",n?r.insertBefore(o,n):r.appendChild(o),u.moveToElementText(o),u.collapse(!t),r.removeChild(o),d&&u[t?"moveStart":"moveEnd"]("character",a),u}
if(r=function(e){this.textRange=e,this.refresh()},r.prototype=new a(document),r.prototype.refresh=function(){var e,t,n,r=u(this.textRange)
d(this.textRange)?t=e=f(this.textRange,r,!0,!0).boundaryPosition:(n=f(this.textRange,r,!0,!1),e=n.boundaryPosition,t=f(this.textRange,r,!1,!1,n.nodeInfo).boundaryPosition),this.setStart(e.node,e.offset),this.setEnd(t.node,t.offset)},r.prototype.getName=function(){return"WrappedTextRange"},a.copyComparisonConstants(r),r.rangeToTextRange=function(e){if(e.collapsed)return h(new A(e.startContainer,e.startOffset),!0)
var t=h(new A(e.startContainer,e.startOffset),!0),n=h(new A(e.endContainer,e.endOffset),!1),r=s(a.getRangeDocument(e)).createTextRange()
return r.setEndPoint("StartToStart",t),r.setEndPoint("EndToEnd",n),r},e.WrappedTextRange=r,!e.features.implementsDomRange||e.config.preferTextRange){var p=function(){return this}()
"undefined"==typeof p.Range&&(p.Range=r),e.createNativeRange=function(e){return e=c(e,t,"createNativeRange"),s(e).createTextRange()},e.WrappedRange=r}}e.createRange=function(n){return n=c(n,t,"createRange"),new e.WrappedRange(e.createNativeRange(n))},e.createRangyRange=function(e){return e=c(e,t,"createRangyRange"),new a(e)},e.createIframeRange=function(n){return t.deprecationNotice("createIframeRange()","createRange(iframeEl)"),e.createRange(n)},e.createIframeRangyRange=function(n){return t.deprecationNotice("createIframeRangyRange()","createRangyRange(iframeEl)"),e.createRangyRange(n)},e.addCreateMissingNativeApiListener(function(t){var n=t.document
"undefined"==typeof n.createRange&&(n.createRange=function(){return e.createRange(n)}),n=t=null})}),rangy.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],function(e,t){function n(e){return"string"==typeof e?/^backward(s)?$/i.test(e):!!e}function r(e,n){if(e){if(O.isWindow(e))return e
if(e instanceof m)return e.win
var r=O.getContentDocument(e,t,n)
return O.getWindow(r)}return window}function i(e){return r(e,"getWinSelection").getSelection()}function o(e){return r(e,"getDocSelection").document.selection}function A(e){var t=!1
return e.anchorNode&&(t=1==O.comparePoints(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)),t}function a(e,t,n){var r=n?"end":"start",i=n?"start":"end"
e.anchorNode=t[r+"Container"],e.anchorOffset=t[r+"Offset"],e.focusNode=t[i+"Container"],e.focusOffset=t[i+"Offset"]}function s(e){var t=e.nativeSelection
e.anchorNode=t.anchorNode,e.anchorOffset=t.anchorOffset,e.focusNode=t.focusNode,e.focusOffset=t.focusOffset}function c(e){e.anchorNode=e.focusNode=null,e.anchorOffset=e.focusOffset=0,e.rangeCount=0,e.isCollapsed=!0,e._ranges.length=0}function l(t){var n
return t instanceof T?(n=e.createNativeRange(t.getDocument()),n.setEnd(t.endContainer,t.endOffset),n.setStart(t.startContainer,t.startOffset)):t instanceof R?n=t.nativeRange:P.implementsDomRange&&t instanceof O.getWindow(t.startContainer).Range&&(n=t),n}function u(e){if(!e.length||1!=e[0].nodeType)return!1
for(var t=1,n=e.length;n>t;++t)if(!O.isAncestorOf(e[0],e[t]))return!1
return!0}function d(e){var n=e.getNodes()
if(!u(n))throw t.createError("getSingleElementFromRange: range "+e.inspect()+" did not consist of a single element")
return n[0]}function f(e){return!!e&&"undefined"!=typeof e.text}function h(e,t){var n=new R(t)
e._ranges=[n],a(e,n,!1),e.rangeCount=1,e.isCollapsed=n.collapsed}function p(t){if(t._ranges.length=0,"None"==t.docSelection.type)c(t)
else{var n=t.docSelection.createRange()
if(f(n))h(t,n)
else{t.rangeCount=n.length
for(var r,i=F(n.item(0)),o=0;o<t.rangeCount;++o)r=e.createRange(i),r.selectNode(n.item(o)),t._ranges.push(r)
t.isCollapsed=1==t.rangeCount&&t._ranges[0].collapsed,a(t,t._ranges[t.rangeCount-1],!1)}}}function g(e,n){for(var r=e.docSelection.createRange(),i=d(n),o=F(r.item(0)),A=G(o).createControlRange(),a=0,s=r.length;s>a;++a)A.add(r.item(a))
try{A.add(i)}catch(c){throw t.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}A.select(),p(e)}function m(e,t,n){this.nativeSelection=e,this.docSelection=t,this._ranges=[],this.win=n,this.refresh()}function v(e){e.win=e.anchorNode=e.focusNode=e._ranges=null,e.rangeCount=e.anchorOffset=e.focusOffset=0,e.detached=!0}function y(e,t){for(var n,r,i=te.length;i--;)if(n=te[i],r=n.selection,"deleteAll"==t)v(r)
else if(n.win==e)return"delete"==t?(te.splice(i,1),!0):r
return"deleteAll"==t&&(te.length=0),null}function w(e,n){for(var r,i=F(n[0].startContainer),o=G(i).createControlRange(),A=0,a=n.length;a>A;++A){r=d(n[A])
try{o.add(r)}catch(s){throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}o.select(),p(e)}function B(e,t){if(e.win.document!=F(t))throw new N("WRONG_DOCUMENT_ERR")}function b(t){return function(n,r){var i
this.rangeCount?(i=this.getRangeAt(0),i["set"+(t?"Start":"End")](n,r)):(i=e.createRange(this.win.document),i.setStartAndEnd(n,r)),this.setSingleRange(i,this.isBackward())}}function x(e){var t=[],n=new k(e.anchorNode,e.anchorOffset),r=new k(e.focusNode,e.focusOffset),i="function"==typeof e.getName?e.getName():"Selection"
if("undefined"!=typeof e.rangeCount)for(var o=0,A=e.rangeCount;A>o;++o)t[o]=T.inspect(e.getRangeAt(o))
return"["+i+"(Ranges: "+t.join(", ")+")(anchor: "+n.inspect()+", focus: "+r.inspect()+"]"}e.config.checkSelectionRanges=!0
var E,C,S="boolean",I="number",O=e.dom,D=e.util,_=D.isHostMethod,T=e.DomRange,R=e.WrappedRange,N=e.DOMException,k=O.DomPosition,P=e.features,Q="Control",F=O.getDocument,G=O.getBody,M=T.rangesEqual,L=_(window,"getSelection"),U=D.isHostObject(document,"selection")
P.implementsWinGetSelection=L,P.implementsDocSelection=U
var H=U&&(!L||e.config.preferTextRange)
H?(E=o,e.isSelectionValid=function(e){var t=r(e,"isSelectionValid").document,n=t.selection
return"None"!=n.type||F(n.createRange().parentElement())==t}):L?(E=i,e.isSelectionValid=function(){return!0}):t.fail("Neither document.selection or window.getSelection() detected."),e.getNativeSelection=E
var z=E(),j=e.createNativeRange(document),W=G(document),V=D.areHostProperties(z,["anchorNode","focusNode","anchorOffset","focusOffset"])
P.selectionHasAnchorAndFocus=V
var Y=_(z,"extend")
P.selectionHasExtend=Y
var q=typeof z.rangeCount==I
P.selectionHasRangeCount=q
var Z=!1,J=!0,K=Y?function(t,n){var r=T.getRangeDocument(n),i=e.createRange(r)
i.collapseToPoint(n.endContainer,n.endOffset),t.addRange(l(i)),t.extend(n.startContainer,n.startOffset)}:null
D.areHostMethods(z,["addRange","getRangeAt","removeAllRanges"])&&typeof z.rangeCount==I&&P.implementsDomRange&&!function(){var t=window.getSelection()
if(t){for(var n=t.rangeCount,r=n>1,i=[],o=A(t),a=0;n>a;++a)i[a]=t.getRangeAt(a)
var s=G(document),c=s.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","div"))
c.contentEditable="false"
var l=c.appendChild(document.createTextNode("   ")),u=document.createRange()
if(u.setStart(l,1),u.collapse(!0),t.addRange(u),J=1==t.rangeCount,t.removeAllRanges(),!r){var d=u.cloneRange()
u.setStart(l,0),d.setEnd(l,3),d.setStart(l,2),t.addRange(u),t.addRange(d),Z=2==t.rangeCount,d.detach()}for(s.removeChild(c),t.removeAllRanges(),u.detach(),a=0;n>a;++a)0==a&&o?K?K(t,i[a]):(e.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because browser does not support Selection.extend"),t.addRange(i[a])):t.addRange(i[a])}}(),P.selectionSupportsMultipleRanges=Z,P.collapsedNonEditableSelectionsSupported=J
var X,$=!1
W&&_(W,"createControlRange")&&(X=W.createControlRange(),D.areHostProperties(X,["item","add"])&&($=!0)),P.implementsControlRange=$,C=V?function(e){return e.anchorNode===e.focusNode&&e.anchorOffset===e.focusOffset}:function(e){return e.rangeCount?e.getRangeAt(e.rangeCount-1).collapsed:!1}
var ee
_(z,"getRangeAt")?ee=function(e,t){try{return e.getRangeAt(t)}catch(n){return null}}:V&&(ee=function(t){var n=F(t.anchorNode),r=e.createRange(n)
return r.setStartAndEnd(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),r.collapsed!==this.isCollapsed&&r.setStartAndEnd(t.focusNode,t.focusOffset,t.anchorNode,t.anchorOffset),r}),m.prototype=e.selectionPrototype
var te=[],ne=function(e){if(e&&e instanceof m)return e.refresh(),e
e=r(e,"getNativeSelection")
var t=y(e),n=E(e),i=U?o(e):null
return t?(t.nativeSelection=n,t.docSelection=i,t.refresh()):(t=new m(n,i,e),te.push({win:e,selection:t})),t}
e.getSelection=ne,e.getIframeSelection=function(n){return t.deprecationNotice("getIframeSelection()","getSelection(iframeEl)"),e.getSelection(O.getIframeWindow(n))}
var re=m.prototype
if(!H&&V&&D.areHostMethods(z,["removeAllRanges","addRange"])){re.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),c(this)}
var ie=function(e,t){K(e.nativeSelection,t),e.refresh()}
q?re.addRange=function(t,r){if($&&U&&this.docSelection.type==Q)g(this,t)
else if(n(r)&&Y)ie(this,t)
else{var i
if(Z?i=this.rangeCount:(this.removeAllRanges(),i=0),this.nativeSelection.addRange(l(t).cloneRange()),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==i+1){if(e.config.checkSelectionRanges){var o=ee(this.nativeSelection,this.rangeCount-1)
o&&!M(o,t)&&(t=new R(o))}this._ranges[this.rangeCount-1]=t,a(this,t,ae(this.nativeSelection)),this.isCollapsed=C(this)}else this.refresh()}}:re.addRange=function(e,t){n(t)&&Y?ie(this,e):(this.nativeSelection.addRange(l(e)),this.refresh())},re.setRanges=function(e){if($&&e.length>1)w(this,e)
else{this.removeAllRanges()
for(var t=0,n=e.length;n>t;++t)this.addRange(e[t])}}}else{if(!(_(z,"empty")&&_(j,"select")&&$&&H))return t.fail("No means of selecting a Range or TextRange was found"),!1
re.removeAllRanges=function(){try{if(this.docSelection.empty(),"None"!=this.docSelection.type){var e
if(this.anchorNode)e=F(this.anchorNode)
else if(this.docSelection.type==Q){var t=this.docSelection.createRange()
t.length&&(e=F(t.item(0)))}if(e){var n=G(e).createTextRange()
n.select(),this.docSelection.empty()}}}catch(r){}c(this)},re.addRange=function(t){this.docSelection.type==Q?g(this,t):(e.WrappedTextRange.rangeToTextRange(t).select(),this._ranges[0]=t,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,a(this,t,!1))},re.setRanges=function(e){this.removeAllRanges()
var t=e.length
t>1?w(this,e):t&&this.addRange(e[0])}}re.getRangeAt=function(e){if(0>e||e>=this.rangeCount)throw new N("INDEX_SIZE_ERR")
return this._ranges[e].cloneRange()}
var oe
if(H)oe=function(t){var n
e.isSelectionValid(t.win)?n=t.docSelection.createRange():(n=G(t.win.document).createTextRange(),n.collapse(!0)),t.docSelection.type==Q?p(t):f(n)?h(t,n):c(t)}
else if(_(z,"getRangeAt")&&typeof z.rangeCount==I)oe=function(t){if($&&U&&t.docSelection.type==Q)p(t)
else if(t._ranges.length=t.rangeCount=t.nativeSelection.rangeCount,t.rangeCount){for(var n=0,r=t.rangeCount;r>n;++n)t._ranges[n]=new e.WrappedRange(t.nativeSelection.getRangeAt(n))
a(t,t._ranges[t.rangeCount-1],ae(t.nativeSelection)),t.isCollapsed=C(t)}else c(t)}
else{if(!V||typeof z.isCollapsed!=S||typeof j.collapsed!=S||!P.implementsDomRange)return t.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1
oe=function(e){var t,n=e.nativeSelection
n.anchorNode?(t=ee(n,0),e._ranges=[t],e.rangeCount=1,s(e),e.isCollapsed=C(e)):c(e)}}re.refresh=function(e){var t=e?this._ranges.slice(0):null,n=this.anchorNode,r=this.anchorOffset
if(oe(this),e){var i=t.length
if(i!=this._ranges.length)return!0
if(this.anchorNode!=n||this.anchorOffset!=r)return!0
for(;i--;)if(!M(t[i],this._ranges[i]))return!0
return!1}}
var Ae=function(e,t){var n=e.getAllRanges()
e.removeAllRanges()
for(var r=0,i=n.length;i>r;++r)M(t,n[r])||e.addRange(n[r])
e.rangeCount||c(e)}
$?re.removeRange=function(e){if(this.docSelection.type==Q){for(var t,n=this.docSelection.createRange(),r=d(e),i=F(n.item(0)),o=G(i).createControlRange(),A=!1,a=0,s=n.length;s>a;++a)t=n.item(a),t!==r||A?o.add(n.item(a)):A=!0
o.select(),p(this)}else Ae(this,e)}:re.removeRange=function(e){Ae(this,e)}
var ae
!H&&V&&P.implementsDomRange?(ae=A,re.isBackward=function(){return ae(this)}):ae=re.isBackward=function(){return!1},re.isBackwards=re.isBackward,re.toString=function(){for(var e=[],t=0,n=this.rangeCount;n>t;++t)e[t]=""+this._ranges[t]
return e.join("")},re.collapse=function(t,n){B(this,t)
var r=e.createRange(t)
r.collapseToPoint(t,n),this.setSingleRange(r),this.isCollapsed=!0},re.collapseToStart=function(){if(!this.rangeCount)throw new N("INVALID_STATE_ERR")
var e=this._ranges[0]
this.collapse(e.startContainer,e.startOffset)},re.collapseToEnd=function(){if(!this.rangeCount)throw new N("INVALID_STATE_ERR")
var e=this._ranges[this.rangeCount-1]
this.collapse(e.endContainer,e.endOffset)},re.selectAllChildren=function(t){B(this,t)
var n=e.createRange(t)
n.selectNodeContents(t),this.setSingleRange(n)},re.deleteFromDocument=function(){if($&&U&&this.docSelection.type==Q){for(var e,t=this.docSelection.createRange();t.length;)e=t.item(0),t.remove(e),e.parentNode.removeChild(e)
this.refresh()}else if(this.rangeCount){var n=this.getAllRanges()
if(n.length){this.removeAllRanges()
for(var r=0,i=n.length;i>r;++r)n[r].deleteContents()
this.addRange(n[i-1])}}},re.eachRange=function(e,t){for(var n=0,r=this._ranges.length;r>n;++n)if(e(this.getRangeAt(n)))return t},re.getAllRanges=function(){var e=[]
return this.eachRange(function(t){e.push(t)}),e},re.setSingleRange=function(e,t){this.removeAllRanges(),this.addRange(e,t)},re.callMethodOnEachRange=function(e,t){var n=[]
return this.eachRange(function(r){n.push(r[e].apply(r,t))}),n},re.setStart=b(!0),re.setEnd=b(!1),e.rangePrototype.select=function(e){ne(this.getDocument()).setSingleRange(this,e)},re.changeEachRange=function(e){var t=[],n=this.isBackward()
this.eachRange(function(n){e(n),t.push(n)}),this.removeAllRanges(),n&&1==t.length?this.addRange(t[0],"backward"):this.setRanges(t)},re.containsNode=function(e,t){return this.eachRange(function(n){return n.containsNode(e,t)},!0)},re.getBookmark=function(e){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[e])}},re.moveToBookmark=function(t){for(var n,r,i=[],o=0;n=t.rangeBookmarks[o++];)r=e.createRange(this.win),r.moveToBookmark(n),i.push(r)
t.backward?this.setSingleRange(i[0],"backward"):this.setRanges(i)},re.toHtml=function(){return this.callMethodOnEachRange("toHtml").join("")},re.getName=function(){return"WrappedSelection"},re.inspect=function(){return x(this)},re.detach=function(){y(this.win,"delete"),v(this)},m.detachAll=function(){y(null,"deleteAll")},m.inspect=x,m.isDirectionBackward=n,e.Selection=m,e.selectionPrototype=re,e.addCreateMissingNativeApiListener(function(e){"undefined"==typeof e.getSelection&&(e.getSelection=function(){return ne(e)}),e=null})}),define("rangy-core",["domReady"],function(e){return function(){var t,n
return n=function(e){var t=this.rangy
return e(function(){t.init()}),this.rangy},t=n.apply(e,arguments),t||e.rangy}}(this)),rangy.createModule("Highlighter",["ClassApplier"],function(e,t){function n(e,t){return e.characterRange.start-t.characterRange.start}function r(e,t){this.type=e,this.converterCreator=t}function i(e,t){h[e]=new r(e,t)}function o(e){var t=h[e]
if(t instanceof r)return t.create()
throw new Error("Highlighter type '"+e+"' is not valid")}function A(e,t){this.start=e,this.end=t}function a(e,t,n,r,i,o){i?(this.id=i,f=Math.max(f,i+1)):this.id=f++,this.characterRange=t,this.doc=e,this.classApplier=n,this.converter=r,this.containerElementId=o||null,this.applied=!1}function s(e,t){t=t||"textContent",this.doc=e||document,this.classAppliers={},this.highlights=[],this.converter=o(t)}var c=e.dom,l=c.arrayContains,u=c.getBody,d=[].forEach?function(e,t){e.forEach(t)}:function(e,t){for(var n=0,r=e.length;r>n;++n)t(e[n])},f=1,h={}
r.prototype.create=function(){var e=this.converterCreator()
return e.type=this.type,e},e.registerHighlighterType=i,A.prototype={intersects:function(e){return this.start<e.end&&this.end>e.start},union:function(e){return new A(Math.min(this.start,e.start),Math.max(this.end,e.end))},intersection:function(e){return new A(Math.max(this.start,e.start),Math.min(this.end,e.end))},toString:function(){return"[CharacterRange("+this.start+", "+this.end+")]"}},A.fromCharacterRange=function(e){return new A(e.start,e.end)}
var p={rangeToCharacterRange:function(e,t){var n=e.getBookmark(t)
return new A(n.start,n.end)},characterRangeToRange:function(t,n,r){var i=e.createRange(t)
return i.moveToBookmark({start:n.start,end:n.end,containerNode:r}),i},serializeSelection:function(e,t){for(var n=e.getAllRanges(),r=n.length,i=[],o=1==r&&e.isBackward(),A=0,a=n.length;a>A;++A)i[A]={characterRange:this.rangeToCharacterRange(n[A],t),backward:o}
return i},restoreSelection:function(e,t,n){e.removeAllRanges()
for(var r,i,o,A=e.win.document,a=0,s=t.length;s>a;++a)i=t[a],o=i.characterRange,r=this.characterRangeToRange(A,i.characterRange,n),e.addRange(r,i.backward)}}
i("textContent",function(){return p}),i("TextRange",function(){var t
return function(){if(!t){var n=e.modules.TextRange
if(!n)throw new Error("TextRange module is missing.")
if(!n.supported)throw new Error("TextRange module is present but not supported.")
t={rangeToCharacterRange:function(e,t){return A.fromCharacterRange(e.toCharacterRange(t))},characterRangeToRange:function(t,n,r){var i=e.createRange(t)
return i.selectCharacters(r,n.start,n.end),i},serializeSelection:function(e,t){return e.saveCharacterRanges(t)},restoreSelection:function(e,t,n){e.restoreCharacterRanges(n,t)}}}return t}}()),a.prototype={getContainerElement:function(){return this.containerElementId?this.doc.getElementById(this.containerElementId):u(this.doc)},getRange:function(){return this.converter.characterRangeToRange(this.doc,this.characterRange,this.getContainerElement())},fromRange:function(e){this.characterRange=this.converter.rangeToCharacterRange(e,this.getContainerElement())},getText:function(){return this.getRange().toString()},containsElement:function(e){return this.getRange().containsNodeContents(e.firstChild)},unapply:function(){this.classApplier.undoToRange(this.getRange()),this.applied=!1},apply:function(){this.classApplier.applyToRange(this.getRange()),this.applied=!0},getHighlightElements:function(){return this.classApplier.getElementsWithClassIntersectingRange(this.getRange())},toString:function(){return"[Highlight(ID: "+this.id+", class: "+this.classApplier.cssClass+", character range: "+this.characterRange.start+" - "+this.characterRange.end+")]"}},s.prototype={addClassApplier:function(e){this.classAppliers[e.cssClass]=e},getHighlightForElement:function(e){for(var t=this.highlights,n=0,r=t.length;r>n;++n)if(t[n].containsElement(e))return t[n]
return null},removeHighlights:function(e){for(var t,n=0,r=this.highlights.length;r>n;++n)t=this.highlights[n],l(e,t)&&(t.unapply(),this.highlights.splice(n--,1))},removeAllHighlights:function(){this.removeHighlights(this.highlights)},getIntersectingHighlights:function(e){var t=[],n=this.highlights
this.converter
return d(e,function(e){d(n,function(n){e.intersectsRange(n.getRange())&&!l(t,n)&&t.push(n)})}),t},highlightCharacterRanges:function(t,n,r){var i,o,s,c=this.highlights,l=this.converter,u=this.doc,f=[],h=this.classAppliers[t]
r=r||null
var p,g,m
r&&(p=this.doc.getElementById(r),p&&(g=e.createRange(this.doc),g.selectNodeContents(p),m=new A(0,g.toString().length),g.detach()))
var v,y,w
for(i=0,o=n.length;o>i;++i){for(v=n[i],w=!1,m&&(v=v.intersection(m)),s=0;s<c.length;++s)r==c[s].containerElementId&&(y=c[s].characterRange,y.intersects(v)&&(f.push(c[s]),c[s]=new a(u,y.union(v),h,l,null,r)))
w||c.push(new a(u,v,h,l,null,r))}d(f,function(e){e.unapply()})
var B=[]
return d(c,function(e){e.applied||(e.apply(),B.push(e))}),B},highlightRanges:function(t,n,r){var i,o=[],A=this.converter,a=r?r.id:null
return r&&(i=e.createRange(r),i.selectNodeContents(r)),d(n,function(e){var t=r?i.intersection(e):e
o.push(A.rangeToCharacterRange(t,r||u(e.getDocument())))}),this.highlightCharacterRanges(o,n,a)},highlightSelection:function(t,n,r){var i=this.converter
n=n||e.getSelection()
var o=this.classAppliers[t],a=n.win.document,s=r?a.getElementById(r):u(a)
if(!o)throw new Error("No class applier found for class '"+t+"'")
var c=i.serializeSelection(n,s),l=[]
d(c,function(e){l.push(A.fromCharacterRange(e.characterRange))})
var f=this.highlightCharacterRanges(t,l,r)
return i.restoreSelection(n,c,s),f},unhighlightSelection:function(t){t=t||e.getSelection()
var n=this.getIntersectingHighlights(t.getAllRanges())
return this.removeHighlights(n),t.removeAllRanges(),n},getHighlightsInSelection:function(t){return t=t||e.getSelection(),this.getIntersectingHighlights(t.getAllRanges())},selectionOverlapsHighlight:function(e){return this.getHighlightsInSelection(e).length>0},serialize:function(e){var t=this.highlights
t.sort(n)
var r=["type:"+this.converter.type]
return d(t,function(t){var n=t.characterRange,i=[n.start,n.end,t.id,t.classApplier.cssClass,t.containerElementId]
e&&e.serializeHighlightText&&i.push(t.getText()),r.push(i.join("$"))}),r.join("|")},deserialize:function(e){var t,n,r,i=e.split("|"),s=[],c=i[0],l=!1
if(!c||!(t=/^type:(\w+)$/.exec(c)))throw new Error("Serialized highlights are invalid.")
n=t[1],n!=this.converter.type&&(r=o(n),l=!0),i.shift()
for(var d,f,h,p,g,m,v=i.length;v-- >0;)m=i[v].split("$"),h=new A(+m[0],+m[1]),p=m[4]||null,g=p?this.doc.getElementById(p):u(this.doc),l&&(h=this.converter.rangeToCharacterRange(r.characterRangeToRange(this.doc,h,g),g)),d=this.classAppliers[m[3]],f=new a(this.doc,h,d,this.converter,parseInt(m[2]),p),f.apply(),s.push(f)
this.highlights=s}},e.Highlighter=s,e.createHighlighter=function(e,t){return new s(e,t)}}),define("rangy-highlighter",["rangy-core"],function(e){return function(){var t
return t||e.rangy.modules.Highlighter}}(this)),rangy.createModule("ClassApplier",["WrappedSelection"],function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(n,e[n])===!1)return!1
return!0}function r(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function i(e,t){return e.className&&new RegExp("(?:^|\\s)"+t+"(?:\\s|$)").test(e.className)}function o(e,t){e.className?i(e,t)||(e.className+=" "+t):e.className=t}function A(e){return e.split(/\s+/).sort().join(" ")}function a(e){return A(e.className)}function s(e,t){return a(e)==a(t)}function c(e,t,n,r,i){var o=e.node,A=e.offset,a=o,s=A
o==r&&A>i&&++s,o!=t||A!=n&&A!=n+1||(a=r,s+=i-n),o==t&&A>n+1&&--s,e.node=a,e.offset=s}function l(e,t,n){e.node==t&&e.offset>n&&--e.offset}function u(e,t,n,r){-1==n&&(n=t.childNodes.length)
for(var i,o=e.parentNode,A=N.getNodeIndex(e),a=0;i=r[a++];)c(i,o,A,t,n)
t.childNodes.length==n?t.appendChild(e):t.insertBefore(e,t.childNodes[n])}function d(e,t){for(var n,r=e.parentNode,i=N.getNodeIndex(e),o=0;n=t[o++];)l(n,r,i)
e.parentNode.removeChild(e)}function f(e,t,n,r,i){for(var o,A=[];o=e.firstChild;)u(o,t,n++,i),A.push(o)
return r&&e.parentNode.removeChild(e),A}function h(e,t){return f(e,e.parentNode,N.getNodeIndex(e),!0,t)}function p(e,t){var n=e.cloneRange()
n.selectNodeContents(t)
var r=n.intersection(e),i=r?r.toString():""
return n.detach(),""!=i}function g(e){for(var t,n=e.getNodes([3]),r=0;(t=n[r])&&!p(e,t);)++r
for(var i=n.length-1;(t=n[i])&&!p(e,t);)--i
return n.slice(r,i+1)}function m(e,t){if(e.attributes.length!=t.attributes.length)return!1
for(var n,r,i,o=0,A=e.attributes.length;A>o;++o)if(n=e.attributes[o],i=n.name,"class"!=i){if(r=t.attributes.getNamedItem(i),null===n!=(null===r))return!1
if(n.specified!=r.specified)return!1
if(n.specified&&n.nodeValue!==r.nodeValue)return!1}return!0}function v(e,t){for(var n,r=0,i=e.attributes.length;i>r;++r)if(n=e.attributes[r].name,(!t||!P(t,n))&&e.attributes[r].specified&&"class"!=n)return!0
return!1}function y(e,t){return n(t,function(t,n){if("object"==typeof n){if(!y(e[t],n))return!1}else if(e[t]!==n)return!1}),!0}function w(e){var t
return e&&1==e.nodeType&&((t=e.parentNode)&&9==t.nodeType&&"on"==t.designMode||M(e)&&!M(e.parentNode))}function B(e){return(M(e)||1!=e.nodeType&&M(e.parentNode))&&!w(e)}function b(e){return e&&1==e.nodeType&&!L.test(G(e,"display"))}function x(e){if(0==e.data.length)return!0
if(U.test(e.data))return!1
var t=G(e.parentNode,"whiteSpace")
switch(t){case"pre":case"pre-wrap":case"-moz-pre-wrap":return!1
case"pre-line":if(/[\r\n]/.test(e.data))return!1}return b(e.previousSibling)||b(e.nextSibling)}function E(e){var t,n,r=[]
for(t=0;n=e[t++];)r.push(new k(n.startContainer,n.startOffset),new k(n.endContainer,n.endOffset))
return r}function C(e,t){for(var n,r,i,o=0,A=e.length;A>o;++o)n=e[o],r=t[2*o],i=t[2*o+1],n.setStartAndEnd(r.node,r.offset,i.node,i.offset)}function S(e,t){return N.isCharacterDataNode(e)?0==t?!!e.previousSibling:t==e.length?!!e.nextSibling:!0:t>0&&t<e.childNodes.length}function I(e,n,r,i){var o,A,a=0==r
if(N.isAncestorOf(n,e))return e
if(N.isCharacterDataNode(n)){var s=N.getNodeIndex(n)
if(0==r)r=s
else{if(r!=n.length)throw t.createError("splitNodeAt() should not be called with offset in the middle of a data node ("+r+" in "+n.data)
r=s+1}n=n.parentNode}if(S(n,r)){o=n.cloneNode(!1),A=n.parentNode,o.id&&o.removeAttribute("id")
for(var c,l=0;c=n.childNodes[r];)u(c,o,l++,i)
return u(o,A,N.getNodeIndex(n)+1,i),n==e?o:I(e,A,N.getNodeIndex(o),i)}if(e!=n){o=n.parentNode
var d=N.getNodeIndex(n)
return a||d++,I(e,o,d,i)}return e}function O(e,t){return e.tagName==t.tagName&&s(e,t)&&m(e,t)&&"inline"==G(e,"display")&&"inline"==G(t,"display")}function D(e){var t=e?"nextSibling":"previousSibling"
return function(n,r){var i=n.parentNode,o=n[t]
if(o){if(o&&3==o.nodeType)return o}else if(r&&(o=i[t],o&&1==o.nodeType&&O(i,o))){var A=o[e?"firstChild":"lastChild"]
if(A&&3==A.nodeType)return A}return null}}function _(e){this.isElementMerge=1==e.nodeType,this.textNodes=[]
var t=this.isElementMerge?e.lastChild:e
t&&(this.textNodes[0]=t)}function T(e,t,i){var o,A,a,s,c=this
c.cssClass=e
var l=null,u={}
if("object"==typeof t&&null!==t){for(i=t.tagNames,l=t.elementProperties,u=t.elementAttributes,A=0;s=j[A++];)t.hasOwnProperty(s)&&(c[s]=t[s])
o=t.normalize}else o=t
c.normalize="undefined"==typeof o?!0:o,c.attrExceptions=[]
var d=document.createElementNS("http://www.w3.org/1999/xhtml",c.elementTagName)
c.elementProperties=c.copyPropertiesToElement(l,d,!0),n(u,function(e){c.attrExceptions.push(e)}),c.elementAttributes=u,c.elementSortedClassName=c.elementProperties.hasOwnProperty("className")?c.elementProperties.className:e,c.applyToAnyTagName=!1
var f=typeof i
if("string"==f)"*"==i?c.applyToAnyTagName=!0:c.tagNames=r(i.toLowerCase()).split(/\s*,\s*/)
else if("object"==f&&"number"==typeof i.length)for(c.tagNames=[],A=0,a=i.length;a>A;++A)"*"==i[A]?c.applyToAnyTagName=!0:c.tagNames.push(i[A].toLowerCase())
else c.tagNames=[c.elementTagName]}function R(e,t,n){return new T(e,t,n)}var N=e.dom,k=N.DomPosition,P=N.arrayContains,Q="span",F=function(){function e(e,t,n){return t&&n?" ":""}return function(t,n){t.className&&(t.className=t.className.replace(new RegExp("(^|\\s)"+n+"(\\s|$)"),e))}}(),G=N.getComputedStyleProperty,M=function(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","div")
return"boolean"==typeof e.isContentEditable?function(e){return e&&1==e.nodeType&&e.isContentEditable}:function(e){return e&&1==e.nodeType&&"false"!=e.contentEditable?"true"==e.contentEditable||M(e.parentNode):!1}}(),L=/^inline(-block|-table)?$/i,U=/[^\r\n\t\f \u200B]/,H=D(!1),z=D(!0)
_.prototype={doMerge:function(e){var t=this.textNodes,n=t[0]
if(t.length>1){for(var r,i,o,A,a=[],s=0,c=0,l=t.length;l>c;++c){if(r=t[c],i=r.parentNode,c>0&&(i.removeChild(r),i.hasChildNodes()||i.parentNode.removeChild(i),e))for(o=0;A=e[o++];)A.node==r&&(A.node=n,A.offset+=s)
a[c]=r.data,s+=r.data.length}n.data=a.join("")}return n.data},getLength:function(){for(var e=this.textNodes.length,t=0;e--;)t+=this.textNodes[e].length
return t},toString:function(){for(var e=[],t=0,n=this.textNodes.length;n>t;++t)e[t]="'"+this.textNodes[t].data+"'"
return"[Merge("+e.join(",")+")]"}}
var j=["elementTagName","ignoreWhiteSpace","applyToEditableOnly","useExistingElements","removeEmptyElements","onElementCreate"],W={}
T.prototype={elementTagName:Q,elementProperties:{},elementAttributes:{},ignoreWhiteSpace:!0,applyToEditableOnly:!1,useExistingElements:!0,removeEmptyElements:!0,onElementCreate:null,copyPropertiesToElement:function(e,t,n){var r,i,a,s,c,l,u={}
for(var d in e)if(e.hasOwnProperty(d))if(s=e[d],c=t[d],"className"==d)o(t,s),o(t,this.cssClass),t[d]=A(t[d]),n&&(u[d]=t[d])
else if("style"==d){i=c,n&&(u[d]=a={})
for(r in e[d])i[r]=s[r],n&&(a[r]=i[r])
this.attrExceptions.push(d)}else t[d]=s,n&&(u[d]=t[d],l=W.hasOwnProperty(d)?W[d]:d,this.attrExceptions.push(l))
return n?u:""},copyAttributesToElement:function(e,t){for(var n in e)e.hasOwnProperty(n)&&t.setAttribute(n,e[n])},hasClass:function(e){return 1==e.nodeType&&P(this.tagNames,e.tagName.toLowerCase())&&i(e,this.cssClass)},getSelfOrAncestorWithClass:function(e){for(;e;){if(this.hasClass(e))return e
e=e.parentNode}return null},isModifiable:function(e){return!this.applyToEditableOnly||B(e)},isIgnorableWhiteSpaceNode:function(e){return this.ignoreWhiteSpace&&e&&3==e.nodeType&&x(e)},postApply:function(e,t,n,r){for(var i,o,A,a=e[0],s=e[e.length-1],c=[],l=a,u=s,d=0,f=s.length,h=0,p=e.length;p>h;++h)o=e[h],A=H(o,!r),A?(i||(i=new _(A),c.push(i)),i.textNodes.push(o),o===a&&(l=i.textNodes[0],d=l.length),o===s&&(u=i.textNodes[0],f=i.getLength())):i=null
var g=z(s,!r)
if(g&&(i||(i=new _(s),c.push(i)),i.textNodes.push(g)),c.length){for(h=0,p=c.length;p>h;++h)c[h].doMerge(n)
t.setStartAndEnd(l,d,u,f)}},createContainer:function(e){var t=e.createElementNS("http://www.w3.org/1999/xhtml",this.elementTagName)
return this.copyPropertiesToElement(this.elementProperties,t,!1),this.copyAttributesToElement(this.elementAttributes,t),o(t,this.cssClass),this.onElementCreate&&this.onElementCreate(t,this),t},applyToTextNode:function(e,t){var n=e.parentNode
if(1==n.childNodes.length&&this.useExistingElements&&P(this.tagNames,n.tagName.toLowerCase())&&y(n,this.elementProperties))o(n,this.cssClass)
else{var r=this.createContainer(N.getDocument(e))
e.parentNode.insertBefore(r,e),r.appendChild(e)}},isRemovable:function(e){return e.tagName.toLowerCase()==this.elementTagName&&a(e)==this.elementSortedClassName&&y(e,this.elementProperties)&&!v(e,this.attrExceptions)&&this.isModifiable(e)},isEmptyContainer:function(e){var t=e.childNodes.length
return 1==e.nodeType&&this.isRemovable(e)&&(0==t||1==t&&this.isEmptyContainer(e.firstChild))},removeEmptyContainers:function(e){for(var t,n=this,r=e.getNodes([1],function(e){return n.isEmptyContainer(e)}),i=[e],o=E(i),A=0;t=r[A++];)d(t,o)
C(i,o)},undoToTextNode:function(e,t,n,r){if(!t.containsNode(n)){var i=t.cloneRange()
i.selectNode(n),i.isPointInRange(t.endContainer,t.endOffset)&&(I(n,t.endContainer,t.endOffset,r),t.setEndAfter(n)),i.isPointInRange(t.startContainer,t.startOffset)&&(n=I(n,t.startContainer,t.startOffset,r))}this.isRemovable(n)?h(n,r):F(n,this.cssClass)},applyToRange:function(e,t){t=t||[]
var n=E(t||[])
e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e)
var r=g(e)
if(r.length){for(var i,o=0;i=r[o++];)this.isIgnorableWhiteSpaceNode(i)||this.getSelfOrAncestorWithClass(i)||!this.isModifiable(i)||this.applyToTextNode(i,n)
i=r[r.length-1],e.setStartAndEnd(r[0],0,i,i.length),this.normalize&&this.postApply(r,e,n,!1),C(t,n)}},applyToRanges:function(e){for(var t=e.length;t--;)this.applyToRange(e[t],e)
return e},applyToSelection:function(t){var n=e.getSelection(t)
n.setRanges(this.applyToRanges(n.getAllRanges()))},undoToRange:function(e,t){t=t||[]
var n=E(t)
e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e,n)
var r,i,o=g(e),A=o[o.length-1]
if(o.length){for(var a=0,s=o.length;s>a;++a)r=o[a],i=this.getSelfOrAncestorWithClass(r),i&&this.isModifiable(r)&&this.undoToTextNode(r,e,i,n),e.setStartAndEnd(o[0],0,A,A.length)
this.normalize&&this.postApply(o,e,n,!0),C(t,n)}},undoToRanges:function(e){for(var t=e.length;t--;)this.undoToRange(e[t],e)
return e},undoToSelection:function(t){var n=e.getSelection(t),r=e.getSelection(t).getAllRanges()
this.undoToRanges(r),n.setRanges(r)},isAppliedToRange:function(e){if(e.collapsed||""==e.toString())return!!this.getSelfOrAncestorWithClass(e.commonAncestorContainer)
var t=e.getNodes([3])
if(t.length)for(var n,r=0;n=t[r++];)if(!this.isIgnorableWhiteSpaceNode(n)&&p(e,n)&&this.isModifiable(n)&&!this.getSelfOrAncestorWithClass(n))return!1
return!0},isAppliedToRanges:function(e){var t=e.length
if(0==t)return!1
for(;t--;)if(!this.isAppliedToRange(e[t]))return!1
return!0},isAppliedToSelection:function(t){var n=e.getSelection(t)
return this.isAppliedToRanges(n.getAllRanges())},toggleRange:function(e){this.isAppliedToRange(e)?this.undoToRange(e):this.applyToRange(e)},toggleSelection:function(e){this.isAppliedToSelection(e)?this.undoToSelection(e):this.applyToSelection(e)},getElementsWithClassIntersectingRange:function(e){var t=[],n=this
return e.getNodes([3],function(e){var r=n.getSelfOrAncestorWithClass(e)
r&&!P(t,r)&&t.push(r)}),t},detach:function(){}},T.util={hasClass:i,addClass:o,removeClass:F,hasSameClasses:s,replaceWithOwnChildren:h,elementsHaveSameNonClassAttributes:m,elementHasNonClassAttributes:v,splitNodeAt:I,isEditableElement:M,isEditingHost:w,isEditable:B},e.CssClassApplier=e.ClassApplier=T,e.createCssClassApplier=e.createClassApplier=R}),define("rangy-cssclassapplier",["rangy-core"],function(e){return function(){var t
return t||e.rangy.modules.ClassApplier}}(this)),rangy.createModule("TextRange",["WrappedSelection"],function(e,t){function n(e,t){function n(t,n,r){for(var i=e.slice(t,n),o={isWord:r,chars:i,toString:function(){return i.join("")}},A=0,s=i.length;s>A;++A)i[A].token=o
a.push(o)}for(var r,i,o,A=e.join(""),a=[],s=0;r=t.wordRegex.exec(A);){if(i=r.index,o=i+r[0].length,i>s&&n(s,i,!1),t.includeTrailingSpace)for(;Z.test(e[o]);)++o
n(i,o,!0),s=o}return s<e.length&&n(s,e.length,!1),a}function r(e,t){if(e){var n={}
return j(n,t),j(n,e),n}return t}function i(e){var t,n
return e?(t=e.language||J,n={},j(n,oe[t]||oe[J]),j(n,e),n):oe[J]}function o(e){return r(e,re)}function A(e){return r(e,ie)}function a(e,t){var n=le(e,"display",t),r=e.tagName.toLowerCase()
return"block"==n&&ne&&ue.hasOwnProperty(r)?ue[r]:n}function s(e){for(var t=f(e),n=0,r=t.length;r>n;++n)if(1==t[n].nodeType&&"none"==a(t[n]))return!0
return!1}function c(e){var t
return 3==e.nodeType&&(t=e.parentNode)&&"hidden"==le(t,"visibility")}function l(e){return e&&(1==e.nodeType&&!/^(inline(-block|-table)?|none)$/.test(a(e))||9==e.nodeType||11==e.nodeType)}function u(e){return H.isCharacterDataNode(e)||!/^(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)$/i.test(e.nodeName)}function d(e){for(var t=[];e.parentNode;)t.unshift(e.parentNode),e=e.parentNode
return t}function f(e){return d(e).concat([e])}function h(e){for(;e&&!e.nextSibling;)e=e.parentNode
return e?e.nextSibling:null}function p(e,t){return!t&&e.hasChildNodes()?e.firstChild:h(e)}function g(e){var t=e.previousSibling
if(t){for(e=t;e.hasChildNodes();)e=e.lastChild
return e}var n=e.parentNode
return n&&1==n.nodeType?n:null}function m(e){if(!e||3!=e.nodeType)return!1
var t=e.data
if(""===t)return!0
var n=e.parentNode
if(!n||1!=n.nodeType)return!1
var r=le(e.parentNode,"whiteSpace")
return/^[\t\n\r ]+$/.test(t)&&/^(normal|nowrap)$/.test(r)||/^[\t\r ]+$/.test(t)&&"pre-line"==r}function v(e){if(""===e.data)return!0
if(!m(e))return!1
var t=e.parentNode
return t?!!s(e):!0}function y(e){var t=e.nodeType
return 7==t||8==t||s(e)||/^(script|style)$/i.test(e.nodeName)||c(e)||v(e)}function w(e,t){var n=e.nodeType
return 7==n||8==n||1==n&&"none"==a(e,t)}function B(){this.store={}}function b(e,t,n){return function(r){var i=this.cache
if(i.hasOwnProperty(e))return de++,i[e]
fe++
var o=t.call(this,n?this[n]:this,r)
return i[e]=o,o}}function x(e,t){this.node=e,this.session=t,this.cache=new B,this.positions=new B}function E(e,t){this.offset=t,this.nodeWrapper=e,this.node=e.node,this.session=e.session,this.cache=new B}function C(){return"[Position("+H.inspectNode(this.node)+":"+this.offset+")]"}function S(){return O(),Ce=new Se}function I(){return Ce||S()}function O(){Ce&&Ce.detach(),Ce=null}function D(e,n,r,i){function o(){var e=null
return n?(e=a,s||(a=a.previousVisible(),s=!a||r&&a.equals(r))):s||(e=a=a.nextVisible(),s=!a||r&&a.equals(r)),s&&(a=null),e}r&&(n?y(r.node)&&(r=e.previousVisible()):y(r.node)&&(r=r.nextVisible()))
var A,a=e,s=!1,c=!1
return{next:function(){if(c)return c=!1,A
for(var e,t;e=o();)if(t=e.getCharacter(i))return A=e,e
return null},rewind:function(){if(!A)throw t.createError("createCharacterIterator: cannot rewind. Only one position can be rewound.")
c=!0},dispose:function(){e=r=null}}}function _(e,t,n){function r(e){for(var t,n,r=[],A=e?i:o,a=!1,s=!1;t=A.next();){if(n=t.character,q.test(n))s&&(s=!1,a=!0)
else{if(a){A.rewind()
break}s=!0}r.push(t)}return r}var i=D(e,!1,null,t),o=D(e,!0,null,t),A=n.tokenizer,a=r(!0),s=r(!1).reverse(),c=A(s.concat(a),n),l=a.length?c.slice(Ie(c,a[0].token)):[],u=s.length?c.slice(0,Ie(c,s.pop().token)+1):[]
return{nextEndToken:function(){for(var e,t;1==l.length&&!(e=l[0]).isWord&&(t=r(!0)).length>0;)l=A(e.chars.concat(t),n)
return l.shift()},previousStartToken:function(){for(var e,t;1==u.length&&!(e=u[0]).isWord&&(t=r(!1)).length>0;)u=A(t.reverse().concat(e.chars),n)
return u.pop()},dispose:function(){i.dispose(),o.dispose(),l=u=null}}}function T(e,t,n,r,i){var o,A,a,s,c=0,l=e,u=Math.abs(n)
if(0!==n){var d=0>n
switch(t){case L:for(A=D(e,d,null,r);(o=A.next())&&u>c;)++c,l=o
a=o,A.dispose()
break
case U:for(var f=_(e,r,i),h=d?f.previousStartToken:f.nextEndToken;(s=h())&&u>c;)s.isWord&&(++c,l=d?s.chars[0]:s.chars[s.chars.length-1])
break
default:throw new Error("movePositionBy: unit '"+t+"' not implemented")}d?(l=l.previousVisible(),c=-c):l&&l.isLeadingSpace&&(t==U&&(A=D(e,!1,null,r),a=A.next(),A.dispose()),a&&(l=a.previousVisible()))}return{position:l,unitsMoved:c}}function R(e,t,n,r){var i=e.getRangeBoundaryPosition(t,!0),o=e.getRangeBoundaryPosition(t,!1),A=r?o:i,a=r?i:o
return D(A,!!r,a,n)}function N(e,t,n){for(var r,i=[],o=R(e,t,n);r=o.next();)i.push(r)
return o.dispose(),i}function k(t,n,r){var i=e.createRange(t.node)
i.setStartAndEnd(t.node,t.offset,n.node,n.offset)
var o=!i.expand("word",r)
return i.detach(),o}function P(e,t,n,r,i){function o(e,t){var n=p[e].previousVisible(),r=p[t-1],o=!i.wholeWordsOnly||k(n,r,i.wordOptions)
return{startPos:n,endPos:r,valid:o}}for(var A,a,s,c,l,u,d=K(i.direction),f=D(e,d,e.session.getRangeBoundaryPosition(r,d),i),h="",p=[],g=null;A=f.next();)if(a=A.character,n||i.caseSensitive||(a=a.toLowerCase()),d?(p.unshift(A),h=a+h):(p.push(A),h+=a),n){if(l=t.exec(h))if(u){if(s=l.index,c=s+l[0].length,!d&&c<h.length||d&&s>0){g=o(s,c)
break}}else u=!0}else if(-1!=(s=h.indexOf(t))){g=o(s,s+t.length)
break}return u&&(g=o(s,c)),f.dispose(),g}function Q(e){return function(){var t=!!Ce,n=I(),r=[n].concat(z.toArray(arguments)),i=e.apply(this,r)
return t||O(),i}}function F(e,t){return Q(function(n,A,a,s){"undefined"==typeof a&&(a=A,A=L),s=r(s,ae)
var c=o(s.characterOptions),l=i(s.wordOptions),u=e
t&&(u=a>=0,this.collapse(!u))
var d=T(n.getRangeBoundaryPosition(this,u),A,a,c,l),f=d.position
return this[u?"setStart":"setEnd"](f.node,f.offset),d.unitsMoved})}function G(e){return Q(function(t,n){n=o(n)
for(var r,i=R(t,this,n,!e),A=0;(r=i.next())&&q.test(r.character);)++A
i.dispose()
var a=A>0
return a&&this[e?"moveStart":"moveEnd"]("character",e?A:-A,{characterOptions:n}),a})}function M(e){return Q(function(t,n){var r=!1
return this.changeEachRange(function(t){r=t[e](n)||r}),r})}var L="character",U="word",H=e.dom,z=e.util,j=z.extend,W=H.getBody,V=/^[ \t\f\r\n]+$/,Y=/^[ \t\f\r]+$/,q=/^[\t-\r \u0085\u00A0\u1680\u180E\u2000-\u200B\u2028\u2029\u202F\u205F\u3000]+$/,Z=/^[\t \u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000]+$/,J="en",K=e.Selection.isDirectionBackward,X=!1,$=!1,ee=!1,te=!0
!function(){var t=document.createElementNS("http://www.w3.org/1999/xhtml","div")
t.contentEditable="true",t.innerHTML="<p>1 </p><p></p>"
var n=W(document),r=t.firstChild,i=e.getSelection()
n.appendChild(t),i.collapse(r.lastChild,2),i.setStart(r.firstChild,0),X=1==(""+i).length,t.innerHTML="1 <br>",i.collapse(t,2),i.setStart(t.firstChild,0),$=1==(""+i).length,t.innerHTML="1 <p>1</p>",i.collapse(t,2),i.setStart(t.firstChild,0),ee=1==(""+i).length,n.removeChild(t),i.removeAllRanges()}()
var ne,re={includeBlockContentTrailingSpace:!0,includeSpaceBeforeBr:!0,includeSpaceBeforeBlock:!0,includePreLineTrailingSpace:!0},ie={includeBlockContentTrailingSpace:!te,includeSpaceBeforeBr:!$,includeSpaceBeforeBlock:!ee,includePreLineTrailingSpace:!0},oe={en:{wordRegex:/[a-z0-9]+('[a-z0-9]+)*/gi,includeTrailingSpace:!1,tokenizer:n}},Ae={caseSensitive:!1,withinRange:null,wholeWordsOnly:!1,wrap:!1,direction:"forward",wordOptions:null,characterOptions:null},ae={wordOptions:null,characterOptions:null},se={wordOptions:null,characterOptions:null,trim:!1,trimStart:!0,trimEnd:!0},ce={wordOptions:null,characterOptions:null,direction:"forward"},le=H.getComputedStyleProperty
!function(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","table"),t=W(document)
t.appendChild(e),ne="block"==le(e,"display"),t.removeChild(e)}(),e.features.tableCssDisplayBlock=ne
var ue={table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell"}
B.prototype={get:function(e){return this.store.hasOwnProperty(e)?this.store[e]:null},set:function(e,t){return this.store[e]=t}}
var de=0,fe=0,he={getPosition:function(e){var t=this.positions
return t.get(e)||t.set(e,new E(this,e))},toString:function(){return"[NodeWrapper("+H.inspectNode(this.node)+")]"}}
x.prototype=he
var pe="EMPTY",ge="NON_SPACE",me="UNCOLLAPSIBLE_SPACE",ve="COLLAPSIBLE_SPACE",ye="TRAILING_SPACE_BEFORE_BLOCK",we="TRAILING_SPACE_IN_BLOCK",Be="TRAILING_SPACE_BEFORE_BR",be="PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK",xe="TRAILING_LINE_BREAK_AFTER_BR"
j(he,{isCharacterDataNode:b("isCharacterDataNode",H.isCharacterDataNode,"node"),getNodeIndex:b("nodeIndex",H.getNodeIndex,"node"),getLength:b("nodeLength",H.getNodeLength,"node"),containsPositions:b("containsPositions",u,"node"),isWhitespace:b("isWhitespace",m,"node"),isCollapsedWhitespace:b("isCollapsedWhitespace",v,"node"),getComputedDisplay:b("computedDisplay",a,"node"),isCollapsed:b("collapsed",y,"node"),isIgnored:b("ignored",w,"node"),next:b("nextPos",p,"node"),previous:b("previous",g,"node"),getTextNodeInfo:b("textNodeInfo",function(e){var t=null,n=!1,r=le(e.parentNode,"whiteSpace"),i="pre-line"==r
return i?(t=Y,n=!0):"normal"!=r&&"nowrap"!=r||(t=V,n=!0),{node:e,text:e.data,spaceRegex:t,collapseSpaces:n,preLine:i}},"node"),hasInnerText:b("hasInnerText",function(e,t){for(var n=this.session,r=n.getPosition(e.parentNode,this.getNodeIndex()+1),i=n.getPosition(e,0),o=t?r:i,A=t?i:r;o!==A;){if(o.prepopulateChar(),o.isDefinitelyNonEmpty())return!0
o=t?o.previousVisible():o.nextVisible()}return!1},"node"),isRenderedBlock:b("isRenderedBlock",function(e){for(var t=e.getElementsByTagName("br"),n=0,r=t.length;r>n;++n)if(!y(t[n]))return!0
return this.hasInnerText()},"node"),getTrailingSpace:b("trailingSpace",function(e){if("br"==e.tagName.toLowerCase())return""
switch(this.getComputedDisplay()){case"inline":for(var t=e.lastChild;t;){if(!w(t))return 1==t.nodeType?this.session.getNodeWrapper(t).getTrailingSpace():""
t=t.previousSibling}break
case"inline-block":case"inline-table":case"none":case"table-column":case"table-column-group":break
case"table-cell":return"	"
default:return this.isRenderedBlock(!0)?"\n":""}return""},"node"),getLeadingSpace:b("leadingSpace",function(e){switch(this.getComputedDisplay()){case"inline":case"inline-block":case"inline-table":case"none":case"table-column":case"table-column-group":case"table-cell":break
default:return this.isRenderedBlock(!1)?"\n":""}return""},"node")})
var Ee={character:"",characterType:pe,isBr:!1,prepopulateChar:function(){var e=this
if(!e.prepopulatedChar){var t=e.node,n=e.offset,r="",i=pe,o=!1
if(n>0)if(3==t.nodeType){var A=t.data,a=A.charAt(n-1),s=e.nodeWrapper.getTextNodeInfo(),c=s.spaceRegex
s.collapseSpaces?c.test(a)?n>1&&c.test(A.charAt(n-2))||(s.preLine&&"\n"===A.charAt(n)?(r=" ",i=be):(r=" ",i=ve)):(r=a,i=ge,o=!0):(r=a,i=me,o=!0)}else{var l=t.childNodes[n-1]
if(l&&1==l.nodeType&&!y(l)&&("br"==l.tagName.toLowerCase()?(r="\n",e.isBr=!0,i=ve,o=!1):e.checkForTrailingSpace=!0),!r){var u=t.childNodes[n]
u&&1==u.nodeType&&!y(u)&&(e.checkForLeadingSpace=!0)}}e.prepopulatedChar=!0,e.character=r,e.characterType=i,e.isCharInvariant=o}},isDefinitelyNonEmpty:function(){var e=this.characterType
return e==ge||e==me},resolveLeadingAndTrailingSpaces:function(){if(this.prepopulatedChar||this.prepopulateChar(),this.checkForTrailingSpace){var e=this.session.getNodeWrapper(this.node.childNodes[this.offset-1]).getTrailingSpace()
e&&(this.isTrailingSpace=!0,this.character=e,this.characterType=ve),this.checkForTrailingSpace=!1}if(this.checkForLeadingSpace){var t=this.session.getNodeWrapper(this.node.childNodes[this.offset]).getLeadingSpace()
t&&(this.isLeadingSpace=!0,this.character=t,this.characterType=ve),this.checkForLeadingSpace=!1}},getPrecedingUncollapsedPosition:function(e){for(var t,n=this;n=n.previousVisible();)if(t=n.getCharacter(e),""!==t)return n
return null},getCharacter:function(e){function t(){return s||(o=c.getPrecedingUncollapsedPosition(e),s=!0),o}if(this.resolveLeadingAndTrailingSpaces(),this.isCharInvariant)return this.character
var n=["character",e.includeSpaceBeforeBr,e.includeBlockContentTrailingSpace,e.includePreLineTrailingSpace].join("_"),r=this.cache.get(n)
if(null!==r)return r
var i,o,A="",a=this.characterType==ve,s=!1,c=this
return a?(" "!=this.character||t()&&!o.isTrailingSpace&&"\n"!=o.character)&&("\n"==this.character&&this.isLeadingSpace?t()&&"\n"!=o.character&&(A="\n"):(i=this.nextUncollapsed(),i&&(i.isBr?this.type=Be:i.isTrailingSpace&&"\n"==i.character?this.type=we:i.isLeadingSpace&&"\n"==i.character&&(this.type=ye),"\n"===i.character?(this.type!=Be||e.includeSpaceBeforeBr)&&(this.type!=ye||e.includeSpaceBeforeBlock)&&(this.type==we&&i.isTrailingSpace&&!e.includeBlockContentTrailingSpace||(this.type!=be||i.type!=ge||e.includePreLineTrailingSpace)&&("\n"===this.character?i.isTrailingSpace?this.isTrailingSpace||this.isBr&&(i.type=xe,t()&&o.isLeadingSpace&&"\n"==o.character&&(i.character="")):A="\n":" "===this.character&&(A=" "))):A=this.character))):"\n"===this.character&&(!(i=this.nextUncollapsed())||i.isTrailingSpace),this.cache.set(n,A),A},equals:function(e){return!!e&&this.node===e.node&&this.offset===e.offset},inspect:C,toString:function(){return this.character}}
E.prototype=Ee,j(Ee,{next:b("nextPos",function(e){var t=e.nodeWrapper,n=e.node,r=e.offset,i=t.session
if(!n)return null
var o,A,a
return r==t.getLength()?(o=n.parentNode,A=o?t.getNodeIndex()+1:0):t.isCharacterDataNode()?(o=n,A=r+1):(a=n.childNodes[r],i.getNodeWrapper(a).containsPositions()?(o=a,A=0):(o=n,A=r+1)),o?i.getPosition(o,A):null}),previous:b("previous",function(e){var t,n,r,i=e.nodeWrapper,o=e.node,A=e.offset,a=i.session
return 0==A?(t=o.parentNode,n=t?i.getNodeIndex():0):i.isCharacterDataNode()?(t=o,n=A-1):(r=o.childNodes[A-1],a.getNodeWrapper(r).containsPositions()?(t=r,n=H.getNodeLength(r)):(t=o,n=A-1)),t?a.getPosition(t,n):null}),nextVisible:b("nextVisible",function(e){var t=e.next()
if(!t)return null
var n=t.nodeWrapper,r=t.node,i=t
return n.isCollapsed()&&(i=n.session.getPosition(r.parentNode,n.getNodeIndex()+1)),i}),nextUncollapsed:b("nextUncollapsed",function(e){for(var t=e;t=t.nextVisible();)if(t.resolveLeadingAndTrailingSpaces(),""!==t.character)return t
return null}),previousVisible:b("previousVisible",function(e){var t=e.previous()
if(!t)return null
var n=t.nodeWrapper,r=t.node,i=t
return n.isCollapsed()&&(i=n.session.getPosition(r.parentNode,n.getNodeIndex())),i})})
var Ce=null,Se=function(){function e(e){var t=new B
return{get:function(n){var r=t.get(n[e])
if(r)for(var i,o=0;i=r[o++];)if(i.node===n)return i
return null},set:function(n){var r=n.node[e],i=t.get(r)||t.set(r,[])
i.push(n)}}}function t(){this.initCaches()}var n=z.isHostProperty(document.documentElement,"uniqueID")
return t.prototype={initCaches:function(){this.elementCache=n?function(){var e=new B
return{get:function(t){return e.get(t.uniqueID)},set:function(t){e.set(t.node.uniqueID,t)}}}():e("tagName"),this.textNodeCache=e("data"),this.otherNodeCache=e("nodeName")},getNodeWrapper:function(e){var t
switch(e.nodeType){case 1:t=this.elementCache
break
case 3:t=this.textNodeCache
break
default:t=this.otherNodeCache}var n=t.get(e)
return n||(n=new x(e,this),t.set(n)),n},getPosition:function(e,t){return this.getNodeWrapper(e).getPosition(t)},getRangeBoundaryPosition:function(e,t){var n=t?"start":"end"
return this.getPosition(e[n+"Container"],e[n+"Offset"])},detach:function(){this.elementCache=this.textNodeCache=this.otherNodeCache=null}},t}()
j(H,{nextNode:p,previousNode:g})
var Ie=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;r>n;++n)if(e[n]===t)return n
return-1}
j(e.rangePrototype,{moveStart:F(!0,!1),moveEnd:F(!1,!1),move:F(!0,!0),trimStart:G(!0),trimEnd:G(!1),trim:Q(function(e,t){var n=this.trimStart(t),r=this.trimEnd(t)
return n||r}),expand:Q(function(e,t,n){var A=!1
n=r(n,se)
var a=o(n.characterOptions)
if(t||(t=L),t==U){var s,c,l=i(n.wordOptions),u=e.getRangeBoundaryPosition(this,!0),d=e.getRangeBoundaryPosition(this,!1),f=_(u,a,l),h=f.nextEndToken(),p=h.chars[0].previousVisible()
if(this.collapsed)s=h
else{var g=_(d,a,l)
s=g.previousStartToken()}return c=s.chars[s.chars.length-1],p.equals(u)||(this.setStart(p.node,p.offset),A=!0),c&&!c.equals(d)&&(this.setEnd(c.node,c.offset),A=!0),n.trim&&(n.trimStart&&(A=this.trimStart(a)||A),n.trimEnd&&(A=this.trimEnd(a)||A)),A}return this.moveEnd(L,1,n)}),text:Q(function(e,t){return this.collapsed?"":N(e,this,o(t)).join("")}),selectCharacters:Q(function(e,t,n,r,i){var o={characterOptions:i}
t||(t=W(this.getDocument())),this.selectNodeContents(t),this.collapse(!0),this.moveStart("character",n,o),this.collapse(!0),this.moveEnd("character",r-n,o)}),toCharacterRange:Q(function(e,t,n){t||(t=W(this.getDocument()))
var r,i,o=t.parentNode,A=H.getNodeIndex(t),a=-1==H.comparePoints(this.startContainer,this.endContainer,o,A),s=this.cloneRange()
return a?(s.setStartAndEnd(this.startContainer,this.startOffset,o,A),r=-s.text(n).length):(s.setStartAndEnd(o,A,this.startContainer,this.startOffset),r=s.text(n).length),i=r+this.text(n).length,{start:r,end:i}}),findText:Q(function(t,n,o){o=r(o,Ae),o.wholeWordsOnly&&(o.wordOptions=i(o.wordOptions),o.wordOptions.includeTrailingSpace=!1)
var A=K(o.direction),a=o.withinRange
a||(a=e.createRange(),a.selectNodeContents(this.getDocument()))
var s=n,c=!1
"string"==typeof s?o.caseSensitive||(s=s.toLowerCase()):c=!0
var l=t.getRangeBoundaryPosition(this,!A),u=a.comparePoint(l.node,l.offset);-1===u?l=t.getRangeBoundaryPosition(a,!0):1===u&&(l=t.getRangeBoundaryPosition(a,!1))
for(var d,f=l,h=!1;;)if(d=P(f,s,c,a,o)){if(d.valid)return this.setStartAndEnd(d.startPos.node,d.startPos.offset,d.endPos.node,d.endPos.offset),!0
f=A?d.startPos:d.endPos}else{if(!o.wrap||h)return!1
a=a.cloneRange(),f=t.getRangeBoundaryPosition(a,!A),a.setBoundary(l.node,l.offset,A),h=!0}}),pasteHtml:function(e){if(this.deleteContents(),e){var t=this.createContextualFragment(e),n=t.lastChild
this.insertNode(t),this.collapseAfter(n)}}}),j(e.selectionPrototype,{expand:Q(function(e,t,n){this.changeEachRange(function(e){e.expand(t,n)})}),move:Q(function(e,t,n,r){var i=0
if(this.focusNode){this.collapse(this.focusNode,this.focusOffset)
var o=this.getRangeAt(0)
r||(r={}),r.characterOptions=A(r.characterOptions),i=o.move(t,n,r),this.setSingleRange(o)}return i}),trimStart:M("trimStart"),trimEnd:M("trimEnd"),trim:M("trim"),selectCharacters:Q(function(t,n,r,i,o,A){var a=e.createRange(n)
a.selectCharacters(n,r,i,A),this.setSingleRange(a,o)}),saveCharacterRanges:Q(function(e,t,n){for(var r=this.getAllRanges(),i=r.length,o=[],A=1==i&&this.isBackward(),a=0,s=r.length;s>a;++a)o[a]={characterRange:r[a].toCharacterRange(t,n),backward:A,characterOptions:n}
return o}),restoreCharacterRanges:Q(function(t,n,r){this.removeAllRanges()
for(var i,o,A,a=0,s=r.length;s>a;++a)o=r[a],A=o.characterRange,i=e.createRange(n),i.selectCharacters(n,A.start,A.end,o.characterOptions),this.addRange(i,o.backward)}),text:Q(function(e,t){for(var n=[],r=0,i=this.rangeCount;i>r;++r)n[r]=this.getRangeAt(r).text(t)
return n.join("")})}),e.innerText=function(t,n){var r=e.createRange(t)
r.selectNodeContents(t)
var i=r.text(n)
return r.detach(),i},e.createWordIterator=function(e,t,n){var A=I()
n=r(n,ce)
var a=o(n.characterOptions),s=i(n.wordOptions),c=A.getPosition(e,t),l=_(c,a,s),u=K(n.direction)
return{next:function(){return u?l.previousStartToken():l.nextEndToken()},dispose:function(){l.dispose(),this.next=function(){}}}},e.noMutation=function(e){var t=I()
e(t),O()},e.noMutation.createEntryPointFunction=Q,e.textRange={isBlockNode:l,isCollapsedWhitespaceNode:v,createPosition:Q(function(e,t,n){return e.getPosition(t,n)})}}),define("rangy-textrange",["rangy-core"],function(e){return function(){var t
return t||e.rangy.modules.TextRange}}(this)),rangy.createModule("Position",["WrappedSelection"],function(e,t){function n(e){var t=0,n=0
if(typeof e.pageXOffset==B&&typeof e.pageYOffset==B)t=e.pageXOffset,n=e.pageYOffset
else{var r=e.document,i=r.documentElement,o=r.compatMode,A="string"==typeof o&&o.indexOf("CSS")>=0&&i?i:C.getBody(r)
if(A&&typeof A.scrollLeft==B&&typeof A.scrollTop==B)try{t=A.scrollLeft,n=A.scrollTop}catch(a){}}return{x:t,y:n}}function r(e,t){for(t=t.toLowerCase();e;){if(1==e.nodeType&&e.tagName.toLowerCase()==t)return e
e=e.parentNode}return null}function i(e,t,n,r){this.top=e,this.right=t,this.bottom=n,this.left=r,this.width=t-r,this.height=n-e}function o(e,t,n){return new i(e.top+n,e.right+t,e.bottom+n,e.left+t)}function A(e,t){var n=0,r=0,i=t.documentElement,A=C.getBody(t),a=0===i.clientWidth&&typeof A.clientTop==B?A:i,s=a.clientLeft,c=a.clientTop
return s&&(n=-s),c&&(r=-c),o(e,n,r)}function a(e){for(var t,n=[],r=[],o=[],A=[],a=0,s=e.length;s>a;++a)t=e[a],t&&(n.push(t.top),r.push(t.bottom),o.push(t.left),A.push(t.right))
return new i(Math.min.apply(Math,n),Math.max.apply(Math,A),Math.max.apply(Math,r),Math.min.apply(Math,o))}function s(t,n,r){var i=C.getBody(t).createTextRange()
i.moveToPoint(n,r)
var o=new e.WrappedTextRange(i)
return new I(o.startContainer,o.startOffset)}function c(e,t,n){var r=e.caretPositionFromPoint(t,n)
return new I(r.offsetNode,r.offset)}function l(e,t,n){var r=e.caretRangeFromPoint(t,n)
return new I(r.startContainer,r.startOffset)}function u(e){var t=(e.nativeRange||e).getClientRects()
return t.length>0?t[t.length-1]:null}function d(e,t,n){return console.log("pointIsInOrAboveRect",e,t,Math.floor(n.top),Math.floor(n.right),Math.floor(n.bottom),Math.floor(n.left)),t<n.bottom&&e>=n.left&&e<=n.right}function f(t,n,r,i){var o=t.elementFromPoint(n,r)
console.log("elementFromPoint is ",o)
var A=e.createRange(t)
A.selectNodeContents(o),A.collapse(!0)
var a,s,c,l=o.firstChild
if(l){e:for(;l;){if(console.log(l),3==l.nodeType){for(a=0,c=l.length;c>=a;++a)if(A.setEnd(l,a),s=u(A),s&&d(n,r,s)){s.right-n>n-s.left&&--a
break e}}else if(A.setEndAfter(l),s=u(A),s&&d(n,r,s)){a=C.getNodeIndex(l),l=o.parentNode,i||++a
break}l=l.nextSibling}l||(l=o,a=o.childNodes.length)}else l=o.parentNode,a=C.getNodeIndex(o),i||++a
return new I(l,a)}function h(n){if(e.features.implementsTextRange)return s
if(typeof n.caretPositionFromPoint!=b)return c
if(typeof n.caretRangeFromPoint!=b)return l
if(typeof n.elementFromPoint!=b&&_)return f
throw t.createError("createCaretPositionFromPointGetter(): Browser does not provide a recognised method to create a selection from pixel coordinates")}function p(n,r,i,o,A){A=C.getContentDocument(A,t,"createRangeFromPoints")
var a=h(A),s=a(A,n,r,!1),c=a(A,i,o,!0)
console.log(s.node,s.offset,c.node,c.offset)
var l=e.createRange(A)
return l.setStartAndEnd(s.node,s.offset,c.node,c.offset),l}function g(e,t,n,r,i){var o,A,a,s,c=t>r||t==r&&e>n
c?(o=n,A=r,a=e,s=t):(o=e,A=t,a=n,s=r)
var l=rangy.getSelection(i),u=p(o,A,a,s,i)
return l.setSingleRange(u),l}function m(e){return function(){var t=this["get"+(e?"Start":"End")+"ClientPos"](),r=n(C.getWindow(this.startContainer))
return{x:t.x+r.x,y:t.y+r.y}}}function v(e,t){return e.compareBoundaryPoints(t.START_TO_START,t)}function y(e){return function(){for(var t="getBounding"+(e?"Document":"Client")+"Rect",n=[],r=0;r<this.rangeCount;++r)n.push(this.getRangeAt(r)[t]())
return a(n)}}function w(e,t){return function(){if(0==this.rangeCount)return null
var n=t?"Document":"Client",r=this.getAllRanges()
return r.length>1&&r.sort(v),e?r[0]["getStart"+n+"Pos"]():r[r.length-1]["getEnd"+n+"Pos"]()}}var B="number",b="undefined",x=e.WrappedRange,E=e.WrappedTextRange,C=e.dom,S=e.util,I=C.DomPosition,O=document.createElementNS("http://www.w3.org/1999/xhtml","span"),D=S.isHostMethod(O,"getBoundingClientRect")
O=null
var _=!1,T=!1
if(e.features.implementsDomRange){var R=e.createNativeRange()
_=S.isHostMethod(R,"getClientRects"),T=S.isHostMethod(R,"getBoundingClientRect"),R.detach()}S.extend(e.features,{rangeSupportsGetBoundingClientRect:T,rangeSupportsGetClientRects:_,elementSupportsGetBoundingClientRect:D})
var N=function(e){return function(){var t=this.cloneRange()
t.collapse(e)
var n=t.getBoundingClientRect()
return{x:n[e?"left":"right"],y:n[e?"top":"bottom"]}}},k=e.rangePrototype
if(e.features.implementsTextRange&&D)k.getBoundingClientRect=function(){var e,t=E.rangeToTextRange(this),n=this.getNodes([1],function(e){return/^t[dh]$/i.test(e.tagName)}),i=[]
if(n.length>0){for(var o,s,c,l,u=r(this.startContainer,"table"),d=0;o=n[d];++d)c=r(o,"table"),u&&c==u||(l=this.cloneRange(),u&&l.setStartAfter(u),l.setEndBefore(c),i.push(E.rangeToTextRange(l).getBoundingClientRect())),this.containsNode(o)?i.push(o.getBoundingClientRect()):(s=t.duplicate(),s.moveToElementText(o),-1==s.compareEndPoints("StartToStart",t)?s.setEndPoint("StartToStart",t):1==s.compareEndPoints("EndToEnd",t)&&s.setEndPoint("EndToEnd",t),i.push(s.getBoundingClientRect())),u=c
var f=r(this.endContainer,"table")
!f&&u&&(l=this.cloneRange(),l.setStartAfter(u),i.push(E.rangeToTextRange(l).getBoundingClientRect())),e=a(i)}else e=t.getBoundingClientRect()
return A(e,C.getDocument(this.startContainer))}
else if(e.features.implementsDomRange){var P=function(e){return e instanceof x?e:new x(e)}
if(T){if(k.getBoundingClientRect=function(){var e=P(this).nativeRange,t=e.getBoundingClientRect()||e.getClientRects()[0]
return A(t,C.getDocument(this.startContainer))},_){N=function(e){return function(){var n,r=P(this).nativeRange,i=r.getClientRects()
if(0==i.length&&D&&(console.log(r,r.getClientRects(),r.getBoundingClientRect()),this.collapsed&&1==this.startContainer.nodeType&&this.startOffset<this.startContainer.childNodes.length)){var o=this.startContainer.childNodes[this.startOffset]
o.getClientRects&&console.log(o,o.getClientRects(),this.startContainer.getClientRects())}if(i.length>0)return e?(n=i[0],{x:n.left,y:n.top}):(n=i[i.length-1],{x:n.right,y:n.bottom})
throw t.createError("Cannot get position for range "+this.inspect())}}}}else{var Q=D?function(e){return A(e.getBoundingClientRect(),C.getDocument(e))}:function(e){for(var t=0,n=0,r=e,o=e.offsetWidth,a=e.offsetHeight;r;)t+=r.offsetLeft,n+=r.offsetTop,r=r.offsetParent
return A(new i(n,t+o,n+a,t),C.getDocument(e))},F=function(e){var t
e.splitBoundaries()
var n=document.createElementNS("http://www.w3.org/1999/xhtml","span")
if(e.collapsed)e.insertNode(n),t=Q(n),n.parentNode.removeChild(n)
else{var r=e.cloneRange()
r.collapse(!0),r.insertNode(n)
var i=Q(n)
n.parentNode.removeChild(n),r.collapseToPoint(e.endContainer,e.endOffset),r.insertNode(n)
var o=Q(n)
n.parentNode.removeChild(n)
for(var A=[i,o],s=e.getNodes([1],function(t){return e.containsNode(t)}),c=0,l=s.length;l>c;++c)A.push(Q(s[c]))
t=a(A)}return e.normalizeBoundaries(),t}
k.getBoundingClientRect=function(e){return F(P(e))}}}S.extend(k,{getBoundingDocumentRect:function(){var e=n(C.getWindow(this.startContainer))
return o(this.getBoundingClientRect(),e.x,e.y)},getStartClientPos:N(!0),getEndClientPos:N(!1),getStartDocumentPos:m(!0),getEndDocumentPos:m(!1)}),S.extend(e.selectionPrototype,{getBoundingClientRect:y(!1),getBoundingDocumentRect:y(!0),getStartClientPos:w(!0,!1),getEndClientPos:w(!1,!1),getStartDocumentPos:w(!0,!0),getEndDocumentPos:w(!1,!0)}),e.positionFromPoint=function(e,n,r){return r=C.getContentDocument(r,t,"positionFromPoint"),h(r)(r,e,n)},e.createRangeFromPoints=p,e.moveSelectionToPoints=g}),define("rangy-position",["rangy-core"],function(e){return function(){var t
return t||e.rangy.modules.Position}}(this)),define("rangy",["rangy-core","rangy-highlighter","rangy-cssclassapplier","rangy-textrange","rangy-position"],function(e,t,n,r,i){return e}),define("readium_shared_js/views/media_overlay_data_injector",["jquery","underscore","../helpers","../models/smil_iterator","rangy","readium_cfi_js"],function(e,t,n,r,i,o){var A=function(o,A){this.attachMediaOverlayData=function(a,s,c){var l=a[0].contentDocument.documentElement
if(s.media_overlay_id||0!==o.smil_models.length){var u=e("body",l)
if(0==u.length)console.error("! BODY ???")
else{var d=u.data("mediaOverlayClick")
if(d)console.error("[WARN] already mediaOverlayClick")
else{u.data("mediaOverlayClick",{ping:"pong"})
var f=function(t){var n=e(this)[0]
if(n=t.target,!n)return A.touchInit(),!0
var r=void 0,o=n,a=!1
for("a"===o.nodeName.toLowerCase()&&(a=!0);!(r=e(o).data("mediaOverlayData"))&&("a"===o.nodeName.toLowerCase()&&(a=!0),o=o.parentNode););if(r&&(r.par||r.pars)){if(!c.mediaOverlaysEnableClick)return console.log("MO CLICK DISABLED"),A.touchInit(),!0
if(a)return console.log("MO CLICKED LINK"),A.touchInit(),!0
var s=r.par?r.par:r.pars[0]
if(r.pars&&"undefined"!=typeof i){var l=!1
A.isPlayingCfi()&&(l=!0,A.pause())
try{var u=i.positionFromPoint(t.pageX,t.pageY,n.ownerDocument)
s=void 0
for(var d=0;d<r.pars.length;d++){var f=r.pars[d],h="epubcfi("+f.cfi.partialStartCfi+")",p=EPUBcfi.getTextTerminusInfoWithPartialCFI(h,n.ownerDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),g="epubcfi("+f.cfi.partialEndCfi+")",m=EPUBcfi.getTextTerminusInfoWithPartialCFI(g,n.ownerDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),v=i.createRange(n.ownerDocument)
if(v.setStartAndEnd(p.textNode[0],p.textOffset,m.textNode[0],m.textOffset),v.isPointInRange(u.node,u.offset)){s=f
break}}}catch(y){console.error(y)}if(!s)return l&&A.toggleMediaOverlay(),!0}return o&&o!=n&&"body"===o.nodeName.toLowerCase()&&s&&!s.getSmil().id?(A.touchInit(),!0):(A.playUserPar(s),!0)}var w=e(n).attr("ibooks:readaloud")
if(w||(w=e(n).attr("epub:readaloud")),w){console.debug("MO readaloud attr: "+w)
var B=A.isPlaying()
if("start"===w&&!B||"stop"===w&&B||"startstop"===w)return A.toggleMediaOverlay(),!0}return A.touchInit(),!0},h=t.debounce(f,200)
"ontouchstart"in document.documentElement&&u[0].addEventListener("touchstart",h,!1),u[0].addEventListener("mousedown",h,!1)}}var p=o.getSmilBySpineItem(s)
if(!p)return void console.error("NO SMIL?? "+s.idref+" /// "+s.media_overlay_id)
var g=function(e){if(e){if(e.nodeType&&"seq"===e.nodeType&&e.textref){var t=e.textref.split("#"),r=t[0],i=2===t.length?t[1]:""
if(r&&i){var o=n.ResolveContentRef(r,p.href),A=o===s.href
A&&(e.element=a[0].contentDocument.getElementById(i),e.element||console.error("seq.textref !element? "+e.textref))}}if(e.children&&e.children.length)for(var c=0;c<e.children.length;c++){var l=e.children[c]
g(l)}}}
g(p)
for(var m=new r(p),v="/99!",y="epubcfi";m.currentPar;){m.currentPar.element=void 0,m.currentPar.cfi=void 0
var w=n.ResolveContentRef(m.currentPar.text.srcFile,m.smil.href),B=w===s.href
if(B){var b=!m.currentPar.text.srcFragmentId||0==m.currentPar.text.srcFragmentId.length,x=0==m.currentPar.text.srcFragmentId.indexOf(y)?void 0:m.currentPar.text.srcFragmentId,E=void 0,C=!1
if(b||x)E=b?u:e(a[0].contentDocument.getElementById(x))
else if(0===m.currentPar.text.srcFragmentId.indexOf(y)){var S=m.currentPar.text.srcFragmentId.substr(y.length+1,m.currentPar.text.srcFragmentId.length-y.length-2)
0===S.indexOf(v)&&(S=S.substr(v.length,S.length-v.length))
var I=S.split(",")
if(I&&3===I.length)try{var O=I[0]+I[1],D="epubcfi("+O+")",_=EPUBcfi.getTextTerminusInfoWithPartialCFI(D,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),T=I[0]+I[2],R="epubcfi("+T+")",N=(EPUBcfi.getTextTerminusInfoWithPartialCFI(R,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),_.textNode[0].parentNode)
m.currentPar.cfi={smilTextSrcCfi:m.currentPar.text.srcFragmentId,partialRangeCfi:S,partialStartCfi:O,partialEndCfi:T,cfiTextParent:N},C=!0,E=e(N)
var k=E.data("mediaOverlayData")
if(k){k.par&&(console.error("[WARN] non-CFI MO DATA already exists!"),k.par=void 0)
var P=!1
if(k.pars)for(var Q=0;Q<k.pars.length;Q++){var F=k.pars[Q]
F===m.currentPar&&(P=!0,console.error("[WARN] mediaOverlayData CFI PAR already registered!"))}else k.pars=[]
P||k.pars.push(m.currentPar)}else k={pars:[m.currentPar]},E.data("mediaOverlayData",k)}catch(G){console.error(G)}else try{var M="epubcfi("+S+")"
E=EPUBcfi.getTargetElementWithPartialCFI(M,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])}catch(G){console.error(G)}}else console.error("SMIL text@src CFI fragment identifier scheme not supported: "+m.currentPar.text.srcFragmentId)
if(E&&E.length>0){if(!C){m.currentPar.element&&m.currentPar.element!==E[0]&&console.error("DIFFERENT ELEMENTS??! "+m.currentPar.text.srcFragmentId+" /// "+m.currentPar.element.id)
var L=E[0].nodeName?E[0].nodeName.toLowerCase():void 0
"audio"!==L&&"video"!==L||E.attr("preload","auto"),m.currentPar.element=E[0]
var k=E.data("mediaOverlayData")
k&&(console.error("[WARN] MO DATA already exists."),k.par&&k.par!==m.currentPar&&console.error("DIFFERENT PARS??!")),E.data("mediaOverlayData",{par:m.currentPar})}}else console.error("!! CANNOT FIND ELEMENT: "+m.currentPar.text.srcFragmentId+" == "+m.currentPar.text.srcFile+" /// "+s.href)}m.next()}}}}
return A}),define("readium_shared_js/views/audio_player",["jquery"],function(e){var t=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),n=navigator.userAgent.toLowerCase().indexOf("android")>-1,r=!1,i=new Audio
r&&(i.addEventListener("load",function(){console.debug("0) load")}),i.addEventListener("loadstart",function(){console.debug("1) loadstart")}),i.addEventListener("durationchange",function(){console.debug("2) durationchange")}),i.addEventListener("loadedmetadata",function(){console.debug("3) loadedmetadata")}),i.addEventListener("loadeddata",function(){console.debug("4) loadeddata")}),i.addEventListener("progress",function(){console.debug("5) progress")}),i.addEventListener("canplay",function(){console.debug("6) canplay")}),i.addEventListener("canplaythrough",function(){console.debug("7) canplaythrough")}),i.addEventListener("play",function(){console.debug("8) play")}),i.addEventListener("pause",function(){console.debug("9) pause")}),i.addEventListener("ended",function(){console.debug("10) ended")}),i.addEventListener("seeked",function(){console.debug("X) seeked")}),i.addEventListener("timeupdate",function(){console.debug("Y) timeupdate")}),i.addEventListener("seeking",function(){console.debug("Z) seeking")}))
var o=function(o,A,a,s,c){function l(){o({isPlaying:!0}),s()}function u(){c(),o({isPlaying:!1})}function d(){return i.moSeeking?void(r&&console.debug("onEnded() skipped (still seeking...)")):(h(),a(),void o({isPlaying:!1}))}function f(){C||(C=setInterval(function(){if(i.moSeeking)return E++,void(E>1e3&&(E=0,h()))
var e=void 0
try{e=i.currentTime}catch(t){console.error(t.message)}e&&A(e,1)},20))}function h(){C&&clearInterval(C),C=void 0}function p(e){r&&console.debug("onReadyToSeek #"+e.data.playId),m(e.data.seekBegin,e.data.playId,!0)}function g(t){e(i).off(T,g),n?(r&&console.debug("onReadyToSeek ANDROID ... waiting a bit ... #"+t.data.playId),D(),setTimeout(function(){p(t)},1e3)):p(t)}function m(t,n,o){if(r&&console.debug("playSeekCurrentTime() #"+n),0==t&&(t=.01),Math.abs(t-i.currentTime)<.3)return r&&console.debug("playSeekCurrentTime() CONTINUE"),i.moSeeking=void 0,void y.play()
var A=o?N:k
r&&console.debug("playSeekCurrentTime() NEED SEEK, EV: "+A),y.pause(),e(i).on(A,{newCurrentTime:t,playId:n,isNewSrc:o},v)
try{i.currentTime=t}catch(a){console.error(a.message),setTimeout(function(){try{i.currentTime=t}catch(e){console.error(e.message)}},5)}}function v(t){var o=t.data.isNewSrc?N:k,A=void 0==t.data.seekRetries;(A||t.data.seekRetries==R)&&e(i).off(o,v),r&&console.debug("onSeeked() #"+t.data.playId+" FIRST? "+A+" EV: "+o)
var a=i.currentTime,s=Math.abs(t.data.newCurrentTime-a)
if((A||t.data.seekRetries>=0)&&s>=1)r&&console.debug("onSeeked() time diff: "+t.data.newCurrentTime+" vs. "+a+" ("+s+")"),A&&(t.data.seekRetries=R,t.data.isNewSrc=!1),t.data.seekRetries--,r&&console.debug("onSeeked() FAIL => retry again (timeout)"),setTimeout(function(){v(t)},n?1e3:200),setTimeout(function(){i.pause()
try{i.currentTime=t.data.newCurrentTime}catch(e){console.error(e.message),setTimeout(function(){try{i.currentTime=t.data.newCurrentTime}catch(e){console.error(e.message)}},4)}},5)
else{if(r&&(console.debug("onSeeked() STATE:"),console.debug(A),console.debug(t.data.seekRetries),console.debug(s)),s>=1){r&&console.debug("onSeeked() ABORT, TRY AGAIN FROM SCRATCH!")
var c=B,l=w,u=t.data.newCurrentTime
return y.reset(),void setTimeout(function(){y.playFile(c,l,u)},10)}r&&console.debug("onSeeked() OKAY => play!"),t.data.seekRetries=void 0,y.play(),i.moSeeking=void 0}}var y=this,w=void 0,B=void 0
this.currentSmilSrc=function(){return B}
var b=1
this.setRate=function(e){b=e,.5>b&&(b=.5),b>4&&(b=4),i.playbackRate=b},y.setRate(b),this.getRate=function(){return b}
var x=1
this.setVolume=function(e){x=e,0>x&&(x=0),x>1&&(x=1),i.volume=x},y.setVolume(x),this.getVolume=function(){return x},this.play=function(){return r&&console.error("this.play()"),w?(f(),y.setVolume(x),y.setRate(b),i.play(),!0):!1},this.pause=function(){r&&console.error("this.pause()"),h(),i.pause()},i.addEventListener("play",l,!1),i.addEventListener("pause",u,!1),i.addEventListener("ended",d,!1)
var E=0,C=void 0
this.isPlaying=function(){return void 0!==C},this.reset=function(){r&&console.error("this.reset()"),this.pause(),i.moSeeking=void 0,B=void 0,w=void 0,setTimeout(function(){i.setAttribute("src","")},1)},i.addEventListener("loadstart",function(){S=!0})
var S=!1
this.touchInit=function(){return t?S?!1:(S=!0,i.setAttribute("src","touch/init/html5/audio.mp3"),i.load(),!0):!1}
var I=0,O=0
this.playFile=function(t,o,A){I++,I>99999&&(I=0)
var a=I
if(i.moSeeking)return O++,O>R?void(O=0):(r&&console.debug("this.playFile("+o+") @"+A+" (POSTPONE, SEEKING...)"),void setTimeout(function(){y.playFile(t,o,A)},20))
i.moSeeking={},r&&console.debug("this.playFile("+o+") @"+A+" #"+a)
var s=!w||w!==o
return s?(r&&(console.debug("this.playFile() NEW SRC"),console.debug("_currentEpubSrc: "+w),console.debug("epubSrc: "+o)),this.reset(),i.moSeeking={},B=t,w=o,n||i.addEventListener("play",_,!1),e(i).on(T,{seekBegin:A,playId:a},g),void setTimeout(function(){i.setAttribute("src",w),i.load(),n||D()},1)):(r&&console.debug("this.playFile() SAME SRC"),this.pause(),B=t,w=o,void m(A,a,!1))}
var D=function(){r&&console.debug("playToForcePreload")
var e=x
x=0,y.play(),x=e},_=function(){i.removeEventListener("play",_,!1),r&&console.debug("onPlayToForcePreload"),i.pause()},T=n?"canplaythrough":"canplay",R=10,N=t?"canplaythrough":"seeked",k=t?"timeupdate":"seeked"}
return o}),define("readium_shared_js/views/media_overlay_element_highlighter",["jquery","rangy","readium_cfi_js"],function(e,t,n){var r=function(n){function r(t,n,r){if(p)try{if(p[0].ownerDocument===t[0].ownerDocument)return}catch(o){}$head=e("head",t[0].ownerDocument.documentElement),p=e("<style type='text/css'> </style>"),p.append("."+i+" {")
var A="background-color: yellow !important; color: black !important; border-radius: 0.4em;",a=r
if(a){var s=!1
for(var c in a.declarations)a.declarations.hasOwnProperty(c)&&(s=!0,p.append(c+": "+a.declarations[c]+"; "))
s||n||p.append(A)}else n||p.append(A)
p.append("}"),p.appendTo($head)}this.includeParWhenAdjustingToSeqSyncGranularity=!0
var i="mo-active-default",o="mo-sub-sync",A=void 0
this.isElementHighlighted=function(e){return A&&e===A}
var a=void 0
this.isCfiHighlighted=function(e){return a&&e===a}
var s="",c="",l=n,u="undefined"!=typeof t,d=void 0,f=void 0,h="MO_SPEAK",p=void 0
this.reDo=function(){p&&p.remove(),p=void 0
var e=A,t=a,n=s,r=c
A?(this.reset(),this.highlightElement(e,n,r)):a&&(this.reset(),this.highlightCfi(t,n,r))},this.highlightElement=function(t,n,u){if(t&&t!==A){this.reset(),A=t,a=void 0,s=n,c=u
var d=this.adjustParToSeqSyncGranularity(A),f=d.element
c&&""!==c&&e(f.ownerDocument.documentElement).addClass(c)
var h=e(f),p=s&&""!==s,g=l.userStyles().findStyle("."+i)
r(h,p,g),g||!p?(p&&h.addClass(s),h.addClass(i)):h.addClass(s),(this.includeParWhenAdjustingToSeqSyncGranularity||A!==d)&&e(A.element).addClass(o)}},this.highlightCfi=function(n,o,p){if(n&&n!==a){this.reset(),A=void 0,a=n,s=o,c=p
var g=e(a.cfi.cfiTextParent),m=s&&""!==s,v=l.userStyles().findStyle("."+i)
r(g,m,v)
var y=v||!m?(m?s+" ":"")+i:s
if(u){var w=a.cfi.cfiTextParent.ownerDocument
f=t.createRange(w)
var B="epubcfi("+a.cfi.partialStartCfi+")",b=EPUBcfi.getTextTerminusInfoWithPartialCFI(B,w,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),x="epubcfi("+a.cfi.partialEndCfi+")",E=EPUBcfi.getTextTerminusInfoWithPartialCFI(x,w,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])
f.setStartAndEnd(b.textNode[0],b.textOffset,E.textNode[0],E.textOffset)
f.MO_createCssClassApplier=!0,d&&d.cssClass===y||(d=t.createCssClassApplier(y,{elementTagName:"span",elementProperties:{className:"mo-cfi-highlight"},ignoreWhiteSpace:!0,applyToEditableOnly:!1,normalize:!0},["span"])),d.applyToRange(f)}else if(l.plugins.annotations)try{var C=n.getSmil().spineItemId
l.plugins.annotations.addHighlight(C,n.cfi.partialRangeCfi,h,"highlight",void 0)}catch(S){console.error(S)}}},this.reset=function(){if(a){var t=a.cfi.cfiTextParent.ownerDocument
if(u){if(d&&f.MO_createCssClassApplier)d.undoToRange(f)
else for(var n=void 0;null!==(n=t.getElementById(h));){var r=n.textContent,p=t.createTextNode(r)
n.parentNode.replaceChild(p,n),p.parentNode.normalize()}f=void 0}else if(l.plugins.annotations)try{l.plugins.annotations.removeHighlight(h)
for(var n=void 0;null!==(n=t.getElementById("start-"+h));)console.log("toRemove START"),console.log(n),n.parentNode.removeChild(n)
for(;null!==(n=t.getElementById("end-"+h));)console.log("toRemove END"),console.log(n),n.parentNode.removeChild(n)}catch(g){console.error(g)}a=void 0}if(A){var m=this.adjustParToSeqSyncGranularity(A),v=m.element;(this.includeParWhenAdjustingToSeqSyncGranularity||A!==m)&&e(A.element).removeClass(o),c&&""!==c&&e(v.ownerDocument.documentElement).removeClass(c),s&&""!==s&&e(v).removeClass(s),e(v).removeClass(i),A=void 0}s="",c=""},this.adjustParToSeqSyncGranularity=function(e){if(e){var t=l.viewerSettings().mediaOverlaysSynchronizationGranularity
if(t&&t.length>0){var n=e.element||(e.cfi?e.cfi.cfiTextParent:void 0)
if(!n)return console.error("adjustParToSeqSyncGranularity !element ???"),e
var r=e.getFirstSeqAncestorWithEpubType(t,this.includeParWhenAdjustingToSeqSyncGranularity)
if(r&&r.element)return r}return e}}}
return r}),define("readium_shared_js/views/scroll_view",["jquery","underscore","eventEmitter","../models/bookmark_data","../models/current_pages_info","../helpers","./one_page_view","../models/page_open_request","../globals","../models/viewer_settings"],function(e,t,n,r,i,o,A,a,s,c){var l=function(l,u,d){function f(e,t){if(ue)return void e()
var n=_()
if(!n)return void e()
var r=W(0),i=j(n)
if(r.top-i.bottom>oe){var o=F()
C(n),v(o-(i.bottom-i.top),void 0),t("updateLoadedViewsTop 1"),f(e,t)}else r.top-i.top<oe?B(n,function(n){n?(t("updateLoadedViewsTop 2"),f(e,t)):e()}):e()}function h(e,t){if(ue)return void e()
var n=T()
if(!n)return void e()
var r=W(0),i=j(n)
i.top-r.bottom>oe?(C(n),t("updateLoadedViewsBottom 1"),h(e,t)):i.bottom-r.bottom<oe?x(n,function(n){t("updateLoadedViewsBottom 2"),n?h(e,t):e()}):e()}function p(e){if(u){var t=void 0
if(K&&e){var n=e.offset()
n&&(t=n.top)}var r=function(n){if(K){if(!t)return
var r=void 0,i=e.offset()
if(i&&(r=i.top),!r)return
var o=r-t
Math.abs(o)>1&&console.debug("@@@@@@@@@@@@@@@ SCROLL ADJUST ("+n+") "+o+" -- "+e.currentSpineItem().href)}}
de=!0,h(function(){f(function(){setTimeout(function(){de=!1},Ae+100)},r)},r)}}function g(e){var t=d.viewerSettings()
t.mediaOverlaysPreservePlaybackWhenScroll||!pe&&d.isMediaOverlayAvailable()&&(pe=d.isPlayingMediaOverlay(),pe&&d.pauseMediaOverlay())}function m(e){if(!de&&!fe&&!he){p(),Q(ae)
var t=d.viewerSettings()
t.mediaOverlaysPreservePlaybackWhenScroll||pe&&setTimeout(function(){d.playMediaOverlay(),pe=!1},100)}}function v(e,t){ne[0].scrollTop=e,t&&Q(t.initiator,t.spineItem,t.elementId)}function y(e){var t=F(),n=j(e)
b(e)
var r=j(e),i=r.bottom-r.top,o=n.bottom-n.top,A=i-o
Math.abs(A)>0&&(K&&console.debug("IMMEDIATE SCROLL ADJUST: "+e.currentSpineItem().href+" == "+A),v(t+A))}function w(e,t,n,r,i,A,a,s){if(!o.isIframeAlive(n))return K&&console.log("reachStableContentHeight ! win && doc (iFrame disposed?)"),void(s&&s(!1))
var c=10,l=300,u=n.contentWindow,d=n.contentDocument,f=parseInt(Math.round(parseFloat(u.getComputedStyle(d.documentElement).height))),h=f
0===e?y(t):b(t)
var p=function(i){return K&&i!==c&&console.log("tryAgainFunc - "+i+": "+r+"  <"+h+" -- "+f+">"),i--,0>i?(K&&console.error("tryAgainFunc abort: "+r),void(s&&s(!0))):void setTimeout(function(){try{if(!o.isIframeAlive(n))return K&&console.log("tryAgainFunc ! win && doc (iFrame disposed?)"),void(s&&s(!1))
var A=n.contentWindow,c=n.contentDocument,l=parseInt(Math.round(parseFloat(window.getComputedStyle(n).height))),u=parseInt(Math.round(parseFloat(A.getComputedStyle(c.documentElement).height)))
if(f!==u)return f=u,void p(i)
var d=l-u
if(Math.abs(d)>4){if(K&&(console.log("$$$ IFRAME HEIGHT ADJUST: "+r+"  ["+d+"]<"+h+" -- "+f+">"),console.log(a)),0===e?y(t):b(t),!o.isIframeAlive(n))return K&&console.log("tryAgainFunc ! win && doc (iFrame disposed?)"),void(s&&s(!1))
var A=n.contentWindow,c=n.contentDocument,g=parseInt(Math.round(parseFloat(A.getComputedStyle(c.documentElement).height))),m=parseInt(Math.round(parseFloat(window.getComputedStyle(n).height))),v=m-g
if(Math.abs(v)>4)return K&&(console.error("## IFRAME HEIGHT ADJUST: "+r+"  ["+v+"]<"+h+" -- "+f+">"),console.log(a)),void p(i)
K&&console.log(">> IFRAME HEIGHT ADJUSTED OKAY: "+r+"  ["+d+"]<"+h+" -- "+f+">")}}catch(w){return console.error(w),void(s&&s(!1))}s&&s(!0)},l)}
p(c)}function B(e,t){var n=ce.prevItem(e.currentSpineItem(),!0)
if(!n)return void t(!1)
var r=I(!0),i=T()
r.element().insertAfter(i.element()),r.loadSpineItem(n,function(i,o,A,a,s){if(i){b(r)
var c=j(r)
C(r)
var l=F(),u=I(),d=c.bottom-c.top
u.setHeight(d),u.element().insertBefore(e.element()),l+=d,v(l,void 0),u.loadSpineItem(n,function(e,r,i,o,A){if(e){var a=function(n){R(u,e,r,i,o,A),t(n)}
w(0,u,r[0],i.href,i.isFixedLayout(),i.isFixedLayout()?u.meta_width():0,"addToTopOf",a)}else console.error("Unable to open 2 "+n.href),C(u),t(!1)})}else console.error("Unable to open 1 "+n.href),C(r),t(!1)})}function b(e){e.currentSpineItem().isFixedLayout()?e.scaleToWidth(ne.width()):e.resizeIFrameToContent()}function x(e,t){var n=ce.nextItem(e.currentSpineItem(),!0)
if(!n)return void t(!1)
var r=(F(),I())
r.element().insertAfter(e.element()),r.loadSpineItem(n,function(e,i,o,A,a){if(e){var s=function(n){R(r,e,i,o,A,a),t(n)}
w(2,r,i[0],o.href,o.isFixedLayout(),o.isFixedLayout()?r.meta_width():0,"addToBottomOf",s)}else console.error("Unable to load "+n.href),t(!1)})}function E(){var e=[]
D(function(t){e.push(t)},!1)
for(var t=0,n=e.length;n>t;t++)C(e[t])}function C(e){e.element().remove()}function S(e){ne.css("left",e.left),ne.css("top",e.top),ne.css("right",e.right),ne.css("bottom",e.bottom)}function I(e){l.disablePageTransitions=!0
var t=new A(l,["content-doc-frame"],!0,d)
return t.on(A.SPINE_ITEM_OPEN_START,function(e,t){ae.emit(s.Events.CONTENT_DOCUMENT_LOAD_START,e,t)}),t.render(),ge&&t.setViewSettings(ge),e||t.element().data("pageView",t),u&&t.decorateIframe(),t}function O(e,t){var n=void 0
return D(function(t){return t.currentSpineItem()==e?(n=t,!1):!0},t),n}function D(e,t){for(var n=ne.children(),r=n.length,i=t?function(e){return e-1}:function(e){return e+1},o=t?function(e){return e>=0}:function(e){return r>e},A=t?r-1:0,a=A;o(a);a=i(a)){var s=n.eq(a),c=s.data("pageView")
if(c&&e(c)===!1)return}}function _(){var e=void 0
return D(function(t){return e=t,!1},!1),e}function T(){var e=void 0
return D(function(t){return e=t,!1},!0),e}function R(e,t,n,r,i,o){t&&i&&ae.emit(s.Events.CONTENT_DOCUMENT_LOADED,n,r)}function N(e,t){E()
var n=(F(),I())
ne.append(n.element()),n.loadSpineItem(e,function(e,r,i,o,A){if(e){var a=function(a){R(n,e,r,i,o,A),t(n)}
w(1,n,r[0],i.href,i.isFixedLayout(),i.isFixedLayout()?n.meta_width():0,"openPage",a)}else console.error("Unable to load "+i.href),C(n),n=void 0
t(n)})}function k(e,t){var n,r,i,o,A=0
if(void 0!==t.scrollTop)A=t.scrollTop
else if(void 0!==t.spineItemPageIndex){var a
n=P(),a=t.spineItemPageIndex<0?0:t.spineItemPageIndex>=n?n-1:t.spineItemPageIndex,A=a*M()}else if(e&&t.elementId){if(o=j(e),i=e.getNavigator(),r=i.getElementById(t.elementId),!r||!r.length)return void console.warn("Element id="+t.elementId+" not found!")
if(q(e,r,60))return void Q(t.initiator,t.spineItem,t.elementId)
A=i.getVerticalOffsetForElement(r)+o.top}else if(e&&t.elementCfi){if(o=j(e),i=e.getNavigator(),r=i.getElementByCfi(t.elementCfi),!r||!r.length)return void console.warn("Element cfi="+t.elementCfi+" not found!")
if(q(e,r,60))return void Q(t.initiator,t.spineItem,t.elementId)
A=i.getVerticalOffsetForElement(r)+o.top}else if(t.firstPage)A=0
else if(t.lastPage){if(n=P(),0===n)return
A=L()-M()-5}else e?(o=j(e),A=o.top):A=0
F()!=A?(fe=!0,v(A,t),setTimeout(function(){fe=!1},Ae+100)):Q(t.initiator,t.spineItem,t.elementId)}function P(){return Math.ceil(L()/M())}function Q(e,t,n){ae.emit(s.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:ae.getPaginationInfo(),initiator:e,spineItem:t,elementId:n})}function F(){return ne[0].scrollTop}function G(){return L()-(F()+M())}function M(){return ne.height()}function L(){return ne[0].scrollHeight}function U(){var e=[],t=W(-ie)
return D(function(n){if(z(n,t))e.push(n)
else if(e.length>0)return!1
return!0},!1),e}function H(){var e=U()
return e[0]}function z(e,t){var n=j(e)
return Y(V(n,t))>0}function j(e){var t={top:0,bottom:0},n=e.element(),r=n.position()
if(X){var i=n.offsetParent()
r.top-=i.scrollTop(),r.left-=i.scrollLeft()}return t.top=r.top+F(),t.bottom=t.top+e.getCalculatedPageHeight(),t}function W(e){0===e||e||(e=0)
var t={top:F()-e,bottom:F()+M()+e}
return t.top<0&&(t.top=0),t.bottom>L()&&(t.bottom=L()),t}function V(e,t){return{top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)}}function Y(e){return e.bottom<e.top?0:e.bottom-e.top}function q(e,t,n){var r=J(e,t)
return Z(r,n)}function Z(e,t){var n=W(),r=Math.min(Y(n),Y(e))
0===r&&(r=5)
var i=V(n,e),o=Y(i)/r*100
return o>=t}function J(e,t){var n=j(e),r={top:0,bottom:0}
return r.top=t.offset().top+n.top,r.bottom=r.top+t.height(),r}var K=!1,X=!1
try{var $=e.fn.jquery.split(".")
2==parseInt($[0])&&2==parseInt($[1])&&0==parseInt($[2])&&(X=!0)}catch(ee){console.error(ee)}e.extend(this,new n)
var te,ne,re,ie=5,oe=2e3,Ae=300,ae=this,se=l.$viewport,ce=l.spine,le=l.userStyles,ue=!1,de=!1,fe=!1,he=!1
this.isContinuousScroll=function(){return u},this.render=function(){var n=o.loadTemplate("scrolled_book_frame",{})
re=e(n),se.append(re),ne=e("#scrolled-content-frame",re),ne.css("overflow",""),ne.css("overflow-y","auto"),ne.css("overflow-x","hidden"),ne.css("-webkit-overflow-scrolling","touch"),ne.css("width","100%"),ne.css("height","100%"),ne.css("position","relative")
var r=d.viewerSettings()
r&&"undefined"!=typeof r.enableGPUHardwareAccelerationCSS3D||(r=new c({})),r.enableGPUHardwareAccelerationCSS3D&&ne.css("transform","translateZ(0)"),ae.applyStyles()
var i=t.debounce(m,Ae)
return ne.on("scroll",function(e){i(e),g()}),ae}
var pe=!1
this.remove=function(){re.remove()},this.onViewportResize=function(){ne&&(D(function(e){b(e)},!1),Q(ae),p())}
var ge=void 0
this.setViewSettings=function(e){ge=e,D(function(t){t.setViewSettings(e)},!1)},this.applyStyles=function(){o.setStyles(le.getStyles(),re.parent())
var e=o.Margins.fromElement(re)
S(e.padding)},this.applyBookStyles=function(){D(function(e){e.applyBookStyles()},!1)},this.openPage=function(e){ue=!0
var t=function(e,t){te=void 0,k(e,t),ue=!1,p(e)}
if(e.spineItem){var n=O(e.spineItem)
n?t(n,e):(te=e,he=!0,N(e.spineItem,function(n){setTimeout(function(){he=!1},Ae+100),n&&te?n.currentSpineItem()===te.spineItem?t(n,te):ae.openPage(te):Q(e.initiator,e.spineItem,e.elementId)}))}else t(void 0,e)},this.openPageNext=function(e){var t
G()>0&&(t=new a(void 0,e),t.scrollTop=F()+Math.min(G(),M()-ie),k(void 0,t))},this.openPagePrev=function(e){var t
F()>0&&(t=new a(void 0,e),t.scrollTop=F()-(M()-ie),t.scrollTop<0&&(t.scrollTop=0),k(void 0,t))},this.getFirstVisibleElementCfi=function(){var e=H()
return e?e.getNavigator().getFirstVisibleElementCfi(F()):void 0},this.getPaginationInfo=function(){for(var e,t,n,r,o,A,a,s,c=W(),l=c.bottom-c.top,u=new i(ce,!1),d=U(),f=0,h=d.length;h>f;f++)n=d[f],e=n.currentSpineItem(),r=j(n),o=Math.max(c.top-r.top,0),A=Math.max(r.bottom-c.bottom,0),a=Math.ceil(o/l),s=Math.ceil(A/l),t=a+s+1,u.addOpenPage(a,t,e.idref,e.index)
return u},this.bookmarkCurrentPage=function(){var e=H()
return e?new r(e.currentSpineItem().idref,ae.getFirstVisibleElementCfi()):new r("","")},this.getLoadedSpineItems=function(){var e=[]
return D(function(t){e.push(t.currentSpineItem())},!1),e},this.getElement=function(e,t){var n=void 0
return D(function(r){return r.currentSpineItem()==e?(n=r.getNavigator().getElement(t),!1):!0},!1),n},this.getElementByCfi=function(e,t,n,r,i){var o=void 0
return D(function(A){return A.currentSpineItem()==e?(o=A.getElementByCfi(e,t,n,r,i),!1):!0},!1),o?o:void console.error("spine item is not loaded")},this.getElementById=function(e,t){var n=void 0
return D(function(r){return r.currentSpineItem()==e?(n=r.getNavigator().getElementById(t),!1):!0},!1),n?n:void console.error("spine item is not loaded")},this.getFirstVisibleMediaOverlayElement=function(){var e,t=W(),n=void 0,r={top:0,bottom:0},i=!1
return D(function(o){if(e=j(o),r.top=Math.max(e.top,t.top)-e.top,r.bottom=Math.min(e.bottom,t.bottom)-e.top,Y(r)>0){if(i=!0,n=o.getNavigator().getFirstVisibleMediaOverlayElement(r))return!1}else if(i)return!1
return!0},!1),n},this.insureElementVisibility=function(t,n,r){var i=void 0
if(D(function(e){return e.currentSpineItem().idref===t?(i=e,!1):!0},!1),!i)return void console.warn("Page for element "+n+" not found")
var o=e(n),A=J(i,o)
if(!Z(A,60)){var s=ce.getItemById(t),c=new a(s,r)
c.scrollTop=A.top,ae.openPage(c)}},this.isElementCfiVisible=function(e,t){return!1}}
return l}),define("readium_shared_js/views/media_overlay_player",["jquery","../helpers","./audio_player","./media_overlay_element_highlighter","../globals","../models/smil_iterator","rangy","readium_cfi_js","./scroll_view"],function(e,t,n,r,i,o,A,a,s){var c=function(a,c){function l(e){var t=e.getSmil()
return w&&w.smil==t?w.reset():w=new o(t),w.goToPar(e),w.currentPar?void d():void console.error("playPar !_smilIterator.currentPar")}function u(){T.resetBlankPage(),Q=setTimeout(function(){if(Q){if(T.resetBlankPage(),!w||!w.currentPar)return void T.reset()
G=0,h(w.currentPar.audio.clipEnd+.1,2)}},2e3),c({isPlaying:!0})}function d(){if(W=!1,!w||!w.currentPar)return void console.error("playCurrentPar !_smilIterator || !_smilIterator.currentPar ???")
if(!w.smil.id)return B.reset(),T.resetTTS(),T.resetEmbedded(),void setTimeout(function(){u()},100)
if(w.currentPar.audio.src){T.resetTTS(),T.resetEmbedded(),T.resetBlankPage()
var n=w.currentPar.audio.clipEnd-w.currentPar.audio.clipBegin;(0>=n||P>n)&&(console.error("### MO XXX PAR OFFSET: "+P+" / "+n),P=0)
var r=t.ResolveContentRef(w.currentPar.audio.src,w.smil.href),i=D.resolveRelativeUrlMO(r),o=w.currentPar.audio.clipBegin+P
B.playFile(w.currentPar.audio.src,i,o)}else{P=0,B.reset()
var a=w.currentPar.element
if(a){G=0
var s=a.nodeName?a.nodeName.toLowerCase():void 0
"audio"===s||"video"===s?(T.resetTTS(),T.resetBlankPage(),O&&T.resetEmbedded(),O=a,O.pause(),O.currentTime=0,O.play(),e(O).on("ended",T.onEmbeddedEnd),I=!0,setTimeout(function(){c({isPlaying:!0})},80)):(T.resetEmbedded(),T.resetBlankPage(),x=a.textContent,x&&""!=x?H(x):x=void 0)}var l=w.currentPar.cfi
if(l){G=0,T.resetEmbedded(),T.resetBlankPage(),R.reset()
var d=l.cfiTextParent.ownerDocument,f="epubcfi("+l.partialStartCfi+")",h=EPUBcfi.getTextTerminusInfoWithPartialCFI(f,d,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),p="epubcfi("+l.partialEndCfi+")",g=EPUBcfi.getTextTerminusInfoWithPartialCFI(p,d,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])
if(A){var m=A.createRange(d)
m.setStartAndEnd(h.textNode[0],h.textOffset,g.textNode[0],g.textOffset),x=m.toString()}else x=void 0
x&&""!=x?H(x):x=void 0}}P=0,y()}function f(e){T.pause()
var t=e?D.media_overlay.getNextSmil(w.smil):D.media_overlay.getPreviousSmil(w.smil)
if(t){if(w=new o(t),w.currentPar){if(!e)for(;!w.isLast();)w.next()
a.openContentUrl(w.currentPar.text.src,w.smil.href,T)}}else console.log("No more SMIL"),T.reset()}function h(e,t,n){if(G=e,F=!1,w&&w.currentPar){var r=w.currentPar,i=w.currentPar.audio
if(!(e>M&&e<=i.clipEnd)){F=!0
var o=B.isPlaying()
o&&6===t&&console.debug("from userNav _audioPlayer.isPlaying() ???")
var A=e>i.clipEnd,a=!Y&&6!==t&&A,s=w&&w.smil&&w.smil.spineItemId?w.smil.spineItemId:k&&k.spineItem&&k.spineItem.idref?k.spineItem.idref:void 0
if(a&&s&&k&&k.paginationInfo&&k.paginationInfo.openPages&&k.paginationInfo.openPages.length>1){var c=0,l=k.paginationInfo.openPages[c]
s===l.idref&&(a=!1)}if(A?w.next():w.previous(),!w.currentPar)return void(a?(V=!0,T.reset()):f(A))
if(!w.currentPar.audio)return void T.pause()
if(_.mediaOverlaysSkipSkippables){for(var u=!1,p=w.currentPar;p;){if(p.isSkippable&&p.isSkippable(_.mediaOverlaysSkippables)){u=!0
break}p=p.parent}if(u){console.log("MO SKIP: "+p.epubtype),T.pause()
var g=A?w.currentPar.audio.clipEnd+.1:M-1
return void h(g,t,!0)}}if(!o&&(w.currentPar.element||w.currentPar.cfi&&w.currentPar.cfi.cfiTextParent)){var m=R.adjustParToSeqSyncGranularity(w.currentPar)
if(m&&m!==w.currentPar){var v=R.adjustParToSeqSyncGranularity(r)
if(v&&(v===m||!A)){if(v===m){do A?w.next():w.previous()
while(w.currentPar&&w.currentPar.hasAncestor(v))
if(!w.currentPar)return void(a?(V=!0,T.reset()):f(A))}if(!A){var b=R.adjustParToSeqSyncGranularity(w.currentPar)
if(b&&b!==w.currentPar){var x=w.currentPar,E=void 0
do E=w.currentPar,w.previous()
while(w.currentPar&&w.currentPar.hasAncestor(b))
w.currentPar?(w.next(),w.currentPar.hasAncestor(b)||console.error("adjustParToSeqSyncGranularity !_smilIterator.currentPar.hasAncestor(landed) ???")):(w.reset(),w.currentPar!==E&&console.error("adjustParToSeqSyncGranularity _smilIterator.currentPar !=== innerPar???")),w.currentPar||(console.error("adjustParToSeqSyncGranularity !_smilIterator.currentPar ?????"),w.goToPar(x))}}}}}return B.isPlaying()&&w.currentPar.audio.src&&w.currentPar.audio.src==B.currentSmilSrc()&&e>=w.currentPar.audio.clipBegin&&e<=w.currentPar.audio.clipEnd?void y():void d()}}}function p(t){if(!U||U[0].ownerDocument!==t[0].ownerDocument){var n=".tts_on{background-color:red;color:white;} .tts_off{}"
$head=e("head",t[0].ownerDocument.documentElement),U=e("<style type='text/css'> </style>").appendTo($head),U.append(n)}}function g(){m()
var e=function(){if(w&&w.currentPar){var e=w.smil
if(e.mo){var t=G-w.currentPar.audio.clipBegin
if(!(0>=t)){for(var n=e.mo.smil_models.indexOf(e),r=new o(e),i=-1;r.currentPar&&(i++,r.currentPar!=w.currentPar);)r.next()
c({playPosition:t,smilIndex:n,parIndex:i})}}}}
setTimeout(e,500),j=setInterval(e,1500)}function m(){G=0,void 0!==j&&clearInterval(j),j=void 0}function v(){return m(),F?void(F=!1):w&&w.currentPar?void h(w.currentPar.audio.clipEnd+.1,5):void T.reset()}function y(){if(w&&w.currentPar){if(w.currentPar.text.srcFragmentId&&w.currentPar.text.srcFragmentId.length>0){if(w.currentPar.element)return void(R.isElementHighlighted(w.currentPar)||(R.highlightElement(w.currentPar,D.media_overlay.activeClass,D.media_overlay.playbackActiveClass),W||a.insureElementVisibility(w.currentPar.getSmil().spineItemId,w.currentPar.element,T)))
if(w.currentPar.cfi)return void(R.isCfiHighlighted(w.currentPar)||(R.highlightCfi(w.currentPar,D.media_overlay.activeClass,D.media_overlay.playbackActiveClass),W||a.insureElementVisibility(w.currentPar.getSmil().spineItemId,w.currentPar.cfi.cfiTextParent,T)))}if(!w.currentPar.element){var e=w.currentPar.text.src,t=w.smil.href
w=void 0,a.openContentUrl(e,t,T)}}}var w=void 0,B=new n(c,h,v,g,m),b=!1,x=void 0,E="undefined"!=typeof window.speechSynthesis&&null!=speechSynthesis,C=void 0,S=!1,I=!1,O=void 0
this.isPlaying=function(){return B.isPlaying()||b||I||Q}
var D=a["package"](),_=a.viewerSettings(),T=this,R=new r(a)
a.on(i.Events.READER_VIEW_DESTROYED,function(){T.reset()}),this.applyStyles=function(){R.reDo()},this.onSettingsApplied=function(){B.setRate(_.mediaOverlaysRate),B.setVolume(_.mediaOverlaysVolume/100)},T.onSettingsApplied(),a.on(i.Events.SETTINGS_APPLIED,this.onSettingsApplied,this)
var N=!1
this.onDocLoadStart=function(){var e=T.isPlaying()
e&&(N=!0,T.pause())}
var k=void 0
this.onPageChanged=function(t){k=t
var n=V
V=!1
var r=N
if(N=!1,!t)return void T.reset()
var i=void 0,o="/99!",A="epubcfi"
if(t.elementId||t.initiator==T){for(var s=a.getLoadedSpineItems(),c=a.spine().isRightToLeft(),u=c?s.length-1:0;c&&u>=0||!c&&u<s.length;u+=c?-1:1){var f=s[u]
if(!t.spineItem||t.spineItem==f){if(t.elementId&&0===t.elementId.indexOf(A)){R.reset()
var h=t.elementId.substr(A.length+1,t.elementId.length-A.length-2)
0===h.indexOf(o)&&(h=h.substr(o.length,h.length-o.length))
var p=h.split(",")
if(p&&3===p.length)try{var g=p[0]+p[1],m=a.getElementByCfi(f,g,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])
if(i=m&&m.length>0?m[0]:void 0){i.nodeType===Node.TEXT_NODE&&(i=i.parentNode)
break}}catch(v){console.error(v)}else try{var m=a.getElementByCfi(f,h,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])
if(i=m&&m.length>0?m[0]:void 0){i.nodeType===Node.TEXT_NODE&&(i=i.parentNode)
break}}catch(v){console.error(v)}}if(!i){if(t.initiator!=T||t.elementId){var m=a.getElementById(f,t.elementId)
i=m&&m.length>0?m[0]:void 0}else{var m=a.getElement(f,"body")
i=m&&m.length>0?m[0]:void 0}if(i)break}}}i||console.error("paginationData.elementId BUT !element: "+t.elementId)}var B=T.isPlaying()||r
if(!w||!w.currentPar){if(t.initiator!==T)return P=0,T.reset(),void(t.elementId&&i?(B||n)&&(t.elementIdResolved=i,T.toggleMediaOverlayRefresh(t)):(B||n)&&T.toggleMediaOverlay())
if(!i)return console.error("!element: "+t.elementId),void(P=0)
var b=e(i).data("mediaOverlayData")
if(!b)return console.error("!moData: "+t.elementId),void(P=0)
var x=b.par?b.par:b.pars[0]
if(b.pars)for(var E=0;E<b.pars.length;E++){var C=b.pars[E]
if(t.elementId===C.cfi.smilTextSrcCfi){x=C
break}}return void l(x)}var S=!w.currentPar.element&&!w.currentPar.cfi
if(S&&console.error("!! _smilIterator.currentPar.element ??"),t.initiator==T){var I=t.elementId&&t.elementId!==w.currentPar.text.srcFragmentId
if(I&&console.error("!! paginationData.elementId !== _smilIterator.currentPar.text.srcFragmentId"),I||S)return void(P=0)
B?y():d()}else{if(!B&&!n)return void T.reset()
if(!t.elementId,t.elementId&&!i)return
t.elementId&&(t.elementIdResolved=i),T.toggleMediaOverlayRefresh(t)}}
var P=0,Q=void 0,F=!1,G=0,M=-999
this.touchInit=function(){var e=B.touchInit()
e&&E&&H("o",0)}
var L=function(e){var t=["p","div","pagenum","td","table","li","ul","ol"],n=[",",";",".","-","??","??","?","!"],r=function(e,t){if(!(e.word.length<=0)){var n=e.text.length
t.spanMap[n]=e.counter,e.text+=e.word,e.markup+=e.html.substring(0,e.wordStart)+'<span class="tts_off" id="tts_'+e.counter+'">'+e.html.substring(e.wordStart,e.wordEnd)+"</span>"+e.html.substring(e.wordEnd,e.html.length),e.word="",e.html="",e.wordStart=-1,e.wordEnd=-1,e.counter++}},i={element:e,innerHTML_tts:"",spanMap:{},text:"",lastCharIndex:void 0}
i.element.innerHTML_original=e.innerHTML
for(var o={inTag:!1,counter:0,wordStart:-1,wordEnd:-1,text:"",markup:"",word:"",html:""},A=i.element.innerHTML_original.length,a=0;A>=a;){if(o.inTag){if(o.html+=i.element.innerHTML_original[a],">"==i.element.innerHTML_original[a]){o.inTag=!1
var s=o.html.match(/<\/(.*?)>$/)
s&&t.indexOf(s[1])>-1&&(r(o,i),o.text+=" ")}}else a==A||i.element.innerHTML_original[a].match(/\s/)?(r(o,i),A>a&&(o.text+=i.element.innerHTML_original[a],o.markup+=i.element.innerHTML_original[a])):n.indexOf(i.element.innerHTML_original[a])>-1?(r(o,i),o.wordStart=o.html.length,o.wordEnd=o.html.length+1,o.word+=i.element.innerHTML_original[a],o.html+=i.element.innerHTML_original[a],r(o,i)):"<"==i.element.innerHTML_original[a]?(o.inTag=!0,o.html+=i.element.innerHTML_original[a]):(0==o.word.length&&(o.wordStart=o.html.length),o.wordEnd=o.html.length+1,o.word+=i.element.innerHTML_original[a],o.html+=i.element.innerHTML_original[a])
a++}return i.text=o.text,i.innerHTML_tts=o.markup,i.element.innerHTML=i.innerHTML_tts,i},U=void 0,H=function(t,n){function r(e){e||window.speechSynthesis.pending?(console.debug("TTS cancel before speak"),window.speechSynthesis.cancel(),setTimeout(function(){r(!1)},5)):o()}function o(){C=new SpeechSynthesisUtterance,S&&A&&(C.tokenData=A,C.onboundary=function(e){if(C){console.debug("TTS boundary: "+e.name+" / "+e.charIndex)
var t=e.target.tokenData
if(t&&t.spanMap.hasOwnProperty(e.charIndex)){var n;[].forEach.call(t.element.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF "+e.id),e.className="tts_off"})
var n="tts_"+t.spanMap[e.charIndex]
console.debug("TTS charIndex ID: "+n)
var r=t.element.querySelector("#"+n)
r&&(console.debug("TTS ON"),r.className="tts_on"),t.lastCharIndex=e.charIndex}}}),C.onend=function(e){if(C)if(console.debug("TTS ended"),S){var t=e.target.tokenData,n=!e.forceSkipEnd&&C===e.target&&(!t||t.element.innerHTML_original)
t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[].forEach.call(t.element.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF (end)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0),n?T.onTTSEnd():console.debug("TTS end SKIPPED")}else T.onTTSEnd()},C.onerror=function(e){if(C&&(console.error("TTS error"),console.debug(C.text),console.debug(window.speechSynthesis.paused),console.debug(window.speechSynthesis.pending),console.debug(window.speechSynthesis.speaking),S)){var t=e.target.tokenData
t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[].forEach.call(t.element.ownerDocument.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF (error)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0)}}
var e=n||B.getVolume()
C.volume=e,C.rate=B.getRate(),C.pitch=1,C.text=d,window.speechSynthesis.speak(C),window.speechSynthesis.paused&&(console.debug("TTS resume"),window.speechSynthesis.resume())}var A=void 0,s=w&&w.currentPar?w.currentPar:void 0,l=s?s.element:void 0
s?s.cfi:void 0
if((!n||n>0)&&(setTimeout(function(){c({isPlaying:!0})},80),b=!0,S&&l)){var u=e(l)
p(u),l.innerHTML_original&&(l.innerHTML=l.innerHTML_original,l.innerHTML_original=void 0),A=L(l)}if(!E)return void a.emit(i.Events.MEDIA_OVERLAY_TTS_SPEAK,{tts:t})
if(!t&&window.speechSynthesis.paused)return void window.speechSynthesis.resume()
var d=t||x
d&&(C&&(S&&(C.onend&&C.onend({forceSkipEnd:!0,target:C}),C.tokenData=void 0,C.onboundary=void 0),C.onend=void 0,C.onerror=void 0,C=void 0),console.debug("paused: "+window.speechSynthesis.paused),console.debug("speaking: "+window.speechSynthesis.speaking),console.debug("pending: "+window.speechSynthesis.pending),r(!0))},z=function(){return c({isPlaying:!1}),b=!1,E?void window.speechSynthesis.pause():void a.emit(i.Events.MEDIA_OVERLAY_TTS_STOP,void 0)},j=void 0
this.onEmbeddedEnd=function(){return G=0,I=!1,w&&w.currentPar?void h(w.currentPar.audio.clipEnd+.1,3):void T.reset()},this.onTTSEnd=function(){return G=0,b=!1,w&&w.currentPar?void h(w.currentPar.audio.clipEnd+.1,4):void T.reset()},this.escape=function(){if(!w||!w.currentPar)return void this.toggleMediaOverlay()
if(!T.isPlaying())return void T.play()
if(_.mediaOverlaysEscapeEscapables)for(var e=w.currentPar;e;){if(e.isEscapable&&e.isEscapable(_.mediaOverlaysEscapables)){do w.next()
while(w.currentPar&&w.currentPar.hasAncestor(e))
return w.currentPar?void d():void f(!0)}e=e.parent}this.nextMediaOverlay(!0)},this.playUserPar=function(e){if(T.isPlaying()&&T.pause(),e.element||e.cfi&&e.cfi.cfiTextParent){var t=R.adjustParToSeqSyncGranularity(e)
if(t&&t!==e){var n=function(e){if(e.nodeType&&"par"===e.nodeType)return e
if(e.children&&!(e.children.length<=0))for(var t=0;t<e.children.length;t++){var r=e.children[t],i=n(r)
if(i)return i}},r=n(t)
r&&(e=r)}}l(e)},this.resetTTS=function(){x=void 0,z()},this.resetBlankPage=function(){if(Q){var e=Q
Q=void 0,clearTimeout(e)}Q=void 0,c({isPlaying:!1})},this.resetEmbedded=function(){O&&(e(O).off("ended",T.onEmbeddedEnd),O.pause()),O=void 0,c({isPlaying:!1}),I=!1},this.reset=function(){P=0,B.reset(),T.resetTTS(),T.resetEmbedded(),T.resetBlankPage(),R.reset(),w=void 0,F=!1},this.play=function(){if(w&&w.smil&&!w.smil.id)return void u()
if(O)I=!0,O.play(),c({isPlaying:!0})
else if(x)H(void 0)
else if(!B.play())return console.log("Audio player was dead, reactivating..."),this.reset(),void this.toggleMediaOverlay()
y()},this.pause=function(){W=!1,Q?this.resetBlankPage():I?(I=!1,O&&O.pause(),c({isPlaying:!1})):b?z():B.pause(),R.reset()},this.isMediaOverlayAvailable=function(){var e=a.getFirstVisibleMediaOverlayElement()
return"undefined"!=typeof e},this.nextOrPreviousMediaOverlay=function(e){if(T.isPlaying())T.pause()
else if(w&&w.currentPar)return void T.play()
if(!w)return void this.toggleMediaOverlay()
var t=e?M-1:w.currentPar.audio.clipEnd+.1
h(t,6)},this.nextMediaOverlay=function(){this.nextOrPreviousMediaOverlay(!1)},this.previousMediaOverlay=function(){this.nextOrPreviousMediaOverlay(!0)},this.mediaOverlaysOpenContentUrl=function(e,t,n){P=n,w=void 0,a.openContentUrl(e,t,T)},this.toggleMediaOverlay=function(){return T.isPlaying()?void T.pause():w?void T.play():void this.toggleMediaOverlayRefresh(void 0)}
var W=!1
this.toggleMediaOverlayRefresh=function(t){var n=a.getLoadedSpineItems(),r=a.spine().isRightToLeft(),i=void 0,A=T.isPlaying()
if(A&&w){var c=t.initiator&&t.initiator instanceof s
if(c&&_.mediaOverlaysPreservePlaybackWhenScroll)return void(W=!0)
i=w.currentPar,T.pause()}W=!1
var l=t&&t.elementIdResolved?t.elementIdResolved:void 0,u=t&&t.elementId?t.elementId:void 0
if(!l){u&&console.error("[WARN] id did not resolve to element?")
for(var f=r?n.length-1:0;r&&f>=0||!r&&f<n.length;f+=r?-1:1){var h=n[f]
if(h){if(!t||!t.spineItem||t.spineItem==h){if(u){var p=a.getElementById(h,u)
l=p&&p.length>0?p[0]:void 0}else if(h.isFixedLayout()&&t&&t.paginationInfo&&t.paginationInfo.openPages){var g=0
if(t.paginationInfo.openPages[g]&&t.paginationInfo.openPages[g].idref&&t.paginationInfo.openPages[g].idref===h.idref){var p=a.getElement(h,"body")
l=p&&p.length>0?p[0]:void 0}}if(l)break}}else console.error("spineItems[i] is undefined??")}}if(l||(l=a.getFirstVisibleMediaOverlayElement()),!l)return void T.reset()
var m=e(l).data("mediaOverlayData")
if(!m){for(var v=!1,y=function(t){if(!t)return!1
for(var n=0;n<t.length;n++){if(l===t[n]&&(v=!0),v){var r=e(t[n]).data("mediaOverlayData")
if(r)return m=r,!0}var i=y(t[n].children)
if(i)return!0}return!1},B=l;B&&"body"!==B.nodeName.toLowerCase();)B=B.parentNode
if(!B)return void T.reset()
y([B])}if(!m)return void T.reset()
var b=m.par?m.par:m.pars[0],x=b.getSmil()
return w&&w.smil==x?w.reset():w=new o(x),w.goToPar(b),!w.currentPar&&u&&(w.reset(),w.findTextId(u)),w.currentPar?void(A&&i&&i===w.currentPar?T.play():d()):void T.reset()},this.isPlayingCfi=function(){return w&&w.currentPar&&w.currentPar.cfi}
var V=!1,Y=!0
this.setAutomaticNextSmil=function(e){Y=e}}
return c}),define("readium_shared_js/models/spine",["./spine_item","../helpers","URIjs"],function(e,t,n){var r=function(t,r){function i(e){return!l||"no"!==e.linear}function o(e){if(a(e)){var t=c.items[e]
return i(t)?t:o(t.index+1)}}function A(e){if(a(e)){var t=c.items[e]
return i(t)?t:A(t.index-1)}}function a(e){return e>=0&&e<c.items.length}function s(){for(var t=c.items.length,n=!1,r=c.isLeftToRight()?e.SPREAD_LEFT:e.SPREAD_RIGHT,i=0;t>i;i++){var o=c.items[i]
if(!o.page_spread){var A=o.isRenditionSpreadAllowed()?n?r:e.alternateSpread(r):e.SPREAD_CENTER
o.setSpread(A)}n=!o.isRenditionSpreadAllowed()||o.page_spread!=r}}var c=this
this.items=[],this.direction="ltr",this["package"]=t
var l=!1
if(this.handleLinear=function(e){l=e},this.isValidLinearItem=function(e){return a(e)?i(this.item(e)):void 0},this.prevItem=function(e){return A(e.index-1)},this.nextItem=function(e){return o(e.index+1)},this.getItemUrl=function(e){return c["package"].resolveRelativeUrl(e.href)},this.first=function(){return o(0)},this.last=function(){return A(this.items.length-1)},this.isFirstItem=function(e){return c.first()===e},this.isLastItem=function(e){return c.last()===e},this.item=function(e){return a(e)?c.items[e]:void 0},this.isRightToLeft=function(){return"rtl"==c.direction},this.isLeftToRight=function(){return!c.isRightToLeft()},this.getItemById=function(e){for(var t=c.items.length,n=0;t>n;n++)if(c.items[n].idref==e)return c.items[n]},this.getItemByHref=function(e){for(var t=new n(c["package"].resolveRelativeUrl(e)).normalizePathname().pathname(),r=c.items.length,i=0;r>i;i++){var o=new n(c["package"].resolveRelativeUrl(c.items[i].href)).normalizePathname().pathname()
if(t==o)return c.items[i]}},r){r.direction&&(this.direction=r.direction)
for(var u=r.items.length,d=0;u>d;d++){var f=new e(r.items[d],d,this)
this.items.push(f)}s()}}
return r}),define("readium_shared_js/models/smil_model",["../helpers"],function(e){var t={}
t.SmilNode=function(e){this.parent=e,this.id="",this.getSmil=function(){for(var e=this;e.parent;)e=e.parent
return e},this.hasAncestor=function(e){for(var t=this.parent;t;){if(t==e)return!0
t=t.parent}return!1}},t.TimeContainerNode=function(e){this.parent=e,this.children=void 0,this.index=void 0,this.epubtype="",this.isEscapable=function(e){if(""===this.epubtype)return!1
var t=this.getSmil()
if(!t.mo)return!1
var n=t.mo.escapables
e.length>0&&(n=e)
for(var r=0;r<n.length;r++)if(this.epubtype.indexOf(n[r])>=0)return!0
return!1},this.isSkippable=function(e){if(""===this.epubtype)return!1
var t=this.getSmil()
if(!t.mo)return!1
var n=t.mo.skippables
e.length>0&&(n=e)
for(var r=0;r<n.length;r++)if(this.epubtype.indexOf(n[r])>=0)return!0
return!1}},t.TimeContainerNode.prototype=new t.SmilNode,t.MediaNode=function(e){this.parent=e,this.src=""},t.MediaNode.prototype=new t.SmilNode,t.SeqNode=function(e){this.parent=e,this.children=[],this.nodeType="seq",this.textref="",this.durationMilliseconds=function(){for(var e=this.getSmil(),t=0,n=0;n<this.children.length;n++){var r=this.children[n]
if("par"===r.nodeType){if(!r.audio)continue
if(r.text&&(!r.text.manifestItemId||r.text.manifestItemId!=e.spineItemId))continue
var i=r.audio.clipDurationMilliseconds()
t+=i}else"seq"===r.nodeType&&(t+=r.durationMilliseconds())}return t},this.clipOffset=function(e,t){for(var n=this.getSmil(),r=0;r<this.children.length;r++){var i=this.children[r]
if("par"===i.nodeType){if(i==t)return!0
if(!i.audio)continue
if(i.text&&(!i.text.manifestItemId||i.text.manifestItemId!=n.spineItemId))continue
var o=i.audio.clipDurationMilliseconds()
e.offset+=o}else if("seq"===i.nodeType){var A=i.clipOffset(e,t)
if(A)return!0}}return!1},this.parallelAt=function(e){for(var t=this.getSmil(),n=0,r=0;r<this.children.length;r++){var i=e-n,o=this.children[r]
if("par"===o.nodeType){if(!o.audio)continue
if(o.text&&(!o.text.manifestItemId||o.text.manifestItemId!=t.spineItemId))continue
var A=o.audio.clipDurationMilliseconds()
if(A>0&&A>=i)return o
n+=A}else if("seq"===o.nodeType){var a=o.parallelAt(i)
if(a)return a
n+=o.durationMilliseconds()}}},this.nthParallel=function(e,t){for(var n=0;n<this.children.length;n++){var r=this.children[n]
if("par"===r.nodeType){if(t.count++,t.count==e)return r}else if("seq"===r.nodeType){var i=r.nthParallel(e,t)
if(i)return i}}}},t.SeqNode.prototype=new t.TimeContainerNode,t.ParNode=function(e){this.parent=e,this.children=[],this.nodeType="par",this.text=void 0,this.audio=void 0,this.element=void 0,this.getFirstSeqAncestorWithEpubType=function(e,t){if(e)for(var n=t?this:this.parent;n;){if(n.epubtype&&n.epubtype.indexOf(e)>=0)return n
n=n.parent}}},t.ParNode.prototype=new t.TimeContainerNode,t.TextNode=function(t){this.parent=t,this.nodeType="text",this.srcFile="",this.srcFragmentId="",this.manifestItemId=void 0,this.updateMediaManifestItemId=function(){var t=this.getSmil()
if(t.href&&t.href.length){for(var n=this.srcFile?this.srcFile:this.src,r=e.ResolveContentRef(n,t.href),i=t.mo["package"].resolveRelativeUrlMO(r),o=0;o<t.mo["package"].spine.items.length;o++){var A=t.mo["package"].spine.items[o],a=t.mo["package"].resolveRelativeUrl(A.href)
if(a===i)return void(this.manifestItemId=A.idref)}console.error("Cannot set the Media ManifestItemId? "+this.src+" && "+t.href)}}},t.TextNode.prototype=new t.MediaNode,t.AudioNode=function(e){this.parent=e,this.nodeType="audio",this.clipBegin=0,this.MAX=1234567890.1,this.clipEnd=this.MAX,this.clipDurationMilliseconds=function(){var e=1e3*this.clipBegin,t=1e3*this.clipEnd
return this.clipEnd>=this.MAX||e>=t?0:t-e}},t.AudioNode.prototype=new t.MediaNode
var n=function(){this.parent=void 0,this.children=[],this.id=void 0,this.href=void 0,this.duration=void 0,this.mo=void 0,this.parallelAt=function(e){return this.children[0].parallelAt(e)},this.nthParallel=function(e){var t={count:-1}
return this.children[0].nthParallel(e,t)},this.clipOffset=function(e){var t={offset:0}
return this.children[0].clipOffset(t,e)?t.offset:0},this.durationMilliseconds_Calculated=function(){return this.children[0].durationMilliseconds()}
var e=[]
this.hasSync=function(t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0
return!1},this.addSync=function(t){if(t)for(var n=t.split(" "),r=0;r<n.length;r++){var i=n[r].trim()
i.length>0&&!this.hasSync(i)&&e.push(i)}}}
return n.fromSmilDTO=function(e,r){r.DEBUG&&console.debug("Media Overlay DTO import...")
var i=0,o=function(){for(var e="",t=0;i>t;t++)e+="   "
return e},A=new n
A.id=e.id,A.spineItemId=e.spineItemId,A.href=e.href,A.smilVersion=e.smilVersion,A.duration=e.duration,A.duration&&A.duration.length&&A.duration.length>0&&(console.error("SMIL duration is string, parsing float... ("+A.duration+")"),A.duration=parseFloat(A.duration)),A.mo=r,A.mo.DEBUG&&(console.log("JS MO smilVersion="+A.smilVersion),console.log("JS MO id="+A.id),console.log("JS MO spineItemId="+A.spineItemId),console.log("JS MO href="+A.href),console.log("JS MO duration="+A.duration))
var a=function(e,t,n,r){e in t?(e in n||console.debug("property "+e+" not declared in smil node "+n.nodeType),n[e]=t[e],A.mo.DEBUG&&console.log(o()+"JS MO: ["+e+"="+n[e]+"]")):r&&console.log("Required property "+e+" not found in smil node "+t.nodeType)},s=function(e,n){var r
if("seq"==e.nodeType)A.mo.DEBUG&&console.log(o()+"JS MO seq"),r=new t.SeqNode(n),a("textref",e,r,!(!n||!n.parent)),a("id",e,r),a("epubtype",e,r),r.epubtype&&r.getSmil().addSync(r.epubtype),i++,c(e,r),i--
else if("par"==e.nodeType){A.mo.DEBUG&&console.log(o()+"JS MO par"),r=new t.ParNode(n),a("id",e,r),a("epubtype",e,r),r.epubtype&&r.getSmil().addSync(r.epubtype),i++,c(e,r),i--
for(var s=0,l=r.children.length;l>s;s++){var u=r.children[s]
"text"==u.nodeType?r.text=u:"audio"==u.nodeType?r.audio=u:console.error("Unexpected smil node type: "+u.nodeType)}var d=!1
if(d||!r.audio){var f=new t.AudioNode(r)
f.clipBegin=0,f.clipEnd=f.MAX,f.src=void 0,r.audio=f}}else if("text"==e.nodeType)A.mo.DEBUG&&console.log(o()+"JS MO text"),r=new t.TextNode(n),a("src",e,r,!0),a("srcFile",e,r,!0),a("srcFragmentId",e,r,!1),a("id",e,r),r.updateMediaManifestItemId()
else{if("audio"!=e.nodeType)return void console.error("Unexpected smil node type: "+e.nodeType)
A.mo.DEBUG&&console.log(o()+"JS MO audio"),r=new t.AudioNode(n),a("src",e,r,!0),a("id",e,r),a("clipBegin",e,r),r.clipBegin&&r.clipBegin.length&&r.clipBegin.length>0&&(console.error("SMIL clipBegin is string, parsing float... ("+r.clipBegin+")"),r.clipBegin=parseFloat(r.clipBegin)),r.clipBegin<0&&(A.mo.DEBUG&&console.log(o()+"JS MO clipBegin adjusted to ZERO"),r.clipBegin=0),a("clipEnd",e,r),r.clipEnd&&r.clipEnd.length&&r.clipEnd.length>0&&(console.error("SMIL clipEnd is string, parsing float... ("+r.clipEnd+")"),r.clipEnd=parseFloat(r.clipEnd)),r.clipEnd<=r.clipBegin&&(A.mo.DEBUG&&console.log(o()+"JS MO clipEnd adjusted to MAX"),r.clipEnd=r.MAX)}return r},c=function(e,t){for(var n=e.children.length,r=0;n>r;r++){var i=s(e.children[r],t)
i.index=r,t.children.push(i)}}
return c(e,A),A},n}),define("readium_shared_js/models/media_overlay",["./smil_model"],function(e){var t=function(e){this["package"]=e,this.parallelAt=function(e){for(var t=0,n=0;n<this.smil_models.length;n++){var r=this.smil_models[n],i=e-t,o=r.parallelAt(i)
if(o)return o
t+=r.durationMilliseconds_Calculated()}},this.percentToPosition=function(e,t,n,r){(0>e||e>100)&&(e=0)
var i=this.durationMilliseconds_Calculated(),o=i*(e/100)
if(n.par=this.parallelAt(o),n.par){var A=n.par.getSmil()
if(A){for(var a=0,s=0;s<this.smil_models.length&&(t.smilData=this.smil_models[s],t.smilData!=A);s++)a+=t.smilData.durationMilliseconds_Calculated()
r.milliseconds=o-(a+t.smilData.clipOffset(n.par))}}},this.durationMilliseconds_Calculated=function(){for(var e=0,t=0;t<this.smil_models.length;t++){var n=this.smil_models[t]
e+=n.durationMilliseconds_Calculated()}return e},this.smilAt=function(e){return 0>e||e>=this.smil_models.length?void 0:this.smil_models[e]},this.positionToPercent=function(e,t,n){if(e>=this.smil_models.length)return-1
for(var r=0,i=0;e>i;i++){var o=this.smil_models[i]
r+=o.durationMilliseconds_Calculated()}var A=this.smil_models[e],a=A.nthParallel(t)
if(!a)return-1
var s=r+A.clipOffset(a)+n,c=this.durationMilliseconds_Calculated(),l=s/c*100
return l},this.smil_models=[],this.skippables=[],this.escapables=[],this.duration=void 0,this.narrator=void 0,this.activeClass=void 0,this.playbackActiveClass=void 0,this.DEBUG=!1,this.getSmilBySpineItem=function(e){if(e)for(var t=0,n=this.smil_models.length;n>t;t++){var r=this.smil_models[t]
if(r.spineItemId===e.idref)return e.media_overlay_id!==r.id&&console.error("SMIL INCORRECT ID?? "+e.media_overlay_id+" /// "+r.id),r}},this.getNextSmil=function(e){var t=this.smil_models.indexOf(e)
if(-1!=t&&t!=this.smil_models.length-1)return this.smil_models[t+1]},this.getPreviousSmil=function(e){var t=this.smil_models.indexOf(e)
if(-1!=t&&0!=t)return this.smil_models[t-1]}}
return t.fromDTO=function(n,r){var i=new t(r)
if(!n)return console.debug("No Media Overlay."),i
i.duration=n.duration,i.duration&&i.duration.length&&i.duration.length>0&&(console.error("SMIL total duration is string, parsing float... ("+i.duration+")"),i.duration=parseFloat(i.duration)),i.DEBUG&&console.debug("Media Overlay Duration (TOTAL): "+i.duration),i.narrator=n.narrator,i.DEBUG&&console.debug("Media Overlay Narrator: "+i.narrator),i.activeClass=n.activeClass,i.DEBUG&&console.debug("Media Overlay Active-Class: "+i.activeClass),i.playbackActiveClass=n.playbackActiveClass,i.DEBUG&&console.debug("Media Overlay Playback-Active-Class: "+i.playbackActiveClass)
var o=n.smil_models.length
i.DEBUG&&console.debug("Media Overlay SMIL count: "+o)
for(var A=0;o>A;A++){var a=e.fromSmilDTO(n.smil_models[A],i)
i.smil_models.push(a),i.DEBUG&&console.debug("Media Overlay Duration (SPINE ITEM): "+a.duration)}o=n.skippables.length,i.DEBUG&&console.debug("Media Overlay SKIPPABLES count: "+o)
for(var A=0;o>A;A++)i.skippables.push(n.skippables[A])
o=n.escapables.length,i.DEBUG&&console.debug("Media Overlay ESCAPABLES count: "+o)
for(var A=0;o>A;A++)i.escapables.push(n.escapables[A])
return i},t}),define("readium_shared_js/models/package_data",[],function(){var e={rootUrl:"",rootUrlMO:"",rendering_layout:"",spine:{direction:"ltr",items:[{href:"",idref:"",page_spread:"",rendering_layout:""}]}}
return e}),define("readium_shared_js/models/package",["../helpers","./spine_item","./spine","./media_overlay","./package_data","URIjs"],function(e,t,n,r,i,o){var A=function(i){var A=this
this.spine=void 0,this.rootUrl=void 0,this.rootUrlMO=void 0,this.media_overlay=void 0,this.rendition_viewport=void 0,this.rendition_flow=void 0,this.rendition_layout=void 0,this.rendition_spread=void 0,this.rendition_orientation=void 0,this.resolveRelativeUrlMO=function(t){var n=void 0
try{n=new o(t)}catch(r){console.error(r),console.log(t)}if(n&&n.is("absolute"))return t
if(A.rootUrlMO&&A.rootUrlMO.length>0){var i=A.rootUrlMO
try{i=new o(i).search("").hash("").toString()}catch(r){console.error(r),console.log(i)}return e.EndsWith(i,"/")?i+t:i+"/"+t}return A.resolveRelativeUrl(t)},this.resolveRelativeUrl=function(t){var n=void 0
try{n=new o(t)}catch(r){console.error(r),console.log(t)}if(n&&n.is("absolute"))return t
if(A.rootUrl){var i=A.rootUrl
try{i=new o(i).search("").hash("").toString()}catch(r){console.error(r),console.log(i)}return e.EndsWith(i,"/")?i+t:i+"/"+t}return t},this.isFixedLayout=function(){return A.rendition_layout===t.RENDITION_LAYOUT_PREPAGINATED},this.isReflowable=function(){return!A.isFixedLayout()},i&&(this.rootUrl=i.rootUrl,this.rootUrlMO=i.rootUrlMO,this.rendition_viewport=i.rendition_viewport,this.rendition_layout=i.rendition_layout,this.rendition_flow=i.rendition_flow,this.rendition_orientation=i.rendition_orientation,this.rendition_spread=i.rendition_spread,this.spine=new n(this,i.spine),this.media_overlay=r.fromDTO(i.media_overlay,this))}
return A}),function(e,t){"function"==typeof define&&define.amd?define("FontLoader",[],t):"object"==typeof exports?module.exports=t():e.FontLoader=t()}(window,function(){function e(e){this._validateFontDescriptor(e),this.family=e.family,this.weight=e.weight,this.style=e.style,this.stretch=e.stretch}function t(e,t,n,r){this.delegate=t,this.timeout="undefined"!=typeof n?n:3e3,this._fontsArray=this._parseFonts(e),this._started=!1,this._testDiv=null,this._testContainer=null,this._adobeBlankSizeWatcher=null,this._sizeWatchers=[],this._timeoutId=null,this._intervalId=null,this._intervalDelay=50,this._numberOfLoadedFonts=0,this._numberOfFonts=this._fontsArray.length,this._fontsMap={},this._finished=!1,this._document=r||document}function n(e,t){this.width=e,this.height=t}function r(e,t){this._element=e,this._delegate=t.delegate,this._size=null,this._continuous=!!t.continuous,this._direction=t.direction?t.direction:r.directions.both,this._dimension=t.dimension?t.dimension:r.dimensions.both,this._sizeIncreaseWatcherContentElm=null,this._sizeDecreaseWatcherElm=null,this._sizeIncreaseWatcherElm=null,this._state=r.states.initialized,this._scrollAmount=2,this._document=t.document||document,this._generateScrollWatchers(t.size),this._appendScrollWatchersToElement(t.container)}var i=/MSIE/i.test(navigator.userAgent),o=null
if(i){var A,a
A=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),a=A.exec(navigator.userAgent),null!==a&&(o=parseFloat(a[1]))}return e.prototype={constructor:e,variationKey:function(){return this.weight+this.style+this.stretch},fontKey:function(){return this.family+this.variationKey()},toJSON:function(){return{family:this.family,weight:this.weight,style:this.style,stretch:this.stretch}},_validateFontDescriptor:function(e){var n,r
if(!e.family||!e.weight||!e.style)throw new Error("Illegal font descriptor, family, weight and style properties are required.")
if(!("possibleFontStyles"in t)){t.possibleFontStyles=[]
for(n in t.fontStyleAliasesMap)t.fontStyleAliasesMap.hasOwnProperty(n)&&t.possibleFontStyles.push(t.fontStyleAliasesMap[n])}if(-1===t.possibleFontStyles.indexOf(e.style))throw new Error("Illegal font descriptor, style property must be one of the following: "+t.possibleFontStyles.join(", "))
if("stretch"in e){if(!("possibleFontStretches"in t)){t.possibleFontStretches=[]
for(r in t.fontStretchAliasesMap)t.fontStretchAliasesMap.hasOwnProperty(r)&&t.possibleFontStretches.push(t.fontStretchAliasesMap[r])}if(-1===t.possibleFontStretches.indexOf(e.stretch))throw new Error("Illegal font descriptor, stretch property must be one of the following: "+t.possibleFontStretches.join(", "))}else e.stretch="normal"}},t.useAdobeBlank=!i||o>=11,t.useResizeEvent=i&&11>o&&"undefined"!=typeof document.attachEvent,t.useIntervalChecking=window.opera||i&&11>o&&!t.useResizeEvent,t.referenceText=" !\"\\#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",t.referenceFontFamilies=t.useAdobeBlank?["AdobeBlank"]:["serif","cursive"],t.adobeBlankFontFaceStyleId="fontLoaderAdobeBlankFontFace",t.adobeBlankReferenceSize=null,t.referenceFontFamilyVariationSizes={},t.adobeBlankFontFaceRule="@font-face{ font-family:AdobeBlank; src:url('data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIM6ZbkwAAEPEAAAZM0RTSUcAAAABAABtAAAAAAhPUy8yAR6vMwAAARAAAABgY21hcDqI98oAACjEAAAa4GhlYWT+BQILAAAArAAAADZoaGVhCCID7wAAAOQAAAAkaG10eAPoAHwAAFz4AAAQBm1heHAIAVAAAAABCAAAAAZuYW1lD/tWxwAAAXAAACdScG9zdP+4ADIAAEOkAAAAIAABAAAAAQj1Snw1O18PPPUAAwPoAAAAAM2C2p8AAAAAzYLanwB8/4gDbANwAAAAAwACAAAAAAAAAAEAAANw/4gAyAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAABAAAAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCRQHAAAD//wNw/4gAyANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA5AC0AAQAAAAAABgAKAGYAAwABBAkAAABuAHAAAwABBAkAAQAWAN4AAwABBAkAAgAOAPQAAwABBAkAAwA2AQIAAwABBAkABAAWAN4AAwABBAkABQByATgAAwABBAkABgAUAaoAAwABBAkACAA0Ab4AAwABBAkACwA0AfIAAwABBAkADSQSAiYAAwABBAkADgBIJjhBZG9iZSBCbGFua1JlZ3VsYXIxLjAzNTtBREJFO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDM1O1BTIDEuMDAzO2hvdGNvbnYgMS4wLjcwO21ha2VvdGYubGliMi41LjU5MDBBZG9iZUJsYW5rAKkAIAAyADAAMQAzACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkAC4AIABBAGwAbAAgAFIAaQBnAGgAdABzACAAUgBlAHMAZQByAHYAZQBkAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQBnAHUAbABhAHIAMQAuADAAMwA1ADsAQQBEAEIARQA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADMANQA7AFAAUwAgADEALgAwADAAMwA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADcAMAA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADUAOQAwADAAQQBkAG8AYgBlAEIAbABhAG4AawBBAGQAbwBiAGUAIABTAHkAcwB0AGUAbQBzACAASQBuAGMAbwByAHAAbwByAGEAdABlAGQAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGEAZABvAGIAZQAuAGMAbwBtAC8AdAB5AHAAZQAvAEEAZABvAGIAZQAgAEIAbABhAG4AawAgAGkAcwAgAHIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIAAtACAAcABsAGUAYQBzAGUAIAByAGUAYQBkACAAaQB0ACAAYwBhAHIAZQBmAHUAbABsAHkAIABhAG4AZAAgAGQAbwAgAG4AbwB0ACAAZABvAHcAbgBsAG8AYQBkACAAdABoAGUAIABmAG8AbgB0AHMAIAB1AG4AbABlAHMAcwAgAHkAbwB1ACAAYQBnAHIAZQBlACAAdABvACAAdABoAGUAIAB0AGgAZQAgAHQAZQByAG0AcwAgAG8AZgAgAHQAaABlACAAbABpAGMAZQBuAHMAZQA6AA0ACgANAAoAQwBvAHAAeQByAGkAZwBoAHQAIACpACAAMgAwADEAMwAgAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZAAgACgAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGEAZABvAGIAZQAuAGMAbwBtAC8AKQAsACAAdwBpAHQAaAAgAFIAZQBzAGUAcgB2AGUAZAAgAEYAbwBuAHQAIABOAGEAbQBlACAAQQBkAG8AYgBlACAAQgBsAGEAbgBrAA0ACgANAAoAVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgANAAoADQAKAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAaQBzACAAYwBvAHAAaQBlAGQAIABiAGUAbABvAHcALAAgAGEAbgBkACAAaQBzACAAYQBsAHMAbwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6ACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAA0ACgANAAoALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAA0ACgBTAEkATAAgAE8AUABFAE4AIABGAE8ATgBUACAATABJAEMARQBOAFMARQAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAgAC0AIAAyADYAIABGAGUAYgByAHUAYQByAHkAIAAyADAAMAA3AA0ACgAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ADQAKAA0ACgBQAFIARQBBAE0AQgBMAEUADQAKAFQAaABlACAAZwBvAGEAbABzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIAAoAE8ARgBMACkAIABhAHIAZQAgAHQAbwAgAHMAdABpAG0AdQBsAGEAdABlACAAdwBvAHIAbABkAHcAaQBkAGUAIABkAGUAdgBlAGwAbwBwAG0AZQBuAHQAIABvAGYAIABjAG8AbABsAGEAYgBvAHIAYQB0AGkAdgBlACAAZgBvAG4AdAAgAHAAcgBvAGoAZQBjAHQAcwAsACAAdABvACAAcwB1AHAAcABvAHIAdAAgAHQAaABlACAAZgBvAG4AdAAgAGMAcgBlAGEAdABpAG8AbgAgAGUAZgBmAG8AcgB0AHMAIABvAGYAIABhAGMAYQBkAGUAbQBpAGMAIABhAG4AZAAgAGwAaQBuAGcAdQBpAHMAdABpAGMAIABjAG8AbQBtAHUAbgBpAHQAaQBlAHMALAAgAGEAbgBkACAAdABvACAAcAByAG8AdgBpAGQAZQAgAGEAIABmAHIAZQBlACAAYQBuAGQAIABvAHAAZQBuACAAZgByAGEAbQBlAHcAbwByAGsAIABpAG4AIAB3AGgAaQBjAGgAIABmAG8AbgB0AHMAIABtAGEAeQAgAGIAZQAgAHMAaABhAHIAZQBkACAAYQBuAGQAIABpAG0AcAByAG8AdgBlAGQAIABpAG4AIABwAGEAcgB0AG4AZQByAHMAaABpAHAAIAB3AGkAdABoACAAbwB0AGgAZQByAHMALgANAAoADQAKAFQAaABlACAATwBGAEwAIABhAGwAbABvAHcAcwAgAHQAaABlACAAbABpAGMAZQBuAHMAZQBkACAAZgBvAG4AdABzACAAdABvACAAYgBlACAAdQBzAGUAZAAsACAAcwB0AHUAZABpAGUAZAAsACAAbQBvAGQAaQBmAGkAZQBkACAAYQBuAGQAIAByAGUAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAZgByAGUAZQBsAHkAIABhAHMAIABsAG8AbgBnACAAYQBzACAAdABoAGUAeQAgAGEAcgBlACAAbgBvAHQAIABzAG8AbABkACAAYgB5ACAAdABoAGUAbQBzAGUAbAB2AGUAcwAuACAAVABoAGUAIABmAG8AbgB0AHMALAAgAGkAbgBjAGwAdQBkAGkAbgBnACAAYQBuAHkAIABkAGUAcgBpAHYAYQB0AGkAdgBlACAAdwBvAHIAawBzACwAIABjAGEAbgAgAGIAZQAgAGIAdQBuAGQAbABlAGQALAAgAGUAbQBiAGUAZABkAGUAZAAsACAAcgBlAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGEAbgBkAC8AbwByACAAcwBvAGwAZAAgAHcAaQB0AGgAIABhAG4AeQAgAHMAbwBmAHQAdwBhAHIAZQAgAHAAcgBvAHYAaQBkAGUAZAAgAHQAaABhAHQAIABhAG4AeQAgAHIAZQBzAGUAcgB2AGUAZAAgAG4AYQBtAGUAcwAgAGEAcgBlACAAbgBvAHQAIAB1AHMAZQBkACAAYgB5ACAAZABlAHIAaQB2AGEAdABpAHYAZQAgAHcAbwByAGsAcwAuACAAVABoAGUAIABmAG8AbgB0AHMAIABhAG4AZAAgAGQAZQByAGkAdgBhAHQAaQB2AGUAcwAsACAAaABvAHcAZQB2AGUAcgAsACAAYwBhAG4AbgBvAHQAIABiAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIABhAG4AeQAgAG8AdABoAGUAcgAgAHQAeQBwAGUAIABvAGYAIABsAGkAYwBlAG4AcwBlAC4AIABUAGgAZQAgAHIAZQBxAHUAaQByAGUAbQBlAG4AdAAgAGYAbwByACAAZgBvAG4AdABzACAAdABvACAAcgBlAG0AYQBpAG4AIAB1AG4AZABlAHIAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGQAbwBlAHMAIABuAG8AdAAgAGEAcABwAGwAeQAgAHQAbwAgAGEAbgB5ACAAZABvAGMAdQBtAGUAbgB0ACAAYwByAGUAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAHQAaABlACAAZgBvAG4AdABzACAAbwByACAAdABoAGUAaQByACAAZABlAHIAaQB2AGEAdABpAHYAZQBzAC4ADQAKAA0ACgBEAEUARgBJAE4ASQBUAEkATwBOAFMADQAKACIARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAiACAAcgBlAGYAZQByAHMAIAB0AG8AIAB0AGgAZQAgAHMAZQB0ACAAbwBmACAAZgBpAGwAZQBzACAAcgBlAGwAZQBhAHMAZQBkACAAYgB5ACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApACAAdQBuAGQAZQByACAAdABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABhAG4AZAAgAGMAbABlAGEAcgBsAHkAIABtAGEAcgBrAGUAZAAgAGEAcwAgAHMAdQBjAGgALgAgAFQAaABpAHMAIABtAGEAeQAgAGkAbgBjAGwAdQBkAGUAIABzAG8AdQByAGMAZQAgAGYAaQBsAGUAcwAsACAAYgB1AGkAbABkACAAcwBjAHIAaQBwAHQAcwAgAGEAbgBkACAAZABvAGMAdQBtAGUAbgB0AGEAdABpAG8AbgAuAA0ACgANAAoAIgBSAGUAcwBlAHIAdgBlAGQAIABGAG8AbgB0ACAATgBhAG0AZQAiACAAcgBlAGYAZQByAHMAIAB0AG8AIABhAG4AeQAgAG4AYQBtAGUAcwAgAHMAcABlAGMAaQBmAGkAZQBkACAAYQBzACAAcwB1AGMAaAAgAGEAZgB0AGUAcgAgAHQAaABlACAAYwBvAHAAeQByAGkAZwBoAHQAIABzAHQAYQB0AGUAbQBlAG4AdAAoAHMAKQAuAA0ACgANAAoAIgBPAHIAaQBnAGkAbgBhAGwAIABWAGUAcgBzAGkAbwBuACIAIAByAGUAZgBlAHIAcwAgAHQAbwAgAHQAaABlACAAYwBvAGwAbABlAGMAdABpAG8AbgAgAG8AZgAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABjAG8AbQBwAG8AbgBlAG4AdABzACAAYQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAYgB5ACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApAC4ADQAKAA0ACgAiAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AIgAgAHIAZQBmAGUAcgBzACAAdABvACAAYQBuAHkAIABkAGUAcgBpAHYAYQB0AGkAdgBlACAAbQBhAGQAZQAgAGIAeQAgAGEAZABkAGkAbgBnACAAdABvACwAIABkAGUAbABlAHQAaQBuAGcALAAgAG8AcgAgAHMAdQBiAHMAdABpAHQAdQB0AGkAbgBnACAALQAtACAAaQBuACAAcABhAHIAdAAgAG8AcgAgAGkAbgAgAHcAaABvAGwAZQAgAC0ALQAgAGEAbgB5ACAAbwBmACAAdABoAGUAIABjAG8AbQBwAG8AbgBlAG4AdABzACAAbwBmACAAdABoAGUAIABPAHIAaQBnAGkAbgBhAGwAIABWAGUAcgBzAGkAbwBuACwAIABiAHkAIABjAGgAYQBuAGcAaQBuAGcAIABmAG8AcgBtAGEAdABzACAAbwByACAAYgB5ACAAcABvAHIAdABpAG4AZwAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAHQAbwAgAGEAIABuAGUAdwAgAGUAbgB2AGkAcgBvAG4AbQBlAG4AdAAuAA0ACgANAAoAIgBBAHUAdABoAG8AcgAiACAAcgBlAGYAZQByAHMAIAB0AG8AIABhAG4AeQAgAGQAZQBzAGkAZwBuAGUAcgAsACAAZQBuAGcAaQBuAGUAZQByACwAIABwAHIAbwBnAHIAYQBtAG0AZQByACwAIAB0AGUAYwBoAG4AaQBjAGEAbAAgAHcAcgBpAHQAZQByACAAbwByACAAbwB0AGgAZQByACAAcABlAHIAcwBvAG4AIAB3AGgAbwAgAGMAbwBuAHQAcgBpAGIAdQB0AGUAZAAgAHQAbwAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAuAA0ACgANAAoAUABFAFIATQBJAFMAUwBJAE8ATgAgACYAIABDAE8ATgBEAEkAVABJAE8ATgBTAA0ACgBQAGUAcgBtAGkAcwBzAGkAbwBuACAAaQBzACAAaABlAHIAZQBiAHkAIABnAHIAYQBuAHQAZQBkACwAIABmAHIAZQBlACAAbwBmACAAYwBoAGEAcgBnAGUALAAgAHQAbwAgAGEAbgB5ACAAcABlAHIAcwBvAG4AIABvAGIAdABhAGkAbgBpAG4AZwAgAGEAIABjAG8AcAB5ACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACwAIAB0AG8AIAB1AHMAZQAsACAAcwB0AHUAZAB5ACwAIABjAG8AcAB5ACwAIABtAGUAcgBnAGUALAAgAGUAbQBiAGUAZAAsACAAbQBvAGQAaQBmAHkALAAgAHIAZQBkAGkAcwB0AHIAaQBiAHUAdABlACwAIABhAG4AZAAgAHMAZQBsAGwAIABtAG8AZABpAGYAaQBlAGQAIABhAG4AZAAgAHUAbgBtAG8AZABpAGYAaQBlAGQAIABjAG8AcABpAGUAcwAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAsACAAcwB1AGIAagBlAGMAdAAgAHQAbwAgAHQAaABlACAAZgBvAGwAbABvAHcAaQBuAGcAIABjAG8AbgBkAGkAdABpAG8AbgBzADoADQAKAA0ACgAxACkAIABOAGUAaQB0AGgAZQByACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAbgBvAHIAIABhAG4AeQAgAG8AZgAgAGkAdABzACAAaQBuAGQAaQB2AGkAZAB1AGEAbAAgAGMAbwBtAHAAbwBuAGUAbgB0AHMALAAgAGkAbgAgAE8AcgBpAGcAaQBuAGEAbAAgAG8AcgAgAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AcwAsACAAbQBhAHkAIABiAGUAIABzAG8AbABkACAAYgB5ACAAaQB0AHMAZQBsAGYALgANAAoADQAKADIAKQAgAE8AcgBpAGcAaQBuAGEAbAAgAG8AcgAgAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AcwAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAG0AYQB5ACAAYgBlACAAYgB1AG4AZABsAGUAZAAsACAAcgBlAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGEAbgBkAC8AbwByACAAcwBvAGwAZAAgAHcAaQB0AGgAIABhAG4AeQAgAHMAbwBmAHQAdwBhAHIAZQAsACAAcAByAG8AdgBpAGQAZQBkACAAdABoAGEAdAAgAGUAYQBjAGgAIABjAG8AcAB5ACAAYwBvAG4AdABhAGkAbgBzACAAdABoAGUAIABhAGIAbwB2AGUAIABjAG8AcAB5AHIAaQBnAGgAdAAgAG4AbwB0AGkAYwBlACAAYQBuAGQAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAuACAAVABoAGUAcwBlACAAYwBhAG4AIABiAGUAIABpAG4AYwBsAHUAZABlAGQAIABlAGkAdABoAGUAcgAgAGEAcwAgAHMAdABhAG4AZAAtAGEAbABvAG4AZQAgAHQAZQB4AHQAIABmAGkAbABlAHMALAAgAGgAdQBtAGEAbgAtAHIAZQBhAGQAYQBiAGwAZQAgAGgAZQBhAGQAZQByAHMAIABvAHIAIABpAG4AIAB0AGgAZQAgAGEAcABwAHIAbwBwAHIAaQBhAHQAZQAgAG0AYQBjAGgAaQBuAGUALQByAGUAYQBkAGEAYgBsAGUAIABtAGUAdABhAGQAYQB0AGEAIABmAGkAZQBsAGQAcwAgAHcAaQB0AGgAaQBuACAAdABlAHgAdAAgAG8AcgAgAGIAaQBuAGEAcgB5ACAAZgBpAGwAZQBzACAAYQBzACAAbABvAG4AZwAgAGEAcwAgAHQAaABvAHMAZQAgAGYAaQBlAGwAZABzACAAYwBhAG4AIABiAGUAIABlAGEAcwBpAGwAeQAgAHYAaQBlAHcAZQBkACAAYgB5ACAAdABoAGUAIAB1AHMAZQByAC4ADQAKAA0ACgAzACkAIABOAG8AIABNAG8AZABpAGYAaQBlAGQAIABWAGUAcgBzAGkAbwBuACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAbQBhAHkAIAB1AHMAZQAgAHQAaABlACAAUgBlAHMAZQByAHYAZQBkACAARgBvAG4AdAAgAE4AYQBtAGUAKABzACkAIAB1AG4AbABlAHMAcwAgAGUAeABwAGwAaQBjAGkAdAAgAHcAcgBpAHQAdABlAG4AIABwAGUAcgBtAGkAcwBzAGkAbwBuACAAaQBzACAAZwByAGEAbgB0AGUAZAAgAGIAeQAgAHQAaABlACAAYwBvAHIAcgBlAHMAcABvAG4AZABpAG4AZwAgAEMAbwBwAHkAcgBpAGcAaAB0ACAASABvAGwAZABlAHIALgAgAFQAaABpAHMAIAByAGUAcwB0AHIAaQBjAHQAaQBvAG4AIABvAG4AbAB5ACAAYQBwAHAAbABpAGUAcwAgAHQAbwAgAHQAaABlACAAcAByAGkAbQBhAHIAeQAgAGYAbwBuAHQAIABuAGEAbQBlACAAYQBzACAAcAByAGUAcwBlAG4AdABlAGQAIAB0AG8AIAB0AGgAZQAgAHUAcwBlAHIAcwAuAA0ACgANAAoANAApACAAVABoAGUAIABuAGEAbQBlACgAcwApACAAbwBmACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApACAAbwByACAAdABoAGUAIABBAHUAdABoAG8AcgAoAHMAKQAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAHMAaABhAGwAbAAgAG4AbwB0ACAAYgBlACAAdQBzAGUAZAAgAHQAbwAgAHAAcgBvAG0AbwB0AGUALAAgAGUAbgBkAG8AcgBzAGUAIABvAHIAIABhAGQAdgBlAHIAdABpAHMAZQAgAGEAbgB5ACAATQBvAGQAaQBmAGkAZQBkACAAVgBlAHIAcwBpAG8AbgAsACAAZQB4AGMAZQBwAHQAIAB0AG8AIABhAGMAawBuAG8AdwBsAGUAZABnAGUAIAB0AGgAZQAgAGMAbwBuAHQAcgBpAGIAdQB0AGkAbwBuACgAcwApACAAbwBmACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApACAAYQBuAGQAIAB0AGgAZQAgAEEAdQB0AGgAbwByACgAcwApACAAbwByACAAdwBpAHQAaAAgAHQAaABlAGkAcgAgAGUAeABwAGwAaQBjAGkAdAAgAHcAcgBpAHQAdABlAG4AIABwAGUAcgBtAGkAcwBzAGkAbwBuAC4ADQAKAA0ACgA1ACkAIABUAGgAZQAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALAAgAG0AbwBkAGkAZgBpAGUAZAAgAG8AcgAgAHUAbgBtAG8AZABpAGYAaQBlAGQALAAgAGkAbgAgAHAAYQByAHQAIABvAHIAIABpAG4AIAB3AGgAbwBsAGUALAAgAG0AdQBzAHQAIABiAGUAIABkAGkAcwB0AHIAaQBiAHUAdABlAGQAIABlAG4AdABpAHIAZQBsAHkAIAB1AG4AZABlAHIAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAsACAAYQBuAGQAIABtAHUAcwB0ACAAbgBvAHQAIABiAGUAIABkAGkAcwB0AHIAaQBiAHUAdABlAGQAIAB1AG4AZABlAHIAIABhAG4AeQAgAG8AdABoAGUAcgAgAGwAaQBjAGUAbgBzAGUALgAgAFQAaABlACAAcgBlAHEAdQBpAHIAZQBtAGUAbgB0ACAAZgBvAHIAIABmAG8AbgB0AHMAIAB0AG8AIAByAGUAbQBhAGkAbgAgAHUAbgBkAGUAcgAgAHQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAZABvAGUAcwAgAG4AbwB0ACAAYQBwAHAAbAB5ACAAdABvACAAYQBuAHkAIABkAG8AYwB1AG0AZQBuAHQAIABjAHIAZQBhAHQAZQBkACAAdQBzAGkAbgBnACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlAC4ADQAKAA0ACgBUAEUAUgBNAEkATgBBAFQASQBPAE4ADQAKAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAYgBlAGMAbwBtAGUAcwAgAG4AdQBsAGwAIABhAG4AZAAgAHYAbwBpAGQAIABpAGYAIABhAG4AeQAgAG8AZgAgAHQAaABlACAAYQBiAG8AdgBlACAAYwBvAG4AZABpAHQAaQBvAG4AcwAgAGEAcgBlACAAbgBvAHQAIABtAGUAdAAuAA0ACgANAAoARABJAFMAQwBMAEEASQBNAEUAUgANAAoAVABIAEUAIABGAE8ATgBUACAAUwBPAEYAVABXAEEAUgBFACAASQBTACAAUABSAE8AVgBJAEQARQBEACAAIgBBAFMAIABJAFMAIgAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQAWQAgAE8ARgAgAEEATgBZACAASwBJAE4ARAAsACAARQBYAFAAUgBFAFMAUwAgAE8AUgAgAEkATQBQAEwASQBFAEQALAAgAEkATgBDAEwAVQBEAEkATgBHACAAQgBVAFQAIABOAE8AVAAgAEwASQBNAEkAVABFAEQAIABUAE8AIABBAE4AWQAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAEYAIABNAEUAUgBDAEgAQQBOAFQAQQBCAEkATABJAFQAWQAsACAARgBJAFQATgBFAFMAUwAgAEYATwBSACAAQQAgAFAAQQBSAFQASQBDAFUATABBAFIAIABQAFUAUgBQAE8AUwBFACAAQQBOAEQAIABOAE8ATgBJAE4ARgBSAEkATgBHAEUATQBFAE4AVAAgAE8ARgAgAEMATwBQAFkAUgBJAEcASABUACwAIABQAEEAVABFAE4AVAAsACAAVABSAEEARABFAE0AQQBSAEsALAAgAE8AUgAgAE8AVABIAEUAUgAgAFIASQBHAEgAVAAuACAASQBOACAATgBPACAARQBWAEUATgBUACAAUwBIAEEATABMACAAVABIAEUAIABDAE8AUABZAFIASQBHAEgAVAAgAEgATwBMAEQARQBSACAAQgBFACAATABJAEEAQgBMAEUAIABGAE8AUgAgAEEATgBZACAAQwBMAEEASQBNACwAIABEAEEATQBBAEcARQBTACAATwBSACAATwBUAEgARQBSACAATABJAEEAQgBJAEwASQBUAFkALAAgAEkATgBDAEwAVQBEAEkATgBHACAAQQBOAFkAIABHAEUATgBFAFIAQQBMACwAIABTAFAARQBDAEkAQQBMACwAIABJAE4ARABJAFIARQBDAFQALAAgAEkATgBDAEkARABFAE4AVABBAEwALAAgAE8AUgAgAEMATwBOAFMARQBRAFUARQBOAFQASQBBAEwAIABEAEEATQBBAEcARQBTACwAIABXAEgARQBUAEgARQBSACAASQBOACAAQQBOACAAQQBDAFQASQBPAE4AIABPAEYAIABDAE8ATgBUAFIAQQBDAFQALAAgAFQATwBSAFQAIABPAFIAIABPAFQASABFAFIAVwBJAFMARQAsACAAQQBSAEkAUwBJAE4ARwAgAEYAUgBPAE0ALAAgAE8AVQBUACAATwBGACAAVABIAEUAIABVAFMARQAgAE8AUgAgAEkATgBBAEIASQBMAEkAVABZACAAVABPACAAVQBTAEUAIABUAEgARQAgAEYATwBOAFQAIABTAE8ARgBUAFcAQQBSAEUAIABPAFIAIABGAFIATwBNACAATwBUAEgARQBSACAARABFAEEATABJAE4ARwBTACAASQBOACAAVABIAEUAIABGAE8ATgBUACAAUwBPAEYAVABXAEEAUgBFAC4ADQAKAGgAdAB0AHAAOgAvAC8AdwB3AHcALgBhAGQAbwBiAGUALgBjAG8AbQAvAHQAeQBwAGUALwBsAGUAZwBhAGwALgBoAHQAbQBsAAAAAAAFAAAAAwAAADgAAAAEAAABUAABAAAAAAAsAAMAAQAAADgAAwAKAAABUAAGAAwAAAAAAAEAAAAEARgAAABCAEAABQACB/8P/xf/H/8n/y//N/8//0f/T/9X/1//Z/9v/3f/f/+H/4//l/+f/6f/r/+3/7//x//P/9f/5//v//f//c///f//AAAAAAgAEAAYACAAKAAwADgAQABIAFAAWABgAGgAcAB4AIAAiACQAJgAoACoALAAuADAAMgA0ADgAOgA8AD4AP3w//8AAfgB8AHoAeAB2AHQAcgBwAG4AbABqAGgAZgBkAGIAYABeAFwAWgBYAFYAVABSAFAATgBMAEgARgBEAEIAQgBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAZkAAAAAAAAAIgAAAAAAAAB/8AAAABAAAIAAAAD/8AAAABAAAQAAAAF/8AAAABAAAYAAAAH/8AAAABAAAgAAAAJ/8AAAABAAAoAAAAL/8AAAABAAAwAAAAN/8AAAABAAA4AAAAP/8AAAABAABAAAAAR/8AAAABAABIAAAAT/8AAAABAABQAAAAV/8AAAABAABYAAAAX/8AAAABAABgAAAAZ/8AAAABAABoAAAAb/8AAAABAABwAAAAd/8AAAABAAB4AAAAf/8AAAABAACAAAAAh/8AAAABAACIAAAAj/8AAAABAACQAAAAl/8AAAABAACYAAAAn/8AAAABAACgAAAAp/8AAAABAACoAAAAr/8AAAABAACwAAAAt/8AAAABAAC4AAAAv/8AAAABAADAAAAAx/8AAAABAADIAAAAz/8AAAABAADQAAAA1/8AAAABAADgAAAA5/8AAAABAADoAAAA7/8AAAABAADwAAAA9/8AAAABAAD4AAAA/c8AAAABAAD98AAA//0AAAXxAAEAAAABB/8AAAABAAEIAAABD/8AAAABAAEQAAABF/8AAAABAAEYAAABH/8AAAABAAEgAAABJ/8AAAABAAEoAAABL/8AAAABAAEwAAABN/8AAAABAAE4AAABP/8AAAABAAFAAAABR/8AAAABAAFIAAABT/8AAAABAAFQAAABV/8AAAABAAFYAAABX/8AAAABAAFgAAABZ/8AAAABAAFoAAABb/8AAAABAAFwAAABd/8AAAABAAF4AAABf/8AAAABAAGAAAABh/8AAAABAAGIAAABj/8AAAABAAGQAAABl/8AAAABAAGYAAABn/8AAAABAAGgAAABp/8AAAABAAGoAAABr/8AAAABAAGwAAABt/8AAAABAAG4AAABv/8AAAABAAHAAAABx/8AAAABAAHIAAABz/8AAAABAAHQAAAB1/8AAAABAAHYAAAB3/8AAAABAAHgAAAB5/8AAAABAAHoAAAB7/8AAAABAAHwAAAB9/8AAAABAAH4AAAB//0AAAABAAIAAAACB/8AAAABAAIIAAACD/8AAAABAAIQAAACF/8AAAABAAIYAAACH/8AAAABAAIgAAACJ/8AAAABAAIoAAACL/8AAAABAAIwAAACN/8AAAABAAI4AAACP/8AAAABAAJAAAACR/8AAAABAAJIAAACT/8AAAABAAJQAAACV/8AAAABAAJYAAACX/8AAAABAAJgAAACZ/8AAAABAAJoAAACb/8AAAABAAJwAAACd/8AAAABAAJ4AAACf/8AAAABAAKAAAACh/8AAAABAAKIAAACj/8AAAABAAKQAAACl/8AAAABAAKYAAACn/8AAAABAAKgAAACp/8AAAABAAKoAAACr/8AAAABAAKwAAACt/8AAAABAAK4AAACv/8AAAABAALAAAACx/8AAAABAALIAAACz/8AAAABAALQAAAC1/8AAAABAALYAAAC3/8AAAABAALgAAAC5/8AAAABAALoAAAC7/8AAAABAALwAAAC9/8AAAABAAL4AAAC//0AAAABAAMAAAADB/8AAAABAAMIAAADD/8AAAABAAMQAAADF/8AAAABAAMYAAADH/8AAAABAAMgAAADJ/8AAAABAAMoAAADL/8AAAABAAMwAAADN/8AAAABAAM4AAADP/8AAAABAANAAAADR/8AAAABAANIAAADT/8AAAABAANQAAADV/8AAAABAANYAAADX/8AAAABAANgAAADZ/8AAAABAANoAAADb/8AAAABAANwAAADd/8AAAABAAN4AAADf/8AAAABAAOAAAADh/8AAAABAAOIAAADj/8AAAABAAOQAAADl/8AAAABAAOYAAADn/8AAAABAAOgAAADp/8AAAABAAOoAAADr/8AAAABAAOwAAADt/8AAAABAAO4AAADv/8AAAABAAPAAAADx/8AAAABAAPIAAADz/8AAAABAAPQAAAD1/8AAAABAAPYAAAD3/8AAAABAAPgAAAD5/8AAAABAAPoAAAD7/8AAAABAAPwAAAD9/8AAAABAAP4AAAD//0AAAABAAQAAAAEB/8AAAABAAQIAAAED/8AAAABAAQQAAAEF/8AAAABAAQYAAAEH/8AAAABAAQgAAAEJ/8AAAABAAQoAAAEL/8AAAABAAQwAAAEN/8AAAABAAQ4AAAEP/8AAAABAARAAAAER/8AAAABAARIAAAET/8AAAABAARQAAAEV/8AAAABAARYAAAEX/8AAAABAARgAAAEZ/8AAAABAARoAAAEb/8AAAABAARwAAAEd/8AAAABAAR4AAAEf/8AAAABAASAAAAEh/8AAAABAASIAAAEj/8AAAABAASQAAAEl/8AAAABAASYAAAEn/8AAAABAASgAAAEp/8AAAABAASoAAAEr/8AAAABAASwAAAEt/8AAAABAAS4AAAEv/8AAAABAATAAAAEx/8AAAABAATIAAAEz/8AAAABAATQAAAE1/8AAAABAATYAAAE3/8AAAABAATgAAAE5/8AAAABAAToAAAE7/8AAAABAATwAAAE9/8AAAABAAT4AAAE//0AAAABAAUAAAAFB/8AAAABAAUIAAAFD/8AAAABAAUQAAAFF/8AAAABAAUYAAAFH/8AAAABAAUgAAAFJ/8AAAABAAUoAAAFL/8AAAABAAUwAAAFN/8AAAABAAU4AAAFP/8AAAABAAVAAAAFR/8AAAABAAVIAAAFT/8AAAABAAVQAAAFV/8AAAABAAVYAAAFX/8AAAABAAVgAAAFZ/8AAAABAAVoAAAFb/8AAAABAAVwAAAFd/8AAAABAAV4AAAFf/8AAAABAAWAAAAFh/8AAAABAAWIAAAFj/8AAAABAAWQAAAFl/8AAAABAAWYAAAFn/8AAAABAAWgAAAFp/8AAAABAAWoAAAFr/8AAAABAAWwAAAFt/8AAAABAAW4AAAFv/8AAAABAAXAAAAFx/8AAAABAAXIAAAFz/8AAAABAAXQAAAF1/8AAAABAAXYAAAF3/8AAAABAAXgAAAF5/8AAAABAAXoAAAF7/8AAAABAAXwAAAF9/8AAAABAAX4AAAF//0AAAABAAYAAAAGB/8AAAABAAYIAAAGD/8AAAABAAYQAAAGF/8AAAABAAYYAAAGH/8AAAABAAYgAAAGJ/8AAAABAAYoAAAGL/8AAAABAAYwAAAGN/8AAAABAAY4AAAGP/8AAAABAAZAAAAGR/8AAAABAAZIAAAGT/8AAAABAAZQAAAGV/8AAAABAAZYAAAGX/8AAAABAAZgAAAGZ/8AAAABAAZoAAAGb/8AAAABAAZwAAAGd/8AAAABAAZ4AAAGf/8AAAABAAaAAAAGh/8AAAABAAaIAAAGj/8AAAABAAaQAAAGl/8AAAABAAaYAAAGn/8AAAABAAagAAAGp/8AAAABAAaoAAAGr/8AAAABAAawAAAGt/8AAAABAAa4AAAGv/8AAAABAAbAAAAGx/8AAAABAAbIAAAGz/8AAAABAAbQAAAG1/8AAAABAAbYAAAG3/8AAAABAAbgAAAG5/8AAAABAAboAAAG7/8AAAABAAbwAAAG9/8AAAABAAb4AAAG//0AAAABAAcAAAAHB/8AAAABAAcIAAAHD/8AAAABAAcQAAAHF/8AAAABAAcYAAAHH/8AAAABAAcgAAAHJ/8AAAABAAcoAAAHL/8AAAABAAcwAAAHN/8AAAABAAc4AAAHP/8AAAABAAdAAAAHR/8AAAABAAdIAAAHT/8AAAABAAdQAAAHV/8AAAABAAdYAAAHX/8AAAABAAdgAAAHZ/8AAAABAAdoAAAHb/8AAAABAAdwAAAHd/8AAAABAAd4AAAHf/8AAAABAAeAAAAHh/8AAAABAAeIAAAHj/8AAAABAAeQAAAHl/8AAAABAAeYAAAHn/8AAAABAAegAAAHp/8AAAABAAeoAAAHr/8AAAABAAewAAAHt/8AAAABAAe4AAAHv/8AAAABAAfAAAAHx/8AAAABAAfIAAAHz/8AAAABAAfQAAAH1/8AAAABAAfYAAAH3/8AAAABAAfgAAAH5/8AAAABAAfoAAAH7/8AAAABAAfwAAAH9/8AAAABAAf4AAAH//0AAAABAAgAAAAIB/8AAAABAAgIAAAID/8AAAABAAgQAAAIF/8AAAABAAgYAAAIH/8AAAABAAggAAAIJ/8AAAABAAgoAAAIL/8AAAABAAgwAAAIN/8AAAABAAg4AAAIP/8AAAABAAhAAAAIR/8AAAABAAhIAAAIT/8AAAABAAhQAAAIV/8AAAABAAhYAAAIX/8AAAABAAhgAAAIZ/8AAAABAAhoAAAIb/8AAAABAAhwAAAId/8AAAABAAh4AAAIf/8AAAABAAiAAAAIh/8AAAABAAiIAAAIj/8AAAABAAiQAAAIl/8AAAABAAiYAAAIn/8AAAABAAigAAAIp/8AAAABAAioAAAIr/8AAAABAAiwAAAIt/8AAAABAAi4AAAIv/8AAAABAAjAAAAIx/8AAAABAAjIAAAIz/8AAAABAAjQAAAI1/8AAAABAAjYAAAI3/8AAAABAAjgAAAI5/8AAAABAAjoAAAI7/8AAAABAAjwAAAI9/8AAAABAAj4AAAI//0AAAABAAkAAAAJB/8AAAABAAkIAAAJD/8AAAABAAkQAAAJF/8AAAABAAkYAAAJH/8AAAABAAkgAAAJJ/8AAAABAAkoAAAJL/8AAAABAAkwAAAJN/8AAAABAAk4AAAJP/8AAAABAAlAAAAJR/8AAAABAAlIAAAJT/8AAAABAAlQAAAJV/8AAAABAAlYAAAJX/8AAAABAAlgAAAJZ/8AAAABAAloAAAJb/8AAAABAAlwAAAJd/8AAAABAAl4AAAJf/8AAAABAAmAAAAJh/8AAAABAAmIAAAJj/8AAAABAAmQAAAJl/8AAAABAAmYAAAJn/8AAAABAAmgAAAJp/8AAAABAAmoAAAJr/8AAAABAAmwAAAJt/8AAAABAAm4AAAJv/8AAAABAAnAAAAJx/8AAAABAAnIAAAJz/8AAAABAAnQAAAJ1/8AAAABAAnYAAAJ3/8AAAABAAngAAAJ5/8AAAABAAnoAAAJ7/8AAAABAAnwAAAJ9/8AAAABAAn4AAAJ//0AAAABAAoAAAAKB/8AAAABAAoIAAAKD/8AAAABAAoQAAAKF/8AAAABAAoYAAAKH/8AAAABAAogAAAKJ/8AAAABAAooAAAKL/8AAAABAAowAAAKN/8AAAABAAo4AAAKP/8AAAABAApAAAAKR/8AAAABAApIAAAKT/8AAAABAApQAAAKV/8AAAABAApYAAAKX/8AAAABAApgAAAKZ/8AAAABAApoAAAKb/8AAAABAApwAAAKd/8AAAABAAp4AAAKf/8AAAABAAqAAAAKh/8AAAABAAqIAAAKj/8AAAABAAqQAAAKl/8AAAABAAqYAAAKn/8AAAABAAqgAAAKp/8AAAABAAqoAAAKr/8AAAABAAqwAAAKt/8AAAABAAq4AAAKv/8AAAABAArAAAAKx/8AAAABAArIAAAKz/8AAAABAArQAAAK1/8AAAABAArYAAAK3/8AAAABAArgAAAK5/8AAAABAAroAAAK7/8AAAABAArwAAAK9/8AAAABAAr4AAAK//0AAAABAAsAAAALB/8AAAABAAsIAAALD/8AAAABAAsQAAALF/8AAAABAAsYAAALH/8AAAABAAsgAAALJ/8AAAABAAsoAAALL/8AAAABAAswAAALN/8AAAABAAs4AAALP/8AAAABAAtAAAALR/8AAAABAAtIAAALT/8AAAABAAtQAAALV/8AAAABAAtYAAALX/8AAAABAAtgAAALZ/8AAAABAAtoAAALb/8AAAABAAtwAAALd/8AAAABAAt4AAALf/8AAAABAAuAAAALh/8AAAABAAuIAAALj/8AAAABAAuQAAALl/8AAAABAAuYAAALn/8AAAABAAugAAALp/8AAAABAAuoAAALr/8AAAABAAuwAAALt/8AAAABAAu4AAALv/8AAAABAAvAAAALx/8AAAABAAvIAAALz/8AAAABAAvQAAAL1/8AAAABAAvYAAAL3/8AAAABAAvgAAAL5/8AAAABAAvoAAAL7/8AAAABAAvwAAAL9/8AAAABAAv4AAAL//0AAAABAAwAAAAMB/8AAAABAAwIAAAMD/8AAAABAAwQAAAMF/8AAAABAAwYAAAMH/8AAAABAAwgAAAMJ/8AAAABAAwoAAAML/8AAAABAAwwAAAMN/8AAAABAAw4AAAMP/8AAAABAAxAAAAMR/8AAAABAAxIAAAMT/8AAAABAAxQAAAMV/8AAAABAAxYAAAMX/8AAAABAAxgAAAMZ/8AAAABAAxoAAAMb/8AAAABAAxwAAAMd/8AAAABAAx4AAAMf/8AAAABAAyAAAAMh/8AAAABAAyIAAAMj/8AAAABAAyQAAAMl/8AAAABAAyYAAAMn/8AAAABAAygAAAMp/8AAAABAAyoAAAMr/8AAAABAAywAAAMt/8AAAABAAy4AAAMv/8AAAABAAzAAAAMx/8AAAABAAzIAAAMz/8AAAABAAzQAAAM1/8AAAABAAzYAAAM3/8AAAABAAzgAAAM5/8AAAABAAzoAAAM7/8AAAABAAzwAAAM9/8AAAABAAz4AAAM//0AAAABAA0AAAANB/8AAAABAA0IAAAND/8AAAABAA0QAAANF/8AAAABAA0YAAANH/8AAAABAA0gAAANJ/8AAAABAA0oAAANL/8AAAABAA0wAAANN/8AAAABAA04AAANP/8AAAABAA1AAAANR/8AAAABAA1IAAANT/8AAAABAA1QAAANV/8AAAABAA1YAAANX/8AAAABAA1gAAANZ/8AAAABAA1oAAANb/8AAAABAA1wAAANd/8AAAABAA14AAANf/8AAAABAA2AAAANh/8AAAABAA2IAAANj/8AAAABAA2QAAANl/8AAAABAA2YAAANn/8AAAABAA2gAAANp/8AAAABAA2oAAANr/8AAAABAA2wAAANt/8AAAABAA24AAANv/8AAAABAA3AAAANx/8AAAABAA3IAAANz/8AAAABAA3QAAAN1/8AAAABAA3YAAAN3/8AAAABAA3gAAAN5/8AAAABAA3oAAAN7/8AAAABAA3wAAAN9/8AAAABAA34AAAN//0AAAABAA4AAAAOB/8AAAABAA4IAAAOD/8AAAABAA4QAAAOF/8AAAABAA4YAAAOH/8AAAABAA4gAAAOJ/8AAAABAA4oAAAOL/8AAAABAA4wAAAON/8AAAABAA44AAAOP/8AAAABAA5AAAAOR/8AAAABAA5IAAAOT/8AAAABAA5QAAAOV/8AAAABAA5YAAAOX/8AAAABAA5gAAAOZ/8AAAABAA5oAAAOb/8AAAABAA5wAAAOd/8AAAABAA54AAAOf/8AAAABAA6AAAAOh/8AAAABAA6IAAAOj/8AAAABAA6QAAAOl/8AAAABAA6YAAAOn/8AAAABAA6gAAAOp/8AAAABAA6oAAAOr/8AAAABAA6wAAAOt/8AAAABAA64AAAOv/8AAAABAA7AAAAOx/8AAAABAA7IAAAOz/8AAAABAA7QAAAO1/8AAAABAA7YAAAO3/8AAAABAA7gAAAO5/8AAAABAA7oAAAO7/8AAAABAA7wAAAO9/8AAAABAA74AAAO//0AAAABAA8AAAAPB/8AAAABAA8IAAAPD/8AAAABAA8QAAAPF/8AAAABAA8YAAAPH/8AAAABAA8gAAAPJ/8AAAABAA8oAAAPL/8AAAABAA8wAAAPN/8AAAABAA84AAAPP/8AAAABAA9AAAAPR/8AAAABAA9IAAAPT/8AAAABAA9QAAAPV/8AAAABAA9YAAAPX/8AAAABAA9gAAAPZ/8AAAABAA9oAAAPb/8AAAABAA9wAAAPd/8AAAABAA94AAAPf/8AAAABAA+AAAAPh/8AAAABAA+IAAAPj/8AAAABAA+QAAAPl/8AAAABAA+YAAAPn/8AAAABAA+gAAAPp/8AAAABAA+oAAAPr/8AAAABAA+wAAAPt/8AAAABAA+4AAAPv/8AAAABAA/AAAAPx/8AAAABAA/IAAAPz/8AAAABAA/QAAAP1/8AAAABAA/YAAAP3/8AAAABAA/gAAAP5/8AAAABAA/oAAAP7/8AAAABAA/wAAAP9/8AAAABAA/4AAAP//0AAAABABAAAAAQB/8AAAABABAIAAAQD/8AAAABABAQAAAQF/8AAAABABAYAAAQH/8AAAABABAgAAAQJ/8AAAABABAoAAAQL/8AAAABABAwAAAQN/8AAAABABA4AAAQP/8AAAABABBAAAAQR/8AAAABABBIAAAQT/8AAAABABBQAAAQV/8AAAABABBYAAAQX/8AAAABABBgAAAQZ/8AAAABABBoAAAQb/8AAAABABBwAAAQd/8AAAABABB4AAAQf/8AAAABABCAAAAQh/8AAAABABCIAAAQj/8AAAABABCQAAAQl/8AAAABABCYAAAQn/8AAAABABCgAAAQp/8AAAABABCoAAAQr/8AAAABABCwAAAQt/8AAAABABC4AAAQv/8AAAABABDAAAAQx/8AAAABABDIAAAQz/8AAAABABDQAAAQ1/8AAAABABDYAAAQ3/8AAAABABDgAAAQ5/8AAAABABDoAAAQ7/8AAAABABDwAAAQ9/8AAAABABD4AAAQ//0AAAABAAMAAAAAAAD/tQAyAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQCAAEBAQtBZG9iZUJsYW5rAAEBATD4G/gciwwe+B0B+B4Ci/sM+gD6BAUeGgA/DB8cCAEMIvdMD/dZEfdRDCUcGRYMJAAFAQEGDk1YZ0Fkb2JlSWRlbnRpdHlDb3B5cmlnaHQgMjAxMyBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5BZG9iZSBCbGFua0Fkb2JlQmxhbmstMjA0OQAAAgABB/8DAAEAAAAIAQgBAgABAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcABxAHIAcwB0AHUAdgB3AHgAeQB6AHsAfAB9AH4AfwCAAIEAggCDAIQAhQCGAIcAiACJAIoAiwCMAI0AjgCPAJAAkQCSAJMAlACVAJYAlwCYAJkAmgCbAJwAnQCeAJ8AoAChAKIAowCkAKUApgCnAKgAqQCqAKsArACtAK4ArwCwALEAsgCzALQAtQC2ALcAuAC5ALoAuwC8AL0AvgC/AMAAwQDCAMMAxADFAMYAxwDIAMkAygDLAMwAzQDOAM8A0ADRANIA0wDUANUA1gDXANgA2QDaANsA3ADdAN4A3wDgAOEA4gDjAOQA5QDmAOcA6ADpAOoA6wDsAO0A7gDvAPAA8QDyAPMA9AD1APYA9wD4APkA+gD7APwA/QD+AP8BAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwFYAVkBWgFbAVwBXQFeAV8BYAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkBigGLAYwBjQGOAY8BkAGRAZIBkwGUAZUBlgGXAZgBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBpQGmAacBqAGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzAHNAc4BzwHQAdEB0gHTAdQB1QHWAdcB2AHZAdoB2wHcAd0B3gHfAeAB4QHiAeMB5AHlAeYB5wHoAekB6gHrAewB7QHuAe8B8AHxAfIB8wH0AfUB9gH3AfgB+QH6AfsB/AH9Af4B/wIAAgECAgIDAgQCBQIGAgcCCAIJAgoCCwIMAg0CDgIPAhACEQISAhMCFAIVAhYCFwIYAhkCGgIbAhwCHQIeAh8CIAIhAiICIwIkAiUCJgInAigCKQIqAisCLAItAi4CLwIwAjECMgIzAjQCNQI2AjcCOAI5AjoCOwI8Aj0CPgI/AkACQQJCAkMCRAJFAkYCRwJIAkkCSgJLAkwCTQJOAk8CUAJRAlICUwJUAlUCVgJXAlgCWQJaAlsCXAJdAl4CXwJgAmECYgJjAmQCZQJmAmcCaAJpAmoCawJsAm0CbgJvAnACcQJyAnMCdAJ1AnYCdwJ4AnkCegJ7AnwCfQJ+An8CgAKBAoICgwKEAoUChgKHAogCiQKKAosCjAKNAo4CjwKQApECkgKTApQClQKWApcCmAKZApoCmwKcAp0CngKfAqACoQKiAqMCpAKlAqYCpwKoAqkCqgKrAqwCrQKuAq8CsAKxArICswK0ArUCtgK3ArgCuQK6ArsCvAK9Ar4CvwLAAsECwgLDAsQCxQLGAscCyALJAsoCywLMAs0CzgLPAtAC0QLSAtMC1ALVAtYC1wLYAtkC2gLbAtwC3QLeAt8C4ALhAuIC4wLkAuUC5gLnAugC6QLqAusC7ALtAu4C7wLwAvEC8gLzAvQC9QL2AvcC+AL5AvoC+wL8Av0C/gL/AwADAQMCAwMDBAMFAwYDBwMIAwkDCgMLAwwDDQMOAw8DEAMRAxIDEwMUAxUDFgMXAxgDGQMaAxsDHAMdAx4DHwMgAyEDIgMjAyQDJQMmAycDKAMpAyoDKwMsAy0DLgMvAzADMQMyAzMDNAM1AzYDNwM4AzkDOgM7AzwDPQM+Az8DQANBA0IDQwNEA0UDRgNHA0gDSQNKA0sDTANNA04DTwNQA1EDUgNTA1QDVQNWA1cDWANZA1oDWwNcA10DXgNfA2ADYQNiA2MDZANlA2YDZwNoA2kDagNrA2wDbQNuA28DcANxA3IDcwN0A3UDdgN3A3gDeQN6A3sDfAN9A34DfwOAA4EDggODA4QDhQOGA4cDiAOJA4oDiwOMA40DjgOPA5ADkQOSA5MDlAOVA5YDlwOYA5kDmgObA5wDnQOeA58DoAOhA6IDowOkA6UDpgOnA6gDqQOqA6sDrAOtA64DrwOwA7EDsgOzA7QDtQO2A7cDuAO5A7oDuwO8A70DvgO/A8ADwQPCA8MDxAPFA8YDxwPIA8kDygPLA8wDzQPOA88D0APRA9ID0wPUA9UD1gPXA9gD2QPaA9sD3APdA94D3wPgA+ED4gPjA+QD5QPmA+cD6APpA+oD6wPsA+0D7gPvA/AD8QPyA/MD9AP1A/YD9wP4A/kD+gP7A/wD/QP+A/8EAAQBBAIEAwQEBAUEBgQHBAgECQQKBAsEDAQNBA4EDwQQBBEEEgQTBBQEFQQWBBcEGAQZBBoEGwQcBB0EHgQfBCAEIQQiBCMEJAQlBCYEJwQoBCkEKgQrBCwELQQuBC8EMAQxBDIEMwQ0BDUENgQ3BDgEOQQ6BDsEPAQ9BD4EPwRABEEEQgRDBEQERQRGBEcESARJBEoESwRMBE0ETgRPBFAEUQRSBFMEVARVBFYEVwRYBFkEWgRbBFwEXQReBF8EYARhBGIEYwRkBGUEZgRnBGgEaQRqBGsEbARtBG4EbwRwBHEEcgRzBHQEdQR2BHcEeAR5BHoEewR8BH0EfgR/BIAEgQSCBIMEhASFBIYEhwSIBIkEigSLBIwEjQSOBI8EkASRBJIEkwSUBJUElgSXBJgEmQSaBJsEnASdBJ4EnwSgBKEEogSjBKQEpQSmBKcEqASpBKoEqwSsBK0ErgSvBLAEsQSyBLMEtAS1BLYEtwS4BLkEugS7BLwEvQS+BL8EwATBBMIEwwTEBMUExgTHBMgEyQTKBMsEzATNBM4EzwTQBNEE0gTTBNQE1QTWBNcE2ATZBNoE2wTcBN0E3gTfBOAE4QTiBOME5ATlBOYE5wToBOkE6gTrBOwE7QTuBO8E8ATxBPIE8wT0BPUE9gT3BPgE+QT6BPsE/AT9BP4E/wUABQEFAgUDBQQFBQUGBQcFCAUJBQoFCwUMBQ0FDgUPBRAFEQUSBRMFFAUVBRYFFwUYBRkFGgUbBRwFHQUeBR8FIAUhBSIFIwUkBSUFJgUnBSgFKQUqBSsFLAUtBS4FLwUwBTEFMgUzBTQFNQU2BTcFOAU5BToFOwU8BT0FPgU/BUAFQQVCBUMFRAVFBUYFRwVIBUkFSgVLBUwFTQVOBU8FUAVRBVIFUwVUBVUFVgVXBVgFWQVaBVsFXAVdBV4FXwVgBWEFYgVjBWQFZQVmBWcFaAVpBWoFawVsBW0FbgVvBXAFcQVyBXMFdAV1BXYFdwV4BXkFegV7BXwFfQV+BX8FgAWBBYIFgwWEBYUFhgWHBYgFiQWKBYsFjAWNBY4FjwWQBZEFkgWTBZQFlQWWBZcFmAWZBZoFmwWcBZ0FngWfBaAFoQWiBaMFpAWlBaYFpwWoBakFqgWrBawFrQWuBa8FsAWxBbIFswW0BbUFtgW3BbgFuQW6BbsFvAW9Bb4FvwXABcEFwgXDBcQFxQXGBccFyAXJBcoFywXMBc0FzgXPBdAF0QXSBdMF1AXVBdYF1wXYBdkF2gXbBdwF3QXeBd8F4AXhBeIF4wXkBeUF5gXnBegF6QXqBesF7AXtBe4F7wXwBfEF8gXzBfQF9QX2BfcF+AX5BfoF+wX8Bf0F/gX/BgAGAQYCBgMGBAYFBgYGBwYIBgkGCgYLBgwGDQYOBg8GEAYRBhIGEwYUBhUGFgYXBhgGGQYaBhsGHAYdBh4GHwYgBiEGIgYjBiQGJQYmBicGKAYpBioGKwYsBi0GLgYvBjAGMQYyBjMGNAY1BjYGNwY4BjkGOgY7BjwGPQY+Bj8GQAZBBkIGQwZEBkUGRgZHBkgGSQZKBksGTAZNBk4GTwZQBlEGUgZTBlQGVQZWBlcGWAZZBloGWwZcBl0GXgZfBmAGYQZiBmMGZAZlBmYGZwZoBmkGagZrBmwGbQZuBm8GcAZxBnIGcwZ0BnUGdgZ3BngGeQZ6BnsGfAZ9Bn4GfwaABoEGggaDBoQGhQaGBocGiAaJBooGiwaMBo0GjgaPBpAGkQaSBpMGlAaVBpYGlwaYBpkGmgabBpwGnQaeBp8GoAahBqIGowakBqUGpganBqgGqQaqBqsGrAatBq4GrwawBrEGsgazBrQGtQa2BrcGuAa5BroGuwa8Br0Gvga/BsAGwQbCBsMGxAbFBsYGxwbIBskGygbLBswGzQbOBs8G0AbRBtIG0wbUBtUG1gbXBtgG2QbaBtsG3AbdBt4G3wbgBuEG4gbjBuQG5QbmBucG6AbpBuoG6wbsBu0G7gbvBvAG8QbyBvMG9Ab1BvYG9wb4BvkG+gb7BvwG/Qb+Bv8HAAcBBwIHAwcEBwUHBgcHBwgHCQcKBwsHDAcNBw4HDwcQBxEHEgcTBxQHFQcWBxcHGAcZBxoHGwccBx0HHgcfByAHIQciByMHJAclByYHJwcoBykHKgcrBywHLQcuBy8HMAcxBzIHMwc0BzUHNgc3BzgHOQc6BzsHPAc9Bz4HPwdAB0EHQgdDB0QHRQdGB0cHSAdJB0oHSwdMB00HTgdPB1AHUQdSB1MHVAdVB1YHVwdYB1kHWgdbB1wHXQdeB18HYAdhB2IHYwdkB2UHZgdnB2gHaQdqB2sHbAdtB24HbwdwB3EHcgdzB3QHdQd2B3cHeAd5B3oHewd8B30Hfgd/B4AHgQeCB4MHhAeFB4YHhweIB4kHigeLB4wHjQeOB48HkAeRB5IHkweUB5UHlgeXB5gHmQeaB5sHnAedB54HnwegB6EHogejB6QHpQemB6cHqAepB6oHqwesB60HrgevB7AHsQeyB7MHtAe1B7YHtwe4B7kHuge7B7wHvQe+B78HwAfBB8IHwwfEB8UHxgfHB8gHyQfKB8sHzAfNB84HzwfQB9EH0gfTB9QH1QfWB9cH2AfZB9oH2wfcB90H3gffB+AH4QfiB+MH5AflB+YH5wfoB+kH6gfrB+wH7QfuB+8H8AfxB/IH8wf0B/UH9gf3B/gH+Qf6B/sH/Af9B/4H/wgACAEIAggDCAQIBQgGCAcICAgJCAoICwgMCA0IDggPCBAIEQgSCBMIFAgVCBYIFwgYCBkIGggbCBwIHQgeCB8IIAghCCIIIwgkCCUIJggnCCgIKQgqCCsILAgtCC4ILwgwCDEIMggzCDQINQg2CDcIOAg5CDoIOwg8CD0IPgg/CEAIQQhCCEMIRAhFCEYIRwhICEkISghLIPsMt/oktwH3ELf5LLcD9xD6BBX+fPmE+nwH/Vj+JxX50gf3xfwzBaawFfvF+DcF+PYGpmIV/dIH+8X4MwVwZhX3xfw3Bfz2Bg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODgABAQEK+B8MJpocGSQS+46LHAVGiwa9Cr0L+ucVAAPoAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAA') format('truetype'); }",
t.fontStyleAliasesMap={n:"normal",b:"bold",i:"italic",o:"oblique"},t.fontStretchAliasesMap={a:"ultra-condensed",b:"extra-condensed",c:"condensed",d:"semi-condensed",n:"normal",e:"semi-expanded",f:"expanded",g:"extra-expanded",h:"ultra-expanded"},t.prototype={constructor:t,loadFonts:function(){var e,n=this
if(this._started)throw new Error("FontLoader: loadFonts can not be called twice. Create new FontLoader to load different fonts.")
return this._started=!0,0===this._numberOfFonts?void this._finish():(null!==this.timeout&&(this._timeoutId=window.setTimeout(function(){n._finish()},this.timeout)),this._testContainer=this._document.createElement("div"),this._testContainer.style.cssText="position:absolute; left:-10000px; top:-10000px; white-space:nowrap; font-size:20px; line-height:20px; visibility:hidden;",this._testDiv=this._document.createElement("div"),this._testDiv.style.position="absolute",this._testDiv.appendChild(this._document.createTextNode(t.referenceText)),void(t.useAdobeBlank?t.adobeBlankReferenceSize?this._loadFonts():this._loadAdobeBlankFont():(e=this._getNewFontVariationsFromFonts(this._fontsArray),e.length&&this._extractReferenceFontSizes(e),this._loadFonts())))},_extractReferenceFontSizes:function(e){var r,i,o,A,a,s
for(r=this._testDiv.cloneNode(!0),this._testContainer.appendChild(r),this._document.body.appendChild(this._testContainer),o=0;o<e.length;o++)for(s=e[o],A=s.key,t.referenceFontFamilyVariationSizes[A]=[],i=0;i<t.referenceFontFamilies.length;i++)r.style.fontFamily=t.referenceFontFamilies[i],r.style.fontWeight=s.weight,r.style.fontStyle=s.style,r.style.fontStretch=s.stretch,a=new n(r.offsetWidth,r.offsetHeight),t.referenceFontFamilyVariationSizes[A].push(a)
this._testContainer.parentNode.removeChild(this._testContainer),r.parentNode.removeChild(r)},_loadAdobeBlankFont:function(){var e,n=this,i="serif"
this._addAdobeBlankFontFaceIfNeeded(),e=this._testDiv.cloneNode(!0),this._testContainer.appendChild(e),this._document.body.appendChild(this._testContainer),t.useIntervalChecking?(e.style.fontFamily=t.referenceFontFamilies[0]+", "+i,this._testContainer.appendChild(e),this._intervalId=window.setInterval(function(){n._checkAdobeBlankSize()},this._intervalDelay),this._checkAdobeBlankSize()):(e.style.fontFamily=i,this._adobeBlankSizeWatcher=new r(e,{container:this._testContainer,delegate:this,continuous:!0,direction:r.directions.decrease,dimension:r.dimensions.horizontal,document:this._document}),this._adobeBlankSizeWatcher.prepareForWatch(),this._adobeBlankSizeWatcher.beginWatching(),e.style.fontFamily=t.referenceFontFamilies[0]+", "+i)},_getNewFontVariationsFromFonts:function(e){var n,r,i,o=[],A={}
for(i=0;i<e.length;i++)n=e[i],r=n.variationKey(),r in A||r in t.referenceFontFamilyVariationSizes||(A[r]=!0,o.push({key:r,weight:n.weight,style:n.style,stretch:n.stretch}))
return o},_parseFonts:function(t){var n,r,i,o,A=[],a={}
for(r=0;r<t.length;r++)i=t[r],"string"==typeof i?i.indexOf(":")>-1?A=A.concat(this._parseFVD(i)):A.push(new e({family:i,weight:400,style:"normal",stretch:"normal"})):A.push(new e(i))
for(n=[],r=0;r<A.length;r++)o=A[r].fontKey(),o in a||(a[o]=!0,n.push(A[r]))
return n},_parseFVD:function(n){var r,i,o,A,a,s,c,l,u,d,f=[],h=n.split(":")
for(r=h[0],i=h[1].split(","),o=0;o<i.length;o++){if(A=i[o],A.length<2||A.length>3)throw new Error("Invalid Font Variation Description: '"+n+"', number of variation characters must be 2 or 3")
if(a=A[0],s=A[1],c="n",3===A.length&&(c=A[2]),!(a in t.fontStyleAliasesMap))throw new Error("Invalid Font Variation Description: '"+n+"', the first variant character is not complying to FVD font-style specification")
if(u=t.fontStyleAliasesMap[a],l=parseInt(s,10),isNaN(l))throw new Error("Invalid Font Variation Description: '"+n+"', the second variant character is not complying to FVD font-weight specification")
if(l*=100,!(c in t.fontStretchAliasesMap))throw new Error("Invalid Font Variation Description: '"+n+"', the third variant character is not complying to FVD font-stretch specification")
d=t.fontStretchAliasesMap[c],f.push(new e({family:r,weight:l,style:u,stretch:d}))}return f},_addAdobeBlankFontFaceIfNeeded:function(){var e
this._document.getElementById(t.adobeBlankFontFaceStyleId)||(e=this._document.createElement("style"),e.setAttribute("type","text/css"),e.setAttribute("id",t.adobeBlankFontFaceStyleId),e.appendChild(this._document.createTextNode(t.adobeBlankFontFaceRule)),this._document.getElementsByTagName("head")[0].appendChild(e))},_checkAdobeBlankSize:function(){var e=this._testContainer.firstChild
this._adobeBlankLoaded(e)},_adobeBlankLoaded:function(e){0===e.offsetWidth&&(t.adobeBlankReferenceSize=new n(e.offsetWidth,e.offsetHeight),null!==this._adobeBlankSizeWatcher?(this._adobeBlankSizeWatcher.endWatching(),this._adobeBlankSizeWatcher.removeScrollWatchers(),this._adobeBlankSizeWatcher=null):(window.clearInterval(this._intervalId),e.parentNode.removeChild(e)),this._testContainer.parentNode.removeChild(this._testContainer),this._loadFonts())},_cloneNodeSetStyleAndAttributes:function(e,t,n){var r=this._testDiv.cloneNode(!0)
return r.style.fontWeight=e.weight,r.style.fontStyle=e.style,r.style.fontStretch=e.stretch,r.setAttribute("data-font-map-key",t),r.setAttribute("data-ref-font-family-index",String(n)),r},_getFontMapKeyFromElement:function(e){return e.getAttribute("data-font-map-key")},_getFontFromElement:function(e){var t=this._getFontMapKeyFromElement(e)
return this._fontsMap[t]},_getFontFamilyFromElement:function(e){var t=this._getFontFromElement(e)
return t.family},_getReferenceFontFamilyIndexFromElement:function(e){return e.getAttribute("data-ref-font-family-index")},_getReferenceFontFamilyFromElement:function(e){var n=this._getReferenceFontFamilyIndexFromElement(e)
return t.referenceFontFamilies[n]},_loadFonts:function(){var e,n,i,o,A,a,s,c,l,u,d=this
for(e=0;e<this._numberOfFonts;e++)for(A=this._fontsArray[e],a=A.fontKey(),this._fontsMap[a]=A,n=0;n<t.referenceFontFamilies.length;n++)i=this._cloneNodeSetStyleAndAttributes(A,a,n),t.useResizeEvent?(i.style.fontFamily=t.referenceFontFamilies[n],this._testContainer.appendChild(i)):t.useIntervalChecking?(i.style.fontFamily="'"+A.family+"', "+t.referenceFontFamilies[n],this._testContainer.appendChild(i)):(i.style.fontFamily=t.referenceFontFamilies[n],t.useAdobeBlank?(c=t.adobeBlankReferenceSize,l=r.directions.increase,u=r.dimensions.horizontal):(s=A.variationKey(),c=t.referenceFontFamilyVariationSizes[s][n],l=r.directions.both,u=r.dimensions.both),o=new r(i,{container:this._testContainer,delegate:this,size:c,direction:l,dimension:u,document:this._document}),this._sizeWatchers.push(o))
if(this._document.body.appendChild(this._testContainer),t.useResizeEvent){for(n=0;n<this._testContainer.childNodes.length;n++)i=this._testContainer.childNodes[n],i.attachEvent("onresize",function(e,t){return function(){e._elementSizeChanged(t)}}(this,i))
window.setTimeout(function(){for(n=0;n<d._testContainer.childNodes.length;n++)i=d._testContainer.childNodes[n],i.style.fontFamily="'"+d._getFontFamilyFromElement(i)+"', "+d._getReferenceFontFamilyFromElement(i)},0)}else if(t.useIntervalChecking)this._intervalId=window.setInterval(function(){d._checkSizes()},this._intervalDelay),this._checkSizes()
else{for(e=0;e<this._sizeWatchers.length;e++)o=this._sizeWatchers[e],o.prepareForWatch()
for(e=0;e<this._sizeWatchers.length;e++)o=this._sizeWatchers[e],o.beginWatching(),i=o.getWatchedElement(),i.style.fontFamily="'"+this._getFontFamilyFromElement(i)+"', "+d._getReferenceFontFamilyFromElement(i)}},_checkSizes:function(){var e,r,i,o,A,a,s
for(e=this._testContainer.childNodes.length-1;e>=0;e--)r=this._testContainer.childNodes[e],A=new n(r.offsetWidth,r.offsetHeight),t.useAdobeBlank?a=t.adobeBlankReferenceSize:(i=this._getFontFromElement(r),o=i.variationKey(),s=this._getReferenceFontFamilyIndexFromElement(r),a=t.referenceFontFamilyVariationSizes[o][s]),a.isEqual(A)||(r.parentNode.removeChild(r),this._elementSizeChanged(r))},_elementSizeChanged:function(e){var t,n
this._finished||(n=this._getFontMapKeyFromElement(e),"undefined"!=typeof this._fontsMap[n]&&(t=this._fontsMap[n],this._numberOfLoadedFonts++,delete this._fontsMap[n],this.delegate&&"function"==typeof this.delegate.fontLoaded&&this.delegate.fontLoaded(t.toJSON()),this._numberOfLoadedFonts===this._numberOfFonts&&this._finish()))},_finish:function(){var e,t,n,i,o=[]
if(!this._finished){for(this._finished=!0,null!==this._adobeBlankSizeWatcher&&(this._adobeBlankSizeWatcher.getState()===r.states.watchingForSizeChange&&this._adobeBlankSizeWatcher.endWatching(),this._adobeBlankSizeWatcher=null),t=0;t<this._sizeWatchers.length;t++)n=this._sizeWatchers[t],n.getState()===r.states.watchingForSizeChange&&n.endWatching()
if(this._sizeWatchers=[],null!==this._testContainer&&this._testContainer.parentNode.removeChild(this._testContainer),null!==this._timeoutId&&window.clearTimeout(this._timeoutId),null!==this._intervalId&&window.clearInterval(this._intervalId),this.delegate){if(this._numberOfLoadedFonts<this._numberOfFonts){for(i in this._fontsMap)this._fontsMap.hasOwnProperty(i)&&o.push(this._fontsMap[i].toJSON())
e={message:"Not all fonts were loaded ("+this._numberOfLoadedFonts+"/"+this._numberOfFonts+")",notLoadedFonts:o}}else e=null
"function"==typeof this.delegate.complete?this.delegate.complete(e):"function"==typeof this.delegate.fontsLoaded&&this.delegate.fontsLoaded(e)}}},sizeWatcherChangedSize:function(e){var t=e.getWatchedElement()
e===this._adobeBlankSizeWatcher?this._adobeBlankLoaded(t):this._elementSizeChanged(t)}},n.sizeFromString=function(e){var t=e.split(",")
return 2!==t.length?null:new n(t[0],t[1])},n.prototype.isEqual=function(e){return this.width===e.width&&this.height===e.height},n.prototype.toString=function(){return this.width+","+this.height},r.states={initialized:0,generatedScrollWatchers:1,appendedScrollWatchers:2,preparedScrollWatchers:3,watchingForSizeChange:4},r.directions={decrease:1,increase:2,both:3},r.dimensions={horizontal:1,vertical:2,both:3},r.prototype={constructor:r,getWatchedElement:function(){return this._element},getState:function(){return this._state},setSize:function(e){this._size=e,this._direction&r.directions.increase&&(this._sizeIncreaseWatcherContentElm.style.cssText="width: "+(e.width+this._scrollAmount)+"px; height: "+(e.height+this._scrollAmount)+"px;"),this._direction&r.directions.decrease&&(this._sizeDecreaseWatcherElm.style.cssText="position:absolute; left: 0px; top: 0px; overflow: hidden; width: "+(e.width-this._scrollAmount)+"px; height: "+(e.height-this._scrollAmount)+"px;")},_generateScrollWatchers:function(e){this._element.style.position="absolute",this._direction&r.directions.increase&&(this._sizeIncreaseWatcherContentElm=this._document.createElement("div"),this._sizeIncreaseWatcherElm=this._document.createElement("div"),this._sizeIncreaseWatcherElm.style.cssText="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;",this._sizeIncreaseWatcherElm.appendChild(this._sizeIncreaseWatcherContentElm),this._element.appendChild(this._sizeIncreaseWatcherElm)),this._direction&r.directions.decrease&&(this._sizeDecreaseWatcherElm=this._document.createElement("div"),this._sizeDecreaseWatcherElm.appendChild(this._element)),e&&this.setSize(e),this._state=r.states.generatedScrollWatchers},_appendScrollWatchersToElement:function(e){if(this._state!==r.states.generatedScrollWatchers)throw new Error("SizeWatcher._appendScrollWatchersToElement() was invoked before SizeWatcher._generateScrollWatchers()")
this._direction&r.directions.decrease?e.appendChild(this._sizeDecreaseWatcherElm):e.appendChild(this._element),this._state=r.states.appendedScrollWatchers},removeScrollWatchers:function(){this._direction&r.directions.decrease?this._sizeDecreaseWatcherElm.parentNode&&this._sizeDecreaseWatcherElm.parentNode.removeChild(this._sizeDecreaseWatcherElm):this._element.parentNode&&this._element.parentNode.removeChild(this._element)},prepareForWatch:function(){var e,t=!0,i=!0
if(this._state!==r.states.appendedScrollWatchers)throw new Error("SizeWatcher.prepareForWatch() invoked before SizeWatcher._appendScrollWatchersToElement()")
if(null===this._size&&this.setSize(new n(this._element.offsetWidth,this._element.offsetHeight)),this._direction&r.directions.decrease&&(t=this._scrollElementToBottomRight(this._sizeDecreaseWatcherElm)),this._direction&r.directions.increase&&(i=this._scrollElementToBottomRight(this._sizeIncreaseWatcherElm)),!t||!i){for(e=this._element.parentNode;e!==this._document&&null!==e;)e=e.parentNode
if(null===e)throw new Error("Can't set scroll position of scroll watchers. SizeWatcher is not in the DOM tree.")
console&&"function"==typeof console.warn&&console.warn("SizeWatcher can't set scroll position of scroll watchers.")}this._state=r.states.preparedScrollWatchers},_scrollElementToBottomRight:function(e){var t=!0
return this._dimension&r.dimensions.vertical&&(e.scrollTop=this._scrollAmount,t=t&&e.scrollTop>0),this._dimension&r.dimensions.horizontal&&(e.scrollLeft=this._scrollAmount,t=t&&e.scrollLeft>0),t},beginWatching:function(){if(this._state!==r.states.preparedScrollWatchers)throw new Error("SizeWatcher.beginWatching() invoked before SizeWatcher.prepareForWatch()")
this._direction&r.directions.decrease&&this._sizeDecreaseWatcherElm.addEventListener("scroll",this,!1),this._direction&r.directions.increase&&this._sizeIncreaseWatcherElm.addEventListener("scroll",this,!1),this._state=r.states.watchingForSizeChange},endWatching:function(){if(this._state!==r.states.watchingForSizeChange)throw new Error("SizeWatcher.endWatching() invoked before SizeWatcher.beginWatching()")
this._direction&r.directions.decrease&&this._sizeDecreaseWatcherElm.removeEventListener("scroll",this,!1),this._direction&r.directions.increase&&this._sizeIncreaseWatcherElm.removeEventListener("scroll",this,!1),this._state=r.states.appendedScrollWatchers},handleEvent:function(e){var t,i
this._state===r.states.watchingForSizeChange&&(t=new n(this._element.offsetWidth,this._element.offsetHeight),i=this._size,i.isEqual(t)||this._delegate&&"function"==typeof this._delegate.sizeWatcherChangedSize&&(this._delegate.sizeWatcherChangedSize(this),this._state!==r.states.watchingForSizeChange)||(this._continuous?(this.setSize(t),this._state=r.states.appendedScrollWatchers,this.prepareForWatch(),this._state=r.states.watchingForSizeChange):this.endWatching()))}},t}),function(e){"use strict"
var t=e.CSSOM={}
t.CSSStyleDeclaration=function(){this.length=0,this.parentRule=null,this._importants={}},t.CSSStyleDeclaration.prototype={constructor:t.CSSStyleDeclaration,getPropertyValue:function(e){return this[e]||""},setProperty:function(e,t,n){if(this[e]){var r=Array.prototype.indexOf.call(this,e)
0>r&&(this[this.length]=e,this.length++)}else this[this.length]=e,this.length++
this[e]=t,this._importants[e]=n},removeProperty:function(e){if(!(e in this))return""
var t=Array.prototype.indexOf.call(this,e)
if(0>t)return""
var n=this[e]
return this[e]="",Array.prototype.splice.call(this,t,1),n},getPropertyCSSValue:function(){},getPropertyPriority:function(e){return this._importants[e]||""},getPropertyShorthand:function(){},isPropertyImplicit:function(){},get cssText(){for(var e=[],t=0,n=this.length;n>t;++t){var r=this[t],i=this.getPropertyValue(r),o=this.getPropertyPriority(r)
o&&(o=" !"+o),e[t]=r+": "+i+o+";"}return e.join(" ")},set cssText(e){var n,r
for(n=this.length;n--;)r=this[n],this[r]=""
Array.prototype.splice.call(this,0,this.length),this._importants={}
var i=t.parse("#bogus{"+e+"}").cssRules[0].style,o=i.length
for(n=0;o>n;++n)r=i[n],this.setProperty(i[n],i.getPropertyValue(r),i.getPropertyPriority(r))}},t.CSSRule=function(){this.parentRule=null,this.parentStyleSheet=null},t.CSSRule.UNKNOWN_RULE=0,t.CSSRule.STYLE_RULE=1,t.CSSRule.CHARSET_RULE=2,t.CSSRule.IMPORT_RULE=3,t.CSSRule.MEDIA_RULE=4,t.CSSRule.FONT_FACE_RULE=5,t.CSSRule.PAGE_RULE=6,t.CSSRule.KEYFRAMES_RULE=7,t.CSSRule.KEYFRAME_RULE=8,t.CSSRule.MARGIN_RULE=9,t.CSSRule.NAMESPACE_RULE=10,t.CSSRule.COUNTER_STYLE_RULE=11,t.CSSRule.SUPPORTS_RULE=12,t.CSSRule.DOCUMENT_RULE=13,t.CSSRule.FONT_FEATURE_VALUES_RULE=14,t.CSSRule.VIEWPORT_RULE=15,t.CSSRule.REGION_STYLE_RULE=16,t.CSSRule.prototype={constructor:t.CSSRule},t.CSSStyleRule=function(){t.CSSRule.call(this),this.selectorText="",this.style=new t.CSSStyleDeclaration,this.style.parentRule=this},t.CSSStyleRule.prototype=new t.CSSRule,t.CSSStyleRule.prototype.constructor=t.CSSStyleRule,t.CSSStyleRule.prototype.type=1,Object.defineProperty(t.CSSStyleRule.prototype,"cssText",{get:function(){var e
return e=this.selectorText?this.selectorText+" {"+this.style.cssText+"}":""},set:function(e){var n=t.CSSStyleRule.parse(e)
this.style=n.style,this.selectorText=n.selectorText}}),t.CSSStyleRule.parse=function(e){for(var n,r,i,o=0,A="selector",a=o,s="",c={selector:!0,value:!0},l=new t.CSSStyleRule,u="";i=e.charAt(o);o++)switch(i){case" ":case"	":case"\r":case"\n":case"\f":if(c[A])switch(e.charAt(o-1)){case" ":case"	":case"\r":case"\n":case"\f":break
default:s+=" "}break
case'"':if(a=o+1,n=e.indexOf('"',a)+1,!n)throw'" is missing'
s+=e.slice(o,n),o=n-1
break
case"'":if(a=o+1,n=e.indexOf("'",a)+1,!n)throw"' is missing"
s+=e.slice(o,n),o=n-1
break
case"/":if("*"===e.charAt(o+1)){if(o+=2,n=e.indexOf("*/",o),-1===n)throw new SyntaxError("Missing */")
o=n+1}else s+=i
break
case"{":"selector"===A&&(l.selectorText=s.trim(),s="",A="name")
break
case":":"name"===A?(r=s.trim(),s="",A="value"):s+=i
break
case"!":"value"===A&&e.indexOf("!important",o)===o?(u="important",o+="important".length):s+=i
break
case";":"value"===A?(l.style.setProperty(r,s.trim(),u),u="",s="",A="name"):s+=i
break
case"}":if("value"===A)l.style.setProperty(r,s.trim(),u),u="",s=""
else{if("name"===A)break
s+=i}A="selector"
break
default:s+=i}return l},t.MediaList=function(){this.length=0},t.MediaList.prototype={constructor:t.MediaList,get mediaText(){return Array.prototype.join.call(this,", ")},set mediaText(e){for(var t=e.split(","),n=this.length=t.length,r=0;n>r;r++)this[r]=t[r].trim()},appendMedium:function(e){-1===Array.prototype.indexOf.call(this,e)&&(this[this.length]=e,this.length++)},deleteMedium:function(e){var t=Array.prototype.indexOf.call(this,e);-1!==t&&Array.prototype.splice.call(this,t,1)}},t.CSSMediaRule=function(){t.CSSRule.call(this),this.media=new t.MediaList,this.cssRules=[]},t.CSSMediaRule.prototype=new t.CSSRule,t.CSSMediaRule.prototype.constructor=t.CSSMediaRule,t.CSSMediaRule.prototype.type=4,Object.defineProperty(t.CSSMediaRule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;n>t;t++)e.push(this.cssRules[t].cssText)
return"@media "+this.media.mediaText+" {"+e.join("")+"}"}}),t.CSSImportRule=function(){t.CSSRule.call(this),this.href="",this.media=new t.MediaList,this.styleSheet=new t.CSSStyleSheet},t.CSSImportRule.prototype=new t.CSSRule,t.CSSImportRule.prototype.constructor=t.CSSImportRule,t.CSSImportRule.prototype.type=3,Object.defineProperty(t.CSSImportRule.prototype,"cssText",{get:function(){var e=this.media.mediaText
return"@import url("+this.href+")"+(e?" "+e:"")+";"},set:function(e){for(var t,n,r=0,i="",o="";n=e.charAt(r);r++)switch(n){case" ":case"	":case"\r":case"\n":case"\f":"after-import"===i?i="url":o+=n
break
case"@":i||e.indexOf("@import",r)!==r||(i="after-import",r+="import".length,o="")
break
case"u":if("url"===i&&e.indexOf("url(",r)===r){if(t=e.indexOf(")",r+1),-1===t)throw r+': ")" not found'
r+="url(".length
var A=e.slice(r,t)
A[0]===A[A.length-1]&&('"'!==A[0]&&"'"!==A[0]||(A=A.slice(1,-1))),this.href=A,r=t,i="media"}break
case'"':if("url"===i){if(t=e.indexOf('"',r+1),!t)throw r+": '\"' not found"
this.href=e.slice(r+1,t),r=t,i="media"}break
case"'":if("url"===i){if(t=e.indexOf("'",r+1),!t)throw r+': "\'" not found'
this.href=e.slice(r+1,t),r=t,i="media"}break
case";":"media"===i&&o&&(this.media.mediaText=o.trim())
break
default:"media"===i&&(o+=n)}}}),t.CSSFontFaceRule=function(){t.CSSRule.call(this),this.style=new t.CSSStyleDeclaration,this.style.parentRule=this},t.CSSFontFaceRule.prototype=new t.CSSRule,t.CSSFontFaceRule.prototype.constructor=t.CSSFontFaceRule,t.CSSFontFaceRule.prototype.type=5,Object.defineProperty(t.CSSFontFaceRule.prototype,"cssText",{get:function(){return"@font-face {"+this.style.cssText+"}"}}),t.StyleSheet=function(){this.parentStyleSheet=null},t.CSSStyleSheet=function(){t.StyleSheet.call(this),this.cssRules=[]},t.CSSStyleSheet.prototype=new t.StyleSheet,t.CSSStyleSheet.prototype.constructor=t.CSSStyleSheet,t.CSSStyleSheet.prototype.insertRule=function(e,n){if(0>n||n>this.cssRules.length)throw new RangeError("INDEX_SIZE_ERR")
var r=t.parse(e).cssRules[0]
return r.parentStyleSheet=this,this.cssRules.splice(n,0,r),n},t.CSSStyleSheet.prototype.deleteRule=function(e){if(0>e||e>=this.cssRules.length)throw new RangeError("INDEX_SIZE_ERR")
this.cssRules.splice(e,1)},t.CSSStyleSheet.prototype.toString=function(){for(var e="",t=this.cssRules,n=0;n<t.length;n++)e+=t[n].cssText+"\n"
return e},t.CSSKeyframesRule=function(){t.CSSRule.call(this),this.name="",this.cssRules=[]},t.CSSKeyframesRule.prototype=new t.CSSRule,t.CSSKeyframesRule.prototype.constructor=t.CSSKeyframesRule,t.CSSKeyframesRule.prototype.type=8,Object.defineProperty(t.CSSKeyframesRule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;n>t;t++)e.push("  "+this.cssRules[t].cssText)
return"@"+(this._vendorPrefix||"")+"keyframes "+this.name+" { \n"+e.join("\n")+"\n}"}}),t.CSSKeyframeRule=function(){t.CSSRule.call(this),this.keyText="",this.style=new t.CSSStyleDeclaration,this.style.parentRule=this},t.CSSKeyframeRule.prototype=new t.CSSRule,t.CSSKeyframeRule.prototype.constructor=t.CSSKeyframeRule,t.CSSKeyframeRule.prototype.type=9,Object.defineProperty(t.CSSKeyframeRule.prototype,"cssText",{get:function(){return this.keyText+" {"+this.style.cssText+"} "}}),t.MatcherList=function(){this.length=0},t.MatcherList.prototype={constructor:t.MatcherList,get matcherText(){return Array.prototype.join.call(this,", ")},set matcherText(e){for(var t=e.split(","),n=this.length=t.length,r=0;n>r;r++)this[r]=t[r].trim()},appendMatcher:function(e){-1===Array.prototype.indexOf.call(this,e)&&(this[this.length]=e,this.length++)},deleteMatcher:function(e){var t=Array.prototype.indexOf.call(this,e);-1!==t&&Array.prototype.splice.call(this,t,1)}},t.CSSDocumentRule=function(){t.CSSRule.call(this),this.matcher=new t.MatcherList,this.cssRules=[]},t.CSSDocumentRule.prototype=new t.CSSRule,t.CSSDocumentRule.prototype.constructor=t.CSSDocumentRule,t.CSSDocumentRule.prototype.type=10,Object.defineProperty(t.CSSDocumentRule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;n>t;t++)e.push(this.cssRules[t].cssText)
return"@-moz-document "+this.matcher.matcherText+" {"+e.join("")+"}"}}),t.CSSValue=function(){},t.CSSValue.prototype={constructor:t.CSSValue,set cssText(e){var t=this._getConstructorName()
throw new Error('DOMException: property "cssText" of "'+t+'" is readonly and can not be replaced with "'+e+'"!')},get cssText(){var e=this._getConstructorName()
throw new Error('getter "cssText" of "'+e+'" is not implemented!')},_getConstructorName:function(){var e=this.constructor.toString(),t=e.match(/function\s([^\(]+)/),n=t[1]
return n}},t.CSSValueExpression=function(e,t){this._token=e,this._idx=t},t.CSSValueExpression.prototype=new t.CSSValue,t.CSSValueExpression.prototype.constructor=t.CSSValueExpression,t.CSSValueExpression.prototype.parse=function(){for(var e,t=this._token,n=this._idx,r="",i="",o="",A=[];;++n){if(r=t.charAt(n),""===r){o="css expression error: unfinished expression!"
break}switch(r){case"(":A.push(r),i+=r
break
case")":A.pop(r),i+=r
break
case"/":(e=this._parseJSComment(t,n))?e.error?o="css expression error: unfinished comment in expression!":n=e.idx:(e=this._parseJSRexExp(t,n))?(n=e.idx,i+=e.text):i+=r
break
case"'":case'"':e=this._parseJSString(t,n,r),e?(n=e.idx,i+=e.text):i+=r
break
default:i+=r}if(o)break
if(0===A.length)break}var a
return a=o?{error:o}:{idx:n,expression:i}},t.CSSValueExpression.prototype._parseJSComment=function(e,t){var n,r=e.charAt(t+1)
if("/"===r||"*"===r){var i,o,A=t
if("/"===r?o="\n":"*"===r&&(o="*/"),i=e.indexOf(o,A+1+1),-1!==i)return i=i+o.length-1,n=e.substring(t,i+1),{idx:i,text:n}
var a="css expression error: unfinished comment in expression!"
return{error:a}}return!1},t.CSSValueExpression.prototype._parseJSString=function(e,t,n){var r,i=this._findMatchedIdx(e,t,n)
return-1===i?!1:(r=e.substring(t,i+n.length),{idx:i,text:r})},t.CSSValueExpression.prototype._parseJSRexExp=function(e,t){var n=e.substring(0,t).replace(/\s+$/,""),r=[/^$/,/\($/,/\[$/,/\!$/,/\+$/,/\-$/,/\*$/,/\/\s+/,/\%$/,/\=$/,/\>$/,/<$/,/\&$/,/\|$/,/\^$/,/\~$/,/\?$/,/\,$/,/delete$/,/in$/,/instanceof$/,/new$/,/typeof$/,/void$/],i=r.some(function(e){return e.test(n)})
if(i){var o="/"
return this._parseJSString(e,t,o)}return!1},t.CSSValueExpression.prototype._findMatchedIdx=function(e,t,n){for(var r,i=t,o=-1;;){if(r=e.indexOf(n,i+1),-1===r){r=o
break}var A=e.substring(t+1,r),a=A.match(/\\+$/)
if(!a||a[0]%2===0)break
i=r}var s=e.indexOf("\n",t+1)
return r>s&&(r=o),r},t.parse=function(e){for(var n,r,i,o,A,a,s,c,l,u,d=0,f="before-selector",h="",p={selector:!0,value:!0,atRule:!0,"importRule-begin":!0,importRule:!0,atBlock:!0,"documentRule-begin":!0},g=new t.CSSStyleSheet,m=g,v="",y=/@(-(?:\w+-)+)?keyframes/g,w=function(t){var n=e.substring(0,d).split("\n"),r=n.length,i=n.pop().length+1,o=new Error(t+" (line "+r+", char "+i+")")
throw o.line=r,o["char"]=i,o.styleSheet=g,o};u=e.charAt(d);d++)switch(u){case" ":case"	":case"\r":case"\n":case"\f":p[f]&&(h+=u)
break
case'"':n=d+1
do n=e.indexOf('"',n)+1,n||w('Unmatched "')
while("\\"===e[n-2])
switch(h+=e.slice(d,n),d=n-1,f){case"before-value":f="value"
break
case"importRule-begin":f="importRule"}break
case"'":n=d+1
do n=e.indexOf("'",n)+1,n||w("Unmatched '")
while("\\"===e[n-2])
switch(h+=e.slice(d,n),d=n-1,f){case"before-value":f="value"
break
case"importRule-begin":f="importRule"}break
case"/":"*"===e.charAt(d+1)?(d+=2,n=e.indexOf("*/",d),-1===n?w("Missing */"):d=n+1):h+=u,"importRule-begin"===f&&(h+=" ",f="importRule")
break
case"@":if(e.indexOf("@-moz-document",d)===d){f="documentRule-begin",l=new t.CSSDocumentRule,l.__starts=d,d+="-moz-document".length,h=""
break}if(e.indexOf("@media",d)===d){f="atBlock",A=new t.CSSMediaRule,A.__starts=d,d+="media".length,h=""
break}if(e.indexOf("@import",d)===d){f="importRule-begin",d+="import".length,h+="@import"
break}if(e.indexOf("@font-face",d)===d){f="fontFaceRule-begin",d+="font-face".length,s=new t.CSSFontFaceRule,s.__starts=d,h=""
break}y.lastIndex=d
var B=y.exec(e)
if(B&&B.index===d){f="keyframesRule-begin",c=new t.CSSKeyframesRule,c.__starts=d,c._vendorPrefix=B[1],d+=B[0].length-1,h=""
break}"selector"===f&&(f="atRule"),h+=u
break
case"{":"selector"===f||"atRule"===f?(o.selectorText=h.trim(),o.style.__starts=d,h="",f="before-name"):"atBlock"===f?(A.media.mediaText=h.trim(),m=r=A,A.parentStyleSheet=g,h="",f="before-selector"):"fontFaceRule-begin"===f?(r&&(s.parentRule=r),s.parentStyleSheet=g,o=s,h="",f="before-name"):"keyframesRule-begin"===f?(c.name=h.trim(),r&&(c.parentRule=r),c.parentStyleSheet=g,m=r=c,h="",f="keyframeRule-begin"):"keyframeRule-begin"===f?(o=new t.CSSKeyframeRule,o.keyText=h.trim(),o.__starts=d,h="",f="before-name"):"documentRule-begin"===f&&(l.matcher.matcherText=h.trim(),r&&(l.parentRule=r),m=r=l,l.parentStyleSheet=g,h="",f="before-selector")
break
case":":"name"===f?(i=h.trim(),h="",f="before-value"):h+=u
break
case"(":if("value"===f)if("expression"===h.trim()){var b=new t.CSSValueExpression(e,d).parse()
b.error?w(b.error):(h+=b.expression,d=b.idx)}else f="value-parenthesis",h+=u
else h+=u
break
case")":"value-parenthesis"===f&&(f="value"),h+=u
break
case"!":"value"===f&&e.indexOf("!important",d)===d?(v="important",d+="important".length):h+=u
break
case";":switch(f){case"value":o.style.setProperty(i,h.trim(),v),v="",h="",f="before-name"
break
case"atRule":h="",f="before-selector"
break
case"importRule":a=new t.CSSImportRule,a.parentStyleSheet=a.styleSheet.parentStyleSheet=g,a.cssText=h+u,g.cssRules.push(a),h="",f="before-selector"
break
default:h+=u}break
case"}":switch(f){case"value":o.style.setProperty(i,h.trim(),v),v=""
case"before-name":case"name":o.__ends=d+1,r&&(o.parentRule=r),o.parentStyleSheet=g,m.cssRules.push(o),h="",f=m.constructor===t.CSSKeyframesRule?"keyframeRule-begin":"before-selector"
break
case"keyframeRule-begin":case"before-selector":case"selector":r||w("Unexpected }"),m.__ends=d+1,g.cssRules.push(m),m=g,r=null,h="",f="before-selector"}break
default:switch(f){case"before-selector":f="selector",o=new t.CSSStyleRule,o.__starts=d
break
case"before-name":f="name"
break
case"before-value":f="value"
break
case"importRule-begin":f="importRule"}h+=u}return g},t.clone=function n(e){var r=new t.CSSStyleSheet,i=e.cssRules
if(!i)return r
for(var o={1:t.CSSStyleRule,4:t.CSSMediaRule,8:t.CSSKeyframesRule,9:t.CSSKeyframeRule},A=0,a=i.length;a>A;A++){var s=i[A],c=r.cssRules[A]=new o[s.type],l=s.style
if(l){for(var u=c.style=new t.CSSStyleDeclaration,d=0,f=l.length;f>d;d++){var h=u[d]=l[d]
u[h]=l[h],u._importants[h]=l.getPropertyPriority(h)}u.length=l.length}s.hasOwnProperty("keyText")&&(c.keyText=s.keyText),s.hasOwnProperty("selectorText")&&(c.selectorText=s.selectorText),s.hasOwnProperty("mediaText")&&(c.mediaText=s.mediaText),s.hasOwnProperty("cssRules")&&(c.cssRules=n(s).cssRules)}return r}}(this),define("cssom",function(e){return function(){var t
return t||e.CSSOM}}(this)),define("readium_shared_js/views/font_loader",["jquery","underscore","FontLoader","cssom"],function(e,t,n,r){var i=function(i,o){var A=o.debug,a=function(t,n){e.get(t.href).done(function(e){n(r.parse(e).cssRules)}).fail(function(){n(null)})},s=function(e){var n=i.styleSheets,r=[],o=[],s=function(e){return e.style&&(e.style.getPropertyValue||e.style.fontFamily)?e.style.getPropertyValue("font-family")||e.style.fontFamily:void 0},c=function(){A&&console.log(r)
var n=[]
t.each(o,function(e){var o=t.find(r,function(t){var n=s(e)
return n&&~n.indexOf(t[1])?!0:void 0})
o&&e.selectorText&&!t.contains(n,o[0])&&i.querySelector(e.selectorText)&&n.push(o[0])}),A&&console.log(n),e(n)},l=0,u=function(e){t.each(e,function(e){var t=s(e)
t&&(e.type===CSSRule.FONT_FACE_RULE?r.push([t.replace(/(^['"]|['"]$)/g,"").replace(/\\(['"])/g,"$1"),t]):o.push(e))}),l++,l>=n.length&&c()}
t.each(n,function(e){var t
try{t=e.cssRules||e.rules}catch(n){}t?u(t):a(e,u)})}
return function(e){e=t.once(e)
var r=0
s(function(t){var a=new n(t,{fontsLoaded:function(t){A&&(null!==t?console.log("font loader: "+t.message,t.notLoadedFonts):console.log("font loader: all fonts were loaded")),e()},fontLoaded:function(n){r++,A&&console.log("font loaded: "+n.family),t.length>o.minLoadCount&&r/t.length>=o.minLoadRatio&&(A&&console.log("font loader: early callback"),e())}},o.timeout,i)
a.loadFonts()})}},o=function(e,n){var r=n.debug
return function(i){i=t.once(i)
var o=0,A=e.fonts.size,a=function(e){o++,r&&console.log("(native) font loaded: "+e.family),A>n.minLoadCount&&o/A>=n.minLoadRatio&&(r&&console.log("(native) font loader: early callback"),i())},s=function(e){e.loaded.then(function(){a(e)})}
e.fonts.forEach?e.fonts.forEach(s):t.each(e.fonts,s),e.fonts.ready.then(function(){r&&console.log("(native) font loader: all fonts were loaded"),i()}),window.setTimeout(function(){r&&o!==A?console.log("(native) font loader: timeout, not all fonts loaded/required"):r&&console.log("(native) font loader: timeout"),i()},n.timeout)}},A=function(e,t){t=t||{},t.debug=t.debug||!1,t.timeout=t.timeout||1500,t.minLoadCount=t.minLoadCount||3,t.minLoadRatio=t.minLoadRatio||.75
var n=e[0].contentDocument,r=!n.fonts,A=r?i:o
this.waitForFonts=A(n,t)}
return A}),define("readium_shared_js/views/reflowable_view",["jquery","underscore","eventEmitter","../models/bookmark_data","./cfi_navigation_logic","../models/current_pages_info","../helpers","../models/page_open_request","../globals","../models/viewer_settings","./font_loader"],function(e,t,n,r,i,o,A,a,s,c,l){var u=function(u,d){function f(e){R.css("left",e.left+"px"),R.css("top",e.top+"px"),R.css("right",e.right+"px"),R.css("bottom",e.bottom+"px")}function h(){R&&R.remove()
var t=A.loadTemplate("reflowable_book_page_frame",{}),n=e(t)
n=k.append(n),R=e("#reflowable-content-frame",n),P=e("#epubContentIframe",n),P.css("left",""),P.css("right",""),P.css("position","relative"),P.css("overflow","hidden"),N=new i(R,P,{rectangleBased:!0,paginationInfo:K})}function p(e){if(_!=e){h(),K.pageOffset=0,K.currentSpreadIndex=0,_=e,Y=!0
var t=z["package"].resolveRelativeUrl(e.href)
U.emit(s.Events.CONTENT_DOCUMENT_LOAD_START,P,e),P.css("opacity","0.01"),V.loadIframe(P[0],t,v,U,{spineItem:e})}}function g(){Q&&A.UpdateHtmlFontSize(Q,q)}function m(){Q&&Q.css("column-gap",K.columnGap+"px")}function v(e){if(!e)return void y(e)
var t=new l(P)
t.waitForFonts(function(){y(e)})}function y(t){if(Y=!1,T&&T.spineItem!=_)return void p(T.spineItem)
if(!t)return P.css("opacity","1"),void(T=void 0)
U.emit(s.Events.CONTENT_DOCUMENT_LOADED,P,_)
var n=P[0].contentDocument
Q=e("html",n),F=e("body",Q),G=!1,M=!0,L=void 0
var r=P[0].contentDocument.defaultView||P[0].contentWindow,i=r.getComputedStyle(F[0],null)
if(i){M="ltr"===i.direction
var o=void 0
o=i.getPropertyValue?i.getPropertyValue("-webkit-writing-mode")||i.getPropertyValue("-moz-writing-mode")||i.getPropertyValue("-ms-writing-mode")||i.getPropertyValue("-o-writing-mode")||i.getPropertyValue("-epub-writing-mode")||i.getPropertyValue("writing-mode"):i.webkitWritingMode||i.mozWritingMode||i.msWritingMode||i.oWritingMode||i.epubWritingMode||i.writingMode,o&&(L=o.indexOf("-lr")>=0,(o.indexOf("vertical")>=0||o.indexOf("tb-")>=0||o.indexOf("bt-")>=0)&&(G=!0))}M&&("rtl"!==F[0].getAttribute("dir")&&"rtl"!==Q[0].getAttribute("dir")||(M=!1)),z.isLeftToRight()||!M||G||(F[0].setAttribute("dir","rtl"),M=!1,L=!1),K.isVerticalWritingMode=G,C(),P.css("opacity","1"),b(),Q.css("height",J.height+"px"),Q.css("position","relative"),Q.css("margin","0"),Q.css("padding","0"),Q.css("column-axis",G?"vertical":"horizontal"),U.applyBookStyles(),O(),g(),m(),U.applyStyles()}function w(){if(T){var e=T
T=void 0,U.openPage(e)}}function B(){var e=-K.pageOffset+"px"
if(G)Q.css("top",e)
else{var t=M||L
Q.css("left",t?e:""),Q.css("right",t?"":e)}S()}function b(){var e=R.width(),t=R.height()
return J.width!==e||J.height!==t?(J.width=e,J.height=t,!0):!1}function x(e,n,r){K.pageOffset=(K.columnWidth+K.columnGap)*K.visibleColumnCount*K.currentSpreadIndex,B(),t.defer(function(){U.emit(s.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:U.getPaginationInfo(),initiator:e,spineItem:n,elementId:r})})}function E(){var e=550,t=400,n=A.deduceSyntheticSpread(H,_,X),r=n===!1||n===!0
if(0===n&&(n=1),K.visibleColumnCount=n?2:1,G&&(e*=2,n=!1,r=!0,K.visibleColumnCount=1),Q){C()
var i=parseInt(H.css("border-left-width")),o=parseInt(H.css("border-right-width")),a=K.columnGap/2
a=Math.max(0,a-i)
var s=K.columnGap/2
s=Math.max(0,s-o)
var c=0
if(X.fontSize){var l=.8*X.fontSize/100
e=Math.floor(e*l),t=Math.floor(t*l)}var u=H.width(),d=u-i-o-a-s
n&&(d=.5*(d-K.columnGap)),d>e?c=Math.floor((d-e)*(n?1:.5)):!r&&t>d&&n&&(n=!1,K.visibleColumnCount=1,d=u-i-o-a-s,d>e&&(c=Math.floor(.5*(d-e)))),k.css({left:c+a+"px",right:c+s+"px"}),b(),P.css("width",J.width+"px"),P.css("height",J.height+"px"),Q.css("height",J.height+"px"),Q.css("min-height",J.height+"px"),Q.css("max-height",J.height+"px"),Q.css("margin",0),Q.css("padding",0),Q.css("border",0),F.css("margin",0),F.css("padding",0),K.rightToLeft=z.isRightToLeft(),K.columnWidth=Math.round(((G?J.height:J.width)-K.columnGap*(K.visibleColumnCount-1))/K.visibleColumnCount)
var f=K.visibleColumnCount>1
f?(Q.css("width",J.width+"px"),Q.css("column-width","auto"),Q.css("column-count",K.visibleColumnCount)):(Q.css("width",(G?J.width:K.columnWidth)+"px"),Q.css("column-count","auto"),Q.css("column-width",K.columnWidth+"px")),Q.css("column-fill","auto"),Q.css({left:"0",right:"0",top:"0"}),A.triggerLayout(P),K.columnCount=((G?Q[0].scrollHeight:Q[0].scrollWidth)+K.columnGap)/(K.columnWidth+K.columnGap),K.columnCount=Math.round(K.columnCount)
var h=(K.columnCount-1)*K.columnGap,p=((G?Q[0].scrollHeight:Q[0].scrollWidth)-h)/K.columnCount
p=Math.round(p),p>K.columnWidth&&(console.debug("ADJUST COLUMN"),console.log(K.columnWidth),console.log(p),K.columnWidth=p),K.spreadCount=Math.ceil(K.columnCount/K.visibleColumnCount),K.currentSpreadIndex>=K.spreadCount&&(K.currentSpreadIndex=K.spreadCount-1),T?w():$(U)}}function C(){-1==Z&&(Z=Q.css("opacity"),Q.css("opacity","0"))}function S(){-1!=Z&&Q.css("opacity",Z),Z=-1}function I(){for(var e=[],t=K.currentSpreadIndex*K.visibleColumnCount,n=0;n<K.visibleColumnCount&&t+n<K.columnCount;n++)e.push(t+n)
return e}function O(){if(Q){var t
e("img, svg",Q).each(function(){t=e(this),t.css("max-width","98%"),t.css("max-height","98%"),t.css("height")||t.css("height","auto"),t.css("width")||t.css("width","auto")})}}function D(){var e=Math.round(K.pageOffset/(K.columnWidth+K.columnGap)),t=e*R.height(),n=t+K.visibleColumnCount*R.height()
return{top:t,bottom:n}}e.extend(this,new n)
var _,T,R,N,k,P,Q,F,G,M,L,U=this,H=u.$viewport,z=u.spine,j=u.userStyles,W=u.bookStyles,V=u.iframeLoader,Y=!1,q=100,Z=-1,J={width:void 0,height:void 0},K={visibleColumnCount:2,columnGap:20,spreadCount:0,currentSpreadIndex:0,columnWidth:void 0,pageOffset:0,columnCount:0}
this.render=function(){var t=A.loadTemplate("reflowable_book_frame",{})
k=e(t),H.append(k)
var n=d.viewerSettings()
return n&&"undefined"!=typeof n.enableGPUHardwareAccelerationCSS3D||(n=new c({})),n.enableGPUHardwareAccelerationCSS3D&&k.css("transform","translateZ(0)"),h(),U},this.remove=function(){k.remove()},this.isReflowable=function(){return!0},this.onViewportResize=function(){b()&&E()}
var X=void 0
this.setViewSettings=function(e){X=e,K.columnGap=e.columnGap,q=e.fontSize,g(),m(),b(),E()},this.applyStyles=function(){A.setStyles(j.getStyles(),k.parent())
var e=A.Margins.fromElement(k)
f(e.padding),b(),E()},this.applyBookStyles=function(){Q&&A.setStyles(W.getStyles(),Q)},this.openPage=function(e){if(Y)return void(T=e)
if(e.spineItem&&e.spineItem!=_)return T=e,void p(e.spineItem)
var t=void 0
if(void 0!==e.spineItemPageIndex)t=e.spineItemPageIndex
else if(e.elementId)t=N.getPageForElementId(e.elementId)
else if(e.elementCfi)try{t=N.getPageForElementCfi(e.elementCfi,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])}catch(n){t=0,console.error(n)}else e.firstPage?t=0:e.lastPage?t=K.columnCount-1:(console.debug("No criteria in pageRequest"),t=0)
t>=0&&t<K.columnCount?(K.currentSpreadIndex=Math.floor(t/K.visibleColumnCount),$(e.initiator,e.spineItem,e.elementId)):console.log("Illegal pageIndex value: ",t,"column count is ",K.columnCount)}
var $=t.debounce(x,100)
this.openPagePrev=function(e){if(_)if(K.currentSpreadIndex>0)K.currentSpreadIndex--,$(e)
else{var t=z.prevItem(_,!0)
if(t){var n=new a(t,e)
n.setLastPage(),U.openPage(n)}}},this.openPageNext=function(e){if(_)if(K.currentSpreadIndex<K.spreadCount-1)K.currentSpreadIndex++,$(e)
else{var t=z.nextItem(_,!0)
if(t){var n=new a(t,e)
n.setFirstPage(),U.openPage(n)}}},this.getFirstVisibleElementCfi=function(){var e=D()
return N.getFirstVisibleElementCfi(e)},this.getPaginationInfo=function(){var e=new o(z,!1)
if(!_)return e
for(var t=I(),n=0,r=t.length;r>n;n++)e.addOpenPage(t[n],K.columnCount,_.idref,_.index)
return e},this.bookmarkCurrentPage=function(){return _?new r(_.idref,U.getFirstVisibleElementCfi()):new r("","")},this.getLoadedSpineItems=function(){return[_]},this.getElementByCfi=function(e,t,n,r,i){return e!=_?void console.error("spine item is not loaded"):N.getElementByCfi(t,n,r,i)},this.getElementById=function(e,t){return e!=_?void console.error("spine item is not loaded"):N.getElementById(t)},this.getElement=function(e,t){return e!=_?void console.error("spine item is not loaded"):N.getElement(t)},this.getFirstVisibleMediaOverlayElement=function(){var e=D()
return N.getFirstVisibleMediaOverlayElement(e)},this.insureElementVisibility=function(t,n,r){var i=e(n)
if(!N.isElementVisible(i,D())){var o=N.getPageForElement(i)
if(-1!=o){var A=new a(_,r)
A.setPageIndex(o)
var s=n.id
s||(s=n.getAttribute("id")),s&&A.setElementId(s),U.openPage(A)}}},this.isElementCfiVisible=function(e,t){return e!=_.idref?!1:N.isElementCfiVisible(t)}}
return u}),define("readium_shared_js/models/style",[],function(){var e=function(e,t){this.selector=e,this.declarations=t,this.setDeclarations=function(e){for(var t in e)e.hasOwnProperty(t)&&(this.declarations[t]=e[t])}}
return e}),define("readium_shared_js/models/style_collection",["./style"],function(e){var t=function(){var t=[]
this.clear=function(){t.length=0},this.findStyle=function(e){for(var n=t.length,r=0;n>r;r++)if(t[r].selector===e)return t[r]},this.addStyle=function(n,r){var i=this.findStyle(n)
return i?i.setDeclarations(r):(i=new e(n,r),t.push(i)),i},this.removeStyle=function(e){for(var n=t.length,r=0;n>r;r++)if(t[r].selector===e)return void t.splice(r,1)},this.getStyles=function(){return t},this.resetStyleValues=function(){for(var e=t.length,n=0;e>n;n++){var r=t[n],i=r.declarations
for(var o in i)i.hasOwnProperty(o)&&(i[o]="")}}}
return t}),define("readium_shared_js/models/switches",["jquery","underscore"],function(e,t){var n=function(){}
return n.apply=function(n){function r(e){var n=e.attributes["required-namespace"]
if(!n)return console.log("Encountered a case statement with no required-namespace"),!1
var r=["http://www.w3.org/1998/Math/MathML"]
return t.include(r,n.value)}var i=window.navigator.userAgent.indexOf("Trident")>0||window.navigator.userAgent.indexOf("Edge")>0?function(e){return"epub\\:"+e}:function(e){return e}
t.each(n.querySelectorAll(i("switch")),function(n){var o=!1
t.each(n.querySelectorAll(i("case")),function(t){!o&&r(t)?o=!0:e(t).remove()}),o&&t.each(n.querySelectorAll(i("default")),function(t){e(t).remove()})})},n}),define("readium_shared_js/models/trigger",["jquery","../helpers"],function(e,t){var n=function(t){var n=e(t)
this.action=n.attr("action"),this.ref=n.attr("ref"),this.event=n.attr("ev:event"),this.observer=n.attr("ev:observer"),this.ref=n.attr("ref")}
return n.register=function(t){e("trigger",t).each(function(){var e=new n(this)
e.subscribe(t)})},n.prototype.subscribe=function(t){var n="#"+this.observer,r=this
e(n,t).on(this.event,function(){r.execute(t)})},n.prototype.execute=function(n){var r=e("#"+t.escapeJQuerySelector(this.ref),n)
switch(this.action){case"show":r.css("visibility","visible")
break
case"hide":r.css("visibility","hidden")
break
case"play":r[0].currentTime=0,r[0].play()
break
case"pause":r[0].pause()
break
case"resume":r[0].play()
break
case"mute":r[0].muted=!0
break
case"unmute":r[0].muted=!1
break
default:console.log("do not no how to handle trigger "+this.action)}},n}),define("readium_shared_js/views/reader_view",["jquery","underscore","eventEmitter","./fixed_view","../helpers","./iframe_loader","./internal_links_support","./media_overlay_data_injector","./media_overlay_player","../models/package","../models/page_open_request","./reflowable_view","./scroll_view","../models/style_collection","../models/switches","../models/trigger","../models/viewer_settings","../globals"],function(e,t,n,r,i,o,A,a,s,c,l,u,d,f,h,p,g,m){var v=function(y){function w(e){return"scroll-doc"==G.scroll?v.VIEW_TYPE_SCROLLED_DOC:"scroll-continuous"==G.scroll?v.VIEW_TYPE_SCROLLED_CONTINUOUS:e.isFixedLayout()?v.VIEW_TYPE_FIXED:e.isFlowScrolledDoc()?v.VIEW_TYPE_SCROLLED_DOC:e.isFlowScrolledContinuous()?v.VIEW_TYPE_SCROLLED_CONTINUOUS:v.VIEW_TYPE_COLUMNIZED}function B(e,n){var r=w(e)
if(P){if(k.getCurrentViewType()==r)return void n(!1)
b()}var o={$viewport:N,spine:F,userStyles:M,bookStyles:L,iframeLoader:R}
P=k.createViewForType(r,o),k.emit(m.Events.READER_VIEW_CREATED,r),P.on(m.Events.CONTENT_DOCUMENT_LOADED,function(e,t){if(i.isIframeAlive(e[0])){T.attachMediaOverlayData(e,t,G),U.processLinkElements(e,t)
var n=e[0].contentDocument
p.register(n),h.apply(n),k.emit(m.Events.CONTENT_DOCUMENT_LOADED,e,t)}}),P.on(m.Events.CONTENT_DOCUMENT_LOAD_START,function(e,t){k.emit(m.Events.CONTENT_DOCUMENT_LOAD_START,e,t)}),P.on(m.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,function(e){_.onPageChanged(e),t.defer(function(){k.emit(m.Events.PAGINATION_CHANGED,e)})}),P.on(m.Events.FXL_VIEW_RESIZED,function(){k.emit(m.Events.FXL_VIEW_RESIZED)}),P.render(),P.setViewSettings(G),setTimeout(function(){n(!0)},50)}function b(){P&&(k.emit(m.Events.READER_VIEW_DESTROYED),P.off(m.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED),P.remove(),P=void 0)}function x(e){k.emit(m.Events.MEDIA_OVERLAY_STATUS_CHANGED,e)}function E(e){if(!e)return void console.log("idref parameter value missing!")
var t=F.getItemById(e)
return t?t:void console.log("Spine item with id "+e+" not found!")}function C(e,t){B(e.spineItem,function(n){n||P.setViewSettings(G),P.openPage(e,t)})}function S(e){i.setStyles(M.getStyles(),N),_&&_.applyStyles(),e||P&&P.applyStyles()}function I(){z=null,j=!1,P&&(P.isReflowable&&P.isReflowable()&&(j=k.isPlayingMediaOverlay(),j&&k.pauseMediaOverlay()),z=P.bookmarkCurrentPage())}function O(){P&&k.handleViewportResize(z)}function D(){O(),j&&k.playMediaOverlay()}e.extend(this,new n)
var _,T,R,N,k=this,P=void 0,Q=void 0,F=void 0,G=new g({}),M=new f,L=new f,U=new A(this),H=i.extendedThrottle(I,O,D,250,1e3,k)
e(window).on("resize.ReadiumSDK.readerView",H),y.el instanceof e?(N=y.el,console.log("** EL is a jQuery selector:"+y.el.attr("id"))):(N=e(y.el),console.log("** EL is a string:"+N.attr("id"))),R=y.iframeLoader?y.iframeLoader:new o({mathJaxUrl:y.mathJaxUrl}),_needsFixedLayoutScalerWorkAround=y.needsFixedLayoutScalerWorkAround,this.needsFixedLayoutScalerWorkAround=function(){return _needsFixedLayoutScalerWorkAround},this.createViewForType=function(e,t){var n
switch(N.css("overflow","hidden"),e){case v.VIEW_TYPE_FIXED:N.css("overflow","auto"),n=new r(t,k)
break
case v.VIEW_TYPE_SCROLLED_DOC:n=new d(t,!1,k)
break
case v.VIEW_TYPE_SCROLLED_CONTINUOUS:n=new d(t,!0,k)
break
default:n=new u(t,k)}return n},this.getCurrentViewType=function(){return P?P instanceof u?v.VIEW_TYPE_COLUMNIZED:P instanceof r?v.VIEW_TYPE_FIXED:P instanceof d?P.isContinuousScroll()?v.VIEW_TYPE_SCROLLED_CONTINUOUS:v.VIEW_TYPE_SCROLLED_DOC:void console.error("Unrecognized view type"):void 0},this.getLoadedSpineItems=function(){return P?P.getLoadedSpineItems():[]},this.viewerSettings=function(){return G},this["package"]=function(){return Q},this.spine=function(){return F},this.userStyles=function(){return M},this.openBook=function(t){var n=t["package"]?t["package"]:t
Q=new c(n),F=Q.spine,F.handleLinear(!0),_&&_.reset(),_=new s(k,e.proxy(x,k)),_.setAutomaticNextSmil(!!G.mediaOverlaysAutomaticPageTurn),T=new a(Q.media_overlay,_),b(),t.settings&&k.updateSettings(t.settings),t.styles&&k.setStyles(t.styles)
var r=void 0
t.openPageRequest&&(t.openPageRequest.idref||t.openPageRequest.contentRefUrl&&t.openPageRequest.sourceFileHref?r=t.openPageRequest:console.log("Invalid page request data: idref required!"))
var i=!1
if(r){r=t.openPageRequest
try{i=r.idref?r.spineItemPageIndex?!k.openSpineItemPage(r.idref,r.spineItemPageIndex,k):r.elementCfi?!k.openSpineItemElementCfi(r.idref,r.elementCfi,k):!k.openSpineItemPage(r.idref,0,k):!k.openContentUrl(r.contentRefUrl,r.sourceFileHref,k)}catch(o){console.error("openPageRequest fail: fallback to first page!"),console.log(o),i=!0}}else i=!0
if(i){var A=F.first()
if(A){var u=new l(A,k)
u.setFirstPage(),C(u,0)}}},this.openPageLeft=function(){Q.spine.isLeftToRight()?k.openPagePrev():k.openPageNext()},this.openPageRight=function(){Q.spine.isLeftToRight()?k.openPageNext():k.openPagePrev()},this.isCurrentViewFixedLayout=function(){return P instanceof r},this.setZoom=function(e){k.isCurrentViewFixedLayout()&&P.setZoom(e)},this.getViewScale=function(){return k.isCurrentViewFixedLayout()?100*P.getViewScale():100},this.updateSettings=function(e){if(G.update(e),_&&_.setAutomaticNextSmil(!!G.mediaOverlaysAutomaticPageTurn),P&&!e.doNotUpdateView){var t=P.bookmarkCurrentPage()
if(t&&t.idref){var n=!1
P.isReflowable&&P.isReflowable()&&(n=k.isPlayingMediaOverlay(),n&&k.pauseMediaOverlay())
var r=F.getItemById(t.idref)
return void B(r,function(e){e||P.setViewSettings(G),k.openSpineItemElementCfi(t.idref,t.contentCFI,k),n&&k.playMediaOverlay(),k.emit(m.Events.SETTINGS_APPLIED)})}}k.emit(m.Events.SETTINGS_APPLIED)},this.openPageNext=function(){if(k.getCurrentViewType()===v.VIEW_TYPE_SCROLLED_CONTINUOUS)return void P.openPageNext(k)
var e=P.getPaginationInfo()
if(0!=e.openPages.length){var t=e.openPages[e.openPages.length-1]
if(t.spineItemPageIndex<t.spineItemPageCount-1)return void P.openPageNext(k)
var n=F.getItemById(t.idref),r=F.nextItem(n)
if(r){var i=new l(r,k)
i.setFirstPage(),C(i,2)}}},this.openPagePrev=function(){if(k.getCurrentViewType()===v.VIEW_TYPE_SCROLLED_CONTINUOUS)return void P.openPagePrev(k)
var e=P.getPaginationInfo()
if(0!=e.openPages.length){var t=e.openPages[0]
if(t.spineItemPageIndex>0)return void P.openPagePrev(k)
var n=F.getItemById(t.idref),r=F.prevItem(n)
if(r){var i=new l(r,k)
i.setLastPage(),C(i,1)}}},this.openSpineItemElementCfi=function(e,t,n){var r=E(e)
if(!r)return!1
var i=new l(r,n)
return t&&i.setElementCfi(t),C(i,0),!0},this.openPageIndex=function(e,t){if(!P)return!1
var n
if(Q.isFixedLayout()){var r=F.items[e]
if(!r)return!1
n=new l(r,t),n.setPageIndex(0)}else{var i=this.getLoadedSpineItems()
i.length>0&&(n=new l(i[0],t),n.setPageIndex(e))}return C(n,0),!0},this.openSpineItemPage=function(e,t,n){var r=E(e)
if(!r)return!1
var i=new l(r,n)
return t&&i.setPageIndex(t),C(i,0),!0},this.setStyles=function(e,t){for(var n=e.length,r=0;n>r;r++)e[r].declarations?M.addStyle(e[r].selector,e[r].declarations):M.removeStyle(e[r].selector)
S(t)},this.setBookStyles=function(e){for(var t=e.length,n=0;t>n;n++)L.addStyle(e[n].selector,e[n].declarations)
P&&P.applyBookStyles()},this.getElement=function(e,t){return P?P.getElement(e,t):void 0},this.getElementById=function(e,t){return P?P.getElementById(e,t):void 0},this.getElementByCfi=function(e,t,n,r,i){return P?P.getElementByCfi(e,t,n,r,i):void 0},this.mediaOverlaysOpenContentUrl=function(e,t,n){_.mediaOverlaysOpenContentUrl(e,t,n)},this.openContentUrl=function(e,t,n){var r,o,A=i.ResolveContentRef(e,t),a=A.indexOf("#")
a>=0?(r=A.substr(0,a),o=A.substr(a+1)):(r=A,o=void 0)
var s=F.getItemByHref(r)
if(!s){console.warn("spineItem "+r+" not found")
var c=decodeURIComponent(r)
if(s=F.getItemByHref(c),!s)return console.warn("decoded spineItem "+c+" missing as well"),!1}return k.openSpineItemElementId(s.idref,o,n)},this.openSpineItemElementId=function(e,t,n){var r=F.getItemById(e)
if(!r)return!1
var i=new l(r,n)
return t&&i.setElementId(t),C(i,0),!0},this.bookmarkCurrentPage=function(){return JSON.stringify(P.bookmarkCurrentPage())},this.clearStyles=function(){M.resetStyleValues(),S(),M.clear()},this.clearBookStyles=function(){P&&(L.resetStyleValues(),P.applyBookStyles()),L.clear()},this.isMediaOverlayAvailable=function(){return _?_.isMediaOverlayAvailable():!1},this.toggleMediaOverlay=function(){_.toggleMediaOverlay()},this.nextMediaOverlay=function(){_.nextMediaOverlay()},this.previousMediaOverlay=function(){_.previousMediaOverlay()},this.escapeMediaOverlay=function(){_.escape()},this.ttsEndedMediaOverlay=function(){_.onTTSEnd()},this.pauseMediaOverlay=function(){_.pause()},this.playMediaOverlay=function(){_.play()},this.isPlayingMediaOverlay=function(){return _.isPlaying()},this.getFirstVisibleMediaOverlayElement=function(){return P?P.getFirstVisibleMediaOverlayElement():void 0},this.insureElementVisibility=function(e,t,n){P&&P.insureElementVisibility(e,t,n)}
var z=null,j=!1
this.handleViewportResize=function(e){if(P){var t=e||P.bookmarkCurrentPage()
if(P.isReflowable&&P.isReflowable()&&t&&t.idref){var n=F.getItemById(t.idref)
B(n,function(e){k.openSpineItemElementCfi(t.idref,t.contentCFI,k)})}else P.onViewportResize()}},this.addIFrameEventListener=function(e,t,n){R.addIFrameEventListener(e,t,n)},this.isElementCfiVisible=function(e,t){return P?P.isElementCfiVisible(e,t):!1}
var W=function(){var t={},n=!1,r=void 0
this.setCallback_PlayPause=function(e){r=e}
var i=void 0
this.setCallback_IsAvailable=function(e){i=e},this.playPause=function(e){o(e)}
var o=function(n){r&&r(n)
try{var i=void 0
for(var o in t)if(t.hasOwnProperty(o)){var A=t[o]
if(A&&A.active&&(i&&console.error("More than one active iframe?? (pagination)"),i=A.$iframe)){var a=e("audio",i[0].contentDocument)
e.each(a,function(){var e=this.getAttribute("epub:type")||this.getAttribute("type")
return e?e.indexOf("ibooks:soundtrack")<0&&e.indexOf("media:soundtrack")<0&&e.indexOf("media:background")<0?!0:(n&&this.play?this.play():this.pause&&this.pause(),!0):!0})}}}catch(s){console.error(s)}}
this.setPlayState=function(e){n=e},k.on(m.Events.CONTENT_DOCUMENT_LOADED,function(e,n){try{n&&n.idref&&e&&e[0]&&(t[n.idref]={$iframe:e,href:n.href})}catch(r){console.error(r)}}),k.on(m.Events.PAGINATION_CHANGED,function(r){var A=!1
try{for(var a in t)if(t.hasOwnProperty(a)){var s=r.spineItem&&r.spineItem.idref===a,c=!1
if(r.paginationInfo&&r.paginationInfo.openPages.length){for(var l=!0,u=0;u<r.paginationInfo.openPages.length;u++)r.paginationInfo.openPages[u].idref===a?c=!0:l=!1
!s&&l&&(s=!0)}if(s||c){var d=t[a]
if(!d)continue
t[a].active=s
var f=d.$iframe,h=(d.href,e("audio",f[0].contentDocument))
e.each(h,function(){var e=this.getAttribute("epub:type")||this.getAttribute("type")
return e?e.indexOf("ibooks:soundtrack")<0&&e.indexOf("media:soundtrack")<0&&e.indexOf("media:background")<0?!0:(this.setAttribute("loop","loop"),this.removeAttribute("autoplay"),s||this.pause&&this.pause(),A=!0,!0):!0})}else t[a]&&(t[a].$iframe=void 0),t[a]=void 0}}catch(p){console.error(p)}i&&i(A),o(A?n?!0:!1:!1)}),k.on(m.Events.MEDIA_OVERLAY_STATUS_CHANGED,function(e){if(e.smilIndex){var r=k["package"](),i=r.media_overlay.smilAt(e.smilIndex)
if(i&&i.spineItemId){var A=!1
for(var a in t)if(t.hasOwnProperty(a)){var s=t[a]
s&&s.active&&a!==i.spineItemId&&(o(!1),s.active=!1,A=!0)}if(A){for(var a in t)if(t.hasOwnProperty(a)){var s=t[a]
s&&(s.active||a===i.spineItemId&&(s.active=!0))}n&&o(!0)}}}})}
this.backgroundAudioTrackManager=new W}
return v.VIEW_TYPE_COLUMNIZED=1,v.VIEW_TYPE_FIXED=2,v.VIEW_TYPE_SCROLLED_DOC=3,v.VIEW_TYPE_SCROLLED_CONTINUOUS=4,v}),define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),define("text!version.json",[],function(){return'{"readiumJs":{"sha":"45691ecebae8b9c6980145bfa3016d4d854c8e10","clean":false,"version":"0.22.3","chromeVersion":"2.22.3","tag":"0.22.3-1-g45691ec","branch":"master","release":false,"timestamp":1464240204870},"readiumSharedJs":{"sha":"52ec011bfa83f2e56e801b403319de00ea4af735","clean":false,"version":"0.22.3","tag":"0.22.3-0-g52ec011","branch":"52ec011bfa83f2e56e801b403319de00ea4af735","release":false,"timestamp":1464240204942},"readiumCfiJs":{"sha":"8eb10a487d08dda8a390fab95561f9186a08cf75","clean":false,"version":"0.22.3","tag":"0.22.3-0-g8eb10a4","branch":"8eb10a487d08dda8a390fab95561f9186a08cf75","release":false,"timestamp":1464240205081}}'}),define("readium_js/epub-fetch/markup_parser",[],function(){var e=function(){var e=this
this.parseXml=function(t){return e.parseMarkup(t,"text/xml")},this.parseMarkup=function(e,t){var n=new window.DOMParser
return n.parseFromString(e,t)}}
return e}),define("readium_js/epub-fetch/discover_content_type",["jquery","URIjs"],function(e,t){var n=void 0,r=function(){var n=this
r.suffixContentTypeMap={css:"text/css",epub:"application/epub+zip",gif:"image/gif",html:"text/html",jpg:"image/jpeg",jpeg:"image/jpeg",ncx:"application/x-dtbncx+xml",opf:"application/oebps-package+xml",png:"image/png",svg:"image/svg+xml",xhtml:"application/xhtml+xml"},this.identifyContentTypeFromFileName=function(e){var n=t(e).suffix(),i="application/octet-stream"
return"undefined"!=typeof r.suffixContentTypeMap[n]&&(i=r.suffixContentTypeMap[n]),i},this.identifyContentType=function(t){var r=e.ajax({type:"HEAD",url:t,async:!1}).getResponseHeader("Content-Type")
return null===r&&(r=n.identifyContentTypeFromFileName(t),console.log("guessed contentType ["+r+"] from URI ["+t+"]. Configuring the web server to provide the content type is recommended.")),r}}
return n||(n=new r),n}),define("readium_js/epub-fetch/plain_resource_fetcher",["jquery","URIjs","./discover_content_type"],function(e,t,n){var r=function(r){function i(e,t,n){var r=A.resolveURI(e)
if("undefined"==typeof e)throw"Fetched file relative path is undefined!"
var i=new XMLHttpRequest
i.open("GET",r,!0),i.responseType="arraybuffer",i.onerror=n,i.onload=function(e){t(i.response)},i.send()}var o=(r.getEbookURL(),r.getEbookURL_FilePath()),A=this
this.resolveURI=function(e){var n=void 0
try{n=new t(e)}catch(r){console.error(r),console.log(e)}if(n&&n.is("absolute"))return e
var i=o
try{i=new t(i).search("").hash("").toString()}catch(r){console.error(r),console.log(i)}return i+("/"==i.charAt(i.length-1)?"":"/")+e},this.fetchFileContentsText=function(t,n,r){var i=A.resolveURI(t)
if("undefined"==typeof i)throw"Fetched file URL is undefined!"
e.ajax({isLocal:0!==i.indexOf("http"),url:i,dataType:"text",async:!0,success:function(e){n(e)},error:function(e,t,n){r(new Error(n))}})},this.fetchFileContentsBlob=function(e,t,o){var A=r.getDecryptionFunctionForRelativePath(e)
if(A){var a=t
t=function(e){A(e,function(e){a(e)})}}i(e,function(r){var i=new Blob([r],{type:n.identifyContentTypeFromFileName(e)})
t(i)},o)}}
return r}),function(e){"use strict"
function t(){this.crc=-1}function n(){}function r(e,t,n){if(0>t||0>n||t+n>e.size)throw new RangeError("offset:"+t+", length:"+n+", size:"+e.size)
return e.slice?e.slice(t,t+n):e.webkitSlice?e.webkitSlice(t,t+n):e.mozSlice?e.mozSlice(t,t+n):e.msSlice?e.msSlice(t,t+n):void 0}function i(e,t){var n,r
return n=new ArrayBuffer(e),r=new Uint8Array(n),t&&r.set(t,0),{buffer:n,array:r,view:new DataView(n)}}function o(){}function A(e){function t(t,n){var o=new Blob([e],{type:U})
r=new s(o),r.init(function(){i.size=r.size,t()},n)}function n(e,t,n,i){r.readUint8Array(e,t,n,i)}var r,i=this
i.size=0,i.init=t,i.readUint8Array=n}function a(t){function n(e){for(var n=t.length;"="==t.charAt(n-1);)n--
o=t.indexOf(",")+1,A.size=Math.floor(.75*(n-o)),e()}function r(n,r,A){var a,s=i(r),c=4*Math.floor(n/3),l=4*Math.ceil((n+r)/3),u=e.atob(t.substring(c+o,l+o)),d=n-3*Math.floor(c/4)
for(a=d;d+r>a;a++)s.array[a-d]=u.charCodeAt(a)
A(s.array)}var o,A=this
A.size=0,A.init=n,A.readUint8Array=r}function s(e){function t(t){i.size=e.size,t()}function n(t,n,i,o){var A=new FileReader
A.onload=function(e){i(new Uint8Array(e.target.result))},A.onerror=o
try{A.readAsArrayBuffer(r(e,t,n))}catch(a){o(a)}}var i=this
i.size=0,i.init=t,i.readUint8Array=n}function c(){}function l(e){function t(e){i=new Blob([],{type:U}),e()}function n(e,t){i=new Blob([i,_?e:e.buffer],{type:U}),t()}function r(t,n){var r=new FileReader
r.onload=function(e){t(e.target.result)},r.onerror=n,r.readAsText(i,e)}var i,o=this
o.init=t,o.writeUint8Array=n,o.getData=r}function u(t){function n(e){A+="data:"+(t||"")+";base64,",e()}function r(t,n){var r,i=a.length,o=a
for(a="",r=0;r<3*Math.floor((i+t.length)/3)-i;r++)o+=String.fromCharCode(t[r])
for(;r<t.length;r++)a+=String.fromCharCode(t[r])
o.length>2?A+=e.btoa(o):a=o,n()}function i(t){t(A+e.btoa(a))}var o=this,A="",a=""
o.init=n,o.writeUint8Array=r,o.getData=i}function d(e){function t(e){e()}function n(e,t){i.push(_?e:e.buffer),t()}function r(t){t(new Blob(i,{type:e}))}var i=[],o=this
o.init=t,o.writeUint8Array=n,o.getData=r}function f(e,t,n,r,i,o,A,a,s,c){function l(){e.removeEventListener("message",u,!1),a(h,p)}function u(t){var n=t.data,i=n.data,a=n.error
if(a)return a.toString=function(){return"Error: "+this.message},void s(a)
if(n.sn===m)switch("number"==typeof n.codecTime&&(e.codecTime+=n.codecTime),"number"==typeof n.crcTime&&(e.crcTime+=n.crcTime),n.type){case"append":i?(h+=i.length,r.writeUint8Array(i,function(){d()},c)):d()
break
case"flush":p=n.crc,i?(h+=i.length,r.writeUint8Array(i,function(){l()},c)):l()
break
case"progress":A&&A(f+n.loaded,o)
break
case"importScripts":case"newTask":case"echo":break
default:console.warn("zip.js:launchWorkerProcess: unknown message: ",n)}}function d(){f=g*L,o>=f?n.readUint8Array(i+f,Math.min(L,o-f),function(n){A&&A(f,o)
var r=0===f?t:{sn:m}
r.type="append",r.data=n
try{e.postMessage(r,[n.buffer])}catch(i){e.postMessage(r)}g++},s):e.postMessage({sn:m,type:"flush"})}var f,h,p,g=0,m=t.sn
h=0,e.addEventListener("message",u,!1),d()}function h(e,n,r,i,o,A,a,s,c,l){function u(){var t
if(d=f*L,o>d)n.readUint8Array(i+d,Math.min(L,o-d),function(t){var n
try{n=e.append(t,function(e){a&&a(d+e,o)})}catch(i){return void c(i)}n?(h+=n.length,r.writeUint8Array(n,function(){f++,setTimeout(u,1)},l),g&&m.append(n)):(f++,setTimeout(u,1)),p&&m.append(t),a&&a(d,o)},c)
else{try{t=e.flush()}catch(A){return void c(A)}t?(g&&m.append(t),h+=t.length,r.writeUint8Array(t,function(){s(h,m.get())},l)):s(h,m.get())}}var d,f=0,h=0,p="input"===A,g="output"===A,m=new t
u()}function p(t,n,r,i,o,A,a,s,c,l,u){var d=a?"output":"none"
if(e.zip.useWebWorkers){var p={sn:n,codecClass:"Inflater",crcType:d}
f(t,p,r,i,o,A,c,s,l,u)}else h(new e.zip.Inflater,r,i,o,A,d,c,s,l,u)}function g(t,n,r,i,o,A,a,s,c){var l="input"
if(e.zip.useWebWorkers){var u={sn:n,options:{level:o},codecClass:"Deflater",crcType:l}
f(t,u,r,i,0,r.size,a,A,s,c)}else h(new e.zip.Deflater,r,i,0,r.size,l,a,A,s,c)}function m(t,r,i,o,A,a,s,c,l,u,d){var p="input"
if(e.zip.useWebWorkers&&s){var g={sn:r,codecClass:"NOOP",crcType:p}
f(t,g,i,o,A,a,l,c,u,d)}else h(new n,i,o,A,a,p,l,c,u,d)}function v(e){var t,n,r="",i=["Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","_","_","_","¦","¦","Á","Â","À","©","¦","¦","+","+","¢","¥","+","+","-","-","+","-","+","ã","Ã","+","+","-","-","¦","-","+","¤","ð","Ð","Ê","Ë","È","i","Í","Î","Ï","+","+","_","_","¦","Ì","_","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","_","¾","¶","§","÷","¸","°","¨","·","¹","³","²","_"," "]
for(t=0;t<e.length;t++)n=255&e.charCodeAt(t),r+=n>127?i[n-128]:String.fromCharCode(n)
return r}function y(e){return decodeURIComponent(escape(e))}function w(e){var t,n=""
for(t=0;t<e.length;t++)n+=String.fromCharCode(e[t])
return n}function B(e){var t=(4294901760&e)>>16,n=65535&e
try{return new Date(1980+((65024&t)>>9),((480&t)>>5)-1,31&t,(63488&n)>>11,(2016&n)>>5,2*(31&n),0)}catch(r){}}function b(e,t,n,r,i){return e.version=t.view.getUint16(n,!0),e.bitFlag=t.view.getUint16(n+2,!0),e.compressionMethod=t.view.getUint16(n+4,!0),e.lastModDateRaw=t.view.getUint32(n+6,!0),e.lastModDate=B(e.lastModDateRaw),1===(1&e.bitFlag)?void i(N):((r||8!=(8&e.bitFlag))&&(e.crc32=t.view.getUint32(n+10,!0),e.compressedSize=t.view.getUint32(n+14,!0),e.uncompressedSize=t.view.getUint32(n+18,!0)),4294967295===e.compressedSize||4294967295===e.uncompressedSize?void i(k):(e.filenameLength=t.view.getUint16(n+22,!0),void(e.extraFieldLength=t.view.getUint16(n+24,!0))))}function x(t,n,r){function o(){}function A(e){function n(n,o){t.readUint8Array(t.size-n,n,function(t){for(var n=t.length-i;n>=0;n--)if(80===t[n]&&75===t[n+1]&&5===t[n+2]&&6===t[n+3])return void e(new DataView(t.buffer,n,i))
o()},function(){r(P)})}var i=22
if(t.size<i)return void r(T)
var o=65536,A=i+o
n(i,function(){n(Math.min(A,t.size),function(){r(T)})})}var a=0
o.prototype.getData=function(e,n,o,A){function s(e){var t=i(4)
return t.view.setUint32(0,e),d.crc32==t.view.getUint32(0)}function c(t,i){A&&!s(i)?r(R):e.getData(function(e){n(e)})}function l(e){r(e||G)}function u(e){r(e||F)}var d=this
t.readUint8Array(d.offset,30,function(n){var s,f=i(n.length,n)
return 1347093252!=f.view.getUint32(0)?void r(T):(b(d,f,4,!1,r),s=d.offset+30+d.filenameLength+d.extraFieldLength,void e.init(function(){0===d.compressionMethod?m(d._worker,a++,t,e,s,d.compressedSize,A,c,o,l,u):p(d._worker,a++,t,e,s,d.compressedSize,A,c,o,l,u)},u))},l)}
var s={getEntries:function(e){var n=this._worker
A(function(A){var a,s
return a=A.getUint32(16,!0),s=A.getUint16(8,!0),0>a||a>=t.size?void r(T):void t.readUint8Array(a,t.size-a,function(t){var A,a,c,l,u=0,d=[],f=i(t.length,t)
for(A=0;s>A;A++){if(a=new o,a._worker=n,1347092738!=f.view.getUint32(u))return void r(T)
b(a,f,u+6,!0,r),a.commentLength=f.view.getUint16(u+32,!0),a.directory=16==(16&f.view.getUint8(u+38)),a.offset=f.view.getUint32(u+42,!0),c=w(f.array.subarray(u+46,u+46+a.filenameLength)),a.filename=2048===(2048&a.bitFlag)?y(c):v(c),a.directory||"/"!=a.filename.charAt(a.filename.length-1)||(a.directory=!0),l=w(f.array.subarray(u+46+a.filenameLength+a.extraFieldLength,u+46+a.filenameLength+a.extraFieldLength+a.commentLength)),a.comment=2048===(2048&a.bitFlag)?y(l):v(l),d.push(a),u+=46+a.filenameLength+a.extraFieldLength+a.commentLength}e(d)},function(){r(P)})})},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null),e&&e()},_worker:null}
e.zip.useWebWorkers?O("inflater",function(e){s._worker=e,n(s)},function(e){r(e)}):n(s)}function E(e){return unescape(encodeURIComponent(e))}function C(e){var t,n=[]
for(t=0;t<e.length;t++)n.push(e.charCodeAt(t))
return n}function S(t,n,r,o){function A(e){r(e||Q)}function a(e){r(e||G)}var s={},c=[],l=0,u=0,d={add:function(e,n,d,f,h){function p(n){var r
b=h.lastModDate||new Date,w=i(26),s[e]={headerArray:w.array,directory:h.directory,filename:B,offset:l,comment:C(E(h.comment||""))},w.view.setUint32(0,335546376),h.version&&w.view.setUint8(0,h.version),o||0===h.level||h.directory||w.view.setUint16(4,2048),w.view.setUint16(6,(b.getHours()<<6|b.getMinutes())<<5|b.getSeconds()/2,!0),w.view.setUint16(8,(b.getFullYear()-1980<<4|b.getMonth()+1)<<5|b.getDate(),!0),w.view.setUint16(22,B.length,!0),r=i(30+B.length),r.view.setUint32(0,1347093252),r.array.set(w.array,4),r.array.set(B,30),l+=r.array.length,t.writeUint8Array(r.array,n,A)}function v(e,r){var o=i(16)
l+=e||0,o.view.setUint32(0,1347094280),"undefined"!=typeof r&&(w.view.setUint32(10,r,!0),o.view.setUint32(4,r,!0)),n&&(o.view.setUint32(8,e,!0),w.view.setUint32(14,e,!0),o.view.setUint32(12,n.size,!0),w.view.setUint32(18,n.size,!0)),t.writeUint8Array(o.array,function(){l+=16,d()},A)}function y(){return h=h||{},e=e.trim(),h.directory&&"/"!=e.charAt(e.length-1)&&(e+="/"),s.hasOwnProperty(e)?void r(M):(B=C(E(e)),c.push(e),void p(function(){n?o||0===h.level?m(x,u++,n,t,0,n.size,!0,v,f,a,A):g(x,u++,n,t,h.level,v,f,a,A):v()},A))}var w,B,b,x=this._worker
n?n.init(y,a):y()},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null)
var n,r,o,a=0,u=0
for(r=0;r<c.length;r++)o=s[c[r]],a+=46+o.filename.length+o.comment.length
for(n=i(a+22),r=0;r<c.length;r++)o=s[c[r]],n.view.setUint32(u,1347092738),n.view.setUint16(u+4,5120),n.array.set(o.headerArray,u+6),n.view.setUint16(u+32,o.comment.length,!0),o.directory&&n.view.setUint8(u+38,16),n.view.setUint32(u+42,o.offset,!0),n.array.set(o.filename,u+46),n.array.set(o.comment,u+46+o.filename.length),u+=46+o.filename.length+o.comment.length
n.view.setUint32(u,1347093766),n.view.setUint16(u+8,c.length,!0),n.view.setUint16(u+10,c.length,!0),n.view.setUint32(u+12,a,!0),n.view.setUint32(u+16,l,!0),t.writeUint8Array(n.array,function(){t.getData(e)},A)},_worker:null}
e.zip.useWebWorkers?O("deflater",function(e){d._worker=e,n(d)},function(e){r(e)}):n(d)}function I(e){var t=document.createElement("a")
return e.map(function(e){return t.href=e,t.href})}function O(t,n,r){function i(e){var t=e.data
return t.error?(a.terminate(),void r(t.error)):void("importScripts"===t.type&&(a.removeEventListener("message",i),a.removeEventListener("error",o),n(a)))}function o(e){a.terminate(),r(e)}if(null!==e.zip.workerScripts&&null!==e.zip.workerScriptsPath)return void r(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."))
var A
if(e.zip.workerScripts){if(A=e.zip.workerScripts[t],!Array.isArray(A))return void r(new Error("zip.workerScripts."+t+" is not an array!"))
A=I(A)}else A=z[t].slice(0),A[0]=(e.zip.workerScriptsPath||"")+A[0]
var a=new Worker(A[0])
a.codecTime=a.crcTime=0,a.postMessage({type:"importScripts",scripts:A.slice(1)}),a.addEventListener("message",i),a.addEventListener("error",o)}function D(e){console.error(e)}var _,T="File format is not recognized.",R="CRC failed.",N="File contains encrypted entry.",k="File is using Zip64 (4gb+ file size).",P="Error while reading zip file.",Q="Error while writing zip file.",F="Error while writing file data.",G="Error while reading file data.",M="File already exists.",L=524288,U="text/plain"
try{_=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(H){}t.prototype.append=function(e){for(var t=0|this.crc,n=this.table,r=0,i=0|e.length;i>r;r++)t=t>>>8^n[255&(t^e[r])]
this.crc=t},t.prototype.get=function(){return~this.crc},t.prototype.table=function(){var e,t,n,r=[]
for(e=0;256>e;e++){for(n=e,t=0;8>t;t++)1&n?n=n>>>1^3988292384:n>>>=1
r[e]=n}return r}(),n.prototype.append=function(e,t){return e},n.prototype.flush=function(){},A.prototype=new o,A.prototype.constructor=A,a.prototype=new o,a.prototype.constructor=a,s.prototype=new o,s.prototype.constructor=s,c.prototype.getData=function(e){e(this.data)},l.prototype=new c,l.prototype.constructor=l,u.prototype=new c,u.prototype.constructor=u,d.prototype=new c,d.prototype.constructor=d
var z={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]}
e.zip={Reader:o,Writer:c,BlobReader:s,Data64URIReader:a,TextReader:A,BlobWriter:d,Data64URIWriter:u,TextWriter:l,createReader:function(e,t,n){n=n||D,e.init(function(){x(e,t,n)},n)},createWriter:function(e,t,n,r){n=n||D,r=!!r,e.init(function(){S(e,t,n,r)},n)},useWebWorkers:!0,workerScriptsPath:null,workerScripts:null}}(this),define("zip",function(e){return function(){var t
return t||e.zip}}(this)),function(){"use strict"
var e={application:{"andrew-inset":"ez",annodex:"anx","atom+xml":"atom","atomcat+xml":"atomcat","atomserv+xml":"atomsrv",bbolin:"lin",cap:["cap","pcap"],"cu-seeme":"cu","davmount+xml":"davmount",dsptype:"tsp",ecmascript:["es","ecma"],futuresplash:"spl",hta:"hta","java-archive":"jar","java-serialized-object":"ser","java-vm":"class",javascript:"js",m3g:"m3g","mac-binhex40":"hqx",mathematica:["nb","ma","mb"],msaccess:"mdb",msword:["doc","dot"],mxf:"mxf",oda:"oda",ogg:"ogx",pdf:"pdf","pgp-keys":"key","pgp-signature":["asc","sig"],"pics-rules":"prf",postscript:["ps","ai","eps","epsi","epsf","eps2","eps3"],rar:"rar","rdf+xml":"rdf","rss+xml":"rss",rtf:"rtf",smil:["smi","smil"],"xhtml+xml":["xhtml","xht"],xml:["xml","xsl","xsd"],"xspf+xml":"xspf",zip:"zip","vnd.android.package-archive":"apk","vnd.cinderella":"cdy","vnd.google-earth.kml+xml":"kml","vnd.google-earth.kmz":"kmz","vnd.mozilla.xul+xml":"xul","vnd.ms-excel":["xls","xlb","xlt","xlm","xla","xlc","xlw"],"vnd.ms-pki.seccat":"cat","vnd.ms-pki.stl":"stl","vnd.ms-powerpoint":["ppt","pps","pot"],"vnd.oasis.opendocument.chart":"odc","vnd.oasis.opendocument.database":"odb","vnd.oasis.opendocument.formula":"odf","vnd.oasis.opendocument.graphics":"odg","vnd.oasis.opendocument.graphics-template":"otg","vnd.oasis.opendocument.image":"odi","vnd.oasis.opendocument.presentation":"odp","vnd.oasis.opendocument.presentation-template":"otp","vnd.oasis.opendocument.spreadsheet":"ods","vnd.oasis.opendocument.spreadsheet-template":"ots","vnd.oasis.opendocument.text":"odt","vnd.oasis.opendocument.text-master":"odm","vnd.oasis.opendocument.text-template":"ott","vnd.oasis.opendocument.text-web":"oth","vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","vnd.openxmlformats-officedocument.spreadsheetml.template":"xltx","vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","vnd.openxmlformats-officedocument.presentationml.slideshow":"ppsx","vnd.openxmlformats-officedocument.presentationml.template":"potx","vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","vnd.openxmlformats-officedocument.wordprocessingml.template":"dotx","vnd.smaf":"mmf","vnd.stardivision.calc":"sdc","vnd.stardivision.chart":"sds","vnd.stardivision.draw":"sda","vnd.stardivision.impress":"sdd","vnd.stardivision.math":["sdf","smf"],"vnd.stardivision.writer":["sdw","vor"],"vnd.stardivision.writer-global":"sgl","vnd.sun.xml.calc":"sxc","vnd.sun.xml.calc.template":"stc","vnd.sun.xml.draw":"sxd","vnd.sun.xml.draw.template":"std","vnd.sun.xml.impress":"sxi","vnd.sun.xml.impress.template":"sti","vnd.sun.xml.math":"sxm","vnd.sun.xml.writer":"sxw","vnd.sun.xml.writer.global":"sxg","vnd.sun.xml.writer.template":"stw","vnd.symbian.install":["sis","sisx"],"vnd.visio":["vsd","vst","vss","vsw"],"vnd.wap.wbxml":"wbxml","vnd.wap.wmlc":"wmlc","vnd.wap.wmlscriptc":"wmlsc","vnd.wordperfect":"wpd","vnd.wordperfect5.1":"wp5","x-123":"wk","x-7z-compressed":"7z","x-abiword":"abw","x-apple-diskimage":"dmg","x-bcpio":"bcpio","x-bittorrent":"torrent","x-cbr":["cbr","cba","cbt","cb7"],"x-cbz":"cbz","x-cdf":["cdf","cda"],"x-cdlink":"vcd","x-chess-pgn":"pgn","x-cpio":"cpio","x-csh":"csh","x-debian-package":["deb","udeb"],"x-director":["dcr","dir","dxr","cst","cct","cxt","w3d","fgd","swa"],"x-dms":"dms","x-doom":"wad","x-dvi":"dvi","x-httpd-eruby":"rhtml","x-font":"pcf.Z","x-freemind":"mm","x-gnumeric":"gnumeric","x-go-sgf":"sgf","x-graphing-calculator":"gcf","x-gtar":["gtar","taz"],"x-hdf":"hdf","x-httpd-php":["phtml","pht","php"],"x-httpd-php-source":"phps","x-httpd-php3":"php3","x-httpd-php3-preprocessed":"php3p","x-httpd-php4":"php4","x-httpd-php5":"php5","x-ica":"ica","x-info":"info","x-internet-signup":["ins","isp"],"x-iphone":"iii","x-iso9660-image":"iso","x-java-jnlp-file":"jnlp","x-jmol":"jmz","x-killustrator":"kil","x-koan":["skp","skd","skt","skm"],"x-kpresenter":["kpr","kpt"],"x-kword":["kwd","kwt"],"x-latex":"latex","x-lha":"lha","x-lyx":"lyx","x-lzh":"lzh","x-lzx":"lzx","x-maker":["frm","maker","frame","fm","fb","book","fbdoc"],"x-ms-wmd":"wmd","x-ms-wmz":"wmz","x-msdos-program":["com","exe","bat","dll"],"x-msi":"msi","x-netcdf":["nc","cdf"],"x-ns-proxy-autoconfig":["pac","dat"],"x-nwc":"nwc","x-object":"o","x-oz-application":"oza","x-pkcs7-certreqresp":"p7r","x-python-code":["pyc","pyo"],"x-qgis":["qgs","shp","shx"],"x-quicktimeplayer":"qtl","x-redhat-package-manager":"rpm","x-ruby":"rb","x-sh":"sh","x-shar":"shar","x-shockwave-flash":["swf","swfl"],"x-silverlight":"scr","x-stuffit":"sit","x-sv4cpio":"sv4cpio","x-sv4crc":"sv4crc","x-tar":"tar","x-tcl":"tcl","x-tex-gf":"gf","x-tex-pk":"pk","x-texinfo":["texinfo","texi"],"x-trash":["~","%","bak","old","sik"],"x-troff":["t","tr","roff"],"x-troff-man":"man","x-troff-me":"me","x-troff-ms":"ms","x-ustar":"ustar","x-wais-source":"src","x-wingz":"wz","x-x509-ca-cert":["crt","der","cer"],"x-xcf":"xcf","x-xfig":"fig","x-xpinstall":"xpi",applixware:"aw","atomsvc+xml":"atomsvc","ccxml+xml":"ccxml","cdmi-capability":"cdmia","cdmi-container":"cdmic","cdmi-domain":"cdmid","cdmi-object":"cdmio","cdmi-queue":"cdmiq","docbook+xml":"dbk","dssc+der":"dssc","dssc+xml":"xdssc","emma+xml":"emma","epub+zip":"epub",exi:"exi","font-tdpfr":"pfr","gml+xml":"gml","gpx+xml":"gpx",gxf:"gxf",hyperstudio:"stk","inkml+xml":["ink","inkml"],ipfix:"ipfix",json:"json","jsonml+json":"jsonml","lost+xml":"lostxml","mads+xml":"mads",marc:"mrc","marcxml+xml":"mrcx","mathml+xml":"mathml",mbox:"mbox","mediaservercontrol+xml":"mscml","metalink+xml":"metalink","metalink4+xml":"meta4","mets+xml":"mets","mods+xml":"mods",mp21:["m21","mp21"],mp4:"mp4s","oebps-package+xml":"opf","omdoc+xml":"omdoc",onenote:["onetoc","onetoc2","onetmp","onepkg"],oxps:"oxps","patch-ops-error+xml":"xer","pgp-encrypted":"pgp",pkcs10:"p10","pkcs7-mime":["p7m","p7c"],"pkcs7-signature":"p7s",pkcs8:"p8","pkix-attr-cert":"ac","pkix-crl":"crl","pkix-pkipath":"pkipath",pkixcmp:"pki","pls+xml":"pls","prs.cww":"cww","pskc+xml":"pskcxml","reginfo+xml":"rif","relax-ng-compact-syntax":"rnc","resource-lists+xml":"rl","resource-lists-diff+xml":"rld","rls-services+xml":"rs","rpki-ghostbusters":"gbr","rpki-manifest":"mft","rpki-roa":"roa","rsd+xml":"rsd","sbml+xml":"sbml","scvp-cv-request":"scq","scvp-cv-response":"scs","scvp-vp-request":"spq","scvp-vp-response":"spp",sdp:"sdp","set-payment-initiation":"setpay","set-registration-initiation":"setreg","shf+xml":"shf","sparql-query":"rq","sparql-results+xml":"srx",srgs:"gram","srgs+xml":"grxml","sru+xml":"sru","ssdl+xml":"ssdl","ssml+xml":"ssml","tei+xml":["tei","teicorpus"],"thraud+xml":"tfi","timestamped-data":"tsd","vnd.3gpp.pic-bw-large":"plb","vnd.3gpp.pic-bw-small":"psb","vnd.3gpp.pic-bw-var":"pvb","vnd.3gpp2.tcap":"tcap","vnd.3m.post-it-notes":"pwn","vnd.accpac.simply.aso":"aso","vnd.accpac.simply.imp":"imp","vnd.acucobol":"acu","vnd.acucorp":["atc","acutc"],"vnd.adobe.air-application-installer-package+zip":"air","vnd.adobe.formscentral.fcdt":"fcdt","vnd.adobe.fxp":["fxp","fxpl"],"vnd.adobe.xdp+xml":"xdp","vnd.adobe.xfdf":"xfdf","vnd.ahead.space":"ahead","vnd.airzip.filesecure.azf":"azf","vnd.airzip.filesecure.azs":"azs","vnd.amazon.ebook":"azw","vnd.americandynamics.acc":"acc","vnd.amiga.ami":"ami","vnd.anser-web-certificate-issue-initiation":"cii","vnd.anser-web-funds-transfer-initiation":"fti","vnd.antix.game-component":"atx","vnd.apple.installer+xml":"mpkg","vnd.apple.mpegurl":"m3u8","vnd.aristanetworks.swi":"swi","vnd.astraea-software.iota":"iota","vnd.audiograph":"aep","vnd.blueice.multipass":"mpm","vnd.bmi":"bmi","vnd.businessobjects":"rep","vnd.chemdraw+xml":"cdxml","vnd.chipnuts.karaoke-mmd":"mmd","vnd.claymore":"cla","vnd.cloanto.rp9":"rp9","vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"vnd.cluetrust.cartomobile-config":"c11amc","vnd.cluetrust.cartomobile-config-pkg":"c11amz","vnd.commonspace":"csp","vnd.contact.cmsg":"cdbcmsg","vnd.cosmocaller":"cmc","vnd.crick.clicker":"clkx","vnd.crick.clicker.keyboard":"clkk","vnd.crick.clicker.palette":"clkp","vnd.crick.clicker.template":"clkt","vnd.crick.clicker.wordbank":"clkw","vnd.criticaltools.wbs+xml":"wbs","vnd.ctc-posml":"pml","vnd.cups-ppd":"ppd","vnd.curl.car":"car","vnd.curl.pcurl":"pcurl","vnd.dart":"dart","vnd.data-vision.rdz":"rdz","vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"vnd.dece.ttml+xml":["uvt","uvvt"],"vnd.dece.unspecified":["uvx","uvvx"],"vnd.dece.zip":["uvz","uvvz"],"vnd.denovo.fcselayout-link":"fe_launch","vnd.dna":"dna","vnd.dolby.mlp":"mlp","vnd.dpgraph":"dpg","vnd.dreamfactory":"dfac","vnd.ds-keypoint":"kpxx","vnd.dvb.ait":"ait","vnd.dvb.service":"svc","vnd.dynageo":"geo","vnd.ecowin.chart":"mag","vnd.enliven":"nml","vnd.epson.esf":"esf","vnd.epson.msf":"msf","vnd.epson.quickanime":"qam","vnd.epson.salt":"slt","vnd.epson.ssf":"ssf","vnd.eszigno3+xml":["es3","et3"],"vnd.ezpix-album":"ez2","vnd.ezpix-package":"ez3","vnd.fdf":"fdf","vnd.fdsn.mseed":"mseed","vnd.fdsn.seed":["seed","dataless"],"vnd.flographit":"gph","vnd.fluxtime.clip":"ftc","vnd.framemaker":["fm","frame","maker","book"],"vnd.frogans.fnc":"fnc","vnd.frogans.ltf":"ltf","vnd.fsc.weblaunch":"fsc","vnd.fujitsu.oasys":"oas","vnd.fujitsu.oasys2":"oa2","vnd.fujitsu.oasys3":"oa3","vnd.fujitsu.oasysgp":"fg5","vnd.fujitsu.oasysprs":"bh2","vnd.fujixerox.ddd":"ddd","vnd.fujixerox.docuworks":"xdw","vnd.fujixerox.docuworks.binder":"xbd","vnd.fuzzysheet":"fzs","vnd.genomatix.tuxedo":"txd","vnd.geogebra.file":"ggb","vnd.geogebra.tool":"ggt","vnd.geometry-explorer":["gex","gre"],"vnd.geonext":"gxt","vnd.geoplan":"g2w","vnd.geospace":"g3w","vnd.gmx":"gmx","vnd.grafeq":["gqf","gqs"],"vnd.groove-account":"gac","vnd.groove-help":"ghf","vnd.groove-identity-message":"gim","vnd.groove-injector":"grv","vnd.groove-tool-message":"gtm","vnd.groove-tool-template":"tpl","vnd.groove-vcard":"vcg","vnd.hal+xml":"hal","vnd.handheld-entertainment+xml":"zmm","vnd.hbci":"hbci","vnd.hhe.lesson-player":"les","vnd.hp-hpgl":"hpgl","vnd.hp-hpid":"hpid","vnd.hp-hps":"hps","vnd.hp-jlyt":"jlt","vnd.hp-pcl":"pcl","vnd.hp-pclxl":"pclxl","vnd.hydrostatix.sof-data":"sfd-hdstx","vnd.ibm.minipay":"mpy","vnd.ibm.modcap":["afp","listafp","list3820"],"vnd.ibm.rights-management":"irm","vnd.ibm.secure-container":"sc","vnd.iccprofile":["icc","icm"],"vnd.igloader":"igl","vnd.immervision-ivp":"ivp","vnd.immervision-ivu":"ivu","vnd.insors.igm":"igm","vnd.intercon.formnet":["xpw","xpx"],"vnd.intergeo":"i2g","vnd.intu.qbo":"qbo","vnd.intu.qfx":"qfx","vnd.ipunplugged.rcprofile":"rcprofile","vnd.irepository.package+xml":"irp","vnd.is-xpr":"xpr","vnd.isac.fcs":"fcs","vnd.jam":"jam","vnd.jcp.javame.midlet-rms":"rms","vnd.jisp":"jisp","vnd.joost.joda-archive":"joda","vnd.kahootz":["ktz","ktr"],"vnd.kde.karbon":"karbon","vnd.kde.kchart":"chrt","vnd.kde.kformula":"kfo","vnd.kde.kivio":"flw","vnd.kde.kontour":"kon","vnd.kde.kpresenter":["kpr","kpt"],"vnd.kde.kspread":"ksp","vnd.kde.kword":["kwd","kwt"],"vnd.kenameaapp":"htke","vnd.kidspiration":"kia","vnd.kinar":["kne","knp"],"vnd.koan":["skp","skd","skt","skm"],"vnd.kodak-descriptor":"sse","vnd.las.las+xml":"lasxml","vnd.llamagraphics.life-balance.desktop":"lbd","vnd.llamagraphics.life-balance.exchange+xml":"lbe","vnd.lotus-1-2-3":"123","vnd.lotus-approach":"apr","vnd.lotus-freelance":"pre","vnd.lotus-notes":"nsf","vnd.lotus-organizer":"org","vnd.lotus-screencam":"scm","vnd.lotus-wordpro":"lwp","vnd.macports.portpkg":"portpkg","vnd.mcd":"mcd","vnd.medcalcdata":"mc1","vnd.mediastation.cdkey":"cdkey","vnd.mfer":"mwf","vnd.mfmp":"mfm","vnd.micrografx.flo":"flo","vnd.micrografx.igx":"igx","vnd.mif":"mif","vnd.mobius.daf":"daf","vnd.mobius.dis":"dis","vnd.mobius.mbk":"mbk","vnd.mobius.mqy":"mqy","vnd.mobius.msl":"msl","vnd.mobius.plc":"plc","vnd.mobius.txf":"txf","vnd.mophun.application":"mpn","vnd.mophun.certificate":"mpc","vnd.ms-artgalry":"cil","vnd.ms-cab-compressed":"cab","vnd.ms-excel.addin.macroenabled.12":"xlam","vnd.ms-excel.sheet.binary.macroenabled.12":"xlsb","vnd.ms-excel.sheet.macroenabled.12":"xlsm","vnd.ms-excel.template.macroenabled.12":"xltm","vnd.ms-fontobject":"eot","vnd.ms-htmlhelp":"chm","vnd.ms-ims":"ims","vnd.ms-lrm":"lrm","vnd.ms-officetheme":"thmx","vnd.ms-powerpoint.addin.macroenabled.12":"ppam","vnd.ms-powerpoint.presentation.macroenabled.12":"pptm","vnd.ms-powerpoint.slide.macroenabled.12":"sldm","vnd.ms-powerpoint.slideshow.macroenabled.12":"ppsm","vnd.ms-powerpoint.template.macroenabled.12":"potm","vnd.ms-project":["mpp","mpt"],"vnd.ms-word.document.macroenabled.12":"docm","vnd.ms-word.template.macroenabled.12":"dotm","vnd.ms-works":["wps","wks","wcm","wdb"],"vnd.ms-wpl":"wpl","vnd.ms-xpsdocument":"xps","vnd.mseq":"mseq","vnd.musician":"mus","vnd.muvee.style":"msty","vnd.mynfc":"taglet","vnd.neurolanguage.nlu":"nlu","vnd.nitf":["ntf","nitf"],"vnd.noblenet-directory":"nnd","vnd.noblenet-sealer":"nns","vnd.noblenet-web":"nnw","vnd.nokia.n-gage.data":"ngdat","vnd.nokia.n-gage.symbian.install":"n-gage","vnd.nokia.radio-preset":"rpst","vnd.nokia.radio-presets":"rpss","vnd.novadigm.edm":"edm","vnd.novadigm.edx":"edx","vnd.novadigm.ext":"ext","vnd.oasis.opendocument.chart-template":"otc","vnd.oasis.opendocument.formula-template":"odft","vnd.oasis.opendocument.image-template":"oti","vnd.olpc-sugar":"xo","vnd.oma.dd2+xml":"dd2","vnd.openofficeorg.extension":"oxt","vnd.openxmlformats-officedocument.presentationml.slide":"sldx","vnd.osgeo.mapguide.package":"mgp","vnd.osgi.dp":"dp","vnd.osgi.subsystem":"esa","vnd.palm":["pdb","pqa","oprc"],"vnd.pawaafile":"paw","vnd.pg.format":"str","vnd.pg.osasli":"ei6","vnd.picsel":"efif","vnd.pmi.widget":"wg","vnd.pocketlearn":"plf","vnd.powerbuilder6":"pbd","vnd.previewsystems.box":"box","vnd.proteus.magazine":"mgz","vnd.publishare-delta-tree":"qps","vnd.pvi.ptid1":"ptid","vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"vnd.realvnc.bed":"bed","vnd.recordare.musicxml":"mxl","vnd.recordare.musicxml+xml":"musicxml","vnd.rig.cryptonote":"cryptonote","vnd.rn-realmedia":"rm","vnd.rn-realmedia-vbr":"rmvb","vnd.route66.link66+xml":"link66","vnd.sailingtracker.track":"st","vnd.seemail":"see","vnd.sema":"sema","vnd.semd":"semd","vnd.semf":"semf","vnd.shana.informed.formdata":"ifm","vnd.shana.informed.formtemplate":"itp","vnd.shana.informed.interchange":"iif","vnd.shana.informed.package":"ipk","vnd.simtech-mindmapper":["twd","twds"],"vnd.smart.teacher":"teacher","vnd.solent.sdkm+xml":["sdkm","sdkd"],"vnd.spotfire.dxp":"dxp","vnd.spotfire.sfs":"sfs","vnd.stepmania.package":"smzip","vnd.stepmania.stepchart":"sm","vnd.sus-calendar":["sus","susp"],"vnd.svd":"svd","vnd.syncml+xml":"xsm","vnd.syncml.dm+wbxml":"bdm","vnd.syncml.dm+xml":"xdm","vnd.tao.intent-module-archive":"tao","vnd.tcpdump.pcap":["pcap","cap","dmp"],"vnd.tmobile-livetv":"tmo","vnd.trid.tpt":"tpt","vnd.triscape.mxs":"mxs","vnd.trueapp":"tra","vnd.ufdl":["ufd","ufdl"],"vnd.uiq.theme":"utz","vnd.umajin":"umj","vnd.unity":"unityweb","vnd.uoml+xml":"uoml","vnd.vcx":"vcx","vnd.visionary":"vis","vnd.vsf":"vsf","vnd.webturbo":"wtb","vnd.wolfram.player":"nbp","vnd.wqd":"wqd","vnd.wt.stf":"stf","vnd.xara":"xar","vnd.xfdl":"xfdl","vnd.yamaha.hv-dic":"hvd","vnd.yamaha.hv-script":"hvs","vnd.yamaha.hv-voice":"hvp","vnd.yamaha.openscoreformat":"osf","vnd.yamaha.openscoreformat.osfpvg+xml":"osfpvg","vnd.yamaha.smaf-audio":"saf","vnd.yamaha.smaf-phrase":"spf","vnd.yellowriver-custom-menu":"cmp","vnd.zul":["zir","zirz"],"vnd.zzazz.deck+xml":"zaz","voicexml+xml":"vxml",widget:"wgt",winhlp:"hlp","wsdl+xml":"wsdl","wspolicy+xml":"wspolicy","x-ace-compressed":"ace","x-authorware-bin":["aab","x32","u32","vox"],"x-authorware-map":"aam","x-authorware-seg":"aas","x-blorb":["blb","blorb"],"x-bzip":"bz","x-bzip2":["bz2","boz"],"x-cfs-compressed":"cfs","x-chat":"chat","x-conference":"nsc","x-dgc-compressed":"dgc","x-dtbncx+xml":"ncx","x-dtbook+xml":"dtb","x-dtbresource+xml":"res","x-eva":"eva","x-font-bdf":"bdf","x-font-ghostscript":"gsf","x-font-linux-psf":"psf","x-font-otf":"otf","x-font-pcf":"pcf","x-font-snf":"snf","x-font-ttf":["ttf","ttc"],"x-font-type1":["pfa","pfb","pfm","afm"],"x-font-woff":"woff","x-freearc":"arc","x-gca-compressed":"gca","x-glulx":"ulx","x-gramps-xml":"gramps","x-install-instructions":"install","x-lzh-compressed":["lzh","lha"],"x-mie":"mie","x-mobipocket-ebook":["prc","mobi"],"x-ms-application":"application","x-ms-shortcut":"lnk","x-ms-xbap":"xbap","x-msbinder":"obd","x-mscardfile":"crd","x-msclip":"clp","x-msdownload":["exe","dll","com","bat","msi"],"x-msmediaview":["mvb","m13","m14"],"x-msmetafile":["wmf","wmz","emf","emz"],"x-msmoney":"mny","x-mspublisher":"pub","x-msschedule":"scd","x-msterminal":"trm","x-mswrite":"wri","x-nzb":"nzb","x-pkcs12":["p12","pfx"],"x-pkcs7-certificates":["p7b","spc"],"x-research-info-systems":"ris","x-silverlight-app":"xap","x-sql":"sql","x-stuffitx":"sitx","x-subrip":"srt","x-t3vm-image":"t3","x-tads":"gam","x-tex":"tex","x-tex-tfm":"tfm","x-tgif":"obj","x-xliff+xml":"xlf","x-xz":"xz","x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"xaml+xml":"xaml","xcap-diff+xml":"xdf","xenc+xml":"xenc","xml-dtd":"dtd","xop+xml":"xop","xproc+xml":"xpl","xslt+xml":"xslt","xv+xml":["mxml","xhvml","xvml","xvm"],yang:"yang","yin+xml":"yin",envoy:"evy",fractals:"fif","internet-property-stream":"acx",olescript:"axs","vnd.ms-outlook":"msg","vnd.ms-pkicertstore":"sst","x-compress":"z","x-compressed":"tgz","x-gzip":"gz","x-perfmon":["pma","pmc","pml","pmr","pmw"],"x-pkcs7-mime":["p7c","p7m"],"ynd.ms-pkipko":"pko"},audio:{amr:"amr","amr-wb":"awb",annodex:"axa",basic:["au","snd"],flac:"flac",midi:["mid","midi","kar","rmi"],mpeg:["mpga","mpega","mp2","mp3","m4a","mp2a","m2a","m3a"],mpegurl:"m3u",ogg:["oga","ogg","spx"],"prs.sid":"sid","x-aiff":["aif","aiff","aifc"],"x-gsm":"gsm","x-ms-wma":"wma","x-ms-wax":"wax","x-pn-realaudio":"ram","x-realaudio":"ra","x-sd2":"sd2","x-wav":"wav",adpcm:"adp",mp4:"mp4a",s3m:"s3m",silk:"sil","vnd.dece.audio":["uva","uvva"],"vnd.digital-winds":"eol","vnd.dra":"dra","vnd.dts":"dts","vnd.dts.hd":"dtshd","vnd.lucent.voice":"lvp","vnd.ms-playready.media.pya":"pya","vnd.nuera.ecelp4800":"ecelp4800","vnd.nuera.ecelp7470":"ecelp7470","vnd.nuera.ecelp9600":"ecelp9600","vnd.rip":"rip",webm:"weba","x-aac":"aac","x-caf":"caf","x-matroska":"mka","x-pn-realaudio-plugin":"rmp",xm:"xm",mid:["mid","rmi"]},chemical:{"x-alchemy":"alc","x-cache":["cac","cache"],"x-cache-csf":"csf","x-cactvs-binary":["cbin","cascii","ctab"],"x-cdx":"cdx","x-chem3d":"c3d","x-cif":"cif","x-cmdf":"cmdf","x-cml":"cml","x-compass":"cpa","x-crossfire":"bsd","x-csml":["csml","csm"],"x-ctx":"ctx","x-cxf":["cxf","cef"],"x-embl-dl-nucleotide":["emb","embl"],"x-gamess-input":["inp","gam","gamin"],"x-gaussian-checkpoint":["fch","fchk"],"x-gaussian-cube":"cub","x-gaussian-input":["gau","gjc","gjf"],"x-gaussian-log":"gal","x-gcg8-sequence":"gcg","x-genbank":"gen","x-hin":"hin","x-isostar":["istr","ist"],"x-jcamp-dx":["jdx","dx"],"x-kinemage":"kin","x-macmolecule":"mcm","x-macromodel-input":["mmd","mmod"],"x-mdl-molfile":"mol","x-mdl-rdfile":"rd","x-mdl-rxnfile":"rxn","x-mdl-sdfile":["sd","sdf"],"x-mdl-tgf":"tgf","x-mmcif":"mcif","x-mol2":"mol2","x-molconn-Z":"b","x-mopac-graph":"gpt","x-mopac-input":["mop","mopcrt","mpc","zmt"],"x-mopac-out":"moo","x-ncbi-asn1":"asn","x-ncbi-asn1-ascii":["prt","ent"],"x-ncbi-asn1-binary":["val","aso"],"x-pdb":["pdb","ent"],"x-rosdal":"ros","x-swissprot":"sw","x-vamas-iso14976":"vms","x-vmd":"vmd","x-xtel":"xtel","x-xyz":"xyz"},image:{gif:"gif",ief:"ief",jpeg:["jpeg","jpg","jpe"],pcx:"pcx",png:"png","svg+xml":["svg","svgz"],tiff:["tiff","tif"],"vnd.djvu":["djvu","djv"],"vnd.wap.wbmp":"wbmp","x-canon-cr2":"cr2","x-canon-crw":"crw","x-cmu-raster":"ras","x-coreldraw":"cdr","x-coreldrawpattern":"pat","x-coreldrawtemplate":"cdt","x-corelphotopaint":"cpt","x-epson-erf":"erf","x-icon":"ico","x-jg":"art","x-jng":"jng","x-nikon-nef":"nef","x-olympus-orf":"orf","x-photoshop":"psd","x-portable-anymap":"pnm","x-portable-bitmap":"pbm","x-portable-graymap":"pgm","x-portable-pixmap":"ppm","x-rgb":"rgb","x-xbitmap":"xbm","x-xpixmap":"xpm","x-xwindowdump":"xwd",bmp:"bmp",cgm:"cgm",g3fax:"g3",ktx:"ktx","prs.btif":"btif",sgi:"sgi","vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"vnd.dwg":"dwg","vnd.dxf":"dxf","vnd.fastbidsheet":"fbs","vnd.fpx":"fpx","vnd.fst":"fst","vnd.fujixerox.edmics-mmr":"mmr","vnd.fujixerox.edmics-rlc":"rlc","vnd.ms-modi":"mdi","vnd.ms-photo":"wdp","vnd.net-fpx":"npx","vnd.xiff":"xif",webp:"webp","x-3ds":"3ds","x-cmx":"cmx","x-freehand":["fh","fhc","fh4","fh5","fh7"],"x-pict":["pic","pct"],"x-tga":"tga","cis-cod":"cod",pipeg:"jfif"},message:{rfc822:["eml","mime","mht","mhtml","nws"]},model:{iges:["igs","iges"],mesh:["msh","mesh","silo"],vrml:["wrl","vrml"],"x3d+vrml":["x3dv","x3dvz"],"x3d+xml":["x3d","x3dz"],"x3d+binary":["x3db","x3dbz"],"vnd.collada+xml":"dae","vnd.dwf":"dwf","vnd.gdl":"gdl","vnd.gtw":"gtw","vnd.mts":"mts","vnd.vtu":"vtu"},text:{"cache-manifest":["manifest","appcache"],calendar:["ics","icz","ifb"],css:"css",csv:"csv",h323:"323",html:["html","htm","shtml","stm"],iuls:"uls",mathml:"mml",plain:["txt","text","brf","conf","def","list","log","in","bas"],richtext:"rtx",scriptlet:["sct","wsc"],texmacs:["tm","ts"],"tab-separated-values":"tsv","vnd.sun.j2me.app-descriptor":"jad","vnd.wap.wml":"wml","vnd.wap.wmlscript":"wmls","x-bibtex":"bib","x-boo":"boo","x-c++hdr":["h++","hpp","hxx","hh"],"x-c++src":["c++","cpp","cxx","cc"],"x-component":"htc","x-dsrc":"d","x-diff":["diff","patch"],"x-haskell":"hs","x-java":"java","x-literate-haskell":"lhs","x-moc":"moc","x-pascal":["p","pas"],"x-pcs-gcd":"gcd","x-perl":["pl","pm"],"x-python":"py","x-scala":"scala","x-setext":"etx","x-tcl":["tcl","tk"],"x-tex":["tex","ltx","sty","cls"],"x-vcalendar":"vcs","x-vcard":"vcf",n3:"n3","prs.lines.tag":"dsc",sgml:["sgml","sgm"],troff:["t","tr","roff","man","me","ms"],turtle:"ttl","uri-list":["uri","uris","urls"],vcard:"vcard","vnd.curl":"curl","vnd.curl.dcurl":"dcurl","vnd.curl.scurl":"scurl","vnd.curl.mcurl":"mcurl","vnd.dvb.subtitle":"sub","vnd.fly":"fly","vnd.fmi.flexstor":"flx","vnd.graphviz":"gv","vnd.in3d.3dml":"3dml","vnd.in3d.spot":"spot","x-asm":["s","asm"],"x-c":["c","cc","cxx","cpp","h","hh","dic"],"x-fortran":["f","for","f77","f90"],"x-opml":"opml","x-nfo":"nfo","x-sfv":"sfv","x-uuencode":"uu",webviewhtml:"htt"},video:{"3gpp":"3gp",annodex:"axv",dl:"dl",dv:["dif","dv"],fli:"fli",gl:"gl",mpeg:["mpeg","mpg","mpe","m1v","m2v","mp2","mpa","mpv2"],mp4:["mp4","mp4v","mpg4"],quicktime:["qt","mov"],ogg:"ogv","vnd.mpegurl":["mxu","m4u"],"x-flv":"flv","x-la-asf":["lsf","lsx"],"x-mng":"mng","x-ms-asf":["asf","asx","asr"],"x-ms-wm":"wm","x-ms-wmv":"wmv","x-ms-wmx":"wmx","x-ms-wvx":"wvx","x-msvideo":"avi","x-sgi-movie":"movie","x-matroska":["mpv","mkv","mk3d","mks"],"3gpp2":"3g2",h261:"h261",h263:"h263",h264:"h264",jpeg:"jpgv",jpm:["jpm","jpgm"],mj2:["mj2","mjp2"],"vnd.dece.hd":["uvh","uvvh"],"vnd.dece.mobile":["uvm","uvvm"],"vnd.dece.pd":["uvp","uvvp"],"vnd.dece.sd":["uvs","uvvs"],"vnd.dece.video":["uvv","uvvv"],"vnd.dvb.file":"dvb","vnd.fvt":"fvt","vnd.ms-playready.media.pyv":"pyv","vnd.uvvu.mp4":["uvu","uvvu"],"vnd.vivo":"viv",webm:"webm","x-f4v":"f4v","x-m4v":"m4v","x-ms-vob":"vob","x-smv":"smv"},"x-conference":{"x-cooltalk":"ice"},"x-world":{"x-vrml":["vrm","vrml","wrl","flr","wrz","xaf","xof"]}},t=function(){var t,n,r,i,o={}
for(t in e)if(e.hasOwnProperty(t))for(n in e[t])if(e[t].hasOwnProperty(n))if(r=e[t][n],"string"==typeof r)o[r]=t+"/"+n
else for(i=0;i<r.length;i++)o[r[i]]=t+"/"+n
return o}()
zip.getMimeType=function(e){var n="application/octet-stream"
return e&&t[e.split(".").pop().toLowerCase()]||n}}(),define("mime-types",["zip"],function(e){return function(){var t
return t||e.zip}}(this)),function(){"use strict"
function e(e){function t(t){o.size=e.uncompressedSize,t()}function n(t){o.data?t():e.getData(new g,function(e){o.data=e,i=new w(e),t()},null,o.checkCrc32)}function r(e,t,r,o){n(function(){i.readUint8Array(e,t,r,o)},o)}var i,o=this
o.size=0,o.init=t,o.readUint8Array=r}function t(e){function t(e){n+=e.uncompressedSize||0,e.children.forEach(t)}var n=0
return t(e),n}function n(e,t,r){function i(){A++,A<e.children.length?o(e.children[A]):t()}function o(e){e.directory?n(e,i,r):(e.reader=new e.Reader(e.data,r),e.reader.init(function(){e.uncompressedSize=e.reader.size,i()}))}var A=0
e.children.length?o(e.children[A]):t()}function r(e){var t=e.parent.children
t.forEach(function(n,r){n.id==e.id&&t.splice(r,1)})}function i(e,t,n,r,i){function o(e,t,n,r,i){function a(){var c=t.children[s]
c?e.add(c.getFullname(),c.reader,function(){A+=c.uncompressedSize||0,o(e,c,function(){s++,a()},r,i)},function(e){r&&r(A+e,i)},{directory:c.directory,version:c.zipVersion}):n()}var s=0
a()}var A=0
o(e,t,n,r,i)}function o(e,t,n,r){function i(e,t){e.isDirectory&&e.createReader().readEntries(t),e.isFile&&t([])}function o(e,t,n){i(t,function(t){function i(t){function n(e){o(e,t,function(){a++,A()})}t.isDirectory&&n(e.addDirectory(t.name)),t.isFile&&t.file(function(r){var i=e.addBlob(t.name,r)
i.uncompressedSize=r.size,n(i)},r)}function A(){var e=t[a]
e?i(e):n()}var a=0
A()})}t.isDirectory?o(e,t,n):t.file(function(r){e.addBlob(t.name,r),n()},r)}function A(e,t,n,r,i,o,A){function a(e,t,n,r,i,o){function c(t){function n(e){s+=t.uncompressedSize||0,a(e,t,function(){u++,l()},r,i,o)}t.directory?e.getDirectory(t.name,{create:!0},n,i):e.getFile(t.name,{create:!0},function(e){t.getData(new zip.FileWriter(e,zip.getMimeType(t.name)),n,function(e){r&&r(s+e,o)},A)},i)}function l(){var e=t.children[u]
e?c(e):n()}var u=0
l()}var s=0
t.directory?a(e,t,n,r,i,o):t.getData(new zip.FileWriter(e,zip.getMimeType(t.name)),n,r,A)}function a(e){e.entries=[],e.root=new d(e)}function s(e,t,n,r,i){function o(){var a=A*h
r&&r(a,e.size),a<e.size?e.readUint8Array(a,Math.min(h,e.size-a),function(e){t.writeUint8Array(new Uint8Array(e),function(){A++,o()})},i):t.getData(n)}var A=0
o()}function c(e,t,n,r){if(e.directory)return r?new d(e.fs,t,n,e):new u(e.fs,t,n,e)
throw"Parent entry is not a directory."}function l(){}function u(e,t,n,r){var i=this
l.prototype.init.call(i,e,t,n,r),i.Reader=n.Reader,i.Writer=n.Writer,i.data=n.data,n.getData&&(i.getData=n.getData)}function d(e,t,n,r){var i=this
l.prototype.init.call(i,e,t,n,r),i.directory=!0}function f(){a(this)}var h=524288,p=zip.TextWriter,g=zip.BlobWriter,m=zip.Data64URIWriter,v=zip.Reader,y=zip.TextReader,w=zip.BlobReader,B=zip.Data64URIReader,b=zip.createReader,x=zip.createWriter
e.prototype=new v,e.prototype.constructor=e,e.prototype.checkCrc32=!1,l.prototype={init:function(e,t,n,r){var i=this
if(e.root&&r&&r.getChildByName(t))throw"Entry filename already exists."
n||(n={}),i.fs=e,i.name=t,i.id=e.entries.length,i.parent=r,i.children=[],i.zipVersion=n.zipVersion||20,i.uncompressedSize=0,e.entries.push(i),r&&i.parent.children.push(i)},getFileEntry:function(e,r,i,o,a){var s=this
n(s,function(){A(e,s,r,i,o,t(s),a)},o)},moveTo:function(e){var t=this
if(!e.directory)throw"Target entry is not a directory."
if(e.isDescendantOf(t))throw"Entry is a ancestor of target entry."
if(t!=e){if(e.getChildByName(t.name))throw"Entry filename already exists."
r(t),t.parent=e,e.children.push(t)}},getFullname:function(){for(var e=this,t=e.name,n=e.parent;n;)t=(n.name?n.name+"/":"")+t,n=n.parent
return t},isDescendantOf:function(e){for(var t=this.parent;t&&t.id!=e.id;)t=t.parent
return!!t}},l.prototype.constructor=l
var E
u.prototype=E=new l,E.constructor=u,E.getData=function(e,t,n,r){var i=this
!e||e.constructor==i.Writer&&i.data?t(i.data):(i.reader||(i.reader=new i.Reader(i.data,r)),i.reader.init(function(){e.init(function(){s(i.reader,e,t,n,r)},r)}))},E.getText=function(e,t,n,r){this.getData(new p(r),e,t,n)},E.getBlob=function(e,t,n,r){this.getData(new g(e),t,n,r)},E.getData64URI=function(e,t,n,r){this.getData(new m(e),t,n,r)}
var C
d.prototype=C=new l,C.constructor=d,C.addDirectory=function(e){return c(this,e,null,!0)},C.addText=function(e,t){return c(this,e,{data:t,Reader:y,Writer:p})},C.addBlob=function(e,t){return c(this,e,{data:t,Reader:w,Writer:g})},C.addData64URI=function(e,t){return c(this,e,{data:t,Reader:B,Writer:m})},C.addFileEntry=function(e,t,n){o(this,e,t,n)},C.addData=function(e,t){return c(this,e,t)},C.importBlob=function(e,t,n){this.importZip(new w(e),t,n)},C.importText=function(e,t,n){this.importZip(new y(e),t,n)},C.importData64URI=function(e,t,n){this.importZip(new B(e),t,n)},C.exportBlob=function(e,t,n){this.exportZip(new g("application/zip"),e,t,n)},C.exportText=function(e,t,n){this.exportZip(new p,e,t,n)},C.exportFileEntry=function(e,t,n,r){this.exportZip(new zip.FileWriter(e,"application/zip"),t,n,r)},C.exportData64URI=function(e,t,n){this.exportZip(new m("application/zip"),e,t,n)},C.importZip=function(t,n,r){var i=this
b(t,function(t){t.getEntries(function(t){t.forEach(function(t){var n=i,r=t.filename.split("/"),o=r.pop()
r.forEach(function(e){n=n.getChildByName(e)||new d(i.fs,e,null,n)}),t.directory||c(n,o,{data:t,Reader:e})}),n()})},r)},C.exportZip=function(e,r,o,A){var a=this
n(a,function(){x(e,function(e){i(e,a,function(){e.close(r)},o,t(a))},A)},A)},C.getChildByName=function(e){var t,n,r=this
for(t=0;t<r.children.length;t++)if(n=r.children[t],n.name==e)return n},f.prototype={remove:function(e){r(e),this.entries[e.id]=null},find:function(e){var t,n=e.split("/"),r=this.root
for(t=0;r&&t<n.length;t++)r=r.getChildByName(n[t])
return r},getById:function(e){return this.entries[e]},importBlob:function(e,t,n){a(this),this.root.importBlob(e,t,n)},importText:function(e,t,n){a(this),this.root.importText(e,t,n)},importData64URI:function(e,t,n){a(this),this.root.importData64URI(e,t,n)},exportBlob:function(e,t,n){this.root.exportBlob(e,t,n)},exportText:function(e,t,n){this.root.exportText(e,t,n)},exportFileEntry:function(e,t,n,r){this.root.exportFileEntry(e,t,n,r)},exportData64URI:function(e,t,n){this.root.exportData64URI(e,t,n)}},zip.fs={FS:f,ZipDirectoryEntry:d,ZipFileEntry:u},zip.getMimeType=function(){return"application/octet-stream"}}(),define("zip-fs",["mime-types"],function(e){return function(){var t
return t||e.zip}}(this)),function(){"use strict"
function e(e){function t(t,n){var r
i.data?t():(r=new XMLHttpRequest,r.addEventListener("load",function(){i.size||(i.size=Number(r.getResponseHeader("Content-Length"))),i.data=new Uint8Array(r.response),t()},!1),r.addEventListener("error",n,!1),r.open("GET",e),r.responseType="arraybuffer",r.send())}function n(t,n){var r=new XMLHttpRequest
r.addEventListener("load",function(){i.size=Number(r.getResponseHeader("Content-Length")),t()},!1),r.addEventListener("error",n,!1),r.open("HEAD",e),r.send()}function r(e,n,r,o){t(function(){r(new Uint8Array(i.data.subarray(e,e+n)))},o)}var i=this
i.size=0,i.init=n,i.readUint8Array=r}function t(e,t){function n(n,r){var i=new XMLHttpRequest
i.addEventListener("load",function(){o.size=Number(i.getResponseHeader("Content-Length")),n()},!1),i.addEventListener("error",r,!1),i.open("HEAD",e+(t?"?b="+Date.now():"")),i.send()}function r(t,n,r,i){var o=new XMLHttpRequest
o.open("GET",e),o.responseType="arraybuffer",o.setRequestHeader("Range","bytes="+t+"-"+(t+n-1)),o.setRequestHeader("If-None-Match","webkit-no-cache"),o.addEventListener("load",function(){r(o.response)},!1),o.addEventListener("error",i,!1),o.send()}function i(e,t,n,i){r(e,t,function(e){n(new Uint8Array(e))},i)}var o=this
o.size=0,o.init=n,o.readUint8Array=i}function n(e){function t(t,n){r.size=e.byteLength,t()}function n(t,n,r,i){r(new Uint8Array(e.slice(t,t+n)))}var r=this
r.size=0,r.init=t,r.readUint8Array=n}function r(){function e(e,t){r=new Uint8Array,e()}function t(e,t,n){var i=new Uint8Array(r.length+e.length)
i.set(r),i.set(e,r.length),r=i,t()}function n(e){e(r.buffer)}var r,i=this
i.init=e,i.writeUint8Array=t,i.getData=n}function i(e,t){function n(t,n){e.createWriter(function(e){o=e,t()},n)}function r(e,n,r){var i=new Blob([A?e:e.buffer],{type:t})
o.onwrite=function(){o.onwrite=null,n()},o.onerror=r,o.write(i)}function i(t){e.file(t)}var o,a=this
a.init=n,a.writeUint8Array=r,a.getData=i}var o,A,a=zip.Reader,s=zip.Writer
try{A=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(c){}e.prototype=new a,e.prototype.constructor=e,t.prototype=new a,t.prototype.constructor=t,n.prototype=new a,n.prototype.constructor=n,r.prototype=new s,r.prototype.constructor=r,i.prototype=new s,i.prototype.constructor=i,zip.FileWriter=i,zip.HttpReader=e,zip.HttpRangeReader=t,zip.ArrayBufferReader=n,zip.ArrayBufferWriter=r,zip.fs&&(o=zip.fs.ZipDirectoryEntry,o.prototype.addHttpContent=function(n,r,i){function A(e,t,n,r){if(e.directory)return r?new o(e.fs,t,n,e):new zip.fs.ZipFileEntry(e.fs,t,n,e)
throw"Parent entry is not a directory."}return A(this,n,{data:r,Reader:i?t:e})},o.prototype.importHttpContent=function(n,r,i,o){this.importZip(r?new t(n,!0):new e(n),i,o)},zip.fs.FS.prototype.importHttpContent=function(e,t,n,r){this.entries=[],this.root=new o(this),this.root.importHttpContent(e,t,n,r)})}(),define("zip-ext",["zip-fs"],function(e){return function(){var t
return t||e.zip}}(this)),define("readium_js/epub-fetch/zip_resource_fetcher",["jquery","URIjs","./discover_content_type","zip-ext","readium_shared_js/helpers"],function(e,t,n,r,i){var o=function(e,i){function o(e,t){a?e(a,t):(i?(r.useWebWorkers=!0,r.workerScriptsPath=i):r.useWebWorkers=!1,a=new r.fs.FS,s instanceof Blob||s instanceof File?a.importBlob(s,function(){e(a,t)},function(){console.error("ZIP ERROR"),t.apply(this,arguments)}):a.importHttpContent(s,!0,function(){e(a,t)},function(){console.error("ZIP ERROR"),t.apply(this,arguments)}))}function A(e,t,n){if("undefined"==typeof e)throw"Fetched file relative path is undefined!"
o(function(n,r){var i=n.find(e)
"undefined"==typeof i||null===i?r(new Error(u+"Entry "+e+" not found in zip "+c)):i.directory?r(new Error(u+"Entry "+e+" is a directory while a file has been expected")):t(i)},function(){var r=arguments?arguments.length&&arguments[0]instanceof Error?arguments[0]:arguments instanceof Error?arguments:void 0:void 0,i=r?0==r.message.indexOf(u):!1
if(i||s instanceof Blob||s instanceof File)n.apply(this,arguments)
else{console.log("Zip lib failed to load zipped EPUB via HTTP, trying alternative HTTP fetch... ("+s+")")
var o=new XMLHttpRequest
o.onreadystatechange=function(){if(4==this.readyState){var r=o.status>=200&&o.status<300||304===o.status
return r?(s=this.response,a=void 0,void(s instanceof Blob||s instanceof File?A(e,t,n):n(new Error("XMLHttpRequest response not Blob!?")))):void n(o.statusText)}},o.open("GET",s,!0),o.responseType="blob",o.send(null)}})}var a,s=e.getEbookURL(),c=e.getEbookURL_FilePath(),l=!1,u="READIUM -- "
this.resolveURI=function(e){var n=void 0
try{n=new t(e)}catch(r){console.error(r),console.log(e)}if(n&&n.is("absolute"))return e
var i=c
try{i=new t(i).search("").hash("").toString()}catch(r){console.error(r),console.log(i)}return i+("/"==i.charAt(i.length-1)?"":"/")+e},this.fetchFileContentsText=function(e,t,n){A(e,function(e){e.getText(t,void 0,l)},n)},this.fetchFileContentsData64Uri=function(e,t,r){A(e,function(r){r.getData64URI(n.identifyContentTypeFromFileName(e),t,void 0,l)},r)},this.fetchFileContentsBlob=function(t,r,i){var o=e.getDecryptionFunctionForRelativePath(t)
if(o){var a=r
r=function(e){o(e,function(e){a(e)})}}A(t,function(e){e.getBlob(n.identifyContentTypeFromFileName(t),r,void 0,l)},i)}}
return o}),define("readium_js/epub-fetch/content_document_fetcher",["jquery","underscore","URIjs","./discover_content_type"],function(e,t,n,r){var i=function(i,o,A,a,s){function c(e,t){var n=e.getElementsByTagName("base")[0]
if(!n){n=e.createElement("base")
var r=e.getElementsByTagName("head")[0]
r&&r.insertBefore(n,r.childNodes[0])}n.setAttribute("href",t)}function l(t,i,o,A,a,s,c){function l(n){e(t).attr("data-epubZipOrigHref",i),e(t).attr(o,n)}var u=new n(i)
if(""!==u.scheme())return void console.log("HTTP / absolute scheme res: "+i)
if(0==i.indexOf("/")){console.log("Absolute path res: "+i)
var d=window.location?window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""):""
return void l(d+i)}var f=E.convertPathRelativeToPackageToRelativeToBase(x),h="/"+new n(i).absoluteTo(f).toString(),p=S.getResourceURL(h)
if(p)l(p)
else{var g=e.Deferred()
a.push(g),E.relativeToPackageFetchFileContents(h,A,function(n){var i=function(n){if("text"===A){var i=r.identifyContentTypeFromFileName(h),o=e(t).attr("type")
o&&(i=o),n=new Blob([n],{type:i})}var a=window.URL.createObjectURL(n)
S.putResource(h,a,n),l(a),g.resolve()}
c?c(n,h,i):i(n)},function(){g.resolve(),s.apply(this,arguments)})}}function u(r,i,o,A,a){var s=r[0],c=r.slice(2),l=t.find(c,function(e){return"undefined"!=typeof e}),u=new n(l),f=""===u.scheme()
if(f){var h=E.convertPathRelativeToPackageToRelativeToBase(o)
"/"===h.charAt(0)&&(h=h.substr(1))
var p="/"+new n(l).absoluteTo(h).toString(),g=S.getResourceURL(p)
if(g)A[s]={isStyleSheetResource:a,resourceObjectURL:g}
else{var m=e.Deferred()
i.push(m)
var v,y,w=function(e){var t=window.URL.createObjectURL(e)
A[s]={isStyleSheetResource:a,resourceObjectURL:t},S.putResource(p,t,e),m.resolve()},B=function(e){m.resolve()}
a?(v="text",y=function(e){d(e,p,function(e){var t=new Blob([e],{type:"text/css"})
w(t)})}):(v="blob",y=w),E.relativeToPackageFetchFileContents(p,v,y,B)}}}function d(t,n,r){var i=/[Uu][Rr][Ll]\(\s*([']([^']+)[']|["]([^"]+)["]|([^)]+))\s*\)/g,o=/@[Ii][Mm][Pp][Oo][Rr][Tt]\s*('([^']+)'|"([^"]+)")/g,A={},a=[];[o,i].forEach(function(e){for(var r=e.exec(t);null!=r;){var i=!1
e==o&&(i=!0),u(r,a,n,A,i),r=e.exec(t)}}),a.length>0?e.when.apply(e,a).done(function(){for(var e in A){var n,i=A[e]
n=i.isStyleSheetResource?'@import "'+i.resourceObjectURL+'"':"url('"+i.resourceObjectURL+"')"
var o=e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),a=new RegExp(o,"g")
t=t.replace(a,n,"g")}r(t)}):r(t)}function f(t,n,r,i,o,A){var a=e(t+"["+n.replace(":","\\:")+"]",B)
a.each(function(t,a){var s=e(a).attr(n)
l(a,s,n,r,i,o,A)})}function h(e,t){f("img","src","blob",e,t),f("image","xlink:href","blob",e,t)}function p(e,t){f("audio","src","blob",e,t)}function g(e,t){f("video","src","blob",e,t),f("video","poster","blob",e,t)}function m(e,t){f("script","src","blob",e,t)}function v(e,t){f("link","href","text",e,t,d)}function y(t,n){var r=e("style",B)
r.each(function(n,r){var i=e.Deferred()
t.push(i)
var o=e(r).text()
d(o,x,function(t){e(r).text(t),i.resolve()})})}var w,B,b=this,x=o.href,E=i,C=o.media_type,S=a,I=s
this.fetchContentDocumentAndResolveDom=function(e,t){E.relativeToPackageFetchFileContents(x,"text",function(n){w=n,I&&(w=I(A,w)),b.resolveInternalPackageResources(e,t)},t)},this.resolveInternalPackageResources=function(t,n){B=E.markupParser.parseMarkup(w,C),c(B,A)
var r=[]
E.shouldFetchMediaAssetsProgrammatically()&&(console.log("fetchMediaAssetsProgrammatically ..."),h(r,n),p(r,n),g(r,n),f("object","data","blob",r,n)),m(r,n),v(r,n),y(r,n),e.when.apply(e,r).done(function(){console.log("DOM BLOB URi DONE: "+A),t(B)})}}
return i}),define("readium_js/epub-fetch/resource_cache",["underscore"],function(e){var t=function(t,n){function r(){return(new Date).getTime()}function i(){return window.performance&&window.performance.memory&&window.performance.memory.jsHeapSizeLimit?window.performance.memory.jsHeapSizeLimit:null}function o(){if(n)return n
var e=i()
return e&&e/10>u?e/10:u}function A(e){if("undefined"!=typeof e.orderingByLastUseTimestampIdx){var t=e.orderingByLastUseTimestampIdx
c.splice(t,1)
for(var n=t;n<c.length;n++){var r=c[n]
r.orderingByLastUseTimestampIdx-1!=n&&console.error("algorithm incorrect: downshiftedEntry.orderingByLastUseTimestampIdx: "+r.orderingByLastUseTimestampIdx+", i: "+n+" -- "+e.absoluteHref),r.orderingByLastUseTimestampIdx=n}}}function a(t){A(t)
var n=e.sortedIndex(c,t,"lastUseTimestamp")
c.splice(n,0,t),t.orderingByLastUseTimestampIdx=n}var s={},c=[],l=0,u=1e8,d=o()
this.getResourceURL=function(e){var t=null,n=s[e]
return n&&(t=n.url,n.lastUseTimestamp=r(),a(n)),t},this.putResource=function(e,t,n){this.trimCache()
var i=r(),o={url:t,absoluteHref:e,blob:n,blobSize:n.size,creationTimestamp:i,lastUseTimestamp:i,pinned:!0}
s[e]=o,a(o),l+=n.size},this.evictResource=function(e){var n=s[e]
n&&(t.URL.revokeObjectURL(n.url),l-=n.blobSize,A(n),delete s[e])},this.flushCache=function(){for(var e in s)this.evictResource(e)
0!=l&&(console.error("cacheSize accounting error! cacheSize: "+l+", _resourcesHash:"),console.error(s)),c=[]},this.unPinResources=function(){for(var e in s){var t=s[e]
t.pinned=!1}},this.trimCache=function(){if(!(d>l)){console.log("Trimming cache. Current cache size: "+l)
for(var e=0;e<c.length&&!(d>l);e++){var t=c[e]
if(!t.pinned){var n=t.absoluteHref
this.evictResource(n),e--}}console.log("Cache size after trimming: "+l)}}}
return t}),function(e,t){"object"==typeof exports?module.exports=exports=t():"function"==typeof define&&define.amd?define("cryptoJs/core",[],t):e.CryptoJS=t()}(this,function(){var e=e||function(e,t){var n={},r=n.lib={},i=r.Base=function(){function e(){}return{extend:function(t){e.prototype=this
var n=new e
return t&&n.mixIn(t),n.hasOwnProperty("init")||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var e=this.extend()
return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])
e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=i.extend({init:function(e,n){e=this.words=e||[],n!=t?this.sigBytes=n:this.sigBytes=4*e.length},toString:function(e){return(e||a).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes
if(this.clamp(),r%4)for(var o=0;i>o;o++){var A=n[o>>>2]>>>24-o%4*8&255
t[r+o>>>2]|=A<<24-(r+o)%4*8}else for(var o=0;i>o;o+=4)t[r+o>>>2]=n[o>>>2]
return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes
t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=i.clone.call(this)
return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],i=function(t){var t=t,n=987654321,r=4294967295
return function(){n=36969*(65535&n)+(n>>16)&r,t=18e3*(65535&t)+(t>>16)&r
var i=(n<<16)+t&r
return i/=4294967296,i+=.5,i*(e.random()>.5?1:-1)}},A=0;t>A;A+=4){var a=i(4294967296*(n||e.random()))
n=987654071*a(),r.push(4294967296*a()|0)}return new o.init(r,t)}}),A=n.enc={},a=A.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;n>i;i++){var o=t[i>>>2]>>>24-i%4*8&255
r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;t>r;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4
return new o.init(n,t/2)}},s=A.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;n>i;i++){var o=t[i>>>2]>>>24-i%4*8&255
r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;t>r;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8
return new o.init(n,t)}},c=A.Utf8={stringify:function(e){try{return decodeURIComponent(escape(s.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return s.parse(unescape(encodeURIComponent(e)))}},l=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=c.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,A=this.blockSize,a=4*A,s=i/a
s=t?e.ceil(s):e.max((0|s)-this._minBufferSize,0)
var c=s*A,l=e.min(4*c,i)
if(c){for(var u=0;c>u;u+=A)this._doProcessBlock(r,u)
var d=r.splice(0,c)
n.sigBytes-=l}return new o.init(d,l)},clone:function(){var e=i.clone.call(this)
return e._data=this._data.clone(),e},_minBufferSize:0}),u=(r.Hasher=l.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e)
var t=this._doFinalize()
return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new u.HMAC.init(e,n).finalize(t)}}}),n.algo={})
return n}(Math)
return e}),define("cryptoJs",["cryptoJs/core"],function(e){return e}),function(e,t){"object"==typeof exports?module.exports=exports=t(require("./core")):"function"==typeof define&&define.amd?define("cryptoJs/sha1",["./core"],t):t(e.CryptoJS)}(this,function(e){return function(){var t=e,n=t.lib,r=n.WordArray,i=n.Hasher,o=t.algo,A=[],a=o.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],c=0;80>c;c++){if(16>c)A[c]=0|e[t+c]
else{var l=A[c-3]^A[c-8]^A[c-14]^A[c-16]
A[c]=l<<1|l>>>31}var u=(r<<5|r>>>27)+s+A[c]
u+=20>c?(i&o|~i&a)+1518500249:40>c?(i^o^a)+1859775393:60>c?(i&o|i&a|o&a)-1894007588:(i^o^a)-899497514,s=a,a=o,o=i<<30|i>>>2,i=r,r=u}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+a|0,n[4]=n[4]+s|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes
return t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),t[(r+64>>>9<<4)+15]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this)
return e._hash=this._hash.clone(),e}})
t.SHA1=i._createHelper(a),t.HmacSHA1=i._createHmacHelper(a)}(),e.SHA1}),define("readium_js/epub-fetch/encryption_handler",["cryptoJs/sha1"],function(e){var t=function(e){function t(e,t){var n=new FileReader
n.onload=function(){var e=this.result
t(new Uint8Array(e))},n.readAsArrayBuffer(e)}function n(e,n,r,i){var o=e.slice(0,n)
t(o,function(t){for(var o=r.length,A=0;n>A;A++)t[A]=t[A]^r[A%o]
var a=new Blob([t],{type:e.type}),s=e.slice(n),c=new Blob([a,s],{type:e.type})
i(c)})}function r(t,r){var i=1040
n(t,i,e.uidHash,r)}function i(e){var t=/(urn:uuid:)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/i,n=t.exec(e),r=n[2]+n[3]+n[4]+n[5]+n[6]
r&&32==r.length||console.error("Bad UUID format for ID :"+e)
for(var i=[],o=0;16>o;o++){var A=r.substr(2*o,2),a=parseInt(A,16)
i.push(a)}return i}function o(t,r){var o=i(e.uid),A=1024
n(t,A,o,r)}var A=this,a={"http://www.idpf.org/2008/embedding":r,"http://ns.adobe.com/pdf/enc#RC":o}
this.isEncryptionSpecified=function(){return e&&e.encryptions},this.getEncryptionMethodForRelativePath=function(t){return A.isEncryptionSpecified()?e.encryptions[t]:void 0},this.getDecryptionFunctionForRelativePath=function(e){var t=A.getEncryptionMethodForRelativePath(e)
return t&&a[t]?a[t]:void 0}}
return t.CreateEncryptionData=function(t,n){for(var r=unescape(encodeURIComponent(t.trim())),i=e(r),o=[],A=0;A<i.sigBytes;A++)o.push(i.words[A>>>2]>>>24-A%4*8&255)
var a={uid:t,uidHash:o,encryptions:void 0},s=$("EncryptedData",n)
return s.each(function(e,t){var n=$("EncryptionMethod",t).first().attr("Algorithm"),r=$("CipherReference",t)
r.each(function(e,t){var r=$(t).attr("URI")
console.log("Encryption/obfuscation algorithm "+n+" specified for "+r),a.encryptions||(a.encryptions={}),a.encryptions[r]=n})}),a},t}),define("readium_js/epub-fetch/publication_fetcher",["jquery","URIjs","./markup_parser","./plain_resource_fetcher","./zip_resource_fetcher","./content_document_fetcher","./resource_cache","./encryption_handler","./discover_content_type","readium_shared_js/helpers"],function(e,t,n,r,i,o,A,a,s,c){var l=function(l,u,d,f,h,p){function g(){if(l instanceof Blob||l instanceof File)return!1
if(O&&(O.indexOf("application/epub+zip")>=0||O.indexOf("application/zip")>=0||O.indexOf("application/octet-stream")>=0))return!1
var e=l
try{e=new t(e).search("").hash("").toString()}catch(n){console.error(n),console.log(l)}return!/\.epub$/.test(e)}function m(e,t){e?(console.log(" --- using PlainResourceFetcher"),w=new r(v),t(w)):(console.log(" --- using ZipResourceFetcher"),w=new i(v,u),t(w))}var v=this
v.contentTypePackageReadStrategyMap={"application/oebps-package+xml":"exploded","application/epub+zip":"zipped","application/zip":"zipped"}
var y,w,B,b,x,E,C,S=new A(d,f),I=h,O=p
this.markupParser=new n,this.initialize=function(e){var t=g()
y=!t,console.log("_shouldConstructDomProgrammatically INIT: "+y),m(t,function(t){v.getPackageDom(function(){e(t)},function(t){console.error("unable to find package document: "+t),e(void 0)})})},this.shouldConstructDomProgrammatically=function(){return y},this.shouldFetchMediaAssetsProgrammatically=function(){var e=y&&!g()
return e},this.getEbookURL=function(){return l},this.getEbookURL_FilePath=function(){return c.getEbookUrlFilePath(l)},this.getJsLibRoot=function(){return u},this.flushCache=function(){S.flushCache()},this.getPackageUrl=function(){return x},this.getPackageFullPathRelativeToBase=function(){return b},this.fetchContentDocument=function(e,t,n,r){S.unPinResources()
var i=new o(v,e.spineItem,t,S,I)
i.fetchContentDocumentAndResolveDom(n,r)},this.getFileContentsFromPackage=function(e,t,n){b?v.relativeToPackageFetchFileContents(e,"text",function(e){t(e)},n):(console.debug("FETCHING (INIT) ... "+e),e&&"/"==e.charAt(0)&&(e=e.substr(1)),w.fetchFileContentsText(e,function(e){t(e)},n))},this.getXmlFileDom=function(e,t,n){v.getFileContentsFromPackage(e,function(e){var n=v.markupParser.parseXml(e)
t(n)},n)},this.getPackageFullPath=function(e,t){v.getXmlFileDom("/META-INF/container.xml",function(t){var n=v.getRootFile(t)
e(n)},t)},this.getRootFile=function(t){var n=e("rootfile",t),r=n.attr("full-path")
return r},this.getPackageDom=function(t,n){E?t(E):C?C.done(t):(C=e.Deferred(),C.done(t),v.getPackageFullPath(function(e){b=e,x=w.resolveURI(b),console.debug("PACKAGE: "),console.log(b),console.log(x),e&&"/"!=e.charAt(0)&&(e="/"+e),v.getXmlFileDom(e,function(e){E=e,C.resolve(e),C=void 0})},n))},this.convertPathRelativeToPackageToRelativeToBase=function(e){return new t(e).absoluteTo(b).toString()},this.relativeToPackageFetchFileContents=function(n,r,i,o){var A=decodeURIComponent(v.convertPathRelativeToPackageToRelativeToBase(n))
console.debug("FETCHING ... "+A),"/"===A.charAt(0)&&(A=A.substr(1))
var a=function(){var e=arguments?arguments.length&&arguments[0]instanceof Error?arguments[0]:arguments instanceof Error?arguments:void 0:void 0,t=0==A.indexOf("META-INF/com.apple.ibooks.display-options.xml")||0==A.indexOf("META-INF/encryption.xml")
console.log("MISSING: "+A),t||e&&(console.error(e),e.message&&console.debug(e.message),e.stack&&console.log(e.stack)),o&&o.apply(this,arguments)}
if(y&&""!==new t(n).scheme())if(console.log("shouldConstructDomProgrammatically EXTERNAL RESOURCE ..."),"blob"===r){var c=new XMLHttpRequest
c.open("GET",n,!0),c.responseType="arraybuffer",c.onerror=a,c.onload=function(e){var t=new Blob([c.response],{type:s.identifyContentTypeFromFileName(n)})
i(t)},c.send()}else"data64uri"===r?console.error("data64uri??"):e.ajax({isLocal:!1,url:n,dataType:"text",async:!0,success:function(e){i(e)},error:function(e,t,n){a(new Error(n))}})
else{var l=w.fetchFileContentsText
"blob"===r?l=w.fetchFileContentsBlob:"data64uri"===r&&(console.error("data64uri??"),l=w.fetchFileContentsData64Uri),l.call(w,A,i,a)}},this.getRelativeXmlFileDom=function(e,t,n){v.getXmlFileDom(v.convertPathRelativeToPackageToRelativeToBase(e),t,n)},this.setPackageMetadata=function(e,t){v.getXmlFileDom("/META-INF/encryption.xml",function(n){var r=a.CreateEncryptionData(e.id,n)
B=new a(r),B.isEncryptionSpecified()&&(y=!0,console.log("_shouldConstructDomProgrammatically ENCRYPTION ACTIVE: "+y)),t()},function(e){B=new a(void 0),t()})},this.getDecryptionFunctionForRelativePath=function(e){return B.getDecryptionFunctionForRelativePath(e)}}
return l}),define("readium_js/epub-model/package_document",["jquery","underscore","URIjs"],function(e,t,n){var r=function(t,r,i,o,A){function a(){var e=l(),t=e.href,n=t.substr(t.lastIndexOf(".")+1)
return"ncx"===n.trim().toLowerCase()}function s(t){var n=e("<ol></ol>")
return e.each(t.children("navPoint"),function(t,r){c(e(r),n)}),n}function c(t,n){var r=t.children("navLabel").text().trim(),i=t.children("content").attr("src"),o=e('<li class="nav-elem"></li>').append(e("<a></a>",{href:i,text:r}))
if(n.append(o),t.children("navPoint").length>0){var A=e("<li></li>"),a=e("<ol></ol>")
e.each(t.children("navPoint"),function(t,n){a.append(c(e(n),a))}),A.append(a),n.append(A)}}function l(){var e=A.getNavItem()
if(e)return e
var t=i.ncx
return t&&t.length>0?A.getManifestItemByIdref(t):null}var u
this.manifest=A,this.getSharedJsPackageData=function(){var e=t.substr(0,t.lastIndexOf("/"))
return{rootUrl:e,rendition_viewport:i.rendition_viewport,rendition_layout:i.rendition_layout,rendition_orientation:i.rendition_orientation,rendition_flow:i.rendition_flow,rendition_spread:i.rendition_spread,media_overlay:i.media_overlay,spine:{direction:this.getPageProgressionDirection(),items:o}}},this.getSpineItem=function(e){var t=o[e]
return t},this.setPageProgressionDirection=function(e){u=e},this.getPageProgressionDirection=function(){return"rtl"===u?"rtl":"default"===u?"default":"ltr"},this.spineLength=function(){return o.length},this.getMetadata=function(){return i},this.getToc=function(){var e=l()
return e?e.href:null},this.getTocText=function(e){var t=this.getToc()
return t?void r.relativeToPackageFetchFileContents(t,"text",function(t){e(t)},function(n){console.error("ERROR fetching TOC from ["+t+"]:"),console.error(n),e(void 0)}):(console.error("No TOC?!"),void e(void 0))},this.getTocDom=function(e){this.getTocText(function(t){if("string"==typeof t){var n=(new DOMParser).parseFromString(t,"text/xml")
e(n)}else e(void 0)})},this.generateTocListDOM=function(r){var i=this
this.getTocDom(function(o){if(o)if(a()){var A
A=s(e("navMap",o)),r(A[0])}else{var c=new n(t).absoluteTo(document.URL),l=new n(i.getToc()).absoluteTo(c),u=(e(o).remove("base"),e("<base></base>"))
e(u).attr("href",l),e(o).find("head").append(u),r(o)}else r(void 0)})}}
return r}),define("readium_js/epub-model/smil_document_parser",["jquery","underscore"],function(e,t){var n=function(t,r){function i(e){return{id:"",href:"",spineItemId:e.idref,children:[{nodeType:"seq",textref:e.href,children:[{nodeType:"par",children:[{nodeType:"text",src:e.href,srcFile:e.href,srcFragmentId:""}]}]}]}}this.parse=function(n,i,o,A,a,s){var c=this,l=r.convertPathRelativeToPackageToRelativeToBase(i.href)
"/"!=l.charAt(0)&&(l="/"+l),r.getXmlFileDom(l,function(r){var s=e("smil",r)[0]
o.smilVersion=s.getAttribute("version"),o.children=c.getChildren(s),o.href=i.href,o.id=i.id,o.spineItemId=n.idref
var l=t.getMetadata().getMediaItemByRefinesId(i.id)
l&&(o.duration=l.duration),a(A,o)},function(e){s(A,e)})}
var o=function(e,t,n,r,i){var o=e.split(":"),A=o[o.length-1]
"type"===A&&(A="epubtype"),void 0!=t.getAttribute(e)?n[A]=t.getAttribute(e):r&&(void 0!==i?n[A]=i:console.log("Required property "+e+" not found in smil node "+t.nodeName))}
this.getChildren=function(t){var n=this,r=[]
return e.each(t.childNodes,function(e,t){if(1===t.nodeType){var i=n.createItemFromElement(t)
i&&r.push(i)}}),r},this.createItemFromElement=function(e){var t=this,r={}
r.nodeType=e.nodeName
var i=!1
if("body"===r.nodeType&&(i=!0,r.nodeType="seq"),"seq"===r.nodeType)o("epub:textref",e,r,!i),o("id",e,r),o("epub:type",e,r),r.children=t.getChildren(e)
else if("par"===r.nodeType)o("id",e,r),o("epub:type",e,r),r.children=t.getChildren(e)
else if("text"===r.nodeType){o("src",e,r,!0)
var A=r.src.split("#")
r.srcFile=A[0],r.srcFragmentId=2===A.length?A[1]:"",o("id",e,r)}else{if("audio"!==r.nodeType)return
o("src",e,r,!0),o("id",e,r),r.clipBegin=n.resolveClockValue(e.getAttribute("clipBegin")),r.clipEnd=n.resolveClockValue(e.getAttribute("clipEnd"))}return r},this.fillSmilData=function(n){var r=this
if(t.spineLength()<=0)return void n()
for(var o=!0,A=[],a=[],s=0;s<t.spineLength();s++){var c=t.getSpineItem(s)
if(c.media_overlay_id){var l=t.manifest.getManifestItemByIdref(c.media_overlay_id)
if(!l){console.error("Cannot find SMIL manifest item for spine/manifest item?! "+c.media_overlay_id)
continue}var u=e.Deferred()
u.media_overlay_id=c.media_overlay_id,a.push(u)
var d={}
A.push(d),r.parse(c,l,d,u,function(e,t){o=!1,e.resolve()},function(e,t){console.log("Error when parsing SMIL manifest item "+l.href+":"),console.log(t),e.resolve()})}else A.push(i(c))}e.when.apply(e,a).done(function(){t.getMetadata().setMoMap(A),o&&t.getMetadata().setMoMap([]),n()})}}
return n.resolveClockValue=function(e){if(!e)return 0
var t=0,n=0,r=0
if(-1!=e.indexOf("min"))n=parseFloat(e.substr(0,e.indexOf("min")))
else if(-1!=e.indexOf("ms")){var i=parseFloat(e.substr(0,e.indexOf("ms")))
r=i/1e3}else if(-1!=e.indexOf("s"))r=parseFloat(e.substr(0,e.indexOf("s")))
else if(-1!=e.indexOf("h"))t=parseFloat(e.substr(0,e.indexOf("h")))
else{var o=e.split(":")
r=parseFloat(o.pop()),o.length>0&&(n=parseFloat(o.pop()),o.length>0&&(t=parseFloat(o.pop())))}var A=3600*t+60*n+r
return A},n}),define("readium_js/epub-model/metadata",["underscore"],function(e){var t=function(){var t=this,n={}
this.eachMediaItem=function(n){return t.mediaItems&&e.each(t.mediaItems,n),this},this.getMediaItemByRefinesId=function(e){return n[e]},this.setMoMap=function(e){t.media_overlay.smil_models=e},this.eachMediaItem(function(e){var t=e.refines,r=t.indexOf("#")
if(r>=0){var i=r+1,o=t.length-1
t=t.substr(i,o)}t=t.trim(),n[t]=e})}
return t}),define("readium_js/epub-model/manifest",["underscore"],function(e){var t=function(t){var n,r={}
this.manifestLength=function(){return t.length},this.getManifestItemByIdref=function(e){return r[e]},this.each=function(n){return e.each(t,n),this},this.getNavItem=function(){return n},this.each(function(e){r[e.id]=e,e.properties&&-1!==e.properties.indexOf("nav")&&(n=e)})}
return t}),define("readium_js/epub-model/package_document_parser",["jquery","underscore","../epub-fetch/markup_parser","URIjs","./package_document","./smil_document_parser","./metadata","./manifest"],function(e,t,n,r,i,o,A,a){var s=function(r){function s(e,t){var n=new o(e,r)
n.fillSmilData(function(){t(e)})}function c(t){var i=e.Deferred()
if(t.rendition_layout)i.resolve()
else{var o="/META-INF/com.apple.ibooks.display-options.xml"
r.relativeToPackageFetchFileContents(o,"text",function(r){if(r){var o=new n,A=o.parseXml(r),a=e("option[name=fixed-layout]",A)[0]
if(a){var s=e(a).text()
"true"===s&&(t.rendition_layout="pre-paginated",console.log("using com.apple.ibooks.display-options.xml fixed-layout property"))}}i.resolve()},function(e){i.resolve()})}return i.promise()}function l(n,r,i){var o,A=[]
return o=e(u(n,"spine")).children(),e.each(o,function(n,o){var a=e(o),s=a.attr("idref")?a.attr("idref"):"",c=r.getManifestItemByIdref(s),l=a.attr("id"),u=void 0
t.each(i.rendition_viewports,function(e){return e.refines==l?(u=e.viewport,!0):void 0})
var d={rendition_viewport:u,idref:s,href:c.href,manifest_id:c.id,media_type:c.media_type,media_overlay_id:c.media_overlay_id,linear:a.attr("linear")?a.attr("linear"):"",properties:a.attr("properties")?a.attr("properties"):""},f=w(d.properties)
e.extend(d,f),A.push(d)}),A}function u(e,n,r){var i=e.getElementsByTagNameNS("*",n)
return r?t.find(i,r):i[0]}function d(e,n,r){var i=e.getElementsByTagNameNS("*",n)
return t.filter(i,r)}function f(e,t,n){var r=u(e,t,n)
return r?r.textContent:""}function h(e,t,n,r){var i=u(e,t,r)
return i?i.getAttribute(n):""}function p(e,t){var n=u(e,"meta",function(e){return e.getAttribute("property")===t})
return n?n.textContent:""}function g(e){var n=new A,r=u(e,"metadata"),i=u(e,"package"),a=u(e,"spine")
n.author=f(r,"creator"),n.description=f(r,"description"),n.epub_version=i.getAttribute("version")?i.getAttribute("version"):"",n.id=f(r,"identifier"),n.language=f(r,"language"),n.modified_date=p(r,"dcterms:modified"),n.ncx=a.getAttribute("toc")?a.getAttribute("toc"):"",n.pubdate=f(r,"date"),n.publisher=f(r,"publisher"),n.rights=f(r,"rights"),n.title=f(r,"title"),n.rendition_orientation=p(r,"rendition:orientation"),n.rendition_layout=p(r,"rendition:layout"),n.rendition_spread=p(r,"rendition:spread"),n.rendition_flow=p(r,"rendition:flow"),n.rendition_viewport=f(r,"meta",function(e){return"rendition:viewport"===e.getAttribute("property")&&!e.hasAttribute("refines")})
var s=[],c=d(r,"meta",function(e){return"rendition:viewport"===e.getAttribute("property")&&e.hasAttribute("refines")})
t.each(c,function(e){var t=e.getAttribute("refines")
if(t){var n=t.indexOf("#")
if(n>=0){var r=n+1,i=t.length-1
t=t.substr(r,i)}t=t.trim()}var o={refines:t,viewport:e.textContent}
s.push(o)}),n.rendition_viewports=s,n.mediaItems=[]
var l=d(r,"meta",function(e){return"media:duration"===e.getAttribute("property")&&e.hasAttribute("refines")})
return t.each(l,function(e){n.mediaItems.push({refines:e.getAttribute("refines"),duration:o.resolveClockValue(e.textContent)})}),n.media_overlay={duration:o.resolveClockValue(f(r,"meta",function(e){return"media:duration"===e.getAttribute("property")&&!e.hasAttribute("refines")})),narrator:p(r,"media:narrator"),activeClass:p(r,"media:active-class"),playbackActiveClass:p(r,"media:playback-active-class"),smil_models:[],skippables:["sidebar","practice","marginalia","annotation","help","note","footnote","rearnote","table","table-row","table-cell","list","list-item","pagebreak"],escapables:["sidebar","bibliography","toc","loi","appendix","landmarks","lot","index","colophon","epigraph","conclusion","afterword","warning","epilogue","foreword","introduction","prologue","preface","preamble","notice","errata","copyright-page","acknowledgments","other-credits","titlepage","imprimatur","contributors","halftitlepage","dedication","help","annotation","marginalia","practice","note","footnote","rearnote","footnotes","rearnotes","bridgehead","page-list","table","table-row","table-cell","list","list-item","glossary"]},n}function m(t){var n=e(u(t,"manifest")).children(),r=[]
return e.each(n,function(t,n){var i=e(n),o=i.attr("href")?i.attr("href"):"",A={href:o,id:i.attr("id")?i.attr("id"):"",media_overlay_id:i.attr("media-overlay")?i.attr("media-overlay"):"",media_type:i.attr("media-type")?i.attr("media-type"):"",properties:i.attr("properties")?i.attr("properties"):""}
r.push(A)}),r}function v(t){var n=e(u(t,"bindings")).children(),r=[]
return e.each(n,function(t,n){var i=e(n),o={handler:i.attr("handler")?i.attr("handler"):"",media_type:i.attr("media-type")?i.attr("media-type"):""}
r.push(o)}),r}function y(n){var r,i
if(r=u(n,"manifest"),i=e(u(r,"item",function(e){var n=e.getAttribute("properties")
return n&&t.contains(n.split(" "),"cover-image")})),1===i.length&&i.attr("href"))return i.attr("href")
var o=e(u(n,"meta",function(e){return"cover"===e.getAttribute("name")})),A=o.attr("content")
return 1===o.length&&A&&(i=e(u(r,"item",function(e){return e.getAttribute("id")===A})),1===i.length&&i.attr("href"))?i.attr("href"):(i=e(u(r,"item",function(e){return"cover"===e.getAttribute("id")})),1===i.length&&i.attr("href")?i.attr("href"):null)}function w(e){for(var t={},n=e.split(" "),r=0;r<n.length;r++)"rendition:orientation-landscape"===n[r]&&(t.rendition_orientation="landscape"),"rendition:orientation-portrait"===n[r]&&(t.rendition_orientation="portrait"),"rendition:orientation-auto"===n[r]&&(t.rendition_orientation="auto"),"rendition:spread-none"===n[r]&&(t.rendition_spread="none"),"rendition:spread-landscape"===n[r]&&(t.rendition_spread="landscape"),"rendition:spread-portrait"===n[r]&&(t.rendition_spread="portrait"),"rendition:spread-both"===n[r]&&(t.rendition_spread="both"),"rendition:spread-auto"===n[r]&&(t.rendition_spread="auto"),"rendition:flow-paginated"===n[r]&&(t.rendition_flow="paginated"),"rendition:flow-scrolled-continuous"===n[r]&&(t.rendition_flow="scrolled-continuous"),"rendition:flow-scrolled-doc"===n[r]&&(t.rendition_flow="scrolled-doc"),"rendition:flow-auto"===n[r]&&(t.rendition_flow="auto"),"rendition:page-spread-center"===n[r]&&(t.page_spread="page-spread-center"),"page-spread-left"===n[r]&&(t.page_spread="page-spread-left"),"page-spread-right"===n[r]&&(t.page_spread="page-spread-right"),"rendition:layout-reflowable"===n[r]&&(t.fixed_flow=!1,t.rendition_layout="reflowable"),"rendition:layout-pre-paginated"===n[r]&&(t.fixed_flow=!0,t.rendition_layout="pre-paginated")
return t}var B,b=r,x=e.Deferred()
r.getPackageDom(function(e){B=e,x.resolve(e)},function(){x.resolve(void 0)}),this.parse=function(t){x.done(function(n){if(!n)return void t(void 0)
var o=g(n),A=(n.getElementsByTagNameNS("*","spine")[0],h(n,"spine","page-progression-direction")),u=(v(n),new a(m(n))),d=l(n,u,o),f=y(n)
f&&(o.cover_href=f),e.when(c(o)).then(function(){b.setPackageMetadata(o,function(){var e=new i(r.getPackageUrl(),r,o,d,u)
e.setPageProgressionDirection(A),s(e,t)})})})}}
return s}),define("readium_js/epub-fetch/iframe_zip_loader",["URIjs","readium_shared_js/views/iframe_loader","underscore","./discover_content_type"],function(e,t,n,r){var i=function(o,A){function a(e,t){$.ajax({url:e,dataType:"html",async:!0,success:function(e){t(e)},error:function(n,r,i){console.error("Error when AJAX fetching "+e),console.error(r),console.error(i),t()}})}function s(e,t){a(e,function(n){if(!n)return void t()
var r=$("<html>"+n.substring(n.indexOf("<body")))
wholepages.push([r.text().trim(),r.find("img").attr("src")]),d&&(n=d(e,n)),t(n)})}var c=window.navigator.userAgent.indexOf("Trident")>0||window.navigator.userAgent.indexOf("Edge")>0,l=new t,u=this,d=A
this.addIFrameEventListener=function(e,t,n){l.addIFrameEventListener(e,t,n)},this.updateIframeEvents=function(e){l.updateIframeEvents(e)},this.loadIframe=function(t,n,r,i,A){t.baseURI||(c&&t.ownerDocument.defaultView.frameElement?(t.baseURI=t.ownerDocument.defaultView.frameElement.getAttribute("data-loadUri"),console.log("EPUB doc iframe src (BEFORE):"),console.log(n),n=new e(n).absoluteTo(t.baseURI).search("").hash("").toString()):"undefined"!=typeof location&&(t.baseURI=location.href+""),console.error("!iframe.baseURI => "+t.baseURI)),console.log("EPUB doc iframe src:"),console.log(n),t.setAttribute("data-src",n),console.log("EPUB doc iframe base URI:"),console.log(t.baseURI),t.setAttribute("data-baseUri",t.baseURI)
var a=new e(n).absoluteTo(t.baseURI).search("").hash("").toString()
console.log("EPUB doc iframe LOAD URI:"),console.log(a),t.setAttribute("data-loadUri",a)
var l=o().shouldConstructDomProgrammatically()
l?o().fetchContentDocument(A,a,function(e){var n=$(e)
wholepages.push([n.find("body").text(),n.find("img").attr("src")]),u._loadIframeWithDocument(t,A,e.documentElement.outerHTML,function(){r.call(i,!0,A)})},function(e){r.call(i,!1,A)}):s(a,function(e){e?u._loadIframeWithDocument(t,A,e,function(){r.call(i,!0,A)}):r.call(i,!1,A)})},this._loadIframeWithDocument=function(t,a,s,l){if(c)t.contentWindow.document.open(),window.MSApp&&window.MSApp.execUnsafeLocalFunction?window.MSApp.execUnsafeLocalFunction(function(){t.contentWindow.document.write(s)}):t.contentWindow.document.write(s)
else{var d="text/html"
a.spineItem.media_type&&a.spineItem.media_type.length&&(d=a.spineItem.media_type)
var f=window.URL.createObjectURL(new Blob([s],{type:d}))}t.onload=function(){var s=t.contentDocument||t.contentWindow.document
if(t.contentWindow.frames)for(var d=0;d<t.contentWindow.frames.length;d++){var h=t.contentWindow.frames[d],p=h.frameElement.getAttribute("data-src")
if(p){var g=a.spineItem.href,m=o(),v=m.convertPathRelativeToPackageToRelativeToBase(g),y=new e(p).absoluteTo(v).toString(),w=m.getPackageFullPathRelativeToBase(),B=new e("/"+y).relativeTo("/"+w).toString(),b=r.identifyContentTypeFromFileName(B),x=new i(o,A)
x.loadIframe(h.frameElement,p,function(){console.log("CHILD IFRAME LOADED.")},u,{spineItem:{media_type:b,href:B}})}else"iframe"==h.frameElement.localName&&console.error("IFRAME data-src missing?!")}$("svg",s).load(function(){console.log("SVG loaded")}),u.updateIframeEvents(t)
var E=t.contentWindow.MathJax
if(E){E.Hub.Config({SVG:{useFontCache:!E.Hub.Browser.isFirefox}})
var C=n.once(l)
try{E.Hub.Queue(C)}catch(S){console.error("MathJax fail!"),l()}}else l()
c||window.URL.revokeObjectURL(f)},c?t.contentWindow.document.close():t.setAttribute("src",f)}}
return i}),define("readium_js/Readium",["text!version.json","jquery","underscore","readium_shared_js/views/reader_view","readium_js/epub-fetch/publication_fetcher","readium_js/epub-model/package_document_parser","readium_js/epub-fetch/iframe_zip_loader","readium_shared_js/views/iframe_loader"],function(e,t,n,r,i,o,A,a){var s=!1,c=function(e,n){var s,c={mathJaxUrl:n.mathJaxUrl},l=function(e,t){function n(){navigator.epubReadingSystem=window.parent.navigator.epubReadingSystem}var r=e.split("/"),i=r.join("/")
console.log("EPUB doc base href:"),console.log(i)
var o='<base href="'+i+'"/>',A='<script type="text/javascript">('+n.toString()+")()</script>"
return c&&c.mathJaxUrl&&t.search(/<(\w+:|)(?=math)/)>=0&&(A+='<script type="text/javascript" src="'+c.mathJaxUrl+'"> </script>'),t=t.replace(/(<head[\s\S]*?>)/,"$1"+o+A),t=t.replace(/(<iframe[\s\S]+?)src[\s\S]*?=[\s\S]*?(["'])([^"']+?)(["'])([\s\S]*?>)/g,"$1data-src=$2$3$4$5")},u=this,d=e.jsLibRoot
e.useSimpleLoader?n.iframeLoader=new a:n.iframeLoader=new A(function(){return s},l),n.needsFixedLayoutScalerWorkAround=!0,this.reader=new r(n),ReadiumSDK.reader=this.reader
var f=function(n,r,A,a){s&&s.flushCache()
var c=null
e.cacheSizeEvictThreshold&&(c=e.cacheSizeEvictThreshold),s=new i(n,d,window,c,l,a),s.initialize(function(n){if(!n)return void r(void 0)
var i=new o(s)
i.parse(function(n){if(!n)return void r(void 0)
var i=e.openBookOptions||{},o=t.extend(n.getSharedJsPackageData(),i)
A&&(o.openPageRequest=A),u.reader.openBook(o)
var a={metadata:n.getMetadata()}
r(n,a)})})}
this.openPackageDocument=function(e,t,n){if(!(e instanceof Blob||e instanceof File)){console.debug("-------------------------------")
var r=window.location.origin
r||(r=window.location.protocol+"//"+window.location.host)
var i=r+window.location.pathname
console.debug("BASE URL: "+i),console.debug("RELATIVE URL: "+e)
try{e=new URI(e).absoluteTo(i).toString()}catch(o){console.error(o),console.log(e)}if(console.debug("==>"),console.debug("ABSOLUTE URL: "+e),console.debug("-------------------------------"),0==e.indexOf("http://")||0==e.indexOf("https://")){var A=new XMLHttpRequest
return A.onreadystatechange=function(){if(4==this.readyState){var r=void 0,i=A.status>=200&&A.status<300||304===A.status
if(i){var o=""
A.getAllResponseHeaders&&(o=A.getAllResponseHeaders(),o=o?o.toLowerCase():""),o.indexOf("content-type")>=0&&(r=A.getResponseHeader("Content-Type")||A.getResponseHeader("content-type"),r||(r=void 0),console.debug("CONTENT-TYPE: "+e+" ==> "+r))
var a=A.responseURL
a||o.indexOf("location")>=0&&(a=A.getResponseHeader("Location")||A.getResponseHeader("location")),a&&a!==e&&(console.debug("REDIRECT: "+e+" ==> "+a),e=a)}f(e,t,n,r)}},A.open("HEAD",e,!0),void A.send(null)}}f(e,t,n)},this.closePackageDocument=function(){s&&s.flushCache()},ReadiumSDK.emit(ReadiumSDK.Events.READER_INITIALIZED,ReadiumSDK.reader)}
return c.version=JSON.parse(e),c.getVersion=function(e){var n=c.version
if(n.needsPopulating){s&&console.log("version.json needsPopulating ...")
var r=function(i){if(i>=n.repos.length)return delete n.needsPopulating,delete n.repos,s&&(console.log("version"),console.debug(n)),c.version=n,void e(n)
var o=n.repos[i]
s&&(console.log("##########################"),console.log("repo.name"),console.debug(o.name),console.log("repo.path"),console.debug(o.path)),n[o.name]={},n[o.name].timestamp=(new Date).getTime(),t.getJSON(o.path+"/package.json",function(e){s&&(console.log("version"),console.debug(e.version)),n[o.name].version=e.version,n[o.name].chromeVersion="2."+e.version.substring(2)
var A=function(e,o,A){var a=e+"/"+A
s&&(console.log("getRef"),console.debug(a)),t.get(a,function(e){n[o.name].branch=A
var t=e.substring(0,e.length-1)
n[o.name].sha=t,s&&(console.log("getRef OKAY"),console.debug(a),console.log(e),console.log("branch"),console.debug(A),console.log("sha"),console.debug(t)),r(++i)}).fail(function(e){s&&(console.log("getRef ERROR"),console.debug(a)),r(++i)})},a=function(e){var n=e.path+"/.git"
s&&(console.log("getGit"),console.debug(n)),t.get(n,function(t){if(s&&(console.log("getGit OKAY"),console.debug(n),console.log(t)),0==t.indexOf("gitdir: ")){var o=e.path+"/"+t.substring("gitdir: ".length).trim()
s&&(console.log("gitdir: OKAY"),console.log(o)),c(o,e)}else s&&console.log("gitdir: ERROR"),r(++i)}).fail(function(e){s&&(console.log("getGit ERROR"),console.debug(n)),r(++i)})},c=function(e,n,o){var c=e+"/HEAD"
s&&(console.log("getHead"),console.debug(c)),t.get(c,function(t){s&&(console.log("getHead OKAY"),console.debug(c),console.log(t))
var r=t.substring(5,t.length-1)
A(e,n,r)}).fail(function(e){s&&(console.log("getHead ERROR"),console.debug(c)),o?a(n):(s&&console.log("getHead ABORT"),r(++i))})}
c(o.path+"/.git",o,!0)}).fail(function(e){r(++i)})}
r(0)}else e(n)},c}),define("readium_js",["readium_js/Readium"],function(e){return e}),require(["readium_cfi_js/cfi_API","readium_shared_js/globalsSetup"])
