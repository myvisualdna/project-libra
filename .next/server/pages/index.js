module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/sidebar.module.scss */ \"./styles/sidebar.module.scss\");\n/* harmony import */ var _styles_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Twitter */ \"@material-ui/icons/Twitter\");\n/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SidebarOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarOption */ \"./components/SidebarOption.js\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/NotificationsNone */ \"@material-ui/icons/NotificationsNone\");\n/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ \"@material-ui/icons/MailOutline\");\n/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_BookmarkBorder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/BookmarkBorder */ \"@material-ui/icons/BookmarkBorder\");\n/* harmony import */ var _material_ui_icons_BookmarkBorder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BookmarkBorder__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ \"@material-ui/icons/ListAlt\");\n/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PermIdentity */ \"@material-ui/icons/PermIdentity\");\n/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"@material-ui/icons/MoreHoriz\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/Sidebar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Sidebar() {\n  return __jsx(\"div\", {\n    className: _styles_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: _styles_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar__twitterIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    active: true,\n    Icon: _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default.a,\n    text: \"Home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    Icon: _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a,\n    text: \"Explore\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    Icon: _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_6___default.a,\n    text: \"Notifications\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    Icon: _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7___default.a,\n    text: \"Messages\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    Icon: _material_ui_icons_BookmarkBorder__WEBPACK_IMPORTED_MODULE_8___default.a,\n    text: \"Bookmarks\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    Icon: _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9___default.a,\n    text: \"Lists\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    Icon: _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_10___default.a,\n    text: \"Profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    Icon: _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_11___default.a,\n    text: \"More\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n    variant: \"outlined\",\n    className: _styles_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar__tweet,\n    fullWidth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Tweet\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIuanM/ODQwMyJdLCJuYW1lcyI6WyJTaWRlYmFyIiwic3R5bGVzIiwic2lkZWJhciIsInNpZGViYXJfX3R3aXR0ZXJJY29uIiwiSG9tZUljb24iLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiTWFpbE91dGxpbmVJY29uIiwiQm9va21hcmtCb3JkZXJJY29uIiwiTGlzdEFsdEljb24iLCJQZXJtSWRlbnRpdHlJY29uIiwiTW9yZUhvcml6SWNvbiIsInNpZGViYXJfX3R3ZWV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixTQUNFO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxpRUFBRDtBQUFhLGFBQVMsRUFBRUQsa0VBQU0sQ0FBQ0Usb0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUtFLE1BQUMsc0RBQUQ7QUFBZSxVQUFNLE1BQXJCO0FBQXNCLFFBQUksRUFBRUMsOERBQTVCO0FBQXNDLFFBQUksRUFBQyxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLHNEQUFEO0FBQWUsUUFBSSxFQUFFQyxnRUFBckI7QUFBaUMsUUFBSSxFQUFDLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsc0RBQUQ7QUFBZSxRQUFJLEVBQUVDLDJFQUFyQjtBQUE0QyxRQUFJLEVBQUMsZUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyxzREFBRDtBQUFlLFFBQUksRUFBRUMscUVBQXJCO0FBQXNDLFFBQUksRUFBQyxVQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSxNQUFDLHNEQUFEO0FBQWUsUUFBSSxFQUFFQyx3RUFBckI7QUFBeUMsUUFBSSxFQUFDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsc0RBQUQ7QUFBZSxRQUFJLEVBQUVDLGlFQUFyQjtBQUFrQyxRQUFJLEVBQUMsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyxzREFBRDtBQUFlLFFBQUksRUFBRUMsdUVBQXJCO0FBQXVDLFFBQUksRUFBQyxTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRSxNQUFDLHNEQUFEO0FBQWUsUUFBSSxFQUFFQyxvRUFBckI7QUFBb0MsUUFBSSxFQUFDLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWVFLE1BQUMseURBQUQ7QUFBUSxXQUFPLEVBQUMsVUFBaEI7QUFBMkIsYUFBUyxFQUFFVixrRUFBTSxDQUFDVyxjQUE3QztBQUE2RCxhQUFTLE1BQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixDQURGO0FBcUJEOztBQUVjWixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZWJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zaWRlYmFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCI7XG5pbXBvcnQgU2lkZWJhck9wdGlvbiBmcm9tIFwiLi9TaWRlYmFyT3B0aW9uXCI7XG5pbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNOb25lXCI7XG5pbXBvcnQgTWFpbE91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbE91dGxpbmVcIjtcbmltcG9ydCBCb29rbWFya0JvcmRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Cb29rbWFya0JvcmRlclwiO1xuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiO1xuaW1wb3J0IFBlcm1JZGVudGl0eUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJtSWRlbnRpdHlcIjtcbmltcG9ydCBNb3JlSG9yaXpJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgICAgey8qVHdpdHRlciBJY29uKi99XG4gICAgICA8VHdpdHRlckljb24gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9fdHdpdHRlckljb259IC8+XG5cbiAgICAgIHsvKlNpZGViYXJPcHRpb24gKi99XG4gICAgICA8U2lkZWJhck9wdGlvbiBhY3RpdmUgSWNvbj17SG9tZUljb259IHRleHQ9XCJIb21lXCIgLz5cbiAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e1NlYXJjaEljb259IHRleHQ9XCJFeHBsb3JlXCIgLz5cbiAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e05vdGlmaWNhdGlvbnNOb25lSWNvbn0gdGV4dD1cIk5vdGlmaWNhdGlvbnNcIiAvPlxuICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17TWFpbE91dGxpbmVJY29ufSB0ZXh0PVwiTWVzc2FnZXNcIiAvPlxuICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17Qm9va21hcmtCb3JkZXJJY29ufSB0ZXh0PVwiQm9va21hcmtzXCIgLz5cbiAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e0xpc3RBbHRJY29ufSB0ZXh0PVwiTGlzdHNcIiAvPlxuICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17UGVybUlkZW50aXR5SWNvbn0gdGV4dD1cIlByb2ZpbGVcIiAvPlxuICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17TW9yZUhvcml6SWNvbn0gdGV4dD1cIk1vcmVcIiAvPlxuXG4gICAgICB7LypCdXR0b24gVHdlZXQgKi99XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJfX3R3ZWV0fSBmdWxsV2lkdGg+XG4gICAgICAgIFR3ZWV0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ }),

/***/ "./components/SidebarOption.js":
/*!*************************************!*\
  !*** ./components/SidebarOption.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_sidebarOption_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/sidebarOption.module.scss */ \"./styles/sidebarOption.module.scss\");\n/* harmony import */ var _styles_sidebarOption_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebarOption_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/SidebarOption.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction SidebarOption({\n  active,\n  text,\n  Icon\n}) {\n  const buttonStyle = \"\";\n\n  if (active === true) {\n    const buttonStyle = _styles_sidebarOption_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarOption__active;\n  } else {\n    const buttonStyle = _styles_sidebarOption_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarOption;\n  }\n\n  return __jsx(\"div\", {\n    className: \"jsx-926327412\" + \" \" + `sidebarOption ${active && \"sidebarOption--active\"}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(Icon, {\n    className: \"jsx-926327412\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(\"h2\", {\n    className: \"jsx-926327412\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"926327412\",\n    __self: this\n  }, \".sidebarOption.jsx-926327412{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.sidebarOption.jsx-926327412:hover{background-color:#e8f5fe;border-radius:30px;color:var(--twitter-color);-webkit-transition:color 100ms ease-out;transition:color 100ms ease-out;}.sidebarOption.jsx-926327412>.MuiSvgIcon-root.jsx-926327412{padding:20px;}.sidebarOption.jsx-926327412>h2.jsx-926327412{font-weight:800;font-size:20px;margin-right:20px;}.sidebarOption__active.jsx-926327412{color:var(--twitter-color);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNuaWV2ZXMvRG9jdW1lbnRzL1JlYWN0L3Byb2plY3QtbGlicmEvY29tcG9uZW50cy9TaWRlYmFyT3B0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHd0IsQUFNWSxBQU9aLEFBSUcsQUFNVyxhQVQ3QixHQUlpQixTQVhJLEVBaUJyQixJQUxvQixhQVhTLEtBWTdCLHNCQVhrQyxHQVJiLHFFQVNyQix3QkFSaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2FuZHJlc25pZXZlcy9Eb2N1bWVudHMvUmVhY3QvcHJvamVjdC1saWJyYS9jb21wb25lbnRzL1NpZGViYXJPcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2lkZWJhck9wdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiBTaWRlYmFyT3B0aW9uKHsgYWN0aXZlLCB0ZXh0LCBJY29uIH0pIHtcbiAgY29uc3QgYnV0dG9uU3R5bGUgPSBcIlwiO1xuICBpZiAoYWN0aXZlID09PSB0cnVlKSB7XG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSBzdHlsZXMuc2lkZWJhck9wdGlvbl9fYWN0aXZlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0gc3R5bGVzLnNpZGViYXJPcHRpb247XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZWJhck9wdGlvbiAke2FjdGl2ZSAmJiBcInNpZGViYXJPcHRpb24tLWFjdGl2ZVwifWB9PlxuICAgICAgPEljb24gLz5cbiAgICAgIDxoMj57dGV4dH08L2gyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zaWRlYmFyT3B0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGViYXJPcHRpb246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZWJhck9wdGlvbiA+IC5NdWlTdmdJY29uLXJvb3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZWJhck9wdGlvbiA+IGgyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZWJhck9wdGlvbl9fYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck9wdGlvbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/andresnieves/Documents/React/project-libra/components/SidebarOption.js */\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarOption);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXJPcHRpb24uanM/ODdhMiJdLCJuYW1lcyI6WyJTaWRlYmFyT3B0aW9uIiwiYWN0aXZlIiwidGV4dCIsIkljb24iLCJidXR0b25TdHlsZSIsInN0eWxlcyIsInNpZGViYXJPcHRpb25fX2FjdGl2ZSIsInNpZGViYXJPcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUI7QUFBRUMsUUFBRjtBQUFVQyxNQUFWO0FBQWdCQztBQUFoQixDQUF2QixFQUErQztBQUM3QyxRQUFNQyxXQUFXLEdBQUcsRUFBcEI7O0FBQ0EsTUFBSUgsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsVUFBTUcsV0FBVyxHQUFHQyx3RUFBTSxDQUFDQyxxQkFBM0I7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNRixXQUFXLEdBQUdDLHdFQUFNLENBQUNFLGFBQTNCO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBLHVDQUFpQixpQkFBZ0JOLE1BQU0sSUFBSSx1QkFBd0IsRUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQyxJQUFMLENBRkY7QUFBQTtBQUFBO0FBQUEsb3dGQURGO0FBbUNEOztBQUVjRiw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZWJhck9wdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zaWRlYmFyT3B0aW9uLm1vZHVsZS5zY3NzXCI7XG5cbmZ1bmN0aW9uIFNpZGViYXJPcHRpb24oeyBhY3RpdmUsIHRleHQsIEljb24gfSkge1xuICBjb25zdCBidXR0b25TdHlsZSA9IFwiXCI7XG4gIGlmIChhY3RpdmUgPT09IHRydWUpIHtcbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHN0eWxlcy5zaWRlYmFyT3B0aW9uX19hY3RpdmU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSBzdHlsZXMuc2lkZWJhck9wdGlvbjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyT3B0aW9uICR7YWN0aXZlICYmIFwic2lkZWJhck9wdGlvbi0tYWN0aXZlXCJ9YH0+XG4gICAgICA8SWNvbiAvPlxuICAgICAgPGgyPnt0ZXh0fTwvaDI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNpZGViYXJPcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZWJhck9wdGlvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVmZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlYmFyT3B0aW9uID4gLk11aVN2Z0ljb24tcm9vdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlYmFyT3B0aW9uID4gaDIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlYmFyT3B0aW9uX19hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyT3B0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SidebarOption.js\n");

/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./components/navigation.js\");\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/container.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n //Creamos el container que vamos a usar en CADA PAGINA. Sera como un template\n//Todas las pages son este container con un contenido personalizado\n\nconst Container = props => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"container p-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, props.children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lci5qcz9iZDRjIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7O0FBQ0EsTUFBTUEsU0FBUyxHQUFJQyxLQUFELElBQVc7QUFDM0IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQU9FO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ0EsS0FBSyxDQUFDQyxRQUF0QyxDQVBGLENBREY7QUFXRCxDQVpEOztBQWNlRix3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vbmF2aWdhdGlvblwiO1xuXG4vL0NyZWFtb3MgZWwgY29udGFpbmVyIHF1ZSB2YW1vcyBhIHVzYXIgZW4gQ0FEQSBQQUdJTkEuIFNlcmEgY29tbyB1biB0ZW1wbGF0ZVxuLy9Ub2RhcyBsYXMgcGFnZXMgc29uIGVzdGUgY29udGFpbmVyIGNvbiB1biBjb250ZW5pZG8gcGVyc29uYWxpemFkb1xuY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKkhlYWQgY29udGllbmUgZWwgc3R5bGUsIGVuIGVzdGUgY2FzbyB1biB0aGVtZSBkZSBib290c3dhdGNoICovfVxuICAgICAgPEhlYWQ+PC9IZWFkPlxuICAgICAgey8qSW1wb3J0YW1vcyBlbCBjb21wb25lbnRlIG5hdmlnYXRpb24gcXVlIGVsIGhlYWRlciBwcmVzZW50ZSBlbiB0b2RhcyBsYXMgcGFnaW5hcyAqL31cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG5cbiAgICAgIHsvKkVsIGNvbnRlbmlkbyBkZSBsYSBwYWdpbmEgc2VyYSBsbyBxdWUgbGxlZ3VlIGNvbW8gcHJvcHMuIEVuIGNhZGEgcGFnaW5hIGVzZSBjb250ZW5pZG8gZGViZSBlc3RhciBkZW50cm8gZGUgPENvbnRhbmluZXI+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/container.js\n");

/***/ }),

