(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../handler.js":
/*!***************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/handler.js ***!
  \***************************************************************************************/
/*! exports provided: createTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTask", function() { return createTask; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_response_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/response-lib */ "../../../util/response-lib.js");
/* harmony import */ var _services_taskservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/taskservice */ "../../../services/taskservice.js");



const taskService = new _services_taskservice__WEBPACK_IMPORTED_MODULE_2__["default"]();
async function createTask(event, context) {
  try {
    const data = JSON.parse(event.body);
    const taskName = data.name;
    const result = await taskService.createNewTask(taskName);
    return Object(_util_response_lib__WEBPACK_IMPORTED_MODULE_1__["success"])({
      'data': result
    });
  } catch (err) {
    return Object(_util_response_lib__WEBPACK_IMPORTED_MODULE_1__["failure"])(err);
  }
}
;

/***/ }),

/***/ "../../../models/Task.js":
/*!*******************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/models/Task.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! joi */ "../../joi/lib/index.js");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_1__);



function Task(opts) {
  const validationError = joi__WEBPACK_IMPORTED_MODULE_1___default.a.validate(opts, {
    id: joi__WEBPACK_IMPORTED_MODULE_1___default.a.string().required(),
    name: joi__WEBPACK_IMPORTED_MODULE_1___default.a.string().required(),
    slug: joi__WEBPACK_IMPORTED_MODULE_1___default.a.string().regex(/^\S+$/)
  }).error;

  if (validationError !== null) {
    throw validationError;
  }

  Object.assign(this, opts);
}

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ }),

/***/ "../../../services/taskservice.js":
/*!****************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/services/taskservice.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Task */ "../../../models/Task.js");
/* harmony import */ var _util_dynamodb_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dynamodb-lib */ "../../../util/dynamodb-lib.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "../../uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);




const tasksTableName = "tasks";

function TaskService(opts) {
  Object.assign(this, opts);
}

TaskService.prototype = {
  createNewTask
};

async function createNewTask(taskName) {
  const taskId = uuid__WEBPACK_IMPORTED_MODULE_3___default.a.v1();
  const task = new _models_Task__WEBPACK_IMPORTED_MODULE_1__["default"]({
    'id': taskId,
    'name': taskName
  });
  const call = "put";
  const taskItem = {
    id: task.id,
    name: task.name,
    createdAt: Date.now()
  };
  const params = {
    TableName: tasksTableName,
    Item: taskItem
  };
  await _util_dynamodb_lib__WEBPACK_IMPORTED_MODULE_2__["call"](call, params);
  return taskItem;
}

/* harmony default export */ __webpack_exports__["default"] = (TaskService);

/***/ }),

/***/ "../../../util/dynamodb-lib.js":
/*!*************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/util/dynamodb-lib.js ***!
  \*************************************************************************************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);


function call(action, params) {
  const dynamoDB = new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.DynamoDB.DocumentClient();
  return dynamoDB[action](params).promise();
}

/***/ }),

/***/ "../../../util/response-lib.js":
/*!*************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/util/response-lib.js ***!
  \*************************************************************************************************/
/*! exports provided: success, failure, buildResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResponse", function() { return buildResponse; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

function success(body) {
  return buildResponse(200, body);
}
function failure(body) {
  return buildResponse(500, body);
}
function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
}
;

/***/ }),

/***/ "../../buffer-from/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/buffer-from/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ "../../hoek/lib/deep-equal.js":
/*!****************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/hoek/lib/deep-equal.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules


// Declare internals

const internals = {
    arrayType: Symbol('array'),
    bufferType: Symbol('buffer'),
    dateType: Symbol('date'),
    errorType: Symbol('error'),
    genericType: Symbol('generic'),
    mapType: Symbol('map'),
    regexType: Symbol('regex'),
    setType: Symbol('set'),
    weakMapType: Symbol('weak-map'),
    weakSetType: Symbol('weak-set'),
    mismatched: Symbol('mismatched')
};


internals.typeMap = {
    '[object Array]': internals.arrayType,
    '[object Date]': internals.dateType,
    '[object Error]': internals.errorType,
    '[object Map]': internals.mapType,
    '[object RegExp]': internals.regexType,
    '[object Set]': internals.setType,
    '[object WeakMap]': internals.weakMapType,
    '[object WeakSet]': internals.weakSetType
};


internals.SeenEntry = class {

    constructor(obj, ref) {

        this.obj = obj;
        this.ref = ref;
    }

    isSame(obj, ref) {

        return this.obj === obj && this.ref === ref;
    }
};


internals.getInternalType = function (obj) {

    const { typeMap, bufferType, genericType } = internals;

    if (obj instanceof Buffer) {
        return bufferType;
    }

    const objName = Object.prototype.toString.call(obj);
    return typeMap[objName] || genericType;
};


internals.getSharedType = function (obj, ref, checkPrototype) {

    if (checkPrototype) {
        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
            return internals.mismatched;
        }

        return internals.getInternalType(obj);
    }

    const type = internals.getInternalType(obj);
    if (type !== internals.getInternalType(ref)) {
        return internals.mismatched;
    }

    return type;
};


internals.valueOf = function (obj) {

    const objValueOf = obj.valueOf;
    if (objValueOf === undefined) {
        return obj;
    }

    try {
        return objValueOf.call(obj);
    }
    catch (err) {
        return err;
    }
};


internals.hasOwnEnumerableProperty = function (obj, key) {

    return Object.prototype.propertyIsEnumerable.call(obj, key);
};


internals.isSetSimpleEqual = function (obj, ref) {

    for (const entry of obj) {
        if (!ref.has(entry)) {
            return false;
        }
    }

    return true;
};


internals.isDeepEqualObj = function (instanceType, obj, ref, options, seen) {

    const { isDeepEqual, valueOf, hasOwnEnumerableProperty } = internals;
    const { keys, getOwnPropertySymbols } = Object;

    if (instanceType === internals.arrayType) {
        if (options.part) {
            // Check if any index match any other index

            for (let i = 0; i < obj.length; ++i) {
                const objValue = obj[i];
                for (let j = 0; j < ref.length; ++j) {
                    if (isDeepEqual(objValue, ref[j], options, seen)) {
                        return true;
                    }
                }
            }
        }
        else {
            if (obj.length !== ref.length) {
                return false;
            }

            for (let i = 0; i < obj.length; ++i) {
                if (!isDeepEqual(obj[i], ref[i], options, seen)) {
                    return false;
                }
            }

            return true;
        }
    }
    else if (instanceType === internals.setType) {
        if (obj.size !== ref.size) {
            return false;
        }

        if (!internals.isSetSimpleEqual(obj, ref)) {

            // Check for deep equality

            const ref2 = new Set(ref);
            for (const objEntry of obj) {
                if (ref2.delete(objEntry)) {
                    continue;
                }

                let found = false;
                for (const refEntry of ref2) {
                    if (isDeepEqual(objEntry, refEntry, options, seen)) {
                        ref2.delete(refEntry);
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    return false;
                }
            }
        }
    }
    else if (instanceType === internals.mapType) {
        if (obj.size !== ref.size) {
            return false;
        }

        for (const [key, value] of obj) {
            if (value === undefined && !ref.has(key)) {
                return false;
            }

            if (!isDeepEqual(value, ref.get(key), options, seen)) {
                return false;
            }
        }
    }
    else if (instanceType === internals.errorType) {
        // Always check name and message

        if (obj.name !== ref.name || obj.message !== ref.message) {
            return false;
        }
    }

    // Check .valueOf()

    const valueOfObj = valueOf(obj);
    const valueOfRef = valueOf(ref);
    if (!(obj === valueOfObj && ref === valueOfRef) &&
        !isDeepEqual(valueOfObj, valueOfRef, options, seen)) {
        return false;
    }

    // Check properties

    const objKeys = keys(obj);
    if (!options.part && objKeys.length !== keys(ref).length) {
        return false;
    }

    for (let i = 0; i < objKeys.length; ++i) {
        const key = objKeys[i];

        if (!hasOwnEnumerableProperty(ref, key)) {
            return false;
        }

        if (!isDeepEqual(obj[key], ref[key], options, seen)) {
            return false;
        }
    }

    // Check symbols

    if (options.symbols) {
        const objSymbols = getOwnPropertySymbols(obj);
        const refSymbols = new Set(getOwnPropertySymbols(ref));

        for (let i = 0; i < objSymbols.length; ++i) {
            const key = objSymbols[i];

            if (hasOwnEnumerableProperty(obj, key)) {
                if (!hasOwnEnumerableProperty(ref, key)) {
                    return false;
                }

                if (!isDeepEqual(obj[key], ref[key], options, seen)) {
                    return false;
                }
            }
            else if (hasOwnEnumerableProperty(ref, key)) {
                return false;
            }

            refSymbols.delete(key);
        }

        for (const key of refSymbols) {
            if (hasOwnEnumerableProperty(ref, key)) {
                return false;
            }
        }
    }

    return true;
};


internals.isDeepEqual = function (obj, ref, options, seen) {

    if (obj === ref) {                                      // Copied from Deep-eql, copyright(c) 2013 Jake Luer, jake@alogicalparadox.com, MIT Licensed, https://github.com/chaijs/deep-eql
        return obj !== 0 || 1 / obj === 1 / ref;
    }

    const type = typeof obj;

    if (type !== typeof ref) {
        return false;
    }

    if (type !== 'object' ||
        obj === null ||
        ref === null) {

        return obj !== obj && ref !== ref;                  // NaN
    }

    const instanceType = internals.getSharedType(obj, ref, !!options.prototype);
    switch (instanceType) {
        case internals.bufferType:
            return Buffer.prototype.equals.call(obj, ref);
        case internals.regexType:
            return obj.toString() === ref.toString();
        case internals.mismatched:
            return false;
    }

    for (let i = seen.length - 1; i >= 0; --i) {
        if (seen[i].isSame(obj, ref)) {
            return true;                                    // If previous comparison failed, it would have stopped execution
        }
    }

    seen.push(new internals.SeenEntry(obj, ref));
    try {
        return !!internals.isDeepEqualObj(instanceType, obj, ref, options, seen);
    }
    finally {
        seen.pop();
    }
};


module.exports = function (obj, ref, options) {

    options = options || { prototype: true };

    return !!internals.isDeepEqual(obj, ref, options, []);
};


/***/ }),

/***/ "../../hoek/lib/escape.js":
/*!************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/hoek/lib/escape.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Declare internals

const internals = {};


exports.escapeHtml = function (input) {

    if (!input) {
        return '';
    }

    let escaped = '';

    for (let i = 0; i < input.length; ++i) {

        const charCode = input.charCodeAt(i);

        if (internals.isSafe(charCode)) {
            escaped += input[i];
        }
        else {
            escaped += internals.escapeHtmlChar(charCode);
        }
    }

    return escaped;
};


exports.escapeJson = function (input) {

    if (!input) {
        return '';
    }

    const lessThan = 0x3C;
    const greaterThan = 0x3E;
    const andSymbol = 0x26;
    const lineSeperator = 0x2028;

    // replace method
    let charCode;
    return input.replace(/[<>&\u2028\u2029]/g, (match) => {

        charCode = match.charCodeAt(0);

        if (charCode === lessThan) {
            return '\\u003c';
        }

        if (charCode === greaterThan) {
            return '\\u003e';
        }

        if (charCode === andSymbol) {
            return '\\u0026';
        }

        if (charCode === lineSeperator) {
            return '\\u2028';
        }

        return '\\u2029';
    });
};


internals.escapeHtmlChar = function (charCode) {

    const namedEscape = internals.namedHtml[charCode];
    if (typeof namedEscape !== 'undefined') {
        return namedEscape;
    }

    if (charCode >= 256) {
        return '&#' + charCode + ';';
    }

    const hexValue = Buffer.from(String.fromCharCode(charCode), 'ascii').toString('hex');
    return `&#x${hexValue};`;
};


internals.isSafe = function (charCode) {

    return (typeof internals.safeCharCodes[charCode] !== 'undefined');
};


internals.namedHtml = {
    '38': '&amp;',
    '60': '&lt;',
    '62': '&gt;',
    '34': '&quot;',
    '160': '&nbsp;',
    '162': '&cent;',
    '163': '&pound;',
    '164': '&curren;',
    '169': '&copy;',
    '174': '&reg;'
};


internals.safeCharCodes = (function () {

    const safe = {};

    for (let i = 32; i < 123; ++i) {

        if ((i >= 97) ||                    // a-z
            (i >= 65 && i <= 90) ||         // A-Z
            (i >= 48 && i <= 57) ||         // 0-9
            i === 32 ||                     // space
            i === 46 ||                     // .
            i === 44 ||                     // ,
            i === 45 ||                     // -
            i === 58 ||                     // :
            i === 95) {                     // _

            safe[i] = null;
        }
    }

    return safe;
}());


/***/ }),

/***/ "../../hoek/lib/index.js":
/*!***********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/hoek/lib/index.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Assert = __webpack_require__(/*! assert */ "assert");
const Crypto = __webpack_require__(/*! crypto */ "crypto");
const Path = __webpack_require__(/*! path */ "path");

const DeepEqual = __webpack_require__(/*! ./deep-equal */ "../../hoek/lib/deep-equal.js");
const Escape = __webpack_require__(/*! ./escape */ "../../hoek/lib/escape.js");


// Declare internals

const internals = {};


// Deep object or array comparison

exports.deepEqual = DeepEqual;


// Clone object or array

exports.clone = function (obj, options = {}, _seen = null) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    const seen = _seen || new Map();

    const lookup = seen.get(obj);
    if (lookup) {
        return lookup;
    }

    let newObj;
    let cloneDeep = false;
    const isArray = Array.isArray(obj);

    if (!isArray) {
        if (Buffer.isBuffer(obj)) {
            newObj = Buffer.from(obj);
        }
        else if (obj instanceof Date) {
            newObj = new Date(obj.getTime());
        }
        else if (obj instanceof RegExp) {
            newObj = new RegExp(obj);
        }
        else {
            if (options.prototype !== false) {          // Defaults to true
                const proto = Object.getPrototypeOf(obj);
                if (proto &&
                    proto.isImmutable) {

                    newObj = obj;
                }
                else {
                    newObj = Object.create(proto);
                    cloneDeep = true;
                }
            }
            else {
                newObj = {};
                cloneDeep = true;
            }
        }
    }
    else {
        newObj = [];
        cloneDeep = true;
    }

    seen.set(obj, newObj);

    if (cloneDeep) {
        const keys = internals.keys(obj, options);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];

            if (isArray && key === 'length') {
                continue;
            }

            const descriptor = Object.getOwnPropertyDescriptor(obj, key);
            if (descriptor &&
                (descriptor.get ||
                    descriptor.set)) {

                Object.defineProperty(newObj, key, descriptor);
            }
            else {
                Object.defineProperty(newObj, key, {
                    enumerable: descriptor ? descriptor.enumerable : true,
                    writable: true,
                    configurable: true,
                    value: exports.clone(obj[key], options, seen)
                });
            }
        }

        if (isArray) {
            newObj.length = obj.length;
        }
    }

    return newObj;
};


internals.keys = function (obj, options = {}) {

    return options.symbols ? Reflect.ownKeys(obj) : Object.getOwnPropertyNames(obj);
};


// Merge all the properties of source into target, source wins in conflict, and by default null and undefined from source are applied

exports.merge = function (target, source, isNullOverride /* = true */, isMergeArrays /* = true */) {

    exports.assert(target && typeof target === 'object', 'Invalid target value: must be an object');
    exports.assert(source === null || source === undefined || typeof source === 'object', 'Invalid source value: must be null, undefined, or an object');

    if (!source) {
        return target;
    }

    if (Array.isArray(source)) {
        exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
        if (isMergeArrays === false) {                                                  // isMergeArrays defaults to true
            target.length = 0;                                                          // Must not change target assignment
        }

        for (let i = 0; i < source.length; ++i) {
            target.push(exports.clone(source[i]));
        }

        return target;
    }

    const keys = internals.keys(source);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (key === '__proto__' ||
            !Object.prototype.propertyIsEnumerable.call(source, key)) {

            continue;
        }

        const value = source[key];
        if (value &&
            typeof value === 'object') {

            if (!target[key] ||
                typeof target[key] !== 'object' ||
                (Array.isArray(target[key]) !== Array.isArray(value)) ||
                value instanceof Date ||
                Buffer.isBuffer(value) ||
                value instanceof RegExp) {

                target[key] = exports.clone(value);
            }
            else {
                exports.merge(target[key], value, isNullOverride, isMergeArrays);
            }
        }
        else {
            if (value !== null &&
                value !== undefined) {                              // Explicit to preserve empty strings

                target[key] = value;
            }
            else if (isNullOverride !== false) {                    // Defaults to true
                target[key] = value;
            }
        }
    }

    return target;
};


// Apply options to a copy of the defaults

exports.applyToDefaults = function (defaults, options, isNullOverride) {

    exports.assert(defaults && typeof defaults === 'object', 'Invalid defaults value: must be an object');
    exports.assert(!options || options === true || typeof options === 'object', 'Invalid options value: must be true, falsy or an object');

    if (!options) {                                                 // If no options, return null
        return null;
    }

    const copy = exports.clone(defaults);

    if (options === true) {                                         // If options is set to true, use defaults
        return copy;
    }

    return exports.merge(copy, options, isNullOverride === true, false);
};


// Clone an object except for the listed keys which are shallow copied

exports.cloneWithShallow = function (source, keys, options) {

    if (!source ||
        typeof source !== 'object') {

        return source;
    }

    const storage = internals.store(source, keys);    // Move shallow copy items to storage
    const copy = exports.clone(source, options);      // Deep copy the rest
    internals.restore(copy, source, storage);         // Shallow copy the stored items and restore
    return copy;
};


internals.store = function (source, keys) {

    const storage = new Map();
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const value = exports.reach(source, key);
        if (typeof value === 'object' ||
            typeof value === 'function') {

            storage.set(key, value);
            internals.reachSet(source, key, undefined);
        }
    }

    return storage;
};


internals.restore = function (copy, source, storage) {

    for (const [key, value] of storage) {
        internals.reachSet(copy, key, value);
        internals.reachSet(source, key, value);
    }
};


internals.reachSet = function (obj, key, value) {

    const path = Array.isArray(key) ? key : key.split('.');
    let ref = obj;
    for (let i = 0; i < path.length; ++i) {
        const segment = path[i];
        if (i + 1 === path.length) {
            ref[segment] = value;
        }

        ref = ref[segment];
    }
};


// Apply options to defaults except for the listed keys which are shallow copied from option without merging

exports.applyToDefaultsWithShallow = function (defaults, options, keys) {

    exports.assert(defaults && typeof defaults === 'object', 'Invalid defaults value: must be an object');
    exports.assert(!options || options === true || typeof options === 'object', 'Invalid options value: must be true, falsy or an object');
    exports.assert(keys && Array.isArray(keys), 'Invalid keys');

    if (!options) {                                                 // If no options, return null
        return null;
    }

    const copy = exports.cloneWithShallow(defaults, keys);

    if (options === true) {                                         // If options is set to true, use defaults
        return copy;
    }

    const storage = internals.store(options, keys);     // Move shallow copy items to storage
    exports.merge(copy, options, false, false);         // Deep copy the rest
    internals.restore(copy, options, storage);          // Shallow copy the stored items and restore
    return copy;
};


// Find the common unique items in two arrays

exports.intersect = function (array1, array2, justFirst) {

    if (!array1 ||
        !array2) {

        return (justFirst ? null : []);
    }

    const common = [];
    const hash = (Array.isArray(array1) ? new Set(array1) : array1);
    const found = new Set();
    for (const value of array2) {
        if (internals.has(hash, value) &&
            !found.has(value)) {

            if (justFirst) {
                return value;
            }

            common.push(value);
            found.add(value);
        }
    }

    return (justFirst ? null : common);
};


internals.has = function (ref, key) {

    if (typeof ref.has === 'function') {
        return ref.has(key);
    }

    return ref[key] !== undefined;
};


// Test if the reference contains the values

exports.contain = function (ref, values, options = {}) {        // options: { deep, once, only, part, symbols }

    /*
        string -> string(s)
        array -> item(s)
        object -> key(s)
        object -> object (key:value)
    */

    let valuePairs = null;
    if (typeof ref === 'object' &&
        typeof values === 'object' &&
        !Array.isArray(ref) &&
        !Array.isArray(values)) {

        valuePairs = values;
        const symbols = Object.getOwnPropertySymbols(values).filter(Object.prototype.propertyIsEnumerable.bind(values));
        values = [...Object.keys(values), ...symbols];
    }
    else {
        values = [].concat(values);
    }

    exports.assert(typeof ref === 'string' || typeof ref === 'object', 'Reference must be string or an object');
    exports.assert(values.length, 'Values array cannot be empty');

    let compare;
    let compareFlags;
    if (options.deep) {
        compare = exports.deepEqual;

        const hasOnly = options.hasOwnProperty('only');
        const hasPart = options.hasOwnProperty('part');

        compareFlags = {
            prototype: hasOnly ? options.only : hasPart ? !options.part : false,
            part: hasOnly ? !options.only : hasPart ? options.part : false
        };
    }
    else {
        compare = (a, b) => a === b;
    }

    let misses = false;
    const matches = new Array(values.length);
    for (let i = 0; i < matches.length; ++i) {
        matches[i] = 0;
    }

    if (typeof ref === 'string') {
        let pattern = '(';
        for (let i = 0; i < values.length; ++i) {
            const value = values[i];
            exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
            pattern += (i ? '|' : '') + exports.escapeRegex(value);
        }

        const regex = new RegExp(pattern + ')', 'g');
        const leftovers = ref.replace(regex, ($0, $1) => {

            const index = values.indexOf($1);
            ++matches[index];
            return '';          // Remove from string
        });

        misses = !!leftovers;
    }
    else if (Array.isArray(ref)) {
        const onlyOnce = !!(options.only && options.once);
        if (onlyOnce && ref.length !== values.length) {
            return false;
        }

        for (let i = 0; i < ref.length; ++i) {
            let matched = false;
            for (let j = 0; j < values.length && matched === false; ++j) {
                if (!onlyOnce || matches[j] === 0) {
                    matched = compare(values[j], ref[i], compareFlags) && j;
                }
            }

            if (matched !== false) {
                ++matches[matched];
            }
            else {
                misses = true;
            }
        }
    }
    else {
        const keys = internals.keys(ref, options);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            const pos = values.indexOf(key);
            if (pos !== -1) {
                if (valuePairs &&
                    !compare(valuePairs[key], ref[key], compareFlags)) {

                    return false;
                }

                ++matches[pos];
            }
            else {
                misses = true;
            }
        }
    }

    if (options.only) {
        if (misses || !options.once) {
            return !misses;
        }
    }

    let result = false;
    for (let i = 0; i < matches.length; ++i) {
        result = result || !!matches[i];
        if ((options.once && matches[i] > 1) ||
            (!options.part && !matches[i])) {

            return false;
        }
    }

    return result;
};


// Flatten array

exports.flatten = function (array, target) {

    const result = target || [];

    for (let i = 0; i < array.length; ++i) {
        if (Array.isArray(array[i])) {
            exports.flatten(array[i], result);
        }
        else {
            result.push(array[i]);
        }
    }

    return result;
};


// Convert an object key chain string ('a.b.c') to reference (object[a][b][c])

exports.reach = function (obj, chain, options) {

    if (chain === false ||
        chain === null ||
        typeof chain === 'undefined') {

        return obj;
    }

    options = options || {};
    if (typeof options === 'string') {
        options = { separator: options };
    }

    const isChainArray = Array.isArray(chain);

    exports.assert(!isChainArray || !options.separator, 'Separator option no valid for array-based chain');

    const path = isChainArray ? chain : chain.split(options.separator || '.');
    let ref = obj;
    for (let i = 0; i < path.length; ++i) {
        let key = path[i];

        if (Array.isArray(ref)) {
            const number = Number(key);

            if (Number.isInteger(number) && number < 0) {
                key = ref.length + number;
            }
        }

        if (!ref ||
            !((typeof ref === 'object' || typeof ref === 'function') && key in ref) ||
            (typeof ref !== 'object' && options.functions === false)) {         // Only object and function can have properties

            exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
            exports.assert(typeof ref === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
            ref = options.default;
            break;
        }

        ref = ref[key];
    }

    return ref;
};


exports.reachTemplate = function (obj, template, options) {

    return template.replace(/{([^}]+)}/g, ($0, chain) => {

        const value = exports.reach(obj, chain, options);
        return (value === undefined || value === null ? '' : value);
    });
};


exports.assert = function (condition, ...args) {

    if (condition) {
        return;
    }

    if (args.length === 1 && args[0] instanceof Error) {
        throw args[0];
    }

    const msgs = args
        .filter((arg) => arg !== '')
        .map((arg) => {

            return typeof arg === 'string' ? arg : arg instanceof Error ? arg.message : exports.stringify(arg);
        });

    throw new Assert.AssertionError({
        message: msgs.join(' ') || 'Unknown error',
        actual: false,
        expected: true,
        operator: '==',
        stackStartFunction: exports.assert
    });
};


exports.Bench = function () {

    this.ts = 0;
    this.reset();
};


exports.Bench.prototype.reset = function () {

    this.ts = exports.Bench.now();
};


exports.Bench.prototype.elapsed = function () {

    return exports.Bench.now() - this.ts;
};


exports.Bench.now = function () {

    const ts = process.hrtime();
    return (ts[0] * 1e3) + (ts[1] / 1e6);
};


// Escape string for Regex construction

exports.escapeRegex = function (string) {

    // Escape ^$.*+-?=!:|\/()[]{},
    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
};


// Escape attribute value for use in HTTP header

exports.escapeHeaderAttribute = function (attribute) {

    // Allowed value characters: !#$%&'()*+,-./:;<=>?@[]^_`{|}~ and space, a-z, A-Z, 0-9, \, "

    exports.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), 'Bad attribute value (' + attribute + ')');

    return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"');                             // Escape quotes and slash
};


exports.escapeHtml = function (string) {

    return Escape.escapeHtml(string);
};


exports.escapeJson = function (string) {

    return Escape.escapeJson(string);
};


exports.once = function (method) {

    if (method._hoekOnce) {
        return method;
    }

    let once = false;
    const wrapped = function (...args) {

        if (!once) {
            once = true;
            method(...args);
        }
    };

    wrapped._hoekOnce = true;
    return wrapped;
};


exports.ignore = function () { };


exports.uniqueFilename = function (path, extension) {

    if (extension) {
        extension = extension[0] !== '.' ? '.' + extension : extension;
    }
    else {
        extension = '';
    }

    path = Path.resolve(path);
    const name = [Date.now(), process.pid, Crypto.randomBytes(8).toString('hex')].join('-') + extension;
    return Path.join(path, name);
};


exports.stringify = function (...args) {

    try {
        return JSON.stringify.apply(null, args);
    }
    catch (err) {
        return '[Cannot display object: ' + err.message + ']';
    }
};


exports.wait = function (timeout) {

    return new Promise((resolve) => setTimeout(resolve, timeout));
};


exports.block = function () {

    return new Promise(exports.ignore);
};


/***/ }),

/***/ "../../isemail/lib/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/isemail/lib/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Punycode = __webpack_require__(/*! punycode */ "punycode");
const Util = __webpack_require__(/*! util */ "util");

// Declare internals

