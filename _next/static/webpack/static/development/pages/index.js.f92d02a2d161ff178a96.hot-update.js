webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-paginating */ "./node_modules/react-paginating/dist/react-paginating.esm.js");








var _jsxFileName = "/Users/dung.nguyen/workplace/oss/react-paginating.github.io/pages/index.js";


var fruits = [["apple", "orange"], ["banana", "avocado"], ["coconut", "blueberry"], ["payaya", "peach"], ["pear", "plum"]];
var limit = 2;
var pageCount = 3;
var total = fruits.length * limit;

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handlePageChange", function (page, e) {
      _this.setState({
        currentPage: page
      });
    });

    _this.state = {
      currentPage: 1
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentPage = this.state.currentPage;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, fruits[currentPage - 1].map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, item);
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_paginating__WEBPACK_IMPORTED_MODULE_9__["default"], {
        total: total,
        limit: limit,
        pageCount: pageCount,
        currentPage: currentPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, function (_ref) {
        var pages = _ref.pages,
            currentPage = _ref.currentPage,
            hasNextPage = _ref.hasNextPage,
            hasPreviousPage = _ref.hasPreviousPage,
            previousPage = _ref.previousPage,
            nextPage = _ref.nextPage,
            totalPages = _ref.totalPages,
            getPageItemProps = _ref.getPageItemProps;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getPageItemProps({
          pageValue: 1,
          onPageChange: _this2.handlePageChange
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), "first"), hasPreviousPage && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getPageItemProps({
          pageValue: previousPage,
          onPageChange: _this2.handlePageChange
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }), "<"), pages.map(function (page) {
          var activePage = null;

          if (currentPage === page) {
            activePage = {
              backgroundColor: "#fdce09"
            };
          }

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getPageItemProps({
            pageValue: page,
            key: page,
            style: activePage,
            onPageChange: _this2.handlePageChange
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }), page);
        }), hasNextPage && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getPageItemProps({
          pageValue: nextPage,
          onPageChange: _this2.handlePageChange
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), ">"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getPageItemProps({
          pageValue: totalPages,
          onPageChange: _this2.handlePageChange
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }), "last"));
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f92d02a2d161ff178a96.hot-update.js.map