/***/ "./components/feed.js":
/*!****************************!*\
  !*** ./components/feed.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/feed.module.scss */ \"./styles/feed.module.scss\");\n/* harmony import */ var _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tweetBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tweetBox */ \"./components/tweetBox.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post */ \"./components/post.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase/index.js\");\n/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-flip-move */ \"react-flip-move\");\n/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_flip_move__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/feed.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Feed() {\n  //1. Definimos posts y como modificarlo\n  const {\n    0: posts,\n    1: setPosts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); //2. En firebase, hacemos fetch de la collection \"posts\" y los docs que contiene dentro\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _firebase__WEBPACK_IMPORTED_MODULE_4__[\"default\"].collection(\"posts\").onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => doc.data())));\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.feed,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_feed_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.feed__header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"Home\")), __jsx(_components_tweetBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, posts.map(post => __jsx(_components_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: post.text,\n    displayName: post.displayName,\n    username: post.username,\n    verified: post.verified,\n    text: post.text,\n    avatar: post.avatar,\n    image: post.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQuanM/ZDFjMSJdLCJuYW1lcyI6WyJGZWVkIiwicG9zdHMiLCJzZXRQb3N0cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJzdHlsZXMiLCJmZWVkIiwiZmVlZF9faGVhZGVyIiwicG9zdCIsInRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJuYW1lIiwidmVyaWZpZWQiLCJhdmF0YXIiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZDtBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDLENBRmMsQ0FJZDs7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLHFEQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxVQUF2QixDQUFtQ0MsUUFBRCxJQUNoQ04sUUFBUSxDQUFDTSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFtQkMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLElBQUosRUFBM0IsQ0FBRCxDQURWO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLGFBQVMsRUFBRUQsK0RBQU0sQ0FBQ0UsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUZGLEVBT0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFZRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsS0FBSyxDQUFDUyxHQUFOLENBQVdNLElBQUQsSUFDVCxNQUFDLHdEQUFEO0FBQ0UsT0FBRyxFQUFFQSxJQUFJLENBQUNDLElBRFo7QUFFRSxlQUFXLEVBQUVELElBQUksQ0FBQ0UsV0FGcEI7QUFHRSxZQUFRLEVBQUVGLElBQUksQ0FBQ0csUUFIakI7QUFJRSxZQUFRLEVBQUVILElBQUksQ0FBQ0ksUUFKakI7QUFLRSxRQUFJLEVBQUVKLElBQUksQ0FBQ0MsSUFMYjtBQU1FLFVBQU0sRUFBRUQsSUFBSSxDQUFDSyxNQU5mO0FBT0UsU0FBSyxFQUFFTCxJQUFJLENBQUNNLEtBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREgsQ0FaRixDQURGO0FBNEJEOztBQUVjdEIsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2ZlZWQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBUd2VldEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy90d2VldEJveFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi9maXJlYmFzZVwiO1xuaW1wb3J0IEZsaXBNb3ZlIGZyb20gXCJyZWFjdC1mbGlwLW1vdmVcIjtcblxuZnVuY3Rpb24gRmVlZCgpIHtcbiAgLy8xLiBEZWZpbmltb3MgcG9zdHMgeSBjb21vIG1vZGlmaWNhcmxvXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vMi4gRW4gZmlyZWJhc2UsIGhhY2Vtb3MgZmV0Y2ggZGUgbGEgY29sbGVjdGlvbiBcInBvc3RzXCIgeSBsb3MgZG9jcyBxdWUgY29udGllbmUgZGVudHJvXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGIuY29sbGVjdGlvbihcInBvc3RzXCIpLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PlxuICAgICAgc2V0UG9zdHMoc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSkpXG4gICAgKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZH0+XG4gICAgICB7LypIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfX2hlYWRlcn0+XG4gICAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LypUd2VldEJveCAqL31cbiAgICAgIDxUd2VldEJveCAvPlxuXG4gICAgICB7LypcbiAgICAgIFlhIGhhYmllbmRvIGhlY2hvIGZldGNoIGRlIGxvcyBwb3N0IChwYXNvIDIpIHkgaGFiaWVuZG9sbyBndWFyZGFkbyBlbiBwb3N0cyAocGFzbyAxKSwgYWhvcmEgbG9vcGVhbW9zIHBvciBjYWRhIHVubyBkZSBsb3MgZG9jcyBxdWUgZW5jb250cmFtb3MgZGVudHJvIGRlIGxhIGNvbGxlY3Rpb24gcG9zdHMgKHZlciBwYWdpbmEpXG4gICAgICAqL31cbiAgICAgIDxGbGlwTW92ZT5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxQb3N0XG4gICAgICAgICAgICBrZXk9e3Bvc3QudGV4dH1cbiAgICAgICAgICAgIGRpc3BsYXlOYW1lPXtwb3N0LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgdXNlcm5hbWU9e3Bvc3QudXNlcm5hbWV9XG4gICAgICAgICAgICB2ZXJpZmllZD17cG9zdC52ZXJpZmllZH1cbiAgICAgICAgICAgIHRleHQ9e3Bvc3QudGV4dH1cbiAgICAgICAgICAgIGF2YXRhcj17cG9zdC5hdmF0YXJ9XG4gICAgICAgICAgICBpbWFnZT17cG9zdC5pbWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvRmxpcE1vdmU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/feed.js\n");

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/navigation.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Navigation() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 10\n    }\n  }, \"this is the navigation file\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/OTMwOCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFDcEIsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFQO0FBQ0Q7O0FBRWNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuICByZXR1cm4gPGRpdj50aGlzIGlzIHRoZSBuYXZpZ2F0aW9uIGZpbGU8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ }),

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/post.module.scss */ \"./styles/post.module.scss\");\n/* harmony import */ var _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ \"@material-ui/icons/VerifiedUser\");\n/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Share */ \"@material-ui/icons/Share\");\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Repeat */ \"@material-ui/icons/Repeat\");\n/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ \"@material-ui/icons/FavoriteBorder\");\n/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChatBubbleOutline */ \"@material-ui/icons/ChatBubbleOutline\");\n/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/post.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Post = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(({\n  displayName,\n  username,\n  verified,\n  text,\n  image,\n  avatar\n}, ref) => {\n  return __jsx(\"div\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post,\n    ref: ref,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__avatar,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n    src: avatar,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__body,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__header,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__headerText,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 15\n    }\n  }, displayName, \" \", __jsx(\"span\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__headerSpecial,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, verified && __jsx(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__badge,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }), \"@\", username))), __jsx(\"div\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__headerDescription,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, text))), __jsx(\"img\", {\n    src: image,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post__footer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    fontSize: \"small\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }), __jsx(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    fontSize: \"small\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fontSize: \"small\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }), __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    fontSize: \"small />\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }))));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QuanM/YzRhZSJdLCJuYW1lcyI6WyJQb3N0IiwiZm9yd2FyZFJlZiIsImRpc3BsYXlOYW1lIiwidXNlcm5hbWUiLCJ2ZXJpZmllZCIsInRleHQiLCJpbWFnZSIsImF2YXRhciIsInJlZiIsInN0eWxlcyIsInBvc3QiLCJwb3N0X19hdmF0YXIiLCJwb3N0X19ib2R5IiwicG9zdF9faGVhZGVyIiwicG9zdF9faGVhZGVyVGV4dCIsInBvc3RfX2hlYWRlclNwZWNpYWwiLCJwb3N0X19iYWRnZSIsInBvc3RfX2hlYWRlckRlc2NyaXB0aW9uIiwicG9zdF9fZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLElBQUksZ0JBQUdDLHdEQUFVLENBQ3JCLENBQUM7QUFBRUMsYUFBRjtBQUFlQyxVQUFmO0FBQXlCQyxVQUF6QjtBQUFtQ0MsTUFBbkM7QUFBeUNDLE9BQXpDO0FBQWdEQztBQUFoRCxDQUFELEVBQTJEQyxHQUEzRCxLQUFtRTtBQUNqRSxTQUNFO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxJQUF2QjtBQUE2QixPQUFHLEVBQUVGLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUMsK0RBQU0sQ0FBQ0UsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxPQUFHLEVBQUVKLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBRUUsK0RBQU0sQ0FBQ0csVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSCwrREFBTSxDQUFDSSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixXQURILEVBQ2dCLEdBRGhCLEVBRUU7QUFBTSxhQUFTLEVBQUVPLCtEQUFNLENBQUNNLG1CQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLFFBQVEsSUFDUCxNQUFDLHNFQUFEO0FBQWtCLGFBQVMsRUFBRUssK0RBQU0sQ0FBQ08sV0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLE9BSUliLFFBSkosQ0FGRixDQURGLENBREYsRUFZRTtBQUFLLGFBQVMsRUFBRU0sK0RBQU0sQ0FBQ1EsdUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlaLElBQUosQ0FERixDQVpGLENBREYsRUFpQkU7QUFBSyxPQUFHLEVBQUVDLEtBQVY7QUFBaUIsT0FBRyxFQUFDLEVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkU7QUFBSyxhQUFTLEVBQUVHLCtEQUFNLENBQUNTLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJFQUFEO0FBQXVCLFlBQVEsRUFBQyxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdFQUFEO0FBQVksWUFBUSxFQUFDLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsd0VBQUQ7QUFBb0IsWUFBUSxFQUFDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsK0RBQUQ7QUFBVyxZQUFRLEVBQUMsVUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBbEJGLENBSkYsQ0FERjtBQWdDRCxDQWxDb0IsQ0FBdkI7QUFxQ2VsQixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9zdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBWZXJpZmllZFVzZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCI7XG5pbXBvcnQgU2hhcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmVcIjtcbmltcG9ydCBSZXBlYXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0XCI7XG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIjtcbmltcG9ydCBDaGF0QnViYmxlT3V0bGluZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlT3V0bGluZVwiO1xuXG5jb25zdCBQb3N0ID0gZm9yd2FyZFJlZihcbiAgKHsgZGlzcGxheU5hbWUsIHVzZXJuYW1lLCB2ZXJpZmllZCwgdGV4dCwgaW1hZ2UsIGF2YXRhciB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSByZWY9e3JlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9fYXZhdGFyfT5cbiAgICAgICAgICA8QXZhdGFyIHNyYz17YXZhdGFyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X19ib2R5fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfX2hlYWRlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfX2hlYWRlclRleHR9PlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlOYW1lfXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X19oZWFkZXJTcGVjaWFsfT5cbiAgICAgICAgICAgICAgICAgIHt2ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxWZXJpZmllZFVzZXJJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfX2JhZGdlfSAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIEB7dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfX2hlYWRlckRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgPHA+e3RleHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9fZm9vdGVyfT5cbiAgICAgICAgICAgIDxDaGF0QnViYmxlT3V0bGluZUljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICA8UmVwZWF0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgIDxGYXZvcml0ZUJvcmRlckljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICA8U2hhcmVJY29uIGZvbnRTaXplPVwic21hbGwgLz5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/post.js\n");

