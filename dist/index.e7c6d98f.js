var e,t,r,n,o,i,a,s,c,u,l,d,f,p,h,g,v,m,y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire041d;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire041d=k);var E={},S={},O=function(e){return e&&e.Math==Math&&e};S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||O("object"==typeof self&&self)||O("object"==typeof y&&y)||function(){return this}()||S||Function("return this")();var L={},$={};L=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},T={};T=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});"use strict";var F=Function.prototype.call;j=T?F.bind(F):function(){return F.apply(F,arguments)};var M={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;t=x&&!M.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:M;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},q={},H={},N=Function.prototype,A=N.call,D=T&&N.bind.bind(A,A),C={},R=(H=T?D:function(e){return function(){return A.apply(e,arguments)}})({}.toString),W=H("".slice);C=function(e){return W(R(e),8,-1)};var z=Object,U=H("".split);q=$(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"==C(e)?U(e,""):z(e)}:z;var G={},B={};B=function(e){return null==e};var J=TypeError;G=function(e){if(B(e))throw J("Can't call method on "+e);return e},I=function(e){return q(G(e))};var Y={},Q={},V={},K={},X={},Z="object"==typeof document&&document.all,ee=(X={all:Z,IS_HTMLDDA:void 0===Z&&void 0!==Z}).all;K=X.IS_HTMLDDA?function(e){return"function"==typeof e||e===ee}:function(e){return"function"==typeof e};var et=X.all;V=X.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:K(e)||e===et}:function(e){return"object"==typeof e?null!==e:K(e)};var er={},en={};en=function(e,t){var r;return arguments.length<2?K(r=S[e])?r:void 0:S[e]&&S[e][t]};var eo={};eo=H({}.isPrototypeOf);var ei={},ea={},es={},ec={};ec="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eu=S.process,el=S.Deno,ed=eu&&eu.versions||el&&el.version,ef=ed&&ed.v8;ef&&(n=(r=ef.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&ec&&(!(r=ec.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=ec.match(/Chrome\/(\d+)/))&&(n=+r[1]),es=n;var ep=S.String;ei=(ea=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol();return!ep(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&es&&es<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;er=ei?function(e){return"symbol"==typeof e}:function(e){var t=en("Symbol");return K(t)&&eo(t.prototype,eh(e))};var eg={},ev={},em={},ey=String;em=function(e){try{return ey(e)}catch(e){return"Object"}};var eb=TypeError;ev=function(e){if(K(e))return e;throw eb(em(e)+" is not a function")},eg=function(e,t){var r=e[t];return B(r)?void 0:ev(r)};var e_={},ew=TypeError;e_=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!V(n=j(r,e))||K(r=e.valueOf)&&!V(n=j(r,e))||"string"!==t&&K(r=e.toString)&&!V(n=j(r,e)))return n;throw ew("Can't convert object to primitive value")};var ek={},eE={};eE=!1;var eS={},eO={},eL=Object.defineProperty;eO=function(e,t){try{eL(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var e$="__core-js_shared__";eS=S[e$]||eO(e$,{}),(ek=function(e,t){return eS[e]||(eS[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.0",mode:eE?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ej={},eT={},eF=Object;eT=function(e){return eF(G(e))};var eM=H({}.hasOwnProperty);ej=Object.hasOwn||function(e,t){return eM(eT(e),t)};var ex={},eP=0,eI=Math.random(),eq=H(1..toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eP+eI,36)};var eH=S.Symbol,eN=ek("wks"),eA=ei?eH.for||eH:eH&&eH.withoutSetter||ex,eD=TypeError,eC=function(e){return ej(eN,e)||(eN[e]=ea&&ej(eH,e)?eH[e]:eA("Symbol."+e)),eN[e]}("toPrimitive");Q=function(e,t){if(!V(e)||er(e))return e;var r,n=eg(e,eC);if(n){if(void 0===t&&(t="default"),!V(r=j(n,e,t))||er(r))return r;throw eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),e_(e,t)},Y=function(e){var t=Q(e,"string");return er(t)?t:t+""};var eR={},eW={},ez=S.document,eU=V(ez)&&V(ez.createElement);eW=function(e){return eU?ez.createElement(e):{}},eR=!L&&!$(function(){return 7!=Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;e=L?eG:function(e,r){if(e=I(e),r=Y(r),eR)try{return eG(e,r)}catch(e){}if(ej(e,r))return P(!j(t,e,r),e[r])};var eB={},eJ={};eJ=L&&$(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eQ=String,eV=TypeError;eY=function(e){if(V(e))return e;throw eV(eQ(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";o=L?eJ?function(e,t,r){if(eY(e),t=Y(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eY(e),t=Y(t),eY(r),eR)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=L?function(e,t,r){return o(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e3={},e9=Function.prototype,e7=L&&Object.getOwnPropertyDescriptor,e8=ej(e9,"name")&&(!L||L&&e7(e9,"name").configurable),e5={},e6=H(Function.toString);K(eS.inspectSource)||(eS.inspectSource=function(e){return e6(e)}),e5=eS.inspectSource;var te={},tt={},tr=S.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},to=ek("keys");tn=function(e){return to[e]||(to[e]=ex(e))};var ti={};ti={};var ta="Object already initialized",ts=S.TypeError,tc=S.WeakMap;if(tt||eS.state){var tu=eS.state||(eS.state=new tc);tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,i=function(e,t){if(tu.has(e))throw ts(ta);return t.facade=e,tu.set(e,t),t},a=function(e){return tu.get(e)||{}},s=function(e){return tu.has(e)}}else{var tl=tn("state");ti[tl]=!0,i=function(e,t){if(ej(e,tl))throw ts(ta);return t.facade=e,eB(e,tl,t),t},a=function(e){return ej(e,tl)?e[tl]:{}},s=function(e){return ej(e,tl)}}var tf=(te={set:i,get:a,has:s,enforce:function(e){return s(e)?a(e):i(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=a(t)).type!==e)throw ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=te.get,th=String,tg=Object.defineProperty,tv=H("".slice),tm=H("".replace),ty=H([].join),tb=L&&!$(function(){return 8!==tg(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e3=function(e,t,r){"Symbol("===tv(th(t),0,7)&&(t="["+tm(th(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ej(e,"name")||e8&&e.name!==t)&&(L?tg(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&ej(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&ej(r,"constructor")&&r.constructor?L&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return ej(n,"source")||(n.source=ty(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return K(this)&&tp(this).source||e5(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(K(r)&&e3(r,a,n),n.global)i?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},tO={},tL={},t$={},tj=Math.ceil,tT=Math.floor;t$=Math.trunc||function(e){var t=+e;return(t>0?tT:tj)(t)},tL=function(e){var t=+e;return t!=t||0===t?0:t$(t)};var tF=Math.max,tM=Math.min;tO=function(e,t){var r=tL(e);return r<0?tF(r+t,0):tM(r,t)};var tx={},tP={},tI=Math.min;tP=function(e){return e>0?tI(tL(e),9007199254740991):0},tx=function(e){return tP(e.length)};var tq=function(e){return function(t,r,n){var o,i=I(t),a=tx(i),s=tO(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tH={includes:tq(!0),indexOf:tq(!1)}.indexOf,tN=H([].push);tS=function(e,t){var r,n=I(e),o=0,i=[];for(r in n)!ej(ti,r)&&ej(n,r)&&tN(i,r);for(;t.length>o;)ej(n,r=t[o++])&&(~tH(i,r)||tN(i,r));return i};var tA=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return tS(e,tA)},u=Object.getOwnPropertySymbols;var tD=H([].concat);tE=en("Reflect","ownKeys")||function(e){var t=c(eY(e));return u?tD(t,u(e)):t},tk=function(t,r,n){for(var i=tE(r),a=0;a<i.length;a++){var s=i[a];ej(t,s)||n&&ej(n,s)||o(t,s,e(r,s))}};var tC={},tR=/#|\.prototype\./,tW=function(e,t){var r=tU[tz(e)];return r==tB||r!=tG&&(K(t)?$(t):!!t)},tz=tW.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tU=tW.data={},tG=tW.NATIVE="N",tB=tW.POLYFILL="P";tC=tW,E=function(t,r){var n,o,i,a,s,c=t.target,u=t.global,l=t.stat;if(n=u?S:l?S[c]||eO(c,{}):(S[c]||{}).prototype)for(o in r){if(a=r[o],i=t.dontCallGetSet?(s=e(n,o))&&s.value:n[o],!tC(u?o:c+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;tk(a,i)}(t.sham||i&&i.sham)&&eB(a,"sham",!0),e4(n,o,a,t)}};var tJ={},tY={},tQ=Function.prototype,tV=tQ.apply,tK=tQ.call;tY="object"==typeof Reflect&&Reflect.apply||(T?tK.bind(tV):function(){return tK.apply(tV,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===C(e))return H(e)})(tZ.bind);tX=function(e,t){return ev(e),void 0===t?e:T?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=en("document","documentElement");var t2={};t2=H([].slice);var t4={},t3=TypeError;t4=function(e,t){if(e<t)throw t3("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(ec);var t7={},t8={},t5=t8={};function t6(){throw Error("setTimeout has not been defined")}function re(){throw Error("clearTimeout has not been defined")}function rt(e){if(l===setTimeout)return setTimeout(e,0);if((l===t6||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:t6}catch(e){l=t6}try{d="function"==typeof clearTimeout?clearTimeout:re}catch(e){d=re}}();var rr=[],rn=!1,ro=-1;function ri(){rn&&f&&(rn=!1,f.length?rr=f.concat(rr):ro=-1,rr.length&&ra())}function ra(){if(!rn){var e=rt(ri);rn=!0;for(var t=rr.length;t;){for(f=rr,rr=[];++ro<t;)f&&f[ro].run();ro=-1,t=rr.length}f=null,rn=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===re||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function rs(e,t){this.fun=e,this.array=t}function rc(){}t5.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];rr.push(new rs(e,t)),1!==rr.length||rn||rt(ra)},rs.prototype.run=function(){this.fun.apply(null,this.array)},t5.title="browser",t5.browser=!0,t5.env={},t5.argv=[],t5.version="",t5.versions={},t5.on=rc,t5.addListener=rc,t5.once=rc,t5.off=rc,t5.removeListener=rc,t5.removeAllListeners=rc,t5.emit=rc,t5.prependListener=rc,t5.prependOnceListener=rc,t5.listeners=function(e){return[]},t5.binding=function(e){throw Error("process.binding is not supported")},t5.cwd=function(){return"/"},t5.chdir=function(e){throw Error("process.chdir is not supported")},t5.umask=function(){return 0},t7=void 0!==t8&&"process"==C(t8);var ru=S.setImmediate,rl=S.clearImmediate,rd=S.process,rf=S.Dispatch,rp=S.Function,rh=S.MessageChannel,rg=S.String,rv=0,rm={},ry="onreadystatechange";$(function(){p=S.location});var rb=function(e){if(ej(rm,e)){var t=rm[e];delete rm[e],t()}},r_=function(e){return function(){rb(e)}},rw=function(e){rb(e.data)},rk=function(e){S.postMessage(rg(e),p.protocol+"//"+p.host)};ru&&rl||(ru=function(e){t4(arguments.length,1);var t=K(e)?e:rp(e),r=t2(arguments,1);return rm[++rv]=function(){tY(t,void 0,r)},h(rv),rv},rl=function(e){delete rm[e]},t7?h=function(e){rd.nextTick(r_(e))}:rf&&rf.now?h=function(e){rf.now(r_(e))}:rh&&!t9?(v=(g=new rh).port2,g.port1.onmessage=rw,h=tX(v.postMessage,v)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&p&&"file:"!==p.protocol&&!$(rk)?(h=rk,S.addEventListener("message",rw,!1)):h=ry in eW("script")?function(e){t1.appendChild(eW("script"))[ry]=function(){t1.removeChild(this),rb(e)}}:function(e){setTimeout(r_(e),0)});var rE=(tJ={set:ru,clear:rl}).clear;E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rE},{clearImmediate:rE});"use strict";var rS=tJ.set,rO={},rL={};rL="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var r$=S.Function,rj=/MSIE .\./.test(ec)||rL&&function(){var e=S.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();rO=function(e,t){var r=t?2:1;return rj?function(n,o){var i=t4(arguments.length,1)>r,a=K(n)?n:r$(n),s=i?t2(arguments,r):[],c=i?function(){tY(a,this,s)}:a;return t?e(c,o):e(c)}:e};var rT=S.setImmediate?rO(rS,!1):rS;E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==rT},{setImmediate:rT});const rF="https://forkify-api.herokuapp.com/api/v2/recipes/",rM="c84e245f-3020-4ff5-9234-3cb52b9e2840";var rx=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return o(c,"_invoke",{value:(a=new $(i||[]),s=f,function(r,o){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;return T()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var a=d(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=d(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return m.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rx}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rx:Function("r","regeneratorRuntime = r")(rx)}const rP=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rI=async function(e){try{let t=fetch(e),r=await Promise.race([t,rP(10)]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},rq=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rP(10)]),o=await n.json();if(!n.ok)throw Error(`${o.message} (${n.status})`);return o}catch(e){throw e}},rH={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rN=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rA=async function(e){try{let t=await rI(`${rF}${e}?key=${rM}`);rH.recipe=rN(t),rH.bookmarks.some(t=>t.id===e)?rH.recipe.bookmarked=!0:rH.recipe.bookmarked=!1,console.log(rH.recipe)}catch(e){throw e}},rD=async function(e){try{rH.search.query=e;let t=await rI(`${rF}?search=${e}&key=${rM}`);console.log(t),rH.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rH.search.page=1,console.log(rH.search.results)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},rC=function(e=rH.search.page){rH.search.page=e;let t=e*rH.search.resultsPerPage;return rH.search.results.slice((e-1)*10,t)},rR=function(e){rH.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rH.recipe.servings}),rH.recipe.servings=e},rW=function(){localStorage.setItem("bookmarks",JSON.stringify(rH.bookmarks))},rz=function(e){rH.bookmarks.push(e),e.id===rH.recipe.id&&(rH.recipe.bookmarked=!0),rW()},rU=function(e){let t=rH.bookmarks.findIndex(t=>t.id===e);rH.bookmarks.splice(t,1),e===rH.recipe.id&&(rH.recipe.bookmarked=!1),rW()};!function(){let e=localStorage.getItem("bookmarks");e&&(rH.bookmarks=JSON.parse(e))}();const rG=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format");let[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}});console.log(t);let r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await rq(`${rF}?key=${rM}`,r);console.log(n),rH.recipe=rN(n),rz(rH.recipe)}catch(e){throw e}};var rB={};rB=new URL(k("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rJ{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=o[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
            <div class="spinner">
              <svg>
                <use href="${b(rB)}#icon-loader"></use>
              </svg>
            </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
        <div class="message">
            <div>
            <svg>
                <use href="${b(rB)}#icon-alert-triangle"></use>
            </svg>
            </div>
            <p>${e}</p>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
        <div class="message">
            <div>
            <svg>
                <use href="${b(rB)}#icon-smile"></use>
            </svg>
            </div>
            <p>${e}</p>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=function(){var e=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r};return function(){if(e(this.denominator)){var r=t(this.denominator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var r=t(this.numerator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}}(),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},m=Fraction;class rY extends rJ{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;console.log(r);let n=+r.dataset.updateTo;console.log(n),n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
          <figure class="recipe__fig">
            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" crossorigin/>
            <h1 class="recipe__title">
              <span>${this._data.title}</span>
            </h1>
          </figure>

          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${b(rB)}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${b(rB)}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
              <span class="recipe__info-text">servings</span>

              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                  <svg>
                    <use href="${b(rB)}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                  <svg>
                    <use href="${b(rB)}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>

            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${b(rB)}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round btn--bookmark">
              <svg class="">
                <use href="${b(rB)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
              </svg>
            </button>
          </div>

          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
            </ul>
          </div>

          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${this._data.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${b(rB)}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>`}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
            <use href="${b(rB)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity?new m(e.quantity).toString():""}</div>
            <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
            </div>
        </li>
        `}}var rQ=new rY;class rV{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rK=new rV,rX=new class extends rJ{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
          <a class="preview__link ${this._data.id===e?"preview__link--active":""}"  href="#${this._data.id}">
            <figure class="preview__fig">
              <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>
              <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${b(rB)}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
        `}};class rZ extends rJ{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return console.log(this._data),this._data.map(e=>rX.render(e,!1)).join("")}}var r0=new rZ;class r1 extends rJ{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`
            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                <use href="${b(rB)}#icon-arrow-right"></use>
                </svg>
            </button>
            `:e===t&&t>1?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${b(rB)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e-1}</span>
            </button>
            `:e<t?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${b(rB)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e-1}</span>
            </button>
            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                <use href="${b(rB)}#icon-arrow-right"></use>
                </svg>
            </button>
            `:""}}var r2=new r1;class r4 extends rJ{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>rX.render(e,!1)).join("")}}var r3=new r4;class r9 extends rJ{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var r7=new r9;const r8=async function(){try{let e=window.location.hash.slice(1);if(console.log(e),!e)return;rQ.renderSpinner(),r0.update(rC()),r3.update(rH.bookmarks),await rA(e),rQ.render(rH.recipe)}catch(e){rQ.renderError()}},r5=async function(){try{r0.renderSpinner(),console.log(r0);let e=rK.getQuery();if(!e)return;await rD(e),r0.render(rC(1)),r2.render(rH.search)}catch(e){console.log(e)}},r6=async function(e){try{r7.renderSpinner(),await rG(e),console.log(rH.recipe),rQ.render(rH.recipe),r7.renderMessage(),r3.render(rH.bookmarks),window.history.pushState(null,"",`#${rH.recipe.id}`),setTimeout(function(){r7.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),r7.renderError(e.message)}};r3.addHandlerRender(function(){r3.render(rH.bookmarks)}),rQ.addHandlerRender(r8),rQ.addHandlerUpdateServings(function(e){rR(e),rQ.update(rH.recipe)}),rQ.addHandlerAddBookmark(function(){rH.recipe.bookmarked?rU(rH.recipe.id):rz(rH.recipe),console.log(rH.recipe),rQ.update(rH.recipe),r3.render(rH.bookmarks)}),rK.addHandlerSearch(r5),r2.addHandlerClick(function(e){r0.render(rC(e)),r2.render(rH.search),console.log(e)}),r7.addHandlerUpload(r6);
//# sourceMappingURL=index.e7c6d98f.js.map
