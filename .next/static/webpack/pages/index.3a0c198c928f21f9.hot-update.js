"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Sections/Portfolio.tsx":
/*!***********************************************!*\
  !*** ./src/components/Sections/Portfolio.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ \"./src/config.ts\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/data */ \"./src/data/data.tsx\");\n/* harmony import */ var _hooks_useDetectOutsideClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useDetectOutsideClick */ \"./src/hooks/useDetectOutsideClick.ts\");\n/* harmony import */ var _Layout_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Layout/Section */ \"./src/components/Layout/Section.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Portfolio = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Section__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: \"bg-neutral-800\",\n        sectionId: _data_data__WEBPACK_IMPORTED_MODULE_5__.SectionId.Portfolio,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-y-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"self-center text-xl font-bold text-white\",\n                    children: [\n                        \"Check out some of my work - \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/akhileshappala\",\n                            children: \"see all here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 94\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-full columns-2 md:columns-3 lg:columns-4\",\n                    children: _data_data__WEBPACK_IMPORTED_MODULE_5__.portfolioItems.map(function(item, index) {\n                        var title = item.title, image = item.image;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        alt: title,\n                                        layout: \"responsive\",\n                                        placeholder: \"blur\",\n                                        src: image\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemOverlay, {\n                                        item: item\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, _this1)\n                        }, \"\".concat(title, \"-\").concat(index), false, {\n                            fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n});\n_c1 = Portfolio;\nPortfolio.displayName = \"Portfolio\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar ItemOverlay = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_s(function(param) {\n    var _item = param.item, url = _item.url, title = _item.title, description = _item.description;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), mobile = ref[0], setMobile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), showOverlay = ref1[0], setShowOverlay = ref1[1];\n    var linkRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // Avoid hydration styling errors by setting mobile in useEffect\n        if (_config__WEBPACK_IMPORTED_MODULE_4__.isMobile) {\n            setMobile(true);\n        }\n    }, []);\n    (0,_hooks_useDetectOutsideClick__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(linkRef, function() {\n        return setShowOverlay(false);\n    });\n    var handleItemClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(event) {\n        if (mobile && !showOverlay) {\n            event.preventDefault();\n            setShowOverlay(!showOverlay);\n        }\n    }, [\n        mobile,\n        showOverlay\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300\", {\n            \"opacity-0 hover:opacity-80\": !mobile\n        }, showOverlay ? \"opacity-80\" : \"opacity-0\"),\n        href: url,\n        onClick: handleItemClick,\n        ref: linkRef,\n        target: \"_blank\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative h-full w-full p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-full w-full flex-col gap-y-2 overflow-y-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-center font-bold text-white opacity-100\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-white opacity-100 sm:text-sm\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ExternalLinkIcon, {\n                    className: \"absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ssakhilesha/Documents/GitHub/React-portfolio/src/components/Sections/Portfolio.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, _this);\n}, \"qaJRbJjTk7ZYdPpJN/biOEF+7rY=\", false, function() {\n    return [\n        _hooks_useDetectOutsideClick__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n}));\n_c2 = ItemOverlay;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Portfolio$memo\");\n$RefreshReg$(_c1, \"Portfolio\");\n$RefreshReg$(_c2, \"ItemOverlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Qb3J0Zm9saW8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBEO0FBQ3RCO0FBQ0w7QUFDc0Q7QUFFL0M7QUFDb0I7QUFFWTtBQUM5Qjs7QUFFeEMsSUFBTWEsU0FBUyxpQkFBT1YsMkNBQUksQ0FBQyxnQkFBTTs7SUFDL0IscUJBQ0UsOERBQUNTLHVEQUFPO1FBQUNFLFNBQVMsRUFBQyxnQkFBZ0I7UUFBQ0MsU0FBUyxFQUFFTCwyREFBbUI7a0JBQ2hFLDRFQUFDTSxLQUFHO1lBQUNGLFNBQVMsRUFBQyx1QkFBdUI7OzhCQUNwQyw4REFBQ0csSUFBRTtvQkFBQ0gsU0FBUyxFQUFDLDBDQUEwQzs7d0JBQUMsOEJBQTRCO3NDQUFBLDhEQUFDSSxHQUFDOzRCQUFDQyxJQUFJLEVBQUMsbUNBQW1DO3NDQUFDLGNBQVk7Ozs7O2lDQUFJOzs7Ozs7eUJBQUs7OEJBQ3RKLDhEQUFDSCxLQUFHO29CQUFDRixTQUFTLEVBQUMsNkNBQTZDOzhCQUN6REwsMERBQWtCLENBQUMsU0FBQ1ksSUFBSSxFQUFFQyxLQUFLLEVBQUs7d0JBQ25DLElBQU9DLEtBQUssR0FBV0YsSUFBSSxDQUFwQkUsS0FBSyxFQUFFQyxLQUFLLEdBQUlILElBQUksQ0FBYkcsS0FBSzt3QkFDbkIscUJBQ0UsOERBQUNSLEtBQUc7NEJBQUNGLFNBQVMsRUFBQyxNQUFNO3NDQUNuQiw0RUFBQ0UsS0FBRztnQ0FDRkYsU0FBUyxFQUFFYixpREFBVSxDQUNuQix5RkFBeUYsQ0FDMUY7O2tEQUNELDhEQUFDQyxtREFBSzt3Q0FBQ3VCLEdBQUcsRUFBRUYsS0FBSzt3Q0FBRUcsTUFBTSxFQUFDLFlBQVk7d0NBQUNDLFdBQVcsRUFBQyxNQUFNO3dDQUFDQyxHQUFHLEVBQUVKLEtBQUs7Ozs7OzhDQUFJO2tEQUN4RSw4REFBQ0ssV0FBVzt3Q0FBQ1IsSUFBSSxFQUFFQSxJQUFJOzs7Ozs4Q0FBSTs7Ozs7O3NDQUN2QjsyQkFQbUIsRUFBQyxDQUFXQyxNQUFLLENBQWRDLEtBQUssRUFBQyxHQUFDLENBQVEsUUFBTkQsS0FBSyxDQUFFOzs7O2tDQVF4QyxDQUNOO3FCQUNILENBQUM7Ozs7O3lCQUNFOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0UsQ0FDVjtDQUNILENBQUM7O0FBRUZULFNBQVMsQ0FBQ2lCLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDcEMsK0RBQWVqQixTQUFTLEVBQUM7QUFFekIsSUFBTWdCLFdBQVcsaUJBQThCMUIsMkNBQUksSUFBQyxnQkFBdUM7c0JBQXJDa0IsSUFBSSxFQUFHVSxHQUFHLFNBQUhBLEdBQUcsRUFBRVIsS0FBSyxTQUFMQSxLQUFLLEVBQUVTLFdBQVcsU0FBWEEsV0FBVzs7SUFDbEYsSUFBNEJ6QixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBDMEIsTUFBTSxHQUFlMUIsR0FBZSxHQUE5QixFQUFFMkIsU0FBUyxHQUFJM0IsR0FBZSxHQUFuQjtJQUN4QixJQUFzQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE5QzRCLFdBQVcsR0FBb0I1QixJQUFlLEdBQW5DLEVBQUU2QixjQUFjLEdBQUk3QixJQUFlLEdBQW5CO0lBQ2xDLElBQU04QixPQUFPLEdBQUcvQiw2Q0FBTSxDQUFvQixJQUFJLENBQUM7SUFFL0NELGdEQUFTLENBQUMsV0FBTTtRQUNkLGdFQUFnRTtRQUNoRSxJQUFJRyw2Q0FBUSxFQUFFO1lBQ1owQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1B2Qix3RUFBcUIsQ0FBQzBCLE9BQU8sRUFBRTtlQUFNRCxjQUFjLENBQUMsS0FBSyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRTVELElBQU1FLGVBQWUsR0FBR2xDLGtEQUFXLENBQ2pDLFNBQUNtQyxLQUE4QixFQUFLO1FBQ2xDLElBQUlOLE1BQU0sSUFBSSxDQUFDRSxXQUFXLEVBQUU7WUFDMUJJLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7WUFDdkJKLGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUMsQ0FBQztTQUM5QjtLQUNGLEVBQ0Q7UUFBQ0YsTUFBTTtRQUFFRSxXQUFXO0tBQUMsQ0FDdEI7SUFFRCxxQkFDRSw4REFBQ2pCLEdBQUM7UUFDQUosU0FBUyxFQUFFYixpREFBVSxDQUNuQix5RUFBeUUsRUFDekU7WUFBQyw0QkFBNEIsRUFBRSxDQUFDZ0MsTUFBTTtTQUFDLEVBQ3ZDRSxXQUFXLEdBQUcsWUFBWSxHQUFHLFdBQVcsQ0FDekM7UUFDRGhCLElBQUksRUFBRVksR0FBRztRQUNUVSxPQUFPLEVBQUVILGVBQWU7UUFDeEJJLEdBQUcsRUFBRUwsT0FBTztRQUNaTSxNQUFNLEVBQUMsUUFBUTtrQkFDZiw0RUFBQzNCLEtBQUc7WUFBQ0YsU0FBUyxFQUFDLDRCQUE0Qjs7OEJBQ3pDLDhEQUFDRSxLQUFHO29CQUFDRixTQUFTLEVBQUMscURBQXFEOztzQ0FDbEUsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyw4Q0FBOEM7c0NBQUVTLEtBQUs7Ozs7O2lDQUFNO3NDQUN6RSw4REFBQ3FCLEdBQUM7NEJBQUM5QixTQUFTLEVBQUMsMkNBQTJDO3NDQUFFa0IsV0FBVzs7Ozs7aUNBQUs7Ozs7Ozt5QkFDdEU7OEJBQ04sOERBQUNoQyxzRUFBZ0I7b0JBQUNjLFNBQVMsRUFBQyw4RUFBOEU7Ozs7O3lCQUFHOzs7Ozs7aUJBQ3pHOzs7OzthQUNKLENBQ0o7Q0FDSDs7UUFoQ0NILG9FQUFxQjs7R0FnQ3JCO0FBM0NJa0IsTUFBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Qb3J0Zm9saW8udHN4P2M0YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFeHRlcm5hbExpbmtJY29ufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQge0ZDLCBtZW1vLCBNb3VzZUV2ZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7aXNNb2JpbGV9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQge3BvcnRmb2xpb0l0ZW1zLCBTZWN0aW9uSWR9IGZyb20gJy4uLy4uL2RhdGEvZGF0YSc7XG5pbXBvcnQge1BvcnRmb2xpb0l0ZW19IGZyb20gJy4uLy4uL2RhdGEvZGF0YURlZic7XG5pbXBvcnQgdXNlRGV0ZWN0T3V0c2lkZUNsaWNrIGZyb20gJy4uLy4uL2hvb2tzL3VzZURldGVjdE91dHNpZGVDbGljayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9MYXlvdXQvU2VjdGlvbic7XG5cbmNvbnN0IFBvcnRmb2xpbzogRkMgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTgwMFwiIHNlY3Rpb25JZD17U2VjdGlvbklkLlBvcnRmb2xpb30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPkNoZWNrIG91dCBzb21lIG9mIG15IHdvcmsgLSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYWtoaWxlc2hhcHBhbGEnPnNlZSBhbGwgaGVyZTwvYT48L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgY29sdW1ucy0yIG1kOmNvbHVtbnMtMyBsZzpjb2x1bW5zLTRcIj5cbiAgICAgICAgICB7cG9ydGZvbGlvSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3RpdGxlLCBpbWFnZX0gPSBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCIga2V5PXtgJHt0aXRsZX0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICdyZWxhdGl2ZSBoLW1heCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LWxnIHNoYWRvdy1ibGFjay8zMCBsZzpzaGFkb3cteGwnLFxuICAgICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PXt0aXRsZX0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHBsYWNlaG9sZGVyPVwiYmx1clwiIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8SXRlbU92ZXJsYXkgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn0pO1xuXG5Qb3J0Zm9saW8uZGlzcGxheU5hbWUgPSAnUG9ydGZvbGlvJztcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcblxuY29uc3QgSXRlbU92ZXJsYXk6IEZDPHtpdGVtOiBQb3J0Zm9saW9JdGVtfT4gPSBtZW1vKCh7aXRlbToge3VybCwgdGl0bGUsIGRlc2NyaXB0aW9ufX0pID0+IHtcbiAgY29uc3QgW21vYmlsZSwgc2V0TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dPdmVybGF5LCBzZXRTaG93T3ZlcmxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxpbmtSZWYgPSB1c2VSZWY8SFRNTEFuY2hvckVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQXZvaWQgaHlkcmF0aW9uIHN0eWxpbmcgZXJyb3JzIGJ5IHNldHRpbmcgbW9iaWxlIGluIHVzZUVmZmVjdFxuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgc2V0TW9iaWxlKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuICB1c2VEZXRlY3RPdXRzaWRlQ2xpY2sobGlua1JlZiwgKCkgPT4gc2V0U2hvd092ZXJsYXkoZmFsc2UpKTtcblxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAobW9iaWxlICYmICFzaG93T3ZlcmxheSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTaG93T3ZlcmxheSghc2hvd092ZXJsYXkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW21vYmlsZSwgc2hvd092ZXJsYXldLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgJ2Fic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCAgYmctZ3JheS05MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJyxcbiAgICAgICAgeydvcGFjaXR5LTAgaG92ZXI6b3BhY2l0eS04MCc6ICFtb2JpbGV9LFxuICAgICAgICBzaG93T3ZlcmxheSA/ICdvcGFjaXR5LTgwJyA6ICdvcGFjaXR5LTAnLFxuICAgICAgKX1cbiAgICAgIGhyZWY9e3VybH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUl0ZW1DbGlja31cbiAgICAgIHJlZj17bGlua1JlZn1cbiAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIHAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBnYXAteS0yIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC13aGl0ZSBvcGFjaXR5LTEwMFwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC13aGl0ZSBvcGFjaXR5LTEwMCBzbTp0ZXh0LXNtXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFeHRlcm5hbExpbmtJY29uIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xIHJpZ2h0LTEgaC00IHctNCBzaHJpbmstMCB0ZXh0LXdoaXRlIHNtOmJvdHRvbS0yIHNtOnJpZ2h0LTJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufSk7XG4iXSwibmFtZXMiOlsiRXh0ZXJuYWxMaW5rSWNvbiIsImNsYXNzTmFtZXMiLCJJbWFnZSIsIm1lbW8iLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJwb3J0Zm9saW9JdGVtcyIsIlNlY3Rpb25JZCIsInVzZURldGVjdE91dHNpZGVDbGljayIsIlNlY3Rpb24iLCJQb3J0Zm9saW8iLCJjbGFzc05hbWUiLCJzZWN0aW9uSWQiLCJkaXYiLCJoMiIsImEiLCJocmVmIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJpbWFnZSIsImFsdCIsImxheW91dCIsInBsYWNlaG9sZGVyIiwic3JjIiwiSXRlbU92ZXJsYXkiLCJkaXNwbGF5TmFtZSIsInVybCIsImRlc2NyaXB0aW9uIiwibW9iaWxlIiwic2V0TW9iaWxlIiwic2hvd092ZXJsYXkiLCJzZXRTaG93T3ZlcmxheSIsImxpbmtSZWYiLCJoYW5kbGVJdGVtQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25DbGljayIsInJlZiIsInRhcmdldCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sections/Portfolio.tsx\n"));

/***/ })

});