/***/ }),

/***/ "./components/tweetBox.js":
/*!********************************!*\
  !*** ./components/tweetBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_tweetBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tweetBox.module.scss */ \"./styles/tweetBox.module.scss\");\n/* harmony import */ var _styles_tweetBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tweetBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase/index.js\");\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/tweetBox.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction TweetBox() {\n  //1. Definimos el el texto y la imagen del Tweet\n  const {\n    0: tweetMessage,\n    1: setTweetMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: tweetImage,\n    1: setTweetImage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"); //3. We define the method to send a tweet to the database\n\n  const sendTweet = e => {\n    e.preventDefault();\n    _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].collection(\"posts\").add({\n      displayName: \"The Mandalorian\",\n      username: \"Mando\",\n      verified: true,\n      text: tweetMessage,\n      image: tweetImage,\n      avatar: \"https://lumiere-a.akamaihd.net/v1/images/5e97081f4e43710001cd36e6-image_40692e05.jpeg?region=0%2C0%2C1536%2C864\"\n    }); //We re-set again the states on thosw two components\n\n    setTweetMessage(\"\");\n    setTweetImage(\"\");\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_tweetBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tweetBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_tweetBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tweetBox__input,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n    src: \"https://picsum.photos/200/300\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    //2. We connect the states defined on item 1, here the text message of the tweet. OnChnage will setup the method to modify \"TweetMessage\" state with whatever we write in the input\n    onChange: e => setTweetMessage(e.target.value),\n    value: tweetMessage,\n    placeholder: \"What's happening?\",\n    type: \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  })), __jsx(\"input\", {\n    //The same that item 2\n    value: tweetImage,\n    onChange: e => setTweetImage(e.target.value),\n    className: _styles_tweetBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tweetBox__imageInput,\n    placeholder: \"Enter image URL\",\n    type: \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"] //4. We include de method defined in item 3\n  , {\n    onClick: sendTweet,\n    type: \"submit\",\n    className: _styles_tweetBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tweetBox__tweetButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Tweet\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TweetBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3R3ZWV0Qm94LmpzP2M5ZDQiXSwibmFtZXMiOlsiVHdlZXRCb3giLCJ0d2VldE1lc3NhZ2UiLCJzZXRUd2VldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInR3ZWV0SW1hZ2UiLCJzZXRUd2VldEltYWdlIiwic2VuZFR3ZWV0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiZGlzcGxheU5hbWUiLCJ1c2VybmFtZSIsInZlcmlmaWVkIiwidGV4dCIsImltYWdlIiwiYXZhdGFyIiwic3R5bGVzIiwidHdlZXRCb3giLCJ0d2VldEJveF9faW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR3ZWV0Qm94X19pbWFnZUlucHV0IiwidHdlZXRCb3hfX3R3ZWV0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxFQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLEVBQUQsQ0FBNUMsQ0FIa0IsQ0FLbEI7O0FBQ0EsUUFBTUcsU0FBUyxHQUFJQyxDQUFELElBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkI7QUFDekJDLGlCQUFXLEVBQUUsaUJBRFk7QUFFekJDLGNBQVEsRUFBRSxPQUZlO0FBR3pCQyxjQUFRLEVBQUUsSUFIZTtBQUl6QkMsVUFBSSxFQUFFZCxZQUptQjtBQUt6QmUsV0FBSyxFQUFFWixVQUxrQjtBQU16QmEsWUFBTSxFQUNKO0FBUHVCLEtBQTNCLEVBRnVCLENBWXZCOztBQUNBZixtQkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNBRyxpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNELEdBZkQ7O0FBaUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUVhLG1FQUFNLENBQUNDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELG1FQUFNLENBQUNFLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsT0FBRyxFQUFDLCtCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0U7QUFDQSxZQUFRLEVBQUdiLENBQUQsSUFBT0wsZUFBZSxDQUFDSyxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsS0FBVixDQUZsQztBQUdFLFNBQUssRUFBRXJCLFlBSFQ7QUFJRSxlQUFXLEVBQUMsbUJBSmQ7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVdFO0FBQ0U7QUFDQSxTQUFLLEVBQUVHLFVBRlQ7QUFHRSxZQUFRLEVBQUdHLENBQUQsSUFBT0YsYUFBYSxDQUFDRSxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsS0FBVixDQUhoQztBQUlFLGFBQVMsRUFBRUosbUVBQU0sQ0FBQ0ssb0JBSnBCO0FBS0UsZUFBVyxFQUFDLGlCQUxkO0FBTUUsUUFBSSxFQUFDLE1BTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBbUJFLE1BQUMsd0RBQUQsQ0FDRTtBQURGO0FBRUUsV0FBTyxFQUFFakIsU0FGWDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsYUFBUyxFQUFFWSxtRUFBTSxDQUFDTSxxQkFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRixDQURGLENBREY7QUFnQ0Q7O0FBRWN4Qix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdHdlZXRCb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90d2VldEJveC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcblxuZnVuY3Rpb24gVHdlZXRCb3goKSB7XG4gIC8vMS4gRGVmaW5pbW9zIGVsIGVsIHRleHRvIHkgbGEgaW1hZ2VuIGRlbCBUd2VldFxuICBjb25zdCBbdHdlZXRNZXNzYWdlLCBzZXRUd2VldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0d2VldEltYWdlLCBzZXRUd2VldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vMy4gV2UgZGVmaW5lIHRoZSBtZXRob2QgdG8gc2VuZCBhIHR3ZWV0IHRvIHRoZSBkYXRhYmFzZVxuICBjb25zdCBzZW5kVHdlZXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkYi5jb2xsZWN0aW9uKFwicG9zdHNcIikuYWRkKHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlRoZSBNYW5kYWxvcmlhblwiLFxuICAgICAgdXNlcm5hbWU6IFwiTWFuZG9cIixcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgICAgdGV4dDogdHdlZXRNZXNzYWdlLFxuICAgICAgaW1hZ2U6IHR3ZWV0SW1hZ2UsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9sdW1pZXJlLWEuYWthbWFpaGQubmV0L3YxL2ltYWdlcy81ZTk3MDgxZjRlNDM3MTAwMDFjZDM2ZTYtaW1hZ2VfNDA2OTJlMDUuanBlZz9yZWdpb249MCUyQzAlMkMxNTM2JTJDODY0XCIsXG4gICAgfSk7XG5cbiAgICAvL1dlIHJlLXNldCBhZ2FpbiB0aGUgc3RhdGVzIG9uIHRob3N3IHR3byBjb21wb25lbnRzXG4gICAgc2V0VHdlZXRNZXNzYWdlKFwiXCIpO1xuICAgIHNldFR3ZWV0SW1hZ2UoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0Qm94fT5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0Qm94X19pbnB1dH0+XG4gICAgICAgICAgPEF2YXRhciBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAvLzIuIFdlIGNvbm5lY3QgdGhlIHN0YXRlcyBkZWZpbmVkIG9uIGl0ZW0gMSwgaGVyZSB0aGUgdGV4dCBtZXNzYWdlIG9mIHRoZSB0d2VldC4gT25DaG5hZ2Ugd2lsbCBzZXR1cCB0aGUgbWV0aG9kIHRvIG1vZGlmeSBcIlR3ZWV0TWVzc2FnZVwiIHN0YXRlIHdpdGggd2hhdGV2ZXIgd2Ugd3JpdGUgaW4gdGhlIGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFR3ZWV0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17dHdlZXRNZXNzYWdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3MgaGFwcGVuaW5nP1wiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIC8vVGhlIHNhbWUgdGhhdCBpdGVtIDJcbiAgICAgICAgICB2YWx1ZT17dHdlZXRJbWFnZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFR3ZWV0SW1hZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0Qm94X19pbWFnZUlucHV0fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgaW1hZ2UgVVJMXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAvLzQuIFdlIGluY2x1ZGUgZGUgbWV0aG9kIGRlZmluZWQgaW4gaXRlbSAzXG4gICAgICAgICAgb25DbGljaz17c2VuZFR3ZWV0fVxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0Qm94X190d2VldEJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgIFR3ZWV0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUd2VldEJveDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tweetBox.js\n");

