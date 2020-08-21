/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/db/world-event-db.ts":
/*!**********************************!*\
  !*** ./src/db/world-event-db.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldEventDb = exports.openWorldEventDb = exports.LlamaDexie = void 0;
var dexie_1 = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.mjs");
var json_serialisation_1 = __webpack_require__(/*! ../util/json-serialisation */ "./src/util/json-serialisation.ts");
var LlamaDexie = /** @class */ (function (_super) {
    __extends(LlamaDexie, _super);
    function LlamaDexie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LlamaDexie;
}(dexie_1.default));
exports.LlamaDexie = LlamaDexie;
exports.openWorldEventDb = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dexie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dexie = new dexie_1.default('llama-wars');
                dexie.version(1).stores({
                    worldEvents: '++,gameId',
                });
                return [4 /*yield*/, dexie.open()];
            case 1:
                _a.sent();
                return [2 /*return*/, new WorldEventDb(dexie)];
        }
    });
}); };
var WorldEventDb = /** @class */ (function () {
    function WorldEventDb(dexie) {
        var _this = this;
        this.store = function (gameId, event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dexie.worldEvents.add({
                            gameId: gameId,
                            event: json_serialisation_1.serialiseToJson(event),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.getEventsForGame = function (gameId) { return __awaiter(_this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dexie.worldEvents.where('gameId').equals(gameId).toArray()];
                    case 1:
                        records = _a.sent();
                        return [2 /*return*/, records.map(function (record) { return json_serialisation_1.deserialiseFromJson(record.event); })];
                }
            });
        }); };
        this.hasEventsForGame = function (gameId) { return __awaiter(_this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queryEventsByGameId(gameId).first()];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, record !== undefined];
                }
            });
        }); };
        this.queryEventsByGameId = function (gameId) {
            return _this.dexie.worldEvents.where('gameId').equals(gameId);
        };
        this.dexie = dexie;
    }
    return WorldEventDb;
}());
exports.WorldEventDb = WorldEventDb;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameHeight = exports.getGameWidth = void 0;
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var textedit_plugin_js_1 = __webpack_require__(/*! phaser3-rex-plugins/plugins/textedit-plugin.js */ "./node_modules/phaser3-rex-plugins/plugins/textedit-plugin.js");
var gameConfig = {
    title: 'Llama Wars',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    scene: scenes_1.default,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    dom: {
        createContainer: true,
    },
    backgroundColor: '#000000',
    plugins: {
        global: [
            {
                key: 'rexTextEdit',
                plugin: textedit_plugin_js_1.default,
                start: true,
            },
        ],
    },
};
exports.game = new Phaser.Game(gameConfig);
window.addEventListener('resize', function () {
    exports.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    exports.game.scale.refresh();
});


/***/ }),

/***/ "./src/scenes/asset-keys.ts":
/*!**********************************!*\
  !*** ./src/scenes/asset-keys.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_AUDIO_KEYS = exports.AudioKeys = exports.ImageKeys = void 0;
exports.ImageKeys = {
    LLAMA_1: 'llama-1',
    LLAMA_2: 'llama-2',
    LLAMA_3: 'llama-3',
    LLAMA_4: 'llama-4',
    LLAMA_EAT_1: 'llama-eat-1',
    LLAMA_EAT_2: 'llama-eat-2',
    LLAMA_EAT_3: 'llama-eat-3',
    LLAMA_EAT_4: 'llama-eat-4',
    HOURGLASS: 'hourglass',
    GRASS: 'grass',
    SPIT: 'spit',
    MOUNTAIN: 'mountain',
    CROWN: 'crown',
    BORDER_TOP_LEFT: 'border-top-left',
    BORDER_BOTTOM_LEFT: 'border-bottom-left',
    BORDER_TOP_RIGHT: 'border-top-right',
    BORDER_BOTTOM_RIGHT: 'border-bottom-right',
    BORDER_HORIZONTAL: 'border-horizontal',
    BORDER_VERTICAL: 'border-vertical',
    BLANK_BUTTON: 'blank-button',
    BLANK_BUTTON_PRESSED: 'blank-button-pressed',
    DELETE_BUTTON_1: 'delete-button-1',
    DELETE_BUTTON_2: 'delete-button-2',
};
exports.AudioKeys = {
    ATTACK_1: 'attack1',
    ATTACK_2: 'attack2',
    ATTACK_3: 'attack3',
    DEATH: 'death',
    WALK: 'walk',
    NEW_TURN: 'new-turn',
    PLAYER_DEFEATED: 'player-defeated',
    PLAYER_JOINED_LOBBY: 'player-defeated',
    VICTORY_MUSIC: 'victory-music',
    CLICK: 'click',
    SPIT: 'spit',
};
exports.ALL_AUDIO_KEYS = [
    exports.AudioKeys.ATTACK_1,
    exports.AudioKeys.ATTACK_2,
    exports.AudioKeys.ATTACK_3,
    exports.AudioKeys.DEATH,
    exports.AudioKeys.WALK,
    exports.AudioKeys.NEW_TURN,
    exports.AudioKeys.PLAYER_DEFEATED,
    exports.AudioKeys.PLAYER_JOINED_LOBBY,
    exports.AudioKeys.VICTORY_MUSIC,
    exports.AudioKeys.CLICK,
    exports.AudioKeys.SPIT,
];


/***/ }),

/***/ "./src/scenes/boot/boot-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/boot/boot-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = exports.BOOT_SCENE_KEY = void 0;
var helpers_1 = __webpack_require__(/*! ../../helpers */ "./src/helpers.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var game_scene_1 = __webpack_require__(/*! ../main-game/game-scene */ "./src/scenes/main-game/game-scene.ts");
var main_menu_scene_1 = __webpack_require__(/*! ../main-menu/main-menu-scene */ "./src/scenes/main-menu/main-menu-scene.ts");
var world_event_db_1 = __webpack_require__(/*! ../../db/world-event-db */ "./src/db/world-event-db.ts");
var server_1 = __webpack_require__(/*! ../../server/server */ "./src/server/server.ts");
var client_1 = __webpack_require__(/*! ../../server/client */ "./src/server/client.ts");
var lobby_scene_1 = __webpack_require__(/*! ../lobby/lobby-scene */ "./src/scenes/lobby/lobby-scene.ts");
var url_info_1 = __webpack_require__(/*! ./url-info */ "./src/scenes/boot/url-info.ts");
exports.BOOT_SCENE_KEY = 'Boot';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.BOOT_SCENE_KEY,
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.launchGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var urlInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlInfo = url_info_1.getUrlInfo();
                        if (!urlInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.joinOrRestoreGame(urlInfo)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.scene.start(main_menu_scene_1.MAIN_MENU_SCENE_KEY);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.joinOrRestoreGame = function (urlInfo) { return __awaiter(_this, void 0, void 0, function () {
            var worldEventDb, gameId, playerId, isServer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, world_event_db_1.openWorldEventDb()];
                    case 1:
                        worldEventDb = _a.sent();
                        gameId = urlInfo.gameId;
                        playerId = urlInfo.playerId;
                        return [4 /*yield*/, worldEventDb.hasEventsForGame(gameId)];
                    case 2:
                        isServer = _a.sent();
                        if (!isServer) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.restoreGameAsServer(gameId, worldEventDb)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.joinOrRestoreClient(gameId, playerId)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.joinOrRestoreClient = function (gameId, playerId) { return __awaiter(_this, void 0, void 0, function () {
            var client, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, client_1.Client.connect(gameId)];
                    case 1:
                        client = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.showMessage('Unable to join game, could not connect to server.');
                        console.error(e_1);
                        return [2 /*return*/];
                    case 3:
                        if (playerId) {
                            this.rejoinAsClient(client, gameId, playerId);
                        }
                        else {
                            this.joinAsClient(client, gameId);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.joinAsClient = function (client, gameId) { return __awaiter(_this, void 0, void 0, function () {
            var joinResult, playerId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.join()];
                    case 1:
                        joinResult = _a.sent();
                        if (joinResult) {
                            playerId = joinResult.playerId;
                            url_info_1.setUrlInfo({ gameId: gameId, playerId: playerId });
                            this.joinGame(client);
                        }
                        else {
                            this.showMessage('Unable to join game as it has already started.');
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.showMessage = function (message) {
            var _a = _this.game.scale.gameSize, width = _a.width, height = _a.height;
            _this.add
                .text(width / 2, height / 2, message)
                .setOrigin(0.5)
                .setFontSize(24);
        };
        _this.rejoinAsClient = function (client, gameId, playerId) { return __awaiter(_this, void 0, void 0, function () {
            var worldState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.rejoin(playerId)];
                    case 1:
                        worldState = _a.sent();
                        if (worldState) {
                            this.joinGame(client);
                        }
                        else {
                            // TODO: inform client
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.joinGame = function (client) {
            if (client.worldState.gameHasStarted) {
                var sceneData = { serverOrClient: client };
                _this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
            }
            else {
                var sceneData = { serverOrClient: client };
                _this.scene.start(lobby_scene_1.LOBBY_SCENE_KEY, sceneData);
            }
        };
        _this.restoreGameAsServer = function (gameId, worldEventDb) { return __awaiter(_this, void 0, void 0, function () {
            var server, worldState, sceneData, sceneData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, server_1.Server.restoreGame(worldEventDb, gameId)];
                    case 1:
                        server = _a.sent();
                        worldState = server.worldState;
                        if (worldState.gameHasStarted) {
                            sceneData = { serverOrClient: server };
                            this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
                        }
                        else {
                            sceneData = { serverOrClient: server };
                            this.scene.start(lobby_scene_1.LOBBY_SCENE_KEY, sceneData);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = helpers_1.getGameWidth(this) * 0.5;
        var halfHeight = helpers_1.getGameHeight(this) * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', function (value) {
            progressBar.width = (progressBarWidth - 30) * value;
            var percent = Math.round(value * 100);
            percentText.setText(percent + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.launchGame();
        });
        this.loadAssets();
    };
    BootScene.prototype.loadAssets = function () {
        // Source: https://opengameart.org/content/lpc-style-farm-animals
        this.load.image(asset_keys_1.ImageKeys.LLAMA_1, 'assets/sprites/llama/llama_15.png');
        this.load.image(asset_keys_1.ImageKeys.LLAMA_2, 'assets/sprites/llama/llama_14.png');
        this.load.image(asset_keys_1.ImageKeys.LLAMA_3, 'assets/sprites/llama/llama_13.png');
        this.load.image(asset_keys_1.ImageKeys.LLAMA_4, 'assets/sprites/llama/llama_12.png');
        this.load.image(asset_keys_1.ImageKeys.LLAMA_EAT_1, 'assets/sprites/llama-eat/llama_eat_12.png');
        this.load.image(asset_keys_1.ImageKeys.LLAMA_EAT_2, 'assets/sprites/llama-eat/llama_eat_13.png');
        this.load.image(asset_keys_1.ImageKeys.LLAMA_EAT_3, 'assets/sprites/llama-eat/llama_eat_14.png');
        this.load.image(asset_keys_1.ImageKeys.LLAMA_EAT_4, 'assets/sprites/llama-eat/llama_eat_15.png');
        // https://opengameart.org/content/rpg-gui-construction-kit-v10
        this.load.image(asset_keys_1.ImageKeys.BORDER_TOP_LEFT, 'assets/sprites/border/border-top-left.png');
        this.load.image(asset_keys_1.ImageKeys.BORDER_TOP_RIGHT, 'assets/sprites/border/border-top-right.png');
        this.load.image(asset_keys_1.ImageKeys.BORDER_BOTTOM_LEFT, 'assets/sprites/border/border-bottom-left.png');
        this.load.image(asset_keys_1.ImageKeys.BORDER_BOTTOM_RIGHT, 'assets/sprites/border/border-bottom-right.png');
        this.load.image(asset_keys_1.ImageKeys.BORDER_HORIZONTAL, 'assets/sprites/border/border-horizontal.png');
        this.load.image(asset_keys_1.ImageKeys.BORDER_VERTICAL, 'assets/sprites/border/border-vertical.png');
        this.load.image(asset_keys_1.ImageKeys.BLANK_BUTTON, 'assets/sprites/blank-button.png');
        this.load.image(asset_keys_1.ImageKeys.BLANK_BUTTON_PRESSED, 'assets/sprites/blank-button-pressed.png');
        // https://opengameart.org/content/hourglass-icon
        this.load.image(asset_keys_1.ImageKeys.HOURGLASS, 'assets/sprites/Hourglass.png');
        // https://opengameart.org/content/grass-textures-tiles
        // https://opengameart.org/content/grass-texture
        this.load.image(asset_keys_1.ImageKeys.GRASS, 'assets/sprites/grass2.png');
        // https://opengameart.org/content/puddle-corpses
        this.load.image(asset_keys_1.ImageKeys.SPIT, 'assets/sprites/puddle_light_blue.png');
        // https://opengameart.org/content/world-map-tiles
        this.load.image(asset_keys_1.ImageKeys.MOUNTAIN, 'assets/sprites/mountains_outer.png');
        // https://opengameart.org/content/game-icons-0
        this.load.image(asset_keys_1.ImageKeys.CROWN, 'assets/sprites/crown.png');
        // https://opengameart.org/content/250-hud-and-interface-icons-unknown-horizons
        this.load.image(asset_keys_1.ImageKeys.DELETE_BUTTON_1, 'assets/sprites/delete-button-1.png');
        this.load.image(asset_keys_1.ImageKeys.DELETE_BUTTON_2, 'assets/sprites/delete-button-2.png');
        // https://opengameart.org/content/37-hitspunches
        this.load.audio(asset_keys_1.AudioKeys.ATTACK_1, 'assets/audio/hit14.mp3.mp3');
        this.load.audio(asset_keys_1.AudioKeys.ATTACK_2, 'assets/audio/hit17.mp3.mp3');
        this.load.audio(asset_keys_1.AudioKeys.ATTACK_3, 'assets/audio/hit18.mp3.mp3');
        // https://opengameart.org/content/male-gruntyelling-sounds
        this.load.audio(asset_keys_1.AudioKeys.DEATH, 'assets/audio/1yell4.wav');
        // https://opengameart.org/content/grass-foot-step-sounds-yo-frankie
        this.load.audio(asset_keys_1.AudioKeys.WALK, 'assets/audio/sfx_step_grass_l.mp3');
        // https://opengameart.org/content/ui-sound-effects-pack
        this.load.audio(asset_keys_1.AudioKeys.NEW_TURN, 'assets/audio/MENU A_Select.wav');
        this.load.audio(asset_keys_1.AudioKeys.PLAYER_JOINED_LOBBY, 'assets/audio/MENU B_Select.wav');
        this.load.audio(asset_keys_1.AudioKeys.PLAYER_DEFEATED, 'assets/audio/MESSAGE-B_Decline.wav');
        // https://opengameart.org/content/clear-skies
        this.load.audio(asset_keys_1.AudioKeys.VICTORY_MUSIC, 'assets/audio/Clear Skies.mp3');
        // https://opengameart.org/content/gui-sound-effects
        this.load.audio(asset_keys_1.AudioKeys.CLICK, 'assets/audio/click.wav');
        //https://freesound.org/people/tvlaudio/sounds/267897/
        this.load.audio(asset_keys_1.AudioKeys.SPIT, 'assets/audio/spit.wav');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/boot/url-info.ts":
/*!*************************************!*\
  !*** ./src/scenes/boot/url-info.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setUrlInfo = exports.getUrlInfo = void 0;
exports.getUrlInfo = function () {
    var hash = window.location.hash;
    if (hash === '') {
        return;
    }
    var path = hash.substr(1);
    var segments = path.split('/');
    var gameId = segments[0];
    var playerId = segments.length > 1 ? Number.parseInt(segments[1]) : undefined;
    return { gameId: gameId, playerId: playerId };
};
exports.setUrlInfo = function (urlInfo) {
    var hash = urlInfo.gameId;
    if (urlInfo.playerId !== undefined) {
        hash += '/' + urlInfo.playerId;
    }
    window.location.hash = hash;
};


/***/ }),

/***/ "./src/scenes/colours.ts":
/*!*******************************!*\
  !*** ./src/scenes/colours.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerTint = exports.HOVER_ACTION_TEXT_COLOUR = exports.ACTION_TEXT_COLOUR = exports.TARGETABLE_TILE_BORDER_COLOUR = exports.SELECTED_TILE_BORDER_COLOUR = exports.HOVER_TILE_COLOUR = exports.DEFAULT_TILE_BORDER_COLOUR = exports.HEALTH_FULL_COLOUR = exports.HEALTH_EMPTY_COLOUR = exports.HEALTH_BORDER_COLOUR = exports.colourNumber = void 0;
var Color = Phaser.Display.Color;
exports.colourNumber = function (colourString) { return Color.HexStringToColor(colourString).color; };
exports.HEALTH_BORDER_COLOUR = exports.colourNumber('#000000');
exports.HEALTH_EMPTY_COLOUR = exports.colourNumber('#ffffff');
exports.HEALTH_FULL_COLOUR = exports.colourNumber('#4df037');
exports.DEFAULT_TILE_BORDER_COLOUR = exports.colourNumber('#000000');
exports.HOVER_TILE_COLOUR = exports.colourNumber('#ccffbe');
exports.SELECTED_TILE_BORDER_COLOUR = exports.colourNumber('#fffd08');
exports.TARGETABLE_TILE_BORDER_COLOUR = exports.colourNumber('#9df1e7');
exports.ACTION_TEXT_COLOUR = '#cccc00';
exports.HOVER_ACTION_TEXT_COLOUR = '#ffff00';
var PLAYER_TINTS = ['#ffbbbb', '#bbbbff', '#bbffbb', '#bbffff', '#ffffbb', '#ffbbff', '#ffffff', '#bbbbbb'].map(exports.colourNumber);
exports.getPlayerTint = function (playerId) {
    return PLAYER_TINTS[(PLAYER_TINTS.length + playerId - 1) % PLAYER_TINTS.length];
};


/***/ }),

/***/ "./src/scenes/combined-state-methods.ts":
/*!**********************************************!*\
  !*** ./src/scenes/combined-state-methods.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedState = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var attack_world_action_handler_1 = __webpack_require__(/*! ../server/attack-world-action-handler */ "./src/server/attack-world-action-handler.ts");
var CombinedState = /** @class */ (function () {
    function CombinedState(worldState, localGameState) {
        var _this = this;
        this.findSelectedUnit = function () {
            return _this.selectedHex ? _this.findUnitInLocation(_this.selectedHex) : undefined;
        };
        this.findUnitInLocation = function (hex) { return _this.worldState.findUnitInLocation(hex); };
        this.unitCouldPotentiallyMove = function (unit) {
            return unit.playerId === _this.playerId && unit.hasUnspentActionPoints && !_this.getCurrentPlayer().endedTurn;
        };
        this.unitCouldPotentiallyAttack = function (unit) {
            return unit.playerId === _this.playerId && unit.hasUnspentActionPoints && !_this.getCurrentPlayer().endedTurn;
        };
        this.unitCanMoveToHex = function (unit, hex) {
            return _this.unitCouldPotentiallyMove(unit) &&
                hex.isAdjacentTo(unit.location) &&
                _this.worldState.map.isInBounds(hex) &&
                !_this.worldState.map.isMountain(hex) &&
                !_this.findUnitInLocation(hex);
        };
        /**
         * @return the unit in the hex to attack, if an attack is possible, else undefined.
         */
        this.unitCanAttackHex = function (unit, location, attackType) {
            var targetUnit = _this.findUnitInLocation(location);
            if (_this.unitCouldPotentiallyAttack(unit) &&
                targetUnit !== undefined &&
                targetUnit.playerId !== _this.localGameState.playerId &&
                attack_world_action_handler_1.canAttackOccur(attackType, _this.worldState.map, unit.location, location))
                return targetUnit;
        };
        this.findNextUnitWithUnspentActionPoints = function (unitId) {
            var _a;
            var candidateUnits = R.sortBy(function (unit) { return unit.id; }, _this.worldState.getUnitsForPlayer(_this.playerId).filter(function (unit) { return unit.hasUnspentActionPoints; }));
            if (unitId)
                return ((_a = R.head(candidateUnits.filter(function (unit) { return unit.id > unitId; }))) !== null && _a !== void 0 ? _a : R.head(candidateUnits.filter(function (unit) { return unit.id < unitId; })));
            else
                return R.head(candidateUnits);
        };
        this.getCurrentPlayer = function () {
            var player = _this.worldState.findPlayer(_this.playerId);
            if (!player)
                throw "Could not find player with id " + _this.playerId;
            return player;
        };
        this.worldState = worldState;
        this.localGameState = localGameState;
    }
    Object.defineProperty(CombinedState.prototype, "selectedHex", {
        get: function () {
            return this.localGameState.selectedHex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CombinedState.prototype, "playerId", {
        get: function () {
            return this.localGameState.playerId;
        },
        enumerable: false,
        configurable: true
    });
    return CombinedState;
}());
exports.CombinedState = CombinedState;


/***/ }),

/***/ "./src/scenes/hex-geometry.ts":
/*!************************************!*\
  !*** ./src/scenes/hex-geometry.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexWidth = exports.mapHeight = exports.hexCorners = exports.fromPoint = exports.centerPoint = void 0;
var hex_1 = __webpack_require__(/*! ../world/hex */ "./src/world/hex.ts");
exports.centerPoint = function (hex) { return ({
    x: hex.x * Math.sqrt(3) + (hex.y * Math.sqrt(3)) / 2,
    y: (hex.y * 3) / 2,
}); };
exports.fromPoint = function (point) {
    var x = (point.x * Math.sqrt(3)) / 3 - point.y / 3;
    var y = (2 * point.y) / 3;
    return round(new hex_1.Hex(x, y));
};
var round = function (hex) {
    var rx = Math.round(hex.x);
    var ry = Math.round(hex.y);
    var rz = Math.round(hex.z);
    var xDiff = Math.abs(rx - hex.x);
    var yDiff = Math.abs(ry - hex.y);
    var zDiff = Math.abs(rz - hex.y);
    if (xDiff > yDiff && xDiff > zDiff)
        return new hex_1.Hex(-ry - rz, ry);
    else if (yDiff > zDiff)
        return new hex_1.Hex(rx, -rx - rz);
    else
        return new hex_1.Hex(rx, ry);
};
var hexAngle = Math.PI / 3;
var hexOffset = Math.PI / 6;
var hexCorner = function (center, size, i) {
    var angleRadians = hexAngle * i - hexOffset;
    var x = center.x + size * Math.cos(angleRadians);
    var y = center.y + size * Math.sin(angleRadians);
    return { x: x, y: y };
};
function hexCorners(center, size) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < 6)) return [3 /*break*/, 4];
                return [4 /*yield*/, hexCorner(center, size, i)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
exports.hexCorners = hexCorners;
exports.mapHeight = function (map) { return (map.height * 3) / 2; };
exports.hexWidth = function (hexSize) { return hexSize * Math.sqrt(3); };


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var boot_scene_1 = __webpack_require__(/*! ./boot/boot-scene */ "./src/scenes/boot/boot-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./main-game/game-scene */ "./src/scenes/main-game/game-scene.ts");
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu/main-menu-scene */ "./src/scenes/main-menu/main-menu-scene.ts");
var lobby_scene_1 = __webpack_require__(/*! ./lobby/lobby-scene */ "./src/scenes/lobby/lobby-scene.ts");
exports.default = [boot_scene_1.BootScene, game_scene_1.GameScene, main_menu_scene_1.MainMenuScene, lobby_scene_1.LobbyScene];


/***/ }),

/***/ "./src/scenes/lobby/created-lobby-scene.ts":
/*!*************************************************!*\
  !*** ./src/scenes/lobby/created-lobby-scene.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedLobbyScene = void 0;
var client_1 = __webpack_require__(/*! ../../server/client */ "./src/server/client.ts");
var game_scene_1 = __webpack_require__(/*! ../main-game/game-scene */ "./src/scenes/main-game/game-scene.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var lobby_display_objects_1 = __webpack_require__(/*! ./lobby-display-objects */ "./src/scenes/lobby/lobby-display-objects.ts");
var async_util_1 = __webpack_require__(/*! ../../util/async-util */ "./src/util/async-util.ts");
var local_1 = __webpack_require__(/*! ../local-storage/local */ "./src/scenes/local-storage/local.ts");
var CreatedLobbyScene = /** @class */ (function () {
    function CreatedLobbyScene(scene, serverOrClient) {
        var _this = this;
        this.makeLobbyDisplayObjects = function (scene, playerId) {
            return new lobby_display_objects_1.LobbyDisplayObjects(scene, playerId, _this.handleStartGame, _this.handleChangePlayerName, _this.handleKickPlayer);
        };
        this.actAsClient = function (client) {
            _this.listener = function (event) { return _this.handleWorldEvent(event, client); };
            client.addListener(_this.listener);
        };
        this.handleWorldEvent = function (event, serverOrClient) {
            switch (event.type) {
                case 'gameStarted':
                    _this.scene.sound.play(asset_keys_1.AudioKeys.NEW_TURN);
                    if (_this.listener) {
                        serverOrClient.removeListener(_this.listener);
                        _this.listener = undefined;
                    }
                    _this.launchGameScene();
                    break;
                case 'playerAdded':
                    _this.scene.sound.play(asset_keys_1.AudioKeys.PLAYER_JOINED_LOBBY);
                    _this.sync();
                    break;
                default:
                    _this.sync();
            }
        };
        this.launchGameScene = function () {
            var sceneData = {
                serverOrClient: _this.serverOrClient,
            };
            _this.scene.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
        };
        this.handleChangePlayerName = function (name) {
            local_1.LocalStorage.storeName(name);
            _this.dispatchAction({ type: 'changePlayerName', name: name });
        };
        this.dispatchAction = function (action) {
            return async_util_1.fireAndForget(function () { return _this.serverOrClient.sendAction(_this.playerId, action); });
        };
        this.sync = function () { return _this.lobbyDisplayObjects.sync(_this.serverOrClient.worldState); };
        this.actAsServer = function (server) {
            _this.listener = function (event) { return _this.handleWorldEvent(event, server); };
            server.addListener(_this.listener);
        };
        this.handleStartGame = function () { return _this.dispatchAction({ type: 'startGame' }); };
        this.handleKickPlayer = function (playerId) {
            _this.dispatchAction({ type: 'kickPlayer', playerId: playerId });
        };
        this.scene = scene;
        this.serverOrClient = serverOrClient;
        this.playerId = serverOrClient.playerId;
        this.scene.sound.pauseOnBlur = false;
        this.scene.sound.add(asset_keys_1.AudioKeys.CLICK);
        this.scene.sound.add(asset_keys_1.AudioKeys.NEW_TURN);
        this.scene.sound.add(asset_keys_1.AudioKeys.PLAYER_JOINED_LOBBY);
        this.lobbyDisplayObjects = this.makeLobbyDisplayObjects(scene, this.playerId);
        if (serverOrClient instanceof client_1.Client) {
            this.actAsClient(serverOrClient);
        }
        else {
            this.actAsServer(serverOrClient);
        }
        this.sync();
    }
    return CreatedLobbyScene;
}());
exports.CreatedLobbyScene = CreatedLobbyScene;


/***/ }),

/***/ "./src/scenes/lobby/lobby-display-objects.ts":
/*!***************************************************!*\
  !*** ./src/scenes/lobby/lobby-display-objects.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyDisplayObjects = void 0;
var player_1 = __webpack_require__(/*! ../../world/player */ "./src/world/player.ts");
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var primary_button_1 = __webpack_require__(/*! ../../ui/primary-button */ "./src/ui/primary-button.ts");
var colours_1 = __webpack_require__(/*! ../colours */ "./src/scenes/colours.ts");
var LobbyDisplayObjects = /** @class */ (function () {
    function LobbyDisplayObjects(scene, playerId, onStartGame, onChangePlayerName, onKickPlayer) {
        var _this = this;
        this.playerObjects = new Map();
        this.handleStartGame = function () {
            _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
            _this.onStartGame();
        };
        this.sync = function (worldState) {
            var e_1, _a;
            _this.createAndDestroyPlayerObjects(worldState);
            var y = 100;
            var sortedPlayers = worldState.getSortedPlayers();
            try {
                for (var sortedPlayers_1 = __values(sortedPlayers), sortedPlayers_1_1 = sortedPlayers_1.next(); !sortedPlayers_1_1.done; sortedPlayers_1_1 = sortedPlayers_1.next()) {
                    var player = sortedPlayers_1_1.value;
                    if (player.id === player_1.HOST_PLAYER_ID) {
                        _this.hostCrown.setY(y + 5);
                    }
                    var _b = _this.getPlayerObjects(player.id), nameText = _b.nameText, llama = _b.llama, kickButton = _b.kickButton;
                    nameText.setText(player.name).setY(y);
                    llama.setY(y + 10);
                    kickButton === null || kickButton === void 0 ? void 0 : kickButton.setY(y + 15);
                    y += 50;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (sortedPlayers_1_1 && !sortedPlayers_1_1.done && (_a = sortedPlayers_1.return)) _a.call(sortedPlayers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (_this.startGameButton) {
                _this.startGameButton.setY(y);
            }
            if (_this.waitingForHostText) {
                _this.waitingForHostText.setY(y);
            }
        };
        this.getPlayerObjects = function (playerId) {
            var playerObjects = _this.playerObjects.get(playerId);
            if (!playerObjects) {
                throw new Error("No player objects found for " + playerId);
            }
            return playerObjects;
        };
        this.createAndDestroyPlayerObjects = function (worldState) {
            var e_2, _a, e_3, _b;
            var requiredPlayerIds = worldState.getPlayerIds();
            var currentPlayerIds = Array.from(_this.playerObjects.keys());
            var surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds);
            try {
                for (var surplusPlayerIds_1 = __values(surplusPlayerIds), surplusPlayerIds_1_1 = surplusPlayerIds_1.next(); !surplusPlayerIds_1_1.done; surplusPlayerIds_1_1 = surplusPlayerIds_1.next()) {
                    var playerId = surplusPlayerIds_1_1.value;
                    var _c = _this.getPlayerObjects(playerId), nameText = _c.nameText, llama = _c.llama, kickButton = _c.kickButton;
                    nameText.destroy();
                    llama.destroy();
                    kickButton === null || kickButton === void 0 ? void 0 : kickButton.destroy();
                    _this.playerObjects.delete(playerId);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (surplusPlayerIds_1_1 && !surplusPlayerIds_1_1.done && (_a = surplusPlayerIds_1.return)) _a.call(surplusPlayerIds_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds);
            try {
                for (var missingPlayerIds_1 = __values(missingPlayerIds), missingPlayerIds_1_1 = missingPlayerIds_1.next(); !missingPlayerIds_1_1.done; missingPlayerIds_1_1 = missingPlayerIds_1.next()) {
                    var playerId = missingPlayerIds_1_1.value;
                    var player = worldState.getPlayer(playerId);
                    _this.createObjectsForPlayer(player);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (missingPlayerIds_1_1 && !missingPlayerIds_1_1.done && (_b = missingPlayerIds_1.return)) _b.call(missingPlayerIds_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        this.createObjectsForPlayer = function (player) {
            var nameText = _this.scene.add
                .text(140, 0, player.name, {
                fill: '#FFFFFF',
                fixedWidth: 200,
                backgroundColor: player.id === _this.playerId ? '#333333' : '#000000',
            })
                .setFontSize(18)
                .setPadding(0, 0, 0, 0)
                .setInteractive()
                .on('pointerdown', function () { return _this.handlePlayerTextClick(player, nameText); });
            var llama = _this.scene.add
                .sprite(110, 0, asset_keys_1.ImageKeys.LLAMA_EAT_1)
                .setScale(0.6)
                .setTint(colours_1.getPlayerTint(player.id))
                .play('llama-walk');
            var kickButton = player.id === player_1.HOST_PLAYER_ID || _this.playerId !== player_1.HOST_PLAYER_ID
                ? undefined
                : _this.scene.add
                    .image(370, 0, asset_keys_1.ImageKeys.DELETE_BUTTON_1)
                    .setInteractive()
                    .on('pointerout', function () { return kickButton === null || kickButton === void 0 ? void 0 : kickButton.setTexture(asset_keys_1.ImageKeys.DELETE_BUTTON_1); })
                    .on('pointerover', function () { return kickButton === null || kickButton === void 0 ? void 0 : kickButton.setTexture(asset_keys_1.ImageKeys.DELETE_BUTTON_2); })
                    .on('pointerup', function () {
                    _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
                    _this.onKickPlayer(player.id);
                });
            var playerObjects = { nameText: nameText, llama: llama, kickButton: kickButton };
            _this.playerObjects.set(player.id, playerObjects);
        };
        this.handlePlayerTextClick = function (player, playerText) {
            if (player.id === _this.playerId) {
                var plugin = _this.scene.plugins.get('rexTextEdit');
                plugin.edit(playerText, {
                    onClose: function () { return _this.onChangePlayerName(playerText.text); },
                });
            }
        };
        this.scene = scene;
        this.playerId = playerId;
        this.onStartGame = onStartGame;
        this.onChangePlayerName = onChangePlayerName;
        this.onKickPlayer = onKickPlayer;
        this.scene.add.text(155, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(26);
        if (playerId === player_1.HOST_PLAYER_ID) {
            this.startGameButton = new primary_button_1.PrimaryButton(this.scene, 100, 0, 'Start Game', this.handleStartGame);
        }
        else {
            this.waitingForHostText = this.scene.add.text(100, 0, 'Waiting for host to start the game...');
        }
        this.scene.anims.create({
            key: 'llama-walk',
            frames: [
                { key: asset_keys_1.ImageKeys.LLAMA_1 },
                { key: asset_keys_1.ImageKeys.LLAMA_2 },
                { key: asset_keys_1.ImageKeys.LLAMA_3 },
                { key: asset_keys_1.ImageKeys.LLAMA_4 },
            ],
            frameRate: 8,
            repeat: -1,
        });
        this.hostCrown = this.scene.add.image(370, 0, 'crown').setScale(0.6);
    }
    return LobbyDisplayObjects;
}());
exports.LobbyDisplayObjects = LobbyDisplayObjects;


/***/ }),

/***/ "./src/scenes/lobby/lobby-scene.ts":
/*!*****************************************!*\
  !*** ./src/scenes/lobby/lobby-scene.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyScene = exports.LOBBY_SCENE_KEY = void 0;
var created_lobby_scene_1 = __webpack_require__(/*! ./created-lobby-scene */ "./src/scenes/lobby/created-lobby-scene.ts");
exports.LOBBY_SCENE_KEY = 'Lobby';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.LOBBY_SCENE_KEY,
};
var LobbyScene = /** @class */ (function (_super) {
    __extends(LobbyScene, _super);
    function LobbyScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.create = function (sceneData) {
            var serverOrClient = sceneData.serverOrClient;
            new created_lobby_scene_1.CreatedLobbyScene(_this, serverOrClient);
        };
        return _this;
    }
    return LobbyScene;
}(Phaser.Scene));
exports.LobbyScene = LobbyScene;


/***/ }),

/***/ "./src/scenes/local-game-state.ts":
/*!****************************************!*\
  !*** ./src/scenes/local-game-state.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_LOCAL_GAME_STATE = exports.LocalGameState = void 0;
var types_1 = __webpack_require__(/*! ../util/types */ "./src/util/types.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var LocalGameState = /** @class */ (function () {
    function LocalGameState(_a) {
        var _this = this;
        var playerId = _a.playerId, mode = _a.mode, selectedHex = _a.selectedHex, _b = _a.actionsOutstandingWithServer, actionsOutstandingWithServer = _b === void 0 ? 0 : _b, sidebar = _a.sidebar;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.playerId, playerId = _c === void 0 ? _this.playerId : _c, _d = _b.mode, mode = _d === void 0 ? _this.mode : _d, _e = _b.selectedHex, selectedHex = _e === void 0 ? types_1.toMaybe(_this.selectedHex) : _e, _f = _b.actionsOutstandingWithServer, actionsOutstandingWithServer = _f === void 0 ? _this.actionsOutstandingWithServer : _f, _g = _b.sidebar, sidebar = _g === void 0 ? _this.sidebar : _g;
            return new LocalGameState({ playerId: playerId, mode: mode, selectedHex: types_1.toOption(selectedHex), actionsOutstandingWithServer: actionsOutstandingWithServer, sidebar: sidebar });
        };
        this.deselect = function () { return _this.setSelectedHex(undefined); };
        this.setSelectedHex = function (selectedHex) { return _this.copy({ selectedHex: types_1.toMaybe(selectedHex) }); };
        this.setMode = function (mode) { return _this.copy({ mode: mode }); };
        this.incrementActionsOutstandingWithServer = function () {
            return _this.copy({ actionsOutstandingWithServer: _this.actionsOutstandingWithServer + 1 });
        };
        this.decrementActionsOutstandingWithServer = function () {
            return _this.copy({ actionsOutstandingWithServer: _this.actionsOutstandingWithServer - 1 });
        };
        this.playerId = playerId;
        this.mode = mode;
        this.selectedHex = selectedHex;
        this.actionsOutstandingWithServer = actionsOutstandingWithServer;
        this.sidebar = sidebar;
        assert(actionsOutstandingWithServer >= 0);
    }
    return LocalGameState;
}());
exports.LocalGameState = LocalGameState;
exports.INITIAL_LOCAL_GAME_STATE = new LocalGameState({
    playerId: 1,
    mode: { type: 'selectHex' },
    sidebar: 'log',
});


/***/ }),

/***/ "./src/scenes/local-storage/local.ts":
/*!*******************************************!*\
  !*** ./src/scenes/local-storage/local.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
var PLAYER_NAME_KEY = 'playerName';
exports.LocalStorage = {
    storeName: function (name) { return window.localStorage.setItem(PLAYER_NAME_KEY, name); },
    findName: function () { var _a; return (_a = window.localStorage.getItem(PLAYER_NAME_KEY)) !== null && _a !== void 0 ? _a : undefined; },
};


/***/ }),

/***/ "./src/scenes/main-game/display-objects.ts":
/*!*************************************************!*\
  !*** ./src/scenes/main-game/display-objects.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayObjects = void 0;
var map_display_object_1 = __webpack_require__(/*! ./map-display-object */ "./src/scenes/main-game/map-display-object.ts");
var unit_display_object_1 = __webpack_require__(/*! ./unit-display-object */ "./src/scenes/main-game/unit-display-object.ts");
var texts_display_object_1 = __webpack_require__(/*! ./texts-display-object */ "./src/scenes/main-game/texts-display-object.ts");
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var unreachable_case_error_1 = __webpack_require__(/*! ../../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var random_util_1 = __webpack_require__(/*! ../../util/random-util */ "./src/util/random-util.ts");
var async_util_1 = __webpack_require__(/*! ../../util/async-util */ "./src/util/async-util.ts");
var DisplayObjects = /** @class */ (function () {
    function DisplayObjects(scene, worldState, localGameState, localActionDispatcher) {
        var _this = this;
        this.unitDisplayObjects = new Map();
        this.animatedUnitDisplayObjects = new Map();
        this.isAnimating = false;
        this.animations = [];
        this.scheduleEatingAnimation = function () {
            var times = [4000, 5000, 7000];
            var delay = random_util_1.randomElement(times);
            setTimeout(function () {
                var unitDisplayObjects = Array.from(_this.unitDisplayObjects.values());
                if (unitDisplayObjects.length > 0) {
                    var randomUnit_1 = random_util_1.randomElement(unitDisplayObjects);
                    async_util_1.fireAndForget(function () { return randomUnit_1.runEatAnimation(); });
                }
                _this.scheduleEatingAnimation();
            }, delay);
        };
        this.handlePointerMove = function (point) { var _a; return (_a = _this.mapDisplayObject) === null || _a === void 0 ? void 0 : _a.handlePointerMove(point); };
        this.hasClickHandlerFor = function (point) { return _this.textsDisplayObject.hasClickHandlerFor(point); };
        this.syncScene = function (worldState, localGameState, animation) {
            var _a, _b;
            _this.worldState = worldState;
            _this.localGameState = localGameState;
            (_a = _this.mapDisplayObject) === null || _a === void 0 ? void 0 : _a.syncScene(_this.worldState, _this.localGameState);
            (_b = _this.textsDisplayObject) === null || _b === void 0 ? void 0 : _b.syncScene(_this.worldState, _this.localGameState);
            if (animation) {
                _this.animations = R.append(animation)(_this.animations);
                _this.getUnitIdsInvolvedInAnimation(animation).forEach(_this.manageUnitAsBeingAnimated);
                _this.triggerAnimations();
            }
            _this.syncUnits();
        };
        this.syncUnits = function () {
            var e_1, _a;
            _this.removeUnitDisplayObjectsNoLongerNeeded();
            var unitsToSync = _this.worldState.units.filter(function (unit) { return !_this.animatedUnitDisplayObjects.has(unit.id); });
            try {
                for (var unitsToSync_1 = __values(unitsToSync), unitsToSync_1_1 = unitsToSync_1.next(); !unitsToSync_1_1.done; unitsToSync_1_1 = unitsToSync_1.next()) {
                    var unit = unitsToSync_1_1.value;
                    var unitDisplayObject = _this.unitDisplayObjects.get(unit.id);
                    if (!unitDisplayObject) {
                        unitDisplayObject = new unit_display_object_1.UnitDisplayObject(_this.scene, unit);
                        _this.unitDisplayObjects.set(unit.id, unitDisplayObject);
                    }
                    unitDisplayObject.syncScene(unit);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (unitsToSync_1_1 && !unitsToSync_1_1.done && (_a = unitsToSync_1.return)) _a.call(unitsToSync_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.removeUnitDisplayObjectsNoLongerNeeded = function () {
            var e_2, _a;
            var _b;
            var surplusUnitIds = R.difference(Array.from(_this.unitDisplayObjects.keys()), _this.worldState.units.map(function (unit) { return unit.id; }));
            try {
                for (var surplusUnitIds_1 = __values(surplusUnitIds), surplusUnitIds_1_1 = surplusUnitIds_1.next(); !surplusUnitIds_1_1.done; surplusUnitIds_1_1 = surplusUnitIds_1.next()) {
                    var unitId = surplusUnitIds_1_1.value;
                    (_b = _this.unitDisplayObjects.get(unitId)) === null || _b === void 0 ? void 0 : _b.destroy();
                    _this.unitDisplayObjects.delete(unitId);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (surplusUnitIds_1_1 && !surplusUnitIds_1_1.done && (_a = surplusUnitIds_1.return)) _a.call(surplusUnitIds_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        this.triggerAnimations = function () {
            if (_this.isAnimating) {
                return;
            }
            else {
                _this.processAnimations();
            }
        };
        this.sequenceAnimations = function () {
            var e_3, _a, e_4, _b;
            var unitIdsInvolvedInEarlierAnimations = new Set();
            var animationsToPerformNow = [];
            var animationsToPerformLater = [];
            try {
                for (var _c = __values(_this.animations), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var animation = _d.value;
                    var unitIdsInvolvedInAnimation = _this.getUnitIdsInvolvedInAnimation(animation);
                    var affectedByEarlierAnimations = R.any(function (unitId) { return unitIdsInvolvedInEarlierAnimations.has(unitId); }, unitIdsInvolvedInAnimation);
                    if (affectedByEarlierAnimations) {
                        animationsToPerformLater.push(animation);
                    }
                    else {
                        animationsToPerformNow.push(animation);
                    }
                    try {
                        for (var unitIdsInvolvedInAnimation_1 = (e_4 = void 0, __values(unitIdsInvolvedInAnimation)), unitIdsInvolvedInAnimation_1_1 = unitIdsInvolvedInAnimation_1.next(); !unitIdsInvolvedInAnimation_1_1.done; unitIdsInvolvedInAnimation_1_1 = unitIdsInvolvedInAnimation_1.next()) {
                            var unitId = unitIdsInvolvedInAnimation_1_1.value;
                            unitIdsInvolvedInEarlierAnimations.add(unitId);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (unitIdsInvolvedInAnimation_1_1 && !unitIdsInvolvedInAnimation_1_1.done && (_b = unitIdsInvolvedInAnimation_1.return)) _b.call(unitIdsInvolvedInAnimation_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return { animationsToPerformNow: animationsToPerformNow, animationsToPerformLater: animationsToPerformLater };
        };
        this.processAnimations = function () { return __awaiter(_this, void 0, void 0, function () {
            var _loop_1, this_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isAnimating = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 5, 6]);
                        _loop_1 = function () {
                            var _a, animationsToPerformNow, animationsToPerformLater, speed, animationsToPerformNow_1, animationsToPerformNow_1_1, animation;
                            var e_5, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = this_1.sequenceAnimations(), animationsToPerformNow = _a.animationsToPerformNow, animationsToPerformLater = _a.animationsToPerformLater;
                                        this_1.animations = animationsToPerformLater;
                                        speed = animationsToPerformLater.length === 0 ? 'normal' : 'quick';
                                        return [4 /*yield*/, Promise.all(animationsToPerformNow.map(function (animation) { return _this.runAnimation(animation, speed); }))];
                                    case 1:
                                        _c.sent();
                                        try {
                                            for (animationsToPerformNow_1 = (e_5 = void 0, __values(animationsToPerformNow)), animationsToPerformNow_1_1 = animationsToPerformNow_1.next(); !animationsToPerformNow_1_1.done; animationsToPerformNow_1_1 = animationsToPerformNow_1.next()) {
                                                animation = animationsToPerformNow_1_1.value;
                                                this_1.releaseUnitsFromBeingAnimatedWhereNoLongerNeeded(animation);
                                            }
                                        }
                                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                        finally {
                                            try {
                                                if (animationsToPerformNow_1_1 && !animationsToPerformNow_1_1.done && (_b = animationsToPerformNow_1.return)) _b.call(animationsToPerformNow_1);
                                            }
                                            finally { if (e_5) throw e_5.error; }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 2;
                    case 2:
                        if (!(this.animations.length > 0)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.isAnimating = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.releaseUnitsFromBeingAnimatedWhereNoLongerNeeded = function (animation) {
            var unitIdsInAnimation = _this.getUnitIdsInvolvedInAnimation(animation);
            var unitIdsInRemainingAnimations = _this.getUnitsInvolvedInAnimations();
            var unitIdsToRelease = R.difference(unitIdsInAnimation, unitIdsInRemainingAnimations);
            unitIdsToRelease.forEach(_this.releaseUnitFromBeingAnimated);
        };
        this.manageUnitAsBeingAnimated = function (unitId) {
            var displayObject = _this.unitDisplayObjects.get(unitId);
            if (displayObject) {
                _this.unitDisplayObjects.delete(unitId);
                _this.animatedUnitDisplayObjects.set(unitId, displayObject);
            }
        };
        this.releaseUnitFromBeingAnimated = function (unitId) {
            var displayObject = _this.animatedUnitDisplayObjects.get(unitId);
            if (!displayObject)
                throw "Unexpected missing display object for unit " + unitId;
            _this.animatedUnitDisplayObjects.delete(unitId);
            var unit = _this.worldState.findUnitById(unitId);
            if (unit) {
                displayObject.syncScene(unit);
                _this.unitDisplayObjects.set(unitId, displayObject);
            }
            else {
                displayObject.destroy();
            }
        };
        this.getUnitsInvolvedInAnimations = function () { return R.chain(_this.getUnitIdsInvolvedInAnimation, _this.animations); };
        this.getUnitIdsInvolvedInAnimation = function (animation) {
            switch (animation.type) {
                case 'move':
                    return [animation.unitId];
                case 'combat':
                    return [animation.attacker.unitId, animation.defender.unitId];
            }
        };
        this.runAnimation = function (animation, speed) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = animation.type;
                        switch (_a) {
                            case 'move': return [3 /*break*/, 1];
                            case 'combat': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.runMoveAnimation(animation, speed)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.runCombatAnimation(animation, speed)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5: throw new unreachable_case_error_1.UnreachableCaseError(animation);
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.runMoveAnimation = function (animation, speed) { return __awaiter(_this, void 0, void 0, function () {
            var displayObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        displayObject = this.animatedUnitDisplayObjects.get(animation.unitId);
                        if (!displayObject)
                            throw "Unexpected missing display object for unit " + animation.unitId;
                        this.scene.sound.play(asset_keys_1.AudioKeys.WALK);
                        return [4 /*yield*/, displayObject.runMoveAnimation(animation.from, animation.to, speed)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runCombatAnimation = function (animation, speed) { return __awaiter(_this, void 0, void 0, function () {
            var attacker, defender, attackerDisplayObject, defenderDisplayObject, simultaneousAnimations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attacker = animation.attacker, defender = animation.defender;
                        attackerDisplayObject = this.animatedUnitDisplayObjects.get(attacker.unitId);
                        if (!attackerDisplayObject)
                            throw "Unexpected missing display object for unit " + attacker.unitId;
                        defenderDisplayObject = this.animatedUnitDisplayObjects.get(defender.unitId);
                        if (!defenderDisplayObject)
                            throw "Unexpected missing display object for unit " + defender.unitId;
                        if (animation.attackType === 'melee') {
                            this.scene.sound.play(random_util_1.randomElement([asset_keys_1.AudioKeys.ATTACK_1, asset_keys_1.AudioKeys.ATTACK_2, asset_keys_1.AudioKeys.ATTACK_3]));
                        }
                        else {
                            this.scene.sound.play(asset_keys_1.AudioKeys.SPIT);
                        }
                        if (attacker.killed || defender.killed) {
                            this.scene.sound.play(asset_keys_1.AudioKeys.DEATH);
                        }
                        simultaneousAnimations = [];
                        if (animation.attackType === 'melee') {
                            simultaneousAnimations.push(attackerDisplayObject.runAttackAnimation(attacker.location, defender.location, speed));
                        }
                        else {
                            simultaneousAnimations.push(attackerDisplayObject.runSpitAnimation(attacker.location, defender.location, speed));
                        }
                        if (attacker.killed) {
                            simultaneousAnimations.push(attackerDisplayObject.runDeathAnimation(speed));
                        }
                        if (defender.killed) {
                            simultaneousAnimations.push(defenderDisplayObject.runDeathAnimation(speed));
                        }
                        return [4 /*yield*/, Promise.all(simultaneousAnimations)];
                    case 1:
                        _a.sent();
                        if (attacker.damage > 0) {
                            async_util_1.fireAndForget(function () { return attackerDisplayObject.runDamageAnimation(attacker.location, attacker.damage, speed); });
                        }
                        if (defender.damage > 0) {
                            async_util_1.fireAndForget(function () { return defenderDisplayObject.runDamageAnimation(defender.location, defender.damage, speed); });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.scene = scene;
        this.worldState = worldState;
        this.localGameState = localGameState;
        this.localActionDispatcher = localActionDispatcher;
        this.mapDisplayObject = new map_display_object_1.MapDisplayObject(scene, this.worldState, this.localGameState);
        this.textsDisplayObject = new texts_display_object_1.TextsDisplayObject(scene, this.worldState, this.localGameState, this.localActionDispatcher);
        this.scene.anims.create({
            key: 'llama-walk',
            frames: [
                { key: asset_keys_1.ImageKeys.LLAMA_1 },
                { key: asset_keys_1.ImageKeys.LLAMA_2 },
                { key: asset_keys_1.ImageKeys.LLAMA_3 },
                { key: asset_keys_1.ImageKeys.LLAMA_4 },
            ],
            frameRate: 8,
            repeat: -1,
        });
        this.scene.anims.create({
            key: 'llama-eat',
            frames: [
                { key: asset_keys_1.ImageKeys.LLAMA_EAT_1 },
                { key: asset_keys_1.ImageKeys.LLAMA_EAT_2 },
                { key: asset_keys_1.ImageKeys.LLAMA_EAT_3 },
                { key: asset_keys_1.ImageKeys.LLAMA_EAT_4 },
                { key: asset_keys_1.ImageKeys.LLAMA_EAT_3 },
                { key: asset_keys_1.ImageKeys.LLAMA_EAT_4 },
            ],
            frameRate: 4,
            yoyo: true,
        });
        this.scheduleEatingAnimation();
    }
    return DisplayObjects;
}());
exports.DisplayObjects = DisplayObjects;


/***/ }),

/***/ "./src/scenes/main-game/game-scene.ts":
/*!********************************************!*\
  !*** ./src/scenes/main-game/game-scene.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = exports.hexCenter = exports.DRAWING_OFFSET = exports.HEX_SIZE = exports.GAME_SCENE_KEY = void 0;
var point_1 = __webpack_require__(/*! ../point */ "./src/scenes/point.ts");
var hex_geometry_1 = __webpack_require__(/*! ../hex-geometry */ "./src/scenes/hex-geometry.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var local_game_state_1 = __webpack_require__(/*! ../local-game-state */ "./src/scenes/local-game-state.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var keyboard_mapper_1 = __webpack_require__(/*! ./keyboard-mapper */ "./src/scenes/main-game/keyboard-mapper.ts");
var local_action_processor_1 = __webpack_require__(/*! ./local-action-processor */ "./src/scenes/main-game/local-action-processor.ts");
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var initial_world_state_1 = __webpack_require__(/*! ../../world/initial-world-state */ "./src/world/initial-world-state.ts");
var display_objects_1 = __webpack_require__(/*! ./display-objects */ "./src/scenes/main-game/display-objects.ts");
exports.GAME_SCENE_KEY = 'Game';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.GAME_SCENE_KEY,
};
exports.HEX_SIZE = 48;
exports.DRAWING_OFFSET = { x: 60, y: 100 };
exports.hexCenter = function (hex) { return point_1.addPoints(point_1.multiplyPoint(hex_geometry_1.centerPoint(hex), exports.HEX_SIZE), exports.DRAWING_OFFSET); };
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.created = false;
        _this.worldState = initial_world_state_1.INITIAL_WORLD_STATE;
        _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE;
        // Create
        // ------
        _this.create = function (sceneData) {
            if (_this.created) {
                throw new Error('Game scene has already been created');
            }
            else {
                _this.created = true;
            }
            var serverOrClient = sceneData.serverOrClient;
            _this.setUpSound();
            _this.worldState = serverOrClient.worldState;
            _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE.copy({ playerId: serverOrClient.playerId });
            _this.serverOrClient = serverOrClient;
            serverOrClient.addListener(_this.handleWorldEvent);
            _this.displayObjects = new display_objects_1.DisplayObjects(_this, _this.worldState, _this.localGameState, _this.handleLocalAction);
            _this.updateAsAtStartOfTurn();
            _this.setUpInputs();
        };
        _this.setUpSound = function () {
            _this.sound.pauseOnBlur = false;
            asset_keys_1.ALL_AUDIO_KEYS.forEach(function (key) { return _this.sound.add(key); });
        };
        _this.syncScene = function (animation) { var _a; return (_a = _this.displayObjects) === null || _a === void 0 ? void 0 : _a.syncScene(_this.worldState, _this.localGameState, animation); };
        // Networking
        // ----------
        _this.asyncSendToServer = function (action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.serverOrClient) {
                            throw "Unexpected missing serverOrClient";
                        }
                        return [4 /*yield*/, this.serverOrClient.sendAction(this.playerId, action)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        // Input handlers
        // --------------
        _this.setUpInputs = function () {
            _this.input.mouse.disableContextMenu();
            _this.input.keyboard.on('keydown', _this.handleKey);
            _this.input.on('pointerdown', _this.handlePointerDown);
            _this.input.on('pointermove', _this.handlePointerMove);
        };
        _this.handleKey = function (event) {
            var localAction = keyboard_mapper_1.mapToLocalAction(event, _this.localGameState.mode);
            if (localAction) {
                _this.handleLocalAction(localAction);
            }
        };
        _this.handleLocalAction = function (localAction) {
            var localActionProcessor = new local_action_processor_1.LocalActionProcessor(_this.worldState, _this.localGameState);
            var result = localActionProcessor.process(localAction);
            if (result) {
                _this.enactLocalActionResult(result);
            }
        };
        _this.enactLocalActionResult = function (result) {
            if (result.newLocalGameState) {
                _this.localGameState = result.newLocalGameState;
                _this.syncScene();
            }
            if (result.worldAction) {
                _this.localGameState = _this.localGameState.incrementActionsOutstandingWithServer();
                _this.syncScene();
                _this.asyncSendToServer(result.worldAction).finally(function () {
                    _this.localGameState = _this.localGameState.decrementActionsOutstandingWithServer();
                    _this.syncScene();
                });
            }
        };
        _this.handlePointerMove = function (pointer) {
            var _a;
            var pointerPoint = { x: pointer.x, y: pointer.y };
            (_a = _this.displayObjects) === null || _a === void 0 ? void 0 : _a.handlePointerMove(pointerPoint);
        };
        _this.handlePointerDown = function (pointer) {
            var _a;
            // Ignore clicks on these as they have their own handlers
            var pressedPoint = { x: pointer.x, y: pointer.y };
            if ((_a = _this.displayObjects) === null || _a === void 0 ? void 0 : _a.hasClickHandlerFor(pressedPoint)) {
                return;
            }
            var hex = hex_geometry_1.fromPoint(point_1.multiplyPoint(point_1.subtractPoints(pressedPoint, exports.DRAWING_OFFSET), 1 / exports.HEX_SIZE));
            if (pointer.button === 2) {
                _this.handleLocalAction({ type: 'goHex', hex: hex });
            }
            else {
                _this.handleLeftClick(hex);
            }
        };
        _this.getLocalActionForClickingAHex = function (hex) {
            var mode = _this.localGameState.mode;
            switch (mode.type) {
                case 'selectHex':
                    return { type: 'selectHex', hex: hex };
                case 'moveUnit':
                    return { type: 'completeMove', unitId: mode.unitId, hex: hex };
                case 'attack':
                    return { type: 'completeAttack', unitId: mode.unitId, hex: hex, attackType: mode.attackType };
            }
        };
        _this.handleLeftClick = function (hex) { return _this.handleLocalAction(_this.getLocalActionForClickingAHex(hex)); };
        // Handle world events
        // -------------------
        _this.handleWorldEvent = function (event, previousWorldState, newWorldState) {
            _this.worldState = newWorldState;
            switch (event.type) {
                case 'initialise':
                case 'playerAdded':
                case 'playerChangedName':
                case 'gameStarted':
                case 'chat':
                case 'playerKicked':
                    _this.syncScene();
                    break;
                case 'unitMoved':
                    _this.handleUnitMovedWorldEvent(event, previousWorldState);
                    break;
                case 'combat':
                    _this.handleCombatWorldEvent(event, previousWorldState);
                    break;
                case 'playerEndedTurn':
                    _this.handlePlayerEndedTurn();
                    break;
                case 'playerDefeated':
                    _this.handlePlayerDefeated();
                    break;
                case 'gameOver':
                    _this.handleGameOver(event);
                    break;
                case 'newTurn':
                    _this.handleNewTurn();
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(event);
            }
        };
        _this.handleGameOver = function (event) {
            if (event.victor === _this.localGameState.playerId) {
                _this.sound.play(asset_keys_1.AudioKeys.VICTORY_MUSIC);
            }
            _this.syncScene();
        };
        _this.handlePlayerEndedTurn = function () {
            _this.syncScene();
        };
        _this.handlePlayerDefeated = function () {
            _this.sound.play(asset_keys_1.AudioKeys.PLAYER_DEFEATED);
            _this.syncScene();
        };
        _this.handleNewTurn = function () {
            _this.sound.play(asset_keys_1.AudioKeys.NEW_TURN);
            _this.updateAsAtStartOfTurn();
        };
        _this.handleUnitMovedWorldEvent = function (event, previousWorldState) {
            var _a;
            var unitId = event.unitId, from = event.from, to = event.to;
            var unit = _this.worldState.getUnitById(unitId);
            var wasPreviouslySelected = _this.localGameState.selectedHex &&
                ((_a = previousWorldState.findUnitInLocation(_this.localGameState.selectedHex)) === null || _a === void 0 ? void 0 : _a.id) === unitId;
            if (wasPreviouslySelected && unit.playerId === _this.playerId) {
                var newSelectedHex = _this.calculateNewSelectedUnitAfterMoveOrAttack(unitId, to);
                _this.localGameState = _this.localGameState.copy({ mode: { type: 'selectHex' } }).setSelectedHex(newSelectedHex);
            }
            _this.syncScene({ type: 'move', unitId: unitId, from: from, to: to });
        };
        _this.calculateNewSelectedUnitAfterMoveOrAttack = function (unitId, defaultLocation) {
            var unit = _this.worldState.findUnitById(unitId);
            // Retain selection if unit still exists and we still have action points, else select next unit (or nothing if there isn't one)
            var newSelectedHex;
            if (!unit || unit.actionPoints.current === 0) {
                var nextUnit = _this.combinedState.findNextUnitWithUnspentActionPoints(unitId);
                newSelectedHex = nextUnit === null || nextUnit === void 0 ? void 0 : nextUnit.location;
            }
            else {
                newSelectedHex = defaultLocation;
            }
            return newSelectedHex;
        };
        _this.handleCombatWorldEvent = function (event, previousWorldState) {
            var attacker = event.attacker, defender = event.defender;
            _this.updateSelectionAfterCombat(attacker, defender, previousWorldState);
            _this.syncScene({
                type: 'combat',
                attackType: event.attackType,
                attacker: attacker,
                defender: defender,
            });
        };
        _this.updateSelectionAfterCombat = function (attacker, defender, previousWorldState) {
            var _a;
            var previouslySelectedUnitId = (_a = new combined_state_methods_1.CombinedState(previousWorldState, _this.localGameState).findSelectedUnit()) === null || _a === void 0 ? void 0 : _a.id;
            if (previouslySelectedUnitId === attacker.unitId && attacker.playerId === _this.playerId) {
                var newSelectedHex = _this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location);
                _this.localGameState = _this.localGameState.copy({ mode: { type: 'selectHex' } }).setSelectedHex(newSelectedHex);
            }
            else {
                // deselect unit killed by another player
                if (defender.killed && defender.unitId === previouslySelectedUnitId && defender.playerId === _this.playerId) {
                    _this.localGameState = _this.localGameState.copy({ mode: { type: 'selectHex' } }).deselect();
                }
            }
        };
        return _this;
    }
    Object.defineProperty(GameScene.prototype, "combinedState", {
        get: function () {
            return new combined_state_methods_1.CombinedState(this.worldState, this.localGameState);
        },
        enumerable: false,
        configurable: true
    });
    GameScene.prototype.updateAsAtStartOfTurn = function () {
        var unitToSelect = this.combinedState.findNextUnitWithUnspentActionPoints();
        this.localGameState = this.localGameState
            .copy({ mode: { type: 'selectHex' } })
            .setSelectedHex(unitToSelect === null || unitToSelect === void 0 ? void 0 : unitToSelect.location);
        this.syncScene();
    };
    Object.defineProperty(GameScene.prototype, "playerId", {
        // Util queries
        // ------------
        get: function () {
            return this.localGameState.playerId;
        },
        enumerable: false,
        configurable: true
    });
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/main-game/keyboard-mapper.ts":
/*!*************************************************!*\
  !*** ./src/scenes/main-game/keyboard-mapper.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToLocalAction = void 0;
var hex_direction_1 = __webpack_require__(/*! ../../world/hex-direction */ "./src/world/hex-direction.ts");
exports.mapToLocalAction = function (event, mode) {
    switch (event.key) {
        case 'ArrowLeft':
        case '4':
            return { type: 'go', direction: hex_direction_1.HexDirection.WEST };
        case 'ArrowRight':
        case '6':
            return { type: 'go', direction: hex_direction_1.HexDirection.EAST };
        case '7':
            return { type: 'go', direction: hex_direction_1.HexDirection.NORTH_WEST };
        case '3':
            return { type: 'go', direction: hex_direction_1.HexDirection.SOUTH_EAST };
        case '9':
            return { type: 'go', direction: hex_direction_1.HexDirection.NORTH_EAST };
        case '1':
            return { type: 'go', direction: hex_direction_1.HexDirection.SOUTH_WEST };
        case 'Escape':
            return { type: 'abort' };
        case 'Enter':
            if (event.shiftKey)
                return { type: 'endTurn' };
            break;
        case 'n':
            if (event.ctrlKey)
                return { type: 'selectNextUnit' };
            break;
        case 'm':
            if (mode.type === 'selectHex')
                return { type: 'enterMoveMode' };
            break;
        case 'a':
            if (mode.type === 'selectHex')
                return { type: 'enterAttackMode', attackType: 'melee' };
            break;
        case 's':
            if (mode.type === 'selectHex')
                return { type: 'enterAttackMode', attackType: 'spit' };
            break;
    }
};


/***/ }),

/***/ "./src/scenes/main-game/local-action-processor.ts":
/*!********************************************************!*\
  !*** ./src/scenes/main-game/local-action-processor.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalActionProcessor = void 0;
var unreachable_case_error_1 = __webpack_require__(/*! ../../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var LocalActionProcessor = /** @class */ (function () {
    function LocalActionProcessor(worldState, localGameState) {
        var _this = this;
        this.process = function (action) {
            switch (action.type) {
                case 'go':
                    return _this.handleGo(action.direction);
                case 'goHex':
                    return _this.handleGoHex(action.hex);
                case 'selectNextUnit':
                    return _this.handleSelectNextUnit();
                case 'abort':
                    return _this.handleAbort();
                case 'endTurn':
                    return _this.handleEndTurn();
                case 'enterMoveMode':
                    return _this.handleEnterMoveMode();
                case 'enterAttackMode':
                    return _this.handleEnterAttackMode(action.attackType);
                case 'completeMove':
                    return _this.handleCompleteMove(action.unitId, action.hex);
                case 'completeAttack':
                    return _this.handleCompleteAttack(action.unitId, action.hex, action.attackType);
                case 'selectHex':
                    return _this.handleSelectHex(action.hex);
                case 'changeSidebar':
                    return _this.handleChangeSidebar(action.sidebar);
                case 'chat':
                    return _this.handleChat(action.message);
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(action);
            }
        };
        this.handleSelectNextUnit = function () {
            var selectedUnit = _this.combinedState.findSelectedUnit();
            var unitToSelect = _this.combinedState.findNextUnitWithUnspentActionPoints(selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.id);
            if (unitToSelect) {
                var newLocalGameState = _this.localGameState
                    .setSelectedHex(unitToSelect === null || unitToSelect === void 0 ? void 0 : unitToSelect.location)
                    .setMode({ type: 'selectHex' });
                return { newLocalGameState: newLocalGameState };
            }
            else {
                return undefined;
            }
        };
        this.handleAbort = function () {
            switch (_this.localGameState.mode.type) {
                case 'selectHex':
                    return { newLocalGameState: _this.localGameState.deselect() };
                case 'attack':
                case 'moveUnit':
                    return { newLocalGameState: _this.localGameState.setMode({ type: 'selectHex' }) };
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(_this.localGameState.mode);
            }
        };
        this.handleGo = function (direction) {
            var selectedHex = _this.localGameState.selectedHex;
            if (selectedHex)
                return _this.moveOrAttackHex(selectedHex.go(direction));
        };
        this.handleGoHex = function (hex) { return _this.moveOrAttackHex(hex); };
        this.moveOrAttackHex = function (hex) {
            var selectedUnit = _this.combinedState.findSelectedUnit();
            if (selectedUnit) {
                if (_this.combinedState.unitCanMoveToHex(selectedUnit, hex)) {
                    return _this.moveToHex(selectedUnit, hex);
                }
                var targetUnit = _this.combinedState.unitCanAttackHex(selectedUnit, hex, 'melee');
                if (targetUnit) {
                    return _this.attackHex('melee', selectedUnit, targetUnit);
                }
            }
        };
        this.attackHex = function (attackType, attacker, defender) { return ({
            worldAction: {
                type: 'attack',
                attackType: attackType,
                attacker: { unitId: attacker.id, location: attacker.location },
                defender: { unitId: defender.id, location: defender.location },
            },
        }); };
        this.moveToHex = function (unit, destination) { return ({
            worldAction: {
                type: 'moveUnit',
                unitId: unit.id,
                to: destination,
            },
        }); };
        this.handleEndTurn = function () {
            if (!_this.combinedState.getCurrentPlayer().endedTurn) {
                return { worldAction: { type: 'endTurn', turn: _this.worldState.turn } };
            }
        };
        this.handleEnterMoveMode = function () {
            var unit = _this.combinedState.findSelectedUnit();
            if (unit && _this.combinedState.unitCouldPotentiallyMove(unit)) {
                var newMode = { type: 'moveUnit', from: unit.location, unitId: unit.id };
                return { newLocalGameState: _this.localGameState.setMode(newMode) };
            }
        };
        this.handleEnterAttackMode = function (attackType) {
            var unit = _this.combinedState.findSelectedUnit();
            if (unit && _this.combinedState.unitCouldPotentiallyAttack(unit)) {
                var newMode = { type: 'attack', from: unit.location, unitId: unit.id, attackType: attackType };
                var newLocalGameState = _this.localGameState.setMode(newMode);
                return { newLocalGameState: newLocalGameState };
            }
        };
        this.handleCompleteMove = function (unitId, destination) {
            var unit = _this.worldState.getUnitById(unitId);
            if (_this.combinedState.unitCanMoveToHex(unit, destination))
                return _this.moveToHex(unit, destination);
        };
        this.handleCompleteAttack = function (unitId, targetHex, attackType) {
            var attacker = _this.worldState.getUnitById(unitId);
            var defender = _this.combinedState.unitCanAttackHex(attacker, targetHex, attackType);
            if (defender) {
                return _this.attackHex(attackType, attacker, defender);
            }
            else {
                return _this.handleAbort();
            }
        };
        this.handleSelectHex = function (hex) {
            var selectedHex = _this.localGameState.selectedHex;
            if (!_this.worldState.map.isInBounds(hex)) {
                // If click is out of bounds, deselect any selected hex
                if (selectedHex) {
                    return { newLocalGameState: _this.localGameState.deselect() };
                }
            }
            else if (selectedHex && selectedHex.equals(hex)) {
                // if selected hex is clicked, toggle selection off
                return { newLocalGameState: _this.localGameState.deselect() };
            }
            else {
                return { newLocalGameState: _this.localGameState.setSelectedHex(hex) };
            }
        };
        this.handleChangeSidebar = function (sidebar) { return ({
            newLocalGameState: _this.localGameState.copy({ sidebar: sidebar }),
        }); };
        this.handleChat = function (message) { return ({ worldAction: { type: 'chat', message: message } }); };
        this.worldState = worldState;
        this.localGameState = localGameState;
    }
    Object.defineProperty(LocalActionProcessor.prototype, "combinedState", {
        get: function () {
            return new combined_state_methods_1.CombinedState(this.worldState, this.localGameState);
        },
        enumerable: false,
        configurable: true
    });
    return LocalActionProcessor;
}());
exports.LocalActionProcessor = LocalActionProcessor;


/***/ }),

/***/ "./src/scenes/main-game/map-display-object.ts":
/*!****************************************************!*\
  !*** ./src/scenes/main-game/map-display-object.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapDisplayObject = void 0;
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/main-game/game-scene.ts");
var point_1 = __webpack_require__(/*! ../point */ "./src/scenes/point.ts");
var hex_geometry_1 = __webpack_require__(/*! ../hex-geometry */ "./src/scenes/hex-geometry.ts");
var colours_1 = __webpack_require__(/*! ../colours */ "./src/scenes/colours.ts");
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var MapDisplayObject = /** @class */ (function () {
    function MapDisplayObject(scene, worldState, localGameState) {
        var e_1, _a;
        var _this = this;
        this.hexPolygons = new Map();
        this.createHex = function (hex) {
            var polygonCenter = game_scene_1.hexCenter(hex);
            _this.scene.add.image(polygonCenter.x, polygonCenter.y, 'grass').setScale(0.65).setDepth(-5);
            if (_this.worldState.map.isMountain(hex)) {
                _this.scene.add.image(polygonCenter.x, polygonCenter.y, 'mountain').setDepth(-5);
            }
            var polygon = _this.addPolygon(polygonCenter, game_scene_1.HEX_SIZE);
            _this.hexPolygons.set(hex.toString(), polygon);
        };
        this.syncScene = function (worldState, localGameState) {
            var e_2, _a;
            _this.worldState = worldState;
            _this.localGameState = localGameState;
            try {
                for (var _b = __values(_this.worldState.map.getMapHexes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var hex = _c.value;
                    _this.syncTile(hex);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        // Depths
        // -5 - image
        // -4 - default border
        // -3 - targetable border
        // -2 - selected
        // -1 - hover
        this.getDepth = function (tileState) {
            switch (tileState) {
                case 'default':
                    return -4;
                case 'targetable':
                    return -3;
                case 'selected':
                    return -2;
            }
        };
        this.syncTile = function (hex) {
            var tileState = _this.calculateTileState(hex);
            _this.getHexPolygon(hex).setStrokeStyle(3, _this.getHexBorderColour(tileState)).setDepth(_this.getDepth(tileState));
        };
        this.getHexPolygon = function (hex) {
            var polygon = _this.hexPolygons.get(hex.toString());
            if (!polygon)
                throw "No polygon found for " + hex;
            return polygon;
        };
        this.calculateTileState = function (hex) {
            var _a = _this.localGameState, selectedHex = _a.selectedHex, mode = _a.mode;
            if (selectedHex && selectedHex.equals(hex)) {
                return 'selected';
            }
            if (mode.type === 'moveUnit') {
                var unit = _this.worldState.getUnitById(mode.unitId);
                if (selectedHex && _this.combinedState.unitCanMoveToHex(unit, hex)) {
                    return 'targetable';
                }
            }
            if (mode.type === 'attack') {
                var unit = _this.worldState.getUnitById(mode.unitId);
                if (selectedHex && _this.combinedState.unitCanAttackHex(unit, hex, mode.attackType)) {
                    return 'targetable';
                }
            }
            return 'default';
        };
        this.getHexBorderColour = function (tileState) {
            switch (tileState) {
                case 'default':
                    return colours_1.DEFAULT_TILE_BORDER_COLOUR;
                case 'selected':
                    return colours_1.SELECTED_TILE_BORDER_COLOUR;
                case 'targetable':
                    return colours_1.TARGETABLE_TILE_BORDER_COLOUR;
            }
        };
        this.getHoverHexBorderColour = function (tileState) {
            switch (tileState) {
                case 'default':
                    return colours_1.HOVER_TILE_COLOUR;
                case 'selected':
                    return colours_1.SELECTED_TILE_BORDER_COLOUR;
                case 'targetable':
                    return colours_1.TARGETABLE_TILE_BORDER_COLOUR;
            }
        };
        this.scene = scene;
        this.worldState = worldState;
        this.localGameState = localGameState;
        try {
            for (var _b = __values(this.worldState.map.getMapHexes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var hex = _c.value;
                this.createHex(hex);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(MapDisplayObject.prototype, "combinedState", {
        get: function () {
            return new combined_state_methods_1.CombinedState(this.worldState, this.localGameState);
        },
        enumerable: false,
        configurable: true
    });
    MapDisplayObject.prototype.addPolygon = function (center, size) {
        var vertices = __spread(hex_geometry_1.hexCorners(point_1.point(0, 0), size));
        return this.scene.add.polygon(center.x, center.y, vertices).setOrigin(0, 0).setFillStyle(0x00000, 0);
    };
    MapDisplayObject.prototype.handlePointerMove = function (pointerPoint) {
        var hex = hex_geometry_1.fromPoint(point_1.multiplyPoint(point_1.subtractPoints(pointerPoint, game_scene_1.DRAWING_OFFSET), 1 / game_scene_1.HEX_SIZE));
        if (this.previousHoverHex && this.previousHoverHex.equals(hex))
            return;
        if (this.previousHoverHex) {
            this.syncTile(this.previousHoverHex);
            this.previousHoverHex = undefined;
        }
        if (this.worldState.map.isInBounds(hex)) {
            var tileState = this.calculateTileState(hex);
            this.getHexPolygon(hex)
                .setStrokeStyle(tileState === 'default' ? 2 : 4, this.getHoverHexBorderColour(tileState))
                .setDepth(-1);
            this.previousHoverHex = hex;
        }
    };
    return MapDisplayObject;
}());
exports.MapDisplayObject = MapDisplayObject;


/***/ }),

/***/ "./src/scenes/main-game/texts-display-object.ts":
/*!******************************************************!*\
  !*** ./src/scenes/main-game/texts-display-object.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextsDisplayObject = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var hex_geometry_1 = __webpack_require__(/*! ../hex-geometry */ "./src/scenes/hex-geometry.ts");
var colours_1 = __webpack_require__(/*! ../colours */ "./src/scenes/colours.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/main-game/game-scene.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var point_1 = __webpack_require__(/*! ../point */ "./src/scenes/point.ts");
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var player_1 = __webpack_require__(/*! ../../world/player */ "./src/world/player.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var ui_border_display_object_1 = __webpack_require__(/*! ./ui-border-display-object */ "./src/scenes/main-game/ui-border-display-object.ts");
var primary_button_1 = __webpack_require__(/*! ../../ui/primary-button */ "./src/ui/primary-button.ts");
var TextsDisplayObject = /** @class */ (function () {
    function TextsDisplayObject(scene, worldState, localGameState, localActionDispatcher) {
        var e_1, _a;
        var _this = this;
        this.playerObjects = new Map();
        this.handleActionTextClick = function () {
            var mode = _this.localGameState.mode;
            switch (mode.type) {
                case 'selectHex':
                    _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
                    _this.localActionDispatcher({ type: 'enterMoveMode' });
                    break;
                case 'moveUnit':
                case 'attack':
                    _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
                    _this.localActionDispatcher({ type: 'abort' });
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(mode);
            }
        };
        this.handleActionText2Click = function () {
            if (_this.localGameState.mode.type === 'selectHex') {
                _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
                _this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'melee' });
            }
        };
        this.handleActionText3Click = function () {
            if (_this.localGameState.mode.type === 'selectHex') {
                _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
                _this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'spit' });
            }
        };
        this.hasClickHandlerFor = function (point) {
            var e_2, _a;
            try {
                for (var _b = __values([_this.endTurnText, _this.actionText, _this.actionText2, _this.actionText3]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var gameObject = _c.value;
                    if (gameObject.getBounds().contains(point.x, point.y))
                        return true;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return false;
        };
        this.syncScene = function (worldState, localGameState) {
            var e_3, _a;
            var _b;
            _this.worldState = worldState;
            _this.localGameState = localGameState;
            var player = _this.combinedState.getCurrentPlayer();
            _this.hourglass.setVisible(localGameState.actionsOutstandingWithServer > 0);
            _this.playerText.setText(player.name + " - Turn " + _this.worldState.turn);
            _this.selectionText.setText('');
            _this.actionText.setText('');
            _this.actionText2.setText('');
            _this.actionText3.setText('');
            var mode = _this.localGameState.mode;
            switch (mode.type) {
                case 'selectHex':
                    _this.syncSelectHexModeText();
                    break;
                case 'moveUnit':
                    _this.syncMoveUnitModeText(mode.unitId);
                    break;
                case 'attack':
                    _this.syncAttackModeText(mode.unitId, mode.attackType);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(mode);
            }
            var canAct = worldState.canPlayerAct(player.id);
            if (canAct) {
                _this.endTurnText.setText('End Turn');
            }
            else {
                _this.endTurnText.setText('Waiting for next turn...');
            }
            _this.endTurnButton.setVisible(canAct);
            _this.defeatText.setVisible(player.defeated);
            _this.victoryText.setVisible(((_b = worldState.gameOverInfo) === null || _b === void 0 ? void 0 : _b.victor) === player.id);
            _this.worldLogText.setText(R.takeLast(20, _this.worldState.worldLog).join('\n'));
            _this.worldLogText.setVisible(localGameState.sidebar === 'log');
            var y = 65;
            try {
                for (var _c = __values(worldState.getSortedPlayers()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var player_2 = _d.value;
                    if (player_2.id === player_1.HOST_PLAYER_ID) {
                        _this.hostCrown.setY(y + 5);
                    }
                    var _e = _this.getPlayerObjects(player_2.id), nameText = _e.nameText, llama = _e.llama;
                    nameText
                        .setText(player_2.name)
                        .setY(y)
                        .setVisible(localGameState.sidebar === 'players');
                    llama
                        .setY(y + 10)
                        .setVisible(localGameState.sidebar === 'players')
                        .setFlipX(!_this.worldState.canPlayerAct(player_2.id));
                    y += 50;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
            _this.hostCrown.setVisible(localGameState.sidebar === 'players');
        };
        this.syncAttackModeText = function (unitId, attackType) {
            var unit = _this.worldState.getUnitById(unitId);
            _this.selectionText.setText(_this.describeUnit(unit));
            _this.actionText.setText("Click unit to " + (attackType === 'melee' ? 'attack' : 'spit') + " (or ESC to cancel)");
        };
        this.syncMoveUnitModeText = function (unitId) {
            var unit = _this.worldState.getUnitById(unitId);
            _this.selectionText.setText(_this.describeUnit(unit));
            _this.actionText.setText('Click tile to move to (or ESC to cancel)');
        };
        this.syncSelectHexModeText = function () {
            var selectedUnit = _this.combinedState.findSelectedUnit();
            if (selectedUnit) {
                _this.selectionText.setText(_this.describeUnit(selectedUnit));
                if (_this.combinedState.unitCouldPotentiallyMove(selectedUnit))
                    _this.actionText.setText('Move (m)');
                if (_this.combinedState.unitCouldPotentiallyAttack(selectedUnit))
                    _this.actionText2.setText('Attack (a)');
                if (_this.combinedState.unitCouldPotentiallyAttack(selectedUnit))
                    _this.actionText3.setText('Spit (s)');
            }
        };
        this.getPlayerName = function (playerId) { return _this.worldState.getPlayer(playerId).name; };
        this.describeUnit = function (unit) {
            var name = unit.name, playerId = unit.playerId, hitPoints = unit.hitPoints, actionPoints = unit.actionPoints;
            var playerName = _this.getPlayerName(playerId);
            return name + " - Llama warrior - " + playerName + " - HP " + hitPoints.current + "/" + hitPoints.max + " - actions " + actionPoints.current + "/" + actionPoints.max;
        };
        this.getPlayerObjects = function (playerId) {
            var playerObjects = _this.playerObjects.get(playerId);
            if (!playerObjects) {
                throw new Error("No player objects found for " + playerId);
            }
            return playerObjects;
        };
        this.scene = scene;
        this.worldState = worldState;
        this.localGameState = localGameState;
        this.localActionDispatcher = localActionDispatcher;
        var map = this.worldState.map;
        this.scene.add.image(40, 28, asset_keys_1.ImageKeys.LLAMA_2).setScale(0.6).setTint(colours_1.getPlayerTint(localGameState.playerId));
        this.playerText = this.scene.add.text(70, 20, '');
        this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false);
        this.selectionText = this.scene.add.text(game_scene_1.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(game_scene_1.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y, '');
        this.actionText = this.scene.add
            .text(game_scene_1.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(game_scene_1.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 25, '', {
            fill: colours_1.ACTION_TEXT_COLOUR,
        })
            .setInteractive()
            .on('pointerdown', this.handleActionTextClick)
            .on('pointerover', function () { return _this.actionText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.actionText.setFill(colours_1.ACTION_TEXT_COLOUR); });
        this.actionText2 = this.scene.add
            .text(game_scene_1.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(game_scene_1.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 50, '', {
            fill: colours_1.ACTION_TEXT_COLOUR,
        })
            .setInteractive()
            .on('pointerdown', this.handleActionText2Click)
            .on('pointerover', function () { return _this.actionText2.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.actionText2.setFill(colours_1.ACTION_TEXT_COLOUR); });
        this.actionText3 = this.scene.add
            .text(game_scene_1.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(game_scene_1.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 75, '', {
            fill: colours_1.ACTION_TEXT_COLOUR,
        })
            .setInteractive()
            .on('pointerdown', this.handleActionText3Click)
            .on('pointerover', function () { return _this.actionText3.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.actionText3.setFill(colours_1.ACTION_TEXT_COLOUR); });
        this.endTurnText = this.scene.add
            .text(790 + 520, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 68 + 72, '', {
            fill: '#ffffff',
        })
            .setOrigin(0.5)
            .setShadow(2, 2, '#000000');
        this.endTurnButton = new primary_button_1.PrimaryButton(this.scene, 650 + 520, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 44 + 72, 'End Turn', function () { return _this.localActionDispatcher({ type: 'endTurn' }); });
        this.selectWorldLogText = this.scene.add
            .text(960, 26, 'Log', { fill: colours_1.ACTION_TEXT_COLOUR })
            .setInteractive()
            .on('pointerdown', function () { return _this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'log' }); })
            .on('pointerover', function () { return _this.selectWorldLogText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.selectWorldLogText.setFill(colours_1.ACTION_TEXT_COLOUR); });
        this.selectPlayersText = this.scene.add
            .text(1024, 26, 'Players', { fill: colours_1.ACTION_TEXT_COLOUR })
            .setInteractive()
            .on('pointerdown', function () { return _this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'players' }); })
            .on('pointerover', function () { return _this.selectPlayersText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.selectPlayersText.setFill(colours_1.ACTION_TEXT_COLOUR); });
        this.defeatText = this.scene.add
            .text(462, (hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y) / 2, 'You have been defeated!', {
            stroke: '#000000',
            strokeThickness: 4,
        })
            .setOrigin(0.5)
            .setFontSize(42)
            .setVisible(false)
            .setDepth(100);
        this.victoryText = this.scene.add
            .text(462, 30, 'Victory!', {
            stroke: '#000000',
            strokeThickness: 4,
        })
            .setOrigin(0.5)
            .setFontSize(42)
            .setVisible(false)
            .setDepth(100);
        this.worldLogText = this.scene.add.text(960, 50, '').setWordWrapWidth(470).setFontSize(14);
        this.chatText = this.scene.add
            .text(960, 600, 'Chat...', {
            fill: '#FFFFFF',
            fixedWidth: 478,
            backgroundColor: '#333333',
        })
            .setFontSize(18)
            .setPadding(0, 0, 0, 0)
            .setInteractive()
            .on('pointerdown', function () {
            _this.chatText.setText('');
            var plugin = _this.scene.plugins.get('rexTextEdit');
            plugin.edit(_this.chatText, {
                onClose: function () {
                    _this.localActionDispatcher({ type: 'chat', message: _this.chatText.text });
                    _this.chatText.setText('Chat...');
                },
            });
        });
        this.hostCrown = this.scene.add.image(1235, 0, 'crown').setScale(0.6);
        try {
            for (var _b = __values(worldState.getSortedPlayers()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var player = _c.value;
                var nameText = this.scene.add
                    .text(1005, 0, player.name, {
                    fill: '#FFFFFF',
                    fixedWidth: 200,
                    fontStyle: player.id === this.localGameState.playerId ? 'bold' : 'normal',
                })
                    .setFontSize(18)
                    .setPadding(0, 0, 0, 0);
                var llama = this.scene.add.sprite(975, 0, asset_keys_1.ImageKeys.LLAMA_EAT_1).setScale(0.6).setTint(colours_1.getPlayerTint(player.id));
                var playerObjects = { nameText: nameText, llama: llama };
                this.playerObjects.set(player.id, playerObjects);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        new ui_border_display_object_1.UiBorderDisplayObject(scene, { topLeft: point_1.point(950, 20), width: 500, height: 620 });
        new ui_border_display_object_1.UiBorderDisplayObject(scene, { topLeft: point_1.point(10, 520), width: 930, height: 120 });
    }
    Object.defineProperty(TextsDisplayObject.prototype, "combinedState", {
        get: function () {
            return new combined_state_methods_1.CombinedState(this.worldState, this.localGameState);
        },
        enumerable: false,
        configurable: true
    });
    return TextsDisplayObject;
}());
exports.TextsDisplayObject = TextsDisplayObject;


/***/ }),

/***/ "./src/scenes/main-game/ui-border-display-object.ts":
/*!**********************************************************!*\
  !*** ./src/scenes/main-game/ui-border-display-object.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UiBorderDisplayObject = void 0;
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var HORIZONTAL_IMAGE_WIDTH = 74;
var VERTICAL_IMAGE_HEIGHT = 59;
var CORNER_WIDTH = 15;
var CORNER_HEIGHT = 15;
var THICKNESS = 4;
var UiBorderDisplayObject = /** @class */ (function () {
    function UiBorderDisplayObject(scene, _a) {
        var topLeft = _a.topLeft, width = _a.width, height = _a.height;
        this.images = [];
        this.scene = scene;
        this.topLeft = topLeft;
        this.width = width;
        this.height = height;
        this.createCorners();
        this.createVerticalSections();
        this.createHorizontalSections();
    }
    UiBorderDisplayObject.prototype.createHorizontalSections = function () {
        var horizontalWidth = this.width - 2 * CORNER_WIDTH;
        var wholeCopies = Math.floor(horizontalWidth / HORIZONTAL_IMAGE_WIDTH);
        var excessWidth = horizontalWidth % HORIZONTAL_IMAGE_WIDTH;
        for (var i = 0; i <= wholeCopies; i++) {
            var x = this.topLeft.x + CORNER_WIDTH + i * HORIZONTAL_IMAGE_WIDTH;
            var yTop = this.topLeft.y;
            var yBottom = this.topLeft.y + this.height - THICKNESS;
            var topHorizontalImage = this.scene.add.image(x, yTop, asset_keys_1.ImageKeys.BORDER_HORIZONTAL).setOrigin(0, 0);
            var bottomHorizontalImage = this.scene.add.image(x, yBottom, asset_keys_1.ImageKeys.BORDER_HORIZONTAL).setOrigin(0, 0);
            if (i === wholeCopies) {
                topHorizontalImage.setCrop(0, 0, excessWidth, 5);
                bottomHorizontalImage.setCrop(0, 0, excessWidth, 5);
            }
            this.images.push(bottomHorizontalImage, topHorizontalImage);
        }
    };
    UiBorderDisplayObject.prototype.createVerticalSections = function () {
        var verticalHeight = this.height - 2 * CORNER_HEIGHT;
        var wholeCopies = Math.floor(verticalHeight / VERTICAL_IMAGE_HEIGHT);
        var excessHeight = verticalHeight % VERTICAL_IMAGE_HEIGHT;
        for (var i = 0; i <= wholeCopies; i++) {
            var y = this.topLeft.y + CORNER_WIDTH + i * VERTICAL_IMAGE_HEIGHT;
            var xLeft = this.topLeft.x;
            var xRight = this.topLeft.x + this.width - THICKNESS;
            var leftVerticalImage = this.scene.add.image(xLeft, y, asset_keys_1.ImageKeys.BORDER_VERTICAL).setOrigin(0, 0);
            var rightVerticalImage = this.scene.add.image(xRight, y, asset_keys_1.ImageKeys.BORDER_VERTICAL).setOrigin(0, 0);
            if (i === wholeCopies) {
                leftVerticalImage.setCrop(0, 0, 5, excessHeight);
                rightVerticalImage.setCrop(0, 0, 5, excessHeight);
            }
            this.images.push(leftVerticalImage, rightVerticalImage);
        }
    };
    UiBorderDisplayObject.prototype.createCorners = function () {
        var _a = this.topLeft, x = _a.x, y = _a.y;
        var x2 = x + this.width - CORNER_WIDTH;
        var y2 = y + this.height - CORNER_HEIGHT;
        var topLeftImage = this.scene.add.image(x, y, asset_keys_1.ImageKeys.BORDER_TOP_LEFT).setOrigin(0, 0);
        var topRightImage = this.scene.add.image(x2, y, asset_keys_1.ImageKeys.BORDER_TOP_RIGHT).setOrigin(0, 0);
        var bottomLeftImage = this.scene.add.image(x, y2, asset_keys_1.ImageKeys.BORDER_BOTTOM_LEFT).setOrigin(0, 0);
        var bottomRightImage = this.scene.add.image(x2, y2, asset_keys_1.ImageKeys.BORDER_BOTTOM_RIGHT).setOrigin(0, 0);
        this.images.push(topLeftImage, topRightImage, bottomLeftImage, bottomRightImage);
    };
    return UiBorderDisplayObject;
}());
exports.UiBorderDisplayObject = UiBorderDisplayObject;


/***/ }),

/***/ "./src/scenes/main-game/unit-display-object.ts":
/*!*****************************************************!*\
  !*** ./src/scenes/main-game/unit-display-object.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitDisplayObject = void 0;
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/main-game/game-scene.ts");
var colours_1 = __webpack_require__(/*! ../colours */ "./src/scenes/colours.ts");
var point_1 = __webpack_require__(/*! ../point */ "./src/scenes/point.ts");
var tween_utils_1 = __webpack_require__(/*! ../../util/phaser/tween-utils */ "./src/util/phaser/tween-utils.ts");
var random_util_1 = __webpack_require__(/*! ../../util/random-util */ "./src/util/random-util.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var HEALTH_BAR_WIDTH = 50;
var HEALTH_BAR_HEIGHT = 12;
var HEALTH_BAR_BORDER_THICKNESS = 2;
var IMAGE_OFFSET = { x: 0, y: 4 };
var HEALTH_BAR_OFFSET = { x: -25, y: -40 };
var UnitDisplayObject = /** @class */ (function () {
    function UnitDisplayObject(scene, unit) {
        var _this = this;
        this.getHealthBarPosition = function (point) { return point_1.addPoints(point, HEALTH_BAR_OFFSET); };
        this.syncScene = function (unit) {
            assert(unit.id === _this.unit.id);
            _this.unit = unit;
            var unitPoint = game_scene_1.hexCenter(_this.unit.location);
            _this.image.setPosition(unitPoint.x + IMAGE_OFFSET.x, unitPoint.y + IMAGE_OFFSET.y);
            _this.syncHealthBar(unitPoint);
        };
        this.syncHealthBar = function (unitPoint) {
            var healthBarPosition = _this.getHealthBarPosition(unitPoint);
            _this.healthBarGraphics.setPosition(healthBarPosition.x, healthBarPosition.y);
            _this.healthBarGraphics.clear();
            // Draw border
            var innerWidth = HEALTH_BAR_WIDTH - 2 * HEALTH_BAR_BORDER_THICKNESS;
            var innerHeight = HEALTH_BAR_HEIGHT - 2 * HEALTH_BAR_BORDER_THICKNESS;
            _this.healthBarGraphics.fillStyle(colours_1.HEALTH_BORDER_COLOUR);
            _this.healthBarGraphics.fillRect(0, 0, HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT);
            // Draw empty background
            _this.healthBarGraphics.fillStyle(colours_1.HEALTH_EMPTY_COLOUR);
            _this.healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, innerWidth, innerHeight);
            // Fill in bar
            var _a = _this.unit.hitPoints, current = _a.current, max = _a.max;
            _this.healthBarGraphics.fillStyle(colours_1.HEALTH_FULL_COLOUR);
            _this.healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, (innerWidth * current) / max, innerHeight);
        };
        this.runMoveAnimation = function (from, to, speed) { return __awaiter(_this, void 0, void 0, function () {
            var duration, beforeCoords, afterCoords, tween1, tween2, frame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duration = this.scaleSpeed(500, speed);
                        beforeCoords = game_scene_1.hexCenter(from);
                        afterCoords = game_scene_1.hexCenter(to);
                        this.image.anims.play('llama-walk');
                        this.image.setFlipX(afterCoords.x < beforeCoords.x);
                        tween1 = this.scene.tweens.create(__assign(__assign({ targets: this.image }, calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET)), { duration: duration, ease: 'Cubic' }));
                        tween2 = this.scene.tweens.create(__assign(__assign({ targets: this.healthBarGraphics }, calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET)), { duration: duration, ease: 'Cubic' }));
                        return [4 /*yield*/, Promise.all([tween_utils_1.playTween(tween1), tween_utils_1.playTween(tween2)])];
                    case 1:
                        _a.sent();
                        frame = this.image.anims.currentAnim.frames[1];
                        this.image.anims.stopOnFrame(frame);
                        return [2 /*return*/];
                }
            });
        }); };
        this.scaleSpeed = function (duration, speed) { return (speed === 'normal' ? duration : duration / 4); };
        this.runDeathAnimation = function (speed) { return __awaiter(_this, void 0, void 0, function () {
            var duration, tween;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        duration = this.scaleSpeed(1000, speed);
                        tween = this.scene.tweens.create({
                            targets: [this.image, this.healthBarGraphics],
                            alpha: { from: 1, to: 0 },
                            duration: duration,
                            ease: 'Cubic',
                        });
                        return [4 /*yield*/, tween_utils_1.playTween(tween)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runSpitAnimation = function (from, to, speed) { return __awaiter(_this, void 0, void 0, function () {
            var fromPoint, toPoint, distance, image, duration, tween;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromPoint = game_scene_1.hexCenter(from);
                        toPoint = game_scene_1.hexCenter(to);
                        distance = point_1.distanceBetweenPoints(fromPoint, toPoint);
                        image = this.scene.add.image(fromPoint.x, fromPoint.y, 'spit').setScale(0.8);
                        duration = this.scaleSpeed(distance * 4, speed);
                        tween = this.scene.tweens.create({
                            targets: image,
                            x: {
                                from: fromPoint.x,
                                to: toPoint.x,
                            },
                            y: {
                                from: fromPoint.y,
                                to: toPoint.y,
                            },
                            duration: duration,
                            ease: 'Quad',
                        });
                        return [4 /*yield*/, tween_utils_1.playTween(tween)];
                    case 1:
                        _a.sent();
                        image.destroy();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runDamageAnimation = function (location, damage, speed) { return __awaiter(_this, void 0, void 0, function () {
            var locationPoint, text, duration, tween1, tween2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        locationPoint = game_scene_1.hexCenter(location);
                        text = this.scene.add
                            .text(locationPoint.x, locationPoint.y, damage.toString(), {
                            color: '#ff8888',
                            stroke: '#000000',
                            strokeThickness: 2,
                        })
                            .setFontSize(26)
                            .setOrigin(0.5);
                        duration = this.scaleSpeed(2000, speed);
                        tween1 = this.scene.tweens.create({
                            targets: text,
                            y: {
                                from: locationPoint.y - 50,
                                to: locationPoint.y - 75,
                            },
                            duration: duration,
                            ease: 'Linear',
                        });
                        tween2 = this.scene.tweens.create({
                            targets: text,
                            alpha: { from: 1, to: 0 },
                            duration: duration,
                            ease: 'Cubic.in',
                        });
                        return [4 /*yield*/, Promise.all([tween_utils_1.playTween(tween1), tween_utils_1.playTween(tween2)])];
                    case 1:
                        _a.sent();
                        text.destroy();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runEatAnimation = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (random_util_1.randomIntInclusive(1, 3) === 1) {
                    this.image.toggleFlipX();
                }
                this.image.anims.play('llama-eat');
                return [2 /*return*/];
            });
        }); };
        this.runAttackAnimation = function (from, to, speed) { return __awaiter(_this, void 0, void 0, function () {
            var beforeCoords, afterCoords, duration, tween1, tween2, frame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        beforeCoords = game_scene_1.hexCenter(from);
                        afterCoords = game_scene_1.hexCenter(to);
                        this.image.setFlipX(afterCoords.x < beforeCoords.x);
                        this.image.anims.play('llama-walk');
                        duration = this.scaleSpeed(400, speed);
                        tween1 = this.scene.tweens.create(__assign(__assign({ targets: this.image }, calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET)), { duration: duration, ease: 'Cubic', yoyo: true }));
                        tween2 = this.scene.tweens.create(__assign(__assign({ targets: this.healthBarGraphics }, calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET)), { duration: duration, ease: 'Cubic', yoyo: true }));
                        return [4 /*yield*/, Promise.all([tween_utils_1.playTween(tween1), tween_utils_1.playTween(tween2)])];
                    case 1:
                        _a.sent();
                        frame = this.image.anims.currentAnim.frames[1];
                        this.image.anims.stopOnFrame(frame);
                        return [2 /*return*/];
                }
            });
        }); };
        this.destroy = function () {
            _this.scene.tweens.killTweensOf([_this.healthBarGraphics, _this.image]);
            _this.healthBarGraphics.destroy();
            _this.image.destroy();
        };
        this.scene = scene;
        this.unit = unit;
        this.image = scene.add.sprite(0, 0, 'llama-2').setScale(0.8).setTint(colours_1.getPlayerTint(this.unit.playerId));
        this.healthBarGraphics = scene.add.graphics();
    }
    return UnitDisplayObject;
}());
exports.UnitDisplayObject = UnitDisplayObject;
var calculateTweenXY = function (from, to, offset) { return ({
    x: {
        from: from.x + offset.x,
        to: to.x + offset.x,
    },
    y: {
        from: from.y + offset.y,
        to: to.y + offset.y,
    },
}); };


/***/ }),

/***/ "./src/scenes/main-menu/main-menu-scene.ts":
/*!*************************************************!*\
  !*** ./src/scenes/main-menu/main-menu-scene.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuScene = exports.MAIN_MENU_SCENE_KEY = void 0;
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var server_1 = __webpack_require__(/*! ../../server/server */ "./src/server/server.ts");
var world_event_db_1 = __webpack_require__(/*! ../../db/world-event-db */ "./src/db/world-event-db.ts");
var initial_world_state_1 = __webpack_require__(/*! ../../world/initial-world-state */ "./src/world/initial-world-state.ts");
var lobby_scene_1 = __webpack_require__(/*! ../lobby/lobby-scene */ "./src/scenes/lobby/lobby-scene.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var player_1 = __webpack_require__(/*! ../../world/player */ "./src/world/player.ts");
var url_info_1 = __webpack_require__(/*! ../boot/url-info */ "./src/scenes/boot/url-info.ts");
var primary_button_1 = __webpack_require__(/*! ../../ui/primary-button */ "./src/ui/primary-button.ts");
var local_1 = __webpack_require__(/*! ../local-storage/local */ "./src/scenes/local-storage/local.ts");
exports.MAIN_MENU_SCENE_KEY = 'MainMenu';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.MAIN_MENU_SCENE_KEY,
};
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.create = function () {
            _this.add.text(155, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(26);
            _this.sound.pauseOnBlur = false;
            _this.sound.add(asset_keys_1.AudioKeys.CLICK);
            new primary_button_1.PrimaryButton(_this, 100, 120, 'Host Game', _this.handleHostGame);
        };
        _this.handleHostGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var worldEventDb, gameId, playerId, worldState, name, server, sceneData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, world_event_db_1.openWorldEventDb()];
                    case 1:
                        worldEventDb = _a.sent();
                        gameId = uuid_1.v4();
                        playerId = player_1.HOST_PLAYER_ID;
                        worldState = initial_world_state_1.INITIAL_WORLD_STATE;
                        name = local_1.LocalStorage.findName();
                        if (name) {
                            worldState = worldState.setPlayerName(playerId, name);
                        }
                        server = new server_1.Server(worldEventDb, gameId, worldState, 0);
                        server.handleAction(playerId, { type: 'initialise', state: worldState });
                        url_info_1.setUrlInfo({ gameId: gameId });
                        sceneData = { serverOrClient: server };
                        this.scene.start(lobby_scene_1.LOBBY_SCENE_KEY, sceneData);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/scenes/point.ts":
/*!*****************************!*\
  !*** ./src/scenes/point.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceBetweenPoints = exports.subtractPoints = exports.addPoints = exports.multiplyPoint = exports.point = void 0;
exports.point = function (x, y) { return ({ x: x, y: y }); };
exports.multiplyPoint = function (point, n) { return ({ x: point.x * n, y: point.y * n }); };
exports.addPoints = function (point1, point2) { return ({ x: point1.x + point2.x, y: point1.y + point2.y }); };
exports.subtractPoints = function (point1, point2) { return ({
    x: point1.x - point2.x,
    y: point1.y - point2.y,
}); };
var square = function (n) { return n * n; };
exports.distanceBetweenPoints = function (point1, point2) {
    return Math.sqrt(square(point1.x - point2.x) + square(point1.y - point2.y));
};


/***/ }),

/***/ "./src/server/attack-world-action-handler.ts":
/*!***************************************************!*\
  !*** ./src/server/attack-world-action-handler.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackWorldActionHandler = exports.canAttackOccur = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var random_util_1 = __webpack_require__(/*! ../util/random-util */ "./src/util/random-util.ts");
exports.canAttackOccur = function (attackType, map, from, to) {
    switch (attackType) {
        case 'melee':
            return from.isAdjacentTo(to);
        case 'spit':
            var blockedByMountains = R.all(map.isMountain, R.intersection(from.neighbours(), to.neighbours()));
            return !blockedByMountains && from.distanceTo(to) <= 2;
    }
};
var AttackWorldActionHandler = /** @class */ (function () {
    function AttackWorldActionHandler(worldState, playerId, nextWorldEventId) {
        var _this = this;
        this.handleAttack = function (action) {
            var _a = _this.validateAttack(action), attacker = _a.attacker, defender = _a.defender;
            var attackType = action.attackType;
            var rawAttackerDamage = attackType === 'melee' ? random_util_1.randomIntInclusive(8, 12) : 0;
            var rawDefenderDamage = attackType === 'melee' ? random_util_1.randomIntInclusive(17, 23) : random_util_1.randomIntInclusive(4, 6);
            var attackerDamage = Math.min(attacker.hitPoints.current, rawAttackerDamage);
            var defenderDamage = Math.min(defender.hitPoints.current, rawDefenderDamage);
            var combatWorldEvent = _this.makeCombatWorldEvent(attackType, attacker, attackerDamage, defender, defenderDamage);
            var newWorldState = _this.worldState.applyEvent(combatWorldEvent);
            var events = [combatWorldEvent];
            var nextWorldEventId = _this.nextWorldEventId + 1;
            if (newWorldState.isPlayerDefeated(defender.playerId)) {
                var event_1 = _this.playerDefeatedEvent(nextWorldEventId++, defender.playerId);
                events.push(event_1);
                newWorldState = newWorldState.applyEvent(event_1);
            }
            if (newWorldState.isPlayerDefeated(attacker.playerId)) {
                var event_2 = _this.playerDefeatedEvent(nextWorldEventId++, attacker.playerId);
                events.push(event_2);
                newWorldState = newWorldState.applyEvent(event_2);
            }
            var undefeatedPlayers = newWorldState.players.filter(function (player) { return !player.defeated; });
            if (R.isEmpty(undefeatedPlayers)) {
                events.push({ id: nextWorldEventId++, type: 'gameOver' });
            }
            else if (undefeatedPlayers.length === 1) {
                var victor = undefeatedPlayers[0].id;
                events.push({ id: nextWorldEventId++, type: 'gameOver', victor: victor });
            }
            return events;
        };
        this.playerDefeatedEvent = function (id, playerId) { return ({
            id: id,
            type: 'playerDefeated',
            playerId: playerId,
        }); };
        this.validateAttack = function (action) {
            var attackerId = action.attacker.unitId;
            var attacker = _this.worldState.findUnitById(attackerId);
            if (!attacker) {
                throw new Error("No unit found with ID " + attackerId);
            }
            if (attacker.playerId !== _this.playerId) {
                throw new Error("Cannot control another player's unit: " + attacker.id);
            }
            if (attacker.actionPoints.current < 1) {
                throw new Error("Not enough action points to attack");
            }
            if (!attacker.location.equals(action.attacker.location)) {
                throw new Error("Attacker not in expected location");
            }
            var defenderId = action.defender.unitId;
            var defender = _this.worldState.findUnitById(defenderId);
            if (!defender) {
                throw new Error("No unit found with ID " + defenderId);
            }
            if (defender.playerId === _this.playerId) {
                throw new Error("Cannot attack own unit");
            }
            if (!defender.location.equals(action.defender.location)) {
                throw new Error("Defender not in expected location");
            }
            if (!exports.canAttackOccur(action.attackType, _this.worldState.map, attacker.location, defender.location)) {
                throw new Error("Invalid unit attack of type " + action.attackType + " between hexes " + attacker.location + " to " + defender.location + " too far apart");
            }
            return { attacker: attacker, defender: defender };
        };
        this.makeCombatWorldEvent = function (attackType, attacker, attackerDamage, defender, defenderDamage) { return ({
            id: _this.nextWorldEventId,
            type: 'combat',
            attackType: attackType,
            attacker: {
                playerId: attacker.playerId,
                unitId: attacker.id,
                location: attacker.location,
                damage: attackerDamage,
                killed: attacker.hitPoints.current === attackerDamage,
            },
            defender: {
                playerId: defender.playerId,
                unitId: defender.id,
                location: defender.location,
                damage: defenderDamage,
                killed: defender.hitPoints.current === defenderDamage,
            },
            actionPointsConsumed: 1,
        }); };
        this.worldState = worldState;
        this.playerId = playerId;
        this.nextWorldEventId = nextWorldEventId;
    }
    return AttackWorldActionHandler;
}());
exports.AttackWorldActionHandler = AttackWorldActionHandler;


/***/ }),

/***/ "./src/server/client.ts":
/*!******************************!*\
  !*** ./src/server/client.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var json_serialisation_1 = __webpack_require__(/*! ../util/json-serialisation */ "./src/util/json-serialisation.ts");
var peer_client_1 = __webpack_require__(/*! ./peer-client */ "./src/server/peer-client.ts");
var world_state_1 = __webpack_require__(/*! ../world/world-state */ "./src/world/world-state.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var async_util_1 = __webpack_require__(/*! ../util/async-util */ "./src/util/async-util.ts");
var initial_world_state_1 = __webpack_require__(/*! ../world/initial-world-state */ "./src/world/initial-world-state.ts");
var local_1 = __webpack_require__(/*! ../scenes/local-storage/local */ "./src/scenes/local-storage/local.ts");
var TIMEOUT = 5000;
var Client = /** @class */ (function () {
    function Client(peerClient) {
        var _this = this;
        this.listeners = [];
        this._worldState = initial_world_state_1.INITIAL_WORLD_STATE;
        this._playerId = -1;
        this.addListener = function (listener) {
            _this.listeners.push(listener);
        };
        this.removeListener = function (listener) {
            var index = _this.listeners.indexOf(listener);
            if (index > -1) {
                _this.listeners.splice(index, 1);
            }
        };
        this.notifyListeners = function (event, previousWorldState, newWorldState) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    listener(event, previousWorldState, newWorldState);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.handleWorldEventMessage = function (message) {
            var event = json_serialisation_1.deserialiseFromJson(message.event);
            var previousWorldState = _this._worldState;
            var newWorldState = previousWorldState.applyEvent(event);
            _this._worldState = newWorldState;
            _this.notifyListeners(event, previousWorldState, newWorldState);
        };
        this.rejoin = function (playerId) { return __awaiter(_this, void 0, void 0, function () {
            var request, response, worldState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = { type: 'rejoin', playerId: playerId };
                        return [4 /*yield*/, this.sendRequest(request)];
                    case 1:
                        response = _a.sent();
                        switch (response.type) {
                            case 'rejoined':
                                worldState = world_state_1.WorldState.fromJson(response.worldState);
                                this._playerId = playerId;
                                this._worldState = worldState;
                                return [2 /*return*/, worldState];
                            case 'unableToRejoin':
                                return [2 /*return*/, undefined];
                            default:
                                throw new unreachable_case_error_1.UnreachableCaseError(response);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.join = function () { return __awaiter(_this, void 0, void 0, function () {
            var name, request, response, playerId, worldState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = local_1.LocalStorage.findName();
                        request = { type: 'join', name: name };
                        return [4 /*yield*/, this.sendRequest(request)];
                    case 1:
                        response = _a.sent();
                        switch (response.type) {
                            case 'joined':
                                playerId = response.playerId;
                                worldState = world_state_1.WorldState.fromJson(response.worldState);
                                this._playerId = playerId;
                                this._worldState = worldState;
                                return [2 /*return*/, { playerId: playerId, worldState: worldState }];
                            case 'unableToJoin':
                                return [2 /*return*/, undefined];
                            default:
                                throw new unreachable_case_error_1.UnreachableCaseError(response);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.sendRequest = function (request) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, async_util_1.withTimeout(TIMEOUT)(this.peerClient.sendRequest(request))];
        }); }); };
        this.sendAction = function (playerId, action) { return __awaiter(_this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            type: 'worldAction',
                            action: json_serialisation_1.serialiseToJson(action),
                            playerId: playerId,
                        };
                        return [4 /*yield*/, this.sendRequest(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.peerClient = peerClient;
        peerClient.addListener(this.handleWorldEventMessage);
    }
    Object.defineProperty(Client.prototype, "worldState", {
        get: function () {
            return this._worldState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "playerId", {
        get: function () {
            return this._playerId;
        },
        enumerable: false,
        configurable: true
    });
    Client.connect = function (gameId) { return __awaiter(void 0, void 0, void 0, function () {
        var peerClient;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_util_1.withTimeout(TIMEOUT)(peer_client_1.PeerClient.connect(gameId))];
                case 1:
                    peerClient = _a.sent();
                    return [2 /*return*/, new Client(peerClient)];
            }
        });
    }); };
    return Client;
}());
exports.Client = Client;


/***/ }),

/***/ "./src/server/peer-client.ts":
/*!***********************************!*\
  !*** ./src/server/peer-client.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerClient = void 0;
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var peer_utils_1 = __webpack_require__(/*! ./peer-utils */ "./src/server/peer-utils.ts");
var PeerClient = /** @class */ (function () {
    function PeerClient(connection) {
        var _this = this;
        this.outstandingRequests = new Map();
        this.listeners = [];
        this.handleConnectionData = function (message) {
            // console.log('CLIENT: received message')
            // console.log(message)
            switch (message.type) {
                case 'response':
                    _this.handleResponse(message);
                    break;
                case 'errorResponse':
                    _this.handleErrorResponse(message);
                    break;
                case 'broadcast':
                    _this.handleBroadcast(message);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(message);
            }
        };
        this.sendRequest = function (request) {
            return new Promise(function (resolve, reject) {
                var requestMessage = {
                    type: 'request',
                    id: uuid_1.v4(),
                    request: request,
                };
                // console.log('CLIENT: sending request')
                // console.log(requestMessage)
                _this.connection.send(requestMessage);
                _this.outstandingRequests.set(requestMessage.id, { resolve: resolve, reject: reject });
            });
        };
        this.handleResponse = function (message) {
            var requestId = message.responseTo;
            var resolveAndReject = _this.outstandingRequests.get(requestId);
            if (resolveAndReject) {
                resolveAndReject.resolve(message.response);
                _this.outstandingRequests.delete(requestId);
            }
            else {
                console.log("CLIENT: response received for unknown request " + requestId);
            }
        };
        this.handleErrorResponse = function (message) {
            var requestId = message.responseTo;
            var resolveAndReject = _this.outstandingRequests.get(requestId);
            if (resolveAndReject) {
                resolveAndReject.reject('Error received from server');
                _this.outstandingRequests.delete(requestId);
            }
            else {
                console.log("CLIENT: error response received for unknown request " + requestId);
            }
        };
        this.addListener = function (listener) {
            _this.listeners.push(listener);
        };
        this.removeListener = function (listener) {
            var index = _this.listeners.indexOf(listener);
            if (index > -1) {
                _this.listeners.splice(index, 1);
            }
        };
        this.notifyListeners = function (message) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    listener(message);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.handleBroadcast = function (message) {
            _this.notifyListeners(message.body);
        };
        this.connection = connection;
        connection.on('data', this.handleConnectionData);
    }
    PeerClient.connect = function (peerId) {
        return new Promise(function (resolve, reject) {
            var peer = peer_utils_1.newPeer();
            var resolved = false;
            peer.on('error', function (err) {
                console.log(err);
                if (!resolved) {
                    reject(err);
                }
            });
            peer.on('open', function () {
                // console.log('CLIENT: open')
                var connection = peer.connect(peerId, { reliable: true });
                connection.on('open', function () {
                    // console.log('CLIENT: connection open')
                    var client = new PeerClient(connection);
                    resolve(client);
                    resolved = true;
                });
            });
        });
    };
    return PeerClient;
}());
exports.PeerClient = PeerClient;


/***/ }),

/***/ "./src/server/peer-server.ts":
/*!***********************************!*\
  !*** ./src/server/peer-server.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerServer = void 0;
var peer_utils_1 = __webpack_require__(/*! ./peer-utils */ "./src/server/peer-utils.ts");
var PeerServer = /** @class */ (function () {
    function PeerServer(id, handleMessage) {
        var _this = this;
        this.connections = [];
        this.handleNewConnection = function (connection) {
            // console.log('SERVER: received new connection from ' + connection.peer)
            _this.connections.push(connection);
            connection.on('data', _this.handleConnectionData(connection));
        };
        this.broadcast = function (message) {
            var e_1, _a;
            var broadcastMessage = { type: 'broadcast', body: message };
            try {
                for (var _b = __values(_this.connections), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var connection = _c.value;
                    connection.send(broadcastMessage);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.handleConnectionData = function (connection) { return function (message) {
            // console.log('SERVER: received new message from ' + connection.peer)
            // console.log(message)
            var response;
            try {
                response = _this.handleMessage(message.request);
            }
            catch (e) {
                var errorResponseMessage = {
                    type: 'errorResponse',
                    responseTo: message.id,
                };
                connection.send(errorResponseMessage);
                throw e;
            }
            var responseMessage = {
                type: 'response',
                responseTo: message.id,
                response: response,
            };
            connection.send(responseMessage);
        }; };
        this.handleMessage = handleMessage;
        this.peer = peer_utils_1.newPeer(id);
        this.peer.on('error', function (err) { return console.log(err); });
        this.peer.on('connection', this.handleNewConnection);
    }
    return PeerServer;
}());
exports.PeerServer = PeerServer;


/***/ }),

/***/ "./src/server/peer-utils.ts":
/*!**********************************!*\
  !*** ./src/server/peer-utils.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.newPeer = void 0;
exports.newPeer = function (id, options) {
    var _Peer = window.Peer;
    return new _Peer(id, options);
};


/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var world_state_owner_1 = __webpack_require__(/*! ./world-state-owner */ "./src/server/world-state-owner.ts");
var json_serialisation_1 = __webpack_require__(/*! ../util/json-serialisation */ "./src/util/json-serialisation.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var player_1 = __webpack_require__(/*! ../world/player */ "./src/world/player.ts");
var initial_world_state_1 = __webpack_require__(/*! ../world/initial-world-state */ "./src/world/initial-world-state.ts");
var peer_server_1 = __webpack_require__(/*! ./peer-server */ "./src/server/peer-server.ts");
var Server = /** @class */ (function () {
    function Server(worldEventDb, gameId, worldState, nextWorldEventId) {
        var _this = this;
        this.listeners = [];
        this.addListener = function (listener) {
            _this.listeners.push(listener);
        };
        this.removeListener = function (listener) {
            var index = _this.listeners.indexOf(listener);
            if (index > -1) {
                _this.listeners.splice(index, 1);
            }
        };
        this.notifyListeners = function (event, previousWorldState, newWorldState) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    listener(event, previousWorldState, newWorldState);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.handleClientJoin = function (name) {
            if (_this.worldState.gameHasStarted) {
                return { type: 'unableToJoin' };
            }
            else {
                var addPlayerAction = { type: 'addPlayer', name: name };
                var playerAddedEvent = _this.handleAction(_this.playerId, addPlayerAction)[0];
                return {
                    type: 'joined',
                    playerId: playerAddedEvent.playerId,
                    worldState: _this.worldState.toJson(),
                };
            }
        };
        this.handleClientRejoin = function (message) {
            var worldState = _this.worldState;
            if (worldState.isValidPlayerId(message.playerId)) {
                return { type: 'rejoined', worldState: worldState.toJson() };
            }
            else {
                return { type: 'unableToRejoin' };
            }
        };
        this.handleClientToServerMessage = function (message) {
            console.log(message);
            switch (message.type) {
                case 'join':
                    return _this.handleClientJoin(message.name);
                case 'rejoin':
                    return _this.handleClientRejoin(message);
                case 'worldAction':
                    _this.worldStateOwner.handleAction(message.playerId, json_serialisation_1.deserialiseFromJson(message.action));
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(message);
            }
        };
        this.handleAction = function (playerId, action) {
            return _this.worldStateOwner.handleAction(playerId, action);
        };
        this.sendAction = function (playerId, action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.handleAction(playerId, action);
                return [2 /*return*/];
            });
        }); };
        this.worldEventDb = worldEventDb;
        this.gameId = gameId;
        this.peerServer = new peer_server_1.PeerServer(this.gameId, this.handleClientToServerMessage);
        this.worldStateOwner = new world_state_owner_1.WorldStateOwner(worldState, nextWorldEventId);
        this.worldStateOwner.addListener(function (event, previousWorldState, newWorldState) {
            _this.notifyListeners(event, previousWorldState, newWorldState);
            _this.worldEventDb.store(_this.gameId, event);
            var message = { type: 'worldEvent', event: json_serialisation_1.serialiseToJson(event) };
            _this.peerServer.broadcast(message);
        });
    }
    Object.defineProperty(Server.prototype, "playerId", {
        get: function () {
            return player_1.HOST_PLAYER_ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "worldState", {
        get: function () {
            return this.worldStateOwner.worldState;
        },
        enumerable: false,
        configurable: true
    });
    Server.restoreGame = function (worldEventDb, gameId) { return __awaiter(void 0, void 0, void 0, function () {
        var events, sortedEvents, worldState;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, worldEventDb.getEventsForGame(gameId)];
                case 1:
                    events = _a.sent();
                    sortedEvents = R.sortBy(function (event) { return event.id; }, events);
                    worldState = initial_world_state_1.INITIAL_WORLD_STATE.applyEvents(sortedEvents);
                    return [2 /*return*/, new Server(worldEventDb, gameId, worldState, events.length + 1)];
            }
        });
    }); };
    return Server;
}());
exports.Server = Server;


/***/ }),

/***/ "./src/server/world-action-handler.ts":
/*!********************************************!*\
  !*** ./src/server/world-action-handler.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldActionHandler = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var player_1 = __webpack_require__(/*! ../world/player */ "./src/world/player.ts");
var world_generator_1 = __webpack_require__(/*! ./world-generator */ "./src/server/world-generator.ts");
var attack_world_action_handler_1 = __webpack_require__(/*! ./attack-world-action-handler */ "./src/server/attack-world-action-handler.ts");
var WorldActionHandler = /** @class */ (function () {
    function WorldActionHandler(worldState, playerId, nextWorldEventId) {
        var _this = this;
        this.calculateWorldEvents = function (action) {
            var events = _this.calculateSpecificWorldEvents(action);
            return _this.beginNewTurnIfNeeded(events);
        };
        this.calculateSpecificWorldEvents = function (action) {
            switch (action.type) {
                case 'initialise':
                    return _this.handleInitialise(action);
                case 'addPlayer':
                    return _this.handleAddPlayer(action);
                case 'changePlayerName':
                    return _this.handleChangePlayerName(action);
                case 'startGame':
                    return _this.handleStartGame();
                case 'attack':
                    return _this.handleAttack(action);
                case 'moveUnit':
                    return _this.handleMoveUnit(action);
                case 'endTurn':
                    return _this.handleEndTurn(action);
                case 'chat':
                    return _this.handleChat(action);
                case 'kickPlayer':
                    return _this.handleKickPlayer(action);
            }
        };
        this.handleInitialise = function (action) {
            if (_this.nextWorldEventId > 0) {
                throw new Error("Can only initialise as the first event");
            }
            return [{ id: _this.nextWorldEventId, type: 'initialise', state: action.state }];
        };
        this.handleAddPlayer = function (action) {
            var _a;
            var existingPlayerIds = _this.worldState.getPlayerIds();
            var playerId = R.apply(Math.max, existingPlayerIds) + 1;
            var name = (_a = action.name) !== null && _a !== void 0 ? _a : "Player " + playerId;
            return [{ id: _this.nextWorldEventId, type: 'playerAdded', playerId: playerId, name: name }];
        };
        this.handleChangePlayerName = function (action) {
            _this.getPlayer();
            return [{ id: _this.nextWorldEventId, type: 'playerChangedName', playerId: _this.playerId, name: action.name }];
        };
        this.handleStartGame = function () {
            if (_this.worldState.gameHasStarted) {
                throw new Error("Cannot start an already-started game");
            }
            if (_this.playerId !== player_1.HOST_PLAYER_ID) {
                throw new Error("Cannot start the game unless the host");
            }
            var worldGenerator = new world_generator_1.WorldGenerator(_this.worldState);
            var units = worldGenerator.generateUnits();
            var mountains = worldGenerator.generateMountains();
            return [{ id: _this.nextWorldEventId, type: 'gameStarted', units: units, mountains: mountains }];
        };
        this.handleAttack = function (action) {
            return new attack_world_action_handler_1.AttackWorldActionHandler(_this.worldState, _this.playerId, _this.nextWorldEventId).handleAttack(action);
        };
        this.handleMoveUnit = function (action) {
            var unitId = action.unitId, to = action.to;
            var unit = _this.worldState.findUnitById(unitId);
            if (!unit) {
                throw new Error("No unit found with ID " + unitId);
            }
            var from = unit.location;
            if (!from.isAdjacentTo(to)) {
                throw new Error("Invalid unit movement between non-adjacent hexes " + from + " to " + to);
            }
            if (!_this.worldState.map.isInBounds(to)) {
                throw new Error("Invalid unit movement to out-of-bounds hex " + to);
            }
            if (_this.worldState.findUnitInLocation(to)) {
                throw new Error("Invalid unit movement to already-occupied hex");
            }
            if (unit.actionPoints.current < 1) {
                throw new Error("Not enough action points to move");
            }
            if (unit.playerId !== _this.playerId) {
                throw new Error("Cannot move another player's unit");
            }
            return [
                {
                    id: _this.nextWorldEventId,
                    type: 'unitMoved',
                    playerId: _this.playerId,
                    actionPointsConsumed: 1,
                    unitId: unitId,
                    from: from,
                    to: to,
                },
            ];
        };
        this.handleEndTurn = function (action) {
            if (action.turn !== _this.worldState.turn) {
                throw new Error("Cannot end a turn that's not the current turn");
            }
            var player = _this.getPlayer();
            if (player.endedTurn) {
                throw new Error("Player has already ended their turn");
            }
            var playerEndedTurnAction = {
                id: _this.nextWorldEventId,
                type: 'playerEndedTurn',
                playerId: _this.playerId,
            };
            return [playerEndedTurnAction];
        };
        this.getPlayer = function () {
            var player = _this.worldState.findPlayer(_this.playerId);
            if (!player) {
                throw new Error("No player with ID " + _this.playerId);
            }
            return player;
        };
        this.handleChat = function (action) { return [
            { id: _this.nextWorldEventId, type: 'chat', playerId: _this.playerId, message: action.message },
        ]; };
        this.handleKickPlayer = function (action) {
            var playerId = action.playerId;
            var player = _this.worldState.findPlayer(playerId);
            if (!player) {
                throw new Error("No player with ID " + playerId);
            }
            if (playerId === player_1.HOST_PLAYER_ID) {
                throw new Error("Cannot kick host");
            }
            if (_this.playerId !== player_1.HOST_PLAYER_ID) {
                throw new Error("Only the host can kick players");
            }
            return [{ id: _this.nextWorldEventId, type: 'playerKicked', playerId: playerId }];
        };
        this.worldState = worldState;
        this.playerId = playerId;
        this.nextWorldEventId = nextWorldEventId;
    }
    WorldActionHandler.prototype.beginNewTurnIfNeeded = function (events) {
        var lastEvent = R.last(events);
        if (lastEvent === undefined) {
            return [];
        }
        else {
            var newWorldState = this.worldState.applyEvents(events);
            if (newWorldState.turn === 0 || newWorldState.canAnyPlayerAct() || newWorldState.units.length === 0) {
                return events;
            }
            else {
                var nextWorldEventId = lastEvent.id + 1;
                var newTurnEvent = { id: nextWorldEventId, type: 'newTurn' };
                return R.append(newTurnEvent, events);
            }
        }
    };
    return WorldActionHandler;
}());
exports.WorldActionHandler = WorldActionHandler;


/***/ }),

/***/ "./src/server/world-generator.ts":
/*!***************************************!*\
  !*** ./src/server/world-generator.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldGenerator = void 0;
var unit_1 = __webpack_require__(/*! ../world/unit */ "./src/world/unit.ts");
var random_util_1 = __webpack_require__(/*! ../util/random-util */ "./src/util/random-util.ts");
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var action_points_1 = __webpack_require__(/*! ../world/action-points */ "./src/world/action-points.ts");
var hit_points_1 = __webpack_require__(/*! ../world/hit-points */ "./src/world/hit-points.ts");
var LLAMA_NAMES = [
    'Walter',
    'Dolly',
    'Chewpaca',
    'Barack O. Llama',
    'Como Se',
    'Fuzzy',
    'Jeremy',
    'Alfonso',
    'Rose',
    'Lorenzo',
    'Rita',
    'Anton',
    'Bernard',
    'Cassie',
    'Francesca',
    'Milly',
    'Carlos',
    'Ricardo',
];
var WorldGenerator = /** @class */ (function () {
    function WorldGenerator(worldState) {
        var _this = this;
        this.nextUnitId = 1;
        this.generateUnit = function (playerId) {
            var id = _this.nextUnitId++;
            var location = random_util_1.randomElement(_this.remainingHexes);
            _this.remainingHexes = R.without([location], _this.remainingHexes);
            var name = random_util_1.randomElement(LLAMA_NAMES);
            return new unit_1.Unit({
                id: id,
                playerId: playerId,
                name: name,
                location: location,
                actionPoints: new action_points_1.ActionPoints({ current: 2, max: 2 }),
                hitPoints: new hit_points_1.HitPoints({ current: 100, max: 100 }),
            });
        };
        this.generateMountain = function () {
            var location = random_util_1.randomElement(_this.remainingHexes);
            _this.remainingHexes = R.without([location], _this.remainingHexes);
            return location;
        };
        this.generateMountains = function () { return R.range(1, 10).map(_this.generateMountain); };
        this.generateUnits = function () {
            return R.chain(function (player) { return [_this.generateUnit(player.id), _this.generateUnit(player.id)]; }, _this.worldState.players);
        };
        this.worldState = worldState;
        this.remainingHexes = Array.from(worldState.map.getMapHexes());
    }
    return WorldGenerator;
}());
exports.WorldGenerator = WorldGenerator;


/***/ }),

/***/ "./src/server/world-state-owner.ts":
/*!*****************************************!*\
  !*** ./src/server/world-state-owner.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldStateOwner = void 0;
var world_action_handler_1 = __webpack_require__(/*! ./world-action-handler */ "./src/server/world-action-handler.ts");
var WorldStateOwner = /** @class */ (function () {
    function WorldStateOwner(worldState, nextWorldEventId) {
        var _this = this;
        this.listeners = [];
        this.addListener = function (listener) {
            _this.listeners.push(listener);
        };
        this.notifyListeners = function (event, previousWorldState, newWorldState) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    listener(event, previousWorldState, newWorldState);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.handleAction = function (playerId, action) {
            var e_2, _a;
            var worldActionHandler = new world_action_handler_1.WorldActionHandler(_this.worldState, playerId, _this.nextWorldEventId);
            var events = worldActionHandler.calculateWorldEvents(action);
            try {
                for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                    var event_1 = events_1_1.value;
                    var previousWorldState = _this.worldState;
                    var newWorldState = previousWorldState.applyEvent(event_1);
                    _this.worldState = newWorldState;
                    _this.notifyListeners(event_1, previousWorldState, newWorldState);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.nextWorldEventId += events.length;
            return events;
        };
        this.worldState = worldState;
        this.nextWorldEventId = nextWorldEventId;
    }
    return WorldStateOwner;
}());
exports.WorldStateOwner = WorldStateOwner;


/***/ }),

/***/ "./src/ui/primary-button.ts":
/*!**********************************!*\
  !*** ./src/ui/primary-button.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryButton = void 0;
var asset_keys_1 = __webpack_require__(/*! ../scenes/asset-keys */ "./src/scenes/asset-keys.ts");
var PrimaryButton = /** @class */ (function () {
    function PrimaryButton(scene, x, y, text, onPressed) {
        var _this = this;
        this.setVisible = function (visible) {
            _this.endTurnButton.setVisible(visible);
            _this.endTurnText.setVisible(visible);
            return _this;
        };
        this.setY = function (y) {
            _this.endTurnButton.setY(y);
            _this.endTurnText.setY(y + _this.endTurnButton.height / 2);
            return _this;
        };
        this.endTurnButton = scene.add
            .image(x, y, 'blank-button')
            .setInteractive()
            .on('pointerdown', function () { return _this.endTurnButton.setTexture(asset_keys_1.ImageKeys.BLANK_BUTTON_PRESSED); })
            .on('pointerup', function () {
            _this.endTurnButton.setTexture(asset_keys_1.ImageKeys.BLANK_BUTTON);
            scene.sound.play(asset_keys_1.AudioKeys.CLICK);
            onPressed();
        })
            .on('pointerout', function () { return _this.endTurnButton.setTexture(asset_keys_1.ImageKeys.BLANK_BUTTON); })
            .setOrigin(0, 0);
        this.endTurnText = scene.add
            .text(x + this.endTurnButton.width / 2, y + this.endTurnButton.height / 2, text, {
            fill: '#ffffff',
        })
            .setOrigin(0.5)
            .setFontSize(18)
            .setShadow(2, 2, '#000000');
    }
    return PrimaryButton;
}());
exports.PrimaryButton = PrimaryButton;


/***/ }),

/***/ "./src/util/async-util.ts":
/*!********************************!*\
  !*** ./src/util/async-util.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.withTimeout = exports.fireAndForget = void 0;
var Bluebird = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
exports.fireAndForget = function (asyncTask) {
    asyncTask();
};
exports.withTimeout = function (timeout) { return function (promise) {
    return Bluebird.Promise.resolve(promise).timeout(timeout);
}; };


/***/ }),

/***/ "./src/util/json-serialisation.ts":
/*!****************************************!*\
  !*** ./src/util/json-serialisation.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialiseFromJson = exports.serialiseToJson = void 0;
var hex_1 = __webpack_require__(/*! ../world/hex */ "./src/world/hex.ts");
var world_map_1 = __webpack_require__(/*! ../world/world-map */ "./src/world/world-map.ts");
var unit_1 = __webpack_require__(/*! ../world/unit */ "./src/world/unit.ts");
var hit_points_1 = __webpack_require__(/*! ../world/hit-points */ "./src/world/hit-points.ts");
var action_points_1 = __webpack_require__(/*! ../world/action-points */ "./src/world/action-points.ts");
var player_1 = __webpack_require__(/*! ../world/player */ "./src/world/player.ts");
var world_state_1 = __webpack_require__(/*! ../world/world-state */ "./src/world/world-state.ts");
exports.serialiseToJson = function (value) {
    var e_1, _a;
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'undefined':
            return value;
        case 'object':
            if (Array.isArray(value)) {
                return value.map(exports.serialiseToJson);
            }
            else if (value instanceof hex_1.Hex) {
                return __assign(__assign({}, value.toJson()), { _llamaClass: 'Hex' });
            }
            else if (value instanceof world_map_1.WorldMap) {
                return __assign(__assign({}, value.toJson()), { _llamaClass: 'WorldMap' });
            }
            else if (value instanceof world_state_1.WorldState) {
                return __assign(__assign({}, value.toJson()), { _llamaClass: 'WorldState' });
            }
            else if (value instanceof unit_1.Unit) {
                return __assign(__assign({}, value.toJson()), { _llamaClass: 'Unit' });
            }
            else if (value instanceof hit_points_1.HitPoints) {
                return __assign(__assign({}, value.toJson()), { _llamaClass: 'HitPoints' });
            }
            else if (value instanceof action_points_1.ActionPoints) {
                return __assign(__assign({}, value.toJson()), { _llamaClass: 'ActionPoints' });
            }
            else if (value instanceof player_1.Player) {
                return __assign(__assign({}, value.toJson()), { _llamaClass: 'Player' });
            }
            else {
                var newObject = {};
                try {
                    for (var _b = __values(Object.entries(value)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), key = _d[0], val = _d[1];
                        newObject[key] = exports.serialiseToJson(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return newObject;
            }
    }
};
exports.deserialiseFromJson = function (value) {
    var e_2, _a;
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'undefined':
            return value;
        case 'object':
            if (Array.isArray(value)) {
                return value.map(exports.deserialiseFromJson);
            }
            else if (value._llamaClass === 'Hex') {
                return hex_1.Hex.fromJson(value);
            }
            else if (value._llamaClass === 'WorldMap') {
                return world_map_1.WorldMap.fromJson(value);
            }
            else if (value._llamaClass === 'WorldState') {
                return world_state_1.WorldState.fromJson(value);
            }
            else if (value._llamaClass === 'Unit') {
                return unit_1.Unit.fromJson(value);
            }
            else if (value._llamaClass === 'ActionPoints') {
                return action_points_1.ActionPoints.fromJson(value);
            }
            else if (value._llamaClass === 'HitPoints') {
                return hit_points_1.HitPoints.fromJson(value);
            }
            else if (value._llamaClass === 'Player') {
                return player_1.Player.fromJson(value);
            }
            else {
                var newObject = {};
                try {
                    for (var _b = __values(Object.entries(value)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), key = _d[0], val = _d[1];
                        newObject[key] = exports.deserialiseFromJson(val);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return newObject;
            }
    }
};


/***/ }),

/***/ "./src/util/phaser/tween-utils.ts":
/*!****************************************!*\
  !*** ./src/util/phaser/tween-utils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.playTween = void 0;
exports.playTween = function (tween) {
    return new Promise(function (resolve) { return tween.setCallback('onComplete', resolve, []).play(); });
};


/***/ }),

/***/ "./src/util/random-util.ts":
/*!*********************************!*\
  !*** ./src/util/random-util.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.randomElement = exports.randomIntExclusive = exports.randomIntInclusive = void 0;
exports.randomIntInclusive = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.randomIntExclusive = function (min, max) { return Math.floor(Math.random() * (max - min)) + min; };
exports.randomElement = function (array) { return array[exports.randomIntExclusive(0, array.length)]; };


/***/ }),

/***/ "./src/util/types.ts":
/*!***************************!*\
  !*** ./src/util/types.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.just = exports.nothing = exports.toOption = exports.toMaybe = void 0;
exports.toMaybe = function (option) { return (option === undefined ? exports.nothing : exports.just(option)); };
exports.toOption = function (maybe) {
    switch (maybe.type) {
        case 'just':
            return maybe.item;
        case 'nothing':
            return undefined;
    }
};
exports.nothing = { type: 'nothing' };
exports.just = function (item) { return ({
    type: 'just',
    item: item,
}); };


/***/ }),

/***/ "./src/util/unreachable-case-error.ts":
/*!********************************************!*\
  !*** ./src/util/unreachable-case-error.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnreachableCaseError = void 0;
var UnreachableCaseError = /** @class */ (function (_super) {
    __extends(UnreachableCaseError, _super);
    function UnreachableCaseError(value) {
        return _super.call(this, "Unreachable case: " + value) || this;
    }
    return UnreachableCaseError;
}(Error));
exports.UnreachableCaseError = UnreachableCaseError;


/***/ }),

/***/ "./src/world/action-points.ts":
/*!************************************!*\
  !*** ./src/world/action-points.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionPoints = void 0;
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var ActionPoints = /** @class */ (function () {
    function ActionPoints(_a) {
        var _this = this;
        var current = _a.current, max = _a.max;
        this.reduce = function (points) { return _this.copy({ current: _this.current - points }); };
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.current, current = _c === void 0 ? _this.current : _c, _d = _b.max, max = _d === void 0 ? _this.max : _d;
            return new ActionPoints({ current: current, max: max });
        };
        this.refresh = function () { return new ActionPoints({ current: _this.max, max: _this.max }); };
        this.toJson = function () { return ({ current: _this.current, max: _this.max }); };
        this.current = current;
        this.max = max;
        assert(max > 0);
        assert(current >= 0);
        assert(current <= max);
    }
    ActionPoints.fromJson = function (json) { return new ActionPoints({ current: json.current, max: json.max }); };
    return ActionPoints;
}());
exports.ActionPoints = ActionPoints;


/***/ }),

/***/ "./src/world/hex-direction.ts":
/*!************************************!*\
  !*** ./src/world/hex-direction.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnitVector = exports.HEX_DIRECTIONS = exports.HexDirection = void 0;
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
var HexDirection;
(function (HexDirection) {
    HexDirection["EAST"] = "EAST";
    HexDirection["WEST"] = "WEST";
    HexDirection["NORTH_EAST"] = "NORTH_EAST";
    HexDirection["SOUTH_EAST"] = "SOUTH_EAST";
    HexDirection["NORTH_WEST"] = "NORTH_WEST";
    HexDirection["SOUTH_WEST"] = "SOUTH_WEST";
})(HexDirection = exports.HexDirection || (exports.HexDirection = {}));
exports.HEX_DIRECTIONS = [
    HexDirection.EAST,
    HexDirection.SOUTH_EAST,
    HexDirection.SOUTH_WEST,
    HexDirection.WEST,
    HexDirection.NORTH_WEST,
    HexDirection.NORTH_EAST,
];
exports.getUnitVector = function (direction) {
    switch (direction) {
        case HexDirection.EAST:
            return new hex_1.Hex(1, 0);
        case HexDirection.WEST:
            return new hex_1.Hex(-1, 0);
        case HexDirection.NORTH_EAST:
            return new hex_1.Hex(1, -1);
        case HexDirection.NORTH_WEST:
            return new hex_1.Hex(0, -1);
        case HexDirection.SOUTH_EAST:
            return new hex_1.Hex(0, 1);
        case HexDirection.SOUTH_WEST:
            return new hex_1.Hex(-1, 1);
        default:
            throw new unreachable_case_error_1.UnreachableCaseError(direction);
    }
};


/***/ }),

/***/ "./src/world/hex.ts":
/*!**************************!*\
  !*** ./src/world/hex.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hex = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var hex_direction_1 = __webpack_require__(/*! ./hex-direction */ "./src/world/hex-direction.ts");
var Hex = /** @class */ (function () {
    function Hex(x, y) {
        var _this = this;
        this.plus = function (that) { return new Hex(_this.x + that.x, _this.y + that.y); };
        this.neighbours = function () { return Hex.NEIGHBOURS.map(_this.plus); };
        this.isAdjacentTo = function (that) { return R.includes(that, _this.neighbours()); };
        this.distanceTo = function (that) {
            return (Math.abs(_this.x - that.x) + Math.abs(_this.y - that.y) + Math.abs(_this.z - that.z)) / 2;
        };
        this.equals = function (that) { return _this.x === that.x && _this.y === that.y; };
        this.toString = function () { return "Hex(" + _this.x + ", " + _this.y + ")"; };
        this.go = function (direction) { return _this.plus(hex_direction_1.getUnitVector(direction)); };
        this.toJson = function () { return ({ x: _this.x, y: _this.y }); };
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Hex.prototype, "z", {
        get: function () {
            return -this.x - this.y;
        },
        enumerable: false,
        configurable: true
    });
    Hex.NEIGHBOURS = [
        new Hex(0, 1),
        new Hex(1, 0),
        new Hex(1, -1),
        new Hex(0, -1),
        new Hex(-1, 0),
        new Hex(-1, 1),
    ];
    Hex.fromJson = function (json) { return new Hex(json.x, json.y); };
    return Hex;
}());
exports.Hex = Hex;


/***/ }),

/***/ "./src/world/hit-points.ts":
/*!*********************************!*\
  !*** ./src/world/hit-points.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HitPoints = void 0;
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var HitPoints = /** @class */ (function () {
    function HitPoints(_a) {
        var _this = this;
        var current = _a.current, max = _a.max;
        this.damage = function (points) { return _this.copy({ current: _this.current - points }); };
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.current, current = _c === void 0 ? _this.current : _c, _d = _b.max, max = _d === void 0 ? _this.max : _d;
            return new HitPoints({ current: current, max: max });
        };
        this.toJson = function () { return ({ current: _this.current, max: _this.max }); };
        this.current = current;
        this.max = max;
        assert(max > 0);
        assert(current >= 0);
        assert(current <= max);
    }
    HitPoints.fromJson = function (json) { return new HitPoints({ current: json.current, max: json.max }); };
    return HitPoints;
}());
exports.HitPoints = HitPoints;


/***/ }),

/***/ "./src/world/initial-world-state.ts":
/*!******************************************!*\
  !*** ./src/world/initial-world-state.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_WORLD_STATE = void 0;
var world_map_1 = __webpack_require__(/*! ./world-map */ "./src/world/world-map.ts");
var world_state_1 = __webpack_require__(/*! ./world-state */ "./src/world/world-state.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/world/player.ts");
exports.INITIAL_WORLD_STATE = new world_state_1.WorldState({
    turn: 0,
    map: new world_map_1.WorldMap({ width: 10, height: 6 }),
    players: [
        new player_1.Player({
            id: player_1.HOST_PLAYER_ID,
            name: 'Player 1',
            endedTurn: false,
        }),
    ],
    units: [],
});


/***/ }),

/***/ "./src/world/player.ts":
/*!*****************************!*\
  !*** ./src/world/player.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.HOST_PLAYER_ID = void 0;
exports.HOST_PLAYER_ID = 1;
var Player = /** @class */ (function () {
    function Player(_a) {
        var _this = this;
        var id = _a.id, name = _a.name, _b = _a.endedTurn, endedTurn = _b === void 0 ? false : _b, _c = _a.defeated, defeated = _c === void 0 ? false : _c;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? _this.id : _c, _d = _b.name, name = _d === void 0 ? _this.name : _d, _e = _b.endedTurn, endedTurn = _e === void 0 ? _this.endedTurn : _e, _f = _b.defeated, defeated = _f === void 0 ? _this.defeated : _f;
            return new Player({
                id: id,
                name: name,
                endedTurn: endedTurn,
                defeated: defeated,
            });
        };
        this.toJson = function () { return ({ id: _this.id, name: _this.name, endedTurn: _this.endedTurn, defeated: _this.defeated }); };
        this.id = id;
        this.name = name;
        this.endedTurn = endedTurn;
        this.defeated = defeated;
    }
    Player.fromJson = function (json) {
        return new Player({
            id: json.id,
            name: json.name,
            endedTurn: json.endedTurn,
            defeated: json.defeated,
        });
    };
    return Player;
}());
exports.Player = Player;


/***/ }),

/***/ "./src/world/unit.ts":
/*!***************************!*\
  !*** ./src/world/unit.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
var action_points_1 = __webpack_require__(/*! ./action-points */ "./src/world/action-points.ts");
var hit_points_1 = __webpack_require__(/*! ./hit-points */ "./src/world/hit-points.ts");
var Unit = /** @class */ (function () {
    function Unit(_a) {
        var _this = this;
        var id = _a.id, playerId = _a.playerId, name = _a.name, location = _a.location, hitPoints = _a.hitPoints, actionPoints = _a.actionPoints;
        this.damage = function (points) { return _this.copy({ hitPoints: _this.hitPoints.damage(points) }); };
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? _this.id : _c, _d = _b.playerId, playerId = _d === void 0 ? _this.playerId : _d, _e = _b.name, name = _e === void 0 ? _this.name : _e, _f = _b.location, location = _f === void 0 ? _this.location : _f, _g = _b.hitPoints, hitPoints = _g === void 0 ? _this.hitPoints : _g, _h = _b.actionPoints, actionPoints = _h === void 0 ? _this.actionPoints : _h;
            return new Unit({ id: id, playerId: playerId, name: name, location: location, hitPoints: hitPoints, actionPoints: actionPoints });
        };
        this.move = function (location, actionPointsConsumed) {
            return _this.copy({ location: location, actionPoints: _this.actionPoints.reduce(actionPointsConsumed) });
        };
        this.reduceActionPoints = function (actionPointsConsumed) {
            return _this.copy({ actionPoints: _this.actionPoints.reduce(actionPointsConsumed) });
        };
        this.refreshActionPoints = function () { return _this.copy({ actionPoints: _this.actionPoints.refresh() }); };
        this.toJson = function () { return ({
            id: _this.id,
            playerId: _this.playerId,
            name: _this.name,
            location: _this.location.toJson(),
            hitPoints: _this.hitPoints.toJson(),
            actionPoints: _this.actionPoints.toJson(),
        }); };
        this.id = id;
        this.playerId = playerId;
        this.name = name;
        this.location = location;
        this.hitPoints = hitPoints;
        this.actionPoints = actionPoints;
    }
    Object.defineProperty(Unit.prototype, "hasUnspentActionPoints", {
        get: function () {
            return this.actionPoints.current > 0;
        },
        enumerable: false,
        configurable: true
    });
    Unit.fromJson = function (json) {
        return new Unit({
            id: json.id,
            playerId: json.playerId,
            name: json.name,
            location: hex_1.Hex.fromJson(json.location),
            hitPoints: hit_points_1.HitPoints.fromJson(json.hitPoints),
            actionPoints: action_points_1.ActionPoints.fromJson(json.actionPoints),
        });
    };
    return Unit;
}());
exports.Unit = Unit;


/***/ }),

/***/ "./src/world/world-event-evaluator.ts":
/*!********************************************!*\
  !*** ./src/world/world-event-evaluator.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyEvent = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/world/player.ts");
var attack_world_action_handler_1 = __webpack_require__(/*! ../server/attack-world-action-handler */ "./src/server/attack-world-action-handler.ts");
exports.applyEvent = function (state, event) {
    switch (event.type) {
        case 'initialise':
            return handleInitialise(event);
        case 'playerAdded':
            return handlePlayerAdded(state, event);
        case 'playerChangedName':
            return handlePlayerChangedName(state, event);
        case 'gameStarted':
            return handleGameStarted(state, event);
        case 'unitMoved':
            return handleUnitMoved(state, event);
        case 'combat':
            return handleCombat(state, event);
        case 'playerEndedTurn':
            return handlePlayerEndedTurn(state, event);
        case 'playerDefeated':
            return handlePlayerDefeated(state, event);
        case 'newTurn':
            return handleNewTurn(state);
        case 'gameOver':
            return handleGameOver(state, event);
        case 'chat':
            return handleChat(state, event);
        case 'playerKicked':
            return handlePlayerKicked(state, event);
        default:
            throw new unreachable_case_error_1.UnreachableCaseError(event);
    }
};
var handleInitialise = function (event) {
    if (event.id > 0) {
        throw new Error("Initialise must be the first event");
    }
    return event.state;
};
var handlePlayerAdded = function (state, event) {
    if (R.any(function (player) { return player.id === event.playerId; }, state.players)) {
        throw new Error("Player ID already in use");
    }
    var playerId = event.playerId;
    var player = new player_1.Player({ id: playerId, name: event.name });
    return state.addPlayer(player);
};
var handlePlayerChangedName = function (state, event) {
    var playerId = event.playerId, name = event.name;
    getPlayer(state, playerId);
    return state.setPlayerName(playerId, name);
};
var getPlayer = function (state, playerId) {
    var player = state.findPlayer(playerId);
    if (!player)
        throw new Error("No player found with ID " + playerId);
    return player;
};
var handleGameStarted = function (state, event) {
    if (state.gameHasStarted) {
        throw new Error("Game already started");
    }
    return state
        .copy({ turn: 1, units: event.units })
        .updateWorldMap(function (map) { return map.copy({ mountains: event.mountains }); })
        .addWorldLog('Let battle commence!');
};
var handleUnitMoved = function (state, event) {
    var unitId = event.unitId, playerId = event.playerId, from = event.from, to = event.to;
    if (!from.isAdjacentTo(to)) {
        throw new Error("Invalid unit movement between non-adjacent hexes " + from + " to " + to);
    }
    if (!state.map.isInBounds(to)) {
        throw new Error("Invalid unit movement to out-of-bounds hex " + to);
    }
    var unit = state.findUnitById(unitId);
    if (!unit) {
        throw new Error("No unit found with ID " + unitId);
    }
    if (!unit.location.equals(from)) {
        throw new Error("Unit is not in the expected location for movement. Unit is at " + unit.location + ", but was expected to be at " + from);
    }
    var toUnit = state.findUnitInLocation(to);
    if (toUnit) {
        throw new Error("Invalid unit movement to already-occupied hex");
    }
    if (unit.playerId !== playerId) {
        throw new Error("Invalid attempt to move unit of another player");
    }
    if (unit.actionPoints.current < event.actionPointsConsumed) {
        throw new Error("Invalid action point usage");
    }
    return state.replaceUnit(unit.id, unit.move(to, event.actionPointsConsumed));
};
var handleCombat = function (state, event) {
    var attacker = event.attacker, defender = event.defender;
    var attackerUnit = state.findUnitById(attacker.unitId);
    if (!attackerUnit)
        throw new Error("No unit found with ID " + attacker.unitId);
    if (!attackerUnit.location.equals(attacker.location))
        throw new Error("Invalid location for attacker. Attacking unit " + attackerUnit.id + " is at location " + attackerUnit.location + ", but was expected to be at " + attacker.location);
    var defenderUnit = state.findUnitById(defender.unitId);
    if (!defenderUnit)
        throw new Error("No unit found with ID " + defender.unitId);
    if (!defenderUnit.location.equals(defender.location))
        throw new Error("Invalid location for defender. Defending unit " + defenderUnit.id + " is at location " + defenderUnit.location + ", but was expected to be at " + defender.location);
    if (attackerUnit.playerId === defenderUnit.playerId)
        throw new Error("Invalid combat with self");
    if (!attack_world_action_handler_1.canAttackOccur(event.attackType, state.map, attacker.location, defender.location))
        throw new Error("Invalid combat of type " + event.attackType + " between hexes " + attacker.location + " to " + defender.location);
    if (attackerUnit.actionPoints.current < event.actionPointsConsumed)
        throw new Error("Invalid action point usage");
    var newState = state;
    if (attacker.killed) {
        newState = newState.removeUnit(attackerUnit.id);
    }
    else {
        var updatedAttacker = attackerUnit.damage(attacker.damage).reduceActionPoints(event.actionPointsConsumed);
        newState = newState.replaceUnit(attackerUnit.id, updatedAttacker);
    }
    if (defender.killed) {
        newState = newState.removeUnit(defenderUnit.id);
    }
    else {
        newState = newState.replaceUnit(defenderUnit.id, defenderUnit.damage(defender.damage));
    }
    if (defender.killed) {
        if (attacker.killed) {
            newState = newState.addWorldLog(defenderUnit.name + " was taken out in a suicide attack by " + attackerUnit.name + ".");
        }
        else {
            newState = newState.addWorldLog(defenderUnit.name + " was brutally murdered by " + attackerUnit.name + ".");
        }
    }
    else if (attacker.killed) {
        newState = newState.addWorldLog(attackerUnit.name + " died in a futile attempt to take on " + attackerUnit.name + ".");
    }
    else {
        var verb = event.attackType === 'melee' ? 'attacked' : 'spat at';
        var takingDamageClause = attacker.damage === 0 ? '' : " and taking " + attacker.damage + " damage";
        var message = attackerUnit.name + " " + verb + " " + defenderUnit.name + ", causing " + defender.damage + " damage" + takingDamageClause + ".";
        newState = newState.addWorldLog(message);
    }
    return newState;
};
var handlePlayerEndedTurn = function (state, event) {
    var playerId = event.playerId;
    getPlayer(state, playerId);
    return state.updatePlayer(playerId, function (player) { return player.copy({ endedTurn: true }); });
};
var handlePlayerDefeated = function (state, event) {
    var playerId = event.playerId;
    var player = getPlayer(state, playerId);
    return state
        .updatePlayer(playerId, function (player) { return player.copy({ defeated: true }); })
        .addWorldLog(player.name + " has been vanquished.");
};
var handleNewTurn = function (state) {
    return state.newTurn().addWorldLog("Turn " + (state.turn + 1) + " has begun.");
};
var handleGameOver = function (state, event) {
    var victor = event.victor;
    var newState = state.gameOver(victor);
    if (victor) {
        var victorPlayer = getPlayer(state, victor);
        newState = newState.addWorldLog("\uD83C\uDFC6 " + victorPlayer.name + " is victorious!");
    }
    else {
        newState = newState.addWorldLog("There are no winners in war.");
    }
    return newState;
};
var handlePlayerKicked = function (state, event) {
    var playerId = event.playerId;
    var player = state.findPlayer(playerId);
    if (!player) {
        throw new Error("No player with ID " + playerId);
    }
    if (playerId === player_1.HOST_PLAYER_ID) {
        throw new Error("Cannot kick host");
    }
    return state.removePlayer(playerId);
};
var handleChat = function (state, event) {
    return state.addWorldLog("[" + state.getPlayer(event.playerId).name + "] " + event.message);
};


/***/ }),

/***/ "./src/world/world-map.ts":
/*!********************************!*\
  !*** ./src/world/world-map.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldMap = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
var WorldMap = /** @class */ (function () {
    function WorldMap(_a) {
        var _this = this;
        var width = _a.width, height = _a.height, _b = _a.mountains, mountains = _b === void 0 ? [] : _b;
        this.isInBounds = function (hex) {
            var q = hex.x + Math.floor(hex.y / 2);
            return 0 <= q && q < _this.width && 0 <= hex.y && hex.y < _this.height;
        };
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? _this.width : _c, _d = _b.height, height = _d === void 0 ? _this.height : _d, _e = _b.mountains, mountains = _e === void 0 ? _this.mountains : _e;
            return new WorldMap({ width: width, height: height, mountains: mountains });
        };
        this.toJson = function () { return ({
            width: _this.width,
            height: _this.height,
            mountains: _this.mountains.map(function (mountain) { return mountain.toJson(); }),
        }); };
        this.isMountain = function (hex) { return R.contains(hex, _this.mountains); };
        assert(width > 0);
        assert(height > 0);
        this.width = width;
        this.height = height;
        this.mountains = mountains;
    }
    WorldMap.prototype.getMapHexes = function () {
        var row, column, x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    row = 0;
                    _a.label = 1;
                case 1:
                    if (!(row < this.height)) return [3 /*break*/, 6];
                    column = 0;
                    _a.label = 2;
                case 2:
                    if (!(column < this.width)) return [3 /*break*/, 5];
                    x = -Math.floor(row / 2) + column;
                    return [4 /*yield*/, new hex_1.Hex(x, row)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    column++;
                    return [3 /*break*/, 2];
                case 5:
                    row++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    };
    WorldMap.fromJson = function (json) {
        return new WorldMap({ width: json.width, height: json.height, mountains: json.mountains.map(hex_1.Hex.fromJson) });
    };
    return WorldMap;
}());
exports.WorldMap = WorldMap;


/***/ }),

/***/ "./src/world/world-state.ts":
/*!**********************************!*\
  !*** ./src/world/world-state.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldState = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var world_map_1 = __webpack_require__(/*! ./world-map */ "./src/world/world-map.ts");
var unit_1 = __webpack_require__(/*! ./unit */ "./src/world/unit.ts");
var types_1 = __webpack_require__(/*! ../util/types */ "./src/util/types.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/world/player.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var world_event_evaluator_1 = __webpack_require__(/*! ./world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var WorldState = /** @class */ (function () {
    function WorldState(_a) {
        var _this = this;
        var turn = _a.turn, map = _a.map, units = _a.units, players = _a.players, gameOverInfo = _a.gameOverInfo, _b = _a.worldLog, worldLog = _b === void 0 ? [] : _b;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.turn, turn = _c === void 0 ? _this.turn : _c, _d = _b.map, map = _d === void 0 ? _this.map : _d, _e = _b.units, units = _e === void 0 ? _this.units : _e, _f = _b.players, players = _f === void 0 ? _this.players : _f, _g = _b.gameOverInfo, gameOverInfo = _g === void 0 ? types_1.toMaybe(_this.gameOverInfo) : _g, _h = _b.worldLog, worldLog = _h === void 0 ? _this.worldLog : _h;
            return new WorldState({ turn: turn, map: map, units: units, players: players, gameOverInfo: types_1.toOption(gameOverInfo), worldLog: worldLog });
        };
        this.getPlayerIds = function () { return _this.players.map(function (player) { return player.id; }); };
        this.isPlayerDefeated = function (playerId) { return _this.getUnitsForPlayer(playerId).length === 0; };
        this.canPlayerAct = function (playerId) {
            var _a;
            var endedTurn = (_a = _this.findPlayer(playerId)) === null || _a === void 0 ? void 0 : _a.endedTurn;
            return !endedTurn && R.any(function (unit) { return unit.hasUnspentActionPoints; }, _this.getUnitsForPlayer(playerId));
        };
        this.canAnyPlayerAct = function () { return R.any(function (player) { return _this.canPlayerAct(player.id); }, _this.players); };
        this.getUnitsForPlayer = function (playerId) { return _this.units.filter(function (unit) { return unit.playerId === playerId; }); };
        this.findPlayer = function (playerId) { return R.find(function (player) { return player.id === playerId; }, _this.players); };
        this.getPlayer = function (playerId) {
            var player = _this.findPlayer(playerId);
            if (!player) {
                throw "No player found with ID " + playerId;
            }
            return player;
        };
        this.findUnitById = function (unitId) { return R.find(function (unit) { return unit.id === unitId; }, _this.units); };
        this.getUnitById = function (unitId) {
            var unit = _this.findUnitById(unitId);
            if (!unit) {
                throw "No unit found with ID " + unitId;
            }
            return unit;
        };
        this.findUnitInLocation = function (hex) { return R.find(function (unit) { return unit.location.equals(hex); }, _this.units); };
        this.replaceUnit = function (unitId, unit) {
            return _this.copy({
                units: R.append(unit, R.filter(function (unit) { return unit.id !== unitId; }, _this.units)),
            });
        };
        this.removeUnit = function (unitId) {
            return _this.copy({ units: R.filter(function (unit) { return unit.id !== unitId; }, _this.units) });
        };
        this.updatePlayer = function (playerId, modify) {
            var player = _this.findPlayer(playerId);
            if (!player)
                throw "No player found with ID " + playerId;
            return _this.replacePlayer(playerId, modify(player));
        };
        this.setPlayerName = function (playerId, name) {
            return _this.updatePlayer(playerId, function (player) { return player.copy({ name: name }); });
        };
        this.replacePlayer = function (playerId, player) {
            assert(playerId === player.id);
            return _this.copy({
                players: R.append(player, R.filter(function (player) { return player.id !== playerId; }, _this.players)),
            });
        };
        this.addPlayer = function (player) { return _this.copy({ players: R.append(player, _this.players) }); };
        this.removePlayer = function (playerId) {
            return _this.copy({ players: _this.players.filter(function (player) { return player.id !== playerId; }) });
        };
        this.toJson = function () { return ({
            turn: _this.turn,
            map: _this.map.toJson(),
            units: _this.units.map(function (unit) { return unit.toJson(); }),
            players: _this.players.map(function (player) { return player.toJson(); }),
            gameOverInfo: _this.gameOverInfo,
            worldLog: _this.worldLog,
        }); };
        this.isValidPlayerId = function (playerId) { return R.any(function (player) { return player.id === playerId; }, _this.players); };
        this.gameOver = function (victor) { return _this.copy({ gameOverInfo: types_1.just({ victor: victor }) }); };
        this.applyEvent = function (event) { return world_event_evaluator_1.applyEvent(_this, event); };
        this.applyEvents = function (events) {
            var e_1, _a;
            var state = _this;
            try {
                for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                    var event_1 = events_1_1.value;
                    state = state.applyEvent(event_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return state;
        };
        this.addWorldLog = function (message) { return _this.copy({ worldLog: R.append(message, _this.worldLog) }); };
        this.updateWorldMap = function (modify) { return _this.copy({ map: modify(_this.map) }); };
        this.newTurn = function () {
            return _this.copy({
                turn: _this.turn + 1,
                units: _this.units.map(function (unit) { return unit.refreshActionPoints(); }),
                players: _this.players.map(function (player) { return player.copy({ endedTurn: false }); }),
            });
        };
        this.getSortedPlayers = function () { return R.sortBy(function (player) { return player.id; }, _this.players); };
        this.turn = turn;
        this.map = map;
        this.units = units;
        this.players = players;
        this.gameOverInfo = gameOverInfo;
        this.worldLog = worldLog;
        assert(turn >= 0);
    }
    Object.defineProperty(WorldState.prototype, "gameHasStarted", {
        get: function () {
            return this.turn > 0;
        },
        enumerable: false,
        configurable: true
    });
    WorldState.fromJson = function (json) {
        return new WorldState({
            turn: json.turn,
            map: world_map_1.WorldMap.fromJson(json.map),
            units: json.units.map(function (unit) { return unit_1.Unit.fromJson(unit); }),
            players: json.players.map(function (unit) { return player_1.Player.fromJson(unit); }),
            gameOverInfo: json.gameOverInfo,
            worldLog: json.worldLog,
        });
    };
    return WorldState;
}());
exports.WorldState = WorldState;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvdXJsLWluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb2xvdXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY29tYmluZWQtc3RhdGUtbWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvY3JlYXRlZC1sb2JieS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LWRpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9jYWwtZ2FtZS1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvY2FsLXN0b3JhZ2UvbG9jYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUva2V5Ym9hcmQtbWFwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvbWFwLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3RleHRzLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3VpLWJvcmRlci1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS91bml0LWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51L21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmltYXJ5LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hc3luYy11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tc2VyaWFsaXNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9waGFzZXIvdHdlZW4tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcmFuZG9tLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvYWN0aW9uLXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGV4LWRpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oaXQtcG9pbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3VuaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7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RyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0NBQ25CLENBQUMsRUFIOEMsQ0FHOUM7QUFFVyxpQkFBUyxHQUFHLFVBQUMsS0FBWTtJQUNwQyxJQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0IsT0FBTyxLQUFLLENBQUMsSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFNLEtBQUssR0FBRyxVQUFDLEdBQVE7SUFDckIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLO1FBQUUsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQzNELElBQUksS0FBSyxHQUFHLEtB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QUF2S1ksZ0NBQVUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IERleGllLCB7IENvbGxlY3Rpb24gfSBmcm9tICdkZXhpZSdcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uLCBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcblxuZXhwb3J0IGludGVyZmFjZSBXb3JsZEV2ZW50UmVjb3JkIHtcbiAgZ2FtZUlkOiBHYW1lSWRcbiAgZXZlbnQ6IGFueSAvLyBzZXJpYWxpc2VkIFdvcmxkRXZlbnRcbn1cblxuZXhwb3J0IGNsYXNzIExsYW1hRGV4aWUgZXh0ZW5kcyBEZXhpZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICB3b3JsZEV2ZW50czogRGV4aWUuVGFibGU8V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPlxufVxuXG5leHBvcnQgY29uc3Qgb3BlbldvcmxkRXZlbnREYiA9IGFzeW5jICgpOiBQcm9taXNlPFdvcmxkRXZlbnREYj4gPT4ge1xuICBjb25zdCBkZXhpZSA9IG5ldyBEZXhpZSgnbGxhbWEtd2FycycpXG4gIGRleGllLnZlcnNpb24oMSkuc3RvcmVzKHtcbiAgICB3b3JsZEV2ZW50czogJysrLGdhbWVJZCcsXG4gIH0pXG4gIGF3YWl0IGRleGllLm9wZW4oKVxuICByZXR1cm4gbmV3IFdvcmxkRXZlbnREYig8TGxhbWFEZXhpZT5kZXhpZSlcbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkRXZlbnREYiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGV4aWU6IExsYW1hRGV4aWVcblxuICBjb25zdHJ1Y3RvcihkZXhpZTogTGxhbWFEZXhpZSkge1xuICAgIHRoaXMuZGV4aWUgPSBkZXhpZVxuICB9XG5cbiAgcHVibGljIHN0b3JlID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCBldmVudDogV29ybGRFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMuYWRkKHtcbiAgICAgIGdhbWVJZCxcbiAgICAgIGV2ZW50OiBzZXJpYWxpc2VUb0pzb24oZXZlbnQpLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2V0RXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8V29ybGRFdmVudFtdPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpLnRvQXJyYXkoKVxuICAgIHJldHVybiByZWNvcmRzLm1hcCgocmVjb3JkKSA9PiBkZXNlcmlhbGlzZUZyb21Kc29uKHJlY29yZC5ldmVudCkpXG4gIH1cblxuICBwdWJsaWMgaGFzRXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHRoaXMucXVlcnlFdmVudHNCeUdhbWVJZChnYW1lSWQpLmZpcnN0KClcbiAgICByZXR1cm4gcmVjb3JkICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIHByaXZhdGUgcXVlcnlFdmVudHNCeUdhbWVJZCA9IChnYW1lSWQ6IHN0cmluZyk6IENvbGxlY3Rpb248V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPiA9PlxuICAgIHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpXG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aFxufVxuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcydcbmltcG9ydCBUZXh0RWRpdFBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdGV4dGVkaXQtcGx1Z2luLmpzJ1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ0xsYW1hIFdhcnMnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcGFyZW50OiAnZ2FtZScsXG4gIGRvbToge1xuICAgIGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gIHBsdWdpbnM6IHtcbiAgICBnbG9iYWw6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmV4VGV4dEVkaXQnLFxuICAgICAgICBwbHVnaW46IFRleHRFZGl0UGx1Z2luLFxuICAgICAgICBzdGFydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICBnYW1lLnNjYWxlLnJlZnJlc2goKVxufSlcbiIsImV4cG9ydCBjb25zdCBJbWFnZUtleXMgPSB7XG4gIExMQU1BXzE6ICdsbGFtYS0xJyxcbiAgTExBTUFfMjogJ2xsYW1hLTInLFxuICBMTEFNQV8zOiAnbGxhbWEtMycsXG4gIExMQU1BXzQ6ICdsbGFtYS00JyxcbiAgTExBTUFfRUFUXzE6ICdsbGFtYS1lYXQtMScsXG4gIExMQU1BX0VBVF8yOiAnbGxhbWEtZWF0LTInLFxuICBMTEFNQV9FQVRfMzogJ2xsYW1hLWVhdC0zJyxcbiAgTExBTUFfRUFUXzQ6ICdsbGFtYS1lYXQtNCcsXG4gIEhPVVJHTEFTUzogJ2hvdXJnbGFzcycsXG4gIEdSQVNTOiAnZ3Jhc3MnLFxuICBTUElUOiAnc3BpdCcsXG4gIE1PVU5UQUlOOiAnbW91bnRhaW4nLFxuICBDUk9XTjogJ2Nyb3duJyxcbiAgQk9SREVSX1RPUF9MRUZUOiAnYm9yZGVyLXRvcC1sZWZ0JyxcbiAgQk9SREVSX0JPVFRPTV9MRUZUOiAnYm9yZGVyLWJvdHRvbS1sZWZ0JyxcbiAgQk9SREVSX1RPUF9SSUdIVDogJ2JvcmRlci10b3AtcmlnaHQnLFxuICBCT1JERVJfQk9UVE9NX1JJR0hUOiAnYm9yZGVyLWJvdHRvbS1yaWdodCcsXG4gIEJPUkRFUl9IT1JJWk9OVEFMOiAnYm9yZGVyLWhvcml6b250YWwnLFxuICBCT1JERVJfVkVSVElDQUw6ICdib3JkZXItdmVydGljYWwnLFxuICBCTEFOS19CVVRUT046ICdibGFuay1idXR0b24nLFxuICBCTEFOS19CVVRUT05fUFJFU1NFRDogJ2JsYW5rLWJ1dHRvbi1wcmVzc2VkJyxcbiAgREVMRVRFX0JVVFRPTl8xOiAnZGVsZXRlLWJ1dHRvbi0xJyxcbiAgREVMRVRFX0JVVFRPTl8yOiAnZGVsZXRlLWJ1dHRvbi0yJyxcbn1cblxuZXhwb3J0IGNvbnN0IEF1ZGlvS2V5cyA9IHtcbiAgQVRUQUNLXzE6ICdhdHRhY2sxJyxcbiAgQVRUQUNLXzI6ICdhdHRhY2syJyxcbiAgQVRUQUNLXzM6ICdhdHRhY2szJyxcbiAgREVBVEg6ICdkZWF0aCcsXG4gIFdBTEs6ICd3YWxrJyxcbiAgTkVXX1RVUk46ICduZXctdHVybicsXG4gIFBMQVlFUl9ERUZFQVRFRDogJ3BsYXllci1kZWZlYXRlZCcsXG4gIFBMQVlFUl9KT0lORURfTE9CQlk6ICdwbGF5ZXItZGVmZWF0ZWQnLFxuICBWSUNUT1JZX01VU0lDOiAndmljdG9yeS1tdXNpYycsXG4gIENMSUNLOiAnY2xpY2snLFxuICBTUElUOiAnc3BpdCcsXG59XG5cbmV4cG9ydCBjb25zdCBBTExfQVVESU9fS0VZUyA9IFtcbiAgQXVkaW9LZXlzLkFUVEFDS18xLFxuICBBdWRpb0tleXMuQVRUQUNLXzIsXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMyxcbiAgQXVkaW9LZXlzLkRFQVRILFxuICBBdWRpb0tleXMuV0FMSyxcbiAgQXVkaW9LZXlzLk5FV19UVVJOLFxuICBBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVELFxuICBBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSxcbiAgQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsXG4gIEF1ZGlvS2V5cy5DTElDSyxcbiAgQXVkaW9LZXlzLlNQSVQsXG5dXG4iLCJpbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVJZCwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTUFJTl9NRU5VX1NDRU5FX0tFWSB9IGZyb20gJy4uL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiwgV29ybGRFdmVudERiIH0gZnJvbSAnLi4vLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IHsgZ2V0VXJsSW5mbywgc2V0VXJsSW5mbywgVXJsSW5mbyB9IGZyb20gJy4vdXJsLWluZm8nXG5pbXBvcnQgRmlsZUNvbmZpZyA9IFBoYXNlci5UeXBlcy5Mb2FkZXIuRmlsZUNvbmZpZ1xuXG5leHBvcnQgY29uc3QgQk9PVF9TQ0VORV9LRVkgPSAnQm9vdCdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEJPT1RfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjVcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDBcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwXG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIDEwLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCxcbiAgICAgIDB4ODg4ODg4LFxuICAgIClcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNClcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlXG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKVxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlOiBGaWxlQ29uZmlnKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSlcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKVxuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpXG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5sYXVuY2hHYW1lKClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkQXNzZXRzKClcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoR2FtZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB1cmxJbmZvID0gZ2V0VXJsSW5mbygpXG4gICAgaWYgKHVybEluZm8pIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUdhbWUodXJsSW5mbylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydChNQUlOX01FTlVfU0NFTkVfS0VZKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUdhbWUgPSBhc3luYyAodXJsSW5mbzogVXJsSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZCA9IHVybEluZm8uZ2FtZUlkXG4gICAgY29uc3QgcGxheWVySWQgPSB1cmxJbmZvLnBsYXllcklkXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSBhd2FpdCB3b3JsZEV2ZW50RGIuaGFzRXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlc3RvcmVHYW1lQXNTZXJ2ZXIoZ2FtZUlkLCB3b3JsZEV2ZW50RGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUNsaWVudChnYW1lSWQsIHBsYXllcklkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUNsaWVudCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgcGxheWVySWQ6IE9wdGlvbjxQbGF5ZXJJZD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBsZXQgY2xpZW50XG4gICAgdHJ5IHtcbiAgICAgIGNsaWVudCA9IGF3YWl0IENsaWVudC5jb25uZWN0KGdhbWVJZClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNob3dNZXNzYWdlKCdVbmFibGUgdG8gam9pbiBnYW1lLCBjb3VsZCBub3QgY29ubmVjdCB0byBzZXJ2ZXIuJylcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAocGxheWVySWQpIHtcbiAgICAgIHRoaXMucmVqb2luQXNDbGllbnQoY2xpZW50LCBnYW1lSWQsIHBsYXllcklkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5Bc0NsaWVudCA9IGFzeW5jIChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBqb2luUmVzdWx0ID0gYXdhaXQgY2xpZW50LmpvaW4oKVxuICAgIGlmIChqb2luUmVzdWx0KSB7XG4gICAgICBjb25zdCB7IHBsYXllcklkIH0gPSBqb2luUmVzdWx0XG4gICAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkLCBwbGF5ZXJJZCB9KVxuICAgICAgdGhpcy5qb2luR2FtZShjbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd01lc3NhZ2UoJ1VuYWJsZSB0byBqb2luIGdhbWUgYXMgaXQgaGFzIGFscmVhZHkgc3RhcnRlZC4nKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd01lc3NhZ2UgPSAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmdhbWUuc2NhbGUuZ2FtZVNpemVcbiAgICB0aGlzLmFkZFxuICAgICAgLnRleHQod2lkdGggLyAyLCBoZWlnaHQgLyAyLCBtZXNzYWdlKVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoMjQpXG4gIH1cblxuICBwcml2YXRlIHJlam9pbkFzQ2xpZW50ID0gYXN5bmMgKGNsaWVudDogQ2xpZW50LCBnYW1lSWQ6IEdhbWVJZCwgcGxheWVySWQ6IFBsYXllcklkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IGF3YWl0IGNsaWVudC5yZWpvaW4ocGxheWVySWQpXG4gICAgaWYgKHdvcmxkU3RhdGUpIHtcbiAgICAgIHRoaXMuam9pbkdhbWUoY2xpZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBpbmZvcm0gY2xpZW50XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luR2FtZSA9IChjbGllbnQ6IENsaWVudCkgPT4ge1xuICAgIGlmIChjbGllbnQud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50IH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IGNsaWVudCB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUdhbWVBc1NlcnZlciA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgd29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBzZXJ2ZXIgPSBhd2FpdCBTZXJ2ZXIucmVzdG9yZUdhbWUod29ybGRFdmVudERiLCBnYW1lSWQpXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IHNlcnZlci53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgLy8gU291cmNlOiBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2xwYy1zdHlsZS1mYXJtLWFuaW1hbHNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BXzEsICdhc3NldHMvc3ByaXRlcy9sbGFtYS9sbGFtYV8xNS5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfMiwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hL2xsYW1hXzE0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV8zLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEvbGxhbWFfMTMucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BXzQsICdhc3NldHMvc3ByaXRlcy9sbGFtYS9sbGFtYV8xMi5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfRUFUXzEsICdhc3NldHMvc3ByaXRlcy9sbGFtYS1lYXQvbGxhbWFfZWF0XzEyLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV9FQVRfMiwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hLWVhdC9sbGFtYV9lYXRfMTMucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BX0VBVF8zLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEtZWF0L2xsYW1hX2VhdF8xNC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfRUFUXzQsICdhc3NldHMvc3ByaXRlcy9sbGFtYS1lYXQvbGxhbWFfZWF0XzE1LnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3JwZy1ndWktY29uc3RydWN0aW9uLWtpdC12MTBcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkJPUkRFUl9UT1BfTEVGVCwgJ2Fzc2V0cy9zcHJpdGVzL2JvcmRlci9ib3JkZXItdG9wLWxlZnQucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkJPUkRFUl9UT1BfUklHSFQsICdhc3NldHMvc3ByaXRlcy9ib3JkZXIvYm9yZGVyLXRvcC1yaWdodC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQk9SREVSX0JPVFRPTV9MRUZULCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci1ib3R0b20tbGVmdC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQk9SREVSX0JPVFRPTV9SSUdIVCwgJ2Fzc2V0cy9zcHJpdGVzL2JvcmRlci9ib3JkZXItYm90dG9tLXJpZ2h0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CT1JERVJfSE9SSVpPTlRBTCwgJ2Fzc2V0cy9zcHJpdGVzL2JvcmRlci9ib3JkZXItaG9yaXpvbnRhbC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQk9SREVSX1ZFUlRJQ0FMLCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci12ZXJ0aWNhbC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQkxBTktfQlVUVE9OLCAnYXNzZXRzL3Nwcml0ZXMvYmxhbmstYnV0dG9uLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CTEFOS19CVVRUT05fUFJFU1NFRCwgJ2Fzc2V0cy9zcHJpdGVzL2JsYW5rLWJ1dHRvbi1wcmVzc2VkLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hvdXJnbGFzcy1pY29uXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5IT1VSR0xBU1MsICdhc3NldHMvc3ByaXRlcy9Ib3VyZ2xhc3MucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVzLXRpbGVzXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5HUkFTUywgJ2Fzc2V0cy9zcHJpdGVzL2dyYXNzMi5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvcHVkZGxlLWNvcnBzZXNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLlNQSVQsICdhc3NldHMvc3ByaXRlcy9wdWRkbGVfbGlnaHRfYmx1ZS5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvd29ybGQtbWFwLXRpbGVzXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5NT1VOVEFJTiwgJ2Fzc2V0cy9zcHJpdGVzL21vdW50YWluc19vdXRlci5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ2FtZS1pY29ucy0wXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5DUk9XTiwgJ2Fzc2V0cy9zcHJpdGVzL2Nyb3duLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzI1MC1odWQtYW5kLWludGVyZmFjZS1pY29ucy11bmtub3duLWhvcml6b25zXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5ERUxFVEVfQlVUVE9OXzEsICdhc3NldHMvc3ByaXRlcy9kZWxldGUtYnV0dG9uLTEucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkRFTEVURV9CVVRUT05fMiwgJ2Fzc2V0cy9zcHJpdGVzL2RlbGV0ZS1idXR0b24tMi5wbmcnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC8zNy1oaXRzcHVuY2hlc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzEsICdhc3NldHMvYXVkaW8vaGl0MTQubXAzLm1wMycpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMiwgJ2Fzc2V0cy9hdWRpby9oaXQxNy5tcDMubXAzJylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18zLCAnYXNzZXRzL2F1ZGlvL2hpdDE4Lm1wMy5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbWFsZS1ncnVudHllbGxpbmctc291bmRzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ERUFUSCwgJ2Fzc2V0cy9hdWRpby8xeWVsbDQud2F2JylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLWZvb3Qtc3RlcC1zb3VuZHMteW8tZnJhbmtpZVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuV0FMSywgJ2Fzc2V0cy9hdWRpby9zZnhfc3RlcF9ncmFzc19sLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC91aS1zb3VuZC1lZmZlY3RzLXBhY2tcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLk5FV19UVVJOLCAnYXNzZXRzL2F1ZGlvL01FTlUgQV9TZWxlY3Qud2F2JylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlksICdhc3NldHMvYXVkaW8vTUVOVSBCX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVELCAnYXNzZXRzL2F1ZGlvL01FU1NBR0UtQl9EZWNsaW5lLndhdicpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2NsZWFyLXNraWVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDLCAnYXNzZXRzL2F1ZGlvL0NsZWFyIFNraWVzLm1wMycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2d1aS1zb3VuZC1lZmZlY3RzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5DTElDSywgJ2Fzc2V0cy9hdWRpby9jbGljay53YXYnKVxuICAgIC8vaHR0cHM6Ly9mcmVlc291bmQub3JnL3Blb3BsZS90dmxhdWRpby9zb3VuZHMvMjY3ODk3L1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuU1BJVCwgJ2Fzc2V0cy9hdWRpby9zcGl0LndhdicpXG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFVybEluZm8ge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBwbGF5ZXJJZD86IFBsYXllcklkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVcmxJbmZvID0gKCk6IE9wdGlvbjxVcmxJbmZvPiA9PiB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaFxuICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBwYXRoID0gaGFzaC5zdWJzdHIoMSlcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJylcbiAgY29uc3QgZ2FtZUlkID0gc2VnbWVudHNbMF1cbiAgY29uc3QgcGxheWVySWQgPSBzZWdtZW50cy5sZW5ndGggPiAxID8gTnVtYmVyLnBhcnNlSW50KHNlZ21lbnRzWzFdKSA6IHVuZGVmaW5lZFxuICByZXR1cm4geyBnYW1lSWQsIHBsYXllcklkIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFVybEluZm8gPSAodXJsSW5mbzogVXJsSW5mbyk6IHZvaWQgPT4ge1xuICBsZXQgaGFzaCA9IHVybEluZm8uZ2FtZUlkXG4gIGlmICh1cmxJbmZvLnBsYXllcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICBoYXNoICs9ICcvJyArIHVybEluZm8ucGxheWVySWRcbiAgfVxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hcbn1cbiIsImltcG9ydCBDb2xvciA9IFBoYXNlci5EaXNwbGF5LkNvbG9yXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcblxuZXhwb3J0IHR5cGUgQ29sb3VyU3RyaW5nID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb2xvdXJOdW1iZXIgPSBudW1iZXJcblxuZXhwb3J0IGNvbnN0IGNvbG91ck51bWJlciA9IChjb2xvdXJTdHJpbmc6IENvbG91clN0cmluZyk6IENvbG91ck51bWJlciA9PiBDb2xvci5IZXhTdHJpbmdUb0NvbG9yKGNvbG91clN0cmluZykuY29sb3JcblxuZXhwb3J0IGNvbnN0IEhFQUxUSF9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRU1QVFlfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZmZmJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRlVMTF9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM0ZGYwMzcnKVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjY2NmZmJlJylcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkMDgnKVxuZXhwb3J0IGNvbnN0IFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjOWRmMWU3JylcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9URVhUX0NPTE9VUiA9ICcjY2NjYzAwJ1xuZXhwb3J0IGNvbnN0IEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiA9ICcjZmZmZjAwJ1xuXG5jb25zdCBQTEFZRVJfVElOVFMgPSBbJyNmZmJiYmInLCAnI2JiYmJmZicsICcjYmJmZmJiJywgJyNiYmZmZmYnLCAnI2ZmZmZiYicsICcjZmZiYmZmJywgJyNmZmZmZmYnLCAnI2JiYmJiYiddLm1hcChcbiAgY29sb3VyTnVtYmVyLFxuKVxuXG5leHBvcnQgY29uc3QgZ2V0UGxheWVyVGludCA9IChwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gIFBMQVlFUl9USU5UU1soUExBWUVSX1RJTlRTLmxlbmd0aCArIHBsYXllcklkIC0gMSkgJSBQTEFZRVJfVElOVFMubGVuZ3RoXVxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbmV4cG9ydCBjbGFzcyBDb21iaW5lZFN0YXRlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBmaW5kU2VsZWN0ZWRVbml0ID0gKCk6IE9wdGlvbjxVbml0PiA9PlxuICAgIHRoaXMuc2VsZWN0ZWRIZXggPyB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbih0aGlzLnNlbGVjdGVkSGV4KSA6IHVuZGVmaW5lZFxuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRIZXgoKTogT3B0aW9uPEhleD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMgJiYgIXRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVyblxuXG4gIHB1YmxpYyB1bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENhbk1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBoZXg6IEhleCk6IGJvb2xlYW4gPT5cbiAgICB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSh1bml0KSAmJlxuICAgIGhleC5pc0FkamFjZW50VG8odW5pdC5sb2NhdGlvbikgJiZcbiAgICB0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSAmJlxuICAgICF0aGlzLndvcmxkU3RhdGUubWFwLmlzTW91bnRhaW4oaGV4KSAmJlxuICAgICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgLyoqXG4gICAqIEByZXR1cm4gdGhlIHVuaXQgaW4gdGhlIGhleCB0byBhdHRhY2ssIGlmIGFuIGF0dGFjayBpcyBwb3NzaWJsZSwgZWxzZSB1bmRlZmluZWQuXG4gICAqL1xuICBwdWJsaWMgdW5pdENhbkF0dGFja0hleCA9ICh1bml0OiBVbml0LCBsb2NhdGlvbjogSGV4LCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24obG9jYXRpb24pXG4gICAgaWYgKFxuICAgICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSAmJlxuICAgICAgdGFyZ2V0VW5pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0YXJnZXRVbml0LnBsYXllcklkICE9PSB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkICYmXG4gICAgICBjYW5BdHRhY2tPY2N1cihhdHRhY2tUeXBlLCB0aGlzLndvcmxkU3RhdGUubWFwLCB1bml0LmxvY2F0aW9uLCBsb2NhdGlvbilcbiAgICApXG4gICAgICByZXR1cm4gdGFyZ2V0VW5pdFxuICB9XG5cbiAgcHVibGljIGZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzID0gKHVuaXRJZD86IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgY2FuZGlkYXRlVW5pdHMgPSBSLnNvcnRCeShcbiAgICAgICh1bml0KSA9PiB1bml0LmlkLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLmdldFVuaXRzRm9yUGxheWVyKHRoaXMucGxheWVySWQpLmZpbHRlcigodW5pdCkgPT4gdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzKSxcbiAgICApXG4gICAgaWYgKHVuaXRJZClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgPiB1bml0SWQpKSA/P1xuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkIDwgdW5pdElkKSlcbiAgICAgIClcbiAgICBlbHNlIHJldHVybiBSLmhlYWQoY2FuZGlkYXRlVW5pdHMpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudFBsYXllciA9ICgpOiBQbGF5ZXIgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMud29ybGRTdGF0ZS5maW5kUGxheWVyKHRoaXMucGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBDb3VsZCBub3QgZmluZCBwbGF5ZXIgd2l0aCBpZCAke3RoaXMucGxheWVySWR9YFxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5cbmV4cG9ydCBjb25zdCBjZW50ZXJQb2ludCA9IChoZXg6IEhleCk6IFBvaW50ID0+ICh7XG4gIHg6IGhleC54ICogTWF0aC5zcXJ0KDMpICsgKGhleC55ICogTWF0aC5zcXJ0KDMpKSAvIDIsXG4gIHk6IChoZXgueSAqIDMpIC8gMixcbn0pXG5cbmV4cG9ydCBjb25zdCBmcm9tUG9pbnQgPSAocG9pbnQ6IFBvaW50KTogSGV4ID0+IHtcbiAgY29uc3QgeCA9IChwb2ludC54ICogTWF0aC5zcXJ0KDMpKSAvIDMgLSBwb2ludC55IC8gM1xuICBjb25zdCB5ID0gKDIgKiBwb2ludC55KSAvIDNcbiAgcmV0dXJuIHJvdW5kKG5ldyBIZXgoeCwgeSkpXG59XG5cbmNvbnN0IHJvdW5kID0gKGhleDogSGV4KTogSGV4ID0+IHtcbiAgY29uc3QgcnggPSBNYXRoLnJvdW5kKGhleC54KVxuICBjb25zdCByeSA9IE1hdGgucm91bmQoaGV4LnkpXG4gIGNvbnN0IHJ6ID0gTWF0aC5yb3VuZChoZXgueilcblxuICBjb25zdCB4RGlmZiA9IE1hdGguYWJzKHJ4IC0gaGV4LngpXG4gIGNvbnN0IHlEaWZmID0gTWF0aC5hYnMocnkgLSBoZXgueSlcbiAgY29uc3QgekRpZmYgPSBNYXRoLmFicyhyeiAtIGhleC55KVxuXG4gIGlmICh4RGlmZiA+IHlEaWZmICYmIHhEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KC1yeSAtIHJ6LCByeSlcbiAgZWxzZSBpZiAoeURpZmYgPiB6RGlmZikgcmV0dXJuIG5ldyBIZXgocngsIC1yeCAtIHJ6KVxuICBlbHNlIHJldHVybiBuZXcgSGV4KHJ4LCByeSlcbn1cblxuY29uc3QgaGV4QW5nbGUgPSBNYXRoLlBJIC8gM1xuY29uc3QgaGV4T2Zmc2V0ID0gTWF0aC5QSSAvIDZcblxuY29uc3QgaGV4Q29ybmVyID0gKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlciwgaTogbnVtYmVyKTogUG9pbnQgPT4ge1xuICBjb25zdCBhbmdsZVJhZGlhbnMgPSBoZXhBbmdsZSAqIGkgLSBoZXhPZmZzZXRcbiAgY29uc3QgeCA9IGNlbnRlci54ICsgc2l6ZSAqIE1hdGguY29zKGFuZ2xlUmFkaWFucylcbiAgY29uc3QgeSA9IGNlbnRlci55ICsgc2l6ZSAqIE1hdGguc2luKGFuZ2xlUmFkaWFucylcbiAgcmV0dXJuIHsgeCwgeSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogaGV4Q29ybmVycyhjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPFBvaW50PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgeWllbGQgaGV4Q29ybmVyKGNlbnRlciwgc2l6ZSwgaSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWFwSGVpZ2h0ID0gKG1hcDogV29ybGRNYXApOiBudW1iZXIgPT4gKG1hcC5oZWlnaHQgKiAzKSAvIDJcblxuZXhwb3J0IGNvbnN0IGhleFdpZHRoID0gKGhleFNpemU6IG51bWJlcik6IG51bWJlciA9PiBoZXhTaXplICogTWF0aC5zcXJ0KDMpXG4iLCJpbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL2Jvb3QvYm9vdC1zY2VuZSdcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUvbWFpbi1tZW51LXNjZW5lJ1xuaW1wb3J0IHsgTG9iYnlTY2VuZSB9IGZyb20gJy4vbG9iYnkvbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBkZWZhdWx0IFtCb290U2NlbmUsIEdhbWVTY2VuZSwgTWFpbk1lbnVTY2VuZSwgTG9iYnlTY2VuZV1cbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBMb2JieURpc3BsYXlPYmplY3RzIH0gZnJvbSAnLi9sb2JieS1kaXNwbGF5LW9iamVjdHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvd29ybGQtc3RhdGUtb3duZXInXG5pbXBvcnQgeyBmaXJlQW5kRm9yZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbC9hc3luYy11dGlsJ1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWwtc3RvcmFnZS9sb2NhbCdcblxuZXhwb3J0IGNsYXNzIENyZWF0ZWRMb2JieVNjZW5lIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IGxvYmJ5RGlzcGxheU9iamVjdHM6IExvYmJ5RGlzcGxheU9iamVjdHNcbiAgcHJpdmF0ZSBsaXN0ZW5lcj86IFdvcmxkRXZlbnRMaXN0ZW5lclxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICB0aGlzLnBsYXllcklkID0gc2VydmVyT3JDbGllbnQucGxheWVySWRcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgIHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cyA9IHRoaXMubWFrZUxvYmJ5RGlzcGxheU9iamVjdHMoc2NlbmUsIHRoaXMucGxheWVySWQpXG4gICAgaWYgKHNlcnZlck9yQ2xpZW50IGluc3RhbmNlb2YgQ2xpZW50KSB7XG4gICAgICB0aGlzLmFjdEFzQ2xpZW50KHNlcnZlck9yQ2xpZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdEFzU2VydmVyKHNlcnZlck9yQ2xpZW50KVxuICAgIH1cbiAgICB0aGlzLnN5bmMoKVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlTG9iYnlEaXNwbGF5T2JqZWN0cyA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCBwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gICAgbmV3IExvYmJ5RGlzcGxheU9iamVjdHMoc2NlbmUsIHBsYXllcklkLCB0aGlzLmhhbmRsZVN0YXJ0R2FtZSwgdGhpcy5oYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lLCB0aGlzLmhhbmRsZUtpY2tQbGF5ZXIpXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHRoaXMuaGFuZGxlV29ybGRFdmVudChldmVudCwgY2xpZW50KVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdnYW1lU3RhcnRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuTkVXX1RVUk4pXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgc2VydmVyT3JDbGllbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXVuY2hHYW1lU2NlbmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlkpXG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoR2FtZVNjZW5lID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHtcbiAgICAgIHNlcnZlck9yQ2xpZW50OiB0aGlzLnNlcnZlck9yQ2xpZW50LFxuICAgIH1cbiAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVBsYXllck5hbWUgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgTG9jYWxTdG9yYWdlLnN0b3JlTmFtZShuYW1lKVxuICAgIHRoaXMuZGlzcGF0Y2hBY3Rpb24oeyB0eXBlOiAnY2hhbmdlUGxheWVyTmFtZScsIG5hbWUgfSlcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGF0Y2hBY3Rpb24gPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IHZvaWQgPT5cbiAgICBmaXJlQW5kRm9yZ2V0KCgpID0+IHRoaXMuc2VydmVyT3JDbGllbnQuc2VuZEFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pKVxuXG4gIHB1YmxpYyBzeW5jID0gKCk6IHZvaWQgPT4gdGhpcy5sb2JieURpc3BsYXlPYmplY3RzLnN5bmModGhpcy5zZXJ2ZXJPckNsaWVudC53b3JsZFN0YXRlKVxuXG4gIHByaXZhdGUgYWN0QXNTZXJ2ZXIgPSAoc2VydmVyOiBTZXJ2ZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVyID0gKGV2ZW50KSA9PiB0aGlzLmhhbmRsZVdvcmxkRXZlbnQoZXZlbnQsIHNlcnZlcilcbiAgICBzZXJ2ZXIuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gKCkgPT4gdGhpcy5kaXNwYXRjaEFjdGlvbih7IHR5cGU6ICdzdGFydEdhbWUnIH0pXG5cbiAgcHJpdmF0ZSBoYW5kbGVLaWNrUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCkgPT4ge1xuICAgIHRoaXMuZGlzcGF0Y2hBY3Rpb24oeyB0eXBlOiAna2lja1BsYXllcicsIHBsYXllcklkIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEF1ZGlvS2V5cywgSW1hZ2VLZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tICcuLi8uLi91aS9wcmltYXJ5LWJ1dHRvbidcbmltcG9ydCB7IGdldFBsYXllclRpbnQgfSBmcm9tICcuLi9jb2xvdXJzJ1xuXG5pbnRlcmZhY2UgUGxheWVyT2JqZWN0cyB7XG4gIG5hbWVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBsbGFtYTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxuICBraWNrQnV0dG9uPzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG59XG5cbmV4cG9ydCBjbGFzcyBMb2JieURpc3BsYXlPYmplY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHByaXZhdGUgcmVhZG9ubHkgb25TdGFydEdhbWU6IFZvaWRGdW5jdGlvblxuICBwcml2YXRlIHJlYWRvbmx5IG9uQ2hhbmdlUGxheWVyTmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZFxuICBwcml2YXRlIHJlYWRvbmx5IG9uS2lja1BsYXllcjogKHBsYXllcklkOiBQbGF5ZXJJZCkgPT4gdm9pZFxuXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVyT2JqZWN0czogTWFwPFBsYXllcklkLCBQbGF5ZXJPYmplY3RzPiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGhvc3RDcm93bjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRHYW1lQnV0dG9uPzogUHJpbWFyeUJ1dHRvblxuICBwcml2YXRlIHJlYWRvbmx5IHdhaXRpbmdGb3JIb3N0VGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICBwbGF5ZXJJZDogUGxheWVySWQsXG4gICAgb25TdGFydEdhbWU6IFZvaWRGdW5jdGlvbixcbiAgICBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgb25LaWNrUGxheWVyOiAocGxheWVySWQ6IFBsYXllcklkKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm9uU3RhcnRHYW1lID0gb25TdGFydEdhbWVcbiAgICB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZSA9IG9uQ2hhbmdlUGxheWVyTmFtZVxuICAgIHRoaXMub25LaWNrUGxheWVyID0gb25LaWNrUGxheWVyXG4gICAgdGhpcy5zY2VuZS5hZGQudGV4dCgxNTUsIDUwLCAnTGxhbWEgV2FycycsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI2KVxuICAgIGlmIChwbGF5ZXJJZCA9PT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uID0gbmV3IFByaW1hcnlCdXR0b24odGhpcy5zY2VuZSwgMTAwLCAwLCAnU3RhcnQgR2FtZScsIHRoaXMuaGFuZGxlU3RhcnRHYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMTAwLCAwLCAnV2FpdGluZyBmb3IgaG9zdCB0byBzdGFydCB0aGUgZ2FtZS4uLicpXG4gICAgfVxuICAgIHRoaXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGtleTogJ2xsYW1hLXdhbGsnLFxuICAgICAgZnJhbWVzOiBbXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfMSB9IGFzIGFueSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8yIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfMyB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzQgfSxcbiAgICAgIF0sXG4gICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICByZXBlYXQ6IC0xLFxuICAgIH0pXG4gICAgdGhpcy5ob3N0Q3Jvd24gPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgzNzAsIDAsICdjcm93bicpLnNldFNjYWxlKDAuNilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgdGhpcy5vblN0YXJ0R2FtZSgpXG4gIH1cblxuICBwdWJsaWMgc3luYyA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy5jcmVhdGVBbmREZXN0cm95UGxheWVyT2JqZWN0cyh3b3JsZFN0YXRlKVxuICAgIGxldCB5ID0gMTAwXG4gICAgY29uc3Qgc29ydGVkUGxheWVycyA9IHdvcmxkU3RhdGUuZ2V0U29ydGVkUGxheWVycygpXG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2Ygc29ydGVkUGxheWVycykge1xuICAgICAgaWYgKHBsYXllci5pZCA9PT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgICAgdGhpcy5ob3N0Q3Jvd24uc2V0WSh5ICsgNSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgbmFtZVRleHQsIGxsYW1hLCBraWNrQnV0dG9uIH0gPSB0aGlzLmdldFBsYXllck9iamVjdHMocGxheWVyLmlkKVxuICAgICAgbmFtZVRleHQuc2V0VGV4dChwbGF5ZXIubmFtZSkuc2V0WSh5KVxuICAgICAgbGxhbWEuc2V0WSh5ICsgMTApXG4gICAgICBraWNrQnV0dG9uPy5zZXRZKHkgKyAxNSlcbiAgICAgIHkgKz0gNTBcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5zZXRZKHkpXG4gICAgfVxuICAgIGlmICh0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9ySG9zdFRleHQuc2V0WSh5KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyT2JqZWN0cyA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXJPYmplY3RzID0+IHtcbiAgICBjb25zdCBwbGF5ZXJPYmplY3RzID0gdGhpcy5wbGF5ZXJPYmplY3RzLmdldChwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllck9iamVjdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGxheWVyIG9iamVjdHMgZm91bmQgZm9yICR7cGxheWVySWR9YClcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllck9iamVjdHNcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQW5kRGVzdHJveVBsYXllck9iamVjdHMgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVpcmVkUGxheWVySWRzID0gd29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZHMgPSBBcnJheS5mcm9tKHRoaXMucGxheWVyT2JqZWN0cy5rZXlzKCkpXG5cbiAgICBjb25zdCBzdXJwbHVzUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKGN1cnJlbnRQbGF5ZXJJZHMsIHJlcXVpcmVkUGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2Ygc3VycGx1c1BsYXllcklkcykge1xuICAgICAgY29uc3QgeyBuYW1lVGV4dCwgbGxhbWEsIGtpY2tCdXR0b24gfSA9IHRoaXMuZ2V0UGxheWVyT2JqZWN0cyhwbGF5ZXJJZClcbiAgICAgIG5hbWVUZXh0LmRlc3Ryb3koKVxuICAgICAgbGxhbWEuZGVzdHJveSgpXG4gICAgICBraWNrQnV0dG9uPy5kZXN0cm95KClcbiAgICAgIHRoaXMucGxheWVyT2JqZWN0cy5kZWxldGUocGxheWVySWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2luZ1BsYXllcklkcyA9IFIuZGlmZmVyZW5jZShyZXF1aXJlZFBsYXllcklkcywgY3VycmVudFBsYXllcklkcylcbiAgICBmb3IgKGNvbnN0IHBsYXllcklkIG9mIG1pc3NpbmdQbGF5ZXJJZHMpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHdvcmxkU3RhdGUuZ2V0UGxheWVyKHBsYXllcklkKVxuICAgICAgdGhpcy5jcmVhdGVPYmplY3RzRm9yUGxheWVyKHBsYXllcilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU9iamVjdHNGb3JQbGF5ZXIgPSAocGxheWVyOiBQbGF5ZXIpID0+IHtcbiAgICBjb25zdCBuYW1lVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCgxNDAsIDAsIHBsYXllci5uYW1lLCB7XG4gICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgZml4ZWRXaWR0aDogMjAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBsYXllci5pZCA9PT0gdGhpcy5wbGF5ZXJJZCA/ICcjMzMzMzMzJyA6ICcjMDAwMDAwJyxcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmhhbmRsZVBsYXllclRleHRDbGljayhwbGF5ZXIsIG5hbWVUZXh0KSlcbiAgICBjb25zdCBsbGFtYSA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAuc3ByaXRlKDExMCwgMCwgSW1hZ2VLZXlzLkxMQU1BX0VBVF8xKVxuICAgICAgLnNldFNjYWxlKDAuNilcbiAgICAgIC5zZXRUaW50KGdldFBsYXllclRpbnQocGxheWVyLmlkKSlcbiAgICAgIC5wbGF5KCdsbGFtYS13YWxrJylcblxuICAgIGNvbnN0IGtpY2tCdXR0b24gPVxuICAgICAgcGxheWVyLmlkID09PSBIT1NUX1BMQVlFUl9JRCB8fCB0aGlzLnBsYXllcklkICE9PSBIT1NUX1BMQVlFUl9JRFxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHRoaXMuc2NlbmUuYWRkXG4gICAgICAgICAgICAuaW1hZ2UoMzcwLCAwLCBJbWFnZUtleXMuREVMRVRFX0JVVFRPTl8xKVxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IGtpY2tCdXR0b24/LnNldFRleHR1cmUoSW1hZ2VLZXlzLkRFTEVURV9CVVRUT05fMSkpXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ga2lja0J1dHRvbj8uc2V0VGV4dHVyZShJbWFnZUtleXMuREVMRVRFX0JVVFRPTl8yKSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICAgICAgICB0aGlzLm9uS2lja1BsYXllcihwbGF5ZXIuaWQpXG4gICAgICAgICAgICB9KVxuICAgIGNvbnN0IHBsYXllck9iamVjdHM6IFBsYXllck9iamVjdHMgPSB7IG5hbWVUZXh0LCBsbGFtYSwga2lja0J1dHRvbiB9XG4gICAgdGhpcy5wbGF5ZXJPYmplY3RzLnNldChwbGF5ZXIuaWQsIHBsYXllck9iamVjdHMpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllclRleHRDbGljayA9IChwbGF5ZXI6IFBsYXllciwgcGxheWVyVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQpOiB2b2lkID0+IHtcbiAgICBpZiAocGxheWVyLmlkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnNjZW5lLnBsdWdpbnMuZ2V0KCdyZXhUZXh0RWRpdCcpIGFzIGFueVxuICAgICAgcGx1Z2luLmVkaXQocGxheWVyVGV4dCwge1xuICAgICAgICBvbkNsb3NlOiAoKSA9PiB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZShwbGF5ZXJUZXh0LnRleHQpLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQ3JlYXRlZExvYmJ5U2NlbmUgfSBmcm9tICcuL2NyZWF0ZWQtbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBjb25zdCBMT0JCWV9TQ0VORV9LRVkgPSAnTG9iYnknXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9iYnlTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG59XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBMT0JCWV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBMb2JieVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50IH0gPSBzY2VuZURhdGFcbiAgICBuZXcgQ3JlYXRlZExvYmJ5U2NlbmUodGhpcywgc2VydmVyT3JDbGllbnQpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21haW4tZ2FtZS9tb2RlJ1xuaW1wb3J0IHsgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IHR5cGUgU2lkZWJhciA9ICdsb2cnIHwgJ3BsYXllcnMnXG5cbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVTdGF0ZSB7XG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBtb2RlOiBNb2RlXG4gIHJlYWRvbmx5IHNlbGVjdGVkSGV4OiBPcHRpb248SGV4PlxuICByZWFkb25seSBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyOiBudW1iZXJcbiAgcmVhZG9ubHkgc2lkZWJhcjogU2lkZWJhclxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwbGF5ZXJJZCxcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkSGV4LFxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSAwLFxuICAgIHNpZGViYXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBtb2RlOiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBPcHRpb248SGV4PlxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBudW1iZXJcbiAgICBzaWRlYmFyOiBTaWRlYmFyXG4gIH0pIHtcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgdGhpcy5zZWxlY3RlZEhleCA9IHNlbGVjdGVkSGV4XG4gICAgdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlclxuICAgIHRoaXMuc2lkZWJhciA9IHNpZGViYXJcbiAgICBhc3NlcnQoYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA+PSAwKVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBtb2RlID0gdGhpcy5tb2RlLFxuICAgIHNlbGVjdGVkSGV4ID0gdG9NYXliZSh0aGlzLnNlbGVjdGVkSGV4KSxcbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyLFxuICAgIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZD86IFBsYXllcklkXG4gICAgbW9kZT86IE1vZGVcbiAgICBzZWxlY3RlZEhleD86IE1heWJlPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gICAgc2lkZWJhcj86IFNpZGViYXJcbiAgfSA9IHt9KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICBuZXcgTG9jYWxHYW1lU3RhdGUoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXg6IHRvT3B0aW9uKHNlbGVjdGVkSGV4KSwgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciwgc2lkZWJhciB9KVxuXG4gIHB1YmxpYyBkZXNlbGVjdCA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZClcblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRIZXggPSAoc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+KTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUoc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcblxuICBwdWJsaWMgaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciArIDEgfSlcblxuICBwdWJsaWMgZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciAtIDEgfSlcbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSA9IG5ldyBMb2NhbEdhbWVTdGF0ZSh7XG4gIHBsYXllcklkOiAxLFxuICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gIHNpZGViYXI6ICdsb2cnLFxufSlcbiIsImltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5cbmNvbnN0IFBMQVlFUl9OQU1FX0tFWSA9ICdwbGF5ZXJOYW1lJ1xuXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlID0ge1xuICBzdG9yZU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQTEFZRVJfTkFNRV9LRVksIG5hbWUpLFxuICBmaW5kTmFtZTogKCk6IE9wdGlvbjxzdHJpbmc+ID0+IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQTEFZRVJfTkFNRV9LRVkpID8/IHVuZGVmaW5lZCxcbn1cbiIsImltcG9ydCB7IE1hcERpc3BsYXlPYmplY3QgfSBmcm9tICcuL21hcC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbml0RGlzcGxheU9iamVjdCB9IGZyb20gJy4vdW5pdC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IExvY2FsQWN0aW9uRGlzcGF0Y2hlciwgVGV4dHNEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi90ZXh0cy1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGZpcmVBbmRGb3JnZXQgfSBmcm9tICcuLi8uLi91dGlsL2FzeW5jLXV0aWwnXG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWVkID0gJ25vcm1hbCcgfCAncXVpY2snXG5cbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnbW92ZSdcbiAgdW5pdElkOiBVbml0SWRcbiAgZnJvbTogSGV4XG4gIHRvOiBIZXhcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21iYXRBbmltYXRpb25TcGVjIHtcbiAgdHlwZTogJ2NvbWJhdCdcbiAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZVxuICBhdHRhY2tlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbiAgZGVmZW5kZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWMgPSBNb3ZlQW5pbWF0aW9uU3BlYyB8IENvbWJhdEFuaW1hdGlvblNwZWNcblxuZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgbWFwRGlzcGxheU9iamVjdDogTWFwRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IHVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IHRleHRzRGlzcGxheU9iamVjdDogVGV4dHNEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIGFuaW1hdGlvbnM6IEFuaW1hdGlvblNwZWNbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0ID0gbmV3IE1hcERpc3BsYXlPYmplY3Qoc2NlbmUsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdCA9IG5ldyBUZXh0c0Rpc3BsYXlPYmplY3QoXG4gICAgICBzY2VuZSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgICApXG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnbGxhbWEtd2FsaycsXG4gICAgICBmcmFtZXM6IFtcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8xIH0gYXMgYW55LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzIgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8zIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfNCB9LFxuICAgICAgXSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSlcbiAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6ICdsbGFtYS1lYXQnLFxuICAgICAgZnJhbWVzOiBbXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzEgfSBhcyBhbnksXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzIgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV9FQVRfMyB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BX0VBVF80IH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzMgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV9FQVRfNCB9LFxuICAgICAgXSxcbiAgICAgIGZyYW1lUmF0ZTogNCxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICB0aGlzLnNjaGVkdWxlRWF0aW5nQW5pbWF0aW9uKClcbiAgfVxuXG4gIHByaXZhdGUgc2NoZWR1bGVFYXRpbmdBbmltYXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGltZXMgPSBbNDAwMCwgNTAwMCwgNzAwMF1cbiAgICBjb25zdCBkZWxheSA9IHJhbmRvbUVsZW1lbnQodGltZXMpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdHMgPSBBcnJheS5mcm9tKHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnZhbHVlcygpKVxuICAgICAgaWYgKHVuaXREaXNwbGF5T2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVVuaXQgPSByYW5kb21FbGVtZW50KHVuaXREaXNwbGF5T2JqZWN0cylcbiAgICAgICAgZmlyZUFuZEZvcmdldCgoKSA9PiByYW5kb21Vbml0LnJ1bkVhdEFuaW1hdGlvbigpKVxuICAgICAgfVxuICAgICAgdGhpcy5zY2hlZHVsZUVhdGluZ0FuaW1hdGlvbigpXG4gICAgfSwgZGVsYXkpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnQ6IFBvaW50KTogdm9pZCA9PiB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50KVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB0aGlzLnRleHRzRGlzcGxheU9iamVjdC5oYXNDbGlja0hhbmRsZXJGb3IocG9pbnQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9IChcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBhbmltYXRpb246IE9wdGlvbjxBbmltYXRpb25TcGVjPixcbiAgKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFIuYXBwZW5kKGFuaW1hdGlvbikodGhpcy5hbmltYXRpb25zKVxuICAgICAgdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pLmZvckVhY2godGhpcy5tYW5hZ2VVbml0QXNCZWluZ0FuaW1hdGVkKVxuICAgICAgdGhpcy50cmlnZ2VyQW5pbWF0aW9ucygpXG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVW5pdHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVW5pdHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5yZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCgpXG4gICAgY29uc3QgdW5pdHNUb1N5bmMgPSB0aGlzLndvcmxkU3RhdGUudW5pdHMuZmlsdGVyKCh1bml0KSA9PiAhdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5oYXModW5pdC5pZCkpXG4gICAgZm9yIChjb25zdCB1bml0IG9mIHVuaXRzVG9TeW5jKSB7XG4gICAgICBsZXQgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdC5pZClcbiAgICAgIGlmICghdW5pdERpc3BsYXlPYmplY3QpIHtcbiAgICAgICAgdW5pdERpc3BsYXlPYmplY3QgPSBuZXcgVW5pdERpc3BsYXlPYmplY3QodGhpcy5zY2VuZSwgdW5pdClcbiAgICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXQuaWQsIHVuaXREaXNwbGF5T2JqZWN0KVxuICAgICAgfVxuICAgICAgdW5pdERpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdXJwbHVzVW5pdElkcyA9IFIuZGlmZmVyZW5jZShcbiAgICAgIEFycmF5LmZyb20odGhpcy51bml0RGlzcGxheU9iamVjdHMua2V5cygpKSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQuaWQpLFxuICAgIClcbiAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiBzdXJwbHVzVW5pdElkcykge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZCk/LmRlc3Ryb3koKVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJBbmltYXRpb25zID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzQW5pbWF0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXF1ZW5jZUFuaW1hdGlvbnMgPSAoKToge1xuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3c6IEFuaW1hdGlvblNwZWNbXVxuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlcjogQW5pbWF0aW9uU3BlY1tdXG4gIH0gPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMgPSBuZXcgU2V0PFVuaXRJZD4oKVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cgPSBbXVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciA9IFtdXG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgY29uc3QgYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zID0gUi5hbnkoXG4gICAgICAgICh1bml0SWQpID0+IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuaGFzKHVuaXRJZCksXG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLFxuICAgICAgKVxuICAgICAgaWYgKGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucykge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIucHVzaChhbmltYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93LnB1c2goYW5pbWF0aW9uKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB1bml0SWQgb2YgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24pIHtcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5hZGQodW5pdElkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQW5pbWF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICB3aGlsZSAodGhpcy5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfSA9IHRoaXMuc2VxdWVuY2VBbmltYXRpb25zKClcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyLmxlbmd0aCA9PT0gMCA/ICdub3JtYWwnIDogJ3F1aWNrJ1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChhbmltYXRpb25zVG9QZXJmb3JtTm93Lm1hcCgoYW5pbWF0aW9uKSA9PiB0aGlzLnJ1bkFuaW1hdGlvbihhbmltYXRpb24sIHNwZWVkKSkpXG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cpIHtcbiAgICAgICAgICB0aGlzLnJlbGVhc2VVbml0c0Zyb21CZWluZ0FuaW1hdGVkV2hlcmVOb0xvbmdlck5lZWRlZChhbmltYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQgPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdElkc0luQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgY29uc3QgdW5pdElkc0luUmVtYWluaW5nQW5pbWF0aW9ucyA9IHRoaXMuZ2V0VW5pdHNJbnZvbHZlZEluQW5pbWF0aW9ucygpXG4gICAgY29uc3QgdW5pdElkc1RvUmVsZWFzZSA9IFIuZGlmZmVyZW5jZSh1bml0SWRzSW5BbmltYXRpb24sIHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMpXG4gICAgdW5pdElkc1RvUmVsZWFzZS5mb3JFYWNoKHRoaXMucmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZClcbiAgfVxuXG4gIHByaXZhdGUgbWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmIChkaXNwbGF5T2JqZWN0KSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdElkLCBkaXNwbGF5T2JqZWN0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7dW5pdElkfWBcbiAgICB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh1bml0KSB7XG4gICAgICBkaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMgPSAoKTogVW5pdElkW10gPT4gUi5jaGFpbih0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLCB0aGlzLmFuaW1hdGlvbnMpXG5cbiAgcHJpdmF0ZSBnZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiBVbml0SWRbXSA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLnVuaXRJZF1cbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLmF0dGFja2VyLnVuaXRJZCwgYW5pbWF0aW9uLmRlZmVuZGVyLnVuaXRJZF1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IEFuaW1hdGlvblNwZWMsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bk1vdmVBbmltYXRpb24oYW5pbWF0aW9uLCBzcGVlZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ29tYmF0QW5pbWF0aW9uKGFuaW1hdGlvbiwgc3BlZWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IE1vdmVBbmltYXRpb25TcGVjLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYW5pbWF0aW9uLnVuaXRJZClcbiAgICBpZiAoIWRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHthbmltYXRpb24udW5pdElkfWBcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLldBTEspXG4gICAgYXdhaXQgZGlzcGxheU9iamVjdC5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbi5mcm9tLCBhbmltYXRpb24udG8sIHNwZWVkKVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Db21iYXRBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBDb21iYXRBbmltYXRpb25TcGVjLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gYW5pbWF0aW9uXG4gICAgY29uc3QgYXR0YWNrZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYXR0YWNrZXIudW5pdElkKVxuICAgIGlmICghYXR0YWNrZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YXR0YWNrZXIudW5pdElkfWBcbiAgICBjb25zdCBkZWZlbmRlckRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChkZWZlbmRlci51bml0SWQpXG4gICAgaWYgKCFkZWZlbmRlckRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHtkZWZlbmRlci51bml0SWR9YFxuICAgIGlmIChhbmltYXRpb24uYXR0YWNrVHlwZSA9PT0gJ21lbGVlJykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KHJhbmRvbUVsZW1lbnQoW0F1ZGlvS2V5cy5BVFRBQ0tfMSwgQXVkaW9LZXlzLkFUVEFDS18yLCBBdWRpb0tleXMuQVRUQUNLXzNdKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5TUElUKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkIHx8IGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ERUFUSClcbiAgICB9XG4gICAgY29uc3Qgc2ltdWx0YW5lb3VzQW5pbWF0aW9uczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuQXR0YWNrQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbiwgc3BlZWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1blNwaXRBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uLCBzcGVlZCkpXG4gICAgfVxuICAgIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuRGVhdGhBbmltYXRpb24oc3BlZWQpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKHNwZWVkKSlcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoc2ltdWx0YW5lb3VzQW5pbWF0aW9ucylcbiAgICBpZiAoYXR0YWNrZXIuZGFtYWdlID4gMCkge1xuICAgICAgZmlyZUFuZEZvcmdldCgoKSA9PiBhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuRGFtYWdlQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBhdHRhY2tlci5kYW1hZ2UsIHNwZWVkKSlcbiAgICB9XG4gICAgaWYgKGRlZmVuZGVyLmRhbWFnZSA+IDApIHtcbiAgICAgIGZpcmVBbmRGb3JnZXQoKCkgPT4gZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihkZWZlbmRlci5sb2NhdGlvbiwgZGVmZW5kZXIuZGFtYWdlLCBzcGVlZCkpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRQb2ludHMsIG11bHRpcGx5UG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLCBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBTExfQVVESU9fS0VZUywgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IG1hcFRvTG9jYWxBY3Rpb24gfSBmcm9tICcuL2tleWJvYXJkLW1hcHBlcidcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBMb2NhbEFjdGlvblByb2Nlc3NvciwgTG9jYWxBY3Rpb25SZXN1bHQgfSBmcm9tICcuL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3InXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi8uLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBBbmltYXRpb25TcGVjLCBEaXNwbGF5T2JqZWN0cyB9IGZyb20gJy4vZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgUG9pbnRlciA9IFBoYXNlci5JbnB1dC5Qb2ludGVyXG5cbmV4cG9ydCBjb25zdCBHQU1FX1NDRU5FX0tFWSA9ICdHYW1lJ1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogR0FNRV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVNjZW5lRGF0YSB7XG4gIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnRcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9TSVpFID0gNDhcbmV4cG9ydCBjb25zdCBEUkFXSU5HX09GRlNFVCA9IHsgeDogNjAsIHk6IDEwMCB9XG5leHBvcnQgY29uc3QgaGV4Q2VudGVyID0gKGhleDogSGV4KTogUG9pbnQgPT4gYWRkUG9pbnRzKG11bHRpcGx5UG9pbnQoY2VudGVyUG9pbnQoaGV4KSwgSEVYX1NJWkUpLCBEUkFXSU5HX09GRlNFVClcblxuZXhwb3J0IHR5cGUgR2FtZUlkID0gc3RyaW5nXG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIGNyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHNlcnZlck9yQ2xpZW50PzogU2VydmVyIHwgQ2xpZW50XG5cbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURVxuXG4gIHByaXZhdGUgZGlzcGxheU9iamVjdHM/OiBEaXNwbGF5T2JqZWN0c1xuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgLy8gQ3JlYXRlXG4gIC8vIC0tLS0tLVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuY3JlYXRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHYW1lIHNjZW5lIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlZCA9IHRydWVcbiAgICB9XG4gICAgY29uc3QgeyBzZXJ2ZXJPckNsaWVudCB9ID0gc2NlbmVEYXRhXG4gICAgdGhpcy5zZXRVcFNvdW5kKClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXJPckNsaWVudC53b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURS5jb3B5KHsgcGxheWVySWQ6IHNlcnZlck9yQ2xpZW50LnBsYXllcklkIH0pXG4gICAgdGhpcy5zZXJ2ZXJPckNsaWVudCA9IHNlcnZlck9yQ2xpZW50XG4gICAgc2VydmVyT3JDbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50KVxuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cyA9IG5ldyBEaXNwbGF5T2JqZWN0cyh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24pXG4gICAgdGhpcy51cGRhdGVBc0F0U3RhcnRPZlR1cm4oKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFNvdW5kID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goKGtleSkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoYW5pbWF0aW9uPzogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCBhbmltYXRpb24pXG5cbiAgLy8gTmV0d29ya2luZ1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBhc3luY1NlbmRUb1NlcnZlciA9IGFzeW5jIChhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCF0aGlzLnNlcnZlck9yQ2xpZW50KSB7XG4gICAgICB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIHNlcnZlck9yQ2xpZW50YFxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICB9XG5cbiAgLy8gSW5wdXQgaGFuZGxlcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIHNldFVwSW5wdXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuaW5wdXQubW91c2UuZGlzYWJsZUNvbnRleHRNZW51KClcbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkpXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb24gPSBtYXBUb0xvY2FsQWN0aW9uKGV2ZW50LCB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgaWYgKGxvY2FsQWN0aW9uKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKGxvY2FsQWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTG9jYWxBY3Rpb24gPSAobG9jYWxBY3Rpb246IExvY2FsQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb25Qcm9jZXNzb3IgPSBuZXcgTG9jYWxBY3Rpb25Qcm9jZXNzb3IodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsQWN0aW9uUHJvY2Vzc29yLnByb2Nlc3MobG9jYWxBY3Rpb24pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5lbmFjdExvY2FsQWN0aW9uUmVzdWx0KHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuYWN0TG9jYWxBY3Rpb25SZXN1bHQgPSAocmVzdWx0OiBMb2NhbEFjdGlvblJlc3VsdCk6IHZvaWQgPT4ge1xuICAgIGlmIChyZXN1bHQubmV3TG9jYWxHYW1lU3RhdGUpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSByZXN1bHQubmV3TG9jYWxHYW1lU3RhdGVcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB9XG4gICAgaWYgKHJlc3VsdC53b3JsZEFjdGlvbikge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyRG93biA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGVzZSBhcyB0aGV5IGhhdmUgdGhlaXIgb3duIGhhbmRsZXJzXG4gICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdHM/Lmhhc0NsaWNrSGFuZGxlckZvcihwcmVzc2VkUG9pbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocHJlc3NlZFBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHBvaW50ZXIuYnV0dG9uID09PSAyKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2dvSGV4JywgaGV4IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlTGVmdENsaWNrKGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4ID0gKGhleDogSGV4KTogTG9jYWxBY3Rpb24gPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdEhleCcsIGhleCB9XG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZU1vdmUnLCB1bml0SWQ6IG1vZGUudW5pdElkLCBoZXggfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2NvbXBsZXRlQXR0YWNrJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4LCBhdHRhY2tUeXBlOiBtb2RlLmF0dGFja1R5cGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGVmdENsaWNrID0gKGhleDogSGV4KTogdm9pZCA9PiB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHRoaXMuZ2V0TG9jYWxBY3Rpb25Gb3JDbGlja2luZ0FIZXgoaGV4KSlcblxuICAvLyBIYW5kbGUgd29ybGQgZXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGVcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgY2FzZSAncGxheWVyQ2hhbmdlZE5hbWUnOlxuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgY2FzZSAnY2hhdCc6XG4gICAgICBjYXNlICdwbGF5ZXJLaWNrZWQnOlxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQ29tYmF0V29ybGRFdmVudChldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJFbmRlZFR1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckRlZmVhdGVkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcihldmVudClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZU5ld1R1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR2FtZU92ZXIgPSAoZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC52aWN0b3IgPT09IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQpIHtcbiAgICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuVklDVE9SWV9NVVNJQylcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJEZWZlYXRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlBMQVlFUl9ERUZFQVRFRClcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5ld1R1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICB0aGlzLnVwZGF0ZUFzQXRTdGFydE9mVHVybigpXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFzQXRTdGFydE9mVHVybigpIHtcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMoKVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgICAuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KVxuICAgICAgLnNldFNlbGVjdGVkSGV4KHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50ID0gKGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgY29uc3Qgd2FzUHJldmlvdXNseVNlbGVjdGVkID1cbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXggJiZcbiAgICAgIHByZXZpb3VzV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayh1bml0SWQsIHRvKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KS5zZXRTZWxlY3RlZEhleChuZXdTZWxlY3RlZEhleClcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoeyB0eXBlOiAnbW92ZScsIHVuaXRJZCwgZnJvbSwgdG8gfSlcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIGRlZmF1bHRMb2NhdGlvbjogSGV4KTogT3B0aW9uPEhleD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICAvLyBSZXRhaW4gc2VsZWN0aW9uIGlmIHVuaXQgc3RpbGwgZXhpc3RzIGFuZCB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZyBpZiB0aGVyZSBpc24ndCBvbmUpXG4gICAgbGV0IG5ld1NlbGVjdGVkSGV4XG4gICAgaWYgKCF1bml0IHx8IHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIGNvbnN0IG5leHRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHVuaXRJZClcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gbmV4dFVuaXQ/LmxvY2F0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gZGVmYXVsdExvY2F0aW9uXG4gICAgfVxuICAgIHJldHVybiBuZXdTZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21iYXRXb3JsZEV2ZW50ID0gKGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbkFmdGVyQ29tYmF0KGF0dGFja2VyLCBkZWZlbmRlciwgcHJldmlvdXNXb3JsZFN0YXRlKVxuICAgIHRoaXMuc3luY1NjZW5lKHtcbiAgICAgIHR5cGU6ICdjb21iYXQnLFxuICAgICAgYXR0YWNrVHlwZTogZXZlbnQuYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyLFxuICAgICAgZGVmZW5kZXIsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQgPSAoXG4gICAgYXR0YWNrZXI6IENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgICBkZWZlbmRlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUocHJldmlvdXNXb3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKS5maW5kU2VsZWN0ZWRVbml0KCk/LmlkXG4gICAgaWYgKHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCA9PT0gYXR0YWNrZXIudW5pdElkICYmIGF0dGFja2VyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEhleCA9IHRoaXMuY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2soYXR0YWNrZXIudW5pdElkLCBhdHRhY2tlci5sb2NhdGlvbilcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0gfSkuc2V0U2VsZWN0ZWRIZXgobmV3U2VsZWN0ZWRIZXgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlc2VsZWN0IHVuaXQga2lsbGVkIGJ5IGFub3RoZXIgcGxheWVyXG4gICAgICBpZiAoZGVmZW5kZXIua2lsbGVkICYmIGRlZmVuZGVyLnVuaXRJZCA9PT0gcHJldmlvdXNseVNlbGVjdGVkVW5pdElkICYmIGRlZmVuZGVyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0gfSkuZGVzZWxlY3QoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFV0aWwgcXVlcmllc1xuICAvLyAtLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBIZXhEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC9oZXgtZGlyZWN0aW9uJ1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbW9kZSdcblxuZXhwb3J0IGNvbnN0IG1hcFRvTG9jYWxBY3Rpb24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIG1vZGU6IE1vZGUpOiBPcHRpb248TG9jYWxBY3Rpb24+ID0+IHtcbiAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgIGNhc2UgJzQnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uV0VTVCB9XG4gICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgY2FzZSAnNic6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5FQVNUIH1cbiAgICBjYXNlICc3JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QgfVxuICAgIGNhc2UgJzMnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVCB9XG4gICAgY2FzZSAnOSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5OT1JUSF9FQVNUIH1cbiAgICBjYXNlICcxJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1QgfVxuICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnYWJvcnQnIH1cbiAgICBjYXNlICdFbnRlcic6XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHJldHVybiB7IHR5cGU6ICdlbmRUdXJuJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ24nOlxuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHJldHVybiB7IHR5cGU6ICdzZWxlY3ROZXh0VW5pdCcgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdtJzpcbiAgICAgIGlmIChtb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSByZXR1cm4geyB0eXBlOiAnZW50ZXJNb3ZlTW9kZScgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhJzpcbiAgICAgIGlmIChtb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSByZXR1cm4geyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ21lbGVlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3MnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnc3BpdCcgfVxuICAgICAgYnJlYWtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUsIFNpZGViYXIgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSwgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIZXhEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC9oZXgtZGlyZWN0aW9uJ1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbW9kZSdcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsQWN0aW9uUmVzdWx0IHtcbiAgbmV3TG9jYWxHYW1lU3RhdGU/OiBMb2NhbEdhbWVTdGF0ZVxuICB3b3JsZEFjdGlvbj86IFdvcmxkQWN0aW9uXG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbEFjdGlvblByb2Nlc3NvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIHB1YmxpYyBwcm9jZXNzID0gKGFjdGlvbjogTG9jYWxBY3Rpb24pOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdnbyc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUdvKGFjdGlvbi5kaXJlY3Rpb24pXG4gICAgICBjYXNlICdnb0hleCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUdvSGV4KGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdzZWxlY3ROZXh0VW5pdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbGVjdE5leHRVbml0KClcbiAgICAgIGNhc2UgJ2Fib3J0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWJvcnQoKVxuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVuZFR1cm4oKVxuICAgICAgY2FzZSAnZW50ZXJNb3ZlTW9kZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVudGVyTW92ZU1vZGUoKVxuICAgICAgY2FzZSAnZW50ZXJBdHRhY2tNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJBdHRhY2tNb2RlKGFjdGlvbi5hdHRhY2tUeXBlKVxuICAgICAgY2FzZSAnY29tcGxldGVNb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVNb3ZlKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdjb21wbGV0ZUF0dGFjayc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNvbXBsZXRlQXR0YWNrKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgsIGFjdGlvbi5hdHRhY2tUeXBlKVxuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0SGV4KGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdjaGFuZ2VTaWRlYmFyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2hhbmdlU2lkZWJhcihhY3Rpb24uc2lkZWJhcilcbiAgICAgIGNhc2UgJ2NoYXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDaGF0KGFjdGlvbi5tZXNzYWdlKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdE5leHRVbml0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMoc2VsZWN0ZWRVbml0Py5pZClcbiAgICBpZiAodW5pdFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICAgICAgLnNldFNlbGVjdGVkSGV4KHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pXG4gICAgICAgIC5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiBuZXdMb2NhbEdhbWVTdGF0ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFib3J0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlc2VsZWN0KCkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5kZXNlbGVjdCgpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlc2VsZWN0KCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVNpZGViYXIgPSAoc2lkZWJhcjogU2lkZWJhcik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4gKHtcbiAgICBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2lkZWJhciB9KSxcbiAgfSlcblxuICBwcml2YXRlIGhhbmRsZUNoYXQgPSAobWVzc2FnZTogc3RyaW5nKTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHsgd29ybGRBY3Rpb246IHsgdHlwZTogJ2NoYXQnLCBtZXNzYWdlIH0gfSlcbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCBQb2x5Z29uID0gUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb25cblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGhleFBvbHlnb25zOiBNYXA8c3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcbiAgcHJpdmF0ZSBwcmV2aW91c0hvdmVySGV4PzogSGV4XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSkge1xuICAgICAgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGV4ID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9seWdvbkNlbnRlciA9IGhleENlbnRlcihoZXgpXG4gICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdncmFzcycpLnNldFNjYWxlKDAuNjUpLnNldERlcHRoKC01KVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzTW91bnRhaW4oaGV4KSkge1xuICAgICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdtb3VudGFpbicpLnNldERlcHRoKC01KVxuICAgIH1cbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSGV4LCBtb2RlIH0gPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09PSAnbW92ZVVuaXQnKSB7XG4gICAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKG1vZGUudW5pdElkKVxuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGhleCkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09PSAnYXR0YWNrJykge1xuICAgICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZChtb2RlLnVuaXRJZClcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleCh1bml0LCBoZXgsIG1vZGUuYXR0YWNrVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ2RlZmF1bHQnXG4gIH1cblxuICBwcml2YXRlIGdldEhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIgPSAodGlsZVN0YXRlOiBUaWxlU3RhdGUpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGlsZVN0YXRlKSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgcmV0dXJuIEhPVkVSX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50OiBQb2ludCk6IHZvaWQge1xuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHBvaW50ZXJQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXggJiYgdGhpcy5wcmV2aW91c0hvdmVySGV4LmVxdWFscyhoZXgpKSByZXR1cm5cbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVySGV4KSB7XG4gICAgICB0aGlzLnN5bmNUaWxlKHRoaXMucHJldmlvdXNIb3ZlckhleClcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlckhleCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpXG4gICAgICAgIC5zZXRTdHJva2VTdHlsZSh0aWxlU3RhdGUgPT09ICdkZWZhdWx0JyA/IDIgOiA0LCB0aGlzLmdldEhvdmVySGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpXG4gICAgICAgIC5zZXREZXB0aCgtMSlcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlckhleCA9IGhleFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgaGV4V2lkdGgsIG1hcEhlaWdodCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEFDVElPTl9URVhUX0NPTE9VUiwgZ2V0UGxheWVyVGludCwgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSIH0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgcG9pbnQsIFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBVaUJvcmRlckRpc3BsYXlPYmplY3QgfSBmcm9tICcuL3VpLWJvcmRlci1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tICcuLi8uLi91aS9wcmltYXJ5LWJ1dHRvbidcblxuZXhwb3J0IHR5cGUgTG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gKGFjdGlvbjogTG9jYWxBY3Rpb24pID0+IHZvaWRcblxuaW50ZXJmYWNlIFBsYXllck9iamVjdHMge1xuICBuYW1lVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgbGxhbWE6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dHNEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyXG5cbiAgcHJpdmF0ZSByZWFkb25seSBzZWxlY3Rpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDM6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgZW5kVHVyblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVyVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBob3VyZ2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICBwcml2YXRlIHJlYWRvbmx5IGRlZmVhdFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgdmljdG9yeVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRMb2dUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdFdvcmxkTG9nVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBzZWxlY3RQbGF5ZXJzVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJPYmplY3RzOiBNYXA8UGxheWVySWQsIFBsYXllck9iamVjdHM+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgaG9zdENyb3duOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuQnV0dG9uOiBQcmltYXJ5QnV0dG9uXG4gIHByaXZhdGUgcmVhZG9ubHkgY2hhdFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2NlbmUuYWRkLmltYWdlKDQwLCAyOCwgSW1hZ2VLZXlzLkxMQU1BXzIpLnNldFNjYWxlKDAuNikuc2V0VGludChnZXRQbGF5ZXJUaW50KGxvY2FsR2FtZVN0YXRlLnBsYXllcklkKSlcbiAgICB0aGlzLnBsYXllclRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDcwLCAyMCwgJycpXG4gICAgdGhpcy5ob3VyZ2xhc3MgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSg4NzUsIDMwLCAnaG91cmdsYXNzJykuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoXG4gICAgICBEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMixcbiAgICAgIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LFxuICAgICAgJycsXG4gICAgKVxuICAgIHRoaXMuYWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyAyNSwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0Q2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuYWN0aW9uVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5hY3Rpb25UZXh0MiA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA1MCwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0MkNsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dDIuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5hY3Rpb25UZXh0MyA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA3NSwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0M0NsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dDMuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5lbmRUdXJuVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg3OTAgKyA1MjAsIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55ICsgNjggKyA3MiwgJycsIHtcbiAgICAgICAgZmlsbDogJyNmZmZmZmYnLFxuICAgICAgfSlcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgICAgLnNldFNoYWRvdygyLCAyLCAnIzAwMDAwMCcpXG4gICAgdGhpcy5lbmRUdXJuQnV0dG9uID0gbmV3IFByaW1hcnlCdXR0b24oXG4gICAgICB0aGlzLnNjZW5lLFxuICAgICAgNjUwICsgNTIwLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA0NCArIDcyLFxuICAgICAgJ0VuZCBUdXJuJyxcbiAgICAgICgpID0+IHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VuZFR1cm4nIH0pLFxuICAgIClcblxuICAgIHRoaXMuc2VsZWN0V29ybGRMb2dUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDk2MCwgMjYsICdMb2cnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdjaGFuZ2VTaWRlYmFyJywgc2lkZWJhcjogJ2xvZycgfSkpXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5zZWxlY3RXb3JsZExvZ1RleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5zZWxlY3RXb3JsZExvZ1RleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuc2VsZWN0UGxheWVyc1RleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoMTAyNCwgMjYsICdQbGF5ZXJzJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnY2hhbmdlU2lkZWJhcicsIHNpZGViYXI6ICdwbGF5ZXJzJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLnNlbGVjdFBsYXllcnNUZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuc2VsZWN0UGxheWVyc1RleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZGVmZWF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIChtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSkgLyAyLCAnWW91IGhhdmUgYmVlbiBkZWZlYXRlZCEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy52aWN0b3J5VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIDMwLCAnVmljdG9yeSEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy53b3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDk2MCwgNTAsICcnKS5zZXRXb3JkV3JhcFdpZHRoKDQ3MCkuc2V0Rm9udFNpemUoMTQpXG4gICAgdGhpcy5jaGF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg5NjAsIDYwMCwgJ0NoYXQuLi4nLCB7XG4gICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgZml4ZWRXaWR0aDogNDc4LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhdFRleHQuc2V0VGV4dCgnJylcbiAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5zY2VuZS5wbHVnaW5zLmdldCgncmV4VGV4dEVkaXQnKSBhcyBhbnlcbiAgICAgICAgcGx1Z2luLmVkaXQodGhpcy5jaGF0VGV4dCwge1xuICAgICAgICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2NoYXQnLCBtZXNzYWdlOiB0aGlzLmNoYXRUZXh0LnRleHQgfSlcbiAgICAgICAgICAgIHRoaXMuY2hhdFRleHQuc2V0VGV4dCgnQ2hhdC4uLicpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgdGhpcy5ob3N0Q3Jvd24gPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgxMjM1LCAwLCAnY3Jvd24nKS5zZXRTY2FsZSgwLjYpXG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2Ygd29ybGRTdGF0ZS5nZXRTb3J0ZWRQbGF5ZXJzKCkpIHtcbiAgICAgIGNvbnN0IG5hbWVUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgICAgLnRleHQoMTAwNSwgMCwgcGxheWVyLm5hbWUsIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICAgICAgZml4ZWRXaWR0aDogMjAwLFxuICAgICAgICAgIGZvbnRTdHlsZTogcGxheWVyLmlkID09PSB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkID8gJ2JvbGQnIDogJ25vcm1hbCcsXG4gICAgICAgIH0pXG4gICAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgICAgLnNldFBhZGRpbmcoMCwgMCwgMCwgMClcbiAgICAgIGNvbnN0IGxsYW1hID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDk3NSwgMCwgSW1hZ2VLZXlzLkxMQU1BX0VBVF8xKS5zZXRTY2FsZSgwLjYpLnNldFRpbnQoZ2V0UGxheWVyVGludChwbGF5ZXIuaWQpKVxuICAgICAgY29uc3QgcGxheWVyT2JqZWN0czogUGxheWVyT2JqZWN0cyA9IHsgbmFtZVRleHQsIGxsYW1hIH1cbiAgICAgIHRoaXMucGxheWVyT2JqZWN0cy5zZXQocGxheWVyLmlkLCBwbGF5ZXJPYmplY3RzKVxuICAgIH1cbiAgICBuZXcgVWlCb3JkZXJEaXNwbGF5T2JqZWN0KHNjZW5lLCB7IHRvcExlZnQ6IHBvaW50KDk1MCwgMjApLCB3aWR0aDogNTAwLCBoZWlnaHQ6IDYyMCB9KVxuICAgIG5ldyBVaUJvcmRlckRpc3BsYXlPYmplY3Qoc2NlbmUsIHsgdG9wTGVmdDogcG9pbnQoMTAsIDUyMCksIHdpZHRoOiA5MzAsIGhlaWdodDogMTIwIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHRDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdhYm9ydCcgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDJDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ21lbGVlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDNDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ3NwaXQnIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGNvbnN0IGdhbWVPYmplY3Qgb2YgW3RoaXMuZW5kVHVyblRleHQsIHRoaXMuYWN0aW9uVGV4dCwgdGhpcy5hY3Rpb25UZXh0MiwgdGhpcy5hY3Rpb25UZXh0M10pXG4gICAgICBpZiAoZ2FtZU9iamVjdC5nZXRCb3VuZHMoKS5jb250YWlucyhwb2ludC54LCBwb2ludC55KSkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKClcbiAgICB0aGlzLmhvdXJnbGFzcy5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPiAwKVxuICAgIHRoaXMucGxheWVyVGV4dC5zZXRUZXh0KGAke3BsYXllci5uYW1lfSAtIFR1cm4gJHt0aGlzLndvcmxkU3RhdGUudHVybn1gKVxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJycpXG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnN5bmNTZWxlY3RIZXhNb2RlVGV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuc3luY01vdmVVbml0TW9kZVRleHQobW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnN5bmNBdHRhY2tNb2RlVGV4dChtb2RlLnVuaXRJZCwgbW9kZS5hdHRhY2tUeXBlKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICAgIGNvbnN0IGNhbkFjdCA9IHdvcmxkU3RhdGUuY2FuUGxheWVyQWN0KHBsYXllci5pZClcbiAgICBpZiAoY2FuQWN0KSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH1cbiAgICB0aGlzLmVuZFR1cm5CdXR0b24uc2V0VmlzaWJsZShjYW5BY3QpXG4gICAgdGhpcy5kZWZlYXRUZXh0LnNldFZpc2libGUocGxheWVyLmRlZmVhdGVkKVxuICAgIHRoaXMudmljdG9yeVRleHQuc2V0VmlzaWJsZSh3b3JsZFN0YXRlLmdhbWVPdmVySW5mbz8udmljdG9yID09PSBwbGF5ZXIuaWQpXG4gICAgdGhpcy53b3JsZExvZ1RleHQuc2V0VGV4dChSLnRha2VMYXN0KDIwLCB0aGlzLndvcmxkU3RhdGUud29ybGRMb2cpLmpvaW4oJ1xcbicpKVxuICAgIHRoaXMud29ybGRMb2dUZXh0LnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuc2lkZWJhciA9PT0gJ2xvZycpXG4gICAgbGV0IHkgPSA2NVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHdvcmxkU3RhdGUuZ2V0U29ydGVkUGxheWVycygpKSB7XG4gICAgICBpZiAocGxheWVyLmlkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgICB0aGlzLmhvc3RDcm93bi5zZXRZKHkgKyA1KVxuICAgICAgfVxuICAgICAgY29uc3QgeyBuYW1lVGV4dCwgbGxhbWEgfSA9IHRoaXMuZ2V0UGxheWVyT2JqZWN0cyhwbGF5ZXIuaWQpXG4gICAgICBuYW1lVGV4dFxuICAgICAgICAuc2V0VGV4dChwbGF5ZXIubmFtZSlcbiAgICAgICAgLnNldFkoeSlcbiAgICAgICAgLnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuc2lkZWJhciA9PT0gJ3BsYXllcnMnKVxuICAgICAgbGxhbWFcbiAgICAgICAgLnNldFkoeSArIDEwKVxuICAgICAgICAuc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5zaWRlYmFyID09PSAncGxheWVycycpXG4gICAgICAgIC5zZXRGbGlwWCghdGhpcy53b3JsZFN0YXRlLmNhblBsYXllckFjdChwbGF5ZXIuaWQpKVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICB0aGlzLmhvc3RDcm93bi5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLnNpZGViYXIgPT09ICdwbGF5ZXJzJylcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkLCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoYENsaWNrIHVuaXQgdG8gJHthdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFjaycgOiAnc3BpdCd9IChvciBFU0MgdG8gY2FuY2VsKWApXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJ1NwaXQgKHMpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck5hbWUgPSAocGxheWVySWQ6IFBsYXllcklkKTogc3RyaW5nID0+IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpLm5hbWVcblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBsYXllcklkLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9ID0gdW5pdFxuICAgIGNvbnN0IHBsYXllck5hbWUgPSB0aGlzLmdldFBsYXllck5hbWUocGxheWVySWQpXG4gICAgcmV0dXJuIGAke25hbWV9IC0gTGxhbWEgd2FycmlvciAtICR7cGxheWVyTmFtZX0gLSBIUCAke2hpdFBvaW50cy5jdXJyZW50fS8ke2hpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke2FjdGlvblBvaW50cy5jdXJyZW50fS8ke2FjdGlvblBvaW50cy5tYXh9YFxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXJPYmplY3RzID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllck9iamVjdHMgPT4ge1xuICAgIGNvbnN0IHBsYXllck9iamVjdHMgPSB0aGlzLnBsYXllck9iamVjdHMuZ2V0KHBsYXllcklkKVxuICAgIGlmICghcGxheWVyT2JqZWN0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbGF5ZXIgb2JqZWN0cyBmb3VuZCBmb3IgJHtwbGF5ZXJJZH1gKVxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyT2JqZWN0c1xuICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSW1hZ2VLZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcblxuY29uc3QgSE9SSVpPTlRBTF9JTUFHRV9XSURUSCA9IDc0XG5jb25zdCBWRVJUSUNBTF9JTUFHRV9IRUlHSFQgPSA1OVxuY29uc3QgQ09STkVSX1dJRFRIID0gMTVcbmNvbnN0IENPUk5FUl9IRUlHSFQgPSAxNVxuY29uc3QgVEhJQ0tORVNTID0gNFxuXG5leHBvcnQgY2xhc3MgVWlCb3JkZXJEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VzOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VbXSA9IFtdXG4gIHByaXZhdGUgcmVhZG9ubHkgdG9wTGVmdDogUG9pbnRcbiAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB7IHRvcExlZnQsIHdpZHRoLCBoZWlnaHQgfTogeyB0b3BMZWZ0OiBQb2ludDsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudG9wTGVmdCA9IHRvcExlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMuY3JlYXRlQ29ybmVycygpXG4gICAgdGhpcy5jcmVhdGVWZXJ0aWNhbFNlY3Rpb25zKClcbiAgICB0aGlzLmNyZWF0ZUhvcml6b250YWxTZWN0aW9ucygpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhvcml6b250YWxTZWN0aW9ucygpIHtcbiAgICBjb25zdCBob3Jpem9udGFsV2lkdGggPSB0aGlzLndpZHRoIC0gMiAqIENPUk5FUl9XSURUSFxuICAgIGNvbnN0IHdob2xlQ29waWVzID0gTWF0aC5mbG9vcihob3Jpem9udGFsV2lkdGggLyBIT1JJWk9OVEFMX0lNQUdFX1dJRFRIKVxuICAgIGNvbnN0IGV4Y2Vzc1dpZHRoID0gaG9yaXpvbnRhbFdpZHRoICUgSE9SSVpPTlRBTF9JTUFHRV9XSURUSFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHdob2xlQ29waWVzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB0aGlzLnRvcExlZnQueCArIENPUk5FUl9XSURUSCArIGkgKiBIT1JJWk9OVEFMX0lNQUdFX1dJRFRIXG4gICAgICBjb25zdCB5VG9wID0gdGhpcy50b3BMZWZ0LnlcbiAgICAgIGNvbnN0IHlCb3R0b20gPSB0aGlzLnRvcExlZnQueSArIHRoaXMuaGVpZ2h0IC0gVEhJQ0tORVNTXG4gICAgICBjb25zdCB0b3BIb3Jpem9udGFsSW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5VG9wLCBJbWFnZUtleXMuQk9SREVSX0hPUklaT05UQUwpLnNldE9yaWdpbigwLCAwKVxuICAgICAgY29uc3QgYm90dG9tSG9yaXpvbnRhbEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeCwgeUJvdHRvbSwgSW1hZ2VLZXlzLkJPUkRFUl9IT1JJWk9OVEFMKS5zZXRPcmlnaW4oMCwgMClcbiAgICAgIGlmIChpID09PSB3aG9sZUNvcGllcykge1xuICAgICAgICB0b3BIb3Jpem9udGFsSW1hZ2Uuc2V0Q3JvcCgwLCAwLCBleGNlc3NXaWR0aCwgNSlcbiAgICAgICAgYm90dG9tSG9yaXpvbnRhbEltYWdlLnNldENyb3AoMCwgMCwgZXhjZXNzV2lkdGgsIDUpXG4gICAgICB9XG4gICAgICB0aGlzLmltYWdlcy5wdXNoKGJvdHRvbUhvcml6b250YWxJbWFnZSwgdG9wSG9yaXpvbnRhbEltYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVmVydGljYWxTZWN0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbEhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gMiAqIENPUk5FUl9IRUlHSFRcbiAgICBjb25zdCB3aG9sZUNvcGllcyA9IE1hdGguZmxvb3IodmVydGljYWxIZWlnaHQgLyBWRVJUSUNBTF9JTUFHRV9IRUlHSFQpXG4gICAgY29uc3QgZXhjZXNzSGVpZ2h0ID0gdmVydGljYWxIZWlnaHQgJSBWRVJUSUNBTF9JTUFHRV9IRUlHSFRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB3aG9sZUNvcGllczsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gdGhpcy50b3BMZWZ0LnkgKyBDT1JORVJfV0lEVEggKyBpICogVkVSVElDQUxfSU1BR0VfSEVJR0hUXG4gICAgICBjb25zdCB4TGVmdCA9IHRoaXMudG9wTGVmdC54XG4gICAgICBjb25zdCB4UmlnaHQgPSB0aGlzLnRvcExlZnQueCArIHRoaXMud2lkdGggLSBUSElDS05FU1NcbiAgICAgIGNvbnN0IGxlZnRWZXJ0aWNhbEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeExlZnQsIHksIEltYWdlS2V5cy5CT1JERVJfVkVSVElDQUwpLnNldE9yaWdpbigwLCAwKVxuICAgICAgY29uc3QgcmlnaHRWZXJ0aWNhbEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeFJpZ2h0LCB5LCBJbWFnZUtleXMuQk9SREVSX1ZFUlRJQ0FMKS5zZXRPcmlnaW4oMCwgMClcbiAgICAgIGlmIChpID09PSB3aG9sZUNvcGllcykge1xuICAgICAgICBsZWZ0VmVydGljYWxJbWFnZS5zZXRDcm9wKDAsIDAsIDUsIGV4Y2Vzc0hlaWdodClcbiAgICAgICAgcmlnaHRWZXJ0aWNhbEltYWdlLnNldENyb3AoMCwgMCwgNSwgZXhjZXNzSGVpZ2h0KVxuICAgICAgfVxuICAgICAgdGhpcy5pbWFnZXMucHVzaChsZWZ0VmVydGljYWxJbWFnZSwgcmlnaHRWZXJ0aWNhbEltYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29ybmVycygpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMudG9wTGVmdFxuICAgIGNvbnN0IHgyID0geCArIHRoaXMud2lkdGggLSBDT1JORVJfV0lEVEhcbiAgICBjb25zdCB5MiA9IHkgKyB0aGlzLmhlaWdodCAtIENPUk5FUl9IRUlHSFRcbiAgICBjb25zdCB0b3BMZWZ0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5LCBJbWFnZUtleXMuQk9SREVSX1RPUF9MRUZUKS5zZXRPcmlnaW4oMCwgMClcbiAgICBjb25zdCB0b3BSaWdodEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeDIsIHksIEltYWdlS2V5cy5CT1JERVJfVE9QX1JJR0hUKS5zZXRPcmlnaW4oMCwgMClcbiAgICBjb25zdCBib3R0b21MZWZ0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5MiwgSW1hZ2VLZXlzLkJPUkRFUl9CT1RUT01fTEVGVCkuc2V0T3JpZ2luKDAsIDApXG4gICAgY29uc3QgYm90dG9tUmlnaHRJbWFnZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKHgyLCB5MiwgSW1hZ2VLZXlzLkJPUkRFUl9CT1RUT01fUklHSFQpLnNldE9yaWdpbigwLCAwKVxuICAgIHRoaXMuaW1hZ2VzLnB1c2godG9wTGVmdEltYWdlLCB0b3BSaWdodEltYWdlLCBib3R0b21MZWZ0SW1hZ2UsIGJvdHRvbVJpZ2h0SW1hZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgZ2V0UGxheWVyVGludCwgSEVBTFRIX0JPUkRFUl9DT0xPVVIsIEhFQUxUSF9FTVBUWV9DT0xPVVIsIEhFQUxUSF9GVUxMX0NPTE9VUiB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBhZGRQb2ludHMsIGRpc3RhbmNlQmV0d2VlblBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IHsgQW5pbWF0aW9uU3BlZWQgfSBmcm9tICcuL2Rpc3BsYXktb2JqZWN0cydcbmltcG9ydCB7IHJhbmRvbUludEluY2x1c2l2ZSB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoQmFyR3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljc1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgdGhpcy5pbWFnZSA9IHNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ2xsYW1hLTInKS5zZXRTY2FsZSgwLjgpLnNldFRpbnQoZ2V0UGxheWVyVGludCh0aGlzLnVuaXQucGxheWVySWQpKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MgPSBzY2VuZS5hZGQuZ3JhcGhpY3MoKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09PSB0aGlzLnVuaXQuaWQpXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICAgIGNvbnN0IHVuaXRQb2ludCA9IGhleENlbnRlcih0aGlzLnVuaXQubG9jYXRpb24pXG4gICAgdGhpcy5pbWFnZS5zZXRQb3NpdGlvbih1bml0UG9pbnQueCArIElNQUdFX09GRlNFVC54LCB1bml0UG9pbnQueSArIElNQUdFX09GRlNFVC55KVxuICAgIHRoaXMuc3luY0hlYWx0aEJhcih1bml0UG9pbnQpXG4gIH1cblxuICBwcml2YXRlIHN5bmNIZWFsdGhCYXIgPSAodW5pdFBvaW50OiBQb2ludCkgPT4ge1xuICAgIGNvbnN0IGhlYWx0aEJhclBvc2l0aW9uID0gdGhpcy5nZXRIZWFsdGhCYXJQb3NpdGlvbih1bml0UG9pbnQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5zZXRQb3NpdGlvbihoZWFsdGhCYXJQb3NpdGlvbi54LCBoZWFsdGhCYXJQb3NpdGlvbi55KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuY2xlYXIoKVxuXG4gICAgLy8gRHJhdyBib3JkZXJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gSEVBTFRIX0JBUl9XSURUSCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IEhFQUxUSF9CQVJfSEVJR0hUIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9CT1JERVJfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgSEVBTFRIX0JBUl9XSURUSCwgSEVBTFRIX0JBUl9IRUlHSFQpXG5cbiAgICAvLyBEcmF3IGVtcHR5IGJhY2tncm91bmRcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRU1QVFlfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuXG4gICAgLy8gRmlsbCBpbiBiYXJcbiAgICBjb25zdCB7IGN1cnJlbnQsIG1heCB9ID0gdGhpcy51bml0LmhpdFBvaW50c1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9GVUxMX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgKGlubmVyV2lkdGggKiBjdXJyZW50KSAvIG1heCxcbiAgICAgIGlubmVySGVpZ2h0LFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCwgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnNjYWxlU3BlZWQoNTAwLCBzcGVlZClcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLmFuaW1zLnBsYXkoJ2xsYW1hLXdhbGsnKVxuICAgIHRoaXMuaW1hZ2Uuc2V0RmxpcFgoYWZ0ZXJDb29yZHMueCA8IGJlZm9yZUNvb3Jkcy54KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmltYWdlLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBJTUFHRV9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmltYWdlLmFuaW1zLmN1cnJlbnRBbmltLmZyYW1lc1sxXVxuICAgIHRoaXMuaW1hZ2UuYW5pbXMuc3RvcE9uRnJhbWUoZnJhbWUpXG4gIH1cblxuICBwcml2YXRlIHNjYWxlU3BlZWQgPSAoZHVyYXRpb246IG51bWJlciwgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKSA9PiAoc3BlZWQgPT09ICdub3JtYWwnID8gZHVyYXRpb24gOiBkdXJhdGlvbiAvIDQpXG5cbiAgcHVibGljIHJ1bkRlYXRoQW5pbWF0aW9uID0gYXN5bmMgKHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zY2FsZVNwZWVkKDEwMDAsIHNwZWVkKVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IFt0aGlzLmltYWdlLCB0aGlzLmhlYWx0aEJhckdyYXBoaWNzXSxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gIH1cblxuICBwdWJsaWMgcnVuU3BpdEFuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGZyb21Qb2ludCA9IGhleENlbnRlcihmcm9tKVxuICAgIGNvbnN0IHRvUG9pbnQgPSBoZXhDZW50ZXIodG8pXG4gICAgY29uc3QgZGlzdGFuY2UgPSBkaXN0YW5jZUJldHdlZW5Qb2ludHMoZnJvbVBvaW50LCB0b1BvaW50KVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoZnJvbVBvaW50LngsIGZyb21Qb2ludC55LCAnc3BpdCcpLnNldFNjYWxlKDAuOClcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuc2NhbGVTcGVlZChkaXN0YW5jZSAqIDQsIHNwZWVkKVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IGltYWdlLFxuICAgICAgeDoge1xuICAgICAgICBmcm9tOiBmcm9tUG9pbnQueCxcbiAgICAgICAgdG86IHRvUG9pbnQueCxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC55LFxuICAgICAgICB0bzogdG9Qb2ludC55LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdRdWFkJyxcbiAgICB9KVxuICAgIGF3YWl0IHBsYXlUd2Vlbih0d2VlbilcbiAgICBpbWFnZS5kZXN0cm95KClcbiAgfVxuXG4gIHB1YmxpYyBydW5EYW1hZ2VBbmltYXRpb24gPSBhc3luYyAobG9jYXRpb246IEhleCwgZGFtYWdlOiBudW1iZXIsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uUG9pbnQgPSBoZXhDZW50ZXIobG9jYXRpb24pXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChsb2NhdGlvblBvaW50LngsIGxvY2F0aW9uUG9pbnQueSwgZGFtYWdlLnRvU3RyaW5nKCksIHtcbiAgICAgICAgY29sb3I6ICcjZmY4ODg4JyxcbiAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogMixcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMjYpXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuc2NhbGVTcGVlZCgyMDAwLCBzcGVlZClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIHk6IHtcbiAgICAgICAgZnJvbTogbG9jYXRpb25Qb2ludC55IC0gNTAsXG4gICAgICAgIHRvOiBsb2NhdGlvblBvaW50LnkgLSA3NSxcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdMaW5lYXInLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRleHQsXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMuaW4nLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gICAgdGV4dC5kZXN0cm95KClcbiAgfVxuXG4gIHB1YmxpYyBydW5FYXRBbmltYXRpb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKHJhbmRvbUludEluY2x1c2l2ZSgxLCAzKSA9PT0gMSkge1xuICAgICAgdGhpcy5pbWFnZS50b2dnbGVGbGlwWCgpXG4gICAgfVxuICAgIHRoaXMuaW1hZ2UuYW5pbXMucGxheSgnbGxhbWEtZWF0JylcbiAgfVxuXG4gIHB1YmxpYyBydW5BdHRhY2tBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4LCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICB0aGlzLmltYWdlLmFuaW1zLnBsYXkoJ2xsYW1hLXdhbGsnKVxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zY2FsZVNwZWVkKDQwMCwgc3BlZWQpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuaW1hZ2UuYW5pbXMuY3VycmVudEFuaW0uZnJhbWVzWzFdXG4gICAgdGhpcy5pbWFnZS5hbmltcy5zdG9wT25GcmFtZShmcmFtZSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2NlbmUudHdlZW5zLmtpbGxUd2VlbnNPZihbdGhpcy5oZWFsdGhCYXJHcmFwaGljcywgdGhpcy5pbWFnZV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTsgeTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT4gKHtcbiAgeDoge1xuICAgIGZyb206IGZyb20ueCArIG9mZnNldC54LFxuICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gIH0sXG4gIHk6IHtcbiAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICB9LFxufSlcbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiB9IGZyb20gJy4uLy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBzZXRVcmxJbmZvIH0gZnJvbSAnLi4vYm9vdC91cmwtaW5mbydcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tICcuLi8uLi91aS9wcmltYXJ5LWJ1dHRvbidcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsLXN0b3JhZ2UvbG9jYWwnXG5cbmV4cG9ydCBjb25zdCBNQUlOX01FTlVfU0NFTkVfS0VZID0gJ01haW5NZW51J1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogTUFJTl9NRU5VX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGNsYXNzIE1haW5NZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5hZGQudGV4dCgxNTUsIDUwLCAnTGxhbWEgV2FycycsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI2KVxuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIHRoaXMuc291bmQuYWRkKEF1ZGlvS2V5cy5DTElDSylcbiAgICBuZXcgUHJpbWFyeUJ1dHRvbih0aGlzLCAxMDAsIDEyMCwgJ0hvc3QgR2FtZScsIHRoaXMuaGFuZGxlSG9zdEdhbWUpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUhvc3RHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZDogR2FtZUlkID0gdXVpZCgpXG4gICAgY29uc3QgcGxheWVySWQgPSBIT1NUX1BMQVlFUl9JRFxuICAgIGxldCB3b3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICAgIGNvbnN0IG5hbWUgPSBMb2NhbFN0b3JhZ2UuZmluZE5hbWUoKVxuICAgIGlmIChuYW1lKSB7XG4gICAgICB3b3JsZFN0YXRlID0gd29ybGRTdGF0ZS5zZXRQbGF5ZXJOYW1lKHBsYXllcklkLCBuYW1lKVxuICAgIH1cbiAgICBjb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKHdvcmxkRXZlbnREYiwgZ2FtZUlkLCB3b3JsZFN0YXRlLCAwKVxuICAgIHNlcnZlci5oYW5kbGVBY3Rpb24ocGxheWVySWQsIHsgdHlwZTogJ2luaXRpYWxpc2UnLCBzdGF0ZTogd29ybGRTdGF0ZSB9KVxuICAgIHNldFVybEluZm8oeyBnYW1lSWQgfSlcbiAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyIH1cbiAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgcG9pbnQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQb2ludCA9PiAoeyB4LCB5IH0pXG5cbmV4cG9ydCBjb25zdCBtdWx0aXBseVBvaW50ID0gKHBvaW50OiBQb2ludCwgbjogbnVtYmVyKTogUG9pbnQgPT4gKHsgeDogcG9pbnQueCAqIG4sIHk6IHBvaW50LnkgKiBuIH0pXG5cbmV4cG9ydCBjb25zdCBhZGRQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7IHg6IHBvaW50MS54ICsgcG9pbnQyLngsIHk6IHBvaW50MS55ICsgcG9pbnQyLnkgfSlcblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoe1xuICB4OiBwb2ludDEueCAtIHBvaW50Mi54LFxuICB5OiBwb2ludDEueSAtIHBvaW50Mi55LFxufSlcblxuY29uc3Qgc3F1YXJlID0gKG46IG51bWJlcik6IG51bWJlciA9PiBuICogblxuXG5leHBvcnQgY29uc3QgZGlzdGFuY2VCZXR3ZWVuUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBudW1iZXIgPT5cbiAgTWF0aC5zcXJ0KHNxdWFyZShwb2ludDEueCAtIHBvaW50Mi54KSArIHNxdWFyZShwb2ludDEueSAtIHBvaW50Mi55KSlcbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBBdHRhY2tXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBDb21iYXRXb3JsZEV2ZW50LCBQbGF5ZXJEZWZlYXRlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQsIFdvcmxkRXZlbnRJZCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyByYW5kb21JbnRJbmNsdXNpdmUgfSBmcm9tICcuLi91dGlsL3JhbmRvbS11dGlsJ1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5cbmV4cG9ydCBjb25zdCBjYW5BdHRhY2tPY2N1ciA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLCBtYXA6IFdvcmxkTWFwLCBmcm9tOiBIZXgsIHRvOiBIZXgpOiBib29sZWFuID0+IHtcbiAgc3dpdGNoIChhdHRhY2tUeXBlKSB7XG4gICAgY2FzZSAnbWVsZWUnOlxuICAgICAgcmV0dXJuIGZyb20uaXNBZGphY2VudFRvKHRvKVxuICAgIGNhc2UgJ3NwaXQnOlxuICAgICAgY29uc3QgYmxvY2tlZEJ5TW91bnRhaW5zID0gUi5hbGwobWFwLmlzTW91bnRhaW4sIFIuaW50ZXJzZWN0aW9uKGZyb20ubmVpZ2hib3VycygpLCB0by5uZWlnaGJvdXJzKCkpKVxuICAgICAgcmV0dXJuICFibG9ja2VkQnlNb3VudGFpbnMgJiYgZnJvbS5kaXN0YW5jZVRvKHRvKSA8PSAyXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IHRoaXMudmFsaWRhdGVBdHRhY2soYWN0aW9uKVxuICAgIGNvbnN0IHsgYXR0YWNrVHlwZSB9ID0gYWN0aW9uXG4gICAgY29uc3QgcmF3QXR0YWNrZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDgsIDEyKSA6IDBcbiAgICBjb25zdCByYXdEZWZlbmRlckRhbWFnZSA9IGF0dGFja1R5cGUgPT09ICdtZWxlZScgPyByYW5kb21JbnRJbmNsdXNpdmUoMTcsIDIzKSA6IHJhbmRvbUludEluY2x1c2l2ZSg0LCA2KVxuICAgIGNvbnN0IGF0dGFja2VyRGFtYWdlID0gTWF0aC5taW4oYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0F0dGFja2VyRGFtYWdlKVxuICAgIGNvbnN0IGRlZmVuZGVyRGFtYWdlID0gTWF0aC5taW4oZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0RlZmVuZGVyRGFtYWdlKVxuICAgIGNvbnN0IGNvbWJhdFdvcmxkRXZlbnQgPSB0aGlzLm1ha2VDb21iYXRXb3JsZEV2ZW50KGF0dGFja1R5cGUsIGF0dGFja2VyLCBhdHRhY2tlckRhbWFnZSwgZGVmZW5kZXIsIGRlZmVuZGVyRGFtYWdlKVxuXG4gICAgbGV0IG5ld1dvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChjb21iYXRXb3JsZEV2ZW50KVxuICAgIGNvbnN0IGV2ZW50czogV29ybGRFdmVudFtdID0gW2NvbWJhdFdvcmxkRXZlbnRdXG4gICAgbGV0IG5leHRXb3JsZEV2ZW50SWQgPSB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKyAxXG4gICAgaWYgKG5ld1dvcmxkU3RhdGUuaXNQbGF5ZXJEZWZlYXRlZChkZWZlbmRlci5wbGF5ZXJJZCkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5wbGF5ZXJEZWZlYXRlZEV2ZW50KG5leHRXb3JsZEV2ZW50SWQrKywgZGVmZW5kZXIucGxheWVySWQpXG4gICAgICBldmVudHMucHVzaChldmVudClcbiAgICAgIG5ld1dvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoYXR0YWNrZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGF0dGFja2VyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBjb25zdCB1bmRlZmVhdGVkUGxheWVycyA9IG5ld1dvcmxkU3RhdGUucGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5kZWZlYXRlZClcbiAgICBpZiAoUi5pc0VtcHR5KHVuZGVmZWF0ZWRQbGF5ZXJzKSkge1xuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInIH0pXG4gICAgfSBlbHNlIGlmICh1bmRlZmVhdGVkUGxheWVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHZpY3RvciA9IHVuZGVmZWF0ZWRQbGF5ZXJzWzBdLmlkXG4gICAgICBldmVudHMucHVzaCh7IGlkOiBuZXh0V29ybGRFdmVudElkKyssIHR5cGU6ICdnYW1lT3ZlcicsIHZpY3RvciB9KVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cblxuICBwcml2YXRlIHBsYXllckRlZmVhdGVkRXZlbnQgPSAoaWQ6IFdvcmxkRXZlbnRJZCwgcGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQsXG4gICAgdHlwZTogJ3BsYXllckRlZmVhdGVkJyxcbiAgICBwbGF5ZXJJZDogcGxheWVySWQsXG4gIH0pXG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogeyBhdHRhY2tlcjogVW5pdDsgZGVmZW5kZXI6IFVuaXQgfSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXJJZCA9IGFjdGlvbi5hdHRhY2tlci51bml0SWRcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXJJZClcbiAgICBpZiAoIWF0dGFja2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YClcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLnBsYXllcklkICE9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb250cm9sIGFub3RoZXIgcGxheWVyJ3MgdW5pdDogJHthdHRhY2tlci5pZH1gKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBlbm91Z2ggYWN0aW9uIHBvaW50cyB0byBhdHRhY2tgKVxuICAgIH1cbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGFja2VyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmApXG4gICAgfVxuXG4gICAgY29uc3QgZGVmZW5kZXJJZCA9IGFjdGlvbi5kZWZlbmRlci51bml0SWRcbiAgICBjb25zdCBkZWZlbmRlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXJJZClcbiAgICBpZiAoIWRlZmVuZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVySWR9YClcbiAgICB9XG4gICAgaWYgKGRlZmVuZGVyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhdHRhY2sgb3duIHVuaXRgKVxuICAgIH1cbiAgICBpZiAoIWRlZmVuZGVyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uZGVmZW5kZXIubG9jYXRpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlZmVuZGVyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmApXG4gICAgfVxuXG4gICAgaWYgKCFjYW5BdHRhY2tPY2N1cihhY3Rpb24uYXR0YWNrVHlwZSwgdGhpcy53b3JsZFN0YXRlLm1hcCwgYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCB1bml0IGF0dGFjayBvZiB0eXBlICR7YWN0aW9uLmF0dGFja1R5cGV9IGJldHdlZW4gaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn0gdG9vIGZhciBhcGFydGAsXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB7IGF0dGFja2VyLCBkZWZlbmRlciB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VDb21iYXRXb3JsZEV2ZW50ID0gKFxuICAgIGF0dGFja1R5cGU6IEF0dGFja1R5cGUsXG4gICAgYXR0YWNrZXI6IFVuaXQsXG4gICAgYXR0YWNrZXJEYW1hZ2U6IG51bWJlcixcbiAgICBkZWZlbmRlcjogVW5pdCxcbiAgICBkZWZlbmRlckRhbWFnZTogbnVtYmVyLFxuICApOiBDb21iYXRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICB0eXBlOiAnY29tYmF0JyxcbiAgICBhdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiB7XG4gICAgICBwbGF5ZXJJZDogYXR0YWNrZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGF0dGFja2VyLmlkLFxuICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBhdHRhY2tlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGF0dGFja2VyRGFtYWdlLFxuICAgIH0sXG4gICAgZGVmZW5kZXI6IHtcbiAgICAgIHBsYXllcklkOiBkZWZlbmRlci5wbGF5ZXJJZCxcbiAgICAgIHVuaXRJZDogZGVmZW5kZXIuaWQsXG4gICAgICBsb2NhdGlvbjogZGVmZW5kZXIubG9jYXRpb24sXG4gICAgICBkYW1hZ2U6IGRlZmVuZGVyRGFtYWdlLFxuICAgICAga2lsbGVkOiBkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCA9PT0gZGVmZW5kZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgfSlcbn1cbiIsImltcG9ydCB7XG4gIEpvaW5SZXF1ZXN0LFxuICBKb2luUmVzcG9uc2UsXG4gIFJlam9pblJlcXVlc3QsXG4gIFJlam9pblJlc3BvbnNlLFxuICBXb3JsZEFjdGlvblJlcXVlc3QsXG4gIFdvcmxkRXZlbnRNZXNzYWdlLFxufSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFBlZXJDbGllbnQgfSBmcm9tICcuL3BlZXItY2xpZW50J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vd29ybGQtc3RhdGUtb3duZXInXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyB3aXRoVGltZW91dCB9IGZyb20gJy4uL3V0aWwvYXN5bmMtdXRpbCdcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vc2NlbmVzL2xvY2FsLXN0b3JhZ2UvbG9jYWwnXG5cbmNvbnN0IFRJTUVPVVQgPSA1MDAwXG5cbmV4cG9ydCBjbGFzcyBDbGllbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IHBlZXJDbGllbnQ6IFBlZXJDbGllbnRcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSBfd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBfcGxheWVySWQ6IFBsYXllcklkID0gLTFcblxuICBwdWJsaWMgZ2V0IHdvcmxkU3RhdGUoKTogV29ybGRTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmxkU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGxheWVySWQoKTogUGxheWVySWQge1xuICAgIHJldHVybiB0aGlzLl9wbGF5ZXJJZFxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCwgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwZWVyQ2xpZW50OiBQZWVyQ2xpZW50KSB7XG4gICAgdGhpcy5wZWVyQ2xpZW50ID0gcGVlckNsaWVudFxuICAgIHBlZXJDbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50TWVzc2FnZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlV29ybGRFdmVudE1lc3NhZ2UgPSAobWVzc2FnZTogV29ybGRFdmVudE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBjb25zdCBldmVudCA9IGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5ldmVudClcbiAgICBjb25zdCBwcmV2aW91c1dvcmxkU3RhdGUgPSB0aGlzLl93b3JsZFN0YXRlXG4gICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IHByZXZpb3VzV29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIHRoaXMuX3dvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlXG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY29ubmVjdCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8Q2xpZW50PiA9PiB7XG4gICAgY29uc3QgcGVlckNsaWVudCA9IGF3YWl0IHdpdGhUaW1lb3V0KFRJTUVPVVQpKFBlZXJDbGllbnQuY29ubmVjdChnYW1lSWQpKVxuICAgIHJldHVybiBuZXcgQ2xpZW50KHBlZXJDbGllbnQpXG4gIH1cblxuICBwdWJsaWMgcmVqb2luID0gYXN5bmMgKHBsYXllcklkOiBQbGF5ZXJJZCk6IFByb21pc2U8T3B0aW9uPFdvcmxkU3RhdGU+PiA9PiB7XG4gICAgY29uc3QgcmVxdWVzdDogUmVqb2luUmVxdWVzdCA9IHsgdHlwZTogJ3Jlam9pbicsIHBsYXllcklkIH1cbiAgICBjb25zdCByZXNwb25zZTogUmVqb2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0KHJlcXVlc3QpXG4gICAgc3dpdGNoIChyZXNwb25zZS50eXBlKSB7XG4gICAgICBjYXNlICdyZWpvaW5lZCc6XG4gICAgICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBXb3JsZFN0YXRlLmZyb21Kc29uKHJlc3BvbnNlLndvcmxkU3RhdGUpXG4gICAgICAgIHRoaXMuX3BsYXllcklkID0gcGxheWVySWRcbiAgICAgICAgdGhpcy5fd29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICAgICAgcmV0dXJuIHdvcmxkU3RhdGVcbiAgICAgIGNhc2UgJ3VuYWJsZVRvUmVqb2luJzpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHJlc3BvbnNlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBqb2luID0gYXN5bmMgKCk6IFByb21pc2U8T3B0aW9uPHsgcGxheWVySWQ6IFBsYXllcklkOyB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlIH0+PiA9PiB7XG4gICAgY29uc3QgbmFtZSA9IExvY2FsU3RvcmFnZS5maW5kTmFtZSgpXG4gICAgY29uc3QgcmVxdWVzdDogSm9pblJlcXVlc3QgPSB7IHR5cGU6ICdqb2luJywgbmFtZSB9XG4gICAgY29uc3QgcmVzcG9uc2U6IEpvaW5SZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VuZFJlcXVlc3QocmVxdWVzdClcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2pvaW5lZCc6XG4gICAgICAgIGNvbnN0IHBsYXllcklkID0gcmVzcG9uc2UucGxheWVySWRcbiAgICAgICAgY29uc3Qgd29ybGRTdGF0ZSA9IFdvcmxkU3RhdGUuZnJvbUpzb24ocmVzcG9uc2Uud29ybGRTdGF0ZSlcbiAgICAgICAgdGhpcy5fcGxheWVySWQgPSBwbGF5ZXJJZFxuICAgICAgICB0aGlzLl93b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgICAgICByZXR1cm4geyBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9XG4gICAgICBjYXNlICd1bmFibGVUb0pvaW4nOlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IocmVzcG9uc2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZW5kUmVxdWVzdCA9IGFzeW5jIChyZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4gPT4gd2l0aFRpbWVvdXQoVElNRU9VVCkodGhpcy5wZWVyQ2xpZW50LnNlbmRSZXF1ZXN0KHJlcXVlc3QpKVxuXG4gIHB1YmxpYyBzZW5kQWN0aW9uID0gYXN5bmMgKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFdvcmxkQWN0aW9uUmVxdWVzdCA9IHtcbiAgICAgIHR5cGU6ICd3b3JsZEFjdGlvbicsXG4gICAgICBhY3Rpb246IHNlcmlhbGlzZVRvSnNvbihhY3Rpb24pLFxuICAgICAgcGxheWVySWQ6IHBsYXllcklkLFxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0KHJlcXVlc3QpXG4gIH1cbn1cbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHtcbiAgQnJvYWRjYXN0TWVzc2FnZSxcbiAgRXJyb3JSZXNwb25zZU1lc3NhZ2UsXG4gIFBlZXJJZCxcbiAgUmVxdWVzdElkLFxuICBSZXF1ZXN0TWVzc2FnZSxcbiAgUmVzcG9uc2VNZXNzYWdlLFxuICBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UsXG59IGZyb20gJy4vcGVlci1zZXJ2ZXInXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5pbXBvcnQgeyBuZXdQZWVyIH0gZnJvbSAnLi9wZWVyLXV0aWxzJ1xuaW1wb3J0IHsgUmVqZWN0LCBSZXNvbHZlIH0gZnJvbSAnLi4vdXRpbC9hc3luYy11dGlsJ1xuXG5pbnRlcmZhY2UgUmVzb2x2ZUFuZFJlamVjdDxUPiB7XG4gIHJlc29sdmU6IFJlc29sdmU8VD5cbiAgcmVqZWN0OiBSZWplY3Rcbn1cblxuZXhwb3J0IHR5cGUgUGVlckxpc3RlbmVyID0gKG1lc3NhZ2U6IGFueSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgUGVlckNsaWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvblxuICBwcml2YXRlIHJlYWRvbmx5IG91dHN0YW5kaW5nUmVxdWVzdHM6IE1hcDxSZXF1ZXN0SWQsIFJlc29sdmVBbmRSZWplY3Q8YW55Pj4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFBlZXJMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcihjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvblxuICAgIGNvbm5lY3Rpb24ub24oJ2RhdGEnLCB0aGlzLmhhbmRsZUNvbm5lY3Rpb25EYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb25uZWN0aW9uRGF0YSA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiByZWNlaXZlZCBtZXNzYWdlJylcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdyZXNwb25zZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Vycm9yUmVzcG9uc2UnOlxuICAgICAgICB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UobWVzc2FnZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jyb2FkY2FzdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbm5lY3QgPSAocGVlcklkOiBQZWVySWQpOiBQcm9taXNlPFBlZXJDbGllbnQ+ID0+XG4gICAgbmV3IFByb21pc2U8UGVlckNsaWVudD4oKHJlc29sdmU6IFJlc29sdmU8YW55PiwgcmVqZWN0OiBSZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHBlZXIgPSBuZXdQZWVyKClcbiAgICAgIGxldCByZXNvbHZlZCA9IGZhbHNlXG4gICAgICBwZWVyLm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHBlZXIub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IG9wZW4nKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gcGVlci5jb25uZWN0KHBlZXJJZCwgeyByZWxpYWJsZTogdHJ1ZSB9KVxuICAgICAgICBjb25uZWN0aW9uLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IGNvbm5lY3Rpb24gb3BlbicpXG4gICAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFBlZXJDbGllbnQoY29ubmVjdGlvbilcbiAgICAgICAgICByZXNvbHZlKGNsaWVudClcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICBwdWJsaWMgc2VuZFJlcXVlc3QgPSAocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+ID0+XG4gICAgbmV3IFByb21pc2U8YW55PigocmVzb2x2ZTogUmVzb2x2ZTxhbnk+LCByZWplY3Q6IFJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdE1lc3NhZ2U6IFJlcXVlc3RNZXNzYWdlID0ge1xuICAgICAgICB0eXBlOiAncmVxdWVzdCcsXG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBzZW5kaW5nIHJlcXVlc3QnKVxuICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdE1lc3NhZ2UpXG4gICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChyZXF1ZXN0TWVzc2FnZSlcbiAgICAgIHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5zZXQocmVxdWVzdE1lc3NhZ2UuaWQsIHsgcmVzb2x2ZSwgcmVqZWN0IH0pXG4gICAgfSlcblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlID0gKG1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IG1lc3NhZ2UucmVzcG9uc2VUb1xuICAgIGNvbnN0IHJlc29sdmVBbmRSZWplY3Q6IE9wdGlvbjxSZXNvbHZlQW5kUmVqZWN0PGFueT4+ID0gdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLmdldChyZXF1ZXN0SWQpXG4gICAgaWYgKHJlc29sdmVBbmRSZWplY3QpIHtcbiAgICAgIHJlc29sdmVBbmRSZWplY3QucmVzb2x2ZShtZXNzYWdlLnJlc3BvbnNlKVxuICAgICAgdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLmRlbGV0ZShyZXF1ZXN0SWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDTElFTlQ6IHJlc3BvbnNlIHJlY2VpdmVkIGZvciB1bmtub3duIHJlcXVlc3QgJHtyZXF1ZXN0SWR9YClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yUmVzcG9uc2UgPSAobWVzc2FnZTogRXJyb3JSZXNwb25zZU1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXF1ZXN0SWQgPSBtZXNzYWdlLnJlc3BvbnNlVG9cbiAgICBjb25zdCByZXNvbHZlQW5kUmVqZWN0OiBPcHRpb248UmVzb2x2ZUFuZFJlamVjdDxhbnk+PiA9IHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICAgIGlmIChyZXNvbHZlQW5kUmVqZWN0KSB7XG4gICAgICByZXNvbHZlQW5kUmVqZWN0LnJlamVjdCgnRXJyb3IgcmVjZWl2ZWQgZnJvbSBzZXJ2ZXInKVxuICAgICAgdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLmRlbGV0ZShyZXF1ZXN0SWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDTElFTlQ6IGVycm9yIHJlc3BvbnNlIHJlY2VpdmVkIGZvciB1bmtub3duIHJlcXVlc3QgJHtyZXF1ZXN0SWR9YClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFBlZXJMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFBlZXJMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKG1lc3NhZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVCcm9hZGNhc3QgPSAobWVzc2FnZTogQnJvYWRjYXN0TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKG1lc3NhZ2UuYm9keSlcbiAgfVxufVxuIiwiaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuaW1wb3J0IHsgbmV3UGVlciB9IGZyb20gJy4vcGVlci11dGlscydcblxuZXhwb3J0IHR5cGUgUGVlcklkID0gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RJZCA9IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlIHtcbiAgdHlwZTogJ3JlcXVlc3QnXG4gIGlkOiBSZXF1ZXN0SWRcbiAgcmVxdWVzdDogYW55XG59XG5cbmV4cG9ydCB0eXBlIENsaWVudFRvU2VydmVyTWVzc2FnZSA9IFJlcXVlc3RNZXNzYWdlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VNZXNzYWdlIHtcbiAgdHlwZTogJ3Jlc3BvbnNlJ1xuICByZXNwb25zZVRvOiBSZXF1ZXN0SWRcbiAgcmVzcG9uc2U6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yUmVzcG9uc2VNZXNzYWdlIHtcbiAgdHlwZTogJ2Vycm9yUmVzcG9uc2UnXG4gIHJlc3BvbnNlVG86IFJlcXVlc3RJZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyb2FkY2FzdE1lc3NhZ2Uge1xuICB0eXBlOiAnYnJvYWRjYXN0J1xuICBib2R5OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVyVG9DbGllbnRNZXNzYWdlID0gUmVzcG9uc2VNZXNzYWdlIHwgRXJyb3JSZXNwb25zZU1lc3NhZ2UgfCBCcm9hZGNhc3RNZXNzYWdlXG5cbmV4cG9ydCBjbGFzcyBQZWVyU2VydmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyOiBQZWVyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29ubmVjdGlvbnM6IFBlZXIuRGF0YUNvbm5lY3Rpb25bXSA9IFtdXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55XG5cbiAgY29uc3RydWN0b3IoaWQ6IFBlZXJJZCwgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55KSB7XG4gICAgdGhpcy5oYW5kbGVNZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICAgIHRoaXMucGVlciA9IG5ld1BlZXIoaWQpXG4gICAgdGhpcy5wZWVyLm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgdGhpcy5wZWVyLm9uKCdjb25uZWN0aW9uJywgdGhpcy5oYW5kbGVOZXdDb25uZWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdDb25uZWN0aW9uID0gKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VSVkVSOiByZWNlaXZlZCBuZXcgY29ubmVjdGlvbiBmcm9tICcgKyBjb25uZWN0aW9uLnBlZXIpXG4gICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEoY29ubmVjdGlvbikpXG4gIH1cblxuICBwdWJsaWMgYnJvYWRjYXN0ID0gKG1lc3NhZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJyb2FkY2FzdE1lc3NhZ2U6IEJyb2FkY2FzdE1lc3NhZ2UgPSB7IHR5cGU6ICdicm9hZGNhc3QnLCBib2R5OiBtZXNzYWdlIH1cbiAgICBmb3IgKGNvbnN0IGNvbm5lY3Rpb24gb2YgdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgY29ubmVjdGlvbi5zZW5kKGJyb2FkY2FzdE1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb25uZWN0aW9uRGF0YSA9IChjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSA9PiAobWVzc2FnZTogQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ1NFUlZFUjogcmVjZWl2ZWQgbmV3IG1lc3NhZ2UgZnJvbSAnICsgY29ubmVjdGlvbi5wZWVyKVxuICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgbGV0IHJlc3BvbnNlXG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UucmVxdWVzdClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBlcnJvclJlc3BvbnNlTWVzc2FnZTogRXJyb3JSZXNwb25zZU1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6ICdlcnJvclJlc3BvbnNlJyxcbiAgICAgICAgcmVzcG9uc2VUbzogbWVzc2FnZS5pZCxcbiAgICAgIH1cbiAgICAgIGNvbm5lY3Rpb24uc2VuZChlcnJvclJlc3BvbnNlTWVzc2FnZSlcbiAgICAgIHRocm93IGVcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2VNZXNzYWdlOiBSZXNwb25zZU1lc3NhZ2UgPSB7XG4gICAgICB0eXBlOiAncmVzcG9uc2UnLFxuICAgICAgcmVzcG9uc2VUbzogbWVzc2FnZS5pZCxcbiAgICAgIHJlc3BvbnNlLFxuICAgIH1cbiAgICBjb25uZWN0aW9uLnNlbmQocmVzcG9uc2VNZXNzYWdlKVxuICB9XG59XG4iLCJpbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5cbmV4cG9ydCBjb25zdCBuZXdQZWVyID0gKGlkPzogc3RyaW5nLCBvcHRpb25zPzogUGVlci5QZWVySlNPcHRpb24pOiBQZWVyID0+IHtcbiAgY29uc3QgX1BlZXIgPSAod2luZG93IGFzIGFueSkuUGVlciBhcyB0eXBlb2YgUGVlclxuICByZXR1cm4gbmV3IF9QZWVyKGlkLCBvcHRpb25zKVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciwgV29ybGRTdGF0ZU93bmVyIH0gZnJvbSAnLi93b3JsZC1zdGF0ZS1vd25lcidcbmltcG9ydCB7IFBsYXllckFkZGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgQ2xpZW50UmVxdWVzdCwgSm9pblJlc3BvbnNlLCBSZWpvaW5SZXF1ZXN0LCBSZWpvaW5SZXNwb25zZSwgV29ybGRFdmVudE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEFkZFBsYXllcldvcmxkQWN0aW9uLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgUGVlclNlcnZlciB9IGZyb20gJy4vcGVlci1zZXJ2ZXInXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlT3duZXI6IFdvcmxkU3RhdGVPd25lclxuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2FtZUlkOiBHYW1lSWRcblxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuICBwcml2YXRlIHJlYWRvbmx5IHBlZXJTZXJ2ZXI6IFBlZXJTZXJ2ZXJcblxuICBwdWJsaWMgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gSE9TVF9QTEFZRVJfSURcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ybGRTdGF0ZSgpOiBXb3JsZFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy53b3JsZFN0YXRlT3duZXIud29ybGRTdGF0ZVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZXN0b3JlR2FtZSA9IGFzeW5jICh3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYiwgZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPFNlcnZlcj4gPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHdvcmxkRXZlbnREYi5nZXRFdmVudHNGb3JHYW1lKGdhbWVJZClcbiAgICBjb25zdCBzb3J0ZWRFdmVudHMgPSBSLnNvcnRCeSgoZXZlbnQpID0+IGV2ZW50LmlkLCBldmVudHMpXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEUuYXBwbHlFdmVudHMoc29ydGVkRXZlbnRzKVxuICAgIHJldHVybiBuZXcgU2VydmVyKHdvcmxkRXZlbnREYiwgZ2FtZUlkLCB3b3JsZFN0YXRlLCBldmVudHMubGVuZ3RoICsgMSlcbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3Iod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkLCB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkRXZlbnREYiA9IHdvcmxkRXZlbnREYlxuICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG4gICAgdGhpcy5wZWVyU2VydmVyID0gbmV3IFBlZXJTZXJ2ZXIodGhpcy5nYW1lSWQsIHRoaXMuaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKVxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyID0gbmV3IFdvcmxkU3RhdGVPd25lcih3b3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkKVxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmFkZExpc3RlbmVyKFxuICAgICAgKGV2ZW50OiBXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZSlcbiAgICAgICAgdGhpcy53b3JsZEV2ZW50RGIuc3RvcmUodGhpcy5nYW1lSWQsIGV2ZW50KVxuICAgICAgICBjb25zdCBtZXNzYWdlOiBXb3JsZEV2ZW50TWVzc2FnZSA9IHsgdHlwZTogJ3dvcmxkRXZlbnQnLCBldmVudDogc2VyaWFsaXNlVG9Kc29uKGV2ZW50KSB9XG4gICAgICAgIHRoaXMucGVlclNlcnZlci5icm9hZGNhc3QobWVzc2FnZSlcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRKb2luID0gKG5hbWU6IE9wdGlvbjxzdHJpbmc+KTogSm9pblJlc3BvbnNlID0+IHtcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiAndW5hYmxlVG9Kb2luJyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFkZFBsYXllckFjdGlvbjogQWRkUGxheWVyV29ybGRBY3Rpb24gPSB7IHR5cGU6ICdhZGRQbGF5ZXInLCBuYW1lIH1cbiAgICAgIGNvbnN0IHBsYXllckFkZGVkRXZlbnQgPSA8UGxheWVyQWRkZWRXb3JsZEV2ZW50PnRoaXMuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIGFkZFBsYXllckFjdGlvbilbMF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdqb2luZWQnLFxuICAgICAgICBwbGF5ZXJJZDogcGxheWVyQWRkZWRFdmVudC5wbGF5ZXJJZCxcbiAgICAgICAgd29ybGRTdGF0ZTogdGhpcy53b3JsZFN0YXRlLnRvSnNvbigpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50UmVqb2luID0gKG1lc3NhZ2U6IFJlam9pblJlcXVlc3QpOiBSZWpvaW5SZXNwb25zZSA9PiB7XG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgIGlmICh3b3JsZFN0YXRlLmlzVmFsaWRQbGF5ZXJJZChtZXNzYWdlLnBsYXllcklkKSkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ3Jlam9pbmVkJywgd29ybGRTdGF0ZTogd29ybGRTdGF0ZS50b0pzb24oKSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IHR5cGU6ICd1bmFibGVUb1Jlam9pbicgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlID0gKG1lc3NhZ2U6IENsaWVudFJlcXVlc3QpOiBhbnkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2pvaW4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDbGllbnRKb2luKG1lc3NhZ2UubmFtZSlcbiAgICAgIGNhc2UgJ3Jlam9pbic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsaWVudFJlam9pbihtZXNzYWdlKVxuICAgICAgY2FzZSAnd29ybGRBY3Rpb24nOlxuICAgICAgICB0aGlzLndvcmxkU3RhdGVPd25lci5oYW5kbGVBY3Rpb24obWVzc2FnZS5wbGF5ZXJJZCwgZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmFjdGlvbikpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PlxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihwbGF5ZXJJZCwgYWN0aW9uKVxuXG4gIHB1YmxpYyBzZW5kQWN0aW9uID0gYXN5bmMgKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uKHBsYXllcklkLCBhY3Rpb24pXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBBZGRQbGF5ZXJXb3JsZEFjdGlvbixcbiAgQXR0YWNrV29ybGRBY3Rpb24sXG4gIENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbixcbiAgQ2hhdFdvcmxkQWN0aW9uLFxuICBFbmRUdXJuV29ybGRBY3Rpb24sXG4gIEluaXRpYWxpc2VXb3JsZEFjdGlvbixcbiAgS2lja1BsYXllcldvcmxkQWN0aW9uLFxuICBNb3ZlVW5pdFdvcmxkQWN0aW9uLFxuICBXb3JsZEFjdGlvbixcbn0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7XG4gIENoYXRXb3JsZEV2ZW50LFxuICBHYW1lU3RhcnRlZFdvcmxkRXZlbnQsXG4gIEluaXRpYWxpc2VXb3JsZEV2ZW50LFxuICBOZXdUdXJuV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQsXG4gIFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQsXG4gIFBsYXllcktpY2tlZFdvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRHZW5lcmF0b3IgfSBmcm9tICcuL3dvcmxkLWdlbmVyYXRvcidcbmltcG9ydCB7IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB9IGZyb20gJy4vYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY2xhc3MgV29ybGRBY3Rpb25IYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHByaXZhdGUgcmVhZG9ubHkgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgcGxheWVySWQ6IFBsYXllcklkLCBuZXh0V29ybGRFdmVudElkOiBudW1iZXIpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZVdvcmxkRXZlbnRzID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuY2FsY3VsYXRlU3BlY2lmaWNXb3JsZEV2ZW50cyhhY3Rpb24pXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5OZXdUdXJuSWZOZWVkZWQoZXZlbnRzKVxuICB9XG5cbiAgcHJpdmF0ZSBiZWdpbk5ld1R1cm5JZk5lZWRlZChldmVudHM6IFdvcmxkRXZlbnRbXSkge1xuICAgIGNvbnN0IGxhc3RFdmVudCA9IFIubGFzdChldmVudHMpXG4gICAgaWYgKGxhc3RFdmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50cyhldmVudHMpXG4gICAgICBpZiAobmV3V29ybGRTdGF0ZS50dXJuID09PSAwIHx8IG5ld1dvcmxkU3RhdGUuY2FuQW55UGxheWVyQWN0KCkgfHwgbmV3V29ybGRTdGF0ZS51bml0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV4dFdvcmxkRXZlbnRJZCA9IGxhc3RFdmVudC5pZCArIDFcbiAgICAgICAgY29uc3QgbmV3VHVybkV2ZW50OiBOZXdUdXJuV29ybGRFdmVudCA9IHsgaWQ6IG5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICduZXdUdXJuJyB9XG4gICAgICAgIHJldHVybiBSLmFwcGVuZChuZXdUdXJuRXZlbnQsIGV2ZW50cylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVNwZWNpZmljV29ybGRFdmVudHMgPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUluaXRpYWxpc2UoYWN0aW9uKVxuICAgICAgY2FzZSAnYWRkUGxheWVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWRkUGxheWVyKGFjdGlvbilcbiAgICAgIGNhc2UgJ2NoYW5nZVBsYXllck5hbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lKGFjdGlvbilcbiAgICAgIGNhc2UgJ3N0YXJ0R2FtZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVN0YXJ0R2FtZSgpXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBdHRhY2soYWN0aW9uKVxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlVW5pdChhY3Rpb24pXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybihhY3Rpb24pXG4gICAgICBjYXNlICdjaGF0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2hhdChhY3Rpb24pXG4gICAgICBjYXNlICdraWNrUGxheWVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlS2lja1BsYXllcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbml0aWFsaXNlID0gKGFjdGlvbjogSW5pdGlhbGlzZVdvcmxkQWN0aW9uKTogW0luaXRpYWxpc2VXb3JsZEV2ZW50XSA9PiB7XG4gICAgaWYgKHRoaXMubmV4dFdvcmxkRXZlbnRJZCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG9ubHkgaW5pdGlhbGlzZSBhcyB0aGUgZmlyc3QgZXZlbnRgKVxuICAgIH1cbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ2luaXRpYWxpc2UnLCBzdGF0ZTogYWN0aW9uLnN0YXRlIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFkZFBsYXllciA9IChhY3Rpb246IEFkZFBsYXllcldvcmxkQWN0aW9uKTogW1BsYXllckFkZGVkV29ybGRFdmVudF0gPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nUGxheWVySWRzID0gdGhpcy53b3JsZFN0YXRlLmdldFBsYXllcklkcygpXG4gICAgY29uc3QgcGxheWVySWQgPSBSLmFwcGx5KE1hdGgubWF4LCBleGlzdGluZ1BsYXllcklkcykgKyAxXG4gICAgY29uc3QgbmFtZSA9IGFjdGlvbi5uYW1lID8/IGBQbGF5ZXIgJHtwbGF5ZXJJZH1gXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdwbGF5ZXJBZGRlZCcsIHBsYXllcklkLCBuYW1lIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVBsYXllck5hbWUgPSAoYWN0aW9uOiBDaGFuZ2VQbGF5ZXJOYW1lV29ybGRBY3Rpb24pOiBbUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50XSA9PiB7XG4gICAgdGhpcy5nZXRQbGF5ZXIoKVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAncGxheWVyQ2hhbmdlZE5hbWUnLCBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCwgbmFtZTogYWN0aW9uLm5hbWUgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gKCk6IFtHYW1lU3RhcnRlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzdGFydCBhbiBhbHJlYWR5LXN0YXJ0ZWQgZ2FtZWApXG4gICAgfVxuICAgIGlmICh0aGlzLnBsYXllcklkICE9PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc3RhcnQgdGhlIGdhbWUgdW5sZXNzIHRoZSBob3N0YClcbiAgICB9XG4gICAgY29uc3Qgd29ybGRHZW5lcmF0b3IgPSBuZXcgV29ybGRHZW5lcmF0b3IodGhpcy53b3JsZFN0YXRlKVxuICAgIGNvbnN0IHVuaXRzID0gd29ybGRHZW5lcmF0b3IuZ2VuZXJhdGVVbml0cygpXG4gICAgY29uc3QgbW91bnRhaW5zID0gd29ybGRHZW5lcmF0b3IuZ2VuZXJhdGVNb3VudGFpbnMoKVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnZ2FtZVN0YXJ0ZWQnLCB1bml0cywgbW91bnRhaW5zIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgbmV3IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHRoaXMucGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZCkuaGFuZGxlQXR0YWNrKGFjdGlvbilcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFtVbml0TW92ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRvIH0gPSBhY3Rpb25cbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gKVxuICAgIH1cbiAgICBjb25zdCBmcm9tID0gdW5pdC5sb2NhdGlvblxuICAgIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YClcbiAgICB9XG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWApXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gYWxyZWFkeS1vY2N1cGllZCBoZXhgKVxuICAgIH1cbiAgICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgKVxuICAgIH1cbiAgICBpZiAodW5pdC5wbGF5ZXJJZCAhPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgbW92ZSBhbm90aGVyIHBsYXllcidzIHVuaXRgKVxuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLFxuICAgICAgICB0eXBlOiAndW5pdE1vdmVkJyxcbiAgICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgICAgIGFjdGlvblBvaW50c0NvbnN1bWVkOiAxLFxuICAgICAgICB1bml0SWQsXG4gICAgICAgIGZyb20sXG4gICAgICAgIHRvLFxuICAgICAgfSxcbiAgICBdXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVuZFR1cm4gPSAoYWN0aW9uOiBFbmRUdXJuV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGlmIChhY3Rpb24udHVybiAhPT0gdGhpcy53b3JsZFN0YXRlLnR1cm4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGVuZCBhIHR1cm4gdGhhdCdzIG5vdCB0aGUgY3VycmVudCB0dXJuYClcbiAgICB9XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKVxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsYXllciBoYXMgYWxyZWFkeSBlbmRlZCB0aGVpciB0dXJuYClcbiAgICB9XG4gICAgY29uc3QgcGxheWVyRW5kZWRUdXJuQWN0aW9uOiBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50ID0ge1xuICAgICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICAgIHR5cGU6ICdwbGF5ZXJFbmRlZFR1cm4nLFxuICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgfVxuICAgIHJldHVybiBbcGxheWVyRW5kZWRUdXJuQWN0aW9uXVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsYXllciB3aXRoIElEICR7dGhpcy5wbGF5ZXJJZH1gKVxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYXQgPSAoYWN0aW9uOiBDaGF0V29ybGRBY3Rpb24pOiBbQ2hhdFdvcmxkRXZlbnRdID0+IFtcbiAgICB7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdjaGF0JywgcGxheWVySWQ6IHRoaXMucGxheWVySWQsIG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlIH0sXG4gIF1cblxuICBwcml2YXRlIGhhbmRsZUtpY2tQbGF5ZXIgPSAoYWN0aW9uOiBLaWNrUGxheWVyV29ybGRBY3Rpb24pOiBbUGxheWVyS2lja2VkV29ybGRFdmVudF0gPT4ge1xuICAgIGNvbnN0IHBsYXllcklkID0gYWN0aW9uLnBsYXllcklkXG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGxheWVyIHdpdGggSUQgJHtwbGF5ZXJJZH1gKVxuICAgIH1cbiAgICBpZiAocGxheWVySWQgPT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBraWNrIGhvc3RgKVxuICAgIH1cbiAgICBpZiAodGhpcy5wbGF5ZXJJZCAhPT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT25seSB0aGUgaG9zdCBjYW4ga2ljayBwbGF5ZXJzYClcbiAgICB9XG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdwbGF5ZXJLaWNrZWQnLCBwbGF5ZXJJZCB9XVxuICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyByYW5kb21FbGVtZW50IH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuY29uc3QgTExBTUFfTkFNRVMgPSBbXG4gICdXYWx0ZXInLFxuICAnRG9sbHknLFxuICAnQ2hld3BhY2EnLFxuICAnQmFyYWNrIE8uIExsYW1hJyxcbiAgJ0NvbW8gU2UnLFxuICAnRnV6enknLFxuICAnSmVyZW15JyxcbiAgJ0FsZm9uc28nLFxuICAnUm9zZScsXG4gICdMb3JlbnpvJyxcbiAgJ1JpdGEnLFxuICAnQW50b24nLFxuICAnQmVybmFyZCcsXG4gICdDYXNzaWUnLFxuICAnRnJhbmNlc2NhJyxcbiAgJ01pbGx5JyxcbiAgJ0NhcmxvcycsXG4gICdSaWNhcmRvJyxcbl1cblxuZXhwb3J0IGNsYXNzIFdvcmxkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVtYWluaW5nSGV4ZXM6IEhleFtdXG4gIHByaXZhdGUgbmV4dFVuaXRJZDogVW5pdElkID0gMVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IEFycmF5LmZyb20od29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVbml0ID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXQgPT4ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5uZXh0VW5pdElkKytcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJhbmRvbUVsZW1lbnQodGhpcy5yZW1haW5pbmdIZXhlcylcbiAgICB0aGlzLnJlbWFpbmluZ0hleGVzID0gUi53aXRob3V0KFtsb2NhdGlvbl0sIHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgY29uc3QgbmFtZSA9IHJhbmRvbUVsZW1lbnQoTExBTUFfTkFNRVMpXG4gICAgcmV0dXJuIG5ldyBVbml0KHtcbiAgICAgIGlkLFxuICAgICAgcGxheWVySWQsXG4gICAgICBuYW1lLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBhY3Rpb25Qb2ludHM6IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiAyLCBtYXg6IDIgfSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlTW91bnRhaW4gPSAoKTogSGV4ID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJhbmRvbUVsZW1lbnQodGhpcy5yZW1haW5pbmdIZXhlcylcbiAgICB0aGlzLnJlbWFpbmluZ0hleGVzID0gUi53aXRob3V0KFtsb2NhdGlvbl0sIHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgcmV0dXJuIGxvY2F0aW9uXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVNb3VudGFpbnMgPSAoKTogSGV4W10gPT4gUi5yYW5nZSgxLCAxMCkubWFwKHRoaXMuZ2VuZXJhdGVNb3VudGFpbilcblxuICBwdWJsaWMgZ2VuZXJhdGVVbml0cyA9ICgpOiBVbml0W10gPT5cbiAgICBSLmNoYWluKChwbGF5ZXIpID0+IFt0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpLCB0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpXSwgdGhpcy53b3JsZFN0YXRlLnBsYXllcnMpXG59XG4iLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL3dvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFdvcmxkRXZlbnRMaXN0ZW5lciA9IChldmVudDogV29ybGRFdmVudCwgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBXb3JsZFN0YXRlT3duZXIge1xuICBwdWJsaWMgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIG5leHRXb3JsZEV2ZW50SWQ6IFdvcmxkRXZlbnRJZFxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5leHRXb3JsZEV2ZW50SWQ6IFdvcmxkRXZlbnRJZCkge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCwgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3Qgd29ybGRBY3Rpb25IYW5kbGVyID0gbmV3IFdvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHBsYXllcklkLCB0aGlzLm5leHRXb3JsZEV2ZW50SWQpXG4gICAgY29uc3QgZXZlbnRzID0gd29ybGRBY3Rpb25IYW5kbGVyLmNhbGN1bGF0ZVdvcmxkRXZlbnRzKGFjdGlvbilcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgY29uc3QgcHJldmlvdXNXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgICBjb25zdCBuZXdXb3JsZFN0YXRlID0gcHJldmlvdXNXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgICB0aGlzLndvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICAgIH1cbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKz0gZXZlbnRzLmxlbmd0aFxuICAgIHJldHVybiBldmVudHNcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9zY2VuZXMvYXNzZXQta2V5cydcblxuZXhwb3J0IGNsYXNzIFByaW1hcnlCdXR0b24ge1xuICBwcml2YXRlIHJlYWRvbmx5IGVuZFR1cm5CdXR0b246IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICBwcml2YXRlIHJlYWRvbmx5IGVuZFR1cm5UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uUHJlc3NlZDogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZW5kVHVybkJ1dHRvbiA9IHNjZW5lLmFkZFxuICAgICAgLmltYWdlKHgsIHksICdibGFuay1idXR0b24nKVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmVuZFR1cm5CdXR0b24uc2V0VGV4dHVyZShJbWFnZUtleXMuQkxBTktfQlVUVE9OX1BSRVNTRUQpKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kVHVybkJ1dHRvbi5zZXRUZXh0dXJlKEltYWdlS2V5cy5CTEFOS19CVVRUT04pXG4gICAgICAgIHNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICBvblByZXNzZWQoKVxuICAgICAgfSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuZW5kVHVybkJ1dHRvbi5zZXRUZXh0dXJlKEltYWdlS2V5cy5CTEFOS19CVVRUT04pKVxuICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgIHRoaXMuZW5kVHVyblRleHQgPSBzY2VuZS5hZGRcbiAgICAgIC50ZXh0KHggKyB0aGlzLmVuZFR1cm5CdXR0b24ud2lkdGggLyAyLCB5ICsgdGhpcy5lbmRUdXJuQnV0dG9uLmhlaWdodCAvIDIsIHRleHQsIHtcbiAgICAgICAgZmlsbDogJyNmZmZmZmYnLFxuICAgICAgfSlcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgICAgLnNldEZvbnRTaXplKDE4KVxuICAgICAgLnNldFNoYWRvdygyLCAyLCAnIzAwMDAwMCcpXG4gIH1cblxuICBwdWJsaWMgc2V0VmlzaWJsZSA9ICh2aXNpYmxlOiBib29sZWFuKTogdGhpcyA9PiB7XG4gICAgdGhpcy5lbmRUdXJuQnV0dG9uLnNldFZpc2libGUodmlzaWJsZSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFZpc2libGUodmlzaWJsZSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcHVibGljIHNldFkgPSAoeTogbnVtYmVyKTogdGhpcyA9PiB7XG4gICAgdGhpcy5lbmRUdXJuQnV0dG9uLnNldFkoeSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFkoeSArIHRoaXMuZW5kVHVybkJ1dHRvbi5oZWlnaHQgLyAyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEJsdWViaXJkIGZyb20gJ2JsdWViaXJkJ1xuXG5leHBvcnQgY29uc3QgZmlyZUFuZEZvcmdldCA9IDxUPihhc3luY1Rhc2s6ICgpID0+IFByb21pc2U8VD4pOiB2b2lkID0+IHtcbiAgYXN5bmNUYXNrKClcbn1cblxuZXhwb3J0IGNvbnN0IHdpdGhUaW1lb3V0ID0gKHRpbWVvdXQ6IG51bWJlcikgPT4gPFQ+KHByb21pc2U6IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+ID0+XG4gIEJsdWViaXJkLlByb21pc2UucmVzb2x2ZShwcm9taXNlKS50aW1lb3V0KHRpbWVvdXQpXG5cbmV4cG9ydCB0eXBlIFJlc29sdmU8VD4gPSAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWRcbmV4cG9ydCB0eXBlIFJlamVjdCA9IChyZWFzb24/OiBhbnkpID0+IHZvaWRcbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuLi93b3JsZC9oaXQtcG9pbnRzJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGlzZVRvSnNvbiA9ICh2YWx1ZTogYW55KTogYW55ID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChzZXJpYWxpc2VUb0pzb24pXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSGV4KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0hleCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdvcmxkTWFwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1dvcmxkTWFwJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV29ybGRTdGF0ZSkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdXb3JsZFN0YXRlJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVW5pdCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdVbml0JyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSGl0UG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0hpdFBvaW50cycgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFjdGlvblBvaW50cykge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdBY3Rpb25Qb2ludHMnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnUGxheWVyJyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdPYmplY3Q6IGFueSA9IHt9XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IHNlcmlhbGlzZVRvSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGlzZUZyb21Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGRlc2VyaWFsaXNlRnJvbUpzb24pXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnSGV4Jykge1xuICAgICAgICByZXR1cm4gSGV4LmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1dvcmxkTWFwJykge1xuICAgICAgICByZXR1cm4gV29ybGRNYXAuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnV29ybGRTdGF0ZScpIHtcbiAgICAgICAgcmV0dXJuIFdvcmxkU3RhdGUuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnVW5pdCcpIHtcbiAgICAgICAgcmV0dXJuIFVuaXQuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnQWN0aW9uUG9pbnRzJykge1xuICAgICAgICByZXR1cm4gQWN0aW9uUG9pbnRzLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ0hpdFBvaW50cycpIHtcbiAgICAgICAgcmV0dXJuIEhpdFBvaW50cy5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdQbGF5ZXInKSB7XG4gICAgICAgIHJldHVybiBQbGF5ZXIuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdPYmplY3Q6IGFueSA9IHt9XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IGRlc2VyaWFsaXNlRnJvbUpzb24odmFsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3RcbiAgICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFR3ZWVuID0gUGhhc2VyLlR3ZWVucy5Ud2VlblxuXG5leHBvcnQgY29uc3QgcGxheVR3ZWVuID0gKHR3ZWVuOiBUd2Vlbik6IFByb21pc2U8dm9pZD4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHR3ZWVuLnNldENhbGxiYWNrKCdvbkNvbXBsZXRlJywgcmVzb2x2ZSwgW10pLnBsYXkoKSlcbiIsImV4cG9ydCBjb25zdCByYW5kb21JbnRJbmNsdXNpdmUgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUludEV4Y2x1c2l2ZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluXG5cbmV4cG9ydCBjb25zdCByYW5kb21FbGVtZW50ID0gPFQ+KGFycmF5OiBUW10pOiBUID0+IGFycmF5W3JhbmRvbUludEV4Y2x1c2l2ZSgwLCBhcnJheS5sZW5ndGgpXVxuIiwiZXhwb3J0IHR5cGUgT3B0aW9uPFQ+ID0gVCB8IHVuZGVmaW5lZFxuXG5leHBvcnQgaW50ZXJmYWNlIEp1c3Q8VD4ge1xuICB0eXBlOiAnanVzdCdcbiAgaXRlbTogVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGhpbmcge1xuICB0eXBlOiAnbm90aGluZydcbn1cblxuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBKdXN0PFQ+IHwgTm90aGluZ1xuXG5leHBvcnQgY29uc3QgdG9NYXliZSA9IDxUPihvcHRpb246IE9wdGlvbjxUPik6IE1heWJlPFQ+ID0+IChvcHRpb24gPT09IHVuZGVmaW5lZCA/IG5vdGhpbmcgOiBqdXN0KG9wdGlvbikpXG5cbmV4cG9ydCBjb25zdCB0b09wdGlvbiA9IDxUPihtYXliZTogTWF5YmU8VD4pOiBPcHRpb248VD4gPT4ge1xuICBzd2l0Y2ggKG1heWJlLnR5cGUpIHtcbiAgICBjYXNlICdqdXN0JzpcbiAgICAgIHJldHVybiBtYXliZS5pdGVtXG4gICAgY2FzZSAnbm90aGluZyc6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5vdGhpbmc6IE5vdGhpbmcgPSB7IHR5cGU6ICdub3RoaW5nJyB9XG5leHBvcnQgY29uc3QganVzdCA9IDxUPihpdGVtOiBUKTogSnVzdDxUPiA9PiAoe1xuICB0eXBlOiAnanVzdCcsXG4gIGl0ZW0sXG59KVxuIiwiZXhwb3J0IGNsYXNzIFVucmVhY2hhYmxlQ2FzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbmV2ZXIpIHtcbiAgICBzdXBlcihgVW5yZWFjaGFibGUgY2FzZTogJHt2YWx1ZX1gKVxuICB9XG59XG4iLCJpbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIEFjdGlvblBvaW50cyB7XG4gIHJlYWRvbmx5IGN1cnJlbnQ6IG51bWJlclxuICByZWFkb25seSBtYXg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgY3VycmVudCwgbWF4IH06IHsgY3VycmVudDogbnVtYmVyOyBtYXg6IG51bWJlciB9KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMubWF4ID0gbWF4XG4gICAgYXNzZXJ0KG1heCA+IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPj0gMClcbiAgICBhc3NlcnQoY3VycmVudCA8PSBtYXgpXG4gIH1cblxuICBwdWJsaWMgcmVkdWNlID0gKHBvaW50czogbnVtYmVyKTogQWN0aW9uUG9pbnRzID0+IHRoaXMuY29weSh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCAtIHBvaW50cyB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHsgY3VycmVudCA9IHRoaXMuY3VycmVudCwgbWF4ID0gdGhpcy5tYXggfTogeyBjdXJyZW50PzogbnVtYmVyOyBtYXg/OiBudW1iZXIgfSA9IHt9KTogQWN0aW9uUG9pbnRzID0+XG4gICAgbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQsIG1heCB9KVxuXG4gIHB1YmxpYyByZWZyZXNoID0gKCk6IEFjdGlvblBvaW50cyA9PiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogdGhpcy5tYXgsIG1heDogdGhpcy5tYXggfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQsIG1heDogdGhpcy5tYXggfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEFjdGlvblBvaW50cyA9PiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDoganNvbi5jdXJyZW50LCBtYXg6IGpzb24ubWF4IH0pXG59XG4iLCJpbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleCwgSGV4VmVjdG9yIH0gZnJvbSAnLi9oZXgnXG5cbmV4cG9ydCBlbnVtIEhleERpcmVjdGlvbiB7XG4gIEVBU1QgPSAnRUFTVCcsXG4gIFdFU1QgPSAnV0VTVCcsXG4gIE5PUlRIX0VBU1QgPSAnTk9SVEhfRUFTVCcsXG4gIFNPVVRIX0VBU1QgPSAnU09VVEhfRUFTVCcsXG4gIE5PUlRIX1dFU1QgPSAnTk9SVEhfV0VTVCcsXG4gIFNPVVRIX1dFU1QgPSAnU09VVEhfV0VTVCcsXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfRElSRUNUSU9OUyA9IFtcbiAgSGV4RGlyZWN0aW9uLkVBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9FQVNULFxuICBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCxcbiAgSGV4RGlyZWN0aW9uLldFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVCxcbl1cblxuZXhwb3J0IGNvbnN0IGdldFVuaXRWZWN0b3IgPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXhWZWN0b3IgPT4ge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgSGV4RGlyZWN0aW9uLkVBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLldFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgtMSwgMClcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMSwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIC0xKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgwLCAxKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgtMSwgMSlcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGRpcmVjdGlvbilcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IGdldFVuaXRWZWN0b3IsIEhleERpcmVjdGlvbiB9IGZyb20gJy4vaGV4LWRpcmVjdGlvbidcblxuZXhwb3J0IGNsYXNzIEhleCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBnZXQgeigpOiBudW1iZXIge1xuICAgIHJldHVybiAtdGhpcy54IC0gdGhpcy55XG4gIH1cblxuICBwdWJsaWMgcGx1cyA9ICh0aGF0OiBIZXgpOiBIZXggPT4gbmV3IEhleCh0aGlzLnggKyB0aGF0LngsIHRoaXMueSArIHRoYXQueSlcblxuICBwdWJsaWMgbmVpZ2hib3VycyA9ICgpOiBIZXhbXSA9PiBIZXguTkVJR0hCT1VSUy5tYXAodGhpcy5wbHVzKVxuXG4gIHB1YmxpYyBpc0FkamFjZW50VG8gPSAodGhhdDogSGV4KTogYm9vbGVhbiA9PiBSLmluY2x1ZGVzKHRoYXQsIHRoaXMubmVpZ2hib3VycygpKVxuXG4gIHB1YmxpYyBkaXN0YW5jZVRvID0gKHRoYXQ6IEhleCk6IG51bWJlciA9PlxuICAgIChNYXRoLmFicyh0aGlzLnggLSB0aGF0LngpICsgTWF0aC5hYnModGhpcy55IC0gdGhhdC55KSArIE1hdGguYWJzKHRoaXMueiAtIHRoYXQueikpIC8gMlxuXG4gIHByaXZhdGUgc3RhdGljIE5FSUdIQk9VUlM6IEhleFtdID0gW1xuICAgIG5ldyBIZXgoMCwgMSksXG4gICAgbmV3IEhleCgxLCAwKSxcbiAgICBuZXcgSGV4KDEsIC0xKSxcbiAgICBuZXcgSGV4KDAsIC0xKSxcbiAgICBuZXcgSGV4KC0xLCAwKSxcbiAgICBuZXcgSGV4KC0xLCAxKSxcbiAgXVxuXG4gIHB1YmxpYyBlcXVhbHMgPSAodGhhdDogSGV4KTogYm9vbGVhbiA9PiB0aGlzLnggPT09IHRoYXQueCAmJiB0aGlzLnkgPT09IHRoYXQueVxuXG4gIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4gYEhleCgke3RoaXMueH0sICR7dGhpcy55fSlgXG5cbiAgcHVibGljIGdvID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogSGV4ID0+IHRoaXMucGx1cyhnZXRVbml0VmVjdG9yKGRpcmVjdGlvbikpXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhleCA9PiBuZXcgSGV4KGpzb24ueCwganNvbi55KVxufVxuXG5leHBvcnQgdHlwZSBIZXhWZWN0b3IgPSBIZXhcbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgSGl0UG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBIaXRQb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBIaXRQb2ludHMgPT5cbiAgICBuZXcgSGl0UG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIaXRQb2ludHMgPT4gbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxufVxuIiwiaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllciB9IGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9XT1JMRF9TVEFURTogV29ybGRTdGF0ZSA9IG5ldyBXb3JsZFN0YXRlKHtcbiAgdHVybjogMCxcbiAgbWFwOiBuZXcgV29ybGRNYXAoeyB3aWR0aDogMTAsIGhlaWdodDogNiB9KSxcbiAgcGxheWVyczogW1xuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQ6IEhPU1RfUExBWUVSX0lELFxuICAgICAgbmFtZTogJ1BsYXllciAxJyxcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIHVuaXRzOiBbXSxcbn0pXG4iLCJleHBvcnQgY29uc3QgSE9TVF9QTEFZRVJfSUQgPSAxXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICByZWFkb25seSBpZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGVuZGVkVHVybjogYm9vbGVhblxuICByZWFkb25seSBkZWZlYXRlZDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGVuZGVkVHVybiA9IGZhbHNlLFxuICAgIGRlZmVhdGVkID0gZmFsc2UsXG4gIH06IHtcbiAgICBpZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBlbmRlZFR1cm4/OiBib29sZWFuXG4gICAgZGVmZWF0ZWQ/OiBib29sZWFuXG4gIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5lbmRlZFR1cm4gPSBlbmRlZFR1cm5cbiAgICB0aGlzLmRlZmVhdGVkID0gZGVmZWF0ZWRcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBpZCA9IHRoaXMuaWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBlbmRlZFR1cm4gPSB0aGlzLmVuZGVkVHVybixcbiAgICBkZWZlYXRlZCA9IHRoaXMuZGVmZWF0ZWQsXG4gIH06IHsgaWQ/OiBQbGF5ZXJJZDsgbmFtZT86IHN0cmluZzsgZW5kZWRUdXJuPzogYm9vbGVhbjsgZGVmZWF0ZWQ/OiBib29sZWFuIH0gPSB7fSk6IFBsYXllciA9PlxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgZW5kZWRUdXJuLFxuICAgICAgZGVmZWF0ZWQsXG4gICAgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBpZDogdGhpcy5pZCwgbmFtZTogdGhpcy5uYW1lLCBlbmRlZFR1cm46IHRoaXMuZW5kZWRUdXJuLCBkZWZlYXRlZDogdGhpcy5kZWZlYXRlZCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGVuZGVkVHVybjoganNvbi5lbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZDoganNvbi5kZWZlYXRlZCxcbiAgICB9KVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBVbml0SWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFVuaXQge1xuICByZWFkb25seSBpZDogVW5pdElkXG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgbG9jYXRpb246IEhleFxuICByZWFkb25seSBoaXRQb2ludHM6IEhpdFBvaW50c1xuICByZWFkb25seSBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBwbGF5ZXJJZCxcbiAgICBuYW1lLFxuICAgIGxvY2F0aW9uLFxuICAgIGhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZDogVW5pdElkXG4gICAgcGxheWVySWQ6IFBsYXllcklkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgbG9jYXRpb246IEhleFxuICAgIGhpdFBvaW50czogSGl0UG9pbnRzXG4gICAgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgICB0aGlzLmhpdFBvaW50cyA9IGhpdFBvaW50c1xuICAgIHRoaXMuYWN0aW9uUG9pbnRzID0gYWN0aW9uUG9pbnRzXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLmRhbWFnZShwb2ludHMpIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24sXG4gICAgaGl0UG9pbnRzID0gdGhpcy5oaXRQb2ludHMsXG4gICAgYWN0aW9uUG9pbnRzID0gdGhpcy5hY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZD86IFVuaXRJZFxuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgbG9jYXRpb24/OiBIZXhcbiAgICBoaXRQb2ludHM/OiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM/OiBBY3Rpb25Qb2ludHNcbiAgfSA9IHt9KTogVW5pdCA9PiBuZXcgVW5pdCh7IGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0pXG5cbiAgcHVibGljIG1vdmUgPSAobG9jYXRpb246IEhleCwgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBsb2NhdGlvbiwgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZHVjZUFjdGlvblBvaW50cyA9IChhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWZyZXNoQWN0aW9uUG9pbnRzID0gKCk6IFVuaXQgPT4gdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWZyZXNoKCkgfSlcblxuICBwdWJsaWMgZ2V0IGhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPiAwXG4gIH1cblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIGlkOiB0aGlzLmlkLFxuICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbi50b0pzb24oKSxcbiAgICBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLnRvSnNvbigpLFxuICAgIGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMudG9Kc29uKCksXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBVbml0ID0+XG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICBwbGF5ZXJJZDoganNvbi5wbGF5ZXJJZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGxvY2F0aW9uOiBIZXguZnJvbUpzb24oanNvbi5sb2NhdGlvbiksXG4gICAgICBoaXRQb2ludHM6IEhpdFBvaW50cy5mcm9tSnNvbihqc29uLmhpdFBvaW50cyksXG4gICAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cy5mcm9tSnNvbihqc29uLmFjdGlvblBvaW50cyksXG4gICAgfSlcbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENoYXRXb3JsZEV2ZW50LFxuICBDb21iYXRXb3JsZEV2ZW50LFxuICBHYW1lT3ZlcldvcmxkRXZlbnQsXG4gIEdhbWVTdGFydGVkV29ybGRFdmVudCxcbiAgSW5pdGlhbGlzZVdvcmxkRXZlbnQsXG4gIFBsYXllckFkZGVkV29ybGRFdmVudCxcbiAgUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50LFxuICBQbGF5ZXJEZWZlYXRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQsXG4gIFBsYXllcktpY2tlZFdvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4vd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IHsgY2FuQXR0YWNrT2NjdXIgfSBmcm9tICcuLi9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICByZXR1cm4gaGFuZGxlSW5pdGlhbGlzZShldmVudClcbiAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQWRkZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckNoYW5nZWROYW1lJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZShzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVTdGFydGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVVuaXRNb3ZlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnY29tYmF0JzpcbiAgICAgIHJldHVybiBoYW5kbGVDb21iYXQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRW5kZWRUdXJuKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRGVmZWF0ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1R1cm4oc3RhdGUpXG4gICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVPdmVyKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdjaGF0JzpcbiAgICAgIHJldHVybiBoYW5kbGVDaGF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJLaWNrZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllcktpY2tlZChzdGF0ZSwgZXZlbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihldmVudClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbml0aWFsaXNlID0gKGV2ZW50OiBJbml0aWFsaXNlV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoZXZlbnQuaWQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbml0aWFsaXNlIG11c3QgYmUgdGhlIGZpcnN0IGV2ZW50YClcbiAgfVxuICByZXR1cm4gZXZlbnQuc3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQWRkZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gZXZlbnQucGxheWVySWQsIHN0YXRlLnBsYXllcnMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQbGF5ZXIgSUQgYWxyZWFkeSBpbiB1c2VgKVxuICB9XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoeyBpZDogcGxheWVySWQsIG5hbWU6IGV2ZW50Lm5hbWUgfSlcbiAgcmV0dXJuIHN0YXRlLmFkZFBsYXllcihwbGF5ZXIpXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckNoYW5nZWROYW1lID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQsIG5hbWUgfSA9IGV2ZW50XG4gIGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZS5zZXRQbGF5ZXJOYW1lKHBsYXllcklkLCBuYW1lKVxufVxuXG5jb25zdCBnZXRQbGF5ZXIgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllciA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHN0YXRlLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gIGlmICghcGxheWVyKSB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YClcbiAgcmV0dXJuIHBsYXllclxufVxuXG5jb25zdCBoYW5kbGVHYW1lU3RhcnRlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IEdhbWVTdGFydGVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoc3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdhbWUgYWxyZWFkeSBzdGFydGVkYClcbiAgfVxuICByZXR1cm4gc3RhdGVcbiAgICAuY29weSh7IHR1cm46IDEsIHVuaXRzOiBldmVudC51bml0cyB9KVxuICAgIC51cGRhdGVXb3JsZE1hcCgobWFwKSA9PiBtYXAuY29weSh7IG1vdW50YWluczogZXZlbnQubW91bnRhaW5zIH0pKVxuICAgIC5hZGRXb3JsZExvZygnTGV0IGJhdHRsZSBjb21tZW5jZSEnKVxufVxuXG5jb25zdCBoYW5kbGVVbml0TW92ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgdW5pdElkLCBwbGF5ZXJJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHtmcm9tfSB0byAke3RvfWApXG4gIH1cbiAgaWYgKCFzdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWApXG4gIH1cbiAgY29uc3QgdW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gIGlmICghdW5pdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWApXG4gIH1cbiAgaWYgKCF1bml0LmxvY2F0aW9uLmVxdWFscyhmcm9tKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBVbml0IGlzIG5vdCBpbiB0aGUgZXhwZWN0ZWQgbG9jYXRpb24gZm9yIG1vdmVtZW50LiBVbml0IGlzIGF0ICR7dW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHtmcm9tfWAsXG4gICAgKVxuICB9XG4gIGNvbnN0IHRvVW5pdCA9IHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bylcbiAgaWYgKHRvVW5pdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YClcbiAgfVxuICBpZiAodW5pdC5wbGF5ZXJJZCAhPT0gcGxheWVySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXR0ZW1wdCB0byBtb3ZlIHVuaXQgb2YgYW5vdGhlciBwbGF5ZXJgKVxuICB9XG4gIGlmICh1bml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYClcbiAgfVxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpIHRocm93IG5ldyBFcnJvcihgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7YXR0YWNrZXIudW5pdElkfWApXG4gIGlmICghYXR0YWNrZXJVbml0LmxvY2F0aW9uLmVxdWFscyhhdHRhY2tlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgbG9jYXRpb24gZm9yIGF0dGFja2VyLiBBdHRhY2tpbmcgdW5pdCAke2F0dGFja2VyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHthdHRhY2tlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7YXR0YWNrZXIubG9jYXRpb259YCxcbiAgICApXG5cbiAgY29uc3QgZGVmZW5kZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVyLnVuaXRJZClcbiAgaWYgKCFkZWZlbmRlclVuaXQpIHRocm93IG5ldyBFcnJvcihgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXIudW5pdElkfWApXG4gIGlmICghZGVmZW5kZXJVbml0LmxvY2F0aW9uLmVxdWFscyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgbG9jYXRpb24gZm9yIGRlZmVuZGVyLiBEZWZlbmRpbmcgdW5pdCAke2RlZmVuZGVyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHtkZWZlbmRlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7ZGVmZW5kZXIubG9jYXRpb259YCxcbiAgICApXG5cbiAgaWYgKGF0dGFja2VyVW5pdC5wbGF5ZXJJZCA9PT0gZGVmZW5kZXJVbml0LnBsYXllcklkKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29tYmF0IHdpdGggc2VsZmApXG4gIGlmICghY2FuQXR0YWNrT2NjdXIoZXZlbnQuYXR0YWNrVHlwZSwgc3RhdGUubWFwLCBhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIGNvbWJhdCBvZiB0eXBlICR7ZXZlbnQuYXR0YWNrVHlwZX0gYmV0d2VlbiBoZXhlcyAke2F0dGFja2VyLmxvY2F0aW9ufSB0byAke2RlZmVuZGVyLmxvY2F0aW9ufWAsXG4gICAgKVxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgKVxuXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlXG5cbiAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChhdHRhY2tlclVuaXQuaWQpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXBkYXRlZEF0dGFja2VyID0gYXR0YWNrZXJVbml0LmRhbWFnZShhdHRhY2tlci5kYW1hZ2UpLnJlZHVjZUFjdGlvblBvaW50cyhldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZClcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KGF0dGFja2VyVW5pdC5pZCwgdXBkYXRlZEF0dGFja2VyKVxuICB9XG5cbiAgaWYgKGRlZmVuZGVyLmtpbGxlZCkge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChkZWZlbmRlclVuaXQuaWQpXG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChkZWZlbmRlclVuaXQuaWQsIGRlZmVuZGVyVW5pdC5kYW1hZ2UoZGVmZW5kZXIuZGFtYWdlKSlcbiAgfVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2RlZmVuZGVyVW5pdC5uYW1lfSB3YXMgdGFrZW4gb3V0IGluIGEgc3VpY2lkZSBhdHRhY2sgYnkgJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHtkZWZlbmRlclVuaXQubmFtZX0gd2FzIGJydXRhbGx5IG11cmRlcmVkIGJ5ICR7YXR0YWNrZXJVbml0Lm5hbWV9LmApXG4gICAgfVxuICB9IGVsc2UgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7YXR0YWNrZXJVbml0Lm5hbWV9IGRpZWQgaW4gYSBmdXRpbGUgYXR0ZW1wdCB0byB0YWtlIG9uICR7YXR0YWNrZXJVbml0Lm5hbWV9LmApXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmVyYiA9IGV2ZW50LmF0dGFja1R5cGUgPT09ICdtZWxlZScgPyAnYXR0YWNrZWQnIDogJ3NwYXQgYXQnXG4gICAgY29uc3QgdGFraW5nRGFtYWdlQ2xhdXNlID0gYXR0YWNrZXIuZGFtYWdlID09PSAwID8gJycgOiBgIGFuZCB0YWtpbmcgJHthdHRhY2tlci5kYW1hZ2V9IGRhbWFnZWBcbiAgICBjb25zdCBtZXNzYWdlID0gYCR7YXR0YWNrZXJVbml0Lm5hbWV9ICR7dmVyYn0gJHtkZWZlbmRlclVuaXQubmFtZX0sIGNhdXNpbmcgJHtkZWZlbmRlci5kYW1hZ2V9IGRhbWFnZSR7dGFraW5nRGFtYWdlQ2xhdXNlfS5gXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhtZXNzYWdlKVxuICB9XG4gIHJldHVybiBuZXdTdGF0ZVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZS51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiB0cnVlIH0pKVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJEZWZlYXRlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGVcbiAgICAudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGRlZmVhdGVkOiB0cnVlIH0pKVxuICAgIC5hZGRXb3JsZExvZyhgJHtwbGF5ZXIubmFtZX0gaGFzIGJlZW4gdmFucXVpc2hlZC5gKVxufVxuXG5jb25zdCBoYW5kbGVOZXdUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlKTogV29ybGRTdGF0ZSA9PlxuICBzdGF0ZS5uZXdUdXJuKCkuYWRkV29ybGRMb2coYFR1cm4gJHtzdGF0ZS50dXJuICsgMX0gaGFzIGJlZ3VuLmApXG5cbmNvbnN0IGhhbmRsZUdhbWVPdmVyID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogR2FtZU92ZXJXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgdmljdG9yIH0gPSBldmVudFxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZS5nYW1lT3Zlcih2aWN0b3IpXG4gIGlmICh2aWN0b3IpIHtcbiAgICBjb25zdCB2aWN0b3JQbGF5ZXIgPSBnZXRQbGF5ZXIoc3RhdGUsIHZpY3RvcilcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGDwn4+GICR7dmljdG9yUGxheWVyLm5hbWV9IGlzIHZpY3RvcmlvdXMhYClcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGBUaGVyZSBhcmUgbm8gd2lubmVycyBpbiB3YXIuYClcbiAgfVxuICByZXR1cm4gbmV3U3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyS2lja2VkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyS2lja2VkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBzdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKVxuICBpZiAoIXBsYXllcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGxheWVyIHdpdGggSUQgJHtwbGF5ZXJJZH1gKVxuICB9XG4gIGlmIChwbGF5ZXJJZCA9PT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBraWNrIGhvc3RgKVxuICB9XG4gIHJldHVybiBzdGF0ZS5yZW1vdmVQbGF5ZXIocGxheWVySWQpXG59XG5cbmNvbnN0IGhhbmRsZUNoYXQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBDaGF0V29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT5cbiAgc3RhdGUuYWRkV29ybGRMb2coYFske3N0YXRlLmdldFBsYXllcihldmVudC5wbGF5ZXJJZCkubmFtZX1dICR7ZXZlbnQubWVzc2FnZX1gKVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGNsYXNzIFdvcmxkTWFwIHtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlclxuICByZWFkb25seSBoZWlnaHQ6IG51bWJlclxuICByZWFkb25seSBtb3VudGFpbnM6IEhleFtdXG5cbiAgY29uc3RydWN0b3IoeyB3aWR0aCwgaGVpZ2h0LCBtb3VudGFpbnMgPSBbXSB9OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBtb3VudGFpbnM/OiBIZXhbXSB9KSB7XG4gICAgYXNzZXJ0KHdpZHRoID4gMClcbiAgICBhc3NlcnQoaGVpZ2h0ID4gMClcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMubW91bnRhaW5zID0gbW91bnRhaW5zXG4gIH1cblxuICBwdWJsaWMgaXNJbkJvdW5kcyA9IChoZXg6IEhleCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHEgPSBoZXgueCArIE1hdGguZmxvb3IoaGV4LnkgLyAyKVxuICAgIHJldHVybiAwIDw9IHEgJiYgcSA8IHRoaXMud2lkdGggJiYgMCA8PSBoZXgueSAmJiBoZXgueSA8IHRoaXMuaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgKmdldE1hcEhleGVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SGV4PiB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5oZWlnaHQ7IHJvdysrKVxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgeCA9IC1NYXRoLmZsb29yKHJvdyAvIDIpICsgY29sdW1uXG4gICAgICAgIHlpZWxkIG5ldyBIZXgoeCwgcm93KVxuICAgICAgfVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHdpZHRoID0gdGhpcy53aWR0aCxcbiAgICBoZWlnaHQgPSB0aGlzLmhlaWdodCxcbiAgICBtb3VudGFpbnMgPSB0aGlzLm1vdW50YWlucyxcbiAgfTogeyB3aWR0aD86IG51bWJlcjsgaGVpZ2h0PzogbnVtYmVyOyBtb3VudGFpbnM/OiBIZXhbXSB9ID0ge30pOiBXb3JsZE1hcCA9PlxuICAgIG5ldyBXb3JsZE1hcCh7IHdpZHRoLCBoZWlnaHQsIG1vdW50YWlucyB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICBtb3VudGFpbnM6IHRoaXMubW91bnRhaW5zLm1hcCgobW91bnRhaW4pID0+IG1vdW50YWluLnRvSnNvbigpKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkTWFwID0+XG4gICAgbmV3IFdvcmxkTWFwKHsgd2lkdGg6IGpzb24ud2lkdGgsIGhlaWdodDoganNvbi5oZWlnaHQsIG1vdW50YWluczoganNvbi5tb3VudGFpbnMubWFwKEhleC5mcm9tSnNvbikgfSlcblxuICBwdWJsaWMgaXNNb3VudGFpbiA9IChoZXg6IEhleCk6IGJvb2xlYW4gPT4gUi5jb250YWlucyhoZXgsIHRoaXMubW91bnRhaW5zKVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4vdW5pdCdcbmltcG9ydCB7IGp1c3QsIE1heWJlLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnRzJ1xuXG5pbnRlcmZhY2UgR2FtZU92ZXJJbmZvIHtcbiAgdmljdG9yOiBPcHRpb248UGxheWVySWQ+XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZFN0YXRlIHtcbiAgcmVhZG9ubHkgdHVybjogbnVtYmVyIC8qIHR1cm4gPSAwIGJlZm9yZSB0aGUgZ2FtZSBoYXMgc3RhcnRlZCAqL1xuICByZWFkb25seSBtYXA6IFdvcmxkTWFwXG4gIHJlYWRvbmx5IHVuaXRzOiBVbml0W11cbiAgcmVhZG9ubHkgcGxheWVyczogUGxheWVyW11cbiAgcmVhZG9ubHkgZ2FtZU92ZXJJbmZvPzogR2FtZU92ZXJJbmZvXG4gIHJlYWRvbmx5IHdvcmxkTG9nOiBzdHJpbmdbXVxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0dXJuLFxuICAgIG1hcCxcbiAgICB1bml0cyxcbiAgICBwbGF5ZXJzLFxuICAgIGdhbWVPdmVySW5mbyxcbiAgICB3b3JsZExvZyA9IFtdLFxuICB9OiB7XG4gICAgdHVybjogbnVtYmVyXG4gICAgbWFwOiBXb3JsZE1hcFxuICAgIHVuaXRzOiBVbml0W11cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE9wdGlvbjxHYW1lT3ZlckluZm8+XG4gICAgd29ybGRMb2c/OiBzdHJpbmdbXVxuICB9KSB7XG4gICAgdGhpcy50dXJuID0gdHVyblxuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy51bml0cyA9IHVuaXRzXG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVyc1xuICAgIHRoaXMuZ2FtZU92ZXJJbmZvID0gZ2FtZU92ZXJJbmZvXG4gICAgdGhpcy53b3JsZExvZyA9IHdvcmxkTG9nXG4gICAgYXNzZXJ0KHR1cm4gPj0gMClcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICB0dXJuID0gdGhpcy50dXJuLFxuICAgIG1hcCA9IHRoaXMubWFwLFxuICAgIHVuaXRzID0gdGhpcy51bml0cyxcbiAgICBwbGF5ZXJzID0gdGhpcy5wbGF5ZXJzLFxuICAgIGdhbWVPdmVySW5mbyA9IHRvTWF5YmUodGhpcy5nYW1lT3ZlckluZm8pLFxuICAgIHdvcmxkTG9nID0gdGhpcy53b3JsZExvZyxcbiAgfToge1xuICAgIHR1cm4/OiBudW1iZXJcbiAgICBtYXA/OiBXb3JsZE1hcFxuICAgIHVuaXRzPzogVW5pdFtdXG4gICAgcGxheWVycz86IFBsYXllcltdXG4gICAgZ2FtZU92ZXJJbmZvPzogTWF5YmU8R2FtZU92ZXJJbmZvPlxuICAgIHdvcmxkTG9nPzogc3RyaW5nW11cbiAgfSA9IHt9KTogV29ybGRTdGF0ZSA9PiBuZXcgV29ybGRTdGF0ZSh7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMsIGdhbWVPdmVySW5mbzogdG9PcHRpb24oZ2FtZU92ZXJJbmZvKSwgd29ybGRMb2cgfSlcblxuICBwdWJsaWMgZ2V0IGdhbWVIYXNTdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR1cm4gPiAwXG4gIH1cblxuICBwdWJsaWMgZ2V0UGxheWVySWRzID0gKCk6IFBsYXllcklkW10gPT4gdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuaWQpXG5cbiAgcHVibGljIGlzUGxheWVyRGVmZWF0ZWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKS5sZW5ndGggPT09IDBcblxuICBwdWJsaWMgY2FuUGxheWVyQWN0ID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGVuZGVkVHVybiA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZCk/LmVuZGVkVHVyblxuICAgIHJldHVybiAhZW5kZWRUdXJuICYmIFIuYW55KCh1bml0KSA9PiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMsIHRoaXMuZ2V0VW5pdHNGb3JQbGF5ZXIocGxheWVySWQpKVxuICB9XG5cbiAgcHVibGljIGNhbkFueVBsYXllckFjdCA9ICgpOiBib29sZWFuID0+IFIuYW55KChwbGF5ZXIpID0+IHRoaXMuY2FuUGxheWVyQWN0KHBsYXllci5pZCksIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2V0VW5pdHNGb3JQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogVW5pdFtdID0+IHRoaXMudW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LnBsYXllcklkID09PSBwbGF5ZXJJZClcblxuICBwdWJsaWMgZmluZFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBPcHRpb248UGxheWVyPiA9PiBSLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmlkID09PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllclxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0QnlJZCA9ICh1bml0SWQ6IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQuaWQgPT09IHVuaXRJZCwgdGhpcy51bml0cylcblxuICBwdWJsaWMgZ2V0VW5pdEJ5SWQgPSAodW5pdElkOiBudW1iZXIpOiBVbml0ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgfVxuICAgIHJldHVybiB1bml0XG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IFIuZmluZCgodW5pdCkgPT4gdW5pdC5sb2NhdGlvbi5lcXVhbHMoaGV4KSwgdGhpcy51bml0cylcblxuICBwdWJsaWMgcmVwbGFjZVVuaXQgPSAodW5pdElkOiBVbml0SWQsIHVuaXQ6IFVuaXQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHtcbiAgICAgIHVuaXRzOiBSLmFwcGVuZChcbiAgICAgICAgdW5pdCxcbiAgICAgICAgUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT09IHVuaXRJZCwgdGhpcy51bml0cyksXG4gICAgICApLFxuICAgIH0pXG5cbiAgcHVibGljIHJlbW92ZVVuaXQgPSAodW5pdElkOiBVbml0SWQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgdW5pdHM6IFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9PSB1bml0SWQsIHRoaXMudW5pdHMpIH0pXG5cbiAgcHVibGljIHVwZGF0ZVBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQsIG1vZGlmeTogKHBsYXllcjogUGxheWVyKSA9PiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlUGxheWVyKHBsYXllcklkLCBtb2RpZnkocGxheWVyKSlcbiAgfVxuXG4gIHB1YmxpYyBzZXRQbGF5ZXJOYW1lID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgbmFtZTogc3RyaW5nKSA9PlxuICAgIHRoaXMudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IG5hbWUgfSkpXG5cbiAgcHVibGljIHJlcGxhY2VQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGFzc2VydChwbGF5ZXJJZCA9PT0gcGxheWVyLmlkKVxuICAgIHJldHVybiB0aGlzLmNvcHkoe1xuICAgICAgcGxheWVyczogUi5hcHBlbmQoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgUi5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmlkICE9PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKSxcbiAgICAgICksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhZGRQbGF5ZXIgPSAocGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IHBsYXllcnM6IFIuYXBwZW5kKHBsYXllciwgdGhpcy5wbGF5ZXJzKSB9KVxuXG4gIHB1YmxpYyByZW1vdmVQbGF5ZXIgPSAocGxheWVySWQ6IG51bWJlcik6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyBwbGF5ZXJzOiB0aGlzLnBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5pZCAhPT0gcGxheWVySWQpIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHtcbiAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgbWFwOiB0aGlzLm1hcC50b0pzb24oKSxcbiAgICB1bml0czogdGhpcy51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQudG9Kc29uKCkpLFxuICAgIHBsYXllcnM6IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLnRvSnNvbigpKSxcbiAgICBnYW1lT3ZlckluZm86IHRoaXMuZ2FtZU92ZXJJbmZvLFxuICAgIHdvcmxkTG9nOiB0aGlzLndvcmxkTG9nLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRTdGF0ZSA9PlxuICAgIG5ldyBXb3JsZFN0YXRlKHtcbiAgICAgIHR1cm46IGpzb24udHVybixcbiAgICAgIG1hcDogV29ybGRNYXAuZnJvbUpzb24oanNvbi5tYXApLFxuICAgICAgdW5pdHM6IGpzb24udW5pdHMubWFwKCh1bml0OiBhbnkpID0+IFVuaXQuZnJvbUpzb24odW5pdCkpLFxuICAgICAgcGxheWVyczoganNvbi5wbGF5ZXJzLm1hcCgodW5pdDogYW55KSA9PiBQbGF5ZXIuZnJvbUpzb24odW5pdCkpLFxuICAgICAgZ2FtZU92ZXJJbmZvOiBqc29uLmdhbWVPdmVySW5mbyxcbiAgICAgIHdvcmxkTG9nOiBqc29uLndvcmxkTG9nLFxuICAgIH0pXG5cbiAgcHVibGljIGlzVmFsaWRQbGF5ZXJJZCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2FtZU92ZXIgPSAodmljdG9yOiBPcHRpb248bnVtYmVyPik6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgZ2FtZU92ZXJJbmZvOiBqdXN0KHsgdmljdG9yIH0pIH0pXG5cbiAgcHVibGljIGFwcGx5RXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IGFwcGx5RXZlbnQodGhpcywgZXZlbnQpXG5cbiAgcHVibGljIGFwcGx5RXZlbnRzID0gKGV2ZW50czogV29ybGRFdmVudFtdKTogV29ybGRTdGF0ZSA9PiB7XG4gICAgbGV0IHN0YXRlOiBXb3JsZFN0YXRlID0gdGhpc1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgcHVibGljIGFkZFdvcmxkTG9nID0gKG1lc3NhZ2U6IHN0cmluZyk6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgd29ybGRMb2c6IFIuYXBwZW5kKG1lc3NhZ2UsIHRoaXMud29ybGRMb2cpIH0pXG5cbiAgcHVibGljIHVwZGF0ZVdvcmxkTWFwID0gKG1vZGlmeTogKG1hcDogV29ybGRNYXApID0+IFdvcmxkTWFwKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBtYXA6IG1vZGlmeSh0aGlzLm1hcCkgfSlcblxuICBwdWJsaWMgbmV3VHVybiA9ICgpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHtcbiAgICAgIHR1cm46IHRoaXMudHVybiArIDEsXG4gICAgICB1bml0czogdGhpcy51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQucmVmcmVzaEFjdGlvblBvaW50cygpKSxcbiAgICAgIHBsYXllcnM6IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IGZhbHNlIH0pKSxcbiAgICB9KVxuXG4gIHB1YmxpYyBnZXRTb3J0ZWRQbGF5ZXJzID0gKCk6IFBsYXllcltdID0+IFIuc29ydEJ5KChwbGF5ZXIpID0+IHBsYXllci5pZCwgdGhpcy5wbGF5ZXJzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==