const internals = {
    hasOwn: Object.prototype.hasOwnProperty,
    indexOf: Array.prototype.indexOf,
    defaultThreshold: 16,
    maxIPv6Groups: 8,

    categories: {
        valid: 1,
        dnsWarn: 7,
        rfc5321: 15,
        cfws: 31,
        deprecated: 63,
        rfc5322: 127,
        error: 255
    },

    diagnoses: {

        // Address is valid

        valid: 0,

        // Address is valid for SMTP but has unusual elements

        rfc5321TLD: 9,
        rfc5321TLDNumeric: 10,
        rfc5321QuotedString: 11,
        rfc5321AddressLiteral: 12,

        // Address is valid for message, but must be modified for envelope

        cfwsComment: 17,
        cfwsFWS: 18,

        // Address contains non-ASCII when the allowUnicode option is false
        // Has to be > internals.defaultThreshold so that it's rejected
        // without an explicit errorLevel:
        undesiredNonAscii: 25,

        // Address contains deprecated elements, but may still be valid in some contexts

        deprecatedLocalPart: 33,
        deprecatedFWS: 34,
        deprecatedQTEXT: 35,
        deprecatedQP: 36,
        deprecatedComment: 37,
        deprecatedCTEXT: 38,
        deprecatedIPv6: 39,
        deprecatedCFWSNearAt: 49,

        // Address is only valid according to broad definition in RFC 5322, but is otherwise invalid

        rfc5322Domain: 65,
        rfc5322TooLong: 66,
        rfc5322LocalTooLong: 67,
        rfc5322DomainTooLong: 68,
        rfc5322LabelTooLong: 69,
        rfc5322DomainLiteral: 70,
        rfc5322DomainLiteralOBSDText: 71,
        rfc5322IPv6GroupCount: 72,
        rfc5322IPv62x2xColon: 73,
        rfc5322IPv6BadCharacter: 74,
        rfc5322IPv6MaxGroups: 75,
        rfc5322IPv6ColonStart: 76,
        rfc5322IPv6ColonEnd: 77,

        // Address is invalid for any purpose

        errExpectingDTEXT: 129,
        errNoLocalPart: 130,
        errNoDomain: 131,
        errConsecutiveDots: 132,
        errATEXTAfterCFWS: 133,
        errATEXTAfterQS: 134,
        errATEXTAfterDomainLiteral: 135,
        errExpectingQPair: 136,
        errExpectingATEXT: 137,
        errExpectingQTEXT: 138,
        errExpectingCTEXT: 139,
        errBackslashEnd: 140,
        errDotStart: 141,
        errDotEnd: 142,
        errDomainHyphenStart: 143,
        errDomainHyphenEnd: 144,
        errUnclosedQuotedString: 145,
        errUnclosedComment: 146,
        errUnclosedDomainLiteral: 147,
        errFWSCRLFx2: 148,
        errFWSCRLFEnd: 149,
        errCRNoLF: 150,
        errUnknownTLD: 160,
        errDomainTooShort: 161,
        errDotAfterDomainLiteral: 162
    },

    components: {
        localpart: 0,
        domain: 1,
        literal: 2,
        contextComment: 3,
        contextFWS: 4,
        contextQuotedString: 5,
        contextQuotedPair: 6
    }
};


internals.specials = function () {

    const specials = '()<>[]:;@\\,."';        // US-ASCII visible characters not valid for atext (http://tools.ietf.org/html/rfc5322#section-3.2.3)
    const lookup = new Array(0x100);
    lookup.fill(false);

    for (let i = 0; i < specials.length; ++i) {
        lookup[specials.codePointAt(i)] = true;
    }

    return function (code) {

        return lookup[code];
    };
}();

internals.c0Controls = function () {

    const lookup = new Array(0x100);
    lookup.fill(false);

    // add C0 control characters

    for (let i = 0; i < 33; ++i) {
        lookup[i] = true;
    }

    return function (code) {

        return lookup[code];
    };
}();

internals.c1Controls = function () {

    const lookup = new Array(0x100);
    lookup.fill(false);

    // add C1 control characters

    for (let i = 127; i < 160; ++i) {
        lookup[i] = true;
    }

    return function (code) {

        return lookup[code];
    };
}();

internals.regex = {
    ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipV6: /^[a-fA-F\d]{0,4}$/
};

internals.normalizeSupportsNul = '\0'.normalize('NFC') === '\0';


// $lab:coverage:off$
internals.nulNormalize = function (email) {

    return email.split('\0').map((part) => part.normalize('NFC')).join('\0');
};
// $lab:coverage:on$


internals.normalize = function (email) {

    return email.normalize('NFC');
};


// $lab:coverage:off$
if (!internals.normalizeSupportsNul) {
    internals.normalize = function (email) {

        if (email.indexOf('\0') >= 0) {
            return internals.nulNormalize(email);
        }

        return email.normalize('NFC');
    };
}
// $lab:coverage:on$


internals.checkIpV6 = function (items) {

    return items.every((value) => internals.regex.ipV6.test(value));
};


internals.isIterable = Array.isArray;


/* $lab:coverage:off$ */
if (typeof Symbol !== 'undefined') {
    internals.isIterable = (value) => Array.isArray(value) || (!!value && typeof value === 'object' && typeof value[Symbol.iterator] === 'function');
}
/* $lab:coverage:on$ */


// Node 10 introduced isSet and isMap, which are useful for cross-context type
// checking.
// $lab:coverage:off$
internals._isSet = (value) => value instanceof Set;
internals._isMap = (value) => value instanceof Map;
internals.isSet = Util.types && Util.types.isSet || internals._isSet;
internals.isMap = Util.types && Util.types.isMap || internals._isMap;
// $lab:coverage:on$


/**
 * Normalize the given lookup "table" to an iterator. Outputs items in arrays
 * and sets, keys from maps (regardless of the corresponding value), and own
 * enumerable keys from all other objects (intended to be plain objects).
 *
 * @param {*} table The table to convert.
 * @returns {Iterable<*>} The converted table.
 */
internals.normalizeTable = function (table) {

    if (internals.isSet(table) || Array.isArray(table)) {
        return table;
    }

    if (internals.isMap(table)) {
        return table.keys();
    }

    return Object.keys(table);
};


/**
 * Convert the given domain atom to its canonical form using Nameprep and string
 * lowercasing. Domain atoms that are all-ASCII will not undergo any changes via
 * Nameprep, and domain atoms that have already been canonicalized will not be
 * altered.
 *
 * @param {string} atom The atom to canonicalize.
 * @returns {string} The canonicalized atom.
 */
internals.canonicalizeAtom = function (atom) {

    return Punycode.toASCII(atom).toLowerCase();
};


/**
 * Check whether any of the values in the given iterable, when passed through
 * the iteratee function, are equal to the given value.
 *
 * @param {Iterable<*>} iterable The iterable to check.
 * @param {function(*): *} iteratee The iteratee that receives each item from
 *   the iterable.
 * @param {*} value The reference value.
 * @returns {boolean} Whether the given value matches any of the items in the
 *   iterable per the iteratee.
 */
internals.includesMapped = function (iterable, iteratee, value) {

    for (const item of iterable) {
        if (value === iteratee(item)) {
            return true;
        }
    }

    return false;
};


/**
 * Check whether the given top-level domain atom is valid based on the
 * configured blacklist/whitelist.
 *
 * @param {string} tldAtom The atom to check.
 * @param {Object} options
 *   {*} tldBlacklist The set of domains to consider invalid.
 *   {*} tldWhitelist The set of domains to consider valid.
 * @returns {boolean} Whether the given domain atom is valid per the blacklist/
 *   whitelist.
 */
internals.validDomain = function (tldAtom, options) {

    // Nameprep handles case-sensitive unicode stuff, but doesn't touch
    // uppercase ASCII characters.
    const canonicalTldAtom = internals.canonicalizeAtom(tldAtom);

    if (options.tldBlacklist) {
        return !internals.includesMapped(
            internals.normalizeTable(options.tldBlacklist),
            internals.canonicalizeAtom, canonicalTldAtom);
    }

    return internals.includesMapped(
        internals.normalizeTable(options.tldWhitelist),
        internals.canonicalizeAtom, canonicalTldAtom);
};


/**
 * Check whether the domain atoms has an address literal part followed by a
 * normal domain atom part. For example, [127.0.0.1].com.
 *
 * @param {string[]} domainAtoms The parsed domain atoms.
 * @returns {boolean} Whether there exists both a normal domain atom and an
 *   address literal.
 */
internals.hasDomainLiteralThenAtom = function (domainAtoms) {

    let hasDomainLiteral = false;
    for (let i = 0; i < domainAtoms.length; ++i) {
        if (domainAtoms[i][0] === '[') {
            hasDomainLiteral = true;
        }
        else if (hasDomainLiteral) {
            return true;
        }
    }

    return false;
};


/**
 * Check that an email address conforms to RFCs 5321, 5322, 6530 and others
 *
 * We distinguish clearly between a Mailbox as defined by RFC 5321 and an
 * addr-spec as defined by RFC 5322. Depending on the context, either can be
 * regarded as a valid email address. The RFC 5321 Mailbox specification is
 * more restrictive (comments, white space and obsolete forms are not allowed).
 *
 * @param {string} email The email address to check. See README for specifics.
 * @param {Object} options The (optional) options:
 *   {*} errorLevel Determines the boundary between valid and invalid
 *     addresses.
 *   {*} tldBlacklist The set of domains to consider invalid.
 *   {*} tldWhitelist The set of domains to consider valid.
 *   {*} allowUnicode Whether to allow non-ASCII characters, defaults to true.
 *   {*} minDomainAtoms The minimum number of domain atoms which must be present
 *     for the address to be valid.
 * @param {function(number|boolean)} callback The (optional) callback handler.
 * @return {*}
 */

exports.validate = internals.validate = function (email, options, callback) {

    options = options || {};

    if (typeof email !== 'string') {
        throw new TypeError('expected string email');
    }

    email = internals.normalize(email);

    // The callback function is deprecated.
    // $lab:coverage:off$
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }

    if (typeof callback !== 'function') {
        callback = null;
    }
    // $lab:coverage:on$

    let diagnose;
    let threshold;

    if (typeof options.errorLevel === 'number') {
        diagnose = true;
        threshold = options.errorLevel;
    }
    else {
        diagnose = !!options.errorLevel;
        threshold = internals.diagnoses.valid;
    }

    if (options.tldWhitelist) {
        if (typeof options.tldWhitelist === 'string') {
            options.tldWhitelist = [options.tldWhitelist];
        }
        else if (typeof options.tldWhitelist !== 'object') {
            throw new TypeError('expected array or object tldWhitelist');
        }
    }

    if (options.tldBlacklist) {
        if (typeof options.tldBlacklist === 'string') {
            options.tldBlacklist = [options.tldBlacklist];
        }
        else if (typeof options.tldBlacklist !== 'object') {
            throw new TypeError('expected array or object tldBlacklist');
        }
    }

    if (options.minDomainAtoms && (options.minDomainAtoms !== ((+options.minDomainAtoms) | 0) || options.minDomainAtoms < 0)) {
        throw new TypeError('expected positive integer minDomainAtoms');
    }

    // Normalize the set of excluded diagnoses.
    if (options.excludeDiagnoses) {
        if (!internals.isIterable(options.excludeDiagnoses)) {
            throw new TypeError('expected iterable excludeDiagnoses');
        }

        // This won't catch cross-realm Sets pre-Node 10, but it will cast the
        // value to an in-realm Set representation.
        if (!internals.isSet(options.excludeDiagnoses)) {
            options.excludeDiagnoses = new Set(options.excludeDiagnoses);
        }
    }

    let maxResult = internals.diagnoses.valid;
    const updateResult = (value) => {

        if (value > maxResult && (!options.excludeDiagnoses || !options.excludeDiagnoses.has(value))) {
            maxResult = value;
        }
    };

    const allowUnicode = options.allowUnicode === undefined || !!options.allowUnicode;
    if (!allowUnicode && /[^\x00-\x7f]/.test(email)) {
        updateResult(internals.diagnoses.undesiredNonAscii);
    }

    const context = {
        now: internals.components.localpart,
        prev: internals.components.localpart,
        stack: [internals.components.localpart]
    };

    let prevToken = '';

    const parseData = {
        local: '',
        domain: ''
    };
    const atomData = {
        locals: [''],
        domains: ['']
    };

    let elementCount = 0;
    let elementLength = 0;
    let crlfCount = 0;
    let charCode;

    let hyphenFlag = false;
    let assertEnd = false;

    const emailLength = email.length;

    let token;                                      // Token is used outside the loop, must declare similarly
    for (let i = 0; i < emailLength; i += token.length) {
        // Utilize codepoints to account for Unicode surrogate pairs
        token = String.fromCodePoint(email.codePointAt(i));

        switch (context.now) {
            // Local-part
            case internals.components.localpart:
                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   local-part      =   dot-atom / quoted-string / obs-local-part
                //
                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
                //
                //   dot-atom-text   =   1*atext *("." 1*atext)
                //
                //   quoted-string   =   [CFWS]
                //                       DQUOTE *([FWS] qcontent) [FWS] DQUOTE
                //                       [CFWS]
                //
                //   obs-local-part  =   word *("." word)
                //
                //   word            =   atom / quoted-string
                //
                //   atom            =   [CFWS] 1*atext [CFWS]
                switch (token) {
                    // Comment
                    case '(':
                        if (elementLength === 0) {
                            // Comments are OK at the beginning of an element
                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsComment : internals.diagnoses.deprecatedComment);
                        }
                        else {
                            updateResult(internals.diagnoses.cfwsComment);
                            // Cannot start a comment in an element, should be end
                            assertEnd = true;
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextComment;
                        break;

                        // Next dot-atom element
                    case '.':
                        if (elementLength === 0) {
                            // Another dot, already?
                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
                        }
                        else {
                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
                            if (assertEnd) {
                                updateResult(internals.diagnoses.deprecatedLocalPart);
                            }

                            // CFWS & quoted strings are OK again now we're at the beginning of an element (although they are obsolete forms)
                            assertEnd = false;
                            elementLength = 0;
                            ++elementCount;
                            parseData.local += token;
                            atomData.locals[elementCount] = '';
                        }

                        break;

                        // Quoted string
                    case '"':
                        if (elementLength === 0) {
                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
                            updateResult(elementCount === 0 ? internals.diagnoses.rfc5321QuotedString : internals.diagnoses.deprecatedLocalPart);

                            parseData.local += token;
                            atomData.locals[elementCount] += token;
                            elementLength += Buffer.byteLength(token, 'utf8');

                            // Quoted string must be the entire element
                            assertEnd = true;
                            context.stack.push(context.now);
                            context.now = internals.components.contextQuotedString;
                        }
                        else {
                            updateResult(internals.diagnoses.errExpectingATEXT);
                        }

                        break;

                        // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                        // Fallthrough

                    case ' ':
                    case '\t':
                        if (elementLength === 0) {
                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsFWS : internals.diagnoses.deprecatedFWS);
                        }
                        else {
                            // We can't start FWS in the middle of an element, better be end
                            assertEnd = true;
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                    case '@':
                        // At this point we should have a valid local-part
                        // $lab:coverage:off$
                        if (context.stack.length !== 1) {
                            throw new Error('unexpected item on context stack');
                        }
                        // $lab:coverage:on$

                        if (parseData.local.length === 0) {
                            // Fatal error
                            updateResult(internals.diagnoses.errNoLocalPart);
                        }
                        else if (elementLength === 0) {
                            // Fatal error
                            updateResult(internals.diagnoses.errDotEnd);
                        }
                        // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1 the maximum total length of a user name or other local-part is 64
                        //    octets
                        else if (Buffer.byteLength(parseData.local, 'utf8') > 64) {
                            updateResult(internals.diagnoses.rfc5322LocalTooLong);
                        }
                        // http://tools.ietf.org/html/rfc5322#section-3.4.1 comments and folding white space SHOULD NOT be used around "@" in the
                        //    addr-spec
                        //
                        // http://tools.ietf.org/html/rfc2119
                        // 4. SHOULD NOT this phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular
                        //    circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood
                        //    and the case carefully weighed before implementing any behavior described with this label.
                        else if (context.prev === internals.components.contextComment || context.prev === internals.components.contextFWS) {
                            updateResult(internals.diagnoses.deprecatedCFWSNearAt);
                        }

                        // Clear everything down for the domain parsing
                        context.now = internals.components.domain;
                        context.stack[0] = internals.components.domain;
                        elementCount = 0;
                        elementLength = 0;
                        assertEnd = false; // CFWS can only appear at the end of the element
                        break;

                        // ATEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
                        //            "!" / "#" /     ;  characters not including
                        //            "$" / "%" /     ;  specials.  Used for atoms.
                        //            "&" / "'" /
                        //            "*" / "+" /
                        //            "-" / "/" /
                        //            "=" / "?" /
                        //            "^" / "_" /
                        //            "`" / "{" /
                        //            "|" / "}" /
                        //            "~"
                        if (assertEnd) {
                            // We have encountered atext where it is no longer valid
                            switch (context.prev) {
                                case internals.components.contextComment:
                                case internals.components.contextFWS:
                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
                                    break;

                                case internals.components.contextQuotedString:
                                    updateResult(internals.diagnoses.errATEXTAfterQS);
                                    break;

                                    // $lab:coverage:off$
                                default:
                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
                                    // $lab:coverage:on$
                            }
                        }
                        else {
                            context.prev = context.now;
                            charCode = token.codePointAt(0);

                            // Especially if charCode == 10
                            if (internals.specials(charCode) || internals.c0Controls(charCode) || internals.c1Controls(charCode)) {

                                // Fatal error
                                updateResult(internals.diagnoses.errExpectingATEXT);
                            }

                            parseData.local += token;
                            atomData.locals[elementCount] += token;
                            elementLength += Buffer.byteLength(token, 'utf8');
                        }
                }

                break;

            case internals.components.domain:
                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   domain          =   dot-atom / domain-literal / obs-domain
                //
                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
                //
                //   dot-atom-text   =   1*atext *("." 1*atext)
                //
                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
                //
                //   dtext           =   %d33-90 /          ; Printable US-ASCII
                //                       %d94-126 /         ;  characters not including
                //                       obs-dtext          ;  "[", "]", or "\"
                //
                //   obs-domain      =   atom *("." atom)
                //
                //   atom            =   [CFWS] 1*atext [CFWS]

                // http://tools.ietf.org/html/rfc5321#section-4.1.2
                //   Mailbox        = Local-part "@" ( Domain / address-literal )
                //
                //   Domain         = sub-domain *("." sub-domain)
                //
                //   address-literal  = "[" ( IPv4-address-literal /
                //                    IPv6-address-literal /
                //                    General-address-literal ) "]"
                //                    ; See Section 4.1.3

                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //      Note: A liberal syntax for the domain portion of addr-spec is
                //      given here.  However, the domain portion contains addressing
                //      information specified by and used in other protocols (e.g.,
                //      [RFC1034], [RFC1035], [RFC1123], [RFC5321]).  It is therefore
                //      incumbent upon implementations to conform to the syntax of
                //      addresses for the context in which they are used.
                //
                // is_email() author's note: it's not clear how to interpret this in
                // he context of a general email address validator. The conclusion I
                // have reached is this: "addressing information" must comply with
                // RFC 5321 (and in turn RFC 1035), anything that is "semantically
                // invisible" must comply only with RFC 5322.
                switch (token) {
                    // Comment
                    case '(':
                        if (elementLength === 0) {
                            // Comments at the start of the domain are deprecated in the text, comments at the start of a subdomain are obs-domain
                            // http://tools.ietf.org/html/rfc5322#section-3.4.1
                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedComment);
                        }
                        else {
                            // We can't start a comment mid-element, better be at the end
                            assertEnd = true;
                            updateResult(internals.diagnoses.cfwsComment);
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextComment;
                        break;

                        // Next dot-atom element
                    case '.':
                        const punycodeLength = Punycode.toASCII(atomData.domains[elementCount]).length;
                        if (elementLength === 0) {
                            // Another dot, already? Fatal error.
                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
                        }
                        else if (hyphenFlag) {
                            // Previous subdomain ended in a hyphen. Fatal error.
                            updateResult(internals.diagnoses.errDomainHyphenEnd);
                        }
                        else if (punycodeLength > 63) {
                            // RFC 5890 specifies that domain labels that are encoded using the Punycode algorithm
                            // must adhere to the <= 63 octet requirement.
                            // This includes string prefixes from the Punycode algorithm.
                            //
                            // https://tools.ietf.org/html/rfc5890#section-2.3.2.1
                            // labels          63 octets or less

                            updateResult(internals.diagnoses.rfc5322LabelTooLong);
                        }

                        // CFWS is OK again now we're at the beginning of an element (although
                        // it may be obsolete CFWS)
                        assertEnd = false;
                        elementLength = 0;
                        ++elementCount;
                        atomData.domains[elementCount] = '';
                        parseData.domain += token;

                        break;

                        // Domain literal
                    case '[':
                        if (atomData.domains[elementCount].length === 0) {
                            if (parseData.domain.length) {
                                // Domain literal interspersed with domain refs.
                                updateResult(internals.diagnoses.errDotAfterDomainLiteral);
                            }

                            assertEnd = true;
                            elementLength += Buffer.byteLength(token, 'utf8');
                            context.stack.push(context.now);
                            context.now = internals.components.literal;
                            parseData.domain += token;
                            atomData.domains[elementCount] += token;
                            parseData.literal = '';
                        }
                        else {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingATEXT);
                        }

                        break;

                        // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                        // Fallthrough

                    case ' ':
                    case '\t':
                        if (elementLength === 0) {
                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedFWS);
                        }
                        else {
                            // We can't start FWS in the middle of an element, so this better be the end
                            updateResult(internals.diagnoses.cfwsFWS);
                            assertEnd = true;
                        }

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                        // This must be ATEXT
                    default:
                        // RFC 5322 allows any atext...
                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
                        //            "!" / "#" /     ;  characters not including
                        //            "$" / "%" /     ;  specials.  Used for atoms.
                        //            "&" / "'" /
                        //            "*" / "+" /
                        //            "-" / "/" /
                        //            "=" / "?" /
                        //            "^" / "_" /
                        //            "`" / "{" /
                        //            "|" / "}" /
                        //            "~"

                        // But RFC 5321 only allows letter-digit-hyphen to comply with DNS rules
                        //   (RFCs 1034 & 1123)
                        // http://tools.ietf.org/html/rfc5321#section-4.1.2
                        //   sub-domain     = Let-dig [Ldh-str]
                        //
                        //   Let-dig        = ALPHA / DIGIT
                        //
                        //   Ldh-str        = *( ALPHA / DIGIT / "-" ) Let-dig
                        //
                        if (assertEnd) {
                            // We have encountered ATEXT where it is no longer valid
                            switch (context.prev) {
                                case internals.components.contextComment:
                                case internals.components.contextFWS:
                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
                                    break;

                                case internals.components.literal:
                                    updateResult(internals.diagnoses.errATEXTAfterDomainLiteral);
                                    break;

                                    // $lab:coverage:off$
                                default:
                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
                                    // $lab:coverage:on$
                            }
                        }

                        charCode = token.codePointAt(0);
                        // Assume this token isn't a hyphen unless we discover it is
                        hyphenFlag = false;

                        if (internals.specials(charCode) || internals.c0Controls(charCode) || internals.c1Controls(charCode)) {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingATEXT);
                        }
                        else if (token === '-') {
                            if (elementLength === 0) {
                                // Hyphens cannot be at the beginning of a subdomain, fatal error
                                updateResult(internals.diagnoses.errDomainHyphenStart);
                            }

                            hyphenFlag = true;
                        }
                        // Check if it's a neither a number nor a latin/unicode letter
                        else if (charCode < 48 || (charCode > 122 && charCode < 192) || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97)) {
                            // This is not an RFC 5321 subdomain, but still OK by RFC 5322
                            updateResult(internals.diagnoses.rfc5322Domain);
                        }

                        parseData.domain += token;
                        atomData.domains[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                }

                break;

                // Domain literal
            case internals.components.literal:
                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
                //
                //   dtext           =   %d33-90 /          ; Printable US-ASCII
                //                       %d94-126 /         ;  characters not including
                //                       obs-dtext          ;  "[", "]", or "\"
                //
                //   obs-dtext       =   obs-NO-WS-CTL / quoted-pair
                switch (token) {
                    // End of domain literal
                    case ']':
                        if (maxResult < internals.categories.deprecated) {
                            // Could be a valid RFC 5321 address literal, so let's check

                            // http://tools.ietf.org/html/rfc5321#section-4.1.2
                            //   address-literal  = "[" ( IPv4-address-literal /
                            //                    IPv6-address-literal /
                            //                    General-address-literal ) "]"
                            //                    ; See Section 4.1.3
                            //
                            // http://tools.ietf.org/html/rfc5321#section-4.1.3
                            //   IPv4-address-literal  = Snum 3("."  Snum)
                            //
                            //   IPv6-address-literal  = "IPv6:" IPv6-addr
                            //
                            //   General-address-literal  = Standardized-tag ":" 1*dcontent
                            //
                            //   Standardized-tag  = Ldh-str
                            //                     ; Standardized-tag MUST be specified in a
                            //                     ; Standards-Track RFC and registered with IANA
                            //
                            //   dcontent      = %d33-90 / ; Printable US-ASCII
                            //                 %d94-126 ; excl. "[", "\", "]"
                            //
                            //   Snum          = 1*3DIGIT
                            //                 ; representing a decimal integer
                            //                 ; value in the range 0 through 255
                            //
                            //   IPv6-addr     = IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp
                            //
                            //   IPv6-hex      = 1*4HEXDIG
                            //
                            //   IPv6-full     = IPv6-hex 7(":" IPv6-hex)
                            //
                            //   IPv6-comp     = [IPv6-hex *5(":" IPv6-hex)] "::"
                            //                 [IPv6-hex *5(":" IPv6-hex)]
                            //                 ; The "::" represents at least 2 16-bit groups of
                            //                 ; zeros.  No more than 6 groups in addition to the
                            //                 ; "::" may be present.
                            //
                            //   IPv6v4-full   = IPv6-hex 5(":" IPv6-hex) ":" IPv4-address-literal
                            //
                            //   IPv6v4-comp   = [IPv6-hex *3(":" IPv6-hex)] "::"
                            //                 [IPv6-hex *3(":" IPv6-hex) ":"]
                            //                 IPv4-address-literal
                            //                 ; The "::" represents at least 2 16-bit groups of
                            //                 ; zeros.  No more than 4 groups in addition to the
                            //                 ; "::" and IPv4-address-literal may be present.

                            let index = -1;
                            let addressLiteral = parseData.literal;
                            const matchesIP = internals.regex.ipV4.exec(addressLiteral);

                            // Maybe extract IPv4 part from the end of the address-literal
                            if (matchesIP) {
                                index = matchesIP.index;
                                if (index !== 0) {
                                    // Convert IPv4 part to IPv6 format for futher testing
                                    addressLiteral = addressLiteral.slice(0, index) + '0:0';
                                }
                            }

                            if (index === 0) {
                                // Nothing there except a valid IPv4 address, so...
                                updateResult(internals.diagnoses.rfc5321AddressLiteral);
                            }
                            else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
                                updateResult(internals.diagnoses.rfc5322DomainLiteral);
                            }
                            else {
                                const match = addressLiteral.slice(5);
                                let maxGroups = internals.maxIPv6Groups;
                                const groups = match.split(':');
                                index = match.indexOf('::');

                                if (!~index) {
                                    // Need exactly the right number of groups
                                    if (groups.length !== maxGroups) {
                                        updateResult(internals.diagnoses.rfc5322IPv6GroupCount);
                                    }
                                }
                                else if (index !== match.lastIndexOf('::')) {
                                    updateResult(internals.diagnoses.rfc5322IPv62x2xColon);
                                }
                                else {
                                    if (index === 0 || index === match.length - 2) {
                                        // RFC 4291 allows :: at the start or end of an address with 7 other groups in addition
                                        ++maxGroups;
                                    }

                                    if (groups.length > maxGroups) {
                                        updateResult(internals.diagnoses.rfc5322IPv6MaxGroups);
                                    }
                                    else if (groups.length === maxGroups) {
                                        // Eliding a single "::"
                                        updateResult(internals.diagnoses.deprecatedIPv6);
                                    }
                                }

                                // IPv6 testing strategy
                                if (match[0] === ':' && match[1] !== ':') {
                                    updateResult(internals.diagnoses.rfc5322IPv6ColonStart);
                                }
                                else if (match[match.length - 1] === ':' && match[match.length - 2] !== ':') {
                                    updateResult(internals.diagnoses.rfc5322IPv6ColonEnd);
                                }
                                else if (internals.checkIpV6(groups)) {
                                    updateResult(internals.diagnoses.rfc5321AddressLiteral);
                                }
                                else {
                                    updateResult(internals.diagnoses.rfc5322IPv6BadCharacter);
                                }
                            }
                        }
                        else {
                            updateResult(internals.diagnoses.rfc5322DomainLiteral);
                        }

                        parseData.domain += token;
                        atomData.domains[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                        context.prev = context.now;
                        context.now = context.stack.pop();
                        break;

                    case '\\':
                        updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
                        context.stack.push(context.now);
                        context.now = internals.components.contextQuotedPair;
                        break;

                        // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                        // Fallthrough

                    case ' ':
                    case '\t':
                        updateResult(internals.diagnoses.cfwsFWS);

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                        // DTEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.4.1
                        //   dtext         =   %d33-90 /  ; Printable US-ASCII
                        //                     %d94-126 / ;  characters not including
                        //                     obs-dtext  ;  "[", "]", or "\"
                        //
                        //   obs-dtext     =   obs-NO-WS-CTL / quoted-pair
                        //
                        //   obs-NO-WS-CTL =   %d1-8 /    ; US-ASCII control
                        //                     %d11 /     ;  characters that do not
                        //                     %d12 /     ;  include the carriage
                        //                     %d14-31 /  ;  return, line feed, and
                        //                     %d127      ;  white space characters
                        charCode = token.codePointAt(0);

                        // '\r', '\n', ' ', and '\t' have already been parsed above
                        if ((charCode !== 127 && internals.c1Controls(charCode)) || charCode === 0 || token === '[') {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingDTEXT);
                            break;
                        }
                        else if (internals.c0Controls(charCode) || charCode === 127) {
                            updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
                        }

                        parseData.literal += token;
                        parseData.domain += token;
                        atomData.domains[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                }

                break;

                // Quoted string
            case internals.components.contextQuotedString:
                // http://tools.ietf.org/html/rfc5322#section-3.2.4
                //   quoted-string = [CFWS]
                //                   DQUOTE *([FWS] qcontent) [FWS] DQUOTE
                //                   [CFWS]
                //
                //   qcontent      = qtext / quoted-pair
                switch (token) {
                    // Quoted pair
                    case '\\':
                        context.stack.push(context.now);
                        context.now = internals.components.contextQuotedPair;
                        break;

                        // Folding white space. Spaces are allowed as regular characters inside a quoted string - it's only FWS if we include '\t' or '\r\n'
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                        // Fallthrough

                    case '\t':
                        // http://tools.ietf.org/html/rfc5322#section-3.2.2
                        //   Runs of FWS, comment, or CFWS that occur between lexical tokens in
                        //   a structured header field are semantically interpreted as a single
                        //   space character.

                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
                        //   the CRLF in any FWS/CFWS that appears within the quoted-string [is]
                        //   semantically "invisible" and therefore not part of the
                        //   quoted-string

                        parseData.local += ' ';
                        atomData.locals[elementCount] += ' ';
                        elementLength += Buffer.byteLength(token, 'utf8');

                        updateResult(internals.diagnoses.cfwsFWS);
                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                        // End of quoted string
                    case '"':
                        parseData.local += token;
                        atomData.locals[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                        context.prev = context.now;
                        context.now = context.stack.pop();
                        break;

                        // QTEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
                        //   qtext          =   %d33 /             ; Printable US-ASCII
                        //                      %d35-91 /          ;  characters not including
                        //                      %d93-126 /         ;  "\" or the quote character
                        //                      obs-qtext
                        //
                        //   obs-qtext      =   obs-NO-WS-CTL
                        //
                        //   obs-NO-WS-CTL  =   %d1-8 /            ; US-ASCII control
                        //                      %d11 /             ;  characters that do not
                        //                      %d12 /             ;  include the carriage
                        //                      %d14-31 /          ;  return, line feed, and
                        //                      %d127              ;  white space characters
                        charCode = token.codePointAt(0);

                        if ((charCode !== 127 && internals.c1Controls(charCode)) || charCode === 0 || charCode === 10) {
                            updateResult(internals.diagnoses.errExpectingQTEXT);
                        }
                        else if (internals.c0Controls(charCode) || charCode === 127) {
                            updateResult(internals.diagnoses.deprecatedQTEXT);
                        }

                        parseData.local += token;
                        atomData.locals[elementCount] += token;
                        elementLength += Buffer.byteLength(token, 'utf8');
                }

                // http://tools.ietf.org/html/rfc5322#section-3.4.1
                //   If the string can be represented as a dot-atom (that is, it contains
                //   no characters other than atext characters or "." surrounded by atext
                //   characters), then the dot-atom form SHOULD be used and the quoted-
                //   string form SHOULD NOT be used.

                break;
                // Quoted pair
            case internals.components.contextQuotedPair:
                // http://tools.ietf.org/html/rfc5322#section-3.2.1
                //   quoted-pair     =   ("\" (VCHAR / WSP)) / obs-qp
                //
                //   VCHAR           =  %d33-126   ; visible (printing) characters
                //   WSP             =  SP / HTAB  ; white space
                //
                //   obs-qp          =   "\" (%d0 / obs-NO-WS-CTL / LF / CR)
                //
                //   obs-NO-WS-CTL   =   %d1-8 /   ; US-ASCII control
                //                       %d11 /    ;  characters that do not
                //                       %d12 /    ;  include the carriage
                //                       %d14-31 / ;  return, line feed, and
                //                       %d127     ;  white space characters
                //
                // i.e. obs-qp       =  "\" (%d0-8, %d10-31 / %d127)
                charCode = token.codePointAt(0);

                if (charCode !== 127 &&  internals.c1Controls(charCode)) {
                    // Fatal error
                    updateResult(internals.diagnoses.errExpectingQPair);
                }
                else if ((charCode < 31 && charCode !== 9) || charCode === 127) {
                    // ' ' and '\t' are allowed
                    updateResult(internals.diagnoses.deprecatedQP);
                }

                // At this point we know where this qpair occurred so we could check to see if the character actually needed to be quoted at all.
                // http://tools.ietf.org/html/rfc5321#section-4.1.2
                //   the sending system SHOULD transmit the form that uses the minimum quoting possible.

                context.prev = context.now;
                // End of qpair
                context.now = context.stack.pop();
                const escapeToken = '\\' + token;

                switch (context.now) {
                    case internals.components.contextComment:
                        break;

                    case internals.components.contextQuotedString:
                        parseData.local += escapeToken;
                        atomData.locals[elementCount] += escapeToken;

                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
                        elementLength += 2;
                        break;

                    case internals.components.literal:
                        parseData.domain += escapeToken;
                        atomData.domains[elementCount] += escapeToken;

                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
                        elementLength += 2;
                        break;

                        // $lab:coverage:off$
                    default:
                        throw new Error('quoted pair logic invoked in an invalid context: ' + context.now);
                        // $lab:coverage:on$
                }

                break;

                // Comment
            case internals.components.contextComment:
                // http://tools.ietf.org/html/rfc5322#section-3.2.2
                //   comment  = "(" *([FWS] ccontent) [FWS] ")"
                //
                //   ccontent = ctext / quoted-pair / comment
                switch (token) {
                    // Nested comment
                    case '(':
                        // Nested comments are ok
                        context.stack.push(context.now);
                        context.now = internals.components.contextComment;
                        break;

                        // End of comment
                    case ')':
                        context.prev = context.now;
                        context.now = context.stack.pop();
                        break;

                        // Quoted pair
                    case '\\':
                        context.stack.push(context.now);
                        context.now = internals.components.contextQuotedPair;
                        break;

                        // Folding white space
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                            break;
                        }

                        // Fallthrough

                    case ' ':
                    case '\t':
                        updateResult(internals.diagnoses.cfwsFWS);

                        context.stack.push(context.now);
                        context.now = internals.components.contextFWS;
                        prevToken = token;
                        break;

                        // CTEXT
                    default:
                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
                        //   ctext         = %d33-39 /  ; Printable US-ASCII
                        //                   %d42-91 /  ;  characters not including
                        //                   %d93-126 / ;  "(", ")", or "\"
                        //                   obs-ctext
                        //
                        //   obs-ctext     = obs-NO-WS-CTL
                        //
                        //   obs-NO-WS-CTL = %d1-8 /    ; US-ASCII control
                        //                   %d11 /     ;  characters that do not
                        //                   %d12 /     ;  include the carriage
                        //                   %d14-31 /  ;  return, line feed, and
                        //                   %d127      ;  white space characters
                        charCode = token.codePointAt(0);

                        if (charCode === 0 || charCode === 10 || (charCode !== 127 && internals.c1Controls(charCode))) {
                            // Fatal error
                            updateResult(internals.diagnoses.errExpectingCTEXT);
                            break;
                        }
                        else if (internals.c0Controls(charCode) || charCode === 127) {
                            updateResult(internals.diagnoses.deprecatedCTEXT);
                        }
                }

                break;

                // Folding white space
            case internals.components.contextFWS:
                // http://tools.ietf.org/html/rfc5322#section-3.2.2
                //   FWS     =   ([*WSP CRLF] 1*WSP) /  obs-FWS
                //                                   ; Folding white space

                // But note the erratum:
                // http://www.rfc-editor.org/errata_search.php?rfc=5322&eid=1908:
                //   In the obsolete syntax, any amount of folding white space MAY be
                //   inserted where the obs-FWS rule is allowed.  This creates the
                //   possibility of having two consecutive "folds" in a line, and
                //   therefore the possibility that a line which makes up a folded header
                //   field could be composed entirely of white space.
                //
                //   obs-FWS =   1*([CRLF] WSP)

                if (prevToken === '\r') {
                    if (token === '\r') {
                        // Fatal error
                        updateResult(internals.diagnoses.errFWSCRLFx2);
                        break;
                    }

                    if (++crlfCount > 1) {
                        // Multiple folds => obsolete FWS
                        updateResult(internals.diagnoses.deprecatedFWS);
                    }
                    else {
                        crlfCount = 1;
                    }
                }

                switch (token) {
                    case '\r':
                        if (emailLength === ++i || email[i] !== '\n') {
                            // Fatal error
                            updateResult(internals.diagnoses.errCRNoLF);
                        }

                        break;

                    case ' ':
                    case '\t':
                        break;

                    default:
                        if (prevToken === '\r') {
                            // Fatal error
                            updateResult(internals.diagnoses.errFWSCRLFEnd);
                        }

                        crlfCount = 0;

                        // End of FWS
                        context.prev = context.now;
                        context.now = context.stack.pop();

                        // Look at this token again in the parent context
                        --i;
                }

                prevToken = token;
                break;

                // Unexpected context
                // $lab:coverage:off$
            default:
                throw new Error('unknown context: ' + context.now);
                // $lab:coverage:on$
        } // Primary state machine

        if (maxResult > internals.categories.rfc5322) {
            // Fatal error, no point continuing
            break;
        }
    } // Token loop

    // Check for errors
    if (maxResult < internals.categories.rfc5322) {
        const punycodeLength = Punycode.toASCII(parseData.domain).length;
        // Fatal errors
        if (context.now === internals.components.contextQuotedString) {
            updateResult(internals.diagnoses.errUnclosedQuotedString);
        }
        else if (context.now === internals.components.contextQuotedPair) {
            updateResult(internals.diagnoses.errBackslashEnd);
        }
        else if (context.now === internals.components.contextComment) {
            updateResult(internals.diagnoses.errUnclosedComment);
        }
        else if (context.now === internals.components.literal) {
            updateResult(internals.diagnoses.errUnclosedDomainLiteral);
        }
        else if (token === '\r') {
            updateResult(internals.diagnoses.errFWSCRLFEnd);
        }
        else if (parseData.domain.length === 0) {
            updateResult(internals.diagnoses.errNoDomain);
        }
        else if (elementLength === 0) {
            updateResult(internals.diagnoses.errDotEnd);
        }
        else if (hyphenFlag) {
            updateResult(internals.diagnoses.errDomainHyphenEnd);
        }

        // Other errors
        else if (punycodeLength > 255) {
            // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.2
            //   The maximum total length of a domain name or number is 255 octets.
            updateResult(internals.diagnoses.rfc5322DomainTooLong);
        }
        else if (Buffer.byteLength(parseData.local, 'utf8') + punycodeLength + /* '@' */ 1 > 254) {
            // http://tools.ietf.org/html/rfc5321#section-4.1.2
            //   Forward-path   = Path
            //
            //   Path           = "<" [ A-d-l ":" ] Mailbox ">"
            //
            // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
            //   The maximum total length of a reverse-path or forward-path is 256 octets (including the punctuation and element separators).
            //
            // Thus, even without (obsolete) routing information, the Mailbox can only be 254 characters long. This is confirmed by this verified
            // erratum to RFC 3696:
            //
            // http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
            //   However, there is a restriction in RFC 2821 on the length of an address in MAIL and RCPT commands of 254 characters.  Since
            //   addresses that do not fit in those fields are not normally useful, the upper limit on address lengths should normally be considered
            //   to be 254.
            updateResult(internals.diagnoses.rfc5322TooLong);
        }
        else if (elementLength > 63) {
            // http://tools.ietf.org/html/rfc1035#section-2.3.4
            // labels   63 octets or less
            updateResult(internals.diagnoses.rfc5322LabelTooLong);
        }
        else if (options.minDomainAtoms && atomData.domains.length < options.minDomainAtoms && (atomData.domains.length !== 1 || atomData.domains[0][0] !== '[')) {
            updateResult(internals.diagnoses.errDomainTooShort);
        }
        else if (internals.hasDomainLiteralThenAtom(atomData.domains)) {
            updateResult(internals.diagnoses.errDotAfterDomainLiteral);
        }
        else if (options.tldWhitelist || options.tldBlacklist) {
            const tldAtom = atomData.domains[elementCount];

            if (!internals.validDomain(tldAtom, options)) {
                updateResult(internals.diagnoses.errUnknownTLD);
            }
        }
    } // Check for errors

    // Finish
    if (maxResult < internals.categories.dnsWarn) {
        // Per RFC 5321, domain atoms are limited to letter-digit-hyphen, so we only need to check code <= 57 to check for a digit
        const code = atomData.domains[elementCount].codePointAt(0);

        if (code <= 57) {
            updateResult(internals.diagnoses.rfc5321TLDNumeric);
        }
    }

    if (maxResult < threshold) {
        maxResult = internals.diagnoses.valid;
    }

    const finishResult = diagnose ? maxResult : maxResult < internals.defaultThreshold;

    // $lab:coverage:off$
    if (callback) {
        callback(finishResult);
    }
    // $lab:coverage:on$

    return finishResult;
};


