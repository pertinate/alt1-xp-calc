(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xpcalcpackage"] = factory();
	else
		root["XPCALC"] = factory();
})((typeof self!='undefined'?self:this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./appconfig.json":
/*!**********************************************************************************!*\
  !*** ../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./appconfig.json ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "appconfig.json");

/***/ }),

/***/ "../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html":
/*!******************************************************************************!*\
  !*** ../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./imgs/gems/Sapphire.png":
/*!********************************!*\
  !*** ./imgs/gems/Sapphire.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABZVBMVEUAAAAAAAKuraCjppatraC1sqakppcQEJuVl8IAEGGrrKeoqpuysaSmp6+kpa+4u7q9vr6+vsCrq6YAEF4AEGAQEJinp7G8vb68vb26ury+vr8AEGQAEFkAEFesq7a8vL63urq6vL2Ym8aWmsSUl8EAEGUQEJ3Av8C8u72ytbW5urvAwMGTl8CVmMIQEIMQEJzEwsK/vb+6ubyYmca7vLzCwcIQEIQQEIIQEJ7CwMK8ur6UlcKYmsaWl8KWmMSlp6cQEIEQEIDAvsG/vMCVlcKVlsKXmsWXmcQQEH8QEH0QEIUAAEAQEKC8u7yRk76TlcCSk76XmcUQEH4AAD6LjrWOkbmSlb+Rk70QEJ+MjraRkryWmMORlL6Ym8cQEKONj7iRkbyTlb+Ul8IQEKGOj7gQEHwQEKIQEKQQEKUQEKcQEJIQEJMQEHsQEJAQEJEQEI4QEIwQEJQAAFMAAFAAAFEAADz///+1UR7aAAAAAXRSTlMAQObYZgAAAAFiS0dEdjFjyUEAAAAHdElNRQflAhENKwaP84gEAAABRUlEQVQoz23R91fCMBAHcOKCulFQkLq17uJsUREaZ0IqCFXBhbMUAUEp/P82xSJ9+v3xk8u9e3cOhy3A8TcAtAF7DTDS3tHZqqALOF1Md08vfWvhvv6BQffQsIdhmCYD78io2+cf8zCBADtuMXBOTLqnpmdm5+ZZlgUWcguL/qXlldU1vqnAGVzf2HRtbft2eEFsaojb3dsPH0QiUUkSYaMv4IKHR8cnp2dhBBHEUoxQBnLwPJ64SIYxTEEMBUEBJl5eXaeTEQQhQileJKZmvDe3rrv7B1GCKIVEhSqQs/LjU+L5hZdoW0iIQjX0Kstv6TgPsQoFnmKjb07Lv4sYq1iMERpzhIyW1wrFklpSoVn4M25WKxrBGBl1irUELpf9KBcKRQMV8rtGufJZ/qpWifW7oRW9Vqvpul63H42GKPV/Dmw72Df5HkbRS+JGEgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xN1QxMzo0MzowNiswMDowMA2kR/YAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTdUMTM6NDM6MDYrMDA6MDB8+f9KAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADI02IxsgAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyMVBJWIIAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYxMzU2OTM4Nn40350AAAAQdEVYdFRodW1iOjpTaXplADYzOUJfaz7aAAAANXRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMjA0ODA4NzMyOTQ3MjAzODQ1NLY4twkAAAAASUVORK5CYII=");

/***/ }),

