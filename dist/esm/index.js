import e,{useEffect as t}from"react";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".my-button {\n  color: #fff;\n  border: 0px;\n  background: red; }\n");var n=function(n){return t((function(){console.log("Button component mounted")}),[]),e.createElement("button",{className:"my-button",onClick:n.onClick},n.label)};export{n as TestButton};
//# sourceMappingURL=index.js.map