exports.diagnoses = internals.validate.diagnoses = (function () {

    const diag = {};
    const keys = Object.keys(internals.diagnoses);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        diag[key] = internals.diagnoses[key];
    }

    return diag;
})();


exports.normalize = internals.normalize;


/***/ }),

/***/ "../../joi/lib/cast.js":
/*!*********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/cast.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const Ref = __webpack_require__(/*! ./ref */ "../../joi/lib/ref.js");

// Type modules are delay-loaded to prevent circular dependencies


// Declare internals

const internals = {};


exports.schema = function (Joi, config) {

    if (config !== undefined && config !== null && typeof config === 'object') {

        if (config.isJoi) {
            return config;
        }

        if (Array.isArray(config)) {
            return Joi.alternatives().try(config);
        }

        if (config instanceof RegExp) {
            return Joi.string().regex(config);
        }

        if (config instanceof Date) {
            return Joi.date().valid(config);
        }

        return Joi.object().keys(config);
    }

    if (typeof config === 'string') {
        return Joi.string().valid(config);
    }

    if (typeof config === 'number') {
        return Joi.number().valid(config);
    }

    if (typeof config === 'boolean') {
        return Joi.boolean().valid(config);
    }

    if (Ref.isRef(config)) {
        return Joi.valid(config);
    }

    Hoek.assert(config === null, 'Invalid schema content:', config);

    return Joi.valid(null);
};


exports.ref = function (id) {

    return Ref.isRef(id) ? id : Ref.create(id);
};


/***/ }),

/***/ "../../joi/lib/errors.js":
/*!***********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/errors.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const Language = __webpack_require__(/*! ./language */ "../../joi/lib/language.js");


// Declare internals

const internals = {
    annotations: Symbol('joi-annotations')
};

internals.stringify = function (value, wrapArrays) {

    const type = typeof value;

    if (value === null) {
        return 'null';
    }

    if (type === 'string') {
        return value;
    }

    if (value instanceof exports.Err || type === 'function' || type === 'symbol') {
        return value.toString();
    }

    if (type === 'object') {
        if (Array.isArray(value)) {
            let partial = '';

            for (let i = 0; i < value.length; ++i) {
                partial = partial + (partial.length ? ', ' : '') + internals.stringify(value[i], wrapArrays);
            }

            return wrapArrays ? '[' + partial + ']' : partial;
        }

        return value.toString();
    }

    return JSON.stringify(value);
};

exports.Err = class {

    constructor(type, context, state, options, flags, message, template) {

        this.isJoi = true;
        this.type = type;
        this.context = context || {};
        this.context.key = state.path[state.path.length - 1];
        this.context.label = state.key;
        this.path = state.path;
        this.options = options;
        this.flags = flags;
        this.message = message;
        this.template = template;

        const localized = this.options.language;

        if (this.flags.label) {
            this.context.label = this.flags.label;
        }
        else if (localized &&                   // language can be null for arrays exclusion check
            (this.context.label === '' ||
            this.context.label === null)) {
            this.context.label = localized.root || Language.errors.root;
        }
    }

    toString() {

        if (this.message) {
            return this.message;
        }

        let format;

        if (this.template) {
            format = this.template;
        }

        const localized = this.options.language;

        format = format || Hoek.reach(localized, this.type) || Hoek.reach(Language.errors, this.type);

        if (format === undefined) {
            return `Error code "${this.type}" is not defined, your custom type is missing the correct language definition`;
        }

        let wrapArrays = Hoek.reach(localized, 'messages.wrapArrays');
        if (typeof wrapArrays !== 'boolean') {
            wrapArrays = Language.errors.messages.wrapArrays;
        }

        if (format === null) {
            const childrenString = internals.stringify(this.context.reason, wrapArrays);
            if (wrapArrays) {
                return childrenString.slice(1, -1);
            }

            return childrenString;
        }

        const hasKey = /{{!?label}}/.test(format);
        const skipKey = format.length > 2 && format[0] === '!' && format[1] === '!';

        if (skipKey) {
            format = format.slice(2);
        }

        if (!hasKey && !skipKey) {
            const localizedKey = Hoek.reach(localized, 'key');
            if (typeof localizedKey === 'string') {
                format = localizedKey + format;
            }
            else {
                format = Hoek.reach(Language.errors, 'key') + format;
            }
        }

        const message =  format.replace(/{{(!?)([^}]+)}}/g, ($0, isSecure, name) => {

            const value = Hoek.reach(this.context, name);
            const normalized = internals.stringify(value, wrapArrays);
            return (isSecure && this.options.escapeHtml ? Hoek.escapeHtml(normalized) : normalized);
        });

        this.toString = () => message;  // Persist result of last toString call, it won't change

        return message;
    }

};


exports.create = function (type, context, state, options, flags, message, template) {

    return new exports.Err(type, context, state, options, flags, message, template);
};


exports.process = function (errors, object) {

    if (!errors) {
        return null;
    }

    // Construct error

    let message = '';
    const details = [];

    const processErrors = function (localErrors, parent, overrideMessage) {

        for (let i = 0; i < localErrors.length; ++i) {
            const item = localErrors[i];

            if (item instanceof Error) {
                return item;
            }

            if (item.flags.error && typeof item.flags.error !== 'function') {
                if (!item.flags.selfError || !item.context.reason) {
                    return item.flags.error;
                }
            }

            let itemMessage;
            if (parent === undefined) {
                itemMessage = item.toString();
                message = message + (message ? '. ' : '') + itemMessage;
            }

            // Do not push intermediate errors, we're only interested in leafs

            if (item.context.reason) {
                const override = processErrors(item.context.reason, item.path, item.type === 'override' ? item.message : null);
                if (override) {
                    return override;
                }
            }
            else {
                details.push({
                    message: overrideMessage || itemMessage || item.toString(),
                    path: item.path,
                    type: item.type,
                    context: item.context
                });
            }
        }
    };

    const override = processErrors(errors);
    if (override) {
        return override;
    }

    const error = new Error(message);
    error.isJoi = true;
    error.name = 'ValidationError';
    error.details = details;
    error._object = object;
    error.annotate = internals.annotate;
    return error;
};


// Inspired by json-stringify-safe
internals.safeStringify = function (obj, spaces) {

    return JSON.stringify(obj, internals.serializer(), spaces);
};

internals.serializer = function () {

    const keys = [];
    const stack = [];

    const cycleReplacer = (key, value) => {

        if (stack[0] === value) {
            return '[Circular ~]';
        }

        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
    };

    return function (key, value) {

        if (stack.length > 0) {
            const thisPos = stack.indexOf(this);
            if (~thisPos) {
                stack.length = thisPos + 1;
                keys.length = thisPos + 1;
                keys[thisPos] = key;
            }
            else {
                stack.push(this);
                keys.push(key);
            }

            if (~stack.indexOf(value)) {
                value = cycleReplacer.call(this, key, value);
            }
        }
        else {
            stack.push(value);
        }

        if (value) {
            const annotations = value[internals.annotations];
            if (annotations) {
                if (Array.isArray(value)) {
                    const annotated = [];

                    for (let i = 0; i < value.length; ++i) {
                        if (annotations.errors[i]) {
                            annotated.push(`_$idx$_${annotations.errors[i].sort().join(', ')}_$end$_`);
                        }

                        annotated.push(value[i]);
                    }

                    value = annotated;
                }
                else {
                    const errorKeys = Object.keys(annotations.errors);
                    for (let i = 0; i < errorKeys.length; ++i) {
                        const errorKey = errorKeys[i];
                        value[`${errorKey}_$key$_${annotations.errors[errorKey].sort().join(', ')}_$end$_`] = value[errorKey];
                        value[errorKey] = undefined;
                    }

                    const missingKeys = Object.keys(annotations.missing);
                    for (let i = 0; i < missingKeys.length; ++i) {
                        const missingKey = missingKeys[i];
                        value[`_$miss$_${missingKey}|${annotations.missing[missingKey]}_$end$_`] = '__missing__';
                    }
                }

                return value;
            }
        }

        if (value === Infinity || value === -Infinity || Number.isNaN(value) ||
            typeof value === 'function' || typeof value === 'symbol') {
            return '[' + value.toString() + ']';
        }

        return value;
    };
};


internals.annotate = function (stripColorCodes) {

    const redFgEscape = stripColorCodes ? '' : '\u001b[31m';
    const redBgEscape = stripColorCodes ? '' : '\u001b[41m';
    const endColor = stripColorCodes ? '' : '\u001b[0m';

    if (typeof this._object !== 'object') {
        return this.details[0].message;
    }

    const obj = Hoek.clone(this._object || {});

    for (let i = this.details.length - 1; i >= 0; --i) {        // Reverse order to process deepest child first
        const pos = i + 1;
        const error = this.details[i];
        const path = error.path;
        let ref = obj;
        for (let j = 0; ; ++j) {
            const seg = path[j];

            if (ref.isImmutable) {
                ref = ref.clone();                              // joi schemas are not cloned by hoek, we have to take this extra step
            }

            if (j + 1 < path.length &&
                ref[seg] &&
                typeof ref[seg] !== 'string') {

                ref = ref[seg];
            }
            else {
                const refAnnotations = ref[internals.annotations] = ref[internals.annotations] || { errors: {}, missing: {} };
                const value = ref[seg];
                const cacheKey = seg || error.context.label;

                if (value !== undefined) {
                    refAnnotations.errors[cacheKey] = refAnnotations.errors[cacheKey] || [];
                    refAnnotations.errors[cacheKey].push(pos);
                }
                else {
                    refAnnotations.missing[cacheKey] = pos;
                }

                break;
            }
        }
    }

    const replacers = {
        key: /_\$key\$_([, \d]+)_\$end\$_"/g,
        missing: /"_\$miss\$_([^|]+)\|(\d+)_\$end\$_": "__missing__"/g,
        arrayIndex: /\s*"_\$idx\$_([, \d]+)_\$end\$_",?\n(.*)/g,
        specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)]"/g
    };

    let message = internals.safeStringify(obj, 2)
        .replace(replacers.key, ($0, $1) => `" ${redFgEscape}[${$1}]${endColor}`)
        .replace(replacers.missing, ($0, $1, $2) => `${redBgEscape}"${$1}"${endColor}${redFgEscape} [${$2}]: -- missing --${endColor}`)
        .replace(replacers.arrayIndex, ($0, $1, $2) => `\n${$2} ${redFgEscape}[${$1}]${endColor}`)
        .replace(replacers.specials, ($0, $1) => $1);

    message = `${message}\n${redFgEscape}`;

    for (let i = 0; i < this.details.length; ++i) {
        const pos = i + 1;
        message = `${message}\n[${pos}] ${this.details[i].message}`;
    }

    message = message + endColor;

    return message;
};


/***/ }),

/***/ "../../joi/lib/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const Any = __webpack_require__(/*! ./types/any */ "../../joi/lib/types/any/index.js");
const Cast = __webpack_require__(/*! ./cast */ "../../joi/lib/cast.js");
const Errors = __webpack_require__(/*! ./errors */ "../../joi/lib/errors.js");
const Lazy = __webpack_require__(/*! ./types/lazy */ "../../joi/lib/types/lazy/index.js");
const Ref = __webpack_require__(/*! ./ref */ "../../joi/lib/ref.js");
const Settings = __webpack_require__(/*! ./types/any/settings */ "../../joi/lib/types/any/settings.js");


// Declare internals

const internals = {
    alternatives: __webpack_require__(/*! ./types/alternatives */ "../../joi/lib/types/alternatives/index.js"),
    array: __webpack_require__(/*! ./types/array */ "../../joi/lib/types/array/index.js"),
    boolean: __webpack_require__(/*! ./types/boolean */ "../../joi/lib/types/boolean/index.js"),
    binary: __webpack_require__(/*! ./types/binary */ "../../joi/lib/types/binary/index.js"),
    date: __webpack_require__(/*! ./types/date */ "../../joi/lib/types/date/index.js"),
    func: __webpack_require__(/*! ./types/func */ "../../joi/lib/types/func/index.js"),
    number: __webpack_require__(/*! ./types/number */ "../../joi/lib/types/number/index.js"),
    object: __webpack_require__(/*! ./types/object */ "../../joi/lib/types/object/index.js"),
    string: __webpack_require__(/*! ./types/string */ "../../joi/lib/types/string/index.js"),
    symbol: __webpack_require__(/*! ./types/symbol */ "../../joi/lib/types/symbol/index.js")
};

internals.callWithDefaults = function (schema, args) {

    Hoek.assert(this, 'Must be invoked on a Joi instance.');

    if (this._defaults) {
        schema = this._defaults(schema);
    }

    schema._currentJoi = this;

    return schema._init(...args);
};

