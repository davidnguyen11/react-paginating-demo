(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("UXZV"),r=n.n(a);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=n("0iUn"),i=n("sLSF"),l=n("MI3g"),c=n("a7VT"),g=n("AT/M"),s=n("Tit0"),p=n("hfKm"),f=n.n(p);var P=n("q1tI"),h=n.n(P),b=n("17x9"),m=n.n(b);function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var E=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=d(t).call(this),e=!a||"object"!=typeof a&&"function"!=typeof a?j(n):a,y(j(j(e)),"_getPageItemProps",function(t){var n=t.pageValue,a=t.onPageChange;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){y(e,t,n[t])})}return e}({onClick:function(t){"function"==typeof a&&a(n,t),e.setState({currentPage:n})}},w(t,["pageValue","onPageChange"]))}),e.state={currentPage:0},e}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,P["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){this.props.currentPage&&this.setState({currentPage:parseInt(this.props.currentPage,10)})}},{key:"componentWillReceiveProps",value:function(e){e.currentPage!==this.props.currentPage&&this.setState({currentPage:parseInt(e.currentPage,10)})}},{key:"render",value:function(){var e,t=this.props,n=t.total,a=t.limit,r=t.pageCount,o=this.state.currentPage,u=function(e){var t=e.limit,n=e.pageCount,a=e.total,r=e.page,o=Math.ceil(a/t),u=parseInt(a,10),i=parseInt(r,10);i<1&&(i=1),i>o&&(i=o);var l=Math.max(1,i-Math.floor(n/2)),c=Math.min(o,i+Math.floor(n/2));c-l+1<n&&(i<o/2?c=Math.min(o,c+(n-(c-l))):l=Math.max(1,l-(n-(c-l)))),c-l+1>n&&(i>o/2?l++:c--);var g=t*(i-1),s=t*i-1;return{totalPages:o,pages:Math.min(c-l+1,o),currentPage:i,firstPage:l,lastPage:c,previousPage:i-1,nextPage:i+1,hasPreviousPage:i>1,hasNextPage:i<o,totalResults:u,results:Math.min(s-g+1,u),firstResult:g,lastResult:s}}({limit:a,pageCount:r,total:n,page:o}),i=u.firstPage,l=u.lastPage,c=u.hasNextPage,g=u.hasPreviousPage,s=u.previousPage,p=u.nextPage,f=u.totalPages,P=n?(e=i,C(Array(l-e+1)).map(function(t,n){return e+n})):[];return h.a.createElement("div",null,this.props.children({pages:P,previousPage:s,nextPage:p,totalPages:f,currentPage:o,hasNextPage:c,hasPreviousPage:g,getPageItemProps:this._getPageItemProps}))}}])&&v(n.prototype,a),r&&v(n,r),t}();E.propTypes={total:m.a.number.isRequired,limit:m.a.number,pageCount:m.a.number,currentPage:m.a.number,pageValue:m.a.number,children:m.a.func.isRequired,onPageChange:m.a.func},E.defaultProps={limit:10,pageCount:5,currentPage:0,pageValue:0};var _=E,x=[["apple","orange"],["banana","avocado"],["coconut","blueberry"],["payaya","peach"],["pear","plum"]],k=2*x.length,I=function(e){function t(){var e,n,a,r;return Object(u.default)(this,t),e=Object(l.default)(this,Object(c.default)(t).call(this)),n=Object(g.default)(e),r=function(t,n){e.setState({currentPage:t})},(a="handlePageChange")in n?f()(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,e.state={currentPage:1},e}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this,t=this.state.currentPage;return h.a.createElement("div",null,h.a.createElement("ul",null,x[t-1].map(function(e){return h.a.createElement("li",{key:e},e)})),h.a.createElement(_,{total:k,limit:2,pageCount:3,currentPage:t},function(t){var n=t.pages,a=t.currentPage,r=t.hasNextPage,u=t.hasPreviousPage,i=t.previousPage,l=t.nextPage,c=t.totalPages,g=t.getPageItemProps;return h.a.createElement("div",null,h.a.createElement("button",o({id:"first"},g({pageValue:1,onPageChange:e.handlePageChange})),"first"),u&&h.a.createElement("button",o({id:"prev"},g({pageValue:i,onPageChange:e.handlePageChange})),"<"),n.map(function(t){var n=null;return a===t&&(n={backgroundColor:"#fdce09"}),h.a.createElement("button",o({id:t},g({pageValue:t,key:t,style:n,onPageChange:e.handlePageChange})),t)}),r&&h.a.createElement("button",o({id:"nexr"},g({pageValue:l,onPageChange:e.handlePageChange})),">"),h.a.createElement("button",o({id:"last"},g({pageValue:c,onPageChange:e.handlePageChange})),"last"))}))}}]),t}(h.a.Component);t.default=I},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);