/***/ }),

/***/ "./components/widgets.js":
/*!*******************************!*\
  !*** ./components/widgets.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_widgets_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/widgets.module.scss */ \"./styles/widgets.module.scss\");\n/* harmony import */ var _styles_widgets_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_widgets_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-twitter-embed */ \"react-twitter-embed\");\n/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/components/widgets.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Widgets() {\n  return __jsx(\"div\", {\n    className: _styles_widgets_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.widgets,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_widgets_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.widgets__input,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: _styles_widgets_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.widgets__searchIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"Search Twitter\",\n    type: \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), \"\\\"\"), __jsx(\"div\", {\n    className: _styles_widgets_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.widgets__widgetContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"What's happening?\"), __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__[\"TwitterTweetEmbed\"], {\n    tweetId: \"30985317521904\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__[\"TwitterTimelineEmbed\"], {\n    sourceType: \"profile\",\n    screeName: \"myTwitter\",\n    options: {\n      height: 400\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__[\"TwitterShareButton\"], {\n    url: \"https://twitch.com\",\n    options: {\n      text: \"#reactIsAwesome\",\n      via: \"Andres\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widgets);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMuanM/NTA3YiJdLCJuYW1lcyI6WyJXaWRnZXRzIiwic3R5bGVzIiwid2lkZ2V0cyIsIndpZGdldHNfX2lucHV0Iiwid2lkZ2V0c19fc2VhcmNoSWNvbiIsIndpZGdldHNfX3dpZGdldENvbnRhaW5lciIsImhlaWdodCIsInRleHQiLCJ2aWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixTQUNFO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELGtFQUFNLENBQUNFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVksYUFBUyxFQUFFRixrRUFBTSxDQUFDRyxtQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxlQUFXLEVBQUMsZ0JBQW5CO0FBQW9DLFFBQUksRUFBQyxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsT0FERixFQU1FO0FBQUssYUFBUyxFQUFFSCxrRUFBTSxDQUFDSSx3QkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFHRSxNQUFDLHFFQUFEO0FBQW1CLFdBQU8sRUFBRSxnQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBS0UsTUFBQyx3RUFBRDtBQUNFLGNBQVUsRUFBQyxTQURiO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxXQUFPLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFXRSxNQUFDLHNFQUFEO0FBQ0EsT0FBRyxFQUFFLG9CQURMO0FBRUEsV0FBTyxFQUFFO0FBQUNDLFVBQUksRUFBRSxpQkFBUDtBQUEwQkMsU0FBRyxFQUFFO0FBQS9CLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBTkYsQ0FERjtBQXdCRDs7QUFFY1Isc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dpZGdldHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvd2lkZ2V0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHtcbiAgVHdpdHRlclRpbWVsaW5lRW1iZWQsXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgVHdpdHRlclR3ZWV0RW1iZWQsXG59IGZyb20gXCJyZWFjdC10d2l0dGVyLWVtYmVkXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuXG5mdW5jdGlvbiBXaWRnZXRzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lkZ2V0c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZGdldHNfX2lucHV0fT5cbiAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPXtzdHlsZXMud2lkZ2V0c19fc2VhcmNoSWNvbn0gLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIFR3aXR0ZXJcIiB0eXBlPVwidGV4dFwiIC8+XCJcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZGdldHNfX3dpZGdldENvbnRhaW5lcn0+XG4gICAgICAgIDxoMj5XaGF0J3MgaGFwcGVuaW5nPzwvaDI+XG5cbiAgICAgICAgPFR3aXR0ZXJUd2VldEVtYmVkIHR3ZWV0SWQ9e1wiMzA5ODUzMTc1MjE5MDRcIn0gLz5cblxuICAgICAgICA8VHdpdHRlclRpbWVsaW5lRW1iZWRcbiAgICAgICAgICBzb3VyY2VUeXBlPVwicHJvZmlsZVwiXG4gICAgICAgICAgc2NyZWVOYW1lPVwibXlUd2l0dGVyXCJcbiAgICAgICAgICBvcHRpb25zPXt7IGhlaWdodDogNDAwIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvblxuICAgICAgICB1cmw9e1wiaHR0cHM6Ly90d2l0Y2guY29tXCJ9XG4gICAgICAgIG9wdGlvbnM9e3t0ZXh0OiBcIiNyZWFjdElzQXdlc29tZVwiLCB2aWE6IFwiQW5kcmVzXCJ9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/widgets.js\n");