internals.root = function () {

    const any = new Any();

    const root = any.clone();
    Any.prototype._currentJoi = root;
    root._currentJoi = root;
    root._binds = new Set(['any', 'alternatives', 'alt', 'array', 'boolean', 'binary', 'date', 'func', 'number', 'object', 'string', 'symbol', 'validate', 'describe', 'compile', 'assert', 'attempt', 'lazy', 'defaults', 'extend', 'allow', 'valid', 'only', 'equal', 'invalid', 'disallow', 'not', 'required', 'exist', 'optional', 'forbidden', 'strip', 'when', 'empty', 'default']);

    root.any = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.any() does not allow arguments.');

        return internals.callWithDefaults.call(this, any, args);
    };

    root.alternatives = root.alt = function (...args) {

        return internals.callWithDefaults.call(this, internals.alternatives, args);
    };

    root.array = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.array() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.array, args);
    };

    root.boolean = root.bool = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.boolean() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.boolean, args);
    };

    root.binary = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.binary() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.binary, args);
    };

    root.date = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.date() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.date, args);
    };

    root.func = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.func() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.func, args);
    };

    root.number = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.number() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.number, args);
    };

    root.object = function (...args) {

        return internals.callWithDefaults.call(this, internals.object, args);
    };

    root.string = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.string() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.string, args);
    };

    root.symbol = function (...args) {

        Hoek.assert(args.length === 0, 'Joi.symbol() does not allow arguments.');

        return internals.callWithDefaults.call(this, internals.symbol, args);
    };

    root.ref = function (...args) {

        return Ref.create(...args);
    };

    root.isRef = function (ref) {

        return Ref.isRef(ref);
    };

    root.validate = function (value, ...args /*, [schema], [options], callback */) {

        const last = args[args.length - 1];
        const callback = typeof last === 'function' ? last : null;

        const count = args.length - (callback ? 1 : 0);
        if (count === 0) {
            return any.validate(value, callback);
        }

        const options = count === 2 ? args[1] : undefined;
        const schema = this.compile(args[0]);

        return schema._validateWithOptions(value, options, callback);
    };

    root.describe = function (...args) {

        const schema = args.length ? this.compile(args[0]) : any;
        return schema.describe();
    };

    root.compile = function (schema) {

        try {
            return Cast.schema(this, schema);
        }
        catch (err) {
            if (err.hasOwnProperty('path')) {
                err.message = err.message + '(' + err.path + ')';
            }

            throw err;
        }
    };

    root.assert = function (value, schema, message) {

        this.attempt(value, schema, message);
    };

    root.attempt = function (value, schema, message) {

        const result = this.validate(value, schema);
        const error = result.error;
        if (error) {
            if (!message) {
                if (typeof error.annotate === 'function') {
                    error.message = error.annotate();
                }

                throw error;
            }

            if (!(message instanceof Error)) {
                if (typeof error.annotate === 'function') {
                    error.message = `${message} ${error.annotate()}`;
                }

                throw error;
            }

            throw message;
        }

        return result.value;
    };

    root.reach = function (schema, path) {

        Hoek.assert(schema && schema instanceof Any, 'you must provide a joi schema');
        Hoek.assert(Array.isArray(path) || typeof path === 'string', 'path must be a string or an array of strings');

        const reach = (sourceSchema, schemaPath) => {

            if (!schemaPath.length) {
                return sourceSchema;
            }

            const children = sourceSchema._inner.children;
            if (!children) {
                return;
            }

            const key = schemaPath.shift();
            for (let i = 0; i < children.length; ++i) {
                const child = children[i];
                if (child.key === key) {
                    return reach(child.schema, schemaPath);
                }
            }
        };

        const schemaPath = typeof path === 'string' ? (path ? path.split('.') : []) : path.slice();

        return reach(schema, schemaPath);
    };

    root.lazy = function (...args) {

        return internals.callWithDefaults.call(this, Lazy, args);
    };

    root.defaults = function (fn) {

        Hoek.assert(typeof fn === 'function', 'Defaults must be a function');

        let joi = Object.create(this.any());
        joi = fn(joi);

        Hoek.assert(joi && joi instanceof this.constructor, 'defaults() must return a schema');

        Object.assign(joi, this, joi.clone()); // Re-add the types from `this` but also keep the settings from joi's potential new defaults

        joi._defaults = (schema) => {

            if (this._defaults) {
                schema = this._defaults(schema);
                Hoek.assert(schema instanceof this.constructor, 'defaults() must return a schema');
            }

            schema = fn(schema);
            Hoek.assert(schema instanceof this.constructor, 'defaults() must return a schema');
            return schema;
        };

        return joi;
    };

    root.bind = function () {

        const joi = Object.create(this);

        joi._binds.forEach((bind) => {

            joi[bind] = joi[bind].bind(joi);
        });

        return joi;
    };

    root.extend = function (...args) {

        const extensions = Hoek.flatten(args);
        Hoek.assert(extensions.length > 0, 'You need to provide at least one extension');

        this.assert(extensions, root.extensionsSchema);

        const joi = Object.create(this.any());
        Object.assign(joi, this);
        joi._currentJoi = joi;
        joi._binds = new Set(joi._binds);

        for (let i = 0; i < extensions.length; ++i) {
            let extension = extensions[i];

            if (typeof extension === 'function') {
                extension = extension(joi);
            }

            this.assert(extension, root.extensionSchema);

            const base = (extension.base || this.any()).clone(); // Cloning because we're going to override language afterwards
            const ctor = base.constructor;
            const type = class extends ctor { // eslint-disable-line no-loop-func

                constructor() {

                    super();
                    if (extension.base) {
                        Object.assign(this, base);
                    }

                    this._type = extension.name;

                    if (extension.language) {
                        this._settings = Settings.concat(this._settings, {
                            language: {
                                [extension.name]: extension.language
                            }
                        });
                    }
                }

            };

            if (extension.coerce) {
                type.prototype._coerce = function (value, state, options) {

                    if (ctor.prototype._coerce) {
                        const baseRet = ctor.prototype._coerce.call(this, value, state, options);

                        if (baseRet.errors) {
                            return baseRet;
                        }

                        value = baseRet.value;
                    }

                    const ret = extension.coerce.call(this, value, state, options);
                    if (ret instanceof Errors.Err) {
                        return { value, errors: ret };
                    }

                    return { value: ret };
                };
            }

            if (extension.pre) {
                type.prototype._base = function (value, state, options) {

                    if (ctor.prototype._base) {
                        const baseRet = ctor.prototype._base.call(this, value, state, options);

                        if (baseRet.errors) {
                            return baseRet;
                        }

                        value = baseRet.value;
                    }

                    const ret = extension.pre.call(this, value, state, options);
                    if (ret instanceof Errors.Err) {
                        return { value, errors: ret };
                    }

                    return { value: ret };
                };
            }

            if (extension.rules) {
                for (let j = 0; j < extension.rules.length; ++j) {
                    const rule = extension.rules[j];
                    const ruleArgs = rule.params ?
                        (rule.params instanceof Any ? rule.params._inner.children.map((k) => k.key) : Object.keys(rule.params)) :
                        [];
                    const validateArgs = rule.params ? Cast.schema(this, rule.params) : null;

                    type.prototype[rule.name] = function (...rArgs) { // eslint-disable-line no-loop-func

                        if (rArgs.length > ruleArgs.length) {
                            throw new Error('Unexpected number of arguments');
                        }

                        let hasRef = false;
                        let arg = {};

                        for (let k = 0; k < ruleArgs.length; ++k) {
                            arg[ruleArgs[k]] = rArgs[k];
                            if (!hasRef && Ref.isRef(rArgs[k])) {
                                hasRef = true;
                            }
                        }

                        if (validateArgs) {
                            arg = joi.attempt(arg, validateArgs);
                        }

                        let schema;
                        if (rule.validate) {
                            const validate = function (value, state, options) {

                                return rule.validate.call(this, arg, value, state, options);
                            };

                            schema = this._test(rule.name, arg, validate, {
                                description: rule.description,
                                hasRef
                            });
                        }
                        else {
                            schema = this.clone();
                        }

                        if (rule.setup) {
                            const newSchema = rule.setup.call(schema, arg);
                            if (newSchema !== undefined) {
                                Hoek.assert(newSchema instanceof Any, `Setup of extension Joi.${this._type}().${rule.name}() must return undefined or a Joi object`);
                                schema = newSchema;
                            }
                        }

                        return schema;
                    };
                }
            }

            if (extension.describe) {
                type.prototype.describe = function () {

                    const description = ctor.prototype.describe.call(this);
                    return extension.describe.call(this, description);
                };
            }

            const instance = new type();
            joi[extension.name] = function (...extArgs) {

                return internals.callWithDefaults.call(this, instance, extArgs);
            };

            joi._binds.add(extension.name);
        }

        return joi;
    };

    root.extensionSchema = internals.object.keys({
        base: internals.object.type(Any, 'Joi object'),
        name: internals.string.required(),
        coerce: internals.func.arity(3),
        pre: internals.func.arity(3),
        language: internals.object,
        describe: internals.func.arity(1),
        rules: internals.array.items(internals.object.keys({
            name: internals.string.required(),
            setup: internals.func.arity(1),
            validate: internals.func.arity(4),
            params: [
                internals.object.pattern(/.*/, internals.object.type(Any, 'Joi object')),
                internals.object.type(internals.object.constructor, 'Joi object')
            ],
            description: [internals.string, internals.func.arity(1)]
        }).or('setup', 'validate'))
    }).strict();

    root.extensionsSchema = internals.array.items([internals.object, internals.func.arity(1)]).strict();

    root.version = __webpack_require__(/*! ../package.json */ "../../joi/package.json").version;

    return root;
};


module.exports = internals.root();


/***/ }),

/***/ "../../joi/lib/language.js":
/*!*************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/language.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules


// Declare internals

const internals = {};


exports.errors = {
    root: 'value',
    key: '"{{!label}}" ',
    messages: {
        wrapArrays: true
    },
    any: {
        unknown: 'is not allowed',
        invalid: 'contains an invalid value',
        empty: 'is not allowed to be empty',
        required: 'is required',
        allowOnly: 'must be one of {{valids}}',
        default: 'threw an error when running default method'
    },
    alternatives: {
        base: 'not matching any of the allowed alternatives',
        child: null
    },
    array: {
        base: 'must be an array',
        includes: 'at position {{pos}} does not match any of the allowed types',
        includesSingle: 'single value of "{{!label}}" does not match any of the allowed types',
        includesOne: 'at position {{pos}} fails because {{reason}}',
        includesOneSingle: 'single value of "{{!label}}" fails because {{reason}}',
        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
        includesRequiredKnowns: 'does not contain {{knownMisses}}',
        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
        excludes: 'at position {{pos}} contains an excluded value',
        excludesSingle: 'single value of "{{!label}}" contains an excluded value',
        hasKnown: 'does not contain at least one required match for type "{{!patternLabel}}"',
        hasUnknown: 'does not contain at least one required match',
        min: 'must contain at least {{limit}} items',
        max: 'must contain less than or equal to {{limit}} items',
        length: 'must contain {{limit}} items',
        ordered: 'at position {{pos}} fails because {{reason}}',
        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
        ref: 'references "{{ref}}" which is not a positive integer',
        sparse: 'must not be a sparse array',
        unique: 'position {{pos}} contains a duplicate value'
    },
    boolean: {
        base: 'must be a boolean'
    },
    binary: {
        base: 'must be a buffer or a string',
        min: 'must be at least {{limit}} bytes',
        max: 'must be less than or equal to {{limit}} bytes',
        length: 'must be {{limit}} bytes'
    },
    date: {
        base: 'must be a number of milliseconds or valid date string',
        strict: 'must be a valid date',
        min: 'must be larger than or equal to "{{limit}}"',
        max: 'must be less than or equal to "{{limit}}"',
        less: 'must be less than "{{limit}}"',
        greater: 'must be greater than "{{limit}}"',
        isoDate: 'must be a valid ISO 8601 date',
        timestamp: {
            javascript: 'must be a valid timestamp or number of milliseconds',
            unix: 'must be a valid timestamp or number of seconds'
        },
        ref: 'references "{{ref}}" which is not a date'
    },
    function: {
        base: 'must be a Function',
        arity: 'must have an arity of {{n}}',
        minArity: 'must have an arity greater or equal to {{n}}',
        maxArity: 'must have an arity lesser or equal to {{n}}',
        ref: 'must be a Joi reference',
        class: 'must be a class'
    },
    lazy: {
        base: '!!schema error: lazy schema must be set',
        schema: '!!schema error: lazy schema function must return a schema'
    },
    object: {
        base: 'must be an object',
        child: '!!child "{{!child}}" fails because {{reason}}',
        min: 'must have at least {{limit}} children',
        max: 'must have less than or equal to {{limit}} children',
        length: 'must have {{limit}} children',
        allowUnknown: '!!"{{!child}}" is not allowed',
        with: '!!"{{mainWithLabel}}" missing required peer "{{peerWithLabel}}"',
        without: '!!"{{mainWithLabel}}" conflict with forbidden peer "{{peerWithLabel}}"',
        missing: 'must contain at least one of {{peersWithLabels}}',
        xor: 'contains a conflict between exclusive peers {{peersWithLabels}}',
        oxor: 'contains a conflict between optional exclusive peers {{peersWithLabels}}',
        and: 'contains {{presentWithLabels}} without its required peers {{missingWithLabels}}',
        nand: '!!"{{mainWithLabel}}" must not exist simultaneously with {{peersWithLabels}}',
        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
        rename: {
            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists',
            regex: {
                multiple: 'cannot rename children {{from}} because multiple renames are disabled and another key was already renamed to "{{to}}"',
                override: 'cannot rename children {{from}} because override is disabled and target "{{to}}" exists'
            }
        },
        type: 'must be an instance of "{{type}}"',
        schema: 'must be a Joi instance'
    },
    number: {
        base: 'must be a number',
        unsafe: 'must be a safe number',
        min: 'must be larger than or equal to {{limit}}',
        max: 'must be less than or equal to {{limit}}',
        less: 'must be less than {{limit}}',
        greater: 'must be greater than {{limit}}',
        integer: 'must be an integer',
        negative: 'must be a negative number',
        positive: 'must be a positive number',
        precision: 'must have no more than {{limit}} decimal places',
        ref: 'references "{{ref}}" which is not a number',
        multiple: 'must be a multiple of {{multiple}}',
        port: 'must be a valid port'
    },
    string: {
        base: 'must be a string',
        min: 'length must be at least {{limit}} characters long',
        max: 'length must be less than or equal to {{limit}} characters long',
        length: 'length must be {{limit}} characters long',
        alphanum: 'must only contain alpha-numeric characters',
        token: 'must only contain alpha-numeric and underscore characters',
        regex: {
            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
            name: 'with value "{{!value}}" fails to match the {{name}} pattern',
            invert: {
                base: 'with value "{{!value}}" matches the inverted pattern: {{pattern}}',
                name: 'with value "{{!value}}" matches the inverted {{name}} pattern'
            }
        },
        email: 'must be a valid email',
        uri: 'must be a valid uri',
        uriRelativeOnly: 'must be a valid relative uri',
        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
        isoDate: 'must be a valid ISO 8601 date',
        guid: 'must be a valid GUID',
        hex: 'must only contain hexadecimal characters',
        hexAlign: 'hex decoded representation must be byte aligned',
        base64: 'must be a valid base64 string',
        dataUri: 'must be a valid dataUri string',
        hostname: 'must be a valid hostname',
        normalize: 'must be unicode normalized in the {{form}} form',
        lowercase: 'must only contain lowercase characters',
        uppercase: 'must only contain uppercase characters',
        trim: 'must not have leading or trailing whitespace',
        creditCard: 'must be a credit card',
        ref: 'references "{{ref}}" which is not a number',
        ip: 'must be a valid ip address with a {{cidr}} CIDR',
        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
    },
    symbol: {
        base: 'must be a symbol',
        map: 'must be one of {{map}}'
    }
};


/***/ }),

/***/ "../../joi/lib/ref.js":
/*!********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/ref.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {};


exports.create = function (key, options) {

    Hoek.assert(typeof key === 'string', 'Invalid reference key:', key);

    const settings = Hoek.clone(options);         // options can be reused and modified

    const ref = function (value, validationOptions) {

        return Hoek.reach(ref.isContext ? validationOptions.context : value, ref.key, settings);
    };

    ref.isContext = (key[0] === ((settings && settings.contextPrefix) || '$'));
    ref.key = (ref.isContext ? key.slice(1) : key);
    ref.path = ref.key.split((settings && settings.separator) || '.');
    ref.depth = ref.path.length;
    ref.root = ref.path[0];
    ref.isJoi = true;

    ref.toString = function () {

        return (ref.isContext ? 'context:' : 'ref:') + ref.key;
    };

    return ref;
};


exports.isRef = function (ref) {

    return typeof ref === 'function' && ref.isJoi;
};


exports.push = function (array, ref) {

    if (exports.isRef(ref) &&
        !ref.isContext) {

        array.push(ref.root);
    }
};


/***/ }),

/***/ "../../joi/lib/schemas.js":
/*!************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/schemas.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Joi = __webpack_require__(/*! ./index */ "../../joi/lib/index.js");


// Declare internals

const internals = {};

exports.options = Joi.object({
    abortEarly: Joi.boolean(),
    convert: Joi.boolean(),
    allowUnknown: Joi.boolean(),
    skipFunctions: Joi.boolean(),
    stripUnknown: [Joi.boolean(), Joi.object({ arrays: Joi.boolean(), objects: Joi.boolean() }).or('arrays', 'objects')],
    language: Joi.object(),
    presence: Joi.string().only('required', 'optional', 'forbidden', 'ignore'),
    raw: Joi.boolean(),
    context: Joi.object(),
    strip: Joi.boolean(),
    noDefaults: Joi.boolean(),
    escapeHtml: Joi.boolean()
}).strict();


/***/ }),

/***/ "../../joi/lib/set.js":
/*!********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/set.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Ref = __webpack_require__(/*! ./ref */ "../../joi/lib/ref.js");


const internals = {};


internals.extendedCheckForValue = function (value, insensitive) {

    const valueType = typeof value;

    if (valueType === 'object') {
        if (value instanceof Date) {
            return (item) => {

                return item instanceof Date && value.getTime() === item.getTime();
            };
        }

        if (Buffer.isBuffer(value)) {
            return (item) => {

                return Buffer.isBuffer(item) && value.length === item.length && value.toString('binary') === item.toString('binary');
            };
        }
    }
    else if (insensitive && valueType === 'string') {
        const lowercaseValue = value.toLowerCase();
        return (item) => {

            return typeof item === 'string' && lowercaseValue === item.toLowerCase();
        };
    }

    return null;
};


module.exports = class InternalSet {

    constructor(from) {

        this._set = new Set(from);
        this._hasRef = false;
    }

    add(value, refs) {

        const isRef = Ref.isRef(value);
        if (!isRef && this.has(value, null, null, false)) {

            return this;
        }

        if (refs !== undefined) { // If it's a merge, we don't have any refs
            Ref.push(refs, value);
        }

        this._set.add(value);

        this._hasRef |= isRef;

        return this;
    }

    merge(add, remove) {

        for (const item of add._set) {
            this.add(item);
        }

        for (const item of remove._set) {
            this.remove(item);
        }

        return this;
    }

    remove(value) {

        this._set.delete(value);
        return this;
    }

    has(value, state, options, insensitive) {

        return !!this.get(value, state, options, insensitive);
    }

    get(value, state, options, insensitive) {

        if (!this._set.size) {
            return false;
        }

        const hasValue = this._set.has(value);
        if (hasValue) {
            return { value };
        }

        const extendedCheck = internals.extendedCheckForValue(value, insensitive);
        if (!extendedCheck) {
            if (state && this._hasRef) {
                for (let item of this._set) {
                    if (Ref.isRef(item)) {
                        item = [].concat(item(state.reference || state.parent, options));
                        const found = item.indexOf(value);
                        if (found >= 0) {
                            return { value: item[found] };
                        }
                    }
                }
            }

            return false;
        }

        return this._has(value, state, options, extendedCheck);
    }

    _has(value, state, options, check) {

        const checkRef = !!(state && this._hasRef);

        const isReallyEqual = function (item) {

            if (value === item) {
                return true;
            }

            return check(item);
        };

        for (let item of this._set) {
            if (checkRef && Ref.isRef(item)) { // Only resolve references if there is a state, otherwise it's a merge
                item = item(state.reference || state.parent, options);

                if (Array.isArray(item)) {
                    const found = item.findIndex(isReallyEqual);
                    if (found >= 0) {
                        return {
                            value: item[found]
                        };
                    }

                    continue;
                }
            }

            if (isReallyEqual(item)) {
                return {
                    value: item
                };
            }
        }

        return false;
    }

    values(options) {

        if (options && options.stripUndefined) {
            const values = [];

            for (const item of this._set) {
                if (item !== undefined) {
                    values.push(item);
                }
            }

            return values;
        }

        return Array.from(this._set);
    }

    slice() {

        const set = new InternalSet(this._set);
        set._hasRef = this._hasRef;
        return set;
    }

    concat(source) {

        const set = new InternalSet([...this._set, ...source._set]);
        set._hasRef = !!(this._hasRef | source._hasRef);
        return set;
    }
};


/***/ }),

/***/ "../../joi/lib/types/alternatives/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/alternatives/index.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Cast = __webpack_require__(/*! ../../cast */ "../../joi/lib/cast.js");
const Ref = __webpack_require__(/*! ../../ref */ "../../joi/lib/ref.js");


// Declare internals

const internals = {};


internals.Alternatives = class extends Any {

    constructor() {

        super();
        this._type = 'alternatives';
        this._invalids.remove(null);
        this._inner.matches = [];
    }

    _init(...args) {

        return args.length ? this.try(...args) : this;
    }

    _base(value, state, options) {

        const errors = [];
        const il = this._inner.matches.length;
        const baseType = this._baseType;

        for (let i = 0; i < il; ++i) {
            const item = this._inner.matches[i];
            if (!item.schema) {
                const schema = item.peek || item.is;
                const input = item.is ? item.ref(state.reference || state.parent, options) : value;
                const failed = schema._validate(input, null, options, state.parent).errors;

                if (failed) {
                    if (item.otherwise) {
                        return item.otherwise._validate(value, state, options);
                    }
                }
                else if (item.then) {
                    return item.then._validate(value, state, options);
                }

                if (i === (il - 1) && baseType) {
                    return baseType._validate(value, state, options);
                }

                continue;
            }

            const result = item.schema._validate(value, state, options);
            if (!result.errors) {     // Found a valid match
                return result;
            }

            errors.push(...result.errors);
        }

        if (errors.length) {
            return { errors: this.createError('alternatives.child', { reason: errors }, state, options) };
        }

        return { errors: this.createError('alternatives.base', null, state, options) };
    }

    try(...schemas) {

        schemas = Hoek.flatten(schemas);
        Hoek.assert(schemas.length, 'Cannot add other alternatives without at least one schema');

        const obj = this.clone();

        for (let i = 0; i < schemas.length; ++i) {
            const cast = Cast.schema(this._currentJoi, schemas[i]);
            if (cast._refs.length) {
                obj._refs.push(...cast._refs);
            }

            obj._inner.matches.push({ schema: cast });
        }

        return obj;
    }

    when(condition, options) {

        let schemaCondition = false;
        Hoek.assert(Ref.isRef(condition) || typeof condition === 'string' || (schemaCondition = condition instanceof Any), 'Invalid condition:', condition);
        Hoek.assert(options, 'Missing options');
        Hoek.assert(typeof options === 'object', 'Invalid options');
        if (schemaCondition) {
            Hoek.assert(!options.hasOwnProperty('is'), '"is" can not be used with a schema condition');
        }
        else {
            Hoek.assert(options.hasOwnProperty('is'), 'Missing "is" directive');
        }

        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

        const obj = this.clone();
        let is;
        if (!schemaCondition) {
            is = Cast.schema(this._currentJoi, options.is);

            if (options.is === null || !(Ref.isRef(options.is) || options.is instanceof Any)) {

                // Only apply required if this wasn't already a schema or a ref, we'll suppose people know what they're doing
                is = is.required();
            }
        }

        const item = {
            ref: schemaCondition ? null : Cast.ref(condition),
            peek: schemaCondition ? condition : null,
            is,
            then: options.then !== undefined ? Cast.schema(this._currentJoi, options.then) : undefined,
            otherwise: options.otherwise !== undefined ? Cast.schema(this._currentJoi, options.otherwise) : undefined
        };

        if (obj._baseType) {

            item.then = item.then && obj._baseType.concat(item.then);
            item.otherwise = item.otherwise && obj._baseType.concat(item.otherwise);
        }

        if (!schemaCondition) {
            Ref.push(obj._refs, item.ref);
            obj._refs.push(...item.is._refs);
        }

        if (item.then && item.then._refs.length) {
            obj._refs.push(...item.then._refs);
        }

        if (item.otherwise && item.otherwise._refs.length) {
            obj._refs.push(...item.otherwise._refs);
        }

        obj._inner.matches.push(item);

        return obj;
    }

    label(name) {

        const obj = super.label(name);
        obj._inner.matches = obj._inner.matches.map((match) => {

            if (match.schema) {
                return { schema: match.schema.label(name) };
            }

            match = Object.assign({}, match);
            if (match.then) {
                match.then = match.then.label(name);
            }

            if (match.otherwise) {
                match.otherwise = match.otherwise.label(name);
            }

            return match;
        });
        return obj;
    }

    describe() {

        const description = super.describe();
        const alternatives = [];
        for (let i = 0; i < this._inner.matches.length; ++i) {
            const item = this._inner.matches[i];
            if (item.schema) {

                // try()

                alternatives.push(item.schema.describe());
            }
            else {

                // when()

                const when = item.is ? {
                    ref: item.ref.toString(),
                    is: item.is.describe()
                } : {
                    peek: item.peek.describe()
                };

                if (item.then) {
                    when.then = item.then.describe();
                }

                if (item.otherwise) {
                    when.otherwise = item.otherwise.describe();
                }

                alternatives.push(when);
            }
        }

        description.alternatives = alternatives;
        return description;
    }

};


module.exports = new internals.Alternatives();


/***/ }),

/***/ "../../joi/lib/types/any/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/any/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const Settings = __webpack_require__(/*! ./settings */ "../../joi/lib/types/any/settings.js");
const Ref = __webpack_require__(/*! ../../ref */ "../../joi/lib/ref.js");
const Errors = __webpack_require__(/*! ../../errors */ "../../joi/lib/errors.js");
const State = __webpack_require__(/*! ../state */ "../../joi/lib/types/state.js");
const Symbols = __webpack_require__(/*! ../symbols */ "../../joi/lib/types/symbols.js");

// Delay-loaded to prevent circular dependencies
let Alternatives = null;
let Cast = null;
let Schemas = null;


// Declare internals

const internals = {
    Set: __webpack_require__(/*! ../../set */ "../../joi/lib/set.js")
};


internals.defaults = {
    abortEarly: true,
    convert: true,
    allowUnknown: false,
    skipFunctions: false,
    stripUnknown: false,
    language: {},
    presence: 'optional',
    strip: false,
    noDefaults: false,
    escapeHtml: false

    // context: null
};


