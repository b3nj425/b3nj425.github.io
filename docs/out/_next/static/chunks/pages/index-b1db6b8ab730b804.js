(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2936:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9048)}])},9048:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(7876),a=n(4232),o=n(4e3);function i(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,c)}u((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function l(e,t,n){if(n||2==arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function f(e,t,n,r,a){for(var o=[],f=5;f<arguments.length;f++)o[f-5]=arguments[f];return i(this,void 0,void 0,function(){var f,p,h,y,v;return c(this,function(b){switch(b.label){case 0:b.trys.push([0,12,13,14]),p=(f=u(o)).next(),b.label=1;case 1:if(p.done)return[3,11];switch(typeof(h=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,n,r,a,o){return i(this,void 0,void 0,function(){var f,p;return c(this,function(h){switch(h.label){case 0:var y,v;return y=f=e.textContent||"",v=s(n).slice(0),p=l(l([],s(y),!1),[NaN],!1).findIndex(function(e,t){return v[t]!==e}),[4,function(e,t,n,r,a){return i(this,void 0,void 0,function(){var o,i,l,f,p,h,y,v,b,m,w,x;return c(this,function(g){switch(g.label){case 0:if(o=t,a){for(i=0,l=1;l<t.length;l++)if(p=(f=s([t[l-1],t[l]],2))[0],(h=f[1]).length>p.length||""===h){i=l;break}o=t.slice(i,t.length)}g.label=1;case 1:g.trys.push([1,6,7,8]),v=(y=u(function(e){var t,n,r,a,o,i;return c(this,function(s){switch(s.label){case 0:t=function(e){return c(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var n=t.textContent||"";return""===e||n.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},s.label=1;case 1:s.trys.push([1,6,7,8]),r=(n=u(e)).next(),s.label=2;case 2:return r.done?[3,5]:(a=r.value,[5,t(a)]);case 3:s.sent(),s.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return o={error:s.sent()},[3,8];case 7:try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(o)throw o.error}return[7];case 8:return[2]}})}(o))).next(),g.label=2;case 2:return v.done?[3,5]:(m="WRITING"===(b=v.value).opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),b.op(e),[4,d(m)]);case 3:g.sent(),g.label=4;case 4:return v=y.next(),[3,2];case 5:return[3,8];case 6:return w={error:g.sent()},[3,8];case 7:try{v&&!v.done&&(x=y.return)&&x.call(y)}finally{if(w)throw w.error}return[7];case 8:return[2]}})})}(e,l(l([],s(function(e,t,n){var r,a;return void 0===n&&(n=0),c(this,function(o){switch(o.label){case 0:a=(r=t(e)).length,o.label=1;case 1:return a>n?[4,r.slice(0,--a).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}(f,t,p)),!1),s(function(e,t,n){var r,a;return void 0===n&&(n=0),c(this,function(o){switch(o.label){case 0:a=(r=t(e)).length,o.label=1;case 1:return n<a?[4,r.slice(0,++n).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}(n,t,p)),!1),r,a,o)];case 1:return h.sent(),[2]}})})}(e,t,h,n,r,a)];case 3:case 5:case 7:return b.sent(),[3,10];case 4:return[4,d(h)];case 6:return[4,h.apply(void 0,l([e,t,n,r,a],s(o),!1))];case 8:return[4,h];case 9:b.sent(),b.label=10;case 10:return p=f.next(),[3,1];case 11:return[3,14];case 12:return y={error:b.sent()},[3,14];case 13:try{p&&!p.done&&(v=f.return)&&v.call(f)}finally{if(y)throw y.error}return[7];case 14:return[2]}})})}function d(e){return i(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var p=(0,a.memo)((0,a.forwardRef)(function(e,t){var n=e.sequence,r=e.repeat,o=e.className,i=e.speed,c=void 0===i?40:i,u=e.deletionSpeed,d=e.omitDeletionAnimation,p=void 0!==d&&d,h=e.preRenderFirstString,y=e.wrapper,v=e.splitter,b=void 0===v?function(e){return l([],s(e),!1)}:v,m=e.cursor,w=void 0===m||m,x=e.style,g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),E=g["aria-label"],_=g["aria-hidden"],N=g.role;u||(u=c);var S=[,,].fill(40);[c,u].forEach(function(e,t){switch(typeof e){case"number":S[t]=Math.abs(e-100);break;case"object":var n=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===n&&(S[t]=r)}});var j,k,T,P,C,O,R,A,I=S[0],G=S[1],q=(void 0===j&&(j=null),k=(0,a.useRef)(j),(0,a.useEffect)(function(){t&&("function"==typeof t?t(k.current):t.current=k.current)},[t]),k),z="index-module_type__E-SaG";T=o?"".concat(w?z+" ":"").concat(o):w?z:"",P=(0,a.useRef)(function(){var e,t=n;r===1/0?e=f:"number"==typeof r&&(t=Array(1+r).fill(n).flat());var a=e?l(l([],s(t),!1),[e],!1):l([],s(t),!1);return f.apply(void 0,l([q.current,b,I,G,p],s(a),!1)),function(){q.current}}),C=(0,a.useRef)(),O=(0,a.useRef)(!1),R=(0,a.useRef)(!1),A=s((0,a.useState)(0),2)[1],O.current&&(R.current=!0),(0,a.useEffect)(function(){return O.current||(C.current=P.current(),O.current=!0),A(function(e){return e+1}),function(){R.current&&C.current&&C.current()}},[]);var D=void 0!==h&&h?n.find(function(e){return"string"==typeof e})||"":null;return a.createElement(void 0===y?"span":y,{"aria-hidden":_,"aria-label":E,role:N,style:x,className:T,children:E?a.createElement("span",{"aria-hidden":"true",ref:q,children:D}):D,ref:E?void 0:q})}),function(e,t){return!0}),h=n(4587),y=n.n(h);function v(){let e=(0,o.useRouter)();return(0,a.useEffect)(()=>{let t=t=>{"Enter"===t.key&&e.push("/main-page")};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e]),(0,r.jsxs)("div",{className:"relative h-screen w-full bg-[#0b1801]",onClick:()=>e.push("/main-page"),children:[(0,r.jsx)(y(),{src:"bezel.png",alt:"bezel",className:"absolute opacity-70 w-screen h-screen z-20"}),(0,r.jsx)(y(),{src:"scanlines.png",alt:"scanline",className:"absolute opacity-60 w-full h-full object-cover z-20"}),(0,r.jsx)("div",{className:"absolute w-full h-full pointer-events-none",children:(0,r.jsx)("div",{className:"flex justify-center items-center w-full h-full p-32",children:(0,r.jsx)(p,{sequence:["\xa1Hi!, I\xb4m Benjam\xedn",2e3,"",500,"Welcome to my portfolio",2e3,"",500,"Press ENTER or TAP to continue:",2e3,(0,r.jsx)("span",{className:"font-bold"},"boldText")],speed:60,className:"text-[#94ff4a] text-5xl font-[VT323] text-shadow",repeat:1/0})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[194,636,593,792],()=>t(2936)),_N_E=e.O()}]);