/***/ }),

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  apiKey: \"AIzaSyCEKyNLpUNChRUpiTJ_wONc2h2d8msgttE\",\n  authDomain: \"project-libra-twitter.firebaseapp.com\",\n  databaseURL: \"https://project-libra-twitter.firebaseio.com\",\n  projectId: \"project-libra-twitter\",\n  storageBucket: \"project-libra-twitter.appspot.com\",\n  messagingSenderId: \"1007178103926\",\n  appId: \"1:1007178103926:web:002f246b6bf9e737ccb357\",\n  measurementId: \"G-4VHQ58P8YB\"\n};\n\nif (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n}\n\nconst db = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();\nconsole.log(db);\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9pbmRleC5qcz9jNTZiIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRSx5Q0FESztBQUViQyxZQUFVLEVBQUUsdUNBRkM7QUFHYkMsYUFBVyxFQUFFLDhDQUhBO0FBSWJDLFdBQVMsRUFBRSx1QkFKRTtBQUtiQyxlQUFhLEVBQUUsbUNBTEY7QUFNYkMsbUJBQWlCLEVBQUUsZUFOTjtBQU9iQyxPQUFLLEVBQUUsNENBUE07QUFRYkMsZUFBYSxFQUFFO0FBUkYsQ0FBZjs7QUFXQSxJQUFJLENBQUNDLCtDQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJGLGlEQUFRLENBQUNHLGFBQVQsQ0FBdUJaLE1BQXZCO0FBQ0Q7O0FBRUQsTUFBTWEsRUFBRSxHQUFHSiwrQ0FBUSxDQUFDSyxTQUFULEVBQVg7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFFZUEsaUVBQWYiLCJmaWxlIjoiLi9maXJlYmFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q0VLeU5McFVOQ2hSVXBpVEpfd09OYzJoMmQ4bXNndHRFXCIsXG4gIGF1dGhEb21haW46IFwicHJvamVjdC1saWJyYS10d2l0dGVyLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3Byb2plY3QtbGlicmEtdHdpdHRlci5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwicHJvamVjdC1saWJyYS10d2l0dGVyXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicHJvamVjdC1saWJyYS10d2l0dGVyLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMDcxNzgxMDM5MjZcIixcbiAgYXBwSWQ6IFwiMToxMDA3MTc4MTAzOTI2OndlYjowMDJmMjQ2YjZiZjllNzM3Y2NiMzU3XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy00VkhRNThQOFlCXCIsXG59O1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbn1cblxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbmNvbnNvbGUubG9nKGRiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ \"./components/container.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/feed */ \"./components/feed.js\");\n/* harmony import */ var _styles_styleIndex_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styleIndex.module.scss */ \"./styles/styleIndex.module.scss\");\n/* harmony import */ var _styles_styleIndex_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styleIndex_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/widgets */ \"./components/widgets.js\");\nvar _jsxFileName = \"/Users/andresnieves/Documents/React/project-libra/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Index = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Next Project - Home\")), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_styleIndex_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.app,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }), __jsx(_components_feed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }), __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwic3R5bGVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLHFFQUFNLENBQUNDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUtFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBUUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQUpGLENBREY7QUFtQkQsQ0FwQkQ7O0FBc0JlRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWluZXJcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCBGZWVkIGZyb20gXCIuLi9jb21wb25lbnRzL2ZlZWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZUluZGV4Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgV2lkZ2V0cyBmcm9tIFwiLi4vY29tcG9uZW50cy93aWRnZXRzXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5leHQgUHJvamVjdCAtIEhvbWU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHB9PlxuICAgICAgICAgIHsvKlNpZGViYXIgKi99XG4gICAgICAgICAgPFNpZGViYXIgLz5cblxuICAgICAgICAgIHsvKkZlZWQgKi99XG4gICAgICAgICAgPEZlZWQgLz5cblxuICAgICAgICAgIHsvKldpZGdldHMgKi99XG4gICAgICAgICAgPFdpZGdldHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/feed.module.scss":
/*!*********************************!*\
  !*** ./styles/feed.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"feed\": \"feed_feed__2OVRf\",\n\t\"feed__header\": \"feed_feed__header__3zzxV\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZmVlZC5tb2R1bGUuc2Nzcz9lOWUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvZmVlZC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZlZWRcIjogXCJmZWVkX2ZlZWRfXzJPVlJmXCIsXG5cdFwiZmVlZF9faGVhZGVyXCI6IFwiZmVlZF9mZWVkX19oZWFkZXJfXzN6enhWXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/feed.module.scss\n");

/***/ }),