module.exports = internals.Any = class {

    constructor() {

        Cast = Cast || __webpack_require__(/*! ../../cast */ "../../joi/lib/cast.js");

        this.isJoi = true;
        this._type = 'any';
        this._settings = null;
        this._valids = new internals.Set();
        this._invalids = new internals.Set();
        this._tests = [];
        this._refs = [];
        this._flags = {
            /*
             presence: 'optional',                   // optional, required, forbidden, ignore
             allowOnly: false,
             allowUnknown: undefined,
             default: undefined,
             forbidden: false,
             encoding: undefined,
             insensitive: false,
             trim: false,
             normalize: undefined,                   // NFC, NFD, NFKC, NFKD
             case: undefined,                        // upper, lower
             empty: undefined,
             func: false,
             raw: false
             */
        };

        this._description = null;
        this._unit = null;
        this._notes = [];
        this._tags = [];
        this._examples = [];
        this._meta = [];

        this._inner = {};                           // Hash of arrays of immutable objects
    }

    _init() {

        return this;
    }

    get schemaType() {

        return this._type;
    }

    createError(type, context, state, options, flags = this._flags) {

        return Errors.create(type, context, state, options, flags);
    }

    createOverrideError(type, context, state, options, message, template) {

        return Errors.create(type, context, state, options, this._flags, message, template);
    }

    checkOptions(options) {

        Schemas = Schemas || __webpack_require__(/*! ../../schemas */ "../../joi/lib/schemas.js");

        const result = Schemas.options.validate(options);

        if (result.error) {
            throw new Error(result.error.details[0].message);
        }
    }

    clone() {

        const obj = Object.create(Object.getPrototypeOf(this));

        obj.isJoi = true;
        obj._currentJoi = this._currentJoi;
        obj._type = this._type;
        obj._settings = this._settings;
        obj._baseType = this._baseType;
        obj._valids = this._valids.slice();
        obj._invalids = this._invalids.slice();
        obj._tests = this._tests.slice();
        obj._refs = this._refs.slice();
        obj._flags = Hoek.clone(this._flags);

        obj._description = this._description;
        obj._unit = this._unit;
        obj._notes = this._notes.slice();
        obj._tags = this._tags.slice();
        obj._examples = this._examples.slice();
        obj._meta = this._meta.slice();

        obj._inner = {};
        const inners = Object.keys(this._inner);
        for (let i = 0; i < inners.length; ++i) {
            const key = inners[i];
            obj._inner[key] = this._inner[key] ? this._inner[key].slice() : null;
        }

        return obj;
    }

    concat(schema) {

        Hoek.assert(schema instanceof internals.Any, 'Invalid schema object');
        Hoek.assert(this._type === 'any' || schema._type === 'any' || schema._type === this._type, 'Cannot merge type', this._type, 'with another type:', schema._type);

        let obj = this.clone();

        if (this._type === 'any' && schema._type !== 'any') {

            // Reset values as if we were "this"
            const tmpObj = schema.clone();
            const keysToRestore = ['_settings', '_valids', '_invalids', '_tests', '_refs', '_flags', '_description', '_unit',
                '_notes', '_tags', '_examples', '_meta', '_inner'];

            for (let i = 0; i < keysToRestore.length; ++i) {
                tmpObj[keysToRestore[i]] = obj[keysToRestore[i]];
            }

            obj = tmpObj;
        }

        obj._settings = obj._settings ? Settings.concat(obj._settings, schema._settings) : schema._settings;
        obj._valids.merge(schema._valids, schema._invalids);
        obj._invalids.merge(schema._invalids, schema._valids);
        obj._tests.push(...schema._tests);
        obj._refs.push(...schema._refs);
        if (obj._flags.empty && schema._flags.empty) {
            obj._flags.empty = obj._flags.empty.concat(schema._flags.empty);
            const flags = Object.assign({}, schema._flags);
            delete flags.empty;
            Hoek.merge(obj._flags, flags);
        }
        else if (schema._flags.empty) {
            obj._flags.empty = schema._flags.empty;
            const flags = Object.assign({}, schema._flags);
            delete flags.empty;
            Hoek.merge(obj._flags, flags);
        }
        else {
            Hoek.merge(obj._flags, schema._flags);
        }

        obj._description = schema._description || obj._description;
        obj._unit = schema._unit || obj._unit;
        obj._notes.push(...schema._notes);
        obj._tags.push(...schema._tags);
        obj._examples.push(...schema._examples);
        obj._meta.push(...schema._meta);

        const inners = Object.keys(schema._inner);
        const isObject = obj._type === 'object';
        for (let i = 0; i < inners.length; ++i) {
            const key = inners[i];
            const source = schema._inner[key];
            if (source) {
                const target = obj._inner[key];
                if (target) {
                    if (isObject && key === 'children') {
                        const keys = {};

                        for (let j = 0; j < target.length; ++j) {
                            keys[target[j].key] = j;
                        }

                        for (let j = 0; j < source.length; ++j) {
                            const sourceKey = source[j].key;
                            if (keys[sourceKey] >= 0) {
                                target[keys[sourceKey]] = {
                                    key: sourceKey,
                                    schema: target[keys[sourceKey]].schema.concat(source[j].schema)
                                };
                            }
                            else {
                                target.push(source[j]);
                            }
                        }
                    }
                    else {
                        obj._inner[key] = obj._inner[key].concat(source);
                    }
                }
                else {
                    obj._inner[key] = source.slice();
                }
            }
        }

        return obj;
    }

    _test(name, arg, func, options) {

        const obj = this.clone();
        obj._tests.push({ func, name, arg, options });
        return obj;
    }

    _testUnique(name, arg, func, options) {

        const obj = this.clone();
        obj._tests = obj._tests.filter((test) => test.name !== name);
        obj._tests.push({ func, name, arg, options });
        return obj;
    }

    options(options) {

        Hoek.assert(!options.context, 'Cannot override context');
        this.checkOptions(options);

        const obj = this.clone();
        obj._settings = Settings.concat(obj._settings, options);
        return obj;
    }

    strict(isStrict) {

        const obj = this.clone();

        const convert = isStrict === undefined ? false : !isStrict;
        obj._settings = Settings.concat(obj._settings, { convert });
        return obj;
    }

    raw(isRaw) {

        const value = isRaw === undefined ? true : isRaw;

        if (this._flags.raw === value) {
            return this;
        }

        const obj = this.clone();
        obj._flags.raw = value;
        return obj;
    }

    error(err, options = { self: false }) {

        Hoek.assert(err && (err instanceof Error || typeof err === 'function'), 'Must provide a valid Error object or a function');

        const unknownKeys = Object.keys(options).filter((k) => !['self'].includes(k));
        Hoek.assert(unknownKeys.length === 0, `Options ${unknownKeys} are unknown`);

        const obj = this.clone();
        obj._flags.error = err;

        if (options.self) {
            obj._flags.selfError = true;
        }

        return obj;
    }

    allow(...values) {

        const obj = this.clone();
        values = Hoek.flatten(values);
        for (let i = 0; i < values.length; ++i) {
            const value = values[i];

            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
            obj._invalids.remove(value);
            obj._valids.add(value, obj._refs);
        }

        return obj;
    }

    valid(...values) {

        const obj = this.allow(...values);
        obj._flags.allowOnly = true;
        return obj;
    }

    invalid(...values) {

        const obj = this.clone();
        values = Hoek.flatten(values);
        for (let i = 0; i < values.length; ++i) {
            const value = values[i];

            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
            obj._valids.remove(value);
            obj._invalids.add(value, obj._refs);
        }

        return obj;
    }

    required() {

        if (this._flags.presence === 'required') {
            return this;
        }

        const obj = this.clone();
        obj._flags.presence = 'required';
        return obj;
    }

    optional() {

        if (this._flags.presence === 'optional') {
            return this;
        }

        const obj = this.clone();
        obj._flags.presence = 'optional';
        return obj;
    }


    forbidden() {

        if (this._flags.presence === 'forbidden') {
            return this;
        }

        const obj = this.clone();
        obj._flags.presence = 'forbidden';
        return obj;
    }


    strip() {

        if (this._flags.strip) {
            return this;
        }

        const obj = this.clone();
        obj._flags.strip = true;
        return obj;
    }

    applyFunctionToChildren(children, fn, args = [], root) {

        children = [].concat(children);

        if (children.length !== 1 || children[0] !== '') {
            root = root ? (root + '.') : '';

            const extraChildren = (children[0] === '' ? children.slice(1) : children).map((child) => {

                return root + child;
            });

            throw new Error('unknown key(s) ' + extraChildren.join(', '));
        }

        return this[fn](...args);
    }

    default(value, description) {

        if (typeof value === 'function' &&
            !Ref.isRef(value)) {

            if (!value.description &&
                description) {

                value.description = description;
            }

            if (!this._flags.func) {
                Hoek.assert(typeof value.description === 'string' && value.description.length > 0, 'description must be provided when default value is a function');
            }
        }

        const obj = this.clone();
        obj._flags.default = value;
        Ref.push(obj._refs, value);
        return obj;
    }

    empty(schema) {

        const obj = this.clone();
        if (schema === undefined) {
            delete obj._flags.empty;
        }
        else {
            obj._flags.empty = Cast.schema(this._currentJoi, schema);
        }

        return obj;
    }

    when(condition, options) {

        Hoek.assert(options && typeof options === 'object', 'Invalid options');
        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

        const then = options.hasOwnProperty('then') ? this.concat(Cast.schema(this._currentJoi, options.then)) : undefined;
        const otherwise = options.hasOwnProperty('otherwise') ? this.concat(Cast.schema(this._currentJoi, options.otherwise)) : undefined;

        Alternatives = Alternatives || __webpack_require__(/*! ../alternatives */ "../../joi/lib/types/alternatives/index.js");

        const alternativeOptions = { then, otherwise };
        if (Object.prototype.hasOwnProperty.call(options, 'is')) {
            alternativeOptions.is = options.is;
        }

        const obj = Alternatives.when(condition, alternativeOptions);
        obj._flags.presence = 'ignore';
        obj._baseType = this;

        return obj;
    }

    description(desc) {

        Hoek.assert(desc && typeof desc === 'string', 'Description must be a non-empty string');

        const obj = this.clone();
        obj._description = desc;
        return obj;
    }

    notes(notes) {

        Hoek.assert(notes && (typeof notes === 'string' || Array.isArray(notes)), 'Notes must be a non-empty string or array');

        const obj = this.clone();
        obj._notes = obj._notes.concat(notes);
        return obj;
    }

    tags(tags) {

        Hoek.assert(tags && (typeof tags === 'string' || Array.isArray(tags)), 'Tags must be a non-empty string or array');

        const obj = this.clone();
        obj._tags = obj._tags.concat(tags);
        return obj;
    }

    meta(meta) {

        Hoek.assert(meta !== undefined, 'Meta cannot be undefined');

        const obj = this.clone();
        obj._meta = obj._meta.concat(meta);
        return obj;
    }

    example(...examples) {

        Hoek.assert(examples.length > 0, 'Missing examples');

        const processed = [];
        for (let i = 0; i < examples.length; ++i) {
            const example = [].concat(examples[i]);
            Hoek.assert(example.length <= 2, `Bad example format at index ${i}`);

            const value = example[0];
            let options = example[1];
            if (options !== undefined) {
                Hoek.assert(options && typeof options === 'object', `Options for example at index ${i} must be an object`);
                const unknownOptions = Object.keys(options).filter((option) => !['parent', 'context'].includes(option));
                Hoek.assert(unknownOptions.length === 0, `Unknown example options ${unknownOptions} at index ${i}`);
            }
            else {
                options = {};
            }

            const localState = new State('', [], options.parent || null);
            const result = this._validate(value, localState, Settings.concat(internals.defaults, options.context ? { context: options.context } : null));
            Hoek.assert(!result.errors, `Bad example at index ${i}:`, result.errors && Errors.process(result.errors, value));

            const ex = { value };
            if (Object.keys(options).length) {
                ex.options = options;
            }

            processed.push(ex);
        }

        const obj = this.clone();
        obj._examples = processed;
        return obj;
    }

    unit(name) {

        Hoek.assert(name && typeof name === 'string', 'Unit name must be a non-empty string');

        const obj = this.clone();
        obj._unit = name;
        return obj;
    }

    _prepareEmptyValue(value) {

        if (typeof value === 'string' && this._flags.trim) {
            return value.trim();
        }

        return value;
    }

    _validate(value, state, options, reference) {

        const originalValue = value;

        // Setup state and settings

        state = state || new State('', [], null, reference);

        if (this._settings) {
            const isDefaultOptions = options === internals.defaults;
            if (isDefaultOptions && this._settings[Symbols.settingsCache]) {
                options = this._settings[Symbols.settingsCache];
            }
            else {
                options = Settings.concat(options, this._settings);
                if (isDefaultOptions) {
                    this._settings[Symbols.settingsCache] = options;
                }
            }
        }

        let errors = [];

        if (this._coerce) {
            const coerced = this._coerce(value, state, options);
            if (coerced.errors) {
                value = coerced.value;
                errors = errors.concat(coerced.errors);
                return this._finalizeValue(value, originalValue, errors, state, options);                            // Coerced error always aborts early
            }

            value = coerced.value;
        }

        if (this._flags.empty && !this._flags.empty._validate(this._prepareEmptyValue(value), null, internals.defaults).errors) {
            value = undefined;
        }

        // Check presence requirements

        const presence = this._flags.presence || options.presence;
        if (presence === 'optional') {
            if (value === undefined) {
                const isDeepDefault = this._flags.hasOwnProperty('default') && this._flags.default === undefined;
                if (isDeepDefault && this._type === 'object') {
                    value = {};
                }
                else {
                    return this._finalizeValue(value, originalValue, errors, state, options);
                }
            }
        }
        else if (presence === 'required' &&
            value === undefined) {

            errors.push(this.createError('any.required', null, state, options));
            return this._finalizeValue(value, originalValue, errors, state, options);
        }
        else if (presence === 'forbidden') {
            if (value === undefined) {
                return this._finalizeValue(value, originalValue, errors, state, options);
            }

            errors.push(this.createError('any.unknown', null, state, options));
            return this._finalizeValue(value, originalValue, errors, state, options);
        }

        // Check allowed and denied values using the original value

        let match = this._valids.get(value, state, options, this._flags.insensitive);
        if (match) {
            if (options.convert) {
                value = match.value;
            }

            return this._finalizeValue(value, originalValue, errors, state, options);
        }

        if (this._invalids.has(value, state, options, this._flags.insensitive)) {
            errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', { value, invalids: this._invalids.values({ stripUndefined: true }) }, state, options));
            if (options.abortEarly) {

                return this._finalizeValue(value, originalValue, errors, state, options);
            }
        }

        // Convert value and validate type

        if (this._base) {
            const base = this._base(value, state, options);
            if (base.errors) {
                value = base.value;
                errors = errors.concat(base.errors);
                return this._finalizeValue(value, originalValue, errors, state, options);                            // Base error always aborts early
            }

            if (base.value !== value) {
                value = base.value;

                // Check allowed and denied values using the converted value

                match = this._valids.get(value, state, options, this._flags.insensitive);
                if (match) {
                    value = match.value;
                    return this._finalizeValue(value, originalValue, errors, state, options);
                }

                if (this._invalids.has(value, state, options, this._flags.insensitive)) {
                    errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', { value, invalids: this._invalids.values({ stripUndefined: true }) }, state, options));
                    if (options.abortEarly) {
                        return this._finalizeValue(value, originalValue, errors, state, options);
                    }
                }
            }
        }

        // Required values did not match

        if (this._flags.allowOnly) {
            errors.push(this.createError('any.allowOnly', { value, valids: this._valids.values({ stripUndefined: true }) }, state, options));
            if (options.abortEarly) {
                return this._finalizeValue(value, originalValue, errors, state, options);
            }
        }

        // Validate tests

        for (let i = 0; i < this._tests.length; ++i) {
            const test = this._tests[i];
            const ret = test.func.call(this, value, state, options);
            if (ret instanceof Errors.Err) {
                errors.push(ret);
                if (options.abortEarly) {
                    return this._finalizeValue(value, originalValue, errors, state, options);
                }
            }
            else {
                value = ret;
            }
        }

        return this._finalizeValue(value, originalValue, errors, state, options);
    }

    _finalizeValue(value, originalValue, errors, state, options) {

        let finalValue;

        if (value !== undefined) {
            finalValue = this._flags.raw ? originalValue : value;
        }
        else if (options.noDefaults) {
            finalValue = value;
        }
        else if (Ref.isRef(this._flags.default)) {
            finalValue = this._flags.default(state.parent, options);
        }
        else if (typeof this._flags.default === 'function' &&
            !(this._flags.func && !this._flags.default.description)) {

            let args;

            if (state.parent !== null &&
                this._flags.default.length > 0) {

                args = [Hoek.clone(state.parent), options];
            }

            const defaultValue = internals._try(this._flags.default, args);
            finalValue = defaultValue.value;
            if (defaultValue.error) {
                errors.push(this.createError('any.default', { error: defaultValue.error }, state, options));
            }
        }
        else {
            finalValue = Hoek.clone(this._flags.default);
        }

        if (errors.length &&
            typeof this._flags.error === 'function' &&
            (
                !this._flags.selfError ||
                errors.some((e) => state.path.length === e.path.length)
            )
        ) {
            const change = this._flags.error.call(this, errors);

            if (typeof change === 'string') {
                errors = [this.createOverrideError('override', { reason: errors }, state, options, change)];
            }
            else {
                errors = [].concat(change)
                    .map((err) => {

                        return err instanceof Error ?
                            err :
                            this.createOverrideError(err.type || 'override', err.context, state, options, err.message, err.template);
                    });
            }
        }

        return {
            value: this._flags.strip ? undefined : finalValue,
            finalValue,
            errors: errors.length ? errors : null
        };
    }

    _validateWithOptions(value, options, callback) {

        if (options) {
            this.checkOptions(options);
        }

        const settings = Settings.concat(internals.defaults, options);
        const result = this._validate(value, null, settings);
        const errors = Errors.process(result.errors, value);

        if (callback) {
            return callback(errors, result.value);
        }

        return {
            error: errors,
            value: result.value,
            then(resolve, reject) {

                if (errors) {
                    return Promise.reject(errors).catch(reject);
                }

                return Promise.resolve(result.value).then(resolve);
            },
            catch(reject) {

                if (errors) {
                    return Promise.reject(errors).catch(reject);
                }

                return Promise.resolve(result.value);
            }
        };
    }

    validate(value, options, callback) {

        if (typeof options === 'function') {
            return this._validateWithOptions(value, null, options);
        }

        return this._validateWithOptions(value, options, callback);
    }

    describe() {

        const description = {
            type: this._type
        };

        const flags = Object.keys(this._flags);
        if (flags.length) {
            if (['empty', 'default', 'lazy', 'label'].some((flag) => this._flags.hasOwnProperty(flag))) {
                description.flags = {};
                for (let i = 0; i < flags.length; ++i) {
                    const flag = flags[i];
                    if (flag === 'empty') {
                        description.flags[flag] = this._flags[flag].describe();
                    }
                    else if (flag === 'default') {
                        if (Ref.isRef(this._flags[flag])) {
                            description.flags[flag] = this._flags[flag].toString();
                        }
                        else if (typeof this._flags[flag] === 'function') {
                            description.flags[flag] = {
                                description: this._flags[flag].description,
                                function   : this._flags[flag]
                            };
                        }
                        else {
                            description.flags[flag] = this._flags[flag];
                        }
                    }
                    else if (flag === 'lazy' || flag === 'label') {
                        // We don't want it in the description
                    }
                    else {
                        description.flags[flag] = this._flags[flag];
                    }
                }
            }
            else {
                description.flags = this._flags;
            }
        }

        if (this._settings) {
            description.options = Hoek.clone(this._settings);
        }

        if (this._baseType) {
            description.base = this._baseType.describe();
        }

        if (this._description) {
            description.description = this._description;
        }

        if (this._notes.length) {
            description.notes = this._notes;
        }

        if (this._tags.length) {
            description.tags = this._tags;
        }

        if (this._meta.length) {
            description.meta = this._meta;
        }

        if (this._examples.length) {
            description.examples = this._examples;
        }

        if (this._unit) {
            description.unit = this._unit;
        }

        const valids = this._valids.values();
        if (valids.length) {
            description.valids = valids.map((v) => {

                return Ref.isRef(v) ? v.toString() : v;
            });
        }

        const invalids = this._invalids.values();
        if (invalids.length) {
            description.invalids = invalids.map((v) => {

                return Ref.isRef(v) ? v.toString() : v;
            });
        }

        description.rules = [];

        for (let i = 0; i < this._tests.length; ++i) {
            const validator = this._tests[i];
            const item = { name: validator.name };

            if (validator.arg !== void 0) {
                item.arg = Ref.isRef(validator.arg) ? validator.arg.toString() : validator.arg;
            }

            const options = validator.options;
            if (options) {
                if (options.hasRef) {
                    item.arg = {};
                    const keys = Object.keys(validator.arg);
                    for (let j = 0; j < keys.length; ++j) {
                        const key = keys[j];
                        const value = validator.arg[key];
                        item.arg[key] = Ref.isRef(value) ? value.toString() : value;
                    }
                }

                if (typeof options.description === 'string') {
                    item.description = options.description;
                }
                else if (typeof options.description === 'function') {
                    item.description = options.description(item.arg);
                }
            }

            description.rules.push(item);
        }

        if (!description.rules.length) {
            delete description.rules;
        }

        const label = this._getLabel();
        if (label) {
            description.label = label;
        }

        return description;
    }

    label(name) {

        Hoek.assert(name && typeof name === 'string', 'Label name must be a non-empty string');

        const obj = this.clone();
        obj._flags.label = name;
        return obj;
    }

    _getLabel(def) {

        return this._flags.label || def;
    }

};


internals.Any.prototype.isImmutable = true;     // Prevents Hoek from deep cloning schema objects

// Aliases

internals.Any.prototype.only = internals.Any.prototype.equal = internals.Any.prototype.valid;
internals.Any.prototype.disallow = internals.Any.prototype.not = internals.Any.prototype.invalid;
internals.Any.prototype.exist = internals.Any.prototype.required;


internals._try = function (fn, args = []) {

    let err;
    let result;

    try {
        result = fn(...args);
    }
    catch (e) {
        err = e;
    }

    return {
        value: result,
        error: err
    };
};


/***/ }),

/***/ "../../joi/lib/types/any/settings.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/any/settings.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");

const Symbols = __webpack_require__(/*! ../symbols */ "../../joi/lib/types/symbols.js");


// Declare internals

const internals = {};


exports.concat = function (target, source) {

    if (!source) {
        return target;
    }

    const obj = Object.assign({}, target);

    const language = source.language;

    Object.assign(obj, source);

    if (language && target && target.language) {
        obj.language = Hoek.applyToDefaults(target.language, language);
    }

    if (obj[Symbols.settingsCache]) {
        delete obj[Symbols.settingsCache];
    }

    return obj;
};


/***/ }),

/***/ "../../joi/lib/types/array/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/array/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");

const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Cast = __webpack_require__(/*! ../../cast */ "../../joi/lib/cast.js");
const Ref = __webpack_require__(/*! ../../ref */ "../../joi/lib/ref.js");
const State = __webpack_require__(/*! ../state */ "../../joi/lib/types/state.js");


// Declare internals

const internals = {};


internals.fastSplice = function (arr, i) {

    let pos = i;
    while (pos < arr.length) {
        arr[pos++] = arr[pos];
    }

    --arr.length;
};


