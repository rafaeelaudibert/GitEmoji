(this["webpackJsonpgit-emoji"]=this["webpackJsonpgit-emoji"]||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/logo.3fe6a472.png"},37:function(e,t,n){e.exports=n(66)},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(15),i=n.n(o),c=n(6),l=n(35),s=n(4),u=n(16),m=n.n(u),d=n(30),g=n.n(d),f=function(){return(new Date).getTime()},h=function(e){return localStorage.setItem("emojiData",JSON.stringify({data:e,expiration:f()+6048e5}))},p=function(){var e,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==localStorage.getItem("emojiData")&&JSON.parse(localStorage.getItem("emojiData")).expiration>f()){n.next=8;break}return n.next=3,m.a.awrap(g.a.get("https://gitemoji.s3.amazonaws.com/gitemoji.json"));case 3:e=n.sent,t=e.data,h(t),n.next=9;break;case 8:console.info("Using cached data");case 9:case"end":return n.stop()}}))},b=function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(p());case 2:return e.abrupt("return",JSON.parse(localStorage.getItem("emojiData")).data);case 3:case"end":return e.stop()}}))},E=n(31),j=n(33),v=n(32),w=n.n(v),k=function(){return r.a.createElement(s.k,{transparent:!0,color:"danger"},r.a.createElement(s.k.Brand,null,r.a.createElement(s.k.Item,{href:"#"},r.a.createElement(s.h,{alt:"Logo",src:w.a,role:"presentation"})),r.a.createElement(s.k.Burger,{name:"Menu"})),r.a.createElement(s.k.Menu,{backgroundColor:"danger"},r.a.createElement(s.k.Segment,{align:"end",className:"has-margin-right-md has-margin-left-sm"},r.a.createElement(s.b.Group,null,r.a.createElement(s.b,{color:"warning",as:"a",name:"GitEmoji Repository",href:"https://github.com/rafaeelaudibert/GitEmoji",target:"_blank"},r.a.createElement(E.a,{icon:j.a,className:"has-margin-right-sm"}),r.a.createElement("strong",null,"Github"))))))},y=function(e){var t=e.inputValue,n=e.handleInputChange;return r.a.createElement(s.g,{color:"primary",className:"is-bold is-medium has-margin-bottom-lg"},r.a.createElement(s.g.Body,null,r.a.createElement(s.d,null,r.a.createElement(s.m,null,"Github Emojis"),r.a.createElement(s.m,{subtitle:!0}," You can search for them in the box below  "),r.a.createElement("small",null," You can click in the buttons to copy their tag to your clipboard "),r.a.createElement(s.i,{placeholder:"Search any emoji",type:"text",value:t,onChange:n}))),r.a.createElement(s.g.Foot,{align:"end",className:"has-padding-right-lg"},"This is not affiliated, endorsed or related to Github in any way."))},O=function(){return r.a.createElement(s.l,{color:"danger"})},x=function(e){var t=e.error;return r.a.createElement(s.j,{color:"danger"},r.a.createElement(s.j.Body,null,r.a.createElement(s.m,{className:"is-danger"}," Oops! "),r.a.createElement(s.m,{subtitle:!0,size:5},"There was an error while downloading the data. ",r.a.createElement("br",null),"The message error was:"),t.toString()))},S=n(34),N=function(e,t,n,a){return navigator.permissions.query({name:"clipboard-write"}).then((function(r){"granted"===r.state||"prompt"===r.state?navigator.clipboard.writeText(e).then((function(){n(t),setTimeout((function(){return n(null)}),2e3)}),(function(){a(!0),setTimeout((function(){return a(!1)}),4e3)})):(a(!0),setTimeout((function(){return a(!1)}),4e3))}))},I=function(e){var t=e.data,n=t.map((function(e){return":".concat(e.emojiId,":")})),o=t[0].emojiUrl,i=t[0].emojiLiteral,l=Object(a.useState)(null),u=Object(c.a)(l,2),m=u[0],d=u[1],g=Object(a.useState)(null),f=Object(c.a)(g,2),h=f[0],p=f[1];return r.a.createElement(s.c,{className:"is-6-mobile is-4-tablet is-3-fullhd is-2-desktop"},r.a.createElement(s.a,{className:"has-text-centered has-padding-bottom-xsm has-padding-top-xsm has-padding-right-xsm has-padding-left-xsm"},r.a.createElement(S.LazyLoadImage,{src:o,alt:i,effect:"opacity",height:50,width:50}),r.a.createElement("br",null),n.map((function(e,t){return r.a.createElement(s.b,{key:e,as:"div",name:"Click to copy ".concat(e),color:m===t?"success":"light",className:"emojiName has-margin-bottom-xs",onClick:function(){return N(e,t,d,p)},onTouchStart:function(){return N(e,t,d,p)}},e)})),h&&r.a.createElement(s.f,{as:"small",className:"has-text-danger"},"Ocorreu um erro ao copiar para seu clipboard.")))},C=function(e){var t=e.name,n=e.emojis;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.m,{size:6},t),r.a.createElement(s.c.Group,{multiline:!0,breakpoint:"mobile",gapSize:3},n.map((function(e){return r.a.createElement(I,{key:e[0].emojiId,data:e})}))))},T=function(e){var t=e.name,n=e.subCategories;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.m,{size:4},t),Object.entries(n).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement(C,{key:n,name:n,emojis:a})})))},G=function(e){var t=e.data;return Object.entries(t).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement(T,{key:n,className:"has-margin-bottom-lg has-border-bottom-md",name:n,subCategories:a})}))},W=(n(64),n(65),function(){var e=Object(l.a)({promiseFn:b}),t=e.data,n=e.error,o=e.isLoading,i=Object(a.useState)(""),u=Object(c.a)(i,2),m=u[0],d=u[1];null!=t&&(t=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,Object.fromEntries(Object.entries(a).map((function(e){var t=Object(c.a)(e,2);return[t[0],t[1].filter((function(e){return e.some((function(e){return e.emojiId.includes(m)}))}))]})).filter((function(e){var t=Object(c.a)(e,2);t[0];return t[1].length>0})))]})).filter((function(e){var t=Object(c.a)(e,2),n=(t[0],t[1]);return Object.keys(n).length>0}))));var g=o&&r.a.createElement(O,null)||n&&r.a.createElement(x,{error:n})||t&&r.a.createElement(G,{data:t});return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(y,{inputValue:m,handleInputChange:function(e){return d(e.target.value)}}),r.a.createElement(s.d,{fluid:!0}," ",g," "),r.a.createElement(s.e,null))}),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/GitEmoji",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/GitEmoji","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.5ee99ba1.chunk.js.map