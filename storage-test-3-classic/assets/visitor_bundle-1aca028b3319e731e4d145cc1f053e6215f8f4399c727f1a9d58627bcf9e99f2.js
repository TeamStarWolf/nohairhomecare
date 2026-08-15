/**
 * @popperjs/core v2.11.8 - MIT License
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var u=(n(e)?t(e):window).visualViewport,l=!c()&&i,d=(a.left+(l&&u?u.offsetLeft:0))/f,h=(a.top+(l&&u?u.offsetTop:0))/p,m=a.width/f,v=a.height/p;return{width:m,height:v,top:h,right:d+m,bottom:h+v,left:d,x:d,y:h}}function u(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return t(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),m=d(n),y=p(e,c,o),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==l(n)||v(m))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:u(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):m&&(b.x=h(m))),{x:y.left+g.scrollLeft-b.x,y:y.top+g.scrollTop-b.y,width:y.width,height:y.height}}function g(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function x(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:r(e)&&v(e)?e:x(b(e))}function w(e,n){var r;void 0===n&&(n=[]);var o=x(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(w(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return r(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var n=t(e),i=j(e);i&&O(i)&&"static"===m(i).position;)i=j(i);return i&&("html"===l(i)||"body"===l(i)&&"static"===m(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&"fixed"===m(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(l(n))<0;){var i=m(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var D="top",A="bottom",L="right",P="left",M="auto",k=[D,A,L,P],W="start",B="end",H="viewport",T="popper",R=k.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),S=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function N(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function I(e,r,o){return r===H?N(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var u=c();(u||!u&&"fixed"===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+h(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):N(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function _(e,t,o,s){var f="clippingParents"===t?function(e){var t=w(b(e)),o=["absolute","fixed"].indexOf(m(e).position)>=0&&r(e)?E(e):e;return n(o)?t.filter((function(e){return n(e)&&C(e,o)&&"body"!==l(e)})):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],u=c.reduce((function(t,n){var r=I(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),I(e,p,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function F(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?"clippingParents":f,u=r.rootBoundary,l=void 0===u?H:u,h=r.elementContext,m=void 0===h?T:h,v=r.altBoundary,y=void 0!==v&&v,g=r.padding,b=void 0===g?0:g,x=Y("number"!=typeof b?b:G(b,k)),w=m===T?"reference":T,O=e.rects.popper,j=e.elements[y?w:m],E=_(n(j)?j:j.contextElement||d(e.elements.popper),c,l,s),P=p(e.elements.reference),M=X({reference:P,element:O,strategy:"absolute",placement:i}),W=N(Object.assign({},O,M)),B=m===T?W:P,R={top:E.top-B.top+x.top,bottom:B.bottom-E.bottom+x.bottom,left:E.left-B.left+x.left,right:B.right-E.right+x.right},S=e.modifiersData.offset;if(m===T&&S){var V=S[i];Object.keys(R).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";R[e]+=V[n]*t}))}return R}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?K:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var s,p,d=function(e){var t=q(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(Q(t,n)){f.rects={reference:y(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&c.addEventListener("resize",r.update,$),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&c.removeEventListener("resize",r.update,$)}},data:{}};var te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,x="function"==typeof l?l({x:y,y:b}):{x:y,y:b};y=x.x,b=x.y;var w=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=P,M=D,k=window;if(u){var W=E(r),H="clientHeight",T="clientWidth";if(W===t(r)&&"static"!==m(W=d(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),W=W,i===D||(i===P||i===L)&&a===B)M=A,b-=(h&&W===k&&k.visualViewport?k.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===P||(i===D||i===A)&&a===B)j=L,y-=(h&&W===k&&k.visualViewport?k.visualViewport.width:W[T])-o.width,y*=p?1:-1}var R,S=Object.assign({position:c},u&&ne),V=!0===l?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:s(n*o)/o||0,y:s(r*o)/o||0}}({x:y,y:b},t(r)):{x:y,y:b};return y=V.x,b=V.y,p?Object.assign({},S,((R={})[M]=O?"0":"",R[j]=w?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=O?b+"px":"",n[j]=w?y+"px":"",n.transform="",n))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:F(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ie={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&l(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,p=U(r),u=p?s?R:R.filter((function(e){return U(e)===p})):k,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=F(v),g=f||(y===v||!h?[fe(v)]:function(e){if(F(e)===M)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(F(n)===M?ue(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var B=b[k],H=F(B),T=U(B)===W,R=[D,A].indexOf(H)>=0,S=R?"width":"height",V=J(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?T?L:P:T?A:D;x[S]>w[S]&&(q=fe(q));var C=fe(q),N=[];if(i&&N.push(V[H]<=0),s&&N.push(V[q]<=0,V[C]<=0),N.every((function(e){return e}))){E=B,j=!1;break}O.set(B,N)}if(j)for(var I=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},_=h?3:1;_>0;_--){if("break"===I(_))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function de(e,t,n){return i(e,a(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=J(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),x=F(t.placement),w=U(t.placement),O=!w,j=z(x),M="x"===j?"y":"x",k=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(s){var q,C="y"===j?D:P,N="y"===j?A:L,I="y"===j?"height":"width",_=k[j],X=_+b[C],Y=_-b[N],G=m?-H[I]/2:0,K=w===W?B[I]:H[I],Q=w===W?-H[I]:-B[I],Z=t.elements.arrow,$=m&&Z?g(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[C],ne=ee[N],re=de(0,B[I],$[I]),oe=O?B[I]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=O?-B[I]/2+G+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&E(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(q=null==S?void 0:S[j])?q:0,ce=_+ie-fe,pe=de(m?a(X,_+oe-fe-se):X,_,m?i(Y,ce):Y);k[j]=pe,V[j]=pe-_}if(c){var ue,le="x"===j?D:P,he="x"===j?A:L,me=k[M],ve="y"===M?"height":"width",ye=me+b[le],ge=me-b[he],be=-1!==[D,P].indexOf(x),xe=null!=(ue=null==S?void 0:S[M])?ue:0,we=be?ye:me-B[ve]-H[ve]-xe+R.altAxis,Oe=be?me+B[ve]+H[ve]-xe-R.altAxis:ge,je=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(we,me,Oe):de(m?we:ye,me,m?Oe:ge);k[M]=je,V[M]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=z(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,n),u=g(i),l="y"===f?D:P,d="y"===f?A:L,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,x=p[l],w=y-u[c]-p[d],O=y/2-u[c]/2+b,j=de(x,O,w),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&C(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[D,L,A,P].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ye(f),u=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},be=Z({defaultModifiers:[ee,te,oe,ie]}),xe=[ee,te,oe,ie,ae,le,he,me,ge],we=Z({defaultModifiers:xe});e.applyStyles=ie,e.arrow=me,e.computeStyles=oe,e.createPopper=we,e.createPopperLite=be,e.defaultModifiers=xe,e.detectOverflow=J,e.eventListeners=ee,e.flip=le,e.hide=ge,e.offset=ae,e.popperGenerator=Z,e.popperOffsets=te,e.preventOverflow=he,Object.defineProperty(e,"__esModule",{value:!0})}));
/*!
  * Bootstrap v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
})(this, (function (Popper) { 'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespaceDefault(Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  const elementMap = new Map();
  const Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */
  const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };

  // Shout-out Angus Croll (https://goo.gl/pxwQGp)
  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  /**
   * Public Util API
   */

  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {};

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.harrytheo.com/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };
  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  const DOMContentLoadedCallbacks = [];
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === 'function' ? possibleCallback.call(...args) : defaultValue;
  };
  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */
  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string';
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return {
        ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const VERSION = '5.3.5';

  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(',').map(sel => parseSelector(sel)).join(',') : null;
  };
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$f = 'alert';
  const DATA_KEY$a = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$a}`;
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';

  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }

    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }

    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  enableDismissTrigger(Alert, 'close');

  /**
   * jQuery
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$e = 'button';
  const DATA_KEY$9 = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;

  /**
   * Class definition
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }

    // Public
    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);
        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$d = 'swipe';
  const EVENT_KEY$9 = '.bs.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };

  /**
   * Class definition
   */

  class Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }

    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }

    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }

    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }

    // Static
    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$c = 'carousel';
  const DATA_KEY$8 = 'bs.carousel';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const ARROW_LEFT_KEY$1 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$1 = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  const EVENT_SLID = `slid${EVENT_KEY$8}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };

  /**
   * Class definition
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }

    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }

    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      // FIXME TODO use `document.visibilityState`
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }

    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
      }
      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        }

        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling

        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute('aria-current', 'true');
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = eventName => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        // TODO: change tests that use empty divs to avoid this check
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);
        if (typeof config === 'number') {
          data.to(config);
          return;
        }
        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$b = 'collapse';
  const DATA_KEY$7 = 'bs.collapse';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
  };
  const DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
  };

  /**
   * Class definition
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }

    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }

    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];

      // find active children
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = '';
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }

    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      // remove children if greater depth
      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    }

    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Collapse);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$a = 'dropdown';
  const DATA_KEY$6 = 'bs.dropdown';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default$9 = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };

  /**
   * Class definition
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper
      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }

    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }
      this._element.focus();
      this._element.setAttribute('aria-expanded', true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }

    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute('aria-expanded', 'false');
      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org/docs/v2/)');
      }
      let referenceElement = this._element;
      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }

      // We need to trim the value because custom properties can also include spaces
      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset
      } = this._config;
      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      };

      // Disable Popper if we have a static display or Dropdown is in Navbar
      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        }

        // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command

      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();

      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$9 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };
  const DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }

    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$8 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };
  const DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$7 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }

    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$6 = 'offcanvas';
  const DATA_KEY$3 = 'bs.offcanvas';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }

    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);

  /**
   * jQuery
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  // js-docs-start allow-list
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  // js-docs-end allow-list

  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

  /**
   * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
   * contexts.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
   */
  // eslint-disable-next-line unicorn/better-regex
  const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }

    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$5 = 'TemplateFactory';
  const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };

  /**
   * Class definition
   */

  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }

    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }

    // Public
    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }
      return template;
    }

    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [undefined, this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$4 = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE$2 = 'hide';
  const EVENT_HIDDEN$2 = 'hidden';
  const EVENT_SHOW$2 = 'show';
  const EVENT_SHOWN$2 = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK$1 = 'click';
  const EVENT_FOCUSIN$1 = 'focusin';
  const EVENT_FOCUSOUT$1 = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 6],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };

  /**
   * Class definition
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org/docs/v2/)');
      }
      super(element, config);

      // Private
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;

      // Protected
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }

    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }

    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute('data-bs-original-title')) {
        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      // TODO: v6 remove this or make it optional
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null; // it is a trick to support manual triggering

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute('aria-describedby');
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }

    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();

      // TODO: remove this check in v6
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      // TODO: v6 the following can be achieved with CSS only
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
    }

    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset
      } = this._config;
      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element, this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(' ');
      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute('title');
      if (!title) {
        return;
      }
      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }
      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
      this._element.removeAttribute('title');
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }
      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = 'manual';

      // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * jQuery
   */

  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$3 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$2 = {
    ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };

  /**
   * Class definition
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }

    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }

    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * jQuery
   */

  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_CLICK = `click${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
  };

  /**
   * Class definition
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);

      // this._element is the observablesContainer and config.target the menu links wrapper
      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
    }

    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }

    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }

    // Private
    _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = getElement(config.target) || document.body;

      // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === 'string') {
        config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }

      // unregister any previous listeners
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          }

          // Chrome 60 doesn't support `scrollTo`
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    }

    // The logic of selection
    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        // if we are scrolling down, pick the bigger offsetTop
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
          if (!parentScrollTop) {
            return;
          }
          continue;
        }

        // if we are scrolling up, pick the smallest offsetTop
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

        // ensure that the observableSection exists & is visible
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const HOME_KEY = 'Home';
  const END_KEY = 'End';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

  /**
   * Class definition
   */

  class Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
        // TODO: should throw exception in v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      }

      // Set up initial aria attributes
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    }

    // Getters
    static get NAME() {
      return NAME$1;
    }

    // Public
    show() {
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }

      // Search for active tab on same parent to deactivate it
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }

    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
      event.preventDefault();
      const children = this._getChildren().filter(element => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute('aria-selected', isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }
      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }
      this._setAttributeIfNotExists(child, 'role', 'tab');

      // set attributes to the related panel too
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, 'role', 'tabpanel');
      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);
        if (element) {
          element.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute('aria-expanded', open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }

    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }

    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });

  /**
   * Initialize on focus
   */
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };

  /**
   * Class definition
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }

    // Private

    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          {
            this._hasMouseInteraction = isInteracting;
            break;
          }
        case 'focusin':
        case 'focusout':
          {
            this._hasKeyboardInteraction = isInteracting;
            break;
          }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  enableDismissTrigger(Toast);

  /**
   * jQuery
   */

  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };

  return index_umd;

}));
/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/javascript
Released under the MIT license
 */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, 
  global.Rails = factory());
})(this, (function() {
  "use strict";
  const linkClickSelector = "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]";
  const buttonClickSelector = {
    selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
    exclude: "form button"
  };
  const inputChangeSelector = "select[data-remote], input[data-remote], textarea[data-remote]";
  const formSubmitSelector = "form:not([data-turbo=true])";
  const formInputClickSelector = "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])";
  const formDisableSelector = "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled";
  const formEnableSelector = "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled";
  const fileInputSelector = "input[name][type=file]:not([disabled])";
  const linkDisableSelector = "a[data-disable-with], a[data-disable]";
  const buttonDisableSelector = "button[data-remote][data-disable-with], button[data-remote][data-disable]";
  let nonce = null;
  const loadCSPNonce = () => {
    const metaTag = document.querySelector("meta[name=csp-nonce]");
    return nonce = metaTag && metaTag.content;
  };
  const cspNonce = () => nonce || loadCSPNonce();
  const m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
  const matches = function(element, selector) {
    if (selector.exclude) {
      return m.call(element, selector.selector) && !m.call(element, selector.exclude);
    } else {
      return m.call(element, selector);
    }
  };
  const EXPANDO = "_ujsData";
  const getData = (element, key) => element[EXPANDO] ? element[EXPANDO][key] : undefined;
  const setData = function(element, key, value) {
    if (!element[EXPANDO]) {
      element[EXPANDO] = {};
    }
    return element[EXPANDO][key] = value;
  };
  const $ = selector => Array.prototype.slice.call(document.querySelectorAll(selector));
  const isContentEditable = function(element) {
    var isEditable = false;
    do {
      if (element.isContentEditable) {
        isEditable = true;
        break;
      }
      element = element.parentElement;
    } while (element);
    return isEditable;
  };
  const csrfToken = () => {
    const meta = document.querySelector("meta[name=csrf-token]");
    return meta && meta.content;
  };
  const csrfParam = () => {
    const meta = document.querySelector("meta[name=csrf-param]");
    return meta && meta.content;
  };
  const CSRFProtection = xhr => {
    const token = csrfToken();
    if (token) {
      return xhr.setRequestHeader("X-CSRF-Token", token);
    }
  };
  const refreshCSRFTokens = () => {
    const token = csrfToken();
    const param = csrfParam();
    if (token && param) {
      return $('form input[name="' + param + '"]').forEach((input => input.value = token));
    }
  };
  const AcceptHeaders = {
    "*": "*/*",
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript",
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  };
  const ajax = options => {
    options = prepareOptions(options);
    var xhr = createXHR(options, (function() {
      const response = processResponse(xhr.response != null ? xhr.response : xhr.responseText, xhr.getResponseHeader("Content-Type"));
      if (Math.floor(xhr.status / 100) === 2) {
        if (typeof options.success === "function") {
          options.success(response, xhr.statusText, xhr);
        }
      } else {
        if (typeof options.error === "function") {
          options.error(response, xhr.statusText, xhr);
        }
      }
      return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : undefined;
    }));
    if (options.beforeSend && !options.beforeSend(xhr, options)) {
      return false;
    }
    if (xhr.readyState === XMLHttpRequest.OPENED) {
      return xhr.send(options.data);
    }
  };
  var prepareOptions = function(options) {
    options.url = options.url || location.href;
    options.type = options.type.toUpperCase();
    if (options.type === "GET" && options.data) {
      if (options.url.indexOf("?") < 0) {
        options.url += "?" + options.data;
      } else {
        options.url += "&" + options.data;
      }
    }
    if (!(options.dataType in AcceptHeaders)) {
      options.dataType = "*";
    }
    options.accept = AcceptHeaders[options.dataType];
    if (options.dataType !== "*") {
      options.accept += ", */*; q=0.01";
    }
    return options;
  };
  var createXHR = function(options, done) {
    const xhr = new XMLHttpRequest;
    xhr.open(options.type, options.url, true);
    xhr.setRequestHeader("Accept", options.accept);
    if (typeof options.data === "string") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    }
    if (!options.crossDomain) {
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      CSRFProtection(xhr);
    }
    xhr.withCredentials = !!options.withCredentials;
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        return done(xhr);
      }
    };
    return xhr;
  };
  var processResponse = function(response, type) {
    if (typeof response === "string" && typeof type === "string") {
      if (type.match(/\bjson\b/)) {
        try {
          response = JSON.parse(response);
        } catch (error) {}
      } else if (type.match(/\b(?:java|ecma)script\b/)) {
        const script = document.createElement("script");
        script.setAttribute("nonce", cspNonce());
        script.text = response;
        document.head.appendChild(script).parentNode.removeChild(script);
      } else if (type.match(/\b(xml|html|svg)\b/)) {
        const parser = new DOMParser;
        type = type.replace(/;.+/, "");
        try {
          response = parser.parseFromString(response, type);
        } catch (error1) {}
      }
    }
    return response;
  };
  const href = element => element.href;
  const isCrossDomain = function(url) {
    const originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    const urlAnchor = document.createElement("a");
    try {
      urlAnchor.href = url;
      return !((!urlAnchor.protocol || urlAnchor.protocol === ":") && !urlAnchor.host || originAnchor.protocol + "//" + originAnchor.host === urlAnchor.protocol + "//" + urlAnchor.host);
    } catch (e) {
      return true;
    }
  };
  let preventDefault;
  let {CustomEvent: CustomEvent} = window;
  if (typeof CustomEvent !== "function") {
    CustomEvent = function(event, params) {
      const evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };
    CustomEvent.prototype = window.Event.prototype;
    ({preventDefault: preventDefault} = CustomEvent.prototype);
    CustomEvent.prototype.preventDefault = function() {
      const result = preventDefault.call(this);
      if (this.cancelable && !this.defaultPrevented) {
        Object.defineProperty(this, "defaultPrevented", {
          get() {
            return true;
          }
        });
      }
      return result;
    };
  }
  const fire = (obj, name, data) => {
    const event = new CustomEvent(name, {
      bubbles: true,
      cancelable: true,
      detail: data
    });
    obj.dispatchEvent(event);
    return !event.defaultPrevented;
  };
  const stopEverything = e => {
    fire(e.target, "ujs:everythingStopped");
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  };
  const delegate = (element, selector, eventType, handler) => element.addEventListener(eventType, (function(e) {
    let {target: target} = e;
    while (!!(target instanceof Element) && !matches(target, selector)) {
      target = target.parentNode;
    }
    if (target instanceof Element && handler.call(target, e) === false) {
      e.preventDefault();
      e.stopPropagation();
    }
  }));
  const toArray = e => Array.prototype.slice.call(e);
  const serializeElement = (element, additionalParam) => {
    let inputs = [ element ];
    if (matches(element, "form")) {
      inputs = toArray(element.elements);
    }
    const params = [];
    inputs.forEach((function(input) {
      if (!input.name || input.disabled) {
        return;
      }
      if (matches(input, "fieldset[disabled] *")) {
        return;
      }
      if (matches(input, "select")) {
        toArray(input.options).forEach((function(option) {
          if (option.selected) {
            params.push({
              name: input.name,
              value: option.value
            });
          }
        }));
      } else if (input.checked || [ "radio", "checkbox", "submit" ].indexOf(input.type) === -1) {
        params.push({
          name: input.name,
          value: input.value
        });
      }
    }));
    if (additionalParam) {
      params.push(additionalParam);
    }
    return params.map((function(param) {
      if (param.name) {
        return `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`;
      } else {
        return param;
      }
    })).join("&");
  };
  const formElements = (form, selector) => {
    if (matches(form, "form")) {
      return toArray(form.elements).filter((el => matches(el, selector)));
    } else {
      return toArray(form.querySelectorAll(selector));
    }
  };
  const handleConfirmWithRails = rails => function(e) {
    if (!allowAction(this, rails)) {
      stopEverything(e);
    }
  };
  const confirm = (message, element) => window.confirm(message);
  var allowAction = function(element, rails) {
    let callback;
    const message = element.getAttribute("data-confirm");
    if (!message) {
      return true;
    }
    let answer = false;
    if (fire(element, "confirm")) {
      try {
        answer = rails.confirm(message, element);
      } catch (error) {}
      callback = fire(element, "confirm:complete", [ answer ]);
    }
    return answer && callback;
  };
  const handleDisabledElement = function(e) {
    const element = this;
    if (element.disabled) {
      stopEverything(e);
    }
  };
  const enableElement = e => {
    let element;
    if (e instanceof Event) {
      if (isXhrRedirect(e)) {
        return;
      }
      element = e.target;
    } else {
      element = e;
    }
    if (isContentEditable(element)) {
      return;
    }
    if (matches(element, linkDisableSelector)) {
      return enableLinkElement(element);
    } else if (matches(element, buttonDisableSelector) || matches(element, formEnableSelector)) {
      return enableFormElement(element);
    } else if (matches(element, formSubmitSelector)) {
      return enableFormElements(element);
    }
  };
  const disableElement = e => {
    const element = e instanceof Event ? e.target : e;
    if (isContentEditable(element)) {
      return;
    }
    if (matches(element, linkDisableSelector)) {
      return disableLinkElement(element);
    } else if (matches(element, buttonDisableSelector) || matches(element, formDisableSelector)) {
      return disableFormElement(element);
    } else if (matches(element, formSubmitSelector)) {
      return disableFormElements(element);
    }
  };
  var disableLinkElement = function(element) {
    if (getData(element, "ujs:disabled")) {
      return;
    }
    const replacement = element.getAttribute("data-disable-with");
    if (replacement != null) {
      setData(element, "ujs:enable-with", element.innerHTML);
      element.innerHTML = replacement;
    }
    element.addEventListener("click", stopEverything);
    return setData(element, "ujs:disabled", true);
  };
  var enableLinkElement = function(element) {
    const originalText = getData(element, "ujs:enable-with");
    if (originalText != null) {
      element.innerHTML = originalText;
      setData(element, "ujs:enable-with", null);
    }
    element.removeEventListener("click", stopEverything);
    return setData(element, "ujs:disabled", null);
  };
  var disableFormElements = form => formElements(form, formDisableSelector).forEach(disableFormElement);
  var disableFormElement = function(element) {
    if (getData(element, "ujs:disabled")) {
      return;
    }
    const replacement = element.getAttribute("data-disable-with");
    if (replacement != null) {
      if (matches(element, "button")) {
        setData(element, "ujs:enable-with", element.innerHTML);
        element.innerHTML = replacement;
      } else {
        setData(element, "ujs:enable-with", element.value);
        element.value = replacement;
      }
    }
    element.disabled = true;
    return setData(element, "ujs:disabled", true);
  };
  var enableFormElements = form => formElements(form, formEnableSelector).forEach((element => enableFormElement(element)));
  var enableFormElement = function(element) {
    const originalText = getData(element, "ujs:enable-with");
    if (originalText != null) {
      if (matches(element, "button")) {
        element.innerHTML = originalText;
      } else {
        element.value = originalText;
      }
      setData(element, "ujs:enable-with", null);
    }
    element.disabled = false;
    return setData(element, "ujs:disabled", null);
  };
  var isXhrRedirect = function(event) {
    const xhr = event.detail ? event.detail[0] : undefined;
    return xhr && xhr.getResponseHeader("X-Xhr-Redirect");
  };
  const handleMethodWithRails = rails => function(e) {
    const link = this;
    const method = link.getAttribute("data-method");
    if (!method) {
      return;
    }
    if (isContentEditable(this)) {
      return;
    }
    const href = rails.href(link);
    const csrfToken$1 = csrfToken();
    const csrfParam$1 = csrfParam();
    const form = document.createElement("form");
    let formContent = `<input name='_method' value='${method}' type='hidden' />`;
    if (csrfParam$1 && csrfToken$1 && !isCrossDomain(href)) {
      formContent += `<input name='${csrfParam$1}' value='${csrfToken$1}' type='hidden' />`;
    }
    formContent += '<input type="submit" />';
    form.method = "post";
    form.action = href;
    form.target = link.target;
    form.innerHTML = formContent;
    form.style.display = "none";
    document.body.appendChild(form);
    form.querySelector('[type="submit"]').click();
    stopEverything(e);
  };
  const isRemote = function(element) {
    const value = element.getAttribute("data-remote");
    return value != null && value !== "false";
  };
  const handleRemoteWithRails = rails => function(e) {
    let data, method, url;
    const element = this;
    if (!isRemote(element)) {
      return true;
    }
    if (!fire(element, "ajax:before")) {
      fire(element, "ajax:stopped");
      return false;
    }
    if (isContentEditable(element)) {
      fire(element, "ajax:stopped");
      return false;
    }
    const withCredentials = element.getAttribute("data-with-credentials");
    const dataType = element.getAttribute("data-type") || "script";
    if (matches(element, formSubmitSelector)) {
      const button = getData(element, "ujs:submit-button");
      method = getData(element, "ujs:submit-button-formmethod") || element.getAttribute("method") || "get";
      url = getData(element, "ujs:submit-button-formaction") || element.getAttribute("action") || location.href;
      if (method.toUpperCase() === "GET") {
        url = url.replace(/\?.*$/, "");
      }
      if (element.enctype === "multipart/form-data") {
        data = new FormData(element);
        if (button != null) {
          data.append(button.name, button.value);
        }
      } else {
        data = serializeElement(element, button);
      }
      setData(element, "ujs:submit-button", null);
      setData(element, "ujs:submit-button-formmethod", null);
      setData(element, "ujs:submit-button-formaction", null);
    } else if (matches(element, buttonClickSelector) || matches(element, inputChangeSelector)) {
      method = element.getAttribute("data-method");
      url = element.getAttribute("data-url");
      data = serializeElement(element, element.getAttribute("data-params"));
    } else {
      method = element.getAttribute("data-method");
      url = rails.href(element);
      data = element.getAttribute("data-params");
    }
    ajax({
      type: method || "GET",
      url: url,
      data: data,
      dataType: dataType,
      beforeSend(xhr, options) {
        if (fire(element, "ajax:beforeSend", [ xhr, options ])) {
          return fire(element, "ajax:send", [ xhr ]);
        } else {
          fire(element, "ajax:stopped");
          return false;
        }
      },
      success(...args) {
        return fire(element, "ajax:success", args);
      },
      error(...args) {
        return fire(element, "ajax:error", args);
      },
      complete(...args) {
        return fire(element, "ajax:complete", args);
      },
      crossDomain: isCrossDomain(url),
      withCredentials: withCredentials != null && withCredentials !== "false"
    });
    stopEverything(e);
  };
  const formSubmitButtonClick = function(e) {
    const button = this;
    const {form: form} = button;
    if (!form) {
      return;
    }
    if (button.name) {
      setData(form, "ujs:submit-button", {
        name: button.name,
        value: button.value
      });
    }
    setData(form, "ujs:formnovalidate-button", button.formNoValidate);
    setData(form, "ujs:submit-button-formaction", button.getAttribute("formaction"));
    return setData(form, "ujs:submit-button-formmethod", button.getAttribute("formmethod"));
  };
  const preventInsignificantClick = function(e) {
    const link = this;
    const method = (link.getAttribute("data-method") || "GET").toUpperCase();
    const data = link.getAttribute("data-params");
    const metaClick = e.metaKey || e.ctrlKey;
    const insignificantMetaClick = metaClick && method === "GET" && !data;
    const nonPrimaryMouseClick = e.button != null && e.button !== 0;
    if (nonPrimaryMouseClick || insignificantMetaClick) {
      e.stopImmediatePropagation();
    }
  };
  const Rails = {
    $: $,
    ajax: ajax,
    buttonClickSelector: buttonClickSelector,
    buttonDisableSelector: buttonDisableSelector,
    confirm: confirm,
    cspNonce: cspNonce,
    csrfToken: csrfToken,
    csrfParam: csrfParam,
    CSRFProtection: CSRFProtection,
    delegate: delegate,
    disableElement: disableElement,
    enableElement: enableElement,
    fileInputSelector: fileInputSelector,
    fire: fire,
    formElements: formElements,
    formEnableSelector: formEnableSelector,
    formDisableSelector: formDisableSelector,
    formInputClickSelector: formInputClickSelector,
    formSubmitButtonClick: formSubmitButtonClick,
    formSubmitSelector: formSubmitSelector,
    getData: getData,
    handleDisabledElement: handleDisabledElement,
    href: href,
    inputChangeSelector: inputChangeSelector,
    isCrossDomain: isCrossDomain,
    linkClickSelector: linkClickSelector,
    linkDisableSelector: linkDisableSelector,
    loadCSPNonce: loadCSPNonce,
    matches: matches,
    preventInsignificantClick: preventInsignificantClick,
    refreshCSRFTokens: refreshCSRFTokens,
    serializeElement: serializeElement,
    setData: setData,
    stopEverything: stopEverything
  };
  const handleConfirm = handleConfirmWithRails(Rails);
  Rails.handleConfirm = handleConfirm;
  const handleMethod = handleMethodWithRails(Rails);
  Rails.handleMethod = handleMethod;
  const handleRemote = handleRemoteWithRails(Rails);
  Rails.handleRemote = handleRemote;
  const start = function() {
    if (window._rails_loaded) {
      throw new Error("rails-ujs has already been loaded!");
    }
    window.addEventListener("pageshow", (function() {
      $(formEnableSelector).forEach((function(el) {
        if (getData(el, "ujs:disabled")) {
          enableElement(el);
        }
      }));
      $(linkDisableSelector).forEach((function(el) {
        if (getData(el, "ujs:disabled")) {
          enableElement(el);
        }
      }));
    }));
    delegate(document, linkDisableSelector, "ajax:complete", enableElement);
    delegate(document, linkDisableSelector, "ajax:stopped", enableElement);
    delegate(document, buttonDisableSelector, "ajax:complete", enableElement);
    delegate(document, buttonDisableSelector, "ajax:stopped", enableElement);
    delegate(document, linkClickSelector, "click", preventInsignificantClick);
    delegate(document, linkClickSelector, "click", handleDisabledElement);
    delegate(document, linkClickSelector, "click", handleConfirm);
    delegate(document, linkClickSelector, "click", disableElement);
    delegate(document, linkClickSelector, "click", handleRemote);
    delegate(document, linkClickSelector, "click", handleMethod);
    delegate(document, buttonClickSelector, "click", preventInsignificantClick);
    delegate(document, buttonClickSelector, "click", handleDisabledElement);
    delegate(document, buttonClickSelector, "click", handleConfirm);
    delegate(document, buttonClickSelector, "click", disableElement);
    delegate(document, buttonClickSelector, "click", handleRemote);
    delegate(document, inputChangeSelector, "change", handleDisabledElement);
    delegate(document, inputChangeSelector, "change", handleConfirm);
    delegate(document, inputChangeSelector, "change", handleRemote);
    delegate(document, formSubmitSelector, "submit", handleDisabledElement);
    delegate(document, formSubmitSelector, "submit", handleConfirm);
    delegate(document, formSubmitSelector, "submit", handleRemote);
    delegate(document, formSubmitSelector, "submit", (e => setTimeout((() => disableElement(e)), 13)));
    delegate(document, formSubmitSelector, "ajax:send", disableElement);
    delegate(document, formSubmitSelector, "ajax:complete", enableElement);
    delegate(document, formInputClickSelector, "click", preventInsignificantClick);
    delegate(document, formInputClickSelector, "click", handleDisabledElement);
    delegate(document, formInputClickSelector, "click", handleConfirm);
    delegate(document, formInputClickSelector, "click", formSubmitButtonClick);
    document.addEventListener("DOMContentLoaded", refreshCSRFTokens);
    document.addEventListener("DOMContentLoaded", loadCSPNonce);
    return window._rails_loaded = true;
  };
  Rails.start = start;
  if (typeof jQuery !== "undefined" && jQuery && jQuery.ajax) {
    if (jQuery.rails) {
      throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
    }
    jQuery.rails = Rails;
    jQuery.ajaxPrefilter((function(options, originalOptions, xhr) {
      if (!options.crossDomain) {
        return CSRFProtection(xhr);
      }
    }));
  }
  if (typeof exports !== "object" && typeof module === "undefined") {
    window.Rails = Rails;
    if (fire(document, "rails:attachBindings")) {
      start();
    }
  }
  return Rails;
}));
(()=>{var Dd=Object.create;var xr=Object.defineProperty;var Od=Object.getOwnPropertyDescriptor;var Rd=Object.getOwnPropertyNames;var Fd=Object.getPrototypeOf,Md=Object.prototype.hasOwnProperty;var Ld=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var _u=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var W=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},Ad=(e,t)=>{for(var n in t)xr(e,n,{get:t[n],enumerable:!0})},Iu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of Rd(t))!Md.call(e,l)&&l!==n&&xr(e,l,{get:()=>t[l],enumerable:!(r=Od(t,l))||r.enumerable});return e};var B=(e,t,n)=>(n=e!=null?Dd(Fd(e)):{},Iu(t||!e||!e.__esModule?xr(n,"default",{value:e,enumerable:!0}):n,e)),zd=e=>Iu(xr({},"__esModule",{value:!0}),e);var Er=W((gv,ju)=>{"use strict";var zu=Object.getOwnPropertySymbols,Xd=Object.prototype.hasOwnProperty,Zd=Object.prototype.propertyIsEnumerable;function Gd(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Jd(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(o){l[o]=o}),Object.keys(Object.assign({},l)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}ju.exports=Jd()?Object.assign:function(e,t){for(var n,r=Gd(e),l,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var i in n)Xd.call(n,i)&&(r[i]=n[i]);if(zu){l=zu(n);for(var u=0;u<l.length;u++)Zd.call(n,l[u])&&(r[l[u]]=n[l[u]])}}return r}});var Xu=W(L=>{"use strict";var Jl=Er(),Ne=typeof Symbol=="function"&&Symbol.for,xn=Ne?Symbol.for("react.element"):60103,ep=Ne?Symbol.for("react.portal"):60106,tp=Ne?Symbol.for("react.fragment"):60107,np=Ne?Symbol.for("react.strict_mode"):60108,rp=Ne?Symbol.for("react.profiler"):60114,lp=Ne?Symbol.for("react.provider"):60109,op=Ne?Symbol.for("react.context"):60110,ip=Ne?Symbol.for("react.forward_ref"):60112,up=Ne?Symbol.for("react.suspense"):60113,ap=Ne?Symbol.for("react.memo"):60115,sp=Ne?Symbol.for("react.lazy"):60116,Uu=typeof Symbol=="function"&&Symbol.iterator;function En(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu={};function Ht(e,t,n){this.props=e,this.context=t,this.refs=Wu,this.updater=n||Vu}Ht.prototype.isReactComponent={};Ht.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(En(85));this.updater.enqueueSetState(this,e,t,"setState")};Ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $u(){}$u.prototype=Ht.prototype;function eo(e,t,n){this.props=e,this.context=t,this.refs=Wu,this.updater=n||Vu}var to=eo.prototype=new $u;to.constructor=eo;Jl(to,Ht.prototype);to.isPureReactComponent=!0;var no={current:null},Hu=Object.prototype.hasOwnProperty,qu={key:!0,ref:!0,__self:!0,__source:!0};function Qu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Hu.call(t,r)&&!qu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:xn,type:e,key:o,ref:i,props:l,_owner:no.current}}function cp(e,t){return{$$typeof:xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===xn}function fp(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(n){return t[n]})}var Bu=/\/+/g,Pr=[];function bu(e,t,n,r){if(Pr.length){var l=Pr.pop();return l.result=e,l.keyPrefix=t,l.func=n,l.context=r,l.count=0,l}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function Ku(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>Pr.length&&Pr.push(e)}function Xl(e,t,n,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xn:case ep:o=!0}}if(o)return n(r,e,t===""?"."+Yl(e,0):t),1;if(o=0,t=t===""?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){l=e[i];var u=t+Yl(l,i);o+=Xl(l,u,n,r)}else if(e===null||typeof e!="object"?u=null:(u=Uu&&e[Uu]||e["@@iterator"],u=typeof u=="function"?u:null),typeof u=="function")for(e=u.call(e),i=0;!(l=e.next()).done;)l=l.value,u=t+Yl(l,i++),o+=Xl(l,u,n,r);else if(l==="object")throw n=""+e,Error(En(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return o}function Zl(e,t,n){return e==null?0:Xl(e,"",t,n)}function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fp(e.key):t.toString(36)}function dp(e,t){e.func.call(e.context,t,e.count++)}function pp(e,t,n){var r=e.result,l=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Gl(e,r,n,function(o){return o}):e!=null&&(ro(e)&&(e=cp(e,l+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(Bu,"$&/")+"/")+n)),r.push(e))}function Gl(e,t,n,r,l){var o="";n!=null&&(o=(""+n).replace(Bu,"$&/")+"/"),t=bu(t,o,r,l),Zl(e,pp,t),Ku(t)}var Yu={current:null};function qe(){var e=Yu.current;if(e===null)throw Error(En(321));return e}var mp={ReactCurrentDispatcher:Yu,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:no,IsSomeRendererActing:{current:!1},assign:Jl};L.Children={map:function(e,t,n){if(e==null)return e;var r=[];return Gl(e,r,null,t,n),r},forEach:function(e,t,n){if(e==null)return e;t=bu(null,null,t,n),Zl(e,dp,t),Ku(t)},count:function(e){return Zl(e,function(){return null},null)},toArray:function(e){var t=[];return Gl(e,t,null,function(n){return n}),t},only:function(e){if(!ro(e))throw Error(En(143));return e}};L.Component=Ht;L.Fragment=tp;L.Profiler=rp;L.PureComponent=eo;L.StrictMode=np;L.Suspense=up;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;L.cloneElement=function(e,t,n){if(e==null)throw Error(En(267,e));var r=Jl({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=no.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Hu.call(t,a)&&!qu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:xn,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:op,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:lp,_context:e},e.Consumer=e};L.createElement=Qu;L.createFactory=function(e){var t=Qu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:ip,render:e}};L.isValidElement=ro;L.lazy=function(e){return{$$typeof:sp,_ctor:e,_status:-1,_result:null}};L.memo=function(e,t){return{$$typeof:ap,type:e,compare:t===void 0?null:t}};L.useCallback=function(e,t){return qe().useCallback(e,t)};L.useContext=function(e,t){return qe().useContext(e,t)};L.useDebugValue=function(){};L.useEffect=function(e,t){return qe().useEffect(e,t)};L.useImperativeHandle=function(e,t,n){return qe().useImperativeHandle(e,t,n)};L.useLayoutEffect=function(e,t){return qe().useLayoutEffect(e,t)};L.useMemo=function(e,t){return qe().useMemo(e,t)};L.useReducer=function(e,t,n){return qe().useReducer(e,t,n)};L.useRef=function(e){return qe().useRef(e)};L.useState=function(e){return qe().useState(e)};L.version="16.14.0"});var _e=W((xv,Zu)=>{"use strict";Zu.exports=Xu()});var ea=W(Pn=>{"use strict";var hp=_e(),Gu=60103;Pn.Fragment=60107;typeof Symbol=="function"&&Symbol.for&&(lo=Symbol.for,Gu=lo("react.element"),Pn.Fragment=lo("react.fragment"));var lo,vp=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yp=Object.prototype.hasOwnProperty,gp={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)yp.call(t,r)&&!gp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Gu,type:e,key:o,ref:i,props:l,_owner:vp.current}}Pn.jsx=Ju;Pn.jsxs=Ju});var he=W((Pv,ta)=>{"use strict";ta.exports=ea()});var ca=W(M=>{"use strict";var Qt,kn,Nr,_r,yo;typeof window>"u"||typeof MessageChannel!="function"?(qt=null,co=null,fo=function(){if(qt!==null)try{var e=M.unstable_now();qt(!0,e),qt=null}catch(t){throw setTimeout(fo,0),t}},la=Date.now(),M.unstable_now=function(){return Date.now()-la},Qt=function(e){qt!==null?setTimeout(Qt,0,e):(qt=e,setTimeout(fo,0))},kn=function(e,t){co=setTimeout(e,t)},Nr=function(){clearTimeout(co)},_r=function(){return!1},yo=M.unstable_forceFrameRate=function(){}):(Tr=window.performance,po=window.Date,oa=window.setTimeout,ia=window.clearTimeout,typeof console<"u"&&(ua=window.cancelAnimationFrame,typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof ua!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")),typeof Tr=="object"&&typeof Tr.now=="function"?M.unstable_now=function(){return Tr.now()}:(aa=po.now(),M.unstable_now=function(){return po.now()-aa}),Tn=!1,Sn=null,Sr=-1,mo=5,ho=0,_r=function(){return M.unstable_now()>=ho},yo=function(){},M.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):mo=0<e?Math.floor(1e3/e):5},vo=new MessageChannel,kr=vo.port2,vo.port1.onmessage=function(){if(Sn!==null){var e=M.unstable_now();ho=e+mo;try{Sn(!0,e)?kr.postMessage(null):(Tn=!1,Sn=null)}catch(t){throw kr.postMessage(null),t}}else Tn=!1},Qt=function(e){Sn=e,Tn||(Tn=!0,kr.postMessage(null))},kn=function(e,t){Sr=oa(function(){e(M.unstable_now())},t)},Nr=function(){ia(Sr),Sr=-1});var qt,co,fo,la,Tr,po,oa,ia,ua,aa,Tn,Sn,Sr,mo,ho,vo,kr;function go(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,l=e[r];if(l!==void 0&&0<Cr(l,t))e[r]=t,e[n]=l,n=r;else break e}}function Ee(e){return e=e[0],e===void 0?null:e}function Ir(e){var t=e[0];if(t!==void 0){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,l=e.length;r<l;){var o=2*(r+1)-1,i=e[o],u=o+1,a=e[u];if(i!==void 0&&0>Cr(i,n))a!==void 0&&0>Cr(a,i)?(e[r]=a,e[u]=n,r=u):(e[r]=i,e[o]=n,r=o);else if(a!==void 0&&0>Cr(a,n))e[r]=a,e[u]=n,r=u;else break e}}return t}return null}function Cr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}var Ie=[],nt=[],Mp=1,ie=null,ne=3,Dr=!1,Pt=!1,Cn=!1;function Or(e){for(var t=Ee(nt);t!==null;){if(t.callback===null)Ir(nt);else if(t.startTime<=e)Ir(nt),t.sortIndex=t.expirationTime,go(Ie,t);else break;t=Ee(nt)}}function wo(e){if(Cn=!1,Or(e),!Pt)if(Ee(Ie)!==null)Pt=!0,Qt(xo);else{var t=Ee(nt);t!==null&&kn(wo,t.startTime-e)}}function xo(e,t){Pt=!1,Cn&&(Cn=!1,Nr()),Dr=!0;var n=ne;try{for(Or(t),ie=Ee(Ie);ie!==null&&(!(ie.expirationTime>t)||e&&!_r());){var r=ie.callback;if(r!==null){ie.callback=null,ne=ie.priorityLevel;var l=r(ie.expirationTime<=t);t=M.unstable_now(),typeof l=="function"?ie.callback=l:ie===Ee(Ie)&&Ir(Ie),Or(t)}else Ir(Ie);ie=Ee(Ie)}if(ie!==null)var o=!0;else{var i=Ee(nt);i!==null&&kn(wo,i.startTime-t),o=!1}return o}finally{ie=null,ne=n,Dr=!1}}function sa(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var Lp=yo;M.unstable_IdlePriority=5;M.unstable_ImmediatePriority=1;M.unstable_LowPriority=4;M.unstable_NormalPriority=3;M.unstable_Profiling=null;M.unstable_UserBlockingPriority=2;M.unstable_cancelCallback=function(e){e.callback=null};M.unstable_continueExecution=function(){Pt||Dr||(Pt=!0,Qt(xo))};M.unstable_getCurrentPriorityLevel=function(){return ne};M.unstable_getFirstCallbackNode=function(){return Ee(Ie)};M.unstable_next=function(e){switch(ne){case 1:case 2:case 3:var t=3;break;default:t=ne}var n=ne;ne=t;try{return e()}finally{ne=n}};M.unstable_pauseExecution=function(){};M.unstable_requestPaint=Lp;M.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ne;ne=e;try{return t()}finally{ne=n}};M.unstable_scheduleCallback=function(e,t,n){var r=M.unstable_now();if(typeof n=="object"&&n!==null){var l=n.delay;l=typeof l=="number"&&0<l?r+l:r,n=typeof n.timeout=="number"?n.timeout:sa(e)}else n=sa(e),l=r;return n=l+n,e={id:Mp++,callback:t,priorityLevel:e,startTime:l,expirationTime:n,sortIndex:-1},l>r?(e.sortIndex=l,go(nt,e),Ee(Ie)===null&&e===Ee(nt)&&(Cn?Nr():Cn=!0,kn(wo,l-r))):(e.sortIndex=n,go(Ie,e),Pt||Dr||(Pt=!0,Qt(xo))),e};M.unstable_shouldYield=function(){var e=M.unstable_now();Or(e);var t=Ee(Ie);return t!==ie&&ie!==null&&t!==null&&t.callback!==null&&t.startTime<=e&&t.expirationTime<ie.expirationTime||_r()};M.unstable_wrapCallback=function(e){var t=ne;return function(){var n=ne;ne=t;try{return e.apply(this,arguments)}finally{ne=n}}}});var da=W((Bv,fa)=>{"use strict";fa.exports=ca()});var ff=W(ke=>{"use strict";var Il=_e(),ue=Er(),Z=da();function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Il)throw Error(y(227));function Ap(e,t,n,r,l,o,i,u,a){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(m){this.onError(m)}}var zn=!1,rl=null,ll=!1,Ao=null,zp={onError:function(e){zn=!0,rl=e}};function jp(e,t,n,r,l,o,i,u,a){zn=!1,rl=null,Ap.apply(zp,arguments)}function Up(e,t,n,r,l,o,i,u,a){if(jp.apply(this,arguments),zn){if(zn){var s=rl;zn=!1,rl=null}else throw Error(y(198));ll||(ll=!0,Ao=s)}}var ki=null,vs=null,ys=null;function pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=ys(n),Up(r,t,void 0,e),e.currentTarget=null}var ol=null,Bt={};function gs(){if(ol)for(var e in Bt){var t=Bt[e],n=ol.indexOf(e);if(!(-1<n))throw Error(y(96,e));if(!il[n]){if(!t.extractEvents)throw Error(y(97,e));il[n]=t,n=t.eventTypes;for(var r in n){var l=void 0,o=n[r],i=t,u=r;if(zo.hasOwnProperty(u))throw Error(y(99,u));zo[u]=o;var a=o.phasedRegistrationNames;if(a){for(l in a)a.hasOwnProperty(l)&&ma(a[l],i,u);l=!0}else o.registrationName?(ma(o.registrationName,i,u),l=!0):l=!1;if(!l)throw Error(y(98,r,e))}}}}function ma(e,t,n){if(on[e])throw Error(y(100,e));on[e]=t,Ci[e]=t.eventTypes[n].dependencies}var il=[],zo={},on={},Ci={};function ws(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!Bt.hasOwnProperty(n)||Bt[n]!==r){if(Bt[n])throw Error(y(102,n));Bt[n]=r,t=!0}}t&&gs()}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=null,Jt=null,en=null;function ha(e){if(e=vs(e)){if(typeof jo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ki(t),jo(e.stateNode,e.type,t))}}function xs(e){Jt?en?en.push(e):en=[e]:Jt=e}function Es(){if(Jt){var e=Jt,t=en;if(en=Jt=null,ha(e),t)for(e=0;e<t.length;e++)ha(t[e])}}function Ni(e,t){return e(t)}function Ps(e,t,n,r,l){return e(t,n,r,l)}function _i(){}var Ts=Ni,kt=!1,Eo=!1;function Ii(){(Jt!==null||en!==null)&&(_i(),Es())}function Ss(e,t,n){if(Eo)return e(t,n);Eo=!0;try{return Ts(e,t,n)}finally{Eo=!1,Ii()}}var Vp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,va=Object.prototype.hasOwnProperty,ya={},ga={};function Wp(e){return va.call(ga,e)?!0:va.call(ya,e)?!1:Vp.test(e)?ga[e]=!0:(ya[e]=!0,!1)}function $p(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hp(e,t,n,r){if(t===null||typeof t>"u"||$p(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new ae(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];G[t]=new ae(t,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new ae(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new ae(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new ae(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){G[e]=new ae(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){G[e]=new ae(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){G[e]=new ae(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){G[e]=new ae(e,5,!1,e.toLowerCase(),null,!1)});var Di=/[\-:]([a-z])/g;function Oi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Di,Oi);G[t]=new ae(t,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Di,Oi);G[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Di,Oi);G[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){G[e]=new ae(e,1,!1,e.toLowerCase(),null,!1)});G.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){G[e]=new ae(e,1,!1,e.toLowerCase(),null,!0)});var Oe=Il.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Oe.hasOwnProperty("ReactCurrentDispatcher")||(Oe.ReactCurrentDispatcher={current:null});Oe.hasOwnProperty("ReactCurrentBatchConfig")||(Oe.ReactCurrentBatchConfig={suspense:null});function Ri(e,t,n,r){var l=G.hasOwnProperty(t)?G[t]:null,o=l!==null?l.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(Hp(t,n,l,r)&&(n=null),r||l===null?Wp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qp=/^(.*)[\\\/]/,me=typeof Symbol=="function"&&Symbol.for,Rr=me?Symbol.for("react.element"):60103,bt=me?Symbol.for("react.portal"):60106,St=me?Symbol.for("react.fragment"):60107,ks=me?Symbol.for("react.strict_mode"):60108,Hr=me?Symbol.for("react.profiler"):60114,Cs=me?Symbol.for("react.provider"):60109,Ns=me?Symbol.for("react.context"):60110,Qp=me?Symbol.for("react.concurrent_mode"):60111,Fi=me?Symbol.for("react.forward_ref"):60112,qr=me?Symbol.for("react.suspense"):60113,Uo=me?Symbol.for("react.suspense_list"):60120,Mi=me?Symbol.for("react.memo"):60115,_s=me?Symbol.for("react.lazy"):60116,Is=me?Symbol.for("react.block"):60121,wa=typeof Symbol=="function"&&Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}function Bp(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function Je(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case St:return"Fragment";case bt:return"Portal";case Hr:return"Profiler";case ks:return"StrictMode";case qr:return"Suspense";case Uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ns:return"Context.Consumer";case Cs:return"Context.Provider";case Fi:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Mi:return Je(e.type);case Is:return Je(e.render);case _s:if(e=e._status===1?e._result:null)return Je(e)}return null}function Li(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,l=e._debugSource,o=Je(e.type);n=null,r&&(n=Je(r.type)),r=o,o="",l?o=" (at "+l.fileName.replace(qp,"")+":"+l.lineNumber+")":n&&(o=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+o}t+=n,e=e.return}while(e);return t}function vt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e){var t=Ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=bp(e))}function Os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rs(e,t){t=t.checked,t!=null&&Ri(e,"checked",t,!1)}function Wo(e,t){Rs(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$o(e,t.type,n):t.hasOwnProperty("defaultValue")&&$o(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ea(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $o(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Kp(e){var t="";return Il.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Ho(e,t){return e=ue({children:void 0},t),(t=Kp(t.children))&&(e.children=t),e}function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Fs(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ta(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Ms={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ls(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ls(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,As=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!==Ms.svg||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},Po={},zs={};wt&&(zs=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Dl(e){if(Po[e])return Po[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zs)return Po[e]=t[n];return e}var js=Dl("animationend"),Us=Dl("animationiteration"),Vs=Dl("animationstart"),Ws=Dl("transitionend"),Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sa=new(typeof WeakMap=="function"?WeakMap:Map);function Ai(e){var t=Sa.get(e);return t===void 0&&(t=new Map,Sa.set(e,t)),t}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.effectTag&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ka(e){if(Ut(e)!==e)throw Error(y(188))}function Yp(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ka(l),e;if(o===r)return ka(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Hs(e){if(e=Yp(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function un(e,t){if(t==null)throw Error(y(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function zi(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var _n=null;function Xp(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)pa(e,t[r],n[r]);else t&&pa(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Ol(e){if(e!==null&&(_n=un(_n,e)),e=_n,_n=null,e){if(zi(e,Xp),_n)throw Error(y(95));if(ll)throw e=Ao,ll=!1,Ao=null,e}}function ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function qs(e){if(!wt)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}var ul=[];function Qs(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ul.length&&ul.push(e)}function Bs(e,t,n,r){if(ul.length){var l=ul.pop();return l.topLevelType=e,l.eventSystemFlags=r,l.nativeEvent=t,l.targetInst=n,l}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function bs(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=nr(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var l=ji(e.nativeEvent);r=e.topLevelType;var o=e.nativeEvent,i=e.eventSystemFlags;n===0&&(i|=64);for(var u=null,a=0;a<il.length;a++){var s=il[a];s&&(s=s.extractEvents(r,t,o,l,i))&&(u=un(u,s))}Ol(u)}}function Bo(e,t,n){if(!n.has(e)){switch(e){case"scroll":Ln(t,"scroll",!0);break;case"focus":case"blur":Ln(t,"focus",!0),Ln(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":qs(e)&&Ln(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:Mn.indexOf(e)===-1&&V(e,t)}n.set(e,null)}}var Ks,Ui,Ys,bo=!1,Le=[],st=null,ct=null,ft=null,Bn=new Map,bn=new Map,In=[],Ko="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Zp="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Gp(e,t){var n=Ai(t);Ko.forEach(function(r){Bo(r,t,n)}),Zp.forEach(function(r){Bo(r,t,n)})}function Yo(e,t,n,r,l){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:l,container:r}}function Ca(e,t){switch(e){case"focus":case"blur":st=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function Dn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e=Yo(t,n,r,l,o),t!==null&&(t=rr(t),t!==null&&Ui(t)),e):(e.eventSystemFlags|=r,e)}function Jp(e,t,n,r,l){switch(t){case"focus":return st=Dn(st,e,t,n,r,l),!0;case"dragenter":return ct=Dn(ct,e,t,n,r,l),!0;case"mouseover":return ft=Dn(ft,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Bn.set(o,Dn(Bn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,bn.set(o,Dn(bn.get(o)||null,e,t,n,r,l)),!0}return!1}function em(e){var t=nr(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=$s(n),t!==null){e.blockedOn=t,Z.unstable_runWithPriority(e.priority,function(){Ys(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;var t=$i(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=rr(t);return n!==null&&Ui(n),e.blockedOn=t,!1}return!0}function Na(e,t,n){Qr(e)&&n.delete(t)}function tm(){for(bo=!1;0<Le.length;){var e=Le[0];if(e.blockedOn!==null){e=rr(e.blockedOn),e!==null&&Ks(e);break}var t=$i(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:Le.shift()}st!==null&&Qr(st)&&(st=null),ct!==null&&Qr(ct)&&(ct=null),ft!==null&&Qr(ft)&&(ft=null),Bn.forEach(Na),bn.forEach(Na)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,Z.unstable_scheduleCallback(Z.unstable_NormalPriority,tm)))}function Xs(e){function t(l){return On(l,e)}if(0<Le.length){On(Le[0],e);for(var n=1;n<Le.length;n++){var r=Le[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&On(st,e),ct!==null&&On(ct,e),ft!==null&&On(ft,e),Bn.forEach(t),bn.forEach(t),n=0;n<In.length;n++)r=In[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)em(n),n.blockedOn===null&&In.shift()}var Zs={},Gs=new Map,Vi=new Map,nm=["abort","abort",js,"animationEnd",Us,"animationIteration",Vs,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ws,"transitionEnd","waiting","waiting"];function Wi(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],l=e[n+1],o="on"+(l[0].toUpperCase()+l.slice(1));o={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[r],eventPriority:t},Vi.set(r,t),Gs.set(r,o),Zs[l]=o}}Wi("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Wi("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Wi(nm,2);for(To="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ar=0;Ar<To.length;Ar++)Vi.set(To[Ar],0);var To,Ar,rm=Z.unstable_UserBlockingPriority,lm=Z.unstable_runWithPriority,Br=!0;function V(e,t){Ln(t,e,!1)}function Ln(e,t,n){var r=Vi.get(t);switch(r===void 0?2:r){case 0:r=om.bind(null,t,1,e);break;case 1:r=im.bind(null,t,1,e);break;default:r=Rl.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function om(e,t,n,r){kt||_i();var l=Rl,o=kt;kt=!0;try{Ps(l,e,t,n,r)}finally{(kt=o)||Ii()}}function im(e,t,n,r){lm(rm,Rl.bind(null,e,t,n,r))}function Rl(e,t,n,r){if(Br)if(0<Le.length&&-1<Ko.indexOf(e))e=Yo(null,e,t,n,r),Le.push(e);else{var l=$i(e,t,n,r);if(l===null)Ca(e,r);else if(-1<Ko.indexOf(e))e=Yo(l,e,t,n,r),Le.push(e);else if(!Jp(l,e,t,n,r)){Ca(e,r),e=Bs(e,r,null,t);try{Ss(bs,e)}finally{Qs(e)}}}}function $i(e,t,n,r){if(n=ji(r),n=nr(n),n!==null){var l=Ut(n);if(l===null)n=null;else{var o=l.tag;if(o===13){if(n=$s(l),n!==null)return n;n=null}else if(o===3){if(l.stateNode.hydrate)return l.tag===3?l.stateNode.containerInfo:null;n=null}else l!==n&&(n=null)}}e=Bs(e,r,n,t);try{Ss(bs,e)}finally{Qs(e)}return null}var jn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},um=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){um.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function Js(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Js(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var am=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,t){if(t){if(am[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62,""))}}function Zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=Ms.html;function be(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=Ai(e);t=Ci[t];for(var r=0;r<t.length;r++)Bo(t[r],e,n)}function al(){}function Go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Da(e,t){var n=Ia(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ia(n)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oa(){for(var e=window,t=Go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Go(e.document)}return t}function Jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nc="$",rc="/$",Hi="$?",qi="$!",So=null,ko=null;function lc(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function ei(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0;function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Ra(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===nc||n===qi||n===Hi){if(t===0)return e;t--}else n===rc&&t++}e=e.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),lt="__reactInternalInstance$"+Qi,sl="__reactEventHandlers$"+Qi,tr="__reactContainere$"+Qi;function nr(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tr]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ra(e);e!==null;){if(n=e[lt])return n;e=Ra(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[lt]||e[tr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Bi(e){return e[sl]||null}function Ke(e){do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t){var n=e.stateNode;if(!n)return null;var r=ki(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}function Fa(e,t,n){(t=oc(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=un(n._dispatchListeners,t),n._dispatchInstances=un(n._dispatchInstances,e))}function cm(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Ke(t);for(t=n.length;0<t--;)Fa(n[t],"captured",e);for(t=0;t<n.length;t++)Fa(n[t],"bubbled",e)}}function ti(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=oc(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=un(n._dispatchListeners,t),n._dispatchInstances=un(n._dispatchInstances,e))}function fm(e){e&&e.dispatchConfig.registrationName&&ti(e._targetInst,null,e)}function an(e){zi(e,cm)}var ot=null,bi=null,br=null;function ic(){if(br)return br;var e,t=bi,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return br=l.slice(e,1<r?1-r:void 0)}function Kr(){return!0}function cl(){return!1}function xe(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var l in e)e.hasOwnProperty(l)&&((t=e[l])?this[l]=t(n):l==="target"?this.target=r:this[l]=n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Kr:cl,this.isPropagationStopped=cl,this}ue(xe.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){this.isPersistent=Kr},isPersistent:cl,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=cl,this._dispatchInstances=this._dispatchListeners=null}});xe.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};xe.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var l=new t;return ue(l,n.prototype),n.prototype=l,n.prototype.constructor=n,n.Interface=ue({},r.Interface,e),n.extend=r.extend,uc(n),n};uc(xe);function dm(e,t,n,r){if(this.eventPool.length){var l=this.eventPool.pop();return this.call(l,e,t,n,r),l}return new this(e,t,n,r)}function pm(e){if(!(e instanceof this))throw Error(y(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function uc(e){e.eventPool=[],e.getPooled=dm,e.release=pm}var mm=xe.extend({data:null}),hm=xe.extend({data:null}),vm=[9,13,27,32],Ki=wt&&"CompositionEvent"in window,Un=null;wt&&"documentMode"in document&&(Un=document.documentMode);var ym=wt&&"TextEvent"in window&&!Un,ac=wt&&(!Ki||Un&&8<Un&&11>=Un),Ma=" ",Be={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},La=!1;function sc(e,t){switch(e){case"keyup":return vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function gm(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(La=!0,Ma);case"textInput":return e=t.data,e===Ma&&La?null:e;default:return null}}function wm(e,t){if(Yt)return e==="compositionend"||!Ki&&sc(e,t)?(e=ic(),br=bi=ot=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ac&&t.locale!=="ko"?null:t.data;default:return null}}var xm={eventTypes:Be,extractEvents:function(e,t,n,r){var l;if(Ki)e:{switch(e){case"compositionstart":var o=Be.compositionStart;break e;case"compositionend":o=Be.compositionEnd;break e;case"compositionupdate":o=Be.compositionUpdate;break e}o=void 0}else Yt?sc(e,n)&&(o=Be.compositionEnd):e==="keydown"&&n.keyCode===229&&(o=Be.compositionStart);return o?(ac&&n.locale!=="ko"&&(Yt||o!==Be.compositionStart?o===Be.compositionEnd&&Yt&&(l=ic()):(ot=r,bi="value"in ot?ot.value:ot.textContent,Yt=!0)),o=mm.getPooled(o,t,n,r),l?o.data=l:(l=cc(n),l!==null&&(o.data=l)),an(o),l=o):l=null,(e=ym?gm(e,n):wm(e,n))?(t=hm.getPooled(Be.beforeInput,t,n,r),t.data=e,an(t)):t=null,l===null?t:t===null?l:[l,t]}},Em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Em[e.type]:t==="textarea"}var dc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function pc(e,t,n){return e=xe.getPooled(dc.change,e,t,n),e.type="change",xs(n),an(e),e}var Vn=null,Kn=null;function Pm(e){Ol(e)}function Fl(e){var t=Lt(e);if(Os(t))return e}function Tm(e,t){if(e==="change")return t}var ni=!1;wt&&(ni=qs("input")&&(!document.documentMode||9<document.documentMode));function Aa(){Vn&&(Vn.detachEvent("onpropertychange",mc),Kn=Vn=null)}function mc(e){if(e.propertyName==="value"&&Fl(Kn))if(e=pc(Kn,e,ji(e)),kt)Ol(e);else{kt=!0;try{Ni(Pm,e)}finally{kt=!1,Ii()}}}function Sm(e,t,n){e==="focus"?(Aa(),Vn=t,Kn=n,Vn.attachEvent("onpropertychange",mc)):e==="blur"&&Aa()}function km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Kn)}function Cm(e,t){if(e==="click")return Fl(t)}function Nm(e,t){if(e==="input"||e==="change")return Fl(t)}var _m={eventTypes:dc,_isInputEventSupported:ni,extractEvents:function(e,t,n,r){var l=t?Lt(t):window,o=l.nodeName&&l.nodeName.toLowerCase();if(o==="select"||o==="input"&&l.type==="file")var i=Tm;else if(fc(l))if(ni)i=Nm;else{i=km;var u=Sm}else(o=l.nodeName)&&o.toLowerCase()==="input"&&(l.type==="checkbox"||l.type==="radio")&&(i=Cm);if(i&&(i=i(e,t)))return pc(i,n,r);u&&u(e,l,t),e==="blur"&&(e=l._wrapperState)&&e.controlled&&l.type==="number"&&$o(l,"number",l.value)}},lr=xe.extend({view:null,detail:null}),Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Im[e])?!!t[e]:!1}function Yi(){return Dm}var za=0,ja=0,Ua=!1,Va=!1,or=lr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yi,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=za;return za=e.screenX,Ua?e.type==="mousemove"?e.screenX-t:0:(Ua=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=ja;return ja=e.screenY,Va?e.type==="mousemove"?e.screenY-t:0:(Va=!0,0)}}),hc=or.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Rn={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Om={eventTypes:Rn,extractEvents:function(e,t,n,r,l){var o=e==="mouseover"||e==="pointerover",i=e==="mouseout"||e==="pointerout";if(o&&(l&32)===0&&(n.relatedTarget||n.fromElement)||!i&&!o)return null;if(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,i){if(i=t,t=(t=n.relatedTarget||n.toElement)?nr(t):null,t!==null){var u=Ut(t);(t!==u||t.tag!==5&&t.tag!==6)&&(t=null)}}else i=null;if(i===t)return null;if(e==="mouseout"||e==="mouseover")var a=or,s=Rn.mouseLeave,m=Rn.mouseEnter,p="mouse";else(e==="pointerout"||e==="pointerover")&&(a=hc,s=Rn.pointerLeave,m=Rn.pointerEnter,p="pointer");if(e=i==null?o:Lt(i),o=t==null?o:Lt(t),s=a.getPooled(s,i,n,r),s.type=p+"leave",s.target=e,s.relatedTarget=o,n=a.getPooled(m,t,n,r),n.type=p+"enter",n.target=o,n.relatedTarget=e,r=i,p=t,r&&p)e:{for(a=r,m=p,i=0,e=a;e;e=Ke(e))i++;for(e=0,t=m;t;t=Ke(t))e++;for(;0<i-e;)a=Ke(a),i--;for(;0<e-i;)m=Ke(m),e--;for(;i--;){if(a===m||a===m.alternate)break e;a=Ke(a),m=Ke(m)}a=null}else a=null;for(m=a,a=[];r&&r!==m&&(i=r.alternate,!(i!==null&&i===m));)a.push(r),r=Ke(r);for(r=[];p&&p!==m&&(i=p.alternate,!(i!==null&&i===m));)r.push(p),p=Ke(p);for(p=0;p<a.length;p++)ti(a[p],"bubbled",s);for(p=r.length;0<p--;)ti(r[p],"captured",n);return(l&64)===0?[s]:[s,n]}};function Rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Rm,Fm=Object.prototype.hasOwnProperty;function Yn(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Fm.call(t,n[r])||!At(e[n[r]],t[n[r]]))return!1;return!0}var Mm=wt&&"documentMode"in document&&11>=document.documentMode,vc={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xt=null,ri=null,Wn=null,li=!1;function Wa(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return li||Xt==null||Xt!==Go(n)?null:(n=Xt,"selectionStart"in n&&Jo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wn&&Yn(Wn,n)?null:(Wn=n,e=xe.getPooled(vc.select,ri,e,t),e.type="select",e.target=Xt,an(e),e))}var Lm={eventTypes:vc,extractEvents:function(e,t,n,r,l,o){if(l=o||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(o=!l)){e:{l=Ai(l),o=Ci.onSelect;for(var i=0;i<o.length;i++)if(!l.has(o[i])){l=!1;break e}l=!0}o=!l}if(o)return null;switch(l=t?Lt(t):window,e){case"focus":(fc(l)||l.contentEditable==="true")&&(Xt=l,ri=t,Wn=null);break;case"blur":Wn=ri=Xt=null;break;case"mousedown":li=!0;break;case"contextmenu":case"mouseup":case"dragend":return li=!1,Wa(n,r);case"selectionchange":if(Mm)break;case"keydown":case"keyup":return Wa(n,r)}return null}},Am=xe.extend({animationName:null,elapsedTime:null,pseudoElement:null}),zm=xe.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jm=lr.extend({relatedTarget:null});function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}var Um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wm=lr.extend({key:function(e){if(e.key){var t=Um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yi,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$m=or.extend({dataTransfer:null}),Hm=lr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yi}),qm=xe.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Qm=or.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Bm={eventTypes:Zs,extractEvents:function(e,t,n,r){var l=Gs.get(e);if(!l)return null;switch(e){case"keypress":if(Yr(n)===0)return null;case"keydown":case"keyup":e=Wm;break;case"blur":case"focus":e=jm;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=or;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=$m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Hm;break;case js:case Us:case Vs:e=Am;break;case Ws:e=qm;break;case"scroll":e=lr;break;case"wheel":e=Qm;break;case"copy":case"cut":case"paste":e=zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=hc;break;default:e=xe}return t=e.getPooled(l,t,n,r),an(t),t}};if(ol)throw Error(y(101));ol=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));gs();var bm=rr;ki=Bi;vs=bm;ys=Lt;ws({SimpleEventPlugin:Bm,EnterLeaveEventPlugin:Om,ChangeEventPlugin:_m,SelectEventPlugin:Lm,BeforeInputEventPlugin:xm});var oi=[],Zt=-1;function z(e){0>Zt||(e.current=oi[Zt],oi[Zt]=null,Zt--)}function q(e,t){Zt++,oi[Zt]=e.current,e.current=t}var yt={},oe={current:yt},fe={current:!1},zt=yt;function sn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function fl(){z(fe),z(oe)}function $a(e,t,n){if(oe.current!==yt)throw Error(y(168));q(oe,t),q(fe,n)}function yc(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in e))throw Error(y(108,Je(t)||"Unknown",l));return ue({},n,{},r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,zt=oe.current,q(oe,e),q(fe,fe.current),!0}function Ha(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=yc(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,z(fe),z(oe),q(oe,e)):z(fe),q(fe,n)}var Km=Z.unstable_runWithPriority,Xi=Z.unstable_scheduleCallback,gc=Z.unstable_cancelCallback,qa=Z.unstable_requestPaint,ii=Z.unstable_now,Ym=Z.unstable_getCurrentPriorityLevel,Ml=Z.unstable_ImmediatePriority,wc=Z.unstable_UserBlockingPriority,xc=Z.unstable_NormalPriority,Ec=Z.unstable_LowPriority,Pc=Z.unstable_IdlePriority,Tc={},Xm=Z.unstable_shouldYield,Zm=qa!==void 0?qa:function(){},Ye=null,Zr=null,No=!1,Qa=ii(),Pe=1e4>Qa?ii:function(){return ii()-Qa};function Ll(){switch(Ym()){case Ml:return 99;case wc:return 98;case xc:return 97;case Ec:return 96;case Pc:return 95;default:throw Error(y(332))}}function Sc(e){switch(e){case 99:return Ml;case 98:return wc;case 97:return xc;case 96:return Ec;case 95:return Pc;default:throw Error(y(332))}}function gt(e,t){return e=Sc(e),Km(e,t)}function kc(e,t,n){return e=Sc(e),Xi(e,t,n)}function Ba(e){return Ye===null?(Ye=[e],Zr=Xi(Ml,Cc)):Ye.push(e),Tc}function We(){if(Zr!==null){var e=Zr;Zr=null,gc(e)}Cc()}function Cc(){if(!No&&Ye!==null){No=!0;var e=0;try{var t=Ye;gt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Ye=null}catch(n){throw Ye!==null&&(Ye=Ye.slice(e+1)),Xi(Ml,We),n}finally{No=!1}}}function Gr(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}function De(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}var dl={current:null},pl=null,Gt=null,ml=null;function Zi(){ml=Gt=pl=null}function Gi(e){var t=dl.current;z(dl),e.type._context._currentValue=t}function Nc(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}function rn(e,t){pl=e,ml=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(Ae=!0),e.firstContext=null)}function Se(e,t){if(ml!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(ml=e,t=1073741823),t={context:e,observedBits:t,next:null},Gt===null){if(pl===null)throw Error(y(308));Gt=t,pl.dependencies={expirationTime:0,firstContext:t,responders:null}}else Gt=Gt.next=t;return e._currentValue}var rt=!1;function Ji(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function eu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function dt(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}function pt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ba(e,t){var n=e.alternate;n!==null&&eu(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function Xn(e,t,n,r){var l=e.updateQueue;rt=!1;var o=l.baseQueue,i=l.shared.pending;if(i!==null){if(o!==null){var u=o.next;o.next=i.next,i.next=u}o=i,l.shared.pending=null,u=e.alternate,u!==null&&(u=u.updateQueue,u!==null&&(u.baseQueue=i))}if(o!==null){u=o.next;var a=l.baseState,s=0,m=null,p=null,x=null;if(u!==null){var P=u;do{if(i=P.expirationTime,i<r){var h={expirationTime:P.expirationTime,suspenseConfig:P.suspenseConfig,tag:P.tag,payload:P.payload,callback:P.callback,next:null};x===null?(p=x=h,m=a):x=x.next=h,i>s&&(s=i)}else{x!==null&&(x=x.next={expirationTime:1073741823,suspenseConfig:P.suspenseConfig,tag:P.tag,payload:P.payload,callback:P.callback,next:null}),rf(i,P.suspenseConfig);e:{var I=e,f=P;switch(i=t,h=n,f.tag){case 1:if(I=f.payload,typeof I=="function"){a=I.call(h,a,i);break e}a=I;break e;case 3:I.effectTag=I.effectTag&-4097|64;case 0:if(I=f.payload,i=typeof I=="function"?I.call(h,a,i):I,i==null)break e;a=ue({},a,i);break e;case 2:rt=!0}}P.callback!==null&&(e.effectTag|=32,i=l.effects,i===null?l.effects=[P]:i.push(P))}if(P=P.next,P===null||P===u){if(i=l.shared.pending,i===null)break;P=o.next=i.next,i.next=u,l.baseQueue=o=i,l.shared.pending=null}}while(!0)}x===null?m=a:x.next=p,l.baseState=m,l.baseQueue=x,Vl(s),e.expirationTime=s,e.memoizedState=a}}function Ka(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=l,l=n,typeof r!="function")throw Error(y(191,r));r.call(l)}}}var $n=Oe.ReactCurrentBatchConfig,_c=new Il.Component().refs;function hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternalFiber)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ue(),l=$n.suspense;r=Ft(r,e,l),l=dt(r,l),l.payload=t,n!=null&&(l.callback=n),pt(e,l),ht(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ue(),l=$n.suspense;r=Ft(r,e,l),l=dt(r,l),l.tag=1,l.payload=t,n!=null&&(l.callback=n),pt(e,l),ht(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ue(),r=$n.suspense;n=Ft(n,e,r),r=dt(n,r),r.tag=2,t!=null&&(r.callback=t),pt(e,r),ht(e,n)}};function Ya(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,o):!0}function Ic(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Se(o):(l=de(t)?zt:oe.current,r=t.contextTypes,o=(r=r!=null)?sn(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=_c,Ji(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Se(o):(o=de(t)?zt:oe.current,l.context=sn(e,o)),Xn(e,n,l,r),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(hl(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Al.enqueueReplaceState(l,l.state,null),Xn(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.effectTag|=4)}var zr=Array.isArray;function Fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var i=r.refs;i===_c&&(i=r.refs={}),o===null?delete i[l]:i[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function jr(e,t){if(e.type!=="textarea")throw Error(y(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Dc(e){function t(f,c){if(e){var d=f.lastEffect;d!==null?(d.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.effectTag=8}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=jt(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.effectTag=2,c):d):(f.effectTag=2,c)):c}function i(f){return e&&f.alternate===null&&(f.effectTag=2),f}function u(f,c,d,v){return c===null||c.tag!==6?(c=Fo(d,f.mode,v),c.return=f,c):(c=l(c,d),c.return=f,c)}function a(f,c,d,v){return c!==null&&c.elementType===d.type?(v=l(c,d.props),v.ref=Fn(f,c,d),v.return=f,v):(v=nl(d.type,d.key,d.props,null,f.mode,v),v.ref=Fn(f,c,d),v.return=f,v)}function s(f,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Mo(d,f.mode,v),c.return=f,c):(c=l(c,d.children||[]),c.return=f,c)}function m(f,c,d,v,w){return c===null||c.tag!==7?(c=at(d,f.mode,v,w),c.return=f,c):(c=l(c,d),c.return=f,c)}function p(f,c,d){if(typeof c=="string"||typeof c=="number")return c=Fo(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Rr:return d=nl(c.type,c.key,c.props,null,f.mode,d),d.ref=Fn(f,null,c),d.return=f,d;case bt:return c=Mo(c,f.mode,d),c.return=f,c}if(zr(c)||Nn(c))return c=at(c,f.mode,d,null),c.return=f,c;jr(f,c)}return null}function x(f,c,d,v){var w=c!==null?c.key:null;if(typeof d=="string"||typeof d=="number")return w!==null?null:u(f,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Rr:return d.key===w?d.type===St?m(f,c,d.props.children,v,w):a(f,c,d,v):null;case bt:return d.key===w?s(f,c,d,v):null}if(zr(d)||Nn(d))return w!==null?null:m(f,c,d,v,null);jr(f,d)}return null}function P(f,c,d,v,w){if(typeof v=="string"||typeof v=="number")return f=f.get(d)||null,u(c,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rr:return f=f.get(v.key===null?d:v.key)||null,v.type===St?m(c,f,v.props.children,w,v.key):a(c,f,v,w);case bt:return f=f.get(v.key===null?d:v.key)||null,s(c,f,v,w)}if(zr(v)||Nn(v))return f=f.get(d)||null,m(c,f,v,w,null);jr(c,v)}return null}function h(f,c,d,v){for(var w=null,E=null,S=c,D=c=0,R=null;S!==null&&D<d.length;D++){S.index>D?(R=S,S=null):R=S.sibling;var C=x(f,S,d[D],v);if(C===null){S===null&&(S=R);break}e&&S&&C.alternate===null&&t(f,S),c=o(C,c,D),E===null?w=C:E.sibling=C,E=C,S=R}if(D===d.length)return n(f,S),w;if(S===null){for(;D<d.length;D++)S=p(f,d[D],v),S!==null&&(c=o(S,c,D),E===null?w=S:E.sibling=S,E=S);return w}for(S=r(f,S);D<d.length;D++)R=P(S,f,D,d[D],v),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?D:R.key),c=o(R,c,D),E===null?w=R:E.sibling=R,E=R);return e&&S.forEach(function(Q){return t(f,Q)}),w}function I(f,c,d,v){var w=Nn(d);if(typeof w!="function")throw Error(y(150));if(d=w.call(d),d==null)throw Error(y(151));for(var E=w=null,S=c,D=c=0,R=null,C=d.next();S!==null&&!C.done;D++,C=d.next()){S.index>D?(R=S,S=null):R=S.sibling;var Q=x(f,S,C.value,v);if(Q===null){S===null&&(S=R);break}e&&S&&Q.alternate===null&&t(f,S),c=o(Q,c,D),E===null?w=Q:E.sibling=Q,E=Q,S=R}if(C.done)return n(f,S),w;if(S===null){for(;!C.done;D++,C=d.next())C=p(f,C.value,v),C!==null&&(c=o(C,c,D),E===null?w=C:E.sibling=C,E=C);return w}for(S=r(f,S);!C.done;D++,C=d.next())C=P(S,f,D,C.value,v),C!==null&&(e&&C.alternate!==null&&S.delete(C.key===null?D:C.key),c=o(C,c,D),E===null?w=C:E.sibling=C,E=C);return e&&S.forEach(function(He){return t(f,He)}),w}return function(f,c,d,v){var w=typeof d=="object"&&d!==null&&d.type===St&&d.key===null;w&&(d=d.props.children);var E=typeof d=="object"&&d!==null;if(E)switch(d.$$typeof){case Rr:e:{for(E=d.key,w=c;w!==null;){if(w.key===E){switch(w.tag){case 7:if(d.type===St){n(f,w.sibling),c=l(w,d.props.children),c.return=f,f=c;break e}break;default:if(w.elementType===d.type){n(f,w.sibling),c=l(w,d.props),c.ref=Fn(f,w,d),c.return=f,f=c;break e}}n(f,w);break}else t(f,w);w=w.sibling}d.type===St?(c=at(d.props.children,f.mode,v,d.key),c.return=f,f=c):(v=nl(d.type,d.key,d.props,null,f.mode,v),v.ref=Fn(f,c,d),v.return=f,f=v)}return i(f);case bt:e:{for(w=d.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=l(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Mo(d,f.mode,v),c.return=f,f=c}return i(f)}if(typeof d=="string"||typeof d=="number")return d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,d),c.return=f,f=c):(n(f,c),c=Fo(d,f.mode,v),c.return=f,f=c),i(f);if(zr(d))return h(f,c,d,v);if(Nn(d))return I(f,c,d,v);if(E&&jr(f,d),typeof d>"u"&&!w)switch(f.tag){case 1:case 0:throw f=f.type,Error(y(152,f.displayName||f.name||"Component"))}return n(f,c)}}var cn=Dc(!0),tu=Dc(!1),ir={},je={current:ir},Zn={current:ir},Gn={current:ir};function Ct(e){if(e===ir)throw Error(y(174));return e}function ai(e,t){switch(q(Gn,t),q(Zn,e),q(je,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qo(t,e)}z(je),q(je,t)}function fn(){z(je),z(Zn),z(Gn)}function Za(e){Ct(Gn.current);var t=Ct(je.current),n=Qo(t,e.type);t!==n&&(q(Zn,e),q(je,n))}function nu(e){Zn.current===e&&(z(je),z(Zn))}var H={current:0};function vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Hi||n.data===qi))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.effectTag&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ru(e,t){return{responder:e,props:t}}var Jr=Oe.ReactCurrentDispatcher,Te=Oe.ReactCurrentBatchConfig,it=0,b=null,re=null,le=null,yl=!1;function ve(){throw Error(y(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function ou(e,t,n,r,l,o){if(it=o,b=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Jr.current=e===null||e.memoizedState===null?Gm:Jm,e=n(r,l),t.expirationTime===it){o=0;do{if(t.expirationTime=0,!(25>o))throw Error(y(301));o+=1,le=re=null,t.updateQueue=null,Jr.current=eh,e=n(r,l)}while(t.expirationTime===it)}if(Jr.current=xl,t=re!==null&&re.next!==null,it=0,le=re=b=null,yl=!1,t)throw Error(y(300));return e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?b.memoizedState=le=e:le=le.next=e,le}function dn(){if(re===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?b.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(y(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?b.memoizedState=le=e:le=le.next=e}return le}function Dt(e,t){return typeof t=="function"?t(e):t}function Ur(e){var t=dn(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=re,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){l=l.next,r=r.baseState;var u=i=o=null,a=l;do{var s=a.expirationTime;if(s<it){var m={expirationTime:a.expirationTime,suspenseConfig:a.suspenseConfig,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null};u===null?(i=u=m,o=r):u=u.next=m,s>b.expirationTime&&(b.expirationTime=s,Vl(s))}else u!==null&&(u=u.next={expirationTime:1073741823,suspenseConfig:a.suspenseConfig,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null}),rf(s,a.suspenseConfig),r=a.eagerReducer===e?a.eagerState:e(r,a.action);a=a.next}while(a!==null&&a!==l);u===null?o=r:u.next=i,At(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Vr(e){var t=dn(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);At(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _o(e){var t=ln();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:e},e=e.dispatch=Ac.bind(null,b,e),[t.memoizedState,e]}function si(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oc(){return dn().memoizedState}function ci(e,t,n,r){var l=ln();b.effectTag|=e,l.memoizedState=si(1|t,n,void 0,r===void 0?null:r)}function iu(e,t,n,r){var l=dn();r=r===void 0?null:r;var o=void 0;if(re!==null){var i=re.memoizedState;if(o=i.destroy,r!==null&&lu(r,i.deps)){si(t,n,o,r);return}}b.effectTag|=e,l.memoizedState=si(1|t,n,o,r)}function Ga(e,t){return ci(516,4,e,t)}function gl(e,t){return iu(516,4,e,t)}function Rc(e,t){return iu(4,2,e,t)}function Fc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,n){return n=n!=null?n.concat([e]):null,iu(4,2,Fc.bind(null,t,e),n)}function uu(){}function Ja(e,t){return ln().memoizedState=[e,t===void 0?null:t],e}function wl(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lc(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function au(e,t,n){var r=Ll();gt(98>r?98:r,function(){e(!0)}),gt(97<r?97:r,function(){var l=Te.suspense;Te.suspense=t===void 0?null:t;try{e(!1),n()}finally{Te.suspense=l}})}function Ac(e,t,n){var r=Ue(),l=$n.suspense;r=Ft(r,e,l),l={expirationTime:r,suspenseConfig:l,action:n,eagerReducer:null,eagerState:null,next:null};var o=t.pending;if(o===null?l.next=l:(l.next=o.next,o.next=l),t.pending=l,o=e.alternate,e===b||o!==null&&o===b)yl=!0,l.expirationTime=it,b.expirationTime=it;else{if(e.expirationTime===0&&(o===null||o.expirationTime===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.eagerReducer=o,l.eagerState=u,At(u,i))return}catch{}ht(e,r)}}var xl={readContext:Se,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useResponder:ve,useDeferredValue:ve,useTransition:ve},Gm={readContext:Se,useCallback:Ja,useContext:Se,useEffect:Ga,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ci(4,2,Fc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var n=ln();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ln();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ac.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=ln();return e={current:e},t.memoizedState=e},useState:_o,useDebugValue:uu,useResponder:ru,useDeferredValue:function(e,t){var n=_o(e),r=n[0],l=n[1];return Ga(function(){var o=Te.suspense;Te.suspense=t===void 0?null:t;try{l(e)}finally{Te.suspense=o}},[e,t]),r},useTransition:function(e){var t=_o(!1),n=t[0];return t=t[1],[Ja(au.bind(null,t,e),[t,e]),n]}},Jm={readContext:Se,useCallback:wl,useContext:Se,useEffect:gl,useImperativeHandle:Mc,useLayoutEffect:Rc,useMemo:Lc,useReducer:Ur,useRef:Oc,useState:function(){return Ur(Dt)},useDebugValue:uu,useResponder:ru,useDeferredValue:function(e,t){var n=Ur(Dt),r=n[0],l=n[1];return gl(function(){var o=Te.suspense;Te.suspense=t===void 0?null:t;try{l(e)}finally{Te.suspense=o}},[e,t]),r},useTransition:function(e){var t=Ur(Dt),n=t[0];return t=t[1],[wl(au.bind(null,t,e),[t,e]),n]}},eh={readContext:Se,useCallback:wl,useContext:Se,useEffect:gl,useImperativeHandle:Mc,useLayoutEffect:Rc,useMemo:Lc,useReducer:Vr,useRef:Oc,useState:function(){return Vr(Dt)},useDebugValue:uu,useResponder:ru,useDeferredValue:function(e,t){var n=Vr(Dt),r=n[0],l=n[1];return gl(function(){var o=Te.suspense;Te.suspense=t===void 0?null:t;try{l(e)}finally{Te.suspense=o}},[e,t]),r},useTransition:function(e){var t=Vr(Dt),n=t[0];return t=t[1],[wl(au.bind(null,t,e),[t,e]),n]}},Ze=null,ut=null,Ot=!1;function zc(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function fi(e){if(Ot){var t=ut;if(t){var n=t;if(!es(e,t)){if(t=nn(n.nextSibling),!t||!es(e,t)){e.effectTag=e.effectTag&-1025|2,Ot=!1,Ze=e;return}zc(Ze,n)}Ze=e,ut=nn(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,Ot=!1,Ze=e}}function ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Wr(e){if(e!==Ze)return!1;if(!Ot)return ts(e),Ot=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!ei(t,e.memoizedProps))for(t=ut;t;)zc(e,t),t=nn(t.nextSibling);if(ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===rc){if(t===0){ut=nn(e.nextSibling);break e}t--}else n!==nc&&n!==qi&&n!==Hi||t++}e=e.nextSibling}ut=null}}else ut=Ze?nn(e.stateNode.nextSibling):null;return!0}function Io(){ut=Ze=null,Ot=!1}var th=Oe.ReactCurrentOwner,Ae=!1;function ye(e,t,n,r){t.child=e===null?tu(t,null,n,r):cn(t,e.child,n,r)}function ns(e,t,n,r,l){n=n.render;var o=t.ref;return rn(t,l),r=ou(e,t,n,r,o,l),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=l&&(e.expirationTime=0),Ge(e,t,l)):(t.effectTag|=1,ye(e,t,r,l),t.child)}function rs(e,t,n,r,l,o){if(e===null){var i=n.type;return typeof i=="function"&&!pu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jc(e,t,i,r,l,o)):(e=nl(n.type,null,r,null,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return i=e.child,l<o&&(l=i.memoizedProps,n=n.compare,n=n!==null?n:Yn,n(l,r)&&e.ref===t.ref)?Ge(e,t,o):(t.effectTag|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e)}function jc(e,t,n,r,l,o){return e!==null&&Yn(e.memoizedProps,r)&&e.ref===t.ref&&(Ae=!1,l<o)?(t.expirationTime=e.expirationTime,Ge(e,t,o)):di(e,t,n,r,o)}function Uc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}function di(e,t,n,r,l){var o=de(n)?zt:oe.current;return o=sn(t,o),rn(t,l),n=ou(e,t,n,r,o,l),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=l&&(e.expirationTime=0),Ge(e,t,l)):(t.effectTag|=1,ye(e,t,n,l),t.child)}function ls(e,t,n,r,l){if(de(n)){var o=!0;Xr(t)}else o=!1;if(rn(t,l),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Ic(t,n,r),ui(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,s=n.contextType;typeof s=="object"&&s!==null?s=Se(s):(s=de(n)?zt:oe.current,s=sn(t,s));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Xa(t,i,r,s),rt=!1;var x=t.memoizedState;i.state=x,Xn(t,r,i,l),a=t.memoizedState,u!==r||x!==a||fe.current||rt?(typeof m=="function"&&(hl(t,n,m,r),a=t.memoizedState),(u=rt||Ya(t,n,u,r,x,a,s))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.effectTag|=4)):(typeof i.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=s,r=u):(typeof i.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else i=t.stateNode,eu(e,t),u=t.memoizedProps,i.props=t.type===t.elementType?u:De(t.type,u),a=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Se(s):(s=de(n)?zt:oe.current,s=sn(t,s)),m=n.getDerivedStateFromProps,(p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Xa(t,i,r,s),rt=!1,a=t.memoizedState,i.state=a,Xn(t,r,i,l),x=t.memoizedState,u!==r||a!==x||fe.current||rt?(typeof m=="function"&&(hl(t,n,m,r),x=t.memoizedState),(m=rt||Ya(t,n,u,r,a,x,s))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.effectTag|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.effectTag|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=m):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.effectTag|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.effectTag|=256),r=!1);return pi(e,t,n,r,o,l)}function pi(e,t,n,r,l,o){Uc(e,t);var i=(t.effectTag&64)!==0;if(!r&&!i)return l&&Ha(t,n,!1),Ge(e,t,o);r=t.stateNode,th.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&i?(t.child=cn(t,e.child,null,o),t.child=cn(t,null,u,o)):ye(e,t,u,o),t.memoizedState=r.state,l&&Ha(t,n,!0),t.child}function os(e){var t=e.stateNode;t.pendingContext?$a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$a(e,t.context,!1),ai(e,t.containerInfo)}var Do={dehydrated:null,retryTime:0};function is(e,t,n){var r=t.mode,l=t.pendingProps,o=H.current,i=!1,u;if((u=(t.effectTag&64)!==0)||(u=(o&2)!==0&&(e===null||e.memoizedState!==null)),u?(i=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||l.fallback===void 0||l.unstable_avoidThisFallback===!0||(o|=1),q(H,o&1),e===null){if(l.fallback!==void 0&&fi(t),i){if(i=l.fallback,l=at(null,r,0,null),l.return=t,(t.mode&2)===0)for(e=t.memoizedState!==null?t.child.child:t.child,l.child=e;e!==null;)e.return=l,e=e.sibling;return n=at(i,r,n,null),n.return=t,l.sibling=n,t.memoizedState=Do,t.child=l,n}return r=l.children,t.memoizedState=null,t.child=tu(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,i){if(l=l.fallback,n=jt(e,e.pendingProps),n.return=t,(t.mode&2)===0&&(i=t.memoizedState!==null?t.child.child:t.child,i!==e.child))for(n.child=i;i!==null;)i.return=n,i=i.sibling;return r=jt(r,l),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=Do,t.child=n,r}return n=cn(t,e.child,l.children,n),t.memoizedState=null,t.child=n}if(e=e.child,i){if(i=l.fallback,l=at(null,r,0,null),l.return=t,l.child=e,e!==null&&(e.return=l),(t.mode&2)===0)for(e=t.memoizedState!==null?t.child.child:t.child,l.child=e;e!==null;)e.return=l,e=e.sibling;return n=at(i,r,n,null),n.return=t,l.sibling=n,n.effectTag|=2,l.childExpirationTime=0,t.memoizedState=Do,t.child=l,n}return t.memoizedState=null,t.child=cn(t,e,l.children,n)}function us(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),Nc(e.return,t)}function Oo(e,t,n,r,l,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:l,lastEffect:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailExpiration=0,i.tailMode=l,i.lastEffect=o)}function as(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=H.current,(r&2)!==0)r=r&1|2,t.effectTag|=64;else{if(e!==null&&(e.effectTag&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&us(e,n);else if(e.tag===19)us(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(H,r),(t.mode&2)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&vl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Oo(t,!1,l,n,o,t.lastEffect);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Oo(t,!0,n,null,o,t.lastEffect);break;case"together":Oo(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ge(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&Vl(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}var Vc,mi,Wc,$c;Vc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mi=function(){};Wc=function(e,t,n,r,l){var o=e.memoizedProps;if(o!==r){var i=t.stateNode;switch(Ct(je.current),e=null,n){case"input":o=Vo(i,o),r=Vo(i,r),e=[];break;case"option":o=Ho(i,o),r=Ho(i,r),e=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),e=[];break;case"textarea":o=qo(i,o),r=qo(i,r),e=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(i.onclick=al)}Xo(n,r);var u,a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style")for(a in i=o[u],i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="");else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(on.hasOwnProperty(u)?e||(e=[]):(e=e||[]).push(u,null));for(u in r){var s=r[u];if(i=o?.[u],r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(a in i)!i.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&i[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(e||(e=[]),e.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(e=e||[]).push(u,s)):u==="children"?i===s||typeof s!="string"&&typeof s!="number"||(e=e||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(on.hasOwnProperty(u)?(s!=null&&be(l,u),e||i===s||(e=[])):(e=e||[]).push(u,s))}n&&(e=e||[]).push("style",n),l=e,(t.updateQueue=l)&&(t.effectTag|=4)}};$c=function(e,t,n,r){n!==r&&(t.effectTag|=4)};function $r(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nh(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return de(t.type)&&fl(),null;case 3:return fn(),z(fe),z(oe),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Wr(t)||(t.effectTag|=4),mi(t),null;case 5:nu(t),n=Ct(Gn.current);var l=t.type;if(e!==null&&t.stateNode!=null)Wc(e,t,l,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(y(166));return null}if(e=Ct(je.current),Wr(t)){r=t.stateNode,l=t.type;var o=t.memoizedProps;switch(r[lt]=t,r[sl]=o,l){case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(e=0;e<Mn.length;e++)V(Mn[e],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"form":V("reset",r),V("submit",r);break;case"details":V("toggle",r);break;case"input":xa(r,o),V("invalid",r),be(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r),be(n,"onChange");break;case"textarea":Pa(r,o),V("invalid",r),be(n,"onChange")}Xo(l,o),e=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(e=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(e=["children",""+u]):on.hasOwnProperty(i)&&u!=null&&be(n,i)}switch(l){case"input":Fr(r),Ea(r,o,!0);break;case"textarea":Fr(r),Ta(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=al)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(i=n.nodeType===9?n:n.ownerDocument,e===_a&&(e=Ls(l)),e===_a?l==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(l,{is:r.is}):(e=i.createElement(l),l==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,l),e[lt]=t,e[sl]=r,Vc(e,t,!1,!1),t.stateNode=e,i=Zo(l,r),l){case"iframe":case"object":case"embed":V("load",e),u=r;break;case"video":case"audio":for(u=0;u<Mn.length;u++)V(Mn[u],e);u=r;break;case"source":V("error",e),u=r;break;case"img":case"image":case"link":V("error",e),V("load",e),u=r;break;case"form":V("reset",e),V("submit",e),u=r;break;case"details":V("toggle",e),u=r;break;case"input":xa(e,r),u=Vo(e,r),V("invalid",e),be(n,"onChange");break;case"option":u=Ho(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=ue({},r,{value:void 0}),V("invalid",e),be(n,"onChange");break;case"textarea":Pa(e,r),u=qo(e,r),V("invalid",e),be(n,"onChange");break;default:u=r}Xo(l,u);var a=u;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?ec(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&As(e,s)):o==="children"?typeof s=="string"?(l!=="textarea"||s!=="")&&Qn(e,s):typeof s=="number"&&Qn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(on.hasOwnProperty(o)?s!=null&&be(n,o):s!=null&&Ri(e,o,s,i))}switch(l){case"input":Fr(e),Ea(e,r,!1);break;case"textarea":Fr(e),Ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?tn(e,!!r.multiple,n,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=al)}lc(l,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));n=Ct(Gn.current),Ct(je.current),Wr(t)?(n=t.stateNode,r=t.memoizedProps,n[lt]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[lt]=t,t.stateNode=n)}return null;case 13:return z(H),r=t.memoizedState,(t.effectTag&64)!==0?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&Wr(t):(l=e.memoizedState,r=l!==null,n||l===null||(l=e.child.sibling,l!==null&&(o=t.firstEffect,o!==null?(t.firstEffect=l,l.nextEffect=o):(t.firstEffect=t.lastEffect=l,l.nextEffect=null),l.effectTag=8))),n&&!r&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(H.current&1)!==0?Y===Rt&&(Y=Tl):((Y===Rt||Y===Tl)&&(Y=zl),er!==0&&ge!==null&&(It(ge,pe),sf(ge,er)))),(n||r)&&(t.effectTag|=4),null);case 4:return fn(),mi(t),null;case 10:return Gi(t),null;case 17:return de(t.type)&&fl(),null;case 19:if(z(H),r=t.memoizedState,r===null)return null;if(l=(t.effectTag&64)!==0,o=r.rendering,o===null){if(l)$r(r,!1);else if(Y!==Rt||e!==null&&(e.effectTag&64)!==0)for(o=t.child;o!==null;){if(e=vl(o),e!==null){for(t.effectTag|=64,$r(r,!1),l=e.updateQueue,l!==null&&(t.updateQueue=l,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)l=r,o=n,l.effectTag&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,e=l.alternate,e===null?(l.childExpirationTime=0,l.expirationTime=o,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null):(l.childExpirationTime=e.childExpirationTime,l.expirationTime=e.expirationTime,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,o=e.dependencies,l.dependencies=o===null?null:{expirationTime:o.expirationTime,firstContext:o.firstContext,responders:o.responders}),r=r.sibling;return q(H,H.current&1|2),t.child}o=o.sibling}}else{if(!l)if(e=vl(o),e!==null){if(t.effectTag|=64,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),$r(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Pe()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,l=!0,$r(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=Pe()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Pe(),n.sibling=null,t=H.current,q(H,l?t&1|2:t&1),n):null}throw Error(y(156,t.tag))}function rh(e){switch(e.tag){case 1:de(e.type)&&fl();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(fn(),z(fe),z(oe),t=e.effectTag,(t&64)!==0)throw Error(y(285));return e.effectTag=t&-4097|64,e;case 5:return nu(e),null;case 13:return z(H),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return z(H),null;case 4:return fn(),null;case 10:return Gi(e),null;default:return null}}function su(e,t){return{value:e,source:t,stack:Li(t)}}var lh=typeof WeakSet=="function"?WeakSet:Set;function hi(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=Li(n)),n!==null&&Je(n.type),t=t.value,e!==null&&e.tag===1&&Je(e.type);try{console.error(t)}catch(l){setTimeout(function(){throw l})}}function oh(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){Mt(e,n)}}function ss(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Mt(e,n)}else t.current=null}function ih(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:De(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(y(163))}function Hc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}function qc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uh(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:qc(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&Ka(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ka(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&lc(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Xs(n))));return;case 19:case 17:case 20:case 21:return}throw Error(y(163))}function cs(e,t,n){switch(typeof Ti=="function"&&Ti(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;gt(97<n?97:n,function(){var l=r;do{var o=l.destroy;if(o!==void 0){var i=t;try{o()}catch(u){Mt(i,u)}}l=l.next}while(l!==r)})}break;case 1:ss(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&oh(t,n);break;case 5:ss(t);break;case 4:Bc(e,t,n)}}function Qc(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&Qc(t)}function fs(e){return e.tag===5||e.tag===3||e.tag===4}function ds(e){e:{for(var t=e.return;t!==null;){if(fs(t)){var n=t;break e}t=t.return}throw Error(y(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(y(161))}n.effectTag&16&&(Qn(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||fs(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?vi(e,n,t):yi(e,n,t)}function vi(e,t,n){var r=e.tag,l=r===5||r===6;if(l)e=l?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function yi(e,t,n){var r=e.tag,l=r===5||r===6;if(l)e=l?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,t,n),e=e.sibling;e!==null;)yi(e,t,n),e=e.sibling}function Bc(e,t,n){for(var r=t,l=!1,o,i;;){if(!l){l=r.return;e:for(;;){if(l===null)throw Error(y(160));switch(o=l.stateNode,l.tag){case 5:i=!1;break e;case 3:o=o.containerInfo,i=!0;break e;case 4:o=o.containerInfo,i=!0;break e}l=l.return}l=!0}if(r.tag===5||r.tag===6){e:for(var u=e,a=r,s=n,m=a;;)if(cs(u,m,s),m.child!==null&&m.tag!==4)m.child.return=m,m=m.child;else{if(m===a)break e;for(;m.sibling===null;){if(m.return===null||m.return===a)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}i?(u=o,a=r.stateNode,u.nodeType===8?u.parentNode.removeChild(a):u.removeChild(a)):o.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){o=r.stateNode.containerInfo,i=!0,r.child.return=r,r=r.child;continue}}else if(cs(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(l=!1)}r.sibling.return=r.return,r=r.sibling}}function Ro(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:Hc(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,l=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[sl]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Rs(n,r),Zo(e,l),t=Zo(e,r),l=0;l<o.length;l+=2){var i=o[l],u=o[l+1];i==="style"?ec(n,u):i==="dangerouslySetInnerHTML"?As(n,u):i==="children"?Qn(n,u):Ri(n,i,u,t)}switch(e){case"input":Wo(n,r);break;case"textarea":Fs(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?tn(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?tn(n,!!r.multiple,r.defaultValue,!0):tn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(y(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Xs(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,du=Pe()),n!==null)e:for(e=n;;){if(e.tag===5)o=e.stateNode,r?(o=o.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(o=e.stateNode,l=e.memoizedProps.style,l=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Js("display",l));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){o=e.child.sibling,o.return=e,e=o;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}ps(t);return;case 19:ps(t);return;case 17:return}throw Error(y(163))}function ps(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lh),t.forEach(function(r){var l=yh.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}var ah=typeof WeakMap=="function"?WeakMap:Map;function bc(e,t,n){n=dt(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,gi=r),hi(e,t)},n}function Kc(e,t,n){n=dt(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return hi(e,t),r(l)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this),hi(e,t));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}var sh=Math.ceil,El=Oe.ReactCurrentDispatcher,Yc=Oe.ReactCurrentOwner,X=0,cu=8,Re=16,Ve=32,Rt=0,Pl=1,Xc=2,Tl=3,zl=4,fu=5,N=X,ge=null,O=null,pe=0,Y=Rt,jl=null,Xe=1073741823,Jn=1073741823,Sl=null,er=0,kl=!1,du=0,Zc=500,k=null,Cl=!1,gi=null,mt=null,Nl=!1,Hn=null,An=90,Nt=null,qn=0,wi=null,el=0;function Ue(){return(N&(Re|Ve))!==X?1073741821-(Pe()/10|0):el!==0?el:el=1073741821-(Pe()/10|0)}function Ft(e,t,n){if(t=t.mode,(t&2)===0)return 1073741823;var r=Ll();if((t&4)===0)return r===99?1073741823:1073741822;if((N&Re)!==X)return pe;if(n!==null)e=Gr(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Gr(e,150,100);break;case 97:case 96:e=Gr(e,5e3,250);break;case 95:e=2;break;default:throw Error(y(326))}return ge!==null&&e===pe&&--e,e}function ht(e,t){if(50<qn)throw qn=0,wi=null,Error(y(185));if(e=Ul(e,t),e!==null){var n=Ll();t===1073741823?(N&cu)!==X&&(N&(Re|Ve))===X?xi(e):(we(e),N===X&&We()):we(e),(N&4)===X||n!==98&&n!==99||(Nt===null?Nt=new Map([[e,t]]):(n=Nt.get(e),(n===void 0||n>t)&&Nt.set(e,t)))}}function Ul(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,l=null;if(r===null&&e.tag===3)l=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){l=r.stateNode;break}r=r.return}return l!==null&&(ge===l&&(Vl(t),Y===zl&&It(l,pe)),sf(l,t)),l}function tl(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!af(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}function we(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Ba(xi.bind(null,e));else{var t=tl(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ue();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var l=e.callbackPriority;if(e.callbackExpirationTime===t&&l>=r)return;n!==Tc&&gc(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?Ba(xi.bind(null,e)):kc(r,Gc.bind(null,e),{timeout:10*(1073741821-t)-Pe()}),e.callbackNode=t}}}function Gc(e,t){if(el=0,t)return t=Ue(),Si(e,t),we(e),null;var n=tl(e);if(n!==0){if(t=e.callbackNode,(N&(Re|Ve))!==X)throw Error(y(327));if(pn(),e===ge&&n===pe||_t(e,n),O!==null){var r=N;N|=Re;var l=nf();do try{dh();break}catch(u){tf(e,u)}while(!0);if(Zi(),N=r,El.current=l,Y===Pl)throw t=jl,_t(e,n),It(e,n),we(e),t;if(O===null)switch(l=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Y,ge=null,r){case Rt:case Pl:throw Error(y(345));case Xc:Si(e,2<n?2:n);break;case Tl:if(It(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ei(l)),Xe===1073741823&&(l=du+Zc-Pe(),10<l)){if(kl){var o=e.lastPingedTime;if(o===0||o>=n){e.lastPingedTime=n,_t(e,n);break}}if(o=tl(e),o!==0&&o!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=Co(Tt.bind(null,e),l);break}Tt(e);break;case zl:if(It(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ei(l)),kl&&(l=e.lastPingedTime,l===0||l>=n)){e.lastPingedTime=n,_t(e,n);break}if(l=tl(e),l!==0&&l!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(Jn!==1073741823?r=10*(1073741821-Jn)-Pe():Xe===1073741823?r=0:(r=10*(1073741821-Xe)-5e3,l=Pe(),n=10*(1073741821-n)-l,r=l-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sh(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=Co(Tt.bind(null,e),r);break}Tt(e);break;case fu:if(Xe!==1073741823&&Sl!==null){o=Xe;var i=Sl;if(r=i.busyMinDurationMs|0,0>=r?r=0:(l=i.busyDelayMs|0,o=Pe()-(10*(1073741821-o)-(i.timeoutMs|0||5e3)),r=o<=l?0:l+r-o),10<r){It(e,n),e.timeoutHandle=Co(Tt.bind(null,e),r);break}}Tt(e);break;default:throw Error(y(329))}if(we(e),e.callbackNode===t)return Gc.bind(null,e)}}return null}function xi(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(N&(Re|Ve))!==X)throw Error(y(327));if(pn(),e===ge&&t===pe||_t(e,t),O!==null){var n=N;N|=Re;var r=nf();do try{fh();break}catch(l){tf(e,l)}while(!0);if(Zi(),N=n,El.current=r,Y===Pl)throw n=jl,_t(e,t),It(e,t),we(e),n;if(O!==null)throw Error(y(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,ge=null,Tt(e),we(e)}return null}function ch(){if(Nt!==null){var e=Nt;Nt=null,e.forEach(function(t,n){Si(n,t),we(n)}),We()}}function Jc(e,t){var n=N;N|=1;try{return e(t)}finally{N=n,N===X&&We()}}function ef(e,t){var n=N;N&=-2,N|=cu;try{return e(t)}finally{N=n,N===X&&We()}}function _t(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sm(n)),O!==null)for(n=O.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:fn(),z(fe),z(oe);break;case 5:nu(r);break;case 4:fn();break;case 13:z(H);break;case 19:z(H);break;case 10:Gi(r)}n=n.return}ge=e,O=jt(e.current,null),pe=t,Y=Rt,jl=null,Jn=Xe=1073741823,Sl=null,er=0,kl=!1}function tf(e,t){do{try{if(Zi(),Jr.current=xl,yl)for(var n=b.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(it=0,le=re=b=null,yl=!1,O===null||O.return===null)return Y=Pl,jl=t,O=null;e:{var l=e,o=O.return,i=O,u=t;if(t=pe,i.effectTag|=2048,i.firstEffect=i.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var a=u;if((i.mode&2)===0){var s=i.alternate;s?(i.updateQueue=s.updateQueue,i.memoizedState=s.memoizedState,i.expirationTime=s.expirationTime):(i.updateQueue=null,i.memoizedState=null)}var m=(H.current&1)!==0,p=o;do{var x;if(x=p.tag===13){var P=p.memoizedState;if(P!==null)x=P.dehydrated!==null;else{var h=p.memoizedProps;x=h.fallback===void 0?!1:h.unstable_avoidThisFallback!==!0?!0:!m}}if(x){var I=p.updateQueue;if(I===null){var f=new Set;f.add(a),p.updateQueue=f}else I.add(a);if((p.mode&2)===0){if(p.effectTag|=64,i.effectTag&=-2981,i.tag===1)if(i.alternate===null)i.tag=17;else{var c=dt(1073741823,null);c.tag=2,pt(i,c)}i.expirationTime=1073741823;break e}u=void 0,i=t;var d=l.pingCache;if(d===null?(d=l.pingCache=new ah,u=new Set,d.set(a,u)):(u=d.get(a),u===void 0&&(u=new Set,d.set(a,u))),!u.has(i)){u.add(i);var v=vh.bind(null,l,a,i);a.then(v,v)}p.effectTag|=4096,p.expirationTime=t;break e}p=p.return}while(p!==null);u=Error((Je(i.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Li(i))}Y!==fu&&(Y=Xc),u=su(u,i),p=o;do{switch(p.tag){case 3:a=u,p.effectTag|=4096,p.expirationTime=t;var w=bc(p,a,t);ba(p,w);break e;case 1:a=u;var E=p.type,S=p.stateNode;if((p.effectTag&64)===0&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(mt===null||!mt.has(S)))){p.effectTag|=4096,p.expirationTime=t;var D=Kc(p,a,t);ba(p,D);break e}}p=p.return}while(p!==null)}O=of(O)}catch(R){t=R;continue}break}while(!0)}function nf(){var e=El.current;return El.current=xl,e===null?xl:e}function rf(e,t){e<Xe&&2<e&&(Xe=e),t!==null&&e<Jn&&2<e&&(Jn=e,Sl=t)}function Vl(e){e>er&&(er=e)}function fh(){for(;O!==null;)O=lf(O)}function dh(){for(;O!==null&&!Xm();)O=lf(O)}function lf(e){var t=uf(e.alternate,e,pe);return e.memoizedProps=e.pendingProps,t===null&&(t=of(e)),Yc.current=null,t}function of(e){O=e;do{var t=O.alternate;if(e=O.return,(O.effectTag&2048)===0){if(t=nh(t,O,pe),pe===1||O.childExpirationTime!==1){for(var n=0,r=O.child;r!==null;){var l=r.expirationTime,o=r.childExpirationTime;l>n&&(n=l),o>n&&(n=o),r=r.sibling}O.childExpirationTime=n}if(t!==null)return t;e!==null&&(e.effectTag&2048)===0&&(e.firstEffect===null&&(e.firstEffect=O.firstEffect),O.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=O.firstEffect),e.lastEffect=O.lastEffect),1<O.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=O:e.firstEffect=O,e.lastEffect=O))}else{if(t=rh(O),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(t=O.sibling,t!==null)return t;O=e}while(O!==null);return Y===Rt&&(Y=fu),null}function Ei(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}function Tt(e){var t=Ll();return gt(99,ph.bind(null,e,t)),null}function ph(e,t){do pn();while(Hn!==null);if((N&(Re|Ve))!==X)throw Error(y(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var l=Ei(n);if(e.firstPendingTime=l,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===ge&&(O=ge=null,pe=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,l=n.firstEffect):l=n:l=n.firstEffect,l!==null){var o=N;N|=Ve,Yc.current=null,So=Br;var i=Oa();if(Jo(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var a=u.getSelection&&u.getSelection();if(a&&a.rangeCount!==0){u=a.anchorNode;var s=a.anchorOffset,m=a.focusNode;a=a.focusOffset;try{u.nodeType,m.nodeType}catch{u=null;break e}var p=0,x=-1,P=-1,h=0,I=0,f=i,c=null;t:for(;;){for(var d;f!==u||s!==0&&f.nodeType!==3||(x=p+s),f!==m||a!==0&&f.nodeType!==3||(P=p+a),f.nodeType===3&&(p+=f.nodeValue.length),(d=f.firstChild)!==null;)c=f,f=d;for(;;){if(f===i)break t;if(c===u&&++h===s&&(x=p),c===m&&++I===a&&(P=p),(d=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=d}u=x===-1||P===-1?null:{start:x,end:P}}else u=null}u=u||{start:0,end:0}}else u=null;ko={activeElementDetached:null,focusedElem:i,selectionRange:u},Br=!1,k=l;do try{mh()}catch(C){if(k===null)throw Error(y(330));Mt(k,C),k=k.nextEffect}while(k!==null);k=l;do try{for(i=e,u=t;k!==null;){var v=k.effectTag;if(v&16&&Qn(k.stateNode,""),v&128){var w=k.alternate;if(w!==null){var E=w.ref;E!==null&&(typeof E=="function"?E(null):E.current=null)}}switch(v&1038){case 2:ds(k),k.effectTag&=-3;break;case 6:ds(k),k.effectTag&=-3,Ro(k.alternate,k);break;case 1024:k.effectTag&=-1025;break;case 1028:k.effectTag&=-1025,Ro(k.alternate,k);break;case 4:Ro(k.alternate,k);break;case 8:s=k,Bc(i,s,u),Qc(s)}k=k.nextEffect}}catch(C){if(k===null)throw Error(y(330));Mt(k,C),k=k.nextEffect}while(k!==null);if(E=ko,w=Oa(),v=E.focusedElem,u=E.selectionRange,w!==v&&v&&v.ownerDocument&&tc(v.ownerDocument.documentElement,v)){for(u!==null&&Jo(v)&&(w=u.start,E=u.end,E===void 0&&(E=w),"selectionStart"in v?(v.selectionStart=w,v.selectionEnd=Math.min(E,v.value.length)):(E=(w=v.ownerDocument||document)&&w.defaultView||window,E.getSelection&&(E=E.getSelection(),s=v.textContent.length,i=Math.min(u.start,s),u=u.end===void 0?i:Math.min(u.end,s),!E.extend&&i>u&&(s=u,u=i,i=s),s=Da(v,i),m=Da(v,u),s&&m&&(E.rangeCount!==1||E.anchorNode!==s.node||E.anchorOffset!==s.offset||E.focusNode!==m.node||E.focusOffset!==m.offset)&&(w=w.createRange(),w.setStart(s.node,s.offset),E.removeAllRanges(),i>u?(E.addRange(w),E.extend(m.node,m.offset)):(w.setEnd(m.node,m.offset),E.addRange(w)))))),w=[],E=v;E=E.parentNode;)E.nodeType===1&&w.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<w.length;v++)E=w[v],E.element.scrollLeft=E.left,E.element.scrollTop=E.top}Br=!!So,ko=So=null,e.current=n,k=l;do try{for(v=e;k!==null;){var S=k.effectTag;if(S&36&&uh(v,k.alternate,k),S&128){w=void 0;var D=k.ref;if(D!==null){var R=k.stateNode;k.tag,w=R,typeof D=="function"?D(w):D.current=w}}k=k.nextEffect}}catch(C){if(k===null)throw Error(y(330));Mt(k,C),k=k.nextEffect}while(k!==null);k=null,Zm(),N=o}else e.current=n;if(Nl)Nl=!1,Hn=e,An=t;else for(k=l;k!==null;)t=k.nextEffect,k.nextEffect=null,k=t;if(t=e.firstPendingTime,t===0&&(mt=null),t===1073741823?e===wi?qn++:(qn=0,wi=e):qn=0,typeof Pi=="function"&&Pi(n.stateNode,r),we(e),Cl)throw Cl=!1,e=gi,gi=null,e;return(N&cu)!==X||We(),null}function mh(){for(;k!==null;){var e=k.effectTag;(e&256)!==0&&ih(k.alternate,k),(e&512)===0||Nl||(Nl=!0,kc(97,function(){return pn(),null})),k=k.nextEffect}}function pn(){if(An!==90){var e=97<An?97:An;return An=90,gt(e,hh)}}function hh(){if(Hn===null)return!1;var e=Hn;if(Hn=null,(N&(Re|Ve))!==X)throw Error(y(331));var t=N;for(N|=Ve,e=e.current.firstEffect;e!==null;){try{var n=e;if((n.effectTag&512)!==0)switch(n.tag){case 0:case 11:case 15:case 22:Hc(5,n),qc(5,n)}}catch(r){if(e===null)throw Error(y(330));Mt(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return N=t,We(),!0}function ms(e,t,n){t=su(n,t),t=bc(e,t,1073741823),pt(e,t),e=Ul(e,1073741823),e!==null&&we(e)}function Mt(e,t){if(e.tag===3)ms(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){ms(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=su(t,e),e=Kc(n,e,1073741823),pt(n,e),n=Ul(n,1073741823),n!==null&&we(n);break}}n=n.return}}function vh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),ge===e&&pe===n?Y===zl||Y===Tl&&Xe===1073741823&&Pe()-du<Zc?_t(e,pe):kl=!0:af(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,we(e)))}function yh(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Ue(),t=Ft(t,e,null)),e=Ul(e,t),e!==null&&we(e)}var uf;uf=function(e,t,n){var r=t.expirationTime;if(e!==null){var l=t.pendingProps;if(e.memoizedProps!==l||fe.current)Ae=!0;else{if(r<n){switch(Ae=!1,t.tag){case 3:os(t),Io();break;case 5:if(Za(t),t.mode&4&&n!==1&&l.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:de(t.type)&&Xr(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,l=t.type._context,q(dl,l._currentValue),l._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?is(e,t,n):(q(H,H.current&1),t=Ge(e,t,n),t!==null?t.sibling:null);q(H,H.current&1);break;case 19:if(r=t.childExpirationTime>=n,(e.effectTag&64)!==0){if(r)return as(e,t,n);t.effectTag|=64}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null),q(H,H.current),!r)return null}return Ge(e,t,n)}Ae=!1}}else Ae=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,l=sn(t,oe.current),rn(t,n),l=ou(null,t,r,e,l,n),t.effectTag|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)){var o=!0;Xr(t)}else o=!1;t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ji(t);var i=r.getDerivedStateFromProps;typeof i=="function"&&hl(t,r,i,e),l.updater=Al,t.stateNode=l,l._reactInternalFiber=t,ui(t,r,e,n),t=pi(null,t,r,!0,o,n)}else t.tag=0,ye(null,t,l,n),t=t.child;return t;case 16:e:{if(l=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Bp(l),l._status!==1)throw l._result;switch(l=l._result,t.type=l,o=t.tag=xh(l),e=De(l,e),o){case 0:t=di(null,t,l,e,n);break e;case 1:t=ls(null,t,l,e,n);break e;case 11:t=ns(null,t,l,e,n);break e;case 14:t=rs(null,t,l,De(l.type,e),r,n);break e}throw Error(y(306,l,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),di(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),ls(e,t,r,l,n);case 3:if(os(t),r=t.updateQueue,e===null||r===null)throw Error(y(282));if(r=t.pendingProps,l=t.memoizedState,l=l!==null?l.element:null,eu(e,t),Xn(t,r,null,n),r=t.memoizedState.element,r===l)Io(),t=Ge(e,t,n);else{if((l=t.stateNode.hydrate)&&(ut=nn(t.stateNode.containerInfo.firstChild),Ze=t,l=Ot=!0),l)for(n=tu(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else ye(e,t,r,n),Io();t=t.child}return t;case 5:return Za(t),e===null&&fi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ei(r,l)?i=null:o!==null&&ei(r,o)&&(t.effectTag|=16),Uc(e,t),t.mode&4&&n!==1&&l.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(ye(e,t,i,n),t=t.child),t;case 6:return e===null&&fi(t),null;case 13:return is(e,t,n);case 4:return ai(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),ns(e,t,r,l,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value;var u=t.type._context;if(q(dl,u._currentValue),u._currentValue=o,i!==null)if(u=i.value,o=At(u,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(u,o):1073741823)|0,o===0){if(i.children===l.children&&!fe.current){t=Ge(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var a=u.dependencies;if(a!==null){i=u.child;for(var s=a.firstContext;s!==null;){if(s.context===r&&(s.observedBits&o)!==0){u.tag===1&&(s=dt(n,null),s.tag=2,pt(u,s)),u.expirationTime<n&&(u.expirationTime=n),s=u.alternate,s!==null&&s.expirationTime<n&&(s.expirationTime=n),Nc(u.return,n),a.expirationTime<n&&(a.expirationTime=n);break}s=s.next}}else i=u.tag===10&&u.type===t.type?null:u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}ye(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,o=t.pendingProps,r=o.children,rn(t,n),l=Se(l,o.unstable_observedBits),r=r(l),t.effectTag|=1,ye(e,t,r,n),t.child;case 14:return l=t.type,o=De(l,t.pendingProps),o=De(l.type,o),rs(e,t,l,o,r,n);case 15:return jc(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,de(r)?(e=!0,Xr(t)):e=!1,rn(t,n),Ic(t,r,l),ui(t,r,l,n),pi(null,t,r,!0,e,n);case 19:return as(e,t,n)}throw Error(y(156,t.tag))};var Pi=null,Ti=null;function gh(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Pi=function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)===64)}catch{}},Ti=function(r){try{t.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function wh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function ze(e,t,n,r){return new wh(e,t,n,r)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xh(e){if(typeof e=="function")return pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fi)return 11;if(e===Mi)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")pu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case St:return at(n.children,l,o,t);case Qp:i=8,l|=7;break;case ks:i=8,l|=1;break;case Hr:return e=ze(12,n,t,l|8),e.elementType=Hr,e.type=Hr,e.expirationTime=o,e;case qr:return e=ze(13,n,t,l),e.type=qr,e.elementType=qr,e.expirationTime=o,e;case Uo:return e=ze(19,n,t,l),e.elementType=Uo,e.expirationTime=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cs:i=10;break e;case Ns:i=9;break e;case Fi:i=11;break e;case Mi:i=14;break e;case _s:i=16,r=null;break e;case Is:i=22;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=ze(i,n,t,l),t.elementType=e,t.type=r,t.expirationTime=o,t}function at(e,t,n,r){return e=ze(7,e,r,t),e.expirationTime=n,e}function Fo(e,t,n){return e=ze(6,e,null,t),e.expirationTime=n,e}function Mo(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eh(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function af(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}function It(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function sf(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Si(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}function _l(e,t,n,r){var l=t.current,o=Ue(),i=$n.suspense;o=Ft(o,l,i);e:if(n){n=n._reactInternalFiber;t:{if(Ut(n)!==n||n.tag!==1)throw Error(y(170));var u=n;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(de(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(u!==null);throw Error(y(171))}if(n.tag===1){var a=n.type;if(de(a)){n=yc(n,a,u);break e}}n=u}else n=yt;return t.context===null?t.context=n:t.pendingContext=n,t=dt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),pt(l,t),ht(l,o),o}function Lo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function hs(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}function mu(e,t){hs(e,t),(e=e.alternate)&&hs(e,t)}function hu(e,t,n){n=n!=null&&n.hydrate===!0;var r=new Eh(e,t,n),l=ze(3,null,null,t===2?7:t===1?3:0);r.current=l,l.stateNode=r,Ji(l),e[tr]=r.current,n&&t!==0&&Gp(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}hu.prototype.render=function(e){_l(e,this._internalRoot,null,null)};hu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;_l(null,e,null,function(){t[tr]=null})};function ur(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ph(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new hu(e,0,t?{hydrate:!0}:void 0)}function Wl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o._internalRoot;if(typeof l=="function"){var u=l;l=function(){var s=Lo(i);u.call(s)}}_l(t,i,e,l)}else{if(o=n._reactRootContainer=Ph(n,r),i=o._internalRoot,typeof l=="function"){var a=l;l=function(){var s=Lo(i);a.call(s)}}ef(function(){_l(t,i,e,l)})}return Lo(i)}function Th(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}Ks=function(e){if(e.tag===13){var t=Gr(Ue(),150,100);ht(e,t),mu(e,t)}};Ui=function(e){e.tag===13&&(ht(e,3),mu(e,3))};Ys=function(e){if(e.tag===13){var t=Ue();t=Ft(t,e,null),ht(e,t),mu(e,t)}};jo=function(e,t,n){switch(t){case"input":if(Wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Bi(r);if(!l)throw Error(y(90));Os(r),Wo(r,l)}}}break;case"textarea":Fs(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Ni=Jc;Ps=function(e,t,n,r,l){var o=N;N|=4;try{return gt(98,e.bind(null,t,n,r,l))}finally{N=o,N===X&&We()}};_i=function(){(N&(1|Re|Ve))===X&&(ch(),pn())};Ts=function(e,t){var n=N;N|=2;try{return e(t)}finally{N=n,N===X&&We()}};function cf(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ur(t))throw Error(y(200));return Th(e,t,null,n)}var Sh={Events:[rr,Lt,Bi,ws,zo,an,function(e){zi(e,fm)},xs,Es,Rl,Ol,pn,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return gh(ue({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Hs(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:nr,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sh;ke.createPortal=cf;ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):Error(y(268,Object.keys(e)));return e=Hs(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e,t){if((N&(Re|Ve))!==X)throw Error(y(187));var n=N;N|=1;try{return gt(99,e.bind(null,t))}finally{N=n,We()}};ke.hydrate=function(e,t,n){if(!ur(t))throw Error(y(200));return Wl(null,e,t,!0,n)};ke.render=function(e,t,n){if(!ur(t))throw Error(y(200));return Wl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!ur(e))throw Error(y(40));return e._reactRootContainer?(ef(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[tr]=null})}),!0):!1};ke.unstable_batchedUpdates=Jc;ke.unstable_createPortal=function(e,t){return cf(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ur(n))throw Error(y(200));if(e==null||e._reactInternalFiber===void 0)throw Error(y(38));return Wl(e,t,n,!1,r)};ke.version="16.14.0"});var vu=W((Kv,pf)=>{"use strict";function df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df)}catch(e){console.error(e)}}df(),pf.exports=ff()});var Uf=W((Yv,jf)=>{"use strict";var Fe=Er(),et=_e();function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var se=typeof Symbol=="function"&&Symbol.for,kf=se?Symbol.for("react.portal"):60106,xu=se?Symbol.for("react.fragment"):60107,Cf=se?Symbol.for("react.strict_mode"):60108,Nf=se?Symbol.for("react.profiler"):60114,Eu=se?Symbol.for("react.provider"):60109,_f=se?Symbol.for("react.context"):60110,kh=se?Symbol.for("react.concurrent_mode"):60111,If=se?Symbol.for("react.forward_ref"):60112,Pu=se?Symbol.for("react.suspense"):60113,Df=se?Symbol.for("react.suspense_list"):60120,Of=se?Symbol.for("react.memo"):60115,Rf=se?Symbol.for("react.lazy"):60116,Ch=se?Symbol.for("react.block"):60121,Nh=se?Symbol.for("react.fundamental"):60117,_h=se?Symbol.for("react.scope"):60119;function Ih(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function cr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xu:return"Fragment";case kf:return"Portal";case Nf:return"Profiler";case Cf:return"StrictMode";case Pu:return"Suspense";case Df:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _f:return"Context.Consumer";case Eu:return"Context.Provider";case If:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Of:return cr(e.type);case Ch:return cr(e.render);case Rf:if(e=e._status===1?e._result:null)return cr(e)}return null}var pr=et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;pr.hasOwnProperty("ReactCurrentDispatcher")||(pr.ReactCurrentDispatcher={current:null});pr.hasOwnProperty("ReactCurrentBatchConfig")||(pr.ReactCurrentBatchConfig={suspense:null});var Ff={};function mr(e,t){for(var n=e._threadCount|0;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}function Dh(e,t,n,r){if(r&&(r=e.contextType,typeof r=="object"&&r!==null))return mr(r,n),r[n];if(e=e.contextTypes){n={};for(var l in e)n[l]=t[l];t=n}else t=Ff;return t}for(J=new Uint16Array(16),ar=0;15>ar;ar++)J[ar]=ar+1;var J,ar;J[15]=0;var Oh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf=Object.prototype.hasOwnProperty,hf={},vf={};function Mf(e){return mf.call(vf,e)?!0:mf.call(hf,e)?!1:Oh.test(e)?vf[e]=!0:(hf[e]=!0,!1)}function Rh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fh(e,t,n,r){if(t===null||typeof t>"u"||Rh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ce(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ce(t,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ce(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ce(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ce(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ce(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){ee[e]=new ce(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ce(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ce(e,5,!1,e.toLowerCase(),null,!1)});var ku=/[\-:]([a-z])/g;function Cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ku,Cu);ee[t]=new ce(t,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ku,Cu);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ku,Cu);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!1)});ee.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!0)});var Mh=/["'&<>]/;function Vt(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=Mh.exec(e);if(t){var n="",r,l=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}l!==r&&(n+=e.substring(l,r)),l=r+1,n+=t}e=l!==r?n+e.substring(l,r):n}return e}function Lh(e,t){var n=ee.hasOwnProperty(e)?ee[e]:null,r;return(r=e!=="style")&&(r=n!==null?n.type===0:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")),r||Fh(e,t,n,!1)?"":n!==null?(e=n.attributeName,r=n.type,r===3||r===4&&t===!0?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+(Vt(t)+'"'))):Mf(e)?e+'="'+(Vt(t)+'"'):""}function Ah(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zh=typeof Object.is=="function"?Object.is:Ah,$e=null,$l=null,A=null,sr=!1,Tu=!1,Et=null,Hl=0;function mn(){if($e===null)throw Error(j(321));return $e}function yf(){if(0<Hl)throw Error(j(312));return{memoizedState:null,queue:null,next:null}}function Su(){return A===null?$l===null?(sr=!1,$l=A=yf()):(sr=!0,A=$l):A.next===null?(sr=!1,A=A.next=yf()):(sr=!0,A=A.next),A}function Lf(e,t,n,r){for(;Tu;)Tu=!1,Hl+=1,A=null,n=e(t,r);return $l=$e=null,Hl=0,A=Et=null,n}function Af(e,t){return typeof t=="function"?t(e):t}function gf(e,t,n){if($e=mn(),A=Su(),sr){var r=A.queue;if(t=r.dispatch,Et!==null&&(n=Et.get(r),n!==void 0)){Et.delete(r),r=A.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return A.memoizedState=r,[r,t]}return[A.memoizedState,t]}return e=e===Af?typeof t=="function"?t():t:n!==void 0?n(t):t,A.memoizedState=e,e=A.queue={last:null,dispatch:null},e=e.dispatch=jh.bind(null,$e,e),[A.memoizedState,e]}function jh(e,t,n){if(!(25>Hl))throw Error(j(301));if(e===$e)if(Tu=!0,e={action:n,next:null},Et===null&&(Et=new Map),n=Et.get(t),n===void 0)Et.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function yu(){}var fr=0,Uh={readContext:function(e){var t=fr;return mr(e,t),e[t]},useContext:function(e){mn();var t=fr;return mr(e,t),e[t]},useMemo:function(e,t){if($e=mn(),A=Su(),t=t===void 0?null:t,A!==null){var n=A.memoizedState;if(n!==null&&t!==null){e:{var r=n[1];if(r===null)r=!1;else{for(var l=0;l<r.length&&l<t.length;l++)if(!zh(t[l],r[l])){r=!1;break e}r=!0}}if(r)return n[0]}}return e=e(),A.memoizedState=[e,t],e},useReducer:gf,useRef:function(e){$e=mn(),A=Su();var t=A.memoizedState;return t===null?(e={current:e},A.memoizedState=e):t},useState:function(e){return gf(Af,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:yu,useEffect:yu,useDebugValue:yu,useResponder:function(e,t){return{props:t,responder:e}},useDeferredValue:function(e){return mn(),e},useTransition:function(){return mn(),[function(e){e()},!1]}},wf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var zf={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Vh=Fe({menuitem:!0},zf),dr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wh=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){Wh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});var $h=/([A-Z])/g,Hh=/^ms-/,xt=et.Children.toArray,gu=pr.ReactCurrentDispatcher,qh={listing:!0,pre:!0,textarea:!0},Qh=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ef={},wu={};function Bh(e){if(e==null)return e;var t="";return et.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var bh=Object.prototype.hasOwnProperty,Kh={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Pf(e,t){if(e===void 0)throw Error(j(152,cr(t)||"Component"))}function Yh(e,t,n){function r(i,u){var a=u.prototype&&u.prototype.isReactComponent,s=Dh(u,t,n,a),m=[],p=!1,x={isMounted:function(){return!1},enqueueForceUpdate:function(){if(m===null)return null},enqueueReplaceState:function(v,w){p=!0,m=[w]},enqueueSetState:function(v,w){if(m===null)return null;m.push(w)}};if(a){if(a=new u(i.props,s,x),typeof u.getDerivedStateFromProps=="function"){var P=u.getDerivedStateFromProps.call(null,i.props,a.state);P!=null&&(a.state=Fe({},a.state,P))}}else if($e={},a=u(i.props,s,x),a=Lf(u,i.props,a,s),a==null||a.render==null){e=a,Pf(e,u);return}if(a.props=i.props,a.context=s,a.updater=x,x=a.state,x===void 0&&(a.state=x=null),typeof a.UNSAFE_componentWillMount=="function"||typeof a.componentWillMount=="function")if(typeof a.componentWillMount=="function"&&typeof u.getDerivedStateFromProps!="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&typeof u.getDerivedStateFromProps!="function"&&a.UNSAFE_componentWillMount(),m.length){x=m;var h=p;if(m=null,p=!1,h&&x.length===1)a.state=x[0];else{P=h?x[0]:a.state;var I=!0;for(h=h?1:0;h<x.length;h++){var f=x[h];f=typeof f=="function"?f.call(a,P,i.props,s):f,f!=null&&(I?(I=!1,P=Fe({},P,f)):Fe(P,f))}a.state=P}}else m=null;if(e=a.render(),Pf(e,u),typeof a.getChildContext=="function"&&(i=u.childContextTypes,typeof i=="object")){var c=a.getChildContext();for(var d in c)if(!(d in i))throw Error(j(108,cr(u)||"Unknown",d))}c&&(t=Fe({},t,c))}for(;et.isValidElement(e);){var l=e,o=l.type;if(typeof o!="function")break;r(l,o)}return{child:e,context:t}}var Tf=(function(){function e(n,r){et.isValidElement(n)?n.type!==xu?n=[n]:(n=n.props.children,n=et.isValidElement(n)?[n]:xt(n)):n=xt(n),n={type:null,domNamespace:wf.html,children:n,childIndex:0,context:Ff,footer:""};var l=J[0];if(l===0){var o=J;l=o.length;var i=2*l;if(!(65536>=i))throw Error(j(304));var u=new Uint16Array(i);for(u.set(o),J=u,J[0]=l+1,o=l;o<i-1;o++)J[o]=o+1;J[i-1]=0}else J[0]=J[l];this.threadID=l,this.stack=[n],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=r,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var n=this.threadID;J[n]=J[0],J[0]=n}},t.pushProvider=function(n){var r=++this.contextIndex,l=n.type._context,o=this.threadID;mr(l,o);var i=l[o];this.contextStack[r]=l,this.contextValueStack[r]=i,l[o]=n.props.value},t.popProvider=function(){var n=this.contextIndex,r=this.contextStack[n],l=this.contextValueStack[n];this.contextStack[n]=null,this.contextValueStack[n]=null,this.contextIndex--,r[this.threadID]=l},t.clearProviders=function(){for(var n=this.contextIndex;0<=n;n--)this.contextStack[n][this.threadID]=this.contextValueStack[n]},t.read=function(n){if(this.exhausted)return null;var r=fr;fr=this.threadID;var l=gu.current;gu.current=Uh;try{for(var o=[""],i=!1;o[0].length<n;){if(this.stack.length===0){this.exhausted=!0;var u=this.threadID;J[u]=J[0],J[0]=u;break}var a=this.stack[this.stack.length-1];if(i||a.childIndex>=a.children.length){var s=a.footer;if(s!==""&&(this.previousWasTextNode=!1),this.stack.pop(),a.type==="select")this.currentSelectValue=null;else if(a.type!=null&&a.type.type!=null&&a.type.type.$$typeof===Eu)this.popProvider(a.type);else if(a.type===Pu){this.suspenseDepth--;var m=o.pop();if(i){i=!1;var p=a.fallbackFrame;if(!p)throw Error(j(303));this.stack.push(p),o[this.suspenseDepth]+="<!--$!-->";continue}else o[this.suspenseDepth]+=m}o[this.suspenseDepth]+=s}else{var x=a.children[a.childIndex++],P="";try{P+=this.render(x,a.context,a.domNamespace)}catch(h){throw h!=null&&typeof h.then=="function"?Error(j(294)):h}o.length<=this.suspenseDepth&&o.push(""),o[this.suspenseDepth]+=P}}return o[0]}finally{gu.current=l,fr=r}},t.render=function(n,r,l){if(typeof n=="string"||typeof n=="number")return l=""+n,l===""?"":this.makeStaticMarkup?Vt(l):this.previousWasTextNode?"<!-- -->"+Vt(l):(this.previousWasTextNode=!0,Vt(l));if(r=Yh(n,r,this.threadID),n=r.child,r=r.context,n===null||n===!1)return"";if(!et.isValidElement(n)){if(n!=null&&n.$$typeof!=null)throw l=n.$$typeof,Error(l===kf?j(257):j(258,l.toString()));return n=xt(n),this.stack.push({type:null,domNamespace:l,children:n,childIndex:0,context:r,footer:""}),""}var o=n.type;if(typeof o=="string")return this.renderDOM(n,r,l);switch(o){case Cf:case kh:case Nf:case Df:case xu:return n=xt(n.props.children),this.stack.push({type:null,domNamespace:l,children:n,childIndex:0,context:r,footer:""}),"";case Pu:throw Error(j(294))}if(typeof o=="object"&&o!==null)switch(o.$$typeof){case If:$e={};var i=o.render(n.props,n.ref);return i=Lf(o.render,n.props,i,n.ref),i=xt(i),this.stack.push({type:null,domNamespace:l,children:i,childIndex:0,context:r,footer:""}),"";case Of:return n=[et.createElement(o.type,Fe({ref:n.ref},n.props))],this.stack.push({type:null,domNamespace:l,children:n,childIndex:0,context:r,footer:""}),"";case Eu:return o=xt(n.props.children),l={type:n,domNamespace:l,children:o,childIndex:0,context:r,footer:""},this.pushProvider(n),this.stack.push(l),"";case _f:o=n.type,i=n.props;var u=this.threadID;return mr(o,u),o=xt(i.children(o[u])),this.stack.push({type:n,domNamespace:l,children:o,childIndex:0,context:r,footer:""}),"";case Nh:throw Error(j(338));case Rf:switch(o=n.type,Ih(o),o._status){case 1:return n=[et.createElement(o._result,Fe({ref:n.ref},n.props))],this.stack.push({type:null,domNamespace:l,children:n,childIndex:0,context:r,footer:""}),"";case 2:throw o._result;default:throw Error(j(295))}case _h:throw Error(j(343))}throw Error(j(130,o==null?o:typeof o,""))},t.renderDOM=function(n,r,l){var o=n.type.toLowerCase();if(l===wf.html&&xf(o),!Ef.hasOwnProperty(o)){if(!Qh.test(o))throw Error(j(65,o));Ef[o]=!0}var i=n.props;if(o==="input")i=Fe({type:void 0},i,{defaultChecked:void 0,defaultValue:void 0,value:i.value!=null?i.value:i.defaultValue,checked:i.checked!=null?i.checked:i.defaultChecked});else if(o==="textarea"){var u=i.value;if(u==null){u=i.defaultValue;var a=i.children;if(a!=null){if(u!=null)throw Error(j(92));if(Array.isArray(a)){if(!(1>=a.length))throw Error(j(93));a=a[0]}u=""+a}u==null&&(u="")}i=Fe({},i,{value:void 0,children:""+u})}else if(o==="select")this.currentSelectValue=i.value!=null?i.value:i.defaultValue,i=Fe({},i,{value:void 0});else if(o==="option"){a=this.currentSelectValue;var s=Bh(i.children);if(a!=null){var m=i.value!=null?i.value+"":s;if(u=!1,Array.isArray(a)){for(var p=0;p<a.length;p++)if(""+a[p]===m){u=!0;break}}else u=""+a===m;i=Fe({selected:void 0,children:void 0},i,{selected:u,children:s})}}if(u=i){if(Vh[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(j(137,o,""));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(j(60));if(!(typeof u.dangerouslySetInnerHTML=="object"&&"__html"in u.dangerouslySetInnerHTML))throw Error(j(61))}if(u.style!=null&&typeof u.style!="object")throw Error(j(62,""))}u=i,a=this.makeStaticMarkup,s=this.stack.length===1,m="<"+n.type;for(v in u)if(bh.call(u,v)){var x=u[v];if(x!=null){if(v==="style"){p=void 0;var P="",h="";for(p in x)if(x.hasOwnProperty(p)){var I=p.indexOf("--")===0,f=x[p];if(f!=null){if(I)var c=p;else if(c=p,wu.hasOwnProperty(c))c=wu[c];else{var d=c.replace($h,"-$1").toLowerCase().replace(Hh,"-ms-");c=wu[c]=d}P+=h+c+":",h=p,I=f==null||typeof f=="boolean"||f===""?"":I||typeof f!="number"||f===0||dr.hasOwnProperty(h)&&dr[h]?(""+f).trim():f+"px",P+=I,h=";"}}x=P||null}p=null;e:if(I=o,f=u,I.indexOf("-")===-1)I=typeof f.is=="string";else switch(I){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":I=!1;break e;default:I=!0}I?Kh.hasOwnProperty(v)||(p=v,p=Mf(p)&&x!=null?p+'="'+(Vt(x)+'"'):""):p=Lh(v,x),p&&(m+=" "+p)}}a||s&&(m+=' data-reactroot=""');var v=m;u="",zf.hasOwnProperty(o)?v+="/>":(v+=">",u="</"+n.type+">");e:{if(a=i.dangerouslySetInnerHTML,a!=null){if(a.__html!=null){a=a.__html;break e}}else if(a=i.children,typeof a=="string"||typeof a=="number"){a=Vt(a);break e}a=null}return a!=null?(i=[],qh.hasOwnProperty(o)&&a.charAt(0)===`
`&&(v+=`
`),v+=a):i=xt(i.children),n=n.type,l=l==null||l==="http://www.w3.org/1999/xhtml"?xf(n):l==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":l,this.stack.push({domNamespace:l,type:o,children:i,childIndex:0,context:r,footer:u}),this.previousWasTextNode=!1,v},e})(),Sf={renderToString:function(e){e=new Tf(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new Tf(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){throw Error(j(207))},renderToStaticNodeStream:function(){throw Error(j(208))},version:"16.14.0"};jf.exports=Sf.default||Sf});var Wf=W((Xv,Vf)=>{"use strict";Vf.exports=Uf()});var Hf=W((Zv,$f)=>{$f.exports={setup:function(e){"addEventListener"in window?e.handleEvent("DOMContentLoaded",e.handleMount):e.handleEvent("onload",e.handleMount)},teardown:function(e){e.removeEvent("DOMContentLoaded",e.handleMount),e.removeEvent("onload",e.handleMount)}}});var Qf=W((Gv,qf)=>{qf.exports={setup:function(e){e.handleEvent("ready",e.handleMount),e.handleEvent("pjax:end",e.handleMount),e.handleEvent("pjax:beforeReplace",e.handleUnmount)},teardown:function(e){e.removeEvent("ready",e.handleMount),e.removeEvent("pjax:end",e.handleMount),e.removeEvent("pjax:beforeReplace",e.handleUnmount)}}});var bf=W((Jv,Bf)=>{Bf.exports={setup:function(e){e.handleEvent("turbolinks:load",e.handleMount)},teardown:function(e){e.removeEvent("turbolinks:load",e.handleMount)}}});var Yf=W((ey,Kf)=>{Kf.exports={setup:function(e){Turbolinks.pagesCached(0),e.handleEvent("page:change",e.handleMount),e.handleEvent("page:receive",e.handleUnmount)},teardown:function(e){e.removeEvent("page:change",e.handleMount),e.removeEvent("page:receive",e.handleUnmount)}}});var Zf=W((ty,Xf)=>{Xf.exports={setup:function(e){e.handleEvent(Turbolinks.EVENTS.CHANGE,e.handleMount),e.handleEvent(Turbolinks.EVENTS.BEFORE_UNLOAD,e.handleUnmount)},teardown:function(e){e.removeEvent(Turbolinks.EVENTS.CHANGE,e.handleMount),e.removeEvent(Turbolinks.EVENTS.BEFORE_UNLOAD,e.handleUnmount)}}});var ld=W((ny,rd)=>{var Gf=Hf(),Jf=Qf(),ed=bf(),td=Yf(),nd=Zf();rd.exports=function(e){e.handleEvent&&(typeof Turbolinks<"u"&&typeof Turbolinks.EVENTS<"u"&&nd.teardown(e),ed.teardown(e),td.teardown(e),Jf.teardown(e),Gf.teardown(e)),"addEventListener"in window?(e.handleEvent=function(t,n){document.addEventListener(t,n)},e.removeEvent=function(t,n){document.removeEventListener(t,n)}):(e.handleEvent=function(t,n){window.attachEvent(t,n)},e.removeEvent=function(t,n){window.detachEvent(t,n)}),typeof Turbolinks<"u"&&Turbolinks.supported?typeof Turbolinks.EVENTS<"u"?nd.setup(e):typeof Turbolinks.controller<"u"?ed.setup(e):td.setup(e):typeof $<"u"&&typeof $.pjax=="function"?Jf.setup(e):Gf.setup(e)}});var ql=W((exports,module)=>{var topLevel=typeof window>"u"?exports:window;module.exports=function(className){var constructor;return constructor=topLevel[className],constructor||(constructor=eval(className)),constructor&&constructor.default&&(constructor=constructor.default),constructor}});var Ql=W((ry,od)=>{od.exports=function(e){return function(t){var n=t.split("."),r=n.shift(),l=n,o=e("./"+r);return l.forEach(function(i){o=o[i]}),o.__esModule&&(o=o.default),o}}});var ud=W((ly,id)=>{var Xh=ql(),Zh=Ql();id.exports=function(e){var t=Zh(e);return function(n){var r;try{r=t(n)}catch(l){try{r=Xh(n)}catch(o){console.error(l),console.error(o)}}return r}}});var sd=W((oy,ad)=>{var Gh=ql(),Jh=Ql();ad.exports=function(e){var t=e.map(n=>Jh(n));return function(n){var r;try{var l=0,o,i;do{o=t[l];try{r=o(n)}catch(u){i||(i=u)}l+=1}while(l<t.length);if(!r)throw i}catch(u){try{r=Gh(n)}catch(a){console.error(u),console.error(a)}}return r}}});var hr,Nu,tt,cd=_u(()=>{hr=B(vu()),Nu=hr.default;if(typeof hr.default<"u"&&(hr.default.version.split(".")[0]||16)>=18)try{Nu=Ld("react-dom/client")}catch{Nu=hr.default}tt=Nu});var fd={};Ad(fd,{createReactRootLike:()=>nv,reactHydrate:()=>tv,supportsHydration:()=>ev});function ev(){return typeof tt.hydrate=="function"||typeof tt.hydrateRoot=="function"}function tv(e,t){return typeof tt.hydrateRoot=="function"?tt.hydrateRoot(e,t):tt.hydrate(t,e)}function nv(e){return tt.createRoot?tt.createRoot(e):rv(e)}function rv(e){return{render(n){return tt.render(n,e)}}}var dd=_u(()=>{cd()});var yd=W((ay,vd)=>{var pd=_e(),lv=vu(),ov=Wf(),iv=ld(),md=ql(),uv=Ql(),hd=ud(),av=sd(),{supportsHydration:sv,reactHydrate:cv,createReactRootLike:fv}=(dd(),zd(fd)),Ce={CLASS_NAME_ATTR:"data-react-class",PROPS_ATTR:"data-react-props",RENDER_ATTR:"data-hydrate",CACHE_ID_ATTR:"data-react-cache-id",TURBOLINKS_PERMANENT_ATTR:"data-turbolinks-permanent",jQuery:typeof window<"u"&&typeof window.jQuery<"u"&&window.jQuery,components:{},findDOMNodes:function(e){var t=Ce.CLASS_NAME_ATTR,n,r;switch(typeof e){case"undefined":n="["+t+"]",r=document;break;case"object":n="["+t+"]",r=e;break;case"string":n=e+"["+t+"], "+e+" ["+t+"]",r=document;break;default:break}return Ce.jQuery?Ce.jQuery(n,r):r.querySelectorAll(n)},getConstructor:md,constructorFromGlobal:md,constructorFromRequireContext:uv,constructorFromRequireContextWithGlobalFallback:hd,useContext:function(e){this.getConstructor=hd(e)},useContexts:function(e){this.getConstructor=av(e)},serverRender:function(e,t,n){var r=this.getConstructor(t),l=pd.createElement(r,n);return ov[e](l)},mountComponents:function(e){for(var t=Ce,n=t.findDOMNodes(e),r=0;r<n.length;++r){var l=n[r],o=l.getAttribute(t.CLASS_NAME_ATTR),i=t.getConstructor(o),u=l.getAttribute(t.PROPS_ATTR),a=u&&JSON.parse(u),s=l.getAttribute(t.RENDER_ATTR),m=l.getAttribute(t.CACHE_ID_ATTR),p=l.hasAttribute(t.TURBOLINKS_PERMANENT_ATTR);if(i){var P=this.components[m];P===void 0&&(P=pd.createElement(i,a),p&&(this.components[m]=P)),s&&sv()?P=cv(l,P):P=fv(l).render(P)}else{var x="Cannot find component: '"+o+"'";throw console&&console.log&&console.log("%c[react-rails] %c"+x+" for element","font-weight: bold","",l),new Error(x+". Make sure your component is available to render.")}}},unmountComponents:function(e){for(var t=Ce.findDOMNodes(e),n=0;n<t.length;++n){var r=t[n];lv.unmountComponentAtNode(r)}},detectEvents:function(){iv(this)}};Ce.handleMount=function(e){var t=void 0;e&&e.target&&(t=e.target),Ce.mountComponents(t)};Ce.handleUnmount=function(e){var t=void 0;e&&e.target&&(t=e.target),Ce.unmountComponents(t)};typeof window<"u"&&Ce.detectEvents();self.ReactRailsUJS=Ce;vd.exports=Ce});var Du={initialize:function(){let e=document.querySelector(".password-strength__input");e&&e.addEventListener("input",()=>{qd(e,document.querySelector(".password-strength__bar"))})}},jd=e=>e.value,Ud=e=>{let t={length:document.querySelector(".password-strength__length"),numeric:document.querySelector(".password-strength__numeric"),uppercase:document.querySelector(".password-strength__uppercase"),lowercase:document.querySelector(".password-strength__lowercase"),specialChar:document.querySelector(".password-strength__special")};Object.keys(e).forEach(n=>{let r=t[n];e[n]?(r.classList.remove("text-muted"),r.querySelector("i").classList.remove("fa-times"),r.querySelector("i").classList.add("fa-check"),r.classList.add("text-success")):(r.classList.add("text-muted"),r.querySelector("i").classList.add("fa-times"),r.querySelector("i").classList.remove("fa-check"),r.classList.remove("text-success"))})},Vd=e=>{let t=/\d/.test(e),n=/[A-Z]/.test(e),r=/[a-z]/.test(e),l=/[^a-zA-Z0-9]/.test(e),o={length:e.length>=12,numeric:t,uppercase:n,lowercase:r,specialChar:l};Ud(o);let i=Object.values(o).filter(Boolean).length;return e.length===0?"none":i===5?"strong":i>=3?"moderate":"weak"},Wd=(e,t)=>{let r={weak:25,moderate:75,strong:100}[t]||0;return e.setAttribute("aria-valuenow",r),r},$d=(e,t)=>{switch(e.style.width=`${t}%`,e.classList.remove("bg-success","bg-info","bg-warning","bg-danger"),t){case 25:e.classList.add("bg-danger"),e.textContent="Weak";break;case 75:e.classList.remove("bg-danger"),e.classList.add("bg-warning"),e.textContent="Moderate";break;case 100:e.classList.remove("bg-danger"),e.classList.add("bg-info"),e.textContent="Strong";break;default:e.classList.add("bg-danger"),e.textContent="",e.style.width="0"}},Hd=(e,t)=>{let n=Wd(e,t);$d(e,n)},qd=(e,t)=>{let n=jd(e),r=Vd(n);Hd(t,r)};var Ou={initialize(){document.querySelector('input[type="password"][name*="password_confirmation"]')&&document.querySelectorAll(".password-visibility-toggle").forEach(function(t){let n=t.closest(".input-group").querySelector('input[type="password"]');if(!n)return;t.classList.remove("d-none");let r=t.querySelector("i");t.addEventListener("click",function(){n.type==="password"?(n.type="text",r.classList.remove("fa-eye"),r.classList.add("fa-eye-slash"),t.setAttribute("aria-label","Hide password"),t.setAttribute("title","Hide password")):(n.type="password",r.classList.remove("fa-eye-slash"),r.classList.add("fa-eye"),t.setAttribute("aria-label","Show password"),t.setAttribute("title","Show password"))})})}};var Lu={initialize:function(){let e=document.querySelectorAll("[data-address-container]");e.length>0?e.forEach(t=>{Ru(t)}):Ru(document)}};function Ru(e){let t=e.querySelector('select[name$="[country]"]'),n=e.querySelector('[data-state-field="select"]'),r=e.querySelector('[data-state-field="text"]'),l=e.querySelector('[data-state-field="hidden"]');l&&(n&&n.addEventListener("change",function(){l.value=this.value||l.value}),r&&r.addEventListener("input",function(){l.value=this.value||l.value})),t?(t.addEventListener("change",function(){let o=this.value;Kl(o,!1,e)}),Kl(t.value,!0,e)):Kl("",!0,e)}function Au(e){let t=e.querySelector('[data-state-field="select"]');return t?.dataset.states?JSON.parse(t.dataset.states):{}}function Qd(e){let t=Au(e);return Object.fromEntries(Object.entries(t).map(([n,r])=>[r.toLowerCase(),n]))}function Bd(e){return Au(e)}function bd(e,t){if(!e)return"";let n=e.trim(),r=n.toUpperCase();return n.length===2?r:Qd(t)[n.toLowerCase()]||r}function Kd(e,t,n){if(!e?.value)return;let r=bd(e.value,n);t.value!==r&&(t.value=r)}function Yd(e,t,n,r=!1){if(e?.value&&(!r||!t.value)){let l=Bd(n);t.value=l[e.value]||e.value}}function Fu(e,t){e.closest(".form-group").style.display="",e.disabled=!1,t.closest(".form-group").style.display="none",t.disabled=!0}function Mu(e,t){t&&(t.value=e.value||t.value)}function Kl(e,t,n){let r=n.querySelector('[data-state-field="select"]'),l=n.querySelector('[data-state-field="text"]'),o=n.querySelector('[data-state-field="hidden"]');!r||!l||(e==="US"?(Kd(l,r,n),Fu(r,l),Mu(r,o)):(r.closest(".form-group").style.display!=="none"&&Yd(r,l,n,t),Fu(l,r),Mu(l,o)))}var K=B(_e());var Tv=B(_e()),F=B(he()),wp=({tenantProtectionFlyerUrl:e,autoProtectEnabled:t,allowInsuranceOptOut:n})=>(0,F.jsx)("div",{id:"tenant-protection-info-modal",className:"modal fade",tabIndex:"-1",role:"dialog",children:(0,F.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,F.jsxs)("div",{className:"modal-content shadow",children:[(0,F.jsx)("div",{className:"modal-header",children:(0,F.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})}),(0,F.jsxs)("div",{className:"modal-body",children:[!n&&(0,F.jsxs)("div",{children:[(0,F.jsx)("h5",{className:"modal-title text-center fw-bold mb-3",children:"Insurance or Protection Required"}),(0,F.jsx)("p",{className:"mb-4",children:"This storage facility requires your items to be covered by insurance or a Tenant Protection Plan in order to protect your belongings from potential damage."})]}),(0,F.jsxs)("div",{className:"me-4 p-4 d-flex flex-column align-items-center justify-content-center",children:[(0,F.jsx)("span",{className:"fw-bold",children:"Store with"}),(0,F.jsx)("span",{className:"fw-bold",children:"Peace of Mind!"}),(0,F.jsx)("i",{className:"fa fa-shield fa-3x mt-2"})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("h6",{className:"fw-bold",children:"Tenant Protection covers:"}),(0,F.jsxs)("ul",{className:"mb-0",children:[(0,F.jsx)("li",{children:"Burglary"}),(0,F.jsx)("li",{children:"Vandalism"}),(0,F.jsx)("li",{children:"Water damage (excluding flood)"}),(0,F.jsx)("li",{children:"Hail damage"}),(0,F.jsx)("li",{children:"Fire and smoke damage"}),(0,F.jsx)("li",{children:"Moth, insect, and vermin damage"})]})]}),t&&(0,F.jsxs)("div",{className:"alert alert-light border d-flex align-items-center",children:[(0,F.jsx)("i",{className:"fa fa-info-circle me-2 text-secondary"}),(0,F.jsx)("small",{children:"If you prefer to provide your own coverage, we require the policy provider, number, and expiration date. If you are unable to provide these details within 14 days, we will auto-enroll you in our base Tenant Protection Plan."})]})]}),(0,F.jsx)("div",{className:"modal-footer border-0 justify-content-center",children:(0,F.jsxs)("a",{className:"btn btn-primary",href:e,target:"_blank",rel:"noopener noreferrer",children:["Learn More ",(0,F.jsx)("i",{className:"fa fa-external-link"})]})})]})})}),na=wp;var Cv=B(_e()),te=B(he());function oo(e){let{disableForm:t,formatCurrency:n,periodRent:r,planMonthsInWords:l,rentUnitUrl:o,site:i,sitePhone:u,unit:a,unitImageUrl:s,unitTypeSize:m}=e;return(0,te.jsxs)("div",{className:"d-flex mb-3 align-items-center",children:[(0,te.jsx)("div",{className:"col-6",children:(0,te.jsxs)("div",{className:"card flex-fill align-items-center me-2 pb-2",children:[(0,te.jsx)("img",{src:s,alt:a.name,className:"img-fluid w-50"}),(0,te.jsxs)("small",{className:"fw-bold",children:[a.name," - ",m]}),(0,te.jsxs)("small",{className:"fw-bold",children:[n(r),"/",l]}),t?(0,te.jsx)("span",{className:"small text-muted",children:"Change Unit"}):(0,te.jsx)("a",{href:o,className:"small",children:"Change Unit"})]})}),(0,te.jsx)("div",{className:"col-6",children:(0,te.jsxs)("div",{className:"text-start text-muted p-2",children:[(0,te.jsx)("small",{className:"d-block fw-bold",children:i.name}),(0,te.jsx)("small",{className:"d-block",children:i.physicalAddress}),(0,te.jsxs)("small",{className:"d-block",children:[i.physicalCity,", ",i.physicalState," ",i.physicalZip]}),(0,te.jsx)("small",{className:"d-block",children:u})]})})]})}var Iv=B(_e()),_=B(he()),xp=e=>{let{allowInsuranceOptOut:t,availableInsurancePlans:n,coverageDeclinedAt:r,disableForm:l,formatCurrency:o,insurancePlan:i,onChangeInsurancePlan:u}=e,a=i?.id||(r?"-1":"0");return(0,_.jsxs)("div",{children:[(0,_.jsx)("label",{className:"form-label small fw-bold",children:"Insurance Plan"}),(0,_.jsxs)("select",{value:a,onChange:s=>u(parseInt(s.target.value)),disabled:l,className:"form-select form-select-sm",children:[n.map(s=>(0,_.jsxs)("option",{value:s.id,children:[o(parseInt(s.limit))," - ",o(s.premium)]},s.id)),(0,_.jsx)("option",{value:"0",children:"Private Insurance (I will provide coverage details)"}),t&&(0,_.jsx)("option",{value:"-1",children:"Decline Insurance"})]})]})},Ep=e=>{let{allowInsuranceOptOut:t,autoProtectEnabled:n,availableTenantProtectionPlans:r,coverageDeclinedAt:l,disableForm:o,formatCurrency:i,onChangeProtectionPlan:u,tenantProtectionPlan:a}=e,s=a?.id||(l?"-1":"0");return(0,_.jsxs)("div",{children:[(0,_.jsx)("label",{className:"form-label small fw-bold me-2",children:"Protection Plan"}),(0,_.jsx)("i",{className:"text-muted fa fa-info-circle",role:"button","data-bs-toggle":"modal","data-bs-target":"#tenant-protection-info-modal"}),(0,_.jsxs)("select",{value:s,onChange:m=>u(parseInt(m.target.value)),className:"form-select form-select-sm",disabled:o,children:[r.map(m=>(0,_.jsxs)("option",{value:m.id,children:[i(parseInt(m.limit))," - ",i(parseFloat(m.fee)),"/month"]},m.id)),n?(0,_.jsx)("option",{value:"0",children:"Private Insurance (I will provide coverage details within 14 days)"}):(0,_.jsx)("option",{value:"0",children:"Private Insurance (I will provide coverage details)"}),t&&(0,_.jsx)("option",{value:"-1",children:"Decline Protection"})]})]})},Pp=e=>{let{allowInsuranceOptOut:t,allowTenantProtection:n,autoProtectEnabled:r,availableInsurancePlans:l,availableTenantProtectionPlans:o,coverageDeclinedAt:i,disableForm:u,formatCurrency:a,insuranceEnabled:s,insurancePlan:m,onChangeInsurancePlan:p,onChangeProtectionPlan:x,tenantProtectionEnabled:P,tenantProtectionPlan:h,allowInsurance:I}=e;return!s&&!P||P&&!n||s&&!I?null:(0,_.jsxs)("div",{className:"col-xl-12",children:[s&&(0,_.jsx)(xp,{allowInsuranceOptOut:t,availableInsurancePlans:l,coverageDeclinedAt:i,disableForm:u,formatCurrency:a,insurancePlan:m,onChangeInsurancePlan:p}),P&&(0,_.jsx)(Ep,{allowInsuranceOptOut:t,autoProtectEnabled:r,availableTenantProtectionPlans:o,coverageDeclinedAt:i,disableForm:u,formatCurrency:a,onChangeProtectionPlan:x,tenantProtectionPlan:h})]})},Tp=e=>{let{disableForm:t,selfInsuredPolicyExpiresOn:n,selfInsuredPolicyProvider:r,selfInsuredPolicyNumber:l,setSelfInsuredPolicyExpiresOn:o,setSelfInsuredPolicyNumber:i,setSelfInsuredPolicyProvider:u,showSelfInsuredDetails:a}=e;return a?(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"row mb-3",children:(0,_.jsxs)("div",{className:"col-xl-12",children:[(0,_.jsx)("label",{className:"form-label small fw-bold",children:"Policy Provider*"}),(0,_.jsx)("input",{type:"text",value:r,onChange:s=>u(s.target.value),className:"form-control form-control-sm",disabled:t})]})}),(0,_.jsxs)("div",{className:"row mb-3",children:[(0,_.jsxs)("div",{className:"col-7",children:[(0,_.jsx)("label",{className:"form-label small fw-bold",children:"Policy Number*"}),(0,_.jsx)("input",{type:"text",value:l,onChange:s=>i(s.target.value),className:"form-control form-control-sm",disabled:t})]}),(0,_.jsxs)("div",{className:"col-5",children:[(0,_.jsx)("label",{className:"form-label small fw-bold",children:"Expiration Date*"}),(0,_.jsxs)("div",{className:"input-group input-group-sm",children:[(0,_.jsx)("span",{className:"input-group-text",children:(0,_.jsx)("i",{className:"fa fa-calendar"})}),(0,_.jsx)("input",{type:"date",value:n,onChange:s=>o(s.target.value),className:"form-control",disabled:t,min:new Date().toISOString().split("T")[0],max:"2099-12-31",onBlur:s=>s.target.reportValidity()})]})]})]})]}):null},Sp=e=>{let{disableForm:t,onApplyPromoCode:n,promoCode:r,setPromoCode:l,showPromotions:o}=e;return o?(0,_.jsxs)("div",{className:"col-xl-12 mb-3",children:[(0,_.jsx)("label",{className:"form-label small fw-bold",children:"Promotion Code"}),(0,_.jsxs)("div",{className:"d-flex gap-2",children:[(0,_.jsx)("input",{type:"text",value:r,onChange:i=>l(i.target.value),className:"form-control form-control-sm",disabled:t}),(0,_.jsx)("button",{className:"btn btn-primary btn-sm",onClick:n,disabled:t,children:"Apply"})]})]}):null};function io(e){return(0,_.jsxs)("div",{className:"mb-3",children:[(0,_.jsx)("div",{className:"row g-3 mb-3",children:(0,_.jsx)(Pp,{allowInsuranceOptOut:e.allowInsuranceOptOut,allowTenantProtection:e.allowTenantProtection,autoProtectEnabled:e.autoProtectEnabled,availableInsurancePlans:e.availableInsurancePlans,availableTenantProtectionPlans:e.availableTenantProtectionPlans,coverageDeclinedAt:e.coverageDeclinedAt,disableForm:e.disableForm,formatCurrency:e.formatCurrency,insuranceEnabled:e.insuranceEnabled,insurancePlan:e.insurancePlan,onChangeInsurancePlan:e.onChangeInsurancePlan,onChangeProtectionPlan:e.onChangeProtectionPlan,tenantProtectionEnabled:e.tenantProtectionEnabled,tenantProtectionPlan:e.tenantProtectionPlan,allowInsurance:e.allowInsurance})}),(0,_.jsx)(Tp,{disableForm:e.disableForm,selfInsuredPolicyExpiresOn:e.selfInsuredPolicyExpiresOn,selfInsuredPolicyProvider:e.selfInsuredPolicyProvider,selfInsuredPolicyNumber:e.selfInsuredPolicyNumber,setSelfInsuredPolicyExpiresOn:e.setSelfInsuredPolicyExpiresOn,setSelfInsuredPolicyNumber:e.setSelfInsuredPolicyNumber,setSelfInsuredPolicyProvider:e.setSelfInsuredPolicyProvider,showSelfInsuredDetails:e.showSelfInsuredDetails}),(0,_.jsx)(Sp,{disableForm:e.disableForm,onApplyPromoCode:e.onApplyPromoCode,promoCode:e.promoCode,setPromoCode:e.setPromoCode,showPromotions:e.showPromotions})]})}var Rv=B(_e()),g=B(he()),ra=({promotion:e,promotionDiscount:t,formatCurrency:n})=>e?(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold",children:"Promotion"}),(0,g.jsx)("small",{children:t>0?`-${n(t)}`:""})]}),(0,g.jsx)("div",{className:"d-flex justify-content-end",children:(0,g.jsx)("small",{className:"text-success",children:e.description})})]}):null,kp=e=>{let{allowTenantProtection:t,formatCurrency:n,hasProrating:r,insuranceEnabled:l,insurancePremium:o,proratingData:i,proratingDate:u,protectionPlanFee:a,tenantProtectionEnabled:s,allowInsurance:m}=e;return!l&&!s||s&&!t||l&&!m?null:(0,g.jsxs)("div",{children:[l&&(0,g.jsxs)("div",{children:[r&&i.insurancePremium>0&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("small",{className:"fw-bold",children:"Prorated Insurance Premium"}),(0,g.jsx)("span",{className:"d-flex text-muted fs-7",children:u})]}),(0,g.jsx)("small",{children:n(i.insurancePremium)})]}),o>0&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold",children:"Insurance Premium"}),(0,g.jsx)("small",{children:n(o)})]})]}),s&&(0,g.jsxs)("div",{children:[r&&i.tenantProtectionFee>0&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("small",{className:"fw-bold",children:"Prorated Protection Plan"}),(0,g.jsx)("span",{className:"d-flex text-muted fs-7",children:u})]}),(0,g.jsx)("small",{children:n(i.tenantProtectionFee)})]}),a>0&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold",children:"Protection Plan"}),(0,g.jsx)("small",{children:n(a)})]})]})]})},Cp=({discount:e,hasProrating:t,proratedRent:n,rentBeforeDiscount:r,proratingDate:l,formatCurrency:o})=>{if(!t||n===0)return null;let i=e>0&&r>n;return(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("small",{className:"fw-bold",children:"Prorated Rent"}),(0,g.jsx)("span",{className:"d-flex text-muted fs-7",children:l})]}),(0,g.jsxs)("div",{className:"text-end",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("small",{className:i?"text-decoration-line-through text-muted":"",children:o(i?r:n)}),i&&(0,g.jsxs)("small",{children:[" ",o(n)]})]}),i&&(0,g.jsx)("small",{className:"text-success",children:`${(e*100).toFixed(2)}% off`})]})]})},Np=({hasProrating:e,proratedTax:t,proratingDate:n,formatCurrency:r})=>!e||t===0?null:(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("small",{className:"fw-bold",children:"Prorated Tax"}),(0,g.jsx)("span",{className:"d-flex text-muted fs-7",children:n})]}),(0,g.jsx)("div",{children:(0,g.jsx)("small",{children:r(t)})})]}),_p=({fee:e,formatCurrency:t,setupFeeName:n})=>e<=0?null:(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold text-truncate",title:n,style:{maxWidth:"25ch"},children:n}),(0,g.jsx)("small",{children:t(e)})]}),Ip=({feeTax:e,formatCurrency:t,taxRate:n})=>e<=0?null:(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("small",{className:"fw-bold",children:["Setup Fee Tax (",(n*100).toFixed(2),"%)"]}),(0,g.jsx)("small",{children:t(e)})]}),Dp=({additionalDeposit:e,additionalDepositName:t,deposit:n,formatCurrency:r})=>n<=0&&e<=0?null:(0,g.jsxs)("div",{children:[n>0&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold",children:"Deposit"}),(0,g.jsx)("small",{children:r(n)})]}),e>0&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold",children:t||"Additional Deposit"}),(0,g.jsx)("small",{children:r(e)})]})]});function uo(e){let{additionalDeposit:t,additionalDepositName:n,allowTenantProtection:r,deposit:l,discount:o,firstPeriodDateRange:i,firstPeriodRent:u,firstPeriodRentWithDiscount:a,fee:s,feeTax:m,formatCurrency:p,setupFeeName:x,hasProrating:P,insuranceEnabled:h,insurancePremium:I,planMonthsInWords:f,promotion:c,proratedPromotionDiscount:d,proratedTax:v,proratingData:w,proratingDate:E,protectionPlanFee:S,rentPromotionDiscount:D,setupFeeTaxRate:R,successfulPayment:C,tax:Q,taxRate:He,tenantProtectionEnabled:hn,totalToday:vr,totalTodayWithSurcharge:Wt,surchargeApplicable:vn,surchargePercentage:yn,surchargeEnabled:gn,allowInsurance:wn}=e;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"mb-3",children:(0,g.jsx)("small",{className:"fw-bold",children:C?"Payment Summary":"Due Today"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)(Cp,{discount:o,hasProrating:P,proratedRent:w.rent,rentBeforeDiscount:w.rentBeforeDiscount,proratingDate:E,formatCurrency:p}),d>0&&(0,g.jsx)(ra,{promotion:c,promotionDiscount:d,formatCurrency:p}),u>0&&(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)("small",{className:"fw-bold",children:["First Full ",f," Rent"]}),(0,g.jsx)("span",{className:"d-flex text-muted fs-7",children:i})]}),(0,g.jsxs)("div",{className:"text-end",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("small",{className:o>0?"text-decoration-line-through text-muted":"",children:p(u)}),(0,g.jsx)("small",{children:o>0?` ${p(a)}`:""})]}),o>0&&(0,g.jsx)("small",{className:"text-success",children:`${(o*100).toFixed(2)}% off`})]})]}),D>0&&(0,g.jsx)(ra,{promotion:c,promotionDiscount:D,formatCurrency:p})]})]}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(_p,{fee:s,formatCurrency:p,setupFeeName:x}),(0,g.jsx)(Ip,{feeTax:m,formatCurrency:p,taxRate:R}),(0,g.jsx)(kp,{allowTenantProtection:r,formatCurrency:p,hasProrating:P,insuranceEnabled:h,insurancePremium:I,proratingData:w,proratingDate:E,protectionPlanFee:S,tenantProtectionEnabled:hn,allowInsurance:wn}),(0,g.jsx)(Np,{formatCurrency:p,hasProrating:P,proratedTax:v,proratingDate:E}),(0,g.jsx)(Dp,{additionalDeposit:t,additionalDepositName:n,deposit:l,formatCurrency:p}),Q>0&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("small",{className:"fw-bold",children:["Tax (",(He*100).toFixed(2),"%)"]}),(0,g.jsx)("small",{children:p(Q)})]})]}),gn&&vn&&(0,g.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,g.jsxs)("small",{className:"fw-bold",children:["Transaction Fee (",yn,"%) "]}),(0,g.jsx)("small",{children:p(Wt-vr)})]}),(!vn||!gn)&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold",children:C?"Total Paid Today":"Total Today"}),(0,g.jsx)("small",{children:p(vr)})]}),gn&&vn&&(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("small",{className:"fw-bold",children:C?"Total Paid Today":"Total Today"}),(0,g.jsx)("small",{children:p(Wt)})]})]})}var Lv=B(_e()),T=B(he()),Op=e=>{let{allowTenantProtection:t,formatCurrency:n,insuranceEnabled:r,insurancePremium:l,protectionPlanFee:o,tenantProtectionEnabled:i,allowInsurance:u}=e;return!r&&!i||i&&!t||r&&!u?null:(0,T.jsxs)("div",{children:[r&&l>0&&(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsx)("small",{className:"fw-bold",children:"Insurance Premium"}),(0,T.jsx)("small",{children:n(l)})]}),i&&o>0&&(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsx)("small",{className:"fw-bold",children:"Protection Plan"}),(0,T.jsx)("small",{children:n(o)})]})]})},Rp=e=>{let{discount:t,formatCurrency:n,futureProratedTotal:r,futureProratingDate:l,hasFutureProrating:o,insuranceEnabled:i,proratedInsurancePremium:u,proratedProtectionPlanFee:a,proratedRent:s,proratedTax:m,rentBeforeDiscount:p,tenantProtectionEnabled:x}=e;if(!o)return null;let P=t>0&&p>s;return(0,T.jsxs)("div",{children:[s>0&&(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Prorated second month due on ",l]}),(0,T.jsxs)("div",{className:"text-end",children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("small",{className:P?"text-decoration-line-through text-muted":"",children:n(P?p:s)}),P&&(0,T.jsxs)("small",{children:[" ",n(s)]})]}),P&&(0,T.jsx)("small",{className:"text-success",children:`${(t*100).toFixed(2)}% off`})]})]}),m>0&&(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Prorated Tax due on ",l]}),(0,T.jsx)("small",{children:n(m)})]}),i&&u>0&&(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Prorated Insurance Premium due on ",l]}),(0,T.jsx)("small",{children:n(u)})]}),x&&a>0&&(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Prorated Protection Plan due on ",l]}),(0,T.jsx)("small",{children:n(a)})]}),(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Total due on ",l]}),(0,T.jsx)("small",{children:n(r)})]})]})},Fp=({promotion:e,proratedPromotionDiscount:t,rentPromotionDiscount:n})=>!e||t>0||n>0?null:(0,T.jsxs)("div",{className:"alert alert-info border mt-3 d-flex justify-content-between align-items-center",children:[(0,T.jsx)("small",{className:"fw-bold",children:"Upcoming Promotion:"}),(0,T.jsx)("small",{children:e.description})]});function ao(e){let{allowTenantProtection:t,discount:n,formatCurrency:r,futureDueDate:l,futurePeriodRent:o,futurePeriodRentWithDiscount:i,futureProratedTotal:u,futureProratingDate:a,futureTax:s,futureTotal:m,hasFutureProrating:p,insuranceEnabled:x,insurancePremium:P,planMonthsInWords:h,promotion:I,proratedPromotionDiscount:f,proratedTax:c,proratingData:d,protectionPlanFee:v,rentPromotionDiscount:w,taxRate:E,tenantProtectionEnabled:S,futureTotalWithSurcharge:D,surchargeApplicable:R,surchargePercentage:C,surchargeEnabled:Q,allowInsurance:He}=e;return(0,T.jsxs)("div",{className:"card-footer",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Future ",h," Charges"]}),(0,T.jsxs)("div",{className:"mt-3 mb-3",children:[(0,T.jsx)(Rp,{discount:n,formatCurrency:r,futureProratedTotal:u,hasFutureProrating:p,insuranceEnabled:x,futureProratingDate:a,proratedInsurancePremium:d.insurancePremium,proratedProtectionPlanFee:d.tenantProtectionFee,proratedRent:d.rent,proratedTax:c,rentBeforeDiscount:d.rentBeforeDiscount,tenantProtectionEnabled:S}),p&&(0,T.jsx)("div",{className:"mt-3 mb-3",children:(0,T.jsxs)("small",{className:"fw-bold",children:["Starting ",l]})}),(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsxs)("small",{className:"fw-bold",children:[h," Rent"]}),(0,T.jsxs)("div",{className:"text-end",children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("small",{className:n>0&&o>0?"text-decoration-line-through text-muted":"",children:r(o)}),(0,T.jsx)("small",{children:n>0&&o>0?` ${r(i)}`:""})]}),n>0&&o>0&&(0,T.jsx)("small",{className:"text-success",children:`${(n*100).toFixed(2)}% off`})]})]}),(0,T.jsx)(Op,{allowTenantProtection:t,formatCurrency:r,insuranceEnabled:x,insurancePremium:P,protectionPlanFee:v,tenantProtectionEnabled:S,allowInsurance:He}),s>0&&(0,T.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Tax (",(E*100).toFixed(2),"%)"]}),(0,T.jsx)("small",{children:r(s)})]})]}),Q&&R&&(0,T.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,T.jsxs)("small",{className:"fw-bold",children:["Transaction Fee (",C,"%) "]}),(0,T.jsx)("small",{children:r(D-m)})]}),(!R||!Q)&&(0,T.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,T.jsx)("small",{className:"fw-bold",children:"Total"}),(0,T.jsx)("small",{children:r(m)})]}),Q&&R&&(0,T.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,T.jsx)("small",{className:"fw-bold",children:"Total"}),(0,T.jsx)("small",{children:r(D)})]}),I&&(0,T.jsx)("small",{className:"text-muted fst-italic mt-2 d-block",children:"These prices do not reflect future promotions"}),(0,T.jsx)(Fp,{promotion:I,proratedPromotionDiscount:f,rentPromotionDiscount:w})]})}var Qe=B(he());function so({props:e}){let{allowInsuranceOptOut:t,autoProtectEnabled:n,currencyLocale:r,currencySymbol:l,disableForm:o,insuranceEnabled:i,rentalIntentId:u,rentUnitUrl:a,showPromotions:s,successfulPayment:m,tenantProtectionEnabled:p,tenantProtectionFlyerUrl:x,unitImageUrl:P}=e,[h,I]=(0,K.useState)(e.unitSummary);h.surchargeApplicable=e.unitSummary.surchargeApplicable;let f=h.site.customerRentalProrating,c=f!=="none"&&f!=="full_later",d=f==="full_later",v=h.plan.monthsInWords;h.plan.months===1&&(v="Month");let w=h.availableInsurancePlans.find(U=>U.id===parseInt(h.insurancePlanId||0)),E=h.availableTenantProtectionPlans.find(U=>U.id===parseInt(h.availableTenantProtectionPlanId||0)),S=U=>U.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),D=()=>h.coverageDeclinedAt||n||e.tenantProtectionEnabled&&!h.unitType.allowTenantProtection||e.insuranceEnabled&&!h.unitType.allowInsurance?!1:e.tenantProtectionEnabled&&!E||e.insuranceEnabled&&!w,[R,C]=(0,K.useState)(h.coverageDeclinedAt),[Q,He]=(0,K.useState)(w),[hn,vr]=(0,K.useState)(h.selfInsuredPolicyExpiresOn),[Wt,vn]=(0,K.useState)(h.selfInsuredPolicyNumber),[yn,gn]=(0,K.useState)(h.selfInsuredPolicyProvider),[wn,wd]=(0,K.useState)(""),[yr,xd]=(0,K.useState)(h.availablePromotion),[Ed,$t]=(0,K.useState)(D()),[Bl,bl]=(0,K.useState)(E),Pd=h.proratingData.dateRange,Td=S(new Date(h.proratingData.nextDueOn+"T00:00:00")),Sd=S(new Date(h.proratingData.nextDueAfterPendingProrated+"T00:00:00")),kd=(0,K.useCallback)(async()=>{let U=document.querySelector('meta[name="csrf-token"]').content,Me={rental_intent:{available_promotion_id:yr?.id,available_tenant_protection_plan_id:Bl?.id,coverage_declined_at:R,insurance_plan_id:Q?.id,self_insured_policy_expires_on:hn,self_insured_policy_number:Wt,self_insured_policy_provider:yn}};try{let wr=await fetch(`/rental_intents/${u}`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRF-Token":U},body:JSON.stringify(Me)});if(!wr.ok){console.error("Failed to update rental intent");return}let Id=await wr.json();I(Id)}catch(wr){console.error("Error updating rental intent:",wr)}}),Cd=(0,K.useCallback)(()=>{let U=h.availablePromotions.find(Me=>Me.code&&Me.code.toLowerCase()===wn.toLowerCase());U&&xd(U)},[h.availablePromotions,wn]),Nd=(0,K.useCallback)(U=>{U===0?(He({id:null,limit:0,premium:0}),C(null),h.unitType.allowInsurance&&$t(!0)):U===-1?(He({id:null,limit:0,premium:0}),C(new Date().toISOString()),$t(!1)):(He(h.availableInsurancePlans.find(Me=>Me.id===U)),C(null),$t(!1))},[h.availableInsurancePlans]),_d=(0,K.useCallback)(U=>{U===0?(bl({id:null,fee:0,limit:0}),C(null),n||$t(!0)):U===-1?(bl({id:null,fee:0,limit:0}),C(new Date().toISOString()),$t(!1)):(bl(h.availableTenantProtectionPlans.find(Me=>Me.id===U)),C(null),$t(!1))},[h.availableTenantProtectionPlans]),gr=U=>{let Me=new Intl.NumberFormat(r,{minimumFractionDigits:2,maximumFractionDigits:2}).format(U);return`${l}${Me}`};return(0,K.useEffect)(()=>{let U=setTimeout(()=>{kd()},500);return()=>clearTimeout(U)},[Q,yr,hn,Wt,yn,Bl]),(0,Qe.jsxs)("div",{className:"card border mt-3 mb-3",children:[(0,Qe.jsxs)("div",{className:"card-body",children:[p&&(0,Qe.jsx)(na,{tenantProtectionFlyerUrl:x,autoProtectEnabled:n,allowInsuranceOptOut:t}),(0,Qe.jsx)(oo,{disableForm:o,formatCurrency:gr,periodRent:h.rentalAmounts.futurePeriodRent,planMonthsInWords:v,rentUnitUrl:a,site:h.site,sitePhone:h.sitePhone,unit:h.unit,unitImageUrl:P,unitTypeSize:h.unitType.size}),(0,Qe.jsx)(io,{allowInsuranceOptOut:t,allowTenantProtection:h.unitType.allowTenantProtection,autoProtectEnabled:n,availableInsurancePlans:h.availableInsurancePlans,availableTenantProtectionPlans:h.availableTenantProtectionPlans,coverageDeclinedAt:R,disableForm:o,formatCurrency:gr,insuranceEnabled:i,insurancePlan:Q,onApplyPromoCode:Cd,onChangeInsurancePlan:Nd,onChangeProtectionPlan:_d,promoCode:wn,selfInsuredPolicyExpiresOn:hn,selfInsuredPolicyNumber:Wt,selfInsuredPolicyProvider:yn,setSelfInsuredPolicyExpiresOn:vr,setSelfInsuredPolicyNumber:vn,setSelfInsuredPolicyProvider:gn,setPromoCode:wd,showPromotions:s,showSelfInsuredDetails:Ed,tenantProtectionEnabled:p,tenantProtectionPlan:Bl,allowInsurance:h.unitType.allowInsurance}),(0,Qe.jsx)(uo,{successfulPayment:m,additionalDeposit:h.rentalAmounts.additionalDeposit,additionalDepositName:h.rentalAmounts.additionalDepositName,allowTenantProtection:h.unitType.allowTenantProtection,deposit:h.rentalAmounts.deposit,discount:h.plan.discount,firstPeriodDateRange:h.firstPeriodDateRange,firstPeriodRent:h.rentalAmounts.firstPeriodRent,firstPeriodRentWithDiscount:h.rentalAmounts.firstPeriodRentWithDiscount,fee:h.unitType.setupFee,setupFeeName:h.unitType.setupFeeName,feeTax:h.rentalAmounts.feeTax,formatCurrency:gr,hasProrating:c,insuranceEnabled:i,insurancePremium:h.rentalAmounts.firstPeriodInsurancePremium,planMonthsInWords:v,promotion:yr,proratedPromotionDiscount:h.rentalAmounts.proratedPromotionDiscount,proratingType:f,proratedTax:h.rentalAmounts.proratedTax,proratingData:h.proratingData,proratingDate:Pd,protectionPlanFee:h.rentalAmounts.firstPeriodProtectionPlanFee,rentPromotionDiscount:h.rentalAmounts.rentPromotionDiscount,setupFeeTaxRate:h.setupFeeTaxRate,tax:h.rentalAmounts.tax,taxRate:h.taxRate,tenantProtectionEnabled:p,totalToday:h.rentalAmounts.totalToday,totalTodayWithSurcharge:h.rentalAmounts.totalTodayWithSurcharge,surchargeApplicable:h.rentalAmounts.surchargeApplicable||h.surchargeApplicable,surchargePercentage:h.rentalAmounts.surchargePercentage,surchargeEnabled:h.rentalAmounts.surchargeEnabled,allowInsurance:h.unitType.allowInsurance})]}),(0,Qe.jsx)(ao,{allowTenantProtection:h.unitType.allowTenantProtection,discount:h.plan.discount,formatCurrency:gr,futureDueDate:Sd,futurePeriodRent:h.rentalAmounts.futurePeriodRent,futurePeriodRentWithDiscount:h.rentalAmounts.futurePeriodRentWithDiscount,futureProratedTotal:h.rentalAmounts.futureProratedTotal,futureProratingDate:Td,futureTax:h.rentalAmounts.futureTax,futureTotal:h.rentalAmounts.futureTotal,futureTotalWithSurcharge:h.rentalAmounts.futureTotalWithSurcharge,hasFutureProrating:d,insuranceEnabled:i,insurancePremium:h.rentalAmounts.insurancePremium,planMonthsInWords:v,promotion:yr,proratedPromotionDiscount:h.rentalAmounts.proratedPromotionDiscount,proratingData:h.proratingData,proratedTax:h.rentalAmounts.proratedTax,protectionPlanFee:h.rentalAmounts.protectionPlanFee,rentPromotionDiscount:h.rentalAmounts.rentPromotionDiscount,taxRate:h.taxRate,tenantProtectionEnabled:p,surchargePercentage:h.rentalAmounts.surchargePercentage,surchargeEnabled:h.rentalAmounts.surchargeEnabled,surchargeApplicable:h.rentalAmounts.surchargeApplicable||h.surchargeApplicable,allowInsurance:h.unitType.allowInsurance})]})}var dv=yd();dv.getConstructor=e=>({UnitSummary:so})[e];function gd(){document.querySelectorAll('[data-bs-toggle="popover"]').forEach(i=>{i._popover=new bootstrap.Popover(i)});let e=document.querySelector("[data-unmasked-social]");if(e){let i=document.querySelectorAll('[name*="social_security_number"]');i.forEach(s=>{s.addEventListener("change",function(){i.forEach(m=>{m.value=this.value})})});let u=document.querySelector("[data-masked-social]");[e,u].forEach(s=>{s.querySelector(".input-group-text").addEventListener("click",function(){e.classList.toggle("d-none"),u.classList.toggle("d-none")})})}document.addEventListener("click",function(i){if(i.target.closest(".plan-box")){let a=i.target.closest(".plan-box").querySelector("input");a&&(a.checked=!0)}});let t=document.querySelector("#referred_by_options");t&&(t.addEventListener("change",function(){let i=document.querySelector("#customer_referred_by");if(t.value==="Other"){for(let u=0;u<t.length;++u)if(t[u].value===i.value){i.value="";break}i.style.display="block"}else i.value=t.value,i.style.display="none"}),t.dispatchEvent(new Event("change")));let n=document.querySelector("#dropdown-menu"),r=document.querySelector('[data-bs-toggle="collapse"]'),l=document.querySelector('[data-dropdown-icon="collapse"]'),o=document.querySelectorAll(".dropdown-menu");if(n&&r&&l){let a=function(){return Array.from(o).filter(p=>!p.closest("#dropdown-menu")).some(p=>p.classList.contains("show"))},s=function(){return n.classList.contains("show")};n.addEventListener("show.bs.collapse",()=>{l.classList.replace("fa-bars","fa-times"),document.body.style.overflow="hidden",r.disabled=!0}),n.addEventListener("shown.bs.collapse",()=>{r.disabled=!1}),n.addEventListener("hide.bs.collapse",()=>{document.body.style.overflow="",l.classList.replace("fa-times","fa-bars"),r.disabled=!0}),n.addEventListener("hidden.bs.collapse",()=>{r.disabled=!1});let i=window.innerWidth,u=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bs-breakpoint-md"));window.addEventListener("resize",()=>{let m=window.innerWidth;i<u&&m>=u?document.body.style.overflow=a()?"hidden":"":i>=u&&m<u&&(document.body.style.overflow=s()?"hidden":""),i=m}),document.addEventListener("show.bs.dropdown",()=>{i>=u&&(document.body.style.overflow="hidden")}),document.addEventListener("hide.bs.dropdown",()=>{i>=u&&(document.body.style.overflow="")})}Du.initialize(),Ou.initialize(),Lu.initialize()}document.readyState!=="loading"?gd():document.addEventListener("DOMContentLoaded",gd);})();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.production.min.js:
  (** @license React v16.14.0
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (** @license React v16.14.0
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (** @license React v0.19.1
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (** @license React v16.14.0
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.browser.production.min.js:
  (** @license React v16.14.0
   * react-dom-server.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/;
// Gems


//
// Packages

//
// Application
;