internals.Array = class extends Any {

    constructor() {

        super();
        this._type = 'array';
        this._inner.items = [];
        this._inner.ordereds = [];
        this._inner.inclusions = [];
        this._inner.exclusions = [];
        this._inner.requireds = [];
        this._flags.sparse = false;
    }

    _base(value, state, options) {

        const result = {
            value
        };

        if (typeof value === 'string' &&
            options.convert) {

            internals.safeParse(value, result);
        }

        let isArray = Array.isArray(result.value);
        const wasArray = isArray;
        if (options.convert && this._flags.single && !isArray) {
            result.value = [result.value];
            isArray = true;
        }

        if (!isArray) {
            result.errors = this.createError('array.base', null, state, options);
            return result;
        }

        if (this._inner.inclusions.length ||
            this._inner.exclusions.length ||
            this._inner.requireds.length ||
            this._inner.ordereds.length ||
            !this._flags.sparse) {

            // Clone the array so that we don't modify the original
            if (wasArray) {
                result.value = result.value.slice(0);
            }

            result.errors = this._checkItems(result.value, wasArray, state, options);

            if (result.errors && wasArray && options.convert && this._flags.single) {

                // Attempt a 2nd pass by putting the array inside one.
                const previousErrors = result.errors;

                result.value = [result.value];
                result.errors = this._checkItems(result.value, wasArray, state, options);

                if (result.errors) {

                    // Restore previous errors and value since this didn't validate either.
                    result.errors = previousErrors;
                    result.value = result.value[0];
                }
            }
        }

        return result;
    }

    _checkItems(items, wasArray, state, options) {

        const errors = [];
        let errored;

        const requireds = this._inner.requireds.slice();
        const ordereds = this._inner.ordereds.slice();
        const inclusions = [...this._inner.inclusions, ...requireds];

        let il = items.length;
        for (let i = 0; i < il; ++i) {
            errored = false;
            const item = items[i];
            let isValid = false;
            const key = wasArray ? i : state.key;
            const path = wasArray ? [...state.path, i] : state.path;
            const localState = new State(key, path, state.parent, state.reference);
            let res;

            // Sparse

            if (!this._flags.sparse && item === undefined) {
                errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

                if (options.abortEarly) {
                    return errors;
                }

                ordereds.shift();

                continue;
            }

            // Exclusions

            for (let j = 0; j < this._inner.exclusions.length; ++j) {
                res = this._inner.exclusions[j]._validate(item, localState, {});                // Not passing options to use defaults

                if (!res.errors) {
                    errors.push(this.createError(wasArray ? 'array.excludes' : 'array.excludesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));
                    errored = true;

                    if (options.abortEarly) {
                        return errors;
                    }

                    ordereds.shift();

                    break;
                }
            }

            if (errored) {
                continue;
            }

            // Ordered
            if (this._inner.ordereds.length) {
                if (ordereds.length > 0) {
                    const ordered = ordereds.shift();
                    res = ordered._validate(item, localState, options);
                    if (!res.errors) {
                        if (ordered._flags.strip) {
                            internals.fastSplice(items, i);
                            --i;
                            --il;
                        }
                        else if (!this._flags.sparse && res.value === undefined) {
                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

                            if (options.abortEarly) {
                                return errors;
                            }

                            continue;
                        }
                        else {
                            items[i] = res.value;
                        }
                    }
                    else {
                        errors.push(this.createError('array.ordered', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
                        if (options.abortEarly) {
                            return errors;
                        }
                    }

                    continue;
                }
                else if (!this._inner.items.length) {
                    errors.push(this.createError('array.orderedLength', { pos: i, limit: this._inner.ordereds.length }, { key: state.key, path: localState.path }, options));
                    if (options.abortEarly) {
                        return errors;
                    }

                    continue;
                }
            }

            // Requireds

            const requiredChecks = [];
            let jl = requireds.length;
            for (let j = 0; j < jl; ++j) {
                res = requiredChecks[j] = requireds[j]._validate(item, localState, options);
                if (!res.errors) {
                    items[i] = res.value;
                    isValid = true;
                    internals.fastSplice(requireds, j);
                    --j;
                    --jl;

                    if (!this._flags.sparse && res.value === undefined) {
                        errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

                        if (options.abortEarly) {
                            return errors;
                        }
                    }

                    break;
                }
            }

            if (isValid) {
                continue;
            }

            // Inclusions

            const stripUnknown = options.stripUnknown && !!options.stripUnknown.arrays || false;

            jl = inclusions.length;
            for (let j = 0; j < jl; ++j) {
                const inclusion = inclusions[j];

                // Avoid re-running requireds that already didn't match in the previous loop
                const previousCheck = requireds.indexOf(inclusion);
                if (previousCheck !== -1) {
                    res = requiredChecks[previousCheck];
                }
                else {
                    res = inclusion._validate(item, localState, options);

                    if (!res.errors) {
                        if (inclusion._flags.strip) {
                            internals.fastSplice(items, i);
                            --i;
                            --il;
                        }
                        else if (!this._flags.sparse && res.value === undefined) {
                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
                            errored = true;
                        }
                        else {
                            items[i] = res.value;
                        }

                        isValid = true;
                        break;
                    }
                }

                // Return the actual error if only one inclusion defined
                if (jl === 1) {
                    if (stripUnknown) {
                        internals.fastSplice(items, i);
                        --i;
                        --il;
                        isValid = true;
                        break;
                    }

                    errors.push(this.createError(wasArray ? 'array.includesOne' : 'array.includesOneSingle', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
                    errored = true;

                    if (options.abortEarly) {
                        return errors;
                    }

                    break;
                }
            }

            if (errored) {
                continue;
            }

            if (this._inner.inclusions.length && !isValid) {
                if (stripUnknown) {
                    internals.fastSplice(items, i);
                    --i;
                    --il;
                    continue;
                }

                errors.push(this.createError(wasArray ? 'array.includes' : 'array.includesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));

                if (options.abortEarly) {
                    return errors;
                }
            }
        }

        if (requireds.length) {
            this._fillMissedErrors(errors, requireds, state, options);
        }

        if (ordereds.length) {
            this._fillOrderedErrors(errors, ordereds, state, options);
        }

        return errors.length ? errors : null;
    }

    describe() {

        const description = super.describe();

        if (this._inner.ordereds.length) {
            description.orderedItems = [];

            for (let i = 0; i < this._inner.ordereds.length; ++i) {
                description.orderedItems.push(this._inner.ordereds[i].describe());
            }
        }

        if (this._inner.items.length) {
            description.items = [];

            for (let i = 0; i < this._inner.items.length; ++i) {
                description.items.push(this._inner.items[i].describe());
            }
        }

        if (description.rules) {
            for (let i = 0; i < description.rules.length; ++i) {
                const rule = description.rules[i];
                if (rule.name === 'has') {
                    rule.arg = rule.arg.describe();
                }
            }
        }

        return description;
    }

    items(...schemas) {

        const obj = this.clone();

        Hoek.flatten(schemas).forEach((type, index) => {

            try {
                type = Cast.schema(this._currentJoi, type);
            }
            catch (castErr) {
                if (castErr.hasOwnProperty('path')) {
                    castErr.path = index + '.' + castErr.path;
                }
                else {
                    castErr.path = index;
                }

                castErr.message = `${castErr.message}(${castErr.path})`;
                throw castErr;
            }

            obj._inner.items.push(type);

            if (type._flags.presence === 'required') {
                obj._inner.requireds.push(type);
            }
            else if (type._flags.presence === 'forbidden') {
                obj._inner.exclusions.push(type.optional());
            }
            else {
                obj._inner.inclusions.push(type);
            }
        });

        return obj;
    }

    ordered(...schemas) {

        const obj = this.clone();

        Hoek.flatten(schemas).forEach((type, index) => {

            try {
                type = Cast.schema(this._currentJoi, type);
            }
            catch (castErr) {
                if (castErr.hasOwnProperty('path')) {
                    castErr.path = index + '.' + castErr.path;
                }
                else {
                    castErr.path = index;
                }

                castErr.message = `${castErr.message}(${castErr.path})`;
                throw castErr;
            }

            obj._inner.ordereds.push(type);
        });

        return obj;
    }

    min(limit) {

        const isRef = Ref.isRef(limit);

        Hoek.assert((Number.isSafeInteger(limit) && limit >= 0) || isRef, 'limit must be a positive integer or reference');

        return this._testUnique('min', limit, function (value, state, options) {

            let compareTo;
            if (isRef) {
                compareTo = limit(state.reference || state.parent, options);

                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
                    return this.createError('array.ref', { ref: limit, value: compareTo }, state, options);
                }
            }
            else {
                compareTo = limit;
            }

            if (value.length >= compareTo) {
                return value;
            }

            return this.createError('array.min', { limit, value }, state, options);
        });
    }

    max(limit) {

        const isRef = Ref.isRef(limit);

        Hoek.assert((Number.isSafeInteger(limit) && limit >= 0) || isRef, 'limit must be a positive integer or reference');

        return this._testUnique('max', limit, function (value, state, options) {

            let compareTo;
            if (isRef) {
                compareTo = limit(state.reference || state.parent, options);

                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
                    return this.createError('array.ref', { ref: limit.key }, state, options);
                }
            }
            else {
                compareTo = limit;
            }

            if (value.length <= compareTo) {
                return value;
            }

            return this.createError('array.max', { limit, value }, state, options);
        });
    }

    length(limit) {

        const isRef = Ref.isRef(limit);

        Hoek.assert((Number.isSafeInteger(limit) && limit >= 0) || isRef, 'limit must be a positive integer or reference');

        return this._testUnique('length', limit, function (value, state, options) {

            let compareTo;
            if (isRef) {
                compareTo = limit(state.reference || state.parent, options);

                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
                    return this.createError('array.ref', { ref: limit.key }, state, options);
                }
            }
            else {
                compareTo = limit;
            }

            if (value.length === compareTo) {
                return value;
            }

            return this.createError('array.length', { limit, value }, state, options);
        });
    }

    has(schema) {

        try {
            schema = Cast.schema(this._currentJoi, schema);
        }
        catch (castErr) {
            if (castErr.hasOwnProperty('path')) {
                castErr.message = `${castErr.message}(${castErr.path})`;
            }

            throw castErr;
        }

        return this._test('has', schema, function (value, state, options) {

            const isValid = value.some((item, idx) => {

                const localState = new State(idx, [...state.path, idx], state.key, state.reference);
                return !schema._validate(item, localState, options).errors;
            });

            if (isValid) {
                return value;
            }

            const patternLabel = schema._getLabel();
            if (patternLabel) {
                return this.createError('array.hasKnown', { patternLabel }, state, options);
            }

            return this.createError('array.hasUnknown', null, state, options);
        });
    }

    unique(comparator, configs) {

        Hoek.assert(comparator === undefined ||
            typeof comparator === 'function' ||
            typeof comparator === 'string', 'comparator must be a function or a string');

        Hoek.assert(configs === undefined ||
            typeof configs === 'object', 'configs must be an object');

        const settings = {
            ignoreUndefined: (configs && configs.ignoreUndefined) || false
        };


        if (typeof comparator === 'string') {
            settings.path = comparator;
        }
        else if (typeof comparator === 'function') {
            settings.comparator = comparator;
        }

        return this._test('unique', settings, function (value, state, options) {

            const found = {
                string: Object.create(null),
                number: Object.create(null),
                undefined: Object.create(null),
                boolean: Object.create(null),
                object: new Map(),
                function: new Map(),
                custom: new Map()
            };

            const compare = settings.comparator || Hoek.deepEqual;
            const ignoreUndefined = settings.ignoreUndefined;

            for (let i = 0; i < value.length; ++i) {
                const item = settings.path ? Hoek.reach(value[i], settings.path) : value[i];
                const records = settings.comparator ? found.custom : found[typeof item];

                // All available types are supported, so it's not possible to reach 100% coverage without ignoring this line.
                // I still want to keep the test for future js versions with new types (eg. Symbol).
                if (/* $lab:coverage:off$ */ records /* $lab:coverage:on$ */) {
                    if (records instanceof Map) {
                        const entries = records.entries();
                        let current;
                        while (!(current = entries.next()).done) {
                            if (compare(current.value[0], item)) {
                                const localState = new State(state.key, [...state.path, i], state.parent, state.reference);
                                const context = {
                                    pos: i,
                                    value: value[i],
                                    dupePos: current.value[1],
                                    dupeValue: value[current.value[1]]
                                };

                                if (settings.path) {
                                    context.path = settings.path;
                                }

                                return this.createError('array.unique', context, localState, options);
                            }
                        }

                        records.set(item, i);
                    }
                    else {
                        if ((!ignoreUndefined || item !== undefined) && records[item] !== undefined) {
                            const localState = new State(state.key, [...state.path, i], state.parent, state.reference);

                            const context = {
                                pos: i,
                                value: value[i],
                                dupePos: records[item],
                                dupeValue: value[records[item]]
                            };

                            if (settings.path) {
                                context.path = settings.path;
                            }

                            return this.createError('array.unique', context, localState, options);
                        }

                        records[item] = i;
                    }
                }
            }

            return value;
        });
    }

    sparse(enabled) {

        const value = enabled === undefined ? true : !!enabled;

        if (this._flags.sparse === value) {
            return this;
        }

        const obj = this.clone();
        obj._flags.sparse = value;
        return obj;
    }

    single(enabled) {

        const value = enabled === undefined ? true : !!enabled;

        if (this._flags.single === value) {
            return this;
        }

        const obj = this.clone();
        obj._flags.single = value;
        return obj;
    }

    _fillMissedErrors(errors, requireds, state, options) {

        const knownMisses = [];
        let unknownMisses = 0;
        for (let i = 0; i < requireds.length; ++i) {
            const label = requireds[i]._getLabel();
            if (label) {
                knownMisses.push(label);
            }
            else {
                ++unknownMisses;
            }
        }

        if (knownMisses.length) {
            if (unknownMisses) {
                errors.push(this.createError('array.includesRequiredBoth', { knownMisses, unknownMisses }, { key: state.key, path: state.path }, options));
            }
            else {
                errors.push(this.createError('array.includesRequiredKnowns', { knownMisses }, { key: state.key, path: state.path }, options));
            }
        }
        else {
            errors.push(this.createError('array.includesRequiredUnknowns', { unknownMisses }, { key: state.key, path: state.path }, options));
        }
    }


    _fillOrderedErrors(errors, ordereds, state, options) {

        const requiredOrdereds = [];

        for (let i = 0; i < ordereds.length; ++i) {
            const presence = Hoek.reach(ordereds[i], '_flags.presence');
            if (presence === 'required') {
                requiredOrdereds.push(ordereds[i]);
            }
        }

        if (requiredOrdereds.length) {
            this._fillMissedErrors(errors, requiredOrdereds, state, options);
        }
    }

};


internals.safeParse = function (value, result) {

    try {
        const converted = JSON.parse(value);
        if (Array.isArray(converted)) {
            result.value = converted;
        }
    }
    catch (e) { }
};


module.exports = new internals.Array();


/***/ }),

/***/ "../../joi/lib/types/binary/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/binary/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {};


internals.Binary = class extends Any {

    constructor() {

        super();
        this._type = 'binary';
    }

    _base(value, state, options) {

        const result = {
            value
        };

        if (typeof value === 'string' &&
            options.convert) {

            try {
                result.value = Buffer.from(value, this._flags.encoding);
            }
            catch (e) {
            }
        }

        result.errors = Buffer.isBuffer(result.value) ? null : this.createError('binary.base', null, state, options);
        return result;
    }

    encoding(encoding) {

        Hoek.assert(Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

        if (this._flags.encoding === encoding) {
            return this;
        }

        const obj = this.clone();
        obj._flags.encoding = encoding;
        return obj;
    }

    min(limit) {

        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

        return this._test('min', limit, function (value, state, options) {

            if (value.length >= limit) {
                return value;
            }

            return this.createError('binary.min', { limit, value }, state, options);
        });
    }

    max(limit) {

        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

        return this._test('max', limit, function (value, state, options) {

            if (value.length <= limit) {
                return value;
            }

            return this.createError('binary.max', { limit, value }, state, options);
        });
    }

    length(limit) {

        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

        return this._test('length', limit, function (value, state, options) {

            if (value.length === limit) {
                return value;
            }

            return this.createError('binary.length', { limit, value }, state, options);
        });
    }

};


module.exports = new internals.Binary();


/***/ }),

/***/ "../../joi/lib/types/boolean/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/boolean/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {
    Set: __webpack_require__(/*! ../../set */ "../../joi/lib/set.js")
};


internals.Boolean = class extends Any {
    constructor() {

        super();
        this._type = 'boolean';
        this._flags.insensitive = true;
        this._inner.truthySet = new internals.Set();
        this._inner.falsySet = new internals.Set();
    }

    _base(value, state, options) {

        const result = {
            value
        };

        if (typeof value === 'string' &&
            options.convert) {

            const normalized = this._flags.insensitive ? value.toLowerCase() : value;
            result.value = (normalized === 'true' ? true
                : (normalized === 'false' ? false : value));
        }

        if (typeof result.value !== 'boolean') {
            result.value = (this._inner.truthySet.has(value, null, null, this._flags.insensitive) ? true
                : (this._inner.falsySet.has(value, null, null, this._flags.insensitive) ? false : value));
        }

        result.errors = (typeof result.value === 'boolean') ? null : this.createError('boolean.base', { value }, state, options);
        return result;
    }

    truthy(...values) {

        const obj = this.clone();
        values = Hoek.flatten(values);
        for (let i = 0; i < values.length; ++i) {
            const value = values[i];

            Hoek.assert(value !== undefined, 'Cannot call truthy with undefined');
            obj._inner.truthySet.add(value);
        }

        return obj;
    }

    falsy(...values) {

        const obj = this.clone();
        values = Hoek.flatten(values);
        for (let i = 0; i < values.length; ++i) {
            const value = values[i];

            Hoek.assert(value !== undefined, 'Cannot call falsy with undefined');
            obj._inner.falsySet.add(value);
        }

        return obj;
    }

    insensitive(enabled) {

        const insensitive = enabled === undefined ? true : !!enabled;

        if (this._flags.insensitive === insensitive) {
            return this;
        }

        const obj = this.clone();
        obj._flags.insensitive = insensitive;
        return obj;
    }

    describe() {

        const description = super.describe();
        description.truthy = [true, ...this._inner.truthySet.values()];
        description.falsy = [false, ...this._inner.falsySet.values()];
        return description;
    }
};


module.exports = new internals.Boolean();


/***/ }),

/***/ "../../joi/lib/types/date/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/date/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Ref = __webpack_require__(/*! ../../ref */ "../../joi/lib/ref.js");
const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {};

internals.isoDate = /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/;
internals.invalidDate = new Date('');
internals.isIsoDate = (() => {

    const isoString = internals.isoDate.toString();

    return (date) => {

        return date && (date.toString() === isoString);
    };
})();

internals.Date = class extends Any {

    constructor() {

        super();
        this._type = 'date';
    }

    _base(value, state, options) {

        const result = {
            value: (options.convert && internals.Date.toDate(value, this._flags.format, this._flags.timestamp, this._flags.multiplier)) || value
        };

        if (result.value instanceof Date && !isNaN(result.value.getTime())) {
            result.errors = null;
        }
        else if (!options.convert) {
            result.errors = this.createError('date.strict', { value }, state, options);
        }
        else {
            let type;
            if (internals.isIsoDate(this._flags.format)) {
                type = 'isoDate';
            }
            else if (this._flags.timestamp) {
                type = `timestamp.${this._flags.timestamp}`;
            }
            else {
                type = 'base';
            }

            result.errors = this.createError(`date.${type}`, { value }, state, options);
        }

        return result;
    }

    static toDate(value, format, timestamp, multiplier) {

        if (value instanceof Date) {
            return value;
        }

        if (typeof value === 'string' ||
            (typeof value === 'number' && !isNaN(value) && isFinite(value))) {

            const isIsoDate = format && internals.isIsoDate(format);
            if (!isIsoDate &&
                typeof value === 'string' &&
                /^[+-]?\d+(\.\d+)?$/.test(value)) {

                value = parseFloat(value);
            }

            let date;
            if (isIsoDate) {
                date = format.test(value) ? new Date(value.toString()) : internals.invalidDate;
            }
            else if (timestamp) {
                date = /^\s*$/.test(value) ? internals.invalidDate : new Date(value * multiplier);
            }
            else {
                date = new Date(value);
            }

            if (!isNaN(date.getTime())) {
                return date;
            }
        }

        return null;
    }

    iso() {

        if (this._flags.format === internals.isoDate) {
            return this;
        }

        const obj = this.clone();
        obj._flags.format = internals.isoDate;
        return obj;
    }

    timestamp(type = 'javascript') {

        const allowed = ['javascript', 'unix'];
        Hoek.assert(allowed.includes(type), '"type" must be one of "' + allowed.join('", "') + '"');

        if (this._flags.timestamp === type) {
            return this;
        }

        const obj = this.clone();
        obj._flags.timestamp = type;
        obj._flags.multiplier = type === 'unix' ? 1000 : 1;
        return obj;
    }

    _isIsoDate(value) {

        return internals.isoDate.test(value);
    }

};

internals.compare = function (type, compare) {

    return function (date) {

        const isNow = date === 'now';
        const isRef = Ref.isRef(date);

        if (!isNow && !isRef) {
            date = internals.Date.toDate(date);
        }

        Hoek.assert(date, 'Invalid date format');

        return this._test(type, date, function (value, state, options) {

            let compareTo;
            if (isNow) {
                compareTo = Date.now();
            }
            else if (isRef) {
                const refValue = date(state.reference || state.parent, options);
                compareTo = internals.Date.toDate(refValue);

                if (!compareTo) {
                    return this.createError('date.ref', { ref: date, value: refValue }, state, options);
                }

                compareTo = compareTo.getTime();
            }
            else {
                compareTo = date.getTime();
            }

            if (compare(value.getTime(), compareTo)) {
                return value;
            }

            return this.createError('date.' + type, { limit: new Date(compareTo), value }, state, options);
        });
    };
};


internals.Date.prototype.min = internals.compare('min', (value, date) => value >= date);
internals.Date.prototype.max = internals.compare('max', (value, date) => value <= date);
internals.Date.prototype.greater = internals.compare('greater', (value, date) => value > date);
internals.Date.prototype.less = internals.compare('less', (value, date) => value < date);


module.exports = new internals.Date();


/***/ }),

/***/ "../../joi/lib/types/func/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/func/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const ObjectType = __webpack_require__(/*! ../object */ "../../joi/lib/types/object/index.js");
const Ref = __webpack_require__(/*! ../../ref */ "../../joi/lib/ref.js");


// Declare internals

const internals = {};


internals.Func = class extends ObjectType.constructor {

    constructor() {

        super();
        this._flags.func = true;
    }

    arity(n) {

        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

        return this._test('arity', n, function (value, state, options) {

            if (value.length === n) {
                return value;
            }

            return this.createError('function.arity', { n }, state, options);
        });
    }

    minArity(n) {

        Hoek.assert(Number.isSafeInteger(n) && n > 0, 'n must be a strict positive integer');

        return this._test('minArity', n, function (value, state, options) {

            if (value.length >= n) {
                return value;
            }

            return this.createError('function.minArity', { n }, state, options);
        });
    }

    maxArity(n) {

        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

        return this._test('maxArity', n, function (value, state, options) {

            if (value.length <= n) {
                return value;
            }

            return this.createError('function.maxArity', { n }, state, options);
        });
    }

    ref() {

        return this._test('ref', null, function (value, state, options) {

            if (Ref.isRef(value)) {
                return value;
            }

            return this.createError('function.ref', { value }, state, options);
        });
    }

    class() {

        return this._test('class', null, function (value, state, options) {

            if ((/^\s*class\s/).test(value.toString())) {
                return value;
            }

            return this.createError('function.class', { value }, state, options);
        });
    }
};

module.exports = new internals.Func();


/***/ }),

/***/ "../../joi/lib/types/lazy/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/lazy/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {};


internals.Lazy = class extends Any {

    constructor() {

        super();
        this._type = 'lazy';
        this._flags.once = true;
        this._cache = null;
    }

    _init(fn, options) {

        return this.set(fn, options);
    }

    _base(value, state, options) {

        let schema;
        if (this._cache) {
            schema = this._cache;
        }
        else {
            const result = { value };
            const lazy = this._flags.lazy;

            if (!lazy) {
                result.errors = this.createError('lazy.base', null, state, options);
                return result;
            }

            schema = lazy();

            if (!(schema instanceof Any)) {
                result.errors = this.createError('lazy.schema', { schema }, state, options);
                return result;
            }

            if (this._flags.once) {
                this._cache = schema;
            }
        }

        return schema._validate(value, state, options);
    }

    set(fn, options) {

        Hoek.assert(typeof fn === 'function', 'You must provide a function as first argument');
        Hoek.assert(options === undefined || (options && typeof options === 'object' && !Array.isArray(options)), `Options must be an object`);

        if (options) {
            const unknownOptions = Object.keys(options).filter((key) => !['once'].includes(key));
            Hoek.assert(unknownOptions.length === 0, `Options contain unknown keys: ${unknownOptions}`);
            Hoek.assert(options.once === undefined || typeof options.once === 'boolean', 'Option "once" must be a boolean');
        }

        const obj = this.clone();
        obj._flags.lazy = fn;

        if (options && options.once !== obj._flags.once) {
            obj._flags.once = options.once;
        }

        return obj;
    }

};

module.exports = new internals.Lazy();


/***/ }),

/***/ "../../joi/lib/types/number/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/number/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Ref = __webpack_require__(/*! ../../ref */ "../../joi/lib/ref.js");
const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {
    precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/,
    normalizeExponent(str) {

        return str
            .replace(/\.?0+e/, 'e')
            .replace(/e\+/, 'e')
            .replace(/^\+/, '')
            .replace(/^(-?)0+([1-9])/, '$1$2');
    },
    normalizeDecimal(str) {

        str = str
            .replace(/^\+/, '')
            .replace(/\.0+$/, '')
            .replace(/^(-?)0+([1-9])/, '$1$2');

        if (str.includes('.') && str.endsWith('0')) {
            str = str.replace(/0+$/, '');
        }

        return str;
    }
};


internals.Number = class extends Any {

    constructor() {

        super();
        this._type = 'number';
        this._flags.unsafe = false;
        this._invalids.add(Infinity);
        this._invalids.add(-Infinity);
    }

    _base(value, state, options) {

        const result = {
            errors: null,
            value
        };

        if (typeof value === 'string' &&
            options.convert) {

            const matches = value.match(/^\s*[+-]?\d+(?:\.\d+)?(?:e([+-]?\d+))?\s*$/i);
            if (matches) {

                value = value.trim();
                result.value = parseFloat(value);

                if (!this._flags.unsafe) {
                    if (value.includes('e')) {
                        if (internals.normalizeExponent(`${result.value / Math.pow(10, matches[1])}e${matches[1]}`) !== internals.normalizeExponent(value)) {
                            result.errors = this.createError('number.unsafe', { value }, state, options);
                            return result;
                        }
                    }
                    else {
                        if (result.value.toString() !== internals.normalizeDecimal(value)) {
                            result.errors = this.createError('number.unsafe', { value }, state, options);
                            return result;
                        }
                    }
                }
            }
        }

        const isNumber = typeof result.value === 'number' && !isNaN(result.value);

        if (options.convert && 'precision' in this._flags && isNumber) {

            // This is conceptually equivalent to using toFixed but it should be much faster
            const precision = Math.pow(10, this._flags.precision);
            result.value = Math.round(result.value * precision) / precision;
        }

        if (isNumber) {
            if (!this._flags.unsafe &&
                (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER)) {
                result.errors = this.createError('number.unsafe', { value }, state, options);
            }
        }
        else {
            result.errors = this.createError('number.base', { value }, state, options);
        }

        return result;
    }

    multiple(base) {

        const isRef = Ref.isRef(base);

        if (!isRef) {
            Hoek.assert(typeof base === 'number' && isFinite(base), 'multiple must be a number');
            Hoek.assert(base > 0, 'multiple must be greater than 0');
        }

        return this._test('multiple', base, function (value, state, options) {

            const divisor = isRef ? base(state.reference || state.parent, options) : base;

            if (isRef && (typeof divisor !== 'number' || !isFinite(divisor))) {
                return this.createError('number.ref', { ref: base.key }, state, options);
            }

            if (value % divisor === 0) {
                return value;
            }

            return this.createError('number.multiple', { multiple: base, value }, state, options);
        });
    }

    integer() {

        return this._test('integer', undefined, function (value, state, options) {

            return Math.trunc(value) - value === 0 ? value : this.createError('number.integer', { value }, state, options);
        });
    }

    unsafe(enabled = true) {

        Hoek.assert(typeof enabled === 'boolean', 'enabled must be a boolean');

        if (this._flags.unsafe === enabled) {
            return this;
        }

        const obj = this.clone();
        obj._flags.unsafe = enabled;
        return obj;
    }

    negative() {

        return this._test('negative', undefined, function (value, state, options) {

            if (value < 0) {
                return value;
            }

            return this.createError('number.negative', { value }, state, options);
        });
    }

    positive() {

        return this._test('positive', undefined, function (value, state, options) {

            if (value > 0) {
                return value;
            }

            return this.createError('number.positive', { value }, state, options);
        });
    }

    precision(limit) {

        Hoek.assert(Number.isSafeInteger(limit), 'limit must be an integer');
        Hoek.assert(!('precision' in this._flags), 'precision already set');

        const obj = this._test('precision', limit, function (value, state, options) {

            const places = value.toString().match(internals.precisionRx);
            const decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
            if (decimals <= limit) {
                return value;
            }

            return this.createError('number.precision', { limit, value }, state, options);
        });

        obj._flags.precision = limit;
        return obj;
    }

    port() {

        return this._test('port', undefined, function (value, state, options) {

            if (!Number.isSafeInteger(value) || value < 0 || value > 65535) {
                return this.createError('number.port', { value }, state, options);
            }

            return value;
        });
    }

};


internals.compare = function (type, compare) {

    return function (limit) {

        const isRef = Ref.isRef(limit);
        const isNumber = typeof limit === 'number' && !isNaN(limit);

        Hoek.assert(isNumber || isRef, 'limit must be a number or reference');

        return this._test(type, limit, function (value, state, options) {

            let compareTo;
            if (isRef) {
                compareTo = limit(state.reference || state.parent, options);

                if (!(typeof compareTo === 'number' && !isNaN(compareTo))) {
                    return this.createError('number.ref', { ref: limit.key }, state, options);
                }
            }
            else {
                compareTo = limit;
            }

            if (compare(value, compareTo)) {
                return value;
            }

            return this.createError('number.' + type, { limit: compareTo, value }, state, options);
        });
    };
};


internals.Number.prototype.min = internals.compare('min', (value, limit) => value >= limit);
internals.Number.prototype.max = internals.compare('max', (value, limit) => value <= limit);
internals.Number.prototype.greater = internals.compare('greater', (value, limit) => value > limit);
internals.Number.prototype.less = internals.compare('less', (value, limit) => value < limit);


module.exports = new internals.Number();


/***/ }),

/***/ "../../joi/lib/types/object/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/object/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const Topo = __webpack_require__(/*! topo */ "../../topo/lib/index.js");
const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Errors = __webpack_require__(/*! ../../errors */ "../../joi/lib/errors.js");
const Cast = __webpack_require__(/*! ../../cast */ "../../joi/lib/cast.js");
const State = __webpack_require__(/*! ../state */ "../../joi/lib/types/state.js");


// Declare internals

const internals = {};


