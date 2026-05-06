(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(u){if(u.ep)return;u.ep=!0;const c=l(u);fetch(u.href,c)}})();function Gc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tc={exports:{}},Ri={};var hp;function mv(){if(hp)return Ri;hp=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(o,u,c){var f=null;if(c!==void 0&&(f=""+c),u.key!==void 0&&(f=""+u.key),"key"in u){c={};for(var h in u)h!=="key"&&(c[h]=u[h])}else c=u;return u=c.ref,{$$typeof:t,type:o,key:f,ref:u!==void 0?u:null,props:c}}return Ri.Fragment=i,Ri.jsx=l,Ri.jsxs=l,Ri}var mp;function pv(){return mp||(mp=1,tc.exports=mv()),tc.exports}var g=pv(),rc={exports:{}},zi={},lc={exports:{}},ic={};var pp;function gv(){return pp||(pp=1,(function(t){function i(H,X){var oe=H.length;H.push(X);e:for(;0<oe;){var be=oe-1>>>1,C=H[be];if(0<u(C,X))H[be]=X,H[oe]=C,oe=be;else break e}}function l(H){return H.length===0?null:H[0]}function o(H){if(H.length===0)return null;var X=H[0],oe=H.pop();if(oe!==X){H[0]=oe;e:for(var be=0,C=H.length,j=C>>>1;be<j;){var G=2*(be+1)-1,T=H[G],re=G+1,me=H[re];if(0>u(T,oe))re<C&&0>u(me,T)?(H[be]=me,H[re]=oe,be=re):(H[be]=T,H[G]=oe,be=G);else if(re<C&&0>u(me,oe))H[be]=me,H[re]=oe,be=re;else break e}}return X}function u(H,X){var oe=H.sortIndex-X.sortIndex;return oe!==0?oe:H.id-X.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();t.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,y=null,S=3,b=!1,E=!1,R=!1,M=!1,w=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Z(H){for(var X=l(p);X!==null;){if(X.callback===null)o(p);else if(X.startTime<=H)o(p),X.sortIndex=X.expirationTime,i(m,X);else break;X=l(p)}}function ee(H){if(R=!1,Z(H),!E)if(l(m)!==null)E=!0,F||(F=!0,te());else{var X=l(p);X!==null&&K(ee,X.startTime-H)}}var F=!1,W=-1,fe=5,ue=-1;function I(){return M?!0:!(t.unstable_now()-ue<fe)}function ne(){if(M=!1,F){var H=t.unstable_now();ue=H;var X=!0;try{e:{E=!1,R&&(R=!1,B(W),W=-1),b=!0;var oe=S;try{n:{for(Z(H),y=l(m);y!==null&&!(y.expirationTime>H&&I());){var be=y.callback;if(typeof be=="function"){y.callback=null,S=y.priorityLevel;var C=be(y.expirationTime<=H);if(H=t.unstable_now(),typeof C=="function"){y.callback=C,Z(H),X=!0;break n}y===l(m)&&o(m),Z(H)}else o(m);y=l(m)}if(y!==null)X=!0;else{var j=l(p);j!==null&&K(ee,j.startTime-H),X=!1}}break e}finally{y=null,S=oe,b=!1}X=void 0}}finally{X?te():F=!1}}}var te;if(typeof L=="function")te=function(){L(ne)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ie=Se.port2;Se.port1.onmessage=ne,te=function(){ie.postMessage(null)}}else te=function(){w(ne,0)};function K(H,X){W=w(function(){H(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(H){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var oe=S;S=X;try{return H()}finally{S=oe}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=S;S=H;try{return X()}finally{S=oe}},t.unstable_scheduleCallback=function(H,X,oe){var be=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?be+oe:be):oe=be,H){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=oe+C,H={id:x++,callback:X,priorityLevel:H,startTime:oe,expirationTime:C,sortIndex:-1},oe>be?(H.sortIndex=oe,i(p,H),l(m)===null&&H===l(p)&&(R?(B(W),W=-1):R=!0,K(ee,oe-be))):(H.sortIndex=C,i(m,H),E||b||(E=!0,F||(F=!0,te()))),H},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(H){var X=S;return function(){var oe=S;S=X;try{return H.apply(this,arguments)}finally{S=oe}}}})(ic)),ic}var gp;function yv(){return gp||(gp=1,lc.exports=gv()),lc.exports}var ac={exports:{}},ge={};var yp;function vv(){if(yp)return ge;yp=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function b(j){return j===null||typeof j!="object"?null:(j=S&&j[S]||j["@@iterator"],typeof j=="function"?j:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function w(j,G,T){this.props=j,this.context=G,this.refs=M,this.updater=T||E}w.prototype.isReactComponent={},w.prototype.setState=function(j,G){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,G,"setState")},w.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function B(){}B.prototype=w.prototype;function L(j,G,T){this.props=j,this.context=G,this.refs=M,this.updater=T||E}var Z=L.prototype=new B;Z.constructor=L,R(Z,w.prototype),Z.isPureReactComponent=!0;var ee=Array.isArray;function F(){}var W={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function ue(j,G,T){var re=T.ref;return{$$typeof:t,type:j,key:G,ref:re!==void 0?re:null,props:T}}function I(j,G){return ue(j.type,G,j.props)}function ne(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function te(j){var G={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(T){return G[T]})}var Se=/\/+/g;function ie(j,G){return typeof j=="object"&&j!==null&&j.key!=null?te(""+j.key):G.toString(36)}function K(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(F,F):(j.status="pending",j.then(function(G){j.status==="pending"&&(j.status="fulfilled",j.value=G)},function(G){j.status==="pending"&&(j.status="rejected",j.reason=G)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function H(j,G,T,re,me){var se=typeof j;(se==="undefined"||se==="boolean")&&(j=null);var Ae=!1;if(j===null)Ae=!0;else switch(se){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(j.$$typeof){case t:case i:Ae=!0;break;case x:return Ae=j._init,H(Ae(j._payload),G,T,re,me)}}if(Ae)return me=me(j),Ae=re===""?"."+ie(j,0):re,ee(me)?(T="",Ae!=null&&(T=Ae.replace(Se,"$&/")+"/"),H(me,G,T,"",function(Pn){return Pn})):me!=null&&(ne(me)&&(me=I(me,T+(me.key==null||j&&j.key===me.key?"":(""+me.key).replace(Se,"$&/")+"/")+Ae)),G.push(me)),1;Ae=0;var Xe=re===""?".":re+":";if(ee(j))for(var Be=0;Be<j.length;Be++)re=j[Be],se=Xe+ie(re,Be),Ae+=H(re,G,T,se,me);else if(Be=b(j),typeof Be=="function")for(j=Be.call(j),Be=0;!(re=j.next()).done;)re=re.value,se=Xe+ie(re,Be++),Ae+=H(re,G,T,se,me);else if(se==="object"){if(typeof j.then=="function")return H(K(j),G,T,re,me);throw G=String(j),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function X(j,G,T){if(j==null)return j;var re=[],me=0;return H(j,re,"","",function(se){return G.call(T,se,me++)}),re}function oe(j){if(j._status===-1){var G=j._result;G=G(),G.then(function(T){(j._status===0||j._status===-1)&&(j._status=1,j._result=T)},function(T){(j._status===0||j._status===-1)&&(j._status=2,j._result=T)}),j._status===-1&&(j._status=0,j._result=G)}if(j._status===1)return j._result.default;throw j._result}var be=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},C={map:X,forEach:function(j,G,T){X(j,function(){G.apply(this,arguments)},T)},count:function(j){var G=0;return X(j,function(){G++}),G},toArray:function(j){return X(j,function(G){return G})||[]},only:function(j){if(!ne(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ge.Activity=y,ge.Children=C,ge.Component=w,ge.Fragment=l,ge.Profiler=u,ge.PureComponent=L,ge.StrictMode=o,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ge.__COMPILER_RUNTIME={__proto__:null,c:function(j){return W.H.useMemoCache(j)}},ge.cache=function(j){return function(){return j.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(j,G,T){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var re=R({},j.props),me=j.key;if(G!=null)for(se in G.key!==void 0&&(me=""+G.key),G)!fe.call(G,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&G.ref===void 0||(re[se]=G[se]);var se=arguments.length-2;if(se===1)re.children=T;else if(1<se){for(var Ae=Array(se),Xe=0;Xe<se;Xe++)Ae[Xe]=arguments[Xe+2];re.children=Ae}return ue(j.type,me,re)},ge.createContext=function(j){return j={$$typeof:f,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:c,_context:j},j},ge.createElement=function(j,G,T){var re,me={},se=null;if(G!=null)for(re in G.key!==void 0&&(se=""+G.key),G)fe.call(G,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(me[re]=G[re]);var Ae=arguments.length-2;if(Ae===1)me.children=T;else if(1<Ae){for(var Xe=Array(Ae),Be=0;Be<Ae;Be++)Xe[Be]=arguments[Be+2];me.children=Xe}if(j&&j.defaultProps)for(re in Ae=j.defaultProps,Ae)me[re]===void 0&&(me[re]=Ae[re]);return ue(j,se,me)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(j){return{$$typeof:h,render:j}},ge.isValidElement=ne,ge.lazy=function(j){return{$$typeof:x,_payload:{_status:-1,_result:j},_init:oe}},ge.memo=function(j,G){return{$$typeof:p,type:j,compare:G===void 0?null:G}},ge.startTransition=function(j){var G=W.T,T={};W.T=T;try{var re=j(),me=W.S;me!==null&&me(T,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(F,be)}catch(se){be(se)}finally{G!==null&&T.types!==null&&(G.types=T.types),W.T=G}},ge.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ge.use=function(j){return W.H.use(j)},ge.useActionState=function(j,G,T){return W.H.useActionState(j,G,T)},ge.useCallback=function(j,G){return W.H.useCallback(j,G)},ge.useContext=function(j){return W.H.useContext(j)},ge.useDebugValue=function(){},ge.useDeferredValue=function(j,G){return W.H.useDeferredValue(j,G)},ge.useEffect=function(j,G){return W.H.useEffect(j,G)},ge.useEffectEvent=function(j){return W.H.useEffectEvent(j)},ge.useId=function(){return W.H.useId()},ge.useImperativeHandle=function(j,G,T){return W.H.useImperativeHandle(j,G,T)},ge.useInsertionEffect=function(j,G){return W.H.useInsertionEffect(j,G)},ge.useLayoutEffect=function(j,G){return W.H.useLayoutEffect(j,G)},ge.useMemo=function(j,G){return W.H.useMemo(j,G)},ge.useOptimistic=function(j,G){return W.H.useOptimistic(j,G)},ge.useReducer=function(j,G,T){return W.H.useReducer(j,G,T)},ge.useRef=function(j){return W.H.useRef(j)},ge.useState=function(j){return W.H.useState(j)},ge.useSyncExternalStore=function(j,G,T){return W.H.useSyncExternalStore(j,G,T)},ge.useTransition=function(){return W.H.useTransition()},ge.version="19.2.0",ge}var vp;function Pc(){return vp||(vp=1,ac.exports=vv()),ac.exports}var oc={exports:{}},yn={};var xp;function xv(){if(xp)return yn;xp=1;var t=Pc();function i(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function c(m,p,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:m,containerInfo:p,implementation:x}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,yn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return c(m,p,null,x)},yn.flushSync=function(m){var p=f.T,x=o.p;try{if(f.T=null,o.p=2,m)return m()}finally{f.T=p,o.p=x,o.d.f()}},yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(m,p))},yn.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,y=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?o.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:b}):x==="script"&&o.d.X(m,{crossOrigin:y,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);o.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(m)},yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,y=h(x,p.crossOrigin);o.d.L(m,x,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);o.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(m)},yn.requestFormReset=function(m){o.d.r(m)},yn.unstable_batchedUpdates=function(m,p){return m(p)},yn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},yn.useFormStatus=function(){return f.H.useHostTransitionStatus()},yn.version="19.2.0",yn}var bp;function bv(){if(bp)return oc.exports;bp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),oc.exports=xv(),oc.exports}var Sp;function Sv(){if(Sp)return zi;Sp=1;var t=yv(),i=Pc(),l=bv();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(o(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(o(188));return n!==e?null:e}for(var r=e,a=n;;){var s=r.return;if(s===null)break;var d=s.alternate;if(d===null){if(a=s.return,a!==null){r=a;continue}break}if(s.child===d.child){for(d=s.child;d;){if(d===r)return m(s),e;if(d===a)return m(s),n;d=d.sibling}throw Error(o(188))}if(r.return!==a.return)r=s,a=d;else{for(var v=!1,k=s.child;k;){if(k===r){v=!0,r=s,a=d;break}if(k===a){v=!0,a=s,r=d;break}k=k.sibling}if(!v){for(k=d.child;k;){if(k===r){v=!0,r=d,a=s;break}if(k===a){v=!0,a=d,r=s;break}k=k.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==a)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case w:return"Profiler";case M:return"StrictMode";case ee:return"Suspense";case F:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case Z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return n=e.displayName||null,n!==null?n:ie(e.type)||"Memo";case fe:n=e._payload,e=e._init;try{return ie(e(n))}catch{}}return null}var K=Array.isArray,H=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},be=[],C=-1;function j(e){return{current:e}}function G(e){0>C||(e.current=be[C],be[C]=null,C--)}function T(e,n){C++,be[C]=e.current,e.current=n}var re=j(null),me=j(null),se=j(null),Ae=j(null);function Xe(e,n){switch(T(se,n),T(me,e),T(re,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Lm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Lm(n),e=Bm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(re),T(re,e)}function Be(){G(re),G(me),G(se)}function Pn(e){e.memoizedState!==null&&T(Ae,e);var n=re.current,r=Bm(n,e.type);n!==r&&(T(me,e),T(re,r))}function bt(e){me.current===e&&(G(re),G(me)),Ae.current===e&&(G(Ae),wi._currentValue=oe)}var Ul,$i;function St(e){if(Ul===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ul=n&&n[1]||"",$i=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ul+e+$i}var Hr=!1;function Ir(e,n){if(!e||Hr)return"";Hr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var U=q}Reflect.construct(e,[],J)}else{try{J.call()}catch(q){U=q}e.call(J.prototype)}}else{try{throw Error()}catch(q){U=q}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&U&&typeof q.stack=="string")return[q.stack,U.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=a.DetermineComponentFrameRoot(),v=d[0],k=d[1];if(v&&k){var A=v.split(`
`),N=k.split(`
`);for(s=a=0;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;for(;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;if(a===A.length||s===N.length)for(a=A.length-1,s=N.length-1;1<=a&&0<=s&&A[a]!==N[s];)s--;for(;1<=a&&0<=s;a--,s--)if(A[a]!==N[s]){if(a!==1||s!==1)do if(a--,s--,0>s||A[a]!==N[s]){var V=`
`+A[a].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=a&&0<=s);break}}}finally{Hr=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?St(r):""}function ea(e,n){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return e.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return Ir(e.type,!1);case 11:return Ir(e.type.render,!1);case 1:return Ir(e.type,!0);case 31:return St("Activity");default:return""}}function na(e){try{var n="",r=null;do n+=ea(e,r),r=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fr=Object.prototype.hasOwnProperty,qr=t.unstable_scheduleCallback,Hl=t.unstable_cancelCallback,Fo=t.unstable_shouldYield,qo=t.unstable_requestPaint,bn=t.unstable_now,Vo=t.unstable_getCurrentPriorityLevel,P=t.unstable_ImmediatePriority,$=t.unstable_UserBlockingPriority,pe=t.unstable_NormalPriority,ke=t.unstable_LowPriority,Oe=t.unstable_IdlePriority,On=t.log,kt=t.unstable_setDisableYieldValue,Sn=null,on=null;function En(e){if(typeof On=="function"&&kt(e),on&&typeof on.setStrictMode=="function")try{on.setStrictMode(Sn,e)}catch{}}var Fe=Math.clz32?Math.clz32:e0,Pt=Math.log,rt=Math.LN2;function e0(e){return e>>>=0,e===0?32:31-(Pt(e)/rt|0)|0}var ta=256,ra=262144,la=4194304;function vr(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ia(e,n,r){var a=e.pendingLanes;if(a===0)return 0;var s=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var k=a&134217727;return k!==0?(a=k&~d,a!==0?s=vr(a):(v&=k,v!==0?s=vr(v):r||(r=k&~e,r!==0&&(s=vr(r))))):(k=a&~d,k!==0?s=vr(k):v!==0?s=vr(v):r||(r=a&~e,r!==0&&(s=vr(r)))),s===0?0:n!==0&&n!==s&&(n&d)===0&&(d=s&-s,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:s}function Il(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function n0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(){var e=la;return la<<=1,(la&62914560)===0&&(la=4194304),e}function Go(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Fl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,n,r,a,s,d){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var k=e.entanglements,A=e.expirationTimes,N=e.hiddenUpdates;for(r=v&~r;0<r;){var V=31-Fe(r),J=1<<V;k[V]=0,A[V]=-1;var U=N[V];if(U!==null)for(N[V]=null,V=0;V<U.length;V++){var q=U[V];q!==null&&(q.lane&=-536870913)}r&=~J}a!==0&&vf(e,a,0),d!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~n))}function vf(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-Fe(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|r&261930}function xf(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var a=31-Fe(r),s=1<<a;s&n|e[a]&n&&(e[a]|=n),r&=~s}}function bf(e,n){var r=n&-n;return r=(r&42)!==0?1:Po(r),(r&(e.suspendedLanes|n))!==0?0:r}function Po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sf(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:ap(e.type))}function kf(e,n){var r=X.p;try{return X.p=e,n()}finally{X.p=r}}var Yt=Math.random().toString(36).slice(2),fn="__reactFiber$"+Yt,Cn="__reactProps$"+Yt,Vr="__reactContainer$"+Yt,Jo="__reactEvents$"+Yt,r0="__reactListeners$"+Yt,l0="__reactHandles$"+Yt,Tf="__reactResources$"+Yt,ql="__reactMarker$"+Yt;function Xo(e){delete e[fn],delete e[Cn],delete e[Jo],delete e[r0],delete e[l0]}function Gr(e){var n=e[fn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Vr]||r[fn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Gm(e);e!==null;){if(r=e[fn])return r;e=Gm(e)}return n}e=r,r=e.parentNode}return null}function Pr(e){if(e=e[fn]||e[Vr]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Vl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function Yr(e){var n=e[Tf];return n||(n=e[Tf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[ql]=!0}var Ef=new Set,Cf={};function xr(e,n){Jr(e,n),Jr(e+"Capture",n)}function Jr(e,n){for(Cf[e]=n,e=0;e<n.length;e++)Ef.add(n[e])}var i0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},wf={};function a0(e){return Fr.call(wf,e)?!0:Fr.call(Af,e)?!1:i0.test(e)?wf[e]=!0:(Af[e]=!0,!1)}function aa(e,n,r){if(a0(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function oa(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Tt(e,n,r,a){if(a===null)e.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+a)}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function o0(e,n,r){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(v){r=""+v,d.call(this,v)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qo(e){if(!e._valueTracker){var n=jf(e)?"checked":"value";e._valueTracker=o0(e,n,""+e[n])}}function Df(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),a="";return e&&(a=jf(e)?e.checked?"true":"false":e.value),e=a,e!==r?(n.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var u0=/[\n"\\]/g;function Jn(e){return e.replace(u0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zo(e,n,r,a,s,d,v,k){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yn(n)):e.value!==""+Yn(n)&&(e.value=""+Yn(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Wo(e,v,Yn(n)):r!=null?Wo(e,v,Yn(r)):a!=null&&e.removeAttribute("value"),s==null&&d!=null&&(e.defaultChecked=!!d),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+Yn(k):e.removeAttribute("name")}function Mf(e,n,r,a,s,d,v,k){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Qo(e);return}r=r!=null?""+Yn(r):"",n=n!=null?""+Yn(n):r,k||n===e.value||(e.value=n),e.defaultValue=n}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=k?e.checked:!!a,e.defaultChecked=!!a,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Qo(e)}function Wo(e,n,r){n==="number"&&ua(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Xr(e,n,r,a){if(e=e.options,n){n={};for(var s=0;s<r.length;s++)n["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=n.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Yn(r),n=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Rf(e,n,r){if(n!=null&&(n=""+Yn(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Yn(r):""}function zf(e,n,r,a){if(n==null){if(a!=null){if(r!=null)throw Error(o(92));if(K(a)){if(1<a.length)throw Error(o(93));a=a[0]}r=a}r==null&&(r=""),n=r}r=Yn(n),e.defaultValue=r,a=e.textContent,a===r&&a!==""&&a!==null&&(e.value=a),Qo(e)}function Qr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _f(e,n,r){var a=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,r):typeof r!="number"||r===0||s0.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Of(e,n,r){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,r!=null){for(var a in r)!r.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var s in n)a=n[s],n.hasOwnProperty(s)&&r[s]!==a&&_f(e,s,a)}else for(var d in n)n.hasOwnProperty(d)&&_f(e,d,n[d])}function Ko(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),f0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sa(e){return f0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Et(){}var $o=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zr=null,Wr=null;function Nf(e){var n=Pr(e);if(n&&(e=n.stateNode)){var r=e[Cn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Zo(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Jn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var a=r[n];if(a!==e&&a.form===e.form){var s=a[Cn]||null;if(!s)throw Error(o(90));Zo(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(n=0;n<r.length;n++)a=r[n],a.form===e.form&&Df(a)}break e;case"textarea":Rf(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Xr(e,!!r.multiple,n,!1)}}}var nu=!1;function Lf(e,n,r){if(nu)return e(n,r);nu=!0;try{var a=e(n);return a}finally{if(nu=!1,(Zr!==null||Wr!==null)&&(Za(),Zr&&(n=Zr,e=Wr,Wr=Zr=null,Nf(n),e)))for(n=0;n<e.length;n++)Nf(e[n])}}function Gl(e,n){var r=e.stateNode;if(r===null)return null;var a=r[Cn]||null;if(a===null)return null;r=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,n,typeof r));return r}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Ct)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{tu=!1}var Jt=null,ru=null,ca=null;function Bf(){if(ca)return ca;var e,n=ru,r=n.length,a,s="value"in Jt?Jt.value:Jt.textContent,d=s.length;for(e=0;e<r&&n[e]===s[e];e++);var v=r-e;for(a=1;a<=v&&n[r-a]===s[d-a];a++);return ca=s.slice(e,1<a?1-a:void 0)}function fa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function da(){return!0}function Uf(){return!1}function An(e){function n(r,a,s,d,v){this._reactName=r,this._targetInst=s,this.type=a,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(r=e[k],this[k]=r?r(d):d[k]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?da:Uf,this.isPropagationStopped=Uf,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ha=An(br),Yl=y({},br,{view:0,detail:0}),d0=An(Yl),lu,iu,Jl,ma=y({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jl&&(Jl&&e.type==="mousemove"?(lu=e.screenX-Jl.screenX,iu=e.screenY-Jl.screenY):iu=lu=0,Jl=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Hf=An(ma),h0=y({},ma,{dataTransfer:0}),m0=An(h0),p0=y({},Yl,{relatedTarget:0}),au=An(p0),g0=y({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=An(g0),v0=y({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=An(v0),b0=y({},br,{data:0}),If=An(b0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=T0[e])?!!n[e]:!1}function ou(){return E0}var C0=y({},Yl,{key:function(e){if(e.key){var n=S0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=An(C0),w0=y({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=An(w0),j0=y({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),D0=An(j0),M0=y({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=An(M0),z0=y({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=An(z0),O0=y({},br,{newState:0,oldState:0}),N0=An(O0),L0=[9,13,27,32],uu=Ct&&"CompositionEvent"in window,Xl=null;Ct&&"documentMode"in document&&(Xl=document.documentMode);var B0=Ct&&"TextEvent"in window&&!Xl,qf=Ct&&(!uu||Xl&&8<Xl&&11>=Xl),Vf=" ",Gf=!1;function Pf(e,n){switch(e){case"keyup":return L0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kr=!1;function U0(e,n){switch(e){case"compositionend":return Yf(n);case"keypress":return n.which!==32?null:(Gf=!0,Vf);case"textInput":return e=n.data,e===Vf&&Gf?null:e;default:return null}}function H0(e,n){if(Kr)return e==="compositionend"||!uu&&Pf(e,n)?(e=Bf(),ca=ru=Jt=null,Kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qf&&n.locale!=="ko"?null:n.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!I0[e.type]:n==="textarea"}function Xf(e,n,r,a){Zr?Wr?Wr.push(a):Wr=[a]:Zr=a,n=ro(n,"onChange"),0<n.length&&(r=new ha("onChange","change",null,r,a),e.push({event:r,listeners:n}))}var Ql=null,Zl=null;function F0(e){Mm(e,0)}function pa(e){var n=Vl(e);if(Df(n))return e}function Qf(e,n){if(e==="change")return n}var Zf=!1;if(Ct){var su;if(Ct){var cu="oninput"in document;if(!cu){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),cu=typeof Wf.oninput=="function"}su=cu}else su=!1;Zf=su&&(!document.documentMode||9<document.documentMode)}function Kf(){Ql&&(Ql.detachEvent("onpropertychange",$f),Zl=Ql=null)}function $f(e){if(e.propertyName==="value"&&pa(Zl)){var n=[];Xf(n,Zl,e,eu(e)),Lf(F0,n)}}function q0(e,n,r){e==="focusin"?(Kf(),Ql=n,Zl=r,Ql.attachEvent("onpropertychange",$f)):e==="focusout"&&Kf()}function V0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pa(Zl)}function G0(e,n){if(e==="click")return pa(n)}function P0(e,n){if(e==="input"||e==="change")return pa(n)}function Y0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Nn=typeof Object.is=="function"?Object.is:Y0;function Wl(e,n){if(Nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),a=Object.keys(n);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var s=r[a];if(!Fr.call(n,s)||!Nn(e[s],n[s]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nd(e,n){var r=ed(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=n&&a>=n)return{node:r,offset:n-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ed(r)}}function td(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?td(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ua(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=ua(e.document)}return n}function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var J0=Ct&&"documentMode"in document&&11>=document.documentMode,$r=null,du=null,Kl=null,hu=!1;function ld(e,n,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;hu||$r==null||$r!==ua(a)||(a=$r,"selectionStart"in a&&fu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Kl&&Wl(Kl,a)||(Kl=a,a=ro(du,"onSelect"),0<a.length&&(n=new ha("onSelect","select",null,n,r),e.push({event:n,listeners:a}),n.target=$r)))}function Sr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var el={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},mu={},id={};Ct&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function kr(e){if(mu[e])return mu[e];if(!el[e])return e;var n=el[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in id)return mu[e]=n[r];return e}var ad=kr("animationend"),od=kr("animationiteration"),ud=kr("animationstart"),X0=kr("transitionrun"),Q0=kr("transitionstart"),Z0=kr("transitioncancel"),sd=kr("transitionend"),cd=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function lt(e,n){cd.set(e,n),xr(n,[e])}var ga=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xn=[],nl=0,gu=0;function ya(){for(var e=nl,n=gu=nl=0;n<e;){var r=Xn[n];Xn[n++]=null;var a=Xn[n];Xn[n++]=null;var s=Xn[n];Xn[n++]=null;var d=Xn[n];if(Xn[n++]=null,a!==null&&s!==null){var v=a.pending;v===null?s.next=s:(s.next=v.next,v.next=s),a.pending=s}d!==0&&fd(r,s,d)}}function va(e,n,r,a){Xn[nl++]=e,Xn[nl++]=n,Xn[nl++]=r,Xn[nl++]=a,gu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function yu(e,n,r,a){return va(e,n,r,a),xa(e)}function Tr(e,n){return va(e,null,null,n),xa(e)}function fd(e,n,r){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r);for(var s=!1,d=e.return;d!==null;)d.childLanes|=r,a=d.alternate,a!==null&&(a.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(s=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,s&&n!==null&&(s=31-Fe(r),e=d.hiddenUpdates,a=e[s],a===null?e[s]=[n]:a.push(n),n.lane=r|536870912),d):null}function xa(e){if(50<bi)throw bi=0,As=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tl={};function W0(e,n,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,n,r,a){return new W0(e,n,r,a)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function At(e,n){var r=e.alternate;return r===null?(r=Ln(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function dd(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ba(e,n,r,a,s,d){var v=0;if(a=e,typeof e=="function")vu(e)&&(v=1);else if(typeof e=="string")v=tv(e,r,re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Ln(31,r,n,s),e.elementType=ue,e.lanes=d,e;case R:return Er(r.children,s,d,n);case M:v=8,s|=24;break;case w:return e=Ln(12,r,n,s|2),e.elementType=w,e.lanes=d,e;case ee:return e=Ln(13,r,n,s),e.elementType=ee,e.lanes=d,e;case F:return e=Ln(19,r,n,s),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case B:v=9;break e;case Z:v=11;break e;case W:v=14;break e;case fe:v=16,a=null;break e}v=29,r=Error(o(130,e===null?"null":typeof e,"")),a=null}return n=Ln(v,r,n,s),n.elementType=e,n.type=a,n.lanes=d,n}function Er(e,n,r,a){return e=Ln(7,e,a,n),e.lanes=r,e}function xu(e,n,r){return e=Ln(6,e,null,n),e.lanes=r,e}function hd(e){var n=Ln(18,null,null,0);return n.stateNode=e,n}function bu(e,n,r){return n=Ln(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var md=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var r=md.get(e);return r!==void 0?r:(n={value:e,source:n,stack:na(n)},md.set(e,n),n)}return{value:e,source:n,stack:na(n)}}var rl=[],ll=0,Sa=null,$l=0,Zn=[],Wn=0,Xt=null,ft=1,dt="";function wt(e,n){rl[ll++]=$l,rl[ll++]=Sa,Sa=e,$l=n}function pd(e,n,r){Zn[Wn++]=ft,Zn[Wn++]=dt,Zn[Wn++]=Xt,Xt=e;var a=ft;e=dt;var s=32-Fe(a)-1;a&=~(1<<s),r+=1;var d=32-Fe(n)+s;if(30<d){var v=s-s%5;d=(a&(1<<v)-1).toString(32),a>>=v,s-=v,ft=1<<32-Fe(n)+s|r<<s|a,dt=d+e}else ft=1<<d|r<<s|a,dt=e}function Su(e){e.return!==null&&(wt(e,1),pd(e,1,0))}function ku(e){for(;e===Sa;)Sa=rl[--ll],rl[ll]=null,$l=rl[--ll],rl[ll]=null;for(;e===Xt;)Xt=Zn[--Wn],Zn[Wn]=null,dt=Zn[--Wn],Zn[Wn]=null,ft=Zn[--Wn],Zn[Wn]=null}function gd(e,n){Zn[Wn++]=ft,Zn[Wn++]=dt,Zn[Wn++]=Xt,ft=n.id,dt=n.overflow,Xt=e}var dn=null,Ye=null,De=!1,Qt=null,Kn=!1,Tu=Error(o(519));function Zt(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(Qn(n,e)),Tu}function yd(e){var n=e.stateNode,r=e.type,a=e.memoizedProps;switch(n[fn]=e,n[Cn]=a,r){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(r=0;r<ki.length;r++)Ee(ki[r],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Mf(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),zf(n,a.value,a.defaultValue,a.children)}r=a.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||a.suppressHydrationWarning===!0||Om(n.textContent,r)?(a.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),a.onScroll!=null&&Ee("scroll",n),a.onScrollEnd!=null&&Ee("scrollend",n),a.onClick!=null&&(n.onclick=Et),n=!0):n=!1,n||Zt(e,!0)}function vd(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 31:case 13:Kn=!1;return;case 27:case 3:Kn=!0;return;default:dn=dn.return}}function il(e){if(e!==dn)return!1;if(!De)return vd(e),De=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Fs(e.type,e.memoizedProps)),r=!r),r&&Ye&&Zt(e),vd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ye=Vm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ye=Vm(e)}else n===27?(n=Ye,cr(e.type)?(e=Ys,Ys=null,Ye=e):Ye=n):Ye=dn?et(e.stateNode.nextSibling):null;return!0}function Cr(){Ye=dn=null,De=!1}function Eu(){var e=Qt;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),Qt=null),e}function ei(e){Qt===null?Qt=[e]:Qt.push(e)}var Cu=j(null),Ar=null,jt=null;function Wt(e,n,r){T(Cu,n._currentValue),n._currentValue=r}function Dt(e){e._currentValue=Cu.current,G(Cu)}function Au(e,n,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===r)break;e=e.return}}function wu(e,n,r,a){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var d=s.dependencies;if(d!==null){var v=s.child;d=d.firstContext;e:for(;d!==null;){var k=d;d=s;for(var A=0;A<n.length;A++)if(k.context===n[A]){d.lanes|=r,k=d.alternate,k!==null&&(k.lanes|=r),Au(d.return,r,e),a||(v=null);break e}d=k.next}}else if(s.tag===18){if(v=s.return,v===null)throw Error(o(341));v.lanes|=r,d=v.alternate,d!==null&&(d.lanes|=r),Au(v,r,e),v=null}else v=s.child;if(v!==null)v.return=s;else for(v=s;v!==null;){if(v===e){v=null;break}if(s=v.sibling,s!==null){s.return=v.return,v=s;break}v=v.return}s=v}}function al(e,n,r,a){e=null;for(var s=n,d=!1;s!==null;){if(!d){if((s.flags&524288)!==0)d=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var v=s.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var k=s.type;Nn(s.pendingProps.value,v.value)||(e!==null?e.push(k):e=[k])}}else if(s===Ae.current){if(v=s.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}s=s.return}e!==null&&wu(n,e,r,a),n.flags|=262144}function ka(e){for(e=e.firstContext;e!==null;){if(!Nn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wr(e){Ar=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return xd(Ar,e)}function Ta(e,n){return Ar===null&&wr(e),xd(e,n)}function xd(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},jt===null){if(e===null)throw Error(o(308));jt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else jt=jt.next=n;return r}var K0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},$0=t.unstable_scheduleCallback,e1=t.unstable_NormalPriority,nn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new K0,data:new Map,refCount:0}}function ni(e){e.refCount--,e.refCount===0&&$0(e1,function(){e.controller.abort()})}var ti=null,Du=0,ol=0,ul=null;function n1(e,n){if(ti===null){var r=ti=[];Du=0,ol=zs(),ul={status:"pending",value:void 0,then:function(a){r.push(a)}}}return Du++,n.then(bd,bd),n}function bd(){if(--Du===0&&ti!==null){ul!==null&&(ul.status="fulfilled");var e=ti;ti=null,ol=0,ul=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function t1(e,n){var r=[],a={status:"pending",value:null,reason:null,then:function(s){r.push(s)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var s=0;s<r.length;s++)(0,r[s])(n)},function(s){for(a.status="rejected",a.reason=s,s=0;s<r.length;s++)(0,r[s])(void 0)}),a}var Sd=H.S;H.S=function(e,n){lm=bn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n1(e,n),Sd!==null&&Sd(e,n)};var jr=j(null);function Mu(){var e=jr.current;return e!==null?e:qe.pooledCache}function Ea(e,n){n===null?T(jr,jr.current):T(jr,n.pool)}function kd(){var e=Mu();return e===null?null:{parent:nn._currentValue,pool:e}}var sl=Error(o(460)),Ru=Error(o(474)),Ca=Error(o(542)),Aa={then:function(){}};function Td(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ed(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Et,Et),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ad(e),e;default:if(typeof n.status=="string")n.then(Et,Et);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var s=n;s.status="fulfilled",s.value=a}},function(a){if(n.status==="pending"){var s=n;s.status="rejected",s.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ad(e),e}throw Mr=n,sl}}function Dr(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Mr=r,sl):r}}var Mr=null;function Cd(){if(Mr===null)throw Error(o(459));var e=Mr;return Mr=null,e}function Ad(e){if(e===sl||e===Ca)throw Error(o(483))}var cl=null,ri=0;function wa(e){var n=ri;return ri+=1,cl===null&&(cl=[]),Ed(cl,e,n)}function li(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ja(e,n){throw n.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wd(e){function n(z,D){if(e){var O=z.deletions;O===null?(z.deletions=[D],z.flags|=16):O.push(D)}}function r(z,D){if(!e)return null;for(;D!==null;)n(z,D),D=D.sibling;return null}function a(z){for(var D=new Map;z!==null;)z.key!==null?D.set(z.key,z):D.set(z.index,z),z=z.sibling;return D}function s(z,D){return z=At(z,D),z.index=0,z.sibling=null,z}function d(z,D,O){return z.index=O,e?(O=z.alternate,O!==null?(O=O.index,O<D?(z.flags|=67108866,D):O):(z.flags|=67108866,D)):(z.flags|=1048576,D)}function v(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function k(z,D,O,Y){return D===null||D.tag!==6?(D=xu(O,z.mode,Y),D.return=z,D):(D=s(D,O),D.return=z,D)}function A(z,D,O,Y){var ce=O.type;return ce===R?V(z,D,O.props.children,Y,O.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===fe&&Dr(ce)===D.type)?(D=s(D,O.props),li(D,O),D.return=z,D):(D=ba(O.type,O.key,O.props,null,z.mode,Y),li(D,O),D.return=z,D)}function N(z,D,O,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==O.containerInfo||D.stateNode.implementation!==O.implementation?(D=bu(O,z.mode,Y),D.return=z,D):(D=s(D,O.children||[]),D.return=z,D)}function V(z,D,O,Y,ce){return D===null||D.tag!==7?(D=Er(O,z.mode,Y,ce),D.return=z,D):(D=s(D,O),D.return=z,D)}function J(z,D,O){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=xu(""+D,z.mode,O),D.return=z,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case b:return O=ba(D.type,D.key,D.props,null,z.mode,O),li(O,D),O.return=z,O;case E:return D=bu(D,z.mode,O),D.return=z,D;case fe:return D=Dr(D),J(z,D,O)}if(K(D)||te(D))return D=Er(D,z.mode,O,null),D.return=z,D;if(typeof D.then=="function")return J(z,wa(D),O);if(D.$$typeof===L)return J(z,Ta(z,D),O);ja(z,D)}return null}function U(z,D,O,Y){var ce=D!==null?D.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ce!==null?null:k(z,D,""+O,Y);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case b:return O.key===ce?A(z,D,O,Y):null;case E:return O.key===ce?N(z,D,O,Y):null;case fe:return O=Dr(O),U(z,D,O,Y)}if(K(O)||te(O))return ce!==null?null:V(z,D,O,Y,null);if(typeof O.then=="function")return U(z,D,wa(O),Y);if(O.$$typeof===L)return U(z,D,Ta(z,O),Y);ja(z,O)}return null}function q(z,D,O,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return z=z.get(O)||null,k(D,z,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case b:return z=z.get(Y.key===null?O:Y.key)||null,A(D,z,Y,ce);case E:return z=z.get(Y.key===null?O:Y.key)||null,N(D,z,Y,ce);case fe:return Y=Dr(Y),q(z,D,O,Y,ce)}if(K(Y)||te(Y))return z=z.get(O)||null,V(D,z,Y,ce,null);if(typeof Y.then=="function")return q(z,D,O,wa(Y),ce);if(Y.$$typeof===L)return q(z,D,O,Ta(D,Y),ce);ja(D,Y)}return null}function le(z,D,O,Y){for(var ce=null,Re=null,ae=D,ve=D=0,je=null;ae!==null&&ve<O.length;ve++){ae.index>ve?(je=ae,ae=null):je=ae.sibling;var ze=U(z,ae,O[ve],Y);if(ze===null){ae===null&&(ae=je);break}e&&ae&&ze.alternate===null&&n(z,ae),D=d(ze,D,ve),Re===null?ce=ze:Re.sibling=ze,Re=ze,ae=je}if(ve===O.length)return r(z,ae),De&&wt(z,ve),ce;if(ae===null){for(;ve<O.length;ve++)ae=J(z,O[ve],Y),ae!==null&&(D=d(ae,D,ve),Re===null?ce=ae:Re.sibling=ae,Re=ae);return De&&wt(z,ve),ce}for(ae=a(ae);ve<O.length;ve++)je=q(ae,z,ve,O[ve],Y),je!==null&&(e&&je.alternate!==null&&ae.delete(je.key===null?ve:je.key),D=d(je,D,ve),Re===null?ce=je:Re.sibling=je,Re=je);return e&&ae.forEach(function(pr){return n(z,pr)}),De&&wt(z,ve),ce}function he(z,D,O,Y){if(O==null)throw Error(o(151));for(var ce=null,Re=null,ae=D,ve=D=0,je=null,ze=O.next();ae!==null&&!ze.done;ve++,ze=O.next()){ae.index>ve?(je=ae,ae=null):je=ae.sibling;var pr=U(z,ae,ze.value,Y);if(pr===null){ae===null&&(ae=je);break}e&&ae&&pr.alternate===null&&n(z,ae),D=d(pr,D,ve),Re===null?ce=pr:Re.sibling=pr,Re=pr,ae=je}if(ze.done)return r(z,ae),De&&wt(z,ve),ce;if(ae===null){for(;!ze.done;ve++,ze=O.next())ze=J(z,ze.value,Y),ze!==null&&(D=d(ze,D,ve),Re===null?ce=ze:Re.sibling=ze,Re=ze);return De&&wt(z,ve),ce}for(ae=a(ae);!ze.done;ve++,ze=O.next())ze=q(ae,z,ve,ze.value,Y),ze!==null&&(e&&ze.alternate!==null&&ae.delete(ze.key===null?ve:ze.key),D=d(ze,D,ve),Re===null?ce=ze:Re.sibling=ze,Re=ze);return e&&ae.forEach(function(hv){return n(z,hv)}),De&&wt(z,ve),ce}function Ie(z,D,O,Y){if(typeof O=="object"&&O!==null&&O.type===R&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case b:e:{for(var ce=O.key;D!==null;){if(D.key===ce){if(ce=O.type,ce===R){if(D.tag===7){r(z,D.sibling),Y=s(D,O.props.children),Y.return=z,z=Y;break e}}else if(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===fe&&Dr(ce)===D.type){r(z,D.sibling),Y=s(D,O.props),li(Y,O),Y.return=z,z=Y;break e}r(z,D);break}else n(z,D);D=D.sibling}O.type===R?(Y=Er(O.props.children,z.mode,Y,O.key),Y.return=z,z=Y):(Y=ba(O.type,O.key,O.props,null,z.mode,Y),li(Y,O),Y.return=z,z=Y)}return v(z);case E:e:{for(ce=O.key;D!==null;){if(D.key===ce)if(D.tag===4&&D.stateNode.containerInfo===O.containerInfo&&D.stateNode.implementation===O.implementation){r(z,D.sibling),Y=s(D,O.children||[]),Y.return=z,z=Y;break e}else{r(z,D);break}else n(z,D);D=D.sibling}Y=bu(O,z.mode,Y),Y.return=z,z=Y}return v(z);case fe:return O=Dr(O),Ie(z,D,O,Y)}if(K(O))return le(z,D,O,Y);if(te(O)){if(ce=te(O),typeof ce!="function")throw Error(o(150));return O=ce.call(O),he(z,D,O,Y)}if(typeof O.then=="function")return Ie(z,D,wa(O),Y);if(O.$$typeof===L)return Ie(z,D,Ta(z,O),Y);ja(z,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,D!==null&&D.tag===6?(r(z,D.sibling),Y=s(D,O),Y.return=z,z=Y):(r(z,D),Y=xu(O,z.mode,Y),Y.return=z,z=Y),v(z)):r(z,D)}return function(z,D,O,Y){try{ri=0;var ce=Ie(z,D,O,Y);return cl=null,ce}catch(ae){if(ae===sl||ae===Ca)throw ae;var Re=Ln(29,ae,null,z.mode);return Re.lanes=Y,Re.return=z,Re}finally{}}}var Rr=wd(!0),jd=wd(!1),Kt=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $t(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function er(e,n,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var s=a.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),a.pending=n,n=xa(e),fd(e,null,r),n}return va(e,a,n,r),xa(e)}function ii(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,xf(e,r)}}function Ou(e,n){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var s=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?s=d=v:d=d.next=v,r=r.next}while(r!==null);d===null?s=d=n:d=d.next=n}else s=d=n;r={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:d,shared:a.shared,callbacks:a.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Nu=!1;function ai(){if(Nu){var e=ul;if(e!==null)throw e}}function oi(e,n,r,a){Nu=!1;var s=e.updateQueue;Kt=!1;var d=s.firstBaseUpdate,v=s.lastBaseUpdate,k=s.shared.pending;if(k!==null){s.shared.pending=null;var A=k,N=A.next;A.next=null,v===null?d=N:v.next=N,v=A;var V=e.alternate;V!==null&&(V=V.updateQueue,k=V.lastBaseUpdate,k!==v&&(k===null?V.firstBaseUpdate=N:k.next=N,V.lastBaseUpdate=A))}if(d!==null){var J=s.baseState;v=0,V=N=A=null,k=d;do{var U=k.lane&-536870913,q=U!==k.lane;if(q?(we&U)===U:(a&U)===U){U!==0&&U===ol&&(Nu=!0),V!==null&&(V=V.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var le=e,he=k;U=n;var Ie=r;switch(he.tag){case 1:if(le=he.payload,typeof le=="function"){J=le.call(Ie,J,U);break e}J=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=he.payload,U=typeof le=="function"?le.call(Ie,J,U):le,U==null)break e;J=y({},J,U);break e;case 2:Kt=!0}}U=k.callback,U!==null&&(e.flags|=64,q&&(e.flags|=8192),q=s.callbacks,q===null?s.callbacks=[U]:q.push(U))}else q={lane:U,tag:k.tag,payload:k.payload,callback:k.callback,next:null},V===null?(N=V=q,A=J):V=V.next=q,v|=U;if(k=k.next,k===null){if(k=s.shared.pending,k===null)break;q=k,k=q.next,q.next=null,s.lastBaseUpdate=q,s.shared.pending=null}}while(!0);V===null&&(A=J),s.baseState=A,s.firstBaseUpdate=N,s.lastBaseUpdate=V,d===null&&(s.shared.lanes=0),ir|=v,e.lanes=v,e.memoizedState=J}}function Dd(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function Md(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Dd(r[e],n)}var fl=j(null),Da=j(0);function Rd(e,n){e=Ut,T(Da,e),T(fl,n),Ut=e|n.baseLanes}function Lu(){T(Da,Ut),T(fl,fl.current)}function Bu(){Ut=Da.current,G(fl),G(Da)}var Bn=j(null),$n=null;function nr(e){var n=e.alternate;T($e,$e.current&1),T(Bn,e),$n===null&&(n===null||fl.current!==null||n.memoizedState!==null)&&($n=e)}function Uu(e){T($e,$e.current),T(Bn,e),$n===null&&($n=e)}function zd(e){e.tag===22?(T($e,$e.current),T(Bn,e),$n===null&&($n=e)):tr()}function tr(){T($e,$e.current),T(Bn,Bn.current)}function Un(e){G(Bn),$n===e&&($n=null),G($e)}var $e=j(0);function Ma(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Gs(r)||Ps(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Mt=0,ye=null,Ue=null,tn=null,Ra=!1,dl=!1,zr=!1,za=0,ui=0,hl=null,r1=0;function We(){throw Error(o(321))}function Hu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Nn(e[r],n[r]))return!1;return!0}function Iu(e,n,r,a,s,d){return Mt=d,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?ph:ns,zr=!1,d=r(a,s),zr=!1,dl&&(d=Od(n,r,a,s)),_d(e),d}function _d(e){H.H=fi;var n=Ue!==null&&Ue.next!==null;if(Mt=0,tn=Ue=ye=null,Ra=!1,ui=0,hl=null,n)throw Error(o(300));e===null||rn||(e=e.dependencies,e!==null&&ka(e)&&(rn=!0))}function Od(e,n,r,a){ye=e;var s=0;do{if(dl&&(hl=null),ui=0,dl=!1,25<=s)throw Error(o(301));if(s+=1,tn=Ue=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=gh,d=n(r,a)}while(dl);return d}function l1(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?si(n):n,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ye.flags|=1024),n}function Fu(){var e=za!==0;return za=0,e}function qu(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Vu(e){if(Ra){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ra=!1}Mt=0,tn=Ue=ye=null,dl=!1,ui=za=0,hl=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ye.memoizedState=tn=e:tn=tn.next=e,tn}function en(){if(Ue===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=tn===null?ye.memoizedState:tn.next;if(n!==null)tn=n,Ue=e;else{if(e===null)throw ye.alternate===null?Error(o(467)):Error(o(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tn===null?ye.memoizedState=tn=e:tn=tn.next=e}return tn}function _a(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function si(e){var n=ui;return ui+=1,hl===null&&(hl=[]),e=Ed(hl,e,n),n=ye,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?ph:ns),e}function Oa(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return si(e);if(e.$$typeof===L)return hn(e)}throw Error(o(438,String(e)))}function Gu(e){var n=null,r=ye.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var a=ye.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(s){return s.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=_a(),ye.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),a=0;a<e;a++)r[a]=I;return n.index++,r}function Rt(e,n){return typeof n=="function"?n(e):n}function Na(e){var n=en();return Pu(n,Ue,e)}function Pu(e,n,r){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=r;var s=e.baseQueue,d=a.pending;if(d!==null){if(s!==null){var v=s.next;s.next=d.next,d.next=v}n.baseQueue=s=d,a.pending=null}if(d=e.baseState,s===null)e.memoizedState=d;else{n=s.next;var k=v=null,A=null,N=n,V=!1;do{var J=N.lane&-536870913;if(J!==N.lane?(we&J)===J:(Mt&J)===J){var U=N.revertLane;if(U===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),J===ol&&(V=!0);else if((Mt&U)===U){N=N.next,U===ol&&(V=!0);continue}else J={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},A===null?(k=A=J,v=d):A=A.next=J,ye.lanes|=U,ir|=U;J=N.action,zr&&r(d,J),d=N.hasEagerState?N.eagerState:r(d,J)}else U={lane:J,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},A===null?(k=A=U,v=d):A=A.next=U,ye.lanes|=J,ir|=J;N=N.next}while(N!==null&&N!==n);if(A===null?v=d:A.next=k,!Nn(d,e.memoizedState)&&(rn=!0,V&&(r=ul,r!==null)))throw r;e.memoizedState=d,e.baseState=v,e.baseQueue=A,a.lastRenderedState=d}return s===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Yu(e){var n=en(),r=n.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var a=r.dispatch,s=r.pending,d=n.memoizedState;if(s!==null){r.pending=null;var v=s=s.next;do d=e(d,v.action),v=v.next;while(v!==s);Nn(d,n.memoizedState)||(rn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,a]}function Nd(e,n,r){var a=ye,s=en(),d=De;if(d){if(r===void 0)throw Error(o(407));r=r()}else r=n();var v=!Nn((Ue||s).memoizedState,r);if(v&&(s.memoizedState=r,rn=!0),s=s.queue,Qu(Ud.bind(null,a,s,e),[e]),s.getSnapshot!==n||v||tn!==null&&tn.memoizedState.tag&1){if(a.flags|=2048,ml(9,{destroy:void 0},Bd.bind(null,a,s,r,n),null),qe===null)throw Error(o(349));d||(Mt&127)!==0||Ld(a,n,r)}return r}function Ld(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ye.updateQueue,n===null?(n=_a(),ye.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Bd(e,n,r,a){n.value=r,n.getSnapshot=a,Hd(n)&&Id(e)}function Ud(e,n,r){return r(function(){Hd(n)&&Id(e)})}function Hd(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Nn(e,r)}catch{return!0}}function Id(e){var n=Tr(e,2);n!==null&&Rn(n,e,2)}function Ju(e){var n=kn();if(typeof e=="function"){var r=e;if(e=r(),zr){En(!0);try{r()}finally{En(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:e},n}function Fd(e,n,r,a){return e.baseState=r,Pu(e,Ue,typeof a=="function"?a:Rt)}function i1(e,n,r,a,s){if(Ua(e))throw Error(o(485));if(e=n.action,e!==null){var d={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?r(!0):d.isTransition=!1,a(d),r=n.pending,r===null?(d.next=n.pending=d,qd(n,d)):(d.next=r.next,n.pending=r.next=d)}}function qd(e,n){var r=n.action,a=n.payload,s=e.state;if(n.isTransition){var d=H.T,v={};H.T=v;try{var k=r(s,a),A=H.S;A!==null&&A(v,k),Vd(e,n,k)}catch(N){Xu(e,n,N)}finally{d!==null&&v.types!==null&&(d.types=v.types),H.T=d}}else try{d=r(s,a),Vd(e,n,d)}catch(N){Xu(e,n,N)}}function Vd(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(a){Gd(e,n,a)},function(a){return Xu(e,n,a)}):Gd(e,n,r)}function Gd(e,n,r){n.status="fulfilled",n.value=r,Pd(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,qd(e,r)))}function Xu(e,n,r){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=r,Pd(n),n=n.next;while(n!==a)}e.action=null}function Pd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Yd(e,n){return n}function Jd(e,n){if(De){var r=qe.formState;if(r!==null){e:{var a=ye;if(De){if(Ye){n:{for(var s=Ye,d=Kn;s.nodeType!==8;){if(!d){s=null;break n}if(s=et(s.nextSibling),s===null){s=null;break n}}d=s.data,s=d==="F!"||d==="F"?s:null}if(s){Ye=et(s.nextSibling),a=s.data==="F!";break e}}Zt(a)}a=!1}a&&(n=r[0])}}return r=kn(),r.memoizedState=r.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:n},r.queue=a,r=dh.bind(null,ye,a),a.dispatch=r,a=Ju(!1),d=es.bind(null,ye,!1,a.queue),a=kn(),s={state:n,dispatch:null,action:e,pending:null},a.queue=s,r=i1.bind(null,ye,s,d,r),s.dispatch=r,a.memoizedState=e,[n,r,!1]}function Xd(e){var n=en();return Qd(n,Ue,e)}function Qd(e,n,r){if(n=Pu(e,n,Yd)[0],e=Na(Rt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=si(n)}catch(v){throw v===sl?Ca:v}else a=n;n=en();var s=n.queue,d=s.dispatch;return r!==n.memoizedState&&(ye.flags|=2048,ml(9,{destroy:void 0},a1.bind(null,s,r),null)),[a,d,e]}function a1(e,n){e.action=n}function Zd(e){var n=en(),r=Ue;if(r!==null)return Qd(n,r,e);en(),n=n.memoizedState,r=en();var a=r.queue.dispatch;return r.memoizedState=e,[n,a,!1]}function ml(e,n,r,a){return e={tag:e,create:r,deps:a,inst:n,next:null},n=ye.updateQueue,n===null&&(n=_a(),ye.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,n.lastEffect=e),e}function Wd(){return en().memoizedState}function La(e,n,r,a){var s=kn();ye.flags|=e,s.memoizedState=ml(1|n,{destroy:void 0},r,a===void 0?null:a)}function Ba(e,n,r,a){var s=en();a=a===void 0?null:a;var d=s.memoizedState.inst;Ue!==null&&a!==null&&Hu(a,Ue.memoizedState.deps)?s.memoizedState=ml(n,d,r,a):(ye.flags|=e,s.memoizedState=ml(1|n,d,r,a))}function Kd(e,n){La(8390656,8,e,n)}function Qu(e,n){Ba(2048,8,e,n)}function o1(e){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=_a(),ye.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function $d(e){var n=en().memoizedState;return o1({ref:n,nextImpl:e}),function(){if((_e&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function eh(e,n){return Ba(4,2,e,n)}function nh(e,n){return Ba(4,4,e,n)}function th(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rh(e,n,r){r=r!=null?r.concat([e]):null,Ba(4,4,th.bind(null,n,e),r)}function Zu(){}function lh(e,n){var r=en();n=n===void 0?null:n;var a=r.memoizedState;return n!==null&&Hu(n,a[1])?a[0]:(r.memoizedState=[e,n],e)}function ih(e,n){var r=en();n=n===void 0?null:n;var a=r.memoizedState;if(n!==null&&Hu(n,a[1]))return a[0];if(a=e(),zr){En(!0);try{e()}finally{En(!1)}}return r.memoizedState=[a,n],a}function Wu(e,n,r){return r===void 0||(Mt&1073741824)!==0&&(we&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=am(),ye.lanes|=e,ir|=e,r)}function ah(e,n,r,a){return Nn(r,n)?r:fl.current!==null?(e=Wu(e,r,a),Nn(e,n)||(rn=!0),e):(Mt&42)===0||(Mt&1073741824)!==0&&(we&261930)===0?(rn=!0,e.memoizedState=r):(e=am(),ye.lanes|=e,ir|=e,n)}function oh(e,n,r,a,s){var d=X.p;X.p=d!==0&&8>d?d:8;var v=H.T,k={};H.T=k,es(e,!1,n,r);try{var A=s(),N=H.S;if(N!==null&&N(k,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var V=t1(A,a);ci(e,n,V,Fn(e))}else ci(e,n,a,Fn(e))}catch(J){ci(e,n,{then:function(){},status:"rejected",reason:J},Fn())}finally{X.p=d,v!==null&&k.types!==null&&(v.types=k.types),H.T=v}}function u1(){}function Ku(e,n,r,a){if(e.tag!==5)throw Error(o(476));var s=uh(e).queue;oh(e,s,n,oe,r===null?u1:function(){return sh(e),r(a)})}function uh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:oe},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function sh(e){var n=uh(e);n.next===null&&(n=e.alternate.memoizedState),ci(e,n.next.queue,{},Fn())}function $u(){return hn(wi)}function ch(){return en().memoizedState}function fh(){return en().memoizedState}function s1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Fn();e=$t(r);var a=er(n,e,r);a!==null&&(Rn(a,n,r),ii(a,n,r)),n={cache:ju()},e.payload=n;return}n=n.return}}function c1(e,n,r){var a=Fn();r={lane:a,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ua(e)?hh(n,r):(r=yu(e,n,r,a),r!==null&&(Rn(r,e,a),mh(r,n,a)))}function dh(e,n,r){var a=Fn();ci(e,n,r,a)}function ci(e,n,r,a){var s={lane:a,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ua(e))hh(n,s);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,k=d(v,r);if(s.hasEagerState=!0,s.eagerState=k,Nn(k,v))return va(e,n,s,0),qe===null&&ya(),!1}catch{}finally{}if(r=yu(e,n,s,a),r!==null)return Rn(r,e,a),mh(r,n,a),!0}return!1}function es(e,n,r,a){if(a={lane:2,revertLane:zs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ua(e)){if(n)throw Error(o(479))}else n=yu(e,r,a,2),n!==null&&Rn(n,e,2)}function Ua(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function hh(e,n){dl=Ra=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function mh(e,n,r){if((r&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,xf(e,r)}}var fi={readContext:hn,use:Oa,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};fi.useEffectEvent=We;var ph={readContext:hn,use:Oa,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:Kd,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,La(4194308,4,th.bind(null,n,e),r)},useLayoutEffect:function(e,n){return La(4194308,4,e,n)},useInsertionEffect:function(e,n){La(4,2,e,n)},useMemo:function(e,n){var r=kn();n=n===void 0?null:n;var a=e();if(zr){En(!0);try{e()}finally{En(!1)}}return r.memoizedState=[a,n],a},useReducer:function(e,n,r){var a=kn();if(r!==void 0){var s=r(n);if(zr){En(!0);try{r(n)}finally{En(!1)}}}else s=n;return a.memoizedState=a.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},a.queue=e,e=e.dispatch=c1.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ju(e);var n=e.queue,r=dh.bind(null,ye,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Zu,useDeferredValue:function(e,n){var r=kn();return Wu(r,e,n)},useTransition:function(){var e=Ju(!1);return e=oh.bind(null,ye,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var a=ye,s=kn();if(De){if(r===void 0)throw Error(o(407));r=r()}else{if(r=n(),qe===null)throw Error(o(349));(we&127)!==0||Ld(a,n,r)}s.memoizedState=r;var d={value:r,getSnapshot:n};return s.queue=d,Kd(Ud.bind(null,a,d,e),[e]),a.flags|=2048,ml(9,{destroy:void 0},Bd.bind(null,a,d,r,n),null),r},useId:function(){var e=kn(),n=qe.identifierPrefix;if(De){var r=dt,a=ft;r=(a&~(1<<32-Fe(a)-1)).toString(32)+r,n="_"+n+"R_"+r,r=za++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=r1++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$u,useFormState:Jd,useActionState:Jd,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=es.bind(null,ye,!0,r),r.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return kn().memoizedState=s1.bind(null,ye)},useEffectEvent:function(e){var n=kn(),r={impl:e};return n.memoizedState=r,function(){if((_e&2)!==0)throw Error(o(440));return r.impl.apply(void 0,arguments)}}},ns={readContext:hn,use:Oa,useCallback:lh,useContext:hn,useEffect:Qu,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:ih,useReducer:Na,useRef:Wd,useState:function(){return Na(Rt)},useDebugValue:Zu,useDeferredValue:function(e,n){var r=en();return ah(r,Ue.memoizedState,e,n)},useTransition:function(){var e=Na(Rt)[0],n=en().memoizedState;return[typeof e=="boolean"?e:si(e),n]},useSyncExternalStore:Nd,useId:ch,useHostTransitionStatus:$u,useFormState:Xd,useActionState:Xd,useOptimistic:function(e,n){var r=en();return Fd(r,Ue,e,n)},useMemoCache:Gu,useCacheRefresh:fh};ns.useEffectEvent=$d;var gh={readContext:hn,use:Oa,useCallback:lh,useContext:hn,useEffect:Qu,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:ih,useReducer:Yu,useRef:Wd,useState:function(){return Yu(Rt)},useDebugValue:Zu,useDeferredValue:function(e,n){var r=en();return Ue===null?Wu(r,e,n):ah(r,Ue.memoizedState,e,n)},useTransition:function(){var e=Yu(Rt)[0],n=en().memoizedState;return[typeof e=="boolean"?e:si(e),n]},useSyncExternalStore:Nd,useId:ch,useHostTransitionStatus:$u,useFormState:Zd,useActionState:Zd,useOptimistic:function(e,n){var r=en();return Ue!==null?Fd(r,Ue,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:fh};gh.useEffectEvent=$d;function ts(e,n,r,a){n=e.memoizedState,r=r(a,n),r=r==null?n:y({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var rs={enqueueSetState:function(e,n,r){e=e._reactInternals;var a=Fn(),s=$t(a);s.payload=n,r!=null&&(s.callback=r),n=er(e,s,a),n!==null&&(Rn(n,e,a),ii(n,e,a))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var a=Fn(),s=$t(a);s.tag=1,s.payload=n,r!=null&&(s.callback=r),n=er(e,s,a),n!==null&&(Rn(n,e,a),ii(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Fn(),a=$t(r);a.tag=2,n!=null&&(a.callback=n),n=er(e,a,r),n!==null&&(Rn(n,e,r),ii(n,e,r))}};function yh(e,n,r,a,s,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,v):n.prototype&&n.prototype.isPureReactComponent?!Wl(r,a)||!Wl(s,d):!0}function vh(e,n,r,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,a),n.state!==e&&rs.enqueueReplaceState(n,n.state,null)}function _r(e,n){var r=n;if("ref"in n){r={};for(var a in n)a!=="ref"&&(r[a]=n[a])}if(e=e.defaultProps){r===n&&(r=y({},r));for(var s in e)r[s]===void 0&&(r[s]=e[s])}return r}function xh(e){ga(e)}function bh(e){console.error(e)}function Sh(e){ga(e)}function Ha(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function kh(e,n,r){try{var a=e.onCaughtError;a(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function ls(e,n,r){return r=$t(r),r.tag=3,r.payload={element:null},r.callback=function(){Ha(e,n)},r}function Th(e){return e=$t(e),e.tag=3,e}function Eh(e,n,r,a){var s=r.type.getDerivedStateFromError;if(typeof s=="function"){var d=a.value;e.payload=function(){return s(d)},e.callback=function(){kh(n,r,a)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){kh(n,r,a),typeof s!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var k=a.stack;this.componentDidCatch(a.value,{componentStack:k!==null?k:""})})}function f1(e,n,r,a,s){if(r.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=r.alternate,n!==null&&al(n,r,s,!0),r=Bn.current,r!==null){switch(r.tag){case 31:case 13:return $n===null?Wa():r.alternate===null&&Ke===0&&(Ke=3),r.flags&=-257,r.flags|=65536,r.lanes=s,a===Aa?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([a]):n.add(a),Ds(e,a,s)),!1;case 22:return r.flags|=65536,a===Aa?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([a]):r.add(a)),Ds(e,a,s)),!1}throw Error(o(435,r.tag))}return Ds(e,a,s),Wa(),!1}if(De)return n=Bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=s,a!==Tu&&(e=Error(o(422),{cause:a}),ei(Qn(e,r)))):(a!==Tu&&(n=Error(o(423),{cause:a}),ei(Qn(n,r))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,a=Qn(a,r),s=ls(e.stateNode,a,s),Ou(e,s),Ke!==4&&(Ke=2)),!1;var d=Error(o(520),{cause:a});if(d=Qn(d,r),xi===null?xi=[d]:xi.push(d),Ke!==4&&(Ke=2),n===null)return!0;a=Qn(a,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=s&-s,r.lanes|=e,e=ls(r.stateNode,a,e),Ou(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return r.flags|=65536,s&=-s,r.lanes|=s,s=Th(s),Eh(s,e,r,a),Ou(r,s),!1}r=r.return}while(r!==null);return!1}var is=Error(o(461)),rn=!1;function mn(e,n,r,a){n.child=e===null?jd(n,null,r,a):Rr(n,e.child,r,a)}function Ch(e,n,r,a,s){r=r.render;var d=n.ref;if("ref"in a){var v={};for(var k in a)k!=="ref"&&(v[k]=a[k])}else v=a;return wr(n),a=Iu(e,n,r,v,d,s),k=Fu(),e!==null&&!rn?(qu(e,n,s),zt(e,n,s)):(De&&k&&Su(n),n.flags|=1,mn(e,n,a,s),n.child)}function Ah(e,n,r,a,s){if(e===null){var d=r.type;return typeof d=="function"&&!vu(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,wh(e,n,d,a,s)):(e=ba(r.type,null,a,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!hs(e,s)){var v=d.memoizedProps;if(r=r.compare,r=r!==null?r:Wl,r(v,a)&&e.ref===n.ref)return zt(e,n,s)}return n.flags|=1,e=At(d,a),e.ref=n.ref,e.return=n,n.child=e}function wh(e,n,r,a,s){if(e!==null){var d=e.memoizedProps;if(Wl(d,a)&&e.ref===n.ref)if(rn=!1,n.pendingProps=a=d,hs(e,s))(e.flags&131072)!==0&&(rn=!0);else return n.lanes=e.lanes,zt(e,n,s)}return as(e,n,r,a,s)}function jh(e,n,r,a){var s=a.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(a=n.child=e.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~d}else a=0,n.child=null;return Dh(e,n,d,r,a)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(n,d!==null?d.cachePool:null),d!==null?Rd(n,d):Lu(),zd(n);else return a=n.lanes=536870912,Dh(e,n,d!==null?d.baseLanes|r:r,r,a)}else d!==null?(Ea(n,d.cachePool),Rd(n,d),tr(),n.memoizedState=null):(e!==null&&Ea(n,null),Lu(),tr());return mn(e,n,s,r),n.child}function di(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Dh(e,n,r,a,s){var d=Mu();return d=d===null?null:{parent:nn._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&Ea(n,null),Lu(),zd(n),e!==null&&al(e,n,a,!0),n.childLanes=s,null}function Ia(e,n){return n=qa({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Mh(e,n,r){return Rr(n,e.child,null,r),e=Ia(n,n.pendingProps),e.flags|=2,Un(n),n.memoizedState=null,e}function d1(e,n,r){var a=n.pendingProps,s=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(De){if(a.mode==="hidden")return e=Ia(n,a),n.lanes=536870912,di(null,e);if(Uu(n),(e=Ye)?(e=qm(e,Kn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xt!==null?{id:ft,overflow:dt}:null,retryLane:536870912,hydrationErrors:null},r=hd(e),r.return=n,n.child=r,dn=n,Ye=null)):e=null,e===null)throw Zt(n);return n.lanes=536870912,null}return Ia(n,a)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(Uu(n),s)if(n.flags&256)n.flags&=-257,n=Mh(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(rn||al(e,n,r,!1),s=(r&e.childLanes)!==0,rn||s){if(a=qe,a!==null&&(v=bf(a,r),v!==0&&v!==d.retryLane))throw d.retryLane=v,Tr(e,v),Rn(a,e,v),is;Wa(),n=Mh(e,n,r)}else e=d.treeContext,Ye=et(v.nextSibling),dn=n,De=!0,Qt=null,Kn=!1,e!==null&&gd(n,e),n=Ia(n,a),n.flags|=4096;return n}return e=At(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fa(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function as(e,n,r,a,s){return wr(n),r=Iu(e,n,r,a,void 0,s),a=Fu(),e!==null&&!rn?(qu(e,n,s),zt(e,n,s)):(De&&a&&Su(n),n.flags|=1,mn(e,n,r,s),n.child)}function Rh(e,n,r,a,s,d){return wr(n),n.updateQueue=null,r=Od(n,a,r,s),_d(e),a=Fu(),e!==null&&!rn?(qu(e,n,d),zt(e,n,d)):(De&&a&&Su(n),n.flags|=1,mn(e,n,r,d),n.child)}function zh(e,n,r,a,s){if(wr(n),n.stateNode===null){var d=tl,v=r.contextType;typeof v=="object"&&v!==null&&(d=hn(v)),d=new r(a,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=rs,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=a,d.state=n.memoizedState,d.refs={},zu(n),v=r.contextType,d.context=typeof v=="object"&&v!==null?hn(v):tl,d.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(ts(n,r,v,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&rs.enqueueReplaceState(d,d.state,null),oi(n,a,d,s),ai(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){d=n.stateNode;var k=n.memoizedProps,A=_r(r,k);d.props=A;var N=d.context,V=r.contextType;v=tl,typeof V=="object"&&V!==null&&(v=hn(V));var J=r.getDerivedStateFromProps;V=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",k=n.pendingProps!==k,V||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(k||N!==v)&&vh(n,d,a,v),Kt=!1;var U=n.memoizedState;d.state=U,oi(n,a,d,s),ai(),N=n.memoizedState,k||U!==N||Kt?(typeof J=="function"&&(ts(n,r,J,a),N=n.memoizedState),(A=Kt||yh(n,r,A,a,U,N,v))?(V||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=N),d.props=a,d.state=N,d.context=v,a=A):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{d=n.stateNode,_u(e,n),v=n.memoizedProps,V=_r(r,v),d.props=V,J=n.pendingProps,U=d.context,N=r.contextType,A=tl,typeof N=="object"&&N!==null&&(A=hn(N)),k=r.getDerivedStateFromProps,(N=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==J||U!==A)&&vh(n,d,a,A),Kt=!1,U=n.memoizedState,d.state=U,oi(n,a,d,s),ai();var q=n.memoizedState;v!==J||U!==q||Kt||e!==null&&e.dependencies!==null&&ka(e.dependencies)?(typeof k=="function"&&(ts(n,r,k,a),q=n.memoizedState),(V=Kt||yh(n,r,V,a,U,q,A)||e!==null&&e.dependencies!==null&&ka(e.dependencies))?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,q,A),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,q,A)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=q),d.props=a,d.state=q,d.context=A,a=V):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),a=!1)}return d=a,Fa(e,n),a=(n.flags&128)!==0,d||a?(d=n.stateNode,r=a&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&a?(n.child=Rr(n,e.child,null,s),n.child=Rr(n,null,r,s)):mn(e,n,r,s),n.memoizedState=d.state,e=n.child):e=zt(e,n,s),e}function _h(e,n,r,a){return Cr(),n.flags|=256,mn(e,n,r,a),n.child}var os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function us(e){return{baseLanes:e,cachePool:kd()}}function ss(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=In),e}function Oh(e,n,r){var a=n.pendingProps,s=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),v&&(s=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(s?nr(n):tr(),(e=Ye)?(e=qm(e,Kn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xt!==null?{id:ft,overflow:dt}:null,retryLane:536870912,hydrationErrors:null},r=hd(e),r.return=n,n.child=r,dn=n,Ye=null)):e=null,e===null)throw Zt(n);return Ps(e)?n.lanes=32:n.lanes=536870912,null}var k=a.children;return a=a.fallback,s?(tr(),s=n.mode,k=qa({mode:"hidden",children:k},s),a=Er(a,s,r,null),k.return=n,a.return=n,k.sibling=a,n.child=k,a=n.child,a.memoizedState=us(r),a.childLanes=ss(e,v,r),n.memoizedState=os,di(null,a)):(nr(n),cs(n,k))}var A=e.memoizedState;if(A!==null&&(k=A.dehydrated,k!==null)){if(d)n.flags&256?(nr(n),n.flags&=-257,n=fs(e,n,r)):n.memoizedState!==null?(tr(),n.child=e.child,n.flags|=128,n=null):(tr(),k=a.fallback,s=n.mode,a=qa({mode:"visible",children:a.children},s),k=Er(k,s,r,null),k.flags|=2,a.return=n,k.return=n,a.sibling=k,n.child=a,Rr(n,e.child,null,r),a=n.child,a.memoizedState=us(r),a.childLanes=ss(e,v,r),n.memoizedState=os,n=di(null,a));else if(nr(n),Ps(k)){if(v=k.nextSibling&&k.nextSibling.dataset,v)var N=v.dgst;v=N,a=Error(o(419)),a.stack="",a.digest=v,ei({value:a,source:null,stack:null}),n=fs(e,n,r)}else if(rn||al(e,n,r,!1),v=(r&e.childLanes)!==0,rn||v){if(v=qe,v!==null&&(a=bf(v,r),a!==0&&a!==A.retryLane))throw A.retryLane=a,Tr(e,a),Rn(v,e,a),is;Gs(k)||Wa(),n=fs(e,n,r)}else Gs(k)?(n.flags|=192,n.child=e.child,n=null):(e=A.treeContext,Ye=et(k.nextSibling),dn=n,De=!0,Qt=null,Kn=!1,e!==null&&gd(n,e),n=cs(n,a.children),n.flags|=4096);return n}return s?(tr(),k=a.fallback,s=n.mode,A=e.child,N=A.sibling,a=At(A,{mode:"hidden",children:a.children}),a.subtreeFlags=A.subtreeFlags&65011712,N!==null?k=At(N,k):(k=Er(k,s,r,null),k.flags|=2),k.return=n,a.return=n,a.sibling=k,n.child=a,di(null,a),a=n.child,k=e.child.memoizedState,k===null?k=us(r):(s=k.cachePool,s!==null?(A=nn._currentValue,s=s.parent!==A?{parent:A,pool:A}:s):s=kd(),k={baseLanes:k.baseLanes|r,cachePool:s}),a.memoizedState=k,a.childLanes=ss(e,v,r),n.memoizedState=os,di(e.child,a)):(nr(n),r=e.child,e=r.sibling,r=At(r,{mode:"visible",children:a.children}),r.return=n,r.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=r,n.memoizedState=null,r)}function cs(e,n){return n=qa({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function qa(e,n){return e=Ln(22,e,null,n),e.lanes=0,e}function fs(e,n,r){return Rr(n,e.child,null,r),e=cs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nh(e,n,r){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Au(e.return,n,r)}function ds(e,n,r,a,s,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:s,treeForkCount:d}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=a,v.tail=r,v.tailMode=s,v.treeForkCount=d)}function Lh(e,n,r){var a=n.pendingProps,s=a.revealOrder,d=a.tail;a=a.children;var v=$e.current,k=(v&2)!==0;if(k?(v=v&1|2,n.flags|=128):v&=1,T($e,v),mn(e,n,a,r),a=De?$l:0,!k&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nh(e,r,n);else if(e.tag===19)Nh(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(r=n.child,s=null;r!==null;)e=r.alternate,e!==null&&Ma(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=n.child,n.child=null):(s=r.sibling,r.sibling=null),ds(n,!1,s,r,d,a);break;case"backwards":case"unstable_legacy-backwards":for(r=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&Ma(e)===null){n.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}ds(n,!0,r,null,d,a);break;case"together":ds(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function zt(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ir|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(al(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,r=At(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=At(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function hs(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ka(e)))}function h1(e,n,r){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),Wt(n,nn,e.memoizedState.cache),Cr();break;case 27:case 5:Pn(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:Wt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(nr(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Oh(e,n,r):(nr(n),e=zt(e,n,r),e!==null?e.sibling:null);nr(n);break;case 19:var s=(e.flags&128)!==0;if(a=(r&n.childLanes)!==0,a||(al(e,n,r,!1),a=(r&n.childLanes)!==0),s){if(a)return Lh(e,n,r);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),T($e,$e.current),a)break;return null;case 22:return n.lanes=0,jh(e,n,r,n.pendingProps);case 24:Wt(n,nn,e.memoizedState.cache)}return zt(e,n,r)}function Bh(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)rn=!0;else{if(!hs(e,r)&&(n.flags&128)===0)return rn=!1,h1(e,n,r);rn=(e.flags&131072)!==0}else rn=!1,De&&(n.flags&1048576)!==0&&pd(n,$l,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Dr(n.elementType),n.type=e,typeof e=="function")vu(e)?(a=_r(e,a),n.tag=1,n=zh(null,n,e,a,r)):(n.tag=0,n=as(null,n,e,a,r));else{if(e!=null){var s=e.$$typeof;if(s===Z){n.tag=11,n=Ch(null,n,e,a,r);break e}else if(s===W){n.tag=14,n=Ah(null,n,e,a,r);break e}}throw n=ie(e)||e,Error(o(306,n,""))}}return n;case 0:return as(e,n,n.type,n.pendingProps,r);case 1:return a=n.type,s=_r(a,n.pendingProps),zh(e,n,a,s,r);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(o(387));a=n.pendingProps;var d=n.memoizedState;s=d.element,_u(e,n),oi(n,a,null,r);var v=n.memoizedState;if(a=v.cache,Wt(n,nn,a),a!==d.cache&&wu(n,[nn],r,!0),ai(),a=v.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=_h(e,n,a,r);break e}else if(a!==s){s=Qn(Error(o(424)),n),ei(s),n=_h(e,n,a,r);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=et(e.firstChild),dn=n,De=!0,Qt=null,Kn=!0,r=jd(n,null,a,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Cr(),a===s){n=zt(e,n,r);break e}mn(e,n,a,r)}n=n.child}return n;case 26:return Fa(e,n),e===null?(r=Xm(n.type,null,n.pendingProps,null))?n.memoizedState=r:De||(r=n.type,e=n.pendingProps,a=lo(se.current).createElement(r),a[fn]=n,a[Cn]=e,pn(a,r,e),sn(a),n.stateNode=a):n.memoizedState=Xm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pn(n),e===null&&De&&(a=n.stateNode=Pm(n.type,n.pendingProps,se.current),dn=n,Kn=!0,s=Ye,cr(n.type)?(Ys=s,Ye=et(a.firstChild)):Ye=s),mn(e,n,n.pendingProps.children,r),Fa(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((s=a=Ye)&&(a=V1(a,n.type,n.pendingProps,Kn),a!==null?(n.stateNode=a,dn=n,Ye=et(a.firstChild),Kn=!1,s=!0):s=!1),s||Zt(n)),Pn(n),s=n.type,d=n.pendingProps,v=e!==null?e.memoizedProps:null,a=d.children,Fs(s,d)?a=null:v!==null&&Fs(s,v)&&(n.flags|=32),n.memoizedState!==null&&(s=Iu(e,n,l1,null,null,r),wi._currentValue=s),Fa(e,n),mn(e,n,a,r),n.child;case 6:return e===null&&De&&((e=r=Ye)&&(r=G1(r,n.pendingProps,Kn),r!==null?(n.stateNode=r,dn=n,Ye=null,e=!0):e=!1),e||Zt(n)),null;case 13:return Oh(e,n,r);case 4:return Xe(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Rr(n,null,a,r):mn(e,n,a,r),n.child;case 11:return Ch(e,n,n.type,n.pendingProps,r);case 7:return mn(e,n,n.pendingProps,r),n.child;case 8:return mn(e,n,n.pendingProps.children,r),n.child;case 12:return mn(e,n,n.pendingProps.children,r),n.child;case 10:return a=n.pendingProps,Wt(n,n.type,a.value),mn(e,n,a.children,r),n.child;case 9:return s=n.type._context,a=n.pendingProps.children,wr(n),s=hn(s),a=a(s),n.flags|=1,mn(e,n,a,r),n.child;case 14:return Ah(e,n,n.type,n.pendingProps,r);case 15:return wh(e,n,n.type,n.pendingProps,r);case 19:return Lh(e,n,r);case 31:return d1(e,n,r);case 22:return jh(e,n,r,n.pendingProps);case 24:return wr(n),a=hn(nn),e===null?(s=Mu(),s===null&&(s=qe,d=ju(),s.pooledCache=d,d.refCount++,d!==null&&(s.pooledCacheLanes|=r),s=d),n.memoizedState={parent:a,cache:s},zu(n),Wt(n,nn,s)):((e.lanes&r)!==0&&(_u(e,n),oi(n,null,null,r),ai()),s=e.memoizedState,d=n.memoizedState,s.parent!==a?(s={parent:a,cache:a},n.memoizedState=s,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=s),Wt(n,nn,a)):(a=d.cache,Wt(n,nn,a),a!==s.cache&&wu(n,[nn],r,!0))),mn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function _t(e){e.flags|=4}function ms(e,n,r,a,s){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(cm())e.flags|=8192;else throw Mr=Aa,Ru}else e.flags&=-16777217}function Uh(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$m(n))if(cm())e.flags|=8192;else throw Mr=Aa,Ru}function Va(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?yf():536870912,e.lanes|=n,vl|=n)}function hi(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(n)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=r,n}function m1(e,n,r){var a=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return r=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Dt(nn),Be(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(n)?_t(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Je(n),null;case 26:var s=n.type,d=n.memoizedState;return e===null?(_t(n),d!==null?(Je(n),Uh(n,d)):(Je(n),ms(n,s,null,a,r))):d?d!==e.memoizedState?(_t(n),Je(n),Uh(n,d)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&_t(n),Je(n),ms(n,s,e,a,r)),null;case 27:if(bt(n),r=se.current,s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&_t(n);else{if(!a){if(n.stateNode===null)throw Error(o(166));return Je(n),null}e=re.current,il(n)?yd(n):(e=Pm(s,a,r),n.stateNode=e,_t(n))}return Je(n),null;case 5:if(bt(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&_t(n);else{if(!a){if(n.stateNode===null)throw Error(o(166));return Je(n),null}if(d=re.current,il(n))yd(n);else{var v=lo(se.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof a.is=="string"?v.createElement("select",{is:a.is}):v.createElement("select"),a.multiple?d.multiple=!0:a.size&&(d.size=a.size);break;default:d=typeof a.is=="string"?v.createElement(s,{is:a.is}):v.createElement(s)}}d[fn]=n,d[Cn]=a;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=d;e:switch(pn(d,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&_t(n)}}return Je(n),ms(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&_t(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(e=se.current,il(n)){if(e=n.stateNode,r=n.memoizedProps,a=null,s=dn,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}e[fn]=n,e=!!(e.nodeValue===r||a!==null&&a.suppressHydrationWarning===!0||Om(e.nodeValue,r)),e||Zt(n,!0)}else e=lo(e).createTextNode(a),e[fn]=n,n.stateNode=e}return Je(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(a=il(n),r!==null){if(e===null){if(!a)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[fn]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else r=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Un(n),n):(Un(n),null);if((n.flags&128)!==0)throw Error(o(558))}return Je(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=il(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[fn]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),s=!1}else s=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return n.flags&256?(Un(n),n):(Un(n),null)}return Un(n),(n.flags&128)!==0?(n.lanes=r,n):(r=a!==null,e=e!==null&&e.memoizedState!==null,r&&(a=n.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),d=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(d=a.memoizedState.cachePool.pool),d!==s&&(a.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Va(n,n.updateQueue),Je(n),null);case 4:return Be(),e===null&&Ls(n.stateNode.containerInfo),Je(n),null;case 10:return Dt(n.type),Je(n),null;case 19:if(G($e),a=n.memoizedState,a===null)return Je(n),null;if(s=(n.flags&128)!==0,d=a.rendering,d===null)if(s)hi(a,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Ma(e),d!==null){for(n.flags|=128,hi(a,!1),e=d.updateQueue,n.updateQueue=e,Va(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)dd(r,e),r=r.sibling;return T($e,$e.current&1|2),De&&wt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&bn()>Xa&&(n.flags|=128,s=!0,hi(a,!1),n.lanes=4194304)}else{if(!s)if(e=Ma(d),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Va(n,e),hi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!De)return Je(n),null}else 2*bn()-a.renderingStartTime>Xa&&r!==536870912&&(n.flags|=128,s=!0,hi(a,!1),n.lanes=4194304);a.isBackwards?(d.sibling=n.child,n.child=d):(e=a.last,e!==null?e.sibling=d:n.child=d,a.last=d)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=bn(),e.sibling=null,r=$e.current,T($e,s?r&1|2:r&1),De&&wt(n,a.treeForkCount),e):(Je(n),null);case 22:case 23:return Un(n),Bu(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(r&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),r=n.updateQueue,r!==null&&Va(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==r&&(n.flags|=2048),e!==null&&G(jr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Dt(nn),Je(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function p1(e,n){switch(ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Dt(nn),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return bt(n),null;case 31:if(n.memoizedState!==null){if(Un(n),n.alternate===null)throw Error(o(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Un(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G($e),null;case 4:return Be(),null;case 10:return Dt(n.type),null;case 22:case 23:return Un(n),Bu(),e!==null&&G(jr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Dt(nn),null;case 25:return null;default:return null}}function Hh(e,n){switch(ku(n),n.tag){case 3:Dt(nn),Be();break;case 26:case 27:case 5:bt(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&Un(n);break;case 13:Un(n);break;case 19:G($e);break;case 10:Dt(n.type);break;case 22:case 23:Un(n),Bu(),e!==null&&G(jr);break;case 24:Dt(nn)}}function mi(e,n){try{var r=n.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var s=a.next;r=s;do{if((r.tag&e)===e){a=void 0;var d=r.create,v=r.inst;a=d(),v.destroy=a}r=r.next}while(r!==s)}}catch(k){Le(n,n.return,k)}}function rr(e,n,r){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var d=s.next;a=d;do{if((a.tag&e)===e){var v=a.inst,k=v.destroy;if(k!==void 0){v.destroy=void 0,s=n;var A=r,N=k;try{N()}catch(V){Le(s,A,V)}}}a=a.next}while(a!==d)}}catch(V){Le(n,n.return,V)}}function Ih(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Md(n,r)}catch(a){Le(e,e.return,a)}}}function Fh(e,n,r){r.props=_r(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(a){Le(e,n,a)}}function pi(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof r=="function"?e.refCleanup=r(a):r.current=a}}catch(s){Le(e,n,s)}}function ht(e,n){var r=e.ref,a=e.refCleanup;if(r!==null)if(typeof a=="function")try{a()}catch(s){Le(e,n,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(s){Le(e,n,s)}else r.current=null}function qh(e){var n=e.type,r=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&a.focus();break e;case"img":r.src?a.src=r.src:r.srcSet&&(a.srcset=r.srcSet)}}catch(s){Le(e,e.return,s)}}function ps(e,n,r){try{var a=e.stateNode;B1(a,e.type,r,n),a[Cn]=n}catch(s){Le(e,e.return,s)}}function Vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&cr(e.type)||e.tag===4}function gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&cr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Et));else if(a!==4&&(a===27&&cr(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(ys(e,n,r),e=e.sibling;e!==null;)ys(e,n,r),e=e.sibling}function Ga(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(a!==4&&(a===27&&cr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ga(e,n,r),e=e.sibling;e!==null;)Ga(e,n,r),e=e.sibling}function Gh(e){var n=e.stateNode,r=e.memoizedProps;try{for(var a=e.type,s=n.attributes;s.length;)n.removeAttributeNode(s[0]);pn(n,a,r),n[fn]=e,n[Cn]=r}catch(d){Le(e,e.return,d)}}var Ot=!1,ln=!1,vs=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,cn=null;function g1(e,n){if(e=e.containerInfo,Hs=fo,e=rd(e),fu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var s=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var v=0,k=-1,A=-1,N=0,V=0,J=e,U=null;n:for(;;){for(var q;J!==r||s!==0&&J.nodeType!==3||(k=v+s),J!==d||a!==0&&J.nodeType!==3||(A=v+a),J.nodeType===3&&(v+=J.nodeValue.length),(q=J.firstChild)!==null;)U=J,J=q;for(;;){if(J===e)break n;if(U===r&&++N===s&&(k=v),U===d&&++V===a&&(A=v),(q=J.nextSibling)!==null)break;J=U,U=J.parentNode}J=q}r=k===-1||A===-1?null:{start:k,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(Is={focusedElem:e,selectionRange:r},fo=!1,cn=n;cn!==null;)if(n=cn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,cn=e;else for(;cn!==null;){switch(n=cn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)s=e[r],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,s=d.memoizedProps,d=d.memoizedState,a=r.stateNode;try{var le=_r(r.type,s);e=a.getSnapshotBeforeUpdate(le,d),a.__reactInternalSnapshotBeforeUpdate=e}catch(he){Le(r,r.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Vs(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,cn=e;break}cn=n.return}}function Yh(e,n,r){var a=r.flags;switch(r.tag){case 0:case 11:case 15:Lt(e,r),a&4&&mi(5,r);break;case 1:if(Lt(e,r),a&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(v){Le(r,r.return,v)}else{var s=_r(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(s,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Le(r,r.return,v)}}a&64&&Ih(r),a&512&&pi(r,r.return);break;case 3:if(Lt(e,r),a&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Md(e,n)}catch(v){Le(r,r.return,v)}}break;case 27:n===null&&a&4&&Gh(r);case 26:case 5:Lt(e,r),n===null&&a&4&&qh(r),a&512&&pi(r,r.return);break;case 12:Lt(e,r);break;case 31:Lt(e,r),a&4&&Qh(e,r);break;case 13:Lt(e,r),a&4&&Zh(e,r),a&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=C1.bind(null,r),P1(e,r))));break;case 22:if(a=r.memoizedState!==null||Ot,!a){n=n!==null&&n.memoizedState!==null||ln,s=Ot;var d=ln;Ot=a,(ln=n)&&!d?Bt(e,r,(r.subtreeFlags&8772)!==0):Lt(e,r),Ot=s,ln=d}break;case 30:break;default:Lt(e,r)}}function Jh(e){var n=e.alternate;n!==null&&(e.alternate=null,Jh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,wn=!1;function Nt(e,n,r){for(r=r.child;r!==null;)Xh(e,n,r),r=r.sibling}function Xh(e,n,r){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Sn,r)}catch{}switch(r.tag){case 26:ln||ht(r,n),Nt(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ln||ht(r,n);var a=Qe,s=wn;cr(r.type)&&(Qe=r.stateNode,wn=!1),Nt(e,n,r),Ei(r.stateNode),Qe=a,wn=s;break;case 5:ln||ht(r,n);case 6:if(a=Qe,s=wn,Qe=null,Nt(e,n,r),Qe=a,wn=s,Qe!==null)if(wn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(d){Le(r,n,d)}else try{Qe.removeChild(r.stateNode)}catch(d){Le(r,n,d)}break;case 18:Qe!==null&&(wn?(e=Qe,Im(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Al(e)):Im(Qe,r.stateNode));break;case 4:a=Qe,s=wn,Qe=r.stateNode.containerInfo,wn=!0,Nt(e,n,r),Qe=a,wn=s;break;case 0:case 11:case 14:case 15:rr(2,r,n),ln||rr(4,r,n),Nt(e,n,r);break;case 1:ln||(ht(r,n),a=r.stateNode,typeof a.componentWillUnmount=="function"&&Fh(r,n,a)),Nt(e,n,r);break;case 21:Nt(e,n,r);break;case 22:ln=(a=ln)||r.memoizedState!==null,Nt(e,n,r),ln=a;break;default:Nt(e,n,r)}}function Qh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Al(e)}catch(r){Le(n,n.return,r)}}}function Zh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(r){Le(n,n.return,r)}}function y1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ph),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ph),n;default:throw Error(o(435,e.tag))}}function Pa(e,n){var r=y1(e);n.forEach(function(a){if(!r.has(a)){r.add(a);var s=A1.bind(null,e,a);a.then(s,s)}})}function jn(e,n){var r=n.deletions;if(r!==null)for(var a=0;a<r.length;a++){var s=r[a],d=e,v=n,k=v;e:for(;k!==null;){switch(k.tag){case 27:if(cr(k.type)){Qe=k.stateNode,wn=!1;break e}break;case 5:Qe=k.stateNode,wn=!1;break e;case 3:case 4:Qe=k.stateNode.containerInfo,wn=!0;break e}k=k.return}if(Qe===null)throw Error(o(160));Xh(d,v,s),Qe=null,wn=!1,d=s.alternate,d!==null&&(d.return=null),s.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wh(n,e),n=n.sibling}var it=null;function Wh(e,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Dn(e),a&4&&(rr(3,e,e.return),mi(3,e),rr(5,e,e.return));break;case 1:jn(n,e),Dn(e),a&512&&(ln||r===null||ht(r,r.return)),a&64&&Ot&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?a:r.concat(a))));break;case 26:var s=it;if(jn(n,e),Dn(e),a&512&&(ln||r===null||ht(r,r.return)),a&4){var d=r!==null?r.memoizedState:null;if(a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null){e:{a=e.type,r=e.memoizedProps,s=s.ownerDocument||s;n:switch(a){case"title":d=s.getElementsByTagName("title")[0],(!d||d[ql]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=s.createElement(a),s.head.insertBefore(d,s.querySelector("head > title"))),pn(d,a,r),d[fn]=e,sn(d),a=d;break e;case"link":var v=Wm("link","href",s).get(a+(r.href||""));if(v){for(var k=0;k<v.length;k++)if(d=v[k],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(k,1);break n}}d=s.createElement(a),pn(d,a,r),s.head.appendChild(d);break;case"meta":if(v=Wm("meta","content",s).get(a+(r.content||""))){for(k=0;k<v.length;k++)if(d=v[k],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(k,1);break n}}d=s.createElement(a),pn(d,a,r),s.head.appendChild(d);break;default:throw Error(o(468,a))}d[fn]=e,sn(d),a=d}e.stateNode=a}else Km(s,e.type,e.stateNode);else e.stateNode=Zm(s,a,e.memoizedProps);else d!==a?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,a===null?Km(s,e.type,e.stateNode):Zm(s,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ps(e,e.memoizedProps,r.memoizedProps)}break;case 27:jn(n,e),Dn(e),a&512&&(ln||r===null||ht(r,r.return)),r!==null&&a&4&&ps(e,e.memoizedProps,r.memoizedProps);break;case 5:if(jn(n,e),Dn(e),a&512&&(ln||r===null||ht(r,r.return)),e.flags&32){s=e.stateNode;try{Qr(s,"")}catch(le){Le(e,e.return,le)}}a&4&&e.stateNode!=null&&(s=e.memoizedProps,ps(e,s,r!==null?r.memoizedProps:s)),a&1024&&(vs=!0);break;case 6:if(jn(n,e),Dn(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,r=e.stateNode;try{r.nodeValue=a}catch(le){Le(e,e.return,le)}}break;case 3:if(oo=null,s=it,it=io(n.containerInfo),jn(n,e),it=s,Dn(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Al(n.containerInfo)}catch(le){Le(e,e.return,le)}vs&&(vs=!1,Kh(e));break;case 4:a=it,it=io(e.stateNode.containerInfo),jn(n,e),Dn(e),it=a;break;case 12:jn(n,e),Dn(e);break;case 31:jn(n,e),Dn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pa(e,a)));break;case 13:jn(n,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ja=bn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pa(e,a)));break;case 22:s=e.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,N=Ot,V=ln;if(Ot=N||s,ln=V||A,jn(n,e),ln=V,Ot=N,Dn(e),a&8192)e:for(n=e.stateNode,n._visibility=s?n._visibility&-2:n._visibility|1,s&&(r===null||A||Ot||ln||Or(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){A=r=n;try{if(d=A.stateNode,s)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{k=A.stateNode;var J=A.memoizedProps.style,U=J!=null&&J.hasOwnProperty("display")?J.display:null;k.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(le){Le(A,A.return,le)}}}else if(n.tag===6){if(r===null){A=n;try{A.stateNode.nodeValue=s?"":A.memoizedProps}catch(le){Le(A,A.return,le)}}}else if(n.tag===18){if(r===null){A=n;try{var q=A.stateNode;s?Fm(q,!0):Fm(A.stateNode,!1)}catch(le){Le(A,A.return,le)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(r=a.retryQueue,r!==null&&(a.retryQueue=null,Pa(e,r))));break;case 19:jn(n,e),Dn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pa(e,a)));break;case 30:break;case 21:break;default:jn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{for(var r,a=e.return;a!==null;){if(Vh(a)){r=a;break}a=a.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var s=r.stateNode,d=gs(e);Ga(e,d,s);break;case 5:var v=r.stateNode;r.flags&32&&(Qr(v,""),r.flags&=-33);var k=gs(e);Ga(e,k,v);break;case 3:case 4:var A=r.stateNode.containerInfo,N=gs(e);ys(e,N,A);break;default:throw Error(o(161))}}catch(V){Le(e,e.return,V)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Kh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Kh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Lt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yh(e,n.alternate,n),n=n.sibling}function Or(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:rr(4,n,n.return),Or(n);break;case 1:ht(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Fh(n,n.return,r),Or(n);break;case 27:Ei(n.stateNode);case 26:case 5:ht(n,n.return),Or(n);break;case 22:n.memoizedState===null&&Or(n);break;case 30:Or(n);break;default:Or(n)}e=e.sibling}}function Bt(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,s=e,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:Bt(s,d,r),mi(4,d);break;case 1:if(Bt(s,d,r),a=d,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(N){Le(a,a.return,N)}if(a=d,s=a.updateQueue,s!==null){var k=a.stateNode;try{var A=s.shared.hiddenCallbacks;if(A!==null)for(s.shared.hiddenCallbacks=null,s=0;s<A.length;s++)Dd(A[s],k)}catch(N){Le(a,a.return,N)}}r&&v&64&&Ih(d),pi(d,d.return);break;case 27:Gh(d);case 26:case 5:Bt(s,d,r),r&&a===null&&v&4&&qh(d),pi(d,d.return);break;case 12:Bt(s,d,r);break;case 31:Bt(s,d,r),r&&v&4&&Qh(s,d);break;case 13:Bt(s,d,r),r&&v&4&&Zh(s,d);break;case 22:d.memoizedState===null&&Bt(s,d,r),pi(d,d.return);break;case 30:break;default:Bt(s,d,r)}n=n.sibling}}function xs(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ni(r))}function bs(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ni(e))}function at(e,n,r,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$h(e,n,r,a),n=n.sibling}function $h(e,n,r,a){var s=n.flags;switch(n.tag){case 0:case 11:case 15:at(e,n,r,a),s&2048&&mi(9,n);break;case 1:at(e,n,r,a);break;case 3:at(e,n,r,a),s&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ni(e)));break;case 12:if(s&2048){at(e,n,r,a),e=n.stateNode;try{var d=n.memoizedProps,v=d.id,k=d.onPostCommit;typeof k=="function"&&k(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Le(n,n.return,A)}}else at(e,n,r,a);break;case 31:at(e,n,r,a);break;case 13:at(e,n,r,a);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?at(e,n,r,a):gi(e,n):d._visibility&2?at(e,n,r,a):(d._visibility|=2,pl(e,n,r,a,(n.subtreeFlags&10256)!==0||!1)),s&2048&&xs(v,n);break;case 24:at(e,n,r,a),s&2048&&bs(n.alternate,n);break;default:at(e,n,r,a)}}function pl(e,n,r,a,s){for(s=s&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,v=n,k=r,A=a,N=v.flags;switch(v.tag){case 0:case 11:case 15:pl(d,v,k,A,s),mi(8,v);break;case 23:break;case 22:var V=v.stateNode;v.memoizedState!==null?V._visibility&2?pl(d,v,k,A,s):gi(d,v):(V._visibility|=2,pl(d,v,k,A,s)),s&&N&2048&&xs(v.alternate,v);break;case 24:pl(d,v,k,A,s),s&&N&2048&&bs(v.alternate,v);break;default:pl(d,v,k,A,s)}n=n.sibling}}function gi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,a=n,s=a.flags;switch(a.tag){case 22:gi(r,a),s&2048&&xs(a.alternate,a);break;case 24:gi(r,a),s&2048&&bs(a.alternate,a);break;default:gi(r,a)}n=n.sibling}}var yi=8192;function gl(e,n,r){if(e.subtreeFlags&yi)for(e=e.child;e!==null;)em(e,n,r),e=e.sibling}function em(e,n,r){switch(e.tag){case 26:gl(e,n,r),e.flags&yi&&e.memoizedState!==null&&rv(r,it,e.memoizedState,e.memoizedProps);break;case 5:gl(e,n,r);break;case 3:case 4:var a=it;it=io(e.stateNode.containerInfo),gl(e,n,r),it=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=yi,yi=16777216,gl(e,n,r),yi=a):gl(e,n,r));break;default:gl(e,n,r)}}function nm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];cn=a,rm(a,e)}nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tm(e),e=e.sibling}function tm(e){switch(e.tag){case 0:case 11:case 15:vi(e),e.flags&2048&&rr(9,e,e.return);break;case 3:vi(e);break;case 12:vi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ya(e)):vi(e);break;default:vi(e)}}function Ya(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];cn=a,rm(a,e)}nm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:rr(8,n,n.return),Ya(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Ya(n));break;default:Ya(n)}e=e.sibling}}function rm(e,n){for(;cn!==null;){var r=cn;switch(r.tag){case 0:case 11:case 15:rr(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var a=r.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ni(r.memoizedState.cache)}if(a=r.child,a!==null)a.return=r,cn=a;else e:for(r=e;cn!==null;){a=cn;var s=a.sibling,d=a.return;if(Jh(a),a===r){cn=null;break e}if(s!==null){s.return=d,cn=s;break e}cn=d}}}var v1={getCacheForType:function(e){var n=hn(nn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return hn(nn).controller.signal}},x1=typeof WeakMap=="function"?WeakMap:Map,_e=0,qe=null,Te=null,we=0,Ne=0,Hn=null,lr=!1,yl=!1,Ss=!1,Ut=0,Ke=0,ir=0,Nr=0,ks=0,In=0,vl=0,xi=null,Mn=null,Ts=!1,Ja=0,lm=0,Xa=1/0,Qa=null,ar=null,un=0,or=null,xl=null,Ht=0,Es=0,Cs=null,im=null,bi=0,As=null;function Fn(){return(_e&2)!==0&&we!==0?we&-we:H.T!==null?zs():Sf()}function am(){if(In===0)if((we&536870912)===0||De){var e=ra;ra<<=1,(ra&3932160)===0&&(ra=262144),In=e}else In=536870912;return e=Bn.current,e!==null&&(e.flags|=32),In}function Rn(e,n,r){(e===qe&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(bl(e,0),ur(e,we,In,!1)),Fl(e,r),((_e&2)===0||e!==qe)&&(e===qe&&((_e&2)===0&&(Nr|=r),Ke===4&&ur(e,we,In,!1)),mt(e))}function om(e,n,r){if((_e&6)!==0)throw Error(o(327));var a=!r&&(n&127)===0&&(n&e.expiredLanes)===0||Il(e,n),s=a?k1(e,n):js(e,n,!0),d=a;do{if(s===0){yl&&!a&&ur(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!b1(r)){s=js(e,n,!1),d=!1;continue}if(s===2){if(d=n,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var k=e;s=xi;var A=k.current.memoizedState.isDehydrated;if(A&&(bl(k,v).flags|=256),v=js(k,v,!1),v!==2){if(Ss&&!A){k.errorRecoveryDisabledLanes|=d,Nr|=d,s=4;break e}d=Mn,Mn=s,d!==null&&(Mn===null?Mn=d:Mn.push.apply(Mn,d))}s=v}if(d=!1,s!==2)continue}}if(s===1){bl(e,0),ur(e,n,0,!0);break}e:{switch(a=e,d=s,d){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:ur(a,n,In,!lr);break e;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(s=Ja+300-bn(),10<s)){if(ur(a,n,In,!lr),ia(a,0,!0)!==0)break e;Ht=n,a.timeoutHandle=Um(um.bind(null,a,r,Mn,Qa,Ts,n,In,Nr,vl,lr,d,"Throttled",-0,0),s);break e}um(a,r,Mn,Qa,Ts,n,In,Nr,vl,lr,d,null,-0,0)}}break}while(!0);mt(e)}function um(e,n,r,a,s,d,v,k,A,N,V,J,U,q){if(e.timeoutHandle=-1,J=n.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Et},em(n,d,J);var le=(d&62914560)===d?Ja-bn():(d&4194048)===d?lm-bn():0;if(le=lv(J,le),le!==null){Ht=d,e.cancelPendingCommit=le(gm.bind(null,e,n,d,r,a,s,v,k,A,V,J,null,U,q)),ur(e,d,v,!N);return}}gm(e,n,d,r,a,s,v,k,A)}function b1(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var a=0;a<r.length;a++){var s=r[a],d=s.getSnapshot;s=s.value;try{if(!Nn(d(),s))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ur(e,n,r,a){n&=~ks,n&=~Nr,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var s=n;0<s;){var d=31-Fe(s),v=1<<d;a[d]=-1,s&=~v}r!==0&&vf(e,r,n)}function Za(){return(_e&6)===0?(Si(0),!1):!0}function ws(){if(Te!==null){if(Ne===0)var e=Te.return;else e=Te,jt=Ar=null,Vu(e),cl=null,ri=0,e=Te;for(;e!==null;)Hh(e.alternate,e),e=e.return;Te=null}}function bl(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,I1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ht=0,ws(),qe=e,Te=r=At(e.current,null),we=n,Ne=0,Hn=null,lr=!1,yl=Il(e,n),Ss=!1,vl=In=ks=Nr=ir=Ke=0,Mn=xi=null,Ts=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-Fe(a),d=1<<s;n|=e[s],a&=~d}return Ut=n,ya(),r}function sm(e,n){ye=null,H.H=fi,n===sl||n===Ca?(n=Cd(),Ne=3):n===Ru?(n=Cd(),Ne=4):Ne=n===is?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,Te===null&&(Ke=1,Ha(e,Qn(n,e.current)))}function cm(){var e=Bn.current;return e===null?!0:(we&4194048)===we?$n===null:(we&62914560)===we||(we&536870912)!==0?e===$n:!1}function fm(){var e=H.H;return H.H=fi,e===null?fi:e}function dm(){var e=H.A;return H.A=v1,e}function Wa(){Ke=4,lr||(we&4194048)!==we&&Bn.current!==null||(yl=!0),(ir&134217727)===0&&(Nr&134217727)===0||qe===null||ur(qe,we,In,!1)}function js(e,n,r){var a=_e;_e|=2;var s=fm(),d=dm();(qe!==e||we!==n)&&(Qa=null,bl(e,n)),n=!1;var v=Ke;e:do try{if(Ne!==0&&Te!==null){var k=Te,A=Hn;switch(Ne){case 8:ws(),v=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(n=!0);var N=Ne;if(Ne=0,Hn=null,Sl(e,k,A,N),r&&yl){v=0;break e}break;default:N=Ne,Ne=0,Hn=null,Sl(e,k,A,N)}}S1(),v=Ke;break}catch(V){sm(e,V)}while(!0);return n&&e.shellSuspendCounter++,jt=Ar=null,_e=a,H.H=s,H.A=d,Te===null&&(qe=null,we=0,ya()),v}function S1(){for(;Te!==null;)hm(Te)}function k1(e,n){var r=_e;_e|=2;var a=fm(),s=dm();qe!==e||we!==n?(Qa=null,Xa=bn()+500,bl(e,n)):yl=Il(e,n);e:do try{if(Ne!==0&&Te!==null){n=Te;var d=Hn;n:switch(Ne){case 1:Ne=0,Hn=null,Sl(e,n,d,1);break;case 2:case 9:if(Td(d)){Ne=0,Hn=null,mm(n);break}n=function(){Ne!==2&&Ne!==9||qe!==e||(Ne=7),mt(e)},d.then(n,n);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Td(d)?(Ne=0,Hn=null,mm(n)):(Ne=0,Hn=null,Sl(e,n,d,7));break;case 5:var v=null;switch(Te.tag){case 26:v=Te.memoizedState;case 5:case 27:var k=Te;if(v?$m(v):k.stateNode.complete){Ne=0,Hn=null;var A=k.sibling;if(A!==null)Te=A;else{var N=k.return;N!==null?(Te=N,Ka(N)):Te=null}break n}}Ne=0,Hn=null,Sl(e,n,d,5);break;case 6:Ne=0,Hn=null,Sl(e,n,d,6);break;case 8:ws(),Ke=6;break e;default:throw Error(o(462))}}T1();break}catch(V){sm(e,V)}while(!0);return jt=Ar=null,H.H=a,H.A=s,_e=r,Te!==null?0:(qe=null,we=0,ya(),Ke)}function T1(){for(;Te!==null&&!Fo();)hm(Te)}function hm(e){var n=Bh(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,n===null?Ka(e):Te=n}function mm(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Rh(r,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Rh(r,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Vu(n);default:Hh(r,n),n=Te=dd(n,Ut),n=Bh(r,n,Ut)}e.memoizedProps=e.pendingProps,n===null?Ka(e):Te=n}function Sl(e,n,r,a){jt=Ar=null,Vu(n),cl=null,ri=0;var s=n.return;try{if(f1(e,s,n,r,we)){Ke=1,Ha(e,Qn(r,e.current)),Te=null;return}}catch(d){if(s!==null)throw Te=s,d;Ke=1,Ha(e,Qn(r,e.current)),Te=null;return}n.flags&32768?(De||a===1?e=!0:yl||(we&536870912)!==0?e=!1:(lr=e=!0,(a===2||a===9||a===3||a===6)&&(a=Bn.current,a!==null&&a.tag===13&&(a.flags|=16384))),pm(n,e)):Ka(n)}function Ka(e){var n=e;do{if((n.flags&32768)!==0){pm(n,lr);return}e=n.return;var r=m1(n.alternate,n,Ut);if(r!==null){Te=r;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);Ke===0&&(Ke=5)}function pm(e,n){do{var r=p1(e.alternate,e);if(r!==null){r.flags&=32767,Te=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=r}while(e!==null);Ke=6,Te=null}function gm(e,n,r,a,s,d,v,k,A){e.cancelPendingCommit=null;do $a();while(un!==0);if((_e&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(d=n.lanes|n.childLanes,d|=gu,t0(e,r,d,v,k,A),e===qe&&(Te=qe=null,we=0),xl=n,or=e,Ht=r,Es=d,Cs=s,im=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,w1(pe,function(){return Sm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null,s=X.p,X.p=2,v=_e,_e|=4;try{g1(e,n,r)}finally{_e=v,X.p=s,H.T=a}}un=1,ym(),vm(),xm()}}function ym(){if(un===1){un=0;var e=or,n=xl,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var a=X.p;X.p=2;var s=_e;_e|=4;try{Wh(n,e);var d=Is,v=rd(e.containerInfo),k=d.focusedElem,A=d.selectionRange;if(v!==k&&k&&k.ownerDocument&&td(k.ownerDocument.documentElement,k)){if(A!==null&&fu(k)){var N=A.start,V=A.end;if(V===void 0&&(V=N),"selectionStart"in k)k.selectionStart=N,k.selectionEnd=Math.min(V,k.value.length);else{var J=k.ownerDocument||document,U=J&&J.defaultView||window;if(U.getSelection){var q=U.getSelection(),le=k.textContent.length,he=Math.min(A.start,le),Ie=A.end===void 0?he:Math.min(A.end,le);!q.extend&&he>Ie&&(v=Ie,Ie=he,he=v);var z=nd(k,he),D=nd(k,Ie);if(z&&D&&(q.rangeCount!==1||q.anchorNode!==z.node||q.anchorOffset!==z.offset||q.focusNode!==D.node||q.focusOffset!==D.offset)){var O=J.createRange();O.setStart(z.node,z.offset),q.removeAllRanges(),he>Ie?(q.addRange(O),q.extend(D.node,D.offset)):(O.setEnd(D.node,D.offset),q.addRange(O))}}}}for(J=[],q=k;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<J.length;k++){var Y=J[k];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}fo=!!Hs,Is=Hs=null}finally{_e=s,X.p=a,H.T=r}}e.current=n,un=2}}function vm(){if(un===2){un=0;var e=or,n=xl,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var a=X.p;X.p=2;var s=_e;_e|=4;try{Yh(e,n.alternate,n)}finally{_e=s,X.p=a,H.T=r}}un=3}}function xm(){if(un===4||un===3){un=0,qo();var e=or,n=xl,r=Ht,a=im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,xl=or=null,bm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ar=null),Yo(r),n=n.stateNode,on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Sn,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=H.T,s=X.p,X.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<a.length;v++){var k=a[v];d(k.value,{componentStack:k.stack})}}finally{H.T=n,X.p=s}}(Ht&3)!==0&&$a(),mt(e),s=e.pendingLanes,(r&261930)!==0&&(s&42)!==0?e===As?bi++:(bi=0,As=e):bi=0,Si(0)}}function bm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ni(n)))}function $a(){return ym(),vm(),xm(),Sm()}function Sm(){if(un!==5)return!1;var e=or,n=Es;Es=0;var r=Yo(Ht),a=H.T,s=X.p;try{X.p=32>r?32:r,H.T=null,r=Cs,Cs=null;var d=or,v=Ht;if(un=0,xl=or=null,Ht=0,(_e&6)!==0)throw Error(o(331));var k=_e;if(_e|=4,tm(d.current),$h(d,d.current,v,r),_e=k,Si(0,!1),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Sn,d)}catch{}return!0}finally{X.p=s,H.T=a,bm(e,n)}}function km(e,n,r){n=Qn(r,n),n=ls(e.stateNode,n,2),e=er(e,n,2),e!==null&&(Fl(e,2),mt(e))}function Le(e,n,r){if(e.tag===3)km(e,e,r);else for(;n!==null;){if(n.tag===3){km(n,e,r);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ar===null||!ar.has(a))){e=Qn(r,e),r=Th(2),a=er(n,r,2),a!==null&&(Eh(r,a,n,e),Fl(a,2),mt(a));break}}n=n.return}}function Ds(e,n,r){var a=e.pingCache;if(a===null){a=e.pingCache=new x1;var s=new Set;a.set(n,s)}else s=a.get(n),s===void 0&&(s=new Set,a.set(n,s));s.has(r)||(Ss=!0,s.add(r),e=E1.bind(null,e,n,r),n.then(e,e))}function E1(e,n,r){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(we&r)===r&&(Ke===4||Ke===3&&(we&62914560)===we&&300>bn()-Ja?(_e&2)===0&&bl(e,0):ks|=r,vl===we&&(vl=0)),mt(e)}function Tm(e,n){n===0&&(n=yf()),e=Tr(e,n),e!==null&&(Fl(e,n),mt(e))}function C1(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Tm(e,r)}function A1(e,n){var r=0;switch(e.tag){case 31:case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(n),Tm(e,r)}function w1(e,n){return qr(e,n)}var eo=null,kl=null,Ms=!1,no=!1,Rs=!1,sr=0;function mt(e){e!==kl&&e.next===null&&(kl===null?eo=kl=e:kl=kl.next=e),no=!0,Ms||(Ms=!0,D1())}function Si(e,n){if(!Rs&&no){Rs=!0;do for(var r=!1,a=eo;a!==null;){if(e!==0){var s=a.pendingLanes;if(s===0)var d=0;else{var v=a.suspendedLanes,k=a.pingedLanes;d=(1<<31-Fe(42|e)+1)-1,d&=s&~(v&~k),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,wm(a,d))}else d=we,d=ia(a,a===qe?d:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(d&3)===0||Il(a,d)||(r=!0,wm(a,d));a=a.next}while(r);Rs=!1}}function j1(){Em()}function Em(){no=Ms=!1;var e=0;sr!==0&&H1()&&(e=sr);for(var n=bn(),r=null,a=eo;a!==null;){var s=a.next,d=Cm(a,n);d===0?(a.next=null,r===null?eo=s:r.next=s,s===null&&(kl=r)):(r=a,(e!==0||(d&3)!==0)&&(no=!0)),a=s}un!==0&&un!==5||Si(e),sr!==0&&(sr=0)}function Cm(e,n){for(var r=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Fe(d),k=1<<v,A=s[v];A===-1?((k&r)===0||(k&a)!==0)&&(s[v]=n0(k,n)):A<=n&&(e.expiredLanes|=k),d&=~k}if(n=qe,r=we,r=ia(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,r===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Hl(a),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Il(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(a!==null&&Hl(a),Yo(r)){case 2:case 8:r=$;break;case 32:r=pe;break;case 268435456:r=Oe;break;default:r=pe}return a=Am.bind(null,e),r=qr(r,a),e.callbackPriority=n,e.callbackNode=r,n}return a!==null&&a!==null&&Hl(a),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if($a()&&e.callbackNode!==r)return null;var a=we;return a=ia(e,e===qe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(om(e,a,n),Cm(e,bn()),e.callbackNode!=null&&e.callbackNode===r?Am.bind(null,e):null)}function wm(e,n){if($a())return null;om(e,n,!0)}function D1(){F1(function(){(_e&6)!==0?qr(P,j1):Em()})}function zs(){if(sr===0){var e=ol;e===0&&(e=ta,ta<<=1,(ta&261888)===0&&(ta=256)),sr=e}return sr}function jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sa(""+e)}function Dm(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function M1(e,n,r,a,s){if(n==="submit"&&r&&r.stateNode===s){var d=jm((s[Cn]||null).action),v=a.submitter;v&&(n=(n=v[Cn]||null)?jm(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var k=new ha("action","action",null,a,s);e.push({event:k,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(sr!==0){var A=v?Dm(s,v):new FormData(s);Ku(r,{pending:!0,data:A,method:s.method,action:d},null,A)}}else typeof d=="function"&&(k.preventDefault(),A=v?Dm(s,v):new FormData(s),Ku(r,{pending:!0,data:A,method:s.method,action:d},d,A))},currentTarget:s}]})}}for(var _s=0;_s<pu.length;_s++){var Os=pu[_s],R1=Os.toLowerCase(),z1=Os[0].toUpperCase()+Os.slice(1);lt(R1,"on"+z1)}lt(ad,"onAnimationEnd"),lt(od,"onAnimationIteration"),lt(ud,"onAnimationStart"),lt("dblclick","onDoubleClick"),lt("focusin","onFocus"),lt("focusout","onBlur"),lt(X0,"onTransitionRun"),lt(Q0,"onTransitionStart"),lt(Z0,"onTransitionCancel"),lt(sd,"onTransitionEnd"),Jr("onMouseEnter",["mouseout","mouseover"]),Jr("onMouseLeave",["mouseout","mouseover"]),Jr("onPointerEnter",["pointerout","pointerover"]),Jr("onPointerLeave",["pointerout","pointerover"]),xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xr("onBeforeInput",["compositionend","keypress","textInput","paste"]),xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ki));function Mm(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],s=a.event;a=a.listeners;e:{var d=void 0;if(n)for(var v=a.length-1;0<=v;v--){var k=a[v],A=k.instance,N=k.currentTarget;if(k=k.listener,A!==d&&s.isPropagationStopped())break e;d=k,s.currentTarget=N;try{d(s)}catch(V){ga(V)}s.currentTarget=null,d=A}else for(v=0;v<a.length;v++){if(k=a[v],A=k.instance,N=k.currentTarget,k=k.listener,A!==d&&s.isPropagationStopped())break e;d=k,s.currentTarget=N;try{d(s)}catch(V){ga(V)}s.currentTarget=null,d=A}}}}function Ee(e,n){var r=n[Jo];r===void 0&&(r=n[Jo]=new Set);var a=e+"__bubble";r.has(a)||(Rm(n,e,2,!1),r.add(a))}function Ns(e,n,r){var a=0;n&&(a|=4),Rm(r,e,a,n)}var to="_reactListening"+Math.random().toString(36).slice(2);function Ls(e){if(!e[to]){e[to]=!0,Ef.forEach(function(r){r!=="selectionchange"&&(_1.has(r)||Ns(r,!1,e),Ns(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[to]||(n[to]=!0,Ns("selectionchange",!1,n))}}function Rm(e,n,r,a){switch(ap(n)){case 2:var s=ov;break;case 8:s=uv;break;default:s=Ws}r=s.bind(null,n,r,e),s=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(n,r,{capture:!0,passive:s}):e.addEventListener(n,r,!0):s!==void 0?e.addEventListener(n,r,{passive:s}):e.addEventListener(n,r,!1)}function Bs(e,n,r,a,s){var d=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var v=a.tag;if(v===3||v===4){var k=a.stateNode.containerInfo;if(k===s)break;if(v===4)for(v=a.return;v!==null;){var A=v.tag;if((A===3||A===4)&&v.stateNode.containerInfo===s)return;v=v.return}for(;k!==null;){if(v=Gr(k),v===null)return;if(A=v.tag,A===5||A===6||A===26||A===27){a=d=v;continue e}k=k.parentNode}}a=a.return}Lf(function(){var N=d,V=eu(r),J=[];e:{var U=cd.get(e);if(U!==void 0){var q=ha,le=e;switch(e){case"keypress":if(fa(r)===0)break e;case"keydown":case"keyup":q=A0;break;case"focusin":le="focus",q=au;break;case"focusout":le="blur",q=au;break;case"beforeblur":case"afterblur":q=au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=D0;break;case ad:case od:case ud:q=y0;break;case sd:q=R0;break;case"scroll":case"scrollend":q=d0;break;case"wheel":q=_0;break;case"copy":case"cut":case"paste":q=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Ff;break;case"toggle":case"beforetoggle":q=N0}var he=(n&4)!==0,Ie=!he&&(e==="scroll"||e==="scrollend"),z=he?U!==null?U+"Capture":null:U;he=[];for(var D=N,O;D!==null;){var Y=D;if(O=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||O===null||z===null||(Y=Gl(D,z),Y!=null&&he.push(Ti(D,Y,O))),Ie)break;D=D.return}0<he.length&&(U=new q(U,le,null,r,V),J.push({event:U,listeners:he}))}}if((n&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",U&&r!==$o&&(le=r.relatedTarget||r.fromElement)&&(Gr(le)||le[Vr]))break e;if((q||U)&&(U=V.window===V?V:(U=V.ownerDocument)?U.defaultView||U.parentWindow:window,q?(le=r.relatedTarget||r.toElement,q=N,le=le?Gr(le):null,le!==null&&(Ie=c(le),he=le.tag,le!==Ie||he!==5&&he!==27&&he!==6)&&(le=null)):(q=null,le=N),q!==le)){if(he=Hf,Y="onMouseLeave",z="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(he=Ff,Y="onPointerLeave",z="onPointerEnter",D="pointer"),Ie=q==null?U:Vl(q),O=le==null?U:Vl(le),U=new he(Y,D+"leave",q,r,V),U.target=Ie,U.relatedTarget=O,Y=null,Gr(V)===N&&(he=new he(z,D+"enter",le,r,V),he.target=O,he.relatedTarget=Ie,Y=he),Ie=Y,q&&le)n:{for(he=O1,z=q,D=le,O=0,Y=z;Y;Y=he(Y))O++;Y=0;for(var ce=D;ce;ce=he(ce))Y++;for(;0<O-Y;)z=he(z),O--;for(;0<Y-O;)D=he(D),Y--;for(;O--;){if(z===D||D!==null&&z===D.alternate){he=z;break n}z=he(z),D=he(D)}he=null}else he=null;q!==null&&zm(J,U,q,he,!1),le!==null&&Ie!==null&&zm(J,Ie,le,he,!0)}}e:{if(U=N?Vl(N):window,q=U.nodeName&&U.nodeName.toLowerCase(),q==="select"||q==="input"&&U.type==="file")var Re=Qf;else if(Jf(U))if(Zf)Re=P0;else{Re=V0;var ae=q0}else q=U.nodeName,!q||q.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?N&&Ko(N.elementType)&&(Re=Qf):Re=G0;if(Re&&(Re=Re(e,N))){Xf(J,Re,r,V);break e}ae&&ae(e,U,N),e==="focusout"&&N&&U.type==="number"&&N.memoizedProps.value!=null&&Wo(U,"number",U.value)}switch(ae=N?Vl(N):window,e){case"focusin":(Jf(ae)||ae.contentEditable==="true")&&($r=ae,du=N,Kl=null);break;case"focusout":Kl=du=$r=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,ld(J,r,V);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":ld(J,r,V)}var ve;if(uu)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Kr?Pf(e,r)&&(je="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(je="onCompositionStart");je&&(qf&&r.locale!=="ko"&&(Kr||je!=="onCompositionStart"?je==="onCompositionEnd"&&Kr&&(ve=Bf()):(Jt=V,ru="value"in Jt?Jt.value:Jt.textContent,Kr=!0)),ae=ro(N,je),0<ae.length&&(je=new If(je,e,null,r,V),J.push({event:je,listeners:ae}),ve?je.data=ve:(ve=Yf(r),ve!==null&&(je.data=ve)))),(ve=B0?U0(e,r):H0(e,r))&&(je=ro(N,"onBeforeInput"),0<je.length&&(ae=new If("onBeforeInput","beforeinput",null,r,V),J.push({event:ae,listeners:je}),ae.data=ve)),M1(J,e,N,r,V)}Mm(J,n)})}function Ti(e,n,r){return{instance:e,listener:n,currentTarget:r}}function ro(e,n){for(var r=n+"Capture",a=[];e!==null;){var s=e,d=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||d===null||(s=Gl(e,r),s!=null&&a.unshift(Ti(e,s,d)),s=Gl(e,n),s!=null&&a.push(Ti(e,s,d))),e.tag===3)return a;e=e.return}return[]}function O1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zm(e,n,r,a,s){for(var d=n._reactName,v=[];r!==null&&r!==a;){var k=r,A=k.alternate,N=k.stateNode;if(k=k.tag,A!==null&&A===a)break;k!==5&&k!==26&&k!==27||N===null||(A=N,s?(N=Gl(r,d),N!=null&&v.unshift(Ti(r,N,A))):s||(N=Gl(r,d),N!=null&&v.push(Ti(r,N,A)))),r=r.return}v.length!==0&&e.push({event:n,listeners:v})}var N1=/\r\n?/g,L1=/\u0000|\uFFFD/g;function _m(e){return(typeof e=="string"?e:""+e).replace(N1,`
`).replace(L1,"")}function Om(e,n){return n=_m(n),_m(e)===n}function He(e,n,r,a,s,d){switch(r){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Qr(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Qr(e,""+a);break;case"className":oa(e,"class",a);break;case"tabIndex":oa(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":oa(e,r,a);break;case"style":Of(e,a,d);break;case"data":if(n!=="object"){oa(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(r);break}a=sa(""+a),e.setAttribute(r,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&He(e,n,"name",s.name,s,null),He(e,n,"formEncType",s.formEncType,s,null),He(e,n,"formMethod",s.formMethod,s,null),He(e,n,"formTarget",s.formTarget,s,null)):(He(e,n,"encType",s.encType,s,null),He(e,n,"method",s.method,s,null),He(e,n,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(r);break}a=sa(""+a),e.setAttribute(r,a);break;case"onClick":a!=null&&(e.onclick=Et);break;case"onScroll":a!=null&&Ee("scroll",e);break;case"onScrollEnd":a!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(r=a.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}r=sa(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(r,""+a):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":a===!0?e.setAttribute(r,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(r,a):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(r,a):e.removeAttribute(r);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(r):e.setAttribute(r,a);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),aa(e,"popover",a);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":aa(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=c0.get(r)||r,aa(e,r,a))}}function Us(e,n,r,a,s,d){switch(r){case"style":Of(e,a,d);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(r=a.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"children":typeof a=="string"?Qr(e,a):(typeof a=="number"||typeof a=="bigint")&&Qr(e,""+a);break;case"onScroll":a!=null&&Ee("scroll",e);break;case"onScrollEnd":a!=null&&Ee("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Et);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cf.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(s=r.endsWith("Capture"),n=r.slice(2,s?r.length-7:void 0),d=e[Cn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,s),typeof a=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,a,s);break e}r in e?e[r]=a:a===!0?e.setAttribute(r,""):aa(e,r,a)}}}function pn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var a=!1,s=!1,d;for(d in r)if(r.hasOwnProperty(d)){var v=r[d];if(v!=null)switch(d){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:He(e,n,d,v,r,null)}}s&&He(e,n,"srcSet",r.srcSet,r,null),a&&He(e,n,"src",r.src,r,null);return;case"input":Ee("invalid",e);var k=d=v=s=null,A=null,N=null;for(a in r)if(r.hasOwnProperty(a)){var V=r[a];if(V!=null)switch(a){case"name":s=V;break;case"type":v=V;break;case"checked":A=V;break;case"defaultChecked":N=V;break;case"value":d=V;break;case"defaultValue":k=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,n));break;default:He(e,n,a,V,r,null)}}Mf(e,d,k,A,N,v,s,!1);return;case"select":Ee("invalid",e),a=v=d=null;for(s in r)if(r.hasOwnProperty(s)&&(k=r[s],k!=null))switch(s){case"value":d=k;break;case"defaultValue":v=k;break;case"multiple":a=k;default:He(e,n,s,k,r,null)}n=d,r=v,e.multiple=!!a,n!=null?Xr(e,!!a,n,!1):r!=null&&Xr(e,!!a,r,!0);return;case"textarea":Ee("invalid",e),d=s=a=null;for(v in r)if(r.hasOwnProperty(v)&&(k=r[v],k!=null))switch(v){case"value":a=k;break;case"defaultValue":s=k;break;case"children":d=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(91));break;default:He(e,n,v,k,r,null)}zf(e,a,s,d);return;case"option":for(A in r)if(r.hasOwnProperty(A)&&(a=r[A],a!=null))switch(A){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:He(e,n,A,a,r,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(a=0;a<ki.length;a++)Ee(ki[a],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in r)if(r.hasOwnProperty(N)&&(a=r[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:He(e,n,N,a,r,null)}return;default:if(Ko(n)){for(V in r)r.hasOwnProperty(V)&&(a=r[V],a!==void 0&&Us(e,n,V,a,r,void 0));return}}for(k in r)r.hasOwnProperty(k)&&(a=r[k],a!=null&&He(e,n,k,a,r,null))}function B1(e,n,r,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,d=null,v=null,k=null,A=null,N=null,V=null;for(q in r){var J=r[q];if(r.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":A=J;default:a.hasOwnProperty(q)||He(e,n,q,null,a,J)}}for(var U in a){var q=a[U];if(J=r[U],a.hasOwnProperty(U)&&(q!=null||J!=null))switch(U){case"type":d=q;break;case"name":s=q;break;case"checked":N=q;break;case"defaultChecked":V=q;break;case"value":v=q;break;case"defaultValue":k=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,n));break;default:q!==J&&He(e,n,U,q,a,J)}}Zo(e,v,k,A,N,V,d,s);return;case"select":q=v=k=U=null;for(d in r)if(A=r[d],r.hasOwnProperty(d)&&A!=null)switch(d){case"value":break;case"multiple":q=A;default:a.hasOwnProperty(d)||He(e,n,d,null,a,A)}for(s in a)if(d=a[s],A=r[s],a.hasOwnProperty(s)&&(d!=null||A!=null))switch(s){case"value":U=d;break;case"defaultValue":k=d;break;case"multiple":v=d;default:d!==A&&He(e,n,s,d,a,A)}n=k,r=v,a=q,U!=null?Xr(e,!!r,U,!1):!!a!=!!r&&(n!=null?Xr(e,!!r,n,!0):Xr(e,!!r,r?[]:"",!1));return;case"textarea":q=U=null;for(k in r)if(s=r[k],r.hasOwnProperty(k)&&s!=null&&!a.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:He(e,n,k,null,a,s)}for(v in a)if(s=a[v],d=r[v],a.hasOwnProperty(v)&&(s!=null||d!=null))switch(v){case"value":U=s;break;case"defaultValue":q=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==d&&He(e,n,v,s,a,d)}Rf(e,U,q);return;case"option":for(var le in r)if(U=r[le],r.hasOwnProperty(le)&&U!=null&&!a.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:He(e,n,le,null,a,U)}for(A in a)if(U=a[A],q=r[A],a.hasOwnProperty(A)&&U!==q&&(U!=null||q!=null))switch(A){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:He(e,n,A,U,a,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in r)U=r[he],r.hasOwnProperty(he)&&U!=null&&!a.hasOwnProperty(he)&&He(e,n,he,null,a,U);for(N in a)if(U=a[N],q=r[N],a.hasOwnProperty(N)&&U!==q&&(U!=null||q!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,n));break;default:He(e,n,N,U,a,q)}return;default:if(Ko(n)){for(var Ie in r)U=r[Ie],r.hasOwnProperty(Ie)&&U!==void 0&&!a.hasOwnProperty(Ie)&&Us(e,n,Ie,void 0,a,U);for(V in a)U=a[V],q=r[V],!a.hasOwnProperty(V)||U===q||U===void 0&&q===void 0||Us(e,n,V,U,a,q);return}}for(var z in r)U=r[z],r.hasOwnProperty(z)&&U!=null&&!a.hasOwnProperty(z)&&He(e,n,z,null,a,U);for(J in a)U=a[J],q=r[J],!a.hasOwnProperty(J)||U===q||U==null&&q==null||He(e,n,J,U,a,q)}function Nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),a=0;a<r.length;a++){var s=r[a],d=s.transferSize,v=s.initiatorType,k=s.duration;if(d&&k&&Nm(v)){for(v=0,k=s.responseEnd,a+=1;a<r.length;a++){var A=r[a],N=A.startTime;if(N>k)break;var V=A.transferSize,J=A.initiatorType;V&&Nm(J)&&(A=A.responseEnd,v+=V*(A<k?1:(k-N)/(A-N)))}if(--a,n+=8*(d+v)/(s.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hs=null,Is=null;function lo(e){return e.nodeType===9?e:e.ownerDocument}function Lm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Fs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qs=null;function H1(){var e=window.event;return e&&e.type==="popstate"?e===qs?!1:(qs=e,!0):(qs=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(e){return Hm.resolve(null).then(e).catch(q1)}:Um;function q1(e){setTimeout(function(){throw e})}function cr(e){return e==="head"}function Im(e,n){var r=n,a=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"||r==="/&"){if(a===0){e.removeChild(s),Al(n);return}a--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")a++;else if(r==="html")Ei(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ei(r);for(var d=r.firstChild;d;){var v=d.nextSibling,k=d.nodeName;d[ql]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=v}}else r==="body"&&Ei(e.ownerDocument.body);r=s}while(r);Al(n)}function Fm(e,n){var r=e;e=0;do{var a=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=a}while(r)}function Vs(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Vs(r),Xo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function V1(e,n,r,a){for(;e.nodeType===1;){var s=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ql])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=et(e.nextSibling),e===null)break}return null}function G1(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=et(e.nextSibling),e===null))return null;return e}function qm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=et(e.nextSibling),e===null))return null;return e}function Gs(e){return e.data==="$?"||e.data==="$~"}function Ps(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function P1(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var a=function(){n(),r.removeEventListener("DOMContentLoaded",a)};r.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function et(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ys=null;function Vm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return et(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function Gm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function Pm(e,n,r){switch(n=lo(r),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ei(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xo(e)}var nt=new Map,Ym=new Set;function io(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=X.d;X.d={f:Y1,r:J1,D:X1,C:Q1,L:Z1,m:W1,X:$1,S:K1,M:ev};function Y1(){var e=It.f(),n=Za();return e||n}function J1(e){var n=Pr(e);n!==null&&n.tag===5&&n.type==="form"?sh(n):It.r(e)}var Tl=typeof document>"u"?null:document;function Jm(e,n,r){var a=Tl;if(a&&typeof n=="string"&&n){var s=Jn(n);s='link[rel="'+e+'"][href="'+s+'"]',typeof r=="string"&&(s+='[crossorigin="'+r+'"]'),Ym.has(s)||(Ym.add(s),e={rel:e,crossOrigin:r,href:n},a.querySelector(s)===null&&(n=a.createElement("link"),pn(n,"link",e),sn(n),a.head.appendChild(n)))}}function X1(e){It.D(e),Jm("dns-prefetch",e,null)}function Q1(e,n){It.C(e,n),Jm("preconnect",e,n)}function Z1(e,n,r){It.L(e,n,r);var a=Tl;if(a&&e&&n){var s='link[rel="preload"][as="'+Jn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(s+='[imagesrcset="'+Jn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(s+='[imagesizes="'+Jn(r.imageSizes)+'"]')):s+='[href="'+Jn(e)+'"]';var d=s;switch(n){case"style":d=El(e);break;case"script":d=Cl(e)}nt.has(d)||(e=y({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),nt.set(d,e),a.querySelector(s)!==null||n==="style"&&a.querySelector(Ci(d))||n==="script"&&a.querySelector(Ai(d))||(n=a.createElement("link"),pn(n,"link",e),sn(n),a.head.appendChild(n)))}}function W1(e,n){It.m(e,n);var r=Tl;if(r&&e){var a=n&&typeof n.as=="string"?n.as:"script",s='link[rel="modulepreload"][as="'+Jn(a)+'"][href="'+Jn(e)+'"]',d=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Cl(e)}if(!nt.has(d)&&(e=y({rel:"modulepreload",href:e},n),nt.set(d,e),r.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ai(d)))return}a=r.createElement("link"),pn(a,"link",e),sn(a),r.head.appendChild(a)}}}function K1(e,n,r){It.S(e,n,r);var a=Tl;if(a&&e){var s=Yr(a).hoistableStyles,d=El(e);n=n||"default";var v=s.get(d);if(!v){var k={loading:0,preload:null};if(v=a.querySelector(Ci(d)))k.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},r),(r=nt.get(d))&&Js(e,r);var A=v=a.createElement("link");sn(A),pn(A,"link",e),A._p=new Promise(function(N,V){A.onload=N,A.onerror=V}),A.addEventListener("load",function(){k.loading|=1}),A.addEventListener("error",function(){k.loading|=2}),k.loading|=4,ao(v,n,a)}v={type:"stylesheet",instance:v,count:1,state:k},s.set(d,v)}}}function $1(e,n){It.X(e,n);var r=Tl;if(r&&e){var a=Yr(r).hoistableScripts,s=Cl(e),d=a.get(s);d||(d=r.querySelector(Ai(s)),d||(e=y({src:e,async:!0},n),(n=nt.get(s))&&Xs(e,n),d=r.createElement("script"),sn(d),pn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(s,d))}}function ev(e,n){It.M(e,n);var r=Tl;if(r&&e){var a=Yr(r).hoistableScripts,s=Cl(e),d=a.get(s);d||(d=r.querySelector(Ai(s)),d||(e=y({src:e,async:!0,type:"module"},n),(n=nt.get(s))&&Xs(e,n),d=r.createElement("script"),sn(d),pn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(s,d))}}function Xm(e,n,r,a){var s=(s=se.current)?io(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=El(r.href),r=Yr(s).hoistableStyles,a=r.get(n),a||(a={type:"style",instance:null,count:0,state:null},r.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=El(r.href);var d=Yr(s).hoistableStyles,v=d.get(e);if(v||(s=s.ownerDocument||s,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=s.querySelector(Ci(e)))&&!d._p&&(v.instance=d,v.state.loading=5),nt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},nt.set(e,r),d||nv(s,e,r,v.state))),n&&a===null)throw Error(o(528,""));return v}if(n&&a!==null)throw Error(o(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cl(r),r=Yr(s).hoistableScripts,a=r.get(n),a||(a={type:"script",instance:null,count:0,state:null},r.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function El(e){return'href="'+Jn(e)+'"'}function Ci(e){return'link[rel="stylesheet"]['+e+"]"}function Qm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function nv(e,n,r,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),pn(n,"link",r),sn(n),e.head.appendChild(n))}function Cl(e){return'[src="'+Jn(e)+'"]'}function Ai(e){return"script[async]"+e}function Zm(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Jn(r.href)+'"]');if(a)return n.instance=a,sn(a),a;var s=y({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),sn(a),pn(a,"style",s),ao(a,r.precedence,e),n.instance=a;case"stylesheet":s=El(r.href);var d=e.querySelector(Ci(s));if(d)return n.state.loading|=4,n.instance=d,sn(d),d;a=Qm(r),(s=nt.get(s))&&Js(a,s),d=(e.ownerDocument||e).createElement("link"),sn(d);var v=d;return v._p=new Promise(function(k,A){v.onload=k,v.onerror=A}),pn(d,"link",a),n.state.loading|=4,ao(d,r.precedence,e),n.instance=d;case"script":return d=Cl(r.src),(s=e.querySelector(Ai(d)))?(n.instance=s,sn(s),s):(a=r,(s=nt.get(d))&&(a=y({},r),Xs(a,s)),e=e.ownerDocument||e,s=e.createElement("script"),sn(s),pn(s,"link",a),e.head.appendChild(s),n.instance=s);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,ao(a,r.precedence,e));return n.instance}function ao(e,n,r){for(var a=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,d=s,v=0;v<a.length;v++){var k=a[v];if(k.dataset.precedence===n)d=k;else if(d!==s)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Js(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var oo=null;function Wm(e,n,r){if(oo===null){var a=new Map,s=oo=new Map;s.set(r,a)}else s=oo,a=s.get(r),a||(a=new Map,s.set(r,a));if(a.has(e))return a;for(a.set(e,null),r=r.getElementsByTagName(e),s=0;s<r.length;s++){var d=r[s];if(!(d[ql]||d[fn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=e+v;var k=a.get(v);k?k.push(d):a.set(v,[d])}}return a}function Km(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function tv(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $m(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rv(e,n,r,a){if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var s=El(a.href),d=n.querySelector(Ci(s));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uo.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,sn(d);return}d=n.ownerDocument||n,a=Qm(a),(s=nt.get(s))&&Js(a,s),d=d.createElement("link"),sn(d);var v=d;v._p=new Promise(function(k,A){v.onload=k,v.onerror=A}),pn(d,"link",a),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=uo.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Qs=0;function lv(e,n){return e.stylesheets&&e.count===0&&co(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var a=setTimeout(function(){if(e.stylesheets&&co(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Qs===0&&(Qs=62500*U1());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&co(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Qs?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function uo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)co(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var so=null;function co(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,so=new Map,n.forEach(iv,e),so=null,uo.call(e))}function iv(e,n){if(!(n.state.loading&4)){var r=so.get(e);if(r)var a=r.get(null);else{r=new Map,so.set(e,r);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<s.length;d++){var v=s[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),a=v)}a&&r.set(null,a)}s=n.instance,v=s.getAttribute("data-precedence"),d=r.get(v)||a,d===a&&r.set(null,s),r.set(v,s),this.count++,a=uo.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),d?d.parentNode.insertBefore(s,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),n.state.loading|=4}}var wi={$$typeof:L,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function av(e,n,r,a,s,d,v,k,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.hiddenUpdates=Go(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function ep(e,n,r,a,s,d,v,k,A,N,V,J){return e=new av(e,n,r,v,A,N,V,J,k),n=1,d===!0&&(n|=24),d=Ln(3,null,null,n),e.current=d,d.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:a,isDehydrated:r,cache:n},zu(d),e}function np(e){return e?(e=tl,e):tl}function tp(e,n,r,a,s,d){s=np(s),a.context===null?a.context=s:a.pendingContext=s,a=$t(n),a.payload={element:r},d=d===void 0?null:d,d!==null&&(a.callback=d),r=er(e,a,n),r!==null&&(Rn(r,e,n),ii(r,e,n))}function rp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Zs(e,n){rp(e,n),(e=e.alternate)&&rp(e,n)}function lp(e){if(e.tag===13||e.tag===31){var n=Tr(e,67108864);n!==null&&Rn(n,e,67108864),Zs(e,67108864)}}function ip(e){if(e.tag===13||e.tag===31){var n=Fn();n=Po(n);var r=Tr(e,n);r!==null&&Rn(r,e,n),Zs(e,n)}}var fo=!0;function ov(e,n,r,a){var s=H.T;H.T=null;var d=X.p;try{X.p=2,Ws(e,n,r,a)}finally{X.p=d,H.T=s}}function uv(e,n,r,a){var s=H.T;H.T=null;var d=X.p;try{X.p=8,Ws(e,n,r,a)}finally{X.p=d,H.T=s}}function Ws(e,n,r,a){if(fo){var s=Ks(a);if(s===null)Bs(e,n,a,ho,r),op(e,a);else if(cv(s,e,n,r,a))a.stopPropagation();else if(op(e,a),n&4&&-1<sv.indexOf(e)){for(;s!==null;){var d=Pr(s);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=vr(d.pendingLanes);if(v!==0){var k=d;for(k.pendingLanes|=2,k.entangledLanes|=2;v;){var A=1<<31-Fe(v);k.entanglements[1]|=A,v&=~A}mt(d),(_e&6)===0&&(Xa=bn()+500,Si(0))}}break;case 31:case 13:k=Tr(d,2),k!==null&&Rn(k,d,2),Za(),Zs(d,2)}if(d=Ks(a),d===null&&Bs(e,n,a,ho,r),d===s)break;s=d}s!==null&&a.stopPropagation()}else Bs(e,n,a,null,r)}}function Ks(e){return e=eu(e),$s(e)}var ho=null;function $s(e){if(ho=null,e=Gr(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ho=e,null}function ap(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vo()){case P:return 2;case $:return 8;case pe:case ke:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var ec=!1,fr=null,dr=null,hr=null,ji=new Map,Di=new Map,mr=[],sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function op(e,n){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ji.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(n.pointerId)}}function Mi(e,n,r,a,s,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:a,nativeEvent:d,targetContainers:[s]},n!==null&&(n=Pr(n),n!==null&&lp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function cv(e,n,r,a,s){switch(n){case"focusin":return fr=Mi(fr,e,n,r,a,s),!0;case"dragenter":return dr=Mi(dr,e,n,r,a,s),!0;case"mouseover":return hr=Mi(hr,e,n,r,a,s),!0;case"pointerover":var d=s.pointerId;return ji.set(d,Mi(ji.get(d)||null,e,n,r,a,s)),!0;case"gotpointercapture":return d=s.pointerId,Di.set(d,Mi(Di.get(d)||null,e,n,r,a,s)),!0}return!1}function up(e){var n=Gr(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,kf(e.priority,function(){ip(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,kf(e.priority,function(){ip(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Ks(e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);$o=a,r.target.dispatchEvent(a),$o=null}else return n=Pr(r),n!==null&&lp(n),e.blockedOn=r,!1;n.shift()}return!0}function sp(e,n,r){mo(e)&&r.delete(n)}function fv(){ec=!1,fr!==null&&mo(fr)&&(fr=null),dr!==null&&mo(dr)&&(dr=null),hr!==null&&mo(hr)&&(hr=null),ji.forEach(sp),Di.forEach(sp)}function po(e,n){e.blockedOn===n&&(e.blockedOn=null,ec||(ec=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,fv)))}var go=null;function cp(e){go!==e&&(go=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){go===e&&(go=null);for(var n=0;n<e.length;n+=3){var r=e[n],a=e[n+1],s=e[n+2];if(typeof a!="function"){if($s(a||r)===null)continue;break}var d=Pr(r);d!==null&&(e.splice(n,3),n-=3,Ku(d,{pending:!0,data:s,method:r.method,action:a},a,s))}}))}function Al(e){function n(A){return po(A,e)}fr!==null&&po(fr,e),dr!==null&&po(dr,e),hr!==null&&po(hr,e),ji.forEach(n),Di.forEach(n);for(var r=0;r<mr.length;r++){var a=mr[r];a.blockedOn===e&&(a.blockedOn=null)}for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)up(r),r.blockedOn===null&&mr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(a=0;a<r.length;a+=3){var s=r[a],d=r[a+1],v=s[Cn]||null;if(typeof d=="function")v||cp(r);else if(v){var k=null;if(d&&d.hasAttribute("formAction")){if(s=d,v=d[Cn]||null)k=v.formAction;else if($s(s)!==null)continue}else k=v.action;typeof k=="function"?r[a+1]=k:(r.splice(a,3),a-=3),cp(r)}}}function fp(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return s=v})},focusReset:"manual",scroll:"manual"})}function n(){s!==null&&(s(),s=null),a||setTimeout(r,20)}function r(){if(!a&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),s!==null&&(s(),s=null)}}}function nc(e){this._internalRoot=e}yo.prototype.render=nc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var r=n.current,a=Fn();tp(r,a,e,n,null,null)},yo.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tp(e.current,2,null,e,null,null),Za(),n[Vr]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sf();e={blockedOn:null,target:e,priority:n};for(var r=0;r<mr.length&&n!==0&&n<mr[r].priority;r++);mr.splice(r,0,e),r===0&&up(e)}};var dp=i.version;if(dp!=="19.2.0")throw Error(o(527,dp,"19.2.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var dv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Sn=vo.inject(dv),on=vo}catch{}}return zi.createRoot=function(e,n){if(!u(e))throw Error(o(299));var r=!1,a="",s=xh,d=bh,v=Sh;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=ep(e,1,!1,null,null,r,a,null,s,d,v,fp),e[Vr]=n.current,Ls(e),new nc(n)},zi.hydrateRoot=function(e,n,r){if(!u(e))throw Error(o(299));var a=!1,s="",d=xh,v=bh,k=Sh,A=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(k=r.onRecoverableError),r.formState!==void 0&&(A=r.formState)),n=ep(e,1,!0,n,r??null,a,s,A,d,v,k,fp),n.context=np(null),r=n.current,a=Fn(),a=Po(a),s=$t(a),s.callback=null,er(r,s,a),r=a,n.current.lanes=r,Fl(n,r),mt(n),e[Vr]=n.current,Ls(e),new yo(n)},zi.version="19.2.0",zi}var kp;function kv(){if(kp)return rc.exports;kp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),rc.exports=Sv(),rc.exports}var Tv=kv(),_=Pc();const Ag=Gc(_);var Tp="popstate";function Ev(t={}){function i(o,u){let{pathname:c,search:f,hash:h}=o.location;return Rc("",{pathname:c,search:f,hash:h},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(o,u){return typeof u=="string"?u:Gi(u)}return Av(i,l,null,t)}function Ze(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function ut(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Cv(){return Math.random().toString(36).substring(2,10)}function Ep(t,i){return{usr:t.state,key:t.key,idx:i}}function Rc(t,i,l=null,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof i=="string"?Ol(i):i,state:l,key:i&&i.key||o||Cv()}}function Gi({pathname:t="/",search:i="",hash:l=""}){return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function Ol(t){let i={};if(t){let l=t.indexOf("#");l>=0&&(i.hash=t.substring(l),t=t.substring(0,l));let o=t.indexOf("?");o>=0&&(i.search=t.substring(o),t=t.substring(0,o)),t&&(i.pathname=t)}return i}function Av(t,i,l,o={}){let{window:u=document.defaultView,v5Compat:c=!1}=o,f=u.history,h="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function y(){h="POP";let M=x(),w=M==null?null:M-p;p=M,m&&m({action:h,location:R.location,delta:w})}function S(M,w){h="PUSH";let B=Rc(R.location,M,w);p=x()+1;let L=Ep(B,p),Z=R.createHref(B);try{f.pushState(L,"",Z)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;u.location.assign(Z)}c&&m&&m({action:h,location:R.location,delta:1})}function b(M,w){h="REPLACE";let B=Rc(R.location,M,w);p=x();let L=Ep(B,p),Z=R.createHref(B);f.replaceState(L,"",Z),c&&m&&m({action:h,location:R.location,delta:0})}function E(M){return wv(M)}let R={get action(){return h},get location(){return t(u,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(Tp,y),m=M,()=>{u.removeEventListener(Tp,y),m=null}},createHref(M){return i(u,M)},createURL:E,encodeLocation(M){let w=E(M);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:S,replace:b,go(M){return f.go(M)}};return R}function wv(t,i=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(l,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:Gi(t);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function wg(t,i,l="/"){return jv(t,i,l,!1)}function jv(t,i,l,o){let u=typeof i=="string"?Ol(i):i,c=Vt(u.pathname||"/",l);if(c==null)return null;let f=jg(t);Dv(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=Iv(c);h=Uv(f[m],p,o)}return h}function jg(t,i=[],l=[],o="",u=!1){let c=(f,h,m=u,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&m)return;Ze(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let y=qt([o,x.relativePath]),S=l.concat(x);f.children&&f.children.length>0&&(Ze(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),jg(f.children,i,S,y,m)),!(f.path==null&&!f.index)&&i.push({path:y,score:Lv(y,f.index),routesMeta:S})};return t.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Dg(f.path))c(f,h,!0,m)}),i}function Dg(t){let i=t.split("/");if(i.length===0)return[];let[l,...o]=i,u=l.endsWith("?"),c=l.replace(/\?$/,"");if(o.length===0)return u?[c,""]:[c];let f=Dg(o.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),u&&h.push(...f),h.map(m=>t.startsWith("/")&&m===""?"/":m)}function Dv(t){t.sort((i,l)=>i.score!==l.score?l.score-i.score:Bv(i.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var Mv=/^:[\w-]+$/,Rv=3,zv=2,_v=1,Ov=10,Nv=-2,Cp=t=>t==="*";function Lv(t,i){let l=t.split("/"),o=l.length;return l.some(Cp)&&(o+=Nv),i&&(o+=zv),l.filter(u=>!Cp(u)).reduce((u,c)=>u+(Mv.test(c)?Rv:c===""?_v:Ov),o)}function Bv(t,i){return t.length===i.length&&t.slice(0,-1).every((o,u)=>o===i[u])?t[t.length-1]-i[i.length-1]:0}function Uv(t,i,l=!1){let{routesMeta:o}=t,u={},c="/",f=[];for(let h=0;h<o.length;++h){let m=o[h],p=h===o.length-1,x=c==="/"?i:i.slice(c.length)||"/",y=Do({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),S=m.route;if(!y&&p&&l&&!o[o.length-1].route.index&&(y=Do({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!y)return null;Object.assign(u,y.params),f.push({params:u,pathname:qt([c,y.pathname]),pathnameBase:Pv(qt([c,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(c=qt([c,y.pathnameBase]))}return f}function Do(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[l,o]=Hv(t.path,t.caseSensitive,t.end),u=i.match(l);if(!u)return null;let c=u[0],f=c.replace(/(.)\/+$/,"$1"),h=u.slice(1);return{params:o.reduce((p,{paramName:x,isOptional:y},S)=>{if(x==="*"){let E=h[S]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[S];return y&&!b?p[x]=void 0:p[x]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:t}}function Hv(t,i=!1,l=!0){ut(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let o=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(o.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(o.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),o]}function Iv(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return ut(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),t}}function Vt(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,o=t.charAt(l);return o&&o!=="/"?null:t.slice(l)||"/"}var Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qv=t=>Fv.test(t);function Vv(t,i="/"){let{pathname:l,search:o="",hash:u=""}=typeof t=="string"?Ol(t):t,c;if(l)if(qv(l))c=l;else{if(l.includes("//")){let f=l;l=l.replace(/\/\/+/g,"/"),ut(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${l}`)}l.startsWith("/")?c=Ap(l.substring(1),"/"):c=Ap(l,i)}else c=i;return{pathname:c,search:Yv(o),hash:Jv(u)}}function Ap(t,i){let l=i.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function uc(t,i,l,o){return`Cannot include a '${t}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gv(t){return t.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function Mg(t){let i=Gv(t);return i.map((l,o)=>o===i.length-1?l.pathname:l.pathnameBase)}function Rg(t,i,l,o=!1){let u;typeof t=="string"?u=Ol(t):(u={...t},Ze(!u.pathname||!u.pathname.includes("?"),uc("?","pathname","search",u)),Ze(!u.pathname||!u.pathname.includes("#"),uc("#","pathname","hash",u)),Ze(!u.search||!u.search.includes("#"),uc("#","search","hash",u)));let c=t===""||u.pathname==="",f=c?"/":u.pathname,h;if(f==null)h=l;else{let y=i.length-1;if(!o&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),y-=1;u.pathname=S.join("/")}h=y>=0?i[y]:"/"}let m=Vv(u,h),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var qt=t=>t.join("/").replace(/\/\/+/g,"/"),Pv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Yv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Jv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Xv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Qv(t){return t.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zg=["POST","PUT","PATCH","DELETE"];new Set(zg);var Zv=["GET",...zg];new Set(Zv);var Nl=_.createContext(null);Nl.displayName="DataRouter";var Oo=_.createContext(null);Oo.displayName="DataRouterState";_.createContext(!1);var _g=_.createContext({isTransitioning:!1});_g.displayName="ViewTransition";var Wv=_.createContext(new Map);Wv.displayName="Fetchers";var Kv=_.createContext(null);Kv.displayName="Await";var st=_.createContext(null);st.displayName="Navigation";var Ji=_.createContext(null);Ji.displayName="Location";var vt=_.createContext({outlet:null,matches:[],isDataRoute:!1});vt.displayName="Route";var Yc=_.createContext(null);Yc.displayName="RouteError";function $v(t,{relative:i}={}){Ze(Xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=_.useContext(st),{hash:u,pathname:c,search:f}=Qi(t,{relative:i}),h=c;return l!=="/"&&(h=c==="/"?l:qt([l,c])),o.createHref({pathname:h,search:f,hash:u})}function Xi(){return _.useContext(Ji)!=null}function ct(){return Ze(Xi(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Ji).location}var Og="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ng(t){_.useContext(st).static||_.useLayoutEffect(t)}function Jc(){let{isDataRoute:t}=_.useContext(vt);return t?dx():ex()}function ex(){Ze(Xi(),"useNavigate() may be used only in the context of a <Router> component.");let t=_.useContext(Nl),{basename:i,navigator:l}=_.useContext(st),{matches:o}=_.useContext(vt),{pathname:u}=ct(),c=JSON.stringify(Mg(o)),f=_.useRef(!1);return Ng(()=>{f.current=!0}),_.useCallback((m,p={})=>{if(ut(f.current,Og),!f.current)return;if(typeof m=="number"){l.go(m);return}let x=Rg(m,JSON.parse(c),u,p.relative==="path");t==null&&i!=="/"&&(x.pathname=x.pathname==="/"?i:qt([i,x.pathname])),(p.replace?l.replace:l.push)(x,p.state,p)},[i,l,c,u,t])}_.createContext(null);function Lg(){let{matches:t}=_.useContext(vt),i=t[t.length-1];return i?i.params:{}}function Qi(t,{relative:i}={}){let{matches:l}=_.useContext(vt),{pathname:o}=ct(),u=JSON.stringify(Mg(l));return _.useMemo(()=>Rg(t,JSON.parse(u),o,i==="path"),[t,u,o,i])}function nx(t,i){return Bg(t,i)}function Bg(t,i,l,o,u){Ze(Xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=_.useContext(st),{matches:f}=_.useContext(vt),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",y=h&&h.route;{let B=y&&y.path||"";Ug(p,!y||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let S=ct(),b;if(i){let B=typeof i=="string"?Ol(i):i;Ze(x==="/"||B.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${B.pathname}" was given in the \`location\` prop.`),b=B}else b=S;let E=b.pathname||"/",R=E;if(x!=="/"){let B=x.replace(/^\//,"").split("/");R="/"+E.replace(/^\//,"").split("/").slice(B.length).join("/")}let M=wg(t,{pathname:R});ut(y||M!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),ut(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ax(M&&M.map(B=>Object.assign({},B,{params:Object.assign({},m,B.params),pathname:qt([x,c.encodeLocation?c.encodeLocation(B.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?x:qt([x,c.encodeLocation?c.encodeLocation(B.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),f,l,o,u);return i&&w?_.createElement(Ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},w):w}function tx(){let t=fx(),i=Xv(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),l=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:c},"ErrorBoundary")," or"," ",_.createElement("code",{style:c},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},i),l?_.createElement("pre",{style:u},l):null,f)}var rx=_.createElement(tx,null),lx=class extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){this.props.onError?this.props.onError(t,i):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?_.createElement(vt.Provider,{value:this.props.routeContext},_.createElement(Yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ix({routeContext:t,match:i,children:l}){let o=_.useContext(Nl);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),_.createElement(vt.Provider,{value:t},l)}function ax(t,i=[],l=null,o=null,u=null){if(t==null){if(!l)return null;if(l.errors)t=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)t=l.matches;else return null}let c=t,f=l?.errors;if(f!=null){let x=c.findIndex(y=>y.route.id&&f?.[y.route.id]!==void 0);Ze(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,m=-1;if(l)for(let x=0;x<c.length;x++){let y=c[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=x),y.route.id){let{loaderData:S,errors:b}=l,E=y.route.loader&&!S.hasOwnProperty(y.route.id)&&(!b||b[y.route.id]===void 0);if(y.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=l&&o?(x,y)=>{o(x,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:Qv(l.matches),errorInfo:y})}:void 0;return c.reduceRight((x,y,S)=>{let b,E=!1,R=null,M=null;l&&(b=f&&y.route.id?f[y.route.id]:void 0,R=y.route.errorElement||rx,h&&(m<0&&S===0?(Ug("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):m===S&&(E=!0,M=y.route.hydrateFallbackElement||null)));let w=i.concat(c.slice(0,S+1)),B=()=>{let L;return b?L=R:E?L=M:y.route.Component?L=_.createElement(y.route.Component,null):y.route.element?L=y.route.element:L=x,_.createElement(ix,{match:y,routeContext:{outlet:x,matches:w,isDataRoute:l!=null},children:L})};return l&&(y.route.ErrorBoundary||y.route.errorElement||S===0)?_.createElement(lx,{location:l.location,revalidation:l.revalidation,component:R,error:b,children:B(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:p}):B()},null)}function Xc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ox(t){let i=_.useContext(Nl);return Ze(i,Xc(t)),i}function ux(t){let i=_.useContext(Oo);return Ze(i,Xc(t)),i}function sx(t){let i=_.useContext(vt);return Ze(i,Xc(t)),i}function Qc(t){let i=sx(t),l=i.matches[i.matches.length-1];return Ze(l.route.id,`${t} can only be used on routes that contain a unique "id"`),l.route.id}function cx(){return Qc("useRouteId")}function fx(){let t=_.useContext(Yc),i=ux("useRouteError"),l=Qc("useRouteError");return t!==void 0?t:i.errors?.[l]}function dx(){let{router:t}=ox("useNavigate"),i=Qc("useNavigate"),l=_.useRef(!1);return Ng(()=>{l.current=!0}),_.useCallback(async(u,c={})=>{ut(l.current,Og),l.current&&(typeof u=="number"?await t.navigate(u):await t.navigate(u,{fromRouteId:i,...c}))},[t,i])}var wp={};function Ug(t,i,l){!i&&!wp[t]&&(wp[t]=!0,ut(!1,l))}_.memo(hx);function hx({routes:t,future:i,state:l,unstable_onError:o}){return Bg(t,void 0,l,o,i)}function pt(t){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mx({basename:t="/",children:i=null,location:l,navigationType:o="POP",navigator:u,static:c=!1,unstable_useTransitions:f}){Ze(!Xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),m=_.useMemo(()=>({basename:h,navigator:u,static:c,unstable_useTransitions:f,future:{}}),[h,u,c,f]);typeof l=="string"&&(l=Ol(l));let{pathname:p="/",search:x="",hash:y="",state:S=null,key:b="default"}=l,E=_.useMemo(()=>{let R=Vt(p,h);return R==null?null:{location:{pathname:R,search:x,hash:y,state:S,key:b},navigationType:o}},[h,p,x,y,S,b,o]);return ut(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:_.createElement(st.Provider,{value:m},_.createElement(Ji.Provider,{children:i,value:E}))}function px({children:t,location:i}){return nx(zc(t),i)}function zc(t,i=[]){let l=[];return _.Children.forEach(t,(o,u)=>{if(!_.isValidElement(o))return;let c=[...i,u];if(o.type===_.Fragment){l.push.apply(l,zc(o.props.children,c));return}Ze(o.type===pt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=zc(o.props.children,c)),l.push(f)}),l}var Co="get",Ao="application/x-www-form-urlencoded";function No(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function gx(t){return No(t)&&t.tagName.toLowerCase()==="button"}function yx(t){return No(t)&&t.tagName.toLowerCase()==="form"}function vx(t){return No(t)&&t.tagName.toLowerCase()==="input"}function xx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bx(t,i){return t.button===0&&(!i||i==="_self")&&!xx(t)}var xo=null;function Sx(){if(xo===null)try{new FormData(document.createElement("form"),0),xo=!1}catch{xo=!0}return xo}var kx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sc(t){return t!=null&&!kx.has(t)?(ut(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ao}"`),null):t}function Tx(t,i){let l,o,u,c,f;if(yx(t)){let h=t.getAttribute("action");o=h?Vt(h,i):null,l=t.getAttribute("method")||Co,u=sc(t.getAttribute("enctype"))||Ao,c=new FormData(t)}else if(gx(t)||vx(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||h.getAttribute("action");if(o=m?Vt(m,i):null,l=t.getAttribute("formmethod")||h.getAttribute("method")||Co,u=sc(t.getAttribute("formenctype"))||sc(h.getAttribute("enctype"))||Ao,c=new FormData(h,t),!Sx()){let{name:p,type:x,value:y}=t;if(x==="image"){let S=p?`${p}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else p&&c.append(p,y)}}else{if(No(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Co,o=null,u=Ao,f=t}return c&&u==="text/plain"&&(f=c,c=void 0),{action:o,method:l.toLowerCase(),encType:u,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zc(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function Ex(t,i,l){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o.pathname==="/"?o.pathname=`_root.${l}`:i&&Vt(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.${l}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${l}`,o}async function Cx(t,i){if(t.id in i)return i[t.id];try{let l=await import(t.module);return i[t.id]=l,l}catch(l){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ax(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function wx(t,i,l){let o=await Promise.all(t.map(async u=>{let c=i.routes[u.route.id];if(c){let f=await Cx(c,l);return f.links?f.links():[]}return[]}));return Rx(o.flat(1).filter(Ax).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function jp(t,i,l,o,u,c){let f=(m,p)=>l[p]?m.route.id!==l[p].route.id:!0,h=(m,p)=>l[p].pathname!==m.pathname||l[p].route.path?.endsWith("*")&&l[p].params["*"]!==m.params["*"];return c==="assets"?i.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?i.filter((m,p)=>{let x=o.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let y=m.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function jx(t,i,{includeHydrateFallback:l}={}){return Dx(t.map(o=>{let u=i.routes[o.route.id];if(!u)return[];let c=[u.module];return u.clientActionModule&&(c=c.concat(u.clientActionModule)),u.clientLoaderModule&&(c=c.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(c=c.concat(u.hydrateFallbackModule)),u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function Dx(t){return[...new Set(t)]}function Mx(t){let i={},l=Object.keys(t).sort();for(let o of l)i[o]=t[o];return i}function Rx(t,i){let l=new Set;return new Set(i),t.reduce((o,u)=>{let c=JSON.stringify(Mx(u));return l.has(c)||(l.add(c),o.push({key:c,link:u})),o},[])}function Hg(){let t=_.useContext(Nl);return Zc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function zx(){let t=_.useContext(Oo);return Zc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Wc=_.createContext(void 0);Wc.displayName="FrameworkContext";function Ig(){let t=_.useContext(Wc);return Zc(t,"You must render this element inside a <HydratedRouter> element"),t}function _x(t,i){let l=_.useContext(Wc),[o,u]=_.useState(!1),[c,f]=_.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:y}=i,S=_.useRef(null);_.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let R=w=>{w.forEach(B=>{f(B.isIntersecting)})},M=new IntersectionObserver(R,{threshold:.5});return S.current&&M.observe(S.current),()=>{M.disconnect()}}},[t]),_.useEffect(()=>{if(o){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[o]);let b=()=>{u(!0)},E=()=>{u(!1),f(!1)};return l?t!=="intent"?[c,S,{}]:[c,S,{onFocus:_i(h,b),onBlur:_i(m,E),onMouseEnter:_i(p,b),onMouseLeave:_i(x,E),onTouchStart:_i(y,b)}]:[!1,S,{}]}function _i(t,i){return l=>{t&&t(l),l.defaultPrevented||i(l)}}function Ox({page:t,...i}){let{router:l}=Hg(),o=_.useMemo(()=>wg(l.routes,t,l.basename),[l.routes,t,l.basename]);return o?_.createElement(Lx,{page:t,matches:o,...i}):null}function Nx(t){let{manifest:i,routeModules:l}=Ig(),[o,u]=_.useState([]);return _.useEffect(()=>{let c=!1;return wx(t,i,l).then(f=>{c||u(f)}),()=>{c=!0}},[t,i,l]),o}function Lx({page:t,matches:i,...l}){let o=ct(),{manifest:u,routeModules:c}=Ig(),{basename:f}=Hg(),{loaderData:h,matches:m}=zx(),p=_.useMemo(()=>jp(t,i,m,u,o,"data"),[t,i,m,u,o]),x=_.useMemo(()=>jp(t,i,m,u,o,"assets"),[t,i,m,u,o]),y=_.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let E=new Set,R=!1;if(i.forEach(w=>{let B=u.routes[w.route.id];!B||!B.hasLoader||(!p.some(L=>L.route.id===w.route.id)&&w.route.id in h&&c[w.route.id]?.shouldRevalidate||B.hasClientLoader?R=!0:E.add(w.route.id))}),E.size===0)return[];let M=Ex(t,f,"data");return R&&E.size>0&&M.searchParams.set("_routes",i.filter(w=>E.has(w.route.id)).map(w=>w.route.id).join(",")),[M.pathname+M.search]},[f,h,o,u,p,i,t,c]),S=_.useMemo(()=>jx(x,u),[x,u]),b=Nx(x);return _.createElement(_.Fragment,null,y.map(E=>_.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...l})),S.map(E=>_.createElement("link",{key:E,rel:"modulepreload",href:E,...l})),b.map(({key:E,link:R})=>_.createElement("link",{key:E,nonce:l.nonce,...R})))}function Bx(...t){return i=>{t.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var Fg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fg&&(window.__reactRouterVersion="7.10.1")}catch{}function Ux({basename:t,children:i,unstable_useTransitions:l,window:o}){let u=_.useRef();u.current==null&&(u.current=Ev({window:o,v5Compat:!0}));let c=u.current,[f,h]=_.useState({action:c.action,location:c.location}),m=_.useCallback(p=>{l===!1?h(p):_.startTransition(()=>h(p))},[l]);return _.useLayoutEffect(()=>c.listen(m),[c,m]),_.createElement(mx,{basename:t,children:i,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:l===!0})}var qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gn=_.forwardRef(function({onClick:i,discover:l="render",prefetch:o="none",relative:u,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:x,viewTransition:y,...S},b){let{basename:E,unstable_useTransitions:R}=_.useContext(st),M=typeof p=="string"&&qg.test(p),w,B=!1;if(typeof p=="string"&&M&&(w=p,Fg))try{let I=new URL(window.location.href),ne=p.startsWith("//")?new URL(I.protocol+p):new URL(p),te=Vt(ne.pathname,E);ne.origin===I.origin&&te!=null?p=te+ne.search+ne.hash:B=!0}catch{ut(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=$v(p,{relative:u}),[Z,ee,F]=_x(o,S),W=Fx(p,{replace:f,state:h,target:m,preventScrollReset:x,relative:u,viewTransition:y,unstable_useTransitions:R});function fe(I){i&&i(I),I.defaultPrevented||W(I)}let ue=_.createElement("a",{...S,...F,href:w||L,onClick:B||c?i:fe,ref:Bx(b,ee),target:m,"data-discover":!M&&l==="render"?"true":void 0});return Z&&!M?_.createElement(_.Fragment,null,ue,_.createElement(Ox,{page:L})):ue});gn.displayName="Link";var wo=_.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:o="",end:u=!1,style:c,to:f,viewTransition:h,children:m,...p},x){let y=Qi(f,{relative:p.relative}),S=ct(),b=_.useContext(Oo),{navigator:E,basename:R}=_.useContext(st),M=b!=null&&Yx(y)&&h===!0,w=E.encodeLocation?E.encodeLocation(y).pathname:y.pathname,B=S.pathname,L=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;l||(B=B.toLowerCase(),L=L?L.toLowerCase():null,w=w.toLowerCase()),L&&R&&(L=Vt(L,R)||L);const Z=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let ee=B===w||!u&&B.startsWith(w)&&B.charAt(Z)==="/",F=L!=null&&(L===w||!u&&L.startsWith(w)&&L.charAt(w.length)==="/"),W={isActive:ee,isPending:F,isTransitioning:M},fe=ee?i:void 0,ue;typeof o=="function"?ue=o(W):ue=[o,ee?"active":null,F?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let I=typeof c=="function"?c(W):c;return _.createElement(gn,{...p,"aria-current":fe,className:ue,ref:x,style:I,to:f,viewTransition:h},typeof m=="function"?m(W):m)});wo.displayName="NavLink";var Hx=_.forwardRef(({discover:t="render",fetcherKey:i,navigate:l,reloadDocument:o,replace:u,state:c,method:f=Co,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:y,...S},b)=>{let{unstable_useTransitions:E}=_.useContext(st),R=Gx(),M=Px(h,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",B=typeof h=="string"&&qg.test(h),L=Z=>{if(m&&m(Z),Z.defaultPrevented)return;Z.preventDefault();let ee=Z.nativeEvent.submitter,F=ee?.getAttribute("formmethod")||f,W=()=>R(ee||Z.currentTarget,{fetcherKey:i,method:F,navigate:l,replace:u,state:c,relative:p,preventScrollReset:x,viewTransition:y});E&&l!==!1?_.startTransition(()=>W()):W()};return _.createElement("form",{ref:b,method:w,action:M,onSubmit:o?m:L,...S,"data-discover":!B&&t==="render"?"true":void 0})});Hx.displayName="Form";function Ix(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vg(t){let i=_.useContext(Nl);return Ze(i,Ix(t)),i}function Fx(t,{target:i,replace:l,state:o,preventScrollReset:u,relative:c,viewTransition:f,unstable_useTransitions:h}={}){let m=Jc(),p=ct(),x=Qi(t,{relative:c});return _.useCallback(y=>{if(bx(y,i)){y.preventDefault();let S=l!==void 0?l:Gi(p)===Gi(x),b=()=>m(t,{replace:S,state:o,preventScrollReset:u,relative:c,viewTransition:f});h?_.startTransition(()=>b()):b()}},[p,m,x,l,o,i,t,u,c,f,h])}var qx=0,Vx=()=>`__${String(++qx)}__`;function Gx(){let{router:t}=Vg("useSubmit"),{basename:i}=_.useContext(st),l=cx(),o=t.fetch,u=t.navigate;return _.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:x,body:y}=Tx(c,i);if(f.navigate===!1){let S=f.fetcherKey||Vx();await o(S,l,f.action||h,{preventScrollReset:f.preventScrollReset,formData:x,body:y,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await u(f.action||h,{preventScrollReset:f.preventScrollReset,formData:x,body:y,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:l,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,u,i,l])}function Px(t,{relative:i}={}){let{basename:l}=_.useContext(st),o=_.useContext(vt);Ze(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),c={...Qi(t||".",{relative:i})},f=ct();if(t==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(y=>y).forEach(y=>h.append("index",y));let x=h.toString();c.search=x?`?${x}`:""}}return(!t||t===".")&&u.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(c.pathname=c.pathname==="/"?l:qt([l,c.pathname])),Gi(c)}function Yx(t,{relative:i}={}){let l=_.useContext(_g);Ze(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Vg("useViewTransitionState"),u=Qi(t,{relative:i});if(!l.isTransitioning)return!1;let c=Vt(l.currentLocation.pathname,o)||l.currentLocation.pathname,f=Vt(l.nextLocation.pathname,o)||l.nextLocation.pathname;return Do(u.pathname,f)!=null||Do(u.pathname,c)!=null}const Jx=()=>{const{pathname:t}=ct();return _.useEffect(()=>{window.scrollTo(0,0)},[t]),null},Xx=`요즘 개발자들 사이에서 이런 말, 한 번쯤은 들어봤을 거다.\r
\r
> “코딩? 이젠 AI 쓰면 되지 않냐?”\r
>\r
> “유지보수도 이제 AI가 알아서 해줄 텐데…”\r
\r
겉으로 들으면 그럴싸하다.\r
\r
나도 ChatGPT, Copilot 같은 도구를 매일 쓰고 있고, 확실히 **“손으로 타이핑하는 일”** 은 줄어들고 있다.\r
\r
실제로 VTDM이라는 프로젝트의 개선/유지보수 작업을 혼자 맡았을 때도, 나는 AI를 꽤 공격적으로 활용했다.\r
\r
인수인계 시간은 길지 않았고, 이미 돌아가고 있는 서비스에 개선·요구사항은 계속 들어오는 상황이었다.\r
\r
- 기존 구조 전체를 완벽히 이해할 시간은 부족하고,\r
- 그렇다고 “모릅니다”라고 하며 일을 거절할 수도 없고.\r
\r
그래서 내가 선택한 전략은 이거였다.\r
\r
> “일단 내가 이해한 요구사항과 지금까지 파악한 구조를 최대한 텍스트로 정리해서\r
>\r
> AI에게 던져놓고, 구현/개선은 AI를 최대한 부려먹자.”\r
\r
실제로 이 방식은 **꽤 잘 먹혔다.**\r
\r
- 구현 속도는 빨라졌고,\r
- 작은 기능 추가나 리팩토링은 AI 도움으로 금방금방 처리됐고,\r
- 눈에 보이는 개선도 꾸준히 쌓였다.\r
\r
그런데 어느 순간 이런 생각이 들기 시작했다.\r
\r
> “내가 직접 코드를 치는 시간은 점점 줄어드는데,\r
>\r
> **이 시스템을 이해하는 비용은 줄지 않고 오히려 늘어나고 있는 것 같다.**\r
>\r
> 이게 과연 옳은 상황인가?”\r
\r
이 글은 그 질문에서 시작한다.\r
\r
---\r
\r
## 1. 유지보수의 본질은 “코드 몇 줄 고치는 것”이 아니다\r
\r
VTDM를 포함해서, 유지보수 작업을 해본 사람은 안다.\r
\r
우리가 시간을 쓰는 포인트는 대부분 **타이핑**이 아니라 **이해**다.\r
\r
조금만 쪼개보면 유지보수는 대략 이런 단계를 거친다.\r
\r
1. **도메인 이해**\r
   - 이 기능이 “왜” 존재하는지?\r
   - 어떤 비즈니스 규칙/정책/예외를 만족해야 하는지?\r
2. **현재 구조 이해**\r
   - 이 코드가 어느 모듈/서비스/컴포넌트와 연결되어 있는지?\r
   - 바꿨을 때 어디까지 파급효과가 갈 수 있는지?\r
3. **변경 설계**\r
   - 어디를 수정하고, 어디는 건드리면 안 되는지?\r
   - 추상화 수준을 올릴지 내릴지?\r
   - 나중에 다시 바뀔 걸 감안하면 어떤 구조가 버틸 수 있는지?\r
4. **구현 + 테스트**\r
   - 실제 코드 수정\r
   - 테스트 작성/수정\r
   - 배포/롤백 전략까지 포함한 검증\r
\r
AI가 가장 잘 도와줄 수 있는 부분은 **4번**이다.\r
\r
우리가 생각한 설계를 구현해 주고, 코드 템플릿을 만들어주고, 테스트 코드까지 어느 정도 뽑아줄 수 있다.\r
\r
반대로, **1~3번** 에 해당하는:\r
\r
- 도메인/문제 정의\r
- 아키텍처 설계\r
- 변경 영향 범위 판단\r
\r
이 부분은 여전히 **사람의** 역할이 중요하다.\r
\r
VTDM 작업 때 내가 느꼈던 이상한 감각도 여기서 왔다.\r
\r
- “코드 수정” 그 자체는 AI가 많이 대신해 주는데,\r
- 정작 **내가 감당해야 하는 이해 비용과 책임** 은 줄지 않는다.\r
- 오히려 _“AI가 바꿔놓은 코드까지 포함해서”_ 이해해야 할 범위가 늘어난다.\r
\r
> 개선은 계속 되는데,\r
>\r
> 내가 시스템 전체를 “제대로 이해하고 있다”는 느낌은 점점 안 든다.\r
>\r
> 이게 과연 건강한 성장일까?\r
\r
---\r
\r
## 2. 프롬프트 엔지니어링 = 새로운 설계 방식\r
\r
AI를 쓸 때 우리가 작성하는 프롬프트는 사실 **요구사항 + 설계 + 제약 조건이 섞인 자유형 명세서**에 가깝다.\r
\r
예를 들어, 같은 기능이라도 이런 차이가 있다.\r
\r
- “로그인 화면 만들어줘”\r
- “이메일/비밀번호 기반 로그인 폼을 만들고,\r
  - 입력값은 클라이언트에서 1차 검증,\r
  - 서버 에러 메시지는 토스트로 노출,\r
  - 로딩 상태/에러 상태를 명확하게 분리,\r
  - React + Zustand 조합,\r
  - 나중에 소셜 로그인이 추가될 걸 감안해서 확장 가능한 구조로 작성해줘”\r
\r
둘 다 “로그인 화면”이라는 기능을 요구하지만,\r
\r
**결과물의 구조·품질·유지보수성은 완전 달라진다.**\r
\r
여기서 중요한 포인트:\r
\r
> 프롬프트를 잘 쓴다는 건\r
>\r
> 단순히 AI에게 말을 예쁘게 하는것이 아니라,\r
>\r
> 문제를 제대로 정의하고, 제약을 설정하고, 설계 의도를 언어로 풀어낼 수 있다는 뜻이다.\r
\r
나는 VTDM 작업을 하면서 이걸 아주 많이 느꼈다.\r
\r
- 내가 도메인/요구사항을 대충 이해한 상태에서 AI에게 시키면\r
  → 코드도 그 수준에서 “대충” 나온다.\r
- 내가 요구사항/맥락을 깊게 이해하고,\r
  엣지 케이스까지 프롬프트에 녹여서 지시하면\r
  → 코드도 훨씬 안정적이고, 나중에 수정하기 편한 구조로 나온다.\r
\r
그래서 지금은 이렇게 생각한다.\r
\r
> “프롬프트 엔지니어링”은 AI와 잘 노는 기술이 아니라,\r
>\r
> **엔지니어링 능력을 텍스트로 표현하는 새로운 인터페이스**다.\r
\r
문제는, 이게 또 다른 종류의 부담을 만든다는 것이다.\r
\r
- 코드를 직접 치는 시간은 줄었는데,\r
- 오히려 **프롬프트를 잘 쓰기 위한 이해/설계 시간**은 더 늘어난다.\r
\r
즉, VTDM에서 느꼈던 그 기묘한 감각:\r
\r
> “손으로 치는 코드는 줄어가는데,\r
>\r
> 머리로 이해해야 하는 범위와 책임은 오히려 늘어나는 상태”\r
\r
이건 이상한 게 아니라,\r
\r
어쩌면 **“AI 도입 초기에 자연스럽게 거쳐야 할 과도기 상태”** 일 수도 있다.\r
\r
---\r
\r
## 3. Vibe Coding: 어디까지는 좋고, 어디부터는 위험한가\r
\r
“바이브 코딩(vibe coding)”이라는 말도 요즘 많이 보인다.\r
\r
AI랑 이런저런 대화를 주고받으면서 적당히 신나게 코드를 만들어 가는 방식.\r
\r
솔직히 말해서,\r
\r
**토이 프로젝트, 개인 실험, 작은 사이드 프로젝트**에서는\r
\r
이 방식이 정말 잘 먹힌다. 나도 이런 상황에서는 그냥 즐긴다.\r
\r
문제는, VTDM처럼:\r
\r
- 실제 팀이 쓰고,\r
- 고객/실제 업무가 걸려 있고,\r
- 계속해서 요구사항과 유지보수가 발생하는 시스템에\r
\r
이 vibe를 그대로 가져올 때이다.\r
\r
이런 시스템에서는,\r
\r
- 변경의 파급효과를 예측해야 하고\r
- 장애/보안/규격 측면에서의 리스크를 관리해야 하고\r
- 팀이 교체되어도 이해 가능한 구조를 유지해야 한다.\r
\r
여기서 만약\r
\r
> “어차피 나중에 AI가 또 잘 바꿔주겠지”\r
\r
라는 마인드로 계속 덕지덕지 붙이기만 하면,\r
\r
- **코드는 점점 복잡해지고**\r
- **이해 비용은 기하급수적으로 늘고**\r
- 나중에는 AI에게 던져도 “뭐가 맞는지 내가 판단할 수 없는 상태”가 올 수 있다. (실제로 오기도 했다.)\r
\r
VTDM 개선 작업을 하면서 내가 느낀 불편함은 바로 이 지점이었다.\r
\r
> “지금은 개선이 잘 되고 있는 것처럼 보이는데,\r
>\r
> 이 구조를 1~2년 뒤에 누군가에게 넘겨줘도 괜찮을까?”\r
\r
---\r
\r
## 4. AI가 도와줄 수 있는 것 vs 절대 넘기면 안 되는 것\r
\r
AI를 “과대평가”하지도, “과소평가”하지도 않으려면\r
\r
역할을 명확히 나눌 필요가 있다.\r
\r
### AI가 정말 잘하는 것\r
\r
- 반복적인 패턴 변환 (JS → TS, 스타일 정리, API 호출 패턴 통일 등)\r
- 보일러플레이트 코드 생성 (API 클라이언트, DTO, 폼 코드 등)\r
- 테스트 코드/문서 초안 작성\r
- 함수/파일 단위의 코드 설명 및 리뷰 보조\r
\r
실제로 VTDM에서도 이런 일들은 AI 덕을 많이 봤다.\r
\r
- 반복되는 CRUD/폼 처리\r
- 비슷한 패턴의 페이지/컴포넌트들\r
- 타입 보강, 리팩토링 초안\r
\r
이건 AI한테 시켜놓고, 나는 그만큼 도메인 이해와 구조 고민에 더 시간을 쓸 수 있었다.\r
\r
### AI에게 넘기면 위험한 것\r
\r
반대로, 이런 것들은 여전히 **사람의 역할이** 가장 중요하다고 생각한다.\r
\r
- 이 변경이 **비즈니스적으로** 맞는지 판단\r
- 도메인 전문가들이 합의한 규칙/정책/예외를 이해하고 반영\r
- 우리 회사의 인프라/조직 구조/프로세스를 고려한 변경 설계\r
- 장애 발생 시 “왜 이런 설계를 했는지”까지 설명해야 하는 책임\r
\r
AI는 말 그대로 **강력한 공구**다.\r
\r
> 어디를 파낼지, 어디를 남길지,\r
>\r
> 어느 정도까지 깊게 들어갈지는\r
>\r
> 결국 사람이 결정해야 한다.\r
\r
---\r
\r
## 5. 그럼, VTDM에서 내가 느낀 그 상황은 “옳은가?”\r
\r
이제 처음 질문으로 돌아가 보자.\r
\r
> “나는 AI를 열심히 써서 VTDM를 개선하고 있고,\r
>\r
> 코드를 직접 치는 시간은 줄어들었고,\r
>\r
> 개선 자체는 잘 되고 있다.\r
>\r
> 하지만 이해 비용은 줄지 않고, 오히려 늘어나는 느낌이다.\r
>\r
> 이게 과연 옳은 상황일까?”\r
\r
내 결론은 이렇다.\r
\r
1. **단기적으로는 꽤 괜찮은 전략일 수 있다.**\r
   - 인수인계 시간이 짧았고,\r
   - 시스템 전체를 한 번에 다 이해할 수 없는 상황에서,\r
   - “요구사항을 빠르게 반영하면서, 동시에 맥락을 점진적으로 넓혀가는 전략”으로서는 충분히 의미가 있다.\r
2. **하지만 그대로 계속 가면, 중장기적으로 리스크가 된다.**\r
   - 이해되지 않은 채로 AI가 바꾼 코드가 쌓이면,\r
   - 나중에는 나조차 “왜 이렇게 됐는지” 설명하기 어려운 상태에 도달한다.\r
   - 그 순간부터는 AI한테 던져도, 그 결과를 내가 검증할 수가 없다. (가장 무서운 지점)\r
\r
그래서 내가 요즘 스스로에게 걸어놓은 기준은 이거다.\r
\r
- **“내가 이해하지 못하는 코드/설계는 승인하지 않는다.”**\r
- AI가 짜준 코드라도,\r
  - 내가 디버깅할 수 있을 정도로\r
  - 흐름과 책임을 설명할 수 있을 정도로\r
  - 최소한의 그림은 잡힌 상태가 아니면\r
    → 그냥 다시 짜거나, 더 단순한 구조를 요구한다.\r
\r
그리고 가능하면 이런 식으로 “지식 부채”를 같이 갚으려고 한다.\r
\r
- 기능 개발을 할 때\r
  - 관련된 모듈/도메인에 대한 **간단한 다이어그램** 하나씩 추가\r
  - “이 변경이 왜 이렇게 설계되었는지”에 대한 **두세 줄 메모(주석)** 남기기\r
- 도메인 단위로 **폴더/상태/API** 를 정리하는 리팩토링을\r
  작은 단위로 조금씩 끼워 넣기 (FSD/도메인 아키텍처 쪽 고민이 여기 붙음)\r
\r
즉,\r
\r
> “AI를 안 쓰자”가 아니라,\r
>\r
> “AI를 쓰면서도 내가 감당 가능한 이해 범위를 유지하자”에 가깝다.\r
\r
---\r
\r
## 6. 앞으로 개발자의 역할은 어떻게 바뀔까?\r
\r
이 모든 경험을 통해 지금은 이렇게 생각하게 됐다.\r
\r
- “AI 쓰면 되지 않냐”는 말은\r
  개발을 단순 구현 노동으로 보는 사람의 관점에 가깝고,\r
- “AI를 써도 설계·도메인·품질 책임은 사람이 진다”는 말은\r
  현업 엔지니어 관점에 훨씬 가깝다.\r
\r
AI가 코드를 대신 써줄 수는 있다.\r
\r
하지만,\r
\r
> “무엇을, 어떻게 만들어야 하는가?”를 결정하는 일,\r
> 그리고 그 결정에 책임지는 일은\r
> 아직은, 그리고 꽤 오랫동안, 사람의 몫이다.\r
\r
VTDM 개선 작업을 하면서 나는 그걸 더 강하게 느끼게 됐다.\r
\r
- AI 덕분에 **개선 속도는 빨라졌고**,\r
- 동시에 **내가 책임져야 할 이해/설계의 범위도 커졌고**,\r
- 그래서 그 두 가지를 어떻게 균형 맞출지 계속 고민하는 중이다.\r
\r
아마 이 균형을 어디에 두느냐가,\r
\r
앞으로 개발자 커리어에서 중요한 선택 포인트가 될 것 같다.\r
\r
AI가 내 일을 “빼앗아가는 도구”가 아니라,\r
\r
**내가 책임지는 범위를 더 넓혀주는 도구**가 되도록 쓰고 싶다.\r
\r
그리고 지금 그 중간 지점 어딘가에서,\r
\r
하루하루 삽질하면서 감을 잡아가는 중이다.\r
`,Qx=`JS 공부하다 보면 어느 순간 이런 상태가 된다.\r
\r
> “콜스택? 이벤트루프? 비동기?\r
>\r
> 머리로는 아는데… 왜 그런지 느낌이 안 와…”\r
\r
그래서 오늘은 **기본기에 충실하게**\r
\r
“JS가 어떻게 실행되고, 비동기는 어떻게 굴러가며, 브라우저/Node는 뭐가 다른지”를 **뼈대 중심**으로 정리해본다.\r
\r
---\r
\r
## 0. 한 문장 요약부터\r
\r
JS의 실행은 결국 이거다.\r
\r
> JS는 싱글 스레드로 콜스택에서 실행되고, 비동기는 호스트(브라우저/Node)가 맡았다가 큐에 넣고, 이벤트 루프가 스택이 빌 때 다시 실행시킨다.\r
\r
---\r
\r
## 1. JS는 어디서 실행되냐?\r
\r
### 브라우저\r
\r
브라우저는 내부에 **JS 엔진**이 있다.\r
\r
- Chrome / Edge: V8\r
- Firefox: SpiderMonkey\r
- Safari: JavaScriptCore\r
\r
브라우저에서 JS는 보통 HTML 파싱 중 \`<script>\` 만나면 실행된다.\r
\r
(기본은 DOM 생성 잠깐 멈추고 JS부터 실행하는 흐름)\r
\r
### Node.js\r
\r
Node는 브라우저 없이도 JS를 돌리게 해주는 런타임.\r
\r
- JS 엔진(V8 같은 것) + 시스템 기능(파일, 네트워크 등)을 묶어줌\r
- 이벤트 루프/I/O는 보통 **libuv** 기반\r
\r
즉 **브라우저냐 Node냐**는 “JS 문법” 차이가 아니라,\r
\r
> JS 엔진이 붙어있는 ‘호스트 환경’이 다르다\r
>\r
> (브라우저는 DOM/렌더링, Node는 파일/서버/CLI)\r
\r
---\r
\r
## 2. JS 엔진의 핵심 구조: Heap + Call Stack\r
\r
JS 실행 원리를 이해할 때 제일 먼저 잡아야 할 두 개:\r
\r
### 2-1) Memory Heap\r
\r
- 객체/배열/함수 같은 **데이터 덩어리**가 저장되는 공간\r
- 참조가 끊기면 GC가 정리함 (가비지 컬렉션)\r
\r
### 2-2) Call Stack\r
\r
- “지금 실행 중인 함수가 뭔지”를 쌓아두는 스택(LIFO)\r
- **함수 호출 → push**, 함수 종료 → pop\r
\r
예를 들어 이런 코드:\r
\r
\`\`\`jsx\r
functionadd(a, b) {\r
return a + b;\r
}\r
\r
functionavg(a, b) {\r
returnadd(a, b) /2;\r
}\r
\r
console.log(avg(10,20));\r
\`\`\`\r
\r
실행 흐름 느낌:\r
\r
1. \`console.log(...)\` push\r
2. \`avg(...)\` push\r
3. \`add(...)\` push\r
4. add 끝 → pop\r
5. avg 끝 → pop\r
6. log 끝 → pop\r
\r
**스택이 비는 순간**이 엄청 중요하다.\r
\r
왜냐면 그때 비동기 콜백들이 “들어올 기회”를 얻기 때문.\r
\r
---\r
\r
## 3. JS는 싱글 스레드다 (이게 모든 것의 시작)\r
\r
JS는 기본적으로 **한 번에 한 줄기 실행(싱글 스레드)** 이다.\r
\r
그래서 콜스택에 무거운 일이 걸리면:\r
\r
- 클릭 이벤트 처리도 못 하고\r
- setTimeout 콜백도 못 하고\r
- 화면 업데이트도 밀리고\r
- 체감은 “버벅임”으로 나타남\r
\r
즉,\r
\r
> 메인 스레드(콜스택)가 막히면 모든 게 멈춘다.\r
\r
그런데도 웹에서는 “동시에 여러 일”이 되는 것처럼 보이잖아?\r
\r
그걸 가능하게 하는 게 다음 파트.\r
\r
---\r
\r
## 4. 비동기는 누가 해주냐? (Web APIs / Node APIs)\r
\r
중요 포인트:\r
\r
> setTimeout, 네트워크 요청, DOM 이벤트 같은 건\r
>\r
> **JS 엔진이 직접 처리하는 게 아니다.**\r
\r
### 브라우저라면\r
\r
- Web APIs(타이머, fetch/XHR, DOM 이벤트 등)가 맡는다.\r
\r
### Node라면\r
\r
- Node의 시스템 API(파일 I/O, 네트워크 등)가 맡고\r
- 내부적으로 이벤트 루프/libuv가 돌려준다.\r
\r
즉 JS는 “요청만 던지고”, 실제 작업은 호스트가 처리한 뒤\r
\r
완료되면 “콜백을 큐에 넣어” 다시 JS로 돌아오게 한다.\r
\r
---\r
\r
## 5. 큐가 2개다: Task Queue / Microtask Queue\r
\r
이거 체감상 제일 중요함. 실행 순서가 여기서 갈린다.\r
\r
### 5-1) Task Queue (매크로태스크)\r
\r
대략 이런 애들이 여기 들어온다:\r
\r
- \`setTimeout\`, \`setInterval\`\r
- 사용자 이벤트(click 등)\r
- (환경에 따라) 메시지 이벤트 등\r
\r
### 5-2) Microtask Queue\r
\r
대략 이런 애들이 여기에 들어온다:\r
\r
- \`Promise.then / catch / finally\`\r
- \`queueMicrotask\`\r
- (브라우저) MutationObserver 등\r
\r
그리고 **마이크로태스크가 우선순위가 더 높다.**\r
\r
---\r
\r
## 6. Event Loop: “스택 비면, 큐에서 꺼내서 실행”\r
\r
이벤트 루프를 어렵게 말하면 복잡한데, 진짜 뼈대는 다음과 같다.\r
\r
1. 콜스택이 비었나 확인\r
2. 비었으면 **Task Queue에서 하나 꺼내 실행**\r
3. 그 Task가 끝나면 **Microtask를 먼저 싹 비움**\r
4. 다음 Task로 넘어감\r
\r
여기서 “마이크로태스크를 먼저 싹 비운다”가 포인트.\r
\r
---\r
\r
## 7. 실행 순서 감 잡기 예제 (국룰)\r
\r
\`\`\`jsx\r
console.log("A");\r
\r
setTimeout(() => console.log("B"), 0);\r
\r
Promise.resolve().then(() => console.log("C"));\r
\r
console.log("D");\r
\`\`\`\r
\r
대부분 결과:\r
\r
> A → D → C → B\r
\r
이유:\r
\r
- A, D는 동기라서 콜스택에서 즉시 실행\r
- Promise.then은 **Microtask**\r
- setTimeout은 **Task**\r
- 그래서 **microtask가 task보다 먼저 끼어든다**\r
\r
---\r
\r
## 8. “0ms setTimeout인데 왜 바로 안 찍힘?”의 정체\r
\r
\`setTimeout(fn, 0)\`은 “지금 당장”이 아니라\r
\r
> “최소 0ms 뒤에, Task Queue에 넣어줄게”\r
>\r
> (단, 콜스택이 비어야 실행됨)\r
\r
이라서, 이미 스택이 바쁘면 계속 밀린다.\r
\r
---\r
\r
## 9. Node에서도 결국 뼈대는 같다\r
\r
Node도 본질은 동일하다.\r
\r
- JS는 콜스택에서 실행 (싱글 스레드)\r
- 비동기 작업은 호스트가 처리\r
- 완료되면 큐에 넣고 이벤트 루프가 다시 실행\r
\r
차이는 “호스트가 제공하는 기능”이 다르다는 점:\r
\r
- 브라우저: DOM/렌더링/이벤트 중심\r
- Node: 파일/네트워크/서버/CLI 중심\r
\r
---\r
\r
## 오늘의 결론\r
\r
- JS 실행의 중심은 **Call Stack**이다.\r
- 비동기는 **호스트(Web APIs/Node APIs)** 가 처리하고\r
- 완료된 콜백은 **큐**에 들어갔다가\r
- **Event Loop**가 **스택이 비었을 때** 다시 실행시킨다.\r
- 그리고 **Promise 계열(Microtask)이 setTimeout(Task)보다 먼저 실행되는 경우가 많다.**\r
`,Zx=`자바스크립트 이벤트 루프를 공부하다 보면 꼭 이런 혼란이 온다.\r
\r
> “V8이 이벤트 루프 돌리는 거 아냐?”\r
>\r
> “setTimeout은 브라우저가 하는 거라며?”\r
>\r
> “ECMAScript? 그건 또 뭐야…?”\r
\r
검색해 보면 “매크로 태스크 / 마이크로태스크 / 이벤트 루프” 설명은 많은데,\r
\r
**“누가 뭘 하는지”** 에 대한 계층 구조를 정확히 찍어주는 설명은 의외로 잘 안 보인다.\r
\r
그래서 이 글에서는 이벤트 루프 얘기하기 전에, 먼저 이 셋을 분리해서 정리해보려고 한다.\r
\r
- **ECMAScript 스펙**\r
- **JS 엔진(V8 등)**\r
- **호스트 환경(브라우저, Node.js 등)**\r
\r
이 세 개를 구분해서 보면\r
\r
Promise, async/await, setTimeout, Node의 libuv까지 한 번에 머릿속에 정리가 된다.\r
\r
---\r
\r
## 0. 큰 그림 먼저: 세 레이어를 한 방에 보고 가기\r
\r
먼저 전체 구조를 한 컷으로 보면:\r
\r
\`\`\`\r
[ECMAScript 스펙]\r
  - 자바스크립트 언어의 "룰북" (문서)\r
\r
        ↓ 이걸 구현한 게\r
\r
[JS 엔진 (V8, SpiderMonkey, JavaScriptCore...)]\r
  - 파서, 컴파일러(JIT), 실행기\r
  - 콜 스택, 힙, GC\r
  - Promise, microtask queue 구현\r
\r
        ↓ 이 엔진을 품고 돌리는\r
\r
[호스트 환경 (브라우저, Node.js, Deno...)]\r
  - 이벤트 루프 (타이머, I/O, UI 이벤트 처리)\r
  - DOM, setTimeout, fetch, fs, net, ...\r
  - "지금 이 콜백 실행해줘"라고 엔진에게 부탁\r
\`\`\`\r
\r
조금 더 구체적으로 말하면:\r
\r
- **ECMAScript**: “자바스크립트는 이렇게 동작해야 한다”라고 적힌 **설명서/규격 문서**\r
- **V8 같은 엔진**: 그 규격을 실제 코드로 구현한 **C++ 프로그램**\r
- **브라우저/Node 같은 호스트**: OS 위에서 돌아가면서,\r
  **엔진을 안에 품고, 이벤트 루프와 각종 API(DOM/타이머/네트워크 등)를 제공하는 껍데기**\r
\r
여기까지만 잡혀도, “누가 이벤트 루프를 돌리냐”, “setTimeout은 어디 꺼냐” 같은 질문이 훨씬 덜 헷갈린다.\r
\r
---\r
\r
## 1. ECMAScript: 자바스크립트의 “법전”\r
\r
### 1-1. ECMAScript가 뭔데?\r
\r
우리가 보통 “자바스크립트”라고 부르는 언어의 공식 이름이 사실 **ECMAScript**다.\r
\r
- TC39라는 위원회가 매년 ECMAScript 2020, 2021, 2022… 이런 식으로 스펙을 찍어낸다.\r
- 이 문서 안에는:\r
  - 문법: \`if\`, \`for\`, \`function\`, \`class\`, \`async/await\`…\r
  - 타입 시스템: Number, String, Object, Symbol, BigInt…\r
  - 빌트인 객체: \`Array.prototype.map\`, \`Promise\`, \`Map\`, \`Set\`…\r
  - 심지어 **Promise가 resolve 되면 어떤 “Job”이 큐에 들어가고, 언제 실행되어야 하는지**까지\r
    알고리즘 수준으로 적혀 있다.\r
\r
중요한 포인트:\r
\r
> ECMAScript는 문서다.\r
>\r
> 코드가 아니다.\r
\r
그래서 여기에는 “타이머를 이런 OS API로 구현해라” 이런 말은 없다.\r
\r
단지:\r
\r
> “Promise가 resolve되면 PromiseReactionJob을 Job Queue에 추가해라”\r
\r
같은 말만 써 있고, 그 Job Queue를 **어떻게 / 언제 처리할지**는\r
\r
엔진/호스트 쪽에서 구현해야 할 내용이다.\r
\r
### 1-2. ECMAScript가 **하지 않는 것들**\r
\r
ECMAScript 스펙에는 **다음이 없다**:\r
\r
- \`window\`, \`document\`, \`addEventListener\`\r
- \`setTimeout\`, \`setInterval\`\r
- \`XMLHttpRequest\`, \`fetch\`\r
- DOM, CSS, Canvas\r
- 파일 시스템, TCP 소켓, HTTP 서버…\r
\r
이건 모두 “언어”가 아니라 **플랫폼 API**다.\r
\r
그래서 구조를 이렇게 볼 수 있다.\r
\r
- ECMAScript: 순수 언어 스펙\r
- 그 위에 브라우저/Node가 **자기만의 API**를 얹어서 “환경”을 만든다.\r
\r
---\r
\r
## 2. JS 엔진(V8 등): 스펙을 코드로 만든 C++ 프로그램\r
\r
이제 두 번째 레이어.\r
\r
### 2-1. V8은 정확히 뭔가?\r
\r
V8은 구글이 만든 **자바스크립트 엔진**이다.\r
\r
- 크롬, 엣지(요즘), Node.js, Deno 등이 V8을 안에 품고 있다.\r
- 하는 일:\r
  1. JS 소스 코드를 문자열로 입력받는다.\r
  2. 토큰화/파싱 → AST 생성.\r
  3. 바이트코드 / 머신코드로 **컴파일(JIT)**.\r
  4. 런타임에 그 코드를 실행하면서 콜 스택/힙/GC 관리.\r
  5. \`Promise\`, \`Map\`, \`Set\`, \`Array.prototype.map\` 같은 빌트인 동작 구현.\r
  6. **Promise Job Queue / Microtask Queue**도 여기서 관리.\r
\r
한 줄로 말하면:\r
\r
> “ECMAScript 스펙에 적힌 규칙을\r
>\r
> 실제로 지켜가며 자바스크립트를 실행해주는 C++ 프로그램”\r
\r
우리가 흔히 “JS가 컴파일된다”, “엔진이 최적화한다”고 말하는 대상이 바로 이 엔진이다.\r
\r
### 2-2. V8이 **모르는** 것들\r
\r
이게 포인트다:\r
\r
> V8은 setTimeout, DOM, 네트워크, 이벤트 루프 전체를 혼자서 책임지지 않는다.\r
\r
V8은:\r
\r
- JS 코드 파싱/실행\r
- Promise 상태 관리, microtask queue, GC 등 “언어 레벨 런타임” 구현\r
\r
까지 담당하고,\r
\r
- **“언제 어떤 JS를 실행해야 하는지”**,\r
- **“타이머/네트워크/이벤트에서 들어오는 콜백은 언제 실행해야 하는지”**\r
\r
는 **호스트(브라우저/Node)** 가 결정한다.\r
\r
즉, V8은 “실행기”,\r
\r
브라우저/Node는 “언제 무엇을 실행시킬지 스케줄링하는 운영자” 역할.\r
\r
---\r
\r
## 3. 호스트 환경: 브라우저, Node.js, Deno…\r
\r
세 번째 레이어가 여기다.\r
\r
### 3-1. 호스트 환경의 역할\r
\r
브라우저(Chrome, Firefox, Safari…)나 Node.js는 한마디로\r
\r
> OS 위에서 돌아가는 큰 프로그램이고,\r
>\r
> 그 안에 V8 같은 엔진을 **임베딩(embed)** 해서 JS를 실행한다.\r
\r
이 호스트 환경이 하는 일은 대략 이렇다:\r
\r
1. **엔진(V8)을 초기화하고, JS 코드 실행**\r
   - 예: \`<script>\` 태그 실행, Node.js에서 \`node app.js\` 실행\r
2. **플랫폼 API 제공**\r
   - 브라우저:\r
     - DOM, \`window\`, \`document\`, \`addEventListener\`, \`fetch\`, \`setTimeout\`…\r
   - Node.js:\r
     - \`fs\`, \`http\`, \`net\`, \`setTimeout\`(libuv 기반), \`process\`…\r
3. **이벤트 루프와 Task 큐 관리**\r
   - 타이머, 네트워크, 사용자 입력 등 시스템 이벤트를 감시하고\r
   - 콜백을 Task/Microtask 큐에 쌓아두었다가,\r
   - 적절한 타이밍에 **V8에 “이 콜백 실행해줘”라고 요청**한다.\r
\r
즉, 호스트는:\r
\r
> **“세상의 모든 입력(I/O, 타이머, 사용자 이벤트)을 받아서 자바스크립트 콜백 호출로 변환해주는 거대한 어댑터”** 라고 보면 된다.\r
\r
### 3-2. 브라우저 엔진 vs JS 엔진\r
\r
여기서 헷갈리기 쉬운 개념:\r
\r
- **브라우저 엔진**(예: Blink, WebKit, Gecko)은 사실 여러 컴포넌트 묶음이다.\r
  - **렌더링 엔진**: HTML 파싱, DOM, CSS, 레이아웃, 페인트\r
  - **JS 엔진**: V8(Chrome/Edge), SpiderMonkey(Firefox), JavaScriptCore(Safari)\r
  - 네트워크, GPU, 프로세스 관리, 등등…\r
- 즉:\r
  - V8 = 브라우저 엔진 안에서 “JS만 담당하는 모듈”\r
  - 브라우저 엔진 = V8 + 렌더링 + DOM + 이벤트 루프… 전체 덩어리\r
\r
Node.js 쪽은 조금 다르지만 구조는 비슷하다.\r
\r
- JS 엔진: V8\r
- 이벤트 루프 + IO: libuv\r
- 파일 시스템, HTTP, 등: Node Core 모듈\r
\r
---\r
\r
## 4. 세 레이어를 “이벤트 루프” 관점에서 다시 연결해보기\r
\r
이제 진짜 하고 싶은 이야기:\r
\r
**이 세 레벨이 어떻게 합쳐져서 이벤트 루프/비동기 동작을 만드는가?**\r
\r
### 4-1. ECMAScript 레벨에서 보는 비동기: Job Queue\r
\r
ECMAScript는 이벤트 루프를 직접 구현하지 않는다. 대신 이렇게 말한다:\r
\r
- “Promise가 resolve되면 \`PromiseReactionJob\`이라는 Job을 만들어 Job Queue에 넣어라.”\r
- “호스트는 적절한 타이밍에 이 Job들을 꺼내 실행해야 한다.”\r
\r
여기서 말하는 Job이 바로 우리가 흔히 부르는 **마이크로태스크**의 추상 모델이다.\r
\r
즉 ECMAScript는:\r
\r
- “어떤 일이 ‘나중에 실행되어야 하는지’”를 정의하고\r
- “어떤 순서로 Job을 처리해야 하는지”를 알고리즘으로 적어둔다.\r
\r
### 4-2. 엔진(V8)의 역할: Microtask Queue 구현\r
\r
V8은 ECMAScript에서 요구한 Job Queue를 실제로 구현한다.\r
\r
- \`Promise.then\`, \`queueMicrotask\`가 호출되면:\r
  - V8 내부의 microtask queue에 콜백과 관련 데이터가 쌓인다.\r
- 그리고 호스트가 “지금 microtask 처리해”라고 호출하면\r
  - V8은 queue가 빌 때까지 그 Job들을 처리한다.\r
\r
여기서 중요한 구조:\r
\r
> “microtask queue”라는 구조는 엔진이 갖고 있고,\r
> “언제 비울지” 결정하는 것은 호스트다.\r
\r
### 4-3. 호스트(브라우저)의 역할: Task → Microtask → 렌더링\r
\r
브라우저 이벤트 루프는 대략 이렇게 돈다:\r
\r
1. **Task 하나 선택**\r
   - 예: 타이머 콜백, 클릭 이벤트 콜백, \`<script>\` 실행 등\r
2. 그 Task 안의 JS를 V8에게 실행시키기\r
   - 동기 코드, 그 안에서 Promise.then, queueMicrotask 등록 가능\r
3. Task 실행이 끝나 콜 스택이 비면\r
4. **이제 microtask 처리 타이밍**\r
   - V8의 microtask queue를 비움 (Promise.then, queueMicrotask 등)\r
5. 렌더링 타이밍이면\r
   - DOM 변경사항을 기반으로 레이아웃/페인트\r
6. 다음 Task로\r
\r
그래서 흔히 나오는 패턴:\r
\r
\`\`\`jsx\r
setTimeout(() => console.log("macro"), 0);\r
Promise.resolve().then(() => console.log("micro"));\r
\`\`\`\r
\r
실행 순서:\r
\r
1. 현재 스크립트(하나의 Task) 실행\r
   - Promise.then → microtask queue\r
   - setTimeout → Task queue\r
2. Task 종료 → **microtask queue 비움** → \`"micro"\`\r
3. 그 다음 Task에서 \`"macro"\`\r
\r
→ **항상 \`Promise.then\`이 \`setTimeout(0)\`보다 먼저**인 이유가 이 구조에서 나온다.\r
\r
Node.js도 구조는 비슷하지만,\r
\r
- libuv 이벤트 루프가 \`timers → poll → check\` 같은 phase를 가지고 있고\r
- 각 phase 끝에서 \`process.nextTick\` queue와 V8 microtask queue를 비워주는 식으로 동작한다.\r
\r
---\r
\r
## 5. 정리: “누가 뭘 하는지”만 정확히 기억하면 된다\r
\r
다시 한 번, 핵심만 정리해보면:\r
\r
### 1) ECMAScript 스펙\r
\r
- 자바스크립트 언어의 **룰북/문서**\r
- “Promise가 resolve되면 이런 Job을 큐에 넣어야 한다”,\r
  “Job은 이렇게 run-to-completion 해야 한다” 정도까지 정의\r
- DOM, 브라우저, setTimeout, 파일 IO에 대한 건 **전혀 모른다**\r
\r
### 2) JS 엔진(V8 등)\r
\r
- ECMAScript 스펙을 실제 C++ 코드로 구현한 **실행기**\r
- 파싱/컴파일/JIT/GC, \`Promise\`, microtask queue 구현\r
- Promise.then/queueMicrotask → 엔진 내부 microtask queue에 쌓음\r
- 하지만:\r
  - **언제** 그 큐를 비울지는 호스트가 정해준 타이밍에 맞춰 호출해야 함\r
\r
### 3) 호스트 환경(브라우저, Node.js…)\r
\r
- OS 위에서 돌아가는 큰 프로그램\r
- 엔진(V8)을 심어서 JS를 실행시키고\r
- 이벤트 루프 + Task 큐를 직접 관리\r
- 타이머/네트워크/사용자 입력 등을 감시하다가,\r
  - “이 콜백 실행할 차례야” → V8에 JS 콜백 실행 요청\r
- 브라우저: DOM/렌더링 + 각종 Web API 제공\r
- Node: 파일 시스템, 네트워크, 서버 API 등 제공\r
\r
---\r
\r
## 6. 그래서 앞으로 이벤트 루프 공부할 때는…\r
\r
이제 문서나 글을 읽을 때 이런 식으로 구분해서 보는 게 좋다.\r
\r
- “ECMAScript Job Queue” → **언어 스펙 레벨 이야기**\r
- “Promise.then, microtask queue” → **엔진(V8) 레벨 구현 + 호스트 타이밍**\r
- “setTimeout, 클릭 이벤트, libuv phase” → **호스트(브라우저/Node) 레벨 이야기**\r
\r
이 세 레벨만 분리해서 생각해도:\r
\r
- 왜 Promise.then이 setTimeout보다 먼저인지\r
- 왜 브라우저/Node 이벤트 루프가 서로 조금씩 다르게 설명되는지\r
- 왜 “V8 혼자 이벤트 루프를 돌린다”고 말하면 틀린 건지\r
\r
이런 것들이 전부 납득이 갈 거다.\r
`,Wx=`React에서 Zustand를 쓰다 보면 “상태는 분명 바뀌었는데 이벤트 핸들러가 옛날 값을 찍는다” 같은 현상을 한 번쯤 만나게 된다.\r
처음엔 **“zustand가 렌더 안 타나?”**, **“React가 업데이트 안 하나?”** 같은 느낌인데… 결국 원인은 React의 아주 고전적인 함정\r
\r
> **stale closure**\r
> (리렌더로 값은 바뀌었는데, 콜백 함수는 옛날 값을 클로저로 물고 있는 상태)\r
\r
이 글은 내가 실제로 겪었던 stale closure 케이스를 기준으로,\r
**왜 이런 일이 생기는지(메모리/렌더 관점)**,\r
그리고 **Zustand에서 이걸 구조적으로 차단하는 패턴(getState)** 까지 정리한 글이다.\r
\r
---\r
\r
## 0. 상황: “값은 바뀌는데 핸들러는 옛날 값만 본다”\r
\r
예를 들어 이런 코드가 있다고 치자.\r
\r
\`\`\`tsx\r
const value = useStore((s) => s.value);\r
\r
const handle = useCallback(() => {\r
  console.log(value);\r
}, []);\r
\`\`\`\r
\r
\`value\`가 바뀌면 컴포넌트는 리렌더가 되고 화면도 바뀐다.\r
근데 \`handle()\`을 눌러보면 콘솔엔 **첫 렌더 때 value만 계속 찍힌다.**\r
\r
“아니… UI는 바뀌는데 왜 handle만 과거에 살고 있냐?”\r
\r
이게 stale closure다.\r
\r
---\r
\r
## 1. stale closure의 본질: “콜백은 과거 렌더의 메모리를 들고 있다”\r
\r
React 컴포넌트는 리렌더될 때마다 **함수 본문을 다시 실행**한다.\r
\r
즉 이 코드:\r
\r
\`\`\`tsx\r
function Component() {\r
  const value = useStore((s) => s.value);\r
  // ...\r
}\r
\`\`\`\r
\r
는 \`value\`가 바뀌면 \`Component()\`가 다시 실행되며 **새로운 렌더 컨텍스트**가 만들어진다.\r
\r
여기서 중요한 포인트:\r
\r
- 렌더마다 \`value\`는 새로운 값으로 계산된다.\r
- 렌더마다 \`handle\` 같은 함수도 “원칙적으로” 새로 만들어질 수 있다.\r
- 그런데 \`useCallback([])\`은 “함수를 재생성하지 말아라”라는 강력한 힌트를 준다.\r
\r
그래서 결과적으로 이런 일이 발생한다.\r
\r
### ✅ \`useCallback([])\`이 하는 일\r
\r
- 첫 렌더 시점에 \`handle\`을 만들고\r
- 그 \`handle\`을 계속 재사용한다(참조 안정성 유지)\r
\r
### ✅ closure가 하는 일\r
\r
- \`handle\` 내부에서 참조한 \`value\`는\r
- **handle이 생성되던 시점의 렌더 스코프 값을 캡처한다**\r
\r
즉:\r
\r
> \`handle\`은 “첫 렌더의 value”를 클로저로 물고 있고,\r
> \`useCallback([])\`은 그 함수를 계속 재사용하게 만들기 때문에\r
> 이후 렌더에서 \`value\`가 바뀌어도 \`handle\`은 갱신되지 않는다.\r
\r
**stale closure = “함수가 만들어질 당시의 스냅샷을 계속 들고 있음”**\r
이게 핵심이다.\r
\r
---\r
\r
## 2. 의존성 배열로 해결: 가장 정석, 가장 흔한 방식\r
\r
정석은 이거다.\r
\r
\`\`\`tsx\r
const handle = useCallback(() => {\r
  console.log(value);\r
}, [value]);\r
\`\`\`\r
\r
\`value\`가 바뀌면 콜백도 다시 만들어지고,\r
새 콜백은 최신 \`value\`를 클로저로 캡처한다.\r
\r
### 장점\r
\r
- React 방식에 가장 충실\r
- 코드 의도가 명확 (\`handle\`이 \`value\`에 의존한다)\r
\r
### 단점(현업에서 자주 문제되는 포인트)\r
\r
- 콜백이 자주 재생성됨\r
- 이 콜백이 props로 내려가거나, memoized component의 비교 기준이 되면\r
  **리렌더링 폭탄**으로 이어질 수 있음\r
- 특히 \`value\`가 빈번히 변하는 값이면(예: 스트리밍 로그, 입력, 마우스, 타이머)\r
  \`[value]\`는 사실상 “useCallback 쓰는 의미가 줄어든다”\r
\r
결국 “정석이긴 한데, 구조적으로 이게 맞나?”라는 생각이 든다.\r
\r
---\r
\r
## 3. Zustand에서 \`getState()\`를 쓰면 왜 stale closure가 구조적으로 사라질까?\r
\r
여기서 Zustand가 등장한다.\r
\r
Zustand는 React state처럼 “컴포넌트 내부 상태”가 아니라,\r
**컴포넌트 바깥 전역 store 객체**에 상태가 존재한다.\r
\r
중요한 차이:\r
\r
### React state / selector 기반 값\r
\r
- 렌더 시점에 선택되고(=스냅샷)\r
- 그 렌더 스코프에 캡처될 수 있음(=클로저 위험)\r
\r
### Zustand store (\`useStore.getState()\`)\r
\r
- React 렌더 스코프와 무관하게\r
- store 객체에서 “지금 이 순간의 값”을 읽는다\r
\r
즉 이런 코드:\r
\r
\`\`\`tsx\r
const handle = useCallback(() => {\r
  const current = useStore.getState().value;\r
  console.log(current);\r
}, []);\r
\`\`\`\r
\r
여기서 \`handle\`은 첫 렌더 때 만들어지고 계속 재사용되지만,\r
**매번 실행될 때마다 store에서 최신 값을 조회**한다.\r
\r
### ✅ 이 방식이 stale closure를 원천 차단하는 이유\r
\r
stale closure가 성립하려면 조건이 필요하다:\r
\r
- 함수 내부에서 “렌더 스코프 변수(value)”를 참조해야 한다\r
\r
근데 \`getState()\` 방식은 아예 렌더 스코프 변수를 참조하지 않는다.\r
\r
> 클로저로 \`value\`를 캡처하지 않고\r
> 매번 글로벌 store에서 “현재 값”을 조회한다.\r
\r
그래서 구조적으로 stale closure가 발생할 여지가 없다.\r
\r
---\r
\r
## 4. 메모리/구조 관점으로 더 정확히 말하면\r
\r
여기서 “전역 힙(global heap)” 같은 표현을 쓰면 좀 더 정확해진다.\r
\r
### React 값(\`const value = useStore(selector)\`)\r
\r
- 렌더 프레임 안에서 생성된 “스냅샷”\r
- 클로저가 캡처하는 대상\r
- \`useCallback([])\` 같은 것과 결합되면 stale 가능\r
\r
### Zustand store (\`useStore.getState()\`)\r
\r
- 컴포넌트 외부의 store 객체가 들고 있는 상태\r
- 함수 실행 시점에 store를 조회\r
- 콜백이 오래 살아도 상관없음 (항상 현재 store를 읽으니까)\r
\r
정리하면:\r
\r
> React 렌더 스코프 안의 값은 “캡처되는 값”이고\r
> Zustand \`getState()\`는 “조회되는 값”이다.\r
\r
캡처(capture) vs 조회(read)의 차이가 곧 stale 여부를 결정한다.\r
\r
---\r
\r
## 5. 그럼 무조건 \`getState()\`가 정답이냐? (주의할 점)\r
\r
여기서 한 번 더 전문가 관점으로 정리하면,\r
\`getState()\`가 만능은 아니고 “사용처”가 있다.\r
\r
### ✅ \`getState()\`가 특히 좋은 케이스\r
\r
- 이벤트 핸들러 (onClick, onKeyDown, onSubmit 등)\r
- setInterval / setTimeout 콜백\r
- 외부 라이브러리 콜백(WebSocket, worker, native event)\r
- 리렌더 사이클과 독립적인 로직(업로드 진행률, 스트리밍, polling 등)\r
\r
즉 “콜백이 오래 살아남고, 최신 상태가 꼭 필요”한 영역에 최고다.\r
\r
### ⚠️ 주의: React 렌더와 store 읽기의 타이밍이 다를 수 있다\r
\r
React는 concurrent 모드에서 렌더를 지연/중단/재시도할 수 있다.\r
그런데 \`getState()\`는 “그 순간 store의 실제 값”을 읽는다.\r
\r
그래서:\r
\r
- “렌더에 반영된 값”과\r
- “getState로 읽은 값”이\r
  아주 특정 상황에서 **타이밍 차이**가 날 수 있다.\r
\r
다만 일반적인 UI 이벤트/상호작용 수준에서는 실무적으로 큰 문제는 잘 안 생기고,\r
오히려 이벤트 핸들러는 “최신 값”이 필요한 경우가 더 많다.\r
\r
---\r
\r
## 6. 내가 정리한 실전 패턴들\r
\r
### 패턴 A: “핸들러는 getState로 최신값 읽고, 렌더는 selector로”\r
\r
가장 현실적인 하이브리드.\r
\r
\`\`\`tsx\r
const value = useStore((s) => s.value);\r
\r
const handle = useCallback(() => {\r
  const current = useStore.getState().value;\r
  // 최신 값 기준으로 처리\r
}, []);\r
\`\`\`\r
\r
- UI는 \`value\`로 렌더 (React 방식)\r
- 핸들러는 \`getState()\`로 최신 값 보장\r
\r
### 패턴 B: “setter도 getState로 안정화”\r
\r
setter가 store에 들어있으면 그 참조는 보통 안정적이지만,\r
복잡해질수록 안정화를 위해 \`getState()\`를 쓰기도 한다.\r
\r
\`\`\`tsx\r
const handle = useCallback(() => {\r
  const { value, setValue } = useStore.getState();\r
  setValue(value + 1);\r
}, []);\r
\`\`\`\r
\r
---\r
\r
## 7. 결론: “클로저를 고정시키는 게 문제가 아니라, 캡처된 값을 쓰는 게 문제다”\r
\r
이 글의 결론을 한 문장으로 줄이면 이거다.\r
\r
> stale closure의 원인은 \`useCallback\`이 아니라\r
> \`useCallback\`이 “캡처된 값”을 갱신하지 못하게 만드는 구조다.\r
\r
그래서 해결책도 2가지 계열로 나뉜다.\r
\r
### 1) React 정석: 의존성 배열로 캡처를 최신화\r
\r
- \`useCallback(fn, [value])\`\r
- 값이 바뀌면 fn도 바뀐다\r
\r
### 2) Zustand 실전: 캡처를 제거하고 store에서 직접 조회\r
\r
- \`useStore.getState()\`\r
- fn은 고정돼도 내부는 매번 최신 조회\r
\r
---\r
\r
# 최종 요약\r
\r
- React의 \`useCallback([])\`은 콜백을 고정하며, 콜백 내부에서 참조하는 값은 “생성 시점 렌더 스코프”를 클로저로 캡처한다.\r
- 따라서 리렌더 이후 값이 바뀌어도 콜백은 과거 값을 참조하는 stale closure가 발생할 수 있다.\r
- 일반적인 해결은 의존성 배열에 값을 넣어 콜백을 재생성하는 것이다.\r
- Zustand에서는 \`getState()\`를 통해 store에서 최신 값을 직접 조회함으로써, 클로저 캡처 구조 자체를 제거할 수 있다.\r
- 결과적으로 콜백을 안정적으로 유지하면서도 최신 Zustand 상태를 사용할 수 있다.\r
`,Kx=`## 0. 시작: “npm에 올렸는데… 뭔가 허전하다”\r
\r
내가 만든 React 라이브러리를 npm에 배포했다.\r
\r
근데 딱 거기까지 하고 나니까 이런 생각이 들었다.\r
\r
- 테스트가 없으면… 내가 나중에 리팩토링하다 터뜨려도 모른다\r
- 배포는 매번 수동이면… 언젠가 귀찮아서 안 하게 된다\r
- 커버리지가 없으면… 테스트가 “있긴 한데 구멍 난 느낌”이다\r
- CI가 없으면… PR 머지하고 나서 터진 걸 뒤늦게 알게 된다\r
\r
그래서 목표를 잡았다.\r
\r
✅ **Vitest + React Testing Library로 테스트**\r
\r
✅ **Coverage 뽑아서 구멍 난 라인 직접 추격**\r
\r
✅ **GitHub Actions로 CI**\r
\r
✅ **Git 태그 푸시하면 npm 자동 배포**\r
\r
✅ **그리고 마지막 보스: EOTP(OTP) 에러 해결**\r
\r
---\r
\r
## 1. 테스트 환경 세팅 (여기까진 “음… 쉽네?”)\r
\r
### 1-1) 설치\r
\r
테스트는 Vitest로 갔다.\r
\r
그리고 React hook 테스트는 Testing Library의 \`renderHook\`을 썼다.\r
\r
\`\`\`bash\r
npm install -D vitest@2.1.6 \\\r
  @testing-library/react \\\r
  @testing-library/jest-dom \\\r
  @testing-library/user-event \\\r
  @vitejs/plugin-react \\\r
  @vitest/coverage-v8 \\\r
  happy-dom\r
\`\`\`\r
\r
> 여기서 “happy-dom”을 설치한 이유는 뒤에서 나온다. (jsdom이 CI에서 나를 배신함)\r
\r
---\r
\r
### 1-2) vitest config\r
\r
**vitest.config.mts**\r
\r
\`\`\`tsx\r
import { defineConfig }from"vitest/config";\r
import reactfrom"@vitejs/plugin-react";\r
\r
exportdefaultdefineConfig({\r
plugins: [react()],\r
test: {\r
environment:"happy-dom",\r
setupFiles:"./__test__/setup.ts",\r
include: ["__test__/**/*.test.{ts,tsx}"],\r
coverage: {\r
provider:"v8",\r
reporter: ["text","json","html"],\r
include: ["src/**/*.{ts,tsx}"],\r
exclude: [\r
"node_modules/",\r
"__test__/",\r
"dist/",\r
"coverage/",\r
"src/types/**",\r
"src/index.ts",\r
"src/hooks/index.ts",\r
      ],\r
    },\r
  },\r
});\r
\`\`\`\r
\r
**test/setup.ts**\r
\r
\`\`\`tsx\r
import "@testing-library/jest-dom/vitest";\r
\`\`\`\r
\r
**package.json scripts**\r
\r
\`\`\`json\r
{\r
  "scripts": {\r
    "test": "vitest run",\r
    "test:coverage": "vitest run --coverage",\r
    "build": "tsc && tsc -p tsconfig.esm.json"\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
## 2. 테스트 작성: “AI 도움도 받긴 했는데, 커버리지가 결국 나를 일하게 만들더라”\r
\r
처음에는 솔직히 테스트를 빨리 늘리고 싶어서, 기본 케이스들은 AI 도움도 받았다.\r
\r
> “응… 근데 성공 케이스만 잔뜩 있네?, 실패 상정을 안했네..?”\r
\r
이때부터 **Coverage 기반 라인 추격 게임**이 시작되었다\r
\r
### 내가 했던 루프\r
\r
1. \`npm run test:coverage\` 돌림\r
2. coverage report에서 **빨간 줄(미커버 라인)** 찾음\r
3. 그 라인이 어떤 조건에서 실행되는지 분석\r
4. 그 조건을 억지로 만들어서 테스트 추가\r
5. 다시 커버리지 확인\r
6. 반복… 반복… 반복…\r
\r
이 방식으로 가니까 커버리지가 “쭉쭉” 오른다.\r
\r
**99%대는 테스트 수가 아니라 “구멍을 메우는 집착”** 이더라.\r
\r
---\r
\r
## 3. CI 붙이기: 이제 PR 날려도 마음이 편해짐\r
\r
### 3-1) CI workflow\r
\r
Node 버전 매트릭스로 돌렸다. (18/20/22)\r
\r
- \`npm ci\`로 lock 기반 설치\r
- test → build 순으로\r
\r
> 여기서 느낀 점: CI는 “안전벨트”가 아니라 “에어백”이다.\r
>\r
> 에어백은 사고가 나야 고마움을 안다.\r
\r
---\r
\r
### 3-2) 커버리지 업로드(CodeCov)\r
\r
커버리지 job은 CI job이랑 분리했다.\r
\r
- 이유: 테스트 매트릭스랑 커버리지 업로드를 섞으면 로그가 지저분해지고\r
- 커버리지 업로드는 한 번만 하면 된다\r
\r
---\r
\r
## 4. 자동 배포: 태그 푸시하면 npm 배포 끝 (여기까진 완벽)\r
\r
배포 트리거를 “태그 푸시(v\\*)”로 잡았다.\r
\r
**publish.yml 핵심**\r
\r
\`\`\`yaml\r
on:\r
push:\r
tags: -'v*'\r
\`\`\`\r
\r
즉, 내가 하는 일은 이것뿐:\r
\r
\`\`\`bash\r
git tag v1.0.2\r
git push origin v1.0.2\r
\`\`\`\r
\r
끝.\r
\r
이제 Actions가 알아서 테스트/빌드/배포를 한다.\r
\r
…였는데…\r
\r
---\r
\r
## 5. (대망) 배포 마지막에서 터진다: EOTP 지옥 오픈\r
\r
배포 로그를 보는데, 빌드까지는 완벽했다.\r
\r
- tarball 파일 목록 쭉 나오고\r
- “Publishing to registry…” 뜨고\r
- “Signed provenance statement…” 이런 멋있는 문장도 뜨고\r
\r
나는 이미 “됐다”라고 생각했다.\r
\r
근데 마지막에 갑자기 이게 튀어나온다:\r
\r
\`\`\`\r
npm errorcode EOTP\r
npm error This operation requiresa one-time passwordfrom your authenticator.\r
\`\`\`\r
\r
### 순간 내 머릿속:\r
\r
> “OTP? 내가 지금 로컬에서 배포하는 것도 아닌데…\r
>\r
> 여긴 GitHub Actions runner인데…\r
>\r
> 누가 폰을 들고 OTP를 입력해주지…?”\r
\r
딱 이때 깨달았다.\r
\r
**CI에서 \`npm publish\`는 ‘사람이 개입할 수 없는데’, NPM의 내 계정은 publish에 OTP(2FA)를 요구하고 있었던 것.**\r
\r
---\r
\r
## 6. EOTP가 왜 뜨는지?\r
\r
### 6-1) 로컬 배포 vs CI 배포는 완전히 다르다\r
\r
- 로컬 배포: 내가 직접 실행하니까, OTP 있으면 붙여서 해결 가능\r
  \`\`\`bash\r
  npm publish --otp=123456\r
  \`\`\`\r
- CI 배포: GitHub Actions는 사람이 없다\r
  → OTP 입력할 창도 없고, 입력할 사람도 없다\r
  → “그럼 CI 배포는 어떻게 하라고?”가 포인트\r
\r
여기서 필요한 게 **CI용 토큰**이다.\r
\r
---\r
\r
## 7. 해결: CI에서는 “Automation(자동화)용 토큰”으로 간다\r
\r
### 7-1) npm 토큰을 “CI용”으로 발급\r
\r
- 사람이 OTP 치는 방식이 아니라 **CI에서 토큰으로 사용할 거니까**\r
- **토큰으로 인증이 끝나야 한다**\r
- 그리고 publish 권한이 있어야 한다\r
\r
그래서 만든 토큰을 GitHub Secrets에 넣는다:\r
\r
- repo settings → Secrets → \`NPM_TOKEN\`\r
\r
---\r
\r
### 7-2) GitHub Actions에서 토큰을 인증으로 물려준다\r
\r
publish workflow에서 \`NODE_AUTH_TOKEN\`을 환경변수로 주입하면 된다.\r
\r
\`\`\`yaml\r
-name:Publishtonpm\r
run:npmpublish--provenance--accesspublic\r
env:\r
NODE_AUTH_TOKEN:\${{secrets.NPM_TOKEN}}\r
\`\`\`\r
\r
여기까지 해도, 토큰이 “일반 토큰”이면 계정 설정에 따라 또 막힐 수 있다.\r
\r
이 경우는 두 가지를 확인했다:\r
\r
### 체크 1) 토큰 권한이 publish 가능한 권한인지\r
\r
- read만 있으면 당연히 publish 못한다\r
- write/publish 권한이 있어야 한다\r
\r
### 체크 2) 계정의 2FA 정책이 “토큰/자동화 publish도 막는” 형태인지\r
\r
- 계정 설정에서 publish 작업에 OTP를 강제하면,\r
  어떤 토큰은 여전히 EOTP를 띄울 수도 있다.\r
- 그래서 “자동화 전용 토큰 성격”으로 맞춰야 CI가 산다.\r
\r
(이 부분 때문에 나는 한 번 더 토큰을 다시 발급했다. 진짜 귀찮았다.)\r
\r
---\r
\r
### 7-3) 최종적으로 성공했을 때의 감정\r
\r
EOTP 지옥을 뚫고 \`npm publish\`가 초록불로 끝나면\r
\r
그때부터 진짜 “아 이제 배포는 시스템이 한다” 느낌이 든다.\r
\r
내가 하는 건 태그 푸시 뿐이다.\r
\r
---\r
\r
## 8. docs-only 릴리즈: “문서만 바뀌었는데 배포는 하기 싫다”의 해결\r
\r
이거 나도 엄청 고민했다.\r
\r
### 문제 상황\r
\r
- GitHub에서 README만 수정했다\r
- 근데 npm 페이지 README는 배포된 패키지 기준이라 안 바뀐다\r
- “문서 오타 하나”로 버전 올리는 게 뭔가 찜찜하다\r
\r
### 결론(현실 버전)\r
\r
**npm 페이지의 README까지 최신으로 유지하려면 결국 “patch 릴리즈”를 해야 한다.**\r
\r
그래서 나는 docs-only 릴리즈를 공식 프로세스로 만들었다.\r
\r
---\r
\r
### docs-only 릴리즈 커맨드\r
\r
### 1) 문서 수정 커밋\r
\r
\`\`\`bash\r
git add README.md\r
git commit -m"docs: update README"\r
git push origin master\r
\`\`\`\r
\r
### 2) patch 버전 올리기 (package.json 버전 업데이트)\r
\r
npm을 쓰면:\r
\r
\`\`\`bash\r
npm version patch\r
\`\`\`\r
\r
이 명령이 하는 일:\r
\r
- package.json version을 1.0.2 → 1.0.3으로 올리고\r
- 자동으로 git commit도 만들고\r
- 태그까지 만들게 설정할 수도 있음(환경에 따라)\r
\r
나는 태그 트리거 배포를 쓰니까, 보통 이렇게 갔다:\r
\r
\`\`\`bash\r
git push origin master\r
\`\`\`\r
\r
### 3) 태그 푸시 (자동 배포 트리거)\r
\r
\`\`\`bash\r
git tag v1.0.3\r
git push origin v1.0.3\r
\`\`\`\r
\r
### 4) 결과\r
\r
- GitHub Actions가 publish workflow 실행\r
- 테스트/빌드 통과하면 npm에 1.0.3 배포\r
- npm 페이지 README도 최신으로 따라옴\r
\r
> “문서 변경인데 배포까지 하냐?”가 고민이긴 한데,\r
>\r
> 실사용자가 npm 페이지를 보고 설치하는 구조면 이게 제일 깔끔하더라.\r
\r
---\r
\r
## 9. 재밌는(?) 삽질 모음: 내가 실제로 막혔던 것들\r
\r
### 9-1) jsdom이 CI에서만 터짐 → happy-dom으로 전환\r
\r
로컬에서는 잘 도는데 CI에서만 이상하게 jsdom 초기화 오류가 났다.\r
\r
그때는 그냥 “환경 차이”라고 생각했고, 빠르게 happy-dom으로 갈아탔다.\r
\r
- 결론: CI에서 안정적으로 돌아가는 게 더 중요했다. (절대 아직도 원인 못찾은건 비밀)\r
\r
---\r
\r
### 9-2) “popped is used before being assigned” 같은 TS 경고\r
\r
hook 테스트 쓸 때 이런거 자주 만난다.\r
\r
\`\`\`tsx\r
letpopped:number[];\r
\r
act(() => {\r
  popped = result.current.popHead(3);\r
});\r
\r
expect(popped).toEqual([1,2,3]);\r
\`\`\`\r
\r
TS는 \`act()\` 콜백에서 반드시 할당된다는 걸 증명 못 하니까 경고를 띄운다.\r
\r
테스트 코드에서는 보통 이렇게 처리했다:\r
\r
\`\`\`tsx\r
let popped!: number[];\r
\r
act(() => {\r
  popped = result.current.popHead(3);\r
});\r
\r
expect(popped).toEqual([1, 2, 3]);\r
\`\`\`\r
\r
---\r
\r
### 9-3) 커버리지 구멍 메우기: 진짜 고통인데, 끝나면 뿌듯함\r
\r
커버리지 99% 찍는 과정은 거의 이런 느낌이었다:\r
\r
- “아니 이 라인은 도대체 언제 타는 거야?”\r
- “오케이. 그럼 강제로 예외 상황을 만들자.”\r
- “아… 이런 입력에서 터지는구나”\r
- “테스트 추가”\r
- “coverage 올라감”\r
- “또 다음 빨간 줄….”\r
\r
근데 이 과정 덕분에,\r
\r
- 방어코드가 진짜로 작동하는지 확인했고\r
- “내 코드의 경계조건”을 내가 제일 잘 알게 됐다\r
\r
---\r
\r
## 10. 최종적으로 내가 얻은 것\r
\r
이제 내 라이브러리는 이런 흐름이 됐다.\r
\r
### ✅ 개발 흐름\r
\r
- PR 올리면 CI가 테스트/빌드 자동 체크\r
- 커버리지도 확인 가능\r
- 안정성 생김\r
\r
### ✅ 배포 흐름\r
\r
- 태그 푸시하면 자동 배포\r
- 사람이 하는 일 최소화\r
- 실수 확 줄어듦\r
\r
### ✅ 그리고 제일 중요한 건\r
\r
이건 포트폴리오로도 “설득력”이 생기지 않을까..?\r
\r
- “테스트 했다”가 아니라\r
- “테스트+커버리지+CI+자동배포까지 붙여서 운영 가능한 라이브러리로 만들었다”\r
  가 되니까.\r
\r
---\r
\r
## 11. 다음에 할 것\r
\r
- 성능 벤치마크(원형 큐는 성능 이야기가 잘 먹힘)\r
- docs를 더 친절하게 (사용 예제/주의사항/edge case)\r
- 릴리즈 노트 자동 생성까지 붙이면 완성형\r
\r
## Ps. 삽질 안하려면…\r
\r
1. 배포 자동화는 **브랜치 푸시가 아니라 태그(vX.Y.Z) 푸시 트리거**로 구성하기\r
2. \`npm publish\`는 CI에서 돌릴 거면 **토큰 권한(write/publish)부터 확인하기**\r
3. CI에서 \`EOTP\` 뜨면 “내가 OTP를 못 치는 환경”이라는 걸 먼저 인정하기\r
4. \`NODE_AUTH_TOKEN\` 환경변수로 인증을 넘기는지 workflow에서 확인하기\r
5. 토큰 범위 제한(특정 패키지만 허용) 걸려 있으면 **패키지 포함 여부** 확인하기\r
6. 테스트는 “AI로 초안 → 커버리지 빨간 줄 추격” 루프로 마무리하기\r
7. 로컬 OK, CI FAIL이면 환경 차이(특히 DOM 환경)부터 의심하고 빠르게 대체안 준비하기\r
8. docs만 바뀌어도 npm README까지 최신 유지하려면 **docs-only patch 릴리즈**가 현실 해답\r
9. 태그 수동이면: \`npm version patch\` 후에 **태그 생성/푸시 순서** 실수하지 않기\r
10. 배포 성공 로그 확인은 “빌드 성공”이 아니라 **publish 단계 끝까지** 보고 환호하기(진짜 중요)\r
\r
---\r
\r
## 마무리: “그냥 배포”에서 “운영 가능한 라이브러리”로\r
\r
처음엔 “테스트랑 CI 붙이는 게 그렇게 대단한가?” 싶었는데,\r
\r
막상 해보니까 진짜 체감이 크다.\r
\r
특히 EOTP는…\r
\r
**배포 다 됐다고 방심한 순간 뒤통수 맞는** 타입이라 더 기억에 남는다.\r
\r
이제는 내가 태그만 푸시하면\r
\r
나머지는 GitHub Actions가 다 한다.\r
\r
(그리고 난 DevOps 뉴비이기 떄문에 이게 제일 좋은것 같다. 왜냐? 편하니까!)\r
`,$x=`실차/로그 기반 모니터링 UI를 만들다 보면, 어느 순간부터 이런 문장이 몸에 새겨진다.\r
\r
> “데이터는 계속 들어오고, UI는 멈추면 안 된다.”\r
\r
이번 글은 **ZeroMQ로 들어오는 trigger 이벤트(로그/뷰/차트)를 React 상태로 반영하는 파이프라인**에서,\r
\r
UI 버벅임을 줄이기 위해 **WebWorker / throttle / frame time-slicing / batched updates**까지 다 해본 뒤,\r
\r
**결국 baseline(그냥 바로 처리)이 가장 빠르고 합리적이었다**는 결론에 도달하기까지의 기록이다.\r
\r
---\r
\r
## 0. 목표: “빠른 처리”가 아니라 “버벅임 없는 UI”\r
\r
이번 최적화의 목적은 단순히 “평균 처리시간(avg)을 줄이기”가 아니었다.\r
\r
- 데이터 처리량은 앞으로도 계속 증가할 수 있고\r
- 사용자 입장에서는 “평균이 빠른 것”보다\r
- **가끔 멈추는 순간(프리즈/버벅임)** 이 훨씬 치명적이다\r
\r
그래서 이번에 측정하고 싶었던 건 크게 두 가지였다.\r
\r
1. **Trigger 처리의 계산 성능(처리 시간/처리량)**\r
2. **UI가 실제로 얼마나 부드러운지(FPS/최악 프레임)**\r
\r
즉, “CPU에서 빨리 끝내는가?”뿐 아니라\r
\r
“메인 스레드를 얼마나 오래 붙잡는가?”를 같이 보려 했다.\r
\r
---\r
\r
## 1. 배경: Trigger가 하는 일\r
\r
Trigger 메시지는 대략 다음과 같은 내용이 있다.\r
\r
- \`FilterType.Log\` → 이벤트 버스 emit (로그 리스트 등)\r
- \`FilterType.View\` → 여러 탭/뷰 스토어 업데이트\r
  - \`LATEST\`는 무조건 업데이트\r
  - \`CUR_PRINT\`는 “현재 보고 있는 탭인지” 조건부 업데이트\r
  - Sync 업데이트 중이면 \`isUpdatingFromSync\` 기준으로 무시\r
- \`FilterType.Chart\` → chart store 갱신 + 다른 chart window에 broadcast\r
\r
이 Trigger의 문제는 **메시지 양이 많고(초당 수백~수천), View 업데이트/Chart broadcast가 UI thread를 잡아먹으면 화면이 끊긴다**는 점이었다.\r
\r
---\r
\r
## 2. 문제: UI 버벅임이 발생\r
\r
초기 구현은 “received datas를 forEach 돌면서 즉시 처리” 방식이었다.\r
\r
### Baseline(초기 코드)의 특징\r
\r
- 데이터가 들어오는 즉시 처리\r
- 분기 로직은 명확\r
- store 업데이트/handler 호출이 곧바로 실행됨\r
- 단점: 특정 타이밍에 데이터가 몰리면, 한 프레임에 처리량이 커져서 **“뚝” 끊길 수 있음**\r
\r
그럼에도 구조 자체는 단순했고, 그래서 더더욱 개발자의 입장에서 “최적화가 진짜 필요한지”가 궁금해졌다.\r
\r
---\r
\r
## 3. 무엇을 측정하려 했나(목적): “이 최적화가 진짜 이득인가?”\r
\r
최적화는 “느낌상 좋아질” 수 있지만, 실제로는 반대도 흔하다.\r
\r
그래서 이번엔 **Baseline vs Optimized(Worker/Time-slicing/Throttle 등)** 를 가능한 한 같은 조건에서 비교하려 했다.\r
\r
### ✅ 측정 목적(What)\r
\r
- **Trigger 처리 자체가 얼마나 걸리는지**\r
- **메시지를 얼마나 빨리 소화하는지**\r
- **UI 프레임이 얼마나 안정적인지**\r
- **꼬리 지연(tail latency: p95/p99)이 얼마나 나쁜지**\r
\r
---\r
\r
## 4. 어떻게 측정했나(방법): Perf 로그 + FPS/LongTask 관측\r
\r
### 4-1) Perf 로그에서 측정한 것들\r
\r
콘솔에 찍은 로그는 대략 이런 형태였다.\r
\r
\`\`\`\r
[PERF:baseline] n=341 avg=3.23ms p95=12.00ms max=57.90ms | msgs=5128\r
[PERF:optimized] n=39 avg=15.11ms p95=87.40ms max=101.80ms | msgs=2406 chunks=39\r
\`\`\`\r
\r
각 수치의 의미는 아래와 같다.\r
\r
### ✅ n (Samples, 샘플 수)\r
\r
- **측정한 배치 처리 횟수**\r
- Baseline은 작은 배치를 자주 처리하므로 n이 커지고\r
- Optimized는 배치를 모아서(또는 chunk로) 처리하므로 n이 작아지는 경향이 있다\r
\r
> ⚠️ 주의: n이 작다고 성능이 좋은 게 아니다. “한 번에 많이 처리했을 뿐”일 수 있다.\r
\r
### ✅ msgs (Messages, 처리한 메시지 수)\r
\r
- 측정 구간 동안 **총 처리한 메시지 개수**\r
- 비교할 때 msgs가 비슷해야 공정하다(= 같은 양을 처리했다는 뜻)\r
\r
### ✅ avg (평균 처리 시간)\r
\r
- 배치 1회 처리에 걸린 **평균 시간**\r
- 다만 UI 체감은 평균보다 **tail(p95/p99)** 에 더 민감한 경우가 많다\r
\r
### ✅ p95 / p99 (백분위)\r
\r
- p95: 95%의 배치가 이 시간 안에 끝남\r
- p99: 99%의 배치가 이 시간 안에 끝남\r
\r
UI 관점에서 중요한 이유:\r
\r
- 16ms(60fps) 안에 끝나는 비율이 높아야 버벅임이 줄어든다\r
- “가끔 엄청 느린 케이스”가 체감을 망친다\r
\r
### ✅ max (최대값)\r
\r
- 측정 구간 중 **가장 느렸던 1회**\r
- max가 크면 “한 번 멈춘 경험”으로 사용자에게 강하게 각인될 수 있다\r
\r
### ✅ chunks (Optimized에서만)\r
\r
- time-slicing처럼 “한 배치를 몇 조각으로 나눴는지” 정도를 의미\r
- chunk 분할 자체도 오버헤드가 될 수 있다\r
\r
---\r
\r
### 4-2) FPS 로그에서 측정한 것들\r
\r
내가 따로 찍은 로그:\r
\r
\`\`\`\r
[TriggerFPS] fps=34 worstFrame=185.3ms\r
[TriggerFPS] fps=2  worstFrame=736.6ms\r
\`\`\`\r
\r
이건 “처리 속도”가 아니라 **사용자가 느끼는 부드러움**에 훨씬 직결된다.\r
\r
### ✅ fps\r
\r
- 초당 프레임 수\r
- 높을수록 부드럽고, 낮아질수록 끊긴다\r
\r
### ✅ worstFrame\r
\r
- 측정 구간에서 **가장 오래 걸린 프레임(렌더/스크립트 포함)**\r
- 이 값이 큰 순간이 곧 “뚝 멈춘 순간”이다\r
  (100ms만 넘어도 체감은 거의 프리즈에 가깝다)\r
\r
---\r
\r
## 5. 첫 번째 시도: Worker로 분기/필터링을 offload하자\r
\r
아이디어는 이거였다.\r
\r
> “View/Chart에서 조건 검사/필터링이 많으니까, 그걸 worker로 빼면 main thread가 가벼워지지 않을까?”\r
\r
### Worker 구조\r
\r
- main thread는 worker에 payload를 던짐\r
- worker는 \`datas\`를 돌며 \`actions\`를 생성해서 전달\r
- main thread는 actions를 받아 handler/store update 수행\r
\r
Wroker의 코드는 대략 이런 느낌:\r
\r
\`\`\`tsx\r
self.onmessage =(e) => {\r
const { datas, receivingTabIds, lastClickedId, baseIndex } = e.data;\r
const actions = [];\r
\r
for (const itemof datas) {\r
switch (item.filterType) {\r
caseFilterType.Log:\r
        actions.push({type:'LOG', item });\r
break;\r
\r
caseFilterType.View:\r
        actions.push({type:'VIEW_LATEST', item });\r
if (receivingTabIds.includes(lastClickedId)) {\r
          actions.push({type:'VIEW_CUR_PRINT', item });\r
        }\r
break;\r
\r
caseFilterType.Chart:\r
if (receivingTabIds.includes(lastClickedId) && item.baseIndex >= baseIndex) {\r
          actions.push({type:'CHART', item });\r
        }\r
break;\r
    }\r
  }\r
\r
postMessage(actions);\r
};\r
\`\`\`\r
\r
---\r
\r
## 6. 결과: “수치상으로는 Worker가 훨씬 느렸다”\r
\r
실측 로그를 보면 worker쪽이 크게 느렸다.\r
\r
개선 작업을 이어가도 결론은 비슷했다.\r
\r
- **Samples**\r
  - Optimized(큰 배치): 58회\r
  - Baseline(작은 배치): 268회\r
- **Messages**\r
  - 둘 다 ~3,700개 수준 (동일량)\r
- **Avg / P50 / P95 / P99 / Max**\r
  - Baseline 압승\r
- **Throughput**\r
  - baseline: 337 ops/s\r
  - optimized: 71 ops/s\r
\r
결론은 명확했다.\r
\r
> “이 workload에서는 worker 통신 오버헤드가 병렬 처리 이득을 압도한다.”\r
\r
---\r
\r
## 7. “그런데 체감 UI는 좀 부드러운 느낌도…?”의 함정\r
\r
이상한 포인트가 하나 있었다.\r
\r
- 수치상으론 optimized/worker가 느린데\r
- 체감으로는 “버벅임이 줄어든 것 같다”는 순간도 있었다\r
\r
이 괴리는 **확인하는 지표가 ‘무엇을 측정하는지’** 와 관련이 있었다.\r
\r
### 7-1) queue 대기 시간/스케줄링 비용이 포함된다\r
\r
optimized 방식은 대개\r
\r
- 데이터를 모으고(queue)\r
- 프레임 단위로 나눠 처리(time-slicing)\r
- 혹은 worker round-trip\r
\r
이 과정에서 **실제 연산 시간 외의 ‘기다리는 시간’** 이 들어가면서 perf 상 시간은 커질 수 있다.\r
\r
### 7-2) FPS는 평균이 아니라 Tail이 결정한다\r
\r
사람이 느끼는 버벅임은 평균이 아니라 **worstFrame / p95~p99**가 좌우한다.\r
\r
실제 로그에서도 optimized는 최악 프레임이 크게 튀었다.\r
\r
\`\`\`\r
[TriggerFPS] fps=2 worstFrame=736.6ms\r
\`\`\`\r
\r
이 한 방이 체감에서 “멈췄다”로 남는다.\r
\r
---\r
\r
## 8. 두 번째 시도: Throttle로 state 변경을 줄이면 빨라지지 않을까?\r
\r
특히 chart broadcast가 많아서 “20fps 정도로 제한하면 좋아 보였다.”\r
\r
\`\`\`tsx\r
const throttledBroadcast = throttle((channel, payload) => {\r
  broadcastService.broadcast(channel, payload);\r
}, 50); // 20fps\r
\`\`\`\r
\r
직관은 맞아 보인다.\r
\r
> “state 변경을 줄이면 리렌더가 줄고 빨라지겠지?”\r
\r
그런데 실제 수치는 더 좋아지지 않았다.\r
\r
### 왜? (내가 내린 결론 + 추가 의견)\r
\r
### 8-1) “state 변경 수”가 병목이 아닐 수 있다\r
\r
- handler 내부 store update가 무겁거나\r
- payload 생성/가공이 무겁거나\r
- tree 변환/대용량 객체 가공이 무거우면\r
  broadcast 횟수만 줄여도 전체 비용은 크게 줄지 않는다.\r
\r
### 8-2) throttle 자체도 비용이 있다\r
\r
timer/args 저장/클로저 등 오버헤드가 있고, 작은 배치에서 특히 손해가 커질 수 있다.\r
\r
### 8-3) React/Zustand는 이미 어느 정도 batching이 된다\r
\r
React 18 이후 batching이 강화되었고, 상태 업데이트도 사용 방식에 따라 자동으로 묶이는 경우가 있다.\r
\r
즉 “또 배치/또 throttle”은 중복 최적화가 되어 손해가 날 수 있다.\r
\r
---\r
\r
## 9. 세 번째 시도: Frame Time-slicing (requestAnimationFrame 기반 분할)\r
\r
이번엔 접근을 바꿨다.\r
\r
> “평균이 조금 느려져도 좋다. 대신 UI가 끊기지만 않으면 된다.”\r
\r
프레임 예산(\`frameBudgetMs\`)을 정해 분할 처리하고,\r
\r
\`unstable_batchedUpdates\`로 React 업데이트도 묶어보았다.\r
\r
중간에 \`unstable_batchedUpdates\` 관련 이슈도 있었지만 결국 해결했다.\r
\r
### 그런데…\r
\r
최종적으로 baseline이 수치상 계속 이겼다.\r
\r
---\r
\r
## 10. “Baseline이 빠른데, 왜 버벅임이 있었나?”\r
\r
정리해보면 baseline은 평균적으로 아주 빠르다.\r
\r
- avg 2~3ms\r
- p95 12ms (16ms 목표에 근접/달성)\r
\r
문제는 **p99/max 구간에서 50~70ms 튀는 순간**이 있다는 점이다. 보통 이런 순간이 원인이다:\r
\r
- datas가 큰 배치로 몰려 들어오는 순간\r
- handler가 큰 객체를 만들거나 깊은 복사를 하는 순간\r
- GC가 터지는 순간\r
- 특정 viewType이 유독 무거운 업데이트를 수행하는 순간 (tree 변환, 대용량 가공 등)\r
\r
즉:\r
\r
> baseline의 문제는 “항상 느림”이 아니라 “가끔 한 방이 큼”이다.\r
\r
---\r
\r
## 11. 최종 방향성: Baseline 유지 + “큰 배치일 때만” 보호장치\r
\r
결론적으로 가장 합리적이었던 전략은 이거다.\r
\r
- **기본은 baseline처럼 즉시 처리**\r
- 다만 **datas가 일정 크기 이상으로 커질 때만** 분할 처리/프레임 분산 같은 보호장치 발동\r
\r
예시:\r
\r
\`\`\`tsx\r
if (datas.length > 200) {\r
  // chunk 처리 or time-slice\r
} else {\r
  // baseline 즉시 처리\r
}\r
\`\`\`\r
\r
이 방식이 좋은 이유:\r
\r
- 평소(대부분)는 baseline의 빠른 경로를 탄다\r
- 위험한 순간(큰 배치 몰림)만 방어한다\r
- “최적화 오버헤드”를 항상 지불하지 않는다\r
\r
---\r
\r
## 12. 성능 측정: 어떻게 재고, 뭘 봐야 하나?\r
\r
이번 작업에서 확실히 배운 점은:\r
\r
> 성능은 “체감”과 “숫자” 둘 다 봐야 하고, 숫자도 “무슨 숫자냐”가 중요하다.\r
\r
### 우리가 본 지표들\r
\r
### 처리 시간\r
\r
- avg / p50 / p95 / p99 / max\r
- **UI 체감은 p95~p99 + max가 중요**\r
- avg만 보면 속기 쉽다\r
\r
### Samples\r
\r
- baseline이 더 자주 호출되었다\r
- optimized는 배치를 크게 묶어 호출 횟수가 적었다\r
  → 호출 횟수가 적다고 빠른 게 아니다(한 번에 더 많이 처리하면 더 느릴 수 있음)\r
\r
### Throughput\r
\r
- baseline 337 ops/s vs optimized 71 ops/s\r
  → baseline이 처리량 측면에서도 안정적이었다\r
\r
### FPS / worstFrame\r
\r
- fps가 낮고 worstFrame이 크면 체감 버벅임이 생긴다\r
- worstFrame은 “한 번 멈춘 순간”을 그대로 보여준다\r
\r
---\r
\r
## 13. “왜 최적화했는데 더 느려졌나?” 정리 (내 의견 + 최종 결론)\r
\r
내 결론은 이렇다.\r
\r
### 13-1) 오버헤드가 이득보다 컸다\r
\r
worker, queue, slice, rAF, time-slicing…\r
\r
이 모든 건 “추가 구조”이고, 구조 자체가 비용이다.\r
\r
현재 workload는\r
\r
- 평균 배치가 아주 큰 편이 아니고 (10~20개 수준이 자주 들어옴)\r
- handler가 즉시 처리해도 충분히 빠른 편이라\r
  “추가 구조 비용”이 오히려 총 비용을 키웠다.\r
\r
### 13-2) 진짜 병목은 분기/조건이 아니라 handler 내부일 가능성이 크다\r
\r
worker가 분기만 대신해도, handler/store update가 무거우면 근본 병목은 그대로다.\r
\r
### 13-3) React batching은 이미 생각보다 잘 되어 있다\r
\r
React 18 환경에서 같은 tick 내 setState는 배치되는 경우가 많다.\r
\r
내가 직접 배치를 넣은 것이 중복 최적화가 되었을 수 있다.\r
\r
### 13-4) UI 부드러움의 핵심은 평균이 아니라 Tail\r
\r
이번 실측에서는 optimized가 tail(p95/p99/worstFrame)까지 baseline보다 좋지 않았다.\r
\r
그래서 더더욱 baseline 유지가 맞았다.\r
\r
---\r
\r
## 14. 최종 결론\r
\r
### ✅ 지금 상황에서의 최선\r
\r
- **Baseline 유지가 정답**\r
- worker는 이 workload에서는 손해\r
- throttle/time-slicing은 “항상 켜는 최적화”가 아니라\r
  “필요할 때만 발동하는 보호장치”로 쓰는 게 더 합리적\r
\r
### ✅ 앞으로의 개선 포인트\r
\r
Baseline이 이미 p95 12ms라 충분히 좋다.\r
\r
그래도 p99/max(50~70ms)를 줄이고 싶다면:\r
\r
- 큰 배치일 때만 chunk로 쪼개기\r
- 특정 viewType/chartType 핫스팟 프로파일링\r
- tree 변환 등 무거운 구간에 캐시/구조 개선 고려\r
\r
---\r
\r
## 15. 다음에 내가 한다면(추천 체크리스트)\r
\r
1. datas가 커질 때만 time-slice 발동\r
2. 지표는 avg보다 **p95/p99 + worstFrame** 중심으로 본다\r
3. 최적화 대상은 분기 로직이 아니라 **handler 내부 핫스팟**\r
4. 필요하면 “전체 pipeline”이 아니라 “특정 핫스팟만” worker로 뺀다\r
\r
---\r
\r
## 덤: 이번 삽질에서 얻은 교훈\r
\r
> “최적화는 멋진 아이디어가 아니라, 측정 가능한 문제를 해결하는 과정이다.”\r
\r
worker도, batching도, throttle도 다 멋있다.\r
\r
근데 내 시스템에서는 baseline이 가장 빠르다.\r
\r
그리고 이건 실패가 아니라, **제대로 된 결론** 이며 나의 삽질은 나중에 다른 문제를 위한 거름을 옮긴 과정이다.\r
`,eb=`# useState → useReducer → 도메인  분리 → Store 까지의 이야기

---

> 상태 라이브러리는 언제든 도입할 수 있다.
근데 “내 코드가 그때 덜 아프게 옮겨질 수 있는 구조인가?”는 완전히 다른 얘기다.
이번 리팩터링의 진짜 수확은 미래의 마이그레이션 레일을 깔아둔 것이었다.
> 

---

## 0. 시작: 중첩 상태를 useState로 건드리기 시작했을 때

필터 편집 상태는 아래처럼 **중첩된 구조**였다.

\`\`\`tsx
FilterItem = {
  isChecked: false,
  name: '',
  type: {
    filter: { value: false },
    marker: { value: false, color: '#ffffff' },
  },
  applicationId: { value: '', type: 'none' },
  contextId: { value: '', type: 'none' },
  payLoad: { value: '', type: 'none' },
};
\`\`\`

처음엔 \`useState\`로 갔다. 그런데 토글 하나만 구현해도 JSX가 금방 이렇게 된다.

\`\`\`tsx
<input
  onClick={() => {
    setTempSelectedItem({
      ...tempSelectedItem,
      type: {
        ...tempSelectedItem.type,
        marker: {
          ...tempSelectedItem.type.marker,
          value: !tempSelectedItem.type.marker.value,
        },
      },
    });
  }}
/>
\`\`\`

### 보기만 해도 복잡하며, UI가 하나의 로직처럼 보인다.

- JSX가 길어지고, UI 구조가 로직에 묻힘
- 중첩 스프레드가 복붙이 되면서 오타/누락 위험 급증
- 상태 변경 규칙이 각 컴포넌트/핸들러에 흩어져 추적 불가
- 테스트하려면 UI 이벤트부터 타야 해서 단위 테스트가 어려움

여기서 느낀 건 단순했다.

> 상태 변경 규칙을 UI에서 떼어내야 한다.
“어디서 어떻게 바뀌는가”를 한 곳에서 관리해야 한다.
> 

---

## 1. 전환 1: useReducer 도입 — “변경 규칙을 중앙화”

그래서 \`useReducer\`를 도입했다. 목적은 딱 하나.

> JSX는 dispatch만 한다.
변경 규칙은 reducer가 가진다.
> 

액션을 명세로 만들고 reducer에서만 상태를 바꾸게 했다.

\`\`\`tsx
const selectedItemReducer = (state: FilterItem[], action: EditAction): FilterItem[] => {
  switch (action.type) {
    case 'INIT': return ...
    case 'CHECK_ITEM': return ...
    case 'CHANGE_ITEM_NAME': return ...
    case 'TYPE_TOGGLE': return ...
    case 'CHANGE_EXTRA_INFO': return ...
    case 'ADD_ITEM': return ...
    case 'DELETE_ITEM': return ...
    default: return state
  }
};
\`\`\`

JSX는 이렇게 바뀌었다.

\`\`\`tsx
<input
  type="checkbox"
  checked={item.type.marker.value}
  onChange={() =>
    dispatch({ type: 'TYPE_TOGGLE', payload: { id: item.id, key: 'marker' } })
  }
/>
\`\`\`

### 이때부터

- UI가 다시 “UI”처럼 보이기 시작
- 액션이 명세가 되어 자동완성/오타 방지
- dispatch 로그/액션 기준 디버깅을 통해 상태 추적 용이
- 단위 테스트가 reducer 테스트로 간소화

---

## 2. 하지만: reducer가 거대한 switch가 되면 또 다른 지옥?

useReducer로 UI 직관성은 해결됐는데, 다음 불안이 왔다.

> “액션이 늘면 switch-case가 커진다.
이게 또 관리 지옥이 되지 않을까”
> 

그리고 이런 질문이 생겼다.

> reducer 로직을 외부 함수로 분리하면
JSX 핸들러 함수를 분리하는 거랑 뭐가 다르지?
> 

그렇기에 여기까지만 일단 작성했을 때 중요한 점은 진입 점이라는 것이다.

- JSX에서 함수로 빼면 로직이 다시 곳곳에 퍼질 수 있음 (분산 구조 유지)
- reducer에서 함수로 빼면 여전히 “상태 변경은 reducer를 통해서만” 발생 (집중 구조 유지)

즉, reducer의 switch는 “나쁜 것”이 아니라 정석이고
문제는 **응집도 없이 한 파일에 다 때려 넣는 것**이 진짜 문제임을 알게 되었다

---

## 3. 전환 2(핵심): 도메인 단위 reducer 분리 — “응집도 회복”

그래서 선택한 게 “도메인 분리”였다.

Filter 편집을 자세히 보면, 사실 하나의 덩어리가 아니라 도메인이 있다.

- **item CRUD**: 추가/삭제
- **item 기본 편집**: 체크, 이름 변경
- **type 도메인**: filter/marker 토글, marker color
- **extraInfo 도메인**: applicationId/contextId/payload value/type

파일 구조를 이렇게 가져갔다. 

\`\`\`
domain/filter/
  actions.ts
  reducer.ts                // top reducer: 액션 라우팅만
  reducers/
    itemCrud.ts
    itemEdit.ts
    type.ts
    extraInfo.ts
\`\`\`

top reducer는 “분배”만 한다.

\`\`\`tsx
export function selectedItemReducer(state: FilterItem[], action: EditAction) {
  switch (action.type) {
    case 'ADD_ITEM':
    case 'DELETE_ITEM':
      return reduceItemCrud(state, action);

    case 'CHECK_ITEM':
    case 'CHANGE_ITEM_NAME':
      return reduceItemEdit(state, action);

    case 'TYPE_TOGGLE':
    case 'CHANGE_MARKER_COLOR':
      return reduceType(state, action);

    case 'CHANGE_EXTRA_INFO':
    case 'CHANGE_EXTRA_INFO_TYPE':
      return reduceExtraInfo(state, action);

    default:
      return state;
  }
}
\`\`\`

### 여기서 얻은 이점

- bug가 나면 “어느 도메인 파일을 보면 되는지”가 명확
- 코드 리뷰가 쉬워짐 (책임이 명확)
- 단위 테스트가 도메인 단위로 쪼개짐 (type 테스트, extraInfo 테스트)
- 요구사항 확장 시 “도메인 내부에서만” 확장됨

---

## 4. 이 구조가 미래 Store 마이그레이션을 쉽게 만든다

> 도메인 단위 reducer 분리는 “지금 JSX를 깔끔하게 만드는 리팩터링”으로 끝나지 않는다.
나중에 Zustand/Redux 같은 store로 확장할 때, 마이그레이션을 재작성(rewrite)이 아니라 재배선(re-wiring)으로 바꿔준다.
> 

많은 사람들이 store 도입을 “전역 상태로 올리는 일”로 생각하지만, 실제로 어려운 지점은 그게 아니다.
진짜 비용을 만드는 건 보통 아래 네 가지다.

- 상태 변경 규칙이 UI(컴포넌트/핸들러) 여기저기에 퍼져 있는가?
- 변경 규칙이 **순수 함수(도메인 로직)** 로 분리되어 있는가?
- “무슨 변경이 가능한지”가 액션/명세로 정리되어 있는가?
- 도메인 경계(책임 단위)가 명확히 세워져 있는가?

도메인 단위로 reducer를 분리해 둔 구조는, 이미 위 조건들을 상당 부분 충족한다.
그래서 store로 가는 길이 “큰 수술”이 아니라 “단계적 전환”이 된다.

---

### 4.1 비즈니스 로직이 프레임워크(useReducer)로부터 독립된다

도메인 단위로 reducer를 나눠둔 핵심 가치는 “파일을 예쁘게 쪼갰다”가 아니다.

> 상태 변경 규칙(비즈니스 로직)을 UI/프레임워크 바깥으로 빼서
재사용 가능한 도메인 모듈로 만들어 둔 것 자체가 핵심이다.
> 

즉, 지금은 \`useReducer\`가 도메인 로직을 호출하지만,

- 이후 store(Zustand/Redux)를 도입해도
“같은 도메인 로직”을 그대로 호출할 수 있다.

결과적으로 마이그레이션 시 바뀌는 건 “규칙”이 아니라 **컨테이너(상태 보관/구독/디버깅 도구)** 쪽이 된다.

> 도메인 로직은 유지하고, 컨테이너만 교체할 수 있는 구조.
이게 마이그레이션 난이도를 결정한다.
> 

---

### 4.2 마이그레이션은 ‘갈아엎기’가 아니라 ‘단계적 전환’이 된다

여기서 중요한 포인트는 “store를 쓰면 reducer를 무조건 유지한다/삭제한다”가 아니라,
현실적으로는 **2단계 전환**이 가장 안전하고 자연스럽다는 점이다.

### (1) 1단계: Store를 “어댑터(Wrapper)”로 먼저 도입한다

초기에는 store가 기존 reducer를 그대로 호출하는 방식으로 시작할 수 있다.

- store가 \`dispatch(action)\`을 제공하고
- 그 dispatch가 내부적으로 \`selectedItemReducer(prev, action)\`를 호출해 next state를 만든다

이 단계의 의미는:

- UI 코드를 대거 수정하지 않고도
- store 기반 구독 최적화 / devtools / persistence 같은 “store 인프라”를 먼저 도입할 수 있다는 것

즉, 마이그레이션을 한 번에 끝내려 하지 않고 **리스크를 쪼개는 전략**이 된다.

### (2) 2단계: reducer를 “도메인 순수 업데이트 함수 집합”으로 변환한다 (궁극적으로 더 깔끔)

store 도입이 안정화되면, 다음 단계로 자연스럽게 “변환”이 가능해진다.

- switch(action) 같은 디스패치 레이어는 점점 의미가 줄어들고
- 대신 도메인 모듈에 “업데이트 함수(순수 함수)”만 남겨서
- store action 메서드가 그 함수를 호출하는 구조로 전환한다

예를 들면:

\`\`\`tsx
// domain/type/update.ts
export function toggleMarker(item: FilterItem): FilterItem {
  return {
    ...item,
    type: {
      ...item.type,
      marker: { ...item.type.marker, value: !item.type.marker.value },
    },
  };
}
\`\`\`

store에서는 로직을 새로 쓰는 대신, 이 함수를 호출해 상태를 바꾼다.

\`\`\`tsx
toggleMarker: (id) =>
  set(state => ({
    ...state,
    byId: {
      ...state.byId,
      [id]: toggleMarker(state.byId[id]),
    },
  }));
\`\`\`

이렇게 되면 마이그레이션은 “복붙으로 재작성”이 아니라
**도메인 함수 호출로 연결**되는 형태가 된다.

> store로 확장한 시점부터 reducer를 반드시 유지할 필요는 없다.
중요한 건 reducer라는 형식이 아니라, 그 안에 있던 도메인 변경 규칙을
순수 함수로 남겨 재사용하는 것이다.
> 

---

### 4.3 결국 “마이그레이션 비용”을 결정하는 건 구조다

미래에 store가 필요해지는 순간은 보통 아래 같은 상황에서 온다.

- 페이지를 넘어 편집 상태(draft)를 유지해야 할 때
- 여러 컴포넌트 트리(패널/모달/테이블)가 같은 상태를 공유해야 할 때
- Context 기반 전역화에서 리렌더 병목이 생길 때
- undo/redo, persist, multi-tab 동기화 같은 요구가 붙을 때

이 요구들을 store로 해결하는 건 “도구를 바꾸는 것”이 아니라
“상태의 수명/공유/관찰 가능성”을 확장하는 일이다.

그리고 그 확장의 비용은 “store를 쓰느냐 마느냐”가 아니라,

- 도메인 로직이 UI에 퍼져 있느냐
- 도메인 로직이 순수 함수로 모여 있느냐
- 책임 경계가 세워져 있느냐

이 **구조적 준비 상태**에 의해 결정된다.

> 그래서 도메인 단위 reducer 분리는
“현재의 리팩터링”이면서 동시에
“미래의 확장을 위한 투자(마이그레이션 레일)”다.
> 

---

## 5. 결론: 흐름을 한 줄로 정리하면

- **useState**로 중첩 상태를 직접 업데이트하니 UI가 로직에 잠식됨
- **useReducer**로 상태 변경 규칙을 중앙화해 UI를 정리함
- **도메인 reducer 분리**로 응집도를 회복하고 확장/테스트/유지보수성을 확보함
- 그 결과, 나중에 **store로 갈 때 도메인 로직을 유지한 채 컨테이너만 바꾸는 “점진 마이그레이션”이 가능**해짐

---

이런 고민을 하면서 시간을 꽤 많이 썼다.

“왜 이렇게까지 설계해야 하지?”, “어떤 방식이 진짜 맞는 걸까?”를 계속 되물었고, 성능과 유지보수 관점에서 최선의 선택이 뭔지도 끝없이 저울질했다.

근데 파고들수록 깨달은 건 하나였다. **정답은 딱 하나로 떨어지지 않는다**는 것.

AI에게 물어보니 내가 선택한 방식도 충분히 타당하다고 한다. 결국 중요한 건 “누가 맞냐”가 아니라, **우리 상황에서 어떤 근거로 그 선택을 했는지**였다.

이제는 느낌이나 유행이 아니라, 요구사항과 제약, 팀의 운영 방식까지 포함한 **근거 기반의 최적 선택**이 더 중요하다고 생각한다.`,nb=`## 0. 시니어는 AI를 싫어하지 않았다. 오히려 너무 좋아했다.

나는 막연히 **“전통적 관점의 시니어 개발자라면 AI에 대해 회의적일 것”** 이라 짐작했다.
하지만 현실은 정반대였다.

- 시니어: “AI는 무조건 도입해야지. 이제 업무 프로세스 전체를 자동화해야 해.”
- 나: “오… 그렇죠. 그런데 구체적으로 어떤 단계를 어떤 방식으로 자동화하면 좋을까요?”
- 시니어: “그냥 다 자동화하면 되잖아. 신기술이잖아. 효율이 나오는데 안 할 이유가 없지.”
- 나: (당황하며) “방법론을 좀 더 찾아보겠습니다…”
- 시니어: “하면서 ~~기능 넣는 거, AI 쓰면 한 시간이면 충분하지? 빨리 끝내~”
- 나: “(빠르긴 하겠지만… 안정적으로 돌아갈지는 검증해 봐야 할 텐데…)”

이 대화가 오가는 순간, 내 머릿속에서는 심각한 오류가 발생했다.

> TypeError: 구체적인 기술적 근거 is not a function

AI에 반대하는 것도, 신기술을 거부하는 것도 아닌데 **기묘하게 찝찝했다.**
그 말은 분명 틀린 게 없었지만, **너무나 맞는 말이라서 오히려 아무런 실체도 담고 있지 않은 ‘구호’처럼 들렸기** 때문이다.

---

## 1. 구현의 민주화: “코드 치는 손”은 저렴해졌고, “의도를 정의하는 머리”는 비싸졌다

예전에는 개발자의 가치가 곧 **‘숙련도’** 였다.

- 특정 언어의 문법을 깊게 파고든 사람
- 프레임워크의 복잡한 생명주기를 통달한 사람
- 빌드, 배포, 디버깅의 지옥을 수없이 통과한 사람

이러한 숙련은 분명한 가치가 있었고, 레거시 시스템을 유지보수하는 현시점에도 여전히 유효한 역량이다.
하지만 문제는 그 이후다.

### ✅ AI는 “개발”이라는 행위의 단가를 낮춰버렸다

리액트 컴포넌트, API 핸들러, 타입 정의, 테스트 코드, 문서화.
이제 **“어떻게 구현할 것인가?”** 에 대한 해답은 더 이상 개발자의 삽질이나 검색이 아니라, **“무엇을 만들겠다”는 의도를 설명하는 행위**로 대체되기 시작했다.

그 결과 개발의 병목 현상은 이동했다.

- 과거: 구현하는 **‘손’ (Coding)**
- 현재: 문제를 정의하고 설계하는 **‘머리’ (Intent & Logic)**

이것이 바로 “구현의 민주화”가 의미하는 바다.
**누구나 만들 수 있다는 말은**, 뒤집어 보면 **아무나 만들 수 있다는 뜻**이고, 더 나아가면 **아무렇게나 만들 수도 있다는 위험**을 내포한다.

나의 불안은 바로 이 지점에서 시작되었다.

---

## 2. “업무 전체 자동화”가 매력적으로 들리는 이유: 조직이 선호하는 언어니까

시니어가 외치는 “업무 전체 자동화”는 기술적인 용어라기보다 조직 운영의 언어에 가깝다.

- “리드타임 단축 및 생산성 극대화”
- “단순 반복 업무의 완전 제거”
- “인력 운영의 효율화와 표준화”

전부 맞는 말이다.
시니어가 이 지점을 강조하는 이유도 충분히 이해한다.

시니어는 코드 한 줄보다 **전체 업무의 흐름(Workflow)** 을 책임지는 위치에 있기 때문이다.
개별 구현은 팀원이 하더라도, 프로세스가 꼬여서 발생하는 사고는 결국 시니어가 수습해야 한다.
그래서 그들의 뇌는 다음과 같이 작동한다.

> “개발은 결국 흐름이다. 그 흐름을 자동화하면 생산성과 안정성이 동시에 잡힐 것이다.”

이 논리는 완벽해 보이지만, 치명적인 함정이 있다.
**“자동화”라는 단어가 너무 거대하다는 것**이다.

진정한 자동화란 단순히 ‘할 수 있다’는 선언이 아니라,
**“어디까지 자동화할 것이며, 무엇을 사람이 책임질 것인가”를 정밀하게 설계하는 일**이다.

그 설계가 빠진 자동화는 공허한 구호에 불과하다.
내가 느낀 찝찝함의 정체는 바로 그 **‘비어 있는 설계’** 였다.

---

## 3. 주니어의 실종: 자동화가 ‘성장의 사다리’를 치워버릴 때

전통적인 개발자의 성장 루트는 단계적이었다.

- 주니어: 사소한 UI 수정, 단위 테스트, 운영 보조, 문서 정리를 통해 시스템을 익힘
- 미들: 기능 단위의 설계와 구현, 코드 리뷰를 통한 협업 능력 배양
- 시니어: 전체 아키텍처 설계, 리스크 관리, 조직 조율 및 운영 책임

그런데 시니어가 말하는 **“업무 전체 자동화”** 가 실행되면,
가장 먼저 사라지는 것은 주니어들이 경험을 쌓던 **‘사다리의 아래칸’** 이다.

반복적인 코드 생성, 테스트 초안 작성, 문서화, 단순 분석 업무가 자동화되는 순간, 주니어들은 설 자리를 잃는다.

회사는 말할 것이다.

> “주니어를 뽑아서 가르칠 시간에 AI를 쓰는 게 훨씬 싸고 빠르지 않나?”

하지만 2~3년 뒤, 업계는 똑같은 목소리로 비명을 지를 것이다.

> “AI가 짠 코드를 이해하고 전체를 조망할 줄 아는 미들과 시니어가 없다.”

이것이 **‘숙련도의 단절’** 이다.

자동화는 당장의 생산성을 높여줄지 모르지만, **인재를 숙성시키는 시간과 기회를 앗아간다.**
지금 아낀 비용은 훗날 **‘인간 아키텍트의 부재’** 라는 더 큰 비용으로 돌아올 것이다.

비극적인 것은, 이 미래 비용은 실제로 터지기 전까지 **지표상에 존재하지 않는 것처럼 취급**된다는 사실이다.

---

## 4. 개발의 제조업화: 분업의 경계가 무너지는 지점

그동안 소프트웨어 개발은 철저히 분업화된 제조업 모델을 따랐다.

> 기획 → 디자인 → 프론트엔드 → 백엔드 → QA → 운영

각 단계는 명확한 산출물과 승인 절차, 그리고 책임의 경계가 있었다.
하지만 AI는 이 경계를 허물고 있다.

- 기획자가 직접 프로토타입을 뽑아내고,
- 디자이너가 코드를 생성하며,
- 개발자가 인프라 배포까지 혼자 처리한다.

조직은 이 **‘경계의 파괴’** 를 반긴다. 흐름을 통째로 최적화할 수 있기 때문이다.

그러나 분업은 비효율적이기도 했지만, 동시에 **‘느리지만 안전한’ 품질 체크포인트**이기도 했다.
AI로 흐름을 통째로 연결해버리면, 사람이 책임지던 검증 단계가 함께 녹아내릴 위험이 있다.

제조업에서 창작업으로 돌아가는 것은 환영할 일이지만,
**책임의 주체가 모호해진 채 컨베이어 벨트만 빨라지는 상황**은 대형 사고를 기다리는 복선이 될 수 있다.

---

## 5. 기술부채의 진화: ‘AI Sludge(찌꺼기)’라는 새로운 유형의 레거시

AI가 생성한 결과물은 겉보기엔 훌륭하다.
문제는 그 양이 너무 많고 생성 속도가 압도적이라는 점이다.

- 누구도 깊게 읽지 않는 방대한 PR이 쌓이고,
- 의미 없는 자동 생성 테스트가 늘어나며,
- 서로 다른 스타일의 코드가 뒤섞여 설계 의도가 불분명해진다.

결국 **“사람이 이해할 수 없는 거대한 코드와 프로세스의 덩어리”** 가 형성된다.
이것이 바로 최근 논의되는 **AI Sludge(AI 찌꺼기)** 이다.

과거의 레거시가 시간이 흐르며 굳어진 괴물이었다면,
AI 레거시는 **속도가 만들어낸 괴물**이다.

업무량은 줄어드는 것 같지만, 역설적으로 AI가 뱉어낸 결과물을 정리하고 정합성을 유지하는 비용은 폭증한다.

미래 개발자의 핵심 역량이 코드를 쓰는 것이 아니라,
AI가 만든 결과물 속에서 **‘독소’를 찾아내 정화하는 능력**이 되어야 하는 이유다.

---

## 6. 그래서 내가 느낀 찝찝함의 진짜 정체

처음에는 시니어가 AI를 거부할 것이라 생각해서 불안했다.
하지만 다시 생각해보니 진짜 불안의 이유는 시니어의 **“추상적인 찬성”** 때문이었다.

- 구호: “AI로 업무 전체를 자동화하면 좋다.”
- 엔지니어링: “어떤 업무를 어느 수준까지 자동화하고, 품질 게이트(Quality Gate)를 어디에 둘 것인가?”

내가 느낀 찝찝함은 AI 그 자체가 아니라,
**구체화되지 않은 자동화가 가져올 무책임함에 대한 경고**였다.

실무에서 직접 손을 더럽히며 굴러본 사람들은 알고 있다.
설계 없는 자동화는 ‘실수’를 개선하는 게 아니라, **‘실수’를 대량 생산하는 시스템**이 된다는 것을.

---

## 7. 시니어가 디테일을 말하지 않는 이유에 대한 고찰

물론 이것이 단순히 시니어 개인의 무능은 아닐 것이다.

- **시니어의 시각**: 그들은 기술적 디테일보다 조직 전체의 리스크(보안, 비용, 책임 소재)를 먼저 고려해야 하기에, 안전하고 포괄적인 단어(혁신, 생산성) 뒤로 숨는 경향이 있다.
- **도구의 특성**: AI는 너무나 범용적인 도구라 ‘정답’이라 부를만한 표준 가이드가 아직 부족하다. 디테일한 방법론을 제시하는 것 자체가 큰 리스크가 될 수 있다.

하지만 리더가 구호만 남기고 디테일을 피할 때,
그 공백을 메워야 하는 실무자들의 부담은 가중될 수밖에 없다.

---

## 8. 해결책: AI를 “신기술”이 아닌 “통제 가능한 공학 도구”로 대하기

내가 내린 결론은 명확하다.
AI는 무조건적인 선악의 문제가 아니라,
**“어디에 활용하고, 어디서부터 인간이 책임질 것인가”를 재정의하는 문제**다.

“전체 자동화”라는 추상적 개념을 다음과 같이 구체적으로 분류해야 한다.

### 8-1) 자동화 대상의 전략적 분류

- **생성(Generation)**: 코드/문서/테스트의 초안 작성을 AI에 맡겨 속도를 높인다.
- **검증(Verification)**: AI를 보조 도구로 써서 취약점을 찾되, 인간이 최종 판단한다.
- **운영(Operations)**: 로그 요약이나 장애 알림 분류 등 단순 판단을 자동화한다.

### 8-2) 품질 게이트(Quality Gate)의 명시화

속도가 빨라질수록 검증은 더 촘촘해야 한다.

- AI 생성 코드에 대한 ‘인간 리뷰어’의 필수 승인
- 민감 정보 노출 방지를 위한 자동 스캔 룰 적용
- AI가 이해하지 못하는 비즈니스 로직에 대한 명시적 문서화

---

## 9. 결론: AI 시대의 핵심은 ‘자동화’가 아니라 ‘책임의 재설계’다

AI는 개발자의 일을 뺏는 것이 아니라,
개발자의 책임이 머무는 위치를 바꾼다.

우리는 코드를 치는 기술자에서,
**“자동화된 흐름의 품질을 보장하는 감시자이자 설계자”** 로 진화해야 한다.

구체적인 공학적 설계가 뒷받침되지 않은 자동화는 혁신이 아니라 **대량 생산형 사고**일 뿐이다.
**“누가 최종 책임을 질 것인가?”** 이 질문에 답할 수 없다면 그 자동화는 멈춰야 한다.

---

## PS. 나를 설득하기 위해 남기는 자조적 체크리스트

- “자동화”는 목표가 아니라 수단일 뿐이다.
- “AI를 쓴다”는 말 자체는 아무런 기술적 가치를 지니지 않는다.
- AI가 만든 결과물은 ‘초안’이지 ‘면책권’이 아니다.
- 주니어가 사라지면, 시니어의 자리를 이어받을 다음 세대도 사라진다.
- 결국 모든 장애의 git blame은 인간인 나에게 돌아온다.

---
`,tb=`이전 글에서\r
\r
> “ECMAScript(스펙) / JS 엔진(V8) / 호스트(브라우저/Node)”\r
\r
이렇게 세 레이어로 나눠서 JS 이벤트 루프를 봤다면,\r
\r
이번에는 **브라우저 쪽을 확대**해서 들여다볼 차례다.\r
\r
- 브라우저는 프로세스를 어떻게 나눠 쓰고 있는지?\r
- V8은 어디에 올라가서 돌아가는지?\r
- DOM 업데이트 → 화면 픽셀로 찍히기까지 어떤 파이프라인을 거치는지?\r
\r
실제 구조를 알고 나면,\r
\r
- “메인 스레드가 바쁘면 왜 렌더링이 멈추는지”\r
- “requestAnimationFrame이 왜 ‘프레임 기준’ 콜백인지”\r
- “Web Worker를 쓰면 뭐가 풀리고, 뭐는 여전히 막히는지”\r
\r
같은 것들이 훨씬 더 직관적으로 보인다.\r
\r
---\r
\r
## 0. 큰 그림: 브라우저는 사실 **여러 프로세스 + 여러 스레드**다\r
\r
크롬(Chromium) 기반 브라우저를 기준으로 보면, 구조는 대략 이렇다:\r
\r
- **브라우저 프로세스 (Browser Process)**\r
  - 탭 관리, 주소창, 히스토리, 네트워크 요청 등 “브라우저 전체” 관장\r
- **렌더러 프로세스 (Renderer Process)**\r
  - 탭 한 개당 최소 1개 (사이트 격리 전략에 따라 더 세분화될 수도 있음)\r
  - 이 프로세스 안에서:\r
    - DOM, CSSOM, 레이아웃, 페인트\r
    - JS 엔진(V8)\r
    - 메인 스레드 + 워커 스레드들\r
- **GPU 프로세스 (GPU Process)**\r
  - GPU와 통신, 컴포지팅/렌더링 관련 작업 담당\r
- 그 외 여러 유틸리티/플러그인 프로세스 등\r
\r
우리가 JS, DOM, CSS, Reflow/자식 요소 이런 거 이야기할 때\r
\r
**대부분은 “렌더러 프로세스” 내부 이야기**다.\r
\r
그리고 그 렌더러 프로세스 안의 **메인 스레드**에\r
\r
V8, DOM, 스타일/레이아웃 로직이 같이 올라가 있다.\r
\r
---\r
\r
## 1. 렌더러 프로세스 내부: 메인 스레드와 V8 Isolate\r
\r
### 1-1. 메인 스레드(Main Thread)가 하는 일\r
\r
렌더러 프로세스의 메인 스레드는 말 그대로 “한 탭의 뇌”다.\r
\r
- JS 실행 (V8)\r
- DOM 조작\r
- 스타일 계산 (Style/Recalculate Style)\r
- 레이아웃(Layout)\r
- 일부 페인트 단계\r
- 사용자 입력 이벤트 처리 (click, input 등 디스패치)\r
\r
즉, 우리가\r
\r
\`\`\`jsx\r
while (true) {} // 이런 바보 코드\r
\`\`\`\r
\r
같은 걸 메인 스레드에서 돌리면,\r
\r
이 탭은 ==**죽었다고 봐도 됨**== 😂\r
\r
- JS도 못 돌리고\r
- DOM 업데이트도 안 되고\r
- 마우스 클릭도 응답 없고\r
- 스크롤도 안 되고\r
- 렌더링도 못 한다\r
\r
이게 바로 “싱글 스레드 UI의 지옥” 포인트고,\r
\r
여기에 맞춰 **이벤트 루프 + 렌더링 파이프라인**이 설계되어 있다.\r
\r
### 1-2. V8과 Isolate 개념\r
\r
V8은 내부적으로 **Isolate**라는 개념을 쓴다.\r
\r
- **Isolate = 독립된 JS 런타임 인스턴스**\r
  - 자기만의 힙, 스택, GC, microtask queue를 가진다.\r
  - 기본적으로 한 Isolate는 한 스레드에 바인딩된다고 보면 된다.\r
- 크롬에서는 **렌더러 프로세스 안에 최소 1개의 Isolate**가 있고,\r
  - 각 탭/오리진 조합에 따라 더 세분화되는 경우도 있다(사이트 격리 정책 등).\r
\r
중요 포인트:\r
\r
> 한 탭(렌더러 프로세스) 안의 메인 스레드에 **“V8 Isolate + DOM + 렌더링 로직”**이 같이 얹혀 있다.\r
\r
그래서:\r
\r
- JS가 돌면서 DOM을 조작하는 게 “동기”로 보이는 이유,\r
- DOM API가 JS에서 바로 호출 가능한 이유\r
\r
모두 **같은 스레드, 같은 프로세스 안에 있기 때문**이다.\r
\r
---\r
\r
## 2. 렌더링 파이프라인: HTML → DOM → 픽셀까지\r
\r
브라우저 렌더링 파이프라인을 간략히 정리하면:\r
\r
1. **DOM 트리 생성 (Parsing)**\r
2. **CSSOM 트리 생성**\r
3. **Render Tree 생성 (DOM + CSSOM 결합)**\r
4. **Layout (Reflow)**\r
   - 각 노드의 위치와 크기 계산\r
5. **Paint (Rasterization 준비)**\r
   - 어떤 색/선/텍스트가 어디에 그려져야 하는지\r
6. **Compositing (합성)**\r
   - 레이어를 GPU로 보내고, 최종 프레임 조립\r
\r
이 중 **1~4단계 + 일부 아날로그한 Paint**는\r
\r
메인 스레드에서 DOM/CSS/레이아웃 알고리즘으로 수행되고,\r
\r
실제 헤비한 래스터라이즈/컴포지팅은 GPU 프로세스 쪽에서 더 처리된다.\r
\r
### 2-1. DOM/CSSOM 생성\r
\r
- HTML 파서가 HTML을 읽으면서 **DOM 트리**를 만든다.\r
- \`<style>\`, CSS 파일, 인라인 스타일 등을 파싱해서 **CSSOM**을 만든다.\r
- 둘을 합쳐서 “이 요소는 이 스타일을 가진다”라는 **Styled DOM / Render Tree**를 형성.\r
\r
이 과정에서 JS가 끼어들면:\r
\r
- \`<script>\` 태그를 만나면\r
  - JS 실행(V8) → DOM 읽기/쓰기 가능\r
  - DOM 완성 시점에 영향을 줄 수도 있음\r
- \`document.write\`, 동적 생성, 동적 CSS 주입 등으로 렌더링 흐름이 흔들릴 수 있다.\r
\r
### 2-2. Layout (Reflow)\r
\r
DOM과 스타일 정보를 기반으로:\r
\r
- 각 요소의 **위치(x, y)**, **크기(width, height)** 등을 계산한다.\r
- flex, grid, position, margin, padding 등 CSS 레이아웃 규칙을 다 적용.\r
\r
레거시 표현으로는 “Reflow”라고 부르는 단계.\r
\r
JS에서 렌더링 타이밍과 상관 없이\r
\r
DOM을 마구 변경하면:\r
\r
- 브라우저가 **레이아웃을 재계산(Reflow)** 해야 하고,\r
- 이건 메인 스레드에서 꽤 무거운 작업일 수 있다.\r
\r
### 2-3. Paint + Raster + Compositing\r
\r
레이아웃 결과를 토대로:\r
\r
- 각 요소를 어떻게 그릴지(Paint) 결정하고,\r
- 레이어(layer) 단위로 나눠서,\r
- GPU 프로세스 쪽에서 래스터라이즈(텍스처 만들기)하고,\r
- 여러 레이어를 합성(Compositing)해서 하나의 프레임 이미지로 만든다.\r
\r
**position: fixed**, **transform**, **opacity**, **will-change** 같은 속성이\r
\r
왜 “레이어 승격”과 연결되어 성능에 영향을 주는지 바로 여기와 관계 있다.\r
\r
요약하면:\r
\r
> 메인 스레드: “무엇을, 어디에, 어떻게 그릴지” 결정\r
>\r
> GPU: “결정된 걸 실제 픽셀로 찍어내는” 고성능 노동자\r
\r
---\r
\r
## 3. 이벤트 루프와 렌더링 타이밍의 관계\r
\r
이제 이전 글에서 이야기했던 **Task/Microtask + 렌더링** 흐름과 연결해보자.\r
\r
하나의 렌더러 프로세스 메인 스레드에서의 루프를\r
\r
엄청 단순화하면 이런 그림이 된다:\r
\r
\`\`\`\r
[1] Task 실행 (JS 콜백, 이벤트 핸들러 등)\r
[2] Microtask 실행 (Promise.then, queueMicrotask 등)\r
[3] 렌더링 타이밍이면 → 렌더링 파이프라인 (스타일, 레이아웃, 페인트, 합성)\r
[4] 다음 Task...\r
\`\`\`\r
\r
그래서 다음과 같은 현상이 생긴다.\r
\r
### 3-1. JS가 오래 돌면 렌더링이 막힌다\r
\r
\`\`\`jsx\r
button.addEventListener("click", () => {\r
  const start = performance.now();\r
  while (performance.now() - start < 2000) {\r
    // 2초 동안 바쁜 루프\r
  }\r
});\r
\`\`\`\r
\r
- 이 while이 돌아가는 동안:\r
  - 메인 스레드는 JS 실행에 100% 사용됨.\r
  - 이벤트 루프가 다음 Task로 못 넘어감.\r
  - Microtask도 안 돌아감 (콜 스택이 안 비니까).\r
  - 렌더링 파이프라인도 못 됨.\r
\r
그래서 UI는 그대로 멈춰 있고,\r
\r
브라우저는 “응답 없음” 팝업을 띄우고 싶어 한다.\r
\r
이게 “JS는 싱글 스레드라서 UI가 멈출 수 있다”의 실체다.\r
\r
### 3-2. requestAnimationFrame이 “프레임 맞춰 호출”되는 이유\r
\r
\`requestAnimationFrame(callback)\`은:\r
\r
- **다음 렌더링 시점 직전에** callback을 실행해달라는 요청이다.\r
- 이벤트 루프 입장에선:\r
  - Task, Microtask 처리 이후,\r
  - 렌더링을 하기 직전에, rAF 콜백 호출 → 그 안에서 DOM 업데이트 → 그걸 가지고 렌더링.\r
\r
그래서 애니메이션 로직을 rAF 안에 넣으면:\r
\r
- 프레임 단위로 DOM 변경\r
- 렌더링 타이밍과 동기화된 JS 실행\r
\r
을 보장받을 수 있다.\r
\r
### 3-3. Microtask 과사용 = 렌더링 Starvation 가능\r
\r
\`Promise.then\`, \`queueMicrotask\`는 microtask 큐에 들어가고,\r
\r
이 큐는 Task와 Task 사이에 “다 비워질 때까지” 실행된다.\r
\r
\`\`\`jsx\r
functionloop() {\r
queueMicrotask(loop);\r
}\r
loop();\r
\`\`\`\r
\r
같은 코드를 돌리면 어떻게 될까?\r
\r
- Task 하나 끝날 때마다 microtask 큐를 비워야 하는데\r
- 큐를 비울 때마다 또 새 microtask가 들어감\r
- → 사실상 이벤트 루프가 **다음 Task로 못 넘어감**\r
- → 렌더링, 입력 처리 모두 막힘\r
\r
즉, **microtask만으로도 UI를 굳혀버릴 수 있다**는 걸 기억해야 한다.\r
\r
---\r
\r
## 4. Web Worker는 어디에 서 있고, 뭐가 해결/미해결?\r
\r
> “싱글 스레드가 문제면 Worker 쓰면 되지 않나요?”\r
\r
**Web Worker**는 렌더러 프로세스 안에서 **별도 스레드**로 생성된다.\r
\r
- Worker 스레드 안에도 **V8 Isolate**가 하나 더 붙는다.\r
- 그 안에서 JS를 돌릴 수 있고,\r
  메인 스레드와는 \`postMessage\`로 메시지 교환.\r
\r
장점:\r
\r
- 무거운 계산/파싱/데이터 처리 로직을 Worker로 넘기면\r
  메인 스레드가 그만큼 가벼워짐.\r
- 메인 스레드는 DOM/렌더링/이벤트 처리에 집중 가능.\r
\r
하지만:\r
\r
- Worker는 **DOM에 직접 접근할 수 없다.**\r
  (\`document\`, \`window\` 없음)\r
- 최종 DOM 업데이트는 여전히 메인 스레드가 해야 한다.\r
- 즉, “화면에 반영되는 부분”은 여전히 싱글 스레드 목이 좁다.\r
\r
정리하면:\r
\r
> Worker = 메인 스레드 짐을 덜어주는 노동자,\r
>\r
> 하지만 **UI/렌더링 목줄은 여전히 메인 스레드**에 묶여 있다.\r
\r
---\r
\r
## 5. 실제로 이 구조를 어떻게 활용할까? (실무 관점 몇 가지)\r
\r
실제 프론트 작업/실시간 모니터링 UI/대시보드 같은 걸 만들면서\r
\r
알아두면 좋은 실전 팁들을 구조에 맞춰 연결해보면:\r
\r
1. **메인 스레드를 오래 점유하는 코드 피하기**\r
   - 큰 JSON 파싱, 복잡한 연산 → Web Worker로 넘기기\r
   - 큰 배열 map/filter/reduce 연속 호출 → chunk로 나누고 \`setTimeout\`/\`rAF\`로 쪼개기\r
2. **DOM 변경은 “배치해서” 하기**\r
   - 루프 안에서 DOM 읽기/쓰기 섞어 쓰지 말고,\r
     - 먼저 읽기\r
     - 나중에 쓰기\r
   - React/프레임워크들이 “렌더 → 커밋” 단계를 나누는 이유도 비슷한 맥락.\r
3. **Promise/microtask는 “즉시 후속 처리”에만 쓰기**\r
   - 상태 변경 직후, 그에 의존하는 후속 처리 한 번 정도는 OK\r
   - microtask 안에서 또 microtask 무한으로 만드는 패턴은 조심 (렌더링 못 함)\r
4. **requestAnimationFrame은 애니메이션 전용으로**\r
   - 스크롤, 드래그, 그래프 실시간 업데이트 같은 것들\r
   - “프레임 당 1번 갱신”이 보기에 제일 자연스러움\r
     (setInterval 16ms와는 느낌이 다르다)\r
\r
---\r
\r
## 6. 마무리: 브라우저를 “작은 운영체제”처럼 보기\r
\r
이제 전체를 한 번 더 요약해보면:\r
\r
- 브라우저는:\r
  - 브라우저 프로세스 + 렌더러 프로세스 + GPU 프로세스 등으로 이루어진 “작은 OS” 같고\r
- 렌더러 프로세스 안에서는:\r
  - 메인 스레드 위에 **V8 Isolate + DOM + 렌더링 로직** 이 같이 올라가 돌아가며\r
- 이벤트 루프는:\r
  - Task → Microtask → 렌더링 파이프라인 → Task…\r
    이런 순환을 계속 돌리고 있다.\r
\r
이 구조를 알고 나면,\r
\r
- “왜 JS와 렌더링이 서로 영향을 주는지”\r
- “왜 어떤 코드는 프레임 드랍을 만들고, 어떤 패턴은 부드럽게 느껴지는지”\r
- “왜 Web Worker를 써도 DOM 쪽 병목이 완전히 사라지지 않는지”\r
\r
같은 것들이 **“감”이 아니라 구조적으로 이해**된다.\r
`,rb=`HTML/CSS/JS는 아는데… 그래서 “웹”이 어떻게 화면이 되는 건데?\r
\r
웹 개발 조금만 하다 보면 이런 시점이 온다.\r
\r
- HTML은 구조\r
- CSS는 스타일\r
- JS는 동작\r
\r
여기까지는 알겠는데…\r
\r
> “그래서… 웹이 뭐임?”\r
> “왜 URL 치면 화면이 뜨는 거지?”\r
> “그 HTML 문자열이 어떻게 픽셀이 되는 거야?”\r
\r
나도 이 지점에서 한동안 멈춰 있었음.\r
문서 보면 “DOM, CSSOM, 렌더 트리, 레이아웃, 페인트” 이런 단어가 나오는데 그냥 외우면 끝이 아니더라.\r
\r
그래서 오늘은 “웹을 **동작 원리 관점**”에서 한 번 제대로 풀어보려고 한다.\r
\r
결론부터 말하면:\r
\r
> 웹은 “화면 기술”이 아니라\r
> **리소스(문서)를 주소로 요청하고, 응답을 받아, 브라우저가 해석해서 보여주는 시스템**이다.\r
\r
이 관점이 잡히면 HTML/CSS/JS가 왜 그렇게 나뉘어 있고,\r
React/Vue가 왜 등장했고, 웹 성능이 왜 중요한지까지 줄줄이 이어진다.\r
\r
---\r
\r
## 0. 웹의 본질: “주소로 리소스를 찾고 → 프로토콜로 주고받고 → 브라우저가 해석한다”\r
\r
웹을 한 줄로 요약하면 이거다.\r
\r
> **URL로 리소스를 식별하고 → HTTP로 요청/응답하고 → 브라우저가 해석해서 렌더링한다.**\r
\r
여기서 3요소만 제대로 잡으면 웹의 절반은 끝난다.\r
\r
### 0-1) URL: “어디에 뭐가 있는지”를 식별하는 체계\r
\r
URL은 그냥 주소가 아니다. “리소스 식별자”다.\r
\r
- \`https://example.com/posts/1\`\r
- \`https://cdn.example.com/app.js\`\r
- \`https://api.example.com/users\`\r
\r
이건 전부 **“무언가를 가리키는 것”** 이지, 꼭 HTML만 가리키는 게 아니다.\r
\r
웹에서 리소스는:\r
\r
- HTML 문서\r
- CSS 파일\r
- JS 번들\r
- 이미지/폰트\r
- JSON(API 응답)\r
- video/audio\r
- wasm\r
- …등등 전부 포함된다.\r
\r
### 0-2) HTTP: “그걸 어떻게 주고받는지”를 정하는 규칙\r
\r
HTTP는 “웹의 운송 규칙”이다.\r
\r
- 클라이언트(브라우저)가 요청(request)을 보내고\r
- 서버가 응답(response)을 준다.\r
\r
그리고 그 요청/응답에는 메타데이터가 붙는다.\r
\r
- Method: GET/POST/PUT/DELETE…\r
- Status: 200/301/404/500…\r
- Header: Content-Type, Cache-Control, Cookie…\r
\r
여기서 **Content-Type**이 진짜 중요하다.\r
\r
브라우저는 응답을 받을 때 이렇게 생각한다.\r
\r
> “이게 HTML이야? JS야? 이미지야? JSON이야?”\r
\r
그 판단이 렌더링 흐름을 결정한다.\r
\r
### 0-3) 브라우저: “받은 리소스를 이해하고 실행/렌더링하는 런타임”\r
\r
브라우저는 단순한 뷰어가 아니다.\r
\r
- 네트워크 요청도 하고\r
- HTML/CSS 파싱도 하고\r
- JS 실행도 하고\r
- GPU로 렌더링도 한다\r
\r
말 그대로 **웹 앱을 실행하는 운영체제급 런타임**에 가깝다.\r
\r
---\r
\r
## 1. HTML: “문서의 구조와 의미(semantic)를 정의하는 언어”\r
\r
HTML을 처음 배울 때 다들 이렇게 외운다.\r
\r
> HTML = HyperText Markup Language\r
\r
근데 진짜 중요한 건 HyperText보다 Markup이다.\r
\r
HTML은 “프로그래밍 언어”가 아니라\r
**문서의 구조를 선언하는 언어**다.\r
\r
- \`<h1>\`: 이건 제목이다\r
- \`<p>\`: 이건 문단이다\r
- \`<nav>\`: 이건 내비게이션이다\r
- \`<button>\`: 이건 버튼이다\r
\r
즉 HTML은 “무엇이 무엇인지”를 알려주는 **의미 기반 문서**다.\r
\r
그래서 HTML에는:\r
\r
- 변수 없음\r
- if 없음\r
- for 없음\r
\r
대신 “구조/의미/관계”만 있다.\r
\r
---\r
\r
## 2. 브라우저는 HTML 문자열을 그대로 쓰지 않는다 → DOM을 만든다\r
\r
여기서 웹 동작의 핵심이 시작된다.\r
\r
HTML은 그냥 텍스트다.\r
\r
\`\`\`html\r
<div><p>Hello</p></div>\r
\`\`\`\r
\r
이걸 텍스트 그대로는 “화면”으로 만들 수 없다.\r
그래서 브라우저는 HTML을 파싱해서 **DOM 트리**로 바꾼다.\r
\r
> HTML → Parsing → DOM(Document Object Model)\r
\r
DOM은 쉽게 말하면:\r
\r
- 문서를 **트리 구조 객체**로 만든 것\r
- JS가 \`document.querySelector()\`로 만지는 그 대상\r
\r
HTML이 “문서 문자열”이라면,\r
DOM은 “렌더링/조작 가능한 객체 모델”이다.\r
\r
---\r
\r
## 3. CSS: “문서를 어떻게 보이게 할지”를 규칙으로 정의한다 (그리고 CSSOM)\r
\r
CSS는 스타일 언어인데, 여기서도 중요한 포인트가 있다.\r
\r
### 3-1) CSS가 생긴 이유 = HTML이 스타일로 오염되던 시절을 끝내기 위해\r
\r
옛날 HTML은 \`<table>\`로 레이아웃 만들고\r
\`<font>\`로 폰트 바꾸고\r
\`bgcolor\`로 배경색 넣고 난리였다.\r
\r
결국 HTML이 문서가 아니라 “디자인 스크립트”가 돼버림.\r
\r
그래서 탄생한 철학이 이거다.\r
\r
> 구조(HTML)와 표현(CSS)을 분리하자.\r
\r
이게 지금 웹 개발의 근간이다.\r
\r
### 3-2) 브라우저는 CSS도 문자열로 쓰지 않는다 → CSSOM\r
\r
CSS도 결국 텍스트다.\r
\r
\`\`\`css\r
p {\r
  color: red;\r
}\r
\`\`\`\r
\r
브라우저는 이것도 파싱해서 트리화한다.\r
\r
> CSS → Parsing → CSSOM(CSS Object Model)\r
\r
DOM과 CSSOM이 둘 다 준비되어야 “렌더링”을 시작할 수 있다.\r
\r
---\r
\r
## 4. JS(JavaScript): “동작과 로직”을 담당한다\r
\r
그리고 여기서 오해하면 안 되는 사실 하나\r
\r
JS는 웹에 “행동”을 부여한다.\r
\r
- 클릭하면 열리고\r
- 스크롤하면 로딩되고\r
- 서버에서 데이터를 가져오고\r
- 화면이 동적으로 바뀌고\r
\r
여기까지는 다들 아는데, 진짜 중요한 사실:\r
\r
> JS 엔진은 **JS 코드만 실행한다**\r
> DOM 조작, 네트워크 요청, 타이머는 JS 언어 자체 기능이 아니라 **브라우저(Web API)가 제공**한다.\r
\r
즉:\r
\r
- V8 같은 JS 엔진: “자바스크립트 실행기”\r
- Web APIs: “DOM, fetch, setTimeout, event 등 기능 제공자”\r
- Event Loop: “둘 사이를 연결하는 스케줄러”\r
\r
이 삼각형을 이해해야 “웹이 돌아가는 방식”이 명확해진다.\r
\r
---\r
\r
## 5. 브라우저 렌더링 파이프라인: HTML/CSS가 “픽셀”이 되는 과정\r
\r
여기부터가 찐이다.\r
\r
웹은 HTML/CSS/JS를 “그냥 보여주는 게 아니라”\r
일련의 파이프라인으로 **픽셀을 만들어낸다.**\r
\r
브라우저는 대략 이런 단계로 움직인다.\r
\r
### 5-1) 파싱 단계\r
\r
1. HTML 다운로드\r
2. HTML 파싱 → **DOM 생성**\r
3. CSS 다운로드\r
4. CSS 파싱 → **CSSOM 생성**\r
\r
### 5-2) 렌더 트리(Render Tree)\r
\r
5. DOM + CSSOM → **Render Tree 생성**\r
\r
Render Tree는 “화면에 실제로 그릴 노드들”만 모은 트리다.\r
\r
- \`display: none\`은 렌더 트리에 안 들어감\r
  (DOM에는 있어도 화면에는 안 그리니까)\r
- \`visibility: hidden\`은 들어감\r
  (공간은 차지하니까)\r
\r
### 5-3) Layout (Reflow)\r
\r
6. **Layout**: 각 요소의 위치/크기 계산\r
\r
여기서 계산되는 게 예를 들어:\r
\r
- 박스 모델(width/height/padding/margin)\r
- flex/grid 배치 결과\r
- line wrapping, 폰트 크기, 줄바꿈\r
- viewport 기준 상대 단위\r
\r
### 5-4) Paint\r
\r
7. **Paint**: 픽셀로 “그릴 준비”를 한다\r
\r
색, 그림자, 테두리, 텍스트 같은 것들을\r
“어떤 순서로 어떤 픽셀을 그릴지” 기록한다.\r
\r
### 5-5) Composite\r
\r
8. **Composite**: 레이어를 합쳐 최종 화면에 출력\r
\r
요즘 브라우저는 성능 때문에 레이어를 나눠 GPU에서 합성(composite)한다.\r
\r
그래서 \`transform\`, \`opacity\` 같은 속성은 레이아웃을 다시 안 하고도 애니메이션이 가능해진다.\r
\r
---\r
\r
## 6. 그래서 “성능 최적화”라는 게 왜 나오는가?\r
\r
JS가 DOM/CSSOM을 건드리면\r
렌더링 파이프라인이 다시 돈다.\r
\r
- DOM 변경 → Render Tree 재생성 가능\r
- 레이아웃 관련 CSS 변경 → Layout 발생\r
- Paint 관련 변경 → Paint 발생\r
- transform/opacity → Paint 없이 Composite만 발생할 수 있음\r
\r
그래서 성능 최적화에서 자주 나오는 말들이 다 여기서 나온다.\r
\r
- “리플로우 줄여라”\r
- “레이아웃 스래싱(layout thrashing) 조심해라”\r
- “requestAnimationFrame 써라”\r
- “쓰로틀/디바운스 해라”\r
- “transform/opacity로 애니메이션 해라”\r
\r
즉 성능은 “코드가 빠르냐 느리냐”보다\r
**렌더링 파이프라인을 얼마나 덜 흔드냐**가 훨씬 중요해진다.\r
\r
---\r
\r
## 7. JS는 어디서 실행될까? (엔진 vs 브라우저)\r
\r
브라우저는 크게 두 덩어리로 보면 된다.\r
\r
### 7-1) JS 엔진 (V8, SpiderMonkey, JSC)\r
\r
- JS 실행\r
- JIT 컴파일\r
- GC(가비지 컬렉션)\r
- 콜 스택 관리\r
\r
### 7-2) 브라우저 런타임(Web APIs)\r
\r
- DOM API\r
- fetch/XHR\r
- timer\r
- event system\r
- rendering pipeline\r
\r
즉 JS는 브라우저 안에서 혼자 사는 게 아니라,\r
브라우저가 제공하는 API와 이벤트 루프 위에서 돌아간다.\r
\r
---\r
\r
## 8. 내가 이해한 “웹”의 정의\r
\r
정리하면 웹은 단순히 “HTML/CSS/JS 묶음”이 아니다.\r
\r
> 웹은 리소스를 URL로 식별하고,\r
> HTTP로 요청/응답하며,\r
> 브라우저가 DOM/CSSOM으로 해석해 렌더링하는 시스템이다.\r
\r
그리고 우리가 하는 “웹 개발”은\r
이 시스템 위에 앱을 올리는 일이다.\r
\r
- 문서를 만들고(HTML)\r
- 보여주고(CSS)\r
- 반응하게 하고(JS)\r
- 서버랑 통신하고(fetch)\r
- 성능 튜닝하고(rendering pipeline)\r
- 프레임워크로 복잡도 관리하고(React/Vue)\r
\r
---\r
\r
## 마치며: 웹이 “화면”이 아니라 “파이프라인”이라는 걸 이해하면 다 연결된다\r
\r
웹을 “화면 만드는 기술”로만 보면\r
각 기술이 따로 노는 느낌이 든다.\r
\r
근데 웹을:\r
\r
> **요청 → 응답 → 해석 → 렌더링**\r
> 이라는 파이프라인으로 보면\r
\r
HTML/CSS/JS가 왜 존재하는지,\r
브라우저가 왜 그렇게 복잡한지,\r
SPA가 왜 등장했는지,\r
성능 최적화가 왜 중요한지까지 전부 한 줄로 이어진다.\r
`,lb=`개발하다 보면 이런 순간이 있다.\r
\r
- 함수 하나 만들었는데\r
- 매번 똑같은 인자(설정/키/옵션)를 계속 넣고 있고\r
- 코드가 점점 \`() => () => () =>\` 처럼 이상해지기 시작함\r
\r
그때 누가 옆에서 한마디 한다.\r
\r
> “그거 커링이잖아”\r
\r
…커링?\r
컬링도 아니고?\r
카레도 아니고?\r
\r
오늘은 그 커링을 **“외워서 쓰는 게 아니라” 이해해서 쓰는 관점**으로 정리해본다.\r
\r
---\r
\r
## 0. 한 줄 정의부터\r
\r
커링(currying)은 딱 이거다.\r
\r
> **다인자 함수 \`f(a, b, c)\`를 \`f(a)(b)(c)\`처럼, 인자를 “쪼개서 순차적으로 받는 함수 체인”으로 바꾸는 기법**\r
\r
조금 더 덜 폼 잡으면:\r
\r
> **인자를 한 번에 다 받지 않고, 하나(또는 몇 개)씩 나눠 받는 함수로 바꾸는 것**\r
\r
여기서 중요한 건 “쪼갠다”가 아니라 **“함수로 바꾼다”** 는 점.\r
\r
---\r
\r
## 1. 예제로 보는 커링: “아 그냥 함수가 함수를 반환하는거구나”\r
\r
### 1-1) 일반 함수\r
\r
\`\`\`js\r
function add(a, b) {\r
  return a + b;\r
}\r
\r
add(2, 3); // 5\r
\`\`\`\r
\r
### 1-2) 커링된 함수\r
\r
\`\`\`js\r
function curriedAdd(a) {\r
  return function (b) {\r
    return a + b;\r
  };\r
}\r
\r
const add2 = curriedAdd(2);\r
add2(3); // 5\r
add2(10); // 12\r
\`\`\`\r
\r
여기서 핵심:\r
\r
- \`curriedAdd(2)\`를 호출하면\r
- “2를 기억하는 함수”가 하나 만들어지고\r
- 그 함수는 나중에 \`b\`만 받아서 계산함\r
\r
그럼 질문.\r
\r
> “근데 a=2를 어떻게 기억해?”\r
\r
정답: **클로저(closure)**\r
\r
---\r
\r
## 2. 커링이 가능한 이유 = 클로저 때문임\r
\r
커링은 결국 이런 구조다.\r
\r
\`\`\`js\r
function makeAdder(a) {\r
  return function (b) {\r
    return a + b; // 외부 스코프 변수 a를 기억함\r
  };\r
}\r
\`\`\`\r
\r
- \`makeAdder(2)\`가 끝나면 원래는 \`a\`가 사라져야 한다\r
- 근데 내부 함수가 \`a\`를 참조하고 있음\r
- 그래서 JS 런타임이 \`a\`를 메모리 어딘가에 남겨둠\r
- 내부 함수가 계속 \`a\`를 사용할 수 있음\r
\r
즉:\r
\r
> 클로저는 “상태를 기억하는 능력”이고\r
> 커링은 그 능력을 이용해서 “인자를 쪼개서 받는 패턴”을 만드는 것이다.\r
\r
---\r
\r
## 3. 커링의 진짜 맛: “인자 일부를 고정한 함수를 만들 수 있다”\r
\r
커링이 실무에서 빛나는 순간은 보통 이거다.\r
\r
> “공통 인자를 미리 고정하고, 나중에 나머지만 받아 쓰고 싶다”\r
\r
예를 들어 곱셈:\r
\r
\`\`\`js\r
const curryMultiply = (a) => (b) => a * b;\r
\r
const double = curryMultiply(2);\r
const triple = curryMultiply(3);\r
\r
double(10); // 20\r
triple(10); // 30\r
\`\`\`\r
\r
여기서 \`double\`, \`triple\`은 사실상:\r
\r
- 의미 있는 이름을 가진 “특화 함수”가 됨\r
- 재사용성이 갑자기 좋아짐\r
- 코드가 읽기 쉬워짐\r
\r
---\r
\r
## 4. 커링 vs 부분 적용(Partial Application)\r
\r
(실무에서 헷갈리기 쉬운 포인트)\r
\r
여기서 다들 한 번씩 멈춘다.\r
\r
> “커링이랑 부분 적용이랑 뭐가 달라?”\r
\r
엄밀히 말하면:\r
\r
### ✅ 커링(currying)\r
\r
- \`f(a, b, c)\` → \`f(a)(b)(c)\`\r
- **항상 인자 하나씩 받는 형태로 변환**\r
\r
### ✅ 부분 적용(partial application)\r
\r
- \`f(a, b, c)\`에 일부 인자를 먼저 넣어서\r
- \`g(b, c)\` 같은 **새 함수를 만드는 것**\r
\r
실무에서는 둘을 엄격히 구분 안 하고\r
“인자 일부 고정해서 함수 만드는 패턴”을 그냥 커링이라고 부르는 경우가 많다.\r
\r
중요한 건 용어 싸움이 아니라:\r
\r
> “공통 인자를 고정해서 코드 중복을 줄인다”\r
> 이 실전 효용임.\r
\r
---\r
\r
# 그렇다면… 어떻게 쓰는데?\r
\r
개념적으로는 이제 알것같지만 실무에서는 보통 어떻게 쓰일까?\r
커링이 “아 이런 데서 써먹는구나” 체감되는 예제들은 다음과 같다.\r
\r
---\r
\r
## 1) 공통 설정 고정하는 API 클라이언트 (baseUrl/헤더/에러처리)\r
\r
### 아이디어\r
\r
- 1단계: 프로젝트/도메인별 공통 설정을 고정\r
- 2단계: path와 옵션만 넣어서 호출\r
\r
\`\`\`ts\r
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\r
\r
interface BaseConfig {\r
  baseUrl: string;\r
  defaultHeaders?: Record<string, string>;\r
}\r
\r
interface RequestOptions {\r
  method?: HttpMethod;\r
  headers?: Record<string, string>;\r
  body?: unknown;\r
  query?: Record<string, string | number | boolean | undefined>;\r
}\r
\r
export const createApiClient =\r
  (baseConfig: BaseConfig) =>\r
  async <T = unknown>(\r
    path: string,\r
    options: RequestOptions = {}\r
  ): Promise<T> => {\r
    const url = new URL(path, baseConfig.baseUrl);\r
\r
    if (options.query) {\r
      Object.entries(options.query).forEach(([key, value]) => {\r
        if (value !== undefined) url.searchParams.set(key, String(value));\r
      });\r
    }\r
\r
    const res = await fetch(url.toString(), {\r
      method: options.method ?? "GET",\r
      headers: {\r
        "Content-Type": "application/json",\r
        ...baseConfig.defaultHeaders,\r
        ...options.headers,\r
      },\r
      body: options.body ? JSON.stringify(options.body) : undefined,\r
    });\r
\r
    if (!res.ok) {\r
      throw new Error(\`API Error: \${res.status} \${res.statusText}\`);\r
    }\r
\r
    return (await res.json()) as T;\r
  };\r
\`\`\`\r
\r
### 사용 예시\r
\r
\`\`\`ts\r
export const heroApi = createApiClient({\r
  baseUrl: "/api/super-hero",\r
  defaultHeaders: { "X-Client": "Super-power" },\r
});\r
\r
export const fromisFanLove = createApiClient({\r
  baseUrl: "https://fromis-9-love",\r
});\r
\r
// 호출\r
const projects = await heroApi<ProjectDto[]>("/projects", {\r
  query: { page: 1, size: 20 },\r
});\r
\r
const result = await fromisFanLove<ReprogramResult>("/reprogram", {\r
  method: "POST",\r
  body: { vin, ecuId, fileId },\r
});\r
\`\`\`\r
\r
포인트:\r
\r
- \`createApiClient(baseConfig)\`에서 **baseConfig를 클로저로 고정**\r
- 이후엔 매번 baseUrl/header 반복 없이 path만 넣으면 됨\r
- 그리고 공통 에러 핸들링도 한 군데로 모인다\r
\r
---\r
\r
## 2) React 이벤트 핸들러: JSX에서 인라인 람다 줄이기\r
\r
리스트/테이블에서 흔히 이런 코드가 나온다.\r
\r
\`\`\`tsx\r
onClick={() => handleClick(row.id, "DETAIL")}\r
\`\`\`\r
\r
이 패턴도 괜찮긴 한데, JSX가 복잡해지고\r
실수로 \`stopPropagation\` 같은 것도 빼먹기 쉬움.\r
\r
커링으로 핸들러 “팩토리”를 만들면 깔끔해진다.\r
\r
\`\`\`tsx\r
const createRowClickHandler =\r
  (rowId: string, mode: "DETAIL" | "EDIT") => (e: React.MouseEvent) => {\r
    e.preventDefault();\r
    console.log("clicked:", rowId, mode);\r
  };\r
\r
// 사용\r
{\r
  rows.map((row) => (\r
    <tr\r
      key={row.id}\r
      onClick={createRowClickHandler(row.id, "DETAIL")}\r
      className="cursor-pointer hover:bg-slate-50"\r
    >\r
      ...\r
    </tr>\r
  ));\r
}\r
\`\`\`\r
\r
장점:\r
\r
- JSX가 “선언적”으로 보임\r
- 핸들러 로직이 분리됨\r
- 의도 파악이 쉬움\r
\r
---\r
\r
## 3) Zustand + 커링: selector/action factory의 예제\r
\r
### 3-1) selector를 커링으로 만들기\r
\r
\`\`\`ts\r
interface User {\r
  id: number;\r
  name: string;\r
}\r
\r
interface UserState {\r
  users: User[];\r
}\r
\r
const selectUserById = (id: number) => (state: UserState) =>\r
  state.users.find((u) => u.id === id);\r
\r
// 사용\r
const user = useUserStore(selectUserById(1001));\r
\`\`\`\r
\r
여기서 \`selectUserById(1001)\`는\r
\r
- id가 “고정된 selector”\r
- Zustand는 나중에 state를 넣어서 호출\r
\r
즉 커링이 “Zustand selector 패턴”에 자연스럽게 붙는다.\r
\r
### 3-2) action도 커링으로 만들기 (+ stale closure 회피까지)\r
\r
\`\`\`ts\r
export const createPermissionToggleHandler = (permissionKey: string) => () => {\r
  const toggle = usePermissionStore.getState().togglePermission;\r
  toggle(permissionKey);\r
};\r
\r
// 사용\r
<Button onClick={createPermissionToggleHandler("ADMIN_PAGE_ACCESS")}>\r
  토글\r
</Button>;\r
\`\`\`\r
\r
포인트:\r
\r
- \`permissionKey\`는 커링+클로저로 고정\r
- \`getState()\`로 액션을 가져오면 stale closure도 피하기 좋음\r
\r
---\r
\r
## 4) 필터/정렬: 조합 가능한 predicate 만들기\r
\r
“조건 함수(predictate)”를 커링으로 만들면 조합이 깔끔해진다.\r
\r
\`\`\`ts\r
interface FileMeta {\r
  id: string;\r
  team?: string;\r
  owner?: string;\r
  tags: string[];\r
}\r
\r
const byTeam = (team: string) => (file: FileMeta) => file.team === team;\r
const byOwner = (owner: string) => (file: FileMeta) => file.owner === owner;\r
const hasTag = (tag: string) => (file: FileMeta) => file.tags.includes(tag);\r
\r
const filterWith =\r
  <T>(predicate: (item: T) => boolean) =>\r
  (list: T[]) =>\r
    list.filter(predicate);\r
\`\`\`\r
\r
사용:\r
\r
\`\`\`ts\r
const complexPredicate = (file: FileMeta) =>\r
  byTeam("Car-Solution")(file) && byOwner("경민")(file) && hasTag("0609")(file);\r
\r
const filtered = filterWith(complexPredicate)(files);\r
\`\`\`\r
\r
이 스타일이 좋은 이유:\r
\r
- “조건(설정)”과 “실제 데이터”가 분리됨\r
- UI에서 조건을 바꿔도 predicate 구성만 바꾸면 됨\r
\r
---\r
\r
## 5) 폼 검증: “라벨 고정 + 값만 넣는” 검증기 만들기\r
\r
\`\`\`ts\r
type Validator = (value: string) => string | null;\r
\r
const required =\r
  (label: string): Validator =>\r
  (value) =>\r
    value.trim() === "" ? \`\${label}을(를) 입력해주세요.\` : null;\r
\r
const maxLength =\r
  (label: string, max: number): Validator =>\r
  (value) =>\r
    value.length > max ? \`\${label}은(는) 최대 \${max}자까지 가능합니다.\` : null;\r
\r
const combineValidators =\r
  (...validators: Validator[]): Validator =>\r
  (value) => {\r
    for (const v of validators) {\r
      const err = v(value);\r
      if (err) return err;\r
    }\r
    return null;\r
  };\r
\`\`\`\r
\r
사용:\r
\r
\`\`\`ts\r
const validateProjectName = combineValidators(\r
  required("프로젝트 이름"),\r
  maxLength("프로젝트 이름", 50)\r
);\r
\r
const error = validateProjectName(form.name);\r
if (error) toast.error(error);\r
\`\`\`\r
\r
- 라벨/제약 조건을 미리 고정해두면\r
- 입력값만 넣어서 검사 가능\r
- 폼이 커질수록 효과가 커짐\r
\r
---\r
\r
# 커링을 쓸 때 흔히 하는 실수/주의점 (중요)\r
\r
커링이 멋있어서 막 쓰면 오히려 코드가 더 어려워질 수 있다.\r
\r
### ✅ 1) “너무 쪼개면” 읽기 어려움\r
\r
\`f(a)(b)(c)(d)(e)\`는 솔직히 눈 아픔.\r
\r
- 인자 2~3개 정도에서 가장 실용적\r
- “공통 설정을 고정하는 의도”가 있을 때만\r
\r
### ✅ 2) React 렌더링에서 “매번 새 함수 만드는” 문제\r
\r
JSX에서 \`createHandler(row.id)\`를 호출하면\r
리렌더 때마다 새 함수가 만들어진다.\r
\r
- 보통 큰 문제는 아니지만\r
- props로 내려가고 memo가 걸려있으면 영향이 생길 수 있음\r
\r
이때는 \`useCallback\`으로 팩토리를 메모이즈 하거나,\r
핸들러 생성 위치를 위로 올리거나(정책적으로 관리) 하면 된다.\r
\r
### ✅ 3) 커링 = 무조건 함수형 프로그래밍… 이건 아님\r
\r
커링은 그냥 “패턴”이다.\r
필요할 때만 쓰는 게 제일 깔끔하다.\r
\r
---\r
\r
# 결론: 커링은 “인자를 쪼개는 기술”이 아니라 “공통을 고정하는 도구”다\r
\r
정리하면 커링이 실무에서 의미 있는 순간은 대부분 다음과 같다.\r
\r
> **매번 반복되는 인자(설정/환경/키/옵션)를 먼저 고정하고**\r
> 나머지 값만 받아서 쓰도록 만들 때\r
\r
- API 클라이언트 설정 고정\r
- React 핸들러에 인자 전달 깔끔하게\r
- Zustand selector/action factory\r
- 필터/검증 같은 조건 기반 함수 조합\r
\r
이렇게 “반복되는 인자”가 보이면\r
커링을 한 번 떠올려볼 만하다.\r
`,ib=`“함수가 변수 기억하는 거요”로 끝내면 나중에 꼭 크게 맞는다\r
\r
JS 좀 하다 보면 클로저는 무조건 마주친다.\r
\r
- 커링할 때\r
- 콜백 쓸 때\r
- 이벤트 핸들러 만들 때\r
- React에서 \`useCallback\` 썼는데 상태가 안 바뀌는 것처럼 보일 때\r
- Zustand/Redux에서 selector/action 만들 때\r
\r
근데 대부분 설명이 이렇게 끝난다.\r
\r
> “클로저는 반환된 내부 함수다.”\r
> “내부 함수가 외부 스코프를 기억한다.”\r
\r
맞긴 한데… 이 설명만으로는 실전 버그가 생겼을 때 해결이 안 된다.\r
“왜 기억하는데?”, “어디에 기억하는데?”, “언제까지 기억하는데?” 이런 질문에 답이 안 나옴.\r
\r
그래서 오늘은 클로저를 **엔진/메모리 관점까지 포함해서** “정확히” 정리해본다.\r
\r
---\r
\r
## 1. 클로저의 정확한 정의: “반환된 함수”가 아니라 “함수 + 환경”이다\r
\r
클로저를 전문가스럽게(?) 한 문장으로 정리하면:\r
\r
> **클로저(closure)는 “함수(function)”와 “그 함수가 선언될 당시의 렉시컬 환경(lexical environment)”이 함께 묶여서 유지되는 런타임 개념이다.**\r
\r
중요한 포인트는 이거다.\r
\r
- “반환된 내부 함수”는 **클로저가 눈에 띄는 대표 패턴**일 뿐이고\r
- \`return\`이 없어도, 외부 스코프 변수를 참조하는 함수는 클로저가 될 수 있다\r
\r
예를 들면 이런 것도 클로저다.\r
\r
- 이벤트 핸들러\r
- setTimeout/setInterval 콜백\r
- Promise then/catch 콜백\r
- subscribe callback\r
- React hook 내부 함수들\r
\r
즉 “반환”은 본질이 아니다.\r
\r
> **외부 스코프 변수를 참조하는 함수가 그 외부 스코프보다 오래 살아남는 순간, 클로저가 된다.**\r
\r
---\r
\r
## 2. 클로저를 이해하려면 “렉시컬 스코프”부터 잡아야 한다\r
\r
### 2-1. 렉시컬 스코프(lexical scope)란?\r
\r
JS는 **렉시컬 스코프 언어**다.\r
\r
이 말은 스코프가\r
\r
- “어디서 호출됐냐(call site)”가 아니라\r
- **“어디서 선언됐냐(define site)”** 로 결정된다는 뜻.\r
\r
즉 코드 위치가 스코프를 정한다.\r
\r
\`\`\`js\r
const x = 10;\r
\r
function outer() {\r
  const y = 20;\r
\r
  function inner() {\r
    console.log(x, y);\r
  }\r
\r
  return inner;\r
}\r
\`\`\`\r
\r
\`inner\`는 코드상 \`outer\` 내부에서 선언되었기 때문에\r
\`outer\`의 \`y\`에 접근할 수 있다.\r
\r
여기서 핵심은 “호출 위치”가 아니다.\r
\r
\`\`\`js\r
const f = outer();\r
f(); // 여기서 호출 위치가 outer 밖이어도 y 접근 가능\r
\`\`\`\r
\r
호출을 어디서 하든 상관 없다.\r
선언이 어디서 되었는지가 스코프를 결정한다.\r
\r
---\r
\r
## 3. 렉시컬 환경(Lexical Environment)은 엔진이 실제로 스코프를 구현하는 방식이다\r
\r
여기부터가 “왜 클로저가 가능한지”의 정답.\r
\r
JS 엔진은 스코프를 그냥 감으로 처리하지 않는다.\r
각 스코프마다 내부적으로 “환경 객체”를 만든다.\r
\r
렉시컬 환경은 크게 이렇게 구성된다.\r
\r
### 3-1. Environment Record (식별자 저장소)\r
\r
현재 스코프에 선언된 변수/함수/매개변수들이 저장되는 “테이블” 같은 것.\r
\r
예: \`{ y: 20 }\`\r
\r
### 3-2. Outer Environment Reference (바깥 스코프 링크)\r
\r
지금 스코프의 바깥 스코프(부모 환경)를 가리키는 포인터.\r
\r
즉:\r
\r
> Environment Record + Outer Reference\r
> 이게 묶여서 “렉시컬 환경”이 된다.\r
\r
그리고 우리가 흔히 말하는 **스코프 체인**은:\r
\r
> “Outer Reference를 따라 올라가는 연결 리스트 체인”이다.\r
\r
어떤 변수를 찾을 때 엔진은 이렇게 한다.\r
\r
1. 현재 Environment Record에서 찾고\r
2. 없으면 Outer Environment로 올라가고\r
3. 또 없으면 계속 올라가고\r
4. 끝까지 없으면 \`ReferenceError\`\r
\r
---\r
\r
## 4. 클로저가 “기억한다”는 게 정확히 뭔데? (메모리 관점)\r
\r
보통 함수 호출이 끝나면 지역 변수는 “사라진다”고 배운다.\r
\r
- 호출 스택(stack frame)이 정리되니까\r
- 지역 변수도 함께 날아간다\r
\r
근데 클로저는 외부 함수가 끝났는데도 변수에 접근한다.\r
\r
> “그럼 이 변수는 어디에 남아있냐?”\r
\r
여기서 핵심은 GC(가비지 컬렉터)다.\r
\r
### 4-1. 원래라면\r
\r
\`outer()\`가 끝나면 \`y\`는 없어져야 한다.\r
\r
### 4-2. 그런데…\r
\r
\`inner\`가 \`y\`를 참조하고 있고,\r
\`inner\` 함수가 밖으로 나가서 계속 살아있으면?\r
\r
\`\`\`js\r
function outer() {\r
  const y = 20;\r
\r
  return function inner() {\r
    console.log(y);\r
  };\r
}\r
\r
const f = outer();\r
f(); // 20\r
\`\`\`\r
\r
엔진 입장에서 \`inner\`는 \`y\`가 있는 렉시컬 환경을 계속 참조한다.\r
\r
즉:\r
\r
- \`inner\`가 살아있다\r
- \`inner\`가 어떤 환경(렉시컬 환경)을 참조한다\r
- 그 환경에 \`y\`가 있다\r
- 그러면 GC는 “아직 참조 중이네?” 하고 안 지운다\r
\r
결과적으로:\r
\r
> **클로저가 참조하는 렉시컬 환경은 힙(heap)에 유지될 수 있다.**\r
> (정확히는 엔진 구현마다 다르지만, “스택에서 사라져야 할 것들이 살아남는다”는 현상은 동일)\r
\r
그리고 \`inner\`에 대한 참조가 모두 끊기면?\r
\r
\`\`\`js\r
f = null; // 참조 제거\r
\`\`\`\r
\r
그때서야 GC가 회수한다.\r
\r
---\r
\r
## 5. “return이 없으면 클로저가 아니다?” → 완전 아니다\r
\r
클로저는 “반환”이 아니라 “생존” 문제다.\r
\r
\`\`\`js\r
let saved;\r
\r
function outer() {\r
  let x = 10;\r
\r
  function inner() {\r
    console.log(x);\r
  }\r
\r
  saved = inner; // return 없이도 외부로 나감\r
}\r
\r
outer();\r
saved(); // 10\r
\`\`\`\r
\r
\`inner\`가 \`x\`를 참조하고 있고\r
\`inner\`가 \`saved\`에 저장되면서 outer보다 오래 살아남았다.\r
\r
=> 클로저다.\r
\r
---\r
\r
## 6. 클로저를 왜 쓰냐? 실전에서 진짜 많이 쓰는 4가지\r
\r
### 6-1. 정보 은닉 / 캡슐화 (private state)\r
\r
클래스 없이도 “외부에서 접근 못 하는 상태”를 만들 수 있다.\r
\r
\`\`\`js\r
function createCounter() {\r
  let count = 0;\r
\r
  return {\r
    inc() {\r
      return ++count;\r
    },\r
    get() {\r
      return count;\r
    },\r
  };\r
}\r
\r
const c = createCounter();\r
c.inc(); // 1\r
c.inc(); // 2\r
c.get(); // 2\r
\`\`\`\r
\r
\`count\`는 외부에서 직접 못 만진다.\r
오직 클로저를 통해서만 접근 가능.\r
\r
이게 JS에서 “private 변수” 구현하는 전통적인 방식.\r
\r
---\r
\r
### 6-2. 커링 / 부분 적용 (상태를 가진 함수)\r
\r
커링은 사실상 클로저 응용이다.\r
\r
\`\`\`js\r
const makeAdder = (x) => (y) => x + y;\r
\r
const add10 = makeAdder(10);\r
add10(5); // 15\r
add10(20); // 30\r
\`\`\`\r
\r
\`x=10\`을 기억하는 함수가 만들어지는 것 자체가 클로저다.\r
\r
---\r
\r
### 6-3. 비동기/콜백에서 “값 고정”\r
\r
예전 \`var\` 시절에 특히 유명한 케이스.\r
\r
\`\`\`js\r
for (var i = 0; i < 3; i++) {\r
  (function (copy) {\r
    setTimeout(() => console.log(copy), 100);\r
  })(i);\r
}\r
\`\`\`\r
\r
IIFE가 \`copy\`를 캡처해서\r
각 타이머마다 다른 값을 찍게 만든다.\r
\r
요즘은 \`let\`이 있어서 단순해졌지만, 원리는 여전히:\r
\r
> “비동기 환경에서 값을 고정하려면 클로저가 필요하다”\r
\r
---\r
\r
### 6-4. React / Hooks / Zustand에서 “기본 동작 방식 그 자체”\r
\r
React는 렌더마다 함수가 새로 실행된다.\r
그 렌더 스코프 안에서 만들어진 핸들러/이펙트는 전부 클로저다.\r
\r
그래서 이런 stale closure가 터진다.\r
\r
\`\`\`tsx\r
const value = useStore((s) => s.value);\r
\r
const handle = useCallback(() => {\r
  console.log(value); // 오래된 value를 캡처할 수 있음\r
}, []);\r
\`\`\`\r
\r
이게 바로 “클로저를 잘못 쓰면 상태가 안 바뀌는 것처럼 보이는” 현상.\r
\r
---\r
\r
## 7. 클로저의 부작용/주의점 (여기 진짜 중요)\r
\r
### 7-1. 불필요한 메모리 유지\r
\r
클로저가 거대한 객체를 참조하면, 그 객체가 회수되지 않는다.\r
\r
예: 대형 배열, 이미지 데이터, huge map 같은 거 캡처하면\r
“생각보다 메모리 오래 잡아먹는” 문제가 생긴다.\r
\r
### 7-2. stale closure 버그\r
\r
React에서 가장 많이 맞는 버그.\r
\r
- \`useCallback([])\`\r
- \`useEffect([])\`\r
- \`setInterval\` 안에서 state 사용\r
- debounce/throttle 콜백\r
\r
=> 최신 값이 아니라 “그때 캡처된 값”만 본다.\r
\r
해결은:\r
\r
- 의존성 배열에 넣어서 최신화하거나\r
- \`useRef\`로 최신 값을 유지하거나\r
- Zustand면 \`getState()\`로 최신 값을 읽어오거나\r
\r
### 7-3. 디버깅 난이도 상승\r
\r
클로저가 중첩되면 “이 변수가 어느 시점 값인지” 추적이 어려워진다.\r
특히 팀 코드에서 \`() => () => () =>\` 남발하면 지옥 열린다.\r
\r
---\r
\r
## 8. 한 번에 요약\r
\r
- **클로저란?**\r
  → **함수 + 그 함수가 선언될 당시의 렉시컬 환경을 함께 유지하는 런타임 구조**\r
\r
- **왜 가능한가?**\r
  → 함수가 외부 변수를 참조하면 엔진은 그 렉시컬 환경을 유지하고,\r
  참조가 남아있으면 GC가 회수하지 않는다.\r
\r
- **왜 쓰나?**\r
  → 캡슐화, 상태가 있는 함수(커링), 콜백에서 값 고정, React/Hooks 기반 동작\r
\r
- **주의할 점**\r
  → 메모리 유지, stale closure 버그, 디버깅 어려움\r
\r
---\r
\r
## 마치며: 클로저는 “신기한 기술”이 아니라 “JS가 스코프를 구현하는 방식”이다\r
\r
클로저는 뭔가 특별한 기능이 아니라,\r
JS가 렉시컬 스코프를 구현하는 과정에서 자연스럽게 생긴 메커니즘이다.\r
\r
그리고 그 위에:\r
\r
- 커링\r
- 캡슐화\r
- 이벤트 처리\r
- React Hooks\r
- 상태 관리 라이브러리\r
\r
같은 현대 JS 개발의 대부분이 올라가 있다.\r
\r
즉 클로저는 “알면 좋은 것”이 아니라\r
\r
> **모르면 언젠가 크게 맞는 것**이다.\r
`,ab=`최근에 프론트엔드 아키텍처를 다시 고민하면서\r
\r
- DDD(도메인 주도 설계)\r
- FSD(Feature-Sliced Design)\r
- 그리고 어떤 분이 Velog에 정리해둔 “프론트엔드 도메인 아키텍처” 글을 같이 보게 됐다.\r
\r
특히 “기술 단위로 나눈 폴더 구조”에서 레거시 유지보수를 하다 보면\r
\r
**도메인(업무) 기준으로 코드가 안 보이는 문제**가 크게 와 닿는다.\r
\r
이 글에서는:\r
\r
1. DDD를 프론트 기준으로 간단히 정리하고\r
2. Velog 글에서 말하는 “도메인 슬라이스(Vertical Slice)” 개념을 풀어보고\r
3. 전통적인 FSD와 어떻게 다른지 비교하고\r
4. 앞으로 설계할 때 쓸 수 있는 실전 가이드를 정리해본다.\r
\r
---\r
\r
## 1. DDD(도메인 주도 설계)를 프론트 기준으로 다시 보자\r
\r
### 1-1. DDD가 말하고 싶은 한 줄 요약\r
\r
> “코드를 기술 단위가 아니라 비즈니스 도메인 단위로 모델링하자.”\r
\r
여기서 말하는 도메인(Domain)은\r
\r
“유사한 업무들의 집합”이다.\r
\r
예를 들면:\r
\r
- 결제(Payment)\r
- 회원(User)\r
- 주문(Order)\r
- 차량제어(Vehicle Control)\r
- 로그 분석(Log Analytics)\r
- 진단 세션(Diagnostic Session) …\r
\r
**핵심 아이디어는 두 가지**다.\r
\r
1. **코드 구조와 이름이 실제 업무 용어와 대응되게 만들자**\r
   - 클래스/함수/파일 이름이\r
     “기획에서 쓰는 단어”와 자연스럽게 매핑되게.\r
   - 예: \`updateCampaign\`, \`DiagnosticSession\`, \`VehicleReprogrammingRequest\`\r
2. **변화·규칙이 다른 ‘덩어리’마다 Bounded Context로 쪼개자**\r
   - 같은 “Campaign”이라는 단어라도\r
     - ECU 업데이트 컨텍스트의 Campaign\r
     - 테스트 산출물 관리 컨텍스트의 Campaign\r
       가 의미와 규칙이 다르면,\r
       **각각 다른 컨텍스트로 분리**해야 한다.\r
\r
프론트 개발 쪽에서 실무적으로 번역하면:\r
\r
- \`services/\`, \`utils/\`, \`components/\` 같은 **기술 기준 폴더** 대신\r
- \`user/\`, \`cart/\`, \`payment/\`, \`vehicle-diagnosis/\` 같은 **도메인 기준 폴더**로 나누는 것에 가깝다.\r
\r
### 1-2. DDD에서 중요한 개념 (프론트 친화 버전)\r
\r
DDD 책에는 더 많은 개념이 나오지만,\r
\r
프론트에서 특히 중요한 건 이 정도다.\r
\r
### 1) Ubiquitous Language (보편 언어)\r
\r
- 기획/PO/QA/개발자가 모두 **같은 용어를 쓴다.**\r
- 그 용어가 그대로 코드에도 박힌다.\r
  - “업데이트 프로세스”, “SUMS 동기화”, “진단 세션”, “캠페인 검증” 같은 단어들이\r
  - 파일명, 컴포넌트명, 상태명에 자연스럽게 등장해야 한다.\r
\r
### 2) Bounded Context\r
\r
- 한 도메인 안에서 **용어, 규칙, 모델이 일관되게 통하는 경계**.\r
- 예를 들어,\r
  - “ECU 업데이트” 컨텍스트의 \`Campaign\`과\r
  - “시험 산출물 관리” 컨텍스트의 \`Campaign\`이 의미가 다르면\r
    → 아예 **서로 다른 컨텍스트**로 분리해야 한다. (같은 타입으로 묶지 말기)\r
\r
### 3) Domain Model\r
\r
- 업무 규칙과 상태를 표현하는 모델 집합.\r
- 백엔드에선 Entity, Value Object, Domain Service 등으로 많이 나누지만\r
- 프론트에선 조금 단순하게:\r
\r
> “도메인 관련 상태 + 비즈니스 로직 + 타입 정의 묶음”\r
\r
정도로 봐도 충분하다.\r
\r
즉, 프론트에서 DDD를 크게 거창하게 가져갈 필요는 없고,\r
\r
> “코드를 비즈니스 기준으로 나눈다”\r
\r
이것이 핵심이다.\r
\r
---\r
\r
## 2. 도메인 단위 “슬라이스(Vertical Slice)”란 무엇인가?\r
\r
Velog 글에서 말하는 키워드가 바로 “Slice”다.\r
\r
여기에는 두 가지 의미가 섞여 있다.\r
\r
1. Redux Toolkit의 Slice\r
2. FSD(Feature-Sliced Design)의 Slice\r
\r
그리고 이 두 개를 일반화한 개념이 **“도메인 단위 수직 슬라이스(Vertical Slice)”** 다.\r
\r
### 2-1. 왜 도메인 단위로 잘라야 할까?\r
\r
글의 출발점은 이런 문제들이다.\r
\r
- **과도한 공통화**\r
  - \`CardView\` 하나에 포스트/상품/유저카드의 레이아웃을 다 때려넣기 →\r
    분기(if/삼항연산자) 지옥\r
- **“관심사 분리”의 역설**\r
  - 로직을 A/B/C/D로 잘게 쪼개놓았더니\r
    항상 A→B→C→D 순서로 같이 호출해야 하는 구조가 됨\r
  - 한 단계 빼먹으면 버그\r
- **기술별 폴더 구조의 한계**\r
  - \`ui/\`, \`hooks/\`, \`api/\`, \`utils/\`로 나눴더니\r
    작은 요구사항 하나 바꾸려 해도\r
    폴더를 계속 왔다갔다 해야 함\r
\r
그래서 나온 결론이 이거다.\r
\r
> “실제로 변경이 일어나는 단위 = 도메인이다.\r
>\r
> 팀장님/기획자가 말하는 단위대로 코드를 잘라야,\r
>\r
> 변경 범위가 명확해진다.”\r
\r
예를 들어,\r
\r
- “유저 프로필에 팔로워 수 추가해 주세요”\r
  → **user 도메인**만 건드리면 끝.\r
- “장바구니에 할인 금액 보여 주세요”\r
  → **cart/payment 도메인**만 수정.\r
\r
### 2-2. Redux Slice와 FSD Slice\r
\r
글에서 말하는 “slice”는 두 가지에서 왔다.\r
\r
### 1) Redux Toolkit의 slice\r
\r
\`\`\`tsx\r
const userSlice = createSlice({\r
  name: "user",\r
  initialState: { ... },\r
  reducers: { ... },\r
});\r
\`\`\`\r
\r
- \`userSlice\`, \`productSlice\`, \`cartSlice\`처럼\r
  **도메인별로 state + reducer가 뭉쳐 있는 단위**.\r
- 예전처럼 \`actions/\`, \`reducers/\`를 폴더로 찢어놓으면\r
  - 한 기능 수정할 때 여러 폴더를 왔다 갔다 해야 하는데\r
- slice로 묶으면\r
  - “유저 관련 건은 \`userSlice\`만 보면 된다” 수준이 된다.\r
\r
### 2) FSD의 slice\r
\r
전형적인 FSD 구조를 아주 간단히 적으면:\r
\r
\`\`\`\r
src/\r
  entities/\r
    user/\r
      ui/\r
      model/\r
      api/\r
    product/\r
    cart/\r
\`\`\`\r
\r
- \`entities/user/\` 자체가 **user 도메인 slice**\r
- 그 안에 UI, 상태, API까지 다 들어 있다.\r
  → 이게 바로 도메인 단위 수직 슬라이스.\r
\r
### 2-3. Vertical Slice Architecture를 그림으로\r
\r
전통적인 “수평 레이어 구조”는 대략 이런 느낌이다.\r
\r
\`\`\`\r
src/\r
  components/   # UI\r
  hooks/        # 로직\r
  services/     # API\r
  utils/        # 유틸\r
\`\`\`\r
\r
이 구조의 문제는:\r
\r
- 기능 하나 수정하려면\r
  \`components\` → \`hooks\` → \`services\` → \`utils\`를 계속 왔다갔다 해야 한다.\r
\r
반대로, 수직 슬라이스 구조는 이렇게 간다.\r
\r
\`\`\`\r
src/\r
  user/\r
    components/\r
    hooks/\r
    api/\r
    utils/\r
  product/\r
  cart/\r
\`\`\`\r
\r
- “유저 관련 수정”이면 \`user/\` 안만 보면 된다.\r
\r
피자 비유를 빌리면,\r
\r
- 수평으로 자르면: 도우/치즈/토핑을 레이어별로 따로 자른 느낌\r
- 수직으로 자르면: 한 조각에 도우+치즈+토핑이 모두 포함된 슬라이스\r
\r
Redux slice와 FSD slice에 공통으로 흐르는 철학이 바로 이 “도메인 단위 vertical slice”다.\r
\r
---\r
\r
## 3. Velog 글에서 제안하는 “프론트엔드 도메인 아키텍처”\r
\r
이제 본론.\r
\r
Velog 글은 Redux의 Slice구조를 참고해서 FSD 방식에 적용하여 **조금 더 실전적으로 단순화한 구조**를 제안한다.\r
\r
### 3-1. 전체 레이어 구조\r
\r
글쓴이가 제안하는 기본 구조는 이렇다.\r
\r
\`\`\`\r
src/\r
  pages/     # 라우트/페이지 단위 UI\r
  state/     # 도메인 상태 관리 (Redux slice, Zustand store 등)\r
  api/       # API 호출 + 프론트 도메인에 맞게 데이터 변환\r
  stories/   # Storybook\r
  test/      # 테스트\r
\`\`\`\r
\r
포인트 몇 가지:\r
\r
- FSD의 \`entities/\` + \`features/\`를 **\`state/\` 하나로 합침**\r
  → 둘을 애매하게 나누다가 오히려 도메인 경계가 흐려지는 걸 피하자.\r
- \`api/\`는 최상위 레벨에 두고, 그 안을 \`user.ts\`, \`post.ts\`처럼 **도메인별 파일로 나눈다.**\r
\r
디렉토리 구조는 약간 수평처럼 보이지만,\r
\r
**각 레이어 안에서는 도메인 기준으로 쪼개져 있는 형태**다.\r
\r
### 3-2. Pages 레이어: 라우트/섹션 중심\r
\r
- 페이지는 라우트 기준으로 폴더를 쪼갠다.\r
\r
\`\`\`\r
pages/\r
  home/\r
    index.tsx\r
    hero-section.tsx\r
    feature-section.tsx\r
\`\`\`\r
\r
- 컴포넌트 분리는 “재사용”보다는 **섹션 구획 나누기**에 초점을 둔다.\r
  (홈 상단, 피쳐 영역, 리스트 영역 등)\r
- 중요한 철학:\r
\r
> “도메인 UI는 공통화하지 않는다.”\r
\r
- 포스트 카드 vs 상품 카드\r
  → 겉보기엔 비슷해도 요구사항이 금방 갈라지므로,\r
  분기 지옥 만들지 말고 **도메인별/페이지별로 따로 구현**한다.\r
- 대신 슬로건은 이거다.\r
\r
> “상태/로직은 재사용, UI는 반복.”\r
\r
또 하나 포인트:\r
\r
- Pages는 여러 도메인을 자유롭게 참조해도 된다.\r
  → 여기서 SRP를 강하게 주장하지 않는다.\r
  → 페이지는 “여러 도메인의 조합”이 들어오는 곳이기 때문.\r
\r
### 3-3. State 레이어: 도메인 slice 한 방에\r
\r
- \`state/user.ts\`, \`state/post.ts\`, \`state/cart.ts\`처럼\r
  **파일 하나 = 도메인 slice 하나**로 본다.\r
- Redux slice / Zustand store를 떠올리면 이해가 쉽다.\r
\r
특히 강조하는 철학이 몇 가지 있다.\r
\r
### 1) List + Detail을 한 store에서 같이 다룬다\r
\r
\`\`\`tsx\r
// state/post.ts 예시 느낌\r
const usePost = create({\r
  state: {\r
    posts: [],\r
    currentPost: null,\r
  },\r
  actions: (state) => ({\r
    likePost: () => {\r
      // currentPost, posts 둘 다 갱신\r
    },\r
    addComment: (content) => {\r
      // postId를 인자로 안 받고, currentPost에서 읽어서 사용\r
    },\r
  }),\r
});\r
\`\`\`\r
\r
- List와 Detail를 **한 store에서 같이 관리**한다.\r
- 좋아요/댓글 같은 액션 내부에서\r
  - 리스트와 디테일 상태를 같이 갱신해버린다.\r
- UI가 “좋아요 → 리스트 리로드 → 디테일 리로드” 같은 순서를 직접 호출하지 않도록.\r
\r
### 2) Action은 “순수함수”보다 “상태 지향 함수”\r
\r
- ❌ UI에서 \`currentPost.id\`를 꺼내 매번 인자로 넘기는 방식\r
- ✅ 액션 내부에서 \`state.currentPost\`에 바로 접근하는 방식\r
\r
이렇게 하면:\r
\r
- UI에서 호출하는 인터페이스는 단순해지고,\r
- 변경이 생겨도 **state 레이어 안에서만 로직 변경**하면 된다.\r
\r
### 3) 상태 관리 라이브러리 추상화\r
\r
- \`state/\` 안에서 Zustand/Redux를 직접 쓰기보다는\r
  \`createStore\` 같은 팩토리로 한 번 감싼다.\r
- 나중에 라이브러리를 바꾸더라도\r
  \`usePost()\` 같은 인터페이스는 유지되게.\r
\r
→ DDD에서 말하는 “도메인과 인프라 분리”를\r
\r
프론트 기준으로 가져온 느낌이다.\r
\r
### 3-4. API 레이어: BFF 느낌으로 가공/병합\r
\r
- API 레이어에서 **서버 응답을 프론트 도메인 모델로 가공/병합**한다.\r
\r
예를 들어,\r
\r
- \`1234567\` → \`1.2M\` (표시용 \`followerCountDisplay\`)\r
- \`2024-01-15\` → \`3일 전\` (표시용 \`createdAtDisplay\`)\r
- “내가 좋아요 누른 포스트인지 여부” → \`isLikedByMe\`\r
\r
또한, 여러 백엔드 엔드포인트를 조합해야 하면\r
\r
이 레이어에서 병합해서 반환한다.\r
\r
거의 BFF(Backend For Frontend) 같은 역할.\r
\r
UI/State에서는\r
\r
> “이미 프론트 도메인에 맞게 가공된 객체”만 쓴다.\r
\r
이 원칙을 강조한다.\r
\r
### 3-5. UI 컴포넌트 규칙\r
\r
UI 쪽에서 제안하는 규칙은 꽤 실용적이다.\r
\r
1. **글로벌 도메인 상태는 props로 깊게 전달하지 말고, 훅에서 직접 읽기**\r
\r
   \`\`\`tsx\r
   // ❌\r
   function PostDetail({ currentPost, posts }: Props) { ... }\r
\r
   // ✅\r
   function PostDetail() {\r
     const { currentPost, posts } = usePost();\r
   }\r
   \`\`\`\r
\r
2. **도메인 객체는 필드 단위로 쪼개지 말고 객체 통째로 넘기기**\r
\r
   \`\`\`tsx\r
   // ❌\r
   <PostCard title={post.title} thumbnail={post.thumbnail} ... />\r
\r
   // ✅\r
   <PostCard post={post} />\r
   \`\`\`\r
\r
이유는 단순하다.\r
\r
- 도메인 속성은 계속 늘어나고 바뀐다.\r
- props로 필드를 하나씩 넘기기 시작하면,\r
  - 새로운 필드가 추가될 때마다\r
  - 상위/하위 컴포넌트 모두 수정해야 하는 **전파 지옥**이 발생한다.\r
\r
마지막으로, 의존성 흐름은 이렇게 단순하게 가져간다.\r
\r
\`\`\`\r
pages → state → api\r
\`\`\`\r
\r
---\r
\r
## 4. “순정 FSD” vs 이 글의 “도메인 아키텍처”\r
\r
이제 전형적인 FSD 구조와 비교해 보자.\r
\r
### 4-1. 전형적인 FSD 구조\r
\r
아주 간단하게 쓰면:\r
\r
\`\`\`\r
src/\r
  app/\r
  pages/\r
  processes/\r
  features/\r
  entities/\r
  shared/\r
\`\`\`\r
\r
- **entities**: 핵심 도메인 단위 (User, Product, Cart…)\r
- **features**: 유즈케이스 단위 (“로그인”, “검색”, “필터링” 등)\r
- 각 레이어 안에서도 다시 도메인 slice (\`entities/user\`, \`features/auth\` 등)로 나뉜다.\r
\r
**장점**\r
\r
- 도메인 + 유즈케이스를 구조적으로 잘 표현할 수 있다.\r
- 대규모 제품 기준 best practice가 많이 정리되어 있다.\r
\r
**단점**\r
\r
- \`entities\` / \`features\` / \`processes\` 경계가 팀 합의 없이 흔들리면,\r
  - **폴더 구조가 오히려 의사결정 비용이 되고 “어디 두지?”가 반복된다.**\r
- public API / import rule 없이 slice 간 직접 참조가 늘면\r
  - ui/model/api가 레이어를 가로질러 퍼져 보이고 변경 위치 추적이 어려워진다.\r
\r
### 4-2. Velog 글 구조 vs FSD\r
\r
간단 비교표로 보면:\r
\r
| 관점             | FSD 전형                                     | Velog “도메인 아키텍처”                        |\r
| ---------------- | -------------------------------------------- | ---------------------------------------------- |\r
| 최상위 레이어    | app/pages/processes/features/entities/shared | pages/state/api/stories/test                   |\r
| 도메인 분할 단위 | entities/, features/ 아래의 slice            | \`state/*.ts\`, \`api/*.ts\` 파일 단위             |\r
| 도메인 UI 위치   | entities/ui, features/ui 등                  | 대부분 pages 내부, 도메인 UI 공통화 거의 안 함 |\r
| 상태 관리 위치   | entities/model, features/model 등            | \`state/\`에서 전역 도메인 상태 관리             |\r
| API 위치         | shared/api, entities/api 등                  | 최상위 \`api/\`에서 도메인별 파일 분할           |\r
| 철학 키워드      | “도메인 + 유즈케이스 Layering”               | “도메인 vertical slice + 레이어 최소화”        |\r
\r
본질은 둘 다 **도메인 중심**이지만,\r
\r
- FSD는 **레이어 정의와 규칙이 많은 프레임워크 느낌**이고,\r
- Velog 글 구조는 **스타트업/실전용으로 최소한만 남긴 축약판**에 가깝다.\r
\r
레이어가 많을수록 설계 자유도는 늘어나지만,\r
\r
팀 합의/규칙 준수가 안 되면 오히려 혼란만 늘어날 수 있다.\r
\r
실제 유지보수를 많이 해본 사람에게는\r
\r
Velog 스타일의 “간결한 도메인 아키텍처”가 더 몸에 잘 맞을 수도 있다.\r
\r
---\r
\r
## 5. 레거시 유지보수 지옥과 DDD/FSD 관점\r
\r
지금까지 얘기를 실제 상황에 대입해 보면:\r
\r
- 처음에는 어느 정도 FSD-ish한 규칙으로 잘 설계된 서비스가 있을 수 있다.\r
- 이후에 다른 프로젝트에 투입되었는데,\r
  - 기존 서비스는 \`components/hooks/services/utils\` 같은 기술 중심 폴더 구조거나,\r
  - 또는 FSD 같긴 한데 \`entities/features\` 경계가 흐릿해진 상태일 수 있다.\r
\r
이 때 유지보수에 들어가면 생기는 문제가 바로 이거다.\r
\r
> “작은 요구사항 하나 고치려는데,\r
>\r
> 관련 코드가 **도메인 기준이 아니라 ‘기술 종류’ 기준으로 산개**되어 있어서\r
>\r
> 맥락 읽기가 너무 힘들다.”\r
\r
DDD/FSD 관점에서 보면 딱 이 상태다.\r
\r
> **변경이 일어나는 단위(도메인)** 와\r
>\r
> **코드가 묶여 있는 단위(폴더/모듈)** 가\r
>\r
> 완전히 어긋나 있는 상태.\r
\r
이게 바로 “레거시 유지보수 지옥”을 만든다.\r
\r
그래서 결국 자연스럽게:\r
\r
- “도메인 기준으로 잘라야겠다”\r
- “Vertical Slice / 도메인 슬라이스 구조를 써야겠다”\r
\r
라는 쪽으로 관심이 옮아간다.\r
\r
---\r
\r
## 6. 앞으로 설계할 때 쓸 수 있는 실전 사항(?)\r
\r
마지막으로, 실제 프로젝트에서 써먹을 수 있는 방법들을 정리해보자.\r
\r
### 6-1. 새 서비스 설계할 때\r
\r
1. **최상위부터 도메인 단위로 생각하기**\r
   - 예: \`vehicle/\`, \`diagnostics/\`, \`campaign/\`, \`storage/\`, \`auth/\` …\r
   - 이걸 FSD-style로 가져갈지,\r
   - Velog-style로 \`state/*.ts\`, \`api/*.ts\`로 가져갈지 선택.\r
2. **레이어는 단순하게**\r
\r
   복잡한 레이어가 팀에 잘 스며들 자신이 없으면,\r
\r
   이렇게 단순한 구조가 오히려 좋다.\r
\r
   \`\`\`\r
   pages/   # 라우트·섹션 중심 UI\r
   state/   # 도메인 상태 + 비즈니스 로직 (Zustand/Redux 추상화)\r
   api/     # 도메인 데이터 전처리, 병합\r
   shared/  # (있다면) 디자인 시스템/저수준 util 컴포넌트\r
   \`\`\`\r
\r
3. **UI 공통화는 디자인 시스템 컴포넌트까지만**\r
   - 버튼, 인풋, 모달, 토글 같은 “순수 UI”만 재사용.\r
   - “캠페인 카드”, “테스트 세션 리스트”처럼 **도메인 UI는 비슷해 보여도 각각 구현**.\r
4. **도메인 훅 / 상태는 항상 도메인 이름으로**\r
   - \`useCampaign()\`, \`useVehicle()\`, \`useDiagSession()\`\r
   - 액션 이름도 도메인 언어 그대로:\r
     \`startReprogramming\`, \`injectCanMessage\`, \`validateCampaign\` …\r
\r
### 6-2. 레거시/유지보수 프로젝트에서 DDD 도입하기\r
\r
기존 서비스를 한 번에 갈아엎기보다는\r
\r
**도메인 단위로 “섬”을 하나씩 만드는 전략**이 현실적이다.\r
\r
1. 자주 건드리는 화면/기능 하나를 고른다.\r
   - 그 도메인에 대해\r
     - \`state/XXX.ts\` (혹은 \`entities/xxx/\`)로 **도메인 store**를 추출하고\r
     - \`api/xxx.ts\`로 API + 데이터 가공 로직을 옮긴다.\r
     - 페이지에서는 \`useXXX\` 훅만 쓰도록 점차 정리한다.\r
2. 이렇게 도메인 섬이 하나 생기면,\r
   - 그 도메인 관련 요구사항이 들어올 때마다\r
   - “아, 이건 \`XXX\` 슬라이스부터 보면 되겠다”라는 기준점이 생긴다.\r
3. 이런 섬들이 늘어나면서,\r
   - 자연스럽게 도메인 경계가 드러나고,\r
   - 새 기능은 처음부터 그 경계 안에서 설계하면 된다.\r
\r
---\r
\r
## 마무리\r
\r
정리하면:\r
\r
- **DDD**는 “코드를 비즈니스 도메인 기준으로 나누자”는 철학이고,\r
- **FSD**는 이걸 프론트 쪽에 맞게 체계화한 아키텍처 스타일,\r
- Velog에서 제안한 “프론트엔드 도메인 아키텍처”는\r
  - FSD를 참고하되\r
  - 레이어를 \`pages/state/api\` 정도로 단순화하고\r
  - 도메인 UI는 과감히 중복 허용하고\r
  - 상태/액션/API를 도메인 단위로 강하게 묶는 **실전형 축약 버전**이라고 볼 수 있다.\r
\r
우리가 레거시 유지보수에서 느끼는 고통의 상당 부분은,\r
\r
> **“도메인 기준 변화 vs 기술 기준 폴더 구조”** 의 미스매치\r
\r
에서 온다.\r
\r
DDD/FSD/도메인 슬라이스 아키텍처는\r
\r
결국 이 간극을 줄이기 위한 도구들이다.\r
\r
앞으로 새로 짓는 서비스든, 레거시를 점진적으로 리팩터링하든,\r
\r
“**도메인 기준으로 코드를 자르자**”는 이 관점 하나만 머릿속에 계속 붙잡고 가도\r
\r
아키텍처는 훨씬 건강한 방향으로 흘러갈 거라고 믿는다.\r
\r
어느 방법이든 정답은 없다. 각자 현 상황에 최선인 방법들을 고르는 것이 맞을 것이다.\r
`,ob=Object.assign({"./mdDatas/AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여.md":Xx,"./mdDatas/JS 기본 동작원리, “진짜 뼈대”만 잡아보기.md":Qx,"./mdDatas/JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편).md":Zx,"./mdDatas/React × Zustand × Closure stale closure 방지 전략 기술.md":Wx,"./mdDatas/React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기.md":Kx,"./mdDatas/React 실시간 Trigger 처리 최적화 삽질기.md":$x,"./mdDatas/useState → useReducer → 도메인 분리 → Store 까지의 이야기.md":eb,"./mdDatas/“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함.md":nb,"./mdDatas/브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편).md":tb,"./mdDatas/웹(Web)이란 도대체 뭘까.md":rb,"./mdDatas/커링 컬링도 아니고 이게뭐누.md":lb,"./mdDatas/클로저란 당최 무엇인가.md":ib,"./mdDatas/프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처.md":ab}),qn=t=>ob[`./mdDatas/${t}.md`]||"",ub=[{id:"react-zustand-closure",slug:"react-zustand-closure-stale-closure",title:"React × Zustand × Closure: stale closure 방지 전략 기술 정리",excerpt:"Zustand 쓰다가 '아니 왜 값이 안 바뀌지?' 하고 3시간 멍때린 적 있나요? 저도요. 결국 범인은 stale closure였습니다… 진짜 황당해서 정리해둔 글입니다. 나처럼 고통받지 말라고.",date:"2025년 12월 15일",tags:["React","Zustand","JavaScript","Closure","State Management"],cover:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:qn("React × Zustand × Closure stale closure 방지 전략 기술")},{id:"js-basic",slug:"js-basic",title:'JS 기본 동작원리, "진짜 뼈대"만 잡아보기',excerpt:"비동기 개념을 계속 외우기만 했다면, 이번엔 뼈대부터 잡자. Heap/Call Stack이 무엇이고, JS가 왜 싱글 스레드인지, 비동기는 누가 처리하는지(Web APIs/Node APIs), 그리고 Task Queue vs Microtask Queue가 실행 순서를 어떻게 갈라놓는지. 딱 이 흐름만 머리에 넣으면 async/await도 결국 같은 얘기라는 걸 이해하게 된다.",date:"2025년 12월 5일",tags:["JavaScript","기초","동작원리"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:qn("JS 기본 동작원리, “진짜 뼈대”만 잡아보기")},{id:"react-trigger-optimization",slug:"react-realtime-trigger-optimization",title:"React 실시간 Trigger 처리 최적화 삽질기 (Worker, Throttle, Time-slicing… 결국 Baseline이 이겼다.)",excerpt:"실시간 이벤트 들어올 때 UI가 뚝뚝 끊기길래, WebWorker부터 throttle까지 별짓 다 해봤습니다. 근데 결국… 가장 단순한 방법이 이겼습니다. 내 삽질의 역사 공유합니다.",date:"2025년 11월 28일",tags:["React","Performance","WebWorker","Optimization"],cover:"https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:qn("React 실시간 Trigger 처리 최적화 삽질기")},{id:"web-fundamentals",slug:"what-is-web",title:"웹(Web)이란 도대체 뭘까?",excerpt:"HTML/CSS/JS는 아는데 ‘그래서 웹이 어떻게 화면이 되는 건데?’ 하고 멈춰본 적 있나요? 저도 그래서 한 번 아주 기초부터 갈아엎고 정리해봤습니다. 웹의 원리 이해하면 프론트가 더 잘 보임.",date:"2025년 10월 20일",tags:["Web","HTTP","Browser","Fundamentals"],cover:"https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:qn("웹(Web)이란 도대체 뭘까")},{id:"closure-deep-dive",slug:"what-is-closure",title:"클로저란 당최 무엇인가",excerpt:"면접만 가면 꼭 나오는 게 클로저인데… 정작 설명하려면 머릿속이 하얘지는 그 개념. 그래서 빡쳐서(?) 제대로 다시 정리했습니다. 이 글 읽고 나면 최소한 면접에서 우는 일은 없습니다.",date:"2025년 9월 15일",tags:["JavaScript","Closure","Scope","Fundamentals"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:qn("클로저란 당최 무엇인가")},{id:"currying",slug:"what-is-currying",title:"커링?? 컬링도 아니고 이게뭐누",excerpt:"커링 처음 보면 ‘이걸 왜 씀?’ 싶은데, 막상 알아두면 코드가 맘 편해지는 순간이 옵니다. 이 글은 커링을 드디어 사람 언어로 설명해본 글입니다. 예제 많음. 자존감 지킴.",date:"2025년 8월 25일",tags:["JavaScript","Functional Programming","Currying"],cover:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:qn("커링 컬링도 아니고 이게뭐누")},{id:"react-library-ci-cd",slug:"react-library-test-ci-cd",title:'React 라이브러리 만들고 "테스트 + CI + 자동 배포" 붙이기',excerpt:"npm 배포 한 번 해보겠다고 시작했다가 GitHub Actions, semantic-release, 토큰 지옥까지 거쳐온 이야기. 진짜 별별 오류 다 봄. 그래도 자동 배포 되면 감동합니다. (눈물)",date:"2025년 12월 10일",tags:["React","Library","Testing","CI/CD","npm"],cover:"https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:qn("React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기")},{id:"js-event-loop-part1",slug:"js-event-loop-understanding-part1",title:"JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)",excerpt:"비동기 헷갈리는 사람들 99%가 ‘레이어 구분’을 안 해서 그렇습니다. 엔진 / 런타임 / 브라우저 구분하면 진짜 다 이해됩니다. 나도 이거 알기 전엔 async/await이랑 싸움 중이었음.",date:"2025년 6월 18일",tags:["JavaScript","Event Loop","Asynchronous","Architecture"],cover:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:qn("JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)")},{id:"browser-rendering-part2",slug:"browser-js-rendering-mechanism-part2",title:"브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)",excerpt:"브라우저는 생각보다 훨씬 복잡합니다. 렌더링 파이프라인 보면 ‘아 그래서 리렌더링이 느렸구나…’ 하고 현타 오는 그 글. 성능 최적화 힌트도 같이 담겨있음.",date:"2025년 6월 20일",tags:["Browser","Rendering","JavaScript","Performance"],cover:"https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:qn("브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)")},{id:"frontend-ddd-fsd",slug:"frontend-ddd-fsd-domain-slice",title:"프론트엔드에서 DDD와 FSD, 그리고 '도메인 슬라이스' 아키텍처",excerpt:"프로젝트가 커질수록 파일이 정신없어지는 이유, 사실 구조 때문입니다. DDD/FSD를 프론트에 맞게 해석해서 ‘아 이래서 구조가 필요한 거구나’ 감이 오도록 써본 글.",date:"2025년 5월 15일",tags:["Architecture","DDD","FSD","Frontend","Design Pattern"],cover:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:qn("프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처")},{id:"ai-era-maintenance",slug:"ai-era-code-maintenance",title:'AI 시대, "유지보수도 AI가 하면 되지 않나요?"라는 말에 대하여',excerpt:"‘AI가 코드도 짜주는데 유지보수도 하겠지?’라는 말을 들었는데… 현실은 전혀 다릅니다. AI가 잘하는 것과 진짜 사람이 해야 하는 일이 뭐가 다른지 정리한 글. 약간 분노도 섞여 있음.",date:"2026년 1월 1일",tags:["AI","Software Engineering","Maintenance","Opinion"],cover:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",category:"devloper",content:qn("AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여")},{id:"senior-ai-idea",slug:"senior-ai-idea",title:"“AI로 업무 전체 자동화하면 끝 아니야?” 라고 말씀하시는 시니어를 보며 느낀 찝찝함",excerpt:"요즘 들어서 AI 쓰면 금방이잖아? 라는 말을 너무 많이 듣는다. 그리고 마치 구호처럼 느껴진다... 나에게 와닿지 않았던 이유에 대한 고찰과정과 개발자란 직업은 어떻게 변화되어가는지에 대해서 스스로 생각해 보았다.",date:"2026년 1월 15일",tags:["AI","Automation","Technical Debt","Engineering Culture"],cover:"https://plus.unsplash.com/premium_photo-1764695396810-3992d6bc4e51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"devloper",content:qn("“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함")},{id:"reducer-migration-store",slug:"reducer-migration-store",title:"useState → useReducer → 도메인 분리 → Store 까지의 이야기",excerpt:"지역 State를 Reducer로 액션함수로 분리하는 과정에서 응집도를 낮추기 위한 고민, 어떻게 작성해야 차후 전역 State로 빼기 용이할까 생각해본 그 일련의 과정들을 공유한다. (너무 어려웠어...)",date:"2026년 1월 19일",tags:["State","Architecture","Refactoring","Engineering Culture"],cover:"https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"devloper",content:qn("useState → useReducer → 도메인 분리 → Store 까지의 이야기")}],Ml=[...ub].sort((t,i)=>{const l=c=>{const f=c.match(/(\d+)년\s*(\d+)월\s*(\d+)일/);if(f){const[,h,m,p]=f;return new Date(parseInt(h),parseInt(m)-1,parseInt(p))}return new Date(0)},o=l(t.date);return l(i.date).getTime()-o.getTime()});function sb(t,i){const l={};return(t[t.length-1]===""?[...t,""]:t).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const cb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,fb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,db={};function Dp(t,i){return(db.jsx?fb:cb).test(t)}const hb=/[ \t\n\f\r]/g;function mb(t){return typeof t=="object"?t.type==="text"?Mp(t.value):!1:Mp(t)}function Mp(t){return t.replace(hb,"")===""}class Zi{constructor(i,l,o){this.normal=l,this.property=i,o&&(this.space=o)}}Zi.prototype.normal={};Zi.prototype.property={};Zi.prototype.space=void 0;function Gg(t,i){const l={},o={};for(const u of t)Object.assign(l,u.property),Object.assign(o,u.normal);return new Zi(l,o,i)}function _c(t){return t.toLowerCase()}class _n{constructor(i,l){this.attribute=l,this.property=i}}_n.prototype.attribute="";_n.prototype.booleanish=!1;_n.prototype.boolean=!1;_n.prototype.commaOrSpaceSeparated=!1;_n.prototype.commaSeparated=!1;_n.prototype.defined=!1;_n.prototype.mustUseProperty=!1;_n.prototype.number=!1;_n.prototype.overloadedBoolean=!1;_n.prototype.property="";_n.prototype.spaceSeparated=!1;_n.prototype.space=void 0;let pb=0;const xe=Ur(),an=Ur(),Oc=Ur(),Q=Ur(),Pe=Ur(),zl=Ur(),Vn=Ur();function Ur(){return 2**++pb}const Nc=Object.freeze(Object.defineProperty({__proto__:null,boolean:xe,booleanish:an,commaOrSpaceSeparated:Vn,commaSeparated:zl,number:Q,overloadedBoolean:Oc,spaceSeparated:Pe},Symbol.toStringTag,{value:"Module"})),cc=Object.keys(Nc);class Kc extends _n{constructor(i,l,o,u){let c=-1;if(super(i,l),Rp(this,"space",u),typeof o=="number")for(;++c<cc.length;){const f=cc[c];Rp(this,cc[c],(o&Nc[f])===Nc[f])}}}Kc.prototype.defined=!0;function Rp(t,i,l){l&&(t[i]=l)}function Ll(t){const i={},l={};for(const[o,u]of Object.entries(t.properties)){const c=new Kc(o,t.transform(t.attributes||{},o),u,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(c.mustUseProperty=!0),i[o]=c,l[_c(o)]=o,l[_c(c.attribute)]=o}return new Zi(i,l,t.space)}const Pg=Ll({properties:{ariaActiveDescendant:null,ariaAtomic:an,ariaAutoComplete:null,ariaBusy:an,ariaChecked:an,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:Pe,ariaCurrent:null,ariaDescribedBy:Pe,ariaDetails:null,ariaDisabled:an,ariaDropEffect:Pe,ariaErrorMessage:null,ariaExpanded:an,ariaFlowTo:Pe,ariaGrabbed:an,ariaHasPopup:null,ariaHidden:an,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Pe,ariaLevel:Q,ariaLive:null,ariaModal:an,ariaMultiLine:an,ariaMultiSelectable:an,ariaOrientation:null,ariaOwns:Pe,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:an,ariaReadOnly:an,ariaRelevant:null,ariaRequired:an,ariaRoleDescription:Pe,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:an,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(t,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function Yg(t,i){return i in t?t[i]:i}function Jg(t,i){return Yg(t,i.toLowerCase())}const gb=Ll({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zl,acceptCharset:Pe,accessKey:Pe,action:null,allow:null,allowFullScreen:xe,allowPaymentRequest:xe,allowUserMedia:xe,alt:null,as:null,async:xe,autoCapitalize:null,autoComplete:Pe,autoFocus:xe,autoPlay:xe,blocking:Pe,capture:null,charSet:null,checked:xe,cite:null,className:Pe,cols:Q,colSpan:null,content:null,contentEditable:an,controls:xe,controlsList:Pe,coords:Q|zl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:xe,defer:xe,dir:null,dirName:null,disabled:xe,download:Oc,draggable:an,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:xe,formTarget:null,headers:Pe,height:Q,hidden:Oc,high:Q,href:null,hrefLang:null,htmlFor:Pe,httpEquiv:Pe,id:null,imageSizes:null,imageSrcSet:null,inert:xe,inputMode:null,integrity:null,is:null,isMap:xe,itemId:null,itemProp:Pe,itemRef:Pe,itemScope:xe,itemType:Pe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:xe,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:xe,muted:xe,name:null,nonce:null,noModule:xe,noValidate:xe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:xe,optimum:Q,pattern:null,ping:Pe,placeholder:null,playsInline:xe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:xe,referrerPolicy:null,rel:Pe,required:xe,reversed:xe,rows:Q,rowSpan:Q,sandbox:Pe,scope:null,scoped:xe,seamless:xe,selected:xe,shadowRootClonable:xe,shadowRootDelegatesFocus:xe,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:an,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:xe,useMap:null,value:an,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Pe,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:xe,declare:xe,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:xe,noHref:xe,noShade:xe,noWrap:xe,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:an,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:xe,disableRemotePlayback:xe,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:Jg}),yb=Ll({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Vn,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:Pe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:xe,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:zl,g2:zl,glyphName:zl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Vn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Pe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Vn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Vn,rev:Vn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Vn,requiredFeatures:Vn,requiredFonts:Vn,requiredFormats:Vn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Vn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Vn,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Vn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Yg}),Xg=Ll({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,i){return"xlink:"+i.slice(5).toLowerCase()}}),Qg=Ll({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Jg}),Zg=Ll({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,i){return"xml:"+i.slice(3).toLowerCase()}}),vb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},xb=/[A-Z]/g,zp=/-[a-z]/g,bb=/^data[-\w.:]+$/i;function Sb(t,i){const l=_c(i);let o=i,u=_n;if(l in t.normal)return t.property[t.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&bb.test(i)){if(i.charAt(4)==="-"){const c=i.slice(5).replace(zp,Tb);o="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=i.slice(4);if(!zp.test(c)){let f=c.replace(xb,kb);f.charAt(0)!=="-"&&(f="-"+f),i="data"+f}}u=Kc}return new u(o,i)}function kb(t){return"-"+t.toLowerCase()}function Tb(t){return t.charAt(1).toUpperCase()}const Eb=Gg([Pg,gb,Xg,Qg,Zg],"html"),$c=Gg([Pg,yb,Xg,Qg,Zg],"svg");function Cb(t){return t.join(" ").trim()}var wl={},fc,_p;function Ab(){if(_p)return fc;_p=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,l=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,u=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,h=/^\s+|\s+$/g,m=`
`,p="/",x="*",y="",S="comment",b="declaration";function E(M,w){if(typeof M!="string")throw new TypeError("First argument must be a string");if(!M)return[];w=w||{};var B=1,L=1;function Z(ie){var K=ie.match(i);K&&(B+=K.length);var H=ie.lastIndexOf(m);L=~H?ie.length-H:L+ie.length}function ee(){var ie={line:B,column:L};return function(K){return K.position=new F(ie),ue(),K}}function F(ie){this.start=ie,this.end={line:B,column:L},this.source=w.source}F.prototype.content=M;function W(ie){var K=new Error(w.source+":"+B+":"+L+": "+ie);if(K.reason=ie,K.filename=w.source,K.line=B,K.column=L,K.source=M,!w.silent)throw K}function fe(ie){var K=ie.exec(M);if(K){var H=K[0];return Z(H),M=M.slice(H.length),K}}function ue(){fe(l)}function I(ie){var K;for(ie=ie||[];K=ne();)K!==!1&&ie.push(K);return ie}function ne(){var ie=ee();if(!(p!=M.charAt(0)||x!=M.charAt(1))){for(var K=2;y!=M.charAt(K)&&(x!=M.charAt(K)||p!=M.charAt(K+1));)++K;if(K+=2,y===M.charAt(K-1))return W("End of comment missing");var H=M.slice(2,K-2);return L+=2,Z(H),M=M.slice(K),L+=2,ie({type:S,comment:H})}}function te(){var ie=ee(),K=fe(o);if(K){if(ne(),!fe(u))return W("property missing ':'");var H=fe(c),X=ie({type:b,property:R(K[0].replace(t,y)),value:H?R(H[0].replace(t,y)):y});return fe(f),X}}function Se(){var ie=[];I(ie);for(var K;K=te();)K!==!1&&(ie.push(K),I(ie));return ie}return ue(),Se()}function R(M){return M?M.replace(h,y):y}return fc=E,fc}var Op;function wb(){if(Op)return wl;Op=1;var t=wl&&wl.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(wl,"__esModule",{value:!0}),wl.default=l;const i=t(Ab());function l(o,u){let c=null;if(!o||typeof o!="string")return c;const f=(0,i.default)(o),h=typeof u=="function";return f.forEach(m=>{if(m.type!=="declaration")return;const{property:p,value:x}=m;h?u(p,x,m):x&&(c=c||{},c[p]=x)}),c}return wl}var Oi={},Np;function jb(){if(Np)return Oi;Np=1,Object.defineProperty(Oi,"__esModule",{value:!0}),Oi.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,l=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,u=/^-(ms)-/,c=function(p){return!p||l.test(p)||t.test(p)},f=function(p,x){return x.toUpperCase()},h=function(p,x){return"".concat(x,"-")},m=function(p,x){return x===void 0&&(x={}),c(p)?p:(p=p.toLowerCase(),x.reactCompat?p=p.replace(u,h):p=p.replace(o,h),p.replace(i,f))};return Oi.camelCase=m,Oi}var Ni,Lp;function Db(){if(Lp)return Ni;Lp=1;var t=Ni&&Ni.__importDefault||function(u){return u&&u.__esModule?u:{default:u}},i=t(wb()),l=jb();function o(u,c){var f={};return!u||typeof u!="string"||(0,i.default)(u,function(h,m){h&&m&&(f[(0,l.camelCase)(h,c)]=m)}),f}return o.default=o,Ni=o,Ni}var Mb=Db();const Rb=Gc(Mb),Wg=Kg("end"),ef=Kg("start");function Kg(t){return i;function i(l){const o=l&&l.position&&l.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function zb(t){const i=ef(t),l=Wg(t);if(i&&l)return{start:i,end:l}}function Ii(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Bp(t.position):"start"in t||"end"in t?Bp(t):"line"in t||"column"in t?Lc(t):""}function Lc(t){return Up(t&&t.line)+":"+Up(t&&t.column)}function Bp(t){return Lc(t&&t.start)+"-"+Lc(t&&t.end)}function Up(t){return t&&typeof t=="number"?t:1}class xn extends Error{constructor(i,l,o){super(),typeof l=="string"&&(o=l,l=void 0);let u="",c={},f=!1;if(l&&("line"in l&&"column"in l?c={place:l}:"start"in l&&"end"in l?c={place:l}:"type"in l?c={ancestors:[l],place:l.position}:c={...l}),typeof i=="string"?u=i:!c.cause&&i&&(f=!0,u=i.message,c.cause=i),!c.ruleId&&!c.source&&typeof o=="string"){const m=o.indexOf(":");m===-1?c.ruleId=o:(c.source=o.slice(0,m),c.ruleId=o.slice(m+1))}if(!c.place&&c.ancestors&&c.ancestors){const m=c.ancestors[c.ancestors.length-1];m&&(c.place=m.position)}const h=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=u,this.line=h?h.line:void 0,this.name=Ii(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=f&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xn.prototype.file="";xn.prototype.name="";xn.prototype.reason="";xn.prototype.message="";xn.prototype.stack="";xn.prototype.column=void 0;xn.prototype.line=void 0;xn.prototype.ancestors=void 0;xn.prototype.cause=void 0;xn.prototype.fatal=void 0;xn.prototype.place=void 0;xn.prototype.ruleId=void 0;xn.prototype.source=void 0;const nf={}.hasOwnProperty,_b=new Map,Ob=/[A-Z]/g,Nb=new Set(["table","tbody","thead","tfoot","tr"]),Lb=new Set(["td","th"]),$g="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Bb(t,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=i.filePath||void 0;let o;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=Pb(l,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=Gb(l,i.jsx,i.jsxs)}const u={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:o,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?$c:Eb,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},c=ey(u,t,void 0);return c&&typeof c!="string"?c:u.create(t,u.Fragment,{children:c||void 0},void 0)}function ey(t,i,l){if(i.type==="element")return Ub(t,i,l);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return Hb(t,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return Fb(t,i,l);if(i.type==="mdxjsEsm")return Ib(t,i);if(i.type==="root")return qb(t,i,l);if(i.type==="text")return Vb(t,i)}function Ub(t,i,l){const o=t.schema;let u=o;i.tagName.toLowerCase()==="svg"&&o.space==="html"&&(u=$c,t.schema=u),t.ancestors.push(i);const c=ty(t,i.tagName,!1),f=Yb(t,i);let h=rf(t,i);return Nb.has(i.tagName)&&(h=h.filter(function(m){return typeof m=="string"?!mb(m):!0})),ny(t,f,c,i),tf(f,h),t.ancestors.pop(),t.schema=o,t.create(i,c,f,l)}function Hb(t,i){if(i.data&&i.data.estree&&t.evaluater){const o=i.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}Pi(t,i.position)}function Ib(t,i){if(i.data&&i.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(i.data.estree);Pi(t,i.position)}function Fb(t,i,l){const o=t.schema;let u=o;i.name==="svg"&&o.space==="html"&&(u=$c,t.schema=u),t.ancestors.push(i);const c=i.name===null?t.Fragment:ty(t,i.name,!0),f=Jb(t,i),h=rf(t,i);return ny(t,f,c,i),tf(f,h),t.ancestors.pop(),t.schema=o,t.create(i,c,f,l)}function qb(t,i,l){const o={};return tf(o,rf(t,i)),t.create(i,t.Fragment,o,l)}function Vb(t,i){return i.value}function ny(t,i,l,o){typeof l!="string"&&l!==t.Fragment&&t.passNode&&(i.node=o)}function tf(t,i){if(i.length>0){const l=i.length>1?i:i[0];l&&(t.children=l)}}function Gb(t,i,l){return o;function o(u,c,f,h){const p=Array.isArray(f.children)?l:i;return h?p(c,f,h):p(c,f)}}function Pb(t,i){return l;function l(o,u,c,f){const h=Array.isArray(c.children),m=ef(o);return i(u,c,f,h,{columnNumber:m?m.column-1:void 0,fileName:t,lineNumber:m?m.line:void 0},void 0)}}function Yb(t,i){const l={};let o,u;for(u in i.properties)if(u!=="children"&&nf.call(i.properties,u)){const c=Xb(t,u,i.properties[u]);if(c){const[f,h]=c;t.tableCellAlignToStyle&&f==="align"&&typeof h=="string"&&Lb.has(i.tagName)?o=h:l[f]=h}}if(o){const c=l.style||(l.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return l}function Jb(t,i){const l={};for(const o of i.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const c=o.data.estree.body[0];c.type;const f=c.expression;f.type;const h=f.properties[0];h.type,Object.assign(l,t.evaluater.evaluateExpression(h.argument))}else Pi(t,i.position);else{const u=o.name;let c;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const h=o.value.data.estree.body[0];h.type,c=t.evaluater.evaluateExpression(h.expression)}else Pi(t,i.position);else c=o.value===null?!0:o.value;l[u]=c}return l}function rf(t,i){const l=[];let o=-1;const u=t.passKeys?new Map:_b;for(;++o<i.children.length;){const c=i.children[o];let f;if(t.passKeys){const m=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(m){const p=u.get(m)||0;f=m+"-"+p,u.set(m,p+1)}}const h=ey(t,c,f);h!==void 0&&l.push(h)}return l}function Xb(t,i,l){const o=Sb(t.schema,i);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=o.commaSeparated?sb(l):Cb(l)),o.property==="style"){let u=typeof l=="object"?l:Qb(t,String(l));return t.stylePropertyNameCase==="css"&&(u=Zb(u)),["style",u]}return[t.elementAttributeNameCase==="react"&&o.space?vb[o.property]||o.property:o.attribute,l]}}function Qb(t,i){try{return Rb(i,{reactCompat:!0})}catch(l){if(t.ignoreInvalidStyle)return{};const o=l,u=new xn("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw u.file=t.filePath||void 0,u.url=$g+"#cannot-parse-style-attribute",u}}function ty(t,i,l){let o;if(!l)o={type:"Literal",value:i};else if(i.includes(".")){const u=i.split(".");let c=-1,f;for(;++c<u.length;){const h=Dp(u[c])?{type:"Identifier",name:u[c]}:{type:"Literal",value:u[c]};f=f?{type:"MemberExpression",object:f,property:h,computed:!!(c&&h.type==="Literal"),optional:!1}:h}o=f}else o=Dp(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(o.type==="Literal"){const u=o.value;return nf.call(t.components,u)?t.components[u]:u}if(t.evaluater)return t.evaluater.evaluateExpression(o);Pi(t)}function Pi(t,i){const l=new xn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=$g+"#cannot-handle-mdx-estrees-without-createevaluater",l}function Zb(t){const i={};let l;for(l in t)nf.call(t,l)&&(i[Wb(l)]=t[l]);return i}function Wb(t){let i=t.replace(Ob,Kb);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function Kb(t){return"-"+t.toLowerCase()}const dc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},$b={};function lf(t,i){const l=$b,o=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,u=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return ry(t,o,u)}function ry(t,i,l){if(eS(t)){if("value"in t)return t.type==="html"&&!l?"":t.value;if(i&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Hp(t.children,i,l)}return Array.isArray(t)?Hp(t,i,l):""}function Hp(t,i,l){const o=[];let u=-1;for(;++u<t.length;)o[u]=ry(t[u],i,l);return o.join("")}function eS(t){return!!(t&&typeof t=="object")}const Ip=document.createElement("i");function af(t){const i="&"+t+";";Ip.innerHTML=i;const l=Ip.textContent;return l.charCodeAt(l.length-1)===59&&t!=="semi"||l===i?!1:l}function Gn(t,i,l,o){const u=t.length;let c=0,f;if(i<0?i=-i>u?0:u+i:i=i>u?u:i,l=l>0?l:0,o.length<1e4)f=Array.from(o),f.unshift(i,l),t.splice(...f);else for(l&&t.splice(i,l);c<o.length;)f=o.slice(c,c+1e4),f.unshift(i,0),t.splice(...f),c+=1e4,i+=1e4}function tt(t,i){return t.length>0?(Gn(t,t.length,0,i),t):i}const Fp={}.hasOwnProperty;function ly(t){const i={};let l=-1;for(;++l<t.length;)nS(i,t[l]);return i}function nS(t,i){let l;for(l in i){const u=(Fp.call(t,l)?t[l]:void 0)||(t[l]={}),c=i[l];let f;if(c)for(f in c){Fp.call(u,f)||(u[f]=[]);const h=c[f];tS(u[f],Array.isArray(h)?h:h?[h]:[])}}}function tS(t,i){let l=-1;const o=[];for(;++l<i.length;)(i[l].add==="after"?t:o).push(i[l]);Gn(t,0,0,o)}function iy(t,i){const l=Number.parseInt(t,i);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function ot(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Tn=yr(/[A-Za-z]/),vn=yr(/[\dA-Za-z]/),rS=yr(/[#-'*+\--9=?A-Z^-~]/);function Mo(t){return t!==null&&(t<32||t===127)}const Bc=yr(/\d/),lS=yr(/[\dA-Fa-f]/),iS=yr(/[!-/:-@[-`{-~]/);function de(t){return t!==null&&t<-2}function Ve(t){return t!==null&&(t<0||t===32)}function Ce(t){return t===-2||t===-1||t===32}const Lo=yr(new RegExp("\\p{P}|\\p{S}","u")),Br=yr(/\s/);function yr(t){return i;function i(l){return l!==null&&l>-1&&t.test(String.fromCharCode(l))}}function Bl(t){const i=[];let l=-1,o=0,u=0;for(;++l<t.length;){const c=t.charCodeAt(l);let f="";if(c===37&&vn(t.charCodeAt(l+1))&&vn(t.charCodeAt(l+2)))u=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(f=String.fromCharCode(c));else if(c>55295&&c<57344){const h=t.charCodeAt(l+1);c<56320&&h>56319&&h<57344?(f=String.fromCharCode(c,h),u=1):f="�"}else f=String.fromCharCode(c);f&&(i.push(t.slice(o,l),encodeURIComponent(f)),o=l+u+1,f=""),u&&(l+=u,u=0)}return i.join("")+t.slice(o)}function Me(t,i,l,o){const u=o?o-1:Number.POSITIVE_INFINITY;let c=0;return f;function f(m){return Ce(m)?(t.enter(l),h(m)):i(m)}function h(m){return Ce(m)&&c++<u?(t.consume(m),h):(t.exit(l),i(m))}}const aS={tokenize:oS};function oS(t){const i=t.attempt(this.parser.constructs.contentInitial,o,u);let l;return i;function o(h){if(h===null){t.consume(h);return}return t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),Me(t,i,"linePrefix")}function u(h){return t.enter("paragraph"),c(h)}function c(h){const m=t.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=m),l=m,f(h)}function f(h){if(h===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(h);return}return de(h)?(t.consume(h),t.exit("chunkText"),c):(t.consume(h),f)}}const uS={tokenize:sS},qp={tokenize:cS};function sS(t){const i=this,l=[];let o=0,u,c,f;return h;function h(L){if(o<l.length){const Z=l[o];return i.containerState=Z[1],t.attempt(Z[0].continuation,m,p)(L)}return p(L)}function m(L){if(o++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,u&&B();const Z=i.events.length;let ee=Z,F;for(;ee--;)if(i.events[ee][0]==="exit"&&i.events[ee][1].type==="chunkFlow"){F=i.events[ee][1].end;break}w(o);let W=Z;for(;W<i.events.length;)i.events[W][1].end={...F},W++;return Gn(i.events,ee+1,0,i.events.slice(Z)),i.events.length=W,p(L)}return h(L)}function p(L){if(o===l.length){if(!u)return S(L);if(u.currentConstruct&&u.currentConstruct.concrete)return E(L);i.interrupt=!!(u.currentConstruct&&!u._gfmTableDynamicInterruptHack)}return i.containerState={},t.check(qp,x,y)(L)}function x(L){return u&&B(),w(o),S(L)}function y(L){return i.parser.lazy[i.now().line]=o!==l.length,f=i.now().offset,E(L)}function S(L){return i.containerState={},t.attempt(qp,b,E)(L)}function b(L){return o++,l.push([i.currentConstruct,i.containerState]),S(L)}function E(L){if(L===null){u&&B(),w(0),t.consume(L);return}return u=u||i.parser.flow(i.now()),t.enter("chunkFlow",{_tokenizer:u,contentType:"flow",previous:c}),R(L)}function R(L){if(L===null){M(t.exit("chunkFlow"),!0),w(0),t.consume(L);return}return de(L)?(t.consume(L),M(t.exit("chunkFlow")),o=0,i.interrupt=void 0,h):(t.consume(L),R)}function M(L,Z){const ee=i.sliceStream(L);if(Z&&ee.push(null),L.previous=c,c&&(c.next=L),c=L,u.defineSkip(L.start),u.write(ee),i.parser.lazy[L.start.line]){let F=u.events.length;for(;F--;)if(u.events[F][1].start.offset<f&&(!u.events[F][1].end||u.events[F][1].end.offset>f))return;const W=i.events.length;let fe=W,ue,I;for(;fe--;)if(i.events[fe][0]==="exit"&&i.events[fe][1].type==="chunkFlow"){if(ue){I=i.events[fe][1].end;break}ue=!0}for(w(o),F=W;F<i.events.length;)i.events[F][1].end={...I},F++;Gn(i.events,fe+1,0,i.events.slice(W)),i.events.length=F}}function w(L){let Z=l.length;for(;Z-- >L;){const ee=l[Z];i.containerState=ee[1],ee[0].exit.call(i,t)}l.length=L}function B(){u.write([null]),c=void 0,u=void 0,i.containerState._closeFlow=void 0}}function cS(t,i,l){return Me(t,t.attempt(this.parser.constructs.document,i,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function _l(t){if(t===null||Ve(t)||Br(t))return 1;if(Lo(t))return 2}function Bo(t,i,l){const o=[];let u=-1;for(;++u<t.length;){const c=t[u].resolveAll;c&&!o.includes(c)&&(i=c(i,l),o.push(c))}return i}const Uc={name:"attention",resolveAll:fS,tokenize:dS};function fS(t,i){let l=-1,o,u,c,f,h,m,p,x;for(;++l<t.length;)if(t[l][0]==="enter"&&t[l][1].type==="attentionSequence"&&t[l][1]._close){for(o=l;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&i.sliceSerialize(t[o][1]).charCodeAt(0)===i.sliceSerialize(t[l][1]).charCodeAt(0)){if((t[o][1]._close||t[l][1]._open)&&(t[l][1].end.offset-t[l][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[l][1].end.offset-t[l][1].start.offset)%3))continue;m=t[o][1].end.offset-t[o][1].start.offset>1&&t[l][1].end.offset-t[l][1].start.offset>1?2:1;const y={...t[o][1].end},S={...t[l][1].start};Vp(y,-m),Vp(S,m),f={type:m>1?"strongSequence":"emphasisSequence",start:y,end:{...t[o][1].end}},h={type:m>1?"strongSequence":"emphasisSequence",start:{...t[l][1].start},end:S},c={type:m>1?"strongText":"emphasisText",start:{...t[o][1].end},end:{...t[l][1].start}},u={type:m>1?"strong":"emphasis",start:{...f.start},end:{...h.end}},t[o][1].end={...f.start},t[l][1].start={...h.end},p=[],t[o][1].end.offset-t[o][1].start.offset&&(p=tt(p,[["enter",t[o][1],i],["exit",t[o][1],i]])),p=tt(p,[["enter",u,i],["enter",f,i],["exit",f,i],["enter",c,i]]),p=tt(p,Bo(i.parser.constructs.insideSpan.null,t.slice(o+1,l),i)),p=tt(p,[["exit",c,i],["enter",h,i],["exit",h,i],["exit",u,i]]),t[l][1].end.offset-t[l][1].start.offset?(x=2,p=tt(p,[["enter",t[l][1],i],["exit",t[l][1],i]])):x=0,Gn(t,o-1,l-o+3,p),l=o+p.length-x-2;break}}for(l=-1;++l<t.length;)t[l][1].type==="attentionSequence"&&(t[l][1].type="data");return t}function dS(t,i){const l=this.parser.constructs.attentionMarkers.null,o=this.previous,u=_l(o);let c;return f;function f(m){return c=m,t.enter("attentionSequence"),h(m)}function h(m){if(m===c)return t.consume(m),h;const p=t.exit("attentionSequence"),x=_l(m),y=!x||x===2&&u||l.includes(m),S=!u||u===2&&x||l.includes(o);return p._open=!!(c===42?y:y&&(u||!S)),p._close=!!(c===42?S:S&&(x||!y)),i(m)}}function Vp(t,i){t.column+=i,t.offset+=i,t._bufferIndex+=i}const hS={name:"autolink",tokenize:mS};function mS(t,i,l){let o=0;return u;function u(b){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(b){return Tn(b)?(t.consume(b),f):b===64?l(b):p(b)}function f(b){return b===43||b===45||b===46||vn(b)?(o=1,h(b)):p(b)}function h(b){return b===58?(t.consume(b),o=0,m):(b===43||b===45||b===46||vn(b))&&o++<32?(t.consume(b),h):(o=0,p(b))}function m(b){return b===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),i):b===null||b===32||b===60||Mo(b)?l(b):(t.consume(b),m)}function p(b){return b===64?(t.consume(b),x):rS(b)?(t.consume(b),p):l(b)}function x(b){return vn(b)?y(b):l(b)}function y(b){return b===46?(t.consume(b),o=0,x):b===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),i):S(b)}function S(b){if((b===45||vn(b))&&o++<63){const E=b===45?S:y;return t.consume(b),E}return l(b)}}const Wi={partial:!0,tokenize:pS};function pS(t,i,l){return o;function o(c){return Ce(c)?Me(t,u,"linePrefix")(c):u(c)}function u(c){return c===null||de(c)?i(c):l(c)}}const ay={continuation:{tokenize:yS},exit:vS,name:"blockQuote",tokenize:gS};function gS(t,i,l){const o=this;return u;function u(f){if(f===62){const h=o.containerState;return h.open||(t.enter("blockQuote",{_container:!0}),h.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(f),t.exit("blockQuoteMarker"),c}return l(f)}function c(f){return Ce(f)?(t.enter("blockQuotePrefixWhitespace"),t.consume(f),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),i):(t.exit("blockQuotePrefix"),i(f))}}function yS(t,i,l){const o=this;return u;function u(f){return Ce(f)?Me(t,c,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):c(f)}function c(f){return t.attempt(ay,i,l)(f)}}function vS(t){t.exit("blockQuote")}const oy={name:"characterEscape",tokenize:xS};function xS(t,i,l){return o;function o(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),u}function u(c){return iS(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),i):l(c)}}const uy={name:"characterReference",tokenize:bS};function bS(t,i,l){const o=this;let u=0,c,f;return h;function h(y){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(y),t.exit("characterReferenceMarker"),m}function m(y){return y===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(y),t.exit("characterReferenceMarkerNumeric"),p):(t.enter("characterReferenceValue"),c=31,f=vn,x(y))}function p(y){return y===88||y===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(y),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,f=lS,x):(t.enter("characterReferenceValue"),c=7,f=Bc,x(y))}function x(y){if(y===59&&u){const S=t.exit("characterReferenceValue");return f===vn&&!af(o.sliceSerialize(S))?l(y):(t.enter("characterReferenceMarker"),t.consume(y),t.exit("characterReferenceMarker"),t.exit("characterReference"),i)}return f(y)&&u++<c?(t.consume(y),x):l(y)}}const Gp={partial:!0,tokenize:kS},Pp={concrete:!0,name:"codeFenced",tokenize:SS};function SS(t,i,l){const o=this,u={partial:!0,tokenize:ee};let c=0,f=0,h;return m;function m(F){return p(F)}function p(F){const W=o.events[o.events.length-1];return c=W&&W[1].type==="linePrefix"?W[2].sliceSerialize(W[1],!0).length:0,h=F,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),x(F)}function x(F){return F===h?(f++,t.consume(F),x):f<3?l(F):(t.exit("codeFencedFenceSequence"),Ce(F)?Me(t,y,"whitespace")(F):y(F))}function y(F){return F===null||de(F)?(t.exit("codeFencedFence"),o.interrupt?i(F):t.check(Gp,R,Z)(F)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),S(F))}function S(F){return F===null||de(F)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),y(F)):Ce(F)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Me(t,b,"whitespace")(F)):F===96&&F===h?l(F):(t.consume(F),S)}function b(F){return F===null||de(F)?y(F):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),E(F))}function E(F){return F===null||de(F)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),y(F)):F===96&&F===h?l(F):(t.consume(F),E)}function R(F){return t.attempt(u,Z,M)(F)}function M(F){return t.enter("lineEnding"),t.consume(F),t.exit("lineEnding"),w}function w(F){return c>0&&Ce(F)?Me(t,B,"linePrefix",c+1)(F):B(F)}function B(F){return F===null||de(F)?t.check(Gp,R,Z)(F):(t.enter("codeFlowValue"),L(F))}function L(F){return F===null||de(F)?(t.exit("codeFlowValue"),B(F)):(t.consume(F),L)}function Z(F){return t.exit("codeFenced"),i(F)}function ee(F,W,fe){let ue=0;return I;function I(K){return F.enter("lineEnding"),F.consume(K),F.exit("lineEnding"),ne}function ne(K){return F.enter("codeFencedFence"),Ce(K)?Me(F,te,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(K):te(K)}function te(K){return K===h?(F.enter("codeFencedFenceSequence"),Se(K)):fe(K)}function Se(K){return K===h?(ue++,F.consume(K),Se):ue>=f?(F.exit("codeFencedFenceSequence"),Ce(K)?Me(F,ie,"whitespace")(K):ie(K)):fe(K)}function ie(K){return K===null||de(K)?(F.exit("codeFencedFence"),W(K)):fe(K)}}}function kS(t,i,l){const o=this;return u;function u(f){return f===null?l(f):(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c)}function c(f){return o.parser.lazy[o.now().line]?l(f):i(f)}}const hc={name:"codeIndented",tokenize:ES},TS={partial:!0,tokenize:CS};function ES(t,i,l){const o=this;return u;function u(p){return t.enter("codeIndented"),Me(t,c,"linePrefix",5)(p)}function c(p){const x=o.events[o.events.length-1];return x&&x[1].type==="linePrefix"&&x[2].sliceSerialize(x[1],!0).length>=4?f(p):l(p)}function f(p){return p===null?m(p):de(p)?t.attempt(TS,f,m)(p):(t.enter("codeFlowValue"),h(p))}function h(p){return p===null||de(p)?(t.exit("codeFlowValue"),f(p)):(t.consume(p),h)}function m(p){return t.exit("codeIndented"),i(p)}}function CS(t,i,l){const o=this;return u;function u(f){return o.parser.lazy[o.now().line]?l(f):de(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),u):Me(t,c,"linePrefix",5)(f)}function c(f){const h=o.events[o.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?i(f):de(f)?u(f):l(f)}}const AS={name:"codeText",previous:jS,resolve:wS,tokenize:DS};function wS(t){let i=t.length-4,l=3,o,u;if((t[l][1].type==="lineEnding"||t[l][1].type==="space")&&(t[i][1].type==="lineEnding"||t[i][1].type==="space")){for(o=l;++o<i;)if(t[o][1].type==="codeTextData"){t[l][1].type="codeTextPadding",t[i][1].type="codeTextPadding",l+=2,i-=2;break}}for(o=l-1,i++;++o<=i;)u===void 0?o!==i&&t[o][1].type!=="lineEnding"&&(u=o):(o===i||t[o][1].type==="lineEnding")&&(t[u][1].type="codeTextData",o!==u+2&&(t[u][1].end=t[o-1][1].end,t.splice(u+2,o-u-2),i-=o-u-2,o=u+2),u=void 0);return t}function jS(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function DS(t,i,l){let o=0,u,c;return f;function f(y){return t.enter("codeText"),t.enter("codeTextSequence"),h(y)}function h(y){return y===96?(t.consume(y),o++,h):(t.exit("codeTextSequence"),m(y))}function m(y){return y===null?l(y):y===32?(t.enter("space"),t.consume(y),t.exit("space"),m):y===96?(c=t.enter("codeTextSequence"),u=0,x(y)):de(y)?(t.enter("lineEnding"),t.consume(y),t.exit("lineEnding"),m):(t.enter("codeTextData"),p(y))}function p(y){return y===null||y===32||y===96||de(y)?(t.exit("codeTextData"),m(y)):(t.consume(y),p)}function x(y){return y===96?(t.consume(y),u++,x):u===o?(t.exit("codeTextSequence"),t.exit("codeText"),i(y)):(c.type="codeTextData",p(y))}}class MS{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,l){const o=l??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(i,o):i>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(i,l,o){const u=l||0;this.setCursor(Math.trunc(i));const c=this.right.splice(this.right.length-u,Number.POSITIVE_INFINITY);return o&&Li(this.left,o),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Li(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Li(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const l=this.left.splice(i,Number.POSITIVE_INFINITY);Li(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Li(this.left,l.reverse())}}}function Li(t,i){let l=0;if(i.length<1e4)t.push(...i);else for(;l<i.length;)t.push(...i.slice(l,l+1e4)),l+=1e4}function sy(t){const i={};let l=-1,o,u,c,f,h,m,p;const x=new MS(t);for(;++l<x.length;){for(;l in i;)l=i[l];if(o=x.get(l),l&&o[1].type==="chunkFlow"&&x.get(l-1)[1].type==="listItemPrefix"&&(m=o[1]._tokenizer.events,c=0,c<m.length&&m[c][1].type==="lineEndingBlank"&&(c+=2),c<m.length&&m[c][1].type==="content"))for(;++c<m.length&&m[c][1].type!=="content";)m[c][1].type==="chunkText"&&(m[c][1]._isInFirstContentOfListItem=!0,c++);if(o[0]==="enter")o[1].contentType&&(Object.assign(i,RS(x,l)),l=i[l],p=!0);else if(o[1]._container){for(c=l,u=void 0;c--;)if(f=x.get(c),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(u&&(x.get(u)[1].type="lineEndingBlank"),f[1].type="lineEnding",u=c);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;u&&(o[1].end={...x.get(u)[1].start},h=x.slice(u,l),h.unshift(o),x.splice(u,l-u+1,h))}}return Gn(t,0,Number.POSITIVE_INFINITY,x.slice(0)),!p}function RS(t,i){const l=t.get(i)[1],o=t.get(i)[2];let u=i-1;const c=[];let f=l._tokenizer;f||(f=o.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const h=f.events,m=[],p={};let x,y,S=-1,b=l,E=0,R=0;const M=[R];for(;b;){for(;t.get(++u)[1]!==b;);c.push(u),b._tokenizer||(x=o.sliceStream(b),b.next||x.push(null),y&&f.defineSkip(b.start),b._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(x),b._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),y=b,b=b.next}for(b=l;++S<h.length;)h[S][0]==="exit"&&h[S-1][0]==="enter"&&h[S][1].type===h[S-1][1].type&&h[S][1].start.line!==h[S][1].end.line&&(R=S+1,M.push(R),b._tokenizer=void 0,b.previous=void 0,b=b.next);for(f.events=[],b?(b._tokenizer=void 0,b.previous=void 0):M.pop(),S=M.length;S--;){const w=h.slice(M[S],M[S+1]),B=c.pop();m.push([B,B+w.length-1]),t.splice(B,2,w)}for(m.reverse(),S=-1;++S<m.length;)p[E+m[S][0]]=E+m[S][1],E+=m[S][1]-m[S][0]-1;return p}const zS={resolve:OS,tokenize:NS},_S={partial:!0,tokenize:LS};function OS(t){return sy(t),t}function NS(t,i){let l;return o;function o(h){return t.enter("content"),l=t.enter("chunkContent",{contentType:"content"}),u(h)}function u(h){return h===null?c(h):de(h)?t.check(_S,f,c)(h):(t.consume(h),u)}function c(h){return t.exit("chunkContent"),t.exit("content"),i(h)}function f(h){return t.consume(h),t.exit("chunkContent"),l.next=t.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,u}}function LS(t,i,l){const o=this;return u;function u(f){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Me(t,c,"linePrefix")}function c(f){if(f===null||de(f))return l(f);const h=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?i(f):t.interrupt(o.parser.constructs.flow,l,i)(f)}}function cy(t,i,l,o,u,c,f,h,m){const p=m||Number.POSITIVE_INFINITY;let x=0;return y;function y(w){return w===60?(t.enter(o),t.enter(u),t.enter(c),t.consume(w),t.exit(c),S):w===null||w===32||w===41||Mo(w)?l(w):(t.enter(o),t.enter(f),t.enter(h),t.enter("chunkString",{contentType:"string"}),R(w))}function S(w){return w===62?(t.enter(c),t.consume(w),t.exit(c),t.exit(u),t.exit(o),i):(t.enter(h),t.enter("chunkString",{contentType:"string"}),b(w))}function b(w){return w===62?(t.exit("chunkString"),t.exit(h),S(w)):w===null||w===60||de(w)?l(w):(t.consume(w),w===92?E:b)}function E(w){return w===60||w===62||w===92?(t.consume(w),b):b(w)}function R(w){return!x&&(w===null||w===41||Ve(w))?(t.exit("chunkString"),t.exit(h),t.exit(f),t.exit(o),i(w)):x<p&&w===40?(t.consume(w),x++,R):w===41?(t.consume(w),x--,R):w===null||w===32||w===40||Mo(w)?l(w):(t.consume(w),w===92?M:R)}function M(w){return w===40||w===41||w===92?(t.consume(w),R):R(w)}}function fy(t,i,l,o,u,c){const f=this;let h=0,m;return p;function p(b){return t.enter(o),t.enter(u),t.consume(b),t.exit(u),t.enter(c),x}function x(b){return h>999||b===null||b===91||b===93&&!m||b===94&&!h&&"_hiddenFootnoteSupport"in f.parser.constructs?l(b):b===93?(t.exit(c),t.enter(u),t.consume(b),t.exit(u),t.exit(o),i):de(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),x):(t.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===null||b===91||b===93||de(b)||h++>999?(t.exit("chunkString"),x(b)):(t.consume(b),m||(m=!Ce(b)),b===92?S:y)}function S(b){return b===91||b===92||b===93?(t.consume(b),h++,y):y(b)}}function dy(t,i,l,o,u,c){let f;return h;function h(S){return S===34||S===39||S===40?(t.enter(o),t.enter(u),t.consume(S),t.exit(u),f=S===40?41:S,m):l(S)}function m(S){return S===f?(t.enter(u),t.consume(S),t.exit(u),t.exit(o),i):(t.enter(c),p(S))}function p(S){return S===f?(t.exit(c),m(f)):S===null?l(S):de(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),Me(t,p,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),x(S))}function x(S){return S===f||S===null||de(S)?(t.exit("chunkString"),p(S)):(t.consume(S),S===92?y:x)}function y(S){return S===f||S===92?(t.consume(S),x):x(S)}}function Fi(t,i){let l;return o;function o(u){return de(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),l=!0,o):Ce(u)?Me(t,o,l?"linePrefix":"lineSuffix")(u):i(u)}}const BS={name:"definition",tokenize:HS},US={partial:!0,tokenize:IS};function HS(t,i,l){const o=this;let u;return c;function c(b){return t.enter("definition"),f(b)}function f(b){return fy.call(o,t,h,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(b)}function h(b){return u=ot(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),b===58?(t.enter("definitionMarker"),t.consume(b),t.exit("definitionMarker"),m):l(b)}function m(b){return Ve(b)?Fi(t,p)(b):p(b)}function p(b){return cy(t,x,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(b)}function x(b){return t.attempt(US,y,y)(b)}function y(b){return Ce(b)?Me(t,S,"whitespace")(b):S(b)}function S(b){return b===null||de(b)?(t.exit("definition"),o.parser.defined.push(u),i(b)):l(b)}}function IS(t,i,l){return o;function o(h){return Ve(h)?Fi(t,u)(h):l(h)}function u(h){return dy(t,c,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function c(h){return Ce(h)?Me(t,f,"whitespace")(h):f(h)}function f(h){return h===null||de(h)?i(h):l(h)}}const FS={name:"hardBreakEscape",tokenize:qS};function qS(t,i,l){return o;function o(c){return t.enter("hardBreakEscape"),t.consume(c),u}function u(c){return de(c)?(t.exit("hardBreakEscape"),i(c)):l(c)}}const VS={name:"headingAtx",resolve:GS,tokenize:PS};function GS(t,i){let l=t.length-2,o=3,u,c;return t[o][1].type==="whitespace"&&(o+=2),l-2>o&&t[l][1].type==="whitespace"&&(l-=2),t[l][1].type==="atxHeadingSequence"&&(o===l-1||l-4>o&&t[l-2][1].type==="whitespace")&&(l-=o+1===l?2:4),l>o&&(u={type:"atxHeadingText",start:t[o][1].start,end:t[l][1].end},c={type:"chunkText",start:t[o][1].start,end:t[l][1].end,contentType:"text"},Gn(t,o,l-o+1,[["enter",u,i],["enter",c,i],["exit",c,i],["exit",u,i]])),t}function PS(t,i,l){let o=0;return u;function u(x){return t.enter("atxHeading"),c(x)}function c(x){return t.enter("atxHeadingSequence"),f(x)}function f(x){return x===35&&o++<6?(t.consume(x),f):x===null||Ve(x)?(t.exit("atxHeadingSequence"),h(x)):l(x)}function h(x){return x===35?(t.enter("atxHeadingSequence"),m(x)):x===null||de(x)?(t.exit("atxHeading"),i(x)):Ce(x)?Me(t,h,"whitespace")(x):(t.enter("atxHeadingText"),p(x))}function m(x){return x===35?(t.consume(x),m):(t.exit("atxHeadingSequence"),h(x))}function p(x){return x===null||x===35||Ve(x)?(t.exit("atxHeadingText"),h(x)):(t.consume(x),p)}}const YS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Yp=["pre","script","style","textarea"],JS={concrete:!0,name:"htmlFlow",resolveTo:ZS,tokenize:WS},XS={partial:!0,tokenize:$S},QS={partial:!0,tokenize:KS};function ZS(t){let i=t.length;for(;i--&&!(t[i][0]==="enter"&&t[i][1].type==="htmlFlow"););return i>1&&t[i-2][1].type==="linePrefix"&&(t[i][1].start=t[i-2][1].start,t[i+1][1].start=t[i-2][1].start,t.splice(i-2,2)),t}function WS(t,i,l){const o=this;let u,c,f,h,m;return p;function p(T){return x(T)}function x(T){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(T),y}function y(T){return T===33?(t.consume(T),S):T===47?(t.consume(T),c=!0,R):T===63?(t.consume(T),u=3,o.interrupt?i:C):Tn(T)?(t.consume(T),f=String.fromCharCode(T),M):l(T)}function S(T){return T===45?(t.consume(T),u=2,b):T===91?(t.consume(T),u=5,h=0,E):Tn(T)?(t.consume(T),u=4,o.interrupt?i:C):l(T)}function b(T){return T===45?(t.consume(T),o.interrupt?i:C):l(T)}function E(T){const re="CDATA[";return T===re.charCodeAt(h++)?(t.consume(T),h===re.length?o.interrupt?i:te:E):l(T)}function R(T){return Tn(T)?(t.consume(T),f=String.fromCharCode(T),M):l(T)}function M(T){if(T===null||T===47||T===62||Ve(T)){const re=T===47,me=f.toLowerCase();return!re&&!c&&Yp.includes(me)?(u=1,o.interrupt?i(T):te(T)):YS.includes(f.toLowerCase())?(u=6,re?(t.consume(T),w):o.interrupt?i(T):te(T)):(u=7,o.interrupt&&!o.parser.lazy[o.now().line]?l(T):c?B(T):L(T))}return T===45||vn(T)?(t.consume(T),f+=String.fromCharCode(T),M):l(T)}function w(T){return T===62?(t.consume(T),o.interrupt?i:te):l(T)}function B(T){return Ce(T)?(t.consume(T),B):I(T)}function L(T){return T===47?(t.consume(T),I):T===58||T===95||Tn(T)?(t.consume(T),Z):Ce(T)?(t.consume(T),L):I(T)}function Z(T){return T===45||T===46||T===58||T===95||vn(T)?(t.consume(T),Z):ee(T)}function ee(T){return T===61?(t.consume(T),F):Ce(T)?(t.consume(T),ee):L(T)}function F(T){return T===null||T===60||T===61||T===62||T===96?l(T):T===34||T===39?(t.consume(T),m=T,W):Ce(T)?(t.consume(T),F):fe(T)}function W(T){return T===m?(t.consume(T),m=null,ue):T===null||de(T)?l(T):(t.consume(T),W)}function fe(T){return T===null||T===34||T===39||T===47||T===60||T===61||T===62||T===96||Ve(T)?ee(T):(t.consume(T),fe)}function ue(T){return T===47||T===62||Ce(T)?L(T):l(T)}function I(T){return T===62?(t.consume(T),ne):l(T)}function ne(T){return T===null||de(T)?te(T):Ce(T)?(t.consume(T),ne):l(T)}function te(T){return T===45&&u===2?(t.consume(T),H):T===60&&u===1?(t.consume(T),X):T===62&&u===4?(t.consume(T),j):T===63&&u===3?(t.consume(T),C):T===93&&u===5?(t.consume(T),be):de(T)&&(u===6||u===7)?(t.exit("htmlFlowData"),t.check(XS,G,Se)(T)):T===null||de(T)?(t.exit("htmlFlowData"),Se(T)):(t.consume(T),te)}function Se(T){return t.check(QS,ie,G)(T)}function ie(T){return t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),K}function K(T){return T===null||de(T)?Se(T):(t.enter("htmlFlowData"),te(T))}function H(T){return T===45?(t.consume(T),C):te(T)}function X(T){return T===47?(t.consume(T),f="",oe):te(T)}function oe(T){if(T===62){const re=f.toLowerCase();return Yp.includes(re)?(t.consume(T),j):te(T)}return Tn(T)&&f.length<8?(t.consume(T),f+=String.fromCharCode(T),oe):te(T)}function be(T){return T===93?(t.consume(T),C):te(T)}function C(T){return T===62?(t.consume(T),j):T===45&&u===2?(t.consume(T),C):te(T)}function j(T){return T===null||de(T)?(t.exit("htmlFlowData"),G(T)):(t.consume(T),j)}function G(T){return t.exit("htmlFlow"),i(T)}}function KS(t,i,l){const o=this;return u;function u(f){return de(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c):l(f)}function c(f){return o.parser.lazy[o.now().line]?l(f):i(f)}}function $S(t,i,l){return o;function o(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),t.attempt(Wi,i,l)}}const e2={name:"htmlText",tokenize:n2};function n2(t,i,l){const o=this;let u,c,f;return h;function h(C){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(C),m}function m(C){return C===33?(t.consume(C),p):C===47?(t.consume(C),ee):C===63?(t.consume(C),L):Tn(C)?(t.consume(C),fe):l(C)}function p(C){return C===45?(t.consume(C),x):C===91?(t.consume(C),c=0,E):Tn(C)?(t.consume(C),B):l(C)}function x(C){return C===45?(t.consume(C),b):l(C)}function y(C){return C===null?l(C):C===45?(t.consume(C),S):de(C)?(f=y,X(C)):(t.consume(C),y)}function S(C){return C===45?(t.consume(C),b):y(C)}function b(C){return C===62?H(C):C===45?S(C):y(C)}function E(C){const j="CDATA[";return C===j.charCodeAt(c++)?(t.consume(C),c===j.length?R:E):l(C)}function R(C){return C===null?l(C):C===93?(t.consume(C),M):de(C)?(f=R,X(C)):(t.consume(C),R)}function M(C){return C===93?(t.consume(C),w):R(C)}function w(C){return C===62?H(C):C===93?(t.consume(C),w):R(C)}function B(C){return C===null||C===62?H(C):de(C)?(f=B,X(C)):(t.consume(C),B)}function L(C){return C===null?l(C):C===63?(t.consume(C),Z):de(C)?(f=L,X(C)):(t.consume(C),L)}function Z(C){return C===62?H(C):L(C)}function ee(C){return Tn(C)?(t.consume(C),F):l(C)}function F(C){return C===45||vn(C)?(t.consume(C),F):W(C)}function W(C){return de(C)?(f=W,X(C)):Ce(C)?(t.consume(C),W):H(C)}function fe(C){return C===45||vn(C)?(t.consume(C),fe):C===47||C===62||Ve(C)?ue(C):l(C)}function ue(C){return C===47?(t.consume(C),H):C===58||C===95||Tn(C)?(t.consume(C),I):de(C)?(f=ue,X(C)):Ce(C)?(t.consume(C),ue):H(C)}function I(C){return C===45||C===46||C===58||C===95||vn(C)?(t.consume(C),I):ne(C)}function ne(C){return C===61?(t.consume(C),te):de(C)?(f=ne,X(C)):Ce(C)?(t.consume(C),ne):ue(C)}function te(C){return C===null||C===60||C===61||C===62||C===96?l(C):C===34||C===39?(t.consume(C),u=C,Se):de(C)?(f=te,X(C)):Ce(C)?(t.consume(C),te):(t.consume(C),ie)}function Se(C){return C===u?(t.consume(C),u=void 0,K):C===null?l(C):de(C)?(f=Se,X(C)):(t.consume(C),Se)}function ie(C){return C===null||C===34||C===39||C===60||C===61||C===96?l(C):C===47||C===62||Ve(C)?ue(C):(t.consume(C),ie)}function K(C){return C===47||C===62||Ve(C)?ue(C):l(C)}function H(C){return C===62?(t.consume(C),t.exit("htmlTextData"),t.exit("htmlText"),i):l(C)}function X(C){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(C),t.exit("lineEnding"),oe}function oe(C){return Ce(C)?Me(t,be,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):be(C)}function be(C){return t.enter("htmlTextData"),f(C)}}const of={name:"labelEnd",resolveAll:i2,resolveTo:a2,tokenize:o2},t2={tokenize:u2},r2={tokenize:s2},l2={tokenize:c2};function i2(t){let i=-1;const l=[];for(;++i<t.length;){const o=t[i][1];if(l.push(t[i]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const u=o.type==="labelImage"?4:2;o.type="data",i+=u}}return t.length!==l.length&&Gn(t,0,t.length,l),t}function a2(t,i){let l=t.length,o=0,u,c,f,h;for(;l--;)if(u=t[l][1],c){if(u.type==="link"||u.type==="labelLink"&&u._inactive)break;t[l][0]==="enter"&&u.type==="labelLink"&&(u._inactive=!0)}else if(f){if(t[l][0]==="enter"&&(u.type==="labelImage"||u.type==="labelLink")&&!u._balanced&&(c=l,u.type!=="labelLink")){o=2;break}}else u.type==="labelEnd"&&(f=l);const m={type:t[c][1].type==="labelLink"?"link":"image",start:{...t[c][1].start},end:{...t[t.length-1][1].end}},p={type:"label",start:{...t[c][1].start},end:{...t[f][1].end}},x={type:"labelText",start:{...t[c+o+2][1].end},end:{...t[f-2][1].start}};return h=[["enter",m,i],["enter",p,i]],h=tt(h,t.slice(c+1,c+o+3)),h=tt(h,[["enter",x,i]]),h=tt(h,Bo(i.parser.constructs.insideSpan.null,t.slice(c+o+4,f-3),i)),h=tt(h,[["exit",x,i],t[f-2],t[f-1],["exit",p,i]]),h=tt(h,t.slice(f+1)),h=tt(h,[["exit",m,i]]),Gn(t,c,t.length,h),t}function o2(t,i,l){const o=this;let u=o.events.length,c,f;for(;u--;)if((o.events[u][1].type==="labelImage"||o.events[u][1].type==="labelLink")&&!o.events[u][1]._balanced){c=o.events[u][1];break}return h;function h(S){return c?c._inactive?y(S):(f=o.parser.defined.includes(ot(o.sliceSerialize({start:c.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(S),t.exit("labelMarker"),t.exit("labelEnd"),m):l(S)}function m(S){return S===40?t.attempt(t2,x,f?x:y)(S):S===91?t.attempt(r2,x,f?p:y)(S):f?x(S):y(S)}function p(S){return t.attempt(l2,x,y)(S)}function x(S){return i(S)}function y(S){return c._balanced=!0,l(S)}}function u2(t,i,l){return o;function o(y){return t.enter("resource"),t.enter("resourceMarker"),t.consume(y),t.exit("resourceMarker"),u}function u(y){return Ve(y)?Fi(t,c)(y):c(y)}function c(y){return y===41?x(y):cy(t,f,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function f(y){return Ve(y)?Fi(t,m)(y):x(y)}function h(y){return l(y)}function m(y){return y===34||y===39||y===40?dy(t,p,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):x(y)}function p(y){return Ve(y)?Fi(t,x)(y):x(y)}function x(y){return y===41?(t.enter("resourceMarker"),t.consume(y),t.exit("resourceMarker"),t.exit("resource"),i):l(y)}}function s2(t,i,l){const o=this;return u;function u(h){return fy.call(o,t,c,f,"reference","referenceMarker","referenceString")(h)}function c(h){return o.parser.defined.includes(ot(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?i(h):l(h)}function f(h){return l(h)}}function c2(t,i,l){return o;function o(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),u}function u(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),i):l(c)}}const f2={name:"labelStartImage",resolveAll:of.resolveAll,tokenize:d2};function d2(t,i,l){const o=this;return u;function u(h){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(h),t.exit("labelImageMarker"),c}function c(h){return h===91?(t.enter("labelMarker"),t.consume(h),t.exit("labelMarker"),t.exit("labelImage"),f):l(h)}function f(h){return h===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(h):i(h)}}const h2={name:"labelStartLink",resolveAll:of.resolveAll,tokenize:m2};function m2(t,i,l){const o=this;return u;function u(f){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelLink"),c}function c(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(f):i(f)}}const mc={name:"lineEnding",tokenize:p2};function p2(t,i){return l;function l(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Me(t,i,"linePrefix")}}const jo={name:"thematicBreak",tokenize:g2};function g2(t,i,l){let o=0,u;return c;function c(p){return t.enter("thematicBreak"),f(p)}function f(p){return u=p,h(p)}function h(p){return p===u?(t.enter("thematicBreakSequence"),m(p)):o>=3&&(p===null||de(p))?(t.exit("thematicBreak"),i(p)):l(p)}function m(p){return p===u?(t.consume(p),o++,m):(t.exit("thematicBreakSequence"),Ce(p)?Me(t,h,"whitespace")(p):h(p))}}const zn={continuation:{tokenize:b2},exit:k2,name:"list",tokenize:x2},y2={partial:!0,tokenize:T2},v2={partial:!0,tokenize:S2};function x2(t,i,l){const o=this,u=o.events[o.events.length-1];let c=u&&u[1].type==="linePrefix"?u[2].sliceSerialize(u[1],!0).length:0,f=0;return h;function h(b){const E=o.containerState.type||(b===42||b===43||b===45?"listUnordered":"listOrdered");if(E==="listUnordered"?!o.containerState.marker||b===o.containerState.marker:Bc(b)){if(o.containerState.type||(o.containerState.type=E,t.enter(E,{_container:!0})),E==="listUnordered")return t.enter("listItemPrefix"),b===42||b===45?t.check(jo,l,p)(b):p(b);if(!o.interrupt||b===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),m(b)}return l(b)}function m(b){return Bc(b)&&++f<10?(t.consume(b),m):(!o.interrupt||f<2)&&(o.containerState.marker?b===o.containerState.marker:b===41||b===46)?(t.exit("listItemValue"),p(b)):l(b)}function p(b){return t.enter("listItemMarker"),t.consume(b),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||b,t.check(Wi,o.interrupt?l:x,t.attempt(y2,S,y))}function x(b){return o.containerState.initialBlankLine=!0,c++,S(b)}function y(b){return Ce(b)?(t.enter("listItemPrefixWhitespace"),t.consume(b),t.exit("listItemPrefixWhitespace"),S):l(b)}function S(b){return o.containerState.size=c+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,i(b)}}function b2(t,i,l){const o=this;return o.containerState._closeFlow=void 0,t.check(Wi,u,c);function u(h){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Me(t,i,"listItemIndent",o.containerState.size+1)(h)}function c(h){return o.containerState.furtherBlankLines||!Ce(h)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,f(h)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(v2,i,f)(h))}function f(h){return o.containerState._closeFlow=!0,o.interrupt=void 0,Me(t,t.attempt(zn,i,l),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function S2(t,i,l){const o=this;return Me(t,u,"listItemIndent",o.containerState.size+1);function u(c){const f=o.events[o.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===o.containerState.size?i(c):l(c)}}function k2(t){t.exit(this.containerState.type)}function T2(t,i,l){const o=this;return Me(t,u,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function u(c){const f=o.events[o.events.length-1];return!Ce(c)&&f&&f[1].type==="listItemPrefixWhitespace"?i(c):l(c)}}const Jp={name:"setextUnderline",resolveTo:E2,tokenize:C2};function E2(t,i){let l=t.length,o,u,c;for(;l--;)if(t[l][0]==="enter"){if(t[l][1].type==="content"){o=l;break}t[l][1].type==="paragraph"&&(u=l)}else t[l][1].type==="content"&&t.splice(l,1),!c&&t[l][1].type==="definition"&&(c=l);const f={type:"setextHeading",start:{...t[o][1].start},end:{...t[t.length-1][1].end}};return t[u][1].type="setextHeadingText",c?(t.splice(u,0,["enter",f,i]),t.splice(c+1,0,["exit",t[o][1],i]),t[o][1].end={...t[c][1].end}):t[o][1]=f,t.push(["exit",f,i]),t}function C2(t,i,l){const o=this;let u;return c;function c(p){let x=o.events.length,y;for(;x--;)if(o.events[x][1].type!=="lineEnding"&&o.events[x][1].type!=="linePrefix"&&o.events[x][1].type!=="content"){y=o.events[x][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||y)?(t.enter("setextHeadingLine"),u=p,f(p)):l(p)}function f(p){return t.enter("setextHeadingLineSequence"),h(p)}function h(p){return p===u?(t.consume(p),h):(t.exit("setextHeadingLineSequence"),Ce(p)?Me(t,m,"lineSuffix")(p):m(p))}function m(p){return p===null||de(p)?(t.exit("setextHeadingLine"),i(p)):l(p)}}const A2={tokenize:w2};function w2(t){const i=this,l=t.attempt(Wi,o,t.attempt(this.parser.constructs.flowInitial,u,Me(t,t.attempt(this.parser.constructs.flow,u,t.attempt(zS,u)),"linePrefix")));return l;function o(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),i.currentConstruct=void 0,l}function u(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),i.currentConstruct=void 0,l}}const j2={resolveAll:my()},D2=hy("string"),M2=hy("text");function hy(t){return{resolveAll:my(t==="text"?R2:void 0),tokenize:i};function i(l){const o=this,u=this.parser.constructs[t],c=l.attempt(u,f,h);return f;function f(x){return p(x)?c(x):h(x)}function h(x){if(x===null){l.consume(x);return}return l.enter("data"),l.consume(x),m}function m(x){return p(x)?(l.exit("data"),c(x)):(l.consume(x),m)}function p(x){if(x===null)return!0;const y=u[x];let S=-1;if(y)for(;++S<y.length;){const b=y[S];if(!b.previous||b.previous.call(o,o.previous))return!0}return!1}}}function my(t){return i;function i(l,o){let u=-1,c;for(;++u<=l.length;)c===void 0?l[u]&&l[u][1].type==="data"&&(c=u,u++):(!l[u]||l[u][1].type!=="data")&&(u!==c+2&&(l[c][1].end=l[u-1][1].end,l.splice(c+2,u-c-2),u=c+2),c=void 0);return t?t(l,o):l}}function R2(t,i){let l=0;for(;++l<=t.length;)if((l===t.length||t[l][1].type==="lineEnding")&&t[l-1][1].type==="data"){const o=t[l-1][1],u=i.sliceStream(o);let c=u.length,f=-1,h=0,m;for(;c--;){const p=u[c];if(typeof p=="string"){for(f=p.length;p.charCodeAt(f-1)===32;)h++,f--;if(f)break;f=-1}else if(p===-2)m=!0,h++;else if(p!==-1){c++;break}}if(i._contentTypeTextTrailing&&l===t.length&&(h=0),h){const p={type:l===t.length||m||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?f:o.start._bufferIndex+f,_index:o.start._index+c,line:o.end.line,column:o.end.column-h,offset:o.end.offset-h},end:{...o.end}};o.end={...p.start},o.start.offset===o.end.offset?Object.assign(o,p):(t.splice(l,0,["enter",p,i],["exit",p,i]),l+=2)}l++}return t}const z2={42:zn,43:zn,45:zn,48:zn,49:zn,50:zn,51:zn,52:zn,53:zn,54:zn,55:zn,56:zn,57:zn,62:ay},_2={91:BS},O2={[-2]:hc,[-1]:hc,32:hc},N2={35:VS,42:jo,45:[Jp,jo],60:JS,61:Jp,95:jo,96:Pp,126:Pp},L2={38:uy,92:oy},B2={[-5]:mc,[-4]:mc,[-3]:mc,33:f2,38:uy,42:Uc,60:[hS,e2],91:h2,92:[FS,oy],93:of,95:Uc,96:AS},U2={null:[Uc,j2]},H2={null:[42,95]},I2={null:[]},F2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:H2,contentInitial:_2,disable:I2,document:z2,flow:N2,flowInitial:O2,insideSpan:U2,string:L2,text:B2},Symbol.toStringTag,{value:"Module"}));function q2(t,i,l){let o={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const u={},c=[];let f=[],h=[];const m={attempt:W(ee),check:W(F),consume:B,enter:L,exit:Z,interrupt:W(F,{interrupt:!0})},p={code:null,containerState:{},defineSkip:R,events:[],now:E,parser:t,previous:null,sliceSerialize:S,sliceStream:b,write:y};let x=i.tokenize.call(p,m);return i.resolveAll&&c.push(i),p;function y(ne){return f=tt(f,ne),M(),f[f.length-1]!==null?[]:(fe(i,0),p.events=Bo(c,p.events,p),p.events)}function S(ne,te){return G2(b(ne),te)}function b(ne){return V2(f,ne)}function E(){const{_bufferIndex:ne,_index:te,line:Se,column:ie,offset:K}=o;return{_bufferIndex:ne,_index:te,line:Se,column:ie,offset:K}}function R(ne){u[ne.line]=ne.column,I()}function M(){let ne;for(;o._index<f.length;){const te=f[o._index];if(typeof te=="string")for(ne=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ne&&o._bufferIndex<te.length;)w(te.charCodeAt(o._bufferIndex));else w(te)}}function w(ne){x=x(ne)}function B(ne){de(ne)?(o.line++,o.column=1,o.offset+=ne===-3?2:1,I()):ne!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===f[o._index].length&&(o._bufferIndex=-1,o._index++)),p.previous=ne}function L(ne,te){const Se=te||{};return Se.type=ne,Se.start=E(),p.events.push(["enter",Se,p]),h.push(Se),Se}function Z(ne){const te=h.pop();return te.end=E(),p.events.push(["exit",te,p]),te}function ee(ne,te){fe(ne,te.from)}function F(ne,te){te.restore()}function W(ne,te){return Se;function Se(ie,K,H){let X,oe,be,C;return Array.isArray(ie)?G(ie):"tokenize"in ie?G([ie]):j(ie);function j(se){return Ae;function Ae(Xe){const Be=Xe!==null&&se[Xe],Pn=Xe!==null&&se.null,bt=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(Pn)?Pn:Pn?[Pn]:[]];return G(bt)(Xe)}}function G(se){return X=se,oe=0,se.length===0?H:T(se[oe])}function T(se){return Ae;function Ae(Xe){return C=ue(),be=se,se.partial||(p.currentConstruct=se),se.name&&p.parser.constructs.disable.null.includes(se.name)?me():se.tokenize.call(te?Object.assign(Object.create(p),te):p,m,re,me)(Xe)}}function re(se){return ne(be,C),K}function me(se){return C.restore(),++oe<X.length?T(X[oe]):H}}}function fe(ne,te){ne.resolveAll&&!c.includes(ne)&&c.push(ne),ne.resolve&&Gn(p.events,te,p.events.length-te,ne.resolve(p.events.slice(te),p)),ne.resolveTo&&(p.events=ne.resolveTo(p.events,p))}function ue(){const ne=E(),te=p.previous,Se=p.currentConstruct,ie=p.events.length,K=Array.from(h);return{from:ie,restore:H};function H(){o=ne,p.previous=te,p.currentConstruct=Se,p.events.length=ie,h=K,I()}}function I(){o.line in u&&o.column<2&&(o.column=u[o.line],o.offset+=u[o.line]-1)}}function V2(t,i){const l=i.start._index,o=i.start._bufferIndex,u=i.end._index,c=i.end._bufferIndex;let f;if(l===u)f=[t[l].slice(o,c)];else{if(f=t.slice(l,u),o>-1){const h=f[0];typeof h=="string"?f[0]=h.slice(o):f.shift()}c>0&&f.push(t[u].slice(0,c))}return f}function G2(t,i){let l=-1;const o=[];let u;for(;++l<t.length;){const c=t[l];let f;if(typeof c=="string")f=c;else switch(c){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=i?" ":"	";break}case-1:{if(!i&&u)continue;f=" ";break}default:f=String.fromCharCode(c)}u=c===-2,o.push(f)}return o.join("")}function P2(t){const o={constructs:ly([F2,...(t||{}).extensions||[]]),content:u(aS),defined:[],document:u(uS),flow:u(A2),lazy:{},string:u(D2),text:u(M2)};return o;function u(c){return f;function f(h){return q2(o,c,h)}}}function Y2(t){for(;!sy(t););return t}const Xp=/[\0\t\n\r]/g;function J2(){let t=1,i="",l=!0,o;return u;function u(c,f,h){const m=[];let p,x,y,S,b;for(c=i+(typeof c=="string"?c.toString():new TextDecoder(f||void 0).decode(c)),y=0,i="",l&&(c.charCodeAt(0)===65279&&y++,l=void 0);y<c.length;){if(Xp.lastIndex=y,p=Xp.exec(c),S=p&&p.index!==void 0?p.index:c.length,b=c.charCodeAt(S),!p){i=c.slice(y);break}if(b===10&&y===S&&o)m.push(-3),o=void 0;else switch(o&&(m.push(-5),o=void 0),y<S&&(m.push(c.slice(y,S)),t+=S-y),b){case 0:{m.push(65533),t++;break}case 9:{for(x=Math.ceil(t/4)*4,m.push(-2);t++<x;)m.push(-1);break}case 10:{m.push(-4),t=1;break}default:o=!0,t=1}y=S+1}return h&&(o&&m.push(-5),i&&m.push(i),m.push(null)),m}}const X2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Q2(t){return t.replace(X2,Z2)}function Z2(t,i,l){if(i)return i;if(l.charCodeAt(0)===35){const u=l.charCodeAt(1),c=u===120||u===88;return iy(l.slice(c?2:1),c?16:10)}return af(l)||t}const py={}.hasOwnProperty;function W2(t,i,l){return typeof i!="string"&&(l=i,i=void 0),K2(l)(Y2(P2(l).document().write(J2()(t,i,!0))))}function K2(t){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Fr),autolinkProtocol:ue,autolinkEmail:ue,atxHeading:c(Hr),blockQuote:c(Pn),characterEscape:ue,characterReference:ue,codeFenced:c(bt),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:c(bt,f),codeText:c(Ul,f),codeTextData:ue,data:ue,codeFlowValue:ue,definition:c($i),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:c(St),hardBreakEscape:c(Ir),hardBreakTrailing:c(Ir),htmlFlow:c(ea,f),htmlFlowData:ue,htmlText:c(ea,f),htmlTextData:ue,image:c(na),label:f,link:c(Fr),listItem:c(Hl),listItemValue:S,listOrdered:c(qr,y),listUnordered:c(qr),paragraph:c(Fo),reference:T,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:c(Hr),strong:c(qo),thematicBreak:c(Vo)},exit:{atxHeading:m(),atxHeadingSequence:ee,autolink:m(),autolinkEmail:Be,autolinkProtocol:Xe,blockQuote:m(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:me,characterReferenceMarkerNumeric:me,characterReferenceValue:se,characterReference:Ae,codeFenced:m(M),codeFencedFence:R,codeFencedFenceInfo:b,codeFencedFenceMeta:E,codeFlowValue:I,codeIndented:m(w),codeText:m(K),codeTextData:I,data:I,definition:m(),definitionDestinationString:Z,definitionLabelString:B,definitionTitleString:L,emphasis:m(),hardBreakEscape:m(te),hardBreakTrailing:m(te),htmlFlow:m(Se),htmlFlowData:I,htmlText:m(ie),htmlTextData:I,image:m(X),label:be,labelText:oe,lineEnding:ne,link:m(H),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:re,resourceDestinationString:C,resourceTitleString:j,resource:G,setextHeading:m(fe),setextHeadingLineSequence:W,setextHeadingText:F,strong:m(),thematicBreak:m()}};gy(i,(t||{}).mdastExtensions||[]);const l={};return o;function o(P){let $={type:"root",children:[]};const pe={stack:[$],tokenStack:[],config:i,enter:h,exit:p,buffer:f,resume:x,data:l},ke=[];let Oe=-1;for(;++Oe<P.length;)if(P[Oe][1].type==="listOrdered"||P[Oe][1].type==="listUnordered")if(P[Oe][0]==="enter")ke.push(Oe);else{const On=ke.pop();Oe=u(P,On,Oe)}for(Oe=-1;++Oe<P.length;){const On=i[P[Oe][0]];py.call(On,P[Oe][1].type)&&On[P[Oe][1].type].call(Object.assign({sliceSerialize:P[Oe][2].sliceSerialize},pe),P[Oe][1])}if(pe.tokenStack.length>0){const On=pe.tokenStack[pe.tokenStack.length-1];(On[1]||Qp).call(pe,void 0,On[0])}for($.position={start:gr(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:gr(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<i.transforms.length;)$=i.transforms[Oe]($)||$;return $}function u(P,$,pe){let ke=$-1,Oe=-1,On=!1,kt,Sn,on,En;for(;++ke<=pe;){const Fe=P[ke];switch(Fe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Fe[0]==="enter"?Oe++:Oe--,En=void 0;break}case"lineEndingBlank":{Fe[0]==="enter"&&(kt&&!En&&!Oe&&!on&&(on=ke),En=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:En=void 0}if(!Oe&&Fe[0]==="enter"&&Fe[1].type==="listItemPrefix"||Oe===-1&&Fe[0]==="exit"&&(Fe[1].type==="listUnordered"||Fe[1].type==="listOrdered")){if(kt){let Pt=ke;for(Sn=void 0;Pt--;){const rt=P[Pt];if(rt[1].type==="lineEnding"||rt[1].type==="lineEndingBlank"){if(rt[0]==="exit")continue;Sn&&(P[Sn][1].type="lineEndingBlank",On=!0),rt[1].type="lineEnding",Sn=Pt}else if(!(rt[1].type==="linePrefix"||rt[1].type==="blockQuotePrefix"||rt[1].type==="blockQuotePrefixWhitespace"||rt[1].type==="blockQuoteMarker"||rt[1].type==="listItemIndent"))break}on&&(!Sn||on<Sn)&&(kt._spread=!0),kt.end=Object.assign({},Sn?P[Sn][1].start:Fe[1].end),P.splice(Sn||ke,0,["exit",kt,Fe[2]]),ke++,pe++}if(Fe[1].type==="listItemPrefix"){const Pt={type:"listItem",_spread:!1,start:Object.assign({},Fe[1].start),end:void 0};kt=Pt,P.splice(ke,0,["enter",Pt,Fe[2]]),ke++,pe++,on=void 0,En=!0}}}return P[$][1]._spread=On,pe}function c(P,$){return pe;function pe(ke){h.call(this,P(ke),ke),$&&$.call(this,ke)}}function f(){this.stack.push({type:"fragment",children:[]})}function h(P,$,pe){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([$,pe||void 0]),P.position={start:gr($.start),end:void 0}}function m(P){return $;function $(pe){P&&P.call(this,pe),p.call(this,pe)}}function p(P,$){const pe=this.stack.pop(),ke=this.tokenStack.pop();if(ke)ke[0].type!==P.type&&($?$.call(this,P,ke[0]):(ke[1]||Qp).call(this,P,ke[0]));else throw new Error("Cannot close `"+P.type+"` ("+Ii({start:P.start,end:P.end})+"): it’s not open");pe.position.end=gr(P.end)}function x(){return lf(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function S(P){if(this.data.expectingFirstListItemValue){const $=this.stack[this.stack.length-2];$.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function b(){const P=this.resume(),$=this.stack[this.stack.length-1];$.lang=P}function E(){const P=this.resume(),$=this.stack[this.stack.length-1];$.meta=P}function R(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function M(){const P=this.resume(),$=this.stack[this.stack.length-1];$.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const P=this.resume(),$=this.stack[this.stack.length-1];$.value=P.replace(/(\r?\n|\r)$/g,"")}function B(P){const $=this.resume(),pe=this.stack[this.stack.length-1];pe.label=$,pe.identifier=ot(this.sliceSerialize(P)).toLowerCase()}function L(){const P=this.resume(),$=this.stack[this.stack.length-1];$.title=P}function Z(){const P=this.resume(),$=this.stack[this.stack.length-1];$.url=P}function ee(P){const $=this.stack[this.stack.length-1];if(!$.depth){const pe=this.sliceSerialize(P).length;$.depth=pe}}function F(){this.data.setextHeadingSlurpLineEnding=!0}function W(P){const $=this.stack[this.stack.length-1];$.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function fe(){this.data.setextHeadingSlurpLineEnding=void 0}function ue(P){const pe=this.stack[this.stack.length-1].children;let ke=pe[pe.length-1];(!ke||ke.type!=="text")&&(ke=bn(),ke.position={start:gr(P.start),end:void 0},pe.push(ke)),this.stack.push(ke)}function I(P){const $=this.stack.pop();$.value+=this.sliceSerialize(P),$.position.end=gr(P.end)}function ne(P){const $=this.stack[this.stack.length-1];if(this.data.atHardBreak){const pe=$.children[$.children.length-1];pe.position.end=gr(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes($.type)&&(ue.call(this,P),I.call(this,P))}function te(){this.data.atHardBreak=!0}function Se(){const P=this.resume(),$=this.stack[this.stack.length-1];$.value=P}function ie(){const P=this.resume(),$=this.stack[this.stack.length-1];$.value=P}function K(){const P=this.resume(),$=this.stack[this.stack.length-1];$.value=P}function H(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=$,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function X(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=$,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function oe(P){const $=this.sliceSerialize(P),pe=this.stack[this.stack.length-2];pe.label=Q2($),pe.identifier=ot($).toLowerCase()}function be(){const P=this.stack[this.stack.length-1],$=this.resume(),pe=this.stack[this.stack.length-1];if(this.data.inReference=!0,pe.type==="link"){const ke=P.children;pe.children=ke}else pe.alt=$}function C(){const P=this.resume(),$=this.stack[this.stack.length-1];$.url=P}function j(){const P=this.resume(),$=this.stack[this.stack.length-1];$.title=P}function G(){this.data.inReference=void 0}function T(){this.data.referenceType="collapsed"}function re(P){const $=this.resume(),pe=this.stack[this.stack.length-1];pe.label=$,pe.identifier=ot(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function me(P){this.data.characterReferenceType=P.type}function se(P){const $=this.sliceSerialize(P),pe=this.data.characterReferenceType;let ke;pe?(ke=iy($,pe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ke=af($);const Oe=this.stack[this.stack.length-1];Oe.value+=ke}function Ae(P){const $=this.stack.pop();$.position.end=gr(P.end)}function Xe(P){I.call(this,P);const $=this.stack[this.stack.length-1];$.url=this.sliceSerialize(P)}function Be(P){I.call(this,P);const $=this.stack[this.stack.length-1];$.url="mailto:"+this.sliceSerialize(P)}function Pn(){return{type:"blockquote",children:[]}}function bt(){return{type:"code",lang:null,meta:null,value:""}}function Ul(){return{type:"inlineCode",value:""}}function $i(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function St(){return{type:"emphasis",children:[]}}function Hr(){return{type:"heading",depth:0,children:[]}}function Ir(){return{type:"break"}}function ea(){return{type:"html",value:""}}function na(){return{type:"image",title:null,url:"",alt:null}}function Fr(){return{type:"link",title:null,url:"",children:[]}}function qr(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[]}}function Hl(P){return{type:"listItem",spread:P._spread,checked:null,children:[]}}function Fo(){return{type:"paragraph",children:[]}}function qo(){return{type:"strong",children:[]}}function bn(){return{type:"text",value:""}}function Vo(){return{type:"thematicBreak"}}}function gr(t){return{line:t.line,column:t.column,offset:t.offset}}function gy(t,i){let l=-1;for(;++l<i.length;){const o=i[l];Array.isArray(o)?gy(t,o):$2(t,o)}}function $2(t,i){let l;for(l in i)if(py.call(i,l))switch(l){case"canContainEols":{const o=i[l];o&&t[l].push(...o);break}case"transforms":{const o=i[l];o&&t[l].push(...o);break}case"enter":case"exit":{const o=i[l];o&&Object.assign(t[l],o);break}}}function Qp(t,i){throw t?new Error("Cannot close `"+t.type+"` ("+Ii({start:t.start,end:t.end})+"): a different token (`"+i.type+"`, "+Ii({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Ii({start:i.start,end:i.end})+") is still open")}function ek(t){const i=this;i.parser=l;function l(o){return W2(o,{...i.data("settings"),...t,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function nk(t,i){const l={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(i),!0)};return t.patch(i,l),t.applyData(i,l)}function tk(t,i){const l={type:"element",tagName:"br",properties:{},children:[]};return t.patch(i,l),[t.applyData(i,l),{type:"text",value:`
`}]}function rk(t,i){const l=i.value?i.value+`
`:"",o={},u=i.lang?i.lang.split(/\s+/):[];u.length>0&&(o.className=["language-"+u[0]]);let c={type:"element",tagName:"code",properties:o,children:[{type:"text",value:l}]};return i.meta&&(c.data={meta:i.meta}),t.patch(i,c),c=t.applyData(i,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(i,c),c}function lk(t,i){const l={type:"element",tagName:"del",properties:{},children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}function ik(t,i){const l={type:"element",tagName:"em",properties:{},children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}function ak(t,i){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(i.identifier).toUpperCase(),u=Bl(o.toLowerCase()),c=t.footnoteOrder.indexOf(o);let f,h=t.footnoteCounts.get(o);h===void 0?(h=0,t.footnoteOrder.push(o),f=t.footnoteOrder.length):f=c+1,h+=1,t.footnoteCounts.set(o,h);const m={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+u,id:l+"fnref-"+u+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};t.patch(i,m);const p={type:"element",tagName:"sup",properties:{},children:[m]};return t.patch(i,p),t.applyData(i,p)}function ok(t,i){const l={type:"element",tagName:"h"+i.depth,properties:{},children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}function uk(t,i){if(t.options.allowDangerousHtml){const l={type:"raw",value:i.value};return t.patch(i,l),t.applyData(i,l)}}function yy(t,i){const l=i.referenceType;let o="]";if(l==="collapsed"?o+="[]":l==="full"&&(o+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+o}];const u=t.all(i),c=u[0];c&&c.type==="text"?c.value="["+c.value:u.unshift({type:"text",value:"["});const f=u[u.length-1];return f&&f.type==="text"?f.value+=o:u.push({type:"text",value:o}),u}function sk(t,i){const l=String(i.identifier).toUpperCase(),o=t.definitionById.get(l);if(!o)return yy(t,i);const u={src:Bl(o.url||""),alt:i.alt};o.title!==null&&o.title!==void 0&&(u.title=o.title);const c={type:"element",tagName:"img",properties:u,children:[]};return t.patch(i,c),t.applyData(i,c)}function ck(t,i){const l={src:Bl(i.url)};i.alt!==null&&i.alt!==void 0&&(l.alt=i.alt),i.title!==null&&i.title!==void 0&&(l.title=i.title);const o={type:"element",tagName:"img",properties:l,children:[]};return t.patch(i,o),t.applyData(i,o)}function fk(t,i){const l={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};t.patch(i,l);const o={type:"element",tagName:"code",properties:{},children:[l]};return t.patch(i,o),t.applyData(i,o)}function dk(t,i){const l=String(i.identifier).toUpperCase(),o=t.definitionById.get(l);if(!o)return yy(t,i);const u={href:Bl(o.url||"")};o.title!==null&&o.title!==void 0&&(u.title=o.title);const c={type:"element",tagName:"a",properties:u,children:t.all(i)};return t.patch(i,c),t.applyData(i,c)}function hk(t,i){const l={href:Bl(i.url)};i.title!==null&&i.title!==void 0&&(l.title=i.title);const o={type:"element",tagName:"a",properties:l,children:t.all(i)};return t.patch(i,o),t.applyData(i,o)}function mk(t,i,l){const o=t.all(i),u=l?pk(l):vy(i),c={},f=[];if(typeof i.checked=="boolean"){const x=o[0];let y;x&&x.type==="element"&&x.tagName==="p"?y=x:(y={type:"element",tagName:"p",properties:{},children:[]},o.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let h=-1;for(;++h<o.length;){const x=o[h];(u||h!==0||x.type!=="element"||x.tagName!=="p")&&f.push({type:"text",value:`
`}),x.type==="element"&&x.tagName==="p"&&!u?f.push(...x.children):f.push(x)}const m=o[o.length-1];m&&(u||m.type!=="element"||m.tagName!=="p")&&f.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:c,children:f};return t.patch(i,p),t.applyData(i,p)}function pk(t){let i=!1;if(t.type==="list"){i=t.spread||!1;const l=t.children;let o=-1;for(;!i&&++o<l.length;)i=vy(l[o])}return i}function vy(t){const i=t.spread;return i??t.children.length>1}function gk(t,i){const l={},o=t.all(i);let u=-1;for(typeof i.start=="number"&&i.start!==1&&(l.start=i.start);++u<o.length;){const f=o[u];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const c={type:"element",tagName:i.ordered?"ol":"ul",properties:l,children:t.wrap(o,!0)};return t.patch(i,c),t.applyData(i,c)}function yk(t,i){const l={type:"element",tagName:"p",properties:{},children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}function vk(t,i){const l={type:"root",children:t.wrap(t.all(i))};return t.patch(i,l),t.applyData(i,l)}function xk(t,i){const l={type:"element",tagName:"strong",properties:{},children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}function bk(t,i){const l=t.all(i),o=l.shift(),u=[];if(o){const f={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(i.children[0],f),u.push(f)}if(l.length>0){const f={type:"element",tagName:"tbody",properties:{},children:t.wrap(l,!0)},h=ef(i.children[1]),m=Wg(i.children[i.children.length-1]);h&&m&&(f.position={start:h,end:m}),u.push(f)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(u,!0)};return t.patch(i,c),t.applyData(i,c)}function Sk(t,i,l){const o=l?l.children:void 0,c=(o?o.indexOf(i):1)===0?"th":"td",f=l&&l.type==="table"?l.align:void 0,h=f?f.length:i.children.length;let m=-1;const p=[];for(;++m<h;){const y=i.children[m],S={},b=f?f[m]:void 0;b&&(S.align=b);let E={type:"element",tagName:c,properties:S,children:[]};y&&(E.children=t.all(y),t.patch(y,E),E=t.applyData(y,E)),p.push(E)}const x={type:"element",tagName:"tr",properties:{},children:t.wrap(p,!0)};return t.patch(i,x),t.applyData(i,x)}function kk(t,i){const l={type:"element",tagName:"td",properties:{},children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}const Zp=9,Wp=32;function Tk(t){const i=String(t),l=/\r?\n|\r/g;let o=l.exec(i),u=0;const c=[];for(;o;)c.push(Kp(i.slice(u,o.index),u>0,!0),o[0]),u=o.index+o[0].length,o=l.exec(i);return c.push(Kp(i.slice(u),u>0,!1)),c.join("")}function Kp(t,i,l){let o=0,u=t.length;if(i){let c=t.codePointAt(o);for(;c===Zp||c===Wp;)o++,c=t.codePointAt(o)}if(l){let c=t.codePointAt(u-1);for(;c===Zp||c===Wp;)u--,c=t.codePointAt(u-1)}return u>o?t.slice(o,u):""}function Ek(t,i){const l={type:"text",value:Tk(String(i.value))};return t.patch(i,l),t.applyData(i,l)}function Ck(t,i){const l={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(i,l),t.applyData(i,l)}const Ak={blockquote:nk,break:tk,code:rk,delete:lk,emphasis:ik,footnoteReference:ak,heading:ok,html:uk,imageReference:sk,image:ck,inlineCode:fk,linkReference:dk,link:hk,listItem:mk,list:gk,paragraph:yk,root:vk,strong:xk,table:bk,tableCell:kk,tableRow:Sk,text:Ek,thematicBreak:Ck,toml:bo,yaml:bo,definition:bo,footnoteDefinition:bo};function bo(){}const xy=-1,Uo=0,qi=1,Ro=2,uf=3,sf=4,cf=5,ff=6,by=7,Sy=8,$p=typeof self=="object"?self:globalThis,wk=(t,i)=>{const l=(u,c)=>(t.set(c,u),u),o=u=>{if(t.has(u))return t.get(u);const[c,f]=i[u];switch(c){case Uo:case xy:return l(f,u);case qi:{const h=l([],u);for(const m of f)h.push(o(m));return h}case Ro:{const h=l({},u);for(const[m,p]of f)h[o(m)]=o(p);return h}case uf:return l(new Date(f),u);case sf:{const{source:h,flags:m}=f;return l(new RegExp(h,m),u)}case cf:{const h=l(new Map,u);for(const[m,p]of f)h.set(o(m),o(p));return h}case ff:{const h=l(new Set,u);for(const m of f)h.add(o(m));return h}case by:{const{name:h,message:m}=f;return l(new $p[h](m),u)}case Sy:return l(BigInt(f),u);case"BigInt":return l(Object(BigInt(f)),u);case"ArrayBuffer":return l(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:h}=new Uint8Array(f);return l(new DataView(h),f)}}return l(new $p[c](f),u)};return o},eg=t=>wk(new Map,t)(0),jl="",{toString:jk}={},{keys:Dk}=Object,Bi=t=>{const i=typeof t;if(i!=="object"||!t)return[Uo,i];const l=jk.call(t).slice(8,-1);switch(l){case"Array":return[qi,jl];case"Object":return[Ro,jl];case"Date":return[uf,jl];case"RegExp":return[sf,jl];case"Map":return[cf,jl];case"Set":return[ff,jl];case"DataView":return[qi,l]}return l.includes("Array")?[qi,l]:l.includes("Error")?[by,l]:[Ro,l]},So=([t,i])=>t===Uo&&(i==="function"||i==="symbol"),Mk=(t,i,l,o)=>{const u=(f,h)=>{const m=o.push(f)-1;return l.set(h,m),m},c=f=>{if(l.has(f))return l.get(f);let[h,m]=Bi(f);switch(h){case Uo:{let x=f;switch(m){case"bigint":h=Sy,x=f.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+m);x=null;break;case"undefined":return u([xy],f)}return u([h,x],f)}case qi:{if(m){let S=f;return m==="DataView"?S=new Uint8Array(f.buffer):m==="ArrayBuffer"&&(S=new Uint8Array(f)),u([m,[...S]],f)}const x=[],y=u([h,x],f);for(const S of f)x.push(c(S));return y}case Ro:{if(m)switch(m){case"BigInt":return u([m,f.toString()],f);case"Boolean":case"Number":case"String":return u([m,f.valueOf()],f)}if(i&&"toJSON"in f)return c(f.toJSON());const x=[],y=u([h,x],f);for(const S of Dk(f))(t||!So(Bi(f[S])))&&x.push([c(S),c(f[S])]);return y}case uf:return u([h,f.toISOString()],f);case sf:{const{source:x,flags:y}=f;return u([h,{source:x,flags:y}],f)}case cf:{const x=[],y=u([h,x],f);for(const[S,b]of f)(t||!(So(Bi(S))||So(Bi(b))))&&x.push([c(S),c(b)]);return y}case ff:{const x=[],y=u([h,x],f);for(const S of f)(t||!So(Bi(S)))&&x.push(c(S));return y}}const{message:p}=f;return u([h,{name:m,message:p}],f)};return c},ng=(t,{json:i,lossy:l}={})=>{const o=[];return Mk(!(i||l),!!i,new Map,o)(t),o},zo=typeof structuredClone=="function"?(t,i)=>i&&("json"in i||"lossy"in i)?eg(ng(t,i)):structuredClone(t):(t,i)=>eg(ng(t,i));function Rk(t,i){const l=[{type:"text",value:"↩"}];return i>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),l}function zk(t,i){return"Back to reference "+(t+1)+(i>1?"-"+i:"")}function _k(t){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",l=t.options.footnoteBackContent||Rk,o=t.options.footnoteBackLabel||zk,u=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",f=t.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let m=-1;for(;++m<t.footnoteOrder.length;){const p=t.footnoteById.get(t.footnoteOrder[m]);if(!p)continue;const x=t.all(p),y=String(p.identifier).toUpperCase(),S=Bl(y.toLowerCase());let b=0;const E=[],R=t.footnoteCounts.get(y);for(;R!==void 0&&++b<=R;){E.length>0&&E.push({type:"text",value:" "});let B=typeof l=="string"?l:l(m,b);typeof B=="string"&&(B={type:"text",value:B}),E.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+S+(b>1?"-"+b:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(m,b),className:["data-footnote-backref"]},children:Array.isArray(B)?B:[B]})}const M=x[x.length-1];if(M&&M.type==="element"&&M.tagName==="p"){const B=M.children[M.children.length-1];B&&B.type==="text"?B.value+=" ":M.children.push({type:"text",value:" "}),M.children.push(...E)}else x.push(...E);const w={type:"element",tagName:"li",properties:{id:i+"fn-"+S},children:t.wrap(x,!0)};t.patch(p,w),h.push(w)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...zo(f),id:"footnote-label"},children:[{type:"text",value:u}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(h,!0)},{type:"text",value:`
`}]}}const Ho=(function(t){if(t==null)return Bk;if(typeof t=="function")return Io(t);if(typeof t=="object")return Array.isArray(t)?Ok(t):Nk(t);if(typeof t=="string")return Lk(t);throw new Error("Expected function, string, or object as test")});function Ok(t){const i=[];let l=-1;for(;++l<t.length;)i[l]=Ho(t[l]);return Io(o);function o(...u){let c=-1;for(;++c<i.length;)if(i[c].apply(this,u))return!0;return!1}}function Nk(t){const i=t;return Io(l);function l(o){const u=o;let c;for(c in t)if(u[c]!==i[c])return!1;return!0}}function Lk(t){return Io(i);function i(l){return l&&l.type===t}}function Io(t){return i;function i(l,o,u){return!!(Uk(l)&&t.call(this,l,typeof o=="number"?o:void 0,u||void 0))}}function Bk(){return!0}function Uk(t){return t!==null&&typeof t=="object"&&"type"in t}const ky=[],Hk=!0,Hc=!1,Ik="skip";function Ty(t,i,l,o){let u;typeof i=="function"&&typeof l!="function"?(o=l,l=i):u=i;const c=Ho(u),f=o?-1:1;h(t,void 0,[])();function h(m,p,x){const y=m&&typeof m=="object"?m:{};if(typeof y.type=="string"){const b=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(m.type+(b?"<"+b+">":""))+")"})}return S;function S(){let b=ky,E,R,M;if((!i||c(m,p,x[x.length-1]||void 0))&&(b=Fk(l(m,x)),b[0]===Hc))return b;if("children"in m&&m.children){const w=m;if(w.children&&b[0]!==Ik)for(R=(o?w.children.length:-1)+f,M=x.concat(w);R>-1&&R<w.children.length;){const B=w.children[R];if(E=h(B,R,M)(),E[0]===Hc)return E;R=typeof E[1]=="number"?E[1]:R+f}}return b}}}function Fk(t){return Array.isArray(t)?t:typeof t=="number"?[Hk,t]:t==null?ky:[t]}function df(t,i,l,o){let u,c,f;typeof i=="function"&&typeof l!="function"?(c=void 0,f=i,u=l):(c=i,f=l,u=o),Ty(t,c,h,u);function h(m,p){const x=p[p.length-1],y=x?x.children.indexOf(m):void 0;return f(m,y,x)}}const Ic={}.hasOwnProperty,qk={};function Vk(t,i){const l=i||qk,o=new Map,u=new Map,c=new Map,f={...Ak,...l.handlers},h={all:p,applyData:Pk,definitionById:o,footnoteById:u,footnoteCounts:c,footnoteOrder:[],handlers:f,one:m,options:l,patch:Gk,wrap:Jk};return df(t,function(x){if(x.type==="definition"||x.type==="footnoteDefinition"){const y=x.type==="definition"?o:u,S=String(x.identifier).toUpperCase();y.has(S)||y.set(S,x)}}),h;function m(x,y){const S=x.type,b=h.handlers[S];if(Ic.call(h.handlers,S)&&b)return b(h,x,y);if(h.options.passThrough&&h.options.passThrough.includes(S)){if("children"in x){const{children:R,...M}=x,w=zo(M);return w.children=h.all(x),w}return zo(x)}return(h.options.unknownHandler||Yk)(h,x,y)}function p(x){const y=[];if("children"in x){const S=x.children;let b=-1;for(;++b<S.length;){const E=h.one(S[b],x);if(E){if(b&&S[b-1].type==="break"&&(!Array.isArray(E)&&E.type==="text"&&(E.value=tg(E.value)),!Array.isArray(E)&&E.type==="element")){const R=E.children[0];R&&R.type==="text"&&(R.value=tg(R.value))}Array.isArray(E)?y.push(...E):y.push(E)}}}return y}}function Gk(t,i){t.position&&(i.position=zb(t))}function Pk(t,i){let l=i;if(t&&t.data){const o=t.data.hName,u=t.data.hChildren,c=t.data.hProperties;if(typeof o=="string")if(l.type==="element")l.tagName=o;else{const f="children"in l?l.children:[l];l={type:"element",tagName:o,properties:{},children:f}}l.type==="element"&&c&&Object.assign(l.properties,zo(c)),"children"in l&&l.children&&u!==null&&u!==void 0&&(l.children=u)}return l}function Yk(t,i){const l=i.data||{},o="value"in i&&!(Ic.call(l,"hProperties")||Ic.call(l,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:t.all(i)};return t.patch(i,o),t.applyData(i,o)}function Jk(t,i){const l=[];let o=-1;for(i&&l.push({type:"text",value:`
`});++o<t.length;)o&&l.push({type:"text",value:`
`}),l.push(t[o]);return i&&t.length>0&&l.push({type:"text",value:`
`}),l}function tg(t){let i=0,l=t.charCodeAt(i);for(;l===9||l===32;)i++,l=t.charCodeAt(i);return t.slice(i)}function rg(t,i){const l=Vk(t,i),o=l.one(t,void 0),u=_k(l),c=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return u&&c.children.push({type:"text",value:`
`},u),c}function Xk(t,i){return t&&"run"in t?async function(l,o){const u=rg(l,{file:o,...i});await t.run(u,o)}:function(l,o){return rg(l,{file:o,...t||i})}}function lg(t){if(t)throw t}var pc,ig;function Qk(){if(ig)return pc;ig=1;var t=Object.prototype.hasOwnProperty,i=Object.prototype.toString,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=function(p){return typeof Array.isArray=="function"?Array.isArray(p):i.call(p)==="[object Array]"},c=function(p){if(!p||i.call(p)!=="[object Object]")return!1;var x=t.call(p,"constructor"),y=p.constructor&&p.constructor.prototype&&t.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!x&&!y)return!1;var S;for(S in p);return typeof S>"u"||t.call(p,S)},f=function(p,x){l&&x.name==="__proto__"?l(p,x.name,{enumerable:!0,configurable:!0,value:x.newValue,writable:!0}):p[x.name]=x.newValue},h=function(p,x){if(x==="__proto__")if(t.call(p,x)){if(o)return o(p,x).value}else return;return p[x]};return pc=function m(){var p,x,y,S,b,E,R=arguments[0],M=1,w=arguments.length,B=!1;for(typeof R=="boolean"&&(B=R,R=arguments[1]||{},M=2),(R==null||typeof R!="object"&&typeof R!="function")&&(R={});M<w;++M)if(p=arguments[M],p!=null)for(x in p)y=h(R,x),S=h(p,x),R!==S&&(B&&S&&(c(S)||(b=u(S)))?(b?(b=!1,E=y&&u(y)?y:[]):E=y&&c(y)?y:{},f(R,{name:x,newValue:m(B,E,S)})):typeof S<"u"&&f(R,{name:x,newValue:S}));return R},pc}var Zk=Qk();const gc=Gc(Zk);function Fc(t){if(typeof t!="object"||t===null)return!1;const i=Object.getPrototypeOf(t);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Wk(){const t=[],i={run:l,use:o};return i;function l(...u){let c=-1;const f=u.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);h(null,...u);function h(m,...p){const x=t[++c];let y=-1;if(m){f(m);return}for(;++y<u.length;)(p[y]===null||p[y]===void 0)&&(p[y]=u[y]);u=p,x?Kk(x,h)(...p):f(null,...p)}}function o(u){if(typeof u!="function")throw new TypeError("Expected `middelware` to be a function, not "+u);return t.push(u),i}}function Kk(t,i){let l;return o;function o(...f){const h=t.length>f.length;let m;h&&f.push(u);try{m=t.apply(this,f)}catch(p){const x=p;if(h&&l)throw x;return u(x)}h||(m&&m.then&&typeof m.then=="function"?m.then(c,u):m instanceof Error?u(m):c(m))}function u(f,...h){l||(l=!0,i(f,...h))}function c(f){u(null,f)}}const gt={basename:$k,dirname:eT,extname:nT,join:tT,sep:"/"};function $k(t,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');Ki(t);let l=0,o=-1,u=t.length,c;if(i===void 0||i.length===0||i.length>t.length){for(;u--;)if(t.codePointAt(u)===47){if(c){l=u+1;break}}else o<0&&(c=!0,o=u+1);return o<0?"":t.slice(l,o)}if(i===t)return"";let f=-1,h=i.length-1;for(;u--;)if(t.codePointAt(u)===47){if(c){l=u+1;break}}else f<0&&(c=!0,f=u+1),h>-1&&(t.codePointAt(u)===i.codePointAt(h--)?h<0&&(o=u):(h=-1,o=f));return l===o?o=f:o<0&&(o=t.length),t.slice(l,o)}function eT(t){if(Ki(t),t.length===0)return".";let i=-1,l=t.length,o;for(;--l;)if(t.codePointAt(l)===47){if(o){i=l;break}}else o||(o=!0);return i<0?t.codePointAt(0)===47?"/":".":i===1&&t.codePointAt(0)===47?"//":t.slice(0,i)}function nT(t){Ki(t);let i=t.length,l=-1,o=0,u=-1,c=0,f;for(;i--;){const h=t.codePointAt(i);if(h===47){if(f){o=i+1;break}continue}l<0&&(f=!0,l=i+1),h===46?u<0?u=i:c!==1&&(c=1):u>-1&&(c=-1)}return u<0||l<0||c===0||c===1&&u===l-1&&u===o+1?"":t.slice(u,l)}function tT(...t){let i=-1,l;for(;++i<t.length;)Ki(t[i]),t[i]&&(l=l===void 0?t[i]:l+"/"+t[i]);return l===void 0?".":rT(l)}function rT(t){Ki(t);const i=t.codePointAt(0)===47;let l=lT(t,!i);return l.length===0&&!i&&(l="."),l.length>0&&t.codePointAt(t.length-1)===47&&(l+="/"),i?"/"+l:l}function lT(t,i){let l="",o=0,u=-1,c=0,f=-1,h,m;for(;++f<=t.length;){if(f<t.length)h=t.codePointAt(f);else{if(h===47)break;h=47}if(h===47){if(!(u===f-1||c===1))if(u!==f-1&&c===2){if(l.length<2||o!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(m=l.lastIndexOf("/"),m!==l.length-1){m<0?(l="",o=0):(l=l.slice(0,m),o=l.length-1-l.lastIndexOf("/")),u=f,c=0;continue}}else if(l.length>0){l="",o=0,u=f,c=0;continue}}i&&(l=l.length>0?l+"/..":"..",o=2)}else l.length>0?l+="/"+t.slice(u+1,f):l=t.slice(u+1,f),o=f-u-1;u=f,c=0}else h===46&&c>-1?c++:c=-1}return l}function Ki(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const iT={cwd:aT};function aT(){return"/"}function qc(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function oT(t){if(typeof t=="string")t=new URL(t);else if(!qc(t)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(t.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return uT(t)}function uT(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const i=t.pathname;let l=-1;for(;++l<i.length;)if(i.codePointAt(l)===37&&i.codePointAt(l+1)===50){const o=i.codePointAt(l+2);if(o===70||o===102){const u=new TypeError("File URL path must not include encoded / characters");throw u.code="ERR_INVALID_FILE_URL_PATH",u}}return decodeURIComponent(i)}const yc=["history","path","basename","stem","extname","dirname"];class Ey{constructor(i){let l;i?qc(i)?l={path:i}:typeof i=="string"||sT(i)?l={value:i}:l=i:l={},this.cwd="cwd"in l?"":iT.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<yc.length;){const c=yc[o];c in l&&l[c]!==void 0&&l[c]!==null&&(this[c]=c==="history"?[...l[c]]:l[c])}let u;for(u in l)yc.includes(u)||(this[u]=l[u])}get basename(){return typeof this.path=="string"?gt.basename(this.path):void 0}set basename(i){xc(i,"basename"),vc(i,"basename"),this.path=gt.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?gt.dirname(this.path):void 0}set dirname(i){ag(this.basename,"dirname"),this.path=gt.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?gt.extname(this.path):void 0}set extname(i){if(vc(i,"extname"),ag(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=gt.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){qc(i)&&(i=oT(i)),xc(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?gt.basename(this.path,this.extname):void 0}set stem(i){xc(i,"stem"),vc(i,"stem"),this.path=gt.join(this.dirname||"",i+(this.extname||""))}fail(i,l,o){const u=this.message(i,l,o);throw u.fatal=!0,u}info(i,l,o){const u=this.message(i,l,o);return u.fatal=void 0,u}message(i,l,o){const u=new xn(i,l,o);return this.path&&(u.name=this.path+":"+u.name,u.file=this.path),u.fatal=!1,this.messages.push(u),u}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function vc(t,i){if(t&&t.includes(gt.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+gt.sep+"`")}function xc(t,i){if(!t)throw new Error("`"+i+"` cannot be empty")}function ag(t,i){if(!t)throw new Error("Setting `"+i+"` requires `path` to be set too")}function sT(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const cT=(function(t){const o=this.constructor.prototype,u=o[t],c=function(){return u.apply(c,arguments)};return Object.setPrototypeOf(c,o),c}),fT={}.hasOwnProperty;class hf extends cT{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Wk()}copy(){const i=new hf;let l=-1;for(;++l<this.attachers.length;){const o=this.attachers[l];i.use(...o)}return i.data(gc(!0,{},this.namespace)),i}data(i,l){return typeof i=="string"?arguments.length===2?(kc("data",this.frozen),this.namespace[i]=l,this):fT.call(this.namespace,i)&&this.namespace[i]||void 0:i?(kc("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const u=l.call(i,...o);typeof u=="function"&&this.transformers.use(u)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const l=ko(i),o=this.parser||this.Parser;return bc("parse",o),o(String(l),l)}process(i,l){const o=this;return this.freeze(),bc("process",this.parser||this.Parser),Sc("process",this.compiler||this.Compiler),l?u(void 0,l):new Promise(u);function u(c,f){const h=ko(i),m=o.parse(h);o.run(m,h,function(x,y,S){if(x||!y||!S)return p(x);const b=y,E=o.stringify(b,S);mT(E)?S.value=E:S.result=E,p(x,S)});function p(x,y){x||!y?f(x):c?c(y):l(void 0,y)}}}processSync(i){let l=!1,o;return this.freeze(),bc("processSync",this.parser||this.Parser),Sc("processSync",this.compiler||this.Compiler),this.process(i,u),ug("processSync","process",l),o;function u(c,f){l=!0,lg(c),o=f}}run(i,l,o){og(i),this.freeze();const u=this.transformers;return!o&&typeof l=="function"&&(o=l,l=void 0),o?c(void 0,o):new Promise(c);function c(f,h){const m=ko(l);u.run(i,m,p);function p(x,y,S){const b=y||i;x?h(x):f?f(b):o(void 0,b,S)}}}runSync(i,l){let o=!1,u;return this.run(i,l,c),ug("runSync","run",o),u;function c(f,h){lg(f),u=h,o=!0}}stringify(i,l){this.freeze();const o=ko(l),u=this.compiler||this.Compiler;return Sc("stringify",u),og(i),u(i,o)}use(i,...l){const o=this.attachers,u=this.namespace;if(kc("use",this.frozen),i!=null)if(typeof i=="function")m(i,l);else if(typeof i=="object")Array.isArray(i)?h(i):f(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function c(p){if(typeof p=="function")m(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[x,...y]=p;m(x,y)}else f(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function f(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(p.plugins),p.settings&&(u.settings=gc(!0,u.settings,p.settings))}function h(p){let x=-1;if(p!=null)if(Array.isArray(p))for(;++x<p.length;){const y=p[x];c(y)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function m(p,x){let y=-1,S=-1;for(;++y<o.length;)if(o[y][0]===p){S=y;break}if(S===-1)o.push([p,...x]);else if(x.length>0){let[b,...E]=x;const R=o[S][1];Fc(R)&&Fc(b)&&(b=gc(!0,R,b)),o[S]=[p,b,...E]}}}}const dT=new hf().freeze();function bc(t,i){if(typeof i!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Sc(t,i){if(typeof i!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function kc(t,i){if(i)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function og(t){if(!Fc(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function ug(t,i,l){if(!l)throw new Error("`"+t+"` finished async. Use `"+i+"` instead")}function ko(t){return hT(t)?t:new Ey(t)}function hT(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function mT(t){return typeof t=="string"||pT(t)}function pT(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const gT="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",sg=[],cg={allowDangerousHtml:!0},yT=/^(https?|ircs?|mailto|xmpp)$/i,vT=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function xT(t){const i=bT(t),l=ST(t);return kT(i.runSync(i.parse(l),l),t)}function bT(t){const i=t.rehypePlugins||sg,l=t.remarkPlugins||sg,o=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...cg}:cg;return dT().use(ek).use(l).use(Xk,o).use(i)}function ST(t){const i=t.children||"",l=new Ey;return typeof i=="string"&&(l.value=i),l}function kT(t,i){const l=i.allowedElements,o=i.allowElement,u=i.components,c=i.disallowedElements,f=i.skipHtml,h=i.unwrapDisallowed,m=i.urlTransform||TT;for(const x of vT)Object.hasOwn(i,x.from)&&(""+x.from+(x.to?"use `"+x.to+"` instead":"remove it")+gT+x.id,void 0);return df(t,p),Bb(t,{Fragment:g.Fragment,components:u,ignoreInvalidStyle:!0,jsx:g.jsx,jsxs:g.jsxs,passKeys:!0,passNode:!0});function p(x,y,S){if(x.type==="raw"&&S&&typeof y=="number")return f?S.children.splice(y,1):S.children[y]={type:"text",value:x.value},y;if(x.type==="element"){let b;for(b in dc)if(Object.hasOwn(dc,b)&&Object.hasOwn(x.properties,b)){const E=x.properties[b],R=dc[b];(R===null||R.includes(x.tagName))&&(x.properties[b]=m(String(E||""),b,x))}}if(x.type==="element"){let b=l?!l.includes(x.tagName):c?c.includes(x.tagName):!1;if(!b&&o&&typeof y=="number"&&(b=!o(x,y,S)),b&&S&&typeof y=="number")return h&&x.children?S.children.splice(y,1,...x.children):S.children.splice(y,1),y}}}function TT(t){const i=t.indexOf(":"),l=t.indexOf("?"),o=t.indexOf("#"),u=t.indexOf("/");return i===-1||u!==-1&&i>u||l!==-1&&i>l||o!==-1&&i>o||yT.test(t.slice(0,i))?t:""}function fg(t,i){const l=String(t);if(typeof i!="string")throw new TypeError("Expected character");let o=0,u=l.indexOf(i);for(;u!==-1;)o++,u=l.indexOf(i,u+i.length);return o}function ET(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function CT(t,i,l){const u=Ho((l||{}).ignore||[]),c=AT(i);let f=-1;for(;++f<c.length;)Ty(t,"text",h);function h(p,x){let y=-1,S;for(;++y<x.length;){const b=x[y],E=S?S.children:void 0;if(u(b,E?E.indexOf(b):void 0,S))return;S=b}if(S)return m(p,x)}function m(p,x){const y=x[x.length-1],S=c[f][0],b=c[f][1];let E=0;const M=y.children.indexOf(p);let w=!1,B=[];S.lastIndex=0;let L=S.exec(p.value);for(;L;){const Z=L.index,ee={index:L.index,input:L.input,stack:[...x,p]};let F=b(...L,ee);if(typeof F=="string"&&(F=F.length>0?{type:"text",value:F}:void 0),F===!1?S.lastIndex=Z+1:(E!==Z&&B.push({type:"text",value:p.value.slice(E,Z)}),Array.isArray(F)?B.push(...F):F&&B.push(F),E=Z+L[0].length,w=!0),!S.global)break;L=S.exec(p.value)}return w?(E<p.value.length&&B.push({type:"text",value:p.value.slice(E)}),y.children.splice(M,1,...B)):B=[p],M+B.length}}function AT(t){const i=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const l=!t[0]||Array.isArray(t[0])?t:[t];let o=-1;for(;++o<l.length;){const u=l[o];i.push([wT(u[0]),jT(u[1])])}return i}function wT(t){return typeof t=="string"?new RegExp(ET(t),"g"):t}function jT(t){return typeof t=="function"?t:function(){return t}}const Tc="phrasing",Ec=["autolink","link","image","label"];function DT(){return{transforms:[LT],enter:{literalAutolink:RT,literalAutolinkEmail:Cc,literalAutolinkHttp:Cc,literalAutolinkWww:Cc},exit:{literalAutolink:NT,literalAutolinkEmail:OT,literalAutolinkHttp:zT,literalAutolinkWww:_T}}}function MT(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Tc,notInConstruct:Ec},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Tc,notInConstruct:Ec},{character:":",before:"[ps]",after:"\\/",inConstruct:Tc,notInConstruct:Ec}]}}function RT(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Cc(t){this.config.enter.autolinkProtocol.call(this,t)}function zT(t){this.config.exit.autolinkProtocol.call(this,t)}function _T(t){this.config.exit.data.call(this,t);const i=this.stack[this.stack.length-1];i.type,i.url="http://"+this.sliceSerialize(t)}function OT(t){this.config.exit.autolinkEmail.call(this,t)}function NT(t){this.exit(t)}function LT(t){CT(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,BT],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),UT]],{ignore:["link","linkReference"]})}function BT(t,i,l,o,u){let c="";if(!Cy(u)||(/^w/i.test(i)&&(l=i+l,i="",c="http://"),!HT(l)))return!1;const f=IT(l+o);if(!f[0])return!1;const h={type:"link",title:null,url:c+i+f[0],children:[{type:"text",value:i+f[0]}]};return f[1]?[h,{type:"text",value:f[1]}]:h}function UT(t,i,l,o){return!Cy(o,!0)||/[-\d_]$/.test(l)?!1:{type:"link",title:null,url:"mailto:"+i+"@"+l,children:[{type:"text",value:i+"@"+l}]}}function HT(t){const i=t.split(".");return!(i.length<2||i[i.length-1]&&(/_/.test(i[i.length-1])||!/[a-zA-Z\d]/.test(i[i.length-1]))||i[i.length-2]&&(/_/.test(i[i.length-2])||!/[a-zA-Z\d]/.test(i[i.length-2])))}function IT(t){const i=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!i)return[t,void 0];t=t.slice(0,i.index);let l=i[0],o=l.indexOf(")");const u=fg(t,"(");let c=fg(t,")");for(;o!==-1&&u>c;)t+=l.slice(0,o+1),l=l.slice(o+1),o=l.indexOf(")"),c++;return[t,l]}function Cy(t,i){const l=t.input.charCodeAt(t.index-1);return(t.index===0||Br(l)||Lo(l))&&(!i||l!==47)}Ay.peek=QT;function FT(){this.buffer()}function qT(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function VT(){this.buffer()}function GT(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function PT(t){const i=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=ot(this.sliceSerialize(t)).toLowerCase(),l.label=i}function YT(t){this.exit(t)}function JT(t){const i=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=ot(this.sliceSerialize(t)).toLowerCase(),l.label=i}function XT(t){this.exit(t)}function QT(){return"["}function Ay(t,i,l,o){const u=l.createTracker(o);let c=u.move("[^");const f=l.enter("footnoteReference"),h=l.enter("reference");return c+=u.move(l.safe(l.associationId(t),{after:"]",before:c})),h(),f(),c+=u.move("]"),c}function ZT(){return{enter:{gfmFootnoteCallString:FT,gfmFootnoteCall:qT,gfmFootnoteDefinitionLabelString:VT,gfmFootnoteDefinition:GT},exit:{gfmFootnoteCallString:PT,gfmFootnoteCall:YT,gfmFootnoteDefinitionLabelString:JT,gfmFootnoteDefinition:XT}}}function WT(t){let i=!1;return t&&t.firstLineBlank&&(i=!0),{handlers:{footnoteDefinition:l,footnoteReference:Ay},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function l(o,u,c,f){const h=c.createTracker(f);let m=h.move("[^");const p=c.enter("footnoteDefinition"),x=c.enter("label");return m+=h.move(c.safe(c.associationId(o),{before:m,after:"]"})),x(),m+=h.move("]:"),o.children&&o.children.length>0&&(h.shift(4),m+=h.move((i?`
`:" ")+c.indentLines(c.containerFlow(o,h.current()),i?wy:KT))),p(),m}}function KT(t,i,l){return i===0?t:wy(t,i,l)}function wy(t,i,l){return(l?"":"    ")+t}const $T=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];jy.peek=lE;function eE(){return{canContainEols:["delete"],enter:{strikethrough:tE},exit:{strikethrough:rE}}}function nE(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:$T}],handlers:{delete:jy}}}function tE(t){this.enter({type:"delete",children:[]},t)}function rE(t){this.exit(t)}function jy(t,i,l,o){const u=l.createTracker(o),c=l.enter("strikethrough");let f=u.move("~~");return f+=l.containerPhrasing(t,{...u.current(),before:f,after:"~"}),f+=u.move("~~"),c(),f}function lE(){return"~"}function iE(t){return t.length}function aE(t,i){const l=i||{},o=(l.align||[]).concat(),u=l.stringLength||iE,c=[],f=[],h=[],m=[];let p=0,x=-1;for(;++x<t.length;){const R=[],M=[];let w=-1;for(t[x].length>p&&(p=t[x].length);++w<t[x].length;){const B=oE(t[x][w]);if(l.alignDelimiters!==!1){const L=u(B);M[w]=L,(m[w]===void 0||L>m[w])&&(m[w]=L)}R.push(B)}f[x]=R,h[x]=M}let y=-1;if(typeof o=="object"&&"length"in o)for(;++y<p;)c[y]=dg(o[y]);else{const R=dg(o);for(;++y<p;)c[y]=R}y=-1;const S=[],b=[];for(;++y<p;){const R=c[y];let M="",w="";R===99?(M=":",w=":"):R===108?M=":":R===114&&(w=":");let B=l.alignDelimiters===!1?1:Math.max(1,m[y]-M.length-w.length);const L=M+"-".repeat(B)+w;l.alignDelimiters!==!1&&(B=M.length+B+w.length,B>m[y]&&(m[y]=B),b[y]=B),S[y]=L}f.splice(1,0,S),h.splice(1,0,b),x=-1;const E=[];for(;++x<f.length;){const R=f[x],M=h[x];y=-1;const w=[];for(;++y<p;){const B=R[y]||"";let L="",Z="";if(l.alignDelimiters!==!1){const ee=m[y]-(M[y]||0),F=c[y];F===114?L=" ".repeat(ee):F===99?ee%2?(L=" ".repeat(ee/2+.5),Z=" ".repeat(ee/2-.5)):(L=" ".repeat(ee/2),Z=L):Z=" ".repeat(ee)}l.delimiterStart!==!1&&!y&&w.push("|"),l.padding!==!1&&!(l.alignDelimiters===!1&&B==="")&&(l.delimiterStart!==!1||y)&&w.push(" "),l.alignDelimiters!==!1&&w.push(L),w.push(B),l.alignDelimiters!==!1&&w.push(Z),l.padding!==!1&&w.push(" "),(l.delimiterEnd!==!1||y!==p-1)&&w.push("|")}E.push(l.delimiterEnd===!1?w.join("").replace(/ +$/,""):w.join(""))}return E.join(`
`)}function oE(t){return t==null?"":String(t)}function dg(t){const i=typeof t=="string"?t.codePointAt(0):0;return i===67||i===99?99:i===76||i===108?108:i===82||i===114?114:0}function uE(t,i,l,o){const u=l.enter("blockquote"),c=l.createTracker(o);c.move("> "),c.shift(2);const f=l.indentLines(l.containerFlow(t,c.current()),sE);return u(),f}function sE(t,i,l){return">"+(l?"":" ")+t}function cE(t,i){return hg(t,i.inConstruct,!0)&&!hg(t,i.notInConstruct,!1)}function hg(t,i,l){if(typeof i=="string"&&(i=[i]),!i||i.length===0)return l;let o=-1;for(;++o<i.length;)if(t.includes(i[o]))return!0;return!1}function mg(t,i,l,o){let u=-1;for(;++u<l.unsafe.length;)if(l.unsafe[u].character===`
`&&cE(l.stack,l.unsafe[u]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function fE(t,i){const l=String(t);let o=l.indexOf(i),u=o,c=0,f=0;if(typeof i!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===u?++c>f&&(f=c):c=1,u=o+i.length,o=l.indexOf(i,u);return f}function dE(t,i){return!!(i.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function hE(t){const i=t.options.fence||"`";if(i!=="`"&&i!=="~")throw new Error("Cannot serialize code with `"+i+"` for `options.fence`, expected `` ` `` or `~`");return i}function mE(t,i,l,o){const u=hE(l),c=t.value||"",f=u==="`"?"GraveAccent":"Tilde";if(dE(t,l)){const y=l.enter("codeIndented"),S=l.indentLines(c,pE);return y(),S}const h=l.createTracker(o),m=u.repeat(Math.max(fE(c,u)+1,3)),p=l.enter("codeFenced");let x=h.move(m);if(t.lang){const y=l.enter(`codeFencedLang${f}`);x+=h.move(l.safe(t.lang,{before:x,after:" ",encode:["`"],...h.current()})),y()}if(t.lang&&t.meta){const y=l.enter(`codeFencedMeta${f}`);x+=h.move(" "),x+=h.move(l.safe(t.meta,{before:x,after:`
`,encode:["`"],...h.current()})),y()}return x+=h.move(`
`),c&&(x+=h.move(c+`
`)),x+=h.move(m),p(),x}function pE(t,i,l){return(l?"":"    ")+t}function mf(t){const i=t.options.quote||'"';if(i!=='"'&&i!=="'")throw new Error("Cannot serialize title with `"+i+"` for `options.quote`, expected `\"`, or `'`");return i}function gE(t,i,l,o){const u=mf(l),c=u==='"'?"Quote":"Apostrophe",f=l.enter("definition");let h=l.enter("label");const m=l.createTracker(o);let p=m.move("[");return p+=m.move(l.safe(l.associationId(t),{before:p,after:"]",...m.current()})),p+=m.move("]: "),h(),!t.url||/[\0- \u007F]/.test(t.url)?(h=l.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(l.safe(t.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(h=l.enter("destinationRaw"),p+=m.move(l.safe(t.url,{before:p,after:t.title?" ":`
`,...m.current()}))),h(),t.title&&(h=l.enter(`title${c}`),p+=m.move(" "+u),p+=m.move(l.safe(t.title,{before:p,after:u,...m.current()})),p+=m.move(u),h()),f(),p}function yE(t){const i=t.options.emphasis||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize emphasis with `"+i+"` for `options.emphasis`, expected `*`, or `_`");return i}function Yi(t){return"&#x"+t.toString(16).toUpperCase()+";"}function _o(t,i,l){const o=_l(t),u=_l(i);return o===void 0?u===void 0?l==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:u===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:o===1?u===void 0?{inside:!1,outside:!1}:u===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:u===void 0?{inside:!1,outside:!1}:u===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Dy.peek=vE;function Dy(t,i,l,o){const u=yE(l),c=l.enter("emphasis"),f=l.createTracker(o),h=f.move(u);let m=f.move(l.containerPhrasing(t,{after:u,before:h,...f.current()}));const p=m.charCodeAt(0),x=_o(o.before.charCodeAt(o.before.length-1),p,u);x.inside&&(m=Yi(p)+m.slice(1));const y=m.charCodeAt(m.length-1),S=_o(o.after.charCodeAt(0),y,u);S.inside&&(m=m.slice(0,-1)+Yi(y));const b=f.move(u);return c(),l.attentionEncodeSurroundingInfo={after:S.outside,before:x.outside},h+m+b}function vE(t,i,l){return l.options.emphasis||"*"}function xE(t,i){let l=!1;return df(t,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return l=!0,Hc}),!!((!t.depth||t.depth<3)&&lf(t)&&(i.options.setext||l))}function bE(t,i,l,o){const u=Math.max(Math.min(6,t.depth||1),1),c=l.createTracker(o);if(xE(t,l)){const x=l.enter("headingSetext"),y=l.enter("phrasing"),S=l.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return y(),x(),S+`
`+(u===1?"=":"-").repeat(S.length-(Math.max(S.lastIndexOf("\r"),S.lastIndexOf(`
`))+1))}const f="#".repeat(u),h=l.enter("headingAtx"),m=l.enter("phrasing");c.move(f+" ");let p=l.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(p)&&(p=Yi(p.charCodeAt(0))+p.slice(1)),p=p?f+" "+p:f,l.options.closeAtx&&(p+=" "+f),m(),h(),p}My.peek=SE;function My(t){return t.value||""}function SE(){return"<"}Ry.peek=kE;function Ry(t,i,l,o){const u=mf(l),c=u==='"'?"Quote":"Apostrophe",f=l.enter("image");let h=l.enter("label");const m=l.createTracker(o);let p=m.move("![");return p+=m.move(l.safe(t.alt,{before:p,after:"]",...m.current()})),p+=m.move("]("),h(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(h=l.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(l.safe(t.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(h=l.enter("destinationRaw"),p+=m.move(l.safe(t.url,{before:p,after:t.title?" ":")",...m.current()}))),h(),t.title&&(h=l.enter(`title${c}`),p+=m.move(" "+u),p+=m.move(l.safe(t.title,{before:p,after:u,...m.current()})),p+=m.move(u),h()),p+=m.move(")"),f(),p}function kE(){return"!"}zy.peek=TE;function zy(t,i,l,o){const u=t.referenceType,c=l.enter("imageReference");let f=l.enter("label");const h=l.createTracker(o);let m=h.move("![");const p=l.safe(t.alt,{before:m,after:"]",...h.current()});m+=h.move(p+"]["),f();const x=l.stack;l.stack=[],f=l.enter("reference");const y=l.safe(l.associationId(t),{before:m,after:"]",...h.current()});return f(),l.stack=x,c(),u==="full"||!p||p!==y?m+=h.move(y+"]"):u==="shortcut"?m=m.slice(0,-1):m+=h.move("]"),m}function TE(){return"!"}_y.peek=EE;function _y(t,i,l){let o=t.value||"",u="`",c=-1;for(;new RegExp("(^|[^`])"+u+"([^`]|$)").test(o);)u+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++c<l.unsafe.length;){const f=l.unsafe[c],h=l.compilePattern(f);let m;if(f.atBreak)for(;m=h.exec(o);){let p=m.index;o.charCodeAt(p)===10&&o.charCodeAt(p-1)===13&&p--,o=o.slice(0,p)+" "+o.slice(m.index+1)}}return u+o+u}function EE(){return"`"}function Oy(t,i){const l=lf(t);return!!(!i.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(l===t.url||"mailto:"+l===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}Ny.peek=CE;function Ny(t,i,l,o){const u=mf(l),c=u==='"'?"Quote":"Apostrophe",f=l.createTracker(o);let h,m;if(Oy(t,l)){const x=l.stack;l.stack=[],h=l.enter("autolink");let y=f.move("<");return y+=f.move(l.containerPhrasing(t,{before:y,after:">",...f.current()})),y+=f.move(">"),h(),l.stack=x,y}h=l.enter("link"),m=l.enter("label");let p=f.move("[");return p+=f.move(l.containerPhrasing(t,{before:p,after:"](",...f.current()})),p+=f.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=l.enter("destinationLiteral"),p+=f.move("<"),p+=f.move(l.safe(t.url,{before:p,after:">",...f.current()})),p+=f.move(">")):(m=l.enter("destinationRaw"),p+=f.move(l.safe(t.url,{before:p,after:t.title?" ":")",...f.current()}))),m(),t.title&&(m=l.enter(`title${c}`),p+=f.move(" "+u),p+=f.move(l.safe(t.title,{before:p,after:u,...f.current()})),p+=f.move(u),m()),p+=f.move(")"),h(),p}function CE(t,i,l){return Oy(t,l)?"<":"["}Ly.peek=AE;function Ly(t,i,l,o){const u=t.referenceType,c=l.enter("linkReference");let f=l.enter("label");const h=l.createTracker(o);let m=h.move("[");const p=l.containerPhrasing(t,{before:m,after:"]",...h.current()});m+=h.move(p+"]["),f();const x=l.stack;l.stack=[],f=l.enter("reference");const y=l.safe(l.associationId(t),{before:m,after:"]",...h.current()});return f(),l.stack=x,c(),u==="full"||!p||p!==y?m+=h.move(y+"]"):u==="shortcut"?m=m.slice(0,-1):m+=h.move("]"),m}function AE(){return"["}function pf(t){const i=t.options.bullet||"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bullet`, expected `*`, `+`, or `-`");return i}function wE(t){const i=pf(t),l=t.options.bulletOther;if(!l)return i==="*"?"-":"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(l===i)throw new Error("Expected `bullet` (`"+i+"`) and `bulletOther` (`"+l+"`) to be different");return l}function jE(t){const i=t.options.bulletOrdered||".";if(i!=="."&&i!==")")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOrdered`, expected `.` or `)`");return i}function By(t){const i=t.options.rule||"*";if(i!=="*"&&i!=="-"&&i!=="_")throw new Error("Cannot serialize rules with `"+i+"` for `options.rule`, expected `*`, `-`, or `_`");return i}function DE(t,i,l,o){const u=l.enter("list"),c=l.bulletCurrent;let f=t.ordered?jE(l):pf(l);const h=t.ordered?f==="."?")":".":wE(l);let m=i&&l.bulletLastUsed?f===l.bulletLastUsed:!1;if(!t.ordered){const x=t.children?t.children[0]:void 0;if((f==="*"||f==="-")&&x&&(!x.children||!x.children[0])&&l.stack[l.stack.length-1]==="list"&&l.stack[l.stack.length-2]==="listItem"&&l.stack[l.stack.length-3]==="list"&&l.stack[l.stack.length-4]==="listItem"&&l.indexStack[l.indexStack.length-1]===0&&l.indexStack[l.indexStack.length-2]===0&&l.indexStack[l.indexStack.length-3]===0&&(m=!0),By(l)===f&&x){let y=-1;for(;++y<t.children.length;){const S=t.children[y];if(S&&S.type==="listItem"&&S.children&&S.children[0]&&S.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(f=h),l.bulletCurrent=f;const p=l.containerFlow(t,o);return l.bulletLastUsed=f,l.bulletCurrent=c,u(),p}function ME(t){const i=t.options.listItemIndent||"one";if(i!=="tab"&&i!=="one"&&i!=="mixed")throw new Error("Cannot serialize items with `"+i+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return i}function RE(t,i,l,o){const u=ME(l);let c=l.bulletCurrent||pf(l);i&&i.type==="list"&&i.ordered&&(c=(typeof i.start=="number"&&i.start>-1?i.start:1)+(l.options.incrementListMarker===!1?0:i.children.indexOf(t))+c);let f=c.length+1;(u==="tab"||u==="mixed"&&(i&&i.type==="list"&&i.spread||t.spread))&&(f=Math.ceil(f/4)*4);const h=l.createTracker(o);h.move(c+" ".repeat(f-c.length)),h.shift(f);const m=l.enter("listItem"),p=l.indentLines(l.containerFlow(t,h.current()),x);return m(),p;function x(y,S,b){return S?(b?"":" ".repeat(f))+y:(b?c:c+" ".repeat(f-c.length))+y}}function zE(t,i,l,o){const u=l.enter("paragraph"),c=l.enter("phrasing"),f=l.containerPhrasing(t,o);return c(),u(),f}const _E=Ho(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function OE(t,i,l,o){return(t.children.some(function(f){return _E(f)})?l.containerPhrasing:l.containerFlow).call(l,t,o)}function NE(t){const i=t.options.strong||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize strong with `"+i+"` for `options.strong`, expected `*`, or `_`");return i}Uy.peek=LE;function Uy(t,i,l,o){const u=NE(l),c=l.enter("strong"),f=l.createTracker(o),h=f.move(u+u);let m=f.move(l.containerPhrasing(t,{after:u,before:h,...f.current()}));const p=m.charCodeAt(0),x=_o(o.before.charCodeAt(o.before.length-1),p,u);x.inside&&(m=Yi(p)+m.slice(1));const y=m.charCodeAt(m.length-1),S=_o(o.after.charCodeAt(0),y,u);S.inside&&(m=m.slice(0,-1)+Yi(y));const b=f.move(u+u);return c(),l.attentionEncodeSurroundingInfo={after:S.outside,before:x.outside},h+m+b}function LE(t,i,l){return l.options.strong||"*"}function BE(t,i,l,o){return l.safe(t.value,o)}function UE(t){const i=t.options.ruleRepetition||3;if(i<3)throw new Error("Cannot serialize rules with repetition `"+i+"` for `options.ruleRepetition`, expected `3` or more");return i}function HE(t,i,l){const o=(By(l)+(l.options.ruleSpaces?" ":"")).repeat(UE(l));return l.options.ruleSpaces?o.slice(0,-1):o}const Hy={blockquote:uE,break:mg,code:mE,definition:gE,emphasis:Dy,hardBreak:mg,heading:bE,html:My,image:Ry,imageReference:zy,inlineCode:_y,link:Ny,linkReference:Ly,list:DE,listItem:RE,paragraph:zE,root:OE,strong:Uy,text:BE,thematicBreak:HE};function IE(){return{enter:{table:FE,tableData:pg,tableHeader:pg,tableRow:VE},exit:{codeText:GE,table:qE,tableData:Ac,tableHeader:Ac,tableRow:Ac}}}function FE(t){const i=t._align;this.enter({type:"table",align:i.map(function(l){return l==="none"?null:l}),children:[]},t),this.data.inTable=!0}function qE(t){this.exit(t),this.data.inTable=void 0}function VE(t){this.enter({type:"tableRow",children:[]},t)}function Ac(t){this.exit(t)}function pg(t){this.enter({type:"tableCell",children:[]},t)}function GE(t){let i=this.resume();this.data.inTable&&(i=i.replace(/\\([\\|])/g,PE));const l=this.stack[this.stack.length-1];l.type,l.value=i,this.exit(t)}function PE(t,i){return i==="|"?i:t}function YE(t){const i=t||{},l=i.tableCellPadding,o=i.tablePipeAlign,u=i.stringLength,c=l?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:S,table:f,tableCell:m,tableRow:h}};function f(b,E,R,M){return p(x(b,R,M),b.align)}function h(b,E,R,M){const w=y(b,R,M),B=p([w]);return B.slice(0,B.indexOf(`
`))}function m(b,E,R,M){const w=R.enter("tableCell"),B=R.enter("phrasing"),L=R.containerPhrasing(b,{...M,before:c,after:c});return B(),w(),L}function p(b,E){return aE(b,{align:E,alignDelimiters:o,padding:l,stringLength:u})}function x(b,E,R){const M=b.children;let w=-1;const B=[],L=E.enter("table");for(;++w<M.length;)B[w]=y(M[w],E,R);return L(),B}function y(b,E,R){const M=b.children;let w=-1;const B=[],L=E.enter("tableRow");for(;++w<M.length;)B[w]=m(M[w],b,E,R);return L(),B}function S(b,E,R){let M=Hy.inlineCode(b,E,R);return R.stack.includes("tableCell")&&(M=M.replace(/\|/g,"\\$&")),M}}function JE(){return{exit:{taskListCheckValueChecked:gg,taskListCheckValueUnchecked:gg,paragraph:QE}}}function XE(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:ZE}}}function gg(t){const i=this.stack[this.stack.length-2];i.type,i.checked=t.type==="taskListCheckValueChecked"}function QE(t){const i=this.stack[this.stack.length-2];if(i&&i.type==="listItem"&&typeof i.checked=="boolean"){const l=this.stack[this.stack.length-1];l.type;const o=l.children[0];if(o&&o.type==="text"){const u=i.children;let c=-1,f;for(;++c<u.length;){const h=u[c];if(h.type==="paragraph"){f=h;break}}f===l&&(o.value=o.value.slice(1),o.value.length===0?l.children.shift():l.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,l.position.start=Object.assign({},o.position.start)))}}this.exit(t)}function ZE(t,i,l,o){const u=t.children[0],c=typeof t.checked=="boolean"&&u&&u.type==="paragraph",f="["+(t.checked?"x":" ")+"] ",h=l.createTracker(o);c&&h.move(f);let m=Hy.listItem(t,i,l,{...o,...h.current()});return c&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),m;function p(x){return x+f}}function WE(){return[DT(),ZT(),eE(),IE(),JE()]}function KE(t){return{extensions:[MT(),WT(t),nE(),YE(t),XE()]}}const $E={tokenize:iC,partial:!0},Iy={tokenize:aC,partial:!0},Fy={tokenize:oC,partial:!0},qy={tokenize:uC,partial:!0},eC={tokenize:sC,partial:!0},Vy={name:"wwwAutolink",tokenize:rC,previous:Py},Gy={name:"protocolAutolink",tokenize:lC,previous:Yy},Gt={name:"emailAutolink",tokenize:tC,previous:Jy},xt={};function nC(){return{text:xt}}let Lr=48;for(;Lr<123;)xt[Lr]=Gt,Lr++,Lr===58?Lr=65:Lr===91&&(Lr=97);xt[43]=Gt;xt[45]=Gt;xt[46]=Gt;xt[95]=Gt;xt[72]=[Gt,Gy];xt[104]=[Gt,Gy];xt[87]=[Gt,Vy];xt[119]=[Gt,Vy];function tC(t,i,l){const o=this;let u,c;return f;function f(y){return!Vc(y)||!Jy.call(o,o.previous)||gf(o.events)?l(y):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),h(y))}function h(y){return Vc(y)?(t.consume(y),h):y===64?(t.consume(y),m):l(y)}function m(y){return y===46?t.check(eC,x,p)(y):y===45||y===95||vn(y)?(c=!0,t.consume(y),m):x(y)}function p(y){return t.consume(y),u=!0,m}function x(y){return c&&u&&Tn(o.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),i(y)):l(y)}}function rC(t,i,l){const o=this;return u;function u(f){return f!==87&&f!==119||!Py.call(o,o.previous)||gf(o.events)?l(f):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check($E,t.attempt(Iy,t.attempt(Fy,c),l),l)(f))}function c(f){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),i(f)}}function lC(t,i,l){const o=this;let u="",c=!1;return f;function f(y){return(y===72||y===104)&&Yy.call(o,o.previous)&&!gf(o.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),u+=String.fromCodePoint(y),t.consume(y),h):l(y)}function h(y){if(Tn(y)&&u.length<5)return u+=String.fromCodePoint(y),t.consume(y),h;if(y===58){const S=u.toLowerCase();if(S==="http"||S==="https")return t.consume(y),m}return l(y)}function m(y){return y===47?(t.consume(y),c?p:(c=!0,m)):l(y)}function p(y){return y===null||Mo(y)||Ve(y)||Br(y)||Lo(y)?l(y):t.attempt(Iy,t.attempt(Fy,x),l)(y)}function x(y){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),i(y)}}function iC(t,i,l){let o=0;return u;function u(f){return(f===87||f===119)&&o<3?(o++,t.consume(f),u):f===46&&o===3?(t.consume(f),c):l(f)}function c(f){return f===null?l(f):i(f)}}function aC(t,i,l){let o,u,c;return f;function f(p){return p===46||p===95?t.check(qy,m,h)(p):p===null||Ve(p)||Br(p)||p!==45&&Lo(p)?m(p):(c=!0,t.consume(p),f)}function h(p){return p===95?o=!0:(u=o,o=void 0),t.consume(p),f}function m(p){return u||o||!c?l(p):i(p)}}function oC(t,i){let l=0,o=0;return u;function u(f){return f===40?(l++,t.consume(f),u):f===41&&o<l?c(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?t.check(qy,i,c)(f):f===null||Ve(f)||Br(f)?i(f):(t.consume(f),u)}function c(f){return f===41&&o++,t.consume(f),u}}function uC(t,i,l){return o;function o(h){return h===33||h===34||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===63||h===95||h===126?(t.consume(h),o):h===38?(t.consume(h),c):h===93?(t.consume(h),u):h===60||h===null||Ve(h)||Br(h)?i(h):l(h)}function u(h){return h===null||h===40||h===91||Ve(h)||Br(h)?i(h):o(h)}function c(h){return Tn(h)?f(h):l(h)}function f(h){return h===59?(t.consume(h),o):Tn(h)?(t.consume(h),f):l(h)}}function sC(t,i,l){return o;function o(c){return t.consume(c),u}function u(c){return vn(c)?l(c):i(c)}}function Py(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Ve(t)}function Yy(t){return!Tn(t)}function Jy(t){return!(t===47||Vc(t))}function Vc(t){return t===43||t===45||t===46||t===95||vn(t)}function gf(t){let i=t.length,l=!1;for(;i--;){const o=t[i][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){l=!0;break}if(o._gfmAutolinkLiteralWalkedInto){l=!1;break}}return t.length>0&&!l&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}const cC={tokenize:vC,partial:!0};function fC(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:pC,continuation:{tokenize:gC},exit:yC}},text:{91:{name:"gfmFootnoteCall",tokenize:mC},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:dC,resolveTo:hC}}}}function dC(t,i,l){const o=this;let u=o.events.length;const c=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let f;for(;u--;){const m=o.events[u][1];if(m.type==="labelImage"){f=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return h;function h(m){if(!f||!f._balanced)return l(m);const p=ot(o.sliceSerialize({start:f.end,end:o.now()}));return p.codePointAt(0)!==94||!c.includes(p.slice(1))?l(m):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(m),t.exit("gfmFootnoteCallLabelMarker"),i(m))}}function hC(t,i){let l=t.length;for(;l--;)if(t[l][1].type==="labelImage"&&t[l][0]==="enter"){t[l][1];break}t[l+1][1].type="data",t[l+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},t[l+3][1].start),end:Object.assign({},t[t.length-1][1].end)},u={type:"gfmFootnoteCallMarker",start:Object.assign({},t[l+3][1].end),end:Object.assign({},t[l+3][1].end)};u.end.column++,u.end.offset++,u.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},u.end),end:Object.assign({},t[t.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},h=[t[l+1],t[l+2],["enter",o,i],t[l+3],t[l+4],["enter",u,i],["exit",u,i],["enter",c,i],["enter",f,i],["exit",f,i],["exit",c,i],t[t.length-2],t[t.length-1],["exit",o,i]];return t.splice(l,t.length-l+1,...h),t}function mC(t,i,l){const o=this,u=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c=0,f;return h;function h(y){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(y),t.exit("gfmFootnoteCallLabelMarker"),m}function m(y){return y!==94?l(y):(t.enter("gfmFootnoteCallMarker"),t.consume(y),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",p)}function p(y){if(c>999||y===93&&!f||y===null||y===91||Ve(y))return l(y);if(y===93){t.exit("chunkString");const S=t.exit("gfmFootnoteCallString");return u.includes(ot(o.sliceSerialize(S)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(y),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),i):l(y)}return Ve(y)||(f=!0),c++,t.consume(y),y===92?x:p}function x(y){return y===91||y===92||y===93?(t.consume(y),c++,p):p(y)}}function pC(t,i,l){const o=this,u=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c,f=0,h;return m;function m(E){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(E){return E===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",x):l(E)}function x(E){if(f>999||E===93&&!h||E===null||E===91||Ve(E))return l(E);if(E===93){t.exit("chunkString");const R=t.exit("gfmFootnoteDefinitionLabelString");return c=ot(o.sliceSerialize(R)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),S}return Ve(E)||(h=!0),f++,t.consume(E),E===92?y:x}function y(E){return E===91||E===92||E===93?(t.consume(E),f++,x):x(E)}function S(E){return E===58?(t.enter("definitionMarker"),t.consume(E),t.exit("definitionMarker"),u.includes(c)||u.push(c),Me(t,b,"gfmFootnoteDefinitionWhitespace")):l(E)}function b(E){return i(E)}}function gC(t,i,l){return t.check(Wi,i,t.attempt(cC,i,l))}function yC(t){t.exit("gfmFootnoteDefinition")}function vC(t,i,l){const o=this;return Me(t,u,"gfmFootnoteDefinitionIndent",5);function u(c){const f=o.events[o.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?i(c):l(c)}}function xC(t){let l=(t||{}).singleTilde;const o={name:"strikethrough",tokenize:c,resolveAll:u};return l==null&&(l=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function u(f,h){let m=-1;for(;++m<f.length;)if(f[m][0]==="enter"&&f[m][1].type==="strikethroughSequenceTemporary"&&f[m][1]._close){let p=m;for(;p--;)if(f[p][0]==="exit"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._open&&f[m][1].end.offset-f[m][1].start.offset===f[p][1].end.offset-f[p][1].start.offset){f[m][1].type="strikethroughSequence",f[p][1].type="strikethroughSequence";const x={type:"strikethrough",start:Object.assign({},f[p][1].start),end:Object.assign({},f[m][1].end)},y={type:"strikethroughText",start:Object.assign({},f[p][1].end),end:Object.assign({},f[m][1].start)},S=[["enter",x,h],["enter",f[p][1],h],["exit",f[p][1],h],["enter",y,h]],b=h.parser.constructs.insideSpan.null;b&&Gn(S,S.length,0,Bo(b,f.slice(p+1,m),h)),Gn(S,S.length,0,[["exit",y,h],["enter",f[m][1],h],["exit",f[m][1],h],["exit",x,h]]),Gn(f,p-1,m-p+3,S),m=p+S.length-2;break}}for(m=-1;++m<f.length;)f[m][1].type==="strikethroughSequenceTemporary"&&(f[m][1].type="data");return f}function c(f,h,m){const p=this.previous,x=this.events;let y=0;return S;function S(E){return p===126&&x[x.length-1][1].type!=="characterEscape"?m(E):(f.enter("strikethroughSequenceTemporary"),b(E))}function b(E){const R=_l(p);if(E===126)return y>1?m(E):(f.consume(E),y++,b);if(y<2&&!l)return m(E);const M=f.exit("strikethroughSequenceTemporary"),w=_l(E);return M._open=!w||w===2&&!!R,M._close=!R||R===2&&!!w,h(E)}}}class bC{constructor(){this.map=[]}add(i,l,o){SC(this,i,l,o)}consume(i){if(this.map.sort(function(c,f){return c[0]-f[0]}),this.map.length===0)return;let l=this.map.length;const o=[];for(;l>0;)l-=1,o.push(i.slice(this.map[l][0]+this.map[l][1]),this.map[l][2]),i.length=this.map[l][0];o.push(i.slice()),i.length=0;let u=o.pop();for(;u;){for(const c of u)i.push(c);u=o.pop()}this.map.length=0}}function SC(t,i,l,o){let u=0;if(!(l===0&&o.length===0)){for(;u<t.map.length;){if(t.map[u][0]===i){t.map[u][1]+=l,t.map[u][2].push(...o);return}u+=1}t.map.push([i,l,o])}}function kC(t,i){let l=!1;const o=[];for(;i<t.length;){const u=t[i];if(l){if(u[0]==="enter")u[1].type==="tableContent"&&o.push(t[i+1][1].type==="tableDelimiterMarker"?"left":"none");else if(u[1].type==="tableContent"){if(t[i-1][1].type==="tableDelimiterMarker"){const c=o.length-1;o[c]=o[c]==="left"?"center":"right"}}else if(u[1].type==="tableDelimiterRow")break}else u[0]==="enter"&&u[1].type==="tableDelimiterRow"&&(l=!0);i+=1}return o}function TC(){return{flow:{null:{name:"table",tokenize:EC,resolveAll:CC}}}}function EC(t,i,l){const o=this;let u=0,c=0,f;return h;function h(I){let ne=o.events.length-1;for(;ne>-1;){const ie=o.events[ne][1].type;if(ie==="lineEnding"||ie==="linePrefix")ne--;else break}const te=ne>-1?o.events[ne][1].type:null,Se=te==="tableHead"||te==="tableRow"?F:m;return Se===F&&o.parser.lazy[o.now().line]?l(I):Se(I)}function m(I){return t.enter("tableHead"),t.enter("tableRow"),p(I)}function p(I){return I===124||(f=!0,c+=1),x(I)}function x(I){return I===null?l(I):de(I)?c>1?(c=0,o.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(I),t.exit("lineEnding"),b):l(I):Ce(I)?Me(t,x,"whitespace")(I):(c+=1,f&&(f=!1,u+=1),I===124?(t.enter("tableCellDivider"),t.consume(I),t.exit("tableCellDivider"),f=!0,x):(t.enter("data"),y(I)))}function y(I){return I===null||I===124||Ve(I)?(t.exit("data"),x(I)):(t.consume(I),I===92?S:y)}function S(I){return I===92||I===124?(t.consume(I),y):y(I)}function b(I){return o.interrupt=!1,o.parser.lazy[o.now().line]?l(I):(t.enter("tableDelimiterRow"),f=!1,Ce(I)?Me(t,E,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):E(I))}function E(I){return I===45||I===58?M(I):I===124?(f=!0,t.enter("tableCellDivider"),t.consume(I),t.exit("tableCellDivider"),R):ee(I)}function R(I){return Ce(I)?Me(t,M,"whitespace")(I):M(I)}function M(I){return I===58?(c+=1,f=!0,t.enter("tableDelimiterMarker"),t.consume(I),t.exit("tableDelimiterMarker"),w):I===45?(c+=1,w(I)):I===null||de(I)?Z(I):ee(I)}function w(I){return I===45?(t.enter("tableDelimiterFiller"),B(I)):ee(I)}function B(I){return I===45?(t.consume(I),B):I===58?(f=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(I),t.exit("tableDelimiterMarker"),L):(t.exit("tableDelimiterFiller"),L(I))}function L(I){return Ce(I)?Me(t,Z,"whitespace")(I):Z(I)}function Z(I){return I===124?E(I):I===null||de(I)?!f||u!==c?ee(I):(t.exit("tableDelimiterRow"),t.exit("tableHead"),i(I)):ee(I)}function ee(I){return l(I)}function F(I){return t.enter("tableRow"),W(I)}function W(I){return I===124?(t.enter("tableCellDivider"),t.consume(I),t.exit("tableCellDivider"),W):I===null||de(I)?(t.exit("tableRow"),i(I)):Ce(I)?Me(t,W,"whitespace")(I):(t.enter("data"),fe(I))}function fe(I){return I===null||I===124||Ve(I)?(t.exit("data"),W(I)):(t.consume(I),I===92?ue:fe)}function ue(I){return I===92||I===124?(t.consume(I),fe):fe(I)}}function CC(t,i){let l=-1,o=!0,u=0,c=[0,0,0,0],f=[0,0,0,0],h=!1,m=0,p,x,y;const S=new bC;for(;++l<t.length;){const b=t[l],E=b[1];b[0]==="enter"?E.type==="tableHead"?(h=!1,m!==0&&(yg(S,i,m,p,x),x=void 0,m=0),p={type:"table",start:Object.assign({},E.start),end:Object.assign({},E.end)},S.add(l,0,[["enter",p,i]])):E.type==="tableRow"||E.type==="tableDelimiterRow"?(o=!0,y=void 0,c=[0,0,0,0],f=[0,l+1,0,0],h&&(h=!1,x={type:"tableBody",start:Object.assign({},E.start),end:Object.assign({},E.end)},S.add(l,0,[["enter",x,i]])),u=E.type==="tableDelimiterRow"?2:x?3:1):u&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")?(o=!1,f[2]===0&&(c[1]!==0&&(f[0]=f[1],y=To(S,i,c,u,void 0,y),c=[0,0,0,0]),f[2]=l)):E.type==="tableCellDivider"&&(o?o=!1:(c[1]!==0&&(f[0]=f[1],y=To(S,i,c,u,void 0,y)),c=f,f=[c[1],l,0,0])):E.type==="tableHead"?(h=!0,m=l):E.type==="tableRow"||E.type==="tableDelimiterRow"?(m=l,c[1]!==0?(f[0]=f[1],y=To(S,i,c,u,l,y)):f[1]!==0&&(y=To(S,i,f,u,l,y)),u=0):u&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")&&(f[3]=l)}for(m!==0&&yg(S,i,m,p,x),S.consume(i.events),l=-1;++l<i.events.length;){const b=i.events[l];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=kC(i.events,l))}return t}function To(t,i,l,o,u,c){const f=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",h="tableContent";l[0]!==0&&(c.end=Object.assign({},Rl(i.events,l[0])),t.add(l[0],0,[["exit",c,i]]));const m=Rl(i.events,l[1]);if(c={type:f,start:Object.assign({},m),end:Object.assign({},m)},t.add(l[1],0,[["enter",c,i]]),l[2]!==0){const p=Rl(i.events,l[2]),x=Rl(i.events,l[3]),y={type:h,start:Object.assign({},p),end:Object.assign({},x)};if(t.add(l[2],0,[["enter",y,i]]),o!==2){const S=i.events[l[2]],b=i.events[l[3]];if(S[1].end=Object.assign({},b[1].end),S[1].type="chunkText",S[1].contentType="text",l[3]>l[2]+1){const E=l[2]+1,R=l[3]-l[2]-1;t.add(E,R,[])}}t.add(l[3]+1,0,[["exit",y,i]])}return u!==void 0&&(c.end=Object.assign({},Rl(i.events,u)),t.add(u,0,[["exit",c,i]]),c=void 0),c}function yg(t,i,l,o,u){const c=[],f=Rl(i.events,l);u&&(u.end=Object.assign({},f),c.push(["exit",u,i])),o.end=Object.assign({},f),c.push(["exit",o,i]),t.add(l+1,0,c)}function Rl(t,i){const l=t[i],o=l[0]==="enter"?"start":"end";return l[1][o]}const AC={name:"tasklistCheck",tokenize:jC};function wC(){return{text:{91:AC}}}function jC(t,i,l){const o=this;return u;function u(m){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?l(m):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),c)}function c(m){return Ve(m)?(t.enter("taskListCheckValueUnchecked"),t.consume(m),t.exit("taskListCheckValueUnchecked"),f):m===88||m===120?(t.enter("taskListCheckValueChecked"),t.consume(m),t.exit("taskListCheckValueChecked"),f):l(m)}function f(m){return m===93?(t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),h):l(m)}function h(m){return de(m)?i(m):Ce(m)?t.check({tokenize:DC},i,l)(m):l(m)}}function DC(t,i,l){return Me(t,o,"whitespace");function o(u){return u===null?l(u):i(u)}}function MC(t){return ly([nC(),fC(),xC(t),TC(),wC()])}const RC={};function zC(t){const i=this,l=t||RC,o=i.data(),u=o.micromarkExtensions||(o.micromarkExtensions=[]),c=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),f=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);u.push(MC(l)),c.push(WE()),f.push(KE(l))}function Vi(t){return t==null?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(Vi).join(""):typeof t=="object"&&t&&"props"in t?Vi(t.props?.children):""}function Xy(){const t=new Map,i=l=>l.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");return l=>{const o=i(l)||"section",u=t.get(o)??0;return t.set(o,u+1),u===0?o:`${o}-${u}`}}function _C(t,i=1,l=3){const o=Xy(),u=t.split(`
`);let c=!1;const f=[];for(const h of u){const m=h.trimEnd();if(m.trimStart().startsWith("```")){c=!c;continue}if(c)continue;const p=/^(#{1,6})\s+(.+?)\s*$/.exec(m);if(!p)continue;const x=p[1].length;if(x<i||x>l)continue;const y=p[2].replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_`]/g,"").trim(),S=o(y);f.push({id:S,text:y,level:x})}return f}const OC=({toc:t,activeId:i,onClickItem:l})=>t.length?g.jsx("aside",{className:"hidden min-[1180px]:block fixed top-[calc(var(--header-height)+40px)] left-[calc(50%_+_362px)] [@media_(orientation:landscape)_and_(min-width:1180px)]:left-[calc(50%_+_416px)] [@media_(orientation:landscape)_and_(min-width:1440px)]:left-[calc(50%_+_506px)] [@media_(orientation:landscape)_and_(min-width:1600px)]:left-[calc(50%_+_566px)] z-10 w-[220px] [@media_(orientation:landscape)_and_(min-width:1180px)]:w-[180px] max-h-[calc(100vh-var(--header-height)-80px)] overflow-y-auto overflow-x-hidden",children:g.jsxs("div",{className:"pl-4 pr-2 border-l border-(--border-subtle)",children:[g.jsx("div",{className:"text-[10px] font-mono tracking-[0.16em] uppercase text-fg-dimmed mb-4",children:"On this page"}),g.jsx("nav",{"aria-label":"Table of contents",children:g.jsx("ul",{className:"space-y-2",children:t.map(o=>{const u=o.id===i,c=o.level===1?"pl-0":o.level===2?"pl-3":"pl-6";return g.jsx("li",{className:c,children:g.jsxs("button",{type:"button",onClick:()=>l(o.id),className:["group relative block w-full text-left cursor-pointer","text-[13px] leading-[1.65] break-words","transition-colors duration-200","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",u?"text-(--fg-base) font-semibold":"text-gray-500 hover:text-(--fg-base)"].join(" "),"aria-current":u?"location":void 0,children:[g.jsx("span",{className:["absolute -left-[22px] top-[9px] h-1.5 w-1.5 rounded-full","bg-(--fg-base)","transition-opacity duration-200",u?"opacity-100":"opacity-0 group-hover:opacity-60"].join(" ")}),o.text]})},o.id)})})})]})}):null,vg=({dir:t})=>g.jsx("span",{className:["shrink-0 w-11 h-11 rounded-full flex items-center justify-center","border border-(--accent) text-(--accent)","bg-transparent group-hover:bg-(--accent-subtle)","transition-colors duration-300"].join(" "),children:g.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t==="left"?g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}):g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),xg=({children:t,align:i,onClick:l})=>g.jsxs("button",{type:"button",onClick:l,className:["group relative w-full overflow-hidden rounded-2xl","border border-(--border-subtle)","bg-(--bg-soft) hover:bg-(--bg-elevated)","transition-all duration-300","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",i==="left"?"text-left":"text-right"].join(" "),children:[g.jsx("span",{className:"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:g.jsx("span",{className:"absolute inset-0 bg-linear-to-r from-(--accent)/0 via-(--accent)/10 to-(--accent)/0"})}),g.jsx("div",{className:"relative p-6 cursor-pointer",children:t})]}),NC=({prevPost:t,nextPost:i,onNavigate:l})=>!t&&!i?null:g.jsx("nav",{className:"mt-16 pt-8 border-t border-(--border-subtle)",children:g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsx("div",{className:"md:col-span-1 h-[88px]",children:t?g.jsx(xg,{align:"left",onClick:()=>l(t.slug),children:g.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[g.jsx(vg,{dir:"left"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"이전 포스트"}),g.jsx("h3",{className:`\r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:t.title})]})]})}):g.jsx("div",{className:"w-full h-full"})}),g.jsx("div",{className:"md:col-span-1  h-[88px]",children:i?g.jsx(xg,{align:"right",onClick:()=>l(i.slug),children:g.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[g.jsxs("div",{className:"min-w-0 text-right",children:[g.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"다음 포스트"}),g.jsx("h3",{className:` \r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:i.title})]}),g.jsx(vg,{dir:"right"})]})}):g.jsx("div",{className:"w-full h-full"})})]})}),LC=Ag.memo(function({content:i}){const l=_.useMemo(()=>Xy(),[i]),o=_.useMemo(()=>[zC],[]),u=_.useMemo(()=>({h1:({children:c,...f})=>{const h=Vi(c),m=l(h);return g.jsx("h1",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})},h2:({children:c,...f})=>{const h=Vi(c),m=l(h);return g.jsx("h2",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})},h3:({children:c,...f})=>{const h=Vi(c),m=l(h);return g.jsx("h3",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})}}),[l]);return g.jsx(xT,{remarkPlugins:o,components:u,children:i})}),BC=()=>{const{slug:t}=Lg(),i=Jc(),l=_.useMemo(()=>Ml.find(y=>y.slug===t),[t]),o=_.useMemo(()=>l?.content??"",[l]),u=_.useMemo(()=>o?_C(o,1,3):[],[o]),{prevPost:c,nextPost:f}=_.useMemo(()=>{const y=Ml.findIndex(S=>S.slug===t);return y===-1?{prevPost:null,nextPost:null}:{prevPost:y>0?Ml[y-1]:null,nextPost:y<Ml.length-1?Ml[y+1]:null}},[t]),[h,m]=_.useState(),p=Ag.useRef(!1),x=y=>{const S=document.getElementById(y);if(!S)return;p.current=!0,m(Z=>Z===y?Z:y),history.replaceState(null,"",`#${y}`);const b=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim())||80,M=S.getBoundingClientRect().top+window.pageYOffset-b-24;window.scrollTo({top:M,behavior:"smooth"});const w=performance.now();let B=0;const L=()=>{const Z=window.scrollY;Math.abs(Z-M)<2?B+=1:B=0;const ee=performance.now()-w>2200;if(B>=3||ee){p.current=!1;return}requestAnimationFrame(L)};requestAnimationFrame(L)};return _.useEffect(()=>{if(!u.length)return;const y=()=>{const M=getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim(),w=parseFloat(M);return Number.isFinite(w)?w:80},S=24;let b=0;const E=()=>{if(b=0,p.current)return;const M=y(),w=window.scrollY+M+S+1;let B=u[0]?.id;for(const L of u){const Z=document.getElementById(L.id);if(Z)if(Z.offsetTop<=w)B=L.id;else break}m(L=>L===B?L:B)},R=()=>{b||(b=requestAnimationFrame(E))};return E(),window.addEventListener("scroll",R,{passive:!0}),window.addEventListener("resize",R),()=>{window.removeEventListener("scroll",R),window.removeEventListener("resize",R),b&&cancelAnimationFrame(b)}},[u,t]),l?g.jsxs("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) overflow-x-hidden",children:[g.jsx("div",{className:"mx-auto w-full max-w-[1140px] [@media_(orientation:landscape)_and_(min-width:1180px)]:max-w-[1300px] [@media_(orientation:landscape)_and_(min-width:1440px)]:max-w-[1436px] [@media_(orientation:landscape)_and_(min-width:1600px)]:max-w-[1556px] px-5 md:px-8 pt-[calc(var(--header-height)+48px)] pb-16",children:g.jsxs("div",{className:["grid w-full items-start",u.length?"min-[1180px]:grid-cols-[minmax(0,900px)_220px] [@media_(orientation:landscape)_and_(min-width:1180px)]:grid-cols-[minmax(0,980px)_180px] [@media_(orientation:landscape)_and_(min-width:1440px)]:grid-cols-[minmax(0,1160px)_180px] [@media_(orientation:landscape)_and_(min-width:1600px)]:grid-cols-[minmax(0,1280px)_180px] min-[1180px]:gap-8 min-[1180px]:justify-center":"grid-cols-1"].join(" "),children:[g.jsxs("article",{className:["w-full min-w-0 max-w-[820px] mx-auto",u.length?"min-[1180px]:mx-0 min-[1180px]:max-w-none":""].join(" "),children:[g.jsxs("button",{onClick:()=>i("/blog"),className:"relative z-10 mb-5 text-[13px] text-fg-muted hover:text-fg transition-colors flex items-center gap-2",children:[g.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]}),g.jsxs("div",{className:"mb-10",children:[g.jsx("h1",{className:"text-[36px] md:text-[42px] font-bold leading-tight mb-4",children:l.title}),g.jsxs("div",{className:"w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[g.jsx("div",{className:"flex flex-wrap gap-2",children:l.tags.map(y=>g.jsx("span",{className:"text-[13px] text-(--accent) px-2.5 py-1.5",children:y},y))}),g.jsx("div",{className:"text-[13px] text-fg-muted whitespace-nowrap md:text-right",children:l.date})]})]}),l.cover&&g.jsx("div",{className:"relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-(--bg-soft)",children:g.jsx("img",{src:l.cover,alt:l.title,className:"absolute inset-0 w-full h-full object-cover"})}),g.jsx("div",{className:"prose prose-invert max-w-none",children:o?g.jsx(LC,{content:o}):g.jsx("p",{className:"text-fg-muted",children:"콘텐츠가 없습니다."})}),g.jsx(NC,{prevPost:c,nextPost:f,onNavigate:y=>i(`/blog/${y}`)})]}),u.length?g.jsx("div",{"aria-hidden":"true",className:"hidden min-[1180px]:block w-[220px] [@media_(orientation:landscape)_and_(min-width:1180px)]:w-[180px]"}):null]})}),g.jsx(OC,{toc:u,activeId:h,onClickItem:x})]}):g.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) flex items-center justify-center",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h1",{className:"text-[32px] font-bold mb-4",children:"포스트를 찾을 수 없습니다"}),g.jsx("button",{onClick:()=>i("/blog"),className:"px-4 py-2 rounded-full border border-(--border-subtle) bg-(--bg-soft) hover:bg-(--bg-elevated) transition-colors duration-300",children:"블로그로 돌아가기"})]})})},Qy={performance:"Performance",animation:"Animation","web-api":"Web API",canvas:"Canvas"},UC={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},HC={beginner:"text-green-400 border-green-400/30 bg-green-500/10",intermediate:"text-blue-400 border-blue-400/30 bg-blue-500/10",advanced:"text-purple-400 border-purple-400/30 bg-purple-500/10"},IC=({experiment:t})=>{const[i,l]=_.useState(!1),o=t.component;return g.jsxs("article",{className:"rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) transition-all duration-300 ease-out overflow-hidden hover:border-(--accent-border) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",children:[g.jsxs("div",{className:"p-5 pb-0",children:[g.jsx("div",{className:"flex items-start justify-between gap-3 mb-2",children:g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[g.jsx("span",{className:"text-[11px] uppercase tracking-wider text-(--accent) font-medium",children:Qy[t.category]}),g.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full border font-medium "+HC[t.difficulty],children:UC[t.difficulty]})]}),g.jsx("h3",{className:"text-[17px] font-bold text-fg",children:t.title})]})}),g.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4",children:t.subtitle})]}),g.jsx("div",{className:"px-5 pb-5",children:g.jsx(_.Suspense,{fallback:g.jsx("div",{className:"flex items-center justify-center h-40 rounded-xl border border-(--border-subtle) bg-(--bg)",children:g.jsx("span",{className:"h-4 w-4 rounded-full border-2 border-(--accent) border-t-transparent animate-spin"})}),children:g.jsx(o,{})})}),g.jsxs("div",{className:"border-t border-(--border-subtle)",children:[g.jsxs("button",{onClick:()=>l(!i),className:"w-full flex items-center justify-between px-5 py-3 text-[12px] text-fg-muted hover:text-fg transition-colors cursor-pointer",children:[g.jsx("span",{className:"font-medium",children:i?"학습 포인트 접기":"학습 포인트 보기 (Why · How · Result)"}),g.jsx("svg",{className:"w-4 h-4 transition-transform duration-200 "+(i?"rotate-180":""),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),g.jsx("div",{className:"grid transition-all duration-300 ease-out "+(i?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"),children:g.jsx("div",{className:"overflow-hidden",children:g.jsxs("div",{className:"px-5 pb-5 space-y-3",children:[g.jsx(wc,{emoji:"💡",label:"Why",text:t.why}),g.jsx(wc,{emoji:"🛠",label:"How",text:t.how}),g.jsx(wc,{emoji:"📊",label:"Result",text:t.result}),g.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2",children:t.tags.map(u=>g.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",children:u},u))})]})})})]})]})},wc=({emoji:t,label:i,text:l})=>g.jsxs("div",{className:"flex gap-2.5",children:[g.jsx("span",{className:"text-[14px] shrink-0 mt-0.5",children:t}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[11px] font-semibold text-fg",children:i}),g.jsx("p",{className:"text-[12px] text-fg-muted leading-relaxed mt-0.5",children:l})]})]}),FC="modulepreload",qC=function(t){return"/portfolio-3D/"+t},bg={},Ft=function(i,l,o){let u=Promise.resolve();if(l&&l.length>0){let m=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");u=m(l.map(p=>{if(p=qC(p),p in bg)return;bg[p]=!0;const x=p.endsWith(".css"),y=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const S=document.createElement("link");if(S.rel=x?"stylesheet":FC,x||(S.as="script"),S.crossOrigin="",S.href=p,h&&S.setAttribute("nonce",h),document.head.appendChild(S),x)return new Promise((b,E)=>{S.addEventListener("load",b),S.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return u.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return i().catch(c)})},Ui=[{id:"web-worker",title:"Web Worker 스레드 분리",subtitle:"무거운 연산을 별도 스레드로 분리하여 UI 반응성을 유지합니다.",category:"performance",why:"메인 스레드에서 Fibonacci(45)처럼 무거운 연산을 실행하면 UI가 완전히 멈춥니다. 사용자에게 '앱이 죽었다'는 인상을 줄 수 있습니다.",how:"Web Worker를 생성하여 연산을 별도 스레드로 분리합니다. 메인 스레드는 UI 렌더링에만 집중하고, 결과는 postMessage로 수신합니다.",result:"연산 중에도 UI 애니메이션이 60fps로 유지됩니다. 메인 스레드 블로킹 0ms를 달성했습니다.",tags:["Web Worker","Threading","Performance"],difficulty:"intermediate",component:_.lazy(()=>Ft(()=>import("./FibonacciExperiment-BfLA0uOn.js"),[]))},{id:"virtual-scroll",title:"Virtual Scroll vs Naive DOM",subtitle:"10,000개 항목 렌더링 시 전체 DOM 생성 vs 뷰포트만 렌더링 비교.",category:"performance",why:"대량 데이터를 리스트로 표시할 때 모든 DOM 노드를 한번에 생성하면 초기 렌더링이 느려지고 스크롤 성능도 저하됩니다.",how:"Virtual Scroll은 현재 뷰포트에 보이는 항목(~10개)만 실제 DOM으로 렌더링하고, 스크롤 위치에 따라 absolute 포지션으로 요소를 재배치합니다.",result:"10,000개 항목 기준 Naive DOM 대비 초기 렌더링 시간이 90% 이상 감소하며, 스크롤 시에도 일정한 DOM 노드 수를 유지합니다.",tags:["Virtual Scroll","DOM","Rendering"],difficulty:"intermediate",component:_.lazy(()=>Ft(()=>import("./VirtualScrollExperiment-qdl7yUJ5.js"),[]))},{id:"debounce-throttle",title:"Debounce vs Throttle",subtitle:"이벤트 호출 빈도를 제어하는 두 가지 전략을 체감 비교합니다.",category:"performance",why:"키 입력, 스크롤, 리사이즈 등 고빈도 이벤트를 그대로 처리하면 불필요한 연산과 API 호출이 급증합니다.",how:"Debounce는 마지막 이벤트 후 일정 시간이 지나야 실행하고, Throttle은 일정 간격마다 최대 1회 실행합니다. 검색 입력 시뮬레이션으로 차이를 시각화합니다.",result:"같은 입력에 대해 None은 ~50회, Throttle은 ~8회, Debounce는 1회 호출로 줄어듭니다. 용도에 따라 적합한 전략이 다릅니다.",tags:["Debounce","Throttle","Event Optimization"],difficulty:"beginner",component:_.lazy(()=>Ft(()=>import("./DebounceThrottleExperiment-rgYVMffX.js"),[]))},{id:"intersection-observer",title:"Intersection Observer",subtitle:"요소가 뷰포트에 진입/이탈할 때를 감지하는 모던 Web API 체험.",category:"web-api",why:"scroll 이벤트로 요소 가시성을 판단하면 매 프레임마다 getBoundingClientRect를 호출해 리플로우가 발생합니다.",how:"IntersectionObserver는 브라우저 네이티브 레벨에서 교차 감지를 수행하여 메인 스레드 부하가 거의 없습니다. threshold를 조절해 진입 비율별 반응을 설정할 수 있습니다.",result:"scroll 이벤트 대비 CPU 사용량이 대폭 감소하며, Lazy Loading과 무한 스크롤의 기반 API로 실무에서 필수적입니다.",tags:["IntersectionObserver","Lazy Loading","Web API"],difficulty:"beginner",component:_.lazy(()=>Ft(()=>import("./IntersectionObserverExperiment-BISkaIam.js"),[]))},{id:"spring-physics",title:"스프링 물리 시뮬레이션",subtitle:"Stiffness와 Damping으로 스프링 역학을 실시간 체험합니다.",category:"animation",why:"CSS transition의 linear/ease만으로는 물리적으로 자연스러운 모션을 구현하기 어렵습니다. 스프링 모델은 실제 물리 법칙을 기반으로 탄성적인 애니메이션을 만듭니다.",how:"매 프레임마다 F = -kx - cv (스프링력 + 감쇠력)를 계산하고, 오일러 적분으로 위치를 업데이트합니다. requestAnimationFrame 루프로 60fps 시뮬레이션을 구현합니다.",result:"Stiffness와 Damping 조합에 따라 부드러운 이동, 탄력적 바운스, 즉각적인 스냅 등 다양한 모션 특성을 구현할 수 있습니다.",tags:["Spring Physics","Animation","requestAnimationFrame"],difficulty:"intermediate",component:_.lazy(()=>Ft(()=>import("./SpringPhysicsExperiment-BerkX5nA.js"),[]))},{id:"flip-animation",title:"FLIP 애니메이션 원리",subtitle:"레이아웃 변경 시 First→Last→Invert→Play로 부드러운 전환을 구현합니다.",category:"animation",why:"DOM 순서가 바뀌면 브라우저는 즉시 새 위치에 요소를 배치합니다. 사용자는 갑작스러운 점프를 경험하게 되어 UX가 저하됩니다.",how:"변경 전 위치(First)를 저장하고, DOM 변경 후 새 위치(Last)를 측정합니다. 차이값으로 transform을 적용(Invert)한 뒤 transition으로 원위치시킵니다(Play).",result:"reflow를 최소화하면서 레이아웃 변경을 60fps 애니메이션으로 표현합니다. React 리스트 셔플에 적용하면 자연스러운 재정렬 효과를 얻습니다.",tags:["FLIP","Layout Animation","getBoundingClientRect"],difficulty:"advanced",component:_.lazy(()=>Ft(()=>import("./FlipAnimationExperiment-mQXOf1wn.js"),[]))},{id:"clipboard-dragdrop",title:"Clipboard API + Drag & Drop",subtitle:"이미지 붙여넣기와 파일 드래그 업로드를 DataTransfer API로 구현합니다.",category:"web-api",why:"파일 업로드는 <input type='file'>만으로는 사용자 경험이 제한적입니다. 클립보드 붙여넣기와 드래그 앤 드롭은 현대 웹 앱의 필수 인터랙션입니다.",how:"onPaste 이벤트의 clipboardData와 onDrop 이벤트의 dataTransfer에서 File 객체를 추출합니다. 이미지 파일은 URL.createObjectURL로 미리보기를 생성합니다.",result:"두 가지 입력 방식의 DataTransfer API 동작 원리를 체험하고, 파일 타입별 처리 방법을 확인할 수 있습니다.",tags:["Clipboard API","Drag & Drop","DataTransfer","File API"],difficulty:"beginner",component:_.lazy(()=>Ft(()=>import("./ClipboardDragDropExperiment-B05yiq16.js"),[]))},{id:"canvas-particle",title:"Canvas 파티클 시스템",subtitle:"마우스를 따라다니는 파티클을 Canvas API로 렌더링합니다.",category:"canvas",why:"DOM 기반으로 수백 개의 요소를 애니메이션하면 reflow/repaint 비용이 기하급수적으로 증가합니다. Canvas는 픽셀 단위 렌더링으로 이를 해결합니다.",how:"requestAnimationFrame 루프에서 파티클의 위치/속도/수명을 업데이트하고, Canvas 2D 컨텍스트로 그립니다. 트레일 효과는 반투명 사각형으로 이전 프레임을 덮어 구현합니다.",result:"200+ 파티클을 60fps로 렌더링하며, 파티클 수와 트레일 강도를 조절해 성능 변화를 실시간으로 모니터링할 수 있습니다.",tags:["Canvas API","Particle System","requestAnimationFrame"],difficulty:"intermediate",component:_.lazy(()=>Ft(()=>import("./CanvasParticleExperiment-BRMrM1vC.js"),[]))},{id:"svg-morph",title:"SVG Path 모핑",subtitle:"도형 간 부드러운 변환을 점 보간 알고리즘으로 구현합니다.",category:"canvas",why:"SVG 도형 간 전환은 CSS transition만으로 처리할 수 없습니다. path의 d 속성은 문자열이라 보간이 불가능하기 때문입니다.",how:"각 도형을 동일한 수(32개)의 점으로 샘플링한 뒤, 대응하는 점끼리 lerp(선형 보간)합니다. easeInOutCubic 이징으로 자연스러운 가속/감속을 적용합니다.",result:"원, 사각형, 별, 삼각형 간 매끄러운 모핑 전환을 구현합니다. 수동 진행도 조절로 중간 형태를 관찰할 수 있습니다.",tags:["SVG","Path Morphing","Interpolation","Animation"],difficulty:"advanced",component:_.lazy(()=>Ft(()=>import("./SvgMorphExperiment-aaQgipLT.js"),[]))}],VC=["all","performance","animation","web-api","canvas"],GC="relative min-h-screen pt-[calc(var(--header-height)+56px)] pb-24 px-5 overflow-hidden",PC="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(125,211,252,0.16),transparent_60%),radial-gradient(800px_420px_at_80%_30%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_360px_at_50%_85%,rgba(34,197,94,0.10),transparent_60%)] [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]",YC="inline-flex items-center rounded-full border border-(--border-subtle) bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted [html[data-theme='light']_&]:bg-[#f5f5fb]",JC="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted",XC=()=>{const[t,i]=_.useState("all"),l=t==="all"?Ui:Ui.filter(u=>u.category===t),o=VC.filter(u=>u==="all"||Ui.some(c=>c.category===u));return g.jsxs("main",{className:GC,children:[g.jsx("div",{className:PC}),g.jsxs("div",{className:"max-w-(--content-max-w) mx-auto relative",children:[g.jsxs("section",{className:"text-center mb-12",children:[g.jsx("div",{className:"flex justify-center mb-4",children:g.jsxs("span",{className:`${YC} gap-2`,children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-(--accent)"}),g.jsx("span",{className:JC,children:"Lab"})]})}),g.jsx("h1",{className:"text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] mb-4",children:"프론트엔드 실험실"}),g.jsxs("p",{className:"text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-lg mx-auto",children:['"왜?"를 묻고, 직접 만들어보며 답을 찾습니다.',g.jsx("br",{className:"md:block"}),"각 실험을 직접 조작해 보세요."]})]}),g.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-10",children:o.map(u=>{const c=t===u,f=u==="all"?"전체":Qy[u],h=u==="all"?Ui.length:Ui.filter(m=>m.category===u).length;return g.jsxs("button",{onClick:()=>i(u),className:"px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 border cursor-pointer "+(c?"bg-(--accent-subtle) text-(--accent) border-(--accent-border)":"text-fg-muted border-transparent hover:text-fg hover:bg-(--bg-soft)"),children:[f,g.jsx("span",{className:"ml-1.5 text-[11px] opacity-60",children:h})]},u)})}),g.jsx("div",{className:"grid gap-6 max-w-4xl mx-auto",children:l.map(u=>g.jsx(IC,{experiment:u},u.id))}),l.length===0&&g.jsx("div",{className:"text-center text-fg-muted text-[14px] py-20",children:"해당 카테고리에 실험이 아직 없습니다."})]})]})},Sg=[{to:"/",label:"Profile"},{to:"/projects",label:"Projects"},{to:"/about",label:"About"},{to:"/resume",label:"Resume"}],kg=[{to:"/blog",label:"Blog"},{to:"/lab",label:"Lab"}],jc={background:"none",border:0,padding:"8px 12px",borderRadius:8,fontSize:13,fontFamily:"var(--sans)",color:"var(--fg-muted)",cursor:"pointer",transition:"all .25s ease"},Dc={color:"var(--fg)",background:"var(--bg-soft)"},QC=({theme:t,onToggleTheme:i})=>{const o=ct().pathname==="/contact",[u,c]=_.useState(!1),f=[...Sg,...kg,{to:"/contact",label:"Contact"}];return g.jsxs("header",{className:"wire-header",style:{position:"fixed",top:0,left:0,right:0,height:"var(--header-h)",zIndex:100,backdropFilter:"blur(18px) saturate(140%)",WebkitBackdropFilter:"blur(18px) saturate(140%)",background:"color-mix(in oklab, var(--bg) 75%, transparent)",borderBottom:"1px solid color-mix(in oklab, var(--border) 60%, transparent)"},children:[g.jsxs("div",{className:"wire-header-inner",style:{maxWidth:"var(--content-max)",margin:"0 auto",height:"100%",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16},children:[g.jsx(gn,{className:"wire-header-brand",to:"/",style:{fontFamily:"var(--mono)",fontSize:12,fontWeight:600,letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--fg-muted)",textDecoration:"none"},onMouseEnter:h=>h.currentTarget.style.color="var(--accent)",onMouseLeave:h=>h.currentTarget.style.color="var(--fg-muted)",children:"FRONTEND · UX"}),g.jsxs("nav",{className:"wire-header-nav",style:{display:"flex",gap:4,alignItems:"center",fontSize:13},children:[Sg.map(h=>g.jsx(wo,{className:"wire-header-link",to:h.to,end:h.to==="/",style:({isActive:m})=>({...jc,...m?Dc:{},textDecoration:"none"}),children:h.label},h.to)),g.jsx("span",{style:{color:"var(--fg-dim)",margin:"0 4px",opacity:.5},children:"·"}),kg.map(h=>g.jsx(wo,{className:"wire-header-link",to:h.to,style:({isActive:m})=>({...jc,...m?Dc:{},textDecoration:"none"}),children:h.label},h.to))]}),g.jsxs("div",{className:"wire-header-actions",style:{display:"flex",gap:8,alignItems:"center"},children:[g.jsx("button",{onClick:i,"aria-label":"Toggle theme",style:{width:36,height:36,borderRadius:9,border:"1px solid var(--border)",background:"var(--bg-elevated)",color:"var(--fg-muted)",display:"grid",placeItems:"center",cursor:"pointer",transition:"all .25s"},children:t==="dark"?g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.4 8.4 0 01-5.91-2.82 8.07 8.07 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.32 10.32 0 00-6.32 10.21 10.48 10.48 0 007.04 8.99c.94.32 1.92.5 2.89.55h.48a10.5 10.5 0 008.47-4.27c.67-.93.49-1.52.32-1.79z"})}):g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"})})}),g.jsx(gn,{className:"wire-header-contact",to:"/contact",style:{padding:"8px 16px",borderRadius:9,border:"1px solid var(--border)",background:o?"var(--accent-soft)":"var(--bg-elevated)",color:o?"var(--accent)":"var(--fg-muted)",borderColor:o?"var(--accent)":"var(--border)",fontSize:13,transition:"all .25s",textDecoration:"none"},children:"Contact →"}),g.jsx("button",{className:"wire-header-menu-button",type:"button","aria-label":"Toggle navigation","aria-expanded":u,onClick:()=>c(h=>!h),children:u?g.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:g.jsx("path",{d:"M6 6l12 12M18 6L6 18"})}):g.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:g.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"})})})]})]}),u&&g.jsx("nav",{className:"wire-header-mobile-nav","aria-label":"Mobile navigation",children:f.map(h=>g.jsx(wo,{to:h.to,end:h.to==="/",onClick:()=>c(!1),style:({isActive:m})=>({...jc,...m?Dc:{},textDecoration:"none"}),children:h.label},h.to))})]})},Tg={home:{tx:0,ty:0,sc:1,rot:0,intensity:1},projects:{tx:-160,ty:40,sc:.85,rot:-12,intensity:.8},detail:{tx:140,ty:-50,sc:1.2,rot:18,intensity:1.1},about:{tx:-80,ty:80,sc:1.05,rot:28,intensity:.7},contact:{tx:0,ty:-90,sc:.7,rot:-8,intensity:1.3},resume:{tx:180,ty:60,sc:.9,rot:35,intensity:.65},blog:{tx:-200,ty:-60,sc:1.1,rot:-22,intensity:.85}},Hi=(t,i,l)=>t+(i-t)*l,Eg=[{rx:130,ry:46,period:9,phase:0,size:4.5,color:"var(--accent-hi)"},{rx:220,ry:78,period:16,phase:1.3,size:6,color:"var(--accent)"},{rx:330,ry:116,period:26,phase:2.4,size:5,color:"var(--accent-hi)"},{rx:460,ry:162,period:42,phase:4.1,size:7.5,color:"var(--accent)"},{rx:600,ry:210,period:64,phase:5.7,size:4,color:"var(--accent-hi)"}],ZC=Array.from({length:120},(t,i)=>({x:i*263.4%1600,y:i*137.7%900,size:.4+i*7%10/14,twinkleSpeed:.4+i*11%10/12,twinklePhase:i*.41%(Math.PI*2)})),WC=({page:t,scrollY:i=0,mouse:l={x:0,y:0}})=>{const o=Tg[t]||Tg.home,u=_.useRef({...o}),c=_.useRef(0),[,f]=_.useState(0);_.useEffect(()=>{let R=!0,M=performance.now();const w=B=>{if(!R)return;const L=Math.min(.05,(B-M)/1e3);M=B,c.current+=L;const Z=u.current;u.current={tx:Hi(Z.tx,o.tx,.045),ty:Hi(Z.ty,o.ty,.045),sc:Hi(Z.sc,o.sc,.04),rot:Hi(Z.rot,o.rot,.04),intensity:Hi(Z.intensity,o.intensity,.04)},f(ee=>(ee+1)%1e6),requestAnimationFrame(w)};return requestAnimationFrame(w),()=>{R=!1}},[o]);const h=c.current,m=u.current,p={x:Math.sin(h*.18)*14+l.x*28,y:Math.cos(h*.22)*10+l.y*18,r:Math.sin(h*.08)*2.5},x=i*.06,y=m.tx+p.x,S=m.ty+p.y-x,b=m.rot+p.r+h*1.2,E=1+Math.sin(h*1.4)*.06;return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"world-stage",children:g.jsxs("svg",{className:"world-svg",viewBox:"0 0 1600 900",preserveAspectRatio:"xMidYMid slice",children:[g.jsxs("defs",{children:[g.jsxs("radialGradient",{id:"coreGlow",cx:"50%",cy:"50%",r:"50%",children:[g.jsx("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:.55*m.intensity}),g.jsx("stop",{offset:"50%",stopColor:"var(--accent)",stopOpacity:.1*m.intensity}),g.jsx("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"})]}),g.jsxs("radialGradient",{id:"coreInner",children:[g.jsx("stop",{offset:"0%",stopColor:"var(--accent-hi)",stopOpacity:m.intensity}),g.jsx("stop",{offset:"60%",stopColor:"var(--accent)",stopOpacity:.6*m.intensity}),g.jsx("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"})]}),g.jsxs("linearGradient",{id:"ringGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[g.jsx("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"0"}),g.jsx("stop",{offset:"50%",stopColor:"var(--accent-hi)",stopOpacity:.7*m.intensity}),g.jsx("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"})]}),g.jsx("filter",{id:"blurSoft",children:g.jsx("feGaussianBlur",{stdDeviation:"3"})}),g.jsx("filter",{id:"blurStrong",children:g.jsx("feGaussianBlur",{stdDeviation:"8"})})]}),g.jsx("g",{children:ZC.map((R,M)=>{const w=.3+(Math.sin(h*R.twinkleSpeed+R.twinklePhase)*.5+.5)*.6;return g.jsx("circle",{cx:R.x+y*.12,cy:R.y+S*.12,r:R.size,fill:"var(--accent-hi)",opacity:w*.55*m.intensity},M)})}),g.jsx("circle",{cx:800+y,cy:450+S,r:420*m.sc*E,fill:"url(#coreGlow)"}),g.jsxs("g",{opacity:.14*m.intensity,stroke:"var(--accent)",strokeWidth:"0.5",fill:"none",children:[Array.from({length:10}).map((R,M)=>g.jsx("line",{x1:M/9*1600+y*.15,y1:0,x2:M/9*1600+y*.45,y2:900},M)),Array.from({length:7}).map((R,M)=>g.jsx("line",{x1:0,y1:M/6*900+S*.15,x2:1600,y2:M/6*900+S*.45},"h"+M))]}),g.jsxs("g",{transform:`translate(${800+y}, ${450+S}) scale(${m.sc}) rotate(${b})`,children:[g.jsx("g",{transform:`rotate(${h*6})`,children:g.jsx("ellipse",{cx:"0",cy:"0",rx:"600",ry:"210",stroke:"url(#ringGrad)",strokeWidth:"1.2",fill:"none"})}),g.jsx("g",{transform:`rotate(${-h*3})`,children:g.jsx("ellipse",{cx:"0",cy:"0",rx:"460",ry:"162",stroke:"var(--accent)",strokeWidth:"0.7",fill:"none",opacity:.3*m.intensity,strokeDasharray:"2 10"})}),g.jsx("g",{transform:`rotate(${h*4})`,children:g.jsx("ellipse",{cx:"0",cy:"0",rx:"330",ry:"116",stroke:"var(--accent)",strokeWidth:"0.8",fill:"none",opacity:.4*m.intensity,strokeDasharray:"6 4"})}),Eg.map((R,M)=>g.jsx("ellipse",{cx:"0",cy:"0",rx:R.rx,ry:R.ry,stroke:"var(--accent)",strokeWidth:"0.4",fill:"none",opacity:.18*m.intensity,strokeDasharray:"1 3"},"og"+M)),Eg.map((R,M)=>{const w=R.phase+h*Math.PI*2/R.period,B=Math.cos(w)*R.rx,L=Math.sin(w)*R.ry,Z=18,ee=Array.from({length:Z},(W,fe)=>{const ue=w-fe/Z*.6;return[Math.cos(ue)*R.rx,Math.sin(ue)*R.ry]}),F=1+Math.sin(h*(1+M*.3)+M)*.18;return g.jsxs("g",{children:[g.jsx("polyline",{points:ee.map(W=>`${W[0]},${W[1]}`).join(" "),fill:"none",stroke:R.color,strokeWidth:"1.2",opacity:.45*m.intensity,strokeLinecap:"round"}),g.jsx("circle",{cx:B,cy:L,r:R.size*4,fill:R.color,opacity:.3*m.intensity,filter:"url(#blurStrong)"}),g.jsx("circle",{cx:B,cy:L,r:R.size*F,fill:R.color,opacity:.95*m.intensity})]},"orb"+M)}),g.jsxs("g",{transform:`rotate(${-h*18}) scale(${E})`,opacity:.95*m.intensity,children:[g.jsx("polygon",{points:"0,-90 78,-26 48,68 -48,68 -78,-26",stroke:"var(--accent-hi)",strokeWidth:"1.4",fill:"var(--accent-soft)"}),g.jsx("polygon",{points:"0,-90 -78,-26 -48,68 48,68 78,-26",stroke:"var(--accent)",strokeWidth:"1",fill:"none",opacity:"0.6"}),g.jsx("line",{x1:"0",y1:"-90",x2:"0",y2:"68",stroke:"var(--accent)",strokeWidth:"0.6",opacity:"0.5"}),g.jsx("line",{x1:"-78",y1:"-26",x2:"78",y2:"-26",stroke:"var(--accent)",strokeWidth:"0.6",opacity:"0.5"}),g.jsx("line",{x1:"-48",y1:"68",x2:"48",y2:"68",stroke:"var(--accent)",strokeWidth:"0.6",opacity:"0.4"})]}),g.jsx("circle",{cx:"0",cy:"0",r:36*E,fill:"url(#coreInner)",filter:"url(#blurSoft)"}),g.jsx("circle",{cx:"0",cy:"0",r:5+Math.sin(h*3)*1.2,fill:"var(--accent-hi)",opacity:m.intensity}),[0,1,2].map(R=>{const M=(h*.6+R/3)%1,w=80+M*480,B=(1-M)*.35*m.intensity;return g.jsx("circle",{cx:"0",cy:"0",r:w,stroke:"var(--accent-hi)",strokeWidth:"0.8",fill:"none",opacity:B},"pulse"+R)}),Array.from({length:50}).map((R,M)=>{const w=M*137.5%1,B=M*89.3%1,L=(w-.5)*1500,Z=(B-.5)*850,ee=M*17%10/10,F=L+Math.sin(h*(.2+ee*.3)+M)*14,W=Z+Math.cos(h*(.18+ee*.2)+M*1.3)*10,fe=.5+M*7%10/12,ue=.3+(Math.sin(h*1.2+M*.7)*.5+.5)*.4;return g.jsx("circle",{cx:F,cy:W,r:fe,fill:"var(--accent)",opacity:ue*.4},"p"+M)})]})]})}),g.jsx("div",{className:"world-grain"}),g.jsx("div",{className:"world-vignette"})]})},KC=[{num:"01",path:"/",label:"Profile"},{num:"02",path:"/projects",label:"Projects"},{num:"03",path:"/about",label:"About"},{num:"04",path:"/resume",label:"Resume"},{num:"05",path:"/blog",label:"Writing"},{num:"06",path:"/contact",label:"Contact"}],$C=()=>{const t=ct(),i=Jc();if(t.pathname.startsWith("/projects/")&&t.pathname!=="/projects")return null;const o=u=>u==="/"?t.pathname==="/":t.pathname.startsWith(u);return g.jsx("div",{className:"trail",children:KC.map(u=>g.jsxs("div",{className:"stop"+(o(u.path)?" on":""),onClick:()=>i(u.path),children:[u.num,g.jsx("span",{className:"tip",children:u.label})]},u.path))})},eA="/portfolio-3D/assets/banner-DP2kVVDA.png",nA={id:"llm-lstm-bert",banner:eA,title:"리뷰 왓수다 (감성 분석 & 평점 예측)",subTitle:"리뷰 왓수다",subtitle:"SNS/포털 영화 리뷰 감성 분석 및 평점 예측 AI 서비스",summary:"자연어 처리(NLP)와 딥러닝(LSTM/BERT)을 활용하여 텍스트 리뷰의 감성을 분석하고 평점을 예측하는 AI 모델을 개발했습니다. 정형화되지 않은 SNS 리뷰 데이터의 가치를 재발견했습니다.",tags:["Python","TensorFlow","KoNLPy","BERT","Selenium"],links:[],period:"2022.09 – 2022.12",team:"AI Developer 2명, Data Analyst 1명",overview:"단순 별점만으로는 알 수 없는 구체적인 영화 평가를 분석하기 위해 시작된 프로젝트입니다. 네이버 영화 리뷰뿐만 아니라 유튜브, 인스타그램 등 평점 시스템이 없는 SNS의 텍스트 리뷰를 크롤링하여, LSTM과 BERT 모델을 통해 감성(긍정/부정)을 분류하고 예상 평점을 도출하는 시스템을 구축했습니다.",why:[{title:"Why NLP? (KoNLPy & Okt)",desc:"한글은 조사와 어미가 발달한 교착어이므로, 단순 띄어쓰기 기준 토큰화로는 의미 파악이 어렵습니다. 형태소 분석기(Okt)를 도입하여 불용어를 제거하고 실질 형태소만 추출함으로써 모델의 학습 효율을 극대화했습니다."},{title:"Why Hybrid Model? (LSTM & BERT)",desc:"순차적 데이터 처리에 강한 LSTM으로 가벼운 초기 모델을 구축하고, 문맥 양방향 이해도가 높은 BERT(KoBERT)를 도입하여 복잡한 구어체 리뷰의 감성 분류 정확도를 높이는 비교 연구를 수행했습니다."}],role:{percentage:"40% (Data Engineering & Model Training)",tasks:["데이터 파이프라인 구축: Selenium을 활용한 네이버 영화/SNS 리뷰 크롤링 및 CSV 데이터셋(200,000+) 구축","데이터 전처리(Preprocessing): 중복/결측치 제거, 정규 표현식을 이용한 특수문자 정제, KoNLPy 활용 형태소 분석 및 불용어 처리","LSTM 모델 설계 및 학습: Keras Tokenizer를 이용한 정수 인코딩, Padding 처리, 임베딩 레이어 및 LSTM 레이어 구성","성능 최적화: 리뷰 길이 분포 분석을 통한 최적 max_len 설정, 과적합(Overfitting) 방지를 위한 Dropout 및 Early Stopping 적용"]},troubleshooting:[{title:"데이터 불균형으로 인한 예측 편향(Bias) 문제 해결",problem:"초기 모델 학습 시, 긍정 리뷰(평점 8~10점)가 압도적으로 많아 모델이 무조건 '긍정'으로 예측하는 경향(Overfitting) 발생.",cause:"영화 리뷰 데이터 특성상 고평점 리뷰가 저평점보다 3배 이상 많은 'Class Imbalance' 상태였음.",solution:"Oversampling(SMOTE) 대신 데이터의 현실성을 유지하기 위해 Undersampling 기법을 적용하여 라벨별 비율을 1:1로 맞추고, 평점 구간을 1~10에서 1~5로 축소(Binning)하여 클래스 간 경계를 명확히 함.",learning:"모델의 아키텍처만큼이나 '데이터의 질과 분포'가 성능에 결정적인 영향을 미친다는 것을 체감함."},{title:"OOV(Out-Of-Vocabulary) 문제와 임베딩 품질 저하",problem:"신조어나 오타가 많은 SNS 리뷰 특성상, 학습된 단어 사전에 없는 단어(OOV)가 많아 모델의 정확도가 떨어짐.",cause:"기존 형태소 분석기 사전이 최신 인터넷 용어(예: '존잼', '노잼', '핵노잼')를 제대로 인식하지 못함.",solution:"Soynlp와 같은 비지도 학습 기반 토크나이저를 검토했으나, 데이터양의 한계로 사용자 지정 사전(User Dictionary)에 빈도수 높은 신조어를 수동으로 추가하여 형태소 분석기의 커버리지를 넓힘.",learning:"도메인 특화 데이터(SNS 리뷰)를 다룰 때는 범용 라이브러리에만 의존하지 않고, 데이터 특성에 맞는 전처리 커스터마이징이 필수적임을 배움."}],results:["LSTM 모델 정확도 85% 달성 (기존 베이스라인 대비 15% 향상)","평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 모델 구축","비정형 데이터(댓글)의 시각화를 통해 영화 마케팅 인사이트 도출 가능성 확인"],images:[],highlights:[{value:"85%",label:"모델 정확도"},{value:"200K+",label:"학습 데이터"},{value:"15%",label:"성능 향상"}],techDecisions:[{tech:"Python",reason:"ML/DL 생태계(TensorFlow, KoNLPy)의 주력 언어"},{tech:"BERT",reason:"문맥 양방향 이해도가 높아 구어체 리뷰의 감성 분류 정확도 극대화"},{tech:"Selenium",reason:"네이버·유튜브·인스타그램 등 동적 페이지의 리뷰 크롤링"}]},tA=Object.freeze(Object.defineProperty({__proto__:null,llmProject:nA},Symbol.toStringTag,{value:"Module"})),rA="/portfolio-3D/assets/banner-CHMNdFhc.png",lA={id:"mogang",banner:rA,title:"모강(SW 강의용 다나와 서비스)",subTitle:"모강",subtitle:"SW 강의용 다나와 서비스 (강의 비교 플랫폼)",summary:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위해 1000+개의 강의 데이터를 수집·비교하는 플랫폼입니다. 2024학년도 후배들을 대상으로 배포하여 50+명의 긍정적인 반응을 얻었습니다.",tags:["Next.js","TypeScript","SSR","Styled-Components"],links:[],period:"2023.9 ~ 2024.03",team:"Frontend 1명, Backend 1명, 기획 2명, Designer 1명",overview:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위한 'SW 강의용 다나와' 서비스입니다. 1000개 이상의 방대한 강의 데이터를 효율적으로 처리하고 비교하기 위해 Next.js(SSR)를 도입했습니다. 실제 교내 후배들을 대상으로 서비스를 제공하여 50명 이상의 유저로부터 긍정적인 피드백을 도출했습니다.",why:[{title:"Why Next.js? (SSR 도입)",desc:"1000개 이상의 강의 데이터를 처리하는 데 있어 클라이언트 사이드 렌더링(CSR)보다 서버 사이드 렌더링(SSR) 방식이 초기 로딩 속도와 검색 엔진 최적화(SEO) 측면에서 효율적이라 판단했습니다."},{title:"성장과 학습",desc:"CSR과 SSR의 차이를 이론을 넘어 직접 구현하며 비교해보고 싶었습니다. SSR이 모던 웹의 주요 렌더링 방식으로 떠오름에 따라, 기존 React 기반 지식과 비교하며 기술적 성장을 이루고자 했습니다."}],role:{percentage:"100% (Frontend Lead)",tasks:["Next.js 기반 SSR 아키텍처 설계: 초기 페이지 SSR 렌더링으로 SEO 및 LCP(Largest Contentful Paint) 최적화","SEO 및 성능 최적화: getServerSideProps, next/head 활용 메타 태그 동적 구성, Code Splitting(dynamic import) 및 next/image로 Lighthouse 90점+ 달성","추천 알고리즘 기반 렌더링: 유저 프로필/로그 기반 추천 리스트 UI 구현 및 Context API를 활용한 전역 상태 관리로 Props Drilling 해결","UI/UX 고도화: Atomic Design 패턴 일부 도입으로 컴포넌트 재사용성 강화, Skeleton UI 및 Framer-Motion 애니메이션 적용","반응형 웹 및 크로스 브라우징: Styled-Components 활용, viewport-units-buggyfill로 모바일(iOS/Android) 뷰포트 이슈 해결"]},troubleshooting:[{title:"무한 스크롤 중복 호출(Race Condition) 이슈 해결",problem:"스크롤이 하단에 도달할 때 데이터 로딩 중임에도 fetchNextPage()가 중복 호출되어, 불필요한 API 요청과 UI 중복 렌더링 발생. 특히 네트워크가 느리거나 Skeleton UI가 작을 때 심화됨.",cause:"react-infinite-scroll-component 라이브러리의 내부 스크롤 이벤트 감지 속도가 상태 업데이트(loading state)보다 빨라, 로딩 상태가 true로 변하기 전에 이벤트가 다시 트리거되는 Race Condition 발생.",solution:"1차로 isLoading 플래그를 도입해 중복 실행을 Guard Clause로 차단하고, 2차로 IntersectionObserver를 직접 구현하여 DOM 요소의 가시성(Visibility)을 정밀하게 감지하는 방식으로 제어권을 확보.",learning:"라이브러리에 의존하기보다 내부 동작 원리(DOM 감지 등)를 이해하는 것이 중요함을 깨달음. 비동기 상태 관리 시 Race Condition 위험을 인지하고 IntersectionObserver를 직접 다루며 제어 경험을 쌓음."}],results:["2023년 창업 동아리 캡스톤 디자인 평가 5위 (전체 25개 팀 중)","교내 소학회 내 소스코드 오픈 및 웹 개발 스터디 교재로 활용 (지식 공유)","실제 후배 50+명 대상 베타 테스트 진행 및 긍정적 반응 도출"],images:[],highlights:[{value:"1000+",label:"강의 데이터"},{value:"50+",label:"실사용자"},{value:"90+",label:"Lighthouse 점수"}],techDecisions:[{tech:"Next.js",reason:"1000+ 강의 데이터의 SSR 처리로 초기 로딩 속도와 SEO 최적화"},{tech:"TypeScript",reason:"대규모 데이터 타입 안정성과 IDE 자동완성으로 개발 생산성 향상"},{tech:"SSR",reason:"CSR 대비 초기 로딩 속도 개선 및 검색 엔진 최적화"}]},iA=Object.freeze(Object.defineProperty({__proto__:null,mogangProject:lA},Symbol.toStringTag,{value:"Module"})),aA="/portfolio-3D/assets/banner-DIUHLUxm.png",oA={id:"p2p-service",banner:aA,title:"Multi-Client FTP Server",subTitle:"P2P Service",subtitle:"리눅스 시스템 콜 기반의 동시성 파일 전송 서버",summary:"C언어와 리눅스 시스템 콜을 직접 활용하여 다중 접속을 지원하는 FTP 서버입니다. Fork 기반 멀티프로세싱과 파일 락(Flock)을 통해 데이터 무결성을 보장하는 동시성 제어를 구현했습니다.",tags:["C","Linux","Socket Programming","System Call","Multi-Processing"],links:[],period:"2023.09 ~ 2023.12",team:"Individual (100%)",overview:"네트워크 프로그래밍의 핵심인 소켓(Socket)과 리눅스 시스템 콜(System Call)을 깊이 있게 이해하기 위해 시작된 프로젝트입니다. 단순 1:1 전송을 넘어, `fork()`를 활용해 여러 클라이언트가 동시에 접속하여 파일을 업로드/다운로드할 수 있는 환경을 구축했고, 이 과정에서 발생하는 경쟁 상태(Race Condition)를 제어하기 위한 동기화 메커니즘을 설계했습니다.",why:[{title:"Why Low-Level Implementation?",desc:"고수준 라이브러리 없이 `open`, `read`, `write`, `socket` 등 커널 수준의 시스템 콜을 직접 다루며 OS가 I/O와 네트워크를 처리하는 방식을 근본적으로 이해하고자 했습니다."},{title:"Why Multi-Processing?",desc:"단일 프로세스 모델의 한계를 극복하고, 다수의 클라이언트 요청을 병렬적으로 처리하기 위해 `fork()`를 통한 자식 프로세스 생성 방식을 채택하여 독립적인 세션을 보장했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처: TCP/IP 기반의 연결 지향형 통신 구현 (Bind, Listen, Accept, Connect)","동시성 처리 (Concurrency): `fork()` 시스템 콜을 활용한 다중 클라이언트 접속 처리 및 좀비 프로세스 방지(`waitpid`)","동기화 및 무결성: `flock`을 활용한 파일 잠금(Reader/Writer Lock) 메커니즘 구현으로 데이터 손상 방지","프로토콜 설계 및 기능 구현: 로그인 인증, 파일 리스트(ls), 업로드/다운로드, 삭제 등 커스텀 FTP 명령어 처리 로직 개발","예외 처리 및 시그널 핸들링: `SIGINT` 등 시그널 포착을 통한 안전한 서버/클라이언트 종료 처리"]},troubleshooting:[{title:"동시 파일 접근 시 데이터 무결성 훼손 (Race Condition)",problem:"여러 클라이언트가 동시에 같은 파일에 업로드하거나 삭제를 시도할 때, 파일 내용이 뒤섞이거나 손상되는 경쟁 상태가 발생함.",cause:"운영체제 레벨에서 파일 디스크립터에 대한 동시 접근 제어가 기본적으로 보장되지 않아, Critical Section에 대한 보호 장치가 부재했음.",solution:"`flock()` 시스템 콜을 도입하여 파일 접근 시 Advisory Lock을 걸도록 구현. 쓰기 작업 시에는 Exclusive Lock(배타적 잠금)을, 읽기 시에는 Shared Lock(공유 잠금)을 적용하여 동시성을 제어함.",learning:"멀티 프로세스 환경에서 공유 자원(파일) 관리의 중요성과 OS가 제공하는 동기화 도구(Lock)의 동작 원리를 체득함."},{title:"예기치 않은 연결 종료와 좀비 프로세스 이슈",problem:"클라이언트가 강제 종료(`Ctrl+C`)될 때 서버 측의 자식 프로세스가 제대로 회수되지 않고 좀비 프로세스로 남아 리소스를 점유하는 현상.",cause:"부모 프로세스가 자식 프로세스의 종료 상태를 수신(`wait`)하지 않아 프로세스 테이블에 엔트리가 남음.",solution:"`signal(SIGCHLD)` 핸들러를 등록하고, 핸들러 내부에서 `waitpid()`를 비봉쇄(WNOHANG) 모드로 호출하여 종료된 자식 프로세스를 즉시 회수하도록 로직 개선.",learning:"프로세스 생명주기 관리와 시그널(Signal) 처리를 통한 안정적인 데몬(Daemon) 서버 구조의 필요성을 배움."}],results:["다중 클라이언트 환경에서 안정적인 파일 업로드/다운로드/삭제 기능 구현 완료","Flock 적용 후 동시 접근 시 데이터 오염 0건 달성 (무결성 확보)","로그인 보안 및 접근 제어 로직을 통해 기본적인 보안 파일 서버 구축"],images:[],highlights:[{value:"10+",label:"동시 접속 처리"},{value:"100%",label:"전송 성공률"},{value:"0건",label:"데이터 손상"}],techDecisions:[{tech:"C",reason:"커널 시스템 콜을 직접 호출하여 OS 동작 원리를 깊이 이해하기 위해 선택"},{tech:"Linux",reason:"POSIX 호환 시스템 콜(fork, flock, signal)을 활용한 시스템 프로그래밍 학습"},{tech:"Socket Programming",reason:"TCP/IP 연결 수립부터 데이터 전송까지 네트워크의 근본적인 이해"}]},uA=Object.freeze(Object.defineProperty({__proto__:null,p2pProject:oA},Symbol.toStringTag,{value:"Module"})),sA="/portfolio-3D/assets/banner-h9P_7FQW.png",cA={id:"secure-chat",banner:sA,title:"Secure Chat (보안 채팅 프로그램)",subTitle:"Secure-Chat",subtitle:"Java Socket & RSA/AES 하이브리드 암호화 메신저",summary:"Java 소켓 프로그래밍으로 1:1 통신을 구현하고, RSA 비대칭키로 AES 대칭키를 안전하게 교환하여 도청이 불가능한 보안 채팅 시스템을 구축했습니다.",tags:["Java","Socket","RSA","AES-256","Multi-Thread"],links:[],period:"2023.03 ~ 2023.06",team:"Individual (100%)",overview:"네트워크 통신의 기초인 소켓(Socket)을 활용해 1:1 채팅 프로그램을 구현하고, 그 위에 보안 계층을 입힌 프로젝트입니다. RSA 공개키 암호화 방식으로 대칭키(AES)를 안전하게 교환(Key Exchange)한 뒤, 실제 대화 내용은 AES-256으로 고속 암호화하여 전송하는 '하이브리드 암호화 시스템'을 직접 설계했습니다.",why:[{title:"Why Hybrid Encryption? (RSA + AES)",desc:"RSA는 보안성이 높지만 연산 속도가 느려 실시간 채팅에 부적합하고, AES는 빠르지만 키 배송(Key Distribution) 보안 문제가 있습니다. 이 둘을 결합해 '키 교환은 RSA, 메시지는 AES'로 처리하는 SSL/TLS의 기본 원리를 구현해보고자 했습니다."},{title:"Why Java Sockets?",desc:"고수준 라이브러리에 의존하지 않고, TCP 연결 수립(3-way handshake)부터 스트림(Stream) 데이터 처리, 스레드 관리까지 네트워크 통신의 로우 레벨 메커니즘을 깊이 있게 이해하기 위해 선택했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처 설계: Server/Client 구조 및 Multi-thread(SendThread, ReceiveThread)를 이용한 양방향 비동기 통신 구현","RSA 키 교환 프로토콜 구현: Server의 공개키(Public Key) 생성 및 배포, Client의 AES 키 암호화 전송 및 Server의 복호화 로직(Key Exchange) 개발","AES-256 메시지 암호화: 대칭키 기반의 실시간 메시지 암호화/복호화 모듈(encryptAES256/decryptAES256) 구현","보안 무결성 검증: 송수신 양측의 평문(Plaintext)과 암호문(Ciphertext) 로그 비교를 통한 기밀성 및 해킹 안전성 검증"]},troubleshooting:[{title:"Socket 입력 스트림의 블로킹(Blocking I/O) 문제 해결",problem:"메시지를 수신하는 동안(readUTF) 스레드가 입력 대기 상태에 빠져, 내가 메시지를 보내고 싶어도(writeUTF) 전송이 불가능해지는 '반이중(Half-duplex)' 현상 발생.",cause:"Java의 기본 InputStream은 블로킹 방식이므로, 단일 스레드에서 송수신을 순차적으로 처리하려다 데드락과 유사한 대기 상태가 됨.",solution:"송신(SendThread)과 수신(ReceiveThread)을 담당하는 스레드를 분리(Multi-threading)하여, 입출력 작업이 서로를 차단하지 않고 독립적으로 수행되도록 아키텍처를 재설계함.",learning:"네트워크 I/O 처리 시 스레드 분리의 필요성과 동시성(Concurrency) 제어의 중요성을 체감함."},{title:"RSA 암호화 데이터 크기 제한(BadPaddingException) 해결",problem:"RSA로 데이터를 암호화할 때 간헐적으로 `javax.crypto.BadPaddingException` 오류가 발생하며 암호화에 실패함.",cause:"RSA 알고리즘은 키 크기(예: 2048bit)에 따라 한 번에 암호화할 수 있는 평문의 길이가 제한됨. 긴 문자열을 RSA로 직접 처리하려다 허용 범위를 초과함.",solution:"RSA는 오직 짧은 데이터인 'AES 대칭키' 교환에만 사용하고, 실제 긴 채팅 메시지는 블록 암호화 방식인 AES로 처리하도록 역할 분담을 명확히 하여 해결.",learning:"비대칭키 암호화의 용도(키 교환/서명)와 대칭키 암호화의 용도(데이터 암호화)를 구분해야 하는 기술적 이유를 명확히 이해함."}],results:["RSA-2048 및 AES-256 기반의 안전한 1:1 채팅 통신 성공","Wireshark 패킷 캡처 시 평문이 노출되지 않음을 확인 (기밀성 확보)","Server/Client 간 키 교환 및 암호화 통신 시연 성공 (터미널 로그 검증)"],images:[],highlights:[{value:"256bit",label:"AES 메시지 암호화"},{value:"2048bit",label:"RSA 키 교환"},{value:"0건",label:"평문 노출"}],techDecisions:[{tech:"Java",reason:"풍부한 암호화 라이브러리(javax.crypto)와 스레드 관리 지원"},{tech:"RSA",reason:"비대칭키로 AES 키를 안전하게 교환하는 SSL/TLS 기본 원리 구현"},{tech:"AES-256",reason:"RSA보다 빠른 대칭키 암호화로 실시간 채팅 메시지 처리"}]},fA=Object.freeze(Object.defineProperty({__proto__:null,secureChatProject:cA},Symbol.toStringTag,{value:"Module"})),dA="/portfolio-3D/assets/banner-xAa91UBm.png",hA={id:"ssangsang",banner:dA,title:"쌍상 (봉사 매칭 서비스)",subTitle:"쌍상",subtitle:"자원봉사자-수요자 매칭 크로스 플랫폼 웹앱",summary:"100+명의 동아리 회원이 사용하는 봉사 매칭 서비스. React 웹앱으로 개발하여 접근성을 높이고, 애자일 프로세스로 운영 중입니다.",tags:["React.js","TypeScript","Progressive Web App","Axios","Agile-Scrum"],links:[],period:"2023.01 ~ 현재 운영중",team:"Frontend 2명, Backend 1명",overview:"자원봉사자와 봉사를 받고 싶어하는 사람들을 매칭하기 위한 웹/앱 크로스 플랫폼 서비스입니다. 현재 100명 이상의 동아리 회원들이 실제 봉사 신청 및 관리에 사용하고 있습니다.",why:[{title:"Why React?",desc:"컴포넌트 기반 아키텍처와 선언형 UI를 통해 재사용성과 유지보수성을 확보했습니다. 방대한 커뮤니티와 라이브러리 생태계를 활용해 개발 생산성을 높였습니다."},{title:"Why WebApp?",desc:"하나의 코드로 웹과 모바일 환경(크로스 플랫폼)에 모두 대응하며, 스토어 심사 없이 빠른 배포와 수정이 가능하여 애자일한 운영에 적합하다고 판단했습니다."}],role:{percentage:"60%",tasks:["React-Router-Dom을 활용한 SPA 페이지 전환 및 유저 권한별 접근 제어 (Protected Route) 구현","사용자 경험(UX) 개선: Percentage Loading Indicator, 스크롤 기반 페이지네이션(Infinite Scroll), Skeleton UI 적용","반응형 디자인: viewport width 기준 rem/flex Layout으로 다양한 디바이스 대응","Axios Interceptor를 활용한 Access Token 자동 갱신 및 공통 에러 핸들링 로직 구현","GitHub/Jira/Notion 기반의 애자일 스프린트 운영 및 코드 리뷰 주도"]},troubleshooting:[{title:"React StrictMode와 useEffect 중복 실행 문제",problem:"초기 렌더링 시 useEffect 내 API 호출이 두 번 발생하여 불필요한 트래픽 유발.",cause:"React 18 StrictMode의 개발 환경 특성(마운트-언마운트-마운트)으로 인한 현상. Side-Effect 검증 과정임을 이해.",solution:"AbortController를 활용하여 언마운트 시 이전 요청을 취소(Clean-up)하도록 리팩토링하여 안전한 비동기 처리 구현.",learning:"StrictMode가 잠재적 버그를 찾아주는 도구임을 이해하고, 클린업 함수(Clean-up) 작성의 중요성을 체감."},{title:"비동기 State 업데이트 시점 차이로 인한 필터링 오류",problem:"API로 데이터를 받아온(setVolunteers) 직후 필터링을 수행했으나, 빈 배열이 반환되는 문제 발생.",cause:"setState는 비동기적으로 동작하므로, 상태 업데이트가 완료되기 전에 다음 코드가 실행되어 초기값(빈 배열)을 참조함.",solution:"필터링 로직을 별도의 useEffect로 분리하고, volunteers 상태를 의존성 배열(dependency array)에 추가하여 데이터 변경 시점에 필터링이 수행되도록 수정.",learning:"React의 상태 업데이트 사이클과 의존성 배열의 역할을 명확히 이해하게 됨."}],results:["2023 동아리 콘테스트 금상 수상 (교내 2위)","2023년 6월 우수지역사회봉사단 선정 (VMS 인증)","실사용자 100+명 확보 및 주 단위 기능 개선 사이클 정착"],images:[],highlights:[{value:"100+",label:"실사용자"},{value:"60%",label:"프론트엔드 기여도"},{value:"2위",label:"교내 콘테스트"}],techDecisions:[{tech:"React.js",reason:"컴포넌트 기반 아키텍처로 재사용성과 유지보수성 확보"},{tech:"Progressive Web App",reason:"하나의 코드로 웹/모바일 크로스 플랫폼 대응, 스토어 심사 없이 빠른 배포"}]},mA=Object.freeze(Object.defineProperty({__proto__:null,ssangsangProjects:hA},Symbol.toStringTag,{value:"Module"})),pA="/portfolio-3D/assets/banner-xHcB6NbG.png",gA={id:"vary-recycle",banner:pA,title:"Vary Recycle (분리수거 리워드 서비스)",subTitle:"Vary Recycle",subtitle:"Google 기술 기반, 분리수거 인식 및 리워드 제공 환경 문제 해결 서비스",summary:"UN SDGs(지속 가능한 개발 목표) 중 환경 분야를 대상으로 한 분리수거 리워드 서비스입니다. 80% 정확도의 Computer Vision AI로 쓰레기 종류를 인식하고, 올바른 분리수거 가이드를 제공하여 사용자 행동 변화를 이끌었습니다.",tags:["Flutter","Firebase","TensorFlow","CV Model","Google Solution Challenge"],links:[],period:"2022.09 ~ 2023.08",team:"Frontend 2명, Backend 1명, AI 모델 2명, 데이터 생성 1명",overview:"Vary Recycle은 사용자가 쓰레기를 촬영하면, AI가 실시간으로 종류를 인식하고 맞는 분리수거 방법을 안내해주는 리워드형 서비스입니다. 촬영–인식–가이드–리워드까지 하나의 플로우로 연결하여, 게임처럼 재미있게 분리수거 습관을 만들도록 설계했습니다.",why:[{title:"Why Flutter?",desc:"iOS/Android를 동시에 대응해야 했기 때문에, 단일 코드베이스로 크로스 플랫폼 개발이 가능한 Flutter를 선택했습니다. 위젯 기반 UI와 Hot Reload를 활용해 짧은 기간 내에 여러 화면을 빠르게 설계·반복 개선할 수 있었습니다."},{title:"Why Computer Vision 기반 분리수거?",desc:"환경 문제 해결의 가장 큰 허들은 '귀찮음'과 '정보 부족'이라고 보았습니다. 사용자가 이름을 일일이 입력하는 대신, 카메라 한 번으로 유리병/캔/종이/PET를 자동 분류하고, 바로 분리수거 가이드를 보여줌으로써 진입장벽을 최소화했습니다."}],role:{percentage:"50%",tasks:["Flutter 기반 하이브리드 앱 프론트엔드 개발 50% 담당: 홈, 촬영 화면, 결과 출력, 로그인 등 주요 화면 직접 설계 및 구현","LayoutBuilder, MediaQuery, Flexible 등을 활용해 다양한 해상도·비율에서 깨지지 않는 반응형 UI 구성","AnimatedContainer를 이용해 분리수거 결과에 따라 카드 색상/크기/위치를 애니메이션으로 표현, 사용자 피드백 강화","Firebase Realtime Database 연동: 분리수거 결과 및 AI 학습 로그를 실시간 저장·조회하는 데이터 플로우 구현","Firebase Authentication 적용: 이메일 로그인, 인증 토큰 만료 처리, 세션 유지 로직 설계 및 예외 상황(토큰 만료, 네트워크 에러) 처리","Firebase Security Rules 작성으로 사용자별 데이터 접근 제어 및 읽기/쓰기 권한 분리","TensorFlow 기반 Computer Vision 모델과의 연동을 위해 HTTP 인터페이스(REST API) 설계 및 Flutter 클라이언트 구현","AI 인퍼런스 결과(예: 라벨, 신뢰도)에 따라 UI가 자동으로 상태를 전환하도록 상태 기반 화면 전환 로직 구현","유리병/캔/종이/PET 4종에 대해 약 7,500장의 학습용 이미지 촬영 및 정제, 조명·각도·배경을 달리하여 데이터 다양성 확보 및 오버피팅 방지"]},troubleshooting:[{title:"앱 재실행 시 로그인 상태인데도 로그인 화면으로 라우팅되는 문제",problem:"Firebase Authentication을 사용해 이메일 로그인 기능을 구현했는데, 최초 로그인 후에는 정상 동작하지만 앱을 완전히 종료 후 재실행하면 로그인되어 있음에도 로그인 페이지로 잘못 라우팅되는 문제가 발생.",cause:"앱 시작 직후 FirebaseAuth.instance.currentUser를 바로 조회하면, Firebase가 아직 내부적으로 인증 상태를 복구하기 전이라 null을 반환할 수 있음. 인증 상태 복구가 비동기적으로 동작함에도 이를 고려하지 않고 currentUser만으로 초기 라우팅을 결정한 것이 원인이었음.",solution:"FirebaseAuth.instance.authStateChanges() 스트림을 StreamBuilder로 구독하는 방식으로 초기 라우팅 구조를 전면 수정. 인증 상태 복구 중에는 SplashScreen을 보여주고, snapshot.hasData 여부에 따라 HomePage 또는 LoginPage로 분기하도록 설계하여 비동기 복구 구간을 안전하게 처리함.",learning:"Firebase Authentication의 인증 상태 복구는 비동기이며, ‘로그인 여부’뿐만 아니라 ‘복구가 끝났는지 여부’까지 UI 상태로 분리해야 한다는 것을 배웠음. 이를 계기로 Flutter 위젯 생명주기, 비동기 흐름 제어, 상태 기반 라우팅의 중요성을 몸으로 이해하게 되었고, 이후 다른 프로젝트에서도 모든 초기 라우팅을 스트림/상태 기반으로 설계하게 되는 계기가 되었음."}],results:["2022년 교내 동계 모각소 활동 ‘최우수상’ 수상 (31개 팀 중 1위)","Google Solution Challenge Winter Cup 국내 Top 8 (40+팀 중 8위)","환경·분리수거 문화를 주제로 한 실제 사용자 테스트에서 ‘분리수거 가이드가 직관적이고 재미있다’는 피드백 다수 확보"],images:[],highlights:[{value:"80%",label:"AI 인식 정확도"},{value:"1위",label:"교내 최우수상"},{value:"7500+",label:"학습 이미지"}],techDecisions:[{tech:"Flutter",reason:"단일 코드베이스로 iOS/Android 동시 대응, Hot Reload로 빠른 반복 개발"},{tech:"Firebase",reason:"인증·DB·스토리지를 통합 제공, 서버리스로 빠른 프로토타이핑"},{tech:"TensorFlow",reason:"모바일 환경에서도 실시간 이미지 분류가 가능한 경량화 모델 지원"}]},yA=Object.freeze(Object.defineProperty({__proto__:null,varyRecycleProjects:gA},Symbol.toStringTag,{value:"Module"})),Cg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVR4Ae2WA8wcQRiG39q2tTszu7XtNnYd1XZ7OzN7eyqDmmF/1jbipI7rhrVt97r/7SW/j81F9yTPYflh99tFmjQlQuc1BRHTQeU2EFdW0jKRCZUfg8LXQTEbICK62RtM7AGxnoLJIDQreXWf8626MqAHqqNUyNL6YOYu6N7wTu4gmJmcmtvWY//mJ+1vFRFhxgwQ/jZ0ciacA+QF0z6QuB1WBaEY10F5D0SFuvYVyprwH6DmVTCZCSpzEjAXzGvva45GTKjGcWiecOnszKl5CcQ9HEMCldHJVQ36nOrxafe79aTKiBliHA0H4FwD1NgOZX4lpAzFOALNKhAA3+ZkkCrse7VQAEweBOVNkTKYPA7dk3/7MPnCNoAOXAPlFMpSPW7belRn+MQCkVvA+B+nCjKs+A3NeA3KH4KJx3GpiidoJ+6CmRnQ+Eh0n1E12hQcCCJuQvcHoeUPkmR0jmH+AZH3ofE5iMyYcmBiGah4V/xgVgK685PQA0FQfglsCUFElEBNqMYEEPMEiHgGJj+CiQ/xab4HNb6A8L/hVjrjmPBPoNJCdPaXA7GagXk7Qrd6xW17b0+0W9odxPCBySdOJWw1aWvkImW0DtQGMbPQ3h8OIDTedyOlELka7QP51wOROSkOwJ0XQH4FqExhC4gYAMYvQPfmB6BFagGTk0DMzaB8Axhfl7jGWmhyPYi8HBpsTDoBMPEX1JWBUqHiHNqvDEL323qT0Oe8jIQyN22l85uYb6CKmRECMI47O1m27iQ189U9TlCaPBr54UZdp5wNPbbW/9EJ5gM0cTr0chMRKhZCWboXjO8E5TnJGho6RGSCCTdUrqEE0qT5B6CGc+DEAtyrAAAAAElFTkSuQmCC",Zy=[{id:"career-2",company:"SURESOFTTECH",companyLogo:Cg,position:"AI Simulation Engineer",department:"임베디드 기술 연구소 / 지능형 데이터팀",period:"2026.01 - 현재",transition:"프론트엔드에서 쌓은 실시간 데이터 처리·시각화 역량을 자율주행 시뮬레이션 도메인으로 확장",projects:[{name:"자율주행 궤적 예측 모델(Alpamayo) 시뮬레이션 연동 및 성능 평가 파이프라인 구축",period:"2026.01 - 현재",role:"AI 시뮬레이션 연동 / 모델 검증 · 평가 파이프라인",impact:"CARLA × Alpamayo 실시간 연동 — 추론 지연 1.2s → 0.78s, FPS 18 → 28, ADE 0.72m / FDE 1.84m 정량 평가 체계 확립",description:"자율주행 궤적 예측 모델(Alpamayo)을 CARLA 시뮬레이터에 연동해 추론 결과를 실시간 시각화하고, 동시에 정량 지표 기반의 검증·로깅 파이프라인을 구축. 기존 오프라인 검증 방식을 시뮬레이션 루프 내 실시간 검증으로 전환하고, 시나리오별 평가 결과를 자동 로깅해 모델 회귀 검증 사이클을 표준화.",tasks:["CARLA 소스 커스터마이징으로 시뮬레이터-AI 모델 간 실시간 양방향 데이터 통신 아키텍처 설계","동기/비동기 추론 파이프라인 설계 및 차량 Tick 기반 추론 제어 로직 구현","생성 궤적과 Ground Truth 간 Point-wise 좌표 오차 계산 모듈 및 ADE / FDE / RMSE 산출 로직 구현","실시간 모니터링 UI 개발 및 다중 궤적 데이터 시각화 최적화","Hugging Face·Waymo Open Dataset 기반 Alpamayo-r1 모델 성능 지표 도출 및 오류 데이터 자동 필터링","시나리오별 오차율·추론 시간·FPS를 CSV로 자동 저장하는 평가 로깅 구조 설계"],achievements:["ADE 0.72m, FDE 1.84m, RMSE 0.91m 기준으로 궤적 예측 정확도 수치화","추론 지연 1.2s → 0.78s(약 35%) 단축으로 실시간 검증 안정성 확보","CARLA 시뮬레이터 평균 FPS 18 → 28 개선으로 다중 궤적 시각화 부하 완화","시나리오별 평가 지표 CSV 자동 저장으로 모델 회귀 검증 사이클 표준화","Waymo 데이터셋 기반 오류 데이터 자동 필터링 파이프라인으로 데이터 검증 공수 절감"],techStack:{languages:["Python","C++"],libs:["CARLA","PyTorch","Hugging Face","NumPy","Pandas"],patterns:["동기/비동기 추론 파이프라인","시뮬레이터-모델 양방향 통신","Point-wise 검증 (ADE / FDE / RMSE)","평가 로깅 자동화"]}}]},{id:"career-1",company:"SURESOFTTECH",companyLogo:Cg,position:"Frontend Developer",department:"임베디드 기술 연구소 / 차량솔루션 1팀",period:"2023.03 - 2025.12",projects:[{name:"차량 통합 제어기(CCU2) Log Monitor & Analyzer",period:"2024.07 - 2025.06",role:"Frontend Lead / 아키텍처 설계",impact:"초당 8만 건 로그 무중단 처리 — 현업 엔지니어 분석 시간 5분→30초, 고객사 납품 일정 단축에 기여",description:"DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하는 Electron 기반 분석 플랫폼. 기존 DLT-Viewer의 한계를 대체하여 비전문가도 직관적으로 분석 가능한 UX 구현.",tasks:["웹 뷰어 → Electron 데스크톱 앱 전환 설계 및 ZeroMQ/IPC 기반 비동기 수집 파이프라인 구축","가상 스크롤 + gridBufferDataObj 기반 탐색 최적화로 수십만 건 탐색 시 0.2초 미만 응답","Zustand 기반 전역 상태 + Custom Store 설계로 실시간 데이터 동기화 안정화","비개발 직군(차량 평가 엔지니어) 대상 UX 피드백 수렴 및 분석 워크플로우 재설계"],achievements:["렌더링 성능 2.3배 향상(1.04s→450ms), 메모리 30% 절감(3.3GB→2.0GB)","로그 분석 시간 5분→30초로 단축 — 엔지니어 일일 분석 처리량 증가에 기여","초당 80,000건 이상 로그를 UI Freezing 없이 실시간 시각화","차트 렌더링 Aggregation 적용으로 3.2s→0.48s(85% 개선)","테스트 코드 및 스크립트 모듈화 도입으로 기능 추가 시 장애 발생률 대폭 감소"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["ZeroMQ","DevExtreme","Zustand","TailwindCSS"],patterns:["이벤트 버스(useEventOn)","CustomStore","무한 스크롤 버퍼링"]}},{name:"사용자 정의 필터링 기반 DLT 로그 분석 툴",period:"2025.07 - 2025.09",role:"Frontend Lead / 성능 최적화",impact:"100만 건 로그 2초 이내 탐색 — 반복 분석 워크플로우 30~40% 단축",description:"수백만 건 DLT/CSV 로그를 사용자 맞춤 UI·필터링으로 분석하는 Electron 기반 툴. 반복 작업 자동화와 사용자 중심 레이아웃으로 현업 분석가의 실사용성에 집중.",tasks:["DevExtreme DataGrid 가상 스크롤 고도화 및 Stream API 기반 대용량 Export 파이프라인 구축","rc-dock 기반 도킹 레이아웃(패널 배치 저장·복원) 및 IPC 외부 뷰어 연동 자동화","정규식 호환성·UI 렌더링 이슈 등 반복 문제 트러블슈팅 플레이북 문서화"],achievements:["100만 건 이상 로그 로딩·탐색 평균 응답 속도 2초 이내 달성","Stream API 도입으로 대용량 CSV Export 시 메모리 사용량 60% 절감","100만 행 데이터 3초 이내 파일 변환·저장 고속 Export 구현","맞춤형 레이아웃 + 외부 뷰어 자동화로 반복 작업 제거, 워크플로우 30~40% 단축"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["rc-dock","DevExtreme DataGrid","Recharts"],patterns:["IPC 통신","가상 스크롤(Virtual Scrolling)","스트리밍 데이터 처리"]}},{name:"차량제어 시험산출물 관리 시스템 고도화(VTDM)",period:"2025.09 - 2025.12",role:"Frontend / 아키텍처 개선",impact:"레거시 코드베이스 30% 경량화 — 리렌더링 80% 감소, 프레임 드랍 0% 달성",description:"차량 테스트/평가 산출물 클라우드 통합 관리 SaaS 플랫폼의 레거시 기술 부채 해소 및 구조적 리팩토링. 단순 기능 추가가 아닌 장기 운영을 고려한 아키텍처 개선에 집중.",tasks:["DDD 기반 아키텍처 재편 및 공통 로직 커스텀 훅 추상화로 유지보수성 강화","무한 스크롤 DOM 연산을 Web Worker로 분리하여 메인 스레드 블로킹 제거","Global → Local State 전환 및 AgGrid/AgChart 커스터마이징으로 대시보드 구현"],achievements:["DDD + 모듈화로 전체 코드베이스(LOC) 30% 절감","컴포넌트 의존성 최적화로 리렌더링 80% 감소(5회→1회)","Web Worker 연산 분산으로 대용량 리스트 스크롤 시 프레임 드랍 0% 달성","Global State 의존도 축소로 사이드 이펙트성 버그 발생 위험 최소화"],techStack:{languages:["React(TypeScript)","Node.js"],libs:["AgGrid","AgChart"],patterns:["Domain-Driven Design(DDD)","Web Worker","Custom Hooks","Docker","Spring Boot 협업"]}}]}],vA=Object.assign({"../../component/Body/Home/projects/data/LLM/LLM(LSTM-BERT).tsx":tA,"../../component/Body/Home/projects/data/Mogang/mogangData.tsx":iA,"../../component/Body/Home/projects/data/P2P/P2PService.tsx":uA,"../../component/Body/Home/projects/data/Secure-Chat/Secure-chat.tsx":fA,"../../component/Body/Home/projects/data/Ssang-sang/ssang-sangData.tsx":mA,"../../component/Body/Home/projects/data/Vary-Recycle/varyRecycle.tsx":yA}),xA=["p2p-service","secure-chat","vary-recycle","llm-lstm-bert","mogang","ssangsang"],bA={"p2p-service":{year:"2023",role:"System Engineer",tags:["System UI","Performance"],color:"#7C5CFF"},"secure-chat":{year:"2023",role:"Frontend Architect",tags:["Security","Architecture"],color:"#19E6A6"},"vary-recycle":{year:"2023",role:"Frontend Engineer",tags:["AI/ML","Mobile"],color:"#F5C518"},"llm-lstm-bert":{year:"2022",role:"Data Engineer",tags:["AI/ML","Data"],color:"#FF4D2E"},mogang:{year:"2024",role:"Frontend Lead",tags:["Tooling","Performance"],color:"#7C5CFF"},ssangsang:{year:"2023",role:"Frontend Engineer",tags:["Service","Mobile"],color:"#19E6A6"}},SA=Object.values(vA).map(t=>t.default??Object.values(t)[0]).filter(t=>!!t),kA=new Map(SA.map(t=>[t.id,t])),yt=xA.map(t=>kA.get(t)).filter(t=>!!t).map(t=>{const i=bA[t.id]??{year:"—",role:t.team||"",tags:t.tags.slice(0,2),color:"#7C5CFF"},l=t.techDecisions?.map(h=>h.tech)??[],o=l.length>0?Array.from(new Set([...l,...t.tags])).slice(0,6):t.tags.slice(0,6),u=(t.highlights??[]).slice(0,3).map(h=>({v:h.value,d:h.label})),{role:c,...f}=t;return{...f,year:i.year,role:i.role,roleDetail:c,visualTags:i.tags,color:i.color,stack:o,metrics:u.length>0?u:[{v:"—",d:"highlight 데이터 없음"}]}}),TA=t=>{const i=t.match(/(\d+)년\s*(\d+)월/);return i?`${i[1]}.${i[2].padStart(2,"0")}`:t},EA=t=>{if(!t)return 6;const i=t.split(/\s+/).length;return Math.max(4,Math.round(i/320))},Dl=Ml.map((t,i)=>({slug:t.slug,date:TA(t.date),title:t.title,read:EA(t.content),tag:t.tags[0]??t.category??"Etc",featured:i===0,excerpt:t.excerpt,cover:t.cover})),CA=[{y:"2019",role:"Cyber Security Major · CS Student",org:"Ajou University",detail:"사이버보안 전공 입학"},{y:"2024",role:"Computer Engineering · B.S.",org:"Ajou University",detail:"사이버보안/소프트웨어 전공 졸업"}],Wy=[...Zy.map(t=>({y:(t.period.split(" - ")[0]||t.period).slice(0,7).trim(),role:t.position,org:t.company,detail:t.department})),...CA].sort((t,i)=>i.y.localeCompare(t.y)),Ky=[{group:"Frontend Core",items:["React","TypeScript","Next.js","Electron","Zustand","TailwindCSS"]},{group:"Architecture",items:["Domain-Driven Design","Web Worker","Event Bus","IPC"]},{group:"Performance",items:["Virtual Scroll","Rendering Optimization","Memory Management","Streaming"]},{group:"Security & Infra",items:["RSA / AES","Network Forensics","Linux / Shell","GitLab CI","Docker"]},{group:"AI & Data",items:["Python","PyTorch","TensorFlow","BERT / LSTM","OpenCV"]}],AA=[{label:"GitHub",href:"https://github.com/km-kwon",host:"github.com/km-kwon"},{label:"Velog",href:"https://velog.io/@gyeongminkwon/posts",host:"velog.io/@gyeongminkwon"},{label:"Email",href:"mailto:lanos0609@gmail.com",host:"lanos0609@gmail.com"}],wA=[["01","LOG STREAM","80K/sec"],["02","WORKER INDEX","1M rows"],["03","SECURE LAYER","0 plain"],["04","RENDER FRAME","60fps"]],Ge={hero:{minHeight:"calc(100vh - var(--header-h) - 64px)",display:"flex",alignItems:"center",paddingBottom:60},grid:{display:"grid",gridTemplateColumns:"minmax(0, 1.05fr) minmax(280px, 0.5fr)",gap:64,alignItems:"center"},title:{fontFamily:"var(--serif)",fontSize:"clamp(26px, 3.2vw, 44px)",fontWeight:400,lineHeight:1.15,letterSpacing:"-0.015em",margin:"0 0 24px",fontVariationSettings:"'opsz' 60"},intro:{fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--fg-dim)",marginBottom:32,display:"flex",alignItems:"center",gap:12},introDot:{width:8,height:8,background:"var(--accent)",borderRadius:4,boxShadow:"0 0 16px var(--accent-glow)"},tags:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:36},tag:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.06em",padding:"5px 12px",borderRadius:999,border:"1px solid var(--border)",color:"var(--fg-muted)",background:"color-mix(in oklab, var(--bg-elevated) 50%, transparent)",backdropFilter:"blur(6px)"},buttonRow:{display:"flex",gap:14,alignItems:"center",flexWrap:"wrap"},btnPrimary:{padding:"13px 22px",borderRadius:10,background:"var(--accent)",color:"white",border:0,fontSize:13,fontWeight:600,boxShadow:"0 8px 32px var(--accent-glow), 0 0 0 1px color-mix(in oklab, var(--accent-hi) 60%, transparent) inset",transition:"all .25s",cursor:"pointer",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8},btnGhost:{padding:"13px 18px",borderRadius:10,background:"color-mix(in oklab, var(--bg-elevated) 60%, transparent)",color:"var(--fg-muted)",border:"1px solid var(--border)",fontSize:13,fontWeight:500,backdropFilter:"blur(8px)",display:"inline-flex",alignItems:"center",gap:8,transition:"all .25s",cursor:"pointer",textDecoration:"none"},rightStream:{display:"flex",flexDirection:"column",gap:0,fontFamily:"var(--mono)",fontSize:11},streamRow:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 0",borderBottom:"1px solid var(--border)",color:"var(--fg-muted)"},statsRow:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:0,paddingTop:36,marginTop:56,borderTop:"1px solid var(--border)"},stat:{padding:"0 32px",borderLeft:"1px solid var(--border)"},statFirst:{padding:"0 32px 0 0",borderLeft:0},statValue:{fontFamily:"var(--serif)",fontSize:32,fontWeight:500,color:"var(--accent-hi)",lineHeight:1,letterSpacing:"-0.015em",fontVariationSettings:"'opsz' 60"},statUnit:{fontFamily:"var(--mono)",fontSize:12,color:"var(--accent)",marginLeft:6},statDesc:{marginTop:12,fontSize:12,color:"var(--fg-dim)",lineHeight:1.5}},jA=()=>g.jsxs("div",{className:"page-fade",children:[g.jsx("section",{className:"home-profile-hero",style:Ge.hero,children:g.jsxs("div",{className:"home-profile-shell",style:{width:"100%"},children:[g.jsxs("div",{className:"reveal home-profile-intro",style:Ge.intro,children:[g.jsx("span",{style:Ge.introDot}),g.jsx("span",{children:"01 / Identity Profile"}),g.jsx("span",{className:"home-profile-intro-rule",style:{flex:1,height:1,background:"linear-gradient(90deg, var(--border), transparent)",maxWidth:200}})]}),g.jsxs("div",{className:"home-profile-grid",style:Ge.grid,children:[g.jsxs("div",{children:[g.jsxs("h1",{className:"reveal d1 home-profile-title",style:Ge.title,children:["복잡한 시스템을",g.jsx("br",{}),"안전하고 ",g.jsx("em",{style:{fontStyle:"italic",color:"var(--accent-hi)",fontFamily:"var(--serif)"},children:"읽기 쉬운"}),g.jsx("br",{}),"인터페이스로 만드는",g.jsx("br",{}),g.jsx("span",{style:{color:"var(--fg-muted)",fontSize:"0.6em",fontFamily:"var(--sans)",fontWeight:300,letterSpacing:"-0.01em"},children:"프론트엔드 엔지니어,"}),g.jsx("br",{}),g.jsx("span",{style:{fontFamily:"var(--serif)",fontStyle:"italic",color:"var(--accent)"},children:"권경민"}),g.jsx("span",{style:{color:"var(--fg-muted)"},children:"."})]}),g.jsx("div",{className:"reveal d2 home-profile-tags",style:Ge.tags,children:["Frontend Engineer","System UI","Performance","Security-minded"].map(t=>g.jsx("span",{style:Ge.tag,children:t},t))}),g.jsxs("div",{className:"reveal d3 home-profile-actions",style:Ge.buttonRow,children:[g.jsx(gn,{to:"/projects",style:Ge.btnPrimary,children:"프로젝트 보기 →"}),g.jsxs("a",{href:"/portfolio-3D/resume.pdf",target:"_blank",rel:"noreferrer",style:Ge.btnGhost,children:[g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:g.jsx("path",{d:"M12 4v12m0 0l-4-4m4 4l4-4M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})}),"이력서 (PDF)"]})]})]}),g.jsx("div",{className:"reveal d4 home-profile-stream",style:Ge.rightStream,children:wA.map(([t,i,l])=>g.jsxs("div",{className:"home-profile-stream-row",style:Ge.streamRow,children:[g.jsx("span",{style:{color:"var(--accent)"},children:t}),g.jsx("span",{style:{flex:1,padding:"0 16px",letterSpacing:"0.16em"},children:i}),g.jsx("span",{style:{color:"var(--fg)"},children:l})]},i))})]}),g.jsxs("div",{className:"home-profile-stats",style:Ge.statsRow,children:[g.jsxs("div",{className:"reveal d2 home-profile-stat",style:{...Ge.stat,...Ge.statFirst},children:[g.jsxs("div",{children:[g.jsx("span",{style:Ge.statValue,children:"80K"}),g.jsx("span",{style:Ge.statUnit,children:"logs/sec"})]}),g.jsx("div",{style:Ge.statDesc,children:"실시간 로그 시각화 처리량 (CCU2)"})]}),g.jsxs("div",{className:"reveal d3 home-profile-stat",style:Ge.stat,children:[g.jsxs("div",{children:[g.jsx("span",{style:Ge.statValue,children:"2"}),g.jsx("span",{style:Ge.statUnit,children:"sec"})]}),g.jsxs("div",{style:Ge.statDesc,children:["1M 라인 DLT 로그 검색",g.jsx("br",{}),"Web Worker · 가상 스크롤 최적화"]})]}),g.jsxs("div",{className:"reveal d4 home-profile-stat",style:Ge.stat,children:[g.jsx("div",{children:g.jsx("span",{style:Ge.statValue,children:"0"})}),g.jsxs("div",{style:Ge.statDesc,children:["Wireshark 평문 노출",g.jsx("br",{}),"RSA-2048 + AES-256 하이브리드 설계"]})]})]})]})}),g.jsxs("section",{style:{marginTop:120},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"02"}),g.jsx("span",{children:"Selected Work"}),g.jsx("span",{className:"bar"}),g.jsx(gn,{to:"/projects",style:{color:"var(--fg-muted)",fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em",textDecoration:"none"},children:"ALL →"})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 1fr))",gridAutoRows:"1fr",gap:24,alignItems:"stretch"},children:yt.map((t,i)=>g.jsx("div",{className:"reveal",style:{animationDelay:`${.06*i}s`,height:"100%"},children:g.jsx(DA,{project:t,index:i})},t.id))})]}),g.jsxs("section",{style:{marginTop:120},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"03"}),g.jsx("span",{children:"Skills · Stack"}),g.jsx("span",{className:"bar"})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:1,background:"var(--border)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden"},children:Ky.map((t,i)=>g.jsxs("div",{className:"reveal",style:{animationDelay:`${.05*i}s`,padding:24,background:"var(--bg-elevated)"},children:[g.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--accent)",marginBottom:14},children:["0",i+1," · ",t.group]}),g.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:t.items.map(l=>g.jsxs("li",{style:{fontSize:13,padding:"5px 0",color:"var(--fg)"},children:[g.jsx("span",{style:{color:"var(--fg-dim)",marginRight:8},children:"·"}),l]},l))})]},t.group))})]}),g.jsxs("section",{style:{marginTop:140,marginBottom:80,textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.18em",color:"var(--fg-dim)",marginBottom:28},children:"— STATEMENT"}),g.jsxs("p",{style:{fontFamily:"var(--serif)",fontSize:"clamp(18px, 2vw, 26px)",fontWeight:400,lineHeight:1.4,letterSpacing:"-0.005em",maxWidth:720,margin:"0 auto",textWrap:"balance"},children:["좋은 인터페이스는 ",g.jsx("em",{style:{color:"var(--accent-hi)"},children:"복잡한 시스템에 대해"})," 거짓말하지 않는다.",g.jsx("br",{}),g.jsxs("span",{style:{color:"var(--fg-muted)"},children:["그저 그것을 ",g.jsx("em",{style:{color:"var(--fg)"},children:"읽을 수 있게"})," 만들 뿐이다."]})]}),g.jsx("div",{style:{marginTop:36},children:g.jsx(gn,{to:"/about",style:Ge.btnGhost,children:"About me →"})})]})]}),DA=({project:t,index:i})=>{const[l,o]=_.useState(!1);return g.jsxs(gn,{to:`/projects/${t.id}`,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{padding:28,borderRadius:14,border:l?"1px solid var(--accent)":"1px solid var(--border)",background:"color-mix(in oklab, var(--bg-elevated) 60%, transparent)",backdropFilter:"blur(12px)",cursor:"pointer",transition:"border-color .35s, transform .35s, box-shadow .35s",transform:l?"translateY(-3px)":"translateY(0)",boxShadow:l?`0 18px 40px ${t.color}33`:"0 0 0 transparent",position:"relative",overflow:"hidden",textDecoration:"none",color:"inherit",display:"flex",flexDirection:"column",height:"100%"},children:[t.banner&&g.jsx("img",{src:t.banner,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:l?.92:.62,pointerEvents:"none",transition:"opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",transform:l?"scale(1.04)":"scale(1)",filter:l?"saturate(1.15) brightness(1.02)":"saturate(0.95) brightness(0.94)"}}),g.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",transition:"background .4s ease",background:t.banner?l?"linear-gradient(180deg, color-mix(in oklab, var(--bg-elevated) 55%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 35%, transparent) 35%, color-mix(in oklab, var(--bg-elevated) 75%, transparent) 75%, var(--bg-elevated) 100%)":"linear-gradient(180deg, color-mix(in oklab, var(--bg-elevated) 40%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 80%, transparent) 55%, var(--bg-elevated) 100%)":"transparent"}}),g.jsx("div",{style:{position:"absolute",top:0,right:0,width:120,height:120,background:`radial-gradient(circle at top right, ${t.color}40, transparent 70%)`,pointerEvents:"none"}}),g.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"space-between",marginBottom:16,fontFamily:"var(--mono)",fontSize:11,color:l&&t.banner?"var(--fg-muted)":"var(--fg-dim)",textShadow:l&&t.banner?"0 1px 6px rgba(0,0,0,0.55)":"none"},children:[g.jsxs("span",{children:["0",i+1," · ",t.year]}),g.jsx("span",{style:{color:t.color},children:"●"})]}),g.jsx("h3",{style:{position:"relative",fontFamily:"var(--serif)",fontSize:18,fontWeight:500,margin:"0 0 6px",letterSpacing:"-0.01em",lineHeight:1.2,color:"var(--fg)",textShadow:l&&t.banner?"0 1px 8px rgba(0,0,0,0.6)":"none"},children:t.subTitle}),g.jsx("div",{style:{position:"relative",fontSize:13,marginBottom:18,lineHeight:1.5,color:l&&t.banner?"var(--fg)":"var(--fg-muted)",textShadow:l&&t.banner?"0 1px 6px rgba(0,0,0,0.55)":"none",flex:1},children:t.subtitle??t.summary.slice(0,60)+"…"}),g.jsx("div",{style:{position:"relative",display:"flex",flexWrap:"wrap",gap:6},children:t.visualTags.map(u=>g.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,padding:"3px 8px",borderRadius:999,border:l&&t.banner?"1px dashed color-mix(in oklab, var(--fg) 70%, transparent)":"1px dashed var(--border-hi)",color:l&&t.banner?"var(--fg)":"var(--fg-muted)",background:l&&t.banner?"color-mix(in oklab, var(--bg-elevated) 70%, transparent)":"transparent",backdropFilter:l&&t.banner?"blur(4px)":void 0,WebkitBackdropFilter:l&&t.banner?"blur(4px)":void 0,transition:"all .3s ease"},children:u},u))})]})},$y=({color:t,variant:i=0})=>{const l=(i%4+4)%4,o=`mg${l}-${t.replace(/[^a-zA-Z0-9]/g,"")}`;return g.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",preserveAspectRatio:"xMidYMid slice",children:[g.jsx("defs",{children:g.jsxs("radialGradient",{id:o,children:[g.jsx("stop",{offset:"0%",stopColor:t,stopOpacity:"0.4"}),g.jsx("stop",{offset:"100%",stopColor:t,stopOpacity:"0"})]})}),g.jsx("rect",{width:"200",height:"200",fill:"var(--bg-elevated)"}),g.jsx("circle",{cx:"100",cy:"80",r:"80",fill:`url(#${o})`}),g.jsxs("g",{transform:`translate(100, 80) rotate(${l*15})`,children:[l===0&&g.jsxs(g.Fragment,{children:[g.jsx("polygon",{points:"0,-40 35,-12 22,30 -22,30 -35,-12",stroke:t,strokeWidth:"1.2",fill:"none"}),g.jsx("ellipse",{cx:"0",cy:"0",rx:"60",ry:"22",stroke:t,strokeWidth:"0.8",fill:"none",opacity:"0.5"}),g.jsx("circle",{cx:"0",cy:"0",r:"4",fill:t})]}),l===1&&g.jsxs(g.Fragment,{children:[g.jsx("rect",{x:"-30",y:"-30",width:"60",height:"60",stroke:t,strokeWidth:"1.2",fill:"none",transform:"rotate(15)"}),g.jsx("rect",{x:"-22",y:"-22",width:"44",height:"44",stroke:t,strokeWidth:"0.8",fill:"none",opacity:"0.5"}),g.jsx("circle",{cx:"0",cy:"0",r:"6",fill:t,opacity:"0.7"})]}),l===2&&g.jsxs(g.Fragment,{children:[Array.from({length:7}).map((u,c)=>g.jsx("line",{x1:"-40",y1:-21+c*7,x2:"40",y2:-21+c*7+4,stroke:t,strokeWidth:"0.8",opacity:.3+c*.1},c)),g.jsx("circle",{cx:"0",cy:"0",r:"5",fill:t})]}),l===3&&g.jsxs(g.Fragment,{children:[g.jsx("circle",{cx:"0",cy:"0",r:"40",stroke:t,strokeWidth:"1",fill:"none",opacity:"0.5"}),g.jsx("circle",{cx:"0",cy:"0",r:"25",stroke:t,strokeWidth:"1.2",fill:"none"}),g.jsx("circle",{cx:"0",cy:"0",r:"10",stroke:t,strokeWidth:"1",fill:t,fillOpacity:"0.3"})]})]}),Array.from({length:20}).map((u,c)=>{const f=c*37%180+10,h=c*53%180+10;return g.jsx("circle",{cx:f,cy:h,r:.8,fill:t,opacity:.4},c)})]})},MA=()=>{const[t,i]=_.useState("All"),l=_.useMemo(()=>["All",...Array.from(new Set(yt.flatMap(u=>u.visualTags)))],[]),o=t==="All"?yt:yt.filter(u=>u.visualTags.includes(t));return g.jsxs("div",{className:"page-fade",children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"02"}),g.jsx("span",{children:"Selected Work · 2022 — 2025"}),g.jsx("span",{className:"bar"}),g.jsxs("span",{style:{fontFamily:"var(--mono)",fontSize:11},children:[o.length," / ",yt.length]})]}),g.jsxs("h1",{className:"reveal",style:{fontFamily:"var(--serif)",fontSize:"clamp(28px, 3.2vw, 44px)",fontWeight:400,letterSpacing:"-0.015em",margin:"0 0 12px",lineHeight:1.15},children:[g.jsx("em",{style:{color:"var(--accent-hi)",fontStyle:"italic"},children:"Six"})," projects,",g.jsx("br",{}),g.jsx("span",{style:{color:"var(--fg-muted)"},children:"one obsession."})]}),g.jsx("p",{className:"reveal d1",style:{fontSize:15,color:"var(--fg-muted)",maxWidth:540,lineHeight:1.65,marginBottom:48},children:"시스템 UI, 성능, 보안 — 세 축에서 만들어 온 작업들. 각 카드를 클릭하면 케이스 스터디로 이동합니다."}),g.jsx("div",{className:"reveal d2",style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:40},children:l.map(u=>g.jsx("button",{onClick:()=>i(u),style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.06em",padding:"7px 14px",borderRadius:999,border:t===u?"1px solid var(--accent)":"1px solid var(--border)",background:t===u?"var(--accent-soft)":"transparent",color:t===u?"var(--accent-hi)":"var(--fg-muted)",transition:"all .25s",cursor:"pointer"},children:u},u))}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:20},children:o.map((u,c)=>g.jsx(gn,{to:`/projects/${u.id}`,className:"reveal",style:{animationDelay:`${.05*c}s`,textDecoration:"none",color:"inherit"},children:g.jsx(RA,{project:u,index:c})},u.id))})]})},RA=({project:t,index:i})=>{const[l,o]=_.useState(!1),u=i%4;return g.jsxs("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{position:"relative",aspectRatio:"1 / 1.18",borderRadius:16,overflow:"hidden",border:l?"1px solid var(--accent)":"1px solid var(--border)",background:"var(--bg-elevated)",cursor:"pointer",transition:"all .4s cubic-bezier(.22,.61,.36,1)",transform:l?"translateY(-4px)":"translateY(0)",boxShadow:l?`0 24px 60px ${t.color}33`:"0 0 0 transparent"},children:[g.jsx("div",{style:{position:"absolute",inset:0,transition:"opacity .4s"},children:t.banner?g.jsx("img",{src:t.banner,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",opacity:l?1:.78,transition:"opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",transform:l?"scale(1.04)":"scale(1)",filter:l?"saturate(1.18) brightness(1.04)":"saturate(1) brightness(0.98)"}}):g.jsx("div",{style:{opacity:l?1:.7,transition:"opacity .4s"},children:g.jsx($y,{color:t.color,variant:u})})}),g.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",transition:"background .4s ease",background:t.banner?l?"linear-gradient(to bottom, transparent 0%, transparent 55%, color-mix(in oklab, var(--bg-elevated) 55%, transparent) 78%, var(--bg-elevated) 100%)":"linear-gradient(to bottom, color-mix(in oklab, var(--bg-elevated) 25%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 55%, transparent) 55%, var(--bg-elevated) 95%)":"linear-gradient(to bottom, transparent 0%, transparent 30%, var(--bg-elevated) 95%)"}}),t.banner&&g.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:`radial-gradient(circle at top right, ${t.color}33, transparent 60%)`}}),g.jsxs("div",{style:{position:"absolute",inset:0,padding:22,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[g.jsxs("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.16em",color:"var(--fg-dim)"},children:[String(i+1).padStart(2,"0")," / ",t.year]}),g.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:11,fontWeight:700,letterSpacing:"0.12em",color:`color-mix(in oklab, ${t.color} 60%, var(--fg))`,padding:"4px 10px",background:"color-mix(in oklab, var(--bg-elevated) 92%, transparent)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",border:`1px solid color-mix(in oklab, ${t.color} 55%, var(--fg))`,borderRadius:999,textTransform:"uppercase"},children:t.visualTags[0]})]}),g.jsxs("div",{children:[g.jsx("h3",{style:{fontFamily:"var(--serif)",fontSize:18,fontWeight:500,margin:"0 0 6px",letterSpacing:"-0.01em",lineHeight:1.2},children:t.subTitle}),g.jsx("div",{style:{fontSize:12,color:"var(--fg-muted)",marginBottom:12,lineHeight:1.4},children:t.subtitle??t.summary.slice(0,60)+"…"}),g.jsx("div",{style:{display:"flex",alignItems:"center",gap:6,fontFamily:"var(--mono)",fontSize:11,color:l?t.color:"var(--fg-muted)",transition:"color .3s"},children:"View case →"})]})]})]})},zA=()=>{const{id:t}=Lg(),i=yt.findIndex(c=>c.id===t),l=i>=0?i:0,o=yt[l],u=yt[(l+1)%yt.length];return o?g.jsxs("div",{className:"page-fade",children:[g.jsx(gn,{to:"/projects",style:{background:"none",color:"var(--fg-muted)",fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em",padding:0,marginBottom:28,display:"inline-block",textDecoration:"none"},children:"← /projects"}),g.jsxs("div",{className:"reveal",style:{position:"relative",height:480,overflow:"hidden",borderRadius:16,background:"var(--bg-elevated)",border:"1px solid var(--border)",marginBottom:56},children:[o.banner?g.jsx("img",{src:o.banner,alt:o.title,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.4,filter:"saturate(1.1)"}}):g.jsx("div",{style:{position:"absolute",inset:0},children:g.jsx($y,{color:o.color,variant:l%4})}),g.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, transparent 30%, color-mix(in oklab, var(--bg) 85%, transparent) 100%)"}}),g.jsx("div",{style:{position:"absolute",left:40,bottom:40,right:40,display:"flex",justifyContent:"space-between",alignItems:"end",gap:32},children:g.jsxs("div",{children:[g.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.18em",color:o.color,marginBottom:12},children:["CASE 0",l+1," · ",o.year]}),g.jsx("h1",{style:{fontFamily:"var(--serif)",fontSize:"clamp(26px, 3.2vw, 44px)",fontWeight:400,letterSpacing:"-0.015em",lineHeight:1.1,margin:0},children:o.title}),g.jsx("div",{style:{marginTop:14,fontSize:14,color:"var(--fg-muted)",maxWidth:620,lineHeight:1.55},children:o.subtitle??o.summary})]})})]}),g.jsx("div",{className:"reveal d1",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:1,background:"var(--border)",border:"1px solid var(--border)",borderRadius:12,overflow:"hidden",marginBottom:64},children:[["Role",o.role],["Period",o.period],["Team",o.team],["Stack",o.stack.slice(0,2).join(" / ")]].map(([c,f])=>g.jsxs("div",{style:{padding:"20px 24px",background:"var(--bg-elevated)"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.16em",color:"var(--fg-dim)",textTransform:"uppercase",marginBottom:8},children:c}),g.jsx("div",{style:{fontSize:14,color:"var(--fg)",lineHeight:1.4},children:f})]},c))}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1.6fr)",gap:80,marginBottom:80},children:[g.jsxs("div",{children:[g.jsx("h2",{className:"reveal",style:{fontFamily:"var(--serif)",fontSize:22,fontWeight:500,margin:"0 0 4px",letterSpacing:"-0.01em"},children:"왜 이 프로젝트인가"}),g.jsx("div",{style:{width:60,height:1,background:"var(--accent)",marginTop:16}})]}),g.jsxs("div",{className:"reveal d1",style:{fontSize:16,lineHeight:1.75,color:"var(--fg-muted)"},children:[g.jsx("p",{style:{margin:"0 0 24px"},children:o.overview??o.summary}),o.why?.map((c,f)=>g.jsxs("div",{style:{marginBottom:24},children:[g.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.12em",color:"var(--accent)",marginBottom:8},children:[String(f+1).padStart(2,"0")," · ",c.title]}),g.jsx("p",{style:{margin:0},children:c.desc})]},f))]})]}),o.roleDetail&&g.jsxs("div",{style:{marginBottom:80},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsxs("span",{children:["Role · 수행 역할 (",o.roleDetail.percentage,")"]}),g.jsx("span",{className:"bar"})]}),g.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:o.roleDetail.tasks.map((c,f)=>g.jsxs("li",{className:"reveal",style:{animationDelay:`${.04*f}s`,display:"flex",gap:16,alignItems:"flex-start",padding:"18px 0",borderTop:"1px solid var(--border)",fontSize:14,color:"var(--fg-muted)",lineHeight:1.7},children:[g.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--accent)",letterSpacing:"0.12em",flexShrink:0,marginTop:4},children:String(f+1).padStart(2,"0")}),g.jsx("span",{children:c})]},f))})]}),o.troubleshooting&&o.troubleshooting.length>0&&g.jsxs("div",{style:{marginBottom:80},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsx("span",{children:"Troubleshooting"}),g.jsx("span",{className:"bar"})]}),g.jsx("div",{style:{display:"grid",gap:24},children:o.troubleshooting.map((c,f)=>g.jsxs("div",{className:"reveal",style:{animationDelay:`${.06*f}s`,padding:28,borderRadius:14,border:"1px solid var(--border)",background:"var(--bg-elevated)"},children:[g.jsx("h3",{style:{fontFamily:"var(--serif)",fontSize:17,fontWeight:500,letterSpacing:"-0.01em",margin:"0 0 16px"},children:c.title}),g.jsx(Eo,{label:"Problem",value:c.problem,color:"var(--fg)"}),g.jsx(Eo,{label:"Cause",value:c.cause,color:"var(--fg-muted)"}),g.jsx(Eo,{label:"Solution",value:c.solution,color:"var(--accent-hi)"}),g.jsx(Eo,{label:"Learning",value:c.learning,color:"var(--fg-muted)",last:!0})]},f))})]}),g.jsxs("div",{style:{marginBottom:100},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"04"}),g.jsx("span",{children:"Result"}),g.jsx("span",{className:"bar"})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:24,marginBottom:32},children:o.metrics.map((c,f)=>g.jsxs("div",{className:"reveal",style:{animationDelay:`${.08*f}s`,padding:36,borderRadius:14,border:`1px solid ${o.color}33`,background:`linear-gradient(135deg, ${o.color}0d, transparent)`},children:[g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:38,fontWeight:500,color:o.color,lineHeight:1,letterSpacing:"-0.02em"},children:c.v}),g.jsx("div",{style:{marginTop:14,fontSize:13,color:"var(--fg-muted)"},children:c.d})]},f))}),o.results&&o.results.length>0&&g.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:o.results.map((c,f)=>g.jsxs("li",{style:{display:"flex",gap:16,padding:"12px 0",borderTop:"1px solid var(--border)",fontSize:14,color:"var(--fg-muted)",lineHeight:1.6},children:[g.jsx("span",{style:{color:o.color,marginTop:6},children:"●"}),g.jsx("span",{style:{flex:1},children:c})]},f))})]}),g.jsxs("div",{className:"reveal",style:{marginBottom:100},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.18em",color:"var(--fg-dim)",textTransform:"uppercase",marginBottom:16},children:"Tech stack"}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:o.stack.map(c=>g.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:12,padding:"8px 14px",borderRadius:8,border:"1px solid var(--border)",color:"var(--fg)",background:"var(--bg-elevated)"},children:c},c))}),o.techDecisions&&o.techDecisions.length>0&&g.jsx("div",{style:{marginTop:32,display:"grid",gap:12},children:o.techDecisions.map((c,f)=>g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px 1fr",gap:24,padding:"12px 0",borderTop:"1px solid var(--border)",alignItems:"baseline"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--accent)",letterSpacing:"0.12em"},children:c.tech}),g.jsx("div",{style:{fontSize:13,color:"var(--fg-muted)",lineHeight:1.6},children:c.reason})]},f))})]}),g.jsxs(gn,{to:`/projects/${u.id}`,style:{padding:"44px 48px",borderRadius:16,border:"1px solid var(--border)",background:"var(--bg-elevated)",cursor:"pointer",transition:"all .35s",display:"flex",justifyContent:"space-between",alignItems:"center",textDecoration:"none",color:"inherit"},onMouseEnter:c=>{c.currentTarget.style.borderColor=u.color},onMouseLeave:c=>{c.currentTarget.style.borderColor="var(--border)"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em",color:"var(--fg-dim)",marginBottom:8},children:"NEXT CASE →"}),g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:22,fontWeight:500,letterSpacing:"-0.01em"},children:u.subTitle})]}),g.jsx("div",{style:{fontSize:32,color:u.color},children:"→"})]})]}):g.jsxs("div",{style:{paddingTop:80},children:["프로젝트를 찾을 수 없습니다.",g.jsx(gn,{to:"/projects",style:{color:"var(--accent)",marginLeft:8},children:"← 목록으로"})]})},Eo=({label:t,value:i,color:l,last:o})=>g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"100px 1fr",gap:16,padding:"12px 0",borderTop:"1px solid var(--border)",borderBottom:"none"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em",color:"var(--fg-dim)",textTransform:"uppercase"},children:t}),g.jsx("div",{style:{fontSize:14,color:l,lineHeight:1.65},children:i})]}),_A="/portfolio-3D/assets/profile-iGAXjK9j.jpg",OA=()=>g.jsxs("div",{className:"page-fade",children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"04"}),g.jsx("span",{children:"About"}),g.jsx("span",{className:"bar"})]}),g.jsxs("div",{className:"about-hero-grid",style:{display:"grid",gridTemplateColumns:"minmax(220px, 280px) minmax(0, 1fr)",gap:56,alignItems:"start",marginBottom:96},children:[g.jsxs("div",{className:"reveal about-portrait",style:{aspectRatio:"1/1.2",borderRadius:14,background:"linear-gradient(135deg, var(--accent-soft), var(--bg-elevated))",border:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[g.jsx("img",{src:_A,alt:"권경민 프로필",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block"}}),g.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.45) 100%)",pointerEvents:"none"}}),g.jsx("div",{style:{position:"absolute",left:18,bottom:18,fontFamily:"var(--mono)",fontSize:10,color:"rgba(255,255,255,0.78)",letterSpacing:"0.16em"},children:"[ PORTRAIT · 2026 ]"})]}),g.jsxs("div",{children:[g.jsxs("h1",{className:"reveal d1",style:{fontFamily:"var(--serif)",fontSize:"clamp(24px, 3vw, 40px)",fontWeight:400,letterSpacing:"-0.015em",lineHeight:1.2,margin:"0 0 24px"},children:["안녕하세요,"," ",g.jsx("em",{style:{color:"var(--accent-hi)",fontStyle:"italic"},children:"권경민"}),"입니다."]}),g.jsxs("div",{className:"reveal d2",style:{fontSize:16,lineHeight:1.75,color:"var(--fg-muted)",maxWidth:620,marginBottom:28},children:[g.jsxs("p",{style:{margin:"0 0 18px"},children:["저는 사이버보안 전공의 시각으로 시스템과 인터페이스를 설계하는 프론트엔드 엔지니어입니다. 차량용 로그 분석기, 보안 통신 채팅, AI 시뮬레이션 — 도메인은 달라도 모든 작업의 중심은 ",g.jsx("em",{style:{color:"var(--fg)",fontStyle:"italic"},children:'"읽을 수 있는 시스템"'}),"입니다."]}),g.jsx("p",{style:{margin:"0 0 18px"},children:"초당 8만 건 이상의 차량 로그를 UI Freezing 없이 실시간 시각화하고, 100만 라인을 2초 안에 검색하는 도구를 만들면서 — 성능과 보안은 디자인의 일부라는 생각이 단단해졌습니다. 지금은 자율주행 시뮬레이션 도메인으로 영역을 확장하고 있습니다."}),g.jsxs("p",{style:{margin:0},children:["평소엔 글을 자주 씁니다. 기술이 도구가 아니라 ",g.jsx("em",{style:{color:"var(--fg)",fontStyle:"italic"},children:"언어"}),"가 되도록."]})]}),g.jsxs("div",{className:"reveal d3 about-cta-row",style:{display:"flex",gap:12},children:[g.jsx(gn,{to:"/contact",style:{padding:"11px 20px",borderRadius:10,background:"var(--accent)",color:"white",fontSize:13,fontWeight:600,textDecoration:"none"},children:"같이 일하기 →"}),g.jsx(gn,{to:"/blog",style:{padding:"11px 20px",borderRadius:10,background:"transparent",color:"var(--fg-muted)",border:"1px solid var(--border)",fontSize:13,textDecoration:"none"},children:"글 읽기"})]})]})]}),g.jsxs("div",{style:{marginBottom:100},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.18em",color:"var(--fg-dim)",textTransform:"uppercase",marginBottom:32},children:"— Timeline"}),Wy.map((t,i)=>g.jsxs("div",{className:"reveal about-timeline-row",style:{animationDelay:`${.06*i}s`,display:"grid",gridTemplateColumns:"100px 1fr 240px",gap:32,padding:"28px 0",borderTop:"1px solid var(--border)",alignItems:"baseline"},children:[g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:22,fontWeight:500,color:"var(--accent-hi)",letterSpacing:"-0.01em"},children:t.y}),g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:16,fontWeight:500,letterSpacing:"-0.005em"},children:t.role}),t.detail&&g.jsx("div",{style:{fontSize:13,color:"var(--fg-muted)",marginTop:4},children:t.detail})]}),g.jsx("div",{className:"about-timeline-org",style:{fontSize:13,color:"var(--fg-muted)",textAlign:"right",fontFamily:"var(--mono)",letterSpacing:"0.06em"},children:t.org})]},`${t.y}-${t.role}`))]}),g.jsxs("div",{style:{marginBottom:80},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsx("span",{children:"What I care about"}),g.jsx("span",{className:"bar"})]}),g.jsx("div",{className:"about-values-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:20},children:[["Truth in UI","복잡한 시스템에 대해 거짓말하지 않는 인터페이스를 만듭니다. 80K logs/sec를 60fps로 유지한다고 말하려면, 진짜로 그래야 합니다."],["Engineered craft","성능과 보안은 디자인의 일부입니다. 평문 0건을 만들기 위한 RSA/AES 하이브리드 설계도, Web Worker 분리도 — 결국 사용자가 느끼는 견고함입니다."],["Plain language","코드도, 글도, 인터페이스도 — 읽히는 게 우선입니다. DDD 기반 도메인 슬라이스로 코드베이스를 30% 경량화한 이유도 같습니다."]].map(([t,i],l)=>g.jsxs("div",{className:"reveal",style:{animationDelay:`${.08*l}s`,padding:28,borderRadius:14,border:"1px solid var(--border)",background:"var(--bg-elevated)"},children:[g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:17,fontWeight:500,marginBottom:10,letterSpacing:"-0.005em"},children:g.jsx("em",{style:{color:"var(--accent-hi)",fontStyle:"italic"},children:t})}),g.jsx("div",{style:{fontSize:14,lineHeight:1.6,color:"var(--fg-muted)"},children:i})]},t))})]})]}),NA=[{id:"pkg-1",name:"@broadcast-event-system",description:"“React 애플리케이션을 위한 타입 안전(Type-safe) 이벤트 버스 및 브로드캐스트 서비스입니다. React 훅을 사용할 때만 React가 필요하고, 그 외에는 의존성이 전혀 없는 순수 TypeScript(Zero dependencies)입니다.”",version:"1.0.3",githubUrl:"https://github.com/km-kwon/broadcast-event-system",npmUrl:"https://www.npmjs.com/package/broadcast-event-system",techStack:["React","TypeScript","event-driven","web-broadcast"]},{id:"pkg-2",name:"@circular-queue-react",description:"TypeScript와 React를 위한 고성능 원형 버퍼/큐입니다. 의존성은 없고(React는 선택 사항), 로그 처리, 스트리밍 데이터, 롤링 윈도우, 실시간 UI 업데이트에 좋습니다.",version:"1.0.2",githubUrl:"https://github.com/km-kwon/react-circular-queue",npmUrl:"https://www.npmjs.com/package/circular-queue-react",techStack:["React","TypeScript","Data Structure"]}],LA=[{label:"GitHub Actions CI/CD",desc:"Push·PR 트리거 기반 빌드/테스트/배포 파이프라인 구축. 릴리스 전 회귀 검증 자동화로 휴먼 에러 차단."},{label:"Vitest 테스트 커버리지 100%",desc:"라이브러리 핵심 로직에 대한 단위/통합 테스트 운영. 커버리지 100% 유지로 리팩토링 안정성 확보."}],BA=()=>{const t=[{v:"3y+",d:"Frontend Experience"},{v:`${yt.length}`,d:"Shipped Projects"},{v:"80K/s",d:"Best Performance"},{v:"0",d:"Wireshark 평문 노출"}];return g.jsxs("div",{className:"page-fade",children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:8,gap:16,flexWrap:"wrap"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.18em",color:"var(--fg-dim)"},children:"CURRICULUM · v2026.05"}),g.jsxs("div",{style:{display:"flex",gap:8},children:[g.jsx("a",{href:"/portfolio-3D/resume.pdf",target:"_blank",rel:"noreferrer",style:{padding:"9px 16px",borderRadius:8,background:"var(--accent)",color:"white",border:0,fontSize:12,fontWeight:600,textDecoration:"none"},children:"↓ PDF"}),g.jsx("button",{style:{padding:"9px 16px",borderRadius:8,background:"transparent",color:"var(--fg-muted)",border:"1px solid var(--border)",fontSize:12,cursor:"pointer"},onClick:()=>window.print(),children:"Print"})]})]}),g.jsx("h1",{className:"reveal",style:{fontFamily:"var(--serif)",fontSize:"clamp(36px, 4.5vw, 64px)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.05,margin:"0 0 8px"},children:"권경민"}),g.jsxs("div",{className:"reveal d1",style:{fontSize:14,color:"var(--fg-muted)",marginBottom:56},children:[g.jsx("em",{style:{fontFamily:"var(--serif)",fontStyle:"italic",color:"var(--accent-hi)"},children:"Frontend"})," × ",g.jsx("em",{style:{fontFamily:"var(--serif)",fontStyle:"italic",color:"var(--accent-hi)"},children:"System"})," × ",g.jsx("em",{style:{fontFamily:"var(--serif)",fontStyle:"italic",color:"var(--accent-hi)"},children:"Security"})]}),g.jsx("div",{className:"reveal d2",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16,marginBottom:80},children:t.map(i=>g.jsxs("div",{style:{padding:28,borderRadius:14,border:"1px solid var(--border)",background:"linear-gradient(135deg, var(--accent-soft), transparent)"},children:[g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:32,fontWeight:500,color:"var(--accent-hi)",lineHeight:1,letterSpacing:"-0.015em"},children:i.v}),g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--fg-muted)",marginTop:12,letterSpacing:"0.06em",textTransform:"uppercase"},children:i.d})]},i.d))}),g.jsxs("div",{style:{marginBottom:80},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsx("span",{children:"Career timeline"}),g.jsx("span",{className:"bar"})]}),g.jsxs("div",{style:{position:"relative",paddingLeft:32},children:[g.jsx("div",{style:{position:"absolute",left:12,top:0,bottom:0,width:2,background:"var(--border)"}}),Wy.map((i,l)=>g.jsxs("div",{className:"reveal",style:{animationDelay:`${.05*l}s`,position:"relative",paddingBottom:32},children:[g.jsx("div",{style:{position:"absolute",left:-27,top:6,width:16,height:16,borderRadius:8,background:"var(--accent)",boxShadow:"0 0 0 4px var(--bg), 0 0 16px var(--accent-glow)"}}),g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--accent)",letterSpacing:"0.16em",marginBottom:4},children:i.y}),g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:16,fontWeight:500,letterSpacing:"-0.005em"},children:i.role}),g.jsxs("div",{style:{fontSize:13,color:"var(--fg-muted)",marginTop:2},children:[i.org,i.detail?` · ${i.detail}`:""]})]},`${i.y}-${l}`))]})]}),g.jsxs("div",{style:{marginBottom:80},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsx("span",{children:"Experience detail"}),g.jsx("span",{className:"bar"})]}),g.jsx("div",{style:{display:"grid",gap:32},children:Zy.map(i=>g.jsxs("div",{className:"reveal",style:{padding:32,borderRadius:14,border:"1px solid var(--border)",background:"var(--bg-elevated)"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:12,marginBottom:16},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:18,fontWeight:500,letterSpacing:"-0.005em"},children:i.position}),g.jsxs("div",{style:{fontSize:13,color:"var(--fg-muted)",marginTop:4},children:[i.company," · ",i.department]})]}),g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.12em",color:"var(--accent)"},children:i.period})]}),i.transition&&g.jsx("div",{style:{fontSize:13,color:"var(--fg-muted)",lineHeight:1.7,marginBottom:20,fontStyle:"italic"},children:i.transition}),g.jsx("div",{style:{display:"grid",gap:20},children:i.projects.map(l=>g.jsxs("div",{style:{padding:20,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-soft)"},children:[g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:15,fontWeight:500,marginBottom:6},children:l.name}),g.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--accent)",letterSpacing:"0.08em",marginBottom:8},children:[l.role," · ",l.period]}),g.jsx("div",{style:{fontSize:13,color:"var(--fg-muted)",lineHeight:1.65,marginBottom:12},children:g.jsx("strong",{style:{color:"var(--accent-hi)"},children:l.impact})}),l.achievements&&l.achievements.length>0&&g.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:l.achievements.map((o,u)=>g.jsxs("li",{style:{fontSize:13,color:"var(--fg-muted)",lineHeight:1.6,padding:"4px 0",display:"flex",gap:10},children:[g.jsx("span",{style:{color:"var(--accent)",marginTop:2},children:"·"}),g.jsx("span",{children:o})]},u))})]},l.name))})]},i.id))})]}),g.jsxs("div",{style:{marginBottom:80},children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsx("span",{children:"Open Source & Engineering Quality"}),g.jsx("span",{className:"bar"})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:20,marginBottom:24},children:NA.map(i=>g.jsxs("div",{className:"reveal",style:{padding:24,borderRadius:12,border:"1px solid var(--border)",background:"var(--bg-elevated)",display:"flex",flexDirection:"column",gap:12},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:8,flexWrap:"wrap"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:13,fontWeight:600,color:"var(--accent-hi)",letterSpacing:"-0.005em"},children:i.name}),g.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--fg-muted)",letterSpacing:"0.08em"},children:["v",i.version]})]}),g.jsx("div",{style:{fontSize:12.5,color:"var(--fg-muted)",lineHeight:1.65},children:i.description}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:i.techStack.map(l=>g.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,padding:"3px 8px",borderRadius:999,border:"1px solid var(--accent-border)",background:"var(--accent-soft)",color:"var(--accent)",letterSpacing:"0.04em"},children:l},l))}),g.jsxs("div",{style:{display:"flex",gap:12,marginTop:"auto"},children:[i.githubUrl&&g.jsx("a",{href:i.githubUrl,target:"_blank",rel:"noreferrer",style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--fg-muted)",letterSpacing:"0.06em",textDecoration:"none",borderBottom:"1px solid var(--border)",paddingBottom:2},children:"GITHUB ↗"}),i.npmUrl&&g.jsx("a",{href:i.npmUrl,target:"_blank",rel:"noreferrer",style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--fg-muted)",letterSpacing:"0.06em",textDecoration:"none",borderBottom:"1px solid var(--border)",paddingBottom:2},children:"NPM ↗"})]})]},i.id))}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:16},children:LA.map(i=>g.jsxs("div",{style:{padding:20,borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-soft)"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.16em",color:"var(--accent)",textTransform:"uppercase",marginBottom:8},children:i.label}),g.jsx("div",{style:{fontSize:13,color:"var(--fg-muted)",lineHeight:1.65},children:i.desc})]},i.label))})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:56,marginBottom:80},children:[g.jsxs("div",{children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsx("span",{children:"Skills"}),g.jsx("span",{className:"bar"})]}),Ky.map(i=>g.jsxs("div",{style:{padding:"18px 0",borderTop:"1px solid var(--border)"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--accent)",letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:8},children:i.group}),g.jsx("div",{style:{fontSize:14,color:"var(--fg)",lineHeight:1.6},children:i.items.join(" · ")})]},i.group))]}),g.jsxs("div",{children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"·"}),g.jsx("span",{children:"Education & Awards"}),g.jsx("span",{className:"bar"})]}),[["2019 — 2024","Ajou University","Computer Engineering · 사이버보안 전공 · B.S."],["2023","GDSC Solution Challenge","Vary Recycle · Google AI 솔루션 챌린지 출품"],["2024","교내 캡스톤 디자인","모강(SW 강의 비교 플랫폼) — 5위 / 25팀"]].map(([i,l,o])=>g.jsxs("div",{style:{padding:"18px 0",borderTop:"1px solid var(--border)"},children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--accent)",letterSpacing:"0.16em",marginBottom:6},children:i}),g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:15,fontWeight:500,letterSpacing:"-0.005em"},children:l}),g.jsx("div",{style:{fontSize:13,color:"var(--fg-muted)",marginTop:2},children:o})]},l))]})]})]})},UA=5e3,Mc=500,HA=()=>{const t=Dl.find(f=>f.featured)??Dl[0],i=Dl.filter(f=>f.slug!==t?.slug),l=_.useMemo(()=>["All",...Array.from(new Set(Dl.map(f=>f.tag)))],[]),[o,u]=_.useState("All"),c=o==="All"?i:i.filter(f=>f.tag===o);return g.jsxs("div",{className:"page-fade",children:[g.jsxs("div",{className:"wf-marker",children:[g.jsx("span",{className:"num",children:"06"}),g.jsxs("span",{children:["Writing · ",Dl.length," posts"]}),g.jsx("span",{className:"bar"})]}),g.jsxs("h1",{className:"reveal",style:{fontFamily:"var(--serif)",fontSize:"clamp(28px, 3.2vw, 44px)",fontWeight:400,letterSpacing:"-0.015em",margin:"0 0 32px",lineHeight:1.15},children:[g.jsx("em",{style:{color:"var(--accent-hi)",fontStyle:"italic"},children:"Words"}),",",g.jsx("br",{}),g.jsx("span",{style:{color:"var(--fg-muted)"},children:"not just code."})]}),g.jsx(IA,{posts:Dl}),g.jsx("div",{className:"reveal d2",style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:32},children:l.map(f=>g.jsx("button",{onClick:()=>u(f),style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.06em",padding:"7px 14px",borderRadius:999,border:o===f?"1px solid var(--accent)":"1px solid var(--border)",background:o===f?"var(--accent-soft)":"transparent",color:o===f?"var(--accent-hi)":"var(--fg-muted)",transition:"all .25s",cursor:"pointer"},children:f},f))}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:c.map((f,h)=>g.jsx(FA,{post:f,index:h},f.slug))})]})},IA=({posts:t})=>{const[i,l]=_.useState(0),[o,u]=_.useState(!1),[c,f]=_.useState(!1),h=_.useRef(null);_.useEffect(()=>{if(o||t.length<2)return;const p=setInterval(()=>{f(!0),h.current=setTimeout(()=>{l(x=>{if(t.length===1)return 0;let y=x;for(;y===x;)y=Math.floor(Math.random()*t.length);return y}),f(!1)},Mc)},UA);return()=>{clearInterval(p),h.current&&(clearTimeout(h.current),h.current=null),f(!1)}},[o,t.length]);const m=t[i];return m?g.jsxs(gn,{to:`/blog/${m.slug}`,className:"reveal d1",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),style:{position:"relative",display:"block",height:280,marginBottom:56,borderRadius:18,border:"1px solid var(--accent)",background:"linear-gradient(135deg, var(--accent-soft), transparent 70%)",cursor:"pointer",overflow:"hidden",transition:"transform .3s ease, box-shadow .3s ease",textDecoration:"none",color:"inherit",transform:o?"translateY(-4px)":"translateY(0)",boxShadow:o?"0 30px 60px color-mix(in oklab, var(--accent) 22%, transparent)":"0 0 0 transparent"},children:[g.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:c?0:1,transition:`opacity ${Mc}ms ease`},children:[m.cover&&g.jsx("img",{src:m.cover,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:o?.92:.78,transition:"opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",transform:o?"scale(1.03)":"scale(1)",filter:o?"saturate(1.15) brightness(1.02)":"saturate(0.95) brightness(0.94)"}}),g.jsx("div",{style:{position:"absolute",inset:0,transition:"background .4s ease",background:m.cover?o?"linear-gradient(135deg, color-mix(in oklab, var(--bg-elevated) 35%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 60%, transparent) 100%)":"linear-gradient(135deg, color-mix(in oklab, var(--bg-elevated) 50%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 80%, transparent) 100%)":"transparent"}}),g.jsx("div",{style:{position:"absolute",right:-80,top:-80,width:320,height:320,background:"radial-gradient(circle, var(--accent-glow), transparent 60%)",filter:"blur(20px)"}})]}),g.jsxs("div",{style:{position:"absolute",inset:0,padding:40,opacity:c?0:1,transition:`opacity ${Mc}ms ease`,display:"grid",gridTemplateColumns:"minmax(0, 1fr) auto",gap:40,alignItems:"end"},children:[g.jsxs("div",{style:{minWidth:0},children:[g.jsxs("div",{style:{display:"flex",gap:12,marginBottom:16,fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em",color:"var(--accent-hi)"},children:[g.jsx("span",{children:"★ FEATURED"}),g.jsx("span",{style:{color:"var(--fg-dim)"},children:"·"}),g.jsx("span",{style:{color:"var(--fg-dim)"},children:m.date}),g.jsx("span",{style:{color:"var(--fg-dim)"},children:"·"}),g.jsxs("span",{style:{color:"var(--fg-dim)"},children:[m.read," min"]})]}),g.jsx("h2",{style:{fontFamily:"var(--serif)",fontSize:"clamp(20px, 2.4vw, 28px)",fontWeight:500,margin:"0 0 12px",lineHeight:1.25,letterSpacing:"-0.01em",maxWidth:720,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.title}),g.jsx("div",{style:{fontSize:14,color:"var(--fg-muted)",maxWidth:540,lineHeight:1.55,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.excerpt})]}),g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:48,color:"var(--accent)",lineHeight:1,paddingLeft:16,transition:"transform .3s ease",transform:o?"translateX(6px)":"translateX(0)"},children:"→"})]})]}):null},FA=({post:t,index:i})=>{const[l,o]=_.useState(!1);return g.jsxs(gn,{to:`/blog/${t.slug}`,className:"reveal",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{animationDelay:`${.04*i}s`,position:"relative",overflow:"hidden",padding:24,borderRadius:12,border:l?"1px solid var(--accent)":"1px solid var(--border)",background:"var(--bg-elevated)",cursor:"pointer",transition:"border-color .3s, transform .3s, box-shadow .3s",transform:l?"translateY(-3px)":"translateY(0)",boxShadow:l?"0 18px 40px color-mix(in oklab, var(--accent) 18%, transparent)":"0 0 0 transparent",display:"flex",flexDirection:"column",gap:12,minHeight:180,textDecoration:"none",color:"inherit"},children:[t.cover&&g.jsx("img",{src:t.cover,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:l?.92:.62,pointerEvents:"none",transition:"opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",transform:l?"scale(1.04)":"scale(1)",filter:l?"saturate(1.15) brightness(1.02)":"saturate(0.95) brightness(0.94)"}}),g.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",transition:"background .4s ease",background:t.cover?l?"linear-gradient(180deg, transparent 0%, transparent 38%, color-mix(in oklab, var(--bg-elevated) 65%, transparent) 70%, var(--bg-elevated) 100%)":"linear-gradient(180deg, color-mix(in oklab, var(--bg-elevated) 40%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 80%, transparent) 55%, var(--bg-elevated) 100%)":"transparent"}}),g.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"var(--mono)",fontSize:10,color:"var(--fg)",letterSpacing:"0.1em"},children:[g.jsxs("span",{style:{fontWeight:500,fontSize:10,letterSpacing:"0.1em",padding:"3px 8px",borderRadius:999,background:"color-mix(in oklab, var(--bg-elevated) 75%, transparent)",border:"1px solid var(--border)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",color:"var(--fg-muted)"},children:["POST · ",String(i+2).padStart(2,"0")]}),g.jsx("span",{style:{fontWeight:600,fontSize:11,letterSpacing:"0.12em",padding:"4px 10px",borderRadius:999,color:"color-mix(in oklab, var(--accent) 65%, var(--fg))",background:"color-mix(in oklab, var(--bg-elevated) 92%, transparent)",border:"1px solid color-mix(in oklab, var(--accent) 55%, var(--fg))",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)"},children:t.tag})]}),g.jsx("div",{style:{flex:1}}),g.jsx("h3",{style:{position:"relative",fontFamily:"var(--serif)",fontSize:17,fontWeight:600,margin:0,lineHeight:1.3,letterSpacing:"-0.01em",color:"var(--fg)"},children:t.title}),g.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"space-between",fontFamily:"var(--mono)",fontSize:10,color:"var(--fg-dim)",letterSpacing:"0.06em"},children:[g.jsx("span",{children:t.date}),g.jsxs("span",{children:[t.read," min read →"]})]})]})},qA=()=>g.jsx("div",{className:"page-fade",style:{minHeight:"calc(100vh - var(--header-h) - 120px)",display:"flex",alignItems:"center"},children:g.jsxs("div",{style:{width:"100%"},children:[g.jsxs("div",{className:"reveal",style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.18em",color:"var(--fg-dim)",marginBottom:36,display:"flex",alignItems:"center",gap:12},children:[g.jsx("span",{style:{width:8,height:8,borderRadius:4,background:"var(--accent)",boxShadow:"0 0 16px var(--accent-glow)"}}),"06 / END OF SCENE"]}),g.jsxs("h1",{className:"reveal d1",style:{fontFamily:"var(--serif)",fontSize:"clamp(34px, 4.5vw, 60px)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.05,margin:"0 0 28px"},children:["Let's ",g.jsx("em",{style:{fontStyle:"italic",color:"var(--accent-hi)"},children:"build"}),g.jsx("br",{}),"something ",g.jsx("em",{style:{fontStyle:"italic",color:"var(--accent)"},children:"real"}),"."]}),g.jsx("p",{className:"reveal d2",style:{fontSize:14,color:"var(--fg-muted)",maxWidth:580,marginBottom:48,lineHeight:1.65},children:"시스템 UI / 성능 / 보안 — 도메인은 다양해도 좋습니다. 풀타임 합류, 외주 협업, 기술 멘토링까지 환영합니다. 24시간 안에 답장드립니다."}),g.jsxs("a",{href:"mailto:lanos0609@gmail.com",className:"reveal d3",style:{display:"inline-block",padding:"28px 36px",borderRadius:16,border:"1px solid var(--accent)",background:"linear-gradient(135deg, var(--accent-soft), transparent)",marginBottom:40,cursor:"pointer",transition:"all .3s",textDecoration:"none",color:"inherit"},onMouseEnter:t=>t.currentTarget.style.transform="translateY(-2px)",onMouseLeave:t=>t.currentTarget.style.transform="translateY(0)",children:[g.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.18em",color:"var(--fg-dim)",marginBottom:8},children:"EMAIL ↗"}),g.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:22,fontWeight:500,letterSpacing:"-0.005em"},children:"lanos0609@gmail.com"})]}),g.jsx("div",{className:"reveal d4",style:{display:"flex",gap:12,flexWrap:"wrap"},children:AA.map(t=>g.jsxs("a",{href:t.href,target:t.href.startsWith("http")?"_blank":void 0,rel:t.href.startsWith("http")?"noreferrer":void 0,style:{padding:"14px 20px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg-elevated)",fontSize:13,color:"var(--fg-muted)",display:"inline-flex",alignItems:"center",gap:10,transition:"all .25s",textDecoration:"none"},onMouseEnter:i=>{i.currentTarget.style.color="var(--fg)",i.currentTarget.style.borderColor="var(--accent)"},onMouseLeave:i=>{i.currentTarget.style.color="var(--fg-muted)",i.currentTarget.style.borderColor="var(--border)"},children:[g.jsx("span",{style:{color:"var(--accent)"},children:"↗"}),g.jsx("span",{style:{fontFamily:"var(--mono)"},children:t.label}),g.jsx("span",{style:{color:"var(--fg-dim)",fontSize:11},children:t.host})]},t.label))}),g.jsxs("div",{style:{marginTop:100,paddingTop:32,borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",fontFamily:"var(--mono)",fontSize:11,color:"var(--fg-dim)",letterSpacing:"0.06em"},children:[g.jsx("span",{children:"SEOUL · KST · UTC+9"}),g.jsx("span",{children:"v2026.05 · Updated May 4"})]})]})}),VA=t=>t==="/"?"home":t.startsWith("/projects/")?"detail":t.startsWith("/projects")?"projects":t.startsWith("/about")?"about":t.startsWith("/resume")?"resume":t.startsWith("/blog")?"blog":t.startsWith("/contact")?"contact":t.startsWith("/lab")?"projects":"home",GA=({theme:t,onToggleTheme:i})=>{const l=ct(),o=VA(l.pathname),[u,c]=_.useState(0),[f,h]=_.useState({x:0,y:0});return _.useEffect(()=>{const m=()=>c(window.scrollY);return window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]),_.useEffect(()=>{const m=p=>{h({x:p.clientX/window.innerWidth-.5,y:p.clientY/window.innerHeight-.5})};return window.addEventListener("mousemove",m,{passive:!0}),()=>window.removeEventListener("mousemove",m)},[]),g.jsxs(g.Fragment,{children:[g.jsx(Jx,{}),g.jsx(WC,{page:o,scrollY:u,mouse:f}),g.jsx(QC,{theme:t,onToggleTheme:i}),g.jsx($C,{}),g.jsx("main",{style:{position:"relative",zIndex:2,maxWidth:"var(--content-max)",margin:"0 auto",padding:"calc(var(--header-h) + 32px) 24px 80px"},children:g.jsxs(px,{children:[g.jsx(pt,{path:"/",element:g.jsx(jA,{})}),g.jsx(pt,{path:"/projects",element:g.jsx(MA,{})}),g.jsx(pt,{path:"/projects/:id",element:g.jsx(zA,{})}),g.jsx(pt,{path:"/about",element:g.jsx(OA,{})}),g.jsx(pt,{path:"/resume",element:g.jsx(BA,{})}),g.jsx(pt,{path:"/blog",element:g.jsx(HA,{})}),g.jsx(pt,{path:"/blog/:slug",element:g.jsx(BC,{})}),g.jsx(pt,{path:"/contact",element:g.jsx(qA,{})}),g.jsx(pt,{path:"/lab",element:g.jsx(XC,{})})]})}),g.jsxs("footer",{style:{position:"relative",zIndex:2,maxWidth:"var(--content-max)",margin:"0 auto",padding:"60px 24px 40px",borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"baseline",fontFamily:"var(--mono)",fontSize:11,color:"var(--fg-dim)",letterSpacing:"0.06em",flexWrap:"wrap",gap:16},children:[g.jsxs("div",{children:["© ",new Date().getFullYear()," KM-KWON · BUILT WITH REACT + R3F"]}),g.jsxs("div",{style:{display:"flex",gap:16},children:[g.jsx(gn,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:"CONTACT"}),g.jsx("a",{href:"https://github.com/km-kwon",target:"_blank",rel:"noreferrer",style:{color:"inherit",textDecoration:"none"},children:"GITHUB ↗"}),g.jsx("span",{children:"v2026.05"})]})]})]})},PA=()=>{const[t,i]=_.useState(()=>{if(typeof window>"u")return"dark";try{return localStorage.getItem("portfolio-theme")||"dark"}catch{return"dark"}});_.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",t),document.body.setAttribute("data-theme",t);try{localStorage.setItem("portfolio-theme",t)}catch{}}},[t]);const l=_.useCallback(()=>{i(u=>u==="dark"?"light":"dark")},[]),o="/portfolio-3D/".replace(/\/$/,"");return g.jsx(Ux,{basename:o===""?void 0:o,children:g.jsx(GA,{theme:t,onToggleTheme:l})})};Tv.createRoot(document.getElementById("root")).render(g.jsx(PA,{}));export{g as j,_ as r};
