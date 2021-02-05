webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_vinic_OneDrive_Documentos_GitHub_ReactJS_server_side_rendering_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_vinic_OneDrive_Documentos_GitHub_ReactJS_server_side_rendering_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vinic_OneDrive_Documentos_GitHub_ReactJS_server_side_rendering_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vinic_OneDrive_Documentos_GitHub_ReactJS_server_side_rendering_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\vinic\\OneDrive\\Documentos\\GitHub\\ReactJS\\server-side-rendering\\pages\\index.js",
    _this = undefined;




var Home = function Home(_ref) {
  var repositories = _ref.repositories;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: repositories.Map(function (r) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: r.name
      }, r.id, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 32
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Home;
Home.getIntialProps = /*#__PURE__*/Object(C_Users_vinic_OneDrive_Documentos_GitHub_ReactJS_server_side_rendering_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_vinic_OneDrive_Documentos_GitHub_ReactJS_server_side_rendering_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response, repositories;
  return C_Users_vinic_OneDrive_Documentos_GitHub_ReactJS_server_side_rendering_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.github.com/orgs/rocketseat/repos');

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          repositories = _context.sent;
          return _context.abrupt("return", {
            repositories: repositories
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJlcG9zaXRvcmllcyIsIk1hcCIsInIiLCJuYW1lIiwiaWQiLCJnZXRJbnRpYWxQcm9wcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBRUMsWUFBRixRQUFFQSxZQUFGO0FBQUEsc0JBQ1Q7QUFBQSxjQUNLQSxZQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLDBCQUFJO0FBQUEsa0JBQWdCQSxDQUFDLENBQUNDO0FBQWxCLFNBQVNELENBQUMsQ0FBQ0UsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUztBQUFBLENBQWI7O0tBQU1MLEk7QUFLTkEsSUFBSSxDQUFDTSxjQUFMLHVXQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNLQyxLQUFLLENBQUMsOENBQUQsQ0FEVjs7QUFBQTtBQUNaQyxrQkFEWTtBQUFBO0FBQUEsaUJBRVNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZUOztBQUFBO0FBRVpSLHNCQUZZO0FBQUEsMkNBR1g7QUFBRUEsd0JBQVksRUFBWkE7QUFBRixXQUhXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRCO0FBS2VELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwMmNmNTk5NTMzOWJhNmIyMjRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoe3JlcG9zaXRvcmllc30pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge3JlcG9zaXRvcmllcy5NYXAociA9PiA8aDEga2V5PXtyLmlkfT57ci5uYW1lfTwvaDE+KX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5Ib21lLmdldEludGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3MnKTtcclxuICAgIGNvbnN0IHJlcG9zaXRvcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiB7IHJlcG9zaXRvcmllcyB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==