/***/ "./styles/post.module.scss":
/*!*********************************!*\
  !*** ./styles/post.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"post\": \"post_post__3Ledx\",\n\t\"post__body\": \"post_post__body__2TJcL\",\n\t\"post__footer\": \"post_post__footer__R8U_E\",\n\t\"post__headerDescription\": \"post_post__headerDescription__2Zb_m\",\n\t\"post__headerText\": \"post_post__headerText__5bDpM\",\n\t\"post__badge\": \"post_post__badge__P_ORf\",\n\t\"post__headerSpecial\": \"post_post__headerSpecial__3Bqvp\",\n\t\"post__avatar\": \"post_post__avatar__jzMpS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvcG9zdC5tb2R1bGUuc2Nzcz8xOTg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfXzNMZWR4XCIsXG5cdFwicG9zdF9fYm9keVwiOiBcInBvc3RfcG9zdF9fYm9keV9fMlRKY0xcIixcblx0XCJwb3N0X19mb290ZXJcIjogXCJwb3N0X3Bvc3RfX2Zvb3Rlcl9fUjhVX0VcIixcblx0XCJwb3N0X19oZWFkZXJEZXNjcmlwdGlvblwiOiBcInBvc3RfcG9zdF9faGVhZGVyRGVzY3JpcHRpb25fXzJaYl9tXCIsXG5cdFwicG9zdF9faGVhZGVyVGV4dFwiOiBcInBvc3RfcG9zdF9faGVhZGVyVGV4dF9fNWJEcE1cIixcblx0XCJwb3N0X19iYWRnZVwiOiBcInBvc3RfcG9zdF9fYmFkZ2VfX1BfT1JmXCIsXG5cdFwicG9zdF9faGVhZGVyU3BlY2lhbFwiOiBcInBvc3RfcG9zdF9faGVhZGVyU3BlY2lhbF9fM0JxdnBcIixcblx0XCJwb3N0X19hdmF0YXJcIjogXCJwb3N0X3Bvc3RfX2F2YXRhcl9fanpNcFNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/post.module.scss\n");

/***/ }),

