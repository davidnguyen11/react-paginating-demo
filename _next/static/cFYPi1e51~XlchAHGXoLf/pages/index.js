(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("UXZV"),r=a.n(n);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=a("0iUn"),l=a("sLSF"),i=a("MI3g"),c=a("a7VT"),g=a("AT/M"),s=a("Tit0"),p=a("hfKm"),f=a.n(p);var P=a("q1tI"),h=a.n(P),b=a("17x9"),v=a.n(b);function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var E=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=d(t).call(this),e=!n||"object"!=typeof n&&"function"!=typeof n?j(a):n,y(j(j(e)),"_getPageItemProps",function(t){var a=t.pageValue,n=t.onPageChange;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){y(e,t,a[t])})}return e}({onClick:function(t){"function"==typeof n&&n(a,t),e.setState({currentPage:a})}},w(t,["pageValue","onPageChange"]))}),e.state={currentPage:0},e}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,P["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){this.props.currentPage&&this.setState({currentPage:parseInt(this.props.currentPage,10)})}},{key:"componentWillReceiveProps",value:function(e){e.currentPage!==this.props.currentPage&&this.setState({currentPage:parseInt(e.currentPage,10)})}},{key:"render",value:function(){var e,t=this.props,a=t.total,n=t.limit,r=t.pageCount,o=this.state.currentPage,u=function(e){var t=e.limit,a=e.pageCount,n=e.total,r=e.page,o=Math.ceil(n/t),u=parseInt(n,10),l=parseInt(r,10);l<1&&(l=1),l>o&&(l=o);var i=Math.max(1,l-Math.floor(a/2)),c=Math.min(o,l+Math.floor(a/2));c-i+1<a&&(l<o/2?c=Math.min(o,c+(a-(c-i))):i=Math.max(1,i-(a-(c-i)))),c-i+1>a&&(l>o/2?i++:c--);var g=t*(l-1),s=t*l-1;return{totalPages:o,pages:Math.min(c-i+1,o),currentPage:l,firstPage:i,lastPage:c,previousPage:l-1,nextPage:l+1,hasPreviousPage:l>1,hasNextPage:l<o,totalResults:u,results:Math.min(s-g+1,u),firstResult:g,lastResult:s}}({limit:n,pageCount:r,total:a,page:o}),l=u.firstPage,i=u.lastPage,c=u.hasNextPage,g=u.hasPreviousPage,s=u.previousPage,p=u.nextPage,f=u.totalPages,P=a?(e=l,C(Array(i-e+1)).map(function(t,a){return e+a})):[];return h.a.createElement("div",null,this.props.children({pages:P,previousPage:s,nextPage:p,totalPages:f,currentPage:o,hasNextPage:c,hasPreviousPage:g,getPageItemProps:this._getPageItemProps}))}}])&&m(a.prototype,n),r&&m(a,r),t}();E.propTypes={total:v.a.number.isRequired,limit:v.a.number,pageCount:v.a.number,currentPage:v.a.number,pageValue:v.a.number,children:v.a.func.isRequired,onPageChange:v.a.func},E.defaultProps={limit:10,pageCount:5,currentPage:0,pageValue:0};var _=E,x=[["apple","orange"],["banana","avocado"],["coconut","blueberry"],["payaya","peach"],["pear","plum"]],k=2*x.length,I=function(e){function t(){var e,a,n,r;return Object(u.default)(this,t),e=Object(i.default)(this,Object(c.default)(t).call(this)),a=Object(g.default)(e),r=function(t,a){e.setState({currentPage:t})},(n="handlePageChange")in a?f()(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,e.state={currentPage:1},e}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this,t=this.state.currentPage;return h.a.createElement("div",null,h.a.createElement("ul",null,x[t-1].map(function(e){return h.a.createElement("li",{key:e},e)})),h.a.createElement(_,{total:k,limit:2,pageCount:3,currentPage:t},function(t){var a=t.pages,n=t.currentPage,r=t.hasNextPage,u=t.hasPreviousPage,l=t.previousPage,i=t.nextPage,c=t.totalPages,g=t.getPageItemProps;return h.a.createElement("div",null,h.a.createElement("button",o({"data-value":"first"},g({pageValue:1,onPageChange:e.handlePageChange})),"first"),u&&h.a.createElement("button",o({"data-value":"prev"},g({pageValue:l,onPageChange:e.handlePageChange})),"<"),a.map(function(t){var a=null;return n===t&&(a={backgroundColor:"#fdce09"}),h.a.createElement("button",o({"data-value":t},g({pageValue:t,key:t,style:a,onPageChange:e.handlePageChange})),t)}),r&&h.a.createElement("button",o({"data-value":"next"},g({pageValue:i,onPageChange:e.handlePageChange})),">"),h.a.createElement("button",o({"data-value":"last"},g({pageValue:c,onPageChange:e.handlePageChange})),"last"))}))}}]),t}(h.a.Component);t.default=I},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);