/***/ "./imgs/gems/Uncut_sapphire.png":
/*!**************************************!*\
  !*** ./imgs/gems/Uncut_sapphire.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEUAAAAAAAIAAFcQEHoQEHkAAFQQEKEQEKwQEK0QEKIQELAQEKsQEK8QELQQEHsQEHcQEH0QEHwQEIAAEHAAEGwAEFkAAFYQELUQELYQELMQEIsAEG8QEHQQEHUQEKAQELIQEI0QEIoAEHIAEHEAEHMAEGAQEJ8QEKoQELEQEIgAEF0QEIkQEIUQEIMQEIYAEHQAEFoQEIcAEFwQEK4QEI4QEIwAEF4QEKgQEKcQEKUQEI8QEJoQEJsQEKQAEGEQEKYQEJkQEHYQEJgQEJwAEGsQEJ4AEG0AEGn///+9/bYjAAAAAXRSTlMAQObYZgAAAAFiS0dESPAC1OoAAAAHdElNRQflAhQNAjQ0vLZdAAABVElEQVQoz2XRa1uCMBgGYNZAhRSnwzQQ5DAPgIAYEEgeqJT//48aYFb27Muue++2a3sZ5ieAuQuo8wDAX4NVWJbjwG0FtNodtlZIvVppmBceuz2xjwZ9NMTS6IkDTfVY6EyeZYToDgUrU7VhbTxr93TdQCJkTcuyyJw6WFBergzDtuEAWcQ0nSsLs2XHdteeD5FpBZvRpmKtK/QEwQ9t2Q0hCbztdksvBdps9SJM9CgyYjk0qTpJQrn1mmYp7/p6tIt9ojoJHZTzt326zNZD3459OVk7zqFi6ossPR79MLS9Td+TaHHDmsbvU1e2w0RkfZwkTfUp5zU+lWO7KJCILVxfyYD3nD9+7KMdVM0pVLD0Wb+nOiU7t7SgUAkh0kVR8KHmU97isUmICAvWwgom8yufLxdJwTSIq9P8ISjLQJ1WZ/zSpm9l+a33HS2LutP/+3+bfgEjFiw1xC2K4QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0yMFQxMzowMjo1MiswMDowMEBz1swAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMjBUMTM6MDI6NTIrMDA6MDAxLm5wAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADI02IxsgAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyMslACTgAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYxMzgyNjE3Muw4dm0AAAAQdEVYdFRodW1iOjpTaXplADU1OUJJU+2GAAAANXRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nNDUxMTk3NTc4OTA2MTUwNDY2NeVj4mkAAAAASUVORK5CYII=");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: start, openTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return openTab; });
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!./appconfig.json */ "../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./appconfig.json");
const Skills = [
    "Attack",
    "Defence",
    "Strength",
    "Constitution",
    "Ranged",
    "Prayer",
    "Magic",
    "Cooking",
    "Woodcutting",
    "Fletching",
    "Fishing",
    "Firemaking",
    "Crafting",
    "Smithing",
    "Mining",
    "Herblore",
    "Agility",
    "Thieving",
    "Slayer",
    "Farming",
    "Runecrafting",
    "Hunter",
    "Construction",
    "Summoning",
    "Dungeoneering",
    "Divination",
    "Invention",
    "Archaeology"
];
const items = {
    'Uncut Sapphire': {
        name: 'Uncut Sapphire',
        img: __webpack_require__(/*! ./imgs/gems/Uncut_sapphire.png */ "./imgs/gems/Uncut_sapphire.png")
    },
    'Sapphire': {
        name: 'Sapphire',
        img: __webpack_require__(/*! ./imgs/gems/Sapphire.png */ "./imgs/gems/Sapphire.png"),
    }
};
const actions = [
    {
        ...items['Sapphire'],
        xp: 20,
        materials: [
            {
                ...items['Uncut Sapphire'],
                amount: 1
            }
        ]
    }
];
const playerItems = Object.keys(items).map(entry => ({ ...items[entry], amount: 0 }));
function start() {
    // var _hidden = window.localStorage.getItem('xp_calc_settings');
    let skillSelect = document.getElementById('skills');
    Skills.forEach(skill => {
        const opt = document.createElement('option');
        opt.value = skill;
        opt.innerHTML = skill;
        skillSelect.appendChild(opt);
    });
    const sapphires = 5673;
    console.log(playerItems);
    const index = playerItems.findIndex(entry => entry.name === 'Uncut Sapphire');
    playerItems[index].amount = 5673;
    const action = actions[0];
    console.log('XP:', processCalcuation(action));
}
if (window.alt1) {
    alt1.identifyAppUrl("./appconfig.json");
}
function processCalcuation(action) {
    const itemsForAction = action.materials.map(material => playerItems.find(playerItem => playerItem.name === material.name));
    const actionsAvailablePerItem = itemsForAction.map((item) => {
        const material = action.materials.find(material => material.name === item.name);
        return item.amount / material.amount;
    }).sort();
    return {
        availableToCraft: actionsAvailablePerItem[0],
        craftCounts: actionsAvailablePerItem
    };
}
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}


/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Pertinate\Documents\GitHub\alt1-xp-calc\src\index.ts */"./index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=index.bundle.js.map