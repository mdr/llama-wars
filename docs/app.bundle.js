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
exports.PLAYER_TINTS = exports.HOVER_ACTION_TEXT_COLOUR = exports.ACTION_TEXT_COLOUR = exports.TARGETABLE_TILE_BORDER_COLOUR = exports.SELECTED_TILE_BORDER_COLOUR = exports.HOVER_TILE_COLOUR = exports.DEFAULT_TILE_BORDER_COLOUR = exports.HEALTH_FULL_COLOUR = exports.HEALTH_EMPTY_COLOUR = exports.HEALTH_BORDER_COLOUR = exports.colourNumber = void 0;
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
exports.PLAYER_TINTS = [
    '#ffbbbb',
    '#bbbbff',
    '#bbffbb',
    '#bbffff',
    '#ffffbb',
    '#ffbbff',
    '#ffffff',
    '#bbbbbb',
].map(exports.colourNumber);


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
var CreatedLobbyScene = /** @class */ (function () {
    function CreatedLobbyScene(scene, serverOrClient) {
        var _this = this;
        this.makeLobbyDisplayObjects = function (scene, playerId) {
            return new lobby_display_objects_1.LobbyDisplayObjects(scene, playerId, _this.handleStartGame, _this.handleChangePlayerName);
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
        this.handleChangePlayerName = function (name) { return _this.dispatchAction({ type: 'changePlayerName', name: name }); };
        this.dispatchAction = function (action) {
            async_util_1.fireAndForget(function () { return _this.serverOrClient.sendAction(_this.playerId, action); });
        };
        this.sync = function () { return _this.lobbyDisplayObjects.sync(_this.serverOrClient.worldState); };
        this.actAsServer = function (server) {
            _this.listener = function (event) { return _this.handleWorldEvent(event, server); };
            server.addListener(_this.listener);
        };
        this.handleStartGame = function () { return _this.dispatchAction({ type: 'startGame' }); };
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
var menu_button_1 = __webpack_require__(/*! ../../ui/menu-button */ "./src/ui/menu-button.ts");
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var colours_1 = __webpack_require__(/*! ../colours */ "./src/scenes/colours.ts");
var LobbyDisplayObjects = /** @class */ (function () {
    function LobbyDisplayObjects(scene, playerId, onStartGame, onChangePlayerName) {
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
                    var _b = _this.getPlayerObjects(player.id), nameText = _b.nameText, llama = _b.llama;
                    nameText.setText(player.name).setY(y);
                    llama.setY(y + 10);
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
                    var _c = _this.getPlayerObjects(playerId), nameText = _c.nameText, llama = _c.llama;
                    nameText.destroy();
                    llama.destroy();
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
        this.scene.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24);
        if (playerId === player_1.HOST_PLAYER_ID) {
            this.startGameButton = new menu_button_1.MenuButton(this.scene, 100, 0, 'Start Game', this.handleStartGame);
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
        this.hostCrown = this.scene.add.image(330, 0, 'crown').setScale(0.6);
    }
    LobbyDisplayObjects.prototype.createObjectsForPlayer = function (player) {
        var _this = this;
        var nameText = this.scene.add
            .text(100, 0, player.name, {
            fill: '#FFFFFF',
            fixedWidth: 200,
            backgroundColor: player.id === this.playerId ? '#333333' : '#000000',
        })
            .setFontSize(18)
            .setPadding(0, 0, 0, 0)
            .setInteractive()
            .on('pointerdown', function () { return _this.handlePlayerTextClick(player, nameText); });
        var llama = this.scene.add
            .sprite(70, 0, asset_keys_1.ImageKeys.LLAMA_EAT_1)
            .setScale(0.6)
            .setTint(colours_1.PLAYER_TINTS[player.id - 1])
            .play('llama-walk');
        var playerObjects = { nameText: nameText, llama: llama };
        this.playerObjects.set(player.id, playerObjects);
    };
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
        this.scene.add
            .image(40, 28, asset_keys_1.ImageKeys.LLAMA_2)
            .setScale(0.6)
            .setTint(colours_1.PLAYER_TINTS[localGameState.playerId - 1]);
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
        this.endTurnButton = this.scene.add
            .image(650 + 520, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 44 + 72, 'blank-button')
            .setInteractive()
            .on('pointerdown', function () { return _this.endTurnButton.setTexture(asset_keys_1.ImageKeys.BLANK_BUTTON_PRESSED); })
            .on('pointerup', function () {
            _this.endTurnButton.setTexture(asset_keys_1.ImageKeys.BLANK_BUTTON);
            _this.localActionDispatcher({ type: 'endTurn' });
            _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
        })
            .on('pointerout', function () { return _this.endTurnButton.setTexture(asset_keys_1.ImageKeys.BLANK_BUTTON); })
            .setOrigin(0, 0);
        this.endTurnText = this.scene.add
            .text(790 + 520, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 68 + 72, '', {
            fill: '#ffffff',
        })
            .setOrigin(0.5)
            .setShadow(2, 2, '#000000');
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
                var llama = this.scene.add
                    .sprite(975, 0, asset_keys_1.ImageKeys.LLAMA_EAT_1)
                    .setScale(0.6)
                    .setTint(colours_1.PLAYER_TINTS[player.id - 1]);
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
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var random_util_1 = __webpack_require__(/*! ../../util/random-util */ "./src/util/random-util.ts");
var HEALTH_BAR_WIDTH = 50;
var HEALTH_BAR_HEIGHT = 12;
var HEALTH_BAR_BORDER_THICKNESS = 2;
var IMAGE_OFFSET = { x: 0, y: 4 };
var HEALTH_BAR_OFFSET = { x: -25, y: -40 };
var UnitDisplayObject = /** @class */ (function () {
    function UnitDisplayObject(scene, unit) {
        var _this = this;
        this.getPlayerTint = function (playerId) {
            return colours_1.PLAYER_TINTS[(colours_1.PLAYER_TINTS.length + playerId - 1) % colours_1.PLAYER_TINTS.length];
        };
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
        this.image = scene.add.sprite(0, 0, 'llama-2').setScale(0.8).setTint(this.getPlayerTint(this.unit.playerId));
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
var menu_button_1 = __webpack_require__(/*! ../../ui/menu-button */ "./src/ui/menu-button.ts");
var server_1 = __webpack_require__(/*! ../../server/server */ "./src/server/server.ts");
var world_event_db_1 = __webpack_require__(/*! ../../db/world-event-db */ "./src/db/world-event-db.ts");
var initial_world_state_1 = __webpack_require__(/*! ../../world/initial-world-state */ "./src/world/initial-world-state.ts");
var lobby_scene_1 = __webpack_require__(/*! ../lobby/lobby-scene */ "./src/scenes/lobby/lobby-scene.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var player_1 = __webpack_require__(/*! ../../world/player */ "./src/world/player.ts");
var url_info_1 = __webpack_require__(/*! ../boot/url-info */ "./src/scenes/boot/url-info.ts");
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
            _this.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24);
            _this.sound.pauseOnBlur = false;
            _this.sound.add(asset_keys_1.AudioKeys.CLICK);
            new menu_button_1.MenuButton(_this, 100, 150, 'Host Game', function () {
                _this.sound.play(asset_keys_1.AudioKeys.CLICK);
                _this.handleHostGame();
            });
        };
        _this.handleHostGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var worldEventDb, gameId, playerId, server, sceneData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, world_event_db_1.openWorldEventDb()];
                    case 1:
                        worldEventDb = _a.sent();
                        gameId = uuid_1.v4();
                        playerId = player_1.HOST_PLAYER_ID;
                        server = new server_1.Server(worldEventDb, gameId, initial_world_state_1.INITIAL_WORLD_STATE, 0);
                        server.handleAction(playerId, { type: 'initialise', state: initial_world_state_1.INITIAL_WORLD_STATE });
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
            if (!attacker)
                throw "No unit found with ID " + attackerId;
            if (attacker.playerId !== _this.playerId)
                throw "Cannot control another player's unit: " + attacker.id;
            if (attacker.actionPoints.current < 1)
                throw "Not enough action points to attack";
            if (!attacker.location.equals(action.attacker.location))
                throw "Attacker not in expected location";
            var defenderId = action.defender.unitId;
            var defender = _this.worldState.findUnitById(defenderId);
            if (!defender)
                throw "No unit found with ID " + defenderId;
            if (defender.playerId === _this.playerId)
                throw "Cannot attack own unit";
            if (!defender.location.equals(action.defender.location))
                throw "Defender not in expected location";
            if (!exports.canAttackOccur(action.attackType, _this.worldState.map, attacker.location, defender.location))
                throw "Invalid unit attack of type " + action.attackType + " between hexes " + attacker.location + " to " + defender.location + " too far apart";
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
            var request, response, playerId, worldState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = { type: 'join' };
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
        this.handleClientJoin = function () {
            if (_this.worldState.gameHasStarted) {
                return { type: 'unableToJoin' };
            }
            else {
                var addPlayerAction = { type: 'addPlayer' };
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
                    return _this.handleClientJoin();
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
                    return _this.handleAddPlayer();
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
            }
        };
        this.handleInitialise = function (action) {
            if (_this.nextWorldEventId > 0) {
                throw "Can only initialise as the first event";
            }
            return [{ id: _this.nextWorldEventId, type: 'initialise', state: action.state }];
        };
        this.handleAddPlayer = function () {
            var existingPlayerIds = _this.worldState.getPlayerIds();
            var playerId = R.apply(Math.max, existingPlayerIds) + 1;
            return [{ id: _this.nextWorldEventId, type: 'playerAdded', playerId: playerId }];
        };
        this.handleChangePlayerName = function (action) {
            _this.getPlayer();
            return [{ id: _this.nextWorldEventId, type: 'playerChangedName', playerId: _this.playerId, name: action.name }];
        };
        this.handleStartGame = function () {
            if (_this.worldState.gameHasStarted) {
                throw "Cannot start an already-started game";
            }
            if (_this.playerId !== player_1.HOST_PLAYER_ID) {
                throw "Cannot start the game unless the host";
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
                throw "No unit found with ID " + unitId;
            }
            var from = unit.location;
            if (!from.isAdjacentTo(to)) {
                throw "Invalid unit movement between non-adjacent hexes " + from + " to " + to;
            }
            if (!_this.worldState.map.isInBounds(to)) {
                throw "Invalid unit movement to out-of-bounds hex " + to;
            }
            if (_this.worldState.findUnitInLocation(to)) {
                throw "Invalid unit movement to already-occupied hex";
            }
            if (unit.actionPoints.current < 1) {
                throw "Not enough action points to move";
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
                throw "Cannot end a turn that's not the current turn";
            }
            var player = _this.getPlayer();
            if (player.endedTurn) {
                throw "Player has already ended their turn";
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
                throw "No player with ID " + _this.playerId;
            }
            return player;
        };
        this.handleChat = function (action) { return [
            { id: _this.nextWorldEventId, type: 'chat', playerId: _this.playerId, message: action.message },
        ]; };
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
            if (newWorldState.canAnyPlayerAct() || newWorldState.units.length === 0) {
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

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
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
exports.MenuButton = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var padding = 10;
var minimumWidth = 200;
var minimumHeight = 50;
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add
            .text(x + padding, y + padding, text)
            .setFontSize(18)
            .setAlign('center');
        var labelWidth = _this.label.width + padding;
        var labelHeight = _this.label.height + padding;
        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    MenuButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    };
    MenuButton.prototype.setY = function (value) {
        this.label.setY(value);
        return _super.prototype.setY.call(this, value);
    };
    return MenuButton;
}(Phaser.GameObjects.Rectangle));
exports.MenuButton = MenuButton;


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
    var player = new player_1.Player({ id: playerId, name: "Player " + playerId });
    return state.addPlayer(player);
};
var handlePlayerChangedName = function (state, event) {
    var playerId = event.playerId, name = event.name;
    getPlayer(state, playerId);
    return state.updatePlayer(playerId, function (player) { return player.copy({ name: name }); });
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
        this.replacePlayer = function (playerId, player) {
            assert(playerId === player.id);
            return _this.copy({
                players: R.append(player, R.filter(function (player) { return player.id !== playerId; }, _this.players)),
            });
        };
        this.addPlayer = function (player) { return _this.copy({ players: R.append(player, _this.players) }); };
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
    Object.defineProperty(WorldState.prototype, "isGameOver", {
        get: function () {
            return this.gameOverInfo !== undefined;
        },
        enumerable: false,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvdXJsLWluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb2xvdXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY29tYmluZWQtc3RhdGUtbWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvY3JlYXRlZC1sb2JieS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LWRpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9jYWwtZ2FtZS1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9kaXNwbGF5LW9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9rZXlib2FyZC1tYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvbG9jYWwtYWN0aW9uLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9tYXAtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvdGV4dHMtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvdWktYm9yZGVyLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3VuaXQtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUvbWFpbi1tZW51LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci11dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLWFjdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvd29ybGQtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvd29ybGQtc3RhdGUtb3duZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL21lbnUtYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FzeW5jLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BoYXNlci90d2Vlbi11dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9yYW5kb20tdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9hY3Rpb24tcG9pbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oZXgtZGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hpdC1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QixDQUFxQixDQUFDO1lBQy9ELFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQVBGLENBT0U7SUE0Qk4saUJBQUM7Q0FBQTtBQXJLWSxnQ0FBVSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgRGV4aWUsIHsgQ29sbGVjdGlvbiB9IGZyb20gJ2RleGllJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmxkRXZlbnRSZWNvcmQge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBldmVudDogYW55IC8vIHNlcmlhbGlzZWQgV29ybGRFdmVudFxufVxuXG5leHBvcnQgY2xhc3MgTGxhbWFEZXhpZSBleHRlbmRzIERleGllIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIHdvcmxkRXZlbnRzOiBEZXhpZS5UYWJsZTxXb3JsZEV2ZW50UmVjb3JkLCBzdHJpbmc+XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuV29ybGRFdmVudERiID0gYXN5bmMgKCk6IFByb21pc2U8V29ybGRFdmVudERiPiA9PiB7XG4gIGNvbnN0IGRleGllID0gbmV3IERleGllKCdsbGFtYS13YXJzJylcbiAgZGV4aWUudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgIHdvcmxkRXZlbnRzOiAnKyssZ2FtZUlkJyxcbiAgfSlcbiAgYXdhaXQgZGV4aWUub3BlbigpXG4gIHJldHVybiBuZXcgV29ybGRFdmVudERiKDxMbGFtYURleGllPmRleGllKVxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRFdmVudERiIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkZXhpZTogTGxhbWFEZXhpZVxuXG4gIGNvbnN0cnVjdG9yKGRleGllOiBMbGFtYURleGllKSB7XG4gICAgdGhpcy5kZXhpZSA9IGRleGllXG4gIH1cblxuICBwdWJsaWMgc3RvcmUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIGV2ZW50OiBXb3JsZEV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy5hZGQoe1xuICAgICAgZ2FtZUlkLFxuICAgICAgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxXb3JsZEV2ZW50W10+ID0+IHtcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy53aGVyZSgnZ2FtZUlkJykuZXF1YWxzKGdhbWVJZCkudG9BcnJheSgpXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGRlc2VyaWFsaXNlRnJvbUpzb24ocmVjb3JkLmV2ZW50KSlcbiAgfVxuXG4gIHB1YmxpYyBoYXNFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgdGhpcy5xdWVyeUV2ZW50c0J5R2FtZUlkKGdhbWVJZCkuZmlyc3QoKVxuICAgIHJldHVybiByZWNvcmQgIT09IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJpdmF0ZSBxdWVyeUV2ZW50c0J5R2FtZUlkID0gKGdhbWVJZDogc3RyaW5nKTogQ29sbGVjdGlvbjxXb3JsZEV2ZW50UmVjb3JkLCBzdHJpbmc+ID0+XG4gICAgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy53aGVyZSgnZ2FtZUlkJykuZXF1YWxzKGdhbWVJZClcbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoXG59XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHRcbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJ1xuaW1wb3J0IFRleHRFZGl0UGx1Z2luIGZyb20gJ3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy90ZXh0ZWRpdC1wbHVnaW4uanMnXG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnTGxhbWEgV2FycycsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG5cbiAgc2NhbGU6IHtcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gIH0sXG5cbiAgc2NlbmU6IFNjZW5lcyxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgZG9tOiB7XG4gICAgY3JlYXRlQ29udGFpbmVyOiB0cnVlLFxuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcbiAgcGx1Z2luczoge1xuICAgIGdsb2JhbDogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdyZXhUZXh0RWRpdCcsXG4gICAgICAgIHBsdWdpbjogVGV4dEVkaXRQbHVnaW4sXG4gICAgICAgIHN0YXJ0OiB0cnVlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnNjYWxlLnNldEdhbWVTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpXG59KVxuIiwiZXhwb3J0IGNvbnN0IEltYWdlS2V5cyA9IHtcbiAgTExBTUFfMTogJ2xsYW1hLTEnLFxuICBMTEFNQV8yOiAnbGxhbWEtMicsXG4gIExMQU1BXzM6ICdsbGFtYS0zJyxcbiAgTExBTUFfNDogJ2xsYW1hLTQnLFxuICBMTEFNQV9FQVRfMTogJ2xsYW1hLWVhdC0xJyxcbiAgTExBTUFfRUFUXzI6ICdsbGFtYS1lYXQtMicsXG4gIExMQU1BX0VBVF8zOiAnbGxhbWEtZWF0LTMnLFxuICBMTEFNQV9FQVRfNDogJ2xsYW1hLWVhdC00JyxcbiAgSE9VUkdMQVNTOiAnaG91cmdsYXNzJyxcbiAgR1JBU1M6ICdncmFzcycsXG4gIFNQSVQ6ICdzcGl0JyxcbiAgTU9VTlRBSU46ICdtb3VudGFpbicsXG4gIENST1dOOiAnY3Jvd24nLFxuICBCT1JERVJfVE9QX0xFRlQ6ICdib3JkZXItdG9wLWxlZnQnLFxuICBCT1JERVJfQk9UVE9NX0xFRlQ6ICdib3JkZXItYm90dG9tLWxlZnQnLFxuICBCT1JERVJfVE9QX1JJR0hUOiAnYm9yZGVyLXRvcC1yaWdodCcsXG4gIEJPUkRFUl9CT1RUT01fUklHSFQ6ICdib3JkZXItYm90dG9tLXJpZ2h0JyxcbiAgQk9SREVSX0hPUklaT05UQUw6ICdib3JkZXItaG9yaXpvbnRhbCcsXG4gIEJPUkRFUl9WRVJUSUNBTDogJ2JvcmRlci12ZXJ0aWNhbCcsXG4gIEJMQU5LX0JVVFRPTjogJ2JsYW5rLWJ1dHRvbicsXG4gIEJMQU5LX0JVVFRPTl9QUkVTU0VEOiAnYmxhbmstYnV0dG9uLXByZXNzZWQnLFxufVxuXG5leHBvcnQgY29uc3QgQXVkaW9LZXlzID0ge1xuICBBVFRBQ0tfMTogJ2F0dGFjazEnLFxuICBBVFRBQ0tfMjogJ2F0dGFjazInLFxuICBBVFRBQ0tfMzogJ2F0dGFjazMnLFxuICBERUFUSDogJ2RlYXRoJyxcbiAgV0FMSzogJ3dhbGsnLFxuICBORVdfVFVSTjogJ25ldy10dXJuJyxcbiAgUExBWUVSX0RFRkVBVEVEOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgUExBWUVSX0pPSU5FRF9MT0JCWTogJ3BsYXllci1kZWZlYXRlZCcsXG4gIFZJQ1RPUllfTVVTSUM6ICd2aWN0b3J5LW11c2ljJyxcbiAgQ0xJQ0s6ICdjbGljaycsXG4gIFNQSVQ6ICdzcGl0Jyxcbn1cblxuZXhwb3J0IGNvbnN0IEFMTF9BVURJT19LRVlTID0gW1xuICBBdWRpb0tleXMuQVRUQUNLXzEsXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMixcbiAgQXVkaW9LZXlzLkFUVEFDS18zLFxuICBBdWRpb0tleXMuREVBVEgsXG4gIEF1ZGlvS2V5cy5XQUxLLFxuICBBdWRpb0tleXMuTkVXX1RVUk4sXG4gIEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsXG4gIEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZLFxuICBBdWRpb0tleXMuVklDVE9SWV9NVVNJQyxcbiAgQXVkaW9LZXlzLkNMSUNLLFxuICBBdWRpb0tleXMuU1BJVCxcbl1cbiIsImltcG9ydCB7IGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnXG5pbXBvcnQgeyBBdWRpb0tleXMsIEltYWdlS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZUlkLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNQUlOX01FTlVfU0NFTkVfS0VZIH0gZnJvbSAnLi4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiLCBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5pbXBvcnQgeyBnZXRVcmxJbmZvLCBzZXRVcmxJbmZvLCBVcmxJbmZvIH0gZnJvbSAnLi91cmwtaW5mbydcbmltcG9ydCBGaWxlQ29uZmlnID0gUGhhc2VyLlR5cGVzLkxvYWRlci5GaWxlQ29uZmlnXG5cbmV4cG9ydCBjb25zdCBCT09UX1NDRU5FX0tFWSA9ICdCb290J1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogQk9PVF9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNVxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMFxuICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSA0MDBcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoLFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIHByb2dyZXNzQmFyV2lkdGgsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcbiAgICAgIDB4MDAwMDAwLFxuICAgIClcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgMTAsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxuICAgICAgMHg4ODg4ODgsXG4gICAgKVxuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWVcblxuICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApXG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGU6IEZpbGVDb25maWcpID0+IHtcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KClcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLmxhdW5jaEdhbWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHVybEluZm8gPSBnZXRVcmxJbmZvKClcbiAgICBpZiAodXJsSW5mbykge1xuICAgICAgYXdhaXQgdGhpcy5qb2luT3JSZXN0b3JlR2FtZSh1cmxJbmZvKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KE1BSU5fTUVOVV9TQ0VORV9LRVkpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luT3JSZXN0b3JlR2FtZSA9IGFzeW5jICh1cmxJbmZvOiBVcmxJbmZvKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkID0gdXJsSW5mby5nYW1lSWRcbiAgICBjb25zdCBwbGF5ZXJJZCA9IHVybEluZm8ucGxheWVySWRcbiAgICBjb25zdCBpc1NlcnZlciA9IGF3YWl0IHdvcmxkRXZlbnREYi5oYXNFdmVudHNGb3JHYW1lKGdhbWVJZClcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVzdG9yZUdhbWVBc1NlcnZlcihnYW1lSWQsIHdvcmxkRXZlbnREYilcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5qb2luT3JSZXN0b3JlQ2xpZW50KGdhbWVJZCwgcGxheWVySWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luT3JSZXN0b3JlQ2xpZW50ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCBwbGF5ZXJJZDogT3B0aW9uPFBsYXllcklkPik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGxldCBjbGllbnRcbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNvbm5lY3QoZ2FtZUlkKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2hvd01lc3NhZ2UoJ1VuYWJsZSB0byBqb2luIGdhbWUsIGNvdWxkIG5vdCBjb25uZWN0IHRvIHNlcnZlci4nKVxuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChwbGF5ZXJJZCkge1xuICAgICAgdGhpcy5yZWpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZCwgcGxheWVySWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbkFzQ2xpZW50ID0gYXN5bmMgKGNsaWVudDogQ2xpZW50LCBnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGpvaW5SZXN1bHQgPSBhd2FpdCBjbGllbnQuam9pbigpXG4gICAgaWYgKGpvaW5SZXN1bHQpIHtcbiAgICAgIGNvbnN0IHsgcGxheWVySWQgfSA9IGpvaW5SZXN1bHRcbiAgICAgIHNldFVybEluZm8oeyBnYW1lSWQsIHBsYXllcklkIH0pXG4gICAgICB0aGlzLmpvaW5HYW1lKGNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93TWVzc2FnZSgnVW5hYmxlIHRvIGpvaW4gZ2FtZSBhcyBpdCBoYXMgYWxyZWFkeSBzdGFydGVkLicpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93TWVzc2FnZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuZ2FtZS5zY2FsZS5nYW1lU2l6ZVxuICAgIHRoaXMuYWRkXG4gICAgICAudGV4dCh3aWR0aCAvIDIsIGhlaWdodCAvIDIsIG1lc3NhZ2UpXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNClcbiAgfVxuXG4gIHByaXZhdGUgcmVqb2luQXNDbGllbnQgPSBhc3luYyAoY2xpZW50OiBDbGllbnQsIGdhbWVJZDogR2FtZUlkLCBwbGF5ZXJJZDogUGxheWVySWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gYXdhaXQgY2xpZW50LnJlam9pbihwbGF5ZXJJZClcbiAgICBpZiAod29ybGRTdGF0ZSkge1xuICAgICAgdGhpcy5qb2luR2FtZShjbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IGluZm9ybSBjbGllbnRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5HYW1lID0gKGNsaWVudDogQ2xpZW50KSA9PiB7XG4gICAgaWYgKGNsaWVudC53b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50IH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlR2FtZUFzU2VydmVyID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IFNlcnZlci5yZXN0b3JlR2FtZSh3b3JsZEV2ZW50RGIsIGdhbWVJZClcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbHBjLXN0eWxlLWZhcm0tYW5pbWFsc1xuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfMSwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hL2xsYW1hXzE1LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV8yLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEvbGxhbWFfMTQucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BXzMsICdhc3NldHMvc3ByaXRlcy9sbGFtYS9sbGFtYV8xMy5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfNCwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hL2xsYW1hXzEyLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV9FQVRfMSwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hLWVhdC9sbGFtYV9lYXRfMTIucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BX0VBVF8yLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEtZWF0L2xsYW1hX2VhdF8xMy5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfRUFUXzMsICdhc3NldHMvc3ByaXRlcy9sbGFtYS1lYXQvbGxhbWFfZWF0XzE0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV9FQVRfNCwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hLWVhdC9sbGFtYV9lYXRfMTUucG5nJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvcnBnLWd1aS1jb25zdHJ1Y3Rpb24ta2l0LXYxMFxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQk9SREVSX1RPUF9MRUZULCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci10b3AtbGVmdC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQk9SREVSX1RPUF9SSUdIVCwgJ2Fzc2V0cy9zcHJpdGVzL2JvcmRlci9ib3JkZXItdG9wLXJpZ2h0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CT1JERVJfQk9UVE9NX0xFRlQsICdhc3NldHMvc3ByaXRlcy9ib3JkZXIvYm9yZGVyLWJvdHRvbS1sZWZ0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CT1JERVJfQk9UVE9NX1JJR0hULCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci1ib3R0b20tcmlnaHQucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkJPUkRFUl9IT1JJWk9OVEFMLCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci1ob3Jpem9udGFsLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CT1JERVJfVkVSVElDQUwsICdhc3NldHMvc3ByaXRlcy9ib3JkZXIvYm9yZGVyLXZlcnRpY2FsLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CTEFOS19CVVRUT04sICdhc3NldHMvc3ByaXRlcy9ibGFuay1idXR0b24ucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkJMQU5LX0JVVFRPTl9QUkVTU0VELCAnYXNzZXRzL3Nwcml0ZXMvYmxhbmstYnV0dG9uLXByZXNzZWQucG5nJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaG91cmdsYXNzLWljb25cbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkhPVVJHTEFTUywgJ2Fzc2V0cy9zcHJpdGVzL0hvdXJnbGFzcy5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtdGV4dHVyZXMtdGlsZXNcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkdSQVNTLCAnYXNzZXRzL3Nwcml0ZXMvZ3Jhc3MyLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9wdWRkbGUtY29ycHNlc1xuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuU1BJVCwgJ2Fzc2V0cy9zcHJpdGVzL3B1ZGRsZV9saWdodF9ibHVlLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC93b3JsZC1tYXAtdGlsZXNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLk1PVU5UQUlOLCAnYXNzZXRzL3Nwcml0ZXMvbW91bnRhaW5zX291dGVyLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9nYW1lLWljb25zLTBcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkNST1dOLCAnYXNzZXRzL3Nwcml0ZXMvY3Jvd24ucG5nJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvMzctaGl0c3B1bmNoZXNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18xLCAnYXNzZXRzL2F1ZGlvL2hpdDE0Lm1wMy5tcDMnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzIsICdhc3NldHMvYXVkaW8vaGl0MTcubXAzLm1wMycpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMywgJ2Fzc2V0cy9hdWRpby9oaXQxOC5tcDMubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L21hbGUtZ3J1bnR5ZWxsaW5nLXNvdW5kc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuREVBVEgsICdhc3NldHMvYXVkaW8vMXllbGw0LndhdicpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy1mb290LXN0ZXAtc291bmRzLXlvLWZyYW5raWVcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLldBTEssICdhc3NldHMvYXVkaW8vc2Z4X3N0ZXBfZ3Jhc3NfbC5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvdWktc291bmQtZWZmZWN0cy1wYWNrXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ORVdfVFVSTiwgJ2Fzc2V0cy9hdWRpby9NRU5VIEFfU2VsZWN0LndhdicpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZLCAnYXNzZXRzL2F1ZGlvL01FTlUgQl9TZWxlY3Qud2F2JylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlBMQVlFUl9ERUZFQVRFRCwgJ2Fzc2V0cy9hdWRpby9NRVNTQUdFLUJfRGVjbGluZS53YXYnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9jbGVhci1za2llc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuVklDVE9SWV9NVVNJQywgJ2Fzc2V0cy9hdWRpby9DbGVhciBTa2llcy5tcDMnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ndWktc291bmQtZWZmZWN0c1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQ0xJQ0ssICdhc3NldHMvYXVkaW8vY2xpY2sud2F2JylcbiAgICAvL2h0dHBzOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvdHZsYXVkaW8vc291bmRzLzI2Nzg5Ny9cbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlNQSVQsICdhc3NldHMvYXVkaW8vc3BpdC53YXYnKVxuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBVcmxJbmZvIHtcbiAgZ2FtZUlkOiBHYW1lSWRcbiAgcGxheWVySWQ/OiBQbGF5ZXJJZFxufVxuXG5leHBvcnQgY29uc3QgZ2V0VXJsSW5mbyA9ICgpOiBPcHRpb248VXJsSW5mbz4gPT4ge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2hcbiAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgcGF0aCA9IGhhc2guc3Vic3RyKDEpXG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpXG4gIGNvbnN0IGdhbWVJZCA9IHNlZ21lbnRzWzBdXG4gIGNvbnN0IHBsYXllcklkID0gc2VnbWVudHMubGVuZ3RoID4gMSA/IE51bWJlci5wYXJzZUludChzZWdtZW50c1sxXSkgOiB1bmRlZmluZWRcbiAgcmV0dXJuIHsgZ2FtZUlkLCBwbGF5ZXJJZCB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRVcmxJbmZvID0gKHVybEluZm86IFVybEluZm8pOiB2b2lkID0+IHtcbiAgbGV0IGhhc2ggPSB1cmxJbmZvLmdhbWVJZFxuICBpZiAodXJsSW5mby5wbGF5ZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaGFzaCArPSAnLycgKyB1cmxJbmZvLnBsYXllcklkXG4gIH1cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoXG59XG4iLCJpbXBvcnQgQ29sb3IgPSBQaGFzZXIuRGlzcGxheS5Db2xvclxuXG5leHBvcnQgdHlwZSBDb2xvdXJTdHJpbmcgPSBzdHJpbmdcbmV4cG9ydCB0eXBlIENvbG91ck51bWJlciA9IG51bWJlclxuXG5leHBvcnQgY29uc3QgY29sb3VyTnVtYmVyID0gKGNvbG91clN0cmluZzogQ29sb3VyU3RyaW5nKTogQ29sb3VyTnVtYmVyID0+IENvbG9yLkhleFN0cmluZ1RvQ29sb3IoY29sb3VyU3RyaW5nKS5jb2xvclxuXG5leHBvcnQgY29uc3QgSEVBTFRIX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhFQUxUSF9FTVBUWV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZmZmYnKVxuZXhwb3J0IGNvbnN0IEhFQUxUSF9GVUxMX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzRkZjAzNycpXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzAwMDAwMCcpXG5leHBvcnQgY29uc3QgSE9WRVJfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNjY2ZmYmUnKVxuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmQwOCcpXG5leHBvcnQgY29uc3QgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM5ZGYxZTcnKVxuXG5leHBvcnQgY29uc3QgQUNUSU9OX1RFWFRfQ09MT1VSID0gJyNjY2NjMDAnXG5leHBvcnQgY29uc3QgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSID0gJyNmZmZmMDAnXG5cbmV4cG9ydCBjb25zdCBQTEFZRVJfVElOVFMgPSBbXG4gICcjZmZiYmJiJyxcbiAgJyNiYmJiZmYnLFxuICAnI2JiZmZiYicsXG4gICcjYmJmZmZmJyxcbiAgJyNmZmZmYmInLFxuICAnI2ZmYmJmZicsXG4gICcjZmZmZmZmJyxcbiAgJyNiYmJiYmInLFxuXS5tYXAoY29sb3VyTnVtYmVyKVxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbmV4cG9ydCBjbGFzcyBDb21iaW5lZFN0YXRlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBmaW5kU2VsZWN0ZWRVbml0ID0gKCk6IE9wdGlvbjxVbml0PiA9PlxuICAgIHRoaXMuc2VsZWN0ZWRIZXggPyB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbih0aGlzLnNlbGVjdGVkSGV4KSA6IHVuZGVmaW5lZFxuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRIZXgoKTogT3B0aW9uPEhleD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMgJiYgIXRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVyblxuXG4gIHB1YmxpYyB1bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENhbk1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBoZXg6IEhleCk6IGJvb2xlYW4gPT5cbiAgICB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSh1bml0KSAmJlxuICAgIGhleC5pc0FkamFjZW50VG8odW5pdC5sb2NhdGlvbikgJiZcbiAgICB0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSAmJlxuICAgICF0aGlzLndvcmxkU3RhdGUubWFwLmlzTW91bnRhaW4oaGV4KSAmJlxuICAgICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgLyoqXG4gICAqIEByZXR1cm4gdGhlIHVuaXQgaW4gdGhlIGhleCB0byBhdHRhY2ssIGlmIGFuIGF0dGFjayBpcyBwb3NzaWJsZSwgZWxzZSB1bmRlZmluZWQuXG4gICAqL1xuICBwdWJsaWMgdW5pdENhbkF0dGFja0hleCA9ICh1bml0OiBVbml0LCBsb2NhdGlvbjogSGV4LCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24obG9jYXRpb24pXG4gICAgaWYgKFxuICAgICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSAmJlxuICAgICAgdGFyZ2V0VW5pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0YXJnZXRVbml0LnBsYXllcklkICE9PSB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkICYmXG4gICAgICBjYW5BdHRhY2tPY2N1cihhdHRhY2tUeXBlLCB0aGlzLndvcmxkU3RhdGUubWFwLCB1bml0LmxvY2F0aW9uLCBsb2NhdGlvbilcbiAgICApXG4gICAgICByZXR1cm4gdGFyZ2V0VW5pdFxuICB9XG5cbiAgcHVibGljIGZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzID0gKHVuaXRJZD86IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgY2FuZGlkYXRlVW5pdHMgPSBSLnNvcnRCeShcbiAgICAgICh1bml0KSA9PiB1bml0LmlkLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLmdldFVuaXRzRm9yUGxheWVyKHRoaXMucGxheWVySWQpLmZpbHRlcigodW5pdCkgPT4gdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzKSxcbiAgICApXG4gICAgaWYgKHVuaXRJZClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgPiB1bml0SWQpKSA/P1xuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkIDwgdW5pdElkKSlcbiAgICAgIClcbiAgICBlbHNlIHJldHVybiBSLmhlYWQoY2FuZGlkYXRlVW5pdHMpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudFBsYXllciA9ICgpOiBQbGF5ZXIgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMud29ybGRTdGF0ZS5maW5kUGxheWVyKHRoaXMucGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBDb3VsZCBub3QgZmluZCBwbGF5ZXIgd2l0aCBpZCAke3RoaXMucGxheWVySWR9YFxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5cbmV4cG9ydCBjb25zdCBjZW50ZXJQb2ludCA9IChoZXg6IEhleCk6IFBvaW50ID0+ICh7XG4gIHg6IGhleC54ICogTWF0aC5zcXJ0KDMpICsgKGhleC55ICogTWF0aC5zcXJ0KDMpKSAvIDIsXG4gIHk6IChoZXgueSAqIDMpIC8gMixcbn0pXG5cbmV4cG9ydCBjb25zdCBmcm9tUG9pbnQgPSAocG9pbnQ6IFBvaW50KTogSGV4ID0+IHtcbiAgY29uc3QgeCA9IChwb2ludC54ICogTWF0aC5zcXJ0KDMpKSAvIDMgLSBwb2ludC55IC8gM1xuICBjb25zdCB5ID0gKDIgKiBwb2ludC55KSAvIDNcbiAgcmV0dXJuIHJvdW5kKG5ldyBIZXgoeCwgeSkpXG59XG5cbmNvbnN0IHJvdW5kID0gKGhleDogSGV4KTogSGV4ID0+IHtcbiAgY29uc3QgcnggPSBNYXRoLnJvdW5kKGhleC54KVxuICBjb25zdCByeSA9IE1hdGgucm91bmQoaGV4LnkpXG4gIGNvbnN0IHJ6ID0gTWF0aC5yb3VuZChoZXgueilcblxuICBjb25zdCB4RGlmZiA9IE1hdGguYWJzKHJ4IC0gaGV4LngpXG4gIGNvbnN0IHlEaWZmID0gTWF0aC5hYnMocnkgLSBoZXgueSlcbiAgY29uc3QgekRpZmYgPSBNYXRoLmFicyhyeiAtIGhleC55KVxuXG4gIGlmICh4RGlmZiA+IHlEaWZmICYmIHhEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KC1yeSAtIHJ6LCByeSlcbiAgZWxzZSBpZiAoeURpZmYgPiB6RGlmZikgcmV0dXJuIG5ldyBIZXgocngsIC1yeCAtIHJ6KVxuICBlbHNlIHJldHVybiBuZXcgSGV4KHJ4LCByeSlcbn1cblxuY29uc3QgaGV4QW5nbGUgPSBNYXRoLlBJIC8gM1xuY29uc3QgaGV4T2Zmc2V0ID0gTWF0aC5QSSAvIDZcblxuY29uc3QgaGV4Q29ybmVyID0gKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlciwgaTogbnVtYmVyKTogUG9pbnQgPT4ge1xuICBjb25zdCBhbmdsZVJhZGlhbnMgPSBoZXhBbmdsZSAqIGkgLSBoZXhPZmZzZXRcbiAgY29uc3QgeCA9IGNlbnRlci54ICsgc2l6ZSAqIE1hdGguY29zKGFuZ2xlUmFkaWFucylcbiAgY29uc3QgeSA9IGNlbnRlci55ICsgc2l6ZSAqIE1hdGguc2luKGFuZ2xlUmFkaWFucylcbiAgcmV0dXJuIHsgeCwgeSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogaGV4Q29ybmVycyhjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPFBvaW50PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgeWllbGQgaGV4Q29ybmVyKGNlbnRlciwgc2l6ZSwgaSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWFwSGVpZ2h0ID0gKG1hcDogV29ybGRNYXApOiBudW1iZXIgPT4gKG1hcC5oZWlnaHQgKiAzKSAvIDJcblxuZXhwb3J0IGNvbnN0IGhleFdpZHRoID0gKGhleFNpemU6IG51bWJlcik6IG51bWJlciA9PiBoZXhTaXplICogTWF0aC5zcXJ0KDMpXG4iLCJpbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL2Jvb3QvYm9vdC1zY2VuZSdcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUvbWFpbi1tZW51LXNjZW5lJ1xuaW1wb3J0IHsgTG9iYnlTY2VuZSB9IGZyb20gJy4vbG9iYnkvbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBkZWZhdWx0IFtCb290U2NlbmUsIEdhbWVTY2VuZSwgTWFpbk1lbnVTY2VuZSwgTG9iYnlTY2VuZV1cbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBMb2JieURpc3BsYXlPYmplY3RzIH0gZnJvbSAnLi9sb2JieS1kaXNwbGF5LW9iamVjdHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvd29ybGQtc3RhdGUtb3duZXInXG5pbXBvcnQgeyBmaXJlQW5kRm9yZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbC9hc3luYy11dGlsJ1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlZExvYmJ5U2NlbmUge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9iYnlEaXNwbGF5T2JqZWN0czogTG9iYnlEaXNwbGF5T2JqZWN0c1xuICBwcml2YXRlIGxpc3RlbmVyPzogV29ybGRFdmVudExpc3RlbmVyXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIHRoaXMucGxheWVySWQgPSBzZXJ2ZXJPckNsaWVudC5wbGF5ZXJJZFxuICAgIHRoaXMuc2NlbmUuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5DTElDSylcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuTkVXX1RVUk4pXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlkpXG4gICAgdGhpcy5sb2JieURpc3BsYXlPYmplY3RzID0gdGhpcy5tYWtlTG9iYnlEaXNwbGF5T2JqZWN0cyhzY2VuZSwgdGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBDbGllbnQpIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuICAgIHRoaXMuc3luYygpXG4gIH1cblxuICBwcml2YXRlIG1ha2VMb2JieURpc3BsYXlPYmplY3RzID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHBsYXllcklkOiBQbGF5ZXJJZCkgPT5cbiAgICBuZXcgTG9iYnlEaXNwbGF5T2JqZWN0cyhzY2VuZSwgcGxheWVySWQsIHRoaXMuaGFuZGxlU3RhcnRHYW1lLCB0aGlzLmhhbmRsZUNoYW5nZVBsYXllck5hbWUpXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHRoaXMuaGFuZGxlV29ybGRFdmVudChldmVudCwgY2xpZW50KVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdnYW1lU3RhcnRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuTkVXX1RVUk4pXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgc2VydmVyT3JDbGllbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXVuY2hHYW1lU2NlbmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlkpXG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoR2FtZVNjZW5lID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHtcbiAgICAgIHNlcnZlck9yQ2xpZW50OiB0aGlzLnNlcnZlck9yQ2xpZW50LFxuICAgIH1cbiAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVBsYXllck5hbWUgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ2NoYW5nZVBsYXllck5hbWUnLCBuYW1lIH0pXG5cbiAgcHJpdmF0ZSBkaXNwYXRjaEFjdGlvbiA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgZmlyZUFuZEZvcmdldCgoKSA9PiB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jID0gKCk6IHZvaWQgPT4gdGhpcy5sb2JieURpc3BsYXlPYmplY3RzLnN5bmModGhpcy5zZXJ2ZXJPckNsaWVudC53b3JsZFN0YXRlKVxuXG4gIHByaXZhdGUgYWN0QXNTZXJ2ZXIgPSAoc2VydmVyOiBTZXJ2ZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVyID0gKGV2ZW50KSA9PiB0aGlzLmhhbmRsZVdvcmxkRXZlbnQoZXZlbnQsIHNlcnZlcilcbiAgICBzZXJ2ZXIuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gKCkgPT4gdGhpcy5kaXNwYXRjaEFjdGlvbih7IHR5cGU6ICdzdGFydEdhbWUnIH0pXG59XG4iLCJpbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9tZW51LWJ1dHRvbidcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdWRpb0tleXMsIEltYWdlS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBQTEFZRVJfVElOVFMgfSBmcm9tICcuLi9jb2xvdXJzJ1xuXG5pbnRlcmZhY2UgUGxheWVyT2JqZWN0cyB7XG4gIG5hbWVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBsbGFtYTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxufVxuXG5leHBvcnQgY2xhc3MgTG9iYnlEaXNwbGF5T2JqZWN0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG9uU3RhcnRHYW1lOiBWb2lkRnVuY3Rpb25cbiAgcHJpdmF0ZSByZWFkb25seSBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWRcblxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllck9iamVjdHM6IE1hcDxQbGF5ZXJJZCwgUGxheWVyT2JqZWN0cz4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBob3N0Q3Jvd246IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0R2FtZUJ1dHRvbj86IE1lbnVCdXR0b25cbiAgcHJpdmF0ZSByZWFkb25seSB3YWl0aW5nRm9ySG9zdFRleHQ/OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsXG4gICAgcGxheWVySWQ6IFBsYXllcklkLFxuICAgIG9uU3RhcnRHYW1lOiBWb2lkRnVuY3Rpb24sXG4gICAgb25DaGFuZ2VQbGF5ZXJOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm9uU3RhcnRHYW1lID0gb25TdGFydEdhbWVcbiAgICB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZSA9IG9uQ2hhbmdlUGxheWVyTmFtZVxuICAgIHRoaXMuc2NlbmUuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcbiAgICBpZiAocGxheWVySWQgPT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbiA9IG5ldyBNZW51QnV0dG9uKHRoaXMuc2NlbmUsIDEwMCwgMCwgJ1N0YXJ0IEdhbWUnLCB0aGlzLmhhbmRsZVN0YXJ0R2FtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YWl0aW5nRm9ySG9zdFRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDEwMCwgMCwgJ1dhaXRpbmcgZm9yIGhvc3QgdG8gc3RhcnQgdGhlIGdhbWUuLi4nKVxuICAgIH1cbiAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6ICdsbGFtYS13YWxrJyxcbiAgICAgIGZyYW1lczogW1xuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzEgfSBhcyBhbnksXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfMiB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzMgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV80IH0sXG4gICAgICBdLFxuICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgcmVwZWF0OiAtMSxcbiAgICB9KVxuICAgIHRoaXMuaG9zdENyb3duID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMzMwLCAwLCAnY3Jvd24nKS5zZXRTY2FsZSgwLjYpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgIHRoaXMub25TdGFydEdhbWUoKVxuICB9XG5cbiAgcHVibGljIHN5bmMgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuY3JlYXRlQW5kRGVzdHJveVBsYXllck9iamVjdHMod29ybGRTdGF0ZSlcbiAgICBsZXQgeSA9IDEwMFxuICAgIGNvbnN0IHNvcnRlZFBsYXllcnMgPSB3b3JsZFN0YXRlLmdldFNvcnRlZFBsYXllcnMoKVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHNvcnRlZFBsYXllcnMpIHtcbiAgICAgIGlmIChwbGF5ZXIuaWQgPT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICAgIHRoaXMuaG9zdENyb3duLnNldFkoeSArIDUpXG4gICAgICB9XG4gICAgICBjb25zdCB7IG5hbWVUZXh0LCBsbGFtYSB9ID0gdGhpcy5nZXRQbGF5ZXJPYmplY3RzKHBsYXllci5pZClcbiAgICAgIG5hbWVUZXh0LnNldFRleHQocGxheWVyLm5hbWUpLnNldFkoeSlcbiAgICAgIGxsYW1hLnNldFkoeSArIDEwKVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICBpZiAodGhpcy5zdGFydEdhbWVCdXR0b24pIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLnNldFkoeSlcbiAgICB9XG4gICAgaWYgKHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0KSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dC5zZXRZKHkpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXJPYmplY3RzID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllck9iamVjdHMgPT4ge1xuICAgIGNvbnN0IHBsYXllck9iamVjdHMgPSB0aGlzLnBsYXllck9iamVjdHMuZ2V0KHBsYXllcklkKVxuICAgIGlmICghcGxheWVyT2JqZWN0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbGF5ZXIgb2JqZWN0cyBmb3VuZCBmb3IgJHtwbGF5ZXJJZH1gKVxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyT2JqZWN0c1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVBbmREZXN0cm95UGxheWVyT2JqZWN0cyA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmVxdWlyZWRQbGF5ZXJJZHMgPSB3b3JsZFN0YXRlLmdldFBsYXllcklkcygpXG4gICAgY29uc3QgY3VycmVudFBsYXllcklkcyA9IEFycmF5LmZyb20odGhpcy5wbGF5ZXJPYmplY3RzLmtleXMoKSlcblxuICAgIGNvbnN0IHN1cnBsdXNQbGF5ZXJJZHMgPSBSLmRpZmZlcmVuY2UoY3VycmVudFBsYXllcklkcywgcmVxdWlyZWRQbGF5ZXJJZHMpXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBvZiBzdXJwbHVzUGxheWVySWRzKSB7XG4gICAgICBjb25zdCB7IG5hbWVUZXh0LCBsbGFtYSB9ID0gdGhpcy5nZXRQbGF5ZXJPYmplY3RzKHBsYXllcklkKVxuICAgICAgbmFtZVRleHQuZGVzdHJveSgpXG4gICAgICBsbGFtYS5kZXN0cm95KClcbiAgICAgIHRoaXMucGxheWVyT2JqZWN0cy5kZWxldGUocGxheWVySWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2luZ1BsYXllcklkcyA9IFIuZGlmZmVyZW5jZShyZXF1aXJlZFBsYXllcklkcywgY3VycmVudFBsYXllcklkcylcbiAgICBmb3IgKGNvbnN0IHBsYXllcklkIG9mIG1pc3NpbmdQbGF5ZXJJZHMpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHdvcmxkU3RhdGUuZ2V0UGxheWVyKHBsYXllcklkKVxuICAgICAgdGhpcy5jcmVhdGVPYmplY3RzRm9yUGxheWVyKHBsYXllcilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU9iamVjdHNGb3JQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcbiAgICBjb25zdCBuYW1lVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCgxMDAsIDAsIHBsYXllci5uYW1lLCB7XG4gICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgZml4ZWRXaWR0aDogMjAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBsYXllci5pZCA9PT0gdGhpcy5wbGF5ZXJJZCA/ICcjMzMzMzMzJyA6ICcjMDAwMDAwJyxcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmhhbmRsZVBsYXllclRleHRDbGljayhwbGF5ZXIsIG5hbWVUZXh0KSlcbiAgICBjb25zdCBsbGFtYSA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAuc3ByaXRlKDcwLCAwLCBJbWFnZUtleXMuTExBTUFfRUFUXzEpXG4gICAgICAuc2V0U2NhbGUoMC42KVxuICAgICAgLnNldFRpbnQoUExBWUVSX1RJTlRTW3BsYXllci5pZCAtIDFdKVxuICAgICAgLnBsYXkoJ2xsYW1hLXdhbGsnKVxuICAgIGNvbnN0IHBsYXllck9iamVjdHM6IFBsYXllck9iamVjdHMgPSB7IG5hbWVUZXh0LCBsbGFtYSB9XG4gICAgdGhpcy5wbGF5ZXJPYmplY3RzLnNldChwbGF5ZXIuaWQsIHBsYXllck9iamVjdHMpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllclRleHRDbGljayA9IChwbGF5ZXI6IFBsYXllciwgcGxheWVyVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQpOiB2b2lkID0+IHtcbiAgICBpZiAocGxheWVyLmlkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnNjZW5lLnBsdWdpbnMuZ2V0KCdyZXhUZXh0RWRpdCcpIGFzIGFueVxuICAgICAgcGx1Z2luLmVkaXQocGxheWVyVGV4dCwge1xuICAgICAgICBvbkNsb3NlOiAoKSA9PiB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZShwbGF5ZXJUZXh0LnRleHQpLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQ3JlYXRlZExvYmJ5U2NlbmUgfSBmcm9tICcuL2NyZWF0ZWQtbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBjb25zdCBMT0JCWV9TQ0VORV9LRVkgPSAnTG9iYnknXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9iYnlTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG59XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBMT0JCWV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBMb2JieVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50IH0gPSBzY2VuZURhdGFcbiAgICBuZXcgQ3JlYXRlZExvYmJ5U2NlbmUodGhpcywgc2VydmVyT3JDbGllbnQpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21haW4tZ2FtZS9tb2RlJ1xuaW1wb3J0IHsgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IHR5cGUgU2lkZWJhciA9ICdsb2cnIHwgJ3BsYXllcnMnXG5cbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVTdGF0ZSB7XG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBtb2RlOiBNb2RlXG4gIHJlYWRvbmx5IHNlbGVjdGVkSGV4OiBPcHRpb248SGV4PlxuICByZWFkb25seSBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyOiBudW1iZXJcbiAgcmVhZG9ubHkgc2lkZWJhcjogU2lkZWJhclxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwbGF5ZXJJZCxcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkSGV4LFxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSAwLFxuICAgIHNpZGViYXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBtb2RlOiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBPcHRpb248SGV4PlxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBudW1iZXJcbiAgICBzaWRlYmFyOiBTaWRlYmFyXG4gIH0pIHtcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgdGhpcy5zZWxlY3RlZEhleCA9IHNlbGVjdGVkSGV4XG4gICAgdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlclxuICAgIHRoaXMuc2lkZWJhciA9IHNpZGViYXJcbiAgICBhc3NlcnQoYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA+PSAwKVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBtb2RlID0gdGhpcy5tb2RlLFxuICAgIHNlbGVjdGVkSGV4ID0gdG9NYXliZSh0aGlzLnNlbGVjdGVkSGV4KSxcbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyLFxuICAgIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZD86IFBsYXllcklkXG4gICAgbW9kZT86IE1vZGVcbiAgICBzZWxlY3RlZEhleD86IE1heWJlPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gICAgc2lkZWJhcj86IFNpZGViYXJcbiAgfSA9IHt9KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICBuZXcgTG9jYWxHYW1lU3RhdGUoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXg6IHRvT3B0aW9uKHNlbGVjdGVkSGV4KSwgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciwgc2lkZWJhciB9KVxuXG4gIHB1YmxpYyBkZXNlbGVjdCA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZClcblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRIZXggPSAoc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+KTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUoc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcblxuICBwdWJsaWMgaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciArIDEgfSlcblxuICBwdWJsaWMgZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciAtIDEgfSlcbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSA9IG5ldyBMb2NhbEdhbWVTdGF0ZSh7XG4gIHBsYXllcklkOiAxLFxuICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gIHNpZGViYXI6ICdsb2cnLFxufSlcbiIsImltcG9ydCB7IE1hcERpc3BsYXlPYmplY3QgfSBmcm9tICcuL21hcC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbml0RGlzcGxheU9iamVjdCB9IGZyb20gJy4vdW5pdC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IExvY2FsQWN0aW9uRGlzcGF0Y2hlciwgVGV4dHNEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi90ZXh0cy1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGZpcmVBbmRGb3JnZXQgfSBmcm9tICcuLi8uLi91dGlsL2FzeW5jLXV0aWwnXG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWVkID0gJ25vcm1hbCcgfCAncXVpY2snXG5cbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnbW92ZSdcbiAgdW5pdElkOiBVbml0SWRcbiAgZnJvbTogSGV4XG4gIHRvOiBIZXhcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21iYXRBbmltYXRpb25TcGVjIHtcbiAgdHlwZTogJ2NvbWJhdCdcbiAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZVxuICBhdHRhY2tlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbiAgZGVmZW5kZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWMgPSBNb3ZlQW5pbWF0aW9uU3BlYyB8IENvbWJhdEFuaW1hdGlvblNwZWNcblxuZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgbWFwRGlzcGxheU9iamVjdDogTWFwRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IHVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IHRleHRzRGlzcGxheU9iamVjdDogVGV4dHNEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIGFuaW1hdGlvbnM6IEFuaW1hdGlvblNwZWNbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0ID0gbmV3IE1hcERpc3BsYXlPYmplY3Qoc2NlbmUsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdCA9IG5ldyBUZXh0c0Rpc3BsYXlPYmplY3QoXG4gICAgICBzY2VuZSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgICApXG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnbGxhbWEtd2FsaycsXG4gICAgICBmcmFtZXM6IFtcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8xIH0gYXMgYW55LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzIgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8zIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfNCB9LFxuICAgICAgXSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSlcbiAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6ICdsbGFtYS1lYXQnLFxuICAgICAgZnJhbWVzOiBbXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzEgfSBhcyBhbnksXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzIgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV9FQVRfMyB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BX0VBVF80IH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzMgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV9FQVRfNCB9LFxuICAgICAgXSxcbiAgICAgIGZyYW1lUmF0ZTogNCxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICB0aGlzLnNjaGVkdWxlRWF0aW5nQW5pbWF0aW9uKClcbiAgfVxuXG4gIHByaXZhdGUgc2NoZWR1bGVFYXRpbmdBbmltYXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGltZXMgPSBbNDAwMCwgNTAwMCwgNzAwMF1cbiAgICBjb25zdCBkZWxheSA9IHJhbmRvbUVsZW1lbnQodGltZXMpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdHMgPSBBcnJheS5mcm9tKHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnZhbHVlcygpKVxuICAgICAgaWYgKHVuaXREaXNwbGF5T2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVVuaXQgPSByYW5kb21FbGVtZW50KHVuaXREaXNwbGF5T2JqZWN0cylcbiAgICAgICAgZmlyZUFuZEZvcmdldCgoKSA9PiByYW5kb21Vbml0LnJ1bkVhdEFuaW1hdGlvbigpKVxuICAgICAgfVxuICAgICAgdGhpcy5zY2hlZHVsZUVhdGluZ0FuaW1hdGlvbigpXG4gICAgfSwgZGVsYXkpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnQ6IFBvaW50KTogdm9pZCA9PiB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50KVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB0aGlzLnRleHRzRGlzcGxheU9iamVjdC5oYXNDbGlja0hhbmRsZXJGb3IocG9pbnQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9IChcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBhbmltYXRpb246IE9wdGlvbjxBbmltYXRpb25TcGVjPixcbiAgKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFIuYXBwZW5kKGFuaW1hdGlvbikodGhpcy5hbmltYXRpb25zKVxuICAgICAgdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pLmZvckVhY2godGhpcy5tYW5hZ2VVbml0QXNCZWluZ0FuaW1hdGVkKVxuICAgICAgdGhpcy50cmlnZ2VyQW5pbWF0aW9ucygpXG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVW5pdHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVW5pdHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5yZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCgpXG4gICAgY29uc3QgdW5pdHNUb1N5bmMgPSB0aGlzLndvcmxkU3RhdGUudW5pdHMuZmlsdGVyKCh1bml0KSA9PiAhdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5oYXModW5pdC5pZCkpXG4gICAgZm9yIChjb25zdCB1bml0IG9mIHVuaXRzVG9TeW5jKSB7XG4gICAgICBsZXQgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdC5pZClcbiAgICAgIGlmICghdW5pdERpc3BsYXlPYmplY3QpIHtcbiAgICAgICAgdW5pdERpc3BsYXlPYmplY3QgPSBuZXcgVW5pdERpc3BsYXlPYmplY3QodGhpcy5zY2VuZSwgdW5pdClcbiAgICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXQuaWQsIHVuaXREaXNwbGF5T2JqZWN0KVxuICAgICAgfVxuICAgICAgdW5pdERpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdXJwbHVzVW5pdElkcyA9IFIuZGlmZmVyZW5jZShcbiAgICAgIEFycmF5LmZyb20odGhpcy51bml0RGlzcGxheU9iamVjdHMua2V5cygpKSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQuaWQpLFxuICAgIClcbiAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiBzdXJwbHVzVW5pdElkcykge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZCk/LmRlc3Ryb3koKVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJBbmltYXRpb25zID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzQW5pbWF0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXF1ZW5jZUFuaW1hdGlvbnMgPSAoKToge1xuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3c6IEFuaW1hdGlvblNwZWNbXVxuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlcjogQW5pbWF0aW9uU3BlY1tdXG4gIH0gPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMgPSBuZXcgU2V0PFVuaXRJZD4oKVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cgPSBbXVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciA9IFtdXG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgY29uc3QgYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zID0gUi5hbnkoXG4gICAgICAgICh1bml0SWQpID0+IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuaGFzKHVuaXRJZCksXG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLFxuICAgICAgKVxuICAgICAgaWYgKGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucykge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIucHVzaChhbmltYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93LnB1c2goYW5pbWF0aW9uKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB1bml0SWQgb2YgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24pIHtcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5hZGQodW5pdElkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQW5pbWF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICB3aGlsZSAodGhpcy5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfSA9IHRoaXMuc2VxdWVuY2VBbmltYXRpb25zKClcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyLmxlbmd0aCA9PT0gMCA/ICdub3JtYWwnIDogJ3F1aWNrJ1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChhbmltYXRpb25zVG9QZXJmb3JtTm93Lm1hcCgoYW5pbWF0aW9uKSA9PiB0aGlzLnJ1bkFuaW1hdGlvbihhbmltYXRpb24sIHNwZWVkKSkpXG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cpIHtcbiAgICAgICAgICB0aGlzLnJlbGVhc2VVbml0c0Zyb21CZWluZ0FuaW1hdGVkV2hlcmVOb0xvbmdlck5lZWRlZChhbmltYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQgPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdElkc0luQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgY29uc3QgdW5pdElkc0luUmVtYWluaW5nQW5pbWF0aW9ucyA9IHRoaXMuZ2V0VW5pdHNJbnZvbHZlZEluQW5pbWF0aW9ucygpXG4gICAgY29uc3QgdW5pdElkc1RvUmVsZWFzZSA9IFIuZGlmZmVyZW5jZSh1bml0SWRzSW5BbmltYXRpb24sIHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMpXG4gICAgdW5pdElkc1RvUmVsZWFzZS5mb3JFYWNoKHRoaXMucmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZClcbiAgfVxuXG4gIHByaXZhdGUgbWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmIChkaXNwbGF5T2JqZWN0KSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdElkLCBkaXNwbGF5T2JqZWN0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7dW5pdElkfWBcbiAgICB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh1bml0KSB7XG4gICAgICBkaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMgPSAoKTogVW5pdElkW10gPT4gUi5jaGFpbih0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLCB0aGlzLmFuaW1hdGlvbnMpXG5cbiAgcHJpdmF0ZSBnZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiBVbml0SWRbXSA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLnVuaXRJZF1cbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLmF0dGFja2VyLnVuaXRJZCwgYW5pbWF0aW9uLmRlZmVuZGVyLnVuaXRJZF1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IEFuaW1hdGlvblNwZWMsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bk1vdmVBbmltYXRpb24oYW5pbWF0aW9uLCBzcGVlZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ29tYmF0QW5pbWF0aW9uKGFuaW1hdGlvbiwgc3BlZWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IE1vdmVBbmltYXRpb25TcGVjLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYW5pbWF0aW9uLnVuaXRJZClcbiAgICBpZiAoIWRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHthbmltYXRpb24udW5pdElkfWBcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLldBTEspXG4gICAgYXdhaXQgZGlzcGxheU9iamVjdC5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbi5mcm9tLCBhbmltYXRpb24udG8sIHNwZWVkKVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Db21iYXRBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBDb21iYXRBbmltYXRpb25TcGVjLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gYW5pbWF0aW9uXG4gICAgY29uc3QgYXR0YWNrZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYXR0YWNrZXIudW5pdElkKVxuICAgIGlmICghYXR0YWNrZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YXR0YWNrZXIudW5pdElkfWBcbiAgICBjb25zdCBkZWZlbmRlckRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChkZWZlbmRlci51bml0SWQpXG4gICAgaWYgKCFkZWZlbmRlckRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHtkZWZlbmRlci51bml0SWR9YFxuICAgIGlmIChhbmltYXRpb24uYXR0YWNrVHlwZSA9PT0gJ21lbGVlJykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KHJhbmRvbUVsZW1lbnQoW0F1ZGlvS2V5cy5BVFRBQ0tfMSwgQXVkaW9LZXlzLkFUVEFDS18yLCBBdWRpb0tleXMuQVRUQUNLXzNdKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5TUElUKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkIHx8IGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ERUFUSClcbiAgICB9XG4gICAgY29uc3Qgc2ltdWx0YW5lb3VzQW5pbWF0aW9uczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuQXR0YWNrQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbiwgc3BlZWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1blNwaXRBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uLCBzcGVlZCkpXG4gICAgfVxuICAgIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuRGVhdGhBbmltYXRpb24oc3BlZWQpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKHNwZWVkKSlcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoc2ltdWx0YW5lb3VzQW5pbWF0aW9ucylcbiAgICBpZiAoYXR0YWNrZXIuZGFtYWdlID4gMCkge1xuICAgICAgZmlyZUFuZEZvcmdldCgoKSA9PiBhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuRGFtYWdlQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBhdHRhY2tlci5kYW1hZ2UsIHNwZWVkKSlcbiAgICB9XG4gICAgaWYgKGRlZmVuZGVyLmRhbWFnZSA+IDApIHtcbiAgICAgIGZpcmVBbmRGb3JnZXQoKCkgPT4gZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihkZWZlbmRlci5sb2NhdGlvbiwgZGVmZW5kZXIuZGFtYWdlLCBzcGVlZCkpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRQb2ludHMsIG11bHRpcGx5UG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLCBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBTExfQVVESU9fS0VZUywgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IG1hcFRvTG9jYWxBY3Rpb24gfSBmcm9tICcuL2tleWJvYXJkLW1hcHBlcidcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBMb2NhbEFjdGlvblByb2Nlc3NvciwgTG9jYWxBY3Rpb25SZXN1bHQgfSBmcm9tICcuL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3InXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi8uLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBBbmltYXRpb25TcGVjLCBEaXNwbGF5T2JqZWN0cyB9IGZyb20gJy4vZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgUG9pbnRlciA9IFBoYXNlci5JbnB1dC5Qb2ludGVyXG5cbmV4cG9ydCBjb25zdCBHQU1FX1NDRU5FX0tFWSA9ICdHYW1lJ1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogR0FNRV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVNjZW5lRGF0YSB7XG4gIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnRcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9TSVpFID0gNDhcbmV4cG9ydCBjb25zdCBEUkFXSU5HX09GRlNFVCA9IHsgeDogNjAsIHk6IDEwMCB9XG5leHBvcnQgY29uc3QgaGV4Q2VudGVyID0gKGhleDogSGV4KTogUG9pbnQgPT4gYWRkUG9pbnRzKG11bHRpcGx5UG9pbnQoY2VudGVyUG9pbnQoaGV4KSwgSEVYX1NJWkUpLCBEUkFXSU5HX09GRlNFVClcblxuZXhwb3J0IHR5cGUgR2FtZUlkID0gc3RyaW5nXG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIGNyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHNlcnZlck9yQ2xpZW50PzogU2VydmVyIHwgQ2xpZW50XG5cbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURVxuXG4gIHByaXZhdGUgZGlzcGxheU9iamVjdHM/OiBEaXNwbGF5T2JqZWN0c1xuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgLy8gQ3JlYXRlXG4gIC8vIC0tLS0tLVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuY3JlYXRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHYW1lIHNjZW5lIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlZCA9IHRydWVcbiAgICB9XG4gICAgY29uc3QgeyBzZXJ2ZXJPckNsaWVudCB9ID0gc2NlbmVEYXRhXG4gICAgdGhpcy5zZXRVcFNvdW5kKClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXJPckNsaWVudC53b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURS5jb3B5KHsgcGxheWVySWQ6IHNlcnZlck9yQ2xpZW50LnBsYXllcklkIH0pXG4gICAgdGhpcy5zZXJ2ZXJPckNsaWVudCA9IHNlcnZlck9yQ2xpZW50XG4gICAgc2VydmVyT3JDbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50KVxuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cyA9IG5ldyBEaXNwbGF5T2JqZWN0cyh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24pXG4gICAgdGhpcy51cGRhdGVBc0F0U3RhcnRPZlR1cm4oKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFNvdW5kID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goKGtleSkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoYW5pbWF0aW9uPzogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCBhbmltYXRpb24pXG5cbiAgLy8gTmV0d29ya2luZ1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBhc3luY1NlbmRUb1NlcnZlciA9IGFzeW5jIChhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCF0aGlzLnNlcnZlck9yQ2xpZW50KSB7XG4gICAgICB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIHNlcnZlck9yQ2xpZW50YFxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICB9XG5cbiAgLy8gSW5wdXQgaGFuZGxlcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIHNldFVwSW5wdXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuaW5wdXQubW91c2UuZGlzYWJsZUNvbnRleHRNZW51KClcbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkpXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb24gPSBtYXBUb0xvY2FsQWN0aW9uKGV2ZW50LCB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgaWYgKGxvY2FsQWN0aW9uKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKGxvY2FsQWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTG9jYWxBY3Rpb24gPSAobG9jYWxBY3Rpb246IExvY2FsQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb25Qcm9jZXNzb3IgPSBuZXcgTG9jYWxBY3Rpb25Qcm9jZXNzb3IodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsQWN0aW9uUHJvY2Vzc29yLnByb2Nlc3MobG9jYWxBY3Rpb24pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5lbmFjdExvY2FsQWN0aW9uUmVzdWx0KHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuYWN0TG9jYWxBY3Rpb25SZXN1bHQgPSAocmVzdWx0OiBMb2NhbEFjdGlvblJlc3VsdCk6IHZvaWQgPT4ge1xuICAgIGlmIChyZXN1bHQubmV3TG9jYWxHYW1lU3RhdGUpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSByZXN1bHQubmV3TG9jYWxHYW1lU3RhdGVcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB9XG4gICAgaWYgKHJlc3VsdC53b3JsZEFjdGlvbikge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyRG93biA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGVzZSBhcyB0aGV5IGhhdmUgdGhlaXIgb3duIGhhbmRsZXJzXG4gICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdHM/Lmhhc0NsaWNrSGFuZGxlckZvcihwcmVzc2VkUG9pbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocHJlc3NlZFBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHBvaW50ZXIuYnV0dG9uID09PSAyKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2dvSGV4JywgaGV4IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlTGVmdENsaWNrKGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4ID0gKGhleDogSGV4KTogTG9jYWxBY3Rpb24gPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdEhleCcsIGhleCB9XG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZU1vdmUnLCB1bml0SWQ6IG1vZGUudW5pdElkLCBoZXggfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2NvbXBsZXRlQXR0YWNrJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4LCBhdHRhY2tUeXBlOiBtb2RlLmF0dGFja1R5cGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGVmdENsaWNrID0gKGhleDogSGV4KTogdm9pZCA9PiB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHRoaXMuZ2V0TG9jYWxBY3Rpb25Gb3JDbGlja2luZ0FIZXgoaGV4KSlcblxuICAvLyBIYW5kbGUgd29ybGQgZXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGVcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgY2FzZSAncGxheWVyQ2hhbmdlZE5hbWUnOlxuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgY2FzZSAnY2hhdCc6XG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3VuaXRNb3ZlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudChldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckVuZGVkVHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyRGVmZWF0ZWQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbmV3VHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlTmV3VHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHYW1lT3ZlciA9IChldmVudDogR2FtZU92ZXJXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LnZpY3RvciA9PT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCkge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDKVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckVuZGVkVHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckRlZmVhdGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVEKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3VHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMudXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKCkge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICAgIC5jb3B5KHsgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9IH0pXG4gICAgICAuc2V0U2VsZWN0ZWRIZXgodW5pdFRvU2VsZWN0Py5sb2NhdGlvbilcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQgPSAoZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBjb25zdCB3YXNQcmV2aW91c2x5U2VsZWN0ZWQgPVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCAmJlxuICAgICAgcHJldmlvdXNXb3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4KT8uaWQgPT09IHVuaXRJZFxuICAgIGlmICh3YXNQcmV2aW91c2x5U2VsZWN0ZWQgJiYgdW5pdC5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKHVuaXRJZCwgdG8pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9IH0pLnNldFNlbGVjdGVkSGV4KG5ld1NlbGVjdGVkSGV4KVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSh7IHR5cGU6ICdtb3ZlJywgdW5pdElkLCBmcm9tLCB0byB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgZGVmYXVsdExvY2F0aW9uOiBIZXgpOiBPcHRpb248SGV4PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIC8vIFJldGFpbiBzZWxlY3Rpb24gaWYgdW5pdCBzdGlsbCBleGlzdHMgYW5kIHdlIHN0aWxsIGhhdmUgYWN0aW9uIHBvaW50cywgZWxzZSBzZWxlY3QgbmV4dCB1bml0IChvciBub3RoaW5nIGlmIHRoZXJlIGlzbid0IG9uZSlcbiAgICBsZXQgbmV3U2VsZWN0ZWRIZXhcbiAgICBpZiAoIXVuaXQgfHwgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA9PT0gMCkge1xuICAgICAgY29uc3QgbmV4dFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHModW5pdElkKVxuICAgICAgbmV3U2VsZWN0ZWRIZXggPSBuZXh0VW5pdD8ubG9jYXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2VsZWN0ZWRIZXggPSBkZWZhdWx0TG9jYXRpb25cbiAgICB9XG4gICAgcmV0dXJuIG5ld1NlbGVjdGVkSGV4XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbWJhdFdvcmxkRXZlbnQgPSAoZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQoYXR0YWNrZXIsIGRlZmVuZGVyLCBwcmV2aW91c1dvcmxkU3RhdGUpXG4gICAgdGhpcy5zeW5jU2NlbmUoe1xuICAgICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgICBhdHRhY2tUeXBlOiBldmVudC5hdHRhY2tUeXBlLFxuICAgICAgYXR0YWNrZXIsXG4gICAgICBkZWZlbmRlcixcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChcbiAgICBhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIGRlZmVuZGVyOiBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gICAgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICApID0+IHtcbiAgICBjb25zdCBwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPSBuZXcgQ29tYmluZWRTdGF0ZShwcmV2aW91c1dvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpLmZpbmRTZWxlY3RlZFVuaXQoKT8uaWRcbiAgICBpZiAocHJldmlvdXNseVNlbGVjdGVkVW5pdElkID09PSBhdHRhY2tlci51bml0SWQgJiYgYXR0YWNrZXIucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayhhdHRhY2tlci51bml0SWQsIGF0dGFja2VyLmxvY2F0aW9uKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KS5zZXRTZWxlY3RlZEhleChuZXdTZWxlY3RlZEhleClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVzZWxlY3QgdW5pdCBraWxsZWQgYnkgYW5vdGhlciBwbGF5ZXJcbiAgICAgIGlmIChkZWZlbmRlci5raWxsZWQgJiYgZGVmZW5kZXIudW5pdElkID09PSBwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgJiYgZGVmZW5kZXIucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KS5kZXNlbGVjdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2EnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnbWVsZWUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncyc6XG4gICAgICBpZiAobW9kZS50eXBlID09PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSwgU2lkZWJhciB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleCwgYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NoYW5nZVNpZGViYXInOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDaGFuZ2VTaWRlYmFyKGFjdGlvbi5zaWRlYmFyKVxuICAgICAgY2FzZSAnY2hhdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNoYXQoYWN0aW9uLm1lc3NhZ2UpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0TmV4dFVuaXQgPSAoKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyhzZWxlY3RlZFVuaXQ/LmlkKVxuICAgIGlmICh1bml0VG9TZWxlY3QpIHtcbiAgICAgIGNvbnN0IG5ld0xvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgICAgICAuc2V0U2VsZWN0ZWRIZXgodW5pdFRvU2VsZWN0Py5sb2NhdGlvbilcbiAgICAgICAgLnNldE1vZGUoeyB0eXBlOiAnc2VsZWN0SGV4JyB9KVxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWJvcnQgPSAoKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgc3dpdGNoICh0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuZGVzZWxlY3QoKSB9XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSkgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZXggPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gICAgaWYgKHNlbGVjdGVkSGV4KSByZXR1cm4gdGhpcy5tb3ZlT3JBdHRhY2tIZXgoc2VsZWN0ZWRIZXguZ28oZGlyZWN0aW9uKSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR29IZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHRoaXMubW92ZU9yQXR0YWNrSGV4KGhleClcblxuICBwcml2YXRlIG1vdmVPckF0dGFja0hleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAoc2VsZWN0ZWRVbml0KSB7XG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5Nb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVUb0hleChzZWxlY3RlZFVuaXQsIGhleClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleChzZWxlY3RlZFVuaXQsIGhleCwgJ21lbGVlJylcbiAgICAgIGlmICh0YXJnZXRVbml0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleCgnbWVsZWUnLCBzZWxlY3RlZFVuaXQsIHRhcmdldFVuaXQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2tIZXggPSAoYXR0YWNrVHlwZTogQXR0YWNrVHlwZSwgYXR0YWNrZXI6IFVuaXQsIGRlZmVuZGVyOiBVbml0KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ2F0dGFjaycsXG4gICAgICBhdHRhY2tUeXBlLFxuICAgICAgYXR0YWNrZXI6IHsgdW5pdElkOiBhdHRhY2tlci5pZCwgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uIH0sXG4gICAgICBkZWZlbmRlcjogeyB1bml0SWQ6IGRlZmVuZGVyLmlkLCBsb2NhdGlvbjogZGVmZW5kZXIubG9jYXRpb24gfSxcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgbW92ZVRvSGV4ID0gKHVuaXQ6IFVuaXQsIGRlc3RpbmF0aW9uOiBIZXgpOiBMb2NhbEFjdGlvblJlc3VsdCA9PiAoe1xuICAgIHdvcmxkQWN0aW9uOiB7XG4gICAgICB0eXBlOiAnbW92ZVVuaXQnLFxuICAgICAgdW5pdElkOiB1bml0LmlkLFxuICAgICAgdG86IGRlc3RpbmF0aW9uLFxuICAgIH0sXG4gIH0pXG5cbiAgcHJpdmF0ZSBoYW5kbGVFbmRUdXJuID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGlmICghdGhpcy5jb21iaW5lZFN0YXRlLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm4pIHtcbiAgICAgIHJldHVybiB7IHdvcmxkQWN0aW9uOiB7IHR5cGU6ICdlbmRUdXJuJywgdHVybjogdGhpcy53b3JsZFN0YXRlLnR1cm4gfSB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbnRlck1vdmVNb2RlID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHVuaXQgJiYgdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSh1bml0KSkge1xuICAgICAgY29uc3QgbmV3TW9kZTogTW9kZSA9IHsgdHlwZTogJ21vdmVVbml0JywgZnJvbTogdW5pdC5sb2NhdGlvbiwgdW5pdElkOiB1bml0LmlkIH1cbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSkgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJBdHRhY2tNb2RlID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSkge1xuICAgICAgY29uc3QgbmV3TW9kZTogTW9kZSA9IHsgdHlwZTogJ2F0dGFjaycsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCwgYXR0YWNrVHlwZSB9XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZShuZXdNb2RlKVxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVNb3ZlID0gKHVuaXRJZDogVW5pdElkLCBkZXN0aW5hdGlvbjogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKSkgcmV0dXJuIHRoaXMubW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21wbGV0ZUF0dGFjayA9IChcbiAgICB1bml0SWQ6IFVuaXRJZCxcbiAgICB0YXJnZXRIZXg6IEhleCxcbiAgICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLFxuICApOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleChhdHRhY2tlciwgdGFyZ2V0SGV4LCBhdHRhY2tUeXBlKVxuICAgIGlmIChkZWZlbmRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0YWNrSGV4KGF0dGFja1R5cGUsIGF0dGFja2VyLCBkZWZlbmRlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWJvcnQoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0SGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZXggPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgLy8gSWYgY2xpY2sgaXMgb3V0IG9mIGJvdW5kcywgZGVzZWxlY3QgYW55IHNlbGVjdGVkIGhleFxuICAgICAgaWYgKHNlbGVjdGVkSGV4KSB7XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlc2VsZWN0KCkgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRIZXggJiYgc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIC8vIGlmIHNlbGVjdGVkIGhleCBpcyBjbGlja2VkLCB0b2dnbGUgc2VsZWN0aW9uIG9mZlxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuZGVzZWxlY3QoKSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KGhleCkgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlU2lkZWJhciA9IChzaWRlYmFyOiBTaWRlYmFyKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiAoe1xuICAgIG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBzaWRlYmFyIH0pLFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhdCA9IChtZXNzYWdlOiBzdHJpbmcpOiBMb2NhbEFjdGlvblJlc3VsdCA9PiAoeyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnY2hhdCcsIG1lc3NhZ2UgfSB9KVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIEhFWF9TSVpFLCBoZXhDZW50ZXIgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBtdWx0aXBseVBvaW50LCBwb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBmcm9tUG9pbnQsIGhleENvcm5lcnMgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQge1xuICBDb2xvdXJOdW1iZXIsXG4gIERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSLFxuICBIT1ZFUl9USUxFX0NPTE9VUixcbiAgU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSLFxuICBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUixcbn0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuaW1wb3J0IFBvbHlnb24gPSBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvblxuXG50eXBlIFRpbGVTdGF0ZSA9ICdkZWZhdWx0JyB8ICdzZWxlY3RlZCcgfCAndGFyZ2V0YWJsZSdcblxuZXhwb3J0IGNsYXNzIE1hcERpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGV4UG9seWdvbnM6IE1hcDxzdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPiA9IG5ldyBNYXA8c3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4oKVxuICBwcml2YXRlIHByZXZpb3VzSG92ZXJIZXg/OiBIZXhcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgZm9yIChjb25zdCBoZXggb2YgdGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKSB7XG4gICAgICB0aGlzLmNyZWF0ZUhleChoZXgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIZXggPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2x5Z29uQ2VudGVyID0gaGV4Q2VudGVyKGhleClcbiAgICB0aGlzLnNjZW5lLmFkZC5pbWFnZShwb2x5Z29uQ2VudGVyLngsIHBvbHlnb25DZW50ZXIueSwgJ2dyYXNzJykuc2V0U2NhbGUoMC42NSkuc2V0RGVwdGgoLTUpXG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5tYXAuaXNNb3VudGFpbihoZXgpKSB7XG4gICAgICB0aGlzLnNjZW5lLmFkZC5pbWFnZShwb2x5Z29uQ2VudGVyLngsIHBvbHlnb25DZW50ZXIueSwgJ21vdW50YWluJykuc2V0RGVwdGgoLTUpXG4gICAgfVxuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmFkZFBvbHlnb24ocG9seWdvbkNlbnRlciwgSEVYX1NJWkUpXG4gICAgdGhpcy5oZXhQb2x5Z29ucy5zZXQoaGV4LnRvU3RyaW5nKCksIHBvbHlnb24pXG4gIH1cblxuICBwcml2YXRlIGFkZFBvbHlnb24oY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24ge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gWy4uLmhleENvcm5lcnMocG9pbnQoMCwgMCksIHNpemUpXVxuICAgIHJldHVybiB0aGlzLnNjZW5lLmFkZC5wb2x5Z29uKGNlbnRlci54LCBjZW50ZXIueSwgdmVydGljZXMpLnNldE9yaWdpbigwLCAwKS5zZXRGaWxsU3R5bGUoMHgwMDAwMCwgMClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSkge1xuICAgICAgdGhpcy5zeW5jVGlsZShoZXgpXG4gICAgfVxuICB9XG5cbiAgLy8gRGVwdGhzXG4gIC8vIC01IC0gaW1hZ2VcbiAgLy8gLTQgLSBkZWZhdWx0IGJvcmRlclxuICAvLyAtMyAtIHRhcmdldGFibGUgYm9yZGVyXG4gIC8vIC0yIC0gc2VsZWN0ZWRcbiAgLy8gLTEgLSBob3ZlclxuXG4gIHByaXZhdGUgZ2V0RGVwdGggPSAodGlsZVN0YXRlOiBUaWxlU3RhdGUpOiBudW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGlsZVN0YXRlKSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgcmV0dXJuIC00XG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIC0zXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiAtMlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3luY1RpbGUgPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB0aWxlU3RhdGUgPSB0aGlzLmNhbGN1bGF0ZVRpbGVTdGF0ZShoZXgpXG4gICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleCkuc2V0U3Ryb2tlU3R5bGUoMywgdGhpcy5nZXRIZXhCb3JkZXJDb2xvdXIodGlsZVN0YXRlKSkuc2V0RGVwdGgodGhpcy5nZXREZXB0aCh0aWxlU3RhdGUpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZXhQb2x5Z29uID0gKGhleDogSGV4KTogUG9seWdvbiA9PiB7XG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMuaGV4UG9seWdvbnMuZ2V0KGhleC50b1N0cmluZygpKVxuICAgIGlmICghcG9seWdvbikgdGhyb3cgYE5vIHBvbHlnb24gZm91bmQgZm9yICR7aGV4fWBcbiAgICByZXR1cm4gcG9seWdvblxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVUaWxlU3RhdGUgPSAoaGV4OiBIZXgpOiBUaWxlU3RhdGUgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRIZXgsIG1vZGUgfSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICBpZiAoc2VsZWN0ZWRIZXggJiYgc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfVxuICAgIGlmIChtb2RlLnR5cGUgPT09ICdtb3ZlVW5pdCcpIHtcbiAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQobW9kZS51bml0SWQpXG4gICAgICBpZiAoc2VsZWN0ZWRIZXggJiYgdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5Nb3ZlVG9IZXgodW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gJ3RhcmdldGFibGUnXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtb2RlLnR5cGUgPT09ICdhdHRhY2snKSB7XG4gICAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKG1vZGUudW5pdElkKVxuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuQXR0YWNrSGV4KHVuaXQsIGhleCwgbW9kZS5hdHRhY2tUeXBlKSkge1xuICAgICAgICByZXR1cm4gJ3RhcmdldGFibGUnXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3ZlckhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gSE9WRVJfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCAmJiB0aGlzLnByZXZpb3VzSG92ZXJIZXguZXF1YWxzKGhleCkpIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXgpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUodGhpcy5wcmV2aW91c0hvdmVySGV4KVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleClcbiAgICAgICAgLnNldFN0cm9rZVN0eWxlKHRpbGVTdGF0ZSA9PT0gJ2RlZmF1bHQnID8gMiA6IDQsIHRoaXMuZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIodGlsZVN0YXRlKSlcbiAgICAgICAgLnNldERlcHRoKC0xKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gaGV4XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBoZXhXaWR0aCwgbWFwSGVpZ2h0IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgQUNUSU9OX1RFWFRfQ09MT1VSLCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBEUkFXSU5HX09GRlNFVCwgSEVYX1NJWkUgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IHBvaW50LCBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEF1ZGlvS2V5cywgSW1hZ2VLZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgVWlCb3JkZXJEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi91aS1ib3JkZXItZGlzcGxheS1vYmplY3QnXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmludGVyZmFjZSBQbGF5ZXJPYmplY3RzIHtcbiAgbmFtZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIGxsYW1hOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2Vcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRzRGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlclxuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvblRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvblRleHQzOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGVuZFR1cm5UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllclRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgaG91cmdsYXNzOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZlYXRUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHZpY3RvcnlUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkTG9nVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBzZWxlY3RXb3JsZExvZ1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0UGxheWVyc1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVyT2JqZWN0czogTWFwPFBsYXllcklkLCBQbGF5ZXJPYmplY3RzPiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGhvc3RDcm93bjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZW5kVHVybkJ1dHRvbjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgY2hhdFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2NlbmUuYWRkXG4gICAgICAuaW1hZ2UoNDAsIDI4LCBJbWFnZUtleXMuTExBTUFfMilcbiAgICAgIC5zZXRTY2FsZSgwLjYpXG4gICAgICAuc2V0VGludChQTEFZRVJfVElOVFNbbG9jYWxHYW1lU3RhdGUucGxheWVySWQgLSAxXSlcbiAgICB0aGlzLnBsYXllclRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDcwLCAyMCwgJycpXG4gICAgdGhpcy5ob3VyZ2xhc3MgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSg4NzUsIDMwLCAnaG91cmdsYXNzJykuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoXG4gICAgICBEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMixcbiAgICAgIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LFxuICAgICAgJycsXG4gICAgKVxuICAgIHRoaXMuYWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyAyNSwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0Q2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuYWN0aW9uVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5hY3Rpb25UZXh0MiA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA1MCwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0MkNsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dDIuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5hY3Rpb25UZXh0MyA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA3NSwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0M0NsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dDMuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5lbmRUdXJuQnV0dG9uID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC5pbWFnZSg2NTAgKyA1MjAsIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55ICsgNDQgKyA3MiwgJ2JsYW5rLWJ1dHRvbicpXG4gICAgICAuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMuZW5kVHVybkJ1dHRvbi5zZXRUZXh0dXJlKEltYWdlS2V5cy5CTEFOS19CVVRUT05fUFJFU1NFRCkpXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbmRUdXJuQnV0dG9uLnNldFRleHR1cmUoSW1hZ2VLZXlzLkJMQU5LX0JVVFRPTilcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW5kVHVybicgfSlcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmVuZFR1cm5CdXR0b24uc2V0VGV4dHVyZShJbWFnZUtleXMuQkxBTktfQlVUVE9OKSlcbiAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDc5MCArIDUyMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA2OCArIDcyLCAnJywge1xuICAgICAgICBmaWxsOiAnI2ZmZmZmZicsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0U2hhZG93KDIsIDIsICcjMDAwMDAwJylcblxuICAgIHRoaXMuc2VsZWN0V29ybGRMb2dUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDk2MCwgMjYsICdMb2cnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdjaGFuZ2VTaWRlYmFyJywgc2lkZWJhcjogJ2xvZycgfSkpXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5zZWxlY3RXb3JsZExvZ1RleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5zZWxlY3RXb3JsZExvZ1RleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuc2VsZWN0UGxheWVyc1RleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoMTAyNCwgMjYsICdQbGF5ZXJzJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnY2hhbmdlU2lkZWJhcicsIHNpZGViYXI6ICdwbGF5ZXJzJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLnNlbGVjdFBsYXllcnNUZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuc2VsZWN0UGxheWVyc1RleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZGVmZWF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIChtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSkgLyAyLCAnWW91IGhhdmUgYmVlbiBkZWZlYXRlZCEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy52aWN0b3J5VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIDMwLCAnVmljdG9yeSEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy53b3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDk2MCwgNTAsICcnKS5zZXRXb3JkV3JhcFdpZHRoKDQ3MCkuc2V0Rm9udFNpemUoMTQpXG4gICAgdGhpcy5jaGF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg5NjAsIDYwMCwgJ0NoYXQuLi4nLCB7XG4gICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgZml4ZWRXaWR0aDogNDc4LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhdFRleHQuc2V0VGV4dCgnJylcbiAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5zY2VuZS5wbHVnaW5zLmdldCgncmV4VGV4dEVkaXQnKSBhcyBhbnlcbiAgICAgICAgcGx1Z2luLmVkaXQodGhpcy5jaGF0VGV4dCwge1xuICAgICAgICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2NoYXQnLCBtZXNzYWdlOiB0aGlzLmNoYXRUZXh0LnRleHQgfSlcbiAgICAgICAgICAgIHRoaXMuY2hhdFRleHQuc2V0VGV4dCgnQ2hhdC4uLicpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgdGhpcy5ob3N0Q3Jvd24gPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgxMjM1LCAwLCAnY3Jvd24nKS5zZXRTY2FsZSgwLjYpXG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2Ygd29ybGRTdGF0ZS5nZXRTb3J0ZWRQbGF5ZXJzKCkpIHtcbiAgICAgIGNvbnN0IG5hbWVUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgICAgLnRleHQoMTAwNSwgMCwgcGxheWVyLm5hbWUsIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICAgICAgZml4ZWRXaWR0aDogMjAwLFxuICAgICAgICAgIGZvbnRTdHlsZTogcGxheWVyLmlkID09PSB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkID8gJ2JvbGQnIDogJ25vcm1hbCcsXG4gICAgICAgIH0pXG4gICAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgICAgLnNldFBhZGRpbmcoMCwgMCwgMCwgMClcbiAgICAgIGNvbnN0IGxsYW1hID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgICAgLnNwcml0ZSg5NzUsIDAsIEltYWdlS2V5cy5MTEFNQV9FQVRfMSlcbiAgICAgICAgLnNldFNjYWxlKDAuNilcbiAgICAgICAgLnNldFRpbnQoUExBWUVSX1RJTlRTW3BsYXllci5pZCAtIDFdKVxuICAgICAgY29uc3QgcGxheWVyT2JqZWN0czogUGxheWVyT2JqZWN0cyA9IHsgbmFtZVRleHQsIGxsYW1hIH1cbiAgICAgIHRoaXMucGxheWVyT2JqZWN0cy5zZXQocGxheWVyLmlkLCBwbGF5ZXJPYmplY3RzKVxuICAgIH1cbiAgICBuZXcgVWlCb3JkZXJEaXNwbGF5T2JqZWN0KHNjZW5lLCB7IHRvcExlZnQ6IHBvaW50KDk1MCwgMjApLCB3aWR0aDogNTAwLCBoZWlnaHQ6IDYyMCB9KVxuICAgIG5ldyBVaUJvcmRlckRpc3BsYXlPYmplY3Qoc2NlbmUsIHsgdG9wTGVmdDogcG9pbnQoMTAsIDUyMCksIHdpZHRoOiA5MzAsIGhlaWdodDogMTIwIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHRDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdhYm9ydCcgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDJDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ21lbGVlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDNDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ3NwaXQnIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGNvbnN0IGdhbWVPYmplY3Qgb2YgW3RoaXMuZW5kVHVyblRleHQsIHRoaXMuYWN0aW9uVGV4dCwgdGhpcy5hY3Rpb25UZXh0MiwgdGhpcy5hY3Rpb25UZXh0M10pXG4gICAgICBpZiAoZ2FtZU9iamVjdC5nZXRCb3VuZHMoKS5jb250YWlucyhwb2ludC54LCBwb2ludC55KSkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKClcbiAgICB0aGlzLmhvdXJnbGFzcy5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPiAwKVxuICAgIHRoaXMucGxheWVyVGV4dC5zZXRUZXh0KGAke3BsYXllci5uYW1lfSAtIFR1cm4gJHt0aGlzLndvcmxkU3RhdGUudHVybn1gKVxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJycpXG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnN5bmNTZWxlY3RIZXhNb2RlVGV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuc3luY01vdmVVbml0TW9kZVRleHQobW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnN5bmNBdHRhY2tNb2RlVGV4dChtb2RlLnVuaXRJZCwgbW9kZS5hdHRhY2tUeXBlKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICAgIGNvbnN0IGNhbkFjdCA9IHdvcmxkU3RhdGUuY2FuUGxheWVyQWN0KHBsYXllci5pZClcbiAgICBpZiAoY2FuQWN0KSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH1cbiAgICB0aGlzLmVuZFR1cm5CdXR0b24uc2V0VmlzaWJsZShjYW5BY3QpXG4gICAgdGhpcy5kZWZlYXRUZXh0LnNldFZpc2libGUocGxheWVyLmRlZmVhdGVkKVxuICAgIHRoaXMudmljdG9yeVRleHQuc2V0VmlzaWJsZSh3b3JsZFN0YXRlLmdhbWVPdmVySW5mbz8udmljdG9yID09PSBwbGF5ZXIuaWQpXG4gICAgdGhpcy53b3JsZExvZ1RleHQuc2V0VGV4dChSLnRha2VMYXN0KDIwLCB0aGlzLndvcmxkU3RhdGUud29ybGRMb2cpLmpvaW4oJ1xcbicpKVxuICAgIHRoaXMud29ybGRMb2dUZXh0LnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuc2lkZWJhciA9PT0gJ2xvZycpXG4gICAgbGV0IHkgPSA2NVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHdvcmxkU3RhdGUuZ2V0U29ydGVkUGxheWVycygpKSB7XG4gICAgICBpZiAocGxheWVyLmlkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgICB0aGlzLmhvc3RDcm93bi5zZXRZKHkgKyA1KVxuICAgICAgfVxuICAgICAgY29uc3QgeyBuYW1lVGV4dCwgbGxhbWEgfSA9IHRoaXMuZ2V0UGxheWVyT2JqZWN0cyhwbGF5ZXIuaWQpXG4gICAgICBuYW1lVGV4dFxuICAgICAgICAuc2V0VGV4dChwbGF5ZXIubmFtZSlcbiAgICAgICAgLnNldFkoeSlcbiAgICAgICAgLnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuc2lkZWJhciA9PT0gJ3BsYXllcnMnKVxuICAgICAgbGxhbWFcbiAgICAgICAgLnNldFkoeSArIDEwKVxuICAgICAgICAuc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5zaWRlYmFyID09PSAncGxheWVycycpXG4gICAgICAgIC5zZXRGbGlwWCghdGhpcy53b3JsZFN0YXRlLmNhblBsYXllckFjdChwbGF5ZXIuaWQpKVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICB0aGlzLmhvc3RDcm93bi5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLnNpZGViYXIgPT09ICdwbGF5ZXJzJylcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkLCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoYENsaWNrIHVuaXQgdG8gJHthdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFjaycgOiAnc3BpdCd9IChvciBFU0MgdG8gY2FuY2VsKWApXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJ1NwaXQgKHMpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck5hbWUgPSAocGxheWVySWQ6IFBsYXllcklkKTogc3RyaW5nID0+IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpLm5hbWVcblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBsYXllcklkLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9ID0gdW5pdFxuICAgIGNvbnN0IHBsYXllck5hbWUgPSB0aGlzLmdldFBsYXllck5hbWUocGxheWVySWQpXG4gICAgcmV0dXJuIGAke25hbWV9IC0gTGxhbWEgd2FycmlvciAtICR7cGxheWVyTmFtZX0gLSBIUCAke2hpdFBvaW50cy5jdXJyZW50fS8ke2hpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke2FjdGlvblBvaW50cy5jdXJyZW50fS8ke2FjdGlvblBvaW50cy5tYXh9YFxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXJPYmplY3RzID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllck9iamVjdHMgPT4ge1xuICAgIGNvbnN0IHBsYXllck9iamVjdHMgPSB0aGlzLnBsYXllck9iamVjdHMuZ2V0KHBsYXllcklkKVxuICAgIGlmICghcGxheWVyT2JqZWN0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbGF5ZXIgb2JqZWN0cyBmb3VuZCBmb3IgJHtwbGF5ZXJJZH1gKVxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyT2JqZWN0c1xuICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSW1hZ2VLZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcblxuY29uc3QgSE9SSVpPTlRBTF9JTUFHRV9XSURUSCA9IDc0XG5jb25zdCBWRVJUSUNBTF9JTUFHRV9IRUlHSFQgPSA1OVxuY29uc3QgQ09STkVSX1dJRFRIID0gMTVcbmNvbnN0IENPUk5FUl9IRUlHSFQgPSAxNVxuY29uc3QgVEhJQ0tORVNTID0gNFxuXG5leHBvcnQgY2xhc3MgVWlCb3JkZXJEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VzOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VbXSA9IFtdXG4gIHByaXZhdGUgcmVhZG9ubHkgdG9wTGVmdDogUG9pbnRcbiAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB7IHRvcExlZnQsIHdpZHRoLCBoZWlnaHQgfTogeyB0b3BMZWZ0OiBQb2ludDsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudG9wTGVmdCA9IHRvcExlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMuY3JlYXRlQ29ybmVycygpXG4gICAgdGhpcy5jcmVhdGVWZXJ0aWNhbFNlY3Rpb25zKClcbiAgICB0aGlzLmNyZWF0ZUhvcml6b250YWxTZWN0aW9ucygpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhvcml6b250YWxTZWN0aW9ucygpIHtcbiAgICBjb25zdCBob3Jpem9udGFsV2lkdGggPSB0aGlzLndpZHRoIC0gMiAqIENPUk5FUl9XSURUSFxuICAgIGNvbnN0IHdob2xlQ29waWVzID0gTWF0aC5mbG9vcihob3Jpem9udGFsV2lkdGggLyBIT1JJWk9OVEFMX0lNQUdFX1dJRFRIKVxuICAgIGNvbnN0IGV4Y2Vzc1dpZHRoID0gaG9yaXpvbnRhbFdpZHRoICUgSE9SSVpPTlRBTF9JTUFHRV9XSURUSFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHdob2xlQ29waWVzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB0aGlzLnRvcExlZnQueCArIENPUk5FUl9XSURUSCArIGkgKiBIT1JJWk9OVEFMX0lNQUdFX1dJRFRIXG4gICAgICBjb25zdCB5VG9wID0gdGhpcy50b3BMZWZ0LnlcbiAgICAgIGNvbnN0IHlCb3R0b20gPSB0aGlzLnRvcExlZnQueSArIHRoaXMuaGVpZ2h0IC0gVEhJQ0tORVNTXG4gICAgICBjb25zdCB0b3BIb3Jpem9udGFsSW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5VG9wLCBJbWFnZUtleXMuQk9SREVSX0hPUklaT05UQUwpLnNldE9yaWdpbigwLCAwKVxuICAgICAgY29uc3QgYm90dG9tSG9yaXpvbnRhbEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeCwgeUJvdHRvbSwgSW1hZ2VLZXlzLkJPUkRFUl9IT1JJWk9OVEFMKS5zZXRPcmlnaW4oMCwgMClcbiAgICAgIGlmIChpID09PSB3aG9sZUNvcGllcykge1xuICAgICAgICB0b3BIb3Jpem9udGFsSW1hZ2Uuc2V0Q3JvcCgwLCAwLCBleGNlc3NXaWR0aCwgNSlcbiAgICAgICAgYm90dG9tSG9yaXpvbnRhbEltYWdlLnNldENyb3AoMCwgMCwgZXhjZXNzV2lkdGgsIDUpXG4gICAgICB9XG4gICAgICB0aGlzLmltYWdlcy5wdXNoKGJvdHRvbUhvcml6b250YWxJbWFnZSwgdG9wSG9yaXpvbnRhbEltYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVmVydGljYWxTZWN0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbEhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gMiAqIENPUk5FUl9IRUlHSFRcbiAgICBjb25zdCB3aG9sZUNvcGllcyA9IE1hdGguZmxvb3IodmVydGljYWxIZWlnaHQgLyBWRVJUSUNBTF9JTUFHRV9IRUlHSFQpXG4gICAgY29uc3QgZXhjZXNzSGVpZ2h0ID0gdmVydGljYWxIZWlnaHQgJSBWRVJUSUNBTF9JTUFHRV9IRUlHSFRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB3aG9sZUNvcGllczsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gdGhpcy50b3BMZWZ0LnkgKyBDT1JORVJfV0lEVEggKyBpICogVkVSVElDQUxfSU1BR0VfSEVJR0hUXG4gICAgICBjb25zdCB4TGVmdCA9IHRoaXMudG9wTGVmdC54XG4gICAgICBjb25zdCB4UmlnaHQgPSB0aGlzLnRvcExlZnQueCArIHRoaXMud2lkdGggLSBUSElDS05FU1NcbiAgICAgIGNvbnN0IGxlZnRWZXJ0aWNhbEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeExlZnQsIHksIEltYWdlS2V5cy5CT1JERVJfVkVSVElDQUwpLnNldE9yaWdpbigwLCAwKVxuICAgICAgY29uc3QgcmlnaHRWZXJ0aWNhbEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeFJpZ2h0LCB5LCBJbWFnZUtleXMuQk9SREVSX1ZFUlRJQ0FMKS5zZXRPcmlnaW4oMCwgMClcbiAgICAgIGlmIChpID09PSB3aG9sZUNvcGllcykge1xuICAgICAgICBsZWZ0VmVydGljYWxJbWFnZS5zZXRDcm9wKDAsIDAsIDUsIGV4Y2Vzc0hlaWdodClcbiAgICAgICAgcmlnaHRWZXJ0aWNhbEltYWdlLnNldENyb3AoMCwgMCwgNSwgZXhjZXNzSGVpZ2h0KVxuICAgICAgfVxuICAgICAgdGhpcy5pbWFnZXMucHVzaChsZWZ0VmVydGljYWxJbWFnZSwgcmlnaHRWZXJ0aWNhbEltYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29ybmVycygpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMudG9wTGVmdFxuICAgIGNvbnN0IHgyID0geCArIHRoaXMud2lkdGggLSBDT1JORVJfV0lEVEhcbiAgICBjb25zdCB5MiA9IHkgKyB0aGlzLmhlaWdodCAtIENPUk5FUl9IRUlHSFRcbiAgICBjb25zdCB0b3BMZWZ0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5LCBJbWFnZUtleXMuQk9SREVSX1RPUF9MRUZUKS5zZXRPcmlnaW4oMCwgMClcbiAgICBjb25zdCB0b3BSaWdodEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeDIsIHksIEltYWdlS2V5cy5CT1JERVJfVE9QX1JJR0hUKS5zZXRPcmlnaW4oMCwgMClcbiAgICBjb25zdCBib3R0b21MZWZ0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5MiwgSW1hZ2VLZXlzLkJPUkRFUl9CT1RUT01fTEVGVCkuc2V0T3JpZ2luKDAsIDApXG4gICAgY29uc3QgYm90dG9tUmlnaHRJbWFnZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKHgyLCB5MiwgSW1hZ2VLZXlzLkJPUkRFUl9CT1RUT01fUklHSFQpLnNldE9yaWdpbigwLCAwKVxuICAgIHRoaXMuaW1hZ2VzLnB1c2godG9wTGVmdEltYWdlLCB0b3BSaWdodEltYWdlLCBib3R0b21MZWZ0SW1hZ2UsIGJvdHRvbVJpZ2h0SW1hZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSEVBTFRIX0JPUkRFUl9DT0xPVVIsIEhFQUxUSF9FTVBUWV9DT0xPVVIsIEhFQUxUSF9GVUxMX0NPTE9VUiwgUExBWUVSX1RJTlRTIH0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IGFkZFBvaW50cywgZGlzdGFuY2VCZXR3ZWVuUG9pbnRzLCBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgcGxheVR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbC9waGFzZXIvdHdlZW4tdXRpbHMnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQW5pbWF0aW9uU3BlZWQgfSBmcm9tICcuL2Rpc3BsYXktb2JqZWN0cydcbmltcG9ydCB7IHJhbmRvbUludEluY2x1c2l2ZSB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5cbmNvbnN0IEhFQUxUSF9CQVJfV0lEVEggPSA1MFxuY29uc3QgSEVBTFRIX0JBUl9IRUlHSFQgPSAxMlxuY29uc3QgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTID0gMlxuY29uc3QgSU1BR0VfT0ZGU0VUID0geyB4OiAwLCB5OiA0IH1cbmNvbnN0IEhFQUxUSF9CQVJfT0ZGU0VUID0geyB4OiAtMjUsIHk6IC00MCB9XG5cbmV4cG9ydCBjbGFzcyBVbml0RGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHVuaXQ6IFVuaXRcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGhlYWx0aEJhckdyYXBoaWNzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3NcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB1bml0OiBVbml0KSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICAgIHRoaXMuaW1hZ2UgPSBzY2VuZS5hZGQuc3ByaXRlKDAsIDAsICdsbGFtYS0yJykuc2V0U2NhbGUoMC44KS5zZXRUaW50KHRoaXMuZ2V0UGxheWVyVGludCh0aGlzLnVuaXQucGxheWVySWQpKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MgPSBzY2VuZS5hZGQuZ3JhcGhpY3MoKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXJUaW50ID0gKHBsYXllcklkOiBQbGF5ZXJJZCkgPT5cbiAgICBQTEFZRVJfVElOVFNbKFBMQVlFUl9USU5UUy5sZW5ndGggKyBwbGF5ZXJJZCAtIDEpICUgUExBWUVSX1RJTlRTLmxlbmd0aF1cblxuICBwcml2YXRlIGdldEhlYWx0aEJhclBvc2l0aW9uID0gKHBvaW50OiBQb2ludCk6IFBvaW50ID0+IGFkZFBvaW50cyhwb2ludCwgSEVBTFRIX0JBUl9PRkZTRVQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh1bml0OiBVbml0KTogdm9pZCA9PiB7XG4gICAgYXNzZXJ0KHVuaXQuaWQgPT09IHRoaXMudW5pdC5pZClcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgY29uc3QgdW5pdFBvaW50ID0gaGV4Q2VudGVyKHRoaXMudW5pdC5sb2NhdGlvbilcbiAgICB0aGlzLmltYWdlLnNldFBvc2l0aW9uKHVuaXRQb2ludC54ICsgSU1BR0VfT0ZGU0VULngsIHVuaXRQb2ludC55ICsgSU1BR0VfT0ZGU0VULnkpXG4gICAgdGhpcy5zeW5jSGVhbHRoQmFyKHVuaXRQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgc3luY0hlYWx0aEJhciA9ICh1bml0UG9pbnQ6IFBvaW50KSA9PiB7XG4gICAgY29uc3QgaGVhbHRoQmFyUG9zaXRpb24gPSB0aGlzLmdldEhlYWx0aEJhclBvc2l0aW9uKHVuaXRQb2ludClcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLnNldFBvc2l0aW9uKGhlYWx0aEJhclBvc2l0aW9uLngsIGhlYWx0aEJhclBvc2l0aW9uLnkpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5jbGVhcigpXG5cbiAgICAvLyBEcmF3IGJvcmRlclxuICAgIGNvbnN0IGlubmVyV2lkdGggPSBIRUFMVEhfQkFSX1dJRFRIIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gSEVBTFRIX0JBUl9IRUlHSFQgLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0JPUkRFUl9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdCgwLCAwLCBIRUFMVEhfQkFSX1dJRFRILCBIRUFMVEhfQkFSX0hFSUdIVClcblxuICAgIC8vIERyYXcgZW1wdHkgYmFja2dyb3VuZFxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9FTVBUWV9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpXG5cbiAgICAvLyBGaWxsIGluIGJhclxuICAgIGNvbnN0IHsgY3VycmVudCwgbWF4IH0gPSB0aGlzLnVuaXQuaGl0UG9pbnRzXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0ZVTExfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoXG4gICAgICBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsXG4gICAgICBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsXG4gICAgICAoaW5uZXJXaWR0aCAqIGN1cnJlbnQpIC8gbWF4LFxuICAgICAgaW5uZXJIZWlnaHQsXG4gICAgKVxuICB9XG5cbiAgcHVibGljIHJ1bk1vdmVBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4LCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuc2NhbGVTcGVlZCg1MDAsIHNwZWVkKVxuICAgIGNvbnN0IGJlZm9yZUNvb3JkcyA9IGhleENlbnRlcihmcm9tKVxuICAgIGNvbnN0IGFmdGVyQ29vcmRzID0gaGV4Q2VudGVyKHRvKVxuICAgIHRoaXMuaW1hZ2UuYW5pbXMucGxheSgnbGxhbWEtd2FsaycpXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuaW1hZ2UuYW5pbXMuY3VycmVudEFuaW0uZnJhbWVzWzFdXG4gICAgdGhpcy5pbWFnZS5hbmltcy5zdG9wT25GcmFtZShmcmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgc2NhbGVTcGVlZCA9IChkdXJhdGlvbjogbnVtYmVyLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpID0+IChzcGVlZCA9PT0gJ25vcm1hbCcgPyBkdXJhdGlvbiA6IGR1cmF0aW9uIC8gNClcblxuICBwdWJsaWMgcnVuRGVhdGhBbmltYXRpb24gPSBhc3luYyAoc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnNjYWxlU3BlZWQoMTAwMCwgc3BlZWQpXG4gICAgY29uc3QgdHdlZW4gPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogW3RoaXMuaW1hZ2UsIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3NdLFxuICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGF3YWl0IHBsYXlUd2Vlbih0d2VlbilcbiAgfVxuXG4gIHB1YmxpYyBydW5TcGl0QW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCwgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZnJvbVBvaW50ID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgdG9Qb2ludCA9IGhleENlbnRlcih0bylcbiAgICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlQmV0d2VlblBvaW50cyhmcm9tUG9pbnQsIHRvUG9pbnQpXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShmcm9tUG9pbnQueCwgZnJvbVBvaW50LnksICdzcGl0Jykuc2V0U2NhbGUoMC44KVxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zY2FsZVNwZWVkKGRpc3RhbmNlICogNCwgc3BlZWQpXG4gICAgY29uc3QgdHdlZW4gPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogaW1hZ2UsXG4gICAgICB4OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC54LFxuICAgICAgICB0bzogdG9Qb2ludC54LFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgZnJvbTogZnJvbVBvaW50LnksXG4gICAgICAgIHRvOiB0b1BvaW50LnksXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ1F1YWQnLFxuICAgIH0pXG4gICAgYXdhaXQgcGxheVR3ZWVuKHR3ZWVuKVxuICAgIGltYWdlLmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkRhbWFnZUFuaW1hdGlvbiA9IGFzeW5jIChsb2NhdGlvbjogSGV4LCBkYW1hZ2U6IG51bWJlciwgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgbG9jYXRpb25Qb2ludCA9IGhleENlbnRlcihsb2NhdGlvbilcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KGxvY2F0aW9uUG9pbnQueCwgbG9jYXRpb25Qb2ludC55LCBkYW1hZ2UudG9TdHJpbmcoKSwge1xuICAgICAgICBjb2xvcjogJyNmZjg4ODgnLFxuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNilcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zY2FsZVNwZWVkKDIwMDAsIHNwZWVkKVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgeToge1xuICAgICAgICBmcm9tOiBsb2NhdGlvblBvaW50LnkgLSA1MCxcbiAgICAgICAgdG86IGxvY2F0aW9uUG9pbnQueSAtIDc1LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0xpbmVhcicsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYy5pbicsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICB0ZXh0LmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkVhdEFuaW1hdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAocmFuZG9tSW50SW5jbHVzaXZlKDEsIDMpID09PSAxKSB7XG4gICAgICB0aGlzLmltYWdlLnRvZ2dsZUZsaXBYKClcbiAgICB9XG4gICAgdGhpcy5pbWFnZS5hbmltcy5wbGF5KCdsbGFtYS1lYXQnKVxuICB9XG5cbiAgcHVibGljIHJ1bkF0dGFja0FuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGJlZm9yZUNvb3JkcyA9IGhleENlbnRlcihmcm9tKVxuICAgIGNvbnN0IGFmdGVyQ29vcmRzID0gaGV4Q2VudGVyKHRvKVxuICAgIHRoaXMuaW1hZ2Uuc2V0RmxpcFgoYWZ0ZXJDb29yZHMueCA8IGJlZm9yZUNvb3Jkcy54KVxuICAgIHRoaXMuaW1hZ2UuYW5pbXMucGxheSgnbGxhbWEtd2FsaycpXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnNjYWxlU3BlZWQoNDAwLCBzcGVlZClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5oZWFsdGhCYXJHcmFwaGljcyxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSEVBTFRIX0JBUl9PRkZTRVQpLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwbGF5VHdlZW4odHdlZW4xKSwgcGxheVR3ZWVuKHR3ZWVuMildKVxuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5pbWFnZS5hbmltcy5jdXJyZW50QW5pbS5mcmFtZXNbMV1cbiAgICB0aGlzLmltYWdlLmFuaW1zLnN0b3BPbkZyYW1lKGZyYW1lKVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zY2VuZS50d2VlbnMua2lsbFR3ZWVuc09mKFt0aGlzLmhlYWx0aEJhckdyYXBoaWNzLCB0aGlzLmltYWdlXSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmRlc3Ryb3koKVxuICAgIHRoaXMuaW1hZ2UuZGVzdHJveSgpXG4gIH1cbn1cblxudHlwZSBUd2VlblhZID0geyB4OiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9OyB5OiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9IH1cblxuY29uc3QgY2FsY3VsYXRlVHdlZW5YWSA9IChmcm9tOiBQb2ludCwgdG86IFBvaW50LCBvZmZzZXQ6IFBvaW50KTogVHdlZW5YWSA9PiAoe1xuICB4OiB7XG4gICAgZnJvbTogZnJvbS54ICsgb2Zmc2V0LngsXG4gICAgdG86IHRvLnggKyBvZmZzZXQueCxcbiAgfSxcbiAgeToge1xuICAgIGZyb206IGZyb20ueSArIG9mZnNldC55LFxuICAgIHRvOiB0by55ICsgb2Zmc2V0LnksXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vLi4vdWkvbWVudS1idXR0b24nXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiIH0gZnJvbSAnLi4vLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExPQkJZX1NDRU5FX0tFWSwgTG9iYnlTY2VuZURhdGEgfSBmcm9tICcuLi9sb2JieS9sb2JieS1zY2VuZSdcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IHNldFVybEluZm8gfSBmcm9tICcuLi9ib290L3VybC1pbmZvJ1xuXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX1NDRU5FX0tFWSA9ICdNYWluTWVudSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IE1BSU5fTUVOVV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdIb3N0IEdhbWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5oYW5kbGVIb3N0R2FtZSgpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSG9zdEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkOiBHYW1lSWQgPSB1dWlkKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IEhPU1RfUExBWUVSX0lEXG4gICAgY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgSU5JVElBTF9XT1JMRF9TVEFURSwgMClcbiAgICBzZXJ2ZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCB7IHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IElOSVRJQUxfV09STERfU1RBVEUgfSlcbiAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkIH0pXG4gICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG5cbmNvbnN0IHNxdWFyZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIG5cblxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogbnVtYmVyID0+XG4gIE1hdGguc3FydChzcXVhcmUocG9pbnQxLnggLSBwb2ludDIueCkgKyBzcXVhcmUocG9pbnQxLnkgLSBwb2ludDIueSkpXG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSwgQXR0YWNrV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgQ29tYmF0V29ybGRFdmVudCwgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgcmFuZG9tSW50SW5jbHVzaXZlIH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2FuQXR0YWNrT2NjdXIgPSAoYXR0YWNrVHlwZTogQXR0YWNrVHlwZSwgbWFwOiBXb3JsZE1hcCwgZnJvbTogSGV4LCB0bzogSGV4KTogYm9vbGVhbiA9PiB7XG4gIHN3aXRjaCAoYXR0YWNrVHlwZSkge1xuICAgIGNhc2UgJ21lbGVlJzpcbiAgICAgIHJldHVybiBmcm9tLmlzQWRqYWNlbnRUbyh0bylcbiAgICBjYXNlICdzcGl0JzpcbiAgICAgIGNvbnN0IGJsb2NrZWRCeU1vdW50YWlucyA9IFIuYWxsKG1hcC5pc01vdW50YWluLCBSLmludGVyc2VjdGlvbihmcm9tLm5laWdoYm91cnMoKSwgdG8ubmVpZ2hib3VycygpKSlcbiAgICAgIHJldHVybiAhYmxvY2tlZEJ5TW91bnRhaW5zICYmIGZyb20uZGlzdGFuY2VUbyh0bykgPD0gMlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQXR0YWNrID0gKGFjdGlvbjogQXR0YWNrV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSB0aGlzLnZhbGlkYXRlQXR0YWNrKGFjdGlvbilcbiAgICBjb25zdCB7IGF0dGFja1R5cGUgfSA9IGFjdGlvblxuICAgIGNvbnN0IHJhd0F0dGFja2VyRGFtYWdlID0gYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/IHJhbmRvbUludEluY2x1c2l2ZSg4LCAxMikgOiAwXG4gICAgY29uc3QgcmF3RGVmZW5kZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDE3LCAyMykgOiByYW5kb21JbnRJbmNsdXNpdmUoNCwgNilcbiAgICBjb25zdCBhdHRhY2tlckRhbWFnZSA9IE1hdGgubWluKGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50LCByYXdBdHRhY2tlckRhbWFnZSlcbiAgICBjb25zdCBkZWZlbmRlckRhbWFnZSA9IE1hdGgubWluKGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50LCByYXdEZWZlbmRlckRhbWFnZSlcbiAgICBjb25zdCBjb21iYXRXb3JsZEV2ZW50ID0gdGhpcy5tYWtlQ29tYmF0V29ybGRFdmVudChhdHRhY2tUeXBlLCBhdHRhY2tlciwgYXR0YWNrZXJEYW1hZ2UsIGRlZmVuZGVyLCBkZWZlbmRlckRhbWFnZSlcblxuICAgIGxldCBuZXdXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoY29tYmF0V29ybGRFdmVudClcbiAgICBjb25zdCBldmVudHM6IFdvcmxkRXZlbnRbXSA9IFtjb21iYXRXb3JsZEV2ZW50XVxuICAgIGxldCBuZXh0V29ybGRFdmVudElkID0gdGhpcy5uZXh0V29ybGRFdmVudElkICsgMVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoZGVmZW5kZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGRlZmVuZGVyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBpZiAobmV3V29ybGRTdGF0ZS5pc1BsYXllckRlZmVhdGVkKGF0dGFja2VyLnBsYXllcklkKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsYXllckRlZmVhdGVkRXZlbnQobmV4dFdvcmxkRXZlbnRJZCsrLCBhdHRhY2tlci5wbGF5ZXJJZClcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KVxuICAgICAgbmV3V29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgY29uc3QgdW5kZWZlYXRlZFBsYXllcnMgPSBuZXdXb3JsZFN0YXRlLnBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIuZGVmZWF0ZWQpXG4gICAgaWYgKFIuaXNFbXB0eSh1bmRlZmVhdGVkUGxheWVycykpIHtcbiAgICAgIGV2ZW50cy5wdXNoKHsgaWQ6IG5leHRXb3JsZEV2ZW50SWQrKywgdHlwZTogJ2dhbWVPdmVyJyB9KVxuICAgIH0gZWxzZSBpZiAodW5kZWZlYXRlZFBsYXllcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCB2aWN0b3IgPSB1bmRlZmVhdGVkUGxheWVyc1swXS5pZFxuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInLCB2aWN0b3IgfSlcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5ZXJEZWZlYXRlZEV2ZW50ID0gKGlkOiBXb3JsZEV2ZW50SWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCA9PiAoe1xuICAgIGlkLFxuICAgIHR5cGU6ICdwbGF5ZXJEZWZlYXRlZCcsXG4gICAgcGxheWVySWQ6IHBsYXllcklkLFxuICB9KVxuXG4gIHByaXZhdGUgdmFsaWRhdGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IHsgYXR0YWNrZXI6IFVuaXQ7IGRlZmVuZGVyOiBVbml0IH0gPT4ge1xuICAgIGNvbnN0IGF0dGFja2VySWQgPSBhY3Rpb24uYXR0YWNrZXIudW5pdElkXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VySWQpXG4gICAgaWYgKCFhdHRhY2tlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YFxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPT0gdGhpcy5wbGF5ZXJJZCkgdGhyb3cgYENhbm5vdCBjb250cm9sIGFub3RoZXIgcGxheWVyJ3MgdW5pdDogJHthdHRhY2tlci5pZH1gXG4gICAgaWYgKGF0dGFja2VyLmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSkgdGhyb3cgYE5vdCBlbm91Z2ggYWN0aW9uIHBvaW50cyB0byBhdHRhY2tgXG4gICAgaWYgKCFhdHRhY2tlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmF0dGFja2VyLmxvY2F0aW9uKSkgdGhyb3cgYEF0dGFja2VyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGNvbnN0IGRlZmVuZGVySWQgPSBhY3Rpb24uZGVmZW5kZXIudW5pdElkXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVySWQpXG4gICAgaWYgKCFkZWZlbmRlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVySWR9YFxuICAgIGlmIChkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkgdGhyb3cgYENhbm5vdCBhdHRhY2sgb3duIHVuaXRgXG4gICAgaWYgKCFkZWZlbmRlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmRlZmVuZGVyLmxvY2F0aW9uKSkgdGhyb3cgYERlZmVuZGVyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGlmICghY2FuQXR0YWNrT2NjdXIoYWN0aW9uLmF0dGFja1R5cGUsIHRoaXMud29ybGRTdGF0ZS5tYXAsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IGF0dGFjayBvZiB0eXBlICR7YWN0aW9uLmF0dGFja1R5cGV9IGJldHdlZW4gaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn0gdG9vIGZhciBhcGFydGBcbiAgICByZXR1cm4geyBhdHRhY2tlciwgZGVmZW5kZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlQ29tYmF0V29ybGRFdmVudCA9IChcbiAgICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiBVbml0LFxuICAgIGF0dGFja2VyRGFtYWdlOiBudW1iZXIsXG4gICAgZGVmZW5kZXI6IFVuaXQsXG4gICAgZGVmZW5kZXJEYW1hZ2U6IG51bWJlcixcbiAgKTogQ29tYmF0V29ybGRFdmVudCA9PiAoe1xuICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgYXR0YWNrVHlwZSxcbiAgICBhdHRhY2tlcjoge1xuICAgICAgcGxheWVySWQ6IGF0dGFja2VyLnBsYXllcklkLFxuICAgICAgdW5pdElkOiBhdHRhY2tlci5pZCxcbiAgICAgIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbixcbiAgICAgIGRhbWFnZTogYXR0YWNrZXJEYW1hZ2UsXG4gICAgICBraWxsZWQ6IGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50ID09PSBhdHRhY2tlckRhbWFnZSxcbiAgICB9LFxuICAgIGRlZmVuZGVyOiB7XG4gICAgICBwbGF5ZXJJZDogZGVmZW5kZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGRlZmVuZGVyLmlkLFxuICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBkZWZlbmRlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGRlZmVuZGVyRGFtYWdlLFxuICAgIH0sXG4gICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gIH0pXG59XG4iLCJpbXBvcnQge1xuICBKb2luUmVxdWVzdCxcbiAgSm9pblJlc3BvbnNlLFxuICBSZWpvaW5SZXF1ZXN0LFxuICBSZWpvaW5SZXNwb25zZSxcbiAgV29ybGRBY3Rpb25SZXF1ZXN0LFxuICBXb3JsZEV2ZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBQZWVyQ2xpZW50IH0gZnJvbSAnLi9wZWVyLWNsaWVudCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgd2l0aFRpbWVvdXQgfSBmcm9tICcuLi91dGlsL2FzeW5jLXV0aWwnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcblxuY29uc3QgVElNRU9VVCA9IDUwMDBcblxuZXhwb3J0IGNsYXNzIENsaWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGVlckNsaWVudDogUGVlckNsaWVudFxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuICBwcml2YXRlIF93b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIF9wbGF5ZXJJZDogUGxheWVySWQgPSAtMVxuXG4gIHB1YmxpYyBnZXQgd29ybGRTdGF0ZSgpOiBXb3JsZFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fd29ybGRTdGF0ZVxuICB9XG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcklkXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBlZXJDbGllbnQ6IFBlZXJDbGllbnQpIHtcbiAgICB0aGlzLnBlZXJDbGllbnQgPSBwZWVyQ2xpZW50XG4gICAgcGVlckNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnRNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50TWVzc2FnZSA9IChtZXNzYWdlOiBXb3JsZEV2ZW50TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmV2ZW50KVxuICAgIGNvbnN0IHByZXZpb3VzV29ybGRTdGF0ZSA9IHRoaXMuX3dvcmxkU3RhdGVcbiAgICBjb25zdCBuZXdXb3JsZFN0YXRlID0gcHJldmlvdXNXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgdGhpcy5fd29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGVcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxDbGllbnQ+ID0+IHtcbiAgICBjb25zdCBwZWVyQ2xpZW50ID0gYXdhaXQgd2l0aFRpbWVvdXQoVElNRU9VVCkoUGVlckNsaWVudC5jb25uZWN0KGdhbWVJZCkpXG4gICAgcmV0dXJuIG5ldyBDbGllbnQocGVlckNsaWVudClcbiAgfVxuXG4gIHB1YmxpYyByZWpvaW4gPSBhc3luYyAocGxheWVySWQ6IFBsYXllcklkKTogUHJvbWlzZTxPcHRpb248V29ybGRTdGF0ZT4+ID0+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBSZWpvaW5SZXF1ZXN0ID0geyB0eXBlOiAncmVqb2luJywgcGxheWVySWQgfVxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZWpvaW5SZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VuZFJlcXVlc3QocmVxdWVzdClcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Jlam9pbmVkJzpcbiAgICAgICAgY29uc3Qgd29ybGRTdGF0ZSA9IFdvcmxkU3RhdGUuZnJvbUpzb24ocmVzcG9uc2Uud29ybGRTdGF0ZSlcbiAgICAgICAgdGhpcy5fcGxheWVySWQgPSBwbGF5ZXJJZFxuICAgICAgICB0aGlzLl93b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgICAgICByZXR1cm4gd29ybGRTdGF0ZVxuICAgICAgY2FzZSAndW5hYmxlVG9SZWpvaW4nOlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IocmVzcG9uc2UpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGpvaW4gPSBhc3luYyAoKTogUHJvbWlzZTxPcHRpb248eyBwbGF5ZXJJZDogUGxheWVySWQ7IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgfT4+ID0+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBKb2luUmVxdWVzdCA9IHsgdHlwZTogJ2pvaW4nIH1cbiAgICBjb25zdCByZXNwb25zZTogSm9pblJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kUmVxdWVzdChyZXF1ZXN0KVxuICAgIHN3aXRjaCAocmVzcG9uc2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbmVkJzpcbiAgICAgICAgY29uc3QgcGxheWVySWQgPSByZXNwb25zZS5wbGF5ZXJJZFxuICAgICAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihyZXNwb25zZS53b3JsZFN0YXRlKVxuICAgICAgICB0aGlzLl9wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgICAgIHRoaXMuX3dvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgICAgIHJldHVybiB7IHBsYXllcklkLCB3b3JsZFN0YXRlIH1cbiAgICAgIGNhc2UgJ3VuYWJsZVRvSm9pbic6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihyZXNwb25zZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbmRSZXF1ZXN0ID0gYXN5bmMgKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiA9PiB3aXRoVGltZW91dChUSU1FT1VUKSh0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QocmVxdWVzdCkpXG5cbiAgcHVibGljIHNlbmRBY3Rpb24gPSBhc3luYyAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgcmVxdWVzdDogV29ybGRBY3Rpb25SZXF1ZXN0ID0ge1xuICAgICAgdHlwZTogJ3dvcmxkQWN0aW9uJyxcbiAgICAgIGFjdGlvbjogc2VyaWFsaXNlVG9Kc29uKGFjdGlvbiksXG4gICAgICBwbGF5ZXJJZDogcGxheWVySWQsXG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2VuZFJlcXVlc3QocmVxdWVzdClcbiAgfVxufVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQge1xuICBCcm9hZGNhc3RNZXNzYWdlLFxuICBFcnJvclJlc3BvbnNlTWVzc2FnZSxcbiAgUGVlcklkLFxuICBSZXF1ZXN0SWQsXG4gIFJlcXVlc3RNZXNzYWdlLFxuICBSZXNwb25zZU1lc3NhZ2UsXG4gIFNlcnZlclRvQ2xpZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9wZWVyLXNlcnZlcidcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IG5ld1BlZXIgfSBmcm9tICcuL3BlZXItdXRpbHMnXG5pbXBvcnQgeyBSZWplY3QsIFJlc29sdmUgfSBmcm9tICcuLi91dGlsL2FzeW5jLXV0aWwnXG5cbmludGVyZmFjZSBSZXNvbHZlQW5kUmVqZWN0PFQ+IHtcbiAgcmVzb2x2ZTogUmVzb2x2ZTxUPlxuICByZWplY3Q6IFJlamVjdFxufVxuXG5leHBvcnQgdHlwZSBQZWVyTGlzdGVuZXIgPSAobWVzc2FnZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBQZWVyQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0c3RhbmRpbmdSZXF1ZXN0czogTWFwPFJlcXVlc3RJZCwgUmVzb2x2ZUFuZFJlamVjdDxhbnk+PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogUGVlckxpc3RlbmVyW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25EYXRhID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IHJlY2VpdmVkIG1lc3NhZ2UnKVxuICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShtZXNzYWdlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZXJyb3JSZXNwb25zZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JSZXNwb25zZShtZXNzYWdlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYnJvYWRjYXN0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVCcm9hZGNhc3QobWVzc2FnZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY29ubmVjdCA9IChwZWVySWQ6IFBlZXJJZCk6IFByb21pc2U8UGVlckNsaWVudD4gPT5cbiAgICBuZXcgUHJvbWlzZTxQZWVyQ2xpZW50PigocmVzb2x2ZTogUmVzb2x2ZTxhbnk+LCByZWplY3Q6IFJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcGVlciA9IG5ld1BlZXIoKVxuICAgICAgbGV0IHJlc29sdmVkID0gZmFsc2VcbiAgICAgIHBlZXIub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcGVlci5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogb3BlbicpXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBwZWVyLmNvbm5lY3QocGVlcklkLCB7IHJlbGlhYmxlOiB0cnVlIH0pXG4gICAgICAgIGNvbm5lY3Rpb24ub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogY29ubmVjdGlvbiBvcGVuJylcbiAgICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgUGVlckNsaWVudChjb25uZWN0aW9uKVxuICAgICAgICAgIHJlc29sdmUoY2xpZW50KVxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuXG4gIHB1YmxpYyBzZW5kUmVxdWVzdCA9IChyZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4gPT5cbiAgICBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlOiBSZXNvbHZlPGFueT4sIHJlamVjdDogUmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0TWVzc2FnZTogUmVxdWVzdE1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6ICdyZXF1ZXN0JyxcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IHNlbmRpbmcgcmVxdWVzdCcpXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0TWVzc2FnZSlcbiAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKHJlcXVlc3RNZXNzYWdlKVxuICAgICAgdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLnNldChyZXF1ZXN0TWVzc2FnZS5pZCwgeyByZXNvbHZlLCByZWplY3QgfSlcbiAgICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UgPSAobWVzc2FnZTogUmVzcG9uc2VNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gbWVzc2FnZS5yZXNwb25zZVRvXG4gICAgY29uc3QgcmVzb2x2ZUFuZFJlamVjdDogT3B0aW9uPFJlc29sdmVBbmRSZWplY3Q8YW55Pj4gPSB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZ2V0KHJlcXVlc3RJZClcbiAgICBpZiAocmVzb2x2ZUFuZFJlamVjdCkge1xuICAgICAgcmVzb2x2ZUFuZFJlamVjdC5yZXNvbHZlKG1lc3NhZ2UucmVzcG9uc2UpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYENMSUVOVDogcmVzcG9uc2UgcmVjZWl2ZWQgZm9yIHVua25vd24gcmVxdWVzdCAke3JlcXVlc3RJZH1gKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JSZXNwb25zZSA9IChtZXNzYWdlOiBFcnJvclJlc3BvbnNlTWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IG1lc3NhZ2UucmVzcG9uc2VUb1xuICAgIGNvbnN0IHJlc29sdmVBbmRSZWplY3Q6IE9wdGlvbjxSZXNvbHZlQW5kUmVqZWN0PGFueT4+ID0gdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLmdldChyZXF1ZXN0SWQpXG4gICAgaWYgKHJlc29sdmVBbmRSZWplY3QpIHtcbiAgICAgIHJlc29sdmVBbmRSZWplY3QucmVqZWN0KCdFcnJvciByZWNlaXZlZCBmcm9tIHNlcnZlcicpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYENMSUVOVDogZXJyb3IgcmVzcG9uc2UgcmVjZWl2ZWQgZm9yIHVua25vd24gcmVxdWVzdCAke3JlcXVlc3RJZH1gKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAobWVzc2FnZTogYW55KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJyb2FkY2FzdCA9IChtZXNzYWdlOiBCcm9hZGNhc3RNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMobWVzc2FnZS5ib2R5KVxuICB9XG59XG4iLCJpbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5pbXBvcnQgeyBuZXdQZWVyIH0gZnJvbSAnLi9wZWVyLXV0aWxzJ1xuXG5leHBvcnQgdHlwZSBQZWVySWQgPSBzdHJpbmdcblxuZXhwb3J0IHR5cGUgUmVxdWVzdElkID0gc3RyaW5nXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE1lc3NhZ2Uge1xuICB0eXBlOiAncmVxdWVzdCdcbiAgaWQ6IFJlcXVlc3RJZFxuICByZXF1ZXN0OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlID0gUmVxdWVzdE1lc3NhZ2VcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZU1lc3NhZ2Uge1xuICB0eXBlOiAncmVzcG9uc2UnXG4gIHJlc3BvbnNlVG86IFJlcXVlc3RJZFxuICByZXNwb25zZTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JSZXNwb25zZU1lc3NhZ2Uge1xuICB0eXBlOiAnZXJyb3JSZXNwb25zZSdcbiAgcmVzcG9uc2VUbzogUmVxdWVzdElkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvYWRjYXN0TWVzc2FnZSB7XG4gIHR5cGU6ICdicm9hZGNhc3QnXG4gIGJvZHk6IGFueVxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSBSZXNwb25zZU1lc3NhZ2UgfCBFcnJvclJlc3BvbnNlTWVzc2FnZSB8IEJyb2FkY2FzdE1lc3NhZ2VcblxuZXhwb3J0IGNsYXNzIFBlZXJTZXJ2ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHBlZXI6IFBlZXJcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uczogUGVlci5EYXRhQ29ubmVjdGlvbltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVNZXNzYWdlOiAobWVzc2FnZTogYW55KSA9PiBhbnlcblxuICBjb25zdHJ1Y3RvcihpZDogUGVlcklkLCBoYW5kbGVNZXNzYWdlOiAobWVzc2FnZTogYW55KSA9PiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gICAgdGhpcy5wZWVyID0gbmV3UGVlcihpZClcbiAgICB0aGlzLnBlZXIub24oJ2Vycm9yJywgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB0aGlzLnBlZXIub24oJ2Nvbm5lY3Rpb24nLCB0aGlzLmhhbmRsZU5ld0Nvbm5lY3Rpb24pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5ld0Nvbm5lY3Rpb24gPSAoY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRVJWRVI6IHJlY2VpdmVkIG5ldyBjb25uZWN0aW9uIGZyb20gJyArIGNvbm5lY3Rpb24ucGVlcilcbiAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbilcbiAgICBjb25uZWN0aW9uLm9uKCdkYXRhJywgdGhpcy5oYW5kbGVDb25uZWN0aW9uRGF0YShjb25uZWN0aW9uKSlcbiAgfVxuXG4gIHB1YmxpYyBicm9hZGNhc3QgPSAobWVzc2FnZTogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgYnJvYWRjYXN0TWVzc2FnZTogQnJvYWRjYXN0TWVzc2FnZSA9IHsgdHlwZTogJ2Jyb2FkY2FzdCcsIGJvZHk6IG1lc3NhZ2UgfVxuICAgIGZvciAoY29uc3QgY29ubmVjdGlvbiBvZiB0aGlzLmNvbm5lY3Rpb25zKSB7XG4gICAgICBjb25uZWN0aW9uLnNlbmQoYnJvYWRjYXN0TWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25EYXRhID0gKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pID0+IChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VSVkVSOiByZWNlaXZlZCBuZXcgbWVzc2FnZSBmcm9tICcgKyBjb25uZWN0aW9uLnBlZXIpXG4gICAgLy8gY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBsZXQgcmVzcG9uc2VcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZS5yZXF1ZXN0KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2VNZXNzYWdlOiBFcnJvclJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgICAgdHlwZTogJ2Vycm9yUmVzcG9uc2UnLFxuICAgICAgICByZXNwb25zZVRvOiBtZXNzYWdlLmlkLFxuICAgICAgfVxuICAgICAgY29ubmVjdGlvbi5zZW5kKGVycm9yUmVzcG9uc2VNZXNzYWdlKVxuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgICBjb25zdCByZXNwb25zZU1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIHR5cGU6ICdyZXNwb25zZScsXG4gICAgICByZXNwb25zZVRvOiBtZXNzYWdlLmlkLFxuICAgICAgcmVzcG9uc2UsXG4gICAgfVxuICAgIGNvbm5lY3Rpb24uc2VuZChyZXNwb25zZU1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcblxuZXhwb3J0IGNvbnN0IG5ld1BlZXIgPSAoaWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBQZWVyLlBlZXJKU09wdGlvbik6IFBlZXIgPT4ge1xuICBjb25zdCBfUGVlciA9ICh3aW5kb3cgYXMgYW55KS5QZWVyIGFzIHR5cGVvZiBQZWVyXG4gIHJldHVybiBuZXcgX1BlZXIoaWQsIG9wdGlvbnMpXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRFdmVudExpc3RlbmVyLCBXb3JsZFN0YXRlT3duZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuaW1wb3J0IHsgUGxheWVyQWRkZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBDbGllbnRSZXF1ZXN0LCBKb2luUmVzcG9uc2UsIFJlam9pblJlcXVlc3QsIFJlam9pblJlc3BvbnNlLCBXb3JsZEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZXMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uLCBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQWRkUGxheWVyV29ybGRBY3Rpb24sIFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnREYiB9IGZyb20gJy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQZWVyU2VydmVyIH0gZnJvbSAnLi9wZWVyLXNlcnZlcidcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyU2VydmVyOiBQZWVyU2VydmVyXG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIEhPU1RfUExBWUVSX0lEXG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmxkU3RhdGUoKTogV29ybGRTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMud29ybGRTdGF0ZU93bmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzdG9yZUdhbWUgPSBhc3luYyAod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxTZXJ2ZXI+ID0+IHtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCB3b3JsZEV2ZW50RGIuZ2V0RXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgY29uc3Qgc29ydGVkRXZlbnRzID0gUi5zb3J0QnkoKGV2ZW50KSA9PiBldmVudC5pZCwgZXZlbnRzKVxuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFLmFwcGx5RXZlbnRzKHNvcnRlZEV2ZW50cylcbiAgICByZXR1cm4gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgd29ybGRTdGF0ZSwgZXZlbnRzLmxlbmd0aCArIDEpXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZEV2ZW50RGIgPSB3b3JsZEV2ZW50RGJcbiAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuICAgIHRoaXMucGVlclNlcnZlciA9IG5ldyBQZWVyU2VydmVyKHRoaXMuZ2FtZUlkLCB0aGlzLmhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSlcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lciA9IG5ldyBXb3JsZFN0YXRlT3duZXIod29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZClcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5hZGRMaXN0ZW5lcihcbiAgICAgIChldmVudDogV29ybGRFdmVudCwgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgICAgIHRoaXMud29ybGRFdmVudERiLnN0b3JlKHRoaXMuZ2FtZUlkLCBldmVudClcbiAgICAgICAgY29uc3QgbWVzc2FnZTogV29ybGRFdmVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgICB0aGlzLnBlZXJTZXJ2ZXIuYnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50Sm9pbiA9ICgpOiBKb2luUmVzcG9uc2UgPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6ICd1bmFibGVUb0pvaW4nIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWRkUGxheWVyQWN0aW9uOiBBZGRQbGF5ZXJXb3JsZEFjdGlvbiA9IHsgdHlwZTogJ2FkZFBsYXllcicgfVxuICAgICAgY29uc3QgcGxheWVyQWRkZWRFdmVudCA9IDxQbGF5ZXJBZGRlZFdvcmxkRXZlbnQ+dGhpcy5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWRkUGxheWVyQWN0aW9uKVswXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2pvaW5lZCcsXG4gICAgICAgIHBsYXllcklkOiBwbGF5ZXJBZGRlZEV2ZW50LnBsYXllcklkLFxuICAgICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRSZWpvaW4gPSAobWVzc2FnZTogUmVqb2luUmVxdWVzdCk6IFJlam9pblJlc3BvbnNlID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuaXNWYWxpZFBsYXllcklkKG1lc3NhZ2UucGxheWVySWQpKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiAncmVqb2luZWQnLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLnRvSnNvbigpIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ3VuYWJsZVRvUmVqb2luJyB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRUb1NlcnZlck1lc3NhZ2UgPSAobWVzc2FnZTogQ2xpZW50UmVxdWVzdCk6IGFueSA9PiB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsaWVudEpvaW4oKVxuICAgICAgY2FzZSAncmVqb2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2xpZW50UmVqb2luKG1lc3NhZ2UpXG4gICAgICBjYXNlICd3b3JsZEFjdGlvbic6XG4gICAgICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihtZXNzYWdlLnBsYXllcklkLCBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuYWN0aW9uKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCBhY3Rpb24pXG5cbiAgcHVibGljIHNlbmRBY3Rpb24gPSBhc3luYyAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdGhpcy5oYW5kbGVBY3Rpb24ocGxheWVySWQsIGFjdGlvbilcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIEF0dGFja1dvcmxkQWN0aW9uLFxuICBDaGFuZ2VQbGF5ZXJOYW1lV29ybGRBY3Rpb24sXG4gIENoYXRXb3JsZEFjdGlvbixcbiAgRW5kVHVybldvcmxkQWN0aW9uLFxuICBJbml0aWFsaXNlV29ybGRBY3Rpb24sXG4gIE1vdmVVbml0V29ybGRBY3Rpb24sXG4gIFdvcmxkQWN0aW9uLFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHtcbiAgQ2hhdFdvcmxkRXZlbnQsXG4gIEdhbWVTdGFydGVkV29ybGRFdmVudCxcbiAgSW5pdGlhbGlzZVdvcmxkRXZlbnQsXG4gIE5ld1R1cm5Xb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZEdlbmVyYXRvciB9IGZyb20gJy4vd29ybGQtZ2VuZXJhdG9yJ1xuaW1wb3J0IHsgQXR0YWNrV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlV29ybGRFdmVudHMgPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5jYWxjdWxhdGVTcGVjaWZpY1dvcmxkRXZlbnRzKGFjdGlvbilcbiAgICByZXR1cm4gdGhpcy5iZWdpbk5ld1R1cm5JZk5lZWRlZChldmVudHMpXG4gIH1cblxuICBwcml2YXRlIGJlZ2luTmV3VHVybklmTmVlZGVkKGV2ZW50czogV29ybGRFdmVudFtdKSB7XG4gICAgY29uc3QgbGFzdEV2ZW50ID0gUi5sYXN0KGV2ZW50cylcbiAgICBpZiAobGFzdEV2ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnRzKGV2ZW50cylcbiAgICAgIGlmIChuZXdXb3JsZFN0YXRlLmNhbkFueVBsYXllckFjdCgpIHx8IG5ld1dvcmxkU3RhdGUudW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBldmVudHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRXb3JsZEV2ZW50SWQgPSBsYXN0RXZlbnQuaWQgKyAxXG4gICAgICAgIGNvbnN0IG5ld1R1cm5FdmVudDogTmV3VHVybldvcmxkRXZlbnQgPSB7IGlkOiBuZXh0V29ybGRFdmVudElkLCB0eXBlOiAnbmV3VHVybicgfVxuICAgICAgICByZXR1cm4gUi5hcHBlbmQobmV3VHVybkV2ZW50LCBldmVudHMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTcGVjaWZpY1dvcmxkRXZlbnRzID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVJbml0aWFsaXNlKGFjdGlvbilcbiAgICAgIGNhc2UgJ2FkZFBsYXllcic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFkZFBsYXllcigpXG4gICAgICBjYXNlICdjaGFuZ2VQbGF5ZXJOYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZShhY3Rpb24pXG4gICAgICBjYXNlICdzdGFydEdhbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTdGFydEdhbWUoKVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXR0YWNrKGFjdGlvbilcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZVVuaXQoYWN0aW9uKVxuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVuZFR1cm4oYWN0aW9uKVxuICAgICAgY2FzZSAnY2hhdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNoYXQoYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5pdGlhbGlzZSA9IChhY3Rpb246IEluaXRpYWxpc2VXb3JsZEFjdGlvbik6IFtJbml0aWFsaXNlV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLm5leHRXb3JsZEV2ZW50SWQgPiAwKSB7XG4gICAgICB0aHJvdyBgQ2FuIG9ubHkgaW5pdGlhbGlzZSBhcyB0aGUgZmlyc3QgZXZlbnRgXG4gICAgfVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnaW5pdGlhbGlzZScsIHN0YXRlOiBhY3Rpb24uc3RhdGUgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWRkUGxheWVyID0gKCk6IFtQbGF5ZXJBZGRlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1BsYXllcklkcyA9IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IHBsYXllcklkID0gUi5hcHBseShNYXRoLm1heCwgZXhpc3RpbmdQbGF5ZXJJZHMpICsgMVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAncGxheWVyQWRkZWQnLCBwbGF5ZXJJZCB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lID0gKGFjdGlvbjogQ2hhbmdlUGxheWVyTmFtZVdvcmxkQWN0aW9uKTogW1BsYXllckNoYW5nZWROYW1lV29ybGRFdmVudF0gPT4ge1xuICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckNoYW5nZWROYW1lJywgcGxheWVySWQ6IHRoaXMucGxheWVySWQsIG5hbWU6IGFjdGlvbi5uYW1lIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpOiBbR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgdGhyb3cgYENhbm5vdCBzdGFydCBhbiBhbHJlYWR5LXN0YXJ0ZWQgZ2FtZWBcbiAgICB9XG4gICAgaWYgKHRoaXMucGxheWVySWQgIT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICB0aHJvdyBgQ2Fubm90IHN0YXJ0IHRoZSBnYW1lIHVubGVzcyB0aGUgaG9zdGBcbiAgICB9XG4gICAgY29uc3Qgd29ybGRHZW5lcmF0b3IgPSBuZXcgV29ybGRHZW5lcmF0b3IodGhpcy53b3JsZFN0YXRlKVxuICAgIGNvbnN0IHVuaXRzID0gd29ybGRHZW5lcmF0b3IuZ2VuZXJhdGVVbml0cygpXG4gICAgY29uc3QgbW91bnRhaW5zID0gd29ybGRHZW5lcmF0b3IuZ2VuZXJhdGVNb3VudGFpbnMoKVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnZ2FtZVN0YXJ0ZWQnLCB1bml0cywgbW91bnRhaW5zIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgbmV3IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHRoaXMucGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZCkuaGFuZGxlQXR0YWNrKGFjdGlvbilcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFtVbml0TW92ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRvIH0gPSBhY3Rpb25cbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgY29uc3QgZnJvbSA9IHVuaXQubG9jYXRpb25cbiAgICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICAgIH1cbiAgICBpZiAoIXRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHtcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICB9XG4gICAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB7XG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgXG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICAgIHR5cGU6ICd1bml0TW92ZWQnLFxuICAgICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gICAgICAgIHVuaXRJZCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICB9LFxuICAgIF1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9IChhY3Rpb246IEVuZFR1cm5Xb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgaWYgKGFjdGlvbi50dXJuICE9PSB0aGlzLndvcmxkU3RhdGUudHVybikge1xuICAgICAgdGhyb3cgYENhbm5vdCBlbmQgYSB0dXJuIHRoYXQncyBub3QgdGhlIGN1cnJlbnQgdHVybmBcbiAgICB9XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKVxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB7XG4gICAgICB0aHJvdyBgUGxheWVyIGhhcyBhbHJlYWR5IGVuZGVkIHRoZWlyIHR1cm5gXG4gICAgfVxuICAgIGNvbnN0IHBsYXllckVuZGVkVHVybkFjdGlvbjogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCA9IHtcbiAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICB0eXBlOiAncGxheWVyRW5kZWRUdXJuJyxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIH1cbiAgICByZXR1cm4gW3BsYXllckVuZGVkVHVybkFjdGlvbl1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgYE5vIHBsYXllciB3aXRoIElEICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhdCA9IChhY3Rpb246IENoYXRXb3JsZEFjdGlvbik6IFtDaGF0V29ybGRFdmVudF0gPT4gW1xuICAgIHsgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ2NoYXQnLCBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCwgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UgfSxcbiAgXVxufVxuIiwiaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmNvbnN0IExMQU1BX05BTUVTID0gW1xuICAnV2FsdGVyJyxcbiAgJ0RvbGx5JyxcbiAgJ0NoZXdwYWNhJyxcbiAgJ0JhcmFjayBPLiBMbGFtYScsXG4gICdDb21vIFNlJyxcbiAgJ0Z1enp5JyxcbiAgJ0plcmVteScsXG4gICdBbGZvbnNvJyxcbiAgJ1Jvc2UnLFxuICAnTG9yZW56bycsXG4gICdSaXRhJyxcbiAgJ0FudG9uJyxcbiAgJ0Jlcm5hcmQnLFxuICAnQ2Fzc2llJyxcbiAgJ0ZyYW5jZXNjYScsXG4gICdNaWxseScsXG4gICdDYXJsb3MnLFxuICAnUmljYXJkbycsXG5dXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlbWFpbmluZ0hleGVzOiBIZXhbXVxuICBwcml2YXRlIG5leHRVbml0SWQ6IFVuaXRJZCA9IDFcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucmVtYWluaW5nSGV4ZXMgPSBBcnJheS5mcm9tKHdvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0ID0+IHtcbiAgICBjb25zdCBpZCA9IHRoaXMubmV4dFVuaXRJZCsrXG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIGNvbnN0IG5hbWUgPSByYW5kb21FbGVtZW50KExMQU1BX05BTUVTKVxuICAgIHJldHVybiBuZXcgVW5pdCh7XG4gICAgICBpZCxcbiAgICAgIHBsYXllcklkLFxuICAgICAgbmFtZSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZU1vdW50YWluID0gKCk6IEhleCA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIHJldHVybiBsb2NhdGlvblxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlTW91bnRhaW5zID0gKCk6IEhleFtdID0+IFIucmFuZ2UoMSwgMTApLm1hcCh0aGlzLmdlbmVyYXRlTW91bnRhaW4pXG5cbiAgcHVibGljIGdlbmVyYXRlVW5pdHMgPSAoKTogVW5pdFtdID0+XG4gICAgUi5jaGFpbigocGxheWVyKSA9PiBbdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKSwgdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKV0sIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi93b3JsZC1hY3Rpb24taGFuZGxlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBXb3JsZEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZU93bmVyIHtcbiAgcHVibGljIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWRcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHdvcmxkQWN0aW9uSGFuZGxlciA9IG5ldyBXb3JsZEFjdGlvbkhhbmRsZXIodGhpcy53b3JsZFN0YXRlLCBwbGF5ZXJJZCwgdGhpcy5uZXh0V29ybGRFdmVudElkKVxuICAgIGNvbnN0IGV2ZW50cyA9IHdvcmxkQWN0aW9uSGFuZGxlci5jYWxjdWxhdGVXb3JsZEV2ZW50cyhhY3Rpb24pXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IHByZXZpb3VzV29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgICAgdGhpcy53b3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZVxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZSlcbiAgICB9XG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkICs9IGV2ZW50cy5sZW5ndGhcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5cbmNvbnN0IHBhZGRpbmcgPSAxMFxuY29uc3QgbWluaW11bVdpZHRoID0gMjAwXG5jb25zdCBtaW5pbXVtSGVpZ2h0ID0gNTBcblxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KVxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKVxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApXG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXG4gICAgICAudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmdcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgcGFkZGluZ1xuXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gbWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IG1pbmltdW1XaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodFxuXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljaylcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpXG4gIH1cblxuICBwdWJsaWMgc2V0WSh2YWx1ZT86IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMubGFiZWwuc2V0WSh2YWx1ZSlcbiAgICByZXR1cm4gc3VwZXIuc2V0WSh2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnXG5cbmV4cG9ydCBjb25zdCBmaXJlQW5kRm9yZ2V0ID0gPFQ+KGFzeW5jVGFzazogKCkgPT4gUHJvbWlzZTxUPik6IHZvaWQgPT4ge1xuICBhc3luY1Rhc2soKVxufVxuXG5leHBvcnQgY29uc3Qgd2l0aFRpbWVvdXQgPSAodGltZW91dDogbnVtYmVyKSA9PiA8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2U8VD4gPT5cbiAgQmx1ZWJpcmQuUHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRpbWVvdXQodGltZW91dClcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZTxUPiA9ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZFxuZXhwb3J0IHR5cGUgUmVqZWN0ID0gKHJlYXNvbj86IGFueSkgPT4gdm9pZFxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXNlVG9Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKHNlcmlhbGlzZVRvSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGV4JyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV29ybGRNYXApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRNYXAnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1dvcmxkU3RhdGUnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBVbml0KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1VuaXQnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIaXRQb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGl0UG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQWN0aW9uUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0FjdGlvblBvaW50cycgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdQbGF5ZXInIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gc2VyaWFsaXNlVG9Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXNlRnJvbUpzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZGVzZXJpYWxpc2VGcm9tSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdIZXgnKSB7XG4gICAgICAgIHJldHVybiBIZXguZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnV29ybGRNYXAnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZE1hcC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdXb3JsZFN0YXRlJykge1xuICAgICAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdVbml0Jykge1xuICAgICAgICByZXR1cm4gVW5pdC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdBY3Rpb25Qb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBBY3Rpb25Qb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnSGl0UG9pbnRzJykge1xuICAgICAgICByZXR1cm4gSGl0UG9pbnRzLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1BsYXllcicpIHtcbiAgICAgICAgcmV0dXJuIFBsYXllci5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzZXJpYWxpc2VGcm9tSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVHdlZW4gPSBQaGFzZXIuVHdlZW5zLlR3ZWVuXG5cbmV4cG9ydCBjb25zdCBwbGF5VHdlZW4gPSAodHdlZW46IFR3ZWVuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdHdlZW4uc2V0Q2FsbGJhY2soJ29uQ29tcGxldGUnLCByZXNvbHZlLCBbXSkucGxheSgpKVxuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEluY2x1c2l2ZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50RXhjbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUVsZW1lbnQgPSA8VD4oYXJyYXk6IFRbXSk6IFQgPT4gYXJyYXlbcmFuZG9tSW50RXhjbHVzaXZlKDAsIGFycmF5Lmxlbmd0aCldXG4iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT4gKG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gbm90aGluZyA6IGp1c3Qob3B0aW9uKSlcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pXG4iLCJleHBvcnQgY2xhc3MgVW5yZWFjaGFibGVDYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBuZXZlcikge1xuICAgIHN1cGVyKGBVbnJlYWNoYWJsZSBjYXNlOiAke3ZhbHVlfWApXG4gIH1cbn1cbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSGV4LCBIZXhWZWN0b3IgfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGVudW0gSGV4RGlyZWN0aW9uIHtcbiAgRUFTVCA9ICdFQVNUJyxcbiAgV0VTVCA9ICdXRVNUJyxcbiAgTk9SVEhfRUFTVCA9ICdOT1JUSF9FQVNUJyxcbiAgU09VVEhfRUFTVCA9ICdTT1VUSF9FQVNUJyxcbiAgTk9SVEhfV0VTVCA9ICdOT1JUSF9XRVNUJyxcbiAgU09VVEhfV0VTVCA9ICdTT1VUSF9XRVNUJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9ESVJFQ1RJT05TID0gW1xuICBIZXhEaXJlY3Rpb24uRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9FQVNULFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0VW5pdFZlY3RvciA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleFZlY3RvciA9PiB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIDEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAxKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZGlyZWN0aW9uKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgZ2V0VW5pdFZlY3RvciwgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi9oZXgtZGlyZWN0aW9uJ1xuXG5leHBvcnQgY2xhc3MgSGV4IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGdldCB6KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC10aGlzLnggLSB0aGlzLnlcbiAgfVxuXG4gIHB1YmxpYyBwbHVzID0gKHRoYXQ6IEhleCk6IEhleCA9PiBuZXcgSGV4KHRoaXMueCArIHRoYXQueCwgdGhpcy55ICsgdGhhdC55KVxuXG4gIHB1YmxpYyBuZWlnaGJvdXJzID0gKCk6IEhleFtdID0+IEhleC5ORUlHSEJPVVJTLm1hcCh0aGlzLnBsdXMpXG5cbiAgcHVibGljIGlzQWRqYWNlbnRUbyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IFIuaW5jbHVkZXModGhhdCwgdGhpcy5uZWlnaGJvdXJzKCkpXG5cbiAgcHVibGljIGRpc3RhbmNlVG8gPSAodGhhdDogSGV4KTogbnVtYmVyID0+XG4gICAgKE1hdGguYWJzKHRoaXMueCAtIHRoYXQueCkgKyBNYXRoLmFicyh0aGlzLnkgLSB0aGF0LnkpICsgTWF0aC5hYnModGhpcy56IC0gdGhhdC56KSkgLyAyXG5cbiAgcHJpdmF0ZSBzdGF0aWMgTkVJR0hCT1VSUzogSGV4W10gPSBbXG4gICAgbmV3IEhleCgwLCAxKSxcbiAgICBuZXcgSGV4KDEsIDApLFxuICAgIG5ldyBIZXgoMSwgLTEpLFxuICAgIG5ldyBIZXgoMCwgLTEpLFxuICAgIG5ldyBIZXgoLTEsIDApLFxuICAgIG5ldyBIZXgoLTEsIDEpLFxuICBdXG5cbiAgcHVibGljIGVxdWFscyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IHRoaXMueCA9PT0gdGhhdC54ICYmIHRoaXMueSA9PT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ28gPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXggPT4gdGhpcy5wbHVzKGdldFVuaXRWZWN0b3IoZGlyZWN0aW9uKSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGV4ID0+IG5ldyBIZXgoanNvbi54LCBqc29uLnkpXG59XG5cbmV4cG9ydCB0eXBlIEhleFZlY3RvciA9IEhleFxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBIaXRQb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIGRhbWFnZSA9IChwb2ludHM6IG51bWJlcik6IEhpdFBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEhpdFBvaW50cyA9PlxuICAgIG5ldyBIaXRQb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQsIG1heDogdGhpcy5tYXggfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhpdFBvaW50cyA9PiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDoganNvbi5jdXJyZW50LCBtYXg6IGpzb24ubWF4IH0pXG59XG4iLCJpbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1dPUkxEX1NUQVRFOiBXb3JsZFN0YXRlID0gbmV3IFdvcmxkU3RhdGUoe1xuICB0dXJuOiAwLFxuICBtYXA6IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiAxMCwgaGVpZ2h0OiA2IH0pLFxuICBwbGF5ZXJzOiBbXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogSE9TVF9QTEFZRVJfSUQsXG4gICAgICBuYW1lOiAnUGxheWVyIDEnLFxuICAgICAgZW5kZWRUdXJuOiBmYWxzZSxcbiAgICB9KSxcbiAgXSxcbiAgdW5pdHM6IFtdLFxufSlcbiIsImV4cG9ydCBjb25zdCBIT1NUX1BMQVlFUl9JRCA9IDFcblxuZXhwb3J0IHR5cGUgUGxheWVySWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIHJlYWRvbmx5IGlkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG4gIHJlYWRvbmx5IGRlZmVhdGVkOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgZW5kZWRUdXJuID0gZmFsc2UsXG4gICAgZGVmZWF0ZWQgPSBmYWxzZSxcbiAgfToge1xuICAgIGlkOiBQbGF5ZXJJZFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGVuZGVkVHVybj86IGJvb2xlYW5cbiAgICBkZWZlYXRlZD86IGJvb2xlYW5cbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmVuZGVkVHVybiA9IGVuZGVkVHVyblxuICAgIHRoaXMuZGVmZWF0ZWQgPSBkZWZlYXRlZFxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGVuZGVkVHVybiA9IHRoaXMuZW5kZWRUdXJuLFxuICAgIGRlZmVhdGVkID0gdGhpcy5kZWZlYXRlZCxcbiAgfTogeyBpZD86IFBsYXllcklkOyBuYW1lPzogc3RyaW5nOyBlbmRlZFR1cm4/OiBib29sZWFuOyBkZWZlYXRlZD86IGJvb2xlYW4gfSA9IHt9KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBlbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZCxcbiAgICB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGlkOiB0aGlzLmlkLCBuYW1lOiB0aGlzLm5hbWUsIGVuZGVkVHVybjogdGhpcy5lbmRlZFR1cm4sIGRlZmVhdGVkOiB0aGlzLmRlZmVhdGVkIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBQbGF5ZXIgPT5cbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiBqc29uLmlkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgZW5kZWRUdXJuOiBqc29uLmVuZGVkVHVybixcbiAgICAgIGRlZmVhdGVkOiBqc29uLmRlZmVhdGVkLFxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4vYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4vaGl0LXBvaW50cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFVuaXRJZCA9IG51bWJlclxuXG5leHBvcnQgY2xhc3MgVW5pdCB7XG4gIHJlYWRvbmx5IGlkOiBVbml0SWRcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBsb2NhdGlvbjogSGV4XG4gIHJlYWRvbmx5IGhpdFBvaW50czogSGl0UG9pbnRzXG4gIHJlYWRvbmx5IGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIHBsYXllcklkLFxuICAgIG5hbWUsXG4gICAgbG9jYXRpb24sXG4gICAgaGl0UG9pbnRzLFxuICAgIGFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkOiBVbml0SWRcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuICB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkPzogVW5pdElkXG4gICAgcGxheWVySWQ/OiBQbGF5ZXJJZFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBsb2NhdGlvbj86IEhleFxuICAgIGhpdFBvaW50cz86IEhpdFBvaW50c1xuICAgIGFjdGlvblBvaW50cz86IEFjdGlvblBvaW50c1xuICB9ID0ge30pOiBVbml0ID0+IG5ldyBVbml0KHsgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMgfSlcblxuICBwdWJsaWMgbW92ZSA9IChsb2NhdGlvbjogSGV4LCBhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGxvY2F0aW9uLCBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVkdWNlQWN0aW9uUG9pbnRzID0gKGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZnJlc2hBY3Rpb25Qb2ludHMgPSAoKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZnJlc2goKSB9KVxuXG4gIHB1YmxpYyBnZXQgaGFzVW5zcGVudEFjdGlvblBvaW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDBcbiAgfVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgaWQ6IHRoaXMuaWQsXG4gICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLnRvSnNvbigpLFxuICAgIGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMudG9Kc29uKCksXG4gICAgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy50b0pzb24oKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIHBsYXllcklkOiBqc29uLnBsYXllcklkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgbG9jYXRpb246IEhleC5mcm9tSnNvbihqc29uLmxvY2F0aW9uKSxcbiAgICAgIGhpdFBvaW50czogSGl0UG9pbnRzLmZyb21Kc29uKGpzb24uaGl0UG9pbnRzKSxcbiAgICAgIGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzLmZyb21Kc29uKGpzb24uYWN0aW9uUG9pbnRzKSxcbiAgICB9KVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQ2hhdFdvcmxkRXZlbnQsXG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIEdhbWVPdmVyV29ybGRFdmVudCxcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQsXG4gIFBsYXllckRlZmVhdGVkV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IGNhbkF0dGFja09jY3VyIH0gZnJvbSAnLi4vc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNvbnN0IGFwcGx5RXZlbnQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgcmV0dXJuIGhhbmRsZUluaXRpYWxpc2UoZXZlbnQpXG4gICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckFkZGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJDaGFuZ2VkTmFtZSc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lU3RhcnRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckRlZmVhdGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgIHJldHVybiBoYW5kbGVOZXdUdXJuKHN0YXRlKVxuICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lT3ZlcihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnY2hhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ2hhdChzdGF0ZSwgZXZlbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihldmVudClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbml0aWFsaXNlID0gKGV2ZW50OiBJbml0aWFsaXNlV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoZXZlbnQuaWQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbml0aWFsaXNlIG11c3QgYmUgdGhlIGZpcnN0IGV2ZW50YClcbiAgfVxuICByZXR1cm4gZXZlbnQuc3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQWRkZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gZXZlbnQucGxheWVySWQsIHN0YXRlLnBsYXllcnMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQbGF5ZXIgSUQgYWxyZWFkeSBpbiB1c2VgKVxuICB9XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoeyBpZDogcGxheWVySWQsIG5hbWU6IGBQbGF5ZXIgJHtwbGF5ZXJJZH1gIH0pXG4gIHJldHVybiBzdGF0ZS5hZGRQbGF5ZXIocGxheWVyKVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZSA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkLCBuYW1lIH0gPSBldmVudFxuICBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IG5hbWUgfSkpXG59XG5cbmNvbnN0IGdldFBsYXllciA9IChzdGF0ZTogV29ybGRTdGF0ZSwgcGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyID0+IHtcbiAgY29uc3QgcGxheWVyID0gc3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgaWYgKCFwbGF5ZXIpIHRocm93IG5ldyBFcnJvcihgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gKVxuICByZXR1cm4gcGxheWVyXG59XG5cbmNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgR2FtZSBhbHJlYWR5IHN0YXJ0ZWRgKVxuICB9XG4gIHJldHVybiBzdGF0ZVxuICAgIC5jb3B5KHsgdHVybjogMSwgdW5pdHM6IGV2ZW50LnVuaXRzIH0pXG4gICAgLnVwZGF0ZVdvcmxkTWFwKChtYXApID0+IG1hcC5jb3B5KHsgbW91bnRhaW5zOiBldmVudC5tb3VudGFpbnMgfSkpXG4gICAgLmFkZFdvcmxkTG9nKCdMZXQgYmF0dGxlIGNvbW1lbmNlIScpXG59XG5cbmNvbnN0IGhhbmRsZVVuaXRNb3ZlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB1bml0SWQsIHBsYXllcklkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YClcbiAgfVxuICBpZiAoIXN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YClcbiAgfVxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YClcbiAgfVxuICBpZiAoIXVuaXQubG9jYXRpb24uZXF1YWxzKGZyb20pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFVuaXQgaXMgbm90IGluIHRoZSBleHBlY3RlZCBsb2NhdGlvbiBmb3IgbW92ZW1lbnQuIFVuaXQgaXMgYXQgJHt1bml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2Zyb219YCxcbiAgICApXG4gIH1cbiAgY29uc3QgdG9Vbml0ID0gc3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKVxuICBpZiAodG9Vbml0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gYWxyZWFkeS1vY2N1cGllZCBoZXhgKVxuICB9XG4gIGlmICh1bml0LnBsYXllcklkICE9PSBwbGF5ZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhdHRlbXB0IHRvIG1vdmUgdW5pdCBvZiBhbm90aGVyIHBsYXllcmApXG4gIH1cbiAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgKVxuICB9XG4gIHJldHVybiBzdGF0ZS5yZXBsYWNlVW5pdCh1bml0LmlkLCB1bml0Lm1vdmUodG8sIGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSlcbn1cblxuY29uc3QgaGFuZGxlQ29tYmF0ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogQ29tYmF0V29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcblxuICBjb25zdCBhdHRhY2tlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXIudW5pdElkKVxuICBpZiAoIWF0dGFja2VyVW5pdCkgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHthdHRhY2tlci51bml0SWR9YClcbiAgaWYgKCFhdHRhY2tlclVuaXQubG9jYXRpb24uZXF1YWxzKGF0dGFja2VyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBsb2NhdGlvbiBmb3IgYXR0YWNrZXIuIEF0dGFja2luZyB1bml0ICR7YXR0YWNrZXJVbml0LmlkfSBpcyBhdCBsb2NhdGlvbiAke2F0dGFja2VyVW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHthdHRhY2tlci5sb2NhdGlvbn1gLFxuICAgIClcblxuICBjb25zdCBkZWZlbmRlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXIudW5pdElkKVxuICBpZiAoIWRlZmVuZGVyVW5pdCkgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlci51bml0SWR9YClcbiAgaWYgKCFkZWZlbmRlclVuaXQubG9jYXRpb24uZXF1YWxzKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBsb2NhdGlvbiBmb3IgZGVmZW5kZXIuIERlZmVuZGluZyB1bml0ICR7ZGVmZW5kZXJVbml0LmlkfSBpcyBhdCBsb2NhdGlvbiAke2RlZmVuZGVyVW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHtkZWZlbmRlci5sb2NhdGlvbn1gLFxuICAgIClcblxuICBpZiAoYXR0YWNrZXJVbml0LnBsYXllcklkID09PSBkZWZlbmRlclVuaXQucGxheWVySWQpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYClcbiAgaWYgKCFjYW5BdHRhY2tPY2N1cihldmVudC5hdHRhY2tUeXBlLCBzdGF0ZS5tYXAsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgY29tYmF0IG9mIHR5cGUgJHtldmVudC5hdHRhY2tUeXBlfSBiZXR3ZWVuIGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YCxcbiAgICApXG4gIGlmIChhdHRhY2tlclVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWApXG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGVcblxuICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGF0dGFja2VyVW5pdC5pZClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB1cGRhdGVkQXR0YWNrZXIgPSBhdHRhY2tlclVuaXQuZGFtYWdlKGF0dGFja2VyLmRhbWFnZSkucmVkdWNlQWN0aW9uUG9pbnRzKGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoYXR0YWNrZXJVbml0LmlkLCB1cGRhdGVkQXR0YWNrZXIpXG4gIH1cblxuICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGRlZmVuZGVyVW5pdC5pZClcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KGRlZmVuZGVyVW5pdC5pZCwgZGVmZW5kZXJVbml0LmRhbWFnZShkZWZlbmRlci5kYW1hZ2UpKVxuICB9XG5cbiAgaWYgKGRlZmVuZGVyLmtpbGxlZCkge1xuICAgIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7ZGVmZW5kZXJVbml0Lm5hbWV9IHdhcyB0YWtlbiBvdXQgaW4gYSBzdWljaWRlIGF0dGFjayBieSAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2RlZmVuZGVyVW5pdC5uYW1lfSB3YXMgYnJ1dGFsbHkgbXVyZGVyZWQgYnkgJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHthdHRhY2tlclVuaXQubmFtZX0gZGllZCBpbiBhIGZ1dGlsZSBhdHRlbXB0IHRvIHRha2Ugb24gJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2ZXJiID0gZXZlbnQuYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/ICdhdHRhY2tlZCcgOiAnc3BhdCBhdCdcbiAgICBjb25zdCB0YWtpbmdEYW1hZ2VDbGF1c2UgPSBhdHRhY2tlci5kYW1hZ2UgPT09IDAgPyAnJyA6IGAgYW5kIHRha2luZyAke2F0dGFja2VyLmRhbWFnZX0gZGFtYWdlYFxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHthdHRhY2tlclVuaXQubmFtZX0gJHt2ZXJifSAke2RlZmVuZGVyVW5pdC5uYW1lfSwgY2F1c2luZyAke2RlZmVuZGVyLmRhbWFnZX0gZGFtYWdlJHt0YWtpbmdEYW1hZ2VDbGF1c2V9LmBcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckVuZGVkVHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckRlZmVhdGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGNvbnN0IHBsYXllciA9IGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZVxuICAgIC51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZGVmZWF0ZWQ6IHRydWUgfSkpXG4gICAgLmFkZFdvcmxkTG9nKGAke3BsYXllci5uYW1lfSBoYXMgYmVlbiB2YW5xdWlzaGVkLmApXG59XG5cbmNvbnN0IGhhbmRsZU5ld1R1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLm5ld1R1cm4oKS5hZGRXb3JsZExvZyhgVHVybiAke3N0YXRlLnR1cm4gKyAxfSBoYXMgYmVndW4uYClcblxuY29uc3QgaGFuZGxlR2FtZU92ZXIgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lT3ZlcldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB2aWN0b3IgfSA9IGV2ZW50XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlLmdhbWVPdmVyKHZpY3RvcilcbiAgaWYgKHZpY3Rvcikge1xuICAgIGNvbnN0IHZpY3RvclBsYXllciA9IGdldFBsYXllcihzdGF0ZSwgdmljdG9yKVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYPCfj4YgJHt2aWN0b3JQbGF5ZXIubmFtZX0gaXMgdmljdG9yaW91cyFgKVxuICB9IGVsc2Uge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYFRoZXJlIGFyZSBubyB3aW5uZXJzIGluIHdhci5gKVxuICB9XG4gIHJldHVybiBuZXdTdGF0ZVxufVxuXG5jb25zdCBoYW5kbGVDaGF0ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogQ2hhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLmFkZFdvcmxkTG9nKGBbJHtzdGF0ZS5nZXRQbGF5ZXIoZXZlbnQucGxheWVySWQpLm5hbWV9XSAke2V2ZW50Lm1lc3NhZ2V9YClcbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5cbmV4cG9ydCBjbGFzcyBXb3JsZE1hcCB7XG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXJcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXJcbiAgcmVhZG9ubHkgbW91bnRhaW5zOiBIZXhbXVxuXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCwgbW91bnRhaW5zID0gW10gfTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgbW91bnRhaW5zPzogSGV4W10gfSkge1xuICAgIGFzc2VydCh3aWR0aCA+IDApXG4gICAgYXNzZXJ0KGhlaWdodCA+IDApXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLm1vdW50YWlucyA9IG1vdW50YWluc1xuICB9XG5cbiAgcHVibGljIGlzSW5Cb3VuZHMgPSAoaGV4OiBIZXgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBxID0gaGV4LnggKyBNYXRoLmZsb29yKGhleC55IC8gMilcbiAgICByZXR1cm4gMCA8PSBxICYmIHEgPCB0aGlzLndpZHRoICYmIDAgPD0gaGV4LnkgJiYgaGV4LnkgPCB0aGlzLmhlaWdodFxuICB9XG5cbiAgcHVibGljICpnZXRNYXBIZXhlcygpOiBJdGVyYWJsZUl0ZXJhdG9yPEhleD4ge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuaGVpZ2h0OyByb3crKylcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyb3cgLyAyKSArIGNvbHVtblxuICAgICAgICB5aWVsZCBuZXcgSGV4KHgsIHJvdylcbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICB3aWR0aCA9IHRoaXMud2lkdGgsXG4gICAgaGVpZ2h0ID0gdGhpcy5oZWlnaHQsXG4gICAgbW91bnRhaW5zID0gdGhpcy5tb3VudGFpbnMsXG4gIH06IHsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlcjsgbW91bnRhaW5zPzogSGV4W10gfSA9IHt9KTogV29ybGRNYXAgPT5cbiAgICBuZXcgV29ybGRNYXAoeyB3aWR0aCwgaGVpZ2h0LCBtb3VudGFpbnMgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgbW91bnRhaW5zOiB0aGlzLm1vdW50YWlucy5tYXAoKG1vdW50YWluKSA9PiBtb3VudGFpbi50b0pzb24oKSksXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBXb3JsZE1hcCA9PlxuICAgIG5ldyBXb3JsZE1hcCh7IHdpZHRoOiBqc29uLndpZHRoLCBoZWlnaHQ6IGpzb24uaGVpZ2h0LCBtb3VudGFpbnM6IGpzb24ubW91bnRhaW5zLm1hcChIZXguZnJvbUpzb24pIH0pXG5cbiAgcHVibGljIGlzTW91bnRhaW4gPSAoaGV4OiBIZXgpOiBib29sZWFuID0+IFIuY29udGFpbnMoaGV4LCB0aGlzLm1vdW50YWlucylcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuL3VuaXQnXG5pbXBvcnQgeyBqdXN0LCBNYXliZSwgT3B0aW9uLCB0b01heWJlLCB0b09wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50cydcblxuaW50ZXJmYWNlIEdhbWVPdmVySW5mbyB7XG4gIHZpY3RvcjogT3B0aW9uPFBsYXllcklkPlxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZSB7XG4gIHJlYWRvbmx5IHR1cm46IG51bWJlciAvKiB0dXJuID0gMCBiZWZvcmUgdGhlIGdhbWUgaGFzIHN0YXJ0ZWQgKi9cbiAgcmVhZG9ubHkgbWFwOiBXb3JsZE1hcFxuICByZWFkb25seSB1bml0czogVW5pdFtdXG4gIHJlYWRvbmx5IHBsYXllcnM6IFBsYXllcltdXG4gIHJlYWRvbmx5IGdhbWVPdmVySW5mbz86IEdhbWVPdmVySW5mb1xuICByZWFkb25seSB3b3JsZExvZzogc3RyaW5nW11cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgdHVybixcbiAgICBtYXAsXG4gICAgdW5pdHMsXG4gICAgcGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8sXG4gICAgd29ybGRMb2cgPSBbXSxcbiAgfToge1xuICAgIHR1cm46IG51bWJlclxuICAgIG1hcDogV29ybGRNYXBcbiAgICB1bml0czogVW5pdFtdXG4gICAgcGxheWVyczogUGxheWVyW11cbiAgICBnYW1lT3ZlckluZm8/OiBPcHRpb248R2FtZU92ZXJJbmZvPlxuICAgIHdvcmxkTG9nPzogc3RyaW5nW11cbiAgfSkge1xuICAgIHRoaXMudHVybiA9IHR1cm5cbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMudW5pdHMgPSB1bml0c1xuICAgIHRoaXMucGxheWVycyA9IHBsYXllcnNcbiAgICB0aGlzLmdhbWVPdmVySW5mbyA9IGdhbWVPdmVySW5mb1xuICAgIHRoaXMud29ybGRMb2cgPSB3b3JsZExvZ1xuICAgIGFzc2VydCh0dXJuID49IDApXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgdHVybiA9IHRoaXMudHVybixcbiAgICBtYXAgPSB0aGlzLm1hcCxcbiAgICB1bml0cyA9IHRoaXMudW5pdHMsXG4gICAgcGxheWVycyA9IHRoaXMucGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8gPSB0b01heWJlKHRoaXMuZ2FtZU92ZXJJbmZvKSxcbiAgICB3b3JsZExvZyA9IHRoaXMud29ybGRMb2csXG4gIH06IHtcbiAgICB0dXJuPzogbnVtYmVyXG4gICAgbWFwPzogV29ybGRNYXBcbiAgICB1bml0cz86IFVuaXRbXVxuICAgIHBsYXllcnM/OiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE1heWJlPEdhbWVPdmVySW5mbz5cbiAgICB3b3JsZExvZz86IHN0cmluZ1tdXG4gIH0gPSB7fSk6IFdvcmxkU3RhdGUgPT4gbmV3IFdvcmxkU3RhdGUoeyB0dXJuLCBtYXAsIHVuaXRzLCBwbGF5ZXJzLCBnYW1lT3ZlckluZm86IHRvT3B0aW9uKGdhbWVPdmVySW5mbyksIHdvcmxkTG9nIH0pXG5cbiAgcHVibGljIGdldCBpc0dhbWVPdmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVySW5mbyAhPT0gdW5kZWZpbmVkXG4gIH1cblxuICBwdWJsaWMgZ2V0IGdhbWVIYXNTdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR1cm4gPiAwXG4gIH1cblxuICBwdWJsaWMgZ2V0UGxheWVySWRzID0gKCk6IFBsYXllcklkW10gPT4gdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuaWQpXG5cbiAgcHVibGljIGlzUGxheWVyRGVmZWF0ZWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKS5sZW5ndGggPT09IDBcblxuICBwdWJsaWMgY2FuUGxheWVyQWN0ID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGVuZGVkVHVybiA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZCk/LmVuZGVkVHVyblxuICAgIHJldHVybiAhZW5kZWRUdXJuICYmIFIuYW55KCh1bml0KSA9PiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMsIHRoaXMuZ2V0VW5pdHNGb3JQbGF5ZXIocGxheWVySWQpKVxuICB9XG5cbiAgcHVibGljIGNhbkFueVBsYXllckFjdCA9ICgpOiBib29sZWFuID0+IFIuYW55KChwbGF5ZXIpID0+IHRoaXMuY2FuUGxheWVyQWN0KHBsYXllci5pZCksIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2V0VW5pdHNGb3JQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogVW5pdFtdID0+IHRoaXMudW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LnBsYXllcklkID09PSBwbGF5ZXJJZClcblxuICBwdWJsaWMgZmluZFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBPcHRpb248UGxheWVyPiA9PiBSLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmlkID09PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllclxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0QnlJZCA9ICh1bml0SWQ6IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQuaWQgPT09IHVuaXRJZCwgdGhpcy51bml0cylcblxuICBwdWJsaWMgZ2V0VW5pdEJ5SWQgPSAodW5pdElkOiBudW1iZXIpOiBVbml0ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgfVxuICAgIHJldHVybiB1bml0XG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IFIuZmluZCgodW5pdCkgPT4gdW5pdC5sb2NhdGlvbi5lcXVhbHMoaGV4KSwgdGhpcy51bml0cylcblxuICBwdWJsaWMgcmVwbGFjZVVuaXQgPSAodW5pdElkOiBVbml0SWQsIHVuaXQ6IFVuaXQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHtcbiAgICAgIHVuaXRzOiBSLmFwcGVuZChcbiAgICAgICAgdW5pdCxcbiAgICAgICAgUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT09IHVuaXRJZCwgdGhpcy51bml0cyksXG4gICAgICApLFxuICAgIH0pXG5cbiAgcHVibGljIHJlbW92ZVVuaXQgPSAodW5pdElkOiBVbml0SWQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgdW5pdHM6IFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9PSB1bml0SWQsIHRoaXMudW5pdHMpIH0pXG5cbiAgcHVibGljIHVwZGF0ZVBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQsIG1vZGlmeTogKHBsYXllcjogUGxheWVyKSA9PiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlUGxheWVyKHBsYXllcklkLCBtb2RpZnkocGxheWVyKSlcbiAgfVxuXG4gIHB1YmxpYyByZXBsYWNlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgcGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBhc3NlcnQocGxheWVySWQgPT09IHBsYXllci5pZClcbiAgICByZXR1cm4gdGhpcy5jb3B5KHtcbiAgICAgIHBsYXllcnM6IFIuYXBwZW5kKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIFIuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5pZCAhPT0gcGxheWVySWQsIHRoaXMucGxheWVycyksXG4gICAgICApLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYWRkUGxheWVyID0gKHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBwbGF5ZXJzOiBSLmFwcGVuZChwbGF5ZXIsIHRoaXMucGxheWVycykgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIHR1cm46IHRoaXMudHVybixcbiAgICBtYXA6IHRoaXMubWFwLnRvSnNvbigpLFxuICAgIHVuaXRzOiB0aGlzLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC50b0pzb24oKSksXG4gICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIudG9Kc29uKCkpLFxuICAgIGdhbWVPdmVySW5mbzogdGhpcy5nYW1lT3ZlckluZm8sXG4gICAgd29ybGRMb2c6IHRoaXMud29ybGRMb2csXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBXb3JsZFN0YXRlID0+XG4gICAgbmV3IFdvcmxkU3RhdGUoe1xuICAgICAgdHVybjoganNvbi50dXJuLFxuICAgICAgbWFwOiBXb3JsZE1hcC5mcm9tSnNvbihqc29uLm1hcCksXG4gICAgICB1bml0czoganNvbi51bml0cy5tYXAoKHVuaXQ6IGFueSkgPT4gVW5pdC5mcm9tSnNvbih1bml0KSksXG4gICAgICBwbGF5ZXJzOiBqc29uLnBsYXllcnMubWFwKCh1bml0OiBhbnkpID0+IFBsYXllci5mcm9tSnNvbih1bml0KSksXG4gICAgICBnYW1lT3ZlckluZm86IGpzb24uZ2FtZU92ZXJJbmZvLFxuICAgICAgd29ybGRMb2c6IGpzb24ud29ybGRMb2csXG4gICAgfSlcblxuICBwdWJsaWMgaXNWYWxpZFBsYXllcklkID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4gUi5hbnkoKHBsYXllcikgPT4gcGxheWVyLmlkID09PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnYW1lT3ZlciA9ICh2aWN0b3I6IE9wdGlvbjxudW1iZXI+KTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBnYW1lT3ZlckluZm86IGp1c3QoeyB2aWN0b3IgfSkgfSlcblxuICBwdWJsaWMgYXBwbHlFdmVudCA9IChldmVudDogV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4gYXBwbHlFdmVudCh0aGlzLCBldmVudClcblxuICBwdWJsaWMgYXBwbHlFdmVudHMgPSAoZXZlbnRzOiBXb3JsZEV2ZW50W10pOiBXb3JsZFN0YXRlID0+IHtcbiAgICBsZXQgc3RhdGU6IFdvcmxkU3RhdGUgPSB0aGlzXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIHN0YXRlID0gc3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxuICBwdWJsaWMgYWRkV29ybGRMb2cgPSAobWVzc2FnZTogc3RyaW5nKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyB3b3JsZExvZzogUi5hcHBlbmQobWVzc2FnZSwgdGhpcy53b3JsZExvZykgfSlcblxuICBwdWJsaWMgdXBkYXRlV29ybGRNYXAgPSAobW9kaWZ5OiAobWFwOiBXb3JsZE1hcCkgPT4gV29ybGRNYXApOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IG1hcDogbW9kaWZ5KHRoaXMubWFwKSB9KVxuXG4gIHB1YmxpYyBuZXdUdXJuID0gKCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoe1xuICAgICAgdHVybjogdGhpcy50dXJuICsgMSxcbiAgICAgIHVuaXRzOiB0aGlzLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC5yZWZyZXNoQWN0aW9uUG9pbnRzKCkpLFxuICAgICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogZmFsc2UgfSkpLFxuICAgIH0pXG5cbiAgcHVibGljIGdldFNvcnRlZFBsYXllcnMgPSAoKTogUGxheWVyW10gPT4gUi5zb3J0QnkoKHBsYXllcikgPT4gcGxheWVyLmlkLCB0aGlzLnBsYXllcnMpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9