/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/list.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/list.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* line 10, ../myproject/sass/list.scss */\\r\\n.product-list {\\r\\n  padding-top: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n/* line 12, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-title {\\r\\n  border-top: 1px solid #ccc;\\r\\n}\\r\\n/* line 14, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-title ul {\\r\\n  padding: 0 3px;\\r\\n}\\r\\n/* line 16, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-title ul li {\\r\\n  float: left;\\r\\n  padding-left: 15px;\\r\\n  line-height: 3.3em;\\r\\n  text-align: center;\\r\\n}\\r\\n/* line 21, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-title ul li a {\\r\\n  display: block;\\r\\n  font-size: 12px;\\r\\n  color: #999999;\\r\\n  font-weight: 700;\\r\\n}\\r\\n/* line 27, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-title ul li a.current {\\r\\n  color: #000;\\r\\n}\\r\\n/* line 30, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-title ul li i {\\r\\n  font-size: 14px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n/* line 35, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-title ul li:first-child {\\r\\n  padding-left: 5px;\\r\\n}\\r\\n/* line 40, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box {\\r\\n  display: flex;\\r\\n  margin-right: -15px;\\r\\n  margin-left: -15px;\\r\\n  flex-wrap: wrap;\\r\\n  min-height: 451px;\\r\\n}\\r\\n/* line 46, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item {\\r\\n  text-align: center;\\r\\n  flex: 0 0 25%;\\r\\n  max-width: 25%;\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  min-height: 1px;\\r\\n  padding-right: 15px;\\r\\n  padding-left: 15px;\\r\\n  margin-top: 15px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n/* line 57, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item .item-thumb {\\r\\n  padding: 20px;\\r\\n  border-radius: 10px;\\r\\n  border: 1px solid #dee2e6;\\r\\n}\\r\\n/* line 61, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item .item-thumb img {\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n  max-height: 249px;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n/* line 68, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item .item-thumb:hover {\\r\\n  box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n/* line 71, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item .item-detail {\\r\\n  padding: 20px 0;\\r\\n  margin: 0 3px;\\r\\n}\\r\\n/* line 73, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item .item-detail a {\\r\\n  font-size: 14px;\\r\\n  color: #666666;\\r\\n  font-weight: normal;\\r\\n  display: -webkit-box;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-line-clamp: 2;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n/* line 82, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item .item-detail a span {\\r\\n  color: red;\\r\\n}\\r\\n/* line 86, ../myproject/sass/list.scss */\\r\\n.product-list .product-list-box .product-box-item .item-detail .item-price {\\r\\n  font-size: 13px;\\r\\n  font-weight: 700;\\r\\n  margin: 5px 0;\\r\\n}\\r\\n.pagination {\\r\\n  margin: 25px 0;\\r\\n}\\r\\n.product-list .pagination span {\\r\\n  display: inline-block;\\r\\n  height: 28px;\\r\\n  padding: 0 15px;\\r\\n  line-height: 25px;\\r\\n  margin-right: 10px;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.product-list .pagination span.disabled,\\r\\n.product-list .pagination span.currentPage {\\r\\n  border: none;\\r\\n  cursor: default;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/list.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/list.css":
/*!**************************!*\
  !*** ./src/css/list.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./list.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/list.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/list.css?");

/***/ }),

/***/ "./src/js/list.js":
/*!************************!*\
  !*** ./src/js/list.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n__webpack_require__(/*! ../css/list.css */ \"./src/css/list.css\");\n\n(function () {\n  var $ = {\n    ajax: function ajax(options) {\n      // 如果 options 没有传, 或者 options 传的不是一个对象, 直接 return\n      if (!options || _typeof(options) != 'object') {\n        return;\n      } // 如果传的是 post, 就按post处理\n      // 只要传的不是 post, 按 get 处理, 效果: 默认 get\n\n\n      var type = options.type === 'post' ? 'post' : 'get'; // url 必须传\n\n      var url = options.url;\n\n      if (!url) {\n        return;\n      } // 只要传的不是 false, 就按 true 处理, 效果: 默认true\n\n\n      var async = options.async === false ? false : true; // 传递的参数\n\n      var data = options.data; // 需要一个方法, 将 data 对象转换成 params 字符串\n      // parse 方法, 将 对象 转成 username=pp&password=123456 的格式\n      // $.ajax() 方法调用模式, 谁调用 this 就指向谁\n      // this 就指向 $\n\n      var params = this.parse(data);\n      var dataType = options.dataType;\n      var success = options.success; // 成功的函数\n\n      var error = options.error; // 失败的函数\n      // 发送请求\n\n      var xhr = new XMLHttpRequest(); // 遵循 http 协议\n      // 1. 请求行, get请求需要拼接上参数  06-get.php ? username=pp\n\n      if (type === 'get') {\n        url = url + '?' + params;\n        params = null; // 如果参数已经拼接在地址栏了, 置为 null\n      }\n\n      xhr.open(type, url, async); // 2. 请求头, post请求需要设置请求头\n\n      if (type === 'post') {\n        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');\n      } // 3. 请求体, post请求需要传参, get请求传 null\n\n\n      xhr.send(params); // 添加监听, 处理响应\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          if (xhr.status === 200) {\n            // 响应成功\n            // 根据响应的类型不同, 需要做不同的处理 xml/json/text\n            var result = null;\n\n            if (dataType === 'xml') {\n              result = xhr.responseXML;\n            } else if (dataType === 'json') {\n              // 如果是 json字符串, 将字符串解析成 数组或对象\n              result = JSON.parse(xhr.responseText);\n            } else {\n              result = xhr.responseText;\n            }\n\n            success && success(result);\n          } else {\n            // 响应失败\n            error && error(xhr.responseText);\n          }\n        }\n      };\n    },\n    parse: function parse(obj) {\n      if (!obj || _typeof(obj) != 'object') {\n        return null;\n      }\n\n      var arr = []; // 遍历对象\n\n      for (var k in obj) {\n        arr.push(k + '=' + obj[k]);\n      } // [ \"username=pp\", \"password=123456\" ]\n\n\n      return arr.join('&');\n    }\n  };\n  var keyword = getQueryVariable('keyword');\n  document.querySelector('.search-input').value = decodeURI(keyword);\n  document.querySelector('.xiaomi').style.display = 'none';\n  var pageSize = 12;\n  var currentPage = 1;\n  var pagination = document.querySelector('#pagination');\n  var sortByUp = document.querySelector('.product-list-title a.up');\n  var sortByDown = document.querySelector('.product-list-title a.down');\n  var sortBySynthesis = document.querySelector('.product-list-title a.synthesis'); // $.ajax({\n  //   url:\n  //     'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/query',\n  //   data: {\n  //     keyword: '手机',\n  //     size: 12,\n  //     page: 2\n  //   },\n  //   success: function(info) {\n  //     console.log(info)\n  //   }\n  // })\n\n  $.ajax({\n    // url: '/mock/db.json',\n    // url:\n    //   'http://106.54.118.86:7300/mock/5e42acfd7b1ef5069aae3d8b/badpear/productData',\n    url: 'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/proList',\n    dataType: 'json',\n    // 成功的回调函数\n    data: {\n      keyword: keyword,\n      size: pageSize,\n      page: currentPage\n    },\n    success: function success(info) {\n      var productData = info.data.keyword.keywordData;\n      console.log(productData);\n\n      sortByUp.onclick = function () {\n        sortByDown.classList.remove('current');\n        sortBySynthesis.classList.remove('current');\n        sortByUp.classList.add('current');\n        sortData(productData, 'price', 'up');\n        render(productData);\n        document.querySelector('.firstPage').classList.add('disabled');\n        document.querySelector('.currentPage').classList.remove('currentPage');\n        document.querySelector('span[data-value=\"1\"]').classList.add('currentPage');\n      };\n\n      sortByDown.onclick = function () {\n        sortByUp.classList.remove('current');\n        sortBySynthesis.classList.remove('current');\n        sortByDown.classList.add('current');\n        sortData(productData, 'price', 'down');\n        render(productData);\n      };\n\n      sortBySynthesis.onclick = function () {\n        sortByDown.classList.remove('current');\n        sortByUp.classList.remove('current');\n        sortBySynthesis.classList.add('current');\n        sortData(productData, 'rate', 'down');\n        render(productData);\n      };\n\n      sortData(productData, 'rate', 'down');\n      render(productData);\n      var total = info.data.keyword.total;\n      var totalPage = Math.ceil(total / pageSize);\n\n      if (totalPage > 1) {\n        pagePlug(pagination, pageSize, function (currentPage) {\n          $.ajax({\n            url: 'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/proList',\n            dataType: 'json',\n            // 成功的回调函数\n            data: {\n              keyword: keyword,\n              size: pageSize,\n              page: currentPage\n            },\n            success: function success(info) {\n              render(info.data.keyword.keywordData);\n              document.documentElement.scrollTop = 0;\n            }\n          });\n        });\n      } //分页\n\n\n      function pagePlug(box, pageSize, callback) {\n        var pagehtml = '';\n\n        if (currentPage == 1) {\n          pagehtml += \"<span class=\\\"disabled firstPage\\\"><</span>\";\n        } else {\n          pagehtml += \"<span class=\\\"firstPage\\\"><</span>\";\n        }\n\n        for (var i = 1; i <= totalPage; i++) {\n          if (i == currentPage) {\n            pagehtml += \"<span class=\\\"currentPage\\\" data-value = \".concat(i, \">\").concat(i, \"</span>\");\n          } else {\n            pagehtml += \"<span data-value = \".concat(i, \">\").concat(i, \"</span>\");\n          }\n        }\n\n        if (currentPage == totalPage) {\n          pagehtml += \"<span class=\\\"disabled lastPage\\\" >></span>\";\n        } else {\n          pagehtml += \"<span class=\\\"lastPage\\\" >></span>\";\n        }\n\n        pagination.innerHTML = pagehtml;\n        var pageButton = Array.from(document.querySelectorAll('#pagination span'));\n        var firstPage = document.querySelector('.firstPage');\n        var lastPage = document.querySelector('.lastPage');\n\n        for (var i = 0; i < pageButton.length; i++) {\n          ;\n\n          (function (i) {\n            if (i != 0 && i != pageButton.length - 1) {\n              pageButton[i].onclick = function () {\n                if (pageButton[i].getAttribute('class') == 'currentPage') {\n                  return;\n                }\n\n                document.querySelector('.currentPage').classList.remove('currentPage');\n                currentPage = pageButton[i].dataset.value;\n                pageButton[i].classList.add('currentPage');\n\n                if (currentPage == 1) {\n                  firstPage.classList.add('disabled');\n                  lastPage.classList.remove('disabled');\n                } else if (currentPage == totalPage) {\n                  firstPage.classList.remove('disabled');\n                  lastPage.classList.add('disabled');\n                } else {\n                  firstPage.classList.remove('disabled');\n                  lastPage.classList.remove('disabled');\n                }\n\n                callback(currentPage);\n              };\n            }\n          })(i);\n        }\n\n        firstPage.onclick = function () {\n          if (firstPage.getAttribute('class').indexOf('disabled') != -1) {\n            return;\n          }\n\n          currentPage = 1;\n          document.querySelector('.currentPage').classList.remove('currentPage');\n          pageButton[1].classList.add('currentPage');\n          firstPage.classList.add('disabled');\n          callback(currentPage);\n        };\n\n        lastPage.onclick = function () {\n          if (lastPage.getAttribute('class').indexOf('disabled') != -1) {\n            return;\n          }\n\n          currentPage = totalPage;\n          document.querySelector('.currentPage').classList.remove('currentPage');\n          pageButton[totalPage].classList.add('currentPage');\n          lastPage.classList.add('disabled');\n          callback(currentPage);\n        };\n      } //商品渲染\n\n\n      function render(value) {\n        var html = '';\n\n        for (var i = 0; i < value.length; i++) {\n          var title = keywordStyle(value[i].title, 'span', keyword);\n          html += \"<div class=\\\"product-box-item\\\">\";\n          html += \"<div class=\\\"item-thumb\\\">\\n        <a href=\\\"./details.html?productId=\".concat(value[i].id, \"\\\" target=\\\"_blank\\\">\\n          <img src=\\\"http://badpear-1300271589.cos.ap-shanghai.myqcloud.com\").concat(value[i].thumbnail[0], \"\\\" />\\n        </a>\\n      </div>\\n      <div class=\\\"item-detail\\\">\\n        <h3 class=\\\"detail-title\\\">\\n          <a href=\\\"./details.html?productId=\").concat(value[i].id, \"\\\" target=\\\"_blank\\\"\\n            >\").concat(title, \"</a\\n          >\\n        </h3>\\n        <div class=\\\"item-rating\\\">\");\n\n          for (var h = 0; h < value[i].rate; h++) {\n            html += \"<span class=\\\"star active\\\"></span> \";\n          }\n\n          for (var s = 0; s < 5 - value[i].rate; s++) {\n            html += \"<span class=\\\"star\\\"></span> \";\n          }\n\n          html += \"\\n        </div>\\n        <div class=\\\"item-price\\\">\\uFFE5\".concat(value[i].price, \"</div>\\n      </div>\");\n          html += \"</div>\";\n        }\n\n        var productListBox = document.querySelector('#productListBox');\n        productListBox.innerHTML = html;\n      } //商品排序\n\n\n      function sortData(arr, field, uod) {\n        arr.sort(function sortId(a, b) {\n          if (uod === 'up') {\n            return a[field] - b[field];\n          } else if (uod === 'down') {\n            return b[field] - a[field];\n          }\n        });\n      } //商品关键词变色\n\n\n      function keywordStyle(str, tag, keyword) {\n        keyword = decodeURI(keyword);\n        var reg = RegExp(keyword, 'g');\n        return str.replace(reg, '<' + tag + '>' + keyword + '</' + tag + '>');\n      }\n    }\n  });\n\n  function getQueryVariable(variable) {\n    var query = window.location.search.substring(1);\n    var vars = query.split('&');\n\n    for (var i = 0; i < vars.length; i++) {\n      var pair = vars[i].split('=');\n\n      if (pair[0] == variable) {\n        return pair[1];\n      }\n    }\n\n    return false;\n  }\n})();\n\n//# sourceURL=webpack:///./src/js/list.js?");

/***/ })

/******/ });