/***/ "./styles/sidebar.module.scss":
/*!************************************!*\
  !*** ./styles/sidebar.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sidebar\": \"sidebar_sidebar__2Ak-Q\",\n\t\"sidebar__twitterIcon\": \"sidebar_sidebar__twitterIcon__3rc0I\",\n\t\"sidebar__tweet\": \"sidebar_sidebar__tweet__Xr3eT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2lkZWJhci5tb2R1bGUuc2Nzcz9hMzhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9zaWRlYmFyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhclwiOiBcInNpZGViYXJfc2lkZWJhcl9fMkFrLVFcIixcblx0XCJzaWRlYmFyX190d2l0dGVySWNvblwiOiBcInNpZGViYXJfc2lkZWJhcl9fdHdpdHRlckljb25fXzNyYzBJXCIsXG5cdFwic2lkZWJhcl9fdHdlZXRcIjogXCJzaWRlYmFyX3NpZGViYXJfX3R3ZWV0X19YcjNlVFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/sidebar.module.scss\n");

/***/ }),

/***/ "./styles/sidebarOption.module.scss":
/*!******************************************!*\
  !*** ./styles/sidebarOption.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sidebarOption\": \"sidebarOption_sidebarOption__1mYd3\",\n\t\"MuiSvgIcon-root\": \"sidebarOption_MuiSvgIcon-root__1BSrG\",\n\t\"sidebarOption__active\": \"sidebarOption_sidebarOption__active__2YMrF\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2lkZWJhck9wdGlvbi5tb2R1bGUuc2Nzcz81ZTM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9zaWRlYmFyT3B0aW9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhck9wdGlvblwiOiBcInNpZGViYXJPcHRpb25fc2lkZWJhck9wdGlvbl9fMW1ZZDNcIixcblx0XCJNdWlTdmdJY29uLXJvb3RcIjogXCJzaWRlYmFyT3B0aW9uX011aVN2Z0ljb24tcm9vdF9fMUJTckdcIixcblx0XCJzaWRlYmFyT3B0aW9uX19hY3RpdmVcIjogXCJzaWRlYmFyT3B0aW9uX3NpZGViYXJPcHRpb25fX2FjdGl2ZV9fMllNckZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/sidebarOption.module.scss\n");

/***/ }),

