/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @Author: qinyushan
 * @Date: 2022-06-14 16:15:04
 * @LastEditTime: 2022-06-14 17:04:00
 * @LastEditors: qinyushan
 * @FilePath: \Cat\src\assets\location.js
 * @Description: 百度地图定位
 */
// let baiduMap = require('baidumap');
// let BMap = baiduMap.create({ 'ak': '8tmLINbhCmz0hCPo1u10eih5L7p5Xk9C' });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    return new Promise(resolve => {
        let geolocation = new BMap.Geolocation({
            maximumAge: 10  // 清除缓存
        });

        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function (r) {
            console.log("经纬度坐标：", r.point);
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                // map.addOverlay(mk);//标出所在地
                // map.panTo(r.point);//地图中心移动
                //alert('您的位置：'+r.point.lng+','+r.point.lat);
                var point = new BMap.Point(r.point.lng, r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
                var gc = new BMap.Geocoder();
                gc.getLocation(point, function (rs) {
                    resolve(rs.address)
                });
            } else {
                alert("failed" + this.getStatus());
            }
        }, { enableHighAccuracy: true });

    })

});


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @Author: qinyushan
 * @Date: 2022-06-14 16:05:36
 * @LastEditTime: 2022-06-14 17:10:32
 * @LastEditors: qinyushan
 * @FilePath: \Cat\src\assets\email.js
 * @Description: 发送邮件模块
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((templateParams) => {

    emailjs.init("yd_HaLFcgs7oYWAKe");
    emailjs.send('service_0opwp5p', 'template_zm485ff', templateParams)
        .then(function (response) {
            console.log('EMAILSUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('EMAILFAILED...', error);
        });
});

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 4 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 5 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 6 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 9 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 10 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background: #febd15;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-family: \"幼圆\";\r\n  font-size: 4.5em;\r\n  color: #ecf0f1;\r\n}\r\nbody a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\nbody div {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\nbody > div {\r\n  display: inline-block;\r\n}\r\nbody h2 {\r\n  font-size: 0.7em;\r\n}\r\nbody h3 {\r\n  font-size: 0.5em;\r\n}\r\nbody h4 {\r\n  font-size: 0.3em;\r\n  margin-bottom: 70px;\r\n}\r\n.text{\r\n    z-index: 99;\r\n    /* width: vw - 20px; */\r\n}\r\n.btn {\r\n  font-size: 0.55em;\r\n  font-weight: 600;\r\n  line-height: 1.9em;\r\n  display: block;\r\n  border: solid 4px rgb(255, 210, 86);\r\n  border-radius: 20px;\r\n  padding: 0 36px 0 24px;\r\n}\r\n\r\n.btn:last-of-type {\r\n  margin-top: 18px;\r\n}\r\n.tiger {\r\n  -webkit-border-radius: 35% 35% 0 0;\r\n  -khtml-border-radius: 35% 35% 0 0;\r\n  -moz-border-radius: 35% 35% 0 0;\r\n  -ms-border-radius: 35% 35% 0 0;\r\n  -o-border-radius: 35% 35% 0 0;\r\n  border-radius: 35% 35% 0 0;\r\n  background: #f47c23;\r\n  width: 100%;\r\n  height: 350px;\r\n}\r\n.tiger .ear-block {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100px;\r\n  top: -70px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.tiger .ear-block .ear {\r\n  -webkit-border-radius: 100%;\r\n  -khtml-border-radius: 100%;\r\n  -moz-border-radius: 100%;\r\n  -ms-border-radius: 100%;\r\n  -o-border-radius: 100%;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  height: 100px;\r\n  width: 100px;\r\n  background: #f47c23;\r\n}\r\n.tiger .ear-block .ear:first-child {\r\n  -webkit-animation: twink-L 2s ease infinite;\r\n  -khtml-animation: twink-L 2s ease infinite;\r\n  -moz-animation: twink-L 2s ease infinite;\r\n  -ms-animation: twink-L 2s ease infinite;\r\n  -o-animation: twink-L 2s ease infinite;\r\n  animation: twink-L 2s ease infinite;\r\n  left: 0;\r\n}\r\n.tiger .ear-block .ear:last-child {\r\n  -webkit-animation: twink-R 2s ease infinite;\r\n  -khtml-animation: twink-R 2s ease infinite;\r\n  -moz-animation: twink-R 2s ease infinite;\r\n  -ms-animation: twink-R 2s ease infinite;\r\n  -o-animation: twink-R 2s ease infinite;\r\n  animation: twink-R 2s ease infinite;\r\n  right: 0;\r\n}\r\n.tiger .stripes-block {\r\n  -webkit-border-radius: 35%;\r\n  -khtml-border-radius: 35%;\r\n  -moz-border-radius: 35%;\r\n  -ms-border-radius: 35%;\r\n  -o-border-radius: 35%;\r\n  border-radius: 35%;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 0;\r\n}\r\n.tiger .stripes-block .stripes {\r\n  position: absolute;\r\n  z-index: 0;\r\n}\r\n.tiger .stripes-block .stripes:before, .tiger .stripes-block .stripes:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 60px solid #0c160f;\r\n  border-left: 45px solid transparent;\r\n}\r\n.tiger .stripes-block .stripes:after {\r\n  left: 45px;\r\n  border-top-width: 45px;\r\n  border-left-width: 33.75px;\r\n}\r\n.tiger .stripes-block .stripes:first-child {\r\n  left: 25%;\r\n}\r\n.tiger .stripes-block .stripes:last-child {\r\n  -webkit-transform: scaleX(-1);\r\n  -khtml-transform: scaleX(-1);\r\n  -moz-transform: scaleX(-1);\r\n  -ms-transform: scaleX(-1);\r\n  -o-transform: scaleX(-1);\r\n  transform: scaleX(-1);\r\n  right: 25%;\r\n}\r\n.tiger .eyes-block {\r\n  margin: auto;\r\n  width: 47%;\r\n  height: 90px;\r\n  background: #ed6821;\r\n  top: 60px;\r\n}\r\n.tiger .eyes-block:before, .tiger .eyes-block:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  -webkit-border-radius: 100%;\r\n  -khtml-border-radius: 100%;\r\n  -moz-border-radius: 100%;\r\n  -ms-border-radius: 100%;\r\n  -o-border-radius: 100%;\r\n  border-radius: 100%;\r\n  height: 90px;\r\n  width: 90px;\r\n  background: #ed6821;\r\n}\r\n.tiger .eyes-block:before {\r\n  left: -45px;\r\n}\r\n.tiger .eyes-block:after {\r\n  right: -45px;\r\n}\r\n.tiger .eyes-block .eye {\r\n  -webkit-border-radius: 100%;\r\n  -khtml-border-radius: 100%;\r\n  -moz-border-radius: 100%;\r\n  -ms-border-radius: 100%;\r\n  -o-border-radius: 100%;\r\n  border-radius: 100%;\r\n  -webkit-animation: blink 3s ease 1s infinite;\r\n  -khtml-animation: blink 3s ease 1s infinite;\r\n  -moz-animation: blink 3s ease 1s infinite;\r\n  -ms-animation: blink 3s ease 1s infinite;\r\n  -o-animation: blink 3s ease 1s infinite;\r\n  animation: blink 3s ease 1s infinite;\r\n  top: 22.5px;\r\n  position: absolute;\r\n  width: 45px;\r\n  height: 45px;\r\n  background: #001837;\r\n  z-index: 1;\r\n}\r\n.tiger .eyes-block .eye:first-child {\r\n  left: -22.5px;\r\n}\r\n.tiger .eyes-block .eye:last-child {\r\n  right: -22.5px;\r\n}\r\n.tiger .nose {\r\n  position: absolute;\r\n  top: 60px;\r\n  left: 35.5%;\r\n  z-index: 1;\r\n}\r\n.tiger .nose:before, .tiger .nose:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n}\r\n.tiger .nose:before {\r\n  height: 0;\r\n  width: 40px;\r\n  border-bottom: 90px solid #f4bc13;\r\n  border-left: 30px solid transparent;\r\n  border-right: 30px solid transparent;\r\n}\r\n.tiger .nose:after {\r\n  top: 90px;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 50px solid transparent;\r\n  border-right: 50px solid transparent;\r\n  border-top: 45px solid #ed6821;\r\n}\r\n.tiger .cheek-block {\r\n  -webkit-border-radius: 35%;\r\n  -khtml-border-radius: 35%;\r\n  -moz-border-radius: 35%;\r\n  -ms-border-radius: 35%;\r\n  -o-border-radius: 35%;\r\n  border-radius: 35%;\r\n  position: absolute;\r\n  top: 0;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 0;\r\n}\r\n.tiger .cheek-block .cheek_1, .tiger .cheek-block .cheek_2 {\r\n  top: 130px;\r\n}\r\n.tiger .cheek-block .cheek_1:before, .tiger .cheek-block .cheek_1:after, .tiger .cheek-block .cheek_2:before, .tiger .cheek-block .cheek_2:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-bottom: 50px solid #001837;\r\n}\r\n.tiger .cheek-block .cheek_1:after, .tiger .cheek-block .cheek_2:after {\r\n  top: 50px;\r\n  border-bottom-width: 40px;\r\n}\r\n.tiger .cheek-block .cheek_1:before, .tiger .cheek-block .cheek_1:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  border-right: 70px solid transparent;\r\n}\r\n.tiger .cheek-block .cheek_1:after {\r\n  border-right-width: 50px;\r\n}\r\n.tiger .cheek-block .cheek_2:before, .tiger .cheek-block .cheek_2:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  border-left: 70px solid transparent;\r\n}\r\n.tiger .cheek-block .cheek_2:after {\r\n  border-left-width: 50px;\r\n}\r\n.tiger .mouth-block {\r\n  width: 55%;\r\n  height: 100%;\r\n  top: 60px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n.tiger .mouth-block .skin:before, .tiger .mouth-block .skin:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  position: relative;\r\n  -webkit-border-radius: 100%;\r\n  -khtml-border-radius: 100%;\r\n  -moz-border-radius: 100%;\r\n  -ms-border-radius: 100%;\r\n  -o-border-radius: 100%;\r\n  border-radius: 100%;\r\n  -webkit-transform: rotate(-45deg);\r\n  -khtml-transform: rotate(-45deg);\r\n  -moz-transform: rotate(-45deg);\r\n  -ms-transform: rotate(-45deg);\r\n  -o-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n  border: 90px solid;\r\n  margin: auto;\r\n  border-color: transparent transparent #fffbfd #fffbfd;\r\n  top: -95px;\r\n}\r\n.tiger .mouth-block .skin:after {\r\n  border-width: 95px;\r\n  top: -210px;\r\n}\r\n.tiger .mouth-block .mouth {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n}\r\n.tiger .mouth-block .mouth .hole {\r\n  -webkit-border-radius: 100%;\r\n  -khtml-border-radius: 100%;\r\n  -moz-border-radius: 100%;\r\n  -ms-border-radius: 100%;\r\n  -o-border-radius: 100%;\r\n  border-radius: 100%;\r\n  -webkit-transform: rotate(-45deg);\r\n  -khtml-transform: rotate(-45deg);\r\n  -moz-transform: rotate(-45deg);\r\n  -ms-transform: rotate(-45deg);\r\n  -o-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n  width: 0;\r\n  height: 0;\r\n  border: 50px solid;\r\n  margin: auto;\r\n  border-color: transparent transparent #001837 #001837;\r\n  top: 10px;\r\n}\r\n.tiger .mouth-block .mouth .teeth {\r\n  margin: auto;\r\n  width: 30%;\r\n  top: -40px;\r\n}\r\n.tiger .mouth-block .mouth .teeth:before, .tiger .mouth-block .mouth .teeth:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 12px solid transparent;\r\n  border-right: 12px solid transparent;\r\n  border-top: 20px solid #e6e4e6;\r\n}\r\n.tiger .mouth-block .mouth .teeth:before {\r\n  left: 0;\r\n}\r\n.tiger .mouth-block .mouth .teeth:after {\r\n  right: 0;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n  0% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  2.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  5% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  7.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  10% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@-moz-keyframes blink {\r\n  0% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  2.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  5% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  7.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  10% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@-o-keyframes blink {\r\n  0% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  2.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  5% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  7.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  10% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@keyframes blink {\r\n  0% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  2.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  5% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n  7.5% {\r\n    -webkit-transform: scaleY(0);\r\n    -khtml-transform: scaleY(0);\r\n    -moz-transform: scaleY(0);\r\n    -ms-transform: scaleY(0);\r\n    -o-transform: scaleY(0);\r\n    transform: scaleY(0);\r\n  }\r\n  10% {\r\n    -webkit-transform: scaleY(1);\r\n    -khtml-transform: scaleY(1);\r\n    -moz-transform: scaleY(1);\r\n    -ms-transform: scaleY(1);\r\n    -o-transform: scaleY(1);\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@-webkit-keyframes twink-L {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 100% 100%;\r\n    -khtml-transform-origin: 100% 100%;\r\n    -moz-transform-origin: 100% 100%;\r\n    -ms-transform-origin: 100% 100%;\r\n    -o-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@-moz-keyframes twink-L {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 100% 100%;\r\n    -khtml-transform-origin: 100% 100%;\r\n    -moz-transform-origin: 100% 100%;\r\n    -ms-transform-origin: 100% 100%;\r\n    -o-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@-o-keyframes twink-L {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 100% 100%;\r\n    -khtml-transform-origin: 100% 100%;\r\n    -moz-transform-origin: 100% 100%;\r\n    -ms-transform-origin: 100% 100%;\r\n    -o-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@keyframes twink-L {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 100% 100%;\r\n    -khtml-transform-origin: 100% 100%;\r\n    -moz-transform-origin: 100% 100%;\r\n    -ms-transform-origin: 100% 100%;\r\n    -o-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(-10deg);\r\n    -khtml-transform: rotate(-10deg);\r\n    -moz-transform: rotate(-10deg);\r\n    -ms-transform: rotate(-10deg);\r\n    -o-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@-webkit-keyframes twink-R {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 0 100%;\r\n    -khtml-transform-origin: 0 100%;\r\n    -moz-transform-origin: 0 100%;\r\n    -ms-transform-origin: 0 100%;\r\n    -o-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@-moz-keyframes twink-R {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 0 100%;\r\n    -khtml-transform-origin: 0 100%;\r\n    -moz-transform-origin: 0 100%;\r\n    -ms-transform-origin: 0 100%;\r\n    -o-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@-o-keyframes twink-R {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 0 100%;\r\n    -khtml-transform-origin: 0 100%;\r\n    -moz-transform-origin: 0 100%;\r\n    -ms-transform-origin: 0 100%;\r\n    -o-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@keyframes twink-R {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 0 100%;\r\n    -khtml-transform-origin: 0 100%;\r\n    -moz-transform-origin: 0 100%;\r\n    -ms-transform-origin: 0 100%;\r\n    -o-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n  }\r\n  5% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotate(10deg);\r\n    -khtml-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n    transform: rotate(10deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(0deg);\r\n    -khtml-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 12 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _assets_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/*
 * @Author: qinyushan
 * @Date: 2022-04-08 15:20:25
 * @LastEditTime: 2022-06-14 17:20:04
 * @LastEditors: qinyushan
 * @FilePath: \Cat\src\index.js
 * @Description:
 */




window.onload = function () {

    (0,_assets_location__WEBPACK_IMPORTED_MODULE_0__["default"])().then(res => {

        (0,_assets_email__WEBPACK_IMPORTED_MODULE_1__["default"])({
            location: res
        })
    })

};

})();

/******/ })()
;