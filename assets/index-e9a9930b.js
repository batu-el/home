function P4(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nf={exports:{}},Ho={},rf={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),D4=Symbol.for("react.portal"),W4=Symbol.for("react.fragment"),O4=Symbol.for("react.strict_mode"),G4=Symbol.for("react.profiler"),Z4=Symbol.for("react.provider"),H4=Symbol.for("react.context"),V4=Symbol.for("react.forward_ref"),J4=Symbol.for("react.suspense"),X4=Symbol.for("react.memo"),Y4=Symbol.for("react.lazy"),Vh=Symbol.iterator;function U4(e){return e===null||typeof e!="object"?null:(e=Vh&&e[Vh]||e["@@iterator"],typeof e=="function"?e:null)}var af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,of={};function Ri(e,t,n){this.props=e,this.context=t,this.refs=of,this.updater=n||af}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lf(){}lf.prototype=Ri.prototype;function pc(e,t,n){this.props=e,this.context=t,this.refs=of,this.updater=n||af}var fc=pc.prototype=new lf;fc.constructor=pc;sf(fc,Ri.prototype);fc.isPureReactComponent=!0;var Jh=Array.isArray,uf=Object.prototype.hasOwnProperty,gc={current:null},cf={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)uf.call(t,r)&&!cf.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Ja,type:e,key:a,ref:s,props:i,_owner:gc.current}}function Q4(e,t){return{$$typeof:Ja,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ja}function K4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xh=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K4(""+e.key):t.toString(36)}function Ws(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ja:case D4:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ml(s,0):r,Jh(i)?(n="",e!=null&&(n=e.replace(Xh,"$&/")+"/"),Ws(i,t,n,"",function(u){return u})):i!=null&&(vc(i)&&(i=Q4(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Xh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Jh(e))for(var o=0;o<e.length;o++){a=e[o];var l=r+Ml(a,o);s+=Ws(a,t,n,l,i)}else if(l=U4(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=r+Ml(a,o++),s+=Ws(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ds(e,t,n){if(e==null)return e;var r=[],i=0;return Ws(e,r,"","",function(a){return t.call(n,a,i++)}),r}function ev(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Os={transition:null},tv={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Os,ReactCurrentOwner:gc};function df(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:ds,forEach:function(e,t,n){ds(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ds(e,function(){t++}),t},toArray:function(e){return ds(e,function(t){return t})||[]},only:function(e){if(!vc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=Ri;pe.Fragment=W4;pe.Profiler=G4;pe.PureComponent=pc;pe.StrictMode=O4;pe.Suspense=J4;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;pe.act=df;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sf({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=gc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)uf.call(t,l)&&!cf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Ja,type:e.type,key:i,ref:a,props:r,_owner:s}};pe.createContext=function(e){return e={$$typeof:H4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Z4,_context:e},e.Consumer=e};pe.createElement=hf;pe.createFactory=function(e){var t=hf.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:V4,render:e}};pe.isValidElement=vc;pe.lazy=function(e){return{$$typeof:Y4,_payload:{_status:-1,_result:e},_init:ev}};pe.memo=function(e,t){return{$$typeof:X4,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Os.transition;Os.transition={};try{e()}finally{Os.transition=t}};pe.unstable_act=df;pe.useCallback=function(e,t){return vt.current.useCallback(e,t)};pe.useContext=function(e){return vt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return vt.current.useEffect(e,t)};pe.useId=function(){return vt.current.useId()};pe.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return vt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};pe.useRef=function(e){return vt.current.useRef(e)};pe.useState=function(e){return vt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return vt.current.useTransition()};pe.version="18.3.1";rf.exports=pe;var V=rf.exports;const so=mc(V),nv=P4({__proto__:null,default:so},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=V,iv=Symbol.for("react.element"),av=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,ov=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lv={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)sv.call(t,r)&&!lv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iv,type:e,key:a,ref:s,props:i,_owner:ov.current}}Ho.Fragment=av;Ho.jsx=mf;Ho.jsxs=mf;nf.exports=Ho;var B=nf.exports,Wu={},pf={exports:{}},jt={},ff={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(H,ee){var _=H.length;H.push(ee);e:for(;0<_;){var se=_-1>>>1,fe=H[se];if(0<i(fe,ee))H[se]=ee,H[_]=fe,_=se;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ee=H[0],_=H.pop();if(_!==ee){H[0]=_;e:for(var se=0,fe=H.length,z=fe>>>1;se<z;){var Ne=2*(se+1)-1,$t=H[Ne],xe=Ne+1,et=H[xe];if(0>i($t,_))xe<fe&&0>i(et,$t)?(H[se]=et,H[xe]=_,se=xe):(H[se]=$t,H[Ne]=_,se=Ne);else if(xe<fe&&0>i(et,_))H[se]=et,H[xe]=_,se=xe;else break e}}return ee}function i(H,ee){var _=H.sortIndex-ee.sortIndex;return _!==0?_:H.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],u=[],h=1,c=null,m=3,f=!1,y=!1,$=!1,I=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(H){for(var ee=n(u);ee!==null;){if(ee.callback===null)r(u);else if(ee.startTime<=H)r(u),ee.sortIndex=ee.expirationTime,t(l,ee);else break;ee=n(u)}}function N(H){if($=!1,x(H),!y)if(n(l)!==null)y=!0,be(A);else{var ee=n(u);ee!==null&&we(N,ee.startTime-H)}}function A(H,ee){y=!1,$&&($=!1,b(R),R=-1),f=!0;var _=m;try{for(x(ee),c=n(l);c!==null&&(!(c.expirationTime>ee)||H&&!Z());){var se=c.callback;if(typeof se=="function"){c.callback=null,m=c.priorityLevel;var fe=se(c.expirationTime<=ee);ee=e.unstable_now(),typeof fe=="function"?c.callback=fe:c===n(l)&&r(l),x(ee)}else r(l);c=n(l)}if(c!==null)var z=!0;else{var Ne=n(u);Ne!==null&&we(N,Ne.startTime-ee),z=!1}return z}finally{c=null,m=_,f=!1}}var T=!1,M=null,R=-1,j=5,E=-1;function Z(){return!(e.unstable_now()-E<j)}function X(){if(M!==null){var H=e.unstable_now();E=H;var ee=!0;try{ee=M(!0,H)}finally{ee?oe():(T=!1,M=null)}}else T=!1}var oe;if(typeof v=="function")oe=function(){v(X)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ie=le.port2;le.port1.onmessage=X,oe=function(){ie.postMessage(null)}}else oe=function(){I(X,0)};function be(H){M=H,T||(T=!0,oe())}function we(H,ee){R=I(function(){H(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){y||f||(y=!0,be(A))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(H){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var _=m;m=ee;try{return H()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var _=m;m=H;try{return ee()}finally{m=_}},e.unstable_scheduleCallback=function(H,ee,_){var se=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?se+_:se):_=se,H){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=_+fe,H={id:h++,callback:ee,priorityLevel:H,startTime:_,expirationTime:fe,sortIndex:-1},_>se?(H.sortIndex=_,t(u,H),n(l)===null&&H===n(u)&&($?(b(R),R=-1):$=!0,we(N,_-se))):(H.sortIndex=fe,t(l,H),y||f||(y=!0,be(A))),H},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(H){var ee=m;return function(){var _=m;m=ee;try{return H.apply(this,arguments)}finally{m=_}}}})(gf);ff.exports=gf;var uv=ff.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv=V,Ft=uv;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vf=new Set,ka={};function Or(e,t){ki(e,t),ki(e+"Capture",t)}function ki(e,t){for(ka[e]=t,e=0;e<t.length;e++)vf.add(t[e])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yh={},Uh={};function dv(e){return Ou.call(Uh,e)?!0:Ou.call(Yh,e)?!1:hv.test(e)?Uh[e]=!0:(Yh[e]=!0,!1)}function mv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pv(e,t,n,r){if(t===null||typeof t>"u"||mv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var yc=/[\-:]([a-z])/g;function bc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yc,bc);rt[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yc,bc);rt[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yc,bc);rt[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function $c(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pv(t,n,i,r)&&(n=null),r||i===null?dv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jn=cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),ri=Symbol.for("react.portal"),ii=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),xc=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),$f=Symbol.for("react.offscreen"),Qh=Symbol.iterator;function Yi(e){return e===null||typeof e!="object"?null:(e=Qh&&e[Qh]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,ql;function sa(e){if(ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var Rl=!1;function Fl(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sa(e):""}function fv(e){switch(e.tag){case 5:return sa(e.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function Vu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ii:return"Fragment";case ri:return"Portal";case Gu:return"Profiler";case wc:return"StrictMode";case Zu:return"Suspense";case Hu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case xc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _c:return t=e.displayName||null,t!==null?t:Vu(e.type)||"Memo";case Xn:t=e._payload,e=e._init;try{return Vu(e(t))}catch{}}return null}function gv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(t);case 8:return t===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vv(e){var t=wf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ps(e){e._valueTracker||(e._valueTracker=vv(e))}function xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ju(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _f(e,t){t=t.checked,t!=null&&$c(e,"checked",t,!1)}function Xu(e,t){_f(e,t);var n=dr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yu(e,t.type,dr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ed(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yu(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oa=Array.isArray;function fi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Uu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function td(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(oa(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dr(n)}}function kf(e,t){var n=dr(t.value),r=dr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fs,If=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fs=fs||document.createElement("div"),fs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yv=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(e){yv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ha[t]=ha[e]})});function zf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ha.hasOwnProperty(e)&&ha[e]?(""+t).trim():t+"px"}function Tf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bv=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(e,t){if(t){if(bv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function e0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t0=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var n0=null,gi=null,vi=null;function rd(e){if(e=Ua(e)){if(typeof n0!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Uo(t),n0(e.stateNode,e.type,t))}}function Cf(e){gi?vi?vi.push(e):vi=[e]:gi=e}function Nf(){if(gi){var e=gi,t=vi;if(vi=gi=null,rd(e),t)for(e=0;e<t.length;e++)rd(t[e])}}function Ef(e,t){return e(t)}function Af(){}var Ll=!1;function Bf(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return Ef(e,t,n)}finally{Ll=!1,(gi!==null||vi!==null)&&(Af(),Nf())}}function Ia(e,t){var n=e.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var r0=!1;if(Mn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){r0=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{r0=!1}function $v(e,t,n,r,i,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var da=!1,lo=null,uo=!1,i0=null,wv={onError:function(e){da=!0,lo=e}};function xv(e,t,n,r,i,a,s,o,l){da=!1,lo=null,$v.apply(wv,arguments)}function _v(e,t,n,r,i,a,s,o,l){if(xv.apply(this,arguments),da){if(da){var u=lo;da=!1,lo=null}else throw Error(P(198));uo||(uo=!0,i0=u)}}function Gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function id(e){if(Gr(e)!==e)throw Error(P(188))}function kv(e){var t=e.alternate;if(!t){if(t=Gr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return id(i),e;if(a===r)return id(i),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function qf(e){return e=kv(e),e!==null?Rf(e):null}function Rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rf(e);if(t!==null)return t;e=e.sibling}return null}var Ff=Ft.unstable_scheduleCallback,ad=Ft.unstable_cancelCallback,Sv=Ft.unstable_shouldYield,Iv=Ft.unstable_requestPaint,We=Ft.unstable_now,zv=Ft.unstable_getCurrentPriorityLevel,Sc=Ft.unstable_ImmediatePriority,Lf=Ft.unstable_UserBlockingPriority,co=Ft.unstable_NormalPriority,Tv=Ft.unstable_LowPriority,jf=Ft.unstable_IdlePriority,Vo=null,gn=null;function Cv(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Vo,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:Av,Nv=Math.log,Ev=Math.LN2;function Av(e){return e>>>=0,e===0?32:31-(Nv(e)/Ev|0)|0}var gs=64,vs=4194304;function la(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=la(o):(a&=s,a!==0&&(r=la(a)))}else s=n&~i,s!==0?r=la(s):a!==0&&(r=la(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function Bv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-an(a),o=1<<s,l=i[s];l===-1?(!(o&n)||o&r)&&(i[s]=Bv(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function a0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=gs;return gs<<=1,!(gs&4194240)&&(gs=64),e}function jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function qv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ic(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $e=0;function Df(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wf,zc,Of,Gf,Zf,s0=!1,ys=[],rr=null,ir=null,ar=null,za=new Map,Ta=new Map,Un=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sd(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(t.pointerId)}}function Qi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ua(t),t!==null&&zc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fv(e,t,n,r,i){switch(t){case"focusin":return rr=Qi(rr,e,t,n,r,i),!0;case"dragenter":return ir=Qi(ir,e,t,n,r,i),!0;case"mouseover":return ar=Qi(ar,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return za.set(a,Qi(za.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ta.set(a,Qi(Ta.get(a)||null,e,t,n,r,i)),!0}return!1}function Hf(e){var t=Ar(e.target);if(t!==null){var n=Gr(t);if(n!==null){if(t=n.tag,t===13){if(t=Mf(n),t!==null){e.blockedOn=t,Zf(e.priority,function(){Of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=o0(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);t0=r,n.target.dispatchEvent(r),t0=null}else return t=Ua(n),t!==null&&zc(t),e.blockedOn=n,!1;t.shift()}return!0}function od(e,t,n){Gs(e)&&n.delete(t)}function Lv(){s0=!1,rr!==null&&Gs(rr)&&(rr=null),ir!==null&&Gs(ir)&&(ir=null),ar!==null&&Gs(ar)&&(ar=null),za.forEach(od),Ta.forEach(od)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,s0||(s0=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,Lv)))}function Ca(e){function t(i){return Ki(i,e)}if(0<ys.length){Ki(ys[0],e);for(var n=1;n<ys.length;n++){var r=ys[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rr!==null&&Ki(rr,e),ir!==null&&Ki(ir,e),ar!==null&&Ki(ar,e),za.forEach(t),Ta.forEach(t),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Hf(n),n.blockedOn===null&&Un.shift()}var yi=jn.ReactCurrentBatchConfig,mo=!0;function jv(e,t,n,r){var i=$e,a=yi.transition;yi.transition=null;try{$e=1,Tc(e,t,n,r)}finally{$e=i,yi.transition=a}}function Pv(e,t,n,r){var i=$e,a=yi.transition;yi.transition=null;try{$e=4,Tc(e,t,n,r)}finally{$e=i,yi.transition=a}}function Tc(e,t,n,r){if(mo){var i=o0(e,t,n,r);if(i===null)Xl(e,t,r,po,n),sd(e,r);else if(Fv(i,e,t,n,r))r.stopPropagation();else if(sd(e,r),t&4&&-1<Rv.indexOf(e)){for(;i!==null;){var a=Ua(i);if(a!==null&&Wf(a),a=o0(e,t,n,r),a===null&&Xl(e,t,r,po,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var po=null;function o0(e,t,n,r){if(po=null,e=kc(r),e=Ar(e),e!==null)if(t=Gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function Vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zv()){case Sc:return 1;case Lf:return 4;case co:case Tv:return 16;case jf:return 536870912;default:return 16}default:return 16}}var Kn=null,Cc=null,Zs=null;function Jf(){if(Zs)return Zs;var e,t=Cc,n=t.length,r,i="value"in Kn?Kn.value:Kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Zs=i.slice(e,1<r?1-r:void 0)}function Hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function ld(){return!1}function Pt(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?bs:ld,this.isPropagationStopped=ld,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),t}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Pt(Fi),Ya=je({},Fi,{view:0,detail:0}),Dv=Pt(Ya),Pl,Dl,ea,Jo=je({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ea&&(ea&&e.type==="mousemove"?(Pl=e.screenX-ea.screenX,Dl=e.screenY-ea.screenY):Dl=Pl=0,ea=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),ud=Pt(Jo),Wv=je({},Jo,{dataTransfer:0}),Ov=Pt(Wv),Gv=je({},Ya,{relatedTarget:0}),Wl=Pt(Gv),Zv=je({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=Pt(Zv),Vv=je({},Fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jv=Pt(Vv),Xv=je({},Fi,{data:0}),cd=Pt(Xv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qv[e])?!!t[e]:!1}function Ec(){return Kv}var ey=je({},Ya,{key:function(e){if(e.key){var t=Yv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ty=Pt(ey),ny=je({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=Pt(ny),ry=je({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),iy=Pt(ry),ay=je({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Pt(ay),oy=je({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=Pt(oy),uy=[9,13,27,32],Ac=Mn&&"CompositionEvent"in window,ma=null;Mn&&"documentMode"in document&&(ma=document.documentMode);var cy=Mn&&"TextEvent"in window&&!ma,Xf=Mn&&(!Ac||ma&&8<ma&&11>=ma),dd=String.fromCharCode(32),md=!1;function Yf(e,t){switch(e){case"keyup":return uy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ai=!1;function hy(e,t){switch(e){case"compositionend":return Uf(t);case"keypress":return t.which!==32?null:(md=!0,dd);case"textInput":return e=t.data,e===dd&&md?null:e;default:return null}}function dy(e,t){if(ai)return e==="compositionend"||!Ac&&Yf(e,t)?(e=Jf(),Zs=Cc=Kn=null,ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!my[e.type]:t==="textarea"}function Qf(e,t,n,r){Cf(r),t=fo(t,"onChange"),0<t.length&&(n=new Nc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pa=null,Na=null;function py(e){u1(e,0)}function Xo(e){var t=li(e);if(xf(t))return e}function fy(e,t){if(e==="change")return t}var Kf=!1;if(Mn){var Ol;if(Mn){var Gl="oninput"in document;if(!Gl){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Gl=typeof fd.oninput=="function"}Ol=Gl}else Ol=!1;Kf=Ol&&(!document.documentMode||9<document.documentMode)}function gd(){pa&&(pa.detachEvent("onpropertychange",e1),Na=pa=null)}function e1(e){if(e.propertyName==="value"&&Xo(Na)){var t=[];Qf(t,Na,e,kc(e)),Bf(py,t)}}function gy(e,t,n){e==="focusin"?(gd(),pa=t,Na=n,pa.attachEvent("onpropertychange",e1)):e==="focusout"&&gd()}function vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(Na)}function yy(e,t){if(e==="click")return Xo(t)}function by(e,t){if(e==="input"||e==="change")return Xo(t)}function $y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:$y;function Ea(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ou.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yd(e,t){var n=vd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vd(n)}}function t1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?t1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function n1(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wy(e){var t=n1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&t1(n.ownerDocument.documentElement,n)){if(r!==null&&Bc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=yd(n,a);var s=yd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xy=Mn&&"documentMode"in document&&11>=document.documentMode,si=null,l0=null,fa=null,u0=!1;function bd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;u0||si==null||si!==oo(r)||(r=si,"selectionStart"in r&&Bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&Ea(fa,r)||(fa=r,r=fo(l0,"onSelect"),0<r.length&&(t=new Nc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=si)))}function $s(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var oi={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionend:$s("Transition","TransitionEnd")},Zl={},r1={};Mn&&(r1=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Yo(e){if(Zl[e])return Zl[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in r1)return Zl[e]=t[n];return e}var i1=Yo("animationend"),a1=Yo("animationiteration"),s1=Yo("animationstart"),o1=Yo("transitionend"),l1=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){l1.set(e,t),Or(t,[e])}for(var Hl=0;Hl<$d.length;Hl++){var Vl=$d[Hl],_y=Vl.toLowerCase(),ky=Vl[0].toUpperCase()+Vl.slice(1);yr(_y,"on"+ky)}yr(i1,"onAnimationEnd");yr(a1,"onAnimationIteration");yr(s1,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(o1,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function wd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_v(r,t,void 0,e),e.currentTarget=null}function u1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;wd(i,o,u),a=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;wd(i,o,u),a=l}}}if(uo)throw e=i0,uo=!1,i0=null,e}function Te(e,t){var n=t[p0];n===void 0&&(n=t[p0]=new Set);var r=e+"__bubble";n.has(r)||(c1(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),c1(n,e,r,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function Aa(e){if(!e[ws]){e[ws]=!0,vf.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,Jl("selectionchange",!1,t))}}function c1(e,t,n,r){switch(Vf(t)){case 1:var i=jv;break;case 4:i=Pv;break;default:i=Tc}n=i.bind(null,t,n,e),i=void 0,!r0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Ar(o),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}o=o.parentNode}}r=r.return}Bf(function(){var u=a,h=kc(n),c=[];e:{var m=l1.get(e);if(m!==void 0){var f=Nc,y=e;switch(e){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":f=ty;break;case"focusin":y="focus",f=Wl;break;case"focusout":y="blur",f=Wl;break;case"beforeblur":case"afterblur":f=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=iy;break;case i1:case a1:case s1:f=Hv;break;case o1:f=sy;break;case"scroll":f=Dv;break;case"wheel":f=ly;break;case"copy":case"cut":case"paste":f=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=hd}var $=(t&4)!==0,I=!$&&e==="scroll",b=$?m!==null?m+"Capture":null:m;$=[];for(var v=u,x;v!==null;){x=v;var N=x.stateNode;if(x.tag===5&&N!==null&&(x=N,b!==null&&(N=Ia(v,b),N!=null&&$.push(Ba(v,N,x)))),I)break;v=v.return}0<$.length&&(m=new f(m,y,null,n,h),c.push({event:m,listeners:$}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",m&&n!==t0&&(y=n.relatedTarget||n.fromElement)&&(Ar(y)||y[qn]))break e;if((f||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?Ar(y):null,y!==null&&(I=Gr(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if($=ud,N="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&($=hd,N="onPointerLeave",b="onPointerEnter",v="pointer"),I=f==null?m:li(f),x=y==null?m:li(y),m=new $(N,v+"leave",f,n,h),m.target=I,m.relatedTarget=x,N=null,Ar(h)===u&&($=new $(b,v+"enter",y,n,h),$.target=x,$.relatedTarget=I,N=$),I=N,f&&y)t:{for($=f,b=y,v=0,x=$;x;x=Kr(x))v++;for(x=0,N=b;N;N=Kr(N))x++;for(;0<v-x;)$=Kr($),v--;for(;0<x-v;)b=Kr(b),x--;for(;v--;){if($===b||b!==null&&$===b.alternate)break t;$=Kr($),b=Kr(b)}$=null}else $=null;f!==null&&xd(c,m,f,$,!1),y!==null&&I!==null&&xd(c,I,y,$,!0)}}e:{if(m=u?li(u):window,f=m.nodeName&&m.nodeName.toLowerCase(),f==="select"||f==="input"&&m.type==="file")var A=fy;else if(pd(m))if(Kf)A=by;else{A=vy;var T=gy}else(f=m.nodeName)&&f.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=yy);if(A&&(A=A(e,u))){Qf(c,A,n,h);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Yu(m,"number",m.value)}switch(T=u?li(u):window,e){case"focusin":(pd(T)||T.contentEditable==="true")&&(si=T,l0=u,fa=null);break;case"focusout":fa=l0=si=null;break;case"mousedown":u0=!0;break;case"contextmenu":case"mouseup":case"dragend":u0=!1,bd(c,n,h);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":bd(c,n,h)}var M;if(Ac)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ai?Yf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Xf&&n.locale!=="ko"&&(ai||R!=="onCompositionStart"?R==="onCompositionEnd"&&ai&&(M=Jf()):(Kn=h,Cc="value"in Kn?Kn.value:Kn.textContent,ai=!0)),T=fo(u,R),0<T.length&&(R=new cd(R,e,null,n,h),c.push({event:R,listeners:T}),M?R.data=M:(M=Uf(n),M!==null&&(R.data=M)))),(M=cy?hy(e,n):dy(e,n))&&(u=fo(u,"onBeforeInput"),0<u.length&&(h=new cd("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=M))}u1(c,t)})}function Ba(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ia(e,n),a!=null&&r.unshift(Ba(e,a,i)),a=Ia(e,t),a!=null&&r.push(Ba(e,a,i))),e=e.return}return r}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xd(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=Ia(n,a),l!=null&&s.unshift(Ba(n,l,o))):i||(l=Ia(n,a),l!=null&&s.push(Ba(n,l,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Iy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function _d(e){return(typeof e=="string"?e:""+e).replace(Iy,`
`).replace(zy,"")}function xs(e,t,n){if(t=_d(t),_d(e)!==t&&n)throw Error(P(425))}function go(){}var c0=null,h0=null;function d0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var m0=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(e){return kd.resolve(null).then(e).catch(Ny)}:m0;function Ny(e){setTimeout(function(){throw e})}function Yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ca(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ca(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),pn="__reactFiber$"+Li,Ma="__reactProps$"+Li,qn="__reactContainer$"+Li,p0="__reactEvents$"+Li,Ey="__reactListeners$"+Li,Ay="__reactHandles$"+Li;function Ar(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sd(e);e!==null;){if(n=e[pn])return n;e=Sd(e)}return t}e=n,n=e.parentNode}return null}function Ua(e){return e=e[pn]||e[qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function li(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Uo(e){return e[Ma]||null}var f0=[],ui=-1;function br(e){return{current:e}}function Ce(e){0>ui||(e.current=f0[ui],f0[ui]=null,ui--)}function ze(e,t){ui++,f0[ui]=e.current,e.current=t}var mr={},ut=br(mr),St=br(!1),Fr=mr;function Si(e,t){var n=e.type.contextTypes;if(!n)return mr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function It(e){return e=e.childContextTypes,e!=null}function vo(){Ce(St),Ce(ut)}function Id(e,t,n){if(ut.current!==mr)throw Error(P(168));ze(ut,t),ze(St,n)}function h1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,gv(e)||"Unknown",i));return je({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Fr=ut.current,ze(ut,e),ze(St,St.current),!0}function zd(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=h1(e,t,Fr),r.__reactInternalMemoizedMergedChildContext=e,Ce(St),Ce(ut),ze(ut,e)):Ce(St),ze(St,n)}var Tn=null,Qo=!1,Ul=!1;function d1(e){Tn===null?Tn=[e]:Tn.push(e)}function By(e){Qo=!0,d1(e)}function $r(){if(!Ul&&Tn!==null){Ul=!0;var e=0,t=$e;try{var n=Tn;for($e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tn=null,Qo=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),Ff(Sc,$r),i}finally{$e=t,Ul=!1}}return null}var ci=[],hi=0,bo=null,$o=0,Ot=[],Gt=0,Lr=null,Nn=1,En="";function Cr(e,t){ci[hi++]=$o,ci[hi++]=bo,bo=e,$o=t}function m1(e,t,n){Ot[Gt++]=Nn,Ot[Gt++]=En,Ot[Gt++]=Lr,Lr=e;var r=Nn;e=En;var i=32-an(r)-1;r&=~(1<<i),n+=1;var a=32-an(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nn=1<<32-an(t)+i|n<<i|r,En=a+e}else Nn=1<<a|n<<i|r,En=e}function Mc(e){e.return!==null&&(Cr(e,1),m1(e,1,0))}function qc(e){for(;e===bo;)bo=ci[--hi],ci[hi]=null,$o=ci[--hi],ci[hi]=null;for(;e===Lr;)Lr=Ot[--Gt],Ot[Gt]=null,En=Ot[--Gt],Ot[Gt]=null,Nn=Ot[--Gt],Ot[Gt]=null}var Mt=null,Bt=null,Ee=!1,rn=null;function p1(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Td(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Mt=e,Bt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Mt=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lr!==null?{id:Nn,overflow:En}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Mt=e,Bt=null,!0):!1;default:return!1}}function g0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function v0(e){if(Ee){var t=Bt;if(t){var n=t;if(!Td(e,t)){if(g0(e))throw Error(P(418));t=sr(n.nextSibling);var r=Mt;t&&Td(e,t)?p1(r,n):(e.flags=e.flags&-4097|2,Ee=!1,Mt=e)}}else{if(g0(e))throw Error(P(418));e.flags=e.flags&-4097|2,Ee=!1,Mt=e}}}function Cd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Mt=e}function _s(e){if(e!==Mt)return!1;if(!Ee)return Cd(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!d0(e.type,e.memoizedProps)),t&&(t=Bt)){if(g0(e))throw f1(),Error(P(418));for(;t;)p1(e,t),t=sr(t.nextSibling)}if(Cd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Mt?sr(e.stateNode.nextSibling):null;return!0}function f1(){for(var e=Bt;e;)e=sr(e.nextSibling)}function Ii(){Bt=Mt=null,Ee=!1}function Rc(e){rn===null?rn=[e]:rn.push(e)}var My=jn.ReactCurrentBatchConfig;function ta(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=i.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ks(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nd(e){var t=e._init;return t(e._payload)}function g1(e){function t(b,v){if(e){var x=b.deletions;x===null?(b.deletions=[v],b.flags|=16):x.push(v)}}function n(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function r(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function i(b,v){return b=cr(b,v),b.index=0,b.sibling=null,b}function a(b,v,x){return b.index=x,e?(x=b.alternate,x!==null?(x=x.index,x<v?(b.flags|=2,v):x):(b.flags|=2,v)):(b.flags|=1048576,v)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function o(b,v,x,N){return v===null||v.tag!==6?(v=iu(x,b.mode,N),v.return=b,v):(v=i(v,x),v.return=b,v)}function l(b,v,x,N){var A=x.type;return A===ii?h(b,v,x.props.children,N,x.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xn&&Nd(A)===v.type)?(N=i(v,x.props),N.ref=ta(b,v,x),N.return=b,N):(N=Ks(x.type,x.key,x.props,null,b.mode,N),N.ref=ta(b,v,x),N.return=b,N)}function u(b,v,x,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=au(x,b.mode,N),v.return=b,v):(v=i(v,x.children||[]),v.return=b,v)}function h(b,v,x,N,A){return v===null||v.tag!==7?(v=Rr(x,b.mode,N,A),v.return=b,v):(v=i(v,x),v.return=b,v)}function c(b,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=iu(""+v,b.mode,x),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ms:return x=Ks(v.type,v.key,v.props,null,b.mode,x),x.ref=ta(b,null,v),x.return=b,x;case ri:return v=au(v,b.mode,x),v.return=b,v;case Xn:var N=v._init;return c(b,N(v._payload),x)}if(oa(v)||Yi(v))return v=Rr(v,b.mode,x,null),v.return=b,v;ks(b,v)}return null}function m(b,v,x,N){var A=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:o(b,v,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ms:return x.key===A?l(b,v,x,N):null;case ri:return x.key===A?u(b,v,x,N):null;case Xn:return A=x._init,m(b,v,A(x._payload),N)}if(oa(x)||Yi(x))return A!==null?null:h(b,v,x,N,null);ks(b,x)}return null}function f(b,v,x,N,A){if(typeof N=="string"&&N!==""||typeof N=="number")return b=b.get(x)||null,o(v,b,""+N,A);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ms:return b=b.get(N.key===null?x:N.key)||null,l(v,b,N,A);case ri:return b=b.get(N.key===null?x:N.key)||null,u(v,b,N,A);case Xn:var T=N._init;return f(b,v,x,T(N._payload),A)}if(oa(N)||Yi(N))return b=b.get(x)||null,h(v,b,N,A,null);ks(v,N)}return null}function y(b,v,x,N){for(var A=null,T=null,M=v,R=v=0,j=null;M!==null&&R<x.length;R++){M.index>R?(j=M,M=null):j=M.sibling;var E=m(b,M,x[R],N);if(E===null){M===null&&(M=j);break}e&&M&&E.alternate===null&&t(b,M),v=a(E,v,R),T===null?A=E:T.sibling=E,T=E,M=j}if(R===x.length)return n(b,M),Ee&&Cr(b,R),A;if(M===null){for(;R<x.length;R++)M=c(b,x[R],N),M!==null&&(v=a(M,v,R),T===null?A=M:T.sibling=M,T=M);return Ee&&Cr(b,R),A}for(M=r(b,M);R<x.length;R++)j=f(M,b,R,x[R],N),j!==null&&(e&&j.alternate!==null&&M.delete(j.key===null?R:j.key),v=a(j,v,R),T===null?A=j:T.sibling=j,T=j);return e&&M.forEach(function(Z){return t(b,Z)}),Ee&&Cr(b,R),A}function $(b,v,x,N){var A=Yi(x);if(typeof A!="function")throw Error(P(150));if(x=A.call(x),x==null)throw Error(P(151));for(var T=A=null,M=v,R=v=0,j=null,E=x.next();M!==null&&!E.done;R++,E=x.next()){M.index>R?(j=M,M=null):j=M.sibling;var Z=m(b,M,E.value,N);if(Z===null){M===null&&(M=j);break}e&&M&&Z.alternate===null&&t(b,M),v=a(Z,v,R),T===null?A=Z:T.sibling=Z,T=Z,M=j}if(E.done)return n(b,M),Ee&&Cr(b,R),A;if(M===null){for(;!E.done;R++,E=x.next())E=c(b,E.value,N),E!==null&&(v=a(E,v,R),T===null?A=E:T.sibling=E,T=E);return Ee&&Cr(b,R),A}for(M=r(b,M);!E.done;R++,E=x.next())E=f(M,b,R,E.value,N),E!==null&&(e&&E.alternate!==null&&M.delete(E.key===null?R:E.key),v=a(E,v,R),T===null?A=E:T.sibling=E,T=E);return e&&M.forEach(function(X){return t(b,X)}),Ee&&Cr(b,R),A}function I(b,v,x,N){if(typeof x=="object"&&x!==null&&x.type===ii&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ms:e:{for(var A=x.key,T=v;T!==null;){if(T.key===A){if(A=x.type,A===ii){if(T.tag===7){n(b,T.sibling),v=i(T,x.props.children),v.return=b,b=v;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xn&&Nd(A)===T.type){n(b,T.sibling),v=i(T,x.props),v.ref=ta(b,T,x),v.return=b,b=v;break e}n(b,T);break}else t(b,T);T=T.sibling}x.type===ii?(v=Rr(x.props.children,b.mode,N,x.key),v.return=b,b=v):(N=Ks(x.type,x.key,x.props,null,b.mode,N),N.ref=ta(b,v,x),N.return=b,b=N)}return s(b);case ri:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(b,v.sibling),v=i(v,x.children||[]),v.return=b,b=v;break e}else{n(b,v);break}else t(b,v);v=v.sibling}v=au(x,b.mode,N),v.return=b,b=v}return s(b);case Xn:return T=x._init,I(b,v,T(x._payload),N)}if(oa(x))return y(b,v,x,N);if(Yi(x))return $(b,v,x,N);ks(b,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(b,v.sibling),v=i(v,x),v.return=b,b=v):(n(b,v),v=iu(x,b.mode,N),v.return=b,b=v),s(b)):n(b,v)}return I}var zi=g1(!0),v1=g1(!1),wo=br(null),xo=null,di=null,Fc=null;function Lc(){Fc=di=xo=null}function jc(e){var t=wo.current;Ce(wo),e._currentValue=t}function y0(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bi(e,t){xo=e,Fc=di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(Fc!==e)if(e={context:e,memoizedValue:t,next:null},di===null){if(xo===null)throw Error(P(308));di=e,xo.dependencies={lanes:0,firstContext:e}}else di=di.next=e;return t}var Br=null;function Pc(e){Br===null?Br=[e]:Br.push(e)}function y1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rn(e,r)}function Rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yn=!1;function Dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rn(e,n)}return i=r.interleaved,i===null?(t.next=t,Pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rn(e,n)}function Vs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ic(e,n)}}function Ed(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;Yn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(a!==null){var c=i.baseState;s=0,h=u=l=null,o=a;do{var m=o.lane,f=o.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,$=o;switch(m=t,f=n,$.tag){case 1:if(y=$.payload,typeof y=="function"){c=y.call(f,c,m);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=$.payload,m=typeof y=="function"?y.call(f,c,m):y,m==null)break e;c=je({},c,m);break e;case 2:Yn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else f={eventTime:f,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=f,l=c):h=h.next=f,s|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Pr|=s,e.lanes=s,e.memoizedState=c}}function Ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Qa={},vn=br(Qa),qa=br(Qa),Ra=br(Qa);function Mr(e){if(e===Qa)throw Error(P(174));return e}function Wc(e,t){switch(ze(Ra,t),ze(qa,e),ze(vn,Qa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qu(t,e)}Ce(vn),ze(vn,t)}function Ti(){Ce(vn),Ce(qa),Ce(Ra)}function $1(e){Mr(Ra.current);var t=Mr(vn.current),n=Qu(t,e.type);t!==n&&(ze(qa,e),ze(vn,n))}function Oc(e){qa.current===e&&(Ce(vn),Ce(qa))}var qe=br(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function Gc(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Js=jn.ReactCurrentDispatcher,Kl=jn.ReactCurrentBatchConfig,jr=0,Fe=null,Xe=null,Qe=null,So=!1,ga=!1,Fa=0,qy=0;function it(){throw Error(P(321))}function Zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,i,a){if(jr=a,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Js.current=e===null||e.memoizedState===null?jy:Py,e=n(r,i),ga){a=0;do{if(ga=!1,Fa=0,25<=a)throw Error(P(301));a+=1,Qe=Xe=null,t.updateQueue=null,Js.current=Dy,e=n(r,i)}while(ga)}if(Js.current=Io,t=Xe!==null&&Xe.next!==null,jr=0,Qe=Xe=Fe=null,So=!1,t)throw Error(P(300));return e}function Vc(){var e=Fa!==0;return Fa=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Fe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Yt(){if(Xe===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=Qe===null?Fe.memoizedState:Qe.next;if(t!==null)Qe=t,Xe=e;else{if(e===null)throw Error(P(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Qe===null?Fe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function La(e,t){return typeof t=="function"?t(e):t}function eu(e){var t=Yt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var o=s=null,l=null,u=a;do{var h=u.lane;if((jr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=c,s=r):l=l.next=c,Fe.lanes|=h,Pr|=h}u=u.next}while(u!==null&&u!==a);l===null?s=r:l.next=o,ln(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Fe.lanes|=a,Pr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tu(e){var t=Yt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);ln(a,t.memoizedState)||(kt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function w1(){}function x1(e,t){var n=Fe,r=Yt(),i=t(),a=!ln(r.memoizedState,i);if(a&&(r.memoizedState=i,kt=!0),r=r.queue,Jc(S1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ja(9,k1.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(P(349));jr&30||_1(n,t,i)}return i}function _1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function k1(e,t,n,r){t.value=n,t.getSnapshot=r,I1(t)&&z1(e)}function S1(e,t,n){return n(function(){I1(t)&&z1(e)})}function I1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function z1(e){var t=Rn(e,1);t!==null&&sn(t,e,1,-1)}function Bd(e){var t=hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},t.queue=e,e=e.dispatch=Ly.bind(null,Fe,e),[t.memoizedState,e]}function ja(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function T1(){return Yt().memoizedState}function Xs(e,t,n,r){var i=hn();Fe.flags|=e,i.memoizedState=ja(1|t,n,void 0,r===void 0?null:r)}function Ko(e,t,n,r){var i=Yt();r=r===void 0?null:r;var a=void 0;if(Xe!==null){var s=Xe.memoizedState;if(a=s.destroy,r!==null&&Zc(r,s.deps)){i.memoizedState=ja(t,n,a,r);return}}Fe.flags|=e,i.memoizedState=ja(1|t,n,a,r)}function Md(e,t){return Xs(8390656,8,e,t)}function Jc(e,t){return Ko(2048,8,e,t)}function C1(e,t){return Ko(4,2,e,t)}function N1(e,t){return Ko(4,4,e,t)}function E1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function A1(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4,4,E1.bind(null,t,e),n)}function Xc(){}function B1(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function M1(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function q1(e,t,n){return jr&21?(ln(n,t)||(n=Pf(),Fe.lanes|=n,Pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function Ry(e,t){var n=$e;$e=n!==0&&4>n?n:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),t()}finally{$e=n,Kl.transition=r}}function R1(){return Yt().memoizedState}function Fy(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F1(e))L1(t,n);else if(n=y1(e,t,n,r),n!==null){var i=gt();sn(n,e,r,i),j1(n,t,r)}}function Ly(e,t,n){var r=ur(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F1(e))L1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,n);if(i.hasEagerState=!0,i.eagerState=o,ln(o,s)){var l=t.interleaved;l===null?(i.next=i,Pc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=y1(e,t,i,r),n!==null&&(i=gt(),sn(n,e,r,i),j1(n,t,r))}}function F1(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function L1(e,t){ga=So=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function j1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ic(e,n)}}var Io={readContext:Xt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},jy={readContext:Xt,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:Md,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4194308,4,E1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xs(4,2,e,t)},useMemo:function(e,t){var n=hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fy.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:Bd,useDebugValue:Xc,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=Bd(!1),t=e[0];return e=Ry.bind(null,e[1]),hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,i=hn();if(Ee){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ke===null)throw Error(P(349));jr&30||_1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Md(S1.bind(null,r,a,e),[e]),r.flags|=2048,ja(9,k1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=hn(),t=Ke.identifierPrefix;if(Ee){var n=En,r=Nn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Py={readContext:Xt,useCallback:B1,useContext:Xt,useEffect:Jc,useImperativeHandle:A1,useInsertionEffect:C1,useLayoutEffect:N1,useMemo:M1,useReducer:eu,useRef:T1,useState:function(){return eu(La)},useDebugValue:Xc,useDeferredValue:function(e){var t=Yt();return q1(t,Xe.memoizedState,e)},useTransition:function(){var e=eu(La)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:w1,useSyncExternalStore:x1,useId:R1,unstable_isNewReconciler:!1},Dy={readContext:Xt,useCallback:B1,useContext:Xt,useEffect:Jc,useImperativeHandle:A1,useInsertionEffect:C1,useLayoutEffect:N1,useMemo:M1,useReducer:tu,useRef:T1,useState:function(){return tu(La)},useDebugValue:Xc,useDeferredValue:function(e){var t=Yt();return Xe===null?t.memoizedState=e:q1(t,Xe.memoizedState,e)},useTransition:function(){var e=tu(La)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:w1,useSyncExternalStore:x1,useId:R1,unstable_isNewReconciler:!1};function tn(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function b0(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?Gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=ur(e),a=An(r,i);a.payload=t,n!=null&&(a.callback=n),t=or(e,a,i),t!==null&&(sn(t,e,i,r),Vs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=ur(e),a=An(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=or(e,a,i),t!==null&&(sn(t,e,i,r),Vs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=ur(e),i=An(n,r);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,r),t!==null&&(sn(t,e,r,n),Vs(t,e,r))}};function qd(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ea(n,r)||!Ea(i,a):!0}function P1(e,t,n){var r=!1,i=mr,a=t.contextType;return typeof a=="object"&&a!==null?a=Xt(a):(i=It(t)?Fr:ut.current,r=t.contextTypes,a=(r=r!=null)?Si(e,i):mr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Rd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function $0(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Dc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Xt(a):(a=It(t)?Fr:ut.current,i.context=Si(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(b0(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&el.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ci(e,t){try{var n="",r=t;do n+=fv(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function nu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function w0(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function D1(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){To||(To=!0,E0=r),w0(e,t)},n}function W1(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){w0(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){w0(e,t),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Fd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=n3.bind(null,e,t,n),t.then(e,e))}function Ld(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,or(n,t,1))),n.lanes|=1),e)}var Oy=jn.ReactCurrentOwner,kt=!1;function dt(e,t,n,r){t.child=e===null?v1(t,null,n,r):zi(t,e.child,n,r)}function Pd(e,t,n,r,i){n=n.render;var a=t.ref;return bi(t,i),r=Hc(e,t,n,r,a,i),n=Vc(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Ee&&n&&Mc(t),t.flags|=1,dt(e,t,r,i),t.child)}function Dd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!rh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,O1(e,t,a,r,i)):(e=Ks(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(s,r)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=cr(a,r),e.ref=t.ref,e.return=t,t.child=e}function O1(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ea(a,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return x0(e,t,n,r,i)}function G1(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(pi,At),At|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(pi,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ze(pi,At),At|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ze(pi,At),At|=r;return dt(e,t,i,n),t.child}function Z1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function x0(e,t,n,r,i){var a=It(n)?Fr:ut.current;return a=Si(t,a),bi(t,i),n=Hc(e,t,n,r,a,i),r=Vc(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Ee&&r&&Mc(t),t.flags|=1,dt(e,t,n,i),t.child)}function Wd(e,t,n,r,i){if(It(n)){var a=!0;yo(t)}else a=!1;if(bi(t,i),t.stateNode===null)Ys(e,t),P1(t,n,r),$0(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=It(n)?Fr:ut.current,u=Si(t,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Rd(t,s,r,u),Yn=!1;var m=t.memoizedState;s.state=m,_o(t,r,s,i),l=t.memoizedState,o!==r||m!==l||St.current||Yn?(typeof h=="function"&&(b0(t,n,h,r),l=t.memoizedState),(o=Yn||qd(t,n,o,r,m,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,b1(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:tn(t.type,o),s.props=u,c=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xt(l):(l=It(n)?Fr:ut.current,l=Si(t,l));var f=n.getDerivedStateFromProps;(h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==c||m!==l)&&Rd(t,s,r,l),Yn=!1,m=t.memoizedState,s.state=m,_o(t,r,s,i);var y=t.memoizedState;o!==c||m!==y||St.current||Yn?(typeof f=="function"&&(b0(t,n,f,r),y=t.memoizedState),(u=Yn||qd(t,n,u,r,m,y,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return _0(e,t,n,r,a,i)}function _0(e,t,n,r,i,a){Z1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&zd(t,n,!1),Fn(e,t,a);r=t.stateNode,Oy.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=zi(t,e.child,null,a),t.child=zi(t,null,o,a)):dt(e,t,o,a),t.memoizedState=r.state,i&&zd(t,n,!0),t.child}function H1(e){var t=e.stateNode;t.pendingContext?Id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Id(e,t.context,!1),Wc(e,t.containerInfo)}function Od(e,t,n,r,i){return Ii(),Rc(i),t.flags|=256,dt(e,t,n,r),t.child}var k0={dehydrated:null,treeContext:null,retryLane:0};function S0(e){return{baseLanes:e,cachePool:null,transitions:null}}function V1(e,t,n){var r=t.pendingProps,i=qe.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ze(qe,i&1),e===null)return v0(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=rl(s,r,0,null),e=Rr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=S0(n),t.memoizedState=k0,e):Yc(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Gy(e,t,s,r,o,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=cr(o,a):(a=Rr(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?S0(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=k0,r}return a=e.child,e=a.sibling,r=cr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yc(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,n,r){return r!==null&&Rc(r),zi(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gy(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=nu(Error(P(422))),Ss(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=rl({mode:"visible",children:r.children},i,0,null),a=Rr(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&zi(t,e.child,null,s),t.child.memoizedState=S0(s),t.memoizedState=k0,a);if(!(t.mode&1))return Ss(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(P(419)),r=nu(a,r,void 0),Ss(e,t,s,r)}if(o=(s&e.childLanes)!==0,kt||o){if(r=Ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Rn(e,i),sn(r,e,i,-1))}return nh(),r=nu(Error(P(421))),Ss(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=r3.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Bt=sr(i.nextSibling),Mt=t,Ee=!0,rn=null,e!==null&&(Ot[Gt++]=Nn,Ot[Gt++]=En,Ot[Gt++]=Lr,Nn=e.id,En=e.overflow,Lr=t),t=Yc(t,r.children),t.flags|=4096,t)}function Gd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),y0(e.return,t,n)}function ru(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function J1(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(dt(e,t,r.children,n),r=qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gd(e,n,t);else if(e.tag===19)Gd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ze(qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ru(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ru(t,!0,n,null,a);break;case"together":ru(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=cr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zy(e,t,n){switch(t.tag){case 3:H1(t),Ii();break;case 5:$1(t);break;case 1:It(t.type)&&yo(t);break;case 4:Wc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ze(wo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ze(qe,qe.current&1),t.flags|=128,null):n&t.child.childLanes?V1(e,t,n):(ze(qe,qe.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);ze(qe,qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return J1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ze(qe,qe.current),r)break;return null;case 22:case 23:return t.lanes=0,G1(e,t,n)}return Fn(e,t,n)}var X1,I0,Y1,U1;X1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};I0=function(){};Y1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mr(vn.current);var a=null;switch(n){case"input":i=Ju(e,i),r=Ju(e,r),a=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),a=[];break;case"textarea":i=Uu(e,i),r=Uu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}Ku(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};U1=function(e,t,n,r){n!==r&&(t.flags|=4)};function na(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hy(e,t,n){var r=t.pendingProps;switch(qc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return It(t.type)&&vo(),at(t),null;case 3:return r=t.stateNode,Ti(),Ce(St),Ce(ut),Gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(M0(rn),rn=null))),I0(e,t),at(t),null;case 5:Oc(t);var i=Mr(Ra.current);if(n=t.type,e!==null&&t.stateNode!=null)Y1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return at(t),null}if(e=Mr(vn.current),_s(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pn]=t,r[Ma]=a,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<ua.length;i++)Te(ua[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Kh(r,a),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Te("invalid",r);break;case"textarea":td(r,a),Te("invalid",r)}Ku(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&xs(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&xs(r.textContent,o,e),i=["children",""+o]):ka.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Te("scroll",r)}switch(n){case"input":ps(r),ed(r,a,!0);break;case"textarea":ps(r),nd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pn]=t,e[Ma]=r,X1(e,t,!1,!1),t.stateNode=e;e:{switch(s=e0(n,r),n){case"dialog":Te("cancel",e),Te("close",e),i=r;break;case"iframe":case"object":case"embed":Te("load",e),i=r;break;case"video":case"audio":for(i=0;i<ua.length;i++)Te(ua[i],e);i=r;break;case"source":Te("error",e),i=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=r;break;case"details":Te("toggle",e),i=r;break;case"input":Kh(e,r),i=Ju(e,r),Te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Te("invalid",e);break;case"textarea":td(e,r),i=Uu(e,r),Te("invalid",e);break;default:i=r}Ku(n,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?Tf(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&If(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(e,l):typeof l=="number"&&Sa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ka.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Te("scroll",e):l!=null&&$c(e,a,l,s))}switch(n){case"input":ps(e),ed(e,r,!1);break;case"textarea":ps(e),nd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?fi(e,!!r.multiple,a,!1):r.defaultValue!=null&&fi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)U1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Mr(Ra.current),Mr(vn.current),_s(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(a=r.nodeValue!==n)&&(e=Mt,e!==null))switch(e.tag){case 3:xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return at(t),null;case 13:if(Ce(qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Bt!==null&&t.mode&1&&!(t.flags&128))f1(),Ii(),t.flags|=98560,a=!1;else if(a=_s(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[pn]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),a=!1}else rn!==null&&(M0(rn),rn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?Ye===0&&(Ye=3):nh())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Ti(),I0(e,t),e===null&&Aa(t.stateNode.containerInfo),at(t),null;case 10:return jc(t.type._context),at(t),null;case 17:return It(t.type)&&vo(),at(t),null;case 19:if(Ce(qe),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)na(a,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ko(e),s!==null){for(t.flags|=128,na(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ze(qe,qe.current&1|2),t.child}e=e.sibling}a.tail!==null&&We()>Ni&&(t.flags|=128,r=!0,na(a,!1),t.lanes=4194304)}else{if(!r)if(e=ko(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),na(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ee)return at(t),null}else 2*We()-a.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,na(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=We(),t.sibling=null,n=qe.current,ze(qe,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return th(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Vy(e,t){switch(qc(t),t.tag){case 1:return It(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ti(),Ce(St),Ce(ut),Gc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(Ce(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(qe),null;case 4:return Ti(),null;case 10:return jc(t.type._context),null;case 22:case 23:return th(),null;case 24:return null;default:return null}}var Is=!1,st=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,Q=null;function mi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function z0(e,t,n){try{n()}catch(r){De(e,t,r)}}var Zd=!1;function Xy(e,t){if(c0=mo,e=n1(),Bc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,h=0,c=e,m=null;t:for(;;){for(var f;c!==n||i!==0&&c.nodeType!==3||(o=s+i),c!==a||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(f=c.firstChild)!==null;)m=c,c=f;for(;;){if(c===e)break t;if(m===n&&++u===i&&(o=s),m===a&&++h===r&&(l=s),(f=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(h0={focusedElem:e,selectionRange:n},mo=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var $=y.memoizedProps,I=y.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?$:tn(t.type,$),I);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(N){De(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return y=Zd,Zd=!1,y}function va(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&z0(t,n,a)}i=i.next}while(i!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function T0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Q1(e){var t=e.alternate;t!==null&&(e.alternate=null,Q1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[Ma],delete t[p0],delete t[Ey],delete t[Ay])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function K1(e){return e.tag===5||e.tag===3||e.tag===4}function Hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||K1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function C0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(C0(e,t,n),e=e.sibling;e!==null;)C0(e,t,n),e=e.sibling}function N0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(N0(e,t,n),e=e.sibling;e!==null;)N0(e,t,n),e=e.sibling}var tt=null,nn=!1;function Zn(e,t,n){for(n=n.child;n!==null;)eg(e,t,n),n=n.sibling}function eg(e,t,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:st||mi(n,t);case 6:var r=tt,i=nn;tt=null,Zn(e,t,n),tt=r,nn=i,tt!==null&&(nn?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(nn?(e=tt,n=n.stateNode,e.nodeType===8?Yl(e.parentNode,n):e.nodeType===1&&Yl(e,n),Ca(e)):Yl(tt,n.stateNode));break;case 4:r=tt,i=nn,tt=n.stateNode.containerInfo,nn=!0,Zn(e,t,n),tt=r,nn=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&z0(n,t,s),i=i.next}while(i!==r)}Zn(e,t,n);break;case 1:if(!st&&(mi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){De(n,t,o)}Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Zn(e,t,n),st=r):Zn(e,t,n);break;default:Zn(e,t,n)}}function Vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jy),t.forEach(function(r){var i=i3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:tt=o.stateNode,nn=!1;break e;case 3:tt=o.stateNode.containerInfo,nn=!0;break e;case 4:tt=o.stateNode.containerInfo,nn=!0;break e}o=o.return}if(tt===null)throw Error(P(160));eg(a,s,i),tt=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tg(t,e),t=t.sibling}function tg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(en(t,e),un(e),r&4){try{va(3,e,e.return),tl(3,e)}catch($){De(e,e.return,$)}try{va(5,e,e.return)}catch($){De(e,e.return,$)}}break;case 1:en(t,e),un(e),r&512&&n!==null&&mi(n,n.return);break;case 5:if(en(t,e),un(e),r&512&&n!==null&&mi(n,n.return),e.flags&32){var i=e.stateNode;try{Sa(i,"")}catch($){De(e,e.return,$)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&_f(i,a),e0(o,s);var u=e0(o,a);for(s=0;s<l.length;s+=2){var h=l[s],c=l[s+1];h==="style"?Tf(i,c):h==="dangerouslySetInnerHTML"?If(i,c):h==="children"?Sa(i,c):$c(i,h,c,u)}switch(o){case"input":Xu(i,a);break;case"textarea":kf(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?fi(i,!!a.multiple,f,!1):m!==!!a.multiple&&(a.defaultValue!=null?fi(i,!!a.multiple,a.defaultValue,!0):fi(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ma]=a}catch($){De(e,e.return,$)}}break;case 6:if(en(t,e),un(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch($){De(e,e.return,$)}}break;case 3:if(en(t,e),un(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(t.containerInfo)}catch($){De(e,e.return,$)}break;case 4:en(t,e),un(e);break;case 13:en(t,e),un(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Kc=We())),r&4&&Vd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(st=(u=st)||h,en(t,e),st=u):en(t,e),un(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(Q=e,h=e.child;h!==null;){for(c=Q=h;Q!==null;){switch(m=Q,f=m.child,m.tag){case 0:case 11:case 14:case 15:va(4,m,m.return);break;case 1:mi(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch($){De(r,n,$)}}break;case 5:mi(m,m.return);break;case 22:if(m.memoizedState!==null){Xd(c);continue}}f!==null?(f.return=m,Q=f):Xd(c)}h=h.sibling}e:for(h=null,c=e;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=zf("display",s))}catch($){De(e,e.return,$)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch($){De(e,e.return,$)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:en(t,e),un(e),r&4&&Vd(e);break;case 21:break;default:en(t,e),un(e)}}function un(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(K1(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sa(i,""),r.flags&=-33);var a=Hd(e);N0(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=Hd(e);C0(e,o,s);break;default:throw Error(P(161))}}catch(l){De(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yy(e,t,n){Q=e,ng(e)}function ng(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Is;if(!s){var o=i.alternate,l=o!==null&&o.memoizedState!==null||st;o=Is;var u=st;if(Is=s,(st=l)&&!u)for(Q=i;Q!==null;)s=Q,l=s.child,s.tag===22&&s.memoizedState!==null?Yd(i):l!==null?(l.return=s,Q=l):Yd(i);for(;a!==null;)Q=a,ng(a),a=a.sibling;Q=i,Is=o,st=u}Jd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Jd(e)}}function Jd(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ad(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ad(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&Ca(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}st||t.flags&512&&T0(t)}catch(m){De(t,t.return,m)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Xd(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Yd(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(l){De(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){De(t,i,l)}}var a=t.return;try{T0(t)}catch(l){De(t,a,l)}break;case 5:var s=t.return;try{T0(t)}catch(l){De(t,s,l)}}}catch(l){De(t,t.return,l)}if(t===e){Q=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Q=o;break}Q=t.return}}var Uy=Math.ceil,zo=jn.ReactCurrentDispatcher,Uc=jn.ReactCurrentOwner,Jt=jn.ReactCurrentBatchConfig,ge=0,Ke=null,Ge=null,nt=0,At=0,pi=br(0),Ye=0,Pa=null,Pr=0,nl=0,Qc=0,ya=null,_t=null,Kc=0,Ni=1/0,zn=null,To=!1,E0=null,lr=null,zs=!1,er=null,Co=0,ba=0,A0=null,Us=-1,Qs=0;function gt(){return ge&6?We():Us!==-1?Us:Us=We()}function ur(e){return e.mode&1?ge&2&&nt!==0?nt&-nt:My.transition!==null?(Qs===0&&(Qs=Pf()),Qs):(e=$e,e!==0||(e=window.event,e=e===void 0?16:Vf(e.type)),e):1}function sn(e,t,n,r){if(50<ba)throw ba=0,A0=null,Error(P(185));Xa(e,n,r),(!(ge&2)||e!==Ke)&&(e===Ke&&(!(ge&2)&&(nl|=n),Ye===4&&Qn(e,nt)),zt(e,r),n===1&&ge===0&&!(t.mode&1)&&(Ni=We()+500,Qo&&$r()))}function zt(e,t){var n=e.callbackNode;Mv(e,t);var r=ho(e,e===Ke?nt:0);if(r===0)n!==null&&ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ad(n),t===1)e.tag===0?By(Ud.bind(null,e)):d1(Ud.bind(null,e)),Cy(function(){!(ge&6)&&$r()}),n=null;else{switch(Df(r)){case 1:n=Sc;break;case 4:n=Lf;break;case 16:n=co;break;case 536870912:n=jf;break;default:n=co}n=cg(n,rg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rg(e,t){if(Us=-1,Qs=0,ge&6)throw Error(P(327));var n=e.callbackNode;if($i()&&e.callbackNode!==n)return null;var r=ho(e,e===Ke?nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=ge;ge|=2;var a=ag();(Ke!==e||nt!==t)&&(zn=null,Ni=We()+500,qr(e,t));do try{e3();break}catch(o){ig(e,o)}while(1);Lc(),zo.current=a,ge=i,Ge!==null?t=0:(Ke=null,nt=0,t=Ye)}if(t!==0){if(t===2&&(i=a0(e),i!==0&&(r=i,t=B0(e,i))),t===1)throw n=Pa,qr(e,0),Qn(e,r),zt(e,We()),n;if(t===6)Qn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qy(i)&&(t=No(e,r),t===2&&(a=a0(e),a!==0&&(r=a,t=B0(e,a))),t===1))throw n=Pa,qr(e,0),Qn(e,r),zt(e,We()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Nr(e,_t,zn);break;case 3:if(Qn(e,r),(r&130023424)===r&&(t=Kc+500-We(),10<t)){if(ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=m0(Nr.bind(null,e,_t,zn),t);break}Nr(e,_t,zn);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-an(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uy(r/1960))-r,10<r){e.timeoutHandle=m0(Nr.bind(null,e,_t,zn),r);break}Nr(e,_t,zn);break;case 5:Nr(e,_t,zn);break;default:throw Error(P(329))}}}return zt(e,We()),e.callbackNode===n?rg.bind(null,e):null}function B0(e,t){var n=ya;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=No(e,t),e!==2&&(t=_t,_t=n,t!==null&&M0(t)),e}function M0(e){_t===null?_t=e:_t.push.apply(_t,e)}function Qy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!ln(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~Qc,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Ud(e){if(ge&6)throw Error(P(327));$i();var t=ho(e,0);if(!(t&1))return zt(e,We()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=a0(e);r!==0&&(t=r,n=B0(e,r))}if(n===1)throw n=Pa,qr(e,0),Qn(e,t),zt(e,We()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,_t,zn),zt(e,We()),null}function eh(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Ni=We()+500,Qo&&$r())}}function Dr(e){er!==null&&er.tag===0&&!(ge&6)&&$i();var t=ge;ge|=1;var n=Jt.transition,r=$e;try{if(Jt.transition=null,$e=1,e)return e()}finally{$e=r,Jt.transition=n,ge=t,!(ge&6)&&$r()}}function th(){At=pi.current,Ce(pi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ty(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(qc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:Ti(),Ce(St),Ce(ut),Gc();break;case 5:Oc(r);break;case 4:Ti();break;case 13:Ce(qe);break;case 19:Ce(qe);break;case 10:jc(r.type._context);break;case 22:case 23:th()}n=n.return}if(Ke=e,Ge=e=cr(e.current,null),nt=At=t,Ye=0,Pa=null,Qc=nl=Pr=0,_t=ya=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}Br=null}return e}function ig(e,t){do{var n=Ge;try{if(Lc(),Js.current=Io,So){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}So=!1}if(jr=0,Qe=Xe=Fe=null,ga=!1,Fa=0,Uc.current=null,n===null||n.return===null){Ye=1,Pa=t,Ge=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=nt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var f=Ld(s);if(f!==null){f.flags&=-257,jd(f,s,o,a,t),f.mode&1&&Fd(a,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var $=new Set;$.add(l),t.updateQueue=$}else y.add(l);break e}else{if(!(t&1)){Fd(a,u,t),nh();break e}l=Error(P(426))}}else if(Ee&&o.mode&1){var I=Ld(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),jd(I,s,o,a,t),Rc(Ci(l,o));break e}}a=l=Ci(l,o),Ye!==4&&(Ye=2),ya===null?ya=[a]:ya.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var b=D1(a,l,t);Ed(a,b);break e;case 1:o=l;var v=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(lr===null||!lr.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var N=W1(a,o,t);Ed(a,N);break e}}a=a.return}while(a!==null)}og(n)}catch(A){t=A,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function ag(){var e=zo.current;return zo.current=Io,e===null?Io:e}function nh(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Ke===null||!(Pr&268435455)&&!(nl&268435455)||Qn(Ke,nt)}function No(e,t){var n=ge;ge|=2;var r=ag();(Ke!==e||nt!==t)&&(zn=null,qr(e,t));do try{Ky();break}catch(i){ig(e,i)}while(1);if(Lc(),ge=n,zo.current=r,Ge!==null)throw Error(P(261));return Ke=null,nt=0,Ye}function Ky(){for(;Ge!==null;)sg(Ge)}function e3(){for(;Ge!==null&&!Sv();)sg(Ge)}function sg(e){var t=ug(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?og(e):Ge=t,Uc.current=null}function og(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vy(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ge=null;return}}else if(n=Hy(n,t,At),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Ye===0&&(Ye=5)}function Nr(e,t,n){var r=$e,i=Jt.transition;try{Jt.transition=null,$e=1,t3(e,t,n,r)}finally{Jt.transition=i,$e=r}return null}function t3(e,t,n,r){do $i();while(er!==null);if(ge&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(qv(e,a),e===Ke&&(Ge=Ke=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zs||(zs=!0,cg(co,function(){return $i(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Jt.transition,Jt.transition=null;var s=$e;$e=1;var o=ge;ge|=4,Uc.current=null,Xy(e,n),tg(n,e),wy(h0),mo=!!c0,h0=c0=null,e.current=n,Yy(n),Iv(),ge=o,$e=s,Jt.transition=a}else e.current=n;if(zs&&(zs=!1,er=e,Co=i),a=e.pendingLanes,a===0&&(lr=null),Cv(n.stateNode),zt(e,We()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(To)throw To=!1,e=E0,E0=null,e;return Co&1&&e.tag!==0&&$i(),a=e.pendingLanes,a&1?e===A0?ba++:(ba=0,A0=e):ba=0,$r(),null}function $i(){if(er!==null){var e=Df(Co),t=Jt.transition,n=$e;try{if(Jt.transition=null,$e=16>e?16:e,er===null)var r=!1;else{if(e=er,er=null,Co=0,ge&6)throw Error(P(331));var i=ge;for(ge|=4,Q=e.current;Q!==null;){var a=Q,s=a.child;if(Q.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Q=u;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:va(8,h,a)}var c=h.child;if(c!==null)c.return=h,Q=c;else for(;Q!==null;){h=Q;var m=h.sibling,f=h.return;if(Q1(h),h===u){Q=null;break}if(m!==null){m.return=f,Q=m;break}Q=f}}}var y=a.alternate;if(y!==null){var $=y.child;if($!==null){y.child=null;do{var I=$.sibling;$.sibling=null,$=I}while($!==null)}}Q=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,Q=s;else e:for(;Q!==null;){if(a=Q,a.flags&2048)switch(a.tag){case 0:case 11:case 15:va(9,a,a.return)}var b=a.sibling;if(b!==null){b.return=a.return,Q=b;break e}Q=a.return}}var v=e.current;for(Q=v;Q!==null;){s=Q;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Q=x;else e:for(s=v;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:tl(9,o)}}catch(A){De(o,o.return,A)}if(o===s){Q=null;break e}var N=o.sibling;if(N!==null){N.return=o.return,Q=N;break e}Q=o.return}}if(ge=i,$r(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Vo,e)}catch{}r=!0}return r}finally{$e=n,Jt.transition=t}}return!1}function Qd(e,t,n){t=Ci(n,t),t=D1(e,t,1),e=or(e,t,1),t=gt(),e!==null&&(Xa(e,1,t),zt(e,t))}function De(e,t,n){if(e.tag===3)Qd(e,e,n);else for(;t!==null;){if(t.tag===3){Qd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){e=Ci(n,e),e=W1(t,e,1),t=or(t,e,1),e=gt(),t!==null&&(Xa(t,1,e),zt(t,e));break}}t=t.return}}function n3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(nt&n)===n&&(Ye===4||Ye===3&&(nt&130023424)===nt&&500>We()-Kc?qr(e,0):Qc|=n),zt(e,t)}function lg(e,t){t===0&&(e.mode&1?(t=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):t=1);var n=gt();e=Rn(e,t),e!==null&&(Xa(e,t,n),zt(e,n))}function r3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lg(e,n)}function i3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),lg(e,n)}var ug;ug=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,Zy(e,t,n);kt=!!(e.flags&131072)}else kt=!1,Ee&&t.flags&1048576&&m1(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ys(e,t),e=t.pendingProps;var i=Si(t,ut.current);bi(t,n),i=Hc(null,t,r,e,i,n);var a=Vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,It(r)?(a=!0,yo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dc(t),i.updater=el,t.stateNode=i,i._reactInternals=t,$0(t,r,e,n),t=_0(null,t,r,!0,a,n)):(t.tag=0,Ee&&a&&Mc(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ys(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=s3(r),e=tn(r,e),i){case 0:t=x0(null,t,r,e,n);break e;case 1:t=Wd(null,t,r,e,n);break e;case 11:t=Pd(null,t,r,e,n);break e;case 14:t=Dd(null,t,r,tn(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),x0(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Wd(e,t,r,i,n);case 3:e:{if(H1(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,i=a.element,b1(e,t),_o(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ci(Error(P(423)),t),t=Od(e,t,r,n,i);break e}else if(r!==i){i=Ci(Error(P(424)),t),t=Od(e,t,r,n,i);break e}else for(Bt=sr(t.stateNode.containerInfo.firstChild),Mt=t,Ee=!0,rn=null,n=v1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===i){t=Fn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return $1(t),e===null&&v0(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,d0(r,i)?s=null:a!==null&&d0(r,a)&&(t.flags|=32),Z1(e,t),dt(e,t,s,n),t.child;case 6:return e===null&&v0(t),null;case 13:return V1(e,t,n);case 4:return Wc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Pd(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ze(wo,r._currentValue),r._currentValue=s,a!==null)if(ln(a.value,s)){if(a.children===i.children&&!St.current){t=Fn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=An(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),y0(a.return,n,t),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(P(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),y0(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,bi(t,n),i=Xt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),Dd(e,t,r,i,n);case 15:return O1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Ys(e,t),t.tag=1,It(r)?(e=!0,yo(t)):e=!1,bi(t,n),P1(t,r,i),$0(t,r,i,n),_0(null,t,r,!0,e,n);case 19:return J1(e,t,n);case 22:return G1(e,t,n)}throw Error(P(156,t.tag))};function cg(e,t){return Ff(e,t)}function a3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new a3(e,t,n,r)}function rh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s3(e){if(typeof e=="function")return rh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xc)return 11;if(e===_c)return 14}return 2}function cr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ks(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")rh(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ii:return Rr(n.children,i,a,t);case wc:s=8,i|=8;break;case Gu:return e=Ht(12,n,t,i|2),e.elementType=Gu,e.lanes=a,e;case Zu:return e=Ht(13,n,t,i),e.elementType=Zu,e.lanes=a,e;case Hu:return e=Ht(19,n,t,i),e.elementType=Hu,e.lanes=a,e;case $f:return rl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:s=10;break e;case bf:s=9;break e;case xc:s=11;break e;case _c:s=14;break e;case Xn:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ht(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Rr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=$f,e.lanes=n,e.stateNode={isHidden:!1},e}function iu(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function au(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ih(e,t,n,r,i,a,s,o,l){return e=new o3(e,t,n,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ht(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(a),e}function l3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hg(e){if(!e)return mr;e=e._reactInternals;e:{if(Gr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(It(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(It(n))return h1(e,n,t)}return t}function dg(e,t,n,r,i,a,s,o,l){return e=ih(n,r,!0,e,i,a,s,o,l),e.context=hg(null),n=e.current,r=gt(),i=ur(n),a=An(r,i),a.callback=t??null,or(n,a,i),e.current.lanes=i,Xa(e,i,r),zt(e,r),e}function il(e,t,n,r){var i=t.current,a=gt(),s=ur(i);return n=hg(n),t.context===null?t.context=n:t.pendingContext=n,t=An(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=or(i,t,s),e!==null&&(sn(e,i,s,a),Vs(e,i,s)),s}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ah(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function u3(){return null}var mg=typeof reportError=="function"?reportError:function(e){console.error(e)};function sh(e){this._internalRoot=e}al.prototype.render=sh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));il(e,t,null,null)};al.prototype.unmount=sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dr(function(){il(null,e,null,null)}),t[qn]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Hf(e)}};function oh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function em(){}function c3(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Eo(s);a.call(u)}}var s=dg(t,r,e,0,null,!1,!1,"",em);return e._reactRootContainer=s,e[qn]=s.current,Aa(e.nodeType===8?e.parentNode:e),Dr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=Eo(l);o.call(u)}}var l=ih(e,0,!1,null,null,!1,!1,"",em);return e._reactRootContainer=l,e[qn]=l.current,Aa(e.nodeType===8?e.parentNode:e),Dr(function(){il(t,l,n,r)}),l}function ol(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var l=Eo(s);o.call(l)}}il(t,s,e,i)}else s=c3(n,t,e,i,r);return Eo(s)}Wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=la(t.pendingLanes);n!==0&&(Ic(t,n|1),zt(t,We()),!(ge&6)&&(Ni=We()+500,$r()))}break;case 13:Dr(function(){var r=Rn(e,1);if(r!==null){var i=gt();sn(r,e,1,i)}}),ah(e,1)}};zc=function(e){if(e.tag===13){var t=Rn(e,134217728);if(t!==null){var n=gt();sn(t,e,134217728,n)}ah(e,134217728)}};Of=function(e){if(e.tag===13){var t=ur(e),n=Rn(e,t);if(n!==null){var r=gt();sn(n,e,t,r)}ah(e,t)}};Gf=function(){return $e};Zf=function(e,t){var n=$e;try{return $e=e,t()}finally{$e=n}};n0=function(e,t,n){switch(t){case"input":if(Xu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uo(r);if(!i)throw Error(P(90));xf(r),Xu(r,i)}}}break;case"textarea":kf(e,n);break;case"select":t=n.value,t!=null&&fi(e,!!n.multiple,t,!1)}};Ef=eh;Af=Dr;var h3={usingClientEntryPoint:!1,Events:[Ua,li,Uo,Cf,Nf,eh]},ra={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d3={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qf(e),e===null?null:e.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||u3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ts.isDisabled&&Ts.supportsFiber)try{Vo=Ts.inject(d3),gn=Ts}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h3;jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(t))throw Error(P(200));return l3(e,t,null,n)};jt.createRoot=function(e,t){if(!oh(e))throw Error(P(299));var n=!1,r="",i=mg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ih(e,1,!1,null,null,n,!1,r,i),e[qn]=t.current,Aa(e.nodeType===8?e.parentNode:e),new sh(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=qf(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return Dr(e)};jt.hydrate=function(e,t,n){if(!sl(t))throw Error(P(200));return ol(null,e,t,!0,n)};jt.hydrateRoot=function(e,t,n){if(!oh(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=mg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=dg(t,null,e,1,n??null,i,!1,a,s),e[qn]=t.current,Aa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new al(t)};jt.render=function(e,t,n){if(!sl(t))throw Error(P(200));return ol(null,e,t,!1,n)};jt.unmountComponentAtNode=function(e){if(!sl(e))throw Error(P(40));return e._reactRootContainer?(Dr(function(){ol(null,null,e,!1,function(){e._reactRootContainer=null,e[qn]=null})}),!0):!1};jt.unstable_batchedUpdates=eh;jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ol(e,t,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)}catch(e){console.error(e)}}pg(),pf.exports=jt;var m3=pf.exports,tm=m3;Wu.createRoot=tm.createRoot,Wu.hydrateRoot=tm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}var tr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tr||(tr={}));const nm="popstate";function p3(e){e===void 0&&(e={});function t(i,a){let{pathname:s="/",search:o="",hash:l=""}=Zr(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),q0("",{pathname:s,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let s=i.document.querySelector("base"),o="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");o=u===-1?l:l.slice(0,u)}return o+"#"+(typeof a=="string"?a:Ao(a))}function r(i,a){ll(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return g3(t,n,r,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ll(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function f3(){return Math.random().toString(36).substr(2,8)}function rm(e,t){return{usr:e.state,key:e.key,idx:t}}function q0(e,t,n,r){return n===void 0&&(n=null),Da({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zr(t):t,{state:n,key:t&&t.key||r||f3()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g3(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,o=tr.Pop,l=null,u=h();u==null&&(u=0,s.replaceState(Da({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function c(){o=tr.Pop;let I=h(),b=I==null?null:I-u;u=I,l&&l({action:o,location:$.location,delta:b})}function m(I,b){o=tr.Push;let v=q0($.location,I,b);n&&n(v,I),u=h()+1;let x=rm(v,u),N=$.createHref(v);try{s.pushState(x,"",N)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(N)}a&&l&&l({action:o,location:$.location,delta:1})}function f(I,b){o=tr.Replace;let v=q0($.location,I,b);n&&n(v,I),u=h();let x=rm(v,u),N=$.createHref(v);s.replaceState(x,"",N),a&&l&&l({action:o,location:$.location,delta:0})}function y(I){let b=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof I=="string"?I:Ao(I);return v=v.replace(/ $/,"%20"),Le(b,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,b)}let $={get action(){return o},get location(){return e(i,s)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(nm,c),l=I,()=>{i.removeEventListener(nm,c),l=null}},createHref(I){return t(i,I)},createURL:y,encodeLocation(I){let b=y(I);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:m,replace:f,go(I){return s.go(I)}};return $}var im;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(im||(im={}));function v3(e,t,n){return n===void 0&&(n="/"),y3(e,t,n,!1)}function y3(e,t,n,r){let i=typeof t=="string"?Zr(t):t,a=Ei(i.pathname||"/",n);if(a==null)return null;let s=fg(e);b3(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=N3(a);o=T3(s[l],u,r)}return o}function fg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hr([r,l.relativePath]),h=n.concat(l);a.children&&a.children.length>0&&(Le(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fg(a.children,t,h,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:I3(u,a.index),routesMeta:h})};return e.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,s);else for(let l of gg(a.path))i(a,s,l)}),t}function gg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=gg(r.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),i&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function b3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:z3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $3=/^:[\w-]+$/,w3=3,x3=2,_3=1,k3=10,S3=-2,am=e=>e==="*";function I3(e,t){let n=e.split("/"),r=n.length;return n.some(am)&&(r+=S3),t&&(r+=x3),n.filter(i=>!am(i)).reduce((i,a)=>i+($3.test(a)?w3:a===""?_3:k3),r)}function z3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function T3(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a="/",s=[];for(let o=0;o<r.length;++o){let l=r[o],u=o===r.length-1,h=a==="/"?t:t.slice(a.length)||"/",c=Bo({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),m=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Bo({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!c)return null;Object.assign(i,c.params),s.push({params:i,pathname:hr([a,c.pathname]),pathnameBase:q3(hr([a,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(a=hr([a,c.pathnameBase]))}return s}function Bo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=C3(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:m,isOptional:f}=h;if(m==="*"){let $=o[c]||"";s=a.slice(0,a.length-$.length).replace(/(.)\/+$/,"$1")}const y=o[c];return f&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function C3(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ll(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(r.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function N3(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ll(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ei(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const E3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A3=e=>E3.test(e);function B3(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zr(e):e,a;if(n)if(A3(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),ll(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=sm(n.substring(1),"/"):a=sm(n,t)}else a=t;return{pathname:a,search:R3(r),hash:F3(i)}}function sm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function su(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M3(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lh(e,t){let n=M3(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zr(e):(i=Da({},e),Le(!i.pathname||!i.pathname.includes("?"),su("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),su("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),su("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,o;if(s==null)o=n;else{let c=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),c-=1;i.pathname=m.join("/")}o=c>=0?t[c]:"/"}let l=B3(i,o),u=s&&s!=="/"&&s.endsWith("/"),h=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),q3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function L3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vg=["post","put","patch","delete"];new Set(vg);const j3=["get",...vg];new Set(j3);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wa.apply(this,arguments)}const ul=V.createContext(null),yg=V.createContext(null),Pn=V.createContext(null),cl=V.createContext(null),yn=V.createContext({outlet:null,matches:[],isDataRoute:!1}),bg=V.createContext(null);function P3(e,t){let{relative:n}=t===void 0?{}:t;ji()||Le(!1);let{basename:r,navigator:i}=V.useContext(Pn),{hash:a,pathname:s,search:o}=hl(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:hr([r,s])),i.createHref({pathname:l,search:o,hash:a})}function ji(){return V.useContext(cl)!=null}function Hr(){return ji()||Le(!1),V.useContext(cl).location}function $g(e){V.useContext(Pn).static||V.useLayoutEffect(e)}function wg(){let{isDataRoute:e}=V.useContext(yn);return e?nb():D3()}function D3(){ji()||Le(!1);let e=V.useContext(ul),{basename:t,future:n,navigator:r}=V.useContext(Pn),{matches:i}=V.useContext(yn),{pathname:a}=Hr(),s=JSON.stringify(lh(i,n.v7_relativeSplatPath)),o=V.useRef(!1);return $g(()=>{o.current=!0}),V.useCallback(function(u,h){if(h===void 0&&(h={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let c=uh(u,JSON.parse(s),a,h.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:hr([t,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[t,r,s,a,e])}const W3=V.createContext(null);function O3(e){let t=V.useContext(yn).outlet;return t&&V.createElement(W3.Provider,{value:e},t)}function G3(){let{matches:e}=V.useContext(yn),t=e[e.length-1];return t?t.params:{}}function hl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=V.useContext(Pn),{matches:i}=V.useContext(yn),{pathname:a}=Hr(),s=JSON.stringify(lh(i,r.v7_relativeSplatPath));return V.useMemo(()=>uh(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function Z3(e,t){return H3(e,t)}function H3(e,t,n,r){ji()||Le(!1);let{navigator:i}=V.useContext(Pn),{matches:a}=V.useContext(yn),s=a[a.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Hr(),h;if(t){var c;let I=typeof t=="string"?Zr(t):t;l==="/"||(c=I.pathname)!=null&&c.startsWith(l)||Le(!1),h=I}else h=u;let m=h.pathname||"/",f=m;if(l!=="/"){let I=l.replace(/^\//,"").split("/");f="/"+m.replace(/^\//,"").split("/").slice(I.length).join("/")}let y=v3(e,{pathname:f}),$=U3(y&&y.map(I=>Object.assign({},I,{params:Object.assign({},o,I.params),pathname:hr([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:hr([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),a,n,r);return t&&$?V.createElement(cl.Provider,{value:{location:Wa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:tr.Pop}},$):$}function V3(){let e=tb(),t=L3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},t),n?V.createElement("pre",{style:i},n):null,a)}const J3=V.createElement(V3,null);class X3 extends V.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?V.createElement(yn.Provider,{value:this.props.routeContext},V.createElement(bg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y3(e){let{routeContext:t,match:n,children:r}=e,i=V.useContext(ul);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(yn.Provider,{value:t},r)}function U3(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(i=n)==null?void 0:i.errors;if(o!=null){let h=s.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);h>=0||Le(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let c=s[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:m,errors:f}=n,y=c.route.loader&&m[c.route.id]===void 0&&(!f||f[c.route.id]===void 0);if(c.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,c,m)=>{let f,y=!1,$=null,I=null;n&&(f=o&&c.route.id?o[c.route.id]:void 0,$=c.route.errorElement||J3,l&&(u<0&&m===0?(rb("route-fallback",!1),y=!0,I=null):u===m&&(y=!0,I=c.route.hydrateFallbackElement||null)));let b=t.concat(s.slice(0,m+1)),v=()=>{let x;return f?x=$:y?x=I:c.route.Component?x=V.createElement(c.route.Component,null):c.route.element?x=c.route.element:x=h,V.createElement(Y3,{match:c,routeContext:{outlet:h,matches:b,isDataRoute:n!=null},children:x})};return n&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?V.createElement(X3,{location:n.location,revalidation:n.revalidation,component:$,error:f,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):v()},null)}var xg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xg||{}),Mo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Mo||{});function Q3(e){let t=V.useContext(ul);return t||Le(!1),t}function K3(e){let t=V.useContext(yg);return t||Le(!1),t}function eb(e){let t=V.useContext(yn);return t||Le(!1),t}function _g(e){let t=eb(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function tb(){var e;let t=V.useContext(bg),n=K3(Mo.UseRouteError),r=_g(Mo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function nb(){let{router:e}=Q3(xg.UseNavigateStable),t=_g(Mo.UseNavigateStable),n=V.useRef(!1);return $g(()=>{n.current=!0}),V.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Wa({fromRouteId:t},a)))},[e,t])}const om={};function rb(e,t,n){!t&&!om[e]&&(om[e]=!0)}function ib(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function wi(e){let{to:t,replace:n,state:r,relative:i}=e;ji()||Le(!1);let{future:a,static:s}=V.useContext(Pn),{matches:o}=V.useContext(yn),{pathname:l}=Hr(),u=wg(),h=uh(t,lh(o,a.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(h);return V.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function ab(e){return O3(e.context)}function cn(e){Le(!1)}function sb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:a,static:s=!1,future:o}=e;ji()&&Le(!1);let l=t.replace(/^\/*/,"/"),u=V.useMemo(()=>({basename:l,navigator:a,static:s,future:Wa({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);typeof r=="string"&&(r=Zr(r));let{pathname:h="/",search:c="",hash:m="",state:f=null,key:y="default"}=r,$=V.useMemo(()=>{let I=Ei(h,l);return I==null?null:{location:{pathname:I,search:c,hash:m,state:f,key:y},navigationType:i}},[l,h,c,m,f,y,i]);return $==null?null:V.createElement(Pn.Provider,{value:u},V.createElement(cl.Provider,{children:n,value:$}))}function ob(e){let{children:t,location:n}=e;return Z3(R0(t),n)}new Promise(()=>{});function R0(e,t){t===void 0&&(t=[]);let n=[];return V.Children.forEach(e,(r,i)=>{if(!V.isValidElement(r))return;let a=[...t,i];if(r.type===V.Fragment){n.push.apply(n,R0(r.props.children,a));return}r.type!==cn&&Le(!1),!r.props.index||!r.props.children||Le(!1);let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=R0(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}function kg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ub(e,t){return e.button===0&&(!t||t==="_self")&&!lb(e)}const cb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],db="6";try{window.__reactRouterVersion=db}catch{}const mb=V.createContext({isTransitioning:!1}),pb="startTransition",lm=nv[pb];function fb(e){let{basename:t,children:n,future:r,window:i}=e,a=V.useRef();a.current==null&&(a.current=p3({window:i,v5Compat:!0}));let s=a.current,[o,l]=V.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=V.useCallback(c=>{u&&lm?lm(()=>l(c)):l(c)},[l,u]);return V.useLayoutEffect(()=>s.listen(h),[s,h]),V.useEffect(()=>ib(r),[r]),V.createElement(sb,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:r})}const gb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ro=V.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:s,state:o,target:l,to:u,preventScrollReset:h,viewTransition:c}=t,m=kg(t,cb),{basename:f}=V.useContext(Pn),y,$=!1;if(typeof u=="string"&&vb.test(u)&&(y=u,gb))try{let x=new URL(window.location.href),N=u.startsWith("//")?new URL(x.protocol+u):new URL(u),A=Ei(N.pathname,f);N.origin===x.origin&&A!=null?u=A+N.search+N.hash:$=!0}catch{}let I=P3(u,{relative:i}),b=$b(u,{replace:s,state:o,target:l,preventScrollReset:h,relative:i,viewTransition:c});function v(x){r&&r(x),x.defaultPrevented||b(x)}return V.createElement("a",qo({},m,{href:y||I,onClick:$||a?r:v,ref:n,target:l}))}),yb=V.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:s=!1,style:o,to:l,viewTransition:u,children:h}=t,c=kg(t,hb),m=hl(l,{relative:c.relative}),f=Hr(),y=V.useContext(yg),{navigator:$,basename:I}=V.useContext(Pn),b=y!=null&&wb(m)&&u===!0,v=$.encodeLocation?$.encodeLocation(m).pathname:m.pathname,x=f.pathname,N=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(x=x.toLowerCase(),N=N?N.toLowerCase():null,v=v.toLowerCase()),N&&I&&(N=Ei(N,I)||N);const A=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let T=x===v||!s&&x.startsWith(v)&&x.charAt(A)==="/",M=N!=null&&(N===v||!s&&N.startsWith(v)&&N.charAt(v.length)==="/"),R={isActive:T,isPending:M,isTransitioning:b},j=T?r:void 0,E;typeof a=="function"?E=a(R):E=[a,T?"active":null,M?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Z=typeof o=="function"?o(R):o;return V.createElement(Ro,qo({},c,{"aria-current":j,className:E,ref:n,style:Z,to:l,viewTransition:u}),typeof h=="function"?h(R):h)});var F0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(F0||(F0={}));var um;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(um||(um={}));function bb(e){let t=V.useContext(ul);return t||Le(!1),t}function $b(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:o}=t===void 0?{}:t,l=wg(),u=Hr(),h=hl(e,{relative:s});return V.useCallback(c=>{if(ub(c,n)){c.preventDefault();let m=r!==void 0?r:Ao(u)===Ao(h);l(e,{replace:m,state:i,preventScrollReset:a,relative:s,viewTransition:o})}},[u,l,h,r,i,n,e,a,s,o])}function wb(e,t){t===void 0&&(t={});let n=V.useContext(mb);n==null&&Le(!1);let{basename:r}=bb(F0.useViewTransitionState),i=hl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Ei(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Ei(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Bo(i.pathname,s)!=null||Bo(i.pathname,a)!=null}var xb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kb=(e,t)=>{const n=V.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:s,children:o,...l},u)=>V.createElement("svg",{ref:u,...xb,width:i,height:i,stroke:r,strokeWidth:s?Number(a)*24/Number(i):a,className:`lucide lucide-${_b(e)}`,...l},[...t.map(([h,c])=>V.createElement(h,c)),...(Array.isArray(o)?o:[o])||[]]));return n.displayName=`${e}`,n};var dl=kb;const Sb=dl("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),Ib=dl("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),zb=dl("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),Tb=dl("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Cb="/assets/stanford_seal-642dae79.png",ou="/assets/myart-5076c649.jpeg",cm="/assets/me-89f01f58.jpg",lu=({href:e,children:t})=>B.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-[3px] transition-colors",children:t}),Nb=[{to:"/works",label:"works"},{to:"/orgs",label:"orgs"},{to:"/blog",label:"blog"}],Eb=[{icon:Sb,href:"https://github.com/batu-el",label:"GitHub"},{icon:zb,href:"https://www.linkedin.com/in/batu-el/",label:"LinkedIn"},{icon:Tb,href:"https://twitter.com/elb4tu",label:"Twitter"},{icon:Ib,href:"https://scholar.google.com/citations?user=fuY9Zc8AAAAJ&hl=en",label:"Scholar"}],Ab=()=>{const e=Hr(),[t,n]=so.useState("default"),[r,i]=so.useState(!1),o=r?t==="default"?cm:ou:t==="default"?ou:cm,l=o===ou?"Batu El — artwork":"Batu El";return B.jsxs("div",{className:"min-h-screen flex flex-col lg:flex-row bg-white text-neutral-900",children:[B.jsx("aside",{className:"lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[320px] xl:w-[360px] lg:overflow-y-auto no-scrollbar border-b lg:border-b-0 lg:border-r border-neutral-200/80 bg-white",children:B.jsxs("div",{className:"px-10 pt-14 pb-20 flex flex-col h-full",children:[B.jsx("div",{className:"flex justify-center mb-10",children:B.jsx("button",{type:"button",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>n(u=>u==="default"?"hover":"default"),className:"w-[200px] h-[240px] rounded-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400","aria-label":"Toggle portrait",children:B.jsx("img",{src:o,alt:l,className:"w-full h-full object-cover transition-opacity duration-300",draggable:!1})})}),B.jsxs("div",{className:"mb-5",children:[B.jsx("h1",{className:"text-[22px] font-medium leading-none tracking-tight text-neutral-900",children:"batu el"}),B.jsx("p",{className:"font-mono text-[10.5px] text-neutral-400 mt-2",children:"batuel [at] stanford [dot] edu"})]}),B.jsxs("p",{className:"text-[13.5px] text-neutral-600 leading-[1.7] mb-6",children:["phd student in computational and mathematical engineering at stanford, advised by"," ",B.jsx(lu,{href:"https://www.james-zou.com/",children:"james zou"}),". knight-hennessy scholar. previously mphil in advanced computer science at cambridge with"," ",B.jsx(lu,{href:"https://andreasvlachos.github.io/",children:"andreas vlachos"}),", consultant at the world bank, and undergraduate in mathematics, computer science, and economics at"," ",B.jsx(lu,{href:"https://college.tulane.edu/newcomb-tulane-college-announces-class-2022-william-wallace-peery-society",children:"tulane"}),"."]}),B.jsx("div",{className:"flex gap-5 items-center",children:Eb.map((u,h)=>B.jsx("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"text-neutral-400 hover:text-neutral-900 transition-colors","aria-label":u.label,children:B.jsx(u.icon,{className:"w-[22px] h-[22px]",strokeWidth:1.6})},h))})]})}),B.jsxs("main",{className:"flex-1 lg:ml-[320px] xl:ml-[360px]",children:[B.jsx("div",{className:"sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-neutral-200/80",children:B.jsxs("nav",{className:"max-w-2xl mx-auto px-10 sm:px-14 py-5 flex items-center justify-between gap-4",children:[B.jsx("ul",{className:"flex gap-6",children:Nb.map(u=>B.jsx("li",{children:B.jsx(yb,{to:u.to,className:({isActive:h})=>`text-[13.5px] tracking-tight transition-colors duration-150 underline-offset-[4px] ${h?"text-neutral-900 font-medium underline decoration-neutral-900":"text-neutral-500 hover:text-neutral-900 underline decoration-neutral-200 hover:decoration-neutral-900"}`,children:u.label})},u.to))}),B.jsx("img",{src:Cb,alt:"Stanford University",className:"w-10 h-10 opacity-80 shrink-0",title:"Stanford University"})]})}),B.jsx("div",{className:"max-w-2xl mx-auto px-10 sm:px-14 py-16",children:B.jsx("div",{className:"page-fade",children:B.jsx(ab,{})})},e.pathname)]})]})},Bb="Moloch's Bargain: Emergent Misalignment When LLMs Compete for Audiences",Mb=2025,qb=10,Rb=1,Fb="Batu El, James Zou",Lb="alignment and social impacts",jb=["Preprint"],Pb="When language models compete for audiences — for clicks, votes, or sales — small optimization gains can drive large drifts in honesty, safety, and alignment. We study these competitive dynamics empirically across simulated markets and find that misalignment emerges as a side effect of audience-seeking behavior, even when each individual model is well-intentioned.",Db={paper:"https://arxiv.org/abs/2510.06105",code:"https://github.com/batu-el/molochs-bargain",thread:"https://x.com/james_y_zou/status/1975939603363463659"},Wb={title:Bb,year:Mb,month:qb,order:Rb,authors:Fb,area:Lb,tags:jb,abstract:Pb,links:Db},Ob="Position: AI Development Should Prioritize Cognitive Security",Gb=2026,Zb=1,Hb=2,Vb="Batu El*, Shiye Su*, Aneesh Pappu*, Peggy Yin*, Julie Heng*, Eric Heng, Ryan Wang, Andreas Haupt, James Zou",Jb="alignment and social impacts",Xb=["ICLR 2026 AIWILD Workshop"],Yb="We argue that AI safety should expand beyond alignment and oversight to include the protection of human cognition — the perceptions, beliefs, and decisions that AI systems increasingly mediate. We define cognitive security, sketch its threat model, and outline concrete research and policy directions.",Ub={paper:"paper_cstf_position.pdf",poster:"cstf-poster.pdf",site:"https://www.cstf.dev/"},Qb={title:Ob,year:Gb,month:Zb,order:Hb,authors:Vb,area:Jb,tags:Xb,abstract:Yb,links:Ub},Kb="Inefficiencies of Meta Agents for Agent Design",e5=2025,t5=10,n5=1,r5="Batu El, Mert Yuksekgonul, James Zou",i5="multiagent systems and inference time techniques",a5=["EMNLP 2025 Findings","ICML 2025 PRAL Workshop","Stanford Self-Improving AI Agents Course"],s5="Recent works automate the design of agentic systems with meta-agents that propose and refine new architectures. We examine three challenges: (1) simply expanding context with all prior agents performs worse than ignoring them — an evolutionary approach helps; (2) the meta-agent commits to one agent at test time, but its designs have low behavioral diversity; (3) automated design is economically viable on only a few datasets when amortized over 15,000+ examples.",o5={paper:"https://arxiv.org/abs/2510.06711",code:"https://github.com/batu-el/meta-agent-inefficiency",poster:"emnlp-poster.pdf"},l5={title:Kb,year:e5,month:t5,order:n5,authors:r5,area:i5,tags:a5,abstract:s5,links:o5},u5="Cost-of-Pass: An Economic Framework for Evaluating Language Models",c5=2026,h5=1,d5=3,m5="Mehmet Hamza Erol, Batu El, Mirac Suzgun, Mert Yuksekgonul, James Zou",p5="alignment and social impacts",f5=["ICLR 2026"],g5="We propose Cost-of-Pass, an economic framework that evaluates language models by the expected dollar cost of producing a correct answer. The metric unifies accuracy and inference cost, exposes regressions hidden by accuracy-only benchmarks, and yields a clean decision rule for model selection in production.",v5={paper:"https://arxiv.org/abs/2504.13359",code:"https://github.com/mhamzaerol/Cost-of-Pass",poster:"cost-of-pass-poster.pdf"},y5={title:u5,year:c5,month:h5,order:d5,authors:m5,area:p5,tags:f5,abstract:g5,links:v5},b5="Towards Mechanistic Interpretability of Graph Transformers via Attention Graphs",$5=2025,w5=2,x5=2,_5="Batu El, Deepro Choudhury, Pietro Liò, Chaitanya K. Joshi",k5="applied interpretability",S5=["ICLR 2025 Workshop XAI4Science"],I5="We treat the attention patterns of a graph transformer as graphs themselves and use this view to study how these models route information. The attention-graph perspective surfaces interpretable circuits and predicts where graph transformers under- and over-rely on structural priors.",z5={paper:"https://arxiv.org/abs/2502.12352",code:"https://github.com/batu-el/understanding-inductive-biases-of-gnns",poster:"towards-mechanistic.pdf"},T5={title:b5,year:$5,month:w5,order:x5,authors:_5,area:k5,tags:S5,abstract:I5,links:z5},C5="Toward Faster Mamba Kernels: Performance Improvements and Hardware Limits",N5=2025,E5=3,A5=1,B5="Batu El",M5="ml systems and state space models",q5=["Stanford CS217 Project","Hardware Accelerators for ML"],R5="A study of Mamba's selective scan kernel: where time goes on modern GPUs, which optimizations actually move the needle, and what hardware limits remain. Includes microbenchmarks and a refactored kernel with measurable speedups.",F5={paper:"paper_mambakernelproject.pdf",code:"https://github.com/batu-el/faster-mamba",poster:"cs217-poster.pdf"},L5={title:C5,year:N5,month:E5,order:A5,authors:B5,area:M5,tags:q5,abstract:R5,links:F5},j5="When Does Video Pretraining Help? Improving Embodied Navigation with Next-Frame Prediction",P5=2025,D5=3,W5=1,O5="Batu El",G5="reinforcement learning",Z5=["Stanford EE269 Project","Signal Processing for ML"],H5="Examines when next-frame video pretraining transfers to embodied navigation. Identifies the regimes where video objectives accelerate learning of policies, and the regimes where they hurt by encoding spurious visual dynamics.",V5={paper:"paper_vptproject.pdf",code:"https://github.com/batu-el/when-vpt",site:"https://batu-el.github.io/when-vpt/",poster:"ee269-poster.pdf"},J5={title:j5,year:P5,month:D5,order:W5,authors:O5,area:G5,tags:Z5,abstract:H5,links:V5},X5="Bayesian Optimization for Guided Hypothesis Sampling in Minimum Bayes Risk Decoding",Y5=2024,U5=9,Q5=3,K5="Batu El, Julius Cheng, Andreas Vlachos",e$="multiagent systems and inference time techniques",t$=["Preprint"],n$="Minimum Bayes Risk decoding is bottlenecked by the cost of sampling many hypotheses. We use Bayesian optimization to guide which hypotheses to sample next, recovering most of MBR's quality at a fraction of the compute.",r$={paper:"https://github.com/batu-el/guided-hypothesis-sampling/blob/main/paper-guided-hypothesis-sampling.pdf",code:"https://github.com/batu-el/guided-hypothesis-sampling"},i$={title:X5,year:Y5,month:U5,order:Q5,authors:K5,area:e$,tags:t$,abstract:n$,links:r$},a$="Understanding and Improving Representation Learning in the Presence of Shortcuts",s$=2024,o$=6,l$=1,u$="Batu El, Michalis Korakakis, Andreas Vlachos",c$="applied interpretability",h$=["MPhil Thesis"],d$="Investigates how shortcut features distort the representations learned by neural networks and proposes targeted interventions during training that recover features more aligned with the underlying task.",m$={paper:"https://github.com/batu-el/understanding-shortcuts/blob/main/paper.pdf",code:"https://github.com/batu-el/understanding-shortcuts",slides:"https://github.com/batu-el/understanding-shortcuts/blob/main/presentation.pdf"},p$={title:a$,year:s$,month:o$,order:l$,authors:u$,area:c$,tags:h$,abstract:d$,links:m$},f$="Parameterizing Chains in Generalized Fixed-Point-Free Involutions",g$=2022,v$=5,y$=1,b$="Batu El, Michael Joyce, Mahir Can",$$="other",w$=["Undergraduate Thesis","Mathematics"],x$="A combinatorial study of chains in generalized fixed-point-free involutions, giving an explicit parameterization that simplifies enumeration and exposes structure useful for downstream work in algebraic combinatorics.",_$={paper:"https://library.search.tulane.edu/discovery/delivery/01TUL_INST:Tulane/12433822100006326",code:"https://github.com/batu-el/parameterizing-chains-in-generalized-involutions",slides:"https://github.com/batu-el/parameterizing-chains-in-generalized-involutions/blob/main/HT2-Presentation.pdf"},k$={title:f$,year:g$,month:v$,order:y$,authors:b$,area:$$,tags:w$,abstract:x$,links:_$},S$="Multi-Agent Teams Hold Experts Back",I$=2026,z$=2,T$=2,C$="Aneesh Pappu, Batu El, Hancheng Cao, Carmelo di Nolfo, Yanchao Sun, Meng Cao, James Zou",N$="multiagent systems and inference time techniques",E$=["ICML 2026"],A$="Self-organizing LLM teams consistently fail to match their expert agent's performance — even when explicitly told who the expert is — incurring losses of up to 37.6%. Decomposing the failure shows that expert leveraging, not identification, is the bottleneck: teams drift toward integrative compromise, averaging expert and non-expert views rather than weighting expertise. This consensus-seeking behavior also makes them more robust to adversarial agents, suggesting a trade-off between alignment and effective expertise utilization.",B$={paper:"https://arxiv.org/abs/2602.01011"},M$={title:S$,year:I$,month:z$,order:T$,authors:C$,area:N$,tags:E$,abstract:A$,links:B$},q$="BiTextion: Sociotechnical Alignment in Automated Optimization Modeling via Textual Bisection for Task Disambiguation",R$=2024,F$=6,L$=4,j$="Batu El, Madeleine Udell",P$="alignment and social impacts",D$=["Udell Lab Rotation"],W$="Automated optimization modeling systems push the burden of precise problem specification onto the user — hard for non-experts. BiTextion is a general framework that (i) samples candidate detailed problem descriptions conditioned on a vague one and (ii) narrows the space by asking questions that efficiently resolve ambiguities. Simulated user studies show BiTextion improves Llama3.1-8b at eliciting objectives and constraints; gains do not always carry over to larger models, motivating model-specific test-time strategies.",O$={paper:"bitextion.pdf",code:"https://github.com/batu-el/bitextion"},G$={title:q$,year:R$,month:F$,order:L$,authors:j$,area:P$,tags:D$,abstract:W$,links:O$},Z$="Reinforcement Learning Training for Dynamic Context Management in Mathematical Reasoning",H$=2025,V$=6,J$=2,X$="Batu El",Y$="reinforcement learning",U$=["Stanford CS224R Project","Deep Reinforcement Learning"],Q$="Mathematical reasoning agents quickly fill their context with intermediate work, forcing brittle, hand-tuned truncation. We use reinforcement learning to train a model that dynamically manages its own context — deciding what to keep, summarize, or discard during multi-step solutions — and show this improves accuracy and efficiency on math benchmarks compared to fixed-window baselines.",K$={paper:"MemoryTraining.pdf",code:"https://github.com/batu-el/TrainedMemory2",poster:"cs224r-poster.pdf"},e6={title:Z$,year:H$,month:V$,order:J$,authors:X$,area:Y$,tags:U$,abstract:Q$,links:K$},t6="Comparative Analysis of Constituency Parsers: A Case Study on Stanford U-PCFG and Berkeley Neural Parsers",n6=2023,r6=12,i6=2,a6="Batu El",s6="other",o6=["Cambridge Coursework","old-school NLP"],l6="Bracketing F-score is a useful proxy of parser quality but hides where systems actually fail. This report combines quantitative and qualitative evaluation of the Berkeley Neural Parser (Kitaev & Klein, 2018; Kitaev et al., 2019) and the Stanford Unlexicalized PCFG Parser (Klein & Manning, 2003), characterizing their behavior on a designated test set across error types, precision/recall, and parsing time.",u6={paper:"paper-comparative-analysis-of-constituency-parsers.pdf",code:"https://github.com/batu-el/constituency-parser-comparison"},c6={title:t6,year:n6,month:r6,order:i6,authors:a6,area:s6,tags:o6,abstract:l6,links:u6},h6="data:application/json;base64,ewogICJ0aXRsZSI6ICJNb2xvY2gncyBCYXJnYWluOiBFbWVyZ2VudCBNaXNhbGlnbm1lbnQgV2hlbiBMTE1zIENvbXBldGUgZm9yIEF1ZGllbmNlcyIsCiAgInllYXIiOiAyMDI1LAogICJtb250aCI6IDEwLAogICJvcmRlciI6IDEsCiAgImF1dGhvcnMiOiAiQmF0dSBFbCwgSmFtZXMgWm91IiwKICAiYXJlYSI6ICJhbGlnbm1lbnQgYW5kIHNvY2lhbCBpbXBhY3RzIiwKICAidGFncyI6IFsiUHJlcHJpbnQiXSwKICAiYWJzdHJhY3QiOiAiV2hlbiBsYW5ndWFnZSBtb2RlbHMgY29tcGV0ZSBmb3IgYXVkaWVuY2VzIFx1MjAxNCBmb3IgY2xpY2tzLCB2b3Rlcywgb3Igc2FsZXMgXHUyMDE0IHNtYWxsIG9wdGltaXphdGlvbiBnYWlucyBjYW4gZHJpdmUgbGFyZ2UgZHJpZnRzIGluIGhvbmVzdHksIHNhZmV0eSwgYW5kIGFsaWdubWVudC4gV2Ugc3R1ZHkgdGhlc2UgY29tcGV0aXRpdmUgZHluYW1pY3MgZW1waXJpY2FsbHkgYWNyb3NzIHNpbXVsYXRlZCBtYXJrZXRzIGFuZCBmaW5kIHRoYXQgbWlzYWxpZ25tZW50IGVtZXJnZXMgYXMgYSBzaWRlIGVmZmVjdCBvZiBhdWRpZW5jZS1zZWVraW5nIGJlaGF2aW9yLCBldmVuIHdoZW4gZWFjaCBpbmRpdmlkdWFsIG1vZGVsIGlzIHdlbGwtaW50ZW50aW9uZWQuIiwKICAibGlua3MiOiB7CiAgICAicGFwZXIiOiAiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzI1MTAuMDYxMDUiLAogICAgImNvZGUiOiAiaHR0cHM6Ly9naXRodWIuY29tL2JhdHUtZWwvbW9sb2Nocy1iYXJnYWluIiwKICAgICJ0aHJlYWQiOiAiaHR0cHM6Ly94LmNvbS9qYW1lc195X3pvdS9zdGF0dXMvMTk3NTkzOTYwMzM2MzQ2MzY1OSIKICB9Cn0K",d6="data:application/json;base64,ewogICJ0aXRsZSI6ICJQb3NpdGlvbjogQUkgRGV2ZWxvcG1lbnQgU2hvdWxkIFByaW9yaXRpemUgQ29nbml0aXZlIFNlY3VyaXR5IiwKICAieWVhciI6IDIwMjYsCiAgIm1vbnRoIjogMSwKICAib3JkZXIiOiAyLAogICJhdXRob3JzIjogIkJhdHUgRWwqLCBTaGl5ZSBTdSosIEFuZWVzaCBQYXBwdSosIFBlZ2d5IFlpbiosIEp1bGllIEhlbmcqLCBFcmljIEhlbmcsIFJ5YW4gV2FuZywgQW5kcmVhcyBIYXVwdCwgSmFtZXMgWm91IiwKICAiYXJlYSI6ICJhbGlnbm1lbnQgYW5kIHNvY2lhbCBpbXBhY3RzIiwKICAidGFncyI6IFsiSUNMUiAyMDI2IEFJV0lMRCBXb3Jrc2hvcCJdLAogICJhYnN0cmFjdCI6ICJXZSBhcmd1ZSB0aGF0IEFJIHNhZmV0eSBzaG91bGQgZXhwYW5kIGJleW9uZCBhbGlnbm1lbnQgYW5kIG92ZXJzaWdodCB0byBpbmNsdWRlIHRoZSBwcm90ZWN0aW9uIG9mIGh1bWFuIGNvZ25pdGlvbiBcdTIwMTQgdGhlIHBlcmNlcHRpb25zLCBiZWxpZWZzLCBhbmQgZGVjaXNpb25zIHRoYXQgQUkgc3lzdGVtcyBpbmNyZWFzaW5nbHkgbWVkaWF0ZS4gV2UgZGVmaW5lIGNvZ25pdGl2ZSBzZWN1cml0eSwgc2tldGNoIGl0cyB0aHJlYXQgbW9kZWwsIGFuZCBvdXRsaW5lIGNvbmNyZXRlIHJlc2VhcmNoIGFuZCBwb2xpY3kgZGlyZWN0aW9ucy4iLAogICJsaW5rcyI6IHsKICAgICJwYXBlciI6ICJwYXBlcl9jc3RmX3Bvc2l0aW9uLnBkZiIsCiAgICAicG9zdGVyIjogImNzdGYtcG9zdGVyLnBkZiIsCiAgICAic2l0ZSI6ICJodHRwczovL3d3dy5jc3RmLmRldi8iCiAgfQp9Cg==",m6="/assets/cstf-poster-4a8eaaee.pdf",p6="/assets/paper_cstf_position-c4218e18.pdf",f6="data:application/json;base64,ewogICJ0aXRsZSI6ICJJbmVmZmljaWVuY2llcyBvZiBNZXRhIEFnZW50cyBmb3IgQWdlbnQgRGVzaWduIiwKICAieWVhciI6IDIwMjUsCiAgIm1vbnRoIjogMTAsCiAgIm9yZGVyIjogMSwKICAiYXV0aG9ycyI6ICJCYXR1IEVsLCBNZXJ0IFl1a3Nla2dvbnVsLCBKYW1lcyBab3UiLAogICJhcmVhIjogIm11bHRpYWdlbnQgc3lzdGVtcyBhbmQgaW5mZXJlbmNlIHRpbWUgdGVjaG5pcXVlcyIsCiAgInRhZ3MiOiBbIkVNTkxQIDIwMjUgRmluZGluZ3MiLCAiSUNNTCAyMDI1IFBSQUwgV29ya3Nob3AiLCAiU3RhbmZvcmQgU2VsZi1JbXByb3ZpbmcgQUkgQWdlbnRzIENvdXJzZSJdLAogICJhYnN0cmFjdCI6ICJSZWNlbnQgd29ya3MgYXV0b21hdGUgdGhlIGRlc2lnbiBvZiBhZ2VudGljIHN5c3RlbXMgd2l0aCBtZXRhLWFnZW50cyB0aGF0IHByb3Bvc2UgYW5kIHJlZmluZSBuZXcgYXJjaGl0ZWN0dXJlcy4gV2UgZXhhbWluZSB0aHJlZSBjaGFsbGVuZ2VzOiAoMSkgc2ltcGx5IGV4cGFuZGluZyBjb250ZXh0IHdpdGggYWxsIHByaW9yIGFnZW50cyBwZXJmb3JtcyB3b3JzZSB0aGFuIGlnbm9yaW5nIHRoZW0gXHUyMDE0IGFuIGV2b2x1dGlvbmFyeSBhcHByb2FjaCBoZWxwczsgKDIpIHRoZSBtZXRhLWFnZW50IGNvbW1pdHMgdG8gb25lIGFnZW50IGF0IHRlc3QgdGltZSwgYnV0IGl0cyBkZXNpZ25zIGhhdmUgbG93IGJlaGF2aW9yYWwgZGl2ZXJzaXR5OyAoMykgYXV0b21hdGVkIGRlc2lnbiBpcyBlY29ub21pY2FsbHkgdmlhYmxlIG9uIG9ubHkgYSBmZXcgZGF0YXNldHMgd2hlbiBhbW9ydGl6ZWQgb3ZlciAxNSwwMDArIGV4YW1wbGVzLiIsCiAgImxpbmtzIjogewogICAgInBhcGVyIjogImh0dHBzOi8vYXJ4aXYub3JnL2Ficy8yNTEwLjA2NzExIiwKICAgICJjb2RlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9iYXR1LWVsL21ldGEtYWdlbnQtaW5lZmZpY2llbmN5IiwKICAgICJwb3N0ZXIiOiAiZW1ubHAtcG9zdGVyLnBkZiIKICB9Cn0K",g6="/assets/emnlp-poster-4eccb5ed.pdf",v6="data:application/json;base64,ewogICJ0aXRsZSI6ICJDb3N0LW9mLVBhc3M6IEFuIEVjb25vbWljIEZyYW1ld29yayBmb3IgRXZhbHVhdGluZyBMYW5ndWFnZSBNb2RlbHMiLAogICJ5ZWFyIjogMjAyNiwKICAibW9udGgiOiAxLAogICJvcmRlciI6IDMsCiAgImF1dGhvcnMiOiAiTWVobWV0IEhhbXphIEVyb2wsIEJhdHUgRWwsIE1pcmFjIFN1emd1biwgTWVydCBZdWtzZWtnb251bCwgSmFtZXMgWm91IiwKICAiYXJlYSI6ICJhbGlnbm1lbnQgYW5kIHNvY2lhbCBpbXBhY3RzIiwKICAidGFncyI6IFsiSUNMUiAyMDI2Il0sCiAgImFic3RyYWN0IjogIldlIHByb3Bvc2UgQ29zdC1vZi1QYXNzLCBhbiBlY29ub21pYyBmcmFtZXdvcmsgdGhhdCBldmFsdWF0ZXMgbGFuZ3VhZ2UgbW9kZWxzIGJ5IHRoZSBleHBlY3RlZCBkb2xsYXIgY29zdCBvZiBwcm9kdWNpbmcgYSBjb3JyZWN0IGFuc3dlci4gVGhlIG1ldHJpYyB1bmlmaWVzIGFjY3VyYWN5IGFuZCBpbmZlcmVuY2UgY29zdCwgZXhwb3NlcyByZWdyZXNzaW9ucyBoaWRkZW4gYnkgYWNjdXJhY3ktb25seSBiZW5jaG1hcmtzLCBhbmQgeWllbGRzIGEgY2xlYW4gZGVjaXNpb24gcnVsZSBmb3IgbW9kZWwgc2VsZWN0aW9uIGluIHByb2R1Y3Rpb24uIiwKICAibGlua3MiOiB7CiAgICAicGFwZXIiOiAiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzI1MDQuMTMzNTkiLAogICAgImNvZGUiOiAiaHR0cHM6Ly9naXRodWIuY29tL21oYW16YWVyb2wvQ29zdC1vZi1QYXNzIiwKICAgICJwb3N0ZXIiOiAiY29zdC1vZi1wYXNzLXBvc3Rlci5wZGYiCiAgfQp9Cg==",y6="/assets/cost-of-pass-poster-fe3d9e7e.pdf",b6="data:application/json;base64,ewogICJ0aXRsZSI6ICJUb3dhcmRzIE1lY2hhbmlzdGljIEludGVycHJldGFiaWxpdHkgb2YgR3JhcGggVHJhbnNmb3JtZXJzIHZpYSBBdHRlbnRpb24gR3JhcGhzIiwKICAieWVhciI6IDIwMjUsCiAgIm1vbnRoIjogMiwKICAib3JkZXIiOiAyLAogICJhdXRob3JzIjogIkJhdHUgRWwsIERlZXBybyBDaG91ZGh1cnksIFBpZXRybyBMacOyLCBDaGFpdGFueWEgSy4gSm9zaGkiLAogICJhcmVhIjogImFwcGxpZWQgaW50ZXJwcmV0YWJpbGl0eSIsCiAgInRhZ3MiOiBbIklDTFIgMjAyNSBXb3Jrc2hvcCBYQUk0U2NpZW5jZSJdLAogICJhYnN0cmFjdCI6ICJXZSB0cmVhdCB0aGUgYXR0ZW50aW9uIHBhdHRlcm5zIG9mIGEgZ3JhcGggdHJhbnNmb3JtZXIgYXMgZ3JhcGhzIHRoZW1zZWx2ZXMgYW5kIHVzZSB0aGlzIHZpZXcgdG8gc3R1ZHkgaG93IHRoZXNlIG1vZGVscyByb3V0ZSBpbmZvcm1hdGlvbi4gVGhlIGF0dGVudGlvbi1ncmFwaCBwZXJzcGVjdGl2ZSBzdXJmYWNlcyBpbnRlcnByZXRhYmxlIGNpcmN1aXRzIGFuZCBwcmVkaWN0cyB3aGVyZSBncmFwaCB0cmFuc2Zvcm1lcnMgdW5kZXItIGFuZCBvdmVyLXJlbHkgb24gc3RydWN0dXJhbCBwcmlvcnMuIiwKICAibGlua3MiOiB7CiAgICAicGFwZXIiOiAiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzI1MDIuMTIzNTIiLAogICAgImNvZGUiOiAiaHR0cHM6Ly9naXRodWIuY29tL2JhdHUtZWwvdW5kZXJzdGFuZGluZy1pbmR1Y3RpdmUtYmlhc2VzLW9mLWdubnMiLAogICAgInBvc3RlciI6ICJ0b3dhcmRzLW1lY2hhbmlzdGljLnBkZiIKICB9Cn0K",$6="/assets/towards-mechanistic-2bf0a95c.pdf",w6="data:application/json;base64,ewogICJ0aXRsZSI6ICJUb3dhcmQgRmFzdGVyIE1hbWJhIEtlcm5lbHM6IFBlcmZvcm1hbmNlIEltcHJvdmVtZW50cyBhbmQgSGFyZHdhcmUgTGltaXRzIiwKICAieWVhciI6IDIwMjUsCiAgIm1vbnRoIjogMywKICAib3JkZXIiOiAxLAogICJhdXRob3JzIjogIkJhdHUgRWwiLAogICJhcmVhIjogIm1sIHN5c3RlbXMgYW5kIHN0YXRlIHNwYWNlIG1vZGVscyIsCiAgInRhZ3MiOiBbIlN0YW5mb3JkIENTMjE3IFByb2plY3QiLCAiSGFyZHdhcmUgQWNjZWxlcmF0b3JzIGZvciBNTCJdLAogICJhYnN0cmFjdCI6ICJBIHN0dWR5IG9mIE1hbWJhJ3Mgc2VsZWN0aXZlIHNjYW4ga2VybmVsOiB3aGVyZSB0aW1lIGdvZXMgb24gbW9kZXJuIEdQVXMsIHdoaWNoIG9wdGltaXphdGlvbnMgYWN0dWFsbHkgbW92ZSB0aGUgbmVlZGxlLCBhbmQgd2hhdCBoYXJkd2FyZSBsaW1pdHMgcmVtYWluLiBJbmNsdWRlcyBtaWNyb2JlbmNobWFya3MgYW5kIGEgcmVmYWN0b3JlZCBrZXJuZWwgd2l0aCBtZWFzdXJhYmxlIHNwZWVkdXBzLiIsCiAgImxpbmtzIjogewogICAgInBhcGVyIjogInBhcGVyX21hbWJha2VybmVscHJvamVjdC5wZGYiLAogICAgImNvZGUiOiAiaHR0cHM6Ly9naXRodWIuY29tL2JhdHUtZWwvZmFzdGVyLW1hbWJhIiwKICAgICJwb3N0ZXIiOiAiY3MyMTctcG9zdGVyLnBkZiIKICB9Cn0K",x6="/assets/cs217-poster-b1ee0a19.pdf",_6="/assets/paper_mambakernelproject-3deacd60.pdf",k6="data:application/json;base64,ewogICJ0aXRsZSI6ICJXaGVuIERvZXMgVmlkZW8gUHJldHJhaW5pbmcgSGVscD8gSW1wcm92aW5nIEVtYm9kaWVkIE5hdmlnYXRpb24gd2l0aCBOZXh0LUZyYW1lIFByZWRpY3Rpb24iLAogICJ5ZWFyIjogMjAyNSwKICAibW9udGgiOiAzLAogICJvcmRlciI6IDEsCiAgImF1dGhvcnMiOiAiQmF0dSBFbCIsCiAgImFyZWEiOiAicmVpbmZvcmNlbWVudCBsZWFybmluZyIsCiAgInRhZ3MiOiBbIlN0YW5mb3JkIEVFMjY5IFByb2plY3QiLCAiU2lnbmFsIFByb2Nlc3NpbmcgZm9yIE1MIl0sCiAgImFic3RyYWN0IjogIkV4YW1pbmVzIHdoZW4gbmV4dC1mcmFtZSB2aWRlbyBwcmV0cmFpbmluZyB0cmFuc2ZlcnMgdG8gZW1ib2RpZWQgbmF2aWdhdGlvbi4gSWRlbnRpZmllcyB0aGUgcmVnaW1lcyB3aGVyZSB2aWRlbyBvYmplY3RpdmVzIGFjY2VsZXJhdGUgbGVhcm5pbmcgb2YgcG9saWNpZXMsIGFuZCB0aGUgcmVnaW1lcyB3aGVyZSB0aGV5IGh1cnQgYnkgZW5jb2Rpbmcgc3B1cmlvdXMgdmlzdWFsIGR5bmFtaWNzLiIsCiAgImxpbmtzIjogewogICAgInBhcGVyIjogInBhcGVyX3ZwdHByb2plY3QucGRmIiwKICAgICJjb2RlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9iYXR1LWVsL3doZW4tdnB0IiwKICAgICJzaXRlIjogImh0dHBzOi8vYmF0dS1lbC5naXRodWIuaW8vd2hlbi12cHQvIiwKICAgICJwb3N0ZXIiOiAiZWUyNjktcG9zdGVyLnBkZiIKICB9Cn0K",S6="/assets/ee269-poster-8082cd72.pdf",I6="/assets/paper_vptproject-1a7caf06.pdf",z6="data:application/json;base64,ewogICJ0aXRsZSI6ICJCYXllc2lhbiBPcHRpbWl6YXRpb24gZm9yIEd1aWRlZCBIeXBvdGhlc2lzIFNhbXBsaW5nIGluIE1pbmltdW0gQmF5ZXMgUmlzayBEZWNvZGluZyIsCiAgInllYXIiOiAyMDI0LAogICJtb250aCI6IDksCiAgIm9yZGVyIjogMywKICAiYXV0aG9ycyI6ICJCYXR1IEVsLCBKdWxpdXMgQ2hlbmcsIEFuZHJlYXMgVmxhY2hvcyIsCiAgImFyZWEiOiAibXVsdGlhZ2VudCBzeXN0ZW1zIGFuZCBpbmZlcmVuY2UgdGltZSB0ZWNobmlxdWVzIiwKICAidGFncyI6IFsiUHJlcHJpbnQiXSwKICAiYWJzdHJhY3QiOiAiTWluaW11bSBCYXllcyBSaXNrIGRlY29kaW5nIGlzIGJvdHRsZW5lY2tlZCBieSB0aGUgY29zdCBvZiBzYW1wbGluZyBtYW55IGh5cG90aGVzZXMuIFdlIHVzZSBCYXllc2lhbiBvcHRpbWl6YXRpb24gdG8gZ3VpZGUgd2hpY2ggaHlwb3RoZXNlcyB0byBzYW1wbGUgbmV4dCwgcmVjb3ZlcmluZyBtb3N0IG9mIE1CUidzIHF1YWxpdHkgYXQgYSBmcmFjdGlvbiBvZiB0aGUgY29tcHV0ZS4iLAogICJsaW5rcyI6IHsKICAgICJwYXBlciI6ICJodHRwczovL2dpdGh1Yi5jb20vYmF0dS1lbC9ndWlkZWQtaHlwb3RoZXNpcy1zYW1wbGluZy9ibG9iL21haW4vcGFwZXItZ3VpZGVkLWh5cG90aGVzaXMtc2FtcGxpbmcucGRmIiwKICAgICJjb2RlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9iYXR1LWVsL2d1aWRlZC1oeXBvdGhlc2lzLXNhbXBsaW5nIgogIH0KfQo=",T6="data:application/json;base64,ewogICJ0aXRsZSI6ICJVbmRlcnN0YW5kaW5nIGFuZCBJbXByb3ZpbmcgUmVwcmVzZW50YXRpb24gTGVhcm5pbmcgaW4gdGhlIFByZXNlbmNlIG9mIFNob3J0Y3V0cyIsCiAgInllYXIiOiAyMDI0LAogICJtb250aCI6IDYsCiAgIm9yZGVyIjogMSwKICAiYXV0aG9ycyI6ICJCYXR1IEVsLCBNaWNoYWxpcyBLb3Jha2FraXMsIEFuZHJlYXMgVmxhY2hvcyIsCiAgImFyZWEiOiAiYXBwbGllZCBpbnRlcnByZXRhYmlsaXR5IiwKICAidGFncyI6IFsiTVBoaWwgVGhlc2lzIl0sCiAgImFic3RyYWN0IjogIkludmVzdGlnYXRlcyBob3cgc2hvcnRjdXQgZmVhdHVyZXMgZGlzdG9ydCB0aGUgcmVwcmVzZW50YXRpb25zIGxlYXJuZWQgYnkgbmV1cmFsIG5ldHdvcmtzIGFuZCBwcm9wb3NlcyB0YXJnZXRlZCBpbnRlcnZlbnRpb25zIGR1cmluZyB0cmFpbmluZyB0aGF0IHJlY292ZXIgZmVhdHVyZXMgbW9yZSBhbGlnbmVkIHdpdGggdGhlIHVuZGVybHlpbmcgdGFzay4iLAogICJsaW5rcyI6IHsKICAgICJwYXBlciI6ICJodHRwczovL2dpdGh1Yi5jb20vYmF0dS1lbC91bmRlcnN0YW5kaW5nLXNob3J0Y3V0cy9ibG9iL21haW4vcGFwZXIucGRmIiwKICAgICJjb2RlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9iYXR1LWVsL3VuZGVyc3RhbmRpbmctc2hvcnRjdXRzIiwKICAgICJzbGlkZXMiOiAiaHR0cHM6Ly9naXRodWIuY29tL2JhdHUtZWwvdW5kZXJzdGFuZGluZy1zaG9ydGN1dHMvYmxvYi9tYWluL3ByZXNlbnRhdGlvbi5wZGYiCiAgfQp9Cg==",C6="data:application/json;base64,ewogICJ0aXRsZSI6ICJQYXJhbWV0ZXJpemluZyBDaGFpbnMgaW4gR2VuZXJhbGl6ZWQgRml4ZWQtUG9pbnQtRnJlZSBJbnZvbHV0aW9ucyIsCiAgInllYXIiOiAyMDIyLAogICJtb250aCI6IDUsCiAgIm9yZGVyIjogMSwKICAiYXV0aG9ycyI6ICJCYXR1IEVsLCBNaWNoYWVsIEpveWNlLCBNYWhpciBDYW4iLAogICJhcmVhIjogIm90aGVyIiwKICAidGFncyI6IFsiVW5kZXJncmFkdWF0ZSBUaGVzaXMiLCAiTWF0aGVtYXRpY3MiXSwKICAiYWJzdHJhY3QiOiAiQSBjb21iaW5hdG9yaWFsIHN0dWR5IG9mIGNoYWlucyBpbiBnZW5lcmFsaXplZCBmaXhlZC1wb2ludC1mcmVlIGludm9sdXRpb25zLCBnaXZpbmcgYW4gZXhwbGljaXQgcGFyYW1ldGVyaXphdGlvbiB0aGF0IHNpbXBsaWZpZXMgZW51bWVyYXRpb24gYW5kIGV4cG9zZXMgc3RydWN0dXJlIHVzZWZ1bCBmb3IgZG93bnN0cmVhbSB3b3JrIGluIGFsZ2VicmFpYyBjb21iaW5hdG9yaWNzLiIsCiAgImxpbmtzIjogewogICAgInBhcGVyIjogImh0dHBzOi8vbGlicmFyeS5zZWFyY2gudHVsYW5lLmVkdS9kaXNjb3ZlcnkvZGVsaXZlcnkvMDFUVUxfSU5TVDpUdWxhbmUvMTI0MzM4MjIxMDAwMDYzMjYiLAogICAgImNvZGUiOiAiaHR0cHM6Ly9naXRodWIuY29tL2JhdHUtZWwvcGFyYW1ldGVyaXppbmctY2hhaW5zLWluLWdlbmVyYWxpemVkLWludm9sdXRpb25zIiwKICAgICJzbGlkZXMiOiAiaHR0cHM6Ly9naXRodWIuY29tL2JhdHUtZWwvcGFyYW1ldGVyaXppbmctY2hhaW5zLWluLWdlbmVyYWxpemVkLWludm9sdXRpb25zL2Jsb2IvbWFpbi9IVDItUHJlc2VudGF0aW9uLnBkZiIKICB9Cn0K",N6="data:application/json;base64,ewogICJ0aXRsZSI6ICJNdWx0aS1BZ2VudCBUZWFtcyBIb2xkIEV4cGVydHMgQmFjayIsCiAgInllYXIiOiAyMDI2LAogICJtb250aCI6IDIsCiAgIm9yZGVyIjogMiwKICAiYXV0aG9ycyI6ICJBbmVlc2ggUGFwcHUsIEJhdHUgRWwsIEhhbmNoZW5nIENhbywgQ2FybWVsbyBkaSBOb2xmbywgWWFuY2hhbyBTdW4sIE1lbmcgQ2FvLCBKYW1lcyBab3UiLAogICJhcmVhIjogIm11bHRpYWdlbnQgc3lzdGVtcyBhbmQgaW5mZXJlbmNlIHRpbWUgdGVjaG5pcXVlcyIsCiAgInRhZ3MiOiBbIklDTUwgMjAyNiJdLAogICJhYnN0cmFjdCI6ICJTZWxmLW9yZ2FuaXppbmcgTExNIHRlYW1zIGNvbnNpc3RlbnRseSBmYWlsIHRvIG1hdGNoIHRoZWlyIGV4cGVydCBhZ2VudCdzIHBlcmZvcm1hbmNlIFx1MjAxNCBldmVuIHdoZW4gZXhwbGljaXRseSB0b2xkIHdobyB0aGUgZXhwZXJ0IGlzIFx1MjAxNCBpbmN1cnJpbmcgbG9zc2VzIG9mIHVwIHRvIDM3LjYlLiBEZWNvbXBvc2luZyB0aGUgZmFpbHVyZSBzaG93cyB0aGF0IGV4cGVydCBsZXZlcmFnaW5nLCBub3QgaWRlbnRpZmljYXRpb24sIGlzIHRoZSBib3R0bGVuZWNrOiB0ZWFtcyBkcmlmdCB0b3dhcmQgaW50ZWdyYXRpdmUgY29tcHJvbWlzZSwgYXZlcmFnaW5nIGV4cGVydCBhbmQgbm9uLWV4cGVydCB2aWV3cyByYXRoZXIgdGhhbiB3ZWlnaHRpbmcgZXhwZXJ0aXNlLiBUaGlzIGNvbnNlbnN1cy1zZWVraW5nIGJlaGF2aW9yIGFsc28gbWFrZXMgdGhlbSBtb3JlIHJvYnVzdCB0byBhZHZlcnNhcmlhbCBhZ2VudHMsIHN1Z2dlc3RpbmcgYSB0cmFkZS1vZmYgYmV0d2VlbiBhbGlnbm1lbnQgYW5kIGVmZmVjdGl2ZSBleHBlcnRpc2UgdXRpbGl6YXRpb24uIiwKICAibGlua3MiOiB7CiAgICAicGFwZXIiOiAiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzI2MDIuMDEwMTEiCiAgfQp9Cg==",E6="data:application/json;base64,ewogICJ0aXRsZSI6ICJCaVRleHRpb246IFNvY2lvdGVjaG5pY2FsIEFsaWdubWVudCBpbiBBdXRvbWF0ZWQgT3B0aW1pemF0aW9uIE1vZGVsaW5nIHZpYSBUZXh0dWFsIEJpc2VjdGlvbiBmb3IgVGFzayBEaXNhbWJpZ3VhdGlvbiIsCiAgInllYXIiOiAyMDI0LAogICJtb250aCI6IDYsCiAgIm9yZGVyIjogNCwKICAiYXV0aG9ycyI6ICJCYXR1IEVsLCBNYWRlbGVpbmUgVWRlbGwiLAogICJhcmVhIjogImFsaWdubWVudCBhbmQgc29jaWFsIGltcGFjdHMiLAogICJ0YWdzIjogWyJVZGVsbCBMYWIgUm90YXRpb24iXSwKICAiYWJzdHJhY3QiOiAiQXV0b21hdGVkIG9wdGltaXphdGlvbiBtb2RlbGluZyBzeXN0ZW1zIHB1c2ggdGhlIGJ1cmRlbiBvZiBwcmVjaXNlIHByb2JsZW0gc3BlY2lmaWNhdGlvbiBvbnRvIHRoZSB1c2VyIFx1MjAxNCBoYXJkIGZvciBub24tZXhwZXJ0cy4gQmlUZXh0aW9uIGlzIGEgZ2VuZXJhbCBmcmFtZXdvcmsgdGhhdCAoaSkgc2FtcGxlcyBjYW5kaWRhdGUgZGV0YWlsZWQgcHJvYmxlbSBkZXNjcmlwdGlvbnMgY29uZGl0aW9uZWQgb24gYSB2YWd1ZSBvbmUgYW5kIChpaSkgbmFycm93cyB0aGUgc3BhY2UgYnkgYXNraW5nIHF1ZXN0aW9ucyB0aGF0IGVmZmljaWVudGx5IHJlc29sdmUgYW1iaWd1aXRpZXMuIFNpbXVsYXRlZCB1c2VyIHN0dWRpZXMgc2hvdyBCaVRleHRpb24gaW1wcm92ZXMgTGxhbWEzLjEtOGIgYXQgZWxpY2l0aW5nIG9iamVjdGl2ZXMgYW5kIGNvbnN0cmFpbnRzOyBnYWlucyBkbyBub3QgYWx3YXlzIGNhcnJ5IG92ZXIgdG8gbGFyZ2VyIG1vZGVscywgbW90aXZhdGluZyBtb2RlbC1zcGVjaWZpYyB0ZXN0LXRpbWUgc3RyYXRlZ2llcy4iLAogICJsaW5rcyI6IHsKICAgICJwYXBlciI6ICJiaXRleHRpb24ucGRmIiwKICAgICJjb2RlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9iYXR1LWVsL2JpdGV4dGlvbiIKICB9Cn0K",A6="/assets/bitextion-ecb98165.pdf",B6="/assets/MemoryTraining-90ea0917.pdf",M6="data:application/json;base64,ewogICJ0aXRsZSI6ICJSZWluZm9yY2VtZW50IExlYXJuaW5nIFRyYWluaW5nIGZvciBEeW5hbWljIENvbnRleHQgTWFuYWdlbWVudCBpbiBNYXRoZW1hdGljYWwgUmVhc29uaW5nIiwKICAieWVhciI6IDIwMjUsCiAgIm1vbnRoIjogNiwKICAib3JkZXIiOiAyLAogICJhdXRob3JzIjogIkJhdHUgRWwiLAogICJhcmVhIjogInJlaW5mb3JjZW1lbnQgbGVhcm5pbmciLAogICJ0YWdzIjogWyJTdGFuZm9yZCBDUzIyNFIgUHJvamVjdCIsICJEZWVwIFJlaW5mb3JjZW1lbnQgTGVhcm5pbmciXSwKICAiYWJzdHJhY3QiOiAiTWF0aGVtYXRpY2FsIHJlYXNvbmluZyBhZ2VudHMgcXVpY2tseSBmaWxsIHRoZWlyIGNvbnRleHQgd2l0aCBpbnRlcm1lZGlhdGUgd29yaywgZm9yY2luZyBicml0dGxlLCBoYW5kLXR1bmVkIHRydW5jYXRpb24uIFdlIHVzZSByZWluZm9yY2VtZW50IGxlYXJuaW5nIHRvIHRyYWluIGEgbW9kZWwgdGhhdCBkeW5hbWljYWxseSBtYW5hZ2VzIGl0cyBvd24gY29udGV4dCBcdTIwMTQgZGVjaWRpbmcgd2hhdCB0byBrZWVwLCBzdW1tYXJpemUsIG9yIGRpc2NhcmQgZHVyaW5nIG11bHRpLXN0ZXAgc29sdXRpb25zIFx1MjAxNCBhbmQgc2hvdyB0aGlzIGltcHJvdmVzIGFjY3VyYWN5IGFuZCBlZmZpY2llbmN5IG9uIG1hdGggYmVuY2htYXJrcyBjb21wYXJlZCB0byBmaXhlZC13aW5kb3cgYmFzZWxpbmVzLiIsCiAgImxpbmtzIjogewogICAgInBhcGVyIjogIk1lbW9yeVRyYWluaW5nLnBkZiIsCiAgICAiY29kZSI6ICJodHRwczovL2dpdGh1Yi5jb20vYmF0dS1lbC9UcmFpbmVkTWVtb3J5MiIsCiAgICAicG9zdGVyIjogImNzMjI0ci1wb3N0ZXIucGRmIgogIH0KfQo=",q6="/assets/cs224r-poster-00f78ec7.pdf",R6="data:application/json;base64,ewogICJ0aXRsZSI6ICJDb21wYXJhdGl2ZSBBbmFseXNpcyBvZiBDb25zdGl0dWVuY3kgUGFyc2VyczogQSBDYXNlIFN0dWR5IG9uIFN0YW5mb3JkIFUtUENGRyBhbmQgQmVya2VsZXkgTmV1cmFsIFBhcnNlcnMiLAogICJ5ZWFyIjogMjAyMywKICAibW9udGgiOiAxMiwKICAib3JkZXIiOiAyLAogICJhdXRob3JzIjogIkJhdHUgRWwiLAogICJhcmVhIjogIm90aGVyIiwKICAidGFncyI6IFsiQ2FtYnJpZGdlIENvdXJzZXdvcmsiLCAib2xkLXNjaG9vbCBOTFAiXSwKICAiYWJzdHJhY3QiOiAiQnJhY2tldGluZyBGLXNjb3JlIGlzIGEgdXNlZnVsIHByb3h5IG9mIHBhcnNlciBxdWFsaXR5IGJ1dCBoaWRlcyB3aGVyZSBzeXN0ZW1zIGFjdHVhbGx5IGZhaWwuIFRoaXMgcmVwb3J0IGNvbWJpbmVzIHF1YW50aXRhdGl2ZSBhbmQgcXVhbGl0YXRpdmUgZXZhbHVhdGlvbiBvZiB0aGUgQmVya2VsZXkgTmV1cmFsIFBhcnNlciAoS2l0YWV2ICYgS2xlaW4sIDIwMTg7IEtpdGFldiBldCBhbC4sIDIwMTkpIGFuZCB0aGUgU3RhbmZvcmQgVW5sZXhpY2FsaXplZCBQQ0ZHIFBhcnNlciAoS2xlaW4gJiBNYW5uaW5nLCAyMDAzKSwgY2hhcmFjdGVyaXppbmcgdGhlaXIgYmVoYXZpb3Igb24gYSBkZXNpZ25hdGVkIHRlc3Qgc2V0IGFjcm9zcyBlcnJvciB0eXBlcywgcHJlY2lzaW9uL3JlY2FsbCwgYW5kIHBhcnNpbmcgdGltZS4iLAogICJsaW5rcyI6IHsKICAgICJwYXBlciI6ICJwYXBlci1jb21wYXJhdGl2ZS1hbmFseXNpcy1vZi1jb25zdGl0dWVuY3ktcGFyc2Vycy5wZGYiLAogICAgImNvZGUiOiAiaHR0cHM6Ly9naXRodWIuY29tL2JhdHUtZWwvY29uc3RpdHVlbmN5LXBhcnNlci1jb21wYXJpc29uIgogIH0KfQo=",F6="/assets/paper-comparative-analysis-of-constituency-parsers-cacc773a.pdf",L6="opportunities and risks of influencing intelligent agents",j6="Apr 2026",P6=2026,D6=4,W6=1,O6="A technical perspective on what it means to influence an intelligent agent, when influence becomes hazardous, and how cognitive security gives us a unified framing.",G6="content.md",Z6={paper:"works/002_cognitivesecurity/paper_cstf_position.pdf",fig1:"fig1_inverse_problem.png"},H6={title:L6,date:j6,year:P6,month:D6,order:W6,excerpt:O6,content:G6,links:Z6},V6="night at cafeteria",J6="Apr 2026",X6=2026,Y6=4,U6=2,Q6="A personal account of the night of July 15, 2016 in Istanbul.",K6="content.md",e7={},t7={title:V6,date:J6,year:X6,month:Y6,order:U6,excerpt:Q6,content:K6,links:e7},n7="long horizon alignment",r7="Apr 2026",i7=2026,a7=4,s7=0,o7="a research agenda for extending alignment beyond immediate preferences to consider how repeated interactions with models change people over time.",l7="content.md",u7={},c7={title:n7,date:r7,year:i7,month:a7,order:s7,excerpt:o7,content:l7,links:u7},h7="notes on stochastic interpolants for generation",d7="spring 2026",m7=2026,p7=4,f7=3,g7="side-by-side notes on the forward process, training objective, sampling, and deterministic counterparts of discrete-time diffusion, score-based diffusion, and flow matching.",v7="content.md",y7=[{id:"diffusion",title:"1 diffusion",content:"lecture1.md",notes:"lecture1-notes.pdf"},{id:"score",title:"2 score",content:"lecture2.md",notes:"lecture2-notes.pdf"},{id:"flow",title:"3 flow",content:"lecture3.md",notes:"lecture3-notes.pdf"},{id:"representation",title:"4 representation",notes:"lecture4-notes.pdf"}],b7={},$7={title:h7,date:d7,year:m7,month:p7,order:f7,excerpt:g7,content:v7,parts:y7,links:b7},w7="notes on statistical mechanics of learning",x7="spring 2026",_7=2026,k7=5,S7=4,I7="notes for the lectures of appphys 229 (statistical mechanics of learning and computation), covering boltzmann distributions, free energies, replica and cavity methods, and random matrix theory.",z7="content.md",T7=[{id:"boltzmann",title:"1 the boltzmann distribution",content:"lecture1.md"},{id:"entropy",title:"2 entropy, large deviations, and free energy",content:"lecture2.md"},{id:"cumulants",title:"3 free energy as a cumulant generator",content:"lecture3.md"},{id:"saddle",title:"4 saddle points, legendre transforms & mean field",content:"lecture4.md"},{id:"meanfield",title:"5 mean field theory & phase transitions",content:"lecture5.md"},{id:"replica",title:"6 replica theory of spin glasses",content:"lecture6.md"},{id:"replicasymmetric",title:"7 replica-symmetric solution of the spin glass",content:"lecture7.md"},{id:"cavity",title:"8 cavity method for spin glasses",content:"lecture8.md"},{id:"rmt",title:"9 introduction to random matrix theory",content:"lecture9.md"},{id:"replicawigner",title:"10 replica method for wigner matrices",content:"lecture10.md"},{id:"cavitywigner",title:"11 cavity method for wigner matrices",content:"lecture11.md"},{id:"cavitywishart",title:"12 cavity method for wishart matrices",content:"lecture12.md"}],C7={},N7={title:w7,date:x7,year:_7,month:k7,order:S7,excerpt:I7,content:z7,parts:T7,links:C7},E7=`

- cynival take on immigratim

i left my home in izmir to go to high school in istanbul, where i was a baording student for 5 years. 

istanbul poeple. oh this is your city, you are so cool with your houses and cars and fancy sweaters. and you all already know each other from middle school. i want to have those things as well. but i am not a paart of your group. can i hang out with you guys. 

no, you are not cool enough to hang out. 

remember those highscool days. or if you dont picture this guys friends group going throuhg the pubery. 

this is what immigration feels like. it makes me feel like i have no character. 

it makes me feel like i betrayed my friends and went to hang out with the cool kids. now i am having fun here yes, maybe these people have better cars and houses, but are they really my firends. 

especially at times. when they give the vibe of "you are not one of us" "you are not cool enough to hang out with us"


- being helpful and doing good

if you ask julie what she wants to do in the future she will respond, i want to be helpful. sounds positive and naive at first sight. not so much when you think about it. 

the main point here is what is helpful and what is good. netanyahu thinks he is helping his nation and doing good in teh grand scheme of things. preserving the western or judeo-christian civilixation. so does any other leader with basic decency. but not all end up doing good. 

beating of the enemies is good for a leader. 

is there more points to ve made here os is it just that i want to be helpful and do good presents the goals from the perspective of a moral high ground, whcih sounds positive but is actually.

but not knowing whst will be hepful or good an figuring it out on the way is part of the journey i suppose. when i talk to julie she tells me about how she is trying to figure out, and i believe she will slowly get there 

- three games

what is this picture about. i wille explain in this blog post. 

the first game is house. or something that you palay with your friends. 

`,A7=`a new currency for political capital
a new currency for organs

do we want to separate economic systems or keep them unified

linus conversation

neural networks that are dynamic --> weights change conditional on the inputs at teest time (maybe state space models have something similar to this here)`,B7=`yoshua bengio -- third person ai idea

avoiding uncontrolled agency with the scientist ai

misalignment: AI behaves against our instructions

are there examples of things that would be good if we are not ully capable of doiing it and that is good. if we are fully capable the same objective would be bad?

more agency --> more misalignment risk

more compelx a task less likely it is a randomly initialized network can do it. 

misalignment from implicit goals: training or isntrumental goals

two conditions for causing harm: capability + propensity

can we disentangle pure understadning from agency
avoid uncontrolled

the laws of physics is not agentic: they yeild conseqeunce invariant predictions

agentic predictor would bias its predictions to achieve a goal.


obtain safety from epistemic honesty

obtain honesyty y training a consewuence invariant predictor and use it as a guardrail. 

bayesian poseriors for safe unertain decisions. bayesian posterios is robust to attacks and reward hacking. 

safety from epistemic honesty: 

sceintist ai contextualization pipeline

- not super interesting but it is mainly to have the distinction between "what I do" and "what I observed" --> if oberving something makes i tmore likely for me to do the same, then this distinction may not be as fundamental. 

`,M7=`we recently wrote a position paper with friends from the [cognitive security task force](https://www.cstf.dev/) (under stanford hai) and the [intelligence khollective](https://knight-hennessy.stanford.edu/opportunities/intelligence-collective) (under the knight-hennessy scholarship). our paper argues that ai development should prioritize cognitive security; you can find it [here](paper). in this post, i offer my perspective on the opportunities and risks of *influencing intelligent agents*. it is meant to complement the paper, not substitute for it.


## part 1. influencing intelligent agents
in reinforcement learning literature, an intelligent agent's behavior is captured by a *policy* $\\pi_\\theta(a \\mid o)$: a function, often a neural network parameterized by $\\theta$, that maps an observation of the world $o$ to a distribution over actions $a$. this policy encodes the agent's accumulated knowledge, beliefs, values, and learned associations.


in this context, influencing the agent means changing what action $a$ the agent takes. there are three fundamentally different ways to do that, and keeping them separate matters because they operate through different means:


*type 0: forcing.* forcing directly overrides the agent’s action. a physical example would be moving someone’s hand by force: the agent’s policy is not involved, and neither the observation nor the policy’s processing of that observation determines the resulting action. the action is imposed externally and, at that moment, is not governed by the agent. forcing can also occur at a deeper implementation level, for example by injecting a signal into a neural network that causes it to produce a particular output action. such interventions are closely related to work on [model steering](https://www.science.org/doi/10.1126/science.aea6792).

*type 1: deception.* deception changes the observations of the agent. the objective of the deceiver is to make the agent perceive an observation $o'$ such that, once the agent's policy processes $o'$, the agent's natural response is the desired action $a'$. formally,
$$
o' = \\arg\\max_o \\, \\pi_\\theta(a' \\mid o).
$$
note that deception is the inverse (mapping an action a' to an observation o') of the forward problem that the policy $\\pi$ solves (mapping an observation o' to an action a').


*type 2: teaching.* teaching is a more subtle case. the goal of the teacher is to provide the agent with a series of experiences such that, once the agent's learning algorithm $\\Psi$ (an update rule such as gradient descent) updates the parameters after processing those experiences, the agent's policy changes so that it now gives the response $a'$ to the observation $o$. while the deceiver changes the agent's observations, the teacher changes the parameters $\\theta$. however, the teacher does not have the ability to change them directly. therefore, they curate a series of experiences $E$ such that, once the agent learns from those experiences, the new parameters
 $$
 \\theta_{t+1} = \\Psi(\\theta_1, \\theta_2, \\ldots, \\theta_t, E)
 $$
 satisfy
 $$
 \\theta_{t+1} = \\arg\\max_\\theta \\, \\pi_\\theta(a' \\mid o).
 $$
note that teaching involves the inverse problem (mapping a model behavior to training examples) of the forward problem that the learning algorithm $\\Psi$ solves (mapping training examples to a model behavior).


related discussions of influence on social media by malicious actors usually revolve around factuality (misinformation/disinformation), but the dimension i introduce here is orthogonal. both type 1 and type 2 influence can be implemented via factual claims or via lies.


## part 2. opportunities and risks


as ai technologies mature, opportunities will emerge alongside the risks. but to talk about either, we need to be clear about *when* an act of influence is *bad* and when it isn't. a useful starting point is the asymmetry in how we already treat the three types when applied to humans.


type-0 (forcing) is unambiguously against our social values, norms, and in many cases laws. type-1 (deception) is also bad, but less so. type-2 (teaching) is, in most contexts, not just acceptable but desirable.


why the asymmetry? one explanation is *tractability*. forcing has always been tractable; it is easy to restrict someone's movement or push them away. effective deception used to require sophistication, scale, or proximity. effective teaching required even more: long-term access, structure, expertise. as a result, types 1 and 2 were never as immediately threatening as type 0, and our norms hardened around the easy case.


generative ai changes this. effective deception is now cheap, scalable, and highly targeted. effective teaching, the at-scale shaping of beliefs and behavior, is rapidly becoming so. if the only thing keeping types 1 and 2 in a softer normative category was practical difficulty, then the underlying values question becomes urgent: what is it about *forcing* that we object to, and does the objection generalize?


it might. one consistent reading of our existing norms is that we accept influences that, on net, make the influenced person's life better, and reject the ones that make it worse, independent of whether they operate on the body, the input, or the policy. forcing someone away from a moving car is fine. forcing someone off a roof is not. teaching someone to read is good. teaching them to hate is not. on this reading, *risks* are exactly the cases where the influence makes the agent's life worse, and *opportunities* are the cases where it makes the agent's life better.


## part 3. research i want to work on


i've been thinking about how interactions with models influence human behavior. i believe model alignment should take into account *how interactions with the model change people, and through them, society*. if a model always shows me my preferred responses and i am becoming more radicalized as a result, then maybe i should not be shown more radicalizing content, even if, by every short-horizon preference signal, that is what i would have clicked on.


two concrete projects in this direction:


*project 1. how language models change people* i want to understand the potential type-1 and type-2 effects (and biases) of language models on their users: how repeated interaction with a model shapes preferences and beliefs, empathetic tendencies, or user's resilience to deception. the goal is twofold: to measure these effects rigorously, and to ask whether models can be designed so that the changes they induce are positive, like making people more helpful and harmless, or empathetic and more resilient against manipulation, or simply more reflective about their own preferences.


*project 2. training teachers* if interaction shapes the user, then a model is a teacher whether or not we designed it to be. so: what is a *good* teacher? what objective do we train against if we want the model to be a good teacher? this is the inverse of the learning problem, which is explored under synthetic data generation. how to design the curriculum a model presents to a person so that the long-run effect on that person is one they would, on reflection, endorse.


if any of this is of interest to you, we wrote a [position paper](paper) which, today, i am presenting at the iclr aiwild workshop. if you want to collaborate on research related to these ideas, consider joining the [cognitive security task force](https://www.cstf.dev/) or the [intelligence khollective](https://knight-hennessy.stanford.edu/opportunities/intelligence-collective), and feel free to reach out direcltly to me.`,q7=`*afternoon.* the summer after my sophomore year of high school, i was living in a university dorm in istanbul. on a hot friday afternoon, three of my friends and i went to a nargile kafe just off campus, the kind that would happily serve 16-year-olds.

from the terrace there, you could see the bosphorus bridge in its full stretch, one end in asia, the other in europe. suspended between turkey’s islamic roots and its european aspirations.

![A view of the Bosphorus Bridge in Istanbul at dusk, with city lights reflecting on the water and boats docked along the shore.](bosphorus.jpg "https://atlantahomesmag.com/article/a-taste-of-istanbul/")

just as we were settling in, my friend sina said “we need to head back. my dad just texted. he saw tanks on the bosphorus bridge. he says the last time that happened was in [1980](https://en.wikipedia.org/wiki/1980_Turkish_coup_d%27%C3%A9tat).”

we paid the bill and caught the next bus back to campus.

on campus, everything seemed normal. we went to the cafeteria, which was open 24/7, with bad food and horse racing on a small tv. i sat down with my friends and googled:

turkish military news

tanks on the bosphorus bridge

as i was scrolling through news sites, i could feel the anxiety rising with the noise in the cafeteria. it was getting noticeably more crowded.

the more urgent everything felt, the slower my connection seemed to get.

what was going on?

*night.* at midnight, the entire cafeteria went silent. for the first time all summer, everyone’s eyes were fixed on the tv in the corner.

a news anchor was on screen announcing:

“the turkish military has completely taken over the administration of the country to reinstate constitutional order. a curfew and martial law is in effect across the country.”

we had gotten one answer. but now, we had a hundred more questions.

i’d learned about the 1980 coup from my parents: mass arrests, torture, executions. i knew the coup would mean that, overnight, the direction of the entire country would shift, and with it, all of our lives.

tension had been high in turkey for some time. over the past year, there have been a number of attacks in the country. some by the neighboring islamic state, others by the kurdish militia.

![A grieving man kneels beside the covered body of a victim at the scene of a suicide bombing during a peace rally in Ankara, Turkey, on October 10, 2015. The ground is strewn with bloodstained banners and personal belongings. A large group of riot police in helmets and dark uniforms stand behind red-and-white caution tape in the background, forming a barrier around the blast site.](ankara_bombing.png "october 10, 2015. suicide bombers hit a lunchtime peace rally in ankara, killing about 100 people. no one has claimed responsibility. | https://www.nytimes.com/interactive/2016/12/31/world/europe/turkey-recent-attacks.html")

![Emergency personnel and forensic teams work at the site of a suicide bombing near the Blue Mosque in Istanbul, with a white van and a body visible on the ground.](january_bluemosque.png "january 12, 2016. a suicide bomber blew himself up and killed 10 tourists, all foreigners, in an attack on istanbul’s central historic district. | https://www.nytimes.com/interactive/2016/12/31/world/europe/turkey-recent-attacks.html")

![A large fire engulfs vehicles on a street in Ankara after a car bomb explosion near Turkish military buildings, with a damaged bus visible in the foreground.](february_ankara.png "february 17, 2016. a blast in ankara hit a convoy of buses filled with soldiers at a traffic light, killing 28 and wounding more than 60 others. | https://www.nytimes.com/interactive/2016/12/31/world/europe/turkey-recent-attacks.html")

![Emergency workers and civilians crowd around a burned and twisted bus at the site of a deadly car bombing in Ankara.](march_ankara.png "march 13, 2016. a car rigged with explosives blew up in a public square in ankara, killing more than 30. a kurdish militant group claimed responsibility. | https://www.nytimes.com/interactive/2016/12/31/world/europe/turkey-recent-attacks.html")

![Emergency responders assist injured people lying on a pedestrian street in Istanbul after a suicide bombing, with shattered glass and debris scattered around.](march_istanbul.png "march 19, 2016. a suicide bomber struck a main avenue in istanbul, killing at least four, including two americans. turkey said isis carried out the attack. | https://www.nytimes.com/interactive/2016/12/31/world/europe/turkey-recent-attacks.html")

and just two weeks earlier, there was another one.

![Investigators in protective suits examine the scene of a suicide bombing at Istanbul's Atatürk Airport, working near a covered body on the ground.](june_ataturk.png "june 28, 2016. three suicide attackers killed 45 people and wounded dozens more at istanbul’s main airport. | https://www.nytimes.com/interactive/2016/12/31/world/europe/turkey-recent-attacks.html")

every table in the cafeteria had become its own little newsroom. people were trying to make sense of it all. each minute was bringing a new piece of chaos.

a friend in ankara told us the military was bombing the parliament building.

they were saying a police helicopter was shot down by a fighter jet.

wait… the police are fighting the army?

no one could make sense of it. every update made things more surreal.

soon after, the cafeteria fell silent for the second time. another announcement was on the tv. this time, it was the president.

he appeared via facetime, speaking to a tv anchor who held the phone up to the camera. he asked the citizens to go on the streets and resist the military. “halkın gücünün üstünde bir güç tanımam,” he said. “to this day, i have never recognized any power above that of the people”

![A news anchor holds up a smartphone during a live CNN Türk broadcast, showing a video call with Turkey's president urging citizens to take to the streets.](president_facetime.png "https://www.cnn.com/2016/07/18/middleeast/turkey-failed-coup-explainer/")

*morning.* after his call, crowds began to flood the streets. explosions continued throughout the night.

at 6am, we saw on tv the images of soldiers on the bosphorus bridge, with their arms raised in surrender.

the coup attempt failed.

that night changed how i understood my nation, not as a stable structure, but as a fragile one held up by the constant effort of those who believe in it.

at the time, i came away with a deep appreciation for the people who work, fight, and sometimes risk everything to keep this ancient structure standing.

*note on inconsistencies.* i wrote this from memory, and parts of it do not match the timeline reconstructed by [bellingcat from the plotters’ whatsapp group](https://www.bellingcat.com/news/middle-east/2016/07/24/the-turkey-coup-through-the-eyes-of-its-plotters/) and the [wikipedia chronology](https://en.wikipedia.org/wiki/2016_Turkish_coup_d%27%C3%A9tat_attempt). a few things i would flag: i remember the kafe as a friday afternoon, but the tanks did not actually block the bosphorus bridge until around 21:45, so it must have been closer to evening; what i recall as a single news anchor reading the statement was probably the second of two trt broadcasts, an earlier one around 23:18 and tijen karaş’s forced reading around 00:05–00:13; the parliament bombing and the shot-down police helicopter that my friend in ankara reported actually happened much later that night, and the parliament being hit from the air around 03:08–03:33, so i probably collapsed several hours of news into one stretch of conversation. i kept the original ordering because it is how i lived through it, but for what actually happened, the two links above are the better sources.
`,R7=`ai systems are increasingly part of the environments in which people form beliefs, preferences, habits, and personalities. current alignment methods optimize models against short-horizon feedback: if users prefer response a over b, we train the model to give a. this is useful but incomplete. a model can satisfy a user locally while harming them globally. a user who asks for feedback on their writing may consistently prefer responses that praise their drafts; optimizing for those preferences trains the model toward sycophancy, undermining the honest critique they were actually seeking. the resulting trajectory is one the user would reject on reflection. models are already shaping the people who use them, whether or not we measure it. the question is not whether ai influences society (as it already does) but whether we understand the direction and can choose it deliberately. i want us as a society to be more “agentic” (if you will) about this: train models with long-term objectives in mind, the way a curriculum is designed.

the goal of “long horizon alignment” research agenda is to extend alignment beyond immediate preference satisfaction. i want to study how interactions with models change people over time, and design models whose long-run effects are ones users and society would endorse upon reflection. alignment should ask not only “did the user prefer this response?” but “what kind of person does repeated exposure to this model help the user become?” if we know directions to avoid (reduced agency, growing social hostility, suicide) models should not push users toward them. if we know directions to encourage (reflection, empathy, helpfulness, harmlessness) models should support them. we are already building systems that move people and society in particular directions, but we currently don’t know what those directions are. the aim of long-horizon alignment is to make those directions legible and contestable.
`,F7=`each part linked below covers my notes for one of the lectures of [cme 296](https://cme296.stanford.edu/). they include what is covered on the slides, as well as the derivations covered in the lectures. i added further explanations in places where i felt i needed more context. the title is a reference to the [stochastic interpolants paper](https://arxiv.org/abs/2303.08797), which presents a unifying framework for different generation paradigms. i am taking this class at stanford in spring 2026.
`,L7=`## motivation

we have a set of images, and we want to create a brand-new image that looks like it could have been drawn from the same distribution. we don't have access to the underlying probability distribution, only to the samples it produced. the goal of a generative model is to learn enough about that distribution to draw new samples from it.

we will focus on the *unconditional* version of this problem in the first three lectures: no captions, no labels, just images. conditioning on text prompts comes later.

a natural question is: *where should the random new sample come from?* why not from a deterministic procedure? the answer is that we want **diversity**. we want every call to our generator to produce a different image. the cleanest way to inject randomness is to start from pure gaussian noise, because gaussian noise

- is trivial to sample from,
- is well understood mathematically (closed-form density, nice closure under linear maps),
- and is high-entropy, so nothing about the noise biases the output.

## forward and reverse processes

let $x_0 \\in \\mathbb{R}^d$ denote a clean image (we flatten the $H\\times W \\times 3$ tensor into a single vector). the **forward process** is a fixed markov chain that gradually corrupts $x_0$ with gaussian noise:

$$
x_0 \\;\\longrightarrow\\; x_1 \\;\\longrightarrow\\; \\cdots \\;\\longrightarrow\\; x_T,
$$

where $x_T$ is essentially pure noise. the **reverse process** is what we want to *learn*: a chain that goes the other way, taking pure noise and turning it back into a plausible image.

each forward transition is defined by us:

$$
q(x_t \\mid x_{t-1}) \\;=\\; \\mathcal{N}\\!\\left(\\sqrt{1-\\beta_t}\\,x_{t-1},\\; \\beta_t I\\right),
$$

so concretely

$$
x_t \\;=\\; \\sqrt{1-\\beta_t}\\, x_{t-1} + \\sqrt{\\beta_t}\\,\\varepsilon,\\qquad \\varepsilon \\sim \\mathcal{N}(0, I).
$$

the sequence $\\{\\beta_t\\}_{t=1}^T$ is the **noise schedule**. we typically pick $0 \\le \\beta_1 < \\beta_2 < \\cdots < \\beta_T \\le 1$. why increasing? early on the image is still close to clean, and we only want to perturb fine-grained details — so we add a little noise. later, the image is already fuzzy, so larger perturbations don't destroy more information than is already gone.

one sanity check before going further: why the $\\sqrt{1-\\beta_t}$ factor on the previous image? the variances of the two pieces sum to $(1-\\beta_t)\\,\\text{Var}(x_{t-1}) + \\beta_t$. if $x_{t-1}$ has unit variance, so does $x_t$ — the schedule is **variance-preserving**.

### closed form for $q(x_t \\mid x_0)$

[derivation 1]

the forward chain is intentionally simple, so simple that we can short-circuit it: instead of running $t$ steps to get to $x_t$, we can sample $x_t$ directly from $x_0$.

define $\\alpha_t := 1 - \\beta_t$ and $\\bar\\alpha_t := \\prod_{s=1}^t \\alpha_s$. unrolling one step,

$$
x_t = \\sqrt{\\alpha_t}\\, x_{t-1} + \\sqrt{1-\\alpha_t}\\,\\varepsilon_t,
$$

$$
x_{t-1} = \\sqrt{\\alpha_{t-1}}\\, x_{t-2} + \\sqrt{1-\\alpha_{t-1}}\\,\\varepsilon_{t-1}.
$$

substituting the second into the first,

$$
x_t = \\sqrt{\\alpha_t \\alpha_{t-1}}\\, x_{t-2} + \\sqrt{\\alpha_t(1-\\alpha_{t-1})}\\,\\varepsilon_{t-1} + \\sqrt{1-\\alpha_t}\\,\\varepsilon_t.
$$

the two noise terms are independent zero-mean gaussians, so their sum is again gaussian with variance equal to the sum of the variances:

$$
\\alpha_t(1-\\alpha_{t-1}) + (1-\\alpha_t) = 1 - \\alpha_t \\alpha_{t-1}.
$$

so we can write $x_t = \\sqrt{\\alpha_t \\alpha_{t-1}}\\, x_{t-2} + \\sqrt{1 - \\alpha_t \\alpha_{t-1}}\\,\\varepsilon$. continuing the induction down to $x_0$ gives the famous one-shot formula

$$
x_t = \\sqrt{\\bar\\alpha_t}\\, x_0 + \\sqrt{1-\\bar\\alpha_t}\\,\\varepsilon,\\qquad \\varepsilon \\sim \\mathcal{N}(0, I).
$$

this is enormously useful: at training time we will need to noise an image to a random level $t$, and we can do it in a single matrix-vector op rather than $t$ chained ones.

## what's the objective?

we want to maximize the likelihood that our model assigns to real data:

$$
\\max_\\theta \\; \\log p_\\theta(x_0).
$$

why log? two reasons. first, products of probabilities become sums of log-probabilities — numerically stable and analytically friendlier. second, $\\log$ is monotonic, so maximizing $\\log p_\\theta(x_0)$ is the same as maximizing $p_\\theta(x_0)$.

the trouble is computing $p_\\theta(x_0)$ at all. to produce $x_0$, the model has to start from noise $x_T$ and denoise step by step through the latent variables $x_{1:T} = (x_1, \\ldots, x_T)$. so

$$
p_\\theta(x_0) = \\int p_\\theta(x_{0:T})\\, dx_{1:T}.
$$

this is an integral over *every* possible noise trajectory the model could have taken. intractable.

### refresher on joint and marginal probabilities

for two random variables, the joint distribution factors as

$$
p(x_1, x_2) = p(x_1)\\, p(x_2 \\mid x_1),
$$

and we recover marginals by integrating out:

$$
p(x_1) = \\int p(x_1, x_2)\\, dx_2.
$$

for a markov chain $x_1 \\to x_2 \\to \\cdots \\to x_T$, the joint factors as

$$
p(x_{1:T}) = p(x_1) \\prod_{t=2}^T p(x_t \\mid x_{t-1}).
$$

that's exactly the structure of our reverse process — the model only "looks one step back."

## a tractable loss in four steps

[derivation 2]

the high-level recipe:

1. derive a lower bound on $\\log p_\\theta(x_0)$.
2. expand the bound until the structure becomes clear.
3. show every term in the bound is computable.
4. read off the final loss.

### step 1 — the evidence lower bound (elbo)

we use the standard trick of multiplying and dividing by a "variational" distribution $q(x_{1:T} \\mid x_0)$ — which we conveniently let be our forward process:

$$
p_\\theta(x_0) = \\int p_\\theta(x_{0:T})\\, dx_{1:T}
= \\int \\frac{p_\\theta(x_{0:T})}{q(x_{1:T}\\mid x_0)}\\, q(x_{1:T} \\mid x_0)\\, dx_{1:T}
= \\mathbb{E}_{q}\\!\\left[\\frac{p_\\theta(x_{0:T})}{q(x_{1:T} \\mid x_0)}\\right].
$$

now apply jensen's inequality. because $\\log$ is concave, $\\log \\mathbb{E}[Y] \\ge \\mathbb{E}[\\log Y]$:

$$
\\log p_\\theta(x_0) \\;\\ge\\; \\mathbb{E}_{q}\\!\\left[\\log \\frac{p_\\theta(x_{0:T})}{q(x_{1:T}\\mid x_0)}\\right] \\;=:\\; \\mathcal{L}_{\\text{elbo}}.
$$

so instead of maximizing the (intractable) likelihood directly, we maximize this **lower bound** — equivalently, we minimize $-\\mathcal{L}_{\\text{elbo}}$.

### step 2 — expanding the bound

after expanding the log of the joint factorizations and rearranging (the algebra is in ho et al. 2020), the elbo surfaces a sum of kl divergences:

$$
-\\mathcal{L}_{\\text{elbo}} = \\sum_{t=2}^T \\underbrace{\\mathrm{KL}\\!\\left(q(x_{t-1} \\mid x_t, x_0)\\;\\|\\;p_\\theta(x_{t-1} \\mid x_t)\\right)}_{\\text{learn } \\theta\\text{ to make these small}} + \\text{(other terms)}.
$$

quick refresher on kl divergence: for densities $p, q$,

$$
\\mathrm{KL}(p \\;\\|\\; q) = \\int p(x) \\log \\frac{p(x)}{q(x)}\\, dx = \\mathbb{E}_{x \\sim p}\\!\\left[\\log \\frac{p(x)}{q(x)}\\right].
$$

it's nonnegative and zero iff $p = q$, so it really does measure "distance" (asymmetrically) between distributions.

the two distributions inside the kl look intimidating, but each is tractable.

### step 3a — $q(x_{t-1} \\mid x_t, x_0)$ is tractable

this is the question: *given the noisy image $x_t$ and the original clean image $x_0$, what's the distribution of the slightly-less-noisy version $x_{t-1}$?* bayes' rule gives

$$
q(x_{t-1} \\mid x_t, x_0) = \\frac{q(x_t \\mid x_{t-1}, x_0)\\, q(x_{t-1} \\mid x_0)}{q(x_t \\mid x_0)}.
$$

the markov property of the forward process simplifies the first factor: $q(x_t \\mid x_{t-1}, x_0) = q(x_t \\mid x_{t-1})$. all three resulting densities are gaussians we already wrote down explicitly. the product/quotient of gaussians is gaussian, so

$$
q(x_{t-1} \\mid x_t, x_0) = \\mathcal{N}\\!\\left(\\tilde\\mu_t(x_t, x_0),\\; \\tilde\\beta_t I\\right)
$$

for some closed-form $\\tilde\\mu_t, \\tilde\\beta_t$ that depend on the noise schedule.

### step 3b — $p_\\theta(x_{t-1} \\mid x_t)$ is tractable

here we make a modeling choice: we *assume* our reverse process is gaussian,

$$
p_\\theta(x_{t-1} \\mid x_t) = \\mathcal{N}\\!\\left(\\mu_\\theta(x_t, t),\\; \\Sigma_\\theta(x_t, t)\\right).
$$

this is justified because, as $\\beta_t \\to 0$, the true reverse $q(x_{t-1} \\mid x_t)$ is provably close to gaussian.

### step 4 — the final loss

we now have a kl divergence between two gaussians, which has a closed form. after substituting and simplifying — fixing the variance and reparameterizing the mean in terms of a *noise predictor* $\\varepsilon_\\theta$ — the loss collapses to something almost embarrassingly simple:

$$
\\mathcal{L}_{\\text{ddpm}} = \\mathbb{E}_{t,\\, x_0,\\, \\varepsilon}\\!\\left[\\Big\\|\\, \\varepsilon_\\theta\\big(\\sqrt{\\bar\\alpha_t}\\,x_0 + \\sqrt{1-\\bar\\alpha_t}\\,\\varepsilon,\\; t\\big) \\;-\\; \\varepsilon\\Big\\|^2\\right].
$$

where $t \\sim \\mathcal{U}\\{1, \\ldots, T\\}$, $x_0 \\sim q_0(x_0)$, $\\varepsilon \\sim \\mathcal{N}(0, I)$.

in words: take a clean image, noise it to a random level $t$, ask the network to predict the noise that was added, and compute squared error. that's it. the expectation is over noise level $t$, training image $x_0$, and the random noise $\\varepsilon$ added.

it's worth pausing to appreciate this. we started from intractable maximum likelihood, applied jensen's inequality, expanded a sum of kls, used bayes' rule plus the markov property, and the whole apparatus collapses to **l2 regression on noise**.

## training recipe

putting it together:

1. sample a clean image $x_0 \\sim q_0(x_0)$, noise $\\varepsilon \\sim \\mathcal{N}(0, I)$, and time step $t \\sim \\mathcal{U}\\{1, \\ldots, T\\}$.
2. form $x_t = \\sqrt{\\bar\\alpha_t}\\,x_0 + \\sqrt{1-\\bar\\alpha_t}\\,\\varepsilon$.
3. predict $\\hat\\varepsilon = \\varepsilon_\\theta(x_t, t)$ and minimize $\\|\\hat\\varepsilon - \\varepsilon\\|^2$, backpropagating through $\\theta$.

note that we feed $t$ to the network too, so it knows how noisy the input is.

## inference recipe

to generate, we reverse the chain:

1. sample $x_T \\sim \\mathcal{N}(0, I)$.
2. for $t = T, T-1, \\ldots, 1$, perform the iterative update

$$
x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\!\\left(x_t - \\frac{1 - \\alpha_t}{\\sqrt{1-\\bar\\alpha_t}}\\,\\varepsilon_\\theta(x_t, t)\\right) + \\sigma_t z,
$$

where $z \\sim \\mathcal{N}(0, I)$ and $\\sigma_t$ is a small variance term.

read this carefully: the parenthesized expression shifts $x_t$ along the predicted noise direction (subtracting the predicted noise to remove it), and $\\sigma_t z$ adds a fresh small gaussian kick. the kick is critical — without it, the iteration would deterministically collapse to a single mode.

3. output $x_0$.

## ddpm is too slow

ddpm works, but the original paper used $T = 1000$ steps. each step is one neural network forward pass, so a single image takes a thousand evaluations of $\\varepsilon_\\theta$. that's orders of magnitude slower than vaes or gans and can mean minutes per sample.

so: can we go faster?

### attempt 1 — induction

apply the recursion inside itself: $x_{t-2}$ in terms of $x_t$, then $x_{t-3}$, and so on. the arithmetic works out, but you still call $\\varepsilon_\\theta$ at every step. no win.

### attempt 2 — just skip steps

take strides of size $k$. the problem: large jumps + injected stochasticity = quality crashes.

### reformulate the problem (ddim)

the crucial insight (song et al., 2020) is that **the loss only depends on the marginals $q(x_t \\mid x_0)$**, not on the full chain. so we are free to define a *different* reverse process, as long as it agrees with ddpm on the marginals.

the choice we make is: kill the inter-step stochasticity. we design a reverse update that is deterministic given $x_t$ and the model's prediction. the clean-image estimate at time $t$ is

$$
\\hat x_0(x_t, t) = \\frac{x_t - \\sqrt{1-\\bar\\alpha_t}\\,\\varepsilon_\\theta(x_t, t)}{\\sqrt{\\bar\\alpha_t}}.
$$

the ddim update is then

$$
x_{t-1} = \\sqrt{\\bar\\alpha_{t-1}}\\, \\hat x_0(x_t, t) + \\sqrt{1 - \\bar\\alpha_{t-1}}\\,\\varepsilon_\\theta(x_t, t),
$$

no extra noise term. this is the **d**enoising **d**iffusion **i**mplicit **m**odel.

because the stochastic step is gone, we can also skip steps: instead of going $T \\to T-1 \\to \\cdots \\to 0$, go through any subsequence $\\tau_1 > \\tau_2 > \\cdots > 0$ and apply the same formula with $\\bar\\alpha_{\\tau_i}$ and $\\bar\\alpha_{\\tau_{i+1}}$. crucially, **no retraining is needed** — the same noise predictor $\\varepsilon_\\theta$ works.

in practice this gives 10×–100× speedups. from the ddim paper's cifar-10 experiments:

| speed-up | 1× | 10× | 20× | 50× | 100× |
|---|---|---|---|---|---|
| fid change | baseline | +3% | +16% | +70% | +330% |

a 10× speedup costs almost nothing in quality — we lose the stochastic-noise diversity but the trade-off is usually worth it.

## summary

the ddpm mindset is: define a fixed, simple forward noising process; assume a gaussian reverse process; train the reverse model by maximizing an elbo; the elbo becomes a simple noise-prediction l2 loss thanks to bayes' rule plus gaussian closure. ddim then says: the same trained model can generate orders of magnitude faster if we drop the inter-step stochasticity and skip steps.

both ideas reappear, in different guises, throughout the rest of the course.`,j7=`## motivation

in lecture 1 we built diffusion models by writing down a hierarchical markov model, deriving an elbo, and reading off a noise-prediction loss. that worked, but the route was indirect. today we approach the same problem from a completely different angle, and we'll see that the two perspectives meet in a beautiful way.

the motivation: images come from some complicated, unknown distribution $p_{\\text{data}}(x)$. we want to push samples from a simple gaussian noise distribution toward that data distribution. if we knew the *gradient* of the log-density of the data, we could literally do this by gradient ascent — walking samples uphill in log-probability. so the question becomes: can we learn that gradient?

## why the *gradient of log* and not the gradient of the density itself?

you might think: "fine, just learn $\\nabla_x \\, p_{\\text{data}}(x)$ directly." two problems.

**problem 1 — normalization is intractable.** probability densities have to integrate to one. so we always model

$$
p_{\\text{data}}(x) = \\frac{f_\\theta(x)}{Z}, \\qquad Z = \\int f_\\theta(x)\\, dx.
$$

the normalizer $Z$ is a $d$-dimensional integral over the entire image space. there is no hope.

**problem 2 — numerical instability.** in low-density regions, $p$ can be astronomically small, and small differences in tiny numbers are noisy.

**the fix: take the gradient of the log.** notice

$$
\\nabla_x \\log p_{\\text{data}}(x) = \\nabla_x \\log f_\\theta(x) - \\nabla_x \\log Z = \\nabla_x \\log f_\\theta(x).
$$

the normalizer $Z$ doesn't depend on $x$, so it just disappears. we've sidestepped the intractability entirely. as a bonus, the log-gradient

$$
\\nabla_x \\log p(x) = \\frac{\\nabla_x p(x)}{p(x)}
$$

points in the same direction as $\\nabla_x p(x)$ but is rescaled by $1/p(x)$, which automatically inflates gradients in low-density regions where they would otherwise vanish.

this object — $\\nabla_x \\log p(x)$ — has a name. it is the **score function**:

$$
s(x) := \\nabla_x \\log p(x).
$$

geometrically, the score is a vector field over $\\mathbb{R}^d$: at every point it tells you the direction of steepest ascent of log-density. in lecture 3 we'll contrast this with a *velocity* field; for now think of the score as a compass pointing toward higher-probability regions.

## using the score to sample: langevin dynamics

if we had access to $s(x) = \\nabla_x \\log p(x)$, how would we sample? **langevin dynamics:**

$$
x_t = x_{t-1} + \\frac{\\alpha}{2}\\, s(x_{t-1}) + \\sqrt{\\alpha}\\,\\varepsilon_t,\\qquad \\varepsilon_t \\sim \\mathcal{N}(0, I).
$$

the deterministic term $\\tfrac{\\alpha}{2}\\, s$ pushes us toward higher density. the stochastic term $\\sqrt{\\alpha}\\,\\varepsilon$ is a brownian kick that prevents collapse to a single mode and lets the chain explore — it's an mcmc method. under mild conditions, as $t \\to \\infty$ and $\\alpha \\to 0$, the iterates converge to samples from $p$.

so if we can *learn* the score, we can sample. time to figure out how.

## score matching: the goal and the catch

the natural objective is to fit a parametric score model $s_\\theta(x)$ to the true score:

$$
\\mathcal{L}_{\\text{sm}} = \\mathbb{E}_{x \\sim p_{\\text{data}}}\\!\\left[\\left\\| s_\\theta(x) - \\nabla_x \\log p_{\\text{data}}(x) \\right\\|^2\\right].
$$

beautiful — except we don't have access to $\\nabla_x \\log p_{\\text{data}}(x)$. that's the whole reason we're here.

there are a few classical workarounds:

- **implicit score matching (ism)** — integrate by parts, $\\mathcal{L}_{\\text{ism}} = \\mathbb{E}_x\\!\\left[\\tfrac{1}{2}\\|s_\\theta(x)\\|^2 + \\nabla_x \\cdot s_\\theta(x)\\right]$. the divergence is expensive in high dimensions.
- **sliced score matching (ssm)** — project onto random directions $v$, $\\mathcal{L}_{\\text{ssm}} = \\mathbb{E}_{x, v}\\!\\left[2 v^\\top \\nabla_x s_\\theta(x) v + |v^\\top s_\\theta(x)|^2\\right]$. cheaper, but still requires hessian-vector products.

both work in principle but are awkward at scale.

## clever idea: add noise so the score becomes analytical

here is the move that unlocks everything. score matching is hard because $\\nabla_x \\log p_{\\text{data}}(x)$ is unknown. but for a *gaussian*, the score is trivial.

score of a 1-d gaussian, $x \\sim \\mathcal{N}(\\mu, \\sigma^2)$:

$$
p(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}}\\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right) \\;\\Longrightarrow\\; \\nabla_x \\log p(x) = -\\frac{x - \\mu}{\\sigma^2}.
$$

so: take any data point $x$, perturb it with gaussian noise to get $\\tilde x = x + \\sigma \\varepsilon$ with $\\varepsilon \\sim \\mathcal{N}(0, I)$. then the *conditional* density is gaussian:

$$
q_\\sigma(\\tilde x \\mid x) = \\mathcal{N}(x,\\; \\sigma^2 I)\\quad\\text{so}\\quad \\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x \\mid x) = -\\,\\frac{\\tilde x - x}{\\sigma^2}.
$$

that right-hand side is fully tractable: it's just (noise added) divided by $-\\sigma^2$.

the **denoising score matching** loss (vincent, 2010) replaces the unknown true score with the conditional score:

$$
\\mathcal{L}_{\\text{dsm}}(q_\\sigma) = \\mathbb{E}_{\\tilde x, x}\\!\\left[\\left\\|s_\\theta(\\tilde x) - \\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x \\mid x)\\right\\|^2\\right].
$$

### why is this equivalent to fitting the noised marginal score?

the noised marginal is $q_\\sigma(\\tilde x) = \\int q_\\sigma(\\tilde x \\mid x)\\, p_{\\text{data}}(x)\\, dx$ (a mixture of gaussians centered on data points). what we *really* care about is matching $\\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x)$. the vincent (2010) result says:

$$
\\mathbb{E}_{\\tilde x \\sim q_\\sigma}\\!\\left[\\|s_\\theta(\\tilde x) - \\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x)\\|^2\\right] = \\mathbb{E}_{\\tilde x, x}\\!\\left[\\|s_\\theta(\\tilde x) - \\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x \\mid x)\\|^2\\right] + \\text{const}.
$$

sketch: expand $\\|a - b\\|^2 = \\|a\\|^2 - 2\\langle a, b\\rangle + \\|b\\|^2$ on both sides. the $\\|a\\|^2$ terms (with $a = s_\\theta$) match. the $\\|b\\|^2$ terms don't depend on $\\theta$, so they're irrelevant for optimization. so we only need the cross terms $-2\\langle s_\\theta, \\cdot \\rangle$ to match. take the marginal-side cross term and use $q\\,\\nabla \\log q = \\nabla q$:

$$
\\mathbb{E}_{\\tilde x \\sim q_\\sigma}\\!\\left[\\langle s_\\theta(\\tilde x),\\, \\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x) \\rangle\\right]
= \\int \\langle s_\\theta(\\tilde x),\\, \\nabla_{\\tilde x} q_\\sigma(\\tilde x) \\rangle\\, d\\tilde x.
$$

now substitute the definition of the marginal $q_\\sigma(\\tilde x) = \\int q_\\sigma(\\tilde x \\mid x)\\, p_{\\text{data}}(x)\\, dx$ and push the gradient inside the integral:

$$
= \\int \\!\\Big\\langle s_\\theta(\\tilde x),\\, \\int \\nabla_{\\tilde x} q_\\sigma(\\tilde x \\mid x)\\, p_{\\text{data}}(x)\\, dx \\Big\\rangle\\, d\\tilde x
= \\int\\!\\!\\int q_\\sigma(\\tilde x \\mid x)\\, p_{\\text{data}}(x)\\, \\langle s_\\theta(\\tilde x),\\, \\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x \\mid x) \\rangle\\, dx\\, d\\tilde x,
$$

where the last step undoes the same $\\nabla q = q\\,\\nabla \\log q$ identity for the *conditional*. recognizing $q_\\sigma(\\tilde x \\mid x)\\, p_{\\text{data}}(x)$ as the joint density of $(\\tilde x, x)$:

$$
= \\mathbb{E}_{\\tilde x, x}\\!\\left[\\langle s_\\theta(\\tilde x),\\, \\nabla_{\\tilde x} \\log q_\\sigma(\\tilde x \\mid x) \\rangle\\right],
$$

which is exactly the cross term on the dsm side. the two cross terms agree, the $\\|s_\\theta\\|^2$ terms agree, and the $\\|b\\|^2$ terms differ only by a $\\theta$-independent constant — proving the equality.

bottom line: minimizing dsm is equivalent (up to a $\\theta$-independent constant) to minimizing the score-matching loss on the *noised* distribution $q_\\sigma$. tractable, exact, and just $L^2$ regression in disguise.

## a subtlety: vanilla dsm is brittle

there's a knob we haven't tuned: the noise level $\\sigma$.

- **small $\\sigma$:** $q_\\sigma$ is close to $p_{\\text{data}}$, which is what we want — but the data lies on a thin manifold and there is essentially zero probability mass in low-density regions. the score estimator is very noisy there because we never see training points away from the manifold.
- **large $\\sigma$:** $q_\\sigma$ is smooth and the score is well-estimated everywhere — but it no longer resembles $p_{\\text{data}}$.

neither extreme is good on its own.

### ncsn: combine multiple noise levels

song & ermon's **noise conditional score network** (ncsn, 2019) trains one model that takes the noise level as input:

$$
s_\\theta(x, \\sigma_i),\\qquad \\sigma_1 < \\sigma_2 < \\cdots < \\sigma_L.
$$

the training loss aggregates dsm losses across levels:

$$
\\mathcal{L}_{\\text{ncsn}} = \\sum_{i=1}^L \\lambda(\\sigma_i)\\, \\mathbb{E}_{x, \\tilde x}\\!\\left[\\left\\|s_\\theta(\\tilde x, \\sigma_i) - \\nabla_{\\tilde x} \\log q_{\\sigma_i}(\\tilde x \\mid x)\\right\\|^2\\right].
$$

at inference time we sample with **annealed langevin dynamics** (ald): start at the largest noise level (where the score is well-estimated), do a few langevin steps, then anneal $\\sigma$ down to the smallest level. concretely:

1. sample $x \\sim \\mathcal{N}(0, \\sigma_L^2 I)$.
2. for each $\\sigma_i$ from $\\sigma_L$ down to $\\sigma_1$, perform $K$ steps of langevin dynamics:

$$
x \\;\\leftarrow\\; x + \\tfrac{\\alpha_i}{2}\\, s_\\theta(x, \\sigma_i) + \\sqrt{\\alpha_i}\\,\\varepsilon, \\qquad \\varepsilon \\sim \\mathcal{N}(0, I).
$$

3. return $x$.

the high noise levels do the rough work of moving the chain into a high-density region; the low noise levels polish the details.

## ddpm and ncsn are the same model

compare: ddpm trains a **noise predictor** $\\varepsilon_\\theta(x_t, t)$, and ncsn trains a **score predictor** $s_\\theta(x, \\sigma)$. they look different — but they're not.

for ddpm, $x_t \\mid x_0 \\sim \\mathcal{N}(\\sqrt{\\bar\\alpha_t}\\, x_0,\\; (1-\\bar\\alpha_t)I)$. apply the gaussian-score formula to this conditional:

$$
\\nabla_{x_t} \\log q(x_t \\mid x_0) = -\\,\\frac{x_t - \\sqrt{\\bar\\alpha_t}\\, x_0}{1 - \\bar\\alpha_t} = -\\,\\frac{\\sqrt{1-\\bar\\alpha_t}\\,\\varepsilon}{1 - \\bar\\alpha_t} = -\\,\\frac{\\varepsilon}{\\sqrt{1-\\bar\\alpha_t}}.
$$

so the score is just (negative) the noise we added, divided by a known scaling. **score and noise prediction are equivalent reparameterizations.** ddpm is variance-*preserving* ($x_t$ has bounded variance), ncsn is variance-*exploding* ($x_t$ variance grows with $\\sigma$). same idea, different bookkeeping.

## going continuous: stochastic differential equations

so far, time is discrete. what if $T$ is huge and the per-step noise is tiny? the discrete process should converge to a continuous-time stochastic process. concretely:

a **wiener process** $W_t$ is the continuous analog of "summing many independent gaussian increments." it satisfies:

- $W_0 = 0$,
- $W_t - W_s \\sim \\mathcal{N}(0, (t-s)I)$ for $t > s$,
- increments over disjoint intervals are independent.

heuristically, $dW \\sim \\sqrt{dt}\\,\\varepsilon$.

### from ddpm to a forward sde

start from $x_t = \\sqrt{1-\\beta_t}\\, x_{t-1} + \\sqrt{\\beta_t}\\,\\varepsilon$. subtract:

$$
x_t - x_{t-1} = (\\sqrt{1-\\beta_t} - 1)\\, x_{t-1} + \\sqrt{\\beta_t}\\,\\varepsilon.
$$

define $\\beta_t = \\beta(t)\\,dt$ (the noise rate at time $t$ times the timestep). substituting,

$$
x_t - x_{t-1} = (\\sqrt{1 - \\beta(t)\\,dt} - 1)\\, x_{t-1} + \\sqrt{\\beta(t)\\,dt}\\,\\varepsilon.
$$

for small $dt$, taylor-expand $\\sqrt{1-\\beta(t)\\,dt} \\approx 1 - \\tfrac{1}{2}\\beta(t)\\,dt$, and use $\\sqrt{dt}\\,\\varepsilon = dW$:

$$
dx = -\\tfrac{1}{2}\\beta(t)\\, x\\, dt + \\sqrt{\\beta(t)}\\, dW.
$$

this is the **variance-preserving sde** — the continuous limit of ddpm.

### the general form

every diffusion model we've seen fits the template

$$
dx = \\underbrace{f(x, t)\\, dt}_{\\text{drift (deterministic)}} + \\underbrace{g(t)\\, dW}_{\\text{diffusion (stochastic)}}.
$$

the two flavors that map onto our two earlier methods:

| | variance-preserving (ddpm) | variance-exploding (ncsn) |
|---|---|---|
| $f(x, t)$ | $-\\tfrac{1}{2}\\beta(t)\\, x$ | $0$ |
| $g(t)$ | $\\sqrt{\\beta(t)}$ | $\\sqrt{\\dfrac{d[\\sigma^2(t)]}{dt}}$ |
| $x_t \\mid x_0$ | $\\mathcal{N}(\\sqrt{\\bar\\alpha(t)}\\, x_0,\\; (1-\\bar\\alpha(t))I)$ | $\\mathcal{N}(x_0,\\; \\sigma^2(t)\\, I)$ |

either way, training is the same denoising score matching as before, just with continuous $t \\sim \\mathcal{U}(0, T)$:

$$
\\mathcal{L}_{\\text{dsm}} = \\mathbb{E}_{t, x_0, x_t}\\!\\left[\\lambda(t)\\, \\big\\|s_\\theta(x_t, t) - \\nabla_{x_t} \\log p(x_t \\mid x_0)\\big\\|^2\\right].
$$

## the reverse sde

now the magical fact (anderson, 1982). if a forward process satisfies

$$
dx = f(x, t)\\, dt + g(t)\\, dW,
$$

then there is a **reverse-time sde** that samples the same marginals when run backward:

$$
dx = \\big[f(x, t) - g(t)^2\\, \\nabla_x \\log p_t(x)\\big]\\, dt + g(t)\\, d\\bar W.
$$

where $d\\bar W$ is a reverse-time wiener process.

pause to read this. the drift in reverse time has the original drift $f(x, t)$ *plus* a correction term $-g(t)^2 \\nabla_x \\log p_t(x)$. the correction pulls samples toward regions of higher density even more aggressively than the score alone, to compensate for the diffusion term that's still pushing them around stochastically. the score $\\nabla_x \\log p_t(x)$ is what we're learning. everything else is known from the forward process.

### inference recipe (euler–maruyama)

to generate, we discretize the reverse sde. the euler–maruyama scheme:

1. sample $x_T \\sim \\mathcal{N}(0, \\sigma_T^2 I)$.
2. for $i = N, N-1, \\ldots, 1$, with step size $\\Delta t = t_i - t_{i-1}$,

$$
x_{t_{i-1}} = x_{t_i} - \\big[f(x_{t_i}, t_i) - g(t_i)^2\\, s_\\theta(x_{t_i}, t_i)\\big]\\Delta t + g(t_i)\\sqrt{\\Delta t}\\,\\varepsilon_i.
$$

3. output $x_0$.

this needs a lot of steps (1000–2000) because we don't know in advance which regions are "easy" vs. "hard," and the stochastic term injects extra error that we have to absorb with small $\\Delta t$.

## probability flows: removing the stochasticity

the stochastic term has two costs. **slower solver** because we need fine discretization to control the noise. **more error sources** — both finite-step discretization error and the injected stochastic noise. so: can we get away without it?

suppose hypothetically we wrote

$$
dx = v(x, t)\\, dt
$$

for some drift $v$. no $dW$. then we'd have a deterministic ode, and ode solvers are *much* more efficient (runge-kutta etc.). faster solver, only one source of error (discretization).

the miracle (song et al., 2020) is that you really *can* convert the sde to an ode with the same marginals — a different sample-level dynamic, but identical density evolution at every time.

### derivation sketch

start from the forward sde

$$
dx = f(x, t)\\, dt + g(t)\\, dW.
$$

the corresponding **fokker–planck equation** describes how the density $p_t(x)$ evolves (this is a theorem; treat as given):

$$
\\frac{\\partial p_t}{\\partial t} = -\\nabla \\cdot \\big(f(x, t)\\, p_t(x)\\big) + \\tfrac{1}{2} g(t)^2 \\,\\Delta p_t(x).
$$

use the identity $g^2 \\Delta p = g^2 \\nabla \\cdot (\\nabla p) = g^2 \\nabla \\cdot (p\\, \\nabla \\log p)$ (because $\\nabla p = p\\, \\nabla \\log p$):

$$
\\frac{\\partial p_t}{\\partial t} = -\\nabla \\cdot \\!\\Big(p_t \\big[f(x, t) - \\tfrac{1}{2} g(t)^2 \\nabla_x \\log p_t(x)\\big]\\Big).
$$

this is a **continuity equation** $\\partial_t p + \\nabla \\cdot (p\\, v) = 0$ with effective velocity

$$
v(x, t) = f(x, t) - \\tfrac{1}{2} g(t)^2 \\nabla_x \\log p_t(x).
$$

a continuity equation describes the density evolution under *deterministic* transport along the velocity $v$. in other words, the deterministic ode

$$
dx = \\Big[f(x, t) - \\tfrac{1}{2} g(t)^2\\, \\underbrace{\\nabla_x \\log p_t(x)}_{\\approx s_\\theta(x, t)}\\Big] dt
$$

has the **same marginal densities** $p_t$ at every $t$ as the original sde. this is the **probability flow ode (pf-ode)**.

important caveat: same marginals does **not** mean same trajectories. a given starting noise $x_T$ leads to *different* image samples under the sde versus the ode. both samples are drawn from the same data distribution, but the path through latent space is different.

### comparison

| | reverse sde | pf-ode |
|---|---|---|
| equation | $dx = [f - g^2 s_\\theta]dt + g\\, d\\bar W$ | $dx = [f - \\tfrac{1}{2}g^2 s_\\theta]\\, dt$ |
| process | stochastic | deterministic |
| diversity | higher | lower |
| sample quality | higher | lower |
| sampling speed | slower | faster |

notice the analogy with lecture 1: pf-ode is to the reverse sde what ddim is to ddpm. same trade-off, same way of buying speed.

## faster ode solvers: dpm-solver

once we have an ode, we can use any ode solver. the simplest, **euler's method**, is 1 nfe per step but has large error. **runge–kutta 4** is 4 nfes per step with smaller error. can we do better by exploiting the *structure* of the pf-ode?

for diffusion, the pf-ode has the form

$$
\\frac{dx}{dt} = a(t)\\, x + b(t)\\, \\varepsilon_\\theta(x, t),
$$

where the first term is **linear in $x$** and the second is **non-linear in $x$** (because $\\varepsilon_\\theta$ is a neural network).

**traditional solvers** discretize the whole right-hand side. **dpm-solver** (lu et al., 2022) does something smarter: solve the linear part *exactly* (it's just an ode with constant coefficients in disguise), and only discretize the nonlinear part. after variation of constants and a change of variables to the noise log-snr, the iteration becomes

$$
x_{t_{i-1}} = \\alpha\\, x_{t_i} + \\int_{t_i}^{t_{i-1}} \\kappa(s)\\, \\varepsilon_\\theta(x_s, s)\\, ds,
$$

and only the integral (the nonlinear term) needs a numerical approximation. approximating $\\varepsilon_\\theta$ with a taylor expansion of order $k-1$ gives **dpm-solver-$k$**:

- dpm-solver-1: 1 nfe per step.
- dpm-solver-2: 2 nfe per step.
- dpm-solver-$k$: $k$ nfe per step.

empirically: 10–20 nfes are enough to produce reasonable samples, no retraining required.

## the big picture

we've now seen two stories:

- **lecture 1 (variational view):** define a forward chain, write an elbo, derive a noise-prediction loss. speedup via ddim.
- **lecture 2 (score view):** learn $\\nabla_x \\log p_t(x)$ via denoising score matching. take continuous limit → sde. same marginals → pf-ode. speedup via dpm-solver.

these are two languages for the *same model class*. ddpm is a discretization of a variance-preserving sde; ddim is essentially a coarse pf-ode solver. score matching and noise prediction are equivalent reparameterizations.

the mindset of lecture 2 — **forward sde → fokker-planck → continuity equation → pf-ode → fast solver** — is the through-line that gets us from "1000 steps to make one image" down to "10 steps to make one image" without retraining a thing.`,P7=`## motivation

we've now seen image generation through two lenses. lecture 1 was the *variational* lens: write a noising chain, derive an elbo, train a noise predictor. lecture 2 was the *score* lens: learn $\\nabla_x \\log p_t(x)$, take the continuous limit, and either follow a stochastic reverse sde or its deterministic probability-flow ode counterpart.

today we change perspective once more, to the *flow* lens. the mental picture: instead of adding noise and learning to remove it, we directly **transport probability mass** from a simple initial distribution $p_0$ (gaussian noise) to the target $p_1 = p_{\\text{data}}$. we learn a vector field that at every time $t \\in [0, 1]$ tells each particle where to go next.

this view will turn out to be cleaner mathematically, give us a slightly more general training objective (conditional flow matching), and motivate a clever trick called **rectified flow** that straightens out generation paths so we can use very few inference steps.

## notation: pay attention to the time direction

a note that is genuinely important when reading flow-matching papers: the **convention for time is flipped** relative to what we used in lectures 1 and 2.

- in diffusion / score matching: $x_0$ is the **clean** image, $x_T$ is **pure noise**.
- in flow matching: $x_0 \\sim p_0 = \\mathcal{N}(0, I)$ is the **initial (noise)** distribution, $x_1 \\sim p_1 = p_{\\text{data}}$ is the **target (clean)** distribution.

same physics, opposite arrow. get used to it.

## now, we define the basic objects

**trajectory.** $\\psi_t(x_0)$ is the path taken by a single sample over time, starting from $x_0$ at $t = 0$ and ending at $x_1 = \\psi_1(x_0)$ at $t = 1$. so $\\psi : [0, 1] \\times \\mathbb{R}^d \\to \\mathbb{R}^d$.

**flow.** the collection of trajectories $\\psi_t(\\cdot)$ as $x_0$ varies. think of a smoke cloud whose particles each follow their own path — the flow is the choreography of *all* of them.

**probability path.** $p_t(x)$ is the distribution of $x_t$ at time $t$. we require $p_0 = \\mathcal{N}(0, I)$ and $p_1 = p_{\\text{data}}$, so a probability path is a continuous interpolation between the two.

**vector field (velocity).** $u_t(x) \\in \\mathbb{R}^d$: the direction and speed at which a particle currently at location $x$ at time $t$ should move. the relationship between trajectory and velocity is just an ode:

$$
\\frac{dx_t}{dt} = u_t(x_t).
$$

### velocity vs. score: highway vs. compass

useful contrast. the score $\\nabla_x \\log p_t(x)$ tells you the general direction of higher probability — a **compass**. the velocity $u_t(x)$ tells you specifically where to *go* from your current location at this moment — a **highway sign with a speed**: direction and magnitude.

a trajectory starting from $x_0$ is **unique** as long as $u_t$ is lipschitz continuous (picard–lindelöf theorem). lipschitz means $\\|u_t(x) - u_t(y)\\| \\le M\\|x - y\\|$ for some constant $M$ — i.e., the velocity doesn't vary too dramatically over short distances. with lipschitz $u$, ode solutions don't cross or bifurcate.

## two ways to think about the same dynamics

given a velocity field $u_t(x)$, we can describe its effect at two scales.

**single-sample view (ode):**

$$
\\frac{dx_t}{dt} = u_t(x_t),\\qquad x_0 \\sim p_0.
$$

**distributional view (continuity equation / mass conservation):**

$$
\\frac{\\partial p_t(x)}{\\partial t} = -\\,\\nabla \\cdot \\big(p_t(x)\\, u_t(x)\\big).
$$

the continuity equation is just a statement of conservation: the rate at which density at $x$ changes equals (inflow of probability flux) minus (outflow). the "flux" is $p_t \\cdot u_t$ — density times velocity, exactly like flow rate in fluid dynamics.

[question: what is the definition of flux, wht does it measure, and why $p_t \\cdot u_t$ is the right quantity to measure this]

### why the divergence is of the *flux* and not of the *velocity*

a subtlety worth pausing on. you might have written the continuity equation as $\\partial_t p = -\\nabla \\cdot u$. **wrong.** consider a scenario where everything has constant probability density and constant velocity, $p_t \\equiv c$ and $u_t \\equiv v_0$. density isn't changing, so $\\partial_t p = 0$. the divergence of the velocity is also zero (it's a constant), so we'd get the same answer either way. but now imagine the *velocity* is constant and the *density* varies: probability mass is sliding sideways, and densities at fixed locations should change. $\\nabla \\cdot u_t = 0$, but $\\nabla \\cdot (p_t u_t) \\ne 0$. the right object to track is the probability *flux* $p_t u_t$.

in 1-d, $\\text{div}(f) = \\partial f / \\partial x$. in $d$ dimensions, $\\text{div}(f) = \\nabla \\cdot f = \\sum_{i=1}^d \\partial f_i / \\partial x_i$. positive divergence at a point means probability is leaving faster than arriving (density at $x$ is decreasing); negative divergence means the opposite.

if $u_t$ generates the path $p_t$ (the two satisfy the continuity equation), then a sample $x_0 \\sim p_0$ pushed forward via $dx_t = u_t(x_t)\\, dt$ will satisfy $x_t \\sim p_t$ at every $t$. **vector field generates probability path.** this is the key bridge.

## flow models: training and inference

**goal.** map $x_0 \\sim p_0$ to $x_1 \\sim p_1$.

**strategy.**

1. **training.** estimate the vector field $u_t(x)$ for all $t \\in [0, 1]$ and all $x \\in \\mathbb{R}^d$ via a neural network $u^\\theta_t(x)$.
2. **inference.** sample $x_0 \\sim p_0$, then numerically solve $\\dot x_t = u^\\theta_t(x_t)$ to obtain $x_1$.

### earlier attempts: continuous normalizing flows

the naive idea: learn $u^\\theta$ by maximum likelihood. take logs of the continuity equation and integrate:

$$
\\frac{d}{dt} \\log p_t(x_t) = -\\,\\nabla \\cdot u_t(x_t),
$$

which means

$$
\\log p^\\theta_1(x_1) = \\log p_0(x_0) + \\int_0^1 -\\nabla \\cdot u^\\theta_t(x_t)\\, dt.
$$

then one can do gradient ascent on $\\log p^\\theta_1$ over training data. this is **continuous normalizing flows** (chen et al., 2018). the catch: at training time, you have to *simulate the ode* and compute the divergence of the network — slow, expensive, and a pain.

we want a simulation-free training objective.

## flow matching (and why it's hard at first glance)

suppose we knew the true target velocity $u_t(x)$. then the obvious loss is l2 regression:

$$
\\mathcal{L}_{\\text{fm}} = \\mathbb{E}_{t, x \\sim p_t}\\!\\left[\\|u^\\theta_t(x) - u_t(x)\\|^2\\right].
$$

but, exactly as in score matching, we don't have access to the marginal $u_t(x)$.

the key trick — *the same trick as denoising score matching* — is to fall back on a **conditional** version where the math is closed-form, and then prove that the conditional and marginal objectives have the same gradients.

## a simpler setup: condition on a target sample

pick a single data point $x_1$. what if our target distribution were just a dirac at $x_1$? then we could ask: how should we go from $p_0 = \\mathcal{N}(0, I)$ to a dirac at $x_1$?

**conditional probability path.** a clean choice (lipman et al., 2022) is the linear gaussian interpolation:

$$
p_t(x \\mid x_1) = \\mathcal{N}(t\\, x_1,\\; (1-t)^2 I).
$$

sanity check the boundary conditions:
- at $t = 0$: $\\mathcal{N}(0, I) = p_0$. ✓
- at $t = 1$: $\\mathcal{N}(x_1, 0) = \\delta_{x_1}$. ✓

concretely, if $x_t \\sim p_t(\\cdot \\mid x_1)$, then we can write

$$
x_t = t\\, x_1 + (1 - t)\\, x_0,\\qquad x_0 \\sim \\mathcal{N}(0, I).
$$

a straight line from a gaussian sample $x_0$ to the data point $x_1$, parameterized by $t \\in [0, 1]$.

**conditional vector field.** what velocity generates this conditional path? differentiate the trajectory:

$$
u_t(x_t \\mid x_1) = \\frac{d x_t}{dt} = x_1 - x_0.
$$

or equivalently, in terms of $x_t$:

$$
u_t(x \\mid x_1) = \\frac{x_1 - x}{1 - t}.
$$

you can check (via the continuity equation) that this $u_t(\\cdot \\mid x_1)$ does generate $p_t(\\cdot \\mid x_1)$.

**consequence.** if $x_0 \\sim p_0(\\cdot \\mid x_1) = \\mathcal{N}(0, I)$ and we evolve $x_t$ via $\\dot x_t = u_t(x_t \\mid x_1)$, then $x_t \\sim p_t(\\cdot \\mid x_1)$ for every $t$. beautiful and simple.

## from conditional to marginal

the marginal probability path is obtained by integrating out $x_1$:

$$
p_t(x) = \\int p_t(x \\mid x_1)\\, p_{\\text{data}}(x_1)\\, dx_1.
$$

[question: does integrating out x_1 mean averaging across all training datapoints / taking expectation in a way]

boundary conditions: $p_0(x) = \\int \\mathcal{N}(0, I)\\, p_{\\text{data}}(x_1)\\, dx_1 = \\mathcal{N}(0, I)$ (the conditional doesn't depend on $x_1$ at $t=0$); $p_1(x) = \\int \\delta_{x_1}\\, p_{\\text{data}}(x_1)\\, dx_1 = p_{\\text{data}}(x)$. ✓

the corresponding **marginal vector field** is the *posterior-weighted average* of the conditional fields. here is how it is forced on us.

we *want* a marginal velocity $u_t(x)$ that generates the marginal path $p_t(x)$ — i.e., satisfies the continuity equation

$$
\\partial_t p_t(x) = -\\nabla_x \\cdot \\big(p_t(x)\\, u_t(x)\\big).
$$

we *know* every conditional pair satisfies its own continuity equation,

$$
\\partial_t p_t(x \\mid x_1) = -\\nabla_x \\cdot \\big(p_t(x \\mid x_1)\\, u_t(x \\mid x_1)\\big).
$$

multiply the conditional version by $p_{\\text{data}}(x_1)$ and integrate over $x_1$:

$$
\\int p_{\\text{data}}(x_1)\\, \\partial_t p_t(x \\mid x_1)\\, dx_1 \\;=\\; -\\int p_{\\text{data}}(x_1)\\, \\nabla_x \\cdot \\big(p_t(x \\mid x_1)\\, u_t(x \\mid x_1)\\big)\\, dx_1.
$$

on the left, swap the time derivative with the integral (regularity assumption) and use the definition of the marginal — that's exactly $\\partial_t p_t(x)$. on the right, $\\nabla_x$ doesn't see $x_1$, so it pulls out of the integral:

$$
\\partial_t p_t(x) \\;=\\; -\\nabla_x \\cdot \\!\\left[\\int p_t(x \\mid x_1)\\, u_t(x \\mid x_1)\\, p_{\\text{data}}(x_1)\\, dx_1\\right].
$$

now compare with what the marginal continuity equation requires:

$$
\\partial_t p_t(x) \\;=\\; -\\nabla_x \\cdot \\big(p_t(x)\\, u_t(x)\\big).
$$

both right-hand sides are the divergence of *some* vector field, set equal to the same $\\partial_t p_t$. strictly speaking, this only forces the two vector fields to agree *up to a divergence-free term* — there are infinitely many velocities that generate the same density evolution. so we're not solving for $u_t(x)$ uniquely; we're making a **choice**.

the natural choice is to set the two flux fields equal directly:

$$
p_t(x)\\, u_t(x) \\;:=\\; \\int p_t(x \\mid x_1)\\, u_t(x \\mid x_1)\\, p_{\\text{data}}(x_1)\\, dx_1.
$$

with this *definition*, the marginal continuity equation is satisfied by construction (just take $\\nabla_x \\cdot$ of both sides and read off both equations above). dividing by $p_t(x)$ gives the formula:

$$
u_t(x) = \\int u_t(x \\mid x_1)\\, \\underbrace{\\frac{p_t(x \\mid x_1)\\, p_{\\text{data}}(x_1)}{p_t(x)}}_{= p(x_1 \\mid x)}\\, dx_1.
$$

the recognized factor inside the integral is just bayes' rule: posterior over targets given current location.

read this as: "given that i am at location $x$ at time $t$, where should i go?" the answer is to consider every possible target $x_1$, weight it by how plausible it is that i'm being routed toward $x_1$, and take the weighted average velocity. **posterior mean.**

the construction also automatically *certifies* what we wanted: $u_t$ generates $p_t$, because we built it by enforcing the marginal continuity equation. so the derivation does double duty — it both gives us the formula and proves it's the right one.

## the miracle: cfm has the same gradients as fm

the conditional flow-matching loss is

$$
\\mathcal{L}_{\\text{cfm}} = \\mathbb{E}_{t,\\, x_1,\\, x \\sim p_t(\\cdot \\mid x_1)}\\!\\left[\\|u^\\theta_t(x) - u_t(x \\mid x_1)\\|^2\\right].
$$

this is **tractable** — $u_t(x \\mid x_1)$ is the closed-form expression we just derived. the flow-matching loss

[question: this being tractable menas that if we know what training point we are going towards, we know which direction to go, but if we don't know which x1 is our target, the direction that we will go towards is not tractable]

$$
\\mathcal{L}_{\\text{fm}} = \\mathbb{E}_{t, x \\sim p_t}\\!\\left[\\|u^\\theta_t(x) - u_t(x)\\|^2\\right]
$$

is what we *actually* want but can't compute. the claim:

$$
\\nabla_\\theta\\, \\mathcal{L}_{\\text{fm}} = \\nabla_\\theta\\, \\mathcal{L}_{\\text{cfm}}.
$$

i.e., training on the cfm loss is gradient-equivalent to training on the fm loss.

### sketch of why

expand both with $\\|a - b\\|^2 = \\|a\\|^2 - 2\\langle a, b\\rangle + \\|b\\|^2$. the $\\|u^\\theta_t\\|^2$ terms agree. the $\\|u_t\\|^2$ and $\\|u_t(\\cdot \\mid x_1)\\|^2$ terms don't depend on $\\theta$ — irrelevant. so the only thing to check is that the cross terms agree:

$$
\\mathbb{E}_{t, x_1, x}\\big[\\langle u^\\theta_t(x),\\; u_t(x \\mid x_1)\\rangle\\big] \\;\\stackrel{?}{=}\\; \\mathbb{E}_{t, x}\\big[\\langle u^\\theta_t(x),\\; u_t(x)\\rangle\\big].
$$

compute the lhs:

$$
\\int_t \\int_{x_1} \\int_x \\langle u^\\theta_t(x),\\, u_t(x \\mid x_1)\\rangle\\, p_t(x \\mid x_1)\\, p_{\\text{data}}(x_1)\\, dx\\, dx_1\\, dt.
$$

pull $u^\\theta_t(x)$ out and integrate the inside over $x_1$:

$$
\\int_{x_1} u_t(x \\mid x_1)\\, p_t(x \\mid x_1)\\, p_{\\text{data}}(x_1)\\, dx_1
= p_t(x) \\int_{x_1} u_t(x \\mid x_1)\\, \\frac{p_t(x \\mid x_1) p_{\\text{data}}(x_1)}{p_t(x)}\\, dx_1
= p_t(x)\\, u_t(x).
$$

that last step uses the definition of the marginal vector field. plugging back:

$$
\\int_t \\int_x \\langle u^\\theta_t(x),\\, u_t(x)\\rangle\\, p_t(x)\\, dx\\, dt = \\mathbb{E}_{t, x \\sim p_t}\\big[\\langle u^\\theta_t(x),\\, u_t(x)\\rangle\\big].
$$

done — the cross terms agree, so the gradients agree.

## final recap of the strategy

1. derive the target vector field for a simple case — dirac targets give us closed-form conditional dynamics.
2. construct the marginal target vector field via the continuity equation.
3. show the loss is tractable — gradients of fm and cfm are equal.
4. read off a stunningly simple loss.

[question: what exactly is the continuity equation, what was its role here?]

for the linear interpolation $x_t = t x_1 + (1-t) x_0$, the conditional velocity is just $x_1 - x_0$, so the final training objective is

$$
\\mathcal{L}_{\\text{cfm}} = \\mathbb{E}_{t,\\, x_0,\\, x_1}\\!\\left[\\|u^\\theta_t(t x_1 + (1-t) x_0) - (x_1 - x_0)\\|^2\\right].
$$

read that aloud: sample noise $x_0$, sample data $x_1$, sample a time $t$, take the linear interpolant, and ask the network to predict $x_1 - x_0$ at the interpolant. that's *all*.

### why is it called "flow" matching?

historical reasons (continuous normalizing flows). and: if $u_t$ is lipschitz, the flow $\\psi_t$ is a 1-to-1 mapping at each time. so we can think of $u^\\theta$ ↔ $\\psi^\\theta$ as the same object in different language — vector field or flow.

## training and inference recipes

**training.**

1. sample noise $x_0 \\sim \\mathcal{N}(0, I)$, clean image $x_1 \\sim p_{\\text{data}}$, and time $t \\sim \\mathcal{U}(0, 1)$.
2. form $x_t = (1-t)\\, x_0 + t\\, x_1$.
3. predict $\\hat v = u^\\theta_t(x_t)$ and minimize $\\|\\hat v - (x_1 - x_0)\\|^2$.

**inference.**

1. sample $x_0 \\sim \\mathcal{N}(0, I)$.
2. use a numerical ode solver (e.g., euler) to integrate from $t = 0$ to $t = 1$:

$$
x_{t_i} = x_{t_{i-1}} + u^\\theta_{t_{i-1}}(x_{t_{i-1}})\\,(t_i - t_{i-1}).
$$

3. output $x_1$.

already deterministic. no pf-ode detour — flow matching *is* deterministic from the start.

## are we happy? (spoiler: not quite.)

two concrete problems.

**learning complexity (intersecting paths).** consider a 2-d toy: two noise samples and two data samples, where the natural "x" pairing has paths that cross in the middle. the marginal vector field at the crossing has to average over two completely different target velocities — it ends up pointing in some compromise direction, which doesn't actually take any sample to its correct destination. the marginal field is well-defined but is the *posterior mean* of conditional fields, and means do badly on multimodal data. result: the model has to learn complicated curved trajectories to disentangle paths that should have been straight.

**inference inefficiency.** curved paths require many small steps to integrate accurately. even with a well-trained model, euler with 4 steps will be way off if the path bends sharply. and there's no cheap trick like dpm-solver here — the velocity has no exploitable linear structure to factor out.

## rectified flow: straighten the paths

the fix (liu et al., 2022) is shockingly simple. we retrain on the *paired* data we generated with the first model, which forces straighter paths.

**step 0.** train an initial flow-matching model. call it the **1-rectified flow**, with mapping $\\psi^{(1)}$.

**step 1.** use $\\psi^{(1)}$ to generate paired data: sample $x_0 \\sim \\mathcal{N}(0, I)$, then push it through $\\psi^{(1)}$ to get $\\hat x_1 = \\psi^{(1)}_1(x_0)$. now we have *paired* $(x_0, \\hat x_1)$ — every noise sample is paired with the specific data point the model would generate for it.

**step 2.** train a new flow-matching model on this paired data, using the linear interpolant $x_t = (1-t)\\, x_0 + t\\, \\hat x_1$. because the pairing is now consistent (no more crossing assignments), the linear paths between matched pairs *don't intersect*, and the new model can learn them directly. this is the **2-rectified flow**.

**further steps.** repeat as desired.

### why does it work?

two properties (liu et al., 2022).

**property 1.** the resulting marginal at $t = 1$ is still $p_{\\text{data}}$.

proof sketch. define $z_t = (1-t)\\, x_0 + t\\, \\hat x_1$ where $\\hat x_1 = \\psi^{(1)}_1(x_0)$. by chain rule and law of total expectation, the new marginal at $t=1$ equals the distribution of $\\hat x_1$, which by construction matches $p_{\\text{data}}$ (because $\\psi^{(1)}$ was trained to do that).

**property 2.** paths are provably straighter at each reflow.

define **straightness** as the variance of the velocity along the trajectory (a constant velocity → zero variance → fully straight). a telescoping argument plus variance decomposition shows the straightness measure decreases monotonically with each reflow.

### discussion

- one or two reflows is the sweet spot. after that, errors compound.
- with straightened paths, simple solvers like euler with very few steps (sometimes just one or two!) work surprisingly well.
- this is the engine behind several state-of-the-art image generators that promise "real-time" diffusion-quality samples.

## comparison: where does this fit?

we've now seen three paradigms, and they're really three perspectives on the same underlying mathematical object. the forward processes:

|  | forward process | what's learned |
|---|---|---|
| discrete-time diffusion (ddpm) | $x_t = \\sqrt{\\bar\\alpha_t}\\, x_0 + \\sqrt{1-\\bar\\alpha_t}\\, \\varepsilon$ | noise $\\varepsilon$ |
| score-based diffusion (ncsn/sde) | $x_t = x_0 + \\sigma_t\\, \\varepsilon$ (ve) or vp-sde | score $\\nabla_x \\log p_t$ |
| flow matching | $x_t = (1-t)\\, x_0 + t\\, x_1$ | velocity $u_t = x_1 - x_0$ |

and the deterministic counterparts:

- ddpm ↔ ddim
- score sde ↔ pf-ode
- flow matching is **already deterministic**

the view that unifies all three (albergo et al., 2023) is **stochastic interpolants**, which writes a general $x_t = \\alpha(t)\\, x_0 + \\beta(t)\\, x_1 + \\gamma(t)\\, \\varepsilon$ and recovers diffusion (one choice of $\\alpha, \\beta, \\gamma$), score matching (another choice), and flow matching (yet another) as instances. different schedules, same machinery.

## wrap-up

[question: is this transport referring to the optimal transport literature?s]

flow matching reframes generation as transport: instead of noising and denoising, we directly move probability mass along a learned velocity field. the conditional flow-matching trick mirrors the conditional score-matching trick from lecture 2 — we can't access the marginal target, but we can access conditional targets in closed form, and the gradients turn out to be equivalent. the training loss is simply l2 regression onto $x_1 - x_0$. rectified flow then trains on the model's own paired output, straightening paths and unlocking very-few-step inference.

in the end, all three paradigms — diffusion, score matching, flow matching — are different lenses on the same problem: smoothly transporting gaussian noise to data. choose the lens that's most convenient for your application.`,D7=`## motivation

so far the entire course has focused on the *generation paradigm* — how do we sample new images? lecture 1 gave us discrete diffusion (ddpm), lecture 2 gave us score matching and the sde/pf-ode picture, lecture 3 gave us flow matching.

but all of those operated on raw images, treated as flat vectors of pixels, and all of them generated *unconditionally* — no captions, no labels. today we add the two crucial ingredients that turn this machinery into something a person actually wants to use: a **better space to do diffusion in**, and a way to **guide** generation toward a desired condition (like a text prompt). the lecture splits into three parts.

1. **latent space.** why pixel space is awful, how autoencoders compress images into a "tractable, compact, meaningful" latent space, and how **latent diffusion** then runs the entire generation machinery on these compact codes.
2. **multimodal representations.** tokenization, transformers (recap), vision transformers (vit), and how contrastive learning (clip) gives us a single embedding space where text and images live together.
3. **guidance.** classifier guidance, then classifier-free guidance — how to make diffusion follow a text prompt.

---

## part 1 — from pixel space to latent space

### why pixel space is the wrong place to do diffusion

the naive approach: represent every image as a $H \\times W \\times 3$ tensor of $\\{0, \\ldots, 255\\}$ pixel values, and run diffusion directly on those. three problems.

**high dimensionality.** a 512×512 rgb image is 786,432 numbers. diffusion models need to process that at every denoising step, every layer, for thousands of training images. computationally brutal.

**redundancy.** adjacent pixels are heavily correlated. a blue sky has millions of nearly identical "blue" values; we don't need that many bits to represent it.

**lack of meaning.** if we move a small step in pixel space, we don't get a slightly-different but still-coherent image — we get a noisy version of the same image. pixel-space distance does not correspond to semantic distance. a cat and a slightly-rotated cat are far apart in pixels; a cat and a noisy cat are close.

so our wishlist for an "ideal" space is:

- **tractable dimension** — much smaller than pixel count.
- **compact representation** — efficient use of the available dimensions, without redundancy.
- **meaningful representation** — moving in the space corresponds to moving between semantically related images.

we also want to distinguish two notions of similarity. **semantic similarity** is structural / global / "low frequency" — two images of cats are semantically similar even if textures differ. **perceptual similarity** is local / texture / "high frequency" — two images of the same cat with slightly different lighting are perceptually similar.

### attempt 1 — plain autoencoder (ae)

train an encoder $E_\\varphi$ that maps pixel space → latent space, and a decoder $D_\\theta$ that goes back. make them undo each other:

$$
\\mathcal{L}_{\\text{ae}} = \\|x - D_\\theta(E_\\varphi(x))\\|^2.
$$

the encoder is built from convolutions + pooling (downsampling); the decoder uses transposed convolutions / upsampling. the "spatial compression ratio" $f = H/h = W/w$ tells you how much smaller the latent grid is than the pixel grid. typical values: $f = 4$ or $f = 8$.

checklist for plain ae: tractable dimension ✓. compact representation ✓. **meaningful representation ✗** — the latent space is a free-for-all. two semantically similar images can land in completely different latent regions. generation by sampling a random latent vector and decoding produces garbage.

### attempt 2 — variational autoencoder (vae)

to fix the meaningfulness problem, we *constrain* the latent space to be approximately a standard gaussian. the encoder outputs not a single point but a distribution:

$$
q_\\varphi(z \\mid x) = \\mathcal{N}(\\mu_\\varphi(x),\\; \\sigma_\\varphi^2(x)).
$$

the decoder is now $p_\\theta(x \\mid z)$ — typically gaussian with mean $D_\\theta(z)$ and constant variance.

we want to maximize $\\log p_\\theta(x)$. the same elbo trick from lecture 1 applies.

#### step 1 — derive the lower bound

by marginalization, $p_\\theta(x) = \\int p_\\theta(x, z)\\, dz = \\int p(z)\\, p_\\theta(x \\mid z)\\, dz$ where $p(z) = \\mathcal{N}(0, I)$ is the prior.

multiply and divide by the encoder distribution:

$$
p_\\theta(x) = \\int \\frac{p(z)\\, p_\\theta(x \\mid z)}{q_\\varphi(z \\mid x)}\\, q_\\varphi(z \\mid x)\\, dz = \\mathbb{E}_{z \\sim q_\\varphi(z \\mid x)}\\!\\left[\\frac{p(z)\\, p_\\theta(x \\mid z)}{q_\\varphi(z \\mid x)}\\right].
$$

apply jensen's inequality:

$$
\\log p_\\theta(x) \\;\\ge\\; \\mathbb{E}_{z \\sim q_\\varphi(z \\mid x)}\\!\\left[\\log \\frac{p_\\theta(x, z)}{q_\\varphi(z \\mid x)}\\right] \\;=\\; \\mathcal{L}_{\\text{elbo}}.
$$

#### step 2 — expand

using $\\log \\frac{p(z) p_\\theta(x \\mid z)}{q_\\varphi(z \\mid x)} = \\log p_\\theta(x \\mid z) + \\log \\frac{p(z)}{q_\\varphi(z \\mid x)}$:

$$
\\mathcal{L}_{\\text{elbo}} = \\underbrace{\\mathbb{E}_{z \\sim q_\\varphi(z \\mid x)}\\!\\left[\\log p_\\theta(x \\mid z)\\right]}_{\\text{reconstruction}} - \\underbrace{\\mathrm{KL}\\!\\left(q_\\varphi(z \\mid x)\\;\\|\\;p(z)\\right)}_{\\text{latent regularization}}.
$$

so the vae objective is:

$$
\\mathcal{L}_{\\text{vae}} = \\underbrace{\\mathbb{E}_z\\big[\\|x - D_\\theta(z)\\|^2\\big]}_{\\mathcal{L}_{\\text{rec}}} \\;+\\; \\lambda_{\\text{KL}}\\, \\underbrace{\\mathrm{KL}\\!\\left(q_\\varphi(z \\mid x)\\;\\|\\;\\mathcal{N}(0, I)\\right)}_{\\mathcal{L}_{\\text{kl}}}.
$$

a trade-off: reconstruct the input well *and* keep the latent distribution close to $\\mathcal{N}(0, I)$.

checklist: tractable ✓. compact ✓. meaningful ✓. **truthful representation ✗** — vaes produce *blurry* images.

### attempt 3 — refined vae for less blur

why the blur? the reconstruction loss is l2 pixel-distance. for ambiguous regions, the l2-optimal prediction is the *mean* of all plausible outputs — and the mean of many sharp variants is a blur.

the fix is to add two more loss terms.

**perceptual loss (lpips).** instead of comparing pixels, run both $x$ and $\\hat x$ through a pretrained cnn and compare the feature maps. early layers of trained cnns are sensitive to edges, textures, and shapes — exactly the things humans notice. penalizing differences in these features, rather than raw pixels, encourages the decoder to preserve perceptually salient structure. weight $\\lambda_{\\text{perc}}$. too high → "checkerboard artifacts" from upsampling.

**adversarial loss.** add a discriminator $D$ trained to distinguish real images from reconstructions, and add a term that incentivizes the decoder to fool it. this is the gan trick. effect: the decoder is *forced* to produce images on the realistic-image manifold — no blurry intermediates allowed. weight $\\lambda_{\\text{adv}}$. too high → "mode collapse" (decoder ignores the latent and outputs a single realistic image).

the full refined vae loss:

$$
\\mathcal{L}_{\\text{ref-vae}} = \\mathcal{L}_{\\text{rec}} + \\lambda_{\\text{KL}}\\, \\mathcal{L}_{\\text{kl}} + \\lambda_{\\text{perc}}\\, \\mathcal{L}_{\\text{perc}} + \\lambda_{\\text{adv}}\\, \\mathcal{L}_{\\text{adv}}.
$$

reconstruction + latent-space regularization + (mitigate blur via perception + adversarial). the kl weight is typically tiny — about $10^{-6}$ — because the other terms dominate in practice.

### latent diffusion: diffusion in vae space

now the punchline. the vae has given us a tractable, compact, meaningful, sharp latent space. run diffusion *there* instead of in pixel space (rombach et al., 2021).

**training.**

1. train the vae.
2. **freeze the vae encoder** $E_\\varphi$. train your favorite image generator (ddpm / score-based / flow matching) on the latents $z = E_\\varphi(x)$ rather than on raw pixels.

**inference.**

1. run the diffusion / score-matching / flow-matching reverse process in *latent* space, starting from a noisy latent and ending at a clean latent $z$.
2. decode: $x = D_\\theta(z)$.

the win is enormous: diffusion is now operating on a much smaller, well-structured space, so each network forward pass is faster and the model converges much more quickly. this is the core idea behind stable diffusion and most modern systems.

a few notes about the vae in this setup:

- the encoder behaves as a "low-pass filter" — it strips out high-frequency content the diffusion model doesn't need to model.
- the decoder is responsible for "texture hallucination" — turning a low-dim, smooth latent back into a high-resolution, detailed image. it's typically about 2× larger than the encoder for that reason.

---

## part 2 — representing text and images in the same space

to condition generation on text, we need to represent text in a form the generator can use. and eventually we want text and images to live in a *shared* space. let's build up.

### tokenization

a sentence like "a cute teddy bear is reading." gets split into discrete tokens. granularity is a design choice:

- **word-level:** "a / cute / teddy / bear / is / reading / ."
- **sub-word (bpe, wordpiece):** "a / cute / ted / ##dy / bear / is / read / ##ing / ." this is what modern transformers use.
- **character-level:** every character is its own token. robust to typos but slow.

each token is mapped to a learned embedding $\\in \\mathbb{R}^{d_{\\text{model}}}$.

### transformers (a quick recap)

attention computes, for each query $q_i$, a weighted average of values $v_j$ where weights are softmax of scaled dot-products with keys $k_j$:

$$
\\text{Attention}(Q, K, V) = \\mathrm{softmax}\\!\\left(\\frac{Q K^\\top}{\\sqrt{d_k}}\\right) V.
$$

the transformer architecture stacks **self-attention** (sequence attends to itself) and **cross-attention** (decoder queries encoder output) together with feedforward layers, normalizations, and residual connections.

a subtle but essential trick is **positional encoding**: attention is permutation-invariant, so we have to add position information explicitly. either learned or hardcoded sinusoidal encodings, summed into the token embeddings.

the standard **typical embedding location** for getting a single vector representation of a sentence is the *last hidden state of the encoder* (or a designated [cls] token).

### vision transformer (vit)

can we do attention on images? "it's just numbers" — yes (dosovitskiy et al., 2020). the construction:

1. split the image into $P \\times P$ patches (e.g., $16 \\times 16$). for a $H \\times W$ image, that gives $N = (H/P)(W/P)$ patches.
2. flatten each patch and pass through a linear projection to get patch embeddings of dimension $d_{\\text{model}}$.
3. prepend a learnable [cls] token.
4. add positional embeddings.
5. pass through a transformer encoder.
6. use the [cls] output as the global image representation; feed to a classifier ffn for tasks like imagenet labeling.

limitation: supervised vit requires labeled data. modern approaches (dino, mae, etc.) use self-supervised pretraining to avoid that.

### contrastive learning: putting text and images in the same space

the remaining problem: image embeddings live in some space, text embeddings live in another, and they're not comparable. we want a *single* space where "an image of a teddy bear" lands close to the embedding of the text "teddy bear" and far from "water polo ball."

**idea: contrastive learning.**

- group similar (image, text) pairs together.
- push dissimilar (image, text) pairs apart.

#### loss setup

let $u$ be an image embedding (output of a vit followed by a projection to a shared dimension), and $v_{\\text{text}}$ be a text embedding (output of a transformer text encoder, similarly projected). define **similarity**:

$$
s_{u, \\text{text}} = \\frac{u^\\top v_{\\text{text}}}{\\|u\\|\\, \\|v_{\\text{text}}\\|}.
$$

for a batch of $N$ image-text pairs, the probability that image "$\\square$" matches text "teddy bear" is computed via softmax across the *batch* of texts:

$$
p_{\\square \\to \\text{teddy bear}} = \\frac{\\exp(s_{\\square,\\, \\text{teddy bear}})}{\\sum_{j=1}^N \\exp(s_{\\square,\\, \\text{text}_j})}.
$$

symmetrically, $p_{\\text{teddy bear} \\to \\square}$ uses softmax across the *batch of images*.

the clip loss (radford et al., 2021) is the average of two cross-entropy losses — image-to-text and text-to-image:

$$
\\mathcal{L}_{\\square \\to \\text{text}} = -\\frac{1}{N} \\sum_i \\log p_{\\square_i \\to \\text{text}_i},\\qquad \\mathcal{L}_{\\text{text} \\to \\square} = -\\frac{1}{N} \\sum_i \\log p_{\\text{text}_i \\to \\square_i},
$$

$$
\\mathcal{L}_{\\text{clip}} = \\tfrac{1}{2}\\left(\\mathcal{L}_{\\square \\to \\text{text}} + \\mathcal{L}_{\\text{text} \\to \\square}\\right).
$$

reading: for each image, the correct text out of all $N$ texts in the batch should have the highest similarity, and vice versa. this is the **in-batch negatives** assumption — every other (image, text) pair in the batch counts as a negative example.

#### training and results

clip was trained on 400m (image, caption) pairs scraped from the web. visual encoder: vit or resnet. text encoder: transformer. despite never being explicitly trained on imagenet labels, it achieves ~76% zero-shot imagenet accuracy by computing similarities between an image and prompts like "a photo of a {class name}" — possibly with some leakage from web-scraped data, but still remarkable.

#### caveats

[question: is only the image part trined with text embeddings fixed?]
[question: N 1-1 comparisons is just less data no?]

clip's softmax-over-the-batch is computationally expensive — $O(N^2)$ similarity matrix, and the global normalization is memory-heavy. **siglip** (zhai et al., 2023) reframes the 1-vs-n softmax as n independent 1-vs-1 sigmoid binary classifications, scaling much better.

the output of clip is the representation we want. an image gets mapped to a clip image embedding; a caption gets mapped to a clip text embedding; both live in the same space, and similarity is meaningful.

---

## part 3 — guidance: making diffusion follow a condition

now we have all the pieces. we have latent diffusion. we have clip-style text embeddings to feed in as conditioning $y$. the remaining question: *how* do we use $y$ to actually steer generation?

[question: what is t here?]

we want the conditional reverse step

$$
p_{\\theta}(x_t \\mid x_{t+1},\\, y).
$$

### first idea: classifier guidance

the original idea (dhariwal & nichol, 2021): bolt a classifier onto an already-trained unconditional diffusion model.

#### main derivation

apply bayes' rule to introduce $y$:

$$
p(A \\mid B, C) = \\frac{p(B \\mid A, C)\\, p(A \\mid C)}{p(B \\mid C)}.
$$

set $A = x_t$, $B = y$, $C = x_{t+1}$:

$$
p_\\theta(x_t \\mid y, x_{t+1}) = \\frac{p_\\phi(y \\mid x_t, x_{t+1})\\, p_\\theta(x_t \\mid x_{t+1})}{p_\\phi(y \\mid x_{t+1})}.
$$

by the markov property of the diffusion process, $y$ depends on $x_t$ once we know it, not on $x_{t+1}$, so $p_\\phi(y \\mid x_t, x_{t+1}) = p_\\phi(y \\mid x_t)$. the denominator doesn't depend on $x_t$:

$$
p_\\theta(x_t \\mid y, x_{t+1}) \\;\\propto\\; \\underbrace{p_\\phi(y \\mid x_t)}_{\\text{classifier}}\\; \\underbrace{p_\\theta(x_t \\mid x_{t+1})}_{\\text{unconditional reverse}}.
$$

two factors: the classifier (does this $x_t$ look like class $y$?), and the unconditional reverse step (is this $x_t$ a plausible denoising of $x_{t+1}$?).

#### detour 1 — the unconditional reverse step

from lecture 1, the unconditional reverse step is gaussian:

$$
p_\\theta(x_t \\mid x_{t+1}) \\sim \\mathcal{N}(\\mu_\\theta,\\; \\sigma_{t+1}^2 I).
$$

#### detour 2 — taylor expand the log-classifier

[question: explain]

linearize $\\log p_\\phi(y \\mid x_t)$ around the unconditional mean $\\mu_\\theta$:

$$
\\log p_\\phi(y \\mid x_t) \\approx (x_t - \\mu_\\theta)^\\top \\nabla_{x_t} \\log p_\\phi(y \\mid \\mu_\\theta) + \\text{const}.
$$

#### combining

plug both into the conditional posterior:

$$
\\log p_\\theta(x_t \\mid y, x_{t+1}) \\approx -\\frac{(x_t - \\mu_\\theta)^\\top (x_t - \\mu_\\theta)}{2\\sigma_{t+1}^2} + (x_t - \\mu_\\theta)^\\top g + \\text{const},
$$

where $g = \\nabla_{x_t} \\log p_\\phi(y \\mid \\mu_\\theta)$. complete the square:

$$
x_t \\sim \\mathcal{N}\\!\\left(\\mu_\\theta + \\sigma_{t+1}^2\\, g,\\; \\sigma_{t+1}^2\\, I\\right).
$$

the conditional reverse step is the *unconditional* one with a **shifted mean** — pushed in the direction of the classifier's gradient (toward higher $p(y \\mid x)$), with magnitude proportional to the noise variance.

in practice we apply a **guidance scale** $w$ to the gradient, $\\mu_\\theta + w\\, \\sigma_{t+1}^2\\, g$, with $w > 1$ for strong conditioning.

#### training & limitations

the unconditional generation model needs no retraining; this is purely a sampling-time technique. the classifier, however, has to be trained on **noised** images — we sample $x_t$ at every noise level and train the classifier with cross-entropy to predict the correct label. that's the catch:

- need labeled data.
- need an off-the-shelf classifier that operates on noisy inputs (these don't exist in the wild).
- distribution between generation model and classifier must be aligned.
- an extra classifier forward + backward pass per generation step.
- gradient scaling needs careful tuning.
- the taylor approximation introduces error.

### refined goal

can we get the same conditioning behavior using *only* generation weights — no separate classifier?

### classifier-free guidance (cfg)

the trick (ho & salimans, 2022): rearrange the bayes equation to recognize that the **conditional and unconditional generation signals together define an implicit classifier**.

$$
p_\\phi(y \\mid x_t) \\;\\propto\\; \\frac{p_\\theta(x_t \\mid y)}{p_\\theta(x_t)}.
$$

take logs and gradients:

$$
\\nabla_{x_t} \\log p_\\phi(y \\mid x_t) \\;\\propto\\; \\nabla_{x_t} \\log p_\\theta(x_t \\mid y) - \\nabla_{x_t} \\log p_\\theta(x_t).
$$

the first term is the *conditional* score; the second is the *unconditional* score. both can be learned by the same diffusion model — we just train it to do both.

#### training

at training time, randomly drop the condition with some probability $p_{\\text{uncond}}$ (typically 10-20%, replaced with a "null token" $\\varnothing$):

1. sample $x_0$, noise $\\varepsilon$, time step $t$, and condition $y$ (or $\\varnothing$).
2. form $x_t = \\sqrt{\\bar\\alpha_t}\\, x_0 + \\sqrt{1 - \\bar\\alpha_t}\\,\\varepsilon$.
3. predict $\\hat\\varepsilon = \\varepsilon_\\theta(x_t,\\, t,\\, y \\text{ or } \\varnothing)$, minimize $\\|\\hat\\varepsilon - \\varepsilon\\|^2$.

the same model now learns both conditional and unconditional generation. the "drop condition" probability tunes how good each side is.

#### sampling

at inference, combine the two predictions:

$$
\\tilde\\varepsilon_\\theta(x_t,\\, y) = \\varepsilon_\\theta(x_t,\\, \\varnothing) + w\\,\\big[\\varepsilon_\\theta(x_t,\\, y) - \\varepsilon_\\theta(x_t,\\, \\varnothing)\\big].
$$

- $w = 0$: pure unconditional generation.
- $w = 1$: pure conditional generation.
- $w > 1$: extrapolate beyond the conditional — "even more $y$." this is what's typically used (often $w = 7$–$10$ for text-to-image), and produces dramatically more on-prompt outputs.

geometrically: take the unconditional sample, and push along the direction that the condition encourages. larger $w$ = bigger push.

#### comparison

[question: explain cclassifier forward backward]

| | classifier-based | classifier-free |
|---|---|---|
| update rule | $\\varepsilon_\\theta(x_t) - w\\,\\sigma_t\\,\\nabla_{x_t} \\log p_\\phi(y \\mid x_t)$ | $\\varepsilon_\\theta(x_t,\\, \\varnothing) + w\\,[\\varepsilon_\\theta(x_t,\\, y) - \\varepsilon_\\theta(x_t,\\, \\varnothing)]$ |
| extra model | classifier | none (re-uses generation model) |
| calls per step | 2 (gen + classifier backward) | 2 (cond + uncond) |
| training | unconditional + classifier on noisy data | one model, condition randomly dropped |
| limitations | classifier on noisy data unusual; gradient tuning | still 2 calls per step, but no extra model |

#### practical considerations

- conditioning is flexible — text (via clip), class label, image, mask, edge map, anything that can be embedded.
- clip embeddings are particularly handy for text conditioning because of the multimodal training in part 2.
- guidance scale $w$ trades off prompt-fidelity vs. sample diversity. too high → over-saturated, "burnt" images.
- the two forward passes per step are usually batched together, so the cost is roughly 2× a single call.

---

## the big picture

today we did three things, each of which is essential to modern image generation:

**latent space.** pixel space is the wrong place to do diffusion. a vae trained with reconstruction + kl + perceptual + adversarial losses gives us a tractable, compact, meaningful, sharp latent space. run any of the generation paradigms from lectures 1–3 there, and decode at the end.

**multimodal embeddings.** tokenization → transformers → vit for images → contrastive learning (clip) to put images and text in the same space. now we have a rich numerical representation of "what the user wants."

**guidance.** classifier guidance was the original idea — bayes' rule plus a taylor expansion gives a shifted-mean reverse step. classifier-free guidance is the modern default — a single network learns both conditional and unconditional generation, and at sampling time we extrapolate from the unconditional toward the conditional with a guidance scale $w$.

stitch these together — latent diffusion in clip-conditioned latent space with classifier-free guidance — and you have, roughly, the architecture of every state-of-the-art text-to-image system in the field.`,W7=`# Topic 1 — The Boltzmann Distribution

> *Pedagogical lecture notes on the foundations of equilibrium statistical mechanics. We start from absolutely nothing, build the microcanonical ensemble, define temperature, and arrive at the Boltzmann distribution.*

---

## 1. What are we trying to do?

Let's start by motivating the whole subject. Statistical mechanics is, at its heart, a dictionary between **four fundamental quantities**:

- **Energy** $E$
- **Temperature** $T$
- **Entropy** $S$
- **Probability** $p$

We are going to build a self-consistent set of relationships between these four objects. The crown jewel at the end of this lecture will be the **Boltzmann distribution**, which gives the probability of finding a system in microstate $\\vec s$ when it is in thermal equilibrium with a reservoir at temperature $T$:

$$
\\boxed{\\,p(\\vec s) \\;=\\; \\frac{1}{Z}\\,e^{-E(\\vec s)/k_BT},
\\qquad
Z \\;=\\; \\int d\\vec s\\,e^{-E(\\vec s)/k_BT}\\,}
$$

Here $\\vec s$ is a **microstate** of the system (a complete specification of every degree of freedom), $E(\\vec s)$ is the energy of that microstate, $T$ is the temperature, $k_B$ is Boltzmann's constant (so that $k_BT$ has units of energy), and $Z$ is the **partition function**, a normalization. Everything we do for the rest of the course will, in some sense, be a refinement of this formula.

Our plan is in three steps:

1. **Closed systems.** Build statistical mechanics for an isolated system (no energy exchange).
2. **Two systems in contact.** Place two closed systems in thermal contact and ask what equilibrium looks like — this will *define* temperature.
3. **Open system + reservoir.** Treat one of those systems as a small system of interest and the other as a large reservoir at fixed $T$. The probability distribution we obtain is the Boltzmann distribution.

---

## 2. Step 1 — Closed Systems and the Microcanonical Ensemble

Now, we define a **closed system**: it is isolated from the rest of the universe, so its energy $E$ is conserved. But here is the key observation: even though the energy is fixed, there can be many microstates $\\vec s$ that all share the same energy $E$.

Let's count them. Define

$$
\\Omega(E)\\,dE \\;\\equiv\\; \\text{number of microstates }\\vec s\\text{ with energy in }[E,\\,E+dE].
$$

This is just a density of states. For systems made of $N$ particles or spins, $\\Omega(E)$ is typically **exponential in $N$**, which is enormous. To tame these huge numbers, we take a logarithm and define the **entropy**:

$$
\\boxed{\\,S(E) \\;=\\; \\ln \\Omega(E)\\,}
\\quad\\Longleftrightarrow\\quad
\\Omega(E) \\;=\\; e^{\\,S(E)}.
$$

(In some conventions one writes $S = k_B \\ln \\Omega$; we absorb $k_B$ into our temperature definition below for simplicity.)

### 2.1 The microcanonical assumption

We need *some* assumption about probabilities. Here is the simplest and most natural one:

> **Assumption (Microcanonical Ensemble).** If a closed system has energy $E_0$, then the probability of finding it in any particular microstate $\\vec s$ is *uniform* over the energy shell:
> $$
> p(\\vec s) \\;=\\; \\frac{1}{\\Omega(E_0)}\\,\\delta\\!\\left[E(\\vec s) - E_0\\right].
> $$

Why is this reasonable? The intuition is **ergodic**: a chaotic Hamiltonian system explores its energy surface roughly uniformly over time. So the **time average** of any observable $F(\\vec s(t))$ equals an **ensemble average** over the uniform distribution:

$$
\\frac{1}{T}\\int_0^T dt\\, F(\\vec s(t)) \\;\\;\\longleftrightarrow\\;\\; \\int d\\vec s\\, F(\\vec s)\\, p(\\vec s).
$$

This is the bridge between mechanics (one trajectory in time) and statistics (an ensemble of microstates).

### 2.2 Worked example — the ideal gas

Let's do an explicit calculation to make this concrete. Consider $N$ classical particles of mass $m$ in a box of volume $V$. A microstate is

$$
\\vec s = (\\vec p_1, \\dots, \\vec p_N,\\, \\vec x_1, \\dots, \\vec x_N),
$$

a $6N$-dimensional vector. The energy is purely kinetic:

$$
E(\\vec s) \\;=\\; \\sum_{i=1}^{N}\\frac{\\vec p_i \\cdot \\vec p_i}{2m}.
$$

The set of momenta with fixed total energy $E$ is the surface of a $3N$-dimensional sphere of radius $\\sqrt{2mE}$. So

$$
\\Omega(E) = \\int d\\vec p_1 \\dots d\\vec p_N\\, d\\vec x_1 \\dots d\\vec x_N\\;\\delta\\!\\!\\left(\\sum_i \\frac{\\vec p_i\\cdot\\vec p_i}{2m} - E\\right).
$$

The position integral gives $V^N$. The momentum integral is the surface area of a sphere of radius $\\sqrt{2mE}$ in dimension $n=3N$. Recall that the surface area of an $n$-sphere of radius $r$ is

$$
A_n(r) = \\frac{2\\pi^{n/2}}{\\Gamma(n/2)}\\,r^{n-1}.
$$

So

$$
\\Omega(E) \\;\\propto\\; \\left(2mE\\right)^{\\frac{3N-1}{2}} V^{N} \\;\\sim\\; \\left(2mE\\right)^{\\frac{3N}{2}} V^{N}
$$

(at leading order in $N$). Taking the log:

$$
\\boxed{\\,S(E) \\;=\\; \\tfrac{3N}{2}\\ln E + N \\ln V + \\text{const}\\,}
$$

This is the entropy of the ideal gas, derived purely from counting microstates — the **Sackur–Tetrode formula** (without the constants).

---

## 3. Step 2 — Two Systems in Contact: Defining Temperature

Now, let's bring two closed systems into thermal contact. Call them system 1 and system 2, with energies $E_1$ and $E_2$. They can exchange energy with each other but not with anything else, so

$$
E_1 + E_2 \\;=\\; E_T \\quad\\text{(constant)}.
$$

The combined system is closed, so the total number of microstates is

$$
\\Omega_T(E_1, E_2) \\;=\\; \\Omega_1(E_1)\\,\\Omega_2(E_2),
$$

and the total entropy is

$$
S_T(E_1, E_2) \\;=\\; S_1(E_1) + S_2(E_2).
$$

### 3.1 The second law as a maximum entropy principle

How do $E_1$ and $E_2$ settle? The microcanonical assumption applied to the *combined* system says: every microstate of energy $E_T$ is equally likely. So the macroscopic energy split $(E_1, E_2)$ that has the most microstates is overwhelmingly the most likely one. This is the **second law**:

> $E_1$ and $E_2$ adjust so as to **maximize** the total entropy $S_T$.

Setting $\\partial S_T / \\partial E_1 = 0$ at fixed $E_T = E_1 + E_2$:

$$
\\frac{\\partial S_T}{\\partial E_1} = \\frac{\\partial S_1}{\\partial E_1} + \\frac{\\partial S_2}{\\partial E_2}\\underbrace{\\frac{\\partial E_2}{\\partial E_1}}_{-1} = 0
\\;\\;\\Longrightarrow\\;\\;
\\boxed{\\,\\frac{\\partial S_1}{\\partial E_1} \\;=\\; \\frac{\\partial S_2}{\\partial E_2}\\,}
$$

So at equilibrium, **the slope of the entropy curve** is equal between the two systems. This is the equilibrium condition.

### 3.2 Definition of temperature

The slope $\\partial S/\\partial E$ is the same on both sides of any thermal contact. We elevate this to a *definition* of temperature:

$$
\\boxed{\\,\\frac{1}{k_BT} \\;\\equiv\\; \\frac{\\partial S}{\\partial E}\\,}
$$

so the equilibrium condition becomes the familiar $T_1 = T_2$. The factor $k_B$ is just a unit conversion; $k_BT$ has units of energy.

### 3.3 Sanity check — ideal gas

We computed $S(E) = \\tfrac{3N}{2}\\ln E + N\\ln V + \\text{const}$. Then

$$
\\frac{1}{k_BT} = \\frac{\\partial S}{\\partial E} = \\frac{3N}{2}\\cdot \\frac{1}{E}
\\;\\Longrightarrow\\;
\\boxed{\\,E = \\tfrac{3}{2} N k_B T\\,}
$$

Each particle has $3$ degrees of freedom, so we get $\\tfrac{1}{2}k_BT$ per quadratic degree of freedom — this is **equipartition**.

### 3.4 Geometric picture

Plot $S(E)$ versus $E$. It is a *concave* function (entropy increases with energy but more and more slowly). The slope at $E$ is $\\beta = 1/(k_BT)$. Concavity means $\\beta$ *decreases* with $E$, i.e., $T$ *increases* with $E$ — adding energy raises the temperature, which we knew physically.

---

## 4. Step 3 — Open System + Reservoir: Deriving the Boltzmann Distribution

Now, we want to consider the case we usually encounter in practice: a small system of interest (call it system 1) in contact with a **large reservoir** (system 2) at temperature $T$.

Let $\\vec s$ be a microstate of system 1, with energy $E_1(\\vec s)$. We want $p(\\vec s)$, the probability that system 1 is in microstate $\\vec s$.

The combined system (1 + reservoir) is closed with total energy $E_T$. By the microcanonical assumption, every joint microstate is equally likely. Holding system 1 in microstate $\\vec s$ leaves the reservoir with energy $E_T - E_1(\\vec s)$, in any of $\\Omega_2(E_T - E_1(\\vec s))$ microstates. Therefore

$$
p(\\vec s) \\;\\propto\\; \\Omega_2(E_T - E_1(\\vec s)) \\;=\\; \\exp\\!\\Big[S_2(E_T - E_1(\\vec s))\\Big].
$$

Now, the key approximation: the reservoir is huge, so $E_1(\\vec s) \\ll E_T$. Taylor expand $S_2$ around $E_T$:

$$
S_2(E_T - E_1(\\vec s)) \\;\\approx\\; S_2(E_T) - \\underbrace{\\frac{\\partial S_2}{\\partial E}\\Big|_{E_T}}_{\\beta\\;=\\;1/k_BT}\\, E_1(\\vec s).
$$

The first term is just a constant (independent of $\\vec s$) and gets absorbed into normalization. We are left with

$$
p(\\vec s) \\;\\propto\\; e^{-\\beta E_1(\\vec s)} \\;=\\; e^{-E_1(\\vec s)/k_BT}.
$$

Normalizing,

$$
\\boxed{\\,p(\\vec s) \\;=\\; \\frac{1}{Z}\\,e^{-E(\\vec s)/k_BT},\\qquad Z = \\int d\\vec s\\,e^{-E(\\vec s)/k_BT}\\,}
$$

This is the **Boltzmann distribution** — the central object of equilibrium statistical mechanics.

### Intuitive sanity check

- Higher energy microstates of the system $\\Rightarrow$ less energy for the reservoir $\\Rightarrow$ exponentially fewer reservoir states $\\Rightarrow$ exponentially suppressed probability. Microstates with higher $E(\\vec s)$ are exponentially less likely. ✓
- Lower temperatures mean the suppression is stronger, so the system concentrates in its lowest-energy microstates (ground states).
- High temperatures wash out the suppression, so all microstates are nearly equally likely.

---

## 5. Summary

We started with one assumption — that a closed system's microstates are uniformly distributed — and from it we built three layers:

| Setup | Result |
|---|---|
| Closed system, energy $E$ | $p(\\vec s) \\propto \\delta(E(\\vec s) - E)$, $S = \\ln\\Omega$ |
| Two systems in contact | Equilibrium when $\\partial S/\\partial E$ matches; defines $T$ via $1/k_BT = \\partial S/\\partial E$ |
| System + reservoir at $T$ | $p(\\vec s) = e^{-E(\\vec s)/k_BT}/Z$ — the Boltzmann distribution |

Energy, entropy, temperature, and probability are now all linked. In the next lecture we will dig into the **partition function** $Z$ and the closely related **free energy**, which turn out to be cumulant-generating functions that contain everything we want to know about the system.

---
`,O7=`# Topic 2 — Entropy, Large Deviations, and Free Energy

> *Why is the Boltzmann distribution so important? In this lecture we give it a deeper meaning by connecting it to information theory (KL divergence), to large deviation theory, and to a beautiful variational principle. Along the way we generalize entropy from "log of number of microstates" to "average surprise."*

---

## 1. Recap and motivation

Last time we built three layers of statistical mechanics:

- **Closed system:** $p(\\vec s) = \\frac{1}{\\Omega(E)}\\delta[E(\\vec s) - E]$, with **microcanonical entropy** $S(E) = \\ln \\Omega(E)$.
- **Two systems in contact:** Equilibrium when $\\partial S_1/\\partial E_1 = \\partial S_2/\\partial E_2$, defining $\\beta \\equiv 1/k_BT \\equiv \\partial S/\\partial E$.
- **Open system + reservoir:** $p(\\vec s) = \\frac{1}{Z}e^{-\\beta E(\\vec s)}$, with $Z = \\int d\\vec s\\, e^{-\\beta E(\\vec s)}$.

We also introduced the **free energy**

$$
F(\\beta) \\;=\\; -\\frac{1}{\\beta}\\ln Z(\\beta).
$$

We now want to understand the Boltzmann distribution from several different angles. We'll see that it is the *natural* distribution for at least three reasons: (i) it is the distribution that maximizes entropy at fixed mean energy, (ii) it minimizes a certain "Gibbs free energy" functional over all distributions, and (iii) it captures the right scaling under large deviations.

To do all this, we first need to upgrade our notion of entropy.

---

## 2. Entropy as average surprise (Shannon)

So far we have only one definition of entropy: $S(E) = \\ln \\Omega(E)$, the log of the number of microstates of fixed energy. But there is a more general definition for *any* probability distribution.

Let $p_1, \\dots, p_K \\geq 0$ with $\\sum_i p_i = 1$ be a distribution over $K$ outcomes. We define

$$
\\boxed{\\,S(\\vec p) \\;=\\; -\\sum_{i=1}^{K} p_i \\ln p_i\\,}
$$

**Intuition.** The quantity $-\\ln p$ is sometimes called the **surprise** of an event with probability $p$: rare events ($p \\to 0$) are very surprising, while certain events ($p = 1$) are not surprising at all. Then $S(\\vec p) = \\langle -\\ln p\\rangle$ is the **average surprise**.

### 2.1 Consistency check — uniform distribution

For $p_i = 1/\\Omega$ for all $i$:
$$
S = -\\sum_{i=1}^{\\Omega} \\tfrac{1}{\\Omega}\\ln \\tfrac{1}{\\Omega} = \\ln \\Omega. \\quad\\checkmark
$$
So Shannon's $S(\\vec p)$ reduces to the microcanonical entropy when $\\vec p$ is uniform.

### 2.2 Special case — biased coin

For $K=2$ and $p_1 = p,\\; p_2 = 1-p$:
$$
S(p) = -p\\ln p - (1-p)\\ln(1-p).
$$
This is concave with a maximum at $p = 1/2$, where $S = \\ln 2$. Maximally surprising = maximally uniform.

---

## 3. Where does $S(\\vec p)$ come from physically? Counting messages.

Now, let's give a *combinatorial* derivation of Shannon entropy. Suppose we have an alphabet of $K$ letters and we're given a sequence of $N$ letters with composition

$$
N_1, N_2, \\dots, N_K, \\qquad \\sum_i N_i = N.
$$

Define the empirical frequency $p_i = N_i/N$. The number of distinct messages with this composition is

$$
\\Omega \\;=\\; \\frac{N!}{N_1!\\,N_2!\\,\\cdots\\,N_K!}.
$$

Now use **Stirling**: $\\ln n! \\approx n\\ln n - n$ for large $n$.

$$
\\ln\\Omega = \\ln N! - \\sum_i \\ln N_i!
\\;\\approx\\; (N\\ln N - N) - \\sum_i (N_i \\ln N_i - N_i).
$$

Since $\\sum_i N_i = N$, the $N$ and $\\sum_i N_i$ cancel:

$$
\\ln\\Omega \\approx N\\ln N - \\sum_i N_i \\ln N_i = -\\sum_i N_i \\ln \\frac{N_i}{N} = -N\\sum_i p_i \\ln p_i.
$$

So

$$
\\boxed{\\,\\Omega \\;\\approx\\; e^{N S(\\vec p)},\\qquad S(\\vec p) = -\\sum_i p_i\\ln p_i\\,}
$$

The number of sequences of length $N$ with empirical distribution $\\vec p$ grows **exponentially** in $N$, with rate equal to the Shannon entropy.

---

## 4. The Kullback–Leibler divergence and large deviations

Now, here is a crucial twist. Suppose the *true* probability of letter $i$ is $p_i$, and we draw an i.i.d. sequence of length $N$. What is the probability that the **empirical** distribution is some other distribution $\\hat p$?

The probability of any particular sequence with empirical frequencies $\\hat p$ is $\\prod_i p_i^{N\\hat p_i}$, and the number of such sequences is $\\frac{N!}{\\prod_i (N\\hat p_i)!}$, so

$$
\\Pr[\\hat{p}(\\vec s) = \\hat p] \\;=\\; \\frac{N!}{\\prod_i (N\\hat p_i)!} \\,\\prod_{i=1}^{K} p_i^{N\\hat p_i}.
$$

Take the log and apply Stirling:

$$
\\ln \\Pr[\\hat p(\\vec s) = \\hat p] \\;\\approx\\; N S(\\hat p) + N\\sum_i \\hat p_i \\ln p_i = N\\sum_i \\hat p_i \\ln \\frac{p_i}{\\hat p_i}.
$$

So

$$
\\boxed{\\,\\Pr[\\hat p(\\vec s) = \\hat p] \\;\\approx\\; e^{-N\\, D_{\\rm KL}(\\hat p \\,\\Vert\\, p)}\\,}
$$

where the **Kullback–Leibler divergence** is

$$
\\boxed{\\,D_{\\rm KL}(q\\,\\Vert\\,p) \\;\\equiv\\; \\sum_i q_i \\ln\\frac{q_i}{p_i}\\,}
$$

### 4.1 Properties of $D_{\\rm KL}$

- **Non-negative:** $D_{\\rm KL}(q\\Vert p) \\geq 0$, with equality iff $q = p$ (Gibbs' inequality).
- **Convex:** Jointly convex in $(p,q)$.
- **Not symmetric:** $D_{\\rm KL}(q\\Vert p) \\neq D_{\\rm KL}(p\\Vert q)$ in general — it is a *divergence*, not a distance.
- **Picture:** As a function of $\\hat p$ at fixed $p$, $D_{\\rm KL}(\\hat p\\Vert p)$ is a convex bowl with minimum 0 at $\\hat p = p$.

### 4.2 Asymptotic Equipartition

The probability of *any specific* sequence is $\\prod p_i^{N\\hat p_i} = e^{-N H(\\hat p, p)}$ with cross-entropy $H = -\\sum \\hat p_i \\ln p_i$. **Typical sequences** are those with $\\hat p \\approx p$, so each typical sequence has probability $\\approx e^{-NS(p)}$. The number of typical sequences is $\\approx e^{NS(p)}$. So at large $N$ the distribution **concentrates** on $e^{NS(p)}$ equally-likely typical sequences — even though there are $K^N = e^{N\\ln K}$ sequences in total. This is the **asymptotic equipartition property**.

### 4.3 Large deviation principle

The general statement is: if you measure a macroscopic function $F(\\vec s)$ of a high-dimensional random vector $\\vec s$, then for many natural setups

$$
\\Pr[F(\\vec s) = f] \\;\\asymp\\; e^{-N\\, I(f)}
$$

where the **rate function** $I(f) \\geq 0$ has a minimum at the typical value $f^* = \\mathbb{E}[F]$, with $I(f^*) = 0$. The KL divergence is the rate function for the empirical distribution. This is **large deviation theory**.

---

## 5. Connecting back to physics: KL divergence as free energy difference

Here is the magical bridge. Take a physical system with microstates $\\vec s$ and energies $E(\\vec s)$ at temperature $T$. Its Boltzmann distribution is $p(\\vec s) = e^{-\\beta E(\\vec s)}/Z$. Now take *any* trial distribution $q(\\vec s)$ and compute its KL divergence to $p$:

$$
D_{\\rm KL}(q\\Vert p) \\;=\\; \\sum_{\\vec s} q(\\vec s) \\ln \\frac{q(\\vec s)}{p(\\vec s)}.
$$

Substitute $p(\\vec s) = e^{-\\beta E(\\vec s)}/Z$:

$$
\\begin{aligned}
D_{\\rm KL}(q\\Vert p) &= \\sum_{\\vec s} q(\\vec s)\\Big[\\ln q(\\vec s) + \\beta E(\\vec s) + \\ln Z\\Big]\\\\
&= -S(q) + \\beta\\,\\langle E\\rangle_q + \\ln Z\\\\
&= \\beta\\Big[\\langle E\\rangle_q - \\tfrac{1}{\\beta}S(q) - F(\\beta)\\Big]
\\end{aligned}
$$

Define the **Gibbs free energy functional**

$$
\\boxed{\\,G[q] \\;\\equiv\\; \\langle E\\rangle_q - k_BT\\,S(q)\\,}
$$

Then

$$
\\boxed{\\,k_BT\\,D_{\\rm KL}(q\\Vert p) \\;=\\; G[q] - F(\\beta)\\,}
$$

This is a beautiful identity. Read it both ways:

- The **information-theoretic** KL divergence between any distribution $q$ and the Boltzmann distribution $p$ is exactly the **physical free energy excess** of $q$ over equilibrium.
- The **Helmholtz free energy** $F(\\beta) = -\\frac{1}{\\beta}\\ln Z$ is the *minimum value* of $G[q]$, attained when $q = p$.

### 5.1 Variational characterization of the Boltzmann distribution

> Among all distributions $q(\\vec s)$, the one that minimizes the Gibbs free energy
> $$ G[q] = \\langle E\\rangle_q - k_BT\\,S(q) $$
> is the Boltzmann distribution $p(\\vec s) = e^{-\\beta E(\\vec s)}/Z$, and the minimum value is the Helmholtz free energy $F(\\beta)$.

This is one of the most useful organizing principles in stat mech. The Boltzmann distribution arises from a competition:

- Lowering $\\langle E\\rangle_q$ pushes $q$ to concentrate at low-energy states.
- Raising $S(q)$ pushes $q$ to spread out evenly.
- Temperature $k_BT$ is the exchange rate between these.

At low $T$, energy minimization wins → distribution freezes onto the ground state. At high $T$, entropy wins → uniform distribution. The Boltzmann distribution is the unique optimal compromise.

---

## 6. Maximum entropy: another route to Boltzmann

Now, let's derive the same result a different way. **Question:** what is the distribution $q(\\vec s)$ that maximizes entropy $S(q)$ subject to a fixed mean energy $\\langle E\\rangle_q = E$?

We use Lagrange multipliers $\\beta$ (for the energy constraint) and $\\lambda$ (for normalization):

$$
\\mathcal{L}[q] = -\\sum_{\\vec s} q(\\vec s)\\ln q(\\vec s) - \\beta\\Big[\\sum_{\\vec s} E(\\vec s) q(\\vec s) - E\\Big] - \\lambda\\Big[\\sum_{\\vec s} q(\\vec s) - 1\\Big].
$$

Set $\\partial\\mathcal{L}/\\partial q(\\vec s) = 0$:

$$
-\\ln q(\\vec s) - 1 - \\beta E(\\vec s) - \\lambda = 0
\\;\\;\\Longrightarrow\\;\\;
q(\\vec s) = e^{-1-\\lambda}\\,e^{-\\beta E(\\vec s)}.
$$

Normalization fixes the prefactor: $q(\\vec s) = e^{-\\beta E(\\vec s)}/Z$. The **Lagrange multiplier $\\beta$ is the inverse temperature**, determined by the energy constraint $\\langle E\\rangle_q = E$.

So we have a third interpretation:

> **The Boltzmann distribution is the maximum-entropy distribution at fixed mean energy.**

This is an extremely general principle: it gives a "least biased" probability distribution consistent with whatever you know about the system.

---

## 7. Summary

We extended entropy from "log of microstates" to "average surprise" $S(q) = -\\sum q\\ln q$, and immediately found three new viewpoints on the Boltzmann distribution:

| View | Statement |
|---|---|
| Combinatorial | $\\#\\{\\text{sequences with empirical }\\hat p\\} \\approx e^{NS(\\hat p)}$ |
| Large deviations | $\\Pr[\\hat p(\\vec s)=\\hat p] \\approx e^{-N D_{\\rm KL}(\\hat p\\Vert p)}$ |
| Free energy | $k_BT\\, D_{\\rm KL}(q\\Vert p) = G[q] - F$ |
| Variational (Gibbs) | Boltzmann $= \\arg\\min_q G[q]$, minimum value $= F$ |
| Maximum entropy | Boltzmann $= \\arg\\max_q S(q)$ subject to $\\langle E\\rangle_q = E$ |

The free energy $F$ has emerged as a central object: it equals the minimum of $G[q]$, it sets the scale for KL divergences, and it is essentially $-\\ln Z$. In the next lecture we'll see that $F(\\beta)$ is also a **cumulant generating function** — derivatives of $F$ with respect to $\\beta$ produce the moments of the energy distribution.

---
`,G7=`# Topic 3 — Free Energy as a Cumulant Generator

> *We show that the free energy is a cumulant generating function in disguise. Differentiating it with respect to a source field produces moments and cumulants of any observable. As a special case, this gives the fluctuation-response theorem, one of the cornerstones of statistical physics.*

---

## 1. Why care about the free energy?

So far we have written down the Boltzmann distribution

$$
p(\\vec s) = \\frac{e^{-\\beta E(\\vec s)}}{Z(\\beta)}, \\qquad Z(\\beta) = \\int d\\vec s\\, e^{-\\beta E(\\vec s)},
$$

and defined the **Helmholtz free energy**

$$
F(\\beta) = -\\frac{1}{\\beta}\\ln Z(\\beta).
$$

This single number contains, in compressed form, *everything* about the equilibrium thermodynamics. Today we make this precise: differentiating $F$ produces all moments of the energy and, more generally, all cumulants of any observable. The trick is to introduce a *source field* coupled to the observable of interest.

Before doing that, let me first review some background on **moment** and **cumulant generating functions**.

---

## 2. Moments and the moment generating function (MGF)

Let $s$ be a random variable with distribution $p(s)$. The $n$-th **moment** is

$$
\\langle s^n\\rangle \\;=\\; \\int ds\\, s^n\\, p(s).
$$

We package all moments into one object, the **moment generating function** (MGF):

$$
\\boxed{\\,M_s(h) \\;\\equiv\\; \\langle e^{hs}\\rangle \\;=\\; \\sum_{n=0}^{\\infty} \\frac{h^n}{n!}\\langle s^n\\rangle\\,}
$$

So moments are read off as

$$
\\langle s^n\\rangle = \\frac{d^n}{dh^n}M_s(h)\\Big|_{h=0}.
$$

### 2.1 Moments are not additive

If $s = s_1 + s_2$ with $s_1, s_2$ independent, then $\\langle s^2\\rangle$ has a *cross term*:

$$
\\langle s^2\\rangle = \\langle s_1^2\\rangle + \\langle s_2^2\\rangle + 2\\langle s_1\\rangle\\langle s_2\\rangle,
$$

which is *not* simply $\\langle s_1^2\\rangle + \\langle s_2^2\\rangle$. Moments don't add nicely under sums of independent variables. We want something that does.

### 2.2 The cumulant generating function (CGF)

For independent $s_1, s_2$ the MGF *factorizes*:

$$
M_{s_1+s_2}(h) = \\langle e^{h(s_1+s_2)}\\rangle = \\langle e^{hs_1}\\rangle\\langle e^{hs_2}\\rangle = M_{s_1}(h)M_{s_2}(h).
$$

So if we take logs we get additivity. Define the **cumulant generating function**

$$
\\boxed{\\,\\phi_s(h) \\;\\equiv\\; \\ln \\langle e^{hs}\\rangle\\,}
$$

By construction $\\phi_{s_1+s_2}(h) = \\phi_{s_1}(h)+\\phi_{s_2}(h)$. The Taylor coefficients

$$
c_n \\;\\equiv\\; \\frac{d^n}{dh^n}\\phi_s(h)\\Big|_{h=0}
$$

are called the **cumulants**. Because of the additivity above, **cumulants of sums of independents are additive**.

### 2.3 First few cumulants

Compute by hand:

$$
\\phi(h) = \\ln(1 + h\\langle s\\rangle + \\tfrac{h^2}{2}\\langle s^2\\rangle + \\dots) = h\\langle s\\rangle + \\tfrac{h^2}{2}\\big(\\langle s^2\\rangle - \\langle s\\rangle^2\\big)+\\dots
$$

So:
- $c_1 = \\langle s\\rangle$ (mean)
- $c_2 = \\langle s^2\\rangle - \\langle s\\rangle^2 = \\mathrm{Var}(s)$ (variance)
- $c_3 = \\langle (s-\\langle s\\rangle)^3\\rangle$
- $c_4 = \\langle s^4\\rangle - 3\\langle s^2\\rangle^2$ (assuming $\\langle s\\rangle=0$): excess kurtosis × variance²

### 2.4 Example: Gaussian

For $p(s) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}}\\exp\\!\\big[-\\frac{(s-\\mu)^2}{2\\sigma^2}\\big]$:

$$
\\phi(h) = \\mu h + \\tfrac{1}{2}\\sigma^2 h^2.
$$

So $c_1 = \\mu$, $c_2 = \\sigma^2$, $c_n = 0$ for $n \\geq 3$. **The Gaussian is the unique distribution with only two non-vanishing cumulants.**

### 2.5 A quick proof of the CLT

Let $S = \\frac{1}{\\sqrt N}\\sum_{i=1}^N s_i$ with $s_i$ i.i.d., $\\langle s_i\\rangle = 0$. Cumulants under scaling $s\\to \\gamma s$ scale as $c_n\\to \\gamma^n c_n$. Cumulants are additive over independent sums. Therefore

$$
c_n(S) = \\frac{N}{N^{n/2}}\\, c_n(s) = N^{1-n/2}\\, c_n(s).
$$

For $n=2$: $c_2(S) = c_2(s) = \\sigma^2$ (finite). For $n\\geq 3$: $c_n(S) = N^{1-n/2}c_n(s) \\to 0$. So all higher cumulants vanish $\\Rightarrow$ $S$ becomes Gaussian. Done — with no integrals!

---

## 3. Now to physics: $F$ as a cumulant generator

In physics it's customary to work with $-\\beta F$ rather than $\\ln Z$ (they're the same thing). The ordinary partition function is

$$
\\beta F(\\beta) = -\\ln Z(\\beta) = -\\ln \\int d\\vec s\\, e^{-\\beta E(\\vec s)}.
$$

To get cumulants of an observable $\\Theta(\\vec s)$, **we add a source term**:

$$
E(\\vec s) \\to E(\\vec s) - \\tfrac{h}{\\beta}\\Theta(\\vec s).
$$

Then the new "free energy" is

$$
\\beta F(\\beta, h) \\;=\\; -\\ln Z(\\beta,h) \\;=\\; -\\ln\\int d\\vec s\\, e^{-\\beta E(\\vec s) + h\\Theta(\\vec s)}.
$$

Subtract $\\beta F(\\beta) = \\beta F(\\beta, 0)$:

$$
-\\beta\\big[F(\\beta,h) - F(\\beta,0)\\big] = \\ln \\frac{Z(\\beta,h)}{Z(\\beta,0)} = \\ln \\frac{\\int e^{-\\beta E + h\\Theta}}{\\int e^{-\\beta E}} = \\ln \\langle e^{h\\Theta}\\rangle_p.
$$

The right-hand side is *exactly* the CGF of $\\Theta$ under the Boltzmann distribution! So

$$
\\boxed{\\,\\phi_\\Theta(\\beta, h) \\;=\\; -\\beta\\big[F(\\beta,h) - F(\\beta,0)\\big]\\,}
$$

In words: **the free energy with a source field turned on is, up to a sign and a constant, the cumulant generating function of the observable conjugate to that field.**

So:

$$
c_n(\\Theta) = \\frac{\\partial^n}{\\partial h^n}\\!\\left[-\\beta F(\\beta,h)\\right]\\bigg|_{h=0}.
$$

The first cumulant is the mean response, the second is the variance, and so on. Differentiating $F$ in clever ways gives you everything.

---

## 4. The fluctuation–response theorem

Look at the $n=1$ and $n=2$ cumulants:

$$
\\langle\\Theta\\rangle = -\\frac{\\partial(\\beta F)}{\\partial h}\\Big|_{h=0},\\qquad
\\mathrm{Var}(\\Theta) = -\\frac{\\partial^2(\\beta F)}{\\partial h^2}\\Big|_{h=0}.
$$

Differentiating the first w.r.t. $h$ gives the second:

$$
\\boxed{\\,\\mathrm{Var}(\\Theta) \\;=\\; \\frac{\\partial \\langle\\Theta\\rangle}{\\partial h}\\,}
$$

**The fluctuations of $\\Theta$ at zero field equal the susceptibility (response) of $\\Theta$ to a small field $h$ that couples to it.** This is the **fluctuation-response theorem**, the granddaddy of fluctuation-dissipation relations. It says: a system that fluctuates a lot is also a system that responds strongly to perturbations — and vice versa. This is *not* obvious a priori; it's a consequence of the Boltzmann distribution.

### 4.1 Worked example — particle in a quadratic well

Let me show the formula in action. Consider a 1D particle with $E(s) = \\tfrac{1}{2}ks^2$ (a spring). At temperature $T$ with no field:

$$
p(s) \\propto e^{-\\beta\\, \\tfrac{1}{2}ks^2}\\;\\;\\Rightarrow\\;\\;\\langle s\\rangle = 0,\\quad \\mathrm{Var}(s) = \\frac{k_BT}{k}.
$$

Now turn on an electric field that couples to charge: $E(s)\\to \\tfrac{1}{2}ks^2 - q\\mathcal{E}\\, s$. The new equilibrium position minimizes $E$:

$$
\\langle s\\rangle = \\frac{q\\mathcal{E}}{k}.
$$

Susceptibility:
$$
\\frac{\\partial\\langle s\\rangle}{\\partial \\mathcal{E}} = \\frac{q}{k}.
$$

Identifying $h\\Theta = (q\\mathcal{E}/k_BT) s$, so $h = q\\mathcal{E}/k_BT$ and $\\Theta=s$,

$$
\\frac{\\partial\\langle s\\rangle}{\\partial h} = k_BT\\,\\frac{\\partial\\langle s\\rangle}{\\partial(q\\mathcal{E})} = \\frac{k_BT}{k} = \\mathrm{Var}(s).\\;\\;\\checkmark
$$

A loose spring ($k$ small) has large fluctuations *and* responds strongly to a field. A stiff spring ($k$ large) has small fluctuations *and* responds weakly. Both go like $1/k$.

---

## 5. Cumulants of the energy itself

Specializing to $\\Theta = E$ (energy itself), it's natural to use $\\beta$ as the "source":

$$
\\beta \\to \\beta - h:\\quad e^{-\\beta E + hE}.
$$

Then

$$
\\phi_E(\\beta, h) = \\ln \\frac{Z(\\beta - h)}{Z(\\beta)} = -\\beta F(\\beta-h) + \\beta F(\\beta).
$$

Cumulants of energy:

$$
c_n(E) = \\frac{\\partial^n}{\\partial h^n}\\phi_E(\\beta,h)\\Big|_{h=0} = (-1)^{n+1}\\frac{\\partial^n}{\\partial \\beta^n}\\big[\\beta F(\\beta)\\big].
$$

So

$$
\\boxed{\\,\\frac{\\partial^n}{\\partial\\beta^n}\\big[\\beta F(\\beta)\\big] \\;=\\; (-1)^{n+1}\\, c_n(E)\\,}
$$

For example, $\\partial(\\beta F)/\\partial\\beta = \\langle E\\rangle$, and $-\\partial^2(\\beta F)/\\partial\\beta^2 = \\mathrm{Var}(E)$. The latter is closely related to the **heat capacity** $C = \\partial\\langle E\\rangle/\\partial T$, and gives another classic fluctuation-response identity:

$$
\\mathrm{Var}(E) = k_BT^2\\, C.
$$

A system with large heat capacity has large energy fluctuations; near a phase transition $C$ diverges and so do the fluctuations.

---

## 6. Picture and summary

\`\`\`
small k (soft spring)               large k (stiff spring)
broad p(s), large Var(s)            narrow p(s), small Var(s)
strong response to field            weak response to field
\`\`\`

This intuitive picture generalizes: in stat mech, **fluctuations and responses are two sides of the same coin**, both encoded in the second derivative of $F(\\beta, h)$.

Big takeaways:

| Quantity | Generator |
|---|---|
| Moments of $\\Theta$ | $M_\\Theta(h) = \\langle e^{h\\Theta}\\rangle$ |
| Cumulants of $\\Theta$ | $\\phi_\\Theta(h) = \\ln\\langle e^{h\\Theta}\\rangle$ |
| Cumulants of $\\Theta$ in physics | $\\phi_\\Theta(\\beta,h) = -\\beta[F(\\beta,h)-F(\\beta,0)]$ |
| Cumulants of energy | $\\partial^n[\\beta F]/\\partial \\beta^n = (-1)^{n+1}c_n(E)$ |
| Fluctuation–response | $\\mathrm{Var}(\\Theta) = \\partial\\langle\\Theta\\rangle/\\partial h$ |

So the free energy $F(\\beta, h)$ is far more than just a thermodynamic potential — it is a **generating function for fluctuations**. The next lecture will introduce a powerful technique for *computing* $F$ in the thermodynamic limit: saddle-point analysis and Legendre transforms.

---
`,Z7=`# Topic 4 — Free Energy, Saddle Points, Legendre Transforms, and Mean Field

> *We've defined the free energy. We know derivatives of $F$ generate cumulants. But how do we actually **compute** $F$ in practice for an interacting system? The answer is the saddle-point method, which produces the elegant Legendre-transform relation $\\beta F = \\beta E - S$ and gives us our first taste of mean-field theory.*

---

## 1. Where we are

We had the cumulant generating identity from Topic 3:

$$
-\\beta F(\\beta, h) \\;=\\; \\ln \\int d\\vec s\\, e^{-\\beta E(\\vec s) + h\\,\\Theta(\\vec s)},
$$

so derivatives $\\partial^n_h(-\\beta F)$ give cumulants of $\\Theta$ at $h=0$. The mean and variance are the most useful:
$$
c_1 = \\langle\\Theta\\rangle = -\\frac{\\partial(\\beta F)}{\\partial h},\\quad c_2 = \\mathrm{Var}(\\Theta) = -\\frac{\\partial^2(\\beta F)}{\\partial h^2}.
$$

Since $c_2 \\geq 0$, the function $\\beta F(h)$ is **concave** in $h$. (And, in many physical setups, **convex** in $\\beta$.) This concavity has a beautiful geometric consequence which we will exploit: $\\beta F$ is the **Legendre transform** of another natural object — the entropy at fixed magnetization (or fixed energy).

To see how this works, let's first introduce the **saddle-point method** for evaluating partition function integrals.

---

## 2. From microstates to macrostates: the saddle-point trick

The partition function $Z = \\int d\\vec s\\, e^{-\\beta E(\\vec s)}$ is an integral over $N$-dimensional microstate space — way too big to do directly. The trick is to *change variables* to a **macrostate** $E$ (or some other macroscopic order parameter):

$$
Z = \\int dE\\, \\Omega(E)\\, e^{-\\beta E} = \\int dE\\, e^{S(E) - \\beta E} \\;\\equiv\\; \\int dE\\, e^{N\\Phi(E/N)}
$$

where $\\Phi(\\varepsilon) = s(\\varepsilon) - \\beta\\varepsilon$ is order 1 and $\\varepsilon = E/N$. As $N\\to\\infty$, the integral is **dominated by its maximum** by Laplace's method.

> **Saddle-point evaluation.** For a smooth function $\\Phi$ with a unique maximum at $\\varepsilon^*$,
> $$ \\int d\\varepsilon\\, e^{N\\Phi(\\varepsilon)} \\;\\sim\\; e^{N\\Phi(\\varepsilon^*)} \\quad\\text{as } N\\to\\infty. $$

So

$$
-\\beta F = \\ln Z \\approx \\max_\\varepsilon\\big[N s(\\varepsilon) - N\\beta\\varepsilon\\big]
\\;\\;\\Longrightarrow\\;\\;
\\boxed{\\,\\beta F(\\beta) \\;=\\; \\min_\\varepsilon \\big[\\beta\\varepsilon - s(\\varepsilon)\\big]\\,}
$$

This is a **Legendre transform** of the entropy: $\\beta F$ is the Legendre conjugate of $s$ as a function of $\\varepsilon$.

### 2.1 Stationarity condition

Setting $d/d\\varepsilon$ of $\\beta\\varepsilon - s(\\varepsilon) = 0$ gives

$$
\\beta = \\frac{ds}{d\\varepsilon}\\Big|_{\\varepsilon^*}.
$$

This is the *same* relation we used to define temperature in the microcanonical ensemble! At the saddle, the canonical $\\beta$ matches the microcanonical $\\beta(\\varepsilon)$. Excellent — the two ensembles agree in the thermodynamic limit.

### 2.2 The classic textbook formula

Multiply through by $1/\\beta$ and use $\\varepsilon = E/N$, $s = S/N$:

$$
\\boxed{\\,F = E - k_BT\\, S\\,}
$$

with $1/k_BT = \\partial S/\\partial E$. This is the form of the free energy you find in every undergraduate stat mech book, but now with a precise statistical-mechanical *derivation*: it is the saddle-point approximation to $-k_BT\\ln Z$.

---

## 3. Legendre transforms — geometry

Why do Legendre transforms keep showing up? They are the natural way to swap a variable for its conjugate slope, while preserving the information of a convex/concave function.

> **Definition.** For a convex function $y(x)$, define the Legendre transform
> $$ y^*(x^*) = \\max_x\\,\\big[x^* x - y(x)\\big]. $$

**Construction:**
1. Pick a point $(x, y(x))$.
2. Draw the tangent line at $x$ with slope $x^*(x) \\equiv y'(x)$.
3. The y-intercept is $-y^*(x^*)$, i.e., $y^*(x^*) = x^*\\cdot x - y(x)$.

Geometrically, $y$ and $y^*$ encode the same convex object — one as a function of position, the other as a family of tangent lines (slope, intercept). For convex $y$, the transform is involutive: $y^{**} = y$.

### 3.1 Dictionary for stat mech

| Original | Conjugate |
|---|---|
| $x \\leftrightarrow$ energy $\\varepsilon$ | $x^* \\leftrightarrow$ inverse temperature $\\beta$ |
| $y(x) \\leftrightarrow$ entropy $s(\\varepsilon)$ | $y^*(x^*) \\leftrightarrow \\beta f(\\beta)$ |
| Slope $\\partial y/\\partial x = \\beta$ | Slope $\\partial y^*/\\partial x^* = \\varepsilon$ |

The dual relation $y^*(x^*) + y(x) = x^*x$ becomes
$$
\\beta F(\\beta) + S(E) = \\beta E
\\;\\Longleftrightarrow\\;
F = E - k_BT\\, S,
$$
exactly the formula we just derived.

---

## 4. Worked example #1 — a single Ising spin in a field

Let me show the Legendre/saddle picture in a problem we can do completely by hand. A single spin $s \\in \\{+1,-1\\}$ in a field $h$ has $E(s) = -hs$ and

$$
Z(\\beta, h) = e^{\\beta h} + e^{-\\beta h} = 2\\cosh(\\beta h).
$$

So
$$
F(\\beta, h) = -\\frac{1}{\\beta}\\ln(2\\cosh\\beta h).
$$

Mean magnetization:
$$
\\langle s\\rangle = -\\frac{\\partial F}{\\partial h} = \\tanh(\\beta h).
$$

Mean energy: $\\langle E\\rangle = -\\partial(\\beta F)/\\partial \\beta = -h\\tanh(\\beta h)$. Entropy:
$$
S(\\beta) = \\beta\\langle E\\rangle - \\beta F = \\ln(2\\cosh\\beta h) - \\beta h\\tanh\\beta h.
$$

This is the *canonical* viewpoint — fix $\\beta$ and $h$, derive everything. The dual *microcanonical* viewpoint fixes $\\langle s\\rangle = m$ and asks for $S(m)$:

$$
S(m) = -\\tfrac{1+m}{2}\\ln\\tfrac{1+m}{2} - \\tfrac{1-m}{2}\\ln\\tfrac{1-m}{2}.
$$

Sanity check: $\\beta f(\\beta) = \\min_m\\big[-\\beta h m - S(m)\\big]$ gives $\\beta h = -\\partial S/\\partial m = \\tfrac{1}{2}\\ln\\tfrac{1+m}{1-m} = \\tanh^{-1} m$, so $m = \\tanh\\beta h$ as before.

---

## 5. Worked example #2 — fully connected Ising (mean field)

Let's now use saddle-point to solve the **first nontrivial interacting system**: the fully-connected Ising model. Take $N$ spins $s_i = \\pm 1$ with energy

$$
E(\\vec s) = -\\frac{1}{2N}\\sum_{i,j} J\\, s_is_j - h\\sum_i s_i.
$$

Set $J = 1$ (units). Define the mean magnetization

$$
m = \\frac{1}{N}\\sum_i s_i \\;\\;\\Longrightarrow\\;\\; m^2 = \\frac{1}{N^2}\\sum_{ij} s_i s_j.
$$

Then
$$
E(\\vec s) = -\\tfrac{1}{2}N m^2 - N h m.
$$

The energy depends on $\\vec s$ only through $m$. So

$$
Z = \\sum_{\\vec s} e^{-\\beta E(\\vec s)} = \\sum_m \\Omega(m)\\, e^{\\beta N(\\tfrac{1}{2}m^2 + hm)}
$$

where $\\Omega(m)$ counts microstates with magnetization $m$. With $N_+$ up-spins and $N_- = N - N_+$ down-spins, $m = (N_+ - N_-)/N$, so $N_\\pm = N(1\\pm m)/2$. Then

$$
\\Omega(m) = \\binom{N}{N_+} = \\frac{N!}{N_+!\\,N_-!} \\;\\approx\\; e^{N S(m)},
$$

with the same binary entropy as in §4. So

$$
Z \\approx \\int dm\\, e^{N\\big[S(m) + \\tfrac{\\beta}{2}m^2 + \\beta h m\\big]}.
$$

By Laplace's method,

$$
\\boxed{\\,-\\beta f(\\beta, h) \\;=\\; \\max_m\\Big[S(m) + \\tfrac{\\beta}{2}m^2 + \\beta h m\\Big]\\,}
$$

with $f = F/N$ the free energy per spin.

### 5.1 Saddle-point equation

Setting $\\partial_m = 0$:

$$
S'(m) + \\beta m + \\beta h = 0,\\qquad S'(m) = -\\tfrac{1}{2}\\ln\\tfrac{1+m}{1-m} = -\\tanh^{-1}m.
$$

So

$$
\\boxed{\\,m \\;=\\; \\tanh\\big[\\beta(m + h)\\big]\\,}
$$

This is the **mean-field self-consistency equation**, the iconic equation of mean-field theory.

### 5.2 Heuristic derivation — "each spin sees a mean field"

Here's the same equation derived without integrals. A single spin $s_i$ in this model couples to the field $h + (1/N)\\sum_{j\\neq i} s_j \\approx h + m$. So it behaves like a single spin in an effective field $h_{\\rm eff} = h + m$. Its mean is $\\tanh(\\beta h_{\\rm eff})$. **Self-consistency** demands that this mean equals $m$ itself:
$$
m = \\tanh\\beta(h+m).
$$
Same equation.

---

## 6. Phase transitions from mean-field

Look at this self-consistency equation at $h=0$:
$$
m = \\tanh(\\beta m).
$$

Plot $y = m$ and $y = \\tanh(\\beta m)$ on the same axes:

- **High temperature** ($\\beta < 1$, i.e., $k_BT > 1$): $\\tanh$ has slope $\\beta < 1$ at the origin, so the only crossing is at $m^* = 0$. The system is **paramagnetic**.
- **Low temperature** ($\\beta > 1$, i.e., $k_BT < 1$): $\\tanh$ has slope $\\beta > 1$ at origin and saturates to $\\pm 1$. There are now **three** solutions: $m=0$ and $m = \\pm m^*(T)$ with $m^*(T) > 0$. The $m=0$ solution becomes unstable (a local *minimum* of $-\\Phi$ becomes a local *maximum*); the system is **ferromagnetic**.

So at $\\beta = \\beta_c = 1$ (i.e., $k_BT_c = J$) there is a **continuous (second-order) phase transition**. The free energy curve $f(m)$ goes from a single well at high $T$ to a double-well below $T_c$ — the system spontaneously breaks $\\mathbb{Z}_2$ symmetry by selecting one of the two minima.

This is the prototype of every continuous phase transition in physics, from magnets to superfluids to superconductors.

---

## 7. Summary

The saddle-point/Legendre picture lets us compute free energies in the thermodynamic limit:

1. Identify a macrostate variable $m$ (or $\\varepsilon$) that captures the system's bulk behavior.
2. Express $Z$ as $\\int dm\\, e^{N\\Phi(m)}$ with $\\Phi(m) = -\\beta\\varepsilon(m) + s(m)$.
3. The free energy is $-\\beta f = \\max_m \\Phi(m)$, determined by $\\Phi'(m) = 0$.
4. The saddle-point equation **is** the mean-field equation; multiple solutions signal phase transitions.

Key formulas to remember:

$$
F = E - k_BT\\,S, \\qquad \\beta F(\\beta) = \\min_\\varepsilon[\\beta\\varepsilon - s(\\varepsilon)].
$$

This sets up the next lecture — a deeper dive into mean-field theory and phase transitions, including a Gaussian (Hubbard-Stratonovich) decoupling that turns interacting problems into single-spin problems in a fluctuating field.

---
`,H7=`# Topic 5 — Mean Field Theory and Phase Transitions

> *We finally tackle interacting many-body systems. We'll see three independent ways to derive mean-field theory — saddle-point, variational, and self-consistent field — and use them to understand both continuous (second-order) and discontinuous (first-order) phase transitions.*

---

## 1. Where we are

We have now built up a large toolkit:

- The **Boltzmann distribution** $p(\\vec s)\\propto e^{-\\beta E(\\vec s)}$ for a system in equilibrium with a reservoir at temperature $T$.
- The **Helmholtz free energy** $F(\\beta) = -\\frac{1}{\\beta}\\ln Z(\\beta)$, with $-\\beta F$ as the cumulant generating function for any observable coupled to a source.
- The **fluctuation–response theorem** $\\mathrm{Var}(\\Theta) = \\partial\\langle\\Theta\\rangle/\\partial h$.
- The **saddle-point/Legendre** identity $F = E - k_BT S$ and the large-deviation principle $p(\\varepsilon) \\asymp e^{-NI(\\varepsilon)}$ for the energy density.

Today: the **first interacting model**, the fully-connected (Curie–Weiss) Ising model, and how mean-field theory predicts a phase transition. We then revisit it from a **variational** viewpoint that generalizes immediately to other models like the Potts model.

---

## 2. Sanity check — a single non-interacting spin

Before we tackle interactions, let's burn in the single-spin calculation. Take $s\\in\\{\\pm 1\\}$ with $E(s) = -hs$. Then

$$
Z(\\beta, h) = e^{\\beta h} + e^{-\\beta h} = 2\\cosh\\beta h
\\;\\;\\Rightarrow\\;\\;
F(\\beta, h) = -\\tfrac{1}{\\beta}\\ln(2\\cosh\\beta h).
$$

Mean energy and magnetization:
$$
\\langle E\\rangle = -\\frac{\\partial(\\beta F)}{\\partial \\beta} = -h\\tanh\\beta h,\\qquad
\\langle s\\rangle = -\\frac{\\partial F}{\\partial h} = \\tanh\\beta h.
$$

This is what a spin in *external* field $h$ looks like. Hold this in mind: it's the building block for everything below.

---

## 3. The Curie–Weiss / fully-connected Ising model

Now, let's consider $N$ Ising spins $s_i = \\pm 1$ that all interact with each other equally. The energy is

$$
E(\\vec s) = -\\frac{J}{2N}\\sum_{i,j}s_i s_j - h\\sum_i s_i.
$$

The factor $1/N$ keeps the energy extensive: each spin interacts with $\\sim N$ neighbors, but each coupling is $J/N$. Set $J=1$ for simplicity.

### 3.1 The energy depends only on $m$

Define $m \\equiv \\frac{1}{N}\\sum_i s_i$ (the magnetization per spin). Then

$$
m^2 = \\Big(\\tfrac{1}{N}\\sum_i s_i\\Big)\\Big(\\tfrac{1}{N}\\sum_j s_j\\Big) = \\frac{1}{N^2}\\sum_{ij}s_is_j,
$$

so

$$
E(\\vec s) = -\\tfrac{1}{2}N m^2 - N h m \\;\\equiv\\; N\\,\\varepsilon(m),\\qquad \\varepsilon(m) = -\\tfrac{1}{2}m^2 - hm.
$$

A miracle: the energy of a microstate $\\vec s$ depends on $\\vec s$ *only* through the macroscopic $m$.

### 3.2 Counting microstates with a given $m$

Among $N$ spins, let $pN$ be up and $(1-p)N$ down. Then $m = p - (1-p) = 2p-1$, so $p = (1+m)/2$, $1-p = (1-m)/2$. The number of configurations with magnetization $m$ is

$$
\\Omega(m) = \\binom{N}{pN} \\;\\approx\\; e^{N S(m)},\\qquad S(m) = -\\tfrac{1+m}{2}\\ln\\tfrac{1+m}{2} - \\tfrac{1-m}{2}\\ln\\tfrac{1-m}{2}.
$$

(Same Stirling computation as in Topic 2.)

### 3.3 The partition function as a saddle-point integral

Now collect:

$$
Z = \\sum_{\\vec s} e^{-\\beta E(\\vec s)} = \\sum_m \\Omega(m)\\, e^{-N\\beta\\varepsilon(m)}
\\;\\approx\\; \\int dm\\; e^{N\\big[S(m) - \\beta\\varepsilon(m)\\big]}.
$$

By Laplace's method,

$$
\\boxed{\\,-\\beta f(\\beta, h) \\;=\\; \\max_m\\Big[S(m) - \\beta\\varepsilon(m)\\Big] \\;=\\; \\max_m\\Big[S(m) + \\tfrac{\\beta}{2}m^2 + \\beta h m\\Big]\\,}
$$

where $f = F/N$.

### 3.4 The large-deviation interpretation

Equivalently, the probability density of the magnetization at large $N$ is

$$
p(m) \\;\\asymp\\; e^{-N\\beta f(m)}, \\qquad f(m) \\equiv \\varepsilon(m) - k_BT\\, S(m).
$$

This is a large deviation principle for $m$, with rate function $I(m) = \\beta[f(m) - f(m^*)]$. The most likely $m$ minimizes $f(m)$.

---

## 4. The mean-field self-consistency equation

To find the most likely $m$, set $\\partial f/\\partial m = 0$:

$$
\\frac{\\partial f}{\\partial m} = \\frac{\\partial \\varepsilon}{\\partial m} - k_BT\\frac{\\partial S}{\\partial m} = -m - h - k_BT\\cdot\\Big(-\\tfrac{1}{2}\\ln\\tfrac{1+m}{1-m}\\Big) = 0.
$$

So
$$
\\tfrac{1}{2}\\ln\\tfrac{1+m}{1-m} = \\beta(m + h).
$$

Inverting via $\\tanh^{-1}x = \\frac{1}{2}\\ln\\frac{1+x}{1-x}$:

$$
\\boxed{\\,m \\;=\\; \\tanh\\!\\big[\\beta(m + h)\\big]\\,}
$$

This is the **Curie–Weiss / mean-field equation**, central to all of phase-transition theory.

### 4.1 Heuristic re-derivation: each spin in a mean field

Forget integrals for a moment. Pick spin 1 and stare at the energy as a function of $s_1$ alone:

$$
E(s_1) = -s_1\\Big[\\frac{J}{N}\\sum_{j=1}^N s_j + h\\Big].
$$

Now do the **mean-field substitution**: write $s_j = m + (s_j - m)$ where $m = \\langle s_j\\rangle$ is the (yet unknown) average. Drop the fluctuation $(s_j - m)$ — that's the mean-field approximation. Then

$$
E(s_1) \\approx -s_1(Jm + h) = -s_1 h_{\\rm eff},\\qquad h_{\\rm eff} = Jm + h.
$$

A single spin in an effective field $h_{\\rm eff}$ has $\\langle s_1\\rangle = \\tanh(\\beta h_{\\rm eff})$. **Self-consistency** says $\\langle s_1\\rangle = m$ (since all spins are equivalent), so

$$
m = \\tanh\\beta(Jm + h),
$$

reproducing the saddle-point result. The mean-field approximation is exact here because we have *all-to-all* interactions: fluctuations of any one spin are washed out by averaging over $N\\to\\infty$ neighbors.

---

## 5. Phase transition in the Curie–Weiss model

Set $h = 0$ and analyze $m = \\tanh(\\beta m)$ graphically. Near $m=0$,
$$
\\tanh(\\beta m) = \\beta m - \\tfrac{1}{3}(\\beta m)^3 + \\dots
$$

so the $m=0$ solution is always present. The slope of the rhs at the origin is $\\beta$; the lhs is the line $y=m$ with slope 1.

- **Above $T_c$ ($\\beta < 1$, slope $<1$):** rhs stays below lhs after the origin, so $m=0$ is the unique solution. Free energy $f(m)$ is a single well at $m=0$. **Paramagnet.**
- **At $T_c$ ($\\beta = 1$):** marginal — $\\tanh$ becomes tangent to the line at the origin.
- **Below $T_c$ ($\\beta > 1$):** rhs starts steeper than lhs but saturates to $\\pm 1$, so it crosses again at $\\pm m^*(T) \\neq 0$. Free energy becomes a **double well**; $m=0$ is a *local maximum* (unstable). **Ferromagnet.**

Thus we have a **second-order (continuous) phase transition** at $\\beta_c = 1/J$ (i.e., $k_BT_c = J$). Below $T_c$, $\\mathbb{Z}_2$ symmetry $s_i\\to -s_i$ is **spontaneously broken** as the system selects one of the two wells.

### 5.1 Critical exponents (Landau)

Expand the free energy near $T_c$:
$$
f(m) - f(0) \\approx \\tfrac{1}{2}(1-\\beta)m^2 + \\tfrac{1}{12}\\beta^4 m^4 + \\dots
$$

(The $-\\tfrac{1}{2}m^2$ from $\\varepsilon$ combines with the $S(m) \\approx -\\tfrac{1}{2}m^2 - \\tfrac{1}{12}m^4 + \\ln 2$ entropy expansion, giving a positive quartic and a quadratic that changes sign at $\\beta=1$.)

Minimizing: $m^* \\propto \\sqrt{T_c - T}$ as $T\\to T_c^-$, i.e., the magnetization exponent $\\beta_{\\rm exp} = 1/2$. Susceptibility $\\chi = \\partial m/\\partial h \\propto |T - T_c|^{-1}$, giving exponent $\\gamma = 1$. Heat capacity has a discontinuity at $T_c$. These are **the mean-field critical exponents**.

---

## 6. Variational mean-field theory

Saddle point worked beautifully because the energy depended on $\\vec s$ only through $m$. For more general interactions this won't be true, but we can still use the **variational principle from Topic 2**:

> The Helmholtz free energy is
> $$ F(\\beta) = \\min_{q(\\vec s)} G[q],\\qquad G[q] = \\langle E\\rangle_q - k_BT\\, S(q). $$

If we restrict $q$ to a tractable subclass, we get an *upper bound* on $F$ and an approximation to the true distribution.

### 6.1 Mean-field ansatz: factorized $q$

Try the **product ansatz**:
$$
q(\\vec s) = \\prod_{i=1}^N b(s_i),
$$

so each spin is independent under $q$ with single-spin distribution $b$. Parameterize $b(s) = (1+ms)/2$ on $\\{\\pm 1\\}$ so that $\\langle s\\rangle_b = m$. Compute:

$$
\\langle E\\rangle_q = -\\tfrac{J}{N}\\sum_{ij}\\langle s_i\\rangle_b\\langle s_j\\rangle_b - h\\sum_i\\langle s_i\\rangle_b = N\\big[-\\tfrac{J}{2}m^2 - hm\\big] = N\\varepsilon(m),
$$

(because $q$ factorizes, $\\langle s_is_j\\rangle = m^2$ for $i\\neq j$, and the diagonal $i=j$ contributes a subleading $1/N$). Entropy:
$$
S(q) = -\\sum_{\\vec s} q(\\vec s)\\ln q(\\vec s) = N\\, S(m),
$$

with $S(m)$ the binary entropy from §3.2. So

$$
G[q] = N\\Big[\\varepsilon(m) - k_BT\\, S(m)\\Big] \\;\\Longrightarrow\\;\\; \\min_q G[q] = N\\min_m \\big[\\varepsilon(m) - k_BT S(m)\\big].
$$

We've recovered exactly the saddle-point answer — but now we have a recipe that *works for any model*: pick a tractable variational family, parameterize, and minimize $G[q]$.

### 6.2 The variational principle as upper bound

By Gibbs' inequality (KL ≥ 0), $G[q] \\geq F$ for any $q$, so the variational free energy is always an *upper bound* on the true $F$. The closer $q$ is to the true Boltzmann distribution, the tighter the bound. For the Curie–Weiss model the bound is **exact** in the $N\\to\\infty$ limit.

---

## 7. First-order transitions: the Potts model

The Curie–Weiss model gives a *continuous* transition. For *discontinuous* (first-order) transitions, consider the **$q$-state Potts model**. Each spin takes one of $q$ values $s_i \\in \\{1,\\dots,q\\}$, with energy

$$
E(\\vec s) = -J\\sum_{i,j}\\delta_{s_i, s_j},
$$

(again all-to-all couplings, with appropriate $1/N$ to make extensive). The order parameter is now a vector $\\vec f = (f_1,\\dots,f_q)$ where $f_a = $ fraction of spins in state $a$, with $\\sum_a f_a = 1$, $f_a \\geq 0$ (the simplex).

Variational mean field: $b(s) = f_s$, so $q(\\vec s) = \\prod_i b(s_i)$. Then

$$
G[q] = -kNJ\\sum_a f_a^2 + NkT\\sum_a f_a\\ln f_a.
$$

(The $k$ here is just a positive constant from the mean-field combinatorics.)

Symmetry says $\\vec f = (1/q,\\dots,1/q)$ (equal occupation) is always a stationary point — the disordered phase. To search for an ordered solution, take $\\vec f = (1-(q-1)x,\\,x,\\,x,\\,\\dots,x)$ with $x \\in [0,1/q]$. Plug into $G$ and study as a function of $x$ and $T$.

For $q\\geq 3$, one finds that as $T$ is lowered:
1. At high $T$ only the symmetric solution $x = 1/q$ exists.
2. At an intermediate $T_*$ a *second* local minimum appears at some $x < 1/q$ (ordered phase) but is metastable.
3. At $T_c < T_*$ this second minimum becomes the global minimum — there is a **discontinuous jump** in $\\vec f$ from the symmetric to the ordered solution.

This is a **first-order transition**: the order parameter (here the largest $f_a$) jumps discontinuously, the free energy has a kink (latent heat), but no symmetry is spontaneously broken in the usual continuous-symmetry sense. The picture is two competing local minima exchanging which one is global as $T$ crosses $T_c$.

For $q=2$ (Potts $=$ Ising), the transition becomes continuous; $q\\geq 3$ is needed to get first order in MF.

---

## 8. Summary

We've now seen three independent ways to derive mean-field theory:

| Method | Recipe |
|---|---|
| Saddle point | Reduce $Z$ to $\\int dm\\, e^{N\\Phi(m)}$, take $\\max_m$ |
| Self-consistent field | Replace $s_j\\to m$ around any chosen spin; demand self-consistency |
| Variational | Choose factorized $q(\\vec s) = \\prod b(s_i)$; minimize $G[q]$ |

All three give the same answer for fully-connected models, and the same equation $m = \\tanh\\beta(Jm+h)$ for Curie–Weiss.

**Phase transitions** appear when the saddle-point equation has multiple solutions:

- *Continuous (2nd order)*: the unique disordered minimum splits smoothly into two ordered ones (Curie–Weiss at $T_c$).
- *Discontinuous (1st order)*: a separate ordered minimum appears, becomes metastable, then global; the order parameter jumps (Potts $q\\geq 3$).

Critical exponents at MF level: $\\beta_{\\rm exp}=1/2$, $\\gamma=1$. (These are wrong below the upper critical dimension, but right for fully-connected models.)

In the next lecture we move to the much harder world of **disordered** systems — the Sherrington–Kirkpatrick spin glass — where each pair of spins has its own random coupling. This will force us to invent a brand-new tool: the **replica trick**.

---
`,V7=`# Topic 6 — Replica Theory of Spin Glasses

> *We finally enter the world of disordered systems. The Sherrington–Kirkpatrick (SK) model has random couplings between every pair of spins. To compute the typical free energy we need a brand-new trick: the replica method. We'll set it up carefully, derive the disorder-averaged replicated free energy, and meet the **overlap matrix** $Q_{ab}$ — the central object of spin-glass theory.*

---

## 1. Disordered systems: a new kind of problem

Let me start by motivating the *whole* topic. Up to now the energy $E(\\vec s)$ has been a simple, deterministic function of the microstate. Now consider the **Sherrington–Kirkpatrick (SK) model**:

$$
E(\\vec s) = -\\sum_{i<j} J_{ij}\\, s_i s_j,\\qquad s_i \\in \\{\\pm 1\\},
$$

where the **couplings** $J_{ij}$ are themselves random variables, drawn once and frozen ("**quenched** disorder"):

$$
J_{ij} \\sim \\mathcal{N}\\!\\big(0,\\;1/N\\big),\\qquad \\text{i.i.d. for each pair } i<j.
$$

This is a model of frustrated, disordered magnetism. Every pair has a randomly ferromagnetic ($J_{ij}>0$) or antiferromagnetic ($J_{ij}<0$) coupling. There is no clean ground state — the system is **frustrated**.

The *exact* free energy is now itself a random variable that depends on $\\{J_{ij}\\}$:

$$
F(\\{J\\}) = -\\tfrac{1}{\\beta}\\ln Z(\\{J\\}),\\qquad Z(\\{J\\}) = \\sum_{\\vec s} e^{-\\beta E(\\vec s; \\{J\\})}.
$$

But for **typical** large samples (large $N$), one expects the *intensive* free energy $f = F/N$ to **self-average**: it should converge to a deterministic limit as $N\\to\\infty$.

> **Key question.** What is the typical free energy density $f$ of the SK model as a function of $\\beta$?

This is what we are going to compute, and it will lead us through the most beautiful piece of mathematics in 20th-century theoretical physics: replica theory.

---

## 2. Quenched vs. annealed averages

The **quenched free energy** is the typical/self-averaging free energy:

$$
f_{\\rm quenched} = -\\frac{1}{\\beta N}\\,\\overline{\\ln Z}\\,,
$$

where $\\overline{(\\cdot)}$ denotes the average over disorder $\\{J_{ij}\\}$.

The **annealed** free energy averages $Z$ instead of $\\ln Z$:
$$
f_{\\rm annealed} = -\\frac{1}{\\beta N}\\ln \\overline{Z}.
$$

These are *different*. By Jensen's inequality, $\\overline{\\ln Z} \\leq \\ln \\overline{Z}$, so $f_{\\rm quenched} \\geq f_{\\rm annealed}$ — the typical free energy is *higher* than the annealed one. Annealed treats the couplings as additional thermal degrees of freedom; quenched holds them fixed.

The annealed calculation is easy: just compute

$$
\\overline{Z} = \\sum_{\\vec s}\\overline{e^{-\\beta E(\\vec s)}} = \\sum_{\\vec s} \\prod_{i<j}\\overline{e^{\\beta J_{ij}s_is_j}}.
$$

Each Gaussian average is $e^{\\beta^2 \\langle J^2\\rangle s_i^2 s_j^2/2} = e^{\\beta^2/(2N)}$. So

$$
\\overline{Z} = 2^N\\, e^{\\beta^2(N-1)/4} \\;\\sim\\; 2^N e^{\\beta^2 N/4}.
$$

This gives $f_{\\rm annealed} = -\\tfrac{1}{\\beta}\\ln 2 - \\tfrac{\\beta}{4}$. But this is *not* the right thermodynamic free energy; it's dominated by atypical, lucky disorder samples.

We want $\\overline{\\ln Z}$, and for that we need the replica trick.

---

## 3. The replica trick

How do you compute $\\overline{\\ln Z}$? Direct expansion is awful. **Trick:** use the identity

$$
\\boxed{\\,\\ln Z \\;=\\; \\lim_{n\\to 0}\\,\\frac{Z^n - 1}{n}\\,}
$$

(easily seen by Taylor expanding $Z^n = e^{n\\ln Z} = 1 + n\\ln Z + O(n^2)$). Therefore

$$
\\overline{\\ln Z} \\;=\\; \\lim_{n\\to 0}\\,\\frac{\\overline{Z^n} - 1}{n}.
$$

For positive integer $n$, $Z^n$ is the partition function of $n$ **independent copies (replicas)** of the system, all sharing the *same* disorder:

$$
Z^n = \\sum_{\\vec s^{\\,1}}\\cdots\\sum_{\\vec s^{\\,n}}\\, e^{-\\beta\\sum_{a=1}^n E(\\vec s^a;\\,\\{J\\})}.
$$

The plan is:

1. Compute $\\overline{Z^n}$ as a function of integer $n$.
2. **Analytically continue** to real $n$.
3. Take $n\\to 0$.

This last step is mathematically dubious (you're inverting a limit and an analytic continuation), but it gives correct, predictive answers.

---

## 4. Computing $\\overline{Z^n}$ for the SK model

Let me derive this carefully. With replicas labeled $a=1,\\dots,n$ and spins $s_i^a$:

$$
\\overline{Z^n} = \\sum_{\\{s^a\\}} \\overline{\\exp\\!\\Big[\\beta\\sum_{a=1}^n\\sum_{i<j}J_{ij}s_i^a s_j^a\\Big]}.
$$

The disorder average factorizes over pairs $(i,j)$. For each pair, the exponent is linear in $J_{ij}$ (Gaussian with variance $1/N$), so

$$
\\overline{e^{\\beta J_{ij} \\sum_a s_i^a s_j^a}} = \\exp\\!\\left[\\frac{\\beta^2}{2N}\\Big(\\sum_{a=1}^n s_i^a s_j^a\\Big)^2\\right].
$$

Combining:

$$
\\overline{Z^n} = \\sum_{\\{s^a\\}} \\exp\\!\\left[\\frac{\\beta^2}{2N}\\sum_{i<j}\\Big(\\sum_a s_i^a s_j^a\\Big)^2\\right].
$$

Expand the squared sum:

$$
\\Big(\\sum_a s_i^a s_j^a\\Big)^2 = \\sum_{a,b}s_i^a s_j^a s_i^b s_j^b = \\sum_a (s_i^a s_j^a)^2 + \\sum_{a\\neq b}s_i^a s_i^b s_j^a s_j^b.
$$

Since $(s_i^a)^2 = 1$, the diagonal gives $n$. For the off-diagonal, sum over $i<j$:

$$
\\sum_{i<j}s_i^a s_i^b s_j^a s_j^b = \\tfrac{1}{2}\\Big[\\Big(\\sum_i s_i^a s_i^b\\Big)^2 - \\sum_i (s_i^a s_i^b)^2\\Big] = \\tfrac{1}{2}\\Big[N^2 Q_{ab}^2 - N\\Big],
$$

where we have introduced the **overlap** between replicas $a$ and $b$:

$$
\\boxed{\\,Q_{ab} \\;\\equiv\\; \\frac{1}{N}\\sum_{i=1}^N s_i^a s_i^b\\,}
$$

So, modulo subleading $O(1/N)$ pieces:

$$
\\overline{Z^n} \\;\\approx\\; \\sum_{\\{s^a\\}}\\exp\\!\\left[\\frac{N\\beta^2}{4}\\sum_{a\\neq b}Q_{ab}^2 + \\frac{n\\beta^2 N}{4}\\right].
$$

Drop the constant prefactor for now. The **summand depends on $\\vec s^{\\,1}\\dots \\vec s^{\\,n}$ only through the overlaps $Q_{ab}$**. This is the magic step that makes the replica calculation tractable.

---

## 5. Hubbard–Stratonovich and the saddle-point form

We have $e^{N\\beta^2 Q_{ab}^2/2}$ for $a<b$ — a quadratic in $Q_{ab}$. The standard trick is **Hubbard–Stratonovich** (HS): introduce a Gaussian auxiliary variable $\\hat Q_{ab}$ so that the sum over spins decouples site by site.

> **HS identity.** $\\displaystyle e^{N x^2/2} = \\sqrt{\\frac{N}{2\\pi}}\\int d\\hat x\\, e^{-N\\hat x^2/2 + N\\hat x x}.$

Apply it to each pair $(a<b)$ with $x = \\beta Q_{ab}$:

$$
\\exp\\!\\Big[\\frac{N\\beta^2}{2}\\sum_{a<b}Q_{ab}^2\\Big] = \\int \\prod_{a<b}d\\hat Q_{ab}\\;\\exp\\!\\Big[-\\tfrac{N}{2}\\sum_{a<b}\\hat Q_{ab}^2 + N\\beta\\sum_{a<b}\\hat Q_{ab} Q_{ab}\\Big].
$$

Substituting $Q_{ab} = \\tfrac{1}{N}\\sum_i s_i^a s_i^b$:

$$
N\\beta\\sum_{a<b}\\hat Q_{ab} Q_{ab} = \\beta \\sum_i \\sum_{a<b}\\hat Q_{ab}\\, s_i^a s_i^b.
$$

Now the sum over spins **decouples by site**:

$$
\\sum_{\\{s^a\\}}\\exp\\!\\Big[\\beta\\sum_i\\sum_{a<b}\\hat Q_{ab}s_i^a s_i^b\\Big] = \\Big[Z_1[\\hat Q]\\Big]^N,
\\qquad
Z_1[\\hat Q] = \\sum_{s^1,\\dots,s^n=\\pm 1}\\exp\\!\\Big[\\beta\\sum_{a<b}\\hat Q_{ab}s^a s^b\\Big].
$$

So we end up with

$$
\\overline{Z^n} \\;\\propto\\; \\int d\\hat Q\\;\\exp\\!\\Big[N\\,\\mathcal{S}[\\hat Q]\\Big],\\qquad
\\mathcal{S}[\\hat Q] = -\\tfrac{1}{2}\\sum_{a<b}\\hat Q_{ab}^2 + \\ln Z_1[\\hat Q].
$$

This is a saddle-point integral: as $N\\to\\infty$,

$$
\\boxed{\\,\\frac{1}{N}\\ln \\overline{Z^n} \\;=\\; \\mathop{\\mathrm{ext}}_{\\hat Q}\\,\\mathcal{S}[\\hat Q]\\,}
$$

(extremum, since the saddle in replica space need not be a minimum).

### 5.1 Extremum conditions

The saddle-point equations are $\\partial \\mathcal{S}/\\partial \\hat Q_{ab} = 0$:

$$
\\hat Q_{ab} = \\frac{\\partial \\ln Z_1}{\\partial \\hat Q_{ab}} = \\langle s^a s^b\\rangle_{\\hat Q},
$$

where $\\langle\\cdot\\rangle_{\\hat Q}$ is the Boltzmann measure on the *single-site* multi-replica problem with effective Hamiltonian $-\\beta\\sum_{a<b}\\hat Q_{ab}s^a s^b$. So at the saddle, $\\hat Q_{ab}$ is the **two-replica overlap** measured in this effective theory. (And by inverting, $Q_{ab}$ at the saddle equals $\\hat Q_{ab}$ up to factors.)

---

## 6. The overlap matrix as the order parameter

Let me pause and explain *why* $Q_{ab}$ is the natural order parameter in spin-glass physics.

Recall: in Curie–Weiss the order parameter was $m = \\tfrac{1}{N}\\sum_i s_i$. This works for ferromagnets, where most spins point the same way. In a spin glass, however, the equilibrium states are *not* simple aligned states — they are complicated, sample-dependent patterns. So $\\langle s_i\\rangle$ may be nonzero for each $i$ but the *aggregate* magnetization $m$ is zero (the magnetizations of different spins point in different directions and cancel).

What survives? The **overlap between two equilibrium configurations**:

$$
Q_{ab} = \\frac{1}{N}\\sum_i s_i^a s_i^b.
$$

If replicas $a$ and $b$ are *independent samples from the same Boltzmann measure* with the same disorder, $Q_{ab}$ measures how much they agree:

- $Q_{ab} = 1$: same configuration.
- $Q_{ab} = 0$: independent / random.
- $Q_{ab} \\neq 0$: the two replicas are positively correlated — the system has "remembered" some structure even after thermal disorder.

In the paramagnetic phase, $Q_{ab} = 0$ for $a\\neq b$. In the spin-glass phase, $Q_{ab} \\neq 0$, indicating that the equilibrium measure is concentrated on a non-trivial set of configurations.

---

## 7. Distribution of overlaps and the $P(m)$ object

A central result for what comes next is the connection between the replica overlaps and a physically meaningful **distribution**. Define

$$
P(q) = \\overline{\\,\\Pr_{\\vec s, \\vec s\\,'}\\!\\big[Q(\\vec s, \\vec s\\,') = q\\big]\\,},
$$

the disorder-averaged probability that two i.i.d. Boltzmann samples (at the same disorder) have overlap $q$. Replica gymnastics yield the elegant formula

$$
\\boxed{\\,P(q) \\;=\\; \\lim_{n\\to 0}\\,\\frac{1}{n(n-1)}\\sum_{a\\neq b}\\delta\\big[q - Q_{ab}^*\\big]\\,}
$$

where $Q_{ab}^*$ is the saddle-point overlap matrix. So $P(q)$ is literally the **histogram of the off-diagonal entries** of $Q^*$.

- **Paramagnet:** all $Q_{ab}^* = 0$, so $P(q) = \\delta(q)$.
- **Replica-symmetric (RS) spin glass:** all $Q_{ab}^* = q_{\\rm EA}$ for $a\\neq b$, so $P(q) = \\delta(q - q_{\\rm EA})$. Here $q_{\\rm EA}$ is the **Edwards–Anderson order parameter**: the typical overlap between two Boltzmann samples within the same "valley".
- **Replica-symmetry-broken (RSB) phase (Parisi):** $Q_{ab}^*$ takes multiple values; $P(q)$ becomes a *continuous* distribution. This signals the existence of *many* thermodynamic states — the famous "rugged free-energy landscape" of glasses.

We will tackle these regimes in turn over the next two lectures.

---

## 8. Setup for next time

We have now derived the central replica identity

$$
\\overline{\\ln Z} = \\lim_{n\\to 0}\\frac{1}{n}\\Big[N \\cdot \\mathop{\\mathrm{ext}}_{Q_{ab}}\\mathcal{S}[Q] - 1\\Big] \\cdot (\\text{prefactor})
$$

with

$$
\\mathcal{S}[Q] = -\\tfrac{\\beta^2}{4}\\sum_{a\\neq b} Q_{ab}^2 + \\ln \\sum_{\\vec s} e^{\\frac{\\beta^2}{2}\\sum_{a\\neq b} Q_{ab} s^a s^b} + \\tfrac{n\\beta^2}{4}.
$$

(Notation differs slightly between books; the structure is the same.) Next time we will take the $n\\to 0$ limit, *assume* the simplest possible form for $Q_{ab}$ — replica symmetry: $Q_{ab} = q$ for all $a\\neq b$ — and solve the resulting saddle-point equations to get the **replica-symmetric solution** of the SK model.

We'll discover that this solution is *thermodynamically inconsistent* below a certain temperature ($T_c = 1$): the entropy goes negative. This is the famous "instability" that tells us replica symmetry must be broken. That breakthrough — Parisi's RSB scheme — is one of the deepest ideas in 20th-century statistical mechanics, and it earned him a Nobel Prize.

---

## 9. Summary

| Concept | Object |
|---|---|
| Quenched free energy | $f = -\\tfrac{1}{\\beta N}\\overline{\\ln Z}$ |
| Replica identity | $\\ln Z = \\lim_{n\\to 0}(Z^n-1)/n$ |
| Replicated partition function | $\\overline{Z^n}$ — same disorder, $n$ copies of spins |
| Overlap matrix | $Q_{ab} = \\tfrac{1}{N}\\sum_i s_i^a s_i^b$ |
| HS / saddle-point | Convert sum over spins to integral over $Q$, take $\\max_Q$ |
| Order parameter for SG | $Q_{ab}$ (or its distribution $P(q)$) |

The take-home: in disordered systems, the relevant order parameter is no longer the magnetization but the **overlap between replicas**. Replicas are a mathematical fiction, but their overlaps measure something real about the structure of the equilibrium measure.

---
`,J7=`# Topic 7 — The Replica-Symmetric Solution of the Spin Glass

> *Last lecture we set up the replica calculation for the SK / planted spin-glass model and reduced everything to a saddle point in the overlap matrix $Q_{ab}$. Today we make the simplest possible ansatz — replica symmetry — and solve the saddle-point equations. The reward: a closed-form free energy, a phase diagram with paramagnet, ferromagnet, and spin-glass phases, and a stunning connection to **Bayesian inference**.*

---

## 1. The setup (recap and refinement)

Take the (planted) SK model with both random and ferromagnetic couplings:

$$
E(\\vec s) = -\\sum_{i<j} J_{ij}\\, s_i s_j,\\qquad J_{ij} \\sim \\mathcal{N}\\Big(\\tfrac{\\lambda}{N}\\,s_i^0 s_j^0,\\;\\tfrac{1}{N}\\Big),
$$

i.i.d. for $i<j$, with $\\vec s^{\\,0}\\in\\{\\pm 1\\}^N$ a fixed *planted* ground state. The parameter $\\lambda$ controls how much "ferromagnetic signal" we plant on top of the random Gaussian noise.

Two physical perspectives on the same model:

- **Spin-glass perspective.** $\\lambda = 0$ is pure SK; $\\lambda > 0$ tilts the disorder toward a hidden magnetization pattern $\\vec s^{\\,0}$.
- **Inference perspective.** Imagine you observe noisy pairwise measurements $J_{ij}$ of $s_i^0 s_j^0$. The Boltzmann distribution at $\\beta = \\lambda$ is *exactly the posterior* $P(\\vec s\\mid \\{J\\}, \\vec s^{\\,0})$ in this Bayesian inference problem. So spin-glass theory directly tells us how well a Bayes-optimal estimator can recover $\\vec s^{\\,0}$ as a function of signal-to-noise ratio $\\lambda$.

The **disorder-averaged replicated partition function** is (carrying through the planted variant of Topic 6):

$$
\\overline{Z^n}_{E, \\vec s^{\\,0}} = \\sum_{\\{s^a\\}} \\exp\\!\\left[-N\\, \\mathcal{E}[Q] + N\\,\\hat m\\cdot m + \\dots\\right],
$$

with the overlap matrix and overlap-with-plant defined as

$$
Q_{ab} = \\frac{1}{N}\\sum_i s_i^a s_i^b\\;\\;(a<b),\\qquad m_a = \\frac{1}{N}\\sum_i s_i^a s_i^0.
$$

There are now two kinds of order parameters: the **inter-replica overlaps** $Q_{ab}$, and the **overlaps with the planted signal** $m_a$.

---

## 2. The replica-symmetric ansatz

We *assume* replica symmetry: all replicas are equivalent. Concretely,

$$
\\boxed{\\,m_a = m\\;\\text{(all }a),\\qquad Q_{ab} = q\\;\\text{(all }a\\neq b)\\,}
$$

just two scalars to track, $m$ and $q$. Similarly $\\hat m_a = \\hat m,\\ \\hat Q_{ab} = \\hat q$.

Why is this reasonable? Because the disorder-averaged measure has a permutation symmetry across replicas. If the system is in a single-state ("ergodic") phase, the order parameter inherits that symmetry. As we'll see, this assumption *fails* in part of the phase diagram (the spin-glass phase below $T_c$), and that failure is what motivates Parisi's replica-symmetry breaking. But the RS solution is an excellent first approximation and exact in some regions.

### 2.1 The energy and entropy pieces

Carrying over the work of Topic 6 with the planted modification, the saddle-point exponent factorizes as

$$
N\\,\\Phi_{\\rm RS}(m, q;\\hat m, \\hat q) = N\\Big[-\\mathcal E_{\\rm RS} + \\mathcal I_{\\rm RS}\\Big],
$$

with two pieces. The "energy" piece (from the disorder average and HS) under the RS ansatz becomes

$$
\\mathcal E_{\\rm RS} = \\frac{\\beta\\lambda}{2}\\,n m^2 + \\frac{\\beta^2}{4}\\Big[n + n(n-1)\\,q^2\\Big] \\;\\;\\xrightarrow[n\\to 0]{}\\;\\; n\\Big[-\\tfrac{\\beta^2}{4} - \\tfrac{\\beta\\lambda}{2}m^2 + \\tfrac{\\beta^2}{4}q^2\\Big].
$$

(Note that $n(n-1)\\to -n$ as $n\\to 0$, which flips a sign — this is the crucial replica feature.)

The "entropy" piece $\\mathcal I_{\\rm RS}$ comes from the Hubbard–Stratonovich integral over the auxiliary $\\hat Q,\\hat m$, after which all $N$ sites decouple.

---

## 3. Hubbard–Stratonovich in RS form

Here's the trick that makes the calculation tractable. The hard term in the replicated single-site sum is $\\sum_{a<b}\\hat q\\, s^a s^b$, which couples replicas. We **decouple** them by writing

$$
\\frac{\\hat q}{2}\\Big(\\sum_a s^a\\Big)^2 = \\frac{\\hat q}{2}\\Big[\\sum_a (s^a)^2 + \\sum_{a\\neq b}s^a s^b\\Big] = \\frac{n\\hat q}{2} + \\hat q\\sum_{a<b}s^a s^b.
$$

Now apply HS:

$$
\\exp\\!\\Big[\\frac{\\hat q}{2}\\Big(\\sum_a s^a\\Big)^2\\Big] = \\int Dz\\;\\exp\\!\\Big[\\sqrt{\\hat q}\\, z\\sum_a s^a\\Big],\\qquad Dz \\equiv \\frac{dz}{\\sqrt{2\\pi}}\\,e^{-z^2/2}.
$$

This is the magic: the auxiliary Gaussian field $z$ couples *linearly* to each replica spin, so the replicas decouple **at fixed $z$**. Combining with the planted-overlap term $\\beta\\lambda\\, m\\, s^0\\sum_a s^a$, we get a **single-spin partition function in a random field**:

$$
Z_1(z) = \\sum_{s=\\pm 1}\\exp\\!\\Big[\\beta\\big(\\lambda m\\, s^0 + \\sqrt{\\hat q}\\,z\\big)\\,s\\Big] = 2\\cosh\\!\\Big[\\beta(\\lambda m\\, s^0 + \\sqrt{\\hat q}\\, z)\\Big].
$$

Then the entropy piece, in the $n\\to 0$ limit, reduces to

$$
\\mathcal I_{\\rm RS} = \\int Dz\\;\\ln\\!\\Big[2\\cosh\\beta(\\lambda m + \\sqrt{\\hat q}\\,z)\\Big] - \\tfrac{\\hat q}{2} - \\dots,
$$

(absorbing $s^0$ which is $\\pm 1$ and symmetric). Note: the integral over $z$ is just an *expectation over a standard Gaussian*. So the calculation has reduced to a problem we can do in closed form: a single Ising spin in an external field that has both a deterministic part ($\\lambda m$) and a Gaussian random part ($\\sqrt{\\hat q}\\,z$).

---

## 4. The replica-symmetric free energy

After plugging everything back in and carefully tracking the prefactors of $n$, the disorder-averaged free energy is

$$
\\boxed{\\,
-\\beta f_{\\rm RS}(m,q;\\hat m,\\hat q) \\;=\\; \\frac{\\beta^2}{4}(1-q)^2 + \\frac{\\beta\\lambda}{2}m^2 + \\dots + \\int Dz\\,\\ln 2\\cosh\\beta(\\lambda m + \\sqrt{\\hat q}\\,z)
\\,}
$$

(There are also $\\hat m\\, m$ and $-\\tfrac{1}{2}\\hat q\\, q$ Legendre terms that get extremized; standard manipulation eliminates the hatted variables, leaving a function of $(m,q)$.)

The crucial physical content is encoded in the **saddle-point equations**:

$$
\\frac{\\partial(-\\beta f_{\\rm RS})}{\\partial m} = 0,\\qquad \\frac{\\partial(-\\beta f_{\\rm RS})}{\\partial q} = 0.
$$

After algebra one finds

$$
\\boxed{\\,m \\;=\\; \\int Dz\\,\\tanh\\!\\big[\\beta(\\lambda m + \\sqrt{q}\\,z)\\big]\\,}
$$

$$
\\boxed{\\,q \\;=\\; \\int Dz\\,\\tanh^2\\!\\big[\\beta(\\lambda m + \\sqrt{q}\\,z)\\big]\\,}
$$

These are the **RS self-consistency equations** for the SK / planted-SK model.

---

## 5. Physical reading: a single spin in a random field

The RS calculation has dressed up a beautiful physical picture: every spin in the macroscopic system behaves like a single spin sitting in a random local field

$$
h_{\\rm eff} = \\lambda m + \\sqrt{q}\\,z, \\qquad z \\sim \\mathcal{N}(0,1).
$$

- $\\lambda m$ is the *deterministic* mean field from the planted ferromagnetic signal.
- $\\sqrt{q}\\,z$ is the *random* field due to all the other spins, with variance $q$.

For one realization of $z$, the spin's mean is $\\langle s\\rangle_z = \\tanh\\beta h_{\\rm eff}$. Averaging over $z$:

- $m = \\mathbb{E}_z\\langle s\\rangle_z$ — the average magnetization. This must self-consistently equal the seed $m$.
- $q = \\mathbb{E}_z\\langle s\\rangle_z^{\\,2}$ — the disorder-averaged squared local magnetization. This is the **Edwards–Anderson order parameter**, measuring how "frozen" the spins are. If $q>0$ each spin has a definite preference $\\langle s_i\\rangle\\neq 0$, even when the global average $m=0$.

So the RS solution is a *self-consistent* random-field problem: the random fields acting on each spin must be consistent with the magnetizations they produce.

---

## 6. Phase diagram

The two coupled equations admit several solution branches:

**(a) Paramagnet (PM):** $m=0,\\ q=0$. Plug in $\\tanh(0)=0$: both equations are satisfied. This is always a solution, but it's only stable at high temperature ($\\beta < 1$).

**(b) Spin glass (SG):** $m=0,\\ q>0$. Set $m=0$ in the second equation:
$$
q = \\int Dz\\,\\tanh^2(\\beta\\sqrt{q}\\,z).
$$
Linearizing for small $q$, $\\tanh x\\approx x$ gives $q\\approx \\beta^2 q$, so $q$ becomes nonzero when $\\beta > 1$, i.e., **$T_c = 1$**. Below $T_c$, the spins freeze locally ($q>0$) but with no global magnetization.

**(c) Ferromagnet (FM):** $m\\neq 0,\\ q\\neq 0$. Both equations have nontrivial solutions when $\\lambda$ is large enough (strong planted signal). Specifically, from the $m$ equation in the small-$q$ limit, $m\\approx \\beta\\lambda m$ goes critical at $\\beta\\lambda = 1$.

The phase diagram in the $(\\lambda, T=1/\\beta)$ plane:

\`\`\`
        T = 1/β
          │
       PM │  (m=0, q=0)
          │ ─────────────  <-- T_c(λ=0) = 1, SG transition
       SG │     PM/FM       
       (m=0)│ ── PM ───── 
       q>0  │     │ FM  (m, q both ≠0)
          │     │
          └──────┴─────────  λ
                 λ_c
\`\`\`

There is a critical signal strength $\\lambda_c$ at low $T$ above which the FM phase wins over the SG phase: this is the **information-theoretic transition** where you can recover $\\vec s^{\\,0}$ better than chance.

---

## 7. The Bayesian-inference reading

The most beautiful payoff of the RS solution is its meaning as a **Bayesian inference algorithm**. In the inference picture, $\\vec s^{\\,0}$ is a latent variable to estimate from observations $\\{J_{ij}\\}$, and the **Bayes-optimal estimator** is the posterior mean

$$
\\hat{\\vec s}_B = \\int d\\vec s\\,\\vec s\\,p_\\beta(\\vec s\\mid \\{J\\}, \\vec s^0) \\quad \\text{at } \\beta = \\lambda \\text{ (Nishimori line)}.
$$

The mean-square error of the Bayes estimator on coordinate $i$ is

$$
\\mathrm{MSE}_i = (s_i^0 - \\hat s_{B,i})^2 = 1 - 2\\hat s_{B,i}s_i^0 + \\hat s_{B,i}^2 = 1 - \\langle s_i\\rangle s_i^0 + \\dots
$$

Averaging over disorder, the natural quantity is $1 - m$ (correlation with the truth) and $1 - q^2/m^2$ (related to localization in the wrong direction). On the **Nishimori line $\\beta = \\lambda$**, the spin-glass $q$ collapses to $q = m^2$, dramatically simplifying things:

$$
\\boxed{\\,q^* = m^{*2}\\quad \\text{on Nishimori line}\\,}
$$

This is the *Nishimori identity*: the disorder-averaged squared local magnetization equals the squared overlap with the planted state. Physically: the posterior, when measured in the right way, has no spin-glass component — only ferromagnetic correlation with the truth.

The phase boundary $\\lambda_c$ becomes the **detectability threshold**: below $\\lambda_c$, no estimator (no matter how clever) can do better than chance on this inference problem. There is a phase transition in the *performance of Bayesian inference itself*. This is the phenomenon studied across community detection, planted SAT, dictionary learning, etc.

---

## 8. Where RS fails — preview

The RS solution is *thermodynamically sick* in part of the SG phase. One sign: the entropy $S = -\\partial F/\\partial T$ becomes **negative** at low temperature, which is physically impossible for a discrete-spin model.

The cure is **replica symmetry breaking** (RSB), invented by Parisi. Instead of all $Q_{ab}$ being equal, one allows them to take a hierarchical structure (ultrametric $\\to$ infinite-step Parisi RSB). This corresponds physically to a *complex free-energy landscape with many valleys* (states), and is the right description in the SG phase.

We won't develop full Parisi RSB here; instead the next lecture introduces an alternative, more physically transparent technique — the **cavity method** — which leads to the same conclusions through a direct iteration on individual spins instead of replicas.

---

## 9. Summary

| Step | Result |
|---|---|
| RS ansatz | $Q_{ab} = q,\\ m_a = m$ (just two scalars) |
| HS decoupling | Each spin sees random field $\\lambda m + \\sqrt q\\, z$ |
| Self-consistency | $m = \\int Dz\\,\\tanh\\beta(\\lambda m + \\sqrt q z)$, $q = \\int Dz\\,\\tanh^2(\\dots)$ |
| Phases | PM ($m=q=0$), SG ($m=0,\\,q>0$), FM ($m,q>0$) |
| Critical points | $T_c = 1$ at $\\lambda=0$; FM threshold at $\\beta\\lambda \\sim 1$ |
| Inference | Boltzmann at $\\beta=\\lambda$ = Bayes posterior; phase boundary = detection threshold |

We have a complete, beautiful theory — but with an Achilles heel below $T_c$ in the SG phase. This sets the stage for either **RSB** or the **cavity method**, the latter being our path forward.

---
`,X7=`# Topic 8 — The Cavity Method for Spin Glasses

> *Replicas are powerful but mysterious — the $n\\to 0$ limit feels like a magic trick. Today we develop an alternative method that reaches the same answers through a completely physical argument: the **cavity method**. The idea is beautiful and goes back to Bethe and to Mézard–Parisi–Virasoro: add one new spin to a system, ask what the field on it looks like, and demand self-consistency.*

---

## 1. Big-picture recipe

Here is the cavity method in seven lines, before we do anything:

1. Take a system of $N$ spins $\\vec s$.
2. Add a new $(N{+}1)$-th spin $s_0$ and couple it to the rest.
3. Inside the **cavity system** of $N$ original spins (which doesn't yet know about $s_0$), think about how each spin behaves.
4. The new spin $s_0$ feels a **cavity field** $h_0$, a function of $\\vec s$ in the cavity system.
5. Compute the distribution $P(h_0)$ over disorder samples.
6. Demand **self-consistency**: the statistics of the spins in the system before and after adding $s_0$ should agree.

This will give us self-consistent equations for $m$ and $q$, the same ones we got from replicas, but without ever taking $n\\to 0$.

---

## 2. Setup: the planted SK model again

Consider $N+1$ Ising spins with energy

$$
E_{N+1}(\\vec s) = -\\frac{1}{2N}\\sum_{k,\\ell = 1}^{N+1}J_{k\\ell}\\,s_k s_\\ell,\\qquad
J_{k\\ell}\\sim \\mathcal{N}\\!\\Big(\\tfrac{\\lambda}{N}\\,s_k^0 s_\\ell^0,\\;\\tfrac{1}{N}\\Big),
$$

i.i.d. for $k<\\ell$, with planted ground state $\\vec s^{\\,0}$ as in Topic 7.

Single out spin $i$ (which we'll think of as the "added" spin):

$$
E_{N+1}(\\vec s) = -\\sum_{k<\\ell;\\, k,\\ell\\neq i}\\frac{1}{2N}J_{k\\ell}s_k s_\\ell - s_i \\underbrace{\\Big[\\sum_{k\\neq i}\\frac{1}{N}J_{ki}s_k\\Big]}_{\\equiv h_i}\\;.
$$

So
$$
\\boxed{\\,E_{N+1}(\\vec s) = E_{\\setminus i}(\\vec s) - s_i\\, h_i\\,}
$$

where $E_{\\setminus i}$ is the energy of the **cavity system** (the $N$ spins with $i$ removed and all couplings $J_{kl}$ for $k,\\ell\\neq i$), and $h_i = \\sum_{k\\neq i}\\tfrac{1}{N}J_{ki}\\,s_k$ is the **cavity field** acting on $i$.

The trick of the cavity method is that the cavity-system measure does **not** know about $i$. So $\\{s_k\\}_{k\\neq i}$ behave under the cavity measure as if there were no spin $i$ at all. In particular, the random couplings $J_{ki}$ are *independent* of $\\vec s$ in the cavity system. This independence is the engine.

---

## 3. Distribution of the cavity field

Write
$$
h_i = \\lambda\\,\\frac{1}{N}\\sum_{k\\neq i}s_k^0 s_k + \\sum_{k\\neq i}E_{ki}\\,s_k,
$$

where $E_{ki} \\equiv J_{ki} - \\tfrac{\\lambda}{N}s_k^0 s_i^0 \\sim \\mathcal{N}(0,1/N)$ is the random part of the coupling, and we used $J_{ki}\\sim \\tfrac{\\lambda}{N}s_k^0s_i^0 + E_{ki}$.

**Step 1 — The mean:** assume the cavity-system magnetization converges,
$$
M \\;\\equiv\\; \\frac{1}{N}\\sum_{k\\neq i}\\langle s_k\\rangle_{\\rm cav} \\xrightarrow[N\\to\\infty]{} \\lambda m,
$$
where $m$ will turn out to be the per-spin overlap with the ground truth in the full system. (We'll determine $m$ self-consistently below.)

So
$$
\\langle h_i\\rangle_{\\rm cav} = \\lambda m\\, s_i^0 + \\sum_{k\\neq i}E_{ki}\\langle s_k\\rangle_{\\rm cav}.
$$

The first term is deterministic; the second is a sum of $N-1$ i.i.d. Gaussian random variables (the $E_{ki}$), with weights $\\langle s_k\\rangle_{\\rm cav}$. Its mean is zero, its variance is

$$
\\mathrm{Var}\\Big[\\sum_{k}E_{ki}\\langle s_k\\rangle_{\\rm cav}\\Big] = \\sum_k \\tfrac{1}{N}\\langle s_k\\rangle_{\\rm cav}^2 \\;\\xrightarrow[N\\to\\infty]{}\\; q,
$$

where we have defined the **Edwards-Anderson order parameter**

$$
q \\;\\equiv\\; \\frac{1}{N}\\sum_k \\langle s_k\\rangle^2.
$$

**Step 2 — Concentration:** by central limit, the cavity field on spin $i$ at large $N$ is Gaussian:

$$
\\boxed{\\,h_i \\;\\sim\\; \\mathcal{N}\\!\\big(\\lambda m\\, s_i^0,\\; q\\big)\\,}
$$

Or equivalently $h_i = \\lambda m\\, s_i^0 + \\sqrt{q}\\,z$ with $z\\sim\\mathcal{N}(0,1)$ standard normal.

---

## 4. Self-consistency: the $m$ and $q$ equations

Now use the Boltzmann formula for spin $i$ given a cavity field $h_i$:
$$
\\langle s_i\\rangle_{h_i} = \\tanh(\\beta h_i).
$$

Average over the **distribution** of cavity fields just derived:

$$
\\langle s_i\\rangle = \\int Dz\\,\\tanh\\beta(\\lambda m\\, s_i^0 + \\sqrt q\\, z).
$$

Now demand self-consistency: the disorder-averaged magnetization along the planted state in the new system should equal $m$ (i.e., the property that defined the cavity-field mean above):

$$
m = \\overline{s_i^0 \\langle s_i\\rangle} = \\int Dz\\,\\tanh\\beta(\\lambda m + \\sqrt q\\, z).
$$

(Here $s_i^0 = \\pm 1$ and the symmetry of $\\tanh$ makes the planted sign drop out as expected.) Similarly,

$$
q = \\overline{\\langle s_i\\rangle^2} = \\int Dz\\,\\tanh^2\\beta(\\lambda m + \\sqrt q\\, z).
$$

So we recover **exactly the replica-symmetric equations** from Topic 7:

$$
\\boxed{\\,m = \\int Dz\\,\\tanh\\beta(\\lambda m + \\sqrt q\\, z),\\qquad q = \\int Dz\\,\\tanh^2\\beta(\\lambda m + \\sqrt q\\, z)\\,}
$$

But this time we got there by adding *one spin at a time* and demanding *that the system reproduces itself*. No replica trick, no $n\\to 0$ limit — pure physics.

---

## 5. Why the cavity argument actually works

Let me dwell on the logical structure, because it's beautiful and easy to miss.

**Independence is the engine.** When you add the new spin $i$, the couplings $J_{ki}$ are *fresh random variables* not present in the cavity system. Therefore $\\{J_{ki}\\}_k$ are statistically independent of $\\{\\langle s_k\\rangle_{\\rm cav}\\}_k$. That independence is what lets us apply the central limit theorem to $\\sum_k E_{ki}\\langle s_k\\rangle_{\\rm cav}$.

**Concentration over disorder gives a Gaussian field.** A sum of $N$ i.i.d. small random variables (CLT) gives a Gaussian, provided the "weights" $\\langle s_k\\rangle_{\\rm cav}$ have second moment converging to a finite $q$. The fact that the variance of $h_i$ equals the EA parameter $q$ — not $1$, not $0$ — is the key quantitative content.

**Self-consistency closes the system.** $m$ and $q$ are defined in terms of cavity statistics; the cavity statistics depend on $m$ and $q$. Demanding consistency gives exactly the right number of equations.

**Replica symmetry is *implicit*.** When we wrote the variance of the cavity field as a *single* number $q$, we assumed that the histogram $\\{\\langle s_k\\rangle\\}_k$ converges to a unique Gaussian-with-second-moment-$q$. That's another way of saying replica symmetry holds: the system is in a single thermodynamic state. If RS breaks (the SG phase deep inside), the histogram of $\\langle s_k\\rangle$ is no longer described by a single $q$ — it has a non-trivial distribution. Cavity then needs to be extended (1RSB cavity, distributions of fields, etc.).

---

## 6. The cavity intuition in one picture

\`\`\`
       N-spin cavity system   →   add one spin s_i with new couplings J_ki
       ───────────────────         ─────────────────────────────
       Each cavity spin has        New spin sees random field
       a magnetization ⟨s_k⟩       h_i = Σ_k (1/N) J_ki ⟨s_k⟩
                                    ~ N(λm·s_i^0, q)  by CLT
                                   ↓
                                   ⟨s_i⟩ = ∫Dz tanh β(λm + √q z)
                                   ↓
                                   self-consistency:
                                   m = ⟨s_i⟩,  q = ⟨s_i⟩²
\`\`\`

Each spin sees a **mean field** (first moment of $h_i$, $= \\lambda m\\, s_i^0$) plus a **Gaussian cavity noise** (second moment $\\sqrt q$). This is the same single-spin-in-random-field picture we found in replica theory — but here it has a clear physical origin: it is a literal cavity field due to the rest of the system.

---

## 7. The cavity method outside spin glasses

The cavity argument has applications far beyond SK. Three quick examples:

**Bethe lattices and tree graphs.** On a tree, the cavity method is *exact*: removing a node really does decouple branches. The cavity equations there are called **belief propagation** in machine learning — exactly the same equations.

**Sparse random graphs.** For models on graphs of finite degree (e.g., diluted spin glass, $K$-SAT), one can do cavity locally: the field on spin $i$ is a sum over its $K$ neighbors of contributions that are *also* cavity fields, giving recursive equations on a distribution of fields ("survey propagation" in extreme cases).

**Random matrices.** The cavity method applies to random matrix theory (Wigner, Wishart): we'll see this in Topics 11 and 12.

In all these cases, the underlying logic is the same: add a degree of freedom, exploit the independence of newly added couplings, take a CLT or distributional limit, demand self-consistency.

---

## 8. Free energy from the cavity method

So far we extracted $m$ and $q$, but not the free energy itself. Standard trick: the free energy difference upon adding one spin is

$$
\\Delta F \\;=\\; F_{N+1} - F_N \\;=\\; -\\tfrac{1}{\\beta}\\overline{\\ln\\langle e^{\\beta s_0 h_0}\\rangle_{\\rm cav}} \\;=\\; -\\tfrac{1}{\\beta}\\int \\mathcal{D}h\\, P(h)\\, \\ln(2\\cosh\\beta h),
$$

where $P(h)$ is the distribution of the cavity field $h_0$ on the new spin. With $h \\sim \\mathcal{N}(\\lambda m, q)$:

$$
\\Delta F = -\\tfrac{1}{\\beta}\\int Dz\\, \\ln 2\\cosh\\beta(\\lambda m + \\sqrt q\\, z) + \\text{contributions from the new couplings}.
$$

There is also a "**bond term**" coming from the new $N$ couplings $J_{ki}$ which were not in the cavity system. Carefully tracking these gives the free energy

$$
-\\beta f \\;=\\; \\frac{\\beta^2}{4}(1-q)^2 + \\tfrac{\\beta\\lambda}{2}m^2 + \\int Dz\\,\\ln 2\\cosh\\beta(\\lambda m + \\sqrt q\\, z),
$$

identical to the RS free energy from Topic 7.

The cavity construction therefore gives a *constructive*, replica-free derivation of the same results — and provides a clear conceptual lens: the system is a self-consistent ensemble of single spins in random fields.

---

## 9. Summary

| Replica method (T6, T7) | Cavity method (T8) |
|---|---|
| Average $Z^n$ over disorder | Add one spin to the system |
| Saddle-point in $Q_{ab}$ | CLT for the cavity field $h_i$ |
| Replica symmetric ansatz $Q_{ab}=q$ | Single-state assumption; $h_i\\sim\\mathcal{N}(\\lambda m,q)$ |
| $n\\to 0$ analytic continuation | No analytic continuations |
| Self-consistency from saddle-point | Self-consistency from $\\langle s_i\\rangle = m$ |

Both methods give the same RS equations:

$$
m = \\int Dz\\,\\tanh\\beta(\\lambda m + \\sqrt q\\, z),\\qquad q = \\int Dz\\,\\tanh^2\\beta(\\lambda m + \\sqrt q\\, z).
$$

The cavity method is more physically transparent and generalizes beautifully — it underpins belief propagation, message passing, and many of the most powerful modern algorithms in inference and statistical physics.

In the next lecture, we shift gears entirely: we leave spin glasses for **random matrix theory**. The replica and cavity methods we have developed will return as our main tools for computing eigenvalue densities of large random matrices.

---
`,Y7=`# Topic 9 — Introduction to Random Matrix Theory

> *We change tracks. Random matrix theory (RMT) studies the spectra of large matrices with random entries. The central question — what is the distribution of eigenvalues? — is rich, deep, and surprisingly well-suited to the techniques we developed for spin glasses. This lecture introduces the **Wigner matrix**, the **empirical spectral density**, and the **Stieltjes transform**, with a beautiful detour through 2D electrostatics.*

---

## 1. Why study random matrices?

Random matrices show up everywhere: nuclear energy levels (Wigner's original motivation), quantum chaos, financial covariance matrices, neural network weights, principal component analysis, sparse recovery, etc. The reason is universality: many large random matrices have eigenvalue distributions that are **insensitive** to the details of the entry distribution and obey a few canonical laws — the Wigner semicircle, Marchenko–Pastur, etc.

Today we set up the basic objects and a remarkable mathematical bridge: the same self-consistency methods we just used for spin glasses can be used to derive these spectral laws.

---

## 2. The Wigner matrix

Let's start with the simplest model. A **Wigner matrix** is an $N\\times N$ symmetric matrix $J$ with Gaussian entries:

$$
J_{ij} \\sim \\begin{cases}\\mathcal{N}(0,\\;2\\sigma^2/N) & i = j,\\\\ \\mathcal{N}(0,\\;\\sigma^2/N) & i\\neq j,\\end{cases}
$$

with $J_{ji} = J_{ij}$ (otherwise independent). Take $\\sigma=1$ for simplicity. The factor $1/N$ in the variance keeps the spectrum bounded as $N\\to \\infty$.

The probability density is

$$
P(J) \\;\\propto\\; \\exp\\!\\Big[-\\frac{N}{4}\\sum_{i,j}J_{ij}^2\\Big] \\;=\\; \\exp\\!\\Big[-\\frac{N}{4}\\,\\mathrm{Tr}\\,J^2\\Big].
$$

This is the **Gaussian Orthogonal Ensemble (GOE)**: invariant under $J \\to OJO^T$ for any orthogonal $O$, since $\\mathrm{Tr}\\,J^2$ is a basis-invariant.

### 2.1 The empirical spectral density

For each realization of $J$, diagonalize: eigenvalues $\\lambda_1, \\dots, \\lambda_N$. Define the **empirical spectral density**

$$
\\boxed{\\,g_J(\\lambda) \\;\\equiv\\; \\frac{1}{N}\\sum_{i=1}^N \\delta(\\lambda - \\lambda_i)\\,}
$$

This is the histogram of eigenvalues. For a single $J$, it's a sum of $N$ delta functions — a discrete measure. For *typical* $J$ at large $N$, it converges (in distribution) to a smooth, deterministic limit:

$$
g(\\lambda) = \\lim_{N\\to\\infty}\\,\\overline{g_J(\\lambda)}\\,.
$$

For Wigner matrices, this limit is the famous **semicircle law**

$$
g(\\lambda) = \\frac{1}{2\\pi}\\sqrt{4 - \\lambda^2}, \\qquad |\\lambda| \\leq 2.
$$

Our goal in subsequent lectures (Topics 10, 11) is to derive this from scratch using replicas and cavity. Today we set up the tools.

---

## 3. The Stieltjes transform

Working with $g_J(\\lambda)$ directly is awkward because it's a sum of deltas. The *clever* thing is to compute its **Stieltjes transform**:

$$
\\boxed{\\,\\varepsilon_J(z) \\;\\equiv\\; \\frac{1}{N}\\,\\mathrm{Tr}\\big[\\,(zI - J)^{-1}\\big] \\;=\\; \\frac{1}{N}\\sum_i \\frac{1}{z - \\lambda_i}\\,}
$$

defined for $z\\in\\mathbb{C}\\setminus\\mathbb{R}$ (where the matrix $zI - J$ is invertible).

### 3.1 Why is this useful?

Three reasons:

1. **Analytic.** $\\varepsilon_J(z)$ is analytic in the upper and lower half-planes, with simple poles at $z = \\lambda_i$ on the real axis.
2. **Invertible.** From $\\varepsilon_J$ you can recover $g_J$ via the **Sokhotski–Plemelj inversion formula** (below).
3. **Computable.** Averaging $\\varepsilon_J$ over disorder is much easier than averaging $g_J$.

### 3.2 Recovering $g$ from $\\varepsilon$

For a single point pole $1/(z-\\lambda_1)$, write $z = x + i\\eta$:

$$
\\frac{1}{z - \\lambda_1} = \\frac{x - \\lambda_1}{(x-\\lambda_1)^2 + \\eta^2} - i\\,\\frac{\\eta}{(x-\\lambda_1)^2 + \\eta^2}.
$$

The imaginary part is a **Lorentzian** of width $\\eta$ centered at $\\lambda_1$. As $\\eta\\to 0^+$:

$$
\\lim_{\\eta \\to 0^+}\\frac{1}{\\pi}\\,\\frac{\\eta}{(x-\\lambda_1)^2 + \\eta^2} = \\delta(x - \\lambda_1).
$$

So

$$
\\boxed{\\,g_J(\\lambda) \\;=\\; \\lim_{\\eta\\to 0^+}\\,\\frac{1}{\\pi}\\,\\mathrm{Im}\\,\\varepsilon_J(\\lambda - i\\eta)\\,}
$$

(Sign conventions vary; some texts use $\\lambda + i\\eta$ and $-\\frac{1}{\\pi}\\mathrm{Im}$. The point is the same.) Compute the Stieltjes transform, take its imaginary part on the real axis, and you have the spectral density.

---

## 4. Beautiful detour: $\\varepsilon(z)$ as a 2D electric field

Here's a deeply geometric way to think about $\\varepsilon(z)$. Think of $z = x+iy$ as a point in the plane, and split

$$
\\varepsilon_J(z) = \\varepsilon_x(x,y) - i\\,\\varepsilon_y(x,y).
$$

The two real components $(\\varepsilon_x, \\varepsilon_y)$ form a 2D vector field in $\\mathbb{R}^2$.

Since $\\varepsilon_J(z)$ is **analytic** away from poles, it satisfies the **Cauchy–Riemann equations**

$$
\\frac{\\partial \\varepsilon_x}{\\partial x} = -\\frac{\\partial \\varepsilon_y}{\\partial y},\\qquad
\\frac{\\partial \\varepsilon_x}{\\partial y} = \\frac{\\partial \\varepsilon_y}{\\partial x},
$$

which are equivalent to

$$
\\nabla\\cdot(\\varepsilon_x, \\varepsilon_y) = 0,\\qquad \\nabla\\times (\\varepsilon_x, \\varepsilon_y) = 0.
$$

Divergence-free *and* curl-free. **Like an electric field in vacuum**, in 2D.

### 4.1 Single eigenvalue $=$ point charge

Look at a single pole $\\varepsilon(z) = 1/(z - \\lambda_1)$. Compute the contour integral around $\\lambda_1$:

$$
\\oint_C \\vec\\varepsilon\\cdot d\\vec \\ell^\\perp \\;=\\; \\int_C \\big(\\varepsilon_x \\cos\\theta + \\varepsilon_y\\sin\\theta\\big)\\,d\\ell.
$$

Direct calculation gives $(2\\pi r)\\cdot (1/r) = 2\\pi$, regardless of the contour. So by the divergence theorem,

$$
\\nabla\\cdot\\vec\\varepsilon = 2\\pi\\,\\delta^{(2)}(z - \\lambda_1).
$$

This is **Gauss's law** in 2D: $\\varepsilon(z) = 1/(z - \\lambda_1)$ is the field of a point charge of strength $2\\pi$ at $z = \\lambda_1$.

### 4.2 Stieltjes transform $=$ Coulomb gas

Putting it together, for a matrix with eigenvalues $\\{\\lambda_i\\}$:

$$
\\varepsilon_J(z) = \\frac{1}{N}\\sum_i \\frac{1}{z - \\lambda_i} \\;\\;\\longleftrightarrow\\;\\; \\text{2D field of charges at }\\lambda_i\\text{ on the real axis, strengths }2\\pi/N.
$$

The empirical density $g_J(\\lambda)$ is the *charge density* (per unit length) on the real axis. This electrostatic picture is the deepest intuition behind Stieltjes transforms.

### 4.3 Sokhotski–Plemelj as the field "just above" the line

Sokhotski–Plemelj says the eigenvalue density at $\\lambda$ is the normal component of the electric field just above the real axis at $\\lambda$. As $\\eta\\to 0$, you get a delta function in the perpendicular field at each charge — exactly $g_J(\\lambda)$. Beautiful.

---

## 5. Connecting to free energy

We want to compute $\\overline{\\varepsilon_J(z)}$. Here's the trick: relate it to a determinant. Note that

$$
\\varepsilon_J(z) = \\frac{1}{N}\\,\\mathrm{Tr}(zI - J)^{-1} = \\frac{1}{N}\\,\\frac{\\partial}{\\partial z}\\,\\mathrm{Tr}\\,\\ln(zI - J) = \\frac{1}{N}\\,\\frac{\\partial}{\\partial z}\\,\\ln\\det(zI - J).
$$

So we can write

$$
\\varepsilon_J(z) = -\\frac{2}{N}\\,\\frac{\\partial}{\\partial z}\\,\\ln\\det\\big[(zI - J)^{-1/2}\\big]^{-1}
$$

or, more usefully,

$$
\\varepsilon_J(z) = -\\frac{2}{N}\\,\\frac{\\partial}{\\partial z}\\,\\ln\\det(zI - J)^{-1/2}.
$$

The reason for the $-1/2$ power is that we want to express $\\det^{-1/2}$ as a **Gaussian integral** — making the calculation tractable.

### 5.1 Gaussian-integral representation of $[\\det A]^{-1/2}$

Recall that for a positive-definite real symmetric matrix $A$,

$$
\\boxed{\\,\\big[\\det A\\big]^{-1/2} \\;=\\; \\int \\frac{d\\vec s}{(2\\pi)^{N/2}}\\,e^{-\\frac{1}{2}\\vec s^T A\\,\\vec s}\\,}
$$

(This follows from normalizing a multivariate Gaussian.) Apply with $A = zI - J$:

$$
\\big[\\det(zI - J)\\big]^{-1/2} = \\int \\frac{d\\vec s}{(2\\pi)^{N/2}}\\,e^{-\\frac{1}{2}\\vec s^T(zI - J)\\vec s}.
$$

Read this in stat-mech terms: it's the partition function of a Gaussian "spin" model on $N$ continuous degrees of freedom, with energy $E(\\vec s) = \\tfrac{1}{2}\\vec s^T(zI - J)\\vec s$ and "inverse temperature" 1. Define

$$
F_J(z) \\;\\equiv\\; \\tfrac{1}{N}\\ln\\det(zI - J)^{-1/2}\\,,
$$

a "free energy density" (per spin). Then the disorder-averaged Stieltjes transform is

$$
\\varepsilon(z) = -2\\,\\frac{\\partial}{\\partial z}\\,\\overline{F_J(z)}.
$$

### 5.2 Replica method to compute $\\overline{F_J}$

The same problem we faced for spin glasses: we need $\\overline{\\ln Z}$, not $\\ln \\overline{Z}$. Same trick:

$$
\\ln Z = \\lim_{n\\to 0}\\frac{Z^n - 1}{n}.
$$

So

$$
F_J(z) = \\tfrac{1}{N}\\ln\\big[\\det(zI - J)\\big]^{-1/2} = \\tfrac{1}{N}\\lim_{n\\to 0}\\frac{[\\det(zI-J)]^{-n/2} - 1}{n}.
$$

Average over $J$:

$$
\\overline{F_J(z)} = \\tfrac{1}{N}\\lim_{n\\to 0}\\frac{1}{n}\\Big[\\overline{[\\det(zI-J)]^{-n/2}} - 1\\Big].
$$

For positive integer $n$, $[\\det A]^{-n/2}$ becomes a product of $n$ Gaussian integrals — *replicas*:

$$
\\big[\\det(zI - J)\\big]^{-n/2} = \\int \\prod_{a=1}^n \\frac{d\\vec s^a}{(2\\pi)^{N/2}}\\,e^{-\\frac{1}{2}\\sum_a \\vec s^{aT}(zI - J)\\vec s^a}.
$$

Now we average the exponential over the Gaussian disorder $J$, just like in the SK model. The structure of the calculation is **identical** to spin glasses — except the spins are now continuous Gaussians, and the role of the SK quadratic Hamiltonian is played by $\\vec s^{aT} J \\vec s^a$.

That's exactly what Topic 10 will do. Today we set up the framework; next time we execute the replica calculation and **derive the Wigner semicircle law**.

---

## 6. Summary

| Object | Definition |
|---|---|
| Wigner matrix | $J_{ij}=J_{ji}\\sim\\mathcal{N}(0,1/N)$ off-diagonal |
| Empirical density | $g_J(\\lambda) = \\tfrac{1}{N}\\sum_i \\delta(\\lambda-\\lambda_i)$ |
| Stieltjes transform | $\\varepsilon_J(z) = \\tfrac{1}{N}\\mathrm{Tr}(zI-J)^{-1}$ |
| Inversion (SP) | $g_J(\\lambda) = \\tfrac{1}{\\pi}\\lim_{\\eta\\to 0^+}\\mathrm{Im}\\,\\varepsilon_J(\\lambda - i\\eta)$ |
| Electrostatics | $\\varepsilon_J(z)$ is the 2D Coulomb field of charges at $\\lambda_i$ |
| Free-energy view | $\\varepsilon = -2\\,\\partial_z F$, with $F = \\tfrac{1}{N}\\ln[\\det(zI-J)]^{-1/2}$ |
| Gaussian rep | $[\\det A]^{-1/2} = \\int (d\\vec s/(2\\pi)^{N/2})\\,e^{-\\vec s^T A\\vec s/2}$ |

The core idea: **eigenvalue counting → Stieltjes transform → free energy of a Gaussian spin model → replicas/cavity** — the same toolkit as spin glasses. The next two lectures execute this program in detail.

---
`,U7=`# Topic 10 — The Replica Method for Wigner Matrices

> *Last lecture we set up the Stieltjes transform and a Gaussian-integral representation that reduced random matrix theory to a stat-mech problem with $J$ as quenched disorder. Today we take the disorder average using **replicas**, perform a saddle-point in the overlap matrix, and derive the famous **Wigner semicircle law**.*

---

## 1. Recap and goal

We want to compute the disorder-averaged Stieltjes transform

$$
\\varepsilon(z) = \\frac{1}{N}\\,\\overline{\\mathrm{Tr}\\,(zI - J)^{-1}},
$$

for a Wigner matrix $J$ with $J_{ij}\\sim\\mathcal{N}(0,\\sigma^2/N)$ (off-diagonal, factor 2 on diagonal). The eigenvalue density is then $g(\\lambda) = \\tfrac{1}{\\pi}\\lim_{\\eta\\to 0^+}\\mathrm{Im}\\,\\varepsilon(\\lambda - i\\eta)$.

Last time we wrote $\\varepsilon(z) = -2\\,\\partial_z F_J(z)$ with the "free energy"

$$
F_J(z) = \\tfrac{1}{N}\\,\\ln Z_J(z), \\qquad Z_J(z) = \\int \\frac{d\\vec s}{(2\\pi)^{N/2}}\\,e^{-\\frac{1}{2}\\vec s^T(zI - J)\\vec s}.
$$

To average $\\overline{\\ln Z_J}$ we use the replica trick:

$$
\\overline{\\ln Z_J} = \\lim_{n\\to 0}\\frac{\\overline{Z_J^n} - 1}{n}.
$$

Today we compute $\\overline{Z_J^n}$ for integer $n$, do the saddle-point, take $n\\to 0$, and extract $\\varepsilon(z)$.

---

## 2. Replicating: $Z_J^n$ as $n$ Gaussian copies

For positive integer $n$:

$$
Z_J^n = \\int\\prod_{a=1}^n \\frac{d\\vec s^a}{(2\\pi)^{N/2}}\\,\\exp\\!\\Big[-\\frac{1}{2}\\sum_a \\vec s^{a\\,T}(zI - J)\\vec s^a\\Big].
$$

The disorder-dependent piece is $\\frac{1}{2}\\sum_a \\vec s^{a\\,T}J\\,\\vec s^a = \\frac{1}{2}\\sum_a\\sum_{i,j}J_{ij}s_i^a s_j^a$, linear in $J_{ij}$. Average using the Gaussian identity $\\overline{e^{aJ_{ij}}} = e^{a^2 \\mathrm{Var}(J_{ij})/2}$:

$$
\\overline{\\exp\\!\\Big[\\tfrac{1}{2}\\sum_a\\sum_{ij}J_{ij}s_i^a s_j^a\\Big]} = \\exp\\!\\Big[\\frac{\\sigma^2}{4N}\\sum_{ij}\\Big(\\sum_a s_i^a s_j^a\\Big)^2\\Big].
$$

(The factor $1/4$ instead of $1/2$ comes from symmetrization $J_{ij}=J_{ji}$ and the variance of the off-diagonal entries.)

Now expand the squared sum as in the SK calculation:

$$
\\Big(\\sum_a s_i^a s_j^a\\Big)^2 = \\sum_a (s_i^a s_j^a)^2 + \\sum_{a\\neq b}(s_i^a s_i^b)(s_j^a s_j^b).
$$

Sum over $i,j$:
$$
\\sum_{ij}(s_i^a s_j^a)^2 = \\Big(\\sum_i (s_i^a)^2\\Big)^2,\\qquad
\\sum_{ij} s_i^a s_i^b s_j^a s_j^b = \\Big(\\sum_i s_i^a s_i^b\\Big)^2.
$$

Define the replica overlap matrix

$$
\\boxed{\\,Q_{ab} \\;\\equiv\\; \\frac{1}{N}\\sum_i s_i^a s_i^b\\,}
$$

(diagonal $Q_{aa} = \\tfrac{1}{N}\\sum_i (s_i^a)^2$ also retained, unlike the spin case where $s_i^2 = 1$). After this identification:

$$
\\overline{Z_J^n} = \\int\\prod_a \\frac{d\\vec s^a}{(2\\pi)^{N/2}}\\,\\exp\\!\\Big[-\\frac{z}{2}\\sum_a\\sum_i (s_i^a)^2 + \\frac{N\\sigma^2}{4}\\sum_{a,b}Q_{ab}^2\\Big].
$$

---

## 3. Hubbard–Stratonovich and decoupling

The quadratic-in-$Q_{ab}$ term is exactly the same algebraic structure as in SK. Apply HS for each $(a,b)$:

$$
\\exp\\!\\Big[\\frac{N\\sigma^2}{4}Q_{ab}^2\\Big] = \\int \\frac{d\\hat Q_{ab}}{\\sqrt{2\\pi/N}}\\,\\exp\\!\\Big[-\\frac{N}{2}\\hat Q_{ab}^2 + \\frac{N\\sigma}{\\sqrt 2}\\,\\hat Q_{ab}Q_{ab}\\Big]
$$

(absorbing factors). After the dust settles, you can write

$$
\\overline{Z_J^n} = \\int \\prod_{a\\leq b}d\\hat Q_{ab}\\,\\exp\\!\\Big\\{N\\big[-E[Q] + \\sum_{a\\leq b}\\hat Q_{ab}Q_{ab} + \\mathcal{I}[\\hat Q]\\big]\\Big\\}
$$

where $E[Q] = \\frac{\\sigma^2}{4}\\sum_{a,b}Q_{ab}^2 + \\frac{z}{2}\\sum_a Q_{aa}$, and $\\mathcal{I}[\\hat Q]$ is the entropy-like piece coming from the spin integral that decouples site by site:

$$
\\mathcal{I}[\\hat Q] = \\ln \\int \\prod_a ds^a\\, \\exp\\!\\Big[\\sum_{a\\leq b}\\hat Q_{ab}\\,s^a s^b\\Big].
$$

The Gaussian integral gives $\\mathcal{I}[\\hat Q] = -\\tfrac{1}{2}\\ln\\det(-2\\hat Q) + \\mathrm{const}$ (treat $\\hat Q$ as a symmetric $n\\times n$ matrix). Done correctly with all bookkeeping, we get a $Q,\\hat Q$ saddle-point integral.

---

## 4. Replica-symmetric ansatz

We are computing eigenvalues of a **non-disordered** observable (the Stieltjes transform), so we expect a single, ergodic phase — replica symmetry should hold. Take the **diagonal RS ansatz**:

$$
Q_{ab} = q\\,\\delta_{ab},\\qquad \\hat Q_{ab} = \\hat q\\,\\delta_{ab}.
$$

(Off-diagonal overlaps are zero — replicas don't talk to each other in this problem.) Plug in:

- $E[Q] = \\tfrac{\\sigma^2}{4}\\,n\\,q^2 + \\tfrac{z}{2}\\,n\\,q$.
- $\\sum_{a\\leq b}\\hat Q_{ab}Q_{ab} = n\\,\\hat q\\,q$.
- $\\mathcal{I}[\\hat Q] = n\\cdot\\tfrac{1}{2}\\ln\\frac{2\\pi}{2\\hat q} = -\\tfrac{n}{2}\\ln\\hat q + \\text{const}$.

Combining, the exponent per replica is

$$
\\Phi(q,\\hat q;z) = -\\tfrac{\\sigma^2}{4}q^2 - \\tfrac{z}{2}q + \\hat q\\,q - \\tfrac{1}{2}\\ln\\hat q + \\text{const}.
$$

So

$$
\\boxed{\\,F(z) = \\mathrm{ext}_{q,\\hat q}\\;\\Phi(q,\\hat q;z)\\,}
$$

(for $-\\beta f$ in stat-mech notation; here we have $\\beta = 1$ since the Gaussian Hamiltonian has $\\frac{1}{2}\\vec s^T(\\dots)\\vec s$).

---

## 5. Saddle-point equations

Setting $\\partial\\Phi/\\partial \\hat q = 0$:
$$
q - \\frac{1}{2\\hat q} = 0 \\;\\Longrightarrow\\; \\hat q = \\frac{1}{2q}.
$$

Setting $\\partial\\Phi/\\partial q = 0$:
$$
-\\frac{\\sigma^2}{2}q - \\frac{z}{2} + \\hat q = 0 \\;\\Longrightarrow\\; \\hat q = \\frac{z + \\sigma^2 q}{2}.
$$

Eliminate $\\hat q$: $\\frac{1}{2q} = \\frac{z + \\sigma^2 q}{2}$, i.e., $q(z + \\sigma^2 q) = 1$, or

$$
\\sigma^2 q^2 + z\\,q - 1 = 0.
$$

But $q = q(z)$ at the saddle is precisely related to the **Stieltjes transform**! Indeed, at the saddle $\\langle (s^a)^2\\rangle = 1/(z - \\sigma^2 q)$ (the Gaussian variance), giving

$$
\\boxed{\\,q(z) = \\frac{1}{z - \\sigma^2 q(z)}\\,}
$$

This is a **self-consistent equation for $q$**, which we will reinterpret as a self-consistent equation for $\\varepsilon$.

---

## 6. The $\\varepsilon$-equation and the Wigner semicircle

To get $\\varepsilon(z)$, take $-2\\,\\partial_z F = -2\\,\\partial_z\\Phi^*$. Differentiating $\\Phi$ w.r.t. $z$ at the saddle (the saddle-point conditions kill the derivative through $q$ and $\\hat q$):

$$
\\varepsilon(z) = -2\\,\\frac{\\partial \\Phi^*}{\\partial z}\\Big|_{\\rm saddle} = q^*(z).
$$

So **$\\varepsilon = q$ at the saddle**, and the self-consistency equation becomes

$$
\\boxed{\\,\\varepsilon(z) \\;=\\; \\frac{1}{z - \\sigma^2\\,\\varepsilon(z)}\\,}
$$

— a quadratic equation for $\\varepsilon$:

$$
\\sigma^2\\,\\varepsilon^2 - z\\,\\varepsilon + 1 = 0.
$$

Solve:

$$
\\boxed{\\,\\varepsilon(z) \\;=\\; \\frac{z \\pm \\sqrt{z^2 - 4\\sigma^2}}{2\\sigma^2}\\,}
$$

The physical branch is the one decaying like $1/z$ at large $|z|$, namely $\\varepsilon(z) \\approx 1/z$. This selects the minus sign:

$$
\\varepsilon(z) = \\frac{z - \\sqrt{z^2 - 4\\sigma^2}}{2\\sigma^2}.
$$

### 6.1 Imaginary part = the eigenvalue density

To get $g(\\lambda)$, set $z = \\lambda - i\\eta$ with $\\eta\\to 0^+$. The crucial step: $\\sqrt{z^2 - 4\\sigma^2}$ acquires an imaginary part exactly when its argument is *negative*, i.e., when $\\lambda^2 < 4\\sigma^2$, i.e., $|\\lambda| < 2\\sigma$. Specifically, for $|\\lambda| < 2\\sigma$,

$$
\\sqrt{(\\lambda - i\\eta)^2 - 4\\sigma^2} \\;\\approx\\; -i\\sqrt{4\\sigma^2 - \\lambda^2}\\quad\\text{as }\\eta\\to 0^+,
$$

so

$$
\\mathrm{Im}\\,\\varepsilon(\\lambda - i\\eta) = \\frac{\\sqrt{4\\sigma^2 - \\lambda^2}}{2\\sigma^2}.
$$

For $|\\lambda| > 2\\sigma$, the square root is real and the imaginary part vanishes.

Therefore

$$
\\boxed{\\,g(\\lambda) \\;=\\; \\begin{cases}\\dfrac{\\sqrt{4\\sigma^2 - \\lambda^2}}{2\\pi\\sigma^2}, & |\\lambda| < 2\\sigma,\\\\[6pt] 0, & |\\lambda| > 2\\sigma.\\end{cases}\\,}
$$

This is **Wigner's semicircle law**: the eigenvalues of a Wigner matrix concentrate on the interval $[-2\\sigma, 2\\sigma]$ with density given by a semicircle.

---

## 7. Picture and intuition

\`\`\`
   g(λ)
    │       ____
    │     /      \\
    │   /          \\
    │  /            \\
    │ /              \\
    │/                \\
    └──────────────────── λ
   -2σ                  2σ
\`\`\`

A few remarkable features:

1. **Compact support.** Eigenvalues are bounded — nothing escapes $[-2\\sigma, 2\\sigma]$, despite Gaussian entries having unbounded support.
2. **Edge softness.** $g(\\lambda)\\to 0$ as $\\lambda \\to \\pm 2\\sigma$ with a square-root vanishing — a universal feature called the "Tracy-Widom edge".
3. **Universality.** This same density holds (asymptotically) for *any* Wigner matrix with finite-variance i.i.d. entries — Gaussian-ness is not required. The replica calculation only used the second moment of $J_{ij}$.

---

## 8. Reading the calculation as electrostatics

Recall from Topic 9 that $\\varepsilon(z)$ is a 2D electric field of charges sitting at the eigenvalues. The semicircle is what you'd get if a continuous line charge with density $g(\\lambda)$ were spread on the real axis — and its self-consistency $\\varepsilon(z) = 1/(z - \\sigma^2\\varepsilon)$ is a kind of *non-linear electrostatics* where each charge contributes self-consistently to the field.

### 8.1 The next twist

In the next lecture we'll re-derive this same result via the **cavity method**: physically remove an eigenvalue (or rather, a row/column of the matrix) and study how the spectrum of the smaller matrix differs from the full one. The answer comes out of an *iterative argument* on individual row/column operations — no $n\\to 0$ limit needed. Same equation $\\varepsilon = 1/(z - \\sigma^2\\varepsilon)$, totally different derivation.

---

## 9. Summary

| Step | What happens |
|---|---|
| Stieltjes $\\to$ free energy | $\\varepsilon = -2\\partial_z F$, $F = \\tfrac{1}{N}\\ln \\int e^{-\\frac{1}{2}\\vec s^T(zI-J)\\vec s}d\\vec s$ |
| Replica trick | $\\overline{\\ln Z} = \\lim_{n\\to 0}(\\overline{Z^n}-1)/n$ |
| Disorder average | Quadratic in spins, gives $\\sum_{ij}(\\sum_a s_i^a s_j^a)^2$ |
| Hubbard–Stratonovich | Decouple via $Q_{ab} = \\tfrac{1}{N}\\sum_i s_i^a s_i^b$ |
| Replica-symmetric ansatz | $Q_{ab} = q\\,\\delta_{ab}$ (replicas decoupled) |
| Saddle-point | $\\sigma^2 q^2 - zq + 1 = 0$, $\\varepsilon = q^*$ |
| Solution | $\\varepsilon(z) = (z - \\sqrt{z^2 - 4\\sigma^2})/(2\\sigma^2)$ |
| Inversion | $g(\\lambda) = \\sqrt{4\\sigma^2 - \\lambda^2}/(2\\pi\\sigma^2)$ — Wigner semicircle |

A truly satisfying derivation: the same machinery that gave us the SK free energy gives us, with minimal modification, one of the most iconic results in mathematical physics. In Topic 11 we re-derive everything with cavity, exposing the underlying iteration structure.

---
`,Q7=`# Topic 11 — The Cavity Method for Wigner Matrices

> *We re-derive Wigner's semicircle law without replicas. The trick: take an $N\\times N$ Wigner matrix, peel off one row/column, and use a beautifully simple block-matrix inversion identity to relate the resolvent of the full system to that of the **cavity** $(N-1)\\times(N-1)$ system. The result is the same self-consistent equation $\\varepsilon = 1/(z - \\sigma^2\\varepsilon)$ — but the derivation is far more transparent.*

---

## 1. Recall what we want

Wigner matrix $J$, $N\\times N$, symmetric, with $J_{ij}\\sim\\mathcal{N}(0,\\sigma^2/N)$ (off-diagonal). We want the disorder-averaged Stieltjes transform

$$
\\varepsilon(z) = \\frac{1}{N}\\,\\overline{\\mathrm{Tr}\\,(zI - J)^{-1}}.
$$

Last lecture, the replica method gave $\\varepsilon(z) = 1/(z - \\sigma^2\\varepsilon(z))$, i.e., $\\sigma^2\\varepsilon^2 - z\\varepsilon + 1 = 0$, leading to the semicircle. Today we'll derive the same equation **directly** from the matrix structure.

### 1.1 Strategy: spectrum of a smaller matrix

Define $M(z) = zI - J$ and the resolvent matrix $E(z) = M(z)^{-1}$. Then

$$
\\varepsilon(z) = \\frac{1}{N}\\,\\mathrm{Tr}\\, E(z) = \\frac{1}{N}\\sum_{i=1}^N E_{ii}(z).
$$

The cavity strategy is to relate $E_{11}(z)$ in the full system to the resolvent of the $(N-1)\\times(N-1)$ matrix $\\widetilde M$ obtained by **removing the first row and column**. By symmetry (all rows/columns equivalent in distribution), $\\overline{E_{ii}(z)}$ is the same for all $i$, so

$$
\\varepsilon(z) = \\overline{E_{11}(z)}.
$$

So we just need to compute the average of one diagonal entry of the resolvent.

---

## 2. The block-matrix inversion identity

The fundamental tool is a beautiful identity from linear algebra. Write $M$ in block form, separating the first row/column:

$$
M = \\begin{pmatrix} M_{11} & \\vec m_{12}^T \\\\[2pt] \\vec m_{21} & \\widetilde M\\end{pmatrix},
$$

with $M_{11}\\in\\mathbb{R}$ a scalar (the $(1,1)$ entry $= z - J_{11}$), $\\vec m_{12} = -J_{12:N}$ the row vector of off-diagonal entries, $\\vec m_{21}$ similarly the column, and $\\widetilde M = zI - \\widetilde J$ the cavity $(N-1)\\times(N-1)$ block.

Then the **Schur-complement formula** gives the $(1,1)$ entry of $E = M^{-1}$:

$$
\\boxed{\\,E_{11}(z) \\;=\\; \\big[M_{11} - \\vec m_{12}^T\\,\\widetilde M^{-1}\\,\\vec m_{21}\\big]^{-1}\\,}
$$

In our notation:

$$
E_{11}(z) = \\frac{1}{z - J_{11} - \\sum_{i,j\\geq 2}J_{1i}\\,\\widetilde E_{ij}(z)\\,J_{j1}}\\,,
$$

where $\\widetilde E(z) \\equiv \\widetilde M(z)^{-1}$ is the resolvent of the cavity system.

That's the whole identity. Three observations make it powerful:

1. The **denominator is a sum** of contributions from removing one row/column.
2. The matrix elements $J_{1i}$ are the couplings between spin 1 and the rest — they are **independent** of the cavity matrix $\\widetilde J$ (which only contains $J_{ij}$ for $i,j\\geq 2$).
3. Therefore, when we average over $J$, we can use independence to factorize.

This independence is the *cavity method principle* applied to RMT.

---

## 3. Averaging the Schur identity

Now take the disorder average, term by term in the denominator. We'll need three averages:

**(1) Diagonal entry $J_{11}$.** Mean zero: $\\overline{J_{11}} = 0$. Done. (This is why the diagonal having variance $2/N$ doesn't matter at leading order — its mean is zero and its variance is $O(1/N)$, subleading.)

**(2) Cavity resolvent $\\widetilde E_{ii}$.** We need $\\overline{\\widetilde E_{ii}(z)}$. The cavity system is itself a Wigner matrix of size $N-1$ with the same statistics. By self-averaging,

$$
\\frac{1}{N-1}\\sum_i \\overline{\\widetilde E_{ii}(z)} = \\widetilde\\varepsilon(z) \\;\\xrightarrow[N\\to\\infty]{}\\;\\varepsilon(z).
$$

In the large-$N$ limit, the cavity Stieltjes transform equals the full one — a single missing row makes no difference. So

$$
\\overline{\\widetilde E_{ii}(z)} \\to \\varepsilon(z)\\quad \\text{for any }i.
$$

**(3) The double sum.** This is the key term:

$$
\\sum_{i,j\\geq 2}\\overline{J_{1i}\\,\\widetilde E_{ij}(z)\\,J_{j1}}.
$$

Use independence of $J_{1\\cdot}$ from $\\widetilde J$ (and hence from $\\widetilde E$):

$$
\\sum_{ij}\\overline{J_{1i}\\, J_{j1}}\\cdot\\overline{\\widetilde E_{ij}(z)} = \\sum_{ij}\\overline{J_{1i}J_{1j}}\\,\\overline{\\widetilde E_{ij}(z)}.
$$

Off-diagonal $J$'s are independent: $\\overline{J_{1i}J_{1j}} = \\tfrac{\\sigma^2}{N}\\delta_{ij}$. So the sum collapses to the diagonal:

$$
\\sum_{i,j\\geq 2}\\frac{\\sigma^2}{N}\\delta_{ij}\\,\\overline{\\widetilde E_{ij}(z)} = \\frac{\\sigma^2}{N}\\sum_{i\\geq 2}\\overline{\\widetilde E_{ii}(z)} \\;=\\; \\sigma^2\\cdot\\frac{1}{N}\\sum_i \\overline{\\widetilde E_{ii}}.
$$

In the large-$N$ limit this becomes $\\sigma^2 \\cdot \\varepsilon(z)$.

### 3.1 Putting it together

Therefore in the large-$N$ limit,

$$
\\frac{1}{\\overline{E_{11}(z)}} = z - 0 - \\sigma^2\\varepsilon(z),
$$

and since $\\overline{E_{11}(z)} = \\varepsilon(z)$ by symmetry,

$$
\\boxed{\\,\\varepsilon(z) \\;=\\; \\frac{1}{z - \\sigma^2\\,\\varepsilon(z)}\\,}
$$

The same self-consistent equation as the replica method gave us, derived in three lines without any $n\\to 0$ trick.

---

## 4. Solving and recovering the semicircle

Rearrange: $\\varepsilon(z - \\sigma^2\\varepsilon) = 1$, i.e., $\\sigma^2\\varepsilon^2 - z\\varepsilon + 1 = 0$. Quadratic formula:

$$
\\varepsilon(z) = \\frac{z \\pm \\sqrt{z^2 - 4\\sigma^2}}{2\\sigma^2}.
$$

Pick the branch that decays as $1/z$ for $|z|\\to\\infty$ (physically must, since the trace of a finite matrix decays at infinity): the minus sign.

$$
\\varepsilon(z) = \\frac{z - \\sqrt{z^2 - 4\\sigma^2}}{2\\sigma^2}.
$$

Sokhotski–Plemelj with $z = \\lambda - i\\eta$, $\\eta\\to 0^+$, gives an imaginary part *iff* $\\lambda^2 < 4\\sigma^2$:

$$
\\boxed{\\,g(\\lambda) = \\frac{\\sqrt{4\\sigma^2 - \\lambda^2}}{2\\pi\\sigma^2}, \\;\\;|\\lambda|<2\\sigma\\,}
$$

— Wigner's semicircle law.

---

## 5. Why is the cavity argument so clean?

The whole calculation has three ingredients:

1. **Schur complement** — a completely deterministic linear-algebra identity.
2. **Independence** — $J_{1\\cdot}$ ⊥ $\\widetilde J$, because we drew them as independent random variables.
3. **Concentration** — $\\widetilde\\varepsilon \\to \\varepsilon$ as $N\\to\\infty$ because removing one row/column changes nothing at leading order.

That's it. No replicas, no $n\\to 0$, no auxiliary $Q_{ab}$ matrix. The cavity method works directly with the resolvent.

### 5.1 Connection to the spin-glass cavity argument

The structure is *exactly* the same as Topic 8:

| SK / spin glass (Topic 8) | Wigner / RMT (Topic 11) |
|---|---|
| Add new spin $s_0$ | Remove first row/column |
| Cavity field $h_0 = \\sum_k J_{k0}\\langle s_k\\rangle_{\\rm cav}$ | Cavity-resolvent expression $\\sum J_{1i}\\widetilde E_{ij}J_{j1}$ |
| Couplings $J_{k0}$ ⊥ cavity spins | Couplings $J_{1\\cdot}$ ⊥ cavity matrix $\\widetilde J$ |
| CLT $\\Rightarrow h_0\\sim\\mathcal{N}(\\lambda m,q)$ | Variance computation $\\Rightarrow\\sigma^2\\varepsilon$ |
| Self-consistency $m=\\langle s\\rangle, q=\\langle s\\rangle^2$ | Self-consistency $\\varepsilon = 1/(z - \\sigma^2\\varepsilon)$ |

Each step has a perfect dictionary. The cavity method is one and the same idea for spin glasses and random matrices.

---

## 6. What the $\\sigma^2 \\varepsilon(z)$ correction means

The denominator of $\\varepsilon = 1/(z - \\sigma^2\\varepsilon)$ has a clean physical reading. In the cavity expression, the original $z - J_{11}$ becomes $z$ to leading order; adding the back-reaction from re-coupling the chosen row to the cavity system *shifts* $z\\to z - \\sigma^2\\varepsilon(z)$. The "missing" row sees an effective shift in its diagonal proportional to $\\sigma^2 \\times (\\text{average resolvent})$, which is precisely the Wick-contracted self-energy.

In quantum many-body language, $\\Sigma(z) \\equiv \\sigma^2\\varepsilon(z)$ is the **self-energy** in the simplest (Hartree-like) approximation, and the equation $\\varepsilon = 1/(z - \\Sigma(\\varepsilon))$ is a self-consistent self-energy equation. The Wigner semicircle is the "non-interacting" zeroth-order solution to a vast hierarchy of such self-energy diagrams.

---

## 7. Summary

| Step | Ingredient |
|---|---|
| Stieltjes via diagonal | $\\varepsilon = \\overline{E_{11}}$ by symmetry |
| Schur complement | $E_{11} = 1/[z - J_{11} - \\vec m^T\\widetilde E\\vec m]$ |
| Disorder average term-by-term | $\\overline{J_{11}}=0$, $\\overline{J_{1i}J_{1j}} = (\\sigma^2/N)\\delta_{ij}$ |
| Cavity-system self-averaging | $\\widetilde\\varepsilon\\to\\varepsilon$ as $N\\to\\infty$ |
| Self-consistent equation | $\\varepsilon = 1/(z - \\sigma^2\\varepsilon)$ |
| Solve | $\\varepsilon(z) = (z - \\sqrt{z^2-4\\sigma^2})/(2\\sigma^2)$ |
| Imaginary part | $g(\\lambda) = \\sqrt{4\\sigma^2-\\lambda^2}/(2\\pi\\sigma^2)$ — semicircle |

Cavity is now firmly established as a versatile, replica-free toolkit. In the next (and final) lecture, we extend it to **Wishart matrices**, the random covariance matrices that arise everywhere in statistics and machine learning — and derive the **Marchenko–Pastur** distribution.

---
`,K7=`# Topic 12 — The Cavity Method for Wishart Matrices

> *We close the course by deriving the **Marchenko–Pastur** distribution — the spectrum of random sample covariance matrices — using the cavity method. Wishart matrices arise everywhere in high-dimensional statistics (PCA, factor analysis, regression), and their spectrum sets the bar for what's signal versus noise. The same cavity-Schur tool that gave us the semicircle law gives us this universal "noise spectrum" of high-dimensional data analysis.*

---

## 1. Motivation — high-dimensional PCA

Imagine you measure $N$ variables (say, neural firing rates, gene expression levels, stock returns) under $P$ experimental conditions. This gives an $N\\times P$ data matrix $X$. The empirical covariance matrix is

$$
\\hat C = \\frac{1}{P}\\,X X^T \\qquad (N\\times N).
$$

PCA examines its eigenvalues and eigenvectors: principal directions in feature space, ordered by variance.

**Key question:** the eigenvalues you see are partly real signal and partly noise. To separate them, you need a baseline: *what does the eigenvalue spectrum of $\\hat C$ look like under a pure noise model?*

### 1.1 Null model: i.i.d. noise

Let the entries be i.i.d. standard Gaussian: $X_{i\\mu}\\sim\\mathcal{N}(0,1)$, independent for $i=1,\\dots,N$ and $\\mu = 1,\\dots,P$. Then $\\hat C$ is a **Wishart matrix**.

There are two limits to consider:
- **Classical statistics:** $N$ fixed, $P\\to\\infty$. Then $\\hat C\\to I_N$ (the true covariance, a single eigenvalue $\\lambda=1$). All noise washes out.
- **Modern high-dimensional statistics:** $N\\to\\infty$ and $P\\to\\infty$ with $\\alpha = P/N$ fixed. The empirical spectrum $g(\\lambda)$ converges to a *non-trivial* distribution — the **Marchenko–Pastur** (MP) law.

The parameter $\\alpha = P/N$ is the **number of measurements per dimension** — the effective sample size relative to model complexity. The MP distribution is the noise-floor benchmark you compare your real PCA spectrum against.

---

## 2. Setup

We want the disorder-averaged Stieltjes transform

$$
\\varepsilon(z) = \\overline{\\varepsilon_X(z)},\\qquad \\varepsilon_X(z) = \\tfrac{1}{N}\\,\\mathrm{Tr}\\big[zI - \\tfrac{1}{P}XX^T\\big]^{-1}.
$$

Then $g(\\lambda) = \\tfrac{1}{\\pi}\\lim_{\\eta\\to 0^+}\\mathrm{Im}\\,\\varepsilon(\\lambda - i\\eta)$ as before.

The plan:
1. Apply the **Schur complement** to express $E_{11}(z) = (zI - \\tfrac{1}{P}XX^T)^{-1}_{11}$.
2. Average over $X$ using independence of the first row from the rest.
3. Recognize the cavity-system Stieltjes transform.
4. Solve the resulting self-consistent quadratic.

---

## 3. Schur complement for the Wishart resolvent

Let $M = zI_N - \\tfrac{1}{P}XX^T$. Block-decompose $M$ by separating the first row and column. The $(1,1)$ block is the scalar

$$
M_{11} = z - \\frac{1}{P}\\sum_{\\mu=1}^P X_{1\\mu}^2.
$$

By the strong law of large numbers, $\\tfrac{1}{P}\\sum_\\mu X_{1\\mu}^2 \\to 1$ as $P\\to\\infty$, so $M_{11}\\to z - 1$.

The $(1,2)$ block $\\vec m_{12}$ is a row vector of length $N-1$:
$$
(M_{12})_i = -\\frac{1}{P}\\sum_\\mu X_{1\\mu}X_{i+1,\\mu},\\quad i = 1,\\dots,N-1.
$$

The $(2,2)$ block $M_{22}$ is the cavity matrix:
$$
M_{22} = zI_{N-1} - \\frac{1}{P}\\widetilde X\\widetilde X^T,
$$

where $\\widetilde X$ is $X$ with the first row removed (an $(N-1)\\times P$ matrix). The cavity resolvent is $E_{N-1}(z) = M_{22}^{-1}$, with Stieltjes transform $\\varepsilon_{N-1}(z) = \\tfrac{1}{N-1}\\mathrm{Tr}\\,E_{N-1}(z)$.

By the Schur formula:

$$
E_{11}(z)^{-1} = M_{11} - \\vec m_{12}^T\\,M_{22}^{-1}\\,\\vec m_{21}.
$$

---

## 4. Averaging the quadratic form

The hard term is

$$
A \\;\\equiv\\; \\vec m_{12}^T\\,M_{22}^{-1}\\,\\vec m_{21} \\;=\\; \\frac{1}{P^2}\\sum_{i,j=2}^N\\sum_{\\mu,\\nu=1}^P X_{1\\mu}X_{i\\mu}\\,(M_{22}^{-1})_{ij}\\,X_{j\\nu}X_{1\\nu}.
$$

Group as a quadratic form in $X_{1\\mu}$:

$$
A = \\frac{1}{P}\\sum_{\\mu,\\nu=1}^P X_{1\\mu}\\,A_{\\mu\\nu}\\, X_{1\\nu},\\qquad
A_{\\mu\\nu} = \\frac{1}{P}\\sum_{i,j=2}^N X_{i\\mu}\\,(M_{22}^{-1})_{ij}\\,X_{j\\nu}.
$$

**Crucial independence:** $X_{1\\mu}$ for $\\mu = 1,\\dots,P$ is independent of *everything else* — in particular of $A$ (which involves only rows $i\\geq 2$ of $X$ and the cavity matrix). So at large $P$ we have

$$
\\overline{A}_{\\rm rows\\, 1} \\;\\approx\\; \\frac{1}{P}\\sum_{\\mu,\\nu}\\overline{X_{1\\mu}X_{1\\nu}}\\, A_{\\mu\\nu} = \\frac{1}{P}\\sum_{\\mu}A_{\\mu\\mu} = \\frac{1}{P}\\,\\mathrm{Tr}\\,A.
$$

Compute $\\mathrm{Tr}\\,A$:

$$
\\mathrm{Tr}\\,A = \\sum_\\mu A_{\\mu\\mu} = \\frac{1}{P}\\sum_\\mu\\sum_{i,j\\geq 2}X_{i\\mu}X_{j\\mu}(M_{22}^{-1})_{ij} = \\frac{1}{P}\\,\\mathrm{Tr}\\Big[\\sum_\\mu \\widetilde X_{\\cdot\\mu}\\widetilde X_{\\cdot\\mu}^T\\, M_{22}^{-1}\\Big].
$$

Identify $\\sum_\\mu\\widetilde X_{\\cdot\\mu}\\widetilde X_{\\cdot\\mu}^T = \\widetilde X\\widetilde X^T = P\\,\\widehat C^{N-1}$, so

$$
\\mathrm{Tr}\\,A = \\mathrm{Tr}\\big[\\widehat C^{N-1}\\, E_{N-1}(z)\\big].
$$

Thus

$$
A \\to \\frac{1}{P}\\,\\mathrm{Tr}\\big[\\widehat C^{N-1}\\,E_{N-1}(z)\\big] \\quad\\text{(at large }P\\text{, after averaging on row 1)}.
$$

### 4.1 Algebraic simplification

Now use the elegant identity

$$
\\mathrm{Tr}\\big[\\widehat C^{N-1}\\,E_{N-1}(z)\\big] = \\mathrm{Tr}\\Big[(zI - M_{22})\\,M_{22}^{-1}\\Big] \\cdot 1 \\;+\\; \\dots
$$

Concretely:

$$
\\widehat C^{N-1} = zI_{N-1} - M_{22}.
$$

So

$$
\\widehat C^{N-1}\\,E_{N-1} = zE_{N-1} - I_{N-1},
$$

and therefore

$$
\\mathrm{Tr}\\big[\\widehat C^{N-1}E_{N-1}\\big] = z\\,\\mathrm{Tr}\\,E_{N-1} - (N-1) = (N-1)\\big[z\\,\\varepsilon_{N-1}(z) - 1\\big].
$$

Plug back:

$$
A \\;\\to\\; \\frac{N-1}{P}\\,\\big[z\\,\\varepsilon_{N-1}(z) - 1\\big] \\;\\xrightarrow[N,P\\to\\infty,\\;P/N=\\alpha]{}\\;\\; \\alpha^{-1}\\big[z\\,\\varepsilon(z) - 1\\big].
$$

---

## 5. The self-consistency equation

Putting the pieces back into the Schur identity:

$$
\\frac{1}{\\overline{E_{11}(z)}} \\;\\approx\\; (z - 1) - \\alpha^{-1}\\big[z\\,\\varepsilon(z) - 1\\big] \\;=\\; z - 1 + \\alpha^{-1} - \\alpha^{-1}z\\,\\varepsilon(z).
$$

By symmetry $\\overline{E_{11}(z)} = \\varepsilon(z)$, so

$$
\\boxed{\\,\\frac{1}{\\varepsilon(z)} \\;=\\; z - 1 + \\alpha^{-1} - \\alpha^{-1}\\,z\\,\\varepsilon(z)\\,}
$$

Multiply through by $\\alpha\\varepsilon$:

$$
\\alpha = (\\alpha z - \\alpha + 1)\\,\\varepsilon(z) - z\\,\\varepsilon(z)^2,
$$

i.e.,

$$
z\\,\\varepsilon^2 - (z + \\alpha^{-1} - 1)\\,\\varepsilon + 1 = 0
$$

(after dividing by a useful constant). The exact form one finds in the lecture, written symmetrically, is

$$
\\alpha^{-1}z\\,\\varepsilon^2 - (z + \\alpha^{-1} - 1)\\,\\varepsilon + 1 = 0.
$$

The quadratic formula gives

$$
\\varepsilon(z) = \\frac{(z + \\alpha^{-1} - 1) - \\sqrt{(z + \\alpha^{-1} - 1)^2 - 4\\alpha^{-1}z}}{2\\alpha^{-1}z},
$$

choosing the branch that decays as $1/z$ at infinity.

---

## 6. The Marchenko–Pastur distribution

Take $z = \\lambda - i\\eta$ and look for the imaginary part. The square root acquires an imaginary part when its argument is *negative*:

$$
(\\lambda + \\alpha^{-1} - 1)^2 - 4\\alpha^{-1}\\lambda < 0.
$$

Expanding:

$$
\\lambda^2 - 2\\lambda(\\alpha^{-1} + 1) + (\\alpha^{-1} - 1)^2 < 0.
$$

The roots of the corresponding quadratic in $\\lambda$ are

$$
\\lambda_\\pm = (\\alpha^{-1} + 1) \\pm 2\\sqrt{\\alpha^{-1}} = \\big(1 \\pm \\alpha^{-1/2}\\big)^2.
$$

So the imaginary part is nonzero precisely on $\\lambda \\in [\\lambda_-, \\lambda_+]$ where

$$
\\lambda_\\pm = \\big(1 \\pm 1/\\sqrt\\alpha\\big)^2.
$$

Inside this interval,

$$
\\sqrt{(z+\\alpha^{-1}-1)^2 - 4\\alpha^{-1}z}\\Big|_{z=\\lambda-i0^+} = -i\\sqrt{4\\alpha^{-1}\\lambda - (\\lambda+\\alpha^{-1}-1)^2} = -i\\sqrt{(\\lambda_+ - \\lambda)(\\lambda - \\lambda_-)}.
$$

Therefore

$$
\\boxed{\\,g(\\lambda) \\;=\\; \\frac{1}{2\\pi\\alpha^{-1}\\lambda}\\,\\sqrt{(\\lambda_+ - \\lambda)(\\lambda - \\lambda_-)}\\quad\\text{for }\\lambda_- \\leq \\lambda \\leq \\lambda_+,\\,}
$$

with $\\lambda_\\pm = (1\\pm 1/\\sqrt\\alpha)^2$. Outside the interval $g(\\lambda) = 0$. This is the **Marchenko–Pastur distribution** with aspect ratio $\\alpha = P/N$.

(For $\\alpha < 1$, i.e., $P < N$, one also gets a delta function at $\\lambda=0$ of weight $1 - \\alpha$, since the matrix is rank-deficient; the formula above describes the continuous bulk.)

### 6.1 Picture

\`\`\`
       g(λ)
         │
         │  /\\
         │ /  \\
         │/    \\
         ┴──────┴───── λ
       (1-1/√α)²   (1+1/√α)²
\`\`\`

- The bulk eigenvalues live in $[\\lambda_-, \\lambda_+]$ — bounded even though $X_{i\\mu}$ has unbounded support.
- The width $\\lambda_+ - \\lambda_- = 4/\\sqrt\\alpha$ shrinks as $\\alpha$ grows.
- The density vanishes with a square-root edge at both endpoints — universal Tracy–Widom behavior.

### 6.2 Limits

- **$\\alpha\\to\\infty$ (lots of data per dim):** $\\lambda_\\pm \\to 1$. The MP distribution collapses to a delta at $\\lambda = 1$. We recover the classical-statistics limit: the empirical covariance equals the true identity covariance.
- **$\\alpha\\to 1$:** $\\lambda_- = 0$. The spectrum touches zero — the matrix becomes ill-conditioned.
- **$\\alpha < 1$:** delta at zero plus continuous bulk; the matrix is rank-deficient.

---

## 7. Why this matters

The Marchenko–Pastur distribution is the **noise floor for PCA in high dimensions**. Imagine you're doing PCA on a real dataset of $N$ variables observed in $P$ trials. Plot the eigenvalues of $\\hat C$. If they all fall inside $[\\lambda_-, \\lambda_+]$, you have nothing but noise. If you see eigenvalues outside this interval — *outliers* — those are statistically significant principal components ("signals").

This is the foundation of **random matrix theory in statistics**: a principled way to do PCA in regimes where $P \\sim N$. Fields that use it daily:
- **Finance:** cleaning correlation matrices of stock returns.
- **Neuroscience:** identifying meaningful population activity modes.
- **Genomics:** correcting batch effects in expression data.
- **Wireless communication:** capacity of large MIMO channels.
- **Machine learning:** weight-matrix spectra at neural-network initialization.

The cavity calculation we just did is the bedrock of all of these.

---

## 8. Course summary

Over twelve lectures we built up an arc:

1. **Topics 1–5.** From microcanonical counting to the Boltzmann distribution, to free energy, fluctuation-response, saddle-point/Legendre transforms, and mean-field theory.
2. **Topics 6–8.** Disordered systems: replica theory and the cavity method for the SK model. Connection to Bayesian inference and the meaning of replica symmetry breaking.
3. **Topics 9–12.** Random matrix theory: Stieltjes transforms, replicas and cavity for Wigner and Wishart, leading to the semicircle and Marchenko–Pastur laws.

The unifying mathematical theme has been **self-consistency**: in mean field, a single spin sees a field set by the average it itself produces; in spin glasses, replicas overlap with each other in a way that must be consistent across replicas; in random matrices, the Stieltjes transform satisfies $\\varepsilon = 1/(z - \\Sigma(\\varepsilon))$ where $\\Sigma$ is determined by the very quantity we are computing.

The unifying *physical* theme has been **emergent determinism from randomness in high dimensions**. As $N\\to\\infty$, fluctuations are washed out and a deterministic structure crystallizes — whether it's a phase transition in the Ising model, a sharp Edwards–Anderson order parameter in a spin glass, or a clean semicircular eigenvalue spectrum.

We've covered an enormous span of physics, math, statistics, and machine learning with one compact toolkit. The same arguments scale up directly into modern problems: high-dimensional inference, neural network theory, optimal estimation, dynamical systems on graphs, and beyond.

---

## 9. Summary of Topic 12

| Step | Result |
|---|---|
| Wishart matrix | $\\hat C = \\tfrac{1}{P}XX^T$, $X_{i\\mu}\\sim\\mathcal{N}(0,1)$, $\\alpha = P/N$ |
| Schur complement | $E_{11}^{-1} = M_{11} - \\vec m_{12}^T M_{22}^{-1}\\vec m_{21}$ |
| Independence | row 1 of $X$ is independent of cavity matrix |
| Quadratic form | $\\overline{A} \\to \\alpha^{-1}[z\\varepsilon - 1]$ |
| Self-consistency | $1/\\varepsilon = z - 1 + \\alpha^{-1} - \\alpha^{-1}z\\varepsilon$ |
| Solve quadratic | $\\alpha^{-1}z\\varepsilon^2 - (z+\\alpha^{-1}-1)\\varepsilon + 1 = 0$ |
| Marchenko–Pastur | $g(\\lambda) = \\tfrac{1}{2\\pi\\alpha^{-1}\\lambda}\\sqrt{(\\lambda_+ - \\lambda)(\\lambda - \\lambda_-)}$, $\\lambda_\\pm = (1\\pm 1/\\sqrt\\alpha)^2$ |

A fitting capstone for the course — the same cavity argument, applied once more, gives a result that today underlies a huge fraction of high-dimensional statistics and modern machine learning.

---

> *Thank you for following along. Statistical mechanics is, at its best, a unifying language: probability, information, and physics speaking the same dialect. The tools we've built — Boltzmann distributions, free energies, replicas, cavities — are not just historical curiosities. They are alive and at the cutting edge of how we understand high-dimensional data, complex systems, and the surprising emergence of order from randomness.*

---
`,ew=`*[coming soon]*

the parts linked below are my notes for the lectures of [appphys 229. statistical mechanics of learning and computation](https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&q=APPPHYS%20229:%20Statistical%20Mechanics%20of%20Learning%20and%20Computation&academicYear=20242025). they include what is covered on the course notes. i added further explanations in places where i felt i needed more context. i am taking this class at stanford in spring 2026.
`,tw=`*[coming soon]*

notes on signal processing for machine learning. i am taking this class at stanford in winter 2026.
`,nw=`*[coming soon]*

notes on hardware accelerators for machine learning. i am taking this class at stanford in winter 2026.
`,rw=`*[coming soon]*

notes on parallel computing. i took this class at stanford in fall 2025.
`,iw=`*[coming soon]*

notes on deep reinforcement learning. i took this class at stanford in spring 2025.
`,aw=`*[coming soon]*

notes on computational methods in applied mathematics. i took this class at stanford in winter 2025.
`,sw=`*[coming soon]*

notes on numerical linear algebra. i took this class at stanford in fall 2024.
`,ow=`*[coming soon]*

notes on optimization. i took this class at stanford in fall 2024.
`,lw="/assets/ankara_bombing-eb04be3e.png",uw="/assets/bosphorus-064671f7.jpg",cw="/assets/february_ankara-ce14771d.png",hw="/assets/january_bluemosque-a5a86a4e.png",dw="/assets/june_ataturk-e0beca76.png",mw="/assets/march_ankara-2bd234a6.png",pw="/assets/march_istanbul-3b1668de.png",fw="/assets/president_facetime-a4b028e4.png",gw="/assets/lecture1-notes-79ff52a9.pdf",vw="/assets/lecture2-notes-7ed6d739.pdf",yw="/assets/lecture3-notes-90d65a33.pdf",bw="/assets/lecture4-notes-09eb2933.pdf",$w="/assets/RepCavMes6-a553faf2.pdf",ww="/assets/Topic 1 Boltzmann.Distribution-01935cb8.pdf",xw="/assets/Topic 10.Replica.Method.Wigner-3bbfe458.pdf",_w="/assets/Topic 11 Cavity.Method.Wigner-9360dfdc.pdf",kw="/assets/Topic 12 Cavity.Method.Wishart-5ca74b5b.pdf",Sw="/assets/Topic 2 Entropy.LargeDeviations.FreeEnergy-2f2a5f4a.pdf",Iw="/assets/Topic 3 FreeEnergy.Cumulants-32e362f5.pdf",zw="/assets/Topic 4 SaddlePoints.LegendreTransforms-107df5c8.pdf",Tw="/assets/Topic 5 MeanFieldTheory.PhaseTransitions-ae97f8e3.pdf",Cw="/assets/Topic 6 ReplicaTheory.SpinGlasses-01d01223.pdf",Nw="/assets/Topic 7 Replica.Symmetric.Sol.SpinGlass-87a94e01.pdf",Ew="/assets/Topic 8 Cavity.Method.SpinGlasses-d002081f.pdf",Aw="/assets/Topic 9 Intro.RandomMatrixTheory-45e198e2.pdf",Bw="Intelligence Khollective",Mw="Knight-Hennessy Scholars at Stanford",qw=2025,Rw=9,Fw=3,Lw="Co-founder",jw="A KHeystone moonshot exploring how an artificial society could autonomously generate its own systems of knowledge and governance — from foundational mathematics to legal structures — publishing intermediate findings and running an interdisciplinary reading group.",Pw=["Active"],Dw={site:"https://knight-hennessy.stanford.edu/opportunities/intelligence-collective"},Ww={title:Bw,venue:Mw,year:qw,month:Rw,order:Fw,role:Lw,description:jw,tags:Pw,links:Dw},Ow="Cognitive Security Task Force",Gw="Stanford Institute for Human-Centered AI",Zw=2025,Hw=1,Vw=2,Jw="Co-Director",Xw="Research collective at Stanford HAI working on cognitive security — the integrity of human attention, perception, memory, and judgment in the age of AI. Brings together perspectives from industry, policy, academia, and defense to develop standards and safeguards for human decision-making, sensemaking, and learning.",Yw=["Active"],Uw={site:"https://www.cstf.dev/"},Qw={title:Ow,venue:Gw,year:Zw,month:Hw,order:Vw,role:Jw,description:Xw,tags:Yw,links:Uw},Kw="Stanford Turkish Student Association",ex="Stanford University",tx=2025,nx=9,rx=1,ix="President",ax="Leading the student organization for Turkish students and friends of Turkey at Stanford — community events, cultural programming, and connecting students with the broader Turkish community on campus and beyond.",sx=["Active"],ox={site:"https://stanford-turkish-student-association.github.io/home/"},lx={title:Kw,venue:ex,year:tx,month:nx,order:rx,role:ix,description:ax,tags:sx,links:ox},ux="data:application/json;base64,ewogICJ0aXRsZSI6ICJJbnRlbGxpZ2VuY2UgS2hvbGxlY3RpdmUiLAogICJ2ZW51ZSI6ICJLbmlnaHQtSGVubmVzc3kgU2Nob2xhcnMgYXQgU3RhbmZvcmQiLAogICJ5ZWFyIjogMjAyNSwKICAibW9udGgiOiA5LAogICJvcmRlciI6IDMsCiAgInJvbGUiOiAiQ28tZm91bmRlciIsCiAgImRlc2NyaXB0aW9uIjogIkEgS0hleXN0b25lIG1vb25zaG90IGV4cGxvcmluZyBob3cgYW4gYXJ0aWZpY2lhbCBzb2NpZXR5IGNvdWxkIGF1dG9ub21vdXNseSBnZW5lcmF0ZSBpdHMgb3duIHN5c3RlbXMgb2Yga25vd2xlZGdlIGFuZCBnb3Zlcm5hbmNlIFx1MjAxNCBmcm9tIGZvdW5kYXRpb25hbCBtYXRoZW1hdGljcyB0byBsZWdhbCBzdHJ1Y3R1cmVzIFx1MjAxNCBwdWJsaXNoaW5nIGludGVybWVkaWF0ZSBmaW5kaW5ncyBhbmQgcnVubmluZyBhbiBpbnRlcmRpc2NpcGxpbmFyeSByZWFkaW5nIGdyb3VwLiIsCiAgInRhZ3MiOiBbIkFjdGl2ZSJdLAogICJsaW5rcyI6IHsKICAgICJzaXRlIjogImh0dHBzOi8va25pZ2h0LWhlbm5lc3N5LnN0YW5mb3JkLmVkdS9vcHBvcnR1bml0aWVzL2ludGVsbGlnZW5jZS1jb2xsZWN0aXZlIgogIH0KfQo=",cx="data:application/json;base64,ewogICJ0aXRsZSI6ICJDb2duaXRpdmUgU2VjdXJpdHkgVGFzayBGb3JjZSIsCiAgInZlbnVlIjogIlN0YW5mb3JkIEluc3RpdHV0ZSBmb3IgSHVtYW4tQ2VudGVyZWQgQUkiLAogICJ5ZWFyIjogMjAyNSwKICAibW9udGgiOiAxLAogICJvcmRlciI6IDIsCiAgInJvbGUiOiAiQ28tRGlyZWN0b3IiLAogICJkZXNjcmlwdGlvbiI6ICJSZXNlYXJjaCBjb2xsZWN0aXZlIGF0IFN0YW5mb3JkIEhBSSB3b3JraW5nIG9uIGNvZ25pdGl2ZSBzZWN1cml0eSBcdTIwMTQgdGhlIGludGVncml0eSBvZiBodW1hbiBhdHRlbnRpb24sIHBlcmNlcHRpb24sIG1lbW9yeSwgYW5kIGp1ZGdtZW50IGluIHRoZSBhZ2Ugb2YgQUkuIEJyaW5ncyB0b2dldGhlciBwZXJzcGVjdGl2ZXMgZnJvbSBpbmR1c3RyeSwgcG9saWN5LCBhY2FkZW1pYSwgYW5kIGRlZmVuc2UgdG8gZGV2ZWxvcCBzdGFuZGFyZHMgYW5kIHNhZmVndWFyZHMgZm9yIGh1bWFuIGRlY2lzaW9uLW1ha2luZywgc2Vuc2VtYWtpbmcsIGFuZCBsZWFybmluZy4iLAogICJ0YWdzIjogWyJBY3RpdmUiXSwKICAibGlua3MiOiB7CiAgICAic2l0ZSI6ICJodHRwczovL3d3dy5jc3RmLmRldi8iCiAgfQp9Cg==",hx="data:application/json;base64,ewogICJ0aXRsZSI6ICJTdGFuZm9yZCBUdXJraXNoIFN0dWRlbnQgQXNzb2NpYXRpb24iLAogICJ2ZW51ZSI6ICJTdGFuZm9yZCBVbml2ZXJzaXR5IiwKICAieWVhciI6IDIwMjUsCiAgIm1vbnRoIjogOSwKICAib3JkZXIiOiAxLAogICJyb2xlIjogIlByZXNpZGVudCIsCiAgImRlc2NyaXB0aW9uIjogIkxlYWRpbmcgdGhlIHN0dWRlbnQgb3JnYW5pemF0aW9uIGZvciBUdXJraXNoIHN0dWRlbnRzIGFuZCBmcmllbmRzIG9mIFR1cmtleSBhdCBTdGFuZm9yZCBcdTIwMTQgY29tbXVuaXR5IGV2ZW50cywgY3VsdHVyYWwgcHJvZ3JhbW1pbmcsIGFuZCBjb25uZWN0aW5nIHN0dWRlbnRzIHdpdGggdGhlIGJyb2FkZXIgVHVya2lzaCBjb21tdW5pdHkgb24gY2FtcHVzIGFuZCBiZXlvbmQuIiwKICAidGFncyI6IFsiQWN0aXZlIl0sCiAgImxpbmtzIjogewogICAgInNpdGUiOiAiaHR0cHM6Ly9zdGFuZm9yZC10dXJraXNoLXN0dWRlbnQtYXNzb2NpYXRpb24uZ2l0aHViLmlvL2hvbWUvIgogIH0KfQo=",dx=Object.assign({"../assets/works/001_molochsbargain/abstract.json":Wb,"../assets/works/002_cognitivesecurity/abstract.json":Qb,"../assets/works/003_metaagents/abstract.json":l5,"../assets/works/004_costofpass/abstract.json":y5,"../assets/works/005_mechanisticgraph/abstract.json":T5,"../assets/works/006_fastermamba/abstract.json":L5,"../assets/works/007_videopretraining/abstract.json":J5,"../assets/works/008_guidedhypothesis/abstract.json":i$,"../assets/works/009_shortcuts/abstract.json":p$,"../assets/works/010_involutions/abstract.json":k$,"../assets/works/011_multiagentteams/abstract.json":M$,"../assets/works/012_bitextion/abstract.json":G$,"../assets/works/013_memoryrl/abstract.json":e6,"../assets/works/014_constituencyparsers/abstract.json":c6}),mx=Object.assign({"../assets/works/001_molochsbargain/abstract.json":h6,"../assets/works/002_cognitivesecurity/abstract.json":d6,"../assets/works/002_cognitivesecurity/cstf-poster.pdf":m6,"../assets/works/002_cognitivesecurity/paper_cstf_position.pdf":p6,"../assets/works/003_metaagents/abstract.json":f6,"../assets/works/003_metaagents/emnlp-poster.pdf":g6,"../assets/works/004_costofpass/abstract.json":v6,"../assets/works/004_costofpass/cost-of-pass-poster.pdf":y6,"../assets/works/005_mechanisticgraph/abstract.json":b6,"../assets/works/005_mechanisticgraph/towards-mechanistic.pdf":$6,"../assets/works/006_fastermamba/abstract.json":w6,"../assets/works/006_fastermamba/cs217-poster.pdf":x6,"../assets/works/006_fastermamba/paper_mambakernelproject.pdf":_6,"../assets/works/007_videopretraining/abstract.json":k6,"../assets/works/007_videopretraining/ee269-poster.pdf":S6,"../assets/works/007_videopretraining/paper_vptproject.pdf":I6,"../assets/works/008_guidedhypothesis/abstract.json":z6,"../assets/works/009_shortcuts/abstract.json":T6,"../assets/works/010_involutions/abstract.json":C6,"../assets/works/011_multiagentteams/abstract.json":N6,"../assets/works/012_bitextion/abstract.json":E6,"../assets/works/012_bitextion/bitextion.pdf":A6,"../assets/works/013_memoryrl/MemoryTraining.pdf":B6,"../assets/works/013_memoryrl/abstract.json":M6,"../assets/works/013_memoryrl/cs224r-poster.pdf":q6,"../assets/works/014_constituencyparsers/abstract.json":R6,"../assets/works/014_constituencyparsers/paper-comparative-analysis-of-constituency-parsers.pdf":F6}),px=Object.assign({"../assets/blog/001_influencingintelligentagents/abstract.json":H6,"../assets/blog/002_nightatcafeteria/abstract.json":t7,"../assets/blog/003_longhorizonalignment/abstract.json":c7,"../assets/blog/004_diffusionscoreflow/abstract.json":$7,"../assets/blog/005_statmech/abstract.json":N7}),fx=Object.assign({"../assets/blog/000_cynicaltake/content.md":E7,"../assets/blog/000_politicalcurr/content.md":A7,"../assets/blog/000_scientistai/content.md":B7,"../assets/blog/001_influencingintelligentagents/content.md":M7,"../assets/blog/002_nightatcafeteria/content.md":q7,"../assets/blog/003_longhorizonalignment/content.md":R7,"../assets/blog/004_diffusionscoreflow/content.md":F7,"../assets/blog/004_diffusionscoreflow/lecture1.md":L7,"../assets/blog/004_diffusionscoreflow/lecture2.md":j7,"../assets/blog/004_diffusionscoreflow/lecture3.md":P7,"../assets/blog/004_diffusionscoreflow/lecture4.md":D7,"../assets/blog/005_statmech/Topic_01_Boltzmann_Distribution.md":W7,"../assets/blog/005_statmech/Topic_02_Entropy_LargeDeviations_FreeEnergy.md":O7,"../assets/blog/005_statmech/Topic_03_FreeEnergy_Cumulants.md":G7,"../assets/blog/005_statmech/Topic_04_SaddlePoints_LegendreTransforms.md":Z7,"../assets/blog/005_statmech/Topic_05_MeanFieldTheory_PhaseTransitions.md":H7,"../assets/blog/005_statmech/Topic_06_ReplicaTheory_SpinGlasses.md":V7,"../assets/blog/005_statmech/Topic_07_ReplicaSymmetric_Solution.md":J7,"../assets/blog/005_statmech/Topic_08_CavityMethod_SpinGlasses.md":X7,"../assets/blog/005_statmech/Topic_09_RandomMatrixTheory.md":Y7,"../assets/blog/005_statmech/Topic_10_ReplicaMethod_Wigner.md":U7,"../assets/blog/005_statmech/Topic_11_CavityMethod_Wigner.md":Q7,"../assets/blog/005_statmech/Topic_12_CavityMethod_Wishart.md":K7,"../assets/blog/005_statmech/content.md":ew,"../assets/blog/006_signalprocessing/content.md":tw,"../assets/blog/007_hardwareaccelerators/content.md":nw,"../assets/blog/008_parallelcomputing/content.md":rw,"../assets/blog/009_deeprl/content.md":iw,"../assets/blog/010_appliedmath/content.md":aw,"../assets/blog/011_numericallinalg/content.md":sw,"../assets/blog/012_optimization/content.md":ow}),Sg=Object.assign({"../assets/blog/002_nightatcafeteria/ankara_bombing.png":lw,"../assets/blog/002_nightatcafeteria/bosphorus.jpg":uw,"../assets/blog/002_nightatcafeteria/february_ankara.png":cw,"../assets/blog/002_nightatcafeteria/january_bluemosque.png":hw,"../assets/blog/002_nightatcafeteria/june_ataturk.png":dw,"../assets/blog/002_nightatcafeteria/march_ankara.png":mw,"../assets/blog/002_nightatcafeteria/march_istanbul.png":pw,"../assets/blog/002_nightatcafeteria/president_facetime.png":fw,"../assets/blog/004_diffusionscoreflow/lecture1-notes.pdf":gw,"../assets/blog/004_diffusionscoreflow/lecture2-notes.pdf":vw,"../assets/blog/004_diffusionscoreflow/lecture3-notes.pdf":yw,"../assets/blog/004_diffusionscoreflow/lecture4-notes.pdf":bw,"../assets/blog/005_statmech/RepCavMes6.pdf":$w,"../assets/blog/005_statmech/Topic 1 Boltzmann.Distribution.pdf":ww,"../assets/blog/005_statmech/Topic 10.Replica.Method.Wigner.pdf":xw,"../assets/blog/005_statmech/Topic 11 Cavity.Method.Wigner.pdf":_w,"../assets/blog/005_statmech/Topic 12 Cavity.Method.Wishart.pdf":kw,"../assets/blog/005_statmech/Topic 2 Entropy.LargeDeviations.FreeEnergy.pdf":Sw,"../assets/blog/005_statmech/Topic 3 FreeEnergy.Cumulants.pdf":Iw,"../assets/blog/005_statmech/Topic 4 SaddlePoints.LegendreTransforms.pdf":zw,"../assets/blog/005_statmech/Topic 5 MeanFieldTheory.PhaseTransitions.pdf":Tw,"../assets/blog/005_statmech/Topic 6 ReplicaTheory.SpinGlasses.pdf":Cw,"../assets/blog/005_statmech/Topic 7 Replica.Symmetric.Sol.SpinGlass.pdf":Nw,"../assets/blog/005_statmech/Topic 8 Cavity.Method.SpinGlasses.pdf":Ew,"../assets/blog/005_statmech/Topic 9 Intro.RandomMatrixTheory.pdf":Aw}),gx=Object.assign({"../assets/organizations/001_intelligencekhollective/abstract.json":Ww,"../assets/organizations/002_cognitivesecuritytaskforce/abstract.json":Qw,"../assets/organizations/004_stanfordturkishstudentassociation/abstract.json":lx}),vx=Object.assign({"../assets/organizations/001_intelligencekhollective/abstract.json":ux,"../assets/organizations/002_cognitivesecuritytaskforce/abstract.json":cx,"../assets/organizations/004_stanfordturkishstudentassociation/abstract.json":hx}),yx=e=>{const t=e.split("/");return t[t.length-2]},Ig=e=>/^(https?:|mailto:)/.test(e),L0={works:mx,organizations:vx,blog:Sg},zg=(e,t)=>{if(!t)return;const n=`../assets/blog/${e}/${t}`;return fx[n]},bx=(e,t,n={})=>{const r={};for(const[i,a]of Object.entries(n)){if(!a)continue;if(Ig(a)){r[i]=a;continue}const s=a.match(/^([a-z]+)\/([^/]+)\/(.+)$/);if(s){const[,u,h,c]=s,m=L0[u]||{},f=`../assets/${u}/${h}/${c}`;if(m[f]){r[i]=m[f];continue}}const o=L0[e]||{},l=`../assets/${e}/${t}/${a}`;r[i]=o[l]||a}return r},j0=(e,t,n)=>{if(!n||Ig(n))return n;const r=L0[e]||{},i=`../assets/${e}/${t}/${n}`;return r[i]||n},ch=(e,t)=>Object.entries(e).map(([n,r])=>{const i=yx(n);return{id:i,...r,image:j0(t,i,r.image),images:Array.isArray(r.images)?r.images.map(a=>j0(t,i,a)):void 0,links:bx(t,i,r.links)}}).sort((n,r)=>{const i=n.order??1/0,a=r.order??1/0;return i!==a?i-a:r.year!==n.year?r.year-n.year:(r.month||0)-(n.month||0)}),Tg=ch(dx,"works"),$x=e=>{const t={},n=`../assets/blog/${e}/`;for(const[r,i]of Object.entries(Sg))r.startsWith(n)&&(t[r.slice(n.length)]=i);return t},wx=(e,t)=>{if(Array.isArray(t))return t.map(n=>!n||!n.id?null:{...n,body:zg(e,n.content),notes:j0("blog",e,n.notes)}).filter(Boolean)},eo=ch(px,"blog").map(e=>({...e,body:zg(e.id,e.content),assets:$x(e.id),parts:wx(e.id,e.parts)})),xx=ch(gx,"organizations"),_x=e=>{const t=[],n=new Map;for(const r of e){const i=r.area||"Other";n.has(i)||(n.set(i,[]),t.push(i)),n.get(i).push(r)}return t.map(r=>({title:r,projects:n.get(r)}))};_x(Tg);const kx=e=>typeof e.title=="string"&&e.title.toLowerCase().startsWith("notes"),Sx=()=>{if(eo.length===0)return B.jsx("p",{className:"font-mono text-[12px] text-neutral-400 uppercase tracking-[0.18em]",children:"Coming soon."});const e=eo.findIndex(kx);return B.jsx("ul",{className:"space-y-0",children:eo.map((t,n)=>{const r=!!t.body,i=B.jsx("h2",{className:"text-[14.5px] font-medium leading-snug tracking-tight text-neutral-900 group-hover:underline decoration-neutral-900 underline-offset-[3px]",children:t.title}),s=e>0&&n===e?"py-4 mt-10 border-t border-transparent":"py-4 border-t border-neutral-100 first:border-t-0";return B.jsx("li",{className:s,children:r?B.jsx(Ro,{to:`/blog/${t.id}`,className:"group block",children:B.jsxs("div",{className:"flex justify-between items-baseline gap-4",children:[i,B.jsx("span",{className:"font-mono text-[11px] text-neutral-400 shrink-0 tabular-nums",children:t.date})]})}):B.jsxs("div",{className:"flex justify-between items-baseline gap-4",children:[i,B.jsx("span",{className:"font-mono text-[11px] text-neutral-400 shrink-0 tabular-nums",children:t.date})]})},t.id)})})};function hm(e){const t=[],n=String(e||"");let r=n.indexOf(","),i=0,a=!1;for(;!a;){r===-1&&(r=n.length,a=!0);const s=n.slice(i,r).trim();(s||!a)&&t.push(s),i=r+1,r=n.indexOf(",",i)}return t}function Ix(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const zx=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Tx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Cx={};function dm(e,t){return((t||Cx).jsx?Tx:zx).test(e)}const Nx=/[ \t\n\f\r]/g;function Ex(e){return typeof e=="object"?e.type==="text"?mm(e.value):!1:mm(e)}function mm(e){return e.replace(Nx,"")===""}class Ka{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ka.prototype.normal={};Ka.prototype.property={};Ka.prototype.space=void 0;function Cg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ka(n,r,t)}function Oa(e){return e.toLowerCase()}class Tt{constructor(t,n){this.attribute=n,this.property=t}}Tt.prototype.attribute="";Tt.prototype.booleanish=!1;Tt.prototype.boolean=!1;Tt.prototype.commaOrSpaceSeparated=!1;Tt.prototype.commaSeparated=!1;Tt.prototype.defined=!1;Tt.prototype.mustUseProperty=!1;Tt.prototype.number=!1;Tt.prototype.overloadedBoolean=!1;Tt.prototype.property="";Tt.prototype.spaceSeparated=!1;Tt.prototype.space=void 0;let Ax=0;const ue=Vr(),Oe=Vr(),P0=Vr(),O=Vr(),Ie=Vr(),xi=Vr(),Et=Vr();function Vr(){return 2**++Ax}const D0=Object.freeze(Object.defineProperty({__proto__:null,boolean:ue,booleanish:Oe,commaOrSpaceSeparated:Et,commaSeparated:xi,number:O,overloadedBoolean:P0,spaceSeparated:Ie},Symbol.toStringTag,{value:"Module"})),uu=Object.keys(D0);class hh extends Tt{constructor(t,n,r,i){let a=-1;if(super(t,n),pm(this,"space",i),typeof r=="number")for(;++a<uu.length;){const s=uu[a];pm(this,uu[a],(r&D0[s])===D0[s])}}}hh.prototype.defined=!0;function pm(e,t,n){n&&(e[t]=n)}function Pi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const a=new hh(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Oa(r)]=r,n[Oa(a.attribute)]=r}return new Ka(t,n,e.space)}const Ng=Pi({properties:{ariaActiveDescendant:null,ariaAtomic:Oe,ariaAutoComplete:null,ariaBusy:Oe,ariaChecked:Oe,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:Ie,ariaCurrent:null,ariaDescribedBy:Ie,ariaDetails:null,ariaDisabled:Oe,ariaDropEffect:Ie,ariaErrorMessage:null,ariaExpanded:Oe,ariaFlowTo:Ie,ariaGrabbed:Oe,ariaHasPopup:null,ariaHidden:Oe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ie,ariaLevel:O,ariaLive:null,ariaModal:Oe,ariaMultiLine:Oe,ariaMultiSelectable:Oe,ariaOrientation:null,ariaOwns:Ie,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:Oe,ariaReadOnly:Oe,ariaRelevant:null,ariaRequired:Oe,ariaRoleDescription:Ie,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:Oe,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Eg(e,t){return t in e?e[t]:t}function Ag(e,t){return Eg(e,t.toLowerCase())}const Bx=Pi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:xi,acceptCharset:Ie,accessKey:Ie,action:null,allow:null,allowFullScreen:ue,allowPaymentRequest:ue,allowUserMedia:ue,alt:null,as:null,async:ue,autoCapitalize:null,autoComplete:Ie,autoFocus:ue,autoPlay:ue,blocking:Ie,capture:null,charSet:null,checked:ue,cite:null,className:Ie,cols:O,colSpan:null,content:null,contentEditable:Oe,controls:ue,controlsList:Ie,coords:O|xi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ue,defer:ue,dir:null,dirName:null,disabled:ue,download:P0,draggable:Oe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ue,formTarget:null,headers:Ie,height:O,hidden:P0,high:O,href:null,hrefLang:null,htmlFor:Ie,httpEquiv:Ie,id:null,imageSizes:null,imageSrcSet:null,inert:ue,inputMode:null,integrity:null,is:null,isMap:ue,itemId:null,itemProp:Ie,itemRef:Ie,itemScope:ue,itemType:Ie,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ue,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:ue,muted:ue,name:null,nonce:null,noModule:ue,noValidate:ue,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ue,optimum:O,pattern:null,ping:Ie,placeholder:null,playsInline:ue,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ue,referrerPolicy:null,rel:Ie,required:ue,reversed:ue,rows:O,rowSpan:O,sandbox:Ie,scope:null,scoped:ue,seamless:ue,selected:ue,shadowRootClonable:ue,shadowRootDelegatesFocus:ue,shadowRootMode:null,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:Oe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:ue,useMap:null,value:Oe,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ie,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ue,declare:ue,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:ue,noHref:ue,noShade:ue,noWrap:ue,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:Oe,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ue,disableRemotePlayback:ue,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:Ag}),Mx=Pi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Et,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:Ie,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:ue,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:xi,g2:xi,glyphName:xi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:Et,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ie,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Et,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Et,rev:Et,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Et,requiredFeatures:Et,requiredFonts:Et,requiredFormats:Et,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:Et,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Et,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Et,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Eg}),Bg=Pi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Mg=Pi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ag}),qg=Pi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),qx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Rx=/[A-Z]/g,fm=/-[a-z]/g,Fx=/^data[-\w.:]+$/i;function Rg(e,t){const n=Oa(t);let r=t,i=Tt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Fx.test(t)){if(t.charAt(4)==="-"){const a=t.slice(5).replace(fm,jx);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=t.slice(4);if(!fm.test(a)){let s=a.replace(Rx,Lx);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=hh}return new i(r,t)}function Lx(e){return"-"+e.toLowerCase()}function jx(e){return e.charAt(1).toUpperCase()}const Fg=Cg([Ng,Bx,Bg,Mg,qg],"html"),ml=Cg([Ng,Mx,Bg,Mg,qg],"svg");function gm(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function Px(e){return e.join(" ").trim()}var dh={},vm=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Dx=/\n/g,Wx=/^\s*/,Ox=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Gx=/^:\s*/,Zx=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Hx=/^[;\s]*/,Vx=/^\s+|\s+$/g,Jx=`
`,ym="/",bm="*",Er="",Xx="comment",Yx="declaration";function Ux(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var $=y.match(Dx);$&&(n+=$.length);var I=y.lastIndexOf(Jx);r=~I?y.length-I:r+y.length}function a(){var y={line:n,column:r};return function($){return $.position=new s(y),u(),$}}function s(y){this.start=y,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function o(y){var $=new Error(t.source+":"+n+":"+r+": "+y);if($.reason=y,$.filename=t.source,$.line=n,$.column=r,$.source=e,!t.silent)throw $}function l(y){var $=y.exec(e);if($){var I=$[0];return i(I),e=e.slice(I.length),$}}function u(){l(Wx)}function h(y){var $;for(y=y||[];$=c();)$!==!1&&y.push($);return y}function c(){var y=a();if(!(ym!=e.charAt(0)||bm!=e.charAt(1))){for(var $=2;Er!=e.charAt($)&&(bm!=e.charAt($)||ym!=e.charAt($+1));)++$;if($+=2,Er===e.charAt($-1))return o("End of comment missing");var I=e.slice(2,$-2);return r+=2,i(I),e=e.slice($),r+=2,y({type:Xx,comment:I})}}function m(){var y=a(),$=l(Ox);if($){if(c(),!l(Gx))return o("property missing ':'");var I=l(Zx),b=y({type:Yx,property:$m($[0].replace(vm,Er)),value:I?$m(I[0].replace(vm,Er)):Er});return l(Hx),b}}function f(){var y=[];h(y);for(var $;$=m();)$!==!1&&(y.push($),h(y));return y}return u(),f()}function $m(e){return e?e.replace(Vx,Er):Er}var Qx=Ux,Kx=ao&&ao.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dh,"__esModule",{value:!0});dh.default=t8;const e8=Kx(Qx);function t8(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,e8.default)(e),i=typeof t=="function";return r.forEach(a=>{if(a.type!=="declaration")return;const{property:s,value:o}=a;i?t(s,o,a):o&&(n=n||{},n[s]=o)}),n}var pl={};Object.defineProperty(pl,"__esModule",{value:!0});pl.camelCase=void 0;var n8=/^--[a-zA-Z0-9_-]+$/,r8=/-([a-z])/g,i8=/^[^-]+$/,a8=/^-(webkit|moz|ms|o|khtml)-/,s8=/^-(ms)-/,o8=function(e){return!e||i8.test(e)||n8.test(e)},l8=function(e,t){return t.toUpperCase()},wm=function(e,t){return"".concat(t,"-")},u8=function(e,t){return t===void 0&&(t={}),o8(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(s8,wm):e=e.replace(a8,wm),e.replace(r8,l8))};pl.camelCase=u8;var c8=ao&&ao.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},h8=c8(dh),d8=pl;function W0(e,t){var n={};return!e||typeof e!="string"||(0,h8.default)(e,function(r,i){r&&i&&(n[(0,d8.camelCase)(r,t)]=i)}),n}W0.default=W0;var m8=W0;const p8=mc(m8),Lg=jg("end"),mh=jg("start");function jg(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function f8(e){const t=mh(e),n=Lg(e);if(t&&n)return{start:t,end:n}}function $a(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?xm(e.position):"start"in e||"end"in e?xm(e):"line"in e||"column"in e?O0(e):""}function O0(e){return _m(e&&e.line)+":"+_m(e&&e.column)}function xm(e){return O0(e&&e.start)+"-"+O0(e&&e.end)}function _m(e){return e&&typeof e=="number"?e:1}class ct extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},s=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(s=!0,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?a.ruleId=r:(a.source=r.slice(0,l),a.ruleId=r.slice(l+1))}if(!a.place&&a.ancestors&&a.ancestors){const l=a.ancestors[a.ancestors.length-1];l&&(a.place=l.position)}const o=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=$a(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=s&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ct.prototype.file="";ct.prototype.name="";ct.prototype.reason="";ct.prototype.message="";ct.prototype.stack="";ct.prototype.column=void 0;ct.prototype.line=void 0;ct.prototype.ancestors=void 0;ct.prototype.cause=void 0;ct.prototype.fatal=void 0;ct.prototype.place=void 0;ct.prototype.ruleId=void 0;ct.prototype.source=void 0;const ph={}.hasOwnProperty,g8=new Map,v8=/[A-Z]/g,y8=new Set(["table","tbody","thead","tfoot","tr"]),b8=new Set(["td","th"]),Pg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function $8(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=T8(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=z8(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?ml:Fg,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Dg(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Dg(e,t,n){if(t.type==="element")return w8(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return x8(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return k8(e,t,n);if(t.type==="mdxjsEsm")return _8(e,t);if(t.type==="root")return S8(e,t,n);if(t.type==="text")return I8(e,t)}function w8(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=ml,e.schema=i),e.ancestors.push(t);const a=Og(e,t.tagName,!1),s=C8(e,t);let o=gh(e,t);return y8.has(t.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!Ex(l):!0})),Wg(e,s,a,t),fh(s,o),e.ancestors.pop(),e.schema=r,e.create(t,a,s,n)}function x8(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ga(e,t.position)}function _8(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ga(e,t.position)}function k8(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=ml,e.schema=i),e.ancestors.push(t);const a=t.name===null?e.Fragment:Og(e,t.name,!0),s=N8(e,t),o=gh(e,t);return Wg(e,s,a,t),fh(s,o),e.ancestors.pop(),e.schema=r,e.create(t,a,s,n)}function S8(e,t,n){const r={};return fh(r,gh(e,t)),e.create(t,e.Fragment,r,n)}function I8(e,t){return t.value}function Wg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function fh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function z8(e,t,n){return r;function r(i,a,s,o){const u=Array.isArray(s.children)?n:t;return o?u(a,s,o):u(a,s)}}function T8(e,t){return n;function n(r,i,a,s){const o=Array.isArray(a.children),l=mh(r);return t(i,a,s,o,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function C8(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&ph.call(t.properties,i)){const a=E8(e,i,t.properties[i]);if(a){const[s,o]=a;e.tableCellAlignToStyle&&s==="align"&&typeof o=="string"&&b8.has(t.tagName)?r=o:n[s]=o}}if(r){const a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function N8(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const s=a.expression;s.type;const o=s.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else Ga(e,t.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,a=e.evaluater.evaluateExpression(o.expression)}else Ga(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function gh(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:g8;for(;++r<t.children.length;){const a=t.children[r];let s;if(e.passKeys){const l=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(l){const u=i.get(l)||0;s=l+"-"+u,i.set(l,u+1)}}const o=Dg(e,a,s);o!==void 0&&n.push(o)}return n}function E8(e,t,n){const r=Rg(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ix(n):Px(n)),r.property==="style"){let i=typeof n=="object"?n:A8(e,String(n));return e.stylePropertyNameCase==="css"&&(i=B8(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?qx[r.property]||r.property:r.attribute,n]}}function A8(e,t){try{return p8(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ct("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Pg+"#cannot-parse-style-attribute",i}}function Og(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let a=-1,s;for(;++a<i.length;){const o=dm(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};s=s?{type:"MemberExpression",object:s,property:o,computed:!!(a&&o.type==="Literal"),optional:!1}:o}r=s}else r=dm(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return ph.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ga(e)}function Ga(e,t){const n=new ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Pg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function B8(e){const t={};let n;for(n in e)ph.call(e,n)&&(t[M8(n)]=e[n]);return t}function M8(e){let t=e.replace(v8,q8);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function q8(e){return"-"+e.toLowerCase()}const cu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},R8={};function vh(e,t){const n=t||R8,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Gg(e,r,i)}function Gg(e,t,n){if(F8(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return km(e.children,t,n)}return Array.isArray(e)?km(e,t,n):""}function km(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Gg(e[i],t,n);return r.join("")}function F8(e){return!!(e&&typeof e=="object")}const Sm=document.createElement("i");function yh(e){const t="&"+e+";";Sm.innerHTML=t;const n=Sm.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function qt(e,t,n,r){const i=e.length;let a=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);a<r.length;)s=r.slice(a,a+1e4),s.unshift(t,0),e.splice(...s),a+=1e4,t+=1e4}function Zt(e,t){return e.length>0?(qt(e,e.length,0,t),e):t}const Im={}.hasOwnProperty;function Zg(e){const t={};let n=-1;for(;++n<e.length;)L8(t,e[n]);return t}function L8(e,t){let n;for(n in t){const i=(Im.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n];let s;if(a)for(s in a){Im.call(i,s)||(i[s]=[]);const o=a[s];j8(i[s],Array.isArray(o)?o:o?[o]:[])}}}function j8(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);qt(e,0,0,r)}function Hg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function on(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const pt=wr(/[A-Za-z]/),ot=wr(/[\dA-Za-z]/),P8=wr(/[#-'*+\--9=?A-Z^-~]/);function Fo(e){return e!==null&&(e<32||e===127)}const G0=wr(/\d/),D8=wr(/[\dA-Fa-f]/),W8=wr(/[!-/:-@[-`{-~]/);function K(e){return e!==null&&e<-2}function ke(e){return e!==null&&(e<0||e===32)}function me(e){return e===-2||e===-1||e===32}const fl=wr(/\p{P}|\p{S}/u),Wr=wr(/\s/);function wr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Di(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const a=e.charCodeAt(n);let s="";if(a===37&&ot(e.charCodeAt(n+1))&&ot(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(s=String.fromCharCode(a));else if(a>55295&&a<57344){const o=e.charCodeAt(n+1);a<56320&&o>56319&&o<57344?(s=String.fromCharCode(a,o),i=1):s="�"}else s=String.fromCharCode(a);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function de(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return s;function s(l){return me(l)?(e.enter(n),o(l)):t(l)}function o(l){return me(l)&&a++<i?(e.consume(l),o):(e.exit(n),t(l))}}const O8={tokenize:G8};function G8(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),de(e,t,"linePrefix")}function i(o){return e.enter("paragraph"),a(o)}function a(o){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(o)}function s(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return K(o)?(e.consume(o),e.exit("chunkText"),a):(e.consume(o),s)}}const Z8={tokenize:H8},zm={tokenize:V8};function H8(e){const t=this,n=[];let r=0,i,a,s;return o;function o(x){if(r<n.length){const N=n[r];return t.containerState=N[1],e.attempt(N[0].continuation,l,u)(x)}return u(x)}function l(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();const N=t.events.length;let A=N,T;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){T=t.events[A][1].end;break}b(r);let M=N;for(;M<t.events.length;)t.events[M][1].end={...T},M++;return qt(t.events,A+1,0,t.events.slice(N)),t.events.length=M,u(x)}return o(x)}function u(x){if(r===n.length){if(!i)return m(x);if(i.currentConstruct&&i.currentConstruct.concrete)return y(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(zm,h,c)(x)}function h(x){return i&&v(),b(r),m(x)}function c(x){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,y(x)}function m(x){return t.containerState={},e.attempt(zm,f,y)(x)}function f(x){return r++,n.push([t.currentConstruct,t.containerState]),m(x)}function y(x){if(x===null){i&&v(),b(0),e.consume(x);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),$(x)}function $(x){if(x===null){I(e.exit("chunkFlow"),!0),b(0),e.consume(x);return}return K(x)?(e.consume(x),I(e.exit("chunkFlow")),r=0,t.interrupt=void 0,o):(e.consume(x),$)}function I(x,N){const A=t.sliceStream(x);if(N&&A.push(null),x.previous=a,a&&(a.next=x),a=x,i.defineSkip(x.start),i.write(A),t.parser.lazy[x.start.line]){let T=i.events.length;for(;T--;)if(i.events[T][1].start.offset<s&&(!i.events[T][1].end||i.events[T][1].end.offset>s))return;const M=t.events.length;let R=M,j,E;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){if(j){E=t.events[R][1].end;break}j=!0}for(b(r),T=M;T<t.events.length;)t.events[T][1].end={...E},T++;qt(t.events,R+1,0,t.events.slice(M)),t.events.length=T}}function b(x){let N=n.length;for(;N-- >x;){const A=n[N];t.containerState=A[1],A[0].exit.call(t,e)}n.length=x}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function V8(e,t,n){return de(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ai(e){if(e===null||ke(e)||Wr(e))return 1;if(fl(e))return 2}function gl(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}const Z0={name:"attention",resolveAll:J8,tokenize:X8};function J8(e,t){let n=-1,r,i,a,s,o,l,u,h;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},m={...e[n][1].start};Tm(c,-l),Tm(m,l),s={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},o={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},a={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...o.end}},e[r][1].end={...s.start},e[n][1].start={...o.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Zt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Zt(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",a,t]]),u=Zt(u,gl(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Zt(u,[["exit",a,t],["enter",o,t],["exit",o,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(h=2,u=Zt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):h=0,qt(e,r-1,n-r+3,u),n=r+u.length-h-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function X8(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ai(r);let a;return s;function s(l){return a=l,e.enter("attentionSequence"),o(l)}function o(l){if(l===a)return e.consume(l),o;const u=e.exit("attentionSequence"),h=Ai(l),c=!h||h===2&&i||n.includes(l),m=!i||i===2&&h||n.includes(r);return u._open=!!(a===42?c:c&&(i||!m)),u._close=!!(a===42?m:m&&(h||!c)),t(l)}}function Tm(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Y8={name:"autolink",tokenize:U8};function U8(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(f){return pt(f)?(e.consume(f),s):f===64?n(f):u(f)}function s(f){return f===43||f===45||f===46||ot(f)?(r=1,o(f)):u(f)}function o(f){return f===58?(e.consume(f),r=0,l):(f===43||f===45||f===46||ot(f))&&r++<32?(e.consume(f),o):(r=0,u(f))}function l(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||Fo(f)?n(f):(e.consume(f),l)}function u(f){return f===64?(e.consume(f),h):P8(f)?(e.consume(f),u):n(f)}function h(f){return ot(f)?c(f):n(f)}function c(f){return f===46?(e.consume(f),r=0,h):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):m(f)}function m(f){if((f===45||ot(f))&&r++<63){const y=f===45?m:c;return e.consume(f),y}return n(f)}}const es={partial:!0,tokenize:Q8};function Q8(e,t,n){return r;function r(a){return me(a)?de(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||K(a)?t(a):n(a)}}const Vg={continuation:{tokenize:e9},exit:t9,name:"blockQuote",tokenize:K8};function K8(e,t,n){const r=this;return i;function i(s){if(s===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),a}return n(s)}function a(s){return me(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function e9(e,t,n){const r=this;return i;function i(s){return me(s)?de(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):a(s)}function a(s){return e.attempt(Vg,t,n)(s)}}function t9(e){e.exit("blockQuote")}const Jg={name:"characterEscape",tokenize:n9};function n9(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return W8(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}const Xg={name:"characterReference",tokenize:r9};function r9(e,t,n){const r=this;let i=0,a,s;return o;function o(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,s=ot,h(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,s=D8,h):(e.enter("characterReferenceValue"),a=7,s=G0,h(c))}function h(c){if(c===59&&i){const m=e.exit("characterReferenceValue");return s===ot&&!yh(r.sliceSerialize(m))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(c)&&i++<a?(e.consume(c),h):n(c)}}const Cm={partial:!0,tokenize:a9},Nm={concrete:!0,name:"codeFenced",tokenize:i9};function i9(e,t,n){const r=this,i={partial:!0,tokenize:A};let a=0,s=0,o;return l;function l(T){return u(T)}function u(T){const M=r.events[r.events.length-1];return a=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,o=T,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(T)}function h(T){return T===o?(s++,e.consume(T),h):s<3?n(T):(e.exit("codeFencedFenceSequence"),me(T)?de(e,c,"whitespace")(T):c(T))}function c(T){return T===null||K(T)?(e.exit("codeFencedFence"),r.interrupt?t(T):e.check(Cm,$,N)(T)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(T))}function m(T){return T===null||K(T)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(T)):me(T)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),de(e,f,"whitespace")(T)):T===96&&T===o?n(T):(e.consume(T),m)}function f(T){return T===null||K(T)?c(T):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(T))}function y(T){return T===null||K(T)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(T)):T===96&&T===o?n(T):(e.consume(T),y)}function $(T){return e.attempt(i,N,I)(T)}function I(T){return e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),b}function b(T){return a>0&&me(T)?de(e,v,"linePrefix",a+1)(T):v(T)}function v(T){return T===null||K(T)?e.check(Cm,$,N)(T):(e.enter("codeFlowValue"),x(T))}function x(T){return T===null||K(T)?(e.exit("codeFlowValue"),v(T)):(e.consume(T),x)}function N(T){return e.exit("codeFenced"),t(T)}function A(T,M,R){let j=0;return E;function E(ie){return T.enter("lineEnding"),T.consume(ie),T.exit("lineEnding"),Z}function Z(ie){return T.enter("codeFencedFence"),me(ie)?de(T,X,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ie):X(ie)}function X(ie){return ie===o?(T.enter("codeFencedFenceSequence"),oe(ie)):R(ie)}function oe(ie){return ie===o?(j++,T.consume(ie),oe):j>=s?(T.exit("codeFencedFenceSequence"),me(ie)?de(T,le,"whitespace")(ie):le(ie)):R(ie)}function le(ie){return ie===null||K(ie)?(T.exit("codeFencedFence"),M(ie)):R(ie)}}}function a9(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),a)}function a(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const hu={name:"codeIndented",tokenize:o9},s9={partial:!0,tokenize:l9};function o9(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),de(e,a,"linePrefix",4+1)(u)}function a(u){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):K(u)?e.attempt(s9,s,l)(u):(e.enter("codeFlowValue"),o(u))}function o(u){return u===null||K(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),o)}function l(u){return e.exit("codeIndented"),t(u)}}function l9(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):K(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):de(e,a,"linePrefix",4+1)(s)}function a(s){const o=r.events[r.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(s):K(s)?i(s):n(s)}}const u9={name:"codeText",previous:h9,resolve:c9,tokenize:d9};function c9(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function h9(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function d9(e,t,n){let r=0,i,a;return s;function s(c){return e.enter("codeText"),e.enter("codeTextSequence"),o(c)}function o(c){return c===96?(e.consume(c),r++,o):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(a=e.enter("codeTextSequence"),i=0,h(c)):K(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||K(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function h(c){return c===96?(e.consume(c),i++,h):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(a.type="codeTextData",u(c))}}class m9{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ia(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ia(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ia(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ia(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ia(this.left,n.reverse())}}}function ia(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Yg(e){const t={};let n=-1,r,i,a,s,o,l,u;const h=new m9(e);for(;++n<h.length;){for(;n in t;)n=t[n];if(r=h.get(n),n&&r[1].type==="chunkFlow"&&h.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,a=0,a<l.length&&l[a][1].type==="lineEndingBlank"&&(a+=2),a<l.length&&l[a][1].type==="content"))for(;++a<l.length&&l[a][1].type!=="content";)l[a][1].type==="chunkText"&&(l[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,p9(h,n)),n=t[n],u=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(s=h.get(a),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(h.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=a);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...h.get(i)[1].start},o=h.slice(i,n),o.unshift(r),h.splice(i,n-i+1,o))}}return qt(e,0,Number.POSITIVE_INFINITY,h.slice(0)),!u}function p9(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const a=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const o=s.events,l=[],u={};let h,c,m=-1,f=n,y=0,$=0;const I=[$];for(;f;){for(;e.get(++i)[1]!==f;);a.push(i),f._tokenizer||(h=r.sliceStream(f),f.next||h.push(null),c&&s.defineSkip(f.start),f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(h),f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),c=f,f=f.next}for(f=n;++m<o.length;)o[m][0]==="exit"&&o[m-1][0]==="enter"&&o[m][1].type===o[m-1][1].type&&o[m][1].start.line!==o[m][1].end.line&&($=m+1,I.push($),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(s.events=[],f?(f._tokenizer=void 0,f.previous=void 0):I.pop(),m=I.length;m--;){const b=o.slice(I[m],I[m+1]),v=a.pop();l.push([v,v+b.length-1]),e.splice(v,2,b)}for(l.reverse(),m=-1;++m<l.length;)u[y+l[m][0]]=y+l[m][1],y+=l[m][1]-l[m][0]-1;return u}const f9={resolve:v9,tokenize:y9},g9={partial:!0,tokenize:b9};function v9(e){return Yg(e),e}function y9(e,t){let n;return r;function r(o){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?a(o):K(o)?e.check(g9,s,a)(o):(e.consume(o),i)}function a(o){return e.exit("chunkContent"),e.exit("content"),t(o)}function s(o){return e.consume(o),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function b9(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),de(e,a,"linePrefix")}function a(s){if(s===null||K(s))return n(s);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function Ug(e,t,n,r,i,a,s,o,l){const u=l||Number.POSITIVE_INFINITY;let h=0;return c;function c(b){return b===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(b),e.exit(a),m):b===null||b===32||b===41||Fo(b)?n(b):(e.enter(r),e.enter(s),e.enter(o),e.enter("chunkString",{contentType:"string"}),$(b))}function m(b){return b===62?(e.enter(a),e.consume(b),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(o),e.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===62?(e.exit("chunkString"),e.exit(o),m(b)):b===null||b===60||K(b)?n(b):(e.consume(b),b===92?y:f)}function y(b){return b===60||b===62||b===92?(e.consume(b),f):f(b)}function $(b){return!h&&(b===null||b===41||ke(b))?(e.exit("chunkString"),e.exit(o),e.exit(s),e.exit(r),t(b)):h<u&&b===40?(e.consume(b),h++,$):b===41?(e.consume(b),h--,$):b===null||b===32||b===40||Fo(b)?n(b):(e.consume(b),b===92?I:$)}function I(b){return b===40||b===41||b===92?(e.consume(b),$):$(b)}}function Qg(e,t,n,r,i,a){const s=this;let o=0,l;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(a),h}function h(f){return o>999||f===null||f===91||f===93&&!l||f===94&&!o&&"_hiddenFootnoteSupport"in s.parser.constructs?n(f):f===93?(e.exit(a),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):K(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===null||f===91||f===93||K(f)||o++>999?(e.exit("chunkString"),h(f)):(e.consume(f),l||(l=!me(f)),f===92?m:c)}function m(f){return f===91||f===92||f===93?(e.consume(f),o++,c):c(f)}}function Kg(e,t,n,r,i,a){let s;return o;function o(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),s=m===40?41:m,l):n(m)}function l(m){return m===s?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(a),u(m))}function u(m){return m===s?(e.exit(a),l(s)):m===null?n(m):K(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),de(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===s||m===null||K(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?c:h)}function c(m){return m===s||m===92?(e.consume(m),h):h(m)}}function wa(e,t){let n;return r;function r(i){return K(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):me(i)?de(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const $9={name:"definition",tokenize:x9},w9={partial:!0,tokenize:_9};function x9(e,t,n){const r=this;let i;return a;function a(f){return e.enter("definition"),s(f)}function s(f){return Qg.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function o(f){return i=on(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),l):n(f)}function l(f){return ke(f)?wa(e,u)(f):u(f)}function u(f){return Ug(e,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function h(f){return e.attempt(w9,c,c)(f)}function c(f){return me(f)?de(e,m,"whitespace")(f):m(f)}function m(f){return f===null||K(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function _9(e,t,n){return r;function r(o){return ke(o)?wa(e,i)(o):n(o)}function i(o){return Kg(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function a(o){return me(o)?de(e,s,"whitespace")(o):s(o)}function s(o){return o===null||K(o)?t(o):n(o)}}const k9={name:"hardBreakEscape",tokenize:S9};function S9(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return K(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}const I9={name:"headingAtx",resolve:z9,tokenize:T9};function z9(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},qt(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function T9(e,t,n){let r=0;return i;function i(h){return e.enter("atxHeading"),a(h)}function a(h){return e.enter("atxHeadingSequence"),s(h)}function s(h){return h===35&&r++<6?(e.consume(h),s):h===null||ke(h)?(e.exit("atxHeadingSequence"),o(h)):n(h)}function o(h){return h===35?(e.enter("atxHeadingSequence"),l(h)):h===null||K(h)?(e.exit("atxHeading"),t(h)):me(h)?de(e,o,"whitespace")(h):(e.enter("atxHeadingText"),u(h))}function l(h){return h===35?(e.consume(h),l):(e.exit("atxHeadingSequence"),o(h))}function u(h){return h===null||h===35||ke(h)?(e.exit("atxHeadingText"),o(h)):(e.consume(h),u)}}const C9=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Em=["pre","script","style","textarea"],N9={concrete:!0,name:"htmlFlow",resolveTo:B9,tokenize:M9},E9={partial:!0,tokenize:R9},A9={partial:!0,tokenize:q9};function B9(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function M9(e,t,n){const r=this;let i,a,s,o,l;return u;function u(z){return h(z)}function h(z){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(z),c}function c(z){return z===33?(e.consume(z),m):z===47?(e.consume(z),a=!0,$):z===63?(e.consume(z),i=3,r.interrupt?t:_):pt(z)?(e.consume(z),s=String.fromCharCode(z),I):n(z)}function m(z){return z===45?(e.consume(z),i=2,f):z===91?(e.consume(z),i=5,o=0,y):pt(z)?(e.consume(z),i=4,r.interrupt?t:_):n(z)}function f(z){return z===45?(e.consume(z),r.interrupt?t:_):n(z)}function y(z){const Ne="CDATA[";return z===Ne.charCodeAt(o++)?(e.consume(z),o===Ne.length?r.interrupt?t:X:y):n(z)}function $(z){return pt(z)?(e.consume(z),s=String.fromCharCode(z),I):n(z)}function I(z){if(z===null||z===47||z===62||ke(z)){const Ne=z===47,$t=s.toLowerCase();return!Ne&&!a&&Em.includes($t)?(i=1,r.interrupt?t(z):X(z)):C9.includes(s.toLowerCase())?(i=6,Ne?(e.consume(z),b):r.interrupt?t(z):X(z)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(z):a?v(z):x(z))}return z===45||ot(z)?(e.consume(z),s+=String.fromCharCode(z),I):n(z)}function b(z){return z===62?(e.consume(z),r.interrupt?t:X):n(z)}function v(z){return me(z)?(e.consume(z),v):E(z)}function x(z){return z===47?(e.consume(z),E):z===58||z===95||pt(z)?(e.consume(z),N):me(z)?(e.consume(z),x):E(z)}function N(z){return z===45||z===46||z===58||z===95||ot(z)?(e.consume(z),N):A(z)}function A(z){return z===61?(e.consume(z),T):me(z)?(e.consume(z),A):x(z)}function T(z){return z===null||z===60||z===61||z===62||z===96?n(z):z===34||z===39?(e.consume(z),l=z,M):me(z)?(e.consume(z),T):R(z)}function M(z){return z===l?(e.consume(z),l=null,j):z===null||K(z)?n(z):(e.consume(z),M)}function R(z){return z===null||z===34||z===39||z===47||z===60||z===61||z===62||z===96||ke(z)?A(z):(e.consume(z),R)}function j(z){return z===47||z===62||me(z)?x(z):n(z)}function E(z){return z===62?(e.consume(z),Z):n(z)}function Z(z){return z===null||K(z)?X(z):me(z)?(e.consume(z),Z):n(z)}function X(z){return z===45&&i===2?(e.consume(z),be):z===60&&i===1?(e.consume(z),we):z===62&&i===4?(e.consume(z),se):z===63&&i===3?(e.consume(z),_):z===93&&i===5?(e.consume(z),ee):K(z)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(E9,fe,oe)(z)):z===null||K(z)?(e.exit("htmlFlowData"),oe(z)):(e.consume(z),X)}function oe(z){return e.check(A9,le,fe)(z)}function le(z){return e.enter("lineEnding"),e.consume(z),e.exit("lineEnding"),ie}function ie(z){return z===null||K(z)?oe(z):(e.enter("htmlFlowData"),X(z))}function be(z){return z===45?(e.consume(z),_):X(z)}function we(z){return z===47?(e.consume(z),s="",H):X(z)}function H(z){if(z===62){const Ne=s.toLowerCase();return Em.includes(Ne)?(e.consume(z),se):X(z)}return pt(z)&&s.length<8?(e.consume(z),s+=String.fromCharCode(z),H):X(z)}function ee(z){return z===93?(e.consume(z),_):X(z)}function _(z){return z===62?(e.consume(z),se):z===45&&i===2?(e.consume(z),_):X(z)}function se(z){return z===null||K(z)?(e.exit("htmlFlowData"),fe(z)):(e.consume(z),se)}function fe(z){return e.exit("htmlFlow"),t(z)}}function q9(e,t,n){const r=this;return i;function i(s){return K(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),a):n(s)}function a(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function R9(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(es,t,n)}}const F9={name:"htmlText",tokenize:L9};function L9(e,t,n){const r=this;let i,a,s;return o;function o(_){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(_),l}function l(_){return _===33?(e.consume(_),u):_===47?(e.consume(_),A):_===63?(e.consume(_),x):pt(_)?(e.consume(_),R):n(_)}function u(_){return _===45?(e.consume(_),h):_===91?(e.consume(_),a=0,y):pt(_)?(e.consume(_),v):n(_)}function h(_){return _===45?(e.consume(_),f):n(_)}function c(_){return _===null?n(_):_===45?(e.consume(_),m):K(_)?(s=c,we(_)):(e.consume(_),c)}function m(_){return _===45?(e.consume(_),f):c(_)}function f(_){return _===62?be(_):_===45?m(_):c(_)}function y(_){const se="CDATA[";return _===se.charCodeAt(a++)?(e.consume(_),a===se.length?$:y):n(_)}function $(_){return _===null?n(_):_===93?(e.consume(_),I):K(_)?(s=$,we(_)):(e.consume(_),$)}function I(_){return _===93?(e.consume(_),b):$(_)}function b(_){return _===62?be(_):_===93?(e.consume(_),b):$(_)}function v(_){return _===null||_===62?be(_):K(_)?(s=v,we(_)):(e.consume(_),v)}function x(_){return _===null?n(_):_===63?(e.consume(_),N):K(_)?(s=x,we(_)):(e.consume(_),x)}function N(_){return _===62?be(_):x(_)}function A(_){return pt(_)?(e.consume(_),T):n(_)}function T(_){return _===45||ot(_)?(e.consume(_),T):M(_)}function M(_){return K(_)?(s=M,we(_)):me(_)?(e.consume(_),M):be(_)}function R(_){return _===45||ot(_)?(e.consume(_),R):_===47||_===62||ke(_)?j(_):n(_)}function j(_){return _===47?(e.consume(_),be):_===58||_===95||pt(_)?(e.consume(_),E):K(_)?(s=j,we(_)):me(_)?(e.consume(_),j):be(_)}function E(_){return _===45||_===46||_===58||_===95||ot(_)?(e.consume(_),E):Z(_)}function Z(_){return _===61?(e.consume(_),X):K(_)?(s=Z,we(_)):me(_)?(e.consume(_),Z):j(_)}function X(_){return _===null||_===60||_===61||_===62||_===96?n(_):_===34||_===39?(e.consume(_),i=_,oe):K(_)?(s=X,we(_)):me(_)?(e.consume(_),X):(e.consume(_),le)}function oe(_){return _===i?(e.consume(_),i=void 0,ie):_===null?n(_):K(_)?(s=oe,we(_)):(e.consume(_),oe)}function le(_){return _===null||_===34||_===39||_===60||_===61||_===96?n(_):_===47||_===62||ke(_)?j(_):(e.consume(_),le)}function ie(_){return _===47||_===62||ke(_)?j(_):n(_)}function be(_){return _===62?(e.consume(_),e.exit("htmlTextData"),e.exit("htmlText"),t):n(_)}function we(_){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),H}function H(_){return me(_)?de(e,ee,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):ee(_)}function ee(_){return e.enter("htmlTextData"),s(_)}}const bh={name:"labelEnd",resolveAll:W9,resolveTo:O9,tokenize:G9},j9={tokenize:Z9},P9={tokenize:H9},D9={tokenize:V9};function W9(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&qt(e,0,e.length,n),e}function O9(e,t){let n=e.length,r=0,i,a,s,o;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const l={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[s][1].end}},h={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[s-2][1].start}};return o=[["enter",l,t],["enter",u,t]],o=Zt(o,e.slice(a+1,a+r+3)),o=Zt(o,[["enter",h,t]]),o=Zt(o,gl(t.parser.constructs.insideSpan.null,e.slice(a+r+4,s-3),t)),o=Zt(o,[["exit",h,t],e[s-2],e[s-1],["exit",u,t]]),o=Zt(o,e.slice(s+1)),o=Zt(o,[["exit",l,t]]),qt(e,a,e.length,o),e}function G9(e,t,n){const r=this;let i=r.events.length,a,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return o;function o(m){return a?a._inactive?c(m):(s=r.parser.defined.includes(on(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),l):n(m)}function l(m){return m===40?e.attempt(j9,h,s?h:c)(m):m===91?e.attempt(P9,h,s?u:c)(m):s?h(m):c(m)}function u(m){return e.attempt(D9,h,c)(m)}function h(m){return t(m)}function c(m){return a._balanced=!0,n(m)}}function Z9(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return ke(c)?wa(e,a)(c):a(c)}function a(c){return c===41?h(c):Ug(e,s,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function s(c){return ke(c)?wa(e,l)(c):h(c)}function o(c){return n(c)}function l(c){return c===34||c===39||c===40?Kg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):h(c)}function u(c){return ke(c)?wa(e,h)(c):h(c)}function h(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function H9(e,t,n){const r=this;return i;function i(o){return Qg.call(r,e,a,s,"reference","referenceMarker","referenceString")(o)}function a(o){return r.parser.defined.includes(on(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(o):n(o)}function s(o){return n(o)}}function V9(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}const J9={name:"labelStartImage",resolveAll:bh.resolveAll,tokenize:X9};function X9(e,t,n){const r=this;return i;function i(o){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(o),e.exit("labelImageMarker"),a}function a(o){return o===91?(e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelImage"),s):n(o)}function s(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Y9={name:"labelStartLink",resolveAll:bh.resolveAll,tokenize:U9};function U9(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),a}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const du={name:"lineEnding",tokenize:Q9};function Q9(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),de(e,t,"linePrefix")}}const to={name:"thematicBreak",tokenize:K9};function K9(e,t,n){let r=0,i;return a;function a(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,o(u)}function o(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||K(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),me(u)?de(e,o,"whitespace")(u):o(u))}}const wt={continuation:{tokenize:r_},exit:a_,name:"list",tokenize:n_},e_={partial:!0,tokenize:s_},t_={partial:!0,tokenize:i_};function n_(e,t,n){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return o;function o(f){const y=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:G0(f)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(to,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(f)}return n(f)}function l(f){return G0(f)&&++s<10?(e.consume(f),l):(!r.interrupt||s<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(es,r.interrupt?n:h,e.attempt(e_,m,c))}function h(f){return r.containerState.initialBlankLine=!0,a++,m(f)}function c(f){return me(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),m):n(f)}function m(f){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function r_(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(es,i,a);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,de(e,t,"listItemIndent",r.containerState.size+1)(o)}function a(o){return r.containerState.furtherBlankLines||!me(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(t_,t,s)(o))}function s(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,de(e,e.attempt(wt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function i_(e,t,n){const r=this;return de(e,i,"listItemIndent",r.containerState.size+1);function i(a){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(a):n(a)}}function a_(e){e.exit(this.containerState.type)}function s_(e,t,n){const r=this;return de(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(a){const s=r.events[r.events.length-1];return!me(a)&&s&&s[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}const Am={name:"setextUnderline",resolveTo:o_,tokenize:l_};function o_(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",s,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function l_(e,t,n){const r=this;let i;return a;function a(u){let h=r.events.length,c;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){c=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===i?(e.consume(u),o):(e.exit("setextHeadingLineSequence"),me(u)?de(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||K(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const u_={tokenize:c_};function c_(e){const t=this,n=e.attempt(es,r,e.attempt(this.parser.constructs.flowInitial,i,de(e,e.attempt(this.parser.constructs.flow,i,e.attempt(f9,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const h_={resolveAll:t2()},d_=e2("string"),m_=e2("text");function e2(e){return{resolveAll:t2(e==="text"?p_:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],a=n.attempt(i,s,o);return s;function s(h){return u(h)?a(h):o(h)}function o(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),l}function l(h){return u(h)?(n.exit("data"),a(h)):(n.consume(h),l)}function u(h){if(h===null)return!0;const c=i[h];let m=-1;if(c)for(;++m<c.length;){const f=c[m];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function t2(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function p_(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let a=i.length,s=-1,o=0,l;for(;a--;){const u=i[a];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)o++,s--;if(s)break;s=-1}else if(u===-2)l=!0,o++;else if(u!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(o=0),o){const u={type:n===e.length||l||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?s:r.start._bufferIndex+s,_index:r.start._index+a,line:r.end.line,column:r.end.column-o,offset:r.end.offset-o},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const f_={42:wt,43:wt,45:wt,48:wt,49:wt,50:wt,51:wt,52:wt,53:wt,54:wt,55:wt,56:wt,57:wt,62:Vg},g_={91:$9},v_={[-2]:hu,[-1]:hu,32:hu},y_={35:I9,42:to,45:[Am,to],60:N9,61:Am,95:to,96:Nm,126:Nm},b_={38:Xg,92:Jg},$_={[-5]:du,[-4]:du,[-3]:du,33:J9,38:Xg,42:Z0,60:[Y8,F9],91:Y9,92:[k9,Jg],93:bh,95:Z0,96:u9},w_={null:[Z0,h_]},x_={null:[42,95]},__={null:[]},k_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:x_,contentInitial:g_,disable:__,document:f_,flow:y_,flowInitial:v_,insideSpan:w_,string:b_,text:$_},Symbol.toStringTag,{value:"Module"}));function S_(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},a=[];let s=[],o=[];const l={attempt:M(A),check:M(T),consume:v,enter:x,exit:N,interrupt:M(T,{interrupt:!0})},u={code:null,containerState:{},defineSkip:$,events:[],now:y,parser:e,previous:null,sliceSerialize:m,sliceStream:f,write:c};let h=t.tokenize.call(u,l);return t.resolveAll&&a.push(t),u;function c(Z){return s=Zt(s,Z),I(),s[s.length-1]!==null?[]:(R(t,0),u.events=gl(a,u.events,u),u.events)}function m(Z,X){return z_(f(Z),X)}function f(Z){return I_(s,Z)}function y(){const{_bufferIndex:Z,_index:X,line:oe,column:le,offset:ie}=r;return{_bufferIndex:Z,_index:X,line:oe,column:le,offset:ie}}function $(Z){i[Z.line]=Z.column,E()}function I(){let Z;for(;r._index<s.length;){const X=s[r._index];if(typeof X=="string")for(Z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===Z&&r._bufferIndex<X.length;)b(X.charCodeAt(r._bufferIndex));else b(X)}}function b(Z){h=h(Z)}function v(Z){K(Z)?(r.line++,r.column=1,r.offset+=Z===-3?2:1,E()):Z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=Z}function x(Z,X){const oe=X||{};return oe.type=Z,oe.start=y(),u.events.push(["enter",oe,u]),o.push(oe),oe}function N(Z){const X=o.pop();return X.end=y(),u.events.push(["exit",X,u]),X}function A(Z,X){R(Z,X.from)}function T(Z,X){X.restore()}function M(Z,X){return oe;function oe(le,ie,be){let we,H,ee,_;return Array.isArray(le)?fe(le):"tokenize"in le?fe([le]):se(le);function se(xe){return et;function et(Qt){const Ct=Qt!==null&&xe[Qt],_n=Qt!==null&&xe.null,_r=[...Array.isArray(Ct)?Ct:Ct?[Ct]:[],...Array.isArray(_n)?_n:_n?[_n]:[]];return fe(_r)(Qt)}}function fe(xe){return we=xe,H=0,xe.length===0?be:z(xe[H])}function z(xe){return et;function et(Qt){return _=j(),ee=xe,xe.partial||(u.currentConstruct=xe),xe.name&&u.parser.constructs.disable.null.includes(xe.name)?$t():xe.tokenize.call(X?Object.assign(Object.create(u),X):u,l,Ne,$t)(Qt)}}function Ne(xe){return Z(ee,_),ie}function $t(xe){return _.restore(),++H<we.length?z(we[H]):be}}}function R(Z,X){Z.resolveAll&&!a.includes(Z)&&a.push(Z),Z.resolve&&qt(u.events,X,u.events.length-X,Z.resolve(u.events.slice(X),u)),Z.resolveTo&&(u.events=Z.resolveTo(u.events,u))}function j(){const Z=y(),X=u.previous,oe=u.currentConstruct,le=u.events.length,ie=Array.from(o);return{from:le,restore:be};function be(){r=Z,u.previous=X,u.currentConstruct=oe,u.events.length=le,o=ie,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function I_(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,a)];else{if(s=e.slice(n,i),r>-1){const o=s[0];typeof o=="string"?s[0]=o.slice(r):s.shift()}a>0&&s.push(e[i].slice(0,a))}return s}function z_(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const a=e[n];let s;if(typeof a=="string")s=a;else switch(a){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(a)}i=a===-2,r.push(s)}return r.join("")}function T_(e){const r={constructs:Zg([k_,...(e||{}).extensions||[]]),content:i(O8),defined:[],document:i(Z8),flow:i(u_),lazy:{},string:i(d_),text:i(m_)};return r;function i(a){return s;function s(o){return S_(r,a,o)}}}function C_(e){for(;!Yg(e););return e}const Bm=/[\0\t\n\r]/g;function N_(){let e=1,t="",n=!0,r;return i;function i(a,s,o){const l=[];let u,h,c,m,f;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(s||void 0).decode(a)),c=0,t="",n&&(a.charCodeAt(0)===65279&&c++,n=void 0);c<a.length;){if(Bm.lastIndex=c,u=Bm.exec(a),m=u&&u.index!==void 0?u.index:a.length,f=a.charCodeAt(m),!u){t=a.slice(c);break}if(f===10&&c===m&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),c<m&&(l.push(a.slice(c,m)),e+=m-c),f){case 0:{l.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,l.push(-2);e++<h;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}c=m+1}return o&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const E_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function A_(e){return e.replace(E_,B_)}function B_(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),a=i===120||i===88;return Hg(n.slice(a?2:1),a?16:10)}return yh(n)||e}const n2={}.hasOwnProperty;function M_(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),q_(n)(C_(T_(n).document().write(N_()(e,t,!0))))}function q_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Hi),autolinkProtocol:j,autolinkEmail:j,atxHeading:a(ss),blockQuote:a(_n),characterEscape:j,characterReference:j,codeFenced:a(_r),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:a(_r,s),codeText:a(as,s),codeTextData:j,data:j,codeFlowValue:j,definition:a(Yr),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:a(Ur),hardBreakEscape:a(os),hardBreakTrailing:a(os),htmlFlow:a(ls,s),htmlFlowData:j,htmlText:a(ls,s),htmlTextData:j,image:a(us),label:s,link:a(Hi),listItem:a(Al),listItemValue:m,listOrdered:a(kr,c),listUnordered:a(kr),paragraph:a(Bl),reference:z,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:a(ss),strong:a(Vi),thematicBreak:a(hs)},exit:{atxHeading:l(),atxHeadingSequence:A,autolink:l(),autolinkEmail:Ct,autolinkProtocol:Qt,blockQuote:l(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:$t,characterReferenceMarkerNumeric:$t,characterReferenceValue:xe,characterReference:et,codeFenced:l(I),codeFencedFence:$,codeFencedFenceInfo:f,codeFencedFenceMeta:y,codeFlowValue:E,codeIndented:l(b),codeText:l(ie),codeTextData:E,data:E,definition:l(),definitionDestinationString:N,definitionLabelString:v,definitionTitleString:x,emphasis:l(),hardBreakEscape:l(X),hardBreakTrailing:l(X),htmlFlow:l(oe),htmlFlowData:E,htmlText:l(le),htmlTextData:E,image:l(we),label:ee,labelText:H,lineEnding:Z,link:l(be),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Ne,resourceDestinationString:_,resourceTitleString:se,resource:fe,setextHeading:l(R),setextHeadingLineSequence:M,setextHeadingText:T,strong:l(),thematicBreak:l()}};r2(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(q){let J={type:"root",children:[]};const ne={stack:[J],tokenStack:[],config:t,enter:o,exit:u,buffer:s,resume:h,data:n},he=[];let _e=-1;for(;++_e<q.length;)if(q[_e][1].type==="listOrdered"||q[_e][1].type==="listUnordered")if(q[_e][0]==="enter")he.push(_e);else{const Kt=he.pop();_e=i(q,Kt,_e)}for(_e=-1;++_e<q.length;){const Kt=t[q[_e][0]];n2.call(Kt,q[_e][1].type)&&Kt[q[_e][1].type].call(Object.assign({sliceSerialize:q[_e][2].sliceSerialize},ne),q[_e][1])}if(ne.tokenStack.length>0){const Kt=ne.tokenStack[ne.tokenStack.length-1];(Kt[1]||Mm).call(ne,void 0,Kt[0])}for(J.position={start:Hn(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:Hn(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)J=t.transforms[_e](J)||J;return J}function i(q,J,ne){let he=J-1,_e=-1,Kt=!1,Sr,kn,Ji,Xi;for(;++he<=ne;){const Nt=q[he];switch(Nt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Nt[0]==="enter"?_e++:_e--,Xi=void 0;break}case"lineEndingBlank":{Nt[0]==="enter"&&(Sr&&!Xi&&!_e&&!Ji&&(Ji=he),Xi=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Xi=void 0}if(!_e&&Nt[0]==="enter"&&Nt[1].type==="listItemPrefix"||_e===-1&&Nt[0]==="exit"&&(Nt[1].type==="listUnordered"||Nt[1].type==="listOrdered")){if(Sr){let Qr=he;for(kn=void 0;Qr--;){const Sn=q[Qr];if(Sn[1].type==="lineEnding"||Sn[1].type==="lineEndingBlank"){if(Sn[0]==="exit")continue;kn&&(q[kn][1].type="lineEndingBlank",Kt=!0),Sn[1].type="lineEnding",kn=Qr}else if(!(Sn[1].type==="linePrefix"||Sn[1].type==="blockQuotePrefix"||Sn[1].type==="blockQuotePrefixWhitespace"||Sn[1].type==="blockQuoteMarker"||Sn[1].type==="listItemIndent"))break}Ji&&(!kn||Ji<kn)&&(Sr._spread=!0),Sr.end=Object.assign({},kn?q[kn][1].start:Nt[1].end),q.splice(kn||he,0,["exit",Sr,Nt[2]]),he++,ne++}if(Nt[1].type==="listItemPrefix"){const Qr={type:"listItem",_spread:!1,start:Object.assign({},Nt[1].start),end:void 0};Sr=Qr,q.splice(he,0,["enter",Qr,Nt[2]]),he++,ne++,Ji=void 0,Xi=!0}}}return q[J][1]._spread=Kt,ne}function a(q,J){return ne;function ne(he){o.call(this,q(he),he),J&&J.call(this,he)}}function s(){this.stack.push({type:"fragment",children:[]})}function o(q,J,ne){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([J,ne||void 0]),q.position={start:Hn(J.start),end:void 0}}function l(q){return J;function J(ne){q&&q.call(this,ne),u.call(this,ne)}}function u(q,J){const ne=this.stack.pop(),he=this.tokenStack.pop();if(he)he[0].type!==q.type&&(J?J.call(this,q,he[0]):(he[1]||Mm).call(this,q,he[0]));else throw new Error("Cannot close `"+q.type+"` ("+$a({start:q.start,end:q.end})+"): it’s not open");ne.position.end=Hn(q.end)}function h(){return vh(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function m(q){if(this.data.expectingFirstListItemValue){const J=this.stack[this.stack.length-2];J.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function f(){const q=this.resume(),J=this.stack[this.stack.length-1];J.lang=q}function y(){const q=this.resume(),J=this.stack[this.stack.length-1];J.meta=q}function $(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function I(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function b(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q.replace(/(\r?\n|\r)$/g,"")}function v(q){const J=this.resume(),ne=this.stack[this.stack.length-1];ne.label=J,ne.identifier=on(this.sliceSerialize(q)).toLowerCase()}function x(){const q=this.resume(),J=this.stack[this.stack.length-1];J.title=q}function N(){const q=this.resume(),J=this.stack[this.stack.length-1];J.url=q}function A(q){const J=this.stack[this.stack.length-1];if(!J.depth){const ne=this.sliceSerialize(q).length;J.depth=ne}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function M(q){const J=this.stack[this.stack.length-1];J.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function j(q){const ne=this.stack[this.stack.length-1].children;let he=ne[ne.length-1];(!he||he.type!=="text")&&(he=cs(),he.position={start:Hn(q.start),end:void 0},ne.push(he)),this.stack.push(he)}function E(q){const J=this.stack.pop();J.value+=this.sliceSerialize(q),J.position.end=Hn(q.end)}function Z(q){const J=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ne=J.children[J.children.length-1];ne.position.end=Hn(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(J.type)&&(j.call(this,q),E.call(this,q))}function X(){this.data.atHardBreak=!0}function oe(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q}function le(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q}function ie(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q}function be(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=J,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function we(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=J,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function H(q){const J=this.sliceSerialize(q),ne=this.stack[this.stack.length-2];ne.label=A_(J),ne.identifier=on(J).toLowerCase()}function ee(){const q=this.stack[this.stack.length-1],J=this.resume(),ne=this.stack[this.stack.length-1];if(this.data.inReference=!0,ne.type==="link"){const he=q.children;ne.children=he}else ne.alt=J}function _(){const q=this.resume(),J=this.stack[this.stack.length-1];J.url=q}function se(){const q=this.resume(),J=this.stack[this.stack.length-1];J.title=q}function fe(){this.data.inReference=void 0}function z(){this.data.referenceType="collapsed"}function Ne(q){const J=this.resume(),ne=this.stack[this.stack.length-1];ne.label=J,ne.identifier=on(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function $t(q){this.data.characterReferenceType=q.type}function xe(q){const J=this.sliceSerialize(q),ne=this.data.characterReferenceType;let he;ne?(he=Hg(J,ne==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):he=yh(J);const _e=this.stack[this.stack.length-1];_e.value+=he}function et(q){const J=this.stack.pop();J.position.end=Hn(q.end)}function Qt(q){E.call(this,q);const J=this.stack[this.stack.length-1];J.url=this.sliceSerialize(q)}function Ct(q){E.call(this,q);const J=this.stack[this.stack.length-1];J.url="mailto:"+this.sliceSerialize(q)}function _n(){return{type:"blockquote",children:[]}}function _r(){return{type:"code",lang:null,meta:null,value:""}}function as(){return{type:"inlineCode",value:""}}function Yr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ur(){return{type:"emphasis",children:[]}}function ss(){return{type:"heading",depth:0,children:[]}}function os(){return{type:"break"}}function ls(){return{type:"html",value:""}}function us(){return{type:"image",title:null,url:"",alt:null}}function Hi(){return{type:"link",title:null,url:"",children:[]}}function kr(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Al(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function Bl(){return{type:"paragraph",children:[]}}function Vi(){return{type:"strong",children:[]}}function cs(){return{type:"text",value:""}}function hs(){return{type:"thematicBreak"}}}function Hn(e){return{line:e.line,column:e.column,offset:e.offset}}function r2(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?r2(e,r):R_(e,r)}}function R_(e,t){let n;for(n in t)if(n2.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Mm(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+$a({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+$a({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+$a({start:t.start,end:t.end})+") is still open")}function F_(e){const t=this;t.parser=n;function n(r){return M_(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function L_(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function j_(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function P_(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function D_(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function W_(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function O_(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Di(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let s,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=a+1,o+=1,e.footnoteCounts.set(r,o);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function G_(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Z_(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function i2(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function H_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return i2(e,t);const i={src:Di(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function V_(e,t){const n={src:Di(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function J_(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function X_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return i2(e,t);const i={href:Di(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Y_(e,t){const n={href:Di(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function U_(e,t,n){const r=e.all(t),i=n?Q_(n):a2(t),a={},s=[];if(typeof t.checked=="boolean"){const h=r[0];let c;h&&h.type==="element"&&h.tagName==="p"?c=h:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const h=r[o];(i||o!==0||h.type!=="element"||h.tagName!=="p")&&s.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!i?s.push(...h.children):s.push(h)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:a,children:s};return e.patch(t,u),e.applyData(t,u)}function Q_(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=a2(n[r])}return t}function a2(e){const t=e.spread;return t??e.children.length>1}function K_(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function ek(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function tk(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function nk(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function rk(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=mh(t.children[1]),l=Lg(t.children[t.children.length-1]);o&&l&&(s.position={start:o,end:l}),i.push(s)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function ik(e,t,n){const r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,o=s?s.length:t.children.length;let l=-1;const u=[];for(;++l<o;){const c=t.children[l],m={},f=s?s[l]:void 0;f&&(m.align=f);let y={type:"element",tagName:a,properties:m,children:[]};c&&(y.children=e.all(c),e.patch(c,y),y=e.applyData(c,y)),u.push(y)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,h),e.applyData(t,h)}function ak(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const qm=9,Rm=32;function sk(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const a=[];for(;r;)a.push(Fm(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Fm(t.slice(i),i>0,!1)),a.join("")}function Fm(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===qm||a===Rm;)r++,a=e.codePointAt(r)}if(n){let a=e.codePointAt(i-1);for(;a===qm||a===Rm;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function ok(e,t){const n={type:"text",value:sk(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function lk(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const uk={blockquote:L_,break:j_,code:P_,delete:D_,emphasis:W_,footnoteReference:O_,heading:G_,html:Z_,imageReference:H_,image:V_,inlineCode:J_,linkReference:X_,link:Y_,listItem:U_,list:K_,paragraph:ek,root:tk,strong:nk,table:rk,tableCell:ak,tableRow:ik,text:ok,thematicBreak:lk,toml:Cs,yaml:Cs,definition:Cs,footnoteDefinition:Cs};function Cs(){}const s2=-1,vl=0,xa=1,Lo=2,$h=3,wh=4,xh=5,_h=6,o2=7,l2=8,Lm=typeof self=="object"?self:globalThis,ck=(e,t)=>{const n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,s]=t[i];switch(a){case vl:case s2:return n(s,i);case xa:{const o=n([],i);for(const l of s)o.push(r(l));return o}case Lo:{const o=n({},i);for(const[l,u]of s)o[r(l)]=r(u);return o}case $h:return n(new Date(s),i);case wh:{const{source:o,flags:l}=s;return n(new RegExp(o,l),i)}case xh:{const o=n(new Map,i);for(const[l,u]of s)o.set(r(l),r(u));return o}case _h:{const o=n(new Set,i);for(const l of s)o.add(r(l));return o}case o2:{const{name:o,message:l}=s;return n(new Lm[o](l),i)}case l2:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:o}=new Uint8Array(s);return n(new DataView(o),s)}}return n(new Lm[a](s),i)};return r},jm=e=>ck(new Map,e)(0),ei="",{toString:hk}={},{keys:dk}=Object,aa=e=>{const t=typeof e;if(t!=="object"||!e)return[vl,t];const n=hk.call(e).slice(8,-1);switch(n){case"Array":return[xa,ei];case"Object":return[Lo,ei];case"Date":return[$h,ei];case"RegExp":return[wh,ei];case"Map":return[xh,ei];case"Set":return[_h,ei];case"DataView":return[xa,n]}return n.includes("Array")?[xa,n]:n.includes("Error")?[o2,n]:[Lo,n]},Ns=([e,t])=>e===vl&&(t==="function"||t==="symbol"),mk=(e,t,n,r)=>{const i=(s,o)=>{const l=r.push(s)-1;return n.set(o,l),l},a=s=>{if(n.has(s))return n.get(s);let[o,l]=aa(s);switch(o){case vl:{let h=s;switch(l){case"bigint":o=l2,h=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);h=null;break;case"undefined":return i([s2],s)}return i([o,h],s)}case xa:{if(l){let m=s;return l==="DataView"?m=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(m=new Uint8Array(s)),i([l,[...m]],s)}const h=[],c=i([o,h],s);for(const m of s)h.push(a(m));return c}case Lo:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(t&&"toJSON"in s)return a(s.toJSON());const h=[],c=i([o,h],s);for(const m of dk(s))(e||!Ns(aa(s[m])))&&h.push([a(m),a(s[m])]);return c}case $h:return i([o,s.toISOString()],s);case wh:{const{source:h,flags:c}=s;return i([o,{source:h,flags:c}],s)}case xh:{const h=[],c=i([o,h],s);for(const[m,f]of s)(e||!(Ns(aa(m))||Ns(aa(f))))&&h.push([a(m),a(f)]);return c}case _h:{const h=[],c=i([o,h],s);for(const m of s)(e||!Ns(aa(m)))&&h.push(a(m));return c}}const{message:u}=s;return i([o,{name:l,message:u}],s)};return a},Pm=(e,{json:t,lossy:n}={})=>{const r=[];return mk(!(t||n),!!t,new Map,r)(e),r},jo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?jm(Pm(e,t)):structuredClone(e):(e,t)=>jm(Pm(e,t));function pk(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function fk(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function gk(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||pk,r=e.options.footnoteBackLabel||fk,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const h=e.all(u),c=String(u.identifier).toUpperCase(),m=Di(c.toLowerCase());let f=0;const y=[],$=e.footnoteCounts.get(c);for(;$!==void 0&&++f<=$;){y.length>0&&y.push({type:"text",value:" "});let v=typeof n=="string"?n:n(l,f);typeof v=="string"&&(v={type:"text",value:v}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,f),className:["data-footnote-backref"]},children:Array.isArray(v)?v:[v]})}const I=h[h.length-1];if(I&&I.type==="element"&&I.tagName==="p"){const v=I.children[I.children.length-1];v&&v.type==="text"?v.value+=" ":I.children.push({type:"text",value:" "}),I.children.push(...y)}else h.push(...y);const b={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(h,!0)};e.patch(u,b),o.push(b)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...jo(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const ts=function(e){if(e==null)return $k;if(typeof e=="function")return yl(e);if(typeof e=="object")return Array.isArray(e)?vk(e):yk(e);if(typeof e=="string")return bk(e);throw new Error("Expected function, string, or object as test")};function vk(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ts(e[n]);return yl(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return!0;return!1}}function yk(e){const t=e;return yl(n);function n(r){const i=r;let a;for(a in e)if(i[a]!==t[a])return!1;return!0}}function bk(e){return yl(t);function t(n){return n&&n.type===e}}function yl(e){return t;function t(n,r,i){return!!(wk(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function $k(){return!0}function wk(e){return e!==null&&typeof e=="object"&&"type"in e}const u2=[],xk=!0,H0=!1,c2="skip";function kh(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const a=ts(i),s=r?-1:1;o(e,void 0,[])();function o(l,u,h){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const f=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(l.type+(f?"<"+f+">":""))+")"})}return m;function m(){let f=u2,y,$,I;if((!t||a(l,u,h[h.length-1]||void 0))&&(f=_k(n(l,h)),f[0]===H0))return f;if("children"in l&&l.children){const b=l;if(b.children&&f[0]!==c2)for($=(r?b.children.length:-1)+s,I=h.concat(b);$>-1&&$<b.children.length;){const v=b.children[$];if(y=o(v,$,I)(),y[0]===H0)return y;$=typeof y[1]=="number"?y[1]:$+s}}return f}}}function _k(e){return Array.isArray(e)?e:typeof e=="number"?[xk,e]:e==null?u2:[e]}function Sh(e,t,n,r){let i,a,s;typeof t=="function"&&typeof n!="function"?(a=void 0,s=t,i=n):(a=t,s=n,i=r),kh(e,a,o,i);function o(l,u){const h=u[u.length-1],c=h?h.children.indexOf(l):void 0;return s(l,c,h)}}const V0={}.hasOwnProperty,kk={};function Sk(e,t){const n=t||kk,r=new Map,i=new Map,a=new Map,s={...uk,...n.handlers},o={all:u,applyData:zk,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:s,one:l,options:n,patch:Ik,wrap:Ck};return Sh(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const c=h.type==="definition"?r:i,m=String(h.identifier).toUpperCase();c.has(m)||c.set(m,h)}}),o;function l(h,c){const m=h.type,f=o.handlers[m];if(V0.call(o.handlers,m)&&f)return f(o,h,c);if(o.options.passThrough&&o.options.passThrough.includes(m)){if("children"in h){const{children:$,...I}=h,b=jo(I);return b.children=o.all(h),b}return jo(h)}return(o.options.unknownHandler||Tk)(o,h,c)}function u(h){const c=[];if("children"in h){const m=h.children;let f=-1;for(;++f<m.length;){const y=o.one(m[f],h);if(y){if(f&&m[f-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Dm(y.value)),!Array.isArray(y)&&y.type==="element")){const $=y.children[0];$&&$.type==="text"&&($.value=Dm($.value))}Array.isArray(y)?c.push(...y):c.push(y)}}}return c}}function Ik(e,t){e.position&&(t.position=f8(e))}function zk(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&a&&Object.assign(n.properties,jo(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Tk(e,t){const n=t.data||{},r="value"in t&&!(V0.call(n,"hProperties")||V0.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ck(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Dm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Wm(e,t){const n=Sk(e,t),r=n.one(e,void 0),i=gk(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function Nk(e,t){return e&&"run"in e?async function(n,r){const i=Wm(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Wm(n,{file:r,...e||t})}}function Om(e){if(e)throw e}var no=Object.prototype.hasOwnProperty,h2=Object.prototype.toString,Gm=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,Hm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):h2.call(t)==="[object Array]"},Vm=function(t){if(!t||h2.call(t)!=="[object Object]")return!1;var n=no.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&no.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||no.call(t,i)},Jm=function(t,n){Gm&&n.name==="__proto__"?Gm(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Xm=function(t,n){if(n==="__proto__")if(no.call(t,n)){if(Zm)return Zm(t,n).value}else return;return t[n]},Ek=function e(){var t,n,r,i,a,s,o=arguments[0],l=1,u=arguments.length,h=!1;for(typeof o=="boolean"&&(h=o,o=arguments[1]||{},l=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Xm(o,n),i=Xm(t,n),o!==i&&(h&&i&&(Vm(i)||(a=Hm(i)))?(a?(a=!1,s=r&&Hm(r)?r:[]):s=r&&Vm(r)?r:{},Jm(o,{name:n,newValue:e(h,s,i)})):typeof i<"u"&&Jm(o,{name:n,newValue:i}));return o};const mu=mc(Ek);function J0(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Ak(){const e=[],t={run:n,use:r};return t;function n(...i){let a=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);o(null,...i);function o(l,...u){const h=e[++a];let c=-1;if(l){s(l);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,h?Bk(h,o)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Bk(e,t){let n;return r;function r(...s){const o=e.length>s.length;let l;o&&s.push(i);try{l=e.apply(this,s)}catch(u){const h=u;if(o&&n)throw h;return i(h)}o||(l&&l.then&&typeof l.then=="function"?l.then(a,i):l instanceof Error?i(l):a(l))}function i(s,...o){n||(n=!0,t(s,...o))}function a(s){i(null,s)}}const dn={basename:Mk,dirname:qk,extname:Rk,join:Fk,sep:"/"};function Mk(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ns(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,o=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else s<0&&(a=!0,s=i+1),o>-1&&(e.codePointAt(i)===t.codePointAt(o--)?o<0&&(r=i):(o=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function qk(e){if(ns(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Rk(e){ns(e);let t=e.length,n=-1,r=0,i=-1,a=0,s;for(;t--;){const o=e.codePointAt(t);if(o===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),o===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Fk(...e){let t=-1,n;for(;++t<e.length;)ns(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Lk(n)}function Lk(e){ns(e);const t=e.codePointAt(0)===47;let n=jk(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function jk(e,t){let n="",r=0,i=-1,a=0,s=-1,o,l;for(;++s<=e.length;){if(s<e.length)o=e.codePointAt(s);else{if(o===47)break;o=47}if(o===47){if(!(i===s-1||a===1))if(i!==s-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=s,a=0;continue}}else if(n.length>0){n="",r=0,i=s,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,a=0}else o===46&&a>-1?a++:a=-1}return n}function ns(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Pk={cwd:Dk};function Dk(){return"/"}function X0(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Wk(e){if(typeof e=="string")e=new URL(e);else if(!X0(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Ok(e)}function Ok(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const pu=["history","path","basename","stem","extname","dirname"];class d2{constructor(t){let n;t?X0(t)?n={path:t}:typeof t=="string"||Gk(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Pk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<pu.length;){const a=pu[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let i;for(i in n)pu.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?dn.basename(this.path):void 0}set basename(t){gu(t,"basename"),fu(t,"basename"),this.path=dn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?dn.dirname(this.path):void 0}set dirname(t){Ym(this.basename,"dirname"),this.path=dn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?dn.extname(this.path):void 0}set extname(t){if(fu(t,"extname"),Ym(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=dn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){X0(t)&&(t=Wk(t)),gu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?dn.basename(this.path,this.extname):void 0}set stem(t){gu(t,"stem"),fu(t,"stem"),this.path=dn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ct(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function fu(e,t){if(e&&e.includes(dn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+dn.sep+"`")}function gu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Ym(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Gk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Zk=function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a},Hk={}.hasOwnProperty;class Ih extends Zk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Ak()}copy(){const t=new Ih;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(mu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(bu("data",this.frozen),this.namespace[t]=n,this):Hk.call(this.namespace,t)&&this.namespace[t]||void 0:t?(bu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Es(t),r=this.parser||this.Parser;return vu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),vu("process",this.parser||this.Parser),yu("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,s){const o=Es(t),l=r.parse(o);r.run(l,o,function(h,c,m){if(h||!c||!m)return u(h);const f=c,y=r.stringify(f,m);Xk(y)?m.value=y:m.result=y,u(h,m)});function u(h,c){h||!c?s(h):a?a(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),vu("processSync",this.parser||this.Parser),yu("processSync",this.compiler||this.Compiler),this.process(t,i),Qm("processSync","process",n),r;function i(a,s){n=!0,Om(a),r=s}}run(t,n,r){Um(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(s,o){const l=Es(n);i.run(t,l,u);function u(h,c,m){const f=c||t;h?o(h):s?s(f):r(void 0,f,m)}}}runSync(t,n){let r=!1,i;return this.run(t,n,a),Qm("runSync","run",r),i;function a(s,o){Om(s),i=o,r=!0}}stringify(t,n){this.freeze();const r=Es(n),i=this.compiler||this.Compiler;return yu("stringify",i),Um(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(bu("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?o(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[h,...c]=u;l(h,c)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(i.settings=mu(!0,i.settings,u.settings))}function o(u){let h=-1;if(u!=null)if(Array.isArray(u))for(;++h<u.length;){const c=u[h];a(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,h){let c=-1,m=-1;for(;++c<r.length;)if(r[c][0]===u){m=c;break}if(m===-1)r.push([u,...h]);else if(h.length>0){let[f,...y]=h;const $=r[m][1];J0($)&&J0(f)&&(f=mu(!0,$,f)),r[m]=[u,f,...y]}}}}const Vk=new Ih().freeze();function vu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function yu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function bu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Um(e){if(!J0(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Qm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Es(e){return Jk(e)?e:new d2(e)}function Jk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Xk(e){return typeof e=="string"||Yk(e)}function Yk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Uk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Km=[],ep={allowDangerousHtml:!0},Qk=/^(https?|ircs?|mailto|xmpp)$/i,Kk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function tp(e){const t=eS(e),n=tS(e);return nS(t.runSync(t.parse(n),n),e)}function eS(e){const t=e.rehypePlugins||Km,n=e.remarkPlugins||Km,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ep}:ep;return Vk().use(F_).use(n).use(Nk,r).use(t)}function tS(e){const t=e.children||"",n=new d2;return typeof t=="string"&&(n.value=t),n}function nS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,s=t.skipHtml,o=t.unwrapDisallowed,l=t.urlTransform||rS;for(const h of Kk)Object.hasOwn(t,h.from)&&(""+h.from+(h.to?"use `"+h.to+"` instead":"remove it")+Uk+h.id,void 0);return Sh(e,u),$8(e,{Fragment:B.Fragment,components:i,ignoreInvalidStyle:!0,jsx:B.jsx,jsxs:B.jsxs,passKeys:!0,passNode:!0});function u(h,c,m){if(h.type==="raw"&&m&&typeof c=="number")return s?m.children.splice(c,1):m.children[c]={type:"text",value:h.value},c;if(h.type==="element"){let f;for(f in cu)if(Object.hasOwn(cu,f)&&Object.hasOwn(h.properties,f)){const y=h.properties[f],$=cu[f];($===null||$.includes(h.tagName))&&(h.properties[f]=l(String(y||""),f,h))}}if(h.type==="element"){let f=n?!n.includes(h.tagName):a?a.includes(h.tagName):!1;if(!f&&r&&typeof c=="number"&&(f=!r(h,c,m)),f&&m&&typeof c=="number")return o&&h.children?m.children.splice(c,1,...h.children):m.children.splice(c,1),c}}}function rS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Qk.test(e.slice(0,t))?e:""}function np(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function iS(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function aS(e,t,n){const i=ts((n||{}).ignore||[]),a=sS(t);let s=-1;for(;++s<a.length;)kh(e,"text",o);function o(u,h){let c=-1,m;for(;++c<h.length;){const f=h[c],y=m?m.children:void 0;if(i(f,y?y.indexOf(f):void 0,m))return;m=f}if(m)return l(u,h)}function l(u,h){const c=h[h.length-1],m=a[s][0],f=a[s][1];let y=0;const I=c.children.indexOf(u);let b=!1,v=[];m.lastIndex=0;let x=m.exec(u.value);for(;x;){const N=x.index,A={index:x.index,input:x.input,stack:[...h,u]};let T=f(...x,A);if(typeof T=="string"&&(T=T.length>0?{type:"text",value:T}:void 0),T===!1?m.lastIndex=N+1:(y!==N&&v.push({type:"text",value:u.value.slice(y,N)}),Array.isArray(T)?v.push(...T):T&&v.push(T),y=N+x[0].length,b=!0),!m.global)break;x=m.exec(u.value)}return b?(y<u.value.length&&v.push({type:"text",value:u.value.slice(y)}),c.children.splice(I,1,...v)):v=[u],I+v.length}}function sS(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([oS(i[0]),lS(i[1])])}return t}function oS(e){return typeof e=="string"?new RegExp(iS(e),"g"):e}function lS(e){return typeof e=="function"?e:function(){return e}}const $u="phrasing",wu=["autolink","link","image","label"];function uS(){return{transforms:[gS],enter:{literalAutolink:hS,literalAutolinkEmail:xu,literalAutolinkHttp:xu,literalAutolinkWww:xu},exit:{literalAutolink:fS,literalAutolinkEmail:pS,literalAutolinkHttp:dS,literalAutolinkWww:mS}}}function cS(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:$u,notInConstruct:wu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:$u,notInConstruct:wu},{character:":",before:"[ps]",after:"\\/",inConstruct:$u,notInConstruct:wu}]}}function hS(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function xu(e){this.config.enter.autolinkProtocol.call(this,e)}function dS(e){this.config.exit.autolinkProtocol.call(this,e)}function mS(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function pS(e){this.config.exit.autolinkEmail.call(this,e)}function fS(e){this.exit(e)}function gS(e){aS(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,vS],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),yS]],{ignore:["link","linkReference"]})}function vS(e,t,n,r,i){let a="";if(!m2(i)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!bS(n)))return!1;const s=$S(n+r);if(!s[0])return!1;const o={type:"link",title:null,url:a+t+s[0],children:[{type:"text",value:t+s[0]}]};return s[1]?[o,{type:"text",value:s[1]}]:o}function yS(e,t,n,r){return!m2(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function bS(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function $S(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=np(e,"(");let a=np(e,")");for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return[e,n]}function m2(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Wr(n)||fl(n))&&(!t||n!==47)}p2.peek=CS;function wS(){this.buffer()}function xS(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function _S(){this.buffer()}function kS(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function SS(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=on(this.sliceSerialize(e)).toLowerCase(),n.label=t}function IS(e){this.exit(e)}function zS(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=on(this.sliceSerialize(e)).toLowerCase(),n.label=t}function TS(e){this.exit(e)}function CS(){return"["}function p2(e,t,n,r){const i=n.createTracker(r);let a=i.move("[^");const s=n.enter("footnoteReference"),o=n.enter("reference");return a+=i.move(n.safe(n.associationId(e),{after:"]",before:a})),o(),s(),a+=i.move("]"),a}function NS(){return{enter:{gfmFootnoteCallString:wS,gfmFootnoteCall:xS,gfmFootnoteDefinitionLabelString:_S,gfmFootnoteDefinition:kS},exit:{gfmFootnoteCallString:SS,gfmFootnoteCall:IS,gfmFootnoteDefinitionLabelString:zS,gfmFootnoteDefinition:TS}}}function ES(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:p2},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,a,s){const o=a.createTracker(s);let l=o.move("[^");const u=a.enter("footnoteDefinition"),h=a.enter("label");return l+=o.move(a.safe(a.associationId(r),{before:l,after:"]"})),h(),l+=o.move("]:"),r.children&&r.children.length>0&&(o.shift(4),l+=o.move((t?`
`:" ")+a.indentLines(a.containerFlow(r,o.current()),t?f2:AS))),u(),l}}function AS(e,t,n){return t===0?e:f2(e,t,n)}function f2(e,t,n){return(n?"":"    ")+e}const BS=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];g2.peek=LS;function MS(){return{canContainEols:["delete"],enter:{strikethrough:RS},exit:{strikethrough:FS}}}function qS(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:BS}],handlers:{delete:g2}}}function RS(e){this.enter({type:"delete",children:[]},e)}function FS(e){this.exit(e)}function g2(e,t,n,r){const i=n.createTracker(r),a=n.enter("strikethrough");let s=i.move("~~");return s+=n.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move("~~"),a(),s}function LS(){return"~"}function jS(e){return e.length}function PS(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||jS,a=[],s=[],o=[],l=[];let u=0,h=-1;for(;++h<e.length;){const $=[],I=[];let b=-1;for(e[h].length>u&&(u=e[h].length);++b<e[h].length;){const v=DS(e[h][b]);if(n.alignDelimiters!==!1){const x=i(v);I[b]=x,(l[b]===void 0||x>l[b])&&(l[b]=x)}$.push(v)}s[h]=$,o[h]=I}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)a[c]=rp(r[c]);else{const $=rp(r);for(;++c<u;)a[c]=$}c=-1;const m=[],f=[];for(;++c<u;){const $=a[c];let I="",b="";$===99?(I=":",b=":"):$===108?I=":":$===114&&(b=":");let v=n.alignDelimiters===!1?1:Math.max(1,l[c]-I.length-b.length);const x=I+"-".repeat(v)+b;n.alignDelimiters!==!1&&(v=I.length+v+b.length,v>l[c]&&(l[c]=v),f[c]=v),m[c]=x}s.splice(1,0,m),o.splice(1,0,f),h=-1;const y=[];for(;++h<s.length;){const $=s[h],I=o[h];c=-1;const b=[];for(;++c<u;){const v=$[c]||"";let x="",N="";if(n.alignDelimiters!==!1){const A=l[c]-(I[c]||0),T=a[c];T===114?x=" ".repeat(A):T===99?A%2?(x=" ".repeat(A/2+.5),N=" ".repeat(A/2-.5)):(x=" ".repeat(A/2),N=x):N=" ".repeat(A)}n.delimiterStart!==!1&&!c&&b.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&v==="")&&(n.delimiterStart!==!1||c)&&b.push(" "),n.alignDelimiters!==!1&&b.push(x),b.push(v),n.alignDelimiters!==!1&&b.push(N),n.padding!==!1&&b.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&b.push("|")}y.push(n.delimiterEnd===!1?b.join("").replace(/ +$/,""):b.join(""))}return y.join(`
`)}function DS(e){return e==null?"":String(e)}function rp(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function WS(e,t,n,r){const i=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);const s=n.indentLines(n.containerFlow(e,a.current()),OS);return i(),s}function OS(e,t,n){return">"+(n?"":" ")+e}function GS(e,t){return ip(e,t.inConstruct,!0)&&!ip(e,t.notInConstruct,!1)}function ip(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function ap(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&GS(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function v2(e,t){const n=String(e);let r=n.indexOf(t),i=r,a=0,s=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>s&&(s=a):a=1,i=r+t.length,r=n.indexOf(t,i);return s}function ZS(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function HS(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function VS(e,t,n,r){const i=HS(n),a=e.value||"",s=i==="`"?"GraveAccent":"Tilde";if(ZS(e,n)){const c=n.enter("codeIndented"),m=n.indentLines(a,JS);return c(),m}const o=n.createTracker(r),l=i.repeat(Math.max(v2(a,i)+1,3)),u=n.enter("codeFenced");let h=o.move(l);if(e.lang){const c=n.enter(`codeFencedLang${s}`);h+=o.move(n.safe(e.lang,{before:h,after:" ",encode:["`"],...o.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${s}`);h+=o.move(" "),h+=o.move(n.safe(e.meta,{before:h,after:`
`,encode:["`"],...o.current()})),c()}return h+=o.move(`
`),a&&(h+=o.move(a+`
`)),h+=o.move(l),u(),h}function JS(e,t,n){return(n?"":"    ")+e}function zh(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function XS(e,t,n,r){const i=zh(n),a=i==='"'?"Quote":"Apostrophe",s=n.enter("definition");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),o(),!e.url||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),o(),e.title&&(o=n.enter(`title${a}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),s(),u}function YS(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Za(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Po(e,t,n){const r=Ai(e),i=Ai(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}y2.peek=US;function y2(e,t,n,r){const i=YS(n),a=n.enter("emphasis"),s=n.createTracker(r),o=s.move(i);let l=s.move(n.containerPhrasing(e,{after:i,before:o,...s.current()}));const u=l.charCodeAt(0),h=Po(r.before.charCodeAt(r.before.length-1),u,i);h.inside&&(l=Za(u)+l.slice(1));const c=l.charCodeAt(l.length-1),m=Po(r.after.charCodeAt(0),c,i);m.inside&&(l=l.slice(0,-1)+Za(c));const f=s.move(i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:h.outside},o+l+f}function US(e,t,n){return n.options.emphasis||"*"}function QS(e,t){let n=!1;return Sh(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,H0}),!!((!e.depth||e.depth<3)&&vh(e)&&(t.options.setext||n))}function KS(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(QS(e,n)){const h=n.enter("headingSetext"),c=n.enter("phrasing"),m=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return c(),h(),m+`
`+(i===1?"=":"-").repeat(m.length-(Math.max(m.lastIndexOf("\r"),m.lastIndexOf(`
`))+1))}const s="#".repeat(i),o=n.enter("headingAtx"),l=n.enter("phrasing");a.move(s+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(u)&&(u=Za(u.charCodeAt(0))+u.slice(1)),u=u?s+" "+u:s,n.options.closeAtx&&(u+=" "+s),l(),o(),u}b2.peek=eI;function b2(e){return e.value||""}function eI(){return"<"}$2.peek=tI;function $2(e,t,n,r){const i=zh(n),a=i==='"'?"Quote":"Apostrophe",s=n.enter("image");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),o(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),o(),e.title&&(o=n.enter(`title${a}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),u+=l.move(")"),s(),u}function tI(){return"!"}w2.peek=nI;function w2(e,t,n,r){const i=e.referenceType,a=n.enter("imageReference");let s=n.enter("label");const o=n.createTracker(r);let l=o.move("![");const u=n.safe(e.alt,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),s();const h=n.stack;n.stack=[],s=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return s(),n.stack=h,a(),i==="full"||!u||u!==c?l+=o.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function nI(){return"!"}x2.peek=rI;function x2(e,t,n){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){const s=n.unsafe[a],o=n.compilePattern(s);let l;if(s.atBreak)for(;l=o.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function rI(){return"`"}function _2(e,t){const n=vh(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}k2.peek=iI;function k2(e,t,n,r){const i=zh(n),a=i==='"'?"Quote":"Apostrophe",s=n.createTracker(r);let o,l;if(_2(e,n)){const h=n.stack;n.stack=[],o=n.enter("autolink");let c=s.move("<");return c+=s.move(n.containerPhrasing(e,{before:c,after:">",...s.current()})),c+=s.move(">"),o(),n.stack=h,c}o=n.enter("link"),l=n.enter("label");let u=s.move("[");return u+=s.move(n.containerPhrasing(e,{before:u,after:"](",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),o(),u}function iI(e,t,n){return _2(e,n)?"<":"["}S2.peek=aI;function S2(e,t,n,r){const i=e.referenceType,a=n.enter("linkReference");let s=n.enter("label");const o=n.createTracker(r);let l=o.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),s();const h=n.stack;n.stack=[],s=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return s(),n.stack=h,a(),i==="full"||!u||u!==c?l+=o.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function aI(){return"["}function Th(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function sI(e){const t=Th(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function oI(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function I2(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function lI(e,t,n,r){const i=n.enter("list"),a=n.bulletCurrent;let s=e.ordered?oI(n):Th(n);const o=e.ordered?s==="."?")":".":sI(n);let l=t&&n.bulletLastUsed?s===n.bulletLastUsed:!1;if(!e.ordered){const h=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&h&&(!h.children||!h.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),I2(n)===s&&h){let c=-1;for(;++c<e.children.length;){const m=e.children[c];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=o),n.bulletCurrent=s;const u=n.containerFlow(e,r);return n.bulletLastUsed=s,n.bulletCurrent=a,i(),u}function uI(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function cI(e,t,n,r){const i=uI(n);let a=n.bulletCurrent||Th(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let s=a.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(s=Math.ceil(s/4)*4);const o=n.createTracker(r);o.move(a+" ".repeat(s-a.length)),o.shift(s);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,o.current()),h);return l(),u;function h(c,m,f){return m?(f?"":" ".repeat(s))+c:(f?a:a+" ".repeat(s-a.length))+c}}function hI(e,t,n,r){const i=n.enter("paragraph"),a=n.enter("phrasing"),s=n.containerPhrasing(e,r);return a(),i(),s}const dI=ts(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function mI(e,t,n,r){return(e.children.some(function(s){return dI(s)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function pI(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}z2.peek=fI;function z2(e,t,n,r){const i=pI(n),a=n.enter("strong"),s=n.createTracker(r),o=s.move(i+i);let l=s.move(n.containerPhrasing(e,{after:i,before:o,...s.current()}));const u=l.charCodeAt(0),h=Po(r.before.charCodeAt(r.before.length-1),u,i);h.inside&&(l=Za(u)+l.slice(1));const c=l.charCodeAt(l.length-1),m=Po(r.after.charCodeAt(0),c,i);m.inside&&(l=l.slice(0,-1)+Za(c));const f=s.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:m.outside,before:h.outside},o+l+f}function fI(e,t,n){return n.options.strong||"*"}function gI(e,t,n,r){return n.safe(e.value,r)}function vI(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function yI(e,t,n){const r=(I2(n)+(n.options.ruleSpaces?" ":"")).repeat(vI(n));return n.options.ruleSpaces?r.slice(0,-1):r}const T2={blockquote:WS,break:ap,code:VS,definition:XS,emphasis:y2,hardBreak:ap,heading:KS,html:b2,image:$2,imageReference:w2,inlineCode:x2,link:k2,linkReference:S2,list:lI,listItem:cI,paragraph:hI,root:mI,strong:z2,text:gI,thematicBreak:yI};function bI(){return{enter:{table:$I,tableData:sp,tableHeader:sp,tableRow:xI},exit:{codeText:_I,table:wI,tableData:_u,tableHeader:_u,tableRow:_u}}}function $I(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function wI(e){this.exit(e),this.data.inTable=void 0}function xI(e){this.enter({type:"tableRow",children:[]},e)}function _u(e){this.exit(e)}function sp(e){this.enter({type:"tableCell",children:[]},e)}function _I(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,kI));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function kI(e,t){return t==="|"?t:e}function SI(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:s,tableCell:l,tableRow:o}};function s(f,y,$,I){return u(h(f,$,I),f.align)}function o(f,y,$,I){const b=c(f,$,I),v=u([b]);return v.slice(0,v.indexOf(`
`))}function l(f,y,$,I){const b=$.enter("tableCell"),v=$.enter("phrasing"),x=$.containerPhrasing(f,{...I,before:a,after:a});return v(),b(),x}function u(f,y){return PS(f,{align:y,alignDelimiters:r,padding:n,stringLength:i})}function h(f,y,$){const I=f.children;let b=-1;const v=[],x=y.enter("table");for(;++b<I.length;)v[b]=c(I[b],y,$);return x(),v}function c(f,y,$){const I=f.children;let b=-1;const v=[],x=y.enter("tableRow");for(;++b<I.length;)v[b]=l(I[b],f,y,$);return x(),v}function m(f,y,$){let I=T2.inlineCode(f,y,$);return $.stack.includes("tableCell")&&(I=I.replace(/\|/g,"\\$&")),I}}function II(){return{exit:{taskListCheckValueChecked:op,taskListCheckValueUnchecked:op,paragraph:TI}}}function zI(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:CI}}}function op(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function TI(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let a=-1,s;for(;++a<i.length;){const o=i[a];if(o.type==="paragraph"){s=o;break}}s===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function CI(e,t,n,r){const i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",o=n.createTracker(r);a&&o.move(s);let l=T2.listItem(e,t,n,{...r,...o.current()});return a&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(h){return h+s}}function NI(){return[uS(),NS(),MS(),bI(),II()]}function EI(e){return{extensions:[cS(),ES(e),qS(),SI(e),zI()]}}const AI={tokenize:LI,partial:!0},C2={tokenize:jI,partial:!0},N2={tokenize:PI,partial:!0},E2={tokenize:DI,partial:!0},BI={tokenize:WI,partial:!0},A2={name:"wwwAutolink",tokenize:RI,previous:M2},B2={name:"protocolAutolink",tokenize:FI,previous:q2},Dn={name:"emailAutolink",tokenize:qI,previous:R2},bn={};function MI(){return{text:bn}}let Ir=48;for(;Ir<123;)bn[Ir]=Dn,Ir++,Ir===58?Ir=65:Ir===91&&(Ir=97);bn[43]=Dn;bn[45]=Dn;bn[46]=Dn;bn[95]=Dn;bn[72]=[Dn,B2];bn[104]=[Dn,B2];bn[87]=[Dn,A2];bn[119]=[Dn,A2];function qI(e,t,n){const r=this;let i,a;return s;function s(c){return!Y0(c)||!R2.call(r,r.previous)||Ch(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),o(c))}function o(c){return Y0(c)?(e.consume(c),o):c===64?(e.consume(c),l):n(c)}function l(c){return c===46?e.check(BI,h,u)(c):c===45||c===95||ot(c)?(a=!0,e.consume(c),l):h(c)}function u(c){return e.consume(c),i=!0,l}function h(c){return a&&i&&pt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function RI(e,t,n){const r=this;return i;function i(s){return s!==87&&s!==119||!M2.call(r,r.previous)||Ch(r.events)?n(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(AI,e.attempt(C2,e.attempt(N2,a),n),n)(s))}function a(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(s)}}function FI(e,t,n){const r=this;let i="",a=!1;return s;function s(c){return(c===72||c===104)&&q2.call(r,r.previous)&&!Ch(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),o):n(c)}function o(c){if(pt(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),o;if(c===58){const m=i.toLowerCase();if(m==="http"||m==="https")return e.consume(c),l}return n(c)}function l(c){return c===47?(e.consume(c),a?u:(a=!0,l)):n(c)}function u(c){return c===null||Fo(c)||ke(c)||Wr(c)||fl(c)?n(c):e.attempt(C2,e.attempt(N2,h),n)(c)}function h(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function LI(e,t,n){let r=0;return i;function i(s){return(s===87||s===119)&&r<3?(r++,e.consume(s),i):s===46&&r===3?(e.consume(s),a):n(s)}function a(s){return s===null?n(s):t(s)}}function jI(e,t,n){let r,i,a;return s;function s(u){return u===46||u===95?e.check(E2,l,o)(u):u===null||ke(u)||Wr(u)||u!==45&&fl(u)?l(u):(a=!0,e.consume(u),s)}function o(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),s}function l(u){return i||r||!a?n(u):t(u)}}function PI(e,t){let n=0,r=0;return i;function i(s){return s===40?(n++,e.consume(s),i):s===41&&r<n?a(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(E2,t,a)(s):s===null||ke(s)||Wr(s)?t(s):(e.consume(s),i)}function a(s){return s===41&&r++,e.consume(s),i}}function DI(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||ke(o)||Wr(o)?t(o):n(o)}function i(o){return o===null||o===40||o===91||ke(o)||Wr(o)?t(o):r(o)}function a(o){return pt(o)?s(o):n(o)}function s(o){return o===59?(e.consume(o),r):pt(o)?(e.consume(o),s):n(o)}}function WI(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return ot(a)?n(a):t(a)}}function M2(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ke(e)}function q2(e){return!pt(e)}function R2(e){return!(e===47||Y0(e))}function Y0(e){return e===43||e===45||e===46||e===95||ot(e)}function Ch(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const OI={tokenize:UI,partial:!0};function GI(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:JI,continuation:{tokenize:XI},exit:YI}},text:{91:{name:"gfmFootnoteCall",tokenize:VI},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:ZI,resolveTo:HI}}}}function ZI(e,t,n){const r=this;let i=r.events.length;const a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){s=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return o;function o(l){if(!s||!s._balanced)return n(l);const u=on(r.sliceSerialize({start:s.end,end:r.now()}));return u.codePointAt(0)!==94||!a.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function HI(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},o=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",a,t],["enter",s,t],["exit",s,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...o),e}function VI(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a=0,s;return o;function o(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(a>999||c===93&&!s||c===null||c===91||ke(c))return n(c);if(c===93){e.exit("chunkString");const m=e.exit("gfmFootnoteCallString");return i.includes(on(r.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return ke(c)||(s=!0),a++,e.consume(c),c===92?h:u}function h(c){return c===91||c===92||c===93?(e.consume(c),a++,u):u(c)}}function JI(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a,s=0,o;return l;function l(y){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(y){return y===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",h):n(y)}function h(y){if(s>999||y===93&&!o||y===null||y===91||ke(y))return n(y);if(y===93){e.exit("chunkString");const $=e.exit("gfmFootnoteDefinitionLabelString");return a=on(r.sliceSerialize($)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return ke(y)||(o=!0),s++,e.consume(y),y===92?c:h}function c(y){return y===91||y===92||y===93?(e.consume(y),s++,h):h(y)}function m(y){return y===58?(e.enter("definitionMarker"),e.consume(y),e.exit("definitionMarker"),i.includes(a)||i.push(a),de(e,f,"gfmFootnoteDefinitionWhitespace")):n(y)}function f(y){return t(y)}}function XI(e,t,n){return e.check(es,t,e.attempt(OI,t,n))}function YI(e){e.exit("gfmFootnoteDefinition")}function UI(e,t,n){const r=this;return de(e,i,"gfmFootnoteDefinitionIndent",4+1);function i(a){const s=r.events[r.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?t(a):n(a)}}function QI(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(s,o){let l=-1;for(;++l<s.length;)if(s[l][0]==="enter"&&s[l][1].type==="strikethroughSequenceTemporary"&&s[l][1]._close){let u=l;for(;u--;)if(s[u][0]==="exit"&&s[u][1].type==="strikethroughSequenceTemporary"&&s[u][1]._open&&s[l][1].end.offset-s[l][1].start.offset===s[u][1].end.offset-s[u][1].start.offset){s[l][1].type="strikethroughSequence",s[u][1].type="strikethroughSequence";const h={type:"strikethrough",start:Object.assign({},s[u][1].start),end:Object.assign({},s[l][1].end)},c={type:"strikethroughText",start:Object.assign({},s[u][1].end),end:Object.assign({},s[l][1].start)},m=[["enter",h,o],["enter",s[u][1],o],["exit",s[u][1],o],["enter",c,o]],f=o.parser.constructs.insideSpan.null;f&&qt(m,m.length,0,gl(f,s.slice(u+1,l),o)),qt(m,m.length,0,[["exit",c,o],["enter",s[l][1],o],["exit",s[l][1],o],["exit",h,o]]),qt(s,u-1,l-u+3,m),l=u+m.length-2;break}}for(l=-1;++l<s.length;)s[l][1].type==="strikethroughSequenceTemporary"&&(s[l][1].type="data");return s}function a(s,o,l){const u=this.previous,h=this.events;let c=0;return m;function m(y){return u===126&&h[h.length-1][1].type!=="characterEscape"?l(y):(s.enter("strikethroughSequenceTemporary"),f(y))}function f(y){const $=Ai(u);if(y===126)return c>1?l(y):(s.consume(y),c++,f);if(c<2&&!n)return l(y);const I=s.exit("strikethroughSequenceTemporary"),b=Ai(y);return I._open=!b||b===2&&!!$,I._close=!$||$===2&&!!b,o(y)}}}class KI{constructor(){this.map=[]}add(t,n,r){ez(this,t,n,r)}consume(t){if(this.map.sort(function(a,s){return a[0]-s[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const a of i)t.push(a);i=r.pop()}this.map.length=0}}function ez(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function tz(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function nz(){return{flow:{null:{name:"table",tokenize:rz,resolveAll:iz}}}}function rz(e,t,n){const r=this;let i=0,a=0,s;return o;function o(E){let Z=r.events.length-1;for(;Z>-1;){const le=r.events[Z][1].type;if(le==="lineEnding"||le==="linePrefix")Z--;else break}const X=Z>-1?r.events[Z][1].type:null,oe=X==="tableHead"||X==="tableRow"?T:l;return oe===T&&r.parser.lazy[r.now().line]?n(E):oe(E)}function l(E){return e.enter("tableHead"),e.enter("tableRow"),u(E)}function u(E){return E===124||(s=!0,a+=1),h(E)}function h(E){return E===null?n(E):K(E)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),f):n(E):me(E)?de(e,h,"whitespace")(E):(a+=1,s&&(s=!1,i+=1),E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),s=!0,h):(e.enter("data"),c(E)))}function c(E){return E===null||E===124||ke(E)?(e.exit("data"),h(E)):(e.consume(E),E===92?m:c)}function m(E){return E===92||E===124?(e.consume(E),c):c(E)}function f(E){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(E):(e.enter("tableDelimiterRow"),s=!1,me(E)?de(e,y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):y(E))}function y(E){return E===45||E===58?I(E):E===124?(s=!0,e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),$):A(E)}function $(E){return me(E)?de(e,I,"whitespace")(E):I(E)}function I(E){return E===58?(a+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),b):E===45?(a+=1,b(E)):E===null||K(E)?N(E):A(E)}function b(E){return E===45?(e.enter("tableDelimiterFiller"),v(E)):A(E)}function v(E){return E===45?(e.consume(E),v):E===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),x):(e.exit("tableDelimiterFiller"),x(E))}function x(E){return me(E)?de(e,N,"whitespace")(E):N(E)}function N(E){return E===124?y(E):E===null||K(E)?!s||i!==a?A(E):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(E)):A(E)}function A(E){return n(E)}function T(E){return e.enter("tableRow"),M(E)}function M(E){return E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),M):E===null||K(E)?(e.exit("tableRow"),t(E)):me(E)?de(e,M,"whitespace")(E):(e.enter("data"),R(E))}function R(E){return E===null||E===124||ke(E)?(e.exit("data"),M(E)):(e.consume(E),E===92?j:R)}function j(E){return E===92||E===124?(e.consume(E),R):R(E)}}function iz(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],s=[0,0,0,0],o=!1,l=0,u,h,c;const m=new KI;for(;++n<e.length;){const f=e[n],y=f[1];f[0]==="enter"?y.type==="tableHead"?(o=!1,l!==0&&(lp(m,t,l,u,h),h=void 0,l=0),u={type:"table",start:Object.assign({},y.start),end:Object.assign({},y.end)},m.add(n,0,[["enter",u,t]])):y.type==="tableRow"||y.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],s=[0,n+1,0,0],o&&(o=!1,h={type:"tableBody",start:Object.assign({},y.start),end:Object.assign({},y.end)},m.add(n,0,[["enter",h,t]])),i=y.type==="tableDelimiterRow"?2:h?3:1):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")?(r=!1,s[2]===0&&(a[1]!==0&&(s[0]=s[1],c=As(m,t,a,i,void 0,c),a=[0,0,0,0]),s[2]=n)):y.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(s[0]=s[1],c=As(m,t,a,i,void 0,c)),a=s,s=[a[1],n,0,0])):y.type==="tableHead"?(o=!0,l=n):y.type==="tableRow"||y.type==="tableDelimiterRow"?(l=n,a[1]!==0?(s[0]=s[1],c=As(m,t,a,i,n,c)):s[1]!==0&&(c=As(m,t,s,i,n,c)),i=0):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")&&(s[3]=n)}for(l!==0&&lp(m,t,l,u,h),m.consume(t.events),n=-1;++n<t.events.length;){const f=t.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=tz(t.events,n))}return e}function As(e,t,n,r,i,a){const s=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(a.end=Object.assign({},ni(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));const l=ni(t.events,n[1]);if(a={type:s,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){const u=ni(t.events,n[2]),h=ni(t.events,n[3]),c={type:o,start:Object.assign({},u),end:Object.assign({},h)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const m=t.events[n[2]],f=t.events[n[3]];if(m[1].end=Object.assign({},f[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){const y=n[2]+1,$=n[3]-n[2]-1;e.add(y,$,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(a.end=Object.assign({},ni(t.events,i)),e.add(i,0,[["exit",a,t]]),a=void 0),a}function lp(e,t,n,r,i){const a=[],s=ni(t.events,n);i&&(i.end=Object.assign({},s),a.push(["exit",i,t])),r.end=Object.assign({},s),a.push(["exit",r,t]),e.add(n+1,0,a)}function ni(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const az={name:"tasklistCheck",tokenize:oz};function sz(){return{text:{91:az}}}function oz(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),a)}function a(l){return ke(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),s):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),s):n(l)}function s(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),o):n(l)}function o(l){return K(l)?t(l):me(l)?e.check({tokenize:lz},t,n)(l):n(l)}}function lz(e,t,n){return de(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function uz(e){return Zg([MI(),GI(),QI(e),nz(),sz()])}const cz={};function up(e){const t=this,n=e||cz,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),s=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(uz(n)),a.push(NI()),s.push(EI(n))}function hz(){return{enter:{mathFlow:e,mathFlowFenceMeta:t,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:o,mathText:s,mathTextData:o}};function e(l){const u={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[u]}},l)}function t(){this.buffer()}function n(){const l=this.resume(),u=this.stack[this.stack.length-1];u.type,u.meta=l}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(l){const u=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),h=this.stack[this.stack.length-1];h.type,this.exit(l),h.value=u;const c=h.data.hChildren[0];c.type,c.tagName,c.children.push({type:"text",value:u}),this.data.mathFlowInside=void 0}function a(l){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},l),this.buffer()}function s(l){const u=this.resume(),h=this.stack[this.stack.length-1];h.type,this.exit(l),h.value=u,h.data.hChildren.push({type:"text",value:u})}function o(l){this.config.enter.data.call(this,l),this.config.exit.data.call(this,l)}}function dz(e){let t=(e||{}).singleDollarTextMath;return t==null&&(t=!0),r.peek=i,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:t?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:n,inlineMath:r}};function n(a,s,o,l){const u=a.value||"",h=o.createTracker(l),c="$".repeat(Math.max(v2(u,"$")+1,2)),m=o.enter("mathFlow");let f=h.move(c);if(a.meta){const y=o.enter("mathFlowMeta");f+=h.move(o.safe(a.meta,{after:`
`,before:f,encode:["$"],...h.current()})),y()}return f+=h.move(`
`),u&&(f+=h.move(u+`
`)),f+=h.move(c),m(),f}function r(a,s,o){let l=a.value||"",u=1;for(t||u++;new RegExp("(^|[^$])"+"\\$".repeat(u)+"([^$]|$)").test(l);)u++;const h="$".repeat(u);/[^ \r\n]/.test(l)&&(/^[ \r\n]/.test(l)&&/[ \r\n]$/.test(l)||/^\$|\$$/.test(l))&&(l=" "+l+" ");let c=-1;for(;++c<o.unsafe.length;){const m=o.unsafe[c];if(!m.atBreak)continue;const f=o.compilePattern(m);let y;for(;y=f.exec(l);){let $=y.index;l.codePointAt($)===10&&l.codePointAt($-1)===13&&$--,l=l.slice(0,$)+" "+l.slice(y.index+1)}}return h+l+h}function i(){return"$"}}const mz={tokenize:pz,concrete:!0,name:"mathFlow"},cp={tokenize:fz,partial:!0};function pz(e,t,n){const r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0;let s=0;return o;function o(v){return e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),l(v)}function l(v){return v===36?(e.consume(v),s++,l):s<2?n(v):(e.exit("mathFlowFenceSequence"),de(e,u,"whitespace")(v))}function u(v){return v===null||K(v)?c(v):(e.enter("mathFlowFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(v))}function h(v){return v===null||K(v)?(e.exit("chunkString"),e.exit("mathFlowFenceMeta"),c(v)):v===36?n(v):(e.consume(v),h)}function c(v){return e.exit("mathFlowFence"),r.interrupt?t(v):e.attempt(cp,m,I)(v)}function m(v){return e.attempt({tokenize:b,partial:!0},I,f)(v)}function f(v){return(a?de(e,y,"linePrefix",a+1):y)(v)}function y(v){return v===null?I(v):K(v)?e.attempt(cp,m,I)(v):(e.enter("mathFlowValue"),$(v))}function $(v){return v===null||K(v)?(e.exit("mathFlowValue"),y(v)):(e.consume(v),$)}function I(v){return e.exit("mathFlow"),t(v)}function b(v,x,N){let A=0;return de(v,T,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function T(j){return v.enter("mathFlowFence"),v.enter("mathFlowFenceSequence"),M(j)}function M(j){return j===36?(A++,v.consume(j),M):A<s?N(j):(v.exit("mathFlowFenceSequence"),de(v,R,"whitespace")(j))}function R(j){return j===null||K(j)?(v.exit("mathFlowFence"),x(j)):N(j)}}}function fz(e,t,n){const r=this;return i;function i(s){return s===null?t(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),a)}function a(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function gz(e){let n=(e||{}).singleDollarTextMath;return n==null&&(n=!0),{tokenize:r,resolve:vz,previous:yz,name:"mathText"};function r(i,a,s){let o=0,l,u;return h;function h($){return i.enter("mathText"),i.enter("mathTextSequence"),c($)}function c($){return $===36?(i.consume($),o++,c):o<2&&!n?s($):(i.exit("mathTextSequence"),m($))}function m($){return $===null?s($):$===36?(u=i.enter("mathTextSequence"),l=0,y($)):$===32?(i.enter("space"),i.consume($),i.exit("space"),m):K($)?(i.enter("lineEnding"),i.consume($),i.exit("lineEnding"),m):(i.enter("mathTextData"),f($))}function f($){return $===null||$===32||$===36||K($)?(i.exit("mathTextData"),m($)):(i.consume($),f)}function y($){return $===36?(i.consume($),l++,y):l===o?(i.exit("mathTextSequence"),i.exit("mathText"),a($)):(u.type="mathTextData",f($))}}}function vz(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="mathTextData"){e[t][1].type="mathTextPadding",e[n][1].type="mathTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="mathTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function yz(e){return e!==36||this.events[this.events.length-1][1].type==="characterEscape"}function bz(e){return{flow:{36:mz},text:{36:gz(e)}}}class D extends Error{constructor(t,n){var r="KaTeX parse error: "+t,i,a,s=n&&n.loc;if(s&&s.start<=s.end){var o=s.lexer.input;i=s.start,a=s.end,i===o.length?r+=" at end of input: ":r+=" at position "+(i+1)+": ";var l=o.slice(i,a).replace(/[^]/g,"$&̲"),u;i>15?u="…"+o.slice(i-15,i):u=o.slice(0,i);var h;a+15<o.length?h=o.slice(a,a+15)+"…":h=o.slice(a),r+=u+l+h}super(r),this.name="ParseError",Object.setPrototypeOf(this,D.prototype),this.position=i,i!=null&&a!=null&&(this.length=a-i),this.rawMessage=t}}var $z=/([A-Z])/g,Nh=e=>e.replace($z,"-$1").toLowerCase(),wz={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},xz=/[&><"']/g,lt=e=>String(e).replace(xz,t=>wz[t]),ro=e=>e.type==="ordgroup"||e.type==="color"?e.body.length===1?ro(e.body[0]):e:e.type==="font"?ro(e.body):e,_z=new Set(["mathord","textord","atom"]),Wn=e=>_z.has(ro(e).type),kz=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},U0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function Sz(e){if("default"in e)return e.default;var t=e.type,n=Array.isArray(t)?t[0]:t;if(typeof n!="string")return n.enum[0];switch(n){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Eh{constructor(t){t===void 0&&(t={}),t=t||{};for(var n of Object.keys(U0)){var r=U0[n],i=t[n];this[n]=i!==void 0?r.processor?r.processor(i):i:Sz(r)}}reportNonstrict(t,n,r){var i=this.strict;if(typeof i=="function"&&(i=i(t,n,r)),!(!i||i==="ignore")){if(i===!0||i==="error")throw new D("LaTeX-incompatible input and strict mode is set to 'error': "+(n+" ["+t+"]"),r);i==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+n+" ["+t+"]"))}}useStrictBehavior(t,n,r){var i=this.strict;if(typeof i=="function")try{i=i(t,n,r)}catch{i="error"}return!i||i==="ignore"?!1:i===!0||i==="error"?!0:i==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+n+" ["+t+"]")),!1)}isTrusted(t){if("url"in t&&t.url&&!t.protocol){var n=kz(t.url);if(n==null)return!1;t.protocol=n}var r=typeof this.trust=="function"?this.trust(t):this.trust;return!!r}}class Vn{constructor(t,n,r){this.id=t,this.size=n,this.cramped=r}sup(){return mn[Iz[this.id]]}sub(){return mn[zz[this.id]]}fracNum(){return mn[Tz[this.id]]}fracDen(){return mn[Cz[this.id]]}cramp(){return mn[Nz[this.id]]}text(){return mn[Ez[this.id]]}isTight(){return this.size>=2}}var Ah=0,Do=1,_i=2,Bn=3,Ha=4,Vt=5,Bi=6,ft=7,mn=[new Vn(Ah,0,!1),new Vn(Do,0,!0),new Vn(_i,1,!1),new Vn(Bn,1,!0),new Vn(Ha,2,!1),new Vn(Vt,2,!0),new Vn(Bi,3,!1),new Vn(ft,3,!0)],Iz=[Ha,Vt,Ha,Vt,Bi,ft,Bi,ft],zz=[Vt,Vt,Vt,Vt,ft,ft,ft,ft],Tz=[_i,Bn,Ha,Vt,Bi,ft,Bi,ft],Cz=[Bn,Bn,Vt,Vt,ft,ft,ft,ft],Nz=[Do,Do,Bn,Bn,Vt,Vt,ft,ft],Ez=[Ah,Do,_i,Bn,_i,Bn,_i,Bn],ae={DISPLAY:mn[Ah],TEXT:mn[_i],SCRIPT:mn[Ha],SCRIPTSCRIPT:mn[Bi]},Q0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Az(e){for(var t=0;t<Q0.length;t++)for(var n=Q0[t],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(e>=i[0]&&e<=i[1])return n.name}return null}var io=[];Q0.forEach(e=>e.blocks.forEach(t=>io.push(...t)));function F2(e){for(var t=0;t<io.length;t+=2)if(e>=io[t]&&e<=io[t+1])return!0;return!1}var Je=e=>e+" "+e,ti=80,Bz=function(t,n){return"M95,"+(622+t+n)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},Mz=function(t,n){return"M263,"+(601+t+n)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},qz=function(t,n){return"M983 "+(10+t+n)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},Rz=function(t,n){return"M424,"+(2398+t+n)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+n+`
h400000v`+(40+t)+"h-400000z"},Fz=function(t,n){return"M473,"+(2713+t+n)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+n+"h400000v"+(40+t)+"H1017.7z"},Lz=function(t){var n=t/2;return"M400000 "+t+" H0 L"+n+" 0 l65 45 L145 "+(t-80)+" H400000z"},jz=function(t,n,r){var i=r-54-n-t;return"M702 "+(t+n)+"H400000"+(40+t)+`
H742v`+i+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+n+"H400000v"+(40+t)+"H742z"},Pz=function(t,n,r){n=1e3*n;var i="";switch(t){case"sqrtMain":i=Bz(n,ti);break;case"sqrtSize1":i=Mz(n,ti);break;case"sqrtSize2":i=qz(n,ti);break;case"sqrtSize3":i=Rz(n,ti);break;case"sqrtSize4":i=Fz(n,ti);break;case"sqrtTall":i=jz(n,ti,r)}return i},Dz=function(t,n){switch(t){case"⎜":return Je("M291 0 H417 V"+n+" H291z");case"∣":return Je("M145 0 H188 V"+n+" H145z");case"∥":return Je("M145 0 H188 V"+n+" H145z")+Je("M367 0 H410 V"+n+" H367z");case"⎟":return Je("M457 0 H583 V"+n+" H457z");case"⎢":return Je("M319 0 H403 V"+n+" H319z");case"⎥":return Je("M263 0 H347 V"+n+" H263z");case"⎪":return Je("M384 0 H504 V"+n+" H384z");case"⏐":return Je("M312 0 H355 V"+n+" H312z");case"‖":return Je("M257 0 H300 V"+n+" H257z")+Je("M478 0 H521 V"+n+" H478z");default:return""}},hp={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Je("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Je("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Je("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Je("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Je("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Je("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Je("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Je("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Wz=function(t,n){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+n+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+n+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+n+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+n+" v1759 h84z";case"vert":return"M145 15 v585 v"+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+n+" v585 h43z";case"doublevert":return"M145 15 v585 v"+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+n+` v585 h43z
M367 15 v585 v`+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+n+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+n+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+n+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+n+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+n+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+n+` v602 h84z
M403 1759 V0 H319 V1759 v`+n+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+n+` v602 h84z
M347 1759 V0 h-84 V1759 v`+n+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(n+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(n+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(n+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(n+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Wi{constructor(t){this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),n=0;n<this.children.length;n++)t.appendChild(this.children[n].toNode());return t}toMarkup(){for(var t="",n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t}toText(){var t=n=>n.toText();return this.children.map(t).join("")}}var K0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Oz={ex:!0,em:!0,mu:!0},L2=function(t){return typeof t!="string"&&(t=t.unit),t in K0||t in Oz||t==="ex"},Re=function(t,n){var r;if(t.unit in K0)r=K0[t.unit]/n.fontMetrics().ptPerEm/n.sizeMultiplier;else if(t.unit==="mu")r=n.fontMetrics().cssEmPerMu;else{var i;if(n.style.isTight()?i=n.havingStyle(n.style.text()):i=n,t.unit==="ex")r=i.fontMetrics().xHeight;else if(t.unit==="em")r=i.fontMetrics().quad;else throw new D("Invalid unit: '"+t.unit+"'");i!==n&&(r*=i.sizeMultiplier/n.sizeMultiplier)}return Math.min(t.number*r,n.maxSize)},G=function(t){return+t.toFixed(4)+"em"},pr=function(t){return t.filter(n=>n).join(" ")},j2=function(t,n,r){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=r||{},n){n.style.isTight()&&this.classes.push("mtight");var i=n.getColor();i&&(this.style.color=i)}},P2=function(t){var n=document.createElement(t);n.className=pr(this.classes);for(var r of Object.keys(this.style))n.style[r]=this.style[r];for(var i of Object.keys(this.attributes))n.setAttribute(i,this.attributes[i]);for(var a=0;a<this.children.length;a++)n.appendChild(this.children[a].toNode());return n},Gz=/[\s"'>/=\x00-\x1f]/,D2=function(t){var n="<"+t;this.classes.length&&(n+=' class="'+lt(pr(this.classes))+'"');var r="";for(var i of Object.keys(this.style))r+=Nh(i)+":"+this.style[i]+";";r&&(n+=' style="'+lt(r)+'"');for(var a of Object.keys(this.attributes)){if(Gz.test(a))throw new D("Invalid attribute name '"+a+"'");n+=" "+a+'="'+lt(this.attributes[a])+'"'}n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</"+t+">",n};class Oi{constructor(t,n,r,i){j2.call(this,t,r,i),this.children=n||[]}setAttribute(t,n){this.attributes[t]=n}hasClass(t){return this.classes.includes(t)}toNode(){return P2.call(this,"span")}toMarkup(){return D2.call(this,"span")}}class bl{constructor(t,n,r,i){j2.call(this,n,i),this.children=r||[],this.setAttribute("href",t)}setAttribute(t,n){this.attributes[t]=n}hasClass(t){return this.classes.includes(t)}toNode(){return P2.call(this,"a")}toMarkup(){return D2.call(this,"a")}}class Zz{constructor(t,n,r){this.alt=n,this.src=t,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=r}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var n of Object.keys(this.style))t.style[n]=this.style[n];return t}toMarkup(){var t='<img src="'+lt(this.src)+'"'+(' alt="'+lt(this.alt)+'"'),n="";for(var r of Object.keys(this.style))n+=Nh(r)+":"+this.style[r]+";";return n&&(t+=' style="'+lt(n)+'"'),t+="'/>",t}}var Hz={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Lt{constructor(t,n,r,i,a,s,o,l){this.text=t,this.height=n||0,this.depth=r||0,this.italic=i||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var u=Az(this.text.charCodeAt(0));u&&this.classes.push(u+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Hz[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),n=null;this.italic>0&&(n=document.createElement("span"),n.style.marginRight=G(this.italic)),this.classes.length>0&&(n=n||document.createElement("span"),n.className=pr(this.classes));for(var r of Object.keys(this.style))n=n||document.createElement("span"),n.style[r]=this.style[r];return n?(n.appendChild(t),n):t}toMarkup(){var t=!1,n="<span";this.classes.length&&(t=!0,n+=' class="',n+=lt(pr(this.classes)),n+='"');var r="";this.italic>0&&(r+="margin-right:"+G(this.italic)+";");for(var i of Object.keys(this.style))r+=Nh(i)+":"+this.style[i]+";";r&&(t=!0,n+=' style="'+lt(r)+'"');var a=lt(this.text);return t?(n+=">",n+=a,n+="</span>",n):a}}class Ln{constructor(t,n){this.children=t||[],this.attributes=n||{}}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"svg");for(var r of Object.keys(this.attributes))n.setAttribute(r,this.attributes[r]);for(var i=0;i<this.children.length;i++)n.appendChild(this.children[i].toNode());return n}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var n of Object.keys(this.attributes))t+=" "+n+'="'+lt(this.attributes[n])+'"';t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</svg>",t}}class fr{constructor(t,n){this.pathName=t,this.alternate=n}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"path");return this.alternate?n.setAttribute("d",this.alternate):n.setAttribute("d",hp[this.pathName]),n}toMarkup(){return this.alternate?'<path d="'+lt(this.alternate)+'"/>':'<path d="'+lt(hp[this.pathName])+'"/>'}}class ec{constructor(t){this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"line");for(var r of Object.keys(this.attributes))n.setAttribute(r,this.attributes[r]);return n}toMarkup(){var t="<line";for(var n of Object.keys(this.attributes))t+=" "+n+'="'+lt(this.attributes[n])+'"';return t+="/>",t}}function Vz(e){if(e instanceof Lt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function Jz(e){if(e instanceof Oi)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var Xz=e=>e instanceof Oi||e instanceof bl||e instanceof Wi,fn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Bs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},dp={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function Yz(e,t){fn[e]=t}function Bh(e,t,n){if(!fn[t])throw new Error("Font metrics not found for font: "+t+".");var r=e.charCodeAt(0),i=fn[t][r];if(!i&&e[0]in dp&&(r=dp[e[0]].charCodeAt(0),i=fn[t][r]),!i&&n==="text"&&F2(r)&&(i=fn[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var ku={};function Uz(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!ku[t]){var n=ku[t]={cssEmPerMu:Bs.quad[t]/18};for(var r in Bs)Bs.hasOwnProperty(r)&&(n[r]=Bs[r][t])}return ku[t]}var Qz={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Kz={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ae={math:{},text:{}};function d(e,t,n,r,i,a){Ae[e][i]={font:t,group:n,replace:r},a&&r&&(Ae[e][r]=Ae[e][i])}var p="math",F="text",g="main",k="ams",Be="accent-token",U="bin",bt="close",Gi="inner",te="mathord",Ve="op-token",Dt="open",rs="punct",S="rel",On="spacing",C="textord";d(p,g,S,"≡","\\equiv",!0);d(p,g,S,"≺","\\prec",!0);d(p,g,S,"≻","\\succ",!0);d(p,g,S,"∼","\\sim",!0);d(p,g,S,"⊥","\\perp");d(p,g,S,"⪯","\\preceq",!0);d(p,g,S,"⪰","\\succeq",!0);d(p,g,S,"≃","\\simeq",!0);d(p,g,S,"∣","\\mid",!0);d(p,g,S,"≪","\\ll",!0);d(p,g,S,"≫","\\gg",!0);d(p,g,S,"≍","\\asymp",!0);d(p,g,S,"∥","\\parallel");d(p,g,S,"⋈","\\bowtie",!0);d(p,g,S,"⌣","\\smile",!0);d(p,g,S,"⊑","\\sqsubseteq",!0);d(p,g,S,"⊒","\\sqsupseteq",!0);d(p,g,S,"≐","\\doteq",!0);d(p,g,S,"⌢","\\frown",!0);d(p,g,S,"∋","\\ni",!0);d(p,g,S,"∝","\\propto",!0);d(p,g,S,"⊢","\\vdash",!0);d(p,g,S,"⊣","\\dashv",!0);d(p,g,S,"∋","\\owns");d(p,g,rs,".","\\ldotp");d(p,g,rs,"⋅","\\cdotp");d(p,g,rs,"⋅","·");d(F,g,C,"⋅","·");d(p,g,C,"#","\\#");d(F,g,C,"#","\\#");d(p,g,C,"&","\\&");d(F,g,C,"&","\\&");d(p,g,C,"ℵ","\\aleph",!0);d(p,g,C,"∀","\\forall",!0);d(p,g,C,"ℏ","\\hbar",!0);d(p,g,C,"∃","\\exists",!0);d(p,g,C,"∇","\\nabla",!0);d(p,g,C,"♭","\\flat",!0);d(p,g,C,"ℓ","\\ell",!0);d(p,g,C,"♮","\\natural",!0);d(p,g,C,"♣","\\clubsuit",!0);d(p,g,C,"℘","\\wp",!0);d(p,g,C,"♯","\\sharp",!0);d(p,g,C,"♢","\\diamondsuit",!0);d(p,g,C,"ℜ","\\Re",!0);d(p,g,C,"♡","\\heartsuit",!0);d(p,g,C,"ℑ","\\Im",!0);d(p,g,C,"♠","\\spadesuit",!0);d(p,g,C,"§","\\S",!0);d(F,g,C,"§","\\S");d(p,g,C,"¶","\\P",!0);d(F,g,C,"¶","\\P");d(p,g,C,"†","\\dag");d(F,g,C,"†","\\dag");d(F,g,C,"†","\\textdagger");d(p,g,C,"‡","\\ddag");d(F,g,C,"‡","\\ddag");d(F,g,C,"‡","\\textdaggerdbl");d(p,g,bt,"⎱","\\rmoustache",!0);d(p,g,Dt,"⎰","\\lmoustache",!0);d(p,g,bt,"⟯","\\rgroup",!0);d(p,g,Dt,"⟮","\\lgroup",!0);d(p,g,U,"∓","\\mp",!0);d(p,g,U,"⊖","\\ominus",!0);d(p,g,U,"⊎","\\uplus",!0);d(p,g,U,"⊓","\\sqcap",!0);d(p,g,U,"∗","\\ast");d(p,g,U,"⊔","\\sqcup",!0);d(p,g,U,"◯","\\bigcirc",!0);d(p,g,U,"∙","\\bullet",!0);d(p,g,U,"‡","\\ddagger");d(p,g,U,"≀","\\wr",!0);d(p,g,U,"⨿","\\amalg");d(p,g,U,"&","\\And");d(p,g,S,"⟵","\\longleftarrow",!0);d(p,g,S,"⇐","\\Leftarrow",!0);d(p,g,S,"⟸","\\Longleftarrow",!0);d(p,g,S,"⟶","\\longrightarrow",!0);d(p,g,S,"⇒","\\Rightarrow",!0);d(p,g,S,"⟹","\\Longrightarrow",!0);d(p,g,S,"↔","\\leftrightarrow",!0);d(p,g,S,"⟷","\\longleftrightarrow",!0);d(p,g,S,"⇔","\\Leftrightarrow",!0);d(p,g,S,"⟺","\\Longleftrightarrow",!0);d(p,g,S,"↦","\\mapsto",!0);d(p,g,S,"⟼","\\longmapsto",!0);d(p,g,S,"↗","\\nearrow",!0);d(p,g,S,"↩","\\hookleftarrow",!0);d(p,g,S,"↪","\\hookrightarrow",!0);d(p,g,S,"↘","\\searrow",!0);d(p,g,S,"↼","\\leftharpoonup",!0);d(p,g,S,"⇀","\\rightharpoonup",!0);d(p,g,S,"↙","\\swarrow",!0);d(p,g,S,"↽","\\leftharpoondown",!0);d(p,g,S,"⇁","\\rightharpoondown",!0);d(p,g,S,"↖","\\nwarrow",!0);d(p,g,S,"⇌","\\rightleftharpoons",!0);d(p,k,S,"≮","\\nless",!0);d(p,k,S,"","\\@nleqslant");d(p,k,S,"","\\@nleqq");d(p,k,S,"⪇","\\lneq",!0);d(p,k,S,"≨","\\lneqq",!0);d(p,k,S,"","\\@lvertneqq");d(p,k,S,"⋦","\\lnsim",!0);d(p,k,S,"⪉","\\lnapprox",!0);d(p,k,S,"⊀","\\nprec",!0);d(p,k,S,"⋠","\\npreceq",!0);d(p,k,S,"⋨","\\precnsim",!0);d(p,k,S,"⪹","\\precnapprox",!0);d(p,k,S,"≁","\\nsim",!0);d(p,k,S,"","\\@nshortmid");d(p,k,S,"∤","\\nmid",!0);d(p,k,S,"⊬","\\nvdash",!0);d(p,k,S,"⊭","\\nvDash",!0);d(p,k,S,"⋪","\\ntriangleleft");d(p,k,S,"⋬","\\ntrianglelefteq",!0);d(p,k,S,"⊊","\\subsetneq",!0);d(p,k,S,"","\\@varsubsetneq");d(p,k,S,"⫋","\\subsetneqq",!0);d(p,k,S,"","\\@varsubsetneqq");d(p,k,S,"≯","\\ngtr",!0);d(p,k,S,"","\\@ngeqslant");d(p,k,S,"","\\@ngeqq");d(p,k,S,"⪈","\\gneq",!0);d(p,k,S,"≩","\\gneqq",!0);d(p,k,S,"","\\@gvertneqq");d(p,k,S,"⋧","\\gnsim",!0);d(p,k,S,"⪊","\\gnapprox",!0);d(p,k,S,"⊁","\\nsucc",!0);d(p,k,S,"⋡","\\nsucceq",!0);d(p,k,S,"⋩","\\succnsim",!0);d(p,k,S,"⪺","\\succnapprox",!0);d(p,k,S,"≆","\\ncong",!0);d(p,k,S,"","\\@nshortparallel");d(p,k,S,"∦","\\nparallel",!0);d(p,k,S,"⊯","\\nVDash",!0);d(p,k,S,"⋫","\\ntriangleright");d(p,k,S,"⋭","\\ntrianglerighteq",!0);d(p,k,S,"","\\@nsupseteqq");d(p,k,S,"⊋","\\supsetneq",!0);d(p,k,S,"","\\@varsupsetneq");d(p,k,S,"⫌","\\supsetneqq",!0);d(p,k,S,"","\\@varsupsetneqq");d(p,k,S,"⊮","\\nVdash",!0);d(p,k,S,"⪵","\\precneqq",!0);d(p,k,S,"⪶","\\succneqq",!0);d(p,k,S,"","\\@nsubseteqq");d(p,k,U,"⊴","\\unlhd");d(p,k,U,"⊵","\\unrhd");d(p,k,S,"↚","\\nleftarrow",!0);d(p,k,S,"↛","\\nrightarrow",!0);d(p,k,S,"⇍","\\nLeftarrow",!0);d(p,k,S,"⇏","\\nRightarrow",!0);d(p,k,S,"↮","\\nleftrightarrow",!0);d(p,k,S,"⇎","\\nLeftrightarrow",!0);d(p,k,S,"△","\\vartriangle");d(p,k,C,"ℏ","\\hslash");d(p,k,C,"▽","\\triangledown");d(p,k,C,"◊","\\lozenge");d(p,k,C,"Ⓢ","\\circledS");d(p,k,C,"®","\\circledR");d(F,k,C,"®","\\circledR");d(p,k,C,"∡","\\measuredangle",!0);d(p,k,C,"∄","\\nexists");d(p,k,C,"℧","\\mho");d(p,k,C,"Ⅎ","\\Finv",!0);d(p,k,C,"⅁","\\Game",!0);d(p,k,C,"‵","\\backprime");d(p,k,C,"▲","\\blacktriangle");d(p,k,C,"▼","\\blacktriangledown");d(p,k,C,"■","\\blacksquare");d(p,k,C,"⧫","\\blacklozenge");d(p,k,C,"★","\\bigstar");d(p,k,C,"∢","\\sphericalangle",!0);d(p,k,C,"∁","\\complement",!0);d(p,k,C,"ð","\\eth",!0);d(F,g,C,"ð","ð");d(p,k,C,"╱","\\diagup");d(p,k,C,"╲","\\diagdown");d(p,k,C,"□","\\square");d(p,k,C,"□","\\Box");d(p,k,C,"◊","\\Diamond");d(p,k,C,"¥","\\yen",!0);d(F,k,C,"¥","\\yen",!0);d(p,k,C,"✓","\\checkmark",!0);d(F,k,C,"✓","\\checkmark");d(p,k,C,"ℶ","\\beth",!0);d(p,k,C,"ℸ","\\daleth",!0);d(p,k,C,"ℷ","\\gimel",!0);d(p,k,C,"ϝ","\\digamma",!0);d(p,k,C,"ϰ","\\varkappa");d(p,k,Dt,"┌","\\@ulcorner",!0);d(p,k,bt,"┐","\\@urcorner",!0);d(p,k,Dt,"└","\\@llcorner",!0);d(p,k,bt,"┘","\\@lrcorner",!0);d(p,k,S,"≦","\\leqq",!0);d(p,k,S,"⩽","\\leqslant",!0);d(p,k,S,"⪕","\\eqslantless",!0);d(p,k,S,"≲","\\lesssim",!0);d(p,k,S,"⪅","\\lessapprox",!0);d(p,k,S,"≊","\\approxeq",!0);d(p,k,U,"⋖","\\lessdot");d(p,k,S,"⋘","\\lll",!0);d(p,k,S,"≶","\\lessgtr",!0);d(p,k,S,"⋚","\\lesseqgtr",!0);d(p,k,S,"⪋","\\lesseqqgtr",!0);d(p,k,S,"≑","\\doteqdot");d(p,k,S,"≓","\\risingdotseq",!0);d(p,k,S,"≒","\\fallingdotseq",!0);d(p,k,S,"∽","\\backsim",!0);d(p,k,S,"⋍","\\backsimeq",!0);d(p,k,S,"⫅","\\subseteqq",!0);d(p,k,S,"⋐","\\Subset",!0);d(p,k,S,"⊏","\\sqsubset",!0);d(p,k,S,"≼","\\preccurlyeq",!0);d(p,k,S,"⋞","\\curlyeqprec",!0);d(p,k,S,"≾","\\precsim",!0);d(p,k,S,"⪷","\\precapprox",!0);d(p,k,S,"⊲","\\vartriangleleft");d(p,k,S,"⊴","\\trianglelefteq");d(p,k,S,"⊨","\\vDash",!0);d(p,k,S,"⊪","\\Vvdash",!0);d(p,k,S,"⌣","\\smallsmile");d(p,k,S,"⌢","\\smallfrown");d(p,k,S,"≏","\\bumpeq",!0);d(p,k,S,"≎","\\Bumpeq",!0);d(p,k,S,"≧","\\geqq",!0);d(p,k,S,"⩾","\\geqslant",!0);d(p,k,S,"⪖","\\eqslantgtr",!0);d(p,k,S,"≳","\\gtrsim",!0);d(p,k,S,"⪆","\\gtrapprox",!0);d(p,k,U,"⋗","\\gtrdot");d(p,k,S,"⋙","\\ggg",!0);d(p,k,S,"≷","\\gtrless",!0);d(p,k,S,"⋛","\\gtreqless",!0);d(p,k,S,"⪌","\\gtreqqless",!0);d(p,k,S,"≖","\\eqcirc",!0);d(p,k,S,"≗","\\circeq",!0);d(p,k,S,"≜","\\triangleq",!0);d(p,k,S,"∼","\\thicksim");d(p,k,S,"≈","\\thickapprox");d(p,k,S,"⫆","\\supseteqq",!0);d(p,k,S,"⋑","\\Supset",!0);d(p,k,S,"⊐","\\sqsupset",!0);d(p,k,S,"≽","\\succcurlyeq",!0);d(p,k,S,"⋟","\\curlyeqsucc",!0);d(p,k,S,"≿","\\succsim",!0);d(p,k,S,"⪸","\\succapprox",!0);d(p,k,S,"⊳","\\vartriangleright");d(p,k,S,"⊵","\\trianglerighteq");d(p,k,S,"⊩","\\Vdash",!0);d(p,k,S,"∣","\\shortmid");d(p,k,S,"∥","\\shortparallel");d(p,k,S,"≬","\\between",!0);d(p,k,S,"⋔","\\pitchfork",!0);d(p,k,S,"∝","\\varpropto");d(p,k,S,"◀","\\blacktriangleleft");d(p,k,S,"∴","\\therefore",!0);d(p,k,S,"∍","\\backepsilon");d(p,k,S,"▶","\\blacktriangleright");d(p,k,S,"∵","\\because",!0);d(p,k,S,"⋘","\\llless");d(p,k,S,"⋙","\\gggtr");d(p,k,U,"⊲","\\lhd");d(p,k,U,"⊳","\\rhd");d(p,k,S,"≂","\\eqsim",!0);d(p,g,S,"⋈","\\Join");d(p,k,S,"≑","\\Doteq",!0);d(p,k,U,"∔","\\dotplus",!0);d(p,k,U,"∖","\\smallsetminus");d(p,k,U,"⋒","\\Cap",!0);d(p,k,U,"⋓","\\Cup",!0);d(p,k,U,"⩞","\\doublebarwedge",!0);d(p,k,U,"⊟","\\boxminus",!0);d(p,k,U,"⊞","\\boxplus",!0);d(p,k,U,"⋇","\\divideontimes",!0);d(p,k,U,"⋉","\\ltimes",!0);d(p,k,U,"⋊","\\rtimes",!0);d(p,k,U,"⋋","\\leftthreetimes",!0);d(p,k,U,"⋌","\\rightthreetimes",!0);d(p,k,U,"⋏","\\curlywedge",!0);d(p,k,U,"⋎","\\curlyvee",!0);d(p,k,U,"⊝","\\circleddash",!0);d(p,k,U,"⊛","\\circledast",!0);d(p,k,U,"⋅","\\centerdot");d(p,k,U,"⊺","\\intercal",!0);d(p,k,U,"⋒","\\doublecap");d(p,k,U,"⋓","\\doublecup");d(p,k,U,"⊠","\\boxtimes",!0);d(p,k,S,"⇢","\\dashrightarrow",!0);d(p,k,S,"⇠","\\dashleftarrow",!0);d(p,k,S,"⇇","\\leftleftarrows",!0);d(p,k,S,"⇆","\\leftrightarrows",!0);d(p,k,S,"⇚","\\Lleftarrow",!0);d(p,k,S,"↞","\\twoheadleftarrow",!0);d(p,k,S,"↢","\\leftarrowtail",!0);d(p,k,S,"↫","\\looparrowleft",!0);d(p,k,S,"⇋","\\leftrightharpoons",!0);d(p,k,S,"↶","\\curvearrowleft",!0);d(p,k,S,"↺","\\circlearrowleft",!0);d(p,k,S,"↰","\\Lsh",!0);d(p,k,S,"⇈","\\upuparrows",!0);d(p,k,S,"↿","\\upharpoonleft",!0);d(p,k,S,"⇃","\\downharpoonleft",!0);d(p,g,S,"⊶","\\origof",!0);d(p,g,S,"⊷","\\imageof",!0);d(p,k,S,"⊸","\\multimap",!0);d(p,k,S,"↭","\\leftrightsquigarrow",!0);d(p,k,S,"⇉","\\rightrightarrows",!0);d(p,k,S,"⇄","\\rightleftarrows",!0);d(p,k,S,"↠","\\twoheadrightarrow",!0);d(p,k,S,"↣","\\rightarrowtail",!0);d(p,k,S,"↬","\\looparrowright",!0);d(p,k,S,"↷","\\curvearrowright",!0);d(p,k,S,"↻","\\circlearrowright",!0);d(p,k,S,"↱","\\Rsh",!0);d(p,k,S,"⇊","\\downdownarrows",!0);d(p,k,S,"↾","\\upharpoonright",!0);d(p,k,S,"⇂","\\downharpoonright",!0);d(p,k,S,"⇝","\\rightsquigarrow",!0);d(p,k,S,"⇝","\\leadsto");d(p,k,S,"⇛","\\Rrightarrow",!0);d(p,k,S,"↾","\\restriction");d(p,g,C,"‘","`");d(p,g,C,"$","\\$");d(F,g,C,"$","\\$");d(F,g,C,"$","\\textdollar");d(p,g,C,"%","\\%");d(F,g,C,"%","\\%");d(p,g,C,"_","\\_");d(F,g,C,"_","\\_");d(F,g,C,"_","\\textunderscore");d(p,g,C,"∠","\\angle",!0);d(p,g,C,"∞","\\infty",!0);d(p,g,C,"′","\\prime");d(p,g,C,"△","\\triangle");d(p,g,C,"Γ","\\Gamma",!0);d(p,g,C,"Δ","\\Delta",!0);d(p,g,C,"Θ","\\Theta",!0);d(p,g,C,"Λ","\\Lambda",!0);d(p,g,C,"Ξ","\\Xi",!0);d(p,g,C,"Π","\\Pi",!0);d(p,g,C,"Σ","\\Sigma",!0);d(p,g,C,"Υ","\\Upsilon",!0);d(p,g,C,"Φ","\\Phi",!0);d(p,g,C,"Ψ","\\Psi",!0);d(p,g,C,"Ω","\\Omega",!0);d(p,g,C,"A","Α");d(p,g,C,"B","Β");d(p,g,C,"E","Ε");d(p,g,C,"Z","Ζ");d(p,g,C,"H","Η");d(p,g,C,"I","Ι");d(p,g,C,"K","Κ");d(p,g,C,"M","Μ");d(p,g,C,"N","Ν");d(p,g,C,"O","Ο");d(p,g,C,"P","Ρ");d(p,g,C,"T","Τ");d(p,g,C,"X","Χ");d(p,g,C,"¬","\\neg",!0);d(p,g,C,"¬","\\lnot");d(p,g,C,"⊤","\\top");d(p,g,C,"⊥","\\bot");d(p,g,C,"∅","\\emptyset");d(p,k,C,"∅","\\varnothing");d(p,g,te,"α","\\alpha",!0);d(p,g,te,"β","\\beta",!0);d(p,g,te,"γ","\\gamma",!0);d(p,g,te,"δ","\\delta",!0);d(p,g,te,"ϵ","\\epsilon",!0);d(p,g,te,"ζ","\\zeta",!0);d(p,g,te,"η","\\eta",!0);d(p,g,te,"θ","\\theta",!0);d(p,g,te,"ι","\\iota",!0);d(p,g,te,"κ","\\kappa",!0);d(p,g,te,"λ","\\lambda",!0);d(p,g,te,"μ","\\mu",!0);d(p,g,te,"ν","\\nu",!0);d(p,g,te,"ξ","\\xi",!0);d(p,g,te,"ο","\\omicron",!0);d(p,g,te,"π","\\pi",!0);d(p,g,te,"ρ","\\rho",!0);d(p,g,te,"σ","\\sigma",!0);d(p,g,te,"τ","\\tau",!0);d(p,g,te,"υ","\\upsilon",!0);d(p,g,te,"ϕ","\\phi",!0);d(p,g,te,"χ","\\chi",!0);d(p,g,te,"ψ","\\psi",!0);d(p,g,te,"ω","\\omega",!0);d(p,g,te,"ε","\\varepsilon",!0);d(p,g,te,"ϑ","\\vartheta",!0);d(p,g,te,"ϖ","\\varpi",!0);d(p,g,te,"ϱ","\\varrho",!0);d(p,g,te,"ς","\\varsigma",!0);d(p,g,te,"φ","\\varphi",!0);d(p,g,U,"∗","*",!0);d(p,g,U,"+","+");d(p,g,U,"−","-",!0);d(p,g,U,"⋅","\\cdot",!0);d(p,g,U,"∘","\\circ",!0);d(p,g,U,"÷","\\div",!0);d(p,g,U,"±","\\pm",!0);d(p,g,U,"×","\\times",!0);d(p,g,U,"∩","\\cap",!0);d(p,g,U,"∪","\\cup",!0);d(p,g,U,"∖","\\setminus",!0);d(p,g,U,"∧","\\land");d(p,g,U,"∨","\\lor");d(p,g,U,"∧","\\wedge",!0);d(p,g,U,"∨","\\vee",!0);d(p,g,C,"√","\\surd");d(p,g,Dt,"⟨","\\langle",!0);d(p,g,Dt,"∣","\\lvert");d(p,g,Dt,"∥","\\lVert");d(p,g,bt,"?","?");d(p,g,bt,"!","!");d(p,g,bt,"⟩","\\rangle",!0);d(p,g,bt,"∣","\\rvert");d(p,g,bt,"∥","\\rVert");d(p,g,S,"=","=");d(p,g,S,":",":");d(p,g,S,"≈","\\approx",!0);d(p,g,S,"≅","\\cong",!0);d(p,g,S,"≥","\\ge");d(p,g,S,"≥","\\geq",!0);d(p,g,S,"←","\\gets");d(p,g,S,">","\\gt",!0);d(p,g,S,"∈","\\in",!0);d(p,g,S,"","\\@not");d(p,g,S,"⊂","\\subset",!0);d(p,g,S,"⊃","\\supset",!0);d(p,g,S,"⊆","\\subseteq",!0);d(p,g,S,"⊇","\\supseteq",!0);d(p,k,S,"⊈","\\nsubseteq",!0);d(p,k,S,"⊉","\\nsupseteq",!0);d(p,g,S,"⊨","\\models");d(p,g,S,"←","\\leftarrow",!0);d(p,g,S,"≤","\\le");d(p,g,S,"≤","\\leq",!0);d(p,g,S,"<","\\lt",!0);d(p,g,S,"→","\\rightarrow",!0);d(p,g,S,"→","\\to");d(p,k,S,"≱","\\ngeq",!0);d(p,k,S,"≰","\\nleq",!0);d(p,g,On," ","\\ ");d(p,g,On," ","\\space");d(p,g,On," ","\\nobreakspace");d(F,g,On," ","\\ ");d(F,g,On," "," ");d(F,g,On," ","\\space");d(F,g,On," ","\\nobreakspace");d(p,g,On,null,"\\nobreak");d(p,g,On,null,"\\allowbreak");d(p,g,rs,",",",");d(p,g,rs,";",";");d(p,k,U,"⊼","\\barwedge",!0);d(p,k,U,"⊻","\\veebar",!0);d(p,g,U,"⊙","\\odot",!0);d(p,g,U,"⊕","\\oplus",!0);d(p,g,U,"⊗","\\otimes",!0);d(p,g,C,"∂","\\partial",!0);d(p,g,U,"⊘","\\oslash",!0);d(p,k,U,"⊚","\\circledcirc",!0);d(p,k,U,"⊡","\\boxdot",!0);d(p,g,U,"△","\\bigtriangleup");d(p,g,U,"▽","\\bigtriangledown");d(p,g,U,"†","\\dagger");d(p,g,U,"⋄","\\diamond");d(p,g,U,"⋆","\\star");d(p,g,U,"◃","\\triangleleft");d(p,g,U,"▹","\\triangleright");d(p,g,Dt,"{","\\{");d(F,g,C,"{","\\{");d(F,g,C,"{","\\textbraceleft");d(p,g,bt,"}","\\}");d(F,g,C,"}","\\}");d(F,g,C,"}","\\textbraceright");d(p,g,Dt,"{","\\lbrace");d(p,g,bt,"}","\\rbrace");d(p,g,Dt,"[","\\lbrack",!0);d(F,g,C,"[","\\lbrack",!0);d(p,g,bt,"]","\\rbrack",!0);d(F,g,C,"]","\\rbrack",!0);d(p,g,Dt,"(","\\lparen",!0);d(p,g,bt,")","\\rparen",!0);d(F,g,C,"<","\\textless",!0);d(F,g,C,">","\\textgreater",!0);d(p,g,Dt,"⌊","\\lfloor",!0);d(p,g,bt,"⌋","\\rfloor",!0);d(p,g,Dt,"⌈","\\lceil",!0);d(p,g,bt,"⌉","\\rceil",!0);d(p,g,C,"\\","\\backslash");d(p,g,C,"∣","|");d(p,g,C,"∣","\\vert");d(F,g,C,"|","\\textbar",!0);d(p,g,C,"∥","\\|");d(p,g,C,"∥","\\Vert");d(F,g,C,"∥","\\textbardbl");d(F,g,C,"~","\\textasciitilde");d(F,g,C,"\\","\\textbackslash");d(F,g,C,"^","\\textasciicircum");d(p,g,S,"↑","\\uparrow",!0);d(p,g,S,"⇑","\\Uparrow",!0);d(p,g,S,"↓","\\downarrow",!0);d(p,g,S,"⇓","\\Downarrow",!0);d(p,g,S,"↕","\\updownarrow",!0);d(p,g,S,"⇕","\\Updownarrow",!0);d(p,g,Ve,"∐","\\coprod");d(p,g,Ve,"⋁","\\bigvee");d(p,g,Ve,"⋀","\\bigwedge");d(p,g,Ve,"⨄","\\biguplus");d(p,g,Ve,"⋂","\\bigcap");d(p,g,Ve,"⋃","\\bigcup");d(p,g,Ve,"∫","\\int");d(p,g,Ve,"∫","\\intop");d(p,g,Ve,"∬","\\iint");d(p,g,Ve,"∭","\\iiint");d(p,g,Ve,"∏","\\prod");d(p,g,Ve,"∑","\\sum");d(p,g,Ve,"⨂","\\bigotimes");d(p,g,Ve,"⨁","\\bigoplus");d(p,g,Ve,"⨀","\\bigodot");d(p,g,Ve,"∮","\\oint");d(p,g,Ve,"∯","\\oiint");d(p,g,Ve,"∰","\\oiiint");d(p,g,Ve,"⨆","\\bigsqcup");d(p,g,Ve,"∫","\\smallint");d(F,g,Gi,"…","\\textellipsis");d(p,g,Gi,"…","\\mathellipsis");d(F,g,Gi,"…","\\ldots",!0);d(p,g,Gi,"…","\\ldots",!0);d(p,g,Gi,"⋯","\\@cdots",!0);d(p,g,Gi,"⋱","\\ddots",!0);d(p,g,C,"⋮","\\varvdots");d(F,g,C,"⋮","\\varvdots");d(p,g,Be,"ˊ","\\acute");d(p,g,Be,"ˋ","\\grave");d(p,g,Be,"¨","\\ddot");d(p,g,Be,"~","\\tilde");d(p,g,Be,"ˉ","\\bar");d(p,g,Be,"˘","\\breve");d(p,g,Be,"ˇ","\\check");d(p,g,Be,"^","\\hat");d(p,g,Be,"⃗","\\vec");d(p,g,Be,"˙","\\dot");d(p,g,Be,"˚","\\mathring");d(p,g,te,"","\\@imath");d(p,g,te,"","\\@jmath");d(p,g,C,"ı","ı");d(p,g,C,"ȷ","ȷ");d(F,g,C,"ı","\\i",!0);d(F,g,C,"ȷ","\\j",!0);d(F,g,C,"ß","\\ss",!0);d(F,g,C,"æ","\\ae",!0);d(F,g,C,"œ","\\oe",!0);d(F,g,C,"ø","\\o",!0);d(F,g,C,"Æ","\\AE",!0);d(F,g,C,"Œ","\\OE",!0);d(F,g,C,"Ø","\\O",!0);d(F,g,Be,"ˊ","\\'");d(F,g,Be,"ˋ","\\`");d(F,g,Be,"ˆ","\\^");d(F,g,Be,"˜","\\~");d(F,g,Be,"ˉ","\\=");d(F,g,Be,"˘","\\u");d(F,g,Be,"˙","\\.");d(F,g,Be,"¸","\\c");d(F,g,Be,"˚","\\r");d(F,g,Be,"ˇ","\\v");d(F,g,Be,"¨",'\\"');d(F,g,Be,"˝","\\H");d(F,g,Be,"◯","\\textcircled");var W2={"--":!0,"---":!0,"``":!0,"''":!0};d(F,g,C,"–","--",!0);d(F,g,C,"–","\\textendash");d(F,g,C,"—","---",!0);d(F,g,C,"—","\\textemdash");d(F,g,C,"‘","`",!0);d(F,g,C,"‘","\\textquoteleft");d(F,g,C,"’","'",!0);d(F,g,C,"’","\\textquoteright");d(F,g,C,"“","``",!0);d(F,g,C,"“","\\textquotedblleft");d(F,g,C,"”","''",!0);d(F,g,C,"”","\\textquotedblright");d(p,g,C,"°","\\degree",!0);d(F,g,C,"°","\\degree");d(F,g,C,"°","\\textdegree",!0);d(p,g,C,"£","\\pounds");d(p,g,C,"£","\\mathsterling",!0);d(F,g,C,"£","\\pounds");d(F,g,C,"£","\\textsterling",!0);d(p,k,C,"✠","\\maltese");d(F,k,C,"✠","\\maltese");var mp='0123456789/@."';for(var Su=0;Su<mp.length;Su++){var pp=mp.charAt(Su);d(p,g,C,pp,pp)}var fp='0123456789!@*()-=+";:?/.,';for(var Iu=0;Iu<fp.length;Iu++){var gp=fp.charAt(Iu);d(F,g,C,gp,gp)}var Wo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var zu=0;zu<Wo.length;zu++){var Ms=Wo.charAt(zu);d(p,g,te,Ms,Ms),d(F,g,C,Ms,Ms)}d(p,k,C,"C","ℂ");d(F,k,C,"C","ℂ");d(p,k,C,"H","ℍ");d(F,k,C,"H","ℍ");d(p,k,C,"N","ℕ");d(F,k,C,"N","ℕ");d(p,k,C,"P","ℙ");d(F,k,C,"P","ℙ");d(p,k,C,"Q","ℚ");d(F,k,C,"Q","ℚ");d(p,k,C,"R","ℝ");d(F,k,C,"R","ℝ");d(p,k,C,"Z","ℤ");d(F,k,C,"Z","ℤ");d(p,g,te,"h","ℎ");d(F,g,te,"h","ℎ");var re="";for(var ht=0;ht<Wo.length;ht++){var Pe=Wo.charAt(ht);re=String.fromCharCode(55349,56320+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56372+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56424+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56580+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56684+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56736+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56788+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56840+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56944+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),ht<26&&(re=String.fromCharCode(55349,56632+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re),re=String.fromCharCode(55349,56476+ht),d(p,g,te,Pe,re),d(F,g,C,Pe,re))}re=String.fromCharCode(55349,56668);d(p,g,te,"k",re);d(F,g,C,"k",re);for(var zr=0;zr<10;zr++){var Jn=zr.toString();re=String.fromCharCode(55349,57294+zr),d(p,g,te,Jn,re),d(F,g,C,Jn,re),re=String.fromCharCode(55349,57314+zr),d(p,g,te,Jn,re),d(F,g,C,Jn,re),re=String.fromCharCode(55349,57324+zr),d(p,g,te,Jn,re),d(F,g,C,Jn,re),re=String.fromCharCode(55349,57334+zr),d(p,g,te,Jn,re),d(F,g,C,Jn,re)}var tc="ÐÞþ";for(var Tu=0;Tu<tc.length;Tu++){var qs=tc.charAt(Tu);d(p,g,te,qs,qs),d(F,g,C,qs,qs)}var Rs=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],vp=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],eT=(e,t)=>{var n=e.charCodeAt(0),r=e.charCodeAt(1),i=(n-55296)*1024+(r-56320)+65536,a=t==="math"?0:1;if(119808<=i&&i<120484){var s=Math.floor((i-119808)/26);return[Rs[s][2],Rs[s][a]]}else if(120782<=i&&i<=120831){var o=Math.floor((i-120782)/10);return[vp[o][2],vp[o][a]]}else{if(i===120485||i===120486)return[Rs[0][2],Rs[0][a]];if(120486<i&&i<120782)return["",""];throw new D("Unsupported character: "+e)}},$l=function(t,n,r){if(Ae[r][t]){var i=Ae[r][t].replace;i&&(t=i)}return{value:t,metrics:Bh(t,n,r)}},mt=function(t,n,r,i,a){var s=$l(t,n,r),o=s.metrics;t=s.value;var l;if(o){var u=o.italic;(r==="text"||i&&i.font==="mathit")&&(u=0),l=new Lt(t,o.height,o.depth,u,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+n+"' and mode '"+r+"'")),l=new Lt(t,0,0,0,0,0,a);if(i){l.maxFontSize=i.sizeMultiplier,i.style.isTight()&&l.classes.push("mtight");var h=i.getColor();h&&(l.style.color=h)}return l},Mh=function(t,n,r,i){return i===void 0&&(i=[]),r.font==="boldsymbol"&&$l(t,"Main-Bold",n).metrics?mt(t,"Main-Bold",n,r,i.concat(["mathbf"])):t==="\\"||Ae[n][t].font==="main"?mt(t,"Main-Regular",n,r,i):mt(t,"AMS-Regular",n,r,i.concat(["amsrm"]))},tT=function(t,n,r,i,a){return a!=="textord"&&$l(t,"Math-BoldItalic",n).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},wl=function(t,n,r){var i=t.mode,a=t.text,s=["mord"],o=i==="math"||i==="text"&&n.font,l=o?n.font:n.fontFamily,u="",h="";if(a.charCodeAt(0)===55349&&([u,h]=eT(a,i)),u.length>0)return mt(a,u,i,n,s.concat(h));if(l){var c,m;if(l==="boldsymbol"){var f=tT(a,i,n,s,r);c=f.fontName,m=[f.fontClass]}else o?(c=nc[l].fontName,m=[l]):(c=Fs(l,n.fontWeight,n.fontShape),m=[l,n.fontWeight,n.fontShape]);if($l(a,c,i).metrics)return mt(a,c,i,n,s.concat(m));if(W2.hasOwnProperty(a)&&c.slice(0,10)==="Typewriter"){for(var y=[],$=0;$<a.length;$++)y.push(mt(a[$],c,i,n,s.concat(m)));return Gn(y)}}if(r==="mathord")return mt(a,"Math-Italic",i,n,s.concat(["mathnormal"]));if(r==="textord"){var I=Ae[i][a]&&Ae[i][a].font;if(I==="ams"){var b=Fs("amsrm",n.fontWeight,n.fontShape);return mt(a,b,i,n,s.concat("amsrm",n.fontWeight,n.fontShape))}else if(I==="main"||!I){var v=Fs("textrm",n.fontWeight,n.fontShape);return mt(a,v,i,n,s.concat(n.fontWeight,n.fontShape))}else{var x=Fs(I,n.fontWeight,n.fontShape);return mt(a,x,i,n,s.concat(x,n.fontWeight,n.fontShape))}}else throw new Error("unexpected type: "+r+" in makeOrd")},nT=(e,t)=>{if(pr(e.classes)!==pr(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass("mathnormal"))return!1;if(e.classes.length===1){var n=e.classes[0];if(n==="mbin"||n==="mord")return!1}for(var r of Object.keys(e.style))if(e.style[r]!==t.style[r])return!1;for(var i of Object.keys(t.style))if(e.style[i]!==t.style[i])return!1;return!0},O2=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof Lt&&r instanceof Lt&&nT(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},qh=function(t){for(var n=0,r=0,i=0,a=0;a<t.children.length;a++){var s=t.children[a];s.height>n&&(n=s.height),s.depth>r&&(r=s.depth),s.maxFontSize>i&&(i=s.maxFontSize)}t.height=n,t.depth=r,t.maxFontSize=i},L=function(t,n,r,i){var a=new Oi(t,n,r,i);return qh(a),a},gr=(e,t,n,r)=>new Oi(e,t,n,r),Mi=function(t,n,r){var i=L([t],[],n);return i.height=Math.max(r||n.fontMetrics().defaultRuleThickness,n.minRuleThickness),i.style.borderBottomWidth=G(i.height),i.maxFontSize=1,i},rT=function(t,n,r,i){var a=new bl(t,n,r,i);return qh(a),a},Gn=function(t){var n=new Wi(t);return qh(n),n},qi=function(t,n){return t instanceof Wi?L([],[t],n):t},iT=function(t){if(t.positionType==="individualShift"){for(var n=t.children,r=[n[0]],i=-n[0].shift-n[0].elem.depth,a=i,s=1;s<n.length;s++){var o=-n[s].shift-a-n[s].elem.depth,l=o-(n[s-1].elem.height+n[s-1].elem.depth);a=a+o,r.push({type:"kern",size:l}),r.push(n[s])}return{children:r,depth:i}}var u;if(t.positionType==="top"){for(var h=t.positionData,c=0;c<t.children.length;c++){var m=t.children[c];h-=m.type==="kern"?m.size:m.elem.height+m.elem.depth}u=h}else if(t.positionType==="bottom")u=-t.positionData;else{var f=t.children[0];if(f.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")u=-f.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")u=-f.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:u}},ve=function(t,n){for(var{children:r,depth:i}=iT(t),a=0,s=0;s<r.length;s++){var o=r[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var u=L(["pstrut"],[]);u.style.height=G(a);for(var h=[],c=i,m=i,f=i,y=0;y<r.length;y++){var $=r[y];if($.type==="kern")f+=$.size;else{var I=$.elem,b=$.wrapperClasses||[],v=$.wrapperStyle||{},x=L(b,[u,I],void 0,v);x.style.top=G(-a-f-I.depth),$.marginLeft&&(x.style.marginLeft=$.marginLeft),$.marginRight&&(x.style.marginRight=$.marginRight),h.push(x),f+=I.height+I.depth}c=Math.min(c,f),m=Math.max(m,f)}var N=L(["vlist"],h);N.style.height=G(m);var A;if(c<0){var T=L([],[]),M=L(["vlist"],[T]);M.style.height=G(-c);var R=L(["vlist-s"],[new Lt("​")]);A=[L(["vlist-r"],[N,R]),L(["vlist-r"],[M])]}else A=[L(["vlist-r"],[N])];var j=L(["vlist-t"],A);return A.length===2&&j.classes.push("vlist-t2"),j.height=m,j.depth=-c,j},G2=(e,t)=>{var n=L(["mspace"],[],t),r=Re(e,t);return n.style.marginRight=G(r),n},Fs=function(t,n,r){var i="";switch(t){case"amsrm":i="AMS";break;case"textrm":i="Main";break;case"textsf":i="SansSerif";break;case"texttt":i="Typewriter";break;default:i=t}var a;return n==="textbf"&&r==="textit"?a="BoldItalic":n==="textbf"?a="Bold":n==="textit"?a="Italic":a="Regular",i+"-"+a},nc={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Z2={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},H2=function(t,n){var[r,i,a]=Z2[t],s=new fr(r),o=new Ln([s],{width:G(i),height:G(a),style:"width:"+G(i),viewBox:"0 0 "+1e3*i+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=gr(["overlay"],[o],n);return l.height=a,l.style.height=G(a),l.style.width=G(i),l},Me={number:3,unit:"mu"},Tr={number:4,unit:"mu"},In={number:5,unit:"mu"},aT={mord:{mop:Me,mbin:Tr,mrel:In,minner:Me},mop:{mord:Me,mop:Me,mrel:In,minner:Me},mbin:{mord:Tr,mop:Tr,mopen:Tr,minner:Tr},mrel:{mord:In,mop:In,mopen:In,minner:In},mopen:{},mclose:{mop:Me,mbin:Tr,mrel:In,minner:Me},mpunct:{mord:Me,mop:Me,mrel:In,mopen:Me,mclose:Me,mpunct:Me,minner:Me},minner:{mord:Me,mop:Me,mbin:Tr,mrel:In,mopen:Me,mpunct:Me,minner:Me}},sT={mord:{mop:Me},mop:{mord:Me,mop:Me},mbin:{},mrel:{},mopen:{},mclose:{mop:Me},mpunct:{},minner:{mop:Me}},V2={},Oo={},Go={};function Y(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:s}=e,o={type:t,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},l=0;l<n.length;++l)V2[n[l]]=o;t&&(a&&(Oo[t]=a),s&&(Go[t]=s))}function Jr(e){var{type:t,htmlBuilder:n,mathmlBuilder:r}=e;Y({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:n,mathmlBuilder:r})}var Zo=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Ze=function(t){return t.type==="ordgroup"?t.body:[t]},oT=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),lT=new Set(["rightmost","mrel","mclose","mpunct"]),uT={display:ae.DISPLAY,text:ae.TEXT,script:ae.SCRIPT,scriptscript:ae.SCRIPTSCRIPT},cT={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Ue=function(t,n,r,i){i===void 0&&(i=[null,null]);for(var a=[],s=0;s<t.length;s++){var o=ye(t[s],n);if(o instanceof Wi){var l=o.children;a.push(...l)}else a.push(o)}if(O2(a),!r)return a;var u=n;if(t.length===1){var h=t[0];h.type==="sizing"?u=n.havingSize(h.size):h.type==="styling"&&(u=n.havingStyle(uT[h.style]))}var c=L([i[0]||"leftmost"],[],n),m=L([i[1]||"rightmost"],[],n),f=r==="root";return rc(a,(y,$)=>{var I=$.classes[0],b=y.classes[0];I==="mbin"&&lT.has(b)?$.classes[0]="mord":b==="mbin"&&oT.has(I)&&(y.classes[0]="mord")},{node:c},m,f),rc(a,(y,$)=>{var I,b,v=ac($),x=ac(y),N=v&&x?y.hasClass("mtight")?(I=sT[v])==null?void 0:I[x]:(b=aT[v])==null?void 0:b[x]:null;if(N)return G2(N,u)},{node:c},m,f),a},rc=function(t,n,r,i,a){i&&t.push(i);for(var s=0;s<t.length;s++){var o=t[s],l=J2(o);if(l){rc(l.children,n,r,null,a);continue}var u=!o.hasClass("mspace");if(u){var h=n(o,r.node);h&&(r.insertAfter?r.insertAfter(h):(t.unshift(h),s++))}u?r.node=o:a&&o.hasClass("newline")&&(r.node=L(["leftmost"])),r.insertAfter=(c=>m=>{t.splice(c+1,0,m),s++})(s)}i&&t.pop()},J2=function(t){return t instanceof Wi||t instanceof bl||t instanceof Oi&&t.hasClass("enclosing")?t:null},ic=function(t,n){var r=J2(t);if(r){var i=r.children;if(i.length){if(n==="right")return ic(i[i.length-1],"right");if(n==="left")return ic(i[0],"left")}}return t},ac=function(t,n){if(!t)return null;n&&(t=ic(t,n));var r=t.classes[0];return cT[r]||null},Va=function(t,n){var r=["nulldelimiter"].concat(t.baseSizingClasses());return L(n.concat(r))},ye=function(t,n,r){if(!t)return L();if(Oo[t.type]){var i=Oo[t.type](t,n);if(r&&n.size!==r.size){i=L(n.sizingClasses(r),[i],n);var a=n.sizeMultiplier/r.sizeMultiplier;i.height*=a,i.depth*=a}return i}else throw new D("Got group of unknown type: '"+t.type+"'")};function Ls(e,t){var n=L(["base"],e,t),r=L(["strut"]);return r.style.height=G(n.height+n.depth),n.depth&&(r.style.verticalAlign=G(-n.depth)),n.children.unshift(r),n}function sc(e,t){var n=null;e.length===1&&e[0].type==="tag"&&(n=e[0].tag,e=e[0].body);var r=Ue(e,t,"root"),i;r.length===2&&r[1].hasClass("tag")&&(i=r.pop());for(var a=[],s=[],o=0;o<r.length;o++)if(s.push(r[o]),r[o].hasClass("mbin")||r[o].hasClass("mrel")||r[o].hasClass("allowbreak")){for(var l=!1;o<r.length-1&&r[o+1].hasClass("mspace")&&!r[o+1].hasClass("newline");)o++,s.push(r[o]),r[o].hasClass("nobreak")&&(l=!0);l||(a.push(Ls(s,t)),s=[])}else r[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(Ls(s,t)),s=[]),a.push(r[o]));s.length>0&&a.push(Ls(s,t));var u;n?(u=Ls(Ue(n,t,!0),t),u.classes=["tag"],a.push(u)):i&&a.push(i);var h=L(["katex-html"],a);if(h.setAttribute("aria-hidden","true"),u){var c=u.children[0];c.style.height=G(h.height+h.depth),h.depth&&(c.style.verticalAlign=G(-h.depth))}return h}function X2(e){return new Wi(e)}class W{constructor(t,n,r){this.type=t,this.attributes={},this.children=n||[],this.classes=r||[]}setAttribute(t,n){this.attributes[t]=n}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&t.setAttribute(n,this.attributes[n]);this.classes.length>0&&(t.className=pr(this.classes));for(var r=0;r<this.children.length;r++)if(this.children[r]instanceof He&&this.children[r+1]instanceof He){for(var i=this.children[r].toText()+this.children[++r].toText();this.children[r+1]instanceof He;)i+=this.children[++r].toText();t.appendChild(new He(i).toNode())}else t.appendChild(this.children[r].toNode());return t}toMarkup(){var t="<"+this.type;for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(t+=" "+n+'="',t+=lt(this.attributes[n]),t+='"');this.classes.length>0&&(t+=' class ="'+lt(pr(this.classes))+'"'),t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class He{constructor(t){this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return lt(this.toText())}toText(){return this.text}}class Y2{constructor(t){this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",G(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+G(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var hT=new Set(["\\imath","\\jmath"]),dT=new Set(["mrow","mtable"]),Ut=function(t,n,r){return Ae[n][t]&&Ae[n][t].replace&&t.charCodeAt(0)!==55349&&!(W2.hasOwnProperty(t)&&r&&(r.fontFamily&&r.fontFamily.slice(4,6)==="tt"||r.font&&r.font.slice(4,6)==="tt"))&&(t=Ae[n][t].replace),new He(t)},Rh=function(t){return t.length===1?t[0]:new W("mrow",t)},Fh=function(t,n){if(n.fontFamily==="texttt")return"monospace";if(n.fontFamily==="textsf")return n.fontShape==="textit"&&n.fontWeight==="textbf"?"sans-serif-bold-italic":n.fontShape==="textit"?"sans-serif-italic":n.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(n.fontShape==="textit"&&n.fontWeight==="textbf")return"bold-italic";if(n.fontShape==="textit")return"italic";if(n.fontWeight==="textbf")return"bold";var r=n.font;if(!r||r==="mathnormal")return null;var i=t.mode;if(r==="mathit")return"italic";if(r==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(r==="mathbf")return"bold";if(r==="mathbb")return"double-struck";if(r==="mathsfit")return"sans-serif-italic";if(r==="mathfrak")return"fraktur";if(r==="mathscr"||r==="mathcal")return"script";if(r==="mathsf")return"sans-serif";if(r==="mathtt")return"monospace";var a=t.text;if(hT.has(a))return null;if(Ae[i][a]){var s=Ae[i][a].replace;s&&(a=s)}var o=nc[r].fontName;return Bh(a,o,i)?nc[r].variant:null};function Cu(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var t=e.children[0];return t instanceof He&&t.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var n=e.children[0];return n instanceof He&&n.text===","}else return!1}var Wt=function(t,n,r){if(t.length===1){var i=Se(t[0],n);return r&&i instanceof W&&i.type==="mo"&&(i.setAttribute("lspace","0em"),i.setAttribute("rspace","0em")),[i]}for(var a=[],s,o=0;o<t.length;o++){var l=Se(t[o],n);if(l instanceof W&&s instanceof W){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(Cu(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&Cu(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||Cu(s))){var u=l.children[0];u instanceof W&&u.type==="mn"&&(u.children=[...s.children,...u.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var h=s.children[0];if(h instanceof He&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var c=l.children[0];c instanceof He&&c.text.length>0&&(c.text=c.text.slice(0,1)+"̸"+c.text.slice(1),a.pop())}}}a.push(l),s=l}return a},vr=function(t,n,r){return Rh(Wt(t,n,r))},Se=function(t,n){if(!t)return new W("mrow");if(Go[t.type]){var r=Go[t.type](t,n);return r}else throw new D("Got group of unknown type: '"+t.type+"'")};function yp(e,t,n,r,i){var a=Wt(e,n),s;a.length===1&&a[0]instanceof W&&dT.has(a[0].type)?s=a[0]:s=new W("mrow",a);var o=new W("annotation",[new He(t)]);o.setAttribute("encoding","application/x-tex");var l=new W("semantics",[s,o]),u=new W("math",[l]);u.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),r&&u.setAttribute("display","block");var h=i?"katex":"katex-mathml";return L([h],[u])}var mT=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],bp=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],$p=function(t,n){return n.size<2?t:mT[t-1][n.size-1]};class Cn{constructor(t){this.style=t.style,this.color=t.color,this.size=t.size||Cn.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=bp[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(n,t),new Cn(n)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:$p(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:bp[t-1]})}havingBaseStyle(t){t=t||this.style.text();var n=$p(Cn.BASESIZE,t);return this.size===n&&this.textSize===Cn.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Cn.BASESIZE?["sizing","reset-size"+this.size,"size"+Cn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Uz(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Cn.BASESIZE=6;var U2=function(t){return new Cn({style:t.displayMode?ae.DISPLAY:ae.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Q2=function(t,n){if(n.displayMode){var r=["katex-display"];n.leqno&&r.push("leqno"),n.fleqn&&r.push("fleqn"),t=L(r,[t])}return t},pT=function(t,n,r){var i=U2(r),a;if(r.output==="mathml")return yp(t,n,i,r.displayMode,!0);if(r.output==="html"){var s=sc(t,i);a=L(["katex"],[s])}else{var o=yp(t,n,i,r.displayMode,!1),l=sc(t,i);a=L(["katex"],[o,l])}return Q2(a,r)},fT=function(t,n,r){var i=U2(r),a=sc(t,i),s=L(["katex"],[a]);return Q2(s,r)},gT={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},xl=function(t){var n=new W("mo",[new He(gT[t.replace(/^\\/,"")])]);return n.setAttribute("stretchy","true"),n},vT={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},yT=new Set(["widehat","widecheck","widetilde","utilde"]),_l=function(t,n){function r(){var o=4e5,l=t.label.slice(1);if(yT.has(l)){var u=t,h=u.base.type==="ordgroup"?u.base.body.length:1,c,m,f;if(h>5)l==="widehat"||l==="widecheck"?(c=420,o=2364,f=.42,m=l+"4"):(c=312,o=2340,f=.34,m="tilde4");else{var y=[1,1,2,2,3,3][h];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][y],c=[0,239,300,360,420][y],f=[0,.24,.3,.3,.36,.42][y],m=l+y):(o=[0,600,1033,2339,2340][y],c=[0,260,286,306,312][y],f=[0,.26,.286,.3,.306,.34][y],m="tilde"+y)}var $=new fr(m),I=new Ln([$],{width:"100%",height:G(f),viewBox:"0 0 "+o+" "+c,preserveAspectRatio:"none"});return{span:gr([],[I],n),minWidth:0,height:f}}else{var b=[],v=vT[l],[x,N,A]=v,T=A/1e3,M=x.length,R,j;if(M===1){var E=v[3];R=["hide-tail"],j=[E]}else if(M===2)R=["halfarrow-left","halfarrow-right"],j=["xMinYMin","xMaxYMin"];else if(M===3)R=["brace-left","brace-center","brace-right"],j=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+M+" children.");for(var Z=0;Z<M;Z++){var X=new fr(x[Z]),oe=new Ln([X],{width:"400em",height:G(T),viewBox:"0 0 "+o+" "+A,preserveAspectRatio:j[Z]+" slice"}),le=gr([R[Z]],[oe],n);if(M===1)return{span:le,minWidth:N,height:T};le.style.height=G(T),b.push(le)}return{span:L(["stretchy"],b,n),minWidth:N,height:T}}}var{span:i,minWidth:a,height:s}=r();return i.height=s,i.style.height=G(s),a>0&&(i.style.minWidth=G(a)),i},bT=function(t,n,r,i,a){var s,o=t.height+t.depth+r+i;if(/fbox|color|angl/.test(n)){if(s=L(["stretchy",n],[],a),n==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var u=[];/^[bx]cancel$/.test(n)&&u.push(new ec({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(n)&&u.push(new ec({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new Ln(u,{width:"100%",height:G(o)});s=gr([],[h],a)}return s.height=o,s.style.height=G(o),s};function ce(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function kl(e){var t=Sl(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function Sl(e){return e&&(e.type==="atom"||Kz.hasOwnProperty(e.type))?e:null}var K2=e=>{if(e instanceof Lt)return e;if(Xz(e)&&e.children.length===1)return K2(e.children[0])},Lh=(e,t)=>{var n,r,i;e&&e.type==="supsub"?(r=ce(e.base,"accent"),n=r.base,e.base=n,i=Jz(ye(e,t)),e.base=r):(r=ce(e,"accent"),n=r.base);var a=ye(n,t.havingCrampedStyle()),s=r.isShifty&&Wn(n),o=0;if(s){var l,u;o=(l=(u=K2(a))==null?void 0:u.skew)!=null?l:0}var h=r.label==="\\c",c=h?a.height+a.depth:Math.min(a.height,t.fontMetrics().xHeight),m;if(r.isStretchy)m=_l(r,t),m=ve({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:m,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+G(2*o)+")",marginLeft:G(2*o)}:void 0}]});else{var f,y;r.label==="\\vec"?(f=H2("vec",t),y=Z2.vec[1]):(f=wl({type:"textord",mode:r.mode,text:r.label},t,"textord"),f=Vz(f),f.italic=0,y=f.width,h&&(c+=f.depth)),m=L(["accent-body"],[f]);var $=r.label==="\\textcircled";$&&(m.classes.push("accent-full"),c=a.height);var I=o;$||(I-=y/2),m.style.left=G(I),r.label==="\\textcircled"&&(m.style.top=".2em"),m=ve({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-c},{type:"elem",elem:m}]})}var b=L(["mord","accent"],[m],t);return i?(i.children[0]=b,i.height=Math.max(b.height,i.height),i.classes[0]="mord",i):b},e4=(e,t)=>{var n=e.isStretchy?xl(e.label):new W("mo",[Ut(e.label,e.mode)]),r=new W("mover",[Se(e.base,t),n]);return r.setAttribute("accent","true"),r},$T=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));Y({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var n=Zo(t[0]),r=!$T.test(e.funcName),i=!r||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:Lh,mathmlBuilder:e4});Y({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),r="text"),{type:"accent",mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:Lh,mathmlBuilder:e4});Y({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:"accentUnder",mode:n.mode,label:r,base:i}},htmlBuilder:(e,t)=>{var n=ye(e.base,t),r=_l(e,t),i=e.label==="\\utilde"?.12:0,a=ve({positionType:"top",positionData:n.height,children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:n}]});return L(["mord","accentunder"],[a],t)},mathmlBuilder:(e,t)=>{var n=xl(e.label),r=new W("munder",[Se(e.base,t),n]);return r.setAttribute("accentunder","true"),r}});var js=e=>{var t=new W("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};Y({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r,funcName:i}=e;return{type:"xArrow",mode:r.mode,label:i,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),i=qi(ye(e.body,r,t),t),a=e.label.slice(0,2)==="\\x"?"x":"cd";i.classes.push(a+"-arrow-pad");var s;e.below&&(r=t.havingStyle(n.sub()),s=qi(ye(e.below,r,t),t),s.classes.push(a+"-arrow-pad"));var o=_l(e,t),l=-t.fontMetrics().axisHeight+.5*o.height,u=-t.fontMetrics().axisHeight-.5*o.height-.111;(i.depth>.25||e.label==="\\xleftequilibrium")&&(u-=i.depth);var h;if(s){var c=-t.fontMetrics().axisHeight+s.height+.5*o.height+.111;h=ve({positionType:"individualShift",children:[{type:"elem",elem:i,shift:u},{type:"elem",elem:o,shift:l},{type:"elem",elem:s,shift:c}]})}else h=ve({positionType:"individualShift",children:[{type:"elem",elem:i,shift:u},{type:"elem",elem:o,shift:l}]});return h.children[0].children[0].children[1].classes.push("svg-align"),L(["mrel","x-arrow"],[h],t)},mathmlBuilder(e,t){var n=xl(e.label);n.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var r;if(e.body){var i=js(Se(e.body,t));if(e.below){var a=js(Se(e.below,t));r=new W("munderover",[n,a,i])}else r=new W("mover",[n,i])}else if(e.below){var s=js(Se(e.below,t));r=new W("munder",[n,s])}else r=js(),r=new W("mover",[n,r]);return r}});function t4(e,t){var n=Ue(e.body,t,!0);return L([e.mclass],n,t)}function n4(e,t){var n,r=Wt(e.body,t);return e.mclass==="minner"?n=new W("mpadded",r):e.mclass==="mord"?e.isCharacterBox?(n=r[0],n.type="mi"):n=new W("mi",r):(e.isCharacterBox?(n=r[0],n.type="mo"):n=new W("mo",r),e.mclass==="mbin"?(n.attributes.lspace="0.22em",n.attributes.rspace="0.22em"):e.mclass==="mpunct"?(n.attributes.lspace="0em",n.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(n.attributes.lspace="0em",n.attributes.rspace="0em"):e.mclass==="minner"&&(n.attributes.lspace="0.0556em",n.attributes.width="+0.1111em")),n}Y({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:"mclass",mode:n.mode,mclass:"m"+r.slice(5),body:Ze(i),isCharacterBox:Wn(i)}},htmlBuilder:t4,mathmlBuilder:n4});var Il=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};Y({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:n}=e;return{type:"mclass",mode:n.mode,mclass:Il(t[0]),body:Ze(t[1]),isCharacterBox:Wn(t[1])}}});Y({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:n,funcName:r}=e,i=t[1],a=t[0],s;r!=="\\stackrel"?s=Il(i):s="mrel";var o={type:"op",mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!=="\\stackrel",body:Ze(i)},l={type:"supsub",mode:a.mode,base:o,sup:r==="\\underset"?null:a,sub:r==="\\underset"?a:null};return{type:"mclass",mode:n.mode,mclass:s,body:[l],isCharacterBox:Wn(l)}},htmlBuilder:t4,mathmlBuilder:n4});Y({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"pmb",mode:n.mode,mclass:Il(t[0]),body:Ze(t[0])}},htmlBuilder(e,t){var n=Ue(e.body,t,!0),r=L([e.mclass],n,t);return r.style.textShadow="0.02em 0.01em 0.04px",r},mathmlBuilder(e,t){var n=Wt(e.body,t),r=new W("mstyle",n);return r.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),r}});var wT={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},wp=()=>({type:"styling",body:[],mode:"math",style:"display"}),xp=e=>e.type==="textord"&&e.text==="@",xT=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function _T(e,t,n){var r=wT[e];switch(r){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return n.callFunction(r,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var i=n.callFunction("\\\\cdleft",[t[0]],[]),a={type:"atom",text:r,mode:"math",family:"rel"},s=n.callFunction("\\Big",[a],[]),o=n.callFunction("\\\\cdright",[t[1]],[]),l={type:"ordgroup",mode:"math",body:[i,s,o]};return n.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return n.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var u={type:"textord",text:"\\Vert",mode:"math"};return n.callFunction("\\Big",[u],[])}default:return{type:"textord",text:" ",mode:"math"}}}function kT(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n==="&"||n==="\\\\")e.consume();else if(n==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new D("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var r=[],i=[r],a=0;a<t.length;a++){for(var s=t[a],o=wp(),l=0;l<s.length;l++)if(!xp(s[l]))o.body.push(s[l]);else{r.push(o),l+=1;var u=kl(s[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(u))if("<>AV".includes(u))for(var c=0;c<2;c++){for(var m=!0,f=l+1;f<s.length;f++){if(xT(s[f],u)){m=!1,l=f;break}if(xp(s[f]))throw new D("Missing a "+u+" character to complete a CD arrow.",s[f]);h[c].body.push(s[f])}if(m)throw new D("Missing a "+u+" character to complete a CD arrow.",s[l])}else throw new D('Expected one of "<>AV=|." after @',s[l]);var y=_T(u,h,e),$={type:"styling",body:[y],mode:"math",style:"display"};r.push($),o=wp()}a%2===0?r.push(o):r.shift(),r=[],i.push(r)}e.gullet.endGroup(),e.gullet.endGroup();var I=new Array(i[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:I,colSeparationType:"CD",hLinesBeforeRow:new Array(i.length+1).fill([])}}Y({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:"cdlabel",mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=qi(ye(e.label,n,t),t);return r.classes.push("cd-label-"+e.side),r.style.bottom=G(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new W("mrow",[Se(e.label,t)]);return n=new W("mpadded",[n]),n.setAttribute("width","0"),e.side==="left"&&n.setAttribute("lspace","-1width"),n.setAttribute("voffset","0.7em"),n=new W("mstyle",[n]),n.setAttribute("displaystyle","false"),n.setAttribute("scriptlevel","1"),n}});Y({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:n}=e;return{type:"cdlabelparent",mode:n.mode,fragment:t[0]}},htmlBuilder(e,t){var n=qi(ye(e.fragment,t),t);return n.classes.push("cd-vert-arrow"),n},mathmlBuilder(e,t){return new W("mrow",[Se(e.fragment,t)])}});Y({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:n}=e,r=ce(t[0],"ordgroup"),i=r.body,a="",s=0;s<i.length;s++){var o=ce(i[s],"textord");a+=o.text}var l=parseInt(a),u;if(isNaN(l))throw new D("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new D("\\@char with invalid code point "+a);return l<=65535?u=String.fromCharCode(l):(l-=65536,u=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:n.mode,text:u}}});var r4=(e,t)=>{var n=Ue(e.body,t.withColor(e.color),!1);return Gn(n)},i4=(e,t)=>{var n=Wt(e.body,t.withColor(e.color)),r=new W("mstyle",n);return r.setAttribute("mathcolor",e.color),r};Y({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:n}=e,r=ce(t[0],"color-token").color,i=t[1];return{type:"color",mode:n.mode,color:r,body:Ze(i)}},htmlBuilder:r4,mathmlBuilder:i4});Y({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:n,breakOnTokenText:r}=e,i=ce(t[0],"color-token").color;n.gullet.macros.set("\\current@color",i);var a=n.parseExpression(!0,r);return{type:"color",mode:n.mode,color:i,body:a}},htmlBuilder:r4,mathmlBuilder:i4});Y({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,n){var{parser:r}=e,i=r.gullet.future().text==="["?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:r.mode,newLine:a,size:i&&ce(i,"size").value}},htmlBuilder(e,t){var n=L(["mspace"],[],t);return e.newLine&&(n.classes.push("newline"),e.size&&(n.style.marginTop=G(Re(e.size,t)))),n},mathmlBuilder(e,t){var n=new W("mspace");return e.newLine&&(n.setAttribute("linebreak","newline"),e.size&&n.setAttribute("height",G(Re(e.size,t)))),n}});var oc={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},a4=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new D("Expected a control sequence",e);return t},ST=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},s4=(e,t,n,r)=>{var i=e.gullet.macros.get(n.text);i==null&&(n.noexpand=!0,i={tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,i,r)};Y({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:n}=e;t.consumeSpaces();var r=t.fetch();if(oc[r.text])return(n==="\\global"||n==="\\\\globallong")&&(r.text=oc[r.text]),ce(t.parseFunction(),"internal");throw new D("Invalid token after macro prefix",r)}});Y({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=t.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new D("Expected a control sequence",r);for(var a=0,s,o=[[]];t.gullet.future().text!=="{";)if(r=t.gullet.popToken(),r.text==="#"){if(t.gullet.future().text==="{"){s=t.gullet.future(),o[a].push("{");break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new D('Invalid argument number "'+r.text+'"');if(parseInt(r.text)!==a+1)throw new D('Argument number "'+r.text+'" out of order');a++,o.push([])}else{if(r.text==="EOF")throw new D("Expected a macro definition");o[a].push(r.text)}var{tokens:l}=t.gullet.consumeArg();return s&&l.unshift(s),(n==="\\edef"||n==="\\xdef")&&(l=t.gullet.expandTokens(l),l.reverse()),t.gullet.macros.set(i,{tokens:l,numArgs:a,delimiters:o},n===oc[n]),{type:"internal",mode:t.mode}}});Y({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=a4(t.gullet.popToken());t.gullet.consumeSpaces();var i=ST(t);return s4(t,r,i,n==="\\\\globallet"),{type:"internal",mode:t.mode}}});Y({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=a4(t.gullet.popToken()),i=t.gullet.popToken(),a=t.gullet.popToken();return s4(t,r,a,n==="\\\\globalfuture"),t.gullet.pushToken(a),t.gullet.pushToken(i),{type:"internal",mode:t.mode}}});var ca=function(t,n,r){var i=Ae.math[t]&&Ae.math[t].replace,a=Bh(i||t,n,r);if(!a)throw new Error("Unsupported symbol "+t+" and font size "+n+".");return a},jh=function(t,n,r,i){var a=r.havingBaseStyle(n),s=L(i.concat(a.sizingClasses(r)),[t],r),o=a.sizeMultiplier/r.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},o4=function(t,n,r){var i=n.havingBaseStyle(r),a=(1-n.sizeMultiplier/i.sizeMultiplier)*n.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=G(a),t.height-=a,t.depth+=a},IT=function(t,n,r,i,a,s){var o=mt(t,"Main-Regular",a,i),l=jh(o,n,i,s);return r&&o4(l,i,n),l},zT=function(t,n,r,i){return mt(t,"Size"+n+"-Regular",r,i)},l4=function(t,n,r,i,a,s){var o=zT(t,n,a,i),l=jh(L(["delimsizing","size"+n],[o],i),ae.TEXT,i,s);return r&&o4(l,i,ae.TEXT),l},Nu=function(t,n,r){var i;n==="Size1-Regular"?i="delim-size1":i="delim-size4";var a=L(["delimsizinginner",i],[L([],[mt(t,n,r)])]);return{type:"elem",elem:a}},Eu=function(t,n,r){var i=fn["Size4-Regular"][t.charCodeAt(0)]?fn["Size4-Regular"][t.charCodeAt(0)][4]:fn["Size1-Regular"][t.charCodeAt(0)][4],a=new fr("inner",Dz(t,Math.round(1e3*n))),s=new Ln([a],{width:G(i),height:G(n),style:"width:"+G(i),viewBox:"0 0 "+1e3*i+" "+Math.round(1e3*n),preserveAspectRatio:"xMinYMin"}),o=gr([],[s],r);return o.height=n,o.style.height=G(n),o.style.width=G(i),{type:"elem",elem:o}},lc=.008,Ps={type:"kern",size:-1*lc},TT=new Set(["|","\\lvert","\\rvert","\\vert"]),CT=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),u4=function(t,n,r,i,a,s){var o,l,u,h,c="",m=0;o=u=h=t,l=null;var f="Size1-Regular";t==="\\uparrow"?u=h="⏐":t==="\\Uparrow"?u=h="‖":t==="\\downarrow"?o=u="⏐":t==="\\Downarrow"?o=u="‖":t==="\\updownarrow"?(o="\\uparrow",u="⏐",h="\\downarrow"):t==="\\Updownarrow"?(o="\\Uparrow",u="‖",h="\\Downarrow"):TT.has(t)?(u="∣",c="vert",m=333):CT.has(t)?(u="∥",c="doublevert",m=556):t==="["||t==="\\lbrack"?(o="⎡",u="⎢",h="⎣",f="Size4-Regular",c="lbrack",m=667):t==="]"||t==="\\rbrack"?(o="⎤",u="⎥",h="⎦",f="Size4-Regular",c="rbrack",m=667):t==="\\lfloor"||t==="⌊"?(u=o="⎢",h="⎣",f="Size4-Regular",c="lfloor",m=667):t==="\\lceil"||t==="⌈"?(o="⎡",u=h="⎢",f="Size4-Regular",c="lceil",m=667):t==="\\rfloor"||t==="⌋"?(u=o="⎥",h="⎦",f="Size4-Regular",c="rfloor",m=667):t==="\\rceil"||t==="⌉"?(o="⎤",u=h="⎥",f="Size4-Regular",c="rceil",m=667):t==="("||t==="\\lparen"?(o="⎛",u="⎜",h="⎝",f="Size4-Regular",c="lparen",m=875):t===")"||t==="\\rparen"?(o="⎞",u="⎟",h="⎠",f="Size4-Regular",c="rparen",m=875):t==="\\{"||t==="\\lbrace"?(o="⎧",l="⎨",h="⎩",u="⎪",f="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(o="⎫",l="⎬",h="⎭",u="⎪",f="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(o="⎧",h="⎩",u="⎪",f="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(o="⎫",h="⎭",u="⎪",f="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(o="⎧",h="⎭",u="⎪",f="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(o="⎫",h="⎩",u="⎪",f="Size4-Regular");var y=ca(o,f,a),$=y.height+y.depth,I=ca(u,f,a),b=I.height+I.depth,v=ca(h,f,a),x=v.height+v.depth,N=0,A=1;if(l!==null){var T=ca(l,f,a);N=T.height+T.depth,A=2}var M=$+x+N,R=Math.max(0,Math.ceil((n-M)/(A*b))),j=M+R*A*b,E=i.fontMetrics().axisHeight;r&&(E*=i.sizeMultiplier);var Z=j/2-E,X=[];if(c.length>0){var oe=j-$-x,le=Math.round(j*1e3),ie=Wz(c,Math.round(oe*1e3)),be=new fr(c,ie),we=G(m/1e3),H=G(le/1e3),ee=new Ln([be],{width:we,height:H,viewBox:"0 0 "+m+" "+le}),_=gr([],[ee],i);_.height=le/1e3,_.style.width=we,_.style.height=H,X.push({type:"elem",elem:_})}else{if(X.push(Nu(h,f,a)),X.push(Ps),l===null){var se=j-$-x+2*lc;X.push(Eu(u,se,i))}else{var fe=(j-$-x-N)/2+2*lc;X.push(Eu(u,fe,i)),X.push(Ps),X.push(Nu(l,f,a)),X.push(Ps),X.push(Eu(u,fe,i))}X.push(Ps),X.push(Nu(o,f,a))}var z=i.havingBaseStyle(ae.TEXT),Ne=ve({positionType:"bottom",positionData:Z,children:X});return jh(L(["delimsizing","mult"],[Ne],z),ae.TEXT,i,s)},Au=80,Bu=.08,Mu=function(t,n,r,i,a){var s=Pz(t,i,r),o=new fr(t,s),l=new Ln([o],{width:"400em",height:G(n),viewBox:"0 0 400000 "+r,preserveAspectRatio:"xMinYMin slice"});return gr(["hide-tail"],[l],a)},NT=function(t,n){var r=n.havingBaseSizing(),i=p4("\\surd",t*r.sizeMultiplier,m4,r),a=r.sizeMultiplier,s=Math.max(0,n.minRuleThickness-n.fontMetrics().sqrtRuleThickness),o,l=0,u=0,h=0,c;return i.type==="small"?(h=1e3+1e3*s+Au,t<1?a=1:t<1.4&&(a=.7),l=(1+s+Bu)/a,u=(1+s)/a,o=Mu("sqrtMain",l,h,s,n),o.style.minWidth="0.853em",c=.833/a):i.type==="large"?(h=(1e3+Au)*_a[i.size],u=(_a[i.size]+s)/a,l=(_a[i.size]+s+Bu)/a,o=Mu("sqrtSize"+i.size,l,h,s,n),o.style.minWidth="1.02em",c=1/a):(l=t+s+Bu,u=t+s,h=Math.floor(1e3*t+s)+Au,o=Mu("sqrtTall",l,h,s,n),o.style.minWidth="0.742em",c=1.056),o.height=u,o.style.height=G(l),{span:o,advanceWidth:c,ruleWidth:(n.fontMetrics().sqrtRuleThickness+s)*a}},c4=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),ET=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),h4=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),_a=[0,1.2,1.8,2.4,3],d4=function(t,n,r,i,a){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),c4.has(t)||h4.has(t))return l4(t,n,!1,r,i,a);if(ET.has(t))return u4(t,_a[n],!1,r,i,a);throw new D("Illegal delimiter: '"+t+"'")},AT=[{type:"small",style:ae.SCRIPTSCRIPT},{type:"small",style:ae.SCRIPT},{type:"small",style:ae.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],BT=[{type:"small",style:ae.SCRIPTSCRIPT},{type:"small",style:ae.SCRIPT},{type:"small",style:ae.TEXT},{type:"stack"}],m4=[{type:"small",style:ae.SCRIPTSCRIPT},{type:"small",style:ae.SCRIPT},{type:"small",style:ae.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],MT=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";var n=t.type;throw new Error("Add support for delim type '"+n+"' here.")},p4=function(t,n,r,i){for(var a=Math.min(2,3-i.style.size),s=a;s<r.length;s++){var o=r[s];if(o.type==="stack")break;var l=ca(t,MT(o),"math"),u=l.height+l.depth;if(o.type==="small"){var h=i.havingBaseStyle(o.style);u*=h.sizeMultiplier}if(u>n)return o}return r[r.length-1]},uc=function(t,n,r,i,a,s){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var o;h4.has(t)?o=AT:c4.has(t)?o=m4:o=BT;var l=p4(t,n,o,i);return l.type==="small"?IT(t,l.style,r,i,a,s):l.type==="large"?l4(t,l.size,r,i,a,s):u4(t,n,r,i,a,s)},qu=function(t,n,r,i,a,s){var o=i.fontMetrics().axisHeight*i.sizeMultiplier,l=901,u=5/i.fontMetrics().ptPerEm,h=Math.max(n-o,r+o),c=Math.max(h/500*l,2*h-u);return uc(t,c,!0,i,a,s)},_p={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},qT=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function zl(e,t){var n=Sl(e);if(n&&qT.has(n.text))return n;throw n?new D("Invalid delimiter '"+n.text+"' after '"+t.funcName+"'",e):new D("Invalid delimiter type '"+e.type+"'",e)}Y({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var n=zl(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:_p[e.funcName].size,mclass:_p[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim==="."?L([e.mclass]):d4(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(Ut(e.delim,e.mode));var n=new W("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?n.setAttribute("fence","true"):n.setAttribute("fence","false"),n.setAttribute("stretchy","true");var r=G(_a[e.size]);return n.setAttribute("minsize",r),n.setAttribute("maxsize",r),n}});function kp(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}Y({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=e.parser.gullet.macros.get("\\current@color");if(n&&typeof n!="string")throw new D("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:zl(t[0],e).text,color:n}}});Y({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=zl(t[0],e),r=e.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect("\\right",!1);var a=ce(r.parseFunction(),"leftright-right");return{type:"leftright",mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(e,t)=>{kp(e);for(var n=Ue(e.body,t,!0,["mopen","mclose"]),r=0,i=0,a=!1,s=0;s<n.length;s++)n[s].isMiddle?a=!0:(r=Math.max(n[s].height,r),i=Math.max(n[s].depth,i));r*=t.sizeMultiplier,i*=t.sizeMultiplier;var o;if(e.left==="."?o=Va(t,["mopen"]):o=qu(e.left,r,i,t,e.mode,["mopen"]),n.unshift(o),a)for(var l=1;l<n.length;l++){var u=n[l],h=u.isMiddle;h&&(n[l]=qu(h.delim,r,i,h.options,e.mode,[]))}var c;if(e.right===".")c=Va(t,["mclose"]);else{var m=e.rightColor?t.withColor(e.rightColor):t;c=qu(e.right,r,i,m,e.mode,["mclose"])}return n.push(c),L(["minner"],n,t)},mathmlBuilder:(e,t)=>{kp(e);var n=Wt(e.body,t);if(e.left!=="."){var r=new W("mo",[Ut(e.left,e.mode)]);r.setAttribute("fence","true"),n.unshift(r)}if(e.right!=="."){var i=new W("mo",[Ut(e.right,e.mode)]);i.setAttribute("fence","true"),e.rightColor&&i.setAttribute("mathcolor",e.rightColor),n.push(i)}return Rh(n)}});Y({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=zl(t[0],e);if(!e.parser.leftrightDepth)throw new D("\\middle without preceding \\left",n);return{type:"middle",mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;if(e.delim===".")n=Va(t,[]);else{n=d4(e.delim,1,t,e.mode,[]);var r={delim:e.delim,options:t};n.isMiddle=r}return n},mathmlBuilder:(e,t)=>{var n=e.delim==="\\vert"||e.delim==="|"?Ut("|","text"):Ut(e.delim,e.mode),r=new W("mo",[n]);return r.setAttribute("fence","true"),r.setAttribute("lspace","0.05em"),r.setAttribute("rspace","0.05em"),r}});var Tl=(e,t)=>{var n=qi(ye(e.body,t),t),r=e.label.slice(1),i=t.sizeMultiplier,a,s=0,o=Wn(e.body);if(r==="sout")a=L(["stretchy","sout"]),a.height=t.fontMetrics().defaultRuleThickness/i,s=-.5*t.fontMetrics().xHeight;else if(r==="phase"){var l=Re({number:.6,unit:"pt"},t),u=Re({number:.35,unit:"ex"},t),h=t.havingBaseSizing();i=i/h.sizeMultiplier;var c=n.height+n.depth+l+u;n.style.paddingLeft=G(c/2+l);var m=Math.floor(1e3*c*i),f=Lz(m),y=new Ln([new fr("phase",f)],{width:"400em",height:G(m/1e3),viewBox:"0 0 400000 "+m,preserveAspectRatio:"xMinYMin slice"});a=gr(["hide-tail"],[y],t),a.style.height=G(c),s=n.depth+l+u}else{/cancel/.test(r)?o||n.classes.push("cancel-pad"):r==="angl"?n.classes.push("anglpad"):n.classes.push("boxpad");var $=0,I=0,b=0;/box/.test(r)?(b=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),$=t.fontMetrics().fboxsep+(r==="colorbox"?0:b),I=$):r==="angl"?(b=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),$=4*b,I=Math.max(0,.25-n.depth)):($=o?.2:0,I=$),a=bT(n,r,$,I,t),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle="solid",a.style.borderWidth=G(b)):r==="angl"&&b!==.049&&(a.style.borderTopWidth=G(b),a.style.borderRightWidth=G(b)),s=n.depth+I,e.backgroundColor&&(a.style.backgroundColor=e.backgroundColor,e.borderColor&&(a.style.borderColor=e.borderColor))}var v;if(e.backgroundColor)v=ve({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:n,shift:0}]});else{var x=/cancel|phase/.test(r)?["svg-align"]:[];v=ve({positionType:"individualShift",children:[{type:"elem",elem:n,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:x}]})}return/cancel/.test(r)&&(v.height=n.height,v.depth=n.depth),/cancel/.test(r)&&!o?L(["mord","cancel-lap"],[v],t):L(["mord"],[v],t)},Cl=(e,t)=>{var n=0,r=new W(e.label.includes("colorbox")?"mpadded":"menclose",[Se(e.body,t)]);switch(e.label){case"\\cancel":r.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":r.setAttribute("notation","downdiagonalstrike");break;case"\\phase":r.setAttribute("notation","phasorangle");break;case"\\sout":r.setAttribute("notation","horizontalstrike");break;case"\\fbox":r.setAttribute("notation","box");break;case"\\angl":r.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute("width","+"+2*n+"pt"),r.setAttribute("height","+"+2*n+"pt"),r.setAttribute("lspace",n+"pt"),r.setAttribute("voffset",n+"pt"),e.label==="\\fcolorbox"){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute("style","border: "+G(i)+" solid "+e.borderColor)}break;case"\\xcancel":r.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&r.setAttribute("mathbackground",e.backgroundColor),r};Y({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(e,t,n){var{parser:r,funcName:i}=e,a=ce(t[0],"color-token").color,s=t[1];return{type:"enclose",mode:r.mode,label:i,backgroundColor:a,body:s}},htmlBuilder:Tl,mathmlBuilder:Cl});Y({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(e,t,n){var{parser:r,funcName:i}=e,a=ce(t[0],"color-token").color,s=ce(t[1],"color-token").color,o=t[2];return{type:"enclose",mode:r.mode,label:i,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:Tl,mathmlBuilder:Cl});Y({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"enclose",mode:n.mode,label:"\\fbox",body:t[0]}}});Y({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:"enclose",mode:n.mode,label:r,body:i}},htmlBuilder:Tl,mathmlBuilder:Cl});Y({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e;n.mode==="math"&&n.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var i=t[0];return{type:"enclose",mode:n.mode,label:r,body:i}},htmlBuilder:Tl,mathmlBuilder:Cl});Y({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:"enclose",mode:n.mode,label:"\\angl",body:t[0]}}});var f4={};function $n(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:s}=e,o={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},l=0;l<n.length;++l)f4[n[l]]=o;a&&(Oo[t]=a),s&&(Go[t]=s)}var g4={};function w(e,t){g4[e]=t}class xt{constructor(t,n,r){this.lexer=t,this.start=n,this.end=r}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new xt(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}}class Rt{constructor(t,n){this.text=t,this.loc=n}range(t,n){return new Rt(n,xt.range(this,t))}}function Sp(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n==="\\relax"&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n==="\\hline"||n==="\\hdashline";)e.consume(),t.push(n==="\\hdashline"),e.consumeSpaces(),n=e.fetch().text;return t}var Nl=e=>{var t=e.parser.settings;if(!t.displayMode)throw new D("{"+e.envName+"} can be used only in display mode.")},RT=new Set(["gather","gather*"]);function Ph(e){if(!e.includes("ed"))return!e.includes("*")}function xr(e,t,n){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:u,emptySingleRow:h,maxNumCols:c,leqno:m}=t;if(e.gullet.beginGroup(),u||e.gullet.macros.set("\\cr","\\\\\\relax"),!s){var f=e.gullet.expandMacroAsText("\\arraystretch");if(f==null)s=1;else if(s=parseFloat(f),!s||s<0)throw new D("Invalid \\arraystretch: "+f)}e.gullet.beginGroup();var y=[],$=[y],I=[],b=[],v=l!=null?[]:void 0;function x(){l&&e.gullet.macros.set("\\@eqnsw","1",!0)}function N(){v&&(e.gullet.macros.get("\\df@tag")?(v.push(e.subparse([new Rt("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):v.push(!!l&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(x(),b.push(Sp(e));;){var A=e.parseExpression(!1,u?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup();var T={type:"ordgroup",mode:e.mode,body:A};n&&(T={type:"styling",mode:e.mode,style:n,body:[T]}),y.push(T);var M=e.fetch().text;if(M==="&"){if(c&&y.length===c){if(u||o)throw new D("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(M==="\\end"){N(),y.length===1&&T.type==="styling"&&T.body.length===1&&T.body[0].type==="ordgroup"&&T.body[0].body.length===0&&($.length>1||!h)&&$.pop(),b.length<$.length+1&&b.push([]);break}else if(M==="\\\\"){e.consume();var R=void 0;e.gullet.future().text!==" "&&(R=e.parseSizeGroup(!0)),I.push(R?R.value:null),N(),b.push(Sp(e)),y=[],$.push(y),x()}else throw new D("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:i,arraystretch:s,body:$,cols:a,rowGaps:I,hskipBeforeAndAfter:r,hLinesBeforeRow:b,colSeparationType:o,tags:v,leqno:m}}function Dh(e){return e.slice(0,1)==="d"?"display":"text"}var wn=function(t,n){var r,i,a=t.body.length,s=t.hLinesBeforeRow,o=0,l=new Array(a),u=[],h=Math.max(n.fontMetrics().arrayRuleWidth,n.minRuleThickness),c=1/n.fontMetrics().ptPerEm,m=5*c;if(t.colSeparationType&&t.colSeparationType==="small"){var f=n.havingStyle(ae.SCRIPT).sizeMultiplier;m=.2778*(f/n.sizeMultiplier)}var y=t.colSeparationType==="CD"?Re({number:3,unit:"ex"},n):12*c,$=3*c,I=t.arraystretch*y,b=.7*I,v=.3*I,x=0;function N(ne){for(var he=0;he<ne.length;++he)he>0&&(x+=.25),u.push({pos:x,isDashed:ne[he]})}for(N(s[0]),r=0;r<t.body.length;++r){var A=t.body[r],T=b,M=v;o<A.length&&(o=A.length);var R=new Array(A.length);for(i=0;i<A.length;++i){var j=ye(A[i],n);M<j.depth&&(M=j.depth),T<j.height&&(T=j.height),R[i]=j}var E=t.rowGaps[r],Z=0;E&&(Z=Re(E,n),Z>0&&(Z+=v,M<Z&&(M=Z),Z=0)),t.addJot&&r<t.body.length-1&&(M+=$),R.height=T,R.depth=M,x+=T,R.pos=x,x+=M+Z,l[r]=R,N(s[r+1])}var X=x/2+n.fontMetrics().axisHeight,oe=t.cols||[],le=[],ie,be,we=[];if(t.tags&&t.tags.some(ne=>ne))for(r=0;r<a;++r){var H=l[r],ee=H.pos-X,_=t.tags[r],se=void 0;_===!0?se=L(["eqn-num"],[],n):_===!1?se=L([],[],n):se=L([],Ue(_,n,!0),n),se.depth=H.depth,se.height=H.height,we.push({type:"elem",elem:se,shift:ee})}for(i=0,be=0;i<o||be<oe.length;++i,++be){for(var fe,z=oe[be],Ne=!0;(($t=z)==null?void 0:$t.type)==="separator";){var $t;if(Ne||(ie=L(["arraycolsep"],[]),ie.style.width=G(n.fontMetrics().doubleRuleSep),le.push(ie)),z.separator==="|"||z.separator===":"){var xe=z.separator==="|"?"solid":"dashed",et=L(["vertical-separator"],[],n);et.style.height=G(x),et.style.borderRightWidth=G(h),et.style.borderRightStyle=xe,et.style.margin="0 "+G(-h/2);var Qt=x-X;Qt&&(et.style.verticalAlign=G(-Qt)),le.push(et)}else throw new D("Invalid separator type: "+z.separator);be++,z=oe[be],Ne=!1}if(!(i>=o)){var Ct=void 0;if(i>0||t.hskipBeforeAndAfter){var _n,_r;Ct=(_n=(_r=z)==null?void 0:_r.pregap)!=null?_n:m,Ct!==0&&(ie=L(["arraycolsep"],[]),ie.style.width=G(Ct),le.push(ie))}var as=[];for(r=0;r<a;++r){var Yr=l[r],Ur=Yr[i];if(Ur){var ss=Yr.pos-X;Ur.depth=Yr.depth,Ur.height=Yr.height,as.push({type:"elem",elem:Ur,shift:ss})}}var os=ve({positionType:"individualShift",children:as}),ls=L(["col-align-"+(((fe=z)==null?void 0:fe.align)||"c")],[os]);if(le.push(ls),i<o-1||t.hskipBeforeAndAfter){var us,Hi;Ct=(us=(Hi=z)==null?void 0:Hi.postgap)!=null?us:m,Ct!==0&&(ie=L(["arraycolsep"],[]),ie.style.width=G(Ct),le.push(ie))}}}var kr=L(["mtable"],le);if(u.length>0){for(var Al=Mi("hline",n,h),Bl=Mi("hdashline",n,h),Vi=[{type:"elem",elem:kr,shift:0}];u.length>0;){var cs=u.pop(),hs=cs.pos-X;cs.isDashed?Vi.push({type:"elem",elem:Bl,shift:hs}):Vi.push({type:"elem",elem:Al,shift:hs})}kr=ve({positionType:"individualShift",children:Vi})}if(we.length===0)return L(["mord"],[kr],n);var q=ve({positionType:"individualShift",children:we}),J=L(["tag"],[q],n);return Gn([kr,J])},FT={c:"center ",l:"left ",r:"right "},xn=function(t,n){for(var r=[],i=new W("mtd",[],["mtr-glue"]),a=new W("mtd",[],["mml-eqn-num"]),s=0;s<t.body.length;s++){for(var o=t.body[s],l=[],u=0;u<o.length;u++)l.push(new W("mtd",[Se(o[u],n)]));t.tags&&t.tags[s]&&(l.unshift(i),l.push(i),t.leqno?l.unshift(a):l.push(a)),r.push(new W("mtr",l))}var h=new W("mtable",r),c=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);h.setAttribute("rowspacing",G(c));var m="",f="";if(t.cols&&t.cols.length>0){var y=t.cols,$="",I=!1,b=0,v=y.length;y[0].type==="separator"&&(m+="top ",b=1),y[y.length-1].type==="separator"&&(m+="bottom ",v-=1);for(var x=b;x<v;x++){var N=y[x];N.type==="align"?(f+=FT[N.align],I&&($+="none "),I=!0):N.type==="separator"&&I&&($+=N.separator==="|"?"solid ":"dashed ",I=!1)}h.setAttribute("columnalign",f.trim()),/[sd]/.test($)&&h.setAttribute("columnlines",$.trim())}if(t.colSeparationType==="align"){for(var A=t.cols||[],T="",M=1;M<A.length;M++)T+=M%2?"0em ":"1em ";h.setAttribute("columnspacing",T.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var R="",j=t.hLinesBeforeRow;m+=j[0].length>0?"left ":"",m+=j[j.length-1].length>0?"right ":"";for(var E=1;E<j.length-1;E++)R+=j[E].length===0?"none ":j[E][0]?"dashed ":"solid ";return/[sd]/.test(R)&&h.setAttribute("rowlines",R.trim()),m!==""&&(h=new W("menclose",[h]),h.setAttribute("notation",m.trim())),t.arraystretch&&t.arraystretch<1&&(h=new W("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},v4=function(t,n){t.envName.includes("ed")||Nl(t);var r=[],i=t.envName.includes("at")?"alignat":"align",a=t.envName==="split",s=xr(t.parser,{cols:r,addJot:!0,autoTag:a?void 0:Ph(t.envName),emptySingleRow:!0,colSeparationType:i,maxNumCols:a?2:void 0,leqno:t.parser.settings.leqno},"display"),o=0,l=0,u={type:"ordgroup",mode:t.mode,body:[]};if(n[0]&&n[0].type==="ordgroup"){for(var h="",c=0;c<n[0].body.length;c++){var m=ce(n[0].body[c],"textord");h+=m.text}o=Number(h),l=o*2}var f=!l;s.body.forEach(function(b){for(var v=1;v<b.length;v+=2){var x=ce(b[v],"styling"),N=ce(x.body[0],"ordgroup");N.body.unshift(u)}if(f)l<b.length&&(l=b.length);else{var A=b.length/2;if(o<A)throw new D("Too many math in a row: "+("expected "+o+", but got "+A),b[0])}});for(var y=0;y<l;++y){var $="r",I=0;y%2===1?$="l":y>0&&f&&(I=1),r[y]={type:"align",align:$,pregap:I,postgap:0}}return s.colSeparationType=f?"align":"alignat",s};$n({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var n=Sl(t[0]),r=n?[t[0]]:ce(t[0],"ordgroup").body,i=r.map(function(s){var o=kl(s),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new D("Unknown column alignment: "+l,s)}),a={cols:i,hskipBeforeAndAfter:!0,maxNumCols:i.length};return xr(e.parser,a,Dh(e.envName))},htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],n="c",r={hskipBeforeAndAfter:!1,cols:[{type:"align",align:n}]};if(e.envName.charAt(e.envName.length-1)==="*"){var i=e.parser;if(i.consumeSpaces(),i.fetch().text==="["){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,!"lcr".includes(n))throw new D("Expected l or c or r",i.nextToken);i.consume(),i.consumeSpaces(),i.expect("]"),i.consume(),r.cols=[{type:"align",align:n}]}}var a=xr(e.parser,r,Dh(e.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:n}),t?{type:"leftright",mode:e.mode,body:[a],left:t[0],right:t[1],rightColor:void 0}:a},htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},n=xr(e.parser,t,"script");return n.colSeparationType="small",n},htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var n=Sl(t[0]),r=n?[t[0]]:ce(t[0],"ordgroup").body,i=r.map(function(o){var l=kl(o),u=l.text;if("lc".includes(u))return{type:"align",align:u};throw new D("Unknown column alignment: "+u,o)});if(i.length>1)throw new D("{subarray} can contain only one column");var a={cols:i,hskipBeforeAndAfter:!1,arraystretch:.5},s=xr(e.parser,a,"script");if(s.body.length>0&&s.body[0].length>1)throw new D("{subarray} can contain only one column");return s},htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},n=xr(e.parser,t,Dh(e.envName));return{type:"leftright",mode:e.mode,body:[n],left:e.envName.includes("r")?".":"\\{",right:e.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:v4,htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){RT.has(e.envName)&&Nl(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Ph(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return xr(e.parser,t,"display")},htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:v4,htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){Nl(e);var t={autoTag:Ph(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return xr(e.parser,t,"display")},htmlBuilder:wn,mathmlBuilder:xn});$n({type:"array",names:["CD"],props:{numArgs:0},handler(e){return Nl(e),kT(e.parser)},htmlBuilder:wn,mathmlBuilder:xn});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");Y({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new D(e.funcName+" valid only within array environment")}});var Ip=f4;Y({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];if(i.type!=="ordgroup")throw new D("Invalid environment name",i);for(var a="",s=0;s<i.body.length;++s)a+=ce(i.body[s],"textord").text;if(r==="\\begin"){if(!Ip.hasOwnProperty(a))throw new D("No such environment: "+a,i);var o=Ip[a],{args:l,optArgs:u}=n.parseArguments("\\begin{"+a+"}",o),h={mode:n.mode,envName:a,parser:n},c=o.handler(h,l,u);n.expect("\\end",!1);var m=n.nextToken,f=ce(n.parseFunction(),"environment");if(f.name!==a)throw new D("Mismatch: \\begin{"+a+"} matched by \\end{"+f.name+"}",m);return c}return{type:"environment",mode:n.mode,name:a,nameGroup:i}}});var y4=(e,t)=>{var n=e.font,r=t.withFont(n);return ye(e.body,r)},b4=(e,t)=>{var n=e.font,r=t.withFont(n);return Se(e.body,r)},zp={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};Y({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=Zo(t[0]),a=r;return a in zp&&(a=zp[a]),{type:"font",mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:y4,mathmlBuilder:b4});Y({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"mclass",mode:n.mode,mclass:Il(r),body:[{type:"font",mode:n.mode,font:"boldsymbol",body:r}],isCharacterBox:Wn(r)}}});Y({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,breakOnTokenText:i}=e,{mode:a}=n,s=n.parseExpression(!0,i),o="math"+r.slice(1);return{type:"font",mode:a,font:o,body:{type:"ordgroup",mode:n.mode,body:s}}},htmlBuilder:y4,mathmlBuilder:b4});var LT=(e,t)=>{var n=t.style,r=n.fracNum(),i=n.fracDen(),a;a=t.havingStyle(r);var s=ye(e.numer,a,t);if(e.continued){var o=8.5/t.fontMetrics().ptPerEm,l=3.5/t.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=t.havingStyle(i);var u=ye(e.denom,a,t),h,c,m;e.hasBarLine?(e.barSize?(c=Re(e.barSize,t),h=Mi("frac-line",t,c)):h=Mi("frac-line",t),c=h.height,m=h.height):(h=null,c=0,m=t.fontMetrics().defaultRuleThickness);var f,y,$;n.size===ae.DISPLAY.size?(f=t.fontMetrics().num1,c>0?y=3*m:y=7*m,$=t.fontMetrics().denom1):(c>0?(f=t.fontMetrics().num2,y=m):(f=t.fontMetrics().num3,y=3*m),$=t.fontMetrics().denom2);var I;if(h){var v=t.fontMetrics().axisHeight;f-s.depth-(v+.5*c)<y&&(f+=y-(f-s.depth-(v+.5*c))),v-.5*c-(u.height-$)<y&&($+=y-(v-.5*c-(u.height-$)));var x=-(v-.5*c);I=ve({positionType:"individualShift",children:[{type:"elem",elem:u,shift:$},{type:"elem",elem:h,shift:x},{type:"elem",elem:s,shift:-f}]})}else{var b=f-s.depth-(u.height-$);b<y&&(f+=.5*(y-b),$+=.5*(y-b)),I=ve({positionType:"individualShift",children:[{type:"elem",elem:u,shift:$},{type:"elem",elem:s,shift:-f}]})}a=t.havingStyle(n),I.height*=a.sizeMultiplier/t.sizeMultiplier,I.depth*=a.sizeMultiplier/t.sizeMultiplier;var N;n.size===ae.DISPLAY.size?N=t.fontMetrics().delim1:n.size===ae.SCRIPTSCRIPT.size?N=t.havingStyle(ae.SCRIPT).fontMetrics().delim2:N=t.fontMetrics().delim2;var A,T;return e.leftDelim==null?A=Va(t,["mopen"]):A=uc(e.leftDelim,N,!0,t.havingStyle(n),e.mode,["mopen"]),e.continued?T=L([]):e.rightDelim==null?T=Va(t,["mclose"]):T=uc(e.rightDelim,N,!0,t.havingStyle(n),e.mode,["mclose"]),L(["mord"].concat(a.sizingClasses(t)),[A,L(["mfrac"],[I]),T],t)},jT=(e,t)=>{var n=new W("mfrac",[Se(e.numer,t),Se(e.denom,t)]);if(!e.hasBarLine)n.setAttribute("linethickness","0px");else if(e.barSize){var r=Re(e.barSize,t);n.setAttribute("linethickness",G(r))}if(e.leftDelim!=null||e.rightDelim!=null){var i=[];if(e.leftDelim!=null){var a=new W("mo",[new He(e.leftDelim.replace("\\",""))]);a.setAttribute("fence","true"),i.push(a)}if(i.push(n),e.rightDelim!=null){var s=new W("mo",[new He(e.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),i.push(s)}return Rh(i)}return n},$4=(e,t)=>{if(!t)return e;var n={type:"styling",mode:e.mode,style:t,body:[e]};return n};Y({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1],s,o=null,l=null;switch(r){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var u=r==="\\cfrac",h=null;return u||r.startsWith("\\d")?h="display":r.startsWith("\\t")&&(h="text"),$4({type:"genfrac",mode:n.mode,numer:i,denom:a,continued:u,hasBarLine:s,leftDelim:o,rightDelim:l,barSize:null},h)},htmlBuilder:LT,mathmlBuilder:jT});Y({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:n,token:r}=e,i;switch(n){case"\\over":i="\\frac";break;case"\\choose":i="\\binom";break;case"\\atop":i="\\\\atopfrac";break;case"\\brace":i="\\\\bracefrac";break;case"\\brack":i="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:i,token:r}}});var Tp=["display","text","script","scriptscript"],Cp=function(t){var n=null;return t.length>0&&(n=t,n=n==="."?null:n),n};Y({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:n}=e,r=t[4],i=t[5],a=Zo(t[0]),s=a.type==="atom"&&a.family==="open"?Cp(a.text):null,o=Zo(t[1]),l=o.type==="atom"&&o.family==="close"?Cp(o.text):null,u=ce(t[2],"size"),h,c=null;u.isBlank?h=!0:(c=u.value,h=c.number>0);var m=null,f=t[3];if(f.type==="ordgroup"){if(f.body.length>0){var y=ce(f.body[0],"textord");m=Tp[Number(y.text)]}}else f=ce(f,"textord"),m=Tp[Number(f.text)];return $4({type:"genfrac",mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:h,barSize:c,leftDelim:s,rightDelim:l},m)}});Y({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:n,funcName:r,token:i}=e;return{type:"infix",mode:n.mode,replaceWith:"\\\\abovefrac",size:ce(t[0],"size").value,token:i}}});Y({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=ce(t[1],"infix").size;if(!a)throw new Error("\\\\abovefrac expected size, but got "+String(a));var s=t[2],o=a.number>0;return{type:"genfrac",mode:n.mode,numer:i,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null}}});var w4=(e,t)=>{var n=t.style,r,i;e.type==="supsub"?(r=e.sup?ye(e.sup,t.havingStyle(n.sup()),t):ye(e.sub,t.havingStyle(n.sub()),t),i=ce(e.base,"horizBrace")):i=ce(e,"horizBrace");var a=ye(i.base,t.havingBaseStyle(ae.DISPLAY)),s=_l(i,t),o;if(i.isOver?(o=ve({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s}]}),o.children[0].children[0].children[1].classes.push("svg-align")):(o=ve({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a}]}),o.children[0].children[0].children[0].classes.push("svg-align")),r){var l=L(["minner",i.isOver?"mover":"munder"],[o],t);i.isOver?o=ve({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:r}]}):o=ve({positionType:"bottom",positionData:l.depth+.2+r.height+r.depth,children:[{type:"elem",elem:r},{type:"kern",size:.2},{type:"elem",elem:l}]})}return L(["minner",i.isOver?"mover":"munder"],[o],t)},PT=(e,t)=>{var n=xl(e.label);return new W(e.isOver?"mover":"munder",[Se(e.base,t),n])};Y({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:"horizBrace",mode:n.mode,label:r,isOver:r.includes("\\over"),base:t[0]}},htmlBuilder:w4,mathmlBuilder:PT});Y({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[1],i=ce(t[0],"url").url;return n.settings.isTrusted({command:"\\href",url:i})?{type:"href",mode:n.mode,href:i,body:Ze(r)}:n.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var n=Ue(e.body,t,!1);return rT(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=vr(e.body,t);return n instanceof W||(n=new W("mrow",[n])),n.setAttribute("href",e.href),n}});Y({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=ce(t[0],"url").url;if(!n.settings.isTrusted({command:"\\url",url:r}))return n.formatUnsupportedCmd("\\url");for(var i=[],a=0;a<r.length;a++){var s=r[a];s==="~"&&(s="\\textasciitilde"),i.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:n.mode,font:"\\texttt",body:i};return{type:"href",mode:n.mode,href:r,body:Ze(o)}}});Y({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:n}=e;return{type:"hbox",mode:n.mode,body:Ze(t[0])}},htmlBuilder(e,t){var n=Ue(e.body,t,!1);return Gn(n)},mathmlBuilder(e,t){return new W("mrow",Wt(e.body,t))}});Y({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,token:i}=e,a=ce(t[0],"raw").string,s=t[1];n.settings.strict&&n.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(r){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var u=a.split(","),h=0;h<u.length;h++){var c=u[h],m=c.indexOf("=");if(m<0)throw new D("\\htmlData key/value '"+c+"' missing equals sign");var f=c.slice(0,m),y=c.slice(m+1);l["data-"+f.trim()]=y}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return n.settings.isTrusted(o)?{type:"html",mode:n.mode,attributes:l,body:Ze(s)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=Ue(e.body,t,!1),r=["enclosing"];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var i=L(r,n,t);for(var a in e.attributes)a!=="class"&&e.attributes.hasOwnProperty(a)&&i.setAttribute(a,e.attributes[a]);return i},mathmlBuilder:(e,t)=>vr(e.body,t)});Y({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e;return{type:"htmlmathml",mode:n.mode,html:Ze(t[0]),mathml:Ze(t[1])}},htmlBuilder:(e,t)=>{var n=Ue(e.html,t,!1);return Gn(n)},mathmlBuilder:(e,t)=>vr(e.mathml,t)});var Ru=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var n=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!n)throw new D("Invalid size: '"+t+"' in \\includegraphics");var r={number:+(n[1]+n[2]),unit:n[3]};if(!L2(r))throw new D("Invalid unit: '"+r.unit+"' in \\includegraphics.");return r};Y({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,n)=>{var{parser:r}=e,i={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(n[0])for(var l=ce(n[0],"raw").string,u=l.split(","),h=0;h<u.length;h++){var c=u[h].split("=");if(c.length===2){var m=c[1].trim();switch(c[0].trim()){case"alt":o=m;break;case"width":i=Ru(m);break;case"height":a=Ru(m);break;case"totalheight":s=Ru(m);break;default:throw new D("Invalid key: '"+c[0]+"' in \\includegraphics.")}}}var f=ce(t[0],"url").url;return o===""&&(o=f,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),r.settings.isTrusted({command:"\\includegraphics",url:f})?{type:"includegraphics",mode:r.mode,alt:o,width:i,height:a,totalheight:s,src:f}:r.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var n=Re(e.height,t),r=0;e.totalheight.number>0&&(r=Re(e.totalheight,t)-n);var i=0;e.width.number>0&&(i=Re(e.width,t));var a={height:G(n+r)};i>0&&(a.width=G(i)),r>0&&(a.verticalAlign=G(-r));var s=new Zz(e.src,e.alt,a);return s.height=n,s.depth=r,s},mathmlBuilder:(e,t)=>{var n=new W("mglyph",[]);n.setAttribute("alt",e.alt);var r=Re(e.height,t),i=0;if(e.totalheight.number>0&&(i=Re(e.totalheight,t)-r,n.setAttribute("valign",G(-i))),n.setAttribute("height",G(r+i)),e.width.number>0){var a=Re(e.width,t);n.setAttribute("width",G(a))}return n.setAttribute("src",e.src),n}});Y({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=ce(t[0],"size");if(n.settings.strict){var a=r[1]==="m",s=i.value.unit==="mu";a?(s||n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" supports only mu units, "+("not "+i.value.unit+" units")),n.mode!=="math"&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" works only in math mode")):s&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" doesn't support mu units")}return{type:"kern",mode:n.mode,dimension:i.value}},htmlBuilder(e,t){return G2(e.dimension,t)},mathmlBuilder(e,t){var n=Re(e.dimension,t);return new Y2(n)}});Y({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:"lap",mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(e,t)=>{var n;e.alignment==="clap"?(n=L([],[ye(e.body,t)]),n=L(["inner"],[n],t)):n=L(["inner"],[ye(e.body,t)]);var r=L(["fix"],[]),i=L([e.alignment],[n,r],t),a=L(["strut"]);return a.style.height=G(i.height+i.depth),i.depth&&(a.style.verticalAlign=G(-i.depth)),i.children.unshift(a),i=L(["thinbox"],[i],t),L(["mord","vbox"],[i],t)},mathmlBuilder:(e,t)=>{var n=new W("mpadded",[Se(e.body,t)]);if(e.alignment!=="rlap"){var r=e.alignment==="llap"?"-1":"-0.5";n.setAttribute("lspace",r+"width")}return n.setAttribute("width","0px"),n}});Y({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:n,parser:r}=e,i=r.mode;r.switchMode("math");var a=n==="\\("?"\\)":"$",s=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:"styling",mode:r.mode,style:"text",body:s}}});Y({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new D("Mismatched "+e.funcName)}});var Np=(e,t)=>{switch(t.style.size){case ae.DISPLAY.size:return e.display;case ae.TEXT.size:return e.text;case ae.SCRIPT.size:return e.script;case ae.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};Y({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:n}=e;return{type:"mathchoice",mode:n.mode,display:Ze(t[0]),text:Ze(t[1]),script:Ze(t[2]),scriptscript:Ze(t[3])}},htmlBuilder:(e,t)=>{var n=Np(e,t),r=Ue(n,t,!1);return Gn(r)},mathmlBuilder:(e,t)=>{var n=Np(e,t);return vr(n,t)}});var x4=(e,t,n,r,i,a,s)=>{e=L([],[e]);var o=n&&Wn(n),l,u;if(t){var h=ye(t,r.havingStyle(i.sup()),r);u={elem:h,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-h.depth)}}if(n){var c=ye(n,r.havingStyle(i.sub()),r);l={elem:c,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-c.height)}}var m;if(u&&l){var f=r.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+e.depth+s;m=ve({positionType:"bottom",positionData:f,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:G(-a)},{type:"kern",size:l.kern},{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:G(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]})}else if(l){var y=e.height-s;m=ve({positionType:"top",positionData:y,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:G(-a)},{type:"kern",size:l.kern},{type:"elem",elem:e}]})}else if(u){var $=e.depth+s;m=ve({positionType:"bottom",positionData:$,children:[{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:G(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]})}else return e;var I=[m];if(l&&a!==0&&!o){var b=L(["mspace"],[],r);b.style.marginRight=G(a),I.unshift(b)}return L(["mop","op-limits"],I,r)},_4=new Set(["\\smallint"]),Zi=(e,t)=>{var n,r,i=!1,a;e.type==="supsub"?(n=e.sup,r=e.sub,a=ce(e.base,"op"),i=!0):a=ce(e,"op");var s=t.style,o=!1;s.size===ae.DISPLAY.size&&a.symbol&&!_4.has(a.name)&&(o=!0);var l;if(a.symbol){var u=o?"Size2-Regular":"Size1-Regular",h="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(h=a.name.slice(1),a.name=h==="oiint"?"\\iint":"\\iiint"),l=mt(a.name,u,"math",t,["mop","op-symbol",o?"large-op":"small-op"]),h.length>0){var c=l.italic,m=H2(h+"Size"+(o?"2":"1"),t);l=ve({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:m,shift:o?.08:0}]}),a.name="\\"+h,l.classes.unshift("mop"),l.italic=c}}else if(a.body){var f=Ue(a.body,t,!0);f.length===1&&f[0]instanceof Lt?(l=f[0],l.classes[0]="mop"):l=L(["mop"],f,t)}else{for(var y=[],$=1;$<a.name.length;$++)y.push(Mh(a.name[$],a.mode,t));l=L(["mop"],y,t)}var I=0,b=0;return(l instanceof Lt||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift&&(I=(l.height-l.depth)/2-t.fontMetrics().axisHeight,b=l.italic||0),i?x4(l,n,r,t,s,b,I):(I&&(l.style.position="relative",l.style.top=G(I)),l)},is=(e,t)=>{var n;if(e.symbol)n=new W("mo",[Ut(e.name,e.mode)]),_4.has(e.name)&&n.setAttribute("largeop","false");else if(e.body)n=new W("mo",Wt(e.body,t));else{n=new W("mi",[new He(e.name.slice(1))]);var r=new W("mo",[Ut("⁡","text")]);e.parentIsSupSub?n=new W("mrow",[n,r]):n=X2([n,r])}return n},DT={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};Y({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=r;return i.length===1&&(i=DT[i]),{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:Zi,mathmlBuilder:is});Y({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ze(r)}},htmlBuilder:Zi,mathmlBuilder:is});var WT={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};Y({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Zi,mathmlBuilder:is});Y({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Zi,mathmlBuilder:is});Y({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=WT[r]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Zi,mathmlBuilder:is});var k4=(e,t)=>{var n,r,i=!1,a;e.type==="supsub"?(n=e.sup,r=e.sub,a=ce(e.base,"operatorname"),i=!0):a=ce(e,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(c=>{var m="text"in c?c.text:void 0;return typeof m=="string"?{type:"textord",mode:c.mode,text:m}:c}),l=Ue(o,t.withFont("mathrm"),!0),u=0;u<l.length;u++){var h=l[u];h instanceof Lt&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=L(["mop"],l,t)}else s=L(["mop"],[],t);return i?x4(s,n,r,t,t.style,0,0):s},OT=(e,t)=>{for(var n=Wt(e.body,t.withFont("mathrm")),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof Y2))if(a instanceof W)switch(a.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof He?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):r=!1;break}default:r=!1}else r=!1}if(r){var o=n.map(h=>h.toText()).join("");n=[new He(o)]}var l=new W("mi",n);l.setAttribute("mathvariant","normal");var u=new W("mo",[Ut("⁡","text")]);return e.parentIsSupSub?new W("mrow",[l,u]):X2([l,u])};Y({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:"operatorname",mode:n.mode,body:Ze(i),alwaysHandleSupSub:r==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:k4,mathmlBuilder:OT});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Jr({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?Gn(Ue(e.body,t,!1)):L(["mord"],Ue(e.body,t,!0),t)},mathmlBuilder(e,t){return vr(e.body,t,!0)}});Y({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:n}=e,r=t[0];return{type:"overline",mode:n.mode,body:r}},htmlBuilder(e,t){var n=ye(e.body,t.havingCrampedStyle()),r=Mi("overline-line",t),i=t.fontMetrics().defaultRuleThickness,a=ve({positionType:"firstBaseline",children:[{type:"elem",elem:n},{type:"kern",size:3*i},{type:"elem",elem:r},{type:"kern",size:i}]});return L(["mord","overline"],[a],t)},mathmlBuilder(e,t){var n=new W("mo",[new He("‾")]);n.setAttribute("stretchy","true");var r=new W("mover",[Se(e.body,t),n]);return r.setAttribute("accent","true"),r}});Y({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"phantom",mode:n.mode,body:Ze(r)}},htmlBuilder:(e,t)=>{var n=Ue(e.body,t.withPhantom(),!1);return Gn(n)},mathmlBuilder:(e,t)=>{var n=Wt(e.body,t);return new W("mphantom",n)}});w("\\hphantom","\\smash{\\phantom{#1}}");Y({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"vphantom",mode:n.mode,body:r}},htmlBuilder:(e,t)=>{var n=L(["inner"],[ye(e.body,t.withPhantom())]),r=L(["fix"],[]);return L(["mord","rlap"],[n,r],t)},mathmlBuilder:(e,t)=>{var n=Wt(Ze(e.body),t),r=new W("mphantom",n),i=new W("mpadded",[r]);return i.setAttribute("width","0px"),i}});Y({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:n}=e,r=ce(t[0],"size").value,i=t[1];return{type:"raisebox",mode:n.mode,dy:r,body:i}},htmlBuilder(e,t){var n=ye(e.body,t),r=Re(e.dy,t);return ve({positionType:"shift",positionData:-r,children:[{type:"elem",elem:n}]})},mathmlBuilder(e,t){var n=new W("mpadded",[Se(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute("voffset",r),n}});Y({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});Y({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,n){var{parser:r}=e,i=n[0],a=ce(t[0],"size"),s=ce(t[1],"size");return{type:"rule",mode:r.mode,shift:i&&ce(i,"size").value,width:a.value,height:s.value}},htmlBuilder(e,t){var n=L(["mord","rule"],[],t),r=Re(e.width,t),i=Re(e.height,t),a=e.shift?Re(e.shift,t):0;return n.style.borderRightWidth=G(r),n.style.borderTopWidth=G(i),n.style.bottom=G(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=Re(e.width,t),r=Re(e.height,t),i=e.shift?Re(e.shift,t):0,a=t.color&&t.getColor()||"black",s=new W("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",G(n)),s.setAttribute("height",G(r));var o=new W("mpadded",[s]);return i>=0?o.setAttribute("height",G(i)):(o.setAttribute("height",G(i)),o.setAttribute("depth",G(-i))),o.setAttribute("voffset",G(i)),o}});function S4(e,t,n){for(var r=Ue(e,t,!1),i=t.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var s=r[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(r[a].classes,t.sizingClasses(n)):r[a].classes[s+1]==="reset-size"+t.size&&(r[a].classes[s+1]="reset-size"+n.size),r[a].height*=i,r[a].depth*=i}return Gn(r)}var Ep=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],GT=(e,t)=>{var n=t.havingSize(e.size);return S4(e.body,n,t)};Y({type:"sizing",names:Ep,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!1,n);return{type:"sizing",mode:i.mode,size:Ep.indexOf(r)+1,body:a}},htmlBuilder:GT,mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=Wt(e.body,n),i=new W("mstyle",r);return i.setAttribute("mathsize",G(n.sizeMultiplier)),i}});Y({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,n)=>{var{parser:r}=e,i=!1,a=!1,s=n[0]&&ce(n[0],"ordgroup");if(s)for(var o="",l=0;l<s.body.length;++l){var u=s.body[l];if(o=kl(u).text,o==="t")i=!0;else if(o==="b")a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var h=t[0];return{type:"smash",mode:r.mode,body:h,smashHeight:i,smashDepth:a}},htmlBuilder:(e,t)=>{var n=L([],[ye(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0),e.smashDepth&&(n.depth=0),e.smashHeight&&e.smashDepth)return L(["mord","smash"],[n],t);if(n.children)for(var r=0;r<n.children.length;r++)e.smashHeight&&(n.children[r].height=0),e.smashDepth&&(n.children[r].depth=0);var i=ve({positionType:"firstBaseline",children:[{type:"elem",elem:n}]});return L(["mord"],[i],t)},mathmlBuilder:(e,t)=>{var n=new W("mpadded",[Se(e.body,t)]);return e.smashHeight&&n.setAttribute("height","0px"),e.smashDepth&&n.setAttribute("depth","0px"),n}});Y({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r}=e,i=n[0],a=t[0];return{type:"sqrt",mode:r.mode,body:a,index:i}},htmlBuilder(e,t){var n=ye(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=qi(n,t);var r=t.fontMetrics(),i=r.defaultRuleThickness,a=i;t.style.id<ae.TEXT.id&&(a=t.fontMetrics().xHeight);var s=i+a/4,o=n.height+n.depth+s+i,{span:l,ruleWidth:u,advanceWidth:h}=NT(o,t),c=l.height-u;c>n.height+n.depth+s&&(s=(s+c-n.height-n.depth)/2);var m=l.height-n.height-s-u;n.style.paddingLeft=G(h);var f=ve({positionType:"firstBaseline",children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:-(n.height+m)},{type:"elem",elem:l},{type:"kern",size:u}]});if(e.index){var y=t.havingStyle(ae.SCRIPTSCRIPT),$=ye(e.index,y,t),I=.6*(f.height-f.depth),b=ve({positionType:"shift",positionData:-I,children:[{type:"elem",elem:$}]}),v=L(["root"],[b]);return L(["mord","sqrt"],[v,f],t)}else return L(["mord","sqrt"],[f],t)},mathmlBuilder(e,t){var{body:n,index:r}=e;return r?new W("mroot",[Se(n,t),Se(r,t)]):new W("msqrt",[Se(n,t)])}});var Ap={display:ae.DISPLAY,text:ae.TEXT,script:ae.SCRIPT,scriptscript:ae.SCRIPTSCRIPT};Y({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!0,n),s=r.slice(1,r.length-5);return{type:"styling",mode:i.mode,style:s,body:a}},htmlBuilder(e,t){var n=Ap[e.style],r=t.havingStyle(n).withFont("");return S4(e.body,r,t)},mathmlBuilder(e,t){var n=Ap[e.style],r=t.havingStyle(n),i=Wt(e.body,r),a=new W("mstyle",i),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[e.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var ZT=function(t,n){var r=t.base;if(r)if(r.type==="op"){var i=r.limits&&(n.style.size===ae.DISPLAY.size||r.alwaysHandleSupSub);return i?Zi:null}else if(r.type==="operatorname"){var a=r.alwaysHandleSupSub&&(n.style.size===ae.DISPLAY.size||r.limits);return a?k4:null}else{if(r.type==="accent")return Wn(r.base)?Lh:null;if(r.type==="horizBrace"){var s=!t.sub;return s===r.isOver?w4:null}else return null}else return null};Jr({type:"supsub",htmlBuilder(e,t){var n=ZT(e,t);if(n)return n(e,t);var{base:r,sup:i,sub:a}=e,s=ye(r,t),o,l,u=t.fontMetrics(),h=0,c=0,m=r&&Wn(r);if(i){var f=t.havingStyle(t.style.sup());o=ye(i,f,t),m||(h=s.height-f.fontMetrics().supDrop*f.sizeMultiplier/t.sizeMultiplier)}if(a){var y=t.havingStyle(t.style.sub());l=ye(a,y,t),m||(c=s.depth+y.fontMetrics().subDrop*y.sizeMultiplier/t.sizeMultiplier)}var $;t.style===ae.DISPLAY?$=u.sup1:t.style.cramped?$=u.sup3:$=u.sup2;var I=t.sizeMultiplier,b=G(.5/u.ptPerEm/I),v=null;if(l){var x=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");(s instanceof Lt||x)&&(v=G(-s.italic))}var N;if(o&&l){h=Math.max(h,$,o.depth+.25*u.xHeight),c=Math.max(c,u.sub2);var A=u.defaultRuleThickness,T=4*A;if(h-o.depth-(l.height-c)<T){c=T-(h-o.depth)+l.height;var M=.8*u.xHeight-(h-o.depth);M>0&&(h+=M,c-=M)}var R=[{type:"elem",elem:l,shift:c,marginRight:b,marginLeft:v},{type:"elem",elem:o,shift:-h,marginRight:b}];N=ve({positionType:"individualShift",children:R})}else if(l){c=Math.max(c,u.sub1,l.height-.8*u.xHeight);var j=[{type:"elem",elem:l,marginLeft:v,marginRight:b}];N=ve({positionType:"shift",positionData:c,children:j})}else if(o)h=Math.max(h,$,o.depth+.25*u.xHeight),N=ve({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:b}]});else throw new Error("supsub must have either sup or sub.");var E=ac(s,"right")||"mord";return L([E],[s,L(["msupsub"],[N])],t)},mathmlBuilder(e,t){var n=!1,r,i;e.base&&e.base.type==="horizBrace"&&(i=!!e.sup,i===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var a=[Se(e.base,t)];e.sub&&a.push(Se(e.sub,t)),e.sup&&a.push(Se(e.sup,t));var s;if(n)s=r?"mover":"munder";else if(e.sub)if(e.sup){var u=e.base;u&&u.type==="op"&&u.limits&&t.style===ae.DISPLAY||u&&u.type==="operatorname"&&u.alwaysHandleSupSub&&(t.style===ae.DISPLAY||u.limits)?s="munderover":s="msubsup"}else{var l=e.base;l&&l.type==="op"&&l.limits&&(t.style===ae.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||t.style===ae.DISPLAY)?s="munder":s="msub"}else{var o=e.base;o&&o.type==="op"&&o.limits&&(t.style===ae.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||t.style===ae.DISPLAY)?s="mover":s="msup"}return new W(s,a)}});Jr({type:"atom",htmlBuilder(e,t){return Mh(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var n=new W("mo",[Ut(e.text,e.mode)]);if(e.family==="bin"){var r=Fh(e,t);r==="bold-italic"&&n.setAttribute("mathvariant",r)}else e.family==="punct"?n.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&n.setAttribute("stretchy","false");return n}});var I4={mi:"italic",mn:"normal",mtext:"normal"};Jr({type:"mathord",htmlBuilder(e,t){return wl(e,t,"mathord")},mathmlBuilder(e,t){var n=new W("mi",[Ut(e.text,e.mode,t)]),r=Fh(e,t)||"italic";return r!==I4[n.type]&&n.setAttribute("mathvariant",r),n}});Jr({type:"textord",htmlBuilder(e,t){return wl(e,t,"textord")},mathmlBuilder(e,t){var n=Ut(e.text,e.mode,t),r=Fh(e,t)||"normal",i;return e.mode==="text"?i=new W("mtext",[n]):/[0-9]/.test(e.text)?i=new W("mn",[n]):e.text==="\\prime"?i=new W("mo",[n]):i=new W("mi",[n]),r!==I4[i.type]&&i.setAttribute("mathvariant",r),i}});var Fu={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Lu={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Jr({type:"spacing",htmlBuilder(e,t){if(Lu.hasOwnProperty(e.text)){var n=Lu[e.text].className||"";if(e.mode==="text"){var r=wl(e,t,"textord");return r.classes.push(n),r}else return L(["mspace",n],[Mh(e.text,e.mode,t)],t)}else{if(Fu.hasOwnProperty(e.text))return L(["mspace",Fu[e.text]],[],t);throw new D('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var n;if(Lu.hasOwnProperty(e.text))n=new W("mtext",[new He(" ")]);else{if(Fu.hasOwnProperty(e.text))return new W("mspace");throw new D('Unknown type of space "'+e.text+'"')}return n}});var Bp=()=>{var e=new W("mtd",[]);return e.setAttribute("width","50%"),e};Jr({type:"tag",mathmlBuilder(e,t){var n=new W("mtable",[new W("mtr",[Bp(),new W("mtd",[vr(e.body,t)]),Bp(),new W("mtd",[vr(e.tag,t)])])]);return n.setAttribute("width","100%"),n}});var Mp={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},qp={"\\textbf":"textbf","\\textmd":"textmd"},HT={"\\textit":"textit","\\textup":"textup"},Rp=(e,t)=>{var n=e.font;if(n){if(Mp[n])return t.withTextFontFamily(Mp[n]);if(qp[n])return t.withTextFontWeight(qp[n]);if(n==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(HT[n])};Y({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:"text",mode:n.mode,body:Ze(i),font:r}},htmlBuilder(e,t){var n=Rp(e,t),r=Ue(e.body,n,!0);return L(["mord","text"],r,n)},mathmlBuilder(e,t){var n=Rp(e,t);return vr(e.body,n)}});Y({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"underline",mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=ye(e.body,t),r=Mi("underline-line",t),i=t.fontMetrics().defaultRuleThickness,a=ve({positionType:"top",positionData:n.height,children:[{type:"kern",size:i},{type:"elem",elem:r},{type:"kern",size:3*i},{type:"elem",elem:n}]});return L(["mord","underline"],[a],t)},mathmlBuilder(e,t){var n=new W("mo",[new He("‾")]);n.setAttribute("stretchy","true");var r=new W("munder",[Se(e.body,t),n]);return r.setAttribute("accentunder","true"),r}});Y({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:"vcenter",mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=ye(e.body,t),r=t.fontMetrics().axisHeight,i=.5*(n.height-r-(n.depth+r));return ve({positionType:"shift",positionData:i,children:[{type:"elem",elem:n}]})},mathmlBuilder(e,t){var n=new W("mpadded",[Se(e.body,t)],["vcenter"]);return new W("mrow",[n])}});Y({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,n){throw new D("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var n=Fp(e),r=[],i=t.havingStyle(t.style.text()),a=0;a<n.length;a++){var s=n[a];s==="~"&&(s="\\textasciitilde"),r.push(mt(s,"Typewriter-Regular",e.mode,i,["mord","texttt"]))}return L(["mord","text"].concat(i.sizingClasses(t)),O2(r),i)},mathmlBuilder(e,t){var n=new He(Fp(e)),r=new W("mtext",[n]);return r.setAttribute("mathvariant","monospace"),r}});var Fp=e=>e.body.replace(/ /g,e.star?"␣":" "),nr=V2,z4=`[ \r
	]`,VT="\\\\[a-zA-Z@]+",JT="\\\\[^\uD800-\uDFFF]",XT="("+VT+")"+z4+"*",YT=`\\\\(
|[ \r	]+
?)[ \r	]*`,cc="[̀-ͯ]",UT=new RegExp(cc+"+$"),QT="("+z4+"+)|"+(YT+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(cc+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(cc+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+XT)+("|"+JT+")");class Lp{constructor(t,n){this.input=t,this.settings=n,this.tokenRegex=new RegExp(QT,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,n){this.catcodes[t]=n}lex(){var t=this.input,n=this.tokenRegex.lastIndex;if(n===t.length)return new Rt("EOF",new xt(this,n,n));var r=this.tokenRegex.exec(t);if(r===null||r.index!==n)throw new D("Unexpected character: '"+t[n]+"'",new Rt(t[n],new xt(this,n,n+1)));var i=r[6]||r[3]||(r[2]?"\\ ":" ");if(this.catcodes[i]===14){var a=t.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new Rt(i,new xt(this,n,this.tokenRegex.lastIndex))}}class KT{constructor(t,n){t===void 0&&(t={}),n===void 0&&(n={}),this.current=n,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new D("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var n in t)t.hasOwnProperty(n)&&(t[n]==null?delete this.current[n]:this.current[n]=t[n])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,n,r){if(r===void 0&&(r=!1),r){for(var i=0;i<this.undefStack.length;i++)delete this.undefStack[i][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=n)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(t)&&(a[t]=this.current[t])}n==null?delete this.current[t]:this.current[t]=n}}var eC=g4;w("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});w("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});w("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});w("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});w("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var jp={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(e){var t=e.popToken(),n,r=0;if(t.text==="'")n=8,t=e.popToken();else if(t.text==='"')n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")r=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new D("\\char` missing argument");r=t.text.charCodeAt(0)}else n=10;if(n){if(r=jp[t.text],r==null||r>=n)throw new D("Invalid base-"+n+" digit "+t.text);for(var i;(i=jp[e.future().text])!=null&&i<n;)r*=n,r+=i,e.popToken()}return"\\@char{"+r+"}"});var Wh=(e,t,n,r)=>{var i=e.consumeArg().tokens;if(i.length!==1)throw new D("\\newcommand's first argument must be a macro name");var a=i[0].text,s=e.isDefined(a);if(s&&!t)throw new D("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!n)throw new D("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(i=e.consumeArg().tokens,i.length===1&&i[0].text==="["){for(var l="",u=e.expandNextToken();u.text!=="]"&&u.text!=="EOF";)l+=u.text,u=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new D("Invalid number of arguments: "+l);o=parseInt(l),i=e.consumeArg().tokens}return s&&r||e.macros.set(a,{tokens:i,numArgs:o}),""};w("\\newcommand",e=>Wh(e,!1,!0,!1));w("\\renewcommand",e=>Wh(e,!0,!1,!1));w("\\providecommand",e=>Wh(e,!0,!0,!0));w("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(n=>n.text).join("")),""});w("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(n=>n.text).join("")),""});w("\\show",e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),nr[n],Ae.math[n],Ae.text[n]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Pp={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},tC=new Set(["bin","rel"]);w("\\dots",function(e){var t="\\dotso",n=e.expandAfterFuture().text;return n in Pp?t=Pp[n]:(n.slice(0,4)==="\\not"||n in Ae.math&&tC.has(Ae.math[n].group))&&(t="\\dotsb"),t});var Oh={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(e){var t=e.future().text;return t in Oh?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(e){var t=e.future().text;return t in Oh&&t!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(e){var t=e.future().text;return t in Oh?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new D("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var T4=G(fn["Main-Regular"]["T".charCodeAt(0)][1]-.7*fn["Main-Regular"]["A".charCodeAt(0)][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+T4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+T4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var C4=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,i=t.consumeArg().tokens,a=t.consumeArg().tokens,s=t.macros.get("|"),o=t.macros.get("\\|");t.macros.beginGroup();var l=c=>m=>{e&&(m.macros.set("|",s),i.length&&m.macros.set("\\|",o));var f=c;if(!c&&i.length){var y=m.future();y.text==="|"&&(m.popToken(),f=!0)}return{tokens:f?i:r,numArgs:0}};t.macros.set("|",l(!1)),i.length&&t.macros.set("\\|",l(!0));var u=t.consumeArg().tokens,h=t.expandTokens([...a,...u,...n]);return t.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};w("\\bra@ket",C4(!1));w("\\bra@set",C4(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var N4={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class nC{constructor(t,n,r){this.settings=n,this.expansionCount=0,this.feed(t),this.macros=new KT(eC,n.macros),this.mode=r,this.stack=[]}feed(t){this.lexer=new Lp(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var n,r,i;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;n=this.popToken(),{tokens:i,end:r}=this.consumeArg(["]"])}else({tokens:i,start:n,end:r}=this.consumeArg());return this.pushToken(new Rt("EOF",r.loc)),this.pushTokens(i),new Rt("",xt.range(n,r))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var n=[],r=t&&t.length>0;r||this.consumeSpaces();var i=this.future(),a,s=0,o=0;do{if(a=this.popToken(),n.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new D("Extra }",a)}else if(a.text==="EOF")throw new D("Unexpected end of input in a macro argument, expected '"+(t&&r?t[o]:"}")+"'",a);if(t&&r)if((s===0||s===1&&t[o]==="{")&&a.text===t[o]){if(++o,o===t.length){n.splice(-o,o);break}}else o=0}while(s!==0||r);return i.text==="{"&&n[n.length-1].text==="}"&&(n.pop(),n.shift()),n.reverse(),{tokens:n,start:i,end:a}}consumeArgs(t,n){if(n){if(n.length!==t+1)throw new D("The length of delimiters doesn't match the number of args!");for(var r=n[0],i=0;i<r.length;i++){var a=this.popToken();if(r[i]!==a.text)throw new D("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<t;o++)s.push(this.consumeArg(n&&n[o+1]).tokens);return s}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new D("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var n=this.popToken(),r=n.text,i=n.noexpand?null:this._getExpansion(r);if(i==null||t&&i.unexpandable){if(t&&i==null&&r[0]==="\\"&&!this.isDefined(r))throw new D("Undefined control sequence: "+r);return this.pushToken(n),!1}this.countExpansion(1);var a=i.tokens,s=this.consumeArgs(i.numArgs,i.delimiters);if(i.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new D("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new D("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}}expandMacro(t){return this.macros.has(t)?this.expandTokens([new Rt(t)]):void 0}expandTokens(t){var n=[],r=this.stack.length;for(this.pushTokens(t);this.stack.length>r;)if(this.expandOnce(!0)===!1){var i=this.stack.pop();i.treatAsRelax&&(i.noexpand=!1,i.treatAsRelax=!1),n.push(i)}return this.countExpansion(n.length),n}expandMacroAsText(t){var n=this.expandMacro(t);return n&&n.map(r=>r.text).join("")}_getExpansion(t){var n=this.macros.get(t);if(n==null)return n;if(t.length===1){var r=this.lexer.catcodes[t];if(r!=null&&r!==13)return}var i=typeof n=="function"?n(this):n;if(typeof i=="string"){var a=0;if(i.includes("#"))for(var s=i.replace(/##/g,"");s.includes("#"+(a+1));)++a;for(var o=new Lp(i,this.settings),l=[],u=o.lex();u.text!=="EOF";)l.push(u),u=o.lex();l.reverse();var h={tokens:l,numArgs:a};return h}return i}isDefined(t){return this.macros.has(t)||nr.hasOwnProperty(t)||Ae.math.hasOwnProperty(t)||Ae.text.hasOwnProperty(t)||N4.hasOwnProperty(t)}isExpandable(t){var n=this.macros.get(t);return n!=null?typeof n=="string"||typeof n=="function"||!n.unexpandable:nr.hasOwnProperty(t)&&!nr[t].primitive}}var Dp=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Ds=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),ju={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Wp={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class El{constructor(t,n){this.mode="math",this.gullet=new nC(t,n,this.mode),this.settings=n,this.leftrightDepth=0,this.nextToken=null}expect(t,n){if(n===void 0&&(n=!0),this.fetch().text!==t)throw new D("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());n&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var n=this.nextToken;this.consume(),this.gullet.pushToken(new Rt("}")),this.gullet.pushTokens(t);var r=this.parseExpression(!1);return this.expect("}"),this.nextToken=n,r}parseExpression(t,n){for(var r=[];;){this.mode==="math"&&this.consumeSpaces();var i=this.fetch();if(El.endOfExpression.has(i.text)||n&&i.text===n||t&&nr[i.text]&&nr[i.text].infix)break;var a=this.parseAtom(n);if(a){if(a.type==="internal")continue}else break;r.push(a)}return this.mode==="text"&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(t){for(var n=-1,r,i=0;i<t.length;i++){var a=t[i];if(a.type==="infix"){if(n!==-1)throw new D("only one infix operator per group",a.token);n=i,r=a.replaceWith}}if(n!==-1&&r){var s,o,l=t.slice(0,n),u=t.slice(n+1);l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l},u.length===1&&u[0].type==="ordgroup"?o=u[0]:o={type:"ordgroup",mode:this.mode,body:u};var h;return r==="\\\\abovefrac"?h=this.callFunction(r,[s,t[n],o],[]):h=this.callFunction(r,[s,o],[]),[h]}else return t}handleSupSubscript(t){var n=this.fetch(),r=n.text;this.consume(),this.consumeSpaces();var i;do{var a;i=this.parseGroup(t)}while(((a=i)==null?void 0:a.type)==="internal");if(!i)throw new D("Expected group after '"+r+"'",n);return i}formatUnsupportedCmd(t){for(var n=[],r=0;r<t.length;r++)n.push({type:"textord",mode:"text",text:t[r]});var i={type:"text",mode:this.mode,body:n},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[i]};return a}parseAtom(t){var n=this.parseGroup("atom",t);if((n==null?void 0:n.type)==="internal"||this.mode==="text")return n;for(var r,i;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(n&&n.type==="op"){var s=a.text==="\\limits";n.limits=s,n.alwaysHandleSupSub=!0}else if(n&&n.type==="operatorname")n.alwaysHandleSupSub&&(n.limits=a.text==="\\limits");else throw new D("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(r)throw new D("Double superscript",a);r=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(i)throw new D("Double subscript",a);i=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(r)throw new D("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),r={type:"ordgroup",mode:this.mode,body:l}}else if(Ds[a.text]){var u=Dp.test(a.text),h=[];for(h.push(new Rt(Ds[a.text])),this.consume();;){var c=this.fetch().text;if(!Ds[c]||Dp.test(c)!==u)break;h.unshift(new Rt(Ds[c])),this.consume()}var m=this.subparse(h);u?i={type:"ordgroup",mode:"math",body:m}:r={type:"ordgroup",mode:"math",body:m}}else break}return r||i?{type:"supsub",mode:this.mode,base:n,sup:r,sub:i}:n}parseFunction(t,n){var r=this.fetch(),i=r.text,a=nr[i];if(!a)return null;if(this.consume(),n&&n!=="atom"&&!a.allowedInArgument)throw new D("Got function '"+i+"' with no arguments"+(n?" as "+n:""),r);if(this.mode==="text"&&!a.allowedInText)throw new D("Can't use function '"+i+"' in text mode",r);if(this.mode==="math"&&a.allowedInMath===!1)throw new D("Can't use function '"+i+"' in math mode",r);var{args:s,optArgs:o}=this.parseArguments(i,a);return this.callFunction(i,s,o,r,t)}callFunction(t,n,r,i,a){var s={funcName:t,parser:this,token:i,breakOnTokenText:a},o=nr[t];if(o&&o.handler)return o.handler(s,n,r);throw new D("No function handler for "+t)}parseArguments(t,n){var r=n.numArgs+n.numOptionalArgs;if(r===0)return{args:[],optArgs:[]};for(var i=[],a=[],s=0;s<r;s++){var o=n.argTypes&&n.argTypes[s],l=s<n.numOptionalArgs;("primitive"in n&&n.primitive&&o==null||n.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var u=this.parseGroupOfType("argument to '"+t+"'",o,l);if(l)a.push(u);else if(u!=null)i.push(u);else throw new D("Null argument, please report this as a bug")}return{args:i,optArgs:a}}parseGroupOfType(t,n,r){switch(n){case"color":return this.parseColorGroup(r);case"size":return this.parseSizeGroup(r);case"url":return this.parseUrlGroup(r);case"math":case"text":return this.parseArgumentGroup(r,n);case"hbox":{var i=this.parseArgumentGroup(r,"text");return i!=null?{type:"styling",mode:i.mode,body:[i],style:"text"}:null}case"raw":{var a=this.parseStringGroup("raw",r);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(r)throw new D("A primitive argument cannot be optional");var s=this.parseGroup(t);if(s==null)throw new D("Expected group as "+t,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(r);default:throw new D("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,n){var r=this.gullet.scanArgument(n);if(r==null)return null;for(var i="",a;(a=this.fetch()).text!=="EOF";)i+=a.text,this.consume();return this.consume(),r.text=i,r}parseRegexGroup(t,n){for(var r=this.fetch(),i=r,a="",s;(s=this.fetch()).text!=="EOF"&&t.test(a+s.text);)i=s,a+=i.text,this.consume();if(a==="")throw new D("Invalid "+n+": '"+r.text+"'",r);return r.range(i,a)}parseColorGroup(t){var n=this.parseStringGroup("color",t);if(n==null)return null;var r=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(n.text);if(!r)throw new D("Invalid color: '"+n.text+"'",n);var i=r[0];return/^[0-9a-f]{6}$/i.test(i)&&(i="#"+i),{type:"color-token",mode:this.mode,color:i}}parseSizeGroup(t){var n,r=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?n=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):n=this.parseStringGroup("size",t),!n)return null;!t&&n.text.length===0&&(n.text="0pt",r=!0);var i=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n.text);if(!i)throw new D("Invalid size: '"+n.text+"'",n);var a={number:+(i[1]+i[2]),unit:i[3]};if(!L2(a))throw new D("Invalid unit: '"+a.unit+"'",n);return{type:"size",mode:this.mode,value:a,isBlank:r}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var n=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),n==null)return null;var r=n.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:r}}parseArgumentGroup(t,n){var r=this.gullet.scanArgument(t);if(r==null)return null;var i=this.mode;n&&this.switchMode(n),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:r.loc,body:a};return n&&this.switchMode(i),s}parseGroup(t,n){var r=this.fetch(),i=r.text,a;if(i==="{"||i==="\\begingroup"){this.consume();var s=i==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:xt.range(r,l),body:o,semisimple:i==="\\begingroup"||void 0}}else if(a=this.parseFunction(n,t)||this.parseSymbol(),a==null&&i[0]==="\\"&&!N4.hasOwnProperty(i)){if(this.settings.throwOnError)throw new D("Undefined control sequence: "+i,r);a=this.formatUnsupportedCmd(i),this.consume()}return a}formLigatures(t){for(var n=t.length-1,r=0;r<n;++r){var i=t[r];if(i.type==="textord"){var a=i.text,s=t[r+1];if(!(!s||s.type!=="textord")){if(a==="-"&&s.text==="-"){var o=t[r+2];r+1<n&&o&&o.type==="textord"&&o.text==="-"?(t.splice(r,3,{type:"textord",mode:"text",loc:xt.range(i,o),text:"---"}),n-=2):(t.splice(r,2,{type:"textord",mode:"text",loc:xt.range(i,s),text:"--"}),n-=1)}(a==="'"||a==="`")&&s.text===a&&(t.splice(r,2,{type:"textord",mode:"text",loc:xt.range(i,s),text:a+a}),n-=1)}}}}parseSymbol(){var t=this.fetch(),n=t.text;if(/^\\verb[^a-zA-Z]/.test(n)){this.consume();var r=n.slice(5),i=r.charAt(0)==="*";if(i&&(r=r.slice(1)),r.length<2||r.charAt(0)!==r.slice(-1))throw new D(`\\verb assertion failed --
                    please report what input caused this bug`);return r=r.slice(1,-1),{type:"verb",mode:"text",body:r,star:i}}Wp.hasOwnProperty(n[0])&&!Ae[this.mode][n[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+n[0]+'" used in math mode',t),n=Wp[n[0]]+n.slice(1));var a=UT.exec(n);a&&(n=n.substring(0,a.index),n==="i"?n="ı":n==="j"&&(n="ȷ"));var s;if(Ae[this.mode][n]){this.settings.strict&&this.mode==="math"&&tc.includes(n)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+n[0]+'" used in math mode',t);var o=Ae[this.mode][n].group,l=xt.range(t),u;if(Qz.hasOwnProperty(o)){var h=o;u={type:"atom",mode:this.mode,family:h,loc:l,text:n}}else u={type:o,mode:this.mode,loc:l,text:n};s=u}else if(n.charCodeAt(0)>=128)this.settings.strict&&(F2(n.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+n[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+n[0]+'"'+(" ("+n.charCodeAt(0)+")"),t)),s={type:"textord",mode:"text",loc:xt.range(t),text:n};else return null;if(this.consume(),a)for(var c=0;c<a[0].length;c++){var m=a[0][c];if(!ju[m])throw new D("Unknown accent ' "+m+"'",t);var f=ju[m][this.mode]||ju[m].text;if(!f)throw new D("Accent "+m+" unsupported in "+this.mode+" mode",t);s={type:"accent",mode:this.mode,loc:xt.range(t),label:f,isStretchy:!1,isShifty:!0,base:s}}return s}}El.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Gh=function(t,n){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var r=new El(t,n);delete r.gullet.macros.current["\\df@tag"];var i=r.parse();if(delete r.gullet.macros.current["\\current@color"],delete r.gullet.macros.current["\\color"],r.gullet.macros.get("\\df@tag")){if(!n.displayMode)throw new D("\\tag works only in display equations");i=[{type:"tag",mode:"text",body:i,tag:r.subparse([new Rt("\\df@tag")])}]}return i},E4=function(t,n,r){n.textContent="";var i=Zh(t,r).toNode();n.appendChild(i)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),E4=function(){throw new D("KaTeX doesn't work in quirks mode.")});var rC=function(t,n){var r=Zh(t,n).toMarkup();return r},iC=function(t,n){var r=new Eh(n);return Gh(t,r)},A4=function(t,n,r){if(r.throwOnError||!(t instanceof D))throw t;var i=L(["katex-error"],[new Lt(n)]);return i.setAttribute("title",t.toString()),i.setAttribute("style","color:"+r.errorColor),i},Zh=function(t,n){var r=new Eh(n);try{var i=Gh(t,r);return pT(i,t,r)}catch(a){return A4(a,t,r)}},aC=function(t,n){var r=new Eh(n);try{var i=Gh(t,r);return fT(i,t,r)}catch(a){return A4(a,t,r)}},sC="0.16.45",oC={Span:Oi,Anchor:bl,SymbolNode:Lt,SvgNode:Ln,PathNode:fr,LineNode:ec},Op={version:sC,render:E4,renderToString:rC,ParseError:D,SETTINGS_SCHEMA:U0,__parse:iC,__renderToDomTree:Zh,__renderToHTMLTree:aC,__setFontMetrics:Yz,__defineSymbol:d,__defineFunction:Y,__defineMacro:w,__domTree:oC};const lC={};function Gp(e){const t=this,n=e||lC,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),s=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(bz(n)),a.push(hz()),s.push(dz(n))}const Zp=/[#.]/g;function uC(e,t){const n=e||"",r={};let i=0,a,s;for(;i<n.length;){Zp.lastIndex=i;const o=Zp.exec(n),l=n.slice(i,o?o.index:n.length);l&&(a?a==="#"?r.id=l:Array.isArray(r.className)?r.className.push(l):r.className=[l]:s=l,i+=l.length),o&&(a=o[0],i++)}return{type:"element",tagName:s||t||"div",properties:r,children:[]}}function B4(e,t,n){const r=n?mC(n):void 0;function i(a,s,...o){let l;if(a==null){l={type:"root",children:[]};const u=s;o.unshift(u)}else{l=uC(a,t);const u=l.tagName.toLowerCase(),h=r?r.get(u):void 0;if(l.tagName=h||u,cC(s))o.unshift(s);else for(const[c,m]of Object.entries(s))hC(e,l.properties,c,m)}for(const u of o)hc(l.children,u);return l.type==="element"&&l.tagName==="template"&&(l.content={type:"root",children:l.children},l.children=[]),l}return i}function cC(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const r of n){const i=t[r];if(i&&typeof i=="object"){if(!Array.isArray(i))return!0;const a=i;for(const s of a)if(typeof s!="number"&&typeof s!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function hC(e,t,n,r){const i=Rg(e,n);let a;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;a=r}else typeof r=="boolean"?a=r:typeof r=="string"?i.spaceSeparated?a=gm(r):i.commaSeparated?a=hm(r):i.commaOrSpaceSeparated?a=gm(hm(r).join(" ")):a=Hp(i,i.property,r):Array.isArray(r)?a=[...r]:a=i.property==="style"?dC(r):String(r);if(Array.isArray(a)){const s=[];for(const o of a)s.push(Hp(i,i.property,o));a=s}i.property==="className"&&Array.isArray(t.className)&&(a=t.className.concat(a)),t[i.property]=a}}function hc(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)hc(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?hc(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function Hp(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||Oa(n)===Oa(t)))return!0}return n}function dC(e){const t=[];for(const[n,r]of Object.entries(e))t.push([n,r].join(": "));return t.join("; ")}function mC(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const pC=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],fC=B4(Fg,"div"),gC=B4(ml,"g",pC),Pu={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function vC(e,t){return M4(e,t||{})||{type:"root",children:[]}}function M4(e,t){const n=yC(e,t);return n&&t.afterTransform&&t.afterTransform(e,n),n}function yC(e,t){switch(e.nodeType){case 1:return xC(e,t);case 3:return $C(e);case 8:return wC(e);case 9:return Vp(e,t);case 10:return bC();case 11:return Vp(e,t);default:return}}function Vp(e,t){return{type:"root",children:q4(e,t)}}function bC(){return{type:"doctype"}}function $C(e){return{type:"text",value:e.nodeValue||""}}function wC(e){return{type:"comment",value:e.nodeValue||""}}function xC(e,t){const n=e.namespaceURI,r=n===Pu.svg?gC:fC,i=n===Pu.html?e.tagName.toLowerCase():e.tagName,a=n===Pu.html&&i==="template"?e.content:e,s=e.getAttributeNames(),o={};let l=-1;for(;++l<s.length;)o[s[l]]=e.getAttribute(s[l])||"";return r(i,o,q4(a,t))}function q4(e,t){const n=e.childNodes,r=[];let i=-1;for(;++i<n.length;){const a=M4(n[i],t);a!==void 0&&r.push(a)}return r}const _C=new DOMParser;function kC(e,t){const n=t!=null&&t.fragment?SC(e):_C.parseFromString(e,"text/html");return vC(n)}function SC(e){const t=document.createElement("template");return t.innerHTML=e,t.content}const Jp=function(e,t,n){const r=ts(n);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof t=="number"){if(t<0||t===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(t=e.children.indexOf(t),t<0)throw new Error("Expected child node or index");for(;++t<e.children.length;)if(r(e.children[t],t,e))return e.children[t]},Xr=function(e){if(e==null)return TC;if(typeof e=="string")return zC(e);if(typeof e=="object")return IC(e);if(typeof e=="function")return Hh(e);throw new Error("Expected function, string, or array as `test`")};function IC(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Xr(e[n]);return Hh(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return!0;return!1}}function zC(e){return Hh(t);function t(n){return n.tagName===e}}function Hh(e){return t;function t(n,r,i){return!!(CC(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function TC(e){return!!(e&&typeof e=="object"&&"type"in e&&e.type==="element"&&"tagName"in e&&typeof e.tagName=="string")}function CC(e){return e!==null&&typeof e=="object"&&"type"in e&&"tagName"in e}const Xp=/\n/g,Yp=/[\t ]+/g,dc=Xr("br"),Up=Xr(FC),NC=Xr("p"),Qp=Xr("tr"),EC=Xr(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",RC,LC]),R4=Xr(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","li","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function AC(e,t){const n=t||{},r="children"in e?e.children:[],i=R4(e),a=j4(e,{whitespace:n.whitespace||"normal",breakBefore:!1,breakAfter:!1}),s=[];(e.type==="text"||e.type==="comment")&&s.push(...L4(e,{whitespace:a,breakBefore:!0,breakAfter:!0}));let o=-1;for(;++o<r.length;)s.push(...F4(r[o],e,{whitespace:a,breakBefore:o?void 0:i,breakAfter:o<r.length-1?dc(r[o+1]):i}));const l=[];let u;for(o=-1;++o<s.length;){const h=s[o];typeof h=="number"?u!==void 0&&h>u&&(u=h):h&&(u!==void 0&&u>-1&&l.push(`
`.repeat(u)||" "),u=-1,l.push(h))}return l.join("")}function F4(e,t,n){return e.type==="element"?BC(e,t,n):e.type==="text"?n.whitespace==="normal"?L4(e,n):MC(e):[]}function BC(e,t,n){const r=j4(e,n),i=e.children||[];let a=-1,s=[];if(EC(e))return s;let o,l;for(dc(e)||Qp(e)&&Jp(t,e,Qp)?l=`
`:NC(e)?(o=2,l=2):R4(e)&&(o=1,l=1);++a<i.length;)s=s.concat(F4(i[a],e,{whitespace:r,breakBefore:a?void 0:o,breakAfter:a<i.length-1?dc(i[a+1]):l}));return Up(e)&&Jp(t,e,Up)&&s.push("	"),o&&s.unshift(o),l&&s.push(l),s}function L4(e,t){const n=String(e.value),r=[],i=[];let a=0;for(;a<=n.length;){Xp.lastIndex=a;const l=Xp.exec(n),u=l&&"index"in l?l.index:n.length;r.push(qC(n.slice(a,u).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),a===0?t.breakBefore:!0,u===n.length?t.breakAfter:!0)),a=u+1}let s=-1,o;for(;++s<r.length;)r[s].charCodeAt(r[s].length-1)===8203||s<r.length-1&&r[s+1].charCodeAt(0)===8203?(i.push(r[s]),o=void 0):r[s]?(typeof o=="number"&&i.push(o),i.push(r[s]),o=0):(s===0||s===r.length-1)&&i.push(0);return i}function MC(e){return[String(e.value)]}function qC(e,t,n){const r=[];let i=0,a;for(;i<e.length;){Yp.lastIndex=i;const s=Yp.exec(e);a=s?s.index:e.length,!i&&!a&&s&&!t&&r.push(""),i!==a&&r.push(e.slice(i,a)),i=s?a+s[0].length:a}return i!==a&&!n&&r.push(""),r.join(" ")}function j4(e,t){if(e.type==="element"){const n=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return n.wrap?"pre-wrap":"pre";case"td":case"th":return n.noWrap?"nowrap":t.whitespace;case"textarea":return"pre-wrap"}}return t.whitespace}function RC(e){return!!(e.properties||{}).hidden}function FC(e){return e.tagName==="td"||e.tagName==="th"}function LC(e){return e.tagName==="dialog"&&!(e.properties||{}).open}const jC={},PC=[];function Kp(e){const t=e||jC;return function(n,r){kh(n,"element",function(i,a){const s=Array.isArray(i.properties.className)?i.properties.className:PC,o=s.includes("language-math"),l=s.includes("math-display"),u=s.includes("math-inline");let h=l;if(!o&&!l&&!u)return;let c=a[a.length-1],m=i;if(i.tagName==="code"&&o&&c&&c.type==="element"&&c.tagName==="pre"&&(m=c,c=a[a.length-2],h=!0),!c)return;const f=AC(m,{whitespace:"pre"});let y;try{y=Op.renderToString(f,{...t,displayMode:h,throwOnError:!0})}catch(I){const b=I,v=b.name.toLowerCase();r.message("Could not render math with KaTeX",{ancestors:[...a,i],cause:b,place:i.position,ruleId:v,source:"rehype-katex"});try{y=Op.renderToString(f,{...t,displayMode:h,strict:"ignore",throwOnError:!1})}catch{y=[{type:"element",tagName:"span",properties:{className:["katex-error"],style:"color:"+(t.errorColor||"#cc0000"),title:String(I)},children:[{type:"text",value:f}]}]}}typeof y=="string"&&(y=kC(y,{fragment:!0}).children);const $=c.children.indexOf(m);return c.children.splice($,1,...y),c2})}}const DC=(e={},t={})=>({h1:({node:n,...r})=>B.jsx("h1",{...r,className:"text-[22px] font-medium leading-tight tracking-tight text-neutral-900 mt-10 mb-4"}),h2:({node:n,...r})=>B.jsx("h2",{...r,className:"text-[17px] font-medium leading-snug tracking-tight text-neutral-900 mt-10 mb-3"}),h3:({node:n,...r})=>B.jsx("h3",{...r,className:"text-[14.5px] font-medium leading-snug tracking-tight text-neutral-900 mt-7 mb-2"}),h4:({node:n,...r})=>B.jsx("h4",{...r,className:"text-[13.5px] font-medium leading-snug tracking-tight text-neutral-900 mt-5 mb-1"}),p:({node:n,children:r,...i})=>{var u,h,c;const a=(u=n==null?void 0:n.children)==null?void 0:u[0],s=(a==null?void 0:a.tagName)==="em"?(c=(h=a==null?void 0:a.children)==null?void 0:h[0])==null?void 0:c.value:void 0,o=(a==null?void 0:a.type)==="text"?a==null?void 0:a.value:void 0,l=typeof s=="string"&&s.toLowerCase().startsWith("note on")||typeof o=="string"&&o.trimStart().startsWith("* ");return B.jsx("p",{...i,className:l?"text-[11px] text-neutral-500 leading-[1.65] my-4":"text-[14px] text-neutral-700 leading-[1.75] my-4",children:r})},a:({node:n,href:r,...i})=>{const a=r&&e[r]||r&&t[r]||r,s=typeof a=="string"&&/^(https?:|mailto:)/.test(a),o=typeof a=="string"&&a!==r;return B.jsx("a",{href:a,target:s||o?"_blank":void 0,rel:s||o?"noopener noreferrer":void 0,className:"text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-[3px] transition-colors",...i})},ul:({node:n,...r})=>B.jsx("ul",{...r,className:"my-4 space-y-2 text-[14px] text-neutral-700 leading-[1.7] list-disc pl-5 marker:text-neutral-300"}),ol:({node:n,...r})=>B.jsx("ol",{...r,className:"my-4 space-y-2 text-[14px] text-neutral-700 leading-[1.7] list-decimal pl-5 marker:text-neutral-400"}),li:({node:n,...r})=>B.jsx("li",{...r,className:"pl-1"}),strong:({node:n,...r})=>B.jsx("strong",{...r,className:"font-medium text-neutral-900"}),em:({node:n,...r})=>B.jsx("em",{...r,className:"italic text-neutral-800"}),blockquote:({node:n,...r})=>B.jsx("blockquote",{...r,className:"border-l-2 border-neutral-200 pl-4 my-5 text-[14px] text-neutral-600 italic"}),code:({node:n,inline:r,...i})=>r?B.jsx("code",{...i,className:"font-mono text-[12.5px] bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded"}):B.jsx("code",{...i,className:"font-mono text-[12.5px] text-neutral-800"}),pre:({node:n,...r})=>B.jsx("pre",{...r,className:"bg-neutral-50 border border-neutral-100 rounded-md p-4 my-5 overflow-x-auto"}),hr:()=>B.jsx("hr",{className:"border-neutral-100 my-8"}),img:({node:n,src:r,alt:i,title:a,...s})=>{const o=r&&e[r]||r&&t[r]||r;let l=null,u=null;if(typeof a=="string"&&a.length>0){const h=a.split("|").map(c=>c.trim()).filter(Boolean);for(const c of h)/^https?:\/\//.test(c)?u=c:l=l?`${l} ${c}`:c;!l&&!u&&(l=a)}return B.jsxs("span",{className:"my-6 block",children:[B.jsx("span",{className:"block overflow-hidden rounded-md ring-1 ring-neutral-200/80",children:B.jsx("img",{src:o,alt:i||"",className:"w-full h-auto block",loading:"lazy",...s})}),(l||u)&&B.jsxs("span",{className:"mt-3 block text-[12.5px] text-neutral-500 italic leading-snug",children:[u&&B.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"font-mono not-italic text-[11px] text-neutral-400 underline decoration-neutral-200 hover:text-neutral-900 hover:decoration-neutral-400 underline-offset-[3px] mr-1.5",children:"[src]"}),l]})]})}}),ef=()=>{const{id:e,partId:t}=G3(),n=eo.find(a=>a.id===e);if(!n)return B.jsx(wi,{to:"/blog",replace:!0});const r=Array.isArray(n.parts)?n.parts:[],i=DC(n.links,n.assets);if(t){const a=r.find(s=>s.id===t);return!a||!a.body?B.jsx(wi,{to:`/blog/${e}`,replace:!0}):B.jsxs("article",{children:[B.jsxs("header",{className:"mb-8",children:[B.jsxs(Ro,{to:`/blog/${e}`,className:"font-mono text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors",children:["← ",n.title]}),B.jsxs("h1",{className:"text-[24px] font-medium leading-tight tracking-tight text-neutral-900 mt-3 flex items-baseline gap-3 flex-wrap",children:[B.jsx("span",{children:a.title}),a.notes&&B.jsx("a",{href:a.notes,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-[11px] font-normal text-neutral-400 hover:text-neutral-900 underline decoration-neutral-200 hover:decoration-neutral-900 underline-offset-[3px] transition-colors",children:"[notes]"})]})]}),B.jsx("div",{className:"text-neutral-700",children:B.jsx(tp,{remarkPlugins:[up,Gp],rehypePlugins:[Kp],components:i,children:a.body})})]})}return!n.body&&r.length===0?B.jsx(wi,{to:"/blog",replace:!0}):B.jsxs("article",{children:[B.jsxs("header",{className:"mb-8",children:[B.jsx("h1",{className:"text-[24px] font-medium leading-tight tracking-tight text-neutral-900 mb-3",children:n.title}),B.jsxs("div",{className:"flex items-baseline gap-3",children:[B.jsx("span",{className:"font-mono text-[11px] text-neutral-400 tabular-nums",children:n.date}),n.tags&&n.tags.length>0&&B.jsx("span",{className:"font-mono text-[10.5px] text-neutral-400",children:n.tags.join(" · ")})]})]}),n.body&&B.jsx("div",{className:"text-neutral-700",children:B.jsx(tp,{remarkPlugins:[up,Gp],rehypePlugins:[Kp],components:i,children:n.body})}),r.length>0&&B.jsx("nav",{className:"mt-8",children:B.jsx("ul",{className:"space-y-1",children:r.map(a=>B.jsxs("li",{className:"flex items-baseline gap-3",children:[a.body?B.jsx(Ro,{to:`/blog/${e}/${a.id}`,className:"text-[14px] text-neutral-700 hover:text-neutral-900 hover:underline decoration-neutral-900 underline-offset-[3px]",children:a.title}):B.jsx("span",{className:"text-[14px] text-neutral-400",children:a.title}),a.notes&&B.jsx("a",{href:a.notes,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-[11px] text-neutral-400 hover:text-neutral-900 underline decoration-neutral-200 hover:decoration-neutral-900 underline-offset-[3px] transition-colors",children:"[notes]"})]},a.id))})})]})},WC=e=>e.split(/(Batu El)/).map((n,r)=>n==="Batu El"?B.jsx("span",{className:"text-neutral-900",children:n},r):n),OC=({href:e,children:t})=>B.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-neutral-600 hover:text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-[3px] transition-colors",children:t}),GC={paper:"paper",code:"code",thread:"thread",poster:"poster",slides:"slides",site:"site"},ZC=({project:e})=>{const t=e.links||{};return B.jsxs("div",{className:"py-4 border-t border-neutral-100 first:border-t-0",children:[B.jsxs("div",{className:"flex justify-between items-baseline gap-4 mb-1",children:[B.jsx("h3",{className:"text-[14.5px] font-medium leading-snug tracking-tight text-neutral-900",children:e.title}),B.jsx("span",{className:"font-mono text-[11px] text-neutral-400 shrink-0 tabular-nums",children:e.year})]}),e.authors&&B.jsx("p",{className:"text-[12.5px] text-neutral-500 leading-relaxed mb-2",children:WC(e.authors)}),B.jsxs("div",{className:"flex gap-x-3.5 gap-y-1 flex-wrap items-baseline text-[12.5px]",children:[Object.entries(GC).map(([n,r])=>t[n]?B.jsx(OC,{href:t[n],children:r},n):null),e.tags&&e.tags.length>0&&B.jsx("span",{className:"font-mono text-[10.5px] text-neutral-400",children:e.tags.join(" · ")})]})]})},tf=["alignment and social impacts","multiagent systems and inference time techniques","applied interpretability","reinforcement learning","ml systems and state space models","other"],HC=()=>{const[e,t]=V.useState(tf[0]),n=V.useMemo(()=>Tg.filter(r=>r.area===e),[e]);return B.jsxs(B.Fragment,{children:[B.jsx("ul",{role:"tablist",className:"flex flex-col gap-1.5 mb-8",children:tf.map(r=>{const i=e===r;return B.jsx("li",{children:B.jsx("button",{role:"tab","aria-selected":i,onClick:()=>t(r),className:`text-left text-[13.5px] tracking-tight transition-colors duration-150 ${i?"text-neutral-900 font-medium underline decoration-neutral-900 underline-offset-[4px]":"text-neutral-500 hover:text-neutral-900 underline decoration-neutral-200 hover:decoration-neutral-900 underline-offset-[4px]"}`,children:r})},r)})}),B.jsx("div",{className:"page-fade",children:n.length===0?B.jsx("p",{className:"font-mono text-[11px] text-neutral-400 uppercase tracking-[0.18em]",children:"nothing here yet."}):n.map(r=>B.jsx(ZC,{project:r},r.id))},e)]})},Du=({href:e,children:t})=>B.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-neutral-600 hover:text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-[3px] transition-colors",children:t}),VC=({item:e})=>{const t=e.links||{};return B.jsxs("div",{className:"py-4 border-t border-neutral-100 first:border-t-0",children:[B.jsxs("div",{className:"flex justify-between items-baseline gap-4 mb-1",children:[B.jsx("h3",{className:"text-[14.5px] font-medium leading-snug tracking-tight text-neutral-900",children:e.title}),B.jsx("span",{className:"font-mono text-[11px] text-neutral-400 shrink-0 tabular-nums",children:e.year})]}),(e.role||e.venue)&&B.jsxs("p",{className:"text-[12.5px] text-neutral-500 leading-relaxed mb-2",children:[e.role&&B.jsx("span",{className:"text-neutral-900",children:e.role}),e.role&&e.venue?" · ":"",e.venue]}),B.jsxs("div",{className:"flex gap-x-3.5 gap-y-1 flex-wrap items-baseline text-[12.5px]",children:[t.site&&B.jsx(Du,{href:t.site,children:"site"}),t.paper&&B.jsx(Du,{href:t.paper,children:"paper"}),t.code&&B.jsx(Du,{href:t.code,children:"code"}),e.tags&&e.tags.length>0&&B.jsx("span",{className:"font-mono text-[10.5px] text-neutral-400",children:e.tags.join(" · ")})]})]})},JC=()=>B.jsx("div",{children:xx.map(e=>B.jsx(VC,{item:e},e.id))});Wu.createRoot(document.getElementById("root")).render(B.jsx(so.StrictMode,{children:B.jsx(fb,{children:B.jsx(ob,{children:B.jsxs(cn,{element:B.jsx(Ab,{}),children:[B.jsx(cn,{index:!0,element:B.jsx(wi,{to:"/works",replace:!0})}),B.jsx(cn,{path:"/works",element:B.jsx(HC,{})}),B.jsx(cn,{path:"/orgs",element:B.jsx(JC,{})}),B.jsx(cn,{path:"/organizations",element:B.jsx(wi,{to:"/orgs",replace:!0})}),B.jsx(cn,{path:"/blog",element:B.jsx(Sx,{})}),B.jsx(cn,{path:"/blog/:id",element:B.jsx(ef,{})}),B.jsx(cn,{path:"/blog/:id/:partId",element:B.jsx(ef,{})}),B.jsx(cn,{path:"*",element:B.jsx(wi,{to:"/works",replace:!0})})]})})})}));