/***/ "./styles/styleIndex.module.scss":
/*!***************************************!*\
  !*** ./styles/styleIndex.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"app\": \"styleIndex_app__1WGFv\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVJbmRleC5tb2R1bGUuc2Nzcz8zNDkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL3N0eWxlSW5kZXgubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcHBcIjogXCJzdHlsZUluZGV4X2FwcF9fMVdHRnZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/styleIndex.module.scss\n");

/***/ }),

/***/ "./styles/tweetBox.module.scss":
/*!*************************************!*\
  !*** ./styles/tweetBox.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"tweetBox\": \"tweetBox_tweetBox__2jExi\",\n\t\"tweetBox__input\": \"tweetBox_tweetBox__input__6LRLl\",\n\t\"tweetBox__imageInput\": \"tweetBox_tweetBox__imageInput__3jxGZ\",\n\t\"tweetBox__tweetButton\": \"tweetBox_tweetBox__tweetButton__X-ROW\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdHdlZXRCb3gubW9kdWxlLnNjc3M/NjRjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy90d2VldEJveC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInR3ZWV0Qm94XCI6IFwidHdlZXRCb3hfdHdlZXRCb3hfXzJqRXhpXCIsXG5cdFwidHdlZXRCb3hfX2lucHV0XCI6IFwidHdlZXRCb3hfdHdlZXRCb3hfX2lucHV0X182TFJMbFwiLFxuXHRcInR3ZWV0Qm94X19pbWFnZUlucHV0XCI6IFwidHdlZXRCb3hfdHdlZXRCb3hfX2ltYWdlSW5wdXRfXzNqeEdaXCIsXG5cdFwidHdlZXRCb3hfX3R3ZWV0QnV0dG9uXCI6IFwidHdlZXRCb3hfdHdlZXRCb3hfX3R3ZWV0QnV0dG9uX19YLVJPV1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/tweetBox.module.scss\n");

/***/ }),

/***/ "./styles/widgets.module.scss":
/*!************************************!*\
  !*** ./styles/widgets.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"widgets\": \"widgets_widgets__18jO8\",\n\t\"widgets__input\": \"widgets_widgets__input__1TCQh\",\n\t\"widgets__searchIcon\": \"widgets_widgets__searchIcon__3IPNK\",\n\t\"widgets__widgetContainer\": \"widgets_widgets__widgetContainer__aGEsM\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvd2lkZ2V0cy5tb2R1bGUuc2Nzcz80ZTJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL3dpZGdldHMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3aWRnZXRzXCI6IFwid2lkZ2V0c193aWRnZXRzX18xOGpPOFwiLFxuXHRcIndpZGdldHNfX2lucHV0XCI6IFwid2lkZ2V0c193aWRnZXRzX19pbnB1dF9fMVRDUWhcIixcblx0XCJ3aWRnZXRzX19zZWFyY2hJY29uXCI6IFwid2lkZ2V0c193aWRnZXRzX19zZWFyY2hJY29uX18zSVBOS1wiLFxuXHRcIndpZGdldHNfX3dpZGdldENvbnRhaW5lclwiOiBcIndpZGdldHNfd2lkZ2V0c19fd2lkZ2V0Q29udGFpbmVyX19hR0VzTVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/widgets.module.scss\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/icons/BookmarkBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/BookmarkBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/BookmarkBorder\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQm9va21hcmtCb3JkZXJcIj83NGNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9Cb29rbWFya0JvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Cb29rbWFya0JvcmRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/BookmarkBorder\n");

/***/ }),

/***/ "@material-ui/icons/ChatBubbleOutline":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/ChatBubbleOutline" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ChatBubbleOutline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZU91dGxpbmVcIj8yNjVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlT3V0bGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlT3V0bGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/ChatBubbleOutline\n");

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/FavoriteBorder\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIj8xYjMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/FavoriteBorder\n");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiPzI3NzgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Home\n");

/***/ }),

/***/ "@material-ui/icons/ListAlt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/ListAlt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ListAlt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiPzM5YWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0xpc3RBbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/ListAlt\n");

/***/ }),

/***/ "@material-ui/icons/MailOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MailOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/MailOutline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbE91dGxpbmVcIj8xOWU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9NYWlsT3V0bGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsT3V0bGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/MailOutline\n");

/***/ }),

/***/ "@material-ui/icons/MoreHoriz":
/*!***********************************************!*\
  !*** external "@material-ui/icons/MoreHoriz" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/MoreHoriz\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6XCI/M2UzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/MoreHoriz\n");

/***/ }),

/***/ "@material-ui/icons/NotificationsNone":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/NotificationsNone" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/NotificationsNone\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc05vbmVcIj9hMDk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zTm9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zTm9uZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/NotificationsNone\n");

/***/ }),

/***/ "@material-ui/icons/PermIdentity":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PermIdentity" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/PermIdentity\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVybUlkZW50aXR5XCI/YTJhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVybUlkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blcm1JZGVudGl0eVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/PermIdentity\n");

/***/ }),

/***/ "@material-ui/icons/Repeat":
/*!********************************************!*\
  !*** external "@material-ui/icons/Repeat" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Repeat\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0XCI/NTQxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcGVhdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Repeat\n");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Search\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI/N2JkZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Search\n");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Share\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmVcIj9mMTA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9TaGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TaGFyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Share\n");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Twitter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiPzg0ZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Twitter\n");

/***/ }),

/***/ "@material-ui/icons/VerifiedUser":
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/VerifiedUser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCI/NDA2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/VerifiedUser\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-flip-move":
/*!**********************************!*\
  !*** external "react-flip-move" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-flip-move\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mbGlwLW1vdmVcIj9mMzdkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWZsaXAtbW92ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZsaXAtbW92ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-flip-move\n");

/***/ }),

/***/ "react-twitter-embed":
/*!**************************************!*\
  !*** external "react-twitter-embed" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-twitter-embed\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10d2l0dGVyLWVtYmVkXCI/OTNmYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC10d2l0dGVyLWVtYmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHdpdHRlci1lbWJlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-twitter-embed\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });