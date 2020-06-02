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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks_task3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/task3 */ \"./tasks/task3.js\");\n// import BeachParty from \"../tasks/task1\";\n // BeachParty();\n\nObject(_tasks_task3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./tasks/task3.js":
/*!************************!*\
  !*** ./tasks/task3.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { \"static\": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def[\"static\"] ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar Work1 = function Work1() {\n  function Show(_ref) {\n    var target = _ref.target,\n        name = _ref.name,\n        descriptor = _ref.descriptor;\n    var originFn = descriptor.value;\n\n    descriptor.value = function () {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      for (var i = 0; i < args.length; i++) {\n        if (typeof args[i] !== 'number' && !isNaN(Number(args[i]))) {\n          args[i] = Number(args[i]);\n        } else if (typeof args[i] === 'number') {\n          continue;\n        } else {\n          console.error('The argument(s) is wrong! Please, write the number.');\n          return;\n        }\n      }\n\n      console.log(\"Arguments: \".concat(args));\n      console.log(\"Final result: \".concat(originFn.apply(this, args)));\n      return this;\n    };\n  }\n\n  var CoolMath = _decorate(null, function (_initialize) {\n    var CoolMath = function CoolMath() {\n      _classCallCheck(this, CoolMath);\n\n      _initialize(this);\n    };\n\n    return {\n      F: CoolMath,\n      d: [{\n        kind: \"method\",\n        decorators: [Show],\n        key: \"addNumbers\",\n        value: function addNumbers(a, b) {\n          return a + b;\n        }\n      }, {\n        kind: \"method\",\n        decorators: [Show],\n        key: \"multiplyNumbers\",\n        value: function multiplyNumbers(a, b) {\n          return a * b;\n        }\n      }, {\n        kind: \"method\",\n        decorators: [Show],\n        key: \"minusNumbers\",\n        value: function minusNumbers(a, b) {\n          return a - b;\n        }\n      }]\n    };\n  });\n\n  var Calcul = new CoolMath();\n  var x = Calcul.addNumbers(2, 2);\n  var y = Calcul.multiplyNumbers(\"10\", \"2\");\n  var z = Calcul.minusNumbers(10, 2);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work1);\n\n//# sourceURL=webpack:///./tasks/task3.js?");

/***/ })

/******/ });