internals.Object = class extends Any {

    constructor() {

        super();
        this._type = 'object';
        this._inner.children = null;
        this._inner.renames = [];
        this._inner.dependencies = [];
        this._inner.patterns = [];
    }

    _init(...args) {

        return args.length ? this.keys(...args) : this;
    }

    _base(value, state, options) {

        let target = value;
        const errors = [];
        const finish = () => {

            return {
                value: target,
                errors: errors.length ? errors : null
            };
        };

        if (typeof value === 'string' &&
            options.convert) {

            value = internals.safeParse(value);
        }

        const type = this._flags.func ? 'function' : 'object';
        if (!value ||
            typeof value !== type ||
            Array.isArray(value)) {

            errors.push(this.createError(type + '.base', { value }, state, options));
            return finish();
        }

        // Skip if there are no other rules to test

        if (!this._inner.renames.length &&
            !this._inner.dependencies.length &&
            !this._inner.children &&                    // null allows any keys
            !this._inner.patterns.length) {

            target = value;
            return finish();
        }

        // Ensure target is a local copy (parsed) or shallow copy

        if (target === value) {
            if (type === 'object') {
                target = Object.create(Object.getPrototypeOf(value));
            }
            else {
                target = function (...args) {

                    return value.apply(this, args);
                };

                target.prototype = Hoek.clone(value.prototype);
            }

            const valueKeys = Object.keys(value);
            for (let i = 0; i < valueKeys.length; ++i) {
                target[valueKeys[i]] = value[valueKeys[i]];
            }
        }
        else {
            target = value;
        }

        // Rename keys

        const renamed = {};
        for (let i = 0; i < this._inner.renames.length; ++i) {
            const rename = this._inner.renames[i];

            if (rename.isRegExp) {
                const targetKeys = Object.keys(target);
                const matchedTargetKeys = [];

                for (let j = 0; j < targetKeys.length; ++j) {
                    if (rename.from.test(targetKeys[j])) {
                        matchedTargetKeys.push(targetKeys[j]);
                    }
                }

                const allUndefined = matchedTargetKeys.every((key) => target[key] === undefined);
                if (rename.options.ignoreUndefined && allUndefined) {
                    continue;
                }

                if (!rename.options.multiple &&
                    renamed[rename.to]) {

                    errors.push(this.createError('object.rename.regex.multiple', { from: matchedTargetKeys, to: rename.to }, state, options));
                    if (options.abortEarly) {
                        return finish();
                    }
                }

                if (Object.prototype.hasOwnProperty.call(target, rename.to) &&
                    !rename.options.override &&
                    !renamed[rename.to]) {

                    errors.push(this.createError('object.rename.regex.override', { from: matchedTargetKeys, to: rename.to }, state, options));
                    if (options.abortEarly) {
                        return finish();
                    }
                }

                if (allUndefined) {
                    delete target[rename.to];
                }
                else {
                    target[rename.to] = target[matchedTargetKeys[matchedTargetKeys.length - 1]];
                }

                renamed[rename.to] = true;

                if (!rename.options.alias) {
                    for (let j = 0; j < matchedTargetKeys.length; ++j) {
                        delete target[matchedTargetKeys[j]];
                    }
                }
            }
            else {
                if (rename.options.ignoreUndefined && target[rename.from] === undefined) {
                    continue;
                }

                if (!rename.options.multiple &&
                    renamed[rename.to]) {

                    errors.push(this.createError('object.rename.multiple', { from: rename.from, to: rename.to }, state, options));
                    if (options.abortEarly) {
                        return finish();
                    }
                }

                if (Object.prototype.hasOwnProperty.call(target, rename.to) &&
                    !rename.options.override &&
                    !renamed[rename.to]) {

                    errors.push(this.createError('object.rename.override', { from: rename.from, to: rename.to }, state, options));
                    if (options.abortEarly) {
                        return finish();
                    }
                }

                if (target[rename.from] === undefined) {
                    delete target[rename.to];
                }
                else {
                    target[rename.to] = target[rename.from];
                }

                renamed[rename.to] = true;

                if (!rename.options.alias) {
                    delete target[rename.from];
                }
            }
        }

        // Validate schema

        if (!this._inner.children &&            // null allows any keys
            !this._inner.patterns.length &&
            !this._inner.dependencies.length) {

            return finish();
        }

        const unprocessed = new Set(Object.keys(target));

        if (this._inner.children) {
            const stripProps = [];

            for (let i = 0; i < this._inner.children.length; ++i) {
                const child = this._inner.children[i];
                const key = child.key;
                const item = target[key];

                unprocessed.delete(key);

                const localState = new State(key, [...state.path, key], target, state.reference);
                const result = child.schema._validate(item, localState, options);
                if (result.errors) {
                    errors.push(this.createError('object.child', { key, child: child.schema._getLabel(key), reason: result.errors }, localState, options));

                    if (options.abortEarly) {
                        return finish();
                    }
                }
                else {
                    if (child.schema._flags.strip || (result.value === undefined && result.value !== item)) {
                        stripProps.push(key);
                        target[key] = result.finalValue;
                    }
                    else if (result.value !== undefined) {
                        target[key] = result.value;
                    }
                }
            }

            for (let i = 0; i < stripProps.length; ++i) {
                delete target[stripProps[i]];
            }
        }

        // Unknown keys

        if (unprocessed.size && this._inner.patterns.length) {

            for (const key of unprocessed) {
                const localState = new State(key, [...state.path, key], target, state.reference);
                const item = target[key];

                for (let i = 0; i < this._inner.patterns.length; ++i) {
                    const pattern = this._inner.patterns[i];

                    if (pattern.regex ?
                        pattern.regex.test(key) :
                        !pattern.schema.validate(key).error) {

                        unprocessed.delete(key);

                        const result = pattern.rule._validate(item, localState, options);
                        if (result.errors) {
                            errors.push(this.createError('object.child', {
                                key,
                                child: pattern.rule._getLabel(key),
                                reason: result.errors
                            }, localState, options));

                            if (options.abortEarly) {
                                return finish();
                            }
                        }

                        target[key] = result.value;
                    }
                }
            }
        }

        if (unprocessed.size && (this._inner.children || this._inner.patterns.length)) {
            if ((options.stripUnknown && this._flags.allowUnknown !== true) ||
                options.skipFunctions) {

                const stripUnknown = options.stripUnknown
                    ? (options.stripUnknown === true ? true : !!options.stripUnknown.objects)
                    : false;


                for (const key of unprocessed) {
                    if (stripUnknown) {
                        delete target[key];
                        unprocessed.delete(key);
                    }
                    else if (typeof target[key] === 'function') {
                        unprocessed.delete(key);
                    }
                }
            }

            if ((this._flags.allowUnknown !== undefined ? !this._flags.allowUnknown : !options.allowUnknown)) {

                for (const unprocessedKey of unprocessed) {
                    errors.push(this.createError('object.allowUnknown', { child: unprocessedKey, value: target[unprocessedKey] }, {
                        key: unprocessedKey,
                        path: [...state.path, unprocessedKey]
                    }, options, {}));
                }
            }
        }

        // Validate dependencies

        for (let i = 0; i < this._inner.dependencies.length; ++i) {
            const dep = this._inner.dependencies[i];
            const hasKey = dep.key !== null;
            const splitKey = hasKey && dep.key.split('.');
            const localState = hasKey ? new State(splitKey[splitKey.length - 1], [...state.path, ...splitKey]) : new State(null, state.path);
            const err = internals[dep.type].call(this, dep.key, hasKey && Hoek.reach(target, dep.key, { functions: true }), dep.peers, target, localState, options);
            if (err instanceof Errors.Err) {
                errors.push(err);
                if (options.abortEarly) {
                    return finish();
                }
            }
        }

        return finish();
    }

    keys(schema) {

        Hoek.assert(schema === null || schema === undefined || typeof schema === 'object', 'Object schema must be a valid object');
        Hoek.assert(!schema || !(schema instanceof Any), 'Object schema cannot be a joi schema');

        const obj = this.clone();

        if (!schema) {
            obj._inner.children = null;
            return obj;
        }

        const children = Object.keys(schema);

        if (!children.length) {
            obj._inner.children = [];
            return obj;
        }

        const topo = new Topo();
        if (obj._inner.children) {
            for (let i = 0; i < obj._inner.children.length; ++i) {
                const child = obj._inner.children[i];

                // Only add the key if we are not going to replace it later
                if (!children.includes(child.key)) {
                    topo.add(child, { after: child._refs, group: child.key });
                }
            }
        }

        for (let i = 0; i < children.length; ++i) {
            const key = children[i];
            const child = schema[key];
            try {
                const cast = Cast.schema(this._currentJoi, child);
                topo.add({ key, schema: cast }, { after: cast._refs, group: key });
            }
            catch (castErr) {
                if (castErr.hasOwnProperty('path')) {
                    castErr.path = key + '.' + castErr.path;
                }
                else {
                    castErr.path = key;
                }

                throw castErr;
            }
        }

        obj._inner.children = topo.nodes;

        return obj;
    }

    append(schema) {
        // Skip any changes
        if (schema === null || schema === undefined || Object.keys(schema).length === 0) {
            return this;
        }

        return this.keys(schema);
    }

    unknown(allow) {

        const value = allow !== false;

        if (this._flags.allowUnknown === value) {
            return this;
        }

        const obj = this.clone();
        obj._flags.allowUnknown = value;
        return obj;
    }

    length(limit) {

        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

        return this._test('length', limit, function (value, state, options) {

            if (Object.keys(value).length === limit) {
                return value;
            }

            return this.createError('object.length', { limit, value }, state, options);
        });
    }

    min(limit) {

        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

        return this._test('min', limit, function (value, state, options) {

            if (Object.keys(value).length >= limit) {
                return value;
            }

            return this.createError('object.min', { limit, value }, state, options);
        });
    }

    max(limit) {

        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

        return this._test('max', limit, function (value, state, options) {

            if (Object.keys(value).length <= limit) {
                return value;
            }

            return this.createError('object.max', { limit, value }, state, options);
        });
    }

    pattern(pattern, schema) {

        const isRegExp = pattern instanceof RegExp;
        Hoek.assert(isRegExp || pattern instanceof Any, 'pattern must be a regex or schema');
        Hoek.assert(schema !== undefined, 'Invalid rule');

        if (isRegExp) {
            Hoek.assert(!pattern.flags.includes('g') && !pattern.flags.includes('y'), 'pattern should not use global or sticky mode');
        }

        try {
            schema = Cast.schema(this._currentJoi, schema);
        }
        catch (castErr) {
            if (castErr.hasOwnProperty('path')) {
                castErr.message = `${castErr.message}(${castErr.path})`;
            }

            throw castErr;
        }

        const obj = this.clone();
        if (isRegExp) {
            obj._inner.patterns.push({ regex: pattern, rule: schema });
        }
        else {
            obj._inner.patterns.push({ schema: pattern, rule: schema });
        }

        return obj;
    }

    schema() {

        return this._test('schema', null, function (value, state, options) {

            if (value instanceof Any) {
                return value;
            }

            return this.createError('object.schema', null, state, options);
        });
    }

    with(key, peers) {

        Hoek.assert(arguments.length === 2, 'Invalid number of arguments, expected 2.');

        return this._dependency('with', key, peers);
    }

    without(key, peers) {

        Hoek.assert(arguments.length === 2, 'Invalid number of arguments, expected 2.');

        return this._dependency('without', key, peers);
    }

    xor(...peers) {

        peers = Hoek.flatten(peers);
        return this._dependency('xor', null, peers);
    }

    oxor(...peers) {

        return this._dependency('oxor', null, peers);
    }

    or(...peers) {

        peers = Hoek.flatten(peers);
        return this._dependency('or', null, peers);
    }

    and(...peers) {

        peers = Hoek.flatten(peers);
        return this._dependency('and', null, peers);
    }

    nand(...peers) {

        peers = Hoek.flatten(peers);
        return this._dependency('nand', null, peers);
    }

    requiredKeys(...children) {

        children = Hoek.flatten(children);
        return this.applyFunctionToChildren(children, 'required');
    }

    optionalKeys(...children) {

        children = Hoek.flatten(children);
        return this.applyFunctionToChildren(children, 'optional');
    }

    forbiddenKeys(...children) {

        children = Hoek.flatten(children);
        return this.applyFunctionToChildren(children, 'forbidden');
    }

    rename(from, to, options) {

        Hoek.assert(typeof from === 'string' || from instanceof RegExp, 'Rename missing the from argument');
        Hoek.assert(typeof to === 'string', 'Rename missing the to argument');
        Hoek.assert(to !== from, 'Cannot rename key to same name:', from);

        for (let i = 0; i < this._inner.renames.length; ++i) {
            Hoek.assert(this._inner.renames[i].from !== from, 'Cannot rename the same key multiple times');
        }

        const obj = this.clone();

        obj._inner.renames.push({
            from,
            to,
            options: Hoek.applyToDefaults(internals.renameDefaults, options || {}),
            isRegExp: from instanceof RegExp
        });

        return obj;
    }

    applyFunctionToChildren(children, fn, args = [], root) {

        children = [].concat(children);
        Hoek.assert(children.length > 0, 'expected at least one children');

        const groupedChildren = internals.groupChildren(children);
        let obj;

        if ('' in groupedChildren) {
            obj = this[fn](...args);
            delete groupedChildren[''];
        }
        else {
            obj = this.clone();
        }

        if (obj._inner.children) {
            root = root ? (root + '.') : '';

            for (let i = 0; i < obj._inner.children.length; ++i) {
                const child = obj._inner.children[i];
                const group = groupedChildren[child.key];

                if (group) {
                    obj._inner.children[i] = {
                        key: child.key,
                        _refs: child._refs,
                        schema: child.schema.applyFunctionToChildren(group, fn, args, root + child.key)
                    };

                    delete groupedChildren[child.key];
                }
            }
        }

        const remaining = Object.keys(groupedChildren);
        Hoek.assert(remaining.length === 0, 'unknown key(s)', remaining.join(', '));

        return obj;
    }

    _dependency(type, key, peers) {

        peers = [].concat(peers);
        for (let i = 0; i < peers.length; ++i) {
            Hoek.assert(typeof peers[i] === 'string', type, 'peers must be a string or array of strings');
        }

        const obj = this.clone();
        obj._inner.dependencies.push({ type, key, peers });
        return obj;
    }

    describe(shallow) {

        const description = super.describe();

        if (description.rules) {
            for (let i = 0; i < description.rules.length; ++i) {
                const rule = description.rules[i];
                // Coverage off for future-proof descriptions, only object().assert() is use right now
                if (/* $lab:coverage:off$ */rule.arg &&
                    typeof rule.arg === 'object' &&
                    rule.arg.schema &&
                    rule.arg.ref /* $lab:coverage:on$ */) {
                    rule.arg = {
                        schema: rule.arg.schema.describe(),
                        ref: rule.arg.ref.toString()
                    };
                }
            }
        }

        if (this._inner.children &&
            !shallow) {

            description.children = {};
            for (let i = 0; i < this._inner.children.length; ++i) {
                const child = this._inner.children[i];
                description.children[child.key] = child.schema.describe();
            }
        }

        if (this._inner.dependencies.length) {
            description.dependencies = Hoek.clone(this._inner.dependencies);
        }

        if (this._inner.patterns.length) {
            description.patterns = [];

            for (let i = 0; i < this._inner.patterns.length; ++i) {
                const pattern = this._inner.patterns[i];
                if (pattern.regex) {
                    description.patterns.push({ regex: pattern.regex.toString(), rule: pattern.rule.describe() });
                }
                else {
                    description.patterns.push({ schema: pattern.schema.describe(), rule: pattern.rule.describe() });
                }
            }
        }

        if (this._inner.renames.length > 0) {
            description.renames = Hoek.clone(this._inner.renames);
        }

        return description;
    }

    assert(ref, schema, message) {

        ref = Cast.ref(ref);
        Hoek.assert(ref.isContext || ref.depth > 1, 'Cannot use assertions for root level references - use direct key rules instead');
        message = message || 'pass the assertion test';
        Hoek.assert(typeof message === 'string', 'Message must be a string');

        try {
            schema = Cast.schema(this._currentJoi, schema);
        }
        catch (castErr) {
            if (castErr.hasOwnProperty('path')) {
                castErr.message = `${castErr.message}(${castErr.path})`;
            }

            throw castErr;
        }

        const key = ref.path[ref.path.length - 1];
        const path = ref.path.join('.');

        return this._test('assert', { schema, ref }, function (value, state, options) {

            const result = schema._validate(ref(value), null, options, value);
            if (!result.errors) {
                return value;
            }

            const localState = new State(key, ref.path, state.parent, state.reference);
            return this.createError('object.assert', { ref: path, message }, localState, options);
        });
    }

    type(constructor, name = constructor.name) {

        Hoek.assert(typeof constructor === 'function', 'type must be a constructor function');
        const typeData = {
            name,
            ctor: constructor
        };

        return this._test('type', typeData, function (value, state, options) {

            if (value instanceof constructor) {
                return value;
            }

            return this.createError('object.type', { type: typeData.name, value }, state, options);
        });
    }
};

internals.safeParse = function (value) {

    try {
        return JSON.parse(value);
    }
    catch (parseErr) {}

    return value;
};


internals.renameDefaults = {
    alias: false,                   // Keep old value in place
    multiple: false,                // Allow renaming multiple keys into the same target
    override: false                 // Overrides an existing key
};


internals.groupChildren = function (children) {

    children.sort();

    const grouped = {};

    for (let i = 0; i < children.length; ++i) {
        const child = children[i];
        Hoek.assert(typeof child === 'string', 'children must be strings');
        const group = child.split('.')[0];
        const childGroup = grouped[group] = (grouped[group] || []);
        childGroup.push(child.substring(group.length + 1));
    }

    return grouped;
};


internals.keysToLabels = function (schema, keys) {

    const children = schema._inner.children;

    if (!children) {
        return keys;
    }

    const findLabel = function (key) {

        const matchingChild = schema._currentJoi.reach(schema, key);
        return matchingChild ? matchingChild._getLabel(key) : key;
    };

    if (Array.isArray(keys)) {
        return keys.map(findLabel);
    }

    return findLabel(keys);
};


internals.with = function (key, value, peers, parent, state, options) {

    if (value === undefined) {
        return;
    }

    for (let i = 0; i < peers.length; ++i) {

        const peer = peers[i];
        const keysExist = Hoek.reach(parent, peer, { functions: true });
        if (keysExist === undefined) {

            return this.createError('object.with', {
                main: key,
                mainWithLabel: internals.keysToLabels(this, key),
                peer,
                peerWithLabel: internals.keysToLabels(this, peer)
            }, state, options);
        }
    }
};


internals.without = function (key, value, peers, parent, state, options) {

    if (value === undefined) {
        return;
    }

    for (let i = 0; i < peers.length; ++i) {
        const peer = peers[i];
        const keysExist = Hoek.reach(parent, peer, { functions: true });
        if (keysExist !== undefined) {

            return this.createError('object.without', {
                main: key,
                mainWithLabel: internals.keysToLabels(this, key),
                peer,
                peerWithLabel: internals.keysToLabels(this, peer)
            }, state, options);
        }
    }
};


internals.xor = function (key, value, peers, parent, state, options) {

    const present = [];
    for (let i = 0; i < peers.length; ++i) {
        const peer = peers[i];
        const keysExist = Hoek.reach(parent, peer, { functions: true });
        if (keysExist !== undefined) {
            present.push(peer);
        }
    }

    if (present.length === 1) {
        return;
    }

    const context = { peers, peersWithLabels: internals.keysToLabels(this, peers) };

    if (present.length === 0) {
        return this.createError('object.missing', context, state, options);
    }

    context.present = present;
    context.presentWithLabels = internals.keysToLabels(this, present);

    return this.createError('object.xor', context, state, options);
};


internals.oxor = function (key, value, peers, parent, state, options) {

    const present = [];
    for (let i = 0; i < peers.length; ++i) {
        const peer = peers[i];
        const keysExist = Hoek.reach(parent, peer, { functions: true });
        if (keysExist !== undefined) {
            present.push(peer);
        }
    }

    if (!present.length ||
        present.length === 1) {

        return;
    }

    const context = { peers, peersWithLabels: internals.keysToLabels(this, peers) };
    context.present = present;
    context.presentWithLabels = internals.keysToLabels(this, present);

    return this.createError('object.oxor', context, state, options);
};


internals.or = function (key, value, peers, parent, state, options) {

    for (let i = 0; i < peers.length; ++i) {
        const peer = peers[i];
        const keysExist = Hoek.reach(parent, peer, { functions: true });
        if (keysExist !== undefined) {
            return;
        }
    }

    return this.createError('object.missing', {
        peers,
        peersWithLabels: internals.keysToLabels(this, peers)
    }, state, options);
};


internals.and = function (key, value, peers, parent, state, options) {

    const missing = [];
    const present = [];
    const count = peers.length;
    for (let i = 0; i < count; ++i) {
        const peer = peers[i];
        const keysExist = Hoek.reach(parent, peer, { functions: true });
        if (keysExist === undefined) {

            missing.push(peer);
        }
        else {
            present.push(peer);
        }
    }

    const aon = (missing.length === count || present.length === count);

    if (!aon) {

        return this.createError('object.and', {
            present,
            presentWithLabels: internals.keysToLabels(this, present),
            missing,
            missingWithLabels: internals.keysToLabels(this, missing)
        }, state, options);
    }
};


internals.nand = function (key, value, peers, parent, state, options) {

    const present = [];
    for (let i = 0; i < peers.length; ++i) {
        const peer = peers[i];
        const keysExist = Hoek.reach(parent, peer, { functions: true });
        if (keysExist !== undefined) {

            present.push(peer);
        }
    }

    const main = peers[0];
    const values = peers.slice(1);
    const allPresent = (present.length === peers.length);
    return allPresent ? this.createError('object.nand', {
        main,
        mainWithLabel: internals.keysToLabels(this, main),
        peers: values,
        peersWithLabels: internals.keysToLabels(this, values)
    }, state, options) : null;
};


module.exports = new internals.Object();


/***/ }),

/***/ "../../joi/lib/types/state.js":
/*!****************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/state.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = class {
    constructor(key, path, parent, reference) {

        this.key = key;
        this.path = path;
        this.parent = parent;
        this.reference = reference;
    }
};


/***/ }),

/***/ "../../joi/lib/types/string/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/string/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Net = __webpack_require__(/*! net */ "net");
const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");
const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Ref = __webpack_require__(/*! ../../ref */ "../../joi/lib/ref.js");
const JoiDate = __webpack_require__(/*! ../date */ "../../joi/lib/types/date/index.js");
const Uri = __webpack_require__(/*! ./uri */ "../../joi/lib/types/string/uri.js");
const Ip = __webpack_require__(/*! ./ip */ "../../joi/lib/types/string/ip.js");

let Isemail; // Loaded on demand

// Declare internals

const internals = {
    uriRegex: Uri.createUriRegex(),
    ipRegex: Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], 'optional'),
    guidBrackets: {
        '{': '}', '[': ']', '(': ')', '': ''
    },
    guidVersions: {
        uuidv1: '1',
        uuidv2: '2',
        uuidv3: '3',
        uuidv4: '4',
        uuidv5: '5'
    },
    cidrPresences: ['required', 'optional', 'forbidden'],
    normalizationForms: ['NFC', 'NFD', 'NFKC', 'NFKD']
};

internals.String = class extends Any {

    constructor() {

        super();
        this._type = 'string';
        this._invalids.add('');
    }

    _base(value, state, options) {

        if (typeof value === 'string' &&
            options.convert) {

            if (this._flags.normalize) {
                value = value.normalize(this._flags.normalize);
            }

            if (this._flags.case) {
                value = (this._flags.case === 'upper' ? value.toLocaleUpperCase() : value.toLocaleLowerCase());
            }

            if (this._flags.trim) {
                value = value.trim();
            }

            if (this._inner.replacements) {

                for (let i = 0; i < this._inner.replacements.length; ++i) {
                    const replacement = this._inner.replacements[i];
                    value = value.replace(replacement.pattern, replacement.replacement);
                }
            }

            if (this._flags.truncate) {
                for (let i = 0; i < this._tests.length; ++i) {
                    const test = this._tests[i];
                    if (test.name === 'max') {
                        value = value.slice(0, test.arg);
                        break;
                    }
                }
            }

            if (this._flags.byteAligned && value.length % 2 !== 0) {
                value = `0${value}`;
            }
        }

        return {
            value,
            errors: (typeof value === 'string') ? null : this.createError('string.base', { value }, state, options)
        };
    }

    insensitive() {

        if (this._flags.insensitive) {
            return this;
        }

        const obj = this.clone();
        obj._flags.insensitive = true;
        return obj;
    }

    creditCard() {

        return this._test('creditCard', undefined, function (value, state, options) {

            let i = value.length;
            let sum = 0;
            let mul = 1;

            while (i--) {
                const char = value.charAt(i) * mul;
                sum = sum + (char - (char > 9) * 9);
                mul = mul ^ 3;
            }

            const check = (sum % 10 === 0) && (sum > 0);
            return check ? value : this.createError('string.creditCard', { value }, state, options);
        });
    }

    regex(pattern, patternOptions) {

        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
        Hoek.assert(!pattern.flags.includes('g') && !pattern.flags.includes('y'), 'pattern should not use global or sticky mode');

        const patternObject = { pattern };

        if (typeof patternOptions === 'string') {
            patternObject.name = patternOptions;
        }
        else if (typeof patternOptions === 'object') {
            patternObject.invert = !!patternOptions.invert;

            if (patternOptions.name) {
                patternObject.name = patternOptions.name;
            }
        }

        const errorCode = ['string.regex', patternObject.invert ? '.invert' : '', patternObject.name ? '.name' : '.base'].join('');

        return this._test('regex', patternObject, function (value, state, options) {

            const patternMatch = patternObject.pattern.test(value);

            if (patternMatch ^ patternObject.invert) {
                return value;
            }

            return this.createError(errorCode, { name: patternObject.name, pattern: patternObject.pattern, value }, state, options);
        });
    }

    alphanum() {

        return this._test('alphanum', undefined, function (value, state, options) {

            if (/^[a-zA-Z0-9]+$/.test(value)) {
                return value;
            }

            return this.createError('string.alphanum', { value }, state, options);
        });
    }

    token() {

        return this._test('token', undefined, function (value, state, options) {

            if (/^\w+$/.test(value)) {
                return value;
            }

            return this.createError('string.token', { value }, state, options);
        });
    }

    email(isEmailOptions) {

        if (isEmailOptions) {
            Hoek.assert(typeof isEmailOptions === 'object', 'email options must be an object');
            Hoek.assert(typeof isEmailOptions.checkDNS === 'undefined', 'checkDNS option is not supported');
            Hoek.assert(typeof isEmailOptions.tldWhitelist === 'undefined' ||
                typeof isEmailOptions.tldWhitelist === 'object', 'tldWhitelist must be an array or object');
            Hoek.assert(
                typeof isEmailOptions.minDomainAtoms === 'undefined' ||
                Number.isSafeInteger(isEmailOptions.minDomainAtoms) &&
                isEmailOptions.minDomainAtoms > 0,
                'minDomainAtoms must be a positive integer'
            );
            Hoek.assert(
                typeof isEmailOptions.errorLevel === 'undefined' ||
                typeof isEmailOptions.errorLevel === 'boolean' ||
                (
                    Number.isSafeInteger(isEmailOptions.errorLevel) &&
                    isEmailOptions.errorLevel >= 0
                ),
                'errorLevel must be a non-negative integer or boolean'
            );
        }

        return this._test('email', isEmailOptions, function (value, state, options) {

            Isemail = Isemail || __webpack_require__(/*! isemail */ "../../isemail/lib/index.js");

            try {
                const result = Isemail.validate(value, isEmailOptions);
                if (result === true || result === 0) {
                    return value;
                }
            }
            catch (e) { }

            return this.createError('string.email', { value }, state, options);
        });
    }

    ip(ipOptions = {}) {

        let regex = internals.ipRegex;
        Hoek.assert(typeof ipOptions === 'object', 'options must be an object');

        if (ipOptions.cidr) {
            Hoek.assert(typeof ipOptions.cidr === 'string', 'cidr must be a string');
            ipOptions.cidr = ipOptions.cidr.toLowerCase();

            Hoek.assert(Hoek.contain(internals.cidrPresences, ipOptions.cidr), 'cidr must be one of ' + internals.cidrPresences.join(', '));

            // If we only received a `cidr` setting, create a regex for it. But we don't need to create one if `cidr` is "optional" since that is the default
            if (!ipOptions.version && ipOptions.cidr !== 'optional') {
                regex = Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], ipOptions.cidr);
            }
        }
        else {

            // Set our default cidr strategy
            ipOptions.cidr = 'optional';
        }

        let versions;
        if (ipOptions.version) {
            if (!Array.isArray(ipOptions.version)) {
                ipOptions.version = [ipOptions.version];
            }

            Hoek.assert(ipOptions.version.length >= 1, 'version must have at least 1 version specified');

            versions = [];
            for (let i = 0; i < ipOptions.version.length; ++i) {
                let version = ipOptions.version[i];
                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
                version = version.toLowerCase();
                Hoek.assert(Ip.versions[version], 'version at position ' + i + ' must be one of ' + Object.keys(Ip.versions).join(', '));
                versions.push(version);
            }

            // Make sure we have a set of versions
            versions = Array.from(new Set(versions));

            regex = Ip.createIpRegex(versions, ipOptions.cidr);
        }

        return this._test('ip', ipOptions, function (value, state, options) {

            if (regex.test(value)) {
                return value;
            }

            if (versions) {
                return this.createError('string.ipVersion', { value, cidr: ipOptions.cidr, version: versions }, state, options);
            }

            return this.createError('string.ip', { value, cidr: ipOptions.cidr }, state, options);
        });
    }

    uri(uriOptions) {

        let customScheme = '';
        let allowRelative = false;
        let relativeOnly = false;
        let allowQuerySquareBrackets = false;
        let regex = internals.uriRegex;

        if (uriOptions) {
            Hoek.assert(typeof uriOptions === 'object', 'options must be an object');

            const unknownOptions = Object.keys(uriOptions).filter((key) => !['scheme', 'allowRelative', 'relativeOnly', 'allowQuerySquareBrackets'].includes(key));
            Hoek.assert(unknownOptions.length === 0, `options contain unknown keys: ${unknownOptions}`);

            if (uriOptions.scheme) {
                Hoek.assert(uriOptions.scheme instanceof RegExp || typeof uriOptions.scheme === 'string' || Array.isArray(uriOptions.scheme), 'scheme must be a RegExp, String, or Array');

                if (!Array.isArray(uriOptions.scheme)) {
                    uriOptions.scheme = [uriOptions.scheme];
                }

                Hoek.assert(uriOptions.scheme.length >= 1, 'scheme must have at least 1 scheme specified');

                // Flatten the array into a string to be used to match the schemes.
                for (let i = 0; i < uriOptions.scheme.length; ++i) {
                    const scheme = uriOptions.scheme[i];
                    Hoek.assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');

                    // Add OR separators if a value already exists
                    customScheme = customScheme + (customScheme ? '|' : '');

                    // If someone wants to match HTTP or HTTPS for example then we need to support both RegExp and String so we don't escape their pattern unknowingly.
                    if (scheme instanceof RegExp) {
                        customScheme = customScheme + scheme.source;
                    }
                    else {
                        Hoek.assert(/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
                        customScheme = customScheme + Hoek.escapeRegex(scheme);
                    }
                }
            }

            if (uriOptions.allowRelative) {
                allowRelative = true;
            }

            if (uriOptions.relativeOnly) {
                relativeOnly = true;
            }

            if (uriOptions.allowQuerySquareBrackets) {
                allowQuerySquareBrackets = true;
            }
        }

        if (customScheme || allowRelative || relativeOnly || allowQuerySquareBrackets) {
            regex = Uri.createUriRegex(customScheme, allowRelative, relativeOnly, allowQuerySquareBrackets);
        }

        return this._test('uri', uriOptions, function (value, state, options) {

            if (regex.test(value)) {
                return value;
            }

            if (relativeOnly) {
                return this.createError('string.uriRelativeOnly', { value }, state, options);
            }

            if (customScheme) {
                return this.createError('string.uriCustomScheme', { scheme: customScheme, value }, state, options);
            }

            return this.createError('string.uri', { value }, state, options);
        });
    }

    isoDate() {

        return this._test('isoDate', undefined, function (value, state, options) {

            if (JoiDate._isIsoDate(value)) {
                if (!options.convert) {
                    return value;
                }

                const d = new Date(value);
                if (!isNaN(d.getTime())) {
                    return d.toISOString();
                }
            }

            return this.createError('string.isoDate', { value }, state, options);
        });
    }

    guid(guidOptions) {

        let versionNumbers = '';

        if (guidOptions && guidOptions.version) {
            if (!Array.isArray(guidOptions.version)) {
                guidOptions.version = [guidOptions.version];
            }

            Hoek.assert(guidOptions.version.length >= 1, 'version must have at least 1 valid version specified');
            const versions = new Set();

            for (let i = 0; i < guidOptions.version.length; ++i) {
                let version = guidOptions.version[i];
                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
                version = version.toLowerCase();
                const versionNumber = internals.guidVersions[version];
                Hoek.assert(versionNumber, 'version at position ' + i + ' must be one of ' + Object.keys(internals.guidVersions).join(', '));
                Hoek.assert(!(versions.has(versionNumber)), 'version at position ' + i + ' must not be a duplicate.');

                versionNumbers += versionNumber;
                versions.add(versionNumber);
            }
        }

        const guidRegex = new RegExp(`^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[${versionNumbers || '0-9A-F'}][0-9A-F]{3}\\2?[${versionNumbers ? '89AB' : '0-9A-F'}][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$`, 'i');

        return this._test('guid', guidOptions, function (value, state, options) {

            const results = guidRegex.exec(value);

            if (!results) {
                return this.createError('string.guid', { value }, state, options);
            }

            // Matching braces
            if (internals.guidBrackets[results[1]] !== results[results.length - 1]) {
                return this.createError('string.guid', { value }, state, options);
            }

            return value;
        });
    }

    hex(hexOptions = {}) {

        Hoek.assert(typeof hexOptions === 'object', 'hex options must be an object');
        Hoek.assert(typeof hexOptions.byteAligned === 'undefined' || typeof hexOptions.byteAligned === 'boolean',
            'byteAligned must be boolean');

        const byteAligned = hexOptions.byteAligned === true;
        const regex = /^[a-f0-9]+$/i;

        const obj = this._test('hex', regex, function (value, state, options) {

            if (regex.test(value)) {
                if (byteAligned && value.length % 2 !== 0) {
                    return this.createError('string.hexAlign', { value }, state, options);
                }

                return value;
            }

            return this.createError('string.hex', { value }, state, options);
        });

        if (byteAligned) {
            obj._flags.byteAligned = true;
        }

        return obj;
    }

    base64(base64Options = {}) {

        // Validation.
        Hoek.assert(typeof base64Options === 'object', 'base64 options must be an object');
        Hoek.assert(typeof base64Options.paddingRequired === 'undefined' || typeof base64Options.paddingRequired === 'boolean',
            'paddingRequired must be boolean');

        // Determine if padding is required.
        const paddingRequired = base64Options.paddingRequired === false ?
            base64Options.paddingRequired
            : base64Options.paddingRequired || true;

        // Set validation based on preference.
        const regex = paddingRequired ?
            // Padding is required.
            /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
            // Padding is optional.
            : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/;

        return this._test('base64', regex, function (value, state, options) {

            if (regex.test(value)) {
                return value;
            }

            return this.createError('string.base64', { value }, state, options);
        });
    }

    dataUri(dataUriOptions = {}) {

        const regex = /^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/;

        // Determine if padding is required.
        const paddingRequired = dataUriOptions.paddingRequired === false ?
            dataUriOptions.paddingRequired
            : dataUriOptions.paddingRequired || true;

        const base64regex =  paddingRequired ?
            /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
            : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/;

        return this._test('dataUri', regex, function (value, state, options) {

            const matches = value.match(regex);

            if (matches) {
                if (!matches[2]) {
                    return value;
                }

                if (matches[2] !== 'base64') {
                    return value;
                }

                if (base64regex.test(matches[3])) {
                    return value;
                }
            }

            return this.createError('string.dataUri', { value }, state, options);
        });
    }

    hostname() {

        const regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

        return this._test('hostname', undefined, function (value, state, options) {

            if ((value.length <= 255 && regex.test(value)) ||
                Net.isIPv6(value)) {

                return value;
            }

            return this.createError('string.hostname', { value }, state, options);
        });
    }

    normalize(form = 'NFC') {

        Hoek.assert(Hoek.contain(internals.normalizationForms, form), 'normalization form must be one of ' + internals.normalizationForms.join(', '));

        const obj = this._test('normalize', form, function (value, state, options) {

            if (options.convert ||
                value === value.normalize(form)) {

                return value;
            }

            return this.createError('string.normalize', { value, form }, state, options);
        });

        obj._flags.normalize = form;
        return obj;
    }

    lowercase() {

        const obj = this._test('lowercase', undefined, function (value, state, options) {

            if (options.convert ||
                value === value.toLocaleLowerCase()) {

                return value;
            }

            return this.createError('string.lowercase', { value }, state, options);
        });

        obj._flags.case = 'lower';
        return obj;
    }

    uppercase() {

        const obj = this._test('uppercase', undefined, function (value, state, options) {

            if (options.convert ||
                value === value.toLocaleUpperCase()) {

                return value;
            }

            return this.createError('string.uppercase', { value }, state, options);
        });

        obj._flags.case = 'upper';
        return obj;
    }

    trim(enabled = true) {

        Hoek.assert(typeof enabled === 'boolean', 'option must be a boolean');

        if ((this._flags.trim && enabled) || (!this._flags.trim && !enabled)) {
            return this;
        }

        let obj;
        if (enabled) {
            obj = this._test('trim', undefined, function (value, state, options) {

                if (options.convert ||
                    value === value.trim()) {

                    return value;
                }

                return this.createError('string.trim', { value }, state, options);
            });
        }
        else {
            obj = this.clone();
            obj._tests = obj._tests.filter((test) => test.name !== 'trim');
        }

        obj._flags.trim = enabled;
        return obj;
    }

    replace(pattern, replacement) {

        if (typeof pattern === 'string') {
            pattern = new RegExp(Hoek.escapeRegex(pattern), 'g');
        }

        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
        Hoek.assert(typeof replacement === 'string', 'replacement must be a String');

        // This can not be considere a test like trim, we can't "reject"
        // anything from this rule, so just clone the current object
        const obj = this.clone();

        if (!obj._inner.replacements) {
            obj._inner.replacements = [];
        }

        obj._inner.replacements.push({
            pattern,
            replacement
        });

        return obj;
    }

    truncate(enabled) {

        const value = enabled === undefined ? true : !!enabled;

        if (this._flags.truncate === value) {
            return this;
        }

        const obj = this.clone();
        obj._flags.truncate = value;
        return obj;
    }

};

