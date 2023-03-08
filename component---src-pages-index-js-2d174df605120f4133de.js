"use strict";(self.webpackChunkbegej_tech=self.webpackChunkbegej_tech||[]).push([[678],{5255:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(7294),a=r(2899),o=r(4694),l=r(5697),s=r.n(l);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var d=["style"];function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=y(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var x=!1;try{x=!0}catch(I){}function g(e){return e&&"object"===f(e)&&e.prefix&&e.iconName&&e.icon?e:o.parse.icon?o.parse.icon(e):null===e?null:e&&"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var O=n.forwardRef((function(e,t){var r=e.icon,n=e.mask,a=e.symbol,l=e.className,s=e.title,i=e.titleId,f=e.maskId,p=g(r),m=v("classes",[].concat(b(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,o=e.bounce,l=e.shake,s=e.flash,i=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,b=e.fixedWidth,m=e.inverse,y=e.border,d=e.listItem,h=e.flip,x=e.size,g=e.rotation,v=e.pull,O=(u(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":l,"fa-flash":s,"fa-spin":i,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":b,"fa-inverse":m,"fa-border":y,"fa-li":d,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(x),null!=x),u(t,"fa-rotate-".concat(g),null!=g&&0!==g),u(t,"fa-pull-".concat(v),null!=v),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map((function(e){return O[e]?e:null})).filter((function(e){return e}))}(e)),b(l.split(" ")))),y=v("transform","string"==typeof e.transform?o.parse.transform(e.transform):e.transform),d=v("mask",g(n)),h=(0,o.icon)(p,c(c(c(c({},m),y),d),{},{symbol:a,title:s,titleId:i,maskId:f}));if(!h)return function(){var e;!x&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var j=h.abstract,k={ref:t};return Object.keys(e).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(k[t]=e[t])})),w(j[0],k)}));O.displayName="FontAwesomeIcon",O.propTypes={beat:s().bool,border:s().bool,beatFade:s().bool,bounce:s().bool,className:s().string,fade:s().bool,flash:s().bool,mask:s().oneOfType([s().object,s().array,s().string]),maskId:s().string,fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf([!0,!1,"horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),shake:s().bool,size:s().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,spinPulse:s().bool,spinReverse:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,titleId:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},O.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var w=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=h(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[y(t)]=n}return e}),{attrs:{}}),l=n.style,s=void 0===l?{}:l,i=p(n,d);return o.attrs.style=c(c({},o.attrs.style),s),t.apply(void 0,[r.tag,c(c({},o.attrs),i)].concat(b(a)))}.bind(null,n.createElement),j=r(7190),k=r(8014),E=r(3370),N=function(){return n.createElement(a.Z,{pageTitle:"Index"},n.createElement(E.Z,{title:"Michal Begej - Senior software developer",useGlobalTitle:!1}),n.createElement("div",{className:"w-3/4 flex flex-col pr-1 pl-1 sm:w-3/5 md:w-3/5 lg:w-3/6 xl:w-2/6"},n.createElement("div",{className:"font-sans text-sky-600 text-5xl sm:text-6xl md:text-7xl"},n.createElement("span",{className:"font-bold"},"Michal")," ",n.createElement("span",{className:"font-light"},"Begej")),n.createElement("div",{className:"md:text-xl"},n.createElement("span",{className:"font-sans font-extralight text-slate-500"},"Senior software developer")),n.createElement("hr",{className:"border-slate-300 font-extralight"}),n.createElement("div",{className:" flex justify-around pt-4 pb-4"},n.createElement("a",{href:"https://www.linkedin.com/in/michal-begej/",target:"_blank"},n.createElement(O,{icon:j.hwn,className:"text-sky-600 text-2xl "})),n.createElement("a",{href:"mailto:michal@begej.tech"},n.createElement(O,{icon:k.FU$,className:"text-sky-600 text-2xl "})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2d174df605120f4133de.js.map