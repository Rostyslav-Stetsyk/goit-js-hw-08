!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={form:document.querySelector(".feedback-form")},r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",f=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,p=Math.max,b=Math.min,g=function(){return v.Date.now()};function y(e,t,n){var r,o,f,u,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function y(e){return l=e,a=setTimeout(w,t),d?m(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function w(){var e=g();if(O(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?b(n,f-(e-l)):n}(e))}function S(e){return a=void 0,v&&r?m(e):(r=o=void 0,u)}function T(){var e=g(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return y(c);if(s)return a=setTimeout(w,t),m(c)}return void 0===a&&(a=setTimeout(w,t)),u}return t=h(t)||0,j(n)&&(d=!!n.leading,f=(s="maxWait"in n)?p(h(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?u:S(g())},T}function j(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var r=a.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):u.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})},n.form.addEventListener("input",r((function(e){var t=e.target.name;O[t]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),n.form.addEventListener("submit",r((function(e){e.preventDefault(),console.log(O),localStorage.clear();for(var t=0;t<n.form.length;t+=1)n.form[t].value=""}),500));var O=JSON.parse(localStorage.getItem("feedback-form-state"))||{};Object.entries(O).map((function(e){for(var t=0;t<n.form.length;t+=1)n.form[t].name===e[0]&&(n.form[t].value=e[1])}))}();
//# sourceMappingURL=03-feedback.9a0a56c1.js.map