internals.compare = function (type, compare) {

    return function (limit, encoding) {

        const isRef = Ref.isRef(limit);

        Hoek.assert((Number.isSafeInteger(limit) && limit >= 0) || isRef, 'limit must be a positive integer or reference');
        Hoek.assert(!encoding || Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

        return this._test(type, limit, function (value, state, options) {

            let compareTo;
            if (isRef) {
                compareTo = limit(state.reference || state.parent, options);

                if (!Number.isSafeInteger(compareTo)) {
                    return this.createError('string.ref', { ref: limit, value: compareTo }, state, options);
                }
            }
            else {
                compareTo = limit;
            }

            if (compare(value, compareTo, encoding)) {
                return value;
            }

            return this.createError('string.' + type, { limit: compareTo, value, encoding }, state, options);
        });
    };
};


internals.String.prototype.min = internals.compare('min', (value, limit, encoding) => {

    const length = encoding ? Buffer.byteLength(value, encoding) : value.length;
    return length >= limit;
});


internals.String.prototype.max = internals.compare('max', (value, limit, encoding) => {

    const length = encoding ? Buffer.byteLength(value, encoding) : value.length;
    return length <= limit;
});


internals.String.prototype.length = internals.compare('length', (value, limit, encoding) => {

    const length = encoding ? Buffer.byteLength(value, encoding) : value.length;
    return length === limit;
});

// Aliases

internals.String.prototype.uuid = internals.String.prototype.guid;

module.exports = new internals.String();


/***/ }),

/***/ "../../joi/lib/types/string/ip.js":
/*!********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/string/ip.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const RFC3986 = __webpack_require__(/*! ./rfc3986 */ "../../joi/lib/types/string/rfc3986.js");


// Declare internals

const internals = {
    Ip: {
        cidrs: {
            ipv4: {
                required: '\\/(?:' + RFC3986.ipv4Cidr + ')',
                optional: '(?:\\/(?:' + RFC3986.ipv4Cidr + '))?',
                forbidden: ''
            },
            ipv6: {
                required: '\\/' + RFC3986.ipv6Cidr,
                optional: '(?:\\/' + RFC3986.ipv6Cidr + ')?',
                forbidden: ''
            },
            ipvfuture: {
                required: '\\/' + RFC3986.ipv6Cidr,
                optional: '(?:\\/' + RFC3986.ipv6Cidr + ')?',
                forbidden: ''
            }
        },
        versions: {
            ipv4: RFC3986.IPv4address,
            ipv6: RFC3986.IPv6address,
            ipvfuture: RFC3986.IPvFuture
        }
    }
};


internals.Ip.createIpRegex = function (versions, cidr) {

    let regex;
    for (let i = 0; i < versions.length; ++i) {
        const version = versions[i];
        if (!regex) {
            regex = '^(?:' + internals.Ip.versions[version] + internals.Ip.cidrs[version][cidr];
        }
        else {
            regex += '|' + internals.Ip.versions[version] + internals.Ip.cidrs[version][cidr];
        }
    }

    return new RegExp(regex + ')$');
};

module.exports = internals.Ip;


/***/ }),

/***/ "../../joi/lib/types/string/rfc3986.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/string/rfc3986.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules


// Delcare internals

const internals = {
    rfc3986: {}
};


internals.generate = function () {

    /**
     * elements separated by forward slash ("/") are alternatives.
     */
    const or = '|';

    /**
     * Rule to support zero-padded addresses.
     */
    const zeroPad = '0?';

    /**
     * DIGIT = %x30-39 ; 0-9
     */
    const digit = '0-9';
    const digitOnly = '[' + digit + ']';

    /**
     * ALPHA = %x41-5A / %x61-7A   ; A-Z / a-z
     */
    const alpha = 'a-zA-Z';
    const alphaOnly = '[' + alpha + ']';

    /**
     * IPv4
     * cidr       = DIGIT                ; 0-9
     *            / %x31-32 DIGIT         ; 10-29
     *            / "3" %x30-32           ; 30-32
     */
    internals.rfc3986.ipv4Cidr = digitOnly + or + '[1-2]' + digitOnly + or + '3' + '[0-2]';

    /**
     * IPv6
     * cidr       = DIGIT                 ; 0-9
     *            / %x31-39 DIGIT         ; 10-99
     *            / "1" %x0-1 DIGIT       ; 100-119
     *            / "12" %x0-8            ; 120-128
     */
    internals.rfc3986.ipv6Cidr = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + '[01]' + digitOnly + or + '12[0-8])';

    /**
     * HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
     */
    const hexDigit = digit + 'A-Fa-f';
    const hexDigitOnly = '[' + hexDigit + ']';

    /**
     * unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
     */
    const unreserved = alpha + digit + '-\\._~';

    /**
     * sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
     */
    const subDelims = '!\\$&\'\\(\\)\\*\\+,;=';

    /**
     * pct-encoded = "%" HEXDIG HEXDIG
     */
    const pctEncoded = '%' + hexDigit;

    /**
     * pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
     */
    const pchar = unreserved + pctEncoded + subDelims + ':@';
    const pcharOnly = '[' + pchar + ']';

    /**
     * squareBrackets example: []
     */
    const squareBrackets = '\\[\\]';

    /**
     * dec-octet   = DIGIT                 ; 0-9
     *            / %x31-39 DIGIT         ; 10-99
     *            / "1" 2DIGIT            ; 100-199
     *            / "2" %x30-34 DIGIT     ; 200-249
     *            / "25" %x30-35          ; 250-255
     */
    const decOctect = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + digitOnly + digitOnly + or + '2' + '[0-4]' + digitOnly + or + '25' + '[0-5])';

    /**
     * IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
     */
    internals.rfc3986.IPv4address = '(?:' + decOctect + '\\.){3}' + decOctect;

    /**
     * h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
     * ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
     * IPv6address =                            6( h16 ":" ) ls32
     *             /                       "::" 5( h16 ":" ) ls32
     *             / [               h16 ] "::" 4( h16 ":" ) ls32
     *             / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
     *             / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
     *             / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
     *             / [ *4( h16 ":" ) h16 ] "::"              ls32
     *             / [ *5( h16 ":" ) h16 ] "::"              h16
     *             / [ *6( h16 ":" ) h16 ] "::"
     */
    const h16 = hexDigitOnly + '{1,4}';
    const ls32 = '(?:' + h16 + ':' + h16 + '|' + internals.rfc3986.IPv4address + ')';
    const IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
    const IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
    const IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
    const IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
    const IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
    const IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
    const IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
    const IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
    const IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
    internals.rfc3986.IPv6address = '(?:' + IPv6SixHex + or + IPv6FiveHex + or + IPv6FourHex + or + IPv6ThreeHex + or + IPv6TwoHex + or + IPv6OneHex + or + IPv6NoneHex + or + IPv6NoneHex2 + or + IPv6NoneHex3 + ')';

    /**
     * IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
     */
    internals.rfc3986.IPvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+';

    /**
     * scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
     */
    internals.rfc3986.scheme = alphaOnly + '[' + alpha + digit + '+-\\.]*';

    /**
     * userinfo = *( unreserved / pct-encoded / sub-delims / ":" )
     */
    const userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*';

    /**
     * IP-literal = "[" ( IPv6address / IPvFuture  ) "]"
     */
    const IPLiteral = '\\[(?:' + internals.rfc3986.IPv6address + or + internals.rfc3986.IPvFuture + ')\\]';

    /**
     * reg-name = *( unreserved / pct-encoded / sub-delims )
     */
    const regName = '[' + unreserved + pctEncoded + subDelims + ']{0,255}';

    /**
     * host = IP-literal / IPv4address / reg-name
     */
    const host = '(?:' + IPLiteral + or + internals.rfc3986.IPv4address + or + regName + ')';

    /**
     * port = *DIGIT
     */
    const port = digitOnly + '*';

    /**
     * authority   = [ userinfo "@" ] host [ ":" port ]
     */
    const authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?';

    /**
     * segment       = *pchar
     * segment-nz    = 1*pchar
     * path          = path-abempty    ; begins with "/" or is empty
     *               / path-absolute   ; begins with "/" but not "//"
     *               / path-noscheme   ; begins with a non-colon segment
     *               / path-rootless   ; begins with a segment
     *               / path-empty      ; zero characters
     * path-abempty  = *( "/" segment )
     * path-absolute = "/" [ segment-nz *( "/" segment ) ]
     * path-rootless = segment-nz *( "/" segment )
     */
    const segment = pcharOnly + '*';
    const segmentNz = pcharOnly + '+';
    const segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
    const pathEmpty = '';
    const pathAbEmpty = '(?:\\/' + segment + ')*';
    const pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
    const pathRootless = segmentNz + pathAbEmpty;
    const pathNoScheme = segmentNzNc + pathAbEmpty;

    /**
     * hier-part = "//" authority path
     */
    internals.rfc3986.hierPart = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathRootless + ')';

    /**
     * relative-part = "//" authority path-abempty
     *                 / path-absolute
     *                 / path-noscheme
     *                 / path-empty
     */
    internals.rfc3986.relativeRef = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty  + ')' + or + pathAbsolute + or + pathNoScheme + or + pathEmpty + ')';

    /**
     * query = *( pchar / "/" / "?" )
     */
    internals.rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part or end of the line.

    /**
     * query = *( pchar / "[" / "]" / "/" / "?" )
     */
    internals.rfc3986.queryWithSquareBrackets = '[' + pchar + squareBrackets + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part or end of the line.

    /**
     * fragment = *( pchar / "/" / "?" )
     */
    internals.rfc3986.fragment = '[' + pchar + '\\/\\?]*';
};


internals.generate();

module.exports = internals.rfc3986;


/***/ }),

/***/ "../../joi/lib/types/string/uri.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/string/uri.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load Modules

const RFC3986 = __webpack_require__(/*! ./rfc3986 */ "../../joi/lib/types/string/rfc3986.js");


// Declare internals

const internals = {
    Uri: {
        createUriRegex: function (optionalScheme, allowRelative, relativeOnly, allowQuerySquareBrackets) {

            let scheme = RFC3986.scheme;
            let prefix;

            if (relativeOnly) {
                prefix = '(?:' + RFC3986.relativeRef + ')';
            }
            else {
                // If we were passed a scheme, use it instead of the generic one
                if (optionalScheme) {

                    // Have to put this in a non-capturing group to handle the OR statements
                    scheme = '(?:' + optionalScheme + ')';
                }

                const withScheme = '(?:' + scheme + ':' + RFC3986.hierPart + ')';

                prefix = allowRelative ? '(?:' + withScheme + '|' + RFC3986.relativeRef + ')' : withScheme;
            }

            /**
             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
             *
             * OR
             *
             * relative-ref = relative-part [ "?" query ] [ "#" fragment ]
             */
            return new RegExp('^' + prefix + '(?:\\?' + (allowQuerySquareBrackets ? RFC3986.queryWithSquareBrackets : RFC3986.query) + ')?' + '(?:#' + RFC3986.fragment + ')?$');
        }
    }
};


module.exports = internals.Uri;


/***/ }),

/***/ "../../joi/lib/types/symbol/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/symbol/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Util = __webpack_require__(/*! util */ "util");

const Any = __webpack_require__(/*! ../any */ "../../joi/lib/types/any/index.js");
const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {};


internals.Map = class extends Map {

    slice() {

        return new internals.Map(this);
    }

    toString() {

        return Util.inspect(this);
    }
};


internals.Symbol = class extends Any {

    constructor() {

        super();
        this._type = 'symbol';
        this._inner.map = new internals.Map();
    }

    _base(value, state, options) {

        if (options.convert) {
            const lookup = this._inner.map.get(value);
            if (lookup) {
                value = lookup;
            }

            if (this._flags.allowOnly) {
                return {
                    value,
                    errors: (typeof value === 'symbol') ? null : this.createError('symbol.map', { value, map: this._inner.map }, state, options)
                };
            }
        }

        return {
            value,
            errors: (typeof value === 'symbol') ? null : this.createError('symbol.base', { value }, state, options)
        };
    }

    map(iterable) {

        if (iterable && !iterable[Symbol.iterator] && typeof iterable === 'object') {
            iterable = Object.entries(iterable);
        }

        Hoek.assert(iterable && iterable[Symbol.iterator], 'Iterable must be an iterable or object');
        const obj = this.clone();

        const symbols = [];
        for (const entry of iterable) {
            Hoek.assert(entry && entry[Symbol.iterator], 'Entry must be an iterable');
            const [key, value] = entry;

            Hoek.assert(typeof key !== 'object' && typeof key !== 'function' && typeof key !== 'symbol', 'Key must not be an object, function, or Symbol');
            Hoek.assert(typeof value === 'symbol', 'Value must be a Symbol');
            obj._inner.map.set(key, value);
            symbols.push(value);
        }

        return obj.valid(...symbols);
    }

    describe() {

        const description = super.describe();
        description.map = new Map(this._inner.map);
        return description;
    }
};


module.exports = new internals.Symbol();


/***/ }),

/***/ "../../joi/lib/types/symbols.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/lib/types/symbols.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    settingsCache: Symbol('settingsCache')
};


/***/ }),

/***/ "../../joi/package.json":
/*!**********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/joi/package.json ***!
  \**********************************************************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"joi\",\"_id\":\"joi@14.3.1\",\"_inBundle\":false,\"_integrity\":\"sha512-LQDdM+pkOrpAn4Lp+neNIFV3axv1Vna3j38bisbQhETPMANYRbFJFUyOZcOClYvM/hppMhGWuKSFEK9vjrB+bQ==\",\"_location\":\"/joi\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"joi\",\"name\":\"joi\",\"escapedName\":\"joi\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/joi/-/joi-14.3.1.tgz\",\"_shasum\":\"164a262ec0b855466e0c35eea2a885ae8b6c703c\",\"_spec\":\"joi\",\"_where\":\"/Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example\",\"bugs\":{\"url\":\"https://github.com/hapijs/joi/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"hoek\":\"6.x.x\",\"isemail\":\"3.x.x\",\"topo\":\"3.x.x\"},\"deprecated\":\"This module has moved and is now available at @hapi/joi. Please update your dependencies as this version is no longer maintained an may contain bugs and security issues.\",\"description\":\"Object schema validation\",\"devDependencies\":{\"code\":\"5.x.x\",\"hapitoc\":\"1.x.x\",\"lab\":\"18.x.x\"},\"homepage\":\"https://github.com/hapijs/joi\",\"keywords\":[\"hapi\",\"schema\",\"validation\"],\"license\":\"BSD-3-Clause\",\"main\":\"lib/index.js\",\"name\":\"joi\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/hapijs/joi.git\"},\"scripts\":{\"test\":\"lab -t 100 -a code -L\",\"test-cov-html\":\"lab -r html -o coverage.html -a code\",\"test-debug\":\"lab -a code\",\"toc\":\"hapitoc && node docs/check-errors-list.js\",\"version\":\"npm run toc && git add API.md README.md\"},\"version\":\"14.3.1\"}");

/***/ }),

/***/ "../../source-map-support/register.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map-support/register.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ */ "../../source-map-support/source-map-support.js").install();


/***/ }),

/***/ "../../source-map-support/source-map-support.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map-support/source-map-support.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SourceMapConsumer = __webpack_require__(/*! source-map */ "../../source-map/source-map.js").SourceMapConsumer;
var path = __webpack_require__(/*! path */ "path");

var fs;
try {
  fs = __webpack_require__(/*! fs */ "fs");
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(/*! buffer-from */ "../../buffer-from/index.js");

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame) {
  if(frame.isNative()) {
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    var headerLength = 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() { return position.name || originalFunctionName(); };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  return errorString + stack.map(function(frame) {
    return '\n    at ' + wrapCallSite(frame);
  }).join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    var Module;
    try {
      Module = __webpack_require__(/*! module */ "module");
    } catch (err) {
      // NOP: Loading in catch block to convert webpack error to warning.
    }
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);
  
  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ "../../source-map/lib/array-set.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/array-set.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "../../source-map/lib/base64-vlq.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/base64-vlq.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "../../source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "../../source-map/lib/base64.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/base64.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "../../source-map/lib/binary-search.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/binary-search.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "../../source-map/lib/mapping-list.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/mapping-list.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "../../source-map/lib/quick-sort.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/quick-sort.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "../../source-map/lib/source-map-consumer.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/source-map-consumer.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "../../source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "../../source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "../../source-map/lib/source-map-generator.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/source-map-generator.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "../../source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "../../source-map/lib/source-node.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/source-node.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "../../source-map/lib/util.js":
/*!****************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/lib/util.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ "../../source-map/source-map.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/source-map/source-map.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "../../source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "../../source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "../../topo/lib/index.js":
/*!***********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/topo/lib/index.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load modules

const Hoek = __webpack_require__(/*! hoek */ "../../hoek/lib/index.js");


// Declare internals

const internals = {};


module.exports = class Topo {

    constructor() {

        this._items = [];
        this.nodes = [];
    }

    add(nodes, options) {

        options = options || {};

        // Validate rules

        const before = [].concat(options.before || []);
        const after = [].concat(options.after || []);
        const group = options.group || '?';
        const sort = options.sort || 0;                   // Used for merging only

        Hoek.assert(!before.includes(group), `Item cannot come before itself: ${group}`);
        Hoek.assert(!before.includes('?'), 'Item cannot come before unassociated items');
        Hoek.assert(!after.includes(group), `Item cannot come after itself: ${group}`);
        Hoek.assert(!after.includes('?'), 'Item cannot come after unassociated items');

        ([].concat(nodes)).forEach((node, i) => {

            const item = {
                seq: this._items.length,
                sort,
                before,
                after,
                group,
                node
            };

            this._items.push(item);
        });

        // Insert event

        const error = this._sort();
        Hoek.assert(!error, 'item', (group !== '?' ? `added into group ${group}` : ''), 'created a dependencies error');

        return this.nodes;
    }

    merge(others) {

        others = [].concat(others);
        for (let i = 0; i < others.length; ++i) {
            const other = others[i];
            if (other) {
                for (let j = 0; j < other._items.length; ++j) {
                    const item = Object.assign({}, other._items[j]);        // Shallow cloned
                    this._items.push(item);
                }
            }
        }

        // Sort items

        this._items.sort(internals.mergeSort);
        for (let i = 0; i < this._items.length; ++i) {
            this._items[i].seq = i;
        }

        const error = this._sort();
        Hoek.assert(!error, 'merge created a dependencies error');

        return this.nodes;
    }

    _sort() {

        // Construct graph

        const graph = {};
        const graphAfters = Object.create(null); // A prototype can bungle lookups w/ false positives
        const groups = Object.create(null);

        for (let i = 0; i < this._items.length; ++i) {
            const item = this._items[i];
            const seq = item.seq;                         // Unique across all items
            const group = item.group;

            // Determine Groups

            groups[group] = groups[group] || [];
            groups[group].push(seq);

            // Build intermediary graph using 'before'

            graph[seq] = item.before;

            // Build second intermediary graph with 'after'

            const after = item.after;
            for (let j = 0; j < after.length; ++j) {
                graphAfters[after[j]] = (graphAfters[after[j]] || []).concat(seq);
            }
        }

        // Expand intermediary graph

        let graphNodes = Object.keys(graph);
        for (let i = 0; i < graphNodes.length; ++i) {
            const node = graphNodes[i];
            const expandedGroups = [];

            const graphNodeItems = Object.keys(graph[node]);
            for (let j = 0; j < graphNodeItems.length; ++j) {
                const group = graph[node][graphNodeItems[j]];
                groups[group] = groups[group] || [];

                for (let k = 0; k < groups[group].length; ++k) {
                    expandedGroups.push(groups[group][k]);
                }
            }

            graph[node] = expandedGroups;
        }

        // Merge intermediary graph using graphAfters into final graph

        const afterNodes = Object.keys(graphAfters);
        for (let i = 0; i < afterNodes.length; ++i) {
            const group = afterNodes[i];

            if (groups[group]) {
                for (let j = 0; j < groups[group].length; ++j) {
                    const node = groups[group][j];
                    graph[node] = graph[node].concat(graphAfters[group]);
                }
            }
        }

        // Compile ancestors

        let children;
        const ancestors = {};
        graphNodes = Object.keys(graph);
        for (let i = 0; i < graphNodes.length; ++i) {
            const node = graphNodes[i];
            children = graph[node];

            for (let j = 0; j < children.length; ++j) {
                ancestors[children[j]] = (ancestors[children[j]] || []).concat(node);
            }
        }

        // Topo sort

        const visited = {};
        const sorted = [];

        for (let i = 0; i < this._items.length; ++i) {          // Really looping thru item.seq values out of order
            let next = i;

            if (ancestors[i]) {
                next = null;
                for (let j = 0; j < this._items.length; ++j) {  // As above, these are item.seq values
                    if (visited[j] === true) {
                        continue;
                    }

                    if (!ancestors[j]) {
                        ancestors[j] = [];
                    }

                    const shouldSeeCount = ancestors[j].length;
                    let seenCount = 0;
                    for (let k = 0; k < shouldSeeCount; ++k) {
                        if (visited[ancestors[j][k]]) {
                            ++seenCount;
                        }
                    }

                    if (seenCount === shouldSeeCount) {
                        next = j;
                        break;
                    }
                }
            }

            if (next !== null) {
                visited[next] = true;
                sorted.push(next);
            }
        }

        if (sorted.length !== this._items.length) {
            return new Error('Invalid dependencies');
        }

        const seqIndex = {};
        for (let i = 0; i < this._items.length; ++i) {
            const item = this._items[i];
            seqIndex[item.seq] = item;
        }

        const sortedNodes = [];
        this._items = sorted.map((value) => {

            const sortedItem = seqIndex[value];
            sortedNodes.push(sortedItem.node);
            return sortedItem;
        });

        this.nodes = sortedNodes;
    }
};

internals.mergeSort = (a, b) => {

    return a.sort === b.sort ? 0 : (a.sort < b.sort ? -1 : 1);
};


/***/ }),

/***/ "../../uuid/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/uuid/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../uuid/lib/bytesToUuid.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/uuid/lib/bytesToUuid.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../uuid/lib/rng.js":
/*!*********************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/uuid/lib/rng.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = __webpack_require__(/*! crypto */ "crypto");

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};


/***/ }),

/***/ "../../uuid/v1.js":
/*!****************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/uuid/v1.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../uuid/v4.js":
/*!****************************************************************************************************!*\
  !*** /Users/sumeruchatterjee/Projects/serverless-dynamodb-streams-example/node_modules/uuid/v4.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("punycode");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ })));
//# sourceMappingURL=handler.js.map